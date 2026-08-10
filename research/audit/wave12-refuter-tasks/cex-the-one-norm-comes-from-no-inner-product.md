## Selection reasons

- critical risk (10): 13 declared dependencies; 13 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language
- direct-citation consumer of generated-risk seed rem-rn-conventions-and-scope

## Target item — `cex-the-one-norm-comes-from-no-inner-product`

Normalized current SHA-256: `5357734b48da2c9b773089feef65b333aa5fc8008d3da03ec17e2bb920288175`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-the-one-norm-comes-from-no-inner-product
kind: counterexample
title: "$\\lVert\\cdot\\rVert_1$ on $\\mathbb{R}^{2}$ violates the parallelogram law, so no symmetric bilinear form induces it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, thm-all-norms-on-rn-are-equivalent, lem-standard-basis-of-f-n, def-integer-power, def-canonical-natural, lem-of-naturals-positive, thm-of-square-roots, def-abs-value, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Parallelogram law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parallelogram_law"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Princeton MAT520 Functional Analysis Lecture Notes"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2024/MAT520_Lecture_Notes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every norm on $\mathbb{R}^{2}$ arises from a symmetric
bilinear form, that is, for every norm $N$ there is a function
$B : \mathbb{R}^{2}\times\mathbb{R}^{2} \to \mathbb{R}$ that is symmetric and
additive and homogeneous in each argument, with $N(x) = \sqrt{B(x,x)}$ for every
$x$.

The witness is $N := \lVert\cdot\rVert_1$ on $\mathbb{R}^{2}$
([[def-p-norms-on-rn]]), and the obstruction is the parallelogram law, which
every such $N$ satisfies ([[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 3
is the instance for the Euclidean form, and the general computation is two lines
of bilinearity, done below) and which $\lVert\cdot\rVert_1$ fails at
$x = e_0$, $y = e_1$.

**What is and is not claimed.** What is refuted is the displayed claim, whose
hypothesis is a symmetric bilinear form on $\mathbb{R}^{2}$ written out in full.
The general converse — that a norm **satisfying** the parallelogram law is
induced by an inner product, the Jordan-von Neumann theorem — is **not proved
here and is not used here**; nor is any abstract theory of inner product spaces,
which belongs to a page of this library earlier in the plan order that is not yet
built ([[rem-rn-conventions-and-scope]]).

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{2}$ with $\lVert x\rVert_1 = |x_0|+|x_1|$ ([[def-p-norms-on-rn]]) and the standard basis vectors $e_0 = (1,0)$, $e_1 = (0,1)$ ([[lem-standard-basis-of-f-n]]).

[A1] The refuted claim at $N = \lVert\cdot\rVert_1$: there is a symmetric $B : \mathbb{R}^{2}\times\mathbb{R}^{2}\to\mathbb{R}$, additive and homogeneous in each argument, with $\lVert x\rVert_1 = \sqrt{B(x,x)}$ for every $x \in \mathbb{R}^{2}$.

[L1] $\lVert\cdot\rVert_1$ is a norm on $\mathbb{R}^{2}$, and $\lVert x\rVert_1 = |x_0|+|x_1|$ ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-norm-and-normed-space]]).

[L2] Absolute values: $|1| = |-1| = 1$ and $|0| = 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L3] Square roots: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, so $\bigl(\sqrt{B(x,x)}\bigr)^{2} = B(x,x)$ whenever $B(x,x) \ge 0$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L4] Canonical naturals are strictly increasing and positive and carry sums to sums and products to products, so $\iota(2)^{2} = \iota(4)$, $\iota(4)+\iota(4) = \iota(8)$, $2\cdot 1 + 2\cdot 1 = \iota(4)$ and $\iota(8) \ne \iota(4)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] The Euclidean inner product is bilinear and symmetric and satisfies the parallelogram law for $\lVert\cdot\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 3).

## Counterexample

**Proof technique:** direct.

1.1 Assume [A1] and write $Q(x) := B(x,x)$, so $\lVert x\rVert_1^{2} = Q(x)$ for every $x$. [A1, L3]

1.2 By symmetry and additivity and homogeneity in each argument, $Q(x+y) = B(x+y,x+y) = Q(x) + 2B(x,y) + Q(y)$ and $Q(x-y) = Q(x) - 2B(x,y) + Q(y)$, hence $Q(x+y)+Q(x-y) = 2Q(x)+2Q(y)$ for all $x,y$. [A1]

1.3 Computing: $\lVert (1,1)\rVert_1 = |1|+|1| = \iota(2)$ and $\lVert (1,-1)\rVert_1 = |1|+|-1| = \iota(2)$, while $\lVert e_0\rVert_1 = \lVert e_1\rVert_1 = 1$. [L1, L2]

2.1 Instantiate step 1.2 at $x = e_0$, $y = e_1$: the left side is $\lVert (1,1)\rVert_1^{2} + \lVert (1,-1)\rVert_1^{2}$ and the right side is $2\lVert e_0\rVert_1^{2} + 2\lVert e_1\rVert_1^{2}$. [step 1.1, step 1.2]

3.1 So the left side of step 2.1 is $\iota(2)^{2}+\iota(2)^{2} = \iota(4)+\iota(4) = \iota(8)$ and the right side is $2\cdot 1 + 2\cdot 1 = \iota(4)$, giving $\iota(8) = \iota(4)$, which contradicts the strict increase of $\iota$. [step 2.1, step 1.3, L4]

4.1 Hence [A1] is false: no symmetric bilinear form on $\mathbb{R}^{2}$ induces $\lVert\cdot\rVert_1$, and in particular $\lVert\cdot\rVert_1 \ne \lVert\cdot\rVert_2$. [step 1.1, step 3.1, A1]

5.1 The parallelogram law does hold for $\lVert\cdot\rVert_2$, which is induced by the Euclidean inner product, so the failure above is a genuine separation between the two norms and not a defect of the computation. [L5] ∎

## Remarks

- **Equivalence of norms says nothing about inner products.** By [[thm-all-norms-on-rn-are-equivalent]] the norms $\lVert\cdot\rVert_1$ and $\lVert\cdot\rVert_2$ on $\mathbb{R}^{2}$ **are** equivalent: they have the same open sets, the same convergent sequences and the same Cauchy sequences. What the computation above shows is that they are nevertheless different norms, and that one of them cannot be written as $\sqrt{B(\cdot,\cdot)}$ for any symmetric bilinear $B$. Equivalence is a metric statement; the parallelogram law is not.

- **Only one instance of the law is needed.** The claim is refuted by a single pair $(e_0,e_1)$, and the arithmetic is $\iota(8) \ne \iota(4)$. No general theory is required, which is exactly why this item can be stated on a page that has no abstract inner products.

- **The converse direction is a different theorem.** That a norm satisfying the parallelogram law **is** induced by an inner product is the Jordan-von Neumann theorem, proved by polarisation; [[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 4 contains the polarisation identity for the Euclidean form, but the general theorem needs the abstract theory and is **not** asserted anywhere in this library.
````

## Wave 12 provenance row

```json
{
  "id": "cex-the-one-norm-comes-from-no-inner-product",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2024/MAT520_Lecture_Notes.pdf"
  ],
  "rationale": "$\\\\lVert\\\\cdot\\\\rVert_1$ on $\\\\mathbb{R}^{2}$ violates the parallelogram law, so no symmetric bilinear form induces it: The source records the parallelogram-law obstruction for the one norm; the item rewrites the witness in the library’s R^2 coordinates and norm notation. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms\nof [[def-p-norms-on-rn]]. Then:\n\n1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$\n   ([[def-norm-and-normed-space]]).\n2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$.\n3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$,\n   $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$\n   where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published\n   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms\n   ([[def-norm-and-normed-space]]) **is** the correspondingly named published\n   metric, not merely one equivalent to it.\n\n**Consequence, used repeatedly below and stated once here.** By clause 3 at\n$p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces\npage and the metric space underlying the normed space\n$(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence\ncompleteness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel\n([[thm-heine-borel-rn]] clause 2) and the compactness equivalences\n([[thm-metric-compactness-equivalences]]) are statements about this page's normed\nspace, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**.\nNothing below cites any of those three theorems for $n = 0$.\n\n**Why this lemma exists.** Without it the library would hold a norm-induced\nmetric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with\nno recorded relation, and every later citation would have to guess which was\nmeant. The proof of clause 3 is a comparison of two written expressions; the\nvalue is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of $x \\in F$ is $$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every $a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$; we write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field ([[def-ordered-field]], [[def-field]]). **Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to the set $\\mathbb{R}$, the starting element $1$ and the function $f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$, written $n \\mapsto a^n$, with $$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$ Thus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for **every** $a$, including $a = 0$. **Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set $$a^{-n} := (a^n)^{-1}.$$ **Why that is legitimate.** The right-hand side presupposes that $a^n$ is invertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$ in a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on $n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]). That lemma is a statement *about* the operation introduced here, so it depends on this definition and is recorded in this item's `justified_by` rather than in its `deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single well-determined element, because multiplicative inverses in a field are unique ([[lem-of-inverse-unique]]). **Integer exponents.** Every integer $m$ ([[def-integers]]) is either $\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the embedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]], [[def-int-operations]]). This too is a citation and not a slogan: the order on $\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the image of $\\iota$ is exactly the set of nonnegative integers, and each of them is $\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then $-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]), so $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is injective. The two clauses above therefore define $a^m$ for every $m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for arbitrary $a$. The clauses are consistent where they overlap: the only overlap is $m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-euclidean-inner-product",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$. A natural number is a von Neumann natural, that is a set, and $n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so $$\\mathbb{R}^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to \\mathbb{R} \\,\\}$$ is the function space of [[def-function-space]] at $F = \\mathbb{R}$ and $X = n$, a vector space over $\\mathbb{R}$ under the pointwise operations ([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of $\\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the same set that [[lem-metrics-on-rn]] calls $\\mathbb{R}^{n}$. The **Euclidean inner product** of $x, y \\in \\mathbb{R}^{n}$ is the real number $$\\langle x, y\\rangle \\;:=\\; \\sum_{k<n} x_k\\,y_k ,$$ the finite sum of [[def-finite-sum]] applied to the list $k \\mapsto x_k y_k$ (extended by $0$ beyond $n$, as every finite list in this library is). The **Euclidean norm** of $x$ is $$\\lVert x\\rVert_2 \\;:=\\; \\sqrt{\\langle x, x\\rangle},$$ which is defined because $\\langle x,x\\rangle = \\sum_{k<n} x_k^{2} \\ge 0$ (a sum of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and [[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by [[def-integer-power]]) and every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]). ### Both are defined for every $n$, including $n = 0$ At $n = 0$ the set $\\mathbb{R}^{0}$ has exactly one element, the empty function, and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum above is the empty sum, so $\\langle x,y\\rangle = 0$ and $\\lVert x\\rVert_2 = 0$. **This is the first place on this page where the two index regimes diverge, and the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\\infty$ of [[lem-metrics-on-rn]] are defined only for $n \\ge 1$, because $d_\\infty$ would otherwise be a maximum over the empty index set; the algebra above needs no such restriction. The boundary in this page runs between the algebra and the metric, not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists exactly which items inherit $n \\ge 1$. ### The algebra of the inner product For all $x, y, z \\in \\mathbb{R}^{n}$ and $\\lambda \\in \\mathbb{R}$: 1. **Symmetry.** $\\langle x,y\\rangle = \\langle y,x\\rangle$, since $x_ky_k = y_kx_k$ termwise. 2. **Additivity in the first argument.** $\\langle x + y, z\\rangle = \\langle x,z\\rangle + \\langle y,z\\rangle$: the list $k \\mapsto (x_k+y_k)z_k$ is the termwise sum of $k \\mapsto x_kz_k$ and $k \\mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies. 3. **Homogeneity in the first argument.** $\\langle \\lambda x, y\\rangle = \\lambda\\langle x,y\\rangle$, by [[lem-finite-sum-laws]] clause 2. 4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws in the second argument. 5. **Positive definiteness.** $\\langle x,x\\rangle \\ge 0$, and $\\langle x,x\\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$. 6. **Agreement with the published Euclidean metric.** For $n \\ge 1$ and $x, y \\in \\mathbb{R}^{n}$, $\\lVert x - y\\rVert_2 = \\sqrt{\\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two sides being the same expression ([[lem-metrics-on-rn]]). In particular $\\lVert x\\rVert_2 = d_2(x, 0)$. That $\\lVert\\cdot\\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]] is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-cauchy-schwarz-and-the-euclidean-norm",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $x, y \\in \\mathbb{R}^{n}$, with the Euclidean inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then: 1. **Cauchy-Schwarz.** $$\\lvert\\langle x,y\\rangle\\rvert \\;\\le\\; \\lVert x\\rVert_2\\,\\lVert y\\rVert_2 ,$$ with equality if and only if there is a pair $(\\lambda,\\mu) \\ne (0,0)$ of reals with $\\lambda x_k = \\mu y_k$ for every $k < n$. 2. **$\\lVert\\cdot\\rVert_2$ is a norm on $\\mathbb{R}^{n}$** ([[def-norm-and-normed-space]]), for **every** $n \\in \\mathbb{N}$; the metric it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \\ge 1$. 3. **Parallelogram law.** $$\\lVert x+y\\rVert_2^{2} + \\lVert x-y\\rVert_2^{2} \\;=\\; 2\\lVert x\\rVert_2^{2} + 2\\lVert y\\rVert_2^{2} .$$ 4. **Polarisation.** $$\\langle x,y\\rangle \\;=\\; \\tfrac14\\Bigl(\\lVert x+y\\rVert_2^{2} - \\lVert x-y\\rVert_2^{2}\\Bigr),$$ so the inner product is recovered from the norm it induces. **Clause 1 is a citation, not a new proof.** The inequality and its equality case are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of reals; all that happens below is that it is read in the vector notation of [[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one statement in the library.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Assume [A1] and write $Q(x) := B(x,x)$, so $\\lVert x\\rVert_1^{2} = Q(x)$ for every $x$.",
      "step": "1.1",
      "inputs": [
        "A1",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By symmetry and additivity and homogeneity in each argument, $Q(x+y) = B(x+y,x+y) = Q(x) + 2B(x,y) + Q(y)$ and $Q(x-y) = Q(x) - 2B(x,y) + Q(y)$, hence $Q(x+y)+Q(x-y) = 2Q(x)+2Q(y)$ for all $x,y$.",
      "step": "1.2",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Computing: $\\lVert (1,1)\\rVert_1 = |1|+|1| = \\iota(2)$ and $\\lVert (1,-1)\\rVert_1 = |1|+|-1| = \\iota(2)$, while $\\lVert e_0\\rVert_1 = \\lVert e_1\\rVert_1 = 1$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Instantiate step 1.2 at $x = e_0$, $y = e_1$: the left side is $\\lVert (1,1)\\rVert_1^{2} + \\lVert (1,-1)\\rVert_1^{2}$ and the right side is $2\\lVert e_0\\rVert_1^{2} + 2\\lVert e_1\\rVert_1^{2}$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "So the left side of step 2.1 is $\\iota(2)^{2}+\\iota(2)^{2} = \\iota(4)+\\iota(4) = \\iota(8)$ and the right side is $2\\cdot 1 + 2\\cdot 1 = \\iota(4)$, giving $\\iota(8) = \\iota(4)$, which contradicts the strict increase of $\\iota$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.3",
        "L4"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Hence [A1] is false: no symmetric bilinear form on $\\mathbb{R}^{2}$ induces $\\lVert\\cdot\\rVert_1$, and in particular $\\lVert\\cdot\\rVert_1 \\ne \\lVert\\cdot\\rVert_2$.",
      "step": "4.1",
      "inputs": [
        "step 1.1",
        "step 3.1",
        "A1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "The parallelogram law does hold for $\\lVert\\cdot\\rVert_2$, which is induced by the Euclidean inner product, so the failure above is a genuine separation between the two norms and not a defect of the computation.",
      "step": "5.1",
      "inputs": [
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-the-one-norm-comes-from-no-inner-product: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-all-norms-on-rn-are-equivalent",
    "declared_target": "thm-all-norms-on-rn-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
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
[
  {
    "id": "rem-rn-conventions-and-scope",
    "file": "items/rem-rn-conventions-and-scope.md",
    "source": "provenance",
    "cone_size": 7,
    "logical_consumers": [
      "rem-total-derivative-conventions-and-linear-map-seam"
    ],
    "direct_citation_consumers": [
      {
        "id": "cex-the-one-norm-comes-from-no-inner-product",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "def-euclidean-inner-product",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "def-norm-and-normed-space",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-gamma-and-its-complement-computed-for-a-plane-series",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-total-derivative-conventions-and-linear-map-seam",
        "via": [
          "deps",
          "wikilink"
        ]
      },
      {
        "id": "thm-absolute-convergence-in-rn",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "thm-rearrangement-sums-lie-in-an-affine-subspace",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (14)

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
````

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

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
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

### `rem-rn-conventions-and-scope`

````markdown
---
id: rem-rn-conventions-and-scope
kind: remark
title: "Conventions of this page, the standing $n \\ge 1$ hypothesis, and what is taken up elsewhere in the reading order"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-norm-and-normed-space, def-linear-map, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, def-equivalent-norms, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, thm-componentwise-convergence-and-completeness, cor-bolzano-weierstrass-in-rn, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-vector-valued-derivative-and-integral, thm-norm-inequality-for-the-vector-valued-integral, thm-mean-value-inequality, cor-vector-valued-ftc-and-lipschitz-bound, def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn, def-the-space-of-summing-directions, thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace, lem-metrics-on-rn, rem-real-exponents-deferred, def-function-space, def-rational-power, lem-standard-basis-of-f-n, thm-euclidean-space-complete, thm-heine-borel-rn, thm-minkowski-finite]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## 1. The standing hypothesis $n \ge 1$, and exactly where it comes from

The published [[lem-metrics-on-rn]] defines $\mathbb{R}^{n}$ together with the
metrics $d_1$, $d_2$, $d_\infty$ **only for $n \ge 1$**, and says why: at $n = 0$
the value $d_\infty(x,y)$ would be a maximum over the empty index set, which does
not exist. Everything downstream of that item inherits the hypothesis, and this
page inherits it too. In particular [[thm-euclidean-space-complete]] and
[[thm-heine-borel-rn]] are stated for $n \ge 1$ and **are never cited here for
all $n$**.

**The boundary runs between the algebra and the metric, not where a reader would
guess.** The following items of this page carry no hypothesis on the dimension:

- [[def-norm-and-normed-space]] — including the observation that the zero space
  carries exactly one norm;
- [[def-euclidean-inner-product]], whose sum is the empty sum at $n = 0$;
- [[thm-cauchy-schwarz-and-the-euclidean-norm]], all four of whose clauses hold
  for every $n$, apart from the closing sentence of clause 2 identifying the
  induced metric with $d_2$;
- [[def-equivalent-norms]], which is about an arbitrary real vector space;
- clause 1 of [[lem-p-norms-are-norms-and-induce-the-published-metrics]], that
  each $\lVert\cdot\rVert_p$ with rational $p \ge 1$ is a norm;
- clause 1 of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]],
  the finite and reverse triangle inequalities for a norm on any real vector
  space.

The remaining items all carry $n \ge 1$ (or $m \ge 1$ for the codomain of a
vector-valued function), and each states it in its own Statement:
[[def-p-norms-on-rn]] for $\lVert\cdot\rVert_\infty$; clauses 2 and 3 of
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; clauses 2, 3, 4 of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]];
[[thm-all-norms-on-rn-are-equivalent]];
[[thm-componentwise-convergence-and-completeness]];
[[cor-bolzano-weierstrass-in-rn]];
[[def-vector-valued-functions-limits-and-continuity]];
[[thm-componentwise-limits-and-continuity]];
[[def-vector-valued-derivative-and-integral]];
[[thm-norm-inequality-for-the-vector-valued-integral]];
[[thm-mean-value-inequality]];
[[cor-vector-valued-ftc-and-lipschitz-bound]];
[[def-series-of-vectors-and-rearrangement]];
[[thm-absolute-convergence-in-rn]];
[[def-the-space-of-summing-directions]];
[[thm-steinitz-polygonal-confinement]]; and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]].

Where a statement about $n = 0$ is nevertheless true, it is proved here from
scratch rather than imported: see the second remark of
[[thm-componentwise-convergence-and-completeness]] for completeness of
$\mathbb{R}^{0}$.

## 2. The exponent of a $p$-norm is rational

[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent, and real exponents do not exist at this point in the reading order;
[[rem-real-exponents-deferred]] records why. Consequently
[[def-p-norms-on-rn]] defines $\lVert\cdot\rVert_p$ for rational $p \ge 1$ only,
and the published Minkowski inequality it rests on is itself stated for rational
$p$. **No statement on this page is written with $p$ ranging over a real
interval**, and the phrase "for $p \in [1,\infty)$" appears nowhere.

## 3. $\mathbb{R}^{n}$ is a function space

$\mathbb{R}^{n}$ is the set of functions $n \to \mathbb{R}$
([[def-function-space]], [[lem-metrics-on-rn]]), so $\mathbb{R}^{1}$ is **not
literally** $\mathbb{R}$: its elements are functions on the one-element set $1$.
Every comparison on this page between the theory in $\mathbb{R}^{n}$ and the
published one-dimensional theory therefore goes through the isometric bijection
$\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value
$t$ at $0$, and each item that makes such a comparison states the identification
explicitly: [[cor-bolzano-weierstrass-in-rn]],
[[def-vector-valued-functions-limits-and-continuity]],
[[def-series-of-vectors-and-rearrangement]] and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]]. Coordinates are indexed
from $0$ throughout, as [[lem-standard-basis-of-f-n]] fixes.

## 4. What is taken up elsewhere in the reading order

Each item below is a statement about **where material sits in this library's
reading order**, and none of them is a claim about mathematics that this library
denies.

- **Linear maps, the operator norm, and "a linear map between finite-dimensional
  normed spaces is Lipschitz".** Abstract linear maps are defined on the earlier
  linear-algebra page in [[def-linear-map]]. This page neither defines an
  operator norm nor proves that every linear map between finite-dimensional
  normed spaces is Lipschitz. The later total-derivative treatment uses a
  concrete Euclidean formulation; identifying that formulation with the
  abstract definition requires an explicit agreement argument rather than a
  second silent meaning of "linear map".
- **Inner product spaces and orthogonality.** [[def-euclidean-inner-product]]
  defines the concrete Euclidean form on $\mathbb{R}^{n}$ and claims nothing
  about abstract inner product spaces: orthonormal bases, Gram-Schmidt,
  orthogonal projection, orthogonal complements of arbitrary subspaces and the
  decomposition $V = W \oplus W^{\perp}$ all belong to a page earlier in the plan
  order that is not yet built. **In particular nothing on this page asserts that
  $\mathbb{R}^{n}$ is the direct sum of $\Gamma$ and $\Gamma^{\perp}$**
  ([[def-the-space-of-summing-directions]]).
- **Uniform convergence, the total derivative, and integration over subsets of
  $\mathbb{R}^{n}$** all come later in this track.
- **The classical mean value witness.** The crispest counterexample to the
  equality form of the mean value theorem for vector-valued functions is
  $t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$. The trigonometric functions are
  introduced later in the reading order than this page, so the companion page
  uses the polynomial curve $t \mapsto (t^{2},t^{3})$ on $[0,1]$ instead. The
  substitution is recorded in the companion item that carries the witness, not
  here, so that a reader meeting the polynomial curve is told at once why the
  classical one is absent; the theorem whose equality form it refutes is
  [[thm-mean-value-inequality]].

## 5. The open half of the rearrangement question

[[thm-rearrangement-sums-lie-in-an-affine-subspace]] proves that the set
$\mathcal{S}(x)$ of rearrangement sums of a convergent series in $\mathbb{R}^{n}$
is nonempty and **contained in** the affine subspace $s + \Gamma^{\perp}$, and
[[thm-steinitz-polygonal-confinement]] proves Steinitz's polygonal confinement
lemma in full. **The reverse inclusion is not proved on this page, and this page
asserts nothing about it in either direction, for any $n \ge 2$.** No
recorded-not-proved item has been created for it either.

The obstruction is machinery and not effort. Every route to the reverse inclusion
known to the author of this page reduces first to the case $\Gamma = \{0\}$ by an
orthogonal projection, which needs the orthogonal decomposition named in §4, and
then runs a separation argument for convex sets in $\mathbb{R}^{n}$, which
exists nowhere in this library and is owned by no planned page. When both exist,
the discharge is an **addition to this page**, not a new page.

The published [[rem-rearrangement-in-higher-dimensions]] raised this question on
the series page and declined to state what the literature answers; this page
answers the part it can and continues to decline the rest. What a reader is
protected from meanwhile is the wrong guess: the companion page refutes outright
the naive $\mathbb{R}^{n}$ analogue of the Riemann series theorem, using the
containment half and nothing more.

## 6. A naming collision worth stating once

[[thm-steinitz-polygonal-confinement]] is Steinitz's polygonal confinement lemma
from his 1913 paper on conditionally convergent series. It is **not** the
Steinitz exchange lemma of linear algebra, which is published in this library
under the id `thm-steinitz-exchange` and additionally carries the alias
`lem-steinitz`. The two are different theorems by the same author; the ids do not
collide, and no item on this page uses the bare alias.
````

### `thm-all-norms-on-rn-are-equivalent`

````markdown
---
id: thm-all-norms-on-rn-are-equivalent
kind: theorem
title: "For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-equivalent-norms, def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-heine-borel-rn, thm-extreme-value-metric, thm-metric-continuity-characterisations, def-metric-compactness, def-metric-bounded-diameter, def-metric-topology, def-metric-ball, lem-standard-basis-of-f-n, def-metric-continuity, lem-of-inverse-positive, def-complete-ordered-field, thm-of-square-roots, lem-metrics-on-rn, def-isometry-and-metric-embedding]
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
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the published metric $d_2$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and a norm $N$ on $\mathbb{R}^{n}$; write $S := \{\, x \in \mathbb{R}^{n} : \lVert x\rVert_2 = 1 \,\}$.

[L1] For $n \ge 1$: $C := \max\{N(e_k) : k<n\}$ exists with $C \ge 0$, $N(x) \le C\lVert x\rVert_1$, $\lVert x\rVert_1 \le \sqrt{\iota(n)}\lVert x\rVert_2$, and $N$ is continuous as a map $(\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 2, 3, 4).

[L2] Equivalence of norms is an equivalence relation, and $c M \le N \le C M$ with $c, C > 0$ is what it means ([[def-equivalent-norms]]).

[L3] Heine-Borel in $\mathbb{R}^{n}$ for $n \ge 1$: a subset of $(\mathbb{R}^{n},d_2)$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]] clause 2, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L4] Extreme value theorem: a continuous real-valued function on a **nonempty** compact metric space attains a least value ([[thm-extreme-value-metric]]).

[L5] Continuity characterisations: a map of metric spaces continuous at every point has closed preimages of closed sets ([[thm-metric-continuity-characterisations]], clause (c)).

[L6] Balls, openness and boundedness ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]): $U$ is open when every point of $U$ has a ball inside $U$; $A$ is bounded when $A = \emptyset$ or $A \subseteq B(x_0,r)$ for some $x_0$ and real $r>0$.

[L7] The norm axioms (N1) and (N2), and nonnegativity of a norm ([[def-norm-and-normed-space]]).

[L8] The standard basis vector $e_0 \in \mathbb{R}^{n}$ exists for $n \ge 1$, with $e_0(0) = 1$ and $e_0(j) = 0$ for $0 \ne j < n$ ([[lem-standard-basis-of-f-n]]); hence $\lVert e_0\rVert_2 = \sqrt{1} = 1$ ([[def-p-norms-on-rn]], [[thm-of-square-roots]]).

[L9] Inverses: $u > 0$ gives $u^{-1} > 0$, and trichotomy of the order of $\mathbb{R}$ ([[lem-of-inverse-positive]], [[def-complete-ordered-field]]).

[L10] Continuity at a point in the $\varepsilon$-$\delta$ form, and the metric subspace $(A, d_A)$ with $d_A$ the restriction of $d$ ([[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{1\} \subseteq \mathbb{R}$ is closed: if $y \ne 1$ then $r := |y-1| > 0$ and the ball $B(y,r)$ omits $1$, so the complement of $\{1\}$ is open. [L6, L9]

1.2 $\lVert\cdot\rVert_2$ is itself a norm on $\mathbb{R}^{n}$, so by [L1] applied to it, $\lVert\cdot\rVert_2 : (\mathbb{R}^{n},d_2) \to (\mathbb{R},d_{\mathbb{R}})$ is continuous. [L1, L7]

1.3 $S \subseteq B(0,2)$, since $x \in S$ gives $d_2(x,0) = \lVert x\rVert_2 = 1 < 2$; so $S$ is bounded. [L6, L7]

1.4 $e_0 \in S$, because $\lVert e_0\rVert_2 = 1$; this is where $n \ge 1$ is used, since for $n = 0$ there is no index $0 < n$ and no such vector. So $S \ne \emptyset$. [L8]

1.5 For every $a \in S$ and every real $\varepsilon > 0$, a $\delta > 0$ witnessing continuity of $N$ at $a$ as a map on $\mathbb{R}^{n}$ also witnesses it for the restriction $N|_S$ on the metric subspace $(S, d_S)$, because $d_S$ is the restriction of $d_2$ and the condition is quantified over fewer points; so $N|_S$ is continuous. [L1, L10]

1.6 Put $C' := C\sqrt{\iota(n)} + 1$, a real $> 0$. By [L1], $N(x) \le C\lVert x\rVert_1 \le C\sqrt{\iota(n)}\lVert x\rVert_2 \le C'\lVert x\rVert_2$, the last step because $\lVert x\rVert_2 \ge 0$. [L1, L7]

2.1 $S$ is the preimage of $\{1\}$ under the continuous $\lVert\cdot\rVert_2$, hence closed in $\mathbb{R}^{n}$. [step 1.1, step 1.2, L5]

3.1 $S$ is a compact subset of $(\mathbb{R}^{n},d_2)$, being closed and bounded. [step 1.3, step 2.1, L3]

4.1 By the extreme value theorem applied to the nonempty compact metric space $(S,d_S)$ and the continuous $N|_S$, there is $x_{\min} \in S$ with $N(x_{\min}) \le N(x)$ for every $x \in S$; put $c := N(x_{\min})$. [step 1.4, step 1.5, step 3.1, L4]

5.1 $c > 0$: from $x_{\min} \in S$ we get $\lVert x_{\min}\rVert_2 = 1 \ne 0$, so $x_{\min} \ne 0$ by (N1) for $\lVert\cdot\rVert_2$, so $N(x_{\min}) \ne 0$ by (N1) for $N$, and $N(x_{\min}) \ge 0$; trichotomy leaves $c > 0$. [step 4.1, L7, L9]

5.2 Let $x \ne 0$. Then $\lVert x\rVert_2 > 0$ by (N1) and nonnegativity, so $t := 1/\lVert x\rVert_2 > 0$ and $u := t\,x$ satisfies $\lVert u\rVert_2 = |t|\,\lVert x\rVert_2 = 1$ by (N2); hence $u \in S$ and $c \le N(u) = |t|\,N(x) = N(x)/\lVert x\rVert_2$, that is $c\,\lVert x\rVert_2 \le N(x)$. [step 4.1, L7, L9]

6.1 For $x = 0$ both $c\lVert x\rVert_2$ and $N(x)$ are $0$ by (N1), so $c\lVert x\rVert_2 \le N(x)$ holds for every $x \in \mathbb{R}^{n}$. [step 5.2, L7]

7.1 Steps 5.1, 6.1 and 1.6 give $c\lVert x\rVert_2 \le N(x) \le C'\lVert x\rVert_2$ with $c, C' > 0$, so every norm $N$ on $\mathbb{R}^{n}$ is equivalent to $\lVert\cdot\rVert_2$. [step 5.1, step 6.1, step 1.6, L2]

8.1 Given two norms $M$ and $N$ on $\mathbb{R}^{n}$, each is equivalent to $\lVert\cdot\rVert_2$ by step 7.1, so $M$ is equivalent to $N$ by symmetry and transitivity of the relation. [step 7.1, L2] ∎

## Remarks

- **What the proof spends, and where it stops.** The only nonelementary ingredients are compactness of the Euclidean unit sphere, obtained from [[thm-heine-borel-rn]], and the extreme value theorem [[thm-extreme-value-metric]]. Heine-Borel in $\mathbb{R}^{n}$ is proved by bisection and uses no choice principle, and the extreme value theorem is a theorem of ZF ([[rem-compactness-choice-ledger-metric]]), so this theorem costs no choice either.

- **The sphere is where the argument is finite-dimensional.** The step that fails outside $\mathbb{R}^{n}$ is step 3.1: closed and bounded gives compact by [[thm-heine-borel-rn]], a theorem about $\mathbb{R}^{n}$ for a natural $n$ and about nothing else. The companion page exhibits a real vector space carrying two inequivalent norms, and the same space with a closed bounded set that is not compact. **This remark is a statement about this proof and about that witness; no claim is made here about normed spaces in general, a theory this library has not built.**

- **The constants are not canonical.** Nothing in the statement fixes $c$ or $C'$, and the proof produces one admissible pair, not the best one. Sharp constants for the three named norms on $\mathbb{R}^{2}$ are computed on the companion page.
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

