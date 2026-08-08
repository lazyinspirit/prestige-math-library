---
id: lem-compact-implies-closed-and-bounded-r
kind: lemma
title: "A compact subset of $\\mathbb{R}$ is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-open-cover-r, def-open-and-closed-in-r, def-bounded-set, def-neighbourhood-r, def-interval, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-abs-value, lem-of-triangle-inequality, lem-finite-set-has-max, def-max-min, lem-of-naturals-positive, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact]
aliases: []
landmark: false
short: "compact $\\Rightarrow$ closed and bounded"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.34, 2.35)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]). Then $K$ is
closed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).

Two covers do the work, and they use the Archimedean property in its two
different forms. Boundedness is read off the cover of $\mathbb{R}$ by the
intervals $(-n,n)$, which needs the **cofinal** form, that the canonical naturals
exceed every real ([[thm-of-archimedean]]). Closedness is read off the cover of
$K$, for a point $x$ outside it, by the sets
$\{\, y : |y - x| > 1/n \,\}$, which needs the **reciprocal** form, that the
reciprocals of the naturals get below every positive real
([[cor-archimedean-reciprocal]]); the cofinal form alone does not deliver it.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$. Throughout, $n$ denotes both a natural number $\ge 1$ and the canonical natural $n \cdot 1_{\mathbb{R}}$ of $\mathbb{R}$, as is standard.

[L1] Open cover, finite subfamily and compactness: every open cover of $K$ has a subcover that is empty or of the form $\{U_0, \dots, U_p\}$ with $p \in \mathbb{N}$ ([[def-open-cover-r]]).

[L2] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $K$ is closed when $\mathbb{R} \setminus K$ is open; each of the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $\mathbb{R}$ is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L4] $K$ is bounded when there are $\ell, u$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L5] Archimedean property, cofinal form: for every $z \in \mathbb{R}$ there is a natural $n \ge 1$ with $z < n$ ([[thm-of-archimedean]]).

[L6] Archimedean property, reciprocal form: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] Absolute value: $|z| \ge 0$, $|z| \ge z$, $|z| \ge -z$, and $|z| = 0$ exactly when $z = 0$ ([[lem-of-abs-value]]).

[L8] Triangle inequality: $|p + q| \le |p| + |q|$ ([[lem-of-triangle-inequality]]).

[L9] Every nonempty finite set of reals has a maximum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L10] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ and $m \le n$ in $\mathbb{N}$ gives $m \cdot 1_{\mathbb{R}} \le n \cdot 1_{\mathbb{R}}$ ([[lem-of-naturals-positive]]); reciprocation of positives reverses the order ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 For each natural $n \ge 1$ put $W_n := (-n, n)$, an open set by [L2]. The family $\{\, W_n : n \ge 1 \,\}$ covers $\mathbb{R}$, hence covers $K$: given $y \in \mathbb{R}$, [L5] supplies $n \ge 1$ with $|y| < n$, and then $y \le |y| < n$ and $-y \le |y| < n$ by [L7], so $-n < y < n$. [L2, L5, L7]

1.2 Let $x \in \mathbb{R} \setminus K$ and for each natural $n \ge 1$ put $V_n := \{\, y \in \mathbb{R} : |y - x| > 1/n \,\}$, which is defined because $n > 0$ has a positive inverse by [L10]. Each $V_n$ is open: given $y \in V_n$, put $\delta := |y - x| - 1/n > 0$; for $z \in N_\delta(y)$ the triangle inequality [L8] gives $|y - x| = |(y - z) + (z - x)| \le |y - z| + |z - x| < \delta + |z - x|$, whence $|z - x| > |y - x| - \delta = 1/n$ and $z \in V_n$. The family $\{\, V_n : n \ge 1 \,\}$ covers $K$: for $y \in K$ one has $y \ne x$, so $|y - x| > 0$ by [L7], and [L6] supplies $n \ge 1$ with $1/n < |y - x|$, that is $y \in V_n$. [L3, L6, L7, L8, L10]

2.1 Apply compactness to the cover of step 1.1. If the finite subcover is empty then $K = \varnothing$ and $-1 \le y \le 1$ holds vacuously for $y \in K$; otherwise there are naturals $n_0, \dots, n_p \ge 1$ with $K \subseteq W_{n_0} \cup \dots \cup W_{n_p}$, and putting $N := \max\{n_0, \dots, n_p\}$ by [L9] we get $W_{n_i} \subseteq W_N$ for each $i$, since $n_i \le N$ gives $-N \le -n_i$ and $n_i \le N$ in $\mathbb{R}$ by [L10]. Hence $K \subseteq W_N = (-N,N)$ and $-N \le y \le N$ for every $y \in K$, so $K$ is bounded. [step 1.1, L1, L2, L4, L9, L10]

2.2 Apply compactness to the cover of step 1.2. If the finite subcover is empty then $K = \varnothing$ and $|y - x| > 1$ holds vacuously for $y \in K$, so take $M := 1$; otherwise there are naturals $n_0, \dots, n_p \ge 1$ with $K \subseteq V_{n_0} \cup \dots \cup V_{n_p}$, and putting $M := \max\{n_0, \dots, n_p\}$ by [L9] we get $V_{n_i} \subseteq V_M$ for each $i$, since $n_i \le M$ gives $0 < 1/M \le 1/n_i$ by [L10]. In both cases $K \subseteq V_M$, that is, $|y - x| > 1/M$ for every $y \in K$. [step 1.2, L1, L9, L10]

3.1 Consequently $N_{1/M}(x) \cap K = \varnothing$, since $y \in K$ has $|y - x| > 1/M$ while $y \in N_{1/M}(x)$ would give $|y - x| < 1/M$, which trichotomy forbids; so $N_{1/M}(x) \subseteq \mathbb{R} \setminus K$. As $x$ was an arbitrary point of $\mathbb{R} \setminus K$, that complement is open and $K$ is closed. [step 2.2, L2, L3, L10]

4.1 $K$ is bounded by step 2.1 and closed by step 3.1, which is the assertion. [step 2.1, step 3.1] ∎

## Remarks

- **Why the reciprocal form is unavoidable in step 1.2.** The sets covering $K$
  must exhaust the complement of the single point $x$, and the natural way to do
  that with open sets is to exclude a shrinking closed neighbourhood of $x$. The
  radii of those neighbourhoods have to become smaller than $|y - x|$ for each
  $y \in K$, and that is exactly the statement of
  [[cor-archimedean-reciprocal]]. The cofinal form [[thm-of-archimedean]] says
  the naturals get large, which is what step 1.1 needs and is a different
  assertion; the corollary exists in this library precisely so that the
  inversion between them is done once.

- **The converse needs completeness and this lemma does not.** Nothing above
  uses the least-upper-bound property except through the Archimedean property;
  beyond the ordered-field axioms the proof asks only for that property and for
  the existence of a maximum of a finite set. The converse, that a closed bounded
  set is compact, is false in $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]]) and true in $\mathbb{R}$
  ([[thm-heine-borel-characterisation-r]]).

- **Neither conclusion can be strengthened to an equivalence on its own.** A
  closed set need not be compact and a bounded set need not be compact, and both
  failures are recorded in [[cex-unbounded-closed-set-not-compact]].
