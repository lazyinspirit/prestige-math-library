---
id: thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms
kind: theorem
title: "The finite Hecke algebra as a convolution corner and its endomorphism interpretation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-spherical-principal-series-is-the-flag-permutation-module
  - prop-endomorphisms-form-a-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Section 5, the Hecke algebra H(G,B) = e C[G] e, its standard basis T_w, printed pp. 44-45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1, Lemma 2.1 (C[B\\G]^B is the endomorphism algebra of C[B\\G]), PDF p. 3"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Charles W. Curtis, Representations of Hecke Algebras (Asterisque 168, SMF 1988) - Proposition (1.6), printed p. 18"
      url: "https://www.numdam.org/article/AST_1988__168__13_0.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $q$ be a prime power and put
$G=\operatorname{GL}_n(\mathbb F_q)$ with upper triangular Borel $B\le G$, and
let $e_B:=|B|^{-1}\sum_{b\in B}b\in\mathbb C[G]$. Let
$H:=e_B\,\mathbb C[G]\,e_B$ be the **finite Hecke algebra**, a corner of the
group algebra with the group-algebra multiplication. Then:

1. the left ideal $\mathbb C[G]e_B$ is isomorphic to
$I(1)=R_T^G(1)\cong\mathbb C[G/B]$ as a left $\mathbb C[G]$-module, via the
idempotent model $\mathbb C[G]e_B\cong\mathbb C[G]\otimes_{\mathbb C[B]}\mathbb C$
and the spherical identification
([[lem-spherical-principal-series-is-the-flag-permutation-module]]);
2. for $a\in H$ the right multiplication $\rho_a(ye_B):=ye_Ba$ is a
$\mathbb C[G]$-equivariant endomorphism of $\mathbb C[G]e_B$, the assignment
$a\mapsto\rho_a$ is a $\mathbb C$-algebra isomorphism
$$H\;\xrightarrow{\ \sim\ }\;\operatorname{End}_{\mathbb C[G]}\bigl(\mathbb C[G]e_B\bigr)^{\mathrm{op}}\;\cong\;\operatorname{End}_G\bigl(\mathbb C[G/B]\bigr)^{\mathrm{op}},$$
and the map $w\mapsto w^{-1}$ on the standard basis defines an anti-automorphism
of $H$, so that $H\cong H^{\mathrm{op}}$ and the opposite algebra is immaterial
for isomorphism statements;
3. $\dim_{\mathbb C}H=|W|=n!$ and $H$ is semisimple.

All statements are over $\mathbb C$; no choice principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$, its Borel $B$, the group algebra $\mathbb C[G]$, the idempotent $e_B$, the corner $H=e_B\mathbb C[G]e_B$ and the left ideal $\mathbb C[G]e_B$.

[F1] The group algebra $\mathbb C[G]$ is a unital associative $\mathbb C$-algebra with basis the group elements and multiplication the convolution of basis vectors ([[thm-group-ring-is-a-unital-algebra-with-basis-g]]). For $b\in B$ one has $be_B=e_Bb=e_B$, because multiplication by $b$ permutes $B$, and hence $e_B^2=e_B$.

[F2] The permutation module $\mathbb C[G/B]$ and the induced module $\operatorname{Ind}_B^G(1)=I(1)$ are isomorphic as complex $G$-modules ([[lem-spherical-principal-series-is-the-flag-permutation-module]]).

[F3] The $B$-$B$ double cosets are the cells $BP_\sigma B$, they partition $G$, and the map $\sigma\mapsto BP_\sigma B$ is a bijection from $S_n\cong W$ onto them ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

[F4] Maschke's theorem gives invariant complements in every finite-dimensional complex $G$-module. Splitting a nonzero submodule of least positive dimension and inducting on dimension gives a finite direct sum of simples. In particular the finite-dimensional regular module $\mathbb C[G]$ is semisimple ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F5] For a finite-dimensional semisimple $\mathbb C$-algebra $A$ and a finite-dimensional semisimple $A$-module $M$, the endomorphism algebra $E=\operatorname{End}_A(M)$ is semisimple and isomorphic to a finite product of complex matrix algebras ([[lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra]]).

[F6] For any module $M$ the set $\operatorname{End}_{\mathbb C[G]}(M)$ with pointwise addition and composition is a ring, and it is a $\mathbb C$-algebra for the scalar multiplication inherited from $M$ ([[prop-endomorphisms-form-a-ring]]).



## Proof

**Proof technique:** direct.

1.1 For $b\in B$ the right multiplication $x\mapsto xb$ permutes the basis elements of $\mathbb C[G]$, so $e_Bb=|B|^{-1}\sum_{b'}b'b=|B|^{-1}\sum_{b'}b'=e_B$, and likewise $be_B=e_B$; therefore $e_B^2=|B|^{-1}\sum_{b}be_B=e_B$, so $e_B$ is an idempotent fixed by left and right multiplication by elements of $B$. [F1, algebra]

2.1 The map $\mathbb C[G]\to\mathbb C[G]e_B$, $g\mapsto ge_B$, is $\mathbb C[G]$-linear and surjective, and it is constant on the right $B$-orbits by step 1.1, so it factors through $\mathbb C[G]\otimes_{\mathbb C[B]}\mathbb C\cong\mathbb C[G/B]$; the resulting map sends the basis element $gB$ to $ge_B$, so it is an isomorphism of left $\mathbb C[G]$-modules $\mathbb C[G]e_B\cong\mathbb C[G/B]$. Composing with the spherical identification of [F2] gives $\mathbb C[G]e_B\cong I(1)$, which is clause (1). [F2, step 1.1, construct]

2.2 The double cosets $BP_\sigma B$ partition $G$ by [F3], so $\mathbb C[G]$ is the direct sum over $S_n$ of the subspaces $\mathbb C[BP_\sigma B]$, and $H=e_B\mathbb C[G]e_B$ is spanned by the elements $e_Bx e_B$ with $x\in G$; since $e_B(bxb')e_B=(e_Bb)x(b'e_B)=e_Bxe_B$ for $b,b'\in B$ by step 1.1, each double coset contributes the single vector $e_B\dot\sigma e_B$ for its permutation representative. That vector is nonzero: the coefficient of $\dot\sigma$ in $e_B\dot\sigma e_B=|B|^{-2}\sum_{b,b'\in B}b\dot\sigma b'$ is $|B|^{-2}\cdot|B\cap\dot\sigma B\dot\sigma^{-1}|\ge|B|^{-2}>0$, since $b\dot\sigma b'=\dot\sigma$ exactly when $b=\dot\sigma b'^{-1}\dot\sigma^{-1}\in B$, and $b=b'=1$ contributes. Therefore the $n!$ elements $e_B\dot\sigma e_B$, one per double coset, form a basis of $H$, and $\dim_{\mathbb C}H=|W|=n!$: this is the dimension assertion of clause (3). [F3, step 1.1, algebra]

3.1 Let $f:\mathbb C[G]e_B\to\mathbb C[G]e_B$ be $\mathbb C[G]$-linear and put $a:=f(e_B)$. Since $e_B$ acts on $\mathbb C[G]e_B$ by left multiplication and $f$ is linear over $\mathbb C[G]$, one gets $f(ge_B)=ga$ for all $g\in G$; also $e_Ba=a$ and $ae_B=a$ because $a=f(e_B)=f(e_Be_B)=e_Ba$ and $a=f(e_B)\in\mathbb C[G]e_B$. Hence $a\in H$ and $f(g e_B)=(ge_B)a$, so $f$ is the right multiplication $\rho_a$. Conversely, for $a\in H$ the map $\rho_a(ye_B)=ye_Ba$ takes values in $\mathbb C[G]e_Ba\subseteq\mathbb C[G]e_B$ and commutes with left multiplication by $G$, so it is a $\mathbb C[G]$-linear endomorphism, and it satisfies $\rho_a\rho_b=\rho_{ba}$ by associativity. The assignment is therefore a $\mathbb C$-linear bijection $H\to\operatorname{End}_{\mathbb C[G]}(\mathbb C[G]e_B)$ that reverses composition, i.e. a $\mathbb C$-algebra isomorphism onto the opposite algebra; the identification with $\operatorname{End}_G(\mathbb C[G/B])$ is transport along the isomorphism of step 2.1. This is the first part of clause (2). [F6, step 1.1, step 2.1, algebra]

4.1 The $\mathbb C$-linear map $\sum_gc_gg\mapsto\sum_gc_gg^{-1}$ is an anti-automorphism of the algebra $\mathbb C[G]$ because $(gh)^{-1}=h^{-1}g^{-1}$, it fixes $e_B$ because inversion permutes $B$, and it therefore restricts to an algebra anti-automorphism of $H=e_B\mathbb C[G]e_B$; explicitly it sends $e_B\dot w e_B$ to $e_B\dot w^{-1}e_B$. Hence $H\cong H^{\mathrm{op}}$, so the opposite algebra in step 3.1 is isomorphic to $H$ itself and clause (2) is complete. [F1, step 1.1, algebra]

5.1 Finally $H\cong\operatorname{End}_G(\mathbb C[G/B])$ by steps 3.1 and 4.1, and $\mathbb C[G/B]$ is a finite-dimensional semisimple $\mathbb C[G]$-module by [F4]; hence $\operatorname{End}_G(\mathbb C[G/B])$ is a semisimple $\mathbb C$-algebra, a product of complex matrix algebras, by [F5], and so is its opposite, which is $H$. This proves the semisimplicity statement of clause (3); clauses (1)-(3) are now established, and no step selected a basis of $\mathbb C[G/B]$ or of any quotient of $G$, so no choice principle is used. [F4, F5, step 3.1, step 4.1, step 2.2] ∎ 
