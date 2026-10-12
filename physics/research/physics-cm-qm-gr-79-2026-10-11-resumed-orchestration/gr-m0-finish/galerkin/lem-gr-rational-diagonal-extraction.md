---
id: lem-gr-rational-diagonal-extraction
kind: lemma
title: "Locally uniform extraction for X_1-bounded, X_0-Lipschitz families with compact X_1-bounded subsequences"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-banach-space, def-normed-subspace, def-complete-metric-space, def-metric-convergence, lem-metric-limits-unique, def-continuous-map-top, lem-q-and-irrationals-dense-r, thm-rationals-countable, lem-subset-of-countable, def-countable, thm-of-archimedean, def-countable-choice]
dependency_roles:
  def-banach-space: mathematical-premise
  def-normed-subspace: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-metric-convergence: mathematical-premise
  lem-metric-limits-unique: mathematical-premise
  def-continuous-map-top: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-rationals-countable: mathematical-premise
  lem-subset-of-countable: mathematical-premise
  def-countable: mathematical-premise
  thm-of-archimedean: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the Rellich/Ascoli compactness step in the finite-dimensional approximation, where a bounded family of approximate solutions is reduced to a subsequence converging uniformly on compact time intervals"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 3 (Sobolev Spaces), Section 3.10 (compactness results) and Chapter 7 (Hyperbolic Equations): diagonal subsequence extraction and uniform convergence on compact subintervals"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $X_0$ be a complete normed space over
$\mathbb R$ or $\mathbb C$ ([[def-banach-space]],
[[def-complete-metric-space]]) and let $X_1\subseteq X_0$ be a linear subspace
carrying a norm $\|\cdot\|_1$ such that ([[def-normed-subspace]]):

**(i)** there is $\kappa\ge0$ with $\|x\|_0\le\kappa\|x\|_1$ for every
$x\in X_1$; and

**(ii)** every sequence in $X_1$ bounded in $\|\cdot\|_1$ has a subsequence
converging in $X_0$ ([[def-metric-convergence]]).

Let $T>0$, $R\ge0$, $C\ge0$, and for $j\in\mathbb N$ let
$f_j:(-T,T)\to X_1$ satisfy
$$\|f_j(t)\|_1\le R,\qquad \|f_j(t)-f_j(t')\|_0\le C\,|t-t'|\qquad(t,t'\in(-T,T),\ j\in\mathbb N).$$

Then there are a strictly increasing sequence $j_1<j_2<\cdots$ in $\mathbb N$
and a continuous map $f:(-T,T)\to X_0$ ([[def-continuous-map-top]]) such that
$f_{j_n}\to f$ uniformly on every compact subinterval of $(-T,T)$; moreover
$\|f(t)-f(t')\|_0\le C\,|t-t'|$ for all $t,t'\in(-T,T)$.

## Facts & Assumptions

**Given:** Countable Choice, a complete normed space $X_0$, a linear subspace
$X_1\subseteq X_0$ with norm $\|\cdot\|_1$ satisfying (i) and (ii), real numbers
$T>0$, $R\ge0$, $C\ge0$, and the family $(f_j)$ with the two displayed bounds.

[L1] $X_0$ is a complete metric space for the norm metric and a convergent
sequence in it has exactly one limit ([[def-complete-metric-space]],
[[def-metric-convergence]], [[lem-metric-limits-unique]]).

[L2] The inclusion bound (i) and the compactness-type property (ii) hold by
hypothesis; in particular each $f_j(t)$ lies in $X_0$ and
$\|f_j(t)\|_0\le\kappa R$ ([[def-normed-subspace]]).

[L3] $\mathbb Q$ is dense in $\mathbb R$, so every nonempty open interval
contains a rational; $\mathbb Q$ is countably infinite and every subset of it is
at most countable; a set is countably infinite exactly when it is equinumerous
with $\mathbb N$, so it admits an enumeration by the natural numbers
([[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]],
[[lem-subset-of-countable]], [[def-countable]]).

[L4] Archimedean property: for every $x\in\mathbb R$ there is an integer
$n\ge1$ with $x<n$ ([[thm-of-archimedean]]).

[L5] Countable Choice is retained as an ambient hypothesis ([[def-countable-choice]]). The subsequence construction below makes only least-index selections from subsets of the natural numbers and therefore requires no additional choice principle.

## Proof

**Proof technique:** direct.

1.1 (The countable set of test points.) Put $D:=\mathbb Q\cap(-T,T)$; then $D$ is at most countable by [L3], and it is infinite: choosing an integer $m\ge1$ with $m>1/T$ [L4], the rationals $1/(m+n)$, $n\ge0$, are pairwise distinct and lie in $(0,T)\subseteq D$. Hence $D$ is countably infinite and we fix an enumeration $D=\{q_1,q_2,\dots\}$ with pairwise distinct $q_i$ [L3]. [L3, L4]

1.2 (Finite covers of bounded sequence ranges.) Let $(x_j)$ be any $X_1$-bounded sequence and fix $\varepsilon>0$. Its range can be covered by finitely many open $X_0$-balls of radius $\varepsilon$ centred at its terms. Otherwise define $j_1=1$ and recursively let $j_{l+1}$ be the least index whose term lies outside the union of the radius-$\varepsilon$ balls centred at $x_{j_1},\ldots,x_{j_l}$. The assumed failure of every finite cover ensures this index exists. These canonically defined terms have pairwise distances at least $\varepsilon$, so no subsequence converges in $X_0$, contrary to (ii). The same conclusion applies to every subsequence indexed by an infinite subset $S\subseteq\mathbb N$, enumerated in increasing order. [L2, given]

1.3 (Deterministic diagonal extraction.) Put $S_0=\mathbb N$. For $n\ge1$, start with $S_{n-1}$ and refine its infinite index set successively at the rational times $q_1,\ldots,q_n$. At the refinement for $q_i$, let $S$ be the current infinite set. By step 1.2, finitely many radius-$2^{-n}$ balls centred at $f_j(q_i)$ with $j\in S$ cover the sequence range indexed by $S$. At least one such ball contains $f_j(q_i)$ for infinitely many $j\in S$, since a finite union of finite index sets is finite. Let $\ell$ be the least index in $S$ whose centred ball has this property, and replace $S$ by $\{j\in S:\|f_j(q_i)-f_\ell(q_i)\|_0<2^{-n}\}$. This is an infinite subset of the preceding set. After the finitely many refinements define it to be $S_n$. All selections are least natural-number indices, so the recursive construction is determined without dependent choice. Define $k_n$ to be the least element of $S_n$ greater than $k_{n-1}$, with $k_0=0$. The $S_n$ are infinite and nested, so the $k_n$ exist and increase strictly. For fixed $i$ and $n\ge i$, any two terms $f_j(q_i),f_l(q_i)$ with $j,l\in S_n$ have distance less than $2^{1-n}$, by the refinement at $q_i$ and subsequent subset restrictions. Since $k_m\in S_m\subseteq S_n$ for $m\ge n$, the sequence $(f_{k_m}(q_i))_m$ is Cauchy and converges by [L1]. [step 1.2, step 1.1, L1, L2, L5, construct]

2.1 (Uniform Cauchy on a compact subinterval.) Fix $0<T'<T$ and $\varepsilon>0$ and put $\delta:=\varepsilon/(3(C+1))$. Choose an integer $M\ge1$ with $2T'/M<\delta$ [L4]. For $i=0,\dots,M-1$ the interval $(-T'+2T'i/M,\,-T'+2T'(i+1)/M)$ is a nonempty open interval, so it contains a rational $q_i'$ (finitely many choices [L3]), and each $q_i'\in D$. By step 1.3, for each $i$ the sequence $n\mapsto f_{k_n}(q_i')$ is Cauchy in $X_0$, so there is $J_i$ with $\|f_{k_n}(q_i')-f_{k_m}(q_i')\|_0<\varepsilon/3$ for $n,m\ge J_i$; put $J:=\max_iJ_i$. Let $t\in[-T',T']$ and choose $i$ with $|t-q_i'|<\delta$: the intervals cover $[-T',T']$ with mesh $2T'/M<\delta$ and $q_i'$ lies in the $i$-th interval. Then for $n,m\ge J$ the triangle inequality gives $\|f_{k_n}(t)-f_{k_m}(t)\|_0\le\|f_{k_n}(t)-f_{k_n}(q_i')\|_0+\|f_{k_n}(q_i')-f_{k_m}(q_i')\|_0+\|f_{k_m}(q_i')-f_{k_m}(t)\|_0<2C\delta+\varepsilon/3<\varepsilon$, using the Lipschitz hypothesis and $2C\delta\le 2C\varepsilon/(3(C+1))<2\varepsilon/3$; hence $(f_{k_n})$ is uniformly Cauchy on $[-T',T']$. [step 1.3, L3, L4, given, algebra]

3.1 (The limit function.) Let $t\in(-T,T)$ and choose $T'$ with $|t|<T'<T$. By step 2.1 the sequence $(f_{k_n}(t))_n$ is Cauchy in $X_0$, so by completeness it has a limit $f(t)\in X_0$, uniquely determined [L1]; passing to the limit $m\to\infty$ in the estimate of step 2.1 at fixed $n\ge J$ gives $\|f_{k_n}(t)-f(t)\|_0\le\varepsilon$ for every $t\in[-T',T']$, so $f_{k_n}\to f$ uniformly on $[-T',T']$. Every compact subinterval $[a,b]$ of $(-T,T)$ lies in some $[-T',T']$ with $T'<T$, namely for any $T'$ with $\max(|a|,|b|)<T'<T$, so the convergence is uniform on every compact subinterval. [step 2.1, L1, algebra]

4.1 (Continuity.) Let $t,t'\in(-T,T)$ and choose $T'>\max(|t|,|t'|)$ with $T'<T$. Norms of a convergent sequence converge to the norm of the limit (reverse triangle inequality), so by step 3.1 and the hypothesis $\|f(t)-f(t')\|_0=\lim_{n\to\infty}\|f_{k_n}(t)-f_{k_n}(t')\|_0\le C|t-t'|$; hence $f$ is Lipschitz with constant $C$ and therefore continuous ([[def-continuous-map-top]]), which with step 3.1 is the assertion. [step 3.1, given, algebra] ∎

## Remarks

- **Role.** This is the extraction engine of [[lem-gr-galerkin-compactness]]
  (with $X_1=H^s$, $X_0=H^{s-1}$) and of the time-derivative convergence in
  [[lem-gr-galerkin-limit-is-classical-solution]] (with $X_1=H^{s-1}$,
  $X_0=H^{s-2}$). Property (ii) is supplied there by the compact-embedding
  clause of the compactness lemma and the needed completeness of $X_0$ by
  [[lem-gr-periodic-sobolev-completeness]].
- **The diagonal is over the rationals only.** No uncountable family of time
  points is used, and no Ascoli theorem is assumed: the only compactnesses
  entering are the pointwise ones in hypothesis (ii), combined with
  equicontinuity and completeness. The nested index sets use deterministic least-index ball selections; Countable Choice is retained in the contract but no dependent-choice inference is made.
