---
id: thm-jordan-fubini-by-sections
kind: theorem
title: "Fubini over a bounded Jordan set when all but a content-zero family of sections are integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-sections-and-iterated-riemann-integrals, thm-riemann-fubini-on-product-rectangles, def-riemann-integral-over-a-jordan-set, lem-jordan-set-integral-well-defined, def-null-and-content-zero-in-rn]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 5.4.2"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
    - title: "J. Lebl, Basic Analysis II, §10.5"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $E\subseteq\mathbb R^{p+q}$ be a bounded Jordan set and let $g:E\to\mathbb R$ be Riemann integrable. Suppose that for all $x$ outside a content-zero set $N\subseteq\mathbb R^p$, the section $E_x$ is Jordan measurable and $g_x$ is integrable over it. Put $h(x)=\int_{E_x}g_x$ there and assign arbitrary bounded values to $h$ on $N$, with empty-section integral equal to $0$. Then $h$ is integrable on any rectangle containing the projection of $E$, its integral is independent of that rectangle and of the values on $N$, and
$$\int_Eg=\int h(x)\,dx.$$
The symmetric assertion holds for the other coordinate block.

## Facts & Assumptions

**Given:** A bounded Jordan set $E$, an integrable $g:E\to\mathbb R$, and the stated content-zero exceptional family of sections.

[L1] Riemann--Fubini applies to bounded functions on a product rectangle using lower and upper section integrals and a content-zero exceptional set ([[thm-riemann-fubini-on-product-rectangles]]).

[L2] An empty Jordan section has integral zero, and section integrals are taken after zero extension to a bounding rectangle ([[def-sections-and-iterated-riemann-integrals]]).

[L3] The Jordan-set integral is independent of the chosen bounding rectangle ([[lem-jordan-set-integral-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 Choose nondegenerate rectangles $A\subseteq\mathbb R^p$ and $B\subseteq\mathbb R^q$ with $E\subseteq A\times B$, and extend $g$ by zero to $A\times B$. For every $x$, the resulting section is the zero extension to $B$ of $g_x$, and it is identically zero when $E_x$ is empty. [L2, given]

2.1 The zero extension is integrable by the definition of the Jordan-set integral. Apply [L1]; outside $N$ its ordinary section integral is exactly $h(x)$, so the exceptional-section clause gives $\int_Eg=\int_Ah$. [L1, step 1.1]

3.1 Enlarging $A$ or $B$ only adds zero to the zero extension. Independence of the Jordan integral from a bounding rectangle [L3] and the content-zero invariance in [L1] therefore prove independence of both factor rectangles and of the assigned values on $N$. [L1, L2, L3, step 2.1, algebra] ∎
