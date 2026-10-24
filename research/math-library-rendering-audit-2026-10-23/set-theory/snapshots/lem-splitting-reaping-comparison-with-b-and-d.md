---
id: lem-splitting-reaping-comparison-with-b-and-d
kind: lemma
title: Splitting and reaping comparisons with b and d
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-splitting-and-reaping-numbers, def-eventual-domination-bounding-and-dominating-numbers, lem-basic-bounding-and-dominating-relations, def-almost-inclusion-pseudointersection-and-tower, def-axiom-of-choice, def-cardinal-arithmetic, def-aleph-and-beth-hierarchies, thm-nat-linear-order, def-nat-order, thm-recursion, thm-well-ordering-principle, def-natural-numbers, def-countable]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Blass 2.9-2.10, Lemma 14, Lemma 15, Theorem 16 and Proposition 27, printed pp.4-5, 8"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 3, printed pp.2-12"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC, with $s$ the splitting number, $r$ the reaping number
([[def-splitting-and-reaping-numbers]]) and $b,d$ the bounding and dominating
numbers ([[def-eventual-domination-bounding-and-dominating-numbers]]),

$$\aleph_1\le s\le d\le\mathfrak c,\qquad \aleph_1\le b\le r\le\mathfrak c.$$

The proof carries the interval-partition machinery internally: an interval
partition is a strictly increasing enumeration of the cuts of a partition of
$\omega$ into finite intervals; a partition $Q$ almost dominates a partition
$P$ when every sufficiently late block of $Q$ contains a whole block of $P$;
$\varphi(P)$ is the union of the even blocks of $P$ and $\psi(X)$ is the
partition whose blocks each meet $X$ minimally. The two coding lemmas are that
$\operatorname{func}_P\le^{*}g$ implies $\operatorname{part}_g$ almost
dominates $P$ and that $P$ almost dominating $\operatorname{part}_g$ implies
$g\le^{*}\operatorname{func}_P$; the splitter lemma is that $P$ almost
dominating $\psi(X)$ forces $\varphi(P)$ to split $X$. The countable lower
bound for $s$ is the classical two-sided diagonalization against a countable
family of candidate splitters, and $b\le r$ applies the splitter lemma
contrapositively to an unreaped family of size $r$.

## Facts & Assumptions
**Given:** the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $X$ splits $Y$ when $Y\cap X$ and $Y\setminus X$ are both infinite; a splitting family is a family in $[\omega]^{\omega}$ meeting every $Y\in[\omega]^{\omega}$ in some member that splits $Y$, and $s$ is its least size; a family is unreaped when no single set splits all its members, and $r$ is the least size of an unreaped family; both minima are attained and $s,r\le\mathfrak c$. ([[def-splitting-and-reaping-numbers]])

[F2] $f\le^{*}g$ means $f(n)\le g(n)$ eventually; $b$ is the least size of a $\le^{*}$-unbounded family and $d$ the least size of a $\le^{*}$-dominating family, both attained. ([[def-eventual-domination-bounding-and-dominating-numbers]])

[F3] $\aleph_1\le b\le d\le\mathfrak c$; in particular every family of fewer than $b$ functions is eventually dominated by a single function, and every $\le^{*}$-dominating family has size at least $d$. ([[lem-basic-bounding-and-dominating-relations]], [[def-eventual-domination-bounding-and-dominating-numbers]])

[F4] Under AC every set has a cardinality, and a subset of a set injects into it. ([[def-axiom-of-choice]], [[def-cardinal-arithmetic]])

[F5] Every nonempty subset of $\mathbb N$ has a least element, $\le$ is a linear order on $\mathbb N$ so every nonempty finite set of naturals has a greatest element, and recursion on $\mathbb N$ defines sequences with prescribed initial value and successor step. ([[thm-well-ordering-principle]], [[thm-nat-linear-order]], [[def-nat-order]], [[thm-recursion]], [[def-natural-numbers]])

## Proof

1.1 *Interval partitions.* Call $P=(i^P_n)_{n\in\mathbb N}$ a **partition** when $i^P_0=0$ and $i^P_n<i^P_{n+1}$ for all $n$; it is identified with the partition of $\omega$ into the finite intervals $[i^P_n,i^P_{n+1})=\{m:i^P_n\le m<i^P_{n+1}\}$. For partitions $P,Q$ say that $Q$ **almost dominates** $P$ when

$$\exists m\ \forall n\ge m\ \exists k\quad [i^P_k,i^P_{k+1})\subseteq[i^Q_n,i^Q_{n+1}).$$

Every $i^P_n$ is a natural number and the intervals cover $\omega$, so the notation is well founded. [F5]

1.2 *The functions $\operatorname{func}_P$ and the partition $\operatorname{part}_g$.* For a partition $P$ and $x\in\omega$ let $\operatorname{func}_P(x)=i^P_{n+2}-1$, where $n$ is the unique index with $x\in[i^P_n,i^P_{n+1})$, so that $\operatorname{func}_P\in{}^{\omega}\omega$. For $g\in{}^{\omega}\omega$ define $Q=\operatorname{part}_g$ by $i^Q_0=0$ and, given $i^Q_k$, let $i^Q_{k+1}$ be the least $j>i^Q_k$ such that $g(x)<j$ for every $x\le i^Q_k$; the finite set $\{g(0),\dots,g(i^Q_k)\}$ has a greatest element $m$ by [F5], and $j=\max\{i^Q_k,m\}+1$ qualifies. Then $Q$ is a partition, and its defining property is

$$x\le i^Q_k\ \Longrightarrow\ g(x)<i^Q_{k+1}.$$

[F5, step 1.1]

1.3 *Countable lower bound for $s$.* Let $\{Y_i:i\in\mathbb N\}\subseteq[\omega]^{\omega}$ be a countable family; we construct $Z\in[\omega]^{\omega}$ that no $Y_i$ splits. Write $Y_i^0=Y_i$ and $Y_i^1=\omega\setminus Y_i$. Recursively choose $\varepsilon(i)\in\{0,1\}$ so that $C_i:=\bigcap_{j\le i}Y_j^{\varepsilon(j)}$ is infinite: at stage $i=0$, one of $Y_0$ and its complement is infinite; at each later stage, the infinite set $C_{i-1}$ is the union $(C_{i-1}\cap Y_i)\cup(C_{i-1}\cap Y_i^1)$, so at least one part is infinite. After choosing $C_i$, let $m_i$ be its least element outside the finite set $\{m_0,\dots,m_{i-1}\}$. Then the $m_i$ are pairwise distinct and $Z=\{m_i:i\in\mathbb N\}\in[\omega]^{\omega}$. For fixed $i$ and every $j\ge i$ one has $m_j\in C_j\subseteq Y_i^{\varepsilon(i)}$, so $Z\setminus Y_i^{\varepsilon(i)}\subseteq\{m_0,\dots,m_{i-1}\}$ is finite. If $\varepsilon(i)=0$, then $Z\setminus Y_i$ is finite; if $\varepsilon(i)=1$, then $Z\cap Y_i$ is finite. In neither case are both $Z\cap Y_i$ and $Z\setminus Y_i$ infinite, so $Y_i$ does not split $Z$. Thus no countable family is a splitting family, and since $s$ is a cardinal, $\aleph_1\le s$. [F1, F4, F5]

2.1 *The partition $\psi(X)$ of a set.* For $X\in[\omega]^{\omega}$ define $Q=\psi(X)$ by $i^Q_0=0$ and, given $i^Q_n$, let $i^Q_{n+1}$ be the least $j>i^Q_n$ with $[i^Q_n,j)\cap X\ne\varnothing$. Such a $j$ exists because $X$ is infinite, so there is $x\in X$ with $x\ge i^Q_n$, and $j=\max\{i^Q_n,x\}+1$ qualifies; the least one is determined by [F5]. Then $Q$ is a partition and by construction $[i^Q_n,i^Q_{n+1})\cap X\ne\varnothing$ for every $n$. [F5, step 1.1]

2.2 *The even-block set $\varphi(P)$.* For a partition $P$ put $\varphi(P)=\bigcup_{n\in\mathbb N}[i^P_{2n},i^P_{2n+1})$. Each interval $[i^P_{2n},i^P_{2n+1})$ is nonempty because $i^P_{2n}<i^P_{2n+1}$, these intervals are pairwise disjoint, and they are infinitely many, so $\varphi(P)\in[\omega]^{\omega}$. [F5, step 1.1]

2.3 *First coding lemma.* If $P$ is a partition, $g\in{}^{\omega}\omega$ and $\operatorname{func}_P\le^{*}g$, then $\operatorname{part}_g$ almost dominates $P$. Let $Q=\operatorname{part}_g$ and choose $p$ with $\operatorname{func}_P(n)\le g(n)$ for all $n\ge p$. Given $n\ge p$, choose $k$ with $i^Q_n\in[i^P_k,i^P_{k+1})$ and let $x\in[i^P_{k+1},i^P_{k+2})$; then $p\le n\le i^Q_n<i^P_{k+1}\le x\le i^P_{k+2}-1=\operatorname{func}_P(i^Q_n)\le g(i^Q_n)<i^Q_{n+1}$, using the defining property of $\operatorname{part}_g$ at $x=i^Q_n\le i^Q_n$. Hence $[i^P_{k+1},i^P_{k+2})\subseteq[i^Q_n,i^Q_{n+1})$, and $n\ge p$ was arbitrary, so $Q$ almost dominates $P$. [F5, step 1.2]

2.4 *Second coding lemma.* If $P$ is a partition, $g\in{}^{\omega}\omega$ and $P$ almost dominates $\operatorname{part}_g$, then $g\le^{*}\operatorname{func}_P$. Let $Q=\operatorname{part}_g$ and choose $m$ so that for every $n\ge m$ there is $k$ with $[i^Q_k,i^Q_{k+1})\subseteq[i^P_n,i^P_{n+1})$. Let $x\ge i^P_m$ and let $n$ be the index with $x\in[i^P_n,i^P_{n+1})$, so $n\ge m$ and hence also $n+1\ge m$. Choose $k$ with $[i^Q_k,i^Q_{k+1})\subseteq[i^P_{n+1},i^P_{n+2})$; then $x<i^P_{n+1}\le i^Q_k$, so $g(x)<i^Q_{k+1}\le i^P_{n+2}$, that is $g(x)\le i^P_{n+2}-1=\operatorname{func}_P(x)$. Hence $g\le^{*}\operatorname{func}_P$. [F5, step 1.2]

3.1 *Splitter lemma.* If a partition $P$ almost dominates $\psi(X)$ for some $X\in[\omega]^{\omega}$, then $\varphi(P)$ splits $X$. Let $Q=\psi(X)$ and choose $m$ so that for all $n\ge m$ there is $k$ with $[i^Q_k,i^Q_{k+1})\subseteq[i^P_n,i^P_{n+1})$. Since every block of $Q$ meets $X$ by step 2.1, $X\cap[i^P_n,i^P_{n+1})\ne\varnothing$ for every $n\ge m$. The intervals $[i^P_n,i^P_{n+1})$ are pairwise disjoint, so the sets $X\cap[i^P_{2n},i^P_{2n+1})$ for even $2n\ge m$ are pairwise disjoint nonempty subsets of $X\cap\varphi(P)$, and the sets $X\cap[i^P_{2n+1},i^P_{2n+2})$ for odd $2n+1\ge m$ are pairwise disjoint nonempty subsets of $X\setminus\varphi(P)$. Both families are infinite, so $X\cap\varphi(P)$ and $X\setminus\varphi(P)$ are infinite and $\varphi(P)\in[\omega]^{\omega}$ splits $X$ by step 2.2. [F1, step 2.1, step 2.2]

4.1 *$s\le d$.* Let $D\subseteq{}^{\omega}\omega$ be a $\le^{*}$-dominating family with $\lvert D\rvert=d$, and fix $X\in[\omega]^{\omega}$. The partition $\psi(X)$ of step 2.1 is a partition, and $\operatorname{func}_{\psi(X)}\in{}^{\omega}\omega$ is dominated by some $g\in D$. By step 2.3 the partition $\operatorname{part}_g$ almost dominates $\psi(X)$, so by step 3.1 the set $\varphi(\operatorname{part}_g)$ splits $X$. Hence $\{\varphi(\operatorname{part}_g):g\in D\}$ is a splitting family: it is contained in $[\omega]^{\omega}$ by step 2.2 and its size is at most $\lvert D\rvert=d$. Therefore $s\le d$. [F1, F2, step 2.1, step 2.2, step 2.3, step 3.1]

4.2 *$b\le r$.* Let $\mathcal R=\{X_{\alpha}:\alpha<r\}$ be an unreaped family of infinite sets, of size $r$. Consider the family $\Psi=\{\psi(X_{\alpha}):\alpha<r\}$ of partitions. No partition $P$ almost dominates every member of $\Psi$: otherwise $P$ almost dominates $\psi(X_{\alpha})$ for every $\alpha<r$, so by step 3.1 the set $\varphi(P)$ splits every $X_{\alpha}$, contradicting that $\mathcal R$ is unreaped. Consequently the family of functions $\{\operatorname{func}_{\psi(X_{\alpha})}:\alpha<r\}$ is $\le^{*}$-unbounded: if some $g$ dominated all of them, step 2.3 would make $\operatorname{part}_g$ a partition almost dominating every member of $\Psi$, contrary to what was just shown. An unbounded family has size at least $b$, and $\lvert\{\operatorname{func}_{\psi(X_{\alpha})}:\alpha<r\}\rvert\le r$, so $b\le r$. [F1, F2, F3, step 2.3, step 3.1]

5.1 Steps 1.3, 4.1 and [F3] give $\aleph_1\le s\le d\le\mathfrak c$, and steps 4.2 and [F1] with [F3] give $\aleph_1\le b\le r\le\mathfrak c$. This is the statement. ∎ [F1, F3, step 1.3, step 4.1, step 4.2]
