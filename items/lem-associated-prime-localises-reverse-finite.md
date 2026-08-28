---
id: lem-associated-prime-localises-reverse-finite
kind: lemma
title: "Associated primes of a localized finite module come from upstairs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-prime-of-a-module, def-annihilator-and-torsion-of-a-module, thm-noetherian-ring-ideal-characterisations, thm-prime-spectrum-of-a-localisation-bijection]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.63.15(2) and Lemma 10.63.16"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let $S \subseteq R$ be multiplicative. If
$$
\mathfrak q \in \operatorname{Ass}_{S^{-1}R}(S^{-1}M),
$$
then there exists $\mathfrak p \in \operatorname{Ass}_R(M)$ with
$\mathfrak p \cap S=\varnothing$ and $\mathfrak q=S^{-1}\mathfrak p$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, a multiplicative subset $S \subseteq R$, and a prime ideal $\mathfrak q \in \operatorname{Ass}_{S^{-1}R}(S^{-1}M)$.

[L1] A prime ideal is associated to a module exactly when it is the annihilator of some element ([[def-associated-prime-of-a-module]]).

[L2] The annihilator of an element is the set of scalars that kill it ([[def-annihilator-and-torsion-of-a-module]]).

[L3] In a Noetherian commutative ring, every ideal is finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[L4] Prime ideals of $S^{-1}R$ correspond exactly to primes of $R$ disjoint from $S$, via $\mathfrak p \mapsto S^{-1}\mathfrak p$ ([[thm-prime-spectrum-of-a-localisation-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $u \in S^{-1}M$ with $u \neq 0$ and $\operatorname{Ann}_{S^{-1}R}(u)=\mathfrak q$. Write $u=m/s$ with $m \in M$ and $s \in S$. Since $1/s$ is a unit of $S^{-1}R$, the element $m/1=(s/1)u$ is also nonzero and has the same annihilator $\mathfrak q$. By [L4], there is a prime ideal $\mathfrak p \subseteq R$ with $\mathfrak p \cap S=\varnothing$ and $\mathfrak q=S^{-1}\mathfrak p$. If $am=0$, then $a/1$ annihilates $m/1$, so $a/1 \in \mathfrak q$ and therefore $a \in \mathfrak p$. Thus $\operatorname{Ann}_R(m)\subseteq \mathfrak p$. [L1, L2, L4, choose, algebra]

2.1 By [L3], write $\mathfrak p=(f_1,\dots,f_n)$. Since each $f_i/1 \in \mathfrak q=\operatorname{Ann}_{S^{-1}R}(m/1)$, there exists $s_i \in S$ with $s_if_im=0$ in $M$. Put $h=s_1\cdots s_n$. Then $hm \neq 0$, because $h/1$ is a unit and $(h/1)(m/1)=hm/1$. Also each generator $f_i$ kills $hm$, so $\mathfrak p \subseteq \operatorname{Ann}_R(hm)$. [L2, L3, step 1.1, choose, algebra]

3.1 If $a \in \operatorname{Ann}_R(hm)$, then $a/1$ annihilates $hm/1$. Since $h/1$ is a unit, $a/1$ also annihilates $m/1$, so $a/1 \in \mathfrak q$ and therefore $a \in \mathfrak p$ by step 1.1. Hence $\operatorname{Ann}_R(hm)\subseteq \mathfrak p$, and step 2.1 gives $\operatorname{Ann}_R(hm)=\mathfrak p$. [L4, step 1.1, step 2.1, algebra]

4.1 The prime ideal $\mathfrak p$ is therefore the annihilator of the nonzero element $hm \in M$, so $\mathfrak p \in \operatorname{Ass}_R(M)$ by [L1]. Together with step 1.1, this proves the claim. [L1, step 1.1, step 3.1] ∎
