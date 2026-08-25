---
id: thm-cohen-noetherian-criterion
kind: theorem
title: "Cohen's criterion: a commutative ring in which every prime ideal is finitely generated is Noetherian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-ring-ideal-characterisations, lem-maximal-non-finitely-generated-ideal, lem-maximal-non-finitely-generated-ideal-is-prime, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring in which every prime ideal
([[def-prime-and-maximal-ideals]]) is finitely generated. Then $R$ is
Noetherian.

The proof uses Zorn's lemma through
[[lem-maximal-non-finitely-generated-ideal]], and therefore the axiom of choice.
It does not use, and could not use, a maximal condition on the ideals of $R$:
that condition is part of what is being proved.

## Facts & Assumptions

**Given:** A commutative ring $R$ in which every prime ideal is finitely generated.

[L1] A proper ideal $P\subsetneq R$ of a commutative ring is **prime** when $ab\in P$ implies $a\in P$ or $b\in P$ ([[def-prime-and-maximal-ideals]]).

[L2] If at least one ideal of a commutative ring is not finitely generated, then the set $\Sigma$ of its non-finitely-generated ideals, ordered by inclusion, has a maximal element; the proof uses Zorn's lemma ([[lem-maximal-non-finitely-generated-ideal]]).

[L3] An ideal maximal in $\Sigma$ is prime ([[lem-maximal-non-finitely-generated-ideal-is-prime]]).

[L4] For a commutative ring, being Noetherian is equivalent to every ideal being finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $R$ is not Noetherian. By the ideal-level characterisation, some ideal of $R$ is then not finitely generated, so the set $\Sigma$ of non-finitely-generated ideals of $R$ is nonempty. [assume-contra, L4, given]

2.1 Since $\Sigma$ is nonempty, it has a maximal element $\mathfrak p$: an ideal that is not finitely generated and that no non-finitely-generated ideal strictly contains. This is where Zorn's lemma is used; no chain condition on $R$ is available, and none is invoked. [L2, step 1.1]

3.1 That maximal element is a prime ideal of $R$. [L3, step 2.1]

4.1 By hypothesis every prime ideal of $R$ is finitely generated, so $\mathfrak p$ is finitely generated, contradicting $\mathfrak p\in\Sigma$. The supposition of step 1.1 fails: every ideal of $R$ is finitely generated, and $R$ is Noetherian. [L1, L4, step 1.1, step 3.1, discharge-contradiction] ∎

## Remarks

- **The hypothesis is about primes only, and that is the whole point.** Checking finite generation of every ideal is the definition; checking it on primes is a strictly smaller task, and Cohen's criterion says the smaller task suffices.

- **The maximal element does not come from Noetherian induction.** [[thm-noetherian-induction]] and the maximal condition of [[thm-noetherian-ring-ideal-characterisations]] both presuppose the conclusion here. The element is produced by Zorn's lemma applied to a poset of ideals in a ring assumed **not** to satisfy any chain condition.

- **A prime ideal of the ring, not a maximal one.** [[lem-maximal-non-finitely-generated-ideal-is-prime]] produces primeness, not maximality among proper ideals, and the hypothesis is applied to primes accordingly.
