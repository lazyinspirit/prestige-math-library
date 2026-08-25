---
id: fs-the-group-of-n-th-roots-of-unity-has-n-elements-in-every-field
kind: false-statement
title: "FALSE: $\\mu_n(K)$ has $n$ elements in every field $K$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, cor-the-galois-group-of-a-rational-cyclotomic-field, prop-p-power-roots-of-unity-in-characteristic-p]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Proposition 9.4"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

**False claim.** For every field $K$ and every $n\ge1$, the group
$\mu_n(K)$ of $n$-th roots of unity in $K$ has exactly $n$ elements.

The witness below shows two different failures: over $\mathbb Q$ there is no
primitive cube root of unity in the field at all, while in characteristic $3$ the
equation $x^{3}=1$ is inseparable and has only one root.

## Facts & Assumptions

**Given:** The groups $\mu_n(K)$ of roots of unity.

[L1] $\mu_n(K)$ is cyclic of order dividing $n$, and it has a primitive $n$-th root of unity exactly when its order is $n$ ([[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]).

[L2] $[\mathbb Q(\zeta_3):\mathbb Q]=\varphi(3)=2$ ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[L3] In characteristic $p$ the only $p^{k}$-th root of unity is $1$ ([[prop-p-power-roots-of-unity-in-characteristic-p]]).

## Refutation

**Proof technique:** direct.

1.1 If $\mu_3(\mathbb Q)$ had three elements, then [L1] would give a primitive cube root of unity $\zeta_3$ in $\mathbb Q$. But then $\mathbb Q(\zeta_3)=\mathbb Q$, contradicting [L2], which says this extension has degree $2$. So $\mu_3(\mathbb Q)$ does not have three elements. [L1, L2]

1.2 If $K$ has characteristic $3$, then [L3] gives $\mu_3(K)=\{1\}$, so again $\mu_3(K)$ does not have three elements. [L3]

2.1 The false claim fails already at $n=3$, both over $\mathbb Q$ and over every field of characteristic $3$. [step 1.1, step 1.2] ∎

## Remarks

- **The two failures have different causes.** Over $\mathbb Q$ the polynomial $t^{3}-1$ is separable but its nontrivial roots lie in a quadratic extension; in characteristic $3$ the polynomial itself collapses to $(t-1)^{3}$.
