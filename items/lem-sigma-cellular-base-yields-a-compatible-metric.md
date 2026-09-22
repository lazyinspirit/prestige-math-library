---
id: lem-sigma-cellular-base-yields-a-compatible-metric
kind: lemma
title: "A sigma-cellular base metrizes a normal Moore space"
status: published
origin: pipeline
deps: [def-moore-spaces-and-developments, def-normal-and-t4-spaces, def-discrete-family-and-sigma-bases, def-topology-basis-subbasis, lem-normality-via-shrinking, thm-bing-metrization, def-axiom-of-choice]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of topological spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
      locator: "Theorem 3, printed pp. 178-179, and Theorem 8, printed pp. 181-182"
verification:
  audited: 2026-09-22
---

## Statement

Assume $\mathrm{ZFC}$. Let $X$ be a normal Moore space carrying a base of the
form $\bigcup_{n\in\mathbb N}\mathcal B_n$
([[def-topology-basis-subbasis]]) in which every $\mathcal B_n$ is a pairwise
disjoint family of open sets. Then $X$ is metrizable.

The normality and development hypotheses are essential to this conclusion:
a $T_1$ space with a sigma-disjoint base need not be metrizable.

## Facts & Assumptions

**Given:** A normal Moore space $X$, a development $(\mathcal G_i)_{i\in\mathbb N}$, and a base $\bigcup_n\mathcal B_n$ whose levels are pairwise disjoint open families.

[F1] A Moore space is regular and $T_1$ and has a development: every $\mathcal G_i$ covers $X$, and for every open $O\ni x$ some $i$ satisfies $\operatorname{St}(x,\mathcal G_i)\subseteq O$ ([[def-moore-spaces-and-developments]]).

[F2] For every open $O\ni x$, some member of the displayed base contains $x$ and is contained in $O$ ([[def-topology-basis-subbasis]]).

[F3] If $A$ is closed, $U$ is open, $A\subseteq U$, and $X$ is normal, then there is open $D$ with $A\subseteq D\subseteq\overline D\subseteq U$ ([[lem-normality-via-shrinking]], [[def-normal-and-t4-spaces]]).

[F4] A family is discrete when every point has a neighbourhood meeting at most one member; a sigma-discrete open basis of a regular $T_1$ space yields a compatible metric in $\mathrm{ZFC}$ ([[def-discrete-family-and-sigma-bases]], [[thm-bing-metrization]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For $n,i\in\mathbb N$, put $B_n^*=\bigcup\mathcal B_n$, $W_n=X\setminus B_n^*$, and $X_{n,i}=X\setminus\bigcup\{G\in\mathcal G_i:G\cap W_n\ne\varnothing\}$. The set $W_n$ is closed and $X_{n,i}$ is closed. Also $X_{n,i}\subseteq B_n^*$: a member of the cover $\mathcal G_i$ containing a point of $X_{n,i}$ is disjoint from $W_n$. [given, F1]

2.1 Every point of $B_n^*$ belongs to some $X_{n,i}$. Indeed, if $x\in B\in\mathcal B_n$, choose $i$ with $\operatorname{St}(x,\mathcal G_i)\subseteq B$ by [F1]. Every member of $\mathcal G_i$ containing $x$ is then disjoint from $W_n$, which is precisely $x\in X_{n,i}$. Empty levels cause no exception: then $B_n^*=X_{n,i}=\varnothing$. [F1, step 1.1]

2.2 Apply [F3] to the closed set $X_{n,i}$ inside the open set $B_n^*$ and obtain open $D_{n,i}$ with $X_{n,i}\subseteq D_{n,i}\subseteq\overline{D_{n,i}}\subseteq B_n^*$. [F3, step 1.1]

3.1 The family $\mathcal H_{n,i}=\{D_{n,i}\cap B:B\in\mathcal B_n\}$ is a discrete family of open sets. A point outside $\overline{D_{n,i}}$ has an open neighbourhood missing every member. A point of $\overline{D_{n,i}}$ lies in $B_n^*$ by step 2.2 and hence in a unique $B_0\in\mathcal B_n$; the open neighbourhood $B_0$ meets no $D_{n,i}\cap B$ with $B\ne B_0$. [given, F4, step 2.2]

4.1 The countable union $\bigcup_{n,i}\mathcal H_{n,i}$ is an open sigma-discrete basis. To verify the basis property, let $O$ be open and $x\in O$. By [F2] choose $n$ and $B\in\mathcal B_n$ with $x\in B\subseteq O$. Step 2.1 gives $i$ with $x\in X_{n,i}\subseteq D_{n,i}$, so $x\in D_{n,i}\cap B\subseteq O$ and this set belongs to $\mathcal H_{n,i}$. [F2, F4, step 2.1, step 2.2, step 3.1]

5.1 By [F1], $X$ is regular and $T_1$. The sigma-discrete basis of step 4.1 therefore satisfies the reverse direction of Bing's metrization theorem [F4], so $X$ admits a compatible metric. [F1, F4, step 4.1] ∎

## Remarks

- **Why the naive block metric fails.** Although $B_n^*$ is open, its complement $W_n$ need not be open. Thus $\mathcal B_n\cup\{W_n\}$ need not be an open partition, and agreement on those blocks does not directly define the original topology. Normality and the development are exactly what replace each cellular level by the countable family of discrete open families in step 3.1.

- **Source route.** Step 3.1 is Bing's normal-development conversion from screenable to strongly screenable (Theorem 8). Step 5.1 uses the sigma-discrete-basis form of his metrization theorem (Theorem 3).
