---
id: ex-a-locally-cartesian-closed-slice-computed
kind: example
title: "A slice of Set computed as a locally cartesian closed category"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-set-is-locally-cartesian-closed, def-slice-category-and-the-pullback-functor]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
generation:
  role: example
---

## Example

Let $f:X\to Y$ be the function with $X=\{a,b,c\}$, $Y=\{0,1\}$, and

$$f(a)=0,\qquad f(b)=0,\qquad f(c)=1.$$

Let $p:E\to X$ have fibers $E_a=\{u,v\}$, $E_b=\{w\}$, and $E_c=\{z\}$.

## Facts & Assumptions

**Given:** The displayed finite sets and maps over $X$ and $Y$.

[L1] $\mathbf{Set}$ is locally cartesian closed, so each pullback functor has a right adjoint $\Pi_f$ ([[thm-set-is-locally-cartesian-closed]]).

[L2] Slice objects and pullback functors are defined as in [[def-slice-category-and-the-pullback-functor]].

## Verification

**Proof technique:** direct.

1.1 The dependent product $\Pi_fE\to Y$ has fiber over $0$ equal to $E_a\times E_b=\{(u,w),(v,w)\}$ and fiber over $1$ equal to $E_c=\{z\}$. So $\Pi_fE$ has three elements in total, two over $0$ and one over $1$. [given, algebra]

2.1 If $q:B\to Y$ is the singleton fiber over $1$, then $f^\ast q\to X$ is the singleton fiber over $c$, and a map $f^\ast q\to p$ over $X$ is exactly a choice of an element of $E_c$, namely $z$. This matches maps $q\to\Pi_fE$ over $Y$, which must choose the unique element over $1$. [step 1.1, algebra]

3.1 This concrete fiber computation realizes the pullback/right-adjoint pattern guaranteed by [[thm-set-is-locally-cartesian-closed]], using the slice formalism of [[def-slice-category-and-the-pullback-functor]]. [step 2.1, L1, L2] ∎
