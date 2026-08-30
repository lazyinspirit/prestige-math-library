---
id: thm-mittag-leffler-expansion-of-pi-cotangent
kind: theorem
title: "The Mittag-Leffler expansion of pi cotangent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-trigonometric-and-hyperbolic-functions,
       def-tangent-cotangent-secant-cosecant,
       cor-complex-trigonometric-and-hyperbolic-derivatives,
       thm-complex-sine-and-cosine-zero-sets,
       thm-residue-theorem-null-homologous-cycle]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis, Example 3.3.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C\setminus\mathbb Z$,

$$\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}=\frac1z+\sum_{n\ge1}\left(\frac1{z-n}+\frac1{z+n}\right).$$

where the series converges locally uniformly on $\mathbb C\setminus\mathbb Z$.

## Facts & Assumptions

**Given:** The integer pole set and the cotangent function.

[L1] The complex sine and cosine are defined by the complex exponential, so their standard $x+iy$ formulas are available by direct algebra ([[def-complex-trigonometric-and-hyperbolic-functions]]).

[L2] The zeros of $\sin(\pi z)$ are exactly the integers, and $\sin'(\pi z)=\pi\cos(\pi z)$, so $\pi\cot(\pi z)$ is meromorphic with simple residue-$1$ poles at the integers ([[def-tangent-cotangent-secant-cosecant]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]], [[thm-complex-sine-and-cosine-zero-sets]]).

[L3] The residue theorem evaluates contour integrals by enclosed residues. ([[thm-residue-theorem-null-homologous-cycle]])

## Proof

**Proof technique:** direct.

1.1 Fix $z\in\mathbb C\setminus\mathbb Z$. For $N$ large enough that $z,-z\in R_N^\circ$, let $R_N$ be the positively oriented rectangle with [L2, L3, given, algebra] vertices $\pm(N+1/2)\pm i(N+1/2)$ and set $$F_N(w):=\frac{\pi\cot(\pi w)}{w^2-z^2}.$$ By [L2], the poles of $F_N$ inside $R_N$ are the integers $n$ with $|n|\le N$ and the points $w=\pm z$. The residue at an integer $n$ is $(n^2-z^2)^{-1}$, while the residues at $w=z$ and $w=-z$ sum to $$\frac{\pi\cot(\pi z)}{2z}+\frac{\pi\cot(-\pi z)}{-2z}=\frac{\pi\cot(\pi z)}{z}.$$ Therefore [L3] gives $$\int_{\partial R_N} F_N(w)\,dw=2\pi i\left(\frac{\pi\cot(\pi z)}{z}+\sum_{n=-N}^N \frac1{n^2-z^2}\right).$$ [L2, L3, given, algebra]

2.1 On the vertical sides of $\partial R_N$, write $w=\pm(N+1/2)+iy$. [L1, step 1.1, algebra] $\sin(\pi w)=\pm\cosh(\pi y)$ and $\cos(\pi w)=\mp i\sinh(\pi y)$ by [L1], so $|\cot(\pi w)|=|\tanh(\pi y)|\le1$. On the horizontal sides, $w=x\pm i(N+1/2)$, and [L1] gives $$|\sin(\pi w)|^2=\sin^2(\pi x)+\sinh^2(\pi(N+1/2)),\qquad |\cos(\pi w)|^2=\cos^2(\pi x)+\sinh^2(\pi(N+1/2)),$$ so $|\cot(\pi w)|\le2$. Also $|w|\ge N+1/2$ on $\partial R_N$, hence $|w^2-z^2|\ge |w|^2-|z|^2\ge (N+1/2)^2-|z|^2$. Thus $|F_N(w)|\le C_z/N^2$ on $\partial R_N$, and since the boundary length is $8N+4$, one gets $\int_{\partial R_N} F_N(w)\,dw\to0$ as $N\to\infty$. [L1, step 1.1, algebra]

3.1 Letting $N\to\infty$ in step 1.1 and using step 2.1 yields [step 1.1, step 2.1, algebra] $$\frac{\pi\cot(\pi z)}{z}=-\sum_{n\in\mathbb Z}\frac1{n^2-z^2}=\frac1{z^2}+\sum_{n\ge1}\frac{2}{z^2-n^2}.$$ Multiplying by $z$ gives $$\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}=\frac1z+\sum_{n\ge1}\left(\frac1{z-n}+\frac1{z+n}\right).$$ On every compact subset of $\mathbb C\setminus\mathbb Z$, the last series is bounded termwise by $C_K/n^2$ for all large $n$, so it converges locally uniformly there. This is exactly the claimed expansion. [step 1.1, step 2.1, algebra] ∎
