## Selection reasons

- critical risk (13): 24 declared dependencies; 24 cited facts; 12 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 manifest-edge consumer (24 outgoing relationships)

## Target item — `thm-norm-inequality-for-the-vector-valued-integral`

Normalized current SHA-256: `cbece0eafcc9eb83e288001b8f9744b3d93d1222488c0d0cc974e8e396b11d49`

The complete exact-current item follows, including frontmatter:

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

## Wave 12 provenance row

```json
{
  "id": "thm-norm-inequality-for-the-vector-valued-integral",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www2.math.upenn.edu/~gressman/analysis/13-jensen.html",
    "https://math.rice.edu/~semmes/math322.pdf"
  ],
  "rationale": "Gressman’s Advanced Analysis supplement defines finite-dimensional vector Riemann integration, proves that a Lipschitz scalar function of a Riemann-integrable vector function is Riemann integrable (hence the norm is), and states the triangle inequality for every Riemann-integrable finite-dimensional vector-valued function. Semmes, Sections 8.1.2–8.1.3, independently defines finite-dimensional vector Riemann–Stieltjes integrals componentwise, identifies the ordinary Riemann case by alpha(t)=t, and states the corresponding norm inequality before discussing broader integrability conditions. The item specializes these routes to the Euclidean norm on a real interval, makes the a <= b/oriented-integral boundary explicit, and proves the result locally using the library’s componentwise Darboux integral and scalar theorem interfaces. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "def-vector-valued-derivative-and-integral",
      "source_section": "Definition",
      "quote": "Throughout, $m \\in \\mathbb{N}$ with $m \\ge 1$, and vector-valued functions, their components and their limits are as in [[def-vector-valued-functions-limits-and-continuity]]. ### The derivative Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}^{m}$ and let $c \\in A$ be a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of $f$ at $c$** is the vector-valued function $$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}^{m}, \\qquad q_{f,c}(x) \\;:=\\; \\frac{1}{x - c}\\,\\bigl(f(x) - f(c)\\bigr),$$ the scalar multiple being that of the vector space $\\mathbb{R}^{m}$ ([[def-function-space]]); the division is legitimate because $x \\ne c$ gives $x - c \\ne 0$. As in [[def-derivative]], $c$ is a limit point of $A \\setminus \\{c\\}$ as well, since a punctured neighbourhood of $c$ omits $c$. $f$ is **differentiable at $c$** when $\\lim_{x \\to c} q_{f,c}(x)$ exists in $\\mathbb{R}^{m}$, and then the **derivative** is $$f'(c) \\;:=\\; \\lim_{x\\to c} q_{f,c}(x) \\;\\in\\; \\mathbb{R}^{m}.$$ **The notation denotes a single vector.** At most one $L \\in \\mathbb{R}^{m}$ satisfies the limit condition, as proved in [[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued form of the obligation [[lem-function-limit-unique]] discharges for real-valued functions and [[lem-metric-limits-unique]] for sequences. **The intrinsic form is the definition; the componentwise form is a theorem.** For $i < m$ the $i$-th component of $q_{f,c}(x)$ is $\\bigl(f_i(x)-f_i(c)\\bigr)/(x-c)$, which is the real difference quotient of $f_i$ at $c$ ([[def-derivative]]). So by [[thm-componentwise-limits-and-continuity]] clause 2: > $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable > at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$. Nothing below reverses this order of presentation: the intrinsic limit is what is defined, and the coordinates are read off it. **Algebra of derivatives.** If $f, g : A \\to \\mathbb{R}^{m}$ are differentiable at $c$ and $\\lambda \\in \\mathbb{R}$, then $f + g$ and $\\lambda f$ are differentiable at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\\lambda f)'(c) = \\lambda f'(c)$: read componentwise through the displayed equivalence, these are clauses 1 and 2 of the published [[thm-algebra-of-derivatives]]. ### The integral Let $a, b \\in \\mathbb{R}$ with $a < b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ ([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component $f_i : [a,b] \\to \\mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux integrable in the sense of [[def-darboux-integral]], and then $$\\int_a^b f \\;:=\\; \\text{the function } m \\to \\mathbb{R} \\text{ sending } i \\mapsto \\int_a^b f_i .$$ **That really is an element of $\\mathbb{R}^{m}$.** In this library $\\mathbb{R}^{m}$ is the set of functions $m \\to \\mathbb{R}$ ([[def-function-space]]), not a set of tuples, so the displayed assignment is literally an element of it; each value $\\int_a^b f_i$ is a single real by [[def-darboux-integral]]. In the standard basis ([[lem-standard-basis-of-f-n]]) the same object is $\\int_a^b f = \\sum_{i<m}\\bigl(\\int_a^b f_i\\bigr)e_i$. **Oriented limits.** Following [[def-oriented-integral]] componentwise, set $$\\int_a^a f \\;:=\\; 0 \\in \\mathbb{R}^{m}, \\qquad \\int_b^a f \\;:=\\; -\\int_a^b f \\quad (a < b),$$ so that $\\int_u^v f = -\\int_v^u f$ for all $u,v$ in an interval on which $f$ is integrable. The clauses do not overlap with the case $a<b$, so nothing has to be checked for consistency, exactly as in [[def-oriented-integral]]. **Linearity.** If $f, g : [a,b] \\to \\mathbb{R}^{m}$ are integrable and $\\lambda,\\mu \\in \\mathbb{R}$ then $\\lambda f + \\mu g$ is integrable with $$\\int_a^b (\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f + \\mu\\int_a^b g ,$$ since each side has $i$-th coordinate $\\int_a^b(\\lambda f_i + \\mu g_i)$ and $\\lambda\\int_a^b f_i + \\mu\\int_a^b g_i$ respectively, and those agree by [[thm-linearity-of-the-integral]]. **Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is integrable on every closed subinterval, and for $a<c<b$, $\\int_a^b f = \\int_a^c f + \\int_c^b f$; both are the componentwise readings of [[lem-integrability-on-a-subinterval]] and [[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled coordinate by coordinate.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded ([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of $[a,b]$ ([[def-partition-and-refinement]]) and put $$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$ for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]). ### Both extrema exist **$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$ for $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and $\\mathcal{U}$ are nonempty. **$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any $Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]], $L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound of $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower bound of $\\mathcal{U}$. Hence a nonempty set bounded above has a supremum ([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum ([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]). The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real numbers $$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$ ### The lower integral never exceeds the upper one $$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$ Indeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound of $\\mathcal{L}$, so the least upper bound satisfies $\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$ is a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies $\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]). Moreover, for **every** partition $P$, $$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$ the outer inequalities because a member of a set is at most its supremum and at least its infimum. ### Integrability $f$ is **Darboux integrable on $[a,b]$**, and on this page simply **integrable**, when $$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$ and then the common value is written $$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$ the **integral of $f$ over $[a,b]$**. It is a single well-determined real number, being the common value of two numbers each of which is unique ([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is not defined and is never written. **The inequality above is the whole difficulty.** By the previous paragraph integrability is *never* a question of one integral exceeding the other, only of the gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by [[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled completely, in terms of the discontinuities of $f$, by [[thm-lebesgue-criterion]]. **\"Riemann integrable\" means the same thing here.** The definition above is Darboux's. Riemann's own definition, in terms of tagged partitions of small mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same class of functions with the same integral by [[thm-darboux-equals-riemann]]. Until that theorem is proved the two phrases are kept apart; after it they are used interchangeably, as they are throughout the literature.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because the partitions it quantifies over are those of [[def-partition-and-refinement]], whose standing hypothesis is $a < b$: with $a = b$ the chain $a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined symbol whenever $a \\ge b$, and every additivity statement below would be ill-formed as it is usually written. This item extends the notation, and nothing else: the object it names is still the Darboux integral of [[def-darboux-integral]]. Let $u, v \\in \\mathbb{R}$ and write $$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$ ([[def-interval]]). Let $f$ be a real-valued function whose domain contains that interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$, or $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded ([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]], [[def-darboux-sums]]). For such $f$ define $$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$ **There is nothing to check for consistency.** The three clauses are indexed by the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In particular the first clause is untouched, so on $u < v$ this is the published integral verbatim and every published theorem about it applies unchanged. **The middle clause is a stipulation, not a computation.** It is *not* claimed that $0$ is a value forced by the $u < v$ definition in any limiting sense; that definition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is written there. It is also unconditional: no hypothesis on $f$ beyond being defined at $u$ is asked for, since the case $u = v$ never refers to a partition. ### The two consequences used throughout the page **Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable between them, $$\\int_u^v f \\;=\\; -\\int_v^u f .$$ Indeed if $u < v$ then $v > u$ and the third clause reads $\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both sides are $0$; and if $u > v$ the third clause is the display itself. **Absolute values agree.** Consequently $\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair. **An obligation recorded here and discharged elsewhere.** With this convention the additivity identity $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$ holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is integrable, not only for $u < v < w$. That is a theorem and not part of this definition; it is proved as the last clause of [[thm-additivity-over-subintervals]], and nothing on this page uses it before it is proved there.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field ([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it. The notions **upper bound** and **bounded above** are already fixed by [[def-complete-ordered-field]] and are only recalled here, never redefined: $u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and $S$ is *bounded above* if it has at least one upper bound. The dual notions are: - $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$. - $S$ is **bounded below** if it has at least one lower bound. - $S$ is **bounded** if it is both bounded above and bounded below, that is, if there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-linearity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]). Then: 1. $f + g$ is integrable on $[a,b]$ and $\\int_a^b (f+g) = \\int_a^b f + \\int_a^b g$; 2. for every real $\\lambda$, $\\lambda f$ is integrable on $[a,b]$ and $\\int_a^b \\lambda f = \\lambda \\int_a^b f$; 3. consequently, for all reals $\\lambda, \\mu$ the function $\\lambda f + \\mu g$ is integrable and $$\\int_a^b(\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f \\;+\\; \\mu\\int_a^b g ;$$ 4. the same identity holds with oriented limits: if $u, v \\in [a,b]$ and $f, g$ are integrable between $u$ and $v$ ([[def-oriented-integral]]), then $\\int_u^v(\\lambda f + \\mu g) = \\lambda\\int_u^v f + \\mu\\int_u^v g$. **Linearity of the integral is not linearity of the Darboux sums**, and the proof of claim 1 has to squeeze rather than compute. On a subinterval the inequality $\\sup(f+g) \\le \\sup f + \\sup g$ can be strict — take $f(x) = x$ and $g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ — so $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity between upper sums is available. Claim 2, by contrast, is an identity at the level of the sums, with the roles of $\\sup$ and $\\inf$ exchanged when $\\lambda < 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-monotonicity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]). Then: 1. **Nonnegativity.** If $f(x) \\ge 0$ for every $x \\in [a,b]$ then $\\int_a^b f \\ge 0$. 2. **Monotonicity.** If $f(x) \\le g(x)$ for every $x \\in [a,b]$ then $$\\int_a^b f \\;\\le\\; \\int_a^b g .$$ 3. **Two-sided bound.** If $m \\le f(x) \\le M$ for every $x \\in [a,b]$, with $m, M$ real, then $$m\\,(b-a) \\;\\le\\; \\int_a^b f \\;\\le\\; M\\,(b-a) .$$ **Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable function with integral $0$ may be positive at infinitely many points; that is [[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's companion. Under the additional hypothesis of continuity the conclusion does hold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]] below. **Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the convention of [[def-oriented-integral]], $f \\le g$ gives $\\int_u^v f \\le \\int_u^v g$ when $u \\le v$ and the reverse inequality when $u \\ge v$, since both sides change sign together.",
      "quote_selection": "full-source-section",
      "uses": [
        "6.1",
        "6.2"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-integrability-of-absolute-values-products-and-lattice-operations",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]). Then: 1. $|f|$, $f^{2}$ and $fg$ are integrable on $[a,b]$ ([[def-abs-value]], [[def-integer-power]]); 2. $\\max(f,g)$ and $\\min(f,g)$, defined pointwise ([[def-max-min]]), are integrable on $[a,b]$; 3. the **triangle inequality for the integral**: $$\\Bigl|\\int_a^b f\\Bigr| \\;\\le\\; \\int_a^b |f| .$$ **Claim 3 is stated with $a < b$ and is not orientation-invariant.** For $u > v$ the right-hand side is $-\\int_v^u |f| \\le 0$ while the left-hand side is $\\ge 0$, so the inequality as written is false there. The form valid for *every* pair $u,v$ on which $f$ is integrable ([[def-oriented-integral]]) is $$\\Bigl|\\int_u^v f\\Bigr| \\;\\le\\; \\Bigl|\\int_u^v |f|\\,\\Bigr| ,$$ and that is the form the estimates below on this page use whenever the limits are not known to be in increasing order. **The converse of claim 1 fails.** Integrability of $|f|$ does not give integrability of $f$; the witness is on the companion page.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-composition-with-a-continuous-function",
      "source_section": "Statement",
      "quote": "Let $a < b$ and $m \\le M$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]) with $$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$ and let $\\varphi : [m,M] \\to \\mathbb{R}$ be continuous on $[m,M]$ ([[def-continuity-real]]). Then the composite $\\varphi \\circ f : [a,b] \\to \\mathbb{R}$ is integrable on $[a,b]$. **The order of the hypotheses is the whole content, and it does not reverse.** What is assumed is *continuous after integrable*: the outer function is the continuous one. Weakening the outer function to a merely integrable $\\varphi$ makes the statement **false**, and the witness is on the companion page. The remaining variant — $\\varphi$ merely integrable with $f$ *continuous* — is neither proved nor refuted anywhere on this page, and the companion page's witness does not bear on it, its inner function being discontinuous at every rational. Nothing here asserts anything about that variant.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and neighbourhoods are those of [[def-neighbourhood-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then $f$ is **continuous at $c$** when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$ with $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$. **The point $c$ is required to lie in $A$, and the condition is unpunctured.** Both differ from [[def-function-limit]], and deliberately. There the quantifier runs over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed, and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is automatic. So allowing $x = c$ costs nothing, and it is what lets the definition be stated at every point of $A$, including the points where no limit exists. **Three clauses, and all three are part of the definition.** 1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$ ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$ ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$ witnessing continuity witnesses the limit condition, because the limit condition quantifies over a subset of the points continuity quantifies over; and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses continuity, because the one point it omits, $x = c$, satisfies $|f(c) - f(c)| < \\varepsilon$ anyway. 2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$ ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$ itself, and $|f(c) - f(c)| = 0 < \\varepsilon$. 3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and nothing more. It is not a condition relating $f$ to points outside $A$. Every point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe continuity at every point of $A$. **This is not the raw $\\varepsilon$-$\\delta$ formula of [[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes wrong when the *punctured* formula of [[def-function-limit]] is written down at an arbitrary point of the domain: at an isolated point it is satisfied vacuously by every real $L$ at once, so it defines nothing, and this library therefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point. Continuity at an isolated point is a different matter: the formula above is not vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the only value being compared with itself — and it names a single, well-defined property. The limit is undefined there; the continuity is defined, and is automatic. Clause 1 is the only place where the two notions meet, and it is stated only where the limit exists as a notion. **Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$ ([[def-open-and-closed-in-r]]), then every $c \\in A$ has some $N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty ([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate interval ([[def-interval]]). Isolated points are what force clause 2 to exist at all, and they occur as soon as $A$ is allowed to be an arbitrary subset of $\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every $a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$; we write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-square-monotone",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field. For $a, b \\ge 0$: $$a < b \\iff a^2 < b^2, \\qquad a \\le b \\iff a^2 \\le b^2.$$ More generally, for arbitrary $a, b \\in F$, $a^2 < b^2 \\iff |a| < |b|$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-continuous-inverse",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let $f : I \\to \\mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and injective ([[def-injection-surjection-bijection]]). Then: 1. $f$ is strictly monotone ([[def-monotone-function]]); 2. $f[I]$ is order-convex; 3. the map $f : I \\to f[I]$ is a bijection, so there is exactly one $g : f[I] \\to I$ with $g(f(x)) = x$ for every $x \\in I$ and $f(g(u)) = u$ for every $u \\in f[I]$; 4. $g$ is strictly monotone in the same sense as $f$: increasing if $f$ is increasing, decreasing if $f$ is decreasing; 5. $g$ is continuous on $f[I]$. **\"Interval\" means \"order-convex\" here**, as throughout this library ([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word and [[def-interval]] records that the classification of order-convex sets into the nine written forms is not proved here). No compactness and no boundedness is assumed: $I$ may be open, half-open, unbounded, or a single point.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) with its order ([[def-real-order]]). A subset $I \\subseteq \\mathbb{R}$ is **order-convex** when $$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$ The **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where $a, b \\in \\mathbb{R}$: | | bounded forms | | one-sided and full forms | |---|---|---|---| | $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ | | $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ | | $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ | | $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ | | | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ | An interval is **open** when both of its written endpoints are excluded, that is for the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is **closed** when both written endpoints are included, that is for $[a,b]$, $[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and $(a,b]$ are **half-open**. **The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They mark which side carries no endpoint condition at all; the five forms in the right column are defined by the displayed conditions on $x$ alone, and no arithmetic is ever performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$ silently that [[rem-sup-conventions]] records for suprema. **Every one of the nine forms is order-convex.** Each is defined by a conjunction of at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or $x \\le b$, and each such condition is inherited by an intermediate point: if $a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$, by transitivity of the order ([[def-ordered-field]]). Applying this to whichever one or two conditions define the form in question gives $z \\in I$ whenever $x, y \\in I$ and $x \\le z \\le y$. **Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly when it is of one of the four forms in the left column: for those, $a$ is a lower bound and $b$ an upper bound. The other five forms are unbounded, on the side or sides written with $\\infty$; the verification is in the remarks below. **Nondegeneracy.** An interval is **degenerate** when it has at most one element, and **nondegenerate** when it has at least two. For the four bounded forms with endpoints $a$ and $b$: - $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly when $a < b$. It is the singleton $\\{a\\}$ when $a = b$. - $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each is nondegenerate. The only assertion here that is not immediate from the defining conditions is that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because $a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to both sides and halving ([[def-ordered-field]]); repeating the halving inside $(a, (a+b)/2)$ produces a second point. **Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is exactly the condition making them nonempty. They are the intervals the nested interval property is stated for, and the phrase *closed bounded interval* always carries the hypothesis $a \\le b$ in this library. **Length.** The **length** of a bounded interval presented by its endpoints $a \\le b$ is $$\\ell = b - a \\;\\ge\\; 0 .$$ Length is attached to the presentation by endpoints and is not recovered from the set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is $(c,c)$ for any other $c$, while each of these presentations has length $0$, so nothing inconsistent arises; but the endpoints are named explicitly at every point where a length is used in this library, and never inferred from the set. Unbounded intervals are assigned no length.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then: 1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$; 2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$; 3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$ ([[def-max-min]]), are continuous at $c$; 4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ lies in $A_0$ and the quotient $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at $c$ as a function on $A_0$. Moreover, with no hypothesis at all: 5. every constant function $A \\to \\mathbb{R}$ and the identity $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$ ([[def-integer-power]]), and hence so is every **polynomial function** $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients. Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$, $\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and $(f/g)|_{A_0}$ is continuous on $A_0$. **Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**, and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is $g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in the smaller domain, which is what makes continuity there mean anything. **Nothing here is proved through a sequence.** Claims 1 and 4 are read off from [[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$ and $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice principle is used anywhere in this item.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-euclidean-inner-product",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$. A natural number is a von Neumann natural, that is a set, and $n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so $$\\mathbb{R}^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to \\mathbb{R} \\,\\}$$ is the function space of [[def-function-space]] at $F = \\mathbb{R}$ and $X = n$, a vector space over $\\mathbb{R}$ under the pointwise operations ([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of $\\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the same set that [[lem-metrics-on-rn]] calls $\\mathbb{R}^{n}$. The **Euclidean inner product** of $x, y \\in \\mathbb{R}^{n}$ is the real number $$\\langle x, y\\rangle \\;:=\\; \\sum_{k<n} x_k\\,y_k ,$$ the finite sum of [[def-finite-sum]] applied to the list $k \\mapsto x_k y_k$ (extended by $0$ beyond $n$, as every finite list in this library is). The **Euclidean norm** of $x$ is $$\\lVert x\\rVert_2 \\;:=\\; \\sqrt{\\langle x, x\\rangle},$$ which is defined because $\\langle x,x\\rangle = \\sum_{k<n} x_k^{2} \\ge 0$ (a sum of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and [[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by [[def-integer-power]]) and every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]). ### Both are defined for every $n$, including $n = 0$ At $n = 0$ the set $\\mathbb{R}^{0}$ has exactly one element, the empty function, and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum above is the empty sum, so $\\langle x,y\\rangle = 0$ and $\\lVert x\\rVert_2 = 0$. **This is the first place on this page where the two index regimes diverge, and the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\\infty$ of [[lem-metrics-on-rn]] are defined only for $n \\ge 1$, because $d_\\infty$ would otherwise be a maximum over the empty index set; the algebra above needs no such restriction. The boundary in this page runs between the algebra and the metric, not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists exactly which items inherit $n \\ge 1$. ### The algebra of the inner product For all $x, y, z \\in \\mathbb{R}^{n}$ and $\\lambda \\in \\mathbb{R}$: 1. **Symmetry.** $\\langle x,y\\rangle = \\langle y,x\\rangle$, since $x_ky_k = y_kx_k$ termwise. 2. **Additivity in the first argument.** $\\langle x + y, z\\rangle = \\langle x,z\\rangle + \\langle y,z\\rangle$: the list $k \\mapsto (x_k+y_k)z_k$ is the termwise sum of $k \\mapsto x_kz_k$ and $k \\mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies. 3. **Homogeneity in the first argument.** $\\langle \\lambda x, y\\rangle = \\lambda\\langle x,y\\rangle$, by [[lem-finite-sum-laws]] clause 2. 4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws in the second argument. 5. **Positive definiteness.** $\\langle x,x\\rangle \\ge 0$, and $\\langle x,x\\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$. 6. **Agreement with the published Euclidean metric.** For $n \\ge 1$ and $x, y \\in \\mathbb{R}^{n}$, $\\lVert x - y\\rVert_2 = \\sqrt{\\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two sides being the same expression ([[lem-metrics-on-rn]]). In particular $\\lVert x\\rVert_2 = d_2(x, 0)$. That $\\lVert\\cdot\\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]] is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.2",
        "5.1",
        "6.2",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-cauchy-schwarz-and-the-euclidean-norm",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $x, y \\in \\mathbb{R}^{n}$, with the Euclidean inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then: 1. **Cauchy-Schwarz.** $$\\lvert\\langle x,y\\rangle\\rvert \\;\\le\\; \\lVert x\\rVert_2\\,\\lVert y\\rVert_2 ,$$ with equality if and only if there is a pair $(\\lambda,\\mu) \\ne (0,0)$ of reals with $\\lambda x_k = \\mu y_k$ for every $k < n$. 2. **$\\lVert\\cdot\\rVert_2$ is a norm on $\\mathbb{R}^{n}$** ([[def-norm-and-normed-space]]), for **every** $n \\in \\mathbb{N}$; the metric it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \\ge 1$. 3. **Parallelogram law.** $$\\lVert x+y\\rVert_2^{2} + \\lVert x-y\\rVert_2^{2} \\;=\\; 2\\lVert x\\rVert_2^{2} + 2\\lVert y\\rVert_2^{2} .$$ 4. **Polarisation.** $$\\langle x,y\\rangle \\;=\\; \\tfrac14\\Bigl(\\lVert x+y\\rVert_2^{2} - \\lVert x-y\\rVert_2^{2}\\Bigr),$$ so the inner product is recovered from the norm it induces. **Clause 1 is a citation, not a new proof.** The inequality and its equality case are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of reals; all that happens below is that it is read in the vector notation of [[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one statement in the library.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.2",
        "5.1",
        "6.2",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.2",
        "5.1",
        "6.2",
        "7.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "3.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "3.1",
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $a = b$ then $\\int_a^b f = 0$ and $\\int_a^b\\lVert f\\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \\le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Each component $f_i$ is bounded and integrable on $[a,b]$, so each $f_i^{2}$ is integrable.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Pointwise, $\\langle v, f(t)\\rangle \\le \\bigl|\\langle v,f(t)\\rangle\\bigr| \\le \\lVert v\\rVert_2\\,\\lVert f(t)\\rVert_2$ by Cauchy-Schwarz.",
      "step": "1.3",
      "inputs": [
        "L8",
        "L10"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By induction on $p \\le m$, every finite sum $\\sum_{i<p} f_i^{2}$ is integrable, the empty sum being the constant $0$ and each successor step adding one integrable function. Hence $g = \\sum_{i<m}f_i^{2}$ is integrable.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L2",
        "L9"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "The real-valued function $t \\mapsto \\langle v, f(t)\\rangle = \\sum_{i<m}v_i f_i(t)$ is integrable, being a finite sum of scalar multiples of the integrable $f_i$, and by linearity applied $m$ times $\\int_a^b \\langle v,f\\rangle = \\sum_{i<m} v_i\\int_a^b f_i = \\sum_{i<m}v_i\\,v_i = \\langle v,v\\rangle = \\lVert v\\rVert_2^{2}$.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L1",
        "L2",
        "L8",
        "L9"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "$g(t) \\ge 0$ for every $t$, being a finite sum of squares, and $g$ is bounded above: each $|f_i|$ is bounded by some $B_i$, so $g(t) \\le \\sum_{i<m}B_i^{2} =: K$. Thus $g$ takes its values in $[0,K]$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L1",
        "L9",
        "L10"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The map $s \\mapsto s^{2}$ is continuous and injective on the order-convex set $[0,\\sqrt K]$, with image $[0,K]$; by the continuous inverse theorem its inverse $\\varphi : [0,K] \\to [0,\\sqrt K]$, $\\varphi(u) = \\sqrt u$, is continuous on $[0,K]$.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "$\\lVert f(t)\\rVert_2 = \\sqrt{g(t)} = \\varphi(g(t))$ for every $t \\in [a,b]$, so $\\lVert f\\rVert_2 = \\varphi \\circ g$ is integrable on $[a,b]$; this is clause 1.",
      "step": "5.1",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "step 4.1",
        "L5",
        "L8"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Both sides of step 1.3 are integrable on $[a,b]$, so monotonicity and linearity give $\\lVert v\\rVert_2^{2} = \\int_a^b\\langle v,f\\rangle \\le \\int_a^b \\lVert v\\rVert_2\\lVert f\\rVert_2 = \\lVert v\\rVert_2\\int_a^b\\lVert f\\rVert_2$.",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "step 2.2",
        "step 1.3",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-6.2",
      "claim": "If $v = 0$ then $\\lVert v\\rVert_2 = 0$, while $\\int_a^b\\lVert f\\rVert_2 \\ge 0$ because $\\lVert f\\rVert_2 \\ge 0$ pointwise and $a<b$; so clause 2 holds in this case.",
      "step": "6.2",
      "inputs": [
        "step 5.1",
        "L3",
        "L8"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "If $v \\ne 0$ then $\\lVert v\\rVert_2 > 0$, so multiplying the inequality of step 6.1 by the positive $1/\\lVert v\\rVert_2$ gives $\\lVert v\\rVert_2 \\le \\int_a^b\\lVert f\\rVert_2$, which is clause 2 in this case.",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L8",
        "L10"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "The two cases of steps 6.2 and 7.1 exhaust the possibilities for $v$, so clause 2 holds; with step 5.1 both clauses are proved.",
      "step": "8.1",
      "inputs": [
        "step 5.1",
        "step 6.2",
        "step 7.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The coordinate dimension is explicitly at least one; any interval occurring is nonempty under a<=b or a<b. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, let $a, b \\in \\mathbb{R}$ with $a \\le b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ be integrable (). Then: 1. if $a < b$, the real-valued functi"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: If $a = b$ then $\\int_a^b f = 0$ and $\\int_a^b\\lVert f\\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \\le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, let $a, b \\in \\mathbb{R}$ with $a \\le b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ be integrable (). Then: 1. if $a < b$, the real-valued functi"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: If $a = b$ then $\\int_a^b f = 0$ and $\\int_a^b\\lVert f\\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \\le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: If $a = b$ then $\\int_a^b f = 0$ and $\\int_a^b\\lVert f\\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \\le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Statement: Every maximisation, compactness, subsequence, or permutation choice is made from a set proved nonempty by the stated hypotheses. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, let $a, b \\in \\mathbb{R}$ with $a \\le b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ be integrable (). Then: 1. if $a < b$, the real-valued functi"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-norm-inequality-for-the-vector-valued-integral: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-norm-inequality-for-the-vector-valued-integral: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-linearity-of-the-integral",
    "declared_target": "thm-linearity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "declared_target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-composition-with-a-continuous-function",
    "declared_target": "thm-composition-with-a-continuous-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-continuous-inverse",
    "declared_target": "thm-continuous-inverse",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-square-monotone",
    "declared_target": "lem-of-square-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
    "source": "thm-norm-inequality-for-the-vector-valued-integral",
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
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (24)

### `cor-integrability-of-absolute-values-products-and-lattice-operations`

````markdown
---
id: cor-integrability-of-absolute-values-products-and-lattice-operations
kind: corollary
title: "If $f,g$ are integrable on $[a,b]$ then so are $\\lvert f\\rvert$, $f^{2}$, $fg$, $\\max(f,g)$ and $\\min(f,g)$, and $\\bigl\\lvert\\int_a^b f\\bigr\\rvert \\le \\int_a^b\\lvert f\\rvert$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-composition-with-a-continuous-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, thm-algebra-of-continuous-functions, def-continuity-real, def-abs-value, lem-of-abs-value, def-darboux-integral, def-darboux-sums, def-max-min, def-integer-power, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-absolute-value-integrable-without-the-function]
justified_by: []
aliases: [cor-integrable-functions-form-an-algebra]
landmark: true
short: "products, moduli and lattice operations"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. $|f|$, $f^{2}$ and $fg$ are integrable on $[a,b]$
   ([[def-abs-value]], [[def-integer-power]]);
2. $\max(f,g)$ and $\min(f,g)$, defined pointwise
   ([[def-max-min]]), are integrable on $[a,b]$;
3. the **triangle inequality for the integral**:
   $$\Bigl|\int_a^b f\Bigr| \;\le\; \int_a^b |f| .$$

**Claim 3 is stated with $a < b$ and is not orientation-invariant.** For $u > v$
the right-hand side is $-\int_v^u |f| \le 0$ while the left-hand side is $\ge 0$,
so the inequality as written is false there. The form valid for *every* pair
$u,v$ on which $f$ is integrable ([[def-oriented-integral]]) is

$$\Bigl|\int_u^v f\Bigr| \;\le\; \Bigl|\int_u^v |f|\,\Bigr| ,$$

and that is the form the estimates below on this page use whenever the limits
are not known to be in increasing order.

**The converse of claim 1 fails.** Integrability of $|f|$ does not give
integrability of $f$; the witness is on the companion page.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$.

[L1] If $u$ is integrable on $[a,b]$ with values in $[m,M]$ and $\varphi$ is continuous on $[m,M]$, then $\varphi\circ u$ is integrable ([[thm-composition-with-a-continuous-function]]); an integrable function is bounded, so such $m$ and $M$ exist ([[def-darboux-sums]], [[def-bounded-set]], [[def-interval]]).

[L2] Sums and scalar multiples of integrable functions are integrable, with $\int_a^b(\lambda u + \nu w) = \lambda\int_a^b u + \nu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] If $u \le w$ pointwise on $[a,b]$ and both are integrable then $\int_a^b u \le \int_a^b w$ ([[thm-monotonicity-of-the-integral]]).

[L4] The absolute value $t \mapsto |t|$, the square $t \mapsto t^{2}$ and every polynomial function are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claims 2 and 5, [[def-continuity-real]]).

[L5] For reals $s,t$: $\max\{s,t\} = (s + t + |s-t|)\cdot 2^{-1}$ and $\min\{s,t\} = (s + t - |s-t|)\cdot 2^{-1}$, and $st = \bigl((s+t)^{2} - (s-t)^{2}\bigr)\cdot 4^{-1}$ ([[def-max-min]], [[def-abs-value]], [[def-ordered-field]], [[def-integer-power]]).

[L6] Absolute value: $-|t| \le t \le |t|$, and $|t| \le c$ follows from $-c \le t \le c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L7] With oriented limits, $\int_v^u u = -\int_u^v u$ and $\int_u^u u = 0$ ([[def-oriented-integral]]).

[L8] Ordered-field arithmetic: adding constants and multiplying by positive reals preserve inequalities, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded, so fix reals $m \le M$ with $f[\,[a,b]\,] \subseteq [m,M]$; the same for $g$, and for $f+g$ and $f-g$, which are integrable by [L2]. [given, L1, L2, choose]

1.2 The maps $t \mapsto |t|$ and $t \mapsto t^{2}$ are continuous on any closed bounded interval, by [L4]. [L4]

2.1 By [L1] applied with $\varphi(t) = |t|$ to $f$, to $g$ and to $f-g$, the functions $|f|$, $|g|$ and $|f-g|$ are integrable. [step 1.1, step 1.2, L1]

2.2 By [L1] applied with $\varphi(t) = t^{2}$ to $f$, to $f+g$ and to $f-g$, the functions $f^{2}$, $(f+g)^{2}$ and $(f-g)^{2}$ are integrable. [step 1.1, step 1.2, L1]

3.1 By [L5], $fg = \bigl((f+g)^{2}-(f-g)^{2}\bigr)\cdot 4^{-1}$ pointwise, so $fg$ is integrable by [L2]; this completes claim 1. [step 2.1, step 2.2, L2, L5]

3.2 By [L5], $\max(f,g) = \bigl(f + g + |f-g|\bigr)\cdot 2^{-1}$ and $\min(f,g) = \bigl(f+g-|f-g|\bigr)\cdot 2^{-1}$ pointwise, so both are integrable by [L2]; this is claim 2. [step 2.1, L2, L5]

3.3 **Claim 3.** By [L6], $-|f| \le f \le |f|$ pointwise on $[a,b]$, and all three functions are integrable by step 2.1 and [L2]. [step 2.1, L2, L6]

4.1 By [L3] applied twice, $-\int_a^b|f| \le \int_a^b f \le \int_a^b |f|$, using $\int_a^b(-|f|) = -\int_a^b|f|$ from [L2]. [step 3.3, L2, L3]

5.1 Hence $\bigl|\int_a^b f\bigr| \le \int_a^b|f|$ by [L6], which is claim 3. [step 4.1, L6]

6.1 **The oriented form.** For $u = v$ both sides are $0$ by [L7]; for $u < v$ it is claim 3 on $[u,v]$; and for $u > v$ both $\int_u^v f$ and $\int_u^v |f|$ are the negatives of the corresponding integrals over $[v,u]$ by [L7], so the two absolute values are unchanged and claim 3 on $[v,u]$ gives the inequality. [step 5.1, L7, L8] ∎

## Remarks

- **Every integrability clause comes from one theorem plus linearity.** The only input that produces integrability is [[thm-composition-with-a-continuous-function]], with [[thm-linearity-of-the-integral]] recombining the pieces; claim 3 additionally uses [[thm-monotonicity-of-the-integral]], which is the one place an inequality between integrals is needed. The identities of [L5] are algebra, and they are what turns a statement about composing with $|\cdot|$ and $(\cdot)^2$ into statements about products and lattice operations. In particular no new estimate on Darboux sums is made here.

- **The polarisation identity is used, and it is why $f^2$ comes first.** There is no direct route from integrability of $f$ and of $g$ to integrability of $fg$ through the composition theorem, because $(s,t) \mapsto st$ is a function of two variables and the theorem composes with one. Writing $fg$ through squares of sums and differences reduces it to the one-variable case.

- **The inequality of claim 3 is the integral analogue of the triangle inequality**, and like it, it can be strict: for $f(x) = x$ on $[-1,1]$ the left-hand side is $0$ and the right-hand side is $1$.

- **Forward reference, orientation only.** The witness refuting the converse of claim 1 is [[cex-absolute-value-integrable-without-the-function]] on the companion page; nothing above depends on it.
````

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
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

### `def-darboux-integral`

````markdown
---
id: def-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\\sup_P L(f,P)$ and $\\inf_P U(f,P)$, Darboux integrability as their equality, and the notation $\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-sums, lem-refinement-inequalities, def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-interval]
justified_by: []
aliases: [def-riemann-integrable, def-lower-and-upper-integral]
landmark: true
short: "Darboux integral $\\int_a^b f$"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Write $\mathcal{P}$ for the set of all partitions of
$[a,b]$ ([[def-partition-and-refinement]]) and put

$$\mathcal{L} \;:=\; \{\, L(f,P) \ : \ P \in \mathcal{P} \,\}, \qquad \mathcal{U} \;:=\; \{\, U(f,P) \ : \ P \in \mathcal{P} \,\}$$

for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).

### Both extrema exist

**$\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$
for $k \ge 1$ is a partition of $[a,b]$, since $a < b$. So $\mathcal{L}$ and
$\mathcal{U}$ are nonempty.

**$\mathcal{L}$ is bounded above and $\mathcal{U}$ is bounded below.** Fix any
$Q \in \mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],
$L(f,P) \le U(f,Q)$ for every $P \in \mathcal{P}$, so $U(f,Q)$ is an upper bound
of $\mathcal{L}$; and $L(f,Q) \le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower
bound of $\mathcal{U}$.

Hence a nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).
The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real
numbers

$$\underline{\int_a^b} f \;:=\; \sup \mathcal{L} \;=\; \sup_{P} L(f,P), \qquad \overline{\int_a^b} f \;:=\; \inf \mathcal{U} \;=\; \inf_{P} U(f,P) .$$

### The lower integral never exceeds the upper one

$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f .$$

Indeed, for each fixed $Q \in \mathcal{P}$ the number $U(f,Q)$ is an upper bound
of $\mathcal{L}$, so the least upper bound satisfies
$\underline{\int_a^b} f \le U(f,Q)$. As $Q$ was arbitrary, $\underline{\int_a^b}f$
is a lower bound of $\mathcal{U}$, and the greatest lower bound satisfies
$\underline{\int_a^b} f \le \overline{\int_a^b} f$ ([[def-infimum]]).

Moreover, for **every** partition $P$,

$$L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) ,$$

the outer inequalities because a member of a set is at most its supremum and at
least its infimum.

### Integrability

$f$ is **Darboux integrable on $[a,b]$**, and on this page simply
**integrable**, when

$$\underline{\int_a^b} f \;=\; \overline{\int_a^b} f ,$$

and then the common value is written

$$\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,\mathrm{d}x ,$$

the **integral of $f$ over $[a,b]$**. It is a single well-determined real
number, being the common value of two numbers each of which is unique
([[lem-sup-unique]]). Without the displayed equality the symbol $\int_a^b f$ is
not defined and is never written.

**The inequality above is the whole difficulty.** By the previous paragraph
integrability is *never* a question of one integral exceeding the other, only of
the gap $\overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$ being $0$; and by
[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be
found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled
completely, in terms of the discontinuities of $f$, by
[[thm-lebesgue-criterion]].

**"Riemann integrable" means the same thing here.** The definition above is
Darboux's. Riemann's own definition, in terms of tagged partitions of small
mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same
class of functions with the same integral by [[thm-darboux-equals-riemann]].
Until that theorem is proved the two phrases are kept apart; after it they are
used interchangeably, as they are throughout the literature.

## Remarks

- **The supremum is over all partitions, and nothing is selected.** Both
  $\mathcal{L}$ and $\mathcal{U}$ are sets determined by $f$ and $[a,b]$ alone,
  and $\sup$ and $\inf$ are canonical, so no choice principle is involved in
  forming either integral. Where a choice does enter on this page is recorded in
  [[rem-riemann-integral-choice-ledger]].

- **Why the lower integral is a supremum and not an infimum.** Refining a
  partition can only increase a lower sum and decrease an upper sum
  ([[lem-refinement-inequalities]]), so the lower sums push up towards the
  integral and the upper sums push down towards it. Taking $\inf \mathcal{L}$
  would return the sum over the coarsest partition and would carry no
  information about $f$ beyond its infimum on $[a,b]$.

- **A bounded $f$ always has both integrals; only their equality can fail.** The
  Dirichlet function on $[0,1]$ has lower integral $0$ and upper integral $1$
  ([[fs-bounded-implies-riemann-integrable]]), which is the standard witness that
  the definition above is not vacuous in either direction.
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

### `def-oriented-integral`

````markdown
---
id: def-oriented-integral
kind: definition
title: "The integral with oriented limits: $\\int_a^a f := 0$ and $\\int_b^a f := -\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, def-bounded-set, def-interval]
justified_by: []
aliases: [def-oriented-limits-of-integration]
landmark: true
short: "oriented limits $\\int_b^a f = -\\int_a^b f$"
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Definition

**Why this item is first.** The published definition of the integral does not
cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because
the partitions it quantifies over are those of [[def-partition-and-refinement]],
whose standing hypothesis is $a < b$: with $a = b$ the chain
$a = t_0 < \dots < t_n = b$ is unsatisfiable. So $\int_a^b f$ is an undefined
symbol whenever $a \ge b$, and every additivity statement below would be
ill-formed as it is usually written. This item extends the notation, and nothing
else: the object it names is still the Darboux integral of
[[def-darboux-integral]].

Let $u, v \in \mathbb{R}$ and write

$$[u \wedge v,\ u \vee v] \;:=\; \text{the closed interval with endpoints } u \text{ and } v$$

([[def-interval]]). Let $f$ be a real-valued function whose domain contains that
interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,
or $u \ne v$ and the restriction of $f$ to $[u \wedge v,\ u \vee v]$ is bounded
([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],
[[def-darboux-sums]]). For such $f$ define

$$\int_u^v f \;:=\; \begin{cases} \text{the Darboux integral of } f \text{ over } [u,v] & \text{if } u < v, \\[2pt] 0 & \text{if } u = v, \\[2pt] -\displaystyle\int_v^u f & \text{if } u > v. \end{cases}$$

**There is nothing to check for consistency.** The three clauses are indexed by
the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually
exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In
particular the first clause is untouched, so on $u < v$ this is the published
integral verbatim and every published theorem about it applies unchanged.

**The middle clause is a stipulation, not a computation.** It is *not* claimed
that $0$ is a value forced by the $u < v$ definition in any limiting sense; that
definition simply says nothing at $u = v$, and $\int_u^u f := 0$ is what is
written there. It is also unconditional: no hypothesis on $f$ beyond being
defined at $u$ is asked for, since the case $u = v$ never refers to a partition.

### The two consequences used throughout the page

**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable
between them,

$$\int_u^v f \;=\; -\int_v^u f .$$

Indeed if $u < v$ then $v > u$ and the third clause reads
$\int_v^u f = -\int_u^v f$, which rearranges to the display; if $u = v$ both
sides are $0$; and if $u > v$ the third clause is the display itself.

**Absolute values agree.** Consequently
$\bigl|\int_u^v f\bigr| = \bigl|\int_v^u f\bigr|$ for every such pair.

**An obligation recorded here and discharged elsewhere.** With this convention
the additivity identity

$$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f$$

holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is
integrable, not only for $u < v < w$. That is a theorem and not part of this
definition; it is proved as the last clause of
[[thm-additivity-over-subintervals]], and nothing on this page uses it before it
is proved there.

## Remarks

- **This is notation, and it is a real notation.** Without it the substitution
  theorem could not be stated with the limits $\varphi(c)$ and $\varphi(d)$ in
  the order the map produces them, since a differentiable $\varphi$ need be
  neither injective nor monotone; and the integral function $x \mapsto \int_a^x f$
  would be undefined at $x = a$.

- **One published inequality is not orientation-invariant, and that is a trap.**
  The estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ is guaranteed only
  for $u \le v$: at $u > v$ the right-hand side is $-\int_v^u |f| \le 0$ while
  the left-hand side is $\ge 0$, so the inequality fails whenever
  $\int_v^u |f| > 0$. The form valid for every pair is
  $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\bigr|$, and this is stated where
  it is proved ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

- **Integrability is a property of the unordered pair.** By construction, $f$ is
  integrable between $u$ and $v$ if and only if it is integrable between $v$ and
  $u$, since both refer to the same closed interval; only the sign of the value
  remembers the order.
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

### `lem-of-square-monotone`

````markdown
---
id: lem-of-square-monotone
kind: lemma
title: "Squaring is monotone on the nonnegatives"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-sign-rules, lem-of-zero-mult, lem-of-abs-value]
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
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field. For $a, b \ge 0$:

$$a < b \iff a^2 < b^2, \qquad a \le b \iff a^2 \le b^2.$$

More generally, for arbitrary $a, b \in F$, $a^2 < b^2 \iff |a| < |b|$.

## Facts & Assumptions

**Given:** Elements $a, b$ of an ordered field $F$.

[L1] For a positive factor $s > 0$ and any $t$: $t > 0 \iff st > 0$; this is [[lem-of-sign-rules]] (the rule $c > 0 \Rightarrow (x < y \iff xc < yc)$ taken at $x = 0$, $y = t$, $c = s$, using $0 \cdot s = 0$, [[lem-of-zero-mult]]).

[L2] Trichotomy: for $a, b$ exactly one of $a < b$, $a = b$, $a > b$ holds; and a sum of two nonnegatives with at least one positive is positive ([[def-ordered-field]]).

[L3] $|x| \ge 0$ and $|x|^2 = x^2$ for every $x$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The difference factors as $b^2 - a^2 = (b - a)(b + a)$. [algebra]

2.1 If $a, b \ge 0$ and $a < b$, then $b > 0$, so $b + a > 0$ by [L2], and $b - a > 0$; by [L1] with $s = b + a$ and $t = b - a$, $(b - a)(b + a) > 0$, i.e. $a^2 < b^2$. [L1, L2, step 1.1]

2.2 If $a, b \ge 0$ and $a^2 < b^2$, then $b^2 - a^2 > 0$, so $a, b$ are not both zero and $b + a > 0$ by [L2]; by [L1] with $s = b + a$, from $(b - a)(b + a) = b^2 - a^2 > 0$ we get $b - a > 0$, i.e. $a < b$. [L1, L2, step 1.1]

3.1 Hence for $a, b \ge 0$, $a < b \iff a^2 < b^2$. [step 2.1, step 2.2]

4.1 The $\le$ form follows by trichotomy: for $a, b \ge 0$, applying step 3.1 to the nonnegatives $b, a$ gives $a \le b \iff \lnot(b < a) \iff \lnot(b^2 < a^2) \iff a^2 \le b^2$. [step 3.1, L2]

5.1 For arbitrary $a, b$, [L3] gives $|a|, |b| \ge 0$ with $|a|^2 = a^2$ and $|b|^2 = b^2$; applying step 3.1 to $|a|, |b|$ yields $a^2 < b^2 \iff |a|^2 < |b|^2 \iff |a| < |b|$. [step 3.1, L3] ∎
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

### `thm-composition-with-a-continuous-function`

````markdown
---
id: thm-composition-with-a-continuous-function
kind: theorem
title: "If $f$ is integrable on $[a,b]$ with values in $[m,M]$ and $\\varphi$ is continuous on $[m,M]$, then $\\varphi \\circ f$ is integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-criterion, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, def-continuity-real, thm-heine-cantor-r, cor-boundedness-theorem-r, def-uniform-continuity-real, thm-heine-borel-r, def-open-cover-r, lem-finite-sum-laws, def-finite-sum, def-oscillation, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field, lem-of-abs-value, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-a-composition-of-integrable-functions-that-is-not-integrable]
justified_by: []
aliases: [thm-continuous-after-integrable]
landmark: true
short: "continuous after integrable is integrable"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Springer article on compositions of Riemann-integrable functions"
      url: "https://link.springer.com/article/10.1007/s00591-022-00318-x"
pipeline_run: null
---

## Statement

Let $a < b$ and $m \le M$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

and let $\varphi : [m,M] \to \mathbb{R}$ be continuous on $[m,M]$
([[def-continuity-real]]). Then the composite
$\varphi \circ f : [a,b] \to \mathbb{R}$ is integrable on $[a,b]$.

**The order of the hypotheses is the whole content, and it does not reverse.**
What is assumed is *continuous after integrable*: the outer function is the
continuous one. Weakening the outer function to a merely integrable $\varphi$
makes the statement **false**, and the witness is on the companion page. The
remaining variant — $\varphi$ merely integrable with $f$ *continuous* — is
neither proved nor refuted anywhere on this page, and the companion page's
witness does not bear on it, its inner function being discontinuous at every
rational. Nothing here asserts anything about that variant.

## Facts & Assumptions

**Given:** Reals $a < b$ and $m \le M$, an integrable $f : [a,b] \to \mathbb{R}$ with values in $[m,M]$, a continuous $\varphi : [m,M] \to \mathbb{R}$, and a real $\varepsilon > 0$. Write $h := \varphi \circ f$.

[L1] Riemann's criterion: a bounded $u$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(u,P) - L(u,P) < \eta$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P = (n,t)$ of $[a,b]$ and bounded $u$: $U(u,P) - L(u,P) = \sum_{i<n}\bigl(M_i(u) - m_i(u)\bigr)\Delta_i$ with $\Delta_i > 0$ and $\sum_{i<n}\Delta_i = b - a$, and $M_i(u) - m_i(u) = \omega_u(I_i) = \sup\{\,|u(x)-u(y)| : x,y \in I_i\,\}$ ([[def-darboux-sums]], [[def-oscillation]], [[def-partition-and-refinement]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] $[m,M]$ with $m \le M$ and $[a,b]$ are closed bounded intervals, hence compact ([[thm-heine-borel-r]], [[def-open-cover-r]], [[def-interval]]).

[L4] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L5] Heine-Cantor: a continuous real function on a compact $K \subseteq \mathbb{R}$ is uniformly continuous on $K$, so for every real $\eta > 0$ there is a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \eta$ for all $s,t \in K$ with $|s-t| < \delta_0$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L6] Finite sums: additivity, scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1, 2 and 4).

[L7] Ordered-field arithmetic and the absolute value: multiplying an inequality by a nonnegative quantity and adding constants preserve it, the order is total and transitive, a positive real has a positive inverse, and $|u| \le c$ follows from $-c \le u \le c$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[lem-of-abs-value]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$, for instance $\eta' = \eta \cdot 2^{-1}$; and the Archimedean property in reciprocal form ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 $[m,M]$ is compact, so $\varphi$ is bounded there: fix a real $K \ge 0$ with $|\varphi(s)| \le K$ for every $s \in [m,M]$. Hence $|h(x)| \le K$ for every $x \in [a,b]$ and $h$ is bounded. [given, L3, L4, choose]

1.2 By [L5] applied on the compact $[m,M]$ with $\eta := \varepsilon$, fix a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \varepsilon$ whenever $s,t \in [m,M]$ and $|s-t| < \delta_0$; then put $\delta := \min\{\delta_0 \cdot 2^{-1},\ \varepsilon \cdot 2^{-1}\}$, a positive real with $\delta < \delta_0$ and $\delta < \varepsilon$. [given, L3, L5, L7, L8, choose]

2.1 So $|\varphi(s)-\varphi(t)| \le \varepsilon$ whenever $s,t \in [m,M]$ satisfy $|s-t| \le \delta$, since $\delta < \delta_0$. [step 1.2, L7]

2.2 Since $\delta > 0$, so is $\delta^{2}$, and [L1] supplies a partition $P = (n,t)$ of $[a,b]$ with $U(f,P) - L(f,P) < \delta^{2}$. [step 1.2, given, L1, L7, choose]

3.1 Fix $i < n$ and write $\Omega_i := M_i(f) - m_i(f) \ge 0$. If $\Omega_i \le \delta$ then any $x,y \in I_i$ have $|f(x)-f(y)| \le \Omega_i \le \delta$ with $f(x),f(y) \in [m,M]$, so $|h(x)-h(y)| \le \varepsilon$ by step 2.1, whence $M_i(h) - m_i(h) \le \varepsilon$ by [L2]. [step 2.1, step 2.2, L2, L7]

3.2 If instead $\Omega_i > \delta$ then $\Omega_i/\delta > 1$, while $M_i(h) - m_i(h) \le 2K$ always, by [L2] and step 1.1. [step 1.1, step 2.2, L2, L7]

4.1 In both cases $\bigl(M_i(h)-m_i(h)\bigr)\Delta_i \le \varepsilon\,\Delta_i + \bigl(2K/\delta\bigr)\Omega_i\Delta_i$: in the first case the second summand is nonnegative and the first alone dominates, and in the second case $(2K/\delta)\Omega_i\Delta_i \ge 2K\Delta_i$ dominates by itself. [step 3.1, step 3.2, L7]

5.1 Summing over $i < n$ with [L6] and using $\sum_{i<n}\Delta_i = b-a$ and [L2] gives $U(h,P)-L(h,P) \le \varepsilon(b-a) + (2K/\delta)\bigl(U(f,P)-L(f,P)\bigr)$. [step 4.1, L2, L6, L7]

6.1 By step 2.2 the second summand is below $(2K/\delta)\delta^{2} = 2K\delta$, and $\delta < \varepsilon$ by step 1.2, so $U(h,P)-L(h,P) < \varepsilon\,(b-a+2K)$. [step 2.2, step 5.1, L7]

7.1 Let a real $\eta > 0$ be given. Running steps 1.2 to 6.1 with $\varepsilon := \eta/(b-a+2K+1)$, a positive real since $b-a+2K+1 > 0$, produces a partition $P$ with $U(h,P)-L(h,P) < \eta\,(b-a+2K)/(b-a+2K+1) < \eta$. [step 6.1, L7, L8]

8.1 As $\eta > 0$ was arbitrary and $h$ is bounded by step 1.1, [L1] makes $h = \varphi\circ f$ integrable on $[a,b]$. [step 1.1, step 7.1, L1] ∎

## Remarks

- **Step 4.1 is what replaces the usual split of the index range.** The classical proof separates the indices into a good set $G$ and a bad set $B$ and sums over each; the finite-sum toolkit used here is that of [[lem-finite-sum-laws]], stated for $\sum_{i<n}$ and carrying no clause that splits a range into a subset and its complement, so the split is carried instead by a single inequality valid at *every* index, whose two summands are exactly the two contributions. The bound obtained is the same one.

- **The hypothesis $f[\,[a,b]\,] \subseteq [m,M]$ is what makes $\varphi\circ f$ defined at all**, and $m,M$ exist because an integrable $f$ is bounded ([[def-darboux-sums]]). Taking $[m,M]$ to be any interval containing the range of $f$ is legitimate and changes nothing, since a continuous function on a larger compact interval restricts to a continuous one.

- **What the theorem does not say.** It does not say that $\varphi\circ f$ is integrable when $\varphi$ is merely integrable, and it does not say that $\int_a^b \varphi\circ f$ can be computed from $\int_a^b f$. The first is refuted on the companion page. For the second, take $\varphi(t) = t^{2}$ on $[0,1]$ with $f$ the constant $1/2$ and with $g$ the indicator of $[0,1/2]$: both are integrable with integral $1/2$, while $\int_0^1 \varphi\circ f = 1/4$ and $\int_0^1 \varphi\circ g = 1/2$, so $\int_a^b \varphi\circ f$ is not a function of $\int_a^b f$.

- **Forward reference, orientation only.** The reversal refuted on the companion page is [[cex-a-composition-of-integrable-functions-that-is-not-integrable]]; nothing above depends on it.
````

### `thm-continuous-inverse`

````markdown
---
id: thm-continuous-inverse
kind: theorem
title: "Continuous inverse theorem: a continuous injective $f$ on an interval $I$ is a bijection onto the order-convex set $f[I]$, and the inverse $g : f[I] \\to I$ is continuous and strictly monotone in the same sense as $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [thm-continuous-injection-on-an-interval-is-strictly-monotone, def-monotone-function, cor-continuous-image-of-an-interval-is-an-interval, lem-monotone-with-interval-image-is-continuous, def-continuity-real, def-interval, def-injection-surjection-bijection, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions]
justified_by: []
aliases: [thm-inverse-function-continuity]
landmark: true
short: "continuous inverse theorem"
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
    - title: "Inverse function theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_theorem"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Real Analysis Notes 10 (California State University, Dominguez Hills)"
      url: "https://math.csudh.edu/~pong/a3/Notes_10.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
injective ([[def-injection-surjection-bijection]]). Then:

1. $f$ is strictly monotone ([[def-monotone-function]]);
2. $f[I]$ is order-convex;
3. the map $f : I \to f[I]$ is a bijection, so there is exactly one
   $g : f[I] \to I$ with $g(f(x)) = x$ for every $x \in I$ and $f(g(u)) = u$ for
   every $u \in f[I]$;
4. $g$ is strictly monotone in the same sense as $f$: increasing if $f$ is
   increasing, decreasing if $f$ is decreasing;
5. $g$ is continuous on $f[I]$.

**"Interval" means "order-convex" here**, as throughout this library
([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word and
[[def-interval]] records that the classification of order-convex sets into the
nine written forms is not proved here). No compactness and no boundedness is
assumed: $I$ may be open, half-open, unbounded, or a single point.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a continuous injective $f : I \to \mathbb{R}$.

[L1] A continuous injective function on an order-convex subset of $\mathbb{R}$ is strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]).

[L2] The image of an order-convex subset of the domain under a continuous function is order-convex ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1).

[L3] If $J \subseteq \mathbb{R}$ is order-convex, $h : J \to \mathbb{R}$ satisfies $h(u) \le h(v)$ whenever $u, v \in J$ and $u \le v$, and $h[J]$ is order-convex, then $h$ is continuous on $J$ ([[lem-monotone-with-interval-image-is-continuous]]).

[L4] Sums, scalar multiples and composites of continuous functions are continuous; in particular $u \mapsto -u$ is continuous on every subset of $\mathbb{R}$, being the scalar multiple $(-1)\,\mathrm{id}$ of the identity ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L5] $f$ is injective, so $f : I \to f[I]$ is a bijection and has a unique two-sided inverse ([[def-injection-surjection-bijection]]).

[L6] $f$ increasing means $f(x) < f(y)$ whenever $x < y$ in $I$; $-f$ is decreasing exactly when $f$ is increasing, and $-S$ is order-convex exactly when $S$ is ([[def-monotone-function]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: $f$ is continuous and injective on the order-convex set $I$, hence strictly monotone. [L1]

1.2 Claim 2 is immediate: $I$ is order-convex and $f$ is continuous on $I$, so $f[I]$ is order-convex. [L2]

1.3 Claim 3 is immediate: $f$ is injective and $f : I \to f[I]$ is onto its image by definition of the image, so it is a bijection and has a unique two-sided inverse $g : f[I] \to I$. [L5]

2.1 Suppose $f$ is increasing, and let $u, v \in f[I]$ with $u < v$. Write $u = f(p)$ and $v = f(q)$ with $p = g(u)$ and $q = g(v)$ in $I$. If $q \le p$ then $f(q) \le f(p)$, since $q = p$ gives equality and $q < p$ gives $f(q) < f(p)$; that is $v \le u$, contradicting $u < v$. Hence $p < q$, that is $g(u) < g(v)$, and $g$ is increasing. [step 1.1, step 1.3, L6]

2.2 Suppose instead that $f$ is decreasing, and put $F := -f$, that is $F(x) := -f(x)$. Then $F$ is continuous on $I$, it is injective because $f$ is, and it is increasing. [step 1.1, L4, L6]

3.1 Still with $f$ increasing: $g$ satisfies $g(u) \le g(v)$ whenever $u \le v$ in $f[I]$, by step 2.1 when $u < v$ and trivially when $u = v$; the domain $f[I]$ is order-convex by step 1.2; and the image $g[f[I]]$ is $I$, which is order-convex, because $g$ is onto $I$. So the monotone-with-interval-image criterion applies and $g$ is continuous on $f[I]$. [step 1.2, step 1.3, step 2.1, L3]

4.1 By steps 2.1 and 3.1 applied to $F$, the inverse $G : F[I] \to I$ of $F$ is increasing and continuous, and $F[I] = -f[I]$ is order-convex. [step 2.1, step 3.1, step 2.2]

5.1 For $u \in f[I]$ one has $-u \in F[I]$ and $G(-u) = g(u)$, since $F(g(u)) = -f(g(u)) = -u$ and $G$ is the inverse of $F$. So $g$ is the composite of the continuous map $u \mapsto -u$ from $f[I]$ into $F[I]$ with the continuous $G$, hence continuous on $f[I]$. [step 1.3, step 4.1, L4]

6.1 In that case $g$ is decreasing: for $u < v$ in $f[I]$ one has $-v < -u$ in $F[I]$, so $G(-v) < G(-u)$ because $G$ is increasing, that is $g(v) < g(u)$. [step 4.1, step 5.1]

7.1 Claims 4 and 5 are now proved in both cases: for $f$ increasing by steps 2.1 and 3.1, and for $f$ decreasing by steps 5.1 and 6.1; and by step 1.1 there is no other case. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1] ∎

## Remarks

- **No epsilon-delta argument appears anywhere.** Continuity of the inverse is obtained entirely from [[lem-monotone-with-interval-image-is-continuous]], whose hypotheses are exactly the two facts the theorem has already established: the inverse is monotone, and its image is the order-convex set $I$. The decreasing case is reduced to the increasing one by composing with $u \mapsto -u$ rather than repeating the argument.

- **What the theorem is used for.** It is the tool that turns a strictly monotone continuous bijection into a continuous one in the other direction, and the standard elementary functions are built with it: the companion page derives the continuity of $x \mapsto x^{1/n}$ this way.
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

### `thm-linearity-of-the-integral`

````markdown
---
id: thm-linearity-of-the-integral
kind: theorem
title: "Integrable functions on $[a,b]$ form a set closed under sums and scalar multiples, and $\\int_a^b(\\lambda f+\\mu g) = \\lambda\\int_a^b f + \\mu\\int_a^b g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums, thm-riemann-criterion, lem-refinement-inequalities, def-partition-and-refinement, lem-integral-elementary-bounds, def-oriented-integral, lem-reflection, def-infimum, lem-sup-unique, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-linear]
landmark: true
short: "linearity of the integral"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. $f + g$ is integrable on $[a,b]$ and
   $\int_a^b (f+g) = \int_a^b f + \int_a^b g$;
2. for every real $\lambda$, $\lambda f$ is integrable on $[a,b]$ and
   $\int_a^b \lambda f = \lambda \int_a^b f$;
3. consequently, for all reals $\lambda, \mu$ the function $\lambda f + \mu g$ is
   integrable and
   $$\int_a^b(\lambda f + \mu g) \;=\; \lambda\int_a^b f \;+\; \mu\int_a^b g ;$$
4. the same identity holds with oriented limits: if $u, v \in [a,b]$ and $f, g$
   are integrable between $u$ and $v$ ([[def-oriented-integral]]), then
   $\int_u^v(\lambda f + \mu g) = \lambda\int_u^v f + \mu\int_u^v g$.

**Linearity of the integral is not linearity of the Darboux sums**, and the
proof of claim 1 has to squeeze rather than compute. On a subinterval the
inequality $\sup(f+g) \le \sup f + \sup g$ can be strict — take $f(x) = x$ and
$g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ —
so $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity
between upper sums is available. Claim 2, by contrast, is an identity at the
level of the sums, with the roles of $\sup$ and $\inf$ exchanged when
$\lambda < 0$.

## Facts & Assumptions

**Given:** Reals $a < b$, integrable $f, g : [a,b] \to \mathbb{R}$, reals $\lambda, \mu$, and a real $\varepsilon > 0$.

[L1] Riemann's criterion: a bounded $h$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(h,P) - L(h,P) < \eta$ ([[thm-riemann-criterion]]).

[L2] For every partition $P$ and bounded $h$: $L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P)$, and $h$ is integrable exactly when the two integrals agree, their common value being $\int_a^b h$; the lower integral is $\sup_P L(h,P)$ and the upper is $\inf_P U(h,P)$ ([[def-darboux-integral]], [[lem-sup-unique]]).

[L3] $L(h,P) = \sum_{i<n} m_i(h)\Delta_i$ and $U(h,P) = \sum_{i<n}M_i(h)\Delta_i$, where $m_i(h) = \inf h[I_i]$ and $M_i(h) = \sup h[I_i]$ over the subintervals $I_i$ of $P = (n,t)$, with $\Delta_i > 0$; an integrable function is bounded, and a sum of two bounded functions and a scalar multiple of a bounded function are bounded ([[def-darboux-sums]], [[def-partition-and-refinement]], [[def-bounded-set]]).

[L4] If $P'$ refines $P$ then $L(h,P) \le L(h,P') \le U(h,P') \le U(h,P)$; the common refinement $P_1 \vee P_2$ refines both ([[lem-refinement-inequalities]], [[def-partition-and-refinement]]).

[L5] Finite sums are additive and homogeneous: $\sum_{i<n}(x_i + y_i) = \sum_{i<n}x_i + \sum_{i<n}y_i$ and $\sum_{i<n}\lambda x_i = \lambda\sum_{i<n}x_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 and 2).

[L6] A supremum is the least upper bound and an infimum the greatest lower bound; both exist for a nonempty bounded set and are unique ([[def-complete-ordered-field]], [[def-infimum]], [[lem-sup-unique]]).

[L7] Reflection: writing $-S = \{-s : s \in S\}$, a real $u$ is an upper bound of $S$ exactly when $-u$ is a lower bound of $-S$, and conversely; hence $\sup(-S) = -\inf S$ and $\inf(-S) = -\sup S$ for nonempty bounded $S$, by [L6] ([[lem-reflection]]).

[L8] The constant function $0$ is integrable with $\int_a^b 0 = 0$ ([[lem-integral-elementary-bounds]]).

[L9] Ordered-field arithmetic: adding a constant and multiplying by a positive quantity preserve an inequality, the order is total and transitive, and a real $x$ with $|x| < \eta$ for every real $\eta > 0$ is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]). These order facts are used in their nonstrict form as well, obtained by adjoining the case of equality.

[L10] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $f$, $g$, $f+g$ and $\lambda f$ are bounded on $[a,b]$, so all their Darboux sums and integrals are defined. [given, L3]

1.2 For every partition $P = (n,t)$ and every $i < n$: $f(x) + g(x) \le M_i(f) + M_i(g)$ for $x \in I_i$, so $M_i(f) + M_i(g)$ is an upper bound of $(f+g)[I_i]$ and $M_i(f+g) \le M_i(f) + M_i(g)$ by [L6]; dually $m_i(f+g) \ge m_i(f) + m_i(g)$. [L3, L6]

1.3 Fix partitions $P_1$ and $P_2$ with $U(f,P_1) - L(f,P_1) < \varepsilon \cdot 2^{-1}$ and $U(g,P_2) - L(g,P_2) < \varepsilon \cdot 2^{-1}$, and put $P := P_1 \vee P_2$. [given, L1, L4, choose]

1.4 **Claim 2, the case $\lambda = 0$.** Then $\lambda f$ is the constant function $0$, integrable with integral $0 = 0 \cdot \int_a^b f$. [L8]

1.5 **Claim 2, the case $\lambda > 0$.** For every partition $P$ and every $i < n$, $\lambda M_i(f)$ is an upper bound of $(\lambda f)[I_i]$, and any upper bound $w$ of $(\lambda f)[I_i]$ gives the upper bound $w/\lambda$ of $f[I_i]$, whence $M_i(f) \le w/\lambda$ and $\lambda M_i(f) \le w$; so $M_i(\lambda f) = \lambda M_i(f)$ by [L6], and dually $m_i(\lambda f) = \lambda m_i(f)$. [L3, L6, L9]

1.6 **Claim 2, the case $\lambda = -1$.** For every $P$ and $i < n$, $(-f)[I_i] = -\bigl(f[I_i]\bigr)$, so $M_i(-f) = -m_i(f)$ and $m_i(-f) = -M_i(f)$ by [L7]. [L3, L7]

2.1 By [L4], $U(f,P) - L(f,P) < \varepsilon\cdot 2^{-1}$ and $U(g,P) - L(g,P) < \varepsilon \cdot 2^{-1}$. [step 1.3, L4]

2.2 Summing the inequalities of step 1.2 over $i < n$ against the positive weights $\Delta_i$ and using [L5] gives $L(f,P) + L(g,P) \le L(f+g,P) \le U(f+g,P) \le U(f,P) + U(g,P)$. [step 1.2, L3, L5, L9]

2.3 With step 1.5 and [L5], $U(\lambda f,P) = \lambda U(f,P)$ and $L(\lambda f, P) = \lambda L(f,P)$ for $\lambda > 0$; hence $U(\lambda f,P)-L(\lambda f,P) = \lambda\bigl(U(f,P)-L(f,P)\bigr)$, which [L1] makes smaller than any prescribed positive number by choosing $P$ suitably, so $\lambda f$ is integrable. [step 1.5, L1, L3, L5, L9]

2.4 With step 1.6 and [L5], $U(-f,P) = -L(f,P)$ and $L(-f,P) = -U(f,P)$, so $U(-f,P)-L(-f,P) = U(f,P)-L(f,P)$ and $-f$ is integrable by [L1]; and by [L7] applied to the sets of Darboux sums, $\overline{\int_a^b}(-f) = -\underline{\int_a^b} f$ and $\underline{\int_a^b}(-f) = -\overline{\int_a^b} f$, so $\int_a^b(-f) = -\int_a^b f$. [step 1.6, L1, L2, L5, L7]

3.1 Hence $U(f+g,P) - L(f+g,P) \le \bigl(U(f,P)-L(f,P)\bigr) + \bigl(U(g,P)-L(g,P)\bigr) < \varepsilon$, so $f+g$ is integrable by [L1], $\varepsilon > 0$ having been arbitrary. [step 1.1, step 2.1, step 2.2, L1, L9]

3.2 Moreover the set of lower sums of $\lambda f$ is $\lambda$ times the set of lower sums of $f$, and a supremum scales by a positive factor, by the argument of step 1.5 applied to that set; so $\underline{\int_a^b}\lambda f = \lambda \underline{\int_a^b} f$, and likewise for the upper integrals, giving $\int_a^b \lambda f = \lambda\int_a^b f$. [step 1.5, step 2.3, L2, L6, L9]

4.1 Both $\int_a^b(f+g)$ and $\int_a^b f + \int_a^b g$ lie in the interval from $L(f,P)+L(g,P)$ to $U(f,P)+U(g,P)$: the first by [L2] and step 2.2, the second by [L2] applied to $f$ and to $g$ separately. [step 2.1, step 2.2, step 3.1, L2]

4.2 **Claim 2 for $\lambda < 0$.** Then $-\lambda > 0$ and $\lambda f = (-\lambda)(-f)$, so steps 2.3, 2.4 and 3.2 give integrability and the required identities and $\int_a^b \lambda f = (-\lambda)\int_a^b(-f) = (-\lambda)\bigl(-\int_a^b f\bigr) = \lambda\int_a^b f$. [step 2.3, step 3.2, step 2.4, L9]

5.1 That interval has length less than $\varepsilon$ by step 2.1, so $\bigl|\int_a^b(f+g) - \int_a^b f - \int_a^b g\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 1. [step 2.1, step 4.1, L9]

5.2 Claim 2 is now proved in all three cases $\lambda = 0$, $\lambda > 0$ and $\lambda < 0$, which are exhaustive by trichotomy. [step 1.4, step 2.3, step 3.2, step 4.2, L9]

6.1 **Claim 3.** By claim 2 the functions $\lambda f$ and $\mu g$ are integrable with integrals $\lambda\int_a^b f$ and $\mu\int_a^b g$, and by claim 1 their sum is integrable with the sum of those integrals. [step 5.1, step 5.2]

7.1 **Claim 4.** If $u < v$ then $u, v \in [a,b]$ and claim 3 applies verbatim on $[u,v]$; if $u = v$ both sides are $0$ by [L10]; and if $u > v$ then applying the case $u < v$ to the pair $(v,u)$ and multiplying by $-1$ gives the identity, by [L10]. [step 6.1, L10] ∎

## Remarks

- **Why claim 1 cannot be an identity of Darboux sums.** The example in the statement shows $\sup(f+g) < \sup f + \sup g$ is possible on a single subinterval, so $U(f+g,P) = U(f,P)+U(g,P)$ is false in general. What survives is the pair of inequalities of step 1.2, and they are enough because the gap between them is squeezed to $0$ by [[thm-riemann-criterion]].

- **The two scalar cases really are different.** For $\lambda > 0$ the extreme values scale; for $\lambda < 0$ they are exchanged, because multiplying by a negative reverses the order ([[lem-reflection]]). Merging the cases and writing $U(\lambda f, P) = \lambda U(f,P)$ for all $\lambda$ would be false at $\lambda = -1$, where the correct identity is $U(-f,P) = -L(f,P)$.

- **The set of integrable functions on $[a,b]$ is closed under the operations named here and under more.** Products, absolute values and the lattice operations are also integrable, but none of them is obtained from linearity alone: the proofs of [[cor-integrability-of-absolute-values-products-and-lattice-operations]] all pass through [[thm-composition-with-a-continuous-function]], with linearity used only to recombine the pieces.
````

### `thm-monotonicity-of-the-integral`

````markdown
---
id: thm-monotonicity-of-the-integral
kind: theorem
title: "If $f \\le g$ on $[a,b]$ and both are integrable then $\\int_a^b f \\le \\int_a^b g$; and $m(b-a) \\le \\int_a^b f \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-the-integral, def-darboux-integral, def-darboux-sums, lem-integral-elementary-bounds, lem-finite-sum-laws, def-finite-sum, def-oriented-integral, def-infimum, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-monotone]
landmark: true
short: "monotonicity of the integral"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. **Nonnegativity.** If $f(x) \ge 0$ for every $x \in [a,b]$ then
   $\int_a^b f \ge 0$.
2. **Monotonicity.** If $f(x) \le g(x)$ for every $x \in [a,b]$ then
   $$\int_a^b f \;\le\; \int_a^b g .$$
3. **Two-sided bound.** If $m \le f(x) \le M$ for every $x \in [a,b]$, with
   $m, M$ real, then
   $$m\,(b-a) \;\le\; \int_a^b f \;\le\; M\,(b-a) .$$

**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable
function with integral $0$ may be positive at infinitely many points; that is
[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's
companion. Under the additional hypothesis of continuity the conclusion does
hold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]
below.

**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the
convention of [[def-oriented-integral]], $f \le g$ gives
$\int_u^v f \le \int_u^v g$ when $u \le v$ and the reverse inequality when
$u \ge v$, since both sides change sign together.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$, with reals $m \le M$ where claim 3 is concerned.

[A1] $f(x) \ge 0$ for every $x \in [a,b]$.

[A2] $f(x) \le g(x)$ for every $x \in [a,b]$.

[A3] $m \le f(x) \le M$ for every $x \in [a,b]$.

[L1] If $m' \le h \le M'$ on $[a,b]$ then $m'(b-a) \le L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P) \le M'(b-a)$ for every partition $P$ ([[lem-integral-elementary-bounds]], [[def-darboux-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] If $h$ is integrable then $\int_a^b h$ is the common value of the lower and upper integrals ([[def-darboux-integral]], [[def-infimum]]).

[L3] Sums and scalar multiples of integrable functions are integrable, and $\int_a^b(\lambda h + \nu k) = \lambda\int_a^b h + \nu\int_a^b k$ ([[thm-linearity-of-the-integral]]).

[L4] Ordered-field arithmetic: adding a constant to both sides of an inequality preserves it, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

## Proof

**Proof technique:** direct.

1.1 **Claim 1.** Under [A1] the constant $0$ is a lower bound of $f$ on $[a,b]$, so [L1] applies with $m' := 0$ and gives $\underline{\int_a^b} f \ge 0$. [A1, L1]

1.2 **Claim 2.** Under [A2] the function $h := g - f$ satisfies $h(x) \ge 0$ for every $x \in [a,b]$, and $h$ is integrable with $\int_a^b h = \int_a^b g - \int_a^b f$ by [L3]. [A2, L3, L4]

2.1 Since $f$ is integrable, $\int_a^b f = \underline{\int_a^b} f \ge 0$ by [L2]. [step 1.1, L2]

3.1 By claim 1 applied to $h$, $\int_a^b g - \int_a^b f \ge 0$, that is $\int_a^b f \le \int_a^b g$. [step 2.1, step 1.2, L4]

4.1 **Claim 3.** Under [A3], [L1] applied to $f$ with $m' := m$ and $M' := M$ gives $m(b-a) \le \underline{\int_a^b} f$ and $\overline{\int_a^b} f \le M(b-a)$, and both integrals equal $\int_a^b f$ by [L2]. [A3, L1, L2] ∎

## Remarks

- **Claim 3 is cited, not reproved.** [[lem-integral-elementary-bounds]] already proves the five-term chain for every partition, and it is the item that also computes the integral of a constant, $\int_a^b c = c(b-a)$. Claim 3 is that chain read at an integrable $f$; nothing new is established here.

- **Claim 2 is proved through claim 1 and linearity, and not by comparing Darboux sums.** Comparing sums works too, since $f \le g$ gives $m_i(f) \le m_i(g)$ and $M_i(f) \le M_i(g)$ on every subinterval, but the route through $g - f$ is shorter and uses only results already available. Either way the hypothesis is a pointwise inequality on the *whole* of $[a,b]$; an inequality holding off a finite set gives the same conclusion, by [[lem-changing-a-function-at-finitely-many-points]], and that is a separate statement.

- **What claim 2 is for.** It is what turns a pointwise estimate on an integrand into an estimate on the integral, and every estimate of that shape on this page and its companion is an application of it. No count of those applications is asserted here; the dependency graph of the page is where that is read off.
````

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

