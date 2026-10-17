---
id: cex-emg-uniform-one-sign-torus-charge
kind: counterexample
title: "A uniform one-sign charged fluid cannot satisfy Gauss on a compact torus"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-emg-strict-charged-barotropic-system
  - prop-emg-compact-charge-compatibility
  - lem-gr-observer-projection-decomposition
  - lem-gr-future-causal-classification-by-a-timelike-field
  - lem-timelike-cone-has-two-convex-components
  - lem-lorentz-form-has-orthonormal-basis
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  prop-emg-compact-charge-compatibility: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
      locator: "Full book PDF inspected; Chapter IX, especially §IX.13.1 on charged-fluid Maxwell coupling. The compact-slice obstruction below follows from the local Gauss constraint and the proved compatibility proposition."
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
      locator: "Full paper inspected; §3 on charged-fluid current and Maxwell coupling. The example's global contradiction is derived from the stated local model."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement refuted

The claim that smooth sourced-Gauss initial data on a compact boundaryless slice may have a charge-per-number-density scalar $Z$ that is nonzero and has one strict sign everywhere.

## Example

Take $\Sigma=\mathbb T^3_{2\pi}$ with its standard orientation, any smooth Riemannian metric $h$, a future unit normal $n$, smooth strict-EOS density $\epsilon_0$, and smooth future unit velocity $u_0$. If $Z_0$ is everywhere strictly positive or everywhere strictly negative, the sourced electric Gauss constraint cannot hold for any electric field $e$: compact charge compatibility forces the total normal charge to vanish, whereas the strict charged-fluid current gives it the same strict sign as $Z_0$. In particular, the spatially uniform candidate $h=\delta$, $u_0=n$, $\epsilon_0=\epsilon_*>0$, $Z_0=Z_*>0$ and $e=b=0$ fails Gauss pointwise.

## Facts & Assumptions

**Given:** A nonempty compact oriented boundaryless three-manifold $\mathbb T^3_{2\pi}$, the strict charged-fluid model, and its sourced electric Gauss constraint.

[F1] [[def-emg-strict-charged-barotropic-system]]: $j_0=cN(\epsilon_0)Z_0u_0$, $N(\epsilon_0)>0$, $c>0$, and $u_0$ is future unit timelike.

[F2] [[prop-emg-compact-charge-compatibility]]: If the sourced electric Gauss constraint holds on a compact oriented boundaryless slice, then $Q_n=-c^{-1}\int_\Sigma g(j_0,n)\,\operatorname{vol}_h=\int_\Sigma N Z_0(-g(u_0,n))\,\operatorname{vol}_h=0$.

[F3] [[lem-gr-observer-projection-decomposition]]: For a unit timelike observer $n$, every vector decomposes as $u_0=a n+X$ with $a=-g(u_0,n)$, $X\perp n$, and the induced spatial metric satisfies $g(X,X)=h(X,X)\ge0$.

[F4] [[lem-gr-future-causal-classification-by-a-timelike-field]]: The future timelike component consists exactly of timelike vectors whose inner product with the fixed time-orientation field is negative.

[F5] [[lem-timelike-cone-has-two-convex-components]]: In an orthonormal basis whose time vector is future, the future timelike component is $v^0>|v_{\mathrm{vec}}|$.

[F6] [[lem-lorentz-form-has-orthonormal-basis]]: A Lorentzian vector space admits an ordered orthonormal basis of signature $(-,+,+,+)$.

[F7] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: For Euclidean spatial coordinate vectors $x,y$, $|x\cdot y|\le |x||y|$.

## Counterexample

**Proof technique:** direct contradiction with the global charge compatibility identity and pointwise Gauss check for the displayed candidate.

1.1 Suppose such data have $Z_0$ of one strict sign. At a point choose an orthonormal basis by [F6], and choose its time vector in the future component; [F4] fixes that component by the time-orientation field and [F5] gives its coordinate form. Therefore the future unit vectors $u_0$ and $n$ have coordinates $u_0^0>|u_{0,\mathrm{vec}}|$ and $n^0>|n_{\mathrm{vec}}|$. By [F7], $g(u_0,n)=-u_0^0n^0+u_{0,\mathrm{vec}}\cdot n_{\mathrm{vec}}\le-u_0^0n^0+|u_{0,\mathrm{vec}}||n_{\mathrm{vec}}|<0$. Put $a=-g(u_0,n)>0$ and $X=u_0-a n$; then [F3] gives $X\perp n$ and $g(X,X)=h(X,X)\ge0$. The normalization $g(u_0,u_0)=-1$ now gives $-1=-a^2+g(X,X)$, so $a^2=1+g(X,X)\ge1$ and $a\ge1$. Since $N(\epsilon_0)>0$ by [F1], the integrand $NZ_0a$ has the same strict sign as $Z_0$ at every point. Its integral is nonzero: at any point its absolute value is positive, and continuity makes it bounded away from zero on a neighborhood of positive Riemannian volume. This contradicts [F2], which forces the integral to be zero. Therefore no such sourced-Gauss data exist. [F1, F2, F3, F4, F5, F6, F7, given, algebra]

2.1 For the displayed uniform candidate, $N(\epsilon_*)=N_*$ and $j_0=cN_*Z_*n$. Hence $-\mu_0g(j_0,n)=\mu_0cN_*Z_*>0$, whereas $\operatorname{div}_h e=0$ for $e=0$. The sourced Gauss equation is therefore false for that candidate, independently of whether its Einstein constraints hold. [F1, given, algebra] ∎
