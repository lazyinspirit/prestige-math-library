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

- high risk (7): 14 declared dependencies; 14 cited facts; boundary-sensitive language

## Target item — `cex-null-set-not-of-content-zero`

Normalized current SHA-256: `29aca2c3d8895c8d17c9d81d407043cf9f5b1102dae6684368ac514271ee1114`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-null-set-not-of-content-zero
kind: counterexample
title: "$\\mathbb{Q} \\cap [0,1]$ has measure zero and not content zero, although it is bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-null-implies-content-zero, lem-finite-interval-cover-total-length, lem-countable-sets-are-null, def-measure-zero-and-content-zero, thm-rationals-countable, lem-subset-of-countable, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, thm-open-set-algebra-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-interval, def-countable, thm-compact-null-is-content-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every set of measure zero has content zero
([[fs-null-implies-content-zero]]).

The witness is $E := \mathbb{Q}_{\mathbb{R}} \cap [0,1]$, the rationals of the
unit interval ([[lem-rat-embeds-dense]], [[def-interval]]). It is at most
countable, hence null; it is bounded; and every finite family of intervals
covering it has total length at least $1$, because the union of finitely many
closed intervals is closed and contains the closure of $E$, which is all of
$[0,1]$. The refutation is carried out in full in
[[fs-null-implies-content-zero]]; this item records the witness and says what
makes it work.

## Facts & Assumptions

**Given:** The set $E = \mathbb{Q}_{\mathbb{R}} \cap [0,1]$.

[A1] The refuted claim: every subset of $\mathbb{R}$ of measure zero has content zero.

[L1] $E$ is at most countable, being a subset of the countable set $\mathbb{Q}_{\mathbb{R}}$, and therefore null ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]], [[lem-rat-embeds-dense]], [[lem-countable-sets-are-null]]).

[L2] Every point of $[0,1]$ is adherent to $E$, so any closed set containing $E$ contains $[0,1]$; and a finite union of closed intervals is closed ([[fs-null-implies-content-zero]], [[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]], [[def-interval]]).

[L3] A finite family of closed intervals covering $[0,1]$ has total length at least $1$ ([[lem-finite-interval-cover-total-length]]).

[L4] Content zero means a finite cover of total length below every positive $\varepsilon$; on compact sets content zero and measure zero coincide ([[def-measure-zero-and-content-zero]], [[thm-compact-null-is-content-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 $E$ has measure zero by [L1], and $E \subseteq [0,1]$ is bounded. [L1]

1.2 Any finite family of closed intervals covering $E$ has total length at least $1$: its union is closed by [L2] and contains $E$, hence contains $[0,1]$ by [L2], and [L3] applies. [L2, L3]

2.1 So $E$ does not have content zero, since a witness at $\varepsilon = 2^{-1}$ would give a finite cover of total length at most $2^{-1} < 1$; $E$ therefore witnesses the failure of [A1]. [step 1.1, step 1.2, A1, L4] ∎

## Remarks

- **Boundedness is not what is missing.** $E$ is bounded, and its failure is as
  large as it can be: no finite cover does better than the trivial cover of
  $[0,1]$ by itself. What $E$ lacks is closedness, and hence compactness; adding
  it repairs the implication completely ([[thm-compact-null-is-content-zero]]).

- **The closure is the whole obstruction.** Content zero is insensitive to
  passing to the closure, since a finite union of closed intervals is closed,
  whereas measure zero is not: $E$ is null and $\overline{E} = [0,1]$ is not
  ([[lem-nondegenerate-interval-is-not-null]]). That single asymmetry is the
  entire difference between the two notions.

- **Compare the compact case.** The Cantor set is uncountable and null, and being
  compact it also has content zero ([[thm-cantor-set-properties]]). So the failure
  here is not about cardinality: a much larger null set can have content zero,
  and a countable one need not.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-null-set-not-of-content-zero",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.mit.edu/classes/18.125/HW2.pdf",
    "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
  ],
  "rationale": "MIT licenses countable nullity, and the UAF notes give the compact finite-subcover length argument for intervals. The local witness Q intersect [0,1] combines them to separate nullity from finite-cover content zero.",
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
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "countable",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-subset-of-countable",
      "source_section": "Statement",
      "quote": "Let $A$ be at most countable ([[def-countable]]) and let $B \\subseteq A$. Then $B$ is at most countable.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "countable",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and rational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with $|x - \\hat q| < \\hat\\varepsilon$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-countable-sets-are-null",
      "source_section": "Statement",
      "quote": "Every at most countable set $A \\subseteq \\mathbb{R}$ ([[def-countable]]) has measure zero ([[def-measure-zero-and-content-zero]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "fs-null-implies-content-zero",
      "source_section": "Statement",
      "quote": "The converse is true and is [[lem-content-zero-implies-null]]; the two notions do coincide for compact sets ([[thm-compact-null-is-content-zero]]). The claim above drops the compactness, and boundedness alone is not a substitute: the witness below is a bounded set of measure zero with no finite cover by intervals of total length less than $1$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "1. $\\mathbb{Q}_{\\mathbb{R}}$ is dense in $\\mathbb{R}$, that is, $\\overline{\\mathbb{Q}_{\\mathbb{R}}} = \\mathbb{R}$ ([[def-limit-point-r]]); 2. $X$ is dense in $\\mathbb{R}$; 3. every nonempty open subset of $\\mathbb{R}$ is uncountable ([[def-countable]]). Claim 2 is not a symmetry of claim 1: the rationals are dense because they are *constructed* to approximate, whereas the irrationals are dense because there are too many points in any interval for a countable set to exhaust it, which is why claim 3 is proved alongside and used for it.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in [[def-interior-closure-boundary-r]] and derived set $A'$ as in [[def-limit-point-r]]. Write $$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$ for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then: 1. $\\overline{A} = E$. 2. $\\overline{A} = A \\cup A'$. 3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$. 4. $A$ is closed if and only if $A = \\overline{A}$, if and only if $A' \\subseteq A$. Claim 3 is the content of the definition of $\\overline{A}$ and is restated here so that the four descriptions stand together; claims 1, 2 and 4 are the ones that carry work.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-open-set-algebra-r",
      "source_section": "Statement",
      "quote": "Let open and closed subsets of $\\mathbb{R}$ be as in [[def-open-and-closed-in-r]]. 1. **Arbitrary unions of open sets are open.** If $\\mathcal{U}$ is any family of open subsets of $\\mathbb{R}$, then $\\bigcup \\mathcal{U}$ is open. 2. **Finite intersections of open sets are open.** If $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n$ are open, then $U_0 \\cap \\dots \\cap U_n$ is open. 3. **Arbitrary intersections of closed sets are closed.** If $\\mathcal{F}$ is a nonempty family of closed subsets of $\\mathbb{R}$, then $\\bigcap \\mathcal{F}$ is closed. 4. **Finite unions of closed sets are closed.** If $n \\in \\mathbb{N}$ and $F_0, \\dots, F_n$ are closed, then $F_0 \\cup \\dots \\cup F_n$ is closed. The word *finite* in claims 2 and 4 is not decoration: an arbitrary intersection of open sets need not be open, and dually an arbitrary union of closed sets need not be closed; the remarks below say where that is settled. Claim 3 asks $\\mathcal{F}$ to be nonempty only so that $\\bigcap \\mathcal{F}$ is a subset of $\\mathbb{R}$ without appeal to a convention about the empty intersection.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-interval-cover-total-length",
      "source_section": "Statement",
      "quote": "**The same bound holds for a cover by bounded intervals of any of the four bounded forms**, since an interval with endpoints $c \\le d$ is contained in $[c,d]$ and has the same length $d - c$ ([[def-interval]]); replacing each covering interval by the closed interval on its endpoints changes no length and only enlarges the union. In particular a finite family of intervals of total length strictly below $b - a$ cannot cover $[a,b]$, which is the form in which this lemma is used throughout the page.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such that $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$ - $A$ has **content zero** when for every real $\\varepsilon > 0$ there are $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-compact-null-is-content-zero",
      "source_section": "Statement",
      "quote": "$$K \\text{ has measure zero} \\quad \\Longleftrightarrow \\quad K \\text{ has content zero}$$",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$E$ has measure zero by [L1], and $E \\subseteq [0,1]$ is bounded.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Any finite family of closed intervals covering $E$ has total length at least $1$: its union is closed by [L2] and contains $E$, hence contains $[0,1]$ by [L2], and [L3] applies.",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So $E$ does not have content zero, since a witness at $\\varepsilon = 2^{-1}$ would give a finite cover of total length at most $2^{-1} < 1$; $E$ therefore witnesses the failure of [A1].",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1",
        "1.2",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The counterexample is the fixed nonempty set Q∩[0,1]."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1–1.2 include the endpoint 0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.2 derives the lower bound 1 from coverage of [0,1]."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.2 permits zero-length members of a finite cover but the total still cannot fall below 1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.2 uses closure to force a finite cover of the full closed interval [0,1], including both endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof reads nullity and the universal finite-cover lower bound of the fixed witness."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cex-null-set-not-of-content-zero` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cex-null-set-not-of-content-zero` is not an equivalence, so it has no reverse iff direction."
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
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-null-implies-content-zero",
    "declared_target": "fs-null-implies-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-finite-interval-cover-total-length",
    "declared_target": "lem-finite-interval-cover-total-length",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-countable-sets-are-null",
    "declared_target": "lem-countable-sets-are-null",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-subset-of-countable",
    "declared_target": "lem-subset-of-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-open-set-algebra-r",
    "declared_target": "thm-open-set-algebra-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
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
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
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
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-null-set-not-of-content-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-compact-null-is-content-zero",
    "declared_target": "thm-compact-null-is-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
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

## Full text of every cited or declared item (16)

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
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

### `def-measure-zero-and-content-zero`

````markdown
---
id: def-measure-zero-and-content-zero
kind: definition
title: "Measure zero (a countable cover by intervals of total length below every $\\varepsilon$) and content zero (a finite such cover)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-series, def-countable, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: [def-null-set]
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), intervals and their lengths are as in
[[def-interval]], and a *sequence* is a function on $\mathbb{N}$, which contains
$0$. Let $A \subseteq \mathbb{R}$.

- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
  $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
  $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such
  that
  $$A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k] \qquad \text{and} \qquad \sum_{k=0}^{\infty} (b_k - a_k) \text{ converges with sum } \le \varepsilon .$$
- $A$ has **content zero** when for every real $\varepsilon > 0$ there are
  $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with
  $$A \subseteq \bigcup_{j \le n} [a_j, b_j] \qquad \text{and} \qquad \sum_{j=0}^{n} (b_j - a_j) \le \varepsilon .$$

The number $b_k - a_k \ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and
the sums are the series and the finite sums of [[def-series]] and
[[def-finite-sum]].

**Working form: only the partial sums have to be checked.** All the terms
$b_k - a_k$ are $\ge 0$, so by claim 2 of
[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when
its partial sums are bounded above, and its sum is then their supremum.
Consequently, for a fixed $\varepsilon > 0$,

$$\sum_{k=0}^{\infty}(b_k - a_k) \text{ converges with sum} \le \varepsilon \quad \Longleftrightarrow \quad \sum_{k<n} (b_k - a_k) \le \varepsilon \ \text{ for every } n \in \mathbb{N},$$

since a supremum is $\le \varepsilon$ exactly when $\varepsilon$ is an upper
bound of the set it is the supremum of ([[def-complete-ordered-field]]). Every
verification of nullity below checks the right-hand condition.

**Closed intervals lose nothing.** A bounded interval with endpoints
$a \le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so
a cover by intervals of any of the four bounded forms yields a cover by closed
intervals with the same lengths. The definition is therefore stated with closed
intervals once and for all. Covers by *open* intervals are a genuinely different
demand, and passing to one costs a little extra length: the enlargement
$[a_k,b_k] \subseteq (a_k - \delta_k,\ b_k + \delta_k)$ is carried out where it is
needed, in [[lem-nondegenerate-interval-is-not-null]] and in
[[thm-compact-null-is-content-zero]].

**Both notions are inherited by subsets.** If $B \subseteq A$ and $A$ is null,
then any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite
covers shows a subset of a set of content zero has content zero.

**A finite cover is a countable cover, so content zero implies measure zero.**
Padding the list $[a_0,b_0], \dots, [a_n,b_n]$ with the degenerate intervals
$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for
finite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its
proof, [[lem-content-zero-implies-null]], because it is cited on its own.

## Remarks

- **The two notions genuinely differ.** $\mathbb{Q} \cap [0,1]$ is null and does
  not have content zero ([[cex-null-set-not-of-content-zero]]), so the two
  quantifier patterns, "a sequence of intervals" and "a finite list of
  intervals", are not interchangeable. They do agree for compact sets
  ([[thm-compact-null-is-content-zero]]), and the compact case is the only one in
  which content zero is used anywhere on this pair of pages. Nothing is claimed
  about what later pages will do with it.

- **Why "content" and not "measure" for the finite version.** The finite-cover
  notion is the vanishing of the Jordan outer content, and the countable-cover
  notion is the vanishing of the Lebesgue outer measure. Neither outer quantity
  is defined in this library, and no item here assigns a nonzero size to any set:
  every statement is of the shape "can, or cannot, be covered by intervals of
  total length below such and such a bound". That is a deliberate restriction of
  scope at this point in the reading order, not a claim that the general notions
  are unavailable in mathematics.

- **Measure zero is not vacuous and not universal.** No interval with two
  distinct endpoints is null ([[lem-nondegenerate-interval-is-not-null]]), while
  every at most countable set is ([[lem-countable-sets-are-null]]) and so is the
  uncountable Cantor set ([[thm-cantor-set-properties]]). The three facts
  together are what make the notion worth having.
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

### `fs-null-implies-content-zero`

````markdown
---
id: fs-null-implies-content-zero
kind: false-statement
title: "FALSE: every set of measure zero has content zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-content-zero-implies-null, thm-compact-null-is-content-zero, lem-finite-interval-cover-total-length, def-measure-zero-and-content-zero, thm-rationals-countable, lem-countable-sets-are-null, lem-subset-of-countable, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, thm-open-set-algebra-r, def-open-and-closed-in-r, thm-closure-characterisations-r, def-interval, def-countable, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
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
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

**False claim:** every set of measure zero has content zero
([[def-measure-zero-and-content-zero]]).

The converse is true and is [[lem-content-zero-implies-null]]; the two notions do
coincide for compact sets ([[thm-compact-null-is-content-zero]]). The claim above
drops the compactness, and boundedness alone is not a substitute: the witness
below is a bounded set of measure zero with no finite cover by intervals of total
length less than $1$.

## Facts & Assumptions

**Given:** The set $E := \mathbb{Q}_{\mathbb{R}} \cap [0,1]$, where $\mathbb{Q}_{\mathbb{R}}$ is the image of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] The false claim: every subset of $\mathbb{R}$ of measure zero has content zero.

[L1] $\mathbb{Q} \approx \mathbb{N}$ and a subset of an at most countable set is at most countable, so $E$ is at most countable, hence null ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]], [[lem-countable-sets-are-null]], [[lem-rat-embeds-dense]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$: strictly between any two reals lies a rational ([[lem-q-and-irrationals-dense-r]], [[lem-rat-embeds-dense]]).

[L3] $[c,d]$ is a closed set, a finite union of closed sets is closed, and $\overline{A}$ is the set of points every neighbourhood of which meets $A$, so a closed set containing $A$ contains $\overline{A}$ ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L4] If $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$ with $a \le b$ and $c_j \le d_j$, then $\sum_{j \le n}(d_j - c_j) \ge b - a$ ([[lem-finite-interval-cover-total-length]]).

[L5] $A$ has content zero when for every real $\varepsilon > 0$ it has a finite cover by closed intervals of total length at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

[L6] Every nonempty finite set of reals has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $2^{-1} > 0$ and $2^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $E$ has measure zero by [L1], and $E \subseteq [0,1]$ is bounded. [L1]

1.2 Every $x \in [0,1]$ is adherent to $E$: given a real $\varepsilon > 0$, put $p := \max\{0,\ x - \varepsilon\}$ and $q := \min\{1,\ x + \varepsilon\}$, which exist by [L6]. Then $p < q$: indeed $p \le x \le q$ by [L7] and $0 \le x \le 1$, while $p = x$ would need $x \le 0$ hence $x = 0 < \min\{1,\varepsilon\} = q$, and $q = x$ would need $x \ge 1$ hence $x = 1 > \max\{0, 1-\varepsilon\} = p$, and otherwise $p < x < q$. By [L2] there is a rational strictly between $p$ and $q$; it lies in $[0,1]$ because $0 \le p$ and $q \le 1$, and within $\varepsilon$ of $x$ because $x - \varepsilon \le p$ and $q \le x + \varepsilon$. So $N_\varepsilon(x) \cap E \ne \varnothing$. [L2, L6, L7]

2.1 Let $n \in \mathbb{N}$ and $c_0 \le d_0, \dots, c_n \le d_n$ be any finite family of closed intervals with $E \subseteq \bigcup_{j \le n}[c_j,d_j]$. The union $\bigcup_{j\le n}[c_j,d_j]$ is a closed set by [L3], and it contains $E$, hence contains $\overline{E}$ by [L3]; by step 1.2 every point of $[0,1]$ lies in $\overline{E}$, so $[0,1] \subseteq \bigcup_{j \le n}[c_j,d_j]$ and [L4] gives $\sum_{j \le n}(d_j - c_j) \ge 1$. [step 1.2, L3, L4]

3.1 So no finite family of closed intervals covers $E$ with total length at most $2^{-1} < 1$, and $E$ does not have content zero by [L5] and [L7]; yet $E$ has measure zero by step 1.1. The claim [A1] therefore fails at $E$ and is false. [step 1.1, step 2.1, A1, L5, L7] ∎

## Remarks

- **Boundedness is not the missing hypothesis, closedness is.** $E$ is bounded
  and its failure is total: no finite cover does better than total length $1$,
  the same bound as for all of $[0,1]$. What $E$ lacks is closedness, and with it
  compactness; [[thm-compact-null-is-content-zero]] shows that supplying it
  repairs the implication completely.

- **The gap between the two notions is a quantifier, not a constant.** Given
  $\varepsilon$, the countable cover of $E$ from
  [[lem-countable-sets-are-null]] uses intervals whose lengths shrink
  geometrically; no finite initial segment of it covers $E$, because the rationals
  left over are still dense in $[0,1]$. Compactness is exactly what turns a
  countable cover into a finite one, and that is the whole content of the repair.

- **The named witness** is [[cex-null-set-not-of-content-zero]].
````

### `lem-countable-sets-are-null`

````markdown
---
id: lem-countable-sets-are-null
kind: lemma
title: "Every at most countable subset of $\\mathbb{R}$ has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, def-countable, lem-countable-iff-surjection-from-n, thm-geometric-series, def-series, def-interval, def-integer-power, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-dense-set-of-measure-zero]
aliases: []
landmark: false
short: "countable $\\Rightarrow$ null"
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

Every at most countable set $A \subseteq \mathbb{R}$ ([[def-countable]]) has
measure zero ([[def-measure-zero-and-content-zero]]).

The cover is explicit: the $k$-th point of a listing of $A$ is put inside an
interval of length $\varepsilon \cdot 2^{-k-1}$, and the lengths sum to
$\varepsilon$ by [[thm-geometric-series]]. **No choice principle is used**: a
listing of $A$ is a single object, fixed once ([[lem-countable-iff-surjection-from-n]]),
and everything after that is a formula in $k$.

## Facts & Assumptions

**Given:** An at most countable set $A \subseteq \mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[L1] $A$ is null when for every real $\varepsilon > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k [a_k,b_k]$, and $\sum_{k<n}(b_k - a_k) \le \varepsilon$ for every $n \in \mathbb{N}$ ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c$ when $c \le d$, and $[c,c] = \{c\}$ has length $0$ ([[def-interval]]).

[L3] A nonempty at most countable set admits a surjection $s : \mathbb{N} \to A$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L4] Powers and the geometric series: $\theta^0 = 1$, $\theta^{k+1} = \theta^k\theta$, $\theta^k > 0$, and $\sum_{k=0}^{\infty}\theta^k = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L5] Finite sums: scaling by a constant, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$ and $t \cdot 4^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given. If $A = \varnothing$, the constant sequences $a_k := 0$ and $b_k := 0$ satisfy $A \subseteq \bigcup_k [0,0]$ vacuously and $\sum_{k<n}(b_k - a_k) = 0 \le \varepsilon$ for every $n$ by [L5], so the condition of [L1] holds at this $\varepsilon$. Assume from now on that $A \ne \varnothing$ and, by [L3], fix a surjection $s : \mathbb{N} \to A$. [given, L1, L2, L3, L5, choose]

2.1 Put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L4] and [L6], and $a_k := s(k) - \delta_k$, $b_k := s(k) + \delta_k$; then $a_k \le b_k$ and $s(k) \in [a_k,b_k]$ by [L6], so $A = \{\, s(k) : k \in \mathbb{N} \,\} \subseteq \bigcup_k [a_k, b_k]$ by step 1.1. The length of $[a_k,b_k]$ is $b_k - a_k = 2\delta_k = \varepsilon \cdot 2^{-1} \cdot \theta^{k}$ by [L2] and [L6]. [step 1.1, L2, L4, L6]

3.1 For every $n \in \mathbb{N}$, $\sum_{k<n}(b_k - a_k) = \varepsilon \cdot 2^{-1} \sum_{k<n}\theta^{k} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, using scaling from [L5] and the bound on the partial sums of the geometric series from [L4]. [step 2.1, L4, L5, L6]

4.1 So for every real $\varepsilon > 0$ the sequences of step 2.1 cover $A$ with all partial total lengths at most $\varepsilon$, which by [L1] is exactly the statement that $A$ has measure zero; the empty case was settled in step 1.1. [step 1.1, step 2.1, step 3.1, L1] ∎

## Remarks

- **Indexing.** Sequences here start at $k = 0$, and the first interval has
  length $\varepsilon \cdot 2^{-1}$, not $\varepsilon$. The total is
  $\varepsilon \cdot 2^{-1} \sum_{k \ge 0} 2^{-k} = \varepsilon$ exactly, so the
  cover is as tight as the definition allows and nothing is wasted at the first
  index.

- **Repetitions are harmless.** A surjection $s$ may repeat values, and a finite
  set is covered by infinitely many intervals, most of them redundant. This is
  why the listing form of countability ([[lem-countable-iff-surjection-from-n]])
  is the convenient one: no injectivity and no case split between the finite and
  the countably infinite case is needed.

- **The converse fails badly.** The Cantor set is uncountable and null
  ([[thm-cantor-set-properties]]), so "null" is very far from "countable"; and
  the Smith-Volterra-Cantor set is uncountable and not null
  ([[thm-fat-cantor-set-has-positive-measure]]), so cardinality decides nothing
  either way.

- **Density decides nothing either.** $\mathbb{Q}$ is countable, hence null, and
  is dense in $\mathbb{R}$ ([[cex-dense-set-of-measure-zero]]); a null set may
  therefore meet every interval.
````

### `lem-finite-interval-cover-total-length`

````markdown
---
id: lem-finite-interval-cover-total-length
kind: lemma
title: "If finitely many intervals cover a closed bounded interval $[a,b]$, the sum of their lengths is at least $b - a$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interval, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "finite cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: induction
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $n \in \mathbb{N}$, and let
$c_0 \le d_0, \ \dots, \ c_n \le d_n$ be reals such that

$$[a,b] \;\subseteq\; \bigcup_{j \le n} [c_j, d_j] ,$$

the intervals being those of [[def-interval]]. Then

$$\sum_{j=0}^{n} (d_j - c_j) \;\ge\; b - a .$$

**The same bound holds for a cover by bounded intervals of any of the four
bounded forms**, since an interval with endpoints $c \le d$ is contained in
$[c,d]$ and has the same length $d - c$ ([[def-interval]]); replacing each
covering interval by the closed interval on its endpoints changes no length and
only enlarges the union. In particular a finite family of intervals of total
length strictly below $b - a$ cannot cover $[a,b]$, which is the form in which
this lemma is used throughout the page.

This is the one quantitative fact underlying everything about measure zero here.
Without it nothing forbids a set of measure zero from being all of $[0,1]$.
Four items on this page rest on it: [[lem-nondegenerate-interval-is-not-null]]
directly, and through that lemma [[thm-cantor-set-properties]],
[[thm-fat-cantor-set-has-positive-measure]] and
[[fs-null-implies-content-zero]]. Two of the worked items on the companion page
rest on it as well.

## Facts & Assumptions

**Given:** For $n \in \mathbb{N}$ let $P(n)$ be the assertion: for all reals $a \le b$ and all reals $c_0 \le d_0, \dots, c_n \le d_n$ with $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$, one has $\sum_{j \le n}(d_j - c_j) \ge b - a$. The lemma is that $P(n)$ holds for every $n \in \mathbb{N}$.

[L1] $[c,d] = \{\, x : c \le x \le d \,\}$, its length is $d - c \ge 0$ when $c \le d$, and $[a,b]$ is nonempty exactly when $a \le b$ ([[def-interval]]).

[L2] Finite sums: $\sum_{j \le n} t_j = \sum_{j < n+1} t_j$ with $\sum_{j<0} t_j = 0$ and $\sum_{j<m+1} t_j = \sum_{j<m} t_j + t_m$; sums split as $\sum_{j<m} t_j = \sum_{j<i} t_j + \sum_{j=i}^{m-1} t_j$ for $i \le m$, where $\sum_{j=i}^{m-1} t_j = \sum_{l < m-i} t_{i+l}$; a sum of nonnegative terms is nonnegative, and each single term is at most the whole sum ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $2 := 1 + 1 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** induction.

1.1 The assertion to be proved is $P(n)$ for every $n \in \mathbb{N}$, with $P$ as in the Given, and the argument is an induction on $n$ using [L3]. [given, L3, induction]

1.2 **Base, $n = 0$.** Let $a \le b$ and $[a,b] \subseteq [c_0,d_0]$ with $c_0 \le d_0$. Then $a \in [a,b]$ and $b \in [a,b]$ by [L1], so $c_0 \le a$ and $b \le d_0$, whence $d_0 - c_0 \ge b - a$ by [L4]; and $\sum_{j \le 0}(d_j - c_j) = d_0 - c_0$ by [L2]. So $P(0)$ holds. [base, L1, L2, L4]

1.3 **Induction hypothesis.** Fix $n \in \mathbb{N}$ and assume $P(n)$. [ih, given]

2.1 **The induction step: the two easy cases.** Let $a \le b$ and let $c_0 \le d_0, \dots, c_{n+1} \le d_{n+1}$ satisfy $[a,b] \subseteq \bigcup_{j \le n+1}[c_j,d_j]$; write $S := \sum_{j \le n+1}(d_j - c_j)$, a sum of nonnegative terms by [L1]. If $a = b$ then $b - a = 0 \le S$ by [L2]. Otherwise $a < b$; then $a \in [a,b]$ by [L1], so there is $i \le n+1$ with $a \in [c_i,d_i]$, that is $c_i \le a \le d_i$, and we fix one such $i$. If $d_i \ge b$ then $d_i - c_i \ge b - a$ by [L4], and $d_i - c_i \le S$ by [L2], so $S \ge b - a$. There remains the case $a < b$ and $d_i < b$. [step 1.1, L1, L2, L4, choose]

3.1 **The induction step: the remaining case, where the $i$-th interval is deleted.** Assume $a < b$ and $d_i < b$, and define $n+1$ pairs by $(c'_l, d'_l) := (c_l, d_l)$ for $l < i$ and $(c'_l, d'_l) := (c_{l+1}, d_{l+1})$ for $i \le l \le n$; by the splitting law and the index-shift convention of [L2], $S' := \sum_{l \le n}(d'_l - c'_l) = S - (d_i - c_i)$. Let $\eta$ be any real with $0 < \eta \le b - d_i$ and put $c := d_i + \eta$, so $d_i < c \le b$. Every $x \in [c,b]$ satisfies $x \ge c > d_i$, hence $x \notin [c_i,d_i]$ by [L1], and satisfies $a \le d_i < x \le b$, hence $x \in [a,b]$; so $x$ lies in some $[c_j,d_j]$ with $j \ne i$, that is in some $[c'_l,d'_l]$. Thus $[c,b] \subseteq \bigcup_{l \le n}[c'_l,d'_l]$ with $c \le b$, and step 1.3 gives $S' \ge b - c = b - d_i - \eta$. [step 1.3, step 2.1, L1, L2, L4]

4.1 **Passing to the limiting value of $\eta$, and the conclusion.** In the case of step 3.1 one has $S' \ge b - d_i$: were $S' < b - d_i$, the real $\eta_0 := (b - d_i - S') \cdot 2^{-1}$ would satisfy $0 < \eta_0 < b - d_i$ by [L4], so step 3.1 would give $S' \ge b - d_i - \eta_0 = (b - d_i + S') \cdot 2^{-1} > S'$, which is impossible. Hence $S = (d_i - c_i) + S' \ge (d_i - a) + (b - d_i) = b - a$ by [L4], using $c_i \le a$ from step 2.1. Together with the cases settled in step 2.1 this proves $P(n+1)$, so by [L3] $P(n)$ holds for every $n \in \mathbb{N}$. [step 2.1, step 3.1, L2, L3, L4, discharge-induction] ∎

## Remarks

- **Why the argument does not simply take $[d_i, b]$.** The point $d_i$ itself may be covered by the deleted interval and by nothing else, so the remaining intervals need not cover $[d_i,b]$. They do cover $[d_i + \eta,\, b]$ for every positive $\eta$, and that is enough: the bound $b - d_i - \eta$ holds for all such $\eta$, and step 4.1 removes the $\eta$. Every attempt to shortcut this step by taking a closed left endpoint at $d_i$ is false as stated.

- **Degenerate covering intervals are allowed and cost nothing.** A pair with $c_j = d_j$ contributes the single point $c_j$ and the length $0$, so a list may always be padded to a longer one, which is what [[lem-content-zero-implies-null]] does.

- **The bound is sharp.** The single interval $[a,b]$ covers $[a,b]$ with total length exactly $b - a$, and no cover does better.

- **This is not the Heine-Borel theorem, and it does not use it.** The lemma is a statement about finitely many intervals and is proved by counting alone; compactness enters only when a countable cover has to be reduced to a finite one, which is what [[lem-nondegenerate-interval-is-not-null]] does with it.
````

### `lem-nondegenerate-interval-is-not-null`

````markdown
---
id: lem-nondegenerate-interval-is-not-null
kind: lemma
title: "A sequence of intervals covering $[a,b]$ has total length at least $b - a$, so no interval of positive length has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-interval-cover-total-length, def-measure-zero-and-content-zero, def-interval, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-bounded-set, thm-geometric-series, def-series, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "countable cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $(a_k)_{k \in \mathbb{N}}$ and
$(b_k)_{k \in \mathbb{N}}$ be sequences of reals with $a_k \le b_k$ for every
$k$, and suppose

$$[a,b] \;\subseteq\; \bigcup_{k \in \mathbb{N}} [a_k, b_k] .$$

If $M \in \mathbb{R}$ satisfies $\sum_{k < n} (b_k - a_k) \le M$ for every
$n \in \mathbb{N}$, then

$$M \;\ge\; b - a .$$

Consequently, if $a < b$ then **no subset of $\mathbb{R}$ containing $[a,b]$ has
measure zero** ([[def-measure-zero-and-content-zero]]); in particular none of
the four bounded intervals $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ with $a < b$ has
measure zero, so measure zero is not a vacuous notion.

This is the countable strengthening of
[[lem-finite-interval-cover-total-length]], and it is what compactness is spent
on: the countable cover is enlarged to an open one at an arbitrarily small cost
in total length, and [[thm-heine-borel-characterisation-r]] reduces it to a
finite cover, where the finite lemma applies.

## Facts & Assumptions

**Given:** Reals $a \le b$, sequences $(a_k)$ and $(b_k)$ with $a_k \le b_k$ for every $k$ and $[a,b] \subseteq \bigcup_k [a_k,b_k]$, and a real $M$ with $\sum_{k<n}(b_k - a_k) \le M$ for every $n \in \mathbb{N}$. Throughout, $\theta := 2^{-1}$.

[L1] Measure zero: $A$ is null when for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ all of whose partial total lengths are $\le \varepsilon$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c \ge 0$ when $c \le d$; $(c,d)$ is the open interval; a closed bounded interval is bounded ([[def-interval]], [[def-bounded-set]]).

[L3] Every open interval $(c,d)$ is an open set and every interval $[c,d]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L4] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]); from every family of open sets whose union contains a compact set, either the set is empty and the empty subfamily covers it, or one can extract $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family whose union already contains it ([[def-open-cover-r]]).

[L5] If $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$ with $c_j \le d_j$ and $a \le b$, then $\sum_{j \le n}(d_j - c_j) \ge b - a$; the same holds for covering intervals of any bounded form with those endpoints ([[lem-finite-interval-cover-total-length]]).

[L6] Powers and the geometric series: $\theta^0 = 1$ and $\theta^{k+1} = \theta^k \theta$, all $\theta^k > 0$ for $\theta > 0$, and $\sum_{k=0}^{\infty} \theta^k = 1/(1-\theta) = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling by a constant, splitting, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list $k_0, \dots, k_m$ of naturals has an upper bound $K \in \mathbb{N}$: by induction on $m$, taking $K = 0$ for the empty case and replacing $K$ by whichever of $K$ and $k_{m+1}$ is the larger, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $M < b - a$. Since $\sum_{k<0}(b_k - a_k) = 0$ by [L7], we have $M \ge 0$, so $b - a > 0$ and $a < b$. Put $\varepsilon := (b - a - M) \cdot 2^{-1}$, a positive real by [L9]. [assume-contra, given, L7, L9]

2.1 For $k \in \mathbb{N}$ put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$. Each $J_k$ is an open set by [L3], and $[a_k,b_k] \subseteq J_k$ because $a_k - \delta_k < a_k \le x \le b_k < b_k + \delta_k$ for $x \in [a_k,b_k]$, by [L2] and [L9]. Hence $[a,b] \subseteq \bigcup_k [a_k,b_k] \subseteq \bigcup_k J_k$, so $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $[a,b]$. The length of the interval with endpoints $a_k - \delta_k$ and $b_k + \delta_k$ is $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k}$, by [L2] and [L9]. [step 1.1, given, L2, L3, L6, L9]

3.1 $[a,b]$ is closed and bounded by [L2] and [L3], hence compact by [L4]; so there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of the family with $[a,b] \subseteq J_{k_0} \cup \dots \cup J_{k_m}$. By [L8] fix $K \in \mathbb{N}$ with $k_t \le K$ for every $t \le m$; then every $J_{k_t}$ occurs among $J_0, \dots, J_K$, so $[a,b] \subseteq \bigcup_{k \le K} J_k$. [step 2.1, L2, L3, L4, L8, choose]

4.1 By [L5], applied to the $K+1$ intervals $J_k$ with endpoints $a_k - \delta_k \le b_k + \delta_k$, one gets $\sum_{k \le K} \big( (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k} \big) \ge b - a$. [step 2.1, step 3.1, L5]

5.1 The left-hand side is at most $M + \varepsilon$: by [L7] it splits as $\sum_{k < K+1}(b_k - a_k) + \varepsilon \cdot 2^{-1} \sum_{k < K+1} \theta^{k}$, the first sum is $\le M$ by hypothesis, and the second is $\le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$ by [L6]. So $b - a \le M + \varepsilon = (b - a + M) \cdot 2^{-1} < b - a$ by [L9], which is impossible; the assumption of step 1.1 is untenable and $M \ge b - a$. For the consequence, let $a < b$ and let $A \supseteq [a,b]$ be null; taking $\varepsilon_1 := (b-a) \cdot 2^{-1} > 0$ in [L1] gives a sequence of closed intervals covering $A$, hence covering $[a,b]$, with every partial total length $\le \varepsilon_1$, so what has just been proved gives $(b-a) \cdot 2^{-1} \ge b - a$ and hence $b - a \le 0$ by [L9], contradicting $a < b$. Finally each of $(a,b)$, $[a,b)$, $(a,b]$ and $[a,b]$ with $a < b$ contains $[a', b']$ for $a' := a + (b-a) \cdot 4^{-1}$ and $b' := b - (b-a) \cdot 4^{-1}$, which satisfy $a < a' < b' < b$ by [L9], so none of them is null. [step 1.1, step 2.1, step 4.1, given, L1, L6, L7, L9, discharge-contradiction] ∎

## Remarks

- **What the hypothesis $\sum_{k<n}(b_k - a_k) \le M$ says.** It is the working form of "the total length is at most $M$" recorded in [[def-measure-zero-and-content-zero]]: for nonnegative terms, having all partial sums below $M$ is the same as convergence with sum below $M$. Stating the lemma with partial sums avoids assuming convergence, and the conclusion is therefore also the statement that a cover of $[a,b]$ whose total length diverges is no counterexample.

- **The $\varepsilon$ is spent on making the cover open, not on the estimate.** Enlarging $[a_k,b_k]$ to $(a_k - \delta_k, b_k + \delta_k)$ adds $2\delta_k$ to the $k$-th length, and the geometric choice $\delta_k = \varepsilon \theta^k/4$ makes the whole added amount at most $\varepsilon$, however many intervals are used. This is the standard device and it recurs in [[thm-compact-null-is-content-zero]].

- **Compactness is not optional here.** Without it the finite lemma cannot be reached, and the countable statement is genuinely stronger than the finite one: $\mathbb{Q} \cap [0,1]$ is covered by countably many intervals of total length below any $\varepsilon$, and by no finite family of total length below $1$ ([[cex-null-set-not-of-content-zero]]).
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

### `lem-subset-of-countable`

````markdown
---
id: lem-subset-of-countable
kind: lemma
title: "Every subset of an at most countable set is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, thm-recursion, thm-strong-induction, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-nat-transitive-irreflexive, lem-nat-discrete, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "subsets of countable sets are countable"
proof_strategy: cases
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

## Facts & Assumptions

**Given:** An at most countable set $A$ and a subset $B \subseteq A$. Throughout, a natural number is the von Neumann natural, so that $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]); that $n = \{\, m \in \mathbb{N} : m < n \,\}$, and in particular that every element of a natural number is a natural number, is [[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]].

[L1] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, and at most countable when one of the two holds ([[def-countable]]).

[L2] $\approx$ is symmetric and transitive, an injection is a bijection onto its image, and the restriction of a bijection to a subset is a bijection onto the image of that subset ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Strong induction: if for every $n$ the truth of $P(m)$ for all $m < n$ implies $P(n)$, then $P(n)$ holds for every $n$ ([[thm-strong-induction]]).

[L5] Recursion: for any set $X$, any $x_0 \in X$ and any $F : X \to X$ there is a function $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Order facts in $\mathbb{N}$: $m \in n \iff m < n$, $m \le n \iff m \subseteq n$, $n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]); exactly one of $m < n$, $m = n$, $n < m$ holds, so $<$ is irreflexive and any two naturals are comparable ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), whence $<$ is transitive, because $m < n < p$ gives $m \le p$ while $m = p$ would force $m = n$ by antisymmetry; $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L7] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L8] Membership is irreflexive on $\mathbb{N}$: $k \notin k$ for every $k \in \mathbb{N}$, and every natural number is a transitive set ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** cases.

1.1 Since $A$ is at most countable there is a bijection $\varphi : A \to N_0$ where $N_0 = n$ for some $n \in \mathbb{N}$ or $N_0 = \mathbb{N}$; in either case $N_0 \subseteq \mathbb{N}$, and restricting $\varphi$ to $B$ gives a bijection of $B$ onto $S := \varphi[B] \subseteq \mathbb{N}$, so $B \approx S$. It therefore suffices to prove that every subset of $\mathbb{N}$ is at most countable, since then $S \approx n'$ or $S \approx \mathbb{N}$ and transitivity carries the conclusion back to $B$. [given, L1, L2, L6, suffices: every subset of N is at most countable]

1.2 Every subset of a natural number is finite: by strong induction on $n$, assume every subset of every $m < n$ is finite. If $n = 0$ then a subset $T \subseteq 0 = \varnothing$ is empty and $T \approx 0$. Otherwise $n = \sigma(m)$ by [L7], with $m < n$; given $T \subseteq \sigma(m) = m \cup \{m\}$, the set $T \setminus \{m\}$ is a subset of $m$, so the hypothesis at $m$ gives a bijection $u : T \setminus \{m\} \to k$ for some $k \in \mathbb{N}$. If $m \notin T$ then $T = T \setminus \{m\} \approx k$. If $m \in T$, extend $u$ by $u(m) := k$; since $k \notin k$ by irreflexivity of membership, the value $k$ is not already taken and the extension is a bijection $T \to k \cup \{k\} = \sigma(k)$. In both cases $T$ is finite, so the claim holds for $n$ and hence for all $n$. [L1, L2, L4, L6, L7, L8]

1.3 Case $S$ bounded: assume there is $b_0 \in \mathbb{N}$ with $s \le b_0$ for every $s \in S$. Then $s < \sigma(b_0)$ for every $s \in S$ by [L6], that is, $S \subseteq \sigma(b_0)$. [assume-case bounded, L6]

1.4 Case $S$ unbounded: assume that for every $b \in \mathbb{N}$ there is $s \in S$ with $b < s$. Then $S \ne \varnothing$, and for each $s \in S$ the set $\{\, t \in S : s < t \,\}$ is nonempty, so [L3] makes $\nu(s) := \min \{\, t \in S : s < t \,\}$ a well-defined element of $S$ with $s < \nu(s)$; this defines a function $\nu : S \to S$ with no arbitrary choices. [assume-case unbounded, L3, construct]

2.1 In the bounded case $S$ is a subset of the natural number $\sigma(b_0)$, hence finite by step 1.2, hence at most countable. [step 1.2, step 1.3, L1]

2.2 In the unbounded case apply [L5] with $X = S$, $x_0 = \min S$ (available by [L3] since $S \ne \varnothing$) and $F = \nu$: there is $e : \mathbb{N} \to S$ with $e(0) = \min S$ and $e(\sigma(n)) = \nu(e(n)) = \min \{\, t \in S : e(n) < t \,\}$ for every $n$. [step 1.4, L3, L5, construct]

3.1 For every $n$, $e(n) < e(\sigma(n))$ by the defining property of $\nu$; consequently $m < n$ implies $e(m) < e(n)$, by strong induction on $n$ (for $n = \sigma(j)$ and $m < n$ one has $m \le j$ by [L6], so either $m = j$, giving $e(m) < e(\sigma(j))$ directly, or $m < j$, giving $e(m) < e(j) < e(\sigma(j))$ by the hypothesis at $j$ and transitivity). Hence $e$ is injective: if $m \ne n$ then $m < n$ or $n < m$ by comparability, and irreflexivity forbids $e(m) = e(n)$. [step 2.2, L4, L6, L7]

3.2 For every $k$, $k \le e(k)$: again by strong induction, at $k = 0$ this is immediate, and for $k = \sigma(j)$ the hypothesis at $j$ gives $j \le e(j) < e(\sigma(j))$, so $j < e(k)$ and therefore $\sigma(j) \le e(k)$ by [L6], that is $k \le e(k)$. [step 2.2, L4, L6, L7]

4.1 $e$ is surjective onto $S$: let $t \in S$. The set $K = \{\, k \in \mathbb{N} : t \le e(k) \,\}$ contains $t$ by step 3.2, so $k^\ast := \min K$ exists by [L3]. If $k^\ast = 0$ then $e(0) = \min S \le t$ because $t \in S$, and $t \le e(0)$, so $e(0) = t$. Otherwise $k^\ast = \sigma(j)$ by [L7], and $j \notin K$ by minimality, so $e(j) < t$; then $t$ belongs to $\{\, u \in S : e(j) < u \,\}$, whence $e(k^\ast) = \min \{\, u \in S : e(j) < u \,\} \le t$, and with $t \le e(k^\ast)$ this gives $e(k^\ast) = t$. In both cases $t$ is a value of $e$. [step 2.2, step 3.2, L3, L6, L7]

5.1 In the unbounded case $e : \mathbb{N} \to S$ is therefore a bijection, so $S \approx \mathbb{N}$ and $S$ is countably infinite, hence at most countable. [step 3.1, step 4.1, L1, L2]

6.1 Every $S \subseteq \mathbb{N}$ is either bounded above or not, so steps 2.1 and 5.1 cover all cases and every subset of $\mathbb{N}$ is at most countable; by the reduction of step 1.1 the subset $B$ of the at most countable set $A$ is at most countable. [step 1.1, step 2.1, step 5.1, cases-exhaustive, L1, L2] ∎

## Remarks

- A subset of a countably infinite set may perfectly well be finite: $\{0, 1\}$ and $\varnothing$ are subsets of $\mathbb{N}$. This is exactly why the conclusion is "at most countable" and not "countably infinite", and it is why the library's convention that "countable" means "at most countable" ([[def-countable]]) keeps the statement free of case distinctions.

- The dichotomy proved here, bounded subsets of $\mathbb{N}$ are finite and unbounded ones are copies of $\mathbb{N}$, is the only structural fact about $\mathbb{N}$ the rest of the page needs. The enumeration $e$ built in the unbounded case is the increasing one, and it is unique with that property.

- The bounded case rests on the von Neumann encoding: "bounded by $b_0$" is literally "a subset of the set $\sigma(b_0)$", which is what makes the induction of step 1.2 an induction on a natural number rather than on an informal count. That translation is not a convention but a theorem, [[lem-nat-order-is-membership]], since the library's order on $\mathbb{N}$ is defined additively ([[def-nat-order]]) and not by membership.
````

### `thm-cantor-set-properties`

````markdown
---
id: thm-cantor-set-properties
kind: theorem
title: "The Cantor set is compact, perfect, uncountable, nowhere dense and of measure zero, and it contains no interval of positive length, so its only nonempty connected subsets are single points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, thm-cantor-set-ternary-description, thm-heine-borel-characterisation-r, def-open-cover-r, def-perfect-set-r, thm-perfect-set-uncountable-r, def-nowhere-dense-meager, def-measure-zero-and-content-zero, lem-content-zero-implies-null, lem-nondegenerate-interval-is-not-null, def-connected-r, thm-connected-subsets-of-r-are-intervals, thm-open-set-algebra-r, def-countable, def-interval, def-integer-power, lem-power-laws, def-open-and-closed-in-r, def-limit-point-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-series-linearity, def-series, lem-geometric-sequence-null, def-real-limit, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$C$ compact, perfect, uncountable, null"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set ([[def-cantor-set]]). Then:

1. $C$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);
2. $C$ has content zero, and therefore measure zero
   ([[def-measure-zero-and-content-zero]]);
3. $C$ is perfect ([[def-perfect-set-r]]);
4. $C$ is uncountable ([[def-countable]]);
5. $C$ contains no interval with two distinct endpoints, and is nowhere dense
   ([[def-nowhere-dense-meager]]);
6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single
   point.

Claim 6 is what the phrase "totally disconnected" names elsewhere; that phrase
is **not** used here, because no definition of total disconnectedness exists at
this point in the reading order. What is proved is exactly the displayed
statement, and it is obtained from claim 5 through
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], and the map $\Phi$ and the set $D$ of $\{0,2\}$-valued sequences of [[thm-cantor-set-ternary-description]].

[L1] $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n \subseteq C_m$ for every $m$, every $C_n \subseteq [0,1]$, $0 \in C$, and $3^{-n} = (3^{-1})^n$ ([[def-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\Phi$ is a bijection from $D$ onto $C$, $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and convergent series add and scale termwise ([[thm-cantor-set-ternary-description]], [[lem-series-linearity]], [[def-series]]).

[L3] $[c,d]$ is a closed set and a bounded interval, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$, and every open set contains a neighbourhood of each of its points ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Finite unions of closed sets are closed, and an intersection of a nonempty family of closed sets is closed ([[thm-open-set-algebra-r]]).

[L5] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Content zero and measure zero as in [[def-measure-zero-and-content-zero]]; a set of content zero is null ([[lem-content-zero-implies-null]]); no null set contains an interval $[u,v]$ with $u < v$ ([[lem-nondegenerate-interval-is-not-null]]).

[L7] $P$ is perfect when it is closed and no point of it is isolated in it ([[def-perfect-set-r]], [[def-limit-point-r]]); every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]], [[def-countable]]).

[L8] A set is nowhere dense exactly when the interior of its closure is empty, and a closed set equals its closure ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L10] $|r|^k \to 0$ for $|r| < 1$ ([[lem-geometric-sequence-null]]); convergence to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]]); $|z| \ge 0$, $|z| = z$ for $z \ge 0$, and $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L11] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); finite sums split, scale and are monotone in their terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L12] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $3^{-1} > 0$ and $0 < 2 \cdot 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$C$ is compact, claim 1.** First, for $\lambda \ne 0$ and $c \in \mathbb{R}$ the set $\lambda S + c := \{\lambda s + c : s \in S\}$ is closed whenever $S$ is: if $x \notin \lambda S + c$ then $(x - c)\lambda^{-1} \notin S$, so by [L3] there is a real $\eta > 0$ with $N_\eta((x-c)\lambda^{-1}) \cap S = \varnothing$, and every $z$ with $|z - x| < |\lambda|\eta$ satisfies $|(z-c)\lambda^{-1} - (x-c)\lambda^{-1}| = |z-x| \cdot |\lambda|^{-1} < \eta$ by [L10] and [L12], hence $(z-c)\lambda^{-1} \notin S$ and $z \notin \lambda S + c$. Now every $C_n$ is closed, by induction on $n$ ([L11]): $C_0 = [0,1]$ is closed by [L3], and $C_{n+1}$ is the union of the two closed sets $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$, hence closed by [L4]. So $C = \bigcap_n C_n$ is closed by [L4], and $C \subseteq [0,1]$ is bounded by [L1] and [L3]; by [L5] it is compact. [L1, L3, L4, L5, L10, L11, L12]

1.2 **$C$ has content zero and measure zero, claim 2.** By induction on $n$ ([L11]) the following holds for every $n$: there are $m \in \mathbb{N}$ and reals $u_0 \le v_0, \dots, u_m \le v_m$ with $C_n \subseteq \bigcup_{j \le m}[u_j,v_j]$ and $\sum_{j \le m}(v_j - u_j) = (2 \cdot 3^{-1})^{n}$. At $n = 0$ take the single interval $[0,1]$, of total length $1 = (2 \cdot 3^{-1})^0$ by [L1]. Given such a list at $n$, define $2m + 2$ intervals by $[u_j 3^{-1},\, v_j 3^{-1}]$ for $j \le m$ and $[2 \cdot 3^{-1} + u_{j-m-1}3^{-1},\, 2 \cdot 3^{-1} + v_{j-m-1}3^{-1}]$ for $m < j \le 2m+1$; they cover $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$ respectively, hence cover $C_{n+1}$, and their total length is $3^{-1}(2 \cdot 3^{-1})^{n} + 3^{-1}(2 \cdot 3^{-1})^{n} = (2 \cdot 3^{-1})^{n+1}$ by [L11] and [L12]. Since $0 < 2 \cdot 3^{-1} < 1$ by [L12], [L10] gives, for every real $\varepsilon > 0$, an $n$ with $(2 \cdot 3^{-1})^{n} \le \varepsilon$; as $C \subseteq C_n$ by [L1], the corresponding finite list covers $C$ with total length at most $\varepsilon$. So $C$ has content zero by [L6], and hence measure zero by [L6]. [L1, L6, L10, L11, L12]

2.1 **$C$ is perfect, claim 3.** $C$ is closed by step 1.1. Let $x \in C$ and let the real $\varepsilon > 0$ be given. By [L2] write $x = \Phi(a)$ with $a \in D$. By [L10] and [L12] fix $k \in \mathbb{N}$ with $2 \cdot 3^{-k-1} < \varepsilon$, and define $b \in D$ by $b_j := a_j$ for $j \ne k$ and $b_k := 2 - a_k$, so $b_k \in \{0,2\}$ and $b \ne a$. Then $\Phi(b) \in C$ and $\Phi(b) \ne \Phi(a)$ by [L2], while $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1} = (b_k - a_k)3^{-k-1}$ by [L2], all other terms being $0$, so $|\Phi(b) - x| = 2 \cdot 3^{-k-1} < \varepsilon$ by [L10]. Thus $N_\varepsilon(x)$ contains a point of $C$ other than $x$, for every $\varepsilon$, so $x$ is not isolated in $C$; by [L7] $C$ is perfect. [step 1.1, L2, L7, L10, L12]

2.2 **$C$ contains no nondegenerate interval and is nowhere dense, claim 5.** By step 1.2 the set $C$ is null, so by [L6] it contains no $[u,v]$ with $u < v$; in particular it contains no interval of any of the four bounded forms with distinct endpoints, since such an interval contains a closed one with distinct endpoints by [L6] and [L12]. Its interior is therefore empty: if $N_\varepsilon(x) \subseteq C$ for some real $\varepsilon > 0$, then $[x - \varepsilon \cdot 2^{-1},\, x + \varepsilon \cdot 2^{-1}] \subseteq N_\varepsilon(x) \subseteq C$ by [L3] and [L12], an interval with distinct endpoints. Since $C$ is closed by step 1.1, it equals its closure, so [L8] gives that $C$ is nowhere dense. [step 1.1, step 1.2, L3, L6, L8, L12]

3.1 **$C$ is uncountable, claim 4.** $C$ is nonempty, since $0 \in C$ by [L1], and perfect by step 2.1, so [L7] applies. [step 2.1, L1, L7]

3.2 **Connected subsets, claim 6.** Let $E \subseteq C$ be connected and nonempty. By [L9] $E$ is order-convex, so if $u, v \in E$ with $u < v$ then $[u,v] \subseteq E \subseteq C$, contradicting step 2.2. Hence no two distinct elements of $E$ exist, and $E$, being nonempty, is a single point. [step 2.2, L9, L12]

4.1 Claims 1 to 6 are steps 1.1, 1.2, 2.1, 3.1, 2.2 and 3.2 respectively, so all six hold. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Two independent proofs of uncountability.** The route above is [[thm-perfect-set-uncountable-r]] applied to a nonempty perfect set. The other is claim 3 of [[thm-cantor-set-ternary-description]]: $C$ is in bijection with $\{0,1\}^{\mathbb{N}}$, which is in bijection with the power set of $\mathbb{N}$, uncountable by [[thm-cantor-powerset]]. The two arguments share nothing, and the second is the one that makes the *size* of $C$ evident: $C$ is in bijection with the power set of $\mathbb{N}$, while having content zero. **It is deliberately not said here that $C$ has as many points as $\mathbb{R}$.** That would require a bijection between $\mathbb{R}$ and the power set of $\mathbb{N}$, and no such bijection is constructed anywhere at this point in the reading order; the two uncountability results available here are separate facts, one proved by the diagonal argument on power sets and one by nested intervals.

- **Claim 2 and claim 4 together are the point of the whole construction.** A set of measure zero may be uncountable, so nullity is not a cardinality condition; and a nowhere dense set need not be null, so it is not a category condition either ([[fs-nowhere-dense-implies-measure-zero]], [[thm-fat-cantor-set-has-positive-measure]]).

- **Why claim 5 is proved through measure and not by inspection.** The intervals making up $C_n$ have length $3^{-n}$, and one can see directly that a long interval cannot fit inside $C$. Doing that rigorously means keeping track of the $2^n$ component intervals of $C_n$ and their gaps; going through [[lem-nondegenerate-interval-is-not-null]] uses the estimate already made in step 1.2 and needs no such bookkeeping.

- **Every point of $C$ is a limit of other points of $C$, and the witnesses are explicit**: change one ternary digit far out, as step 2.1 does. This is also what shows $C$ has no isolated points without any appeal to the structure of its complement.
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

### `thm-compact-null-is-content-zero`

````markdown
---
id: thm-compact-null-is-content-zero
kind: theorem
title: "For a compact subset of $\\mathbb{R}$, measure zero and content zero coincide"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-interval, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "compact: null $\\Leftrightarrow$ content zero"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]), equivalently
closed and bounded ([[thm-heine-borel-characterisation-r]]). Then

$$K \text{ has measure zero} \quad \Longleftrightarrow \quad K \text{ has content zero}$$

([[def-measure-zero-and-content-zero]]).

The implication from content zero to measure zero is
[[lem-content-zero-implies-null]] and needs no hypothesis on $K$. The other
direction is the one that uses compactness, and it uses it exactly as
[[lem-nondegenerate-interval-is-not-null]] does: a countable cover is enlarged to
an open cover at an arbitrarily small cost in total length, and compactness
reduces the open cover to a finite one.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \eta$ for every $i$; $A$ has content zero when the same holds with a finite list ([[def-measure-zero-and-content-zero]]).

[L2] A set of content zero is null ([[lem-content-zero-implies-null]]).

[L3] $[c,d]$ has length $d - c \ge 0$ for $c \le d$; $(c,d)$ is the open interval with the same endpoints and is contained in $[c,d]$ ([[def-interval]]).

[L4] Every open interval is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L5] $K$ is compact: from every family of open sets whose union contains $K$, either $K = \varnothing$ and the empty subfamily covers it, or there are $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family whose union contains $K$; compactness is equivalent to being closed and bounded ([[def-open-cover-r]], [[thm-heine-borel-characterisation-r]]).

[L6] Powers and the geometric series: $\theta^0 = 1$, $\theta^{k+1} = \theta^k\theta$, $\theta^k > 0$, and $\sum_{k=0}^{\infty}\theta^k = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling, splitting and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$, $8 > 0$ and $t \cdot 8^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 One direction is immediate: if $K$ has content zero then $K$ is null by [L2], with no hypothesis on $K$ used. It remains to prove the converse for compact $K$. [L2, suffices: only the forward direction remains]

1.2 If $K = \varnothing$, then for every real $\varepsilon > 0$ the single interval $[0,0]$ covers $K$ and has total length $0 \le \varepsilon$, so $K$ has content zero by [L1]. Hence suppose $K \ne \varnothing$ for the rest of the proof. [L1, cases]

2.1 Assume $K$ is null and let the real $\varepsilon > 0$ be given. By [L1] applied with $\eta := \varepsilon \cdot 2^{-1} > 0$ fix sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $K \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon \cdot 2^{-1}$ for every $i \in \mathbb{N}$. [step 1.1, given, L1, L9, choose]

3.1 Put $\delta_k := \varepsilon \cdot 8^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$, an open set by [L4] containing $[a_k,b_k]$ by [L3] and [L9]. Hence $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $K$, and the closed interval $[a_k - \delta_k,\ b_k + \delta_k]$ has length $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 4^{-1} \cdot \theta^{k}$ by [L3] and [L9]. [step 2.1, L3, L4, L6, L9]

4.1 By [L5] there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of that family covering $K$, and by [L8] there is $N \in \mathbb{N}$ with $k_t \le N$ for every $t \le m$; then $K \subseteq \bigcup_{k \le N} J_k \subseteq \bigcup_{k \le N}[a_k - \delta_k,\ b_k + \delta_k]$ by [L3]. [step 1.2, step 3.1, L3, L5, L8, choose]

5.1 The total length of that finite list is $\sum_{k \le N}\big((b_k - a_k) + \varepsilon \cdot 4^{-1}\theta^{k}\big) = \sum_{k<N+1}(b_k - a_k) + \varepsilon \cdot 4^{-1}\sum_{k<N+1}\theta^{k} \le \varepsilon \cdot 2^{-1} + \varepsilon \cdot 4^{-1} \cdot 2 = \varepsilon$, by [L7], step 2.1, [L6] and [L9]. [step 2.1, step 3.1, step 4.1, L6, L7, L9]

6.1 So for every real $\varepsilon > 0$ the finite list of step 4.1 covers $K$ with total length at most $\varepsilon$, which by [L1] is exactly the statement that $K$ has content zero; together with step 1.1 the two notions coincide on compact sets. [step 1.1, step 1.2, step 4.1, step 5.1, L1] ∎

## Remarks

- **Compactness, not boundedness, is what does the work.** $\mathbb{Q} \cap [0,1]$ is bounded and null and does not have content zero ([[cex-null-set-not-of-content-zero]]); it fails to be closed, and the finite subcover step is exactly what it cannot supply.

- **The theorem is what makes content zero usable at all.** Every set to which content zero is applied on this page is compact: the Cantor set ([[thm-cantor-set-properties]]) and the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]) are both closed and bounded, so for them the two notions may be used interchangeably, and the finite form is the one that combines with [[lem-finite-interval-cover-total-length]].

- **The cost of opening up the cover is $\varepsilon \cdot 2^{-1}$, chosen in advance.** Splitting the budget in half before the enlargement, rather than after, is what keeps the final total at $\varepsilon$ exactly; the same bookkeeping appears in [[lem-nondegenerate-interval-is-not-null]] and in [[thm-countable-union-of-null-is-null]].
````

### `thm-open-set-algebra-r`

````markdown
---
id: thm-open-set-algebra-r
kind: theorem
title: "Arbitrary unions and finite intersections of open subsets of $\\mathbb{R}$ are open, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-open-and-closed-in-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-interval, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-intersection-of-shrinking-intervals-not-open]
aliases: []
landmark: true
short: "the algebra of open and closed sets"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let open and closed subsets of $\mathbb{R}$ be as in
[[def-open-and-closed-in-r]].

1. **Arbitrary unions of open sets are open.** If $\mathcal{U}$ is any family of
   open subsets of $\mathbb{R}$, then $\bigcup \mathcal{U}$ is open.
2. **Finite intersections of open sets are open.** If $n \in \mathbb{N}$ and
   $U_0, \dots, U_n$ are open, then $U_0 \cap \dots \cap U_n$ is open.
3. **Arbitrary intersections of closed sets are closed.** If $\mathcal{F}$ is a
   nonempty family of closed subsets of $\mathbb{R}$, then
   $\bigcap \mathcal{F}$ is closed.
4. **Finite unions of closed sets are closed.** If $n \in \mathbb{N}$ and
   $F_0, \dots, F_n$ are closed, then $F_0 \cup \dots \cup F_n$ is closed.

The word *finite* in claims 2 and 4 is not decoration: an arbitrary
intersection of open sets need not be open, and dually an arbitrary union
of closed sets need not be closed; the remarks below say where that is settled.
Claim 3 asks $\mathcal{F}$ to be nonempty
only so that $\bigcap \mathcal{F}$ is a subset of $\mathbb{R}$ without appeal to
a convention about the empty intersection.

## Facts & Assumptions

**Given:** A family $\mathcal{U}$ of open subsets of $\mathbb{R}$, with $\bigcup \mathcal{U} = \{\, x \in \mathbb{R} : x \in U \text{ for some } U \in \mathcal{U} \,\}$; a natural number $n$ and open sets $U_0, \dots, U_n$; a nonempty family $\mathcal{F}$ of closed subsets of $\mathbb{R}$, with $\bigcap \mathcal{F} = \{\, x \in \mathbb{R} : x \in F \text{ for every } F \in \mathcal{F} \,\}$; and closed sets $F_0, \dots, F_n$.

[A1] De Morgan's laws in the ambient set theory: for a nonempty family $\mathcal{G}$ of subsets of $\mathbb{R}$, $\mathbb{R} \setminus \bigcap \mathcal{G} = \bigcup \{\, \mathbb{R} \setminus G : G \in \mathcal{G} \,\}$, and $\mathbb{R} \setminus (G_0 \cup \dots \cup G_n) = (\mathbb{R} \setminus G_0) \cap \dots \cap (\mathbb{R} \setminus G_n)$. Also $\mathbb{R} \setminus (\mathbb{R} \setminus G) = G$.

[L1] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$, and $0 < \delta \le \varepsilon$ gives $N_\delta(x) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] Every nonempty finite set of reals has a minimum, so $\min\{\varepsilon, \eta\}$ is defined and equals one of the two entries, and is $\le$ both ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Let $x \in \bigcup \mathcal{U}$. Then $x \in U$ for some $U \in \mathcal{U}$, and $U$ is open, so there is $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U \subseteq \bigcup \mathcal{U}$; as $x$ was arbitrary, $\bigcup \mathcal{U}$ is open, which is claim 1. [given, L1, choose]

1.2 Now let $U$ and $V$ be open and let $x \in U \cap V$; fix $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ and $\eta > 0$ with $N_\eta(x) \subseteq V$. [given, L1, choose]

2.1 Put $\delta := \min\{\varepsilon, \eta\}$, which is one of $\varepsilon, \eta$ and hence $> 0$, and satisfies $\delta \le \varepsilon$ and $\delta \le \eta$; then $N_\delta(x) \subseteq N_\varepsilon(x) \subseteq U$ and $N_\delta(x) \subseteq N_\eta(x) \subseteq V$, so $N_\delta(x) \subseteq U \cap V$, and as $x$ was arbitrary $U \cap V$ is open. [step 1.2, L2, L3]

2.2 The family $\{\, \mathbb{R} \setminus F : F \in \mathcal{F} \,\}$ consists of open sets by [L1], so its union is open by step 1.1; that union is $\mathbb{R} \setminus \bigcap \mathcal{F}$ by [A1], so $\bigcap \mathcal{F}$ is closed, which is claim 3. [step 1.1, A1, L1]

3.1 Claim 2 now follows by induction on $n$: for $n = 0$ the intersection is $U_0$, which is open by hypothesis; and if $W := U_0 \cap \dots \cap U_n$ is open then $U_0 \cap \dots \cap U_{n+1} = W \cap U_{n+1}$ is an intersection of two open sets, hence open by step 2.1. [step 2.1, given]

4.1 Each $\mathbb{R} \setminus F_i$ is open by [L1], so $(\mathbb{R} \setminus F_0) \cap \dots \cap (\mathbb{R} \setminus F_n)$ is open by step 3.1; that set is $\mathbb{R} \setminus (F_0 \cup \dots \cup F_n)$ by [A1], so $F_0 \cup \dots \cup F_n$ is closed, which is claim 4. [step 3.1, A1, L1]

5.1 Claims 1, 2, 3 and 4 are steps 1.1, 3.1, 2.2 and 4.1 respectively, so arbitrary unions and finite intersections of open sets are open, and arbitrary intersections and finite unions of closed sets are closed. [step 1.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Completeness plays no part.** Nothing above uses the least-upper-bound
  property, or even the Archimedean property: the only facts about $\mathbb{R}$
  the proof touches are the definition of a neighbourhood, its monotonicity in
  the radius, and the comparison of two positive radii. What needs completeness
  is not the algebra of open sets but the theorems about compactness that come
  later.

- **Why finiteness cannot be dropped in claim 2.** The minimum taken in step 2.1
  is a minimum of finitely many positive radii, and it is positive precisely
  because it is one of them ([[lem-finite-set-has-max]]). An infinite family of
  positive radii has an infimum that may be $0$, and then no positive $\delta$
  survives. That is exactly what happens for the shrinking intervals of
  [[fs-arbitrary-intersection-of-open-is-open]], whose named witness is
  [[cex-intersection-of-shrinking-intervals-not-open]].

- **The four claims are a rewriting of two.** Claims 3 and 4 are claims 1 and 2
  read through complementation, and closedness is *defined* by complementation
  ([[def-open-and-closed-in-r]]), so no separate argument about closed sets is
  possible or needed.
````

### `thm-rationals-countable`

````markdown
---
id: thm-rationals-countable
kind: theorem
title: "$\\mathbb{Q}$ is countably infinite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, thm-product-of-countable, def-rationals, lem-rat-positive-denominator, def-countable, lem-subset-of-countable, def-integers, lem-countable-iff-surjection-from-n, thm-schroder-bernstein, def-equinumerous, def-injection-surjection-bijection, lem-nat-embeds-int, lem-int-embeds-rat, def-int-order, thm-int-ordered-ring, thm-omega-is-peano-system, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{Q}\\approx\\mathbb{N}$"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

## Facts & Assumptions

**Given:** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ with quotient map $(a,b) \mapsto [(a,b)]$ ([[def-integers]]), and $\mathbb{Q}$ the set of classes $[(a,b)]$ of pairs of integers with $b \ne 0$ ([[def-rationals]]). Write $\mathbb{Z}_{>0} = \{\, b \in \mathbb{Z} : b > 0 \,\}$ ([[def-int-order]]).

[L1] Finite, countably infinite, at most countable, uncountable ([[def-countable]]).

[L2] Bijections, injections, surjections, composition; $\approx$ and $\preceq$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] A nonempty $X$ is at most countable iff there is a surjection $\mathbb{N} \to X$; and from such a surjection $s$ the map $x \mapsto \min\{\, k : s(k) = x \,\}$ is an injection $X \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] A product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L6] Every rational is $[(a,b)]$ for some integers $a$ and $b$ with $b > 0$ ([[lem-rat-positive-denominator]]).

[L7] $\mathbb{N}$ embeds injectively in $\mathbb{Z}$ by $n \mapsto [(n,0)]$ ([[lem-nat-embeds-int]]) and $\mathbb{Z}$ embeds injectively in $\mathbb{Q}$ by $k \mapsto [(k,1)]$ ([[lem-int-embeds-rat]]).

[L8] $\preceq$ in both directions gives $\approx$ ([[thm-schroder-bernstein]]).

[L9] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$ compatible with the ring structure ([[thm-int-ordered-ring]]), and $\mathbb{Z}_{>0} \ne \varnothing$: on representatives $0 < [(a,b)]$ holds exactly when $b < a$ in $\mathbb{N}$ ([[def-int-order]]), and $0 < 1$ in $\mathbb{N}$, since $1 = \sigma(0) \ne 0$ ([[thm-omega-is-peano-system]]) while $0 < n$ for every nonzero natural $n$ (claim 4 of [[lem-nat-order-is-membership]]); so the integer $[(1,0)]$ is positive.

## Proof

**Proof technique:** direct.

1.1 The quotient map $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{Z}$, $\pi(a,b) = [(a,b)]$, is surjective, since every integer is by definition such a class; hence $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, and $\mathbb{Z} \ne \varnothing$, so $\mathbb{Z}$ is at most countable by [L3]. [given, L2, L3, L4]

1.2 The composite $\iota : \mathbb{N} \to \mathbb{Q}$, $n \mapsto [([(n,0)],1)]$, of the two embeddings of [L7] is injective, so $\mathbb{N} \preceq \mathbb{Q}$. [L2, L7]

2.1 $\mathbb{Z}_{>0}$ is a subset of $\mathbb{Z}$, hence at most countable by [L5], and it is nonempty by [L9]; therefore $\mathbb{Z} \times \mathbb{Z}_{>0}$ is at most countable by [L5] and nonempty, so [L3] provides a surjection $u : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}_{>0}$. [step 1.1, L3, L5, L9]

3.1 The map $\rho : \mathbb{Z} \times \mathbb{Z}_{>0} \to \mathbb{Q}$, $\rho(a,b) = [(a,b)]$, is well defined because $b > 0$ gives $b \ne 0$, and it is surjective by [L6]; hence $\rho \circ u : \mathbb{N} \to \mathbb{Q}$ is a surjection, $\mathbb{Q}$ is at most countable, and [L3] turns that surjection into an injection $j : \mathbb{Q} \to \mathbb{N}$, so $\mathbb{Q} \preceq \mathbb{N}$. [step 2.1, given, L2, L3, L6]

4.1 From $\mathbb{N} \preceq \mathbb{Q}$ and $\mathbb{Q} \preceq \mathbb{N}$, the Schröder-Bernstein theorem [L8] yields a bijection $\mathbb{Q} \to \mathbb{N}$; hence $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite. [step 1.2, step 3.1, L1, L8] ∎

## Remarks

- **Why Schröder-Bernstein rather than a count.** The usual last line is "countable, and infinite because $\mathbb{N}$ injects into it". Turning that into a proof requires knowing that a set containing an injective copy of $\mathbb{N}$ is not finite, which is the pigeonhole principle, [[lem-pigeonhole]], proved earlier on this page. That route is now available, but it is a detour: [[thm-schroder-bernstein]] gets the bijection directly from the two injections already in hand, and it is choice free, so nothing is lost.

- **Lowest terms are not needed and are not available.** A frequent presentation injects $\mathbb{Q}$ into $\mathbb{Z} \times \mathbb{N}$ by sending each rational to its representative in lowest terms. That map needs greatest common divisors, which this library has not developed. Working with a surjection instead of an injection avoids the issue entirely: repetitions in an enumeration are harmless ([[lem-countable-iff-surjection-from-n]]).

- The proof shows in passing that $\mathbb{Z} \approx \mathbb{N}$, by the same two-injection argument applied to [L7] and step 1.1, and that $\mathbb{Q} \times \mathbb{Q}$, $\mathbb{Q}^3$ and so on are countable ([[thm-product-of-countable]]). The contrast with [[thm-r-uncountable]] is the point of the page: adding all limits of rational approximations to $\mathbb{Q}$ changes the size of the set, not merely its arithmetic.
````

