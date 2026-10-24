---
id: ex-the-sl2-singular-weight-has-no-cohomology
kind: example
title: The sl2 singular weight has no cohomology
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
- lem-rank-one-cohomology-shifts-across-a-simple-wall
- lem-singular-dot-weights-have-zero-line-bundle-cohomology
- thm-borel-weil-bott
- thm-minimal-parabolic-flag-projection-is-p1-bundle
- lem-semisimple-minimal-parabolic-root-subgroup
- lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
- def-projective-line-two-affine-cover-and-twisting-sheaf
- thm-cohomology-projective-space-twisting-sheaves
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- def-borel-character-equivariant-line-bundle
- def-fundamental-weights-for-a-chosen-simple-root-system
- def-weyl-vector-rho
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed pp. 2-3, Theorem 3 and Lemma 4: the fibre-degree -1 boundary case and the fixed dot weight"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Section 1.15, printed p. 4: the boundary case n=-1 of the P1 table"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For
$G=SL_2(\mathbb C)$ the weight $\lambda=-\rho=-\omega_1$ has
$\lambda+\rho=0$ on the Weyl wall, and
$\mathcal L_{-\omega_1}\cong\mathcal O(-1)$ on $X\cong\mathbb P^1$. All
cohomology of $\mathcal L_{-\omega_1}$ vanishes:
$H^0(X,\mathcal L_{-\omega_1})=H^1(X,\mathcal L_{-\omega_1})=0$. More
generally the wall-crossing isomorphism
$H^i(X,\mathcal L_{-\omega_1})\cong H^{i+1}(X,\mathcal L_{-\omega_1})$ of
[[lem-rank-one-cohomology-shifts-across-a-simple-wall]] together with the
vanishing above degree $1$ forces every cohomology group to vanish.

## Facts & Assumptions

**Given:** The Axiom of Choice, $G=SL_2(\mathbb C)$, its upper triangular Borel, the flag variety $X=G/B\cong\mathbb P^1$, the fundamental weight $\omega_1$ and Weyl vector $\rho=\omega_1$, the simple root $\alpha$ with reflection $s$, and the bundle $\mathcal L_{-\omega_1}$.

[F1] In rank one $\alpha=2\omega_1$ and $\rho=\alpha/2=\omega_1$. Thus for $\lambda=-\omega_1$ one has $\lambda+\rho=0$, $s\cdot\lambda=s(0)-\rho=-\omega_1$, and $\langle\lambda,\alpha^\vee\rangle=-1$. The shifted weight is therefore not regular ([[def-fundamental-weights-for-a-chosen-simple-root-system]], [[def-weyl-vector-rho]], [[lem-rank-one-cohomology-shifts-across-a-simple-wall]]).

[F2] For $G=SL_2$ the unique simple root $\alpha$ has $P_\alpha=G$, so the fibre $F=P_\alpha/B$ is all of $X=G/B$, and under the fixed identification of the fibre with the two-affine projective line $\mathbb P^1$ the restriction $\mathcal L_\lambda|_F$ is isomorphic to $\mathcal O_{\mathbb P^1}(\langle\lambda,\alpha^\vee\rangle)$; in particular $\mathcal L_{-\omega_1}\cong\mathcal O(-1)$ ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]], [[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]], [[def-projective-line-two-affine-cover-and-twisting-sheaf]]).

[F3] On $\mathbb P^1$ over $\mathbb C$ one has $H^q(\mathcal O(d))=0$ unless $q=0$ or $q=1$; $H^0(\mathcal O(d))=0$ for $d<0$, and $H^1(\mathcal O(d))$ is nonzero exactly for $d\le-2$. In particular at $d=-1$ both $H^0$ and $H^1$ vanish ([[thm-cohomology-projective-space-twisting-sheaves]]).

[F4] The wall-crossing isomorphism: since the pairing is $-1$, $H^i(X,\mathcal L_{-\omega_1})\cong H^{i+1}(X,\mathcal L_{s\cdot(-\omega_1)})=H^{i+1}(X,\mathcal L_{-\omega_1})$ for all $i\ge0$; and all cohomology vanishes by the singular-weight lemma ([[lem-rank-one-cohomology-shifts-across-a-simple-wall]], [[lem-singular-dot-weights-have-zero-line-bundle-cohomology]], [[thm-borel-weil-bott]]).

[F5] $X$ is smooth projective of dimension $1$, so $H^q(X,\mathcal L_{-\omega_1})=0$ for $q>1$ ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).

## Verification

**Proof technique:** direct.

1.1 By [F2] the bundle is $\mathcal O(-1)$, so [F3] gives $H^0(X,\mathcal L_{-\omega_1})=H^1(X,\mathcal L_{-\omega_1})=0$ and $H^q=0$ for $q>1$. [F2, F3, F5]

2.1 The consistency argument is independent of the table: [F4] gives $H^i\cong H^{i+1}$ for all $i\ge0$, while $H^q=0$ for $q>1$ by [F5]; starting from $H^2=0$ gives $H^1\cong H^2=0$ and then $H^0\cong H^1=0$. [F4, F5, step 1.1]

3.1 Both computations agree: for $\lambda=-\omega_1$, the shifted weight $\lambda+\rho=0$ lies on the Weyl wall (the boundary value $n=-1$ of the rank-one shift), and all cohomology of $\mathcal L_\lambda$ vanishes, as asserted. [F1, step 1.1, step 2.1] ∎
