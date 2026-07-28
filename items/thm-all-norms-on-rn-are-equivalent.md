---
id: thm-all-norms-on-rn-are-equivalent
kind: theorem
title: "For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent"
status: published
origin: session
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-equivalent-norms, def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-heine-borel-rn, thm-extreme-value-metric, thm-metric-continuity-characterisations, def-metric-compactness, def-metric-bounded-diameter, def-metric-topology, def-metric-ball, lem-standard-basis-of-f-n, def-metric-continuity, lem-of-inverse-positive, def-complete-ordered-field, thm-of-square-roots, lem-metrics-on-rn, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the published metric $d_2$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and a norm $N$ on $\mathbb{R}^{n}$; write $S := \{\, x \in \mathbb{R}^{n} : \lVert x\rVert_2 = 1 \,\}$.

[L1] For $n \ge 1$: $C := \max\{N(e_k) : k<n\}$ exists with $C \ge 0$, $N(x) \le C\lVert x\rVert_1$, $\lVert x\rVert_1 \le \sqrt{\iota(n)}\lVert x\rVert_2$, and $N$ is continuous as a map $(\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 2, 3, 4).

[L2] Equivalence of norms is an equivalence relation, and $c M \le N \le C M$ with $c, C > 0$ is what it means ([[def-equivalent-norms]]).

[L3] Heine-Borel in $\mathbb{R}^{n}$ for $n \ge 1$: a subset of $(\mathbb{R}^{n},d_2)$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]] clause 2, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L4] Extreme value theorem: a continuous real-valued function on a **nonempty** compact metric space attains a least value ([[thm-extreme-value-metric]]).

[L5] Continuity characterisations: a map of metric spaces continuous at every point has closed preimages of closed sets ([[thm-metric-continuity-characterisations]], clause (c)).

[L6] Balls, openness and boundedness ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]): $U$ is open when every point of $U$ has a ball inside $U$; $A$ is bounded when $A = \emptyset$ or $A \subseteq B(x_0,r)$ for some $x_0$ and real $r>0$.

[L7] The norm axioms (N1) and (N2), and nonnegativity of a norm ([[def-norm-and-normed-space]]).

[L8] The standard basis vector $e_0 \in \mathbb{R}^{n}$ exists for $n \ge 1$, with $e_0(0) = 1$ and $e_0(j) = 0$ for $0 \ne j < n$ ([[lem-standard-basis-of-f-n]]); hence $\lVert e_0\rVert_2 = \sqrt{1} = 1$ ([[def-p-norms-on-rn]], [[thm-of-square-roots]]).

[L9] Inverses: $u > 0$ gives $u^{-1} > 0$, and trichotomy of the order of $\mathbb{R}$ ([[lem-of-inverse-positive]], [[def-complete-ordered-field]]).

[L10] Continuity at a point in the $\varepsilon$-$\delta$ form, and the metric subspace $(A, d_A)$ with $d_A$ the restriction of $d$ ([[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{1\} \subseteq \mathbb{R}$ is closed: if $y \ne 1$ then $r := |y-1| > 0$ and the ball $B(y,r)$ omits $1$, so the complement of $\{1\}$ is open. [L6, L9]

1.2 $\lVert\cdot\rVert_2$ is itself a norm on $\mathbb{R}^{n}$, so by [L1] applied to it, $\lVert\cdot\rVert_2 : (\mathbb{R}^{n},d_2) \to (\mathbb{R},d_{\mathbb{R}})$ is continuous. [L1, L7]

1.3 $S \subseteq B(0,2)$, since $x \in S$ gives $d_2(x,0) = \lVert x\rVert_2 = 1 < 2$; so $S$ is bounded. [L6, L7]

1.4 $e_0 \in S$, because $\lVert e_0\rVert_2 = 1$; this is where $n \ge 1$ is used, since for $n = 0$ there is no index $0 < n$ and no such vector. So $S \ne \emptyset$. [L8]

1.5 For every $a \in S$ and every real $\varepsilon > 0$, a $\delta > 0$ witnessing continuity of $N$ at $a$ as a map on $\mathbb{R}^{n}$ also witnesses it for the restriction $N|_S$ on the metric subspace $(S, d_S)$, because $d_S$ is the restriction of $d_2$ and the condition is quantified over fewer points; so $N|_S$ is continuous. [L1, L10]

1.6 Put $C' := C\sqrt{\iota(n)} + 1$, a real $> 0$. By [L1], $N(x) \le C\lVert x\rVert_1 \le C\sqrt{\iota(n)}\lVert x\rVert_2 \le C'\lVert x\rVert_2$, the last step because $\lVert x\rVert_2 \ge 0$. [L1, L7]

2.1 $S$ is the preimage of $\{1\}$ under the continuous $\lVert\cdot\rVert_2$, hence closed in $\mathbb{R}^{n}$. [step 1.1, step 1.2, L5]

3.1 $S$ is a compact subset of $(\mathbb{R}^{n},d_2)$, being closed and bounded. [step 1.3, step 2.1, L3]

4.1 By the extreme value theorem applied to the nonempty compact metric space $(S,d_S)$ and the continuous $N|_S$, there is $x_{\min} \in S$ with $N(x_{\min}) \le N(x)$ for every $x \in S$; put $c := N(x_{\min})$. [step 1.4, step 1.5, step 3.1, L4]

5.1 $c > 0$: from $x_{\min} \in S$ we get $\lVert x_{\min}\rVert_2 = 1 \ne 0$, so $x_{\min} \ne 0$ by (N1) for $\lVert\cdot\rVert_2$, so $N(x_{\min}) \ne 0$ by (N1) for $N$, and $N(x_{\min}) \ge 0$; trichotomy leaves $c > 0$. [step 4.1, L7, L9]

5.2 Let $x \ne 0$. Then $\lVert x\rVert_2 > 0$ by (N1) and nonnegativity, so $t := 1/\lVert x\rVert_2 > 0$ and $u := t\,x$ satisfies $\lVert u\rVert_2 = |t|\,\lVert x\rVert_2 = 1$ by (N2); hence $u \in S$ and $c \le N(u) = |t|\,N(x) = N(x)/\lVert x\rVert_2$, that is $c\,\lVert x\rVert_2 \le N(x)$. [step 4.1, L7, L9]

6.1 For $x = 0$ both $c\lVert x\rVert_2$ and $N(x)$ are $0$ by (N1), so $c\lVert x\rVert_2 \le N(x)$ holds for every $x \in \mathbb{R}^{n}$. [step 5.2, L7]

7.1 Steps 5.1, 6.1 and 1.6 give $c\lVert x\rVert_2 \le N(x) \le C'\lVert x\rVert_2$ with $c, C' > 0$, so every norm $N$ on $\mathbb{R}^{n}$ is equivalent to $\lVert\cdot\rVert_2$. [step 5.1, step 6.1, step 1.6, L2]

8.1 Given two norms $M$ and $N$ on $\mathbb{R}^{n}$, each is equivalent to $\lVert\cdot\rVert_2$ by step 7.1, so $M$ is equivalent to $N$ by symmetry and transitivity of the relation. [step 7.1, L2] ∎

## Remarks

- **What the proof spends, and where it stops.** The only nonelementary ingredients are compactness of the Euclidean unit sphere, obtained from [[thm-heine-borel-rn]], and the extreme value theorem [[thm-extreme-value-metric]]. Heine-Borel in $\mathbb{R}^{n}$ is proved by bisection and uses no choice principle, and the extreme value theorem is a theorem of ZF ([[rem-compactness-choice-ledger-metric]]), so this theorem costs no choice either.

- **The sphere is where the argument is finite-dimensional.** The step that fails outside $\mathbb{R}^{n}$ is step 3.1: closed and bounded gives compact by [[thm-heine-borel-rn]], a theorem about $\mathbb{R}^{n}$ for a natural $n$ and about nothing else. The companion page exhibits a real vector space carrying two inequivalent norms, and the same space with a closed bounded set that is not compact. **This remark is a statement about this proof and about that witness; no claim is made here about normed spaces in general, a theory this library has not built.**

- **The constants are not canonical.** Nothing in the statement fixes $c$ or $C'$, and the proof produces one admissible pair, not the best one. Sharp constants for the three named norms on $\mathbb{R}^{2}$ are computed on the companion page.
