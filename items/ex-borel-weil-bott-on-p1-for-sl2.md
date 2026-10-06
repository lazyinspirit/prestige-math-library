---
id: ex-borel-weil-bott-on-p1-for-sl2
kind: example
title: Borel-Weil-Bott on the projective line for SL2
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps:
- thm-borel-weil-bott
- ex-the-sl2-singular-weight-has-no-cohomology
- thm-minimal-parabolic-flag-projection-is-p1-bundle
- lem-semisimple-minimal-parabolic-root-subgroup
- lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
- def-projective-line-two-affine-cover-and-twisting-sheaf
- thm-cohomology-projective-space-twisting-sheaves
- thm-weyl-dimension-formula
- def-borel-character-equivariant-line-bundle
- def-special-linear-lie-algebra-sl-two
- def-fundamental-weights-for-a-chosen-simple-root-system
- def-weyl-vector-rho
- def-length-and-longest-element-of-a-finite-weyl-group
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Section 1.15, printed p. 4: the table of H^0 and H^1 of O(n) on P1 for all n, including n=-1"
    - title: "Joshua Ng (Hoi Hei Jan Sum), The Borel-Weil-Bott Theorem (Chicago REU 2015)"
      url: "https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf"
      locator: "Example 5.5, printed pp. 11-12: global sections of the line bundles on the SL2 flag variety"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=SL_2(\mathbb C)$ with upper triangular Borel $B$ and flag variety
$X=G/B\cong\mathbb P^1$, and for $m\in\mathbb Z$ let
$\mathcal L_{m\omega_1}=G\times^B\mathbb C_{-m\omega_1}\cong\mathcal O(m)$ be
the line bundles identified by [[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]]
in the rank-one case. Write $L(k\omega_1)$ for the finite-dimensional
irreducible $\mathfrak{sl}_2$-module of highest weight $k\omega_1$, for $k\ge0$. Then: (i) for $m\ge0$, $H^0(X,\mathcal L_{m\omega_1})\cong L(m\omega_1)^*$
and $H^1(X,\mathcal L_{m\omega_1})=0$; (ii) for $m\le-2$,
$H^1(X,\mathcal L_{m\omega_1})\cong L((-m-2)\omega_1)^*$ and
$H^0(X,\mathcal L_{m\omega_1})=0$; (iii) for $m=-1$,
$H^0(X,\mathcal L_{-\omega_1})=H^1(X,\mathcal L_{-\omega_1})=0$. The
Borel-Weil-Bott degree is $0$ for $m\ge0$, $1$ for $m\le-2$, and the weight
$m\omega_1$ is dot-singular exactly for $m=-1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $G=SL_2(\mathbb C)$ with upper triangular Borel, $X=G/B\cong\mathbb P^1$, the fundamental weight $\omega_1$, $\rho=\omega_1$, the simple reflection $s$, and the bundles $\mathcal L_{m\omega_1}$ for $m\in\mathbb Z$.

[F1] Borel-Weil-Bott: if $\nu+\rho$ is singular all cohomology of $\mathcal L_\nu$ vanishes, and if $\nu+\rho$ is regular with Weyl element $v$, then $H^{\ell(v)}(X,\mathcal L_\nu)\cong L(v\cdot\nu)^*$ and all other cohomology vanishes ([[thm-borel-weil-bott]]).

[F2] In rank one $\rho=\omega_1$, so $m\omega_1+\rho=(m+1)\omega_1$ is regular exactly for $m\ne-1$; for $m\ge0$ the Weyl element is $v=1$ with $1\cdot(m\omega_1)=m\omega_1$, while for $m\le-2$ the Weyl element is $s$ and $s(\lambda+\rho)-\rho$ with $\lambda=m\omega_1$ equals $-(m+2)\omega_1$: indeed $s((m+1)\omega_1)=-(m+1)\omega_1$, so $s\cdot(m\omega_1)=-(m+1)\omega_1-\omega_1=-(m+2)\omega_1$ ([[def-fundamental-weights-for-a-chosen-simple-root-system]], [[def-weyl-vector-rho]], [[def-length-and-longest-element-of-a-finite-weyl-group]]).

[F3] For $G=SL_2$ the unique simple root $\alpha$ has $P_\alpha=G$, so the minimal parabolic fibre is all of $X=G/B$, and under the fixed identification of $X$ with $\mathbb P^1$ the bundle $\mathcal L_{m\omega_1}$ restricts to $\mathcal O(m)$ by the degree computation $\langle m\omega_1,\alpha^\vee\rangle=m$; the singular boundary case $m=-1$ has all cohomology vanishing ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]], [[lem-semisimple-minimal-parabolic-root-subgroup]], [[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]], [[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[ex-the-sl2-singular-weight-has-no-cohomology]]).

[F4] On $\mathbb P^1$ over $\mathbb C$: $H^0(\mathcal O(m))$ has dimension $m+1$ for $m\ge0$ and vanishes for $m<0$; $H^1(\mathcal O(m))$ vanishes for $m\ge-1$ and has dimension $-m-1$ for $m\le-2$; all other cohomology vanishes ([[thm-cohomology-projective-space-twisting-sheaves]]). The Weyl dimension formula for $\mathfrak{sl}_2$, whose single positive root pairs with $\rho$ by $1$, gives $\dim L(k\omega_1)=k+1$ for $k\ge0$ ([[thm-weyl-dimension-formula]]).

## Verification

**Proof technique:** direct.

1.1 Case $m\ge0$: the weight $m\omega_1$ is dominant and $m\omega_1+\rho$ is regular with Weyl element $1$ by [F2], so [F1] gives $H^0(X,\mathcal L_{m\omega_1})\cong L(m\omega_1)^*$ and $H^1(X,\mathcal L_{m\omega_1})=0$. This matches the dimensions of [F4], since $\dim L(m\omega_1)^*=m+1=\dim H^0(\mathcal O(m))$. [F1, F2, F4, given]

1.2 Case $m\le-2$: $m\omega_1+\rho=(m+1)\omega_1$ is regular and the Weyl element is $s$ with $s\cdot(m\omega_1)=-(m+2)\omega_1$, which is dominant because $-m-2\ge0$; by [F1], $H^1(X,\mathcal L_{m\omega_1})\cong L((-m-2)\omega_1)^*$ and all other cohomology vanishes, in particular $H^0=0$. The dimensions match those of [F4] because $\dim L((-m-2)\omega_1)^*=-m-1=\dim H^1(\mathcal O(m))$. [F1, F2, F4, given]

1.3 Case $m=-1$: the weight $(-1)\omega_1=-\rho$ has $m\omega_1+\rho=0$ singular, and by [F3] all cohomology of $\mathcal L_{-\omega_1}$ vanishes, so $H^0=H^1=0$. [F3, given]

2.1 The three cases are exhaustive and $m\omega_1+\rho=(m+1)\omega_1$ is singular exactly for $m=-1$; collecting steps 1.1-1.3 gives the asserted Borel-Weil-Bott description on the projective line, with degree $0$ for $m\ge0$ and degree $1$ for $m\le-2$. [step 1.1, step 1.2, step 1.3, given] ∎ 