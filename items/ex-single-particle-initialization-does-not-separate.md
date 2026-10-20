---
id: ex-single-particle-initialization-does-not-separate
kind: example
title: A single particle does not separate two spheres
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "The explicit path example is choice-free."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
---
## Example

Let $d\ge2$ and $0<r_a<r_b$. The one-particle initialization $\mu_0$ that assigns unit mass to the origin has compact support $\{0\}\subset B(0,r_b)$, but its support does not separate $r_a\mathbb S^{d-1}$ from $r_b\mathbb S^{d-1}$: a path from the inner to the outer sphere can avoid the origin.

## Example references

[Chizat and Bach, Theorem 3.3 and Definition of separation](https://arxiv.org/pdf/1805.09545)

[Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

## Facts & Assumptions

**Given:** $d,r_a,r_b$, and the support in the Example.

## Verification

**Given:** Standard basis vectors $e_1,e_2\in\mathbb R^d$.

1.1 The path consisting of the radius-$r_a$ circular arc from $r_ae_1$ to $r_ae_2$, the radial segment from $r_ae_2$ to $r_be_2$, and the radius-$r_b$ circular arc from $r_be_2$ to $r_be_1$ is continuous after linear reparameterization of its three pieces. Its endpoints lie on the required spheres and every point on it has norm at least $r_a>0$. [given, construct]

2.1 The path therefore avoids $\operatorname{spt}\mu_0=\{0\}$ while joining the two spheres. By the definition of separation, this support does not separate them. [given, step 1.1] ∎
