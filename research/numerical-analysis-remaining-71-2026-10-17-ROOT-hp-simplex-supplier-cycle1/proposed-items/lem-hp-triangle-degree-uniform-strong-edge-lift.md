---
{
  "id": "lem-hp-triangle-degree-uniform-strong-edge-lift",
  "kind": "lemma",
  "title": "A degree-uniform polynomial edge lift with the strong edge norm",
  "status": "draft",
  "origin": "pipeline",
  "pipeline_run": "numerical-analysis-remaining-71-2026-10-17",
  "deps": [
    "lem-shape-regular-affine-simplex-scaling",
    "thm-first-fundamental-theorem-of-calculus-for-l-one",
    "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
    "thm-cauchy-schwarz-in-an-inner-product-space",
    "def-countable-choice"
  ],
  "justified_by": [],
  "proof_strategy": "direct",
  "provenance": {
    "statement": "ai-altered",
    "proof": "ai-altered"
  },
  "sources": {
    "references": [
      {
        "title": "Sch\u00f6berl, p-version FEM, \u00a730.4.2",
        "url": "https://jschoeberl.github.io/iFEM/pversion/hpfem.html"
      }
    ]
  }
}
---

## Statement

Assume Countable Choice. On $T=\{x,y>0,x+y<1\}$, let $q\in\mathbb P_p([0,1])$ satisfy $q(0)=q(1)=0$. Define the polynomial $R(t)=q(t)/t$ by cancellation at zero and
$$Lq(x,y)=q(x)-xR(1-y).$$
Then $Lq\in\mathbb P_p(T)$, equals $q$ on $y=0$, and vanishes on the other two edges. It satisfies
$$\|Lq\|_{H^1(T)}\le4\|q'\|_{L^2(0,1)},$$
independently of $p$. Permutation of the vertices gives a lift on each edge. For a shape-regular physical triangle $K$ and edge $E$ of length $\ell_E$, its affine transport satisfies
$$|L_Eq|_{H^1(K)}\le C_\gamma\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)},\qquad \|L_Eq\|_{L^2(K)}\le C_\gamma h_K\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}.$$
Consequently every continuous piecewise-polynomial boundary datum of degree at most $p$ has a polynomial extension of degree at most $p$: extend its vertex values affinely and lift its endpoint-zero residual on each edge. Edge degrees may be different. These estimates use the strong $H^1$ edge norm; they do not assert an optimal $H^{1/2}$-trace extension bound.

## Facts & Assumptions

**Given:** The triangle, polynomial $q$, endpoint conditions, and the optional affine physical triangle.

[F1] [[thm-first-fundamental-theorem-of-calculus-for-l-one]], [[thm-cauchy-schwarz-in-an-inner-product-space]], and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] justify the displayed one-dimensional integral and its elementary norm bounds.

[F2] [[lem-shape-regular-affine-simplex-scaling]] supplies the affine determinant, gradient and edge-length scaling under Countable Choice.

## Proof

1.1 Since $q(0)=0$, division by $t$ leaves a polynomial of degree at most $p-1$. Thus the formula is polynomial of total degree at most $p$; for $p=0$ or $p=1$ the only endpoint-zero polynomial is zero. On $y=0$, $R(1)=q(1)=0$, so $Lq=q$. On $x=0$ it is zero, and on $x=1-y$ its two terms agree. Thus the three traces are exactly as claimed. [given, construct, algebra]

2.1 Put $A=\int_0^1|q'|^2$. The identity $q(t)=\int_0^tq'(s)\,ds$ gives $t|R(t)|^2\le\int_0^t|q'(s)|^2ds$, hence $\int_0^1t|R|^2\le A$. Since $tR'=q'-R$, $\int_0^1t^3|R'|^2\le2\int t|q'|^2+2\int t|R|^2\le4A$. Also $\int_0^1|q|^2\le A$. On a horizontal slice with $t=1-y$, $0<x<t$. Therefore $\|\partial_xLq\|_2^2\le2\int_0^1(1-x)|q'(x)|^2dx+2\int_0^1t|R(t)|^2dt\le4A$, and $\|\partial_yLq\|_2^2=\frac13\int_0^1t^3|R'|^2dt\le4A/3$. Finally $\|Lq\|_2^2\le2\int(1-x)|q(x)|^2dx+\frac23\int t^3|R(t)|^2dt\le8A/3$. The sum is at most $8A<16A$, giving the asserted safe constant four. [F1, step 1.1, algebra]

3.1 Permute reference vertices before applying the construction to lift any chosen edge; there are only six fixed affine permutations, so their finite norm maximum remains independent of degree. Under physical transport, the reference gradient norm controls the physical gradient norm by [F2], and the reference edge derivative norm is $\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}$. The physical $L^2$ norm has the additional factor $h_K$. These are the stated bounds. [F2, step 2.1, algebra]

4.1 For continuous polynomial boundary data $g$, let $a$ be its unique affine vertex interpolant. Each $g-a$ edge restriction vanishes at its endpoints and has degree at most $p$ when $p\ge1$. Sum its three lifts and add $a$. Each lift is zero on the other edges by step 1.1, so the extension has exactly trace $g$; its degree is at most $p$. For $p=0$, continuity forces $g$ constant and that constant extends it. This argument permits three different edge degrees, bounded only by the cell degree, with no hidden equal-degree assumption. [step 1.1, step 3.1, construct, algebra] ∎
