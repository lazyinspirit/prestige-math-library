# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `cex-zero-times-infinity-indeterminate`

Normalized current SHA-256: `c8540f4b61482b0e72b08333b770ac6f4f747c66680519ecc5f909e1b3c40d36`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-zero-times-infinity-indeterminate
kind: counterexample
title: "Null times divergent has no rule: $x_k = 1/k$ with $y_k = ck$ gives product limit $c$, and with $y_k = k^2$ gives divergence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-extended-reals, def-divergence-to-infinity, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-limit-unique, lem-convergent-implies-bounded, def-real-limit, def-sequence, def-integer-power, lem-of-sign-rules, lem-of-add-order, cor-of-one-positive, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Indeterminate form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indeterminate_form"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement refuted

That the product $0 \cdot (+\infty)$, left undefined by [[def-extended-reals]],
could be given a value compatible with limits: that there is
$v \in \overline{\mathbb{R}}$ such that for all sequences of reals with
$x_k \to 0$ ([[def-real-limit]]) and $y_k \to +\infty$
([[def-divergence-to-infinity]]) the products $x_k y_k$ have the single limiting
behaviour named by $v$.

Equivalently: that knowing a factor is null and the other diverges to $+\infty$
determines anything at all about the product. It does not, and the two undefined
entries in the arithmetic of $\overline{\mathbb{R}}$ are undefined for exactly
this reason.

## Facts & Assumptions

**Given:** The canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$; the sequence $x_k := 1/\iota(k+1)$; for a real $c > 0$ the sequence $y^{(c)}_k := c\,\iota(k+1)$; and the sequence $z_k := \iota(k+1)\,\iota(k+1)$.

[L1] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, and $\iota(n) \ge 1$ for $n \ge 1$ ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L2] Archimedean facts: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$, and for every real $M$ there is a natural $p \ge 1$ with $M < \iota(p)$; and $0 < u < v$ gives $0 < 1/v < 1/u$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L3] Convergence to a real and divergence to $+\infty$; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$; a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]], [[def-divergence-to-infinity]]).

[L4] A sequence diverging to $+\infty$ is unbounded and therefore does not converge to any real ([[def-divergence-to-infinity]], [[lem-convergent-implies-bounded]]); a limit, when it exists, is unique ([[lem-limit-unique]]).

[L5] Order and field arithmetic: multiplying an inequality by a positive element preserves it; $0 < 1 < 2$ and $1 \ne 2$; $u \cdot (1/u) = 1$ for $u \ne 0$; and the algebra of limits ([[lem-of-sign-rules]], [[lem-of-add-order]], [[cor-of-one-positive]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] The product $0 \cdot (\pm\infty)$ is left undefined in $\overline{\mathbb{R}}$ ([[def-extended-reals]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence $x_k = 1/\iota(k+1)$ is well defined, positive, and converges to $0$: given a real $\varepsilon > 0$, take a natural $p \ge 1$ with $1/p < \varepsilon$; for $k \ge p$ we have $\iota(k+1) > \iota(p) > 0$, hence $0 < x_k < 1/p < \varepsilon$. [given, L1, L2, L3]

1.2 For every real $c > 0$ the sequence $y^{(c)}_k = c\,\iota(k+1)$ diverges to $+\infty$: given a real $M$, the quotient $M/c$ is real, so there is a natural $p \ge 1$ with $M/c < \iota(p)$, and for $k \ge p$ we get $\iota(k+1) > \iota(p) > M/c$, hence $y^{(c)}_k = c\,\iota(k+1) > M$ after multiplying by $c > 0$. [given, L1, L2, L3, L5]

1.3 The sequence $z_k = \iota(k+1)\iota(k+1)$ diverges to $+\infty$: given a real $M$, take a natural $p \ge 1$ with $M < \iota(p)$; for $k \ge p$ we have $\iota(k+1) \ge 1$ and $\iota(k+1) > \iota(p) > M$, so $z_k \ge \iota(k+1) > M$. [given, L1, L2, L3, L5]

2.1 For every real $c > 0$ the product sequence is constant: $x_k y^{(c)}_k = \big(1/\iota(k+1)\big)\,c\,\iota(k+1) = c$ for every $k$, so it converges to $c$. [step 1.1, step 1.2, L3, L5]

2.2 The product with $(z_k)$ is $x_k z_k = \big(1/\iota(k+1)\big)\iota(k+1)\iota(k+1) = \iota(k+1)$, which diverges to $+\infty$ by the argument of step 1.3 with the single factor, and therefore converges to no real number. [step 1.1, step 1.3, L1, L2, L3, L4, L5]

3.1 Now take the three pairs $(x, y^{(1)})$, $(x, y^{(2)})$ and $(x, z)$. In each, the first sequence is null and the second diverges to $+\infty$, so each pair satisfies the hypotheses of the refuted claim; but the three products converge to $1$, converge to $2$, and converge to $+\infty$ in the extended sense. Since $1 \ne 2$ and limits are unique, no single $v \in \overline{\mathbb{R}}$ describes all three, and the claim is false. [step 2.1, step 2.2, L4, L5, L6] ∎

## Remarks

- **This is why the entry is blank in the table.** [[def-extended-reals]] leaves $0 \cdot (\pm\infty)$ undefined not out of caution but because any value assigned to it would make some instance of a product rule false, and the three pairs above already realise three different behaviours.

- **The same phenomenon rules out $(+\infty) + (-\infty)$.** Taking $a_k = \iota(k)$ and $b_k = -\iota(k)$ gives a sum that is constantly $0$, while $a_k = \iota(k)$ and $b_k = -\iota(k) - \iota(k)$ gives a sum diverging to $-\infty$; both pairs have $a_k \to +\infty$ and $b_k \to -\infty$.

- **Measure theory's convention is not a counterexample to this.** Texts that set $0 \cdot \infty := 0$ are fixing the value of a *formula* in a context where the factor $0$ is the measure of a null set, not asserting a limit rule; the distinction is spelled out in [[rem-extended-real-conventions]].

- **Index range.** The classical statement writes $x_k = 1/k$ and $y_k = ck$, which requires $k \ge 1$. Written on $\mathbb{N}$, which contains $0$ ([[def-sequence]]), the same sequences are $1/(k+1)$ and $c(k+1)$, as above.
````

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
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "For $m, n \\in \\mathbb{N}$, define the **order** by\n\n$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$\n\nand the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using\naddition ([[def-nat-addition]]).",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-nat-linear-order",
      "source_section": "Statement",
      "quote": "The relation $\\le$ on $\\mathbb{N}$, where $m \\le n \\iff \\exists k\\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]].\n\n- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k > M$ for all\n  $k \\ge K$.\n- $(x_k)$ **diverges to $-\\infty$**, written $x_k \\to -\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k < M$ for all\n  $k \\ge K$.\n\nEquivalently, in the language of [[def-sequence]]: $x_k \\to +\\infty$ when the\nproperty $x_k > M$ holds eventually, for every real $M$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]].\n\n- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k > M$ for all\n  $k \\ge K$.\n- $(x_k)$ **diverges to $-\\infty$**, written $x_k \\to -\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k < M$ for all\n  $k \\ge K$.\n\nEquivalently, in the language of [[def-sequence]]: $x_k \\to +\\infty$ when the\nproperty $x_k > M$ holds eventually, for every real $M$.",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-convergent-implies-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$\n([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is\n$M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$.",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-limit-unique",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \\in\n\\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$\n([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,\nand when a limit exists it may be denoted $\\lim_{k} x_k$.",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to\n$x$ and $y$ respectively ([[def-real-limit]]), and let $c \\in \\mathbb{R}$. Then\n\n$$x_k + y_k \\to x + y, \\qquad c\\,x_k \\to c\\,x, \\qquad x_k - y_k \\to x - y, \\qquad x_k y_k \\to x y,$$\n\nand if in addition $y \\ne 0$ and $y_k \\ne 0$ for every $k \\in \\mathbb{N}$, then\n\n$$\\frac{1}{y_k} \\to \\frac{1}{y} \\qquad \\text{and} \\qquad \\frac{x_k}{y_k} \\to \\frac{x}{y}.$$\n\nThe quotient case rests on an eventual lower bound for $|y_k|$, proved below\nrather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The sequence $x_k = 1/\\iota(k+1)$ is well defined, positive, and converges to $0$: given a real $\\varepsilon > 0$, take a natural $p \\ge 1$ with $1/p < \\varepsilon$; for $k \\ge p$ we have $\\iota(k+1) > \\iota(p) > 0$, hence $0 < x_k < 1/p < \\varepsilon$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For every real $c > 0$ the sequence $y^{(c)}_k = c\\,\\iota(k+1)$ diverges to $+\\infty$: given a real $M$, the quotient $M/c$ is real, so there is a natural $p \\ge 1$ with $M/c < \\iota(p)$, and for $k \\ge p$ we get $\\iota(k+1) > \\iota(p) > M/c$, hence $y^{(c)}_k = c\\,\\iota(k+1) > M$ after multiplying by $c > 0$.",
      "step": "1.2",
      "inputs": [
        "given",
        "L1",
        "L2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "The sequence $z_k = \\iota(k+1)\\iota(k+1)$ diverges to $+\\infty$: given a real $M$, take a natural $p \\ge 1$ with $M < \\iota(p)$; for $k \\ge p$ we have $\\iota(k+1) \\ge 1$ and $\\iota(k+1) > \\iota(p) > M$, so $z_k \\ge \\iota(k+1) > M$.",
      "step": "1.3",
      "inputs": [
        "given",
        "L1",
        "L2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For every real $c > 0$ the product sequence is constant: $x_k y^{(c)}_k = \\big(1/\\iota(k+1)\\big)\\,c\\,\\iota(k+1) = c$ for every $k$, so it converges to $c$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "The product with $(z_k)$ is $x_k z_k = \\big(1/\\iota(k+1)\\big)\\iota(k+1)\\iota(k+1) = \\iota(k+1)$, which diverges to $+\\infty$ by the argument of step 1.3 with the single factor, and therefore converges to no real number.",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "step 1.3",
        "L1",
        "L2",
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Now take the three pairs $(x, y^{(1)})$, $(x, y^{(2)})$ and $(x, z)$. In each, the first sequence is null and the second diverges to $+\\infty$, so each pair satisfies the hypotheses of the refuted claim; but the three products converge to $1$, converge to $2$, and converge to $+\\infty$ in the extended sense. Since $1 \\ne 2$ and limits are unique, no single $v \\in \\overline{\\mathbb{R}}$ describes all three, and the claim is false.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 2.2",
        "L4",
        "L5",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The cex-zero-times-infinity-indeterminate statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 2.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The cex-zero-times-infinity-indeterminate statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The cex-zero-times-infinity-indeterminate statement is not a biconditional requiring a reverse implication."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": null,
    "notes": "Reserved for the independent Alpha proof-refuter when risk routing is run after A3."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-nat-order",
    "declared_target": "def-nat-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-zero-times-infinity-indeterminate",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (20)

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

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
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
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
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

### `def-extended-reals`

````markdown
---
id: def-extended-reals
kind: definition
title: "The extended real line $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, its order, and the arithmetic that is left undefined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-divergence-to-infinity, def-partial-order, lem-of-add-order]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: [def-extended-real-line]
landmark: true
short: "$\\overline{\\mathbb{R}}$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23, the extended real number system)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.2 (the extended real number system)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. K. Hunter, Measure Theory notes"
      url: "https://www.math.ucdavis.edu/~hunter/m206/ch0_measure.pdf"
pipeline_run: null
---

## Definition

Fix two objects $-\infty$ and $+\infty$, distinct from one another and neither of
them a real number ([[def-real-numbers]]), and set

$$\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}.$$

This is a **new object**, introduced here explicitly with its own order and its
own partial arithmetic. It is not an enlargement of the field $\mathbb{R}$, and
no operation of $\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by
anything below.

**The order.** For $a, b \in \overline{\mathbb{R}}$ declare

$$a \le b \quad :\Longleftrightarrow \quad a = -\infty \ \text{ or } \ b = +\infty \ \text{ or } \ \big(a, b \in \mathbb{R} \text{ and } a \le b \text{ in } \mathbb{R}\big),$$

with $\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for
"$a \le b$ and $a \ne b$" as usual ([[def-partial-order]]).

**$(\overline{\mathbb{R}}, \le)$ is a totally ordered set, and the inclusion of
$\mathbb{R}$ preserves and reflects the order.** All four checks are immediate
from the displayed clauses.

- *Reflexive.* For $a = \pm\infty$ one of the first two clauses applies; for
  $a \in \mathbb{R}$ the third does, since $a \le a$ in $\mathbb{R}$.
- *Antisymmetric.* Suppose $a \le b$ and $b \le a$. If $a = -\infty$ then
  $b \le a$ forces $b = -\infty$, since the clause $a = +\infty$ fails and $b, a$
  are not both real. Symmetrically $b = -\infty$ forces $a = -\infty$, and
  $a = +\infty$ or $b = +\infty$ forces the other to be $+\infty$. In the one
  remaining situation $a$ and $b$ are both real and antisymmetry is that of
  $\mathbb{R}$.
- *Transitive.* Let $a \le b \le c$. If $a = -\infty$ or $c = +\infty$ the
  conclusion is one of the first two clauses. Otherwise $a \ne -\infty$ forces,
  in $a \le b$, either $b = +\infty$ or $a, b \in \mathbb{R}$; and $c \ne +\infty$
  forces, in $b \le c$, either $b = -\infty$ or $b, c \in \mathbb{R}$. The value
  $b = +\infty$ is incompatible with the second alternative pair, so $b$ is real,
  hence so are $a$ and $c$, and transitivity is that of $\mathbb{R}$.
- *Total.* If $a = -\infty$ or $b = +\infty$ then $a \le b$; if $b = -\infty$ or
  $a = +\infty$ then $b \le a$; otherwise both are real and the order of
  $\mathbb{R}$ is total.
- *Preserved and reflected.* For $a, b \in \mathbb{R}$ the first two clauses fail,
  so $a \le b$ in $\overline{\mathbb{R}}$ says exactly $a \le b$ in $\mathbb{R}$.

In particular $-\infty$ is the least and $+\infty$ the greatest element of
$\overline{\mathbb{R}}$, and $-\infty < x < +\infty$ for every $x \in \mathbb{R}$.

**Reflection.** Extend negation by

$$-(+\infty) := -\infty, \qquad -(-\infty) := +\infty,$$

keeping the field negative on $\mathbb{R}$. The resulting map
$\nu : \overline{\mathbb{R}} \to \overline{\mathbb{R}}$, $\nu(a) = -a$, satisfies
$\nu(\nu(a)) = a$ and

$$a \le b \iff -b \le -a \qquad (a, b \in \overline{\mathbb{R}}).$$

For $a$ and $b$ real this is the elementwise order reversal in $\mathbb{R}$:
translation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$
turns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,
while $a = b$ holds exactly when $-a = -b$. In every other case both sides are
decided by the first two clauses of the order: $a = -\infty$ makes both sides
true, as does $b = +\infty$, and if $a \ne -\infty$, $b \ne +\infty$ and $a, b$
are not both real then one of $a = +\infty$, $b = -\infty$ holds and both sides
are false.

**Partial addition.** For $a, b \in \overline{\mathbb{R}}$ the sum $a + b$ is
defined by

- $a + b$ = the field sum, when $a, b \in \mathbb{R}$;
- $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$;
- $a + b := -\infty$ when $a = -\infty$ and $b \ne +\infty$, or $b = -\infty$ and $a \ne +\infty$;

and **the two sums $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ are left
undefined**. Addition is commutative where defined, and

$$-(a + b) = (-a) + (-b),$$

each side being defined exactly when the other is: the excluded pairs
$\{+\infty, -\infty\}$ are exchanged by $\nu$, and the three clauses above are
exchanged accordingly.

**Partial multiplication.** For $a, b \in \overline{\mathbb{R}}$ the product $ab$
is defined by

- $ab$ = the field product, when $a, b \in \mathbb{R}$;
- $ab := +\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and both are $> 0$ or both are $< 0$;
- $ab := -\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and one is $> 0$ and the other $< 0$;

and **every product with one factor $0$ and the other $\pm\infty$ is left
undefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,
under which $+\infty > 0 > -\infty$.

**Nothing else is defined.** There is no subtraction, no division, no
exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this library;
where such an expression is wanted it is written out in the two defined
operations, and where a case falls in the undefined list the statement carries an
explicit hypothesis saying so.

## Remarks

- **$\overline{\mathbb{R}}$ is not a field, and not an ordered field.** It has no
  additive inverse for $+\infty$: $(+\infty) + b$ is $+\infty$ whenever it is
  defined and is never $0$. So none of the field axioms
  ([[def-complete-ordered-field]]) is available here, and no algebraic
  manipulation valid in $\mathbb{R}$ may be transported to
  $\overline{\mathbb{R}}$ without a separate justification.

- **Why the excluded cases are excluded.** The three defined clauses of each
  operation are exactly the cases in which the value is forced by the limiting
  behaviour of the sequences involved, and the excluded cases are exactly the
  ones in which it is not. For the product this is proved on the companion page:
  [[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and two
  sequences diverging to $+\infty$ whose products behave differently, so no value
  assigned to $0 \cdot (+\infty)$ could be compatible with products of limits.
  The same phenomenon rules out a value for $(+\infty) + (-\infty)$: with
  $a_k = k$ and $b_k = -k$ the sum is constantly $0$, while with $b_k = -2k$ it
  diverges to $-\infty$. Leaving them undefined is not squeamishness, it is the
  only option that keeps every later statement about limits true without a
  side condition hidden inside the arithmetic.

- **This is the separate introduction that [[rem-sup-conventions]] points to.**
  That remark refuses the conventions $\sup S = +\infty$ and
  $\inf \emptyset = +\infty$ inside $\mathbb{R}$, and records that the extended
  real line is introduced explicitly here, with its own order and its own partial
  arithmetic kept separate from $\mathbb{R}$ rather than quietly extending it.
  This is that introduction. The suprema and infima of [[def-complete-ordered-field]],
  [[def-infimum]] and the whole suprema page remain real numbers with their
  nonempty and bounded hypotheses intact; what is new is a *separate* supremum
  operation, taken in $\overline{\mathbb{R}}$ and named as such, supplied by
  [[lem-extended-reals-complete]].

- **The symbols were already in circulation, and this definition does not change
  what they meant.** [[def-divergence-to-infinity]] defines the single phrase
  "$x_k \to +\infty$" as an abbreviation for a condition on $(x_k)$, and says in
  as many words that it does not define an object named $+\infty$. That reading
  is still correct: nothing in [[def-divergence-to-infinity]] is restated or
  reinterpreted here, and [[def-extended-limits]] is where the two are related, by
  a definition that quotes the old one rather than replacing it. Likewise the
  interval notation $(a, \infty)$ of [[def-interval]] is notation for a condition
  on one side, not an endpoint, and stays that way.

- **Why the order is defined by three clauses rather than by a picture.** The
  clauses are what the verifications above actually use, and they make the two
  facts that later proofs lean on immediate: every element is $\le +\infty$ and
  every element is $\ge -\infty$, with no case analysis at the point of use.
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

### `def-nat-order`

````markdown
---
id: def-nat-order
kind: definition
title: "Order on the natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
aliases: []
landmark: false
short: "$m\\le n\\iff\\exists k\\,(m+k=n)$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Ordering of the naturals)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## Remarks

Read $m \le n$ as "$n$ is $m$ plus something": the gap $k$ with $m + k = n$ is
unique when it exists (by commutativity and cancellation,
[[lem-nat-add-commutative]], [[lem-nat-add-cancellative]]) and is
written $n - m$ once subtraction is available. That $\le$ is genuinely a linear
order, reflexive, antisymmetric, transitive, and total, is proved in
[[thm-nat-linear-order]] and [[lem-nat-trichotomy]]; compatibility with the
arithmetic ([[lem-nat-order-add-compatible]],
[[lem-nat-order-mult-compatible]]) and discreteness
($m < n \iff \sigma(m) \le n$, [[lem-nat-discrete]]) follow.

In the von Neumann model this order coincides with membership and inclusion:
$m \le n \iff m \subseteq n$ and $m < n \iff m \in n$, matching the picture of
each natural number as the set $\{0, 1, \dots, n-1\}$ of its predecessors
([[def-natural-numbers]]). That coincidence is not proved here; it is derived
from the additive definition above on a later page. The least-element property of every nonempty subset,
the **well-ordering principle** ([[thm-well-ordering-principle]]), is the deepest
consequence.
````

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
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

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
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

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `rem-extended-real-conventions`

````markdown
---
id: rem-extended-real-conventions
kind: remark
title: "Which extended-real operations this library leaves undefined, and where each $\\limsup$ statement needs the hypothesis"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-extended-reals, def-limsup-liminf, thm-limsup-subadditive, thm-limsup-submultiplicative, rem-sup-conventions, lem-extended-reals-complete]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: []
landmark: false
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
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Indeterminate form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indeterminate_form"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

[[rem-sup-conventions]] refused, inside $\mathbb{R}$, the conventions
$\sup S = +\infty$ and $\inf \emptyset = +\infty$, and promised that a later page
needing $\overline{\mathbb{R}}$ would introduce it explicitly as a new object
with its own order and its own partial arithmetic. [[def-extended-reals]] is that
introduction, and this page is the one that needed it. Nothing about the real
supremum has changed: $\sup S$ and $\inf S$ for $S \subseteq \mathbb{R}$ are still
real numbers, still defined only under the nonempty and bounded hypotheses, and
the extended bounds of [[lem-extended-reals-complete]] are a *different*
operation in a *different* ordered set, agreeing with the real one exactly where
the real one is defined.

**What is defined.** On $\overline{\mathbb{R}}$ this library defines exactly
three things: the total order, the reflection $a \mapsto -a$, and the two partial
operations $a + b$ and $ab$. The order and the reflection are total. The two
operations are not, and the gaps are these.

| expression | status |
|---|---|
| $a + b$ with $a, b \in \mathbb{R}$ | the field sum |
| $(+\infty) + b$ with $b \ne -\infty$ | $+\infty$ |
| $(-\infty) + b$ with $b \ne +\infty$ | $-\infty$ |
| $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ | **undefined** |
| $ab$ with $a, b \in \mathbb{R}$ | the field product |
| $(\pm\infty) \cdot b$ with $b \ne 0$ | $\pm\infty$, by the sign rule |
| $0 \cdot (\pm\infty)$ and $(\pm\infty) \cdot 0$ | **undefined** |

**What is not defined at all.** There is no subtraction on
$\overline{\mathbb{R}}$, no division, no absolute value and no exponentiation.
Where a proof on this page wants $a - b$ it writes $a + (-b)$, which inherits the
gap at $\{+\infty, -\infty\}$; where it wants a quotient it does not write one.
In particular the expressions $(+\infty) - (+\infty)$, $(+\infty)/(+\infty)$ and
$0/0$ do not occur here, not because they are hard but because neither operation
exists.

**Why the two gaps are gaps.** They are the two places where the value is not
determined by the sequences involved, so no assignment could be compatible with
limits. For the product this is proved:
[[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and sequences
diverging to $+\infty$ whose products behave differently, so $0 \cdot (+\infty)$
has no value that would make a product rule true. For the sum the same is visible
with $a_k = k$ and $b_k = -k$, whose sum is constantly $0$, against $a_k = k$ and
$b_k = -2k$, whose sum diverges to $-\infty$; both pairs have
$\limsup a_k = +\infty$ and $\limsup b_k = -\infty$.

**Where each statement on this page carries the hypothesis.** Reading the page in
order, the pattern is that everything purely order-theoretic is unconditional and
everything arithmetic is not.

- [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[lem-limsup-exists]],
  [[lem-limsup-reflection]], [[lem-liminf-le-limsup]],
  [[lem-limsup-monotone-comparison]], [[thm-limsup-is-greatest-subsequential-limit]]
  and [[cor-liminf-is-least-subsequential-limit]] carry **no** hypothesis on the
  sequence. They use only the order and the reflection, both of which are total,
  so unbounded sequences and the values $\pm\infty$ need no separate treatment.
- [[lem-limsup-epsilon-characterisation]] requires $L \in \mathbb{R}$. That is not
  an arithmetic gap but a syntactic one: its conditions mention $L + \varepsilon$
  and $L - \varepsilon$, and subtraction is not available in
  $\overline{\mathbb{R}}$. The infinite cases are covered instead by
  [[thm-convergence-iff-limsup-equals-liminf]], whose statement uses no
  arithmetic at all.
- [[thm-limsup-subadditive]] requires that
  $\limsup_k x_k + \limsup_k y_k$ be defined, which is exactly the exclusion of
  the pair $\{+\infty, -\infty\}$ from the table above. Nothing else is assumed;
  in particular the sequences need not be bounded, and the two infinite cases are
  proved rather than excluded.
- [[thm-limsup-submultiplicative]] requires the sequences to be bounded and
  nonnegative. Boundedness is what makes all three limit superiors real, so that
  the product on the right is a product in $\mathbb{R}$; without it the right-hand
  side could be the undefined $0 \cdot (+\infty)$. Nonnegativity is a separate
  requirement, needed because the estimate multiplies two upper bounds.

**What this costs a reader coming from a measure-theory text.** Such a text
typically declares $0 \cdot \infty := 0$, which is genuinely convenient there,
because in an integral the factor $0$ is a measure-zero set and the convention
makes countable additivity work without cases. That convention is *not* in force
here, and it is not compatible with limits: it is a decision about a particular
formula, not a fact about $\overline{\mathbb{R}}$. A statement quoted from such a
source therefore needs its degenerate cases restored before it can be used with
the results on this page.

**One thing that is not a convention.** The equations
$\limsup_k x_k = +\infty$ and $\liminf_k x_k = -\infty$ occurring throughout this
page are ordinary equations between elements of $\overline{\mathbb{R}}$, not
abbreviations. That is precisely the difference from
[[def-divergence-to-infinity]], where "$x_k \to +\infty$" is a single
abbreviation for a condition and no object named $+\infty$ is involved. Both
readings coexist without conflict, and
[[thm-convergence-iff-limsup-equals-liminf]] is the statement that relates them.
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
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
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
````

### `thm-nat-linear-order`

````markdown
---
id: thm-nat-linear-order
kind: theorem
title: "$\\le$ is a linear order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-omega-is-peano-system]
aliases: []
landmark: true
short: "reflexive, antisymmetric, transitive, total"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]) and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ and addition is associative ([[lem-nat-add-identity]], [[lem-nat-add-associative]]).

[L2] Cancellation: $m + k = n + k \Rightarrow m = n$ ([[lem-nat-add-cancellative]]).

[L3] Every nonzero natural is a successor: if $j \ne 0$ then $j = \sigma(i)$ for some $i$ ([[lem-nat-nonzero-is-successor]]).

[L4] Trichotomy: exactly one of $m < n$, $m = n$, $m > n$ holds ([[lem-nat-trichotomy]]).

[L5] Addition is commutative ([[lem-nat-add-commutative]]).

[L6] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Reflexive: $m + 0 = m$, so $m \le m$. [given]

1.2 Transitive: if $m \le n$ and $n \le p$, say $m + k = n$ and $n + j = p$, then $m + (k + j) = (m + k) + j = n + j = p$, so $m \le p$. [given, L1]

1.3 A sum is zero only if both summands are: if $k + j = 0$ with $j \ne 0$ then $j = \sigma(i)$ and $k + j = k + \sigma(i) = \sigma(k + i) \ne 0$ [L6], a contradiction, so $k = j = 0$. [L1, L3, L6]

1.4 Total: by trichotomy one of $m < n$, $m = n$, $m > n$ holds, and each of these gives $m \le n$ or $n \le m$. [L4]

2.1 Antisymmetric: if $m \le n$ and $n \le m$, say $m + k = n$ and $n + j = m$, then $m + (k + j) = (m + k) + j = n + j = m = m + 0$; commuting both sides [L5] gives $(k + j) + m = 0 + m$, and cancelling the common right summand $m$ [L2] gives $k + j = 0$, hence $k = j = 0$ by step 1.3 and $m = n$. [given, L1, L2, L5, step 1.3]

3.1 Reflexivity, antisymmetry, transitivity, and totality all hold, so $\le$ is a linear order on $\mathbb{N}$. [step 1.1, step 1.2, step 2.1, step 1.4] ∎
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

