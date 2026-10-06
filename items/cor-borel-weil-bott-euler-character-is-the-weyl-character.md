---
id: cor-borel-weil-bott-euler-character-is-the-weyl-character
kind: corollary
title: The Borel-Weil-Bott Euler character is a signed dual Weyl character
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
- thm-borel-weil-bott
- def-formal-character-of-a-finite-dimensional-weight-module
- prop-formal-characters-are-additive-and-multiplicative
- def-weyl-alternation-operator
- thm-weyl-character-formula
- prop-highest-weight-of-the-dual-representation
- thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
  generation:
    role: direct-corollary
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
      locator: "Section 1.22, printed pp. 6-7: the Euler-character computation recovering the Weyl character formula"
    - title: "Joshua Ng (Hoi Hei Jan Sum), The Borel-Weil-Bott Theorem (Chicago REU 2015)"
      url: "https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf"
      locator: "Sections 5-6, printed pp. 9-14: the character identity for the geometric realisation"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathrm{ch}$
denote the formal character of a finite-dimensional $\mathfrak g$-module
([[def-formal-character-of-a-finite-dimensional-weight-module]]) and let $A$
be the Weyl alternation operator with Weyl denominator
$A(\rho)=\prod_{\alpha>0}(e^{\alpha/2}-e^{-\alpha/2})$
([[def-weyl-alternation-operator]], [[thm-weyl-character-formula]]). For every $\lambda\in X^*(T)$: if
$\lambda+\rho$ is not regular then
$\sum_i(-1)^i\mathrm{ch}\,H^i(X,\mathcal L_\lambda)=0$; if $\lambda+\rho$ is
regular with Weyl element $w$, then
$$\sum_i(-1)^i\mathrm{ch}\,H^i(X,\mathcal L_\lambda)=(-1)^{\ell(w)}\mathrm{ch}\,L(w\cdot\lambda)^*=(-1)^{\ell(w)}\frac{A(-w_0(w\cdot\lambda)+\rho)}{A(\rho)}.$$
Equivalently, with $\nu=-w_0(w\cdot\lambda)$, which is the dominant integral
weight of the dual module $L(w\cdot\lambda)^*$, the last expression is
$(-1)^{\ell(w)}A(\nu+\rho)/A(\rho)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B$, the flag variety $X=G/B$, the Weyl group $W$ with longest element $w_0$, a weight $\lambda$, and its line bundle $\mathcal L_\lambda$.

[F1] Borel-Weil-Bott: if $\lambda+\rho$ is singular then all $H^i(X,\mathcal L_\lambda)$ vanish, and if $\lambda+\rho$ is regular with Weyl element $w$ then $H^{\ell(w)}(X,\mathcal L_\lambda)\cong L(w\cdot\lambda)^*$ and all other cohomology vanishes; in particular the alternating sum runs over a finite list of finite-dimensional modules ([[thm-borel-weil-bott]]).

[F2] The formal character is additive: $\mathrm{ch}(V\oplus W)=\mathrm{ch}V+\mathrm{ch}W$ and the zero module has character $0$, the sum being taken in the completed character ring ([[prop-formal-characters-are-additive-and-multiplicative]], [[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F3] For a dominant integral weight $\nu$ the dual $L(\nu)^*$ is irreducible of highest weight $-w_0\nu$, so $L(\nu)^*\cong L(-w_0\nu)$ by the classification of finite-dimensional irreducibles; the Weyl character formula gives $\mathrm{ch}\,L(\mu)=A(\mu+\rho)/A(\rho)$ for every dominant integral $\mu$, and the denominator is $A(\rho)=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})=\prod_{\alpha>0}(e^{\alpha/2}-e^{-\alpha/2})$, where the last equality follows from $\sum_{\alpha>0}\alpha/2=\rho$ ([[prop-highest-weight-of-the-dual-representation]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[thm-weyl-character-formula]]).

## Proof

1.1 If $\lambda+\rho$ is not regular, then by [F1] every $H^i(X,\mathcal L_\lambda)$ vanishes, so each character is $0$ and the alternating sum is the finite sum of zero characters, hence $0$ by [F2]. [F1, F2, given]

1.2 If $\lambda+\rho$ is regular with Weyl element $w$, then by [F1] only $H^{\ell(w)}(X,\mathcal L_\lambda)$ is nonzero and it is isomorphic to $L(w\cdot\lambda)^*$; the alternating sum over the finitely many cohomology groups therefore equals $(-1)^{\ell(w)}\mathrm{ch}\,L(w\cdot\lambda)^*$ by additivity [F2]. Since $w\cdot\lambda$ is dominant integral, [F3] identifies $L(w\cdot\lambda)^*\cong L(\nu)$ with $\nu=-w_0(w\cdot\lambda)$ dominant integral, and the Weyl character formula gives $\mathrm{ch}\,L(\nu)=A(\nu+\rho)/A(\rho)=A(-w_0(w\cdot\lambda)+\rho)/A(\rho)$. [F1, F2, F3, given, algebra]

2.1 Combining the singular case of step 1.1 and the regular case of step 1.2 gives the two asserted evaluations of the alternating sum of characters. [step 1.1, step 1.2] ∎

## Remarks

The scaffold stated the regular case as $(-1)^{\ell(w)}\mathrm{ch}\,L(w\cdot\lambda)=(-1)^{\ell(w)}A(w\cdot\lambda+\rho)/A(\rho)$, which is false in rank at least two: for $G=SL_3$ and the dominant weight $\lambda=\omega_1$ one has $w=1$, $H^0(X,\mathcal L_{\omega_1})\cong L(\omega_1)^*$, and $L(\omega_1)^*$ has weights $-\omega_1$, $\omega_1-\omega_2$, $\omega_2$, so its character is $e^{-\omega_1}+e^{\omega_1-\omega_2}+e^{\omega_2}$, whereas $\mathrm{ch}\,L(\omega_1)=e^{\omega_1}+e^{\omega_2-\omega_1}+e^{-\omega_2}$; $W$-invariance of characters does not identify the two, because it only permutes the weights of a fixed module. The corrected statement above uses $\mathrm{ch}\,L(w\cdot\lambda)^*=A(-w_0(w\cdot\lambda)+\rho)/A(\rho)$, which coincides with $A(w\cdot\lambda+\rho)/A(\rho)$ exactly when $-w_0(w\cdot\lambda)=w\cdot\lambda$.
