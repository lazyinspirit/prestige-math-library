---
title: Stable supported perfect subcategories and retracts
status: published
research_item: lem-author-4f716d60801a-supported-stability
dependency_level: 5
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input)
- [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support)
- [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:prop-a-distinguished-triangle-with-zero-first-map-is-split](https://alphabetamath.cc/item/prop-a-distinguished-triangle-with-zero-first-map-is-split)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $\mathbb U\in\mathbb V$ with $\omega\in\mathbb U$, and larger universes as needed for the derived categories. Scheme data are $\mathbb U$-small and module sheaves have $\mathbb U$-small section data. Existence of these universes is a standing size assumption, not a consequence of Choice. For any scheme $X$ in these universes, let $\mathcal D(X)$ be the derived infinity-category of all Zariski $\mathcal O_X$-module sheaves, formed from unbounded cochain complexes by inverting quasi-isomorphisms.

An object is locally perfect if every point has an open neighbourhood on which it is equivalent to a bounded complex of finite locally free sheaves. Here bounded means zero outside a finite interval, with bounds allowed to vary between neighbourhoods; finite locally free means locally isomorphic to $\mathcal O_X^r$ for a finite $r\geq0$. Let $\operatorname{Perf}(X)$ be the full subcategory of $\mathcal D(X)$ on these objects, retaining all ambient mapping spaces and their composition coherences. Put $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{x\in X:H^n(E)_x\ne0\}$, where $H^n$ is the cohomology sheaf, and let $\operatorname{Perf}_T(X)$ be the full subcategory of $\operatorname{Perf}(X)$ on objects whose support is contained in $T\subseteq X$.

Both subcategories are stable and idempotent complete, and their homotopy categories are idempotent complete. Their finite limits and colimits are inherited from $\mathcal D(X)$. For a functor to a category with a zero object, its full kernel means the full subcategory on objects sent to zero. If $T$ is closed and $j:X\setminus T\hookrightarrow X$, then $\operatorname{Perf}_T(X)$ is the full kernel of $j^*|_{\operatorname{Perf}(X)}:\operatorname{Perf}(X)\to\mathcal D(X\setminus T)$. For arbitrary $T$, it is the intersection, inside $\operatorname{Perf}(X)$, of the full kernels of $(-)_x|_{\operatorname{Perf}(X)}:\operatorname{Perf}(X)\to\mathcal D(\mathcal O_{X,x})$ over $x\notin T$.

## Facts & Assumptions
**Given:** A scheme $X$, a subset $T$, the Axiom of Choice, and the fixed universe and section-size conventions of the Statement.

**Goal:** Establish stability, the kernel descriptions and enhanced and ordinary idempotent completeness.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained to invoke the derived-enhancement and local-perfection inputs in [F1] and [F2]. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the separate size assumptions; no implication from Choice to the existence of universes is used.

[F0] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) specifies $(X,\mathcal O_X)$. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) specifies the finite locally free sheaves in the local models, including rank zero and ranks varying locally. Boundedness is the finite-degree condition stated above.

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the stable idempotent-complete ambient derived infinity-category, its idempotent-complete ordinary derived homotopy category, cochain cones and shifts, and the meanings of stability, exactness and idempotent completeness. Its ordinary derived homotopy category has the usual distinguished cone triangles.

[F2] [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input) identifies perfection on schemes with the stated local models and gives closure under distinguished triangles and direct summands. [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) establishes that this local condition is well-defined on derived objects.

[F3] [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) gives exact open-restriction and stalk functors, their cohomological support criteria and support containment for retracts.

[F4] [math:prop-a-distinguished-triangle-with-zero-first-map-is-split](https://alphabetamath.cc/item/prop-a-distinguished-triangle-with-zero-first-map-is-split) splits a distinguished triangle with zero first map. Rotating a triangle with zero connecting map to this form gives the corresponding direct-sum decomposition of its middle object.

## Proof
1.1 Zero and shifts in either direction have the stated local models. For a map between perfect objects, its ambient cofiber is perfect by the cone-triangle closure in [F2]; its fiber is a shift of that cofiber. This also gives finite sums, since the cofiber of a zero map $A[-1]\to B$ is $B\oplus A$. Ambient pushouts are obtained as the cofibers of the maps $(f,-g):A\to B\oplus C$ for spans $B\leftarrow A\to C$; dually, pullbacks are fibers of the corresponding maps out of finite sums. These formulas follow from the ambient stable pushout-pullback property and the cone construction in [F1]. Thus all these operations stay perfect. Fullness retains their universal mapping-space properties, so the perfect subcategory is stable and inherits finite limits and colimits. [A1, F0, F1, F2]

2.1 Restrict the domain of every functor in [F3] to $\operatorname{Perf}(X)$. The support criteria identify $\operatorname{Perf}_T(X)$ with the intersection of their stalk kernels inside $\operatorname{Perf}(X)$ and, for closed $T$, with the kernel of the restricted open-restriction functor. These functors are exact by [F3] and step 1.1. Their kernels contain zero and are closed under shifts and ambient cofibers; so is their intersection. The construction in step 1.1 and fullness therefore give stability and inherited finite limits and colimits for the supported subcategory as well. The empty intersection when $T=X$ is $\operatorname{Perf}(X)$. [F1, F3, step 1.1]

3.1 Let $E$ be a retract of a perfect object $P$, with $i:E\to P$, $r:P\to E$ and $ri=1_E$ in the ambient homotopy category. Complete $r$ to the fiber triangle $K\to P\xrightarrow{r}E\xrightarrow{\delta}K[1]$. Consecutive triangle maps compose to zero, so $\delta r=0$ and hence $\delta=\delta ri=0$. Applying [F4] after rotation gives $P\cong K\oplus E$. By summand closure in [F2], $E$ is perfect. If $P$ is supported in $T$, support containment for retracts in [F3] gives $\operatorname{Supp}(E)\subseteq\operatorname{Supp}(P)\subseteq T$. Thus both full subcategories are closed under ambient homotopy-category retracts. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Every coherent idempotent in either full subcategory splits in the ambient category by [F1]; its splitting object is an ambient retract and remains in that subcategory by step 3.1. Fullness retains the splitting maps and coherences. An ordinary idempotent in either homotopy category similarly splits in the ambient homotopy category by [F1], and its splitting object remains by step 3.1. Thus both enhanced subcategories and their ordinary homotopy categories are idempotent complete. [F1, step 1.1, step 2.1, step 3.1] ∎
