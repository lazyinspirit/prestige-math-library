---
title: Degreewise eventually zero spectral towers have zero limit
status: draft
research_item: lem-adjudicate-656ca1c4e08f-eventually-zero-spectral-towers
dependency_level: 5
sources:
  references:
    - title: Bastiaan Cnossen, Stable Homotopy Theory and Higher Algebra
      url: https://bastiaancnossen.com/notes/stable-homotopy-higher-algebra/section/spectra-and-stable-infinity-categories/the-category-of-spectra/index.html
      locator: Section 4.4.6, Mapping telescopes and the Milnor sequence; Lemma 4.4.34
        and Corollary 4.4.35 (Dual mapping telescope), online section last
        updated 6 November 2026
      statement: In a stable infinity-category with countable products, a coherent
        sequential inverse limit is the fiber of identity minus the transition
        shift on the product of the stages.
      hypotheses: A small coherent tower in a stable infinity-category admitting
        countable products. No connectivity or eventual-vanishing hypothesis is
        needed for this formula.
      reading_limits: Freshly read the author’s online Section 4.4.6 at Lemma 4.4.34
        and Corollary 4.4.35, including their proofs. The PDF was unavailable
        through the web tool; no fresh PDF or page-image reading is claimed.
        Import the categorical fiber formula and its specified difference map.
        Apply it to the supplied category of spectra; prove the product-group
        and eventual-vanishing consequences locally. Earlier draft reading
        claims grant no fresh credit, and upstream categorical foundations are
        not reconstructed.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [` Bastiaan Cnossen, Stable Homotopy Theory and Higher Algebra · Section 4.4.6, Mapping telescopes and the Milnor sequence; Lemma 4.4.34 and Corollary 4.4.35 (Dual mapping telescope), online section last updated 6 November 2026 `](https://bastiaancnossen.com/notes/stable-homotopy-higher-algebra/section/spectra-and-stable-infinity-categories/the-category-of-spectra/index.html)


## Statement
Assume the Axiom of Choice and the fixed compatible universe conventions of the stable spectra interface. Let $\cdots\xrightarrow{f_1}E_1\xrightarrow{f_0}E_0$ be a coherent tower of spectra. Put $P=\prod_{r\geq0}E_r$, let $p_r:P\to E_r$ be the projection, and let $s:P\to P$ be the shift specified by $p_rs=f_rp_{r+1}$. Then $\lim_{r\geq0}E_r\simeq\operatorname{fib}(1-s)$ and $\pi_nP\cong\prod_{r\geq0}\pi_nE_r$ for every integer $n$. If for every $n$ there is $N_n\geq0$ with $\pi_nE_r=0$ whenever $r\geq N_n$, then $\lim_{r\geq0}E_r\simeq0$.

## Facts & Assumptions
**Given:** Choice, the fixed universe conventions, and the small coherent tower in the statement; for the zero-limit conclusion, its stated degreewise eventual vanishing.

**Goal:** Apply the imported fiber formula, calculate the product groups, and prove the zero-limit consequence.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), retaining the foundations of [def-stable-spectra-interface](item-def-stable-spectra-interface). It also permits simultaneous representatives and paths in the component calculation for products below.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable category, coherent small products and limits, the zero spectrum, and $\pi_nZ=\pi_0\operatorname{Map}(\mathbb S[n],Z)$. Its homotopy-group detection criterion says that a spectrum with all integer homotopy groups zero is equivalent to zero.

[F2] [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) supplies the long exact sequence for a fiber sequence of spectra, in all integer degrees.

[F3] Reference 0 imports the sequential-limit fiber formula, applicable to the stable category in [F1] because it has countable products.

## External input
Use Cnossen, Corollary 4.4.35, to identify the limit with the fiber of $1-s:P\to P$, with shift components $p_rs=f_rp_{r+1}$. The difference map and its fiber identification are imported from the cited stable-category formula. The product-group calculation and eventual-vanishing application are local.

## Proof
1.1 By [F1] and [F3], $P$, its shift and the asserted fiber sequence exist. The universal property of products identifies $\operatorname{Map}(\mathbb S[n],P)$ with $\prod_{r\geq0}\operatorname{Map}(\mathbb S[n],E_r)$. Components of this product are the product of the component sets: under [A1], a family of components admits a family of representatives, and representatives in the same component in every factor admit a family of paths, which gives a path in the product. Thus the projection map on components is bijective; it is a homomorphism by functoriality of spectral homotopy groups, so it is the asserted group isomorphism. Under it, $\pi_n(s)$ is the homomorphism $S_n$ with $(S_nx)_r=(f_r)_*(x_{r+1})$. [A1, F1, F3, given]

2.1 Under eventual vanishing, set $M_n=\max(1,N_n)$. The group $\prod_{r\geq0}\pi_nE_r$ has zero factors for $r\geq M_n$. Every coordinate of $S_n^{M_n}x$ comes from $x_{r+M_n}=0$, so $S_n^{M_n}=0$. Hence $1-S_n$ has two-sided inverse $\sum_{j=0}^{M_n-1}S_n^j$, by multiplying the finite sum and cancelling adjacent terms. The same holds in degree $n+1$. Apply [F2] to the fiber sequence of step 1.1: the relevant segment is $\pi_{n+1}P\xrightarrow{1-S_{n+1}}\pi_{n+1}P\to\pi_n\lim_rE_r\to\pi_nP\xrightarrow{1-S_n}\pi_nP$. The first map is onto and the last map injective, so exactness forces $\pi_n\lim_rE_r=0$. This holds for every integer $n$, and the detection criterion of [F1] makes the limit zero. [F1, F2, step 1.1, given, algebra] ∎
