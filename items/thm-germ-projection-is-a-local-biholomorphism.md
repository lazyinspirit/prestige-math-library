---
id: thm-germ-projection-is-a-local-biholomorphism
kind: theorem
title: "The germ projection is a local biholomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-germ-neighborhoods-form-a-riemann-surface-basis, def-biholomorphic-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Theorem 4.3"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let $p:\mathcal R(\xi_0,\Omega)\to\Omega$ be the projection of the Riemann
surface of a complete analytic function. Then $p$ is a local biholomorphism.

## Facts & Assumptions

**Given:** The projection $p([f]_z)=z$ on the germ surface
$\mathcal R(\xi_0,\Omega)$.

[L1] The germ neighborhoods form a holomorphic atlas, and on each basis element
$N(f,U)$ the chart $\phi_{f,U}([f]_z)=z$ is a homeomorphism onto $U$
([[lem-germ-neighborhoods-form-a-riemann-surface-basis]]).

[L2] A map is locally biholomorphic when every point has neighbourhoods on which
the map restricts to a biholomorphism ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $\xi=[f]_z$ be a point of the germ surface. By [L1], the basis neighbourhood $N(f,U)$ of $\xi$ is mapped by the projection $p$ exactly as the chart $\phi_{f,U}$, namely $p|_{N(f,U)}=\phi_{f,U}:N(f,U)\to U$, and its inverse is $u \mapsto [f]_u$. [L1, given]

2.1 Fact [L1] makes both $p|_{N(f,U)}$ and its inverse holomorphic in the chosen charts. Therefore $p|_{N(f,U)}$ is a biholomorphism onto the open set $U$, and [L2] shows that $p$ is a local biholomorphism. [step 1.1, L1, L2] ∎
