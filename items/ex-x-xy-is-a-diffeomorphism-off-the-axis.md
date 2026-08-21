---
id: ex-x-xy-is-a-diffeomorphism-off-the-axis
kind: example
title: 'The map $(x,y)\mapsto(x,xy)$ is a diffeomorphism off the vertical axis'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 8.5.3"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Example

Let $U=\{(x,y)\in\mathbb R^2:x\ne0\}$. The map

$$F:U\to U,\qquad F(x,y)=(x,xy),$$

is a smooth diffeomorphism with inverse $G(u,v)=(u,v/u)$. The same formula on all of $\mathbb R^2$ omits every point $(0,v)$ with $v\ne0$.

## Facts & Assumptions

**Given:** The map above.

[L1] An injective regular $C^k$ map has open image and is a $C^k$ diffeomorphism onto that image ([[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]]).

[L2] Finite componentwise products of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Verification

**Proof technique:** direct.

1.1 The coordinate functions are smooth, so [L2] makes $F(x,y)=(x,xy)$ smooth. For an increment $(h,k)$, $$F(x+h,y+k)-F(x,y)-(h,yh+xk)=(0,hk).$$ Since $2|hk|\le h^2+k^2$, the remainder divided by $\sqrt{h^2+k^2}$ tends to zero. Hence $$DF(x,y)=\begin{pmatrix}1&0\\y&x\end{pmatrix},\qquad\det DF(x,y)=x.$$ On $U$, direct substitution gives $G(F(x,y))=(x,y)$ and $F(G(u,v))=(u,v)$. [L2, given, algebra]

2.1 Step 1.1 verifies the hypotheses and conclusion of [L1], so $F:U\to U$ is a smooth diffeomorphism. On the full plane, $F(0,y)=(0,0)$ for every $y$, and hence no point $(0,v)$ with $v\ne0$ lies in its image. [step 1.1, L1, algebra] ∎
