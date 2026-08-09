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

- critical risk (12): 23 declared dependencies; 25 cited facts; 8 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language
- Wave 7 ai-generated statement seed
- pending genrisk seed (cone 4)
- direct-citation consumer of pending genrisk seed ex-x-times-psi-tends-to-zero
- direct-citation consumer of pending genrisk seed rem-classical-oscillator-is-sine-of-one-over-x

## Target item — `cex-psi-of-one-over-x-has-no-limit-at-zero`

Normalized current SHA-256: `1d76c9174b5da0497a7246774b5f04d3296cbabce8a3ac266cad227f46868ab4`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-psi-of-one-over-x-has-no-limit-at-zero
kind: counterexample
title: "$\\psi(1/x)$ has no limit at $0$: two sequences tending to $0$ give values constantly $0$ and constantly $1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-distance-to-the-integers, cor-sequential-criterion-for-nonexistence, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, def-natural-numbers, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, thm-int-comm-ring, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\psi(1/x)$ has no limit at $0$"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function

$$\Phi : \mathbb{R} \setminus \{0\} \to \mathbb{R}, \qquad \Phi(x) := \psi(1/x) ,$$

with $\psi$ the distance to the integers ([[ex-distance-to-the-integers]]), has a
limit at $0$ ([[def-function-limit]]).

$\Phi$ is bounded — $0 \le \Phi(x) \le 1/2$ for every $x \ne 0$, by claim 2 of
[[ex-distance-to-the-integers]] — and $0$ is a limit point of its domain, so
every hypothesis that might plausibly deliver a limit except the limit itself is
present. Boundedness near a point is therefore **not** sufficient for a limit to
exist, and the converse of [[lem-limit-implies-local-boundedness]] fails.

The refutation exhibits two sequences of positive reals tending to $0$ along
which $\Phi$ is constantly $0$ and constantly $1/2$, and applies
[[cor-sequential-criterion-for-nonexistence]].

## Facts & Assumptions

**Given:** The function $\Phi(x) = \psi(1/x)$ on $\mathbb{R} \setminus \{0\}$, and the sequences $x_k := 1/(k+1)$ and $y_k := 2/(2k+1)$ for $k \in \mathbb{N}$. Sequences are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]], [[def-natural-numbers]]), so the first terms are $x_0 = 1$ and $y_0 = 2$; the denominators $k+1$ and $2k+1$ are canonical naturals $\ge 1$, never $0$, which is why the sequences are written this way and not as $1/k$.

[L1] The function $\psi$ vanishes exactly on $\mathbb{Z}$, satisfies $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$, and takes values in $[0,1/2]$ ([[ex-distance-to-the-integers]], claims 2, 3 and 4).

[L2] Nonexistence criterion: if two sequences with all terms in $A \setminus \{c\}$ converge to $c$ while the image sequences converge to distinct reals, then $f$ has no limit at $c$ ([[cor-sequential-criterion-for-nonexistence]]).

[L3] Sequential convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]). Testing against every positive real rather than every positive rational defines the same relation ([[lem-rat-embeds-dense]], remarks of [[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); and $0 < a < b$ gives $0 < 1/b < 1/a$, with the non-strict form following by adjoining equality ([[lem-of-inverse-positive]]).

[L5] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Absolute value ([[lem-of-abs-value]]); order and field arithmetic: $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $1/2 \ne 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-field]], [[def-ordered-field]]).

[L7] Integers in $\mathbb{R}$: every canonical natural is an integer, and $\mathbb{Z}$ is closed under adding $1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-comm-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 $0$ is a limit point of $\mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ is positive, hence lies in $\mathbb{R} \setminus \{0\}$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L5, L6]

1.2 For every $k \in \mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \ge 1 > 0$ and $2k + 1 \ge 1 > 0$; in particular $x_k \ne 0$ and $y_k \ne 0$, so both sequences have all their terms in $\mathbb{R} \setminus \{0\}$, which equals $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$. [L4, L6, L7]

1.3 The reals $0$ and $1/2$ are distinct, since $1/2 > 0$. [L6]

2.1 $x_k \to 0$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$; every $k \ge n$ has $k + 1 > n \ge 1$, hence $|x_k - 0| = 1/(k+1) < 1/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.2 $y_k \to 0$: for every $k \in \mathbb{N}$ we have $2k + 1 \ge k + 1$, since their difference is $k \ge 0$, so $0 < y_k = 2/(2k+1) \le 2/(k+1)$. Given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon/2$; every $k \ge n$ has $k + 1 > n$, hence $|y_k - 0| \le 2/(k+1) < 2/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.3 $\Phi(x_k) = 0$ for every $k$: $1/x_k = k + 1$, a canonical natural and hence an integer by [L7], so $\psi(1/x_k) = 0$ by [L1]. The image sequence is therefore the constant sequence $0$ and converges to $0$. [step 1.2, L1, L3, L7]

2.4 $\Phi(y_k) = 1/2$ for every $k$: $1/y_k = (2k+1)/2 = k + 1/2$ with $k$ an integer by [L7], so $\psi(1/y_k) = 1/2$ by [L1]. The image sequence is therefore the constant sequence $1/2$ and converges to $1/2$. [step 1.2, L1, L3, L6, L7]

3.1 So $(x_k)$ and $(y_k)$ have all their terms in $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$ and both converge to $0$, which is a limit point of $\mathbb{R} \setminus \{0\}$, while the image sequences converge to the distinct reals $0$ and $1/2$. By [L2], $\Phi$ has no limit at $0$. [step 1.1, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, L2] ∎

## Remarks

- **Both witnessing sequences have positive terms**, so what is refuted is already the existence of the *right-hand* limit $\lim_{x \to 0^{+}} \Phi(x)$ ([[def-one-sided-limits]]), and the two-sided failure follows. The contrast with the sign function on this page is exact: there both one-sided limits exist and merely disagree.

- **Why $1/(k+1)$ and $2/(2k+1)$.** They are the sequences whose reciprocals are $k+1$ and $k + 1/2$, that is, the integers and the half-integers, which are precisely the two sets on which claims 3 and 4 of [[ex-distance-to-the-integers]] evaluate $\psi$ exactly. Writing $1/k$ instead would be undefined at the index $k = 0$, since $\mathbb{N}$ contains $0$ ([[def-sequence]]).

- **Multiplying by $x$ repairs it.** The function $x \mapsto x\,\psi(1/x)$ does have a limit at $0$, namely $0$, by the squeeze theorem ([[ex-x-times-psi-tends-to-zero]]). The oscillation is unchanged; what changes is that its amplitude is forced to $0$.

- **The classical form of this counterexample** uses $\sin(1/x)$ in place of $\psi(1/x)$; [[rem-classical-oscillator-is-sine-of-one-over-x]] records why this library cannot yet write it.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Positive novelty determination: the exact local oscillator psi(1/x) and the paired sequences 1/(k+1), 2/(2k+1) are a bespoke construction tied to the preceding psi example. Their images are directly constant 0 and 1/2.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "ex-distance-to-the-integers",
      "source_section": "Example",
      "quote": "Identify $\\mathbb{Z}$ with its canonical copy in $\\mathbb{R}$\n([[def-integers]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]) and for\n$x \\in \\mathbb{R}$ put\n\n$$D(x) \\;:=\\; \\{\\, |x - n| \\ : \\ n \\in \\mathbb{Z} \\,\\}, \\qquad \\psi(x) \\;:=\\; \\inf D(x)$$\n\n([[def-infimum]]). Write $m := \\lfloor x \\rfloor$ for the integer part of $x$\n([[lem-integer-part]]) and $t := x - m$, so $0 \\le t < 1$. Then:\n\n1. **Existence and attainment.** $\\psi(x)$ exists and is **attained**:\n   $$\\psi(x) \\;=\\; \\min\\{\\, t,\\ 1 - t \\,\\} \\;=\\; \\min\\bigl\\{\\, |x - m|,\\ |x - (m+1)| \\,\\bigr\\} ,$$\n   so $\\psi(x) = |x - n|$ for $n = m$ or $n = m + 1$, and $\\psi(x) = \\min D(x)$\n   ([[def-max-min]]).\n2. **Range.** $0 \\le \\psi(x) \\le 1/2$ for every real $x$, and every value in\n   $[0, 1/2]$ occurs: the range of $\\psi$ is exactly the interval $[0, 1/2]$\n   ([[def-interval]]).\n3. **Zero set.** $\\psi(x) = 0$ if and only if $x \\in \\mathbb{Z}$.\n4. **Half-integers.** $\\psi(m + 1/2) = 1/2$ for every $m \\in \\mathbb{Z}$.\n5. **Periodicity.** $\\psi(x + 1) = \\psi(x)$ for every real $x$.\n\n**What this function is for.** It is the elementary, trigonometry-free\nsubstitute for $\\sin$: it is bounded, it oscillates, and on every punctured\nneighbourhood of $0$ the composite $\\psi(1/x)$ attains both the value $0$ and the\nvalue $1/2$. Claims 3 and 4 are exactly what the companion counterexample\n[[cex-psi-of-one-over-x-has-no-limit-at-zero]] evaluates, and claim 2 is what the\nsqueeze argument of [[ex-x-times-psi-tends-to-zero]] uses.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-sequential-criterion-for-nonexistence",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c$ be a limit\npoint of $A$ ([[def-limit-point-r]]). Then $f$ has **no** limit at $c$ — that\nis, no $L \\in \\mathbb{R}$ satisfies $\\lim_{x \\to c} f(x) = L$\n([[def-function-limit]]) — as soon as either of the following occurs.\n\n1. There are sequences $(x_k)$ and $(y_k)$ with all terms in $A \\setminus \\{c\\}$,\n   both converging to $c$, and reals $P \\ne Q$ with $f(x_k) \\to P$ and\n   $f(y_k) \\to Q$ ([[def-sequence]], [[def-real-limit]]).\n2. There is a sequence $(x_k)$ with all terms in $A \\setminus \\{c\\}$, converging\n   to $c$, for which $(f(x_k))$ does not converge.\n\n**Only the choice-free half of the Heine criterion is used.** The proof runs the\nimplication from condition 1 to condition 2 of\n[[thm-sequential-criterion-for-function-limits]], which is a theorem of ZF; no\nsequence is constructed here, both being supplied by the hypothesis. So this\ncorollary, the workhorse for showing that a limit fails to exist, costs no\nchoice principle at all.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L6",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "def-integers",
      "source_section": "Definition",
      "quote": "On the set $\\mathbb{N} \\times \\mathbb{N}$ of pairs of natural numbers, define\n\n$$(a,b) \\sim (c,d) \\iff a + d = b + c.$$\n\nThis is an equivalence relation ([[lem-int-equivalence]]). The **integers** are\nthe quotient\n\n$$\\mathbb{Z} := (\\mathbb{N} \\times \\mathbb{N}) / \\sim,$$\n\nand we write $[(a,b)]$ for the equivalence class of $(a,b)$.",
      "uses": [
        "1.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-nat-embeds-int",
      "source_section": "Statement",
      "quote": "The map $\\iota(n) = [(n,0)]$ is injective and preserves addition,\nmultiplication, and order. Its image is exactly the set of nonnegative\nintegers, so every $x \\ge 0$ in $\\mathbb{Z}$ is $\\iota(k)$ for a unique\nnatural $k$.",
      "uses": [
        "1.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-int-embeds-rat",
      "source_section": "Statement",
      "quote": "The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,\nand order. Composing with [[lem-nat-embeds-int]] embeds $\\mathbb{N}$ in\n$\\mathbb{Q}$; we write $k$ for $j(k)$ throughout.",
      "uses": [
        "1.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.2",
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-int-comm-ring",
      "source_section": "Statement",
      "quote": "$(\\mathbb{Z}, +, \\cdot, 0, 1)$ with the operations of [[def-int-operations]] is\na commutative ring with multiplicative identity, in which every element has the\nadditive inverse $-[(a,b)] = [(b,a)]$.",
      "uses": [
        "1.2",
        "2.3",
        "2.4"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$0$ is a limit point of $\\mathbb{R} \\setminus \\{0\\}$: given a real $\\varepsilon > 0$, the real $\\varepsilon/2$ is positive, hence lies in $\\mathbb{R} \\setminus \\{0\\}$, and $0 < |\\varepsilon/2 - 0| = \\varepsilon/2 < \\varepsilon$.",
      "step": "1.1",
      "inputs": [
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For every $k \\in \\mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \\ge 1 > 0$ and $2k + 1 \\ge 1 > 0$; in particular $x_k \\ne 0$ and $y_k \\ne 0$, so both sequences have all their terms in $\\mathbb{R} \\setminus \\{0\\}$, which equals $(\\mathbb{R} \\setminus \\{0\\}) \\setminus \\{0\\}$.",
      "step": "1.2",
      "inputs": [
        "L4",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "The reals $0$ and $1/2$ are distinct, since $1/2 > 0$.",
      "step": "1.3",
      "inputs": [
        "L6"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "$x_k \\to 0$: given a real $\\varepsilon > 0$, [L4] supplies a natural $n \\ge 1$ with $1/n < \\varepsilon$; every $k \\ge n$ has $k + 1 > n \\ge 1$, hence $|x_k - 0| = 1/(k+1) < 1/n < \\varepsilon$.",
      "step": "2.1",
      "inputs": [
        "L4",
        "1.2",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "$y_k \\to 0$: for every $k \\in \\mathbb{N}$ we have $2k + 1 \\ge k + 1$, since their difference is $k \\ge 0$, so $0 < y_k = 2/(2k+1) \\le 2/(k+1)$. Given a real $\\varepsilon > 0$, [L4] supplies a natural $n \\ge 1$ with $1/n < \\varepsilon/2$; every $k \\ge n$ has $k + 1 > n$, hence $|y_k - 0| \\le 2/(k+1) < 2/n < \\varepsilon$.",
      "step": "2.2",
      "inputs": [
        "L4",
        "1.2",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "$\\Phi(x_k) = 0$ for every $k$: $1/x_k = k + 1$, a canonical natural and hence an integer by [L7], so $\\psi(1/x_k) = 0$ by [L1]. The image sequence is therefore the constant sequence $0$ and converges to $0$.",
      "step": "2.3",
      "inputs": [
        "L7",
        "L1",
        "1.2",
        "L3"
      ]
    },
    {
      "id": "step-2-4",
      "claim": "$\\Phi(y_k) = 1/2$ for every $k$: $1/y_k = (2k+1)/2 = k + 1/2$ with $k$ an integer by [L7], so $\\psi(1/y_k) = 1/2$ by [L1]. The image sequence is therefore the constant sequence $1/2$ and converges to $1/2$.",
      "step": "2.4",
      "inputs": [
        "L7",
        "L1",
        "1.2",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "So $(x_k)$ and $(y_k)$ have all their terms in $(\\mathbb{R} \\setminus \\{0\\}) \\setminus \\{0\\}$ and both converge to $0$, which is a limit point of $\\mathbb{R} \\setminus \\{0\\}$, while the image sequences converge to the distinct reals $0$ and $1/2$. By [L2], $\\Phi$ has no limit at $0$.",
      "step": "3.1",
      "inputs": [
        "L2",
        "1.1",
        "1.3",
        "2.1",
        "2.2",
        "2.3",
        "2.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: $0$ is a limit point of $\\mathbb{R} \\setminus \\{0\\}$: given a real $\\varepsilon > 0$, the real $\\varepsilon/2$ is positive, hence lies in $\\mathbb{R} \\setminus \\{0\\}$, and $0 < |\\varepsilon/2 - 0| = \\varepsilon/2 < \\varepsilon$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.2: For every $k \\in \\mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \\ge 1 > 0$ and $2k + 1 \\ge 1 > 0$; in particular $x_k \\ne 0$ and $y_k \\ne 0$, so both sequences have all their terms in $\\mathbb{R} \\setminus \\{0"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.2: For every $k \\in \\mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \\ge 1 > 0$ and $2k + 1 \\ge 1 > 0$; in particular $x_k \\ne 0$ and $y_k \\ne 0$, so both sequences have all their terms in $\\mathbb{R} \\setminus \\{0"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1, step 2.2: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; it is a one-directional result, example, or refutation."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; no reverse implication is asserted."
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-distance-to-the-integers",
    "declared_target": "ex-distance-to-the-integers",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cor-sequential-criterion-for-nonexistence",
    "declared_target": "cor-sequential-criterion-for-nonexistence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-natural-numbers",
    "declared_target": "def-natural-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-integers",
    "declared_target": "def-integers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-nat-embeds-int",
    "declared_target": "lem-nat-embeds-int",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-int-embeds-rat",
    "declared_target": "lem-int-embeds-rat",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-int-comm-ring",
    "declared_target": "thm-int-comm-ring",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
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
[
  {
    "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "file": "items/cex-psi-of-one-over-x-has-no-limit-at-zero.md",
    "source": "provenance",
    "cone_size": 4,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "ex-distance-to-the-integers",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-one-sided-limits-of-the-sign-function",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-psi-tends-to-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-classical-oscillator-is-sine-of-one-over-x",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  },
  {
    "id": "ex-x-times-psi-tends-to-zero",
    "file": "items/ex-x-times-psi-tends-to-zero.md",
    "source": "provenance",
    "cone_size": 4,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-distance-to-the-integers",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-dirichlet-has-a-limit-only-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-classical-oscillator-is-sine-of-one-over-x",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  },
  {
    "id": "rem-classical-oscillator-is-sine-of-one-over-x",
    "file": "items/rem-classical-oscillator-is-sine-of-one-over-x.md",
    "source": "provenance",
    "cone_size": 2,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-psi-tends-to-zero",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (27)

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

### `cor-sequential-criterion-for-nonexistence`

````markdown
---
id: cor-sequential-criterion-for-nonexistence
kind: corollary
title: "A function has no limit at $c$ as soon as two sequences in $A \\setminus \\{c\\}$ tending to $c$ give different limits of the values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sequential-criterion-for-function-limits, def-function-limit, def-limit-point-r, def-sequence, def-real-limit, lem-limit-unique]
justified_by: []
aliases: [cor-divergence-test-for-function-limits]
landmark: true
short: "sequential test for no limit"
proof_strategy: contrapositive
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Cor. to Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c$ be a limit
point of $A$ ([[def-limit-point-r]]). Then $f$ has **no** limit at $c$ — that
is, no $L \in \mathbb{R}$ satisfies $\lim_{x \to c} f(x) = L$
([[def-function-limit]]) — as soon as either of the following occurs.

1. There are sequences $(x_k)$ and $(y_k)$ with all terms in $A \setminus \{c\}$,
   both converging to $c$, and reals $P \ne Q$ with $f(x_k) \to P$ and
   $f(y_k) \to Q$ ([[def-sequence]], [[def-real-limit]]).
2. There is a sequence $(x_k)$ with all terms in $A \setminus \{c\}$, converging
   to $c$, for which $(f(x_k))$ does not converge.

**Only the choice-free half of the Heine criterion is used.** The proof runs the
implication from condition 1 to condition 2 of
[[thm-sequential-criterion-for-function-limits]], which is a theorem of ZF; no
sequence is constructed here, both being supplied by the hypothesis. So this
corollary, the workhorse for showing that a limit fails to exist, costs no
choice principle at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a limit point $c$ of $A$ ([[def-limit-point-r]], [[def-function-limit]]).

[L1] Heine criterion, the direction from the $\varepsilon$-$\delta$ limit to sequences: if $\lim_{x \to c} f(x) = L$ then $f(z_k) \to L$ for every sequence $(z_k)$ with all terms in $A \setminus \{c\}$ converging to $c$ ([[thm-sequential-criterion-for-function-limits]]). That direction is proved without any choice principle.

[L2] A sequence of reals has at most one limit, so two limits of the same sequence are equal, and a sequence with a limit converges ([[lem-limit-unique]], [[def-real-limit]], [[def-sequence]]).

## Proof

**Proof technique:** contrapositive.

1.1 Each of the two claims has the form "hypothesis $\Rightarrow$ $f$ has no limit at $c$"; we prove the contrapositive of each, namely that if some $L \in \mathbb{R}$ satisfies $\lim_{x \to c} f(x) = L$ then neither hypothesis can hold. [contrapositive-reduce]

1.2 Assume there is $L \in \mathbb{R}$ with $\lim_{x \to c} f(x) = L$. [assume-hyp]

2.1 Let $(z_k)$ be an arbitrary sequence with all terms in $A \setminus \{c\}$ converging to $c$. By [L1], $(f(z_k))$ converges, with limit $L$. [step 1.2, L1]

3.1 Under hypothesis 1 this applies to $(x_k)$ and to $(y_k)$: $f(x_k) \to P$ and $f(x_k) \to L$ give $P = L$ by [L2], and likewise $Q = L$, so $P = Q$; hypothesis 1, which asserts $P \ne Q$, therefore fails. [step 2.1, L2]

3.2 Under hypothesis 2 it applies to $(x_k)$ and gives that $(f(x_k))$ converges; hypothesis 2, which asserts that it does not, therefore fails. [step 2.1, L2]

4.1 So the existence of a limit of $f$ at $c$ excludes both hypotheses; contrapositively, either hypothesis excludes the existence of a limit of $f$ at $c$. [step 3.1, step 3.2, discharge-contrapositive] ∎

## Remarks

- **This is the standard way a limit is shown not to exist**, and the reason is that the direct route would have to refute a statement beginning "there exists $L$": one would have to argue about every real $L$ at once. Two sequences reduce that to a single computation, as on the companion page for $\psi(1/x)$ at $0$ and for the indicator of $\mathbb{Q}$ at every point.

- **The hypothesis "all terms in $A \setminus \{c\}$" is not decorative.** A sequence allowed to take the value $c$ carries information about $f(c)$, which [[def-function-limit]] deliberately ignores; the constant sequence $z_k = c$ would then refute every limit at once.

- **What the corollary does not say.** It gives a sufficient condition for the limit not to exist, not a necessary one in any weaker form: the converse statement, that a limit exists as soon as all such image sequences converge to one value, is the other direction of [[thm-sequential-criterion-for-function-limits]] and is exactly the direction that spends countable choice ([[rem-heine-criterion-choice-cost]]).
````

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
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
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
````

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
````

### `def-integers`

````markdown
---
id: def-integers
kind: definition
title: "The integers as equivalence classes of pairs of naturals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
justified_by: [lem-int-equivalence]
aliases: []
landmark: true
short: "ℤ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define

$$(a,b) \sim (c,d) \iff a + d = b + c.$$

This is an equivalence relation ([[lem-int-equivalence]]). The **integers** are
the quotient

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$

and we write $[(a,b)]$ for the equivalence class of $(a,b)$.

## Remarks

- The pair $(a,b)$ encodes the formal difference $a - b$; the defining relation
  $a + d = b + c$ is the equation "$a - b = c - d$" restated using only
  addition, which is all $\mathbb{N}$ has.
- $\mathbb{N}$ and its arithmetic (commutativity, associativity,
  distributivity, cancellation of addition, the order) are taken as given
  background throughout this construction.
````

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `def-natural-numbers`

````markdown
---
id: def-natural-numbers
kind: definition
title: "The natural numbers $\\mathbb{N}$ (von Neumann)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system,
       def-axiom-of-infinity, def-axiom-schema-of-separation]
aliases: [def-omega, natural-numbers]
landmark: true
short: "$\\mathbb{N}=\\omega$, smallest inductive set"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to
intersect within, and Separation, [[def-axiom-schema-of-separation]], makes the
intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## Remarks

"Smallest" means $\omega \subseteq I$ for every inductive set $I$. This minimality
is exactly the **induction principle** ([[thm-induction-principle]]): a subset of
$\mathbb{N}$ that contains $0$ and is closed under $\sigma$ is itself inductive,
hence contains $\omega = \mathbb{N}$, hence equals $\mathbb{N}$.

With $0$ and $\sigma$ so defined, $(\mathbb{N}, 0, \sigma)$ satisfies the Peano
axioms ([[def-peano-system]], proved in [[thm-omega-is-peano-system]]), so it is a
**model** of the abstract natural numbers. By categoricity
([[thm-peano-categoricity]]) any other model is uniquely isomorphic to it, so the
particular set-theoretic encoding chosen here is immaterial to every arithmetic
and order property that follows: those are developed from the Peano axioms, not
from the sets themselves.
````

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-one-sided-limits`

````markdown
---
id: def-one-sided-limits
kind: definition
title: "The left and right limits of $f$ at $c$, as limits of the restrictions of $f$ to $A \\cap (-\\infty, c)$ and $A \\cap (c, \\infty)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value]
justified_by: []
aliases: [def-left-limit, def-right-limit]
landmark: true
short: "one-sided limits"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$. Put

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$
for the restrictions of $f$ to those sets.

**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).
For $L \in \mathbb{R}$ we write

$$\lim_{x \to c^{+}} f(x) = L \quad :\Longleftrightarrow \quad \lim_{x \to c} f^{+}(x) = L$$

in the sense of [[def-function-limit]]. Written out: for every real
$\varepsilon > 0$ there is a real $\delta > 0$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } c < x < c + \delta .$$

**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \in \mathbb{R}$
we write $\lim_{x \to c^{-}} f(x) = L$ when $\lim_{x \to c} f^{-}(x) = L$; written
out, for every real $\varepsilon > 0$ there is a real $\delta > 0$ with
$|f(x) - L| < \varepsilon$ for every $x \in A$ with $c - \delta < x < c$.

**The written-out forms agree with the definitions.** For $x \in A^{+}$ the two
conditions $0 < |x - c| < \delta$ and $c < x < c + \delta$ are the same: $x > c$
gives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \delta$ reads
$0 < x - c < \delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where
$x < c$ gives $|x - c| = c - x$.

**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,
namely the limit of a restriction, so:

- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]
  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on
  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit
  point of that set. This is what makes the notation $\lim_{x \to c^{+}} f(x)$
  denote a single real.
- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply
  verbatim to $f^{+}$ and $f^{-}$.

**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for
instance if $A$ contains no point to the right of $c$, or only points bounded
away from $c$ on that side — then $\lim_{x \to c^{+}} f(x)$ is **not defined**
here, for the reason given in [[def-function-limit]]: the
$\varepsilon$-$\delta$ condition would be satisfied vacuously by every real at
once. The same applies on the left.

## Remarks

- **Neither one-sided limit requires $c \in A$, and neither looks at $f(c)$.**
  Both properties are inherited from [[def-function-limit]], since $c \notin
  A^{-} \cup A^{+}$: the point $c$ belongs to neither $(-\infty, c)$ nor
  $(c, \infty)$.

- **The two one-sided limits and the two-sided limit.** When $c$ is a limit
  point of both $A^{-}$ and $A^{+}$, the two-sided limit exists exactly when
  both one-sided limits exist and agree, and then all three coincide:
  [[thm-two-sided-limit-iff-both-one-sided]]. When $c$ is a limit point of only
  one of the two sets, that one-sided limit and the two-sided limit are the same
  condition, again by claim 2 of [[lem-limit-is-local]] together with the
  observation that $A$ and that one side have the same points in a small enough
  punctured neighbourhood of $c$.

- **Notation.** Some texts write $f(c+)$ and $f(c-)$ for these values. This
  library writes only $\lim_{x \to c^{+}} f(x)$ and $\lim_{x \to c^{-}} f(x)$,
  because the shorter notation looks like an evaluation of $f$ and these
  quantities are not values of $f$: they are defined without reference to
  $f(c)$, which may not even exist.
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

### `ex-distance-to-the-integers`

````markdown
---
id: ex-distance-to-the-integers
kind: example
title: "The trigonometry-free oscillator $\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is well defined and attained at a nearest integer, takes values in $[0, 1/2]$, vanishes exactly on $\\mathbb{Z}$, equals $1/2$ at half-integers, and is $1$-periodic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integer-part, def-infimum, def-max-min, def-bounded-set, def-interval, def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, lem-of-abs-value, def-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field, def-field]
justified_by: []
aliases: [ex-distance-to-nearest-integer, ex-triangle-wave]
landmark: true
short: "$\\psi = $ distance to $\\mathbb{Z}$"
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Triangle wave (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_wave"
pipeline_run: null
---

## Example

Identify $\mathbb{Z}$ with its canonical copy in $\mathbb{R}$
([[def-integers]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]) and for
$x \in \mathbb{R}$ put

$$D(x) \;:=\; \{\, |x - n| \ : \ n \in \mathbb{Z} \,\}, \qquad \psi(x) \;:=\; \inf D(x)$$

([[def-infimum]]). Write $m := \lfloor x \rfloor$ for the integer part of $x$
([[lem-integer-part]]) and $t := x - m$, so $0 \le t < 1$. Then:

1. **Existence and attainment.** $\psi(x)$ exists and is **attained**:
   $$\psi(x) \;=\; \min\{\, t,\ 1 - t \,\} \;=\; \min\bigl\{\, |x - m|,\ |x - (m+1)| \,\bigr\} ,$$
   so $\psi(x) = |x - n|$ for $n = m$ or $n = m + 1$, and $\psi(x) = \min D(x)$
   ([[def-max-min]]).
2. **Range.** $0 \le \psi(x) \le 1/2$ for every real $x$, and every value in
   $[0, 1/2]$ occurs: the range of $\psi$ is exactly the interval $[0, 1/2]$
   ([[def-interval]]).
3. **Zero set.** $\psi(x) = 0$ if and only if $x \in \mathbb{Z}$.
4. **Half-integers.** $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$.
5. **Periodicity.** $\psi(x + 1) = \psi(x)$ for every real $x$.

**What this function is for.** It is the elementary, trigonometry-free
substitute for $\sin$: it is bounded, it oscillates, and on every punctured
neighbourhood of $0$ the composite $\psi(1/x)$ attains both the value $0$ and the
value $1/2$. Claims 3 and 4 are exactly what the companion counterexample
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] evaluates, and claim 2 is what the
squeeze argument of [[ex-x-times-psi-tends-to-zero]] uses.

## Facts & Assumptions

**Given:** A real $x$; the set $D(x) = \{\, |x - n| : n \in \mathbb{Z} \,\}$; the integer $m := \lfloor x \rfloor$ and the real $t := x - m$. Integers are identified with their canonical copies in $\mathbb{R}$.

[L1] Integer part: for every real $x$ there is exactly one integer $m$ with $m \le x < m + 1$ ([[lem-integer-part]]). Hence $0 \le t < 1$ and $0 < 1 - t \le 1$, where $1 - t = (m+1) - x$.

[L2] Integers in $\mathbb{R}$: the embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition and order; $\mathbb{Z}$ is a totally ordered commutative ring, closed under $n \mapsto n + 1$ and $n \mapsto n - 1$; every integer $\ge 0$ is the image of a unique natural; and a natural $j \ne 0$ satisfies $j \ge 1$, so an integer $> 0$ is $\ge 1$ and consequently, for integers $n < n'$, one has $n + 1 \le n'$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-ordered-ring]], [[thm-int-comm-ring]], [[lem-nat-discrete]], [[def-natural-numbers]]).

[L3] Infimum: $\ell = \inf S$ when $\ell \le s$ for every $s \in S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$. So a lower bound of $S$ that belongs to $S$ is the infimum, and is then also the minimum of $S$ ([[def-infimum]], [[def-max-min]], [[def-bounded-set]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] Order and field arithmetic in $\mathbb{R}$: the order is total and trichotomy holds; translation invariance and adding inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$, $1/2 > 0$ ([[lem-of-inverse-positive]]), $1/2 < 1$ and $1 - 1/2 = 1/2$ ([[lem-of-sign-rules]], [[def-field]]); and the minimum of a two-element set of reals ([[def-max-min]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $D(x)$ is nonempty and $0$ is a lower bound of it: the integer $0$ gives $|x - 0| \in D(x)$, and $|x - n| \ge 0$ for every $n \in \mathbb{Z}$. [L2, L4]

1.2 By [L1] the integer $m = \lfloor x \rfloor$ satisfies $m \le x < m + 1$, so $t = x - m$ satisfies $0 \le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \le 1$. [L1, L5]

2.1 Every element of $D(x)$ is at least $\min\{t, 1-t\}$. Let $n \in \mathbb{Z}$. By [L2] and totality either $n \le m$ or $m < n$, and in the second case $m + 1 \le n$. If $n \le m$ then $x - n \ge x - m = t \ge 0$, so $|x - n| = x - n \ge t$. If $m + 1 \le n$ then $n - x \ge (m+1) - x = 1 - t > 0$, so $|x - n| = n - x \ge 1 - t$. In both cases $|x - n| \ge \min\{t, 1-t\}$. [step 1.2, L2, L4, L5]

2.2 Both $t$ and $1 - t$ belong to $D(x)$: since $t \ge 0$ we have $t = |x - m|$, and since $1 - t > 0$ we have $1 - t = |x - (m+1)|$, with $m$ and $m+1$ in $\mathbb{Z}$. [step 1.2, L2, L4]

3.1 Hence $\min\{t, 1-t\}$ is a lower bound of $D(x)$ belonging to $D(x)$, so by [L3] it is the greatest lower bound and also the minimum: $\psi(x) = \min\{t, 1-t\} = \min\{|x - m|, |x - (m+1)|\}$, attained at $n = m$ or at $n = m+1$. This is claim 1. [step 2.1, step 2.2, L3, L5]

4.1 Claim 2, the inclusion. $\psi(x) \ge 0$, since $t \ge 0$ and $1 - t > 0$; and $\psi(x) \le 1/2$: if $t \le 1/2$ then $\psi(x) \le t \le 1/2$, while if $1/2 < t$ then $1 - t < 1 - 1/2 = 1/2$ and $\psi(x) \le 1 - t < 1/2$. So $0 \le \psi(x) \le 1/2$ for every real $x$. [step 1.2, step 3.1, L5]

4.2 Claim 3. If $\psi(x) = 0$ then $\min\{t, 1-t\} = 0$; since $1 - t > 0$ this forces $t = 0$, that is $x = m \in \mathbb{Z}$. Conversely if $x \in \mathbb{Z}$ then $|x - x| = 0$ lies in $D(x)$ and $0$ is a lower bound of $D(x)$ by step 1.1, so $\psi(x) = 0$ by [L3]. [step 1.1, step 1.2, step 3.1, L3, L4, L5]

4.3 Claim 4. Let $m \in \mathbb{Z}$ and $x := m + 1/2$. Since $0 < 1/2 < 1$ we have $m \le x < m + 1$, so the uniqueness in [L1] gives $\lfloor x \rfloor = m$ and $t = 1/2$; then step 3.1 gives $\psi(x) = \min\{1/2,\ 1 - 1/2\} = \min\{1/2, 1/2\} = 1/2$. [step 3.1, L1, L5]

4.4 Claim 5. The map $n \mapsto n + 1$ is a bijection of $\mathbb{Z}$ onto itself, with inverse $n \mapsto n - 1$ [L2]; so, substituting $n = n' + 1$, $$D(x+1) = \{\, |(x+1) - n| : n \in \mathbb{Z} \,\} = \{\, |x - n'| : n' \in \mathbb{Z} \,\} = D(x) .$$ Being infima of the same set, $\psi(x+1)$ and $\psi(x)$ are equal by step 3.1 applied at $x + 1$ and at $x$. [step 3.1, L2, L3]

5.1 Claim 2, the exact range. Every value of $\psi$ lies in $[0,1/2]$ by step 4.1. Conversely let $s$ satisfy $0 \le s \le 1/2$; then $0 \le s < 1$, so $0 \le s < 0 + 1$ and the uniqueness in [L1] gives $\lfloor s \rfloor = 0$ and $t = s$; and $s \le 1/2 \le 1 - s$ because $2s \le 1$, so step 3.1 gives $\psi(s) = \min\{s, 1-s\} = s$. Hence the range of $\psi$ is exactly $[0,1/2]$. [step 3.1, step 4.1, L1, L5]

6.1 So $\psi$ is defined at every real, is attained at a nearest integer, has range exactly $[0,1/2]$, vanishes exactly on $\mathbb{Z}$, takes the value $1/2$ at every half-integer, and is $1$-periodic. [step 3.1, step 4.1, step 4.2, step 4.3, step 4.4, step 5.1] ∎

## Remarks

- **No completeness of $\mathbb{R}$ is needed for the infimum here.** The general existence theorem [[thm-infimum-property]] would supply $\inf D(x)$ from the least-upper-bound property, but step 3.1 does not use it: the infimum is produced by exhibiting an element of $D(x)$ that is also a lower bound, which is [[def-infimum]] read directly. Completeness does enter, once, through [[lem-integer-part]], whose existence half is the Archimedean property.

- **Why $\min\{t, 1-t\}$ and not "the distance to the nearest integer".** The phrase presupposes that a nearest integer exists, which is exactly what step 2.2 establishes and what the picture cannot. When $t = 1/2$ there are two nearest integers, $m$ and $m+1$, and the formula is indifferent to which is chosen, so nothing has to be selected.

- **$\psi$ is the triangle wave** of amplitude $1/2$ and period $1$ — not the sawtooth $x - \lfloor x \rfloor$, which drops discontinuously at every integer: on $[0, 1/2]$ it is $\psi(s) = s$ by step 5.1, and periodicity and the reflection $\psi(-x) = \psi(x)$ — immediate from $D(-x) = \{\, |-x - n| : n \in \mathbb{Z} \,\} = \{\, |x + n| : n \in \mathbb{Z} \,\} = D(x)$, using $|-u| = |u|$ and the bijection $n \mapsto -n$ of $\mathbb{Z}$ — determine it everywhere.
````

### `ex-x-times-psi-tends-to-zero`

````markdown
---
id: ex-x-times-psi-tends-to-zero
kind: example
title: "$x\\,\\psi(1/x) \\to 0$ as $x \\to 0$, by the squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ex-distance-to-the-integers, thm-squeeze-for-function-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,\\psi(1/x) \\to 0$"
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
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

Let $A := \mathbb{R} \setminus \{0\}$ and define $h : A \to \mathbb{R}$ by

$$h(x) \;:=\; x \cdot \psi(1/x),$$

with $\psi$ as in [[ex-distance-to-the-integers]]. Then $0$ is a limit point of
$A$, the limit of $h$ at $0$ exists, and

$$\lim_{x \to 0} h(x) \;=\; 0 .$$

**The point of the example.** The factor $\psi(1/x)$ has no limit at $0$ at all
([[cex-psi-of-one-over-x-has-no-limit-at-zero]]), so
[[thm-algebra-of-function-limits]] cannot be applied to the product: its product
rule requires both factors to have limits. What is available is that
$\psi(1/x)$ stays inside $[0,1/2]$, and a bounded factor multiplied by one
tending to $0$ is killed. That is exactly what
[[thm-squeeze-for-function-limits]] delivers, and it delivers the *existence* of
the limit, not merely its value.

## Facts & Assumptions

**Given:** The set $A = \mathbb{R} \setminus \{0\}$ and the function $h : A \to \mathbb{R}$, $h(x) = x \cdot \psi(1/x)$, with $\psi$ the function of [[ex-distance-to-the-integers]].

[L1] Range of $\psi$: $0 \le \psi(u) \le 1/2$ for every real $u$ ([[ex-distance-to-the-integers]], claim 2).

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} f(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|f(x) - P| < \varepsilon$.

[L3] Squeeze theorem: if $f \le g \le k$ on $A \cap N^{*}_{\eta}(c)$ for some real $\eta > 0$, and the limits of $f$ and of $k$ at $c$ exist and are equal to $L$, then the limit of $g$ at $c$ exists and equals $L$ ([[thm-squeeze-for-function-limits]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uv| = |u|\,|v|$; $|-u| = |u|$; $|u| = u$ for $u \ge 0$; and $-|u| \le u \le |u|$ ([[lem-of-abs-value]]).

[L5] Order and field arithmetic: $x \ne 0$ has an inverse $1/x$ ([[def-field]]); $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $t/2 < t$ for $t > 0$ ([[cor-of-one-positive]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]]); multiplying an inequality by a non-negative factor, and adding inequalities ([[lem-of-sign-rules]], [[lem-of-add-order]]); the order is total ([[def-ordered-field]]). Those two sources state their moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide ([[def-ordered-field]]).

[L6] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Verification

**Proof technique:** direct.

1.1 $0$ is a limit point of $A = \mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ satisfies $\varepsilon/2 > 0$, so it lies in $A$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L4, L5, L6]

1.2 $h$ is defined on all of $A$, and $|h(x)| \le |x|/2$ there: for $x \in A$ we have $x \ne 0$, so $1/x$ exists, and $|h(x)| = |x| \cdot \psi(1/x)$ by [L4], while $0 \le \psi(1/x) \le 1/2$ by [L1] and $|x| \ge 0$, so multiplying the inequality $\psi(1/x) \le 1/2$ by the non-negative factor $|x|$ gives $|h(x)| \le |x|/2$. [L1, L4, L5]

1.3 The two functions $x \mapsto -|x|/2$ and $x \mapsto |x|/2$ on $A$ each have limit $0$ at $0$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; every $x \in A$ with $0 < |x - 0| < \delta$ satisfies $\bigl| |x|/2 - 0 \bigr| = |x|/2 < \varepsilon/2 < \varepsilon$, and likewise $\bigl| -|x|/2 - 0 \bigr| = |x|/2 < \varepsilon$. [L2, L4, L5]

2.1 Hence $-|x|/2 \le h(x) \le |x|/2$ for every $x \in A$, by [L4] applied to $|h(x)| \le |x|/2$. [step 1.2, L4]

3.1 The three functions satisfy $-|x|/2 \le h(x) \le |x|/2$ on all of $A$, in particular on $A \cap N^{*}_{1}(0)$, and the two outer ones have limit $0$ at $0$; since $0$ is a limit point of $A$, the squeeze theorem [L3] gives that the limit of $h$ at $0$ exists and equals $0$. [step 1.1, step 1.3, step 2.1, L3] ∎

## Remarks

- **Where the hypotheses of the squeeze theorem are met.** The order hypothesis holds on all of $A$, so any $\eta > 0$ serves and $\eta = 1$ is taken; the two outer limits are computed by hand in step 1.3; and $0$ is a limit point of $A$ by step 1.1, which is what makes every limit here well posed ([[def-function-limit]]).

- **Nothing about $\psi$ beyond its range is used.** Replacing $\psi$ by any function with values in a fixed bounded set would give the same conclusion by the same three steps. What makes the example worth stating is the contrast with [[cex-psi-of-one-over-x-has-no-limit-at-zero]]: the same oscillating factor, multiplied by $x$ or not, is the difference between a limit existing and not.

- **The classical version of this example** is $x \sin(1/x) \to 0$ as $x \to 0$; see [[rem-classical-oscillator-is-sine-of-one-over-x]] for why this library writes $\psi$ and not $\sin$.
````

### `lem-int-embeds-rat`

````markdown
---
id: lem-int-embeds-rat
kind: lemma
title: "The integers embed in the rationals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rat-operations, def-rat-order, def-int-order, def-rationals, thm-int-comm-ring, lem-nat-embeds-int]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Statement

The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,
and order. Composing with [[lem-nat-embeds-int]] embeds $\mathbb{N}$ in
$\mathbb{Q}$; we write $k$ for $j(k)$ throughout.

## Facts & Assumptions

**Given:** The map $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$.

[L1] Ring arithmetic in $\mathbb{Z}$ ([[thm-int-comm-ring]]).

[L2] The order on $\mathbb{Q}$ ([[def-rat-order]]), whose defining inequality is read in the order on $\mathbb{Z}$ ([[def-int-order]]).

[L3] Equality in $\mathbb{Q}$: $[(a,b)] = [(c,d)]$ iff $ad = cb$ ([[def-rationals]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity: $(k,1) \sim (m,1)$ means $k \cdot 1 = m \cdot 1$, i.e. $k = m$. [L3, L1]

1.2 Addition: $j(k) + j(m) = [(k \cdot 1 + m \cdot 1,\; 1)] = j(k+m)$. [L1]

1.3 Multiplication: $j(k)\,j(m) = [(km,\, 1)] = j(km)$. [L1]

1.4 Order: denominators are $1 > 0$, so $j(k) \le j(m)$ reads $k \cdot 1 \le m \cdot 1$, i.e. $k \le m$. [L1, L2]

2.1 $j$ embeds $\mathbb{Z}$ into $\mathbb{Q}$, preserving arithmetic and order. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

### `lem-limit-implies-local-boundedness`

````markdown
---
id: lem-limit-implies-local-boundedness
kind: lemma
title: "If $f$ has a finite limit at $c$ then $f$ is bounded on some punctured neighbourhood of $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-bounded-set, def-neighbourhood-r, def-limit-point-r, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "local boundedness"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f : A \to \mathbb{R}$ and suppose the limit of $f$
at $c$ exists, say $\lim_{x \to c} f(x) = L$ ([[def-function-limit]]). Then there
are a real $\delta > 0$ and a real $M \ge 0$ with

$$|f(x)| \le M \qquad \text{for every } x \in A \text{ with } 0 < |x - c| < \delta ;$$

equivalently, the image $f\bigl(A \cap N^{*}_{\delta}(c)\bigr)$ is a bounded
subset of $\mathbb{R}$ ([[def-bounded-set]], [[def-neighbourhood-r]]). One may
take $M = |L| + 1$.

**Only local boundedness follows, never boundedness on $A$.** A function with a
limit at $c$ may be unbounded on its domain, as
[[fs-limit-exists-implies-bounded-on-the-domain]] records.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, a function $f : A \to \mathbb{R}$ and a real $L$ with $\lim_{x \to c} f(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $-|u| \le u \le |u|$; and for $t > 0$, $|u| \le t$ is equivalent to $-t \le u \le t$ ([[lem-of-abs-value]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Order arithmetic: $0 < 1$ ([[cor-of-one-positive]]); adding a constant preserves the order and adding inequalities is legitimate ([[lem-of-add-order]]); and $u < v$ implies $u \le v$. [[lem-of-add-order]] states these moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide, the order being total ([[def-ordered-field]]).

[L5] Bounded set: $S \subseteq \mathbb{R}$ is bounded when it has both an upper and a lower bound ([[def-bounded-set]]); and $N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with the particular value $\varepsilon = 1$, legitimate since $1 > 0$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < 1$. [L1, L4, choose]

1.2 Put $M := |L| + 1$. Then $M \ge 0$, since $|L| \ge 0$ and $1 > 0$. [L2, L4]

2.1 For every $x \in A$ with $0 < |x - c| < \delta$ we have $|f(x)| = |(f(x) - L) + L| \le |f(x) - L| + |L| < 1 + |L| = M$, hence $|f(x)| \le M$. [step 1.1, step 1.2, L2, L3, L4]

3.1 Therefore $-M \le f(x) \le M$ for every such $x$, so $M$ is an upper bound and $-M$ a lower bound of the image $f\bigl(A \cap N^{*}_{\delta}(c)\bigr)$: that image is a bounded subset of $\mathbb{R}$. [step 2.1, L2, L5] ∎

## Remarks

- **The radius $\delta$ depends on $f$ and $c$ and on nothing else here**, since the proof runs the limit condition at the single value $\varepsilon = 1$. Any other positive $\varepsilon$ would do, with $M = |L| + \varepsilon$; the value $1$ is chosen only because it is available in every ordered field ([[cor-of-one-positive]]).

- **Why this is needed.** It is the hypothesis that makes the product case of [[thm-algebra-of-function-limits]] work: to estimate $f(x)g(x) - LM$ one needs a bound on $|f(x)|$ near $c$, and the limit of $f$ supplies one only locally. The companion fact for the denominator of a quotient — a *lower* bound on $|g|$ near $c$ — is [[lem-sign-preservation-near-a-limit]].

- **The converse fails.** A function bounded on a punctured neighbourhood of $c$ need not have a limit at $c$: the oscillator $\psi(1/x)$ on the companion page takes only values in $[0, 1/2]$ and has no limit at $0$.
````

### `lem-nat-embeds-int`

````markdown
---
id: lem-nat-embeds-int
kind: lemma
title: "The naturals embed in the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers, def-int-operations, def-int-order, def-natural-numbers, def-nat-order, lem-nat-add-identity, lem-nat-mult-identity, thm-nat-linear-order]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The map $\iota(n) = [(n,0)]$ is injective and preserves addition,
multiplication, and order. Its image is exactly the set of nonnegative
integers, so every $x \ge 0$ in $\mathbb{Z}$ is $\iota(k)$ for a unique
natural $k$.

## Facts & Assumptions

**Given:** The map $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(n) = [(n,0)]$.

[A1] Arithmetic identities in $\mathbb{N}$: $x + 0 = x$, $0 + x = x$, $x \cdot 0 = 0$, $0 \cdot x = 0$, $x \cdot 1 = x$.

[A2] The order on $\mathbb{N}$, and: $x \le y$ iff $y = x + k$ for some $k$.

## Proof

**Proof technique:** direct.

1.1 Injectivity: $[(m,0)] = [(n,0)]$ means $m + 0 = 0 + n$, i.e. $m = n$. [A1]

1.2 Addition: $\iota(m) + \iota(n) = [(m+n,\, 0+0)] = \iota(m+n)$. [A1]

1.3 Multiplication: $\iota(m)\,\iota(n) = [(mn + 0 \cdot 0,\; m \cdot 0 + 0 \cdot n)] = \iota(mn)$. [A1]

1.4 Order: $\iota(m) \le \iota(n)$ reads $m + 0 \le 0 + n$, i.e. $m \le n$. [A1, A2]

1.5 Image: if $0 \le [(a,b)]$ then $b \le a$, so $a = b + k$ and $(a,b) \sim (k,0)$, giving $[(a,b)] = \iota(k)$; conversely $0 \le \iota(k)$ for every $k$. [A2, algebra]

2.1 $\iota$ embeds $\mathbb{N}$ into $\mathbb{Z}$, preserving arithmetic and order, with image the nonnegative integers. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
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

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `rem-classical-oscillator-is-sine-of-one-over-x`

````markdown
---
id: rem-classical-oscillator-is-sine-of-one-over-x
kind: remark
title: "The classical form of the oscillator above is $\\sin(1/x)$, which this library can only construct much later"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [ex-distance-to-the-integers, lem-integer-part]
justified_by: []
aliases: []
forward_refs: [cex-sine-of-one-over-x-has-no-limit-at-zero, ex-x-sine-of-one-over-x-tends-to-zero]
landmark: false
short: "why $\\psi$ and not $\\sin$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sine and cosine (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sine_and_cosine"
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8 (the trigonometric functions)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Orientation, not a claim of this library

Every analysis course states the two examples of this page in the form

$$\sin(1/x) \quad \text{has no limit at } 0, \qquad x \sin(1/x) \to 0 \text{ as } x \to 0 ,$$

and a reader who has met them before will recognise
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-times-psi-tends-to-zero]] as those examples with $\psi$ in place of
$\sin$. This remark records the correspondence, and it records that the
correspondence is **orientation only**: the two displayed statements are reported
as what the classical treatment proves, not asserted here, and nothing on this
page uses or proves anything about $\sin$.

## The later analytic construction

This library now constructs sine and cosine from their power series, proves
their differential and addition laws, and defines pi from the first positive
zero of cosine. The promised classical examples are
[[cex-sine-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-sine-of-one-over-x-tends-to-zero]]. They occur later in the reading
order, so both links are orientation-only forward references declared in this
item's `forward_refs`; no proof on this earlier page depends on them.

## What $\psi$ supplies instead

The function $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ of
[[ex-distance-to-the-integers]] is elementary — it needs only the integer part,
the order and the absolute value — and it has the three properties that make the
classical examples work:

- it is **bounded**, with values exactly in $[0, 1/2]$;
- it is **periodic**, with period $1$, so $\psi(1/x)$ oscillates without damping
  as $x \to 0$;
- it **attains** two distinct values on every punctured neighbourhood of $0$
  after the substitution $x \mapsto 1/x$, namely $0$ at the reciprocals of the
  integers and $1/2$ at the reciprocals of the half-integers.

The third property is what
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] uses. It is not sharper than what
$\sin$ would give — the classical witnessing sequences hit the extreme values of
$\sin$ exactly too — but it is available *here*: the two values $0$ and $1/2$ are
read off from the integer part in one line ([[lem-integer-part]]), with no series
and no $\pi$, whereas the corresponding facts about $\sin$ presuppose the whole
construction described above.

## What is genuinely lost, and what is not

Nothing on this page is weaker for using $\psi$. The two statements proved are
exactly the statements usually proved with $\sin$, and their proofs are shorter.

What is lost is a connection to a different subject. The classical pair
$\sin(1/x)$, $x\sin(1/x)$ also carries information about smoothness, about power
series and about the topologist's sine curve, none of which $\psi$ can carry,
since $\psi$ is assembled from the order, the absolute value and the integer part
alone and none of those notions is defined in this library yet. Those phenomena
are not in scope on this earlier page; the forward-linked analytic examples
state them with $\sin$ on the later page that defines it.
````

### `thm-int-comm-ring`

````markdown
---
id: thm-int-comm-ring
kind: theorem
title: "The integers form a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integers, def-int-operations, lem-int-add-well-defined,
       lem-int-mul-well-defined, lem-nat-add-commutative,
       lem-nat-add-associative, lem-nat-add-identity,
       lem-nat-mult-commutative, lem-nat-mult-associative,
       lem-nat-mult-distributive, lem-nat-mult-identity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

$(\mathbb{Z}, +, \cdot, 0, 1)$ with the operations of [[def-int-operations]] is
a commutative ring with multiplicative identity, in which every element has the
additive inverse $-[(a,b)] = [(b,a)]$.

## Facts & Assumptions

**Given:** $\mathbb{Z}$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative, with zero as a two-sided identity ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]]).

[L2] Multiplication on $\mathbb{N}$ is commutative and associative, distributes over addition, and has the usual zero and identity laws ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]]).

[L3] The integer operations are independent of representatives ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], each axiom may be verified on arbitrary fixed representatives $(a,b), (c,d), (e,f)$. [L3, suffices]

1.2 Associativity of $+$: $((a,b)+(c,d))+(e,f)$ and $(a,b)+((c,d)+(e,f))$ both equal $(a+c+e,\; b+d+f)$. [L1]

1.3 Commutativity of $+$: $(a+c,\, b+d) = (c+a,\, d+b)$. [L1]

1.4 Additive identity: $(a,b) + (0,0) = (a+0,\, b+0) = (a,b)$. [L1]

1.5 Additive inverses: $(a,b) + (b,a) = (a+b,\, b+a) \sim (0,0)$, since $(a+b) + 0 = (b+a) + 0$. [L1]

1.6 Commutativity of $\cdot$: swapping $(a,b) \leftrightarrow (c,d)$ sends $(ac+bd,\, ad+bc)$ to $(ca+db,\, cb+da)$, the same pair. [L1, L2]

1.7 Multiplicative identity: $(a,b) \cdot (1,0) = (a \cdot 1 + b \cdot 0,\; a \cdot 0 + b \cdot 1) = (a,b)$. [L1, L2]

1.8 Associativity of $\cdot$: expanding, both $((a,b)(c,d))(e,f)$ and $(a,b)((c,d)(e,f))$ equal $(ace+adf+bcf+bde,\; acf+ade+bce+bdf)$. [L1, L2]

1.9 Distributivity: $(a,b) \cdot ((c,d)+(e,f)) = (a(c+e)+b(d+f),\; a(d+f)+b(c+e)) = (ac+bd,\, ad+bc) + (ae+bf,\, af+be) = (a,b)(c,d) + (a,b)(e,f)$. [L1, L2]

2.1 Steps 1.2–1.9 verify all axioms: $(\mathbb{Z}, +, \cdot, 0, 1)$ is a commutative ring with identity and additive inverses. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9] ∎
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

