---
id: cor-feferman-model-refutes-bpi
kind: corollary
title: The tail-flip symmetric model refutes BPI
status: published
origin: pipeline
deps: [cor-feferman-model-has-no-free-ultrafilter-on-omega, def-boolean-prime-ideal-principle, thm-bpi-equivalent-to-set-ultrafilter-lemma, def-ultrafilter]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, Theorem 4.12 and stated BPI consequence, printed pp. 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

The Boolean Prime Ideal Theorem and the equivalent set Ultrafilter Lemma fail
in $\mathsf F_{\mathrm{tf}}$.

## Facts & Assumptions

**Given:** The transitive ZF model $\mathsf F_{\mathrm{tf}}$.

[F1] [[cor-feferman-model-has-no-free-ultrafilter-on-omega]] proves that every ultrafilter on $\omega$ in the model is principal.

[F2] [[def-boolean-prime-ideal-principle]] states BPI and the set Ultrafilter Lemma as principles over ZF.

[F3] [[thm-bpi-equivalent-to-set-ultrafilter-lemma]] proves in ZF that BPI is equivalent to extension of every proper set filter to an ultrafilter.

[F4] [[def-ultrafilter]] fixes the principal/free distinction.

## Proof

**Proof technique:** contradiction using the concrete cofinite filter.

1.1 Let $\mathcal C=\{A\subseteq\omega:\omega\setminus A\text{ is finite}\}$. It contains $\omega$, excludes $\varnothing$ because $\omega$ is infinite, is upward closed, and is closed under finite intersections because the complement of an intersection is the finite union of the complements. Hence $\mathcal C$ is a proper set filter in the model. [F2, construct]

2.1 Suppose BPI holds. By F3, the set Ultrafilter Lemma extends $\mathcal C$ to an ultrafilter $U$ on $\omega$. For every $k<\omega$, the cofinite set $\omega\setminus\{k\}$ belongs to $U$. But the principal ultrafilter at $k$ omits that set, so $U$ is not principal at any point and is free by F4. This contradicts F1. [F1, F3, F4, step 1.1, assume-contra]

3.1 Therefore BPI fails. Since F3 proves both directions of the equivalence, the set Ultrafilter Lemma fails as well. The empty-set UFL instance is vacuous, while the explicit nonempty witness is the cofinite filter on $\omega$ from step 1.1. [F2, F3, step 1.1, step 2.1, discharge-contradiction] ∎
