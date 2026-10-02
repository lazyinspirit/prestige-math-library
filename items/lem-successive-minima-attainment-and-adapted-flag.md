---
id: lem-successive-minima-attainment-and-adapted-flag
kind: lemma
title: "Attained successive minima and adapted flag"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-successive-minima-of-a-convex-body-with-respect-to-a-lattice
  - lem-full-lattice-fundamental-domain-and-bounded-points
  - def-convex-subset-of-euclidean-space
  - def-linear-basis
  - def-linear-combination-and-span
  - def-full-euclidean-lattice-and-covolume
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "Ben Green, Additive Combinatorics, Lecture 3 §3.7"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf"
      locator: "Lecture 3 §3.7 p.27."
    - title: "Martin Henk, Successive Minima and Lattice Points"
      url: "https://arxiv.org/pdf/math/0204158"
      locator: "§§1-2 pp.1-4."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$C\subseteq\mathbb R^n$ be compact, convex, centrally symmetric and of
nonempty interior ([[def-convex-subset-of-euclidean-space]]), let
$\Lambda\subseteq\mathbb R^n$ be a full lattice with
$\operatorname{covol}(\Lambda)>0$
([[def-full-euclidean-lattice-and-covolume]]), and let
$\lambda_1\le\cdots\le\lambda_n$ be the successive minima of $C$ with respect to
$\Lambda$ ([[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]]).
Then:

1. **(attainment)** for every $i$ the space
   $\operatorname{span}(\lambda_iC\cap\Lambda)$ has dimension at least $i$;
2. **(adapted basis)** there are linearly independent vectors
   $a_1,\dots,a_n\in\Lambda$ with $a_i\in\lambda_iC$ for every $i$ and
   $\operatorname{span}(\lambda_iC\cap\Lambda)=\operatorname{span}\{a_j:\lambda_j\le\lambda_i\}$ for $1\le i\le n$;
3. **(interior flag)** for every $i$, every lattice point in the interior of
   $\lambda_iC$ lies in $\operatorname{span}\{a_j:\lambda_j<\lambda_i\}$
   provided by clause 2, that is
   $\operatorname{span}\bigl(\operatorname{int}(\lambda_iC)\cap\Lambda\bigr)
     \subseteq\operatorname{span}\{a_j:\lambda_j<\lambda_i\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a compact convex centrally symmetric body
$C\subseteq\mathbb R^n$ with nonempty interior, a full lattice
$\Lambda=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n$, and the successive
minima $\lambda_1\le\cdots\le\lambda_n$ of the definition.

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), used in step 1.1
to select one real $t_m$ from each of the countably many nonempty sets
$E_i\cap[\lambda_i,\lambda_i+1/m]$; the Axiom of Choice assumed in the
statement already meets the hypothesis of [F2], and every other selection below
is a least index in a fixed finite enumeration, requiring no further choice.

[F1] The successive minima are defined by
$\lambda_i=\inf\{t>0:\dim_{\mathbb R}\operatorname{span}(tC\cap\Lambda)\ge i\}$;
the span of the finite set $tC\cap\Lambda$ is a genuine finite-dimensional
space; $s<t$ implies $sC\subseteq tC$ because $0\in C$ and $C$ is convex, so
$i\mapsto\lambda_i$ is nondecreasing; $0<\lambda_1\le\cdots\le\lambda_n<\infty$;
and there is a real $t_0>0$ with $\dim\operatorname{span}(t_0C\cap\Lambda)=n$
([[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]]).

[F2] Every bounded subset of $\mathbb R^n$ meets the full lattice $\Lambda$ in
finitely many points
([[lem-full-lattice-fundamental-domain-and-bounded-points]]).

[F3] $C$ is compact, hence closed; it is convex, so
$(1-\theta)x+\theta y\in C$ for all $x,y\in C$ and $0\le\theta\le1$; it is
centrally symmetric, $-C=C$, and $0\in C$ ([[def-convex-subset-of-euclidean-space]]).

[F4] Terminology of linear algebra: a finite family that spans a space and is
linearly independent is a basis, and the span of a set consists of its finite
linear combinations ([[def-linear-basis]],
[[def-linear-combination-and-span]]); a linear space spanned by a finite set
with $m$ elements has a basis of at most $m$ elements, obtained by discarding
one element at a time that lies in the span of the others.

## Proof

1.1 (Attainment.) Fix $i$ and let $t_0$ be as in [F1]. Since $\lambda_i\le t_0<\infty$ and $\lambda_i=\inf E_i$ for $E_i=\{t>0:\dim\operatorname{span}(tC\cap\Lambda)\ge i\}$, [A1] lets us select for each $m\ge1$ a real $t_m\in E_i$ with $\lambda_i\le t_m<\lambda_i+1/m$. Thus $t_m\to\lambda_i$ and $t_m<t_0+1$, because $\lambda_i\le t_0$ and $1/m\le1$. [F1, A1]
1.2 For any $v\in\operatorname{int}(\lambda_iC)$, since $\lambda_i>0$, the point $c:=v/\lambda_i$ lies in $\operatorname{int}(C)$. The map $\varepsilon\mapsto v/(\lambda_i-\varepsilon)$ is continuous at $0$ with value $c$; because $C$ contains an open ball about $c$, there is $\varepsilon_0\in(0,\lambda_i)$ such that $v/(\lambda_i-\varepsilon)\in C$ for every $0<\varepsilon<\varepsilon_0$. Thus $v\in(\lambda_i-\varepsilon)C$ for every such $\varepsilon$. [F3, algebra]
2.1 By [F2] the sets $t_mC\cap\Lambda$ are contained in the finite set $F:=(t_0+1)C\cap\Lambda$, since $t_m<t_0+1$ implies $t_mC\subseteq(t_0+1)C$ by [F1]. The collection of subsets $\{t_mC\cap\Lambda:m\ge1\}$ of $F$ is therefore finite, so some subset $S\subseteq F$ occurs for infinitely many $m$; fix such an infinite subsequence. [F2, step 1.1]
3.1 Along that subsequence $t_m\to\lambda_i$ and $\dim\operatorname{span}S=\dim\operatorname{span}(t_mC\cap\Lambda)\ge i$. [step 2.1]
4.1 Every $v\in S$ lies in $t_mC$ for all $m$ of the subsequence, that is $v/t_m\in C$; since $v/t_m\to v/\lambda_i$ and $C$ is closed by [F3], also $v/\lambda_i\in C$, so $v\in\lambda_iC$. Hence $S\subseteq\lambda_iC\cap\Lambda$ and $\dim\operatorname{span}(\lambda_iC\cap\Lambda)\ge\dim\operatorname{span}S\ge i$, which is clause 1. [F3, step 3.1]
5.1 (Adapted basis.) Fix an enumeration $v_1,\dots,v_N$ of the finite set $F=(t_0+1)C\cap\Lambda$ of step 2.1. Define $a_1$ to be the first $v_k$ with $v_k\in\lambda_1C\cap\Lambda$ and $v_k\ne0$, and for $k\ge2$ define $a_k$ to be the first $v_j$ with $v_j\in\lambda_kC\cap\Lambda$ and $v_j\notin\operatorname{span}\{a_1,\dots,a_{k-1}\}$. Each step succeeds: $\dim\operatorname{span}(\lambda_kC\cap\Lambda)\ge k$ by step 4.1, while $\operatorname{span}\{a_1,\dots,a_{k-1}\}\subseteq\operatorname{span}(\lambda_kC\cap\Lambda)$ because $a_j\in\lambda_jC\subseteq\lambda_kC$ for $j\le k$ by [F1]. The recursion is a definition by the least index $j$ in a fixed finite list, so it selects nothing. [F1, step 4.1, algebra]
6.1 By construction $a_k\in\lambda_kC\cap\Lambda$ and $a_k\notin\operatorname{span}\{a_1,\dots,a_{k-1}\}$ for every $k$, so $a_1,\dots,a_n$ are linearly independent vectors of $\Lambda$ with $a_k\in\lambda_kC$. [F4, step 5.1]
7.1 (Flag equality.) Fix $i$ and put $r:=\#\{j:\lambda_j\le\lambda_i\}$, so $r\ge i$ and $\lambda_r\le\lambda_i<\lambda_{r+1}$ when $r<n$. For $j\le r$ one has $\lambda_j\le\lambda_i$, hence $a_j\in\lambda_jC\subseteq\lambda_iC$; the $a_1,\dots,a_r$ are independent by step 6.1, so $\dim\operatorname{span}(\lambda_iC\cap\Lambda)\ge r$. If the dimension exceeded $r$, then $\dim\operatorname{span}(tC\cap\Lambda)\ge r+1$ for $t=\lambda_i$, whence $\lambda_{r+1}\le\lambda_i$ by definition of the infimum, contradicting $\lambda_{r+1}>\lambda_i$ (and for $r=n$ the dimension is at most $n=r$). Hence the dimension equals $r$ and, since $\operatorname{span}\{a_1,\dots,a_r\}\subseteq\operatorname{span}(\lambda_iC\cap\Lambda)$ is a subspace of the same dimension $r$, the two agree; that is $\operatorname{span}(\lambda_iC\cap\Lambda)=\operatorname{span}\{a_j:\lambda_j\le\lambda_i\}$, which is clause 2. [F1, step 6.1]
7.2 (Interior flag.) Let $v\in\Lambda\cap\operatorname{int}(\lambda_iC)$ and put $p:=\#\{j:\lambda_j<\lambda_i\}$, so $\lambda_p<\lambda_i=\lambda_{p+1}$ when $p<n$ and $\lambda_j\le\lambda_p$ for $j\le p$. If $p=n$ then $\operatorname{span}\{a_j:\lambda_j<\lambda_i\}=\operatorname{span}\{a_1,\dots,a_n\}=\mathbb R^n$ contains $v$; so assume $p<n$. [F1, step 6.1]
7.3 Let $\varepsilon_0$ be as in step 1.2. If $p=0$, choose any $0<\varepsilon<\varepsilon_0$. If $p>0$, choose $0<\varepsilon<\min\bigl(\varepsilon_0,\min_{\lambda_j<\lambda_i}(\lambda_i-\lambda_j)\bigr)$; the inner minimum is then over a nonempty finite set of positive numbers. In either case step 1.2 gives $v\in(\lambda_i-\varepsilon)C$, and for each $j\le p$ convexity of $C$ with $0\in C$ gives $a_j/(\lambda_i-\varepsilon)=\frac{\lambda_j}{\lambda_i-\varepsilon}\cdot\frac{a_j}{\lambda_j}\in C$, since $\lambda_j/(\lambda_i-\varepsilon)<1$. [F1, F3, step 1.2, step 6.1]
8.1 Suppose $v\notin\operatorname{span}\{a_j:\lambda_j<\lambda_i\}=\operatorname{span}\{a_1,\dots,a_p\}$. By steps 1.2 and 7.3 the independent family $a_1,\dots,a_p$ together with $v$ lies in $(\lambda_i-\varepsilon)C\cap\Lambda$, so $\dim\operatorname{span}((\lambda_i-\varepsilon)C\cap\Lambda)\ge p+1$; by definition of the infimum $\lambda_{p+1}\le\lambda_i-\varepsilon<\lambda_i=\lambda_{p+1}$, a contradiction. Therefore $v\in\operatorname{span}\{a_j:\lambda_j<\lambda_i\}$, which is clause 3. [F1, step 7.2, step 1.2, step 7.3]
9.1 Clauses 1, 2 and 3 are steps 4.1, 7.1 and 8.1 respectively. [step 4.1, step 7.1, step 8.1] ∎
