---
id: cor-ph-complete-language-forces-collapse
kind: corollary
title: "Ph complete language forces collapse"
status: draft
origin: pipeline
deps: [lem-ph-quantifier-block-closure, thm-sigma-k-equals-pi-k-implies-ph-collapse, thm-tqbf-is-pspace-complete]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §5.2.2 Claim5.7 and Remark5.8, p93."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

If a language $C\in\mathrm{PH}$ is polynomial-time many-one hard for all of PH, then PH collapses to a finite level. In particular, $\mathrm{PH}=\mathrm{PSPACE}$ implies such a collapse.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For each fixed $k\ge0$, both $\Sigma_k^p$ and $\Pi_k^p$ are closed under polynomial-time many-one preimages and polynomially many uniformly indexed conjunctions and disjunctions. Precisely, if the language of pairs $(x,i)$ lies in the class and $0\le i<q(|x|)$ for a polynomial-time computable polynomial bound $q$, then both “every such $i$” and “some such $i$” define languages in that class. Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each is contained in both classes at level $k+1$. These assertions also hold with one fixed base oracle. ([[lem-ph-quantifier-block-closure]]).

[F2] For fixed $k\ge1$, $\Sigma_k^p=\Pi_k^p$ implies $\mathrm{PH}=\Sigma_k^p=\Pi_k^p$. Also $P=NP$ implies $\mathrm{PH}=P$. ([[thm-sigma-k-equals-pi-k-implies-ph-collapse]]).

[F3] TQBF lies in PSPACE, and every language in PSPACE polynomial-time many-one reduces to TQBF. Therefore TQBF is PSPACE-complete. ([[thm-tqbf-is-pspace-complete]]).


## Proof

1.1 Choose a fixed $k\ge1$ with $C\in\Sigma_k^p$, padding upward if necessary. Every $L\in\Pi_k^p$ belongs to PH by padding and reduces to $C$, hence lies in $\Sigma_k^p$ by preimage closure. Complementing gives the reverse inclusion, so the finite-level collapse theorem applies. [F1, F2]

2.1 Under $\mathrm{PH}=\mathrm{PSPACE}$, TQBF belongs to PH and every PH language reduces to it, by its exact PSPACE-completeness statement. It therefore serves as $C$ in the first step. No strict containment between PH and PSPACE is assumed. [F3, step 1.1] ∎
