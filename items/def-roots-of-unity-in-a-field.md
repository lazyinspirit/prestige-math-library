---
id: def-roots-of-unity-in-a-field
kind: definition
title: "The group $\\mu_n(K)$ of $n$-th roots of unity in a field, and primitive $n$-th roots of unity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-evaluation-and-root, def-order-in-a-group, def-invertible-element, def-subgroup]
justified_by: []
aliases: []
landmark: true
forward_refs: [thm-complex-nth-roots-and-roots-of-unity]
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Section 9.1.1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field and let $n\ge1$ be an integer. An element $x\in K$ is an
**$n$-th root of unity** when $x^{n}=1$, that is when $x$ is a root of
$t^{n}-1\in K[t]$ ([[def-polynomial-evaluation-and-root]]). Write

$$\mu_n(K):=\{\,x\in K: x^{n}=1\,\}.$$

**This is a subgroup of $K^{\times}$** ([[def-subgroup]]). Every $x\in\mu_n(K)$
is invertible, with inverse $x^{n-1}$ ([[def-invertible-element]]), so
$\mu_n(K)\subseteq K^{\times}$; it contains $1$; it is closed under
multiplication, since $(xy)^{n}=x^{n}y^{n}=1$; and it is closed under inverses,
since $(x^{-1})^{n}=(x^{n})^{-1}=1$.

An element $\zeta\in\mu_n(K)\subseteq K^{\times}$ is a **primitive $n$-th root
of unity** when its order in the group $K^{\times}$ is exactly $n$
([[def-order-in-a-group]]):

$$\operatorname{ord}(\zeta)=n .$$

Equivalently, $\zeta^n=1$ and no exponent $k$ with $1\le k<n$ has
$\zeta^k=1$.

**An $n$-th root of unity need not be primitive.** In $\mathbb Q$ the element
$-1$ is a fourth root of unity of order two, not four; and $\mu_n(K)$ may consist
of $1$ alone, as $\mu_3(\mathbb Q)$ does. The two notions are separated
deliberately, and the exact circumstances under which a primitive $n$-th root of
unity exists are the content of
[[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]] and
[[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]].

## Remarks

- **The concrete complex picture arrives later in the reading order.** Over
  $\mathbb C$ the $n$-th roots of unity are the numbers $e^{2\pi ik/n}$, and that
  description is developed in
  [[thm-complex-nth-roots-and-roots-of-unity]]. Nothing on this page uses it: the
  definition above is purely algebraic and applies to every field, including
  those of positive characteristic, where the count of $n$-th roots of unity can
  be smaller than $n$.
