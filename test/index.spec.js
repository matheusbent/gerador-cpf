import { describe, it, expect } from "vitest";
import { gerarCPF, gerarDV, validarCPF } from '../src/index.js';

describe( gerarDV.name, () => {

    it( 'lança exceção se o cpf não for string', () => {
        expect( () => {
            gerarDV( 123456789 );
        } ).toThrow( /string/i );
    } );

    it( 'deve ter nove dígitos numéricos', () => {
        expect( () => {
            gerarDV( '1234567890' );
        } ).toThrow( /9/i );

        expect( () => {
            gerarDV( '12345678' );
        } ).toThrow( /9/i );
    } );

    it( 'aceita apenas dígitos numéricos', () => {
        expect( () => {
            gerarDV( '12345678A' );
        } ).toThrow( /numérico/i );

        expect( () => {
            gerarDV( '123.456.7' );
        } ).toThrow( /numérico/i );
    } );

    it( 'gera o DV corretamente', () => {
        const resultado = gerarDV( '062910040' );
        expect( resultado ).toBe( '38' );

        expect( gerarDV( '111111111') ).toBe( '11' );
        expect( gerarDV( '222222222') ).toBe( '22' );
    } );

} );


describe( validarCPF.name, () => {

    it( 'lança exceção se o cpf não for string', () => {
        expect( () => {
            validarCPF( 12345678901 );
        } ).toThrow( /string/i );
    } );

    it( 'deve ter onze dígitos numéricos', () => {
        expect( () => {
            validarCPF( '123456789012' );
        } ).toThrow( /11/i );

        expect( () => {
            validarCPF( '1234567890' );
        } ).toThrow( /11/i );
    } );

    it( 'aceita apenas dígitos numéricos', () => {
        expect( () => {
            validarCPF( '1234567890A' );
        } ).toThrow( /numérico/i );

        expect( () => {
            validarCPF( '123.456.789' );
        } ).toThrow( /numérico/i );
    } );


    it( 'valida o DV corretamente', () => {
        const resultado = validarCPF( '06291004038' );
        expect( resultado ).toBeTruthy();
    } );

} );


describe( gerarCPF.name, () => {

    it( 'gera um CPF correto', () => {
        expect( validarCPF( gerarCPF() ) ).toBeTruthy();
    } );

} );