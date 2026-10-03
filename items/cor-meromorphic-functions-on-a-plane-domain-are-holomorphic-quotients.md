---
id: cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients
kind: corollary
title: "Every meromorphic function on a plane domain is a quotient of holomorphic functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-meromorphic-function-complex-domain,
       thm-removable-singularity-characterizations,
       thm-zero-divisor-theorem-on-plane-domains]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/frontier-38-owner-30-step6-zero-divisor-corollary-repair.json
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 8.2.8, p. 207"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §3.3 and §4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Every meromorphic function on a plane domain is a quotient of holomorphic
functions.

## Facts & Assumptions

**Given:** A meromorphic function $f$ on a plane domain $\Omega$.

[L1] A meromorphic function is holomorphic away from a discrete pole set ([[def-meromorphic-function-complex-domain]]).

[L2] Every effective divisor with locally finite positive support on a plane domain is the zero divisor of a nonzero holomorphic function ([[thm-zero-divisor-theorem-on-plane-domains]]).

[L3] A locally bounded punctured singularity is removable ([[thm-removable-singularity-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Let $P$ be the pole set of $f$, with multiplicities equal to its positive finite pole orders. Each $x\in\Omega\setminus P$ has a holomorphy neighbourhood disjoint from $P$, and each $a\in P$ has an isolated-pole neighbourhood meeting $P$ only at $a$. Hence every point of $\Omega$ has a neighbourhood meeting $P$ in finitely many points. For a compact $K\subseteq\Omega$, the family of all such open neighbourhoods covers $K$; a finite subcover shows that $K\cap P$ is finite. Thus [L2] applies. Choose a holomorphic function $h$ on $\Omega$ whose zero divisor is exactly $P$. [L1, L2, given, construct]

2.1 On $\Omega\setminus P$, define $g:=fh$. Near a pole $a\in P$, the zero of $h$ has exactly the same order as the pole of $f$, so $g$ is locally bounded on a punctured neighbourhood of $a$. By [L3], $g$ extends holomorphically across every point of $P$. [L1, L3, step 1.1, algebra]

3.1 Away from $P$, one has $f=g/h$. Since both sides are meromorphic and agree on the dense open set $\Omega\setminus P$, this quotient represents $f$ on all of $\Omega$. [step 1.1, step 2.1, algebra] ∎
