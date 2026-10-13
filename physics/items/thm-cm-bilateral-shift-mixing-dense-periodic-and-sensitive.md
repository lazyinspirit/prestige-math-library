---
id: thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive
kind: theorem
title: "The bilateral two-symbol shift is continuous, topologically mixing, has dense periodic points and is sensitive; it is chaotic in the stated sense"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-bilateral-shift-space-and-cylinders, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, lem-cm-bilateral-shift-metric-and-sequential-compactness, def-metric-space, def-metric-ball, def-metric-topology, def-metric-continuity, def-dense-top, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums]
dependency_roles:
  def-cm-bilateral-shift-space-and-cylinders: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-dense-top: mathematical-premise
  def-series: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. Ulcigrai, MATH36206/MATHM6206 Topological and Symbolic Dynamics, Section 2.6 (periodic points of Sigma_A: Corollary 2.6.1) and Section 2.7, Theorem 2.7.1 (topological Markov chains: aperiodic transition matrices give topologically mixing shifts)"
      url: "https://m-artigiani.github.io/files/SisDin-Part2.pdf"
    - title: "E. Glasner and B. Weiss, Sensitive dependence on initial conditions (Nonlinearity 6, 1993; updated author version), Section 0 (sensitivity) and Section 2 (sensitivity of subshifts)"
      url: "https://www.math.tau.ac.il/~glasner/papers/sensi.pdf"
verification:
  precheck: pass
---

## Statement

Let $X=\{0,1\}^{\mathbb Z}$, let $d$ be the metric of [[lem-cm-bilateral-shift-metric-and-sequential-compactness]] and let $\sigma:X\to X$, $\sigma(s)_k=s_{k+1}$, be the bilateral shift of [[def-cm-bilateral-shift-space-and-cylinders]]. Then:

1. $\sigma$ is continuous ([[def-metric-continuity]]);
2. $\sigma$ is topologically mixing;
3. the periodic points of $\sigma$ are dense in $X$;
4. $\sigma$ has sensitive dependence on initial conditions with sensitivity constant $\delta=1$;

consequently $\sigma$ is chaotic in the stated sense ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]).

## Facts & Assumptions

**Given:** The shift space $(X,d)$, the shift map $\sigma$ and the cylinders $[w]_{p,q}=\{s:s_k=w_k\text{ for }p\le k\le q\}$.

[F1] $d$ is a metric; every cylinder is open, and every nonempty open subset of $X$ contains a cylinder ([[lem-cm-bilateral-shift-metric-and-sequential-compactness]], [[def-metric-topology]]).

[F2] $\sigma$ is a bijection with $\sigma(s)_k=s_{k+1}$ and inverse $\sigma^{-1}(s)_k=s_{k-1}$; for $m\ge1$, $\sigma^m(s)_k=s_{k+m}$ ([[def-cm-bilateral-shift-space-and-cylinders]]).

[F3] For $s,t\in X$, the defining series of $d$ are nonnegative and summable with $\sum_{k\ge0}2^{-k}=2$ and $\sum_{k\ge m+1}2^{-k}=2^{-m}$ ([[def-cm-bilateral-shift-space-and-cylinders]], [[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[F4] A map $g:X\to X$ is continuous at $s$ when for every $\varepsilon>0$ there is $\delta>0$ with $g(B(s,\delta))\subseteq B(g(s),\varepsilon)$ ([[def-metric-continuity]], [[def-metric-ball]]).

[F5] A subset $D\subseteq X$ is dense when every nonempty open subset meets $D$ ([[def-dense-top]]).

[F6] The list of properties defining "chaotic in the stated sense" is in [[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]: continuity, topological mixing, dense periodic points and sensitive dependence.

## Proof

**Proof technique:** direct; use cylinders as a basis and prescribe finitely many coordinates.

1.1 For $s,t\in X$ and any $m\ge0$, if $s_j=t_j$ for $|j|\le m+1$, then $\sigma(s)_j=\sigma(t)_j$ for $|j|\le m$; hence $\sigma([s]_{F_{m+1}})\subseteq[\sigma(s)]_{F_m}$. By clause 2 of [F1], $B(s,2^{-(m+1)})\subseteq[s]_{F_{m+1}}$ and $[\sigma(s)]_{F_m}\subseteq\overline B(\sigma(s),2^{1-m})$, so $d(s,t)<2^{-(m+1)}$ implies $d(\sigma s,\sigma t)\le2^{1-m}$; given $\varepsilon>0$ choose $m$ with $2^{1-m}<\varepsilon$ and $\delta=2^{-(m+1)}$. This proves continuity at every $s$, which is clause 1. [given, F1, F2, F3, F4, algebra]

1.2 Let $U,V\subseteq X$ be nonempty and open. By [F1] there are cylinders $[w]_{p,q}\subseteq U$ and $[w']_{p',q'}\subseteq V$. Let $n$ be an integer with $(p,\dots,q)\cap(p'+n,\dots,q'+n)=\emptyset$; this holds for every $n>q-p'$. Define $s\in X$ by $s_k:=w_k$ for $p\le k\le q$, $s_k:=w'_{k-n}$ for $p'+n\le k\le q'+n$, and $s_k:=0$ for all remaining $k$; the two prescriptions are compatible because their index sets are disjoint. Then $s\in[w]_{p,q}$, and for $j\in[p',q']$ one has $\sigma^n(s)_j=s_{j+n}=w'_{j}$, so $\sigma^n(s)\in[w']_{p',q'}$. Hence $\sigma^n(U)\cap V\ne\emptyset$ for every $n>q-p'$, which exhibits the integer $N$ required by topological mixing. [given, F1, F2, algebra]

1.3 Let $U\subseteq X$ be nonempty and open and choose a cylinder $[w]_{p,q}\subseteq U$ by [F1]; put $L:=q-p+1\ge1$ and define $s\in X$ by $s_k:=w_{p+((k-p)\bmod L)}$, the $L$-periodic extension of the word $w$. Then $s_k=w_k$ for $p\le k\le q$, so $s\in[w]_{p,q}\subseteq U$, and $s_{k+L}=s_k$ for every $k$; by [F2], $\sigma^L(s)_k=s_{k+L}=s_k$ for all $k$, so $s$ is a periodic point of $\sigma$. Thus every nonempty open set meets $\operatorname{Per}(\sigma)$, and [F5] gives clause 3. [given, F1, F2, algebra]

1.4 Let $x\in X$ and $\varepsilon>0$; choose an integer $k\ge1$ with $2^{-k}<\varepsilon$ and define $y\in X$ by $y_j:=x_j$ for $j\ne k$ and $y_k:=1-x_k$. Then $d(x,y)=2^{-k}<\varepsilon$ because exactly one term of the defining sum is nonzero and equal to $2^{-k}$. Moreover $\sigma^k(x)_0=x_k\ne y_k=\sigma^k(y)_0$, so in the defining sum for $d(\sigma^kx,\sigma^ky)$ the term with index $0$ equals $2^0\cdot1=1$ and all terms are nonnegative; hence $d(\sigma^kx,\sigma^ky)\ge1$. Therefore $\delta=1$ is a sensitivity constant, which is clause 4. [given, F2, F3, algebra]

2.1 Clauses 1-4 and [F6] give that $\sigma$ is continuous, topologically mixing, has dense periodic points and is sensitive; by definition, $\sigma$ is chaotic in the stated sense. [step 1.1, 1.2, 1.3, 1.4, F6] ∎

## Remarks

- Compactness of $(X,d)$ is not used in the proof: mixing, density of periodic points and sensitivity are checked directly from cylinders. The companion lemma [[lem-cm-bilateral-shift-metric-and-sequential-compactness]] proves that $X$ is sequentially compact, and compact under the Axioms of Countable and Dependent Choice, so the example also matches the usual convention in which a chaotic system is a continuous self-map of a compact metric space.

- The integer $k$ in step 1.4 is positive, so the witness sequence $y$ is obtained by flipping a coordinate in the future tail; flipping a coordinate at index $k\le0$ would instead give $d(x,y)=2^{-|k|}$ but the displayed iterate argument uses $\sigma^k$ with $k\ge1$. The sensitivity constant $1$ is not claimed to be optimal: any $0<\delta\le1$ is also a sensitivity constant, and no statement is made about the largest such constant.
