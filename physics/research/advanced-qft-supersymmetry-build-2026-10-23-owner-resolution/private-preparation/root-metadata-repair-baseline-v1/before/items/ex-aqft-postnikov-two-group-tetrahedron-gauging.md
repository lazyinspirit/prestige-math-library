---
id: "ex-aqft-postnikov-two-group-tetrahedron-gauging"
kind: "example"
title: "Nonzero Postnikov data retain higher gauge volume on a tetrahedron"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 6
deps: ["thm-aqft-finite-two-group-gauging-gluing"]
dependency_roles: {"thm-aqft-finite-two-group-gauging-gluing": "mathematical-premise"}
proof_strategy: "direct"
provenance: {"statement": "ai-generated", "proof": "ai-generated"}
sources: {"references": []}
generation: {"role": "example"}
---

## Example

On the ordered tetrahedron $0<1<2<3$, take $G=A=\mathbb Z_2$ with trivial action and $\beta(g,h,k)=ghk$. This is a normalized $3$-cocycle of nonzero class. There are $64$ background objects, all gauge equivalent. For unit weight the higher sum is $1$, with $\pi_1\cong\mathbb Z_2$ and $\pi_2\cong\mathbb Z_2$ at any background. The nonzero Postnikov cocycle is retained in the gauge transformations and their associator.

## Example references

[[thm-aqft-finite-two-group-gauging-gluing]]

## Facts & Assumptions

**Given:** the tetrahedron and finite data in the Example, with all arithmetic modulo $2$.

[F1] [[thm-aqft-finite-two-group-gauging-gluing]] supplies the full higher object-sum formula, the raw-parameter counts and the relative gauge conventions used in its proof.

## Verification

1.1 Normalization is immediate. The cocycle equation expands to $hkl-(g+h)kl+g(h+k)l-gh(k+l)+ghk=0$ since each monomial occurs twice modulo $2$. If $\beta=\delta c$, its values at $(0,1,1)$ and $(1,0,1)$ imply $c(0,0)=c(0,1)=c(1,0)$. Then $(\delta c)(1,1,1)=c(1,0)-c(0,1)=0$, contradicting $\beta(1,1,1)=1$. [given, F1, algebra]

1.2 Flat edges are determined by three vertex potentials after fixing the potential at $0$, so there are $8$ edge backgrounds. For each, the single tetrahedron equation is one nonzero linear constraint on four face labels, leaving $8$ choices. Thus there are $64$ objects. There are $V=4,E=6$, so $c=2^{4-6}/2^4=1/64$, giving $Z=1$. [given, F1, algebra]

1.3 Vertex labels first gauge every flat edge assignment to zero: if $a_{ij}=x_i+x_j$, choose $g_i=x_i$. The transformed face field is then an ordinary $2$-cocycle. Set $\lambda_{0j}=0$ and $\lambda_{ij}=-B_{0ij}$ for $0<i<j$; its coboundary is $-B$ on faces containing $0$, and the tetrahedron cocycle equation gives the same on $123$. This gauges every object to the zero background. At zero edges, $\ker\delta$ consists of two constant vertex cochains, so $\pi_2\cong\mathbb Z_2$. Raw automorphisms have constant vertex $G$-labels and an edge $1$-cocycle; these number $2\cdot2^3=16$. The image of $\delta:C^0\to C^1$ has $2^3=8$ elements, so $\pi_1$ has order $2$ and is cyclic. [given, F1, algebra]

2.1 The one component therefore has higher mass $2/2=1$, agreeing with the object count. The normalized nonzero cocycle remains in the background and associator formulas; no induced-map quotient or replacement by a split model has entered the calculation. [step 1.1, step 1.2, step 1.3] ∎
