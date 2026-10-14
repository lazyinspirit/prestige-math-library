---
id: lem-geometric-median-majority-radius-bound
kind: lemma
title: "A geometric median is close when a strict majority is close"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [alg-geometric-median-of-block-means, def-hilbert-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker, Geometric Median and Robust Estimation in Banach Spaces, Lemma 2.1(a)"
      url: "https://arxiv.org/pdf/1308.1334"
      locator: "PDF pp. 3–5; the Hilbert-space geometric-median radius lemma and its complete proof."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 4–5; geometric median of block means as a high-dimensional robust estimator."
---

## Statement

Let $H$ be a real Hilbert space, let $k\ge1$ be an integer, let $m_1,\ldots,m_k\in H$, and let $m$ minimize $F(z)=\sum_{j=1}^k\|z-m_j\|$. For $0<a<1/2$ and $r>0$, put
$$
C_a=\frac{1-a}{\sqrt{1-2a}}.
$$
If $z\in H$ satisfies $\|m-z\|>C_a r$, then more than $ak$ of the points $m_j$ satisfy $\|m_j-z\|>r$.

## Facts & Assumptions

**Given:** A real Hilbert space $H$, an integer $k\ge1$, points $m_1,\ldots,m_k$, a minimizer $m$ of their geometric-median objective, $0<a<1/2$, $r>0$, and $z\in H$.

[F1] A geometric median minimizes $F(w)=\sum_j\|w-m_j\|$ ([[alg-geometric-median-of-block-means]]).

[F2] The norm is induced by a real inner product; orthogonal decompositions satisfy Pythagoras. Cauchy–Schwarz follows by minimizing $\|u-tv\|^2\ge0$ over real $t$ when $v\ne0$ ([[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** A real Hilbert space $H$, an integer $k\ge1$, points $m_1,\ldots,m_k$, a geometric median $m$, $0<a<1/2$, $r>0$, and $z\in H$.

1.1 Suppose at most $ak$ points satisfy $\|m_j-z\|>r$. Since $C_a^2=1+a^2/(1-2a)>1$, write $D=\|z-m\|>C_a r>r$ and $d=(z-m)/D$. For each of the at least $(1-a)k$ remaining points, $u_j=(m_j-m)/\|m_j-m\|$ is defined and $\langle u_j,d\rangle\ge(D-\|m_j-z\|)/\|m_j-m\|>0$. Put $\cos\theta_j=\langle u_j,d\rangle$. By [F2], $0<\cos\theta_j\le1$; writing $d=\cos\theta_j u_j+w_j$ with $w_j\perp u_j$, Pythagoras gives $\|w_j\|=\sin\theta_j$. The distance from $z=m+Dd$ to the line through $m$ and $m_j$ is $D\|w_j\|=D\sin\theta_j$, and is at most $\|z-m_j\|\le r$. Therefore $\cos\theta_j\ge\sqrt{1-(r/D)^2}>\sqrt{1-C_a^{-2}}=a/(1-a)$. [F2, algebra]

2.1 For $m_j\ne m$, rationalizing the difference quotient gives $\lim_{t\downarrow0}(\|m+td-m_j\|-\|m-m_j\|)/t=\langle m-m_j,d\rangle/\|m-m_j\|=-\cos\theta_j$; if $m_j=m$, the quotient is $\|td\|/t=1$. Thus the right directional derivative of $F(m+td)$ is $-\sum_{m_j\ne m}\cos\theta_j+\#\{j:m_j=m\}$. Each good point from step 1.1 contributes less than $-a/(1-a)$, and each other point contributes at most $1$ by [F2]. Since at least $(1-a)k$ points are good, the derivative is strictly less than $k-(1-a)k(1+a/(1-a))=0$. At a minimizer every right difference quotient is nonnegative, so this negative derivative is impossible. Thus more than $ak$ points lie outside the radius-$r$ ball about $z$. [F1, F2, step 1.1, algebra] ∎


## Remarks

The nonempty-center condition $k\ge1$ is necessary. If $H=\mathbb R$, $k=0$, $z=0$, $r=1$, $a=1/4$, and $m=4$, the empty objective is zero at every point, so $m$ is a minimizer. Here $C_a=3/(2\sqrt2)<4$, but there are zero outliers, not more than $ak=0$. All conclusions above retain their stated constants for every positive center count.
