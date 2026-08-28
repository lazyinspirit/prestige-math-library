---
id: thm-minimal-support-primes-are-associated
kind: theorem
title: "Minimal support primes of a finite module are associated"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-prime-filtration-of-a-finite-module, thm-support-in-a-short-exact-sequence, lem-support-of-a-cyclic-module-is-its-vanishing-set]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (17.18)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Proposition 10.63.6"
      url: "https://stacks.math.columbia.edu/tag/02CE"
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated
left $R$-module. If $\mathfrak p$ is minimal in $\operatorname{Supp}_R(M)$, then
$$
\mathfrak p \in \operatorname{Ass}_R(M).
$$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, and a prime ideal $\mathfrak p$ minimal in $\operatorname{Supp}_R(M)$.

[L1] The module $M$ admits a prime filtration
$0=M_0\subset M_1\subset\cdots\subset M_n=M$ with $M_i/M_{i-1}\cong R/\mathfrak p_i$ for prime ideals $\mathfrak p_i$ ([[thm-prime-filtration-of-a-finite-module]]).

[L2] Support in a short exact sequence is the union of the supports of the outer terms ([[thm-support-in-a-short-exact-sequence]]).

[L3] The support of $R/I$ is exactly $V(I)$ ([[lem-support-of-a-cyclic-module-is-its-vanishing-set]]).

## Proof

**Proof technique:** direct.

1.1 Choose a prime filtration as in [L1]. Repeatedly applying [L2] to the short exact sequences $$ 0 \longrightarrow M_{i-1} \longrightarrow M_i \longrightarrow M_i/M_{i-1} \longrightarrow 0 $$ and then using [L3] for $M_i/M_{i-1}\cong R/\mathfrak p_i$ gives $$ \operatorname{Supp}_R(M)=V(\mathfrak p_1)\cup\cdots\cup V(\mathfrak p_n). $$ [L1, L2, L3, algebra]

2.1 By step 1.1, the prime $\mathfrak p$ contains some $\mathfrak p_i$. Since $\mathfrak p_i \in V(\mathfrak p_i)\subseteq \operatorname{Supp}_R(M)$, the minimality of $\mathfrak p$ in the support forces $\mathfrak p_i=\mathfrak p$. Choose the smallest such index $i$, and choose $m \in M_i$ whose image in $M_i/M_{i-1}\cong R/\mathfrak p$ is nonzero. Then $\operatorname{Ann}_R(m)\subseteq \mathfrak p$, because any scalar killing $m$ kills its nonzero class in $R/\mathfrak p$. Also $\mathfrak p_jM_j\subseteq M_{j-1}$ for every $j$, so $(\mathfrak p_1\cdots\mathfrak p_i)m=0$. [L1, step 1.1, choose, algebra]

3.1 For each $j<i$, the minimal choice of $i$ gives $\mathfrak p_j\neq\mathfrak p$ and hence $\mathfrak p_j\nsubseteq \mathfrak p$. Choose $a_j \in \mathfrak p_j\setminus \mathfrak p$, and put $f=a_1\cdots a_{i-1}$. Because $\mathfrak p$ is prime and no factor $a_j$ lies in $\mathfrak p$, one has $f \notin \mathfrak p$. Since $\operatorname{Ann}_R(m)\subseteq \mathfrak p$, this implies $fm \neq 0$. Moreover $\mathfrak p fm=0$ because $\mathfrak p=\mathfrak p_i$ and $(\mathfrak p_1\cdots\mathfrak p_i)m=0$. If $bfm=0$, then $bf \in \operatorname{Ann}_R(m)\subseteq \mathfrak p$; as $f \notin \mathfrak p$ and $\mathfrak p$ is prime, this forces $b \in \mathfrak p$. Therefore $\operatorname{Ann}_R(fm)=\mathfrak p$, so $\mathfrak p \in \operatorname{Ass}_R(M)$. [step 2.1, choose, algebra]

4.1 Thus every support-prime minimal by inclusion is associated. [step 3.1] ∎
