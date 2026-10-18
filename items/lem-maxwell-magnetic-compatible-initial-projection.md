---
id: lem-maxwell-magnetic-compatible-initial-projection
kind: lemma
title: Compatible magnetic initial projection for the Maxwell edge method
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-maxwell-edge-fem-semidiscretization
  - lem-na-whitney-moments-commute-with-grad-curl-div
  - thm-na-uniformly-bounded-commuting-cochain-projection
  - lem-maxwell-nedelec-smooth-interpolation-estimate
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§§1.1–1.3, printed pp. 1–6: RT0 face-flux degrees of freedom, commuting divergence moments, and smooth-input interpolation estimates; the compatible projection below is constructed locally."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "§§3.3 and 5.2–5.5, printed pp. 22–24 and 50–57: bounded cochain projections, lowest-order Whitney spaces, and the stated limits of the projection outline."
verification:
  precheck: pass
---

## Statement

Assume the contractible Lipschitz domain and shape-regular mesh-family hypotheses of [[thm-na-uniformly-bounded-commuting-cochain-projection]], with matching affine tetrahedra and the PEC edge space of [[def-maxwell-edge-fem-semidiscretization]]. Assume Countable Choice as in that projection interface. Let $B_0\in H(\operatorname{div};\Omega)$ be piecewise smooth, have matching normal traces, and satisfy $\operatorname{div}B_0=0$. For the approximation bound below, assume all material and field smoothness interfaces are mesh-aligned, with $B_0$ and $\operatorname{div}B_0$ piecewise $C^1$ on cell closures and bounded cellwise first derivatives as in [[lem-maxwell-nedelec-smooth-interpolation-estimate]]. Let $\pi_h^2$ be the degree-two cochain projection in that interface, let $X_h=\operatorname{range}C\subset N_h^2$, and let $P_{X_h}$ be orthogonal projection onto $X_h$ for $(u,v)_{\mu^{-1}}=\int_\Omega u^T\mu^{-1}v\,dx$. Define
$$B_h^0=\pi_h^2B_0+P_{X_h}(B_0-\pi_h^2B_0).$$
Then $B_h^0\in N_h^2$, $D B_h^0=0$, and
$$(B_h^0-B_0,\operatorname{curl}v_h)_{\mu^{-1}}=0\quad(v_h\in V_h),\qquad \|B_h^0-B_0\|_{\mu^{-1}}\le C h\,M_B,$$
where $V_h=N_h^1\cap H_0(\operatorname{curl};\Omega)$ and $M_B$ is the maximum of the piecewise first-derivative bounds for $B_0$ and $\operatorname{div}B_0$ used by the smooth interpolation estimate. The error constant is uniform over the shape-regular family when the commuting projection norms are uniformly bounded.

## Facts & Assumptions


**Given:** The finite element spaces, curl matrix $C$, divergence matrix $D$, positive magnetic inner product, and the declared Countable Choice branch.

[A1] Countable Choice is the only choice axiom required by the current bounded commuting projection interface; this proof makes no stronger choice assumption. ([[def-countable-choice]])

[F1] The degree-two and degree-three operators $\pi_h^2,\pi_h^3$ are projections onto $N_h^2,N_h^3$, are uniformly bounded on their de Rham graph spaces, and satisfy $\operatorname{div}\pi_h^2=\pi_h^3\operatorname{div}$. ([[thm-na-uniformly-bounded-commuting-cochain-projection]])

[F2] The oriented moment matrices represent $\operatorname{curl}:V_h\to N_h^2$ and $\operatorname{div}:N_h^2\to N_h^3$, with $DC=0$. ([[def-maxwell-edge-fem-semidiscretization]], [[lem-na-whitney-moments-commute-with-grad-curl-div]])

[F3] Under the stated mesh alignment and cellwise $C^1$ bounds, for $B_0$ with matching normal traces, the canonical face interpolant $I_h^2B_0$ lies in $N_h^2$ and has $\|B_0-I_h^2B_0\|_{H(\operatorname{div})}\le C h M_B$. ([[lem-maxwell-nedelec-smooth-interpolation-estimate]])

## Proof

1.1 The subspace $X_h$ is finite dimensional. In a basis of $X_h$, its $\mu^{-1}$ Gram matrix is symmetric positive definite, so the normal equations have one solution for each $B_0-\pi_h^2B_0$; this defines $P_{X_h}$. Its value lies in $X_h\subset N_h^2$, and the definition of orthogonal projection gives $B_h^0-B_0=-(I-P_{X_h})(B_0-\pi_h^2B_0)\perp_{\mu^{-1}}X_h$. Orthogonal decomposition yields $\|B_h^0-B_0\|_{\mu^{-1}}\le\|B_0-\pi_h^2B_0\|_{\mu^{-1}}$. [A1, given, construct, algebra]

2.1 Since $I_h^2B_0\in N_h^2$ and $\pi_h^2$ is a projection, $\pi_h^2 I_h^2B_0=I_h^2B_0$. Thus $B_0-\pi_h^2B_0=(I-\pi_h^2)(B_0-I_h^2B_0)$. Uniform boundedness of $\pi_h^2$ on $H(\operatorname{div})$, norm equivalence from the coefficient bounds, and [F3] imply $\|B_0-\pi_h^2B_0\|_{\mu^{-1}}\le C h M_B$. Combining with step 1.1 gives the asserted approximation estimate. [F1, F3, step 1.1, algebra]

3.1 The projection identity and [F1] give $D\pi_h^2B_0=\pi_h^3(\operatorname{div}B_0)=0$. Every element of $X_h$ is a discrete curl, so [F2] gives $D P_{X_h}(B_0-\pi_h^2B_0)=0$. Adding the two terms proves $D B_h^0=0$. [F1, F2, given, step 1.1, algebra] ∎
