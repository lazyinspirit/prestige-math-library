---
id: lem-lifting-residue-frobenius-by-galois-conjugates
title: "Lifting residue frobenius by galois conjugates"
kind: lemma
status: published
origin: pipeline
deps: [def-inertia-group-of-a-prime, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-multiplicative-group-of-a-finite-field-is-cyclic, thm-decomposition-group-and-completion]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Frobenius element, footnote 1 on p.141; Stein Theorem 9.3.5"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

Let L/K be finite Galois and $P\mid p$ nonzero primes. Put $q=|\kappa(p)|$. Some $\sigma\in D(P/p)$ induces the arithmetic power map $x\mapsto x^q$ on $\kappa(P)$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-inertia-group-of-a-prime]]: For finite Galois L/K and a chosen nonzero prime $P\mid p$, set $\kappa(P)=\mathcal O_L/P$ and $\kappa(p)=\mathcal O_K/p$. Each $\sigma\in D(P/p)$ induces a $\kappa(p)$-automorphism $\bar\sigma$ of $\kappa(P)$: the rule $\bar a\mapsto\overline{\sigma a}$ is independent of the representative because $\sigma P=P$. The **inertia group** is $I(P/p)=\ker\!\left(D(P/p)\longrightarrow\operatorname{Gal}(\kappa(P)/\kappa(p))\right).$ Equivalently, $\sigma\in I(P/p)$ exactly when $\sigma\in D(P/p)$ and $\sigma(a)-a\in P$ for every $a\in\mathcal O_L$. It is a normal subgroup of D.

[F2] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: Let $R$ be a commutative ring and let $I_1,\ldots,I_r$ be pairwise comaximal ideals, where $r\ge1$. Then the canonical map $ R\longrightarrow \prod_{i=1}^r R/I_i,\qquad x\longmapsto(x+I_1,\ldots,x+I_r) $ is surjective, its kernel is $\bigcap_{i=1}^r I_i$, and $ \bigcap_{i=1}^r I_i=\prod_{i=1}^r I_i. $ Equivalently, $ R/\prod_{i=1}^r I_i\cong\prod_{i=1}^r R/I_i. $

[F3] [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]: The multiplicative group $F^\times=F\setminus\{0\}$ of every finite field $F$ is cyclic.

## Proof

1.1 Choose a generator u of the finite cyclic group $\kappa(P)^\times$. CRT gives $\alpha\in\mathcal O_L$ reducing to u at P and to zero at every other prime above p. This also works when $\kappa(P)=\mathbb F_2$, with u=1, or when P is the only prime. [F2, F3]

2.1 The orbit polynomial $H(T)=\prod_{\tau\in G}(T-\tau\alpha)$ has integral G-invariant coefficients, hence belongs to $\mathcal O_K[T]$. Its reduction has coefficients in $\kappa(p)$, so $H(u^q)=H(u)^q=0$ in $\kappa(P)$. Its displayed linear factorization implies $u^q=\overline{\sigma\alpha}$ for some $\sigma\in G$. [step 1.1]

3.1 If $\sigma^{-1}P\ne P$, alpha is zero at $\sigma^{-1}P$, giving $\overline{\sigma\alpha}=0$, contrary to $u^q\ne0$. Thus $\sigma\in D$. On every nonzero residue $u^j$ it acts by $(u^q)^j=(u^j)^q$; it fixes zero as well. This is the asserted residue action. [F1, step 1.1, step 2.1] ∎
