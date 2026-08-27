---
id: cor-radical-ideal-has-finitely-many-minimal-primes-noetherian
kind: corollary
title: "A radical ideal in a Noetherian ring is a finite intersection of minimal primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-induction, lem-noetherian-minimal-primes-induction-split, lem-radical-of-a-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.31: Noetherian rings"
      url: "https://stacks.math.columbia.edu/tag/00FM"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring and let $I\trianglelefteq R$ be a radical ideal. Then there exist prime ideals $\mathfrak p_1,\dots,\mathfrak p_m$ minimal over $I$ such that $I=\mathfrak p_1\cap\cdots\cap\mathfrak p_m$; when $I=R$, this means $m=0$ and the empty intersection is $R$. In particular, $I$ has only finitely many minimal prime ideals.

The proof uses Noetherian induction and inherits the dependent-choice cost already recorded there; it introduces no further choice principle.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a radical ideal $I\trianglelefteq R$.

[L1] Noetherian induction holds for ideals of a Noetherian ring ([[thm-noetherian-induction]]).

[L2] If a proper radical ideal is not prime, then every prime minimal over it is minimal over one of two strictly larger ideals $I+(x)$ or $I+(y)$ obtained from a factorization $xy\in I$ with $x,y\notin I$ ([[lem-noetherian-minimal-primes-induction-split]]).

[L3] Radicals of products satisfy $\sqrt{JK}=\sqrt{J}\cap\sqrt{K}$ ([[lem-radical-of-a-product]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ be the collection of radical ideals $J\trianglelefteq R$ for which there exist finitely many prime ideals minimal over $J$ whose intersection equals $J$. By [L1], it is enough to fix a radical ideal $I$ and assume that every radical ideal strictly containing $I$ lies in $\mathcal P$. [L1, given]

1.2 If $I=R$, then no prime ideal contains $I$, and the empty intersection is $R$. So $I\in\mathcal P$ in this boundary case. [given, algebra]

1.3 If $I$ is prime, then $I$ itself is the unique prime minimal over $I$, so $I\in\mathcal P$. [given]

1.4 Assume now that $I$ is neither $R$ nor prime. Then $I$ is a proper radical ideal, so [L2] applies: choose $x,y\notin I$ with $xy\in I$, and set $J=\sqrt{I+(x)}$ and $K=\sqrt{I+(y)}$. Because $I$ is radical and $x,y\notin I$, both $J$ and $K$ strictly contain $I$. Hence the induction hypothesis places both $J$ and $K$ in $\mathcal P$, and [L2] also says that every prime minimal over $I$ is minimal over $I+(x)$ or over $I+(y)$. [L2, choose, algebra]

2.1 Choose finite families of prime ideals minimal over $J$ and $K$ with $J=\mathfrak p_1\cap\cdots\cap\mathfrak p_r$ and $K=\mathfrak q_1\cap\cdots\cap\mathfrak q_s$. The product $(I+(x))(I+(y))$ is contained in $I$: expanding $(a+rx)(b+sy)$ gives terms in $I$ because $a,b\in I$ and $xy\in I$. Therefore $J\cap K=\sqrt{(I+(x))(I+(y))}\subseteq I$ by [L3]. The reverse inclusion $I\subseteq J\cap K$ is immediate, so $I=\mathfrak p_1\cap\cdots\cap\mathfrak p_r\cap\mathfrak q_1\cap\cdots\cap\mathfrak q_s$. [L3, step 1.4, choose, algebra]

3.1 By step 1.4, every prime minimal over $I$ belongs to the finite family $\mathcal F=\{\mathfrak p_1,\dots,\mathfrak p_r,\mathfrak q_1,\dots,\mathfrak q_s\}$. Let $\mathcal M\subseteq\mathcal F$ be the subfamily of inclusion-minimal members. Every element of $\mathcal M$ is a prime ideal minimal over $I$, and every prime in $\mathcal F$ contains some member of $\mathcal M$ because $\mathcal F$ is finite. Removing a prime ideal that contains another one does not change an intersection, so the intersection over $\mathcal M$ is still $I$. Thus $I\in\mathcal P$. [step 1.4, step 2.1, algebra]

4.1 Steps 1.2, 1.3, and 3.1 establish the induction step promised in step 1.1. Therefore every radical ideal of $R$ is an intersection of finitely many prime ideals minimal over it, and in particular has only finitely many minimal prime ideals. [step 1.1, step 1.2, step 1.3, step 3.1] ∎
