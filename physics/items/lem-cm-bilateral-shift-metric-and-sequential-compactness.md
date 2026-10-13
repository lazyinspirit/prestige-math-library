---
id: lem-cm-bilateral-shift-metric-and-sequential-compactness
kind: lemma
title: "The bilateral shift metric is a metric, cylinders are its basic balls, and the shift space is sequentially compact"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-bilateral-shift-space-and-cylinders, def-metric-space, def-metric-ball, def-metric-topology, def-dense-top, def-metric-compactness, def-metric-compactness-variants, thm-metric-compactness-equivalences, def-countable-choice, def-dependent-choice, def-sequence, def-metric-convergence, def-series, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, thm-geometric-series, def-bounded-set, lem-of-triangle-inequality]
dependency_roles:
  def-cm-bilateral-shift-space-and-cylinders: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-dense-top: mathematical-premise
  def-metric-compactness: mathematical-premise
  def-metric-compactness-variants: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-sequence: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-series: mathematical-premise
  lem-series-linearity: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-bounded-set: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. Ulcigrai, MATH36206/MATHM6206 Topological and Symbolic Dynamics, Section 2.7: the metrics d_rho on Sigma_N, Lemmas 2.7.1-2.7.2 identifying cylinders with balls, and Lemma 2.7.3 (every open set contains a cylinder)"
      url: "https://m-artigiani.github.io/files/SisDin-Part2.pdf"
    - title: "E. Glasner and B. Weiss, Sensitive dependence on initial conditions (Nonlinearity 6, 1993; updated author version), Section 2: subshifts of the two-symbol shift and their compactness"
      url: "https://www.math.tau.ac.il/~glasner/papers/sensi.pdf"
verification:
  precheck: pass
---

## Statement

Let $X=\{0,1\}^{\mathbb Z}$, let $d$ and $\sigma$ be the metric expression and the shift map of [[def-cm-bilateral-shift-space-and-cylinders]], and for $m\ge0$ let $F_m:=\{-m,\dots,m\}$ and $[s]_{F_m}:=\{t\in X:t_k=s_k\text{ for }k\in F_m\}$ be the cylinder determined by $s$ on $F_m$. Then:

1. $d$ is a metric on $X$ ([[def-metric-space]]);
2. for every $s\in X$ and every $m\ge0$,

$$B(s,2^{-m})\subseteq [s]_{F_m}\subseteq \overline B(s,2^{1-m});$$

consequently every cylinder is open in the metric topology ([[def-metric-topology]]) and every nonempty open subset of $X$ contains a cylinder;
3. $X$ is sequentially compact ([[def-metric-compactness-variants]]): every sequence in $X$ has a subsequence converging in $d$ ([[def-metric-convergence]]), and the construction of that subsequence uses no choice principle;
4. granting the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Dependent Choice ([[def-dependent-choice]]), $(X,d)$ is compact ([[def-metric-compactness]]).

## Facts & Assumptions

**Given:** The set $X$ of bi-infinite binary sequences, the expression $d(s,t)=\sum_{k\ge0}2^{-k}|s_k-t_k|+\sum_{k\ge1}2^{-k}|s_{-k}-t_{-k}|$, and the cylinders $[s]_{F_m}$.

[F1] The real absolute value satisfies $|a+b|\le|a|+|b|$ ([[lem-of-triangle-inequality]]). The geometric series satisfies $\sum_{k\ge0}2^{-k}=2$ and $\sum_{k=m+1}^{\infty}2^{-k}=2^{-m}$ for $m\ge0$; a series of nonnegative reals converges if and only if its partial sums are bounded, and convergent series may be added termwise and compared termwise ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-series-linearity]], [[def-series]], [[def-bounded-set]]).

[F2] Balls and topology: $B(s,\varepsilon)=\{t:d(s,t)<\varepsilon\}$ and $\overline B(s,\varepsilon)=\{t:d(s,t)\le\varepsilon\}$ for the metric $d$; a set is open when every point of it has a ball contained in it; a metric space carries the topology induced by its balls ([[def-metric-ball]], [[def-metric-topology]]).

[F3] A subset $D\subseteq X$ is dense when every nonempty open subset meets $D$ ([[def-dense-top]]).

[F4] A metric space is sequentially compact when every sequence has a convergent subsequence; compact, countably compact, limit point compact and sequentially compact metric spaces coincide, and this equivalence is proved under the Axioms of Countable and Dependent Choice ([[def-metric-compactness]], [[def-metric-compactness-variants]], [[thm-metric-compactness-equivalences]], [[def-sequence]]).

## Proof

**Proof technique:** direct; verify the metric axioms, identify cylinders with balls up to a factor two, and diagonalise a sequence of binary sequences.

1.1 The expression $d(s,t)$ is a sum of two convergent series of nonnegative terms by [F1], since $|s_j-t_j|\le1$; hence it is a nonnegative real and $d(s,t)=d(t,s)$ because $|s_j-t_j|=|t_j-s_j|$. If $s\ne t$ there is $j\in\mathbb Z$ with $s_j\ne t_j$; the corresponding term of $d(s,t)$ is positive and all terms are nonnegative, so $d(s,t)>0$. Finally, for $s,t,u\in X$ the termwise inequality $|s_j-t_j|\le|s_j-u_j|+|u_j-t_j|$ and [F1] give $d(s,t)\le d(s,u)+d(u,t)$ after multiplying by $2^{-|j|}$ and adding the two one-sided series. Hence $d$ is a metric, which is clause 1. [given, F1, F2, algebra]

1.2 Fix $s\in X$ and $m\ge0$. If $t\in B(s,2^{-m})$ then $2^{-|j|}\le d(s,t)<2^{-m}$ for every $j$ with $|j|\le m$ and $t_j\ne s_j$; since $2^{-|j|}\ge2^{-m}$ there, no such $j$ exists, so $t\in[s]_{F_m}$. Conversely, if $t\in[s]_{F_m}$ then all terms with $|j|\le m$ vanish and the remaining terms are at most $2^{-|j|}$; hence $d(s,t)\le\sum_{|j|>m}2^{-|j|}=2\cdot2^{-m}=2^{1-m}$, that is $t\in\overline B(s,2^{1-m})$. This proves the two inclusions of clause 2. [given, F1, F2, algebra]

1.3 Let $(x_n)_{n\ge0}$ be a sequence in $X$. Define $F_m=\{-m,\dots,m\}$ and construct subsequences $(x^{(m)}_n)_{n\ge0}$ recursively: $x^{(0)}_n:=x_n$, and given $(x^{(m-1)}_n)$, the map $n\mapsto x^{(m-1)}_n|_{F_m}$ takes values in the finite set $\{0,1\}^{F_m}$, so some value $r_m$ occurs for infinitely many $n$ ([[def-sequence]]); let $r_m$ be the lexicographically least such value (with respect to a fixed enumeration of $F_m$), and let $i^{(m)}_0<i^{(m)}_1<\cdots$ enumerate the infinite set $\{n:x^{(m-1)}_n|_{F_m}=r_m\}$; define $x^{(m)}_j:=x^{(m-1)}_{i^{(m)}_j}$. This is a simultaneous recursive construction with no choice: each $r_m$ is selected by a least-element rule, and each increasing enumeration is defined by least-element recursion on an infinite subset of $\mathbb N$. For $m\ge1$ every term of $(x^{(m)}_n)$ has restriction $r_m$ to $F_m$, and each $(x^{(j)}_n)$ with $j\ge m$ is a termwise subsequence of $(x^{(m)}_n)$. [given, F1, F2]

2.1 Every cylinder $[w]_{p,q}$ is open: if $t\in[w]_{p,q}$ and $M:=\max\{|p|,|q|\}$, then any $u$ with $d(t,u)<2^{-M}$ satisfies $u_j=t_j$ for every $|j|\le M$ by the argument of step 1.2, hence $u\in[w]_{p,q}$; thus $B(t,2^{-M})\subseteq[w]_{p,q}$. Conversely, if $V\subseteq X$ is nonempty and open and $s\in V$, choose $\varepsilon>0$ with $B(s,\varepsilon)\subseteq V$ and $m$ with $2^{1-m}<\varepsilon$; then step 1.2 gives $[s]_{F_m}\subseteq\overline B(s,2^{1-m})\subseteq B(s,\varepsilon)\subseteq V$. Hence cylinders are open and form a basis for the topology, as claimed in clause 2. [step 1.2, F2, F3, algebra]

2.2 Put $y_j:=x^{(j)}_j$; the indices of the original sequence at which $y_j$ sits are strictly increasing in $j$, so $(y_j)$ is a subsequence. For $m\ge1$, if $j,j'\ge m$, then $y_j$ and $y_{j'}$ both have restriction $r_m$ to $F_m$ by step 1.3, so $d(y_j,y_{j'})\le\sum_{|k|>m}2^{-|k|}=2^{1-m}$; hence $(y_j)$ is a Cauchy sequence in $(X,d)$. Define $s\in X$ by $s_k:=r_m(k)$ for every $m\ge\max\{1,|k|\}$; this is well defined because $r_{m+1}|_{F_m}=r_m$ for $m\ge1$ (every term of $(x^{(m+1)}_n)$ is a term of $(x^{(m)}_n)$, so the restriction of $r_{m+1}$ to $F_m$ stabilises the same value). Then $d(y_j,s)\le2^{1-m}$ for every $j\ge m\ge1$, so $y_j\to s$ by [F2]. This proves clause 3. [step 1.2, 1.3, F1, F2, algebra]

3.1 Clause 4 follows from clause 3 and [F4], which turns sequential compactness into compactness under the two stated choice axioms. [step 2.2, F4] ∎

## Remarks

- The metric can be written with the symmetric weight $2^{-|k|}$: for $s,t\in X$, splitting the sum at $k=0$ shows $d(s,t)=\sum_{k\in\mathbb Z}2^{-|k|}|s_k-t_k|$ in the sense that the two defining one-sided series are exactly the positive- and negative-index parts. The one-sided form is used here because it avoids a two-sided summation convention.

- The diagonal construction of step 1.3 is canonical: the value $r_m$ is the least stabilised restriction, and the increasing enumeration of an infinite subset of $\mathbb N$ is produced by least-element recursion. Countable choice is used only when compactness is read off from sequential compactness in clause 4, which is why that clause is stated as a separate hypothesis.
