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

- critical risk (8): 6 declared dependencies; 3 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `cex-irrationals-are-not-f-sigma`

Normalized current SHA-256: `1221ee7b038126b968b4a6e169b0966e50c202bc7d91470367f2349b8bef3477`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-irrationals-are-not-f-sigma
kind: counterexample
title: "The irrationals form a residual $G_\\delta$ set that is not $F_\\sigma$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-q-is-g-delta, cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $\mathbb{Q}$ is a $G_\delta$ subset of $\mathbb{R}$
([[fs-q-is-g-delta]]); equivalently, by complementation
([[def-f-sigma-g-delta]]), the irrationals are $F_\sigma$.

The witness is the set $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ of
irrationals ([[lem-rat-embeds-dense]]). It **is** $G_\delta$, being
$\bigcap_n (\mathbb{R} \setminus \{e(n)\})$ for any enumeration $e$ of the
rationals, and it **is** residual, its complement being a countable union of
singletons; but it is **not** $F_\sigma$, and that is the failure of the refuted
claim. The refutation is carried out in full in
[[cor-q-is-meager-and-not-g-delta]]; this item records the witness and the three
properties that make it the right one.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$ and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[A1] The refuted claim: $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, equivalently $X$ is $F_\sigma$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, $X$ is $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2, 3).

[L2] $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $X$ is $G_\delta$ and residual, by claim 2 of [L1]. [L1]

1.2 $X$ is not $F_\sigma$: were it $F_\sigma$, its complement $\mathbb{Q}_{\mathbb{R}}$ would be $G_\delta$ by [L2], which claim 3 of [L1] forbids. [L1, L2]

2.1 So $X$ is a residual $G_\delta$ set that is not $F_\sigma$, and it witnesses the failure of [A1] in both of the equivalent formulations. [step 1.1, step 1.2, A1, L2] ∎

## Remarks

- **The asymmetry is real and is not a defect of the definitions.** The two classes $F_\sigma$ and $G_\delta$ are exchanged by complementation, but a *particular* set need not lie in both: $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and not $G_\delta$, and $X$ is $G_\delta$ and not $F_\sigma$. A set lying in both classes is a genuinely stronger condition, satisfied for instance by every open set and every closed set.

- **What forces it is the Baire category theorem**, through the fact that $\mathbb{R}$ is not meager ([[thm-baire-category-r]]) while $\mathbb{Q}_{\mathbb{R}}$ is. Both are dense; the rationals are countable and the irrationals are uncountable. No cardinality or density argument distinguishes them in the required way; the distinction is one of category.

- **$X$ is large in both senses.** It is residual, so it is large in category; and it is not null. For if it were, then, $\mathbb{Q}_{\mathbb{R}}$ being null ([[lem-countable-sets-are-null]]), one could interleave a cover of each with slack $\varepsilon \cdot 2^{-1}$ and obtain a cover of $\mathbb{Q}_{\mathbb{R}} \cup X = \mathbb{R}$ of total length at most $\varepsilon$, which [[lem-nondegenerate-interval-is-not-null]] forbids already for $[0,1]$. Interleaving two covers needs no choice principle, unlike the countably infinite case ([[thm-countable-union-of-null-is-null]]).
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-irrationals-are-not-f-sigma",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
  ],
  "rationale": "Zakon gives exactly that the rationals are not G-delta; complementation gives exactly that the irrationals are not F-sigma, while the same exercise records their residual G-delta form.",
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
      "source": "cor-q-is-meager-and-not-g-delta",
      "source_section": "Statement",
      "quote": "Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where [[thm-baire-category-r]] is spent: no argument from the algebra of open and closed sets alone can reach it, since $\\mathbb{Q}_{\\mathbb{R}}$ and $X$ are interchanged by complementation while $F_\\sigma$ and $G_\\delta$ are, so any such argument would prove the same thing about both sets and about neither.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-f-sigma-g-delta",
      "source_section": "Definition",
      "quote": "- $A$ is an **$F_\\sigma$ set** when there is a sequence $(F_n)_{n \\in \\mathbb{N}}$ of closed subsets of $\\mathbb{R}$ with $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} F_n .$$ - $A$ is a **$G_\\delta$ set** when there is a sequence $(V_n)_{n \\in \\mathbb{N}}$ of open subsets of $\\mathbb{R}$ with $$A \\;=\\; \\bigcap_{n \\in \\mathbb{N}} V_n .$$",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$X$ is $G_\\delta$ and residual, by claim 2 of [L1].",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$X$ is not $F_\\sigma$: were it $F_\\sigma$, its complement $\\mathbb{Q}_{\\mathbb{R}}$ would be $G_\\delta$ by [L2], which claim 3 of [L1] forbids.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So $X$ is a residual $G_\\delta$ set that is not $F_\\sigma$, and it witnesses the failure of [A1] in both of the equivalent formulations.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "A1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The refutation/example uses a fixed nonempty witness, not a variable set whose empty case could establish or defeat the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `cex-irrationals-are-not-f-sigma` has a zero boundary requiring a separate argument."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `cex-irrationals-are-not-f-sigma` has a one boundary requiring a separate argument."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The Statement of `cex-irrationals-are-not-f-sigma` has no coincident-point, singleton, or degenerate-interval case requiring a separate argument."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement of `cex-irrationals-are-not-f-sigma` has no interval endpoint or one-sided endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "Steps 1.1–2.1 use the fixed complement X=R\\Q and the preceding three exact claims; no selection is made."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cex-irrationals-are-not-f-sigma` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cex-irrationals-are-not-f-sigma` is not an equivalence, so it has no reverse iff direction."
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
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-q-is-g-delta",
    "declared_target": "fs-q-is-g-delta",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-q-is-meager-and-not-g-delta",
    "declared_target": "cor-q-is-meager-and-not-g-delta",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-f-sigma-g-delta",
    "declared_target": "def-f-sigma-g-delta",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-baire-category-r",
    "declared_target": "thm-baire-category-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
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
    "source": "cex-irrationals-are-not-f-sigma",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (9)

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
deps: [thm-baire-category-r, def-f-sigma-g-delta, def-nowhere-dense-meager, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-countable, def-equinumerous, def-injection-surjection-bijection, def-open-and-closed-in-r, def-neighbourhood-r, thm-n-cross-n-countable, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "$\\mathbb{Q}$ meager, not $G_\\delta$"
proof_strategy: contradiction
verification:
  precheck: pass
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

[L1] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]), $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]), and a composition of bijections is a bijection ([[def-injection-surjection-bijection]]); an at most countable family may be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]]).

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

- **Where the two halves of the argument part company.** Claim 1 is a listing argument and would work equally in $\mathbb{Q}$ or in any countable space; claim 3 uses the completeness of $\mathbb{R}$ through [[thm-nested-interval-property]], inside [[thm-baire-category-r]]. Indeed $\mathbb{Q}$ is a $G_\delta$ subset of itself, being the whole space, so no argument that ignores the ambient completeness can possibly give claim 3.

- **The irrationals are also uncountable** ([[cor-irrationals-uncountable]]), by a different and much cheaper argument that needs only the countability of $\mathbb{Q}$ and the uncountability of $\mathbb{R}$. Uncountability and being residual are independent properties: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable.

- **The named witness for claim 3** is [[cex-irrationals-are-not-f-sigma]], and the false statement it refutes is [[fs-q-is-g-delta]]; the refutation is carried out here.

- **Meagre and measure zero are not the same smallness.** $\mathbb{Q}_{\mathbb{R}}$ is both, but the two notions diverge as soon as one leaves the countable case: [[cex-meager-set-of-full-measure]] writes $\mathbb{R}$ as a meager set together with a set of measure zero, and the set of measure zero there is residual. So being residual, which is what claim 2 gives for $X$, carries no information at all about size in measure.
````

### `def-f-sigma-g-delta`

````markdown
---
id: def-f-sigma-g-delta
kind: definition
title: "$F_\\sigma$ and $G_\\delta$ subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-countable, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: false
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
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Borel set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Borel_set"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- $A$ is an **$F_\sigma$ set** when there is a sequence $(F_n)_{n \in \mathbb{N}}$
  of closed subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$
- $A$ is a **$G_\delta$ set** when there is a sequence $(V_n)_{n \in \mathbb{N}}$
  of open subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$

The letters are the traditional ones: $F$ for *fermé* with $\sigma$ for *somme*,
$G$ for *Gebiet* with $\delta$ for *Durchschnitt*.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ if and
only if $\mathbb{R} \setminus A$ is $G_\delta$. If $A = \bigcup_n F_n$ with each
$F_n$ closed, then $\mathbb{R} \setminus A = \bigcap_n (\mathbb{R} \setminus F_n)$
by De Morgan, and each $\mathbb{R} \setminus F_n$ is open by the definition of
closedness ([[def-open-and-closed-in-r]]); the converse is the same computation
read backwards, using that the complement of an open set is closed, which is
again [[def-open-and-closed-in-r]].

**Every closed set is $F_\sigma$ and every open set is $G_\delta$**, by the
constant sequence $F_n := A$, respectively $V_n := A$. As with
[[def-nowhere-dense-meager]], an at most countable family ([[def-countable]]) may
always be presented as a sequence: a finite list $F_0, \dots, F_m$ of closed sets
is extended by $F_n := F_m$ for $n > m$, and a finite list of open sets likewise,
so nothing is lost by indexing over $\mathbb{N}$.

## Remarks

- **The classes are genuinely larger than the closed and the open sets.**
  $\mathbb{Q}$ is $F_\sigma$ and is neither open nor closed, and the irrationals
  are $G_\delta$ and neither open nor closed; both computations are in
  [[cor-q-is-meager-and-not-g-delta]]. That $\mathbb{Q}$ is not also $G_\delta$
  is the first genuinely hard fact about these classes and needs the Baire
  category theorem ([[thm-baire-category-r]]).

- **Why the algebra of open sets is not enough.** [[thm-open-set-algebra-r]]
  gives that a *finite* intersection of open sets is open and a *finite* union of
  closed sets is closed. The definitions above are exactly what one gets by
  relaxing "finite" to "countable" once, and the point of the whole notion is
  that the relaxation is proper: a countable intersection of open sets need not
  be open, which is [[cex-intersection-of-shrinking-intervals-not-open]].

- **Nothing here is a measure-theoretic notion.** $F_\sigma$ and $G_\delta$ are
  defined from the topology of $\mathbb{R}$ alone and are used on this page to
  say precisely how far $\mathbb{Q}$ and its complement sit from being closed or
  open. They cut across [[def-measure-zero-and-content-zero]] completely:
  $\mathbb{Q}$ is $F_\sigma$ and has measure zero
  ([[lem-countable-sets-are-null]]), while the Smith-Volterra-Cantor set is
  closed, hence $F_\sigma$, and does not
  ([[thm-fat-cantor-set-has-positive-measure]]).
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

### `fs-q-is-g-delta`

````markdown
---
id: fs-q-is-g-delta
kind: false-statement
title: "FALSE: $\\mathbb{Q}$ is a $G_\\delta$ subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma]
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
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
pipeline_run: null
---

## Statement

**False claim:** $\mathbb{Q}$, that is the set $\mathbb{Q}_{\mathbb{R}}$ of
rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]), is a $G_\delta$ set
([[def-f-sigma-g-delta]]): there is a sequence $(V_n)$ of open subsets of
$\mathbb{R}$ with $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$.

The claim looks plausible by symmetry. $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$,
being a countable union of singletons; the irrationals are $G_\delta$, being a
countable intersection of complements of singletons; and the two classes are
exchanged by complementation. So one expects each set to belong to both classes.
It does not: the symmetry between the two *classes* says nothing about a single
set, and the obstruction is the Baire category theorem.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals.

[A1] The false claim: $\mathbb{Q}_{\mathbb{R}}$ is a $G_\delta$ subset of $\mathbb{R}$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, the irrationals are $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is **not** $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2 and 3).

[L2] $A$ is $G_\delta$ when it is the intersection of a sequence of open sets ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

[L3] A countable intersection of dense open subsets of $\mathbb{R}$ is dense; in particular it is nonempty ([[thm-baire-category-r]]).

## Refutation

**Proof technique:** direct.

1.1 By claim 3 of [L1], $\mathbb{Q}_{\mathbb{R}}$ is not a $G_\delta$ subset of $\mathbb{R}$, which is the direct negation of [A1]. [A1, L1, L2]

1.2 The reason, recorded here so that the refutation is not merely a pointer: were $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$ with each $V_n$ open, every $V_n$ would contain the dense set $\mathbb{Q}_{\mathbb{R}}$ and so be dense; adjoining the dense open sets $\mathbb{R} \setminus \{q\}$, one for each rational $q$, would produce an at most countable family of dense open sets whose intersection is $\mathbb{Q}_{\mathbb{R}}$ minus every rational, that is $\varnothing$, contradicting [L3]. [L1, L2, L3]

2.1 So [A1] is false, and the refutation is carried out in full in [L1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **What is true about $\mathbb{Q}$.** It is $F_\sigma$, meager, of measure zero,
  dense, and countable. What fails is only the $G_\delta$ property, and its
  failure is a genuine theorem about $\mathbb{R}$, resting on completeness through
  [[thm-nested-interval-property]] inside [[thm-baire-category-r]]. Inside
  $\mathbb{Q}$ itself the corresponding claim is true and trivial, $\mathbb{Q}$
  being the whole space there.

- **The dual false statement is not recorded separately**, because it is the same
  statement: the irrationals fail to be $F_\sigma$ exactly because
  $\mathbb{Q}_{\mathbb{R}}$ fails to be $G_\delta$
  ([[def-f-sigma-g-delta]]). The witness is
  [[cex-irrationals-are-not-f-sigma]].

- **Context, not a result of this library.** In classical analysis the set of
  points at which a real function is continuous is always $G_\delta$, and it is
  the false statement above that then rules out a function continuous at every
  rational and at no irrational. That classical result is not proved here, and
  continuity is not available at this point in the reading order; the connection
  is recorded as orientation and nothing on this page depends on it.
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

### `thm-baire-category-r`

````markdown
---
id: thm-baire-category-r
kind: theorem
title: "Baire category in $\\mathbb{R}$, by nested intervals with canonically chosen rational endpoints: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nowhere-dense-meager, thm-nested-interval-property, def-interval, def-open-and-closed-in-r, def-limit-point-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
forward_refs: [ex-baire-reproves-r-uncountable, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable intersection of dense open sets is dense"
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
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22) and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Let $(U_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each
open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then

$$\bigcap_{n \in \mathbb{N}} U_n \quad \text{is dense in } \mathbb{R}.$$

Consequently, if $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense
subsets of $\mathbb{R}$ ([[def-nowhere-dense-meager]]), then
$\bigcup_{n \in \mathbb{N}} A_n \ne \mathbb{R}$: no meager subset of
$\mathbb{R}$ exhausts $\mathbb{R}$, so $\mathbb{R}$ is of the second category in
itself.

**The selection is canonical, and the proof spends no choice principle.** The
textbook argument picks a nested interval at every stage in terms of the one
before it, which is the axiom of dependent choice ([[def-dependent-choice]]). The construction below
instead fixes one enumeration $e$ of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval whose two
rational endpoints have **least index** among those meeting the requirements.
The requirements are met by some rational-endpoint interval, which is what the
refinement claim of the proof establishes, and the least such index is
determined by [[thm-well-ordering-principle]]; so the whole recursion is a
single application of [[thm-recursion]] to one total map. This is the device of
[[thm-perfect-set-uncountable-r]], transplanted from perfect sets to dense open
sets. What it does **not** settle is the strength of the theorem for general
complete metric spaces, which is recorded separately in
[[rem-baire-in-r-is-choice-free]].

## Facts & Assumptions

**Given:** A sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $\mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$, and $G$ denotes the set of good pairs.

[A1] Each $U_n$ is open and dense in $\mathbb{R}$.

[L1] $A \subseteq \mathbb{R}$ is dense when $\overline{A} = \mathbb{R}$, and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$; so $A$ is dense if and only if $N_\varepsilon(x) \cap A \ne \varnothing$ for every $x \in \mathbb{R}$ and every real $\varepsilon > 0$ ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L2] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; every open interval $(p,q)$ is an open set, and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] The intersection of two open subsets of $\mathbb{R}$ is open, and the complement of a closed set is open ([[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L7] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection $\bigcap_k I_k$ is nonempty ([[thm-nested-interval-property]]).

[L8] $A$ is nowhere dense exactly when $\mathbb{R} \setminus \overline{A}$ is dense; $\overline{A}$ is a closed set containing $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] An at most countable family may always be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]], [[def-nowhere-dense-meager]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in \mathbb{R}$ and a real $\varepsilon_0 > 0$; by [L1] it suffices to produce a point of $\bigcap_n U_n$ lying in $N_{\varepsilon_0}(x_0)$, since $x_0$ and $\varepsilon_0$ are then arbitrary. [given, L1, suffices: one point in each neighbourhood]

1.2 By [L4] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$, where $\iota(q) = \hat q$, so that $e$ is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L4, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$ and every $n \in \mathbb{N}$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q) \cap U_n$. To see it, note first that $(p,q)$ is nonempty, since [L4] supplies an element of $\mathbb{Q}_{\mathbb{R}}$ strictly between $p$ and $q$, and that $(p,q)$ is open by [L2]; fix $y_1 \in (p,q)$ and, by [L2], a real $\rho_1 > 0$ with $N_{\rho_1}(y_1) \subseteq (p,q)$. Since $U_n$ is dense, [A1] and [L1] give $y \in N_{\rho_1}(y_1) \cap U_n$, so $y \in (p,q) \cap U_n$, and that set is open by [A1], [L2] and [L3], so there is a real $\rho > 0$ with $N_\rho(y) \subseteq (p,q) \cap U_n$. By [L4] fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $y - \rho < p' < y < q' < y + \rho$. Then $p' < q'$, so $(p',q')$ is good, and every $t \in [p',q']$ satisfies $y - \rho < p' \le t \le q' < y + \rho$, whence $|t - y| < \rho$ and $t \in N_\rho(y)$; thus $[p',q'] \subseteq N_\rho(y) \subseteq (p,q) \cap U_n$. [step 1.3, A1, L1, L2, L3, L4, choose]

3.1 **Successor rule.** For $(k, (p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $j$ makes $(e(m), e(j))$ good with $[e(m), e(j)] \subseteq (p,q) \cap U_k$, and let $j$ be the least natural with that property for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m), e(j)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $n = k$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$ by step 1.2, so both minima exist by [L5] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 1.2, step 2.1, L4, L5, construct]

4.1 **The recursion.** By [L4] fix $p_0, q_0 \in \mathbb{Q}_{\mathbb{R}}$ with $x_0 - \varepsilon_0 < p_0 < x_0 < q_0 < x_0 + \varepsilon_0$; then $(p_0,q_0)$ is good and, as in step 2.1, $[p_0,q_0] \subseteq N_{\varepsilon_0}(x_0)$ by [L2]. Apply [L6] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows that the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$, every $(p_k,q_k)$ being good. [step 1.1, step 1.3, step 3.1, L2, L4, L6, construct]

5.1 Write $I_k := [p_k, q_k]$, a nonempty closed bounded interval by [L2]. The rule of step 3.1 gives, for every $k \in \mathbb{N}$, that $I_{k+1} \subseteq (p_k,q_k) \cap U_k \subseteq I_k$; in particular the family $(I_k)$ is nested and $I_{k+1} \subseteq U_k$. [step 3.1, step 4.1, L2]

6.1 By [L7] applied to the nested family $(I_k)$ of nonempty closed bounded intervals, $\bigcap_{k} I_k \ne \varnothing$; fix $x$ in it. [step 5.1, L7, choose]

7.1 For every $n \in \mathbb{N}$ one has $x \in I_{n+1} \subseteq U_n$ by steps 5.1 and 6.1, so $x \in \bigcap_n U_n$; and $x \in I_0 \subseteq N_{\varepsilon_0}(x_0)$ by steps 4.1 and 6.1. So $N_{\varepsilon_0}(x_0)$ meets $\bigcap_n U_n$. [step 4.1, step 5.1, step 6.1]

8.1 Since $x_0 \in \mathbb{R}$ and the real $\varepsilon_0 > 0$ were arbitrary, every neighbourhood of every point of $\mathbb{R}$ meets $\bigcap_n U_n$, so that set is dense by [L1]. [step 1.1, step 7.1, L1]

9.1 For the consequence, let $(A_n)$ be a sequence of nowhere dense sets and put $U_n := \mathbb{R} \setminus \overline{A_n}$, which is open by [L3] and [L8] and dense by [L8]; by step 8.1 the set $\bigcap_n U_n$ is dense, hence nonempty, and any $x$ in it lies outside every $\overline{A_n}$ and so outside every $A_n$, giving $x \notin \bigcup_n A_n$ and therefore $\bigcup_n A_n \ne \mathbb{R}$. By [L9] the same conclusion covers a union of an at most countable family of nowhere dense sets, so no meager set is all of $\mathbb{R}$. [step 8.1, L1, L3, L8, L9, discharge-construct] ∎

## Remarks

- **What "dense" is doing at each end.** Density of the $U_n$ is used exactly once, in the refinement claim, to find a point of $U_n$ inside a given open interval; openness is used exactly once, immediately after, to fit a whole closed interval with rational endpoints around that point. Neither hypothesis can be dropped. Without openness the conclusion fails: the family consisting of $\mathbb{Q}$ together with all the sets $\mathbb{R} \setminus \{q\}$ for $q \in \mathbb{Q}$ is an at most countable family of dense sets, all but the first of them open, and its intersection is empty. Without density it fails too, for the constant sequence $U_n := (0,1)$ has intersection $(0,1)$, which is not dense in $\mathbb{R}$.

- **Only nonemptiness of the nested intersection is used.** The construction does not force the interval lengths to $0$ and does not need to: claim 1 of [[thm-nested-interval-property]] already produces a point, and one point is all the argument wants. That is why no Archimedean step appears anywhere above.

- **The consequence is the form used downstream.** Applying it to the sequence of singletons $\{x_n\}$ of a supposed enumeration of $\mathbb{R}$ reproves that $\mathbb{R}$ is uncountable ([[ex-baire-reproves-r-uncountable]]); applying it to a supposed presentation of $\mathbb{Q}$ as a $G_\delta$ set is what shows that no such presentation exists ([[cor-q-is-meager-and-not-g-delta]]).

- **Category is not measure.** The intersection produced above is dense but may be very small in the sense of [[def-measure-zero-and-content-zero]]; indeed $\mathbb{R}$ decomposes as a meager set together with a set of measure zero ([[cex-meager-set-of-full-measure]]), so this theorem says nothing whatever about size in measure.
````

### `thm-countable-union-of-null-is-null`

````markdown
---
id: thm-countable-union-of-null-is-null
kind: theorem
title: "A countable union of measure-zero sets has measure zero, by countable choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, def-countable, def-countable-choice, thm-n-cross-n-countable, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, def-injection-surjection-bijection, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable union of null sets is null"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each of
measure zero ([[def-measure-zero-and-content-zero]]). Then

$$\bigcup_{n \in \mathbb{N}} A_n \quad \text{has measure zero.}$$

By the padding convention of [[def-measure-zero-and-content-zero]] and
[[def-countable]] the same conclusion covers the union of an at most countable
family of null sets, a finite family being extended by copies of $\varnothing$.

**The hypothesis $\mathrm{AC}_\omega$ is spent at exactly one step, step 2.1
below**, where one covering sequence is selected for every $A_n$ at once. Each
$A_n$ has many such covers and nullity provides no rule for singling one out.
Nothing else in the proof selects anything: the diagonal enumeration and the
estimate are formulas.

## Facts & Assumptions

**Given:** A sequence $(A_n)_{n \in \mathbb{N}}$ of null subsets of $\mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[A1] The Axiom of Countable Choice: every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets has a function $f$ on $\mathbb{N}$ with $f(n) \in X_n$ for every $n$ ([[def-countable-choice]]).

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<n}(b_k - a_k) \le \eta$ for every $n$ ([[def-measure-zero-and-content-zero]]).

[L2] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$, with inverse $J^{-1}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L3] Powers and the geometric series: $\theta^0 = 1$, $\theta^{m+1} = \theta^m \theta$, $\theta^m > 0$, and $\sum_{m=0}^{\infty}\theta^m = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L4] Finite sums: additivity, scaling, splitting and monotonicity in the terms; a sum of nonnegative terms is nonnegative and does not decrease when further nonnegative terms are adjoined, so a sum of finitely many nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the whole rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $t \cdot 2^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given and put $\varepsilon_n := \varepsilon \cdot \theta^{n+1}$ for $n \in \mathbb{N}$, a positive real by [L3] and [L6]. Let $X_n$ be the set of all pairs of sequences $\big((a_k),(b_k)\big)$ with $a_k \le b_k$ for every $k$, $A_n \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon_n$ for every $i \in \mathbb{N}$. Each $A_n$ is null, so each $X_n$ is nonempty by [L1]. [given, L1, L3, L6]

2.1 By [A1] fix $f$ with $f(n) \in X_n$ for every $n$, and write $f(n) = \big((a^n_k)_k, (b^n_k)_k\big)$. This is the one and only application of countable choice in the proof. [step 1.1, A1, choose]

3.1 By [L2] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define sequences $(c_j)$ and $(d_j)$ by $c_{J(m,k)} := a^m_k$ and $d_{J(m,k)} := b^m_k$, which is a total definition because $J$ is a bijection; then $c_j \le d_j$ for every $j$. Every $x \in \bigcup_n A_n$ lies in some $A_m$, hence in some $[a^m_k, b^m_k] = [c_{J(m,k)}, d_{J(m,k)}]$ by step 2.1, so $\bigcup_n A_n \subseteq \bigcup_j [c_j, d_j]$. [step 2.1, L2]

4.1 Fix $i \in \mathbb{N}$. The pairs $J^{-1}(j)$ for $j < i$ are finitely many and pairwise distinct, so by [L5] there is $N \in \mathbb{N}$ with both coordinates of each of them at most $N$; since all the terms $d_j - c_j$ are nonnegative, [L4] gives $\sum_{j<i}(d_j - c_j) \le \sum_{m \le N}\Big(\sum_{k \le N}(b^m_k - a^m_k)\Big)$. For each $m \le N$ the inner sum is $\sum_{k < N+1}(b^m_k - a^m_k) \le \varepsilon_m$ by step 2.1, so the whole is at most $\sum_{m \le N} \varepsilon \cdot \theta^{m+1} = \varepsilon \cdot \theta \sum_{m<N+1}\theta^{m} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, by [L3], [L4] and [L6]. [step 3.1, L3, L4, L5, L6]

5.1 Steps 3.1 and 4.1 exhibit, for the given $\varepsilon > 0$, sequences of closed intervals covering $\bigcup_n A_n$ with every partial total length at most $\varepsilon$; since $\varepsilon > 0$ was arbitrary, [L1] gives that $\bigcup_n A_n$ has measure zero. [step 1.1, step 3.1, step 4.1, L1] ∎

## Remarks

- **Why the slack is geometric.** The $n$-th set is covered to within
  $\varepsilon \cdot 2^{-n-1}$ and the budgets sum to $\varepsilon$, exactly as in
  [[lem-countable-sets-are-null]], of which this theorem is the abstract form:
  applying it to the singletons $\{x_n\}$ of a listing recovers that lemma, at
  the cost of an appeal to $\mathrm{AC}_\omega$ that the direct proof avoids.
  The expenditure is the same one, and made for the same reason, as in
  [[thm-countable-union-of-countable]].

- **No rearrangement theorem is used, and none is available here.** The estimate
  is made on finite partial sums only, and every finite partial sum of the
  doubly-indexed family is compared with a sum over a finite rectangle, which is a
  finite rearrangement. The theory of rearranging infinite series is not in the
  reading order at this point, and the proof is arranged so as not to need it.

- **The bound is on the total length, not on the number of intervals.** The
  combined cover is countable even when each $A_n$ is covered by infinitely many
  intervals, which is exactly what [[thm-n-cross-n-countable]] supplies. Nothing
  analogous holds for content zero: a countable union of sets of content zero
  need not have content zero, since $\mathbb{Q} \cap [0,1]$ is such a union
  ([[cex-null-set-not-of-content-zero]]).

- **This is where the two smallness notions of the page separate cleanly.** A
  countable union of null sets is null, whereas a countable union of nowhere
  dense sets is meager and, by [[thm-baire-category-r]], never all of
  $\mathbb{R}$; and yet $\mathbb{R}$ is the union of a meager set and a null set
  ([[cex-meager-set-of-full-measure]]).
````

