---
id: cex-absolute-value-integrable-without-the-function
kind: counterexample
title: "A function that is not Riemann integrable although $\\lvert f\\rvert$ is"
status: draft
origin: session
deps: [cor-integrability-of-absolute-values-products-and-lattice-operations, def-darboux-integral, def-darboux-sums, def-partition-and-refinement, lem-q-and-irrationals-dense-r, def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, thm-lebesgue-criterion, lem-nondegenerate-interval-is-not-null, def-measure-zero-and-content-zero, lem-integral-elementary-bounds, def-finite-sum, lem-finite-sum-laws, def-infimum, def-max-min, def-abs-value, def-interval, def-bounded-set, def-continuity-real, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$|f|$ integrable, $f$ not"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
pipeline_run: null
---

## Statement refuted

**False claim:** if $|f|$ is Riemann integrable on $[a,b]$ then so is $f$; that
is, the first clause of
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] has a
converse.

Let $\mathbf{1}_{\mathbb{Q}}$ be the Dirichlet function
([[def-dirichlet-and-thomae-functions]]) and put

$$f : [0,1] \to \mathbb{R}, \qquad f(x) \;:=\; 2\,\mathbf{1}_{\mathbb{Q}}(x) - 1 \;=\; \begin{cases} 1 & x \text{ rational}, \\ -1 & x \text{ irrational}. \end{cases}$$

Then $|f|$ is the constant function $1$, integrable with $\int_0^1 |f| = 1$,
while $f$ is **not** Riemann integrable on $[0,1]$: every lower Darboux sum of
$f$ is $-1$ and every upper Darboux sum is $1$, so the lower and upper integrals
are $-1$ and $1$.

## Facts & Assumptions

**Given:** The function $f = 2\mathbf{1}_{\mathbb{Q}} - 1$ on $[0,1]$, and a partition $P = (n,t)$ of $[0,1]$.

[L1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ at a rational $x$ and $0$ at an irrational $x$ ([[def-dirichlet-and-thomae-functions]]).

[L2] Both $\mathbb{Q}$ and the irrationals are dense in $\mathbb{R}$, so every nonempty open interval contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]]).

[L3] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = 1$, and the open interval $(t_i,t_{i+1})$ is nonempty ([[def-partition-and-refinement]], [[def-interval]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] $L(u,P) = \sum_{i<n}m_i\Delta_i$ and $U(u,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf u[I_i]$ and $M_i = \sup u[I_i]$; a set with a least element has it as its infimum and with a greatest element has it as its supremum ([[def-darboux-sums]], [[def-infimum]], [[def-max-min]]).

[L5] $\underline{\int_0^1} u = \sup_P L(u,P)$ and $\overline{\int_0^1} u = \inf_P U(u,P)$; $u$ is integrable exactly when the two agree ([[def-darboux-integral]], [[def-bounded-set]]).

[L6] Finite sums: scaling and $\sum_{i<n}\lambda\Delta_i = \lambda\sum_{i<n}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clause 2).

[L7] $\int_p^q c = c(q-p)$ for a constant $c$ ([[lem-integral-elementary-bounds]]).

[L8] Absolute value and ordered-field arithmetic: $|1| = |-1| = 1$, and the order is total ([[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L9] Lebesgue's criterion, and the fact that a nondegenerate interval is not null ([[thm-lebesgue-criterion]], [[lem-nondegenerate-interval-is-not-null]], [[def-measure-zero-and-content-zero]], [[thm-dirichlet-and-thomae-continuity-sets]], [[def-continuity-real]]).

## Counterexample

**Proof technique:** direct.

1.1 $|f|$ is the constant function $1$ on $[0,1]$: at a rational $x$, $f(x) = 2\cdot1 - 1 = 1$, and at an irrational $x$, $f(x) = 2\cdot0-1 = -1$, and $|1| = |-1| = 1$ by [L1] and [L8]. Hence $|f|$ is integrable with $\int_0^1|f| = 1$ by [L7]. [given, L1, L7, L8]

1.2 Let $P = (n,t)$ be any partition of $[0,1]$ and let $i < n$. The open interval $(t_i,t_{i+1})$ is nonempty by [L3], so it contains a rational and an irrational by [L2]; both lie in $I_i$, so $1 \in f[I_i]$ and $-1 \in f[I_i]$. [given, L2, L3]

2.1 $f$ is bounded, with values in $\{-1,1\}$, so its Darboux sums are defined by [L4] and [L5]. [step 1.1, given, L4, L5]

3.1 Since $f[I_i] \subseteq \{-1,1\}$ and both values occur, $m_i = -1$ and $M_i = 1$ by [L4]. [step 2.1, step 1.2, L4]

4.1 Hence $L(f,P) = \sum_{i<n}(-1)\Delta_i = -1$ and $U(f,P) = \sum_{i<n}1\cdot\Delta_i = 1$, by [L4], [L6] and [L3]. [step 3.1, L3, L4, L6]

5.1 That holds for every partition $P$, so the set of lower sums is $\{-1\}$ and the set of upper sums is $\{1\}$; by [L5], $\underline{\int_0^1}f = -1 \ne 1 = \overline{\int_0^1}f$ and $f$ is not integrable. [step 4.1, L5]

6.1 So $|f|$ is integrable on $[0,1]$ while $f$ is not, and the claim is false. [step 1.1, step 5.1] ∎

## Remarks

- **The Lebesgue criterion says the same thing.** $f$ agrees with $2\mathbf{1}_{\mathbb{Q}} - 1$, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point of $\mathbb{R}$ ([[thm-dirichlet-and-thomae-continuity-sets]], claim 1), so the discontinuity set of $f$ in $[0,1]$ is the whole of $[0,1]$, which is not null ([[lem-nondegenerate-interval-is-not-null]]); by [[thm-lebesgue-criterion]] $f$ is not integrable. The direct computation above is given because it also *locates* both Darboux integrals, which the criterion does not.

- **Why no converse can be expected.** Passing to $|f|$ destroys all sign information, and integrability is a statement about the oscillation of $f$; here $|f|$ has oscillation $0$ on every subinterval while $f$ has oscillation $2$ on every subinterval. The corollary's implication runs only in the direction the composition theorem provides, because $t \mapsto |t|$ is continuous and no continuous $\psi$ satisfies $\psi(|t|) = t$.

- **The same example separates $\int|f|$ from $\bigl|\int f\bigr|$ in the strongest possible way**: the right-hand side is not even defined.
