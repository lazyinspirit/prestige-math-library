---
title: Augmented tower comparisons preserve supported graded projections
status: published
research_item: lem-author-16f30f6b95cb-augmented-filtered-support-transport
dependency_level: 15
---

PDF p. 16: Supported leading weight two

## Prerequisites

- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)


## Statement
Assume the Axiom of Choice and the universe and smallness conventions of the stable spectra interface. Let $X$ be a scheme, let $T$ be a closed subset, and let $V=X\setminus T$ be its open subscheme. Let $F^\bullet E\to E$ and $G^\bullet E'\to E'$ be coherent augmented decreasing filtered presheaves of spectra on a category containing this open immersion. Here a presheaf is a contravariant coherent functor; its filtration has transitions from larger integer indices to smaller ones and compatible augmentations to the underlying presheaf. Let $\alpha$ be a specified natural comparison commuting coherently with these transitions and augmentations. Suppose $\alpha$ is an equivalence on every stage and on the underlying spectra at both $X$ and $V$. No descent hypothesis is required.

Define the supported objects and their graded pieces by
$$F^j_TE=\operatorname{fib}(F^jE(X)\to F^jE(V)),\qquad E_T=\operatorname{fib}(E(X)\to E(V)),$$
$$\operatorname{gr}^j_TF=\operatorname{cofib}(F^{j+1}_TE\to F^j_TE),$$
and use the analogous definitions $G^j_TE'$, $E'_T$, and $\operatorname{gr}^j_TG$. The graded support object is naturally the fiber of the restriction between the corresponding unsupported graded objects. Write $p_j:F^j_TE\to\operatorname{gr}^j_TF$ for the defining cofiber projection and $\epsilon_j:F^j_TE\to E_T$ for the induced augmentation, and use primes for the second tower. The comparison induces equivalences
$$a_j:F^j_TE\to G^j_TE',\qquad a:E_T\to E'_T,\qquad b_j:\operatorname{gr}^j_TF\to\operatorname{gr}^j_TG,$$
which satisfy the commuting projection and augmentation identities
$$b_jp_j=p'_ja_j,\qquad a\epsilon_j=\epsilon'_ja_j.$$
These identities are in the homotopy category, whose morphisms are homotopy classes of maps of spectra, and come from the coherent comparison diagrams.

If $\epsilon_q$ is an equivalence for an integer $q$, then $\epsilon'_q$ is also an equivalence. Define the **inverse-augmentation leading maps** in that homotopy category by
$$N_q=p_q\epsilon_q^{-1}:E_T\to\operatorname{gr}^q_TF,\qquad N'_q=p'_q(\epsilon'_q)^{-1}:E'_T\to\operatorname{gr}^q_TG.$$
They satisfy
$$b_qN_q=N'_qa.$$
Thus the supported normalization being transported means this specified composite and its naturality, including the induced identities on homotopy groups. Any formula for its value on specified classes transports through these maps; a numerical or generator-value formula must be supplied separately and does not follow merely from equivalence of the target groups.

## Facts & Assumptions

**Given:** The scheme and open pair, the two coherent augmented diagrams, their actual comparison, and the stated stage and underlying equivalences on $X,V$, under the Choice and size assumptions above.

**Goal:** Preserve the actual supported projection and the explicitly defined inverse-augmentation leading map.

[A1] Assume the Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), and the compatible universe and smallness conventions required by [def-stable-spectra-interface](item-def-stable-spectra-interface). This is the inherited foundational hypothesis for the stable constructions used below; no independent choice principle is used to select inverses.

[F1] Spectra have a zero object and coherent finite limits and colimits; fibers and cofibers are their defining pullbacks and pushouts. Universal properties make these constructions functorial. [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F2] An augmented decreasing filtration and its graded cofiber are as in [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum). [lem-filtered-support-exactness](item-lem-filtered-support-exactness) constructs the supported augmented tower and identifies its graded cofibers naturally with the fibers of graded restriction maps.

[F3] The support notation uses the fiber-of-restriction convention of [def-cohomology-with-support](item-def-cohomology-with-support). Only that convention is used here; no motivic comparison, quotient evaluation, or identification with a support category is assumed.

[F4] The scheme and open-immersion terminology is supplied by [math:def-scheme](https://alphabetamath.cc/item/def-scheme) and [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes); $V$ carries the restricted scheme structure. The argument uses only the resulting restriction arrow.

## Proof

1.1 On the restriction arrow for each stage, take the fiber of the given comparison square. A diagram of equivalences has equivalent limits: its componentwise inverse diagram supplies inverse limit maps by the universal property. This gives $a_j$, and the identical construction on the underlying restriction arrow gives $a$. Functoriality preserves the transition and augmentation diagrams, giving $a\epsilon_j=\epsilon'_ja_j$. By [F2], the supported graded objects are the cofibers of these supported transitions and the fibers of the graded restrictions. Taking cofibers of the transition comparison gives $b_j$; it is an equivalence because both input maps are equivalences, by the dual universal property for colimits. The defining cofiber projections are part of these same diagrams, so $b_jp_j=p'_ja_j$. All constructions use the supplied coherent diagrams, before passing to their homotopy classes. This proves all stage, underlying, graded, and projection assertions. [A1, F1, F2, F3, F4, given]

2.1 Suppose $\epsilon_q$ is an equivalence. The augmentation identity in step 1.1 gives $\epsilon'_q=a\epsilon_qa_q^{-1}$ in the homotopy category, hence $\epsilon'_q$ is an equivalence. Inverses of an isomorphism in a category are unique, so $a_q\epsilon_q^{-1}=(\epsilon'_q)^{-1}a$ without any independently selected normalization. Combining this with the projection identity gives $b_qp_q\epsilon_q^{-1}=p'_qa_q\epsilon_q^{-1}=p'_q(\epsilon'_q)^{-1}a$, the asserted identity for $N_q,N'_q$. The homotopy groups of the supplied stable interface are functorial, so this equality induces the same commuting homomorphisms in every degree. Applying that equality to any specified class transports any supplied value formula through the actual maps. No value on a generator has been inferred from an abstract group identification. [A1, F1, step 1.1, given, algebra] ∎
