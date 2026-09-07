---
id: prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond
title: "Orientation identifies top forms with signed densities"
kind: proposition
status: draft
origin: pipeline
deps: ["thm-density-integration-is-defined-without-an-orientation", "def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Nicolaescu §3.4.2, p.120, paragraph from the orientation isomorphism through the gluing formula"
      url: "https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

A chosen orientation on $M^n$ determines a smooth real-linear bundle isomorphism from top forms to signed densities. In a signed chart it is
$$J_o(f\,dx^1\wedge\cdots\wedge dx^n)=\sigma_\phi f\,|dx|.$$
For $n=0$ it sends $f(p)$ to $\varepsilon(p)f(p)$. It preserves support and, assuming $\mathrm{AC}_\omega$, preserves the integral for compact support. Reversing orientation negates $J_o$.

## Facts & Assumptions

[F1] [[thm-density-integration-is-defined-without-an-orientation]]: Compactly supported smooth density integration is independent of charts and partition, linear, local, nonnegative on nonnegative densities and strictly positive for a nonzero nonnegative density. It is invariant under every diffeomorphism, without choosing an orientation. The finite-parametrization formula holds under the hypotheses of prop-integration-of-top-forms-by-finite-parametrizations, with orientation preservation omitted and absolute Jacobians used.

[F2] [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]: Assume $\mathrm{AC}_\omega$. For an oriented smooth manifold $M^n$, possibly with boundary, and $\omega\in\Omega_c^n(M)$, choose a smooth partition $(\rho_i)$ subordinate to connected interior or boundary charts $(U_i,\phi_i)$. For $n\geq1$ set $$\int_M\omega=\sum_i I_{\phi_i}(\rho_i\omega).$$ Each product has compact support in its chart and only finitely many are nonzero, by lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form. For $n=0$ set $\int_M\omega=\sum_{p\in\operatorname{supp}\omega}\varepsilon(p)\omega(p).$ $\Lambda^0T_p^*M\cong\mathbb R$ has two orientations; define $\varepsilon(p)=+1$ when $1$ is positive in the chosen orientation and $\varepsilon(p)=-1$ when $-1$ is positive. A zero-manifold is discrete; the singleton open cover of a compact subset has a finite subcover. Thus this sum too is finite. Empty support or empty $M$ gives zero. Independence of the choices is discharged by thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 On a coordinate overlap with transition $G$, $f_x=(f_y\circ G)\det DG$ and $\sigma_x\operatorname{sgn}\det DG=\sigma_y$. Therefore $\sigma_xf_x=(\sigma_yf_y)\circ G\,|\det DG|$, exactly the density gluing law. Local multiplication by $\sigma_x$ is smooth, linear, and invertible with inverse the same sign. [F1, F2]

2.1 The coefficient vanishes exactly when its image does, so the support is unchanged. Under $\mathrm{AC}_\omega$, each weighted density integral equals its signed form chart integral, and the finite sums agree. In zero dimension the same equality is the signed scalar formula. Changing the orientation changes all signs and hence negates the map, including at a single point or on the zero form. [F1, F2, step 1.1] ∎
