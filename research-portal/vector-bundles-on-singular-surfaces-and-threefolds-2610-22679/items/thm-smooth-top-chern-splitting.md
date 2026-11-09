---
id: thm-smooth-top-chern-splitting
kind: theorem
title: Smooth critical-rank splitting criterion
status: draft
domain: mathematics
deps:
  - lem-author-394a5b71198d-components
  - lem-author-394a5b71198d-exterior-dual-interface
  - lem-author-394a5b71198d-split-vanishing
  - lem-author-394a5b71198d-line-determinant
  - lem-author-394a5b71198d-curve-picard
  - lem-author-394a5b71198d-zero-boundary
  - thm-author-394a5b71198d-murthy-chow-to-k-input
  - thm-author-394a5b71198d-murthy-module-splitting-input
  - lem-affine-bundle-module-interface
  - def-unimodular-sections
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-394a5b71198d-components: mathematical-premise
  lem-author-394a5b71198d-exterior-dual-interface: mathematical-premise
  lem-author-394a5b71198d-split-vanishing: mathematical-premise
  lem-author-394a5b71198d-line-determinant: mathematical-premise
  lem-author-394a5b71198d-curve-picard: mathematical-premise
  lem-author-394a5b71198d-zero-boundary: mathematical-premise
  thm-author-394a5b71198d-murthy-chow-to-k-input: mathematical-premise
  thm-author-394a5b71198d-murthy-module-splitting-input: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  def-unimodular-sections: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 1, Mur94 Remark 3.6 and Theorem 3.7
dependency_level: 16
---

## Statement
Assume AC and the article\'s universe bounds. Let $X$ be a nonempty smooth affine variety of dimension $d\geq0$ over an algebraically closed field of arbitrary characteristic, and let $E$ be a vector bundle of constant rank $d$. Then there exists a vector bundle $E\prime$ with $E\cong E\prime\oplus\mathcal O_X$ if and only if $c_d(E)=0$ in the ordinary integral Chow group $\mathrm{CH}^d(X)$. For $d\geq1$ the complement necessarily has rank $d-1$. For $d=0$, the convention is $c_0(E)=1$, and both splitting and vanishing are false. Chern classes are the usual quotient-projective-bundle classes; on a possibly disconnected smooth variety the codimension Chow grading and classes are understood componentwise. Splitting off a trivial line is equivalently the existence of a unimodular global section on this affine scheme.

## Facts & Assumptions
**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] Smooth affine schemes have the finite integral clopen decomposition, lower-dimensional components split by Serre, and componentwise splittings glue. [[lem-author-394a5b71198d-components]]

[F2] The actual module exterior-dual class maps to the spectral bundle class epsilon. [[lem-author-394a5b71198d-exterior-dual-interface]]

[F3] An actual split trivial line gives zero top Chow class in positive rank. [[lem-author-394a5b71198d-split-vanishing]]

[F4] The dimension-one actual first Chern map is Picard/divisor class and detects trivial line bundles; its exterior-dual K-class is detected by determinants. [[lem-author-394a5b71198d-curve-picard]], [[lem-author-394a5b71198d-line-determinant]]

[F5] The dimension-zero boundary is explicit. [[lem-author-394a5b71198d-zero-boundary]]

[F6] In dimension at least two, the closed-point cycle map sends the ordinary top Chow Chern class to the projective-module exterior-dual class, is an isomorphism, and supplies absence of factorial torsion. The supplier proves the canonical comparison $j:K_0^{\mathrm{proj}}(A)\to K_0(\mathcal H(A))$ with inverse $\chi((M))=\sum_i(-1)^i[P_i]$ for a finite projective resolution of $M$. Here $\mathcal H(A)$ consists only of modules admitting such resolutions. Its proof checks resolution independence, exact additivity and both inverse identities, and identifies the point subgroups, the actual cycle map and each projective exterior term. [[thm-author-394a5b71198d-murthy-chow-to-k-input]]

[F7] The module converse splitting theorem applies to reduced affine algebras over an algebraically closed field, in dimension at least two, with the stated factorial-torsion hypothesis. Its supplier uses the same canonical resolution comparison on the point subgroup and on the exterior-dual class; it requires no identification with all coherent-module classes on a singular ring. [[thm-author-394a5b71198d-murthy-module-splitting-input]]

[F8] The affine module/bundle equivalence preserves rank and direct sums, and a free line summand corresponds to a unimodular section. [[lem-affine-bundle-module-interface]], [[def-unimodular-sections]]

## Proof
1.1 If $d=0$, [F5] proves that both conditions are false, so their equivalence holds with the stated convention. Assume $d\geq1$ henceforth. If $E$ splits off a trivial line, its restriction to each component has rank-$d-1$ complement. By [F3] its degree-$d$ Chern class vanishes on every component, so it vanishes globally under [F1]. [F1, F3, F5, given]

1.2 For the converse suppose $c_d(E)=0$. Use the finite integral clopen decomposition $X=\coprod_jX_j$ from [F1] and set $d_j=\dim X_j$. If $d_j<d$, Serre splitting in [F1] gives a trivial line summand of $E|_{X_j}$. It remains to treat the components of dimension exactly $d$. [F1, given]

2.1 If $d=1$, the restriction to each dimension-one component is a line bundle. Its actual first Chern class is zero, so [F4] makes it trivial. This is $E|_{X_j}\cong\mathcal O_{X_j}\oplus0$. The same local result also identifies vanishing of the actual exterior-dual K-class via the determinant, without invoking the dimension-at-least-two comparison. [F4, step 1.2]

2.2 If $d\geq2$, write a dimension-$d$ component as $X_j=\operatorname{Spec}A_j$. Smoothness over the algebraically closed perfect field makes $A_j$ regular, hence reduced, and [F1] makes it integral. It is an affine algebra of dimension $d$. Let $P_j=\Gamma(X_j,E|_{X_j})$, a finite projective module of constant rank $d$ by [F8]. These are exactly the ring and rank hypotheses of [F6], and the reduced affine hypotheses of [F7]. [F1, F6, F7, F8, step 1.2]

3.1 Apply the canonical comparison in [F6] to $A_j$. For each selected smooth height-$d$ point $x$, $\chi((k(x)))$ is its finite-resolution Euler class, so $j$ and $\chi$ restrict to inverse maps on the subgroups generated by these points. If $\phi_{\mathcal H}$ is the source cycle map, $\chi\phi_{\mathcal H}$ is therefore the stated projective-module cycle map $\phi$. For every $i$, the module $\Lambda^iP_j^*$ is finite projective and its length-zero resolution gives $\chi((\Lambda^iP_j^*))=[\Lambda^iP_j^*]$. Thus this is the same comparison of actual classes used by [F7], including the factorial-torsion condition. [F6, F7, step 2.2]

4.1 The component restriction of $c_d(E)$ vanishes by [F1]. Apply [F6] through the comparison of step 3.1: $\phi(c_d(E|_{X_j}))=C^K_d(P_j)=0$, and $F^dK_0^{\mathrm{proj}}(A_j)$ has no $(d-1)!$ torsion. For the source torsion theorem, regularity supplies its regular-in-codimension-one alternative when $d\geq3$, and $d=2$ is its separate alternative. The module-to-spectral expression is exactly that in [F2]. This uses the specified point-cycle map and its compatibility with the exterior-dual expression. [F1, F2, F6, step 1.2, step 2.2, step 3.1]

5.1 By steps 2.2, 3.1 and 4.1, all the hypotheses of [F7] hold for $A_j,P_j$ with the identical exterior-dual obstruction and point subgroup, so $P_j\cong A_j\oplus Q_j$ with $Q_j$ finite projective of rank $d-1$. By [F8] this sheafifies to a trivial line summand of $E|_{X_j}$. Together with steps 1.2 and 2.1 every component has such a splitting. By [F1] they glue to $E\cong\mathcal O_X\oplus E\prime$. [F1, F7, F8, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 The necessary direction in step 1.1 and sufficient direction in step 5.1 establish the equivalence for all $d\geq1$, while step 1.1 covers $d=0$. Local ranks add, so the positive-dimensional complement has rank $d-1$. Finally [F8] gives exactly the unimodular-section formulation. [F8, step 1.1, step 5.1] ∎

## Source notes
The article p. 1 attributes the criterion to Mur94 Remark 3.6 and Theorem 3.7. The higher-dimensional proof here uses the identified primary scan's exact cycle-to-K map and factorial-torsion hypothesis. Its dimension-at-least-two comparison is not extended by assertion to curves. The curve proof instead uses the actual Chow/Picard operation and the actual determinant of stabilized line bundles; the zero-dimensional case uses the zeroth Chern convention. The three geometric/module supplier statements and their bytes are preserved. Nothing here asserts local reconstruction or proof acceptance of the imported Murthy theorems.

The current application explicitly uses the resolution comparison already present in both Murthy suppliers. The historical claim that the scan explicitly defines a competing $K_0$ group overstates printed pp.1–2: they give resolved-module notation and refer classical K-theory to Bass. The explanatory omission was generated, not an error in the article's criterion. No supplier Statement or Definition is changed here.

For this bounded source check, the cached 34-page ICTP SMR.761/7 preliminary participant scan was identified by SHA256 `488956266748dcf211d02c09b2a058764414e212bc778e4379de6305cafef7f6`. I visually read its supplied cover and printed pp.1–2, 13–14 and 17 (PDF pp.1, 3–4, 15–16 and 19), including Theorem 2.14, Definition 3.5, Remark 3.6 and Theorem 3.7 and the short proofs there. A fresh request to the cited ICTP PDF timed out. The historical cache's download provenance, final Annals bytes and exact final-version wording remain unattested; the deep results invoked in the scan's short proofs remain imported. The article's Introduction, PDF p.1, was read in the frozen extracted text.

For the resolution comparison, I also read the author-hosted Weibel Chapter II PDF text at printed pp.65–67: Theorem 7.6 with proof, Definition 7.7 and Corollary 7.7.2, and visually checked the supplied p.67 image. The finite-resolution scope and Euler inverse match the actual application. Retain the separate consulted-literature typo in Lemma 7.7.1: its minimum bound fails for the split sequence with kernel and quotient $k[t]/(t)$ and middle term $(k[t]/(t))^2$. The comparison uses no such bound. The historical Weibel PDF digest was not newly authenticated; final printed-book bytes and errata were not read. These checks supply source/application evidence, not independent judgment of this proposed repair.
