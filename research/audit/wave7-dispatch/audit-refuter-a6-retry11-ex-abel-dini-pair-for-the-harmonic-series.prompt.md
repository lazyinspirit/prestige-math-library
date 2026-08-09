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

- critical risk (10): 7 declared dependencies; 9 cited facts; 6 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-abel-dini-pair-for-the-harmonic-series`

Normalized current SHA-256: `e065c6318ac77b0318354aa1e5f141eccc1409316b34270811073b74cb16c813`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-abel-dini-pair-for-the-harmonic-series
kind: example
title: "Abel-Dini applied to $\\sum 1/k$: $\\sum 1/(k s_k)$ still diverges while $\\sum 1/(k s_k^2)$ converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-abel-dini, ex-harmonic-series-diverges, def-series, def-finite-sum, lem-of-naturals-positive, def-integer-power, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Take $a_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, so that $\sum a_k$ is the
harmonic series $\sum_{k \ge 1} 1/k$, which has positive terms and diverges
([[ex-harmonic-series-diverges]]). Its inclusive partial sums are the harmonic
numbers

$$S_n \;=\; \sum_{k=0}^{n} a_k \;=\; \sum_{k=1}^{n+1} \frac{1}{k} \;=\; H_{n+1} \qquad (n \in \mathbb{N}),$$

all of them positive. The Abel-Dini theorem ([[thm-abel-dini]]) then says that

$$\sum_{n} \frac{a_n}{S_n} \;=\; \sum_{n} \frac{1}{(n+1)\,H_{n+1}} \quad \text{diverges}, \qquad \sum_{n} \frac{a_n}{S_n^{2}} \;=\; \sum_{n} \frac{1}{(n+1)\,H_{n+1}^{2}} \quad \text{converges} .$$

Classically these are written $\sum_{k \ge 1} 1/(k H_k)$ and
$\sum_{k \ge 1} 1/(k H_k^{2})$, with $H_k = 1 + 1/2 + \dots + 1/k$.

**What the pair shows.** The harmonic series already diverges as slowly as any
explicit series on this page, and dividing its terms by the running total
produces something that diverges more slowly still. Dividing by the square of the
running total overshoots into convergence. So exponent $1$ gives a divergent
member and exponent $2$ a convergent one. The absence of a slowest divergent
positive series comes from applying Abel-Dini again to the newly produced
divergent series, not from a last-exponent claim about this fixed pair.

## Facts & Assumptions

**Given:** The sequence $a_k := 1/\iota(k+1)$, $k \in \mathbb{N}$, and its inclusive partial sums $S_n = \sum_{k=0}^{n} a_k$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive, so each $a_k$ is positive and each $S_n$ is a sum of positive terms ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] The harmonic series $\sum_{k \ge 1} 1/k$ diverges ([[ex-harmonic-series-diverges]]), and it is by definition the series of $j \mapsto 1/\iota(j+1)$ ([[def-series]]).

[L3] Abel-Dini: for a sequence of positive terms whose series diverges, with $S_n$ the inclusive partial sums, $\sum_n a_n/S_n$ diverges and $\sum_n a_n/S_n^{2}$ converges ([[thm-abel-dini]], [[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 Every term $a_k = 1/\iota(k+1)$ is positive. [given, L1]

1.2 The series $\sum a_k$ is the harmonic series $\sum_{k \ge 1} 1/k$ and therefore diverges. [given, L2]

1.3 Its inclusive partial sums are $S_n = \sum_{k=0}^{n} 1/\iota(k+1) = \sum_{k=1}^{n+1} 1/k = H_{n+1}$, a reindexing of the sum by $k \mapsto k+1$. [given, L1]

2.1 The hypotheses of Abel-Dini are met by $(a_k)$: positive terms and a divergent series. [step 1.1, step 1.2, L3]

3.1 Therefore $\sum_n \dfrac{a_n}{S_n} = \sum_n \dfrac{1}{\iota(n+1) H_{n+1}}$ diverges. [step 2.1, step 1.3, L3]

4.1 And $\sum_n \dfrac{a_n}{S_n^{2}} = \sum_n \dfrac{1}{\iota(n+1) H_{n+1}^{2}}$ converges. [step 2.1, step 1.3, L3] ∎

## Remarks

- **This is the concrete form of the no-slowest-series obstruction.** The general statement is that no divergent series of positive terms is eventually dominated by every other; here it is exhibited for the standard candidate. Anyone proposing the harmonic series as a universal comparison series is answered by the first of the two conclusions.

- **No growth estimate for $H_k$ is used or needed.** The classical statement $H_k \approx \log k$ would make both conclusions look like instances of the $p$-series with a logarithmic correction, but neither the logarithm nor that estimate is available in this library at this point, and the theorem does not require them: it needs only that the running totals are positive, nondecreasing and unbounded.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-abel-dini-pair-for-the-harmonic-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "The Abel–Dini source explicitly applies the theorem to the harmonic series and records the logarithmically corrected family, while Hunter supplies the harmonic divergence. The item uses exact inclusive harmonic sums and selects exponents 1 and 2. The direct dependency application is locally written; its inaccurate 'no last divergent series in the family' sentence is an A2 defect.",
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
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "ex-harmonic-series-diverges",
      "source_section": "Example",
      "quote": "The **harmonic series** is $\\sum_{k \\ge 1} 1/k$, the series from the starting\nindex $1$ ([[def-series]]) of the family $a_k = 1/\\iota(k)$; the index $0$ is\nexcluded because $1/0$ has no value. It **diverges**, and its partial sums are\nunbounded above.\n\nThis is the case $p = 1$ of [[thm-p-series-rational]]. The two arguments below do\nnot use that theorem: the first is the condensation argument, which is how\n[[thm-p-series-rational]] itself is proved and which here degenerates to\nsomething one can read off; the second is Oresme's block grouping from the\nfourteenth century, which uses no test at all and produces the explicit lower\nbound\n\n$$\\sum_{k=1}^{2^{n}} \\frac{1}{k} \\;\\ge\\; 1 + \\frac{n}{2} \\qquad (n \\in \\mathbb{N}) .$$\n\nThat bound is worth having on its own: it says the harmonic partial sums grow at\nleast like a constant multiple of $n$ along the powers of $2$, which is the\nslowest divergence any explicit series on this page exhibits.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-abel-dini",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \\in \\mathbb{N}$\nand suppose $\\sum a_k$ **diverges** ([[def-series]]). Write\n\n$$S_n \\;:=\\; \\sum_{k=0}^{n} a_k \\qquad (n \\in \\mathbb{N})$$\n\nfor the **inclusive** partial sums, so that $S_n = s_{n+1}$ in the notation\n$s_n = \\sum_{k<n} a_k$ of [[def-series]]. Then $S_n > 0$ for every\n$n \\in \\mathbb{N}$, and:\n\n1. $\\displaystyle\\sum_{n} \\frac{a_n}{S_n}$ diverges;\n2. $\\displaystyle\\sum_{n} \\frac{a_n}{S_n^{2}}$ converges.\n\n**Why the divisor is the inclusive partial sum.** The exclusive partial sum of\n[[def-series]] has $s_0 = 0$, the empty sum, so $a_0/s_0$ has no value and a\nseries divided by $s_n$ would have to begin at $n = 1$. The inclusive sum has\n$S_0 = a_0 > 0$, so both series above are series of sequences on $\\mathbb{N}$\nwith no shift and no excluded index. The classical statement, which writes\n$s_n = a_1 + \\dots + a_n$ and starts at $n = 1$, is this one with the indices\nmoved by one.\n\n**What the theorem says.** No divergent series of positive terms is slowest:\ndividing its terms by the running total produces a series that still diverges but\nwhose terms are eventually strictly smaller. Dividing by the square of the\nrunning total overshoots and produces a convergent series. Claim 1 is what\nrefutes the existence of a universal comparison series\n([[fs-universal-comparison-series]]).",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Every term $a_k = 1/\\iota(k+1)$ is positive.",
      "step": "1.1",
      "inputs": [
        "L1",
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "The series $\\sum a_k$ is the harmonic series $\\sum_{k \\ge 1} 1/k$ and therefore diverges.",
      "step": "1.2",
      "inputs": [
        "L2",
        "given"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Its inclusive partial sums are $S_n = \\sum_{k=0}^{n} 1/\\iota(k+1) = \\sum_{k=1}^{n+1} 1/k = H_{n+1}$, a reindexing of the sum by $k \\mapsto k+1$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The hypotheses of Abel-Dini are met by $(a_k)$: positive terms and a divergent series.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Therefore $\\sum_n \\dfrac{a_n}{S_n} = \\sum_n \\dfrac{1}{\\iota(n+1) H_{n+1}}$ diverges.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.3",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "And $\\sum_n \\dfrac{a_n}{S_n^{2}} = \\sum_n \\dfrac{1}{\\iota(n+1) H_{n+1}^{2}}$ converges.",
      "step": "4.1",
      "inputs": [
        "2.1",
        "1.3",
        "L3"
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
      "evidence": "steps 1.1 and 1.3 verify a_0 > 0 and S_0 = a_0, so neither displayed denominator vanishes."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "steps 3.1 and 4.1 check exponents 1 and 2 separately; exponent 1 is the divergent boundary in the displayed family."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The fixed harmonic input and exponents 1 and 2 leave no collapsed parameter."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.2-1.3 align n = 0 with harmonic index 1 and keep inclusive H_{n+1} in both derived series."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof uses fixed data, formula-defined sequences, induction, and cited implications; it selects from no asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional; any contrapositive wording is the same one-directional implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional, so no independent reverse implication is claimed."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
    "sourcePage": "series-and-nonnegative-tests-examples",
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
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "ex-harmonic-series-diverges",
    "declared_target": "ex-harmonic-series-diverges",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests-examples",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
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
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
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
    "source": "ex-abel-dini-pair-for-the-harmonic-series",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
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

## Full text of every cited or declared item (7)

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

### `ex-harmonic-series-diverges`

````markdown
---
id: ex-harmonic-series-diverges
kind: example
title: "The harmonic series $\\sum 1/k$ diverges, by condensation and by Oresme block grouping"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-condensation, def-series, lem-nth-term-test, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, lem-power-monotone, lem-of-inverse-positive, lem-of-naturals-positive, thm-of-archimedean, def-monotone-sequence, def-bounded-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

The **harmonic series** is $\sum_{k \ge 1} 1/k$, the series from the starting
index $1$ ([[def-series]]) of the family $a_k = 1/\iota(k)$; the index $0$ is
excluded because $1/0$ has no value. It **diverges**, and its partial sums are
unbounded above.

This is the case $p = 1$ of [[thm-p-series-rational]]. The two arguments below do
not use that theorem: the first is the condensation argument, which is how
[[thm-p-series-rational]] itself is proved and which here degenerates to
something one can read off; the second is Oresme's block grouping from the
fourteenth century, which uses no test at all and produces the explicit lower
bound

$$\sum_{k=1}^{2^{n}} \frac{1}{k} \;\ge\; 1 + \frac{n}{2} \qquad (n \in \mathbb{N}) .$$

That bound is worth having on its own: it says the harmonic partial sums grow at
least like a constant multiple of $n$ along the powers of $2$, which is the
slowest divergence any explicit series on this page exhibits.

## Facts & Assumptions

**Given:** The family $a_k := 1/\iota(k)$ for naturals $k \ge 1$, with $\iota(k)$ the canonical natural; its partial sums $A_m = \sum_{k=1}^{m} a_k$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive and order preserving: $0 < \iota(j) \le \iota(k)$ for $1 \le j \le k$; and reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] Condensation: for a nonnegative nonincreasing family from $1$, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L3] A series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]]).

[L4] Powers of $2$: $2^{j} \ge 1$, $2^{j+1} = 2\cdot 2^{j}$, and $2^{j} \cdot (1/2^{j}) = 1$ ([[def-integer-power]], [[lem-power-monotone]]).

[L5] Splitting and monotonicity of finite sums, and the number of terms in $\sum_{k=p}^{q}$, namely $q+1-p$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] The principle of induction ([[thm-induction-principle]]); and for every real $x$ there is a natural $n$ with $\iota(n) > x$ ([[thm-of-archimedean]]).

[L7] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Verification

**Proof technique:** direct.

1.1 Each $a_k = 1/\iota(k)$ is positive, and $a_j \ge a_k$ whenever $1 \le j \le k$, since $0 < \iota(j) \le \iota(k)$ and reciprocation reverses the order. [given, L1]

1.2 For every $n \in \mathbb{N}$ the block $\sum_{k=2^{n}+1}^{2^{n+1}} 1/k$ has $2^{n+1} - 2^{n} = 2^{n}$ terms, each with index $k \le 2^{n+1}$ and hence each at least $1/2^{n+1}$; so the block is at least $2^{n} \cdot \dfrac{1}{2^{n+1}} = \dfrac{1}{2}$. [L1, L4, L5]

2.1 So the family is nonnegative and nonincreasing, and condensation applies to it. [step 1.1, L2]

2.2 An induction on $n$ gives $A_{2^{n}} \ge 1 + \iota(n)/2$ for every $n \in \mathbb{N}$. At $n = 0$ it reads $A_1 = 1 \ge 1$; and if it holds at $n$ then, splitting at $2^{n}$, $A_{2^{n+1}} = A_{2^{n}} + \sum_{k=2^{n}+1}^{2^{n+1}} 1/k \ge 1 + \iota(n)/2 + 1/2 = 1 + \iota(n+1)/2$. [step 1.2, L5, L6]

3.1 The condensed terms are $2^{j} a_{2^{j}} = 2^{j}\cdot \dfrac{1}{2^{j}} = 1$ for every $j \in \mathbb{N}$. [step 2.1, L4]

3.2 The range of the partial sums is not bounded above: given a real $M$, choose a natural $n$ with $\iota(n) > 2M$; then $A_{2^{n}} \ge 1 + \iota(n)/2 > 1 + M > M$. [step 2.2, L6, choose]

4.1 The condensed series is therefore $\sum_{j \ge 0} 1$, whose terms are constantly $1$ and so do not converge to $0$; it diverges. [step 3.1, L3]

5.1 By condensation, $\sum_{k \ge 1} 1/k$ diverges. That is the first argument. [step 4.1, step 2.1, L2]

6.1 Since the terms are nonnegative, the series diverges and its partial sums are unbounded above. That is the second argument, and it recovers the conclusion of step 5.1 without using any convergence test. [step 3.2, step 1.1, L7] ∎

## Remarks

- **Why the two arguments are the same argument.** Oresme's blocks are the blocks of the condensation proof, grouped from $2^{n}+1$ to $2^{n+1}$, and the constant $1/2$ in step 1.2 is the constant that makes the condensed terms of step 3.1 equal to $1$. The difference is bookkeeping: condensation states the grouping once and for all, for every nonincreasing family, and the block argument performs it for this one family.

- **The divergence is extremely slow, and the bound says how slow.** To make the partial sum exceed $M$ the estimate of step 2.2 asks for about $2^{2M}$ terms. That is why the harmonic series is the standard warning against reading convergence off numerical evidence.

- **The bound in step 2.2 is one sided.** Nothing here says the partial sums are *at most* $1 + n/2$ along powers of $2$, and in fact they are not; the matching upper bound is the other half of the condensation estimate, and it is not needed for divergence.
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

