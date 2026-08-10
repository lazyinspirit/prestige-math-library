## Selection reasons

- critical risk (8): 19 declared dependencies; 18 cited facts; 7 numbered proof steps; boundary-sensitive language

## Target item — `ex-p-norm-comparison-constants-on-r2`

Normalized current SHA-256: `798e12a0ee2c845694e52e784c451dd145be20947b2b1b8e79661aef3b5e1f1e`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-p-norm-comparison-constants-on-r2
kind: example
title: "The comparison constants between $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ on $\\mathbb{R}^{2}$, and vectors attaining each"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-norm-and-normed-space, thm-cauchy-schwarz-finite, thm-of-square-roots, lem-of-square-monotone, lem-standard-basis-of-f-n, def-canonical-natural, lem-of-naturals-positive, def-metric-ball, lem-finite-sum-laws, def-finite-sum, lem-finite-set-has-max, def-max-min, def-abs-value, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
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

## Example

On $\mathbb{R}^{2}$ with the norms of [[def-p-norms-on-rn]], the comparison chain
of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3 reads

$$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(2)\,\lVert x\rVert_\infty, \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(2)}\;\lVert x\rVert_2 .$$

**Each of these four constants is attained**, so none can be improved:

- $e_0 = (1,0)$ has $\lVert e_0\rVert_\infty = \lVert e_0\rVert_2 = \lVert e_0\rVert_1 = 1$,
  so the first and second inequalities are equalities there;
- $(1,1)$ has $\lVert(1,1)\rVert_\infty = 1$, $\lVert(1,1)\rVert_2 = \sqrt{\iota(2)}$
  and $\lVert(1,1)\rVert_1 = \iota(2)$, so the third and fourth inequalities are
  equalities there.

The general theorem [[thm-all-norms-on-rn-are-equivalent]] supplies constants but
no attaining vectors; that is what this computation adds.

**Unit balls.** Writing $B_p := \{\, x \in \mathbb{R}^{2} : \lVert x\rVert_p \le 1 \,\}$
for $p \in \{1,2,\infty\}$, the chain gives
$B_1 \subseteq B_2 \subseteq B_\infty$, and both inclusions are strict: $(1,1)$
lies in $B_\infty$ and not in $B_2$, and $\bigl(3/\iota(5)\bigr)(1,1)$ lies in
$B_2$ and not in $B_1$. The scalar has to be chosen strictly between
$1/\iota(2)$ and $1/\sqrt{\iota(2)}$: at the endpoint $1/\iota(2)$ the vector
$(1,1)/\iota(2)$ has $\lVert\cdot\rVert_1 = 1$ and so still lies in $B_1$.

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{2}$ with $\lVert x\rVert_1 = |x_0|+|x_1|$, $\lVert x\rVert_2 = \sqrt{x_0^{2}+x_1^{2}}$ and $\lVert x\rVert_\infty = \max\{|x_0|,|x_1|\}$ ([[def-p-norms-on-rn]], [[lem-finite-sum-laws]], [[def-finite-sum]], [[lem-finite-set-has-max]], [[def-max-min]]); the vectors $e_0 = (1,0)$, $e_1 = (0,1)$ and $u := (1,1)$ ([[lem-standard-basis-of-f-n]]).

[L1] The comparison chain on $\mathbb{R}^{n}$ for $n \ge 1$, at $n = 2$: $\lVert x\rVert_\infty \le \lVert x\rVert_2 \le \lVert x\rVert_1 \le \iota(2)\lVert x\rVert_\infty$ and $\lVert x\rVert_1 \le \sqrt{\iota(2)}\lVert x\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[thm-cauchy-schwarz-finite]]).

[L2] Each of the three is a norm and induces the correspondingly named published metric ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-norm-and-normed-space]], [[def-equivalent-norms]], [[def-metric-ball]]).

[L3] Square roots: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, so $\sqrt{1} = 1$, and squaring is strictly monotone on the nonnegatives ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L4] Canonical naturals: $\iota(1) = 1$, $\iota(2) = 1+1 > 1$, $\iota(2) > 0$, and $\iota$ is strictly increasing ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] Absolute value: $|1| = 1$, $|0| = 0$, $|t| \ge 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

## Verification

**Proof technique:** direct.

1.1 $\lVert e_0\rVert_1 = |1|+|0| = 1$, $\lVert e_0\rVert_2 = \sqrt{1^{2}+0^{2}} = \sqrt{1} = 1$, and $\lVert e_0\rVert_\infty = \max\{1,0\} = 1$. [L3, L5]

1.2 $\lVert u\rVert_1 = |1|+|1| = \iota(2)$, $\lVert u\rVert_2 = \sqrt{1^{2}+1^{2}} = \sqrt{\iota(2)}$, and $\lVert u\rVert_\infty = \max\{1,1\} = 1$. [L3, L4, L5]

1.3 The inclusions $B_1 \subseteq B_2 \subseteq B_\infty$ follow from the chain: $\lVert x\rVert_1 \le 1$ gives $\lVert x\rVert_2 \le 1$, and that gives $\lVert x\rVert_\infty \le 1$. [L1, L2]

2.1 At $x = e_0$ the first inequality of [L1] reads $1 \le 1$ and the second reads $1 \le 1$: both are equalities, so neither $\lVert\cdot\rVert_\infty \le \lVert\cdot\rVert_2$ nor $\lVert\cdot\rVert_2 \le \lVert\cdot\rVert_1$ can be improved by a constant smaller than $1$. [step 1.1, L1]

2.2 At $x = u$ the third inequality of [L1] reads $\iota(2) \le \iota(2)\cdot 1$ and the fourth reads $\iota(2) \le \sqrt{\iota(2)}\cdot\sqrt{\iota(2)} = \iota(2)$: both are equalities, so the constants $\iota(2)$ and $\sqrt{\iota(2)}$ are best possible. [step 1.2, L1, L3]

2.3 The inclusions are strict: $u$ has $\lVert u\rVert_\infty = 1$ and $\lVert u\rVert_2 = \sqrt{\iota(2)} > 1$ since $\iota(2) > 1$, so $u \in B_\infty \setminus B_2$; and $w := \bigl(3/\iota(5)\bigr)u$ has $\lVert w\rVert_1 = \iota(2)\cdot 3/\iota(5) = \iota(6)/\iota(5) > 1$ while $\lVert w\rVert_2 = \sqrt{\iota(2)}\cdot 3/\iota(5)$ satisfies $\lVert w\rVert_2^{2} = \iota(2)\cdot\iota(9)/\iota(25) = \iota(18)/\iota(25) < 1$, so $w \in B_2\setminus B_1$. [step 1.2, L2, L3, L4]

3.1 Steps 2.1 and 2.2 exhibit an attaining vector for each of the four inequalities, and steps 1.3 and 2.3 give the strict inclusions of the unit balls. [step 2.1, step 2.2, step 1.3, step 2.3] ∎

## Remarks

- **Sharpness is not the same as equivalence.** [[thm-all-norms-on-rn-are-equivalent]] asserts that constants exist and produces some; nothing in it says which are smallest. The computation above supplies attaining vectors, and those are what make the constants of the chain best possible on $\mathbb{R}^{2}$.

- **Both attaining vectors are extreme in the expected way.** A vector with a single nonzero coordinate makes all three norms agree; a vector whose two coordinates have equal absolute value spreads the mass as evenly as possible and is where $\lVert\cdot\rVert_1$ is largest relative to the other two. On $\mathbb{R}^{n}$ the same two vectors give equality with $\iota(n)$ and $\sqrt{\iota(n)}$ in place of $\iota(2)$ and $\sqrt{\iota(2)}$; only the case $n = 2$ is verified here.

- **The strictness computation in step 2.3 is arithmetic, not geometry.** The scalar $3/\iota(5)$ was chosen to lie strictly between $1/\iota(2)$ and $1/\sqrt{\iota(2)}$; any scalar in that open interval would serve, and the interval is nonempty exactly because $\sqrt{\iota(2)} < \iota(2)$.
````

## Wave 12 provenance row

```json
{
  "id": "ex-p-norm-comparison-constants-on-r2",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "The comparison constants between $\\\\lVert\\\\cdot\\\\rVert_1$, $\\\\lVert\\\\cdot\\\\rVert_2$ and $\\\\lVert\\\\cdot\\\\rVert_\\\\infty$ on $\\\\mathbb{R}^{2}$, and vectors attaining each: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about $\\mathbb{R}^{n}$ with $n \\ge 1$.** 1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every $p \\in \\mathbb{N}$ and every list $u : p \\to V$ ([[def-linear-combination-and-span]]), $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$ and for all $u, w \\in V$, $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$ Now let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of [[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural ([[def-canonical-natural]]). 2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a nonempty finite set of reals ([[lem-standard-basis-of-f-n]], [[lem-finite-set-has-max]]). Then $C \\ge 0$ and $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$ 3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$, $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$ In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$, with the constants displayed ([[def-equivalent-norms]]). 4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is Lipschitz with constant $C\\sqrt{\\iota(n)}$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]). **Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to exist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a maximum over the empty index set and does not exist, exactly as in [[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis on the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-cauchy-schwarz-finite",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $a_0, \\dots, a_{n-1}$ and $b_0, \\dots, b_{n-1}$ be reals, with finite sums as in [[def-finite-sum]]. Then $$\\Big(\\sum_{k<n} a_k b_k\\Big)^{2} \\;\\le\\; \\Big(\\sum_{k<n} a_k^{2}\\Big)\\Big(\\sum_{k<n} b_k^{2}\\Big),$$ and, in root form ([[thm-of-square-roots]]), $$\\Big|\\sum_{k<n} a_k b_k\\Big| \\;\\le\\; \\sqrt{\\sum_{k<n} a_k^{2}} \\; \\sqrt{\\sum_{k<n} b_k^{2}}.$$ Equality holds in the first display if and only if the two lists are proportional, in the symmetric sense that there is a pair $(\\lambda, \\mu) \\ne (0,0)$ of reals with $\\lambda a_k = \\mu b_k$ for every $k < n$. **No root is used in the proof of the squared form.** That form is an identity plus a sign argument in the ordered field, and the root form is only a restatement of it through the monotonicity of squaring on the nonnegatives ([[lem-of-square-monotone]]); the root enters nowhere but the last step, where that restatement is made and [[thm-of-square-roots]] is what supplies the square-root symbol. This matters here, because it makes the squared inequality independent of the existence theorem for roots.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms of [[def-p-norms-on-rn]]. Then: 1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]). 2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$. 3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$, $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$ where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published [[lem-metrics-on-rn]]. So the metric induced by each of these three norms ([[def-norm-and-normed-space]]) **is** the correspondingly named published metric, not merely one equivalent to it. **Consequence, used repeatedly below and stated once here.** By clause 3 at $p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces page and the metric space underlying the normed space $(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel ([[thm-heine-borel-rn]] clause 2) and the compactness equivalences ([[thm-metric-compactness-equivalences]]) are statements about this page's normed space, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**. Nothing below cites any of those three theorems for $n = 0$. **Why this lemma exists.** Without it the library would hold a norm-induced metric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with no recorded relation, and every later citation would have to guess which was meant. The proof of clause 3 is a comparison of two written expressions; the value is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-equivalent-norms",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over $\\mathbb{R}$ ([[def-vector-space]]) and let $M$ and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are **equivalent** when there are reals $c > 0$ and $C > 0$ with $$c\\,M(v) \\;\\le\\; N(v) \\;\\le\\; C\\,M(v) \\qquad \\text{for every } v \\in V .$$ The constants are not part of the data and are not unique: any smaller $c$ and any larger $C$ serve as well. ### This is an equivalence relation on the norms on $V$ - **Reflexive:** take $c = C = 1$. - **Symmetric:** from $cM \\le N \\le CM$ and $c, C > 0$ one gets $C^{-1}N \\le M \\le c^{-1}N$, dividing by the positive constants ([[lem-of-inverse-positive]]). - **Transitive:** if $cM \\le N \\le CM$ and $c'N \\le P \\le C'N$ then $c'c\\,M \\le P \\le C'C\\,M$, and $c'c > 0$, $C'C > 0$, a product of positives being positive. ### The dictionary with equivalent metrics Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics ([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed condition gives $$c\\,d_M(u,w) \\;\\le\\; d_N(u,w) \\;\\le\\; C\\,d_M(u,w) \\qquad \\text{for all } u, w \\in V ,$$ which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense of [[def-equivalent-metrics]], with $\\alpha = c$ and $\\beta = C$. That is the **strongest** of the three tiers that item distinguishes: by [[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform equivalence, which implies topological equivalence. So equivalent norms give - the same open sets, hence the same closed sets, closures and interiors ([[def-metric-topology]]); - the same uniformly continuous maps into and out of $V$ ([[def-metric-uniform-continuity]]); - the same convergent sequences with the same limits, and the same Cauchy sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]). The last line deserves its two-line verification, since it is used constantly below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If $d_M(v_k, v) \\to 0$ then $0 \\le d_N(v_k,v) \\le C\\,d_M(v_k,v)$, so given a rational $\\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \\varepsilon/C$ serves for $d_N$; the converse uses $d_M \\le c^{-1}d_N$ in the same way. The Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular $(V, d_M)$ is complete if and only if $(V,d_N)$ is. **Naming.** Many texts say *strongly equivalent* for what [[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent* for what it calls topologically equivalent. As there, this library always writes the qualifier for metrics. For **norms** there is no fork to guard against: the condition displayed above is the only one anyone calls equivalence of norms, and it is always the Lipschitz-strength one.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \\in X$ and let $r \\in \\mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define $$B(x,r) := \\{\\, y \\in X : d(x,y) < r \\,\\}, \\qquad \\bar B(x,r) := \\{\\, y \\in X : d(x,y) \\le r \\,\\}, \\qquad S(x,r) := \\{\\, y \\in X : d(x,y) = r \\,\\}.$$ $B(x,r)$ is the **open ball**, $\\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. **Immediate consequences of the definitions.** For every $x \\in X$ and $r > 0$: - $x \\in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]); in particular open and closed balls are nonempty. - $B(x,r) \\subseteq \\bar B(x,r)$ and $S(x,r) \\subseteq \\bar B(x,r)$, and $\\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of the order of $\\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]): each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$. - If $0 < s \\le r$ then $B(x,s) \\subseteq B(x,r)$ and $\\bar B(x,s) \\subseteq \\bar B(x,r)$, by transitivity of the order. - Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the radius convention, and it forces it for the **open** ball only: if $r \\le 0$ then $B(x,r) = \\{y : d(x,y) < r\\}$ is empty, because $d(x,y) \\ge 0 \\ge r$ for every $y$. The other two sets behave differently at $r = 0$, and the convention $r > 0$ excludes them for uniformity rather than for emptiness: $\\bar B(x,0) = S(x,0) = \\{x\\}$, since $d(x,y) \\le 0$ together with $d(x,y) \\ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all three sets are empty. **A sphere may be empty, and so the three sets are not on a par.** For $r > 0$ the open and closed balls always contain $x$, but nothing in the definition produces a point at distance exactly $r$ from $x$. If a metric takes only the values $0$ and $1$, as the discrete metric on the companion page does, then $S(x,2) = \\emptyset$ while $B(x,2) = \\bar B(x,2)$ is the whole space. So nonemptiness of a sphere is never available by convention: where it is used, it is proved. **The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and not on $x$ and $r$ alone. When more than one space or more than one metric is in play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\\bar B$ and $S$. This matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a ball of a subspace is the trace on it of a ball of the ambient space, and the two are different sets.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every $a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$; we write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-square-monotone",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field. For $a, b \\ge 0$: $$a < b \\iff a^2 < b^2, \\qquad a \\le b \\iff a^2 \\le b^2.$$ More generally, for arbitrary $a, b \\in F$, $a^2 < b^2 \\iff |a| < |b|$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of $x \\in F$ is $$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$\\lVert e_0\\rVert_1 = |1|+|0| = 1$, $\\lVert e_0\\rVert_2 = \\sqrt{1^{2}+0^{2}} = \\sqrt{1} = 1$, and $\\lVert e_0\\rVert_\\infty = \\max\\{1,0\\} = 1$.",
      "step": "1.1",
      "inputs": [
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$\\lVert u\\rVert_1 = |1|+|1| = \\iota(2)$, $\\lVert u\\rVert_2 = \\sqrt{1^{2}+1^{2}} = \\sqrt{\\iota(2)}$, and $\\lVert u\\rVert_\\infty = \\max\\{1,1\\} = 1$.",
      "step": "1.2",
      "inputs": [
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "The inclusions $B_1 \\subseteq B_2 \\subseteq B_\\infty$ follow from the chain: $\\lVert x\\rVert_1 \\le 1$ gives $\\lVert x\\rVert_2 \\le 1$, and that gives $\\lVert x\\rVert_\\infty \\le 1$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "At $x = e_0$ the first inequality of [L1] reads $1 \\le 1$ and the second reads $1 \\le 1$: both are equalities, so neither $\\lVert\\cdot\\rVert_\\infty \\le \\lVert\\cdot\\rVert_2$ nor $\\lVert\\cdot\\rVert_2 \\le \\lVert\\cdot\\rVert_1$ can be improved by a constant smaller than $1$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "At $x = u$ the third inequality of [L1] reads $\\iota(2) \\le \\iota(2)\\cdot 1$ and the fourth reads $\\iota(2) \\le \\sqrt{\\iota(2)}\\cdot\\sqrt{\\iota(2)} = \\iota(2)$: both are equalities, so the constants $\\iota(2)$ and $\\sqrt{\\iota(2)}$ are best possible.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "The inclusions are strict: $u$ has $\\lVert u\\rVert_\\infty = 1$ and $\\lVert u\\rVert_2 = \\sqrt{\\iota(2)} > 1$ since $\\iota(2) > 1$, so $u \\in B_\\infty \\setminus B_2$; and $w := \\bigl(3/\\iota(5)\\bigr)u$ has $\\lVert w\\rVert_1 = \\iota(2)\\cdot 3/\\iota(5) = \\iota(6)/\\iota(5) > 1$ while $\\lVert w\\rVert_2 = \\sqrt{\\iota(2)}\\cdot 3/\\iota(5)$ satisfies $\\lVert w\\rVert_2^{2} = \\iota(2)\\cdot\\iota(9)/\\iota(25) = \\iota(18)/\\iota(25) < 1$, so $w \\in B_2\\setminus B_1$.",
      "step": "2.3",
      "inputs": [
        "step 1.2",
        "L2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Steps 2.1 and 2.2 exhibit an attaining vector for each of the four inequalities, and steps 1.3 and 2.3 give the strict inclusions of the unit balls.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 2.2",
        "step 1.3",
        "step 2.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "ex-p-norm-comparison-constants-on-r2: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: At $x = e_0$ the first inequality of [L1] reads $1 \\le 1$ and the second reads $1 \\le 1$: both are equalities, so neither $\\lVert\\cdot\\rVert_\\infty \\le \\lVert\\cdot\\rVert_2$ nor $\\lVert\\cdot\\rVert_2 \\le \\lVert\\cdot\\rVert_1$ can be improved by a constant smaller than $1$."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "ex-p-norm-comparison-constants-on-r2: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.1: At $x = e_0$ the first inequality of [L1] reads $1 \\le 1$ and the second reads $1 \\le 1$: both are equalities, so neither $\\lVert\\cdot\\rVert_\\infty \\le \\lVert\\cdot\\rVert_2$ nor $\\lVert\\cdot\\rVert_2 \\le \\lVert\\cdot\\rVert_1$ can be improved by a constant smaller than $1$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "ex-p-norm-comparison-constants-on-r2: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "ex-p-norm-comparison-constants-on-r2: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "ex-p-norm-comparison-constants-on-r2: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "ex-p-norm-comparison-constants-on-r2: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-equivalent-norms",
    "declared_target": "def-equivalent-norms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-schwarz-finite",
    "declared_target": "thm-cauchy-schwarz-finite",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-ball",
    "declared_target": "def-metric-ball",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
    "source": "ex-p-norm-comparison-constants-on-r2",
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
[]
```

## Full exact-current text of every cited or declared item (19)

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

### `def-equivalent-norms`

````markdown
---
id: def-equivalent-norms
kind: definition
title: "Equivalent norms, and the dictionary with equivalent metrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-metrics, thm-metric-equivalence-hierarchy, def-metric-topology, def-metric-convergence, def-cauchy-in-metric, def-metric-uniform-continuity, lem-bounded-remetrisation, def-vector-space, lem-of-inverse-positive]
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
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $\mathbb{R}$ ([[def-vector-space]]) and let $M$
and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are
**equivalent** when there are reals $c > 0$ and $C > 0$ with

$$c\,M(v) \;\le\; N(v) \;\le\; C\,M(v) \qquad \text{for every } v \in V .$$

The constants are not part of the data and are not unique: any smaller $c$ and
any larger $C$ serve as well.

### This is an equivalence relation on the norms on $V$

- **Reflexive:** take $c = C = 1$.
- **Symmetric:** from $cM \le N \le CM$ and $c, C > 0$ one gets
  $C^{-1}N \le M \le c^{-1}N$, dividing by the positive constants
  ([[lem-of-inverse-positive]]).
- **Transitive:** if $cM \le N \le CM$ and $c'N \le P \le C'N$ then
  $c'c\,M \le P \le C'C\,M$, and $c'c > 0$, $C'C > 0$, a product of positives
  being positive.

### The dictionary with equivalent metrics

Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics
([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed
condition gives

$$c\,d_M(u,w) \;\le\; d_N(u,w) \;\le\; C\,d_M(u,w) \qquad \text{for all } u, w \in V ,$$

which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense
of [[def-equivalent-metrics]], with $\alpha = c$ and $\beta = C$. That is the
**strongest** of the three tiers that item distinguishes: by
[[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform
equivalence, which implies topological equivalence. So equivalent norms give

- the same open sets, hence the same closed sets, closures and interiors
  ([[def-metric-topology]]);
- the same uniformly continuous maps into and out of $V$
  ([[def-metric-uniform-continuity]]);
- the same convergent sequences with the same limits, and the same Cauchy
  sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]).

The last line deserves its two-line verification, since it is used constantly
below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If
$d_M(v_k, v) \to 0$ then $0 \le d_N(v_k,v) \le C\,d_M(v_k,v)$, so given a
rational $\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \varepsilon/C$
serves for $d_N$; the converse uses $d_M \le c^{-1}d_N$ in the same way. The
Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular
$(V, d_M)$ is complete if and only if $(V,d_N)$ is.

**Naming.** Many texts say *strongly equivalent* for what
[[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent*
for what it calls topologically equivalent. As there, this library always writes
the qualifier for metrics. For **norms** there is no fork to guard against: the
condition displayed above is the only one anyone calls equivalence of norms, and
it is always the Lipschitz-strength one.

## Remarks

- **The converse of the dictionary fails.** A metric on $V$ that is equivalent to
  a norm metric need not itself come from a norm: [[lem-bounded-remetrisation]]
  turns any metric $d$ into $d' = \min\{d,1\}$, uniformly equivalent to $d$ and
  bounded, and a bounded metric on a nonzero vector space is not induced by any
  norm, since absolute homogeneity would make $d'(\lambda v, 0)$ unbounded in
  $\lambda$ ([[def-norm-and-normed-space]]). So "equivalent to a norm metric" is
  strictly weaker than "induced by an equivalent norm".

- **Equivalence is a statement about a fixed vector space.** Two norms on
  different spaces are never compared. On $\mathbb{R}^{n}$ with $n \ge 1$ the
  norms $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
  $\lVert\cdot\rVert_\infty$ of [[def-p-norms-on-rn]] are equivalent, with
  explicit constants proved in
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]; that every
  pair of norms on $\mathbb{R}^{n}$ is equivalent is
  [[thm-all-norms-on-rn-are-equivalent]]. Neither statement survives to spaces
  that are not finite-dimensional, and the companion page carries the witness.

- **Equivalence says nothing about the geometry.** Equivalent norms have the same
  convergent sequences and the same open sets; they may still have quite
  different unit balls, and one of them may come from an inner product while the
  other does not. [[lem-p-norms-are-norms-and-induce-the-published-metrics]]
  records the metric identifications and nothing more.
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

### `def-metric-ball`

````markdown
---
id: def-metric-ball
kind: definition
title: "Open ball, closed ball and sphere in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-real-order, lem-metric-nonnegativity,
       def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [def-open-ball, def-closed-ball, def-sphere]
landmark: true
short: "$B(x,r)$"
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
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## Remarks

- **The names "open ball" and "closed ball" are justified, not merely
  suggestive.** That $B(x,r)$ is an open set and $\bar B(x,r)$ a closed set in
  the metric topology is proved in [[thm-metric-open-set-algebra]]; the words are
  used here only as names for the three sets displayed above.
- **The closed ball is not in general the closure of the open ball**, and the
  sphere is not in general the boundary of either. Both failures are recorded on
  this page as [[fs-closed-ball-is-the-closure-of-the-open-ball]] and witnessed
  on the companion page. The safe reading of the three names is the displayed
  one and nothing more.
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

### `thm-cauchy-schwarz-finite`

````markdown
---
id: thm-cauchy-schwarz-finite
kind: theorem
title: "The Cauchy-Schwarz inequality for finite sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, lem-finite-sum-laws, lem-of-square-positive, lem-of-zero-mult, thm-of-square-roots, def-integer-power, lem-of-square-monotone, lem-of-abs-value, def-abs-value, lem-of-sign-rules, lem-of-add-order, lem-of-inverse-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$(\\sum a_k b_k)^2 \\le \\sum a_k^2 \\sum b_k^2$"
proof_strategy: direct
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Young, Hölder, and Minkowski inequalities (Oregon State University)"
      url: "https://math.oregonstate.edu/~show/old/142_Luenberger.pdf"
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.35)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$ be
reals, with finite sums as in [[def-finite-sum]]. Then

$$\Big(\sum_{k<n} a_k b_k\Big)^{2} \;\le\; \Big(\sum_{k<n} a_k^{2}\Big)\Big(\sum_{k<n} b_k^{2}\Big),$$

and, in root form ([[thm-of-square-roots]]),

$$\Big|\sum_{k<n} a_k b_k\Big| \;\le\; \sqrt{\sum_{k<n} a_k^{2}} \; \sqrt{\sum_{k<n} b_k^{2}}.$$

Equality holds in the first display if and only if the two lists are
proportional, in the symmetric sense that there is a pair
$(\lambda, \mu) \ne (0,0)$ of reals with $\lambda a_k = \mu b_k$ for every
$k < n$.

**No root is used in the proof of the squared form.** That form is an identity
plus a sign argument in the ordered field, and the root form is only a
restatement of it through the monotonicity of squaring on the nonnegatives
([[lem-of-square-monotone]]); the root enters nowhere but the last step, where
that restatement is made and [[thm-of-square-roots]] is what supplies the
square-root symbol. This matters here, because it makes the squared
inequality independent of the existence theorem for roots.

## Facts & Assumptions

**Given:** A natural $n$ and reals $a_0, \dots, a_{n-1}$, $b_0, \dots, b_{n-1}$. Write $A := \sum_{k<n} a_k^{2}$, $B := \sum_{k<n} a_k b_k$ and $C := \sum_{k<n} b_k^{2}$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, and the fact that a sum of nonnegative terms is nonnegative and vanishes only if every term vanishes.

[L2] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $x^{2} \ge 0$ for every $x$, and $x^{2} = 0$ only for $x = 0$; and a product with a zero factor vanishes, $0 \cdot x = 0$ ([[lem-of-zero-mult]]).

[L3] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$.

[L4] Monotonicity of squaring ([[lem-of-square-monotone]]): for $x, y \ge 0$, $x \le y \iff x^{2} \le y^{2}$; and $|x|^{2} = x^{2}$ with $|x| \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] Order arithmetic in an ordered field: adding inequalities ([[lem-of-add-order]]) and scaling an inequality by a positive element ([[lem-of-sign-rules]], claim 4) are both stated there for the STRICT order alone, so the nonstrict uses below are those statements together with the case of equality, settled by trichotomy ([[def-ordered-field]]); the inverse of a positive element is positive ([[lem-of-inverse-positive]], claim 1); and a nonzero factor cancels, since $\lambda x = 0$ with $\lambda \ne 0$ gives $x = \lambda^{-1}(\lambda x) = \lambda^{-1} \cdot 0 = 0$, a product with a zero factor ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 For every $t \in \mathbb{R}$ each term $(a_k t + b_k)^{2}$ is nonnegative, so the sum is nonnegative, and expanding with additivity and scaling gives $0 \le \sum_{k<n}(a_k t + b_k)^{2} = A t^{2} + 2 B t + C$. [L1, L2]

1.2 In particular $A \ge 0$ and $C \ge 0$, being sums of squares. [L1, L2]

1.3 Proportionality forces equality: assume $\lambda a_k = \mu b_k$ for all $k < n$ with $(\lambda, \mu) \ne (0,0)$; if $\mu \ne 0$ then $b_k = c a_k$ with $c = \lambda/\mu$, so $B = cA$ and $C = c^{2}A$ by scaling, whence $B^{2} = c^{2}A^{2} = A\big(c^{2}A\big) = AC$; and if $\mu = 0$ then $\lambda \ne 0$ forces $a_k = 0$ for all $k$, so $A = B = 0$ and both sides vanish. [L1, L5]

2.1 Suppose first $A = 0$: then every term of $\sum_{k<n} a_k^{2}$ vanishes, so $a_k = 0$ for all $k < n$, hence $B = \sum_{k<n} 0 \cdot b_k = 0$ and both sides of the squared inequality are $0$, so it holds with equality; and the pair $(\lambda, \mu) = (1, 0)$ satisfies $\lambda a_k = 0 = \mu b_k$. [step 1.2, L1, L2]

2.2 Suppose instead $A > 0$ and substitute $t = -B/A$ into step 1.1: $0 \le A\frac{B^{2}}{A^{2}} - 2\frac{B^{2}}{A} + C = C - \frac{B^{2}}{A}$, so $\frac{B^{2}}{A} \le C$, and multiplying by $A > 0$ gives $B^{2} \le AC$. [step 1.1, step 1.2, L5]

3.1 The squared inequality therefore holds in both cases, which exhaust the possibilities since $A \ge 0$. [step 2.1, step 2.2, step 1.2]

3.2 Equality forces proportionality: in the case $A = 0$ this was step 2.1; in the case $A > 0$, if $B^{2} = AC$ then putting $t_0 = -B/A$ in step 1.1 gives $\sum_{k<n}(a_k t_0 + b_k)^{2} = A t_0^{2} + 2Bt_0 + C = C - \frac{B^{2}}{A} = 0$, so every term vanishes and $b_k = -t_0 a_k$ for all $k$, and the pair $(\lambda, \mu) = (-t_0, 1) \ne (0,0)$ works. [step 1.1, step 2.1, step 2.2, L1, L2, L5]

4.1 The root form: by step 3.1, $|B|^{2} = B^{2} \le AC = \big(\sqrt{A}\,\sqrt{C}\big)^{2}$, and both $|B|$ and $\sqrt{A}\sqrt{C}$ are nonnegative, so monotonicity of squaring on the nonnegatives gives $|B| \le \sqrt{A}\,\sqrt{C}$; note also that $\sqrt{A}\sqrt{C}$ is the nonnegative square root of $AC$, by uniqueness. [step 3.1, step 1.2, L3, L4] ∎
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

