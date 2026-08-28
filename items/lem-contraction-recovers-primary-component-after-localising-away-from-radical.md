---
id: lem-contraction-recovers-primary-component-after-localising-away-from-radical
kind: lemma
title: "A primary component is recovered by contracting its localization away from the radical"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primary-submodule-characterisations, thm-localisation-of-modules-commutes-with-quotients-and-sums]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (18.23)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 19.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, let $Q \subsetneq M$ be a $\mathfrak p$-primary submodule, and let
the radical $\mathfrak p$ be prime. Let $S \subseteq R$ be multiplicative with
$S \cap \mathfrak p=\varnothing$. Then
$$
Q=\{m \in M : m/1 \in S^{-1}Q\}.
$$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, a $\mathfrak p$-primary submodule $Q \subsetneq M$ for a prime ideal $\mathfrak p$, and a multiplicative subset $S \subseteq R$ disjoint from $\mathfrak p$.

[L1] For the quotient $N=M/Q$, every $a \notin \mathfrak p$ acts injectively on $N$ ([[thm-primary-submodule-characterisations]]).

[L2] Localisation commutes with quotient modules, so
$S^{-1}(M/Q)\cong (S^{-1}M)/(S^{-1}Q)$ ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

## Proof

**Proof technique:** direct.

1.1 The inclusion $$ Q\subseteq \{m \in M : m/1 \in S^{-1}Q\} $$ is immediate, because every element of $Q$ localizes into $S^{-1}Q$. [given]

1.2 Conversely, let $m \in M$ with $m/1 \in S^{-1}Q$. Under the identification of [L2], the class of $m+Q$ in $S^{-1}(M/Q)$ is zero. Hence some $s \in S$ satisfies $s(m+Q)=0$ in $M/Q$, so $sm \in Q$. Since $s \notin \mathfrak p$, [L1] makes multiplication by $s$ injective on $M/Q$, and the equality $s(m+Q)=0$ forces $m+Q=0$. Therefore $m \in Q$. [L1, L2, choose, algebra]

2.1 Steps 1.1 and 1.2 prove that $Q$ is exactly the contraction of $S^{-1}Q$. [step 1.1, step 1.2] ∎
