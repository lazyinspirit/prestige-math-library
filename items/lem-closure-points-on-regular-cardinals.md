---
id: lem-closure-points-on-regular-cardinals
kind: lemma
title: "Closure points form a club"
status: draft
origin: pipeline
deps: ["def-club-subsets-of-ordinals", "thm-cofinality-basics", "thm-recursion"]
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
    - title: "Lietz, Lemma 5.2, Claim 5.3 and Lemma 5.4, pp.39–40"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Statement

Work in ZFC. If $f:\kappa\to\kappa$ and $\kappa$ is regular uncountable, then $C_f=\{\alpha<\kappa:f[\alpha]\subseteq\alpha\}$ is club. The same conclusion holds for a nondecreasing $f:\theta\to\theta$ whenever $\operatorname{cf}(\theta)>\omega$.

## Facts & Assumptions

[F1] [[def-club-subsets-of-ordinals]]: Closure is tested at nonzero limit points below the ambient ordinal.

[F2] [[thm-cofinality-basics]]: A set of fewer than the cofinality many ordinals is bounded below a limit ordinal.

[F3] [[thm-recursion]]: A specified self-map admits omega iteration.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 In the regular case, given $\beta<\kappa$, set $a_0=\beta+1$ and $a_{n+1}=\max(a_n,\sup f[a_n])+1$. Regularity bounds $f[a_n]$ below $\kappa$; recursion defines the increasing sequence, and $a=\sup_na_n<\kappa$ because $\omega<\operatorname{cf}(\kappa)$. For $x<a$ take $n$ with $x<a_n$; then $f(x)<a_{n+1}<a$. Thus $a\in C_f$ and $a>\beta$. [F2, F3]

1.2 In the nondecreasing case use $a_{n+1}=\max(a_n,f(a_n))+1$ instead. Each term stays below the limit $\theta$, and the omega supremum stays below $\theta$. If $x<a_n$, monotonicity gives $f(x)\le f(a_n)<a_{n+1}<a$. Again this proves unboundedness. [F2, F3]

2.1 In either case, if a nonzero limit $\delta$ is a limit point of $C_f$, then for every $x<\delta$ some $\gamma\in C_f\cap\delta$ exceeds $x$. Hence $f(x)<\gamma<\delta$. This proves closure. Zero itself belongs to $C_f$ vacuously, but is not a required closure limit. [F1, step 1.1, step 1.2] ∎
