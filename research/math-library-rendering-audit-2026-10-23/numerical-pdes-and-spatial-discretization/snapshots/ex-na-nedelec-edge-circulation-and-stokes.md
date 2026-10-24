---
id: ex-na-nedelec-edge-circulation-and-stokes
kind: example
title: An oriented Nedelec edge circulation on one tetrahedron
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-na-lowest-order-whitney-de-rham-spaces,
    lem-na-nedelec-edge-unisolvence,
    lem-na-whitney-moments-commute-with-grad-curl-div
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
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

On the reference tetrahedron with vertices $x_0=0$, $x_1=e_1$, $x_2=e_2$, $x_3=e_3$, take the Whitney edge field $\phi_{01}=\lambda_0\nabla\lambda_1-\lambda_1\nabla\lambda_0$ and orient the face $[0,1,2]$ by the vertex order shown. Compute the circulation on $[0,1]$ and the curl flux through $[0,1,2]$.

## Facts & Assumptions

**Given:** The local edge basis and oriented edge and face moments of [[def-na-lowest-order-whitney-de-rham-spaces]], their unisolvence from [[lem-na-nedelec-edge-unisolvence]], and Stokes commutation from [[lem-na-whitney-moments-commute-with-grad-curl-div]].

[F1] The barycentric edge field is $\phi_{01}=\lambda_0\nabla\lambda_1-\lambda_1\nabla\lambda_0$, and its edge circulation is the canonical degree of freedom. ([[def-na-lowest-order-whitney-de-rham-spaces]])

[F2] The six local edge circulations form the dual basis for the Whitney edge fields. ([[lem-na-nedelec-edge-unisolvence]])

[F3] On the oriented face $[0,1,2]$, the curl flux equals the signed sum of its three boundary edge circulations. ([[lem-na-whitney-moments-commute-with-grad-curl-div]])

## Verification

1.1 In the reference coordinates, $\lambda_1=x_1$, $\lambda_0=1-x_1-x_2-x_3$, so $\phi_{01}=(1-x_2-x_3,x_1,x_1)$. Along $[0,1]$, parameterized by $x(t)=(t,0,0)$, this field has tangent component $1$; therefore its oriented circulation is $\int_0^1 1\,dt=1$. [F1, construct, algebra]

2.1 Differentiating the displayed polynomial gives $\operatorname{curl}\phi_{01}=(0,-2,2)$. The oriented face $[0,1,2]$ lies in $x_3=0$ with normal $e_3$ and area $1/2$, so its curl flux is $2\cdot(1/2)=1$. Its oriented boundary is $[1,2]-[0,2]+[0,1]$; by [F2], the first two circulations vanish and the last is one, agreeing with the flux by [F3]. [F1, F2, F3, step 1.1, algebra] ∎

