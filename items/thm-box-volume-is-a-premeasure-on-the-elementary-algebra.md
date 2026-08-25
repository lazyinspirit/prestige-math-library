---
id: thm-box-volume-is-a-premeasure-on-the-elementary-algebra
kind: theorem
title: "Elementary volume is a sigma-finite premeasure on the algebra of elementary sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-elementary-sets-form-an-algebra, thm-elementary-volume-is-well-defined, prop-elementary-volume-is-finitely-additive-and-monotone, lem-elementary-sets-admit-compact-inner-and-open-outer-approximations, def-premeasure-on-an-algebra, def-elementary-set-in-rn, def-half-open-box, def-nonnegative-extended-series, def-metric-topology, def-metric-interior-closure-boundary, def-metric-compactness, lem-compactness-is-intrinsic, thm-geometric-series, thm-well-ordering-principle, thm-of-archimedean, def-extended-reals, lem-finite-sum-laws, def-finite-sum]
justified_by: []
aliases: []
landmark: true
short: "volume is a premeasure"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 1.1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, let $\mathcal{E}_n$ be the algebra of elementary subsets of
$\mathbb{R}^n$ ([[prop-elementary-sets-form-an-algebra]]) and let $\mu_0$ be
elementary volume ([[thm-elementary-volume-is-well-defined]]). Then $\mu_0$ is a
sigma-finite premeasure on $\mathcal{E}_n$ ([[def-premeasure-on-an-algebra]]):
$\mu_0(\varnothing) = 0$; whenever $(A_k)_{k\in\mathbb{N}}$ is a pairwise
disjoint sequence in $\mathcal{E}_n$ whose union $A$ again lies in
$\mathcal{E}_n$,

$$\mu_0(A) \;=\; \sum_{k=0}^{\infty}\mu_0(A_k);$$

and $\mathbb{R}^n = \bigcup_{k\in\mathbb{N}}(-k,k]^n$ with
$\mu_0\big((-k,k]^n\big) < +\infty$ for every $k$.

**No choice principle is used.** The one place where a textbook proof selects
countably many objects is the enlargement of each $A_k$, and here the enlarged
set is the canonical $A_k^{+1/(m+1)}$ of
[[lem-elementary-sets-admit-compact-inner-and-open-outer-approximations]] with
$m$ the **least** natural number that works, which is a definition rather than a
selection. The compact inner set and the finite subcover are each a single
instantiation of an existential statement.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the algebra $\mathcal{E}_n$ with elementary volume $\mu_0$, and a pairwise disjoint sequence $(A_k)_{k\in\mathbb{N}}$ in $\mathcal{E}_n$ whose union $A$ lies in $\mathcal{E}_n$.

[L1] $\mathcal{E}_n$ is an algebra of subsets of $\mathbb{R}^n$, it contains every half-open box, and it is closed under intersection of two members and under difference ([[prop-elementary-sets-form-an-algebra]]).

[L2] For every $n\ge1$, there is exactly one function $\mu_0 : \mathcal{E}_n \to [0,+\infty]$ whose value at $A$ is the sum of the volumes of the members of any presentation of $A$ by a finite list of pairwise disjoint half-open boxes; it satisfies $\mu_0(\varnothing) = 0$ and $\mu_0(B) = \operatorname{vol}(B)$ for every half-open box $B$ ([[thm-elementary-volume-is-well-defined]]).

[L3] Elementary volume is finitely additive on pairwise disjoint elementary sets, monotone, and finitely subadditive ([[prop-elementary-volume-is-finitely-additive-and-monotone]]).

[L4] $A^{+\delta}$ is an elementary set, it is determined by $A$ and $\delta$ alone, it contains $A$, and every point of $A$ is an interior point of $A^{+\delta}$ in $(\mathbb{R}^n,d_2)$ ([[lem-elementary-sets-admit-compact-inner-and-open-outer-approximations]], claim 1).

[L5] For every real $\varepsilon > 0$ there is $m \in \mathbb{N}$ with $\mu_0\big(A^{+1/(m+1)}\big) \le \mu_0(A) + \varepsilon$ ([[lem-elementary-sets-admit-compact-inner-and-open-outer-approximations]], claim 2).

[L6] If $\mu_0(A) < +\infty$, then for every real $\varepsilon > 0$ there are an elementary set $A'$ and a compact set $K \subseteq \mathbb{R}^n$ with $A' \subseteq K \subseteq A$ and $\mu_0(A) \le \mu_0(A') + \varepsilon$ ([[lem-elementary-sets-admit-compact-inner-and-open-outer-approximations]], claim 3).

[L7] For a nonempty box $\operatorname{vol}(B) := +\infty$ when $a_i = -\infty$ or $b_i = +\infty$ for some $i<n$, and $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ when every $a_i$ and every $b_i$ is real; $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$; and $(u,v]^n := B(\mathbf{u}, \mathbf{v})$ ([[def-half-open-box]]).

[L8] A subset $E\subseteq\mathbb{R}^n$ is an **elementary set** when there are a natural number $m$ and a list $B_0, \dots, B_{m-1}$ of half-open boxes with $E=\bigcup_{j<m}B_j$ ([[def-elementary-set-in-rn]]).

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$; it is **sigma-finite** if there is a sequence $(P_n)$ in $\mathcal A_0$ with $X=\bigcup_nP_n$ and $\mu_0(P_n)<+\infty$ for every $n$ ([[def-premeasure-on-an-algebra]]).

[F2] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]).

[F3] $A$ is a compact subset of $X$ if and only if for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and indices $i_0, \dots, i_n \in I$ with $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \emptyset$ ([[lem-compactness-is-intrinsic]], claim 3; [[def-metric-compactness]]).

[F4] The interior $\operatorname{int}(A)$ is open, and it is the largest open subset of $A$ ([[def-metric-interior-closure-boundary]], [[def-metric-topology]]).

[F5] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F6] If $|r| < 1$ then $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$; in particular $\sum_{k=0}^{\infty} 2^{-k} = 2$ ([[thm-geometric-series]]).

[F7] Every complete ordered field $F$ is Archimedean: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]]).

[F8] For sequences of reals, $\sum_{k<n}(a_k+b_k) = \sum_{k<n}a_k+\sum_{k<n}b_k$; if $a_k \le b_k$ for all $k<n$ then $\sum_{k<n}a_k \le \sum_{k<n}b_k$; and if $a_k \ge 0$ for all $k<n$ then $\prod_{k<n} a_k \ge 0$, with $\prod_{k<n}a_k>0$ when every $a_k>0$ ([[lem-finite-sum-laws]], claims 1, 4 and 6).

[F9] Finite sums and finite products of a sequence of reals are defined by the recursions $\Sigma_0 = 0$, $\Sigma_{\sigma(n)} = \Sigma_n + a_n$ and $\Pi_0 = 1$, $\Pi_{\sigma(n)} = \Pi_n \cdot a_n$ ([[def-finite-sum]]).

[F10] For $a,b \in \overline{\mathbb{R}}$, $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$ ([[def-extended-reals]]).

## Proof

**Proof technique:** direct.

1.1 $\mu_0$ is a function on the algebra $\mathcal{E}_n$ with values in $[0,+\infty]$ and $\mu_0(\varnothing)=0$, which is the first premeasure clause. [L1, L2, F1]

1.2 Each cube $(-k,k]^n$ is a half-open box, hence elementary, with $\mu_0\big((-k,k]^n\big)=(2k)^n<+\infty$ for $k \ge 1$ and $\mu_0\big((-0,0]^n\big)=0$; and $\bigcup_{k\in\mathbb{N}}(-k,k]^n=\mathbb{R}^n$, because for $x \in \mathbb{R}^n$ the Archimedean property supplies a natural $k \ge 1$ above each of the finitely many reals $|x_i|$. [L1, L2, L7, L8, F7]

1.3 For every $N$, finite additivity gives $\sum_{k<N}\mu_0(A_k)=\mu_0\big(\bigcup_{k<N}A_k\big)$ and monotonicity gives $\mu_0\big(\bigcup_{k<N}A_k\big) \le \mu_0(A)$, so every partial sum is at most $\mu_0(A)$ and therefore $\sum_{k=0}^{\infty}\mu_0(A_k) \le \mu_0(A)$, that supremum being the nonnegative extended sum. [L3, F2]

1.4 Suppose $\mu_0(A)<+\infty$ and let $\varepsilon>0$ be real. Fix an elementary $A'$ and a compact $K$ with $A' \subseteq K \subseteq A$ and $\mu_0(A)\le\mu_0(A')+\varepsilon$; for each $k$ let $m_k$ be the least natural number with $\mu_0\big(A_k^{+1/(m_k+1)}\big)\le\mu_0(A_k)+\varepsilon 2^{-k}$, which exists because the set of such naturals is nonempty and $\mathbb{N}$ is well ordered, and put $U_k:=\operatorname{int}\big(A_k^{+1/(m_k+1)}\big)$, an open set containing $A_k$. Since $K \subseteq A=\bigcup_kA_k\subseteq\bigcup_kU_k$, compactness yields finitely many indices covering $K$, hence a natural $N$ with $K\subseteq\bigcup_{k<N}U_k$, so that $A'\subseteq\bigcup_{k<N}A_k^{+1/(m_k+1)}$; monotonicity, finite subadditivity and the geometric series then give $\mu_0(A')\le\sum_{k<N}\mu_0\big(A_k^{+1/(m_k+1)}\big)\le\sum_{k<N}\mu_0(A_k)+\varepsilon\sum_{k<N}2^{-k}\le\sum_{k=0}^{\infty}\mu_0(A_k)+2\varepsilon$, whence $\mu_0(A)\le\sum_{k=0}^{\infty}\mu_0(A_k)+3\varepsilon$; as $\varepsilon$ was an arbitrary positive real and $\mu_0(A)$ is finite, $\mu_0(A)\le\sum_{k=0}^{\infty}\mu_0(A_k)$. [L2, L3, L4, L5, L6, F2, F3, F4, F5, F6, F8]

2.1 Suppose instead $\mu_0(A)=+\infty$ and put $T:=\sum_{k=0}^{\infty}\mu_0(A_k)$; if $T=+\infty$ then $\mu_0(A)\le T$ holds, and if $T<+\infty$ a contradiction follows. Fix a disjoint box presentation $A=\bigcup_{j<q}B_j$; some $B_{j_0}=B(a,b)$ has infinite volume, hence is nonempty with $a_{i_0}=-\infty$ or $b_{i_0}=+\infty$ for some $i_0<n$. Take $y\in B_{j_0}$ and put $\alpha_i:=y_i-1$ when $a_i=-\infty$ and $\alpha_i:=(a_i+y_i)/2$ otherwise, so that $a_i<\alpha_i<y_i$ and $c:=\prod_{i<n}u_i>0$, where $u_i:=y_i-\alpha_i$ for $i \ne i_0$ and $u_{i_0}:=1$. For a real $R$ exceeding every $|\alpha_i|$ and every $|y_i|$, the box $D_R$ with parameter pairs $(\alpha_i,y_i]$ for $i \ne i_0$ and $(\alpha_{i_0},R]$, respectively $(-R,y_{i_0}]$, in coordinate $i_0$ according as $b_{i_0}=+\infty$ or $a_{i_0}=-\infty$, satisfies $D_R \subseteq B_{j_0}\cap(-R,R]^n \subseteq A\cap(-R,R]^n$ and has volume at least $(R-|\alpha_{i_0}|-|y_{i_0}|)c$. On the other hand $A\cap(-R,R]^n$ is elementary of finite volume and is the disjoint union of the elementary sets $A_k\cap(-R,R]^n$, so step 1.4 and monotonicity give $\mu_0\big(A\cap(-R,R]^n\big)\le\sum_{k=0}^{\infty}\mu_0\big(A_k\cap(-R,R]^n\big)\le T$; taking $R$ above $(T/c)+|\alpha_{i_0}|+|y_{i_0}|+1$ by the Archimedean property contradicts this. [step 1.4, L1, L2, L3, L7, L8, F2, F7, F8, F9, F10]

3.1 Steps 1.3, 1.4 and 2.1 give $\mu_0(A)=\sum_{k=0}^{\infty}\mu_0(A_k)$ in every case, which with steps 1.1 and 1.2 makes $\mu_0$ a sigma-finite premeasure on $\mathcal{E}_n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, F1] ∎
