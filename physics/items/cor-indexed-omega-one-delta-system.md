---
id: cor-indexed-omega-one-delta-system
kind: corollary
title: "The indexed delta-system lemma"
status: published
origin: pipeline
deps: [thm-regular-uncountable-finite-delta-system, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, def-finite-delta-system, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78; indexed repetition argument supplied locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, for any family $(a_\xi)_{\xi<\omega_1}$ of finite sets, there are an uncountable $J\subseteq\omega_1$ and a finite set $r$ such that $a_\xi\cap a_\eta=r$ whenever $\xi,\eta\in J$ are distinct. The sets $a_\xi$ may repeat.

## Facts & Assumptions

**Given:** The indexed family above; assume AC, including countable choice.

[F1] The finite delta-system theorem applies to a family of $\kappa$ distinct finite sets at regular uncountable $\kappa$. [[thm-regular-uncountable-finite-delta-system]]

[F2] Under countable choice a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

[F3] Under countable choice no countable subset of $\omega_1$ is cofinal in it. [[thm-countable-subsets-of-omega-one-are-bounded]]

[F4] The indexed delta condition allows repeated values. [[def-finite-delta-system]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 If some finite set $a$ has uncountable fiber $J=\{\xi:a_\xi=a\}$, put $r=a$. For distinct $\xi,\eta\in J$ one has $a_\xi\cap a_\eta=a\cap a=a$. This includes the case $a=\varnothing$. [given, F4]

2.1 Otherwise every fiber is countable. Let $\mathcal A=\{a_\xi:\xi<\omega_1\}$. If $\mathcal A$ were countable, enumerate its values and apply F2 to their countable fibers; their union is all of $\omega_1$, which is uncountable. Hence $\mathcal A$ is uncountable. The map $a\mapsto m(a)=\min\{\xi:a_\xi=a\}$ injects $\mathcal A$ into $\omega_1$, so $|\mathcal A|=\aleph_1$. AC supplies the countable choice used in F2; the least-index map itself needs no choices. [F2, A1, step 1.1]

3.1 Every ordinal below $\omega_1$ is countable; F3 therefore excludes every cofinal subset of cardinality below $\aleph_1$. Thus $\aleph_1$ is regular, and F1 gives an uncountable delta subsystem $\mathcal B\subseteq\mathcal A$ with finite root $r$. Set $J=\{m(a):a\in\mathcal B\}$. The map $m$ is injective, so $J$ is uncountable, and distinct indices in $J$ represent distinct members of $\mathcal B$, whose intersection is $r$. Together with the repeated-value alternative this proves the indexed assertion. [F1, F3, F4, A1, step 1.1, step 2.1] ∎
