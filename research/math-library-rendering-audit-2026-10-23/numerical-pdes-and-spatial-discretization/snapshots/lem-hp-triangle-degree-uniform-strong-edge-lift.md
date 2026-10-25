---
id: lem-hp-triangle-degree-uniform-strong-edge-lift
kind: lemma
title: A degree-uniform polynomial edge lift with the strong edge norm
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matching-affine-simplicial-meshes
  - def-sobolev-space-wkp-and-its-norm
  - lem-shape-regular-affine-simplex-scaling
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Countable Choice is inherited only through the shape-regular affine
  scaling supplier; the polynomial formula and reference-triangle estimates are
  choice-free.
sources:
  references:
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations,
        Chapter 30: hp Finite Elements"
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§30.4.2, projection-based interpolation on triangles. The source
        states a p-stable H^(1/2) extension but leaves major steps as exercises;
        this item proves an explicit, different H^1-edge-norm lift."
    - title: "Martin Vohralík, Finite Element Methods, Chapter 6: hp finite elements"
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "§§6.1–6.3, printed pp. 54–57: conforming hp spaces and the stated (but
        incompletely derived) simplex approximation context. The formula below
        is proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $p\in\mathbb N_0$, let $T=\{(x,y):x>0,\ y>0,\ x+y<1\}$, and let $q$ be a real polynomial of degree at most $p$ satisfying $q(0)=q(1)=0$. Define the polynomial $R(t)=q(t)/t$ by cancellation at $t=0$, and put

$$
Lq(x,y)=q(x)-xR(1-y).
$$

Then $Lq\in\mathbb P_p(T)$, it equals $q$ on $y=0$, and it vanishes on $x=0$ and $x+y=1$. Moreover,

$$
\|Lq\|_{H^1(T)}\le4\|q'\|_{L^2(0,1)},
$$

independently of $p$. Permuting the three vertices gives the same bound, up to one fixed constant, for each reference edge. If $K$ is a shape-regular affine triangle, $E$ is an edge of length $\ell_E$, and $h_K=\operatorname{diam}(K)$, the transported lift satisfies

$$
|L_Eq|_{H^1(K)}\le C_\gamma\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)},\qquad \|L_Eq\|_{L^2(K)}\le C_\gamma h_K\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}.
$$

Consequently continuous polynomial data on the three edges of a triangle, each of degree at most the cell degree, have a polynomial extension of that cell degree. The estimate uses the strong $H^1$ edge norm and asserts no optimal $H^{1/2}$ trace-lifting bound.

## Facts & Assumptions

**Given:** Countable Choice; the reference triangle; a polynomial $q$ with the stated endpoint values; and, for the physical-cell assertion, a shape-regular affine triangle and one of its edges.

[F1] A shape-regular affine triangle is a nondegenerate affine simplex with diameter-to-inradius ratio bounded by a fixed constant; its affine map has singular values, determinant, edge Jacobian, and altitude controlled by the cell diameter. ([[def-matching-affine-simplicial-meshes]], [[lem-shape-regular-affine-simplex-scaling]])

[F2] The Sobolev $H^1$ norm is the $L^2$ norm of the function and its weak first derivatives. ([[def-sobolev-space-wkp-and-its-norm]])

[F3] Fubini applies to the finite integrable polynomial expressions on the reference triangle, and Cauchy–Schwarz bounds the one-dimensional polynomial integral. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-cauchy-schwarz-in-an-inner-product-space]])

[A1] Countable Choice is the exact assumption used by [F1]; no arbitrary family of polynomial lifts is selected. ([[def-countable-choice]])

## Proof

1.1 Since $q(0)=0$, polynomial division gives a polynomial $R$ of degree at most $p-1$ when $p\ge1$; for $p=0$ or $p=1$ the endpoint conditions force $q=0$. Thus $Lq$ has total degree at most $p$. At $y=0$, $R(1)=q(1)=0$, so $Lq=q(x)$; at $x=0$ it is zero; and on $x+y=1$ one has $1-y=x$, so $xR(1-y)=xR(x)=q(x)$. [given, construct, algebra]

2.1 Put $A=\int_0^1|q'(t)|^2dt$. Polynomial integration term by term gives $q(t)=\int_0^tq'(s)ds$, so Cauchy–Schwarz [F3] yields $t|R(t)|^2\le\int_0^t|q'(s)|^2ds\le A$ and hence $\int_0^1t|R(t)|^2dt\le A$. The identity $tR'(t)=q'(t)-R(t)$ gives $\int_0^1t^3|R'(t)|^2dt\le2\int_0^1t|q'|^2+2\int_0^1t|R|^2\le4A$. Also $|q(t)|^2\le tA$, so $\int_0^1|q|^2\le A$. Writing $t=1-y$, the slices of $T$ are $0<x<t$. Therefore $\|\partial_xLq\|_2^2\le2\int_0^1(1-x)|q'(x)|^2dx+2\int_0^1t|R(t)|^2dt\le4A,$ $\|\partial_yLq\|_2^2=\frac13\int_0^1t^3|R'(t)|^2dt\le\frac43A,$ and $\|Lq\|_2^2\le2\int_0^1(1-x)|q(x)|^2dx+\frac23\int_0^1t^3|R(t)|^2dt\le\frac83A.$ Fubini [F3] justifies the slice integrals. Using the Sobolev norm definition [F2], adding the three inequalities gives $\|Lq\|_{H^1(T)}^2\le8A\le16A$, proving the safe constant four. [F2, F3, step 1.1, algebra]

3.1 Permute the reference vertices to obtain a lift on any selected edge; there are only six such affine maps, so the maximum of their fixed norm factors is independent of $p$. Transport the reference estimate by the shape-regular affine map. The gradient change of variables is bounded by [F1], and the reference edge derivative norm is exactly scaled by $\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}$. The physical $L^2$ norm has one additional factor bounded by $C_\gamma h_K$ by [F1]. This gives both stated estimates. [A1, F1, step 2.1, algebra]

4.1 Let $g$ be continuous polynomial data on the three edges, with edge degrees at most $p$. For $p=0$, continuity makes $g$ one constant and that constant extends it. For $p\ge1$, let $a$ be the affine interpolant of the three vertex values. Each edge residual $g|_E-a|_E$ vanishes at both endpoints and has degree at most $p$. Lift the three residuals separately by step 1.1; each lift vanishes on the other two edges. Their sum plus $a$ therefore has trace exactly $g$ and degree at most $p$. This works when edge degrees differ and requires no equal-degree assumption. [step 1.1, step 3.1, construct, algebra] ∎
