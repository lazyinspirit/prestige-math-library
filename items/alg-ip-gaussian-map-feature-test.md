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

Assume the Axiom of Choice. Let $X,H$ be separable real Hilbert spaces, let $K:X\to H$ be bounded and linear, and let $\epsilon>0$. Let $U$ be a Borel Gaussian prior with mean $m_0$ and positive self-adjoint, injective, trace-class covariance $C_0$, independent of a jointly Gaussian centered family $Z$ indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$. For parameter $x\in X$, the observation field is $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$. Fix a feature vector $h\in X$. Let
$$S=C_0^{1/2},\qquad B=SK^*KS,\qquad R=(B+\epsilon^2I_X)^{-1},\qquad \Phi_h=KSRSh,$$
and define the raw threshold
$$c_h=\langle Km_0,\Phi_h\rangle_H-\langle m_0,h\rangle_X.$$
Input a white-noise observation field $y\in\mathbb R^H$. Compute $q=y(\Phi_h)-c_h$. Return $1$ when $q>0$ and return $0$ when $q\le0$. This strict raw comparison defines the **Gaussian MAP feature test** for every field input $y$.

## Definition references

[[thm-ip-isonormal-gaussian-posterior-law|Gaussian posterior law in an isonormal inverse experiment]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, §1.2 and Theorems 2.3–2.5](https://arxiv.org/pdf/2402.00686)

[Stuart, *Inverse problems: A Bayesian perspective*, §6.3](https://web.stanford.edu/class/ee378a/REFS/stuart.pdf)
