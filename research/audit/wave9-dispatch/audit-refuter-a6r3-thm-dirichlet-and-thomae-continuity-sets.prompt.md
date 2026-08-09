# Audit proof-refuter brief — Wave 9, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
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

## Wave 9 target — `thm-dirichlet-and-thomae-continuity-sets`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `4cebceea45c05b26ab2b6df7fcdab582945b75daa880266280a5eda580f42763`

## Complete current target

````markdown
---
id: thm-dirichlet-and-thomae-continuity-sets
kind: theorem
title: "The Dirichlet function is continuous at no point of $\\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-dirichlet-and-thomae-functions, def-continuity-real, lem-q-and-irrationals-dense-r, def-oscillation, thm-continuity-iff-oscillation-zero, cor-archimedean-reciprocal, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-neighbourhood-r, thm-closure-characterisations-r, lem-rat-embeds-dense, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: [thm-thomae-continuity-set]
landmark: true
short: "Thomae is continuous exactly at the irrationals"
proof_strategy: cases
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Statement

Let $\mathbf{1}_{\mathbb{Q}}$ and $t$ be the Dirichlet and Thomae functions
([[def-dirichlet-and-thomae-functions]]), and write $q(x)$ for the least
denominator of a rational $x$, so that $t(x) = 1/\iota(q(x))$ there and
$t(x) = 0$ at every irrational $x$. Then:

1. $\mathbf{1}_{\mathbb{Q}}$ is continuous at **no** point of $\mathbb{R}$
   ([[def-continuity-real]]);
2. $\omega_{t}(c) = t(c)$ for **every** real $c$ ([[def-oscillation]]);
3. $t$ is continuous at every irrational and discontinuous at every rational, so
   its set of continuity points is exactly $\mathbb{R} \setminus \mathbb{Q}$.

**Claim 1 restates, on this page, what
[[cex-dirichlet-is-nowhere-continuous]] already proves.** That item is homed on
the examples page of *Continuity, the intermediate and extreme value theorems,
and uniform continuity*, and an examples page is a leaf of this library: nothing
outside it may depend on an item that lives there. The claim is needed here, and
on later pages, as a citable statement, so it is proved again rather than
quoted. The two statements are the same statement, and neither is stronger than
the other; the proof below is the same argument, and no originality is claimed
for it. This is the pattern
[[ex-distance-to-the-integers-is-1-lipschitz]] follows.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ and Thomae's function $t$, and a real $c$; $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ are the canonical copies and $\iota(q) = q \cdot 1_{\mathbb{R}}$.

[A1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ for $x \in \mathbb{Q}$ and $0$ otherwise; $t(x) = 1/\iota(q(x)) \in (0,1]$ for $x \in \mathbb{Q}$ and $t(x) = 0$ otherwise, where $q(x) = \min\{q \ge 1 : \iota(q)x \in \mathbb{Z}\}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every $N_\delta(y)$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[lem-rat-embeds-dense]]).

[L2] For every real $x$ there is exactly one integer $m$ with $m \le x < m+1$, written $\lfloor x \rfloor$ ([[lem-integer-part]]); consequently no integer lies strictly between two consecutive integers.

[L3] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; and $\iota$ is positive and strictly increasing on the naturals $\ge 1$, so $1 \le q \le N$ gives $\iota(q) \le \iota(N)$ and $1/\iota(N) \le 1/\iota(q)$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A nonempty finite set of reals presented as $\{a_{0}, \dots, a_{n}\}$ has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] $\omega_{f}(S) = \sup\{|f(x)-f(y)| : x,y \in S\}$ and $\omega_{f}(c) = \inf\{\omega_{f}(N_\delta(c)) : \delta > 0\}$ for $f$ defined on all of $\mathbb{R}$, both computed in $\overline{\mathbb{R}}$, where every set has a supremum and an infimum; $f$ is continuous at $c$ if and only if $\omega_{f}(c) = 0$ ([[def-oscillation]], [[def-extended-reals]], [[lem-extended-reals-complete]], [[thm-continuity-iff-oscillation-zero]]).

[L6] $|u| \ge 0$, $|u - v| \le |u| + |v|$, and if $0 \le u \le M$ and $0 \le v \le M$ then $|u - v| \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Claim 1. Let $c$ be real and let $\delta > 0$ be real. The neighbourhood $N_\delta(c)$ contains a rational $u$ and an irrational $v$, and $\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(v) = 1 - 0 = 1$; since $\mathbf{1}_{\mathbb{Q}}(c)$ is $0$ or $1$, one of $|\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(c)|$ and $|\mathbf{1}_{\mathbb{Q}}(v) - \mathbf{1}_{\mathbb{Q}}(c)|$ equals $1$. So the continuity condition at $c$ fails for $\varepsilon = 1$, no $\delta$ witnessing it, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point. [A1, L1]

1.2 **A separation estimate.** For a real $c$ and a natural $q \ge 1$ put $m := \lfloor \iota(q)c \rfloor$ and define $d_{q}(c) := 1/\iota(q)$ if $\iota(q)c = m$, and $d_{q}(c) := \min\{\iota(q)c - m,\ m + 1 - \iota(q)c\}/\iota(q)$ otherwise. In both cases $d_{q}(c) > 0$. [L2, L3, construct]

1.3 **A lower bound.** For every real $\delta > 0$ the neighbourhood $N_\delta(c)$ contains an irrational $v$, and $c \in N_\delta(c)$, so $\omega_{t}(N_\delta(c)) \ge |t(c) - t(v)| = t(c)$; taking the infimum over $\delta$ gives $\omega_{t}(c) \ge t(c)$. [A1, L1, L5]

2.1 With $d_{q}(c)$ as in step 1.2: for every integer $p$ with $p/\iota(q) \ne c$ one has $|c - p/\iota(q)| \ge d_{q}(c)$. If $\iota(q)c = m$ then $p \ne m$, so $|\iota(q)c - p| = |m - p| \ge 1$; otherwise $m < \iota(q)c < m+1$, and $p \le m$ gives $\iota(q)c - p \ge \iota(q)c - m$ while $p \ge m+1$ gives $p - \iota(q)c \ge m+1-\iota(q)c$. Dividing by $\iota(q) > 0$ gives the claim. [step 1.2, L2, L3]

2.2 For a real $c$ and a natural $N \ge 1$ put $\delta_{N}(c) := \min\{d_{1}(c), \dots, d_{N}(c)\}$, the minimum of a nonempty finite set of positive reals, so $\delta_{N}(c) > 0$. [step 1.2, L4, construct]

3.1 If $x$ is rational with $0 < |x - c| < \delta_{N}(c)$ then $q(x) > N$ and hence $t(x) < 1/\iota(N)$. Indeed $x = p/\iota(q)$ with $q := q(x)$ and $p := \iota(q)x$; if $q \le N$ then $p/\iota(q) = x \ne c$, so step 2.1 gives $|c - x| \ge d_{q}(c) \ge \delta_{N}(c)$, contrary to the hypothesis. So $q(x) > N$, and $t(x) = 1/\iota(q(x)) < 1/\iota(N)$ because $\iota$ is strictly increasing. [step 2.1, step 2.2, A1, L3]

4.1 **An upper bound for $t$ near $c$.** Let $\varepsilon > 0$ be real, take $N \ge 1$ with $1/\iota(N) < \varepsilon$ and put $\delta := \delta_{N}(c)$. Every $x \in N_\delta(c)$ satisfies $0 \le t(x) \le M$ where $M := \max\{t(c), \varepsilon\}$: for $x = c$ this is $t(c) \le M$; for $x \ne c$ rational it is $t(x) < 1/\iota(N) < \varepsilon \le M$ by step 3.1; and for $x$ irrational it is $t(x) = 0$. [step 3.1, A1, L3, L6]

5.1 Hence $\omega_{t}(N_\delta(c)) \le M$ with $\delta$ and $M$ as in step 4.1, since $|t(x) - t(y)| \le M$ for all $x, y \in N_\delta(c)$, so $M$ is an upper bound of the set whose supremum $\omega_{t}(N_\delta(c))$ is; and therefore $\omega_{t}(c) \le M = \max\{t(c), \varepsilon\}$. [step 4.1, L5, L6]

6.1 Claim 2 now follows in the two cases of the value $t(c)$, which are exactly the two cases of the position of $c$. If $c$ is rational then $t(c) > 0$, and applying step 5.1 with the admissible choice $\varepsilon := t(c)$ gives $\omega_{t}(c) \le \max\{t(c), t(c)\} = t(c)$; with step 1.3 this gives $\omega_{t}(c) = t(c)$. [step 5.1, step 1.3, A1, assume-case rat]

6.2 If $c$ is irrational then $t(c) = 0$, and step 5.1 gives $\omega_{t}(c) \le \max\{0, \varepsilon\} = \varepsilon$ for every real $\varepsilon > 0$; since also $\omega_{t}(c) \ge 0$, an extended real that is $\le \varepsilon$ for every positive real $\varepsilon$ and $\ge 0$ must be $0$, so $\omega_{t}(c) = 0 = t(c)$. [step 5.1, step 1.3, A1, L5, assume-case irr]

7.1 Every real is rational or irrational and not both, so steps 6.1 and 6.2 establish claim 2 for every real $c$. [step 6.1, step 6.2, cases-exhaustive]

8.1 Claim 3 follows from claim 2: $t$ is continuous at $c$ exactly when $\omega_{t}(c) = 0$, that is exactly when $t(c) = 0$, that is exactly when $c$ is irrational. So the continuity set of $t$ is $\mathbb{R} \setminus \mathbb{Q}$ and its discontinuity set is $\mathbb{Q}$. [step 7.1, A1, L5] ∎

## Remarks

- **What claim 2 adds beyond claim 3.** Continuity at a point is the vanishing of the oscillation there, so claim 3 is the special case of claim 2 recording where the value is $0$. The value itself is used on the companion page, where the oscillation of $t$ is computed at particular points, and it shows that the failure of continuity at a rational is exactly as large as the value of $t$ there: small denominators are the bad points.

- **The continuity set of $t$ is $G_\delta$, as it must be.** The irrationals form a $G_\delta$ set ([[cor-q-is-meager-and-not-g-delta]]), in agreement with [[thm-discontinuity-set-is-f-sigma]]. The reverse arrangement is impossible: no function is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$ ([[cor-no-function-is-continuous-exactly-on-q]]).

- **No choice principle is spent.** The separation estimate of step 1.2 is written down from $\lfloor \iota(q)c \rfloor$, the minimum of step 2.1 is the minimum of an explicitly listed finite set, and the least denominator $q(x)$ is a least element. Density supplies points, and it is used only in the form "every neighbourhood meets the set", never to build a sequence.
````

## Current Wave 9 provenance determination

```json
{
  "id": "thm-dirichlet-and-thomae-continuity-sets",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Thomae%27s_function",
    "https://en.wikipedia.org/wiki/Dirichlet_function"
  ],
  "rationale": "The sources state exactly that the Dirichlet function is nowhere continuous and Thomae’s function is continuous precisely at irrational points.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-dirichlet-and-thomae-functions",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq\n\\mathbb{R}$ denotes the chain of canonical embeddings\n([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and\neach set is identified with its image in $\\mathbb{R}$, as elsewhere in this\nlibrary; for a natural $q$ the real $\\iota(q) = q \\cdot 1_{\\mathbb{R}}$ is the\ncanonical natural ([[def-canonical-natural]]), and $\\iota(q) > 0$ for $q \\ge 1$\n([[lem-of-naturals-positive]]). A real is **rational** when it lies in\n$\\mathbb{Q}$ and **irrational** otherwise; both sets are dense in $\\mathbb{R}$\n([[lem-q-and-irrationals-dense-r]]).",
      "uses": [
        "1.1",
        "1.3",
        "3.1",
        "4.1",
        "6.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "1. $\\mathbb{Q}_{\\mathbb{R}}$ is dense in $\\mathbb{R}$, that is,\n   $\\overline{\\mathbb{Q}_{\\mathbb{R}}} = \\mathbb{R}$ ([[def-limit-point-r]]);\n2. $X$ is dense in $\\mathbb{R}$;\n3. every nonempty open subset of $\\mathbb{R}$ is uncountable\n   ([[def-countable]]).",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-integer-part",
      "source_section": "Statement",
      "quote": "Identify $\\mathbb{Z}$ with its canonical copy inside $\\mathbb{R}$, along the\nembeddings $\\mathbb{N} \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{R}$\n([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],\n[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$\nwith",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-oscillation",
      "source_section": "Definition",
      "quote": "**Oscillation on a set.** For $S \\subseteq A$ put\n\n$$\\omega_f(S) \\;:=\\; \\sup\\{\\, |f(x) - f(y)| \\;:\\; x, y \\in S \\,\\} \\;\\in\\; \\overline{\\mathbb{R}} .$$\n\n**Oscillation at a point.** For $c \\in A$ put\n\n$$\\omega_f(c) \\;:=\\; \\inf\\{\\, \\omega_f(A \\cap N_\\delta(c)) \\;:\\; \\delta \\in \\mathbb{R},\\ \\delta > 0 \\,\\} \\;\\in\\; \\overline{\\mathbb{R}},$$\n\nwhere $N_\\delta(c) = (c - \\delta, c + \\delta)$ is the $\\delta$-neighbourhood of\n$c$ ([[def-neighbourhood-r]]).\n\nThe two uses of the symbol $\\omega_f$ are distinguished by their argument: a\nsubset of $A$ in the first, a point of $A$ in the second. Where confusion is\npossible the first is written $\\omega_f(S)$ with $S$ named as a set.\n\n### Both values are well posed; point oscillation and nonempty-set oscillation are nonnegative\n\n**The set in the first display is nonempty whenever $S$ is**, since $x = y \\in S$\ngives the value $|f(x) - f(x)| = 0$; so $\\omega_f(S) \\ge 0$ for nonempty $S$,\nand $\\omega_f(S) = \\sup \\varnothing = -\\infty$ for $S = \\varnothing$\n([[lem-extended-reals-complete]]). Only nonempty $S$ occurs below.\n\n**The set in the second display is nonempty**, since some real $\\delta > 0$\nexists, and each of its members is $\\ge 0$: for $c \\in A$ the set\n$A \\cap N_\\delta(c)$ contains $c$ itself, because $|c - c| = 0 < \\delta$, so it\nis nonempty and $\\omega_f(A \\cap N_\\delta(c)) \\ge 0$\n([[lem-of-abs-value]]). Hence $0$ is a lower bound of that set and\n\n$$0 \\;\\le\\; \\omega_f(c) \\;\\le\\; \\omega_f(A \\cap N_\\delta(c)) \\qquad \\text{for every real } \\delta > 0,$$\n\nthe second inequality because $\\omega_f(c)$ is a lower bound of the set of which\n$\\omega_f(A \\cap N_\\delta(c))$ is a member. In particular $\\omega_f(c)$ is never\n$-\\infty$.",
      "uses": [
        "1.3",
        "5.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "1.3",
        "5.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.",
      "uses": [
        "1.3",
        "5.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-continuity-iff-oscillation-zero",
      "source_section": "Statement",
      "quote": "Since $\\omega_f(c) \\ge 0$ always ([[def-oscillation]]), the equivalent form of\nthe right-hand side is: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with $\\omega_f(A \\cap N_\\delta(c)) < \\varepsilon$.",
      "uses": [
        "1.3",
        "5.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "4.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-1-1",
      "claim": "Claim 1. Let $c$ be real and let $\\delta > 0$ be real. The neighbourhood $N_\\delta(c)$ contains a rational $u$ and an irrational $v$, and $\\mathbf{1}_{\\mathbb{Q}}(u) - \\mathbf{1}_{\\mathbb{Q}}(v) = 1 - 0 = 1$; since $\\mathbf{1}_{\\mathbb{Q}}(c)$ is $0$ or $1$, one of $|\\mathbf{1}_{\\mathbb{Q}}(u) - \\mathbf{1}_{\\mathbb{Q}}(c)|$ and $|\\mathbf{1}_{\\mathbb{Q}}(v) - \\mathbf{1}_{\\mathbb{Q}}(c)|$ equals $1$. So the continuity condition at $c$ fails for $\\varepsilon = 1$, no $\\delta$ witnessing it, and $\\mathbf{1}_{\\mathbb{Q}}$ is continuous at no point. [A1, L1]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-1-2",
      "claim": "**A separation estimate.** For a real $c$ and a natural $q \\ge 1$ put $m := \\lfloor \\iota(q)c \\rfloor$ and define $d_{q}(c) := 1/\\iota(q)$ if $\\iota(q)c = m$, and $d_{q}(c) := \\min\\{\\iota(q)c - m,\\ m + 1 - \\iota(q)c\\}/\\iota(q)$ otherwise. In both cases $d_{q}(c) > 0$. [L2, L3, construct]",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-1-3",
      "claim": "**A lower bound.** For every real $\\delta > 0$ the neighbourhood $N_\\delta(c)$ contains an irrational $v$, and $c \\in N_\\delta(c)$, so $\\omega_{t}(N_\\delta(c)) \\ge |t(c) - t(v)| = t(c)$; taking the infimum over $\\delta$ gives $\\omega_{t}(c) \\ge t(c)$. [A1, L1, L5]",
      "step": "1.3",
      "inputs": [
        "A1",
        "L1",
        "L5"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-2-1",
      "claim": "With $d_{q}(c)$ as in step 1.2: for every integer $p$ with $p/\\iota(q) \\ne c$ one has $|c - p/\\iota(q)| \\ge d_{q}(c)$. If $\\iota(q)c = m$ then $p \\ne m$, so $|\\iota(q)c - p| = |m - p| \\ge 1$; otherwise $m < \\iota(q)c < m+1$, and $p \\le m$ gives $\\iota(q)c - p \\ge \\iota(q)c - m$ while $p \\ge m+1$ gives $p - \\iota(q)c \\ge m+1-\\iota(q)c$. Dividing by $\\iota(q) > 0$ gives the claim. [step 1.2, L2, L3]",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L2",
        "L3"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-2-2",
      "claim": "For a real $c$ and a natural $N \\ge 1$ put $\\delta_{N}(c) := \\min\\{d_{1}(c), \\dots, d_{N}(c)\\}$, the minimum of a nonempty finite set of positive reals, so $\\delta_{N}(c) > 0$. [step 1.2, L4, construct]",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L4"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-3-1",
      "claim": "If $x$ is rational with $0 < |x - c| < \\delta_{N}(c)$ then $q(x) > N$ and hence $t(x) < 1/\\iota(N)$. Indeed $x = p/\\iota(q)$ with $q := q(x)$ and $p := \\iota(q)x$; if $q \\le N$ then $p/\\iota(q) = x \\ne c$, so step 2.1 gives $|c - x| \\ge d_{q}(c) \\ge \\delta_{N}(c)$, contrary to the hypothesis. So $q(x) > N$, and $t(x) = 1/\\iota(q(x)) < 1/\\iota(N)$ because $\\iota$ is strictly increasing. [step 2.1, step 2.2, A1, L3]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "A1",
        "L3"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-4-1",
      "claim": "**An upper bound for $t$ near $c$.** Let $\\varepsilon > 0$ be real, take $N \\ge 1$ with $1/\\iota(N) < \\varepsilon$ and put $\\delta := \\delta_{N}(c)$. Every $x \\in N_\\delta(c)$ satisfies $0 \\le t(x) \\le M$ where $M := \\max\\{t(c), \\varepsilon\\}$: for $x = c$ this is $t(c) \\le M$; for $x \\ne c$ rational it is $t(x) < 1/\\iota(N) < \\varepsilon \\le M$ by step 3.1; and for $x$ irrational it is $t(x) = 0$. [step 3.1, A1, L3, L6]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "A1",
        "L3",
        "L6"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-5-1",
      "claim": "Hence $\\omega_{t}(N_\\delta(c)) \\le M$ with $\\delta$ and $M$ as in step 4.1, since $|t(x) - t(y)| \\le M$ for all $x, y \\in N_\\delta(c)$, so $M$ is an upper bound of the set whose supremum $\\omega_{t}(N_\\delta(c))$ is; and therefore $\\omega_{t}(c) \\le M = \\max\\{t(c), \\varepsilon\\}$. [step 4.1, L5, L6]",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-6-1",
      "claim": "Claim 2 now follows in the two cases of the value $t(c)$, which are exactly the two cases of the position of $c$. If $c$ is rational then $t(c) > 0$, and applying step 5.1 with the admissible choice $\\varepsilon := t(c)$ gives $\\omega_{t}(c) \\le \\max\\{t(c), t(c)\\} = t(c)$; with step 1.3 this gives $\\omega_{t}(c) = t(c)$. [step 5.1, step 1.3, A1, assume-case rat]",
      "step": "6.1",
      "inputs": [
        "5.1",
        "1.3",
        "A1"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-6-2",
      "claim": "If $c$ is irrational then $t(c) = 0$, and step 5.1 gives $\\omega_{t}(c) \\le \\max\\{0, \\varepsilon\\} = \\varepsilon$ for every real $\\varepsilon > 0$; since also $\\omega_{t}(c) \\ge 0$, an extended real that is $\\le \\varepsilon$ for every positive real $\\varepsilon$ and $\\ge 0$ must be $0$, so $\\omega_{t}(c) = 0 = t(c)$. [step 5.1, step 1.3, A1, L5, assume-case irr]",
      "step": "6.2",
      "inputs": [
        "5.1",
        "1.3",
        "A1",
        "L5"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-7-1",
      "claim": "Every real is rational or irrational and not both, so steps 6.1 and 6.2 establish claim 2 for every real $c$. [step 6.1, step 6.2, cases-exhaustive]",
      "step": "7.1",
      "inputs": [
        "6.1",
        "6.2"
      ]
    },
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets-step-8-1",
      "claim": "Claim 3 follows from claim 2: $t$ is continuous at $c$ exactly when $\\omega_{t}(c) = 0$, that is exactly when $t(c) = 0$, that is exactly when $c$ is irrational. So the continuity set of $t$ is $\\mathbb{R} \\setminus \\mathbb{Q}$ and its discontinuity set is $\\mathbb{Q}$. [step 7.1, A1, L5] ∎",
      "step": "8.1",
      "inputs": [
        "7.1",
        "A1",
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 2.2: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is not parametrised by an interval, finite range, or object with a degenerate case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint or one-sided domain boundary occurs in the statement."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof selects no witness from a varying asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-dirichlet-and-thomae-functions",
    "declared_target": "def-dirichlet-and-thomae-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-oscillation",
    "declared_target": "def-oscillation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-continuity-iff-oscillation-zero",
    "declared_target": "thm-continuity-iff-oscillation-zero",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-closure-characterisations-r",
    "declared_target": "thm-closure-characterisations-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-and-thomae-continuity-sets",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (22)

### `cex-dirichlet-is-nowhere-continuous`

````markdown
---
id: cex-dirichlet-is-nowhere-continuous
kind: counterexample
title: "The indicator of $\\mathbb{Q}$ is continuous at no point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-limit-point-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cex-dirichlet-function]
landmark: true
short: "Dirichlet function is nowhere continuous"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every function $\mathbb{R} \to \mathbb{R}$ is continuous at
at least one point ([[def-continuity-real]]).

The witness is the **Dirichlet function**, the indicator of the rationals:
writing $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]),

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}. \end{cases}$$

It is continuous at **no** point of $\mathbb{R}$. The mechanism is that both
$\mathbb{Q}$ and its complement are dense ([[lem-q-and-irrationals-dense-r]]),
so every neighbourhood of every real contains a point of each, and the two
values differ by $1$.

**The argument is choice free.** Density is used in the form "every
neighbourhood of every point meets the set", which is
[[thm-closure-characterisations-r]] applied to a closure equal to $\mathbb{R}$;
no sequence is built, so neither
[[lem-sequential-characterisation-of-closure-r]] nor
[[thm-sequential-criterion-for-continuity]] is invoked, and the countable choice
those two spend is not spent here.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, its complement $X := \mathbb{R} \setminus \mathbb{Q}$, and the function $\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}$ taking the value $1$ on $\mathbb{Q}$ and $0$ on $X$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| < \varepsilon$ for every real $x$ with $|x - c| < \delta$. So continuity at $c$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| \ge \varepsilon_0$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]], [[lem-rat-embeds-dense]]).

[L3] A point lies in the closure of $S$ exactly when every neighbourhood $N_{\delta}$ of it meets $S$; so a set with closure $\mathbb{R}$ meets every $N_{\delta}(c)$, for every real $c$ and every real $\delta > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function: $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real either lies in $\mathbb{Q}$ or does not, exclusively; and $|1 - 0| = |0 - 1| = 1$, with $1/2 > 0$ and $1/2 < 1$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function on $\mathbb{R}$ taking only the values $0$ and $1$, and $\mathbb{R}$ is the disjoint union of $\mathbb{Q}$ and $X$. [L4]

1.2 Let $c \in \mathbb{R}$ be arbitrary, put $\varepsilon_0 := 1/2 > 0$, and let a real $\delta > 0$ be given. [L4]

2.1 By [L2] and [L3] the neighbourhood $N_{\delta}(c)$ meets $\mathbb{Q}$ and it meets $X$: there are reals $p \in N_{\delta}(c) \cap \mathbb{Q}$ and $z \in N_{\delta}(c) \cap X$, so $|p - c| < \delta$ and $|z - c| < \delta$, with $\mathbf{1}_{\mathbb{Q}}(p) = 1$ and $\mathbf{1}_{\mathbb{Q}}(z) = 0$. [step 1.2, L2, L3, choose]

3.1 If $c \in \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 1$ and the point $x := z$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |0 - 1| = 1 \ge \varepsilon_0$. If $c \notin \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 0$ and the point $x := p$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |1 - 0| = 1 \ge \varepsilon_0$. By [L4] these two possibilities are exhaustive and exclusive. [step 1.1, step 2.1, L4]

4.1 So for the fixed $\varepsilon_0 = 1/2$ no real $\delta > 0$ serves at $c$, and by [L1] the function $\mathbf{1}_{\mathbb{Q}}$ is not continuous at $c$. As $c$ was an arbitrary real, it is continuous at no point of $\mathbb{R}$, and the refuted claim is false. [step 1.2, step 3.1, L1] ∎

## Remarks

- **Why $\varepsilon_0 = 1/2$ and not $1$.** Any $\varepsilon_0 \le 1$ works, since the discrepancy produced is exactly $1$. Taking $1/2$ leaves the inequality strict and makes it visible that the failure is not a boundary effect.

- **Restricting the domain repairs it completely.** The restriction of $\mathbf{1}_{\mathbb{Q}}$ to $\mathbb{Q}$ is constantly $1$ and the restriction to the irrationals is constantly $0$; both are continuous. This is the standard warning that continuity is a property of the pair (function, domain), recorded in [[def-continuity-real]]: continuity passes to subsets of the domain, never up from them.

- **A near miss worth naming.** Multiplying by $x$ repairs continuity at exactly one point: $x \mapsto x\,\mathbf{1}_{\mathbb{Q}}(x)$ is continuous at $0$ and nowhere else, which is [[ex-x-times-dirichlet-is-continuous-exactly-at-zero]]. The same argument as above, applied to any function taking two distinct values densely, shows nowhere-continuity; in particular the function equal to $1$ on $\mathbb{Q}$ and $-1$ elsewhere is nowhere continuous while its absolute value is constant.
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

### `cor-no-function-is-continuous-exactly-on-q`

````markdown
---
id: cor-no-function-is-continuous-exactly-on-q
kind: corollary
title: "No function $\\mathbb{R} \\to \\mathbb{R}$ is continuous at every rational and discontinuous at every irrational, because $\\mathbb{Q}$ is not $G_\\delta$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [thm-discontinuity-set-is-f-sigma, def-f-sigma-g-delta, cor-q-is-meager-and-not-g-delta, def-continuity-real, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "nothing is continuous exactly on $\\mathbb{Q}$"
proof_strategy: contradiction
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
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

There is **no** function $f : \mathbb{R} \to \mathbb{R}$ that is continuous at
every rational and discontinuous at every irrational
([[def-continuity-real]], [[lem-rat-embeds-dense]]).

Equivalently: $\mathbb{Q}$ is not the continuity set of any function
$\mathbb{R} \to \mathbb{R}$.

**The contrast with Thomae's function is the point.** There *is* a function
continuous exactly at the irrationals, namely $t$
([[thm-dirichlet-and-thomae-continuity-sets]]), and one might expect the two
arrangements to be symmetric. They are not, because the classes $F_\sigma$ and
$G_\delta$ are exchanged by complementation while $\mathbb{Q}$ and the
irrationals are, and only one of the two sets is $G_\delta$
([[cor-q-is-meager-and-not-g-delta]]).

## Facts & Assumptions

**Given:** $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[L1] For every $f : \mathbb{R} \to \mathbb{R}$ the set of points at which $f$ is continuous is a $G_\delta$ subset of $\mathbb{R}$ ([[thm-discontinuity-set-is-f-sigma]], case $A = \mathbb{R}$, [[def-f-sigma-g-delta]]).

[L2] $\mathbb{Q}$ is **not** a $G_\delta$ subset of $\mathbb{R}$ ([[cor-q-is-meager-and-not-g-delta]], claim 3).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that there is $f : \mathbb{R} \to \mathbb{R}$ continuous at every rational and discontinuous at every irrational. [assume-contra]

2.1 Then the set of continuity points of $f$ is exactly $\mathbb{Q}$: it contains every rational by hypothesis, and it contains no irrational, again by hypothesis. [step 1.1]

3.1 By the $G_\delta$ theorem the set of continuity points of $f$ is a $G_\delta$ subset of $\mathbb{R}$, so $\mathbb{Q}$ is $G_\delta$. This contradicts the fact that $\mathbb{Q}$ is not $G_\delta$, so no such $f$ exists. [step 2.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the work actually is.** Nothing in this corollary is hard; all of it
  was done earlier. The $G_\delta$ theorem is [[thm-discontinuity-set-is-f-sigma]],
  which rests on the oscillation, and the failure of $\mathbb{Q}$ to be
  $G_\delta$ is [[cor-q-is-meager-and-not-g-delta]], which is where the Baire
  category theorem is spent. The corollary is the place where those two meet.

- **A weaker statement is true and much cheaper, and is not what is proved
  here.** That no *monotone* function is continuous exactly at the rationals
  follows from [[thm-froda]] alone, since the irrationals are uncountable. The
  statement above is about all functions and needs category.
````

### `cor-q-is-meager-and-not-g-delta`

````markdown
---
id: cor-q-is-meager-and-not-g-delta
kind: corollary
title: "$\\mathbb{Q}$ is $F_\\sigma$, meager and not $G_\\delta$, while the irrationals are $G_\\delta$, residual and not $F_\\sigma$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-baire-category-r, def-f-sigma-g-delta, def-nowhere-dense-meager, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-equinumerous, def-injection-surjection-bijection, def-open-and-closed-in-r, def-neighbourhood-r, thm-n-cross-n-countable, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "$\\mathbb{Q}$ meager, not $G_\\delta$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-09
    scope: published-audit-targeted
    context_sha256: d66495c3278fff64c9ad999f462ae04a1e1646c19b701056c29ab6099277b243
    item_sha256: f278811ea8f0cad9b18ca8692c27b9f5982048429cb35d3f357ada4c5e527cd3
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is an $F_\sigma$ set ([[def-f-sigma-g-delta]]) and is
   meager ([[def-nowhere-dense-meager]]);
2. $X$ is a $G_\delta$ set and is residual;
3. $\mathbb{Q}_{\mathbb{R}}$ is **not** a $G_\delta$ set, and $X$ is **not** an
   $F_\sigma$ set.

Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where
[[thm-baire-category-r]] is spent: no argument from the algebra of open and
closed sets alone can reach it, since $\mathbb{Q}_{\mathbb{R}}$ and $X$ are
interchanged by complementation while $F_\sigma$ and $G_\delta$ are, so any such
argument would prove the same thing about both sets and about neither.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$, the set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]), $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]), and a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]); a set is dense when its closure is $\mathbb{R}$, equivalently when every $N_\varepsilon(x)$ meets it ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]); the closure operator is monotone, so a superset of a dense set is dense ([[def-interior-closure-boundary-r]]).

[L3] $U$ is open when every point of it has a neighbourhood inside it, and $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ and $x \in N_\varepsilon(x)$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] A closed set is nowhere dense exactly when its interior is empty; a meager set is a union of a sequence of nowhere dense sets; residual means the complement is meager ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L5] $A$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]]).

[L6] A countable intersection of dense open subsets of $\mathbb{R}$ is dense ([[thm-baire-category-r]]).

[L7] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 For $c \in \mathbb{R}$ the singleton $\{c\}$ is closed and nowhere dense: its complement is open, since $x \ne c$ gives $N_{|x-c|}(x) \subseteq \mathbb{R} \setminus \{c\}$ by [L3]; and its interior is empty, since for every real $\varepsilon > 0$ the point $c + \varepsilon \cdot 2^{-1}$ lies in $N_\varepsilon(c)$ and differs from $c$, so no neighbourhood is contained in $\{c\}$, whence $\{c\}$ is a closed set with empty interior and [L4] applies. [L3, L4]

1.2 By [L1] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L1, choose]

2.1 $\mathbb{Q}_{\mathbb{R}} = \bigcup_{n \in \mathbb{N}} \{e(n)\}$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$; the sets $\{e(n)\}$ are closed and nowhere dense by step 1.1, so $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ by [L5] and meager by [L4]. This is claim 1. [step 1.1, step 1.2, L4, L5]

3.1 Put $W_n := \mathbb{R} \setminus \{e(n)\}$, an open set by step 1.1 and [L3]. A real $x$ lies in $\bigcap_n W_n$ exactly when $x \ne e(n)$ for every $n$, that is, exactly when $x \notin \mathbb{Q}_{\mathbb{R}}$, so $X = \bigcap_n W_n$ and $X$ is $G_\delta$ by [L5]; and $\mathbb{R} \setminus X = \mathbb{Q}_{\mathbb{R}}$ is meager by step 2.1, so $X$ is residual by [L4]. This is claim 2. Each $W_n$ is also dense, since every $N_\varepsilon(x)$ contains two distinct points and so meets $\mathbb{R} \setminus \{e(n)\}$, by [L2] and [L3]. [step 1.1, step 1.2, step 2.1, L2, L3, L4, L5]

4.1 Suppose, for contradiction, that $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, and by [L5] fix a sequence $(V_n)$ of open sets with $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$. Each $V_n$ contains $\mathbb{Q}_{\mathbb{R}}$, which is dense by [L2], so each $V_n$ is dense by [L2]; and each $W_n$ of step 3.1 is open and dense. [assume-contra, step 3.1, L2, L5, choose]

5.1 By [L7] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define a sequence $(D_j)$ by $D_{J(m,n)} := V_n$ when $m = 0$ and $D_{J(m,n)} := W_n$ when $m \ne 0$; this is total because $J$ is a bijection, and every $D_j$ is open and dense by step 4.1. Moreover $\bigcap_j D_j = \big(\bigcap_n V_n\big) \cap \big(\bigcap_n W_n\big) = \mathbb{Q}_{\mathbb{R}} \cap X = \varnothing$, since every $V_n$ and every $W_n$ occurs among the $D_j$ and every $D_j$ is one of them. [step 3.1, step 4.1, L7]

6.1 By [L6] the set $\bigcap_j D_j$ is dense, hence nonempty by [L2] and [L3], contradicting step 5.1. The assumption of step 4.1 is therefore untenable: $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$; and $X$ is not $F_\sigma$, since $\mathbb{R} \setminus X = \mathbb{Q}_{\mathbb{R}}$ would then be $G_\delta$ by [L5]. This is claim 3. [step 4.1, step 5.1, L2, L3, L5, L6, discharge-contradiction] ∎

## Remarks

- **Where the two halves of the argument part company.** Claim 1 is a listing argument: step 1.2 lists $\mathbb{Q}_{\mathbb{R}}$, and step 1.1 shows that each real singleton is nowhere dense; claim 3 uses the completeness of $\mathbb{R}$ through [[thm-nested-interval-property]], inside [[thm-baire-category-r]]. Indeed $\mathbb{Q}$ is a $G_\delta$ subset of itself, being the whole space, so no argument that ignores the ambient completeness can possibly give claim 3.

- **The irrationals are also uncountable** ([[cor-irrationals-uncountable]]), by a different and much cheaper argument that needs only the countability of $\mathbb{Q}$ and the uncountability of $\mathbb{R}$. Uncountability and being residual are independent properties: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable.

- **The named witness for claim 3** is [[cex-irrationals-are-not-f-sigma]], and the false statement it refutes is [[fs-q-is-g-delta]]; the refutation is carried out here.

- **Meagre and measure zero are not the same smallness.** $\mathbb{Q}_{\mathbb{R}}$ is both, but the two notions diverge as soon as one leaves the countable case: [[cex-meager-set-of-full-measure]] writes $\mathbb{R}$ as a meager set together with a set of measure zero, and the set of measure zero there is residual. So being residual, which is what claim 2 gives for $X$, carries no information at all about size in measure.
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

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-dirichlet-and-thomae-functions`

````markdown
---
id: def-dirichlet-and-thomae-functions
kind: definition
title: "The Dirichlet function $1_{\\mathbb{Q}}$, and Thomae's function $t$ with $t(x) = 1/q$ at a rational $x = p/q$ in lowest terms with $q \\ge 1$ and $t(x) = 0$ at every irrational $x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [lem-coprime-divides-product, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-coprime, cor-gcd-quotients-coprime, lem-gcd-basic-values, def-common-divisor-and-gcd, thm-well-ordering-principle, def-complete-ordered-field, def-canonical-natural, lem-of-naturals-positive, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: [def-thomae-function, def-dirichlet-function, def-popcorn-function]
landmark: true
short: "Dirichlet and Thomae functions"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ denotes the chain of canonical embeddings
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and
each set is identified with its image in $\mathbb{R}$, as elsewhere in this
library; for a natural $q$ the real $\iota(q) = q \cdot 1_{\mathbb{R}}$ is the
canonical natural ([[def-canonical-natural]]), and $\iota(q) > 0$ for $q \ge 1$
([[lem-of-naturals-positive]]). A real is **rational** when it lies in
$\mathbb{Q}$ and **irrational** otherwise; both sets are dense in $\mathbb{R}$
([[lem-q-and-irrationals-dense-r]]).

### The Dirichlet function

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}.\end{cases}$$

This is the indicator of the rationals. It is a function because every real
either lies in $\mathbb{Q}$ or does not, and the two clauses are exclusive.

### The least denominator of a rational

Let $x \in \mathbb{Q}$ and put

$$Q(x) \;:=\; \{\, q \in \mathbb{N} \;:\; q \ge 1 \ \text{ and } \ \iota(q)\,x \in \mathbb{Z} \,\}.$$

**$Q(x)$ is nonempty.** Every rational is $a/b$ with $a \in \mathbb{Z}$ and $b$ a
positive integer ([[lem-int-embeds-rat]]), and a positive integer is $\iota(q)$
for a unique natural $q \ge 1$ ([[lem-nat-embeds-int]]); then
$\iota(q)\,x = a \in \mathbb{Z}$, so $q \in Q(x)$.

By the well-ordering principle ([[thm-well-ordering-principle]]) the nonempty
subset $Q(x) \subseteq \mathbb{N}$ has a least element. Write

$$q(x) \;:=\; \min Q(x) \;\ge\; 1,$$

the **least denominator** of $x$, and $p(x) := \iota(q(x))\,x \in \mathbb{Z}$,
so that

$$x \;=\; \frac{p(x)}{\iota(q(x))} .$$

Nothing is selected here: $q(x)$ is the least element of a set determined by
$x$, so it is a function of $x$ alone.

**The least denominator is the denominator in lowest terms.** The integers
$p(x)$ and $q(x)$ are coprime ([[def-coprime]]). Indeed put
$d := \gcd(p(x), q(x))$, which satisfies $d \ge 1$ because $q(x) \ge 1$ makes the
pair different from $(0,0)$ ([[lem-gcd-basic-values]],
[[def-common-divisor-and-gcd]]). Then $d$ divides $q(x)$, so $q(x)/d$ is a
natural number $\ge 1$, and $\iota(q(x)/d) = \iota(q(x))/d$ because $\iota$
carries products of naturals to products ([[lem-of-naturals-positive]]); hence

$$\iota(q(x)/d)\,x \;=\; \frac{\iota(q(x))\,x}{d} \;=\; \frac{p(x)}{d} \;\in\; \mathbb{Z},$$

so $q(x)/d \in Q(x)$ and therefore $q(x)/d \ge q(x)$, which forces $d = 1$.
**Conversely, a lowest-terms denominator is the least one, so the description is
unambiguous.** Suppose $x = p/\iota(q)$ with $q \ge 1$ a natural, $p \in \mathbb{Z}$
and $\gcd(p,q) = 1$. Then $q \in Q(x)$, so $q_{0} := q(x) \le q$; and from
$p/\iota(q) = p(x)/\iota(q_{0})$ we get $q_{0}p = q\,p(x)$ in $\mathbb{Z}$, so
$q \mid q_{0}p$, and $\gcd(p,q) = 1$ gives $q \mid q_{0}$
([[lem-coprime-divides-product]], claim 1), hence $q \le q_{0}$. So $q = q(x)$:
writing $x = p/q$ "in lowest terms with $q \ge 1$" and taking $q = q(x)$ describe
the same integer, and [[cor-gcd-quotients-coprime]] is what produces such a
representation from an arbitrary one.

### Thomae's function

$$t : \mathbb{R} \to \mathbb{R}, \qquad t(x) := \begin{cases} 1/\iota(q(x)) & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}.\end{cases}$$

It is also called the **popcorn function** or the **ruler function**. The value
is well defined because $q(x)$ is, and $\iota(q(x)) \ge 1 > 0$ is invertible.

**Boundary values, stated rather than left to the reader.**

- $t(0) = 1$. Indeed $\iota(1)\cdot 0 = 0 \in \mathbb{Z}$, so $1 \in Q(0)$ and
  $q(0) = 1$; the representation is $0 = 0/1$.
- $t(m) = 1$ for every integer $m$, by the same computation with $1 \in Q(m)$.
- $0 < t(x) \le 1$ for every rational $x$, since $\iota(q(x)) \ge 1$; and
  $t(x) = 0$ exactly at the irrationals.

**On the range.** The values of $t$ are $0$ and the reciprocals
$1/\iota(q)$ of the canonical naturals $q \ge 1$; every such value is attained,
$1/\iota(q)$ being the value at the rational $1/\iota(q)$ itself, whose least
denominator is $q$ because $\iota(k)/\iota(q) \in \mathbb{Z}$ with
$1 \le k < q$ would give a positive integer smaller than $1$.
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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
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

### `def-oscillation`

````markdown
---
id: def-oscillation
kind: definition
title: "The oscillation $\\omega_f(S) = \\sup\\{\\,|f(x) - f(y)| : x, y \\in S\\,\\}$ of $f$ on a set and the oscillation $\\omega_f(c) = \\inf_{\\delta > 0} \\omega_f(A \\cap N_\\delta(c))$ at a point, both taken in the extended reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-extended-reals, lem-extended-reals-complete, def-neighbourhood-r, def-bounded-set, def-infimum, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field]
justified_by: []
aliases: [def-oscillation-at-a-point]
landmark: true
short: "oscillation $\\omega_f$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. All suprema and
infima below are taken in the extended real line
$\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$
([[def-extended-reals]]), where **every** subset has a least upper bound and a
greatest lower bound ([[lem-extended-reals-complete]]); no boundedness
hypothesis on $f$ is therefore needed anywhere, and none is imposed.

**Oscillation on a set.** For $S \subseteq A$ put

$$\omega_f(S) \;:=\; \sup\{\, |f(x) - f(y)| \;:\; x, y \in S \,\} \;\in\; \overline{\mathbb{R}} .$$

**Oscillation at a point.** For $c \in A$ put

$$\omega_f(c) \;:=\; \inf\{\, \omega_f(A \cap N_\delta(c)) \;:\; \delta \in \mathbb{R},\ \delta > 0 \,\} \;\in\; \overline{\mathbb{R}},$$

where $N_\delta(c) = (c - \delta, c + \delta)$ is the $\delta$-neighbourhood of
$c$ ([[def-neighbourhood-r]]).

The two uses of the symbol $\omega_f$ are distinguished by their argument: a
subset of $A$ in the first, a point of $A$ in the second. Where confusion is
possible the first is written $\omega_f(S)$ with $S$ named as a set.

### Both values are well posed; point oscillation and nonempty-set oscillation are nonnegative

**The set in the first display is nonempty whenever $S$ is**, since $x = y \in S$
gives the value $|f(x) - f(x)| = 0$; so $\omega_f(S) \ge 0$ for nonempty $S$,
and $\omega_f(S) = \sup \varnothing = -\infty$ for $S = \varnothing$
([[lem-extended-reals-complete]]). Only nonempty $S$ occurs below.

**The set in the second display is nonempty**, since some real $\delta > 0$
exists, and each of its members is $\ge 0$: for $c \in A$ the set
$A \cap N_\delta(c)$ contains $c$ itself, because $|c - c| = 0 < \delta$, so it
is nonempty and $\omega_f(A \cap N_\delta(c)) \ge 0$
([[lem-of-abs-value]]). Hence $0$ is a lower bound of that set and

$$0 \;\le\; \omega_f(c) \;\le\; \omega_f(A \cap N_\delta(c)) \qquad \text{for every real } \delta > 0,$$

the second inequality because $\omega_f(c)$ is a lower bound of the set of which
$\omega_f(A \cap N_\delta(c))$ is a member. In particular $\omega_f(c)$ is never
$-\infty$.

### Monotonicity, and the case of a bounded $f$

**$\omega_f$ is monotone under inclusion.** If $S \subseteq T \subseteq A$ then
every value $|f(x) - f(y)|$ with $x, y \in S$ is also a value with $x, y \in T$,
so the first set of values is contained in the second and
$\omega_f(S) \le \omega_f(T)$: a supremum of a subset is at most the supremum of
the set. Consequently $\delta \mapsto \omega_f(A \cap N_\delta(c))$ is
nondecreasing in $\delta$, since $\delta \le \delta'$ gives
$N_\delta(c) \subseteq N_{\delta'}(c)$ ([[def-neighbourhood-r]]).

**When $f$ is bounded, nonempty-set and point oscillations are real.** Suppose
there is a real $M$ with $|f(x)| \le M$ for every $x \in A$
([[def-bounded-set]]). Then for $x, y \in A$,

$$|f(x) - f(y)| \;\le\; |f(x)| + |f(y)| \;\le\; 2M$$

([[lem-of-triangle-inequality]], [[lem-of-abs-value]]), so $\omega_f(S) \le 2M$
for every $S \subseteq A$. If
$S$ is nonempty, $\omega_f(S)$ is a real number in $[0,2M]$, and every point
oscillation is also a real number in $[0,2M]$: the supremum of a nonempty
subset of $\mathbb{R}$ that is bounded above in $\mathbb{R}$ is the real
supremum ([[lem-extended-reals-complete]], [[def-complete-ordered-field]],
[[def-infimum]]). The convention $\omega_f(\varnothing)=-\infty$ remains the
single empty-set exception. Apart from that exception, an infinite extended
value can occur only when $f$ is unbounded.

**The notation.** The letter is $\omega$ throughout this library, never
"$\operatorname{osc}$", and the function is always in the subscript.
````

### `ex-distance-to-the-integers-is-1-lipschitz`

````markdown
---
id: ex-distance-to-the-integers-is-1-lipschitz
kind: example
title: "The distance $\\psi(x) = d(x, \\mathbb{Z})$ from a real number to the integers is $1$-Lipschitz, hence uniformly continuous, takes values in $[0,1/2]$, and vanishes exactly on $\\mathbb{Z}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-bounded-diameter, lem-distance-to-set-is-lipschitz, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, thm-metric-regularity-hierarchy, def-lipschitz-holder-contraction, def-uniform-continuity-real, def-continuity-real, lem-integer-part, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, def-metric-space, def-infimum, def-max-min, lem-finite-set-has-max, def-interval, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [ex-psi-is-1-lipschitz]
landmark: true
short: "$\\psi = d(\\cdot,\\mathbb{Z})$ is $1$-Lipschitz"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Triangle wave (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_wave"
    - title: "J. Heinonen, Lectures on Lipschitz Analysis"
      url: "https://www.math.uchicago.edu/~shmuel/QuantCourse%20/Metric%20Space/Heinonen%2C%20Lecs%20on%20Lip%20Analysis.pdf"
pipeline_run: null
---

## Example

Take $\mathbb{R}$ with its usual metric $d(x,y) = |x-y|$
([[lem-real-line-is-a-metric-space]]), identify $\mathbb{Z}$ with its canonical
copy inside $\mathbb{R}$ ([[def-integers]], [[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and let

$$\psi(x) \;:=\; d(x, \mathbb{Z}) \;=\; \inf\{\, |x - n| \ : \ n \in \mathbb{Z} \,\}$$

be the distance from $x$ to the nonempty set $\mathbb{Z}$
([[def-metric-bounded-diameter]]). Then:

1. **$\psi$ is $1$-Lipschitz on $\mathbb{R}$**: $|\psi(x) - \psi(y)| \le |x-y|$
   for all real $x, y$. Consequently $\psi$ is uniformly continuous on
   $\mathbb{R}$ ([[def-uniform-continuity-real]]) and continuous on $\mathbb{R}$
   ([[def-continuity-real]]).
2. **The infimum is attained, and computed.** Writing $m := \lfloor x \rfloor$
   for the integer part of $x$ ([[lem-integer-part]]) and $t := x - m$, so that
   $0 \le t < 1$,
   $$\psi(x) \;=\; \min\{\, t,\ 1-t \,\} \;=\; \min\bigl\{\, |x-m|,\ |x-(m+1)| \,\bigr\} ,$$
   so $\psi(x) = |x - n|$ for $n = m$ or $n = m+1$.
3. **Range.** $0 \le \psi(x) \le 1/2$ for every real $x$
   ([[def-interval]]).
4. **Zero set.** $\psi(x) = 0$ if and only if $x \in \mathbb{Z}$.

**Why this example is here.** It is the standard uniformly continuous function
of this track that is not defined by a formula in the field operations, and it
is obtained from the metric machinery rather than rebuilt: claim 1 is
[[lem-distance-to-set-is-lipschitz]] applied to $A := \mathbb{Z}$ in the metric
space $\mathbb{R}$, transported to a statement about a real function by
[[lem-real-and-metric-notions-agree]], clause 3. Only claims 2 to 4, which
compute the value, need an argument of their own.

**The same function is computed elsewhere, and nothing here depends on that.**
[[ex-distance-to-the-integers]] introduces $\psi$ on the companion page of
[[def-function-limit]] and proves the same computation together with
$1$-periodicity and the value at half-integers. That item lives on an examples
page, which is a leaf of the dependency graph, so no item may rest on it; the
verification below is therefore self-contained, and the duplication is
deliberate rather than an oversight.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the metric $d(x,y) = |x-y|$; the canonical copy of $\mathbb{Z}$ inside $\mathbb{R}$; a real $x$, the integer $m := \lfloor x \rfloor$ and the real $t := x - m$; and $\psi(x) := d(x,\mathbb{Z})$.

[L1] Distance to a nonempty set: for nonempty $A \subseteq X$ in a metric space, $d(x,A) := \inf\{\, d(x,a) : a \in A \,\}$, the infimum existing because the set of distances is nonempty and bounded below by $0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[def-metric-space]]).

[L2] $|d(x,A) - d(y,A)| \le d(x,y)$: the distance to a fixed nonempty set is $1$-Lipschitz as a map of metric spaces ([[lem-distance-to-set-is-lipschitz]]).

[L3] Dictionary: for $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$, a map is Lipschitz with constant $L$ as a map of metric spaces exactly when $|f(x)-f(y)| \le L|x-y|$ for all $x,y$; and a Lipschitz real function is uniformly continuous, hence continuous ([[lem-real-and-metric-notions-agree]], clauses 1, 3 and 6, [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-uniform-continuity-real]], [[def-continuity-real]]).

[L4] $\mathbb{R}$ with $d(x,y) = |x-y|$ is a metric space ([[lem-real-line-is-a-metric-space]]), and $\mathbb{Z}$ sits inside $\mathbb{R}$ as a totally ordered subring containing $0$ and $1$ and closed under $n \mapsto n \pm 1$, with no integer strictly between $n$ and $n+1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]).

[L5] Integer part: for every real $x$ there is exactly one integer $m$ with $m \le x < m+1$ ([[lem-integer-part]]).

[L6] Infimum and minimum: a lower bound of a set that belongs to the set is its infimum and its minimum ([[def-infimum]], [[def-max-min]]); and the minimum of a two-element set of reals exists and is one of the two ([[lem-finite-set-has-max]]).

[L7] Absolute value and order: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; the order is total; $1/2 > 0$ and $1 - 1/2 = 1/2$ ([[lem-of-abs-value]], [[def-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Z}$ is a nonempty subset of the metric space $\mathbb{R}$, since $0 \in \mathbb{Z}$, so $\psi(x) = d(x,\mathbb{Z})$ is defined for every real $x$ by [L1], and $\psi(x) \ge 0$. [L1, L4, L7]

1.2 By [L5] the integer $m = \lfloor x \rfloor$ satisfies $m \le x < m+1$, so $t = x - m$ satisfies $0 \le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \le 1$. [L5, L7]

2.1 **Claim 1.** By [L2], $|\psi(x) - \psi(y)| = |d(x,\mathbb{Z}) - d(y,\mathbb{Z})| \le d(x,y) = |x-y|$ for all real $x,y$; by [L3] this says exactly that $\psi$ is Lipschitz with constant $1$ as a real function on $\mathbb{R}$, hence uniformly continuous on $\mathbb{R}$ and continuous on $\mathbb{R}$. [step 1.1, L2, L3]

2.2 **Every distance from $x$ to an integer is at least $\min\{t, 1-t\}$.** Let $n \in \mathbb{Z}$. By [L4] and totality either $n \le m$ or $m < n$, and in the second case $m+1 \le n$. If $n \le m$ then $x - n \ge x - m = t \ge 0$, so $|x-n| = x-n \ge t$. If $m+1 \le n$ then $n - x \ge (m+1) - x = 1-t > 0$, so $|x-n| = n-x \ge 1-t$. Either way $|x-n| \ge \min\{t, 1-t\}$. [step 1.2, L4, L6, L7]

2.3 **Both candidate values occur.** Since $t \ge 0$ we have $t = |x-m|$, and since $1-t > 0$ we have $1-t = |x-(m+1)|$, with $m$ and $m+1$ in $\mathbb{Z}$. [step 1.2, L4, L7]

3.1 **Claim 2.** By steps 2.2 and 2.3 the real $\min\{t,1-t\}$ is a lower bound of $\{\, |x-n| : n \in \mathbb{Z} \,\}$ belonging to that set, so by [L6] it is the infimum and the minimum: $\psi(x) = \min\{t,1-t\} = \min\{|x-m|, |x-(m+1)|\}$, attained at $n = m$ or $n = m+1$. [step 2.2, step 2.3, L1, L6]

4.1 **Claim 3.** $\psi(x) \ge 0$ since $t \ge 0$ and $1-t > 0$. And $\psi(x) \le 1/2$: if $t \le 1/2$ then $\psi(x) \le t \le 1/2$, while if $t > 1/2$ then $1-t < 1-1/2 = 1/2$ and $\psi(x) \le 1-t < 1/2$. So $0 \le \psi(x) \le 1/2$. [step 1.2, step 3.1, L7]

4.2 **Claim 4.** If $\psi(x) = 0$ then $\min\{t,1-t\} = 0$ by step 3.1; since $1-t > 0$ this forces $t = 0$, that is $x = m \in \mathbb{Z}$. Conversely if $x \in \mathbb{Z}$ then $|x-x| = 0$ is a member of the set of distances and $0$ is a lower bound of it by step 1.1, so $\psi(x) = 0$ by [L6]. [step 1.1, step 1.2, step 3.1, L6, L7]

5.1 Claims 1 to 4 are verified: $\psi$ is $1$-Lipschitz and therefore uniformly continuous and continuous on $\mathbb{R}$, its value at $x$ is $\min\{t, 1-t\}$ and is attained at a nearest integer, its values lie in $[0,1/2]$, and it vanishes exactly on $\mathbb{Z}$. [step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **No completeness of $\mathbb{R}$ is spent on the infimum here.** [[def-metric-bounded-diameter]] produces $d(x,\mathbb{Z})$ from the greatest-lower-bound property, but step 3.1 does not need that route: it exhibits an element of the set of distances that is also a lower bound, which is the definition of the infimum read directly ([[def-infimum]]). Completeness does enter once, through [[lem-integer-part]], whose existence half is the Archimedean property.

- **Why "nearest integer" is a theorem and not a phrase.** The words presuppose that a nearest integer exists, and that is exactly what steps 2.2 and 2.3 establish. When $t = 1/2$ there are two nearest integers, $m$ and $m+1$, and the formula $\min\{t,1-t\}$ is indifferent to which is taken, so nothing is selected.

- **What this contributes to the hierarchy.** $\psi$ is Lipschitz, hence uniformly continuous ([[lem-real-and-metric-notions-agree]], clause 6), and it is bounded and not monotone; so it is a uniformly continuous function that is neither a polynomial nor eventually constant, and it is the natural domain-wide example to set beside [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]], where uniform continuity fails.
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

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
````

### `lem-integer-part`

````markdown
---
id: lem-integer-part
kind: lemma
title: "Integer part: for every real $x$ there is exactly one integer $m$ with $m \\le x < m + 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, thm-of-archimedean, thm-well-ordering-principle, thm-induction-principle, lem-of-naturals-positive, lem-of-add-order, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [lem-floor-function, lem-floor-exists]
landmark: true
short: "integer part (floor)"
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the
embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],
[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$
with

$$m \;\le\; x \;<\; m + 1 .$$

It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**,
of $x$.

**Two independent ingredients are needed and neither may be dropped.** Existence
is the Archimedean property ([[thm-of-archimedean]]) together with the
well-ordering of $\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says
that $x$ is caught between two integers at all, the second picks the *least*
integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer
lies strictly between $m$ and $m+1$.

This lemma is stated once here and reused. It is what turns "the nearest integer
to $x$" from a picture into an object, and the companion page's oscillator
$\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line.

## Facts & Assumptions

**Given:** A real $x$. Naturals, integers and rationals are identified with their canonical copies in $\mathbb{R}$ along $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$.

[L1] The embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition, multiplication and order ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]]); $\mathbb{Z}$ is a totally ordered commutative ring ([[thm-int-ordered-ring]], [[thm-int-comm-ring]]); every integer $\ge 0$ is the image of a unique natural, that map being injective and order preserving ([[lem-nat-embeds-int]]); and a natural $j \ne 0$ satisfies $j \ge 1$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L2] The image of a natural $n \ge 1$ under the composite $\mathbb{N} \to \mathbb{R}$ is the canonical natural $n \cdot 1_{\mathbb{R}}$ of [[lem-of-naturals-positive]]. Indeed that composite preserves $1$ and addition by [L1], while $n \cdot 1_{\mathbb{R}}$ is defined by $1 \cdot 1_{\mathbb{R}} = 1_{\mathbb{R}}$ and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1_{\mathbb{R}}$, so the two agree at $1$ and satisfy the same recursion; induction on $n$ ([[thm-induction-principle]]) gives the identification.

[L3] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L4] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Order arithmetic in $\mathbb{R}$: the order is total, so the negation of $t < u$ is $u \le t$; trichotomy, so $t < u$ and $u \le t$ cannot both hold; translation invariance ([[lem-of-add-order]]); $t \le |t|$ and $-t \le |t|$ ([[lem-of-abs-value]]); and transitivity ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L3] to the real $|x|$: fix a natural $n \ge 1$ with $|x| < n$. Since $x \le |x|$ and $-x \le |x|$, this gives $-n < x < n$. [L2, L3, L5, choose]

2.1 Put $S := \{\, k \in \mathbb{N} \ : \ x < k - n \,\}$, where $k - n$ is formed in $\mathbb{Z}$ and read in $\mathbb{R}$ through [L1]. It is a subset of $\mathbb{N}$, and it is nonempty: the natural $2n$ satisfies $2n - n = n > x$ by step 1.1, so $2n \in S$. [step 1.1, L1, L2, construct]

3.1 By the well-ordering principle [L4] let $k_0$ be the least element of $S$. [step 2.1, L4, choose]

4.1 The index $k_0$ is not $0$: for $k = 0$ the defining condition reads $x < 0 - n = -n$, which trichotomy excludes since $-n < x$ by step 1.1. Hence $k_0 \ne 0$, so $k_0 \ge 1$ by [L1], and $k_0 - 1$ is again a natural number. [step 1.1, step 3.1, L1, L5]

5.1 Set $m := (k_0 - 1) - n$, an integer. Since $k_0 - 1 < k_0$ and $k_0$ is the least element of $S$, the natural $k_0 - 1$ does not lie in $S$, that is, $x < (k_0 - 1) - n$ fails; the order being total, $m = (k_0 - 1) - n \le x$. [step 3.1, step 4.1, L1, L5, construct]

6.1 On the other hand $k_0 \in S$ gives $x < k_0 - n = \bigl((k_0 - 1) - n\bigr) + 1 = m + 1$. So $m \le x < m + 1$, and existence is proved. [step 3.1, step 5.1, L1, L5]

7.1 Uniqueness: suppose an integer $m'$ also satisfies $m' \le x < m' + 1$ and $m' \ne m$. The order of $\mathbb{Z}$ being total, one of $m < m'$ and $m' < m$ holds, and the two cases are the same with the roles of $m$ and $m'$ exchanged; so assume $m < m'$. Then $m' - m$ is an integer $> 0$, hence by [L1] the image of a natural $j \ne 0$, so $j \ge 1$ and $m' - m \ge 1$, that is $m + 1 \le m'$. But then $x < m + 1 \le m' \le x$, which trichotomy forbids. Hence $m' = m$. [step 6.1, L1, L5]

8.1 Therefore exactly one integer $m$ satisfies $m \le x < m + 1$, and we write $m = \lfloor x \rfloor$. [step 6.1, step 7.1, discharge-construct] ∎

## Remarks

- **What the two halves of the proof really use.** Step 1.1 is the only use of the Archimedean property, and it is indispensable: in a non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]) an element larger than every canonical natural has no integer part at all, since the set $S$ of step 2.1 would be empty. Step 3.1 is the only use of the well-ordering principle, and it is what makes the construction canonical: no choice is made anywhere, and $\lfloor x \rfloor$ is a function of $x$.

- **Immediate consequences, used later.** From $m \le x < m + 1$ one reads off $0 \le x - m < 1$ and $0 < (m+1) - x \le 1$; and $\lfloor x \rfloor = x$ exactly when $x$ is an integer, since an integer $m$ satisfies $m \le m < m + 1$ and uniqueness does the rest. The translation identity $\lfloor x + p \rfloor = \lfloor x \rfloor + p$ for an integer $p$ follows the same way: adding $p$ to $m \le x < m+1$ gives $m + p \le x + p < (m + p) + 1$, and uniqueness identifies $m + p$ as the integer part of $x + p$.

- **The ceiling is not defined here** and is not needed on this page; it would be the least integer $\ge x$, obtained from the same set $S$ without the shift by one.
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

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
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

### `thm-closure-characterisations-r`

````markdown
---
id: thm-closure-characterisations-r
kind: theorem
title: "The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-r, def-limit-point-r, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, with closure $\overline{A}$ as in
[[def-interior-closure-boundary-r]] and derived set $A'$ as in
[[def-limit-point-r]]. Write

$$E \;:=\; \{\, x \in \mathbb{R} : N_\varepsilon(x) \cap A \ne \varnothing \text{ for every real } \varepsilon > 0 \,\}$$

for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:

1. $\overline{A} = E$.
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is the smallest closed superset of $A$: it is closed, it
   contains $A$, and it is contained in every closed $F$ with $A \subseteq F$.
4. $A$ is closed if and only if $A = \overline{A}$, if and only if
   $A' \subseteq A$.

Claim 3 is the content of the definition of $\overline{A}$ and is restated here
so that the four descriptions stand together; claims 1, 2 and 4 are the ones
that carry work.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$, and the set $E$ of adherent points of $A$ as displayed in the Statement.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\} \subseteq N_\varepsilon(x)$; and if $y \in N_\varepsilon(x)$ then $\delta := \varepsilon - |y - x| > 0$ and $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] $\overline{A}$ is the intersection of the nonempty family of closed supersets of $A$; it is closed, it contains $A$, and it is contained in every closed superset of $A$ ([[def-interior-closure-boundary-r]], [[thm-open-set-algebra-r]]).

[L4] $x$ is an adherent point of $A$ when every $N_\varepsilon(x)$ meets $A$, a limit point when every $N^{*}_\varepsilon(x)$ meets $A$, and $A'$ is the set of limit points ([[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq E$: for $x \in A$ and any $\varepsilon > 0$ one has $x \in N_\varepsilon(x) \cap A$, so that intersection is nonempty. [L2, L4]

1.2 Let $x \in \mathbb{R} \setminus E$; by the definition of $E$ there is a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \varnothing$. [L4, choose]

1.3 Let $F$ be closed with $A \subseteq F$, and let $x \in \mathbb{R} \setminus F$; since $\mathbb{R} \setminus F$ is open there is a real $\eta > 0$ with $N_\eta(x) \subseteq \mathbb{R} \setminus F$. [L1, choose]

2.1 For every $y \in N_\varepsilon(x)$ the radius $\delta := \varepsilon - |y - x|$ is positive and $N_\delta(y) \subseteq N_\varepsilon(x)$, so $N_\delta(y) \cap A = \varnothing$ and $y \notin E$; hence $N_\varepsilon(x) \subseteq \mathbb{R} \setminus E$, and since $x$ was an arbitrary point of $\mathbb{R} \setminus E$ that set is open, that is, $E$ is closed. [step 1.2, L1, L2, L4]

2.2 From $N_\eta(x) \subseteq \mathbb{R} \setminus F \subseteq \mathbb{R} \setminus A$ we get $N_\eta(x) \cap A = \varnothing$, so $x \notin E$; hence $\mathbb{R} \setminus F \subseteq \mathbb{R} \setminus E$, that is, $E \subseteq F$, for every closed $F \supseteq A$. [step 1.3, L4]

3.1 By steps 1.1 and 2.1 the set $E$ is a closed superset of $A$, so $\overline{A} \subseteq E$ by the leastness in [L3]; and $\overline{A}$ is itself a closed superset of $A$ by [L3], so step 2.2 applied to $F = \overline{A}$ gives $E \subseteq \overline{A}$. Hence $\overline{A} = E$, which is claim 1. [step 1.1, step 2.1, step 2.2, L3]

4.1 $E = A \cup A'$: if $x \in E$ and $x \notin A$ then for every $\varepsilon > 0$ some $a \in N_\varepsilon(x) \cap A$ exists, and $a \ne x$ because $x \notin A$, so $a \in N^{*}_\varepsilon(x) \cap A$ and $x \in A'$; conversely $A \subseteq E$ by step 1.1, and $A' \subseteq E$ because $N^{*}_\varepsilon(x) \subseteq N_\varepsilon(x)$. Combining with step 3.1 gives $\overline{A} = A \cup A'$, which is claim 2. [step 1.1, step 3.1, L2, L4]

5.1 Claim 4: if $A$ is closed then $A$ is a closed superset of itself, so $\overline{A} \subseteq A$ by [L3], while $A \subseteq \overline{A}$ by [L3], whence $A = \overline{A}$; conversely if $A = \overline{A}$ then $A$ is closed because $\overline{A}$ is. Finally $A = \overline{A}$ says $A = A \cup A'$ by step 4.1, and $A = A \cup A'$ holds exactly when $A' \subseteq A$. [step 4.1, L3]

6.1 Claim 3 is [L3] restated, and claims 1, 2 and 4 are steps 3.1, 4.1 and 5.1, so all four hold. [step 3.1, step 4.1, step 5.1, L3] ∎

## Remarks

- **Which claim does the work in practice.** Claim 1 is the one used almost
  everywhere below: to show a point lies in $\overline{A}$ one exhibits, for each
  $\varepsilon > 0$, a point of $A$ within $\varepsilon$ of it. Claim 2 is what
  separates the two ways a point can be adherent, by membership or by
  accumulation, and it is what makes the notion of an isolated point visible.

- **No special property of $\mathbb{R}$ is used.** The argument uses the
  definitions of open, closed, neighbourhood and closure, and the order enters
  only through the nesting property of neighbourhoods; neither the
  least-upper-bound property nor the Archimedean property appears at any step.
  The results of this page that do use them are flagged in
  [[rem-r-native-topology-scope]].

- **The sequential form is a separate theorem and costs more.** Replacing
  "every neighbourhood meets $A$" by "some sequence in $A$ converges to $x$" is
  [[lem-sequential-characterisation-of-closure-r]], and the passage from the
  first to the second spends the axiom of countable choice, since it selects one
  point of $A$ from each of infinitely many neighbourhoods. The characterisation
  proved above is choice free.
````

### `thm-continuity-iff-oscillation-zero`

````markdown
---
id: thm-continuity-iff-oscillation-zero
kind: theorem
title: "$f : A \\to \\mathbb{R}$ is continuous at $c \\in A$ if and only if $\\omega_f(c) = 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-oscillation, def-continuity-real, def-extended-reals, lem-extended-reals-complete, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "continuity iff zero oscillation"
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
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
    - title: "Real Function is Continuous at Point iff Oscillation is Zero (ProofWiki)"
      url: "https://proofwiki.org/wiki/Real_Function_is_Continuous_at_Point_iff_Oscillation_is_Zero"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then

$$f \text{ is continuous at } c \quad \Longleftrightarrow \quad \omega_f(c) = 0$$

([[def-continuity-real]], [[def-oscillation]]).

Since $\omega_f(c) \ge 0$ always ([[def-oscillation]]), the equivalent form of
the right-hand side is: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with $\omega_f(A \cap N_\delta(c)) < \varepsilon$.

**This is the tool that converts a pointwise condition into a set condition.**
Continuity at $c$ is a statement about $f$ near $c$ with a quantifier over
$\varepsilon$; $\omega_f(c) = 0$ is the vanishing of a single extended real
attached to the point. The change of form is what makes the discontinuity set
accessible: the sets $\{\,x : \omega_f(x) \ge \varepsilon\,\}$ are closed
([[lem-oscillation-superlevel-sets-are-closed]]) and their union over
$\varepsilon = 1, 1/2, 1/3, \dots$ is the discontinuity set
([[thm-discontinuity-set-is-f-sigma]]).

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, and a point $c \in A$.

[L1] $f$ is continuous at $c$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ with $|x - c| < \delta$; equivalently for every $x \in A \cap N_\delta(c)$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] $\omega_f(S) = \sup\{|f(x) - f(y)| : x, y \in S\}$ and $\omega_f(c) = \inf\{\omega_f(A \cap N_\delta(c)) : \delta > 0\}$, both in $\overline{\mathbb{R}}$; $0 \le \omega_f(c) \le \omega_f(A \cap N_\delta(c))$ for every real $\delta > 0$, and $c \in A \cap N_\delta(c)$ ([[def-oscillation]], [[def-extended-reals]]).

[L3] In $\overline{\mathbb{R}}$ every subset has a least upper bound and a greatest lower bound; a supremum is at most an extended real $u$ exactly when $u$ bounds every member of the set, and an infimum is at least an extended real $\ell$ exactly when $\ell$ bounds every member from below ([[lem-extended-reals-complete]]).

[L4] $|u - w| \le |u - v| + |v - w|$ and $|u| \ge 0$ for reals $u, v, w$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is continuous at $c$ and let $\varepsilon > 0$ be real. Take $\delta > 0$ with $|f(x) - f(c)| < \varepsilon/2$ for every $x \in A \cap N_\delta(c)$. [L1]

1.2 Conversely, suppose $\omega_f(c) = 0$ and let $\varepsilon > 0$ be real. Not every member of $\{\omega_f(A \cap N_\delta(c)) : \delta > 0\}$ can be $\ge \varepsilon$, for then $\varepsilon$ would be a lower bound of that set and the infimum $\omega_f(c) = 0$ would satisfy $0 \ge \varepsilon$. So there is a real $\delta > 0$ with $\omega_f(A \cap N_\delta(c)) < \varepsilon$. [L2, L3]

2.1 For $x, y \in A \cap N_\delta(c)$ with $\delta$ as in step 1.1, $|f(x) - f(y)| \le |f(x) - f(c)| + |f(c) - f(y)| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; so $\varepsilon$ is an upper bound of the set whose supremum is $\omega_f(A \cap N_\delta(c))$, and therefore $\omega_f(A \cap N_\delta(c)) \le \varepsilon$. [step 1.1, L2, L3, L4]

2.2 With $\delta$ as in step 1.2 and any $x \in A \cap N_\delta(c)$: both $x$ and $c$ lie in $A \cap N_\delta(c)$, so $|f(x) - f(c)|$ is one of the values whose supremum is $\omega_f(A \cap N_\delta(c))$ and therefore $|f(x) - f(c)| \le \omega_f(A \cap N_\delta(c)) < \varepsilon$. [step 1.2, L2, L3]

3.1 Hence $0 \le \omega_f(c) \le \varepsilon$ for every real $\varepsilon > 0$. If $\omega_f(c)$ were not $0$ it would satisfy $0 < \omega_f(c) \le 1$, hence be a positive real, and taking $\varepsilon := \omega_f(c)/2$ would give $\omega_f(c) \le \omega_f(c)/2$, which is false for a positive real. So $\omega_f(c) = 0$. [step 2.1, L2, L3]

4.1 Since $\varepsilon > 0$ was arbitrary in step 1.2, the continuity condition holds at $c$, and $f$ is continuous at $c$. Together with step 3.1 this proves the equivalence. [step 3.1, step 2.2, L1] ∎

## Remarks

- **Where the extended reals are used, and where they are not.** The definition
  of $\omega_f$ needs them, because $f$ may be unbounded near $c$ and the
  supremum may then be $+\infty$; the proof needs only the order relations, and
  the two directions never compare an infinite value with a real except through
  the inequality $0 \le \omega_f(c) \le \varepsilon$, which already forces
  $\omega_f(c)$ to be real.

- **The oscillation measures how badly continuity fails, not merely whether it
  does.** The theorem uses only whether $\omega_f(c)$ vanishes, but the number
  itself carries more: the oscillation of Thomae's function at a point $c$ is
  proved below to be exactly $t(c)$
  ([[thm-dirichlet-and-thomae-continuity-sets]]), so it is $1/q$ at a rational
  with least denominator $q$ and $0$ at every irrational.
````

### `thm-discontinuity-set-is-f-sigma`

````markdown
---
id: thm-discontinuity-set-is-f-sigma
kind: theorem
title: "For $f : A \\to \\mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\\sigma$ subset of $\\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\\delta$ subset; for $A = \\mathbb{R}$ the two sets are $F_\\sigma$ and $G_\\delta$ outright"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-f-sigma-g-delta, def-open-and-closed-in-r, cor-archimedean-reciprocal, def-continuity-real, def-extended-reals, def-canonical-natural, lem-of-naturals-positive, def-classification-of-discontinuities]
justified_by: []
aliases: [thm-continuity-set-is-g-delta]
landmark: true
short: "discontinuity set is $F_\\sigma$"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Write

$$D \;:=\; \{\, x \in A : f \text{ is discontinuous at } x \,\}, \qquad C \;:=\; A \setminus D$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then:

1. **Pointwise exhaustion.** $D = \{\, x \in A : \omega_f(x) > 0 \,\}$
   ([[def-oscillation]]), and $D$ is the union of the increasing sequence of
   superlevel sets
   $$D \;=\; \bigcup_{n \in \mathbb{N}} \{\, x \in A : \omega_f(x) \ge 1/\iota(n+1) \,\}$$
   ([[def-canonical-natural]]), whose thresholds are $1, 1/2, 1/3, \dots$.
2. **Descriptive form.** There is an $F_\sigma$ set $F \subseteq \mathbb{R}$ and
   a $G_\delta$ set $V \subseteq \mathbb{R}$ ([[def-f-sigma-g-delta]]) with
   $$D \;=\; A \cap F, \qquad C \;=\; A \cap V, \qquad V = \mathbb{R} \setminus F ,$$
   and $F$ may be taken to be $\bigcup_{n \in \mathbb{N}} G_n$ with each $G_n$ a
   closed subset of $\mathbb{R}$ cutting down on $A$ to the $n$-th set of
   claim 1 ([[lem-oscillation-superlevel-sets-are-closed]]).

In particular, when $A = \mathbb{R}$ the discontinuity set $D$ is an $F_\sigma$
subset of $\mathbb{R}$ and the continuity set $C$ is a $G_\delta$ subset, and
claim 1 reads $D = \bigcup_{n} \{\, x \in \mathbb{R} : \omega_f(x) \ge 1/\iota(n+1) \,\}$.

**Claim 1 is stated separately because it is what is cited downstream.** The
exhaustion of $D$ by the superlevel sets $\{\omega_f \ge 1/\iota(n+1)\}$ is used
directly wherever a property has to be established one threshold at a time —
[[thm-baire-one-continuity-points]] shows each superlevel set nowhere dense and
concludes that $D$ is meager — and that use needs the identity itself, not only
the descriptive conclusion of claim 2.

**The statement is relative on purpose.** For a general domain $A$ the sets $D$
and $C$ are subsets of $A$, and neither is $F_\sigma$ or $G_\delta$ in
$\mathbb{R}$ in general; what the proof produces are two subsets of $\mathbb{R}$
that cut down to them. The absolute form is stated only for $A = \mathbb{R}$,
which is the case [[thm-continuity-set-realisation]] and
[[cor-no-function-is-continuous-exactly-on-q]] use.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$; and $\omega_f(c) \ge 0$ for every $c \in A$ ([[thm-continuity-iff-oscillation-zero]], [[def-oscillation]], [[def-extended-reals]]).

[L2] For every real $\varepsilon > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in A : \omega_f(x) \ge \varepsilon\} = A \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$, where $\iota(m)$ is the canonical natural of $m$ in $\mathbb{R}$; and $\iota$ is strictly increasing and positive on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A subset of $\mathbb{R}$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $S$ is $F_\sigma$ if and only if $\mathbb{R} \setminus S$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ put $\varepsilon_n := 1/\iota(n+1)$, a positive real since $n + 1 \ge 1$, and let $G_n \subseteq \mathbb{R}$ be closed with $\{x \in A : \omega_f(x) \ge \varepsilon_n\} = A \cap G_n$. [L2, L3, construct]

1.2 $D = \{\, x \in A : \omega_f(x) > 0 \,\}$: a point $x \in A$ is a discontinuity exactly when $\omega_f(x) \ne 0$, and $\omega_f(x) \ge 0$ always, so exactly when $\omega_f(x) > 0$. [L1]

2.1 $D \subseteq \bigcup_{n \in \mathbb{N}} (A \cap G_n)$. Let $x \in D$, so $\omega_f(x) > 0$. If $\omega_f(x) \ge \varepsilon_0 = 1$ then $x \in A \cap G_0$. Otherwise $0 < \omega_f(x) < 1$, so $\omega_f(x)$ is a positive real, and there is a natural $m \ge 1$ with $1/\iota(m) < \omega_f(x)$; writing $m = n + 1$ with $n \in \mathbb{N}$ gives $\omega_f(x) > \varepsilon_n$, hence $x \in A \cap G_n$. [step 1.1, step 1.2, L3]

2.2 Conversely $\bigcup_{n \in \mathbb{N}} (A \cap G_n) \subseteq D$: if $x \in A \cap G_n$ then $\omega_f(x) \ge \varepsilon_n > 0$, so $x \in D$. [step 1.1, step 1.2, L3]

3.1 Put $F := \bigcup_{n \in \mathbb{N}} G_n$, an $F_\sigma$ subset of $\mathbb{R}$ since each $G_n$ is closed and the family is indexed by $\mathbb{N}$. Then $A \cap F = \bigcup_{n} (A \cap G_n) = D$. [step 1.1, step 2.1, step 2.2, L4]

3.2 Claim 1 is proved: $D = \{x \in A : \omega_f(x) > 0\}$ by step 1.2, and $D = \bigcup_{n \in \mathbb{N}} \{x \in A : \omega_f(x) \ge \varepsilon_n\}$ by steps 2.1 and 2.2, since $A \cap G_n$ is by step 1.1 exactly the set $\{x \in A : \omega_f(x) \ge \varepsilon_n\}$ with $\varepsilon_n = 1/\iota(n+1)$. The union is increasing, since $n \le m$ gives $\iota(n+1) \le \iota(m+1)$ and hence $\varepsilon_m \le \varepsilon_n$. [step 1.1, step 1.2, step 2.1, step 2.2, L3]

4.1 Put $V := \mathbb{R} \setminus F$, a $G_\delta$ subset of $\mathbb{R}$. Then $A \cap V = A \setminus (A \cap F) = A \setminus D = C$. [step 3.1, L4]

5.1 Claim 2 is proved by steps 3.1 and 4.1; and for $A = \mathbb{R}$ the two identities read $D = F$ and $C = V$, so $D$ is $F_\sigma$ and $C$ is $G_\delta$ outright. [step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The exhaustion is indexed from $0$ and the thresholds are $1/\iota(n+1)$.** $\mathbb{N}$ contains $0$, so the sequence of thresholds is $1, 1/2, 1/3, \dots$ and never $1/\iota(0)$, which is not defined. Writing the union as $\bigcup_{n \ge 1} \{\omega_f \ge 1/\iota(n)\}$ names the same family; the form above is used because a sequence in this library is a function on $\mathbb{N}$.

- **The converse holds and is proved separately.** Every $G_\delta$ subset of $\mathbb{R}$ is the continuity set of some function $\mathbb{R} \to \mathbb{R}$ ([[thm-continuity-set-realisation]]), so the two classes coincide exactly. What the present theorem contributes is the direction that constrains: no function can have a continuity set that fails to be $G_\delta$, and [[cor-no-function-is-continuous-exactly-on-q]] spends that on $\mathbb{Q}$.
````

