---
id: thm-composition-with-a-continuous-function
kind: theorem
title: "If $f$ is integrable on $[a,b]$ with values in $[m,M]$ and $\\varphi$ is continuous on $[m,M]$, then $\\varphi \\circ f$ is integrable"
status: draft
origin: session
deps: [thm-riemann-criterion, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, def-continuity-real, thm-heine-cantor-r, cor-boundedness-theorem-r, def-uniform-continuity-real, thm-heine-borel-r, def-open-cover-r, lem-finite-sum-laws, def-finite-sum, def-oscillation, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field, lem-of-abs-value, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-a-composition-of-integrable-functions-that-is-not-integrable]
justified_by: []
aliases: [thm-continuous-after-integrable]
landmark: true
short: "continuous after integrable is integrable"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a < b$ and $m \le M$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

and let $\varphi : [m,M] \to \mathbb{R}$ be continuous on $[m,M]$
([[def-continuity-real]]). Then the composite
$\varphi \circ f : [a,b] \to \mathbb{R}$ is integrable on $[a,b]$.

**The order of the hypotheses is the whole content, and it does not reverse.**
What is assumed is *continuous after integrable*: the outer function is the
continuous one. The mirror statement — $\varphi$ integrable and $f$ continuous,
or both merely integrable — is **false**, and the witness is
the counterexample of the companion page on the
companion page. Nothing here asserts anything about that direction.

## Facts & Assumptions

**Given:** Reals $a < b$ and $m \le M$, an integrable $f : [a,b] \to \mathbb{R}$ with values in $[m,M]$, a continuous $\varphi : [m,M] \to \mathbb{R}$, and a real $\varepsilon > 0$. Write $h := \varphi \circ f$.

[L1] Riemann's criterion: a bounded $u$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(u,P) - L(u,P) < \eta$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P = (n,t)$ of $[a,b]$ and bounded $u$: $U(u,P) - L(u,P) = \sum_{i<n}\bigl(M_i(u) - m_i(u)\bigr)\Delta_i$ with $\Delta_i > 0$ and $\sum_{i<n}\Delta_i = b - a$, and $M_i(u) - m_i(u) = \omega_u(I_i) = \sup\{\,|u(x)-u(y)| : x,y \in I_i\,\}$ ([[def-darboux-sums]], [[def-oscillation]], [[def-partition-and-refinement]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] $[m,M]$ with $m \le M$ and $[a,b]$ are closed bounded intervals, hence compact ([[thm-heine-borel-r]], [[def-open-cover-r]], [[def-interval]]).

[L4] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L5] Heine-Cantor: a continuous real function on a compact $K \subseteq \mathbb{R}$ is uniformly continuous on $K$, so for every real $\eta > 0$ there is a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \eta$ for all $s,t \in K$ with $|s-t| < \delta_0$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L6] Finite sums: additivity, scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1, 2 and 4).

[L7] Ordered-field arithmetic and the absolute value: multiplying an inequality by a nonnegative quantity and adding constants preserve it, the order is total and transitive, a positive real has a positive inverse, and $|u| \le c$ follows from $-c \le u \le c$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[lem-of-abs-value]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$, for instance $\eta' = \eta \cdot 2^{-1}$; and the Archimedean property in reciprocal form ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 $[m,M]$ is compact, so $\varphi$ is bounded there: fix a real $K \ge 0$ with $|\varphi(s)| \le K$ for every $s \in [m,M]$. Hence $|h(x)| \le K$ for every $x \in [a,b]$ and $h$ is bounded. [given, L3, L4, choose]

1.2 By [L5] applied on the compact $[m,M]$ with $\eta := \varepsilon$, fix a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \varepsilon$ whenever $s,t \in [m,M]$ and $|s-t| < \delta_0$; then put $\delta := \min\{\delta_0 \cdot 2^{-1},\ \varepsilon \cdot 2^{-1}\}$, a positive real with $\delta < \delta_0$ and $\delta < \varepsilon$. [given, L3, L5, L7, L8, choose]

2.1 So $|\varphi(s)-\varphi(t)| \le \varepsilon$ whenever $s,t \in [m,M]$ satisfy $|s-t| \le \delta$, since $\delta < \delta_0$. [step 1.2, L7]

2.2 Since $\delta > 0$, so is $\delta^{2}$, and [L1] supplies a partition $P = (n,t)$ of $[a,b]$ with $U(f,P) - L(f,P) < \delta^{2}$. [step 1.2, given, L1, L7, choose]

3.1 Fix $i < n$ and write $\Omega_i := M_i(f) - m_i(f) \ge 0$. If $\Omega_i \le \delta$ then any $x,y \in I_i$ have $|f(x)-f(y)| \le \Omega_i \le \delta$ with $f(x),f(y) \in [m,M]$, so $|h(x)-h(y)| \le \varepsilon$ by step 2.1, whence $M_i(h) - m_i(h) \le \varepsilon$ by [L2]. [step 2.1, step 2.2, L2, L7]

3.2 If instead $\Omega_i > \delta$ then $\Omega_i/\delta > 1$, while $M_i(h) - m_i(h) \le 2K$ always, by [L2] and step 1.1. [step 1.1, step 2.2, L2, L7]

4.1 In both cases $\bigl(M_i(h)-m_i(h)\bigr)\Delta_i \le \varepsilon\,\Delta_i + \bigl(2K/\delta\bigr)\Omega_i\Delta_i$: in the first case the second summand is nonnegative and the first alone dominates, and in the second case $(2K/\delta)\Omega_i\Delta_i \ge 2K\Delta_i$ dominates by itself. [step 3.1, step 3.2, L7]

5.1 Summing over $i < n$ with [L6] and using $\sum_{i<n}\Delta_i = b-a$ and [L2] gives $U(h,P)-L(h,P) \le \varepsilon(b-a) + (2K/\delta)\bigl(U(f,P)-L(f,P)\bigr)$. [step 4.1, L2, L6, L7]

6.1 By step 2.2 the second summand is below $(2K/\delta)\delta^{2} = 2K\delta$, and $\delta < \varepsilon$ by step 1.2, so $U(h,P)-L(h,P) < \varepsilon\,(b-a+2K)$. [step 2.2, step 5.1, L7]

7.1 Let a real $\eta > 0$ be given. Running steps 1.2 to 6.1 with $\varepsilon := \eta/(b-a+2K+1)$, a positive real since $b-a+2K+1 > 0$, produces a partition $P$ with $U(h,P)-L(h,P) < \eta\,(b-a+2K)/(b-a+2K+1) < \eta$. [step 6.1, L7, L8]

8.1 As $\eta > 0$ was arbitrary and $h$ is bounded by step 1.1, [L1] makes $h = \varphi\circ f$ integrable on $[a,b]$. [step 1.1, step 7.1, L1] ∎

## Remarks

- **Step 4.1 is what replaces the usual split of the index range.** The classical proof separates the indices into a good set $G$ and a bad set $B$ and sums over each; this library has no sum over a subset of an index range ([[lem-finite-sum-laws]] is stated for $\sum_{i<n}$), so the split is carried instead by a single inequality valid at *every* index, whose two summands are exactly the two contributions. The bound obtained is the same one.

- **The hypothesis $f[\,[a,b]\,] \subseteq [m,M]$ is what makes $\varphi\circ f$ defined at all**, and $m,M$ exist because an integrable $f$ is bounded ([[def-darboux-sums]]). Taking $[m,M]$ to be any interval containing the range of $f$ is legitimate and changes nothing, since a continuous function on a larger compact interval restricts to a continuous one.

- **What the theorem does not say.** It does not say that $\varphi\circ f$ is integrable when $\varphi$ is merely integrable, and it does not say that $\int_a^b \varphi\circ f$ can be computed from $\int_a^b f$. The first is refuted on the companion page. For the second, take $\varphi(t) = t^{2}$ on $[0,1]$ with $f$ the constant $1/2$ and with $g$ the indicator of $[0,1/2]$: both are integrable with integral $1/2$, while $\int_0^1 \varphi\circ f = 1/4$ and $\int_0^1 \varphi\circ g = 1/2$, so $\int_a^b \varphi\circ f$ is not a function of $\int_a^b f$.

- **Forward reference, orientation only.** The reversal refuted on the companion page is [[cex-a-composition-of-integrable-functions-that-is-not-integrable]]; nothing above depends on it.
