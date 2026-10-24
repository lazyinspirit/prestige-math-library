---
id: thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points
kind: theorem
title: Stable and unstable manifolds for a Morse gradient with an arbitrary smooth metric
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morse-function-and-excellent-morse-function, def-riemannian-gradient-of-a-smooth-function, def-nondegenerate-critical-point-nullity-index-and-coindex, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-fundamental-theorem-on-flows, prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Section 1.5 Theorem 1.12 and Lemma 2.21(ii), pp. 47-49 and 80-81"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $f$ be a smooth Morse function on a finite-dimensional smooth manifold
$M$, let $g$ be a smooth Riemannian metric, and set
$X=-\operatorname{grad}_g f$. At a critical point $p$ of Morse index
$\lambda(p)$, there are local $C^1$ stable and unstable embedded disks for
the flow of $X$, of dimensions $\dim M-\lambda(p)$ and $\lambda(p)$.
They are tangent at $p$ to the positive and negative Hessian subspaces,
respectively, using $g_p$ to represent the Hessian as an endomorphism.
Their flow saturations give immersed stable and unstable manifolds wherever
the requisite finite-time flow is defined. Every tangent vector to the
stable manifold along an orbit converging to $p$ gives a variational
solution decaying exponentially in forward time; every tangent vector
to the unstable manifold gives one decaying exponentially in backward time.
This applies to the actual metric gradient; no Euclidean-gradient normal
form for $g$ is assumed.

## Facts & Assumptions

**Given:** The stated $f,g,p,X$ and their local flow.

[F1] The Hessian at a Morse critical point is nondegenerate and its
negative eigenspace has dimension $\lambda(p)$
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[F2] Finite-time flow maps are smooth diffeomorphisms between their open
domains ([[thm-fundamental-theorem-on-flows]],
[[prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]]).

[F3] Finite-dimensional self-adjoint operators split into orthogonal
spectral subspaces
([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Choose a smooth coordinate chart centered at $p$ and represent the vector field by $x'=Ax+R(x)$. Since $df_p=0$, $A=-g_p^{-1}\operatorname{Hess}_p f$; in the $g_p$ inner product it is self-adjoint and nonsingular. By [F1] and [F3] it has a stable spectral space $E^s$ of dimension $d-\lambda(p)$, an unstable space $E^u$ of dimension $\lambda(p)$, orthogonal projections $P_s,P_u$, and $\lambda>0$ with $\|e^{tA}P_s\|\le e^{-\lambda t}$ for $t\ge0$ and $\|e^{tA}P_u\|\le e^{\lambda t}$ for $t\le0$. Moreover $R(0)=DR(0)=0$, and $R$ is $C^2$. [F1, F3, given, algebra]

2.1 Choose a smooth cutoff equal to one on a small ball about zero and zero outside a slightly larger ball, and replace $R$ by the cut-off $R_\delta$. Since $DR(0)=0$, the cutoff radius $\delta$ can be chosen so that $R_\delta$ is globally Lipschitz with constant $\varepsilon$ as small as desired; the derivative of the cutoff contributes at most $O(\sup_{|x|\le2\delta}|R(x)|/\delta)=o(1)$. Fix $0<\beta<\lambda$ and take $\varepsilon((\lambda-\beta)^{-1}+(\lambda+\beta)^{-1})<1$. For $a\in E^s$ define on the weighted continuous-path Banach space $\|z\|_\beta=\sup_{t\ge0}e^{\beta t}|z(t)|$ the map $$\mathcal T_a z(t)=e^{tA}a +\int_0^t e^{(t-s)A}P_sR_\delta(z(s))\,ds -\int_t^\infty e^{(t-s)A}P_uR_\delta(z(s))\,ds.$$ The exponential bounds of step 1.1 make this a contraction with the displayed constant. Iteration from $e^{tA}a$ converges geometrically to its unique fixed point $z_a$, and $\|z_a\|_\beta\le |a|/(1-\varepsilon c_\beta)$. For small $a$, the entire path stays where the cutoff equals one; differentiating the integral equation shows that it solves the actual $x'=X(x)$ and converges exponentially to $p$. [step 1.1, construct, algebra]

3.1 Its initial value is $z_a(0)=a+h(a)$ with $h(a)\in E^u$. The map $a\mapsto z_a$ is $C^1$ in the weighted-path norm. Indeed, $R_\delta$ is $C^2$ with bounded first and second derivatives on the chosen finite-dimensional support, so the integral map in step 2.1 is $C^1$ on the weighted path space; its path derivative has norm below one uniformly. Differentiating the fixed-point equation and summing the resulting Neumann series gives a continuous derivative in $a$. At $a=0$, $z_0=0$ and $DR_\delta(0)=0$, hence $Dh(0)=0$. Consequently $\{a+h(a):a\text{ small in }E^s\}$ is a $C^1$ embedded disk tangent to $E^s$ at $p$. Differentiating $z_a(t)$ with respect to $a$ also shows that every tangent variation to this disk is bounded by $C e^{-\beta t}$ along its forward orbit. [step 1.1, step 2.1, algebra]

4.1 Conversely, any actual orbit that stays in a sufficiently small chart neighbourhood for all $t\ge0$ and converges to $p$ satisfies the integral equation of step 2.1 with $a=P_sx(0)$: variation of constants determines the stable part, while boundedness forces the unstable terminal term to cancel. The same integral operator is a contraction in the ordinary bounded-path norm after making $\varepsilon<\lambda/2$, so that orbit equals $z_a$ and lies in the disk. The disk is therefore the local stable set, not just a selected family of decaying solutions. Time reversal gives the unstable disk, its dimension and tangent space, and exponential decay of its tangent variations as $t\to-\infty$. [step 1.1, step 2.1, step 3.1, cases]

5.1 An orbit converging to $p$ eventually enters the local chart and stays there, so after some finite time it belongs to the local stable disk by step 4.1. The global stable set is the union of finite-time backward flow images of that disk. By [F2] each image is an immersed $C^1$ disk with the same dimension; their structures agree on overlaps by flow uniqueness. A tangent vector at any point transports by the derivative of a finite-time flow into a tangent vector of the local disk, whose variational solution decays exponentially by step 3.1. The same argument with reversed time gives the global unstable manifold and its tangent-decay assertion. No completeness outside the orbits under discussion is required. [F2, step 3.1, step 4.1, algebra] ∎
