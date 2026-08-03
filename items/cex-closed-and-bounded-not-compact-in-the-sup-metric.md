---
id: cex-closed-and-bounded-not-compact-in-the-sup-metric
kind: counterexample
title: "In the bounded real-valued functions on $\\mathbb{N}$ with the supremum metric, the closed unit ball is closed and bounded and is not compact: the indicator functions of the singletons are pairwise at distance $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-closed-and-bounded-implies-compact-in-every-metric-space, lem-sup-metric-is-a-metric, def-metric-compactness, def-totally-bounded, thm-compact-implies-complete-and-totally-bounded, lem-compactness-is-intrinsic, def-metric-bounded-diameter, def-metric-topology, thm-metric-open-set-algebra, def-metric-ball, def-sequence, def-natural-numbers, def-bounded-set, thm-well-ordering-principle, lem-pigeonhole, lem-subset-of-countable, def-countable, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
short: "the closed unit ball of the sup metric"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every metric space a closed and bounded subset is compact
([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]).

The witness is the space $\mathcal{B}(\mathbb{N})$ of bounded functions
$\mathbb{N} \to \mathbb{R}$ with the supremum metric
$d_\infty(f,g) = \sup\{\,|f(s)-g(s)| : s \in \mathbb{N}\,\}$
([[lem-sup-metric-is-a-metric]]), together with the closed unit ball

$$K \;:=\; \{\, f \in \mathcal{B}(\mathbb{N}) : d_\infty(f, \mathbf{0}) \le 1 \,\}$$

about the zero function $\mathbf{0}$. The set $K$ is closed in
$\mathcal{B}(\mathbb{N})$ ([[def-metric-topology]]) and bounded
([[def-metric-bounded-diameter]]), and it is not compact
([[def-metric-compactness]]): the indicator functions $e_n$ of the singletons
$\{n\}$ lie in $K$ and satisfy $d_\infty(e_m,e_n) = 1$ whenever $m \ne n$, so no
finite $1/2$-net for $K$ can exist.

This is the same failure as in
[[fs-closed-and-bounded-implies-compact-in-every-metric-space]], in the space
where it matters analytically: closed bounded sets of a function space are
routinely not compact.

## Facts & Assumptions

**Given:** The set $\mathcal{B}(\mathbb{N})$ of bounded functions $\mathbb{N} \to \mathbb{R}$ with the supremum metric $d_\infty$, the zero function $\mathbf{0}$, the closed unit ball $K$, and for $n \in \mathbb{N}$ the function $e_n$ with $e_n(n) = 1$ and $e_n(s) = 0$ for $s \ne n$.

[L1] $d_\infty(f,g) = \sup\{|f(s)-g(s)| : s \in \mathbb{N}\}$ is a metric on $\mathcal{B}(\mathbb{N})$, and the supremum is a member-free upper bound that is least among upper bounds ([[lem-sup-metric-is-a-metric]], [[def-bounded-set]], [[def-metric-space]]).

[L2] The closed ball $\bar B(x,r) = \{y : d(x,y) \le r\}$ is closed, and a subset contained in a ball is bounded ([[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L3] A compact metric space is totally bounded; a subset is compact exactly when the metric subspace is; and a finite $\varepsilon$-net is a finite subset whose $\varepsilon$-balls cover the space ([[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] $\mathbb{N}$ is not equinumerous with any natural number, a subset of $\mathbb{N}$ bounded above is finite, and an injection puts its domain in bijection with its image ([[lem-pigeonhole]], [[lem-subset-of-countable]], [[def-countable]], [[def-injection-surjection-bijection]], [[def-sequence]], [[def-natural-numbers]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $e_n$ is a bounded function $\mathbb{N} \to \mathbb{R}$, its range being contained in $\{0,1\}$, so $e_n \in \mathcal{B}(\mathbb{N})$; and $d_\infty(e_n,\mathbf{0}) = \sup\{|e_n(s)| : s \in \mathbb{N}\} = 1$, so $e_n \in K$. [L1]

2.1 For $m \ne n$ the set $\{|e_m(s) - e_n(s)| : s \in \mathbb{N}\}$ is $\{0,1\}$, since the value is $1$ at $s = m$ and at $s = n$ and $0$ elsewhere; hence $d_\infty(e_m,e_n) = 1$. [L1, step 1.1]

2.2 $K$ is the closed ball $\bar B(\mathbf{0},1)$, hence closed in $\mathcal{B}(\mathbb{N})$, and it is contained in $B(\mathbf{0},2)$, hence bounded. [L2, step 1.1]

2.3 Suppose $K$ had a finite $1/2$-net $F$; then $F$ is empty or listable as $\{y_0, \dots, y_p\}$, and it is not empty because $K$ contains $e_0$. Define $\varphi : \mathbb{N} \to \sigma(p)$ by letting $\varphi(n)$ be the least $i \le p$ with $d_\infty(e_n, y_i) < 1/2$, which exists because the $1/2$-balls about the $y_i$ cover $K$ and $e_n \in K$. [L3, L4, step 1.1]

3.1 $\varphi$ is injective: if $\varphi(m) = \varphi(n) = i$ with $m \ne n$, then $d_\infty(e_m,e_n) \le d_\infty(e_m,y_i) + d_\infty(y_i,e_n) < 1/2 + 1/2 = 1$, contradicting step 2.1. [L1, step 2.1, step 2.3]

4.1 So $\mathbb{N}$ is in bijection with $\varphi[\mathbb{N}]$, a subset of $\mathbb{N}$ bounded above by $p$ and therefore finite, making $\mathbb{N}$ equinumerous with a natural number, which is false. [L5, step 3.1]

5.1 Hence $K$ has no finite $1/2$-net, so $K$ is not totally bounded and therefore not compact, while being closed and bounded by step 2.2; the claim of [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] is refuted. [L3, step 2.2, step 4.1] ∎

## Remarks

**What goes wrong is room, not size.** The ball $K$ has diameter $2$, so it is small in the metric sense; but it contains infinitely many points that are pairwise at distance $1$, so no finite family of small balls reaches all of them. That is exactly the failure of total boundedness, and by [[thm-metric-compactness-equivalences]] it is one of the two conditions compactness is equivalent to.

**What the argument does and does not settle.** It shows that $K$ fails total boundedness, and that alone rules out compactness by [L3]. Nothing above is claimed about whether $K$ is complete; the point of the witness is that closedness and boundedness, the two conditions that suffice in $\mathbb{R}^n$ ([[thm-heine-borel-rn]]), do not suffice here.
