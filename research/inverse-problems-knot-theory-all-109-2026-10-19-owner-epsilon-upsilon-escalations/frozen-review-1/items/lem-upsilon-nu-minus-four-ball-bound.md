---
id: lem-upsilon-nu-minus-four-ball-bound
kind: lemma
title: "The auxiliary nu-minus threshold is bounded by smooth slice genus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-upsilon-function-from-filtered-complex
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-smooth-and-topological-slice-genus
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - def-countable-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite filtered threshold argument and the least-integer definition use no choice. The planned analytic cobordism branch uses ACω as declared by its suppliers; full AC is not inferred or used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §2.3"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definitions 2.11–2.12, Theorem 2.14, and Proposition 2.13; large-surgery threshold and the smooth genus estimate"
    - title: "Jennifer Hom and Zhongtao Wu, Four-ball genus bounds and a refinement of the Ozsvath-Szabo tau-invariant"
      url: "https://arxiv.org/pdf/1401.1565"
      locator: "Propositions 2.1, 2.3–2.4; definition of nu-plus, nonnegativity, and the four-ball genus bound"
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot and let $C(K)=\mathrm{CFK}^{\infty}(K)$ have a finite homogeneous basis $x_1,\ldots,x_m$ with Maslov grading $M(x_r)$ and Alexander filtration $A(x_r)$. Let $C^-(K)$ be the subcomplex spanned over $\mathbb F_2[U]$ by $U^n x_r$ for $n\ge0$, with $M(U^n x_r)=M(x_r)-2n$ and $A(U^n x_r)=A(x_r)-n$, and assume $H_*(C^-(K))\cong\mathbb F_2[U]$ with generator in Maslov degree zero. For each integer $s$, let $\mathcal A(K,s)$ be the subcomplex spanned over $\mathbb F_2$ by those terms $U^n x_r$ with $n\ge0$ and $A(x_r)-n\le s$. For any Maslov-graded $\mathbb F_2[U]$ complex $D$, let $\delta(D)$ be the maximal Maslov grading of a homogeneous non-torsion class in $H_*(D)$, with $\delta(D)=-\infty$ if no such class exists. Define $\nu^-(K)$ to be the least integer $s$ for which $\delta(\mathcal A(K,s))=0$. Then
$$ 0\le \nu^-(K)\le g_4^{\mathrm{sm}}(K), $$
where $g_4^{\mathrm{sm}}(K)$ is the minimum genus of a smooth compact connected oriented properly embedded surface in the four-ball bounded by $K$.

## Statement references

[[def-upsilon-function-from-filtered-complex|The finite bifiltered complex and filtration-coordinate convention]]

[[def-smooth-and-topological-slice-genus|The smooth four-ball genus branch]]

[[lem-knot-floer-large-surgery-and-filtered-cobordism-input|The current tau cobordism supplier; its proof is incomplete and it does not state this nu-minus estimate]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §2.3](https://arxiv.org/pdf/1407.1795)

[Hom and Wu, *Four-ball genus bounds and a refinement of the Ozsvath-Szabo tau-invariant*, Proposition 2.4](https://arxiv.org/pdf/1401.1565)

## Facts & Assumptions

**Given:** A smooth oriented knot, its normalized minus complex, and the smooth four-ball genus.

[F1] [[def-upsilon-function-from-filtered-complex]]: the finite bifiltered complex has a finite homogeneous basis, multiplication by $U$ lowers both filtration coordinates by one and Maslov grading by two, and its total localized homology has a normalized Maslov-zero generator.

[A1] [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]] (present, proof incomplete): its current Statement proves a tau genus estimate only; its Proof is conditional and does not prove the displayed $\nu^-$ bound.

[A2] [[def-knot-floer-cobordism-map]] (present, proof not supplied for its analytic construction): it defines the cobordism-map input required by the genus argument.

[A3] [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]] (present, proof not supplied): its Statement supplies the analytic triangle framework, while the local regularity, compactness, boundary, and gluing proof remains absent.

[A4] [[lem-knot-floer-cobordism-naturality-and-movie-invariance]] (present, proof not supplied): its Statement supplies the required naturality interface, but its proof is absent.

[A5] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): the current Statement identifies the grid and Heegaard knot Floer models, but does not provide the comparison proof.

[A6] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] (present, proof not supplied): its Statement supplies the analytic disk input, but the required analytic proof is not present.

[A7] [[def-countable-choice]]: the declared analytic cobordism branch uses countable choice; no full choice is inferred.

## Proof

1.1 Write $M_r=M(x_r)$ and $A_r=A(x_r)$. The terms of $\mathcal A(K,s)$ on the $r$th $U$-tower are $U^n x_r$ with $n\ge\max(0,A_r-s)$, so their Maslov gradings are at most $M_r-2\max(0,A_r-s)$. By [F1], this bound tends to $-\infty$ as $s$ tends to $-\infty$; since the basis is finite, choose $s_0$ so that it is strictly negative for every $r$ when $s\le s_0$. Then $H_*(\mathcal A(K,s))$ has no class of degree zero and $\delta(\mathcal A(K,s))\ne0$. For all $s\ge\max_r A_r$, $\mathcal A(K,s)=C^-(K)$ and its normalized tower gives $\delta=0$. Thus the set defining $\nu^-$ is nonempty and bounded below, and its least element exists. This argument does not prove that the least element is nonnegative. [given, F1, algebra]

2.1 To prove $\nu^-(K)\ge0$, one needs the filtered-map or $V_s,H_s$ argument that identifies the threshold with $\nu^+$ and rules out a degree-zero non-torsion class for $s<0$. To prove $\nu^-(K)\le g_4^{\mathrm{sm}}(K)$, one needs the large-surgery correspondence and the cobordism-map genus estimate. The inspected sources state these conclusions, but the current batch-94 supplier proves only a tau genus estimate, and the batch-93 cobordism-map, triangle, and naturality proof chain is unsupplied; neither implication is established locally. [given, A1, A2, A3, A4, A5, A6, A7, algebra]

## Unresolved proof obligations

The exact missing suppliers are: (i) the filtered-map or $V_s,H_s$ argument proving $\nu^-(K)\ge0$ from the stated Alexander-filtered minus model, and (ii) a complete large-surgery/cobordism proof that a genus-$g_4^{\mathrm{sm}}$ surface yields $\delta(\mathcal A(K,s))=0$ for some $s\le g_4^{\mathrm{sm}}(K)$. The current batch-94 tau lemma states a different estimate and is not silently used as a substitute. Batch-92 grid/Heegaard comparison and disk-analysis proofs and batch-93 triangle regularity, movie invariance, and cobordism-map proofs remain unsupplied. This helper is escalated.
