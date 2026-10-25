---
id: ex-the-top-degree-bwb-case-and-serre-duality
kind: example
title: The top-degree Borel-Weil-Bott case and Serre duality
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps:
- thm-borel-weil-bott
- prop-borel-weil-bott-is-compatible-with-serre-duality
- lem-flag-variety-canonical-bundle-weight-minus-two-rho
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-weyl-dimension-formula
- prop-weyl-vector-is-the-sum-of-fundamental-weights
- def-classical-complex-matrix-lie-algebras
- prop-root-systems-of-the-classical-complex-lie-algebras
- def-fundamental-weights-for-a-chosen-simple-root-system
- def-weyl-vector-rho
- def-length-and-longest-element-of-a-finite-weyl-group
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
  generation:
    role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed p. 3, Theorem 5 and the Serre-duality finish"
    - title: "George Boxer and Vincent Pilloni, Notes on Higher Coleman Theory (Montreal 2020)"
      url: "https://www.imo.universite-paris-saclay.fr/~vincent.pilloni/montrealnotes.pdf"
      locator: "Theorem 1.1 with the canonical bundle L_{2rho}, printed p. 3"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=SL_3(\mathbb C)$ with $\rho=\omega_1+\omega_2$, let $N=3=|\Phi^+|$ and put
$\lambda=w_0\cdot\rho=-3\rho$, so that $\lambda+\rho=-2\rho$ is regular with
Weyl element $w_0$ and $w_0\cdot\lambda=\rho$. Then
[[thm-borel-weil-bott]] gives
$$H^3(X,\mathcal L_{-3\rho})\cong L(\rho)^*,\qquad H^i(X,\mathcal L_{-3\rho})=0\ (i\neq3),$$
and the Serre pairing
$$H^3(X,\mathcal L_{-3\rho})\times H^0(X,\mathcal L_{\rho})\longrightarrow H^3(X,K_X)\cong\mathbb C$$
is perfect; both sides are eight-dimensional. This is the $w=w_0$,
top-degree case of [[prop-borel-weil-bott-is-compatible-with-serre-duality]]
with $\mu=-\lambda-2\rho=\rho$ and $u=w_0w_0=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$ with its standard Cartan, simple roots $\alpha_1,\alpha_2$, fundamental weights $\omega_1,\omega_2$, $\rho=\omega_1+\omega_2$, the flag variety $X=G/B$ of dimension $N=3$, the longest element $w_0$ and the weight $\lambda=-3\rho$.

[F1] In $A_2$ the simple roots are $\alpha_1,\alpha_2$, the positive roots are $\alpha_1,\alpha_2,\alpha_1+\alpha_2$, and the Weyl vector is $\rho=\omega_1+\omega_2$ with $\langle\rho,\alpha_i^\vee\rangle=1$; the longest element satisfies $w_0\Phi^+=\Phi^-$, hence $w_0\rho=-\rho$, and $\ell(w_0)=N=3=|\Phi^+|$, while the dot action is $w\cdot\nu=w(\nu+\rho)-\rho$ ([[def-classical-complex-matrix-lie-algebras]], [[prop-root-systems-of-the-classical-complex-lie-algebras]], [[def-fundamental-weights-for-a-chosen-simple-root-system]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]], [[def-weyl-vector-rho]], [[def-length-and-longest-element-of-a-finite-weyl-group]]).

[F2] Borel-Weil-Bott: for regular $\nu+\rho$ with Weyl element $v$, $H^{\ell(v)}(X,\mathcal L_\nu)\cong L(v\cdot\nu)^*$ and all other cohomology vanishes ([[thm-borel-weil-bott]]).

[F3] Compatibility with Serre duality: for regular $\lambda$ with Weyl element $w$ and $\mu=-\lambda-2\rho$, the Weyl element of $\mu$ is $w_0w$ and the Serre pairing identifies $H^{\ell(w)}(X,\mathcal L_\lambda)^\vee$ with $H^{N-\ell(w)}(X,\mathcal L_\mu)$, matching $L(w\cdot\lambda)^*$ with $L(w\cdot\lambda)$ ([[prop-borel-weil-bott-is-compatible-with-serre-duality]]).

[F4] $\omega_X=K_X\cong\mathcal L_{-2\rho}$ and Serre duality gives a perfect pairing $H^3(X,\mathcal L_{-3\rho})\times H^0(X,\mathcal L_\rho)\to H^3(X,K_X)\cong\mathbb C$; moreover $\dim L(\rho)=8$: the Weyl dimension formula is $\dim L(\rho)=\prod_{\beta\in\Phi^+}(2\rho,\beta)/(\rho,\beta)=2^{|\Phi^+|}=2^3$, since $(2\rho,\beta)=2(\rho,\beta)$ and $(\rho,\beta)>0$ for the three positive roots ([[lem-flag-variety-canonical-bundle-weight-minus-two-rho]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[thm-weyl-dimension-formula]], [[prop-root-systems-of-the-classical-complex-lie-algebras]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], $\lambda=w_0\cdot\rho=w_0(2\rho)-\rho=-2\rho-\rho=-3\rho$; then $\lambda+\rho=-2\rho$, and $w_0(\lambda+\rho)=2\rho$ is dominant, so the Weyl element of $\lambda$ is $w=w_0$ with $\ell(w)=3=N$, while $w_0\cdot\lambda=w_0(-2\rho)-\rho=2\rho-\rho=\rho$. [F1, given, algebra]

2.1 Applying [F2] to $\lambda$ by step 1.1 gives $H^3(X,\mathcal L_{-3\rho})\cong L(\rho)^*$ and $H^i(X,\mathcal L_{-3\rho})=0$ for $i\ne3$. [F2, step 1.1]

3.1 For the pairing, $\mu=-\lambda-2\rho=3\rho-2\rho=\rho$ and $u=w_0w=w_0w_0=1$ with $\ell(u)=0=N-3$, so [F3] identifies $H^3(X,\mathcal L_{-3\rho})^\vee$ with $H^0(X,\mathcal L_\rho)$ and matches its two sides as $L(\rho)^*$ and $L(\rho)$; [F4] supplies the perfect Serre pairing to $H^3(X,K_X)\cong\mathbb C$. Both $L(\rho)$ and its dual are eight-dimensional by [F4], so both sides of the pairing are eight-dimensional. [F3, F4, step 1.1, step 2.1, algebra]

4.1 Collecting steps 2.1 and 3.1 gives the asserted top-degree Borel-Weil-Bott computation and the perfect eight-dimensional Serre pairing. [step 2.1, step 3.1] ∎ 