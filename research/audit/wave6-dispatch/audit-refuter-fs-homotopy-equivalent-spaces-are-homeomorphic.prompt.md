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

## Target item — `fs-homotopy-equivalent-spaces-are-homeomorphic`

Normalized current SHA-256: `3eaa4c964dcb1c33496108316151d5a7ac9a728710ca33c572cf13bf4331dc73`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-homotopy-equivalent-spaces-are-homeomorphic
kind: false-statement
title: "FALSE: homotopy-equivalent spaces must be homeomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-equivalence, cor-convex-subsets-of-rn-are-contractible, cor-contractible-iff-identity-nullhomotopic, thm-r-uncountable, def-homeomorphism-and-open-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

**False claim.** If two topological spaces are homotopy equivalent, then they are homeomorphic.

## Facts & Assumptions

**Given:** A one-point space $P=\{p\}$ and the real line $\mathbb R$ with its usual topology.

[A1] A map $f:X\to Y$ is a homotopy equivalence when it has a continuous $g:Y\to X$ with $g\circ f\simeq\operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] The real line is a nonempty convex subset of itself, hence is contractible, and its identity is homotopic to the constant map at $0$ ([[cor-convex-subsets-of-rn-are-contractible]], [[cor-contractible-iff-identity-nullhomotopic]]).

[L2] A homeomorphism is in particular a bijection ([[def-homeomorphism-and-open-maps]]).

[L3] The set $\mathbb R$ is uncountable, whereas a singleton is finite ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** direct.

1.1 Define $i:P\to\mathbb R$ by $i(p)=0$ and let $q:\mathbb R\to P$ be the unique map. Both are continuous: the preimage of an open set under either map is either empty or the whole domain. [construct]

1.2 No bijection $P\to\mathbb R$ exists by [L3], so no homeomorphism exists by [L2]. [L2, L3]

2.1 One has $q\circ i=\operatorname{id}_P$, while $i\circ q=c_0\simeq\operatorname{id}_{\mathbb R}$ by [L1]. Thus $i$ is a homotopy equivalence with homotopy inverse $q$ by [A1]. [step 1.1, L1, A1]

3.1 Therefore $P$ and $\mathbb R$ are homotopy equivalent by step 2.1 but not homeomorphic by step 1.2, refuting the claim. [step 2.1, step 1.2] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-homotopy-equivalence",
      "source_section": "Definition",
      "quote": "A continuous map $f:X\\to Y$ is a **homotopy equivalence** if there is a continuous map $g:Y\\to X$ such that $$g\\circ f\\simeq\\operatorname{id}_X\\qquad\\text{and}\\qquad f\\circ g\\simeq\\operatorname{id}_Y$$ in the sense of [[def-homotopy-relative-and-path-homotopy]].",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "cor-convex-subsets-of-rn-are-contractible",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$. Every nonempty convex subset $C\\subseteq\\mathbb R^n$, with its Euclidean subspace topology, is contractible. More precisely, for each $c\\in C$ the formula $$H(x,t)=(1-t)x+tc$$ is a homotopy from $\\operatorname{id}_C$ to the constant map at $c$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "cor-contractible-iff-identity-nullhomotopic",
      "source_section": "Statement",
      "quote": "For a nonempty topological space $X$, the following are equivalent: 1. $X$ is contractible. 2. The identity map $\\operatorname{id}_X$ is nullhomotopic.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-homeomorphism-and-open-maps",
      "source_section": "Definition",
      "quote": "- $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U \\subseteq X$. - $f$ is a **closed map** if $f[F]$ is closed in $Y$ for every closed $F \\subseteq X$. - $f$ is a **homeomorphism** if $f$ is a continuous bijection whose inverse $f^{-1} : Y \\to X$ is also continuous. The spaces are **homeomorphic**, written $X \\cong Y$, when a homeomorphism $X \\to Y$ exists. - $f$ is an **embedding** if $f$ is injective and the corestriction $f_0 : X \\to f[X]$, $f_0(x) = f(x)$, is a homeomorphism onto $f[X]$ carrying the subspace topology inherited from $Y$ ([[def-subspace-topology-top]]).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-r-uncountable",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]). Then $\\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection $\\mathbb{N} \\to \\mathbb{R}$, so $\\mathbb{R}$ is neither finite nor countably infinite.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Define $i:P\\to\\mathbb R$ by $i(p)=0$ and let $q:\\mathbb R\\to P$ be the unique map. Both are continuous: the preimage of an open set under either map is either empty or the whole domain. [construct]",
      "step": "1.1",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "No bijection $P\\to\\mathbb R$ exists by [L3], so no homeomorphism exists by [L2]. [L2, L3]",
      "step": "1.2",
      "inputs": [
        "L3",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "One has $q\\circ i=\\operatorname{id}_P$, while $i\\circ q=c_0\\simeq\\operatorname{id}_{\\mathbb R}$ by [L1]. Thus $i$ is a homotopy equivalence with homotopy inverse $q$ by [A1]. [step 1.1, L1, A1]",
      "step": "2.1",
      "inputs": [
        "L1",
        "A1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Therefore $P$ and $\\mathbb R$ are homotopy equivalent by step 2.1 but not homeomorphic by step 1.2, refuting the claim. [step 2.1, step 1.2] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1 through 3.1 use spaces with genuinely different cardinalities"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1 supplies the identity and constant composite endpoints"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-homotopy-equivalent-spaces-are-homeomorphic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-equivalence",
    "declared_target": "def-homotopy-equivalence",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-homotopy-equivalent-spaces-are-homeomorphic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "cor-convex-subsets-of-rn-are-contractible",
    "declared_target": "cor-convex-subsets-of-rn-are-contractible",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-homotopy-equivalent-spaces-are-homeomorphic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "cor-contractible-iff-identity-nullhomotopic",
    "declared_target": "cor-contractible-iff-identity-nullhomotopic",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-homotopy-equivalent-spaces-are-homeomorphic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-r-uncountable",
    "declared_target": "thm-r-uncountable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-homotopy-equivalent-spaces-are-homeomorphic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homeomorphism-and-open-maps",
    "declared_target": "def-homeomorphism-and-open-maps",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (5)

### `cor-contractible-iff-identity-nullhomotopic`

````markdown
---
id: cor-contractible-iff-identity-nullhomotopic
kind: corollary
title: "A nonempty space is contractible if and only if its identity map is nullhomotopic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nullhomotopic-map-and-contractible-space, thm-composition-respects-homotopy]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For a nonempty topological space $X$, the following are equivalent:

1. $X$ is contractible.
2. The identity map $\operatorname{id}_X$ is nullhomotopic.

## Facts & Assumptions

**Given:** A nonempty topological space $X$.

[A1] $X$ is contractible when every continuous map from $X$ to every topological space is nullhomotopic; a map is nullhomotopic when it is homotopic to a constant map ([[def-nullhomotopic-map-and-contractible-space]]).

[L1] Postcomposition by a continuous map preserves homotopies ([[thm-composition-respects-homotopy]], claim 2).

## Proof

**Proof technique:** direct.

1.1 If $X$ is contractible, apply [A1] to the continuous map $\operatorname{id}_X:X\to X$ to conclude that $\operatorname{id}_X$ is nullhomotopic. [A1]

1.2 Conversely suppose $\operatorname{id}_X\simeq c_{x_0}$ for some $x_0\in X$, and let $f:X\to Y$ be any continuous map. Postcomposition by $f$ gives $f=f\circ\operatorname{id}_X\simeq f\circ c_{x_0}=c_{f(x_0)}$ by [L1]. Thus $f$ is nullhomotopic. [assume-hyp, L1, A1]

2.1 Since $Y$ and $f$ in step 1.2 were arbitrary, every continuous map out of $X$ is nullhomotopic, so $X$ is contractible by [A1]. Together with step 1.1 this proves the equivalence. [step 1.1, step 1.2, A1] ∎
````

### `cor-convex-subsets-of-rn-are-contractible`

````markdown
---
id: cor-convex-subsets-of-rn-are-contractible
kind: corollary
title: "Every nonempty convex subset of $\\mathbb{R}^n$ is contractible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-two-maps-into-a-convex-set-are-homotopic, cor-contractible-iff-identity-nullhomotopic]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. Every nonempty convex subset $C\subseteq\mathbb R^n$, with its Euclidean subspace topology, is contractible. More precisely, for each $c\in C$ the formula

$$H(x,t)=(1-t)x+tc$$

is a homotopy from $\operatorname{id}_C$ to the constant map at $c$.

## Facts & Assumptions

**Given:** A nonempty convex subset $C\subseteq\mathbb R^n$ and a point $c\in C$.

[L1] Any two continuous maps into a nonempty convex subset of $\mathbb R^n$ are homotopic by the straight-line formula ([[thm-two-maps-into-a-convex-set-are-homotopic]]).

[L2] A nonempty space is contractible exactly when its identity map is nullhomotopic ([[cor-contractible-iff-identity-nullhomotopic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $\operatorname{id}_C:C\to C$ and the constant map $c_c:C\to C$. The resulting homotopy is $H(x,t)=(1-t)x+tc$. [L1]

2.1 Thus $\operatorname{id}_C$ is nullhomotopic, so $C$ is contractible by [L2]. [step 1.1, L2] ∎
````

### `def-homeomorphism-and-open-maps`

````markdown
---
id: def-homeomorphism-and-open-maps
kind: definition
title: "Homeomorphism, open map, closed map, embedding, and what it means for a property to be topological"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-continuous-map-top, def-injection-surjection-bijection, def-topological-space, def-subspace-topology-top, def-standard-topologies]
justified_by: []
aliases: [def-homeomorphism-top, def-open-map-top, def-closed-map-top, def-embedding-top]
landmark: true
short: "homeomorphism, open/closed map, embedding"
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
    - title: "Homeomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homeomorphism"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Embedding (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Embedding"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces and let
$f : X \to Y$ be a function. Continuity is as in [[def-continuous-map-top]],
injections, surjections and bijections as in
[[def-injection-surjection-bijection]].

- $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U \subseteq X$.
- $f$ is a **closed map** if $f[F]$ is closed in $Y$ for every closed
  $F \subseteq X$.
- $f$ is a **homeomorphism** if $f$ is a continuous bijection whose inverse
  $f^{-1} : Y \to X$ is also continuous. The spaces are **homeomorphic**, written
  $X \cong Y$, when a homeomorphism $X \to Y$ exists.
- $f$ is an **embedding** if $f$ is injective and the corestriction
  $f_0 : X \to f[X]$, $f_0(x) = f(x)$, is a homeomorphism onto $f[X]$ carrying
  the subspace topology inherited from $Y$ ([[def-subspace-topology-top]]).

**The inverse in the third clause exists because $f$ is a bijection**, and it is
the unique two-sided inverse ([[def-injection-surjection-bijection]]); no choice
principle is involved. Continuity of $f^{-1}$ is a genuine additional demand: a
continuous bijection need not be a homeomorphism, and this page records that
failure as a false statement with a two-point witness.

**Open, closed and homeomorphism are three different conditions.** A
homeomorphism is continuous by definition, but an open map need not be continuous
and a closed map need not be continuous; and continuity implies neither openness
nor closedness. An open map need
not be closed and a closed map need not be open, and Sierpinski space
$S = \{a,b\}$ with open point $b$ ([[def-standard-topologies]]) witnesses both
failures at once: the constant map $S \to S$ with value $b$ is open, since the
image of every nonempty set is the open set $\{b\}$, and is not closed, since the
image of the closed set $\{a\}$ is $\{b\}$, whose complement $\{a\}$ is not open;
the constant map with value $a$ is closed and not open by the same computation
read the other way. What is true
is that for a **continuous bijection** the three notions collapse: it is a
homeomorphism exactly when it is open, exactly when it is closed. That is proved
in the next item and is not assumed here.

**Topological properties.** A **property of topological spaces** is a condition
$P$ that is either true or false of each space. $P$ is a **topological property**
(one is also said to be *preserved by homeomorphism*, or *invariant*) when
$X \cong Y$ implies that $P(X)$ and $P(Y)$ have the same truth value. Since
$\cong$ is an equivalence relation on spaces — the identity is a homeomorphism,
inverses and composites of homeomorphisms are homeomorphisms, all three verified
in the next item — a topological property is exactly one that is constant on each
$\cong$-class.

**What a homeomorphism transports.** If $h : X \to Y$ is a homeomorphism then
$U \mapsto h[U]$ is a bijection from $\mathcal{T}_X$ onto $\mathcal{T}_Y$, with
inverse $V \mapsto h^{-1}[V]$: both maps are well defined because $h$ and
$h^{-1}$ are continuous, and they are mutually inverse because $h$ is a
bijection. So a homeomorphism is an isomorphism of the structure "a set together
with a distinguished family of subsets", and every notion defined from the open
sets alone — closed, closure, interior, boundary, dense, convergence of
sequences, continuity of maps into and out of the space — is carried across by
it. Anything defined from extra data, such as a metric or an order, is not, and
that distinction is exactly what the phrase *topological property* is for.

## Remarks

- **Being an embedding is not the same as being injective and continuous.** The
  identity from a set with the discrete topology to the same set with a coarser
  topology is injective and continuous, its image is the whole space, and it is
  an embedding only if the two topologies agree. The extra content of "embedding"
  is that the source topology is recovered as the trace of the target one, which
  is precisely the characteristic property of the subspace topology.

- **The inclusion of a subspace is the model embedding.** For $S \subseteq X$
  with the subspace topology, $\iota : S \to X$ is injective and its
  corestriction to $\iota[S] = S$ is the identity of $(S, \mathcal{T}_S)$, hence
  a homeomorphism; so $\iota$ is an embedding
  ([[def-subspace-topology-top]]). Conversely an embedding
  $f : X \to Y$ identifies $X$ with the subspace $f[X]$ of $Y$, which is the
  sense in which "$X$ sits inside $Y$" is ever asserted in this library.

- **The notation $X \cong Y$ hides the map, and sometimes that matters.** Two
  spaces may be homeomorphic by many different homeomorphisms, and no canonical
  one is claimed by the notation. Where a specific map is used it is named.
````

### `def-homotopy-equivalence`

````markdown
---
id: def-homotopy-equivalence
kind: definition
title: "Homotopy equivalences, homotopy inverses and spaces of the same homotopy type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $X,Y$ be topological spaces. A continuous map $f:X\to Y$ is a **homotopy equivalence** if there is a continuous map $g:Y\to X$ such that

$$g\circ f\simeq\operatorname{id}_X\qquad\text{and}\qquad f\circ g\simeq\operatorname{id}_Y$$

in the sense of [[def-homotopy-relative-and-path-homotopy]]. Such a $g$ is a **homotopy inverse** of $f$.

The spaces $X$ and $Y$ have the **same homotopy type**, or are **homotopy equivalent**, written $X\simeq Y$, when a homotopy equivalence $X\to Y$ exists.

The equations required of an ordinary inverse have been weakened to homotopies. Neither composite need equal the corresponding identity map, and a homotopy equivalence need not be bijective.
````

### `thm-r-uncountable`

````markdown
---
id: thm-r-uncountable
kind: theorem
title: "$\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-complete-ordered-field, thm-recursion, lem-sup-epsilon, lem-sup-unique, def-bounded-set, lem-countable-iff-surjection-from-n, lem-of-add-order, def-ordered-field, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-trichotomy, lem-nat-order-is-membership]
justified_by: []
aliases: [thm-reals-uncountable]
landmark: true
short: "no surjection $\\mathbb N\\to\\mathbb R$"
proof_strategy: contradiction
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
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, with $0 \ne 1$ and the order of [[def-ordered-field]]. For $a \le b$ write $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and write $I = \{\, (a,b) \in \mathbb{R} \times \mathbb{R} : a < b \,\}$ for the set of pairs coding nondegenerate closed intervals.

[L1] Least-upper-bound property: every nonempty $S \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup S$, an upper bound below every upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] The least upper bound is unique when it exists ([[lem-sup-unique]]).

[L3] Epsilon characterisation: for a nonempty $S$ bounded above and an upper bound $u$ of $S$, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Order and arithmetic in an ordered field: $0 < 1$ ([[cor-of-one-positive]]); $a < b$ implies $a + c < b + c$, and $a < b$ with $c < d$ implies $a + c < b + d$ ([[lem-of-add-order]]); $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]); a product of positives is positive ([[lem-of-sign-rules]]); the order is transitive and satisfies trichotomy ([[def-ordered-field]]).

[L5] Recursion: for any set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Induction ([[thm-induction-principle]]); any two naturals are comparable ([[lem-nat-trichotomy]]); the order of $\mathbb{N}$ is the additive one, $m \le n$ meaning $m + k = n$ for some $k$ ([[def-nat-order]], [[def-natural-numbers]]), and it satisfies $n < \sigma(n)$ and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]), so $m \le \sigma(n)$ holds exactly when $m \le n$ or $m = \sigma(n)$.

[L7] A nonempty set is at most countable if and only if some surjection from $\mathbb{N}$ onto it exists; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\mathbb{R}$ is at most countable. Since $0 \in \mathbb{R}$, it is nonempty, so [L7] provides a surjection $f : \mathbb{N} \to \mathbb{R}$. [assume-contra, given, L7]

1.2 Put $3 := 1 + 1 + 1$. Adding the inequality $0 < 1$ to itself twice gives $3 > 0$ by [L4], so $3 \ne 0$ and $3^{-1} > 0$; hence for $d > 0$ the element $d/3 := d \cdot 3^{-1}$ is positive, and $d/3 + d/3 + d/3 = d \cdot 3^{-1} \cdot 3 = d$. [L4, algebra]

2.1 Fix the trisection rule. Let $(a,b) \in I$ and $y \in \mathbb{R}$. Put $d = b - a > 0$, $p = a + d/3$ and $q = p + d/3$; then $a < p < q < b$ by step 1.2 and [L4], since $p - a = q - p = b - q = d/3 > 0$. The three pairs $(a,p)$, $(p,q)$, $(q,b)$ all lie in $I$ and their intervals are contained in $[a,b]$. Moreover $[a,p]$ and $[q,b]$ are disjoint, because $x \le p < q \le x$ is impossible; so $y$ fails to lie in at least one of the three. Define $T(a,b,y)$ to be the **first** of $(a,p)$, $(p,q)$, $(q,b)$, in that fixed order, whose interval does not contain $y$. This is a definition by cases on the three conditions $y \in [a,p]$, $y \in [p,q]$, $y \in [q,b]$, so $T : I \times \mathbb{R} \to I$ is a function and no choice is made. [step 1.2, L4, construct]

3.1 Apply [L5] with $X = \mathbb{N} \times I$, $x_0 = (0, (0,1))$, which lies in $X$ because $0 < 1$ by [L4], and $F(n, (a,b)) = (\sigma(n), T(a, b, f(n)))$: this yields $h : \mathbb{N} \to \mathbb{N} \times I$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$. An induction using [L6] shows the first coordinate of $h(n)$ is $n$, so we may write $h(n) = (n, (a_n, b_n))$ with $a_n < b_n$, $a_0 = 0$, $b_0 = 1$ and $(a_{\sigma(n)}, b_{\sigma(n)}) = T(a_n, b_n, f(n))$ for every $n$. By step 2.1 this gives $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$ and $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. [step 1.1, step 2.1, L4, L5, L6, construct]

4.1 For $m \le n$ one has $a_m \le a_n$ and $b_n \le b_m$, by induction on $n$ using step 3.1 and transitivity; consequently $a_m \le b_n$ for all $m, n$: if $m \le n$ then $a_m \le a_n < b_n$, and if $n \le m$ then $a_m < b_m \le b_n$, and any two naturals are comparable by [L6]. [step 3.1, L4, L6]

5.1 The set $S = \{\, a_n : n \in \mathbb{N} \,\}$ is nonempty and bounded above by $b_0$ by step 4.1, so [L1] gives its least upper bound $x = \sup S$, unique by [L2]. [step 3.1, step 4.1, L1, L2]

6.1 For every $n$: $a_n \le x$, because $x$ is an upper bound of $S$; and $x \le b_n$, because otherwise $\varepsilon := x - b_n > 0$ and [L3] would produce $a_m \in S$ with $b_n = x - \varepsilon < a_m$, contradicting $a_m \le b_n$ from step 4.1. Hence $x \in [a_n, b_n]$ for every $n$. [step 4.1, step 5.1, L1, L3, L4]

7.1 Fix $n \in \mathbb{N}$. By step 6.1 applied to $\sigma(n)$, $x \in [a_{\sigma(n)}, b_{\sigma(n)}]$, whereas $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$ by step 3.1, so $x \ne f(n)$. As $n$ was arbitrary, the real number $x$ is not a value of $f$, contradicting the surjectivity of $f$ obtained in step 1.1. Therefore no surjection $\mathbb{N} \to \mathbb{R}$ exists and, $\mathbb{R}$ being nonempty, [L7] makes $\mathbb{R}$ uncountable. [step 1.1, step 3.1, step 6.1, L7, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Completeness enters once, at step 5.1, to produce $\sup\{a_n\}$; everything else is ordered-field arithmetic and the recursion theorem. The argument therefore applies verbatim to any ordered field with the least-upper-bound property, and it fails for $\mathbb{Q}$ exactly because the supremum of the left endpoints need not exist there, which is as it should be, since $\mathbb{Q}$ is countable ([[thm-rationals-countable]]).

- **Why thirds and not halves.** Two closed halves share the midpoint, so if $f(n)$ happens to be that midpoint then *both* halves contain it and the rule "take the first closed half not containing $f(n)$" has nothing to return. Three closed thirds fix this: the first and the third are disjoint, so at least one of the three always misses $f(n)$, and listing them in a fixed order makes the selection a definition by cases rather than a choice. Open intervals would avoid the overlap too, but closed intervals are what make step 6.1 work, since the point $\sup\{a_n\}$ must be allowed to be an endpoint.

- **The diagonal argument is not lost, only relocated.** [[thm-cantor-powerset]], proved earlier on this page, is Cantor's diagonal argument in a setting where it needs nothing but the Power Set and Separation axioms. What is unavailable here is only the *decimal* diagonal, and only because decimal expansions are infinite series.

- **The choice-freeness matters beyond tidiness.** It is what lets [[fs-countable-union-theorem-of-zf]] draw a conclusion about ZF: since this theorem is proved in ZF alone, any model of ZF in which $\mathbb{R}$ is a countable union of countable sets is a model in which the countable-union theorem fails.

- **The argument gives more than the statement does.** Nothing above depends on the starting interval being $(0,1)$, so re-seeding the recursion inside a given interval shows that every nondegenerate interval, open or closed, is uncountable. That extension is [[cor-interval-uncountable]], next on this page, where it is proved rather than asserted.
````

