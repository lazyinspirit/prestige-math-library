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

- critical risk (14): 16 declared dependencies; 16 cited facts; 6 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `cex-evt-fails-on-the-open-interval-and-on-the-half-line`

Normalized current SHA-256: `b0427ce05b627d71daa12a10f127ed5b95367ebd7d2b3b9b647fee78231ee0c8`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-evt-fails-on-the-open-interval-and-on-the-half-line
kind: counterexample
title: "The identity on $(0,1)$ is bounded with no greatest value, and on $[0,\\infty)$ it is continuous and unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-evt-holds-on-every-bounded-domain, thm-extreme-value-r, thm-compactness-is-necessary-for-evt-and-uniform-continuity, thm-heine-borel-characterisation-r, def-open-cover-r, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-open-and-closed-in-r, thm-of-archimedean, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "EVT fails on $(0,1)$ and on $[0,\\infty)$"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "University of Edinburgh, The Extreme Value Theorem"
      url: "https://uoe-school-of-mathematics.github.io/MATH08081_IMA/Ch4.S9.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for the conclusions of the extreme value theorem it is enough
that the domain be bounded, or that it be closed; that is, a continuous real
function on a bounded domain attains a greatest value, and a continuous real
function on a closed domain is bounded ([[def-continuity-real]],
[[def-bounded-set]], [[def-max-min]]).

Both halves are false, and one function refutes both:

- on $E_1 := (0,1)$, which is **bounded and not closed**, the identity is
  continuous and bounded, $\sup$ of its image exists and equals $1$, and no
  point of $E_1$ attains it;
- on $E_2 := [0,\infty)$, which is **closed and not bounded**, the identity is
  continuous and unbounded.

Neither $E_1$ nor $E_2$ is compact ([[thm-heine-borel-characterisation-r]]), so
[[thm-extreme-value-r]] does not apply to either, and both are instances of
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]]: the first is
its bounded-not-closed case, the second its unbounded case. Together they show
that neither half of "closed and bounded" can be dropped.

This item is the worked witness for
[[fs-evt-holds-on-every-bounded-domain]], which refutes the first half alone.

## Facts & Assumptions

**Given:** The sets $E_1 := (0,1)$ and $E_2 := [0,\infty)$ ([[def-interval]]) and the identity $\mathrm{id}(x) = x$ on each of them.

[L1] The identity is continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] A greatest value of $h$ on $E$ is a point $p \in E$ with $h(x) \le h(p)$ for every $x \in E$; a set is bounded when it lies between two reals ([[def-max-min]], [[def-bounded-set]]).

[L3] Suprema: a nonempty set bounded above has a least upper bound, and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]]).

[L4] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n$ ([[thm-of-archimedean]]).

[L5] Ordered-field arithmetic: for $0 < x < 1$ one has $x < (x+1)/2 < 1$; the maximum of a two-element set of reals exists and is one of them; and $n \ge 1 > 0$ for a natural $n \ge 1$ ([[def-ordered-field]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L6] $(0,1)$ is bounded and not closed, $[0,\infty)$ is closed and not bounded, and neither is compact ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 The identity is continuous on $E_1$ and on $E_2$ by [L1], and $E_1$ is bounded while $E_2$ is closed, by [L6]. [L1, L6]

1.2 **On $E_1$ the identity is bounded.** Every $x \in (0,1)$ satisfies $0 \le x \le 1$, so the image $\mathrm{id}[E_1] = E_1$ lies between $0$ and $1$ and is bounded by [L2]. [L5, L2]

1.3 **On $E_2$ the identity is unbounded.** Let a real $M$ be given. By [L4] there is a natural $n \ge 1$ with $M < n$, and $n \ge 0$ so $n \in [0,\infty) = E_2$ with $\mathrm{id}(n) = n > M$. So no real bounds $\mathrm{id}[E_2]$ above, and by [L2] the identity is unbounded on $E_2$. [L2, L4, L5]

2.1 **On $E_1$ there is no greatest value.** Let $p \in E_1$, so $0 < p < 1$. By [L5] the point $p' := (p+1)/2$ satisfies $p < p' < 1$ and $p' > 0$, so $p' \in E_1$ and $\mathrm{id}(p') = p' > p = \mathrm{id}(p)$. Hence no $p \in E_1$ satisfies $\mathrm{id}(x) \le \mathrm{id}(p)$ for every $x \in E_1$, and by [L2] the identity attains no greatest value on $E_1$. [step 1.2, L2, L5]

3.1 **The supremum exists and equals $1$.** By step 1.2 and [L3] the nonempty set $\mathrm{id}[E_1] = (0,1)$ has a least upper bound $u$, and $u \le 1$ since $1$ bounds it above. For a real $\varepsilon > 0$ the point $x := \max\{1/2,\ 1 - \varepsilon/2\}$ lies in $(0,1)$ by [L5] and satisfies $x > 1 - \varepsilon$, so no real below $1$ bounds $(0,1)$ above; hence $u = 1$. By step 2.1 no point of $E_1$ has value $1$, so the supremum is not attained. [step 1.2, step 2.1, L3, L5]

4.1 So on the bounded set $E_1$ a continuous function attains no greatest value, and on the closed set $E_2$ a continuous function is unbounded: both halves of the refuted claim are false, and by [L6] neither domain is compact, so no conflict with [[thm-extreme-value-r]] arises. [step 1.1, step 2.1, step 3.1, step 1.3, L6] ∎

## Remarks

- **The two failures are of different kinds.** On $(0,1)$ the function is bounded and the supremum exists as a real number; what is missing is a point at which it is attained, and adding the endpoint $1$ restores it. On $[0,\infty)$ there is no supremum at all, and no endpoint can be added. That is the distinction [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] draws between its bounded-not-closed and unbounded cases.

- **The domains are exactly the two minimal ways to fail compactness.** By [[thm-heine-borel-characterisation-r]] a subset of $\mathbb{R}$ fails compactness by failing closedness or by failing boundedness; $E_1$ fails only the first, $E_2$ only the second, and each already kills the theorem.

- **The same domains kill uniform continuity too**, but with different witnesses: on $(0,1)$ it is $1/x$ ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]) and on an unbounded closed set it is $x^{2}$ ([[cex-x-squared-is-not-uniformly-continuous-on-r]]). The identity itself is uniformly continuous on both, so a single witness cannot serve every conclusion at once.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://uoe-school-of-mathematics.github.io/MATH08081_IMA/Ch4.S9.html"
  ],
  "rationale": "The source contrasts EVT on closed bounded intervals with open or unbounded domains. The local item packages the identity on (0,1) and on [0,infinity) as the two elementary witnesses.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then:",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "bounded",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "$F$ is a **complete ordered field** (equivalently, $F$ has the **least-upper-bound property**, or is **Dedekind complete**) if every nonempty $S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an upper bound of $S$ ([[def-complete-ordered-field]]). Then",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "for every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$. - $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$. A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then $m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so $m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]). The same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "bounded",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in [[def-open-and-closed-in-r]]. - An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is still an open cover of $K$. - A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$; repetitions in the list are allowed and harmless. - $K$ is **compact** when every open cover of $K$ has a finite subcover: for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$ - $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence converging ([[def-real-limit]]) to some point of $K$; equivalently, when every such sequence has a subsequential limit ([[def-subsequential-limit]]) that lies in $K$. **Compactness is a property of $K$ alone.** The covering families range over open subsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the notion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing below relativises it to a smaller ambient field; where an ordered field other than $\\mathbb{R}$ is meant, as in [[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set up again there for that field. **$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers it, and there is no sequence with all terms in $\\varnothing$, so both conditions hold vacuously.",
      "uses": [
        "1.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The identity is continuous on $E_1$ and on $E_2$ by [L1], and $E_1$ is bounded while $E_2$ is closed, by [L6].",
      "step": "1.1",
      "inputs": [
        "L1",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "**On $E_1$ the identity is bounded.** Every $x \\in (0,1)$ satisfies $0 \\le x \\le 1$, so the image $\\mathrm{id}[E_1] = E_1$ lies between $0$ and $1$ and is bounded by [L2].",
      "step": "1.2",
      "inputs": [
        "L2",
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "**On $E_2$ the identity is unbounded.** Let a real $M$ be given. By [L4] there is a natural $n \\ge 1$ with $M < n$, and $n \\ge 0$ so $n \\in [0,\\infty) = E_2$ with $\\mathrm{id}(n) = n > M$. So no real bounds $\\mathrm{id}[E_2]$ above, and by [L2] the identity is",
      "step": "1.3",
      "inputs": [
        "L4",
        "L2",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**On $E_1$ there is no greatest value.** Let $p \\in E_1$, so $0 < p < 1$. By [L5] the point $p' := (p+1)/2$ satisfies $p < p' < 1$ and $p' > 0$, so $p' \\in E_1$ and $\\mathrm{id}(p') = p' > p = \\mathrm{id}(p)$. Hence no $p \\in E_1$ satisfies $\\mathrm{id}(x) \\le",
      "step": "2.1",
      "inputs": [
        "L5",
        "L2",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "**The supremum exists and equals $1$.** By step 1.2 and [L3] the nonempty set $\\mathrm{id}[E_1] = (0,1)$ has a least upper bound $u$, and $u \\le 1$ since $1$ bounds it above. For a real $\\varepsilon > 0$ the point $x := \\max\\{1/2,\\ 1 - \\varepsilon/2\\}$ lies in",
      "step": "3.1",
      "inputs": [
        "1.2",
        "L3",
        "L5",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So on the bounded set $E_1$ a continuous function attains no greatest value, and on the closed set $E_2$ a continuous function is unbounded: both halves of the refuted claim are false, and by [L6] neither domain is compact, so no conflict with [[thm-extreme-va",
      "step": "4.1",
      "inputs": [
        "L6",
        "1.1",
        "2.1",
        "3.1",
        "1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The item uses a fixed nonempty real domain or fixed numerical witness, so no empty-domain branch is part of its claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1–2.1 identify 0 as the excluded lower endpoint of (0,1), while step 1.2 includes 0 in [0,∞)."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1–2.1 identify 1 as the excluded supremum of the first image."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 2.1 defines a strictly larger point (p+1)/2 for every p∈(0,1), so no accidental fixed maximum occurs."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1–2.1 isolate failure at the excluded finite endpoints of (0,1), while steps 1.2 and 3.1–4.1 use the included endpoint 0 of the unbounded half-line [0,∞)."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "Every improving or large point is given by an explicit formula."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cex-evt-fails-on-the-open-interval-and-on-the-half-line` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cex-evt-fails-on-the-open-interval-and-on-the-half-line` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-evt-holds-on-every-bounded-domain",
    "declared_target": "fs-evt-holds-on-every-bounded-domain",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-extreme-value-r",
    "declared_target": "thm-extreme-value-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-compactness-is-necessary-for-evt-and-uniform-continuity",
    "declared_target": "thm-compactness-is-necessary-for-evt-and-uniform-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
[]
```

## Full text of every cited or declared item (18)

### `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`

````markdown
---
id: cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval
kind: counterexample
title: "$x \\mapsto 1/x$ is continuous on $(0,1)$ and not uniformly continuous there, the pairs $1/(k+2)$ and $1/(k+3)$ defeating every $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-continuity-implies-uniform-continuity, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-interval, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$1/x$ not uniformly continuous on $(0,1)$"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : (0,1) \to \mathbb{R}$, $f(x) := 1/x$, is
uniformly continuous on $(0,1)$ ([[def-uniform-continuity-real]],
[[def-interval]]).

$f$ is continuous on $(0,1)$ ([[def-continuity-real]]) and its domain is
bounded, so this is the sharpest simple instance of
[[fs-continuity-implies-uniform-continuity]]: neither continuity nor
boundedness of the domain implies uniform continuity, and what
[[thm-heine-cantor-r]] actually needs is compactness, which $(0,1)$ does not
have because it is not closed ([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of points of $(0,1)$
closer than $\delta$ whose $f$-values differ by exactly $1$. The pairs are

$$x_k := \frac{1}{k+2}, \qquad y_k := \frac{1}{k+3} \qquad (k \in \mathbb{N}),$$

and the shift by $2$ and $3$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so $1/k$ is undefined at $k = 0$ and
$1/(k+1)$ leaves $(0,1)$ at $k = 0$.

## Facts & Assumptions

**Given:** The interval $A := (0,1)$ and the function $f : A \to \mathbb{R}$, $f(x) := 1/x$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $A$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in A$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Algebra of continuous functions: the identity is continuous on $A$, and the reciprocal of a continuous nowhere-vanishing function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 3 > k + 2 \ge 2 > 1 > 0$, so $0 < 1/(k+3) < 1/(k+2) < 1$ and both lie in $(0,1)$; and $(k+2)(k+3) \ge k+2 > 0$ ([[def-ordered-field]], [[def-interval]], [[lem-of-abs-value]]).

[L5] $(0,1)$ is bounded but not closed, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-bounded-set]], [[def-open-and-closed-in-r]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $A = (0,1)$: the identity is continuous there by [L2] and satisfies $x > 0 \ne 0$ for every $x \in A$, so its reciprocal is continuous on $A$ by [L2]. [L2, L4]

1.2 For $k \in \mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. At the first index, $k = 0$, this reads $x_0 = 1/2$ and $y_0 = 1/3$, both in $(0,1)$. [L4]

2.1 The separation of the arguments is $|x_k - y_k| = \dfrac{1}{k+2} - \dfrac{1}{k+3} = \dfrac{1}{(k+2)(k+3)} \le \dfrac{1}{k+2}$, using $(k+2)(k+3) \ge k+2 > 0$ and [L3]; the separation of the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$. [step 1.2, L3, L4]

3.1 Put $\varepsilon_0 := 1 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$, and take $k := m$. Then $k + 2 > m > 0$, so $1/(k+2) < 1/m < \delta$ by [L3], and step 2.1 gives $|x_k - y_k| \le 1/(k+2) < \delta$ while $|f(x_k) - f(y_k)| = 1 \ge \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 1$, and by [L1] the function $f$ is not uniformly continuous on $(0,1)$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **What this witnesses in the regularity hierarchy.** [[thm-metric-regularity-hierarchy]], transported to real functions by [[lem-real-and-metric-notions-agree]], gives uniformly continuous $\Rightarrow$ continuous and asserts no converse. This item is the witness that the converse fails, and it is one of the two named in the remarks of [[lem-real-and-metric-notions-agree]]; the other, [[ex-x-to-the-beta-separates-the-holder-classes]], separates the Hölder classes below it.

- **The failure is at the missing endpoint, and it is repaired by restoring it.** On $[a,1]$ with $0 < a < 1$ the same formula is uniformly continuous, by [[thm-heine-cantor-r]], since $[a,1]$ is closed and bounded. It is also repaired by an explicit estimate: on $[a,1]$ one has $|1/x - 1/x'| = |x - x'|/(xx') \le |x-x'|/a^{2}$, so $f$ is even Lipschitz there.

- **A second reading of the same fact.** By [[cor-continuous-extension-from-a-dense-subset-r]], a uniformly continuous function on $(0,1)$ would extend continuously to $[0,1]$ and hence be bounded there ([[cor-boundedness-theorem-r]]); $1/x$ is unbounded on $(0,1)$, so it cannot be uniformly continuous. That route is shorter but rests on more, and the computation above is the elementary one.
````

### `cex-x-squared-is-not-uniformly-continuous-on-r`

````markdown
---
id: cex-x-squared-is-not-uniformly-continuous-on-r
kind: counterexample
title: "$x \\mapsto x^2$ is continuous on $\\mathbb{R}$ and not uniformly continuous, the pairs $k+1$ and $k+1+1/(k+1)$ defeating every $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-continuity-implies-uniform-continuity, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-integer-power, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$x^2$ not uniformly continuous on $\\mathbb{R}$"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : \mathbb{R} \to \mathbb{R}$,
$f(x) := x^{2}$ ([[def-integer-power]]), is uniformly continuous on
$\mathbb{R}$ ([[def-uniform-continuity-real]]).

$f$ is continuous on $\mathbb{R}$ ([[def-continuity-real]]) and $\mathbb{R}$ is
a **closed** subset of itself, so this is the complement of
[[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]: there the
domain was bounded and not closed, here it is closed and not bounded, and
uniform continuity fails in both cases. Neither half of compactness suffices on
its own, and [[thm-heine-cantor-r]] needs both
([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of reals closer than
$\delta$ whose squares differ by more than $2$. The pairs are

$$a_k := k+1, \qquad b_k := k + 1 + \frac{1}{k+1} \qquad (k \in \mathbb{N}),$$

and the shift by $1$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so the reciprocal $1/k$ would be undefined at
the first index.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := x^{2}$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $\mathbb{R}$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in \mathbb{R}$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Polynomial functions are continuous on $\mathbb{R}$; in particular so is $x \mapsto x^{2}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 1 \ge 1 > 0$, so $1/(k+1)$ is defined and positive; the identity $v^{2} - u^{2} = (v-u)(v+u)$; and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[def-ordered-field]], [[lem-of-abs-value]], [[def-integer-power]]).

[L5] $\mathbb{R}$ is closed in itself but not bounded, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $\mathbb{R}$, being a polynomial function. [L2]

1.2 For $k \in \mathbb{N}$ put $a_k := k+1$ and $b_k := (k+1) + 1/(k+1)$, both defined because $k + 1 \ge 1 > 0$ by [L4]. At the first index, $k = 0$, this reads $a_0 = 1$ and $b_0 = 2$. [L4]

2.1 The separation of the arguments is $|a_k - b_k| = 1/(k+1)$. The separation of the values is, by [L4], $$|f(b_k) - f(a_k)| = |b_k - a_k|\,(b_k + a_k) = \frac{1}{k+1}\Bigl(2(k+1) + \frac{1}{k+1}\Bigr) = 2 + \frac{1}{(k+1)^{2}} > 2 .$$ [step 1.2, L4]

3.1 Put $\varepsilon_0 := 2 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$ and take $k := m$; then $k + 1 > m > 0$, so $|a_k - b_k| = 1/(k+1) < 1/m < \delta$ by [L3], while step 2.1 gives $|f(a_k) - f(b_k)| > 2 = \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 2$, and by [L1] the function $f$ is not uniformly continuous on $\mathbb{R}$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **The mechanism is the growing slope, not a singularity.** The increment $b_k - a_k$ is chosen to be the reciprocal of the point, so the product $(b_k - a_k)(b_k + a_k)$ stays above $2$ however small the increment becomes. Nothing blows up: $f$ is a polynomial, bounded on every bounded set, and the failure is entirely about how far out one is allowed to look.

- **On every bounded interval it is uniformly continuous.** On $[-M,M]$ one has $|x^{2} - y^{2}| = |x-y|\,|x+y| \le 2M|x-y|$, so $f$ is Lipschitz there, hence uniformly continuous ([[lem-real-and-metric-notions-agree]], clause 6). That is also what [[thm-heine-cantor-r]] gives, since $[-M,M]$ is compact.

- **The consequence for products.** The identity is uniformly continuous on $\mathbb{R}$ and its square is not, so the product of two uniformly continuous functions need not be uniformly continuous; that is [[cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous]], which is this item read once more.
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

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
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

### `fs-evt-holds-on-every-bounded-domain`

````markdown
---
id: fs-evt-holds-on-every-bounded-domain
kind: false-statement
title: "FALSE: a continuous real function on a bounded domain attains a greatest value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-extreme-value-r, thm-compactness-is-necessary-for-evt-and-uniform-continuity, thm-heine-borel-characterisation-r, def-continuity-real, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-interval, thm-algebra-of-continuous-functions, def-ordered-field]
justified_by: []
aliases: []
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: false
short: "FALSE: EVT on every bounded domain"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "University of Edinburgh, The Extreme Value Theorem"
      url: "https://uoe-school-of-mathematics.github.io/MATH08081_IMA/Ch4.S9.html"
pipeline_run: null
---

## Statement

**False claim:** if $E \subseteq \mathbb{R}$ is nonempty and bounded
([[def-bounded-set]]) and $f : E \to \mathbb{R}$ is continuous on $E$
([[def-continuity-real]]), then $f$ attains a greatest value on $E$: there is
$p \in E$ with $f(x) \le f(p)$ for every $x \in E$ ([[def-max-min]]).

**Why it is tempting.** The extreme value theorem is often remembered as "a
continuous function on a *bounded* interval attains its bounds", and on
$[a,b]$ that is true. The hypothesis that actually does the work is
compactness, which for a subset of $\mathbb{R}$ is closed **and** bounded
([[thm-heine-borel-characterisation-r]]); dropping closedness loses the theorem
even though the function may stay bounded.

**What is true.** [[thm-extreme-value-r]] gives the conclusion on a nonempty
**compact** domain, and the hypothesis cannot be weakened: for every noncompact
$E$ there is a bounded continuous function on $E$ whose supremum is not
attained, which is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]]. The witness
below is that theorem's simplest instance.

## Facts & Assumptions

**Given:** The domain $E := (0,1) = \{\, x \in \mathbb{R} : 0 < x < 1 \,\}$ ([[def-interval]]) and the function $f : E \to \mathbb{R}$, $f(x) := x$.

[L1] $E$ is nonempty and bounded: $1/2 \in E$, and $0 \le x \le 1$ for every $x \in E$ ([[def-bounded-set]], [[def-interval]], [[def-ordered-field]]).

[L2] The identity is continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] A greatest value of $f$ on $E$ is a point $p \in E$ with $f(x) \le f(p)$ for every $x \in E$; equivalently a maximum of $f[E]$ lying in $f[E]$ ([[def-max-min]]).

[L4] Ordered-field arithmetic in $\mathbb{R}$: for $0 < x < 1$ one has $x < (x+1)/2 < 1$; and $0 < 1$ ([[def-ordered-field]]).

[L5] Suprema: a nonempty set bounded above has a least upper bound, and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]]).

## Refutation

**Proof technique:** direct.

1.1 $E$ is nonempty and bounded by [L1], and $f$ is continuous on $E$ by [L2], so the hypotheses of the claim are satisfied. [L1, L2]

2.1 Let $p \in E$ be arbitrary, so $0 < p < 1$. Put $p' := (p+1)/2$; by [L4] we have $p < p' < 1$ and $0 < p'$, so $p' \in E$ and $f(p') = p' > p = f(p)$. Hence no $p \in E$ satisfies $f(x) \le f(p)$ for every $x \in E$, and by [L3] the function $f$ attains no greatest value on $E$. [step 1.1, L3, L4]

3.1 The claim is therefore false. Note also what the failure is not: $f[E] = E$ is nonempty and bounded above by $1$, so $\sup f[E]$ exists by [L5] and equals $1$, since $1$ bounds $f[E]$ and for every real $\varepsilon > 0$ the point $x := \max\{1/2,\ 1 - \varepsilon/2\}$ lies in $E$ with $x > 1 - \varepsilon$. What fails is only that $1 \notin f[E]$. [step 2.1, L1, L4, L5] ∎

## Remarks

- **The domain is bounded and not closed, and that is exactly the gap.** The set $(0,1)$ is not closed and hence is not compact by [[thm-heine-borel-characterisation-r]], so [[thm-extreme-value-r]] does not apply. Adding the two endpoints repairs everything: on $[0,1]$ the same $f$ attains the value $1$ at the point $1$.

- **Boundedness of the function is not the issue either.** The witness above is bounded, so the failure is not a blow-up; it is the loss of the point at which the supremum would be attained. A function on the same domain that is unbounded, such as $x \mapsto 1/x$, fails the conclusion for the cruder reason that no upper bound exists at all, and both failures are catalogued together in [[cex-evt-fails-on-the-open-interval-and-on-the-half-line]] on the companion page.

- **The least value fails in the same way**, by symmetry: $f$ has no least value on $(0,1)$ either, and $\inf f[E] = 0 \notin f[E]$. The statement is written for the greatest value only because that is the form the false claim usually takes.
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

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-compactness-is-necessary-for-evt-and-uniform-continuity`

````markdown
---
id: thm-compactness-is-necessary-for-evt-and-uniform-continuity
kind: theorem
title: "Rudin 4.20, the sharp converse: on a noncompact $E \\subseteq \\mathbb{R}$ there is an unbounded continuous function and a bounded continuous function with no greatest value, and if $E$ is bounded there is a continuous function on $E$ that is not uniformly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, thm-extreme-value-r, thm-heine-cantor-r, cor-boundedness-theorem-r, cor-continuous-extension-from-a-dense-subset-r, thm-algebra-of-continuous-functions, def-continuity-real, def-uniform-continuity-real, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-interval, def-neighbourhood-r, def-integer-power, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-power-monotone, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-rudin-4-20]
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: true
short: "compactness is necessary"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis"
      url: "https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$ be nonempty and **not** compact
([[def-open-cover-r]]). Then:

1. there is a function $f : E \to \mathbb{R}$, continuous on $E$
   ([[def-continuity-real]]), that is **unbounded** on $E$;
2. there is a function $g : E \to \mathbb{R}$, continuous and bounded on $E$,
   such that $\sup g[E]$ exists and is **not attained**; in particular $g$ has
   no greatest value on $E$ ([[def-max-min]]);
3. if in addition $E$ is **bounded** ([[def-bounded-set]]), there is a function
   $h : E \to \mathbb{R}$, continuous on $E$, that is **not uniformly
   continuous** on $E$ ([[def-uniform-continuity-real]]).

Together with [[cor-boundedness-theorem-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] this says that **compactness is exactly the hypothesis
those three theorems need**: on a compact set every continuous function is
bounded, attains its extrema and is uniformly continuous, and on a set that is
not compact each of those three conclusions fails for some continuous function.

**Claim 3 carries the boundedness hypothesis because it must.** On an unbounded
closed set every uniformly continuous function is still uniformly continuous,
and a noncompact set may well carry only uniformly continuous functions of
interest; what claim 3 asserts is the sharp statement for the bounded case, which
is the case Heine-Cantor leaves open. The unbounded case is covered by claims 1
and 2, which hold with no extra hypothesis.

**Every witness is exhibited, not merely asserted to exist.** Four functions do
the work: $x$ and $-1/(1+x^{2})$ when $E$ is unbounded, and $1/(x-x_0)$ and
$-|x - x_0|$ when $E$ is bounded, where $x_0$ is then a point of
$\overline{E} \setminus E$.

## Facts & Assumptions

**Given:** A nonempty set $E \subseteq \mathbb{R}$ that is not compact.

[L1] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded; so $E$ is not closed or not bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[def-bounded-set]]).

[L2] Boundedness: $S$ is bounded when there are reals $\ell, u$ with $\ell \le s \le u$ for every $s \in S$; equivalently when there is a real $M \ge 0$ with $|s| \le M$ for every $s \in S$. So if $S$ is unbounded then for every real $M > 0$ some $s \in S$ has $|s| > M$ ([[def-bounded-set]], [[lem-of-abs-value]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L3] Closure: $\overline{E}$ is the set of points every neighbourhood of which meets $E$, it contains $E$, and $E$ is closed exactly when $E = \overline{E}$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L4] Algebra of continuous functions: constants, the identity and polynomial functions are continuous on any subset of $\mathbb{R}$; sums, scalar multiples, products and absolute values of continuous functions are continuous; and if $q$ is continuous on $S$ and $q(x) \ne 0$ for every $x \in S$, then $p/q$ is continuous on $S$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L5] Suprema: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound ([[def-complete-ordered-field]]), and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] Archimedean property in reciprocal form, reciprocals, and squares: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; $0 < s < t$ implies $0 < 1/t < 1/s$; $0 \le a < b$ implies $a^{2} < b^{2}$; and $t \ge 1$ implies $t^{2} \ge t$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-power-monotone]], [[def-integer-power]]).

[L7] Extension theorem: a uniformly continuous real function on a nonempty $D \subseteq \mathbb{R}$ extends to a continuous function on $\overline{D}$ ([[cor-continuous-extension-from-a-dense-subset-r]], [[def-uniform-continuity-real]]).

[L8] Ordered-field arithmetic in $\mathbb{R}$: totality and trichotomy; $|u| > 0$ exactly when $u \ne 0$; $1 + t^{2} \ge 1 > 0$ for every real $t$; and the minimum of a two-element set of reals ([[def-ordered-field]], [[lem-of-abs-value]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-interval]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] the set $E$ is not closed or not bounded, and these two possibilities are exhaustive: if $E$ is bounded then it is not closed. The two cases below are treated separately, and claim 3 arises only in the second. [L1]

1.2 **First case: $E$ is unbounded. Claim 1.** Put $f(x) := x$, continuous on $E$ by [L4]. Given a real $M > 0$, [L2] supplies $x \in E$ with $|x| > M$, that is $|f(x)| > M$; so $f$ is unbounded on $E$. [L2, L4, construct]

1.3 **First case, claim 2.** Put $g(x) := -1/(1+x^{2})$. The denominator is a polynomial function, continuous by [L4], and satisfies $1 + x^{2} \ge 1 > 0$ by [L8], so $g$ is continuous on $E$ by [L4]; moreover $0 < 1/(1+x^{2}) \le 1$, so $-1 \le g(x) < 0$ for every $x \in E$ and $g$ is bounded. Hence $g[E]$ is nonempty and bounded above by $0$, so $u := \sup g[E]$ exists by [L5] and $u \le 0$. [L4, L5, L8, construct]

2.1 **First case: the supremum is $0$ and is not attained.** Let a real $\varepsilon > 0$ be given and put $M := \max\{1, 1/\varepsilon\} \ge 1$. By [L2] there is $x \in E$ with $|x| > M$, so $x^{2} > M^{2} \ge M \ge 1/\varepsilon$ by [L6] and [L8], hence $1 + x^{2} > 1/\varepsilon > 0$ and $1/(1+x^{2}) < \varepsilon$ by [L6], that is $g(x) > -\varepsilon$. So no real below $0$ is an upper bound of $g[E]$, and $0$ is one; therefore $u = 0$. Since $g(x) < 0$ for every $x \in E$ by step 1.3, the value $0$ is not attained, and for each $x \in E$ the number $\varepsilon := -g(x) > 0$ produces by [L5] some $x' \in E$ with $g(x') > -\varepsilon = g(x)$, so $g$ has no greatest value. [step 1.3, L2, L5, L6, L8]

2.2 **Second case: $E$ is bounded, hence not closed.** By [L3] we have $E \subseteq \overline{E}$ and $E \ne \overline{E}$, so there is $x_0 \in \overline{E} \setminus E$. Every neighbourhood of $x_0$ meets $E$ by [L3]; and $x - x_0 \ne 0$ for every $x \in E$, since $x_0 \notin E$, so $|x - x_0| > 0$ there by [L8]. [step 1.1, L3, L8, choose]

3.1 **Second case, claim 1.** Put $f(x) := 1/(x - x_0)$ for $x \in E$. The denominator is a polynomial function, continuous by [L4], and does not vanish on $E$ by step 2.2, so $f$ is continuous on $E$ by [L4]. Given a real $M > 0$, step 2.2 supplies $x \in E$ with $|x - x_0| < 1/M$, and $|x - x_0| > 0$, so $|f(x)| = 1/|x - x_0| > M$ by [L6]. Hence $f$ is unbounded on $E$. [step 2.2, L4, L6, construct]

3.2 **Second case, claim 2.** Put $g(x) := -|x - x_0|$ for $x \in E$, continuous on $E$ by [L4]. Since $E$ is bounded, [L2] gives a real $M \ge 0$ with $|x| \le M$ on $E$, so $|x - x_0| \le M + |x_0|$ and $-(M + |x_0|) \le g(x) < 0$ for every $x \in E$: $g$ is bounded, and $g[E]$ is nonempty and bounded above by $0$. For a real $\varepsilon > 0$, step 2.2 supplies $x \in E$ with $|x - x_0| < \varepsilon$, that is $g(x) > -\varepsilon$; so $\sup g[E] = 0$ by [L5], and it is not attained because $g(x) < 0$ everywhere on $E$. As in step 2.1, $g$ therefore has no greatest value on $E$. [step 2.1, step 2.2, L2, L4, L5, L8, construct]

4.1 **Second case, claim 3.** Put $h := f$ of step 3.1, continuous on $E$. Suppose $h$ were uniformly continuous on $E$. By [L7] there would be a continuous $H : \overline{E} \to \mathbb{R}$ with $H(x) = h(x)$ for $x \in E$, and $x_0 \in \overline{E}$. Continuity of $H$ at $x_0$ with $\varepsilon := 1$ gives a real $\delta > 0$ such that every $z \in \overline{E}$ with $|z - x_0| < \delta$ satisfies $|H(z) - H(x_0)| < 1$, hence $|H(z)| < |H(x_0)| + 1 =: B$, a real with $B > 0$. Put $r := \min\{\delta, 1/B\} > 0$; by step 2.2 there is $x \in E$ with $|x - x_0| < r$, and then $0 < |x - x_0| < 1/B$ gives $|h(x)| = 1/|x - x_0| > B$ by [L6], while $x \in \overline{E}$ with $|x - x_0| < \delta$ gives $|h(x)| = |H(x)| < B$. That is impossible, so $h$ is not uniformly continuous on $E$. [step 2.2, step 3.1, L6, L7, L8]

5.1 The two cases of step 1.1 are exhaustive, and in each of them claims 1 and 2 have been established by exhibiting the functions named, while claim 3, whose hypothesis places $E$ in the second case, is step 4.1. [step 1.2, step 1.3, step 2.1, step 3.1, step 3.2, step 4.1, discharge-construct: the four witnesses x and -1/(1+x^2) and 1/(x-x_0) and -|x-x_0|] ∎

## Remarks

- **The bounded non-closed case is where all three failures happen at once.** There $x_0 \in \overline{E} \setminus E$ is a hole in the domain, and $1/(x-x_0)$ blows up at it: it is unbounded, it is not uniformly continuous, and $-|x-x_0|$ approaches its supremum $0$ without reaching it. The unbounded case needs a different witness for claim 2, because $-|x - x_0|$ need not be bounded there, and $-1/(1+x^{2})$ is the standard substitute.

- **Claim 3 is proved through the extension theorem rather than through sequences.** The textbook route takes a sequence in $E$ converging to $x_0$, notes that it is Cauchy, and observes that a uniformly continuous function must carry it to a Cauchy, hence bounded, sequence. Producing that sequence from adherence spends countable choice ([[lem-sequential-characterisation-of-closure-r]]). The argument above spends none: [[cor-continuous-extension-from-a-dense-subset-r]] constructs the extension without selecting anything, and the contradiction is then a single $\varepsilon$-$\delta$ estimate at the point $x_0$.

- **What "not attained" means here, precisely.** The supremum of $g[E]$ exists as a real number and equals $0$, and no point of $E$ has $g$-value $0$. That is stronger than saying $g$ has no maximum: it identifies the value the function fails to reach. The companion page works both witnesses out concretely in [[cex-evt-fails-on-the-open-interval-and-on-the-half-line]].
````

### `thm-extreme-value-r`

````markdown
---
id: thm-extreme-value-r
kind: theorem
title: "Extreme value theorem: a continuous real function on a nonempty compact subset of $\\mathbb{R}$ attains a greatest and a least value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuous-image-of-a-compact-set-r, cor-boundedness-theorem-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-continuity-real, def-bounded-set, def-infimum, thm-infimum-property, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-closure-characterisations-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: [thm-evt-r]
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: true
short: "extreme value theorem"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "Compact space (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be **nonempty** and compact
([[def-open-cover-r]]). Then $\sup f[K]$ and $\inf f[K]$ exist and are
**attained**: there are $p, q \in K$ with

$$f(q) \;=\; \inf f[K] \;\le\; f(x) \;\le\; \sup f[K] \;=\; f(p) \qquad \text{for every } x \in K .$$

Equivalently, the set $f[K]$ has a maximum and a minimum
([[def-max-min]]), namely $\max f[K] = f(p)$ and $\min f[K] = f(q)$.

**Nonemptiness of $K$ is a hypothesis, not an oversight.** For $K = \varnothing$
the set $f[K]$ is empty, and neither a supremum nor a maximum of the empty set
exists in this library ([[def-complete-ordered-field]] supplies suprema of
nonempty sets bounded above only).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-extreme-value-metric]], proved from the cover machinery of metric
spaces; the proof below is $\mathbb{R}$-native, running through Heine-Borel for
$\mathbb{R}$ and the order-completeness of $\mathbb{R}$, and it uses no cover
argument beyond the one already spent in
[[thm-continuous-image-of-a-compact-set-r]]. That the two statements are the
same statement in two vocabularies is proved in
[[lem-real-and-metric-notions-agree]], later on this page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a nonempty compact set $K \subseteq A$; write $S := f[K]$.

[L1] $S = f[K]$ is compact ([[thm-continuous-image-of-a-compact-set-r]]), and it is nonempty because $K$ is.

[L2] $S$ is bounded: there is a real $M \ge 0$ with $|z| \le M$ for every $z \in S$, so $-M$ is a lower bound and $M$ an upper bound of $S$ ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L3] A compact subset of $\mathbb{R}$ is closed ([[thm-heine-borel-characterisation-r]], [[def-open-and-closed-in-r]]).

[L4] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]); a nonempty subset bounded below has an infimum ([[thm-infimum-property]], [[def-infimum]]).

[L5] Epsilon characterisations: for nonempty $S$ bounded above and $u = \sup S$, every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$; dually for $\ell = \inf S$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] Closure: $\overline{S}$ is the set of points every neighbourhood of which meets $S$, and $S$ is closed exactly when $S = \overline{S}$ ([[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L7] A maximum of a set is an element of it that bounds it above, and a minimum is an element that bounds it below ([[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the set $S = f[K]$ is nonempty and compact, and by [L2] it is bounded; by [L3] it is closed. [L1, L2, L3]

2.1 By [L4] the supremum $u := \sup S$ and the infimum $\ell := \inf S$ exist. [step 1.1, L4]

3.1 **$u$ is adherent to $S$.** Let a real $\varepsilon > 0$ be given. By [L5] there is $s \in S$ with $u - \varepsilon < s$, and $s \le u < u + \varepsilon$ since $u$ bounds $S$ above; hence $|s - u| < \varepsilon$, that is $s \in N_{\varepsilon}(u) \cap S$. So every neighbourhood of $u$ meets $S$. [step 2.1, L5, L6]

3.2 **$\ell$ is adherent to $S$.** Symmetrically, [L5] gives $s \in S$ with $s < \ell + \varepsilon$, and $\ell \le s$ since $\ell$ bounds $S$ below; hence $s \in N_{\varepsilon}(\ell) \cap S$ for every real $\varepsilon > 0$. [step 2.1, L5, L6]

4.1 By [L6] the two steps above say $u \in \overline{S}$ and $\ell \in \overline{S}$; and $S$ is closed by step 1.1, so $\overline{S} = S$ and therefore $u \in S$ and $\ell \in S$. [step 1.1, step 3.1, step 3.2, L6]

5.1 Since $u \in S = f[K]$ there is $p \in K$ with $f(p) = u$, and since $\ell \in S$ there is $q \in K$ with $f(q) = \ell$. [step 4.1, choose]

6.1 For every $x \in K$ the value $f(x)$ lies in $S$, so $\ell \le f(x) \le u$, that is $f(q) \le f(x) \le f(p)$. Hence $u = \sup f[K] = f(p)$ is a maximum of $f[K]$ and $\ell = \inf f[K] = f(q)$ is a minimum of it, both attained at points of $K$. [step 2.1, step 4.1, step 5.1, L7] ∎

## Remarks

- **The two ingredients, kept apart.** Compactness of $K$ enters only through the compactness of the image; order-completeness of $\mathbb{R}$ enters only in the existence of $\sup S$ and $\inf S$. The bridge between them is closedness of $S$: a closed set contains the adherent points of itself, and the supremum of a nonempty bounded set is always adherent to it, by [[lem-sup-epsilon]]. Neither ingredient can be dropped: over $\mathbb{Q}$ the supremum need not exist, and on a noncompact domain the supremum exists and is not attained ([[cex-evt-fails-on-the-open-interval-and-on-the-half-line]]).

- **Attainment is exactly what the epsilon characterisation cannot give on its own.** [[lem-sup-epsilon]] produces points of $S$ arbitrarily close to $\sup S$ for any nonempty bounded $S$; nothing there says one of them equals $\sup S$. What closedness adds is that the limiting value is not lost.

- **The converse.** If every continuous real function on a set $E$ attains a greatest value, then $E$ is compact. That is the content of [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], which exhibits, for every noncompact $E$, a bounded continuous function on $E$ with no greatest value.
````

### `thm-heine-borel-characterisation-r`

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
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

