## Selection reasons

- critical risk (13): 21 declared dependencies; 19 cited facts; 12 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-mean-value-inequality`

Normalized current SHA-256: `a2fd550db6117ac8543a8cc3337eff48e5c96d5c14890c85a72427bf2ad4f6a0`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-mean-value-inequality
kind: theorem
title: "The mean value inequality: if $f : [a,b] \\to \\mathbb{R}^m$ is continuous and differentiable on $(a,b)$ with $\\lVert f'\\rVert_2 \\le M$, then $\\lVert f(b)-f(a)\\rVert_2 \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, cor-mean-value-theorem, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, lem-real-and-metric-notions-agree, def-derivative, cor-differentiable-implies-continuous, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, thm-induction-principle, lem-of-inverse-positive, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a < b$,
and let $f : [a,b] \to \mathbb{R}^{m}$ be continuous on $[a,b]$ and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-vector-valued-functions-limits-and-continuity]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]]). Let
$M \in \mathbb{R}$ with $M \ge 0$ satisfy

$$\lVert f'(t)\rVert_2 \;\le\; M \qquad \text{for every } t \in (a,b).$$

Then

$$\lVert f(b) - f(a)\rVert_2 \;\le\; M\,(b-a).$$

**No integrability of $f'$ is assumed**, so the theorem applies to every
differentiable $f$; that is why it is proved from the scalar mean value theorem
rather than from
[[thm-norm-inequality-for-the-vector-valued-integral]].
[[cor-vector-valued-ftc-and-lipschitz-bound]] records the comparison between the
two routes.

**The equality form is not asserted, and for $m \ge 2$ it is false.** There need
be **no** $\xi \in (a,b)$ with $f(b)-f(a) = f'(\xi)(b-a)$; the companion page
carries a differentiable witness on $[0,1]$. The $\xi$ produced in the proof
below depends on the fixed vector $u = f(b)-f(a)$ and is a mean value point of
the **real** function $t \mapsto \langle u, f(t)\rangle$, not of $f$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a < b$, a function $f : [a,b] \to \mathbb{R}^{m}$ continuous on $[a,b]$ and differentiable on $(a,b)$, a real $M \ge 0$ bounding $\lVert f'\rVert_2$ on $(a,b)$, the vector $u := f(b)-f(a) \in \mathbb{R}^{m}$, and the real-valued function $\varphi : [a,b] \to \mathbb{R}$, $\varphi(t) := \langle u, f(t)\rangle$.

[L1] The inner product is bilinear and symmetric, $\langle w,w\rangle = \lVert w\rVert_2^{2}$, and $\langle u,w\rangle = \sum_{i<m}u_iw_i$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L2] Cauchy-Schwarz: $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$, and $t \le |t|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-of-abs-value]]); $\lVert w\rVert_2 \ge 0$, and $\lVert w\rVert_2 = 0$ exactly when $w = 0$ ([[def-norm-and-normed-space]]).

[L3] Componentwise continuity and differentiability: $f$ is continuous at a point exactly when every $f_i$ is, and differentiable at a point exactly when every $f_i$ is, with $f'(t)_i = f_i'(t)$ ([[thm-componentwise-limits-and-continuity]] clause 1, [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-limit-point-r]]).

[L4] For a real domain, the metric notion of continuity and the notion of [[def-continuity-real]] agree ([[lem-real-and-metric-notions-agree]] clause 1).

[L5] Algebra of continuous real functions: sums and scalar multiples of functions continuous at a point are continuous there ([[thm-algebra-of-continuous-functions]] clause 1).

[L6] Algebra of derivatives: sums and scalar multiples of functions differentiable at a point are differentiable there, with $(w+z)'(c) = w'(c)+z'(c)$ and $(\alpha w)'(c) = \alpha w'(c)$ ([[thm-algebra-of-derivatives]] clauses 1 and 2); and a differentiable function is continuous ([[cor-differentiable-implies-continuous]]).

[L7] The mean value theorem: for $\psi$ continuous on $[a,b]$ with $a<b$ and differentiable on $(a,b)$ there is $\xi \in (a,b)$ with $\psi(b)-\psi(a) = \psi'(\xi)(b-a)$ ([[cor-mean-value-theorem]]).

[L8] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L9] Order arithmetic: $b - a > 0$; a product of nonnegatives is nonnegative; and $u>0$ gives $u^{-1}>0$, so an inequality may be multiplied by a positive real ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 Every component $f_i$ is continuous on $[a,b]$ in the sense of [[def-continuity-real]] and differentiable at every point of $(a,b)$, with $f'(t)_i = f_i'(t)$. [L3, L4]

1.2 $\varphi(t) = \sum_{i<m}u_i f_i(t)$ by the coordinate formula for the inner product. [L1]

1.3 $\varphi(b)-\varphi(a) = \langle u, f(b)\rangle - \langle u, f(a)\rangle = \langle u, f(b)-f(a)\rangle = \langle u,u\rangle = \lVert u\rVert_2^{2}$, by bilinearity. [L1]

1.4 By Cauchy-Schwarz and the bound on $\lVert f'\rVert_2$, $\langle u,f'(\xi)\rangle \le \bigl|\langle u,f'(\xi)\rangle\bigr| \le \lVert u\rVert_2\lVert f'(\xi)\rVert_2 \le \lVert u\rVert_2 M$. [L2]

1.5 If $u = 0$ then $\lVert u\rVert_2 = 0$ while $M(b-a) \ge 0$, so the conclusion holds. [L2, L9]

2.1 By induction on $p \le m$, each partial sum $t \mapsto \sum_{i<p}u_i f_i(t)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with derivative $\sum_{i<p}u_i f_i'(t)$: the empty sum is the constant $0$, and each successor step adds one scalar multiple of a function that is continuous and differentiable by step 1.1. [step 1.1, L5, L6, L8]

3.1 Hence $\varphi$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$, and $\varphi'(t) = \sum_{i<m}u_i f_i'(t) = \langle u, f'(t)\rangle$ for $t \in (a,b)$. [step 1.2, step 2.1, L1]

4.1 By the mean value theorem applied to $\varphi$ there is $\xi \in (a,b)$ with $\varphi(b)-\varphi(a) = \varphi'(\xi)(b-a)$. [step 3.1, L7]

5.1 Combining steps 1.3 and 4.1, $\lVert u\rVert_2^{2} = \langle u, f'(\xi)\rangle\,(b-a)$. [step 3.1, step 1.3, step 4.1]

6.1 Since $b-a > 0$, multiplying the inequality of step 1.4 by $b-a$ and using step 5.1 gives $\lVert u\rVert_2^{2} \le \lVert u\rVert_2\,M\,(b-a)$. [step 5.1, step 1.4, L9]

7.1 If $u \ne 0$ then $\lVert u\rVert_2 > 0$, and multiplying step 6.1 by the positive real $1/\lVert u\rVert_2$ gives $\lVert u\rVert_2 \le M(b-a)$. [step 6.1, L2, L9]

8.1 The two cases of steps 1.5 and 7.1 exhaust the possibilities for $u = f(b)-f(a)$, so $\lVert f(b)-f(a)\rVert_2 \le M(b-a)$. [step 1.5, step 7.1] ∎

## Remarks

- **What the auxiliary function buys.** The scalar mean value theorem produces a point at which one real function has its average slope. Applying it to $\varphi = \langle u, f\rangle$ for the **particular** $u = f(b)-f(a)$ turns that into a statement about $f$, at the cost of the equality becoming an inequality. The loss is not an artefact of the proof: the equality form is genuinely false for $m \ge 2$, and the companion page's curve $t \mapsto (t^{2},t^{3})$ on $[0,1]$ is a differentiable witness.

- **The bound is sharp.** No constant smaller than $\sup\lVert f'\rVert_2$ works in general; the companion page exhibits a curve for which the inequality is an equality.

- **The case split at $u = 0$ is where the statement would otherwise be incomplete**, exactly as in [[thm-norm-inequality-for-the-vector-valued-integral]]. When $f(b) = f(a)$ the left-hand side is $0$ and nothing is divided.

- **$M \ge 0$ is a hypothesis, not a deduction.** It follows from $\lVert f'(t)\rVert_2 \le M$ at any single $t \in (a,b)$, and $(a,b)$ is nonempty here because $a<b$; it is stated anyway so that the conclusion reads as a genuine bound, in the style of [[cor-bounded-derivative-implies-lipschitz]].
````

## Wave 12 provenance row

```json
{
  "id": "thm-mean-value-inequality",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_svthedercont.html"
  ],
  "rationale": "The mean value inequality: if $f : [a,b] \\\\to \\\\mathbb{R}^m$ is continuous and differentiable on $(a,b)$ with $\\\\lVert f'\\\\rVert_2 \\\\le M$, then $\\\\lVert f(b)-f(a)\\\\rVert_2 \\\\le M(b-a)$: The sources give the corresponding finite-dimensional vector limit, derivative, integral, or mean-value result; the item adapts it to componentwise Riemann integration, zero-based coordinates, oriented intervals, and the library’s existing scalar theorem names. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-euclidean-inner-product",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$. A natural number is a von Neumann natural, that is a set, and $n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so $$\\mathbb{R}^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to \\mathbb{R} \\,\\}$$ is the function space of [[def-function-space]] at $F = \\mathbb{R}$ and $X = n$, a vector space over $\\mathbb{R}$ under the pointwise operations ([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of $\\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the same set that [[lem-metrics-on-rn]] calls $\\mathbb{R}^{n}$. The **Euclidean inner product** of $x, y \\in \\mathbb{R}^{n}$ is the real number $$\\langle x, y\\rangle \\;:=\\; \\sum_{k<n} x_k\\,y_k ,$$ the finite sum of [[def-finite-sum]] applied to the list $k \\mapsto x_k y_k$ (extended by $0$ beyond $n$, as every finite list in this library is). The **Euclidean norm** of $x$ is $$\\lVert x\\rVert_2 \\;:=\\; \\sqrt{\\langle x, x\\rangle},$$ which is defined because $\\langle x,x\\rangle = \\sum_{k<n} x_k^{2} \\ge 0$ (a sum of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and [[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by [[def-integer-power]]) and every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]). ### Both are defined for every $n$, including $n = 0$ At $n = 0$ the set $\\mathbb{R}^{0}$ has exactly one element, the empty function, and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum above is the empty sum, so $\\langle x,y\\rangle = 0$ and $\\lVert x\\rVert_2 = 0$. **This is the first place on this page where the two index regimes diverge, and the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\\infty$ of [[lem-metrics-on-rn]] are defined only for $n \\ge 1$, because $d_\\infty$ would otherwise be a maximum over the empty index set; the algebra above needs no such restriction. The boundary in this page runs between the algebra and the metric, not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists exactly which items inherit $n \\ge 1$. ### The algebra of the inner product For all $x, y, z \\in \\mathbb{R}^{n}$ and $\\lambda \\in \\mathbb{R}$: 1. **Symmetry.** $\\langle x,y\\rangle = \\langle y,x\\rangle$, since $x_ky_k = y_kx_k$ termwise. 2. **Additivity in the first argument.** $\\langle x + y, z\\rangle = \\langle x,z\\rangle + \\langle y,z\\rangle$: the list $k \\mapsto (x_k+y_k)z_k$ is the termwise sum of $k \\mapsto x_kz_k$ and $k \\mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies. 3. **Homogeneity in the first argument.** $\\langle \\lambda x, y\\rangle = \\lambda\\langle x,y\\rangle$, by [[lem-finite-sum-laws]] clause 2. 4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws in the second argument. 5. **Positive definiteness.** $\\langle x,x\\rangle \\ge 0$, and $\\langle x,x\\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$. 6. **Agreement with the published Euclidean metric.** For $n \\ge 1$ and $x, y \\in \\mathbb{R}^{n}$, $\\lVert x - y\\rVert_2 = \\sqrt{\\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two sides being the same expression ([[lem-metrics-on-rn]]). In particular $\\lVert x\\rVert_2 = d_2(x, 0)$. That $\\lVert\\cdot\\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]] is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cauchy-schwarz-and-the-euclidean-norm",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $x, y \\in \\mathbb{R}^{n}$, with the Euclidean inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then: 1. **Cauchy-Schwarz.** $$\\lvert\\langle x,y\\rangle\\rvert \\;\\le\\; \\lVert x\\rVert_2\\,\\lVert y\\rVert_2 ,$$ with equality if and only if there is a pair $(\\lambda,\\mu) \\ne (0,0)$ of reals with $\\lambda x_k = \\mu y_k$ for every $k < n$. 2. **$\\lVert\\cdot\\rVert_2$ is a norm on $\\mathbb{R}^{n}$** ([[def-norm-and-normed-space]]), for **every** $n \\in \\mathbb{N}$; the metric it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \\ge 1$. 3. **Parallelogram law.** $$\\lVert x+y\\rVert_2^{2} + \\lVert x-y\\rVert_2^{2} \\;=\\; 2\\lVert x\\rVert_2^{2} + 2\\lVert y\\rVert_2^{2} .$$ 4. **Polarisation.** $$\\langle x,y\\rangle \\;=\\; \\tfrac14\\Bigl(\\lVert x+y\\rVert_2^{2} - \\lVert x-y\\rVert_2^{2}\\Bigr),$$ so the inner product is recovered from the norm it induces. **Clause 1 is a citation, not a new proof.** The inequality and its equality case are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of reals; all that happens below is that it is read in the vector notation of [[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one statement in the library.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "1.5",
        "7.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "1.5",
        "7.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "1.5",
        "7.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-componentwise-limits-and-continuity",
      "source_section": "Statement",
      "quote": "Let $m \\in \\mathbb{N}$ with $m \\ge 1$, with vector-valued functions, their components $f_i = \\pi_i \\circ f$, their limits and their continuity as in [[def-vector-valued-functions-limits-and-continuity]]. 1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \\subseteq X$, $f : A \\to \\mathbb{R}^{m}$ and $a \\in A$. Then $f$ is continuous at $a$ if and only if every component $f_i : A \\to \\mathbb{R}$ $(i<m)$ is continuous at $a$. 2. **Limits are componentwise.** Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]), let $f : A \\to \\mathbb{R}^{m}$ and let $L \\in \\mathbb{R}^{m}$. Then $\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]). 3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let $f, g : A \\to \\mathbb{R}^{m}$ be continuous at $a$ and let $\\lambda \\in \\mathbb{R}$. Then $f + g$ and $\\lambda f$ (defined pointwise) are continuous at $a$; the real-valued function $x \\mapsto \\langle f(x), g(x)\\rangle$ is continuous at $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on $\\mathbb{R}^{m}$ the real-valued function $x \\mapsto N(f(x))$ is continuous at $a$ ([[def-norm-and-normed-space]]). **Where $m \\ge 1$ is spent.** The \"if\" direction of clauses 1 and 2 divides $\\varepsilon$ by $\\iota(m)$, which requires $\\iota(m) \\ne 0$; and clause 3's last part quotes a bound available only for $m \\ge 1$. The \"only if\" directions hold for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-vector-valued-derivative-and-integral",
      "source_section": "Definition",
      "quote": "Throughout, $m \\in \\mathbb{N}$ with $m \\ge 1$, and vector-valued functions, their components and their limits are as in [[def-vector-valued-functions-limits-and-continuity]]. ### The derivative Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}^{m}$ and let $c \\in A$ be a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of $f$ at $c$** is the vector-valued function $$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}^{m}, \\qquad q_{f,c}(x) \\;:=\\; \\frac{1}{x - c}\\,\\bigl(f(x) - f(c)\\bigr),$$ the scalar multiple being that of the vector space $\\mathbb{R}^{m}$ ([[def-function-space]]); the division is legitimate because $x \\ne c$ gives $x - c \\ne 0$. As in [[def-derivative]], $c$ is a limit point of $A \\setminus \\{c\\}$ as well, since a punctured neighbourhood of $c$ omits $c$. $f$ is **differentiable at $c$** when $\\lim_{x \\to c} q_{f,c}(x)$ exists in $\\mathbb{R}^{m}$, and then the **derivative** is $$f'(c) \\;:=\\; \\lim_{x\\to c} q_{f,c}(x) \\;\\in\\; \\mathbb{R}^{m}.$$ **The notation denotes a single vector.** At most one $L \\in \\mathbb{R}^{m}$ satisfies the limit condition, as proved in [[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued form of the obligation [[lem-function-limit-unique]] discharges for real-valued functions and [[lem-metric-limits-unique]] for sequences. **The intrinsic form is the definition; the componentwise form is a theorem.** For $i < m$ the $i$-th component of $q_{f,c}(x)$ is $\\bigl(f_i(x)-f_i(c)\\bigr)/(x-c)$, which is the real difference quotient of $f_i$ at $c$ ([[def-derivative]]). So by [[thm-componentwise-limits-and-continuity]] clause 2: > $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable > at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$. Nothing below reverses this order of presentation: the intrinsic limit is what is defined, and the coordinates are read off it. **Algebra of derivatives.** If $f, g : A \\to \\mathbb{R}^{m}$ are differentiable at $c$ and $\\lambda \\in \\mathbb{R}$, then $f + g$ and $\\lambda f$ are differentiable at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\\lambda f)'(c) = \\lambda f'(c)$: read componentwise through the displayed equivalence, these are clauses 1 and 2 of the published [[thm-algebra-of-derivatives]]. ### The integral Let $a, b \\in \\mathbb{R}$ with $a < b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ ([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component $f_i : [a,b] \\to \\mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux integrable in the sense of [[def-darboux-integral]], and then $$\\int_a^b f \\;:=\\; \\text{the function } m \\to \\mathbb{R} \\text{ sending } i \\mapsto \\int_a^b f_i .$$ **That really is an element of $\\mathbb{R}^{m}$.** In this library $\\mathbb{R}^{m}$ is the set of functions $m \\to \\mathbb{R}$ ([[def-function-space]]), not a set of tuples, so the displayed assignment is literally an element of it; each value $\\int_a^b f_i$ is a single real by [[def-darboux-integral]]. In the standard basis ([[lem-standard-basis-of-f-n]]) the same object is $\\int_a^b f = \\sum_{i<m}\\bigl(\\int_a^b f_i\\bigr)e_i$. **Oriented limits.** Following [[def-oriented-integral]] componentwise, set $$\\int_a^a f \\;:=\\; 0 \\in \\mathbb{R}^{m}, \\qquad \\int_b^a f \\;:=\\; -\\int_a^b f \\quad (a < b),$$ so that $\\int_u^v f = -\\int_v^u f$ for all $u,v$ in an interval on which $f$ is integrable. The clauses do not overlap with the case $a<b$, so nothing has to be checked for consistency, exactly as in [[def-oriented-integral]]. **Linearity.** If $f, g : [a,b] \\to \\mathbb{R}^{m}$ are integrable and $\\lambda,\\mu \\in \\mathbb{R}$ then $\\lambda f + \\mu g$ is integrable with $$\\int_a^b (\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f + \\mu\\int_a^b g ,$$ since each side has $i$-th coordinate $\\int_a^b(\\lambda f_i + \\mu g_i)$ and $\\lambda\\int_a^b f_i + \\mu\\int_a^b g_i$ respectively, and those agree by [[thm-linearity-of-the-integral]]. **Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is integrable on every closed subinterval, and for $a<c<b$, $\\int_a^b f = \\int_a^c f + \\int_c^b f$; both are the componentwise readings of [[lem-integrability-on-a-subinterval]] and [[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled coordinate by coordinate.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), neighbourhoods are those of [[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a **limit point of $A$**. The **difference quotient of $f$ at $c$** is the function $$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$ The division is legitimate at every point of the domain, since $x \\ne c$ gives $x - c \\ne 0$. **The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.** For every real $\\varepsilon > 0$ the punctured neighbourhood $N^{*}_{\\varepsilon}(c)$ omits $c$, so $$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$ and the left-hand side is nonempty because $c$ is a limit point of $A$. So $q_{f,c}$ is a function on a set having $c$ as a limit point, and $\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines. $f$ is **differentiable at $c$** when that limit exists, and then the **derivative of $f$ at $c$** is $$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$ **Two obligations are carried by that notation, and both are discharged here.** 1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a single real number. That is legitimate: $c$ is a limit point of the domain $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the symbol denotes. 2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not decoration. At an **isolated** point of $A$ the punctured condition $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at once; this is why [[def-function-limit]] leaves the limit undefined there, and it is why this library defines $f'(c)$ only at a limit point of $A$. At an isolated point of its domain a function is neither differentiable nor non-differentiable here: the question is not posed. **The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is extended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with $q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$. Then $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$. Both conditions read: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that every point $x$ of the relevant domain with $0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$ ([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both quantifiers, so in both cases the points quantified over are exactly the $x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and $q_{f,c}$ take the same value. The two conditions are the same condition. **Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on $S$** when it is differentiable at every $c \\in S$; implicit in that phrase is that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when it is differentiable on the whole of $A$. **Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose $c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the restriction $f|_B : B \\to \\mathbb{R}$, and $$(f|_B)'(c) \\;=\\; f'(c) .$$ Indeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit point of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the restriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and claim 2 of [[lem-limit-is-local]] carries the limit to that restriction. **Every point of a nondegenerate interval is a limit point of it.** Let $J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two elements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real $\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$; then $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and order-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$, the point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same way. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real $\\varepsilon > 0$, that is, $p$ is a limit point of $J$ ([[def-limit-point-r]]). Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol $f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint the difference quotient is taken over the points of $I$ lying on the one side that is available, so what other texts call a one-sided derivative is, here, simply the derivative of $f$ on $I$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in [[def-neighbourhood-r]] and closure as in [[def-interior-closure-boundary-r]]. - $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$. - $x$ is a **limit point** (or *accumulation point*) of $A$ when $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$. - $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$. - The **derived set** of $A$ is $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$ - $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$. **A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq N_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since $x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent points of $A$ are exactly the points of $A \\cup A'$, a statement proved as part of [[thm-closure-characterisations-r]]. **Limit point and isolated point are exact opposites inside $A$.** For $x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point of $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that $N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in $N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$ witnessing isolation is the negation of the condition defining a limit point. A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and never both. **A limit point need not belong to the set, and a point of the set need not be a limit point.** Both possibilities occur, and the two examples that matter later are $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging to it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and neighbourhoods are those of [[def-neighbourhood-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then $f$ is **continuous at $c$** when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$ with $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$. **The point $c$ is required to lie in $A$, and the condition is unpunctured.** Both differ from [[def-function-limit]], and deliberately. There the quantifier runs over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed, and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is automatic. So allowing $x = c$ costs nothing, and it is what lets the definition be stated at every point of $A$, including the points where no limit exists. **Three clauses, and all three are part of the definition.** 1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$ ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$ ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$ witnessing continuity witnesses the limit condition, because the limit condition quantifies over a subset of the points continuity quantifies over; and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses continuity, because the one point it omits, $x = c$, satisfies $|f(c) - f(c)| < \\varepsilon$ anyway. 2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$ ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$ itself, and $|f(c) - f(c)| = 0 < \\varepsilon$. 3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and nothing more. It is not a condition relating $f$ to points outside $A$. Every point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe continuity at every point of $A$. **This is not the raw $\\varepsilon$-$\\delta$ formula of [[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes wrong when the *punctured* formula of [[def-function-limit]] is written down at an arbitrary point of the domain: at an isolated point it is satisfied vacuously by every real $L$ at once, so it defines nothing, and this library therefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point. Continuity at an isolated point is a different matter: the formula above is not vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the only value being compared with itself — and it names a single, well-defined property. The limit is undefined there; the continuity is defined, and is automatic. Clause 1 is the only place where the two notions meet, and it is stated only where the limit exists as a notion. **Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$ ([[def-open-and-closed-in-r]]), then every $c \\in A$ has some $N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty ([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate interval ([[def-interval]]). Isolated points are what force clause 2 to exist at all, and they occur as soon as $A$ is allowed to be an arbitrary subset of $\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ carry the subspace metric of the usual metric $d_{\\mathbb{R}}(x,y) = |x-y|$ of $\\mathbb{R}$, that is $d_A(x,y) = |x - y|$ for $x, y \\in A$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and let $f : A \\to \\mathbb{R}$, regarded also as a map of metric spaces $(A, d_A) \\to (\\mathbb{R}, d_{\\mathbb{R}})$. Then the $\\mathbb{R}$-native notions of this page and the metric-space notions of the earlier pages are the **same notions**, in the following five senses. 1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and only if it is continuous as a map of metric spaces. 2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]] if and only if it is uniformly continuous as a map of metric spaces ([[def-metric-uniform-continuity]]). 3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$ This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means for a real function on $A$ in this library; no second definition is made. 4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces if and only if $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$ the power being the rational power of a nonnegative base ([[def-rational-power]]). 5. **Compactness, in both senses used in this library.** For $K \\subseteq \\mathbb{R}$ with the subspace metric $d_K$: - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily covering $K$ — if and only if the metric space $(K, d_K)$ is compact ([[def-metric-compactness]]); - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and only if $(K, d_K)$ is sequentially compact as a metric space ([[def-metric-compactness-variants]]). Two consequences are recorded, since they are the reason the dictionary is stated as a lemma rather than as a remark. 6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \\to \\mathbb{R}$ is uniformly continuous on $A$; an $\\alpha$-Hölder $f$ with rational $0 < \\alpha \\le 1$ is uniformly continuous on $A$; a uniformly continuous $f$ is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is $\\alpha$-Hölder for every rational $\\alpha$ with $0 < \\alpha \\le 1$. No strictness is claimed here, and none is claimed there. 7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a sequence of reals ([[def-real-limit]]); so by clause 2 and [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous $f : A \\to \\mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of $\\mathbb{R}$. **Why this lemma exists, and why it is a lemma.** Three results of this page — [[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and [[thm-heine-cantor-r]] — are stated a second time here, having already been proved metric-generally as [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is deliberate: the $\\mathbb{R}$-native proofs run through [[thm-heine-borel-characterisation-r]] and [[thm-compact-iff-sequentially-compact-r]], which are order-based, while the metric proofs run through the cover machinery of metric spaces. **This item is the single place in the library where that duplication is acknowledged**, and clauses 1 and 5 are what make the two families of statements literally the same statements. It is a lemma, and not a remark, precisely so that later pages can cite it and move between the two vocabularies. **Clause 5 closes a second seam.** The phrase *compact subset of $\\mathbb{R}$* is defined twice in this library — metrically, as compactness of the metric subspace ([[def-metric-compactness]]), and $\\mathbb{R}$-natively, by covers by open subsets of $\\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no item asserted that the two agree.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then: 1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$; 2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$; 3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$ ([[def-max-min]]), are continuous at $c$; 4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ lies in $A_0$ and the quotient $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at $c$ as a function on $A_0$. Moreover, with no hypothesis at all: 5. every constant function $A \\to \\mathbb{R}$ and the identity $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$ ([[def-integer-power]]), and hence so is every **polynomial function** $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients. Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$, $\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and $(f/g)|_{A_0}$ is continuous on $A_0$. **Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**, and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is $g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in the smaller domain, which is what makes continuity there mean anything. **Nothing here is proved through a sequence.** Claims 1 and 4 are read off from [[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$ and $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice principle is used anywhere in this item.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$ ([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$ ([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then: 1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$; 2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$; 3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$; 4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable at $c$ as a function on $A_0$, and $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$ Each claim asserts two things: that the derivative on the left exists, and that it has the stated value. Both are proved. **Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$ vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$ is forced. That the restriction still has $c$ as a limit point, so that a derivative there means anything at all, is not free either, and it is the last claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis is $g(c) \\ne 0$, not \"$g$ vanishes nowhere\". **Everything is proved through [[thm-caratheodory-characterisation]].** No difference quotient is estimated and no limit theorem beyond continuity is used, so no choice principle is spent. The four identities are four algebraic rearrangements of an increment, each followed by a reading of [[thm-algebra-of-continuous-functions]].",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-differentiable-implies-continuous",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a limit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$ ([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]). Consequently, if $f$ is differentiable on a set $S \\subseteq A$ then $f$ is continuous at every point of $S$. **No converse is asserted, and none holds.** Continuity at $c$ does not give differentiability at $c$, and the standard witness is worked out on the companion page.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-mean-value-theorem",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a < b$ and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and differentiable at every point of $(a,b)$ as a function on $[a,b]$ ([[def-derivative]]). Then there is $c \\in (a,b)$ with $$f(b) - f(a) \\;=\\; f'(c)\\,(b - a) .$$ Equivalently, since $b - a \\ne 0$, there is $c \\in (a,b)$ at which $f'(c) = \\bigl(f(b)-f(a)\\bigr)/(b-a)$: the derivative somewhere inside equals the average rate of change across the whole interval. **Continuity on the closed interval cannot be dropped.** Differentiability at every point of $(a,b)$ alone does not suffice: a function on $[0,1]$, differentiable at every point of $(0,1)$ with derivative constantly $1$, for which no $c$ works, is exhibited later on this page as a false statement, and the companion page works the same witness out in full.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.5",
        "6.1",
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Every component $f_i$ is continuous on $[a,b]$ in the sense of [[def-continuity-real]] and differentiable at every point of $(a,b)$, with $f'(t)_i = f_i'(t)$.",
      "step": "1.1",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$\\varphi(t) = \\sum_{i<m}u_i f_i(t)$ by the coordinate formula for the inner product.",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$\\varphi(b)-\\varphi(a) = \\langle u, f(b)\\rangle - \\langle u, f(a)\\rangle = \\langle u, f(b)-f(a)\\rangle = \\langle u,u\\rangle = \\lVert u\\rVert_2^{2}$, by bilinearity.",
      "step": "1.3",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "By Cauchy-Schwarz and the bound on $\\lVert f'\\rVert_2$, $\\langle u,f'(\\xi)\\rangle \\le \\bigl|\\langle u,f'(\\xi)\\rangle\\bigr| \\le \\lVert u\\rVert_2\\lVert f'(\\xi)\\rVert_2 \\le \\lVert u\\rVert_2 M$.",
      "step": "1.4",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.5",
      "claim": "If $u = 0$ then $\\lVert u\\rVert_2 = 0$ while $M(b-a) \\ge 0$, so the conclusion holds.",
      "step": "1.5",
      "inputs": [
        "L2",
        "L9"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By induction on $p \\le m$, each partial sum $t \\mapsto \\sum_{i<p}u_i f_i(t)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with derivative $\\sum_{i<p}u_i f_i'(t)$: the empty sum is the constant $0$, and each successor step adds one scalar multiple of a function that is continuous and differentiable by step 1.1.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L5",
        "L6",
        "L8"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Hence $\\varphi$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$, and $\\varphi'(t) = \\sum_{i<m}u_i f_i'(t) = \\langle u, f'(t)\\rangle$ for $t \\in (a,b)$.",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 2.1",
        "L1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By the mean value theorem applied to $\\varphi$ there is $\\xi \\in (a,b)$ with $\\varphi(b)-\\varphi(a) = \\varphi'(\\xi)(b-a)$.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L7"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Combining steps 1.3 and 4.1, $\\lVert u\\rVert_2^{2} = \\langle u, f'(\\xi)\\rangle\\,(b-a)$.",
      "step": "5.1",
      "inputs": [
        "step 3.1",
        "step 1.3",
        "step 4.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Since $b-a > 0$, multiplying the inequality of step 1.4 by $b-a$ and using step 5.1 gives $\\lVert u\\rVert_2^{2} \\le \\lVert u\\rVert_2\\,M\\,(b-a)$.",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "step 1.4",
        "L9"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "If $u \\ne 0$ then $\\lVert u\\rVert_2 > 0$, and multiplying step 6.1 by the positive real $1/\\lVert u\\rVert_2$ gives $\\lVert u\\rVert_2 \\le M(b-a)$.",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L2",
        "L9"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "The two cases of steps 1.5 and 7.1 exhaust the possibilities for $u = f(b)-f(a)$, so $\\lVert f(b)-f(a)\\rVert_2 \\le M(b-a)$.",
      "step": "8.1",
      "inputs": [
        "step 1.5",
        "step 7.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The coordinate dimension is explicitly at least one; any interval occurring is nonempty under a<=b or a<b. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, let $a, b \\in \\mathbb{R}$ with $a < b$, and let $f : [a,b] \\to \\mathbb{R}^{m}$ be continuous on $[a,b]$ and differentiable at every point of "
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.5: If $u = 0$ then $\\lVert u\\rVert_2 = 0$ while $M(b-a) \\ge 0$, so the conclusion holds."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, let $a, b \\in \\mathbb{R}$ with $a < b$, and let $f : [a,b] \\to \\mathbb{R}^{m}$ be continuous on $[a,b]$ and differentiable at every point of "
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.1: By induction on $p \\le m$, each partial sum $t \\mapsto \\sum_{i<p}u_i f_i(t)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with derivative $\\sum_{i<p}u_i f_i'(t)$: the empty sum is the constant $0$, and each successor step adds one scalar multiple of a function that is c"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: Every component $f_i$ is continuous on $[a,b]$ in the sense of and differentiable at every point of $(a,b)$, with $f'(t)_i = f_i'(t)$."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-mean-value-inequality: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-mean-value-inequality: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-mean-value-inequality: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-derivative-and-integral",
    "declared_target": "def-vector-valued-derivative-and-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-functions-limits-and-continuity",
    "declared_target": "def-vector-valued-functions-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-limits-and-continuity",
    "declared_target": "thm-componentwise-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "declared_target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "cor-mean-value-theorem",
    "declared_target": "cor-mean-value-theorem",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "cor-differentiable-implies-continuous",
    "declared_target": "cor-differentiable-implies-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (24)

### `cor-bounded-derivative-implies-lipschitz`

````markdown
---
id: cor-bounded-derivative-implies-lipschitz
kind: corollary
title: "If $f$ is continuous on an interval $I$ and $|f'| \\le M$ at every interior point, then $|f(x) - f(y)| \\le M|x-y|$ for all $x,y \\in I$, so $f$ is Lipschitz with constant $M$ and uniformly continuous on $I$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-mean-value-theorem, def-derivative, def-interval, def-continuity-real, def-uniform-continuity-real, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, lem-of-abs-value, def-interior-closure-boundary-r, def-neighbourhood-r, prop-of-multiply-inequalities, def-limit-point-r]
justified_by: []
forward_refs: [cex-differentiable-with-unbounded-derivative-is-not-lipschitz]
aliases: []
landmark: true
short: "bounded derivative gives Lipschitz"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]), and let
$M \in \mathbb{R}$ with $M \ge 0$ satisfy

$$|f'(x)| \;\le\; M \qquad \text{at every interior point } x \text{ of } I .$$

Then

$$|f(x) - f(y)| \;\le\; M\,|x - y| \qquad \text{for all } x, y \in I ,$$

which is exactly the statement that $f$ is **Lipschitz with constant $M$** on
$I$ ([[def-lipschitz-holder-contraction]], clause 3 of
[[lem-real-and-metric-notions-agree]]). Consequently $f$ is uniformly
continuous on $I$ ([[def-uniform-continuity-real]]).

**$M \ge 0$ is a hypothesis, not a deduction.** It follows from
$|f'(x)| \le M$ at any single interior point, absolute values being
nonnegative, but $I$ need have no interior point at all, and then the sign
condition has to be asked for. With $M \ge 0$ assumed the conclusion is a
genuine statement in every case, and at $x = y$ it reads $0 \le 0$.

**Boundedness of $f'$ cannot be dropped.** A function may be continuous on an
interval and differentiable at every interior point with no bound on $|f'|$, and
then it need not be Lipschitz there; the companion page's square root on
$(0,1]$ is such a function.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a function $f : I \to \mathbb{R}$ continuous on $I$ and differentiable at every interior point of $I$, and a real $M \ge 0$ with $|f'(x)| \le M$ at every interior point $x$ of $I$.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v)-h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$; and for $u < v$ in $I$ every $x \in (u,v)$ is interior to $I$, since $N_{\varepsilon}(x) \subseteq (u,v) \subseteq I$ for $\varepsilon := \min\{x-u,\ v-x\} > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L3] Restriction of the domain ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]).

[L4] Continuity passes to a subset of the domain ([[def-continuity-real]]).

[L5] Absolute value ([[lem-of-abs-value]]): $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uw| = |u|\,|w|$; and $|{-u}| = |u|$, so $|x - y| = |y - x|$.

[L6] Dictionary ([[lem-real-and-metric-notions-agree]], clause 3): for a real $L \ge 0$, "$f : A \to \mathbb{R}$ is Lipschitz with constant $L$" means exactly that $|f(x)-f(x')| \le L\,|x-x'|$ for all $x, x' \in A$, this being the metric condition of [[def-lipschitz-holder-contraction]] instantiated at $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$.

[L7] Regularity hierarchy ([[thm-metric-regularity-hierarchy]], claim 2), transported to real functions by clauses 2 and 6 of [[lem-real-and-metric-notions-agree]]: a Lipschitz $f : A \to \mathbb{R}$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]].

[L8] Multiplying non-strict inequalities of nonnegatives ([[prop-of-multiply-inequalities]]): $0 \le s \le t$ and $0 \le w \le z$ imply $sw \le tz$.

## Proof

**Proof technique:** direct.

1.1 Let $x, y \in I$. If $x = y$ then $|f(x)-f(y)| = |0| = 0$ and $M|x-y| = M \cdot 0 = 0$, so the asserted inequality holds. Assume therefore $x \ne y$, and put $u := \min\{x,y\}$ and $v := \max\{x,y\}$, so that $u, v \in I$, $u < v$, and $|x - y| = v - u = |v - u|$ by [L5]. [given, L5]

2.1 By [L2] the segment $[u,v]$ lies in $I$ and is nondegenerate; the restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L4]; and each $x' \in (u,v)$ is interior to $I$ by [L2], hence a point at which $f$ is differentiable with $|f'(x')| \le M$, while $x'$ is a limit point of $[u,v]$ by [L3], so $f|_{[u,v]}$ is differentiable at $x'$ with the same derivative. [step 1.1, L2, L3, L4]

3.1 By step 2.1 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1], so fix $c \in (u,v)$ with $f(v) - f(u) = f'(c)\,(v-u)$. [step 2.1, L1, choose]

4.1 Taking absolute values in step 3.1 and using $|uw| = |u||w|$ gives $|f(v)-f(u)| = |f'(c)|\,|v-u|$. The point $c$ lies in $(u,v)$, hence is interior to $I$ by step 2.1, so $0 \le |f'(c)| \le M$; and $0 \le |v-u| \le |v-u|$. So [L8] gives $|f'(c)|\,|v-u| \le M\,|v-u|$, whence $|f(v)-f(u)| \le M\,|v-u|$. Since $\{u,v\} = \{x,y\}$ and $|f(v)-f(u)| = |f(x)-f(y)|$ by [L5], and $|v-u| = |x-y|$ by step 1.1, this is $|f(x)-f(y)| \le M\,|x-y|$. [step 2.1, step 3.1, L5, L8]

5.1 The pair $x, y \in I$ was arbitrary and the case $x = y$ was settled in step 1.1, so $|f(x)-f(y)| \le M|x-y|$ for all $x, y \in I$. By [L6] that is the statement that $f$ is Lipschitz with constant $M$ on $I$, and by [L7] such an $f$ is uniformly continuous on $I$. [step 1.1, step 4.1, L6, L7] ∎

## Remarks

- **The constant is the bound on the derivative, unchanged.** No factor is lost and none is gained: the mean value theorem turns the increment into a single value of $f'$ times the increment of the argument, so whatever bounds $|f'|$ bounds the Lipschitz ratio. That is why this corollary is so much sharper than the mere uniform continuity that follows from it.

- **Uniform continuity is obtained through the metric dictionary, not reproved.** [[lem-real-and-metric-notions-agree]] says that the Lipschitz condition for a real function is the metric one instantiated, and [[thm-metric-regularity-hierarchy]] says that a Lipschitz map is uniformly continuous. Neither statement is restated here in an $\mathbb{R}$-native form, because both already exist in the library and duplicating them would create exactly the seam those items were written to close.

- **What the converse would say, and why it is not asserted.** A Lipschitz function need not be differentiable at any particular point, so no statement about $f'$ follows from a Lipschitz bound alone, and this corollary asserts none.

- **The boundedness hypothesis is exactly what is needed.** [[cex-differentiable-with-unbounded-derivative-is-not-lipschitz]] on the companion page exhibits a function continuous on $(0,1]$ and differentiable at every interior point, with $|f'|$ bounded by no real at all, which is not Lipschitz there. So the hypothesis cannot be replaced by mere differentiability, and it cannot be replaced by a bound holding only near one end of the interval.
````

### `cor-differentiable-implies-continuous`

````markdown
---
id: cor-differentiable-implies-continuous
kind: corollary
title: "A function differentiable at $c$ is continuous at $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, def-continuity-real, thm-algebra-of-continuous-functions, def-limit-point-r]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: []
landmark: true
short: "differentiable implies continuous"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$
([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).

Consequently, if $f$ is differentiable on a set $S \subseteq A$ then $f$ is
continuous at every point of $S$.

**No converse is asserted, and none holds.** Continuity at $c$ does not give
differentiability at $c$, and the standard witness is worked out on the
companion page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]): since $f$ is differentiable at the limit point $c$ of $A$, there is $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$, and $\varphi(c) = f'(c)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point of the common domain are continuous there (claim 1); and every constant function on $A$ and the identity $x \mapsto x$ on $A$ are continuous at every point of $A$ (claim 5).

[L3] Continuity of $f$ at $c$ is the $\varepsilon$-$\delta$ condition of [[def-continuity-real]], and continuity on a set is continuity at each of its points.

## Proof

**Proof technique:** direct.

1.1 Fix a function $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [L1, choose]

1.2 The identity $x \mapsto x$ on $A$ and every constant function on $A$ are continuous at $c$; hence so is $x \mapsto x - c$, which is the sum of the identity and the constant function with value $-c$. [L2]

2.1 The pointwise product $x \mapsto \varphi(x)(x - c)$ is continuous at $c$, being the product of two functions on $A$ continuous at $c$. [step 1.1, step 1.2, L2]

3.1 For every $x \in A$ one has $f(x) = f(c) + \varphi(x)(x - c)$, so $f$ is the sum of the constant function with value $f(c)$ and the product of step 2.1. [step 1.1, L1]

4.1 A sum of two functions continuous at $c$ is continuous at $c$, so $f$ is continuous at $c$. [step 2.1, step 3.1, L2, L3]

5.1 The point $c$ was an arbitrary point of $A$, a limit point of $A$, at which $f$ is differentiable; applying step 4.1 at every point of a set $S \subseteq A$ on which $f$ is differentiable gives continuity of $f$ at every point of $S$. [step 3.1, L3] ∎

## Remarks

- **Where the work actually is.** None of it is here. Carathéodory's characterisation already replaces the quotient by a product, and a product is visibly small when one factor is bounded near $c$ and the other tends to $0$; the algebra of continuous functions packages exactly that. A direct proof from the quotient would multiply and divide by $x - c$ and would have to say why that is legal, which is the same observation in a less convenient place.

- **The converse fails.** $x \mapsto |x|$ is continuous at $0$ and not differentiable there, which is [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page. So continuity is strictly weaker, and the gap is not exotic: it opens at a single corner.

- **What is *not* claimed.** Nothing here says that a function differentiable on a set has a continuous derivative, and nothing here says that $f'$ is defined anywhere except where it was assumed to be. Both are separate questions, and neither is settled on this page.
````

### `cor-mean-value-theorem`

````markdown
---
id: cor-mean-value-theorem
kind: corollary
title: "The mean value theorem, as the case $g(x) = x$ of Cauchy's: for $f$ continuous on $[a,b]$ with $a < b$ and differentiable on $(a,b)$ there is $c \\in (a,b)$ with $f(b) - f(a) = f'(c)(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-mean-value, def-derivative, def-continuity-real, thm-algebra-of-continuous-functions, def-interval, def-function-limit]
justified_by: []
forward_refs: [cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]
aliases: [thm-mean-value-theorem, thm-lagrange-mean-value]
landmark: true
short: "the mean value theorem"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.10)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-derivative]]). Then there is $c \in (a,b)$ with

$$f(b) - f(a) \;=\; f'(c)\,(b - a) .$$

Equivalently, since $b - a \ne 0$, there is $c \in (a,b)$ at which
$f'(c) = \bigl(f(b)-f(a)\bigr)/(b-a)$: the derivative somewhere inside equals
the average rate of change across the whole interval.

**Continuity on the closed interval cannot be dropped.** Differentiability at
every point of $(a,b)$ alone does not suffice: a function on $[0,1]$,
differentiable at every point of $(0,1)$ with derivative constantly $1$, for
which no $c$ works, is exhibited later on this page as a false statement, and
the companion page works the same witness out in full.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$.

[L1] Cauchy's mean value theorem ([[thm-cauchy-mean-value]]): for $f, g$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$ there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$.

[L2] The identity $x \mapsto x$ is continuous at every point of any $A \subseteq \mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claim 5).

[L3] The identity $g$ on $[a,b]$ is differentiable at every $c \in [a,b]$ with $g'(c) = 1$: with $a < b$ the set $[a,b]$ is order-convex with at least two elements, so every one of its points is a limit point of it ([[def-derivative]], [[def-interval]]); and the difference quotient of $g$ at $c$ is $(x - c)/(x - c) = 1$ for every $x \in [a,b]$ with $x \ne c$, a constant function, whose limit at $c$ is $1$ ([[def-function-limit]], [[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Define $g : [a,b] \to \mathbb{R}$ by $g(x) := x$. [construct]

2.1 $g$ is continuous on $[a,b]$ by [L2]; it is differentiable at every $c \in (a,b)$ with $g'(c) = 1$ by [L3]; and $g(b) - g(a) = b - a$. [step 1.1, L2, L3]

3.1 By step 2.1 the pair $f, g$ satisfies every hypothesis of [L1], so there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$. Substituting $g'(c) = 1$ and $g(b)-g(a) = b-a$ gives $f(b) - f(a) = f'(c)(b-a)$. [step 2.1, L1] ∎

## Remarks

- **The geometric reading, and what it is not.** The conclusion says that some tangent line is parallel to the chord from $(a, f(a))$ to $(b, f(b))$. It does not say which one, it does not say there is only one, and it says nothing at all about $f$ between the endpoints beyond the hypotheses. Every use of the theorem on this page is a use of the equation, never of the picture.

- **Why this is a corollary and not the primitive statement.** [[thm-cauchy-mean-value]] is proved from [[thm-rolle]] with one auxiliary function, and this statement is that theorem at $g(x) = x$; deriving it the other way round, from this statement to Cauchy's, is also possible but needs an auxiliary function of its own, so nothing is saved. What matters is that both rest on Rolle, and Rolle on the extreme value theorem.

- **The two hypotheses are on different sets on purpose.** Continuity is asked for on the closed interval and differentiability only on the open one, so nothing at all is required of the difference quotients at $a$ and at $b$. Weakening the continuity in step with the differentiability, so that both are asked for on $(a,b)$ only, destroys the theorem, which is exactly what [[cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]] shows on the companion page.
````

### `cor-vector-valued-ftc-and-lipschitz-bound`

````markdown
---
id: cor-vector-valued-ftc-and-lipschitz-bound
kind: corollary
title: "If $f : [a,b] \\to \\mathbb{R}^m$ is differentiable with integrable $f'$ then $\\int_a^b f' = f(b)-f(a)$; and a bounded derivative makes $f$ Lipschitz"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-mean-value-inequality, thm-norm-inequality-for-the-vector-valued-integral, thm-componentwise-limits-and-continuity, thm-ftc-second-part, cor-primitives-of-a-continuous-function, def-lipschitz-holder-contraction, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, def-norm-and-normed-space, def-oriented-integral, thm-additivity-over-subintervals, def-derivative, cor-bounded-derivative-implies-lipschitz, def-interval, lem-real-line-is-a-metric-space, def-function-limit, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$ and let $a, b \in \mathbb{R}$ with $a < b$.

1. **Fundamental theorem, second part, in $\mathbb{R}^{m}$.** Let
   $f : [a,b] \to \mathbb{R}^{m}$ be differentiable at every point of $[a,b]$ as
   a function on $[a,b]$ ([[def-vector-valued-derivative-and-integral]]), and
   suppose $f' : [a,b] \to \mathbb{R}^{m}$ is integrable. Then
   $$\int_a^b f' \;=\; f(b) - f(a).$$
2. **A bounded derivative gives a Lipschitz function.** Let
   $f : [a,b] \to \mathbb{R}^{m}$ be continuous on $[a,b]$ and differentiable at
   every point of $(a,b)$, and let $M \ge 0$ satisfy
   $\lVert f'(t)\rVert_2 \le M$ for every $t \in (a,b)$. Then
   $$\lVert f(t) - f(s)\rVert_2 \;\le\; M\,|t-s| \qquad \text{for all } s,t \in [a,b],$$
   that is, $f$ is Lipschitz with constant $M$ as a map
   $([a,b], d_{\mathbb{R}}) \to (\mathbb{R}^{m}, d_2)$
   ([[def-lipschitz-holder-contraction]], [[lem-real-line-is-a-metric-space]],
   [[lem-metrics-on-rn]]).

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a < b$, and a function $f : [a,b] \to \mathbb{R}^{m}$ with the hypotheses of the clause under discussion; points $s, t \in [a,b]$.

[L1] The vector-valued derivative and integral are componentwise: $f'(c)_i = f_i'(c)$, and $f$ is integrable exactly when every $f_i$ is, with $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; equality of two elements of $\mathbb{R}^{m}$ is equality of all their coordinates ([[def-vector-valued-derivative-and-integral]], [[thm-componentwise-limits-and-continuity]]).

[L2] The second fundamental theorem: if $G$ is differentiable on $[a,b]$ with $G' = g$ and $g$ is integrable on $[a,b]$, then $\int_a^b g = G(b)-G(a)$ ([[thm-ftc-second-part]], [[def-derivative]]).

[L3] The mean value inequality on a subinterval ([[thm-mean-value-inequality]]): for $s<t$, $f$ continuous on $[s,t]$ and differentiable on $(s,t)$ with $\lVert f'\rVert_2 \le M$ there, $\lVert f(t)-f(s)\rVert_2 \le M(t-s)$.

[L4] Restricting the domain of a function preserves a limit and its value, the $\varepsilon$-$\delta$ condition then quantifying over fewer points; in particular if $f$ is differentiable at $c$ as a function on $[a,b]$ and $c$ is a limit point of $[s,t] \subseteq [a,b]$, then the restriction of $f$ to $[s,t]$ is differentiable at $c$ with the same derivative ([[def-function-limit]], [[def-vector-valued-functions-limits-and-continuity]], [[def-limit-point-r]], [[def-interval]]).

[L5] Norms and the induced metric: $\lVert w\rVert_2 \ge 0$, $\lVert -w\rVert_2 = \lVert w\rVert_2$, and $d_2(u,w) = \lVert u-w\rVert_2$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]); $d_{\mathbb{R}}(s,t) = |s-t|$ and $|t-s| = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[lem-of-abs-value]]).

[L6] Lipschitz maps: $f$ is Lipschitz with constant $L \ge 0$ when $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x'$ ([[def-lipschitz-holder-contraction]]).

## Proof

**Proof technique:** direct.

1.1 Under the hypotheses of clause 1, each component $f_i$ is differentiable at every point of $[a,b]$ with derivative $f_i' = (f')_i$, and each $(f')_i$ is integrable on $[a,b]$. [L1]

1.2 Under the hypotheses of clause 2, if $s < t$ in $[a,b]$ then $f$ restricted to $[s,t]$ is continuous on $[s,t]$ and differentiable at every point of $(s,t)$ with the same derivative, since $(s,t) \subseteq (a,b)$ and every point of $(s,t)$ is a limit point of $[s,t]$. [L4]

2.1 Applying [L2] to $G := f_i$ and $g := (f')_i$ gives $\int_a^b (f')_i = f_i(b)-f_i(a)$ for every $i<m$. [step 1.1, L2]

2.2 Under the hypotheses of clause 2, for $s<t$ in $[a,b]$ the mean value inequality applies on $[s,t]$ and gives $\lVert f(t)-f(s)\rVert_2 \le M(t-s) = M|t-s|$. [step 1.2, L3, L5]

3.1 The $i$-th coordinate of $\int_a^b f'$ is $\int_a^b (f')_i$ and the $i$-th coordinate of $f(b)-f(a)$ is $f_i(b)-f_i(a)$; by step 2.1 these agree for every $i<m$, so the two vectors are equal, which is clause 1. [step 2.1, L1]

3.2 If $s = t$ then $\lVert f(t)-f(s)\rVert_2 = 0 = M|t-s|$; and if $t < s$ then step 2.2 applied with the roles exchanged gives $\lVert f(s)-f(t)\rVert_2 \le M|s-t|$, and $\lVert f(t)-f(s)\rVert_2 = \lVert -(f(s)-f(t))\rVert_2 = \lVert f(s)-f(t)\rVert_2$ while $|s-t| = |t-s|$. [step 2.2, L5]

4.1 Steps 2.2 and 3.2 cover all pairs $s,t \in [a,b]$, so $\lVert f(t)-f(s)\rVert_2 \le M|t-s|$ always; since $d_2(f(t),f(s)) = \lVert f(t)-f(s)\rVert_2$ and $d_{\mathbb{R}}(t,s) = |t-s|$, this is exactly the Lipschitz condition with constant $M \ge 0$, which is clause 2. [step 2.2, step 3.2, L5, L6] ∎

## Remarks

- **Two routes to the mean value inequality, and why the other one was taken.** When $f'$ happens to be integrable, clause 1 together with [[thm-norm-inequality-for-the-vector-valued-integral]] gives $$\lVert f(b)-f(a)\rVert_2 = \Bigl\lVert\int_a^b f'\Bigr\rVert_2 \le \int_a^b \lVert f'\rVert_2 \le M(b-a),$$ the last step by monotonicity of the integral. That is a second proof of [[thm-mean-value-inequality]] **under an extra hypothesis**. The theorem is proved the other way, from the scalar mean value theorem, precisely because it then needs no integrability at all: it applies to every differentiable $f$. The point is not academic — the companion page's witness for the failure of the equality form is differentiable and is nowhere assumed integrable.

- **When is $f'$ integrable?** Continuity of $f'$ suffices, each component being then continuous and hence integrable, which is the classical form of clause 1 and is what [[cor-primitives-of-a-continuous-function]] supplies for the scalar case. Clause 1 as stated is stronger: it asks only for integrability, exactly as [[thm-ftc-second-part]] does.

- **The scalar case of clause 2 is already published** as [[cor-bounded-derivative-implies-lipschitz]], for a function on an order-convex subset of $\mathbb{R}$. Clause 2 is its $\mathbb{R}^{m}$ analogue on a closed bounded interval, and it is proved from the vector mean value inequality rather than by applying the scalar statement coordinatewise, which would give the worse constant $\iota(m)\,M$.

- **Additivity is not needed above but is available**, so that clause 1 may be applied on any subinterval and the pieces reassembled ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `def-euclidean-inner-product`

````markdown
---
id: def-euclidean-inner-product
kind: definition
title: "The Euclidean inner product $\\langle x,y\\rangle = \\sum_{k<n} x_k y_k$ on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-function-space, def-vector-space, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws, lem-metrics-on-rn, lem-of-square-positive, thm-of-square-roots, def-natural-numbers, lem-nat-order-is-membership, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dot product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dot_product"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$. A natural number is a von Neumann natural, that is a set,
and $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]), so

$$\mathbb{R}^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to \mathbb{R} \,\}$$

is the function space of [[def-function-space]] at $F = \mathbb{R}$ and $X = n$,
a vector space over $\mathbb{R}$ under the pointwise operations
([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of
$\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the
same set that [[lem-metrics-on-rn]] calls $\mathbb{R}^{n}$.

The **Euclidean inner product** of $x, y \in \mathbb{R}^{n}$ is the real number

$$\langle x, y\rangle \;:=\; \sum_{k<n} x_k\,y_k ,$$

the finite sum of [[def-finite-sum]] applied to the list $k \mapsto x_k y_k$
(extended by $0$ beyond $n$, as every finite list in this library is). The
**Euclidean norm** of $x$ is

$$\lVert x\rVert_2 \;:=\; \sqrt{\langle x, x\rangle},$$

which is defined because $\langle x,x\rangle = \sum_{k<n} x_k^{2} \ge 0$ (a sum
of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and
[[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by
[[def-integer-power]]) and every nonnegative real has a unique nonnegative square
root ([[thm-of-square-roots]]).

### Both are defined for every $n$, including $n = 0$

At $n = 0$ the set $\mathbb{R}^{0}$ has exactly one element, the empty function,
and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum
above is the empty sum, so $\langle x,y\rangle = 0$ and $\lVert x\rVert_2 = 0$.
**This is the first place on this page where the two index regimes diverge, and
the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\infty$ of
[[lem-metrics-on-rn]] are defined only for $n \ge 1$, because $d_\infty$ would
otherwise be a maximum over the empty index set; the algebra above needs no such
restriction. The boundary in this page runs between the algebra and the metric,
not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists
exactly which items inherit $n \ge 1$.

### The algebra of the inner product

For all $x, y, z \in \mathbb{R}^{n}$ and $\lambda \in \mathbb{R}$:

1. **Symmetry.** $\langle x,y\rangle = \langle y,x\rangle$, since $x_ky_k = y_kx_k$
   termwise.
2. **Additivity in the first argument.**
   $\langle x + y, z\rangle = \langle x,z\rangle + \langle y,z\rangle$: the list
   $k \mapsto (x_k+y_k)z_k$ is the termwise sum of $k \mapsto x_kz_k$ and
   $k \mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies.
3. **Homogeneity in the first argument.**
   $\langle \lambda x, y\rangle = \lambda\langle x,y\rangle$, by
   [[lem-finite-sum-laws]] clause 2.
4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws
   in the second argument.
5. **Positive definiteness.** $\langle x,x\rangle \ge 0$, and
   $\langle x,x\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of
   nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so
   $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square
   ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$.
6. **Agreement with the published Euclidean metric.** For $n \ge 1$ and
   $x, y \in \mathbb{R}^{n}$,
   $\lVert x - y\rVert_2 = \sqrt{\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two
   sides being the same expression ([[lem-metrics-on-rn]]). In particular
   $\lVert x\rVert_2 = d_2(x, 0)$.

That $\lVert\cdot\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]]
is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle
inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed
here.

## Remarks

- **Scope: the concrete form only.** What is defined above is the Euclidean inner
  product on $\mathbb{R}^{n}$ and nothing more. The general theory of inner
  product spaces — abstract inner products, orthonormal bases, Gram-Schmidt,
  orthogonal projection and orthogonal complements of arbitrary subspaces — is
  planned for a page of this library that comes **earlier in the plan order** and
  is not yet built. No item on this page claims anything about abstract inner
  product spaces, and no item on this page introduces the general notion.

- **The standard basis and coordinates.** For $i < n$ the standard unit vector
  $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$
  ([[lem-standard-basis-of-f-n]]). Then $\langle x, e_i\rangle = x_i$: the list
  $k \mapsto x_k (e_i)_k$ vanishes except at $k = i$, where its value is $x_i$,
  and a list vanishing off one index sums to its value there
  ([[lem-finite-sum-laws]] clause 3, splitting the range at $i$). So the
  coordinates of $x$ are recovered by testing against the standard basis, which
  is the form used repeatedly below.

- **Powers here are integer powers.** $x_k^{2}$ means the integer power of
  [[def-integer-power]], and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ by
  [[thm-of-square-roots]] and [[lem-power-laws]].
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-p-norms-on-rn`

````markdown
---
id: def-p-norms-on-rn
kind: definition
title: "The $p$-norms $\\lVert x\\rVert_p$ for rational $p \\ge 1$, and $\\lVert x\\rVert_\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-euclidean-inner-product, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, lem-rational-power-monotone, rem-real-exponents-deferred, thm-minkowski-finite, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\mathbb{R}^{n}$ be the function space of
[[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$.

### The $p$-norm, for a rational exponent $p \ge 1$

Let $p \in \mathbb{Q}$ with $p \ge 1$. For $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_p \;:=\; \Bigl(\sum_{k<n} |x_k|^{p}\Bigr)^{1/p},$$

where $|\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite
sum of [[def-finite-sum]], and both powers are the **rational** powers of
[[def-rational-power]].

**Every power written here is defined.** Each base $|x_k|$ is a nonnegative real
and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$
and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these
nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and
$1/p$ is a positive rational, so the outer power is defined for the same two
reasons. The value does not depend on which representative of $p$ or of $1/p$ is
used ([[lem-rational-power-well-defined]]).

**The exponent is a rational, and that is not a matter of taste.**
[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent only; real exponents do not exist at this point in the reading order,
and [[rem-real-exponents-deferred]] records exactly why. This is also why the
published Minkowski inequality [[thm-minkowski-finite]], which is what makes the
triangle inequality work below, is itself stated for rational $p \ge 1$. **No
statement on this page is written for $p$ ranging over a real interval.**

### The maximum norm

For $n \ge 1$ and $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_\infty \;:=\; \max\{\, |x_k| \;:\; k < n \,\},$$

the maximum of a nonempty finite set of reals, which exists and is one of its
elements ([[lem-finite-set-has-max]], [[def-max-min]]).

**The hypothesis $n \ge 1$ is required and propagates.** At $n = 0$ the set
$\{|x_k| : k<n\}$ is empty and has no maximum ([[def-max-min]]). This is the same
restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and
**every statement on this page that mentions $\lVert\cdot\rVert_\infty$ inherits
it**. The $p$-norms for rational $p \ge 1$ carry no such restriction: at $n = 0$
each is the empty sum raised to a positive rational power, hence $0$.

### The three cases the rest of the page uses

- $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \ge 0$
  ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause).
- $\lVert x\rVert_2 = \bigl(\sum_{k<n}|x_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}x_k^{2}}$,
  which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the
  exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$
  ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of
  $t$, which is $\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]).
  **The two notations denote the same function and no second Euclidean norm is
  introduced.**
- $\lVert x\rVert_\infty$ as above, for $n \ge 1$.

That each of these is a norm in the sense of [[def-norm-and-normed-space]], and
that the metrics they induce are exactly the published $d_1$, $d_2$ and
$d_\infty$ of [[lem-metrics-on-rn]], is
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there
and is not assumed here.

## Remarks

- **Why $p \ge 1$.** The triangle inequality for $\lVert\cdot\rVert_p$ is
  Minkowski's inequality, and [[thm-minkowski-finite]] is stated for rational
  $p \ge 1$. For $0 < p < 1$ the displayed expression is still defined but is not
  a norm on $\mathbb{R}^{n}$ for $n \ge 2$; nothing on this page asserts anything
  about that range, and the expression is never written with such an exponent.

- **Monotonicity in the base is what makes the comparisons below work.** For a
  fixed positive rational $r$ the map $a \mapsto a^{r}$ is strictly increasing on
  the positive reals ([[lem-rational-power-monotone]] clause 2), so an inequality
  between nonnegative sums passes through the outer power. That is the only
  property of rational powers used in the comparison chain of
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]].

- **The subscript $\infty$ is a name, not a number.** No arithmetic is performed
  with it, and $\lVert\cdot\rVert_\infty$ is not $\lVert\cdot\rVert_p$ for any
  exponent; it is a separately defined function that happens to sit at the end of
  the family. This is the same refusal to extend $\mathbb{R}$ silently that
  [[def-interval]] records for the interval notation.
````

### `def-vector-valued-derivative-and-integral`

````markdown
---
id: def-vector-valued-derivative-and-integral
kind: definition
title: "The derivative and the Riemann integral of a function $[a,b] \\to \\mathbb{R}^m$, defined componentwise and characterised intrinsically"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-derivative, def-darboux-integral, def-oriented-integral, thm-linearity-of-the-integral, thm-algebra-of-derivatives, lem-metric-limits-unique, def-function-limit, lem-function-limit-unique, def-function-space, lem-standard-basis-of-f-n, def-interval, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-limit-point-r, def-p-norms-on-rn, def-euclidean-inner-product, def-bounded-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and vector-valued functions, their
components and their limits are as in
[[def-vector-valued-functions-limits-and-continuity]].

### The derivative

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$ and let $c \in A$ be
a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of
$f$ at $c$** is the vector-valued function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}^{m}, \qquad q_{f,c}(x) \;:=\; \frac{1}{x - c}\,\bigl(f(x) - f(c)\bigr),$$

the scalar multiple being that of the vector space $\mathbb{R}^{m}$
([[def-function-space]]); the division is legitimate because $x \ne c$ gives
$x - c \ne 0$. As in [[def-derivative]], $c$ is a limit point of
$A \setminus \{c\}$ as well, since a punctured neighbourhood of $c$ omits $c$.

$f$ is **differentiable at $c$** when $\lim_{x \to c} q_{f,c}(x)$ exists in
$\mathbb{R}^{m}$, and then the **derivative** is

$$f'(c) \;:=\; \lim_{x\to c} q_{f,c}(x) \;\in\; \mathbb{R}^{m}.$$

**The notation denotes a single vector.** At most one $L \in \mathbb{R}^{m}$
satisfies the limit condition, as proved in
[[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued
form of the obligation [[lem-function-limit-unique]] discharges for real-valued
functions and [[lem-metric-limits-unique]] for sequences.

**The intrinsic form is the definition; the componentwise form is a theorem.**
For $i < m$ the $i$-th component of $q_{f,c}(x)$ is
$\bigl(f_i(x)-f_i(c)\bigr)/(x-c)$, which is the real difference quotient of
$f_i$ at $c$ ([[def-derivative]]). So by
[[thm-componentwise-limits-and-continuity]] clause 2:

> $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable
> at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$.

Nothing below reverses this order of presentation: the intrinsic limit is what is
defined, and the coordinates are read off it.

**Algebra of derivatives.** If $f, g : A \to \mathbb{R}^{m}$ are differentiable at
$c$ and $\lambda \in \mathbb{R}$, then $f + g$ and $\lambda f$ are differentiable
at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\lambda f)'(c) = \lambda f'(c)$: read
componentwise through the displayed equivalence, these are clauses 1 and 2 of the
published [[thm-algebra-of-derivatives]].

### The integral

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}^{m}$
([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component
$f_i : [a,b] \to \mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux
integrable in the sense of [[def-darboux-integral]], and then

$$\int_a^b f \;:=\; \text{the function } m \to \mathbb{R} \text{ sending } i \mapsto \int_a^b f_i .$$

**That really is an element of $\mathbb{R}^{m}$.** In this library
$\mathbb{R}^{m}$ is the set of functions $m \to \mathbb{R}$
([[def-function-space]]), not a set of tuples, so the displayed assignment is
literally an element of it; each value $\int_a^b f_i$ is a single real by
[[def-darboux-integral]]. In the standard basis
([[lem-standard-basis-of-f-n]]) the same object is
$\int_a^b f = \sum_{i<m}\bigl(\int_a^b f_i\bigr)e_i$.

**Oriented limits.** Following [[def-oriented-integral]] componentwise, set

$$\int_a^a f \;:=\; 0 \in \mathbb{R}^{m}, \qquad \int_b^a f \;:=\; -\int_a^b f \quad (a < b),$$

so that $\int_u^v f = -\int_v^u f$ for all $u,v$ in an interval on which $f$ is
integrable. The clauses do not overlap with the case $a<b$, so nothing has to be
checked for consistency, exactly as in [[def-oriented-integral]].

**Linearity.** If $f, g : [a,b] \to \mathbb{R}^{m}$ are integrable and
$\lambda,\mu \in \mathbb{R}$ then $\lambda f + \mu g$ is integrable with

$$\int_a^b (\lambda f + \mu g) \;=\; \lambda\int_a^b f + \mu\int_a^b g ,$$

since each side has $i$-th coordinate $\int_a^b(\lambda f_i + \mu g_i)$ and
$\lambda\int_a^b f_i + \mu\int_a^b g_i$ respectively, and those agree by
[[thm-linearity-of-the-integral]].

**Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is
integrable on every closed subinterval, and for $a<c<b$,
$\int_a^b f = \int_a^c f + \int_c^b f$; both are the componentwise readings of
[[lem-integrability-on-a-subinterval]] and
[[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled
coordinate by coordinate.

## Remarks

- **The two halves are independent.** The derivative clause needs no integral and
  the integral clause needs no derivative; they are collected in one item because
  they are the two constructions of the one-dimensional theory that transfer to
  $\mathbb{R}^{m}$ by the same move, and because
  [[cor-vector-valued-ftc-and-lipschitz-bound]] is what joins them.

- **Why the intrinsic derivative is stated first.** The componentwise formula is
  the one used in computations, but it is tied to the standard basis, whereas the
  limit of the difference quotient is not. The intrinsic form is the one that
  survives when the domain is enlarged from an interval to a subset of
  $\mathbb{R}^{n}$, which is a later page of this track.

- **No norm appears in either definition.** The derivative is a limit in
  $(\mathbb{R}^{m}, d_2)$, and by [[thm-all-norms-on-rn-are-equivalent]] the same
  limits are obtained from any other norm, so the notion does not depend on the
  choice ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]). The integral
  is defined coordinatewise and mentions no metric at all.

- **Integrability of $\lVert f\rVert_2$ is a separate matter** and is not part of
  this definition: it is proved, together with the inequality it belongs to, in
  [[thm-norm-inequality-for-the-vector-valued-integral]].
````

### `def-vector-valued-functions-limits-and-continuity`

````markdown
---
id: def-vector-valued-functions-limits-and-continuity
kind: definition
title: "Vector-valued functions $f : A \\to \\mathbb{R}^m$, their limits and continuity, with the dictionary to the metric notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-euclidean-inner-product, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-metric-space, def-metric-continuity, def-metric-convergence, lem-metrics-on-rn, lem-real-and-metric-notions-agree, def-continuity-real, def-function-limit, def-limit-point-r, def-metric-ball, lem-standard-basis-of-f-n, def-lipschitz-holder-contraction, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and $\mathbb{R}^{m}$ carries the
Euclidean norm $\lVert\cdot\rVert_2$ of [[def-euclidean-inner-product]] and
[[def-p-norms-on-rn]], whose induced metric is the published $d_2$
([[lem-p-norms-are-norms-and-induce-the-published-metrics]],
[[lem-metrics-on-rn]]). A function into $\mathbb{R}^{m}$ is called
**vector-valued**.

### Continuity

Let $(X, d_X)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$
carry the restricted metric $d_A$ ([[def-isometry-and-metric-embedding]]), let
$f : A \to \mathbb{R}^{m}$ and let $a \in A$. Then $f$ is **continuous at $a$**
when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ d_X(x,a) < \delta \ \Longrightarrow\ \lVert f(x) - f(a)\rVert_2 < \varepsilon\ \bigr],$$

with $\varepsilon, \delta$ ranging over the positive reals, and **continuous on
$A$** when it is continuous at every point of $A$.

**This is not a new notion, and that is the point of writing it down.** Since
$\lVert f(x)-f(a)\rVert_2 = d_2\bigl(f(x),f(a)\bigr)$ and $d_A$ is the
restriction of $d_X$, the displayed condition is **verbatim** the condition of
[[def-metric-continuity]] for the map of metric spaces
$f : (A,d_A) \to (\mathbb{R}^{m}, d_2)$. So every theorem about continuous maps
of metric spaces applies to vector-valued functions with no translation, and
this library has exactly one notion of continuity here. The same move was made
once before, between the $\mathbb{R}$-native and the metric notions, in
[[lem-real-and-metric-notions-agree]]; this item is that move one dimension up in
the codomain.

The two cases used below are $X = \mathbb{R}$ with $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]]) and $X = \mathbb{R}^{n}$ with $d_2$, for
$n \ge 1$.

### Limits, for a real domain

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}^{m}$. We say
$f(x)$ **tends to $L$ as $x$ tends to $c$**, and write
$\lim_{x\to c} f(x) = L$, when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ \lVert f(x) - L\rVert_2 < \varepsilon\ \bigr].$$

This is the condition of [[def-function-limit]] with the absolute value in the
codomain replaced by $\lVert\cdot\rVert_2$; as there, the puncture $0 < |x-c|$ is
what makes $c$ a point the function need not be defined at, and the hypothesis
that $c$ is a limit point of $A$ is what stops the condition from being satisfied
vacuously.

**The notation denotes: at most one $L$ satisfies the condition.** Suppose $L$
and $L'$ both do and $L \ne L'$. Then $\varepsilon := \lVert L-L'\rVert_2 / 2 > 0$
by (N1) for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]]). Take $\delta$
and $\delta'$ for this $\varepsilon$ and put $\eta := \min\{\delta,\delta'\} > 0$.
Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x-c| < \eta$
([[def-limit-point-r]]), and then

$$\lVert L - L'\rVert_2 \;\le\; \lVert L - f(x)\rVert_2 + \lVert f(x) - L'\rVert_2 \;<\; \varepsilon + \varepsilon \;=\; \lVert L-L'\rVert_2$$

by (N3) and (N2), which trichotomy forbids. So $L = L'$.

### Components

For $i < m$ define the $i$-th **coordinate projection**
$\pi_i : \mathbb{R}^{m} \to \mathbb{R}$ by $\pi_i(y) := y_i = y(i)$, and for
$f : A \to \mathbb{R}^{m}$ the $i$-th **component** $f_i := \pi_i \circ f$, a
real-valued function on $A$.

**Each $\pi_i$ is $1$-Lipschitz** ([[def-lipschitz-holder-contraction]]): for
$y, z \in \mathbb{R}^{m}$,

$$\bigl|\pi_i(y) - \pi_i(z)\bigr| \;=\; |y_i - z_i| \;\le\; \lVert y - z\rVert_2 \;=\; d_2(y,z),$$

the middle inequality being $|w_i| \le \lVert w\rVert_2$ at $w := y-z$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, or
directly because $w_i^{2}$ is one term of the sum $\sum_{k<m}w_k^{2}$). Written
in coordinates, $f(x)$ is the vector whose $i$-th coordinate is $f_i(x)$, and
$f(x) = \sum_{i<m} f_i(x)\,e_i$ in the standard basis
([[lem-standard-basis-of-f-n]]).

## Remarks

- **The codomain $\mathbb{R}^{0}$ is excluded by the standing hypothesis
  $m \ge 1$, and nothing is lost.** $\mathbb{R}^{0}$ has exactly one element, so
  every function into it is constant and every ball condition holds trivially;
  every such map is continuous and every limit is the unique point. That case is
  true, uninteresting, and not what this page is about. It is also outside the
  reach of [[lem-metrics-on-rn]], which defines the metrics only for $m \ge 1$.

- **The domain may be any metric space, and this matters twice below.** The
  derivative of [[def-vector-valued-derivative-and-integral]] needs a real
  domain, so it uses the limit clause; the companion page's function of two real
  variables needs the domain $\mathbb{R}^{2}$, so it uses the continuity clause.
  Both are instances of the same definition, and neither introduces a second
  notion.

- **When $m = 1$ the codomain is $\mathbb{R}^{1}$, not $\mathbb{R}$.** These are
  different sets, $\mathbb{R}^{1}$ being a set of functions $1 \to \mathbb{R}$.
  The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function
  with value $t$ at $0$ is an isometric bijection for $d_2$
  ([[def-isometry-and-metric-embedding]]), and under it the notions above become
  those of [[def-continuity-real]] and [[def-function-limit]]. Every comparison
  on this page between the vector-valued theory and the one-dimensional theory
  goes through that identification, stated explicitly each time.

- **Convergence of sequences in $\mathbb{R}^{m}$ is not redefined here.** It is
  [[def-metric-convergence]] for $(\mathbb{R}^{m},d_2)$, with balls as in
  [[def-metric-ball]], and its componentwise characterisation is
  [[thm-componentwise-convergence-and-completeness]].
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
````

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-algebra-of-derivatives`

````markdown
---
id: thm-algebra-of-derivatives
kind: theorem
title: "Sums, scalar multiples, products and quotients: $(f+g)'(c) = f'(c) + g'(c)$, $(\\alpha f)'(c) = \\alpha f'(c)$, $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$, and $(f/g)'(c) = \\bigl(f'(c)g(c) - f(c)g'(c)\\bigr)/g(c)^{2}$ when $g(c) \\ne 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, lem-sign-preservation-near-a-limit, def-integer-power, lem-of-no-zero-divisors]
justified_by: []
aliases: [thm-differentiation-rules, thm-product-rule, thm-quotient-rule]
landmark: true
short: "algebra of derivatives"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Product rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_rule"
    - title: "Quotient rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.3)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c \in A$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ be differentiable at $c$
([[def-derivative]]) and let $\alpha \in \mathbb{R}$. Then:

1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;
2. $\alpha f$ is differentiable at $c$ and $(\alpha f)'(c) = \alpha f'(c)$;
3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is differentiable
   at $c$ as a function on $A_0$, and
   $$\bigl((f/g)|_{A_0}\bigr)'(c) \;=\; \frac{f'(c)\,g(c) - f(c)\,g'(c)}{g(c)^{2}} .$$

Each claim asserts two things: that the derivative on the left exists, and that
it has the stated value. Both are proved.

**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$
vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$
is forced. That the restriction still has $c$ as a limit point, so that a
derivative there means anything at all, is not free either, and it is the last
claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis
is $g(c) \ne 0$, not "$g$ vanishes nowhere".

**Everything is proved through
[[thm-caratheodory-characterisation]].** No difference quotient is estimated and
no limit theorem beyond continuity is used, so no choice principle is spent.
The four identities are four algebraic rearrangements of an increment, each
followed by a reading of [[thm-algebra-of-continuous-functions]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, functions $f, g : A \to \mathbb{R}$ differentiable at $c$, and a real $\alpha$; for claim 4 also the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for a set $B \subseteq \mathbb{R}$, a point $p \in B$ that is a limit point of $B$ and a function $h : B \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : B \to \mathbb{R}$, continuous at $p$, with $h(x) - h(p) = \eta(x)(x - p)$ for every $x \in B$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point are continuous there (claim 1); every constant function and the identity are continuous everywhere on the domain (claim 5); and if $u, v$ are continuous at a point $p$ of their common domain $D$ with $v(p) \ne 0$, then $p$ lies in $D_0 := \{x \in D : v(x) \ne 0\}$ and $(u/v)|_{D_0}$ is continuous at $p$ as a function on $D_0$ (claim 4).

[L3] Continuity passes to a subset of the domain: if $B \subseteq A$, if $p \in B$ and if $\psi : A \to \mathbb{R}$ is continuous at $p$, then $\psi|_B$ is continuous at $p$, the condition on the restriction quantifying over fewer points ([[def-continuity-real]]).

[L4] A function differentiable at $c$ is continuous at $c$ ([[cor-differentiable-implies-continuous]]); in particular $g$ is.

[L5] At a limit point $c$ of $A$, continuity of $g$ at $c$ says exactly that $\lim_{x \to c} g(x)$ exists and equals $g(c)$ ([[def-continuity-real]], clause 1, [[def-function-limit]]).

[L6] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $c$ is a limit point of $A$ and $\lim_{x \to c} g(x)$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{x \in A : g(x) \ne 0\}$.

[L7] A product of two nonzero reals is nonzero ([[lem-of-no-zero-divisors]]), and $g(c)^{2} = g(c)\,g(c)$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $f$ and to $g$ on $A$ at $c$, fix $\varphi, \psi : A \to \mathbb{R}$, both continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ and $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$, and with $\varphi(c) = f'(c)$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 Assume $g(c) \ne 0$. Then $c \in A_0$ by the definition of $A_0$; $g$ is continuous at $c$ by [L4], so $\lim_{x \to c} g(x) = g(c) \ne 0$ by [L5]; and therefore $c$ is a limit point of $A_0$ by [L6]. [L4, L5, L6]

2.1 **Sum.** For every $x \in A$, $(f+g)(x) - (f+g)(c) = \bigl(f(x)-f(c)\bigr) + \bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x) + \psi(x)\bigr)(x-c)$. The function $\varphi + \psi$ is continuous at $c$ by [L2], and $(\varphi+\psi)(c) = f'(c) + g'(c)$. So [L1] gives claim 1. [step 1.1, L1, L2]

2.2 **Scalar multiple.** For every $x \in A$, $(\alpha f)(x) - (\alpha f)(c) = \alpha\bigl(f(x)-f(c)\bigr) = \bigl(\alpha\varphi(x)\bigr)(x-c)$. The function $\alpha\varphi$ is continuous at $c$ by [L2], with value $\alpha f'(c)$ there. So [L1] gives claim 2. [step 1.1, L1, L2]

2.3 **Product.** For every $x \in A$, $f(x)g(x) - f(c)g(c) = \bigl(f(x)-f(c)\bigr)g(x) + f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(x) + f(c)\psi(x)\bigr)(x-c)$. Put $\chi := \varphi\,g + f(c)\,\psi$; it is continuous at $c$ by [L2], since $\varphi$, $\psi$ and (by [L4]) $g$ are, and constants are; and $\chi(c) = \varphi(c)g(c) + f(c)\psi(c) = f'(c)g(c) + f(c)g'(c)$. So [L1] gives claim 3. [step 1.1, L1, L2, L4]

2.4 **Quotient, the rearrangement.** Assume $g(c) \ne 0$ and let $x \in A_0$, so $g(x) \ne 0$ and $g(c) \ne 0$. Then $f(x)/g(x) - f(c)/g(c) = \bigl(f(x)g(c) - f(c)g(x)\bigr)/\bigl(g(x)g(c)\bigr)$, and $f(x)g(c) - f(c)g(x) = \bigl(f(x)-f(c)\bigr)g(c) - f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)(x-c)$. So, defining $\theta : A_0 \to \mathbb{R}$ by $\theta(x) := \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)/\bigl(g(x)g(c)\bigr)$, one has $(f/g)|_{A_0}(x) - (f/g)|_{A_0}(c) = \theta(x)(x-c)$ for every $x \in A_0$. [step 1.1, L1, L7]

2.5 **Quotient, continuity of the factor.** Assume $g(c) \ne 0$. The restrictions of $\varphi$, $\psi$ and $g$ to $A_0$ are continuous at $c \in A_0$ by [L3] and [L4], so by [L2] the numerator $u(x) := \varphi(x)g(c) - f(c)\psi(x)$ and the denominator $v(x) := g(x)g(c)$ are continuous at $c$ as functions on $A_0$. By [L7] the denominator vanishes at no point of $A_0$, so $\{x \in A_0 : v(x) \ne 0\} = A_0$, and $v(c) = g(c)^{2} \ne 0$; hence claim 4 of [L2] gives that $\theta = (u/v)|_{A_0}$ is continuous at $c$, with $\theta(c) = \bigl(\varphi(c)g(c) - f(c)\psi(c)\bigr)/g(c)^{2} = \bigl(f'(c)g(c) - f(c)g'(c)\bigr)/g(c)^{2}$. [step 1.1, step 1.2, L2, L3, L4, L7]

3.1 **Quotient, conclusion.** Assume $g(c) \ne 0$. By step 1.2 the point $c$ lies in $A_0$ and is a limit point of $A_0$; by steps 2.4 and 2.5 the function $\theta : A_0 \to \mathbb{R}$ is continuous at $c$ and factors the increment of $(f/g)|_{A_0}$. So [L1], applied on the domain $A_0$ at the point $c$, gives that $(f/g)|_{A_0}$ is differentiable at $c$ with derivative $\theta(c)$: claim 4. [step 1.2, step 2.4, step 2.5, L1]

4.1 Claims 1 to 4 are proved, by steps 2.1, 2.2, 2.3 and 3.1 respectively, each by exhibiting the Carathéodory factor of the new function and reading its continuity at $c$ off the algebra of continuous functions. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The product rearrangement in one line.** The identity $fg - f(c)g(c) = (f - f(c))\,g + f(c)\,(g - g(c))$ splits the increment of a product into two increments, one multiplied by $g$ and one by a constant. It is the same identity that carries the product case of [[thm-algebra-of-function-limits]], read at the level of increments rather than of $\varepsilon$; here the factor $g$ has to be continuous at $c$ rather than merely bounded near it, and [[cor-differentiable-implies-continuous]] is what supplies that.

- **The reciprocal is the case $f \equiv 1$.** Claim 4 then reads $\bigl((1/g)|_{A_0}\bigr)'(c) = -g'(c)/g(c)^{2}$, since $f'(c) = 0$ for a constant $f$; nothing separate has to be proved, and the derivative of a negative integer power on this page is obtained exactly this way.

- **Two hypotheses that look removable and are not.** In claim 4 the hypothesis $g(c) \ne 0$ cannot be weakened to "$g$ is nonzero somewhere near $c$", because $c$ itself must lie in the smaller domain for a derivative there to be a statement about $c$; and the conclusion is about $(f/g)|_{A_0}$, not about any extension of it to $A$, since no such extension is canonical.
````

### `thm-cauchy-schwarz-and-the-euclidean-norm`

````markdown
---
id: thm-cauchy-schwarz-and-the-euclidean-norm
kind: theorem
title: "Cauchy-Schwarz $\\lvert\\langle x,y\\rangle\\rvert \\le \\lVert x\\rVert_2\\lVert y\\rVert_2$ with its equality case, the triangle inequality for $\\lVert\\cdot\\rVert_2$, the parallelogram law and polarisation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-inner-product, def-norm-and-normed-space, thm-cauchy-schwarz-finite, thm-minkowski-finite, lem-finite-sum-laws, def-finite-sum, thm-of-square-roots, lem-of-square-monotone, lem-metrics-on-rn, def-integer-power, lem-of-abs-value, def-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Parallelogram law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parallelogram_law"
    - title: "Polarization identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Polarization_identity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $x, y \in \mathbb{R}^{n}$, with the Euclidean
inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then:

1. **Cauchy-Schwarz.**
   $$\lvert\langle x,y\rangle\rvert \;\le\; \lVert x\rVert_2\,\lVert y\rVert_2 ,$$
   with equality if and only if there is a pair $(\lambda,\mu) \ne (0,0)$ of
   reals with $\lambda x_k = \mu y_k$ for every $k < n$.
2. **$\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$**
   ([[def-norm-and-normed-space]]), for **every** $n \in \mathbb{N}$; the metric
   it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \ge 1$.
3. **Parallelogram law.**
   $$\lVert x+y\rVert_2^{2} + \lVert x-y\rVert_2^{2} \;=\; 2\lVert x\rVert_2^{2} + 2\lVert y\rVert_2^{2} .$$
4. **Polarisation.**
   $$\langle x,y\rangle \;=\; \tfrac14\Bigl(\lVert x+y\rVert_2^{2} - \lVert x-y\rVert_2^{2}\Bigr),$$
   so the inner product is recovered from the norm it induces.

**Clause 1 is a citation, not a new proof.** The inequality and its equality case
are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of
reals; all that happens below is that it is read in the vector notation of
[[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one
statement in the library.

## Facts & Assumptions

**Given:** A natural number $n$ and vectors $x, y \in \mathbb{R}^{n}$, so that $\langle x,y\rangle = \sum_{k<n}x_ky_k$ and $\lVert x\rVert_2 = \sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]], [[def-finite-sum]]).

[L1] Cauchy-Schwarz for finite sums ([[thm-cauchy-schwarz-finite]]): $\bigl(\sum_{k<n}a_kb_k\bigr)^{2} \le \bigl(\sum_{k<n}a_k^{2}\bigr)\bigl(\sum_{k<n}b_k^{2}\bigr)$, with equality if and only if there is $(\lambda,\mu) \ne (0,0)$ with $\lambda a_k = \mu b_k$ for every $k<n$; and the root form $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L2] The inner product is symmetric, bilinear and positive definite, $\langle x,x\rangle = \sum_{k<n}x_k^{2} \ge 0$, and $\langle x,x\rangle = 0$ exactly when $x = 0$ ([[def-euclidean-inner-product]], [[lem-finite-sum-laws]]).

[L3] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $s \ge 0$ with $s^{2} = c$, written $\sqrt{c}$; hence $\lVert x\rVert_2 \ge 0$ and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ ([[def-integer-power]]).

[L4] Squaring is monotone on the nonnegatives: for $a,b \ge 0$, $a \le b$ if and only if $a^{2} \le b^{2}$, and $a = b$ if and only if $a^{2} = b^{2}$ ([[lem-of-square-monotone]]).

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, and $|st| = |s|\,|t|$.

[L6] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]), and the fact that $d_2(u,v) = \lVert u-v\rVert_2$ for $n \ge 1$ ([[lem-metrics-on-rn]], [[def-euclidean-inner-product]] clause 6).

## Proof

**Proof technique:** direct.

1.1 Instantiating [L1] at $a_k := x_k$ and $b_k := y_k$ gives $\langle x,y\rangle^{2} \le \langle x,x\rangle\,\langle y,y\rangle$, with equality exactly when some $(\lambda,\mu) \ne (0,0)$ has $\lambda x_k = \mu y_k$ for every $k<n$. [L1, L2]

1.2 Both $\lvert\langle x,y\rangle\rvert$ and $\lVert x\rVert_2\lVert y\rVert_2$ are nonnegative, and their squares are $\langle x,y\rangle^{2}$ and $\langle x,x\rangle\langle y,y\rangle$. [L3, L5]

1.3 Expanding by bilinearity and symmetry, $\langle x+y, x+y\rangle = \langle x,x\rangle + \langle x,y\rangle + \langle y,x\rangle + \langle y,y\rangle = \lVert x\rVert_2^{2} + 2\langle x,y\rangle + \lVert y\rVert_2^{2}$. [L2, L3]

1.4 The same expansion at $x - y = x + (-1)y$ gives $\lVert x-y\rVert_2^{2} = \lVert x\rVert_2^{2} - 2\langle x,y\rangle + \lVert y\rVert_2^{2}$. [L2, L3]

1.5 For a scalar $\lambda$, $\langle \lambda x, \lambda x\rangle = \lambda^{2}\langle x,x\rangle = |\lambda|^{2}\lVert x\rVert_2^{2}$, so $\lVert \lambda x\rVert_2^{2} = \bigl(|\lambda|\lVert x\rVert_2\bigr)^{2}$. [L2, L3, L5]

1.6 Axiom (N1) holds: $\lVert x\rVert_2 = 0$ if and only if $\lVert x\rVert_2^{2} = \langle x,x\rangle = 0$, which by positive definiteness says $x = 0$. [L2, L3, L4]

2.1 Comparing the squares of step 1.2 through step 1.1 and using monotonicity of squaring on the nonnegatives yields $\lvert\langle x,y\rangle\rvert \le \lVert x\rVert_2\lVert y\rVert_2$, with equality exactly in the proportional case of step 1.1; this is clause 1. [step 1.1, step 1.2, L4]

2.2 Adding the identities of step 1.3 and step 1.4 gives $\lVert x+y\rVert_2^{2} + \lVert x-y\rVert_2^{2} = 2\lVert x\rVert_2^{2} + 2\lVert y\rVert_2^{2}$, which is clause 3. [step 1.3, step 1.4, algebra]

2.3 Subtracting the identity of step 1.4 from that of step 1.3 gives $\lVert x+y\rVert_2^{2} - \lVert x-y\rVert_2^{2} = 4\langle x,y\rangle$, which is clause 4 after dividing by $4$. [step 1.3, step 1.4, algebra]

2.4 Both $\lVert \lambda x\rVert_2$ and $|\lambda|\lVert x\rVert_2$ are nonnegative and by step 1.5 have equal squares, so $\lVert \lambda x\rVert_2 = |\lambda|\lVert x\rVert_2$, which is axiom (N2). [step 1.5, L3, L4, L5]

3.1 By step 2.1 the middle term of step 1.3 satisfies $2\langle x,y\rangle \le 2\lVert x\rVert_2\lVert y\rVert_2$, so $\lVert x+y\rVert_2^{2} \le \lVert x\rVert_2^{2} + 2\lVert x\rVert_2\lVert y\rVert_2 + \lVert y\rVert_2^{2} = \bigl(\lVert x\rVert_2 + \lVert y\rVert_2\bigr)^{2}$. [step 1.3, step 2.1, L5, algebra]

4.1 Both $\lVert x+y\rVert_2$ and $\lVert x\rVert_2 + \lVert y\rVert_2$ are nonnegative, so step 3.1 and monotonicity of squaring give $\lVert x+y\rVert_2 \le \lVert x\rVert_2 + \lVert y\rVert_2$, which is axiom (N3). [step 3.1, L3, L4]

5.1 Steps 2.4, 1.6 and 4.1 are exactly (N1), (N2) and (N3), so $\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$ for every $n \in \mathbb{N}$, and for $n \ge 1$ the metric it induces is $d_2$; this is clause 2, and with steps 2.1, 2.2 and 2.3 all four clauses are proved. [step 2.1, step 2.2, step 2.3, step 2.4, step 1.6, step 4.1, L6] ∎

## Remarks

- **Which route to the triangle inequality was taken.** The proof above obtains (N3) by expanding $\lVert x+y\rVert_2^{2}$ and applying Cauchy-Schwarz. The alternative is to quote [[thm-minkowski-finite]] at the rational exponent $p = 2$, which states the same inequality directly; that route is equally legitimate and is the one [[lem-p-norms-are-norms-and-induce-the-published-metrics]] uses for a general exponent. Only one of the two is used here, so no statement is proved twice.

- **Clause 1 holds at $n = 0$, where it reads $0 \le 0$**, and the equality case is then satisfied by every pair $(\lambda,\mu) \ne (0,0)$, the condition quantifying over no indices. Clause 2 also holds at $n = 0$, the zero space carrying exactly one norm ([[def-norm-and-normed-space]]). What is not available at $n = 0$ is the metric $d_2$ of [[lem-metrics-on-rn]], which is why the last sentence of clause 2 carries $n \ge 1$.

- **Clauses 3 and 4 are what the companion page uses.** The parallelogram law is an identity satisfied by every norm of the form $\sqrt{\langle\cdot,\cdot\rangle}$, so a norm violating it is not of that form; that is how the companion page rules out $\lVert\cdot\rVert_1$ on $\mathbb{R}^{2}$. Polarisation says the inner product carries no information the norm does not.
````

### `thm-componentwise-limits-and-continuity`

````markdown
---
id: thm-componentwise-limits-and-continuity
kind: theorem
title: "A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, def-metric-continuity, def-function-limit, def-limit-point-r, lem-finite-sum-laws, def-finite-sum, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-finite-choice, lem-of-abs-value, def-metric-space, lem-real-line-is-a-metric-space, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "MAT237 Multivariable Calculus, Section 1.2: Limits and continuity"
      url: "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html"
    - title: "APEX Calculus, Section 12.2: Calculus and Vector-Valued Functions"
      url: "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$; a metric space $(X,d_X)$, a subset $A \subseteq X$, a point $a \in A$ and functions $f, g : A \to \mathbb{R}^{m}$; a real $\lambda$; and a real $\varepsilon > 0$.

[L1] Continuity and limits of vector-valued functions in the $\varepsilon$-$\delta$ form, the coordinate projections $\pi_i$, and $|y_i| \le \lVert y\rVert_2$ for $i<m$ ([[def-vector-valued-functions-limits-and-continuity]], [[def-metric-continuity]], [[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

[L2] The comparison $\lVert y\rVert_2 \le \lVert y\rVert_1 = \sum_{i<m}|y_i|$, and $N(y) \le C\lVert y\rVert_1 \le C\sqrt{\iota(m)}\lVert y\rVert_2$ with $C := \max\{N(e_i) : i<m\} \ge 0$, together with $|N(y)-N(z)| \le N(y-z)$, all for $m \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1, 2, 3, [[def-p-norms-on-rn]], [[lem-standard-basis-of-f-n]]).

[L3] The norm axioms for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and $\lVert u-v\rVert_2 = d_2(u,v)$.

[L4] Cauchy-Schwarz: $|\langle u,v\rangle| \le \lVert u\rVert_2\lVert v\rVert_2$, together with bilinearity and symmetry of the inner product ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L5] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{i<m}\mu = \iota(m)\mu$, a sum of nonnegative terms is nonnegative, and each single term is at most such a sum.

[L6] $\iota(m) > 0$ for $m \ge 1$, and $u>0$ gives $u^{-1}>0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L7] A nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and a family of nonempty sets indexed by a natural number has a choice function, this being a theorem of ZF ([[lem-finite-choice]]), which is what licenses picking one $\delta_i$ for each $i<m$.

[L8] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|st| = |s||t|$, and $|s+t| \le |s|+|t|$.

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{m}$: $|y_i| \le \lVert y\rVert_2$ for each $i<m$, and $\lVert y\rVert_2 \le \sum_{i<m}|y_i|$. [L1, L2]

1.2 If $a_i < b_i$ for every $i<m$ and $m \ge 1$, then $\sum_{i<m}a_i < \sum_{i<m}b_i$: the list $i \mapsto b_i - a_i$ has positive terms, so its sum is at least its term at index $0$, hence positive, and additivity gives the strict inequality. [L5, L6]

1.3 For each $i<m$ the set of positive reals $\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\delta_0,\dots,\delta_{m-1}$ simultaneously, with no choice principle used. [L7]

1.4 For $f+g$: given $\varepsilon > 0$, pick $\delta_1, \delta_2 > 0$ for the tolerance $\varepsilon/\iota(2)$ at $f$ and at $g$ and put $\delta := \min\{\delta_1,\delta_2\}$; then for $d_X(x,a) < \delta$, $\lVert (f+g)(x)-(f+g)(a)\rVert_2 = \lVert (f(x)-f(a)) + (g(x)-g(a))\rVert_2 \le \lVert f(x)-f(a)\rVert_2 + \lVert g(x)-g(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L7]

1.5 For $\lambda f$: if $\lambda = 0$ then $\lambda f$ is constant and every $\delta$ serves; otherwise $|\lambda| > 0$, and a $\delta$ for the tolerance $\varepsilon/|\lambda|$ at $f$ gives $\lVert \lambda f(x) - \lambda f(a)\rVert_2 = |\lambda|\,\lVert f(x)-f(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L8]

1.6 For $N \circ f$: by [L2], $|N(f(x)) - N(f(a))| \le N\bigl(f(x)-f(a)\bigr) \le C\sqrt{\iota(m)}\,\lVert f(x)-f(a)\rVert_2$; so a $\delta$ for the tolerance $\varepsilon/(C\sqrt{\iota(m)}+1)$ at $f$ serves for $N\circ f$. [L1, L2, L6]

1.7 For $\langle f,g\rangle$: first take $\delta_0 > 0$ with $\lVert g(x)-g(a)\rVert_2 < 1$ for $d_X(x,a) < \delta_0$, so that $\lVert g(x)\rVert_2 \le \lVert g(x)-g(a)\rVert_2 + \lVert g(a)\rVert_2 < B := \lVert g(a)\rVert_2 + 1$ there. [L1, L3]

2.1 Suppose $f$ is continuous at $a$ and fix $i<m$. Given $\varepsilon > 0$, take $\delta$ from the definition; for $x \in A$ with $d_X(x,a) < \delta$, step 1.1 gives $|f_i(x)-f_i(a)| \le \lVert f(x)-f(a)\rVert_2 < \varepsilon$. So $f_i$ is continuous at $a$. [step 1.1, L1]

2.2 Conversely suppose every $f_i$ is continuous at $a$. Given $\varepsilon > 0$, the real $\varepsilon/\iota(m)$ is positive; by step 1.3 choose $\delta_i > 0$ for each $i<m$ with $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$ whenever $x \in A$ and $d_X(x,a) < \delta_i$, and put $\delta := \min\{\delta_0,\dots,\delta_{m-1}\} > 0$. [step 1.3, L1, L6, L7]

2.3 By bilinearity, $\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle = \langle f(x)-f(a),\, g(x)\rangle + \langle f(a),\, g(x)-g(a)\rangle$, so Cauchy-Schwarz and step 1.7 give $\bigl|\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle\bigr| \le B\,\lVert f(x)-f(a)\rVert_2 + \lVert f(a)\rVert_2\,\lVert g(x)-g(a)\rVert_2$ for every $x \in A$ with $d_X(x,a) < \delta_0$. [step 1.7, L4, L8]

3.1 For $x \in A$ with $d_X(x,a) < \delta$: each $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$, so by steps 1.1 and 1.2, $\lVert f(x)-f(a)\rVert_2 \le \sum_{i<m}|f_i(x)-f_i(a)| < \sum_{i<m}\varepsilon/\iota(m) = \varepsilon$. Hence $f$ is continuous at $a$, and clause 1 is proved. [step 1.1, step 1.2, step 2.2, L5, L6]

3.2 Clause 2 is the same two estimates with $f(a)$ replaced by $L$, $f_i(a)$ by $L_i$, and the condition $d_X(x,a) < \delta$ by $0 < |x-c| < \delta$: step 1.1 gives $|f_i(x)-L_i| \le \lVert f(x)-L\rVert_2$ for the forward direction, and steps 1.1, 1.2 give $\lVert f(x)-L\rVert_2 \le \sum_{i<m}|f_i(x)-L_i| < \varepsilon$ for the converse, with $\delta$ the minimum of $m$ radii obtained as in step 2.2. [step 1.1, step 1.2, step 1.3, L1, L5, L6, L7]

3.3 Put $P := B + \lVert f(a)\rVert_2 + 1 > 0$ and take $\delta \le \delta_0$ positive with both $\lVert f(x)-f(a)\rVert_2 < \varepsilon/P$ and $\lVert g(x)-g(a)\rVert_2 < \varepsilon/P$ for $d_X(x,a) < \delta$; then step 2.3 bounds the difference by $(B + \lVert f(a)\rVert_2)\varepsilon/P < \varepsilon$, so $\langle f,g\rangle$ is continuous at $a$. [step 1.7, step 2.3, L1, L6, L7]

4.1 Steps 1.4, 1.5, 1.6 and 3.3 are clause 3, and with steps 3.1 and 3.2 all three clauses are proved. [step 3.1, step 3.2, step 1.4, step 1.5, step 1.6, step 3.3] ∎

## Remarks

- **Why the algebra is proved here rather than quoted.** The published [[thm-algebra-of-continuous-functions]] and [[thm-algebra-of-function-limits]] are stated for real-valued functions on a subset of $\mathbb{R}$, and the domain in clause 3 is a subset of an arbitrary metric space; quoting them for a metric domain would be a citation to an item for a claim it does not make. The estimates in steps 1.4 to 3.3 are the same ones, written out. When the domain **is** a subset of $\mathbb{R}$, clause 1 and [[lem-real-and-metric-notions-agree]] identify the two readings, and the published theorems may then be used on the components.

- **Clause 3 is what makes the mean value inequality work.** The auxiliary function $t \mapsto \langle u, f(t)\rangle$ of [[thm-mean-value-inequality]] is continuous exactly by the inner-product part of clause 3, applied with the constant function $u$.

- **Nothing here is a sequential argument, so no choice principle is used** beyond the finitely many simultaneous selections of steps 1.3, 2.2 and 3.3, which are covered by [[lem-finite-choice]], a theorem of ZF.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-norm-inequality-for-the-vector-valued-integral`

````markdown
---
id: thm-norm-inequality-for-the-vector-valued-integral
kind: theorem
title: "For $a \\le b$ and integrable $f : [a,b] \\to \\mathbb{R}^m$, $\\lVert f\\rVert_2$ is integrable and $\\bigl\\lVert\\int_a^b f\\bigr\\rVert_2 \\le \\int_a^b \\lVert f\\rVert_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-composition-with-a-continuous-function, def-oriented-integral, def-darboux-integral, thm-of-square-roots, thm-continuous-inverse, def-continuity-real, lem-of-inverse-positive, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-bounded-set, lem-of-square-monotone, def-interval, thm-algebra-of-continuous-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Stephen Semmes, Some Basic Topics in Analysis, Sections 8.1.2–8.1.3"
      url: "https://math.rice.edu/~semmes/math322.pdf"
    - title: "Robert Gressman, Advanced Analysis, Integrating Vector-Valued Functions; Jensen's Inequality"
      url: "https://www2.math.upenn.edu/~gressman/analysis/13-jensen.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a \le b$
and let $f : [a,b] \to \mathbb{R}^{m}$ be integrable
([[def-vector-valued-derivative-and-integral]]). Then:

1. if $a < b$, the real-valued function $t \mapsto \lVert f(t)\rVert_2$ is
   integrable on $[a,b]$ ([[def-darboux-integral]], [[def-p-norms-on-rn]]);
2. $$\Bigl\lVert \int_a^b f \Bigr\rVert_2 \;\le\; \int_a^b \lVert f\rVert_2 .$$

**The hypothesis $a \le b$ is not decoration.** With the orientation convention
of [[def-oriented-integral]] and
[[def-vector-valued-derivative-and-integral]], interchanging the limits changes
the sign of the right-hand side but not of the left, so for $b < a$ the correct
statement is $\bigl\lVert\int_a^b f\bigr\rVert_2 \le \bigl|\int_a^b \lVert f\rVert_2\bigr|$;
the displayed inequality as written is false in that case. This is the same trap
the scalar inequality of
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] carries.

**Clause 1 is a genuine obligation and is discharged before the estimate.** That
each $f_i$ is integrable does not by itself say that
$\sqrt{\sum_{i<m} f_i^{2}}$ is; the square root has to be brought in through
[[thm-composition-with-a-continuous-function]].

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a \le b$, an integrable $f : [a,b] \to \mathbb{R}^{m}$ with components $f_0,\dots,f_{m-1}$, and the vector $v := \int_a^b f \in \mathbb{R}^{m}$; write $g(t) := \sum_{i<m} f_i(t)^{2}$, so that $\lVert f(t)\rVert_2 = \sqrt{g(t)}$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L1] The vector-valued integral is componentwise: $f$ is integrable exactly when every $f_i$ is bounded and Darboux integrable, and then $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; $\int_a^a f = 0$ ([[def-vector-valued-derivative-and-integral]], [[def-darboux-integral]], [[def-oriented-integral]], [[def-bounded-set]]).

[L2] Linearity of the integral: integrable functions on $[a,b]$ are closed under sums and scalar multiples, and $\int_a^b(\lambda u + \mu w) = \lambda\int_a^b u + \mu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] Monotonicity of the integral: for $a<b$ and integrable $u \le w$ on $[a,b]$, $\int_a^b u \le \int_a^b w$; and an integrable $u \ge 0$ has $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L4] Products and squares: if $u,w$ are integrable on $[a,b]$ then so are $|u|$, $u^{2}$ and $uw$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] Composition: if $u$ is integrable on $[a,b]$ with values in $[\alpha,\beta]$ and $\varphi$ is continuous on $[\alpha,\beta]$, then $\varphi\circ u$ is integrable on $[a,b]$ ([[thm-composition-with-a-continuous-function]], [[def-continuity-real]]).

[L6] Square roots ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt c)^{2} = c$, and $s \mapsto s^{2}$ is strictly increasing on the nonnegatives, hence injective there.

[L7] Continuous inverse theorem: a continuous injective function on an order-convex subset of $\mathbb{R}$ is a bijection onto its order-convex image, whose inverse is continuous ([[thm-continuous-inverse]], [[def-interval]]); and $s \mapsto s^{2}$ is continuous ([[thm-algebra-of-continuous-functions]]).

[L8] Cauchy-Schwarz and the inner product: $\langle u,w\rangle = \sum_{i<m}u_iw_i$ is bilinear and symmetric, $\lVert u\rVert_2 = \sqrt{\langle u,u\rangle}$, $\lVert u\rVert_2 \ge 0$, and $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]]).

[L9] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L10] Order arithmetic: $u > 0$ gives $u^{-1} > 0$, a product of nonnegatives is nonnegative, and $t \le |t|$ ([[lem-of-inverse-positive]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $a = b$ then $\int_a^b f = 0$ and $\int_a^b\lVert f\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on. [L1]

1.2 Each component $f_i$ is bounded and integrable on $[a,b]$, so each $f_i^{2}$ is integrable. [L1, L4]

1.3 Pointwise, $\langle v, f(t)\rangle \le \bigl|\langle v,f(t)\rangle\bigr| \le \lVert v\rVert_2\,\lVert f(t)\rVert_2$ by Cauchy-Schwarz. [L8, L10]

2.1 By induction on $p \le m$, every finite sum $\sum_{i<p} f_i^{2}$ is integrable, the empty sum being the constant $0$ and each successor step adding one integrable function. Hence $g = \sum_{i<m}f_i^{2}$ is integrable. [step 1.2, L2, L9]

2.2 The real-valued function $t \mapsto \langle v, f(t)\rangle = \sum_{i<m}v_i f_i(t)$ is integrable, being a finite sum of scalar multiples of the integrable $f_i$, and by linearity applied $m$ times $\int_a^b \langle v,f\rangle = \sum_{i<m} v_i\int_a^b f_i = \sum_{i<m}v_i\,v_i = \langle v,v\rangle = \lVert v\rVert_2^{2}$. [step 1.2, L1, L2, L8, L9]

3.1 $g(t) \ge 0$ for every $t$, being a finite sum of squares, and $g$ is bounded above: each $|f_i|$ is bounded by some $B_i$, so $g(t) \le \sum_{i<m}B_i^{2} =: K$. Thus $g$ takes its values in $[0,K]$. [step 2.1, L1, L9, L10]

4.1 The map $s \mapsto s^{2}$ is continuous and injective on the order-convex set $[0,\sqrt K]$, with image $[0,K]$; by the continuous inverse theorem its inverse $\varphi : [0,K] \to [0,\sqrt K]$, $\varphi(u) = \sqrt u$, is continuous on $[0,K]$. [step 3.1, L6, L7]

5.1 $\lVert f(t)\rVert_2 = \sqrt{g(t)} = \varphi(g(t))$ for every $t \in [a,b]$, so $\lVert f\rVert_2 = \varphi \circ g$ is integrable on $[a,b]$; this is clause 1. [step 2.1, step 3.1, step 4.1, L5, L8]

6.1 Both sides of step 1.3 are integrable on $[a,b]$, so monotonicity and linearity give $\lVert v\rVert_2^{2} = \int_a^b\langle v,f\rangle \le \int_a^b \lVert v\rVert_2\lVert f\rVert_2 = \lVert v\rVert_2\int_a^b\lVert f\rVert_2$. [step 5.1, step 2.2, step 1.3, L2, L3]

6.2 If $v = 0$ then $\lVert v\rVert_2 = 0$, while $\int_a^b\lVert f\rVert_2 \ge 0$ because $\lVert f\rVert_2 \ge 0$ pointwise and $a<b$; so clause 2 holds in this case. [step 5.1, L3, L8]

7.1 If $v \ne 0$ then $\lVert v\rVert_2 > 0$, so multiplying the inequality of step 6.1 by the positive $1/\lVert v\rVert_2$ gives $\lVert v\rVert_2 \le \int_a^b\lVert f\rVert_2$, which is clause 2 in this case. [step 6.1, L8, L10]

8.1 The two cases of steps 6.2 and 7.1 exhaust the possibilities for $v$, so clause 2 holds; with step 5.1 both clauses are proved. [step 5.1, step 6.2, step 7.1] ∎

## Remarks

- **The case split at $v = 0$ is mandatory.** Step 6.1 delivers only $\lVert v\rVert_2^{2} \le \lVert v\rVert_2 \int_a^b\lVert f\rVert_2$, and dividing by $\lVert v\rVert_2$ is illegitimate when that number is $0$. Many textbook presentations divide without comment; the missing case is genuinely separate, and it is the one where the right-hand side has to be shown nonnegative on its own.

- **Why the inner-product route rather than a componentwise estimate.** Bounding each coordinate of $\int_a^b f$ separately and reassembling gives a constant depending on $m$; the argument above gives the sharp inequality with no constant, and it uses only bilinearity, Cauchy-Schwarz and monotonicity of the integral. The companion page checks the inequality numerically on an explicit curve and shows it is strict there.

- **Clause 1 is where the hypotheses of [[thm-composition-with-a-continuous-function]] are checked, one by one:** $g$ is integrable, its values lie in a closed bounded interval, and the outer function is continuous on that interval. The order of that theorem's hypotheses matters — continuous **after** integrable — and it is respected here.
````

