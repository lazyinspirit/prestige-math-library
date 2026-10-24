---
id: cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo
kind: corollary
title: "A bounded map into $H^1_0$ yields a compact $L^2$ operator"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [thm-rellich-compactness-from-w-one-p-zero-to-lp, def-compactly-embedded-normed-spaces, def-compact-linear-operator, def-bounded-linear-operator, def-hk-and-hk-zero-notation, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations, complete 242-page 2014 notes"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 1.5 and 3.10, printed pp. 6-7 and 73-74; locally derived consequences are identified in the strategies."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$ be a bounded open
set and $T:L^2(\Omega)\to H^1_0(\Omega)$ a bounded linear operator. Then
$\iota T:L^2(\Omega)\to L^2(\Omega)$ is compact, where
$\iota:H^1_0(\Omega)\hookrightarrow L^2(\Omega)$ is the inclusion. No boundary
regularity of $\Omega$ is needed.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded open set $\Omega\subseteq\mathbb R^n$,
and a bounded linear operator $T:L^2(\Omega)\to H^1_0(\Omega)$, with
$\iota:H^1_0(\Omega)\to L^2(\Omega)$ the inclusion.

[F1] *Zero-boundary Rellich theorem.* $W^{1,2}_0(\Omega)=H^1_0(\Omega)$ is
compactly embedded in $L^2(\Omega)$: every sequence bounded in
$H^1_0(\Omega)$ has a subsequence converging in $L^2(\Omega)$.
([[thm-rellich-compactness-from-w-one-p-zero-to-lp]],
[[def-compactly-embedded-normed-spaces]], [[def-hk-and-hk-zero-notation]])

[F2] *Bounded operators map bounded sequences to bounded sequences.* If
$(f_j)$ satisfies $\|f_j\|_{L^2}\le M$, then
$\|Tf_j\|_{H^1_0}\le\|T\|M$ for the operator norm of
[[def-bounded-linear-operator]]. ([[def-bounded-linear-operator]])

[F3] *Compactness is the sequential extraction criterion.* A bounded operator
$S$ is compact exactly when the image of every bounded sequence has a
convergent subsequence.
([[def-compact-linear-operator]],
[[def-compactly-embedded-normed-spaces]])

## Proof

**Proof technique:** direct.

1.1 Let $(f_j)$ be bounded in $L^2(\Omega)$ with $\|f_j\|_{L^2}\le M$. By [F2], $(Tf_j)$ is bounded in $H^1_0(\Omega)$, so [F1] supplies a subsequence with $Tf_{j_k}\to g$ in $L^2(\Omega)$, that is, $\iota Tf_{j_k}\to g$. [F1, F2, given]

2.1 Since every bounded sequence in $L^2(\Omega)$ has an image under $\iota T$ with a convergent subsequence, [F3] makes $\iota T$ a compact operator. The inclusion $\iota$ is bounded because $\|u\|_{L^2}\le\|u\|_{H^1_0}$, and the Axiom of Choice is inherited through the Rellich theorem [F1]. [F1, F3, step 1.1] ∎ 