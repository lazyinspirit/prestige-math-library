---
id: thm-quantifier-and-oracle-characterizations-of-ph
kind: theorem
title: "Quantifier and oracle characterizations of ph"
status: published
origin: pipeline
deps: [lem-ph-adaptive-oracle-transcript-normal-form, thm-bounded-alternation-qbf-is-level-complete, prop-np-and-conp-are-the-first-levels]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, Computational Complexity lecture notes; Lecture9 Theorem9.9, pp105–107; AB §5.3 Claim5.11 and §5.5 Theorem5.15."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

For every $k\ge0$,
$$\Sigma_{k+1}^p=NP^{\Sigma_k^p},\qquad\Pi_{k+1}^p=coNP^{\Sigma_k^p},\qquad\Delta_{k+1}^p=P^{\Sigma_k^p}.$$
For $k\ge1$ a fixed complete bounded-alternation QBF language can replace the class oracle. At $k=1$, this gives the usual satisfiability oracle. The quantifier levels also equal polynomial-time alternating computations with at most $k$ blocks of existential/universal choices, beginning with the indicated polarity. With a fixed base oracle $A$, the same oracle characterization holds using access to both $A$ and a language in $\Sigma_k^{p,A}$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For fixed $k\ge1$ and $B\in\Sigma_k^p$, every nondeterministic polynomial-time $B$-oracle computation has a $\Sigma_{k+1}^p$ definition. More generally, for a fixed total base oracle $A$ and $B\in\Sigma_k^{p,A}$, polynomial nondeterministic access to both $A$ and $B$ has a $\Sigma_{k+1}^{p,A}$ definition. ([[lem-ph-adaptive-oracle-transcript-normal-form]]).

[F2] For every fixed $k\ge1$, truth of prenex Boolean formulas with $k$ alternating blocks beginning existentially is $\Sigma_k^p$-complete under polynomial-time many-one reductions. The universally starting version is $\Pi_k^p$-complete. The matrix is a general Boolean formula, empty blocks are allowed, and malformed encodings are rejected. ([[thm-bounded-alternation-qbf-is-level-complete]]).

[F3] $\Sigma_1^p=NP$ and $\Pi_1^p=coNP$. ([[prop-np-and-conp-are-the-first-levels]]).


## Proof

1.1 For $k\ge1$, transcript normal form gives $NP^{\Sigma_k^p}\subseteq\Sigma_{k+1}^p$. Conversely, guess the first block of a $\Sigma_{k+1}^p$ predicate. The remaining language of pairs is in $\Pi_k^p$; query its complementary $\Sigma_k^p$ language and flip the answer. The two procedures give both inclusions. For $k=0$, polynomial-time oracle calls can be simulated directly in polynomial time, and the first-level verifier identity gives the result. [F1, F3]

2.1 Every language at positive level reduces to the fixed complete QBF language; replace each adaptive query by its reduction. Query lengths and query counts remain polynomial. Negating the oracle machine's acceptance convention gives the complementary nondeterministic class; the displayed Delta equality is its definition. The first-level complete QBF language is simply formula satisfiability with its assignment block made explicit. [F2, step 1.1]

2.2 For an alternating machine, replace each existential or universal choice block by a polynomial-length string of its branch choices, ignoring unused bits. Deterministic steps between changes of polarity are simulated by the final predicate. Conversely, realize each quantified string by successive binary choices of the required polarity and then evaluate the predicate. Acceptance at an existential node means some child accepts, and at a universal node every child accepts; recursive evaluation of the finite tree proves the equivalence. Halted branches can be padded with ignored choices. [step 1.1, algebra]

3.1 The first inclusion and the guess-and-complement-query construction work identically with a fixed base $A$, using the relative part of transcript normal form. Both the outer machine and its predicate retain access to that same $A$; this is the claimed relative oracle characterization. It does not assert unrelativized formula completeness for arbitrary $A$. [F1, step 1.1] ∎
