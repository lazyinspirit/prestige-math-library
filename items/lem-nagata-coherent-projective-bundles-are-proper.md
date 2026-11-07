---
id: lem-nagata-coherent-projective-bundles-are-proper
kind: lemma
title: Coherent projective bundles over Noetherian schemes are proper
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - lem-nagata-finite-affine-blowup-chart-gluing
  - def-relative-projective-space-standard-charts
  - def-proper-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
proof_strategy: direct
axiom_use: No choice principle is assumed. Projective space is the closed zero-section fiber of an explicitly charted blowup, whose properness has already been proved locally without a projective-properness import.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Section1 proper/projective blowup discussion internal p.5 and Corollary2.6 proof p.21, read in full. The zero-section fiber proof below reuses the already reconstructed properness theorem.
---

## Statement

For every Noetherian scheme $S$ and finite integer $n\geq0$, the standard projective-space projection $\mathbb P^n_S\to S$ is proper. If $\mathcal E$ is coherent on $S$, its coherent projective bundle $\mathbb P_S(\mathcal E)\to S$, constructed by the finite symmetric-algebra charts, is proper as well. Hence every closed subscheme of such a bundle is proper over $S$. Zero sheaves and empty schemes are included, with $\mathbb P_S(0)=\varnothing$. No choice hypothesis is assumed.

## Statement references

[[lem-nagata-admissible-blowup-universal-property-and-properness]]

## Facts & Assumptions

**Given:** The Noetherian base, finite projective dimension or coherent module sheaf, and, for the final assertion, the closed subscheme.

[F1] A coherent-ideal blowup on a Noetherian scheme is proper; it has the finite fraction charts $A[J/a]$ with their canonical overlaps. Its properness proof is already local and does not assume a general projective-properness theorem. [[lem-nagata-admissible-blowup-universal-property-and-properness]] [[lem-nagata-finite-affine-blowup-chart-gluing]]

[F2] Standard projective spaces have the polynomial ratio charts; coherent projective bundles use the symmetric-algebra quotient charts. Polynomial finite-type algebras over Noetherian rings are Noetherian. [[def-relative-projective-space-standard-charts]] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F3] Properness means finite type, separated and universally closed. These properties persist under base change and composition with a closed immersion and can be checked on a base open cover, by the corresponding diagonal, finite affine and closed-set image tests. [[def-proper-morphism]]

## Proof

1.1 Let $Z=\mathbb A^{n+1}_S$ and blow up the coherent zero-section ideal $J=(x_0,\ldots,x_n)$. The scheme $Z$ is Noetherian by [F2], so the blowup $B\to Z$ is proper by [F1]. Over an affine $\operatorname{Spec}A\subseteq S$, its $x_i$-chart is $A[x_0,\ldots,x_n][J/x_i]=A[x_i,t_j:j\ne i]$, with $x_j=x_it_j$. This equality is an actual ring isomorphism: the indicated polynomial ring injects into its localization at $x_i$, identified with $A[x_i,x_i^{-1},x_j:j\ne i]$, and its image is exactly the fraction chart. Its zero-section fiber is therefore $A[t_j:j\ne i]$. On overlaps these fibers glue by the usual invertible ratios $t_j=x_j/x_i$, precisely the standard charts of $\mathbb P^n_A$. The identifications commute with base localization and give $B\times_ZS\cong\mathbb P^n_S$. By [F3] this base change of the proper blowup is proper over $S$. [F1, F2, F3, given, construct, algebra]

2.1 On an affine open of $S$, a finite module presentation of $\mathcal E$ gives a graded surjection $A[T_1,\ldots,T_r]\to\operatorname{Sym}_A E$. Taking degree-zero chart localizations gives surjective coordinate maps, so the coherent projective bundle there is a closed subscheme of $\mathbb P^{r-1}_A$. If $E=0$, it is empty; one may also use the zero generator presentation to describe that empty closed subscheme of $\mathbb P^0_A$. By step 1.1 and [F3], its projection is proper. These affine base opens cover $S$, and the coherent bundle's local charts agree on base intersections by their quotient-line interpretation, so properness is global by [F3]. This uses a global coherent-bundle embedding only where it is given; the local tests are used solely for properness. [F2, F3, step 1.1, construct, algebra]

3.1 A closed subscheme of the bundle is finite type and separated over it and is universally closed; these statements are the quotient-ring and closed-set tests for a closed immersion. Composing with the proper projection in step 2.1 remains proper by [F3]. When $n=0$, the zero-section fiber calculation is the identity $\mathbb P^0_S=S$. Zero coherent sheaves and empty bases or closed subschemes yield empty proper schemes. Thus every stated case is included without a new projective-properness premise. [F3, step 1.1, step 2.1, algebra] ∎
