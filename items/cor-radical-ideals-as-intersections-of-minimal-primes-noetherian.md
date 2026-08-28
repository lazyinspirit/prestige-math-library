---
id: cor-radical-ideals-as-intersections-of-minimal-primes-noetherian
kind: corollary
title: "A radical ideal in a Noetherian ring is the intersection of its minimal primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dependent-choice, thm-lasker-noether-primary-decomposition, thm-radical-of-a-primary-ideal-is-prime, lem-radical-of-an-intersection]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 19.8"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Assume Dependent Choice.

Let $R$ be a Noetherian commutative ring and let $I \trianglelefteq R$ be a
radical ideal. Then there exist finitely many prime ideals
$\mathfrak p_1,\dots,\mathfrak p_m$ minimal over $I$ such that
$$
I=\mathfrak p_1\cap\cdots\cap \mathfrak p_m.
$$
When $I=R$, this is the empty intersection.

## Facts & Assumptions

**Given:** Dependent Choice, a Noetherian commutative ring $R$, and a radical ideal $I \trianglelefteq R$.

[L1] Assuming Dependent Choice, every ideal of a Noetherian ring has a minimal primary decomposition ([[thm-lasker-noether-primary-decomposition]]).

[L2] The radical of a primary ideal is prime ([[thm-radical-of-a-primary-ideal-is-prime]]).

[L3] The radical of an intersection of $n\ge1$ ideals is the intersection of their radicals ([[lem-radical-of-an-intersection]]).

## Proof

**Proof technique:** direct.

1.1 If $I=R$, then no prime ideal contains $I$, and the empty intersection is $R$. This is exactly the stated boundary case. [given]

1.2 Assume $I \ne R$. By [L1], choose a minimal primary decomposition $$ I=Q_1\cap\cdots\cap Q_r. $$ Since the empty intersection is $R$, one has $r\ge1$. For each $i$, put $\mathfrak p_i=\sqrt{Q_i}$. Fact [L2] makes every $\mathfrak p_i$ prime. Since $I$ is radical, $$ I=\sqrt{I}=\sqrt{Q_1\cap\cdots\cap Q_r}=\sqrt{Q_1}\cap\cdots\cap\sqrt{Q_r} =\mathfrak p_1\cap\cdots\cap\mathfrak p_r $$ by [L3]. [L1, L2, L3, choose, algebra]

2.1 Let $\mathcal M$ be the set of inclusion-minimal members among the finite family $\{\mathfrak p_1,\dots,\mathfrak p_r\}$. If one prime in the family contains another, removing the larger one does not change the intersection, so the intersection over $\mathcal M$ is still $I$. Every prime $\mathfrak q$ minimal over $I$ contains the product $\mathfrak p_1\cdots\mathfrak p_r$, which is contained in $I$, so primality of $\mathfrak q$ forces $\mathfrak p_i \subseteq \mathfrak q$ for some $i$. Since $I \subseteq \mathfrak p_i$ and $\mathfrak q$ is minimal among primes containing $I$, this gives $\mathfrak q=\mathfrak p_i$. Thus the members of $\mathcal M$ are exactly the minimal prime ideals over $I$. [step 1.2, algebra]

3.1 Steps 1.1, 1.2, and 2.1 prove that a radical ideal is the finite intersection of its minimal primes. [step 1.1, step 1.2, step 2.1] ∎
