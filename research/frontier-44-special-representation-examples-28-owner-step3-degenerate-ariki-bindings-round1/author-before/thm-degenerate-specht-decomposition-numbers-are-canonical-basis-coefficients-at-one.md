---
id: thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one
kind: theorem
title: "Degenerate Specht decomposition numbers are canonical basis coefficients at one"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 42
deps: [thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module,
       thm-degenerate-ariki-categorification,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       thm-the-highest-weight-fock-submodule-has-the-qg-global-bases,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       thm-finite-length-grothendieck-groups-have-simple-class-bases]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.3-2.6 (printed pp. 10-16), (2.14)-(2.21), (2.36) and Theorem 2.7: the dual-canonical/canonical/quasi-canonical families, the transition matrices and the decomposition dictionary; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.6 (printed pp. 28-31), Theorem 3.10(ii)-(iii): the standard classes and the decomposition formula in the source's inverse chart; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorems 6.12 and 6.15 (printed pp. 36-41): the Schur images of standards and simples and the intrinsic Specht modules; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Section 8.5 (printed pp. 93-97): the parabolic multiplicity dictionary used to compare standard composition series with the Fock transition matrix; the relevant passages were read."
verification:
  precheck: pass
---

## Statement

Use the actual source chart at parameter $s$: with the monomials $M_A$ and the
dual-canonical vectors $L_A$ of
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], put

$$R_{A,B}(s)=p_{A,B}(-s),\qquad L_B=\sum_AR_{A,B}(s)M_A,\qquad M_B=\sum_Ad_{A,B}(s)L_A . $$

Thus $D(s)=(d_{A,B})$ is the INVERSE of $R(s)$, not its transpose. Also
$P_A=\sum_Bd_{A,B}(s)M_B$.

**(i)** For every Specht label $B\in\mathrm{Col}^\Lambda$ and every simple label
$A\in\mathrm{Std}^\Lambda$ one has $[S(B):D(A)]=d_{A,B}(1)$.

**(ii)** In the usual Specht-row/simple-column notation the rectangular
decomposition matrix is the transpose of $D$ restricted to standard rows; it is
NOT the transpose of the $L$-in-$M$ chart. The full matrix $D$ is unitriangular
on $\mathrm{Col}^\Lambda$, and its square submatrix on standard columns is
unitriangular; in particular $[S(B):D(B)]=1$ only for
$B\in\mathrm{Std}^\Lambda$, since for $B\notin\mathrm{Std}^\Lambda$ the object
$D(B)=0$ is not a simple module label.

**(iii)** Retain the type-$A$ polynomial formula: for the right place action,
$w_A$ is the shortest sorting element on the RIGHT of the ENTRY stabilizer $K$,
$d(A)=w_A^{-1}$ is shortest on the LEFT, and

$$p_{A,B}(s)=s^{\ell(w_B)-\ell(w_A)}\sum_{z\in K}(-1)^{\ell(z)}P_{w_Az,w_B}(s^{-2}),$$

while the COLUMN Levi $J$ is a distinct group; the mixed singular/parabolic
composition matrix is the finite Levi cancellation sum over $C$ column-equivalent
to $B$, $\sum_C(-1)^{\ell(B,C)}P_{d(C)w_0,d(A)w_0}(1)$, and equals
$d_{A,B}(1)$. All categorification multiplicities are ungraded at parameter
one, with the source/library reciprocal convention.

## Facts & Assumptions

**Given:** The tower $H^\Lambda$ and its residue functors, the two
identifications of [[thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module]]
and [[thm-degenerate-ariki-categorification]], and the coefficient dictionary
of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]. We prove
(i)-(iii).

[F1] The classes of simples of a finite-dimensional algebra form a
$\mathbb Z$-basis of $G_0$, with coordinates the composition multiplicities
([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F2] The Schur quotient realizes the identification of
[[thm-degenerate-ariki-categorification]]: the simple classes are indexed by
$\mathrm{Std}^\Lambda$ and the Specht classes satisfy $[S(B)]\mapsto S_B$, with
the quotient exact on the standard quotient of the block.

## Proof

**Proof technique:** direct.

1.1 **The two charts are mutually inverse.** By [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] the vectors $L_B$ and $M_A$ are two $\mathbb Z[s,s^{-1}]$-bases of the finite weight spaces of the Fock module, so the transition matrices $R(s)=(p_{A,B}(-s))$ with $L_B=\sum_AR_{A,B}(s)M_A$ and $D(s)=(d_{A,B})$ with $M_B=\sum_Ad_{A,B}(s)L_A$ satisfy $R(s)D(s)=D(s)R(s)=1$; both are triangular with diagonal entries $1$ on each weight block, and the quasi-canonical vector is $P_A=\sum_Bd_{A,B}(s)M_B$. The polynomial entries and the chart conventions are those of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]. [given, algebra]

1.2 **The type-$A$ polynomial dictionary.** The explicit transition coefficients are given by the type-$A$ formulas of [[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]]: for the right place action, $w_A$ is the shortest sorting element on the RIGHT of the entry stabilizer $K$, $d(A)=w_A^{-1}$ is shortest on the LEFT, $p_{A,B}(s)=s^{\ell(w_B)-\ell(w_A)}\sum_{z\in K}(-1)^{\ell(z)}P_{w_Az,w_B}(s^{-2})$, the column Levi $J$ is distinct from $K$, and the mixed singular/parabolic composition coefficient is the finite Levi cancellation sum $\sum_C(-1)^{\ell(B,C)}P_{d(C)w_0,d(A)w_0}(1)$. [given, construct]

2.1 **The O-side multiplicity dictionary.** On the category-O side the standard module $N(B)$ has a composition series whose multiplicities with respect to the simples $K(A)$ are read off in the same chart: the coefficient of $M_B$ in the expansion of $P_A$ is the multiplicity of $K(A)$ in $N(B)$ at parameter one, in the source's reciprocal convention, by [[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]] and [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]; combined with step 1.1 this gives $[N(B):K(A)]=d_{A,B}(1)$ for all $A,B$, with $d_{A,B}$ unitriangular, and $[N(B):K(B)]=1$ for every $B\in\mathrm{Col}^\Lambda$ in the full square matrix. [step 1.1, step 1.2, given, algebra]

3.1 **Transfer to the Hecke side.** By [F2] the Schur quotient is exact, sends $N(B)$ to $S(B)$, $K(A)$ to $D(A)$ for standard $A$ and kills the off-standard simples; applying it to a composition series of $N(B)$ and using [F1] gives $[S(B):D(A)]=[N(B):K(A)]=d_{A,B}(1)$ for $A\in\mathrm{Std}^\Lambda$ and every $B\in\mathrm{Col}^\Lambda$, the sum being finite on each weight block. This proves (i). [F2, step 2.1, F1, given]

4.1 **Shape of the matrix.** The full matrix $D=(d_{A,B})$ is unitriangular on $\mathrm{Col}^\Lambda$ by step 1.1; restricting rows to the simple labels $A\in\mathrm{Std}^\Lambda$ (all of which occur, and which index the simples by [[thm-degenerate-ariki-categorification]]) leaves a rectangular matrix, whose square submatrix on the standard columns is again unitriangular with diagonal entries $1$. Off standard columns the equation $D(B)=0$ says precisely that $D(B)$ is not a simple module label, so the identity $[S(B):D(B)]=1$ is asserted only for $B\in\mathrm{Std}^\Lambda$. This proves (ii). The statement is not that the rectangular matrix is invertible, and no off-standard simple is created. [step 3.1, given, algebra]

5.1 **The polynomial coefficient is not a transposed inverse.** The decomposition matrix of (i) has rows the simple labels and columns the Specht labels, and its entries are the coefficients of $D(s)$ at $s=1$; since $R(s)=D(s)^{-1}$, its transpose is $D(s)^{-t}$, which is in general different from the $L$-in-$M$ chart $R(s)$. On the two-factor space with labels $01<10$ one has $L_{10}=M_{10}-sM_{01}$, so the inverse chart carries the negative entry at parameter one, while the true decomposition entry is $d_{01,10}(1)=1$: $S(10)$ is the simple $D(01)$ and not a formal negative combination. Hence the decomposition matrix is the transpose of the standard-row restriction of $D$, and never the transpose of $R$. This completes (iii) together with steps 1.2, whose entry stabilizer $K$ and column Levi $J$ remain distinct and whose multiplicities are the finite Levi cancellation values at parameter one; all statements are ungraded. [step 3.1, step 1.2, step 2.1, given, algebra] ∎
