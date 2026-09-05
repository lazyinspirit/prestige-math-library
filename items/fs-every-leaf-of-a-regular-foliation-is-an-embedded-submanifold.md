---
id: fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold
kind: false-statement
title: "Every leaf of a regular foliation is an embedded submanifold"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-two-dimensional-torus,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
       thm-regular-foliations-and-integrable-distributions-correspond,
       def-leaf-equivalence-relation-of-an-integrable-distribution,
       thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds,
       def-embedded-submanifold-and-slice-chart,
       lem-integer-part,
       lem-pigeonhole,
       thm-of-archimedean]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Every leaf of a regular foliation is an embedded submanifold.

## Facts & Assumptions

**Given:** An irrational $\alpha$ and, on the standard torus
$\mathbb T^2=\mathbb R^2/\mathbb Z^2$, the constant distribution $\mathcal D$
spanned by the image of $(1,\alpha)$.

[L1] The quotient $\mathbb R^2/\mathbb Z^2$ is the two-torus, with the product
topology and its standard product smooth structure
([[def-two-dimensional-torus]],
[[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[L2] An integrable rank-one distribution determines a regular foliation whose
leaves are its maximal connected integral manifolds
([[thm-regular-foliations-and-integrable-distributions-correspond]]).

[L3] For an integrable distribution, the leaf through a point is its
tangent-curve reachability class and carries the unique maximal connected
integral-manifold structure
([[def-leaf-equivalence-relation-of-an-integrable-distribution]],
[[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[L4] Every real number has an integer part $\lfloor x\rfloor$ satisfying
$\lfloor x\rfloor\le x<\lfloor x\rfloor+1$ ([[lem-integer-part]]).

[L5] The real numbers are Archimedean ([[thm-of-archimedean]]).

[L6] Among $N+1$ objects placed in $N$ classes, two lie in the same class
([[lem-pigeonhole]]).

[L7] A one-dimensional embedded submanifold of a two-manifold is locally an
ambient coordinate line ([[def-embedded-submanifold-and-slice-chart]]).

## Refutation

**Proof technique:** direct.

1.1 On every lifted quotient chart, the linear coordinate $r=y-\alpha x$ is constant in the direction $(1,\alpha)$, so $\mathcal D$ is locally the span of a coordinate vector field and is integrable. By [L2] it determines a regular foliation. Its integral curve through $[0]$ is $\gamma(t)=[(t,\alpha t)]$. Conversely, a piecewise smooth tangent curve lifts locally with derivative $h(t)(1,\alpha)$, so each lifted segment has displacement parallel to $(1,\alpha)$; summing the segments shows that every endpoint reachable from $[0]$ lies in $\gamma(\mathbb R)$. Thus [L3] identifies $\gamma(\mathbb R)$ with the leaf through $[0]$. [L1, L2, L3, given, algebra]

1.2 The derivative of the lifted curve is the nonzero vector $(1,\alpha)$, so $\gamma$ is an immersion. If $\gamma(s)=\gamma(t)$, then $t-s$ and $\alpha(t-s)$ are integers. Irrationality of $\alpha$ forces $t-s=0$, so $\gamma$ is injective. [given, algebra]

1.3 Fix $\varepsilon>0$. By [L5], choose a positive integer $N$ with $1/N<\varepsilon$. Put $r_m=m\alpha-\lfloor m\alpha\rfloor\in[0,1)$ for $0\le m\le N$. Partition $[0,1)$ into the $N$ half-open intervals of length $1/N$. By [L6], two distinct $r_m,r_l$ lie in one interval; after interchanging them if necessary, $0<\delta:=r_l-r_m<1/N$, where positivity follows because equality would make $(l-m)\alpha$ an integer. For the nonzero integer $q=l-m$, one has $q\alpha\equiv\delta\pmod{\mathbb Z}$. [L4, L5, L6, given, choose, algebra]

2.1 Fix $[(u,v)]\in\mathbb T^2$ and let $w\in[0,1)$ represent the class of $v-\alpha u$. With $j=\lfloor w/\delta\rfloor$, [L4] gives $0\le w-j\delta<\delta$. Set $n=jq$ and $t=u+n$. Then $[(t,\alpha t)]=[(u,\alpha u+j\delta)]$, which is within $\varepsilon$ of $[(u,v)]$ in a product quotient chart. Since the point and $\varepsilon$ were arbitrary, the origin leaf is dense in $\mathbb T^2$. [L1, L4, step 1.3, algebra]

3.1 This leaf has dimension $1$ in the $2$-manifold $\mathbb T^2$. If it were embedded, [L7] would give an ambient chart in which its intersection with the chart domain is a coordinate line, which is not dense in that domain. But step 2.1 makes the leaf's intersection with every nonempty open chart domain dense there, a contradiction. Hence the leaf is not embedded. [L1, L7, step 2.1]

4.1 Thus a regular foliation has a nonembedded leaf, so the universal statement is false. [step 1.1, step 3.1] ∎
