---
id: ex-bounded-functions-with-sup-metric-are-complete
kind: example
title: "The bounded real-valued functions on a set, with the supremum metric, form a complete metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-metric-space, def-cauchy-in-metric, def-metric-space, def-bounded-set,
       thm-cauchy-criterion-via-lub, lem-sup-metric-is-a-metric, lem-limit-preserves-order,
       def-real-limit, def-complete-ordered-field, lem-limit-unique, thm-algebra-of-limits,
       lem-of-abs-value, lem-metric-reverse-triangle, def-metric-convergence,
       lem-rat-embeds-dense, def-max-min, lem-finite-set-has-max,
       lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: true
short: "$\\mathcal{B}(S)$ with the sup metric is complete"
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $S$ be a nonempty set, let
$\mathcal{B}(S) := \{\, f : f \text{ is a bounded function } S \to \mathbb{R} \,\}$,
and let $d_\infty(f,g) := \sup\{\, |f(s)-g(s)| : s \in S \,\}$ be the supremum
metric, which is a metric on $\mathcal{B}(S)$
([[lem-sup-metric-is-a-metric]], [[def-bounded-set]]).

**Then $(\mathcal{B}(S), d_\infty)$ is a complete metric space**
([[def-complete-metric-space]]).

The limit is produced pointwise and then shown to be bounded and to be
approached uniformly; that order is the content of the proof.

## Facts & Assumptions

**Given:** A nonempty set $S$; the space $\mathcal{B}(S)$ with the supremum metric $d_\infty$; a Cauchy sequence $(f_k)$ in $(\mathcal{B}(S), d_\infty)$; a point $s \in S$; a real $\varepsilon > 0$.

[A1] Cauchyness of $(f_k)$: for every real $\varepsilon > 0$ there is $K$ with $d_\infty(f_k,f_l) < \varepsilon$ for all $k,l \ge K$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L1] $d_\infty$ is a metric on $\mathcal{B}(S)$, and $d_\infty(f,g)$ is the least upper bound of $\{|f(s)-g(s)| : s \in S\}$, so it dominates each of those numbers and is dominated by every upper bound of them ([[lem-sup-metric-is-a-metric]], [[def-complete-ordered-field]], [[def-metric-space]]).

[L2] A function $h : S \to \mathbb{R}$ is bounded when its range is a bounded subset of $\mathbb{R}$, that is when there is a real $M \ge 0$ with $|h(s)| \le M$ for every $s$; the passage from a pair of bounds to a single $M$ is the maximum of two absolute values ([[def-bounded-set]], [[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-abs-value]]).

[L3] Every Cauchy sequence of reals converges, and the limit of a real sequence is unique, which licenses $\lim_k a_k$ for a sequence already known to converge ([[thm-cauchy-criterion-via-lub]], [[lem-limit-unique]], [[def-real-limit]]).

[L4] Limits of reals preserve non-strict inequalities holding eventually, and behave additively ([[lem-limit-preserves-order]], [[thm-algebra-of-limits]]).

[L5] $\big||a| - |b|\big| \le |a-b|$ for reals, the reverse triangle inequality of the usual metric of $\mathbb{R}$ with third point $0$; hence $a_k \to a$ gives $|a_k| \to |a|$ ([[lem-metric-reverse-triangle]], [[lem-of-abs-value]], [[lem-real-line-is-a-metric-space]]).

[L6] Convergence in a metric space may be tested with real $\varepsilon > 0$ ([[def-metric-convergence]], [[lem-rat-embeds-dense]]).

## Verification

**Proof technique:** direct.

1.1 For every $s \in S$ and all $k,l$ the number $|f_k(s) - f_l(s)|$ belongs to the set whose supremum is $d_\infty(f_k,f_l)$, so $|f_k(s) - f_l(s)| \le d_\infty(f_k,f_l)$. [L1]

1.2 Apply [A1] with $\varepsilon = 1$ to get $K_1$ with $d_\infty(f_k,f_l) < 1$ for all $k,l \ge K_1$, and let $M \ge 0$ satisfy $|f_{K_1}(s)| \le M$ for every $s$, which exists because $f_{K_1}$ is bounded. [A1, L2]

2.1 Hence for each fixed $s$ the real sequence $\big(f_k(s)\big)_k$ is Cauchy, by [A1] and step 1.1; so it converges, and its limit is unique, so $f(s) := \lim_k f_k(s)$ defines a function $f : S \to \mathbb{R}$. No choice is used, each value being a unique limit. [step 1.1, A1, L3]

2.2 Let $\varepsilon > 0$ be real and take $K$ from [A1] for $\varepsilon/2$, so $d_\infty(f_k,f_l) < \varepsilon/2$ for all $k,l \ge K$. For a fixed $s$ and a fixed $k \ge K$ we get $|f_k(s) - f_l(s)| \le d_\infty(f_k,f_l) < \varepsilon/2$ for every $l \ge K$. [step 1.1, A1]

3.1 For every $s$ and every $l \ge K_1$: $|f_l(s)| \le |f_{K_1}(s)| + |f_l(s) - f_{K_1}(s)| \le M + 1$ by step 1.1; letting $l$ grow and using $|f_l(s)| \to |f(s)|$ gives $|f(s)| \le M + 1$. So $f$ is bounded and $f \in \mathcal{B}(S)$. [step 1.1, step 2.1, step 1.2, L2, L4, L5]

3.2 Letting $l$ grow in step 2.2 and using $f_l(s) \to f(s)$, hence $|f_k(s) - f_l(s)| \to |f_k(s) - f(s)|$, gives $|f_k(s) - f(s)| \le \varepsilon/2$ for every $s \in S$ and every $k \ge K$. [step 2.1, step 2.2, L4, L5]

4.1 So $\varepsilon/2$ is an upper bound of $\{\,|f_k(s) - f(s)| : s \in S\,\}$ for every $k \ge K$, whence $d_\infty(f_k, f) \le \varepsilon/2 < \varepsilon$; note that $d_\infty(f_k,f)$ is defined, both functions being bounded. [step 3.1, step 3.2, L1]

5.1 Since $\varepsilon > 0$ was an arbitrary real, $f_k \to f$ in $(\mathcal{B}(S), d_\infty)$ with $f \in \mathcal{B}(S)$; every Cauchy sequence therefore converges, and $(\mathcal{B}(S), d_\infty)$ is complete. [step 3.1, step 4.1, L6] ∎

## Remarks

- **The two limits are taken in different orders, and that is the point.** Step 2.1 fixes $s$ and lets $k$ grow, producing a candidate limit function; steps 2.2 to 4.1 fix $k$ and let the *other* index grow inside an estimate that is uniform in $s$. It is the uniformity of the bound $\varepsilon/2$ in $s$, and nothing else, that converts pointwise convergence into convergence in $d_\infty$.
- **Boundedness of the limit is a separate step and is genuinely needed.** The metric $d_\infty(f_k,f)$ is only defined once $f$ is known to be bounded ([[lem-sup-metric-is-a-metric]]), so step 3.1 has to come before step 4.1. This library has no extended real line, so an unbounded "distance" is not available as a placeholder.
- **Nothing is assumed about $S$ beyond nonemptiness**, which is what [[lem-sup-metric-is-a-metric]] needs so that the supremum is taken over a nonempty set. In particular $S$ carries no topology and no metric here; the functions are arbitrary bounded functions, not continuous ones.
- **Where the least-upper-bound property is spent.** Twice: inside [[thm-cauchy-criterion-via-lub]] at step 2.1, and in the very definition of $d_\infty$ ([[lem-sup-metric-is-a-metric]]). Completeness of $\mathbb{R}$ is the whole engine of this example.
