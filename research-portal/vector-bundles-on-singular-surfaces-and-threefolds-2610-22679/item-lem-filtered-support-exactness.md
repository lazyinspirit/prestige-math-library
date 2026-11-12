---
title: Support fibers commute with graded triangles
status: published
research_item: lem-filtered-support-exactness
dependency_level: 5
---

PDF p. 6: Supported filtered objects; PDF p. 16: Lifting to the supported third stage

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

## Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable spectra interface. Let $U\subset X$ be an open immersion, write $T=X\setminus U$, and let $E$ be a presheaf of decreasing filtered spectra. Thus restriction gives a coherently compatible map of augmented towers $F^jE(X)\to F^jE(U)$ and a map $E(X)\to E(U)$. Here a presheaf means a contravariant coherent functor on a category containing this open immersion; no descent property is assumed. Put

$$F^j_T E(X)=\operatorname{fib}(F^jE(X)\to F^jE(U)),\qquad E_T(X)=\operatorname{fib}(E(X)\to E(U)).$$

The compatible maps make $F^\bullet_T E(X)$ a decreasing filtration on $E_T(X)$. For every integer $j$ there is a natural fiber sequence

$$\operatorname{gr}^j_T E(X)\longrightarrow \operatorname{gr}^jE(X)\longrightarrow \operatorname{gr}^jE(U),$$

where $\operatorname{gr}^j_T E(X)=\operatorname{cofib}(F^{j+1}_T E(X)\to F^j_T E(X))$. Consequently there is an exact sequence

$$\cdots\to\pi_{i+1}F^jE(U)\to\pi_iF^j_T E(X)\to\pi_iF^jE(X)\to\pi_iF^jE(U)\to\cdots.$$

In particular, every element in the kernel of the last displayed map lifts to $\pi_iF^j_T E(X)$. More specifically, if $\pi_iF^jE(U)\to\pi_iE(U)$ is injective, then every element of $\operatorname{im}(\pi_iF^jE(X)\to\pi_iE(X))$ whose restriction to $\pi_iE(U)$ is zero is the image of an element of $\pi_iF^j_T E(X)$ under the composite to $\pi_iE(X)$. Without such a condition, an ambient kernel condition alone does not identify a stage-level kernel.

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible universe and smallness conventions of [def-stable-spectra-interface](item-def-stable-spectra-interface). These retain the ZFC and nested-universe premises of its stable enhancement whenever its spectra, coherent diagrams, limits, cofibers and homotopy groups are used below. Existence of the required universes is a separate size assumption, not a consequence of Choice. The finite formal arguments introduce no additional selection principle.

**Given:** A coherent presheaf of decreasing filtered spectra, an open immersion $U\subset X$, and integers $i,j$. Work under [A1].

**Goal:** Construct the supported filtration and graded fiber sequence, and prove the exactness and lifting assertions with their stated hypotheses.

[F1] In [def-stable-spectra-interface](item-def-stable-spectra-interface), spectra form a stable infinity-category with zero object and coherent finite limits and colimits. A fiber is the pullback over zero, a cofiber is the pushout along zero, and a square is a pullback exactly when it is a pushout.

[F2] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines an augmented decreasing filtration and its associated graded as the cofiber of the transition from stage $j+1$ to stage $j$.

[F3] [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) gives the natural long exact homotopy sequence of any fiber sequence of spectra.

[F4] An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf, as in [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) and [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). The argument uses its restriction arrow in the given presheaf diagram; it requires no geometric descent or support-category comparison.

## Proof

**Proof technique:** Apply the fiber construction to the diagram of filtration stages and use stability to compare its cofibers.

1.1 Restriction and the transition maps form a coherent diagram of arrows $F^jE(X)\to F^jE(U)$. Taking the pullback over zero at every stage is functorial, producing transition maps $F^{j+1}_T E(X)\to F^j_T E(X)$ with all composition coherences. The compatible augmentation maps to $E(X)\to E(U)$ likewise induce compatible maps $F^j_T E(X)\to E_T(X)$. This is the asserted augmented decreasing tower. [A1, F1, F2, given]

2.1 For a coherent square of arrows of spectra, taking fibers preserves its finite limits: each fiber is itself a pullback, and the universal property of limits identifies an iterated finite limit with the limit over the corresponding product diagram. Limits of arrow diagrams are computed at their source and target. The zero arrow has zero fiber. In particular, if a square of arrows is pointwise a pushout, stability makes it pointwise a pullback; after taking fibers it is again a pullback and hence a pushout. Thus taking fibers carries pointwise cofiber squares of arrows to cofiber squares of spectra. [A1, F1, step 1.1]

3.1 Apply step 2.1 to the map of arrows from $F^{j+1}E(X)\to F^{j+1}E(U)$ to $F^jE(X)\to F^jE(U)$. Its pointwise cofiber is the arrow $\operatorname{gr}^jE(X)\to\operatorname{gr}^jE(U)$. The cofiber of its map of fibers is therefore naturally equivalent to the fiber of that graded arrow. By the definition of the supported graded spectrum, this is precisely the displayed graded fiber sequence. The construction uses the coherent diagram and universal properties, so it is natural in maps of such filtered presheaves and open pairs. [F1, F2, step 1.1, step 2.1]

4.1 The definition of $F^j_T E(X)$ gives a fiber sequence $F^j_T E(X)\to F^jE(X)\to F^jE(U)$. Applying [F3] yields the displayed long exact sequence. Exactness at $\pi_iF^jE(X)$ says that its restriction kernel is exactly the image of $\pi_iF^j_T E(X)$, proving the first lifting claim. [F1, F3, step 3.1]

5.1 Suppose the stated map on $U$ is injective. Choose a stage representative $a\in\pi_iF^jE(X)$ of an ambient element $x$ whose restriction to $\pi_iE(U)$ is zero. Compatibility of restriction with augmentation says that the image of $a|_U$ in $\pi_iE(U)$ is zero; injectivity therefore gives $a|_U=0$ in $\pi_iF^jE(U)$. Step 4.1 lifts $a$ to $\pi_iF^j_T E(X)$, whose image in $\pi_iE(X)$ is $x$. The argument explicitly uses injectivity to pass from the ambient kernel to the stage kernel. This proves all claims. [F2, step 1.1, step 4.1, given] ∎
