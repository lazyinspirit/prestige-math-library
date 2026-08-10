# Audit proof-refuter brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- critical risk (12): 21 declared dependencies; 19 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (21 outgoing relationships)

## Target item — `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`

Normalized current SHA-256: `c19057e7c283f0dc2cfcdc6fc7ff8818497f04cf712514e28ebcc60a2ec03a9c`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension
kind: false-statement
title: "FALSE: a sequence in $\\mathbb{R}^{n}$ whose coordinate sequences are each bounded converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-bolzano-weierstrass-in-rn, thm-componentwise-convergence-and-completeness, lem-limit-unique, lem-subsequence-inherits-limit, thm-convergence-iff-limsup-equals-liminf, lem-alternating-sequence, def-metric-convergence, def-sequence, def-real-limit, lem-metrics-on-rn, def-p-norms-on-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-convergent-implies-bounded, lem-standard-basis-of-f-n, def-isometry-and-metric-embedding, def-metric-bounded-diameter, lem-of-naturals-positive, def-canonical-natural, lem-index-map-grows, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $n \ge 1$ and let $\bigl(x^{(k)}\bigr)$ be a sequence in
$\mathbb{R}^{n}$ such that every coordinate sequence
$k \mapsto x^{(k)}_j$ $(j<n)$ is bounded ([[def-sequence]]). Then
$\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{n}, d_2)$
([[def-metric-convergence]], [[lem-metrics-on-rn]]).

**The claim conflates two theorems.** What is true about boundedness is
[[cor-bolzano-weierstrass-in-rn]]: a bounded sequence has a convergent
**subsequence**. What is true componentwise is
[[thm-componentwise-convergence-and-completeness]] clause 1, which is about
**convergence** of the coordinate sequences and says nothing about boundedness.
The false claim takes the hypothesis of the first and the conclusion of the
second.

**The witness is the smallest possible.** Take $n = 1$ and let
$x^{(k)} \in \mathbb{R}^{1}$ be the function $1 \to \mathbb{R}$ with value
$\varepsilon_k$ at $0$, where $(\varepsilon_k)$ is the alternating sequence
([[lem-alternating-sequence]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$, with $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$ and $|\varepsilon_k| = 1$; its even and odd index maps $e$ and $o$, strictly increasing with $\varepsilon_{e_l} = 1$ and $\varepsilon_{o_l} = -1$ for every $l$ ([[lem-alternating-sequence]]); and the sequence $x^{(k)} \in \mathbb{R}^{1}$ with $x^{(k)}_0 = \varepsilon_k$.

[A1] The refuted claim, at $n = 1$ and this sequence: $\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{1},d_2)$.

[L1] The alternating sequence and its index maps, and $|\varepsilon_k| = 1$ ([[lem-alternating-sequence]], [[lem-of-abs-value]], [[lem-index-map-grows]]).

[L2] Convergence in $\mathbb{R}^{n}$ for $n \ge 1$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[lem-standard-basis-of-f-n]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L3] A subsequence of a convergent real sequence converges to the same limit, and a real sequence has at most one limit ([[lem-subsequence-inherits-limit]], [[lem-limit-unique]], [[def-real-limit]]).

[L4] A constant real sequence converges to its value ([[def-real-limit]]).

[L5] $1 \ne -1$, since $1-(-1) = \iota(2) > 0$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L6] A bounded sequence in $\mathbb{R}^{n}$ has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]], [[def-metric-bounded-diameter]], [[def-isometry-and-metric-embedding]]); and a convergent real sequence is bounded ([[lem-convergent-implies-bounded]]).

## Refutation

**Proof technique:** direct.

1.1 The only coordinate sequence of $\bigl(x^{(k)}\bigr)$ is $k \mapsto \varepsilon_k$, and it is bounded: $|\varepsilon_k| = 1$ for every $k$, so $M = 1$ works. So the hypothesis of the refuted claim is met. [L1]

1.2 The subsequence $l \mapsto \varepsilon_{e_l}$ is constantly $1$ and converges to $1$; the subsequence $l \mapsto \varepsilon_{o_l}$ is constantly $-1$ and converges to $-1$; both index maps are strictly increasing. [L1, L4]

2.1 The real sequence $(\varepsilon_k)$ does not converge: if it converged to $L$, both subsequences of step 1.2 would converge to $L$, so $L = 1$ and $L = -1$ by uniqueness of limits, contradicting $1 \ne -1$. [step 1.2, L3, L5]

3.1 By the componentwise criterion, $\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{1},d_2)$ if and only if $(\varepsilon_k)$ converges in $\mathbb{R}$; by step 2.1 it does not. So [A1] fails while the hypothesis holds, and the claim is false. [step 1.1, step 2.1, A1, L2]

4.1 The true statement in this neighbourhood is that the sequence has a convergent **subsequence**: its range is bounded, so [L6] applies, and step 1.2 exhibits two convergent subsequences with different limits. [step 1.1, step 1.2, L6] ∎

## Remarks

- **The same witness separates the two notions on the real line.** Boundedness of a real sequence gives a convergent subsequence and nothing more, and the alternating sequence has limit inferior $-1$ and limit superior $1$, so by [[thm-convergence-iff-limsup-equals-liminf]] it cannot converge. That is a second route to step 2.1; the one taken above uses only uniqueness of limits.

- **Componentwise boundedness and boundedness agree, so nothing is gained by weakening the hypothesis.** For $n \ge 1$ the comparison chain $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3) shows that a sequence in $\mathbb{R}^{n}$ has bounded range if and only if every coordinate sequence is bounded. So the refuted claim is exactly the claim that a bounded sequence converges, restated coordinatewise.

- **The converse direction is fine.** A convergent sequence in $\mathbb{R}^{n}$ does have bounded coordinate sequences, each coordinate sequence being convergent by [[thm-componentwise-convergence-and-completeness]] clause 1 and a convergent real sequence being bounded ([[lem-convergent-implies-bounded]]). Only the direction asserted above fails.
````

## Wave 12 provenance row

```json
{
  "id": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "FALSE: a sequence in $\\\\mathbb{R}^{n}$ whose coordinate sequences are each bounded converges: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "lem-alternating-sequence",
      "source_section": "Statement",
      "quote": "Let $\\sigma$ be the successor on $\\mathbb{N}$ ([[def-natural-numbers]]). There are functions $e, o : \\mathbb{N} \\to \\mathbb{N}$ and a sequence $(s_k)$ of reals ([[def-sequence]]) with the following properties. 1. **The index maps.** $e$ is the unique function with $e_0 = 0$ and $e_{\\sigma(j)} = \\sigma(\\sigma(e_j))$, and $o$ the unique function with $o_0 = \\sigma(0)$ and $o_{\\sigma(j)} = \\sigma(\\sigma(o_j))$. Both are **strictly increasing**. 2. **The partition.** $\\mathbb{N}$ is the **disjoint union** of the ranges of $e$ and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for exactly one $i$, and never both. 3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with $$s_0 = 1, \\qquad s_{\\sigma(k)} = -s_k \\quad (k \\in \\mathbb{N}).$$ 4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and $$s_{e_j} = 1, \\qquad s_{o_j} = -1 \\qquad (j \\in \\mathbb{N}),$$ that is $s \\circ e$ is constantly $1$ and $s \\circ o$ constantly $-1$. This is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and $o_j = 2j+1$, presented by the recursions that its proofs actually use. It is collected here once because three separate items on this page and its companion need an alternating or interleaved witness, and rebuilding the recursion inside each of them is what this lemma exists to prevent.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "Let $n : \\mathbb{N} \\to \\mathbb{N}$ be a function, written $k \\mapsto n_k$, and recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$ ([[def-sequence]], [[def-nat-order]]). 1. **Consecutive comparisons suffice.** If $n_i < n_{\\sigma(i)}$ for every $i \\in \\mathbb{N}$, then $n$ is strictly increasing. 2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every $k \\in \\mathbb{N}$. Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is what every later subsequence argument uses.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-componentwise-convergence-and-completeness",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the Euclidean metric $d_2$ of [[lem-metrics-on-rn]], and let $\\bigl(x^{(j)}\\bigr)_{j\\in\\mathbb{N}}$ be a sequence in $\\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write $\\bigl(x^{(j)}_k\\bigr)_{j\\in\\mathbb{N}}$ for the $k$-th **coordinate sequence**, a sequence of reals ([[def-sequence]]). Then: 1. **Convergence is componentwise.** For $x \\in \\mathbb{R}^{n}$, $x^{(j)} \\to x$ in $(\\mathbb{R}^{n}, d_2)$ if and only if $x^{(j)}_k \\to x_k$ in $\\mathbb{R}$ for every $k<n$ ([[def-real-limit]]). 2. **Cauchyness is componentwise.** $\\bigl(x^{(j)}\\bigr)$ is Cauchy in $(\\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every coordinate sequence is Cauchy in $\\mathbb{R}$. 3. **Completeness in every norm.** For every norm $N$ on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]) the metric space $(\\mathbb{R}^{n}, d_N)$ is complete ([[def-complete-metric-space]]). **Clause 3 is obtained by citation and is not reproved here.** [[thm-euclidean-space-complete]] clause 2 states that $(\\mathbb{R}^{n},d_2)$ is complete, **for $n \\ge 1$ only**, and this theorem carries that hypothesis forward without weakening it; what is added is the passage from $d_2$ to an arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary of [[def-equivalent-norms]].",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms of [[def-p-norms-on-rn]]. Then: 1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]). 2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$. 3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$, $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$ where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published [[lem-metrics-on-rn]]. So the metric induced by each of these three norms ([[def-norm-and-normed-space]]) **is** the correspondingly named published metric, not merely one equivalent to it. **Consequence, used repeatedly below and stated once here.** By clause 3 at $p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces page and the metric space underlying the normed space $(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel ([[thm-heine-borel-rn]] clause 2) and the compactness equivalences ([[thm-metric-compactness-equivalences]]) are statements about this page's normed space, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**. Nothing below cites any of those three theorems for $n = 0$. **Why this lemma exists.** Without it the library would hold a norm-induced metric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with no recorded relation, and every later citation would have to guess which was meant. The proof of clause 3 is a comparison of two written expressions; the value is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about $\\mathbb{R}^{n}$ with $n \\ge 1$.** 1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every $p \\in \\mathbb{N}$ and every list $u : p \\to V$ ([[def-linear-combination-and-span]]), $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$ and for all $u, w \\in V$, $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$ Now let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of [[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural ([[def-canonical-natural]]). 2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a nonempty finite set of reals ([[lem-standard-basis-of-f-n]], [[lem-finite-set-has-max]]). Then $C \\ge 0$ and $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$ 3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$, $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$ In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$, with the constants displayed ([[def-equivalent-norms]]). 4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is Lipschitz with constant $C\\sqrt{\\iota(n)}$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]). **Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to exist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a maximum over the empty index set and does not exist, exactly as in [[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis on the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-subsequence-inherits-limit",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$ ([[def-sequence]], [[def-real-limit]]), and let $n : \\mathbb{N} \\to \\mathbb{N}$ be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$. **Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to different limits, then $(x_k)$ does not converge.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-limit-unique",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \\in \\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit, and when a limit exists it may be denoted $\\lim_{k} x_k$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-bolzano-weierstrass-in-rn",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$ and let $\\bigl(x^{(j)}\\bigr)_{j\\in\\mathbb{N}}$ be a sequence in $\\mathbb{R}^{n}$ whose range $\\{\\, x^{(j)} : j \\in \\mathbb{N} \\,\\}$ is a bounded subset of $(\\mathbb{R}^{n}, d_2)$ ([[def-metric-bounded-diameter]], [[lem-metrics-on-rn]]). Then there are a strictly increasing $i : \\mathbb{N} \\to \\mathbb{N}$ ([[def-sequence]], [[lem-index-map-grows]]) and a point $p \\in \\mathbb{R}^{n}$ with $$x^{(i_j)} \\longrightarrow p \\quad \\text{in } (\\mathbb{R}^{n}, d_2)$$ ([[def-metric-convergence]]). By [[thm-all-norms-on-rn-are-equivalent]] the same statement holds with $d_2$ replaced by the metric of any norm on $\\mathbb{R}^{n}$, boundedness and convergence both being unchanged by that replacement ([[def-equivalent-norms]]). **This is assembled from published theorems and is not proved again by bisection.** The bisection is in [[thm-heine-borel-rn]], published at order 120; what is added here is the passage from compactness to sequential compactness and the reading of the conclusion in $\\mathbb{R}^{n}$. **Choice cost: none.** [[thm-heine-borel-rn]] is proved by bisection and uses no choice principle, and \"compact implies sequentially compact\" is a theorem of ZF ([[thm-compact-implies-the-other-compactness-forms]]). The five-way equivalence [[thm-metric-compactness-equivalences]] is **not** used, precisely because it is stated under countable choice and dependent choice ([[def-dependent-choice]]) and would overcharge this corollary; the arrow-by-arrow account is [[rem-compactness-choice-ledger-metric]].",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-metric-bounded-diameter",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A, B \\subseteq X$. **Bounded subset.** $A$ is **bounded** if $A = \\emptyset$ or there are $x_0 \\in X$ and a real $r > 0$ with $A \\subseteq B(x_0, r)$ ([[def-metric-ball]]). The space $(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself. **Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and bounded, and put $$D(A) := \\{\\, d(a,b) : a, b \\in A \\,\\} \\subseteq \\mathbb{R}.$$ Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and $r$ with $A \\subseteq B(x_0,r)$, every $a, b \\in A$ satisfy $d(a,b) \\le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry ([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]], [[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$ ([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\\mathbb{R}$ by the least-upper-bound property ([[def-complete-ordered-field]]), and that bound is unique ([[lem-sup-unique]]). Define $$\\operatorname{diam}(A) := \\sup D(A).$$ **Distance from a point to a set, for nonempty $A$ only.** Let $x \\in X$ and let $A$ be nonempty, and put $E(x,A) := \\{\\, d(x,a) : a \\in A \\,\\}$. Then $E(x,A)$ is nonempty and bounded below by $0$, since a metric is nonnegative ([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]]. Define $$d(x,A) := \\inf E(x,A).$$ **Distance between two sets, for nonempty $A$ and $B$ only.** Put $E(A,B) := \\{\\, d(a,b) : a \\in A,\\ b \\in B \\,\\}$, again nonempty and bounded below by $0$, and define $$d(A,B) := \\inf E(A,B).$$ **Every one of the three scope restrictions is load bearing.** In this library $\\sup$ and $\\inf$ denote real numbers and are written only after existence has been established; the extended real line is introduced on a later page and is not used for the suprema and infima taken here, and no convention $\\sup \\emptyset = -\\infty$ is in force in this development ([[rem-sup-conventions]]). Accordingly: - $\\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and** bounded. It is not defined for $A = \\emptyset$, and it is not defined, not even as an infinite value, for an unbounded $A$. - $d(x,A)$ is defined exactly when $A \\ne \\emptyset$, and $d(A,B)$ exactly when both $A$ and $B$ are nonempty. No boundedness is needed for these two, because $0$ is always a lower bound.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-isometry-and-metric-embedding",
      "source_section": "Definition",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]). **Isometric embedding and isometry.** A function $f : X \\to Y$ is an **isometric embedding** if $$d_Y\\big(f(x), f(x')\\big) = d_X(x,x') \\qquad \\text{for all } x, x' \\in X ,$$ and an **isometry** if it is in addition bijective ([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if some isometry between them exists. **Subspace metric.** Let $A \\subseteq X$ and let $$d_A := d_X \\restriction (A \\times A)$$ be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$: the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on triples of points, and each holds for points of $A$ because it holds for points of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the inclusion $A \\to X$ is an isometric embedding by construction. The metric topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$. **Balls of a subspace are traces of balls of the ambient space.** For $a \\in A$ and $r > 0$, $$B_A(a,r) = B_X(a,r) \\cap A ,$$ directly from the definitions: a point $z$ lies in the left side exactly when $z \\in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the ambient space is always written into the ball notation, and it is the source of every apparent paradox about balls in subspaces.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-convergent-implies-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$ ([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The only coordinate sequence of $\\bigl(x^{(k)}\\bigr)$ is $k \\mapsto \\varepsilon_k$, and it is bounded: $|\\varepsilon_k| = 1$ for every $k$, so $M = 1$ works. So the hypothesis of the refuted claim is met.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The subsequence $l \\mapsto \\varepsilon_{e_l}$ is constantly $1$ and converges to $1$; the subsequence $l \\mapsto \\varepsilon_{o_l}$ is constantly $-1$ and converges to $-1$; both index maps are strictly increasing.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The real sequence $(\\varepsilon_k)$ does not converge: if it converged to $L$, both subsequences of step 1.2 would converge to $L$, so $L = 1$ and $L = -1$ by uniqueness of limits, contradicting $1 \\ne -1$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By the componentwise criterion, $\\bigl(x^{(k)}\\bigr)$ converges in $(\\mathbb{R}^{1},d_2)$ if and only if $(\\varepsilon_k)$ converges in $\\mathbb{R}$; by step 2.1 it does not. So [A1] fails while the hypothesis holds, and the claim is false.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The true statement in this neighbourhood is that the sequence has a convergent **subsequence**: its range is bounded, so [L6] applies, and step 1.2 exhibits two convergent subsequences with different limits.",
      "step": "4.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. **False claim:** let $n \\ge 1$ and let $\\bigl(x^{(k)}\\bigr)$ be a sequence in $\\mathbb{R}^{n}$ such that every coordinate sequence $k \\mapsto x^{(k)}_j$ $(j<n)$ is bounded (). Then"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-bolzano-weierstrass-in-rn",
    "declared_target": "cor-bolzano-weierstrass-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-subsequence-inherits-limit",
    "declared_target": "lem-subsequence-inherits-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-convergence-iff-limsup-equals-liminf",
    "declared_target": "thm-convergence-iff-limsup-equals-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-alternating-sequence",
    "declared_target": "lem-alternating-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-convergent-implies-bounded",
    "declared_target": "lem-convergent-implies-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-isometry-and-metric-embedding",
    "declared_target": "def-isometry-and-metric-embedding",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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

## Full exact-current text of every cited or declared item (21)

### `cor-bolzano-weierstrass-in-rn`

````markdown
---
id: cor-bolzano-weierstrass-in-rn
kind: corollary
title: "For $n \\ge 1$ every bounded sequence in $\\mathbb{R}^n$ has a convergent subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-componentwise-convergence-and-completeness, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, thm-heine-borel-rn, thm-compact-implies-the-other-compactness-forms, thm-metric-compactness-equivalences, def-metric-compactness, def-metric-compactness-variants, def-metric-bounded-diameter, def-metric-ball, thm-bolzano-weierstrass, def-dependent-choice, lem-metrics-on-rn, def-metric-convergence, def-sequence, lem-subsequence-inherits-limit, lem-index-map-grows, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-isometry-and-metric-embedding, thm-of-square-roots, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ whose range
$\{\, x^{(j)} : j \in \mathbb{N} \,\}$ is a bounded subset of
$(\mathbb{R}^{n}, d_2)$ ([[def-metric-bounded-diameter]], [[lem-metrics-on-rn]]).
Then there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$
([[def-sequence]], [[lem-index-map-grows]]) and a point $p \in \mathbb{R}^{n}$
with

$$x^{(i_j)} \longrightarrow p \quad \text{in } (\mathbb{R}^{n}, d_2)$$

([[def-metric-convergence]]). By [[thm-all-norms-on-rn-are-equivalent]] the same
statement holds with $d_2$ replaced by the metric of any norm on
$\mathbb{R}^{n}$, boundedness and convergence both being unchanged by that
replacement ([[def-equivalent-norms]]).

**This is assembled from published theorems and is not proved again by
bisection.** The bisection is in [[thm-heine-borel-rn]], published at order 120;
what is added here is the passage from compactness to sequential compactness and
the reading of the conclusion in $\mathbb{R}^{n}$.

**Choice cost: none.** [[thm-heine-borel-rn]] is proved by bisection and uses no
choice principle, and "compact implies sequentially compact" is a theorem of ZF
([[thm-compact-implies-the-other-compactness-forms]]). The five-way equivalence
[[thm-metric-compactness-equivalences]] is **not** used, precisely because it is
stated under countable choice and dependent choice ([[def-dependent-choice]]) and
would overcharge this corollary; the arrow-by-arrow account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$ whose range is bounded in $(\mathbb{R}^{n},d_2)$.

[L1] Boundedness: a nonempty $A \subseteq X$ is bounded when $A \subseteq B(q,r)$ for some $q \in X$ and real $r > 0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L2] $d_2(u,v) = \lVert u-v\rVert_2$, $\lVert\cdot\rVert_2$ is a norm, and $|y_k| \le \lVert y\rVert_2$ for every $k<n$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3).

[L3] Closed boxes are compact: for reals $a_k \le b_k$ $(k<n)$ the set $Q = \{\, y \in \mathbb{R}^{n} : a_k \le y_k \le b_k \text{ for every } k<n \,\}$ is a compact subset of $(\mathbb{R}^{n},d_2)$ ([[thm-heine-borel-rn]] clause 1, [[def-metric-compactness]]).

[L4] In ZF, a compact metric space is countably compact and limit point compact, and each of those implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness-variants]]): every sequence in it has a subsequence converging to a point of it.

[L5] A compact subset $A$ of $X$ is one for which the metric subspace $(A,d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L6] Convergence in a metric space, and inheritance of limits by subsequences ([[def-metric-convergence]], [[lem-subsequence-inherits-limit]], [[lem-index-map-grows]]).

## Proof

**Proof technique:** direct.

1.1 The range of the sequence is nonempty and bounded, so there are $q \in \mathbb{R}^{n}$ and a real $r > 0$ with $d_2(x^{(j)}, q) < r$ for every $j \in \mathbb{N}$. [L1]

2.1 Put $M := r + \lVert q\rVert_2$, a real with $M > 0$. By the triangle inequality for the norm, $\lVert x^{(j)}\rVert_2 \le \lVert x^{(j)} - q\rVert_2 + \lVert q\rVert_2 = d_2(x^{(j)},q) + \lVert q\rVert_2 < M$ for every $j$. [step 1.1, L2]

3.1 For every $j$ and every $k<n$: $|x^{(j)}_k| \le \lVert x^{(j)}\rVert_2 < M$, hence $-M \le x^{(j)}_k \le M$. [step 2.1, L2]

4.1 Let $Q := \{\, y \in \mathbb{R}^{n} : -M \le y_k \le M \text{ for every } k<n \,\}$. Since $-M \le M$, $Q$ is a compact subset of $(\mathbb{R}^{n},d_2)$, and by step 3.1 every term $x^{(j)}$ lies in $Q$. [step 3.1, L3]

5.1 By [L5] the metric subspace $(Q, d_Q)$ is a compact metric space, and by [L4] it is sequentially compact. [step 4.1, L4, L5]

6.1 $\bigl(x^{(j)}\bigr)$ is a sequence in $Q$, so there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$ and $p \in Q$ with $x^{(i_j)} \to p$ in $(Q, d_Q)$. [step 4.1, step 5.1, L4, L6]

7.1 Since $d_Q$ is the restriction of $d_2$ to $Q \times Q$, the reals $d_Q(x^{(i_j)}, p)$ and $d_2(x^{(i_j)}, p)$ are equal for every $j$, so $x^{(i_j)} \to p$ in $(\mathbb{R}^{n},d_2)$ as well. [step 6.1, L5, L6]

8.1 So the bounded sequence $\bigl(x^{(j)}\bigr)$ has a subsequence converging in $(\mathbb{R}^{n},d_2)$, which is the claim. [step 6.1, step 7.1] ∎

## Remarks

- **The case $n = 1$ and the published one-dimensional theorem.** $\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is therefore **not literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value $t$ at $0$ is a bijection, and $d_2(\theta(s),\theta(t)) = \sqrt{(s-t)^{2}} = |s-t|$ ([[thm-of-square-roots]], [[lem-of-abs-value]]), so $\theta$ is an isometric bijection onto $\mathbb{R}^{1}$ ([[def-isometry-and-metric-embedding]]). Under that identification this corollary at $n = 1$ and the published [[thm-bolzano-weierstrass]] are the same statement, and neither is used to prove the other: the published theorem is proved on the real line, and the corollary above is proved from Heine-Borel in $\mathbb{R}^{n}$.

- **Boundedness of the sequence is boundedness of its range**, a set, and not a condition on each coordinate separately. The two do agree here, by step 3.1 in one direction and by [[thm-componentwise-convergence-and-completeness]] in the other; what does **not** follow from bounded coordinates is convergence, and the companion page carries that false statement.

- **What sequential compactness gives and what it does not.** It produces a convergent subsequence and says nothing about the original sequence. A bounded sequence need not converge, and a sequence with a convergent subsequence need not be bounded; both remarks are already recorded for the real line in [[thm-bolzano-weierstrass]].
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

### `def-isometry-and-metric-embedding`

````markdown
---
id: def-isometry-and-metric-embedding
kind: definition
title: "Isometry, isometric embedding, and the subspace metric on a subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-injection-surjection-bijection,
       def-metric-ball]
justified_by: []
aliases: [def-subspace-metric, def-isometry]
landmark: false
short: "isometry, subspace metric"
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
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

## Remarks

- **An isometric embedding is automatically injective**, and it identifies $X$
  with the subspace $f[X]$ of $Y$, topology and all; that is
  [[lem-isometry-is-an-embedding]]. The word *embedding* is therefore justified
  rather than merely suggestive.
- **A bijective isometric embedding has an isometric inverse.** If $f$ is an
  isometry then $f^{-1}$ satisfies
  $d_X(f^{-1}(y), f^{-1}(y')) = d_Y(y,y')$, because writing $y = f(x)$ and
  $y' = f(x')$ turns that into the defining identity of $f$. So "isometric" is a
  symmetric relation between metric spaces, and it is transitive because a
  composite of isometries is one.
- **Isometry is much finer than having the same topology.** Isometric spaces are
  homeomorphic, but $\mathbb{R}$ with $d(x,y) = |x-y|$ and $\mathbb{R}$ with
  $\min\{|x-y|, 1\}$ have the same topology and are not isometric, the second
  being bounded and the first not
  ([[lem-bounded-remetrisation]], [[lem-real-line-is-a-metric-space]]).
````

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-metric-convergence`

````markdown
---
id: def-metric-convergence
kind: definition
title: "Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-sequence, def-real-limit, def-subsequential-limit,
       lem-metric-nonnegativity, lem-rat-embeds-dense, def-natural-numbers,
       def-abs-value]
justified_by: []
aliases: [def-metric-limit]
landmark: true
short: "$x_k \\to x$ in $(X,d)$"
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## Remarks

- **A limit is a point of $X$, and uniqueness is a theorem.** Nothing in the
  definition rules out two limits; that a sequence in a metric space has at most
  one is [[lem-metric-limits-unique]], and its proof is where the separation
  axiom (M1) is spent. Reading the same definition with a pseudometric
  ([[def-metric-space]]) that is not a metric, that is one with $p(a,b) = 0$ for
  some $a \ne b$, limits are genuinely not unique: the constant sequence at $a$
  converges to $b$ as well.
- **Convergence is defined from the metric but determined by the topology.**
  It can be restated as "every open set containing $p$ contains $x_k$ for all
  large $k$", which follows from [[lem-metric-ball-neighbourhood-base]]; so it is
  unchanged by passing to a topologically equivalent metric
  ([[def-equivalent-metrics]]). That restatement is not made part of the
  definition, because the metric form is what every proof on this page uses.
- **The relation between convergence and closure** is
  [[thm-metric-sequential-closure]]: a point lies in the closure of $A$ exactly
  when some sequence in $A$ converges to it.
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

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `lem-alternating-sequence`

````markdown
---
id: lem-alternating-sequence
kind: lemma
title: "The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, lem-index-map-grows, def-sequence, def-natural-numbers, def-nat-addition, def-nat-order, thm-nat-linear-order, lem-nat-successor-neq-self, def-abs-value, lem-of-abs-value, def-real-order, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "Parity (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parity_(mathematics)"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §2.1 and §6.4 (recursive definitions; subsequences)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement

Let $\sigma$ be the successor on $\mathbb{N}$ ([[def-natural-numbers]]). There are
functions $e, o : \mathbb{N} \to \mathbb{N}$ and a sequence $(s_k)$ of reals
([[def-sequence]]) with the following properties.

1. **The index maps.** $e$ is the unique function with
   $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$, and $o$ the unique
   function with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$.
   Both are **strictly increasing**.
2. **The partition.** $\mathbb{N}$ is the **disjoint union** of the ranges of $e$
   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for
   exactly one $i$, and never both.
3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with
   $$s_0 = 1, \qquad s_{\sigma(k)} = -s_k \quad (k \in \mathbb{N}).$$
4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and
   $$s_{e_j} = 1, \qquad s_{o_j} = -1 \qquad (j \in \mathbb{N}),$$
   that is $s \circ e$ is constantly $1$ and $s \circ o$ constantly $-1$.

This is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and
$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is
collected here once because three separate items on this page and its companion
need an alternating or interleaved witness, and rebuilding the recursion inside
each of them is what this lemma exists to prevent.

## Facts & Assumptions

**Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).

[L1] Recursion theorem, including its uniqueness clause ([[thm-recursion]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

[L4] Consecutive comparisons suffice: if $n_i < n_{\sigma(i)}$ for every $i$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

[L6] Order in $\mathbb{R}$: $0 < 1$ ([[cor-of-one-positive]]), sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]), so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$; in particular $1 \ne -1$.

## Proof

**Proof technique:** induction.

1.1 Base case for claim 4: $|s_0| = |1| = 1$, since $1 > 0$ makes $|1| = 1$. [given, L5, L6, base]

1.2 Inductive hypothesis: fix $k \in \mathbb{N}$ and assume $|s_k| = 1$. [ih]

1.3 Both index maps satisfy consecutive strict comparisons: $e_j < \sigma(e_j) < \sigma(\sigma(e_j)) = e_{\sigma(j)}$, and likewise $o_j < o_{\sigma(j)}$, so $e$ and $o$ are strictly increasing and claim 1 holds, its uniqueness part being the uniqueness clause of the recursion theorem. [given, L1, L3, L4]

1.4 By induction, $s_{e_j} = 1$ for every $j$: the base case is $s_{e_0} = s_0 = 1$, and if $s_{e_j} = 1$ then $s_{e_{\sigma(j)}} = s_{\sigma(\sigma(e_j))} = -s_{\sigma(e_j)} = -(-s_{e_j}) = s_{e_j} = 1$. [given, L1, L2, L5]

1.5 By induction, $s_{o_j} = -1$ for every $j$: the base case is $s_{o_0} = s_{\sigma(0)} = -s_0 = -1$, and if $s_{o_j} = -1$ then $s_{o_{\sigma(j)}} = s_{\sigma(\sigma(o_j))} = -(-s_{o_j}) = s_{o_j} = -1$. [given, L1, L2, L5]

1.6 By induction on $n$, every natural number satisfies: either $n = e_i$ and $\sigma(n) = o_i$ for some $i$, or $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ for some $i$. The base case is $0 = e_0$ with $\sigma(0) = o_0$. For the successor step, if $n = e_i$ and $\sigma(n) = o_i$ then $\sigma(n) = o_i$ and $\sigma(\sigma(n)) = \sigma(\sigma(e_i)) = e_{\sigma(i)}$, which is the second alternative at $\sigma(n)$; and if $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ then $\sigma(n) = e_{\sigma(i)}$ and $\sigma(\sigma(n)) = \sigma(\sigma(o_i)) = o_{\sigma(i)}$, which is the first alternative at $\sigma(n)$. [given, L1, L2]

1.7 The sequence $(s_k)$ is the unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, by the uniqueness clause of the recursion theorem: this is claim 3. [given, L1]

2.1 Successor step for claim 4: $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$. [step 1.2, L5]

2.2 In particular every natural number lies in the range of $e$ or in the range of $o$, since each alternative of step 1.6 exhibits $n$ as such a value. [step 1.6]

2.3 The two ranges are disjoint: if $e_i = o_j$ for some $i, j$ then $1 = s_{e_i} = s_{o_j} = -1$, contradicting $1 \ne -1$. [step 1.4, step 1.5, L6]

2.4 Each of $e$ and $o$ is injective, being strictly increasing, so a natural number in the range of $e$ is $e_i$ for exactly one $i$, and likewise for $o$. [step 1.3, L3]

3.1 By the induction principle, $|s_k| = 1$ for every $k \in \mathbb{N}$; hence $|s_k| \le 1$ at every index and $(s_k)$ is bounded. Together with steps 1.4 and 1.5 this is claim 4. [step 1.1, step 2.1, step 1.4, step 1.5, L2]

4.1 Claim 2 follows: by step 2.2 every natural is in one of the two ranges, by step 2.3 not in both, and by step 2.4 the index realising it is unique. Claims 1, 2, 3 and 4 are therefore all established. [step 2.2, step 2.3, step 3.1, step 2.4, step 1.3, step 1.7, discharge-induction] ∎

## Remarks

- **Why the recursion rather than $(-1)^k$.** Written as a power, every one of the
  four claims would have to be unwound into the two recursion equations before it
  could be proved; written as a recursion, each is a two-line induction. The
  identification with $(-1)^k$ is available ([[def-integer-power]]) and is used
  nowhere.

- **The parity statement is genuinely proved, not assumed.** Claim 2 is where the
  work is: the covering half is the interleaved induction of step 1.6, which
  tracks $n$ and $\sigma(n)$ together because neither alone is preserved by the
  successor, and the disjointness half is settled by the *sequence*, since
  $s$ takes the value $1$ on one range and $-1$ on the other and $1 \ne -1$.
  Using the sequence to separate the two ranges is shorter than any direct parity
  argument and needs no arithmetic on $\mathbb{N}$ beyond the successor.

- **What consumes this lemma.** [[fs-convergent-subsequence-implies-bounded]]
  interleaves a constant sequence with an unbounded one along $e$ and $o$;
  [[ex-two-subsequential-limits]] multiplies $s$ by a null perturbation to get a
  sequence with exactly two subsequential limits; and
  [[cex-unbounded-with-convergent-subsequence]] is the witness for the first of
  those. The same sequence, built inline, refutes
  [[fs-bounded-implies-convergent]] on the previous page; that item predates this
  lemma and is left as it stands.
````

### `lem-convergent-implies-bounded`

````markdown
---
id: lem-convergent-implies-bounded
kind: lemma
title: "Every convergent sequence is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-finite-set-has-max, def-max-min, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "convergent implies bounded"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is
$M \in \mathbb{R}$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]); and $1$ is a rational $> 0$, since $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]]) and $0 < 1$ in every ordered field ([[cor-of-one-positive]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$ for every real $u$ ([[lem-of-abs-value]]).

[L4] Finite maxima: for every $n \in \mathbb{N}$ and all reals $a_0, \dots, a_n$ the set $\{a_0, \dots, a_n\}$ has a maximum ([[lem-finite-set-has-max]]); a maximum lies in the set and dominates every element of it ([[def-max-min]]).

[L5] Order arithmetic in $\mathbb{R}$: transitivity of $\le$ and of $<$; both mixed forms, $u < v \le w \Rightarrow u < w$ and $u \le v < w \Rightarrow u < w$, and the implication $u < v \Rightarrow u \le v$, all immediate from the reading of $u \le v$ as "$u < v$ or $u = v$" ([[def-complete-ordered-field]], [[def-ordered-field]]); and translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]).

[L6] The order on $\mathbb{N}$ is total, so every index $k$ satisfies $k < K$ or $k \ge K$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Apply convergence with the rational $\varepsilon = 1$: fix $K \in \mathbb{N}$ such that $|x_k - x| < 1$ for all $k \ge K$. [L1]

2.1 For every $k \ge K$ we have $|x_k| = |(x_k - x) + x| \le |x_k - x| + |x|$, while adding $|x|$ to both sides of $|x_k - x| < 1$ gives $|x_k - x| + |x| < 1 + |x| = |x| + 1$; composing the non-strict inequality with the strict one yields $|x_k| < |x| + 1$. [step 1.1, L2, L5]

2.2 Define $M := \max\{\, |x_0|, |x_1|, \dots, |x_{K-1}|, |x| + 1 \,\}$, the maximum of the finite list obtained by appending $|x| + 1$ to the first $K$ values $|x_0|, \dots, |x_{K-1}|$; the list is nonempty because its last entry is always present (when $K = 0$ the list is the single entry $|x| + 1$), so the maximum exists by [L4]. [step 1.1, L4, choose]

3.1 For every $k < K$ the value $|x_k|$ is one of the entries of that list, hence $|x_k| \le M$. [step 2.2, L4]

3.2 For every $k \ge K$ we have $|x_k| < |x| + 1 \le M$, since $|x| + 1$ is an entry of the list, hence $|x_k| \le M$. [step 2.1, step 2.2, L4, L5]

4.1 Every index satisfies $k < K$ or $k \ge K$, and in both cases $|x_k| \le M$; therefore $(x_k)$ is bounded. [step 3.1, step 3.2, L3, L6] ∎

## Remarks

- This is where [[lem-finite-set-has-max]] does its main work on this page: the first $K$ terms are bounded because a nonempty finite set of reals has a maximum, and that fact is proved once, by induction, rather than re-derived here. It is not the only consumer, and no claim of uniqueness is made: [[lem-null-times-bounded]] and [[rem-sequence-conventions]] cite the same lemma, each for a maximum of finitely many reals.

- The converse is false. A bounded sequence need not converge ([[fs-bounded-implies-convergent]]). What is true in that direction is the Bolzano-Weierstrass theorem, which requires a passage to a subsequence; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.

- Boundedness is exactly what makes [[lem-null-times-bounded]] applicable to a convergent factor, and that is how boundedness enters the product rule of [[thm-algebra-of-limits]].
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

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
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
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
````

### `lem-limit-unique`

````markdown
---
id: lem-limit-unique
kind: lemma
title: "A sequence has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, thm-of-archimedean, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits are unique"
proof_strategy: contradiction
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and reals $x, y$ such that $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: $(x_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in any ordered field, in particular in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L4] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$. Either route gives this: density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) applied to the pair $0 < \eta$; or the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$, which yields a natural $n \ge 1$ with $1/\eta < n$ and hence $0 < 1/n < \eta$ ([[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$. Trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; transitivity and irreflexivity of $<$; and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]). Adding two strict inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]). Multiplying by a positive: for $c > 0$, $a < b$ gives $ac < bc$ ([[lem-of-sign-rules]]). Halving a positive: $1 > 0$ ([[cor-of-one-positive]]), so $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]), hence $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $\eta/2 = \eta \cdot 2^{-1} > 0$ whenever $\eta > 0$ ([[lem-of-sign-rules]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices $K_1, K_2$ admit an index $k$ with $k \ge K_1$ and $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $x \ne y$. [assume-contra]

2.1 Then $x - y \ne 0$, so $|x - y| \ne 0$ while $|x - y| \ge 0$; by trichotomy $|x - y| > 0$, and hence $|x - y|/2 > 0$. [step 1.1, L3, L5]

3.1 Choose a rational $\varepsilon$ with $0 < \varepsilon < |x - y|/2$; multiplying that inequality by $2 > 0$ and using $(|x - y|/2) \cdot 2 = |x - y|$ gives $2\varepsilon < |x - y|$. [step 2.1, L4, L5, algebra, choose]

4.1 Since $(x_k)$ converges to $x$ there is $K_1$ with $|x_k - x| < \varepsilon$ for all $k \ge K_1$, and since $(x_k)$ converges to $y$ there is $K_2$ with $|x_k - y| < \varepsilon$ for all $k \ge K_2$. [step 3.1, L1]

5.1 Fix an index $k$ with $k \ge K_1$ and $k \ge K_2$; then $|x - y| = |(x - x_k) + (x_k - y)| \le |x - x_k| + |x_k - y| = |x_k - x| + |x_k - y|$, while adding the two strict inequalities of step 4.1 gives $|x_k - x| + |x_k - y| < \varepsilon + \varepsilon = 2\varepsilon$; composing the non-strict inequality with the strict one yields $|x - y| < 2\varepsilon$. [step 4.1, L2, L3, L5, L6]

6.1 Combining, $2\varepsilon < |x - y| < 2\varepsilon$, so $2\varepsilon < 2\varepsilon$, which contradicts irreflexivity of the strict order. [step 3.1, step 5.1, L5]

7.1 The assumption $x \ne y$ is therefore untenable, so $x = y$: a sequence of reals has at most one limit. [step 6.1, discharge-contradiction] ∎

## Remarks

- Uniqueness is what licenses the notation $\lim_{k} x_k$ and the phrase *the* limit. Without it the symbol would not denote. This library writes $\lim_k x_k$ only for sequences already known to converge, exactly as it writes $\sup S$ only for sets already known to have a supremum ([[rem-sup-conventions]]).

- The proof uses only that $\mathbb{R}$ is an ordered field in which arbitrarily small positive rationals exist, that is, an Archimedean ordered field ([[thm-of-archimedean]]). Completeness is not needed: limits are unique in $\mathbb{Q}$ too, where many sequences fail to have one.

- The hypothesis is genuinely about a single sequence having two limits. Two *different* sequences may of course share a limit, and a sequence with no limit at all is not excluded by anything here.
````

### `lem-metrics-on-rn`

````markdown
---
id: lem-metrics-on-rn
kind: lemma
title: "$\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-natural-numbers, def-finite-sum, thm-minkowski-finite,
       thm-cauchy-schwarz-finite, lem-finite-set-has-max, thm-of-square-roots,
       lem-of-abs-value, lem-finite-sum-laws, def-max-min, lem-of-square-monotone,
       lem-of-square-positive, lem-of-triangle-inequality, def-abs-value,
       def-integer-power, def-ordered-field, def-complete-ordered-field,
       lem-of-add-order]
justified_by: []
aliases: [def-euclidean-space]
landmark: true
short: "$\\mathbb{R}^n$ with $d_1, d_2, d_\\infty$"
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
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; and the lists $a_k := x_k - y_k$, $b_k := y_k - z_k$ for $k < n$, so that $a_k + b_k = x_k - z_k$. Write $A := \sum_{k<n} a_k^2$, $C := \sum_{k<n} b_k^2$ and $B := \sum_{k<n} a_k b_k$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, every single term is at most the sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L2] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$.

[L3] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Minkowski's inequality at the rational exponent $p = 1$ ([[thm-minkowski-finite]]): $\sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_k b_k\big| \le \sqrt{\sum_{k<n} a_k^2}\ \sqrt{\sum_{k<n} b_k^2}$.

[L6] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; in particular $\sqrt{c} = 0$ if and only if $c = 0$.

[L7] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $u^2 \ge 0$ always, and $u^2 = 0$ only for $u = 0$; and monotonicity of squaring on the nonnegatives, $s \le t \iff s^2 \le t^2$ for $s, t \ge 0$ ([[lem-of-square-monotone]]).

[L8] Maximum of a nonempty finite set of reals: it exists, it belongs to the set, and it is an upper bound of the set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Order arithmetic in $\mathbb{R}$: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below.

## Proof

**Proof technique:** direct.

1.1 Separation for $d_1$: $d_1(x,y) = \sum_{k<n}|a_k|$ is a sum of nonnegative terms, so it vanishes exactly when every $|a_k|$ vanishes, that is exactly when $x_k = y_k$ for all $k < n$, that is exactly when $x = y$. [L1, L2]

1.2 Separation for $d_2$: $d_2(x,y) = \sqrt{A}$ vanishes exactly when $A = 0$; $A$ is a sum of nonnegative terms, so $A = 0$ exactly when $a_k^2 = 0$ for every $k < n$, which happens exactly when every $a_k = 0$, that is exactly when $x = y$. [L1, L6, L7]

1.3 Separation for $d_\infty$: the maximum $d_\infty(x,y)$ belongs to $\{|a_k| : k < n\}$ and bounds it above, so it is $0$ exactly when every $|a_k| = 0$, that is exactly when $x = y$. [L2, L8]

1.4 Symmetry for all three: $|y_k - x_k| = |-(x_k - y_k)| = |x_k - y_k|$ and $(y_k - x_k)^2 = (x_k - y_k)^2$ for every $k < n$, so the three defining expressions are unchanged when $x$ and $y$ are exchanged. [L2, L7]

1.5 Triangle inequality for $d_1$: applying [L4] to the lists $(a_k)$ and $(b_k)$ gives $d_1(x,z) = \sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k| = d_1(x,y) + d_1(y,z)$. [L4]

1.6 Expanding with additivity and scaling: $\sum_{k<n}(a_k + b_k)^2 = \sum_{k<n}\big(a_k^2 + 2a_kb_k + b_k^2\big) = A + 2B + C$. [L1, algebra]

1.7 By [L5] and $B \le |B|$: $B \le \sqrt{A}\,\sqrt{C}$, and $A = (\sqrt{A})^2$, $C = (\sqrt{C})^2$ with $\sqrt{A}, \sqrt{C} \ge 0$. [L2, L5, L6]

1.8 Triangle inequality for $d_\infty$: for each $k < n$, $|a_k + b_k| \le |a_k| + |b_k| \le d_\infty(x,y) + d_\infty(y,z)$ because the two maxima bound their sets; so $d_\infty(x,y) + d_\infty(y,z)$ is an upper bound of $\{|a_k + b_k| : k < n\}$, and the maximum $d_\infty(x,z)$ of that set is one of its elements, whence $d_\infty(x,z) \le d_\infty(x,y) + d_\infty(y,z)$. [L3, L8, L9]

2.1 Combining steps 1.6 and 1.7: $\sum_{k<n}(a_k+b_k)^2 = A + 2B + C \le (\sqrt{A})^2 + 2\sqrt{A}\sqrt{C} + (\sqrt{C})^2 = \big(\sqrt{A} + \sqrt{C}\big)^2$. [step 1.6, step 1.7, L9, algebra]

3.1 Both $d_2(x,z) = \sqrt{\sum_{k<n}(a_k+b_k)^2}$ and $\sqrt{A} + \sqrt{C}$ are nonnegative, and by step 2.1 the square of the first is at most the square of the second, so monotonicity of squaring on the nonnegatives gives $d_2(x,z) \le \sqrt{A} + \sqrt{C} = d_2(x,y) + d_2(y,z)$. [step 2.1, L6, L7]

4.1 Each of $d_1$, $d_2$, $d_\infty$ satisfies (M1) by steps 1.1, 1.2 and 1.3, satisfies (M2) by step 1.4, and satisfies (M3) by steps 1.5, 3.1 and 1.8 respectively; hence all three are metrics on $\mathbb{R}^n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.8, step 3.1] ∎

## Remarks

- **$\mathbb{R}^n$ is defined ZFC-natively here**, as the set of functions from
  the von Neumann natural $n$ to $\mathbb{R}$, precisely so that its coordinates
  are indexed by $k < n$ and the finite-sum machinery of [[def-finite-sum]],
  [[thm-minkowski-finite]] and [[thm-cauchy-schwarz-finite]], all of which sum
  over $k < n$, applies without any reindexing.
- **No rational power appears anywhere above.** The triangle inequality for
  $d_2$ is obtained from Cauchy-Schwarz and the existence of square roots, not
  from Minkowski at $p = 2$, so this lemma does not depend on the theory of
  rational exponents. Minkowski is used only at $p = 1$, where its statement is
  the termwise sum of the two-term triangle inequality.
- **The three metrics are Lipschitz equivalent, with explicit constants,** and
  in particular have the same topology; that computation is on the companion
  page and is not needed here.
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

### `lem-subsequence-inherits-limit`

````markdown
---
id: lem-subsequence-inherits-limit
kind: lemma
title: "Subsequences inherit the limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequence, def-real-limit, lem-index-map-grows, lem-limit-unique, thm-nat-linear-order, def-nat-order]
justified_by: []
aliases: []
landmark: true
short: "subsequences keep the limit"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]), and let $n : \mathbb{N} \to \mathbb{N}$
be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.

**Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to
different limits, then $(x_k)$ does not converge.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$, and a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, so that $(x_{n_k})$ is a subsequence of $(x_k)$ ([[def-sequence]], [[def-real-limit]]).

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Growth of the index map: $n_k \ge k$ for every $k$ ([[lem-index-map-grows]]).

[L3] The order on $\mathbb{N}$ is transitive, so $n_k \ge k \ge K$ gives $n_k \ge K$ ([[thm-nat-linear-order]], [[def-nat-order]]).

[L4] A sequence has at most one limit ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(x_k)$ there is $K \in \mathbb{N}$ with $|x_j - x| < \varepsilon$ for every $j \ge K$. [L1]

2.1 For every $k \ge K$ we have $n_k \ge k \ge K$, so the estimate of step 1.1 applies at the index $j = n_k$ and gives $|x_{n_k} - x| < \varepsilon$. [step 1.1, L2, L3]

3.1 Since the rational $\varepsilon > 0$ was arbitrary, and the same threshold $K$ served, $(x_{n_k})$ converges to $x$. [step 2.1, L1]

4.1 Divergence test: suppose subsequences $(x_{n_k})$ and $(x_{m_k})$ converge to $a$ and $b$ with $a \ne b$. If $(x_k)$ converged, to $x$ say, then by step 3.1 both subsequences would converge to $x$, and uniqueness of limits would force $a = x$ and $b = x$, hence $a = b$, contrary to hypothesis; so $(x_k)$ does not converge. [step 3.1, L4] ∎

## Remarks

- A sequence is a subsequence of itself, via the identity index map $n_k = k$, which is strictly increasing. So "every subsequence converges to $x$" and "the sequence converges to $x$" are equivalent, and the lemma is the non-trivial half of that equivalence.

- The converse of the first claim is false: **one** convergent subsequence says nothing about the sequence ([[fs-subsequence-convergence-implies-convergence]]). It is the divergence test, not the convergence of a single subsequence, that is usable.

- The divergence test is the standard way to show a concrete sequence diverges, and it is how [[fs-bounded-implies-convergent]] is refuted. The opposite direction, extracting a convergent subsequence from a bounded sequence, is Bolzano-Weierstrass; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.
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

### `thm-convergence-iff-limsup-equals-liminf`

````markdown
---
id: thm-convergence-iff-limsup-equals-liminf
kind: theorem
title: "A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-reflection, lem-limsup-exists, lem-extended-reals-complete, def-real-limit, def-divergence-to-infinity, def-extended-reals, def-extended-limits, def-upper-bound, def-partial-order, def-sequence, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: true
short: "convergence $\\iff \\liminf = \\limsup$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\limsup$ and
$\liminf$ as in [[def-limsup-liminf]].

1. For $L \in \mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and
   only if** $\liminf_k x_k = \limsup_k x_k = L$.
2. $x_k \to +\infty$ ([[def-divergence-to-infinity]]) **if and only if**
   $\liminf_k x_k = \limsup_k x_k = +\infty$. Moreover $\liminf_k x_k = +\infty$
   on its own already forces $\limsup_k x_k = +\infty$.
3. $x_k \to -\infty$ **if and only if** $\liminf_k x_k = \limsup_k x_k = -\infty$,
   and $\limsup_k x_k = -\infty$ on its own already forces
   $\liminf_k x_k = -\infty$.

The three clauses combine into one statement about the extended line: for
$L \in \overline{\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in
$\overline{\mathbb{R}}$ ([[def-extended-limits]]) if and only if

$$\liminf_{k} x_k = \limsup_{k} x_k = L .$$

Since $\liminf_k x_k \le \limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the
single equation $\liminf_k x_k = \limsup_k x_k$ is therefore equivalent to
convergence in $\overline{\mathbb{R}}$, and the common value is the limit. A
sequence that neither converges nor diverges to $\pm\infty$ is exactly one for
which the inequality is strict.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and the quantities $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$, $i_n$, $\limsup_k x_k$ and $\liminf_k x_k$ exist in $\overline{\mathbb{R}}$ for every sequence; $i_n$ is the greatest lower bound of $T_n$ and $\liminf_k x_k$ the least upper bound of $\{i_n\}$, with the dual descriptions for $s_n$ and $\limsup_k x_k$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $+\infty$ is the greatest element and $-\infty$ the least; and every real is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently; and $L = \liminf_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k x_k \le \limsup_k x_k$ ([[lem-liminf-le-limsup]]).

[L5] Reflection: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]). Also $x_k \to -\infty$ if and only if $-x_k \to +\infty$: the condition $x_k < M$ for all $k \ge K$ is equivalent to $-x_k > -M$ for all $k \ge K$ by order reversal, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]]); the order reversal used here is strict, and the form stated in [[lem-of-add-order]] is likewise strict, so nothing nonstrict is being borrowed from it.

[L6] Convergence to a real $L$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$; and the same relation is obtained by testing every real $\varepsilon > 0$ instead, since below any positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L7] Divergence: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L8] Eventually and frequently, and the fact that a property holding eventually holds frequently, since indices beyond any two given thresholds exist by totality of the order on $\mathbb{N}$; likewise two properties each holding eventually hold together from the larger threshold on ([[def-sequence]], [[thm-nat-linear-order]]).

[L9] Absolute value: for $c > 0$, $|a| < c$ if and only if $-c < a < c$ ([[lem-of-abs-value]]).

[L10] Order arithmetic in $\mathbb{R}$: $0 < 1$, so $t < t + 1$ for every real $t$, and no real is above every real; adding a constant preserves the order ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L \in \mathbb{R}$ and that $(x_k)$ converges to $L$. [assume-hyp, L6]

1.2 For the converse implication of claim 1, assume $L \in \mathbb{R}$ and $\liminf_k x_k = \limsup_k x_k = L$. [assume-hyp, L1]

1.3 For the forward implication of claim 2, assume $x_k \to +\infty$. [assume-hyp, L7]

1.4 For the converse implication of claim 2, assume $\liminf_k x_k = +\infty$. [assume-hyp, L1]

2.1 Under the assumption of step 1.1, let $\varepsilon > 0$ be an arbitrary real. Testing convergence at $\varepsilon$ gives $K$ with $|x_k - L| < \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, for all $k \ge K$. So $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ eventually, and each of the two therefore also holds frequently. Both halves of each characterisation in [L3] are met, so $\limsup_k x_k = L$ and $\liminf_k x_k = L$. [step 1.1, L3, L6, L8, L9]

2.2 Under the assumption of step 1.2, let $\varepsilon > 0$ be an arbitrary real. The forward halves of the two characterisations in [L3] give $x_k < L + \varepsilon$ for all $k$ beyond some $K_1$ and $x_k > L - \varepsilon$ for all $k$ beyond some $K_2$; beyond the larger of $K_1$ and $K_2$ both hold, so $|x_k - L| < \varepsilon$ there. This holds for every real $\varepsilon > 0$, in particular for every rational one, so $(x_k)$ converges to $L$. [step 1.2, L3, L6, L8, L9]

2.3 Under the assumption of step 1.3, let $M$ be an arbitrary real and take $K$ with $x_k > M$ for all $k \ge K$. Then $M$ is a lower bound of $T_K$, so $M \le i_K$, and $i_K \le \liminf_k x_k$ because $\liminf_k x_k$ is an upper bound of $\{i_n\}$; hence $M \le \liminf_k x_k$. Since $M$ was an arbitrary real, $\liminf_k x_k$ is not $-\infty$, which lies below every real, and it is not a real $t$ either, since $M = t + 1$ would give $t + 1 \le t$. So $\liminf_k x_k = +\infty$. [step 1.3, L1, L2, L7, L10]

2.4 Under the assumption of step 1.4, let $M$ be an arbitrary real. Since $\sup\{i_n\} = +\infty$ and $M < +\infty$, the real $M$ is not an upper bound of $\{i_n\}$, for otherwise the least upper bound would satisfy $+\infty \le M$; by totality there is $n$ with $i_n > M$. Every $k \ge n$ satisfies $x_k \ge i_n > M$, so $x_k > M$ eventually. As $M$ was arbitrary, $x_k \to +\infty$. [step 1.4, L1, L2, L7]

3.1 Steps 2.1 and 2.2 are the two implications of claim 1. [step 2.1, step 2.2, L3]

3.2 For claim 2: if $x_k \to +\infty$ then $\liminf_k x_k = +\infty$ by step 2.3, and then $+\infty = \liminf_k x_k \le \limsup_k x_k$ forces $\limsup_k x_k = +\infty$ since $+\infty$ is the greatest element; conversely if $\liminf_k x_k = \limsup_k x_k = +\infty$ then in particular $\liminf_k x_k = +\infty$ and step 2.4 gives $x_k \to +\infty$. The same use of [L4] is the additional assertion that $\liminf_k x_k = +\infty$ alone forces $\limsup_k x_k = +\infty$. [step 2.3, step 2.4, L2, L4]

4.1 For claim 3, reflection gives $x_k \to -\infty$ exactly when $-x_k \to +\infty$, which by claim 2 holds exactly when $\liminf_k(-x_k) = \limsup_k(-x_k) = +\infty$, that is $-\limsup_k x_k = -\liminf_k x_k = +\infty$, that is $\limsup_k x_k = \liminf_k x_k = -\infty$; and $\limsup_k x_k = -\infty$ alone forces $\liminf_k x_k \le -\infty$, hence $\liminf_k x_k = -\infty$, since $-\infty$ is least. Claims 1, 2 and 3 together say that for $L \in \overline{\mathbb{R}}$ the sequence converges to $L$ in $\overline{\mathbb{R}}$ exactly when $\liminf_k x_k = \limsup_k x_k = L$, since the three clauses of that definition are convergence to a real $L$, divergence to $+\infty$ and divergence to $-\infty$. [step 3.1, step 3.2, L2, L4, L5] ∎

## Remarks

- **This is the theorem that makes $\limsup$ and $\liminf$ worth defining.** They
  exist for every sequence, with no hypothesis, and their coincidence is exactly
  convergence in $\overline{\mathbb{R}}$. So a question about convergence becomes
  a question about two computable quantities, and a proof of convergence can be
  assembled from one-sided estimates without a candidate limit in hand.

- **The equation is between elements of $\overline{\mathbb{R}}$, and reading it in
  $\mathbb{R}$ would lose two thirds of the content.** Clauses 2 and 3 are
  statements about divergence, and they are true statements about
  [[def-divergence-to-infinity]], not a redefinition of it: nothing above claims
  that a sequence diverging to $+\infty$ has a limit in $\mathbb{R}$, and the
  symbol $+\infty$ occurring in them is the element of $\overline{\mathbb{R}}$
  introduced in [[def-extended-reals]].

- **A sequence with $\liminf < \limsup$ does neither.** The alternating sequence
  is the standard witness, with the two values $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]); it is bounded, so it also does not
  diverge to $\pm\infty$, and the theorem says its failure to converge is exactly
  the gap between the two quantities.
````

