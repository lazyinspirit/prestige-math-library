---
id: thm-su2-root-unity-ribbon-category-is-modular
kind: theorem
title: "The standard root-of-unity sl2 tilting ribbon quotient is modular"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-temperley-lieb-rank-one-lusztig-tilting-category, thm-temperley-lieb-rank-one-tilting-quotient-fusion-category, thm-temperley-lieb-root-negligible-quotient-is-semisimple, thm-temperley-lieb-rank-one-pivotal-ribbon-conversion, lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series, lem-su2-hopf-link-sine-data-from-truncated-fusion, lem-finite-sine-transform-orthogonality, def-modular-ribbon-category-and-hopf-link-data, lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations, lem-temperley-lieb-rank-one-tilting-character-and-dimension, lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §§1–5"
      url: "https://arxiv.org/pdf/math/0308281"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§3.3–3.4"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $\ell\ge3$, $q=e^{\pi i/\ell}$, and let $\mathcal C_\ell$ be the standard ribbon semisimplification of finite-dimensional integrable type-1 tilting modules for Lusztig's divided-power $U_q(\mathfrak{sl}_2)$, using the positive-trace quantum ribbon convention. Then $\mathcal C_\ell$ is modular, with simples $a=0,\ldots,\ell-2$, dimensions $d_a=\sin((a+1)\pi/\ell)/\sin(\pi/\ell)$, twists $\theta_a=q^{a(a+2)/2}$, and

$$s_{ab}=\frac{\sin((a+1)(b+1)\pi/\ell)}{\sin(\pi/\ell)},\qquad S_{ab}=\sqrt{\frac2\ell}\sin\frac{(a+1)(b+1)\pi}{\ell}.$$

## Facts & Assumptions

**Given:** The standard divided-power tilting quotient at $q=e^{\pi i/\ell}$, $\ell\ge3$, with the positive-trace quantum ribbon convention.

[F1] If the actual quotient has the displayed truncated fusion coefficients, dimensions, and twists, then the balancing and finite-sine argument proves the displayed $s$, $S$, and nondegeneracy ([[lem-su2-hopf-link-sine-data-from-truncated-fusion]]).

[A1] The actual batch 62 category definition fixes $q$, the full weight-lattice extension, divided powers, coproduct, and Weyl-filtration convention, but delegates its ribbon identities to the finite-$R$ helper. The quotient/fusion, root-negligible-quotient, pivotal-conversion, Weyl-filtration, character, and root-path files now contain numbered proofs that assert their stated interfaces. Their current Step 1 records remain escalated, however, with reasons and hashes from earlier carrier versions that describe missing proof arguments; they have not been reconciled with the current bodies. The finite-$R$ helper file also exists and contains a proof, but it has no batch 62 manifest row or Step 1 record, and its [F2] relies on the Weyl-filtration and character carriers whose current Step 1 records remain escalated. I have inspected these bodies but cannot resolve those stale escalations or treat them as approved suppliers. The exact required interfaces are: full ribbon identities for the category; the actual tilting quotient and fusion rule; the Temperley–Lieb root path and trace-radical comparison; and the positive-pivotal/ribbon conversion, including the channel and all-rank centralizer identifications ([[def-temperley-lieb-rank-one-lusztig-tilting-category]], [[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]], [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]], [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]], [[lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]], [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]], [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]], [[thm-temperley-lieb-rank-one-pivotal-ribbon-conversion]]).

## Proof

**Given:** The category and parameters in the Statement.

1.1 The actual category assertion requires the divided-power, quotient, ribbon, and pivotal interfaces recorded in [A1]. The current bodies fix conventions and prove preliminary calculations, but they do not establish semisimplicity, the truncated fusion coefficients, the quotient ribbon structure, or compatibility of the positive-trace quantum pivotal map with the diagram convention. No source theorem is used as a substitute; current supplier readiness remains unresolved in [A1]. [given, A1]

1.2 Once those suppliers provide exactly the hypotheses in [F1], [[lem-su2-hopf-link-sine-data-from-truncated-fusion]] derives the stated sine matrix and [[lem-finite-sine-transform-orthogonality]] proves it invertible. This conditional calculation does not establish the missing quotient interface in [A1], so the unconditional theorem remains escalated. [F1, A1, step 1.1]

## Unresolved proof obligation

The actual modularity of the root-of-unity tilting quotient remains escalated pending reconciliation of the exact current bodies and Step 1 records in [A1]. In particular, the finite-$R$ helper is a draft carrier outside its batch's manifest; its content is recorded, but no assigned placement or readiness record exists. The independent sine-matrix calculation remains proved under its displayed hypotheses.
