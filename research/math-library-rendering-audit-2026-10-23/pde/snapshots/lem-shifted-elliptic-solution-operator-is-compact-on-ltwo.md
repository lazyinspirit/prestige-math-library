---
id: lem-shifted-elliptic-solution-operator-is-compact-on-ltwo
kind: lemma
title: "The shifted solution operator is compact on $L^2$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha, def-axiom-of-choice, def-compact-linear-operator, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-shifted-elliptic-solution-operator, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-compositions-with-a-compact-operator-are-compact, thm-rellich-compactness-from-w-one-p-zero-to-lp]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.8, Theorem 4.23 and its compactness proof, printed p. 106 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, compactness of the embedding and Theorem 10.5, printed p. 227 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, compactness of $T$ in the proof of Theorem 9.31, printed p. 311 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, inherited through the compact-embedding supplier named below, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and **bounded**, and let $K_\mu$ be the shifted solution operator of [[def-shifted-elliptic-solution-operator]] for a fixed $\mu\ge\beta$. Then $K_\mu$, regarded as an operator on $L^2(\Omega)$, is compact: $\|K_\mu f\|_{H^1_0}\le\alpha^{-1}\|f\|_{L^2}$ ([[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]]) and $H^1_0(\Omega)\hookrightarrow L^2(\Omega)$ is compact ([[thm-rellich-compactness-from-w-one-p-zero-to-lp]] at $p=2$), so $K_\mu$ maps bounded subsets of $L^2(\Omega)$ to relatively compact subsets of $L^2(\Omega)$. No regularity of $\partial\Omega$ is assumed.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; a fixed $\mu\ge\beta$; the shifted solution operator $K_\mu:L^2(\Omega)\to H^1_0(\Omega)$ with coercivity constant $\alpha=\theta/2$.

[F1] $K_\mu$ is well defined and linear, and for every $f\in L^2(\Omega)$ one has $\|K_\mu f\|_{H^1_0}\le\alpha^{-1}\|f\|_{L^2}$ ([[def-shifted-elliptic-solution-operator]], [[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]]).

[F2] $H^1_0(\Omega)=W^{1,2}_0(\Omega)$, and for bounded open $\Omega$ the inclusion $W^{1,2}_0(\Omega)\hookrightarrow L^2(\Omega)$ is compact: every sequence bounded in $H^1_0(\Omega)$ has a subsequence converging in $L^2(\Omega)$ ([[thm-rellich-compactness-from-w-one-p-zero-to-lp]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Compositions: if $T:X\to Y$ is compact and $B:Z\to X$ is bounded linear, then $T\circ B:Z\to Y$ is compact ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-compact-linear-operator]]).

## Proof

**Proof technique:** direct.

1.1 The map $K_\mu:L^2(\Omega)\to H^1_0(\Omega)$ is linear and bounded with operator bound $\|K_\mu\|\le\alpha^{-1}$ by [F1], so it maps bounded subsets of $L^2(\Omega)$ to bounded subsets of $H^1_0(\Omega)$. [F1, given]

1.2 The inclusion $\iota:H^1_0(\Omega)\to L^2(\Omega)$ is compact by [F2], because $\Omega$ is bounded and open and $p=2$ is admissible. [F2, given]

2.1 The $L^2$ realization of $K_\mu$ is the composite $\iota\circ K_\mu$. By step 1.1 the first factor is bounded linear and by step 1.2 the second is compact, so [F3] makes the composite compact; hence bounded subsets of $L^2(\Omega)$ are mapped into relatively compact subsets of $L^2(\Omega)$. No boundary regularity was used, and the Axiom of Choice is inherited through the Rellich supplier [F2]. [F3, step 1.1, step 1.2, given] ∎ 
