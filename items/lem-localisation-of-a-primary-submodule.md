---
id: lem-localisation-of-a-primary-submodule
kind: lemma
title: "Localisation of a primary submodule either stays primary or becomes the whole module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-associated-primes-localise, thm-primary-submodule-characterisations, thm-localisation-of-modules-commutes-with-quotients-and-sums, thm-noetherian-ring-quotients-and-localisations]
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

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, let $Q \subsetneq M$ be a $\mathfrak p$-primary submodule for a
prime ideal $\mathfrak p$, and let $S \subseteq R$ be multiplicative.

1. If $S \cap \mathfrak p=\varnothing$, then $S^{-1}Q$ is an
   $S^{-1}\mathfrak p$-primary submodule of $S^{-1}M$.
2. If $S \cap \mathfrak p\neq\varnothing$, then $S^{-1}Q=S^{-1}M$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, a prime ideal $\mathfrak p$, a $\mathfrak p$-primary submodule $Q \subsetneq M$, and a multiplicative subset $S \subseteq R$.

[L1] Assuming the Axiom of Choice, for a Noetherian commutative ring $A$, a finitely generated left $A$-module $P$, a proper submodule $Q' \subsetneq P$, and a prime ideal $\mathfrak r \subseteq A$, the following are equivalent: $Q'$ is $\mathfrak r$-primary; $\operatorname{Ass}_A(P/Q')=\{\mathfrak r\}$; every $a \notin \mathfrak r$ acts injectively on $P/Q'$, and some power of $\mathfrak r$ annihilates $P/Q'$ ([[thm-primary-submodule-characterisations]]).

[L2] Over a Noetherian commutative ring, associated primes of a finitely generated module localize exactly by extension of primes disjoint from the denominator set ([[thm-associated-primes-localise]]).

[L3] Localisation commutes with quotient modules, so $S^{-1}(M/Q)\cong (S^{-1}M)/(S^{-1}Q)$ ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[L4] Every localization of a Noetherian ring is Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

## Proof

**Proof technique:** direct.

1.1 Put $N=M/Q$. Since $Q$ is $\mathfrak p$-primary, [L1] gives $n \ge 1$ with $\mathfrak p^nN=0$. If $S \cap \mathfrak p\neq\varnothing$, choose $s \in S \cap \mathfrak p$. Then $s^nN=0$, so in the localization $S^{-1}N$ the unit $s/1$ annihilates every element. Hence $S^{-1}N=0$, and [L3] shows $(S^{-1}M)/(S^{-1}Q)=0$, that is, $S^{-1}Q=S^{-1}M$. [L1, L3, choose, algebra]

1.2 Assume now that $S \cap \mathfrak p=\varnothing$. Since $Q$ is $\mathfrak p$-primary, the quotient $N$ has $\operatorname{Ass}_R(N)=\{\mathfrak p\}$ by [L1]. Fact [L2] therefore gives $$ \operatorname{Ass}_{S^{-1}R}(S^{-1}N)=\{S^{-1}\mathfrak p\}. $$ Also $\mathfrak p^nN=0$ from [L1], so $(S^{-1}\mathfrak p)^nS^{-1}N=0$. [L1, L2, algebra]

2.1 Let $u=a/s \in S^{-1}R$ with $u \notin S^{-1}\mathfrak p$. Then $a \notin \mathfrak p$, so multiplication by $a$ on $N$ is injective by [L1]. Because $s/1$ is a unit, multiplication by $u=(a/1)(s/1)^{-1}$ on $S^{-1}N$ is also injective. The module $S^{-1}M$ is finitely generated over the Noetherian ring $S^{-1}R$: if $m_1,\dots,m_t$ generate $M$, then $m_1/1,\dots,m_t/1$ generate $S^{-1}M$. Hence [L1], applied over $S^{-1}R$, shows via [L3] that $S^{-1}Q$ is $S^{-1}\mathfrak p$-primary in $S^{-1}M$. [L1, L3, L4, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 prove the two localization alternatives. [step 1.1, step 2.1] ∎
