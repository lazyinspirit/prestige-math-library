---
id: prop-ph-containments-and-polynomial-space
kind: proposition
title: "Ph containments and polynomial space"
status: draft
origin: pipeline
deps: [thm-quantifier-and-oracle-characterizations-of-ph, lem-ph-quantifier-block-closure, def-pspace-and-npspace]
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
    - title: "Goldreich, Computational Complexity lecture notes; Propositions9.1.1,9.1.2,9.2.1, pp102–108."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

For every $k\ge0$,
$$\Sigma_k^p\cup\Pi_k^p\subseteq\Delta_{k+1}^p\subseteq\Sigma_{k+1}^p\cap\Pi_{k+1}^p.$$
Moreover $\mathrm{PH}\subseteq\mathrm{PSPACE}$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For every $k\ge0$, $$\Sigma_{k+1}^p=NP^{\Sigma_k^p},\qquad\Pi_{k+1}^p=coNP^{\Sigma_k^p},\qquad\Delta_{k+1}^p=P^{\Sigma_k^p}.$$ For $k\ge1$ a fixed complete bounded-alternation QBF language can replace the class oracle. At $k=1$, this gives the usual satisfiability oracle. The quantifier levels also equal polynomial-time alternating computations with at most $k$ blocks of existential/universal choices, beginning with the indicated polarity. With a fixed base oracle $A$, the same oracle characterization holds using access to both $A$ and a language in $\Sigma_k^{p,A}$. ([[thm-quantifier-and-oracle-characterizations-of-ph]]).

[F2] For each fixed $k\ge0$, both $\Sigma_k^p$ and $\Pi_k^p$ are closed under polynomial-time many-one preimages and polynomially many uniformly indexed conjunctions and disjunctions. Precisely, if the language of pairs $(x,i)$ lies in the class and $0\le i<q(|x|)$ for a polynomial-time computable polynomial bound $q$, then both “every such $i$” and “some such $i$” define languages in that class. Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each is contained in both classes at level $k+1$. These assertions also hold with one fixed base oracle. ([[lem-ph-quantifier-block-closure]]).

[F3] The class **PSPACE** is the union of all deterministic polynomial-space classes: $$\mathrm{PSPACE}:=\bigcup_{p\text{ polynomial}}\mathrm{DSPACE}(p(n)).$$ The class **NPSPACE** is the union of all nondeterministic polynomial-space classes: $$\mathrm{NPSPACE}:=\bigcup_{p\text{ polynomial}}\mathrm{NSPACE}(p(n)).$$ Equivalently, a language $L$ lies in PSPACE when there is a deterministic multitape Turing machine deciding $L$ using at most $O(n^c)$ space for some constant $c$, and similarly $L$ lies in NPSPACE when there is such a nondeterministic decider. The meanings of $\mathrm{DSPACE}(s(n))$ and $\mathrm{NSPACE}(s(n))$ are those of the stated convention. ([[def-pspace-and-npspace]]).


## Proof

1.1 A deterministic machine can decide a language in $\Sigma_k^p$ with one query to itself, and a language in $\Pi_k^p$ with one query to its complement followed by a bit flip. A deterministic oracle decider is both a nondeterministic and a complementary nondeterministic decider. The oracle characterization gives the displayed containments, including $k=0$. [F1, F2]

2.1 For a fixed-level quantified predicate, enumerate assignments depth first. Store at most one assignment and counter per block plus the polynomial workspace of the matrix decider. Existential blocks OR their child values, universal blocks AND them; length-zero blocks have one child. The finite tree terminates even for false or constant predicates. The number of stored bits is polynomial for fixed level, meeting the deterministic PSPACE definition. Take the union over levels. [F3, step 1.1] ∎
