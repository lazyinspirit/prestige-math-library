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

## Target item — `thm-limsup-subadditive`

Normalized current SHA-256: `6654b64cfff51ca5df7670ba015172e06b8119461676b0760722ccea99d02175`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-limsup-subadditive
kind: theorem
title: "$\\limsup(x_k + y_k) \\le \\limsup x_k + \\limsup y_k$ whenever the right-hand side is defined in $\\overline{\\mathbb{R}}$, and dually for $\\liminf$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, lem-limsup-reflection, lem-liminf-le-limsup, thm-convergence-iff-limsup-equals-liminf, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-divergence-to-infinity, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-add-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-subadditivity-strict]
aliases: []
landmark: true
short: "$\\limsup$ is subadditive"
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
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) and write
$\Lambda := \limsup_{k} x_k$, $M := \limsup_{k} y_k$
([[def-limsup-liminf]]).

1. If the sum $\Lambda + M$ is defined in $\overline{\mathbb{R}}$
   ([[def-extended-reals]]), that is if $\{\Lambda, M\} \ne \{+\infty, -\infty\}$,
   then
   $$\limsup_{k}(x_k + y_k) \;\le\; \Lambda + M .$$
2. Dually, writing $\lambda := \liminf_k x_k$ and $\mu := \liminf_k y_k$, if
   $\lambda + \mu$ is defined in $\overline{\mathbb{R}}$ then
   $$\liminf_{k}(x_k + y_k) \;\ge\; \lambda + \mu .$$

**The hypothesis is exactly the one [[def-extended-reals]] forces, and it cannot
be dropped.** When one of $\Lambda$, $M$ is $+\infty$ and the other $-\infty$ the
right-hand side is not an element of $\overline{\mathbb{R}}$ at all, so there is
nothing to compare. The inequality is genuinely an inequality: equality can fail,
and does, for an alternating pair of sequences; the failure of additivity is
recorded as a false statement among this page's examples, and the witness is a
named counterexample on the companion page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals, their termwise sum $(x_k + y_k)$, and $\Lambda := \limsup_k x_k$, $M := \limsup_k y_k$, assumed to have a sum defined in $\overline{\mathbb{R}}$.

[L1] Tail bounds and the two quantities exist in $\overline{\mathbb{R}}$ for every sequence, $s_n$ being the least upper bound of the $n$-th tail range and $\limsup$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is its greatest element and $-\infty$ its least, and it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Partial addition on $\overline{\mathbb{R}}$: a sum is undefined only for the pairs $(+\infty, -\infty)$ and $(-\infty, +\infty)$; a sum with one summand $+\infty$ and the other $\ne -\infty$ is $+\infty$; a sum with one summand $-\infty$ and the other $\ne +\infty$ is $-\infty$; and $-(a+b) = (-a) + (-b)$, each side defined exactly when the other is ([[def-extended-reals]]).

[L4] Epsilon characterisation for a real limit superior: $\Lambda = \limsup_k x_k$ real implies that for every real $\varepsilon > 0$ one has $x_k < \Lambda + \varepsilon$ eventually ([[lem-limsup-epsilon-characterisation]]).

[L5] $\limsup_k z_k = -\infty$ implies $z_k \to -\infty$; and $z_k \to -\infty$ implies $\limsup_k z_k = -\infty$ ([[lem-liminf-le-limsup]], [[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L6] Reflection: $\limsup_k(-z_k) = -\liminf_k z_k$ and $\liminf_k(-z_k) = -\limsup_k z_k$ ([[lem-limsup-reflection]]).

[L7] Order arithmetic in $\mathbb{R}$: [[lem-of-add-order]] states the strict forms, that inequalities may be translated and added, so $a < a'$ and $b < b'$ give $a + b < a' + b'$; adjoining the case of equality, in which both sides move by the same amount, gives the nonstrict forms used below. In particular $a \le b$ if and only if $-b \le -a$: translation by $-a-b$ turns $a < b$ into $-b < -a$ and back, while $a = b$ holds exactly when $-a = -b$.

[L8] Reciprocal Archimedean property and canonical naturals: for every real $\delta > 0$ there is a natural $m \ge 1$ with $1/m < \delta$; for a natural $m \ge 1$ the element $2m$ is a natural $\ge 1$ with $(2m) \cdot 1_{\mathbb{R}} = 2\big(m \cdot 1_{\mathbb{R}}\big) > 0$, so $1/(2m) > 0$ and $1/(2m) + 1/(2m) = 1/m$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-of-naturals-positive]]).

[L9] Two properties each holding eventually hold together from the larger of the two thresholds on ([[def-sequence]], [[thm-nat-linear-order]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Since $\Lambda + M$ is defined, exactly one of the following three situations holds: at least one of $\Lambda$, $M$ equals $+\infty$, and then the other is $\ne -\infty$; both are real; or neither equals $+\infty$ and at least one equals $-\infty$. Both the hypothesis and the conclusion of claim 1 are unchanged by exchanging the two sequences, so in the third situation it may be assumed that $\Lambda = -\infty$. [given, L2, L3]

2.1 In the first situation $\Lambda + M = +\infty$ by the addition table, and every element of $\overline{\mathbb{R}}$ is $\le +\infty$, so $\limsup_k(x_k + y_k) \le \Lambda + M$. [step 1.1, L2, L3]

2.2 In the second situation let $\delta > 0$ be an arbitrary real, take a natural $m \ge 1$ with $1/m < \delta$ and put $\varepsilon := 1/(2m) > 0$, so that $\varepsilon + \varepsilon = 1/m < \delta$. By [L4] there are thresholds beyond which $x_k < \Lambda + \varepsilon$ and beyond which $y_k < M + \varepsilon$; beyond the larger of them both hold, so adding the two inequalities gives $x_k + y_k < \Lambda + M + \varepsilon + \varepsilon$ for all $k \ge N$, where $N$ is that larger threshold. Hence $\Lambda + M + \varepsilon + \varepsilon$ is an upper bound of the $N$-th tail range of $(x_k + y_k)$, so the $N$-th tail supremum is $\le \Lambda + M + \varepsilon + \varepsilon$, and therefore $\limsup_k(x_k + y_k) \le \Lambda + M + \varepsilon + \varepsilon < \Lambda + M + \delta$. [step 1.1, L1, L2, L4, L7, L8, L9]

2.3 In the third situation, with $\Lambda = -\infty$, first note that there is a real $B$ with $y_k < B$ eventually: if $M$ is real, [L4] with $\varepsilon = 1$ gives $y_k < M + 1$ eventually, so $B := M + 1$ serves; and if $M = -\infty$ then $y_k \to -\infty$ by [L5], so $y_k < 0$ eventually and $B := 0$ serves. Also $\Lambda = -\infty$ gives $x_k \to -\infty$ by [L5]. Now let $c$ be an arbitrary real: since $c - B$ is real, $x_k < c - B$ eventually, and beyond the larger threshold both that and $y_k < B$ hold, so $x_k + y_k < (c - B) + B = c$ there. As $c$ was arbitrary, $x_k + y_k \to -\infty$, hence $\limsup_k(x_k + y_k) = -\infty = \Lambda + M$ by [L5] and the addition table. [step 1.1, L3, L4, L5, L7, L9]

3.1 In the second situation the conclusion follows from step 2.2: taking $\delta = 1$ shows $\limsup_k(x_k + y_k) \le \Lambda + M + 1$, a real number, so the left-hand side is not $+\infty$; if it is $-\infty$ then it is $\le \Lambda + M$ because $-\infty$ is least; and if it is a real $S$ with $S > \Lambda + M$, then $\delta_0 := S - (\Lambda + M) > 0$ and step 2.2 applied with $\delta = \delta_0$ gives $S < \Lambda + M + \delta_0 = S$, which is impossible. So $\limsup_k(x_k + y_k) \le \Lambda + M$ by totality. [step 2.2, L2, L7]

4.1 Claim 1 now holds in all three situations, by steps 2.1, 3.1 and 2.3. [step 2.1, step 3.1, step 2.3, step 1.1]

5.1 For claim 2, suppose $\lambda + \mu$ is defined. By [L6] the reflected sequences have $\limsup_k(-x_k) = -\lambda$ and $\limsup_k(-y_k) = -\mu$, and $(-\lambda) + (-\mu) = -(\lambda + \mu)$ is defined exactly when $\lambda + \mu$ is, by [L3]. Claim 1 applied to $(-x_k)$ and $(-y_k)$, whose termwise sum is $(-(x_k + y_k))$, therefore gives $-\liminf_k(x_k + y_k) = \limsup_k\big(-(x_k+y_k)\big) \le (-\lambda) + (-\mu) = -(\lambda + \mu)$; reflecting this inequality reverses it into $\liminf_k(x_k + y_k) \ge \lambda + \mu$. [step 4.1, L3, L6, L7] ∎

## Remarks

- **The three situations are not decoration.** The middle one is the analytic
  content and the outer two are genuinely different arguments: the first is
  vacuous because $+\infty$ bounds everything, and the third is a statement about
  divergence to $-\infty$ that has to be proved, since a sum of two sequences each
  running off to $-\infty$, or one running off with the other merely bounded
  above, is not covered by any algebra of limits
  ([[def-divergence-to-infinity]] forbids that).

- **Why the real supremum of a sumset is not used.** The natural one-line route,
  $s_n(x+y) \le s_n(x) + s_n(y)$ followed by a passage to the infimum, needs the
  first inequality in $\overline{\mathbb{R}}$ and then still needs an $\varepsilon$
  argument to compare $\inf_n\big(s_n(x) + s_n(y)\big)$ with
  $\Lambda + M$. The identity $\sup(S+T) = \sup S + \sup T$ of [[lem-sup-sum]]
  does not apply, since it requires both sets to be nonempty subsets of
  $\mathbb{R}$ bounded above, and a tail range of an unbounded sequence is not.
  The $\varepsilon$ argument is therefore made directly, once.

- **Both halves of the $\varepsilon$ split are reciprocals of natural numbers, not halvings in
  $\mathbb{R}$.** Choosing $m$ with $1/m < \delta$ and then working with
  $1/(2m)$ keeps every quantity a reciprocal of a canonical natural, so the only
  field facts used are that positives are invertible and that inequalities add.

- **Equality is the exception.** Without a hypothesis on one of the two
  sequences the gap can be as large as the whole oscillation, as
  [[cex-limsup-subadditivity-strict]] shows. It is standard, and neither needed
  nor proved on this page, that the inequality becomes an equality as soon as one
  of the two sequences converges to a real limit.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:\n\n- $\\sup A = +\\infty$ if $+\\infty \\in A$, or if $A_{\\mathbb{R}}$ is not bounded above in $\\mathbb{R}$;\n- $\\sup A = -\\infty$ if $+\\infty \\notin A$ and $A_{\\mathbb{R}} = \\emptyset$;\n- $\\sup A$ is the real supremum $\\sup A_{\\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\\infty \\notin A$ and $A_{\\mathbb{R}}$ is nonempty and bounded above in $\\mathbb{R}$;\n\nand dually, with $-\\infty$ and $+\\infty$ exchanged and \"above\" replaced by\n\"below\", for $\\inf A$ ([[def-infimum]], [[thm-infimum-property]]).\n\n**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.\n\n**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot\ndo, and it is why every $\\limsup$ statement on this page holds for every sequence\nrather than for bounded ones only. It is also not a weakening of the discipline\nthis library keeps around suprema: the operation supplied here is a *different*\noperation, taken in a *different* ordered set, and the agreement clause records\nexactly where the two coincide.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-upper-bound",
      "source_section": "Definition",
      "quote": "Let $(P, \\le)$ be a poset ([[def-partial-order]]) and $S \\subseteq P$.\n\nAn element $u \\in P$ is an **upper bound** of $S$ if $s \\le u$ for every\n$s \\in S$.\n\nAn element $u \\in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$\nis an upper bound of $S$ and $u \\le v$ for every upper bound $v$ of $S$. When it\nexists we write $u = \\sup S$.\n\nAn element $u \\in P$ is a **strict upper bound** of $S$ if $s < u$ for every\n$s \\in S$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-partial-order",
      "source_section": "Definition",
      "quote": "Let $P$ be a set. A **partial order** on $P$ is a binary relation $\\le$ on $P$\nsuch that, for all $x, y, z \\in P$:\n\n- **(R)** *reflexivity*: $x \\le x$;\n- **(A)** *antisymmetry*: if $x \\le y$ and $y \\le x$, then $x = y$;\n- **(T)** *transitivity*: if $x \\le y$ and $y \\le z$, then $x \\le z$.\n\nThe pair $(P, \\le)$ is a **partially ordered set**, abbreviated **poset**. When\nthe order is clear we write $P$ for the pair.\n\nThe associated **strict order** is defined by\n$$x < y \\quad :\\Longleftrightarrow \\quad x \\le y \\text{ and } x \\ne y.$$\n\nTwo elements $x, y \\in P$ are **comparable** if $x \\le y$ or $y \\le x$, and\n**incomparable** otherwise. A partial order in which every two elements are\ncomparable is a **total order** (equivalently a **linear order**), and $(P, \\le)$\nis then a **totally ordered set**.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-partial-order",
      "source_section": "Definition",
      "quote": "Let $P$ be a set. A **partial order** on $P$ is a binary relation $\\le$ on $P$\nsuch that, for all $x, y, z \\in P$:\n\n- **(R)** *reflexivity*: $x \\le x$;\n- **(A)** *antisymmetry*: if $x \\le y$ and $y \\le x$, then $x = y$;\n- **(T)** *transitivity*: if $x \\le y$ and $y \\le z$, then $x \\le z$.\n\nThe pair $(P, \\le)$ is a **partially ordered set**, abbreviated **poset**. When\nthe order is clear we write $P$ for the pair.\n\nThe associated **strict order** is defined by\n$$x < y \\quad :\\Longleftrightarrow \\quad x \\le y \\text{ and } x \\ne y.$$\n\nTwo elements $x, y \\in P$ are **comparable** if $x \\le y$ or $y \\le x$, and\n**incomparable** otherwise. A partial order in which every two elements are\ncomparable is a **total order** (equivalently a **linear order**), and $(P, \\le)$\nis then a **totally ordered set**.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "1.1",
        "2.1",
        "2.3",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-limsup-epsilon-characterisation",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \\in \\mathbb{R}$,\nwith *eventually* and *frequently* as in [[def-sequence]] and $\\limsup$,\n$\\liminf$ as in [[def-limsup-liminf]].\n\n1. $L = \\limsup_{k} x_k$ **if and only if** for every real $\\varepsilon > 0$\n   $$x_k < L + \\varepsilon \\ \\text{ eventually} \\qquad \\text{and} \\qquad x_k > L - \\varepsilon \\ \\text{ frequently}.$$\n2. Dually, $L = \\liminf_{k} x_k$ **if and only if** for every real\n   $\\varepsilon > 0$\n   $$x_k > L - \\varepsilon \\ \\text{ eventually} \\qquad \\text{and} \\qquad x_k < L + \\varepsilon \\ \\text{ frequently}.$$\n\n**The hypothesis $L \\in \\mathbb{R}$ is not a restriction that can be lifted.**\nBoth conditions are stated with real $\\varepsilon$ and real $L \\pm \\varepsilon$,\nso neither has a reading at $L = \\pm\\infty$; the infinite cases are handled\ninstead by the convergence theorem later on this page. What the lemma does say\nis that whenever $\\limsup_k x_k$ happens to be a real number, it is pinned down by\nthe familiar two-sided test: nothing exceeds it by a fixed positive amount from\nsome index on, and something comes within any fixed positive amount of it\narbitrarily late.",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-liminf-le-limsup",
      "source_section": "Statement",
      "quote": "For every sequence $(x_k)$ of reals ([[def-sequence]]),\n\n$$\\liminf_{k} x_k \\;\\le\\; \\limsup_{k} x_k$$\n\nin $\\overline{\\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No\nhypothesis is placed on $(x_k)$: both sides exist for every sequence\n([[lem-limsup-exists]]) and the inequality holds between them in every case,\nincluding those in which one or both sides are $\\pm\\infty$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-convergence-iff-limsup-equals-liminf",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\limsup$ and\n$\\liminf$ as in [[def-limsup-liminf]].\n\n1. For $L \\in \\mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and\n   only if** $\\liminf_k x_k = \\limsup_k x_k = L$.\n2. $x_k \\to +\\infty$ ([[def-divergence-to-infinity]]) **if and only if**\n   $\\liminf_k x_k = \\limsup_k x_k = +\\infty$. Moreover $\\liminf_k x_k = +\\infty$\n   on its own already forces $\\limsup_k x_k = +\\infty$.\n3. $x_k \\to -\\infty$ **if and only if** $\\liminf_k x_k = \\limsup_k x_k = -\\infty$,\n   and $\\limsup_k x_k = -\\infty$ on its own already forces\n   $\\liminf_k x_k = -\\infty$.\n\nThe three clauses combine into one statement about the extended line: for\n$L \\in \\overline{\\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in\n$\\overline{\\mathbb{R}}$ ([[def-extended-limits]]) if and only if\n\n$$\\liminf_{k} x_k = \\limsup_{k} x_k = L .$$\n\nSince $\\liminf_k x_k \\le \\limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the\nsingle equation $\\liminf_k x_k = \\limsup_k x_k$ is therefore equivalent to\nconvergence in $\\overline{\\mathbb{R}}$, and the common value is the limit. A\nsequence that neither converges nor diverges to $\\pm\\infty$ is exactly one for\nwhich the inequality is strict.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]].\n\n- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k > M$ for all\n  $k \\ge K$.\n- $(x_k)$ **diverges to $-\\infty$**, written $x_k \\to -\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k < M$ for all\n  $k \\ge K$.\n\nEquivalently, in the language of [[def-sequence]]: $x_k \\to +\\infty$ when the\nproperty $x_k > M$ holds eventually, for every real $M$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-limsup-reflection",
      "source_section": "Statement",
      "quote": "Write $-A := \\{-a : a \\in A\\}$ for $A \\subseteq \\overline{\\mathbb{R}}$, with the\nreflection of [[def-extended-reals]], which fixes no point of\n$\\{-\\infty, +\\infty\\}$ but exchanges the two.\n\n1. **Reflection exchanges the extended bounds.** For every\n   $A \\subseteq \\overline{\\mathbb{R}}$,\n   $$\\sup(-A) = -\\inf A \\qquad \\text{and} \\qquad \\inf(-A) = -\\sup A,$$\n   with the bounds of [[lem-extended-reals-complete]] and no hypothesis on $A$.\n2. **Reflection exchanges $\\limsup$ and $\\liminf$.** For every sequence $(x_k)$\n   of reals ([[def-sequence]]),\n   $$\\limsup_{k}(-x_k) = -\\liminf_{k} x_k \\qquad \\text{and} \\qquad \\liminf_{k}(-x_k) = -\\limsup_{k} x_k,$$\n   with $\\limsup$ and $\\liminf$ as in [[def-limsup-liminf]].\n\nClaim 2 is what turns every statement about $\\limsup$ on this page into its dual\nabout $\\liminf$ without a second proof, exactly as the identity\n$\\inf S = -\\sup(-S)$ does in $\\mathbb{R}$. The novelty is only that the reflection\nnow has to move the two new points, and it does: $-(+\\infty) = -\\infty$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.2",
        "2.3",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L9",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-nat-linear-order",
      "source_section": "Statement",
      "quote": "The relation $\\le$ on $\\mathbb{N}$, where $m \\le n \\iff \\exists k\\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L9",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "For $m, n \\in \\mathbb{N}$, define the **order** by\n\n$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$\n\nand the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using\naddition ([[def-nat-addition]]).",
      "uses": [
        "2.2",
        "2.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Since $\\Lambda + M$ is defined, exactly one of the following three situations holds: at least one of $\\Lambda$, $M$ equals $+\\infty$, and then the other is $\\ne -\\infty$; both are real; or neither equals $+\\infty$ and at least one equals $-\\infty$. Both the hypothesis and the conclusion of claim 1 are unchanged by exchanging the two sequences, so in the third situation it may be assumed that $\\Lambda = -\\infty$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "In the first situation $\\Lambda + M = +\\infty$ by the addition table, and every element of $\\overline{\\mathbb{R}}$ is $\\le +\\infty$, so $\\limsup_k(x_k + y_k) \\le \\Lambda + M$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "In the second situation let $\\delta > 0$ be an arbitrary real, take a natural $m \\ge 1$ with $1/m < \\delta$ and put $\\varepsilon := 1/(2m) > 0$, so that $\\varepsilon + \\varepsilon = 1/m < \\delta$. By [L4] there are thresholds beyond which $x_k < \\Lambda + \\varepsilon$ and beyond which $y_k < M + \\varepsilon$; beyond the larger of them both hold, so adding the two inequalities gives $x_k + y_k < \\Lambda + M + \\varepsilon + \\varepsilon$ for all $k \\ge N$, where $N$ is that larger threshold. Hence $\\Lambda + M + \\varepsilon + \\varepsilon$ is an upper bound of the $N$-th tail range of $(x_k + y_k)$, so the $N$-th tail supremum is $\\le \\Lambda + M + \\varepsilon + \\varepsilon$, and therefore $\\limsup_k(x_k + y_k) \\le \\Lambda + M + \\varepsilon + \\varepsilon < \\Lambda + M + \\delta$.",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "L4",
        "L7",
        "L8",
        "L9"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "In the third situation, with $\\Lambda = -\\infty$, first note that there is a real $B$ with $y_k < B$ eventually: if $M$ is real, [L4] with $\\varepsilon = 1$ gives $y_k < M + 1$ eventually, so $B := M + 1$ serves; and if $M = -\\infty$ then $y_k \\to -\\infty$ by [L5], so $y_k < 0$ eventually and $B := 0$ serves. Also $\\Lambda = -\\infty$ gives $x_k \\to -\\infty$ by [L5]. Now let $c$ be an arbitrary real: since $c - B$ is real, $x_k < c - B$ eventually, and beyond the larger threshold both that and $y_k < B$ hold, so $x_k + y_k < (c - B) + B = c$ there. As $c$ was arbitrary, $x_k + y_k \\to -\\infty$, hence $\\limsup_k(x_k + y_k) = -\\infty = \\Lambda + M$ by [L5] and the addition table.",
      "step": "2.3",
      "inputs": [
        "step 1.1",
        "L3",
        "L4",
        "L5",
        "L7",
        "L9"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "In the second situation the conclusion follows from step 2.2: taking $\\delta = 1$ shows $\\limsup_k(x_k + y_k) \\le \\Lambda + M + 1$, a real number, so the left-hand side is not $+\\infty$; if it is $-\\infty$ then it is $\\le \\Lambda + M$ because $-\\infty$ is least; and if it is a real $S$ with $S > \\Lambda + M$, then $\\delta_0 := S - (\\Lambda + M) > 0$ and step 2.2 applied with $\\delta = \\delta_0$ gives $S < \\Lambda + M + \\delta_0 = S$, which is impossible. So $\\limsup_k(x_k + y_k) \\le \\Lambda + M$ by totality.",
      "step": "3.1",
      "inputs": [
        "step 2.2",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Claim 1 now holds in all three situations, by steps 2.1, 3.1 and 2.3.",
      "step": "4.1",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "step 2.3",
        "step 1.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "For claim 2, suppose $\\lambda + \\mu$ is defined. By [L6] the reflected sequences have $\\limsup_k(-x_k) = -\\lambda$ and $\\limsup_k(-y_k) = -\\mu$, and $(-\\lambda) + (-\\mu) = -(\\lambda + \\mu)$ is defined exactly when $\\lambda + \\mu$ is, by [L3]. Claim 1 applied to $(-x_k)$ and $(-y_k)$, whose termwise sum is $(-(x_k + y_k))$, therefore gives $-\\liminf_k(x_k + y_k) = \\limsup_k\\big(-(x_k+y_k)\\big) \\le (-\\lambda) + (-\\mu) = -(\\lambda + \\mu)$; reflecting this inequality reverses it into $\\liminf_k(x_k + y_k) \\ge \\lambda + \\mu$.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L3",
        "L6",
        "L7"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The thm-limsup-subadditive statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 2.3 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.2 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The thm-limsup-subadditive statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The thm-limsup-subadditive statement is not a biconditional requiring a reverse implication."
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limsup-epsilon-characterisation",
    "declared_target": "lem-limsup-epsilon-characterisation",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limsup-reflection",
    "declared_target": "lem-limsup-reflection",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-liminf-le-limsup",
    "declared_target": "lem-liminf-le-limsup",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-convergence-iff-limsup-equals-liminf",
    "declared_target": "thm-convergence-iff-limsup-equals-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-upper-bound",
    "declared_target": "def-upper-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-partial-order",
    "declared_target": "def-partial-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
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
    "source": "thm-limsup-subadditive",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "cex-limsup-subadditivity-strict",
    "declared_target": "cex-limsup-subadditivity-strict",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits-examples",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (21)

### `cex-limsup-subadditivity-strict`

````markdown
---
id: cex-limsup-subadditivity-strict
kind: counterexample
title: "$x_k = (-1)^k$, $y_k = (-1)^{k+1}$ give $\\limsup(x_k + y_k) = 0 < 2 = \\limsup x_k + \\limsup y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-limsup-additive, thm-limsup-subadditive, def-limsup-liminf, lem-alternating-sequence, def-extended-reals, def-sequence, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement refuted

That the subadditivity of [[thm-limsup-subadditive]] can be improved to an
equality: that for all sequences $(x_k)$, $(y_k)$ of reals whose limit superiors
have a defined sum,
$\limsup_k(x_k + y_k) = \limsup_k x_k + \limsup_k y_k$. The claim is recorded and
refuted as [[fs-limsup-additive]]; this item is the named witness.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]]; the sequences $x_k := s_k$ and $y_k := -s_k$, which are the families usually written $(-1)^k$ and $(-1)^{k+1}$.

[L1] For this pair of sequences: $x_k + y_k = 0$ for every $k$, $\limsup_k x_k = 1$, $\limsup_k y_k = 1$ and $\limsup_k(x_k + y_k) = 0$ ([[fs-limsup-additive]]).

[L2] Subadditivity: $\limsup_k(x_k + y_k) \le \limsup_k x_k + \limsup_k y_k$ whenever the right-hand side is defined ([[thm-limsup-subadditive]]).

[L3] Limit superior in $\overline{\mathbb{R}}$, and the fact that a sum of two real numbers is the field sum ([[def-limsup-liminf]], [[def-extended-reals]], [[def-sequence]]).

[L4] Order arithmetic: $0 < 1$, hence $0 < 1 + 1 = 2$ and $0 \ne 2$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The two sequences $x_k = s_k$ and $y_k = -s_k$ are sequences of reals whose termwise sum is constantly $0$, and their limit superiors are both the real number $1$. [given, L1, L3]

1.2 Both limit superiors being real, their sum is defined in $\overline{\mathbb{R}}$ and equals the field sum $1 + 1 = 2$. [given, L1, L3, L4]

2.1 The limit superior of the sum sequence is $0$, while the sum of the limit superiors is $2$, and $0 < 2$; so the inequality of [L2] holds here and is strict, and the equality asserted by the refuted claim fails. [step 1.1, step 1.2, L1, L2, L4] ∎

## Remarks

- **The gap is as large as the oscillation.** Each sequence oscillates between
  $-1$ and $1$, and the two oscillations are exactly out of phase, so the sum
  never sees either peak. Replacing $y$ by a sequence in phase with $x$, for
  instance $y = x$, restores equality; the failure is a statement about the
  relative phase, not about the sizes involved.

- **Both hypotheses of [[thm-limsup-subadditive]] hold here.** The two limit
  superiors are real, so their sum is defined, and no boundedness is needed for
  that theorem at all. The counterexample therefore refutes the equality on the
  theorem's own terms, not by exploiting a degenerate case.

- **The dual statement fails in the dual way.** For the same pair,
  $\liminf_k x_k = \liminf_k y_k = -1$ while $\liminf_k(x_k + y_k) = 0$, so the
  $\liminf$ inequality $\liminf_k(x_k+y_k) \ge \liminf_k x_k + \liminf_k y_k$ of
  [[thm-limsup-subadditive]] is also strict here, reading $0 \ge -2$.
````

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

### `def-partial-order`

````markdown
---
id: def-partial-order
kind: definition
title: "Partial order and partially ordered set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [def-chain-complete-poset, lem-extremal-cut-closed-under-f,
               lem-successor-of-extremal, thm-bourbaki-witt, thm-zorn,
               thm-zorn-implies-ac, fs-maximal-is-greatest]
aliases: [def-poset]
landmark: true
short: "partial order"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
pipeline_run: null
---

## Definition

Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
such that, for all $x, y, z \in P$:

- **(R)** *reflexivity*: $x \le x$;
- **(A)** *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$;
- **(T)** *transitivity*: if $x \le y$ and $y \le z$, then $x \le z$.

The pair $(P, \le)$ is a **partially ordered set**, abbreviated **poset**. When
the order is clear we write $P$ for the pair.

The associated **strict order** is defined by
$$x < y \quad :\Longleftrightarrow \quad x \le y \text{ and } x \ne y.$$

Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**.

## Remarks

- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable, which is what makes maximal elements and chains worth
  distinguishing at all. In a total order every subset is a chain, and a maximal
  element is automatically the greatest element.
- All three axioms are used essentially in the proofs that rest on this
  definition: reflexivity in [[lem-extremal-cut-closed-under-f]] and
  [[lem-successor-of-extremal]],
  transitivity almost everywhere, and antisymmetry in [[thm-bourbaki-witt]],
  where the fixed point is obtained by passing from $f(c) \le c$ and
  $c \le f(c)$ to $f(c) = c$. Antisymmetry is also what makes a least upper
  bound unique when it exists, and uniqueness is what licenses the functional
  notation $\sup$ used in [[def-chain-complete-poset]].
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered).
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the order that appears concretely in [[thm-zorn]], which applies
  [[thm-bourbaki-witt]] to the set of chains of $P$ ordered by inclusion, and in
  [[thm-zorn-implies-ac]], which applies Zorn's lemma to partial choice
  functions ordered by extension, an inclusion order on their graphs. The
  results themselves are stated for an *arbitrary* poset and are used that way:
  [[thm-zorn]] is applied to whatever poset a later page brings, and the
  refutation in
  [[fs-maximal-is-greatest]] runs in a bare two-element antichain that is not
  presented as an order by inclusion at all.
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

### `def-upper-bound`

````markdown
---
id: def-upper-bound
kind: definition
title: "Upper bound, least upper bound, and strict upper bound"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-supremum-poset]
landmark: false
short: "upper bound"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a poset ([[def-partial-order]]) and $S \subseteq P$.

An element $u \in P$ is an **upper bound** of $S$ if $s \le u$ for every
$s \in S$.

An element $u \in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$
is an upper bound of $S$ and $u \le v$ for every upper bound $v$ of $S$. When it
exists we write $u = \sup S$.

An element $u \in P$ is a **strict upper bound** of $S$ if $s < u$ for every
$s \in S$.

## Remarks

- **A least upper bound is unique when it exists.** If $u$ and $u'$ are both
  least upper bounds of $S$ then each is an upper bound and each is below the
  other, so $u \le u'$ and $u' \le u$, whence $u = u'$ by antisymmetry
  ([[def-partial-order]]). This is what makes the notation $\sup S$ legitimate.
  Antisymmetry is not peculiar to this argument: the same two-inequality step
  gives uniqueness of a greatest element ([[def-maximal-element]]), and it is
  used essentially in [[thm-bourbaki-witt]], whose fixed point is obtained by
  passing from $f(c) \le c$ and $c \le f(c)$ to $f(c) = c$. Drop antisymmetry
  and it is the conclusion, not merely the notation, that goes: on two distinct
  elements each below the other, every subset still has a least upper bound, yet
  the map exchanging the two satisfies $x \le f(x)$ and has no fixed point.
- **Every element of $P$ is an upper bound of the empty set**, vacuously.
  Consequently $\sup \emptyset$, when it exists, is the least element of $P$.
- An upper bound of $S$ need not belong to $S$, and $S$ may have many upper
  bounds and no least one. In $\mathbb{Q}$ with its usual order, the set
  $\{q \in \mathbb{Q} : q^2 < 2\}$ has upper bounds but no least upper bound.
- In a poset, a strict upper bound is exactly an upper bound outside $S$. If
  $u$ is strict then $u\notin S$, since $u<u$ is impossible. Conversely, if
  $u$ is an upper bound and $u\notin S$, then every $s\in S$ satisfies
  $s\le u$ and $s\ne u$, hence $s<u$. This distinction from an arbitrary upper
  bound matters in [[thm-zorn]], where the argument must produce one outside
  the chain.
````

### `lem-extended-reals-complete`

````markdown
---
id: lem-extended-reals-complete
kind: lemma
title: "Every subset of $\\overline{\\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\\overline{\\mathbb{R}}$, agreeing with the real supremum and infimum on nonempty sets bounded in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-reals, def-upper-bound, def-partial-order, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, def-real-order]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{\\mathbb{R}}$ is order complete"
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
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Complete lattice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_lattice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \overline{\mathbb{R}}$ be **any** subset of the extended real
line ([[def-extended-reals]]) and write $A_{\mathbb{R}} := A \cap \mathbb{R}$.
Then $A$ has a least upper bound and a greatest lower bound in
$\overline{\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write
$\sup A$ and $\inf A$ with the ambient set always $\overline{\mathbb{R}}$.
Explicitly:

- $\sup A = +\infty$ if $+\infty \in A$, or if $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$;
- $\sup A = -\infty$ if $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$;
- $\sup A$ is the real supremum $\sup A_{\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\infty \notin A$ and $A_{\mathbb{R}}$ is nonempty and bounded above in $\mathbb{R}$;

and dually, with $-\infty$ and $+\infty$ exchanged and "above" replaced by
"below", for $\inf A$ ([[def-infimum]], [[thm-infimum-property]]).

**Agreement.** If $A \subseteq \mathbb{R}$ is nonempty and bounded above in
$\mathbb{R}$ ([[def-bounded-set]]) then $\sup A$ computed in
$\overline{\mathbb{R}}$ is the real number $\sup A$ of
[[def-complete-ordered-field]]; if $A \subseteq \mathbb{R}$ is nonempty and
bounded below then $\inf A$ computed in $\overline{\mathbb{R}}$ is the real
number $\inf A$ of [[thm-infimum-property]]. In particular the notation is
unambiguous on the sets for which the real supremum and infimum are defined, and
$\sup \emptyset = -\infty$, $\inf \emptyset = +\infty$ in
$\overline{\mathbb{R}}$.

**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot
do, and it is why every $\limsup$ statement on this page holds for every sequence
rather than for bounded ones only. It is also not a weakening of the discipline
this library keeps around suprema: the operation supplied here is a *different*
operation, taken in a *different* ordered set, and the agreement clause records
exactly where the two coincide.

## Facts & Assumptions

**Given:** A subset $A \subseteq \overline{\mathbb{R}}$, and its real part $A_{\mathbb{R}} := A \cap \mathbb{R}$.

[L1] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set in which $-\infty$ is the least element and $+\infty$ the greatest, and whose order restricted to $\mathbb{R}$ is the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]], [[def-real-order]]).

[L2] Upper and lower bounds in a poset: $u$ is an upper bound of $A$ when $a \le u$ for all $a \in A$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; dually for lower bounds and greatest lower bounds. Each is unique when it exists, by antisymmetry ([[def-upper-bound]], [[def-partial-order]]).

[L3] Least-upper-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded above in $\mathbb{R}$ has a real least upper bound $\sup S$ ([[def-complete-ordered-field]]).

[L4] Greatest-lower-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded below in $\mathbb{R}$ has a real greatest lower bound $\inf S$ ([[thm-infimum-property]], [[def-infimum]]).

[L5] Bounded above and bounded below in $\mathbb{R}$ mean the existence of a real upper, respectively lower, bound ([[def-bounded-set]]).

## Proof

**Proof technique:** cases.

1.1 Case S1 for the supremum: $+\infty \in A$. [given, assume-case suptop]

1.2 Case S2 for the supremum: $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $-\infty$. [given, assume-case supbot]

1.3 Case S3 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded above in $\mathbb{R}$. [given, assume-case supfin]

1.4 Case S4 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$. [given, assume-case supunb]

1.5 Case I1 for the infimum: $-\infty \in A$. [given, assume-case infbot]

1.6 Case I2 for the infimum: $-\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $+\infty$. [given, assume-case inftop]

1.7 Case I3 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded below in $\mathbb{R}$. [given, assume-case inffin]

1.8 Case I4 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded below in $\mathbb{R}$. [given, assume-case infunb]

2.1 In case S1 the element $+\infty$ is an upper bound of $A$, being the greatest element of $\overline{\mathbb{R}}$; and if $v$ is any upper bound of $A$ then $+\infty \in A$ gives $+\infty \le v$, whence $v = +\infty$ by antisymmetry. So $+\infty$ is the least upper bound of $A$. [step 1.1, L1, L2]

2.2 In case S2 every element of $A$ equals $-\infty$, so $-\infty$ is an upper bound of $A$ by reflexivity; and $-\infty \le v$ for every $v \in \overline{\mathbb{R}}$, being the least element. So $-\infty$ is the least upper bound of $A$. [step 1.2, L1, L2]

2.3 In case S3 the real number $\sigma := \sup A_{\mathbb{R}}$ exists, and it is an upper bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence lies in $A_{\mathbb{R}}$ and satisfies $a \le \sigma$ in $\mathbb{R}$ and so in $\overline{\mathbb{R}}$, or equals $-\infty$, which is $\le \sigma$; the value $+\infty$ does not occur in $A$ in this case. [step 1.3, L1, L3]

2.4 In case S4 the element $+\infty$ is an upper bound of $A$; and if $v$ is an upper bound then $v \ne -\infty$, because fixing $a \in A_{\mathbb{R}}$, which is possible in this case, gives $a \le v$ with $a$ real and $-\infty$ is below no real, while $v$ real would make $v$ a real upper bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $v = +\infty$, and $+\infty$ is the least upper bound of $A$. [step 1.4, L1, L2, L5]

2.5 In case I1 the element $-\infty$ is a lower bound of $A$, being least; and any lower bound $w$ satisfies $w \le -\infty$ because $-\infty \in A$, whence $w = -\infty$ by antisymmetry. So $-\infty$ is the greatest lower bound of $A$. [step 1.5, L1, L2]

2.6 In case I2 every element of $A$ equals $+\infty$, so $+\infty$ is a lower bound of $A$ by reflexivity, and $w \le +\infty$ for every $w$. So $+\infty$ is the greatest lower bound of $A$. [step 1.6, L1, L2]

2.7 In case I3 the real number $\iota := \inf A_{\mathbb{R}}$ exists and is a lower bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence in $A_{\mathbb{R}}$ and $\ge \iota$, or equals $+\infty \ge \iota$; the value $-\infty$ does not occur in $A$ in this case. [step 1.7, L1, L4]

2.8 In case I4 the element $-\infty$ is a lower bound of $A$; any lower bound $w$ satisfies $w \ne +\infty$, because fixing $a \in A_{\mathbb{R}}$ gives $w \le a$ with $a$ real and $+\infty$ is above no real, while $w$ real would be a real lower bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $w = -\infty$ is the greatest lower bound of $A$. [step 1.8, L1, L2, L5]

3.1 In case S3 let $v$ be any upper bound of $A$ and fix $a \in A_{\mathbb{R}}$, which is possible since $A_{\mathbb{R}} \ne \emptyset$. From $a \le v$ with $a$ real we get $v \ne -\infty$, since $-\infty$ is below no real. If $v = +\infty$ then $\sigma \le v$ because $+\infty$ is greatest. Otherwise $v$ is real, and it bounds $A_{\mathbb{R}}$ above in $\mathbb{R}$, so $\sigma \le v$ by leastness of the real supremum. Hence $\sigma$ is the least upper bound of $A$. [step 1.3, step 2.3, L1, L2, L3]

3.2 In case I3 let $w$ be a lower bound of $A$ and fix $a \in A_{\mathbb{R}}$. From $w \le a$ with $a$ real we get $w \ne +\infty$. If $w = -\infty$ then $w \le \iota$; otherwise $w$ is real and bounds $A_{\mathbb{R}}$ below in $\mathbb{R}$, so $w \le \iota$. Hence $\iota$ is the greatest lower bound of $A$. [step 1.7, step 2.7, L1, L2, L4]

4.1 The four supremum cases are exhaustive and mutually exclusive: either $+\infty \in A$, which is S1, or not, and then either $A_{\mathbb{R}} = \emptyset$, which is S2, or $A_{\mathbb{R}} \ne \emptyset$ and it is bounded above in $\mathbb{R}$, which is S3, or it is not, which is S4. In each case a least upper bound was produced, and it is unique. The same four alternatives with $-\infty$, $+\infty$ and "below" in place of $+\infty$, $-\infty$ and "above" are I1 to I4, and in each a greatest lower bound was produced. [step 2.1, step 2.2, step 3.1, step 2.4, step 2.5, step 2.6, step 3.2, step 2.8, L2, L5, cases: a two-fold split followed by a three-fold split, cases-exhaustive]

5.1 The agreement clause follows: a nonempty $A \subseteq \mathbb{R}$ bounded above in $\mathbb{R}$ satisfies $+\infty \notin A$ and $A_{\mathbb{R}} = A$, so case S3 applies and $\sup A = \sup A_{\mathbb{R}}$ is the real supremum; a nonempty $A \subseteq \mathbb{R}$ bounded below satisfies case I3 and $\inf A$ is the real infimum; and $A = \emptyset$ falls under S2 and I2, giving $\sup \emptyset = -\infty$ and $\inf \emptyset = +\infty$. [step 2.3, step 3.1, step 2.7, step 3.2, step 4.1, L3, L4] ∎

## Remarks

- **What makes this work is that $\overline{\mathbb{R}}$ has a top and a bottom.**
  The three defining clauses of the order ([[def-extended-reals]]) put $+\infty$
  above everything and $-\infty$ below everything, and every case above is settled
  by one of those two facts or by the least-upper-bound property of $\mathbb{R}$
  applied to the real part. Nothing else about $\overline{\mathbb{R}}$ is used,
  and in particular no arithmetic is used at all.

- **The two exceptional cases of [[fs-every-set-has-sup]] are not repaired, they
  are relocated.** That false statement records that in $\mathbb{R}$ a set may
  fail to have a supremum, and it stays true; the discipline of
  [[rem-sup-conventions]], which refuses to write $\sup S = +\infty$ inside
  $\mathbb{R}$, also stays in force. What is proved here is a statement about a
  different ordered set.

- **The empty set is not an exception here, and that is the point of the
  ambient set.** In $\mathbb{R}$ the empty set has no supremum, because every
  real is an upper bound and there is no least one.
  In $\overline{\mathbb{R}}$ every element is still an upper bound of $\emptyset$,
  but now there *is* a least one, namely $-\infty$. The two statements are about
  different ordered sets and neither contradicts the other.

- **Where this is consumed.** [[def-limsup-liminf]] needs the supremum of a tail
  range of an arbitrary real sequence, which may be unbounded, and then the
  infimum of the resulting family, which may contain $+\infty$; both are supplied
  here and by nothing earlier in the library. Fourteen items on this page depend
  on it, and five more on the companion page of examples.
````

### `lem-liminf-le-limsup`

````markdown
---
id: lem-liminf-le-limsup
kind: lemma
title: "$\\liminf x_k \\le \\limsup x_k$ for every real sequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: false
short: "$\\liminf \\le \\limsup$"
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
pipeline_run: null
---

## Statement

For every sequence $(x_k)$ of reals ([[def-sequence]]),

$$\liminf_{k} x_k \;\le\; \limsup_{k} x_k$$

in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]). No
hypothesis is placed on $(x_k)$: both sides exist for every sequence
([[lem-limsup-exists]]) and the inequality holds between them in every case,
including those in which one or both sides are $\pm\infty$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, an upper bound below every upper bound and a lower bound above every lower bound respectively ([[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] Monotonicity of the tail bounds: $s_m \le s_n$ and $i_n \le i_m$ whenever $n \le m$, and $i_n \le s_n$ for every $n$; both $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] The order on $\mathbb{N}$ is total ([[def-nat-order]], [[thm-nat-linear-order]]).

[L4] The order on $\overline{\mathbb{R}}$ is transitive ([[def-extended-reals]], [[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $m, n \in \mathbb{N}$ be arbitrary. The order on $\mathbb{N}$ is total, so either $m \le n$ or $n \le m$; let $p$ be whichever of $m$ and $n$ is the larger, so that $m \le p$ and $n \le p$. [given, L3, choose]

2.1 Monotonicity of the tail bounds gives $i_m \le i_p$ and $s_p \le s_n$, and $i_p \le s_p$ holds because $T_p$ is nonempty; chaining these by transitivity yields $i_m \le s_n$. As $m$ and $n$ were arbitrary, every tail infimum is below every tail supremum. [step 1.1, L2, L4]

3.1 Fix $n \in \mathbb{N}$. By step 2.1 the element $s_n$ is an upper bound of the family $\{i_m : m \in \mathbb{N}\}$, and $\liminf_k x_k$ is its least upper bound, so $\liminf_k x_k \le s_n$. [step 2.1, L1, L2]

4.1 Since $n$ was arbitrary, $\liminf_k x_k$ is a lower bound of the family $\{s_n : n \in \mathbb{N}\}$, and $\limsup_k x_k$ is its greatest lower bound, so $\liminf_k x_k \le \limsup_k x_k$. [step 3.1, L1, L2] ∎

## Remarks

- **The inequality can be strict, and that is the interesting case.** For the
  alternating sequence the two sides are $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]). Equality is exactly convergence, in the
  extended sense: that is [[thm-convergence-iff-limsup-equals-liminf]].

- **What the proof actually uses is that the two families interleave.** Each
  $i_m$ is below each $s_n$, not merely below $s_m$, and getting that needs a
  common index $p$ beyond both, which is where totality of the order on
  $\mathbb{N}$ enters. Without that step one would only know
  $i_n \le s_n$ for each $n$, which does not by itself compare a supremum of the
  first family with an infimum of the second.

- **No completeness of $\mathbb{R}$ is used here beyond what is already inside
  [[lem-extended-reals-complete]].** The argument is pure order theory in a
  totally ordered set with a least and a greatest element.
````

### `lem-limsup-epsilon-characterisation`

````markdown
---
id: lem-limsup-epsilon-characterisation
kind: lemma
title: "For finite $L$: $L = \\limsup x_k$ iff for every $\\varepsilon > 0$ one has $x_k < L + \\varepsilon$ eventually and $x_k > L - \\varepsilon$ frequently"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-reflection, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\varepsilon$ test for $\\limsup$"
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

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$,
with *eventually* and *frequently* as in [[def-sequence]] and $\limsup$,
$\liminf$ as in [[def-limsup-liminf]].

1. $L = \limsup_{k} x_k$ **if and only if** for every real $\varepsilon > 0$
   $$x_k < L + \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k > L - \varepsilon \ \text{ frequently}.$$
2. Dually, $L = \liminf_{k} x_k$ **if and only if** for every real
   $\varepsilon > 0$
   $$x_k > L - \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k < L + \varepsilon \ \text{ frequently}.$$

**The hypothesis $L \in \mathbb{R}$ is not a restriction that can be lifted.**
Both conditions are stated with real $\varepsilon$ and real $L \pm \varepsilon$,
so neither has a reading at $L = \pm\infty$; the infinite cases are handled
instead by the convergence theorem later on this page. What the lemma does say
is that whenever $\limsup_k x_k$ happens to be a real number, it is pinned down by
the familiar two-sided test: nothing exceeds it by a fixed positive amount from
some index on, and something comes within any fixed positive amount of it
arbitrarily late.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real number $L$, the tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] $\Lambda$ and every $s_n$ exist in $\overline{\mathbb{R}}$ for every sequence, and $\Lambda$ is the greatest lower bound of $\{s_n\}$ while $s_n$ is the least upper bound of $T_n$ ([[lem-extended-reals-complete]], [[lem-limsup-exists]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; and every real number is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property $P$ of indices holds *eventually* when it holds for all $k \ge K$ for some $K$, and *frequently* when for every $K$ it holds for some $k \ge K$ ([[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$: for $\varepsilon > 0$ one has $L - \varepsilon < L < L + \varepsilon$, and $a < b$ if and only if $-b < -a$, both by translation invariance; the order is total, so exactly one of $a < b$, $a = b$, $b < a$ holds and $a < a$ is impossible ([[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Reflection exchanges the two quantities: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L = \Lambda$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For the converse implication of claim 1, assume that for every real $\varepsilon > 0$ the sequence satisfies $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently. [assume-hyp, L3]

2.1 Under the assumption of step 1.1, $L + \varepsilon > L = \Lambda$, so $L + \varepsilon$ is not a lower bound of $\{s_n\}$, since $\Lambda$ is the greatest lower bound; by totality there is $n$ with $s_n < L + \varepsilon$. For every $k \ge n$ we have $x_k \le s_n$, hence $x_k < L + \varepsilon$; so $x_k < L + \varepsilon$ eventually. [step 1.1, L1, L2, L3, L5]

2.2 Under the assumption of step 1.1, fix $n \in \mathbb{N}$. Then $\Lambda \le s_n$ because $\Lambda$ is a lower bound of $\{s_n\}$, and $L - \varepsilon < L = \Lambda$, so $L - \varepsilon < s_n$. Hence $L - \varepsilon$ is not an upper bound of $T_n$, for an upper bound $u$ of $T_n$ satisfies $s_n \le u$; by totality of the order on $\mathbb{R}$ there is therefore $k \ge n$ with $x_k > L - \varepsilon$. As $n$ was arbitrary, $x_k > L - \varepsilon$ frequently. [step 1.1, L1, L2, L3, L5]

2.3 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and take $N$ with $x_k < L + \varepsilon$ for all $k \ge N$. Then $L + \varepsilon$ is an upper bound of $T_N$, so $s_N \le L + \varepsilon$ by leastness, and $\Lambda \le s_N$ because $\Lambda$ is a lower bound of $\{s_n\}$; hence $\Lambda \le L + \varepsilon$. [step 1.2, L1, L2, L3]

2.4 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and fix $n$. There is $k \ge n$ with $x_k > L - \varepsilon$, and $x_k \le s_n$, so $L - \varepsilon < s_n$ and in particular $L - \varepsilon \le s_n$. As $n$ was arbitrary, $L - \varepsilon$ is a lower bound of $\{s_n\}$, so $L - \varepsilon \le \Lambda$ by greatest-lower-boundedness. [step 1.2, L1, L2, L3]

3.1 Taking $\varepsilon = 1$ in steps 2.3 and 2.4 gives $L - 1 \le \Lambda \le L + 1$ with $L \pm 1$ real, so $\Lambda$ is neither $+\infty$ nor $-\infty$ and is therefore a real number. Suppose $\Lambda > L$ and put $\delta := \Lambda - L > 0$; choosing a natural $m \ge 1$ with $1/m < \delta$ and applying step 2.3 with $\varepsilon = 1/m$ gives $\Lambda \le L + 1/m < L + \delta = \Lambda$, which is impossible. Suppose instead $\Lambda < L$ and put $\delta := L - \Lambda > 0$; choosing $m \ge 1$ with $1/m < \delta$ and applying step 2.4 with $\varepsilon = 1/m$ gives $L - 1/m \le \Lambda$, that is $\delta = L - \Lambda \le 1/m < \delta$, again impossible. By trichotomy $\Lambda = L$. [step 2.3, step 2.4, L2, L4, L5]

4.1 Steps 2.1 and 2.2 prove the forward implication of claim 1 and step 3.1 proves its converse, so claim 1 holds. [step 2.1, step 2.2, step 3.1]

5.1 For claim 2, note that $L = \liminf_k x_k$ holds exactly when $-L = -\liminf_k x_k = \limsup_k(-x_k)$, since negation is injective on $\overline{\mathbb{R}}$. Applying claim 1 to the sequence $(-x_k)$ and the real number $-L$, that holds exactly when for every real $\varepsilon > 0$ one has $-x_k < -L + \varepsilon$ eventually and $-x_k > -L - \varepsilon$ frequently. Negating each of the two inequalities reverses it, turning them into $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently, which is claim 2. [step 4.1, L5, L6] ∎

## Remarks

- **The two halves are not interchangeable.** "Eventually below $L + \varepsilon$"
  says $L$ is not exceeded in the long run; "frequently above $L - \varepsilon$"
  says $L$ is approached again and again. Weakening the first to *frequently*
  would make the condition hold for $L = \liminf$ as well, and strengthening the
  second to *eventually* would force convergence, which is exactly the extra
  content of [[thm-convergence-iff-limsup-equals-liminf]].

- **Real $\varepsilon$ is used throughout, and no rational test is involved.**
  Neither condition is a convergence statement, so [[def-real-limit]] and its
  quantification over rational $\varepsilon$ do not enter. Where a convergence
  hypothesis has to be fed into this lemma, as in
  [[thm-convergence-iff-limsup-equals-liminf]], the passage between rational and
  real $\varepsilon$ is made there, by the sanctioned remark of [[def-sequence]].

- **Why the epsilon lemmas for the real supremum are not cited.**
  [[lem-sup-epsilon]] and [[lem-inf-epsilon]] characterise the *real* supremum and
  infimum of a nonempty set bounded on the relevant side. Here $s_n$ may be
  $+\infty$ and the family $\{s_n\}$ may be unbounded below in $\mathbb{R}$, so
  neither lemma applies to the sets actually in play; the corresponding steps
  above are made directly from the least-upper-bound and greatest-lower-bound
  properties in $\overline{\mathbb{R}}$ ([[lem-extended-reals-complete]]), which
  need no hypothesis.

- **The Archimedean property is what closes the converse.** Steps 2.3 and 2.4
  give $L - \varepsilon \le \Lambda \le L + \varepsilon$ for every positive real
  $\varepsilon$, and passing from that to $\Lambda = L$ needs a positive real
  strictly below any prescribed positive gap; [[cor-archimedean-reciprocal]]
  supplies $1/m$.
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

### `lem-limsup-reflection`

````markdown
---
id: lem-limsup-reflection
kind: lemma
title: "$\\limsup(-x_k) = -\\liminf(x_k)$, with the reflection of $\\overline{\\mathbb{R}}$ exchanging $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence]
justified_by: []
aliases: []
landmark: false
short: "$\\limsup(-x)=-\\liminf x$"
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Boyle, Liminf and limsup notes"
      url: "https://www.math.umd.edu/~mboyle/courses/410f12/liminf.pdf"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
pipeline_run: null
---

## Statement

Write $-A := \{-a : a \in A\}$ for $A \subseteq \overline{\mathbb{R}}$, with the
reflection of [[def-extended-reals]], which fixes no point of
$\{-\infty, +\infty\}$ but exchanges the two.

1. **Reflection exchanges the extended bounds.** For every
   $A \subseteq \overline{\mathbb{R}}$,
   $$\sup(-A) = -\inf A \qquad \text{and} \qquad \inf(-A) = -\sup A,$$
   with the bounds of [[lem-extended-reals-complete]] and no hypothesis on $A$.
2. **Reflection exchanges $\limsup$ and $\liminf$.** For every sequence $(x_k)$
   of reals ([[def-sequence]]),
   $$\limsup_{k}(-x_k) = -\liminf_{k} x_k \qquad \text{and} \qquad \liminf_{k}(-x_k) = -\limsup_{k} x_k,$$
   with $\limsup$ and $\liminf$ as in [[def-limsup-liminf]].

Claim 2 is what turns every statement about $\limsup$ on this page into its dual
about $\liminf$ without a second proof, exactly as the identity
$\inf S = -\sup(-S)$ does in $\mathbb{R}$. The novelty is only that the reflection
now has to move the two new points, and it does: $-(+\infty) = -\infty$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, the reflected sequence $y_k := -x_k$, and for $A \subseteq \overline{\mathbb{R}}$ the reflected set $-A = \{-a : a \in A\}$.

[L1] Reflection on $\overline{\mathbb{R}}$: the map $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$, for all $a, b \in \overline{\mathbb{R}}$ ([[def-extended-reals]]).

[L2] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L3] Least upper bound and greatest lower bound in a poset, and their uniqueness ([[def-upper-bound]], [[def-partial-order]]).

[L4] Tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L5] All four families exist for every sequence ([[lem-limsup-exists]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq \overline{\mathbb{R}}$ be arbitrary. Since $-(-a) = a$ for every $a$, the map $a \mapsto -a$ carries $A$ onto $-A$ and $-A$ onto $A$, so $-(-A) = A$; and by [L2] each of $\sup A$, $\inf A$, $\sup(-A)$, $\inf(-A)$ exists. [given, L1, L2]

1.2 Let $T_n$ and $T'_n$ be the tail ranges of $(x_k)$ and of $(y_k) = (-x_k)$. Since $y_k = -x_k$, the set $T'_n = \{y_k : k \ge n\}$ is exactly $-T_n$. [given, L4]

2.1 The element $-\inf A$ is an upper bound of $-A$: for $a \in A$ we have $\inf A \le a$, hence $-a \le -\inf A$ by [L1], and every element of $-A$ is such a $-a$. If $v$ is any upper bound of $-A$, then for $a \in A$ we get $-a \le v$, hence $-v \le a$ by [L1], so $-v$ is a lower bound of $A$ and therefore $-v \le \inf A$, which gives $-\inf A \le v$ by [L1] again. So $-\inf A$ is the least upper bound of $-A$, that is $\sup(-A) = -\inf A$. [step 1.1, L1, L2, L3]

3.1 Applying the identity just proved to the set $-A$ in place of $A$, and using $-(-A) = A$, gives $\sup A = -\inf(-A)$; reflecting both sides and using $-(-a) = a$ yields $\inf(-A) = -\sup A$. Claim 1 is proved. [step 2.1, step 1.1, L1]

4.1 By claim 1 applied to $T_n$, the $n$-th tail supremum of $(y_k)$ is $\sup T'_n = \sup(-T_n) = -i_n$, and its $n$-th tail infimum is $\inf(-T_n) = -s_n$. [step 1.2, step 2.1, step 3.1, L4]

5.1 Hence the family of tail suprema of $(y_k)$ is $\{-i_n : n \in \mathbb{N}\} = -\{i_n : n \in \mathbb{N}\}$, so claim 1 applied to $\{i_n\}$ gives $\limsup_k(-x_k) = \inf\big(-\{i_n\}\big) = -\sup\{i_n\} = -\liminf_k x_k$. [step 4.1, step 3.1, L4, L5]

6.1 The same identity applied to the sequence $(y_k)$, whose reflection is $(-y_k) = (x_k)$ by [L1], reads $\limsup_k x_k = -\liminf_k(-x_k)$; reflecting both sides gives $\liminf_k(-x_k) = -\limsup_k x_k$. Both parts of claim 2 are proved. [step 5.1, L1] ∎

## Remarks

- **Claim 1 needs no hypothesis, and that is the whole gain over $\mathbb{R}$.**
  The corresponding real statement, $\inf S = -\sup(-S)$
  ([[thm-infimum-property]]), carries the hypotheses that $S$ be nonempty and
  bounded below, because otherwise neither side denotes anything. Here both sides
  always denote, so the identity is unconditional and can be applied to the family
  $\{i_n\}$ without first checking that it is bounded, which for an unbounded
  sequence it is not.

- **The reflection is an order anti-isomorphism, not merely a bijection.** What
  step 2.1 uses is that $a \mapsto -a$ is a bijection *and* reverses the order,
  both recorded in [[def-extended-reals]]. A bijection alone would not exchange
  bounds, and an order-reversing map that is not injective would not carry least
  upper bounds to greatest lower bounds.

- **Consequences on this page.** [[cor-liminf-is-least-subsequential-limit]] is
  [[thm-limsup-is-greatest-subsequential-limit]] read through this lemma, the
  $\liminf$ half of [[thm-limsup-subadditive]] is its $\limsup$ half read the same
  way, and the $-\infty$ case of
  [[thm-convergence-iff-limsup-equals-liminf]] is its $+\infty$ case.
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

### `lem-sup-sum`

````markdown
---
id: lem-sup-sum
kind: lemma
title: "Supremum of a sumset: $\\sup(S + T) = \\sup S + \\sup T$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-epsilon, lem-of-add-order, def-complete-ordered-field, cor-of-one-positive, lem-of-sign-rules, def-field, def-ordered-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Peter J. Olver, Continuous Calculus"
      url: "https://www-users.cse.umn.edu/~olver/ln_/cc.pdf"
pipeline_run: null
---

## Statement

Let $S, T \subseteq \mathbb{R}$ be nonempty and bounded above, and write
$S + T := \{s + t : s \in S,\ t \in T\}$. Then $S + T$ is nonempty and bounded
above, and

$$\sup(S + T) = \sup S + \sup T.$$

## Facts & Assumptions

**Given:** Nonempty sets $S, T \subseteq \mathbb{R}$, both bounded above, and the sumset $S + T = \{s + t : s \in S,\ t \in T\}$.

[L1] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $w$ of $X$, one has $w = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $w - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L2] Order and addition: strict inequalities translate and add, that is $x < y$ implies $x + c < y + c$, and $x < y$ together with $z < w$ gives $x + z < y + w$ (claims 1 and 2 of [[lem-of-add-order]]). Adjoining the case of equality, in which both sides move by the same amount, gives the nonstrict forms used below: $x \le y$ implies $x + c \le y + c$, and $x \le y$ together with $z \le w$ gives $x + z \le y + w$.

[L3] Supremum and the least-upper-bound property: $w = \sup X$ means $w$ is an upper bound of $X$ with $w \le w'$ for every upper bound $w'$ of $X$, and every nonempty $X \subseteq \mathbb{R}$ bounded above has such a $w$ ([[def-complete-ordered-field]]).

[L4] Halving: $0 < 1$ ([[cor-of-one-positive]]); the positives are closed under addition, so $2 := 1 + 1 > 0$, and by trichotomy a positive element is nonzero, so $2 \ne 0$ (axioms O2 and O1 of [[def-ordered-field]]); hence $2^{-1}$ exists ([[def-field]]) and $0 \cdot 2 = 0$ ([[lem-of-zero-mult]]); and for the positive multiplier $2$ one has $x < y$ if and only if $x \cdot 2 < y \cdot 2$ (claim 4 of [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 Both $S$ and $T$ are nonempty and bounded above, so the least-upper-bound property supplies $u := \sup S$ and $v := \sup T$, upper bounds of $S$ and of $T$ respectively. [given, L3]

1.2 The sumset $S + T$ is nonempty: picking $s \in S$ and $t \in T$, which is possible since both sets are nonempty, gives $s + t \in S + T$. [given]

2.1 For $s \in S$ and $t \in T$ we have $s \le u$ and $t \le v$, and adding these inequalities gives $s + t \le u + v$; since every element of $S + T$ has this form, $u + v$ is an upper bound of $S + T$, so $S + T$ is bounded above. [step 1.1, L2]

2.2 Let $\varepsilon > 0$ and put $\eta := \varepsilon \cdot 2^{-1}$, so that $\eta \cdot 2 = \varepsilon$ and $\eta + \eta = \eta(1 + 1) = \varepsilon$; from $0 \cdot 2 = 0 < \varepsilon = \eta \cdot 2$ and $2 > 0$ we get $\eta > 0$, so the epsilon characterisation applied to $S$ with $u$ and to $T$ with $v$ produces $s \in S$ with $u - \eta < s$ and $t \in T$ with $v - \eta < t$, and adding these strict inequalities gives $(u + v) - \varepsilon = (u - \eta) + (v - \eta) < s + t$, an element of $S + T$. [step 1.1, L1, L2, L4, algebra]

3.1 The set $S + T$ is nonempty and bounded above, so $\sup(S + T)$ exists. [step 1.2, step 2.1, L3]

4.1 Now $u + v$ is an upper bound of $S + T$ and for every $\varepsilon > 0$ some element of $S + T$ exceeds $(u + v) - \varepsilon$, so the epsilon characterisation applied to $S + T$ gives $\sup(S + T) = u + v = \sup S + \sup T$. [step 2.1, step 2.2, step 3.1, L1] ∎

## Remarks

- The inequality $\sup(S + T) \le \sup S + \sup T$ is the easy half and needs only that $u + v$ bounds $S + T$; the content is the reverse inequality, and the halving of $\varepsilon$ is what lets two separate approximations be combined without overshooting.
- The corresponding statement for infima, $\inf(S + T) = \inf S + \inf T$ for nonempty $S, T$ bounded below, follows by reflection ([[lem-reflection]], [[thm-infimum-property]]), since $-(S + T) = (-S) + (-T)$.
- No analogue holds for products in general: sign changes break the argument, and $\sup(ST)$ is not determined by $\sup S$ and $\sup T$ alone.
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

