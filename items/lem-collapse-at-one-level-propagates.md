---
id: lem-collapse-at-one-level-propagates
kind: lemma
title: "Collapse at one level propagates"
status: draft
origin: pipeline
deps: [lem-ph-quantifier-block-closure]
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
    - title: "Goldreich, Computational Complexity lecture notes; Proposition9.2.3 and appendix proof, pp108,113–114."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

If $k\ge1$ and $\Sigma_k^p=\Pi_k^p$, then $\Sigma_{k+1}^p=\Pi_{k+1}^p=\Sigma_k^p$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For each fixed $k\ge0$, both $\Sigma_k^p$ and $\Pi_k^p$ are closed under polynomial-time many-one preimages and polynomially many uniformly indexed conjunctions and disjunctions. Precisely, if the language of pairs $(x,i)$ lies in the class and $0\le i<q(|x|)$ for a polynomial-time computable polynomial bound $q$, then both “every such $i$” and “some such $i$” define languages in that class. Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each is contained in both classes at level $k+1$. These assertions also hold with one fixed base oracle. ([[lem-ph-quantifier-block-closure]]).


## Proof

1.1 A language in $\Sigma_{k+1}^p$ has a leading existential block followed by a $\Pi_k^p$ predicate on the pair consisting of the input and that block. By hypothesis this single language of pairs has a uniform $\Sigma_k^p$ definition. Substitute it and merge its first existential block with the leading one. Because $k\ge1$, this gives $k$ blocks with polynomial bounds. No input-dependent selection of machines is made. [given, algebra]

2.1 The reverse containment follows by dummy-block padding. Complement the containment just proved; complements interchange the two polarities, and the assumed level is complement closed. Consequently both classes at level $k+1$ equal $\Sigma_k^p$. Zero-length witness blocks remain nonempty domains. [F1, step 1.1] ∎
