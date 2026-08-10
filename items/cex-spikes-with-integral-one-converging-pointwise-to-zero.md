---
id: cex-spikes-with-integral-one-converging-pointwise-to-zero
kind: counterexample
title: "Continuous $f_n \\to 0$ pointwise on $[0,1]$ with $\\int_0^1 f_n = 1$ for every $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-implies-integrable, thm-additivity-over-subintervals, cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-linearity-of-the-integral, thm-algebra-of-continuous-functions, lem-derivative-of-a-power, thm-algebra-of-derivatives, lem-integral-elementary-bounds, def-continuity-real, def-sequence, def-real-limit, thm-of-archimedean, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, def-integer-power, def-oriented-integral, def-darboux-integral, def-derivative, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "spikes: pointwise limit does not pass under the integral"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "UC Davis MATH 125B, Chapter 1 notes"
      url: "https://www.math.ucdavis.edu/~hunter/m125b/ch1.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** if $(f_n)$ is a sequence of Riemann integrable functions on
$[0,1]$ converging pointwise to $f$, and $f$ is integrable, then
$\int_0^1 f_n \to \int_0^1 f$.

For $n \in \mathbb{N}$ write $c_n := \iota(n+1) \ge 1$ ([[def-canonical-natural]],
[[lem-of-naturals-positive]]) and define the **tent** $f_n : [0,1] \to
\mathbb{R}$ by

$$f_n(x) \;:=\; \begin{cases} 4c_n^{2}\,x & 0 \le x \le \tfrac{1}{2c_n}, \\[3pt] 4c_n^{2}\bigl(\tfrac{1}{c_n} - x\bigr) & \tfrac{1}{2c_n} \le x \le \tfrac{1}{c_n}, \\[3pt] 0 & \tfrac{1}{c_n} \le x \le 1 . \end{cases}$$

Each $f_n$ is continuous on $[0,1]$, hence integrable, with

$$\int_0^1 f_n \;=\; 1 \qquad \text{for every } n ,$$

while $f_n(x) \to 0$ for every $x \in [0,1]$. So the pointwise limit is the zero
function, whose integral is $0$, and the integrals do not converge to it.

**The heights are unbounded**: $f_n$ attains the value $2c_n$ at
$x = 1/(2c_n)$, and $2c_n \to \infty$. That is what the example refutes and what
it does not: it refutes the interchange for **pointwise** convergence, and it
says nothing whatever about sequences that are uniformly bounded, for which no
theorem is stated on this page in any direction.

## Facts & Assumptions

**Given:** For $n \in \mathbb{N}$, $c_n = \iota(n+1)$ and the function $f_n$ above; a point $x \in [0,1]$ and a real $\varepsilon > 0$.

[L1] $\iota(n+1) \ge 1 > 0$, $\iota$ is nondecreasing on $\mathbb{N}$, and for every real $\eta>0$ there is a natural $N$ with $1/\iota(N+1) < \eta$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L2] Every polynomial function is continuous, and a function agreeing with continuous functions on the pieces of a finite subdivision of $[0,1]$, with matching values at the shared endpoints, is continuous on $[0,1]$ ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]).

[L3] A continuous function on a closed bounded interval with distinct endpoints is integrable there ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L4] Additivity over adjacent subintervals ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L5] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$; a continuous function on an interval has a primitive ([[thm-ftc-second-part]], [[cor-primitives-of-a-continuous-function]]).

[L6] For $n \ge 1$ the map $x \mapsto x^{n}$ has derivative $\iota(n)x^{\,n-1}$; sums and scalar multiples of differentiable functions are differentiable with the corresponding derivatives; and $\int_p^q c = c(q-p)$ for a constant ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[lem-integral-elementary-bounds]], [[def-derivative]], [[def-integer-power]]).

[L7] A sequence of reals converges to $L$ when for every real $\varepsilon>0$ there is $N$ with $|a_n - L| < \varepsilon$ for all $n \ge N$ ([[def-real-limit]], [[def-sequence]]).

[L8] Ordered-field arithmetic and linearity of the integral: multiplying inequalities by positive reals, transitivity, and $\int_p^q(\lambda u) = \lambda\int_p^q u$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[thm-linearity-of-the-integral]], [[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 $c_n \ge 1$ by [L1], so $0 < 1/(2c_n) < 1/c_n \le 1$ and the three pieces of the definition subdivide $[0,1]$. [given, L1]

2.1 The three formulas agree at the shared endpoints: at $x = 1/(2c_n)$ both give $4c_n^{2}/(2c_n) = 2c_n$, and at $x = 1/c_n$ the second gives $0$, which is the third. So $f_n$ is a well-defined function and is continuous on $[0,1]$ by [L2], hence integrable by [L3]. [step 1.1, L2, L3]

2.2 On $[1/c_n, 1]$ the function $f_n$ is constantly $0$, so $\int_{1/c_n}^{1} f_n = 0$ by [L6]; when $1/c_n = 1$ this piece is degenerate and the integral is $0$ by [L4]. [step 1.1, L4, L6]

2.3 **Pointwise convergence to $0$.** At $x = 0$ every $f_n(0) = 0$. For $x > 0$, [L1] gives $N$ with $1/\iota(N+1) < x$, and for $n \ge N$ one has $c_n = \iota(n+1) \ge \iota(N+1)$, hence $1/c_n \le 1/\iota(N+1) < x$, so $x$ lies in the third piece and $f_n(x) = 0$. [step 1.1, given, L1, L8]

3.1 On $[0, 1/(2c_n)]$ the function $H(x) := 2c_n^{2}x^{2}$ has $H' (x)= 4c_n^{2}x = f_n(x)$ by [L6], so $\int_0^{1/(2c_n)} f_n = H(1/(2c_n)) - H(0) = 2c_n^{2}/(4c_n^{2}) = 1/2$ by [L5]. [step 2.1, L5, L6]

3.2 On $[1/(2c_n), 1/c_n]$ the function $H_2(x) := 4c_n^{2}\bigl(x/c_n - x^{2}/2\bigr)$ has $H_2'(x) = 4c_n^{2}(1/c_n - x) = f_n(x)$ by [L6], and $H_2(1/c_n) = 4c_n^{2}\bigl(1/c_n^{2} - 1/(2c_n^{2})\bigr) = 2$ while $H_2(1/(2c_n)) = 4c_n^{2}\bigl(1/(2c_n^{2}) - 1/(8c_n^{2})\bigr) = 3/2$; so $\int_{1/(2c_n)}^{1/c_n} f_n = 2 - 3/2 = 1/2$ by [L5]. [step 2.1, L5, L6]

3.3 Hence $|f_n(x) - 0| = 0 < \varepsilon$ for all $n \ge N$, so $f_n(x) \to 0$ for every $x \in [0,1]$ by [L7]. [step 2.3, L7]

4.1 By [L4] applied twice, $\int_0^1 f_n = 1/2 + 1/2 + 0 = 1$ for every $n$. [step 3.1, step 3.2, step 2.2, L4]

5.1 The pointwise limit is the zero function, which is integrable with integral $0$ by [L6], while $\int_0^1 f_n = 1$ for every $n$ by step 4.1; so the integrals do not converge to the integral of the limit and the claim is false. [step 4.1, step 3.3, L6, L7] ∎

## Remarks

- **What this refutes, stated exactly.** It refutes the interchange of a limit with an integral under **pointwise** convergence alone, even when every $f_n$ is continuous and the limit function is as regular as possible. It does not refute, and does not address, any statement about uniformly convergent sequences or about uniformly bounded ones; no such statement is proved on this page, and none is contradicted here.

- **Unboundedness of the heights is essential to the construction and is stated as a feature, not hidden.** $\sup_{[0,1]} f_n = 2c_n$ grows without bound, and the mass $1$ escapes into a spike of shrinking width. A reader who wants a theorem in this direction should note that the hypothesis to look for is a bound on the whole sequence, and that whichever theorem supplies it is not on this page.

- **The integral of the limit exists here.** The failure is not that the limit function is non-integrable — it is the zero function — but that the numbers $\int_0^1 f_n$ simply do not converge to $\int_0^1 0$. A separate failure, in which the pointwise limit of integrable functions is not integrable at all, is recorded as a false statement on the companion page of *The Riemann Integral*.
