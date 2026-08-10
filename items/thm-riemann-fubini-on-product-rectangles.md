---
id: thm-riemann-fubini-on-product-rectangles
kind: theorem
title: "Riemann--Fubini on product rectangles, with lower and upper section integrals and content-zero exceptional sections"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-sections-and-iterated-riemann-integrals, lem-product-grid-bounds-for-section-integrals, thm-multidimensional-riemann-criterion, thm-multidimensional-integral-properties, def-null-and-content-zero-in-rn]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorems 10.2.2-10.2.3"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 5.4.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq\mathbb R^p$ and $B\subseteq\mathbb R^q$ be nondegenerate closed rectangles, and let $f:A\times B\to\mathbb R$ be Riemann integrable. Then the four lower and upper section-integral functions of [[def-sections-and-iterated-riemann-integrals]] are Riemann integrable and
$$\int_A\ell_B=\int_Au_B=\int_{A\times B}f=\int_B\ell_A=\int_Bu_A.$$

If the $B$-sections are integrable outside a content-zero set $N\subseteq A$, every bounded exceptionally completed function $h$ with $h(x)=\int_Bf_x$ for $x\notin N$ is integrable and
$$\int_{A\times B}f=\int_Ah.$$
The same assertion holds with the coordinate blocks exchanged. In particular, when every section in an order is integrable, the ordinary iterated integral in that order exists and equals the multiple integral. The theorem does not assert that every section of an integrable function is integrable.

## Facts & Assumptions

**Given:** Nondegenerate rectangles $A,B$ and a Riemann-integrable $f:A\times B\to\mathbb R$.

[L1] Product-grid Darboux sums bound the outer Darboux sums of the lower and upper section-integral functions ([[lem-product-grid-bounds-for-section-integrals]]).

[L2] A bounded $f:Q\to\mathbb R$ on a nondegenerate rectangle is Riemann integrable if and only if, for every $\varepsilon>0$, some grid $P$ satisfies $U(f,P)-L(f,P)<\varepsilon$ ([[thm-multidimensional-riemann-criterion]]).

[L3] A content-zero set has finite cube covers of arbitrarily small total volume ([[def-null-and-content-zero-in-rn]]).

[L4] The multidimensional Riemann integral is linear on integrable functions ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, [L2] supplies a grid of $A\times B$ with Darboux gap below $\varepsilon$. Its coordinate grids form a product grid, and [L1] places the lower and upper Darboux gaps of both $\ell_B$ and $u_B$ inside that same gap. [L1, L2, given]

2.1 By [L2], both $\ell_B$ and $u_B$ are integrable. The inequalities in [L1], applied to grids with gaps tending to zero, give $\int_A\ell_B\ge\int_{A\times B}f$ and $\int_Au_B\le\int_{A\times B}f$; since $\ell_B\le u_B$, all three values are equal. The same argument after exchanging $A$ and $B$ gives the other two equalities. [L2, step 1.1, algebra]

3.1 Suppose $h=\int_Bf_x$ outside a content-zero $N$. There $h=\ell_B=u_B$. If $M$ bounds $|h|,|\ell_B|,|u_B|$, a finite cube cover of $N$ with arbitrarily small total volume, refined into an outer grid, bounds the upper integral of $|h-\ell_B|$ by $2M$ times that volume. The criterion [L2] therefore makes $h-\ell_B$ integrable with integral $0$, and linearity gives $\int_Ah=\int_A\ell_B=\int_{A\times B}f$. The exchanged assertion is identical. [L2, L3, L4, step 2.1, algebra] ∎
