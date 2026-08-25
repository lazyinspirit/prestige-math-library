---
id: cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc
kind: corollary
title: "The modulus of a holomorphic function on a closed polydisc is bounded by its supremum on the distinguished boundary"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-boundary-maximum-modulus-principle, def-balls-and-polydiscs-in-complex-euclidean-space, def-separately-holomorphic-function, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, thm-induction-principle, thm-heine-borel-rn, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, rem-complex-euclidean-space-dictionary, thm-heine-cantor-metric, def-complex-domain, def-metric-topology, def-metric-ball, lem-complex-conjugation-and-modulus-laws, def-convex-subset-of-euclidean-space, def-vector-valued-functions-limits-and-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $a\in\mathbb C^m$, let $r$ be a polyradius, and let $f$ be
continuous on the closed polydisc $\overline\Delta_r(a)$ and holomorphic on
$\Delta_r(a)$. Then

$$\sup_{\overline\Delta_r(a)}|f|=\sup_{\Gamma_r(a)}|f|,$$

and both suprema are attained. For $m\ge2$ the bounding set $\Gamma_r(a)$ is a
proper subset of the topological boundary of $\overline\Delta_r(a)$, so this is
stronger than the bound by the topological boundary.

## Facts & Assumptions

**Given:** $f$ continuous on $\overline\Delta_r(a)$ and holomorphic on $\Delta_r(a)$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] If $\Omega$ is a bounded complex domain and $g$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then there is $\zeta\in\partial\Omega$ with $|g(z)|\le|g(\zeta)|$ for every $z\in\overline\Omega$ ([[thm-boundary-maximum-modulus-principle]]).

[L2] $\Delta_r(a)$, $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are defined coordinatewise by $|z_k-a_k|<r_k$, $\le r_k$ and $=r_k$; polydiscs are convex; and for $m\ge2$ the distinguished boundary is a proper subset of the topological boundary ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[def-convex-subset-of-euclidean-space]]).

[L3] A holomorphic function of several variables is continuous and separately holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]), separate holomorphy being holomorphy of each slice on its open slice domain ([[def-separately-holomorphic-function]]).

[L4] If a property holds at $0$ and passes from $p$ to $p+1$, it holds for every natural number ([[thm-induction-principle]]).

[L5] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]), and on a nonempty compact subset every continuous real function attains a maximum and a minimum ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[L6] A continuous map from a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L7] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]).

[L8] A set is open exactly when each of its points admits a ball inside it, a set is closed when its complement is open, and $B(x,s)=\{y:d(x,y)<s\}$ ([[def-metric-topology]], [[def-metric-ball]]).

[L9] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L10] Continuity of a map into $\mathbb R^n$ from a subset of a metric space is the usual $\varepsilon$–$\delta$ condition with the Euclidean norm ([[def-vector-valued-functions-limits-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 The sets $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are closed and bounded by [L2] and [L9], hence compact and nonempty by [L5], so $|f|$ attains a maximum on each by [L5] and both suprema are attained real numbers; write $P=\sup_{\Gamma_r(a)}|f|$. By [L6] the function $f$ is uniformly continuous on $\overline\Delta_r(a)$. [given, L2, L5, L6, L9]

2.1 For a polyradius $s$ with $s_k<r_k$ for every $k$, put $A_p:=\sup\{|f(w)|:w\in\overline\Delta_s(a)\text{ and }|w_k-a_k|=s_k\text{ for every }k<p\}$ for $0\le p\le m$; these are attained maxima by the argument of step 1.1 applied to the corresponding closed bounded sets, and $A_m=\sup_{\Gamma_s(a)}|f|$. [step 1.1, L2, L5]

2.2 Let $0<t<1$ and take $s=tr$. Every $w\in\Gamma_{tr}(a)$ satisfies $a+(w-a)/t\in\Gamma_r(a)$ and $\lVert(a+(w-a)/t)-w\rVert=(1/t-1)\lVert w-a\rVert$ by [L9], which tends to $0$ as $t\to1$ uniformly in $w$ because $\lVert w-a\rVert$ is bounded on $\overline\Delta_r(a)$; so by the uniform continuity of step 1.1 and [L10], $\sup_{\Gamma_{tr}(a)}|f|\le P+\varepsilon$ once $t$ is close enough to $1$, for any prescribed $\varepsilon>0$. [step 1.1, L9, L10]

3.1 Fix such an $s$ and $p<m$, and let $w\in\overline\Delta_s(a)$ have $|w_k-a_k|=s_k$ for $k<p$. Replacing the $p$th coordinate of $w$ by any $\xi$ with $|\xi-a_p|<r_p$ leaves the point in $\Delta_r(a)$, because the other coordinates satisfy $|w_k-a_k|\le s_k<r_k$; so by [L3] the slice $g(\xi)$ is holomorphic on the disc $D(a_p,r_p)$ and in particular continuous on the closed disc $\overline D(a_p,s_p)$, which is the closure of $D(a_p,s_p)$ since every point of the circle is a limit of interior points along its radius and the closed disc is closed by [L8] and [L9]. [step 2.1, L2, L3, L8, L9]

4.1 The disc $D(a_p,s_p)$ is a bounded complex domain by [L2], [L7] and [L8], being nonempty, open, convex hence connected, and bounded, and its topological boundary is the circle $|\xi-a_p|=s_p$ by step 3.1. So [L1] applied to the slice gives $\xi$ on that circle with $|f(w)|\le|g(\xi)|$, and the point obtained from $w$ by putting $\xi$ in the $p$th slot lies in $\overline\Delta_s(a)$ with its first $p+1$ coordinates on their circles; hence $|f(w)|\le A_{p+1}$. Taking the supremum over such $w$ gives $A_p\le A_{p+1}$. [step 2.1, step 3.1, L1, L2, L7, L8]

5.1 By [L4] the chain of step 4.1 gives $A_0\le A_m$, that is $\sup_{\overline\Delta_s(a)}|f|\le\sup_{\Gamma_s(a)}|f|$ for every polyradius $s$ with $s_k<r_k$. [step 2.1, step 4.1, L4]

6.1 Let $z\in\overline\Delta_r(a)$ and $\varepsilon>0$. For $t<1$ the point $a+t(z-a)$ lies in $\Delta_{tr}(a)\subseteq\overline\Delta_{tr}(a)$ by [L2] and [L9], so steps 5.1 and 2.2 give $|f(a+t(z-a))|\le\sup_{\Gamma_{tr}(a)}|f|\le P+\varepsilon$ for $t$ close enough to $1$; letting $t\to1$ and using the continuity of $f$ at $z$ gives $|f(z)|\le P+\varepsilon$, hence $|f(z)|\le P$. [step 5.1, step 2.2, L2, L9, L10]

7.1 Step 6.1 gives $\sup_{\overline\Delta_r(a)}|f|\le P$, and the reverse inequality holds because $\Gamma_r(a)\subseteq\overline\Delta_r(a)$ by [L2]; so the two suprema are equal and attained by step 1.1. For $m\ge2$ the set $\Gamma_r(a)$ is by [L2] a proper subset of the topological boundary, so the bound is by a strictly smaller set than in the one-variable statement. [step 1.1, step 6.1, L2] ∎
