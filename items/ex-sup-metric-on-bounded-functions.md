---
id: ex-sup-metric-on-bounded-functions
kind: example
title: "The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ on the bounded real-valued functions on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-bounded-set, lem-sup-epsilon, lem-sup-unique,
       def-complete-ordered-field, lem-sup-metric-is-a-metric,
       def-isometry-and-metric-embedding, lem-real-line-is-a-metric-space,
       cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive,
       lem-of-naturals-positive, def-sequence, def-natural-numbers,
       lem-of-abs-value, def-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "sup metric, worked"
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
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
pipeline_run: null
---

## Example

Let $S$ be a nonempty set, let $\mathcal{B}(S)$ be the set of bounded functions
$S \to \mathbb{R}$ and let $d_\infty(f,g) = \sup\{|f(s)-g(s)| : s \in S\}$ be the
supremum metric; that this is a metric is [[lem-sup-metric-is-a-metric]] and is
quoted here rather than reproved. This example records two things about it.

1. **The constants form an isometric copy of the real line.** For $c \in
   \mathbb{R}$ let $\hat c \in \mathcal{B}(S)$ be the constant function with
   value $c$. Then $c \mapsto \hat c$ is an isometric embedding of
   $(\mathbb{R}, d_{\mathbb{R}})$ into $(\mathcal{B}(S), d_\infty)$
   ([[def-isometry-and-metric-embedding]], [[lem-real-line-is-a-metric-space]]):
   $$d_\infty(\hat c, \hat c\,') = |c - c\,'| \qquad (c, c\,' \in \mathbb{R}).$$
2. **The supremum need not be attained.** Take $S = \mathbb{N}$, so that
   $\mathcal{B}(\mathbb{N})$ is the set of bounded sequences of reals
   ([[def-sequence]]), and put
   $$f(k) := 1 - \frac{1}{k+1} \quad (k \in \mathbb{N}), \qquad g := \hat 0 .$$
   Then $f, g \in \mathcal{B}(\mathbb{N})$, $d_\infty(f,g) = 1$, and
   $|f(k) - g(k)| < 1$ for every $k \in \mathbb{N}$. So $d_\infty(f,g)$ is a
   supremum that is not a maximum, and no single point of $S$ realises the
   distance.

The index shift in $1/(k+1)$ is forced: $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and sequences here are indexed from $0$
([[def-sequence]]), so $1/k$ would be undefined at $k = 0$.

## Facts & Assumptions

**Given:** A nonempty set $S$; reals $c, c'$; the constant functions $\hat c, \hat c' : S \to \mathbb{R}$; and, for $S = \mathbb{N}$, the functions $f(k) = 1 - 1/(k+1)$ and $g = \hat 0$, together with $D(f,g) := \{\, |f(k) - g(k)| : k \in \mathbb{N} \,\}$.

[L1] The supremum metric is a metric on $\mathcal{B}(S)$ for nonempty $S$, and $d_\infty(u,v)$ is the least upper bound of $\{|u(s)-v(s)| : s \in S\}$ ([[lem-sup-metric-is-a-metric]], [[def-metric-space]]).

[L2] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a unique least upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]); bounded subsets of $\mathbb{R}$ are as in [[def-bounded-set]].

[L3] Epsilon characterisation of the supremum: for a nonempty $T \subseteq \mathbb{R}$ bounded above and an upper bound $u$ of $T$, one has $u = \sup T$ if and only if for every real $\varepsilon > 0$ there is $t \in T$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); and $m \cdot 1_{\mathbb{R}} > 0$ with $1/m > 0$ for $m \ge 1$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L5] Absolute value: $|t| = t$ for $t \ge 0$, $|t| \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]); and the usual metric of $\mathbb{R}$ is $d_{\mathbb{R}}(c,c') = |c-c'|$ ([[lem-real-line-is-a-metric-space]]).

[L6] Isometric embedding: a map preserving distances exactly ([[def-isometry-and-metric-embedding]]); trichotomy and transitivity of the order of $\mathbb{R}$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Each constant function $\hat c$ has range $\{c\}$, a bounded subset of $\mathbb{R}$, so $\hat c \in \mathcal{B}(S)$; and $\{|\hat c(s) - \hat c'(s)| : s \in S\} = \{|c - c'|\}$, a nonempty one-element set whose least upper bound is $|c - c'|$ itself. [given, L1, L2, L5]

2.1 For $S = \mathbb{N}$: each $k + 1$ is a natural $\ge 1$, so $1/(k+1)$ is a positive real and $0 \le f(k) = 1 - 1/(k+1) < 1$; hence the range of $f$ is bounded and $f \in \mathcal{B}(\mathbb{N})$, while $g = \hat 0$ is bounded by step 1.1, and $D(f,g) = \{\, 1 - 1/(k+1) : k \in \mathbb{N} \,\}$ is nonempty with $1$ as an upper bound. [step 1.1, L4, L5]

2.2 Claim 1: by step 1.1, $d_\infty(\hat c, \hat c') = |c - c'| = d_{\mathbb{R}}(c,c')$ for all reals $c, c'$, which is exactly the statement that $c \mapsto \hat c$ is an isometric embedding of $(\mathbb{R},d_{\mathbb{R}})$ into $(\mathcal{B}(S), d_\infty)$. [step 1.1, L1, L5, L6]

3.1 $d_\infty(f,g) = 1$: the number $1$ is an upper bound of $D(f,g)$ by step 2.1, and for an arbitrary real $\varepsilon > 0$ choose a natural $n \ge 1$ with $1/n < \varepsilon$ and put $k := n - 1$, a natural since $n \ge 1$, so that $1 - 1/(k+1) = 1 - 1/n > 1 - \varepsilon$; by the epsilon characterisation $1$ is the least upper bound. [step 2.1, L3, L4, L6]

4.1 The supremum is not attained: every element of $D(f,g)$ has the form $1 - 1/(k+1)$ with $1/(k+1) > 0$, hence is $< 1 = d_\infty(f,g)$, so no $k \in \mathbb{N}$ satisfies $|f(k) - g(k)| = d_\infty(f,g)$. [step 2.1, step 3.1, L4, L6]

5.1 Claims 1 and 2 are established, by step 2.2 and by steps 3.1 and 4.1 respectively. [step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Why the constants matter.** The isometric copy of $\mathbb{R}$ inside
  $\mathcal{B}(S)$ shows that $(\mathcal{B}(S), d_\infty)$ is unbounded whenever
  $S \ne \emptyset$, since $\mathbb{R}$ is
  ([[lem-real-line-is-a-metric-space]], [[lem-isometry-is-an-embedding]]).
- **With $S = \mathbb{N}$ this is the space usually written $\ell^\infty$**, the
  bounded real sequences with the supremum metric. Its completeness and its
  separability are questions for later pages and are not touched here.
- **Attainment is a genuinely different question from existence.** The supremum
  exists because the set is nonempty and bounded above
  ([[def-complete-ordered-field]]); whether it lies in the set is exactly the
  question of whether the sup is a maximum, and claim 2 answers it negatively
  for a specific pair.
