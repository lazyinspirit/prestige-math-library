---
id: lem-polynomial-space-oracle-absorption
kind: lemma
title: "Polynomial space oracle absorption"
status: published
origin: pipeline
deps: [def-relativized-complexity-class, def-pspace-and-npspace, thm-tqbf-is-pspace-complete]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 Claim3.8(3), pp70–71, adapted from EXP-complete to the established PSPACE-complete TQBF oracle."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

$NP^{TQBF}\subseteq\mathrm{PSPACE}\subseteq P^{TQBF}$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Fix a total language $A\subseteq\{0,1\}^*$. An oracle machine writes a query word and receives its membership bit in $A$ in one answer step. Query writing counts toward time and the query tape toward space. A polynomial time clock bounds every branch for every oracle. $P^A$ and $NP^A$ are deterministic and nondeterministic polynomial-time oracle classes, respectively; the latter equivalently uses a polynomial-length witness and a deterministic polynomial-time $A$-oracle verifier. Use the conventions of the stated convention and the stated convention. For $\Sigma_k^{p,A}$ and $\Pi_k^{p,A}$, replace the deterministic predicate in the stated convention by a $P^A$ predicate; level zero is $P^A$. Define $\mathrm{PSPACE}^A$ by deterministic polynomial space under the charged-query convention. For a language class $\mathcal D$, $P^{\mathcal D}=\bigcup_{B\in\mathcal D}P^B$ and $NP^{\mathcal D}=\bigcup_{B\in\mathcal D}NP^B$. Finally $\Delta_{k+1}^p=P^{\Sigma_k^p}$. With a fixed base oracle, a machine may query both $A$ and a language $B$; encode this by the tagged union $A\oplus B=\{0x:x\in A\}\cup\{1x:x\in B\}$. ([[def-relativized-complexity-class]]).

[F2] The class **PSPACE** is the union of all deterministic polynomial-space classes: $$\mathrm{PSPACE}:=\bigcup_{p\text{ polynomial}}\mathrm{DSPACE}(p(n)).$$ The class **NPSPACE** is the union of all nondeterministic polynomial-space classes: $$\mathrm{NPSPACE}:=\bigcup_{p\text{ polynomial}}\mathrm{NSPACE}(p(n)).$$ Equivalently, a language $L$ lies in PSPACE when there is a deterministic multitape Turing machine deciding $L$ using at most $O(n^c)$ space for some constant $c$, and similarly $L$ lies in NPSPACE when there is such a nondeterministic decider. The meanings of $\mathrm{DSPACE}(s(n))$ and $\mathrm{NSPACE}(s(n))$ are those of the stated convention. ([[def-pspace-and-npspace]]).

[F3] TQBF lies in PSPACE, and every language in PSPACE polynomial-time many-one reduces to TQBF. Therefore TQBF is PSPACE-complete. ([[thm-tqbf-is-pspace-complete]]).


## Proof

1.1 For a nondeterministic oracle machine with clock $p(n)$, enumerate all branch-choice strings of the bounded length and replay each branch. Each TQBF query has length at most $p(n)$ under the charged-query convention. Decide it by the polynomial-space algorithm supplied by TQBF membership in PSPACE, then reuse that workspace. A branch counter, a machine configuration and the query workspace all have polynomial size; accepting when one replay accepts yields a deterministic polynomial-space decider. Zero-query branches use the same procedure. [F1, F3, F2]

2.1 For any PSPACE language, its polynomial-time many-one reduction to TQBF computes one polynomial-length query. Accept exactly when the oracle answers YES. This is a deterministic polynomial-time oracle decider on every input, proving the other containment. [F3] ∎
