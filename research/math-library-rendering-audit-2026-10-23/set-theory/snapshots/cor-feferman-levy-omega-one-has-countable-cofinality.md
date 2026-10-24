---
id: cor-feferman-levy-omega-one-has-countable-cofinality
kind: corollary
title: The Feferman–Levy omega one has countable cofinality
status: published
origin: pipeline
deps: [thm-feferman-levy-omega-one-is-ground-aleph-omega, thm-cofinality-basics, thm-hereditarily-symmetric-interpretations-form-a-zf-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, discussion after Theorem 10.6 and Problems 2–3, printed pp. 144, 148", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

In the Feferman–Levy model $N$,

$$\operatorname{cf}(\omega_1)=\omega.$$

## Facts & Assumptions

**Given:** The transitive model $N$ and its ordinal $\omega_1^N$.

[F1] [[thm-feferman-levy-omega-one-is-ground-aleph-omega]] identifies $\omega_1^N$ with $\aleph_omega^V$.

[F2] [[thm-cofinality-basics]] says in ZF that the cofinality of a limit ordinal is an infinite cardinal and is bounded by the size of every exhibited cofinal subset.

[F3] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] gives $V\subseteq N$ for this symmetric construction.

## Proof

**Proof technique:** direct computation from an explicit cofinal sequence.

1.1 The ground sequence $c(n)=\aleph_n^V$ is a set of $V$ and hence, by F3, a set of $N$. Its range is cofinal in $\aleph_\omega^V$ by the definition of the limit aleph. Using F1, $c:\omega\to\omega_1^N$ is therefore cofinal in $N$, so $\operatorname{cf}^N(\omega_1^N)\le\omega$. [F1, F2, F3, construct]

2.1 The ordinal $\omega_1^N$ is an infinite cardinal and therefore a limit ordinal. F2 makes its cofinality an infinite cardinal, hence at least $\omega$. Combined with step 1.1, this gives $\operatorname{cf}^N(\omega_1^N)=\omega$. The witness is the one ground sequence $c$; no sequence of arbitrary choices is used. [F2, step 1.1] ∎
