---
id: prop-endomorphisms-form-a-ring
kind: proposition
title: "Module endomorphisms form a ring under pointwise addition and composition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-endomorphism-ring-of-a-module, def-hom-groups-and-induced-hom-maps,
       def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

For every left $R$-module $M$, pointwise addition and composition make $\operatorname{End}_R(M)$ a unital ring with identity $\operatorname{id}_M$. See [[def-endomorphism-ring-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a left $R$-module $M$, define $$\operatorname{End}_R(M):=\operatorname{Hom}_R(M,M).$$ Addition is pointwise and multiplication is composition, $(fg)(m):=f(g(m))$. The ring laws and the identity endomorphism are established in prop-endomorphisms-form-a-ring. ([[def-endomorphism-ring-of-a-module]]).

[L2] For left $R$-modules $M,N$, the set $\operatorname{Hom}_R(M,N)$ of module homomorphisms is an abelian group under pointwise addition, with zero the zero homomorphism and inverse $(-f)(m)=-f(m)$ (def-module-homomorphism-kernel-image-and-cokernel, def-group). ([[def-hom-groups-and-induced-hom-maps]]).

[L3] For left $R$-modules $M,N$, a function $f:M\to N$ is an $R$-module homomorphism if $f(m+m')=f(m)+f(m')$ and $f(rm)=rf(m)$ for all $m,m'\in M$ and $r\in R$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 If $f,g\in\operatorname{End}_R(M)$ then $f\circ g$ is again a module homomorphism, since $(f\circ g)(m+n)=f(g(m)+g(n))=(f\circ g)(m)+(f\circ g)(n)$ and $(f\circ g)(rm)=f(rg(m))=r(f\circ g)(m)$. So composition is a binary operation on $\operatorname{End}_R(M)$. [L1, L3, given, algebra]

1.2 Taking $N=M$ in [L2] makes $(\operatorname{End}_R(M),+)$ an abelian group, with the zero homomorphism as neutral element and $(-f)(m)=-f(m)$ as the inverse of $f$. [L1, L2]

1.3 Composition is associative: for all $m$, $\bigl(f\circ(g\circ h)\bigr)(m)=f(g(h(m)))=\bigl((f\circ g)\circ h\bigr)(m)$. [L1, algebra]

1.4 Both distributive laws hold. For all $m$, $\bigl(f\circ(g+h)\bigr)(m)=f(g(m)+h(m))=f(g(m))+f(h(m))=(f\circ g+f\circ h)(m)$, where the middle equality is additivity of $f$; and $\bigl((g+h)\circ f\bigr)(m)=g(f(m))+h(f(m))=(g\circ f+h\circ f)(m)$ directly from pointwise addition. [L1, L2, L3, algebra]

1.5 The identity map $\operatorname{id}_M$ satisfies $\operatorname{id}_M(m+n)=m+n$ and $\operatorname{id}_M(rm)=rm$, so it lies in $\operatorname{End}_R(M)$, and $f\circ\operatorname{id}_M=f=\operatorname{id}_M\circ f$ for every $f$. [L1, L3, algebra]

2.1 Steps 1.1 through 1.5 are exactly the axioms of a unital ring for $(\operatorname{End}_R(M),+,\circ,\operatorname{id}_M)$. For the zero module the only map $0\to0$ is $\operatorname{id}_0$, so $\operatorname{End}_R(0)$ has one element and is the one-element ring, in which the identity coincides with the zero element. This proves the stated claim. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, algebra] ∎
