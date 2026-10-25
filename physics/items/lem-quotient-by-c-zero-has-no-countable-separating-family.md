---
id: lem-quotient-by-c-zero-has-no-countable-separating-family
kind: lemma
title: The quotient ell-infinity/c_0 has no countable separating family
status: published
origin: pipeline
deps: [lem-c-zero-is-a-closed-subspace-of-ell-infinity, lem-uncountable-almost-disjoint-family-on-natural-numbers, def-quotient-seminorm, thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed, def-dual-space-of-a-normed-space, thm-countable-union-of-countable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, proof of Theorem 10.19
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Statement

Assume $\mathrm{AC}_\omega$. The dual of $\ell^\infty/c_0$ has no countable
family that separates its points.

## Facts & Assumptions

**Given:** $Q=\ell^\infty/c_0$ and an uncountable almost-disjoint family $\mathcal A$ of infinite subsets of $\mathbb N$.

[F1] $c_0$ is closed in $\ell^\infty$, so the quotient seminorm on $Q$ is a norm ([[lem-c-zero-is-a-closed-subspace-of-ell-infinity]], [[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

[F2] There is an uncountable almost-disjoint family of infinite subsets of $\mathbb N$ ([[lem-uncountable-almost-disjoint-family-on-natural-numbers]]).

[F3] Assuming $\mathrm{AC}_\omega$, a countable union of countable sets is countable ([[thm-countable-union-of-countable]]).

## Proof

**Proof technique:** direct.

1.1 For $A\in\mathcal A$, let $u_A$ be its indicator sequence. Then $[u_A]\ne0$ in $Q$, and for distinct $A_1,\ldots,A_m$ the quotient norm of $\sum c_j[u_{A_j}]$ is $\max_j|c_j|$, since the supports are disjoint after deleting finitely many coordinates. [F1, F2, given]

2.1 For $g\in Q^*$ and $r>0$, the set $\{A:|g([u_A])|\ge r\}$ is finite: choose scalar phases on any finite subfamily and apply $|g(\sum c_j[u_{A_j}])|\le\|g\|$. Thus $\{A:g([u_A])\ne0\}$ is countable as a union over positive reciprocal integers. [step 1.1, F1, algebra]

3.1 Given a countable family $(g_n)$ in $Q^*$, [F3] makes $\bigcup_n\{A:g_n([u_A])\ne0\}$ countable. By [F2] choose $A$ outside it; then nonzero $[u_A]$ is annihilated by every $g_n$. [step 2.1, F2, F3, choose] ∎
