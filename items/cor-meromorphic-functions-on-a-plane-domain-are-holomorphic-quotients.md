---
id: cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients
kind: corollary
title: "Every meromorphic function on a plane domain is a quotient of holomorphic functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-meromorphic-function-complex-domain,
       thm-removable-singularity-characterizations,
       thm-zero-divisor-theorem-on-plane-domains]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
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

[L1] A meromorphic function is holomorphic away from a discrete pole set
([[def-meromorphic-function-complex-domain]]).

[L2] Every discrete effective divisor on a plane domain is the zero divisor of a
holomorphic function ([[thm-zero-divisor-theorem-on-plane-domains]]).

[L3] A locally bounded punctured singularity is removable
([[thm-removable-singularity-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Let $P$ be the pole set of $f$, with multiplicities equal to pole orders. By [L2], choose a holomorphic function $h$ on $\Omega$ whose zero divisor is exactly $P$. [L1, L2, given, construct]

2.1 On $\Omega\setminus P$, define $g:=fh$. Near a pole $a\in P$, the zero of $h$ has exactly the same order as the pole of $f$, so $g$ is locally bounded on a punctured neighbourhood of $a$. By [L3], $g$ extends holomorphically across every point of $P$. [L1, L3, step 1.1, algebra]

3.1 Away from $P$, one has $f=g/h$. Since both sides are meromorphic and agree on the dense open set $\Omega\setminus P$, this quotient represents $f$ on all of $\Omega$. [step 1.1, step 2.1, algebra] ∎
