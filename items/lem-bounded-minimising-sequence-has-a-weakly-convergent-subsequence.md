---
id: lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence
kind: lemma
title: "A bounded sequence in a reflexive Banach space has a weakly convergent subsequence"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, def-reflexive-banach-space, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-weak-convergence-of-nets-and-sequences]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, first paragraph and Theorem 13.1, printed pp. 296-297"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 2, printed pp. 33-36 (Banach-Alaoglu and reflexivity of W^{1,p})"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the ultrafilter lemma, DC and HB. Let $X$ be a real reflexive Banach space ([[def-reflexive-banach-space]]) and let $(u_j)$ be a norm-bounded sequence in $X$. Then $(u_j)$ has a subsequence converging weakly to a point of $X$ ([[def-weak-convergence-of-nets-and-sequences]]).

## Facts & Assumptions

**Given:** The ultrafilter lemma ([[def-ultrafilter-extension-principle]]), the principle of dependent choice ([[def-dependent-choice]]) and HB ([[def-hahn-banach-extension-principle-relative]]); a real reflexive Banach space $X$ ([[def-reflexive-banach-space]]); and a norm-bounded sequence $(u_j)\subseteq X$.

[F1] Under the ultrafilter lemma, DC and HB, a real Banach space $X$ is reflexive if and only if every norm-bounded sequence in $X$ has a subsequence that converges weakly to a point of $X$ ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]); the convergence is in the sense of [[def-weak-convergence-of-nets-and-sequences]].

## Proof

**Proof technique:** direct, by the forward implication of the reflexivity characterisation.

1.1 The three choice principles named in the hypothesis are exactly the ones assumed by [F1], and $X$ is a real reflexive Banach space by hypothesis; the sequence $(u_j)$ is norm bounded by hypothesis. The forward implication of [F1] therefore applies and produces a strictly increasing sequence of indices $j_1<j_2<\dots$ and a point $u\in X$ with $u_{j_k}\rightharpoonup u$. [F1, given]

2.1 The limit $u$ obtained in step 1.1 is a point of $X$, so $(u_j)$ has a subsequence converging weakly to a point of $X$, which is the stated conclusion. [step 1.1] ∎ 