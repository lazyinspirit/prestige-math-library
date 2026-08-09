# Audit proof-refuter brief — Wave 8, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (13): 22 declared dependencies; 22 cited facts; 16 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 dependency-cone consumer (22 generated manifest edges)

## Target item — `cex-infinite-product-diverges-though-the-series-converges`

Normalized current SHA-256: `d0dabe7ce9443a84203fe048eaf84cd0b14fc56c7c5a80e0df5adcf0c3a5a361`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-infinite-product-diverges-though-the-series-converges
kind: counterexample
title: "$\\prod_{j \\ge 0} \\bigl(1 + (-1)^{j}/\\sqrt{j+2}\\bigr)$ has partial products tending to $0$ although $\\sum_{j \\ge 0} (-1)^{j}/\\sqrt{j+2}$ converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-infinite-product, thm-infinite-product-criterion, thm-alternating-series-test, thm-p-series-rational, thm-of-square-roots, thm-am-gm, thm-direct-comparison-test, lem-series-linearity, lem-alternating-sequence, thm-induction-principle, thm-squeeze, def-monotone-sequence, def-finite-sum, lem-finite-sum-laws, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, def-series, def-real-limit]
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
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $\sum p_k$ converges then $\prod(1 + p_k)$ converges
([[def-infinite-product]], [[def-series]]).

For **nonnegative** $p_k$ this is true, and is
[[thm-infinite-product-criterion]]. For signed $p_k$ it is false, and the witness
is

$$p_j \;:=\; \frac{(-1)^{j}}{\sqrt{\iota(j+2)}} \qquad (j \in \mathbb{N}),$$

with $\sqrt{\ }$ the nonnegative square root ([[thm-of-square-roots]]). The series
$\sum_j p_j$ converges by the alternating series test. The factors $1 + p_j$ are
all positive, since $|p_j| \le 1/\sqrt{2} < 1$; nevertheless the partial products

$$\Pi_m \;=\; \prod_{j<m}\Bigl(1 + \frac{(-1)^{j}}{\sqrt{j+2}}\Bigr)$$

tend to $0$, so no tail of the product has partial products with a nonzero limit
and the product diverges.

**The mechanism, and why no logarithm is needed.** Consecutive factors are paired.
With $a = \iota(2i+2)$ and $b = \iota(2i+3)$, so that $b - a = 1$,

$$\Bigl(1 + \frac{1}{\sqrt a}\Bigr)\Bigl(1 - \frac{1}{\sqrt b}\Bigr) \;=\; 1 - \frac{1}{\sqrt{ab}}\Bigl(1 - \frac{1}{\sqrt a + \sqrt b}\Bigr) \;\le\; 1 - \frac{1}{\iota(4i+6)} ,$$

and $\sum_i 1/\iota(4i+6)$ diverges. So the even partial products are dominated by
$\prod_{i<n}\bigl(1 - 1/\iota(4i+6)\bigr)$, which tends to $0$ by
[[thm-infinite-product-criterion]]; the odd ones differ from them by one bounded
factor.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$ with index maps $e_i = 2i$ and $o_i = 2i+1$; the sequence $p_j = \varepsilon_j/\sqrt{\iota(j+2)}$; the factors $f_j := 1 + p_j$; and the partial products $\Pi_m = \prod_{j<m} f_j$.

[L1] The alternating sequence: $\varepsilon_{e_i} = 1$, $\varepsilon_{o_i} = -1$, $|\varepsilon_j| = 1$, $e_0 = 0$, $e_{i+1} = e_i + 2$, $o_i = e_i + 1$, and $\mathbb{N}$ is the disjoint union of the two ranges ([[lem-alternating-sequence]]).

[L2] Square roots: every $t \ge 0$ has a unique $\sqrt t \ge 0$ with $(\sqrt t)^2 = t$; $\sqrt{uv} = \sqrt u \sqrt v$ and $\sqrt{\ }$ is strictly increasing on the nonnegative reals; and $\sqrt t = t^{1/2}$ ([[thm-of-square-roots]], [[thm-nth-roots-exist]], [[def-rational-power]]).

[L3] The canonical naturals are positive for $n \ge 1$, strictly increasing, with $\iota(m+n) = \iota(m)+\iota(n)$ and $\iota(mn) = \iota(m)\iota(n)$ for $m,n \ge 1$; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] The alternating series test ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L5] AM-GM for two nonnegative reals: $uv \le ((u+v)/2)^{2}$ ([[thm-am-gm]]).

[L6] Finite products: $\prod_{j<0}x_j = 1$, $\prod_{j<n+1}x_j = \bigl(\prod_{j<n}x_j\bigr)x_n$, splitting at an intermediate index, and a finite product of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] For $0 \le q_i < 1$ with $\sum q_i$ divergent, the partial products of $\prod(1 - q_i)$ tend to $0$ ([[thm-infinite-product-criterion]]).

[L9] $\sum_{k\ge1}1/k^{p}$ diverges at $p = 1$; direct comparison in its divergence form; and $\sum c\,x_k$ diverges when $c \ne 0$ and $\sum x_k$ diverges ([[thm-p-series-rational]], [[thm-direct-comparison-test]], [[lem-series-linearity]], [[def-integer-power]], [[def-series]]).

[L10] The squeeze theorem ([[thm-squeeze]]).

[L11] Convergence of an infinite product ([[def-infinite-product]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $j$, $\iota(j+2) \ge \iota(2) = 2$, so $\sqrt{\iota(j+2)} \ge \sqrt 2 > 1$ and $|p_j| = 1/\sqrt{\iota(j+2)} \le 1/\sqrt 2 < 1$; hence every factor satisfies $0 < f_j \le 1 + 1/\sqrt 2 < 2$, and every $\Pi_m$ is positive. [given, L1, L2, L3, L6]

1.2 Fix $i$ and put $a := \iota(2i+2)$, $b := \iota(2i+3)$, so $b - a = 1$ and $a + b = \iota(4i+5)$, both positive. By [L1], $f_{2i} = 1 + 1/\sqrt a$ and $f_{2i+1} = 1 - 1/\sqrt b$. [L1, L3]

1.3 An induction gives that finite products are monotone in nonnegative factors: if $0 \le x_i \le y_i$ for all $i < n$ then $\prod_{i<n}x_i \le \prod_{i<n}y_i$, since both products are nonnegative and $\prod_{i<n+1}x_i = \bigl(\prod_{i<n}x_i\bigr)x_n \le \bigl(\prod_{i<n}y_i\bigr)x_n \le \bigl(\prod_{i<n}y_i\bigr)y_n$. [L6, L7]

2.1 The sequence $\beta_j := 1/\sqrt{\iota(j+2)}$ is positive, nonincreasing and converges to $0$: monotonicity from $0 < \iota(j+2) < \iota(j+3)$ and strict increase of the square root, and convergence because, given a rational $\varepsilon > 0$, an $n \ge 1$ with $1/\iota(n) < \varepsilon^{2}$ gives $\iota(j+2) > (1/\varepsilon)^{2}$ and so $\beta_j < \varepsilon$ for every $j \ge n$. [step 1.1, L2, L3]

2.2 Since $\sqrt b - \sqrt a = (b-a)/(\sqrt a + \sqrt b) = 1/(\sqrt a + \sqrt b)$, one has $\dfrac1{\sqrt a} - \dfrac1{\sqrt b} = \dfrac{\sqrt b - \sqrt a}{\sqrt{a}\sqrt{b}} = \dfrac{1}{\sqrt{ab}\,(\sqrt a + \sqrt b)}$, so $P_i := f_{2i}f_{2i+1} = 1 + \dfrac1{\sqrt a} - \dfrac1{\sqrt b} - \dfrac1{\sqrt{ab}} = 1 - \dfrac{1}{\sqrt{ab}}\Bigl(1 - \dfrac{1}{\sqrt a + \sqrt b}\Bigr)$. [step 1.2, L2, algebra]

2.3 Here $\sqrt a \ge \sqrt 2 > 1$ and $\sqrt b \ge \sqrt 3 > 1$, so $\sqrt a + \sqrt b > 2$ and $1 - 1/(\sqrt a + \sqrt b) > 1/2$; and by [L5], $\sqrt{ab} \le (a+b)/2 = \iota(4i+5)/2$, so $1/\sqrt{ab} \ge 2/\iota(4i+5)$. [step 1.2, L2, L3, L5]

2.4 An induction gives $\Pi_{2n} = \prod_{i<n} P_i$ for every $n$: at $n = 0$ both are the empty product $1$, and $\Pi_{2(n+1)} = \Pi_{2n} f_{2n} f_{2n+1} = \Pi_{2n}P_n$. [step 1.2, L6, L7]

3.1 By the alternating series test $\sum_j p_j = \sum_j \varepsilon_j \beta_j$ converges. [step 2.1, L4]

3.2 Combining, $P_i \le 1 - \bigl(2/\iota(4i+5)\bigr)\cdot\tfrac12 = 1 - 1/\iota(4i+5) \le 1 - q_i$, where $q_i := 1/\iota(4i+6)$, using $\iota(4i+5) < \iota(4i+6)$; and $0 < P_i$ by step 1.1, while $0 < q_i < 1$. [step 1.1, step 2.2, step 2.3, L3]

4.1 Hence $0 < \Pi_{2n} = \prod_{i<n}P_i \le \prod_{i<n}(1 - q_i)$ for every $n$. [step 1.1, step 3.2, step 2.4, step 1.3]

4.2 The series $\sum_i q_i$ diverges: $6(i+1) = 6i+6 \ge 4i+6$, so $\iota(4i+6) \le 6\,\iota(i+1)$ and $q_i \ge \tfrac16\cdot\dfrac1{\iota(i+1)}$; the series $\sum_i \tfrac16 \cdot 1/\iota(i+1)$ diverges, being a nonzero multiple of the harmonic series, so $\sum_i q_i$ diverges by comparison. [step 3.2, L3, L9]

5.1 By [L8] applied to $(q_i)$, the partial products $\prod_{i<n}(1-q_i)$ tend to $0$; with step 4.1 and the squeeze, $\Pi_{2n} \to 0$. [step 4.1, step 4.2, L8, L10]

6.1 Also $\Pi_{2n+1} = \Pi_{2n} f_{2n}$ with $0 < f_{2n} < 2$, so $0 < \Pi_{2n+1} < 2\,\Pi_{2n}$ and $\Pi_{2n+1} \to 0$ as well. [step 1.1, step 5.1, L6, L10]

7.1 Therefore $\Pi_m \to 0$: given a rational $\varepsilon > 0$, choose $N$ with $\Pi_{2n} < \varepsilon/2$ for all $n \ge N$; then for $m \ge 2N+1$, writing $m$ as $2n$ or $2n+1$ according to the partition of $\mathbb{N}$ by the two index maps, in either case $n \ge N$ and $\Pi_m \le 2\Pi_{2n} < \varepsilon$. [step 1.1, step 5.1, step 6.1, L1]

8.1 For every $N'$ the $N'$-th tail products satisfy $\prod_{j=N'}^{N'+n-1}f_j = \Pi_{N'+n}/\Pi_{N'}$ with $\Pi_{N'} > 0$ fixed, so they tend to $0$ too; no tail has partial products with a nonzero limit, and $\prod_j (1+p_j)$ diverges. [step 1.1, step 7.1, L6, L11]

9.1 So $\sum_j p_j$ converges while $\prod_j (1+p_j)$ diverges, and the refuted claim fails; the hypothesis it is missing is a sign condition, or absolute convergence of $\sum p_j$, as in [[thm-infinite-product-criterion]]. [step 3.1, step 8.1, L8, L11] ∎

## Remarks

- **The pairing is what replaces the logarithm.** The classical argument writes $\log(1+p_j) = p_j - p_j^{2}/2 + \cdots$ and observes that $\sum p_j$ converges while $\sum p_j^{2}$ diverges, so the logarithms sum to $-\infty$. That expansion is not available at this point in the reading order. Pairing consecutive factors reproduces the same effect with one algebraic identity: the first-order terms cancel to size $1/(\sqrt{ab}(\sqrt a + \sqrt b))$, of order $i^{-3/2}$, while the cross term $-1/\sqrt{ab}$, of order $i^{-1}$, survives, and its sum diverges.

- **Absolute convergence would settle it the other way.** Here $\sum_j |p_j| = \sum_j 1/\sqrt{\iota(j+2)}$ diverges, so claim 4 of [[thm-infinite-product-criterion]] does not apply. That claim is exactly the hypothesis under which a signed product is safe.

- **The refinement that decides every case is deferred.** For signed $(p_j)$ with $\sum p_j$ convergent, the classical criterion is convergence of $\sum p_j^{2}$; for this witness $p_j^{2} = 1/\iota(j+2)$ and that series diverges, which is consistent with what is proved above. The criterion itself needs the logarithm and is recorded in [[rem-sums-proved-to-exist-but-not-evaluated]].
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-infinite-product-diverges-though-the-series-converges",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ejwingler.people.ysu.edu/TBB-Real.pdf",
    "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
  ],
  "rationale": "Thomson–Bruckner–Bruckner supplies the product convention, while Binghamton Chapter 6 supports the logarithmic square-sum mechanism and the alternating square-root obstruction. The item's paired-product estimates and exact indexing are locally developed semantic support.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-absolute-convergence.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-alternating-sequence",
      "source_section": "Statement",
      "quote": "2. **The partition.** $\\mathbb{N}$ is the **disjoint union** of the ranges of $e$",
      "uses": [
        "1.1",
        "1.2",
        "7.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "$a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$;",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.3",
        "3.2",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.3",
        "3.2",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "the reciprocals of the naturals get below every positive bound, is the statement",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.3",
        "3.2",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-alternating-series-test",
      "source_section": "Statement",
      "quote": "Let $(\\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-am-gm",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$ and let $a_0, \\dots, a_{n-1} \\in \\mathbb{R}$",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.1",
        "1.3",
        "2.4",
        "6.1",
        "8.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "finite products as in [[def-finite-sum]]. Then:",
      "uses": [
        "1.1",
        "1.3",
        "2.4",
        "6.1",
        "8.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.3",
        "2.4"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-infinite-product-criterion",
      "source_section": "Statement",
      "quote": "partial products with a nonzero limit.",
      "uses": [
        "5.1",
        "9.1"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-p-series-rational",
      "source_section": "Statement",
      "quote": "In particular the harmonic series $\\sum_{k \\ge 1} 1/k$ diverges, at $p = 1$, and",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "$\\sum a_k$ diverges if and only if $\\sum c\\,a_k$ diverges.",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L9",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L9",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Convergence, the sum, divergence.** The **series** of $(a_k)$, written",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-squeeze",
      "source_section": "Statement",
      "quote": "theorem, and it is why the squeeze is a tool for *establishing* convergence",
      "uses": [
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-infinite-product",
      "source_section": "Definition",
      "quote": "**Convergence.** The infinite product $\\prod a_k$ **converges** when there exists",
      "uses": [
        "8.1",
        "9.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L2"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "Verified the stated inference at step 2.3.",
      "step": "2.3",
      "inputs": [
        "L5",
        "1.2",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-4",
      "claim": "Verified the stated inference at step 2.4.",
      "step": "2.4",
      "inputs": [
        "1.2",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L4"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Verified the stated inference at step 3.2.",
      "step": "3.2",
      "inputs": [
        "1.1",
        "2.2",
        "2.3",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "1.1",
        "3.2",
        "2.4",
        "1.3"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Verified the stated inference at step 4.2.",
      "step": "4.2",
      "inputs": [
        "3.2",
        "L3",
        "L9"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "L8",
        "4.1",
        "4.2",
        "L10"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Verified the stated inference at step 6.1.",
      "step": "6.1",
      "inputs": [
        "1.1",
        "5.1",
        "L6",
        "L10"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "Verified the stated inference at step 7.1.",
      "step": "7.1",
      "inputs": [
        "1.1",
        "5.1",
        "6.1",
        "L1"
      ]
    },
    {
      "id": "step-8-1",
      "claim": "Verified the stated inference at step 8.1.",
      "step": "8.1",
      "inputs": [
        "1.1",
        "7.1",
        "L6",
        "L11"
      ]
    },
    {
      "id": "step-9-1",
      "claim": "Verified the stated inference at step 9.1.",
      "step": "9.1",
      "inputs": [
        "3.1",
        "8.1",
        "L8",
        "L11"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and step 2.4 account for the empty-index case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 2.4 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the unit boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain all admissible degenerate cases."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain the threshold endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 7.1 supplies its choice."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    }
  ]
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-infinite-product",
    "declared_target": "def-infinite-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-infinite-product-criterion",
    "declared_target": "thm-infinite-product-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-alternating-series-test",
    "declared_target": "thm-alternating-series-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-am-gm",
    "declared_target": "thm-am-gm",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-squeeze",
    "declared_target": "thm-squeeze",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-monotone-sequence",
    "declared_target": "def-monotone-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-nth-roots-exist",
    "declared_target": "thm-nth-roots-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-infinite-product-diverges-though-the-series-converges",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
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

## Full text of every cited or declared item (23)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
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

### `def-infinite-product`

````markdown
---
id: def-infinite-product
kind: definition
title: "Infinite products: partial products, and convergence to a nonzero limit after finitely many vanishing factors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, lem-finite-sum-laws, lem-of-no-zero-divisors, def-series, thm-algebra-of-limits, lem-limit-unique, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "W. Rudin, Real and Complex Analysis, 3rd ed., Ch. 15"
      url: "https://en.wikipedia.org/wiki/Walter_Rudin"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals. Its **partial products** are

$$\Pi_n \;:=\; \prod_{k<n} a_k \qquad (n \in \mathbb{N}),$$

the finite products of [[def-finite-sum]], so that $\Pi_0 = 1$, the empty
product, and $\Pi_{n+1} = \Pi_n\, a_n$. For $N \in \mathbb{N}$ the **$N$-th tail
products** are $T^{(N)}_n := \prod_{j<n} a_{N+j}$, again a sequence in $n$.

**Convergence.** The infinite product $\prod a_k$ **converges** when there exists
$N \in \mathbb{N}$ such that

1. $a_k \ne 0$ for every $k \ge N$, and
2. the sequence $(T^{(N)}_n)_n$ of $N$-th tail products converges
   ([[def-real-limit]]) to a limit $\ell \ne 0$.

Its **value** is then

$$\prod_{k=0}^{\infty} a_k \;:=\; \Bigl(\prod_{k<N} a_k\Bigr)\cdot \ell .$$

If no such $N$ exists, the product **diverges**.

**The value does not depend on $N$, and that is a proof obligation, discharged
here.** First, if $N$ is such an index then so is every $N' \ge N$: condition 1 is
inherited, and splitting the finite product ([[lem-finite-sum-laws]]) gives, for
$n \ge N' - N$,

$$T^{(N)}_{n} \;=\; \Bigl(\prod_{k=N}^{N'-1} a_k\Bigr)\, T^{(N')}_{\,n - (N'-N)} ,$$

where the bracketed factor is a product of finitely many nonzero reals and so is
itself nonzero. Hence $(T^{(N')}_m)_m$ converges, to
$\ell' = \ell / \prod_{k=N}^{N'-1}a_k$ by the algebra of limits
([[thm-algebra-of-limits]]), and $\ell' \ne 0$ because $\ell \ne 0$. Second, the
two candidate values agree:

$$\Bigl(\prod_{k<N'}a_k\Bigr)\ell' = \Bigl(\prod_{k<N}a_k\Bigr)\Bigl(\prod_{k=N}^{N'-1}a_k\Bigr)\frac{\ell}{\prod_{k=N}^{N'-1}a_k} = \Bigl(\prod_{k<N}a_k\Bigr)\ell ,$$

again by splitting. Finally, any two admissible indices $N_1, N_2$ are both at
most $\max\{N_1,N_2\}$, which is therefore admissible and gives the same value as
each. Since a convergent sequence has exactly one limit
([[lem-limit-unique]]), the displayed value is a single well-determined real
number.

**Why a zero limit is excluded.** The definition demands $\ell \ne 0$, not merely
that the tail products converge. Both parts of the definition are doing work, and
against different naive alternatives. Against the naive "$\Pi_n$ converges", with
no tail clause at all: *every* sequence with a single zero factor has all its
partial products equal to $0$ from that index on, hence convergent to $0$, so
"the product converges" would say nothing whatever about the factors — which is
what condition 1, the restriction to a tail of nonzero factors, repairs. Against
the naive "some tail of the partial products converges", which keeps condition 1
and drops only $\ell \ne 0$, condition 1 no longer helps, and a product like
$\prod_{j \ge 0}\bigl(1 - 1/(j+2)\bigr)$, all of whose factors are nonzero, has
partial products $1/(n+1)$ tending to $0$; calling that convergent would make the
value $0$ without any factor being $0$, and would destroy the analogy with series
in which a convergent product may be divided by. That product is worked out on the companion examples page.

## Remarks

- **The value is $0$ exactly when some factor is $0$.** With $N$ as in the
  definition, the value is $\bigl(\prod_{k<N}a_k\bigr)\ell$ with $\ell \ne 0$, and
  a finite product vanishes exactly when one of its factors does — a field has no
  zero divisors ([[lem-of-no-zero-divisors]]), so an induction on the recursion
  $\prod_{k<n+1}a_k = \bigl(\prod_{k<n}a_k\bigr)a_n$ of [[def-finite-sum]] gives
  both directions. So a convergent product with all factors nonzero has
  nonzero value, and this is the property that makes convergent products behave
  like nonzero numbers.

- **Finitely many factors may be $0$, or negative, or anything at all.** The
  definition looks only at a tail, exactly as [[def-series]] does for series
  through its tail clause; conditions 1 and 2 constrain no initial segment.

- **Notation.** $\prod_{k \ge m} a_k$ denotes the product of the family from $m$,
  that is the product of the sequence $j \mapsto a_{j+m}$, by the same convention
  [[def-series]] uses for series; the two readings agree at $m = 0$.

- **Nothing here presumes a logarithm.** The classical criteria for infinite
  products are usually derived by taking logarithms; the logarithm is not
  available at this point in the reading order, and
  [[thm-infinite-product-criterion]] is proved from elementary inequalities
  instead.
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

### `def-monotone-sequence`

````markdown
---
id: def-monotone-sequence
kind: definition
title: "Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-complete-ordered-field, def-bounded-set, def-nat-order, thm-nat-linear-order, lem-nat-discrete, thm-induction-principle]
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

## Remarks

- **The naming is the one that keeps "increasing" strict.** Some texts use
  *increasing* for what is called *nondecreasing* here and *strictly increasing*
  for what is called *increasing*. This library follows the convention in which
  the unqualified word is strict, and always writes *nondecreasing* when
  equality is allowed, so that no statement on this page depends on which
  convention a reader arrives with. Where a proof needs the weak form it says
  *nondecreasing*, and where it needs the strict form it says *increasing*.

- **Eventual monotonicity is exactly monotonicity of a tail**, and by
  [[lem-limit-of-tail]] a sequence and its tails converge to the same limits and
  are Cauchy together. So every convergence statement about monotone sequences on
  this page extends verbatim to eventually monotone sequences, with the limit
  unchanged; only statements about specific terms, such as the identification of
  the limit as the supremum of the *whole* range, need the hypothesis at every
  index. The monotone convergence theorem is a case in point: an eventually
  nondecreasing bounded sequence converges, but to the supremum of the range of
  the monotone tail, which may be smaller than the supremum of the whole range.

- **Monotone is strictly weaker than strictly monotone, and neither is generic.**
  A constant sequence is monotone and not strictly monotone; the sequence with
  terms $1$ and $-1$ alternating ([[lem-alternating-sequence]]) is not monotone
  and not eventually monotone, since every tail contains both values infinitely
  often. That sequence is bounded, so boundedness alone gives neither form of
  monotonicity; what it does give is a monotone *subsequence*
  ([[lem-peak-monotone-subsequence]]), and that is the route to
  Bolzano-Weierstrass.
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

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
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

### `lem-series-linearity`

````markdown
---
id: lem-series-linearity
kind: lemma
title: "Convergent series add and scale termwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, thm-algebra-of-limits, lem-finite-sum-laws, def-finite-sum]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge
([[def-series]]), and let $c \in \mathbb{R}$. Then:

1. $\sum (a_k + b_k)$ converges, with
   $\displaystyle\sum_{k=0}^{\infty}(a_k + b_k) = \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k$;
2. $\sum c\,a_k$ converges, with
   $\displaystyle\sum_{k=0}^{\infty} c\,a_k = c \sum_{k=0}^{\infty} a_k$.

Moreover, for $c \ne 0$ and an arbitrary sequence $(a_k)$, whose series is not
assumed to converge:

3. $\sum c\,a_k$ converges **if and only if** $\sum a_k$ converges. Equivalently,
   $\sum a_k$ diverges if and only if $\sum c\,a_k$ diverges.

Claim 3 is the form used whenever a comparison is made against a constant
multiple of a known series.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $c \in \mathbb{R}$, with partial sums $s_n = \sum_{k<n} a_k$ and $t_n = \sum_{k<n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Additivity and scaling of finite sums: $\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ and $\sum_{k<n} c\,a_k = c \sum_{k<n} a_k$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n + y_n \to x + y$ and $c\,x_n \to c\,x$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The partial sums of $\sum (a_k + b_k)$ are $\sum_{k<n}(a_k + b_k) = s_n + t_n$, and those of $\sum c\,a_k$ are $\sum_{k<n} c\,a_k = c\,s_n$. [given, L1]

1.2 Assume $\sum a_k$ and $\sum b_k$ converge, say $s_n \to S$ and $t_n \to T$. [given]

2.1 Then $s_n + t_n \to S + T$, so $\sum(a_k + b_k)$ converges with sum $S + T$, which is claim 1. [step 1.2, step 1.1, L2]

2.2 Likewise $c\,s_n \to c\,S$, so $\sum c\,a_k$ converges with sum $c\,S$, which is claim 2. [step 1.2, step 1.1, L2]

3.1 For claim 3, let $c \ne 0$ and let $(a_k)$ be arbitrary. If $\sum a_k$ converges then $\sum c\,a_k$ converges by claim 2. [step 2.2]

3.2 Conversely, if $\sum c\,a_k$ converges then applying claim 2 to the sequence $(c\,a_k)$ and the scalar $1/c$, which exists since $c \ne 0$, shows that $\sum (1/c)(c\,a_k) = \sum a_k$ converges. [step 2.2, algebra]

4.1 The two implications are claim 3, and its contrapositive form is the statement about divergence. [step 3.1, step 3.2] ∎

## Remarks

- **There is no product rule here, and there is no rule for $\sum a_k b_k$.** The proof works because a finite sum is additive and homogeneous, and neither property has an analogue for products. Multiplying series is a genuinely harder question, requiring absolute convergence, and it is not treated on this page.

- **Claim 3 needs $c \ne 0$ and nothing else.** In particular it does not need either series to converge, which is what makes it usable in the divergence direction: scaling a divergent series by a nonzero constant leaves it divergent.
````

### `rem-sums-proved-to-exist-but-not-evaluated`

````markdown
---
id: rem-sums-proved-to-exist-but-not-evaluated
kind: remark
title: "Selected sums and products on this page that are proved to exist without being evaluated, and what their evaluation waits for"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-alternating-series-test, thm-infinite-product-criterion, thm-decimal-expansions, thm-riemann-series-theorem, rem-rearrangement-in-higher-dimensions, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Remark

A convergence test proves that a limit exists; it does not produce the limit. On
this page that gap is systematic, and this remark records the principal places
where a familiar value or formula is deferred and what would close it. **Every
scope statement below is relative to the reading
order**: the material named is developed elsewhere in this library, later than
this page, and nothing here says it is absent from the library.

**The alternating harmonic series.** [[thm-alternating-series-test]] proves that
$\sum_{j \ge 0} (-1)^j/(j+1)$ converges, and its error bound pins the sum between
consecutive partial sums; the companion examples page uses that to prove the sum lies
strictly between $1/2$ and $1$. No closed
expression for the sum is given, and none can be given here: the classical value
is a logarithm, and the logarithm is introduced later in the reading order. So the
sum is named, bracketed, and left unevaluated.

**The two-positive-one-negative rearrangement.** The same is true one level up.
The companion examples page proves that taking two
positive terms for each negative one produces a convergent rearrangement whose sum
is $3/2$ times the sum of the original series. That statement is exact and complete
as it stands, and it is deliberately *relative*: it compares two sums rather than
evaluating either. The familiar form of the same fact multiplies a logarithm by
$3/2$, and it becomes available at the same later point.

**The refined criterion for infinite products.** [[thm-infinite-product-criterion]]
settles $\prod(1+p_k)$ completely for $p_k \ge 0$, settles $\prod(1-p_k)$ for
$0 \le p_k < 1$, and proves that $\sum |p_k|$ convergent forces $\prod(1+p_k)$
convergent. It does **not** settle the remaining case: a signed sequence $(p_k)$
with $\sum p_k$ convergent but $\sum |p_k|$ divergent. The classical criterion
there is that $\prod(1+p_k)$ converges exactly when $\sum p_k^{2}$ converges.
A standard proof expands $\log(1+x)$; that route belongs with the logarithm,
later in the reading order. The gap is not hypothetical: the companion
examples page exhibits a signed
sequence with $\sum p_k$ convergent whose partial products tend to $0$.

**Rearrangement beyond $\mathbb{R}$.** [[thm-riemann-series-theorem]] and
[[cor-unconditional-iff-absolute-in-r]] together answer the rearrangement question
for real series completely. The corresponding question for series of vectors is
raised, and left open at this point in the reading order, in
[[rem-rearrangement-in-higher-dimensions]], which states no theorem about it.

**Two places where existence is constructive but no formula is claimed.**
[[thm-decimal-expansions]] produces, for every $x \in [0,1)$, its digit sequence in
base $b$, by a recursion that depends on $x$; it gives no closed expression for
the digits of any particular real, and it claims none. Likewise
[[thm-riemann-series-theorem]] produces, for each prescribed target, a bijection of
$\mathbb{N}$ defined by a recursion over the terms of the series; no formula for
that bijection is given, and the theorem asserts only that one exists. In both
cases the construction is fully determined by the data, with no choice made
anywhere, which is a stronger statement than mere existence and a weaker one than
a formula.

**What this list does not claim.** It is not a census of every convergence result
on the page. In particular, the Dirichlet, alternating-series, and Abel tests and
their worked applications establish additional convergence without evaluating a
numerical sum; their purpose here is to supply convergence criteria, not to flag
a familiar value whose evaluation waits for a later object. Among the structural
comparison theorems, [[thm-dirichlet-rearrangement]], [[thm-mertens]],
[[cor-cauchy-product-absolute]], [[thm-grouping-of-series]] and
[[thm-double-series-fubini]] identify sums with one another and evaluate nothing,
which is exactly what makes them usable wherever the sums themselves are unknown.
````

### `thm-alternating-series-test`

````markdown
---
id: thm-alternating-series-test
kind: theorem
title: "The alternating series test: if $(b_k)$ is nonincreasing with $b_k \\to 0$ then $\\sum_{k} (-1)^{k} b_k$ converges, the sum lies between any two consecutive partial sums, and the error after $n$ terms is at most $b_n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-test, lem-alternating-sequence, def-monotone-sequence, lem-limit-preserves-order, lem-subsequence-inherits-limit, thm-induction-principle, lem-of-abs-value, def-series, def-real-limit]
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
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],
that is the unique sequence of reals with $\varepsilon_0 = 1$ and
$\varepsilon_{k+1} = -\varepsilon_k$, which is what is usually written
$\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that
$\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, and every natural number is
$e_j$ for exactly one $j$ or $o_j$ for exactly one $j$.

Let $(b_k)$ be a sequence of reals that is nonincreasing
([[def-monotone-sequence]]) and converges to $0$ ([[def-real-limit]]); then
$b_k \ge 0$ for every $k$. Write $t_n := \sum_{k<n} \varepsilon_k b_k$ for the
partial sums ([[def-series]]). Then:

1. the series $\sum \varepsilon_k b_k$ converges; write $L$ for its sum;
2. $t_{e_j} \le L \le t_{o_j}$ for every $j \in \mathbb{N}$, and for every
   $n \in \mathbb{N}$ the sum $L$ lies between the two consecutive partial sums
   $t_n$ and $t_{n+1}$;
3. $|L - t_n| \le b_n$ for every $n \in \mathbb{N}$.

Claim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms
$\varepsilon_0 b_0, \dots, \varepsilon_{n-1}b_{n-1}$, differs from the sum by at
most the first term omitted.

**Only claim 1 is a corollary of [[thm-dirichlet-test]].** Claims 2 and 3 are not:
they come from the interlacing of the even-index and odd-index partial sums, and
that argument is carried out below rather than smuggled into the Dirichlet
estimate, which produces no bracketing at all.

## Facts & Assumptions

**Given:** A nonincreasing sequence $(b_k)$ of reals with $b_k \to 0$, the alternating sequence $(\varepsilon_k)$ with its index maps $e$ and $o$, and the partial sums $t_n = \sum_{k<n} \varepsilon_k b_k$.

[L1] The alternating sequence and its index maps: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, $|\varepsilon_k| = 1$; $e_0 = 0$ and $e_{j+1} = e_j + 2$; $o_0 = 1$ and $o_{j+1} = o_j + 2$; both $e$ and $o$ are strictly increasing; $\mathbb{N}$ is the disjoint union of their ranges; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Dirichlet's test: if the partial sums of $\sum x_k$ are bounded and $(y_k)$ is nonincreasing with $y_k \to 0$, then $\sum x_k y_k$ converges ([[thm-dirichlet-test]]).

[L5] A subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]).

[L6] Partial sums satisfy $t_0 = 0$ and $t_{n+1} = t_n + \varepsilon_n b_n$ ([[def-series]]).

[L7] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $b_k \ge 0$. [given, L2, L3]

1.2 Writing $A_n = \sum_{k<n}\varepsilon_k$, an induction gives that for every $n$ either $A_n = 0$ and $\varepsilon_n = 1$, or $A_n = 1$ and $\varepsilon_n = -1$: at $n = 0$ we have $A_0 = 0$ and $\varepsilon_0 = 1$; and if $A_n = 0$ and $\varepsilon_n = 1$ then $A_{n+1} = 1$ and $\varepsilon_{n+1} = -1$, while if $A_n = 1$ and $\varepsilon_n = -1$ then $A_{n+1} = 0$ and $\varepsilon_{n+1} = 1$. In particular $|A_n| \le 1$ for every $n$. [L1, L6, L7]

1.3 For every $j$ one has $o_j = e_j + 1$ and $e_{j+1} = o_j + 1$, by induction: $o_0 = 1 = e_0 + 1$; and if $o_j = e_j + 1$ then $e_{j+1} = e_j + 2 = o_j + 1$ and $o_{j+1} = o_j + 2 = e_{j+1} + 1$. [L1, L7]

1.4 By [L6], $t_{n+1} - t_n = \varepsilon_n b_n$ for every $n$; hence $t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{o_j + 1} = t_{o_j} - b_{o_j}$. [L1, L6]

2.1 The partial sums of $\sum \varepsilon_k$ are bounded by step 1.2 and $(b_k)$ is nonincreasing with limit $0$, so $\sum \varepsilon_k b_k$ converges by Dirichlet's test; write $L$ for its sum, so that $t_n \to L$. [step 1.2, given, L4]

2.2 Using step 1.3, $t_{o_j} = t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{e_{j+1}} = t_{o_j + 1} = t_{o_j} - b_{o_j}$, so $t_{e_{j+1}} = t_{e_j} + b_{e_j} - b_{o_j}$ and $t_{o_{j+1}} = t_{e_{j+1}} + b_{e_{j+1}} = t_{o_j} - b_{o_j} + b_{e_{j+1}}$. [step 1.3, step 1.4]

3.1 Since $e_j < o_j < e_{j+1}$ and $(b_k)$ is nonincreasing, $b_{e_j} - b_{o_j} \ge 0$ and $b_{e_{j+1}} - b_{o_j} \le 0$; so by step 2.2 the sequence $(t_{e_j})_j$ is nondecreasing and the sequence $(t_{o_j})_j$ is nonincreasing. [step 1.3, step 2.2, L2]

3.2 The maps $e$ and $o$ are strictly increasing, so $(t_{e_j})_j$ and $(t_{o_j})_j$ are subsequences of $(t_n)$ and both converge to $L$. [step 2.1, L1, L5]

4.1 Fix $j$. For every $m \ge j$ one has $t_{e_j} \le t_{e_m}$, and $(t_{e_m})_m$ converges to $L$, so $t_{e_j} \le L$; symmetrically $t_{o_j} \ge L$. This is the first half of claim 2. [step 3.1, step 3.2, L3]

5.1 Let $n \in \mathbb{N}$. If $n = e_j$ then $t_n = t_{e_j} \le L$ and $t_{n+1} = t_{e_j+1} = t_{o_j} \ge L$; if $n = o_j$ then $t_n = t_{o_j} \ge L$ and $t_{n+1} = t_{o_j+1} = t_{e_{j+1}} \le L$. Since every $n$ is of exactly one of these two forms, $L$ always lies between $t_n$ and $t_{n+1}$, which is the second half of claim 2. [step 1.3, step 4.1, L1]

6.1 Consequently $|L - t_n| \le |t_{n+1} - t_n| = |\varepsilon_n b_n| = |\varepsilon_n|\,b_n = b_n$ for every $n$, using $b_n \ge 0$ and $|\varepsilon_n| = 1$; this is claim 3. [step 5.1, step 1.4, step 1.1, L1, L8] ∎

## Remarks

- **The two hypotheses are not interchangeable with "$b_k \to 0$" alone.** A null sequence that is not monotone can make $\sum \varepsilon_k b_k$ diverge, and the bracketing of step 3.1 is exactly where monotonicity enters; the error bound is false without it. The test as stated is the classical Leibniz criterion.

- **Why the index maps rather than "$2j$" and "$2j+1$".** The even and odd index maps come from [[lem-alternating-sequence]] together with the parity object itself, and step 1.3 is the only arithmetic needed about them. Rebuilding $(-1)^k$ by a fresh recursion inside this proof, and then proving afresh that the even indices and the odd indices partition $\mathbb{N}$, is precisely what that lemma exists to prevent.

- **What the test does not give.** It produces the sum $L$ as a limit and bounds the error, and it identifies $L$ with no closed expression. For the alternating harmonic series the value is not available at this point in the reading order; see [[rem-sums-proved-to-exist-but-not-evaluated]].
````

### `thm-am-gm`

````markdown
---
id: thm-am-gm
kind: theorem
title: "The arithmetic mean, geometric mean inequality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, lem-finite-sum-laws, lem-of-zero-mult, def-integer-power, thm-nth-roots-exist, thm-induction-principle, thm-recursion, lem-of-square-positive, lem-power-monotone, lem-power-laws, prop-of-multiply-inequalities, lem-of-sign-rules, lem-of-add-order, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field, def-nat-order, thm-nat-linear-order, lem-nat-order-add-compatible, lem-nat-discrete, lem-nat-add-associative, lem-nat-add-commutative]
justified_by: []
aliases: [thm-am-gm-inequality]
landmark: true
short: "$(\\prod a_k)^{1/n} \\le \\frac1n \\sum a_k$"
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
    - title: "MIT 18.100A, AM-GM inequality handout"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_rec1.pdf"
    - title: "Finite inequalities (Cornell University)"
      url: "https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf"
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $a_0, \dots, a_{n-1} \in \mathbb{R}$
with $a_k \ge 0$ for every $k < n$. Write

$$A := \frac{1}{n}\sum_{k<n} a_k, \qquad G := \Big(\prod_{k<n} a_k\Big)^{1/n},$$

the **arithmetic mean** and the **geometric mean**, where the $n$-th root exists
because $\prod_{k<n} a_k \ge 0$ ([[thm-nth-roots-exist]],
[[lem-finite-sum-laws]]) and $n$ denotes the canonical natural
$\iota(n) \in \mathbb{R}$, which is invertible since $n \ge 1$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). Then

$$\prod_{k<n} a_k \le A^{n}, \qquad \text{equivalently} \qquad G \le A,$$

and equality holds in either form if and only if $a_0 = a_1 = \dots = a_{n-1}$.

The proof is **Cauchy's forward-backward induction**: the statement is proved
first along a doubling sequence, by doubling, and then pulled back from a member
of that sequence to every smaller $n$ by a descent that replaces the missing
entry with the arithmetic mean of the others. That is why the induction below
runs over the doubling scheme and not over $n$ directly.

One point of hygiene decides how the doubling scheme is written. The doubling
index has to be a **natural number**, because it is used as the length of a list,
as a bound on an index, and as the starting point of a descent. The symbol $2^{j}$
would not do: [[def-integer-power]] defines powers of a *real* base, so $2^{j}$
denotes the real number $\iota(2)^{j}$, which is not a natural number and cannot
index anything. The doubling sequence is therefore defined inside $\mathbb{N}$,
by recursion ([[thm-recursion]]):

$$N_0 = 1, \qquad N_{j+1} = N_j + N_j \quad (j \in \mathbb{N}),$$

and the induction below runs over $j$, with $N_j$ as the list length. No
identity relating $N_j$ to any real power is needed anywhere, and none is claimed.

## Facts & Assumptions

**Given:** A natural $n \ge 1$ and reals $a_0, \dots, a_{n-1} \ge 0$; for $m \ge 1$ let $P(m)$ denote the statement "for all reals $b_0, \dots, b_{m-1} \ge 0$, $\prod_{k<m} b_k \le B^{m}$ where $B = \frac{1}{m}\sum_{k<m} b_k$, with equality if and only if $b_0 = \dots = b_{m-1}$".

[L1] A product with a zero factor is zero, $0 \cdot x = 0$ ([[lem-of-zero-mult]]). Laws of finite sums and products ([[lem-finite-sum-laws]], [[def-finite-sum]]): splitting of sums and of products at any index; the constant sum $\sum_{k<m}\lambda = m\lambda$; monotonicity of sums, with a sum of nonnegatives being $0$ only if every term is $0$; and a product of nonnegatives is nonnegative, of positives positive.

[L2] Roots ([[thm-nth-roots-exist]]): every $c \ge 0$ has a unique $c^{1/m} \ge 0$ with $\big(c^{1/m}\big)^{m} = c$, and $c^{1/m} > 0$ when $c > 0$.

[L3] Power monotonicity ([[lem-power-monotone]], [[def-integer-power]]): $x \mapsto x^{m}$ is strictly increasing and injective on $\{x \ge 0\}$ for $m \ge 1$, and preserves nonnegativity and positivity.

[L4] Integer exponent laws ([[lem-power-laws]]): $(xy)^{m} = x^{m}y^{m}$ and $\big(x^{2}\big)^{m} = x^{2m}$.

[L5] Order arithmetic: multiplying inequalities of nonnegatives, in both the strict and the nonstrict form ([[prop-of-multiply-inequalities]]); adding inequalities and scaling by a positive, both of which [[lem-of-add-order]] and [[lem-of-sign-rules]] state for the STRICT order only, so the nonstrict forms used below are the strict ones together with the case of equality, which is settled by trichotomy ([[def-ordered-field]]); and the inverse of a positive element is positive ([[lem-of-inverse-positive]]).

[L6] Squares: $x^{2} \ge 0$, which is $x^{2} > 0$ for $x \ne 0$ ([[lem-of-square-positive]], the only thing that item states) together with $0^{2} = 0 \cdot 0 = 0$, a product with a zero factor ([[lem-of-zero-mult]]); and $x^{2} = 0$ only for $x = 0$, the contrapositive of the same statement.

[L7] Induction principle ([[thm-induction-principle]]).

[L8] The doubling naturals: by the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{N}$, the starting element $1$ and the function $f(k) = k + k$, there is a unique $j \mapsto N_j$ from $\mathbb{N}$ to $\mathbb{N}$ with $N_0 = 1$ and $N_{j+1} = N_j + N_j$. Each $N_j$ is a natural number, available as a list length and as an index bound; the real number $\iota(2)^{j}$ is never used and never mentioned.

[L9] Canonical naturals: $\iota(m) > 0$ for $m \ge 1$, $\iota$ is a field homomorphism, and we write $m$ for $\iota(m)$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L10] Order and addition in $\mathbb{N}$ ([[def-nat-order]], [[thm-nat-linear-order]], [[lem-nat-order-add-compatible]], [[lem-nat-discrete]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]): $\le$ is a linear order; $m \le n$ holds exactly when $n = m + i$ for some $i \in \mathbb{N}$; $m \le n$ holds exactly when $m + k \le n + k$ and $m < n$ exactly when $m + k < n + k$, BOTH forms being stated in [[lem-nat-order-add-compatible]] and the nonstrict one being the one step 1.5 uses; $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); and addition is associative and commutative.

## Proof

**Proof technique:** induction.

1.1 Base case $P(1)$: for a single entry $b_0 \ge 0$ we have $\prod_{k<1} b_k = b_0$ and $B = \frac{1}{1}b_0 = b_0$, so $\prod_{k<1} b_k = b_0 = B^{1}$; equality always holds, and the condition "all entries equal" is automatic for one entry. [base, L1, L9]

1.2 Inductive hypothesis: fix $j \in \mathbb{N}$, write $N := N_j$ for the $j$-th doubling natural, and assume $P(N)$. [ih]

1.3 Reduction to positive entries: if some $b_k = 0$ then $\prod_{k<m} b_k = 0 \le B^{m}$, and equality means $B^{m} = 0$, hence $B = 0$, hence $\sum_{k<m} b_k = 0$, hence every $b_k = 0$, that is, all entries equal; conversely all entries equal to $0$ gives both sides $0$; so $P(m)$ holds for lists with a zero entry, and it is enough to prove $P(m)$ for lists of strictly positive entries. [L1, L2, L3, L9]

1.4 The two-entry case $P(2)$: for $x, y \ge 0$, $\big(\tfrac{x+y}{2}\big)^{2} - xy = \tfrac{(x+y)^{2} - 4xy}{4} = \big(\tfrac{x-y}{2}\big)^{2} \ge 0$, so $xy \le \big(\tfrac{x+y}{2}\big)^{2}$, with equality exactly when $\big(\tfrac{x-y}{2}\big)^{2} = 0$, that is when $x = y$. [L5, L6, L9]

1.5 The doubling naturals grow past their index: $N_j \ge 1$ and $N_j > j$ for every $j \in \mathbb{N}$, by induction on $j$ inside $\mathbb{N}$; at $j = 0$, $N_0 = 1 \ge 1$ and $1 > 0$; and if $N_j \ge 1$ and $N_j > j$, then $N_j \ge j + 1$, so $N_{j+1} = N_j + N_j \ge (j+1) + 1 > j + 1$ and $N_{j+1} \ge 1 + 1 \ge 1$. This inequality is between natural numbers throughout; nothing is transported into $\mathbb{R}$. [L7, L8, L10]

2.1 Doubling step, $P(N) \Rightarrow P(2N)$, where $2N := N + N = N_{j+1}$ is again a natural number: let $a_0, \dots, a_{2N-1} > 0$, put $X := \frac{1}{N}\sum_{k<N} a_k$ and $Y := \frac{1}{N}\sum_{k=N}^{2N-1} a_k$, both positive, and let $A := \frac{1}{2N}\sum_{k<2N} a_k$; splitting the sum at $N$ gives $\sum_{k<2N} a_k = NX + NY$, so $A = \frac{X+Y}{2}$; splitting the product at $N$ and applying the hypothesis to each half gives $\prod_{k<2N} a_k = \big(\prod_{k<N} a_k\big)\big(\prod_{k=N}^{2N-1} a_k\big) \le X^{N} Y^{N} = (XY)^{N}$; and the two-entry case applied to $X, Y$ gives $XY \le \big(\frac{X+Y}{2}\big)^{2} = A^{2}$, whence $(XY)^{N} \le \big(A^{2}\big)^{N} = A^{2N}$ and therefore $\prod_{k<2N} a_k \le A^{2N}$. [step 1.2, step 1.3, step 1.4, L1, L3, L4, L5, L9]

2.2 Descent step, $P(m+1) \Rightarrow P(m)$ for every natural $m \ge 1$, written in this direction so that no subtraction of naturals is needed: let $b_0, \dots, b_{m-1} > 0$ and put $B := \frac{1}{m}\sum_{k<m} b_k > 0$; define $a_k := b_k$ for $k < m$ and $a_{m} := B$, so that $\sum_{k<m+1} a_k = mB + B = (m+1)B$ and the arithmetic mean of $a_0, \dots, a_{m}$ is exactly $B$; applying $P(m+1)$ gives $\big(\prod_{k<m} b_k\big)B = \prod_{k<m+1} a_k \le B^{m+1}$, and dividing by $B > 0$ gives $\prod_{k<m} b_k \le B^{m}$; moreover equality here holds exactly when $\prod_{k<m+1} a_k = B^{m+1}$, which by the equality clause of $P(m+1)$ holds exactly when all of $a_0, \dots, a_{m}$ are equal, that is when $b_0 = \dots = b_{m-1} = B$, which in turn holds exactly when the $b_k$ are all equal, since a constant list equals its own mean; together with the zero-entry case this is $P(m)$. [step 1.3, L1, L3, L5, L9]

3.1 Equality in the doubling step: with the notation of the doubling step 2.1, suppose $\prod_{k<2N} a_k = A^{2N}$; then both inequalities in the chain are equalities, so first $(XY)^{N} = \big(A^{2}\big)^{N}$ with $XY, A^{2} > 0$ gives $XY = A^{2}$ by injectivity, hence $X = Y$ by the equality clause of the two-entry case; and second, writing $P_1 = \prod_{k<N} a_k \le X^{N}$ and $P_2 = \prod_{k=N}^{2N-1} a_k \le Y^{N}$ with all four quantities positive, $P_1 < X^{N}$ would give $P_1 P_2 < X^{N} P_2 \le X^{N} Y^{N}$, so $P_1 = X^{N}$ and likewise $P_2 = Y^{N}$, whence by the equality clause of $P(N)$ the first half is constant, equal to its mean $X$, and the second half is constant, equal to $Y = X$; so all $2N$ entries are equal, and conversely entries all equal to $c$ give $\prod = c^{2N}$ and $A = c$. [step 1.2, step 1.4, step 2.1, L1, L3, L5, L9]

4.1 By the induction principle, $P(N_j)$ holds for every $j \in \mathbb{N}$: the base is $P(N_0) = P(1)$ and the step is the doubling argument together with its equality clause. [step 1.1, step 2.1, step 3.1, L7, L8]

5.1 Every $n \ge 1$ is reached: by step 1.5, $N_n > n$, so $n \le N_n$ and $N_n = n + i_0$ for some $i_0 \in \mathbb{N}$; now run a further induction on $i$ over the statement $Q(i)$, "for every natural $m \ge 1$ with $m + i = N_n$, $P(m)$ holds"; $Q(0)$ says $P(N_n)$, which is step 4.1; and if $Q(i)$ holds and $m \ge 1$ satisfies $m + (i+1) = N_n$, then $(m+1) + i = N_n$ with $m + 1 \ge 1$, so $P(m+1)$ holds by $Q(i)$ and the descent step turns it into $P(m)$, giving $Q(i+1)$; applying $Q(i_0)$ to $m = n$ yields $P(n)$; hence $\prod_{k<n} a_k \le A^{n}$ with equality exactly when all $a_k$ are equal. [step 1.5, step 4.1, step 2.2, L7, L10]

6.1 Translation to the root form: $G = \big(\prod_{k<n} a_k\big)^{1/n}$ satisfies $G \ge 0$ and $G^{n} = \prod_{k<n} a_k \le A^{n}$ with $A \ge 0$, so $G \le A$, since $G > A$ would give $G^{n} > A^{n}$; and $G = A$ holds exactly when $G^{n} = A^{n}$, by injectivity of $x \mapsto x^{n}$ on the nonnegatives, hence exactly when all $a_k$ are equal. [step 5.1, L2, L3, discharge-induction] ∎
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

### `thm-infinite-product-criterion`

````markdown
---
id: thm-infinite-product-criterion
kind: theorem
title: "For $p_k \\ge 0$ the product $\\prod (1 + p_k)$ converges iff $\\sum p_k$ converges, with $1 + \\sum_{k<n} p_k \\le \\prod_{k<n}(1+p_k) \\le 1/\\bigl(1 - \\sum_{k<n} p_k\\bigr)$ when $\\sum_{k<n} p_k < 1$; for $0 \\le p_k < 1$ the product $\\prod (1 - p_k)$ converges iff $\\sum p_k$ converges and its partial products tend to $0$ otherwise; and $\\sum |p_k|$ convergent implies $\\prod (1+p_k)$ convergent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-infinite-product, def-series, lem-series-tail-invariance, thm-nonnegative-series-bounded-partial-sums, thm-monotone-convergence, cor-monotone-converges-iff-bounded, def-monotone-sequence, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-of-inverse-positive, lem-of-abs-value, thm-algebra-of-limits, lem-limit-preserves-order, thm-squeeze, thm-reals-cauchy-complete, def-divergence-to-infinity, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Weierstrass product inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weierstrass_product_inequality"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Statement

Write $S_n := \sum_{k<n} p_k$ and $\Pi_n := \prod_{k<n}(1+p_k)$,
$Q_n := \prod_{k<n}(1-p_k)$ ([[def-finite-sum]], [[def-series]],
[[def-infinite-product]]).

1. **Elementary inequalities.** Let $p_k \ge 0$ for every $k$. Then for every
   $n \in \mathbb{N}$:
   $$1 + S_n \;\le\; \Pi_n, \qquad\text{and}\qquad \Pi_n \;\le\; \frac{1}{1 - S_n} \ \text{ whenever } S_n < 1 ;$$
   and if in addition $p_k \le 1$ for every $k$, then
   $$1 - S_n \;\le\; Q_n \qquad\text{and}\qquad Q_n\,\Pi_n \le 1, \ \text{ hence } \ Q_n \le \frac{1}{1 + S_n} .$$
2. **The nonnegative criterion.** Let $p_k \ge 0$ for every $k$. Then
   $\prod (1 + p_k)$ converges if and only if $\sum p_k$ converges.
3. **The $(1-p_k)$ form.** Let $0 \le p_k < 1$ for every $k$. Then
   $\prod (1 - p_k)$ converges if and only if $\sum p_k$ converges; and if
   $\sum p_k$ diverges then $Q_n \to 0$, so that no tail of the product has
   partial products with a nonzero limit.
4. **Absolute convergence.** Let $(p_k)$ be an arbitrary sequence of reals with
   $\sum |p_k|$ convergent. Then $\prod (1 + p_k)$ converges.

**No logarithm occurs anywhere.** The exponential and the logarithm, through which
these criteria are usually derived, are later in the reading order; every
inequality above is an induction on finite products. The refinement that decides
$\prod(1+p_k)$ for signed $p_k$ with $\sum p_k$ convergent, in terms of the
convergence of $\sum p_k^2$, does need the logarithm and is not stated here; see
[[rem-sums-proved-to-exist-but-not-evaluated]].

## Facts & Assumptions

**Given:** A sequence $(p_k)$ of reals, with $S_n = \sum_{k<n}p_k$, $\Pi_n = \prod_{k<n}(1+p_k)$ and $Q_n = \prod_{k<n}(1-p_k)$.

[L1] Finite sums and products: $\sum_{k<0}x_k = 0$, $\prod_{k<0}x_k = 1$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, $\prod_{k<n+1}x_k = \bigl(\prod_{k<n}x_k\bigr)x_n$, splitting at an intermediate index, and $\prod_{k<n}(x_ky_k) = \bigl(\prod_{k<n}x_k\bigr)\bigl(\prod_{k<n}y_k\bigr)$; a finite product of nonnegative factors is nonnegative and of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L3] For a series of nonnegative terms: convergence is equivalent to the range of the partial sums being bounded above, the sum is then the supremum and every partial sum is at most the sum, and if the range is unbounded the partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]]).

[L4] A series converges if and only if some tail series converges, and then the sum equals the initial partial sum plus the tail sum ([[lem-series-tail-invariance]]).

[L5] A nondecreasing sequence bounded above converges, and a nonincreasing sequence bounded below converges; a monotone sequence converges if and only if it is bounded ([[thm-monotone-convergence]], [[cor-monotone-converges-iff-bounded]], [[def-monotone-sequence]]).

[L6] Order and inverses: $0 < a < b$ implies $0 < 1/b < 1/a$, and $a > 0$ implies $1/a > 0$ ([[lem-of-inverse-positive]]).

[L7] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x + y| \le |x| + |y|$ ([[lem-of-abs-value]]).

[L8] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

[L9] The squeeze theorem ([[thm-squeeze]]).

[L10] Every Cauchy sequence of reals converges ([[thm-reals-cauchy-complete]], [[def-real-limit]]).

[L11] Convergence of an infinite product: some tail has nonvanishing factors and partial products with a nonzero limit ([[def-infinite-product]]).

## Proof

**Proof technique:** direct.

1.1 Assume $p_k \ge 0$ for every $k$. An induction gives $1 + S_n \le \Pi_n$: at $n = 0$ both sides are $1$; and if $1 + S_n \le \Pi_n$ then, since $1 + S_n \ge 1 > 0$ and $1 + p_n \ge 1 > 0$, $\Pi_{n+1} = \Pi_n(1+p_n) \ge (1+S_n)(1+p_n) = 1 + S_n + p_n + S_n p_n \ge 1 + S_{n+1}$. [given, L1, L2]

1.2 Assume further $p_k \le 1$ for every $k$. An induction gives $1 - S_n \le Q_n$: at $n=0$ both sides are $1$; and if $1 - S_n \le Q_n$ then, since $1 - p_n \ge 0$, $Q_{n+1} = Q_n(1-p_n) \ge (1-S_n)(1-p_n) = 1 - S_n - p_n + S_np_n \ge 1 - S_{n+1}$. [given, L1, L2]

1.3 Assume $p_k \ge 0$ and $\sum p_k$ convergent, with sum $L$. By [L3] and [L4] the tail sums $L - S_N$ tend to $0$, so fix $N$ with $\sum_{k \ge N} p_k < 1/2$. [given, L3, L4, choose]

1.4 Three inductions on finite products, valid for arbitrary reals $x_k, y_k, z_k$: first, $\bigl|\prod_{k<n}x_k\bigr| = \prod_{k<n}|x_k|$, from $|xy| = |x||y|$ and $|1| = 1$; second, if $0 \le x_k \le y_k$ for all $k<n$ then $\prod_{k<n}x_k \le \prod_{k<n}y_k$, since the products are nonnegative and $\prod_{k<n+1}x_k = (\prod_{k<n}x_k)x_n \le (\prod_{k<n}y_k)x_n \le (\prod_{k<n}y_k)y_n$; third, $\bigl|\prod_{k<n}(1+z_k) - 1\bigr| \le \prod_{k<n}(1+|z_k|) - 1$, since at $n=0$ both sides are $0$ and $\bigl|\prod_{k<n+1}(1+z_k) - 1\bigr| = \bigl|(\prod_{k<n}(1+z_k) - 1)(1+z_n) + z_n\bigr| \le (\prod_{k<n}(1+|z_k|) - 1)(1+|z_n|) + |z_n| = \prod_{k<n+1}(1+|z_k|) - 1$. [L1, L2, L7]

1.5 Assume $\sum |p_k|$ converges, with sum $L$, and fix $N$ with $\tau_N := \sum_{k \ge N}|p_k| < 1/2$; write $\tau_{N+n} = \sum_{k \ge N+n}|p_k|$, so $\tau_{N+n} \to 0$ and $\sum_{j<m}|p_{N+j}| \le \tau_N$ for every $m$. For $k \ge N$ we get $|p_k| \le \tau_N < 1/2$, so $1 + p_k \ge 1/2 > 0$ and every factor from $N$ on is nonzero. [given, L3, L4, L7, choose]

2.1 An induction gives: for every $n$ with $S_n < 1$, $\Pi_n(1 - S_n) \le 1$. At $n = 0$ this reads $1 \cdot 1 \le 1$. Suppose it holds at $n$ and $S_{n+1} < 1$; then $S_n \le S_{n+1} < 1$, so $\Pi_n \le 1/(1-S_n)$ by [L6], and $\Pi_{n+1} = \Pi_n(1+p_n) \le (1+p_n)/(1-S_n)$. Multiplying out, $(1+p_n)(1 - S_n - p_n) = 1 - S_n - p_nS_n - p_n^2 \le 1 - S_n$, and dividing by the positive $(1-S_n)(1-S_{n+1})$ turns this into $(1+p_n)/(1-S_n) \le 1/(1-S_{n+1})$. [given, step 1.1, L1, L2, L6]

2.2 Under the same assumption, $Q_n \Pi_n = \prod_{k<n}(1-p_k)(1+p_k) = \prod_{k<n}(1 - p_k^2) \le 1$, the last step by the induction: the empty product is $1$, and multiplying a value in $[0,1]$ by a factor $1 - p_n^2 \in [0,1]$ again gives a value in $[0,1]$. Since $\Pi_n \ge 1 + S_n \ge 1 > 0$, dividing gives $Q_n \le 1/\Pi_n \le 1/(1+S_n)$. This completes claim 1. [step 1.1, step 1.2, L1, L2, L6]

2.3 Assume $0 \le p_k < 1$ and $\sum p_k$ convergent. Fix $N$ with $\sum_{k \ge N}p_k < 1/2$ as in step 1.3. By step 1.2 applied to the shifted sequence, $U_n := \prod_{j<n}(1 - p_{N+j}) \ge 1 - \sum_{j<n}p_{N+j} \ge 1/2$ for every $n$; and $(U_n)$ is nonincreasing, each factor lying in $(0,1]$. So $(U_n)$ converges to a limit $\ge 1/2 > 0$, and every factor $1 - p_k$ is positive, hence nonzero; $\prod(1-p_k)$ converges. [step 1.2, step 1.3, L1, L5, L8, L11]

3.1 For the shifted sequence $j \mapsto p_{N+j}$, whose partial sums are at most $1/2 < 1$, step 2.1 gives $T_n := \prod_{j<n}(1+p_{N+j}) \le 1/(1 - 1/2) = 2$ for every $n$, and step 1.1 gives $T_n \ge 1$. The sequence $(T_n)$ is nondecreasing, each factor being at least $1$, so it converges to a limit $\ell$ with $1 \le \ell \le 2$; in particular $\ell \ne 0$, and every factor $1 + p_k$ is at least $1$, hence nonzero. So $\prod(1+p_k)$ converges. [step 1.1, step 2.1, step 1.3, L1, L5, L8, L11]

3.2 Assume instead $0 \le p_k < 1$ and $\sum p_k$ divergent. Then $S_n \to +\infty$ by [L3], so given a real $\varepsilon > 0$ there is $K$ with $S_n > 1/\varepsilon$ for $n \ge K$, whence $0 < 1/(1+S_n) < \varepsilon$; thus $1/(1+S_n) \to 0$. By step 2.2, $0 \le Q_n \le 1/(1+S_n)$, so $Q_n \to 0$ by the squeeze. [step 2.2, L3, L6, L9]

3.3 Put $T_n := \prod_{j<n}(1+p_{N+j})$. By step 1.4 and step 2.1 applied to the nonnegative sequence $j \mapsto |p_{N+j}|$, $|T_n| \le \prod_{j<n}(1+|p_{N+j}|) \le 1/(1-\tau_N) \le 2$; and by step 1.4 and step 1.2, $T_n \ge \prod_{j<n}(1 - |p_{N+j}|) \ge 1 - \tau_N \ge 1/2$, each factor $1 + p_{N+j} \ge 1 - |p_{N+j}| \ge 0$. [step 2.1, step 1.2, step 1.4, step 1.5, L1, L7]

4.1 Conversely assume $p_k \ge 0$ and $\prod(1+p_k)$ convergent, with $N$ as in [L11]. Since $\Pi_n = \bigl(\prod_{k<N}(1+p_k)\bigr) T_{n-N}$ for $n \ge N$ and $(T_m)$ converges, the sequence $(\Pi_n)$ converges, hence is bounded, say $\Pi_n \le M$ for all $n$. By step 1.1, $1 + S_n \le M$ for every $n$, so the partial sums of the nonnegative series $\sum p_k$ are bounded above and $\sum p_k$ converges. Claim 2 is step 3.1 together with this. [step 1.1, step 3.1, L1, L3, L5, L11]

4.2 In that situation the product diverges: for any $N$, $Q_{N+n} = \bigl(\prod_{k<N}(1-p_k)\bigr)U_n$ with $\prod_{k<N}(1-p_k) > 0$, so $U_n = Q_{N+n}/\prod_{k<N}(1-p_k) \to 0$ and no tail has partial products with a nonzero limit. With step 2.3 this proves claim 3. [step 2.3, step 3.2, L1, L8, L11]

4.3 For $m > n$, splitting the product gives $T_m = T_n \prod_{j=n}^{m-1}(1+p_{N+j})$, so $|T_m - T_n| = |T_n|\,\bigl|\prod_{j=n}^{m-1}(1+p_{N+j}) - 1\bigr| \le 2\Bigl(\prod_{j=n}^{m-1}(1+|p_{N+j}|) - 1\Bigr) \le 2\Bigl(\frac{1}{1 - \tau_{N+n}} - 1\Bigr) = \frac{2\tau_{N+n}}{1 - \tau_{N+n}} \le 4\,\tau_{N+n}$, using step 2.1 for the shifted sequence from $N+n$, whose partial sums are at most $\tau_{N+n} \le \tau_N < 1/2$. [step 2.1, step 1.4, step 1.5, step 3.3, L1, L6, L7]

5.1 Since $\tau_{N+n} \to 0$, step 4.3 makes $(T_n)$ a Cauchy sequence, so it converges, to a limit $\ell$; and $\ell \ge 1/2 > 0$ by step 3.3 and [L8]. Hence $\prod(1+p_k)$ converges, which is claim 4. [step 1.5, step 3.3, step 4.3, L8, L10, L11] ∎

## Remarks

- **Why the two bounds of claim 1 are the right pair.** The lower bound $1 + S_n \le \Pi_n$ is the Weierstrass product inequality and forces divergence of the product when $\sum p_k$ diverges; the upper bound $\Pi_n \le 1/(1-S_n)$, available once the partial sums are below $1$, forces convergence when $\sum p_k$ converges. Between them they prove claim 2 with no further input, and they are exactly what a logarithm would otherwise supply.

- **The strict inequality $p_k<1$ keeps this proof uniform, but the tail-based definition allows a slightly stronger statement.** Claim 3 remains true for $0\le p_k\le1$. If only finitely many $p_k$ equal $1$, start the product after the last zero factor; if infinitely many do, then $\sum p_k$ diverges and no tail has all factors nonzero. The stated strict form avoids this finite/infinite split.

- **Claim 4 does not identify the value, and the converse fails.** Absolute convergence of $\sum p_k$ gives convergence of $\prod(1+p_k)$, but convergence of $\sum p_k$ alone does not: the companion examples page exhibits $\sum_{j\ge0}(-1)^j/\sqrt{j+2}$ convergent while the corresponding partial products tend to $0$. What separates the two cases is the convergence of $\sum p_k^2$, a criterion that needs the logarithm and is deferred.

- **Where the Cauchy criterion enters and why nothing cheaper would do.** In claim 4 the factors have no sign, so the partial products are not monotone and [[thm-monotone-convergence]] is unavailable; the estimate of step 4.3 is a Cauchy estimate and is closed by completeness of $\mathbb{R}$.
````

### `thm-nth-roots-exist`

````markdown
---
id: thm-nth-roots-exist
kind: theorem
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, lem-power-monotone, lem-power-difference-factorisation, def-bounded-set, lem-of-add-order, thm-of-square-roots, def-integer-power, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: [thm-nth-root, def-nth-root]
landmark: true
short: "unique $s\\ge0$ with $s^n=a$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property; an element $a \ge 0$; and a natural $n \ge 1$, with $\iota(n) \in \mathbb{R}$ written $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L1] Least-upper-bound property: every nonempty subset of $\mathbb{R}$ that is bounded above ([[def-bounded-set]]) has a least upper bound, and it is unique, so the notation $\sup S$ is legitimate ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Epsilon characterisation of the supremum: if $S$ is nonempty and bounded above and $u = \sup S$, then for every $\varepsilon > 0$ there is $t \in S$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L3] Monotonicity of powers ([[lem-power-monotone]]): $x \mapsto x^n$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$, hence injective there; $x \ge 0$ implies $x^n \ge 0$ and $x > 0$ implies $x^n > 0$; and $x \ge 1$ implies $x^n \ge x$.

[L4] Lipschitz estimate ([[lem-power-difference-factorisation]]): if $0 \le x \le y \le B$ and $n \ge 1$ then $0 \le y^n - x^n \le n B^{\,n-1}(y - x)$.

[L5] Order arithmetic: adding a constant preserves the order and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-add-order]], [[lem-of-sign-rules]]), both stated there for the STRICT order alone, so where a $\le$ is added or scaled below the move is that statement together with the case of equality, settled by trichotomy ([[def-ordered-field]]); $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of those three, hence $2 = 1 + 1 > 0$; and $0 < 2^{-1} < 1$, since $0 < 1 < 2$ gives $0 < 2^{-1} < 1^{-1} = 1$ ([[lem-of-inverse-positive]], claim 2).

[L6] Trichotomy: for $x, y \in \mathbb{R}$ exactly one of $x < y$, $x = y$, $y < x$ holds; consequently any two elements have a minimum ([[def-ordered-field]]).

[L7] A product with a zero factor vanishes: $0 \cdot x = x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$ then $s = 0$ satisfies $s \ge 0$ and $s^n = 0 = a$, since $0^n = 0^{n-1} \cdot 0 = 0$ for $n \ge 1$; so existence holds in that case and we assume $a > 0$ from here on. [given, L3, L7, algebra]

1.2 Uniqueness holds as soon as a root exists: if $u, v \ge 0$ satisfy $u^n = v^n$, then strict monotonicity of $x \mapsto x^n$ on the nonnegatives rules out both $u < v$ and $v < u$, so $u = v$ by trichotomy. [L3, L6]

1.3 Define $S = \{t \in \mathbb{R} : t \ge 0 \text{ and } t^n \le a\}$; then $0 \in S$, because $0 \ge 0$ and $0^n = 0 \le a$, so $S$ is nonempty. [given, L3, L7]

1.4 The element $M := 1 + a$ is an upper bound of $S$: since $a > 0$ and $1 > 0$ we have $M > 1$ and $M > a$, so any $t > M$ satisfies $t > 1$, whence $t^n \ge t > M > a$ and $t \notin S$. [given, L3, L5]

2.1 By the least-upper-bound property $s := \sup S$ exists in $\mathbb{R}$; moreover $s \ge 0$ because $0 \in S$, and $s \le M$ because $M$ is an upper bound and $s$ is the least one. [L1, step 1.3, step 1.4]

3.1 Put $B := M + 1 = a + 2$; then $B > M \ge 1 > 0$, so $B^{\,n-1} > 0$ and $n B^{\,n-1} > 0$, and every $x$ with $0 \le x \le M + 1$ satisfies $0 \le x \le B$. [step 2.1, L3, L5]

3.2 Assume, for contradiction, that $s^n \ne a$; by trichotomy either $s^n < a$ or $s^n > a$. [assume-contra, step 2.1, L6]

4.1 (Case $s^n < a$.) Put $\delta := \min\{1, (a - s^n)(n B^{\,n-1})^{-1}\}$, which is $> 0$ since $a - s^n > 0$ and $n B^{\,n-1} > 0$, and put $h := 2^{-1}\delta$, so that $0 < h < \delta \le 1$ and $h < (a - s^n)(nB^{\,n-1})^{-1}$; then $0 \le s \le s + h \le M + 1 = B$, so the Lipschitz estimate gives $(s+h)^n - s^n \le nB^{\,n-1} h < a - s^n$, hence $(s+h)^n < a$ and $s + h \in S$, while $s + h > s$ contradicts that $s$ is an upper bound of $S$. [assume-case low, step 3.2, step 2.1, step 3.1, L4, L5, L6, choose]

4.2 (Case $s^n > a$.) Here $s > 0$, since $s = 0$ would give $s^n = 0 \le a$; put $\delta := \min\{s, (s^n - a)(nB^{\,n-1})^{-1}\} > 0$ and $h := 2^{-1}\delta$, so that $0 < h < s$ and $h < (s^n - a)(nB^{\,n-1})^{-1}$; then $0 \le s - h \le s \le B$, so the Lipschitz estimate gives $s^n - (s-h)^n \le nB^{\,n-1}h < s^n - a$, hence $(s-h)^n > a$; applying the epsilon characterisation with $\varepsilon = h$ produces $t \in S$ with $t > s - h \ge 0$, whence $t^n > (s-h)^n > a$ by strict monotonicity, contradicting $t \in S$. [assume-case high, step 3.2, step 2.1, step 3.1, L2, L3, L4, L5, L6, L7, choose]

5.1 Both cases of the disjunction in step 3.2 are impossible, so the assumption fails and $s^n = a$; this $s$ is the unique nonnegative $n$-th root of $a$ by step 1.2, it satisfies $s > 0$ when $a > 0$ because $s = 0$ would force $a = s^n = 0$, and at $n = 1$ the element $a$ itself is a nonnegative solution of $s^1 = a$, so $a^{1/1} = a$; writing $a^{1/n} = \sqrt[n]{a}$ for it, the case $n = 2$ recovers the already published $\sqrt{a}$ of [[thm-of-square-roots]]. [step 4.1, step 4.2, step 3.2, step 1.2, step 1.1, L3, L7, cases, discharge-contradiction] ∎
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

### `thm-squeeze`

````markdown
---
id: thm-squeeze
kind: theorem
title: "The squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-of-add-order, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [sandwich-theorem]
landmark: true
short: "squeeze"
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
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with

$$a_k \le x_k \le b_k \quad \text{eventually},$$

and suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$
([[def-real-limit]]). Then $(x_k)$ converges to $L$.

The middle sequence is not assumed to converge; that is the point of the
theorem, and it is why the squeeze is a tool for *establishing* convergence
rather than for computing a limit already known to exist.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(x_k)$, $(b_k)$ of reals, an index $K_0 \in \mathbb{N}$ with $a_k \le x_k \le b_k$ for every $k \ge K_0$, and a real $L$ such that $(a_k)$ converges to $L$ and $(b_k)$ converges to $L$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value: for $c > 0$, $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]]).

[L3] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u < v \le w$ and $u \le v < w$ both give $u < w$; and $\le$ is transitive ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] The order on $\mathbb{N}$ is total and transitive, so three indices $K_0, K_1, K_2$ admit an index $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$, and then $k \ge K$ gives $k \ge K_0$, $k \ge K_1$, $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(a_k)$ there is $K_1$ with $|a_k - L| < \varepsilon$ for all $k \ge K_1$, and by convergence of $(b_k)$ there is $K_2$ with $|b_k - L| < \varepsilon$ for all $k \ge K_2$. [L1]

2.1 By [L2], $|a_k - L| < \varepsilon$ gives $-\varepsilon < a_k - L$, that is $L - \varepsilon < a_k$, for all $k \ge K_1$; and $|b_k - L| < \varepsilon$ gives $b_k - L < \varepsilon$, that is $b_k < L + \varepsilon$, for all $k \ge K_2$. [step 1.1, L2, L3]

3.1 Choose $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$. For every $k \ge K$ the hypothesis gives $a_k \le x_k \le b_k$, so $L - \varepsilon < a_k \le x_k \le b_k < L + \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, hence $-\varepsilon < x_k - L < \varepsilon$, hence $|x_k - L| < \varepsilon$. [step 2.1, given, L2, L3, L4, choose]

4.1 The rational $\varepsilon > 0$ was arbitrary, so for every rational $\varepsilon > 0$ there is an index $K$ beyond which $|x_k - L| < \varepsilon$; that is, $(x_k)$ converges to $L$. [step 3.1, L1] ∎

## Remarks

- The proof is direct from the definition and does not route through [[lem-limit-preserves-order]]. It could not: that lemma assumes the middle sequence converges, which is what is being proved here.

- Both bounding sequences must have the **same** limit. With $a_k = -1$, $b_k = 1$ and any $(x_k)$ taking values in $[-1, 1]$ the hypothesis $a_k \le x_k \le b_k$ holds and nothing whatever follows, since a bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- The most common use is with $a_k = -c_k$ and $b_k = c_k$ for a null sequence $(c_k)$: if $|x_k| \le c_k$ eventually and $c_k \to 0$, then $x_k \to 0$. That special case also follows from [[lem-null-times-bounded]] whenever $x_k$ is presented as a product of a null sequence and a bounded one, but the squeeze needs no such presentation.
````

