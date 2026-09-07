---
id: prop-elementary-high-low-identities
kind: proposition
title: "Elementary high low identities"
status: draft
origin: pipeline
deps: [def-lowness-and-highness, prop-np-and-conp-are-the-first-levels, lem-ph-adaptive-oracle-transcript-normal-form]
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
    - title: "Richard Chang, On the Structure of Bounded Queries to Arbitrary NP Sets; §3 properties6–8 and preceding nesting statement, pp3–4."
      url: "https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf"
---

## Statement

For the NP high/low classes, $\mathrm{Low}_0=P$, $\mathrm{Low}_1=NP\cap coNP$, and $\mathrm{High}_0$ consists exactly of NP languages polynomial-time Turing complete for NP. Both $\mathrm{Low}_k\subseteq\mathrm{Low}_{k+1}$ and $\mathrm{High}_k\subseteq\mathrm{High}_{k+1}$ hold for every $k\ge0$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For a language $A\in NP$ and an integer $k\ge0$, define $$\mathrm{Low}_k=\{A\in NP:\Sigma_k^{p,A}=\Sigma_k^p\},\qquad \mathrm{High}_k=\{A\in NP:\Sigma_k^{p,A}=\Sigma_k^{p,SAT}\}.$$ The relativized levels and $\Sigma_0^{p,A}=P^A$ use the stated convention; SAT denotes satisfiability of general Boolean formulas, the first-level complete language supplied in the stated convention. At $k=0$ the highness benchmark is $P^{SAT}$; no identification of that class with $NP$ is assumed. At positive levels the oracle characterization identifies $\Sigma_k^{p,SAT}$ with $\Sigma_{k+1}^p$. More generally, lowness for a specified oracle machine class $\mathcal C$ means $\mathcal C^A=\mathcal C$. Highness here concerns polynomial-time oracle access, not many-one completeness or computability-theoretic jumps. ([[def-lowness-and-highness]]).

[F2] $\Sigma_1^p=NP$ and $\Pi_1^p=coNP$. ([[prop-np-and-conp-are-the-first-levels]]).

[F3] For fixed $k\ge1$ and $B\in\Sigma_k^p$, every nondeterministic polynomial-time $B$-oracle computation has a $\Sigma_{k+1}^p$ definition. More generally, for a fixed total base oracle $A$ and $B\in\Sigma_k^{p,A}$, polynomial nondeterministic access to both $A$ and $B$ has a $\Sigma_{k+1}^{p,A}$ definition. ([[lem-ph-adaptive-oracle-transcript-normal-form]]).


## Proof

1.1 If $P^A=P$, one query decides $A$, so $A\in P$. Conversely a P decider for $A$ replaces each of polynomially many polynomial-length queries, giving $P^A=P$. This proves the level-zero low identity under the restriction $A\in NP$. [F1]

1.2 If $NP^A=NP$, deterministic queries decide both $A$ and its complement in $NP^A$, so $A\in NP\cap coNP$. Conversely assume both have NP verifiers. Guess an accepting branch and its adaptive query transcript, and an appropriate NP witness for every YES or NO answer. Deterministic replay and verification accepts exactly the real accepting transcripts; the total certificate length is polynomial. Therefore $NP^A\subseteq NP$, while ignoring the oracle gives the reverse containment. The first-level identity identifies this with lowness at level one. [F2, F3]

1.3 Every $A\in NP$ has a polynomial-time many-one reduction to SAT, so $P^A\subseteq P^{SAT}$. Equality implies $SAT\in P^A$, which implies every NP language belongs to $P^A$ by composing its SAT reduction. Conversely that Turing completeness gives $SAT\in P^A$ and allows every SAT query to be simulated using $A$, proving $P^{SAT}\subseteq P^A$. These reductions use the first-level complete language in the highness convention. [F1]

2.1 For $k\ge1$, the relative oracle characterization gives $\Sigma_{k+1}^{p,A}=NP^{\Sigma_k^{p,A}}$: the base oracle may be absorbed into the inner language by a tagged union, since $A\in P^A\subseteq\Sigma_k^{p,A}$ and that class is closed under tagged unions. For $k=0$ the same identity holds as $NP^{P^A}=NP^A$, by replacing each $P^A$ subroutine with its deterministic oracle simulation. Thus equality of the inner classes, either with the unrelativized class or with the SAT-relativized class, propagates one level. This proves both nestings, including the zero-to-one transition. Empty transcripts and constant oracles are included by these simulations. [F1, F3, step 1.2] ∎
