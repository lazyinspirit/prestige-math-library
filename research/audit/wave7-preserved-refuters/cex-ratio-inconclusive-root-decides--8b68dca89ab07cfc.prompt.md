# Audit proof-refuter brief — Wave 7, step A6

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

- critical risk (13): 14 declared dependencies; 15 cited facts; 7 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cex-ratio-inconclusive-root-decides`

Normalized current SHA-256: `41a46062bd4f46f10676db0680a7fcbc451c9a7d5092ae718ba22688b07cfbf4`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-ratio-inconclusive-root-decides
kind: counterexample
title: "$a_k = 2^{-k+(-1)^k}$ has ratio limsup $2$ and liminf $1/8$, so the ratio test fails, while the root test gives convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ratio-test, thm-root-test, cor-root-test-dominates-ratio-test, def-limsup-liminf, lem-limsup-exists, def-integer-power, lem-alternating-sequence, fs-ratio-and-root-limits-always-agree, def-series, def-rational-power, lem-power-monotone, lem-power-laws, lem-of-abs-value, lem-series-tail-invariance]
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

## Statement refuted

**Refuted claim:** whenever the root test decides a series, the ratio test
decides it too; equivalently, the ratio test is no weaker than the root test.

The claim is refuted by the sequence usually written $a_k = 2^{-k + (-1)^{k}}$.
Precisely, let $(s_k)$ be the alternating sequence of
[[lem-alternating-sequence]], let $t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when
$s_k = -1$, and put

$$a_k \;:=\; 2^{-k}\, t_k \qquad (k \in \mathbb{N}) .$$

Its ratio and root families, in the shifted form used throughout,
$q_k = |a_{k+1}/a_k|$ and $\rho_k = |a_{k+1}|^{1/(k+1)}$, satisfy

$$\liminf_{k} q_k = \frac{1}{8}, \qquad \limsup_{k} q_k = 2, \qquad \limsup_{k} \rho_k = \frac{1}{2} ,$$

as computed in [[fs-ratio-and-root-limits-always-agree]]. So the root test gives
convergence of $\sum_{k \ge 1} |a_k|$, while neither half of the ratio test
applies: its convergence half needs $\limsup_k q_k < 1$ and $2$ is not below $1$,
and its divergence half needs $\liminf_k q_k > 1$ and $1/8$ is not above $1$.

This is the concrete form of the strict dominance recorded in
[[cor-root-test-dominates-ratio-test]].

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]]; $t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when $s_k = -1$; $a_k := 2^{-k} t_k$; and the families $q_k = |a_{k+1}/a_k|$, $\rho_k = |a_{k+1}|^{1/(k+1)}$ ([[def-limsup-liminf]], [[def-rational-power]]).

[L1] The alternating sequence satisfies $|s_k| = 1$ for every $k$, so each $s_k$ is $1$ or $-1$ and $t_k$ is well defined with $t_k > 0$ ([[lem-alternating-sequence]], [[lem-of-abs-value]]).

[L2] $2^{-k} > 0$ for every $k \in \mathbb{N}$ ([[def-integer-power]], [[lem-power-monotone]], [[lem-power-laws]]).

[L3] For this sequence, $\liminf_k q_k = 1/8$, $\limsup_k q_k = 2$ and the root family converges to $1/2$, so $\limsup_k \rho_k = 1/2$ ([[fs-ratio-and-root-limits-always-agree]]).

[L4] The root test: $\limsup_k \rho_k < 1$ gives convergence of $\sum_{k \ge 1} |a_k|$ ([[thm-root-test]]).

[L5] The ratio test: its convergence half needs $\limsup_k q_k < 1$ and its divergence half needs $\liminf_k q_k > 1$; those are its only two criteria ([[thm-ratio-test]]).

[L6] Limit superior and inferior exist in $\overline{\mathbb{R}}$ for every sequence ([[lem-limsup-exists]], [[def-limsup-liminf]]); a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]], [[def-series]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, so $t_k$ is defined and positive, and $a_k = 2^{-k} t_k > 0$; in particular $a_k \ne 0$, so both the ratio and the root families are defined and $|a_k| = a_k$. [given, L1, L2]

2.1 For this sequence $\limsup_k q_k = 2$ and $\liminf_k q_k = 1/8$. [step 1.1, L3]

2.2 For this sequence $\limsup_k \rho_k = 1/2$. [step 1.1, L3]

3.1 Since $1/2 < 1$, the root test applies and gives convergence of $\sum_{k \ge 1}|a_k|$, hence of $\sum_{k \ge 1} a_k$, the terms being positive. [step 2.2, step 1.1, L4, L6]

3.2 The convergence half of the ratio test does not apply, since $\limsup_k q_k = 2$ and $2 < 1$ is false. [step 2.1, L5]

3.3 The divergence half does not apply either, since $\liminf_k q_k = 1/8$ and $1/8 > 1$ is false. [step 2.1, L5]

4.1 So the root test decides this series and the ratio test decides nothing about it, refuting the claim. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **The two families are computed once, on the previous page, and cited here.** The four limit quantities for this sequence are established in the refutation of [[fs-ratio-and-root-limits-always-agree]], where the same witness shows that the outer inequalities of the ratio-to-root chain are strict. Nothing is recomputed here; what is added is the reading of those numbers through the two tests.

- **Why the roots behave and the ratios do not.** The exponent of $a_k$ is $-k + (-1)^{k}$. Taking an $(k+1)$-st root divides that exponent by $k+1$, so the bounded oscillation contributes $2^{\pm 1/(k+1)}$, which tends to $1$; forming a ratio differences the exponent, and a bounded oscillation does not shrink under differencing but doubles.

- **This does not make the root test universal.** The companion counterexample with root limit exactly $1$ shows the root test has its own blind spot, and [[fs-universal-comparison-series]] shows no test on this page can avoid having one.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cex-ratio-inconclusive-root-decides",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.csudh.edu/~pong/a3/Notes_01.html"
  ],
  "rationale": "The CSUDH notes use the same sequence 2^{(-1)^n-n}, compute alternating ratios 1/8 and 2, and obtain root limit 1/2 to show strict root-test dominance. The item translates that standard witness into the library's alternating-sequence interface and cites the earlier computation; its proof is an adapted sourced verification.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-series.provenance.jsonl"
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
      "quote": "Let $\\sigma$ be the successor on $\\mathbb{N}$ ([[def-natural-numbers]]). There are\nfunctions $e, o : \\mathbb{N} \\to \\mathbb{N}$ and a sequence $(s_k)$ of reals\n([[def-sequence]]) with the following properties.\n\n1. **The index maps.** $e$ is the unique function with\n   $e_0 = 0$ and $e_{\\sigma(j)} = \\sigma(\\sigma(e_j))$, and $o$ the unique\n   function with $o_0 = \\sigma(0)$ and $o_{\\sigma(j)} = \\sigma(\\sigma(o_j))$.\n   Both are **strictly increasing**.\n2. **The partition.** $\\mathbb{N}$ is the **disjoint union** of the ranges of $e$\n   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for\n   exactly one $i$, and never both.\n3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with\n   $$s_0 = 1, \\qquad s_{\\sigma(k)} = -s_k \\quad (k \\in \\mathbb{N}).$$\n4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and\n   $$s_{e_j} = 1, \\qquad s_{o_j} = -1 \\qquad (j \\in \\mathbb{N}),$$\n   that is $s \\circ e$ is constantly $1$ and $s \\circ o$ constantly $-1$.\n\nThis is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and\n$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is\ncollected here once because three separate items on this page and its companion\nneed an alternating or interleaved witness, and rebuilding the recursion inside\neach of them is what this lemma exists to prevent.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in\n[[def-integer-power]].\n\n1. For all $m, n \\in \\mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.\n2. If $a \\ne 0$ then $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \\in \\mathbb{Z}$ ([[def-int-operations]]).\n3. If $a \\ne 0$ and $b \\ne 0$ then all three identities of claim 1 hold for all $m, n \\in \\mathbb{Z}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "fs-ratio-and-root-limits-always-agree",
      "source_section": "Statement",
      "quote": "**False claim:** for every sequence $(a_k)$ of reals with $a_k > 0$ for all $k$,\n\n$$\\limsup_{k} a_{k+1}^{1/(k+1)} \\;=\\; \\limsup_{k} \\frac{a_{k+1}}{a_k},$$\n\nthat is, the limit superior of the root sequence equals the limit superior of the\nratio sequence. (The root family is written with the shift of\n[[thm-ratio-root-inequality]], since $a_k^{1/k}$ is undefined at $k = 0$;\nclassically the claim reads $\\limsup_n a_n^{1/n} = \\limsup_n a_{n+1}/a_n$.)\n\nWhat is true is the chain\n$$\\liminf_{k} \\frac{a_{k+1}}{a_k} \\;\\le\\; \\liminf_{k} a_{k+1}^{1/(k+1)} \\;\\le\\; \\limsup_{k} a_{k+1}^{1/(k+1)} \\;\\le\\; \\limsup_{k} \\frac{a_{k+1}}{a_k}$$\nof [[thm-ratio-root-inequality]]. The claim above collapses its right-hand\ninequality to an equality, and that fails: the roots can converge while the\nratios oscillate. This is exactly why a root criterion decides cases that a ratio\ncriterion cannot.\n\nThe witness is $a_k = 2^{-k + (-1)^k}$. The computation below establishes all four\nquantities for it, namely\n$$\\liminf_{k} \\frac{a_{k+1}}{a_k} = \\frac{1}{8}, \\qquad \\limsup_{k} \\frac{a_{k+1}}{a_k} = 2, \\qquad \\lim_{k} a_{k+1}^{1/(k+1)} = \\frac{1}{2},$$\nand it is recorded as a named example on the companion page.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-root-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)_{k \\ge 1}$ be a family of reals from the starting index $1$\n([[def-series]]), put\n\n$$\\rho_k \\;:=\\; |a_{k+1}|^{1/(k+1)} \\qquad (k \\in \\mathbb{N}), \\qquad \\rho \\;:=\\; \\limsup_{k} \\rho_k \\;\\in\\; \\overline{\\mathbb{R}} ,$$\n\nand note that $\\rho$ exists for every such family, with no hypothesis whatever\n([[lem-limsup-exists]], [[def-limsup-liminf]]). Then:\n\n1. if $\\rho < 1$ then $\\sum_{k \\ge 1} |a_k|$ converges, and hence\n   $\\sum_{k \\ge 1} a_k$ converges as well;\n2. if $\\rho > 1$ then $\\sum_{k \\ge 1} a_k$ diverges;\n3. if $\\rho = 1$ neither conclusion follows: $\\sum_{k \\ge 1} 1/k$ diverges,\n   $\\sum_{k \\ge 1} 1/k^{2}$ converges, and both have $\\rho = 1$.\n\n**The root family is shifted, and that is forced.** The classical expression\n$|a_n|^{1/n}$ is meaningful only for $n \\ge 1$, since $1/0$ is not a rational\nnumber ([[def-rational-power]]), while sequences here are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$. So the roots are written\n$\\rho_k = |a_{k+1}|^{1/(k+1)}$, which is $|a_n|^{1/n}$ reindexed by $n = k+1$,\nexactly the convention of [[thm-ratio-root-inequality]]. Every $\\rho_k$ is\ndefined, including where $a_{k+1} = 0$, by the supplementary clause of\n[[def-rational-power]].\n\n**What claim 1 does and does not say.** The comparison with a geometric series\ndelivers convergence of the series of *absolute values*; that\n$\\sum_{k \\ge 1} a_k$ itself converges is a separate step, and it is supplied by\n[[lem-absolute-convergence-implies-convergence]] earlier on this page. Nothing\nhere identifies the sum, and nothing here says anything about rearranging the\nseries, which is taken up later in this track.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-ratio-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ne 0$ for every $k \\in \\mathbb{N}$\nand put\n\n$$q_k \\;:=\\; \\Big|\\frac{a_{k+1}}{a_k}\\Big| \\;=\\; \\frac{|a_{k+1}|}{|a_k|} \\qquad (k \\in \\mathbb{N}),$$\n\na genuine sequence on $\\mathbb{N}$, whose limit superior and limit inferior exist\nin $\\overline{\\mathbb{R}}$ for every such $(a_k)$ ([[lem-limsup-exists]]). Then:\n\n1. if $\\limsup_{k} q_k < 1$ then $\\sum |a_k|$ converges, and hence $\\sum a_k$\n   converges as well ([[lem-absolute-convergence-implies-convergence]]);\n2. if $\\liminf_{k} q_k > 1$ then $\\sum a_k$ diverges.\n\nThe hypothesis $a_k \\ne 0$ is what makes $q_k$ exist and is not a convenience: a\nsingle vanishing term leaves the ratio at that index undefined. For a family from\na starting index $m$ the statement is the one above applied to the shifted\nsequence $j \\mapsto a_{j+m}$ ([[def-series]]), whose ratios are\n$|a_{j+m+1}/a_{j+m}|$.\n\n**Nothing is claimed when $\\limsup_k q_k \\ge 1 \\ge \\liminf_k q_k$.** In that\nregime the test is silent, and it has to be: the companion page carries a\nconvergent series whose ratios have limit superior $2$, and both a convergent and\na divergent series with ratio limit exactly $1$.",
      "uses": [
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-series-tail-invariance",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with partial sums $s_n = \\sum_{k<n} a_k$, let\n$N \\in \\mathbb{N}$, and let $t_j := \\sum_{i<j} a_{N+i}$ be the partial sums of the\n$N$-th tail series $\\sum_{k \\ge N} a_k$ ([[def-series]]). Then:\n\n1. $t_j = s_{j+N} - s_N$ for every $j \\in \\mathbb{N}$;\n2. $\\sum a_k$ converges **if and only if** its $N$-th tail series converges, and\n   in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; s_N \\;+\\; \\sum_{k=N}^{\\infty} a_k ;$$\n3. hence the following are equivalent: $\\sum a_k$ converges; every tail series of\n   $\\sum a_k$ converges; some tail series of $\\sum a_k$ converges.\n\nIn words: convergence of a series is a property of its terms from any index on,\nand changing finitely many terms changes the sum but not the fact of convergence.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Each $s_k$ is $1$ or $-1$, so $t_k$ is defined and positive, and $a_k = 2^{-k} t_k > 0$; in particular $a_k \\ne 0$, so both the ratio and the root families are defined and $|a_k| = a_k$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For this sequence $\\limsup_k q_k = 2$ and $\\liminf_k q_k = 1/8$.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "For this sequence $\\limsup_k \\rho_k = 1/2$.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Since $1/2 < 1$, the root test applies and gives convergence of $\\sum_{k \\ge 1}|a_k|$, hence of $\\sum_{k \\ge 1} a_k$, the terms being positive.",
      "step": "3.1",
      "inputs": [
        "2.2",
        "1.1",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "The convergence half of the ratio test does not apply, since $\\limsup_k q_k = 2$ and $2 < 1$ is false.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L5"
      ]
    },
    {
      "id": "step-3-3",
      "claim": "The divergence half does not apply either, since $\\liminf_k q_k = 1/8$ and $1/8 > 1$ is false.",
      "step": "3.3",
      "inputs": [
        "2.1",
        "L5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So the root test decides this series and the ratio test decides nothing about it, refuting the claim.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "3.2",
        "3.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement concerns a fixed infinite sequence or positive-index family and quantifies over no possibly empty carrier or family."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1 proves every witness term is positive and nonzero before either test family is formed."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "steps 2.1-3.3 compare 1/2, 2, and 1/8 with the exact threshold 1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 2.1-2.2 use the oscillating ratio data directly and do not assume either ratio limit exists."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 3.1-3.3 verify the root strict inequality and the failure of both strict ratio inequalities."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof uses fixed data, formula-defined sequences, induction, and cited implications; it selects from no asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The word \"equivalently\" only rephrases the refuted strength claim; no mathematical biconditional is asserted."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "No reverse implication distinct from the single refuted dominance claim is asserted."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A5/A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "fs-ratio-and-root-limits-always-agree",
    "declared_target": "fs-ratio-and-root-limits-always-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-power-laws",
    "declared_target": "lem-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "cex-ratio-inconclusive-root-decides",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-series-tail-invariance",
    "declared_target": "lem-series-tail-invariance",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

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

### `fs-ratio-and-root-limits-always-agree`

````markdown
---
id: fs-ratio-and-root-limits-always-agree
kind: false-statement
title: "FALSE: $\\limsup a_k^{1/k} = \\limsup a_{k+1}/a_k$ for every positive sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ratio-root-inequality, def-limsup-liminf, def-rational-power, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, thm-convergence-iff-limsup-equals-liminf, lem-nth-root-of-constant-tends-to-one, thm-nth-roots-exist, lem-rational-power-laws, lem-rational-power-monotone, def-integer-power, lem-power-laws, thm-squeeze, thm-algebra-of-limits, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-real-limit, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-inverse-positive, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain]
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.35, 3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(a_k)$ of reals with $a_k > 0$ for all $k$,

$$\limsup_{k} a_{k+1}^{1/(k+1)} \;=\; \limsup_{k} \frac{a_{k+1}}{a_k},$$

that is, the limit superior of the root sequence equals the limit superior of the
ratio sequence. (The root family is written with the shift of
[[thm-ratio-root-inequality]], since $a_k^{1/k}$ is undefined at $k = 0$;
classically the claim reads $\limsup_n a_n^{1/n} = \limsup_n a_{n+1}/a_n$.)

What is true is the chain
$$\liminf_{k} \frac{a_{k+1}}{a_k} \;\le\; \liminf_{k} a_{k+1}^{1/(k+1)} \;\le\; \limsup_{k} a_{k+1}^{1/(k+1)} \;\le\; \limsup_{k} \frac{a_{k+1}}{a_k}$$
of [[thm-ratio-root-inequality]]. The claim above collapses its right-hand
inequality to an equality, and that fails: the roots can converge while the
ratios oscillate. This is exactly why a root criterion decides cases that a ratio
criterion cannot.

The witness is $a_k = 2^{-k + (-1)^k}$. The computation below establishes all four
quantities for it, namely
$$\liminf_{k} \frac{a_{k+1}}{a_k} = \frac{1}{8}, \qquad \limsup_{k} \frac{a_{k+1}}{a_k} = 2, \qquad \lim_{k} a_{k+1}^{1/(k+1)} = \frac{1}{2},$$
and it is recorded as a named example on the companion page.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequence $t_k$ defined to be $2$ when $s_k = 1$ and $1/2$ when $s_k = -1$; the sequence $a_k := 2^{-k} t_k$; the ratios $q_k := a_{k+1}/a_k$ and the roots $r_k := a_{k+1}^{1/(k+1)}$.

[L1] The alternating sequence: $s_0 = 1$, $s_{k+1} = -s_k$, $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]); a strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L2] Limit superior and limit inferior in $\overline{\mathbb{R}}$, their existence for every sequence, and the least-upper-bound and greatest-lower-bound descriptions of the tail bounds ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-extended-reals]]).

[L3] A sequence converging to a real $c$ has $\limsup = \liminf = c$ ([[thm-convergence-iff-limsup-equals-liminf]]).

[L4] Powers and roots of positive reals: integer powers with $2^{m} 2^{m'} = 2^{m+m'}$ and $2^{-m} = 1/2^{m}$; $(xy)^{1/n} = x^{1/n} y^{1/n}$; the integer power is the rational power at an integer exponent, so $\big(2^{-n}\big)^{1/n} = 2^{-n/n} = 2^{-1}$; roots of positive reals are positive; and $0 < x \le y$ implies $x^{1/n} \le y^{1/n}$ ([[def-integer-power]], [[lem-power-laws]], [[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[thm-nth-roots-exist]]).

[L5] For every real $b > 0$ the sequence $b^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L6] Squeeze theorem and the scalar rule for limits ([[thm-squeeze]], [[thm-algebra-of-limits]], [[def-real-limit]], [[def-sequence]]).

[L7] Absolute value and order: $|t| = 1$ forces $t = 1$ or $t = -1$; $0 < 1$, so $1/2 < 1 < 2$ and $1/8 < 2$, and $1/2 \ne 2$; reciprocals reverse the order; multiplying by a positive preserves it ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L8] The true chain of inequalities relating the four quantities ([[thm-ratio-root-inequality]]).

[L9] The refuted claim: for every sequence of positive reals, $\limsup_k a_{k+1}^{1/(k+1)} = \limsup_k a_{k+1}/a_k$.

## Refutation

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$ because $|s_k| = 1$, so $t_k$ is well defined, with $t_k \in \{2, 1/2\}$ and $t_k > 0$; hence $a_k = 2^{-k} t_k > 0$ for every $k$, and $(a_k)$ is a sequence of positive reals to which the claim applies. This is the sequence usually written $a_k = 2^{-k + (-1)^k}$. [given, L1, L4, L7, L9]

1.2 Since $s_{k+1} = -s_k$ and $1 \ne -1$, exactly one of the two situations "$s_k = 1$ and $s_{k+1} = -1$" and "$s_k = -1$ and $s_{k+1} = 1$" occurs at each index $k$. In the first, $t_k = 2$ and $t_{k+1} = 1/2$; in the second, $t_k = 1/2$ and $t_{k+1} = 2$. [given, L1, L7]

1.3 For every $n$ both values of $s$ occur at an index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$ and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1]

2.1 The ratios are $q_k = a_{k+1}/a_k = \big(2^{-(k+1)} t_{k+1}\big)/\big(2^{-k} t_k\big) = 2^{-1} t_{k+1}/t_k$, which by step 1.2 equals $2^{-1}(1/2)/2 = 1/8$ when $s_k = 1$ and $2^{-1} \cdot 2/(1/2) = 2$ when $s_k = -1$. [step 1.1, step 1.2, L4, L7, algebra]

2.2 The roots are $r_k = \big(2^{-(k+1)} t_{k+1}\big)^{1/(k+1)} = \big(2^{-(k+1)}\big)^{1/(k+1)} t_{k+1}^{1/(k+1)} = 2^{-1} t_{k+1}^{1/(k+1)}$. [step 1.1, L4]

2.3 Since $1/2 \le t_{k+1} \le 2$ for every $k$ and $x \mapsto x^{1/(k+1)}$ is nondecreasing on the positive reals, $(1/2)^{1/(k+1)} \le t_{k+1}^{1/(k+1)} \le 2^{1/(k+1)}$; both bounding sequences converge to $1$ by [L5], so the squeeze theorem gives $t_{k+1}^{1/(k+1)} \to 1$. [step 1.1, L4, L5, L6, L7]

3.1 By steps 1.2 and 1.3 the tail range of $(q_k)$ at every index $n$ is exactly $\{1/8, 2\}$: those are the only values, and each occurs at some index $\ge n$. Its least upper bound in $\overline{\mathbb{R}}$ is $2$ and its greatest lower bound is $1/8$, since $1/8 < 2$ and both belong to the set; hence $\limsup_k q_k$ is the greatest lower bound of $\{2\}$, namely $2$, and $\liminf_k q_k$ is the least upper bound of $\{1/8\}$, namely $1/8$. [step 2.1, step 1.3, L2, L7]

3.2 By steps 2.2 and 2.3 and the scalar rule, $r_k = 2^{-1} t_{k+1}^{1/(k+1)} \to 2^{-1} \cdot 1 = 1/2$, so $\limsup_k r_k = \liminf_k r_k = 1/2$. [step 2.2, step 2.3, L3, L6]

4.1 For this sequence the claim asserts $\limsup_k r_k = \limsup_k q_k$, that is $1/2 = 2$; but $1/2 < 1 < 2$, so the two are different and the claim fails. [step 3.1, step 3.2, L7, L9]

5.1 The claim is therefore false. The true chain [L8] reads here $1/8 \le 1/2 \le 1/2 \le 2$, so both outer inequalities are strict for this witness while the middle one is an equality. [step 4.1, step 3.1, step 3.2, L7, L8, L9] ∎

## Remarks

- **The witness is named on the companion page** as
  [[ex-ratio-fails-root-succeeds]], which quotes the four values computed here.

- **This is the standard witness that the root criterion is strictly stronger.**
  The ratios oscillate between $1/8$ and $2$, so a criterion reading only
  $\limsup_k q_k = 2 > 1$ learns nothing about whether $a_k \to 0$; the roots
  converge to $1/2 < 1$, which settles it. The same sequence reappears wherever
  the ratio and root tests are compared.

- **Why the roots are so much better behaved.** Taking an $n$-th root divides the
  exponent by $n$, so the bounded perturbation $(-1)^k$ in the exponent of
  $2^{-k+(-1)^k}$ contributes $2^{\pm 1/(k+1)}$, which tends to $1$. The ratio, by
  contrast, differences the exponent, and a bounded oscillation does not shrink
  under differencing.

- **Both outer inequalities of [[thm-ratio-root-inequality]] are strict here, but
  the middle one is not.** A witness making all three strict at once is
  [[ex-strict-ratio-root-chain]].
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

### `lem-limsup-exists`

````markdown
---
id: lem-limsup-exists
kind: lemma
title: "The tail suprema of any real sequence are nonincreasing in $\\overline{\\mathbb{R}}$, so the limit superior exists for every sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$s_{n+1}\\le s_n$"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and
extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ as in
[[def-limsup-liminf]].

1. **Monotonicity of the extended bounds under inclusion.** If
   $A \subseteq B \subseteq \overline{\mathbb{R}}$ ([[def-extended-reals]]) then
   $$\sup A \le \sup B \qquad \text{and} \qquad \inf B \le \inf A,$$
   the four quantities being the extended bounds of [[lem-extended-reals-complete]].
   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.
2. **The tail bounds are monotone.** $T_m \subseteq T_n$ whenever $n \le m$, and
   hence
   $$s_m \le s_n \qquad \text{and} \qquad i_n \le i_m \qquad (n \le m).$$
   In particular $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$ for every $n$, and
   $i_n \le s_n$ for every $n$.
3. **Existence.** $\limsup_k x_k$ and $\liminf_k x_k$ exist in
   $\overline{\mathbb{R}}$ for **every** sequence of reals, bounded or not.

Claim 1 is the tool the rest of this page uses whenever two extended suprema are
compared. It is proved here, from the definition of a least upper bound, rather
than quoted from the suprema page, for the reason given in the remarks below.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-sequence]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L2] Least upper bound and greatest lower bound in a poset: $\sup A$ is an upper bound of $A$ that is $\le$ every upper bound of $A$, and $\inf A$ is a lower bound that is $\ge$ every lower bound; each is unique when it exists ([[def-upper-bound]], [[def-partial-order]]).

[L3] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set, so its order is reflexive and transitive ([[def-extended-reals]], [[def-partial-order]]).

[L4] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq B \subseteq \overline{\mathbb{R}}$ be arbitrary. By [L1] the four elements $\sup A$, $\sup B$, $\inf A$, $\inf B$ of $\overline{\mathbb{R}}$ all exist and are uniquely determined. [given, L1, L2]

1.2 Let $n \le m$ in $\mathbb{N}$. Every element of $T_m$ has the form $x_k$ with $k \ge m$, and then $k \ge n$ by transitivity, so $x_k \in T_n$; hence $T_m \subseteq T_n$. [given, L4]

1.3 For every $n$ the tail range $T_n$ contains $x_n$, so $i_n \le x_n$ because $i_n$ is a lower bound of $T_n$, and $x_n \le s_n$ because $s_n$ is an upper bound of $T_n$; transitivity gives $i_n \le s_n$. [given, L1, L2, L3]

2.1 Since $\sup B$ is an upper bound of $B$ and $A \subseteq B$, every element of $A$ is $\le \sup B$, so $\sup B$ is an upper bound of $A$; as $\sup A$ is the least of the upper bounds of $A$, this gives $\sup A \le \sup B$. Dually $\inf B$ is a lower bound of $B$, hence of $A$, and as $\inf A$ is the greatest of the lower bounds of $A$ this gives $\inf B \le \inf A$. Claim 1 is proved. [step 1.1, L1, L2]

3.1 Applying claim 1 to the inclusion $T_m \subseteq T_n$ valid for $n \le m$ gives $s_m \le s_n$ and $i_n \le i_m$; the special case $m = n + 1$ gives $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$. Together with $i_n \le s_n$ this is claim 2. [step 1.2, step 1.3, step 2.1]

4.1 The families $\{s_n : n \in \mathbb{N}\}$ and $\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$, so [L1] applies to them with no hypothesis, and $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist in $\overline{\mathbb{R}}$ for every sequence of reals. This is claim 3. [step 3.1, L1, L2] ∎

## Remarks

- **The monotonicity is where the two operations of the definition interlock.**
  Because $(s_n)$ is nonincreasing, the outer infimum in
  $\limsup_k x_k = \inf_n s_n$ is an infimum of a decreasing family, so it is the
  value the tail suprema are pressing down towards; and because $(i_n)$ is
  nondecreasing, $\liminf_k x_k = \sup_n i_n$ is the value the tail infima are
  pressing up towards. Nothing in this lemma says the pressing converges, and for
  an unbounded sequence there is nothing in $\mathbb{R}$ for it to converge to;
  the exact statement is [[lem-limsup-epsilon-characterisation]].

- **Why the word "nonincreasing" is spelled out rather than cited.**
  [[def-monotone-sequence]] defines monotone for sequences of *reals*, and
  $(s_n)$ takes values in $\overline{\mathbb{R}}$, so the definition does not
  apply to it. Claim 2 is therefore stated as the inequality it is. When $(x_k)$
  is bounded every $s_n$ is real ([[def-limsup-liminf]]) and $(s_n)$ is then a
  nonincreasing sequence of reals in the sense of [[def-monotone-sequence]], but
  no proof on this page needs that reading.

- **Claim 1 is not [[lem-sup-monotone]].** That lemma is the same one-line
  argument carried out in $\mathbb{R}$, and its statement carries the hypotheses
  that the smaller set be nonempty and the larger one bounded above, without
  which neither supremum denotes anything. Those are exactly the hypotheses that
  the extended bounds of [[lem-extended-reals-complete]] dispense with, so the
  extended statement is not an instance of the real one and is proved from the
  definition of a least upper bound instead.

- **Claim 1 costs nothing and is used everywhere.** It is the one-line poset
  argument: the larger set's supremum bounds the smaller set, and leastness does
  the rest. It is stated as part of this lemma rather than as an item of its own
  because it is used only in company with the tail bounds.
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

### `lem-power-laws`

````markdown
---
id: lem-power-laws
kind: lemma
title: "Laws of integer exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, thm-induction-principle, def-field, def-int-operations, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-nat-embeds-int, thm-int-comm-ring]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

## Facts & Assumptions

**Given:** Elements $a, b$ of a field $F$, naturals $m, n, p, q, k$ and integers ranged over by $m, n$ in claims 2 and 3.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$ for $n \in \mathbb{N}$; and $a^{-n} := (a^n)^{-1}$ for $a \ne 0$ and $n \ge 1$, the two clauses agreeing at $n = 0$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Field arithmetic: multiplication is associative and commutative with identity $1$, and every nonzero element has an inverse ([[def-field]]); inverses are unique ([[lem-of-inverse-unique]], which states uniqueness and nothing further), and HENCE, for $x, y \ne 0$, $(xy)^{-1} = x^{-1} y^{-1}$ and $(x^{-1})^{-1} = x$, since $(xy)(x^{-1}y^{-1}) = 1$ and $x^{-1}x = 1$ exhibit inverses that uniqueness then identifies.

[L4] A field has no zero divisors: $xy = 0$ implies $x = 0$ or $y = 0$ ([[lem-of-no-zero-divisors]]).

[L5] $\mathbb{Z}$ is a commutative ring in which every element is $\iota(k)$ or $-\iota(k)$ for a unique natural $k$ ([[thm-int-comm-ring]], [[lem-nat-embeds-int]], [[def-int-operations]]); we write $k$ for $\iota(k)$.

## Proof

**Proof technique:** induction.

1.1 Base cases at $n = 0$ for the addition law, the product law and nonvanishing: $a^{m+0} = a^m = a^m \cdot 1 = a^m a^0$ for every $m \in \mathbb{N}$; $(ab)^0 = 1 = 1 \cdot 1 = a^0 b^0$; and if $a \ne 0$ then $a^0 = 1 \ne 0$. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $a^{m+n} = a^m a^n$ for all $m \in \mathbb{N}$, $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The iterated-power law $(a^m)^n = a^{mn}$ is deliberately NOT carried in this hypothesis: its successor step needs the addition law at the exponent pair $(mn, m)$, whose second entry is not the current stage, so that law must be finished first and the iterated law proved afterwards. [ih]

1.3 For $a \ne 0$ and every integer $j$, $a^{-j} = (a^j)^{-1}$: for $j \ge 0$ this is the definition together with the agreement of the two clauses at $j = 0$, and for $j = -k$ with $k \ge 1$ it reads $a^{k} = (a^{-k})^{-1}$, which holds because $a^{-k} = (a^k)^{-1}$ and $(x^{-1})^{-1} = x$ at $x = a^{k}$. That last substitution needs $a^{k} \ne 0$, which is NOT free here and must not be read off the definition, since the definition of the negative clause is what is being justified; it is instead a self-contained induction on $k$, from $a^{0} = 1 \ne 0$ and the fact that $a^{k+1} = a^{k}a$ is a product of two nonzero elements of a field, hence nonzero. [L1, L2, L3, L4, L5]

2.1 Successor step for the addition law, the product law and nonvanishing: $a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} a = (a^m a^n) a = a^m (a^n a) = a^m a^{n+1}$ for every $m \in \mathbb{N}$; $(ab)^{n+1} = (ab)^n (ab) = (a^n b^n)(ab) = (a^n a)(b^n b) = a^{n+1} b^{n+1}$; and if $a \ne 0$ then $a^{n+1} = a^n a$ is a product of two nonzero elements, hence nonzero. [step 1.2, L1, L3, L4]

3.1 By the induction principle, for all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$ and $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The addition law is thereby available at EVERY pair of natural exponents, which is exactly what the iterated-power law needs. [step 1.1, step 2.1, L2]

4.1 The iterated-power law for natural exponents, $(a^m)^n = a^{mn}$, by a second induction on $n$ with $m \in \mathbb{N}$ fixed: at $n = 0$ both sides are $1$, since $(a^m)^0 = 1 = a^0 = a^{m \cdot 0}$; and if $(a^m)^n = a^{mn}$ then $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, where the third equality is the addition law of step 3.1 at the pair $(mn, m)$, legitimate precisely because that law is by now proved for all pairs of naturals. This completes claim 1. [step 3.1, L1, L2, L3]

4.2 For $a \ne 0$ and every integer $j$, $a^{j+1} = a^j a$: for $j \ge 0$ this is the recursion clause, and for $j = -k$ with $k \ge 1$ we compute $a^{-k} a = (a^k)^{-1} a = (a^{k-1} a)^{-1} a = (a^{k-1})^{-1} a^{-1} a = (a^{k-1})^{-1} = a^{-(k-1)} = a^{-k+1}$. [step 3.1, step 1.3, L1, L3]

4.3 For $a, b \ne 0$ the product law holds for all integers $n$: for $n \ge 0$ it is step 3.1, and for $n = -k$ with $k \ge 1$ we get $(ab)^{-k} = ((ab)^k)^{-1} = (a^k b^k)^{-1} = (a^k)^{-1}(b^k)^{-1} = a^{-k} b^{-k}$. [step 3.1, step 1.3, L3, L5]

5.1 For $a \ne 0$, every integer $j$ and every natural $k$, $a^{j+k} = a^j a^k$, by induction on $k$: the case $k = 0$ is $a^j = a^j \cdot 1$, and if $a^{j+k} = a^j a^k$ then $a^{j+k+1} = a^{j+k} a = a^j a^k a = a^j a^{k+1}$ by step 4.2 applied to the integer $j+k$ and by the recursion clause. [step 4.2, L1, L2, L3]

6.1 For $a \ne 0$ the addition law holds for all integers $m, n$: writing $n = k$ or $n = -k$ with $k \in \mathbb{N}$, the case $n = k$ is step 5.1, while for $n = -k$ step 5.1 applied to the integer $m - k$ gives $a^m = a^{(m-k)+k} = a^{m-k} a^k$, hence $a^{m-k} = a^m (a^k)^{-1} = a^m a^{-k}$. [step 5.1, step 1.3, L3, L5]

7.1 For $a \ne 0$ the iterated-power law holds for all integers $m, n$: for $n \ge 0$ induction on $n$ gives $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, the third equality by the integer addition law of step 6.1 at the pair $(mn, m)$, with base $(a^m)^0 = 1 = a^0$; and for $n = -q$ with $q \ge 1$, $(a^m)^{-q} = ((a^m)^q)^{-1} = (a^{mq})^{-1} = a^{-mq} = a^{m(-q)}$, using that $a^m \ne 0$ by step 3.1 and step 1.3. [step 6.1, step 3.1, step 1.3, L2, L3, L5]

8.1 Claims 1, 2 and 3 are therefore established: the addition, product and iterated-power laws for natural exponents together with nonvanishing by steps 3.1 and 4.1, the identity $a^{-m} = (a^m)^{-1}$ by step 1.3, and the three integer-exponent laws by steps 6.1, 4.3 and 7.1. [step 3.1, step 4.1, step 1.3, step 6.1, step 4.3, step 7.1, discharge-induction] ∎
````

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `lem-series-tail-invariance`

````markdown
---
id: lem-series-tail-invariance
kind: lemma
title: "A series converges iff each of its tail series converges, and the sum splits as $s_N$ plus the $N$-th tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, lem-limit-of-tail, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit, def-sequence]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let
$N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the
$N$-th tail series $\sum_{k \ge N} a_k$ ([[def-series]]). Then:

1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$;
2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and
   in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$$
3. hence the following are equivalent: $\sum a_k$ converges; every tail series of
   $\sum a_k$ converges; some tail series of $\sum a_k$ converges.

In words: convergence of a series is a property of its terms from any index on,
and changing finitely many terms changes the sum but not the fact of convergence.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, a natural number $N$, the partial sums $s_n = \sum_{k<n} a_k$ and the partial sums $t_j = \sum_{i<j} a_{N+i}$ of the $N$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m \le n$ then $\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$ ([[lem-finite-sum-laws]]), and $\sum_{k=m}^{n-1} a_k$ is by definition $\sum_{i<n-m} a_{m+i}$ ([[def-finite-sum]]).

[L2] Convergence depends only on the tail: a sequence $(x_n)$ converges to $x$ if and only if its $N$-th tail $(x_{j+N})_{j}$ converges to $x$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_j \to x$ and $y_j \to y$ then $x_j + y_j \to x + y$ and $x_j - y_j \to x - y$ ([[thm-algebra-of-limits]]).

[L4] A constant sequence $y_j = c$ converges to $c$, immediately from the definition of a limit ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j \in \mathbb{N}$ and put $n := j + N$, so that $N \le n$ and $n - N = j$. [given]

1.2 The family $(s_{j+N})_{j \in \mathbb{N}}$ is the $N$-th tail of the sequence $(s_n)$ of partial sums. [given, L2]

2.1 Splitting the partial sum $s_n$ at $N$ gives $s_n = \sum_{k<N} a_k + \sum_{k=N}^{n-1} a_k = s_N + \sum_{i<j} a_{N+i} = s_N + t_j$. [step 1.1, L1]

2.2 Suppose $\sum a_k$ converges, say $s_n \to S$; then the $N$-th tail $(s_{j+N})_j$ converges to $S$. [given, step 1.2, L2]

3.1 Claim 1 follows: $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$. [step 2.1, algebra]

4.1 The constant sequence with value $s_N$ converges to $s_N$, so $t_j = s_{j+N} - s_N \to S - s_N$, and the $N$-th tail series converges with sum $S - s_N$. [step 2.2, step 3.1, L3, L4]

4.2 Conversely, suppose the $N$-th tail series converges, say $t_j \to T$; then $s_{j+N} = s_N + t_j \to s_N + T$ by the same two rules. [step 3.1, L3, L4]

5.1 So the $N$-th tail of $(s_n)$ converges to $s_N + T$, hence $(s_n)$ itself converges to $s_N + T$ and $\sum a_k$ converges. [step 4.2, step 1.2, L2]

6.1 Claim 2 follows: the two convergences are equivalent, and when they hold the sums are related by $S = s_N + T$, which is the displayed identity. [step 4.1, step 5.1, algebra]

7.1 Claim 3 follows as well: if $\sum a_k$ converges then by claim 2 every tail series converges; every tail series converging trivially gives some tail series converging, the family of tails being indexed by all of $\mathbb{N}$; and if some tail series, say the $N$-th, converges then by claim 2 again $\sum a_k$ converges. [step 6.1] ∎

## Remarks

- **Where the hypothesis-free character comes from.** Nothing here assumes the terms have a sign or that any series converges: claim 1 is an identity between finite sums, valid always, and claims 2 and 3 are read off from it by two standard limit rules. That is why the lemma may be used to move between a series and its tails inside proofs that have not yet decided the convergence question.

- **The sum does change.** Only the fact of convergence is tail invariant. The identity in claim 2 is the exact bookkeeping: discarding the first $N$ terms lowers the sum by $s_N$, and no more.
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

