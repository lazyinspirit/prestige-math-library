---
id: lem-frechet-filter-extends-to-nonprincipal-ultrafilter
kind: lemma
title: "The Fréchet filter extends to a nonprincipal ultrafilter under the ultrafilter extension principle"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
aliases: []
deps: [def-ultrafilter-extension-principle, ex-frechet-filter, def-ultrafilter, def-filter]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Neil Strickland, Notes on Ultrafilters"
      url: "https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf"
      locator: "Theorem 0.0.9, printed p. 2: every family with the finite intersection property extends to an ultrafilter."
---

## Statement

Assume the ultrafilter extension principle. The Fréchet filter on the natural numbers is contained in a nonprincipal ultrafilter on the natural numbers.

## Statement references

[[def-ultrafilter-extension-principle]]

[[ex-frechet-filter]]

[[def-ultrafilter]]

[Strickland, Notes on Ultrafilters, Theorem 0.0.9](https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf)

## Facts & Assumptions

**Given:** The ultrafilter extension principle and the Fréchet filter on \(\mathbb N\).

[A1] Every filter on a set is contained in an ultrafilter ([[def-ultrafilter-extension-principle]]).

[F1] The Fréchet filter \(\mathcal F_{\mathrm{Fr}}\) on \(\mathbb N\) is a proper filter and contains \(\mathbb N\setminus\{n\}\) for every \(n\in\mathbb N\) ([[ex-frechet-filter]]).

[F2] A filter omits the empty set ([[def-filter]]).

[F3] A filter is closed under pairwise intersections ([[def-filter]]).

[F4] By definition, an ultrafilter is a filter maximal under inclusion ([[def-ultrafilter]]).

[F5] If an ultrafilter \(\mathcal U\) is principal at \(n\), then \(\{n\}\in\mathcal U\) ([[def-ultrafilter]]).

## Proof

1.1 Apply [A1] to the proper filter in [F1]. This gives an ultrafilter \(\mathcal U\) on \(\mathbb N\) with \(\mathcal F_{\mathrm{Fr}}\subseteq\mathcal U\). [given, A1, F1, construct]

1.2 For every \(n\in\mathbb N\), [F1] gives \(\mathbb N\setminus\{n\}\in\mathcal U\). By [F4], \(\mathcal U\) is a filter. If it were principal at \(n\), [F5] would also give \(\{n\}\in\mathcal U\); by [F3], their empty intersection would then belong to \(\mathcal U\), contradicting [F2]. Hence \(\mathcal U\) is nonprincipal. [F1, F2, F3, F4, F5, step 1.1, contradiction] ∎
