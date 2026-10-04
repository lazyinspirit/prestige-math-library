---
id: ex-blowup-ideal-power-same-proj
kind: example
title: "Blowing up I and I^2 give the same scheme"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-blowup-power-of-ideal-same
  - def-rees-algebra-ideal-sheaf
  - lem-proj-veronese-invariance
  - thm-affine-blowup-standard-charts
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.33.1 and the discussion of blowing up an ideal and its powers"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3 the blowup as Proj of the Rees algebra, pp. 383-387"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

Let $A$ be a ring and $I=(x,y)\subseteq A[x,y]$ the ideal of the origin. Then $\operatorname{Bl}_IA^2$ and $\operatorname{Bl}_{I^2}A^2$ are canonically isomorphic: the Rees algebra $\mathcal R(I^2)$ is the Veronese subalgebra of $\mathcal R(I)$ in even degrees, and $\operatorname{Proj}$ is invariant under Veronese regrading. Concretely $\operatorname{Bl}_IA^2$ is the closed subscheme $V(xT_1-yT_0)$ of $A^2\times\mathbb P^1$, and the second description uses the degree-two generators $x^2,xy,y^2$ with the relations they satisfy (the degree-two Veronese re-embedding of the same blowup).

## Facts & Assumptions

**Given:** A ring $A$, the polynomial ring $A[x,y]$, the ideal $I=(x,y)$ of the origin, and its blowups.

[A1] **Choice.** The Axiom of Choice is assumed as inherited from the Proj and Rees-algebra constructions; the identifications below inherit it.

[F1] [[lem-blowup-power-of-ideal-same]]: Assume the Axiom of Choice. For a quasi-coherent ideal sheaf $\mathcal I$ of finite type on $X$ and $d\ge1$ there is a canonical isomorphism of $X$-schemes $\operatorname{Bl}_{\mathcal I^d}X\to\operatorname{Bl}_{\mathcal I}X$; more precisely $\mathcal R(\mathcal I^d)$ is the Veronese subalgebra $\mathcal R(\mathcal I)^{(d)}$, and the canonical identification $\operatorname{Proj}\mathcal R(\mathcal I)=\operatorname{Proj}\mathcal R(\mathcal I)^{(d)}$ glues over $X$.

[F2] [[def-rees-algebra-ideal-sheaf]]: $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ with $\mathcal I^0=\mathcal O_X$ and multiplication induced by multiplication of ideals; its degree-$n$ piece is $\mathcal I^n$.

[F3] [[lem-proj-veronese-invariance]]: For a commutative nonnegatively graded ring $S$ and $d\ge1$, there is a canonical isomorphism $\operatorname{Proj}S\cong\operatorname{Proj}S^{(d)}$ mapping the chart $D_+(f)$ to $D_+(f^d)$ with the same coordinate ring $S_{(f)}=S^{(d)}_{(f^d)}$, and carrying $\mathcal O_{\operatorname{Proj}S^{(d)}}(1)$ to $\mathcal O_{\operatorname{Proj}S}(d)$; for $d=1$ it is the identity.

[F4] [[thm-affine-blowup-standard-charts]]: For $I=(f_0,\dots,f_r)\subseteq A$ the charts $\operatorname{Spec}A[I/f_i]$ cover $\operatorname{Bl}_I\operatorname{Spec}A$ with the displayed transition functions.

## Verification

1.1 In the special case $d=2$ of [F1], the Rees algebra of $I^2$ has degree-$n$ piece $I^{2n}$, which by [F2] is exactly the degree-$2n$ piece of $\mathcal R(I)$; hence $\mathcal R(I^2)=\mathcal R(I)^{(2)}$ as graded algebras, and the canonical identification of Proj's from [F3] (with its identity on coordinate rings $S_{(f)}=S^{(2)}_{(f^2)}$) glues by [F1] to a canonical isomorphism $\operatorname{Bl}_{I^2}A^2\to\operatorname{Bl}_IA^2$ over $A^2$. [F1, F2, F3]

2.1 Concretely, [F4] presents $\operatorname{Bl}_IA^2$ by the two charts $A[x,y][I/x]=A[x,y/x]$ and $A[x,y][I/y]=A[x/y,y]$, glued by inverting the ratio; in the first chart put $T=y/x$, so the chart is $A[x,T]$ and its exceptional divisor is $V(x)$. The chart of the same kind for $I^2$ is $A[x,y][I^2/x^2]$, and the degree-two generators $x^2,xy,y^2$ give the fractions $xy/x^2=y/x=T$ and $y^2/x^2=T^2$, so this chart ring is $A[x,T]$ again; symmetrically the second charts agree as subrings of $A[x,x^{-1},y]$ and $A[y,y^{-1},x]$. Writing $X,Y,Z$ for their degree-one Rees symbols, their relations include $XZ=Y^2$, $xY=yX$ and $xZ=yY$; the Veronese identification in step 1.1 gives the same blowup. The two charts cover also the regraded Proj, since $XZ=Y^2$ prevents a homogeneous prime outside the irrelevant locus from containing both $X$ and $Z$. Its original incidence description is checked directly: intersecting $V(xT_1-yT_0)\subseteq A^2\times\mathbb P^1$ with the chart $T_0=1$ gives $xT=y$ with $T=T_1/T_0$, namely the first chart, and with $T_1=1$ gives $x=yU$, $U=T_0/T_1$, namely the second, the two glued by $TU=1$. [F4, step 1.1]

3.1 Thus the identity morphism on the underlying charts, read through the Veronese regrading of step 1.1, is the canonical isomorphism $\operatorname{Bl}_IA^2\cong\operatorname{Bl}_{I^2}A^2$, and the second description uses the degree-two generators $x^2,xy,y^2$ with their relation $XZ=Y^2$ (the degree-two Veronese conic in $\mathbb P^2$) as claimed. [F1, F3, step 2.1] ∎
