---
title: Strong monoidal transport from a product-base cocartesian family
status: published
research_item: lem-author-c5bc2838d897-monoidal-transport-product-family
dependency_level: 1
---

PDF p. 3: Strong monoidal transports from the common product-base family

## Prerequisites

- [thm-author-c5bc2838d897-monoidal-transport-straightening-input](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input)


## Statement
Let $S=N(\mathrm{Fin}_*)$ and let $q:E\to B\times S$ be a cocartesian fibration of infinity-categories. Assume that for each $b\in B$, the inert transports in the pullback $E_b^{\otimes}\to S$ induce equivalences $E_{(b,n)}\simeq E_{(b,1)}^n$ for all $n\geq0$; the $n=0$ condition means $E_{(b,0)}$ is terminal. Then $q$ determines one coherent functor from $B$ to symmetric monoidal infinity-categories and strong symmetric monoidal functors. Its value at $b$ is $E_b^{\otimes}\to S$, and its transport for $u:b\to b'$ is induced by $q$-cocartesian transport over $(u,\mathrm{id})$. It preserves every $S$-cocartesian transport, including active tensor operations and the nullary unit, with all composition/higher coherences.

## Facts & Assumptions
**Given:** One actual cocartesian fibration over the PRODUCT $B\times S$, and the specified Segal/unit equivalences. Separate fibrations over $B$ and $S$ do not constitute the hypothesis.

**Goal:** Derive strong symmetric monoidal $B$-transports from that one family.

[F1] [thm-author-c5bc2838d897-monoidal-transport-straightening-input](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input) supplies straightening with its morphisms, exponential currying, and the HA symmetric monoidal/strong monoidal criteria.

[F2] For formulation as well as argument, use the same supplier's Facts [F4]–[F7] and [F9]: its compatible-universe conventions, simplicial model of infinity-categories, functors and equivalences, ordinary nerve, $\mathrm{Cat}_\infty$ and functor infinity-categories, cocartesian fibrations, fibers and coherent transport, and $\mathrm{Fin}_*$ with its inert projections and active folds. These are the interfaces supplied by [thm-author-c5bc2838d897-monoidal-transport-straightening-input](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input), not additional conclusions of this lemma. Write $E_b^\otimes=E\times_{B\times S}(\{b\}\times S)$ and $E_{(b,n)}=E\times_{B\times S}\{(b,\langle n\rangle)\}$. A full subcategory spanned by specified objects means the simplicial subset containing exactly the simplices whose vertices are those objects.

## Proof
1.1 Straighten $q$ to $F:B\times S\to\mathrm{Cat}_\infty$. Currying is the exponential equivalence $\operatorname{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\operatorname{Fun}(B,\operatorname{Fun}(S,\mathrm{Cat}_\infty))$, so it gives one functor $G:B\to\operatorname{Fun}(S,\mathrm{Cat}_\infty)$, with $G(b)=F(b,-)$. The pullback $E_b^{\otimes}\to S$ is its unstraightening. By the assumed inert Segal equivalences and terminal zeroth value, this is a symmetric monoidal infinity-category. [F1, F2, given]

2.1 An edge $u:b\to b'$ gives the actual natural transformation $G(u):F(b,-)\to F(b',-)$ in $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$. Under the straightening equivalence whose morphisms preserve cocartesian arrows, it gives a map $E_b^{\otimes}\to E_{b'}^{\otimes}$ OVER $S$ preserving ALL $S$-cocartesian arrows. Its component at $s\in S$ is the $q$-transport along $(u,\mathrm{id}_s)$. Thus it is strong symmetric monoidal by the criterion in [F1], not just a map preserving inert arrows. [F1, F2, step 1.1]

3.1 Explicitly, for every $\alpha:s\to t$ in $S$, naturality in the curried functor gives an equivalence $F(b',\alpha)\circ F(u,\mathrm{id}_s)\simeq F(u,\mathrm{id}_t)\circ F(b,\alpha)$. Both sides are transports along the same composite arrow $(u,\alpha)$ in the product base. For $\alpha:\langle2\rangle\to\langle1\rangle$ this is the tensor equivalence, and for $\alpha:\langle0\rangle\to\langle1\rangle$, together with terminal $E_{(b,0)}$, it is the unit equivalence. Hence the active and nullary operations are preserved, not merely the coordinate projections. [F1, F2, step 1.1, step 2.1]

4.1 Every simplex of $B$ is already sent by $G$ to a simplex of $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$. Unstraightening its transformations retains their full compositions and all higher coherences. The full subcategory of $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$ on objects satisfying the Segal/unit conditions contains every $G(b)$, and, by step 2.1, its transformations correspond to strong symmetric monoidal functors. Therefore $G$ factors through that model of symmetric monoidal infinity-categories, proving the asserted coherent diagram. No higher coherence has been inferred from pointwise equivalences. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
