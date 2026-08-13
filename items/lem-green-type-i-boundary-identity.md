---
id: lem-green-type-i-boundary-identity
kind: lemma
title: "The Type I boundary identity for the P dx term"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-orientation-for-elementary-region-boundaries, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-reversal-and-concatenation, thm-fubini-over-a-region-between-continuous-graphs, thm-newton-leibniz-with-interior-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Statement

Let

$$D=\{(x,y):a\leq x\leq b,\ \alpha(x)\leq y\leq\beta(x)\}$$

be a Type I region, and let $P$ be $C^1$ on an open neighbourhood of $D$. With the positive boundary orientation,

$$\int_{\partial D}P\,dx=-\iint_D\partial_yP\,dA.$$

## Facts & Assumptions
**Given:** The region, function, and orientation in the Statement.

[L1] The positive Type I boundary traverses the lower graph from left to right, the right endpoint arc upward, the upper graph from right to left, and the left endpoint arc downward, omitting zero-length arcs ([[def-positive-orientation-for-elementary-region-boundaries]]).

[L2] The line integral $\int P\,dx$ is the vector line integral of $(P,0)$, computed piece by piece; reversal negates it and concatenation adds it ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[thm-line-integrals-under-reversal-and-concatenation]]).

[L3] For continuous $H$ on a graph-bounded region, $$\iint_DH\,dA=\int_a^b\int_{\alpha(x)}^{\beta(x)}H(x,y)\,dy\,dx$$ ([[thm-fubini-over-a-region-between-continuous-graphs]]).

[L4] The integral of an interior derivative of a continuous function is its endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).



## Proof

**Proof technique:** direct.

1.1 The endpoint arcs in [L1] have constant $x$, so their contributions to $\int P\,dx$ are zero. The lower graph contributes $\int_a^bP(x,\alpha(x))\,dx$, while [L2] makes the reversed upper graph contribute $-\int_a^bP(x,\beta(x))\,dx$. [given, L1, L2, algebra]

1.2 For each fixed $x$ with $\alpha(x)<\beta(x)$, [L4] applied in the $y$ variable gives $$P(x,\beta(x))-P(x,\alpha(x)) =\int_{\alpha(x)}^{\beta(x)}\partial_yP(x,y)\,dy.$$ Since $\alpha<\beta$ on $(a,b)$, this covers every interior $x$. At $x=a$ and $x=b$ the region definition requires only $\alpha(x)\le\beta(x)$, so both cases occur: where $\alpha(x)<\beta(x)$, as for a rectangle, the same application of [L4] applies verbatim, and where $\alpha(x)=\beta(x)$ both sides are zero. Hence the displayed identity holds for every $x\in[a,b]$. [given, L4]

2.1 Therefore $$\int_{\partial D}P\,dx =-\int_a^b\bigl(P(x,\beta(x))-P(x,\alpha(x))\bigr)\,dx.$$ [step 1.1, algebra]

3.1 Substitute step 1.2 into step 2.1 and apply [L3] to obtain the asserted identity. [step 2.1, step 1.2, L3]

4.1 If an endpoint arc has zero length, [L1] omits it and its would-be contribution is already zero. Piecewise-$C^1$ breakpoints merely subdivide the graph integrals, so [L2] keeps the calculation unchanged. [L1, L2, step 1.1] ∎
