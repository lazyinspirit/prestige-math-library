---
id: thm-operator-determinant-scales-every-alternating-top-form
kind: theorem
title: "On a positive-dimensional space, $\\det(T)$ is the unique scalar by which $T$ scales every alternating top-degree form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-alternating-top-forms-are-determined-by-one-ordered-basis,
       def-determinant-of-a-linear-operator,
       thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $V$ be $n$-dimensional over a field $F$, with $n\geq 1$, and let
$T:V\to V$ be linear. For every alternating $n$-linear form
$\omega:V^n\to F$,

$$\omega(Tv_0,\ldots,Tv_{n-1}) =\det(T)\omega(v_0,\ldots,v_{n-1}).$$

Moreover, $\det(T)$ is the unique scalar having this property for every such
$\omega$ and every $n$-tuple.

## Facts & Assumptions

**Given:** $V,F,n,T$ and $\omega$ as in the statement.

[L1] For any ordered basis $\mathcal B$, every alternating $n$-linear form
satisfies
$\eta(v_0,\ldots,v_{n-1})=\eta(\mathcal B)
\det M_{\mathcal B}(v_0,\ldots,v_{n-1})$
([[lem-alternating-top-forms-are-determined-by-one-ordered-basis]]).

[F1] In an ordered basis $\mathcal B$,
$\det(T)=\det([T]_{\mathcal B})$
([[def-determinant-of-a-linear-operator]]).

[L2] The matrix determinant is alternating, multilinear in the columns, and
$\det(I_n)=1$
([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

## Proof

**Proof technique:** direct.

1.1 Fix an ordered basis $\mathcal B$. Define $\omega_T(v_0,\ldots,v_{n-1}) :=\omega(Tv_0,\ldots,Tv_{n-1})$; this is an alternating $n$-linear form. [given]

1.2 Define $\delta_{\mathcal B}(v_0,\ldots,v_{n-1}) :=\det M_{\mathcal B}(v_0,\ldots,v_{n-1})$. It is alternating and $n$-linear, and $\delta_{\mathcal B}(\mathcal B)=1$. [L2]

2.1 Applying [L1] to $\omega_T$ and then to $\omega$ gives $\omega_T(v_0,\ldots,v_{n-1}) =\omega_T(\mathcal B)\det M_{\mathcal B}(v_0,\ldots,v_{n-1})$ and $\omega_T(\mathcal B)=\omega(\mathcal B)\det([T]_{\mathcal B})$. [step 1.1, L1]

3.1 Combining the two formulas in step 2.1 and using [F1] and [L1] once more gives $\omega_T=\det(T)\omega$. [step 2.1, F1, L1, algebra]

4.1 If a scalar $c$ has the stated scaling property, evaluate it for $\delta_{\mathcal B}$ at $\mathcal B$. The left side is $\det([T]_{\mathcal B})$, so $c=\det([T]_{\mathcal B})=\det(T)$. [step 1.2, F1] ∎
