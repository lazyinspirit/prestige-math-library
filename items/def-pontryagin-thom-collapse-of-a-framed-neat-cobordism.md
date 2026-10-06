---
id: def-pontryagin-thom-collapse-of-a-framed-neat-cobordism
kind: definition
title: "Collapse of a framed neat cobordism in X times I"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
  - def-the-standard-smooth-step-function
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-euclidean-tubular-neighbourhood-theorem
  - thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - def-framed-cobordism-of-embedded-submanifolds
  - def-pontryagin-thom-collapse-of-an-embedded-submanifold
  - lem-tubular-charts-realize-a-prescribed-normal-identification
  - thm-neat-submanifolds-have-boundary-adapted-slice-charts
  - lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint
  - def-framing-of-a-normal-bundle
  - def-countable-choice
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Definition 3.1 and (3.3)-(3.7) (neat submanifolds and tubular neighborhoods), printed pp.25-26; well-definedness of the inverse map, printed p.27"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "proof of Theorem B, printed p.50"
    - title: "John Milnor and James Munkres, Differential Topology (Prentice-Hall, 1974)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf"
      locator: "proof of Theorem 3.14, printed p.26"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W,\varepsilon,\Psi)$ be a framed cobordism in $X\times I$, with the literal product ends and constant collar framings of [[def-framed-cobordism-of-embedded-submanifolds]]. Extend $W$ past both ends by the cylinders $N_0\times(-1,0]$ and $N_1\times[1,2)$ to a closed boundaryless embedded submanifold $\widetilde W$ of $M=X\times(-1,2)$. The product collars make these extensions smooth; extend $\Psi$ constantly on them. The boundary normal quotients are those of [[thm-neat-submanifolds-have-boundary-adapted-slice-charts]], or directly the quotients of these extended product tangent bundles.

A compatible tube $A$ of $\widetilde W$ with datum $(\widetilde W\times\mathbb R^k,\Psi^{-1})$ exists by [[lem-tubular-charts-realize-a-prescribed-normal-identification]], now applied in the boundaryless manifold $M$. We can make this tube a product on smaller end collars as follows. Choose compatible tubes $B_i$ of $N_i$ in $X$ with datum $(N_i\times\mathbb R^k,\varphi_i^{-1})$ and let $B$ be their products with time. Embed $M$ properly in Euclidean space by [[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]]; [[thm-euclidean-tubular-neighbourhood-theorem]] supplies a smooth retraction $R$ of a Euclidean neighbourhood onto that image (normal addition followed by projection). Let $\chi$ be a smooth function of the base time, equal to one near the ends and supported within the original product collars, constructed using [[def-the-standard-smooth-step-function]]. On a small tube define
$$C(w,v)=R\bigl((1-\chi(w))A(w,v)+\chi(w)B(w,v)\bigr),$$
reading $A,B,C$ in this Euclidean embedding and using $A$ where $\chi=0$. Both maps fix $w$ and induce $\Psi_w^{-1}$ on the normal quotient; derivatives of $\chi$ multiply $B(w,0)-A(w,0)=0$. Thus $dC$ is invertible along zero: it is the identity on $T\widetilde W$ and an isomorphism on the normal quotient. By [[thm-smooth-inverse-function-theorem-on-manifolds]], $C$ is locally a diffeomorphism there. It is injective on a sufficiently small uniform tube over compact $W$: otherwise distinct pairs with fibre coordinates tending to zero and equal images have convergent base subsequences; their limiting base points coincide because $C(w,0)=w$, contradicting local injectivity near that zero vector. Shrinking once more keeps the middle part away from $\partial(X\times I)$; on the collars $C=B$ preserves time exactly. Consequently its restriction $\Phi$ over $W$ is a neat compatible tube, product on smaller end collars. This is a local proof of the product-tube assertion used in Freed's Theorem 3.7 and the proof of Theorem 3.9, printed pp.26–27; boundaryless tube existence alone would not supply it.

In these framed coordinates choose $r>0$ with $\Phi$ defined on $W\times\{|v|\le2r\}$. For $k\ge1$, let $z$ and $a$ be the stereographic coordinate and smooth radius profile of [[def-pontryagin-thom-map-of-a-framed-submanifold]], and define the **collapse of the framed cobordism** by
$$c_W(\Phi(w,v))=z^{-1}\!\left(\frac{v}{a(|v|^2)}\right)\quad(|v|<r),\qquad c_W=\infty\text{ elsewhere}.$$
The same inversion-coordinate calculation proves smoothness, including across the cutoff sphere. On the product collars it is the product of the normalized collapse of $(N_i,\varphi_i)$ with time; thus its endpoint restrictions are Pontryagin–Thom maps with compatible induced tube data. Extend by the constant basepoint on $\{*\}\times I$ to obtain a based homotopy $X_+\times I\to S^k$. For $k=0$, $W$ is clopen in $X\times I$; take its characteristic map to $S^0$, whose endpoint restrictions are the characteristic maps of $N_i$. For empty $W$ the map is constant. All formulas use supplied data and only the inherited countable-choice hypothesis.
