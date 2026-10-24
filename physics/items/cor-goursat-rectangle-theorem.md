---
id: cor-goursat-rectangle-theorem
kind: corollary
title: "Goursat's theorem for rectangles: a holomorphic function integrates to zero around every rectangle contained in its domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-goursat-triangle-theorem, def-oriented-complex-triangle-and-boundary, def-complex-contours-reversal-concatenation-and-closedness, prop-reversal-and-concatenation-of-complex-line-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Corollary 1.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $f:U\to\mathbb C$ be holomorphic, and fix $a\in\mathbb C$ and real numbers $w,h>0$. Suppose the closed rectangle

$$R=\{a+x+iy:0\le x\le w,\ 0\le y\le h\}$$

is contained in $U$. Put $b=a+w$, $c=a+w+ih$, and $d=a+ih$. Its **positively oriented boundary** is the closed rectifiable contour

$$\partial R=\ell_{ab}*\ell_{bc}*\ell_{cd}*\ell_{da}$$

using the directed segments and concatenation of [[def-oriented-complex-triangle-and-boundary]] and [[def-complex-contours-reversal-concatenation-and-closedness]]. Then

$$\int_{\partial R}f(z)\,dz=0.$$

## Facts & Assumptions

**Given:** The rectangle $R\subseteq U$, its ordered vertices $a,b,c,d$, its positively oriented boundary as displayed, and a holomorphic $f:U\to\mathbb C$.

[L1] A holomorphic function integrates to zero around the oriented boundary of every filled triangle contained in its open domain ([[thm-goursat-triangle-theorem]]).

[L2] Reversal negates a contour integral and concatenation adds contour integrals ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal from $a$ to $c$ splits $R$ into the filled triangles $\Delta[a,b,c]$ and $\Delta[a,c,d]$, both contained in $U$. [given]

2.1 By [L1], the integrals over the positively oriented boundaries $a\to b\to c\to a$ and $a\to c\to d\to a$ are both zero. [step 1.1, L1]

3.1 Adding those identities, the diagonal $c\to a$ in the first boundary cancels the diagonal $a\to c$ in the second by [L2]. [step 2.1, L2]

4.1 The surviving directed sides are $a\to b\to c\to d\to a$, exactly the displayed positive boundary $\partial R$, so its integral is zero. [step 3.1, L2] ∎
