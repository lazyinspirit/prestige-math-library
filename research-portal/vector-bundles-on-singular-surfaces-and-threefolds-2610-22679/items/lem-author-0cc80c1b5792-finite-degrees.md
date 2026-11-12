---
id: lem-author-0cc80c1b5792-finite-degrees
kind: lemma
title: Degreewise boundedness and finite collections of eventual vanishings
status: published
domain: mathematics
deps:
  - lem-adjudicate-5eb16844831b-empty-motivic-stages
  - math:def-axiom-of-choice
  - def-valuative-dimension-and-boundedness
  - def-motivic-filtration
  - lem-author-0cc80c1b5792-threshold
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-stable-spectra-interface
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-adjudicate-5eb16844831b-empty-motivic-stages: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-author-0cc80c1b5792-threshold: mathematical-premise
  lem-author-0cc80c1b5792-noetherian-scope: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 17
formulation_deps:
  - math:def-axiom-of-choice
  - def-valuative-dimension-and-boundedness
  - def-motivic-filtration
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-stable-spectra-interface
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-adjudicate-5eb16844831b-empty-motivic-stages
  - math:def-axiom-of-choice
  - def-valuative-dimension-and-boundedness
  - def-motivic-filtration
  - lem-author-0cc80c1b5792-threshold
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-stable-spectra-interface
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, containing the field, ring and scheme data in $\mathcal U$. Retain the compatible enlargements and smallness conventions of the supplied Noetherian-scope, filtration, perfect-complex and spectral constructions. These size hypotheses are assumed separately from Choice. Let $X$ be a finite-dimensional Noetherian scheme whose structure morphism $X\to\operatorname{Spec}\mathbb Z$ factors through $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$ for one prime $p$; this is equicharacteristic in the source's sense. Use its actual source prime-field motivic filtration, extended to all integer stage indices, and write $F^r=F^r_{\mathrm{mot}}K(X)$. On schemes over the standing field this is exactly the local motivic filtration, including its augmentation to $K(X)$. The tower is degreewise bounded above in filtration on all integer homotopy degrees. For every finite set $S\subseteq\mathbb Z$ and every integer anchor $t$, there is a nonnegative integer $L=L(X,S,t)$ such that $\pi_qF^{t+\ell}=0$ for all $q\in S$ and all integers $\ell\geq L$. The image subgroups $\operatorname{im}(\pi_qF^{t+\ell}\to K_q(X))$, where $K_q(X)=\pi_qK(X)$ and the maps are induced by the actual augmentation, vanish under the same conditions. No threshold independent of an unbounded set of degrees is asserted.

## Facts & Assumptions
**Given:** The Axiom of Choice; compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, containing the field, ring and scheme data in $\mathcal U$; the compatible enlargements and smallness conventions of the supplied Noetherian-scope, filtration, perfect-complex and spectral constructions, assumed separately from Choice; a finite-dimensional Noetherian scheme $X$ with the stated global prime-field factorization; its actual source filtration or its standing-field restriction; a finite $S\subseteq\mathbb Z$; and an integer anchor $t$.

**Goal:** Express the stagewise result in the completed local boundedness language and in the form used by finite exact-sequence arguments.

[F1] Under the size hypotheses of [F8], for nonempty $X$ in the stated global prime-field scope, [[lem-author-0cc80c1b5792-threshold]] supplies, for each pair of integers $q,t$, a nonnegative integer $\ell_0(q,t)$ such that $\pi_qF^{t+\ell}=0$ for every integer $\ell\geq\ell_0(q,t)$.

[F2] [[def-valuative-dimension-and-boundedness]] defines degreewise boundedness and ring Krull dimension. [[def-motivic-filtration]] defines the integer-indexed standing-field tower, its augmentation and its image subgroups; for the full prime-field scope use the same image formula with the actual augmentation supplied by [F5].

[F3] The assumed [[math:def-axiom-of-choice]] discharges the inherited Choice premises of [F1], [F2], [F4], [F5] and [F6] for the selected actual filtration, perfect-complex realization and spectral foundations. Taking a maximum of finitely many integer thresholds requires no additional choice assumption.

[F4] [[lem-adjudicate-5eb16844831b-empty-motivic-stages]] proves that every actual stage on the empty scheme is zero, independently of any dimension convention.

[F5] [[lem-author-0cc80c1b5792-noetherian-scope]] supplies the global prime-field meaning of equicharacteristic and the actual source filtration for nonempty finite-dimensional Noetherian schemes in that scope. It verifies the qcqs and finite-valuative-dimension hypotheses and identifies the standing-field restriction, including the stage maps to $K$, with the local filtration in [F2]. The empty scheme's stages are supplied separately by [F4].

[F6] [[def-stable-spectra-interface]] supplies the stage spectra, zero spectrum and functorial integer homotopy groups $\pi_q$, in its fixed compatible universes. Each $\pi_q$ is an abelian group. Here $K_q(X)=\pi_qK(X)$, and each image subgroup uses the homomorphism induced by the augmentation in [F2] and [F5].

[F7] [[math:def-locally-noetherian-and-noetherian-scheme]] defines the Noetherian scheme hypothesis. Here finite-dimensional means that the Krull dimensions of the coordinate rings of affine open subschemes have finite supremum, using the ring dimension convention in [F2]; the empty scheme is handled by [F4].

[F8] [[math:def-grothendieck-universe-closure-convention]] defines the universe closure conditions; it does not assert the existence of universes containing prescribed data. Assume the nested universes and data containment stated above. Small spaces and indexing diagrams are $\mathcal U$-small, their infinity-categories are formed in $\mathcal V$, and the infinity-category of those categories in $\mathcal W$, with the compatible enlargements required by [[def-stable-spectra-interface]]. Here $\mathcal U$-small means belonging to $\mathcal U$ up to isomorphism; essentially small means equivalent to a $\mathcal U$-small infinity-category. Retain simultaneously the compatible bounds and enlargements for the actual filtration, integer extension and common-family perfect-complex realization in [[lem-author-0cc80c1b5792-noetherian-scope]] and [[def-motivic-filtration]], also used by [[lem-author-0cc80c1b5792-threshold]] and [[lem-adjudicate-5eb16844831b-empty-motivic-stages]]. In particular, the perfect fibers are used in the essentially small nonconnective-functor domain, in the supplied larger universes. These are separate size assumptions, not consequences of [F3].

## Proof
1.1 Under the separately assumed size conventions of [F8], use the actual filtration and augmentation in [F2], [F4] and [F5], on the stated geometric domain of [F7] and in the spectral conventions of [F6]. If $X$ is empty, [F4] gives all stage and image vanishings, with threshold zero for every integer anchor. Suppose henceforth that $X$ is nonempty. Under the inherited Choice premise in [F3] and the size hypotheses in [F8], take anchor $t=0$ in [F1]. For every fixed integer $q$, all integer stages $j\geq\ell_0(q,0)$ have zero $\pi_q$. These are exactly the degreewise boundedness quantifiers in [F2]. If a stage group is zero, the homomorphism from it to $K_q(X)$ has zero image. [F1, F2, F3, F4, F5, F6, F7, F8, given]

2.1 For nonempty $X$ and a finite nonempty $S$, list its elements as $q_1,\ldots,q_m$. Starting at zero and successively taking the maximum with $\ell_0(q_1,t),\ldots,\ell_0(q_m,t)$ produces a nonnegative integer $L$ at least every individual threshold. Every integer $\ell\geq L$ therefore satisfies [F1] for each $q\in S$, so all the asserted stage groups and hence their image subgroups vanish by step 1.1. If $S$ is empty, take $L=0$ and the simultaneous assertion is vacuous; if $X$ is empty, take $L=0$ by step 1.1. The dependence on $S$, $t$ and $X$ is retained, and no universal bound for an unbounded set of integer homotopy degrees is asserted. [F1, F2, F3, F8, step 1.1, construct] ∎
