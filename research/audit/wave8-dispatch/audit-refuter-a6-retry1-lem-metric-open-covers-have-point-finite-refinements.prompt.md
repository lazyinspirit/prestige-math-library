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

- critical risk (10): 5 declared dependencies; 5 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality

## Target item — `lem-metric-open-covers-have-point-finite-refinements`

Normalized current SHA-256: `df4e69f5322cd5f011c1bd7a3958afda562643cd8a614366a0129533c7f49373`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-metric-open-covers-have-point-finite-refinements
kind: lemma
title: "Under choice, every open cover of a metric space has a point-finite open refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every open cover of a metric space has a point-finite
open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and an open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] Every set can be well ordered under the Axiom of Choice ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open and each point of an open set has a ball contained in that set ([[def-metric-topology]]).

[F2] A point-finite open refining cover is as in [[def-cover-refinement-and-local-finiteness]].

[L1] The dyadic radii $2^{-n}$ tend to $0$ ([[lem-geometric-sequence-null]], claim 1 with ratio $1/2$).

## Proof

**Proof technique:** constructive.

1.1 Well order $\{C_\alpha\}$ by [A1], and write $R(x,n)=B(x,2^{-n})$. A ball $R(z,n+1)$ is *chosen for* $C_\alpha$ when $n$ is the least natural number with $R(z,n)\subseteq C_\alpha$ and, in addition, $R(z,n)\subseteq C_\beta$ for some $\beta<\alpha$. Let $\mathcal G_\alpha$ be the union of all balls chosen for $C_\alpha$. [A1, F1, L1, construct]

2.1 Put $C'_\alpha:=C_\alpha\setminus\overline{\mathcal G_\alpha}$. Each $C'_\alpha$ is open and refines $C_\alpha$. [step 1.1, construct]

3.1 The $C'_\alpha$ cover. Otherwise let $C_\alpha$ be the first original member containing an omitted point $x$. Then $x\in\overline{\mathcal G_\alpha}$. By [L1], choose $N$ with $B(x,3\cdot2^{-N})\subseteq C_\alpha$, and put $\delta=2^{-(N+2)}$. Some chosen ball $R(z,n_z+1)$ meets $B(x,\delta)$; write its radius as $r=2^{-(n_z+1)}$. If $r>\delta$, then $d(x,z)<r+\delta<2r$, so its expanded ball $R(z,n_z)$ contains $x$. If $r\le\delta$, then $d(x,z)<r+\delta\le2\delta<2^{-N}$, so $R(z,N)\subseteq C_\alpha$ and minimality gives $n_z\le N$; hence $r\ge2^{-(N+1)}=2\delta$, a contradiction. Thus in every case an expanded chosen ball contains $x$. That expanded ball lies in some $C_\beta$ with $\beta<\alpha$, contradicting the choice of $\alpha$. [step 1.1, step 2.1, F1, L1]

3.2 If $x\in C'_\alpha$ and $n$ is least with $R(x,n)\subseteq C_\alpha$ (which exists by [L1]), then $C_\alpha$ is the first cover member containing $R(x,n)$: otherwise $R(x,n+1)$ would be chosen for $C_\alpha$ and would contain $x$, contrary to $x\notin\overline{\mathcal G_\alpha}$. For each $n$ there is at most one such first member, and as $n$ increases their ordinal indices are nonincreasing. Infinitely many distinct indices would therefore give an infinite strictly descending sequence of ordinals, impossible because its range has a least member. Thus only finitely many $C'_\alpha$ contain $x$. [step 1.1, step 2.1, L1]

4.1 Thus $\{C'_\alpha\}$ is the point-finite open refinement required by [F2]. [F2, step 3.1, step 3.2, discharge-construct] ∎

## Remarks

This is part (A), pages 341–342, of Ornstein's primary proof. Its chosen dyadic-ball construction supplies the point-finite refinement to which the controlled-radius construction in part (B) is then applied.
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-metric-open-covers-have-point-finite-refinements",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.ams.org/proc/1969-021-02/"
  ],
  "rationale": "Ornstein's primary two-page paper, part (A), constructs from a well-ordered metric open cover the same dyadic-ball point-finite open refinement. The item modernizes notation, makes Choice explicit, and expands the coverage and ordinal-descent checks.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.\n\n> Every family of nonempty sets has a choice function\n> ([[def-choice-function]]).\n\nWritten out: for every set $\\mathcal{F}$ all of whose members are nonempty,\nthere exists a function $g$ with domain $\\mathcal{F}$ satisfying $g(S) \\in S$ for\nall $S \\in \\mathcal{F}$.\n\nAn equivalent formulation is that a product of nonempty sets is nonempty: if\n$X_i \\ne \\emptyset$ for every $i \\in I$, then $\\prod_{i \\in I} X_i \\ne \\emptyset$.\nHere $\\prod_{i \\in I} X_i$ is the set of functions $f$ with domain $I$ such that\n$f(i) \\in X_i$ for every $i \\in I$; when a family of nonempty sets is indexed by\nitself, such an $f$ is precisely a choice function for it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "thm-well-ordering-theorem",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Then **every set $X$ can\nbe well ordered**: there is a relation on $X$ making it a well-ordered set\n([[def-well-order]]).\n\nThe Axiom of Choice is used only inside [[thm-zorn]], and nowhere else in the\nargument below.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-metric-topology",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]).\n\nA subset $U \\subseteq X$ is **open in $(X,d)$** if for every $x \\in U$ there is a\nreal $r > 0$ with $B(x,r) \\subseteq U$ ([[def-metric-ball]]). A subset\n$F \\subseteq X$ is **closed in $(X,d)$** if its complement $X \\setminus F$ is\nopen.\n\nThe collection\n\n$$\\mathcal{T}_d := \\{\\, U \\subseteq X : U \\text{ is open in } (X,d) \\,\\}$$\n\nof all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$\nthat is both open and closed is called **clopen**.\n\n**Two sets are open for trivial reasons.** $\\emptyset$ is open, because the\ndefining condition quantifies over no points; and $X$ is open, because\n$B(x,r) \\subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and\n$\\emptyset$ are also closed, and both are clopen.\n\n**A neighbourhood of a point $x$** is any open set containing $x$. The condition\nabove therefore reads: $U$ is open exactly when every point of $U$ has a ball\naround it inside $U$, and it is the balls alone that have to be tested.\n\n**The metric, not the set, determines $\\mathcal{T}_d$.** Two metrics on the same\nset may have different metric topologies, and two different metrics may have the\nsame one; the systematic comparison is [[def-equivalent-metrics]].",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-cover-refinement-and-local-finiteness",
      "source_section": "Definition",
      "quote": "Let $X$ be a topological space. A family $\\mathcal V$ of subsets of $X$ is a\n**refinement** of a family $\\mathcal U$ when every $V\\in\\mathcal V$ is contained\nin some $U\\in\\mathcal U$. It is an **open refinement** when, additionally, every\n$V\\in\\mathcal V$ is open. A refinement of a cover need not itself cover $X$;\nwhen it does, it is called a **refining cover**.\n\nA family $\\mathcal A$ of subsets of $X$ is **locally finite** when every point\n$x\\in X$ has a neighbourhood meeting only finitely many members of $\\mathcal A$.\nIt is **point-finite** when every $x\\in X$ belongs to only finitely many members\nof $\\mathcal A$. Local finiteness implies point-finiteness: a neighbourhood of\n$x$ meeting only finitely many members contains $x$, so every member containing\n$x$ is among those finitely many. The converse is not part of the definition and\ncan fail.\n\nFor a family $\\mathcal U$ and a subset $A\\subseteq X$, its **star about $A$** is\n$$\\operatorname{St}(A,\\mathcal U):=\\bigcup\\{U\\in\\mathcal U:U\\cap A\\ne\\varnothing\\}.$$\nA cover $\\mathcal V$ is a **star refinement** of a cover $\\mathcal U$ when for\nevery $V\\in\\mathcal V$ there is $U\\in\\mathcal U$ with\n$\\operatorname{St}(V,\\mathcal V)\\subseteq U$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-geometric-sequence-null",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).\n\n1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \\to 0$\n   ([[def-real-limit]]).\n2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\\infty$**\n   ([[def-divergence-to-infinity]]).\n\nClaim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the\nterms $r^k$ alternate in sign and are unbounded, so they neither converge nor\ndiverge to $+\\infty$; what is true of them is the statement about their absolute\nvalues.\n\nBoth claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and\nthe Archimedean property. Nothing here needs the least-upper-bound property\nexcept through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].",
      "uses": [
        "1.1",
        "3.1",
        "3.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Well order $\\{C_\\alpha\\}$ by [A1], and write $R(x,n)=B(x,2^{-n})$. A ball $R(z,n+1)$ is *chosen for* $C_\\alpha$ when $n$ is the least natural number with $R(z,n)\\subseteq C_\\alpha$ and, in addition, $R(z,n)\\subseteq C_\\beta$ for some $\\beta<\\alpha$. Let $\\mathcal G_\\alpha$ be the union of all balls chosen for $C_\\alpha$. [A1, F1, L1, construct]",
      "step": "1.1",
      "inputs": [
        "A1",
        "F1",
        "L1",
        "construct"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Put $C'_\\alpha:=C_\\alpha\\setminus\\overline{\\mathcal G_\\alpha}$. Each $C'_\\alpha$ is open and refines $C_\\alpha$. [step 1.1, construct]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "construct"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The $C'_\\alpha$ cover. Otherwise let $C_\\alpha$ be the first original member containing an omitted point $x$. Then $x\\in\\overline{\\mathcal G_\\alpha}$. By [L1], choose $N$ with $B(x,3\\cdot2^{-N})\\subseteq C_\\alpha$, and put $\\delta=2^{-(N+2)}$. Some chosen ball $R(z,n_z+1)$ meets $B(x,\\delta)$; write its radius as $r=2^{-(n_z+1)}$. If $r>\\delta$, then $d(x,z)<r+\\delta<2r$, so its expanded ball $R(z,n_z)$ contains $x$. If $r\\le\\delta$, then $d(x,z)<r+\\delta\\le2\\delta<2^{-N}$, so $R(z,N)\\subseteq C_\\alpha$ and minimality gives $n_z\\le N$; hence $r\\ge2^{-(N+1)}=2\\delta$, a contradiction. Thus in every case an expanded chosen ball contains $x$. That expanded ball lies in some $C_\\beta$ with $\\beta<\\alpha$, contradicting the choice of $\\alpha$. [step 1.1, step 2.1, F1, L1]",
      "step": "3.1",
      "inputs": [
        "L1",
        "1.1",
        "2.1",
        "F1"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "If $x\\in C'_\\alpha$ and $n$ is least with $R(x,n)\\subseteq C_\\alpha$ (which exists by [L1]), then $C_\\alpha$ is the first cover member containing $R(x,n)$: otherwise $R(x,n+1)$ would be chosen for $C_\\alpha$ and would contain $x$, contrary to $x\\notin\\overline{\\mathcal G_\\alpha}$. For each $n$ there is at most one such first member, and as $n$ increases their ordinal indices are nonincreasing. Infinitely many distinct indices would therefore give an infinite strictly descending sequence of ordinals, impossible because its range has a least member. Thus only finitely many $C'_\\alpha$ contain $x$. [step 1.1, step 2.1, L1]",
      "step": "3.2",
      "inputs": [
        "L1",
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Thus $\\{C'_\\alpha\\}$ is the point-finite open refinement required by [F2]. [F2, step 3.1, step 3.2, discharge-construct]",
      "step": "4.1",
      "inputs": [
        "F2",
        "3.1",
        "3.2",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--4.1 include the empty metric space and empty cover; the omitted-point arguments are then vacuous."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1 and 3.2 include the least natural radius index n=0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--4.1 specialize to a one-member cover; no ball is removed by an earlier member."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--3.2 allow duplicate indexed cover members and arbitrarily small dyadic radii."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 3.1 checks both r>delta and r<=delta, including equality, and preserves all strict ball inequalities."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 uses the assumed well-ordering; all later least indices and witness balls come from stated nonempty sets."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-metric-open-covers-have-point-finite-refinements",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-cover-refinement-and-local-finiteness",
    "declared_target": "def-cover-refinement-and-local-finiteness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-open-covers-have-point-finite-refinements",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-open-covers-have-point-finite-refinements",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-open-covers-have-point-finite-refinements",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-well-ordering-theorem",
    "declared_target": "thm-well-ordering-theorem",
    "target_statement_provenance": "literature-derived",
    "targetPage": "ordinals-and-transfinite-recursion",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-open-covers-have-point-finite-refinements",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-geometric-sequence-null",
    "declared_target": "lem-geometric-sequence-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
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

## Full text of every cited or declared item (5)

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
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
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
````

### `def-cover-refinement-and-local-finiteness`

````markdown
---
id: def-cover-refinement-and-local-finiteness
kind: definition
title: "Refinements, locally finite families, point-finite families, and star refinements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-neighbourhood-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
    - title: "Paracompact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Paracompact_space"
pipeline_run: null
---

## Definition

Let $X$ be a topological space. A family $\mathcal V$ of subsets of $X$ is a
**refinement** of a family $\mathcal U$ when every $V\in\mathcal V$ is contained
in some $U\in\mathcal U$. It is an **open refinement** when, additionally, every
$V\in\mathcal V$ is open. A refinement of a cover need not itself cover $X$;
when it does, it is called a **refining cover**.

A family $\mathcal A$ of subsets of $X$ is **locally finite** when every point
$x\in X$ has a neighbourhood meeting only finitely many members of $\mathcal A$.
It is **point-finite** when every $x\in X$ belongs to only finitely many members
of $\mathcal A$. Local finiteness implies point-finiteness: a neighbourhood of
$x$ meeting only finitely many members contains $x$, so every member containing
$x$ is among those finitely many. The converse is not part of the definition and
can fail.

For a family $\mathcal U$ and a subset $A\subseteq X$, its **star about $A$** is
$$\operatorname{St}(A,\mathcal U):=\bigcup\{U\in\mathcal U:U\cap A\ne\varnothing\}.$$
A cover $\mathcal V$ is a **star refinement** of a cover $\mathcal U$ when for
every $V\in\mathcal V$ there is $U\in\mathcal U$ with
$\operatorname{St}(V,\mathcal V)\subseteq U$.

## Remarks

The word “neighbourhood” has the library convention from
[[def-neighbourhood-top]]: it need not itself be open. Replacing it by an open
neighbourhood gives the same local-finiteness condition, because every
neighbourhood contains an open one about the same point.
````

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
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

### `thm-well-ordering-theorem`

````markdown
---
id: thm-well-ordering-theorem
kind: theorem
title: "The well-ordering theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zorn, def-axiom-of-choice, def-well-order, def-partial-order, def-initial-segment, def-upper-bound, def-maximal-element, def-chain]
justified_by: []
external_refs: [rem-cohen-forcing-ac-independent]
aliases: [zermelo-well-ordering-theorem, thm-every-set-well-orderable]
landmark: true
short: "AC implies every set carries a well-order"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 6e29123abb81fbf1d8d52a5593c1ed36ade7be870a93625327bd4847d6bd21f9
    item_sha256: b2179cede16eb4bdfdf02db27ea873390775aa386a929ebebfa7c2e82ef9f217
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-ordering theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "The Well-Ordering Problem (Open Logic Project)"
      url: "https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf"
    - title: "Formalization of the Axiom of Choice and its Equivalent Theorems"
      url: "https://arxiv.org/abs/1906.03930"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Then **every set $X$ can
be well ordered**: there is a relation on $X$ making it a well-ordered set
([[def-well-order]]).

The Axiom of Choice is used only inside [[thm-zorn]], and nowhere else in the
argument below.

## Facts & Assumptions

**Given:** A set $X$, the axioms of ZF, and the Axiom of Choice. Write $(B, R) \preceq (B', R')$ for **end extension**: $B \subseteq B'$, the relation $R'$ restricted to $B$ is $R$, and $B$ is an initial segment of $(B', R')$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A partial order is reflexive, antisymmetric and transitive, and its strict part is $x < y$ meaning $x \le y$ with $x \ne y$ ([[def-partial-order]]).

[L3] A chain is a subset any two of whose elements are comparable, and the empty set is a chain ([[def-chain]]).

[L4] An upper bound of a subset is an element weakly above every member of it ([[def-upper-bound]]).

[L5] A maximal element has nothing strictly above it ([[def-maximal-element]]).

[L6] A well-order is given in two interchangeable presentations, and the two determine each other ([[def-well-order]]): **weakly**, as a total order $\le$ in which every nonempty subset has a least element; **strictly**, as a relation $<$ that is irreflexive, transitive and trichotomous and in which every nonempty subset $S$ has an element $\ell$ with no $s \in S$ satisfying $s < \ell$. **This proof uses the strict presentation throughout**, as does [[def-initial-segment]]; the end-extension order $\preceq$ on $P$ below is a separate relation and is weak, since Zorn's lemma is about partial orders.

[L7] An initial segment is a downward closed subset ([[def-initial-segment]]).

## Proof

**Proof technique:** direct.

1.1 Let $P$ be the collection of pairs $(B, R)$ with $B \subseteq X$ and $R \subseteq B \times B$ a **strict** well-order of $B$; this is a set by Power Set and Separation applied to $\mathcal{P}(X) \times \mathcal{P}(X \times X)$, and it is nonempty because $(\emptyset, \emptyset) \in P$. [L6, construct]

2.1 Order $P$ by end extension; this relation is reflexive, transitive, and antisymmetric, since mutual end extension forces the underlying sets and relations to coincide, so $(P, \preceq)$ is a poset. [step 1.1, L2, L7, construct]

3.1 The empty chain has an upper bound in $P$, namely $(\emptyset, \emptyset)$, so the hypothesis of Zorn's lemma is not vacuous at the bottom. [step 1.1, step 2.1, L3, L4]

3.2 Let $\mathcal{C} \subseteq P$ be a nonempty chain and put $B^{*} = \bigcup \{B : (B, R) \in \mathcal{C}\}$ and $R^{*} = \bigcup \{R : (B, R) \in \mathcal{C}\}$. [step 2.1, L3, construct]

4.1 $R^{*}$ is a strict total order on $B^{*}$: any two elements of $B^{*}$ lie in members of $\mathcal{C}$ one of which end extends the other, hence lie together in the larger member and are comparable there, and the comparisons made in different members agree, because along the chain each relation is the restriction of every larger one. [step 3.2, step 2.1, L2, L3]

5.1 $R^{*}$ well-orders $B^{*}$: given $\emptyset \ne S \subseteq B^{*}$, choose a member $(B, R)$ of $\mathcal{C}$ meeting $S$ and let $\ell$ be the $R$-least element of $S \cap B$; if some $t \in S$ satisfied $t \mathbin{R^{*}} \ell$ then $t$ and $\ell$ would lie in a common member $(B', R')$ of $\mathcal{C}$, and either $(B', R') \preceq (B, R)$, giving $t \in B' \subseteq B$, or $(B, R) \preceq (B', R')$, in which case $B$ is an initial segment of $(B', R')$ and $t \mathbin{R'} \ell \in B$ again gives $t \in B$; either way $t \in S \cap B$ with $t \mathbin{R} \ell$, contradicting minimality of $\ell$. [step 4.1, step 3.2, step 2.1, L6, L7]

6.1 Hence $(B^{*}, R^{*}) \in P$, and it end extends every member of $\mathcal{C}$: the inclusions and restrictions are immediate, and $B$ is an initial segment of $(B^{*}, R^{*})$ by the case analysis of step 5.1; so every nonempty chain has an upper bound. [step 5.1, step 4.1, step 2.1, L4, L7]

7.1 Zorn's lemma applies to the nonempty poset $(P, \preceq)$, in which every chain has an upper bound, and yields a maximal element $(M, R_M)$; this is the one and only place the Axiom of Choice is spent, and it is spent inside Zorn's lemma. [step 6.1, step 3.1, step 1.1, L1, L5, A1]

8.1 $M = X$: otherwise there is $x \in X \setminus M$, and putting $M' = M \cup \{x\}$ with $R' = R_M \cup \{(m, x) : m \in M\}$ gives a well-order of $M'$, because a nonempty $S \subseteq M'$ has as least element the $R_M$-least element of $S \cap M$ when that is nonempty and $x$ otherwise, while $(M, R_M) \preceq (M', R')$ with $M \ne M'$ contradicts the maximality of $(M, R_M)$. [step 7.1, L5, L6, L7]

9.1 Therefore $R_M$ is a well-order of $M = X$, and $X$ can be well ordered. [step 8.1, step 7.1] ∎

## Remarks

**Where the Axiom of Choice is.** Only in step 7.1, and only through [[thm-zorn]], whose proof spends it exactly once. Everything else here is plain ZF: forming $P$ is Power Set and Separation, and the chain bound is a union. The word "choose" in step 5.1 names one object whose existence has just been asserted, which is ordinary existential instantiation and not a choice principle; a choice principle is needed only when infinitely many such namings must be made at once. This bookkeeping is the reason Zorn is proved as a separate item rather than inlined.

**End extension is doing real work.** Ordering $P$ merely by "$R$ is the restriction of $R'$" is not enough. Without the requirement that $B$ be an initial segment of $B'$, a union of a chain of well-orders can fail to be a well-order, because a set $S$ could keep acquiring smaller elements as one moves up the chain and end with no least element. Step 5.1 is exactly the point where initial segments rule that out.

**Maximal, not greatest.** Zorn's lemma concludes that a maximal element exists, never that a greatest one does, and maximal does not imply greatest ([[fs-maximal-is-greatest]]). The argument is arranged so that maximality suffices: step 8.1 shows a maximal well-ordered piece cannot omit a point, because a point could always be appended on top.

**The converse holds.** Every set being well orderable implies the Axiom of Choice ([[thm-well-ordering-implies-ac]]), so the two are equivalent over ZF, as is Zorn's lemma ([[cor-ac-iff-well-ordering]]). That the well-ordering theorem is not a theorem of ZF alone is recorded, conditionally on the consistency of ZF, in [[fs-every-set-well-orderable-in-zf]]; the external result that item quotes is Cohen's independence theorem ([[rem-cohen-forcing-ac-independent]]), which this library records with references and does not prove.

**Zermelo 1904.** The original proof does not go through Zorn's lemma; it uses a choice function on $\mathcal{P}(X) \setminus \{\emptyset\}$ directly and builds the well-order by transfinite recursion ([[thm-transfinite-recursion]]), taking at each stage the chosen element of the set of points not yet used. That route is available here too, and it makes the use of choice even more visible: one choice function, consulted at every stage.
````

