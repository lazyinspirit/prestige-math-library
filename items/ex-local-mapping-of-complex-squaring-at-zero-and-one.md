---
id: ex-local-mapping-of-complex-squaring-at-zero-and-one
kind: example
title: "The local mapping of complex squaring at zero and at one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-degree-holomorphic-map, cor-local-multiplicity-count-holomorphic-map, thm-holomorphic-inverse-function-theorem, thm-complex-nth-roots-and-roots-of-unity, thm-algebra-of-complex-derivatives]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Example

For $f(z)=z^2$, the point $0$ has local degree $2$ and is a branch point: every sufficiently small nonzero value has two distinct nearby preimages. The point $1$ has local degree $1$, and $f$ is biholomorphic on a sufficiently small neighbourhood of $1$.

## Facts & Assumptions

**Given:** The entire function $f(z)=z^2$, the algebra of complex polynomial derivatives ([[thm-algebra-of-complex-derivatives]]), and the fact that a nonzero complex number has exactly two square roots ([[thm-complex-nth-roots-and-roots-of-unity]]).

[L1] If $\Omega$ is a complex domain, $f:\Omega\to\mathbb C$ is nonconstant and holomorphic, and $a\in\Omega$, then the local degree is $\deg_a f=\operatorname{ord}_a(f-f(a))$ ([[def-local-degree-holomorphic-map]]).

[L2] If $\Omega$ is a complex domain, $f:\Omega\to\mathbb C$ is nonconstant and holomorphic, $a\in\Omega$, and $m=\deg_a f$, then every neighbourhood $N$ of $a$ contains an open neighbourhood $V$ for which some $\rho>0$ gives exactly $m$ preimages in $V$ for $0<|w-f(a)|<\rho^m$, while $f(a)$ has only the preimage $a$, counted with multiplicity $m$ ([[cor-local-multiplicity-count-holomorphic-map]]).

[L3] If $f$ is nonconstant and holomorphic on a complex domain $\Omega$ and $a\in\Omega$, then $f'(a)\ne0$, $\deg_a f=1$, local injectivity at $a$, and biholomorphy between neighbourhoods of $a$ and $f(a)$ are equivalent ([[thm-holomorphic-inverse-function-theorem]]).

## Verification

**Proof technique:** direct.

1.1 At $0$, one has $f(z)-f(0)=z^2$, so [L1] gives $\deg_0f=2$. By [L2], every sufficiently small nonzero $w$ has exactly two local preimages; explicitly they are the distinct roots $z$ and $-z$, while $w=0$ has only the preimage $0$ with multiplicity $2$. [L1, L2, given, algebra]

1.2 At $1$, $f(z)-f(1)=(z-1)(z+1)$ and the factor $z+1$ is nonzero at $1$, so [L1] gives $\deg_1f=1$. Hence [L3] makes $f$ biholomorphic between neighbourhoods of $1$ and $1$. [L1, L3, algebra]

2.1 The injectivity can also be seen explicitly on $D(1,1/2)$. If $z,w$ lie in that disc and $z^2=w^2$, then $z=w$ or $z=-w$; the second alternative would give $2=|(z-1)+(w-1)|<1$, which is impossible. [step 1.2, algebra] ∎
