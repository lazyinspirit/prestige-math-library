---
id: cor-induced-and-intrinsic-adic-filtrations-are-equivalent
kind: corollary
title: "The filtration induced on a submodule is equivalent to its intrinsic ideal-adic filtration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-artin-rees-lemma]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Lemma (20.18)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "Stacks Project, Section 10.96"
      url: "https://stacks.math.columbia.edu/tag/0BNE"
---

## Statement

Let $R$ be Noetherian, let $I\subset R$ be an ideal, let $M$ be a finite
$R$-module, and let $N\subseteq M$ be a submodule. Then there exists $c\ge0$
such that for every $n\ge c$,
$$
I^nN\subseteq I^nM\cap N\subseteq I^{n-c}N.
$$
Equivalently, the filtration induced from the $I$-adic filtration of $M$ and the
intrinsic $I$-adic filtration of $N$ agree up to a bounded shift.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I\subset R$, a finite
$R$-module $M$, and a submodule $N\subseteq M$.

[L1] Artin-Rees gives $c\ge0$ with
$$
I^nM\cap N = I^{n-c}(I^cM\cap N)
$$
for all $n\ge c$ ([[thm-artin-rees-lemma]]).

## Proof

**Proof technique:** direct.


1.1 For every $n$, one always has $I^nN\subseteq I^nM\cap N$, since $N\subseteq M$. [given]


1.2 Choose $c$ as in [L1]. Then for $n\ge c$, $ I^nM\cap N=I^{n-c}(I^cM\cap N)\subseteq I^{n-c}N $ because $I^cM\cap N\subseteq N$. [L1, algebra]


2.1 Combining the preceding steps gives the two-sided eventual inclusion, hence the two filtrations are equivalent. [algebra] ∎
