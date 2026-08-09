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

- critical risk (10): 5 declared dependencies; 5 cited facts; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-minimal-cauchy-filter-space-is-complete`

Normalized current SHA-256: `b88a8a5aca3e53966da1aab3bd435e443ae36f5cbad218f22fc3a27b875ae5a7`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-minimal-cauchy-filter-space-is-complete
kind: lemma
title: "The uniform space of minimal Cauchy filters is complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-complete-uniform-space, def-filter, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

The separated uniform space $\widehat X$ of minimal Cauchy filters is complete.

## Facts & Assumptions

**Given:** A Cauchy filter $\Phi$ on $\widehat X$.

[L1] The standard relations form a uniformity on minimal Cauchy filters ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]).

[L2] Every Cauchy filter on $X$ has its associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L3] Completeness means convergence of every Cauchy filter ([[def-complete-uniform-space]]).

[L4] A filter contains the whole set, omits the empty set, and is closed under finite intersections and supersets ([[def-filter]]); symmetric entourages with prescribed finite-composite control may be chosen inside any entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 For $A\subseteq X$, put $$ A^\#:=\{\,\mathcal M\in\widehat X:A\in\mathcal M\,\}, $$ and define $\mathcal F:=\{A\subseteq X:A^\#\in\Phi\}$. Since $X^\#=\widehat X$, $\varnothing^\#=\varnothing$, $(A\cap B)^\#=A^\#\cap B^\#$, and $A^\#\subseteq B^\#$ whenever $A\subseteq B$, [L4] shows that $\mathcal F$ is a filter on $X$. [L4, construct]

1.2 The filter $\mathcal F$ is Cauchy. Given an entourage $U$, choose a symmetric $D$ with $D^{\circ3}\subseteq U$. Choose a $\widehat D$-small $S\in\Phi$, a filter $\mathcal M_0\in S$, and a $D$-small $C\in\mathcal M_0$. For every $\mathcal N\in S$, the relation $\mathcal M_0\,\widehat D\,\mathcal N$ has witnesses $P\in\mathcal M_0$ and $Q\in\mathcal N$ with $P\times Q\subseteq D$. A point of $C\cap P$ shows $Q\subseteq D[C]$, hence $D[C]\in\mathcal N$. Thus $S\subseteq(D[C])^\#$, so $D[C]\in\mathcal F$. Moreover $D[C]\times D[C]\subseteq D^{\circ3}\subseteq U$, making this a $U$-small member of $\mathcal F$. [L1, L4, choose]

2.1 Let $\mathcal M=m(\mathcal F)$. Given an entourage $E$, choose a symmetric $D$ with $D^{\circ2}\subseteq E$, and choose a $D$-small $A\in\mathcal F$. Then $A^\#\in\Phi$. If $\mathcal N\in A^\#$, the sets $D[A]\in\mathcal M$ and $A\in\mathcal N$ satisfy $D[A]\times A\subseteq D^{\circ2}\subseteq E$, so $\mathcal N\in\widehat E[\mathcal M]$. Hence $A^\#\subseteq\widehat E[\mathcal M]$, and the ball $\widehat E[\mathcal M]$ belongs to $\Phi$. Therefore $\Phi\to\mathcal M$. [step 1.1, step 1.2, L1, L2, L4]

3.1 Since every Cauchy filter $\Phi$ converges, $\widehat X$ is complete by [L3]. [step 2.1, L3, discharge-construct] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-minimal-cauchy-filter-space-is-complete",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"
  ],
  "rationale": "The sources construct the completion from minimal Cauchy filters; completeness of that space is part of the construction. The item isolates and expands that component.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-uniform.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
      "source_section": "Statement",
      "quote": "On the set $\\widehat X$ of minimal Cauchy filters, the relations $\\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
      "source_section": "Statement",
      "quote": "Every Cauchy filter $\\mathcal F$ canonically determines a unique Cauchy filter $m(\\mathcal F)\\subseteq\\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\\in X$, the principal filter $\\mathcal P_x:=\\{A\\subseteq X:x\\in A\\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\\mathcal P_x)$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-complete-uniform-space",
      "source_section": "Definition",
      "quote": "A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-filter",
      "source_section": "Definition",
      "quote": "**Convention: filters are proper.** Condition (F2) is part of the definition\nthroughout this library, so \"filter\" always means \"proper filter\". The competing\nconvention drops (F2), calls the resulting objects filters, and says **proper\nfilter** for one that omits $\\emptyset$. The two conventions differ by exactly one\nobject, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains\n$\\emptyset$ to be all of $\\mathcal{P}(X)$: if $\\emptyset \\in \\mathcal{F}$ then\n$\\emptyset \\subseteq B \\subseteq X$ gives $B \\in \\mathcal{F}$ for every\n$B \\subseteq X$. That single extra object is the **improper filter**\n$\\mathcal{P}(X)$. This library follows the more widely adopted convention, in\nwhich the improper filter is not a filter; a reader arriving from the other\nconvention should read every unqualified \"filter\" below as \"proper filter\".",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $A\\subseteq X$, put $$ A^\\#:=\\{\\,\\mathcal M\\in\\widehat X:A\\in\\mathcal M\\,\\}, $$ and define $\\mathcal F:=\\{A\\subseteq X:A^\\#\\in\\Phi\\}$. Since $X^\\#=\\widehat X$, $\\varnothing^\\#=\\varnothing$, $(A\\cap B)^\\#=A^\\#\\cap B^\\#$, and $A^\\#\\subseteq B^\\#$ whenever $A\\subseteq B$, [L4] shows that $\\mathcal F$ is a filter on $X$. [L4, construct]",
      "step": "1.1",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The filter $\\mathcal F$ is Cauchy. Given an entourage $U$, choose a symmetric $D$ with $D^{\\circ3}\\subseteq U$. Choose a $\\widehat D$-small $S\\in\\Phi$, a filter $\\mathcal M_0\\in S$, and a $D$-small $C\\in\\mathcal M_0$. For every $\\mathcal N\\in S$, the relation $\\mathcal M_0\\,\\widehat D\\,\\mathcal N$ has witnesses $P\\in\\mathcal M_0$ and $Q\\in\\mathcal N$ with $P\\times Q\\subseteq D$. A point of $C\\cap P$ shows $Q\\subseteq D[C]$, hence $D[C]\\in\\mathcal N$. Thus $S\\subseteq(D[C])^\\#$, so $D[C]\\in\\mathcal F$. Moreover $D[C]\\times D[C]\\subseteq D^{\\circ3}\\subseteq U$, making this a $U$-small member of $\\mathcal F$. [L1, L4, choose]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Let $\\mathcal M=m(\\mathcal F)$. Given an entourage $E$, choose a symmetric $D$ with $D^{\\circ2}\\subseteq E$, and choose a $D$-small $A\\in\\mathcal F$. Then $A^\\#\\in\\Phi$. If $\\mathcal N\\in A^\\#$, the sets $D[A]\\in\\mathcal M$ and $A\\in\\mathcal N$ satisfy $D[A]\\times A\\subseteq D^{\\circ2}\\subseteq E$, so $\\mathcal N\\in\\widehat E[\\mathcal M]$. Hence $A^\\#\\subseteq\\widehat E[\\mathcal M]$, and the ball $\\widehat E[\\mathcal M]$ belongs to $\\Phi$. Therefore $\\Phi\\to\\mathcal M$. [step 1.1, step 1.2, L1, L2, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Since every Cauchy filter $\\Phi$ converges, $\\widehat X$ is complete by [L3]. [step 2.1, L3, discharge-construct] ∎",
      "step": "3.1",
      "inputs": [
        "L3",
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the explicit empty-set or empty-family branch was checked against the displayed definitions"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero distance, zero index, or the base-value case was inspected under the displayed inequalities and definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and step 1.1: the diagonal, coincident-point, constant, minimal, or equality degeneration was checked"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint, one-sided limit, or strict-versus-weak boundary enters the claim."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-minimal-cauchy-filter-space-is-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "declared_target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-space-is-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "declared_target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-space-is-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-complete-uniform-space",
    "declared_target": "def-complete-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-space-is-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter",
    "declared_target": "def-filter",
    "target_statement_provenance": "literature-derived",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-space-is-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
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

## Full text of every cited or declared item (5)

### `def-complete-uniform-space`

````markdown
---
id: def-complete-uniform-space
kind: definition
title: "Complete uniform space: every Cauchy filter converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Definition

A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.
````

### `def-filter`

````markdown
---
id: def-filter
kind: definition
title: "Filter on a set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-power-set, def-subset-and-proper-subset,
       def-intersection-of-a-set-and-binary-intersection]
justified_by: []
aliases: [def-proper-filter]
landmark: false
short: "filter on $X$"
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
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Filter (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(mathematics)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
    - title: "B. Kaya, Ultrafilters and How to Use Them"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ ([[def-power-set]], [[def-subset-and-proper-subset]]) is a **filter on $X$**
when it satisfies:

- **(F1)** *nontriviality*: $X \in \mathcal{F}$;
- **(F2)** *properness*: $\emptyset \notin \mathcal{F}$;
- **(F3)** *closure under pairwise intersection*
  ([[def-intersection-of-a-set-and-binary-intersection]]): if
  $A, B \in \mathcal{F}$ then $A \cap B \in \mathcal{F}$;
- **(F4)** *upward closure in $X$*: if $A \in \mathcal{F}$ and
  $A \subseteq B \subseteq X$ then $B \in \mathcal{F}$.

The set of all filters on $X$ is written $\mathrm{Filt}(X)$. It is a subset of
$\mathcal{P}(\mathcal{P}(X))$, hence a set, and it is ordered by inclusion:
$\mathcal{F} \subseteq \mathcal{G}$ is read "$\mathcal{G}$ is **finer** than
$\mathcal{F}$", and $\mathcal{F}$ is **coarser** than $\mathcal{G}$.

**Convention: filters are proper.** Condition (F2) is part of the definition
throughout this library, so "filter" always means "proper filter". The competing
convention drops (F2), calls the resulting objects filters, and says **proper
filter** for one that omits $\emptyset$. The two conventions differ by exactly one
object, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains
$\emptyset$ to be all of $\mathcal{P}(X)$: if $\emptyset \in \mathcal{F}$ then
$\emptyset \subseteq B \subseteq X$ gives $B \in \mathcal{F}$ for every
$B \subseteq X$. That single extra object is the **improper filter**
$\mathcal{P}(X)$. This library follows the more widely adopted convention, in
which the improper filter is not a filter; a reader arriving from the other
convention should read every unqualified "filter" below as "proper filter".

## Remarks

- **The intuition is "large".** Read $A \in \mathcal{F}$ as "$A$ is a large subset
  of $X$", where largeness is relative to $\mathcal{F}$. Then (F1) says the whole
  space is large, (F2) says the empty set is not, (F3) says two large sets
  overlap largely, and (F4) says a superset of a large set is large. Properness
  is what stops "large" from being vacuous: without (F2) every subset counts as
  large and the notion carries no information, which is the mathematical reason
  the improper filter is excluded rather than a matter of taste.
- **$X \neq \emptyset$ follows.** By (F1) the set $X$ belongs to $\mathcal{F}$ and
  by (F2) the set $\emptyset$ does not, so $X \neq \emptyset$. Equivalently, there
  are **no filters on the empty set**: $\mathcal{P}(\emptyset) = \{\emptyset\}$,
  and any filter on $\emptyset$ would have to contain $\emptyset$ by (F1) and omit
  it by (F2). No hypothesis "$X \neq \emptyset$" is therefore needed anywhere
  below; it is delivered by the existence of a filter.
- **(F3) extends to any finite list of members** and not beyond: an intersection
  of infinitely many members of a filter is usually not a member, and demanding
  that it be one is a strictly stronger notion. The families that generate
  filters by finite intersections are exactly those with the finite intersection
  property ([[def-finite-intersection-property]], [[lem-fip-generates-filter]]).
- Filters are usually presented by a smaller family that they are generated from,
  a **filter base** ([[def-filter-base]], [[lem-filter-base-generates]]), because
  writing out every superset is neither possible nor informative.
- The maximal filters under the inclusion order recorded above are the
  **ultrafilters** ([[def-ultrafilter]]), and every filter is contained in one
  ([[thm-ultrafilter-lemma]]). Maximal here means maximal, not greatest: as soon
  as $X$ has two distinct points $x \neq y$ there is no finest filter, since a
  filter containing every filter would contain the principal filters at $x$ and
  at $y$, hence both $\{x\}$ and $\{y\}$, hence their intersection $\emptyset$,
  which (F2) forbids. Incomparability of those two principal filters is not the
  reason: incomparable elements are perfectly compatible with a greatest element
  above them both, and reading "maximal" as "greatest" is the error recorded in
  [[fs-maximal-is-greatest]]. The argument is set out in [[def-ultrafilter]].
````

### `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`

````markdown
---
id: lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity
kind: lemma
title: "The standard entourages on minimal Cauchy filters form a separated uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-uniform-space-by-entourages, def-separated-uniform-space, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

On the set $\widehat X$ of minimal Cauchy filters, the relations $\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.

## Facts & Assumptions

**Given:** Minimal Cauchy filters $\mathcal F,\mathcal G$ on $X$.

[L1] Every Cauchy filter has a unique associated minimal Cauchy filter, and every principal filter is Cauchy and therefore has an associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] Symmetric entourages form a base and admit square roots ([[lem-symmetric-entourages-form-a-base]]).

[L3] The entourage axioms and separatedness are stated in [[def-uniform-space-by-entourages]] and [[def-separated-uniform-space]].

## Proof

**Proof technique:** constructive.

1.1 Because a uniformity is a proper filter on $X\times X$, its carrier $X$ is nonempty. Choose $x\in X$; then [L1] gives a minimal Cauchy filter associated to the principal filter at $x$, so $\widehat X$ is nonempty. For symmetric $E$, put $(\mathcal F,\mathcal G)\in\widehat E$ when some $A\in\mathcal F$ and $B\in\mathcal G$ satisfy $A\times B\subseteq E$. [L1, L3, construct, choose]

2.1 Every $\mathcal F$ is $\widehat E$-close to itself: choose an $E$-small member of the Cauchy filter and use it on both sides. Thus each $\widehat E$ contains the nonempty diagonal of $\widehat X$. The relation $\widehat E$ is symmetric. If $\widehat E$ and $\widehat D$ have respective witnesses $A\times B$ and $C\times K$, then $(A\cap C)\times(B\cap K)\subseteq E\cap D$, so finite intersections are refined by the corresponding hatted intersection. [step 1.1]

2.2 Choose a symmetric entourage $D$ with $D^{\circ2}\subseteq E$. If $\mathcal F\,\widehat D\,\mathcal G$ via $A\times B\subseteq D$ and $\mathcal G\,\widehat D\,\mathcal H$ via $C\times K\subseteq D$, choose $b\in B\cap C$. Then $aDbDk$ for every $a\in A,k\in K$, so $A\times K\subseteq D^{\circ2}\subseteq E$. Hence $\widehat D\circ\widehat D\subseteq\widehat E$. [step 1.1, L2, choose]

2.3 Steps 2.1 and 2.2 show that the upward closure of the relations $\widehat E$ is a uniformity. To prove separation, suppose $\mathcal F\,\widehat E\,\mathcal G$ for every entourage $E$. Given $A\in\mathcal F$, minimality gives $\mathcal F=m(\mathcal F)$ by [L1], so some $D[C]\subseteq A$ with $C\in\mathcal F$ and symmetric $D$. Choose an entourage $E\subseteq D$ and witnesses $P\in\mathcal F,Q\in\mathcal G$ with $P\times Q\subseteq E$. Pick $c\in C\cap P$. Then $Q\subseteq E[c]\subseteq D[C]\subseteq A$, so $A\in\mathcal G$. Thus $\mathcal F\subseteq\mathcal G$; symmetry gives equality. [step 1.1, L1, L2, choose]

3.1 Therefore the standard relations form the asserted separated uniformity. [step 2.3, L3, discharge-construct] ∎
````

### `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`

````markdown
---
id: lem-minimal-cauchy-filter-associated-to-a-cauchy-filter
kind: lemma
title: "Every Cauchy filter canonically determines a unique minimal Cauchy filter coarser than it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-base, lem-filter-base-generates, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

Every Cauchy filter $\mathcal F$ canonically determines a unique Cauchy filter $m(\mathcal F)\subseteq\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\in X$, the principal filter $\mathcal P_x:=\{A\subseteq X:x\in A\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\mathcal P_x)$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ on a uniform space.

[L1] Cauchyness supplies arbitrarily small members of $\mathcal F$ ([[def-cauchy-filter-in-a-uniform-space]]).

[L2] Filter bases generate the least filter containing them ([[def-filter-base]], [[lem-filter-base-generates]]).

[L3] Symmetric entourages form a base and may be chosen with prescribed finite-composite control ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal B$ consist of all $E[A]$ with $A\in\mathcal F$ and symmetric entourage $E$. Every such set contains the nonempty set $A$. Given $E[A],D[B]\in\mathcal B$, the symmetric entourage $E\cap D$ and the member $A\cap B\in\mathcal F$ give $$ (E\cap D)[A\cap B]\subseteq E[A]\cap D[B]. $$ Thus $\mathcal B$ is a proper downward-directed filter base. Let $m(\mathcal F)$ be the filter it generates. [L2, L3, construct]

2.1 Since $A\subseteq E[A]$, every member of $\mathcal B$ belongs to $\mathcal F$, so $m(\mathcal F)\subseteq\mathcal F$. To prove it Cauchy, let $U$ be an entourage and choose a symmetric $E$ with $E^{\circ3}\subseteq U$. Choose $A\in\mathcal F$ with $A\times A\subseteq E$. If $y,z\in E[A]$, take $a,b\in A$ with $aEy$ and $bEz$; symmetry gives $yEaEbEz$, so $(y,z)\in E^{\circ3}\subseteq U$. Hence $E[A]\in m(\mathcal F)$ is $U$-small. [L1, L3, step 1.1]

2.2 Let $\mathcal G\subseteq\mathcal F$ be Cauchy, and fix $E[A]\in\mathcal B$. Choose a symmetric $D$ with $D\subseteq E$, and a $D$-small $B\in\mathcal G$. Since $A,B\in\mathcal F$, choose $c\in A\cap B$. Then $B\subseteq D[c]\subseteq E[A]$, so $E[A]\in\mathcal G$. Thus every Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$. [L1, L3, step 1.1, choose]

3.1 If a Cauchy filter is coarser than $m(\mathcal F)$, step 2.2 places $m(\mathcal F)$ inside it, so equality holds; hence $m(\mathcal F)$ is minimal. Any minimal Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$ by step 2.2 and must equal it by minimality. This proves uniqueness. [step 2.1, step 2.2]

4.1 For $x\in X$, the set $\{x\}$ belongs to $\mathcal P_x$, and $\{x\}\times\{x\}\subseteq\Delta_X\subseteq E$ for every entourage $E$. Thus $\mathcal P_x$ is Cauchy by [L1], and step 3.1 supplies its associated minimal Cauchy filter. [L1, step 3.1, discharge-construct] ∎
````

### `lem-symmetric-entourages-form-a-base`

````markdown
---
id: lem-symmetric-entourages-form-a-base
kind: lemma
title: "Every uniformity has a base of symmetric entourages"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-filter-base]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

If $\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\in\mathcal U$ there is a symmetric $D\in\mathcal U$ with $D\subseteq E$. More generally, for every entourage $E$ and every integer $n\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\circ n}\subseteq E$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$ on $X$, an entourage $E\in\mathcal U$, and an integer $n\ge 1$.

[A1] A uniformity is a filter whose members are closed under inverse and admit square roots ([[def-uniform-space-by-entourages]]).

[L1] A nonempty, proper family that refines every pair of its members is a filter base ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Choose $R\in\mathcal U$ with $R\circ R\subseteq E$, and put $S:=R\cap R^{-1}$. [A1, choose]

1.2 Put $E_0:=E$. By finitely iterating the square-root axiom, choose entourages $E_1,\ldots,E_n$ such that $E_{k+1}\circ E_{k+1}\subseteq E_k$ for $0\le k<n$, and put $D:=E_n\cap E_n^{-1}$. [A1, choose]

2.1 The set $S$ is an entourage, since $R,R^{-1}\in\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\subseteq R\circ R\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]

2.2 The entourage $D$ is symmetric and $D\subseteq E_n$. Induction on $k$ gives $D^{\circ 2^k}\subseteq E_{n-k}$ for $0\le k\le n$, hence $D^{\circ 2^n}\subseteq E$. Since every entourage contains the diagonal and $n\le 2^n$, one may insert diagonal factors to obtain $D^{\circ n}\subseteq D^{\circ 2^n}\subseteq E$. [step 1.2, A1, algebra]

3.1 Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1]

4.1 Therefore symmetric entourages form a base and admit the asserted finite-composite control. [step 3.1, step 2.2] ∎
````

