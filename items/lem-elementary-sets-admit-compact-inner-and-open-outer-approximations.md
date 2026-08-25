---
id: lem-elementary-sets-admit-compact-inner-and-open-outer-approximations
kind: lemma
title: "Every elementary set is squeezed in volume between a compact subset and an elementary set whose interior contains it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-set-in-rn, def-half-open-box, thm-elementary-volume-is-well-defined, prop-elementary-volume-is-finitely-additive-and-monotone, lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes, def-metric-topology, def-metric-interior-closure-boundary, def-metric-ball, def-metric-bounded-diameter, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, thm-metric-open-set-algebra, lem-metrics-on-rn, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-translation-of-a-set-in-rn, def-multidimensional-rectangle-and-volume, cor-archimedean-reciprocal, lem-finite-sum-laws, def-finite-sum, def-extended-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, let $\mu_0$ be elementary volume on the elementary sets
$\mathcal{E}_n$ ([[thm-elementary-volume-is-well-defined]],
[[def-elementary-set-in-rn]]), and for $A \in \mathcal{E}_n$ and a real
$\delta > 0$ put

$$A^{+\delta} \;:=\; \bigcup\,\{\, A + s \;:\; s \in \mathbb{R}^n \text{ with } |s_i| \le \delta \text{ for every } i<n \,\},$$

the translates being those of [[def-translation-of-a-set-in-rn]]. Then:

1. $A^{+\delta}$ is an elementary set, it is determined by $A$ and $\delta$
   alone, it contains $A$, and every point of $A$ is an interior point of
   $A^{+\delta}$ in $(\mathbb{R}^n,d_2)$ ([[def-metric-interior-closure-boundary]],
   [[lem-metrics-on-rn]]).
2. For every real $\varepsilon > 0$ there is $m \in \mathbb{N}$ with
   $\mu_0\big(A^{+1/(m+1)}\big) \le \mu_0(A) + \varepsilon$.
3. If $\mu_0(A) < +\infty$, then for every real $\varepsilon > 0$ there are an
   elementary set $A'$ and a compact set $K \subseteq \mathbb{R}^n$
   ([[def-metric-compactness]]) with $A' \subseteq K \subseteq A$ and
   $\mu_0(A) \le \mu_0(A') + \varepsilon$.

Nothing in claim 1 or claim 2 depends on a presentation of $A$, so the
assignment $\delta \mapsto A^{+\delta}$ and the least $m$ satisfying claim 2 are
both functions of the data and involve no selection.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, an elementary set $A \subseteq \mathbb{R}^n$, and a real $\delta>0$. A presentation of $A$ is written $A=\bigcup_{j<q}B_j$ with $B_j=B(a^j,b^j)$ pairwise disjoint half-open boxes, and $\ell^j_i := b^j_i - a^j_i$ when these are real.

[L1] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$; a box is nonempty exactly when $a_i < b_i$ for every $i < n$; $\operatorname{vol}(\varnothing) := 0$; and for a nonempty box $\operatorname{vol}(B) := +\infty$ when $a_i = -\infty$ or $b_i = +\infty$ for some $i<n$, and $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ when every $a_i$ and every $b_i$ is real ([[def-half-open-box]]).

[L2] Every elementary set is the union of a finite list of pairwise disjoint half-open boxes, and a subset $E\subseteq\mathbb{R}^n$ is an **elementary set** when there are a natural number $m$ and a list $B_0, \dots, B_{m-1}$ of half-open boxes with $E=\bigcup_{j<m}B_j$ ([[lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes]], [[def-elementary-set-in-rn]]).

[L3] For every $n\ge1$, there is exactly one function $\mu_0 : \mathcal{E}_n \to [0,+\infty]$ whose value at $A$ is the sum of the volumes of the members of any presentation of $A$ by a finite list of pairwise disjoint half-open boxes ([[thm-elementary-volume-is-well-defined]]).

[L4] Elementary volume is finitely additive on pairwise disjoint elementary sets, monotone, and finitely subadditive ([[prop-elementary-volume-is-finitely-additive-and-monotone]]).

[F1] The **translate** of $E \subseteq \mathbb{R}^n$ by $a$ is $E+a:=\{x+a:x\in E\}$ ([[def-translation-of-a-set-in-rn]]).

[F2] $d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }$ and $d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}$ are metrics on $\mathbb{R}^n$ for $n \ge 1$ ([[lem-metrics-on-rn]]).

[F3] $\lVert x\rVert_\infty \le \lVert x\rVert_2$ for every $x \in \mathbb{R}^n$, and $\lVert x-y\rVert_2 = d_2(x,y)$, $\lVert x-y\rVert_\infty = d_\infty(x,y)$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], claim 3; [[lem-p-norms-are-norms-and-induce-the-published-metrics]], claim 3; [[def-p-norms-on-rn]]).

[F4] $x$ is an **interior point** of $A$ if $B(x,r) \subseteq A$ for some $r$, where $B(x,r) := \{\, y \in X : d(x,y) < r \,\}$, and a subset $U$ is open in $(X,d)$ if every $x\in U$ has such a ball inside $U$ ([[def-metric-interior-closure-boundary]], [[def-metric-ball]], [[def-metric-topology]]).

[F5] For reals $a_k \le b_k$ $(k<n)$ the box $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$ is a compact subset of $(\mathbb{R}^n, d_2)$, and a subset $K \subseteq \mathbb{R}^n$ is compact if and only if $K$ is closed in $\mathbb{R}^n$ and bounded ([[thm-heine-borel-rn]], claims 1 and 2; [[def-multidimensional-rectangle-and-volume]]).

[F6] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[F7] If $n \ge 1$ and $U_0, \dots, U_{n-1}$ are open, then $U_0 \cap \dots \cap U_{n-1}$ is open ([[thm-metric-open-set-algebra]], claim 3).

[F8] $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$ and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-bounded-diameter]]).

[F9] For every real $\varepsilon > 0$ there is a natural number $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[F10] For sequences of reals, $\sum_{k<n}(a_k+b_k) = \sum_{k<n}a_k+\sum_{k<n}b_k$; $\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; if $a_k \le b_k$ whenever $0\le k<n$ then $\sum_{k<n}a_k \le \sum_{k<n}b_k$; and $\prod_{k<n}(a_kb_k) = (\prod_{k<n}a_k)(\prod_{k<n}b_k)$ ([[lem-finite-sum-laws]], claims 1, 2, 4 and 6).

[F11] Finite sums and finite products of a sequence of reals are defined by the recursions $\Sigma_0 = 0$, $\Sigma_{\sigma(n)} = \Sigma_n + a_n$ and $\Pi_0 = 1$, $\Pi_{\sigma(n)} = \Pi_n \cdot a_n$ ([[def-finite-sum]]).

[F12] For $a,b \in \overline{\mathbb{R}}$, $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$; and $a+b:=-\infty$ when $a=-\infty$ and $b\ne+\infty$, or $b=-\infty$ and $a\ne+\infty$ ([[def-extended-reals]]).

## Proof

**Proof technique:** direct.

1.1 For a natural number $r$, reals $0 \le u_i \le v_i$ $(i<r)$ and a real $V \ge 1$ with $v_i \le V$ for every $i<r$, one has $\prod_{i<r}v_i - \prod_{i<r}u_i \le V^{\,r}\sum_{i<r}(v_i-u_i)$: at $r = 0$ both products are the empty product $1$ and both sides are $0$, and passing from $r$ to $r+1$ uses $\prod_{i<r+1}v_i - \prod_{i<r+1}u_i = v_r\big(\prod_{i<r}v_i-\prod_{i<r}u_i\big) + (v_r-u_r)\prod_{i<r}u_i$ together with $\prod_{i<r}u_i \le V^{\,r}$ and $v_r \le V$, so the estimate follows by induction on $r$. [F10, F11, algebra]

1.2 For a box $B(a,b)$ and $s \in \mathbb{R}^n$ one has $B(a,b)+s = B(a+s,b+s)$, where $a+s$ is the parameter $i \mapsto a_i+s_i$, and the two boxes have the same volume; consequently, for a real $\delta>0$, $B(a,b)^{+\delta} = B(a-\delta\mathbf{1},\,b+\delta\mathbf{1})$ when $B(a,b) \ne \varnothing$ and $\varnothing^{+\delta} = \varnothing$, and $A^{+\delta} = \bigcup_{j<q}B_j^{+\delta}$ for any presentation of $A$, so $A^{+\delta}$ is elementary while its definition mentions no presentation. [L1, L2, F1, F12]

1.3 For $x,y \in \mathbb{R}^n$ and $i<n$ one has $|y_i - x_i| \le d_\infty(x,y) \le d_2(x,y)$. [F2, F3]

1.4 If $\mu_0(A) < +\infty$ then every nonempty box of a disjoint presentation of $A$ has all parameters real, since an infinite parameter would make its volume, and hence the sum, equal to $+\infty$. Put
$$M:=1+\sum_{\substack{j<q\\ B_j\ne\varnothing}}\sum_{i<n}\bigl(|a^j_i|+|b^j_i|\bigr),$$
and $M:=1$ when every box is empty. Then $M$ is a real number and every endpoint of every nonempty box has modulus at most $M$. Every point of a nonempty box therefore has every coordinate bounded by $M$, hence has Euclidean norm at most $nM$; thus every box lies in the ball about the origin of radius $1+nM$. Therefore $A$ is bounded and so is every subset of $A$. [L1, L2, L3, F2, F8, F10]

2.1 For claim 1, taking $s = 0$ gives $A \subseteq A^{+\delta}$; and if $x \in A$ and $d_2(x,y) < \delta$ then $s := y-x$ satisfies $|s_i| \le d_2(x,y) < \delta$ for every $i<n$ by step 1.3, so $y = x+s \in A+s \subseteq A^{+\delta}$, whence the ball $B(x,\delta)$ of $(\mathbb{R}^n,d_2)$ lies in $A^{+\delta}$ and $x$ is an interior point of it. [step 1.2, step 1.3, F1, F4]

2.2 For claim 2, if $\mu_0(A) = +\infty$ the inequality holds with $m = 0$; otherwise fix a disjoint presentation, let $V \ge 1$ be a real with $\ell^j_i + 2 \le V$ for every nonempty $B_j$ and every $i<n$, and let $0 < \delta \le 1$: finite subadditivity and step 1.2 give $\mu_0(A^{+\delta}) \le \sum_{j<q}\operatorname{vol}\big(B_j^{+\delta}\big)$, an empty $B_j$ contributing $0$ and a nonempty one contributing $\prod_{i<n}(\ell^j_i+2\delta)$, so step 1.1 applied with $v_i = \ell^j_i+2\delta$ and $u_i = \ell^j_i$ bounds each term by $\operatorname{vol}(B_j) + 2nV^{\,n}\delta$ and hence $\mu_0(A^{+\delta}) \le \mu_0(A) + 2nqV^{\,n}\delta$. [step 1.1, step 1.2, L1, L3, L4, F10]

3.1 For claim 3, assume $\mu_0(A) < +\infty$, fix a disjoint presentation with all parameters of the nonempty $B_j$ real by step 1.4, and define $\ell_i^j=b_i^j-a_i^j$ for nonempty $B_j$ and $\ell_i^j=0$ for empty $B_j$. Let $V$ be as in step 2.2, let $0<\delta\le1$, and put $B_j^{-\delta} := B(a^j+\delta\mathbf{1},\,b^j-\delta\mathbf{1})$ for nonempty $B_j$ and $B_j^{-\delta}:=\varnothing$ otherwise, $A' := \bigcup_{j<q}B_j^{-\delta}$ and $K := \bigcup\{\,[a^j+\delta\mathbf{1},\,b^j-\delta\mathbf{1}] : j<q \text{ and } B_j\ne\varnothing \text{ and } a^j_i+\delta \le b^j_i-\delta \text{ for every } i<n\,\}$: then $A' \subseteq K \subseteq A$, each listed closed rectangle is compact and hence closed, a finite union of closed sets is closed by complementation, $K$ is bounded because $K \subseteq A$, so $K$ is compact; and $\operatorname{vol}(B_j^{-\delta}) = \prod_{i<n}\max\{\ell^j_i-2\delta,\,0\}$ in both the empty and the nonempty case, so step 1.1 applied with $v_i = \ell^j_i$ and $u_i = \max\{\ell^j_i-2\delta,0\}$, whose difference is at most $2\delta$, gives $\mu_0(A) \le \mu_0(A') + 2nqV^{\,n}\delta$. [step 1.1, step 1.4, L1, L3, L4, F5, F6, F7, F8, F10]

4.1 Given a real $\varepsilon>0$, apply [F9] to the positive real $\varepsilon/(2nqV^{\,n}+1)$ to obtain $k \ge 1$ with $1/k < \varepsilon/(2nqV^{\,n}+1)$, and put $m := k-1$, so that $\delta := 1/(m+1) = 1/k$ satisfies $0<\delta\le1$ and $2nqV^{\,n}\delta \le \varepsilon$; steps 2.2 and 3.1 then give claims 2 and 3, and step 2.1 gives claim 1. [step 2.1, step 2.2, step 3.1, F9] ∎
