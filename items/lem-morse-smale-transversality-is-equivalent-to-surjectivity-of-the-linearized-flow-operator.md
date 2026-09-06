---
id: lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator
kind: lemma
title: "Morse--Smale transversality and surjectivity of the linearized flow operator"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-smale-pair, def-parametrized-morse-trajectory-space, prop-parametrized-morse-trajectory-space-is-a-manifold, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Lemma 2.21(ii)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Let $f$ be Morse and let $\gamma$ connect critical points $p,q$ for
$X=-\operatorname{grad}_g f$.  Let
$E_\gamma=C^1_0(\mathbb R,\gamma^*TM)$ be the Banach space of $C^1$ sections for which both $\xi$ and $\nabla_t\xi$ tend to zero at $\pm\infty$, with the supremum $C^1$ norm, and let $F_\gamma=C^0_0(\mathbb R,\gamma^*TM)$ have the supremum norm.  For the tangent Levi--Civita connection metric-dual to the cotangent connection, put

$$D_\gamma\xi=\nabla_t\xi+\nabla_\xi\operatorname{grad}_g f.$$ 

Then $D_\gamma:E_\gamma\to F_\gamma$ is bounded Fredholm of index $\lambda(p)-\lambda(q)$, and it is surjective if and only if $W^u(p)$ and $W^s(q)$ are transverse at $\gamma(0)$.

## Facts & Assumptions

**Given:** A Morse function $f$, a connecting orbit $\gamma$ between its critical points $p,q$, and the displayed $C^1_0$ and $C^0_0$ Banach spaces.

[F1] Covariant Hessians define the linearization of the gradient equation ([[def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]]).

[F2] The point-marked trajectory space is the stable--unstable intersection ([[def-parametrized-morse-trajectory-space]]).

## Proof

**Proof technique:** direct.

1.1 Differentiating $\dot\gamma+\operatorname{grad}_g f(\gamma)=0$ in a decaying variation gives the displayed operator, by [F1].  Its kernel is the tangent space of the point-marked solution set. [F1, given]

2.1 The hyperbolic Hessians at $p$ and $q$ give exponential dichotomies at the two ends.  The standard first-order Fredholm theorem therefore gives index $\lambda(p)-\lambda(q)$.  Its adjoint solvability condition identifies the dual cokernel with the annihilator of $T_{\gamma(0)}W^u(p)+T_{\gamma(0)}W^s(q)$, rather than canonically identifying the cokernel itself with a tangent-space quotient. [F2, step 1.1]

3.1 That annihilator vanishes exactly when the two tangent spaces span $T_{\gamma(0)}M$, which is transversality.  Since a Fredholm operator is onto exactly when its cokernel vanishes, this proves the biconditional. [step 2.1, algebra] ∎
