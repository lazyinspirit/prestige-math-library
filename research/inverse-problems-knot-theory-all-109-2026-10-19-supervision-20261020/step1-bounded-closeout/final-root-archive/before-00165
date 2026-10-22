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

[[lem-knot-floer-large-surgery-and-filtered-cobordism-input|The separate tau cobordism inequality, which does not replace the nu-minus estimate]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §2.3](https://arxiv.org/pdf/1407.1795)

[Hom and Wu, *Four-ball genus bounds and a refinement of the Ozsvath-Szabo tau-invariant*, Proposition 2.4](https://arxiv.org/pdf/1401.1565)

## Facts & Assumptions

**Given:** A smooth oriented knot, its normalized minus complex, and the smooth four-ball genus.

[F1] [[def-upsilon-function-from-filtered-complex]]: the finite bifiltered complex has a finite homogeneous basis, multiplication by $U$ lowers both filtration coordinates by one and Maslov grading by two, and its total localized homology has a normalized Maslov-zero generator.

[F2] The accepted normalized grid-to-analytic comparison identifies the knot complexes, with all marked-variable and stabilization factors accounted for. It is reused at that exact knot scope. [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]]

[A6] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] supplies actual full-filtered chosen disk counts and compactification for knots in $S^3$, without the grid/Heegaard identification or the absolute large-surgery normalization.

[A7] [[def-countable-choice]]: the declared analytic cobordism branch uses countable choice; no full choice is inferred.

[F3] The accepted normalized analytic coordinate-swap equivalence is Maslov-zero and Laurent-linear, exchanges both filtrations, and preserves the normalized total generator, with its filtered inverse and homotopies. [[lem-knot-floer-duality-and-filtration-swap]]

[E1] **External genus input under CLAUDE.md §12:** for the normalized $\mathbb F_2[U]$ knot complex, the least $s$ with $\delta(\mathcal A(K,s))=0$ is at most the smooth four-ball genus. Its module, Maslov and Alexander conventions are exactly Definitions2.11–2.12 and Theorem2.14 of [Ozsváth–Stipsicz–Szabó, printed10–11](https://arxiv.org/pdf/1407.1795v3). Proposition2.13 identifies this threshold with Hom–Wu's $\nu^+$; [Hom–Wu, Proposition2.4, printed5](https://arxiv.org/pdf/1401.1565v1) supplies the smooth genus inequality. This imports the established large-surgery/cobordism bound, not just a formal triangle identity or a localized nonzero map. The exact OSS §2.3 statement and plus/minus proof on printed10–11 and Hom–Wu definition/propositions on printed3–5 were read; Rasmussen’s upstream proof is not represented as read or locally reconstructed.

[C1] **Choice scope of the external input:** use it for the fixed knot diagram and finite smooth concordance/surface under consideration, not for a simultaneous choice of data for every knot. Integer domains and Spin-c labels form countable sets; all coefficient matrices and final graded basis changes are finite. Compact source charts give separable Sobolev and almost-complex parameter spaces with countable bases. Their fixed Fredholm problems admit a countable family of finite-cokernel perturbation charts, selected using ACω; the usual finite-dimensional Sard reduction and least-basis nested-ball Baire construction select one datum regular for the countable list. Compactness/gluing is used pointwise for these data, with finite covers of the compact low-index moduli and least-integer shrinking thresholds, not an arbitrary family of choices. Thus the imported fixed-data construction has a finite/countable specialization; full AC is not substituted for the declared ACω branch. The cited papers are not claimed to contain an explicit foundational choice audit.

## Proof

1.1 Write $M_r=M(x_r)$ and $A_r=A(x_r)$. The terms of $\mathcal A(K,s)$ on the $r$th $U$-tower are $U^n x_r$ with $n\ge\max(0,A_r-s)$, so their Maslov gradings are at most $M_r-2\max(0,A_r-s)$. By [F1], this bound tends to $-\infty$ as $s$ tends to $-\infty$; since the basis is finite, choose $s_0$ so that it is strictly negative for every $r$ when $s\le s_0$. Then $H_*(\mathcal A(K,s))$ has no class of degree zero and $\delta(\mathcal A(K,s))\ne0$. For all $s\ge\max_r A_r$, $\mathcal A(K,s)=C^-(K)$ and its normalized tower gives $\delta=0$. Thus the set defining $\nu^-$ is nonempty and bounded below, and its least element exists. This argument does not prove that the least element is nonnegative. [given, F1, algebra]

2.1 Put $R=\mathbb F_2[U]$, $B=C^-(K)$ and $A_s=\mathcal A(K,s)$. The latter has finite free basis $U^{\max(0,A_r-s)}x_r$. Its actual inclusion $v_s:A_s\to B$ becomes the identity of $C(K)$ after localization. Therefore the kernel of its homology map is $U$-torsion and its image is a nonzero homogeneous ideal $U^{V_s}R$, with $V_s\ge0$. A homogeneous polynomial-torsion class is $U$-torsion: the different powers of $U$ have distinct Maslov degrees, so a polynomial annihilator implies a monomial annihilator for that class. Consequently homogeneous non-torsion classes are exactly the homogeneous classes having nonzero image in the localized tower. Their maximal grading is the top grading of the image ideal, and hence $\delta(A_s)=-2V_s$. [given, F1, algebra]

2.2 Reuse the supplied Maslov-zero Laurent-linear analytic coordinate-swap equivalence $\Phi:C(K)\to C(K)$, preserving the normalized total generator and swapping the two filtrations, with its swap-filtered inverse and homotopies. For $s\in\mathbb Z$, $h_s=\Phi U^s:A_s\to B$ is an actual polynomial-target map: a point with $i\le0,j\le s$ goes to $(j-s,i-s)$, whose first coordinate is at most zero. Its Maslov degree is $-2s$. It localizes to an isomorphism, so its homology image is $U^{H_s}R$, $H_s\ge0$. The same non-torsion-domain calculation gives $-2H_s=\delta(A_s)-2s$, and thus $H_s=V_s+s$. This argument permits negative $s$ in the Laurent intermediate complex and proves that the final target lies in the polynomial subcomplex; it does not treat $U^s$ alone as an endomorphism of $B$ for negative $s$. [F3, step 2.1, construct, algebra]

2.3 If $s<0$, $V_s=H_s-s\ge -s>0$. Therefore $\delta(A_s)\ne0$ for every negative $s$. Together with step1.1 this proves existence of the threshold and $\nu^-(K)\ge0$. A direct local alternative for the upper inequality would require an actual surface input. Sufficient would be an $R$-linear Maslov-zero map from the unknot tower to $B$, with image in $A_g$, sending the homology generator to the normalized generator1. Its image cycle would force $V_g=0$ and $\nu^-(K)\le g$. A map with value a positive $U$-power, a localized nonzero map, or a tau inequality does not suffice. [given, step 1.1, step 2.1, step 2.2, algebra]

2.4 The finite free basis of $A_s$ in step2.1 is exactly the basis in the external Definition2.12, since its exponent condition is $n\ge\max(0,A_r-s)$, and the normalized top minus grading is zero in both conventions. Thus [E1] applies to the SAME threshold, not to a shifted plus invariant. It gives $\nu^-(K)\le g_4^{\mathrm{sm}}(K)$ at the fixed data with [C1]. Combine this with step2.3 to obtain both original inequalities. The upper bound is explicitly external; the local exponent/nonnegativity argument is retained. [given, E1, C1, step 2.1, step 2.3, algebra] ∎
