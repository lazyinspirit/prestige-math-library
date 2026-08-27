---
id: cor-local-zero-count-via-rouche
kind: corollary
title: "Small perturbations preserve the total local zero multiplicity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rouche-theorem,
       def-order-of-zero-holomorphic-function]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on a neighbourhood of the closed disc
$\overline{D(a,r)}$, and suppose $f$ has no zero on the circle $|z-a|=r$. Let
$m$ be the total multiplicity of the zeros of $f$ in $D(a,r)$. If $g$ is
holomorphic on a neighbourhood of $\overline{D(a,r)}$ and

$$|g(z)-f(z)|<|f(z)|\qquad(|z-a|=r),$$

then $g$ has exactly $m$ zeros in $D(a,r)$, counted with multiplicity.

In particular, if $a$ is an isolated zero of $f$ of order $m$ and the disc is
chosen so that $a$ is the only zero of $f$ in $\overline{D(a,r)}$, then every
such perturbation $g$ has exactly $m$ zeros in $D(a,r)$ counted with
multiplicity.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a neighbourhood of
$\overline{D(a,r)}$, a holomorphic function $g$ on the same neighbourhood, and
$|g-f|<|f|$ on $|z-a|=r$.

[L1] Rouché's theorem gives equal zero counts inside a closed contour when the
strict boundary inequality holds ([[thm-rouche-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Let $\gamma(t)=a+re^{it}$ for $0\le t\le2\pi$. The hypothesis says $|g-f|<|f|$ on $\gamma^\ast$, and $f$ has no zero there. [given]

2.1 Applying [L1] to the contour $\gamma$ shows that $f$ and $g$ have the same weighted zero count inside $|z-a|<r$. Because both are holomorphic, there is no pole term, so that weighted count is exactly the total multiplicity of the interior zeros. Hence $g$ has as many zeros in the disc, counted with multiplicity, as $f$ does. [step 1.1, L1]

3.1 The isolated-zero specialization is the case where that total multiplicity for $f$ is the single local order $m$ at $a$. [step 2.1] ∎
