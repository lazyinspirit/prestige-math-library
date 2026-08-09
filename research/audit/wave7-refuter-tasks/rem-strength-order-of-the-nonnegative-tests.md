## Selection reasons

- top-20 dependency-cone consumer (17 generated manifest edges)

## Target item — `rem-strength-order-of-the-nonnegative-tests`

Normalized current SHA-256: `3a3d9005e1cea91a1adb392ca941f123091240226ad18259fe4aa15f9e1aad8a`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-strength-order-of-the-nonnegative-tests
kind: remark
title: "How the nonnegative tests are ordered by strength, and which of them this page cannot state without the logarithm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-root-test, thm-ratio-test, cor-root-test-dominates-ratio-test, cor-ratio-test-is-kummer-with-constant-weights, cor-raabe-test, thm-gauss-test, thm-kummer-test, thm-abel-dini, fs-universal-comparison-series, thm-direct-comparison-test, thm-geometric-series, thm-cauchy-condensation, thm-p-series-rational, lem-absolute-convergence-implies-convergence, thm-series-cauchy-criterion, def-rational-power, def-limsup-liminf]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "CSUDH notes on the ratio and root tests"
      url: "https://math.csudh.edu/~pong/a3/Notes_01.html"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
    - title: "Binghamton University notes on Kummer, Raabe, and Gauss tests"
      url: "https://people.math.binghamton.edu/dikran/478/Ch5.pdf"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

The tests on this page are not independent criteria of comparable status. Some
of them are strictly stronger than others, in the precise sense that whenever the
weaker one decides a series, the stronger one decides it the same way, and there
are series the stronger one decides and the weaker one does not. This remark
records exactly which comparisons are *proved here*, and, equally importantly,
which are not.

**Everything on this page is a comparison in disguise.** [[thm-direct-comparison-test]]
compares against an arbitrary series; the strength of every later test is the
strength of the particular series it compares against. The root and ratio tests
compare against a geometric series ([[thm-geometric-series]]); Raabe's test
compares against the harmonic series, through the weights $\zeta_k = k+1$ in
[[thm-kummer-test]]; and the borderline branch of [[thm-gauss-test]] compares
against the harmonic series again. [[thm-cauchy-condensation]] is of a different
kind: it does not compare, it reindexes, and that is why it settles the whole
$p$-series family ([[thm-p-series-rational]]) in one step.

**The comparisons proved on this page.**

- *Root over ratio.* [[cor-root-test-dominates-ratio-test]]: whenever the ratio
  test ([[thm-ratio-test]]) decides, the root test ([[thm-root-test]]) decides the
  same way, and there is a series the root test decides and the ratio test does
  not. This is a consequence of the inequality chain
  $\liminf q_k \le \liminf \rho_k \le \limsup \rho_k \le \limsup q_k$, proved on
  the previous page, and of nothing else.
- *Ratio as a case of Kummer.* [[cor-ratio-test-is-kummer-with-constant-weights]]:
  for positive terms, the ratio test is Kummer's test with the constant weights
  $\zeta_k = 1$.
- *Raabe as a case of Kummer.* [[cor-raabe-test]]: Raabe's test is Kummer's test
  with the weights $\zeta_k = k+1$.
- *Gauss over Raabe, inside Gauss's hypothesis.* [[thm-gauss-test]] assumes an
  expansion $a_k/a_{k+1} = 1 + h/k + r_k$ with a summable error. Under that
  hypothesis $R_k = (k+1)(a_k/a_{k+1}-1)$ converges to $h$. When $h \ne 1$,
  Raabe's test already decides, and Gauss's proof says so by invoking it. When
  $h = 1$ Raabe's test cannot decide: $\liminf_k R_k > 1$ would force $R_k$ to
  stay above a fixed number greater than $1$ from some index on, and
  $\limsup_k R_k < 1$ would force it to stay below a fixed number less than $1$,
  and $R_k \to 1$ rules out both. Gauss decides that case, and it is the reason
  the theorem exists.

**Two comparisons that are *not* claimed here.** Raabe's test is not compared
with the root test on this page, in either direction, and nothing above should be
read as ordering them. Nor is Kummer's test claimed to be universal: the choice
of weights is free, and the question of which series some choice of weights
decides is not addressed.

**And one that is refuted.** No comparison test can be final.
[[thm-abel-dini]] turns any divergent series of positive terms into a divergent
series of positive terms with eventually smaller terms, and
[[fs-universal-comparison-series]] draws the conclusion: there is no slowest
divergent series of positive terms, hence no universal comparison test. The
hierarchy above is therefore an initial segment of something with no last term,
not an approach to a best test.

**What this page cannot state, and why.** Every gap below is a missing
*definition*, not a missing proof.

- *The $p$-series at irrational exponents.* [[def-rational-power]] defines $a^{r}$
  for rational $r$ and positive $a$. So $\sum 1/k^{p}$ is a well-formed expression
  here only for rational $p$, and [[thm-p-series-rational]] is the full theorem
  for every exponent this page can name. Real exponents wait for the exponential
  and the logarithm.
- *Bertrand's test.* Its criterion is a condition on
  $\log k \,\big(k(a_k/a_{k+1} - 1) - 1\big)$, and it is the natural next member of
  the Kummer family, with weights $\zeta_k = k \log k$. Both the weights and the
  criterion mention the logarithm, so neither can be written down here.
- *The integral test.* It compares $\sum f(k)$ with $\int f$, and the Riemann
  integral is developed much later in this library. Condensation is the substitute
  used on this page, and for the $p$-series it does the same work.
- *The general form of Gauss's test.* The classical statement assumes
  $r_k=O(k^{-\beta})$ for some real $\beta>1$. The version proved here writes
  $\beta=1+\varepsilon$ with $\varepsilon$ a positive rational. This loses no
  case covered by the classical hypothesis: given $\beta>1$, choose a rational
  $0<\varepsilon<\beta-1$ and weaken the eventual bound. An error of order
  $1/(k\log k)$ is not a Gauss remainder at $h=1$; it is the next Bertrand
  borderline.

**A limitation that has been removed, and one that has not.** The comparison
with a geometric series inside [[thm-root-test]] and [[thm-ratio-test]] delivers
convergence of $\sum |a_k|$ and not, on its own, of $\sum a_k$. That the second
follows from the first is
[[lem-absolute-convergence-implies-convergence]], proved on this page from
[[thm-series-cauchy-criterion]] and the triangle inequality for finite sums, so
both tests do reach their standard conclusion here. What is *not* on this page is
the rest of that theory: the converse fails, and the alternating harmonic series
that witnesses the failure needs the alternating series test, which is not proved
here; rearrangement, the Riemann series theorem and products of series belong
with it on the page that follows. Nothing above asserts a converse or identifies
any sum.
````

## Wave 7 provenance row for the target

```json
{
  "id": "rem-strength-order-of-the-nonnegative-tests",
  "statement": "ai-altered",
  "proof": "not-applicable",
  "evidence": "semantic-source",
  "urls": [
    "https://math.csudh.edu/~pong/a3/Notes_01.html",
    "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf",
    "https://people.math.binghamton.edu/dikran/478/Ch5.pdf",
    "https://en.wikipedia.org/wiki/Convergence_tests",
    "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
  ],
  "rationale": "The source set establishes the ratio-root strength order, Kummer specializations, Raabe and Gauss criteria, and the Abel–Dini no-final-comparison obstruction. The item is a repository-specific synthesis of those results and local availability constraints. It also contains one inaccurate alteration about a 1/(k log k) Gauss remainder, recorded as an A2 falsehood; as a Remark it has no separate proof component.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-series.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 7 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-root-test",
    "declared_target": "thm-root-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-ratio-test",
    "declared_target": "thm-ratio-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-root-test-dominates-ratio-test",
    "declared_target": "cor-root-test-dominates-ratio-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-ratio-test-is-kummer-with-constant-weights",
    "declared_target": "cor-ratio-test-is-kummer-with-constant-weights",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-raabe-test",
    "declared_target": "cor-raabe-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-gauss-test",
    "declared_target": "thm-gauss-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-kummer-test",
    "declared_target": "thm-kummer-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-abel-dini",
    "declared_target": "thm-abel-dini",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "fs-universal-comparison-series",
    "declared_target": "fs-universal-comparison-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-cauchy-condensation",
    "declared_target": "thm-cauchy-condensation",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-absolute-convergence-implies-convergence",
    "declared_target": "lem-absolute-convergence-implies-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-series-cauchy-criterion",
    "declared_target": "thm-series-cauchy-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (17)

### `cor-raabe-test`

````markdown
---
id: cor-raabe-test
kind: corollary
title: "Raabe is Kummer with $\\zeta_k = k+1$: for positive terms, $\\liminf\\, (k+1)(a_k/a_{k+1} - 1) > 1$ gives convergence and $\\limsup < 1$ gives divergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-kummer-test, thm-p-series-rational, def-limsup-liminf, lem-limsup-exists, def-series, def-extended-reals, lem-extended-reals-complete, lem-of-naturals-positive, def-rational-power, thm-nth-roots-exist, def-integer-power]
justified_by: []
aliases: []
landmark: true
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
    - title: "Raabe's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Raabe%27s_test"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
    - title: "Binghamton University notes on Kummer, Raabe, and Gauss tests"
      url: "https://people.math.binghamton.edu/dikran/478/Ch5.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$.
Write $k+1$ for the canonical natural $\iota(k+1) \in \mathbb{R}$, which is
positive ([[lem-of-naturals-positive]]), take the weights
$\zeta_k := k+1$ in [[thm-kummer-test]], and put

$$R_k \;:=\; (k+1)\left(\frac{a_k}{a_{k+1}} - 1\right) \qquad (k \in \mathbb{N}),$$

so that Kummer's expression for these weights is $K_k = R_k - 1$. Then:

1. if $\liminf_{k} R_k > 1$ then $\sum a_k$ converges;
2. if $\limsup_{k} R_k < 1$ then $\sum a_k$ diverges.

The weights are $k+1$ rather than $k$ because $\zeta_0$ has to be positive and
$\mathbb{N}$ contains $0$; the classical statement, indexed from $1$, is the same
criterion read along the shift $k = j+1$.

**Nothing is claimed when $\liminf_k R_k \le 1 \le \limsup_k R_k$.** The Gauss
test proved next is exactly the tool for the borderline case $R_k \to 1$, where
Raabe's test is silent.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the weights $\zeta_k = \iota(k+1)$; and $R_k = (k+1)(a_k/a_{k+1} - 1)$ ([[def-limsup-liminf]], [[lem-of-naturals-positive]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ for the tail bounds $s_n, i_n$, both existing for every sequence ([[lem-extended-reals-complete]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] Kummer's test in both halves, for positive terms and positive weights ([[thm-kummer-test]]).

[L3] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$; at $p = 1$ it therefore diverges ([[thm-p-series-rational]]). Moreover $k^{1} = \iota(k)$, the rational power at exponent $1$ being the element itself ([[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L4] The canonical naturals $\iota(k+1)$ are positive, and $\iota(k+2) = \iota(k+1) + 1$ ([[lem-of-naturals-positive]]).

[L5] The series $\sum_{k \ge 1} x_k$ from the starting index $1$ is by definition the series of the sequence $j \mapsto x_{j+1}$ ([[def-series]]).

## Proof

**Proof technique:** direct.

1.1 The weights $\zeta_k = \iota(k+1)$ are positive for every $k \in \mathbb{N}$, and the terms $a_k$ are positive, so Kummer's test applies with these data. [given, L4, L2]

1.2 Suppose $\liminf_k R_k > 1$. The real $1$ is not an upper bound of the set of tail infima of $(R_k)$, so there is $N$ with $i_N > 1$, and $i_N$ is real because $i_N \le R_N$. [given, L1, choose]

1.3 Suppose instead $\limsup_k R_k < 1$. The real $1$ is not a lower bound of the set of tail suprema of $(R_k)$, so there is $N$ with $s_N < 1$, and then $R_k \le s_N < 1$ for every $k \ge N$. [given, L1, choose]

2.1 Kummer's expression for these weights is $K_k = (k+1)\dfrac{a_k}{a_{k+1}} - (k+2) = (k+1)\left(\dfrac{a_k}{a_{k+1}} - 1\right) - 1 = R_k - 1$. [step 1.1, L4, algebra]

2.2 The weight series is $\sum_k 1/\zeta_k = \sum_k 1/\iota(k+1)$, which is precisely the series $\sum_{k \ge 1} 1/k$ from the starting index $1$, and that is the case $p = 1$ of the $p$-series, hence divergent. [step 1.1, L3, L5]

3.1 Put $c := i_N - 1 > 0$. For every $k \ge N$ we have $R_k \ge i_N$, hence $K_k = R_k - 1 \ge i_N - 1 = c$. [step 1.2, step 2.1, L1, algebra]

3.2 Hence $K_k = R_k - 1 < 0$, in particular $K_k \le 0$, for every $k \ge N$. [step 1.3, step 2.1, algebra]

4.1 So $c$ is a lower bound of $\{K_k : k \ge N\}$, whence $\liminf_k K_k \ge c > 0$, and Kummer's convergence criterion gives convergence of $\sum a_k$, which is claim 1. [step 3.1, step 1.1, L1, L2]

5.1 Together with the divergence of the weight series, Kummer's divergence criterion gives divergence of $\sum a_k$, which is claim 2. [step 3.2, step 2.2, step 1.1, L2] ∎

## Remarks

- **Raabe's test is a genuine strengthening of the ratio test.** Whenever the ratios $a_{k+1}/a_k$ converge to $1$ the ratio test is silent, while $R_k$ may still be bounded away from $1$ on either side; the companion page carries a series with ratio limit exactly $1$ that Raabe decides. The reason is visible in the weights: the divergent comparison series behind the test has moved from $\sum 1$ to the harmonic series, which diverges far more slowly.

- **The threshold is $1$ and not $0$, and step 2.1 says why.** Kummer's criterion is a statement about $K_k = R_k - 1$; the shift by $1$ between the two expressions is the whole difference between the two thresholds, and it comes from $\zeta_{k+1} - \zeta_k = 1$ for these weights.
````

### `cor-ratio-test-is-kummer-with-constant-weights`

````markdown
---
id: cor-ratio-test-is-kummer-with-constant-weights
kind: corollary
title: "Kummer with $\\zeta_k = 1$ recovers the ratio test"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-kummer-test, thm-ratio-test, def-series, def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, lem-nth-term-test, lem-of-inverse-positive, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
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
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
    - title: "Binghamton University notes on Kummer, Raabe, and Gauss tests"
      url: "https://people.math.binghamton.edu/dikran/478/Ch5.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$,
and put $q_k := a_{k+1}/a_k$, which is the ratio family of [[thm-ratio-test]]
since $|a_k| = a_k$ here. Take the constant weights $\zeta_k := 1$, so that
Kummer's expression ([[thm-kummer-test]]) is

$$K_k \;=\; \frac{a_k}{a_{k+1}} - 1 \qquad (k \in \mathbb{N}) .$$

Then:

1. if $\limsup_{k} q_k < 1$ then $\liminf_{k} K_k > 0$, so Kummer's convergence
   criterion applies and yields convergence of $\sum a_k$;
2. if $\liminf_{k} q_k > 1$ then $\sum 1/\zeta_k$ diverges and $K_k \le 0$ from
   some index on, so Kummer's divergence criterion applies and yields divergence
   of $\sum a_k$.

Both conclusions are exactly those of [[thm-ratio-test]] for a sequence of
positive terms. So the ratio test is the constant-weight case of Kummer's test,
and every strengthening of Kummer's test by a better choice of weights is a
strengthening of the ratio test.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the ratios $q_k = a_{k+1}/a_k$, which are positive; the constant weights $\zeta_k = 1$; and Kummer's expression $K_k = a_k/a_{k+1} - 1$ ([[thm-kummer-test]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there ([[lem-extended-reals-complete]], [[def-extended-reals]]); $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ with $s_n, i_n$ the tail bounds, and both exist for every sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] Kummer's test, in both halves, for positive terms and positive weights ([[thm-kummer-test]]).

[L3] Reciprocation on the positives: $0 < x < y$ implies $0 < 1/y < 1/x$ ([[lem-of-inverse-positive]]).

[L4] A series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]]).

[L5] For positive terms $|a_k| = a_k$, so the ratio family of [[thm-ratio-test]] is the family $q_k$ above ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The constant weights $\zeta_k = 1$ are positive, and the terms $a_k$ are positive, so Kummer's test applies with these data and its expression is $K_k = a_k/a_{k+1} - 1$. [given, L2]

1.2 Each $q_k$ is positive, so $\limsup_k q_k \ge 0$, every tail supremum being at least $q_n > 0$. [given, L1]

1.3 Suppose instead $\liminf_k q_k > 1$. The real $1$ is not an upper bound of $\{i'_n\}$, the tail infima of $(q_k)$, so there is $N$ with $i'_N > 1$, and then $q_k \ge i'_N > 1$ for every $k \ge N$. [given, L1, choose]

1.4 The weight series $\sum 1/\zeta_k$ is $\sum 1$, whose terms are constantly $1$ and so do not tend to $0$; it diverges. [given, L4]

2.1 Suppose $\limsup_k q_k < 1$. Then $\Lambda := \limsup_k q_k$ lies between the reals $0$ and $1$ and is therefore real; put $t := (\Lambda+1)/2$, so that $\Lambda < t < 1$ and $t \ge 1/2 > 0$. [step 1.2, L1, choose]

2.2 For $k \ge N$: $a_{k+1}/a_k > 1$ gives $a_{k+1} > a_k > 0$, hence $a_k/a_{k+1} < 1$, hence $K_k < 0$ and in particular $K_k \le 0$. [step 1.3, L3, algebra]

3.1 Since $t > \inf\{s_n\}$, the real $t$ is not a lower bound of $\{s_n\}$, so there is $N$ with $s_N < t$, and then $q_k \le s_N < t$ for every $k \ge N$. [step 2.1, L1, choose]

3.2 Kummer's divergence criterion therefore applies and $\sum a_k$ diverges, which is claim 2. [step 2.2, step 1.4, step 1.1, L2]

4.1 For $k \ge N$: $0 < a_{k+1}/a_k < t$, so $a_k/a_{k+1} > 1/t$, and hence $K_k = a_k/a_{k+1} - 1 > 1/t - 1 =: c$, where $c > 0$ because $0 < t < 1$ gives $1/t > 1$. [step 3.1, L3, algebra]

5.1 So $c$ is a lower bound of $\{K_k : k \ge N\}$, whence $i_N \ge c$ and $\liminf_k K_k = \sup\{i_n\} \ge i_N \ge c > 0$. [step 4.1, L1]

6.1 Kummer's convergence criterion therefore applies and $\sum a_k$ converges, which is claim 1. [step 5.1, step 1.1, L2]

7.1 The hypotheses in claims 1 and 2 are precisely those of the two halves of the ratio test for this sequence, and the conclusions agree, so the ratio test for positive terms is the case $\zeta_k = 1$ of Kummer's test. [step 6.1, step 3.2, L5] ∎

## Remarks

- **What this corollary is for.** It is not a new criterion. It fixes the place of the ratio test inside the Kummer family, so that the later choices of weights on this page can be read as improvements on a known test rather than as unrelated criteria.

- **The ratio test proved earlier is more general in one respect.** It allows terms of either sign, provided none vanishes, and concludes convergence of $\sum |a_k|$. Kummer's test needs positivity throughout, so the identification above is between the positive-term case of the ratio test and the constant-weight case of Kummer's test, and it says nothing about signed terms.
````

### `cor-root-test-dominates-ratio-test`

````markdown
---
id: cor-root-test-dominates-ratio-test
kind: corollary
title: "Whenever the ratio test decides, the root test decides the same way, and the converse fails"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ratio-root-inequality, thm-root-test, thm-ratio-test, def-limsup-liminf, def-extended-reals, lem-liminf-le-limsup, lem-of-abs-value, lem-series-tail-invariance, def-series, fs-ratio-and-root-limits-always-agree, lem-alternating-sequence, def-integer-power, lem-power-monotone]
justified_by: []
aliases: []
landmark: true
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "CSUDH notes on the ratio and root tests"
      url: "https://math.csudh.edu/~pong/a3/Notes_01.html"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ne 0$ for every $k \in \mathbb{N}$,
and put

$$q_k := \frac{|a_{k+1}|}{|a_k|}, \qquad \rho_k := |a_{k+1}|^{1/(k+1)} \qquad (k \in \mathbb{N}) ,$$

the ratio and root families of [[thm-ratio-test]] and [[thm-root-test]]. Then, in
$\overline{\mathbb{R}}$,

$$\liminf_{k} q_k \;\le\; \liminf_{k} \rho_k \;\le\; \limsup_{k} \rho_k \;\le\; \limsup_{k} q_k ,$$

and consequently:

1. if $\limsup_k q_k < 1$, so that the ratio test gives convergence of
   $\sum |a_k|$ and hence of $\sum a_k$, then $\limsup_k \rho_k < 1$ and the root
   test gives the same;
2. if $\liminf_k q_k > 1$, so that the ratio test gives divergence of
   $\sum a_k$, then $\limsup_k \rho_k > 1$ and the root test gives it too.

**The converse fails.** Let $(s_k)$ be the alternating sequence of
[[lem-alternating-sequence]], let $t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when
$s_k = -1$, and put $a_k := 2^{-k} t_k$, the sequence usually written
$a_k = 2^{-k+(-1)^k}$. For it, $\limsup_k \rho_k = 1/2 < 1$ while
$\limsup_k q_k = 2$ and $\liminf_k q_k = 1/8$
([[fs-ratio-and-root-limits-always-agree]]), so the root test gives convergence
of $\sum |a_k|$ and neither half of the ratio test applies. So the root test
decides strictly more series than the ratio test.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ne 0$ for every $k$, the ratios $q_k = |a_{k+1}|/|a_k|$ and the roots $\rho_k = |a_{k+1}|^{1/(k+1)}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] For a sequence $(b_k)$ of reals with $b_k > 0$ for every $k$, writing $q'_k = b_{k+1}/b_k$ and $r_k = b_{k+1}^{1/(k+1)}$, one has $\liminf_k q'_k \le \liminf_k r_k \le \limsup_k r_k \le \limsup_k q'_k$ in $\overline{\mathbb{R}}$ ([[thm-ratio-root-inequality]]).

[L2] $\liminf_k x_k \le \limsup_k x_k$ for every real sequence ([[lem-liminf-le-limsup]]).

[L3] Absolute value: $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$ ([[lem-of-abs-value]]).

[L4] The root test: for a family from $1$, $\limsup_k |a_{k+1}|^{1/(k+1)} < 1$ gives convergence of $\sum_{k \ge 1}|a_k|$ and hence of $\sum_{k \ge 1} a_k$, and $> 1$ gives divergence of $\sum_{k \ge 1} a_k$ ([[thm-root-test]]).

[L5] The ratio test: $\limsup_k q_k < 1$ gives convergence of $\sum |a_k|$ and hence of $\sum a_k$, and $\liminf_k q_k > 1$ gives divergence of $\sum a_k$ ([[thm-ratio-test]]).

[L6] A series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]], [[def-series]]).

[L7] For the sequence $a_k = 2^{-k} t_k$ built from the alternating sequence as in the Statement: $\limsup_k |a_{k+1}|^{1/(k+1)} = 1/2$, $\limsup_k |a_{k+1}|/|a_k| = 2$ and $\liminf_k |a_{k+1}|/|a_k| = 1/8$; and $2^{-k} > 0$, $t_k > 0$, so every term is positive and in particular nonzero ([[fs-ratio-and-root-limits-always-agree]], [[lem-alternating-sequence]], [[def-integer-power]], [[lem-power-monotone]]).

## Proof

**Proof technique:** direct.

1.1 Put $b_k := |a_k|$. Since $a_k \ne 0$ we have $b_k > 0$ for every $k$, so [L1] applies to $(b_k)$. [given, L3, L1]

1.2 For the sequence $a_k = 2^{-k} t_k$ of the Statement every term is nonzero, $\limsup_k \rho_k = 1/2 < 1$, and neither $\limsup_k q_k = 2 < 1$ nor $\liminf_k q_k = 1/8 > 1$ holds. [L7]

2.1 For this $(b_k)$ the ratio family is $b_{k+1}/b_k = |a_{k+1}|/|a_k| = q_k$ and the root family is $b_{k+1}^{1/(k+1)} = |a_{k+1}|^{1/(k+1)} = \rho_k$. [step 1.1]

3.1 Therefore $\liminf_k q_k \le \liminf_k \rho_k \le \limsup_k \rho_k \le \limsup_k q_k$, which is the displayed chain. [step 1.1, step 2.1, L1]

4.1 Suppose $\limsup_k q_k < 1$. By the chain, $\limsup_k \rho_k \le \limsup_k q_k < 1$, so the root test applies to the family $(a_k)_{k \ge 1}$ and gives convergence of $\sum_{k \ge 1}|a_k|$ and of $\sum_{k \ge 1} a_k$, hence of $\sum |a_k|$ and of $\sum a_k$; the ratio test gives the same conclusions. That is claim 1. [step 3.1, L4, L5, L6]

4.2 Suppose $\liminf_k q_k > 1$. By the chain and [L2], $\limsup_k \rho_k \ge \liminf_k \rho_k \ge \liminf_k q_k > 1$, so the root test gives divergence of $\sum_{k \ge 1} a_k$, hence of $\sum a_k$; the ratio test gives the same conclusion. That is claim 2. [step 3.1, L2, L4, L5, L6]

5.1 So for that sequence the root test gives convergence of $\sum_{k \ge 1} |a_k|$ while neither half of the ratio test applies, and the converse of claims 1 and 2 fails. [step 1.2, L4, L5] ∎

## Remarks

- **The dominance is a statement about $\limsup$, not about series.** The whole content is the chain of [[thm-ratio-root-inequality]], proved on the previous page precisely because it is about limits superior and nothing else. Claims 1 and 2 are the translation of that chain through the two tests, and they carry no further mathematics.

- **Strictly more, not merely at least as much.** The witness in the Statement settles that: its roots converge to $1/2$ while its ratios oscillate between $1/8$ and $2$, so the ratio test is silent about a series the root test decides. The reason is structural rather than accidental. Taking an $n$-th root divides the exponent by $n$ and so damps a bounded oscillation, while forming a ratio differences the exponent and preserves it.

- **The ratio test survives because it is easier to compute.** Nothing here says the ratio test should be abandoned; the ratios of a series given by an explicit formula are usually elementary, and the roots usually are not.
````

### `def-limsup-liminf`

````markdown
---
id: def-limsup-liminf
kind: definition
title: "Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: [def-limsup, def-liminf]
landmark: true
short: "$\\limsup$, $\\liminf$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \in \mathbb{N}$ let

$$T_n \;:=\; \{\, x_k : k \in \mathbb{N},\ k \ge n \,\} \subseteq \mathbb{R}$$

be the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\mathbb{R}$ since
$x_n \in T_n$. Regard $T_n$ as a subset of $\overline{\mathbb{R}}$
([[def-extended-reals]]) and put

$$s_n \;:=\; \sup T_n \in \overline{\mathbb{R}}, \qquad i_n \;:=\; \inf T_n \in \overline{\mathbb{R}},$$

the supremum and infimum taken in $\overline{\mathbb{R}}$, which exist for every
$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit
superior** and **limit inferior** of $(x_k)$ are then

$$\limsup_{k} x_k \;:=\; \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k \;:=\; \sup \{\, i_n : n \in \mathbb{N} \,\},$$

again taken in $\overline{\mathbb{R}}$ and again existing by
[[lem-extended-reals-complete]], since $\{s_n : n \in \mathbb{N}\}$ and
$\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$ on which no
hypothesis is needed. Both are elements of $\overline{\mathbb{R}}$, and either may
be $+\infty$ or $-\infty$. The notations $\limsup_{k \to \infty} x_k$,
$\varlimsup_k x_k$ and $\overline{\lim}_k x_k$ all denote the first of them
elsewhere; this library writes $\limsup_k x_k$.

**Every quantity written here exists, and that is why the extended line was
introduced.** Each of the four operations above is an application of
[[lem-extended-reals-complete]] to a subset of $\overline{\mathbb{R}}$ carrying no
hypothesis whatever. Written with the real supremum of
[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]
instead, the definition would be available only for sequences that are bounded
([[def-bounded-set]]): $\sup T_n$ needs $T_n$ bounded above, and
$\inf\{s_n\}$ needs $\{s_n\}$ nonempty, bounded below, and made of real numbers
([[def-infimum]]). None of those is automatic, and the discipline recorded in
[[rem-sup-conventions]] forbids papering over the gap with a convention. The
extended supremum is a different operation in a different ordered set, and it is
total.

**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say
$|x_k| \le M$ for every $k$, then each $T_n$ is a nonempty subset of $\mathbb{R}$
bounded above by $M$ and below by $-M$, so by the agreement clause of
[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum
or infimum of $T_n$, and lies in $[-M, M]$. The family $\{s_n\}$ is then a
nonempty set of reals bounded below by $-M$, so $\limsup_k x_k$ is likewise the
real infimum of $\{s_n\}$ and lies in $[-M, M]$; dually for $\liminf_k x_k$. So
for a bounded sequence both quantities are ordinary real numbers computed with
the ordinary real supremum and infimum, and the extended line is doing no work.
It is only for unbounded sequences that the values $\pm\infty$ occur.

## Remarks

- **The order of the two operations is not symmetric and must be kept straight.**
  $\limsup$ is an infimum of suprema and $\liminf$ a supremum of infima. Taking
  them in the other order gives $\sup_n \sup_{k \ge n} x_k = \sup_k x_k$ and
  $\inf_n \inf_{k \ge n} x_k = \inf_k x_k$, which are the extreme values of the
  whole sequence and carry no information about its behaviour at large indices.
  The point of the definition is that the inner operation looks at a tail and the
  outer one lets the tail recede.

- **Why tails at all.** Each $s_n$ is a bound on the whole tail from index $n$ on,
  so it forgets the first $n$ terms; letting $n$ grow forgets any fixed finite
  number of them. That is what makes $\limsup$ and $\liminf$ tail quantities in
  the sense of [[lem-limit-of-tail]], and it is the reason they can characterise
  convergence, which is itself a tail property.

- **Neither quantity is a limit, and neither is claimed to be one.** The symbols
  $\limsup$ and $\liminf$ are single pieces of notation for the two displayed
  expressions, exactly as "$x_k \to +\infty$" is a single abbreviation in
  [[def-divergence-to-infinity]]. That the family $(s_n)$ does decrease to
  $\limsup_k x_k$ in a precise sense is a theorem, not part of this definition;
  the monotonicity half is [[lem-limsup-exists]].

- **The tail ranges are sets, not sequences.** $T_n$ is the range of the $n$-th
  tail, so repetitions and order are forgotten ([[def-sequence]]). That is
  harmless here, since a supremum depends only on the set of values, and it is
  what lets the whole definition be phrased with the order-theoretic operations of
  [[lem-extended-reals-complete]] and nothing else.
````

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
````

### `fs-universal-comparison-series`

````markdown
---
id: fs-universal-comparison-series
kind: false-statement
title: "FALSE: there is a divergent series of positive terms that diverges more slowly than every other, hence a universal comparison test"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-abel-dini, def-series, thm-nonnegative-series-bounded-partial-sums, lem-monotone-unbounded-diverges, def-divergence-to-infinity, def-monotone-sequence, lem-of-inverse-positive, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
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
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

## Statement

**False claim:** there is a sequence $(b_k)$ of reals with $b_k > 0$ for every
$k \in \mathbb{N}$ such that $\sum b_k$ diverges ([[def-series]]) and such that
**every** sequence $(a_k)$ of reals with $a_k > 0$ for every $k$ and $\sum a_k$
divergent satisfies

$$b_k \le a_k \quad \text{for all } k \text{ from some index on.}$$

Such a $(b_k)$ would be a *slowest* divergent series of positive terms, and it
would give a universal comparison test: a positive series would diverge exactly
when its terms eventually dominate those of $(b_k)$.

**No such sequence exists.** The refutation is direct and uses no choice: given
any divergent $\sum b_k$ with positive terms, the Abel-Dini theorem
([[thm-abel-dini]]) manufactures a divergent series of positive terms whose terms
are eventually strictly smaller than the $b_k$, so $(b_k)$ fails its own defining
property.

## Facts & Assumptions

**Given:** An arbitrary sequence $(b_k)$ of reals with $b_k > 0$ for every $k$ and $\sum b_k$ divergent; its inclusive partial sums $B_n = \sum_{k=0}^{n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] For a series of nonnegative terms: the partial sums are nondecreasing, and if the series diverges their range is not bounded above and they diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[lem-monotone-unbounded-diverges]], [[def-monotone-sequence]], [[def-divergence-to-infinity]]).

[L2] Abel-Dini: if $(a_k)$ has positive terms and $\sum a_k$ diverges, then with $S_n = \sum_{k=0}^{n} a_k$ the series $\sum_n a_n/S_n$ diverges ([[thm-abel-dini]]).

[L3] Order and reciprocals: for $x > 0$ and $y > 1$ one has $0 < x/y < x$ ([[lem-of-inverse-positive]]); and a sum of positive terms is positive ([[lem-finite-sum-laws]]).

[L4] The refuted claim: some divergent series of positive terms is eventually dominated by every divergent series of positive terms.

## Refutation

**Proof technique:** direct.

1.1 Let $(b_k)$ be any sequence of positive reals with $\sum b_k$ divergent, and put $B_n = \sum_{k=0}^{n} b_k$; every $B_n$ is positive, being a sum of positive terms. [given, L3]

1.2 Since $\sum b_k$ diverges and its terms are nonnegative, its exclusive partial sums $s_n = \sum_{k<n} b_k$ diverge to $+\infty$; and $B_n = s_{n+1}$, so $B_n \to +\infty$ as well, any index bound for $(s_n)$ serving for $(B_n)$. [given, L1, algebra]

2.1 Define $c_n := b_n / B_n$ for $n \in \mathbb{N}$. Each $c_n$ is positive, and by Abel-Dini applied to $(b_k)$ the series $\sum c_n$ diverges. [step 1.1, L2, L3]

2.2 Since $B_n \to +\infty$ there is $N \in \mathbb{N}$ with $B_n > 1$ for every $n \ge N$; for such $n$, $c_n = b_n/B_n < b_n$. [step 1.2, L3, choose]

3.1 So $(c_n)$ is a sequence of positive reals with $\sum c_n$ divergent, and there is no index from which $b_n \le c_n$ holds onwards: given any $K$, at every index $n$ that is at least both $K$ and $N$ one has $c_n < b_n$. [step 2.1, step 2.2]

4.1 Therefore the sequence $(b_k)$ does not have the property demanded of it, and since $(b_k)$ was an arbitrary divergent series of positive terms, no such sequence exists and the claim is false. [step 3.1, L4] ∎

## Remarks

- **What this rules out.** There is no fixed series against which comparison decides divergence for all positive series, so the direct comparison test is unavoidably a family of tests, one for each comparison series, with none of them final. The refutation is constructive in the strong sense: it does not merely show that a slowest series cannot exist, it exhibits, for each candidate, a specific divergent series that beats it.

- **The scale of tests on this page inherits the same limitation.** Ratio, Raabe and Gauss are successive refinements, each deciding series the previous one cannot, and the argument above says the sequence of refinements can never terminate in a universal criterion. What Kummer's test adds is a uniform way of describing the whole family, by naming the weights; it does not escape the obstruction, since each choice of weights is still a comparison against the single series $\sum 1/\zeta_k$.
````

### `lem-absolute-convergence-implies-convergence`

````markdown
---
id: lem-absolute-convergence-implies-convergence
kind: lemma
title: "If $\\sum |a_k|$ converges then $\\sum a_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-series-cauchy-criterion, lem-triangle-inequality-finite, lem-finite-sum-laws, def-finite-sum, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum |a_k|$ converges
([[def-series]]) then the series $\sum a_k$ converges.

A series with the property that $\sum |a_k|$ converges is called **absolutely
convergent**; the lemma says that absolute convergence implies convergence.

The same statement holds for a family from a general starting index $m$, being
this statement applied to the shifted sequence $j \mapsto a_{j+m}$
([[def-series]]).

**The converse is false**, and the standard witness is the alternating harmonic
series. That witness is not available on this page: its convergence is the
alternating series test, which is not proved here. Nothing below asserts a
converse, and no item on this page uses one.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals such that the series $\sum |a_k|$ converges, with partial sums as in [[def-series]] and finite sums as in [[def-finite-sum]].

[L1] The Cauchy criterion for series: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} d_k\big| < \varepsilon$ for all $n > p \ge N$ ([[thm-series-cauchy-criterion]], [[def-series]]).

[L2] Triangle inequality for finite sums: $\big|\sum_{k<d} u_k\big| \le \sum_{k<d}|u_k|$ ([[lem-triangle-inequality-finite]]); the block $\sum_{k=p+1}^{n} u_k$ is by definition the finite sum $\sum_{t < n-p} u_{p+1+t}$ ([[def-finite-sum]]), so applying the inequality to the shifted sequence $t \mapsto u_{p+1+t}$ gives $\big|\sum_{k=p+1}^{n} u_k\big| \le \sum_{k=p+1}^{n} |u_k|$ for all naturals $n > p$.

[L3] Monotonicity of finite sums: if $x_t \ge 0$ for all $t < d$ then $\sum_{t<d} x_t \ge 0$ ([[lem-finite-sum-laws]]).

[L4] Absolute value: $|u| \ge 0$ for every real $u$, and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L5] Convergence of a real sequence, and the fact that the real and rational formulations of a tolerance agree ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real; since $\sum |a_k|$ converges, the Cauchy criterion applied to the sequence $(|a_k|)$ supplies $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$ for all $n > p \ge N$. [L1, L5, choose]

1.2 For all naturals $n > p$ the block $\sum_{k=p+1}^{n} |a_k|$ is a finite sum of nonnegative terms, hence nonnegative, hence equal to its own absolute value. [L2, L3, L4]

2.1 So for all $n > p \ge N$ one has $\big|\sum_{k=p+1}^{n} a_k\big| \le \sum_{k=p+1}^{n} |a_k| = \big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$. [step 1.1, step 1.2, L2]

3.1 As $\varepsilon > 0$ was arbitrary, the sequence $(a_k)$ satisfies the Cauchy criterion, so $\sum a_k$ converges. [step 2.1, L1] ∎

## Remarks

- **Nothing here identifies the two sums**, and they are in general different. What is proved is that the second series converges, not that it converges to the same value; the bound $\big|\sum_{k=0}^{\infty} a_k\big| \le \sum_{k=0}^{\infty}|a_k|$ is true and is not needed anywhere on this page, so it is not proved here.

- **Why the Cauchy criterion is the right instrument.** The terms have no sign, so [[thm-nonnegative-series-bounded-partial-sums]] does not apply to $\sum a_k$ and boundedness of its partial sums would prove nothing. The Cauchy criterion is the one convergence test on this page that never names a candidate sum and never asks for a sign, and the whole proof is the observation that its hypothesis for $(|a_k|)$ implies its hypothesis for $(a_k)$, term by term, through one application of the finite triangle inequality.

- **What this unlocks on this page.** The root test ([[thm-root-test]]) and the ratio test ([[thm-ratio-test]]) each produce convergence of $\sum |a_k|$ directly, by comparison with a geometric series; with this lemma both reach their standard conclusion, the convergence of $\sum a_k$ itself. Without it their convergence halves would be strictly weaker than the classical statements.

- **The systematic theory is elsewhere.** Rearrangement, the Riemann series theorem, conditional convergence and products of series all belong with absolute convergence and are developed on a later page of this track. This lemma is only the one implication those two tests need.
````

### `thm-abel-dini`

````markdown
---
id: thm-abel-dini
kind: theorem
title: "For a divergent series of positive terms with partial sums $s_k$, the series $\\sum a_k/s_k$ diverges and $\\sum a_k/s_k^2$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-series, thm-nonnegative-series-bounded-partial-sums, thm-series-cauchy-criterion, lem-telescoping-series, thm-direct-comparison-test, def-monotone-sequence, lem-monotone-unbounded-diverges, def-divergence-to-infinity, def-integer-power, lem-reciprocal-of-null-diverges, lem-of-inverse-positive, lem-series-tail-invariance, def-finite-sum, lem-finite-sum-laws, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$
and suppose $\sum a_k$ **diverges** ([[def-series]]). Write

$$S_n \;:=\; \sum_{k=0}^{n} a_k \qquad (n \in \mathbb{N})$$

for the **inclusive** partial sums, so that $S_n = s_{n+1}$ in the notation
$s_n = \sum_{k<n} a_k$ of [[def-series]]. Then $S_n > 0$ for every
$n \in \mathbb{N}$, and:

1. $\displaystyle\sum_{n} \frac{a_n}{S_n}$ diverges;
2. $\displaystyle\sum_{n} \frac{a_n}{S_n^{2}}$ converges.

**Why the divisor is the inclusive partial sum.** The exclusive partial sum of
[[def-series]] has $s_0 = 0$, the empty sum, so $a_0/s_0$ has no value and a
series divided by $s_n$ would have to begin at $n = 1$. The inclusive sum has
$S_0 = a_0 > 0$, so both series above are series of sequences on $\mathbb{N}$
with no shift and no excluded index. The classical statement, which writes
$s_n = a_1 + \dots + a_n$ and starts at $n = 1$, is this one with the indices
moved by one.

**What the theorem says.** No divergent series of positive terms is slowest:
dividing its terms by the running total produces a series that still diverges but
whose terms are eventually strictly smaller. Dividing by the square of the
running total overshoots and produces a convergent series. Claim 1 is what
refutes the existence of a universal comparison series
([[fs-universal-comparison-series]]).

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$, with $\sum a_k$ divergent; the exclusive partial sums $s_n = \sum_{k<n} a_k$ and the inclusive partial sums $S_n = \sum_{k=0}^{n} a_k = s_{n+1}$ ([[def-series]], [[def-finite-sum]]).

[L1] For a series of nonnegative terms: the partial sums are nondecreasing, the series converges if and only if their range is bounded above, and otherwise they diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[lem-monotone-unbounded-diverges]], [[def-monotone-sequence]], [[def-divergence-to-infinity]]).

[L2] Splitting of finite sums: for $m \le n$, $\sum_{k=0}^{n} a_k = \sum_{k=0}^{m} a_k + \sum_{k=m+1}^{n} a_k$, so $\sum_{k=m+1}^{n} a_k = S_n - S_m$; and monotonicity of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L3] The Cauchy criterion: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N$ with $\big|\sum_{k=m+1}^{n} d_k\big| < \varepsilon$ for all $n > m \ge N$ ([[thm-series-cauchy-criterion]]).

[L4] For positive terms, $x_n \to 0$ if and only if $1/x_n \to +\infty$ ([[lem-reciprocal-of-null-diverges]], [[def-real-limit]]).

[L5] $\sum (b_n - b_{n+1})$ converges whenever $(b_n)$ converges ([[lem-telescoping-series]]).

[L6] Direct comparison ([[thm-direct-comparison-test]]), and a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]]).

[L7] Reciprocation on the positives: $0 < x \le y$ implies $0 < 1/y \le 1/x$ ([[lem-of-inverse-positive]]); and $x^{2} = x \cdot x$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 Every $S_n$ is a sum of positive terms, so $S_n > 0$; and $S_n \le S_{n+1}$ since $S_{n+1} - S_n = a_{n+1} > 0$, so $(S_n)$ is nondecreasing and $S_m \le S_n$ whenever $m \le n$. [given, L2, L1]

1.2 Since $\sum a_k$ diverges and its terms are nonnegative, the exclusive partial sums are unbounded above and $s_n \to +\infty$; hence $S_n = s_{n+1} \to +\infty$, because for a given real $M$ any index bound $K$ working for $(s_n)$ also works for $(S_n)$. [given, L1, algebra]

2.1 For all naturals $n > m$, using $S_k \le S_n$ for $k \le n$ and $a_k > 0$: $\displaystyle\sum_{k=m+1}^{n} \frac{a_k}{S_k} \ \ge \ \sum_{k=m+1}^{n} \frac{a_k}{S_n} \ = \ \frac{S_n - S_m}{S_n} \ = \ 1 - \frac{S_m}{S_n}$. [step 1.1, L2, L7]

2.2 Put $b_n := 1/S_n$, which is positive; since $1/b_n = S_n \to +\infty$, the sequence $(b_n)$ converges to $0$. [step 1.1, step 1.2, L4, L7]

2.3 For every $n \in \mathbb{N}$: $b_n - b_{n+1} = \dfrac{1}{S_n} - \dfrac{1}{S_{n+1}} = \dfrac{S_{n+1}-S_n}{S_n S_{n+1}} = \dfrac{a_{n+1}}{S_n S_{n+1}} \ \ge \ \dfrac{a_{n+1}}{S_{n+1}^{2}} \ > \ 0$, the inequality because $0 < S_n S_{n+1} \le S_{n+1}^{2}$. [step 1.1, L2, L7, algebra]

3.1 Let $N \in \mathbb{N}$ be arbitrary and put $m := N$. Since $S_n \to +\infty$ there is $n > m$ with $S_n > 2 S_m$, and then $S_m/S_n < 1/2$, so the block of step 2.1 satisfies $\sum_{k=m+1}^{n} a_k/S_k > 1/2$. [step 1.2, step 2.1, L7, choose]

3.2 Therefore $\sum_n (b_n - b_{n+1})$ converges. [step 2.2, L5]

4.1 So no $N$ witnesses the Cauchy condition for the tolerance $\varepsilon = 1/2$, and $\sum_n a_n/S_n$ diverges, which is claim 1. [step 3.1, L3]

5.1 By comparison, $\sum_n \dfrac{a_{n+1}}{S_{n+1}^{2}}$ converges; that series is the $1$-st tail series of $\sum_n \dfrac{a_n}{S_n^{2}}$, so the latter converges, which is claim 2. [step 3.2, step 2.3, L6] ∎

## Remarks

- **The two claims are not two theorems but one pair of estimates.** Divergence comes from bounding a block below by $1 - S_m/S_n$, which the Cauchy criterion turns into a refutation of convergence; convergence comes from bounding a single term above by a telescoping difference. The first estimate needs $S_n$ to grow without bound and the second needs it to be nondecreasing, and both facts come from divergence of $\sum a_k$ together with positivity of its terms.

- **The exponent $2$ is not optimal, and this page does not pursue that.** The classical refinement replaces $S_n^{2}$ by $S_n^{1+\delta}$ for a rational $\delta > 0$; the argument is the same in outline but needs an estimate for $S_n^{-\delta} - S_{n+1}^{-\delta}$ that the tools on this page do not supply cleanly. The square is what claim 1 needs a companion for, and it is enough for every use made of the theorem here.

- **Positivity is used at every step.** It gives $S_n > 0$, so the quotients exist; it makes $(S_n)$ nondecreasing, which both estimates use; and it makes the terms of the two derived series nonnegative, which is what lets comparison and the boundedness criterion apply to them.
````

### `thm-cauchy-condensation`

````markdown
---
id: thm-cauchy-condensation
kind: theorem
title: "For a nonincreasing nonnegative sequence, $\\sum a_k$ converges iff $\\sum 2^k a_{2^k}$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, def-monotone-sequence, def-integer-power, lem-power-monotone, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-series, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \ge 1}$ be a family from $1$ ([[def-series]]) with

$$a_k \ge 0 \ \ (k \ge 1) \qquad \text{and} \qquad a_j \ge a_k \ \ \text{whenever } 1 \le j \le k .$$

Then

$$\sum_{k \ge 1} a_k \ \text{converges} \qquad \Longleftrightarrow \qquad \sum_{j \ge 0} 2^{j} a_{2^{j}} \ \text{converges} .$$

Every term of the condensed series is defined, because $2^{j} \ge 1$ for every
$j \in \mathbb{N}$ ([[lem-power-monotone]]), and the condensed series starts at
$j = 0$, its first term being $2^0 a_{2^0} = a_1$.

The monotonicity hypothesis is equivalent to the consecutive form
$a_{k+1} \le a_k$ for every $k \ge 1$, since it says that the sequence
$b_i := a_{i+1}$, $i \in \mathbb{N}$, is nonincreasing ([[def-monotone-sequence]]).
It cannot be dropped: the companion page exhibits a nonnegative non-monotone
family for which the two series behave differently.

## Facts & Assumptions

**Given:** A family $(a_k)_{k \ge 1}$ of reals with $a_k \ge 0$ for $k \ge 1$ and $a_j \ge a_k$ whenever $1 \le j \le k$; the partial sums $A_n = \sum_{k=1}^{n} a_k$ of $\sum_{k \ge 1} a_k$, with $A_0 = 0$; and the partial sums $C_n = \sum_{j<n} 2^{j} a_{2^{j}}$ of the condensed series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums, and the meaning of a sum with general bounds: for $m \le n$, $\sum_{k=1}^{n} a_k = \sum_{k=1}^{m} a_k + \sum_{k=m+1}^{n} a_k$, and $\sum_{k=p}^{q} a_k = \sum_{t < q+1-p} a_{p+t}$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L2] Monotonicity and scaling of finite sums: if $x_t \le y_t$ for all $t < d$ then $\sum_{t<d} x_t \le \sum_{t<d} y_t$; and a constant sum is $\sum_{t<d} \lambda = d\,\lambda$ ([[lem-finite-sum-laws]]).

[L3] Powers of $2$: $2^{j} \ge 1$ for every $j \in \mathbb{N}$, $2^{j+1} = 2 \cdot 2^{j}$, and $2^{j} < 2^{j+1}$ ([[def-integer-power]], [[lem-power-monotone]]).

[L4] The principle of induction ([[thm-induction-principle]]).

[L5] For a series of nonnegative terms: its partial sums are nondecreasing, it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Every term of the condensed series is nonnegative, since $2^{j} \ge 1 > 0$ and $a_{2^{j}} \ge 0$; and every $A_n$, every $C_n$ is nonnegative, both series having nonnegative terms. [given, L3, L5]

1.2 For every $n \in \mathbb{N}$ the block from $2^{n}$ to $2^{n+1}-1$ is $\sum_{k=2^{n}}^{2^{n+1}-1} a_k = \sum_{t < 2^{n}} a_{2^{n}+t}$, since the number of terms is $(2^{n+1}-1)+1-2^{n} = 2^{n}$. [L1, L3, algebra]

1.3 For every $n \in \mathbb{N}$ the block from $2^{n}+1$ to $2^{n+1}$ is $\sum_{k=2^{n}+1}^{2^{n+1}} a_k = \sum_{t < 2^{n}} a_{2^{n}+1+t}$, since the number of terms is $2^{n+1}+1-(2^{n}+1) = 2^{n}$. [L1, L3, algebra]

1.4 **Index growth:** $n \le 2^{n} - 1$ for every $n \in \mathbb{N}$, by induction on $n$. At $n = 0$ this reads $0 \le 0$; and if $n \le 2^{n}-1$, that is $n+1 \le 2^{n}$, then $n+1 \le 2^{n} \le 2 \cdot 2^{n} - 1 = 2^{n+1}-1$, the second inequality being $2^{n} \ge 1$. [L3, L4, algebra]

2.1 In the first block every index satisfies $2^{n} \le 2^{n}+t$, so $a_{2^{n}+t} \le a_{2^{n}}$, and therefore $\sum_{k=2^{n}}^{2^{n+1}-1} a_k \le \sum_{t<2^{n}} a_{2^{n}} = 2^{n} a_{2^{n}}$. [step 1.2, given, L2]

2.2 In the second block every index satisfies $2^{n}+1+t \le 2^{n+1}$ for $t < 2^{n}$, so $a_{2^{n}+1+t} \ge a_{2^{n+1}}$, and therefore $\sum_{k=2^{n}+1}^{2^{n+1}} a_k \ge \sum_{t<2^{n}} a_{2^{n+1}} = 2^{n} a_{2^{n+1}}$. [step 1.3, given, L2, L3]

2.3 Suppose the condensed series converges, with sum $C$; then $C_n \le C$ for every $n$. [given, step 1.1, L5]

2.4 Suppose conversely that $\sum_{k \ge 1} a_k$ converges, with sum $A$; then $A_n \le A$ for every $n$. [given, step 1.1, L5]

3.1 **Upper estimate:** $A_{2^{n}-1} \le C_n$ for every $n \in \mathbb{N}$, by induction on $n$. At $n = 0$ both sides are $0$, since $2^0 - 1 = 0$ and $C_0$ is the empty sum; and if $A_{2^{n}-1} \le C_n$, then splitting at $2^{n}-1$ gives $A_{2^{n+1}-1} = A_{2^{n}-1} + \sum_{k=2^{n}}^{2^{n+1}-1} a_k \le C_n + 2^{n} a_{2^{n}} = C_{n+1}$. [step 2.1, L1, L3, L4]

3.2 **Lower estimate:** $2 A_{2^{n}} \ge \sum_{j=1}^{n} 2^{j} a_{2^{j}}$ for every $n \in \mathbb{N}$, by induction on $n$. At $n = 0$ the right-hand side is the empty sum $0$ and the left-hand side is $2a_1 \ge 0$; and if the inequality holds at $n$, then splitting at $2^{n}$ gives $A_{2^{n+1}} = A_{2^{n}} + \sum_{k=2^{n}+1}^{2^{n+1}} a_k \ge A_{2^{n}} + 2^{n} a_{2^{n+1}}$, whence $2A_{2^{n+1}} \ge 2A_{2^{n}} + 2^{n+1} a_{2^{n+1}} \ge \sum_{j=1}^{n+1} 2^{j} a_{2^{j}}$. [step 2.2, step 1.1, L1, L3, L4]

4.1 For every $N \in \mathbb{N}$ we have $N \le 2^{N}-1$, so $A_N \le A_{2^{N}-1} \le C_N \le C$, the first inequality because the partial sums $A_n$ are nondecreasing. [step 1.4, step 3.1, step 2.3, step 1.1, L5]

4.2 For every $n \in \mathbb{N}$, $\sum_{j=1}^{n} 2^{j} a_{2^{j}} \le 2 A_{2^{n}} \le 2A$, and splitting the condensed partial sum at $j = 1$ gives $C_{n+1} = a_1 + \sum_{j=1}^{n} 2^{j} a_{2^{j}} \le a_1 + 2A$. [step 3.2, step 2.4, L1, L3]

5.1 So the partial sums of $\sum_{k \ge 1} a_k$ are bounded above by $C$, and that series converges. [step 4.1, L5]

5.2 Also $C_0 = 0 \le a_1 + 2A$, so every condensed partial sum is at most $a_1 + 2A$, and the condensed series converges. [step 4.2, step 1.1, L5]

6.1 The two implications just established combine, so the two series converge or diverge together. [step 5.1, step 5.2] ∎

## Remarks

- **What monotonicity buys, in one sentence.** It lets a block of $2^{n}$ consecutive terms be squeezed between $2^{n}$ copies of its last term and $2^{n}$ copies of its first, which is exactly the pair of estimates in steps 2.1 and 2.2. Without it a block carries no information about any single term in it, and the two series decouple entirely.

- **The factor $2$ in the lower estimate is not an artefact.** The blocks used for the two estimates are different: the upper estimate groups $2^{n}, \dots, 2^{n+1}-1$ and the lower estimate groups $2^{n}+1, \dots, 2^{n+1}$, and the second grouping produces $2^{n} a_{2^{n+1}}$, which is half of the condensed term $2^{n+1} a_{2^{n+1}}$. Since only boundedness of the partial sums is at stake, a constant factor is harmless.

- **Base $2$ is a choice, not a necessity.** The same argument with blocks of length $c^{n}$ gives the analogous test for any integer $c \ge 2$. Base $2$ is taken here because it is the one every later application uses, and because the arithmetic of $2^{n+1} = 2 \cdot 2^{n}$ keeps the induction free of extra bookkeeping.
````

### `thm-direct-comparison-test`

````markdown
---
id: thm-direct-comparison-test
kind: theorem
title: "If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-series, lem-finite-sum-laws, def-bounded-set, def-finite-sum]
justified_by: []
aliases: []
landmark: true
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
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.25)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges ([[def-series]]);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of [[def-series]].

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $K \in \mathbb{N}$ with $0 \le a_k \le b_k$ for all $k \ge K$; the partial sums $\alpha_j = \sum_{i<j} a_{K+i}$ and $\beta_j = \sum_{i<j} b_{K+i}$ of the $K$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Monotonicity of finite sums: if $x_i \le y_i$ for all $i < j$ then $\sum_{i<j} x_i \le \sum_{i<j} y_i$ ([[lem-finite-sum-laws]]).

[L2] A series converges if and only if its $K$-th tail series converges ([[lem-series-tail-invariance]]).

[L3] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $i \in \mathbb{N}$ the index $K + i$ is at least $K$, so $0 \le a_{K+i} \le b_{K+i}$; in particular both tail series have nonnegative terms. [given]

1.2 Assume $\sum b_k$ converges. Then its $K$-th tail series $\sum_{k \ge K} b_k$ converges. [given, L2]

2.1 By monotonicity of finite sums, $\alpha_j \le \beta_j$ for every $j \in \mathbb{N}$. [step 1.1, L1]

2.2 That tail series has nonnegative terms, so its partial sums satisfy $\beta_j \le B$ for every $j$, where $B$ is its sum. [step 1.2, step 1.1, L3]

3.1 Hence $\alpha_j \le \beta_j \le B$ for every $j$, so the range of $(\alpha_j)$ is bounded above by $B$. [step 2.1, step 2.2]

4.1 The tail series $\sum_{k \ge K} a_k$ has nonnegative terms and partial sums bounded above, so it converges. [step 3.1, step 1.1, L3]

5.1 Therefore $\sum a_k$ converges, which is claim 1. [step 4.1, L2]

6.1 Claim 2 is the contrapositive of claim 1: if $\sum a_k$ diverges then $\sum b_k$ cannot converge. [step 5.1] ∎

## Remarks

- **Both nonnegativity hypotheses are used, and in different places.** $a_k \ge 0$ is what lets convergence of $\sum_{k \ge K} a_k$ be read off from boundedness of its partial sums, and $b_k \ge a_k \ge 0$ is what makes the sum of $\sum_{k \ge K} b_k$ an upper bound for the partial sums $\beta_j$. Drop the sign hypothesis and the theorem is false, not merely unproved; the companion page exhibits a pair with $a_k \le b_k$ for every $k$, $\sum b_k$ convergent and $\sum a_k$ divergent.

- **The comparison is with a series, not with a limit.** No quotient $a_k/b_k$ appears and no $b_k$ is required to be nonzero, which is what distinguishes this test from the limit comparison test proved next.
````

### `thm-gauss-test`

````markdown
---
id: thm-gauss-test
kind: theorem
title: "Gauss: for positive terms, if $a_k/a_{k+1} = 1 + h/k + r_k$ with $|r_k| \\le C\\,k^{-1-\\varepsilon}$ for $k \\ge 1$, some constant $C$ and some rational $\\varepsilon > 0$, the series converges iff $h > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-raabe-test, thm-p-series-rational, thm-direct-comparison-test, def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-series, thm-induction-principle, thm-of-archimedean, cor-archimedean-reciprocal, thm-squeeze, thm-algebra-of-limits, lem-series-linearity, lem-series-tail-invariance, lem-limit-of-tail, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-real-limit, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$.
Suppose there are a real $h$, a real $C \ge 0$, a rational $\varepsilon > 0$ and
reals $r_k$ for $k \ge 1$ such that

$$\frac{a_k}{a_{k+1}} \;=\; 1 + \frac{h}{k} + r_k \qquad \text{and} \qquad |r_k| \;\le\; C\,k^{-1-\varepsilon} \qquad (k \ge 1),$$

where $k$ denotes the canonical natural $\iota(k) > 0$ and $k^{-1-\varepsilon}$
is the rational power ([[def-rational-power]], [[lem-of-naturals-positive]]).
Then

$$\sum a_k \ \text{converges} \qquad \Longleftrightarrow \qquad h > 1 .$$

The hypotheses are imposed from $k = 1$ on, since $h/k$ has no value at $k = 0$;
$a_0$ is unconstrained beyond being positive, which costs nothing because
convergence is a tail property ([[lem-series-tail-invariance]]).

**The exponent $\varepsilon$ is rational because that is what
[[def-rational-power]] supplies**, and the error bound is a $p$-series bound with
$p = 1 + \varepsilon > 1$, which is exactly the summability the proof consumes.

**The borderline case $h = 1$ is the whole point of the theorem.** There
$R_k = (k+1)(a_k/a_{k+1} - 1)$ tends to $1$, so both halves of Raabe's test
([[cor-raabe-test]]) are silent; the theorem asserts divergence there, and the
argument below establishes it without any logarithm, by a telescoping product
estimate.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; reals $h$, $C \ge 0$, a rational $\varepsilon > 0$ and reals $r_k$ ($k \ge 1$) with $a_k/a_{k+1} = 1 + h/k + r_k$ and $|r_k| \le C k^{-1-\varepsilon}$ for $k \ge 1$; and $R_k := (k+1)(a_k/a_{k+1} - 1)$ for $k \in \mathbb{N}$ ([[cor-raabe-test]]).

[L1] Raabe's test: for positive terms, $\liminf_k R_k > 1$ gives convergence of $\sum a_k$ and $\limsup_k R_k < 1$ gives divergence ([[cor-raabe-test]]).

[L2] Every subset of $\overline{\mathbb{R}}$ has least upper and greatest lower bounds there; $\liminf_k x_k = \sup\{i_n\}$ and $\limsup_k x_k = \inf\{s_n\}$ for the tail bounds, both existing for every sequence ([[lem-extended-reals-complete]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]]).

[L3] For every real $c > 0$ there is a natural $n \ge 1$ with $1/n < c$, and for every real $x$ there is a natural $n$ with $\iota(n) > x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Rational powers on a positive base: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$, $a^{r} > 0$; and for rational $t > 0$, $0 < x < y$ implies $x^{t} < y^{t}$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-rational-power]]).

[L5] Limit rules: sums, scalar multiples, products and quotients of convergent sequences ([[thm-algebra-of-limits]]); the squeeze theorem ([[thm-squeeze]]); convergence depends only on the tail ([[lem-limit-of-tail]]); a convergent sequence satisfies its estimate for every real tolerance ([[def-real-limit]], [[cor-archimedean-reciprocal]]).

[L6] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

[L7] Direct comparison, and the fact that scaling by a nonzero constant preserves convergence and divergence ([[thm-direct-comparison-test]], [[lem-series-linearity]]); a series converges if and only if each of its tail series converges, and for nonnegative terms every partial sum is at most the sum ([[lem-series-tail-invariance]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] The principle of induction ([[thm-induction-principle]]); reciprocation reverses order on the positives ([[lem-of-inverse-positive]]); $|x| \ge 0$ and $x \le |x|$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Assume $h > 1$. [assume-case gt]

1.2 Assume instead $h < 1$. [assume-case lt]

1.3 Assume instead $h = 1$. [assume-case eq]

1.4 For every $k \ge 1$, $R_k = (k+1)\left(\dfrac{h}{k} + r_k\right) = h\left(1 + \dfrac{1}{k}\right) + (k+1) r_k$. [given, algebra]

1.5 The sequence $j \mapsto 1/(j+1)$ converges to $0$: given a rational $\eta > 0$, choose a natural $n \ge 1$ with $1/n < \eta$; then $1/(j+1) \le 1/n < \eta$ for every $j$ with $j+1 \ge n$. [L3, L8, choose]

1.6 The sequence $j \mapsto (j+1)^{-\varepsilon}$ converges to $0$: given a real $\eta > 0$, put $M := \max\{1/\eta,\, 1\} > 0$ and choose a natural $n$ with $\iota(n) > M^{1/\varepsilon}$; then for $j + 1 \ge n$ we get $(j+1)^{\varepsilon} > \big(M^{1/\varepsilon}\big)^{\varepsilon} = M \ge 1/\eta$, hence $0 < (j+1)^{-\varepsilon} < \eta$. [L3, L4, L8, choose]

1.7 For every $j \in \mathbb{N}$, $|(j+2)\,r_{j+1}| \le C (j+2)(j+1)^{-1-\varepsilon} \le 2C (j+1)\,(j+1)^{-1-\varepsilon} = 2C\,(j+1)^{-\varepsilon}$, using $j + 2 \le 2(j+1)$. [given, L4, L8, algebra]

2.1 Hence $-2C(j+1)^{-\varepsilon} \le (j+2) r_{j+1} \le 2C(j+1)^{-\varepsilon}$ with both bounds converging to $0$, so $(j+2) r_{j+1} \to 0$ by the squeeze theorem. [step 1.7, step 1.6, L5]

2.2 In the case $h = 1$, put $u_k := \dfrac{k}{k+1}\,r_k$ and $t_k := k\,a_k$ for $k \ge 1$; then $t_k > 0$, $|u_k| \le |r_k| \le C k^{-1-\varepsilon}$ since $0 < k/(k+1) < 1$, and $\dfrac{a_k}{a_{k+1}} = \dfrac{k+1}{k} + r_k = \dfrac{k+1}{k}\big(1 + u_k\big)$. [step 1.3, given, L8, algebra]

3.1 Therefore $R_{j+1} = h\big(1 + 1/(j+1)\big) + (j+2) r_{j+1} \to h(1+0) + 0 = h$, and since convergence depends only on the tail, the sequence $(R_k)_{k \in \mathbb{N}}$ converges to $h$. [step 1.4, step 1.5, step 2.1, L5]

3.2 Consequently $\dfrac{t_k}{t_{k+1}} = \dfrac{k}{k+1}\cdot\dfrac{a_k}{a_{k+1}} = 1 + u_k$ for $k \ge 1$, so $1 + u_k = t_k/t_{k+1} > 0$ and $\dfrac{t_{k+1}}{t_k} = \dfrac{1}{1+u_k}$. [step 2.2, algebra]

3.3 In the case $h = 1$: $\sum_{k \ge 1} k^{-1-\varepsilon}$ converges, since $1 + \varepsilon$ is a rational exceeding $1$; hence so does $\sum_{k \ge 1} C k^{-1-\varepsilon}$, and by comparison with it so does $\sum_{k \ge 1} |u_k|$, whose terms are nonnegative. [step 2.2, L6, L7]

4.1 In the case $h > 1$: applying the limit estimate with the real tolerance $(h-1)/2 > 0$ gives an $N$ with $R_k > h - (h-1)/2 = (h+1)/2$ for all $k \ge N$; so $(h+1)/2$ is a lower bound of $\{R_k : k \ge N\}$, whence $\liminf_k R_k \ge (h+1)/2 > 1$ and $\sum a_k$ converges. [step 1.1, step 3.1, L2, L5, L1]

4.2 In the case $h < 1$: the tolerance $(1-h)/2 > 0$ gives an $N$ with $R_k < h + (1-h)/2 = (h+1)/2$ for all $k \ge N$; so $(h+1)/2$ is an upper bound of $\{R_k : k \ge N\}$, whence $\limsup_k R_k \le (h+1)/2 < 1$ and $\sum a_k$ diverges. [step 1.2, step 3.1, L2, L5, L1]

4.3 For $k \ge 1$: $(1-u_k)(1+u_k) = 1 - u_k^{2} \le 1$ and $1 + u_k > 0$, so $\dfrac{1}{1+u_k} \ge 1 - u_k \ge 1 - |u_k|$. [step 3.2, L8, algebra]

4.4 Writing $U$ for the sum of $\sum_{k \ge 1} |u_k|$ and $P_n = \sum_{k=1}^{n} |u_k|$ for its partial sums, $P_n \to U$, so there is a natural $N_0$ with $U - P_{N_0} \le 1/2$; put $N := N_0 + 1$. [step 3.3, L5, L7, choose]

5.1 For every $n \ge N$ the block $\sum_{k=N}^{n} |u_k|$ is a partial sum of the $N_0$-th tail series of $\sum_{k \ge 1}|u_k|$, whose terms are nonnegative and whose sum is $U - P_{N_0}$; hence $\sum_{k=N}^{n} |u_k| \le 1/2$, and in particular $|u_k| \le 1/2$ for every $k \ge N$. [step 4.4, L7]

6.1 In the case $h = 1$: for every $n \ge N-1$, $\dfrac{t_{n+1}}{t_N} \ge 1 - \sum_{k=N}^{n} |u_k|$, by induction on $n$. At $n = N-1$ both sides equal $1$, the sum being empty. Assume it at $n$; then, since $t_{n+1}/t_N > 0$ and $1/(1+u_{n+1}) \ge 1 - |u_{n+1}| \ge 1/2 > 0$, and since the induction hypothesis gives $t_{n+1}/t_N \ge 1 - \sum_{k=N}^{n}|u_k| \ge 1/2 > 0$, we get $\dfrac{t_{n+2}}{t_N} = \dfrac{1}{1+u_{n+1}}\cdot\dfrac{t_{n+1}}{t_N} \ge \big(1-|u_{n+1}|\big)\Big(1 - \sum_{k=N}^{n}|u_k|\Big) \ge 1 - \sum_{k=N}^{n+1}|u_k|$, the last step expanding the product and discarding a nonnegative term. [step 3.2, step 4.3, step 5.1, L8]

7.1 Hence $t_{n+1}/t_N \ge 1 - 1/2 = 1/2$ for every $n \ge N-1$, that is $m\,a_m = t_m \ge t_N/2 > 0$ for every $m \ge N$, and so $a_m \ge \dfrac{t_N}{2}\cdot\dfrac{1}{m}$ for every $m \ge N$. [step 6.1, step 5.1, L8, algebra]

8.1 The series $\sum_{m \ge 1} 1/m$ diverges, so $\sum_{m \ge 1} \frac{t_N}{2}\cdot\frac{1}{m}$ diverges, the factor $t_N/2$ being nonzero. [step 7.1, L6, L7]

9.1 If $\sum a_k$ converged, then so would $\sum_{m \ge 1} a_m$, and comparison with the estimate of step 7.1 would make $\sum_{m \ge 1} \frac{t_N}{2m}$ converge, contradicting step 8.1; so in the case $h = 1$ the series $\sum a_k$ diverges. [step 7.1, step 8.1, L7]

10.1 The three cases $h > 1$, $h < 1$ and $h = 1$ exhaust the reals, and they give convergence, divergence and divergence respectively; so $\sum a_k$ converges exactly when $h > 1$. [step 4.1, step 4.2, step 9.1, cases-exhaustive] ∎

## Remarks

- **No logarithm anywhere, and that is deliberate.** The classical treatment of $h = 1$ compares $a_k$ with $1/(k \log k)$ or invokes Bertrand's test. Neither is available in this library at this point, and neither is needed: the hypothesis $|r_k| \le C k^{-1-\varepsilon}$ makes $\sum |u_k|$ convergent, and a convergent sum of nonnegative errors is exactly what the product estimate of step 6.1 consumes. The price is that the theorem is stated with an $\varepsilon$ of decay to spare, rather than for an arbitrary summable error.

- **Step 7.1 is the Weierstrass product inequality in disguise.** In the form $\prod_{j}(1 - x_j) \ge 1 - \sum_j x_j$ for $x_j \in [0,1]$, it is the standard statement; here the product is $t_{n+1}/t_N$, telescoped in advance, so that one induction does the work of two and no separate lemma about products of inequalities is needed.

- **What the conclusion at $h = 1$ says about the terms.** The estimate $a_m \ge (t_N/2)\,(1/m)$ is a genuine lower bound of harmonic type: at the borderline the terms cannot decay faster than a constant multiple of $1/m$, and divergence follows from the divergence of the harmonic series alone.

- **The three cases are decided by $h$ and by nothing else.** The constants $C$ and $\varepsilon$ never appear in the conclusion; they enter only through the requirement that the error be summable, which is what keeps the case $h = 1$ from being genuinely borderline in this argument.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

### `thm-kummer-test`

````markdown
---
id: thm-kummer-test
kind: theorem
title: "Kummer: for positive terms $a_k$ and weights $\\zeta_k > 0$, $\\liminf(\\zeta_k a_k/a_{k+1} - \\zeta_{k+1}) > 0$ gives convergence, and if $\\sum 1/\\zeta_k$ diverges while that expression is eventually $\\le 0$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-direct-comparison-test, def-limsup-liminf, lem-limsup-exists, lem-telescoping-series, def-monotone-sequence, thm-monotone-convergence, def-extended-reals, lem-extended-reals-complete, lem-series-tail-invariance, lem-series-linearity, thm-induction-principle, lem-of-inverse-positive, def-bounded-set, thm-geometric-series, lem-power-laws, def-integer-power, lem-nth-term-test]
justified_by: []
aliases: []
landmark: true
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
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
    - title: "Binghamton University notes on Kummer, Raabe, and Gauss tests"
      url: "https://people.math.binghamton.edu/dikran/478/Ch5.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(\zeta_k)$ be sequences of reals with

$$a_k > 0 \quad \text{and} \quad \zeta_k > 0 \qquad \text{for every } k \in \mathbb{N},$$

and define **Kummer's expression**

$$K_k \;:=\; \zeta_k \frac{a_k}{a_{k+1}} \;-\; \zeta_{k+1} \qquad (k \in \mathbb{N}),$$

a sequence of reals whose limit inferior exists in $\overline{\mathbb{R}}$
([[lem-limsup-exists]]). Then:

1. if $\liminf_{k} K_k > 0$ then $\sum a_k$ converges;
2. if $\sum 1/\zeta_k$ diverges and $K_k \le 0$ for all $k$ from some index on,
   then $\sum a_k$ diverges.

**Positivity of $(a_k)$ is load bearing and is not a normalisation.** Claim 2 is
FALSE for terms of mixed sign, and the failure is not delicate: see the first
remark below, where a convergent geometric series with negative ratio satisfies
every hypothesis of claim 2 with the weights $\zeta_k = 1$.

The two claims specialise to the ratio test at $\zeta_k = 1$ and to Raabe's test
at $\zeta_k = k+1$; those two corollaries follow immediately below, and they are
the only ways this theorem is used on this page.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(\zeta_k)$ of reals with $a_k > 0$ and $\zeta_k > 0$ for every $k$; Kummer's expression $K_k = \zeta_k a_k/a_{k+1} - \zeta_{k+1}$; the auxiliary sequence $b_k := \zeta_k a_k$, which is positive; and the tail infima $i_n = \inf\{K_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, so that $\liminf_k K_k = \sup\{i_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there ([[lem-extended-reals-complete]]). In particular a real $u$ below $\sup\{i_n\}$ is not an upper bound of $\{i_n\}$; $i_n$ is a lower bound of $\{K_k : k \ge n\}$; and $i_n \le K_n$, so $i_n$ is not $+\infty$.

[L2] Both limit quantities exist for every sequence ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] A nonincreasing sequence bounded below converges ([[thm-monotone-convergence]], [[def-monotone-sequence]], [[def-bounded-set]]); consecutive comparisons suffice to establish monotonicity ([[def-monotone-sequence]]).

[L4] $\sum (x_k - x_{k+1})$ converges whenever $(x_k)$ converges ([[lem-telescoping-series]]).

[L5] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L6] For $c \ne 0$, $\sum c\,x_k$ converges if and only if $\sum x_k$ converges ([[lem-series-linearity]]); and a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]], [[def-series]]).

[L7] The principle of induction ([[thm-induction-principle]]); and $1/x > 0$ for $x > 0$, with $x \le y$ implying $1/y \le 1/x$ for positive $x, y$ ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\liminf_k K_k > 0$. The real $0$ is then not an upper bound of $\{i_n\}$, so there is $N \in \mathbb{N}$ with $i_N > 0$. [given, L1, L2, choose]

1.2 Suppose now that $\sum 1/\zeta_k$ diverges and that there is $N$ with $K_k \le 0$ for every $k \ge N$. [given]

2.1 Since $i_N \le K_N$ and $i_N > 0$, the value $i_N$ is a real number; put $c := i_N > 0$, so that $K_k \ge c$ for every $k \ge N$. [step 1.1, L1]

2.2 Multiplying $K_k \le 0$ by $a_{k+1} > 0$ gives $\zeta_k a_k \le \zeta_{k+1} a_{k+1}$, that is $b_k \le b_{k+1}$, for every $k \ge N$. [step 1.2, given, algebra]

3.1 Multiplying $K_k \ge c$ by $a_{k+1} > 0$ gives $\zeta_k a_k - \zeta_{k+1} a_{k+1} \ge c\,a_{k+1}$, that is $b_k - b_{k+1} \ge c\,a_{k+1} > 0$, for every $k \ge N$. [step 2.1, given, algebra]

3.2 An induction on $j$ gives $b_{N+j} \ge b_N$ for every $j \in \mathbb{N}$: at $j = 0$ it is an equality, and if it holds at $j$ then $b_{N+j+1} \ge b_{N+j} \ge b_N$. [step 2.2, L7]

4.1 Hence $b_{N+j} \ge b_{N+j+1}$ for every $j \in \mathbb{N}$, so the tail sequence $(b_{N+j})_{j}$ is nonincreasing; and it is bounded below by $0$, every $b_k$ being positive. [step 3.1, given, L3]

4.2 So $\zeta_m a_m \ge b_N > 0$ for every $m \ge N$, and dividing by $\zeta_m > 0$ gives $a_m \ge b_N \cdot (1/\zeta_m) > 0$. [step 3.2, given, L7]

5.1 Therefore $(b_{N+j})_{j}$ converges, and by the telescoping lemma $\sum_{j} \big(b_{N+j} - b_{N+j+1}\big)$ converges. [step 4.1, L3, L4]

5.2 Since $\sum 1/\zeta_k$ diverges and $b_N \ne 0$, the series $\sum b_N (1/\zeta_k)$ diverges. [step 1.2, step 4.2, L6]

6.1 By step 3.1 we have $0 \le c\,a_{N+j+1} \le b_{N+j} - b_{N+j+1}$ for every $j$, so $\sum_{j} c\,a_{N+j+1}$ converges by comparison, and since $c \ne 0$ so does $\sum_{j} a_{N+j+1}$. [step 3.1, step 5.1, L5, L6]

7.1 That last series is the $(N+1)$-th tail series of $\sum a_k$, so $\sum a_k$ converges, which is claim 1. [step 6.1, L6]

8.1 If $\sum a_k$ converged then, since $0 \le b_N(1/\zeta_m) \le a_m$ for $m \ge N$, comparison would make $\sum b_N(1/\zeta_k)$ converge, contradicting step 5.2; so $\sum a_k$ diverges, which is claim 2. [step 4.2, step 5.2, L5] ∎

## Remarks

- **Claim 2 fails for terms of mixed sign, and here is the witness.** Take $\zeta_k = 1$ for every $k$ and $a_k = (-1/2)^{k}$. Then $a_k / a_{k+1} = 1/(-1/2) = -2$ ([[lem-power-laws]], [[def-integer-power]]), so $K_k = -2 - 1 = -3 \le 0$ at every index; and $\sum 1/\zeta_k = \sum 1$ diverges, its terms not tending to $0$ ([[lem-nth-term-test]]). Both hypotheses of claim 2 hold. Yet $\sum (-1/2)^{k}$ converges, with sum $2/3$, since $|-1/2| < 1$ ([[thm-geometric-series]]). The conclusion therefore fails, and what fails with it is exactly step 2.2, which multiplied an inequality by $a_{k+1}$ and needed that factor to be positive. The classical signed witness at $\zeta_k = 1$ is $a_k = (-1)^{k}/k$, whose hypotheses check the same way; its convergence is the alternating series test, which this page does not prove, and that is why the geometric witness is the one used here.

- **The weights are a free parameter, and that is the point of the theorem.** Kummer's test is not a single criterion but a family of them, one for each positive sequence $(\zeta_k)$, and the strength of the resulting test is exactly the strength of the divergent comparison series $\sum 1/\zeta_k$ it carries. Constant weights give the ratio test, weights $k+1$ give Raabe's test, and the pattern continues past what this page can state, since the next natural choice needs the logarithm.

- **Claim 1 does not need $\sum 1/\zeta_k$ to diverge.** The convergence half uses only positivity of the weights, through the telescoping bound in step 5.1. The divergence half is where the weights have to be tied to a known divergent series, and that asymmetry is why the two halves are not mirror images.
````

### `thm-p-series-rational`

````markdown
---
id: thm-p-series-rational
kind: theorem
title: "For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-condensation, thm-geometric-series, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-monotone-sequence, def-series, lem-of-inverse-positive, thm-nth-roots-exist, lem-of-naturals-positive, def-integer-power, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Q}$ with $p > 0$. For a natural number $k \ge 1$ write
$\iota(k) = k \cdot 1_{\mathbb{R}}$ for the canonical natural, which is positive
([[lem-of-naturals-positive]]), and write $k^{p} := \iota(k)^{p}$ for its rational
power ([[def-rational-power]]). Then

$$\sum_{k \ge 1} \frac{1}{k^{p}} \ \text{converges} \qquad \Longleftrightarrow \qquad p > 1 .$$

In particular the harmonic series $\sum_{k \ge 1} 1/k$ diverges, at $p = 1$, and
$\sum_{k \ge 1} 1/k^{2}$ converges, at $p = 2$.

**The index range is not cosmetic.** The series starts at $k = 1$ because
$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational
$p > 0$, and $0$ has no inverse. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series
from the starting index $1$ in the sense of [[def-series]], not a series of a
sequence on $\mathbb{N}$.

**The exponent is rational, and that is a limitation of this page.** Rational
powers of a positive base are what [[def-rational-power]] supplies; real exponents
require the exponential and the logarithm, which this library develops later. The
statement above is therefore the full $p$-series theorem for every exponent this
page can name.

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := 1/k^{p} = \iota(k)^{-p}$, defined for naturals $k \ge 1$ ([[def-rational-power]], [[def-series]]).

[L1] Rational powers of a positive base are positive, and $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ for $a > 0$ and rationals $r, s$ ([[lem-rational-power-laws]]).

[L2] Monotonicity of rational powers: for rational $t > 0$ and $0 < a < b$ one has $a^{t} < b^{t}$; and for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$ ([[lem-rational-power-monotone]]).

[L3] The integer power and the rational power agree at an integer exponent: for $a > 0$ and $n \in \mathbb{Z}$, $a^{n}$ read as in [[def-integer-power]] equals $a^{n}$ read as in [[def-rational-power]], since $n = n/1$ and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-rational-power]]). In particular $a^{0} = 1$.

[L4] Reciprocation reverses the order on the positives: $0 < a < b$ implies $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Condensation: for a family $(x_k)_{k \ge 1}$ that is nonnegative and nonincreasing, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L6] The geometric series: $\sum_{j \ge 0} r^{j}$ converges if and only if $|r| < 1$ ([[thm-geometric-series]], [[lem-of-abs-value]]).

[L7] The canonical naturals are positive and order preserving: $0 < \iota(1) \le \iota(j) < \iota(k)$ for naturals $1 \le j < k$, and $\iota(2) = 2 > 1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k \ge 1$ the base $\iota(k)$ is positive, so $a_k = \iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative. [given, L7, L1]

1.2 For naturals $1 \le j < k$ we have $0 < \iota(j) < \iota(k)$, hence $\iota(j)^{p} < \iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\iota(j)^{p} > 1/\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \ge a_k$ whenever $1 \le j \le k$. [given, L7, L2, L4, L1]

1.3 For every $j \in \mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$. [L1, L3, L7, algebra]

1.4 Since $2 > 1$, the map $t \mapsto 2^{t}$ is strictly increasing on $\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$. [L2, L3, L7]

2.1 Condensation applies to $(a_k)_{k \ge 1}$: $\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$ converges. [step 1.1, step 1.2, L5]

2.2 So the condensed series is the geometric series $\sum_{j \ge 0} r^{j}$ with $r := 2^{\,1-p}$, and $r > 0$, so $|r| = r$. [step 1.3, L1, L3]

3.1 By the geometric series theorem, $\sum_{j \ge 0} r^{j}$ converges if and only if $r < 1$. [step 2.2, L6]

4.1 Chaining the three equivalences: $\sum_{k \ge 1} 1/k^{p}$ converges $\iff$ the condensed series converges $\iff$ $r < 1$ $\iff$ $p > 1$. [step 2.1, step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Where the threshold comes from.** Condensation turns the $p$-series into a geometric series of ratio $2^{1-p}$, and the geometric threshold $r = 1$ pulls back to $p = 1$. Nothing about the number $1$ is special to the $p$-series; it is the exponent at which the condensed terms stop shrinking.

- **At $p = 1$ the condensed series is $\sum_{j \ge 0} 1$.** Its terms do not tend to $0$, so it diverges, and with it the harmonic series. That instance is worked out on the companion page, together with the older block argument that does not use condensation at all.

- **Only rational exponents are covered, and the gap is real.** For irrational $p$ the expression $k^{p}$ has no meaning in this library yet, so the statement is not merely unproved there, it is unstatable. The same limitation is what keeps the Bertrand-type series $\sum 1/(k (\log k)^{p})$ off this page entirely, the logarithm not being available.
````

### `thm-ratio-test`

````markdown
---
id: thm-ratio-test
kind: theorem
title: "Ratio test: $\\limsup |a_{k+1}/a_k| < 1$ gives absolute convergence and hence convergence, and $\\liminf |a_{k+1}/a_k| > 1$ gives divergence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-limsup-liminf, lem-limsup-exists, thm-geometric-series, thm-direct-comparison-test, lem-series-tail-invariance, lem-series-linearity, lem-absolute-convergence-implies-convergence, lem-nth-term-test, lem-of-abs-value, thm-induction-principle, def-extended-reals, lem-extended-reals-complete, cor-archimedean-reciprocal, def-real-limit, def-integer-power, lem-power-monotone]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.34)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ne 0$ for every $k \in \mathbb{N}$
and put

$$q_k \;:=\; \Big|\frac{a_{k+1}}{a_k}\Big| \;=\; \frac{|a_{k+1}|}{|a_k|} \qquad (k \in \mathbb{N}),$$

a genuine sequence on $\mathbb{N}$, whose limit superior and limit inferior exist
in $\overline{\mathbb{R}}$ for every such $(a_k)$ ([[lem-limsup-exists]]). Then:

1. if $\limsup_{k} q_k < 1$ then $\sum |a_k|$ converges, and hence $\sum a_k$
   converges as well ([[lem-absolute-convergence-implies-convergence]]);
2. if $\liminf_{k} q_k > 1$ then $\sum a_k$ diverges.

The hypothesis $a_k \ne 0$ is what makes $q_k$ exist and is not a convenience: a
single vanishing term leaves the ratio at that index undefined. For a family from
a starting index $m$ the statement is the one above applied to the shifted
sequence $j \mapsto a_{j+m}$ ([[def-series]]), whose ratios are
$|a_{j+m+1}/a_{j+m}|$.

**Nothing is claimed when $\limsup_k q_k \ge 1 \ge \liminf_k q_k$.** In that
regime the test is silent, and it has to be: the companion page carries a
convergent series whose ratios have limit superior $2$, and both a convergent and
a divergent series with ratio limit exactly $1$.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ne 0$ for every $k$; the ratios $q_k = |a_{k+1}|/|a_k|$; the tail bounds $s_n = \sup\{q_k : k \ge n\}$ and $i_n = \inf\{q_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, so that $\limsup_k q_k = \inf\{s_n\}$ and $\liminf_k q_k = \sup\{i_n\}$ ([[def-limsup-liminf]], [[def-extended-reals]]); and the assumption that one of the two hypotheses of the Statement holds.

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and the extended order is total ([[lem-extended-reals-complete]]). In particular $\inf\{s_n\} \le s_n$ and $\sup\{i_n\} \ge i_n$ for every $n$; $q_k \le s_n$ and $q_k \ge i_n$ for every $k \ge n$; a real $t$ exceeding $\inf\{s_n\}$ is not a lower bound of $\{s_n\}$; and a real $u$ below $\sup\{i_n\}$ is not an upper bound of $\{i_n\}$.

[L2] Both quantities exist for every sequence ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x||y|$, so $|a_{k+1}/a_k| = |a_{k+1}|/|a_k|$ ([[lem-of-abs-value]]).

[L4] The principle of induction ([[thm-induction-principle]]).

[L5] The geometric series $\sum_{j \ge 0} t^{j}$ converges when $|t| < 1$; a series converges if and only if each of its tail series converges; and $\sum c\,x_j$ converges when $\sum x_j$ does ([[thm-geometric-series]], [[lem-series-tail-invariance]], [[lem-series-linearity]]).

[L6] Direct comparison: if $0 \le x_j \le y_j$ from some index on and $\sum y_j$ converges then $\sum x_j$ converges ([[thm-direct-comparison-test]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]], [[def-real-limit]]); and for every real $c > 0$ there is a natural $n \ge 1$ with the rational $1/n < c$ ([[cor-archimedean-reciprocal]]).

[L8] Powers: $t^{0} = 1$, $t^{j+1} = t^{j} t$, and $t^{j} > 0$ for $t > 0$ ([[def-integer-power]], [[lem-power-monotone]]).

[L9] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

## Proof

**Proof technique:** cases.

1.1 Assume $\limsup_{k} q_k < 1$. [assume-case lt]

1.2 Assume instead $\liminf_{k} q_k > 1$. [assume-case gt]

1.3 Each $q_k$ is a nonnegative real, being a quotient of a nonnegative real by a positive one, so every $s_n \ge q_n \ge 0$ and hence $\limsup_k q_k \ge 0$. [given, L1, L2, L3]

2.1 In the case $\limsup_k q_k < 1$ the value $\Lambda := \limsup_k q_k$ therefore lies strictly between the reals $0$ and $1$ inclusive of $0$, so it is a real number; put $t := (\Lambda + 1)/2$, a real with $0 \le \Lambda < t < 1$. [step 1.1, step 1.3, L1, choose]

2.2 In the case $\liminf_k q_k > 1$, the real $1$ is not an upper bound of $\{i_n\}$, so there is $N \in \mathbb{N}$ with $i_N > 1$. [step 1.2, L1, choose]

3.1 In the case $\Lambda < 1$: since $t > \Lambda = \inf\{s_n\}$, the real $t$ is not a lower bound of $\{s_n\}$, so there is $N$ with $s_N < t$, and then $q_k \le s_N < t$ for every $k \ge N$. [step 2.1, L1, choose]

3.2 In the case $\liminf_k q_k > 1$: $q_k \ge i_N > 1$ for every $k \ge N$, since $i_N$ is a lower bound of $\{q_k : k \ge N\}$. [step 2.2, L1]

3.3 In the case $\Lambda < 1$: the series $\sum_{j \ge 0} t^{\,j}$ converges since $|t| = t < 1$, hence so does $\sum_{j \ge 0} |a_N| t^{\,j}$. [step 2.1, L5]

4.1 In the case $\Lambda < 1$: for $k \ge N$, $|a_{k+1}|/|a_k| < t$ with $|a_k| > 0$, hence $|a_{k+1}| < t\,|a_k|$. [step 3.1, L3, algebra]

4.2 In the case $\liminf_k q_k > 1$: for $k \ge N$, $|a_{k+1}| > |a_k|$, again multiplying by $|a_k| > 0$. [step 3.2, L3, algebra]

5.1 In the case $\Lambda < 1$: an induction on $j$ gives $|a_{N+j}| \le |a_N|\,t^{\,j}$ for every $j \in \mathbb{N}$. At $j = 0$ this is an equality, since $t^{0} = 1$; and if it holds at $j$ then $|a_{N+j+1}| < t\,|a_{N+j}| \le t\,|a_N| t^{\,j} = |a_N| t^{\,j+1}$, using $t > 0$. [step 4.1, L4, L8]

5.2 In the case $\liminf_k q_k > 1$: an induction on $j$ gives $|a_{N+j}| \ge |a_N| > 0$ for every $j \in \mathbb{N}$. At $j = 0$ it is an equality, and if it holds at $j$ then $|a_{N+j+1}| > |a_{N+j}| \ge |a_N|$. [step 4.2, L3, L4]

6.1 In the case $\Lambda < 1$: with $x_j := |a_{N+j}|$ and $y_j := |a_N| t^{\,j}$ we have $0 \le x_j \le y_j$ for every $j$, so $\sum_j |a_{N+j}|$ converges; that is the $N$-th tail series of $\sum |a_k|$, so $\sum |a_k|$ converges. [step 5.1, step 3.3, L3, L5, L6]

6.2 In the case $\liminf_k q_k > 1$: $(a_k)$ does not converge to $0$. Choose a natural $n \ge 1$ with $1/n < |a_N|$; if $a_k \to 0$ there would be $K$ with $|a_k| < 1/n$ for all $k \ge K$, contradicting $|a_k| \ge |a_N| > 1/n$ at any index $k$ that is at least both $K$ and $N$. [step 5.2, L7, choose]

7.1 In the case $\liminf_k q_k > 1$: by the term test $\sum a_k$ diverges, which is claim 2. [step 6.2, L7]

7.2 In the case $\Lambda < 1$: the series $\sum |a_k|$ having been shown to converge, $\sum a_k$ converges as well; together with the convergence of $\sum |a_k|$ that is claim 1. [step 6.1, L9]

8.1 The two assumed hypotheses are the cases of the disjunction in the Given, and they exhaust it; outside them both claims are vacuous, each hypothesis being false, so the theorem holds for every sequence with nonvanishing terms. [step 7.2, step 7.1, cases-exhaustive] ∎

## Remarks

- **The two halves are not dual, and the asymmetry is real.** Convergence needs the ratios to be *eventually* below a fixed $t < 1$, which $\limsup < 1$ supplies; divergence needs them *eventually* above $1$, which is what $\liminf > 1$ supplies. A hypothesis on $\limsup$ alone can never force divergence, since a single large ratio occurring arbitrarily late says nothing about the size of the terms. That is exactly what [[fs-ratio-limsup-at-least-one-diverges]] records.

- **The geometric series is the only convergent series the proof knows.** Claim 1 is a comparison against $|a_N| t^{j}$, and every later refinement on this page, Kummer's test included, exists because that comparison is too coarse when the ratios approach $1$.
````

### `thm-root-test`

````markdown
---
id: thm-root-test
kind: theorem
title: "Root test: $\\limsup |a_k|^{1/k} < 1$ gives absolute convergence and hence convergence, $> 1$ gives divergence, and $= 1$ decides nothing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-limsup-liminf, lem-limsup-exists, thm-ratio-root-inequality, thm-geometric-series, thm-direct-comparison-test, lem-series-tail-invariance, lem-absolute-convergence-implies-convergence, lem-nth-term-test, thm-nth-roots-exist, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, lem-power-monotone, lem-of-abs-value, def-extended-reals, lem-extended-reals-complete, thm-p-series-rational, lem-nth-root-of-n-tends-to-one, thm-algebra-of-limits, thm-convergence-iff-limsup-equals-liminf, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.33)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \ge 1}$ be a family of reals from the starting index $1$
([[def-series]]), put

$$\rho_k \;:=\; |a_{k+1}|^{1/(k+1)} \qquad (k \in \mathbb{N}), \qquad \rho \;:=\; \limsup_{k} \rho_k \;\in\; \overline{\mathbb{R}} ,$$

and note that $\rho$ exists for every such family, with no hypothesis whatever
([[lem-limsup-exists]], [[def-limsup-liminf]]). Then:

1. if $\rho < 1$ then $\sum_{k \ge 1} |a_k|$ converges, and hence
   $\sum_{k \ge 1} a_k$ converges as well;
2. if $\rho > 1$ then $\sum_{k \ge 1} a_k$ diverges;
3. if $\rho = 1$ neither conclusion follows: $\sum_{k \ge 1} 1/k$ diverges,
   $\sum_{k \ge 1} 1/k^{2}$ converges, and both have $\rho = 1$.

**The root family is shifted, and that is forced.** The classical expression
$|a_n|^{1/n}$ is meaningful only for $n \ge 1$, since $1/0$ is not a rational
number ([[def-rational-power]]), while sequences here are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$. So the roots are written
$\rho_k = |a_{k+1}|^{1/(k+1)}$, which is $|a_n|^{1/n}$ reindexed by $n = k+1$,
exactly the convention of [[thm-ratio-root-inequality]]. Every $\rho_k$ is
defined, including where $a_{k+1} = 0$, by the supplementary clause of
[[def-rational-power]].

**What claim 1 does and does not say.** The comparison with a geometric series
delivers convergence of the series of *absolute values*; that
$\sum_{k \ge 1} a_k$ itself converges is a separate step, and it is supplied by
[[lem-absolute-convergence-implies-convergence]] earlier on this page. Nothing
here identifies the sum, and nothing here says anything about rearranging the
series, which is taken up later in this track.

## Facts & Assumptions

**Given:** A family $(a_k)_{k \ge 1}$ of reals, the roots $\rho_k = |a_{k+1}|^{1/(k+1)}$ for $k \in \mathbb{N}$, the tail suprema $s_n = \sup\{\rho_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, and $\rho = \limsup_k \rho_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and the extended order is total ([[lem-extended-reals-complete]], [[def-extended-reals]]). In particular $\rho \le s_n$ for every $n$, and $\rho_k \le s_n$ for every $k \ge n$; a real $t$ with $\rho < t$ fails to be a lower bound of $\{s_n\}$, and a real $u$ with $s_n > u$ fails to be an upper bound of $\{\rho_k : k \ge n\}$.

[L2] Both quantities exist for every sequence, bounded or not ([[lem-limsup-exists]]).

[L3] Roots and powers: for $x \ge 0$ and natural $n \ge 1$, $x^{1/n} \ge 0$ and $(x^{1/n})^{n} = x$; on the nonnegatives $y \mapsto y^{n}$ is strictly increasing for $n \ge 1$; and $1^{n} = 1$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-power-monotone]]).

[L4] Absolute value: $|x| \ge 0$ for every real $x$ ([[lem-of-abs-value]]).

[L5] The geometric series $\sum_{j \ge 0} t^{j}$ converges when $|t| < 1$, and a series converges if and only if each of its tail series converges ([[thm-geometric-series]], [[lem-series-tail-invariance]]).

[L6] Direct comparison, in the form for families from a general starting index: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges then $\sum x_k$ converges ([[thm-direct-comparison-test]], [[def-series]]).

[L7] If a series converges then its terms tend to $0$; contrapositively, terms not tending to $0$ force divergence ([[lem-nth-term-test]], [[def-real-limit]]).

[L8] $1 \le n^{1/n}$ for every natural $n \ge 1$, and the sequence $(k+1)^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-n-tends-to-one]]); a sequence converging to a real $c$ has $\limsup = \liminf = c$ ([[thm-convergence-iff-limsup-equals-liminf]]); products and quotients of convergent sequences converge, the quotient requiring nonzero limit and nonzero denominators ([[thm-algebra-of-limits]]).

[L9] Laws of rational exponents on a positive base: $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ and $a^{r} > 0$; and for rational $t > 0$, $a > 1$ implies $a^{t} > 1$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L10] For rational $p > 0$, $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

[L11] If $\sum |x_j|$ converges then $\sum x_j$ converges; for a family from the starting index $1$ this is the same statement applied to the shifted sequence $j \mapsto a_{j+1}$, whose series is $\sum_{k \ge 1} a_k$ and whose absolute-value series is $\sum_{k \ge 1} |a_k|$ ([[lem-absolute-convergence-implies-convergence]], [[def-series]]).

## Proof

**Proof technique:** cases.

1.1 Assume $\rho < 1$. [assume-case lt]

1.2 Assume instead $\rho > 1$. [assume-case gt]

1.3 Assume instead $\rho = 1$. [assume-case one]

2.1 Every $\rho_k$ is a nonnegative real, so each $s_n \ge \rho_n \ge 0$ and hence $0$ is a lower bound of $\{s_n\}$, giving $\rho \ge 0$; combined with the case hypothesis $\rho < 1$ this puts $\rho$ strictly between the reals $0$ and $1$, so $\rho$ is a real number. [step 1.1, L1, L2, L3, L4]

2.2 In the case $\rho > 1$, the value $\rho$ is a lower bound of $\{s_n\}$, so $s_n \ge \rho > 1$ for every $n \in \mathbb{N}$. [step 1.2, L1]

2.3 In the case $\rho = 1$, take first $b_k := 1/k$ for $k \ge 1$. Its root family is $\big(1/(k+1)\big)^{1/(k+1)} = 1 / (k+1)^{1/(k+1)}$, and since $(k+1)^{1/(k+1)} \to 1$ with every term at least $1$, the quotient rule gives convergence to $1$, so the limit superior of the root family is $1$; and $\sum_{k \ge 1} 1/k$ diverges, being the case $p = 1$. [step 1.3, L8, L9, L10]

2.4 In the case $\rho = 1$, take next $c_k := 1/k^{2}$ for $k \ge 1$. Its root family is $\big((k+1)^{-2}\big)^{1/(k+1)} = \big((k+1)^{1/(k+1)}\big)^{-2}$, which converges to $1^{-2} = 1$ by the product and quotient rules, so again the limit superior of the root family is $1$; and $\sum_{k \ge 1} 1/k^{2}$ converges, being the case $p = 2$. [step 1.3, L8, L9, L10]

3.1 In the case $\rho < 1$ put $t := (\rho + 1)/2$, a real number with $0 \le \rho < t < 1$; since $t$ is not a lower bound of $\{s_n\}$ there is $N \in \mathbb{N}$ with $s_N < t$. [step 2.1, L1, choose]

3.2 In the case $\rho > 1$, for each $n$ the real $1$ is not an upper bound of $\{\rho_k : k \ge n\}$, so there is $k \ge n$ with $\rho_k > 1$. [step 2.2, L1]

3.3 So at $\rho = 1$ one family gives a divergent series and another a convergent one, and neither of the two conclusions can be drawn, which is claim 3. [step 2.3, step 2.4]

4.1 In the case $\rho < 1$, for every $k \ge N$ we have $\rho_k \le s_N < t$, and raising both nonnegative sides to the power $k+1 \ge 1$ gives $|a_{k+1}| = (\rho_k)^{k+1} < t^{\,k+1}$. [step 3.1, L1, L3]

4.2 In the case $\rho > 1$, whenever $\rho_k > 1$ we get $|a_{k+1}| = (\rho_k)^{k+1} > 1^{\,k+1} = 1$; so by step 3.2 there are indices $k \ge n$ with $|a_{k+1}| > 1$ for every $n$. [step 3.2, L3]

4.3 In the case $\rho < 1$: since $0 < t < 1$ the geometric series $\sum_{j \ge 0} t^{j}$ converges, hence so does its first tail series $\sum_{m \ge 1} t^{m}$. [step 3.1, L5]

5.1 In the case $\rho < 1$: putting $x_j := |a_{j+1}|$ and $y_j := t^{\,j+1}$ for $j \in \mathbb{N}$, step 4.1 gives $0 \le x_j \le y_j$ for all $j \ge N$, and $\sum_j y_j$ is the convergent series of step 4.3; so $\sum_{k \ge 1} |a_k|$ converges. [step 4.1, step 4.3, L4, L6]

5.2 In the case $\rho > 1$: the sequence $j \mapsto a_{j+1}$ does not converge to $0$, because with the rational tolerance $1$ no index $K$ satisfies $|a_{k+1}| < 1$ for all $k \ge K$; hence $\sum_{k \ge 1} a_k$ diverges, which is claim 2. [step 4.2, L7]

6.1 In the case $\rho < 1$: the series $\sum_{k \ge 1} |a_k|$ having been shown to converge, the sequence $j \mapsto a_{j+1}$ has a convergent absolute-value series, so $\sum_{k \ge 1} a_k$ converges as well; together with the convergence of $\sum_{k \ge 1}|a_k|$ that is claim 1. [step 5.1, L11]

7.1 The three cases $\rho < 1$, $\rho > 1$ and $\rho = 1$ exhaust $\overline{\mathbb{R}}$, the extended order being total, so the three claims together cover every family. [step 6.1, step 5.2, step 3.3, L1, cases-exhaustive] ∎

## Remarks

- **The test reads only the tail suprema, and that is why it never needs the roots to converge.** Claim 1 uses a single index $N$ beyond which all roots sit below a fixed $t < 1$; claim 2 uses only that roots above $1$ occur arbitrarily late. Neither argument asks whether $(\rho_k)$ has a limit, which is exactly the advantage of $\limsup$ over $\lim$ here.

- **Claim 2 is proved through the term test, not through a comparison.** What the hypothesis delivers is infinitely many terms of absolute value greater than $1$, which already forbids the terms from tending to $0$. No estimate on the partial sums is needed, and none is available, the terms having no sign.

- **The witnesses in claim 3 are chosen so that both root computations reduce to the single standard limit $n^{1/n} \to 1$.** The companion page carries the same phenomenon with the exponents $-1/2$ and $-2$, where the divergent witness is not the harmonic series.
````

### `thm-series-cauchy-criterion`

````markdown
---
id: thm-series-cauchy-criterion
kind: theorem
title: "A series converges iff for every $\\varepsilon > 0$ there is $N$ with $|a_{m+1} + \\dots + a_n| < \\varepsilon$ for all $n > m \\ge N$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-series, thm-cauchy-criterion-via-lub, lem-convergent-implies-cauchy, def-real-limit, def-finite-sum, lem-finite-sum-laws, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
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
    - title: "Cauchy's convergence test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_convergence_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \sum_{k<n} a_k$
([[def-series]]). Then $\sum a_k$ converges **if and only if**

$$\text{for every real } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } \Big| \sum_{k=m+1}^{n} a_k \Big| < \varepsilon \text{ for all } n > m \ge N .$$

The block $\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \dots + a_n$ of
[[def-finite-sum]], and it equals $s_{n+1} - s_{m+1}$.

This is the Cauchy criterion transported from sequences to series. Its value is
that it decides convergence without producing, or even naming, the sum.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m' \le n'$ then $\sum_{k<n'} a_k = \sum_{k<m'} a_k + \sum_{k=m'}^{n'-1} a_k$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L2] Every convergent sequence of reals is Cauchy ([[lem-convergent-implies-cauchy]]).

[L3] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]).

[L4] Cauchyness reads: for every rational $\varepsilon > 0$ there is $K$ with $|s_p - s_q| < \varepsilon$ for all $p, q \ge K$ ([[def-real-limit]]). Rational and real tolerances give the same condition, because every real $\varepsilon > 0$ exceeds some rational $1/n$ with $n \ge 1$ natural ([[cor-archimedean-reciprocal]]), and conversely every positive rational is a positive real.

## Proof

**Proof technique:** direct.

1.1 For all naturals $m < n$, splitting $s_{n+1}$ at the index $m+1 \le n+1$ gives $s_{n+1} = s_{m+1} + \sum_{k=m+1}^{n} a_k$, hence $\sum_{k=m+1}^{n} a_k = s_{n+1} - s_{m+1}$. [L1, algebra]

1.2 Conversely, every pair $p > q \ge 1$ of naturals is of the form $p = n+1$, $q = m+1$ with $n = p - 1 > m = q - 1 \ge 0$. [given, algebra]

1.3 Suppose $\sum a_k$ converges, that is $(s_n)$ converges; then $(s_n)$ is Cauchy. [given, L2]

1.4 Suppose conversely that the stated condition holds, and let a rational $\varepsilon > 0$ be given; take $N$ for $\varepsilon$ as in the condition and put $K := N + 1$. [given, choose]

2.1 Let a real $\varepsilon > 0$ be given, choose a rational $\varepsilon' $ with $0 < \varepsilon' < \varepsilon$, and take $K$ for $\varepsilon'$ as in the Cauchy condition; put $N := K$. [step 1.3, L4, choose]

2.2 Let $p, q \ge K$. If $p = q$ then $|s_p - s_q| = 0 < \varepsilon$; otherwise one of them exceeds the other, and by symmetry we may take $p > q \ge K \ge 1$. [step 1.4, algebra]

3.1 For all $n > m \ge N$ one has $n + 1 > m + 1 \ge K$, so $\big|\sum_{k=m+1}^{n} a_k\big| = |s_{n+1} - s_{m+1}| < \varepsilon' < \varepsilon$, which is the stated condition. [step 2.1, step 1.1, L4]

3.2 Writing $p = n+1$ and $q = m+1$ gives $n > m$ and $m = q - 1 \ge K - 1 = N$, so the condition applies and $|s_p - s_q| = \big|\sum_{k=m+1}^{n} a_k\big| < \varepsilon$. [step 2.2, step 1.2, step 1.1, step 1.4]

4.1 So $(s_n)$ is Cauchy, hence converges, hence $\sum a_k$ converges. [step 2.2, step 3.2, L4, L3]

5.1 The two implications together are the stated equivalence. [step 3.1, step 4.1] ∎

## Remarks

- **The criterion is stated over blocks, not over partial sums, on purpose.** In applications one estimates a run of consecutive terms $a_{m+1}, \dots, a_n$ directly; the translation into $|s_{n+1} - s_{m+1}|$ is step 1.1 and is done once here so that no later proof has to repeat it.

- **Taking $n = m+1$ recovers the term test.** The single-term block gives $|a_{m+1}| < \varepsilon$ for all $m \ge N$, which is $a_k \to 0$; so [[lem-nth-term-test]] is the weakest consequence of this criterion. The criterion is strictly stronger, since it constrains arbitrarily long blocks and not only single terms.
````

