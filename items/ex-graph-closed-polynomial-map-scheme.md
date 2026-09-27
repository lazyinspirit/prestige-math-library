---
id: ex-graph-closed-polynomial-map-scheme
kind: example
title: The graph of a polynomial map as a closed subscheme
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graph-morphism-over-base, lem-graph-closed-separated-target, lem-affine-morphism-separated, thm-affine-fibre-product-tensor-ring, thm-affine-closed-immersions-quotient-rings]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.10, printed p.42"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, Proposition 11.3.6, printed p.309"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $k$ be a field, let $m,n\ge0$, and let $g:\mathbb A^m_k\to\mathbb A^n_k$
be given by polynomials $g_1,\dots,g_n\in k[x_1,\dots,x_m]$. Then the graph
$\Gamma_g:\mathbb A^m_k\to\mathbb A^m_k\times_k\mathbb A^n_k$ is a closed
immersion, and after identifying
$\mathbb A^m_k\times_k\mathbb A^n_k=\operatorname{Spec}k[x_1,\dots,x_m,y_1,\dots,y_n]$
its ideal is
$$(y_1-g_1(x),\dots,y_n-g_n(x)).$$
Moreover the first projection restricts to an isomorphism
$\Gamma_g\to\mathbb A^m_k$ with inverse $\Gamma_g$, so the graph is a closed
subscheme isomorphic to the source through $\operatorname{pr}_1$.

## Facts & Assumptions

**Given:** A field $k$, integers $m,n\ge0$, the affine spaces $\mathbb A^m_k=\operatorname{Spec}k[x_1,\dots,x_m]$ and $\mathbb A^n_k=\operatorname{Spec}k[y_1,\dots,y_n]$ over $\operatorname{Spec}k$, and the morphism $g$ with coordinate polynomials $g_1,\dots,g_n$.

[F1] For an $S$-morphism $u:X\to Y$ the **graph morphism** is the $S$-morphism $\Gamma_u=(\operatorname{id}_X,u):X\to X\times_SY$; its composites with the two projections are $\operatorname{id}_X$ and $u$, and the definition alone does not assert that its image is closed. ([[def-graph-morphism-over-base]])

[F2] If $Y\to S$ is separated and $u:X\to Y$ is an $S$-morphism, then $\Gamma_u$ is a closed immersion. ([[lem-graph-closed-separated-target]])

[F3] Every affine morphism is separated. ([[lem-affine-morphism-separated]])

[F4] For ring maps $k\to B$, $k\to C$ one has $\operatorname{Spec}B\times_{\operatorname{Spec}k}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_kC)$, with projections $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F5] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])



## Verification

1.1 The structure morphism $\mathbb A^n_k\to\operatorname{Spec}k$ is affine, hence separated by [F3], so [F2] applies to the $\operatorname{Spec}k$-morphism $g$ and the graph $\Gamma_g$ is a closed immersion. By [F4] the product is $\operatorname{Spec}(k[x]\otimes_kk[y])=\operatorname{Spec}k[x_1,\dots,x_m,y_1,\dots,y_n]$, with $\operatorname{pr}_1$ acting as $x_i\mapsto x_i$ and $\operatorname{pr}_2$ as $y_j\mapsto y_j$. [F2, F3, F4]

2.1 Under the identification of step 1.1 the morphism $\Gamma_g=(\operatorname{id},g)$ corresponds to the $k$-algebra map $\varphi:k[x,y]\to k[x]$ with $\varphi(x_i)=x_i$ and $\varphi(y_j)=g_j(x)$. [F1, step 1.1]

3.1 The map $\varphi$ is surjective and its kernel is the ideal $I=(y_1-g_1(x),\dots,y_n-g_n(x))$: clearly $I\subseteq\ker\varphi$, and conversely if $f\in\ker\varphi$ then writing $f$ as a polynomial in the variables $u_j=y_j-g_j(x)$ with coefficients in $k[x]$ gives $f\equiv f(x,g(x))=0$ modulo $I$, so $f\in I$. [step 2.1, algebra]

4.1 By [F5] the closed subscheme with ideal $I$ is, up to unique isomorphism over the product, the image of $\varphi$, so the graph is the closed subscheme $V(I)$ of $\operatorname{Spec}k[x,y]$ with the displayed ideal. [F5, step 3.1]

4.2 By [F1] the composite $\operatorname{pr}_1\circ\Gamma_g$ is the identity of $\mathbb A^m_k$, so the first projection restricts to a morphism $\Gamma_g\to\mathbb A^m_k$ with inverse $\Gamma_g$; hence $\operatorname{pr}_1|_{\Gamma_g}$ is an isomorphism. In coordinate rings this is the isomorphism $k[x,y]/I\to k[x]$ inverse to $\varphi$. [F1, step 3.1]

4.3 The degenerate cases are included: for $n=0$ the list of equations is empty, $I=0$, and the graph is the identity of $\mathbb A^m_k$; for $m=0$ the source is a single $k$-rational point and the graph is the closed point $(g_1,\dots,g_n)\in\mathbb A^n_k$ cut out by $y_j-g_j$. [step 2.1, step 3.1]

5.1 Steps 1.1, 4.1 and 4.2 show that $\Gamma_g$ is a closed subscheme of $\mathbb A^m_k\times_k\mathbb A^n_k$ with ideal $(y_1-g_1(x),\dots,y_n-g_n(x))$ whose first projection is an isomorphism onto $\mathbb A^m_k$, which is the assertion. [step 1.1, step 4.1, step 4.2] ∎



## Remarks

The fibre-product page already records the calculation of this ideal, with the
roles of the two factors exchanged, as
[[ex-graph-polynomial-map-closed-subscheme]]. The present item adds the
identification of the abstract graph morphism of [[def-graph-morphism-over-base]]
with that closed subscheme and the statement that the first projection restricts
to an isomorphism; no separate computation is needed for the ideal itself.
