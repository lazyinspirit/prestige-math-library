---
id: ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character
kind: example
title: "Inducing a nontrivial character of a three-cycle subgroup of $S_3$ gives an irreducible degree-two character"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, def-induced-character-of-a-complex-representation, thm-frobenius-formula-for-induced-characters]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 4.11"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  precheck: pass
---

## Example

Let $H=A_3=\langle(123)\rangle\le S_3$, let $\omega=e^{2\pi i/3}$, and let
$\theta$ be the nontrivial linear character of $H$ with
$\theta((123))=\omega$ and $\theta((132))=\omega^2$. Then
$\operatorname{Ind}_{A_3}^{S_3}\theta$ has values

$$
\bigl(2,0,-1\bigr)
$$

on the conjugacy classes $\{e\}$, the transpositions, and the $3$-cycles
respectively. Its self-inner-product is $1$, so it is irreducible of degree $2$.

## Facts & Assumptions

**Given:** The subgroup $A_3=\langle(123)\rangle\le S_3$ and the nontrivial
character $\theta$ defined in the Example.

[F1] The induced character is computed by Frobenius' formula
([[thm-frobenius-formula-for-induced-characters]]).

[F2] A complex character is irreducible if and only if its self-inner-product
is $1$ ([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

[F3] The notation $\operatorname{Ind}_{A_3}^{S_3}\theta$ is the induced
character from [[def-induced-character-of-a-complex-representation]].

## Verification

**Proof technique:** direct.

1.1 Since $[S_3:A_3]=2$, Frobenius' formula [F1] at the identity gives $\operatorname{Ind}_{A_3}^{S_3}\theta(e)=2$. If $g$ is a transposition, no conjugate of $g$ lies in $A_3$, so Frobenius' formula gives $\operatorname{Ind}_{A_3}^{S_3}\theta(g)=0$. [F1, F3, given]
1.2 If $g$ is a $3$-cycle, then $A_3$ is normal in $S_3$, so every $x\in S_3$ satisfies $x^{-1}gx\in A_3$. Exactly three of those conjugates equal $(123)$ and three equal $(132)$, so [F1] gives $\operatorname{Ind}_{A_3}^{S_3}\theta(g)=(3\omega+3\omega^2)/3=\omega+\omega^2=-1$. [F1, given, algebra]
2.1 Therefore the induced character has values $(2,0,-1)$ on the three class types of $S_3$. Its self-inner-product is $(1/6)(2^2+3\cdot 0^2+2\cdot (-1)^2)=1$, so [F2] makes it irreducible; the value at $e$ shows that its degree is $2$. [F2, step 1.1, step 1.2, algebra] ∎
