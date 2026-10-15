---
id: lem-sup-metric-is-a-metric
kind: lemma
title: "The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ is a metric on the bounded real-valued functions on a nonempty set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-bounded-set, lem-sup-unique, def-complete-ordered-field,
       lem-of-triangle-inequality, lem-of-abs-value, def-abs-value,
       lem-finite-set-has-max, def-max-min, lem-of-add-order, def-ordered-field,
       rem-sup-conventions]
forward_refs: [def-pointwise-uniform-and-uniformly-cauchy-convergence,
               rem-uniform-convergence-agrees-with-the-later-uniform-topology]
justified_by: []
aliases: [def-sup-metric]
landmark: true
short: "sup metric on $\\mathcal{B}(S)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $S$ be a nonempty set. Call a function $f : S \to \mathbb{R}$ **bounded** when
its range $f[S] = \{f(s) : s \in S\}$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]), and write

$$\mathcal{B}(S) := \{\, f : f \text{ is a bounded function } S \to \mathbb{R} \,\}.$$

For $f, g \in \mathcal{B}(S)$ put $D(f,g) := \{\, |f(s) - g(s)| : s \in S \,\}$ and

$$d_\infty(f,g) := \sup D(f,g).$$

This is well defined: $D(f,g)$ is nonempty because $S$ is, and it is bounded
above (step 1.1 below), so its least upper bound exists
([[def-complete-ordered-field]]) and is unique ([[lem-sup-unique]]).

**Then $d_\infty$ is a metric on $\mathcal{B}(S)$** ([[def-metric-space]]), the
**supremum metric** (also called the uniform metric).

The hypotheses ensure that the formula is a finite real-valued metric for every
pair in the stated function space. Boundedness of $f$ and $g$ makes $D(f,g)$
bounded above, and nonemptiness of $S$ makes it nonempty. Some unbounded pairs
can still have a finite supremum, but allowing all real-valued functions would
not give a finite-valued metric: for example, on $S=\mathbb{R}$ the functions
$f(s)=s$ and $g(s)=0$ make $D(f,g)$ unbounded above
([[rem-sup-conventions]]).

## Facts & Assumptions

**Given:** A nonempty set $S$ and bounded functions $f, g, h \in \mathcal{B}(S)$, with $\ell_f \le f(s) \le u_f$, $\ell_g \le g(s) \le u_g$ and $\ell_h \le h(s) \le u_h$ for all $s \in S$; a fixed $s_0 \in S$.

[L1] Bounded subset of $\mathbb{R}$: $T$ is bounded when there are $\ell, u \in \mathbb{R}$ with $\ell \le t \le u$ for every $t \in T$ ([[def-bounded-set]]).

[L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound, that is an upper bound below every upper bound; it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L5] A two-element subset of $\mathbb{R}$ has a maximum, which is one of the two elements and bounds both ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Order arithmetic: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below; and by trichotomy $a \le 0$ together with $a \ge 0$ gives $a = 0$.

## Proof

**Proof technique:** direct.

1.1 For every $s \in S$ the value $|f(s) - g(s)|$ is $f(s) - g(s)$ or $g(s) - f(s)$, and $f(s) - g(s) \le u_f - \ell_g$ while $g(s) - f(s) \le u_g - \ell_f$; so $M := \max\{u_f - \ell_g,\ u_g - \ell_f\}$ bounds $D(f,g)$ above, and since $s_0 \in S$ makes $D(f,g)$ nonempty, $d_\infty(f,g) = \sup D(f,g)$ exists and is unique. [given, L1, L2, L3, L5, L6]

1.2 Symmetry (M2): $|g(s) - f(s)| = |-(f(s) - g(s))| = |f(s) - g(s)|$ for every $s \in S$, so $D(g,f)$ and $D(f,g)$ are the same subset of $\mathbb{R}$ and therefore have the same supremum. [L2, L3]

2.1 Separation (M1): $d_\infty(f,g)$ bounds $D(f,g)$ above, so $d_\infty(f,g) \ge |f(s_0) - g(s_0)| \ge 0$; if $d_\infty(f,g) = 0$ then $|f(s) - g(s)| \le 0$ and $|f(s) - g(s)| \ge 0$ for every $s$, hence $f(s) = g(s)$ for every $s$ and $f = g$; conversely if $f = g$ then $D(f,g) = \{0\}$, whose least upper bound is $0$. [step 1.1, L2, L3, L6]

2.2 For every $s \in S$: $|f(s) - h(s)| = |(f(s) - g(s)) + (g(s) - h(s))| \le |f(s) - g(s)| + |g(s) - h(s)| \le d_\infty(f,g) + d_\infty(g,h)$, the last inequality because each supremum bounds its own set above. [step 1.1, L2, L4, L6]

3.1 Triangle inequality (M3): step 2.2 says the real number $d_\infty(f,g) + d_\infty(g,h)$ is an upper bound of $D(f,h)$, and $d_\infty(f,h)$ is the least upper bound of that set, so $d_\infty(f,h) \le d_\infty(f,g) + d_\infty(g,h)$. [step 2.2, L2]

4.1 The function $d_\infty$ therefore satisfies (M1) by step 2.1, (M2) by step 1.2 and (M3) by step 3.1, so it is a metric on $\mathcal{B}(S)$. [step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **Why the bounded functions and not all functions.** For unbounded $f$ the set $D(f,g)$ need not be bounded above and $\sup D(f,g)$ then does not exist, so $d_\infty$ would not be a function into $\mathbb{R}$ at all. Texts that write $d_\infty(f,g) = +\infty$ in that case are working in the extended real line, which is introduced on a later page. The suprema taken here are real numbers, and the extended real line is not used for them ([[rem-sup-conventions]], [[rem-metric-axiom-conventions]]).
- **The supremum need not be attained**, so $d_\infty(f,g)$ is genuinely a supremum and not a maximum; the companion page carries a witness.
- **The name "uniform metric" points at later material.** The quantified definition of uniform convergence of functions appears in [[def-pointwise-uniform-and-uniformly-cauchy-convergence]]. The later [[rem-uniform-convergence-agrees-with-the-later-uniform-topology]] records its agreement with convergence in $d_\infty$; this lemma proves only that $d_\infty$ is a metric on the stated bounded-function space.
