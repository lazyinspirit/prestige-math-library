---
id: thm-filtered-colimits-commute-with-finite-limits-in-set
kind: theorem
title: "Filtered colimits commute with finite limits in Set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-filtered-category-and-filtered-colimit, lem-equality-in-a-filtered-colimit-of-sets-is-eventual, thm-set-has-all-small-limits, thm-set-has-all-small-colimits, thm-finite-limit-and-colimit-criteria, lem-canonical-comparison-characterises-limit-preservation]
justified_by: []
aliases: []
landmark: true
proof_strategy: representatives
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.8.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

For every small filtered category $\mathcal J$ and finite category
$\mathcal K$, and every $D:\mathcal J\times\mathcal K\to\mathbf{Set}$, the
canonical comparison

$$\operatorname*{colim}_{j}\lim_kD(j,k) \longrightarrow \lim_k\operatorname*{colim}_{j}D(j,k)$$

is a bijection. This includes the empty finite limit.

## Facts & Assumptions

**Given:** The categories and diagram in the statement.

[F1] Filteredness combines finitely many objects at a common later stage and
coequalizes finitely many parallel arrows
([[def-filtered-category-and-filtered-colimit]]).

[L1] Equality of two elements in a filtered Set-colimit occurs at one common
later stage ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[L2] Set-limits are compatible tuples and Set-colimits are tagged quotients
([[thm-set-has-all-small-limits]], [[thm-set-has-all-small-colimits]]).

[L3] Finite limits can be tested using finite products and equalizers
([[thm-finite-limit-and-colimit-criteria]]).

[L4] A canonical comparison is invertible exactly when the limit is preserved
([[lem-canonical-comparison-characterises-limit-preservation]]).

## Proof

**Proof technique:** representatives.

1.1 By [L3], it suffices to prove that a filtered colimit preserves finite products and equalizers. For a finite product, a tuple on the right has finitely many coordinates, each represented at some stage. Repeated use of [F1] moves all representatives to one common stage, producing a tuple there. Thus the comparison is surjective. [F1, L2, L3]

1.2 If two common-stage tuples have the same image, [L1] makes each coordinate equal at some later stage. There are finitely many coordinates, so repeated use of [F1] moves all those equalities to one stage. The tuples then agree, which proves injectivity. [F1, L1, L2]

1.3 For an equalizer, an element on the right is represented by $x$ at some stage and its two images become equal in the filtered colimit. By [L1], after moving $x$ to one later stage its two images are equal there, so it is represented by a stagewise equalizer element. This proves surjectivity. [L1, L2]

1.4 If two stagewise equalizer elements become equal in the ambient filtered colimit, [L1] makes them equal at a common later stage; functoriality keeps them inside the later equalizer. This proves injectivity. [L1, L2]

1.5 For the empty product, each stage and the target are singletons. The filtered category is nonempty by [F1], so the colimit of the constant singleton diagram is a singleton, not empty. [F1, L2]

2.1 Steps 1.1 to 1.5 make every finite-limit comparison bijective. By [L4], filtered colimits preserve finite limits, proving the displayed assertion. [L3, L4, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
