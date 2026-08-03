---
id: thm-banach-fixed-point
kind: theorem
title: "A contraction of a nonempty complete metric space into itself has exactly one fixed point, the limit of the iterates from any starting point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lipschitz-holder-contraction, def-complete-metric-space, def-cauchy-in-metric,
       thm-recursion, lem-geometric-sequence-null, def-integer-power,
       def-metric-convergence, lem-metric-limits-unique, thm-metric-regularity-hierarchy,
       thm-metric-continuity-characterisations, lem-power-difference-factorisation,
       def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-metric-space,
       lem-of-inverse-positive, thm-algebra-of-limits, lem-power-laws,
       lem-metric-nonnegativity, def-real-limit, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-contraction-on-an-incomplete-space, cex-strict-contraction-without-a-fixed-point]
aliases: []
landmark: true
short: "Banach fixed point theorem"
proof_strategy: constructive
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
    - title: "Banach fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_fixed-point_theorem"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "Fixed-point iteration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty complete metric space ([[def-complete-metric-space]])
and let $f : X \to X$ be a contraction with constant $q$, so
$d(f(u),f(v)) \le q\,d(u,v)$ for all $u,v \in X$ and $0 \le q < 1$
([[def-lipschitz-holder-contraction]]). Then:

1. There is exactly one $x^{*} \in X$ with $f(x^{*}) = x^{*}$.
2. For every $x_0 \in X$ the sequence of **iterates**, defined by recursion
   ([[thm-recursion]]) by $x_{n+1} := f(x_n)$, converges to $x^{*}$ in $(X,d)$
   ([[def-metric-convergence]]). In particular the limit does not depend on
   $x_0$.
3. For all $m, n \in \mathbb{N}$ with $m \ge n$,
   $$d(x_m, x_n) \;\le\; \frac{q^{\,n}\, d(x_1,x_0)}{1-q},$$
   with the integer power of [[def-integer-power]].

Claim 3 is the quantitative form of the argument that proves claims 1 and 2, and
it is recorded in the statement because the error estimates
([[cor-banach-error-estimates]]) are read off from it.

## Facts & Assumptions

**Given:** A nonempty complete metric space $(X,d)$, a contraction $f : X \to X$ with constant $q$ satisfying $0 \le q < 1$, a starting point $x_0 \in X$, and a real $\varepsilon > 0$. Write $C := d(x_1,x_0)/(1-q)$.

[A1] Contraction: $d(f(u),f(v)) \le q\,d(u,v)$ for all $u,v \in X$, with $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

[A2] $(X,d)$ is complete and nonempty ([[def-complete-metric-space]]).

[L1] Recursion: for $x_0 \in X$ and $f : X \to X$ there is a unique $n \mapsto x_n$ with $x_0$ as given and $x_{n+1} = f(x_n)$ ([[thm-recursion]]).

[L2] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L3] Integer powers and their laws: $q^{0} = 1$, $q^{n+1} = q^{n}q$, $q^{m+n} = q^{m}q^{n}$, and $q^{n} \ge 0$ for $q \ge 0$ ([[def-integer-power]], [[lem-power-laws]]).

[L4] Factorisation: $1 - q^{N} = (1-q)\sum_{k<N} q^{k}$ for $N \ge 1$, so $\sum_{k<N} q^{k} = (1-q^{N})/(1-q) \le 1/(1-q)$ when $0 \le q < 1$ ([[lem-power-difference-factorisation]], [[def-finite-sum]], [[lem-of-inverse-positive]]).

[L5] Laws of finite sums: splitting, index shift, scaling and monotonicity ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] $q^{k} \to 0$ for $|q| < 1$, and a constant multiple of a null sequence is null ([[lem-geometric-sequence-null]], [[thm-algebra-of-limits]], [[def-real-limit]]).

[L7] Triangle inequality (M3), symmetry (M2) and separation (M1) of a metric, and nonnegativity ([[def-metric-space]], [[lem-metric-nonnegativity]]).

[L8] A contraction is continuous, hence sequentially continuous ([[thm-metric-regularity-hierarchy]], [[thm-metric-continuity-characterisations]]).

[L9] Limits in a metric space are unique, and convergence may be tested with real $\varepsilon > 0$ ([[lem-metric-limits-unique]], [[def-metric-convergence]], [[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L10] $1 - q > 0$, so $1/(1-q) > 0$ and $C \ge 0$ ([[lem-of-inverse-positive]], [[lem-metric-nonnegativity]]).

## Proof

**Proof technique:** constructive.

1.1 $X$ is nonempty, so a starting point $x_0 \in X$ exists, and [L1] produces the sequence of iterates $(x_n)$ with $x_{n+1} = f(x_n)$ for every $n$. [A2, L1, construct]

1.2 If $f(y) = y$ and $f(z) = z$ then $d(y,z) = d(f(y),f(z)) \le q\,d(y,z)$, so $(1-q)\,d(y,z) \le 0$; since $1-q > 0$ this forces $d(y,z) \le 0$, and $d(y,z) \ge 0$ gives $d(y,z) = 0$ and $y = z$. [A1, L7, L10]

2.1 For every $n$, $d(x_{n+1},x_n) \le q^{\,n} d(x_1,x_0)$, by induction on $n$: at $n = 0$ this reads $d(x_1,x_0) \le 1 \cdot d(x_1,x_0)$; and if it holds at $n$ then $d(x_{n+2},x_{n+1}) = d(f(x_{n+1}),f(x_n)) \le q\,d(x_{n+1},x_n) \le q \cdot q^{\,n} d(x_1,x_0) = q^{\,n+1} d(x_1,x_0)$. [step 1.1, A1, L2, L3]

2.2 For all $n \le m$, $d(x_m,x_n) \le \sum_{k=n}^{m-1} d(x_{k+1},x_k)$, by induction on $m$ from the triangle inequality: at $m = n$ both sides are $0$, since an empty sum is $0$; and $d(x_{m+1},x_n) \le d(x_m,x_n) + d(x_{m+1},x_m)$. [step 1.1, L2, L5, L7]

3.1 Combining, for $n \le m$: $d(x_m,x_n) \le \sum_{k=n}^{m-1} q^{\,k} d(x_1,x_0) = d(x_1,x_0)\, q^{\,n} \sum_{j < m-n} q^{\,j} \le d(x_1,x_0)\, q^{\,n} \frac{1}{1-q} = q^{\,n} C$, using the index shift $q^{\,n+j} = q^{\,n}q^{\,j}$ and monotonicity of finite sums. This is claim 3. [step 2.1, step 2.2, L3, L4, L5, L10]

4.1 The sequence $(q^{\,n} C)$ of reals is null by [L6], so there is $N$ with $q^{\,n} C < \varepsilon$ for every $n \ge N$, the terms being nonnegative. Hence for all $m,n \ge N$ we get $d(x_m,x_n) \le q^{\min\{m,n\}} C < \varepsilon$ by step 3.1 and symmetry of $d$, so $(x_n)$ is Cauchy. [step 3.1, L6, L7, L9, L10]

5.1 By [A2] the sequence converges: $x_n \to x^{*}$ for some $x^{*} \in X$. [step 4.1, A2]

6.1 $f$ is continuous, so $f(x_n) \to f(x^{*})$, that is $x_{n+1} \to f(x^{*})$; and $x_{n+1} \to x^{*}$ as well, since given a real $\eta > 0$ an index $K$ with $d(x_k,x^{*}) < \eta$ for $k \ge K$ also serves for the shifted indices $n+1 \ge K$ when $n \ge K$. [step 5.1, L8, L9]

7.1 By uniqueness of limits $f(x^{*}) = x^{*}$, so $x^{*}$ is a fixed point and the iterates from $x_0$ converge to it. [step 5.1, step 6.1, L9]

8.1 So a fixed point exists by step 7.1 and there is at most one by step 1.2, which is claim 1; the iterates from an arbitrary $x_0$ converge to a fixed point by step 7.1, hence to the unique one, which is claim 2; and claim 3 is step 3.1. [step 3.1, step 7.1, step 1.2, discharge-construct] ∎

## Remarks

- **Every hypothesis is used, and each has a witness for its necessity.** Completeness: $x \mapsto x/2$ on $(0,1]$ is a contraction with constant $1/2$ and no fixed point ([[cex-contraction-on-an-incomplete-space]]). Nonemptiness: the empty metric space is complete and the empty map is a contraction with no fixed point, which is why the statement says nonempty. A constant $q$ strictly below $1$: the condition $d(f(u),f(v)) < d(u,v)$ for $u \ne v$ is strictly weaker and does not suffice ([[fs-strict-contraction-has-a-fixed-point]], [[cex-strict-contraction-without-a-fixed-point]]).
- **The proof is constructive in a usable sense.** It does not merely assert a fixed point: it names the sequence that converges to it, from any starting point whatever, and step 3.1 bounds the distance to the limit in terms of the first step alone. That is what makes the theorem an algorithm rather than an existence statement, and [[cor-banach-error-estimates]] is the statement of the two bounds a computation actually uses.
- **Where the geometric series enters.** Only through [L4], which is the factorisation $1 - q^{N} = (1-q)\sum_{k<N} q^{k}$ read backwards ([[lem-power-difference-factorisation]]). No theory of infinite series is used or needed: every sum in the proof is finite, and the passage to the limit is made once, at step 4.1, through the null sequence $(q^n)$.
- **Uniqueness is cheaper than existence** and uses neither completeness nor recursion: step 1.2 is three lines from the contraction inequality alone. It is what makes claim 2 unambiguous, since it forces the limits obtained from different starting points to coincide.
