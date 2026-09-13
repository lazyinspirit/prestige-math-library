---
id: def-steenrod-squares-from-cup-i-products
kind: definition
title: Steenrod squares from cup-i
status: published
origin: pipeline
deps: ["def-higher-cup-i-products", "thm-cup-i-coboundary-identity"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, definition of the squares and upper-index convention, printed pages 17--18
---

## Definition

Let $n\geq0$, let $x\in H^n(X;\mathbb F_2)$, and choose a cocycle
$a\in C^n(X;\mathbb F_2)$ representing $x$. For $0\leq k\leq n$, define

$$
Sq^k(x):=[a\smile_{n-k}a]\in H^{n+k}(X;\mathbb F_2),
$$

using [[def-higher-cup-i-products]]. Define $Sq^k(x)=0$ for $k<0$ or $k>n$.
The identical formula defines relative squares on $H^n(X,A;\mathbb F_2)$.

The displayed cochain is a cocycle. Indeed, the identity from
[[thm-cup-i-coboundary-identity]] and $\delta a=0$ give

$$
\delta(a\smile_{n-k}a)=a\smile_{n-k-1}a+a\smile_{n-k-1}a=0
$$

in characteristic two, including $k=n$ because $\smile_{-1}=0$. Thus the
formula at least determines a cohomology class. Independence of the cocycle and
of the fixed higher-diagonal system is proved next. The definition is
choice-free once those data are fixed; on empty or one-point reduced
cohomology, and on the zero class, it gives zero.
