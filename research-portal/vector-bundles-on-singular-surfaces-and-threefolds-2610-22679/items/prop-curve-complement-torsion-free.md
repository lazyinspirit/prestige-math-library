---
id: prop-curve-complement-torsion-free
kind: proposition
title: Torsion freeness after removing a smooth-locus integral curve
status: draft
domain: mathematics
deps:
  - def-motivic-cohomology
  - def-cohomology-with-support
  - lem-fiber-sequence-homotopy-exactness
  - prop-top-motivic-torsion-free
  - lem-curve-supported-degree-seven-vanishing
  - lem-curve-supported-degree-six-divisible
  - lem-divisible-quotient-torsion-free
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  lem-fiber-sequence-homotopy-exactness: mathematical-premise
  prop-top-motivic-torsion-free: mathematical-premise
  lem-curve-supported-degree-seven-vanishing: mathematical-premise
  lem-curve-supported-degree-six-divisible: mathematical-premise
  lem-divisible-quotient-torsion-free: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 13, Proposition 6.1 and proof
      reading_limits: The proposition and its proof in the supplied article text were
        read. The support calculations and characteristic-independent top
        torsion-freeness are used through the separately authored suppliers, not
        reconstructed here.
dependency_level: 20
---

## Statement
Assume the Axiom of Choice and the size conventions of [[def-cohomology-with-support]]. Let $X$ be an affine finite-type threefold over an algebraically closed field $k$, and let $T\subset X$ be a closed integral curve contained in the smooth locus $X_{\mathrm{smooth}}$. Then
$$H^{6,3}_{\mathrm{mot}}(X\setminus T,\mathbb Z)$$
is torsion-free.

A threefold here is a finite-type $k$-scheme of dimension three; no reducedness, irreducibility, normality, or smoothness of $X$ is assumed. An integral curve is a reduced irreducible scheme of dimension one. The smooth locus consists of the points at which $X\to\operatorname{Spec}k$ is smooth. A group is torsion-free if $na=0$ for a positive integer $n$ implies $a=0$. The motivic cohomology group is the degree-six cohomology of the weight-three motivic complex, as defined in [[def-motivic-cohomology]]. The Axiom of Choice is used through the two supported-cohomology suppliers, including their size and comparison constructions.

## Facts & Assumptions

**Given:** An affine finite-type threefold $X$ over an algebraically closed field $k$, a closed integral curve $T\subset X_{\mathrm{smooth}}$, the Axiom of Choice, and the size conventions of [[def-cohomology-with-support]].

**Goal:** Prove that $H^{6,3}_{\mathrm{mot}}(X\setminus T,\mathbb Z)$ is torsion-free.

[F1] [[def-cohomology-with-support]] defines the weight-three support spectrum as the fiber of restriction from $X$ to $X\setminus T$, with supported cohomology $H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)=\pi_{-a}M_3(X/(X\setminus T))$. On the qcqs schemes in this statement, [[def-motivic-cohomology]] identifies the corresponding ordinary groups with cohomology of the evaluated motivic complexes. [[lem-fiber-sequence-homotopy-exactness]] supplies the long exact homotopy sequence of this actual fiber sequence.

[F2] [[prop-top-motivic-torsion-free]] says that $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is torsion-free for an affine finite-type threefold over an algebraically closed field, without extra hypotheses on $X$.

[F3] Under the given field, geometry, choice and size hypotheses, [[lem-curve-supported-degree-six-divisible]] says that the image of the actual support-to-global map in degree six is divisible, and [[lem-curve-supported-degree-seven-vanishing]] says that the supported group in degree seven is zero. A group is divisible when multiplication by every positive integer is surjective.

[F4] [[lem-divisible-quotient-torsion-free]] says that in a short exact sequence $0\to D\to G\to A\to0$ of abelian groups, if $D$ is divisible and $G$ is torsion-free, then $A$ is torsion-free. Short exact means that the first map is injective, the second is surjective, and the image of the first equals the kernel of the second.

## Proof

**Proof technique:** Apply the support long exact sequence and the divisible-quotient lemma.

1.1 Put $V=X\setminus T$. Since $X$ is noetherian, its open subset $V$ is quasi-compact; both are quasi-separated. The fiber sequence of [F1], followed by its long exact homotopy sequence with the given indexing, yields the exact segment $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)\longrightarrow H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\xrightarrow{\rho}H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)\longrightarrow H^{7,3}_{\mathrm{mot},T}(X,\mathbb Z).$ The first map is support-to-global and $\rho$ is restriction. [F1, given]

2.1 The hypotheses of both suppliers in [F3] hold for the given $X$, $k$ and $T$, with the stated choice and size conventions. Thus the last group in step 1.1 is zero, and the image $D$ of the first map is divisible. Exactness makes $\rho$ surjective and identifies its kernel with $D$. [F3, step 1.1, given]

3.1 Write $G=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ and $A=H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)$. The inclusion of $D$ into $G$ and $\rho$ form a short exact sequence $0\to D\to G\to A\to0$. By [F2], $G$ is torsion-free; by step 2.1, $D$ is divisible. Applying [F4] proves that $A$ is torsion-free, as required. [F2, F4, step 2.1] ∎
