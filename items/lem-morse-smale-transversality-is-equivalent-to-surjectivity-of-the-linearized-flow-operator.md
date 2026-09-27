---
id: lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator
kind: lemma
title: "Morse--Smale transversality and surjectivity of the linearized flow operator"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-smale-pair, def-parametrized-morse-trajectory-space, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle, lem-first-order-asymptotically-hyperbolic-operator-is-fredholm, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Lemma 3.11(ii)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $f$ be a smooth Morse function, let $g$ be a smooth Riemannian metric,
and let $\gamma$ be a full negative-$g$-gradient orbit connecting critical
points $p,q$. Let
$E_\gamma=C^1_0(\mathbb R,\gamma^*TM)$ be the Banach space of $C^1$ sections for which both $\xi$ and $\nabla_t\xi$ tend to zero at $\pm\infty$, with the supremum $C^1$ norm, and let $F_\gamma=C^0_0(\mathbb R,\gamma^*TM)$ have the supremum norm.  For the tangent Levi--Civita connection metric-dual to the cotangent connection, put

$$D_\gamma\xi=\nabla_t\xi+\nabla_\xi\operatorname{grad}_g f.$$

Then $D_\gamma:E_\gamma\to F_\gamma$ is bounded Fredholm of index $\lambda(p)-\lambda(q)$, and it is surjective if and only if $W^u(p)$ and $W^s(q)$ are transverse at $\gamma(0)$.

## Facts & Assumptions

**Given:** The smooth $f,g$, connecting orbit $\gamma$, and displayed $C^1_0$ and $C^0_0$ Banach spaces.

[F1] Covariant Hessians define the linearization of the gradient equation ([[def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]]).

[F2] The point-marked trajectory set is the stable--unstable intersection ([[def-parametrized-morse-trajectory-space]]), using the metric-gradient version of [[def-morse-smale-pair]].

[L1] For a continuous first-order matrix path with invertible self-adjoint limits, the operator on precisely $C^1_0(\mathbb R)\to C^0_0(\mathbb R)$ is Fredholm; its index and range are determined by the two decaying initial-value spaces ([[lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]]).

[L2] The stable and unstable manifolds for an actual smooth metric gradient have the expected dimensions, and tangent variations along a converging orbit decay exponentially at the appropriate end ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]]).

## Proof

**Proof technique:** direct.

1.1 Differentiating $\dot\gamma+\operatorname{grad}_g f(\gamma)=0$ in a decaying variation gives the displayed operator by [F1]. Since $\gamma$ converges to the critical points and $\nabla\operatorname{grad}_g f$ is continuous, its coefficient along $\gamma$ is bounded; hence $D_\gamma:E_\gamma\to F_\gamma$ is bounded. [F1, given]

2.1 By [L2], $\gamma(t)$ approaches $p$ and $q$ exponentially at the two ends. Parallel transport a $g$-orthonormal frame along $\gamma$. In fixed endpoint coordinates its transport equation has coefficients bounded by a constant times $|\dot\gamma(t)|$, which are integrable on both tails; hence the frame converges at each end to an orthonormal frame. In this frame, $\nabla_t$ is ordinary differentiation, so $D_\gamma$ becomes $z'-A(t)z$, with $A(t)$ converging to $-g_p^{-1}\operatorname{Hess}_p f$ at $-\infty$ and $-g_q^{-1}\operatorname{Hess}_q f$ at $+\infty$. These limits are self-adjoint for the endpoint inner products and invertible because $f$ is Morse. Parallel transport preserves norms and takes $\nabla_t\xi$ to $z'$, so it identifies exactly the displayed $C^1_0$ and $C^0_0$ spaces, not a weighted Sobolev replacement. [F1, L2, step 1.1, algebra]

3.1 Apply [L1] to step 2.1. Its negative-end decaying initial-value space has dimension $\lambda(p)$, and its positive-end space has dimension $\dim M-\lambda(q)$; therefore $D_\gamma$ is Fredholm of index $\lambda(p)-\lambda(q)$. By [L2], differentiating the flow along $W^u(p)$ gives decaying negative-end variational solutions, and differentiating along $W^s(q)$ gives decaying positive-end ones. Both tangent spaces have exactly the corresponding dimensions, so inclusion implies equality with the two ODE initial-value spaces at $\gamma(0)$. The cokernel is consequently isomorphic, through the chosen half-line right inverses, to $T_{\gamma(0)}M/(T_{\gamma(0)}W^u(p)+T_{\gamma(0)}W^s(q))$. [L1, L2, step 2.1, algebra]

4.1 The quotient in step 3.1 vanishes exactly when the two tangent spaces span $T_{\gamma(0)}M$, which is transversality. By [L1], that quotient vanishes exactly when $D_\gamma$ is onto. This proves the biconditional and the index assertion. [F2, L1, step 3.1, algebra] ∎
