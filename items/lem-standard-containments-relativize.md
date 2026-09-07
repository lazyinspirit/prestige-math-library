---
id: lem-standard-containments-relativize
kind: lemma
title: "Standard containments relativize"
status: draft
origin: pipeline
deps: [def-relativized-complexity-class, thm-quantifier-and-oracle-characterizations-of-ph, prop-ph-containments-and-polynomial-space]
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
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 discussion after Theorem3.9, pp71–72; Goldreich Theorem9.9 proof."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For every fixed total oracle $A$, $P^A\subseteq NP^A$, $NP^A\cup coNP^A\subseteq\mathrm{PSPACE}^A$, and $\mathrm{PH}^A\subseteq\mathrm{PSPACE}^A$. The verifier characterization, bounded-level oracle characterization, and implication $\Sigma_k^{p,A}=\Pi_k^{p,A}\Rightarrow\mathrm{PH}^A=\Sigma_k^{p,A}$ for $k\ge1$ all hold using the same $A$ throughout.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Fix a total language $A\subseteq\{0,1\}^*$. An oracle machine writes a query word and receives its membership bit in $A$ in one answer step. Query writing counts toward time and the query tape toward space. A polynomial time clock bounds every branch for every oracle. $P^A$ and $NP^A$ are deterministic and nondeterministic polynomial-time oracle classes, respectively; the latter equivalently uses a polynomial-length witness and a deterministic polynomial-time $A$-oracle verifier. Use the conventions of the stated convention and the stated convention. For $\Sigma_k^{p,A}$ and $\Pi_k^{p,A}$, replace the deterministic predicate in the stated convention by a $P^A$ predicate; level zero is $P^A$. Define $\mathrm{PSPACE}^A$ by deterministic polynomial space under the charged-query convention. For a language class $\mathcal D$, $P^{\mathcal D}=\bigcup_{B\in\mathcal D}P^B$ and $NP^{\mathcal D}=\bigcup_{B\in\mathcal D}NP^B$. Finally $\Delta_{k+1}^p=P^{\Sigma_k^p}$. With a fixed base oracle, a machine may query both $A$ and a language $B$; encode this by the tagged union $A\oplus B=\{0x:x\in A\}\cup\{1x:x\in B\}$. ([[def-relativized-complexity-class]]).

[F2] For every $k\ge0$, $$\Sigma_{k+1}^p=NP^{\Sigma_k^p},\qquad\Pi_{k+1}^p=coNP^{\Sigma_k^p},\qquad\Delta_{k+1}^p=P^{\Sigma_k^p}.$$ For $k\ge1$ a fixed complete bounded-alternation QBF language can replace the class oracle. At $k=1$, this gives the usual satisfiability oracle. The quantifier levels also equal polynomial-time alternating computations with at most $k$ blocks of existential/universal choices, beginning with the indicated polarity. With a fixed base oracle $A$, the same oracle characterization holds using access to both $A$ and a language in $\Sigma_k^{p,A}$. ([[thm-quantifier-and-oracle-characterizations-of-ph]]).

[F3] For every $k\ge0$, $$\Sigma_k^p\cup\Pi_k^p\subseteq\Delta_{k+1}^p\subseteq\Sigma_{k+1}^p\cap\Pi_{k+1}^p.$$ Moreover $\mathrm{PH}\subseteq\mathrm{PSPACE}$. ([[prop-ph-containments-and-polynomial-space]]).


## Proof

1.1 A polynomially clocked branch is encoded by polynomially many bits; a deterministic $A$-verifier replays it with the original oracle queries. Conversely a nondeterministic machine guesses the verifier witness and executes that verifier. A deterministic machine is a special case. All query writing is charged. [F1]

1.2 The relative oracle characterization is supplied with access to that same base oracle. For space containment, use the depth-first assignment evaluation from the unrelativized containment proof; each matrix predicate makes only polynomial-length $A$ queries and uses polynomial space including the query tape. Query buffers are reused. This treats both starting polarities and hence NP and coNP as well. [F2, F3]

2.1 For collapse, substitute a uniform $\Sigma_k^{p,A}$ definition for the inner $\Pi_k^{p,A}$ language of pairs and merge existential blocks. The final predicate still lies in $P^A$; no new oracle is introduced. Complementation flips its answer and preserves $A$. Iterate this argument over the finite levels, then take their union. Zero-length blocks and immediately halting computations are preserved in each simulation. [step 1.1, step 1.2, algebra] ∎
