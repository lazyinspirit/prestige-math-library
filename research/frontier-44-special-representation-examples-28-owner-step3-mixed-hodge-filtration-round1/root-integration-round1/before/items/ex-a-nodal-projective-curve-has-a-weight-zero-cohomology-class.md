---
id: ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class
kind: example
title: "A proper singular curve with weight-zero cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [cor-cohomology-over-a-field-is-dual-to-homology-over-that-field,
       cor-finite-morphism-proper, cor-homology-of-spheres,
       cor-normalization-resolves-singularities-of-curves, def-axiom-of-choice,
       def-rational-mixed-hodge-structure,
       thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree,
       thm-proper-hypercovers-compute-constructible-derived-cohomology,
       thm-stereographic-projection-riemann-sphere-homeomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77, (8.2.1)-(8.2.4)"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
      locator: "printed pp. 38-39: the mixed Hodge structure via a proper hypercover and the bound p+q<=n for proper varieties"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures (Srni, January 2005), Sections 1.3 and 4.3"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "printed pp. 3 and 10-11: examples of compact cohomology and the weight spectral sequence"
---

## Example

A rational projective curve with one ordinary node has one-dimensional
$H^1(C,\mathbb Q)$ of weight $0$, illustrating that proper singular cohomology
need not be pure of its degree.

## Verification

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a rational projective curve $C$ with one ordinary node, and its normalization $\nu:\mathbb P^1\to C$ identifying two distinct points $a,b$ and an isomorphism over the smooth locus.

[F1] [[cor-normalization-resolves-singularities-of-curves]] and [[cor-finite-morphism-proper]]: the normalization of an integral projective curve over a perfect field is a nonsingular projective curve and the normalization map is finite and birational, hence proper and surjective; for the rational nodal curve the normalization is $\mathbb P^1$ and $\nu$ is an isomorphism over the smooth locus.

[F2] [[thm-proper-hypercovers-compute-constructible-derived-cohomology]] and [[thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree]]: the Cech nerve of a proper surjection is a proper hypercover, its descent spectral sequence $E_1^{p,q}=H^q(C_p,\mathbb Q)\Rightarrow H^{p+q}(C,\mathbb Q)$ is strongly convergent with finite diagonals, and for a proper hypercover with smooth projective terms the associated mixed Hodge complex has $\operatorname{Gr}^W_qH^n(C,\mathbb Q)\cong E_2^{n-q,q}$ with weights at most $n$.

[F3] [[thm-stereographic-projection-riemann-sphere-homeomorphism]], [[cor-homology-of-spheres]] and [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]: $\mathbb P^1(\mathbb C)\cong S^2$, so $H^0(\mathbb P^1,\mathbb Q)=\mathbb Q$ and $H^1(\mathbb P^1,\mathbb Q)=0$, the latter as the dual of $H_1(S^2;\mathbb Q)=0$.

1.1 The Cech nerve $C_\bullet$ of the normalization has degree-$p$ term $C_p=\mathbb P^1_d\sqcup T_p$, where $T_p$ consists of the $2^{p+1}-2$ isolated points indexed by the nonconstant tuples in $\{a,b\}^{p+1}$: over the node the fibre product of copies of $\nu$ has one reduced point per tuple of preimages, and over the smooth locus it is the diagonal copy of $\mathbb P^1$ [F1]. Each $C_p$ is therefore a finite disjoint union of a smooth projective curve and reduced points, hence smooth projective, and the matching maps of the Cech nerve are base changes and finite products of the finite surjection $\nu$, hence proper and surjective, so $C_\bullet\to C$ is a proper hypercover to which [F2] applies. Taking cohomology gives $E_1^{p,q}=H^q(C_p,\mathbb Q)$, which vanishes for $q\ge1$ except in degree two where it is $\mathbb Q$ on the diagonal component; on the degree-zero row $E_1^{p,0}=H^0(C_p,\mathbb Q)$ is the direct sum of one copy of $\mathbb Q$ for the diagonal and one for each nonconstant tuple. [F1, F2, F3, construct, algebra]

2.1 Compute the degree-zero row in low degrees. On $C_0=\mathbb P^1$ one has $E_1^{0,0}=\mathbb Q$, and on $C_1=\mathbb P^1_d\sqcup\{ab\}\sqcup\{ba\}$ one has $E_1^{1,0}=\mathbb Q_d\oplus\mathbb Q_{ab}\oplus\mathbb Q_{ba}$; the alternating sum of the two face pullbacks $\delta^0$ sends a constant to the differences of the two diagonal values, hence is zero. On $C_2$ the six nonconstant tuples contribute the coordinates for $(aab),(aba),(abb),(baa),(bab),(bba)$, and evaluating the alternating sum $\delta^1(c)$ on these components and on the diagonal gives $c_d$ on $(aab),(abb),(baa),(bba)$ and $c_{ab}+c_{ba}$ on $(aba),(bab)$, where $c=(c_d,c_{ab},c_{ba})$. Hence $\delta^1(c)=0$ exactly when $c_d=0$ and $c_{ba}=-c_{ab}$, so $E_2^{1,0}=\ker\delta^1/\operatorname{im}\delta^0$ is one-dimensional, generated by $(0,1,-1)$. [step 1.1, algebra]

3.1 The other total-degree-one entry is $E_1^{0,1}=H^1(\mathbb P^1,\mathbb Q)=0$ by [F3], so it contributes nothing; the spectral sequence is first-quadrant with finite diagonals and degenerates at $E_2$ by [F2]. Therefore $H^1(C,\mathbb Q)\cong E_2^{1,0}$ is one-dimensional, and by the weight identification of [F2] its graded pieces are $\operatorname{Gr}^W_0H^1=E_2^{1,0}=\mathbb Q$ and $\operatorname{Gr}^W_1H^1=E_2^{0,1}=0$. Since the weights of $H^1(C,\mathbb Q)$ are at most $1$, this forces $W_0H^1=H^1$: the whole one-dimensional space is pure of weight $0$ and type $(0,0)$ ([[def-rational-mixed-hodge-structure]]), as asserted. [F2, step 2.1, algebra] ∎
