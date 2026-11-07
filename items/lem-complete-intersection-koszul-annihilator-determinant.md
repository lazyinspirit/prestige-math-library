---
id: lem-complete-intersection-koszul-annihilator-determinant
kind: lemma
title: "The complete-intersection annihilator determinant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-koszul-complex-resolves-a-regular-quotient
  - thm-grothendieck-spectral-sequence
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are assumed for the stated spectral-sequence and injective-resolution construction."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, printed pp. 241–243, uses a dual-different relation; the Koszul determinant calculation is reconstructed here."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be a commutative ring, $S=R\llbracket X_1,\dots,X_d\rrbracket$ for $d\geq0$, and let $f_1,\dots,f_d$ be an $S$-regular sequence in $(X_1,\dots,X_d)$. Put $A=S/(f_1,\dots,f_d)$ and $I=(X_1,\dots,X_d)A$. Write $f_i=\sum_j a_{ij}X_j$ and $\Delta=\det(a_{ij})$ (the empty determinant is one). Then the image of $\Delta$ generates $\operatorname{Ann}_A(I)$ freely as an $R$-module via $A/I=R$. Its augmentation is $\det((\partial f_i/\partial X_j)(0))$.

## Facts & Assumptions

**Given:** The ring, regular sequence, coefficients and augmentation in the Statement.

[A1] The Axiom of Choice and Dependent Choice are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A Koszul complex on a regular sequence is a finite free resolution of its quotient. [[cor-koszul-complex-resolves-a-regular-quotient]]

[F2] The natural Grothendieck spectral sequence computes a composite of left-exact functors when the inner functor carries injectives to acyclic objects, under its stated resolution hypotheses. [[thm-grothendieck-spectral-sequence]]

## Proof

**Proof technique:** compare the two Koszul resolutions through the derived Hom change-of-rings spectral sequence.

1.1 The variables form an $S$-regular sequence, since multiplication by each $X_j$ is injective in the preceding formal-power-series quotient. Thus [F1] gives finite free resolutions $K(X)$ of $R=S/(X)$ and $K(f)$ of $A$. The dual of each Koszul complex is the same complex reversed, with the top exterior bases fixing the signs. Hence $\operatorname{Ext}^q_S(A,S)$ is zero for $q\ne d$ and is $A$ for $q=d$, while $\operatorname{Ext}^d_S(R,S)=R$. This also holds at $d=0$, using empty complexes. [F1, given, construct, algebra]

2.1 Use the functors $F=\operatorname{Hom}_S(A,-)$ and $G=\operatorname{Hom}_A(R,-)$. Restriction of scalars from $A$ to $S$ is exact, so $F$ sends injective $S$-modules to injective $A$-modules: lifting an $A$-linear map into $F(J)$ is the same as lifting its adjoint $S$-linear map into $J$. With injective resolutions supplied by [A1], [F2] gives $E_2^{p,q}=\operatorname{Ext}^p_A(R,\operatorname{Ext}^q_S(A,S))$ converging to $\operatorname{Ext}^{p+q}_S(R,S)$. By step 1.1 only row $q=d$ remains, so the degree-$d$ edge is the isomorphism $R\cong\operatorname{Hom}_A(R,A)=\operatorname{Ann}_A(I)$. Its natural map into $\operatorname{Ext}^d_S(A,S)=A$ is induced by the quotient $A\to R$. [A1, F2, step 1.1, construct, algebra]

3.1 The assignment of the $i$th degree-one generator of $K(f)$ to $\sum_j a_{ij}e_j$ extends by exterior products to a chain map $K(f)\to K(X)$ lifting $A\to R$, because its differential sends the $i$th generator to $f_i$. In top degree it is multiplication by $\det(a_{ij})$. Dualizing, the induced map $\operatorname{Ext}^d_S(R,S)=R\to\operatorname{Ext}^d_S(A,S)=A$ sends $1$ to the image of $\Delta$. Step 2.1 therefore identifies that image with the free $R$-basis of $\operatorname{Ann}_A(I)$. The coefficient of $X_j$ in $f_i$ is $a_{ij}(0)$, so augmentation of $\Delta$ is the displayed derivative determinant. Changing the chosen coefficient matrix may change $\Delta$ modulo $(f)$ only by the same canonical image of $1$. [step 1.1, step 2.1, construct, algebra] ∎
