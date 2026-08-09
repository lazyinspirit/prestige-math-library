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

- critical risk (15): 11 declared dependencies; 13 cited facts; 8 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-nonnegative-series-bounded-partial-sums`

Normalized current SHA-256: `9d03e75b899c800b2e7230e240ed738e80b36eb82ae659fe3d56319a6bd89b2a`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-nonnegative-series-bounded-partial-sums",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "Hunter Proposition 4.6 states exactly that a nonnegative series converges iff its partial sums are bounded above and otherwise diverges to infinity. The item additionally identifies the sum with the supremum, an immediate monotone-convergence consequence. The proof follows that sourced monotone-partial-sum argument.",
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
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]], and with\n$\\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:\n\n- **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$;\n- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;\n- **nonincreasing** when $x_j \\ge x_k$ for all $j \\le k$;\n- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;\n- **monotone** when it is nondecreasing or nonincreasing;\n- **strictly monotone** when it is increasing or decreasing;\n- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is\n  monotone, that is when there is $K \\in \\mathbb{N}$ such that the restriction of\n  the comparison to indices $\\ge K$ is one-signed.\n\nAn increasing sequence is nondecreasing and a decreasing sequence is\nnonincreasing, since $j \\le k$ means $j < k$ or $j = k$ and the second case gives\nequality. A sequence that is both nondecreasing and nonincreasing is constant.\n\n**Consecutive comparisons suffice, and that is an induction.** The four\nconditions above quantify over *all* pairs of indices, but what one checks in\npractice, and what a recursive construction delivers, is the comparison of\nconsecutive terms. The two agree:\n\n> $(x_k)$ is nondecreasing **if and only if** $x_k \\le x_{\\sigma(k)}$ for every\n> $k \\in \\mathbb{N}$, and $(x_k)$ is increasing **if and only if**\n> $x_k < x_{\\sigma(k)}$ for every $k \\in \\mathbb{N}$; likewise, with the\n> inequalities reversed, for nonincreasing and decreasing.\n\nThe forward implications are the instances $j = k$, $k = \\sigma(k)$ of the\ndefinitions, using $k < \\sigma(k)$ ([[lem-nat-discrete]]). For the converse,\nsuppose $x_i \\le x_{\\sigma(i)}$ for every $i$ and fix $k$; we show by induction\non $k$ ([[thm-induction-principle]]) that $x_j \\le x_k$ for every $j \\le k$. For\n$k = 0$: $j \\le 0$ forces $j = 0$, and $x_0 \\le x_0$. Assume the statement for\n$k$ and let $j \\le \\sigma(k)$. If $j = \\sigma(k)$ then $x_j \\le x_{\\sigma(k)}$ by\nreflexivity. Otherwise $j < \\sigma(k)$, and then $j \\le k$: were $k < j$ we would\nhave $k < j < \\sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \\le k$ by\ntotality of the order on $\\mathbb{N}$ ([[thm-nat-linear-order]]). The induction\nhypothesis gives $x_j \\le x_k$, and $x_k \\le x_{\\sigma(k)}$ by assumption, so\n$x_j \\le x_{\\sigma(k)}$ by transitivity. This completes the induction. The three\nremaining equivalences are the same argument with $\\le$ replaced by $<$,\n$\\ge$ or $>$, transitivity of the strict order being used in the same place.\n\n**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is\nbounded below by its first term $x_0$, and a nonincreasing sequence is bounded\nabove by $x_0$, both immediately from the definition with $j = 0$. So for a\nnondecreasing sequence the only substantive question is whether it is bounded\nabove, and for a nonincreasing sequence whether it is bounded below. The range of\n$(x_k)$ is the set $\\{x_k : k \\in \\mathbb{N}\\}$ ([[def-sequence]]), and it is\nbounded above, bounded below or bounded in the sense of [[def-bounded-set]]\nexactly when the sequence is.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-monotone-converges-iff-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],\n[[def-monotone-sequence]]). Then $(x_k)$ converges if and only if it is bounded,\nthat is if and only if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every\n$k \\in \\mathbb{N}$.\n\nThe forward implication holds for every sequence and is\n[[lem-convergent-implies-bounded]]. What monotonicity buys is the converse, which\nis false for sequences in general.",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-monotone-convergence",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let\n$S = \\{x_k : k \\in \\mathbb{N}\\}$ be its range.\n\n1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded\n   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and\n   $$\\lim_{k} x_k = \\sup S .$$\n2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges\n   and $$\\lim_{k} x_k = \\inf S .$$\n\nBoth suprema and infima exist under the stated hypotheses: $S$ is nonempty, so\nthe least-upper-bound property ([[def-complete-ordered-field]]) supplies the\nfirst and [[thm-infimum-property]] the second, and each is unique\n([[lem-sup-unique]]).\n\nThis is the first place in this track where the least-upper-bound property\nproduces a **limit**. Everything on the sequences page held in any Archimedean\nordered field; the theorem below does not, and the sequence of decimal\ntruncations of $\\sqrt 2$ inside $\\mathbb{Q}$ is the standard witness of its\nfailure there.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-monotone-unbounded-diverges",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a nondecreasing sequence of reals ([[def-sequence]],\n[[def-monotone-sequence]]) whose range $S = \\{x_k : k \\in \\mathbb{N}\\}$ is not\nbounded above ([[def-bounded-set]]). Then $(x_k)$ diverges to $+\\infty$\n([[def-divergence-to-infinity]]): for every $M \\in \\mathbb{R}$ there is\n$K \\in \\mathbb{N}$ with $x_k > M$ for all $k \\ge K$.\n\nRead together with the monotone convergence theorem this says that a nondecreasing\nsequence has exactly two possible behaviours, with nothing in between: it\nconverges to the supremum of its range, or it runs away to $+\\infty$.",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]].\n\n- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k > M$ for all\n  $k \\ge K$.\n- $(x_k)$ **diverges to $-\\infty$**, written $x_k \\to -\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k < M$ for all\n  $k \\ge K$.\n\nEquivalently, in the language of [[def-sequence]]: $x_k \\to +\\infty$ when the\nproperty $x_k > M$ holds eventually, for every real $M$.",
      "uses": [
        "4.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For every $n$, $s_{n+1} - s_n = a_n \\ge 0$, so $s_n \\le s_{n+1}$ and $(s_n)$ is nondecreasing.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For every $n$, $s_n = \\sum_{k<n} a_k \\ge 0$, all terms being nonnegative.",
      "step": "1.2",
      "inputs": [
        "L3",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Claim 1 is steps 1.1 and 1.2 together.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Since $s_n \\ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above.",
      "step": "2.2",
      "inputs": [
        "L4",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above.",
      "step": "3.1",
      "inputs": [
        "L4",
        "1.1",
        "2.2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "If $S$ is bounded above then $(s_n)$ converges to $\\sup S$, so $\\sum a_k$ converges with sum $\\sup S$; and since $\\sup S$ is an upper bound of $S$, $s_n \\le \\sup S$ for every $n$.",
      "step": "4.1",
      "inputs": [
        "1.1",
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "If $S$ is not bounded above then $s_n \\to +\\infty$, and by step 3.1 the series diverges.",
      "step": "4.2",
      "inputs": [
        "3.1",
        "1.1",
        "L6"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3.",
      "step": "5.1",
      "inputs": [
        "3.1",
        "4.1",
        "4.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.2 includes s_0, the empty sum, and obtains s_0 = 0."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "steps 1.1-1.2 allow a_n = 0; steps 3.1-4.1 include the identically zero sequence with S = {0}."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No singleton carrier, exponent-one threshold, or first-index exception is a separate case of this claim."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1-4.1 include the constant partial-sum sequence arising from all-zero terms."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 3.1, 4.1, and 4.2 separate bounded-above from not-bounded-above and exhaust the two possibilities."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof uses fixed data, formula-defined sequences, induction, and cited implications; it selects from no asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 3.1 proves a convergent nonnegative series has bounded partial sums."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "steps 3.1 and 4.1 prove bounded-above partial sums converge, with sum sup S."
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-monotone-convergence",
    "declared_target": "thm-monotone-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-monotone-converges-iff-bounded",
    "declared_target": "cor-monotone-converges-iff-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-monotone-unbounded-diverges",
    "declared_target": "lem-monotone-unbounded-diverges",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-nonnegative-series-bounded-partial-sums",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cex-comparison-needs-nonnegativity",
    "declared_target": "cex-comparison-needs-nonnegativity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests-examples",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

### `cex-comparison-needs-nonnegativity`

````markdown
---
id: cex-comparison-needs-nonnegativity
kind: counterexample
title: "Two series with $a_k \\le b_k$ for all $k$, $\\sum b_k$ convergent and $\\sum a_k$ divergent, when the terms may be negative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-direct-comparison-test, thm-nonnegative-series-bounded-partial-sums, ex-harmonic-series-diverges, def-series, lem-series-linearity, def-finite-sum, lem-finite-sum-laws, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit]
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
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $a_k \le b_k$ for every $k \in \mathbb{N}$ and $\sum b_k$
converges, then $\sum a_k$ converges.

This is [[thm-direct-comparison-test]] with its nonnegativity hypothesis deleted,
and deleting it destroys the theorem. Take

$$a_k := -\frac{1}{k+1}, \qquad b_k := 0 \qquad (k \in \mathbb{N}) .$$

Then $a_k < 0 = b_k$ for every $k$; the series $\sum b_k$ converges, with all
partial sums equal to $0$ and sum $0$; and $\sum a_k$ diverges, being $-1$ times
the harmonic series ([[ex-harmonic-series-diverges]], [[lem-series-linearity]]).

**What exactly fails.** The proof of the comparison test bounds the partial sums
of $\sum a_k$ above by those of $\sum b_k$ and then reads convergence off
boundedness, and that last step is available only for a *nonnegative* series
([[thm-nonnegative-series-bounded-partial-sums]]). Here the partial sums of
$\sum a_k$ are indeed bounded above, by $0$; they are unbounded below, and the
theorem's conclusion fails for exactly that reason.

## Facts & Assumptions

**Given:** The sequences $a_k := -1/\iota(k+1)$ and $b_k := 0$ for $k \in \mathbb{N}$ ([[def-series]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals $\iota(k+1)$ are positive, so $1/\iota(k+1) > 0$ and $a_k < 0$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] A finite sum of zeros is zero, being the scalar multiple of any finite sum by $0$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L3] A constant sequence converges to its value ([[def-real-limit]]).

[L4] The harmonic series $\sum_{k \ge 1} 1/k$ diverges, and it is the series of the sequence $j \mapsto 1/\iota(j+1)$ ([[ex-harmonic-series-diverges]], [[def-series]]).

[L5] For $c \ne 0$, $\sum c\,x_k$ converges if and only if $\sum x_k$ converges ([[lem-series-linearity]]).

[L6] For a series of nonnegative terms, convergence is equivalent to boundedness above of the partial sums ([[thm-nonnegative-series-bounded-partial-sums]]).

[L7] The refuted claim: $a_k \le b_k$ for all $k$ and convergence of $\sum b_k$ imply convergence of $\sum a_k$.

## Counterexample

**Proof technique:** direct.

1.1 For every $k \in \mathbb{N}$, $a_k = -1/\iota(k+1) < 0 = b_k$, so in particular $a_k \le b_k$. [given, L1]

1.2 The partial sums of $\sum b_k$ are $\sum_{j<n} 0 = 0$ for every $n$, a constant sequence, so $\sum b_k$ converges with sum $0$. [given, L2, L3]

1.3 The sequence $(a_k)$ is $(-1)$ times the sequence $j \mapsto 1/\iota(j+1)$, whose series is the harmonic series and diverges; since $-1 \ne 0$, $\sum a_k$ diverges. [given, L4, L5]

2.1 So the hypotheses of the claim hold for this pair while its conclusion fails, and the claim is false. [step 1.1, step 1.2, step 1.3, L7]

3.1 The genuine comparison test is untouched: it requires $0 \le a_k$ from some index on, and here $a_k < 0$ at every index. [step 1.1, L6] ∎

## Remarks

- **The witness is as degenerate as possible on purpose.** Taking $b_k = 0$ removes every question about the dominating series and isolates the single point at issue: a series bounded above by a convergent one need not converge if it is free to run away downwards. Any negative divergent series would do; this one is the shortest to verify.

- **One-sided boundedness is not convergence.** The partial sums here are $-\sum_{k=1}^{n} 1/k$, bounded above by $0$ and unbounded below. For a nonnegative series that situation cannot arise, which is exactly the content of [[thm-nonnegative-series-bounded-partial-sums]] and the reason the sign hypothesis appears in every comparison statement on the main page.
````

### `cor-monotone-converges-iff-bounded`

````markdown
---
id: cor-monotone-converges-iff-bounded
kind: corollary
title: "A monotone sequence converges if and only if it is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monotone-convergence, lem-convergent-implies-bounded, def-monotone-sequence, def-bounded-set, def-sequence, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, Sequences and limits (Theorem 2.1.10)"
      url: "https://www.jirka.org/ra/html/sec_seqsandlims.html"
---

## Statement

Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]). Then $(x_k)$ converges if and only if it is bounded,
that is if and only if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$.

The forward implication holds for every sequence and is
[[lem-convergent-implies-bounded]]. What monotonicity buys is the converse, which
is false for sequences in general.

## Facts & Assumptions

**Given:** A monotone sequence $(x_k)$ of reals, with range $S = \{x_k : k \in \mathbb{N}\}$.

[L1] Monotone means nondecreasing or nonincreasing ([[def-monotone-sequence]]).

[L2] Monotone convergence: a nondecreasing sequence whose range is bounded above converges, to the supremum of its range; a nonincreasing sequence whose range is bounded below converges, to the infimum ([[thm-monotone-convergence]]).

[L3] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L4] A sequence is bounded when some $M$ satisfies $|x_k| \le M$ for every $k$; its range is bounded above by $u$ when $x_k \le u$ for every $k$, and bounded below by $\ell$ when $\ell \le x_k$ for every $k$ ([[def-sequence]], [[def-bounded-set]]).

[L5] Absolute value: $|t| \le M$ exactly when $-M \le t \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(x_k)$ converges. Then it is bounded by [L3], and this direction uses neither the monotonicity hypothesis nor any case distinction. [given, L3]

1.2 Suppose instead that $(x_k)$ is bounded, and fix $M$ with $|x_k| \le M$ for every $k$; then $-M \le x_k \le M$ for every $k$, so the range $S$ is bounded above by $M$ and bounded below by $-M$. [given, L4, L5, assume-hyp]

2.1 If $(x_k)$ is nondecreasing then its range is bounded above by step 1.2, so $(x_k)$ converges, to $\sup S$. [step 1.2, L2, assume-case nondec]

2.2 If $(x_k)$ is nonincreasing then its range is bounded below by step 1.2, so $(x_k)$ converges, to $\inf S$. [step 1.2, L2, assume-case noninc]

3.1 A monotone sequence is nondecreasing or nonincreasing, so those two cases exhaust the hypothesis, and in both a bounded monotone sequence converges. [step 2.1, step 2.2, L1, cases: nondecreasing or nonincreasing, cases-exhaustive]

4.1 Both directions are established: a monotone sequence converges if and only if it is bounded. [step 1.1, step 3.1] ∎

## Remarks

- **The limit is named, not merely asserted to exist.** In the nondecreasing case
  it is $\sup S$ and in the nonincreasing case $\inf S$, by
  [[thm-monotone-convergence]]. The equivalence is stated without the value only
  because the value depends on which of the two cases holds.

- **This is the form in which the result is used.** Bolzano-Weierstrass
  ([[thm-bolzano-weierstrass]]) extracts a monotone subsequence of a bounded
  sequence and then needs exactly this corollary, since what is available about
  the subsequence is boundedness, inherited from the sequence, and not a bound on
  a particular side.

- **Monotonicity cannot be dropped.** Without it the converse direction fails,
  by [[fs-bounded-implies-convergent]]. The forward direction is not in the same
  position: it holds for every sequence, monotone or not, so there is no
  hypothesis to drop from it. What monotonicity adds there is sharpness rather
  than validity, and the sharpened form is recorded by
  [[lem-monotone-unbounded-diverges]]: an unbounded nondecreasing sequence does
  not merely fail to converge, it diverges to $+\infty$.
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

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-completeness-properties`

````markdown
---
id: def-completeness-properties
kind: definition
title: "The five completeness properties of an ordered field: least upper bound, monotone convergence, nested intervals, Bolzano-Weierstrass, and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequences-in-an-ordered-field, def-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value. Sequences in $F$, and the notions of convergence in $F$,
Cauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,
closed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the
ones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are
not restated here and they are never read in $\mathbb{R}$: every $\varepsilon$
below ranges over the positive elements of $F$ itself.

A sequence $(x_k)$ in $F$ is **bounded above** when there is $B \in F$ with
$x_k \le B$ for every $k \in \mathbb{N}$, and a subset $S \subseteq F$ is bounded
above when there is $B \in F$ with $s \le B$ for every $s \in S$
([[def-complete-ordered-field]], [[def-upper-bound]]).

The following are five properties that $F$ may or may not have.

- **(LUB), the least-upper-bound property.** Every nonempty $S \subseteq F$ that
  is bounded above has a least upper bound in $F$. This is exactly the condition
  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and
  the two names are used interchangeably here.

- **(MCT), the monotone convergence property.** Every nondecreasing sequence in
  $F$ that is bounded above converges in $F$.

- **(NIP), the nested interval property.** For every nested sequence
  $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$
  whose lengths tend to $0$ in $F$, the intersection

  $$\bigcap_{k \in \mathbb{N}} I_k$$

  is nonempty.

- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has
  a subsequence that converges in $F$.

- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.

Alongside these we use the **Archimedean property (ARCH)** of
[[def-archimedean-field]]: for every $x \in F$ there is a natural number $n$
with $x < n \cdot 1_F$.

## Remarks

- **(NIP) is stated in the shrinking form because that is the form both
  satisfied by the formal Laurent series field and used by the bisection
  theorem.** The field $\mathbb{R}((t^{-1}))$ is Cauchy complete without having
  least upper bounds ([[thm-laurent-cauchy-complete]],
  [[cor-laurent-not-lub-complete]]), and it satisfies shrinking (NIP)
  ([[cor-laurent-nested-intervals]]). The same shrinking condition is exactly
  what the bisection argument of
  [[lem-nested-intervals-and-archimedean-imply-bw]] produces.

- **"Lengths tend to $0$" is read in $F$.** For a non-Archimedean $F$ this is
  strictly stronger than the same words read in $\mathbb{R}$ through some
  identification of the rational scalars, and the difference is not academic:
  the remarks of [[cor-laurent-nested-intervals]] exhibit intervals in
  $\mathbb{R}((t^{-1}))$ whose lengths are the real constants $2/(n+1)$, which
  tend to $0$ in the ordinary real sense and do not tend to $0$ in the order of
  that field.

- **Boundedness of a sequence is two-sided, boundedness above is not.**
  [[def-sequences-in-an-ordered-field]] calls $(x_k)$ bounded when
  $|x_k| \le M$ for every $k$, which is the hypothesis of (BW); (MCT) asks only
  for the one-sided bound $x_k \le B$, which for a nondecreasing sequence is the
  only side in question, since $x_0 \le x_k$ always.

- **(MCT) is stated for nondecreasing sequences only.** The nonincreasing case
  is not a separate assumption: if $(x_k)$ is nonincreasing and bounded below by
  $b$ then $(-x_k)$ is nondecreasing and bounded above by $-b$, and $x_k \to L$
  exactly when $-x_k \to -L$, because $|(-x_k) - (-L)| = |x_k - L|$. That
  reduction is used in the proof of [[lem-mct-implies-lub]].

- **Nothing here presumes that any of the five holds.** They are predicates on
  an ordered field, and the point of the page they open is that in the presence
  of (ARCH) they are all the same predicate ([[thm-completeness-equivalences]]),
  while without it two of them are strictly weaker
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **(CC) is this library's third rendering of "Cauchy complete", and for $\mathbb{R}$ all three agree.** [[def-cauchy-in-metric]] and [[def-complete-metric-space]] read Cauchyness and completeness in a metric space, and the case $n = 1$ of [[thm-euclidean-space-complete]] proves $(\mathbb{R}, |x-y|)$ complete; [[def-real-limit]] reads both notions for real sequences, with $\varepsilon$ ranging over the positive rationals; the present definition reads them in an ordered field $F$. For $F = \mathbb{R}$ under the metric $d(x,y) = |x-y|$ of [[lem-real-line-is-a-metric-space]] the three unfold to the same quantified statement: below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so the two ranges of $\varepsilon$ pick out the same Cauchy sequences and the same convergent ones. So "$\mathbb{R}$ satisfies (CC)" is a statement this library has already proved twice, as [[thm-cauchy-criterion-via-lub]] and as the case $n = 1$ of [[thm-euclidean-space-complete]]. The parallel stops at $\mathbb{R}$. The absolute value of an ordered field takes its values in $F$, while a metric is required to take its values in $\mathbb{R}$ ([[def-metric-space]]), so for a non-Archimedean $F$ the map $(x,y) \mapsto |x-y|$ is not a metric in this library's sense and the metric development says nothing about it. That is why [[lem-of-sequence-basics]] had to be proved from the order axioms alone, although its Cauchy clauses reappear for metric spaces as [[lem-metric-convergent-implies-cauchy]], [[lem-metric-cauchy-bounded]] and [[lem-metric-cauchy-with-convergent-subsequence]]. Neither development generalises the other; they meet exactly at $\mathbb{R}$.
````

### `def-divergence-to-infinity`

````markdown
---
id: def-divergence-to-infinity
kind: definition
title: "Divergence to $+\\infty$ and to $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-real-limit, def-complete-ordered-field, lem-convergent-implies-bounded, thm-of-archimedean, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to+\\infty$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## Remarks

- **This is divergence, not convergence.** The symbols $+\infty$ and $-\infty$
  are **not real numbers**: $\mathbb{R}$ is the complete ordered field
  ([[def-complete-ordered-field]]) and contains no element larger than every
  element of itself. Nothing above claims that $(x_k)$ has a limit in the sense
  of [[def-real-limit]], and nothing above defines an object named $+\infty$.
  The whole phrase "$x_k \to +\infty$" is a single abbreviation for the
  displayed condition, exactly as "$(x_k)$ is Cauchy" is an abbreviation for a
  condition and not a claim that some object called a Cauchy value exists.

- **A sequence diverging to $+\infty$ really does diverge.** Suppose
  $x_k \to +\infty$. Given any real $M$, there is $K$ with $x_k > M$ for all
  $k \ge K$; in particular $x_K > M$, so no real $M$ satisfies $x_k \le M$ for
  all $k$. Since $x_k \le |x_k|$ always ([[lem-of-abs-value]]), a bound
  $|x_k| \le M$ valid for all $k$ would give $x_k \le M$ for all $k$, which has
  just been excluded, so no such $M$ exists either. Thus
  $(x_k)$ is unbounded, and an unbounded sequence cannot converge, since
  convergent sequences are bounded ([[lem-convergent-implies-bounded]]). The
  same argument applies to $-\infty$. So the two notions never overlap: a
  sequence that diverges to $\pm\infty$ has no limit whatever.

- **Consequently $\lim_k x_k$ is not written here.** Many texts write
  $\lim_k x_k = +\infty$. This library does not, for the reason recorded in
  [[rem-sup-conventions]] about $\sup S = +\infty$: writing an equation whose
  right-hand side is not an element of $\mathbb{R}$ silently moves the discussion
  into the extended real line, a structure that is not a field, and every
  subsequent algebraic step then needs its own justification. In particular none
  of the rules of [[thm-algebra-of-limits]] may be applied to a divergence to
  $\pm\infty$; the familiar slogans "$\infty + \infty = \infty$" and
  "$\infty \cdot \infty = \infty$" are separate statements about this definition
  and would need separate proofs.

- **Testing against naturals suffices.** Since $\mathbb{R}$ is Archimedean
  ([[thm-of-archimedean]]), every real $M$ is below some canonical natural $n$,
  so the condition "for every real $M$" may equivalently be read as "for every
  natural $n \ge 1$"; the two formulations of $x_k \to +\infty$ agree.

- **Divergence to $+\infty$ is much stronger than divergence.** A sequence
  alternating between $1$ and $-1$ diverges ([[fs-bounded-implies-convergent]])
  but goes to neither $+\infty$ nor $-\infty$, since it is bounded. Divergence
  is the negation of convergence; divergence to $+\infty$ is a positive
  statement about growth.
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

### `lem-mct-implies-archimedean`

````markdown
---
id: lem-mct-implies-archimedean
kind: lemma
title: "The monotone convergence property alone forces the Archimedean property, so it carries no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-naturals-positive, lem-of-abs-value, lem-of-sequence-basics, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the monotone convergence property (MCT) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

So (MCT), like (BW) and like (LUB), carries the Archimedean property on its own,
and the hypothesis attached to (CC) in
[[lem-cauchy-complete-and-archimedean-imply-mct]] need not be attached here.
This is what lets [[rem-where-the-archimedean-hypothesis-is-needed]] sort the
five properties into those that do and those that do not.

## Facts & Assumptions

**Given:** An ordered field $F$ with (MCT).

[L1] The property (MCT): every nondecreasing sequence in $F$ that is bounded above converges in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is nondecreasing when $x_j \le x_k$ for all $j \le k$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$ and $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$ ([[lem-of-naturals-positive]]).

[L5] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]); and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (MCT) and is not Archimedean; then there is $x \in F$ with $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L6, assume-contra]

1.2 Let $(y_k)$ be the sequence $y_k := k \cdot 1_F$ in $F$, so $y_0 = 0$ and $y_{k+1} = y_k + 1_F$; it is nondecreasing, since $0 = y_0 < y_n$ for $n \ge 1$ and $j \mapsto j \cdot 1_F$ is strictly increasing on the positive naturals. [L2, L3, L4]

2.1 $(y_k)$ is bounded above by $x$, so (MCT) makes it converge in $F$ to some $L$. [step 1.1, step 1.2, L1, L2]

3.1 Being convergent, $(y_k)$ is Cauchy in $F$, so, $1_F$ being positive, there is $N \in \mathbb{N}$ with $|y_k - y_l| < 1_F$ for all $k, l \ge N$. [step 2.1, L2, L5, L6]

4.1 But $y_{N+1} - y_N = 1_F > 0$, so $|y_{N+1} - y_N| = 1_F$, which is not $< 1_F$; this contradicts step 3.1. [step 1.2, step 3.1, L6]

5.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (MCT) is Archimedean. [step 4.1, discharge-contradiction] ∎

## Remarks

- **Why this item exists.** Without it, the natural reading of the equivalence
  theorem would attach an Archimedean hypothesis to (MCT) as well, and
  [[rem-where-the-archimedean-hypothesis-is-needed]] would answer its own
  question wrongly. With it the answer is clean: (LUB), (BW) and (MCT) each
  imply the Archimedean property, while (NIP) and (CC) do not
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **The witness is the same sequence as in [[lem-bw-implies-archimedean]]**, the
  canonical naturals, but the two arguments use different failures of it. There
  the sequence is bounded and has no convergent subsequence; here it is
  nondecreasing and bounded above and has no limit. Neither argument implies the
  other, because neither (BW) nor (MCT) is assumed in the other's proof.

- The gap of exactly $1_F$ between consecutive terms is what does the work, and
  it is available in every ordered field: $1_F > 0$ by
  [[cor-of-one-positive]], and no smallness of $1_F$ relative to $x$ is
  possible, since the Cauchy condition is tested at the threshold $1_F$ itself.
````

### `lem-mct-implies-lub`

````markdown
---
id: lem-mct-implies-lub
kind: lemma
title: "The monotone convergence property plus the Archimedean property imply the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound, thm-recursion, thm-induction-principle, thm-nat-linear-order, def-integer-power, lem-bernoulli-inequality, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-abs-value, lem-of-triangle-inequality, lem-of-sequence-basics, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with the
monotone convergence property (MCT) of [[def-completeness-properties]]. Then $F$
has the least-upper-bound property (LUB), that is, $F$ is a complete ordered
field ([[def-complete-ordered-field]]).

The Archimedean hypothesis is stated for symmetry with the other implications on
this page and is in fact redundant here: (MCT) implies it on its own
([[lem-mct-implies-archimedean]]).

The supremum is produced by bisection between an upper bound and a non-upper
bound, and it is identified as a limit of both bracketing sequences.

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (MCT), a nonempty $S \subseteq F$ bounded above by some $B \in F$, and an element $s_0 \in S$.

[L1] The properties (MCT) and (LUB), and least upper bounds: $u$ is an upper bound of $S$ when $s \le u$ for all $s \in S$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; (LUB) says every nonempty subset bounded above has one ([[def-completeness-properties]], [[def-complete-ordered-field]], [[def-upper-bound]]).

[L2] Sequences in an ordered field: nondecreasing, nonincreasing, bounded above, and convergence in $F$ ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $z \in F$ there is a natural $n \ge 1$ with $z < n \cdot 1_F$ ([[def-archimedean-field]]); the canonical naturals are positive for $n \ge 1$ and satisfy $n \cdot 1_F \le m \cdot 1_F$ for $n \le m$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]), induction principle ([[thm-induction-principle]]), and totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]).

[L5] Powers and Bernoulli: $a^0 = 1$, $a^{n+1} = a^n a$ ([[def-integer-power]]); $(1_F + x)^n \ge 1_F + n \cdot x$ for $x \ge -1_F$ ([[lem-bernoulli-inequality]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-ordered-field]]).

[L7] Absolute value: $|u| \ge 0$, $|u| = |-u|$, $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); and $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L8] Limits in an ordered field preserve non-strict inequalities (clause 2 of [[lem-of-sequence-basics]]).

## Proof

**Proof technique:** constructive.

1.1 Put $u_0 := B$ and $l_0 := s_0 - 1_F$; then $u_0$ is an upper bound of $S$, $l_0$ is not one because $s_0 \in S$ and $l_0 < s_0$, and $l_0 < s_0 \le u_0$. [L1, L6, construct]

1.2 Writing $m(l,u) := (l + u)\,(2 \cdot 1_F)^{-1}$, define $f : F \times F \to F \times F$ by $f(l,u) := (l, m(l,u))$ when $m(l,u)$ is an upper bound of $S$ and $f(l,u) := (m(l,u), u)$ otherwise; the recursion theorem applied to $F \times F$, the element $(l_0, u_0)$ and $f$ gives a unique $g : \mathbb{N} \to F \times F$ with $g(0) = (l_0,u_0)$ and $g(n+1) = f(g(n))$, and we write $g(n) = (l_n, u_n)$. [L4, L6, construct]

1.3 A constant sequence in $F$ converges to its value, since $|a - a| = 0 < \varepsilon$ for every $\varepsilon > 0$. [L2, L7]

2.1 By induction on $n$: $u_n$ is an upper bound of $S$; $l_n$ is not an upper bound of $S$; $l_n \le l_{n+1} \le u_{n+1} \le u_n$; and $u_n - l_n = (u_0 - l_0)\,((2 \cdot 1_F)^n)^{-1}$. The base case is step 1.1 together with $(2 \cdot 1_F)^0 = 1_F$; for the step, $m := m(l_n,u_n)$ satisfies $l_n \le m \le u_n$ and $m - l_n = u_n - m = (u_n - l_n)(2 \cdot 1_F)^{-1}$, and whichever of the two clauses of $f$ applies, the retained pair again brackets $S$ in the stated sense with half the previous length. [step 1.1, step 1.2, L1, L5, L6]

3.1 The lengths tend to $0$ in $F$: given $\varepsilon > 0$, the element $(u_0 - l_0)\varepsilon^{-1}$ is positive, so [L3] supplies $n \ge 1$ with $(u_0-l_0)\varepsilon^{-1} < n \cdot 1_F$, and for every $p \ge n$ Bernoulli at $x = 1_F$ gives $(2 \cdot 1_F)^p \ge 1_F + p \cdot 1_F > p \cdot 1_F \ge n \cdot 1_F > (u_0-l_0)\varepsilon^{-1} > 0$, whence $u_p - l_p = (u_0-l_0)((2 \cdot 1_F)^p)^{-1} < \varepsilon$. [step 2.1, L3, L5, L6]

3.2 The sequence $(-u_n)$ is nondecreasing and is bounded above by $-l_0$, since $l_0 \le l_n \le u_n$ for every $n$; so (MCT) gives $w \in F$ with $-u_n \to w$, and putting $c := -w$ one has $|u_n - c| = |{-}((-u_n) - w)| = |(-u_n) - w|$, so $u_n \to c$ in $F$. [step 2.1, L1, L2, L6, L7]

4.1 $l_n \to c$ in $F$: given $\varepsilon > 0$, step 3.1 supplies $N_1$ with $u_n - l_n < \varepsilon/2$ for $n \ge N_1$ and step 3.2 supplies $N_2$ with $|u_n - c| < \varepsilon/2$ for $n \ge N_2$, and for $n$ beyond both, $|l_n - c| \le |l_n - u_n| + |u_n - c| = (u_n - l_n) + |u_n - c| < \varepsilon$. [step 3.1, step 3.2, L2, L4, L6, L7]

4.2 $c$ is an upper bound of $S$: for $s \in S$ one has $s \le u_n$ for every $n$ by step 2.1, and the constant sequence with value $s$ converges to $s$ while $u_n \to c$, so $s \le c$ by [L8]. [step 1.3, step 2.1, step 3.2, L1, L8]

5.1 $c$ is the least upper bound: let $v$ be any upper bound of $S$; for each $n$ the element $l_n$ is not an upper bound, so some $s \in S$ has $l_n < s \le v$ and hence $l_n \le v$; since $l_n \to c$ and the constant sequence with value $v$ converges to $v$, [L8] gives $c \le v$. [step 1.3, step 2.1, step 4.1, L1, L6, L8]

6.1 So $c = \sup S$ exists in $F$; as $S$ was an arbitrary nonempty subset bounded above, $F$ has (LUB) and is a complete ordered field. [step 4.2, step 5.1, L1, discharge-construct] ∎

## Remarks

- **Both bracketing sequences are needed.** The upper endpoints give the
  upper-bound half of the conclusion and the lower endpoints give minimality;
  the shrinking lengths are what force the two to have the same limit, and that
  is the only place the Archimedean property is used.

- **Nonincreasing sequences are handled by reflection**, as announced in
  [[def-completeness-properties]]: (MCT) is stated only for nondecreasing
  sequences, and step 3.2 applies it to $(-u_n)$ rather than assuming a second
  form of the property.

- **No choice is used.** The bisection rule keeps the left half exactly when the
  midpoint is an upper bound of $S$, which is a definite condition, so $f$ is a
  function and [[thm-recursion]] applies.
````

### `lem-monotone-unbounded-diverges`

````markdown
---
id: lem-monotone-unbounded-diverges
kind: lemma
title: "A nondecreasing sequence that is not bounded above diverges to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-monotone-sequence, def-divergence-to-infinity, def-sequence, def-bounded-set, def-complete-ordered-field, def-ordered-field]
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
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14 and Def. 3.15)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a nondecreasing sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]) whose range $S = \{x_k : k \in \mathbb{N}\}$ is not
bounded above ([[def-bounded-set]]). Then $(x_k)$ diverges to $+\infty$
([[def-divergence-to-infinity]]): for every $M \in \mathbb{R}$ there is
$K \in \mathbb{N}$ with $x_k > M$ for all $k \ge K$.

Read together with the monotone convergence theorem this says that a nondecreasing
sequence has exactly two possible behaviours, with nothing in between: it
converges to the supremum of its range, or it runs away to $+\infty$.

## Facts & Assumptions

**Given:** A nondecreasing sequence $(x_k)$ of reals whose range $S = \{x_k : k \in \mathbb{N}\}$ is not bounded above.

[L1] Monotonicity: $x_j \le x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L2] Bounded above: $S$ is bounded above exactly when some $M \in \mathbb{R}$ satisfies $s \le M$ for every $s \in S$ ([[def-bounded-set]]).

[L3] Trichotomy: for reals $s$ and $M$, exactly one of $s < M$, $s = M$, $s > M$ holds, so the failure of $s \le M$ is $s > M$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] Divergence to $+\infty$: $x_k \to +\infty$ when for every $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L5] Every element of $S$ is a term of the sequence, and conversely ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Let $M \in \mathbb{R}$ be arbitrary. Since $S$ is not bounded above, $M$ is not an upper bound of $S$, so some $s \in S$ fails $s \le M$. [given, L2]

2.1 By trichotomy that $s$ satisfies $s > M$, and being an element of $S$ it is a term: fix $K \in \mathbb{N}$ with $s = x_K$, so $x_K > M$. [step 1.1, L3, L5, choose]

3.1 For every $k \ge K$ monotonicity gives $x_K \le x_k$, hence $x_k \ge x_K > M$ and so $x_k > M$. [step 2.1, L1]

4.1 For every real $M$ an index $K$ has been produced with $x_k > M$ for all $k \ge K$, which is exactly divergence to $+\infty$. [step 3.1, L4] ∎

## Remarks

- **Only "not bounded above" is used, not unboundedness of the sequence.** For a
  nondecreasing sequence the two coincide, since such a sequence is bounded below
  by $x_0$ ([[def-monotone-sequence]]), so a nondecreasing sequence is unbounded
  exactly when its range is not bounded above. The hypothesis is stated in the
  one-sided form because that is the form the proof consumes.

- **The dual statement holds with the same proof**: a nonincreasing sequence
  whose range is not bounded below diverges to $-\infty$. Reflecting through the
  origin turns one into the other.

- **$+\infty$ is not a limit.** [[def-divergence-to-infinity]] is deliberately
  not a case of [[def-real-limit]]: a sequence diverging to $+\infty$ is
  unbounded, hence not convergent ([[lem-convergent-implies-bounded]]), and the
  arrow in $x_k \to +\infty$ is an abbreviation for the displayed quantifier
  statement and never an equation.

- The companion statement is [[thm-monotone-convergence]]: between them, a
  nondecreasing sequence converges to the supremum of its range or diverges to
  $+\infty$, with no third possibility.
````

### `thm-monotone-convergence`

````markdown
---
id: thm-monotone-convergence
kind: theorem
title: "A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-sequence, def-sequence, def-real-limit, def-complete-ordered-field, def-bounded-set, lem-sup-epsilon, lem-sup-unique, lem-inf-epsilon, thm-infimum-property, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
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
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3 (Prop. 6.3.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2 (Thm 2.2.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals with range $S = \{x_k : k \in \mathbb{N}\}$, which is nonempty since $x_0 \in S$.

[L1] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded above has a unique supremum, which is an upper bound of it ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).

[L3] Epsilon characterisation of the supremum: if $u$ is an upper bound of a nonempty $S$, then $u = \sup S$ exactly when for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Epsilon characterisation of the infimum: if $\ell$ is a lower bound of a nonempty $T$, then $\ell = \inf T$ exactly when for every $\varepsilon > 0$ there is $t \in T$ with $t < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L5] Monotonicity: nondecreasing means $x_j \le x_k$ whenever $j \le k$, and nonincreasing means $x_j \ge x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

[L7] Absolute value: for $c > 0$, $|t| < c$ exactly when $-c < t < c$ ([[lem-of-abs-value]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(x_k)$ is nondecreasing and $S$ is bounded above. Since $S$ is nonempty, $u := \sup S$ exists, is unique, and is an upper bound of $S$. [given, L1, L8]

1.2 Assume $(y_k)$ is nonincreasing with range $T$ bounded below. Since $T$ is nonempty, $\ell := \inf T$ exists, is unique, and is a lower bound of $T$. [given, L2, L8]

2.1 Every term satisfies $x_k \le u$, because $x_k \in S$ and $u$ is an upper bound of $S$. [step 1.1, L1]

2.2 Every term satisfies $\ell \le y_k$, because $y_k \in T$ and $\ell$ is a lower bound of $T$. [step 1.2, L2]

2.3 Let $\varepsilon > 0$ be an arbitrary real. By [L3] there is $s \in S$ with $u - \varepsilon < s$, and every element of $S$ is a term, so $s = x_K$ for some $K \in \mathbb{N}$. [step 1.1, L3, choose]

2.4 Let $\varepsilon > 0$ be an arbitrary real. By [L4] there is $t \in T$ with $t < \ell + \varepsilon$, and $t = y_L$ for some $L \in \mathbb{N}$. [step 1.2, L4, choose]

3.1 For every $k \ge K$ we have $x_K \le x_k$ by monotonicity, hence $u - \varepsilon < x_K \le x_k$. [step 2.3, L5]

3.2 For every $k \ge L$ we have $y_k \le y_L$ by monotonicity, hence $y_k \le y_L < \ell + \varepsilon$. [step 2.4, L5]

4.1 For every $k \ge K$: subtracting $u$ from $u - \varepsilon < x_k \le u$ gives $-\varepsilon < x_k - u \le 0 < \varepsilon$, so $|x_k - u| < \varepsilon$. [step 2.1, step 3.1, L7, algebra]

4.2 For every $k \ge L$: subtracting $\ell$ from $\ell \le y_k < \ell + \varepsilon$ gives $-\varepsilon < 0 \le y_k - \ell < \varepsilon$, so $|y_k - \ell| < \varepsilon$. [step 2.2, step 3.2, L7, algebra]

5.1 The real $\varepsilon > 0$ was arbitrary and $K$ was produced from it, so $(x_k)$ converges to $u = \sup S$, which is claim 1. [step 4.1, L6]

5.2 The real $\varepsilon > 0$ was arbitrary and $L$ was produced from it, so $(y_k)$ converges to $\ell = \inf T$, which is claim 2. [step 4.2, L6]

6.1 Both claims are established, so a nondecreasing sequence bounded above converges to the supremum of its range and a nonincreasing sequence bounded below converges to the infimum of its range. [step 5.1, step 5.2] ∎

## Remarks

- **Only one half is proved twice.** Claim 2 could instead be deduced from claim
  1 by reflection, since $(-y_k)$ is nondecreasing and bounded above and
  $\inf T = -\sup(-T)$ ([[thm-infimum-property]]). The direct argument is written
  out because it is no longer, and because it puts [[lem-inf-epsilon]] to work in
  the place it was proved for, rather than routing an infimum statement through a
  supremum statement and a sign change.

- **The limit is the supremum of the range, not merely some upper bound.** That
  identification is what [[lem-sup-epsilon]] supplies and it is the useful part
  of the theorem: it is how a limit is *computed* from a monotone construction,
  as in the recursive sequences of the examples page, rather than merely shown to
  exist.

- **Boundedness on the other side is automatic and is not a hypothesis.** A
  nondecreasing sequence is bounded below by $x_0$ ([[def-monotone-sequence]]),
  so "nondecreasing and bounded above" already means "nondecreasing and bounded";
  this is what makes [[cor-monotone-converges-iff-bounded]] an equivalence rather
  than a one-sided statement.

- **Without the hypothesis of boundedness the conclusion fails completely, and
  fails in a describable way**: a nondecreasing sequence that is not bounded
  above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]]), so a
  nondecreasing sequence either converges to the supremum of its range or runs
  away, with no third possibility.
````

