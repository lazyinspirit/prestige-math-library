## Selection reasons

- critical risk (14): 23 declared dependencies; 20 cited facts; 14 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (23 outgoing relationships)

## Target item — `thm-componentwise-limits-and-continuity`

Normalized current SHA-256: `2393fa57df0c3fd2794d4e186656015f5207fab2fdf3dab75c237d69e15c0661`

The complete exact-current item follows, including frontmatter:

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

## Wave 12 provenance row

```json
{
  "id": "thm-componentwise-limits-and-continuity",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html",
    "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
  ],
  "rationale": "The Toronto notes state that a finite-dimensional vector-valued function is continuous exactly when every component is continuous and record closure under addition; APEX Calculus states that vector-valued limits are computed componentwise and that continuity is equivalent to componentwise continuity. The item generalizes those Euclidean-domain statements to a subset of an arbitrary metric-space domain and arbitrary finite m >= 1, and supplies its own proofs of scalar multiplication, inner-product continuity, and continuity after every norm. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "def-vector-valued-functions-limits-and-continuity",
      "source_section": "Definition",
      "quote": "Throughout, $m \\in \\mathbb{N}$ with $m \\ge 1$, and $\\mathbb{R}^{m}$ carries the Euclidean norm $\\lVert\\cdot\\rVert_2$ of [[def-euclidean-inner-product]] and [[def-p-norms-on-rn]], whose induced metric is the published $d_2$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-metrics-on-rn]]). A function into $\\mathbb{R}^{m}$ is called **vector-valued**. ### Continuity Let $(X, d_X)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ carry the restricted metric $d_A$ ([[def-isometry-and-metric-embedding]]), let $f : A \\to \\mathbb{R}^{m}$ and let $a \\in A$. Then $f$ is **continuous at $a$** when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ d_X(x,a) < \\delta \\ \\Longrightarrow\\ \\lVert f(x) - f(a)\\rVert_2 < \\varepsilon\\ \\bigr],$$ with $\\varepsilon, \\delta$ ranging over the positive reals, and **continuous on $A$** when it is continuous at every point of $A$. **This is not a new notion, and that is the point of writing it down.** Since $\\lVert f(x)-f(a)\\rVert_2 = d_2\\bigl(f(x),f(a)\\bigr)$ and $d_A$ is the restriction of $d_X$, the displayed condition is **verbatim** the condition of [[def-metric-continuity]] for the map of metric spaces $f : (A,d_A) \\to (\\mathbb{R}^{m}, d_2)$. So every theorem about continuous maps of metric spaces applies to vector-valued functions with no translation, and this library has exactly one notion of continuity here. The same move was made once before, between the $\\mathbb{R}$-native and the metric notions, in [[lem-real-and-metric-notions-agree]]; this item is that move one dimension up in the codomain. The two cases used below are $X = \\mathbb{R}$ with $d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]) and $X = \\mathbb{R}^{n}$ with $d_2$, for $n \\ge 1$. ### Limits, for a real domain Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}^{m}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]) and let $L \\in \\mathbb{R}^{m}$. We say $f(x)$ **tends to $L$ as $x$ tends to $c$**, and write $\\lim_{x\\to c} f(x) = L$, when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ \\lVert f(x) - L\\rVert_2 < \\varepsilon\\ \\bigr].$$ This is the condition of [[def-function-limit]] with the absolute value in the codomain replaced by $\\lVert\\cdot\\rVert_2$; as there, the puncture $0 < |x-c|$ is what makes $c$ a point the function need not be defined at, and the hypothesis that $c$ is a limit point of $A$ is what stops the condition from being satisfied vacuously. **The notation denotes: at most one $L$ satisfies the condition.** Suppose $L$ and $L'$ both do and $L \\ne L'$. Then $\\varepsilon := \\lVert L-L'\\rVert_2 / 2 > 0$ by (N1) for $\\lVert\\cdot\\rVert_2$ ([[def-norm-and-normed-space]]). Take $\\delta$ and $\\delta'$ for this $\\varepsilon$ and put $\\eta := \\min\\{\\delta,\\delta'\\} > 0$. Since $c$ is a limit point of $A$ there is $x \\in A$ with $0 < |x-c| < \\eta$ ([[def-limit-point-r]]), and then $$\\lVert L - L'\\rVert_2 \\;\\le\\; \\lVert L - f(x)\\rVert_2 + \\lVert f(x) - L'\\rVert_2 \\;<\\; \\varepsilon + \\varepsilon \\;=\\; \\lVert L-L'\\rVert_2$$ by (N3) and (N2), which trichotomy forbids. So $L = L'$. ### Components For $i < m$ define the $i$-th **coordinate projection** $\\pi_i : \\mathbb{R}^{m} \\to \\mathbb{R}$ by $\\pi_i(y) := y_i = y(i)$, and for $f : A \\to \\mathbb{R}^{m}$ the $i$-th **component** $f_i := \\pi_i \\circ f$, a real-valued function on $A$. **Each $\\pi_i$ is $1$-Lipschitz** ([[def-lipschitz-holder-contraction]]): for $y, z \\in \\mathbb{R}^{m}$, $$\\bigl|\\pi_i(y) - \\pi_i(z)\\bigr| \\;=\\; |y_i - z_i| \\;\\le\\; \\lVert y - z\\rVert_2 \\;=\\; d_2(y,z),$$ the middle inequality being $|w_i| \\le \\lVert w\\rVert_2$ at $w := y-z$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, or directly because $w_i^{2}$ is one term of the sum $\\sum_{k<m}w_k^{2}$). Written in coordinates, $f(x)$ is the vector whose $i$-th coordinate is $f_i(x)$, and $f(x) = \\sum_{i<m} f_i(x)\\,e_i$ in the standard basis ([[lem-standard-basis-of-f-n]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.4",
        "1.5",
        "1.6",
        "1.7",
        "2.1",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-continuity",
      "source_section": "Definition",
      "quote": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let $f : X \\to Y$ be a function and let $a \\in X$. $f$ is **continuous at $a$** if for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that $$d_X(x,a) < \\delta \\;\\Longrightarrow\\; d_Y\\big(f(x), f(a)\\big) < \\varepsilon \\qquad \\text{for all } x \\in X .$$ $f$ is **continuous** (globally, or on $X$) if it is continuous at every point of $X$. **The same condition in balls.** Since $d_X(x,a) < \\delta$ says $x \\in B_X(a,\\delta)$ and $d_Y(f(x),f(a)) < \\varepsilon$ says $f(x) \\in B_Y(f(a),\\varepsilon)$ ([[def-metric-ball]]), continuity at $a$ reads: for every $\\varepsilon > 0$ there is $\\delta > 0$ with $$f\\big[B_X(a,\\delta)\\big] \\subseteq B_Y\\big(f(a), \\varepsilon\\big).$$ Both forms are used below and are the same statement written twice. **Both metrics matter, and both are named.** Continuity is a property of the triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are always written out. **Quantifier order.** The $\\delta$ is allowed to depend on $\\varepsilon$ **and on the point $a$**. Requiring one $\\delta$ to work at every point simultaneously is a strictly stronger condition, uniform continuity; it is defined on a later page of this library, and at this point in the reading order it is written out in full where needed ([[def-equivalent-metrics]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.4",
        "1.5",
        "1.6",
        "1.7",
        "2.1",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]). Let $X$ be a set. A **metric** on $X$ is a function $d : X \\times X \\to \\mathbb{R}$ such that for all $x, y, z \\in X$: - **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$. - **(M2) Symmetry.** $d(x,y) = d(y,x)$. - **(M3) Triangle inequality.** $d(x,z) \\le d(x,y) + d(y,z)$. A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from $x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when several are, the metric is always named. **The values of a metric are real numbers.** The codomain is $\\mathbb{R}$, so $d(x,y)$ is an honest element of the complete ordered field and every inequality above is an inequality there. No infinite value is permitted; [[rem-metric-axiom-conventions]] records why extended metrics are not treated in this library. **Nonnegativity is deliberately absent from the axiom list.** Many texts add a fourth axiom $d(x,y) \\ge 0$. It is redundant: (M1), (M2) and (M3) already force it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that lemma is available. **Pseudometric.** A **pseudometric** on $X$ is a function $p : X \\times X \\to \\mathbb{R}$ satisfying (M2), (M3) and the weakening - **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \\in X$ of (M1). A pseudometric may therefore assign distance $0$ to two distinct points. Every metric is a pseudometric, and a pseudometric is a metric exactly when $p(x,y) = 0$ forces $x = y$. **Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition satisfies - **(M3') Strong triangle inequality.** $d(x,z) \\le \\max\\{d(x,y), d(y,z)\\}$ for all $x, y, z \\in X$, where the maximum is that of a two-element subset of $\\mathbb{R}$, which exists and is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair $(X,d)$ with $d$ an ultrametric.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.4",
        "1.5",
        "1.6",
        "1.7",
        "2.1",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by $d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then: 1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is called the **usual metric** of $\\mathbb{R}$. 2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval ([[def-interval]], [[def-metric-ball]]) $$B(x,r) = (x-r,\\ x+r),$$ and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$. 3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$ there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the **usual topology** of $\\mathbb{R}$. 4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.4",
        "1.5",
        "1.6",
        "1.7",
        "2.1",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about $\\mathbb{R}^{n}$ with $n \\ge 1$.** 1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every $p \\in \\mathbb{N}$ and every list $u : p \\to V$ ([[def-linear-combination-and-span]]), $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$ and for all $u, w \\in V$, $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$ Now let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of [[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural ([[def-canonical-natural]]). 2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a nonempty finite set of reals ([[lem-standard-basis-of-f-n]], [[lem-finite-set-has-max]]). Then $C \\ge 0$ and $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$ 3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$, $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$ In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$, with the constants displayed ([[def-equivalent-norms]]). 4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is Lipschitz with constant $C\\sqrt{\\iota(n)}$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]). **Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to exist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a maximum over the empty index set and does not exist, exactly as in [[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis on the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.6"
      ]
    },
    {
      "fact": "L2",
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.6"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.6"
      ]
    },
    {
      "fact": "L3",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "1.5",
        "1.7"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms of [[def-p-norms-on-rn]]. Then: 1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]). 2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$. 3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$, $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$ where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published [[lem-metrics-on-rn]]. So the metric induced by each of these three norms ([[def-norm-and-normed-space]]) **is** the correspondingly named published metric, not merely one equivalent to it. **Consequence, used repeatedly below and stated once here.** By clause 3 at $p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces page and the metric space underlying the normed space $(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel ([[thm-heine-borel-rn]] clause 2) and the compactness equivalences ([[thm-metric-compactness-equivalences]]) are statements about this page's normed space, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**. Nothing below cites any of those three theorems for $n = 0$. **Why this lemma exists.** Without it the library would hold a norm-induced metric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with no recorded relation, and every later citation would have to guess which was meant. The proof of clause 3 is a comparison of two written expressions; the value is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "1.5",
        "1.7"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-cauchy-schwarz-and-the-euclidean-norm",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $x, y \\in \\mathbb{R}^{n}$, with the Euclidean inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then: 1. **Cauchy-Schwarz.** $$\\lvert\\langle x,y\\rangle\\rvert \\;\\le\\; \\lVert x\\rVert_2\\,\\lVert y\\rVert_2 ,$$ with equality if and only if there is a pair $(\\lambda,\\mu) \\ne (0,0)$ of reals with $\\lambda x_k = \\mu y_k$ for every $k < n$. 2. **$\\lVert\\cdot\\rVert_2$ is a norm on $\\mathbb{R}^{n}$** ([[def-norm-and-normed-space]]), for **every** $n \\in \\mathbb{N}$; the metric it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \\ge 1$. 3. **Parallelogram law.** $$\\lVert x+y\\rVert_2^{2} + \\lVert x-y\\rVert_2^{2} \\;=\\; 2\\lVert x\\rVert_2^{2} + 2\\lVert y\\rVert_2^{2} .$$ 4. **Polarisation.** $$\\langle x,y\\rangle \\;=\\; \\tfrac14\\Bigl(\\lVert x+y\\rVert_2^{2} - \\lVert x-y\\rVert_2^{2}\\Bigr),$$ so the inner product is recovered from the norm it induces. **Clause 1 is a citation, not a new proof.** The inequality and its equality case are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of reals; all that happens below is that it is read in the vector notation of [[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one statement in the library.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-euclidean-inner-product",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$. A natural number is a von Neumann natural, that is a set, and $n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so $$\\mathbb{R}^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to \\mathbb{R} \\,\\}$$ is the function space of [[def-function-space]] at $F = \\mathbb{R}$ and $X = n$, a vector space over $\\mathbb{R}$ under the pointwise operations ([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of $\\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the same set that [[lem-metrics-on-rn]] calls $\\mathbb{R}^{n}$. The **Euclidean inner product** of $x, y \\in \\mathbb{R}^{n}$ is the real number $$\\langle x, y\\rangle \\;:=\\; \\sum_{k<n} x_k\\,y_k ,$$ the finite sum of [[def-finite-sum]] applied to the list $k \\mapsto x_k y_k$ (extended by $0$ beyond $n$, as every finite list in this library is). The **Euclidean norm** of $x$ is $$\\lVert x\\rVert_2 \\;:=\\; \\sqrt{\\langle x, x\\rangle},$$ which is defined because $\\langle x,x\\rangle = \\sum_{k<n} x_k^{2} \\ge 0$ (a sum of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and [[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by [[def-integer-power]]) and every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]). ### Both are defined for every $n$, including $n = 0$ At $n = 0$ the set $\\mathbb{R}^{0}$ has exactly one element, the empty function, and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum above is the empty sum, so $\\langle x,y\\rangle = 0$ and $\\lVert x\\rVert_2 = 0$. **This is the first place on this page where the two index regimes diverge, and the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\\infty$ of [[lem-metrics-on-rn]] are defined only for $n \\ge 1$, because $d_\\infty$ would otherwise be a maximum over the empty index set; the algebra above needs no such restriction. The boundary in this page runs between the algebra and the metric, not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists exactly which items inherit $n \\ge 1$. ### The algebra of the inner product For all $x, y, z \\in \\mathbb{R}^{n}$ and $\\lambda \\in \\mathbb{R}$: 1. **Symmetry.** $\\langle x,y\\rangle = \\langle y,x\\rangle$, since $x_ky_k = y_kx_k$ termwise. 2. **Additivity in the first argument.** $\\langle x + y, z\\rangle = \\langle x,z\\rangle + \\langle y,z\\rangle$: the list $k \\mapsto (x_k+y_k)z_k$ is the termwise sum of $k \\mapsto x_kz_k$ and $k \\mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies. 3. **Homogeneity in the first argument.** $\\langle \\lambda x, y\\rangle = \\lambda\\langle x,y\\rangle$, by [[lem-finite-sum-laws]] clause 2. 4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws in the second argument. 5. **Positive definiteness.** $\\langle x,x\\rangle \\ge 0$, and $\\langle x,x\\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$. 6. **Agreement with the published Euclidean metric.** For $n \\ge 1$ and $x, y \\in \\mathbb{R}^{n}$, $\\lVert x - y\\rVert_2 = \\sqrt{\\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two sides being the same expression ([[lem-metrics-on-rn]]). In particular $\\lVert x\\rVert_2 = d_2(x, 0)$. That $\\lVert\\cdot\\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]] is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.4",
        "1.5",
        "1.6",
        "2.2",
        "3.1",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.4",
        "1.5",
        "1.6",
        "2.2",
        "3.1",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.4",
        "1.5",
        "1.6",
        "2.2",
        "3.1",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]). What is proved below is exactly the displayed statement, by induction on $n$. The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a maximum and a minimum*, follows once one identifies the nonempty finite subsets of $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That identification is recorded as a stipulation in the Given below, because this page has no definition of finiteness to prove it against. **It is discharged, not merely assumed**: [[lem-finite-subsets-listable]] proves that the two descriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is recorded in `justified_by` rather than in `deps`, since it is about the sets this lemma quantifies over and therefore depends on this one. This is what licenses the notation $\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of **real** numbers from this page onwards.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L7",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$. - $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$. A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then $m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so $m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]). The same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose values are nonempty sets. Then the family of its values, $\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function ([[def-choice-function]]). This is a theorem of ZF: its proof uses no form of the Axiom of Choice ([[def-axiom-of-choice]]). What is proved below is exactly the displayed statement, by induction on $n$. The natural number $n$ serves as the index set in the von Neumann sense, $n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]]), so \"$F$ has domain $n$\" says precisely that the members of $\\mathcal{F}$ are listed as $F(0), \\dots, F(n-1)$. The listing need not be injective, and $\\mathcal{F}$ is the set of values, so repetitions are harmless and are not counted. The displayed statement and its proof use only a natural-number-indexed function. They do not identify an arbitrary finite family with a particular enumeration.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.5",
        "2.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For every $y \\in \\mathbb{R}^{m}$: $|y_i| \\le \\lVert y\\rVert_2$ for each $i<m$, and $\\lVert y\\rVert_2 \\le \\sum_{i<m}|y_i|$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If $a_i < b_i$ for every $i<m$ and $m \\ge 1$, then $\\sum_{i<m}a_i < \\sum_{i<m}b_i$: the list $i \\mapsto b_i - a_i$ has positive terms, so its sum is at least its term at index $0$, hence positive, and additivity gives the strict inequality.",
      "step": "1.2",
      "inputs": [
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "For each $i<m$ the set of positive reals $\\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\\delta_0,\\dots,\\delta_{m-1}$ simultaneously, with no choice principle used.",
      "step": "1.3",
      "inputs": [
        "L7"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "For $f+g$: given $\\varepsilon > 0$, pick $\\delta_1, \\delta_2 > 0$ for the tolerance $\\varepsilon/\\iota(2)$ at $f$ and at $g$ and put $\\delta := \\min\\{\\delta_1,\\delta_2\\}$; then for $d_X(x,a) < \\delta$, $\\lVert (f+g)(x)-(f+g)(a)\\rVert_2 = \\lVert (f(x)-f(a)) + (g(x)-g(a))\\rVert_2 \\le \\lVert f(x)-f(a)\\rVert_2 + \\lVert g(x)-g(a)\\rVert_2 < \\varepsilon$.",
      "step": "1.4",
      "inputs": [
        "L1",
        "L3",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-1.5",
      "claim": "For $\\lambda f$: if $\\lambda = 0$ then $\\lambda f$ is constant and every $\\delta$ serves; otherwise $|\\lambda| > 0$, and a $\\delta$ for the tolerance $\\varepsilon/|\\lambda|$ at $f$ gives $\\lVert \\lambda f(x) - \\lambda f(a)\\rVert_2 = |\\lambda|\\,\\lVert f(x)-f(a)\\rVert_2 < \\varepsilon$.",
      "step": "1.5",
      "inputs": [
        "L1",
        "L3",
        "L6",
        "L8"
      ]
    },
    {
      "id": "step-1.6",
      "claim": "For $N \\circ f$: by [L2], $|N(f(x)) - N(f(a))| \\le N\\bigl(f(x)-f(a)\\bigr) \\le C\\sqrt{\\iota(m)}\\,\\lVert f(x)-f(a)\\rVert_2$; so a $\\delta$ for the tolerance $\\varepsilon/(C\\sqrt{\\iota(m)}+1)$ at $f$ serves for $N\\circ f$.",
      "step": "1.6",
      "inputs": [
        "L1",
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-1.7",
      "claim": "For $\\langle f,g\\rangle$: first take $\\delta_0 > 0$ with $\\lVert g(x)-g(a)\\rVert_2 < 1$ for $d_X(x,a) < \\delta_0$, so that $\\lVert g(x)\\rVert_2 \\le \\lVert g(x)-g(a)\\rVert_2 + \\lVert g(a)\\rVert_2 < B := \\lVert g(a)\\rVert_2 + 1$ there.",
      "step": "1.7",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Suppose $f$ is continuous at $a$ and fix $i<m$. Given $\\varepsilon > 0$, take $\\delta$ from the definition; for $x \\in A$ with $d_X(x,a) < \\delta$, step 1.1 gives $|f_i(x)-f_i(a)| \\le \\lVert f(x)-f(a)\\rVert_2 < \\varepsilon$. So $f_i$ is continuous at $a$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Conversely suppose every $f_i$ is continuous at $a$. Given $\\varepsilon > 0$, the real $\\varepsilon/\\iota(m)$ is positive; by step 1.3 choose $\\delta_i > 0$ for each $i<m$ with $|f_i(x)-f_i(a)| < \\varepsilon/\\iota(m)$ whenever $x \\in A$ and $d_X(x,a) < \\delta_i$, and put $\\delta := \\min\\{\\delta_0,\\dots,\\delta_{m-1}\\} > 0$.",
      "step": "2.2",
      "inputs": [
        "step 1.3",
        "L1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "By bilinearity, $\\langle f(x),g(x)\\rangle - \\langle f(a),g(a)\\rangle = \\langle f(x)-f(a),\\, g(x)\\rangle + \\langle f(a),\\, g(x)-g(a)\\rangle$, so Cauchy-Schwarz and step 1.7 give $\\bigl|\\langle f(x),g(x)\\rangle - \\langle f(a),g(a)\\rangle\\bigr| \\le B\\,\\lVert f(x)-f(a)\\rVert_2 + \\lVert f(a)\\rVert_2\\,\\lVert g(x)-g(a)\\rVert_2$ for every $x \\in A$ with $d_X(x,a) < \\delta_0$.",
      "step": "2.3",
      "inputs": [
        "step 1.7",
        "L4",
        "L8"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "For $x \\in A$ with $d_X(x,a) < \\delta$: each $|f_i(x)-f_i(a)| < \\varepsilon/\\iota(m)$, so by steps 1.1 and 1.2, $\\lVert f(x)-f(a)\\rVert_2 \\le \\sum_{i<m}|f_i(x)-f_i(a)| < \\sum_{i<m}\\varepsilon/\\iota(m) = \\varepsilon$. Hence $f$ is continuous at $a$, and clause 1 is proved.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 2.2",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "Clause 2 is the same two estimates with $f(a)$ replaced by $L$, $f_i(a)$ by $L_i$, and the condition $d_X(x,a) < \\delta$ by $0 < |x-c| < \\delta$: step 1.1 gives $|f_i(x)-L_i| \\le \\lVert f(x)-L\\rVert_2$ for the forward direction, and steps 1.1, 1.2 give $\\lVert f(x)-L\\rVert_2 \\le \\sum_{i<m}|f_i(x)-L_i| < \\varepsilon$ for the converse, with $\\delta$ the minimum of $m$ radii obtained as in step 2.2.",
      "step": "3.2",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "L1",
        "L5",
        "L6",
        "L7",
        "2.2"
      ]
    },
    {
      "id": "step-3.3",
      "claim": "Put $P := B + \\lVert f(a)\\rVert_2 + 1 > 0$ and take $\\delta \\le \\delta_0$ positive with both $\\lVert f(x)-f(a)\\rVert_2 < \\varepsilon/P$ and $\\lVert g(x)-g(a)\\rVert_2 < \\varepsilon/P$ for $d_X(x,a) < \\delta$; then step 2.3 bounds the difference by $(B + \\lVert f(a)\\rVert_2)\\varepsilon/P < \\varepsilon$, so $\\langle f,g\\rangle$ is continuous at $a$.",
      "step": "3.3",
      "inputs": [
        "step 1.7",
        "step 2.3",
        "L1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Steps 1.4, 1.5, 1.6 and 3.3 are clause 3, and with steps 3.1 and 3.2 all three clauses are proved.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 3.2",
        "step 1.4",
        "step 1.5",
        "step 1.6",
        "step 3.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The coordinate dimension is explicitly at least one; any interval occurring is nonempty under a<=b or a<b. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, with vector-valued functions, their components $f_i = \\pi_i \\circ f$, their limits and their continuity as in . 1. **Continuity is componentw"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.5: For $\\lambda f$: if $\\lambda = 0$ then $\\lambda f$ is constant and every $\\delta$ serves; otherwise $|\\lambda| > 0$, and a $\\delta$ for the tolerance $\\varepsilon/|\\lambda|$ at $f$ gives $\\lVert \\lambda f(x) - \\lambda f(a)\\rVert_2 = |\\lambda|\\,\\lVert f(x)-f(a)\\rVert_2 < \\varepsil"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. Let $m \\in \\mathbb{N}$ with $m \\ge 1$, with vector-valued functions, their components $f_i = \\pi_i \\circ f$, their limits and their continuity as in . 1. **Continuity is componentw"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.5: For $\\lambda f$: if $\\lambda = 0$ then $\\lambda f$ is constant and every $\\delta$ serves; otherwise $|\\lambda| > 0$, and a $\\delta$ for the tolerance $\\varepsilon/|\\lambda|$ at $f$ gives $\\lVert \\lambda f(x) - \\lambda f(a)\\rVert_2 = |\\lambda|\\,\\lVert f(x)-f(a)\\rVert_2 < \\varepsil"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-componentwise-limits-and-continuity: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.3: For each $i<m$ the set of positive reals $\\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\\delta_0,\\dots,\\delta_{m-1}$ simultaneously, with no choice p"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "steps 2.1 and 3.2: the Euclidean norm bound yields every component continuity/limit."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "steps 2.2, 3.1, and 3.2: finitely many component tolerances yield the vector continuity/limit."
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-convergence-and-completeness",
    "declared_target": "thm-componentwise-convergence-and-completeness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-continuity",
    "declared_target": "def-metric-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
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

## Full exact-current text of every cited or declared item (27)

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
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

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
````

### `def-metric-continuity`

````markdown
---
id: def-metric-continuity
kind: definition
title: "Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-metric-ball]
justified_by: []
aliases: [def-continuous-map-metric]
landmark: true
short: "$\\varepsilon$-$\\delta$ continuity"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

## Remarks

- **Nothing is claimed here beyond the definition.** That continuity is
  equivalent to preimages of open sets being open, to preimages of closed sets
  being closed, to sequential continuity, and to
  $f[\overline{A}] \subseteq \overline{f[A]}$, is the theorem
  [[thm-metric-continuity-characterisations]].
- **Continuity at a point is a local condition**: it depends only on the values
  of $f$ on any one ball around $a$, since the condition may always be tested
  with a smaller $\delta$.
- Every isometric embedding is continuous, with $\delta = \varepsilon$
  ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]), and
  so is every map that does not increase distances, such as $u \mapsto d(u,A)$
  ([[lem-distance-to-set-is-lipschitz]]).
````

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
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

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

````markdown
---
id: lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
kind: lemma
title: "The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-norms, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cauchy-schwarz-finite, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle, lem-of-abs-value, lem-of-square-monotone, thm-of-square-roots, lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## Facts & Assumptions

**Given:** A vector space $V$ over $\mathbb{R}$ with a norm $N$ ([[def-vector-space]], [[def-norm-and-normed-space]]); and, for clauses 2 to 4, a natural $n \ge 1$, the space $\mathbb{R}^{n}$, a norm $N$ on it, and vectors $x, y \in \mathbb{R}^{n}$.

[L1] The norm axioms: $N(v) = 0$ exactly when $v = 0_V$; $N(\lambda v) = |\lambda|N(v)$; $N(u+w) \le N(u)+N(w)$; and $N(v) \ge 0$ ([[def-norm-and-normed-space]]).

[L2] Finite sums in a vector space: $\sum_{j<0}u_j = 0_V$ and $\sum_{j<p+1}u_j = \bigl(\sum_{j<p}u_j\bigr) + u_p$ ([[def-linear-combination-and-span]]); and $(-1)v = -v$ ([[lem-vector-space-elementary-consequences]]).

[L3] The induction principle ([[thm-induction-principle]]).

[L4] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{k<n}\lambda = \iota(n)\lambda$, a sum of nonnegative terms is nonnegative, and every single term is at most such a sum.

[L5] The standard basis: $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$, $e$ is an ordered basis of $\mathbb{R}^{n}$, and every $x$ satisfies $x = \sum_{i<n}x_i e_i$ with coordinate list $i \mapsto x(i)$ ([[lem-standard-basis-of-f-n]] clauses 1 to 3, [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to the set and bounds it above.

[L7] The three norms ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]): $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, $\lVert x\rVert_2 = \sqrt{\sum_{k<n}x_k^{2}}$, $\lVert x\rVert_\infty = \max\{|x_k| : k<n\}$, and each induces the correspondingly named published metric.

[L8] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L9] Square roots and squaring ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$; for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$.

[L10] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, $|st| = |s||t|$, $|-t| = |t|$, and $|t|$ equals $t$ or $-t$.

[L11] The canonical natural: $\iota(n) > 0$ for $n \ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L12] Lipschitz maps and the regularity hierarchy ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): a map with $d_Y(f(x),f(y)) \le L\,d_X(x,y)$ and $L \ge 0$ is Lipschitz, hence uniformly continuous, hence continuous; $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The finite triangle inequality holds by induction on $p$: at $p = 0$ both sides are $0$, since $\sum_{j<0}u_j = 0_V$ and $N(0_V) = 0$ and the empty real sum is $0$; and if $N(\sum_{j<p}u_j) \le \sum_{j<p}N(u_j)$, then $N(\sum_{j<p+1}u_j) = N(\sum_{j<p}u_j + u_p) \le N(\sum_{j<p}u_j) + N(u_p) \le \sum_{j<p}N(u_j) + N(u_p) = \sum_{j<p+1}N(u_j)$. [L1, L2, L3, L4]

1.2 For $u, w \in V$: $N(u) = N((u-w)+w) \le N(u-w) + N(w)$, so $N(u)-N(w) \le N(u-w)$; and $N(w-u) = N((-1)(u-w)) = |-1|N(u-w) = N(u-w)$, so the same argument with $u$ and $w$ exchanged gives $N(w)-N(u) \le N(u-w)$. Since $|N(u)-N(w)|$ is one of $N(u)-N(w)$ and $N(w)-N(u)$, the reverse triangle inequality follows, completing clause 1. [L1, L2, L10]

1.3 For every $j<n$: $x_j^{2} \le \sum_{k<n}x_k^{2}$, since every single term of a sum of nonnegative terms is at most the sum; taking nonnegative square roots and using $|x_j|^{2} = x_j^{2}$ gives $|x_j| \le \lVert x\rVert_2$. [L4, L7, L9, L10]

1.4 For every $j<n$: $|x_j| \le \sum_{k<n}|x_k| = \lVert x\rVert_1$, again because a single term is at most the sum. [L4, L7, L10]

1.5 $\sum_{k<n}|x_k| \le \sum_{k<n}\lVert x\rVert_\infty = \iota(n)\lVert x\rVert_\infty$, since $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$ and a constant list sums to $\iota(n)$ times its value; so $\lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$. [L4, L6, L7, L11]

1.6 Instantiating [L8] at $a_k := |x_k|$ and $b_k := 1$ gives $\lVert x\rVert_1 = \bigl|\sum_{k<n}|x_k|\cdot 1\bigr| \le \sqrt{\sum_{k<n}|x_k|^{2}}\,\sqrt{\sum_{k<n}1} = \lVert x\rVert_2\sqrt{\iota(n)}$. [L4, L7, L8, L10]

1.7 The set $\{N(e_k) : k<n\}$ is a nonempty finite set of reals because $n \ge 1$, so $C = \max\{N(e_k) : k<n\}$ exists, belongs to the set, satisfies $N(e_k) \le C$ for every $k<n$, and is $\ge 0$ since every value of $N$ is. [L1, L5, L6]

1.8 $x = \sum_{i<n} x_i e_i$, the coordinate list of $x$ with respect to the ordered basis $e$ being $i \mapsto x(i) = x_i$. [L5]

2.1 $\lVert x\rVert_\infty$ is one of the numbers $|x_j|$ with $j<n$, so step 1.3 gives $\lVert x\rVert_\infty \le \lVert x\rVert_2$. [step 1.3, L6, L7]

2.2 $\sum_{k<n}x_k^{2} = \sum_{k<n}|x_k|\,|x_k| \le \sum_{k<n}|x_k|\,\lVert x\rVert_1 = \lVert x\rVert_1\sum_{k<n}|x_k| = \lVert x\rVert_1^{2}$, using step 1.4 termwise, monotonicity and scaling; taking nonnegative square roots gives $\lVert x\rVert_2 \le \lVert x\rVert_1$. [step 1.4, L4, L7, L9, L10]

2.3 Applying step 1.1 to the list $i \mapsto x_i e_i$ and then (N2): $N(x) = N\bigl(\sum_{i<n}x_ie_i\bigr) \le \sum_{i<n}N(x_ie_i) = \sum_{i<n}|x_i|\,N(e_i) \le \sum_{i<n}|x_i|\,C = C\lVert x\rVert_1$, the last inequality by monotonicity from step 1.7. This is clause 2. [step 1.1, step 1.7, step 1.8, L1, L4, L7]

3.1 Steps 2.1, 2.2, 1.5 and 1.6 are the four inequalities of clause 3; since $\iota(n) > 0$ and $\sqrt{\iota(n)} > 0$, they exhibit positive constants in both directions for each of the three pairs, so the three norms are pairwise equivalent. [step 1.5, step 1.6, step 2.1, step 2.2, L11, L9]

3.2 By step 1.2 applied on $\mathbb{R}^{n}$, then step 2.3, then step 1.6: $\bigl|N(x)-N(y)\bigr| \le N(x-y) \le C\lVert x-y\rVert_1 \le C\sqrt{\iota(n)}\;\lVert x-y\rVert_2$. [step 1.2, step 1.6, step 2.3, L4]

4.1 Since $\lVert x-y\rVert_2 = d_2(x,y)$ and $\bigl|N(x)-N(y)\bigr| = d_{\mathbb{R}}(N(x),N(y))$, step 3.2 says exactly that $N$ is Lipschitz with the nonnegative constant $C\sqrt{\iota(n)}$, hence uniformly continuous and continuous; this is clause 4, and with steps 1.2, 2.3 and 3.1 all four clauses are proved. [step 1.2, step 2.3, step 3.1, step 3.2, L7, L12] ∎

## Remarks

- **Clause 2 is the half of norm equivalence that costs no compactness.** It gives an upper bound for an arbitrary norm in terms of $\lVert\cdot\rVert_1$, and hence in terms of $\lVert\cdot\rVert_2$ by clause 3, by a computation with the standard basis alone. The matching **lower** bound is where compactness of the unit sphere enters, and that is [[thm-all-norms-on-rn-are-equivalent]].

- **The constants of clause 3 are best possible, and the companion page shows it.** Nothing here claims sharpness; the attaining vectors are exhibited on the companion page for $\mathbb{R}^{2}$.

- **Clause 1 is stated for a general norm on purpose.** It is used below for the Euclidean norm on $\mathbb{R}^{n}$ inside [[thm-steinitz-polygonal-confinement]] and for an arbitrary $N$ in clause 2, and it is the only statement on this page that needs no hypothesis on the dimension at all.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
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

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-p-norms-are-norms-and-induce-the-published-metrics`

````markdown
---
id: lem-p-norms-are-norms-and-induce-the-published-metrics
kind: lemma
title: "Each $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^n$, and the induced metrics are exactly $d_1$, $d_2$ and $d_\\infty$ of the published metric-spaces page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, def-norm-and-normed-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-minkowski-finite, lem-rational-power-laws, lem-rational-power-monotone, lem-finite-sum-laws, def-finite-sum, lem-metrics-on-rn, def-metric-space, def-metric-topology, thm-euclidean-space-complete, thm-heine-borel-rn, thm-metric-compactness-equivalences, lem-finite-set-has-max, def-max-min, def-rational-power, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, lem-of-sign-rules, def-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $p \in \mathbb{Q}$ with $p \ge 1$, with the norms
of [[def-p-norms-on-rn]]. Then:

1. $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]).
2. For $n \ge 1$, $\lVert\cdot\rVert_\infty$ is a norm on $\mathbb{R}^{n}$.
3. **The dictionary.** For $n \ge 1$ and all $x, y \in \mathbb{R}^{n}$,
   $$\lVert x-y\rVert_1 = d_1(x,y), \qquad \lVert x-y\rVert_2 = d_2(x,y), \qquad \lVert x-y\rVert_\infty = d_\infty(x,y),$$
   where $d_1$, $d_2$, $d_\infty$ are the metrics of the published
   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms
   ([[def-norm-and-normed-space]]) **is** the correspondingly named published
   metric, not merely one equivalent to it.

**Consequence, used repeatedly below and stated once here.** By clause 3 at
$p = 2$, the metric space $(\mathbb{R}^{n}, d_2)$ of the published metric-spaces
page and the metric space underlying the normed space
$(\mathbb{R}^{n}, \lVert\cdot\rVert_2)$ of this page are the same object. Hence
completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel
([[thm-heine-borel-rn]] clause 2) and the compactness equivalences
([[thm-metric-compactness-equivalences]]) are statements about this page's normed
space, **with their hypothesis $n \ge 1$ inherited unchanged and not weakened**.
Nothing below cites any of those three theorems for $n = 0$.

**Why this lemma exists.** Without it the library would hold a norm-induced
metric on $\mathbb{R}^{n}$ and a separately published metric on the same set with
no recorded relation, and every later citation would have to guess which was
meant. The proof of clause 3 is a comparison of two written expressions; the
value is that the comparison is made and recorded.

## Facts & Assumptions

**Given:** A natural number $n$, a rational $p \ge 1$, vectors $x, y \in \mathbb{R}^{n}$ and a real $\lambda$; write $S(x) := \sum_{k<n}|x_k|^{p}$, so that $\lVert x\rVert_p = S(x)^{1/p}$ ([[def-p-norms-on-rn]], [[def-finite-sum]]).

[A1] For clauses 2 and 3, $n \ge 1$, so that $\{|x_k| : k<n\}$ is a nonempty finite set of reals ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[L1] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): for $a, b \ge 0$ and rationals $r, s > 0$ one has $a^{r} \ge 0$, $(ab)^{r} = a^{r}b^{r}$, $0^{r} = 0$, and $a^{r} > 0$ when $a > 0$; and for $a > 0$, $(a^{r})^{s} = a^{rs}$ and $a^{1} = a$.

[L2] Monotonicity in the base ([[lem-rational-power-monotone]] clause 2): for a rational $r > 0$ and reals $0 \le a < b$ one has $a^{r} < b^{r}$; hence $a \le b$ implies $a^{r} \le b^{r}$, the case $a = b$ being trivial, and $a^{r} = 0$ only for $a = 0$.

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, each single term is at most such a sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L4] Minkowski's inequality for finite sums at rational $p \ge 1$ ([[thm-minkowski-finite]]): $\bigl(\sum_{k<n}|a_k+b_k|^{p}\bigr)^{1/p} \le \bigl(\sum_{k<n}|a_k|^{p}\bigr)^{1/p} + \bigl(\sum_{k<n}|b_k|^{p}\bigr)^{1/p}$.

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s|\,|t|$; $|s+t| \le |s|+|t|$; and $|t|^{2} = t^{2}$.

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, the maximum belongs to the set and bounds it above, and a set with an upper bound belonging to it has that element as its maximum.

[L7] Order arithmetic: multiplying an inequality by a nonnegative real preserves it ([[lem-of-sign-rules]] in its strict form, together with the case of equality settled by totality), and $\le$ is transitive ([[def-ordered-field]]).

[L8] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_2$ agrees with the Euclidean norm of [[def-euclidean-inner-product]], and is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]; square roots are the rational power at exponent $1/2$ ([[thm-of-square-roots]], [[def-p-norms-on-rn]]).

[L9] The published metrics on $\mathbb{R}^{n}$ for $n \ge 1$ are $d_1(x,y) = \sum_{k<n}|x_k-y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$, and each is a metric ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Every term $|x_k|^{p}$ is nonnegative, so $S(x) \ge 0$ and $\lVert x\rVert_p = S(x)^{1/p}$ is defined and nonnegative. [L1, L3]

1.2 $S(x) = 0$ holds exactly when $|x_k|^{p} = 0$ for every $k<n$, a vanishing sum of nonnegative terms having every term $0$; and $|x_k|^{p} = 0$ exactly when $|x_k| = 0$, that is exactly when $x_k = 0$. [L1, L2, L3, L5]

1.3 For every $k<n$, $|(\lambda x)_k|^{p} = \bigl(|\lambda|\,|x_k|\bigr)^{p} = |\lambda|^{p}|x_k|^{p}$, so $S(\lambda x) = |\lambda|^{p}S(x)$ by scaling of finite sums. [L1, L3, L5]

1.4 Instantiating [L4] at $a_k := x_k$ and $b_k := y_k$, and using $(x+y)_k = x_k+y_k$, gives $\lVert x+y\rVert_p \le \lVert x\rVert_p + \lVert y\rVert_p$, which is axiom (N3) for $\lVert\cdot\rVert_p$. [L4, L8]

1.5 Under [A1] the set $\{|x_k| : k<n\}$ is nonempty and finite, so $\lVert x\rVert_\infty$ exists, is one of the $|x_k|$, and satisfies $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$; in particular $\lVert x\rVert_\infty \ge 0$. [A1, L5, L6]

1.6 Under [A1], $\lVert x-y\rVert_1 = \sum_{k<n}|x_k-y_k|$ by the case $p=1$ of the definition, and that is the written expression for $d_1(x,y)$. [L1, L9]

1.7 Under [A1], $\lVert x-y\rVert_2 = \bigl(\sum_{k<n}|x_k-y_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$, using $|t|^{2} = t^{2}$ and the identification of the exponent $1/2$ with the nonnegative square root, and that is the written expression for $d_2(x,y)$. [L5, L8, L9]

1.8 Under [A1], $\lVert x-y\rVert_\infty = \max\{|x_k-y_k| : k<n\}$ by definition, and that is the written expression for $d_\infty(x,y)$. [L9]

2.1 $\lVert x\rVert_p = 0$ holds exactly when $S(x) = 0$, since $S(x) > 0$ would give $S(x)^{1/p} > 0$ and $0^{1/p} = 0$. [step 1.1, L1, L2]

2.2 Under [A1]: $\lVert x\rVert_\infty = 0$ forces $|x_k| \le 0$ and $|x_k| \ge 0$ for every $k<n$, hence $x = 0$; and $\lVert 0\rVert_\infty = 0$. This is (N1) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L8]

2.3 Under [A1]: for every $k<n$, $|(\lambda x)_k| = |\lambda|\,|x_k| \le |\lambda|\,\lVert x\rVert_\infty$, and choosing $j<n$ with $|x_j| = \lVert x\rVert_\infty$ gives $|(\lambda x)_j| = |\lambda|\,\lVert x\rVert_\infty$; so $|\lambda|\lVert x\rVert_\infty$ belongs to the set and bounds it above, whence $\lVert \lambda x\rVert_\infty = |\lambda|\lVert x\rVert_\infty$. This is (N2) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

2.4 Under [A1]: for every $k<n$, $|(x+y)_k| = |x_k+y_k| \le |x_k| + |y_k| \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$; choosing $j<n$ with $|(x+y)_j| = \lVert x+y\rVert_\infty$ gives $\lVert x+y\rVert_\infty \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$, which is (N3) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

3.1 By steps 2.1 and 1.2, $\lVert x\rVert_p = 0$ exactly when $x_k = 0$ for every $k<n$, that is exactly when $x = 0$; this is axiom (N1) for $\lVert\cdot\rVert_p$. [step 2.1, step 1.2, L8]

3.2 Steps 2.2, 2.3 and 2.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_\infty$ under [A1], so clause 2 holds. [step 2.2, step 2.3, step 2.4, A1, L8]

4.1 If $\lambda = 0$ then $\lambda x = 0$ and both sides of (N2) are $0$ by step 3.1; if $\lambda \ne 0$ then $|\lambda| > 0$, and step 1.3 with the power laws gives $\lVert \lambda x\rVert_p = \bigl(|\lambda|^{p}S(x)\bigr)^{1/p} = \bigl(|\lambda|^{p}\bigr)^{1/p}S(x)^{1/p} = |\lambda|^{p\cdot(1/p)}\lVert x\rVert_p = |\lambda|\,\lVert x\rVert_p$; this is axiom (N2). [step 1.3, step 3.1, L1, L5, L8]

5.1 Steps 3.1, 4.1 and 1.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_p$, so clause 1 holds. [step 1.4, step 3.1, step 4.1, L8]

6.1 Steps 1.6, 1.7 and 1.8 give clause 3, and with steps 5.1 and 3.2 all three clauses are proved; in particular the metric induced by $\lVert\cdot\rVert_2$ on $\mathbb{R}^{n}$ for $n \ge 1$ is the published $d_2$, which is the consequence recorded in the Statement. [step 5.1, step 3.2, step 1.6, step 1.7, step 1.8, L9] ∎

## Remarks

- **What the consequence does and does not license.** Because the two metric spaces are literally the same, a published theorem about $(\mathbb{R}^{n}, d_2)$ may be quoted here verbatim. It may **not** be quoted with a weaker hypothesis: [[thm-euclidean-space-complete]], [[thm-heine-borel-rn]] and [[lem-metrics-on-rn]] are all stated for $n \ge 1$ only, because $d_\infty$ is a maximum over an empty index set at $n = 0$, and every item on this page that uses one of them carries $n \ge 1$ in its own statement.

- **Clause 1 holds at $n = 0$ and clause 2 does not apply there.** At $n = 0$ every $\lVert\cdot\rVert_p$ is the zero function on the one-element space $\mathbb{R}^{0}$, which is the unique norm on the zero space ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_\infty$ is not defined there at all.

- **The route to (N3) differs between the two families, and that is not an accident.** For $\lVert\cdot\rVert_p$ the triangle inequality is Minkowski's inequality, a genuine theorem about rational powers; for $\lVert\cdot\rVert_\infty$ it is the elementary argument of step 2.4, that a maximum of sums is at most the sum of the maxima. The second argument is the one that needs a nonempty index set.
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

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `lem-standard-basis-of-f-n`

````markdown
---
id: lem-standard-basis-of-f-n
kind: lemma
title: "The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-dimension, def-linear-independence, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-function-space, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection, def-equinumerous, def-countable]
justified_by: []
aliases: [lem-standard-basis, def-standard-unit-vectors]
landmark: true
short: "$\\dim_F F^{n} = n$"
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
    - title: "Standard basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Standard_basis"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n$, the vector space $F^{n}$ with pointwise operations, and the vectors $e_i$ for $i < n$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(j) = x(j)+y(j)$, $(\lambda x)(j) = \lambda\,x(j)$ and zero the constant function at $0_F$; two elements are equal exactly when they agree at every point; and $F^{0}$ has exactly one element, the empty function, which is $0_{F^{0}}$ ([[def-function-space]], [[def-vector-space]]).

[L2] Finite sums: $\sum_{k<0}u_k$ is the zero vector and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$, in any vector space ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] $F$ is a vector space over itself, with the field addition and multiplication ([[lem-restriction-of-scalars]], claim 1), so the finite sums of $\mathbb{N}$-indexed lists of scalars are available in $(F,+,0_F)$ and satisfy (F1) and (F3); in particular a list of scalars vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L4] In $F$: $\lambda 1_F = \lambda$ and $\lambda 0_F = 0_F$ for every $\lambda \in F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L5] A list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective and its image is a basis with $v[n] \approx n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]], [[def-injection-surjection-bijection]]).

[L6] $\dim_F V$ is the unique $p \in \mathbb{N}$ with a basis $B \approx p$, defined when $V$ has a finite basis ([[def-dimension]], [[def-countable]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, that a finite sum in $F^{X}$ is computed pointwise: for every $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$, $\bigl(\sum_{k<p}u_k\bigr)(j) = \sum_{k<p}u_k(j)$, the right-hand sum being taken in $(F,+,0_F)$. By induction on $p$: at $p = 0$ the left side is the value at $j$ of the constant function $0_F$ and the right side is the empty sum $0_F$; and if it holds at $p$, then $\bigl(\sum_{k<\sigma(p)}u_k\bigr)(j) = \bigl(\sum_{k<p}u_k + u_p\bigr)(j) = \bigl(\sum_{k<p}u_k\bigr)(j) + u_p(j) = \sum_{k<p}u_k(j) + u_p(j) = \sum_{k<\sigma(p)}u_k(j)$, using pointwise addition and the recursion. [L1, L2, L3, L7]

2.1 Evaluating a combination of the $e_i$. Let $\lambda : n \to F$ and $j < n$. By step 1.1 and pointwise scalar multiplication, $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \sum_{i<n}(\lambda_i e_i)(j) = \sum_{i<n}\lambda_i\, e_i(j)$. The list of scalars $i \mapsto \lambda_i\,e_i(j)$ takes the value $\lambda_i 0_F = 0_F$ at every $i \ne j$ and the value $\lambda_j 1_F = \lambda_j$ at $i = j$, so it vanishes off the single index $j$ and therefore sums to $\lambda_j$. Hence $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $j < n$. [step 1.1, L1, L3, L4]

3.1 Existence and uniqueness of coordinates. Given $x \in F^{n}$, put $\lambda_i := x(i)$; by step 2.1 the vectors $\sum_{i<n}\lambda_i e_i$ and $x$ agree at every $j < n$, hence are equal. And if $\sum_{i<n}\lambda_i e_i = \sum_{i<n}\mu_i e_i$, then evaluating both sides at $j$ and using step 2.1 gives $\lambda_j = \mu_j$ for every $j < n$. So every $x \in F^{n}$ is $\sum_{i<n}\lambda_i e_i$ for exactly one $\lambda : n \to F$. [step 2.1, L1]

4.1 Claims 2 and 3. Step 2.1 is claim 3, and by the coordinate characterisation of an ordered basis, step 3.1 says exactly that $e$ is an ordered basis of $F^{n}$; hence $e$ is injective, $e[n]$ is a basis of $F^{n}$, and $e[n] \approx n$. [step 2.1, step 3.1, L5]

5.1 Claims 4 and 5. By step 4.1 the space $F^{n}$ has a basis with $n$ elements, so it is finite-dimensional and $\dim_F F^{n} = n$. At $n = 0$ the space $F^{0}$ has exactly one element, the empty function, which is its zero vector, so $F^{0}$ is the zero space; the list $e$ is then the empty list, its image is $\varnothing$, and $\dim_F F^{0} = 0$. [step 4.1, L1, L6] ∎

## Remarks

- **The indices start at $0$ because a natural number is the set of its predecessors.** $F^{n}$ is the function space $F^{X}$ at $X = n = \{0,\dots,n-1\}$ ([[def-function-space]], [[lem-nat-order-is-membership]]), so an element of $F^{n}$ is a function on $\{0,\dots,n-1\}$ and there is no $e_n$. Reading the standard basis off a $1$-indexed source would put a vector outside the space at one end and lose one at the other.

- **Step 1.1 is not a triviality to be skipped.** That a finite sum of functions is the pointwise finite sum is a statement about the recursion defining [[def-monoid-finite-product]] in two different monoids, and it is proved by induction. Every evaluation argument on this page and on the companion page rests on it.

- **This is the concrete counterweight to [[cor-every-vector-space-has-a-basis]].** Here a basis is written down and no choice principle is used anywhere; there a basis is produced by Zorn's lemma and none is exhibited. The companion page carries both extremes for infinite-dimensional spaces as well: an explicit infinite basis for the eventually zero families, and a basis of $\mathbb{R}$ over $\mathbb{Q}$ that no argument exhibits.
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

### `thm-algebra-of-function-limits`

````markdown
---
id: thm-algebra-of-function-limits
kind: theorem
title: "Sums, scalar multiples, products and quotients of function limits, the quotient under the hypothesis that the denominator limit is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, lem-limit-is-local, lem-limit-implies-local-boundedness, lem-sign-preservation-near-a-limit, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field, def-field]
justified_by: []
aliases: [thm-limit-laws-for-functions]
landmark: true
short: "algebra of function limits"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ and let $\alpha \in
\mathbb{R}$. Suppose the limits of $f$ and of $g$ at $c$ exist, and write
$L := \lim_{x \to c} f(x)$ and $M := \lim_{x \to c} g(x)$
([[def-function-limit]]). Then:

1. the limit of $f + g$ at $c$ exists, and
   $$\lim_{x \to c} (f + g)(x) \;=\; \lim_{x \to c} f(x) + \lim_{x \to c} g(x) \;=\; L + M ;$$
2. the limit of $\alpha f$ at $c$ exists, and
   $$\lim_{x \to c} (\alpha f)(x) \;=\; \alpha \lim_{x \to c} f(x) \;=\; \alpha L ;$$
3. the limit of $fg$ at $c$ exists, and
   $$\lim_{x \to c} (fg)(x) \;=\; \Bigl(\lim_{x \to c} f(x)\Bigr)\Bigl(\lim_{x \to c} g(x)\Bigr) \;=\; LM ;$$
4. if $M \ne 0$, then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the point
   $c$ is a limit point of $A_0$, the quotient $f/g$ is defined on $A_0$ by
   $(f/g)(x) = f(x) / g(x)$, the limit of $(f/g)|_{A_0}$ at $c$ exists, and
   $$\lim_{x \to c} (f/g)|_{A_0}(x) \;=\; \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} \;=\; \frac{L}{M} .$$

Each equation asserts two things at once: that the limit on the left exists, and
that it has the stated value. Both are proved. The symbols denote by
[[lem-function-limit-unique]].

**Everything below is proved directly from $\varepsilon$ and $\delta$.** No
sequence is constructed and no choice principle is used, so all four claims are
theorems of ZF. Passing through
[[thm-sequential-criterion-for-function-limits]] instead would import the
countable choice spent in that theorem's converse direction, for no gain; see
[[rem-heine-criterion-choice-cost]].

**Why the quotient is stated on $A_0$.** The function $f/g$ is simply not defined
where $g$ vanishes, and $g$ may well vanish at points of $A$ arbitrarily far from
$c$; restricting to $A_0$ is therefore forced. That this restriction still has
$c$ as a limit point, so that the limit there means anything at all, is the last
claim of [[lem-sign-preservation-near-a-limit]]. The sequential analogue
[[thm-algebra-of-limits]] needs the corresponding hypothesis in the form "the
denominator sequence is nonzero at every index".

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, and reals $L, M$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$; for claim 4 also $M \ne 0$ and $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|uv| = |u|\,|v|$; and $|{-u}| = |u|$ ([[lem-of-abs-value]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Order and field arithmetic in $\mathbb{R}$: adding two strict inequalities ([[lem-of-add-order]]); for $t > 0$, $u < v$ is equivalent to $ut < vt$, and $0 \le u \le v$ with $0 \le s \le t$ gives $us \le vt$ ([[lem-of-sign-rules]]); positive elements have positive inverses and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$ and $t/2 > 0$ for $t > 0$; inverses and the field identities ([[def-field]]); trichotomy and totality, so of finitely many positive reals the smallest is positive ([[def-ordered-field]]).

[L5] Local boundedness: there are a real $\delta_0 > 0$ and a real $K \ge 0$ with $|f(x)| \le K$ for every $x \in A$ satisfying $0 < |x - c| < \delta_0$ ([[lem-limit-implies-local-boundedness]]).

[L6] Sign preservation: if $M \ne 0$ there is a real $\delta_s > 0$ with $|g(x)| > |M|/2 > 0$ for every $x \in A$ satisfying $0 < |x - c| < \delta_s$, and $c$ is a limit point of $A_0$ ([[lem-sign-preservation-near-a-limit]]).

[L7] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L8] Neighbourhoods ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 **Sum.** Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ with $|f(x) - L| < \varepsilon/2$ for every $x \in A$ satisfying $0 < |x - c| < \delta_1$ and $|g(x) - M| < \varepsilon/2$ for every $x \in A$ satisfying $0 < |x - c| < \delta_2$, and let $\delta$ be the smaller of the two, so $\delta > 0$. For $x \in A$ with $0 < |x - c| < \delta$ we get $|(f+g)(x) - (L+M)| = |(f(x) - L) + (g(x) - M)| \le |f(x) - L| + |g(x) - M| < \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $f + g$ at $c$ exists and equals $L + M$: claim 1. [L1, L2, L3, L4, choose]

1.2 **Scalar multiple.** If $\alpha = 0$ then $\alpha f$ is the constant function $0$ and $\alpha L = 0$, so $|(\alpha f)(x) - \alpha L| = 0 < \varepsilon$ for every $x$ and every $\varepsilon > 0$, any $\delta$ serving. If $\alpha \ne 0$ then $|\alpha| > 0$; given a real $\varepsilon > 0$, [L1] supplies $\delta > 0$ with $|f(x) - L| < \varepsilon/|\alpha|$ on $A \cap N^{*}_{\delta}(c)$, and there $|(\alpha f)(x) - \alpha L| = |\alpha|\,|f(x) - L| < \varepsilon$. So the limit of $\alpha f$ at $c$ exists and equals $\alpha L$: claim 2. [L1, L2, L4, L8, choose]

1.3 **A working bound for $f$ near $c$.** By [L5] fix a real $\delta_0 > 0$ and a real $K \ge 0$ with $|f(x)| \le K$ for every $x \in A$ satisfying $0 < |x - c| < \delta_0$, and put $K' := K + 1$, so $K' > 0$ and $|f(x)| \le K'$ for all those $x$. [L4, L5, choose]

1.4 **The denominator near $c$.** Assume $M \ne 0$. By [L6] fix a real $\delta_s > 0$ with $|g(x)| > |M|/2 > 0$ for every $x \in A$ satisfying $0 < |x - c| < \delta_s$; every such $x$ has $g(x) \ne 0$, hence lies in $A_0$, and $c$ is a limit point of $A_0$. [L2, L4, L6]

2.1 **Product.** Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ with $|g(x) - M| < \varepsilon/(2K')$ on $A \cap N^{*}_{\delta_1}(c)$ and $|f(x) - L| < \varepsilon / \bigl(2(|M| + 1)\bigr)$ on $A \cap N^{*}_{\delta_2}(c)$, and let $\delta$ be the smallest of $\delta_0, \delta_1, \delta_2$, which is positive. For $x \in A$ with $0 < |x - c| < \delta$, $|f(x)g(x) - LM| = |f(x)(g(x) - M) + M(f(x) - L)| \le |f(x)|\,|g(x) - M| + |M|\,|f(x) - L| \le K'\,|g(x) - M| + (|M|+1)\,|f(x) - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $fg$ at $c$ exists and equals $LM$: claim 3. [step 1.3, L1, L2, L3, L4, L8, choose]

2.2 **Reciprocal.** Assume $M \ne 0$ and let $\varepsilon > 0$ be an arbitrary real. By [L1] fix a real $\delta_3 > 0$ with $|g(x) - M| < \varepsilon |M|^2 / 2$ on $A \cap N^{*}_{\delta_3}(c)$, and let $\delta$ be the smaller of $\delta_s$ and $\delta_3$. For $x \in A_0$ with $0 < |x - c| < \delta$ we have $|g(x)| > |M|/2 > 0$, hence $|g(x)|\,|M| > |M|^2/2 > 0$ and so $1/(|g(x)|\,|M|) < 2/|M|^2$; therefore $\bigl| 1/g(x) - 1/M \bigr| = |M - g(x)| \big/ \bigl(|g(x)|\,|M|\bigr) < (\varepsilon |M|^2/2)\cdot(2/|M|^2) = \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $(1/g)|_{A_0}$ at $c$ exists and equals $1/M$. [step 1.4, L1, L2, L4, L8, choose]

2.3 **The numerator on the smaller domain.** Assume $M \ne 0$. Since $A_0 \subseteq A$ and $c$ is a limit point of $A_0$ by step 1.4, [L7] gives that the limit of $f|_{A_0}$ at $c$ exists and equals $L$. [step 1.4, L7]

3.1 **Quotient.** Assume $M \ne 0$. On the domain $A_0$, which has $c$ as a limit point, the two functions $f|_{A_0}$ and $(1/g)|_{A_0}$ have limits $L$ and $1/M$ at $c$ by steps 2.3 and 2.2, and their product is $(f/g)|_{A_0}$ by the field identities; so claim 3, applied on the domain $A_0$, gives that the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L \cdot (1/M) = L/M$. [step 2.1, step 2.2, step 2.3, L2, L4]

4.1 Claims 1 to 4 are proved, each directly from the $\varepsilon$-$\delta$ definition and none of them through a sequence. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **The product estimate in one line.** The identity $fg - LM = f\,(g - M) + M\,(f - L)$ turns the problem into two products, one with a factor that is merely bounded near $c$ (that is $f$, and [[lem-limit-implies-local-boundedness]] is what bounds it) and one with a constant factor. The two constants $K'$ and $|M| + 1$ are used in place of $K$ and $|M|$ only so that they are strictly positive and may be divided by; that is the sole reason for adding $1$.

- **The reciprocal estimate in one line.** The identity $1/g - 1/M = (M - g)/(gM)$ turns the problem into a numerator that is small and a denominator that must be kept away from $0$; the lower bound $|g| > |M|/2$ from [[lem-sign-preservation-near-a-limit]] does exactly that, and gives the working factor $2/|M|^2$.

- **Nothing here extends to $\pm\infty$.** The statement is about a finite limit point $c$ and finite values $L, M$; [[def-limits-at-infinity]] introduces limits at and to infinity, but no algebra of such limits is proved in this library, and none may be assumed. The companion page's limit at $+\infty$ is computed by a direct estimate for precisely that reason.

- **The sequential analogue** is [[thm-algebra-of-limits]]. Neither implies the other for free: this theorem is about a function on a subset of $\mathbb{R}$ and is proved from $\varepsilon$ and $\delta$; that one is about sequences.
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

### `thm-componentwise-convergence-and-completeness`

````markdown
---
id: thm-componentwise-convergence-and-completeness
kind: theorem
title: "For $n \\ge 1$ a sequence in $\\mathbb{R}^n$ converges iff each coordinate sequence converges, is Cauchy iff each coordinate sequence is Cauchy, and $\\mathbb{R}^n$ is complete in every norm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, thm-euclidean-space-complete, def-complete-metric-space, def-metric-convergence, def-cauchy-in-metric, lem-metric-limits-unique, lem-metric-convergent-implies-cauchy, lem-metrics-on-rn, lem-standard-basis-of-f-n, def-sequence, def-real-limit, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-real-line-is-a-metric-space, def-norm-and-normed-space, thm-well-ordering-principle]
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the Euclidean
metric $d_2$ of [[lem-metrics-on-rn]], and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write
$\bigl(x^{(j)}_k\bigr)_{j\in\mathbb{N}}$ for the $k$-th **coordinate sequence**,
a sequence of reals ([[def-sequence]]). Then:

1. **Convergence is componentwise.** For $x \in \mathbb{R}^{n}$,
   $x^{(j)} \to x$ in $(\mathbb{R}^{n}, d_2)$ if and only if
   $x^{(j)}_k \to x_k$ in $\mathbb{R}$ for every $k<n$
   ([[def-real-limit]]).
2. **Cauchyness is componentwise.** $\bigl(x^{(j)}\bigr)$ is Cauchy in
   $(\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every
   coordinate sequence is Cauchy in $\mathbb{R}$.
3. **Completeness in every norm.** For every norm $N$ on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]) the metric space $(\mathbb{R}^{n}, d_N)$ is
   complete ([[def-complete-metric-space]]).

**Clause 3 is obtained by citation and is not reproved here.**
[[thm-euclidean-space-complete]] clause 2 states that $(\mathbb{R}^{n},d_2)$ is
complete, **for $n \ge 1$ only**, and this theorem carries that hypothesis
forward without weakening it; what is added is the passage from $d_2$ to an
arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary
of [[def-equivalent-norms]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the metric $d_2$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$; a point $x \in \mathbb{R}^{n}$; a norm $N$ on $\mathbb{R}^{n}$; and a rational $\varepsilon > 0$.

[L1] The comparison chain for $n \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3): $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \lVert y\rVert_1 \le \iota(n)\lVert y\rVert_\infty$ for every $y \in \mathbb{R}^{n}$, where $\lVert y\rVert_\infty = \max\{|y_k| : k<n\}$ ([[def-p-norms-on-rn]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L2] The dictionary $d_2(u,v) = \lVert u-v\rVert_2$, and $(u-v)_k = u_k - v_k$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-standard-basis-of-f-n]]).

[L3] Convergence and Cauchyness in a metric space, and their agreement on $\mathbb{R}$ with the real notions ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-real-limit]], [[lem-real-line-is-a-metric-space]]); rational and real $\varepsilon$ may be used interchangeably in both.

[L4] $(\mathbb{R}^{n}, d_2)$ is complete for $n \ge 1$ ([[thm-euclidean-space-complete]] clause 2, [[def-complete-metric-space]]).

[L5] All norms on $\mathbb{R}^{n}$ are equivalent for $n \ge 1$ ([[thm-all-norms-on-rn-are-equivalent]]), and equivalent norms have the same convergent sequences with the same limits and the same Cauchy sequences ([[def-equivalent-norms]]).

[L6] Limits in a metric space are unique, and every convergent sequence is Cauchy ([[lem-metric-limits-unique]], [[lem-metric-convergent-implies-cauchy]]).

[L7] $\iota(n) > 0$ for $n \ge 1$, and $u > 0$ gives $u^{-1} > 0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L8] A nonempty finite set of naturals has a greatest element, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{n}$ and every $k<n$: $|y_k| \le \lVert y\rVert_\infty \le \lVert y\rVert_2$, the first inequality because $\lVert y\rVert_\infty$ bounds the set it is the maximum of. [L1]

1.2 For every $y \in \mathbb{R}^{n}$: $\lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$, and $\lVert y\rVert_\infty = |y_{k_0}|$ for some $k_0 < n$. [L1]

1.3 Conversely suppose $x^{(j)}_k \to x_k$ for every $k<n$. Given a rational $\varepsilon > 0$, the real $\varepsilon/\iota(n)$ is positive, so for each $k<n$ the set of indices $K$ such that $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$ for all $j \ge K$ is a nonempty set of naturals; let $K_k$ be its least element, a determination rather than a selection, and put $K := \max\{K_0,\dots,K_{n-1}\}$, a maximum of a nonempty finite set of naturals. [L3, L7, L8]

1.4 $(\mathbb{R}^{n},d_2)$ is complete, by citation and for $n \ge 1$ only. [L4]

1.5 Let $N$ be any norm on $\mathbb{R}^{n}$. By [L5], $N$ and $\lVert\cdot\rVert_2$ are equivalent, so $d_N$ and $d_2$ have the same Cauchy sequences and the same convergent sequences with the same limits. [L5]

2.1 For all $u,v \in \mathbb{R}^{n}$ and $k<n$: $|u_k - v_k| \le d_2(u,v) \le \iota(n)\max\{|u_k-v_k| : k<n\}$, by steps 1.1 and 1.2 applied to $y := u - v$. [step 1.1, step 1.2, L2]

2.2 Hence a Cauchy sequence in $(\mathbb{R}^{n},d_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$, converges there by step 1.4, and therefore converges in $(\mathbb{R}^{n},d_N)$ to the same point; so $(\mathbb{R}^{n},d_N)$ is complete, which is clause 3. [step 1.4, step 1.5, L5, L6]

3.1 Suppose $x^{(j)} \to x$ in $(\mathbb{R}^{n},d_2)$ and fix $k<n$. Given a rational $\varepsilon > 0$, take $K$ with $d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$; then $|x^{(j)}_k - x_k| \le d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$, so $x^{(j)}_k \to x_k$. [step 2.1, L3]

3.2 For $j \ge K$ and every $k<n$ we have $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$; the maximum of these $n$ numbers is one of them, so $\max\{|x^{(j)}_k - x_k| : k<n\} < \varepsilon/\iota(n)$ and hence $d_2(x^{(j)},x) < \iota(n)\cdot\varepsilon/\iota(n) = \varepsilon$ by step 2.1. Therefore $x^{(j)} \to x$. [step 2.1, step 1.3, L1, L7]

3.3 The same two estimates prove clause 2 with $x$ replaced by $x^{(l)}$ throughout: if $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$ then $|x^{(j)}_k - x^{(l)}_k| < \varepsilon$ for $j,l \ge K$ and every $k<n$; and conversely, choosing for each $k<n$ the least $K_k$ beyond which $|x^{(j)}_k - x^{(l)}_k| < \varepsilon/\iota(n)$ for $j,l \ge K_k$ and taking $K := \max\{K_0,\dots,K_{n-1}\}$ gives $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$. [step 2.1, L3, L7, L8]

4.1 Steps 3.1 and 3.2 are the two directions of clause 1. [step 3.1, step 3.2]

5.1 Clauses 1, 2 and 3 are steps 4.1, 3.3 and 2.2. [step 4.1, step 3.3, step 2.2] ∎

## Remarks

- **No choice principle is used.** The only place a family of indices is produced is steps 1.3 and 3.3, where finitely many indices are obtained, each as the **least** element of a nonempty set of naturals ([[thm-well-ordering-principle]]). A least element is determined by the set, not selected from it.

- **What happens at $n = 0$, stated separately because the theorem does not cover it.** $\mathbb{R}^{0}$ has exactly one element, the empty function, and is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); by [[def-norm-and-normed-space]] it carries exactly one norm, the zero function, whose induced metric is constantly $0$. Every sequence in a one-point metric space is Cauchy and converges to that point, so $(\mathbb{R}^{0}, d_N)$ is complete. **That statement is proved here from scratch in this remark and is not obtained from [[thm-euclidean-space-complete]]**, which is stated for $n \ge 1$ only because $d_\infty$ is a maximum over an empty index set at $n = 0$. Clauses 1 and 2 are vacuous at $n = 0$, there being no index $k<0$.

- **Clause 1 is the reason the rest of this page can work coordinatewise.** Every later item that reduces a statement about $\mathbb{R}^{n}$ or $\mathbb{R}^{m}$ to $n$ or $m$ statements about $\mathbb{R}$ passes through it, and each such item therefore carries the hypothesis $n \ge 1$ or $m \ge 1$ in its own statement.
````

### `thm-mean-value-inequality`

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

