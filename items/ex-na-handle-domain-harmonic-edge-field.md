---
id: ex-na-handle-domain-harmonic-edge-field
kind: example
title: A handle-domain harmonic field with nonzero circulation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-na-hcurl-space,
    def-divergence-and-curl-of-a-c1-vector-field,
    thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes,
    cor-vector-valued-ftc-and-lipschitz-bound,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture
        notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element
        exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $\Omega=\{(x,y,z):(\sqrt{x^2+y^2}-R)^2+z^2<r^2\}$ be a solid torus with $R>r>0$. Define
$$u(x,y,z)=\left(-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2},0\right).$$
This is a smooth curl-free and divergence-free field on $\overline\Omega$, tangent to the boundary, whose circulation around the core circle is $2\pi$. Here “harmonic” means curl and divergence both vanish with zero normal boundary component. It is a concrete nonzero-period field caused by the handle; the nonzero period proves it is not the gradient of a single-valued $C^1$ potential. It is the continuous model for the nontrivial cohomology components described in [[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]].

## Facts & Assumptions

**Given:** Countable Choice for the graph-space and real $L^2$ conventions; $R>r>0$, the H(curl) convention of [[def-na-hcurl-space]], the topology-dependent cohomology convention of [[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]], and the core loop $\gamma(\theta)=(R\cos\theta,R\sin\theta,0)$, $0\le\theta\le2\pi$.

[A1] Countable Choice is assumed by the cited H(curl) and cohomology interfaces; the explicit field and circulation computation use no stronger choice axiom. ([[def-countable-choice]])

[F1] H(curl) consists of square-integrable vector fields with square-integrable distributional curl. ([[def-na-hcurl-space]])

[F2] The classical coordinate divergence and curl are given by the usual partial-derivative formulas for a $C^1$ vector field. ([[def-divergence-and-curl-of-a-c1-vector-field]])

[F3] On a noncontractible realization, curl-free edge fields modulo gradients have the first cohomology dimension and must be retained as a harmonic component. ([[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]])

[F4] For a smooth scalar on a smooth segment, the integral of its derivative equals the endpoint difference. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

## Verification

1.1 On $\overline\Omega$, $\sqrt{x^2+y^2}\ge R-r>0$, so every component of $u$ and its first derivatives are bounded; hence $u\in L^2(\Omega;\mathbb R^3)$ and its classical curl is also in $L^2$. Direct differentiation by [F2] gives $\operatorname{div}u=2xy/(x^2+y^2)^2-2xy/(x^2+y^2)^2=0$ and $\operatorname{curl}u=0$. Thus [F1] places $u$ in H(curl) with zero curl. [A1, F1, F2, given, algebra]

2.1 Write $e_\theta=(-\sin\theta,\cos\theta,0)$. On the torus boundary the normal is a linear combination of the meridional radial vector $(\cos\theta,\sin\theta,0)$ and $e_3$, whereas $u=e_\theta/\sqrt{x^2+y^2}$; hence $u\cdot n=0$. Along the core curve, $u(\gamma(\theta))=e_\theta/R$ and $\gamma'(\theta)=R e_\theta$, so $\int_\gamma u\cdot d\ell=\int_0^{2\pi}1\,d\theta=2\pi$. A single-valued $C^1$ potential would have zero integral around every closed curve by [F4], so this field is not such a gradient and represents a nonzero period. This is the type of harmonic component retained by [F3]. [A1, F2, F3, F4, given, algebra] ∎

