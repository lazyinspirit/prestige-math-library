---
id: thm-composition-series-iff-noetherian-and-artinian
kind: theorem
title: "A module has a composition series if and only if it is Noetherian and Artinian, the converse using dependent choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-equivalent-characterizations-of-noetherian-modules, thm-equivalent-characterizations-of-artinian-modules, thm-chain-conditions-in-short-exact-sequences, def-dependent-choice, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

A module with a composition series is both Noetherian and Artinian. Conversely, assuming dependent choice, a module that is both Noetherian and Artinian has a composition series. The zero module has the empty composition series. See [[def-composition-series-and-length-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement. Dependent choice ([[def-dependent-choice]]) is assumed only for the converse and is available under the Axiom of Choice ([[def-axiom-of-choice]]).

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] For a left $R$-module $M$, write (1) every submodule is finitely generated, (2) ACC, and (3) every nonempty set of submodules has a maximal member. The implications $1\Rightarrow2$ and $3\Rightarrow1$ are choice-free; $2\Rightarrow3$ assumes DC, under which the three conditions are equivalent. ([[thm-equivalent-characterizations-of-noetherian-modules]]).

[L3] For a left $R$-module $M$, DCC is equivalent to the condition that every nonempty family of submodules has a minimal member. The implication from DCC to the minimal condition uses dependent choice. ([[thm-equivalent-characterizations-of-artinian-modules]]).

[L4] In a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”. ([[thm-chain-conditions-in-short-exact-sequences]]).

## Proof

**Proof technique:** direct.

1.1 Let $0=M_0<\cdots<M_n=M$ be a composition series [L1] and induct on $i$ that $M_i$ is Noetherian and Artinian. The zero module $M_0$ satisfies both conditions vacuously. A simple factor has only the submodules $0$ and itself; any one nonzero element generates it, since its cyclic submodule is nonzero. Thus all its submodules are finitely generated and all descending chains stabilize. Applying [L4] to $0\to M_{i-1}\to M_i\to M_i/M_{i-1}\to0$ carries both conditions to $M_i$. At $i=n$ this gives the forward implication, without any choice principle. [L1, L4, given, algebra]

1.2 Conversely, assume dependent choice and let $M$ be Noetherian and Artinian. Every submodule of $M$ is Noetherian by [L4], so a nonzero submodule $N$ has a maximal proper submodule by the nonempty maximal condition of [L2], using DC. Define a relation on the submodules of $M$ by taking a maximal proper submodule at each nonzero term and letting zero be its own successor. This relation is serial. DC, available from the assumed AC, supplies a sequence starting at $M$; it strictly decreases until it reaches zero and is then constant. These are the precise choice uses in the converse. [L2, L4, given, choose]

2.1 The chain of step 1.2 is strictly descending while its terms are nonzero, so the descending chain condition forces some $N_r=0$. Since $N_{k+1}$ is maximal proper in $N_k$, the quotient $N_k/N_{k+1}$ is nonzero and has no proper nonzero submodule, hence is simple. Reversing the chain gives $0=N_r<\cdots<N_0=M$, a composition series. For $M=0$ the empty chain is already the required series, so no choice is consumed in that case. This proves the stated claim. [L1, L3, step 1.2, given, algebra] ∎
