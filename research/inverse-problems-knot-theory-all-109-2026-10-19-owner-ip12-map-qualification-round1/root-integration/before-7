---
id: alg-ip-gaussian-map-feature-test
kind: algorithm
title: Gaussian MAP feature test
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - thm-ip-isonormal-gaussian-posterior-law
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: The procedure itself uses only the Gaussian posterior formula and a specified resolvent; the MAP interpretation inherits the Axiom of Choice required by the posterior RCD theorem.
sources:
  references:
    - title: "Remo Kretschmann and Frank Werner, Maximum a posteriori testing in statistical inverse problems, §1.2 and Theorems 2.3–2.5"
      url: https://arxiv.org/pdf/2402.00686
    - title: "Andrew M. Stuart, Inverse problems: A Bayesian perspective, §6.3"
      url: https://web.stanford.edu/class/ee378a/REFS/stuart.pdf
---

## Definition

Assume the Axiom of Choice. Let $X,H$ be separable real Hilbert spaces, let $K:X\to H$ be bounded, and let $\epsilon>0$. Let $U$ be a Borel Gaussian prior with mean $m_0$ and positive self-adjoint, injective, trace-class covariance $C_0$, independent of a jointly Gaussian centered family $Z$ indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$. For parameter $x\in X$, the observation field is $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$. Fix a feature vector $h\in X$. Let
$$S=C_0^{1/2},\qquad B=SK^*KS,\qquad R=(B+\epsilon^2I_X)^{-1},\qquad \Phi_h=KSRSh,$$
and define the raw threshold
$$c_h=\langle Km_0,\Phi_h\rangle_H-\langle m_0,h\rangle_X.$$
Given a white-noise observation field $y\in\mathbb R^H$, the **Gaussian MAP feature test** returns $1$ exactly when $y(\Phi_h)>c_h$ and returns $0$ otherwise. This strict raw comparison defines the procedure for every field input $y$.

For the posterior kernel $\Pi_y$ with mean $M_y$ supplied by the Gaussian posterior-law theorem, the scalar feature marginal has mode $\langle M_y,h\rangle_X$ for every $y$, with the support point serving as the mode for a zero-variance marginal. For each fixed $h$, under that theorem's prior-predictive observation law $P_Y$, the raw rule agrees for $P_Y$-almost every $y$ with the test that returns $1$ exactly when this posterior marginal mode is positive. The exceptional null set may depend on $h$; no simultaneous equivalence for all features on one sample set is asserted.

If $h=0$, then $\Phi_h=0$ and $c_h=0$. Under every sampling law, $Y_x(0)=0$ almost surely, so the raw test returns $0$ almost surely for observations; the same holds under $P_Y$.

## Definition references

[[thm-ip-isonormal-gaussian-posterior-law|Gaussian posterior law in an isonormal inverse experiment]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, §1.2 and Theorems 2.3–2.5](https://arxiv.org/pdf/2402.00686)

[Stuart, *Inverse problems: A Bayesian perspective*, §6.3](https://web.stanford.edu/class/ee378a/REFS/stuart.pdf)
