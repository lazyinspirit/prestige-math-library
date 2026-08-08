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

## Target item — `ex-ratio-fails-root-succeeds`

Normalized current SHA-256: `b83c4466cd58e2f4307d6ba34bf7075174c0db84d310cf4da5726b8bab54ab84`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-ratio-fails-root-succeeds
kind: example
title: "$a_k = 2^{-k + (-1)^k}$ has $\\liminf a_{k+1}/a_k = 1/8$, $\\limsup a_{k+1}/a_k = 2$ and $\\lim a_k^{1/k} = 1/2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-ratio-and-root-limits-always-agree, thm-ratio-root-inequality, def-limsup-liminf, def-integer-power, def-rational-power, lem-power-laws, lem-alternating-sequence, lem-geometric-sequence-null, thm-squeeze, def-real-limit, def-sequence, def-extended-reals, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
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
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.35)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], let
$t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when $s_k = -1$, and put

$$a_k \;:=\; 2^{-k} t_k \qquad (k \in \mathbb{N}),$$

the sequence usually written $a_k = 2^{-k + (-1)^k}$. Writing
$q_k := a_{k+1}/a_k$ for the ratios and $r_k := a_{k+1}^{1/(k+1)}$ for the roots,
which is $a_n^{1/n}$ reindexed by $n = k+1$ as [[thm-ratio-root-inequality]]
requires,

$$\liminf_{k} q_k = \frac{1}{8}, \qquad \limsup_{k} q_k = 2, \qquad \lim_{k} r_k = \frac{1}{2},$$

so also $\liminf_k r_k = \limsup_k r_k = 1/2$. In addition $a_k \to 0$.

**The point.** The ratios oscillate across $1$, taking the values $1/8$ and $2$
alternately, so no statement of the form "the ratios are eventually below some
$\lambda < 1$" is available; the roots, by contrast, converge to $1/2 < 1$. Any
criterion reading the ratios alone is silent here, and one reading the roots is
not. That is the concrete form of the dominance recorded in
[[thm-ratio-root-inequality]].

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$, the auxiliary $t_k \in \{2, 1/2\}$, the sequence $a_k = 2^{-k} t_k$, the ratios $q_k = a_{k+1}/a_k$ and the roots $r_k = a_{k+1}^{1/(k+1)}$, all as in [[fs-ratio-and-root-limits-always-agree]].

[L1] For this sequence: every $a_k$ is positive, $q_k \in \{1/8, 2\}$ with both values occurring at arbitrarily large indices, $\liminf_k q_k = 1/8$, $\limsup_k q_k = 2$, and $r_k \to 1/2$, so $\liminf_k r_k = \limsup_k r_k = 1/2$ ([[fs-ratio-and-root-limits-always-agree]]).

[L2] The chain $\liminf_k q_k \le \liminf_k r_k \le \limsup_k r_k \le \limsup_k q_k$ ([[thm-ratio-root-inequality]]).

[L3] Limit superior and limit inferior in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L4] Powers: $2^{-k} = (1/2)^{k}$ and $t_k \le 2$, so $a_k \le 2 \cdot (1/2)^{k}$; and $a_k > 0$ ([[def-integer-power]], [[lem-power-laws]], [[def-rational-power]], [[lem-of-sign-rules]]).

[L5] Geometric sequences: $|\rho| < 1$ implies $\rho^{k} \to 0$ ([[lem-geometric-sequence-null]]); the squeeze theorem and the scalar rule ([[thm-squeeze]], [[def-real-limit]], [[def-sequence]]).

[L6] Order arithmetic: $0 < 1$, so $1/8 < 1/2 < 1 < 2$ and $1/2 \ne 2$; $|t| = 1$ forces $t = \pm 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The three values in the display are exactly what [L1] records for this sequence, together with $\liminf_k r_k = \limsup_k r_k = 1/2$, which follows from the convergence of $(r_k)$ to $1/2$. [given, L1, L3]

1.2 The sequence is null: $0 < a_k = 2^{-k} t_k \le 2 \cdot (1/2)^{k}$ for every $k$, and $(1/2)^{k} \to 0$ because $|1/2| < 1$, so $2 \cdot (1/2)^{k} \to 0$ and the squeeze gives $a_k \to 0$. [given, L4, L5, L6]

2.1 The ratio quantities differ from one another and from the root quantities: $1/8 < 1/2 < 2$, so $\liminf_k q_k < \liminf_k r_k = \limsup_k r_k < \limsup_k q_k$. In particular the chain [L2] holds here with both outer inequalities strict and the middle one an equality, and the ratios do not determine the roots. [step 1.1, L1, L2, L6]

3.1 So $(a_k)$ is a positive null sequence whose root sequence converges to $1/2 < 1$ while its ratio sequence has $\limsup_k q_k = 2 > 1$ and $\liminf_k q_k = 1/8 < 1$, that is, the ratios oscillate across $1$ while the roots settle strictly below it. [step 1.2, step 2.1, L1, L6] ∎

## Remarks

- **Where the numbers come from.** The exponent $-k + (-1)^k$ changes by
  $-1 + (-1)^{k+1} - (-1)^k = -1 \mp 2$ from one index to the next, giving ratios
  $2^{-3} = 1/8$ and $2^{1} = 2$; the root divides the exponent by the index, so
  the bounded oscillation contributes $2^{\pm 1/(k+1)} \to 1$ and only the linear
  part $-k$ survives, giving $2^{-1} = 1/2$. The full computation is in
  [[fs-ratio-and-root-limits-always-agree]].

- **The same sequence reappears for series.** With these $a_k$ the series
  $\sum_k a_k$ converges, and the root criterion sees it while the ratio criterion
  does not. That use belongs to the series page and is not made here.

- **Strictness of the middle inequality needs a different witness.** Here
  $\liminf_k r_k = \limsup_k r_k$, since the roots converge. A sequence making all
  three inequalities of the chain strict is [[ex-strict-ratio-root-chain]].
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "fs-ratio-and-root-limits-always-agree",
      "source_section": "Statement",
      "quote": "**False claim:** for every sequence $(a_k)$ of reals with $a_k > 0$ for all $k$,\n\n$$\\limsup_{k} a_{k+1}^{1/(k+1)} \\;=\\; \\limsup_{k} \\frac{a_{k+1}}{a_k},$$\n\nthat is, the limit superior of the root sequence equals the limit superior of the\nratio sequence. (The root family is written with the shift of\n[[thm-ratio-root-inequality]], since $a_k^{1/k}$ is undefined at $k = 0$;\nclassically the claim reads $\\limsup_n a_n^{1/n} = \\limsup_n a_{n+1}/a_n$.)\n\nWhat is true is the chain\n$$\\liminf_{k} \\frac{a_{k+1}}{a_k} \\;\\le\\; \\liminf_{k} a_{k+1}^{1/(k+1)} \\;\\le\\; \\limsup_{k} a_{k+1}^{1/(k+1)} \\;\\le\\; \\limsup_{k} \\frac{a_{k+1}}{a_k}$$\nof [[thm-ratio-root-inequality]]. The claim above collapses its right-hand\ninequality to an equality, and that fails: the roots can converge while the\nratios oscillate. This is exactly why a root criterion decides cases that a ratio\ncriterion cannot.\n\nThe witness is $a_k = 2^{-k + (-1)^k}$. The computation below establishes all four\nquantities for it, namely\n$$\\liminf_{k} \\frac{a_{k+1}}{a_k} = \\frac{1}{8}, \\qquad \\limsup_{k} \\frac{a_{k+1}}{a_k} = 2, \\qquad \\lim_{k} a_{k+1}^{1/(k+1)} = \\frac{1}{2},$$\nand it is recorded as a named example on the companion page.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-ratio-root-inequality",
      "source_section": "Statement",
      "quote": "Let $(a_k)_{k \\in \\mathbb{N}}$ be a sequence of reals ([[def-sequence]]) with\n$a_k > 0$ for every $k$. Put\n\n$$q_k := \\frac{a_{k+1}}{a_k}, \\qquad r_k := a_{k+1}^{1/(k+1)} \\qquad (k \\in \\mathbb{N}),$$\n\nwith roots as in [[thm-nth-roots-exist]] and [[def-rational-power]]. Then, in\n$\\overline{\\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]),\n\n$$\\liminf_{k} q_k \\;\\le\\; \\liminf_{k} r_k \\;\\le\\; \\limsup_{k} r_k \\;\\le\\; \\limsup_{k} q_k .$$\n\n**The root sequence must start at index $1$, and $(r_k)$ is the shift that makes\nit a sequence on $\\mathbb{N}$.** The classical statement writes $a_n^{1/n}$, which\nis meaningful only for $n \\ge 1$, since $1/0$ is not a rational number; sequences\nhere are functions on $\\mathbb{N}$ and $\\mathbb{N}$ contains $0$\n([[def-sequence]]), so the root family is written $r_k = a_{k+1}^{1/(k+1)}$,\nwhich is $a_n^{1/n}$ reindexed by $n = k+1$. The ratio family $q_k$ needs no\nshift, and the four quantities in the display are those of the two sequences\n$(q_k)$ and $(r_k)$ exactly as written here.\n\n**This is why the root test dominates the ratio test.** If the ratios converge,\nthe outer two quantities coincide and the chain forces the roots to converge to\nthe same value; but the roots can converge when the ratios do not, and then the\nchain is strict at both ends. Both phenomena are exhibited by named examples on\nthe companion page.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in\n[[def-integer-power]].\n\n1. For all $m, n \\in \\mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.\n2. If $a \\ne 0$ then $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \\in \\mathbb{Z}$ ([[def-int-operations]]).\n3. If $a \\ne 0$ and $b \\ne 0$ then all three identities of claim 1 hold for all $m, n \\in \\mathbb{Z}$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r \\in \\mathbb{Q}$ ([[def-rationals]]).\n\nEvery rational has a representative with positive denominator\n([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \\in \\mathbb{Z}$\nand $n$ a positive integer; a positive integer is the image of a unique natural\n$\\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define\n\n$$a^{r} := \\big(a^{1/n}\\big)^{m},$$\n\nwhere $a^{1/n}$ is the unique nonnegative $n$-th root of $a$\n([[thm-nth-roots-exist]]) and the outer exponent is an integer power\n([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when\n$a > 0$, so it has an inverse and negative integer exponents are allowed.\n\n**Well-definedness.** The right-hand side must not depend on which representative\n$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],\nwhich is recorded in this item's `justified_by` rather than in its `deps`, since\nit is a statement *about* the operation defined here and therefore depends on\nthis definition.\n\n**The base must be positive.** For $a < 0$ the same formula is not a definition\nat all, because different representatives of the same rational give different\nanswers, or no answer: see [[fs-rational-power-of-negative-base]], which is\nexactly the item that justifies the restriction.\n\n**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$\n([[def-rat-order]]) the displayed formula still makes sense and still does not\ndepend on the representative: $r > 0$ forces $m \\ge 1$, and\n$\\big(0^{1/n}\\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every\n$a \\ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the\nexpression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is\nwhat lets the inequalities later on this page be stated for nonnegative entries\nrather than for positive ones only.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-geometric-sequence-null",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).\n\n1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \\to 0$\n   ([[def-real-limit]]).\n2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\\infty$**\n   ([[def-divergence-to-infinity]]).\n\nClaim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the\nterms $r^k$ alternate in sign and are unbounded, so they neither converge nor\ndiverge to $+\\infty$; what is true of them is the statement about their absolute\nvalues.\n\nBoth claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and\nthe Archimedean property. Nothing here needs the least-upper-bound property\nexcept through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-squeeze",
      "source_section": "Statement",
      "quote": "Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with\n\n$$a_k \\le x_k \\le b_k \\quad \\text{eventually},$$\n\nand suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$\n([[def-real-limit]]). Then $(x_k)$ converges to $L$.\n\nThe middle sequence is not assumed to converge; that is the point of the\ntheorem, and it is why the squeeze is a tool for *establishing* convergence\nrather than for computing a limit already known to exist.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of\n$x \\in F$ is\n\n$$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The three values in the display are exactly what [L1] records for this sequence, together with $\\liminf_k r_k = \\limsup_k r_k = 1/2$, which follows from the convergence of $(r_k)$ to $1/2$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "The sequence is null: $0 < a_k = 2^{-k} t_k \\le 2 \\cdot (1/2)^{k}$ for every $k$, and $(1/2)^{k} \\to 0$ because $|1/2| < 1$, so $2 \\cdot (1/2)^{k} \\to 0$ and the squeeze gives $a_k \\to 0$.",
      "step": "1.2",
      "inputs": [
        "given",
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The ratio quantities differ from one another and from the root quantities: $1/8 < 1/2 < 2$, so $\\liminf_k q_k < \\liminf_k r_k = \\limsup_k r_k < \\limsup_k q_k$. In particular the chain [L2] holds here with both outer inequalities strict and the middle one an equality, and the ratios do not determine the roots.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "So $(a_k)$ is a positive null sequence whose root sequence converges to $1/2 < 1$ while its ratio sequence has $\\limsup_k q_k = 2 > 1$ and $\\liminf_k q_k = 1/8 < 1$, that is, the ratios oscillate across $1$ while the roots settle strictly below it.",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 2.1",
        "L1",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-ratio-fails-root-succeeds statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the zero boundary."
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
      "status": "not_applicable",
      "reason": "The ex-ratio-fails-root-succeeds statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The ex-ratio-fails-root-succeeds proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The ex-ratio-fails-root-succeeds statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The ex-ratio-fails-root-succeeds statement is not a biconditional requiring a reverse implication."
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "fs-ratio-and-root-limits-always-agree",
    "declared_target": "fs-ratio-and-root-limits-always-agree",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-ratio-root-inequality",
    "declared_target": "thm-ratio-root-inequality",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-geometric-sequence-null",
    "declared_target": "lem-geometric-sequence-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-ratio-fails-root-succeeds",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
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
    "source": "ex-ratio-fails-root-succeeds",
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

### `ex-strict-ratio-root-chain`

````markdown
---
id: ex-strict-ratio-root-chain
kind: example
title: "A positive sequence making all three inequalities of the ratio-to-root chain strict"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ratio-root-inequality, def-limsup-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, lem-geometric-sequence-null, def-integer-power, lem-power-laws, def-rational-power, lem-rational-power-laws, thm-nth-roots-exist, def-extended-reals, def-divergence-to-infinity, def-upper-bound, def-partial-order, def-sequence, def-real-limit, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]] and
define

$$a_k := 2^{-k} \ \text{ when } s_k = 1, \qquad a_k := 3^{-k} \ \text{ when } s_k = -1 .$$

This interleaves the two geometric sequences $2^{-k}$ and $3^{-k}$, taking the
first at even indices and the second at odd ones. With $q_k := a_{k+1}/a_k$ and
$r_k := a_{k+1}^{1/(k+1)}$ as in [[thm-ratio-root-inequality]],

$$\liminf_{k} q_k = 0, \qquad \liminf_{k} r_k = \frac{1}{3}, \qquad \limsup_{k} r_k = \frac{1}{2}, \qquad \limsup_{k} q_k = +\infty,$$

so the chain of that theorem reads

$$0 \;<\; \tfrac{1}{3} \;<\; \tfrac{1}{2} \;<\; +\infty$$

with **all three** inequalities strict.

**Where each comparison lives.** The first two, $0 < 1/3$ and $1/3 < 1/2$, are
comparisons of real numbers and hold in $\mathbb{R}$; they hold in
$\overline{\mathbb{R}}$ as well only because the extended order restricts on
$\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]). The third,
$1/2 < +\infty$, is not a comparison in $\mathbb{R}$ at all: $+\infty$ is not a
real number, and the inequality is the instance of "every real is below the
greatest element" in $\overline{\mathbb{R}}$. So the outer two values of the
chain are of different kinds here, and only the extended line can hold all four
at once.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ with index maps $e, o$ ([[lem-alternating-sequence]]); the sequence $a_k$ defined above; the ratios $q_k = a_{k+1}/a_k$; and the roots $r_k = a_{k+1}^{1/(k+1)}$.

[L1] The alternating sequence: $|s_k| = 1$, $s_{k+1} = -s_k$, $s_{e_j} = 1$, $s_{o_j} = -1$, with $e$, $o$ strictly increasing, so $e_j \ge j$ and $o_j \ge j$; also $o_0 = \sigma(0) \ge 1$ ([[lem-alternating-sequence]], [[lem-index-map-grows]]).

[L2] Limit superior and limit inferior in $\overline{\mathbb{R}}$: existence for every sequence, the tail supremum being the least upper bound of the tail range and the tail infimum its greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L3] The order on $\overline{\mathbb{R}}$ is total, $+\infty$ is greatest, every real is $< +\infty$, and the order restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L4] Powers: $2^{-k} = (1/2)^{k}$ and $3^{-k} = (1/3)^{k}$; $x^{m} x^{m'} = x^{m+m'}$ and $(xy)^{m} = x^{m} y^{m}$ for integer exponents and nonzero bases; $x^{m} > 0$ for $x > 0$; $\big(x^{-n}\big)^{1/n} = x^{-1}$ for $x > 0$ and $n \ge 1$ ([[def-integer-power]], [[lem-power-laws]], [[def-rational-power]], [[lem-rational-power-laws]], [[thm-nth-roots-exist]]).

[L5] Geometric sequences: $|\rho| < 1$ implies $\rho^{k} \to 0$, and $|\rho| > 1$ implies $|\rho|^{k} \to +\infty$ ([[lem-geometric-sequence-null]], [[def-real-limit]], [[def-divergence-to-infinity]]).

[L6] Order arithmetic: $0 < 1$, so $0 < 1/3 < 1/2 < 1 < 2 < 3$; multiplying an inequality by a positive element preserves it; reciprocals reverse the order; the order is total; $|t| = 1$ forces $t = 1$ or $t = -1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] The order on $\mathbb{N}$ is total, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

[L8] The chain $\liminf_k q_k \le \liminf_k r_k \le \limsup_k r_k \le \limsup_k q_k$ ([[thm-ratio-root-inequality]]).

## Verification

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, so $a_k$ is well defined, and $a_k > 0$ for every $k$ since positive powers of positive bases are positive. [given, L1, L4, L6]

1.2 For every $n \in \mathbb{N}$ there are indices $k, k' \ge n$ with $s_k = 1$ and $s_{k'} = -1$, namely $k = e_n$ and $k' = o_n$; and there are indices $l, l' \ge n$ with $s_{l+1} = 1$ and $s_{l'+1} = -1$, namely $l = e_j - 1$ and $l' = o_j - 1$ for any $j \ge n+1$, these being natural numbers because $e_j \ge j \ge 1$ and $o_j \ge j \ge 1$, and satisfying $l \ge j - 1 \ge n$ and $l' \ge j-1 \ge n$. [given, L1, L7]

1.3 Since $s_{k+1} = -s_k$, the ratios are $q_k = 3^{-(k+1)}/2^{-k} = 3^{-1}(2/3)^{k}$ when $s_k = 1$, and $q_k = 2^{-(k+1)}/3^{-k} = 2^{-1}(3/2)^{k}$ when $s_k = -1$; in both cases $q_k > 0$. [given, L1, L4, L6]

1.4 Likewise the roots are $r_k = \big(2^{-(k+1)}\big)^{1/(k+1)} = 2^{-1}$ when $s_{k+1} = 1$, and $r_k = \big(3^{-(k+1)}\big)^{1/(k+1)} = 3^{-1}$ when $s_{k+1} = -1$. [given, L1, L4]

2.1 By steps 1.2 and 1.4 the tail range of $(r_k)$ at every index $n$ is exactly $\{1/2, 1/3\}$, whose least upper bound is $1/2$ and greatest lower bound $1/3$, since $1/3 < 1/2$ and both belong to the set. Hence $\limsup_k r_k = 1/2$ and $\liminf_k r_k = 1/3$. [step 1.2, step 1.4, L2, L3, L6]

2.2 $\limsup_k q_k = +\infty$. Fix $n$ and a real $M$. Since $|3/2| > 1$, the sequence $(3/2)^{k}$ diverges to $+\infty$, so there is $K$ with $2^{-1}(3/2)^{k} > M$ for all $k \ge K$; taking $j$ at least as large as both $n$ and $K$ and putting $k := o_j$, we get $k \ge j \ge n$ and $s_k = -1$, hence $q_k = 2^{-1}(3/2)^{k} > M$. So no real bounds the tail range of $(q_k)$ above, its least upper bound in $\overline{\mathbb{R}}$ is $+\infty$ for every $n$, and $\limsup_k q_k$ is the greatest lower bound of $\{+\infty\}$, namely $+\infty$. [step 1.2, step 1.3, L2, L3, L5, L6, L7]

2.3 $\liminf_k q_k = 0$. Fix $n$. All $q_k$ are positive, so $0$ is a lower bound of the tail range. If $\ell > 0$ were a lower bound, then, since $|2/3| < 1$ gives $(2/3)^{k} \to 0$ and hence $3^{-1}(2/3)^{k} < \ell$ for all $k \ge K$ for some $K$, taking $j$ at least as large as both $n$ and $K$ and putting $k := e_j$ would give $k \ge j \ge n$, $s_k = 1$ and $q_k = 3^{-1}(2/3)^{k} < \ell$, contradicting that $\ell$ is a lower bound. So every lower bound is $\le 0$ and the greatest lower bound of each tail range is $0$; hence $\liminf_k q_k$ is the least upper bound of $\{0\}$, namely $0$. [step 1.2, step 1.3, L2, L3, L5, L6, L7]

3.1 Collecting the four values, the chain [L8] reads $0 \le 1/3 \le 1/2 \le +\infty$, and each inequality is strict: $0 < 1/3$ and $1/3 < 1/2$ hold in $\mathbb{R}$ and therefore in $\overline{\mathbb{R}}$, while $1/2 < +\infty$ holds because $+\infty$ is the greatest element of $\overline{\mathbb{R}}$ and is distinct from every real. So no two of the four quantities coincide. [step 2.1, step 2.2, step 2.3, L3, L6, L8] ∎

## Remarks

- **Why interleaving two different geometric sequences does it.** Each root is
  determined by the base used at a single index, so the root sequence takes only
  the two values $1/2$ and $1/3$, and its limit superior and limit inferior are
  those two numbers. Each ratio, by contrast, compares two *different* bases at
  consecutive indices, so it contains a factor $(2/3)^{k}$ or $(3/2)^{k}$ and runs
  to $0$ on one subsequence and to $+\infty$ on the other. Widening the gap
  between the two bases widens the outer two values without moving the inner two.

- **Compare [[ex-ratio-fails-root-succeeds]].** There the roots converge, so the
  middle inequality is an equality and only the outer two are strict. Here all
  three are strict, which is the most that
  [[thm-ratio-root-inequality]] permits.

- **Both outer values are attained by the ratios in the extreme sense.** The
  ratio sequence has $\liminf = 0$ and $\limsup = +\infty$, so the ratio data
  place no restriction whatever on the roots beyond the chain, and the chain is
  therefore the sharpest general statement relating the two.
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

### `lem-geometric-sequence-null`

````markdown
---
id: lem-geometric-sequence-null
kind: lemma
title: "For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-bernoulli-inequality, lem-power-monotone, cor-archimedean-reciprocal, thm-of-archimedean, def-real-limit, def-sequence, def-divergence-to-infinity, lem-of-inverse-positive, lem-of-abs-value, def-abs-value, cor-of-one-positive, prop-of-reciprocal-order, thm-induction-principle, prop-of-multiply-inequalities, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-cauchy-rationals-no-rational-limit]
aliases: []
landmark: false
proof_strategy: cases
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
    - title: "Geometric progression (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_progression"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.20(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5 (Lem 6.5.2)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

## Facts & Assumptions

**Given:** A real $r$, with integer powers as in [[def-integer-power]]; for $n \in \mathbb{N}$, the symbol $n$ also denotes the canonical natural $n \cdot 1_{\mathbb{R}}$ where it occurs in an arithmetic expression.

[L1] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $|x| = x$ when $x \ge 0$, so in particular $|1| = 1$ because $1 > 0$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

[L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + nx$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Power laws: $(ab)^n = a^n b^n$, and $a^n \ne 0$ when $a \ne 0$ ([[lem-power-laws]]).

[L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

[L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Canonical naturals: $n > 0$ for $n \ge 1$, and $m \le n$ in $\mathbb{N}$ gives $m \le n$ in $\mathbb{R}$ ([[lem-of-naturals-positive]]).

[L9] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$ ([[prop-of-multiply-inequalities]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

## Proof

**Proof technique:** cases.

1.1 First, $|r^k| = |r|^k$ for every $k \in \mathbb{N}$, by induction: at $k = 0$ both sides are $|1| = 1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [given, L1, L2]

1.2 **Case zero.** Assume $r = 0$. [given, assume-case zero]

1.3 **Case small.** Assume $0 < |r| < 1$. [given, assume-case small]

1.4 **Case large.** Assume $|r| > 1$. [given, assume-case large]

2.1 In case zero, $r^k = 0$ for every $k \ge 1$: indeed $r^1 = r^0 r = 1 \cdot 0 = 0$, and if $r^k = 0$ then $r^{k+1} = r^k r = 0$, so induction gives the claim from $k = 1$ on. [step 1.2, L2]

2.2 In case small, put $s := 1/|r|$, which is defined since $|r| \ne 0$, and $h := s - 1$. Then $s > 1$ and $h > 0$. [step 1.3, L1, L6, choose]

2.3 In case large, put $h' := |r| - 1$, so $h' > 0$ and $|r| = 1 + h'$. [step 1.4, choose]

3.1 In case zero, for every rational $\varepsilon > 0$ and every $k \ge 1$ we have $|r^k - 0| = |0| = 0 < \varepsilon$, so $r^k \to 0$ and claim 1 holds. [step 2.1, L1, L11]

3.2 In case small, $|r|^k s^k = (|r| s)^k = 1^k = 1$, so $|r|^k = 1/s^k$, and $s^k > 0$. [step 2.2, L4, L5]

3.3 In case small, Bernoulli applied to $h > 0 \ge -1$ gives $s^k = (1+h)^k \ge 1 + kh > kh > 0$ for every $k \ge 1$, using $1 > 0$ and $kh > 0$. [step 2.2, L3, L8, L9]

3.4 In case large, Bernoulli applied to $h' > 0 \ge -1$ gives $|r|^k = (1 + h')^k \ge 1 + k h'$ for every $k \in \mathbb{N}$. [step 2.3, L3]

3.5 In case large, let $M \in \mathbb{R}$ be arbitrary and use [L7] to fix a natural $n \ge 1$ with $M/h' < n$; then $M \le n h'$, since multiplying $M/h' \le n$ by $h' > 0$ preserves the inequality. [step 2.3, L7, L9, choose]

3.6 In case small, let $\varepsilon > 0$ be rational; then $\varepsilon h > 0$, so [L7] supplies a natural $N \ge 1$ with $1/N < \varepsilon h$, whence $1/(Nh) \le \varepsilon$ on multiplying by $1/h > 0$. [step 2.2, L6, L7, L9, choose]

4.1 In case small, combining steps 3.2 and 3.3: $0 < kh < s^k$ gives $|r|^k = 1/s^k < 1/(kh)$ for every $k \ge 1$. [step 3.2, step 3.3, L6]

4.2 In case large, for every $k \ge n$ we have $k h' \ge n h' \ge M$, so $|r|^k \ge 1 + k h' \ge 1 + M > M$, the last step because $1 > 0$. [step 3.4, step 3.5, L1, L8, L9]

5.1 In case small, for every $k \ge N$ we have $kh \ge Nh > 0$, hence $1/(kh) \le 1/(Nh) \le \varepsilon$, and therefore $|r^k - 0| = |r^k| = |r|^k < 1/(kh) \le \varepsilon$. [step 1.1, step 4.1, step 3.6, L6, L8, L9]

5.2 In case large, an index $n$ has been produced for an arbitrary real $M$ with $|r|^k > M$ for all $k \ge n$, which is exactly divergence to $+\infty$: claim 2 holds. [step 4.2, L11]

6.1 In case small, the rational $\varepsilon > 0$ was arbitrary and the index $N$ was produced from it, so $r^k \to 0$ and claim 1 holds. [step 5.1, L11]

7.1 The hypothesis $|r| < 1$ of claim 1 is exhausted by cases zero and small, since $|r| \ge 0$ with $|r| = 0$ exactly when $r = 0$, so trichotomy leaves only $0 < |r| < 1$; the hypothesis $|r| > 1$ of claim 2 is case large. Both claims are therefore established. [step 3.1, step 5.2, step 6.1, L1, L10, cases: zero small or large, cases-exhaustive] ∎

## Remarks

- **The two claims are not one claim in disguise.** For $|r| > 1$ the sequence
  $(r^k)$ itself has no limiting behaviour to record when $r$ is negative: its
  terms alternate in sign and grow, so it neither converges nor diverges to
  $+\infty$ nor to $-\infty$. Stating claim 2 for $|r|^k$ is what makes it true
  as written.

- **The boundary $|r| = 1$ is excluded and is genuinely different.** For $r = 1$
  the sequence is constant $1$; for $r = -1$ it is the alternating sequence
  ([[lem-alternating-sequence]]), which is bounded and divergent
  ([[fs-bounded-implies-convergent]]). So neither claim extends to $|r| = 1$, and
  the two cases at the boundary do not even agree with each other.

- **Where this is used.** Claim 1 supplies the null sequence $c^{k}$ that makes a
  contractive sequence Cauchy ([[thm-contractive-implies-cauchy]]) and the null
  sequence $(1/10)^n$ that identifies the limit of the decimal truncations of
  $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).
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

### `thm-ratio-root-inequality`

````markdown
---
id: thm-ratio-root-inequality
kind: theorem
title: "For $a_k > 0$: $\\liminf a_{k+1}/a_k \\le \\liminf a_k^{1/k} \\le \\limsup a_k^{1/k} \\le \\limsup a_{k+1}/a_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-monotone-comparison, lem-limsup-exists, lem-extended-reals-complete, thm-convergence-iff-limsup-equals-liminf, def-extended-reals, def-divergence-to-infinity, thm-nth-roots-exist, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, lem-nth-root-of-constant-tends-to-one, lem-power-monotone, def-integer-power, lem-power-laws, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-inverse-positive, thm-algebra-of-limits, thm-induction-principle, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, prop-of-multiply-inequalities, def-sequence, def-real-limit, def-upper-bound, def-partial-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain]
aliases: []
landmark: true
short: "ratio-to-root chain"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Maryland Math 410, Notes on the Real Numbers"
      url: "https://math.umd.edu/~lvrmr/2010-2011-F/Classes/MATH410/NOTES/Reals.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \in \mathbb{N}}$ be a sequence of reals ([[def-sequence]]) with
$a_k > 0$ for every $k$. Put

$$q_k := \frac{a_{k+1}}{a_k}, \qquad r_k := a_{k+1}^{1/(k+1)} \qquad (k \in \mathbb{N}),$$

with roots as in [[thm-nth-roots-exist]] and [[def-rational-power]]. Then, in
$\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]),

$$\liminf_{k} q_k \;\le\; \liminf_{k} r_k \;\le\; \limsup_{k} r_k \;\le\; \limsup_{k} q_k .$$

**The root sequence must start at index $1$, and $(r_k)$ is the shift that makes
it a sequence on $\mathbb{N}$.** The classical statement writes $a_n^{1/n}$, which
is meaningful only for $n \ge 1$, since $1/0$ is not a rational number; sequences
here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
([[def-sequence]]), so the root family is written $r_k = a_{k+1}^{1/(k+1)}$,
which is $a_n^{1/n}$ reindexed by $n = k+1$. The ratio family $q_k$ needs no
shift, and the four quantities in the display are those of the two sequences
$(q_k)$ and $(r_k)$ exactly as written here.

**This is why the root test dominates the ratio test.** If the ratios converge,
the outer two quantities coincide and the chain forces the roots to converge to
the same value; but the roots can converge when the ratios do not, and then the
chain is strict at both ends. Both phenomena are exhibited by named examples on
the companion page.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the ratio sequence $q_k = a_{k+1}/a_k$; the root sequence $r_k = a_{k+1}^{1/(k+1)}$; and $\iota(n) = n \cdot 1_{\mathbb{R}}$ for the canonical naturals.

[L1] Tail ranges, extended tail bounds and the two quantities exist for every sequence, with $s_n$ the least upper bound of the $n$-th tail range and $i_n$ its greatest lower bound, $\limsup = \inf\{s_n\}$ and $\liminf = \sup\{i_n\}$ ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is greatest and $-\infty$ least, it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$, and an element between two reals is real ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k z_k$ gives $z_k < L + \varepsilon$ eventually for every real $\varepsilon > 0$; $L = \liminf_k z_k$ gives $z_k > L - \varepsilon$ eventually for every real $\varepsilon > 0$ ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k z_k \le \limsup_k z_k$ ([[lem-liminf-le-limsup]]).

[L5] Comparison: $z_k \le w_k$ eventually implies $\limsup_k z_k \le \limsup_k w_k$ and $\liminf_k z_k \le \liminf_k w_k$ ([[lem-limsup-monotone-comparison]]).

[L6] A sequence converging to a real $c$ has $\limsup = \liminf = c$; and $\liminf_k z_k = +\infty$ implies $z_k \to +\infty$, hence $z_k > M$ eventually for every real $M$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L7] For every real $C > 0$ the sequence $C^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L8] Algebra of limits: a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L9] Roots and powers of positive reals: $x^{1/n}$ exists, is unique and is $> 0$ for $x > 0$ and $n \ge 1$; $(xy)^{1/n} = x^{1/n} y^{1/n}$; the integer power $x^n$ is the rational power at exponent $n$, so $(x^n)^{1/n} = x^{n \cdot (1/n)} = x$; $x^{-m} = 1/x^m$ and $x^{m} x^{m'} = x^{m+m'}$ for integer exponents and $x \ne 0$; $x^n > 0$ for $x > 0$; and $0 \le x \le y$ implies $x^{1/n} \le y^{1/n}$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]).

[L10] Induction principle ([[thm-induction-principle]]).

[L11] Archimedean facts: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L12] Order arithmetic: [[lem-of-add-order]] and claim 4 of [[lem-of-sign-rules]] state the strict forms, that inequalities may be translated and added and that multiplication by a positive element preserves $<$; adjoining the case of equality, where both sides move or scale alike, gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order on $\mathbb{R}$ is total.

[L13] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L14] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Every $q_k$ is positive, being a quotient of positive reals, and every $r_k$ is positive, being a root of the positive real $a_{k+1}$. Hence $0$ is a lower bound of every tail range of $(q_k)$ and of $(r_k)$, so every tail infimum is $\ge 0$ and therefore $\liminf_k q_k \ge 0$ and $\liminf_k r_k \ge 0$; with [L4] this also gives $\limsup_k q_k \ge 0$. [given, L1, L2, L4, L9, L11]

1.2 Let $c > 0$ be real, let $N \in \mathbb{N}$ and put $C := a_N c^{-N}$, a positive real. If $a_{k+1} \le c\,a_k$ for every $k \ge N$ then $a_n \le C c^n$ for every $n \ge N$; if $a_{k+1} \ge c\,a_k$ for every $k \ge N$ then $a_n \ge C c^n$ for every $n \ge N$. Both are inductions on $j$ for $n = N + j$: at $j = 0$ one has $C c^N = a_N c^{-N} c^N = a_N c^0 = a_N$, and the inductive step multiplies the bound at $n$ by the positive $c$ and uses the hypothesis at $k = n$. [given, L9, L10, L12]

1.3 Let $C > 0$ and $c > 0$ be real and $n \ge 1$ a natural. Then $(C c^n)^{1/n} = C^{1/n} (c^n)^{1/n} = C^{1/n} c$. Consequently $0 < a_n \le C c^n$ gives $a_n^{1/n} \le C^{1/n} c$, and $a_n \ge C c^n > 0$ gives $a_n^{1/n} \ge C^{1/n} c$, since $x \mapsto x^{1/n}$ is nondecreasing on the nonnegative reals. [given, L9]

1.4 For real $C > 0$ and $c > 0$ the sequence $u_k := C^{1/(k+1)} c$ converges to $c$, by [L7] and the scalar rule; hence $\limsup_k u_k = \liminf_k u_k = c$. [given, L6, L7, L8]

1.5 If $\limsup_k q_k = +\infty$ then $\limsup_k r_k \le \limsup_k q_k$, since $+\infty$ is the greatest element of $\overline{\mathbb{R}}$. [given, L2]

2.1 Suppose $\beta := \limsup_k q_k$ is real, and let $\varepsilon > 0$ be an arbitrary real. Put $c := \beta + \varepsilon$, which is positive since $\beta \ge 0$. By [L3] there is $N$ with $q_k < c$ for all $k \ge N$, that is $a_{k+1} < c\,a_k$ after multiplying by $a_k > 0$; so $a_{k+1} \le c\,a_k$ for $k \ge N$, and step 1.2 gives $a_n \le C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$. For $k \ge N$ the index $n := k+1$ satisfies $n \ge N$ and $n \ge 1$, so step 1.3 gives $r_k \le C^{1/(k+1)} c = u_k$. By step 1.4 and [L5], $\limsup_k r_k \le \limsup_k u_k = c = \beta + \varepsilon$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L12, L14]

2.2 If $\alpha := \liminf_k q_k = 0$ then $\liminf_k r_k \ge 0 = \alpha$ by step 1.1. [step 1.1]

2.3 Suppose $\alpha := \liminf_k q_k > 0$ and let $c$ be a real with $0 < c < \alpha$. Then $q_k > c$ eventually: if $\alpha$ is real this is [L3] applied with $\varepsilon := \alpha - c > 0$, and if $\alpha = +\infty$ then $q_k \to +\infty$ by [L6], so $q_k > c$ eventually. Fix $N$ with $q_k > c$ for all $k \ge N$; then $a_{k+1} \ge c\,a_k$ for $k \ge N$, so step 1.2 gives $a_n \ge C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$, and step 1.3 gives $r_k \ge C^{1/(k+1)} c = u_k$ for every $k \ge N$. By step 1.4 and [L5], $\liminf_k r_k \ge \liminf_k u_k = c$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L6, L12, L14]

3.1 Hence $\limsup_k r_k \le \limsup_k q_k$. By step 1.1 the element $\beta = \limsup_k q_k$ is $\ge 0$, so it is either $+\infty$, which is step 1.5, or real. In the real case step 2.1 with $\varepsilon = 1$ gives $\limsup_k r_k \le \beta + 1$, a real, so $\limsup_k r_k \ne +\infty$; if $\limsup_k r_k = -\infty$ it is $\le \beta$; and otherwise it is a real $S$, and $S > \beta$ would give, on choosing a natural $m \ge 1$ with $1/m < S - \beta$ and applying step 2.1 with $\varepsilon = 1/m$, the impossibility $S \le \beta + 1/m < S$. By totality $\limsup_k r_k \le \beta$. [step 2.1, step 1.5, step 1.1, L2, L11, L12]

3.2 Hence $\liminf_k q_k \le \liminf_k r_k$. By step 1.1 the element $\alpha = \liminf_k q_k$ is $\ge 0$, so it is $0$, or a positive real, or $+\infty$. The first case is step 2.2. If $\alpha$ is a positive real and $\liminf_k r_k < \alpha$, then $\liminf_k r_k$ lies between the reals $0$ and $\alpha$ by step 1.1 and is therefore real, so [L13] supplies a real $c$ with $\liminf_k r_k < c < \alpha$, necessarily $c > 0$; step 2.3 then gives $\liminf_k r_k \ge c$, contradicting $c > \liminf_k r_k$, so $\liminf_k r_k \ge \alpha$ by totality. If $\alpha = +\infty$, step 2.3 gives $\liminf_k r_k \ge c$ for every real $c$ with $c > 0$, so $\liminf_k r_k$ is not $-\infty$, and it is not a real $t$ either, since $t \ge 0$ by step 1.1 and then $c := t+1 > 0$ would give $t \ge t+1$; hence $\liminf_k r_k = +\infty = \alpha$. [step 2.2, step 2.3, step 1.1, L2, L12, L13]

4.1 Combining the three links, $\liminf_k q_k \le \liminf_k r_k$ by step 3.2, $\liminf_k r_k \le \limsup_k r_k$ by [L4], and $\limsup_k r_k \le \limsup_k q_k$ by step 3.1. [step 3.1, step 3.2, L4] ∎

## Remarks

- **The mechanism is that a ratio bound integrates to a geometric bound.** If the
  ratios are eventually below $c$ then the terms are eventually below a constant
  times $c^n$, and taking $n$-th roots turns the constant into $C^{1/n}$, which
  tends to $1$ by [[lem-nth-root-of-constant-tends-to-one]]. That single lemma is
  what makes the constant disappear, and it is the only analytic input; everything
  else is the comparison lemma [[lem-limsup-monotone-comparison]] and order
  bookkeeping.

- **All four quantities can be different, and the two outer inequalities can both
  be strict.** [[ex-strict-ratio-root-chain]] gives a positive sequence with
  chain $0 < 1/3 < 1/2 < +\infty$, so no two of the four coincide, and
  [[ex-ratio-fails-root-succeeds]] is the standard witness in which the roots
  converge while the ratios oscillate across $1$.

- **The chain also explains the practical rule.** When
  $\limsup_k q_k < 1$ the chain forces $\limsup_k r_k < 1$, so any conclusion
  drawn from the roots is available from the ratios; but
  $\limsup_k r_k < 1$ can hold with $\limsup_k q_k > 1$, and then only the root
  side is usable. This is the sense in which the root criterion is the stronger
  of the two.

- **The hypothesis $a_k > 0$ is needed at every index, not merely eventually.**
  The ratios must be defined, which needs $a_k \ne 0$, and the roots must be
  defined, which needs $a_{k+1} \ge 0$; positivity also lets the ratio
  inequalities be cleared of denominators. A sequence positive only from some
  index on can be handled by passing to that tail, which changes none of the four
  quantities.
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

