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

## Wave 9 target — `thm-semicontinuous-evt`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `6c9c462f58c2a7d6ccbcdbca3e14db97d084d68d6bc760f02d7737896cdfb0b2`

## Complete current target

````markdown
---
id: thm-semicontinuous-evt
kind: theorem
title: "Semicontinuous extreme value theorem: an upper semicontinuous function on a nonempty compact $K \\subseteq \\mathbb{R}$ is bounded above and attains a maximum, and a lower semicontinuous one is bounded below and attains a minimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-semicontinuity, thm-semicontinuity-level-set-characterisation, def-open-cover-r, def-max-min, def-bounded-set, lem-sup-epsilon, def-complete-ordered-field, cor-archimedean-reciprocal, def-open-and-closed-in-r, lem-finite-set-has-max, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: [thm-usc-attains-maximum]
landmark: true
short: "semicontinuous extreme value theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Upper Semicontinuous Function on Compact Space Attains Maximum (ProofWiki)"
      url: "https://proofwiki.org/wiki/Real-Valued_Upper_Semicontinuous_Function_on_Compact_Space_attains_Maximum_with_Compact_Set_of_Maximizers"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be nonempty and compact ([[def-open-cover-r]]).

1. If $f : K \to \mathbb{R}$ is upper semicontinuous on $K$
   ([[def-semicontinuity]]) then $f[K]$ is bounded above
   ([[def-bounded-set]]) and $f$ attains a maximum: there is $x_0 \in K$ with
   $f(x) \le f(x_0)$ for every $x \in K$ ([[def-max-min]]).
2. If $f : K \to \mathbb{R}$ is lower semicontinuous on $K$ then $f[K]$ is
   bounded below and $f$ attains a minimum.

**The theorem is genuinely one-sided.** An upper semicontinuous function on a
compact set need be neither bounded below nor a function attaining its infimum;
the companion page gives such a function on $[0,1]$. Only the maximum is
asserted in claim 1, and only the minimum in claim 2.

Taking $f$ continuous, which is upper and lower semicontinuous at once
([[def-semicontinuity]]), recovers the classical extreme value theorem on a
compact subset of $\mathbb{R}$.

## Facts & Assumptions

**Given:** A nonempty compact $K \subseteq \mathbb{R}$ and an upper semicontinuous $f : K \to \mathbb{R}$.

[L1] For every real $\alpha$ there is an open $U_\alpha \subseteq \mathbb{R}$ with $U_\alpha \cap K = \{\, x \in K : f(x) < \alpha \,\}$, namely $U_\alpha = \{y \in \mathbb{R} : K \cap N_\rho(y) \subseteq \{f < \alpha\}$ for some real $\rho > 0\}$ ([[thm-semicontinuity-level-set-characterisation]], [[def-semicontinuity]], [[def-open-and-closed-in-r]]).

[L2] The set $U_\alpha$ of [L1] is monotone in $\alpha$: $\alpha \le \beta$ gives $\{f < \alpha\} \subseteq \{f < \beta\}$ and hence $U_\alpha \subseteq U_\beta$, directly from the displayed description.

[L3] $K$ compact means: every family of open subsets of $\mathbb{R}$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[def-open-cover-r]]).

[L4] For every real $x$ there is a natural $n \ge 1$ with $x < \iota(n)$, and for every real $\eta > 0$ a natural $n \ge 1$ with $1/\iota(n) < \eta$; $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] A nonempty set of reals bounded above has a least upper bound, and for every real $\varepsilon > 0$ some member of the set exceeds $\sup - \varepsilon$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]], [[def-bounded-set]]).

[L6] A nonempty finite set of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] For any $h : K \to \mathbb{R}$, $h$ is upper semicontinuous if and only if $-h$ is lower semicontinuous; hence a lower semicontinuous $f$ makes $-f$ upper semicontinuous ([[def-semicontinuity]], section “Negation exchanges the two”).

## Proof

**Proof technique:** direct.

1.1 For each real $\alpha$ let $U_\alpha$ be the open set of [L1], so that $U_\alpha \cap K = \{x \in K : f(x) < \alpha\}$ and $\alpha \le \beta$ implies $U_\alpha \subseteq U_\beta$. [L1, L2, construct]

2.1 The family $\{\, U_{\iota(n)} : n \in \mathbb{N},\ n \ge 1 \,\}$ covers $K$: every $x \in K$ has $f(x) < \iota(n)$ for some natural $n \ge 1$, and then $x \in U_{\iota(n)}$. [step 1.1, L4]

3.1 By compactness finitely many members cover $K$, say $U_{\iota(n_0)}, \dots, U_{\iota(n_j)}$ with each $n_i \ge 1$; let $N$ be the greatest of $\iota(n_0), \dots, \iota(n_j)$, which exists as the maximum of a nonempty finite set of reals. Then each $U_{\iota(n_i)} \subseteq U_{N}$, so $K \subseteq U_{N}$ and hence $K = U_{N} \cap K = \{x \in K : f(x) < N\}$. So $f[K]$ is bounded above by $N$. [step 1.1, step 2.1, L2, L3, L6]

4.1 $f[K]$ is nonempty, since $K$ is, and bounded above, so $M := \sup f[K]$ exists. [step 3.1, L5]

5.1 For each natural $n \ge 1$ put $\alpha_n := M - 1/\iota(n)$. The family $\{\, U_{\alpha_n} : n \ge 1 \,\}$ has **no** finite subfamily covering $K$. Indeed, let $U_{\alpha_{n_0}}, \dots, U_{\alpha_{n_j}}$ be finitely many of them; if the list is empty its union is empty and does not contain the nonempty $K$. Otherwise let $n^{*}$ be a natural among $n_0, \dots, n_j$ with $\alpha_{n^{*}}$ greatest, so that every member of the list is contained in $U_{\alpha_{n^{*}}}$. Since $\alpha_{n^{*}} < M = \sup f[K]$, there is $x \in K$ with $f(x) > \alpha_{n^{*}}$, and such an $x$ lies in $K$ but not in $U_{\alpha_{n^{*}}} \cap K = \{f < \alpha_{n^{*}}\}$, hence in no member of the list. [step 1.1, step 4.1, L2, L4, L5, L6]

6.1 By compactness, a family of open sets with no finite subfamily covering $K$ cannot itself cover $K$. So there is $x_{0} \in K$ with $x_{0} \notin U_{\alpha_n}$ for every natural $n \ge 1$, that is $f(x_{0}) \ge \alpha_n = M - 1/\iota(n)$ for every such $n$. [step 1.1, step 5.1, L3]

7.1 Hence $f(x_{0}) = M$. If $f(x_{0}) < M$ then $M - f(x_{0}) > 0$ and there is a natural $n \ge 1$ with $1/\iota(n) < M - f(x_{0})$, that is $f(x_{0}) < M - 1/\iota(n)$, contradicting step 6.1; and $f(x_{0}) \le M$ because $M$ is an upper bound of $f[K]$. [step 4.1, step 6.1, L4, L5]

8.1 So $f$ is bounded above on $K$ and attains the value $M = \sup f[K]$ at $x_{0} \in K$, which is a maximum of $f[K]$: this is claim 1. [step 3.1, step 4.1, step 7.1, L5]

9.1 Claim 2 follows by applying claim 1 to $-f$, which is upper semicontinuous on $K$ when $f$ is lower semicontinuous; then $-f$ is bounded above and attains a maximum at some $x_{1} \in K$, so $f$ is bounded below and $f(x_{1}) \le f(x)$ for every $x \in K$, a minimum. [step 8.1, L7] ∎

## Remarks

- **Where compactness is spent, and in which form.** Twice, and both times as the open-cover property of [[def-open-cover-r]]: once to bound $f$ above, once to find the point where the supremum is attained. No sequence is extracted and no countable choice is used; the second application is stated as the contrapositive of the covering property, which is why step 5.1 proves that no finite subfamily covers rather than assuming a limit point.

- **Semicontinuity cannot be dropped.** Both applications use only that the sets $\{f < \alpha\}$ are relatively open ([[thm-semicontinuity-level-set-characterisation]]), which is exactly upper semicontinuity, and nothing else about $f$ is used at all. A function whose strict sublevel sets are not relatively open can be unbounded above on a compact set: the function on $[0,1]$ equal to $1/x$ for $x \ne 0$ and to $0$ at $0$ is one.
````

## Current Wave 9 provenance determination

```json
{
  "id": "thm-semicontinuous-evt",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://proofwiki.org/wiki/Real-Valued_Upper_Semicontinuous_Function_on_Compact_Space_attains_Maximum_with_Compact_Set_of_Maximizers",
    "https://en.wikipedia.org/wiki/Semi-continuity"
  ],
  "rationale": "The source states exactly that an upper semicontinuous real function on a nonempty compact space attains its maximum, with the lower/minimum statement obtained dually.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-semicontinuity-level-set-characterisation",
      "source_section": "Statement",
      "quote": "**The open set is produced canonically, not chosen.** For each $\\alpha$ the\nproof exhibits one specific open $U_\\alpha \\subseteq \\mathbb{R}$ with\n$U_\\alpha \\cap A = \\{f < \\alpha\\}$, namely the set of reals $y$ admitting a\nradius $\\rho$ with $A \\cap N_\\rho(y) \\subseteq \\{f < \\alpha\\}$. No choice of a\nradius per point is made, which matters because the level set may be\nuncountable.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-semicontinuity",
      "source_section": "Definition",
      "quote": "- $f$ is **upper semicontinuous at $c$** when for every real $\\varepsilon > 0$\n  there is a real $\\delta > 0$ with\n  $$f(x) \\;<\\; f(c) + \\varepsilon \\qquad \\text{for every } x \\in A \\cap N_\\delta(c).$$\n- $f$ is **lower semicontinuous at $c$** when for every real $\\varepsilon > 0$\n  there is a real $\\delta > 0$ with\n  $$f(x) \\;>\\; f(c) - \\varepsilon \\qquad \\text{for every } x \\in A \\cap N_\\delta(c).$$\n- $f$ is **upper semicontinuous on $A$**, respectively **lower semicontinuous on\n  $A$**, when it is so at every point of $A$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-semicontinuity",
      "source_section": "Definition",
      "quote": "$f$ is upper semicontinuous at $c$ **if and only if** $-f$ is lower\nsemicontinuous at $c$, since $f(x) < f(c) + \\varepsilon$ says the same thing as\n$-f(x) > -f(c) - \\varepsilon$ ([[def-complete-ordered-field]]). Every statement\nabout one notion below is therefore proved for one of them and transferred to\nthe other by this substitution, never proved twice.",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "- An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of\n  $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq\n  \\mathcal{U}$ that is still an open cover of $K$.\n- A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when\n  $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members\n  $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$;\n  repetitions in the list are allowed and harmless.\n- $K$ is **compact** when every open cover of $K$ has a finite subcover:\n  for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$\n- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with\n  $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence\n  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every\n  such sequence has a subsequential limit ([[def-subsequential-limit]]) that\n  lies in $K$.",
      "uses": [
        "3.1",
        "6.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "2.1",
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "2.1",
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):",
      "uses": [
        "2.1",
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:",
      "uses": [
        "2.1",
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "4.1",
        "5.1",
        "7.1",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an\nupper bound of $S$ ([[def-complete-ordered-field]]). Then",
      "uses": [
        "4.1",
        "5.1",
        "7.1",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "The notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:",
      "uses": [
        "4.1",
        "5.1",
        "7.1",
        "8.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.",
      "uses": [
        "3.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-semicontinuous-evt-step-1-1",
      "claim": "For each real $\\alpha$ let $U_\\alpha$ be the open set of [L1], so that $U_\\alpha \\cap K = \\{x \\in K : f(x) < \\alpha\\}$ and $\\alpha \\le \\beta$ implies $U_\\alpha \\subseteq U_\\beta$. [L1, L2, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-2-1",
      "claim": "The family $\\{\\, U_{\\iota(n)} : n \\in \\mathbb{N},\\ n \\ge 1 \\,\\}$ covers $K$: every $x \\in K$ has $f(x) < \\iota(n)$ for some natural $n \\ge 1$, and then $x \\in U_{\\iota(n)}$. [step 1.1, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L4"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-3-1",
      "claim": "By compactness finitely many members cover $K$, say $U_{\\iota(n_0)}, \\dots, U_{\\iota(n_j)}$ with each $n_i \\ge 1$; let $N$ be the greatest of $\\iota(n_0), \\dots, \\iota(n_j)$, which exists as the maximum of a nonempty finite set of reals. Then each $U_{\\iota(n_i)} \\subseteq U_{N}$, so $K \\subseteq U_{N}$ and hence $K = U_{N} \\cap K = \\{x \\in K : f(x) < N\\}$. So $f[K]$ is bounded above by $N$. [step 1.1, step 2.1, L2, L3, L6]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L2",
        "L3",
        "L6"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-4-1",
      "claim": "$f[K]$ is nonempty, since $K$ is, and bounded above, so $M := \\sup f[K]$ exists. [step 3.1, L5]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L5"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-5-1",
      "claim": "For each natural $n \\ge 1$ put $\\alpha_n := M - 1/\\iota(n)$. The family $\\{\\, U_{\\alpha_n} : n \\ge 1 \\,\\}$ has **no** finite subfamily covering $K$. Indeed, let $U_{\\alpha_{n_0}}, \\dots, U_{\\alpha_{n_j}}$ be finitely many of them; if the list is empty its union is empty and does not contain the nonempty $K$. Otherwise let $n^{*}$ be a natural among $n_0, \\dots, n_j$ with $\\alpha_{n^{*}}$ greatest, so that every member of the list is contained in $U_{\\alpha_{n^{*}}}$. Since $\\alpha_{n^{*}} < M = \\sup f[K]$, there is $x \\in K$ with $f(x) > \\alpha_{n^{*}}$, and such an $x$ lies in $K$ but not in $U_{\\alpha_{n^{*}}} \\cap K = \\{f < \\alpha_{n^{*}}\\}$, hence in no member of the list. [step 1.1, step 4.1, L2, L4, L5, L6]",
      "step": "5.1",
      "inputs": [
        "1.1",
        "4.1",
        "L2",
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-6-1",
      "claim": "By compactness, a family of open sets with no finite subfamily covering $K$ cannot itself cover $K$. So there is $x_{0} \\in K$ with $x_{0} \\notin U_{\\alpha_n}$ for every natural $n \\ge 1$, that is $f(x_{0}) \\ge \\alpha_n = M - 1/\\iota(n)$ for every such $n$. [step 1.1, step 5.1, L3]",
      "step": "6.1",
      "inputs": [
        "1.1",
        "5.1",
        "L3"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-7-1",
      "claim": "Hence $f(x_{0}) = M$. If $f(x_{0}) < M$ then $M - f(x_{0}) > 0$ and there is a natural $n \\ge 1$ with $1/\\iota(n) < M - f(x_{0})$, that is $f(x_{0}) < M - 1/\\iota(n)$, contradicting step 6.1; and $f(x_{0}) \\le M$ because $M$ is an upper bound of $f[K]$. [step 4.1, step 6.1, L4, L5]",
      "step": "7.1",
      "inputs": [
        "6.1",
        "4.1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-8-1",
      "claim": "So $f$ is bounded above on $K$ and attains the value $M = \\sup f[K]$ at $x_{0} \\in K$, which is a maximum of $f[K]$: this is claim 1. [step 3.1, step 4.1, step 7.1, L5]",
      "step": "8.1",
      "inputs": [
        "3.1",
        "4.1",
        "7.1",
        "L5"
      ]
    },
    {
      "id": "thm-semicontinuous-evt-step-9-1",
      "claim": "Claim 2 follows by applying claim 1 to $-f$, which is upper semicontinuous on $K$ when $f$ is lower semicontinuous; then $-f$ is bounded above and attains a maximum at some $x_{1} \\in K$, so $f$ is bounded below and $f(x_{1}) \\le f(x)$ for every $x \\in K$, a minimum. [step 8.1, L7] ∎",
      "step": "9.1",
      "inputs": [
        "8.1",
        "L7"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 3.1: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 3.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
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
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 3.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
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
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-semicontinuity",
    "declared_target": "def-semicontinuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-semicontinuity-level-set-characterisation",
    "declared_target": "thm-semicontinuity-level-set-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-semicontinuous-evt",
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
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-sup-epsilon",
    "declared_target": "lem-sup-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-semicontinuous-evt",
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
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-semicontinuous-evt",
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
    "source": "thm-semicontinuous-evt",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-semicontinuous-evt",
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
    "source": "thm-semicontinuous-evt",
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
  }
]
```

## Complete current text of every declared or cited item (13)

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

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
````

### `def-open-cover-r`

````markdown
---
id: def-open-cover-r
kind: definition
title: "Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-sequence, def-subsequential-limit, def-real-limit]
justified_by: []
aliases: [def-compact-in-r, def-sequentially-compact-in-r]
landmark: true
short: "open cover, compact, sequentially compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.31, 2.32)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $K \subseteq \mathbb{R}$, with open sets as in
[[def-open-and-closed-in-r]].

- An **open cover** of $K$ is a family $\mathcal{U}$ of open subsets of
  $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{U}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq
  \mathcal{U}$ that is still an open cover of $K$.
- A subfamily $\mathcal{V} \subseteq \mathcal{U}$ is **finite** when
  $\mathcal{V} = \varnothing$ or there are $n \in \mathbb{N}$ and members
  $U_0, \dots, U_n$ of $\mathcal{U}$ with $\mathcal{V} = \{U_0, \dots, U_n\}$;
  repetitions in the list are allowed and harmless.
- $K$ is **compact** when every open cover of $K$ has a finite subcover:
  for every open cover $\mathcal{U}$ of $K$, either $K = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$K \subseteq U_0 \cup \dots \cup U_n .$$
- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with
  $x_k \in K$ for all $k \in \mathbb{N}$ ([[def-sequence]]) has a subsequence
  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every
  such sequence has a subsequential limit ([[def-subsequential-limit]]) that
  lies in $K$.

**Compactness is a property of $K$ alone.** The covering families range over open
subsets of $\mathbb{R}$, not over sets open in some other ambient space, so the
notion defined here is compactness of $K$ as a subset of $\mathbb{R}$. Nothing
below relativises it to a smaller ambient field; where an ordered field other
than $\mathbb{R}$ is meant, as in
[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set
up again there for that field.

**$\varnothing$ is compact and sequentially compact.** The empty subfamily covers
it, and there is no sequence with all terms in $\varnothing$, so both conditions
hold vacuously.

## Remarks

- **Why "finite" is spelled out by listing.** A finite subfamily is described
  here as one that can be written $\{U_0, \dots, U_n\}$ with $n \in \mathbb{N}$,
  which is exactly the form every proof on this page produces or consumes: the
  bisection argument of [[thm-heine-borel-r]] produces a one-member list, and
  the arguments of [[lem-compact-implies-closed-and-bounded-r]] consume a list by
  taking a maximum over it ([[lem-finite-set-has-max]]). Since $\mathbb{N}$
  contains $0$, the shortest nonempty list is $\{U_0\}$.

- **The two notions are not defined to be equivalent, and their equivalence is a
  theorem.** For subsets of $\mathbb{R}$ it is
  [[thm-compact-iff-sequentially-compact-r]]; both of its implications run
  through the characterisation of compactness by closed and bounded, and its
  forward implication additionally uses Bolzano-Weierstrass. Neither implication
  is formal.

- **Compactness is not inherited by subsets, but by closed subsets.** A closed
  subset of a compact set is compact, which is immediate from
  [[thm-heine-borel-characterisation-r]] once that is available, whereas
  $(0,1) \subseteq [0,1]$ shows that an arbitrary subset of a compact set need
  not be compact.

- **The empty cover.** If $K \ne \varnothing$ then no open cover of $K$ is
  empty, so the case distinction in the definition of compactness only ever
  matters for $K = \varnothing$; it is written out so that the definition does
  not quietly assume $K$ nonempty.
````

### `def-semicontinuity`

````markdown
---
id: def-semicontinuity
kind: definition
title: "Upper and lower semicontinuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-continuity-real, def-neighbourhood-r, def-complete-ordered-field, lem-of-abs-value]
justified_by: []
aliases: [def-upper-semicontinuous, def-lower-semicontinuous]
landmark: true
short: "upper and lower semicontinuity"
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$, with
neighbourhoods as in [[def-neighbourhood-r]].

- $f$ is **upper semicontinuous at $c$** when for every real $\varepsilon > 0$
  there is a real $\delta > 0$ with
  $$f(x) \;<\; f(c) + \varepsilon \qquad \text{for every } x \in A \cap N_\delta(c).$$
- $f$ is **lower semicontinuous at $c$** when for every real $\varepsilon > 0$
  there is a real $\delta > 0$ with
  $$f(x) \;>\; f(c) - \varepsilon \qquad \text{for every } x \in A \cap N_\delta(c).$$
- $f$ is **upper semicontinuous on $A$**, respectively **lower semicontinuous on
  $A$**, when it is so at every point of $A$.

In words: an upper semicontinuous function cannot jump **up** in the limit, and
a lower semicontinuous one cannot jump **down**. Both conditions are pointwise,
both quantify over the same unpunctured neighbourhoods as
[[def-continuity-real]], and at $x = c$ each holds automatically, since
$f(c) < f(c) + \varepsilon$ and $f(c) > f(c) - \varepsilon$.

### Continuity is exactly the conjunction

$f$ is continuous at $c$ **if and only if** it is both upper and lower
semicontinuous at $c$.

*If $f$ is continuous at $c$*, a $\delta$ witnessing $|f(x) - f(c)| < \varepsilon$
on $A \cap N_\delta(c)$ witnesses both displayed conditions, since
$|f(x) - f(c)| < \varepsilon$ gives $-\varepsilon < f(x) - f(c) < \varepsilon$
([[lem-of-abs-value]]).

*Conversely*, given $\varepsilon > 0$ take $\delta_1$ for the upper condition
and $\delta_2$ for the lower one and put $\delta := \min\{\delta_1, \delta_2\} > 0$.
For $x \in A \cap N_\delta(c)$ both $f(x) < f(c) + \varepsilon$ and
$f(x) > f(c) - \varepsilon$ hold, that is $|f(x) - f(c)| < \varepsilon$
([[lem-of-abs-value]]). So $f$ is continuous at $c$.

Consequently $f$ is continuous on $A$ exactly when it is both upper and lower
semicontinuous on $A$.

### Negation exchanges the two

$f$ is upper semicontinuous at $c$ **if and only if** $-f$ is lower
semicontinuous at $c$, since $f(x) < f(c) + \varepsilon$ says the same thing as
$-f(x) > -f(c) - \varepsilon$ ([[def-complete-ordered-field]]). Every statement
about one notion below is therefore proved for one of them and transferred to
the other by this substitution, never proved twice.

**Neither notion implies the other, and neither implies continuity.** The
indicator of a closed set is upper semicontinuous and the indicator of an open
set is lower semicontinuous, and neither is continuous unless the set is clopen;
the companion page uses an upper semicontinuous function on $[0,1]$ that attains
no minimum.
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

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
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
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
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

### `thm-semicontinuity-level-set-characterisation`

````markdown
---
id: thm-semicontinuity-level-set-characterisation
kind: theorem
title: "$f$ is upper semicontinuous on $A$ if and only if $\\{x \\in A : f(x) < \\alpha\\}$ is relatively open in $A$ for every real $\\alpha$, lower semicontinuous if and only if $\\{x \\in A : f(x) > \\alpha\\}$ is, and continuous if and only if it is both"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-semicontinuity, def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "semicontinuity by level sets"
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Characterization of Lower Semicontinuity (ProofWiki)"
      url: "https://proofwiki.org/wiki/Characterization_of_Lower_Semicontinuity"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Call $S \subseteq A$
**relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). Then:

1. $f$ is upper semicontinuous on $A$ ([[def-semicontinuity]]) **if and only if**
   $\{\, x \in A : f(x) < \alpha \,\}$ is relatively open in $A$ for every real
   $\alpha$;
2. $f$ is lower semicontinuous on $A$ **if and only if**
   $\{\, x \in A : f(x) > \alpha \,\}$ is relatively open in $A$ for every real
   $\alpha$;
3. $f$ is continuous on $A$ ([[def-continuity-real]]) **if and only if** both
   families of sets are relatively open.

**The open set is produced canonically, not chosen.** For each $\alpha$ the
proof exhibits one specific open $U_\alpha \subseteq \mathbb{R}$ with
$U_\alpha \cap A = \{f < \alpha\}$, namely the set of reals $y$ admitting a
radius $\rho$ with $A \cap N_\rho(y) \subseteq \{f < \alpha\}$. No choice of a
radius per point is made, which matters because the level set may be
uncountable.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is upper semicontinuous at $c \in A$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon$ for every $x \in A \cap N_\delta(c)$; lower semicontinuity is the same with $f(x) > f(c) - \varepsilon$; and continuity at $c$ is the conjunction of the two ([[def-semicontinuity]], [[def-continuity-real]]).

[L2] $U \subseteq \mathbb{R}$ is open exactly when every $y \in U$ has a real $\rho > 0$ with $N_\rho(y) \subseteq U$; and if $|z - y| < \rho/2$ then $N_{\rho/2}(z) \subseteq N_\rho(y)$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] $-f$ is lower semicontinuous at $c$ exactly when $f$ is upper semicontinuous at $c$, and $\{x \in A : -f(x) < \alpha\} = \{x \in A : f(x) > -\alpha\}$ ([[def-semicontinuity]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $\alpha$ and put $S_\alpha := \{\, x \in A : f(x) < \alpha \,\}$ and $U_\alpha := \{\, y \in \mathbb{R} : A \cap N_\rho(y) \subseteq S_\alpha \ \text{for some real } \rho > 0 \,\}$. [construct]

1.2 Conversely suppose every $S_\alpha$ is relatively open in $A$, say $S_\alpha = U \cap A$ with $U$ open, and let $c \in A$ and $\varepsilon > 0$ be real. Put $\alpha := f(c) + \varepsilon$; then $f(c) < \alpha$, so $c \in S_\alpha = U \cap A$, and there is a real $\delta > 0$ with $N_\delta(c) \subseteq U$. [L2]

2.1 $U_\alpha$ is open: if $y \in U_\alpha$ with witness $\rho$ and $z \in N_{\rho/2}(y)$, then $A \cap N_{\rho/2}(z) \subseteq A \cap N_\rho(y) \subseteq S_\alpha$, so $z \in U_\alpha$ with witness $\rho/2$; hence $N_{\rho/2}(y) \subseteq U_\alpha$. [step 1.1, L2]

2.2 $U_\alpha \cap A \subseteq S_\alpha$: if $y \in U_\alpha \cap A$ with witness $\rho$ then $y \in A \cap N_\rho(y) \subseteq S_\alpha$. [step 1.1]

2.3 Suppose $f$ is upper semicontinuous on $A$ and let $c \in S_\alpha$. Apply the definition at $c$ with $\varepsilon := \alpha - f(c) > 0$: there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon = \alpha$ for every $x \in A \cap N_\delta(c)$, that is $A \cap N_\delta(c) \subseteq S_\alpha$; so $c \in U_\alpha$. [step 1.1, L1]

3.1 Hence $S_\alpha \subseteq U_\alpha \cap A$, and with step 2.2 this gives $S_\alpha = U_\alpha \cap A$, a relatively open subset of $A$; since $\alpha$ was arbitrary, one direction of claim 1 holds. [step 2.2, step 2.3]

4.1 With $\delta$ as in step 1.2, every $x \in A \cap N_\delta(c)$ lies in $U \cap A = S_\alpha$, so $f(x) < \alpha = f(c) + \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is upper semicontinuous on $A$, which completes claim 1. [step 3.1, step 1.2, L1]

5.1 Claim 2 follows by applying claim 1 to $-f$: $f$ is lower semicontinuous on $A$ exactly when $-f$ is upper semicontinuous on $A$, exactly when $\{x \in A : -f(x) < \beta\}$ is relatively open for every real $\beta$, and that set is $\{x \in A : f(x) > -\beta\}$; as $\beta$ ranges over the reals so does $-\beta$. [step 4.1, L3]

6.1 Claim 3 follows: $f$ is continuous on $A$ exactly when it is both upper and lower semicontinuous on $A$, and by claims 1 and 2 that is exactly the conjunction of the two families of sets being relatively open. [step 4.1, step 5.1, L1] ∎

## Remarks

- **Why "relatively" open and not open.** $S_\alpha$ is a subset of $A$, so it
  cannot be open in $\mathbb{R}$ unless $A$ is; the correct statement is the one
  above, exactly as in [[thm-continuity-preimage-characterisation]], where the
  same phrase is fixed inline for the same reason. For $A = \mathbb{R}$ the
  qualifier disappears and the level sets are open outright.

- **The strict inequalities are not interchangeable with the weak ones.** Upper
  semicontinuity says the strict sublevel sets are relatively open, equivalently
  that the sets $\{f \ge \alpha\}$ are relatively closed. It does **not** say
  that the sets $\{f \le \alpha\}$ are relatively closed; the indicator of a
  closed set is upper semicontinuous while $\{f \le 0\}$ is the complement of
  that closed set, which is relatively open and generally not closed.
````

