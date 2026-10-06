---
id: prop-borel-weil-bott-is-compatible-with-serre-duality
kind: proposition
title: Borel-Weil-Bott is compatible with Serre duality
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
- thm-borel-weil-bott
- lem-a-regular-weight-has-a-unique-dominant-dot-translate
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- lem-flag-variety-canonical-bundle-weight-minus-two-rho
- def-borel-character-equivariant-line-bundle
- prop-highest-weight-of-the-dual-representation
- thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
- def-length-and-longest-element-of-a-finite-weyl-group
- def-dot-action-facets-and-single-wall-translation-data
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
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed p. 3, the Serre-duality finish of Theorem 5: H^i(X,L_lambda) dual to H^{n-i}(X,L_{-lambda}) and the degree count n-i < i(-lambda)"
    - title: "George Boxer and Vincent Pilloni, Notes on Higher Coleman Theory (Montreal 2020)"
      url: "https://www.imo.universite-paris-saclay.fr/~vincent.pilloni/montrealnotes.pdf"
      locator: "Theorem 1.1 with the canonical bundle L_{2rho}, printed p. 3"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in X^*(T)$
and put $\mu=-\lambda-2\rho$, so that
$\mathcal L_\lambda^\vee\otimes K_X\cong\mathcal L_\mu$ by
[[lem-flag-variety-canonical-bundle-weight-minus-two-rho]]. Then:

(i) $\lambda+\rho$ is regular if and only if $\mu+\rho=-(\lambda+\rho)$ is
regular, and if $\lambda+\rho$ is regular with Weyl element $w$ (so
$w(\lambda+\rho)$ is dominant) then the Weyl element of $\mu$ is $u=w_0w$,
with $\ell(u)=N-\ell(w)$ and $N=|\Phi^+|$;

(ii) for regular $\lambda$ the Serre pairing
$H^i(X,\mathcal L_\lambda)^\vee\cong H^{N-i}(X,\mathcal L_\mu)$ at
$i=\ell(w)$ identifies $H^{\ell(w)}(X,\mathcal L_\lambda)^\vee$ with
$H^{N-\ell(w)}(X,\mathcal L_\mu)\cong L(w\cdot\lambda)$, and the
Borel-Weil-Bott descriptions
$H^{\ell(w)}(X,\mathcal L_\lambda)\cong L(w\cdot\lambda)^*$ and
$H^{\ell(u)}(X,\mathcal L_\mu)\cong L(u\cdot\mu)^*\cong L(w\cdot\lambda)$
match under this pairing;

(iii) if $\lambda+\rho$ is singular then all cohomology groups of both
$\mathcal L_\lambda$ and $\mathcal L_\mu$ vanish.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B$, the flag variety $X=G/B$ of dimension $N=|\Phi^+|$, a weight $\lambda$ and $\mu=-\lambda-2\rho$.

[F1] For a regular weight $\nu$ there is a unique $w$ with $w\nu$ dominant, and $\ell(w)=N(\nu)$; for every $w$ one has $\ell(w_0w)=N-\ell(w)$, and regularity is preserved by $W$ ([[lem-a-regular-weight-has-a-unique-dominant-dot-translate]]).

[F2] Borel-Weil-Bott: if $\nu+\rho$ is singular all $H^i(X,\mathcal L_\nu)$ vanish, and if $\nu+\rho$ is regular with Weyl element $v$ then $H^{\ell(v)}(X,\mathcal L_\nu)\cong L(v\cdot\nu)^*$ and all other cohomology vanishes ([[thm-borel-weil-bott]]).

[F3] Serre duality: $\omega_X\cong\mathcal L_{-2\rho}$ and there is a functorial perfect pairing $H^i(X,\mathcal L_\lambda)\times H^{N-i}(X,\mathcal L_\lambda^\vee\otimes\omega_X)\to\mathbb C$ for $0\le i\le N$; the canonical identifications give $\mathcal L_\lambda^\vee\otimes\omega_X\cong\mathcal L_{-\lambda-2\rho}=\mathcal L_\mu$ ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[lem-flag-variety-canonical-bundle-weight-minus-two-rho]], [[def-borel-character-equivariant-line-bundle]]).

[F4] For a dominant integral weight $\nu$, the dual $L(\nu)^*$ is irreducible of highest weight $-w_0\nu$, so $L(-w_0\nu)\cong L(\nu)^*$; applying this twice gives $L(\nu)\cong L(-w_0\nu)^*$ for dominant integral $\nu$, the isomorphism class being determined by the highest weight; a particular isomorphism is not unique ([[prop-highest-weight-of-the-dual-representation]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

[F5] The dot action satisfies $u\cdot\mu=u(\mu+\rho)-\rho$; for $u=w_0w$ and $\mu=-\lambda-2\rho$ one has $u\cdot\mu=-w_0(w\cdot\lambda)$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[def-length-and-longest-element-of-a-finite-weyl-group]]).

## Proof

1.1 Part (i). Since $\mu+\rho=-(\lambda+\rho)$, the pairing of $\mu+\rho$ with every coroot is the negative of that of $\lambda+\rho$, so $\mu+\rho$ is regular exactly when $\lambda+\rho$ is. If $\lambda+\rho$ is regular with Weyl element $w$, then $(w_0w)(\mu+\rho)=-(w_0w)(\lambda+\rho)=-w_0(w(\lambda+\rho))$: as $w(\lambda+\rho)$ is dominant, $w_0(w(\lambda+\rho))$ is antidominant, so its negative is dominant, and by the uniqueness in [F1] the Weyl element of $\mu$ is $u=w_0w$. Its length is $\ell(u)=\ell(w_0w)=N-\ell(w)$ by [F1]. [F1, F5, given, algebra]

2.1 Part (ii). Assume $\lambda+\rho$ regular. By [F2] applied to $\lambda$, $H^{\ell(w)}(X,\mathcal L_\lambda)\cong L(w\cdot\lambda)^*$. By part (i), $u=w_0w$ is the Weyl element of $\mu$, so [F2] applied to $\mu$ gives $H^{N-\ell(w)}(X,\mathcal L_\mu)\cong L(u\cdot\mu)^*$. By [F5], $u\cdot\mu=-w_0(w\cdot\lambda)$; since $w\cdot\lambda$ is dominant integral, [F4] identifies $L(-w_0(w\cdot\lambda))^*$ with $L(w\cdot\lambda)$. The Serre pairing of [F3] at $i=\ell(w)$ is $H^{\ell(w)}(X,\mathcal L_\lambda)^\vee\cong H^{N-\ell(w)}(X,\mathcal L_\mu)$, and the two Borel-Weil-Bott descriptions identify both sides with $L(w\cdot\lambda)$. This identification is $G$-equivariant: the cup product and contraction are natural for the bundle linearizations, while the canonical trace in [F3] is invariant under automorphisms of $X$. Thus the Borel-Weil-Bott module descriptions match under the Serre pairing. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Part (iii). If $\lambda+\rho$ is singular, then $\mu+\rho=-(\lambda+\rho)$ is singular as well by part (i), and [F2] gives the vanishing of all cohomology groups of both $\mathcal L_\lambda$ and $\mathcal L_\mu$. [F2, step 1.1, given] ∎ 
