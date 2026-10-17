---
id: thm-affine-random-diffusion-solution-is-bochner
kind: theorem
title: Affine random diffusion has a measurable Bochner solution
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-uniformly-elliptic-affine-random-diffusion
  - lem-affine-form-integrable-on-bochner-l2
  - thm-finite-input-bochner-l2-is-hilbert
  - thm-lax-milgram
  - def-countable-choice
  - lem-borel-map-into-separable-banach-is-strongly-measurable
  - lem-parabolic-zero-boundary-sobolev-space-is-separable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is used by pointwise Lax–Milgram and the Bochner Hilbert interface. No Axiom of Choice is used.
verification: {}
sources:
  references:
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §1
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §4
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Under the hypotheses of [[def-uniformly-elliptic-affine-random-diffusion]],
for each $y\in\Gamma$ there is a unique $u(y)\in V$ satisfying the pointwise
weak problem. The map $y\mapsto u(y)$ is Lipschitz on the bounded parameter
set, strongly measurable, and belongs to $L^2_\rho(V)$. It is also the unique
solution of the Bochner weak equation
$$\mathcal A(u,W)=\mathcal F(W)\qquad(W\in L^2_\rho(V)).$$

## Facts & Assumptions

**Given:** A bounded product parameter set, affine coefficient and forcing, and constants $0<a_*\le a^*$ as in [[def-uniformly-elliptic-affine-random-diffusion]].

[F1] [[lem-parabolic-zero-boundary-sobolev-space-is-separable]] supplies the separable real Hilbert structure on $V=H^1_0(D)$ under Countable Choice.

[F2] Pointwise $a_y$ is a bounded real bilinear form, with $|a_y(v,w)|\le a^*\|v\|_V\|w\|_V$ and $a_y(v,v)\ge a_*\|v\|_V^2$, by the coefficient bounds in [[def-uniformly-elliptic-affine-random-diffusion]].

[F3] The real bilinear Lax–Milgram theorem under Countable Choice gives a unique solution and $\|u(y)\|_V\le\|F(y)\|_{V^*}/a_*$ ([[thm-lax-milgram]], [[def-countable-choice]]).

[F4] A Borel map into the separable Banach space $V$ is strongly measurable ([[lem-borel-map-into-separable-banach-is-strongly-measurable]]).

[F5] [[lem-affine-form-integrable-on-bochner-l2]] supplies measurability, integrability, continuity, and coercivity of $\mathcal A$ and boundedness of $\mathcal F$ on $L^2_\rho(V)$.

[F6] $L^2_\rho(V)$ is a Hilbert space and finite-valued simple functions are dense ([[thm-finite-input-bochner-l2-is-hilbert]]).

## Proof

1.1 For each $y\in\Gamma$, [F2] verifies the boundedness and coercivity hypotheses of [F3], while $F(y)=f_0+\sum_j y_j f_j$ is a bounded functional. Lax–Milgram gives a unique $u(y)\in V$ and $\|u(y)\|_V\le F_{\max}/a_*$, where $F_{\max}:=\sup_{y\in\Gamma}\|F(y)\|_{V^*}<\infty$ because $\Gamma$ is bounded. [F1, F2, F3, given]

2.1 For $y,z\in\Gamma$, put $d=u(y)-u(z)$ and subtract the weak equations: $a_y(d,v)=(F(y)-F(z))(v)+(a_z-a_y)(u(z),v).$ The affine formulas give $\|F(y)-F(z)\|_{V^*}\le C_F\|y-z\|_1$ and $|a_z(v,w)-a_y(v,w)|\le C_a\|y-z\|_1\|v\|_V\|w\|_V$, where $C_F=\sum_j\|f_j\|_{V^*}$ and $C_a=\sum_j\|a_j\|_{L^\infty(D)}$. Set $v=d$ and use [F2] and the bound $\|u(z)\|_V\le F_{\max}/a_*$ from step 1.1. If $d\ne0$, divide the resulting coercive inequality by $\|d\|_V$; if $d=0$ the conclusion is immediate. This proves $\|u(y)-u(z)\|_V\le a_*^{-1}(C_F+C_aF_{\max}/a_*)\|y-z\|_1$. Thus $u$ is Lipschitz and Borel measurable. [F2, step 1.1, algebra]

2.2 Since $V$ is separable, [F4] makes $u$ strongly measurable. The uniform bound in step 1.1 and $\rho(\Gamma)=1$ give $\int_\Gamma\|u(y)\|_V^2\,d\rho(y)\le(F_{\max}/a_*)^2<\infty$, so $u\in L^2_\rho(V)$. [F1, F4, step 1.1]

3.1 For a finite-valued simple test $W(y)=\sum_{i=1}^m\mathbf1_{E_i}(y)v_i$, integrate the pointwise weak identity for each $v_i$ over $E_i$ and sum; [F5] ensures the scalar integrands are measurable and integrable. This gives $\mathcal A(u,W)=\mathcal F(W)$. [F5, step 2.2]

4.1 The bounds in [F5] make both sides continuous on $L^2_\rho(V)$. Finite-valued simple tests are dense by [F6], so step 3.1 extends to every $W$. If two Bochner solutions existed, testing their difference against itself and using the coercivity bound in [F5] would force their difference to be zero. [F5, F6, step 3.1, algebra] ∎