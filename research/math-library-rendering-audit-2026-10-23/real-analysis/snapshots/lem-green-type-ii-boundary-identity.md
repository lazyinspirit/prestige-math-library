---
id: lem-green-type-ii-boundary-identity
kind: lemma
title: "The Type II boundary identity for the Q dy term"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-orientation-for-elementary-region-boundaries, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-reversal-and-concatenation, thm-jordan-fubini-by-sections, thm-newton-leibniz-with-interior-derivative, def-type-i-type-ii-and-elementary-green-regions, thm-fubini-over-a-region-between-continuous-graphs, thm-linear-images-scale-jordan-content-by-absolute-determinant, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
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
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Statement

Let

$$D=\{(x,y):c\leq y\leq d,\ \lambda(y)\leq x\leq\rho(y)\}$$

be a Type II region, and let $Q$ be $C^1$ on an open neighbourhood of $D$. With the positive boundary orientation,

$$\int_{\partial D}Q\,dy=\iint_D\partial_xQ\,dA.$$

## Facts & Assumptions
**Given:** The region, function, and orientation in the Statement.

[L1] The positive Type II boundary traverses the right graph upward, the top endpoint arc right to left, the left graph downward, and the bottom endpoint arc left to right, omitting zero-length arcs ([[def-positive-orientation-for-elementary-region-boundaries]]).

[L2] The line integral $\int Q\,dy$ is the vector line integral of $(0,Q)$; it adds under concatenation and changes sign under reversal ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[thm-line-integrals-under-reversal-and-concatenation]]).

[L3] For a bounded Jordan set $E$ and an integrable $g:E\to\mathbb R$ whose sections $E_x$ are Jordan measurable with $g_x$ integrable outside a content-zero set of parameters, $\int_Eg=\int h$ where $h(x)=\int_{E_x}g_x$ and an empty section contributes $0$; the symmetric assertion holds for the other coordinate block ([[thm-jordan-fubini-by-sections]]).

[L4] A continuous function whose interior derivative admits an integrable extension satisfies Newton-Leibniz: that extension integrates to the endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).

[L5] A compact Type II region is $D=\{(x,y):c\le y\le d,\ \lambda(y)\le x\le\rho(y)\}$ for continuous piecewise-$C^1$ functions $\lambda\le\rho$ on $[c,d]$, defined analogously to the Type I case, so $c<d$ and $\lambda<\rho$ on $(c,d)$ ([[def-type-i-type-ii-and-elementary-green-regions]]).

[L6] For $a<b$ and continuous $\alpha\le\beta$ on $[a,b]$, the region $K=\{(x,y):a\le x\le b,\ \alpha(x)\le y\le\beta(x)\}$ between the two graphs is compact and Jordan measurable ([[thm-fubini-over-a-region-between-continuous-graphs]]).

[L7] A linear endomorphism of $\mathbb R^n$ sends every bounded Jordan set to a bounded Jordan set ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[L8] Every continuous real function on a compact Jordan measurable set is Riemann integrable over that set ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).



## Proof

**Proof technique:** direct.

1.1 The horizontal endpoint arcs in [L1] have constant $y$, so their contributions to $\int Q\,dy$ are zero. The right graph contributes $\int_c^dQ(\rho(y),y)\,dy$, and [L2] makes the downward left graph contribute $-\int_c^dQ(\lambda(y),y)\,dy$. [given, L1, L2, algebra]

1.2 For each fixed $y$ with $\lambda(y)<\rho(y)$, [L4] in the $x$ variable gives $$Q(\rho(y),y)-Q(\lambda(y),y) =\int_{\lambda(y)}^{\rho(y)}\partial_xQ(x,y)\,dx.$$ Since $\lambda<\rho$ on $(c,d)$, this covers every interior $y$. At $y=c$ and $y=d$ the region definition requires only $\lambda(y)\le\rho(y)$, so both cases occur: where $\lambda(y)<\rho(y)$, as for a rectangle, the same application of [L4] applies verbatim, and where $\lambda(y)=\rho(y)$ both sides are zero. Hence the displayed identity holds for every $y\in[c,d]$. [given, L4]

1.3 By [L5] the data satisfy $c<d$ and $\lambda\le\rho$ continuous on $[c,d]$, and $D$ is compact. The coordinate swap $\sigma(x,y)=(y,x)$ is linear and satisfies $\sigma\circ\sigma=\mathrm{id}$, and $$\sigma(D)=\{(u,v):c\le u\le d,\ \lambda(u)\le v\le\rho(u)\}$$ is the region between the graphs of $\lambda$ and $\rho$ over the first coordinate, so [L6] applies to it with $a=c$, $b=d$, $\alpha=\lambda$, $\beta=\rho$ and makes it compact and Jordan measurable. Since $\sigma(D)$ is therefore a bounded Jordan set, [L7] makes its image $D=\sigma(\sigma(D))$ a bounded Jordan set as well. The hypothesis of [L6], that the region lies between two graphs over an interval of its FIRST coordinate, is verified for $\sigma(D)$ and is never asserted of $D$. [given, L5, L6, L7]

2.1 Hence $$\int_{\partial D}Q\,dy =\int_c^d\bigl(Q(\rho(y),y)-Q(\lambda(y),y)\bigr)\,dy.$$ [step 1.1, algebra]

2.2 $Q$ is $C^1$ on an open neighbourhood of $D$, so $\partial_xQ$ is continuous on $D$; with step 1.3 this makes $D$ a compact Jordan measurable set, and [L8] makes $\partial_xQ$ integrable over it. For $y\in[c,d]$ the section $\{x:(x,y)\in D\}$ is the compact interval $[\lambda(y),\rho(y)]$, whose boundary is at most two points, so it is Jordan measurable in $\mathbb R$; the restriction $x\mapsto\partial_xQ(x,y)$ is continuous there, so [L8] makes it integrable over that section. Every section at $y\notin[c,d]$ is empty. The exceptional set of [L3] may therefore be taken empty. [given, step 1.3, L3, L8, algebra]

3.1 By steps 1.3 and 2.2, the symmetric-coordinate assertion of [L3] applies to $E=D$ and $g=\partial_xQ$ with $y$ as the outer coordinate, so $$\iint_D\partial_xQ\,dA =\int_c^d\Bigl(\int_{\lambda(y)}^{\rho(y)}\partial_xQ(x,y)\,dx\Bigr)dy,$$ the outer integrand vanishing off $[c,d]$ because those sections are empty. Substituting step 1.2 into step 2.1 gives the same iterated integral for $\int_{\partial D}Q\,dy$. [step 1.3, step 2.2, step 2.1, step 1.2, L3]

4.1 Zero-length endpoint arcs and piecewise-$C^1$ joins contribute nothing beyond subdivision, by [L1] and [L2]. [L1, L2, step 1.1] ∎
