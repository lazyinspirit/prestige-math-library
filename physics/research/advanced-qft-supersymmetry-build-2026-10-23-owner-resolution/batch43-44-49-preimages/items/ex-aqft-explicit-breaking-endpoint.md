---
id: ex-aqft-explicit-breaking-endpoint
kind: example
title: "A fixed source breaks the matching symmetry"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-anomaly-matching-and-frontier-examples
dependency_level: 6
deps:
  - pthm-aqft-symmetry-preserving-rg-anomaly-match
dependency_roles:
  pthm-aqft-symmetry-preserving-rg-anomaly-match: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "Exact symmetry check in a finite four-dimensional periodic complex-scalar lattice model with an explicit source; no anomaly phase, continuum limit, or empirical conclusion is asserted."
sources:
  references:
    - title: "Jeffrey A. Harvey, TASI 2003 Lectures on Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0509097"
      locator: "§2.3 for the unbroken-global-symmetry hypothesis in anomaly matching."
    - title: "David Tong, Gauge Theory, full lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§3.5, printed pp. 176–178, for anomaly matching conditional on the symmetry surviving in the infrared."
verification:
  precheck: pending
---

## Example

Let $\Lambda_a=(a\mathbb Z/Na\mathbb Z)^4$ be the periodic four-dimensional lattice with $N\geq2$ sites in each direction and spacing $a>0$; each coordinate is taken modulo $Na$. At each site $x$ take a complex scalar $\phi_x$ of mass dimension one. In natural units $c=\hbar=1$, choose a mass $m_0>0$ and a dimensionless coupling $\lambda>0$, and define the finite Euclidean action

$$
S_j[\phi]=a^4\sum_{x\in\Lambda_a}\left(\sum_{\nu=1}^{4}\left|\frac{\phi_{x+a\hat\nu}-\phi_x}{a}\right|^2+m_0^2|\phi_x|^2+\lambda|\phi_x|^4+j(\phi_x+\overline{\phi_x})\right),
$$

where the fixed real source $j\neq0$ has mass dimension three. The finite-dimensional Lebesgue integral converges because the positive quartic term dominates the linear source. The source-free action has a global $U(1)$ transformation $\phi_x\mapsto e^{i\alpha}\phi_x$, but the fixed-source theory does not. Consequently this endpoint fails the exact-symmetry hypothesis of the anomaly-matching theorem; the example asserts no change, absence, or value of an anomaly.

## Example references

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)

[Tong, *Gauge Theory*, §3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

## Verification

**Given:** The finite periodic lattice, the action and units in the Example, $m_0>0$, $\lambda>0$, and a fixed $j\neq0$.

[F1] [[pthm-aqft-symmetry-preserving-rg-anomaly-match]]: the matching conclusion assumes the same exact global symmetry is unbroken along the RG comparison.

[A1] The source $j$ is a fixed parameter and is not transformed as a spurion.

1.1 Choose $R>0$ with $R^3\ge4|j|/\lambda$. For $r\ge R$, $\lambda r^4-2|j|r\ge(\lambda/2)r^4$; on $0\le r<R$, the continuous function $(\lambda/2)r^4-\lambda r^4+2|j|r$ has a finite maximum $K$, so $\lambda r^4-2|j|r\ge(\lambda/2)r^4-K$ for every $r\ge0$. Since the kinetic and mass terms are nonnegative, $S_j[\phi]\ge a^4(\lambda/2)\sum_x|\phi_x|^4-a^4KN^4$. In polar coordinates, each one-site factor $\int_{\mathbb C}e^{-a^4(\lambda/2)|z|^4}\,d^2z=2\pi\int_0^\infty r e^{-a^4(\lambda/2)r^4}\,dr$ is finite; the finite product over $N^4$ sites proves convergence of the full Boltzmann integral. Under the global rotation, the source summand changes from $j(\phi_x+\overline{\phi_x})$ to $j(e^{i\alpha}\phi_x+e^{-i\alpha}\overline{\phi_x})$, whose derivative at $\alpha=0$ is $ij(\phi_x-\overline{\phi_x})$. [given, A1, algebra]

1.2 Choose the allowed configuration $\phi_x=ir$ at every site with real $r\neq0$. The derivative of the full source term is $-2a^4j r N^4\neq0$. Therefore the fixed-source action is not invariant under $U(1)$, so this model cannot be the endpoint of an exact $U(1)$-preserving flow as required by [F1]. No anomaly-matching conclusion follows for this explicitly broken model. [F1, A1, step 1.1, algebra] ∎
