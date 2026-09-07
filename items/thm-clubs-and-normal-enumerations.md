---
id: thm-clubs-and-normal-enumerations
kind: theorem
title: "Clubs are ranges of normal enumerations"
status: draft
origin: pipeline
deps: ["def-normal-ordinal-function", "thm-cofinality-basics"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vasey, Lemma 14.4, p.80"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
    - title: "Welch, Lemma 2.12 and Exercise 2.5, p.20"
      url: https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf
---

## Statement

In ZFC, any unbounded $C\subseteq\kappa$, with $\kappa$ regular uncountable, has a unique increasing enumeration $e:\kappa\to C$. The set $C$ is closed iff this enumeration is normal. Consequently the range of a strictly increasing $f:\kappa\to\kappa$ is club iff $f$ is normal.

## Facts & Assumptions

[F1] [[def-normal-ordinal-function]]: Normality is strict increase and continuity at nonzero limits.

[F2] [[thm-cofinality-basics]]: A cofinal subset of regular kappa has size kappa.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The inherited ordinal order enumerates $C$ by an ordinal $\eta\le\kappa$, successively taking the least unused point. Unboundedness and regularity force $\eta\ge\kappa$, hence $\eta=\kappa$. The least-unused rule also proves uniqueness. [F2]

2.1 If $C$ is closed and $0<\lambda<\kappa$ is limit, $\delta=\sup_{\xi<\lambda}e(\xi)<\kappa$ is a limit point of $C$, hence lies in $C$. Strict increase and least-unused enumeration force $e(\lambda)=\delta$. Thus $e$ is normal. [F1, F2, step 1.1]

3.1 Conversely, if $e$ is normal and $\delta<\kappa$ is a nonzero limit point of $C$, the indices of the points in $C\cap\delta$ form an initial segment $\lambda<\kappa$ with no last element. (They cannot be all kappa since C is unbounded.) Continuity gives $e(\lambda)=\delta$, so $C$ is closed. Finally, a strictly increasing map on kappa has unbounded range: a bounded range cannot contain kappa distinct ordinals. It is the increasing enumeration of its range, giving the last equivalence. [F1, F2, step 1.1] ∎
