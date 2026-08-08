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

## Target item — `lem-straight-line-homotopies-are-continuous`

Normalized current SHA-256: `92217987fe69799b7317c84b018f4dd25da5bd9f0d4121a9a53da4346beb3294`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-straight-line-homotopies-are-continuous
kind: lemma
title: "For continuous maps into a convex subset of $\\mathbb{R}^n$, the straight-line formula defines a continuous homotopy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-product-universal-property, thm-componentwise-limits-and-continuity, def-subspace-topology-top, thm-continuity-characterisations-top, lem-product-topology-on-rn]
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

Let $n\ge1$. A subset $C\subseteq\mathbb R^n$ is called **convex** here when

$$u,v\in C,\ t\in[0,1]\quad\Longrightarrow\quad(1-t)u+tv\in C.$$

If $X$ is a topological space and $f,g:X\to C$ are continuous, where $C$ has the subspace topology from $\mathbb R^n$, then

$$H:X\times I\longrightarrow C,\qquad H(x,t)=(1-t)f(x)+tg(x),$$

is continuous.

## Facts & Assumptions

**Given:** A natural $n\ge1$, a convex subspace $C\subseteq\mathbb R^n$, a topological space $X$, and continuous maps $f,g:X\to C$.

[A1] Convexity is the displayed condition in the Statement.

[L1] Product projections are continuous, and a map into a product is continuous exactly when all component maps are continuous ([[thm-product-universal-property]]).

[L2] The product topology on $\mathbb R^m$ agrees with its Euclidean metric topology for every $m\ge1$ ([[lem-product-topology-on-rn]]).

[L3] For maps from a metric space into $\mathbb R^m$, continuity is componentwise; sums and scalar multiples of continuous vector-valued maps and inner products of two such maps are continuous ([[thm-componentwise-limits-and-continuity]], clauses 1 and 3).

[L4] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).

[L5] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

## Proof

**Proof technique:** direct.

1.1 Addition and multiplication $\mathbb R^2\to\mathbb R$ are continuous. Indeed the coordinate projections are continuous by [L1], and by [L2] may be read as continuous scalar functions on the Euclidean metric space $\mathbb R^2$. The identity map $z\mapsto z$ and the constant map $z\mapsto(1,1)$ are continuous, so [L3] makes their inner product $z_0+z_1$ continuous. The maps $z\mapsto(z_0,0)$ and $z\mapsto(z_1,0)$ are continuous by the componentwise part of [L3], and their inner product $z_0z_1$ is continuous by its algebra part. [L1, L2, L3]

2.1 Consequently, if $a,b:Z\to\mathbb R$ are continuous on an arbitrary topological space $Z$, then $a+b$ and $ab$ are continuous: the pair $(a,b):Z\to\mathbb R^2$ is continuous by [L1] and [L2], and composing it with the two maps of step 1.1 is continuous because the preimage of an open set under a composite is an iterated preimage, which is open by [L5]. Constant functions and additive inverses are continuous by the same argument, using a constant component and the continuous scalar multiple supplied by [L3]. [step 1.1, L1, L2, L3, L5]

3.1 Let $\iota:C\hookrightarrow\mathbb R^n$ be the inclusion and put $F=\iota\circ f$, $G=\iota\circ g$. These ambient maps are continuous by [L4]. For $Z=X\times I$, let $p_X:Z\to X$ and $\tau:Z\to I\subseteq\mathbb R$ be the projections. Each scalar coordinate $F_k\circ p_X$ and $G_k\circ p_X$ is continuous: coordinate projections on $\mathbb R^n$ are continuous by [L1] and [L2], and composites preserve continuity by the preimage calculation of step 2.1. The scalar map $\tau$ is continuous, also as a map into $\mathbb R$, by [L1] and [L4]. [L1, L2, L4, L5]

4.1 By step 2.1, for every $k<n$ the function $(x,t)\mapsto(1-t)F_k(x)+tG_k(x)$ is continuous on $Z$. Therefore the ambient map $\widetilde H:Z\to\mathbb R^n$ with these coordinates is continuous by [L1] and [L2]. [step 2.1, step 3.1, L1, L2]

5.1 Convexity [A1] gives $\widetilde H(x,t)\in C$ for every $(x,t)\in Z$. Since the composite of $H:Z\to C$ with the inclusion $\iota$ is $\widetilde H$, [L4] makes $H$ continuous into $C$. [step 4.1, A1, L4] ∎

## Remarks

The continuity argument uses only products, subspaces and ordinary Euclidean continuity. Convexity is used solely to ensure that the straight-line formula takes values in $C$.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-product-universal-property",
      "source_section": "Statement",
      "quote": "Then: 1. **The projections are continuous**, and the product topology is the coarsest topology on $P$ making all of them continuous.",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-product-topology-on-rn",
      "source_section": "Statement",
      "quote": "1. The product topology on $\\mathbb{R}^n$ is the metric topology of $d_\\infty$",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-componentwise-limits-and-continuity",
      "source_section": "Statement",
      "quote": "1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \\subseteq X$, $f : A \\to \\mathbb{R}^{m}$ and $a \\in A$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be a topological space and let $g : Z \\to S$ be a function. Then",
      "uses": [
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "Condition (d) is what makes continuity checkable against a generating family rather than against every open set, and it holds for a *basis* as well, a basis being in particular a subbasis for the topology it generates.",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Addition and multiplication $\\mathbb R^2\\to\\mathbb R$ are continuous. Indeed the coordinate projections are continuous by [L1], and by [L2] may be read as continuous scalar functions on the Euclidean metric space $\\mathbb R^2$. The identity map $z\\mapsto z$ and the constant map $z\\mapsto(1,1)$ are continuous, so [L3] makes their inner product $z_0+z_1$ continuous. The maps $z\\mapsto(z_0,0)$ and $z\\mapsto(z_1,0)$ are continuous by the componentwise part of [L3], and their inner product $z_0z_1$ is continuous by its algebra part. [L1, L2, L3]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Consequently, if $a,b:Z\\to\\mathbb R$ are continuous on an arbitrary topological space $Z$, then $a+b$ and $ab$ are continuous: the pair $(a,b):Z\\to\\mathbb R^2$ is continuous by [L1] and [L2], and composing it with the two maps of step 1.1 is continuous because the preimage of an open set under a composite is an iterated preimage, which is open by [L5]. Constant functions and additive inverses are continuous by the same argument, using a constant component and the continuous scalar multiple supplied by [L3]. [step 1.1, L1, L2, L3, L5]",
      "step": "2.1",
      "inputs": [
        "L1",
        "L2",
        "1.1",
        "L5",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Let $\\iota:C\\hookrightarrow\\mathbb R^n$ be the inclusion and put $F=\\iota\\circ f$, $G=\\iota\\circ g$. These ambient maps are continuous by [L4]. For $Z=X\\times I$, let $p_X:Z\\to X$ and $\\tau:Z\\to I\\subseteq\\mathbb R$ be the projections. Each scalar coordinate $F_k\\circ p_X$ and $G_k\\circ p_X$ is continuous: coordinate projections on $\\mathbb R^n$ are continuous by [L1] and [L2], and composites preserve continuity by the preimage calculation of step 2.1. The scalar map $\\tau$ is continuous, also as a map into $\\mathbb R$, by [L1] and [L4]. [L1, L2, L4, L5]",
      "step": "3.1",
      "inputs": [
        "L4",
        "L1",
        "L2",
        "2.1",
        "L5"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By step 2.1, for every $k<n$ the function $(x,t)\\mapsto(1-t)F_k(x)+tG_k(x)$ is continuous on $Z$. Therefore the ambient map $\\widetilde H:Z\\to\\mathbb R^n$ with these coordinates is continuous by [L1] and [L2]. [step 2.1, step 3.1, L1, L2]",
      "step": "4.1",
      "inputs": [
        "2.1",
        "L1",
        "L2",
        "3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Convexity [A1] gives $\\widetilde H(x,t)\\in C$ for every $(x,t)\\in Z$. Since the composite of $H:Z\\to C$ with the inclusion $\\iota$ is $\\widetilde H$, [L4] makes $H$ continuous into $C$. [step 4.1, A1, L4] ∎",
      "step": "5.1",
      "inputs": [
        "A1",
        "L4",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "the statement assumes n>=1, so the zero-dimensional case is outside its hypotheses"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the displayed Euclidean formulas remain valid for n=1"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and steps 1.1 through 5.1 remain valid when the two maps coincide or the convex target is a singleton"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "the statement and steps 1.1 through 5.1 treat the whole closed interval, including t=0 and t=1"
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
    "source": "lem-straight-line-homotopies-are-continuous",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-product-universal-property",
    "declared_target": "thm-product-universal-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-straight-line-homotopies-are-continuous",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-componentwise-limits-and-continuity",
    "declared_target": "thm-componentwise-limits-and-continuity",
    "target_statement_provenance": null,
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-straight-line-homotopies-are-continuous",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-straight-line-homotopies-are-continuous",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-continuity-characterisations-top",
    "declared_target": "thm-continuity-characterisations-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-straight-line-homotopies-are-continuous",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "lem-product-topology-on-rn",
    "declared_target": "lem-product-topology-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (5)

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
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
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `lem-product-topology-on-rn`

````markdown
---
id: lem-product-topology-on-rn
kind: lemma
title: "For $n \\ge 1$ the product topology on $n$ copies of the usual topology of $\\mathbb{R}$ is the metric topology of $d_\\infty$ on $\\mathbb{R}^n$, and hence also of $d_1$ and $d_2$, so $\\mathbb{R}^n$ as a product and $\\mathbb{R}^n$ as a metric space are one space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, lem-metrics-on-rn, def-metric-topology, def-metric-ball,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-equivalent-metrics,
       thm-metric-equivalence-hierarchy, thm-of-square-roots, lem-finite-sum-laws,
       def-interval, def-max-min, lem-finite-set-has-max, lem-finite-choice, lem-of-square-monotone,
       lem-of-square-positive, lem-of-abs-value, lem-of-naturals-positive,
       lem-of-sign-rules, lem-metric-nonnegativity, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}^n$ as a product is $\\mathbb{R}^n$ as a metric space"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, and give $\mathbb{R}$ its usual topology,
the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let

$$\mathbb{R}^n \;=\; \prod_{k < n} \mathbb{R}$$

be the product of $n$ copies of $\mathbb{R}$ ([[def-product-topology]]). As a
**set** this is literally the $\mathbb{R}^n$ of [[lem-metrics-on-rn]], both being
the set of functions $n \to \mathbb{R}$; and $d_1$, $d_2$, $d_\infty$ are the
three metrics defined there. Then:

1. The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$
   ([[def-metric-topology]]). The key computation is that a $d_\infty$-ball is a
   box:
   $$B_{d_\infty}(x, r) \;=\; \prod_{k<n} (x_k - r,\ x_k + r) \qquad (r > 0),$$
   a product of bounded open intervals ([[def-interval]]).
2. $d_\infty \le d_1 \le n\, d_\infty$ and $d_\infty \le d_2 \le n\, d_\infty$
   pointwise, so $d_1$ and $d_2$ are each Lipschitz equivalent to $d_\infty$
   ([[def-equivalent-metrics]]); here $n$ denotes the canonical natural
   $n \cdot 1_{\mathbb{R}}$.
3. Consequently all three metrics induce the product topology
   ([[thm-metric-equivalence-hierarchy]]). So $\mathbb{R}^n$ carrying the product
   topology and $\mathbb{R}^n$ carrying the topology of any one of $d_1$, $d_2$,
   $d_\infty$ are **one topological space**, and it is metrizable
   ([[def-metrizable-space]]).

**Why $n \ge 1$.** The metric $d_\infty$ is a maximum over $n$ terms, which does
not exist for $n = 0$; [[lem-metrics-on-rn]] carries the same hypothesis, and it
is carried here for the same reason. For $n = 0$ the product is a one-point space
and there is nothing to compare.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the set $\mathbb{R}^n$ of functions $n \to \mathbb{R}$; the three metrics $d_1(x,y) = \sum_{k<n}|x_k - y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k < n\}$; points $x, y \in \mathbb{R}^n$ and a real $r > 0$. Throughout, $n$ inside a real inequality denotes the canonical natural $n \cdot 1_{\mathbb{R}}$.

[A1] $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$ for $n \ge 1$, and $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ ([[lem-metrics-on-rn]]).

[A2] For $I = n$ a natural number, a basis for the product topology on $\prod_{k<n}\mathbb{R}$ is the family of all boxes $\prod_{k<n} U_k$ with every $U_k$ open in $\mathbb{R}$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[L1] $B_{\mathbb{R}}(t, r) = (t-r,\ t+r)$, and $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $t \in U$ has some $r > 0$ with $(t-r,t+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3; [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

[L2] $U$ is open in a metric space $(X,d)$ exactly when every $u \in U$ has some $\rho > 0$ with $B_d(u,\rho) \subseteq U$ ([[def-metric-topology]], [[def-metric-ball]]); metric values are nonnegative ([[lem-metric-nonnegativity]]).

[L3] $\max S$ belongs to $S$ and is an upper bound for $S$, and likewise $\min S$ ([[def-max-min]]); a nonempty finite set of reals has a maximum, and by reflection a minimum ([[lem-finite-set-has-max]]).

[L4] For finite sums: if $a_k \le b_k$ for all $k<n$ then $\sum_{k<n} a_k \le \sum_{k<n} b_k$; if every $a_k \ge 0$ then every single term satisfies $a_j \le \sum_{k<n} a_k$; and $\sum_{k<n}\lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] $\sqrt{a}$ is the unique nonnegative real with $(\sqrt a)^2 = a$, for $a \ge 0$ ([[thm-of-square-roots]]); $t^2 \ge 0$ ([[lem-of-square-positive]]); $|t|^2 = t^2$ and $|t| \ge 0$ ([[lem-of-abs-value]]); and for $a, b \ge 0$ one has $a \le b$ if and only if $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L6] A function on a natural number $n$ whose values are nonempty sets has a choice function for its family of values ([[lem-finite-choice]]).

[L7] The canonical natural $n \cdot 1_{\mathbb{R}}$ is positive and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing for $n \ge 1$ ([[lem-of-naturals-positive]]); multiplying an inequality by a positive element preserves it ([[lem-of-sign-rules]], claim 4).

[L8] Lipschitz equivalent metrics are topologically equivalent, that is they have the same metric topology ([[thm-metric-equivalence-hierarchy]], claims 1 and 2; [[def-equivalent-metrics]]).

## Proof

**Proof technique:** direct.

1.1 For $y \in \mathbb{R}^n$: $d_\infty(x,y) < r$ if and only if $|x_k - y_k| < r$ for every $k < n$, since by [L3] the maximum is one of the values $|x_k-y_k|$ and is an upper bound for all of them. [A1, L3]

1.2 For $t \in \mathbb{R}$ and $r > 0$: $|t - y_k| < r$ if and only if $y_k \in (t-r, t+r)$, by [L1]. [L1]

1.3 Write $t_k := |x_k - y_k|$ and $M := d_\infty(x,y) = \max\{t_k : k<n\}$. Then $t_j \le M$ for every $j < n$ and $M = t_{j_0}$ for some $j_0 < n$, by [L3]. [A1, L3]

1.4 $d_2(x,y)^2 = \sum_{k<n}(x_k-y_k)^2$ by [L5], and $(x_k-y_k)^2 = t_k^2 \ge 0$ by [L5]. [L5]

1.5 $n \le n^2$ as reals: for $n \ge 1$ the canonical natural satisfies $\iota(1) = 1 \le \iota(n)$ by [L7], so either $\iota(n) = 1$, in which case $\iota(n) = \iota(n)^2 = 1$, or $1 < \iota(n)$, in which case multiplying that strict inequality by $\iota(n) > 0$ gives $\iota(n) < \iota(n)^2$ by [L7]. [L7]

1.6 Conversely let $B = \prod_{k<n} U_k$ be a box with every $U_k$ open in $\mathbb{R}$ and let $x \in B$. For each $k<n$ the set $\{\, \rho \in \mathbb{R} : \rho > 0,\ (x_k-\rho,\ x_k+\rho) \subseteq U_k \,\}$ is nonempty by [L1], so [L6] supplies $\rho_k$ in it for every $k<n$; put $r := \min\{\rho_k : k<n\}$, which exists and is positive by [L3]. [A2, L1, L3, L6, choose]

2.1 $d_1(x,y) = \sum_{k<n} t_k \le \sum_{k<n} M = n M$, using $t_k \le M$ from step 1.3 and [L4]. [step 1.3, L4]

2.2 $M = t_{j_0} \le \sum_{k<n} t_k = d_1(x,y)$, since every $t_k \ge 0$ by [L5] and a single nonnegative term is at most the sum, by [L4]. [step 1.3, L4, L5]

2.3 $B_{d_\infty}(x,r) = \prod_{k<n}(x_k - r,\ x_k + r)$: by step 1.1 a point $y$ lies in the ball exactly when $|x_k-y_k| < r$ for every $k<n$, and by step 1.2 that says exactly $y_k \in (x_k-r, x_k+r)$ for every $k < n$. [step 1.1, step 1.2]

2.4 $M^2 = t_{j_0}^2 \le \sum_{k<n} t_k^2 = d_2(x,y)^2$ by steps 1.3 and 1.4 with [L4], and both $M$ and $d_2(x,y)$ are nonnegative by [L2] and [L5], so $M \le d_2(x,y)$ by [L5]. [step 1.3, step 1.4, L2, L4, L5]

2.5 $d_2(x,y)^2 = \sum_{k<n} t_k^2 \le \sum_{k<n} M^2 = n M^2 \le n^2 M^2 = (nM)^2$, using $t_k \le M$ with [L5] and [L4], then step 1.5 with $M^2 \ge 0$; since $d_2(x,y) \ge 0$ and $nM \ge 0$, [L5] gives $d_2(x,y) \le n M$. [step 1.3, step 1.4, step 1.5, L4, L5]

3.1 Every $d_\infty$-ball is a box with open factors, by step 2.3 and [L1], hence a basic open set of the product topology by [A2]; so every $d_\infty$-open set is product-open, by [L2] and [A2]. [step 2.3, A2, L1, L2]

3.2 With $r$ as in step 1.6: $B_{d_\infty}(x,r) = \prod_{k<n}(x_k-r, x_k+r) \subseteq \prod_{k<n}(x_k-\rho_k, x_k+\rho_k) \subseteq B$, since $r \le \rho_k$ for every $k$ by [L3]. [step 2.3, step 1.6, L3]

3.3 Steps 2.1, 2.2, 2.4 and 2.5 give $d_\infty \le d_1 \le n\,d_\infty$ and $d_\infty \le d_2 \le n\,d_\infty$ at every pair of points, which is claim 2, the constants $1$ and $n$ being positive by [L7]. [step 2.1, step 2.2, step 2.4, step 2.5, L7]

4.1 By steps 1.6 and 3.2 every basic open set of the product topology is $d_\infty$-open by [L2], hence every product-open set is $d_\infty$-open; with step 3.1 this gives claim 1. [step 3.1, step 1.6, step 3.2, A2, L2]

5.1 By step 3.3 and [L8] the metrics $d_1$, $d_2$ and $d_\infty$ have the same metric topology, which by step 4.1 is the product topology; so all three induce it and $\mathbb{R}^n$ with the product topology is metrizable. This is claim 3, and with steps 4.1 and 3.3 all three claims are proved. [step 3.3, step 4.1, L8] ∎

## Remarks

- **This item exists to stop one symbol meaning two things.** Before it,
  "$\mathbb{R}^2$" could denote the product of two copies of the real line or the
  metric space of [[lem-metrics-on-rn]], and "open in $\mathbb{R}^2$" would have
  had two readings. Claim 3 says they are one space, so every statement about
  open sets, closures, convergence and continuity in $\mathbb{R}^n$ proved on
  either side transfers verbatim to the other.

- **The $d_\infty$-ball is the natural object here and the $d_2$-ball is not.**
  The proof works with $d_\infty$ because its balls *are* the basic boxes; for
  $d_2$ the corresponding computation would need a round ball inscribed in a box
  and a box inscribed in a round ball, which is the content of the inequalities
  of claim 2 read geometrically.

- **Choice is spent only on finitely many radii.** Step 1.6 selects one radius per
  coordinate, and there are $n$ of them, so [[lem-finite-choice]] suffices and no
  form of the Axiom of Choice is used anywhere in this item; step 3.2 only uses the
  radius already built there.
````

### `thm-componentwise-limits-and-continuity`

````markdown
---
id: thm-componentwise-limits-and-continuity
kind: theorem
title: "A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions"
status: published
origin: session
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, def-metric-continuity, def-function-limit, def-limit-point-r, lem-finite-sum-laws, def-finite-sum, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-finite-choice, lem-of-abs-value, def-metric-space, lem-real-line-is-a-metric-space, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$; a metric space $(X,d_X)$, a subset $A \subseteq X$, a point $a \in A$ and functions $f, g : A \to \mathbb{R}^{m}$; a real $\lambda$; and a real $\varepsilon > 0$.

[L1] Continuity and limits of vector-valued functions in the $\varepsilon$-$\delta$ form, the coordinate projections $\pi_i$, and $|y_i| \le \lVert y\rVert_2$ for $i<m$ ([[def-vector-valued-functions-limits-and-continuity]], [[def-metric-continuity]], [[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

[L2] The comparison $\lVert y\rVert_2 \le \lVert y\rVert_1 = \sum_{i<m}|y_i|$, and $N(y) \le C\lVert y\rVert_1 \le C\sqrt{\iota(m)}\lVert y\rVert_2$ with $C := \max\{N(e_i) : i<m\} \ge 0$, together with $|N(y)-N(z)| \le N(y-z)$, all for $m \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1, 2, 3, [[def-p-norms-on-rn]], [[lem-standard-basis-of-f-n]]).

[L3] The norm axioms for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and $\lVert u-v\rVert_2 = d_2(u,v)$.

[L4] Cauchy-Schwarz: $|\langle u,v\rangle| \le \lVert u\rVert_2\lVert v\rVert_2$, together with bilinearity and symmetry of the inner product ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L5] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{i<m}\mu = \iota(m)\mu$, a sum of nonnegative terms is nonnegative, and each single term is at most such a sum.

[L6] $\iota(m) > 0$ for $m \ge 1$, and $u>0$ gives $u^{-1}>0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L7] A nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and a family of nonempty sets indexed by a natural number has a choice function, this being a theorem of ZF ([[lem-finite-choice]]), which is what licenses picking one $\delta_i$ for each $i<m$.

[L8] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|st| = |s||t|$, and $|s+t| \le |s|+|t|$.

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{m}$: $|y_i| \le \lVert y\rVert_2$ for each $i<m$, and $\lVert y\rVert_2 \le \sum_{i<m}|y_i|$. [L1, L2]

1.2 If $a_i < b_i$ for every $i<m$ and $m \ge 1$, then $\sum_{i<m}a_i < \sum_{i<m}b_i$: the list $i \mapsto b_i - a_i$ has positive terms, so its sum is at least its term at index $0$, hence positive, and additivity gives the strict inequality. [L5, L6]

1.3 For each $i<m$ the set of positive reals $\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\delta_0,\dots,\delta_{m-1}$ simultaneously, with no choice principle used. [L7]

1.4 For $f+g$: given $\varepsilon > 0$, pick $\delta_1, \delta_2 > 0$ for the tolerance $\varepsilon/\iota(2)$ at $f$ and at $g$ and put $\delta := \min\{\delta_1,\delta_2\}$; then for $d_X(x,a) < \delta$, $\lVert (f+g)(x)-(f+g)(a)\rVert_2 = \lVert (f(x)-f(a)) + (g(x)-g(a))\rVert_2 \le \lVert f(x)-f(a)\rVert_2 + \lVert g(x)-g(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L7]

1.5 For $\lambda f$: if $\lambda = 0$ then $\lambda f$ is constant and every $\delta$ serves; otherwise $|\lambda| > 0$, and a $\delta$ for the tolerance $\varepsilon/|\lambda|$ at $f$ gives $\lVert \lambda f(x) - \lambda f(a)\rVert_2 = |\lambda|\,\lVert f(x)-f(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L8]

1.6 For $N \circ f$: by [L2], $|N(f(x)) - N(f(a))| \le N\bigl(f(x)-f(a)\bigr) \le C\sqrt{\iota(m)}\,\lVert f(x)-f(a)\rVert_2$; so a $\delta$ for the tolerance $\varepsilon/(C\sqrt{\iota(m)}+1)$ at $f$ serves for $N\circ f$. [L1, L2, L6]

1.7 For $\langle f,g\rangle$: first take $\delta_0 > 0$ with $\lVert g(x)-g(a)\rVert_2 < 1$ for $d_X(x,a) < \delta_0$, so that $\lVert g(x)\rVert_2 \le \lVert g(x)-g(a)\rVert_2 + \lVert g(a)\rVert_2 < B := \lVert g(a)\rVert_2 + 1$ there. [L1, L3]

2.1 Suppose $f$ is continuous at $a$ and fix $i<m$. Given $\varepsilon > 0$, take $\delta$ from the definition; for $x \in A$ with $d_X(x,a) < \delta$, step 1.1 gives $|f_i(x)-f_i(a)| \le \lVert f(x)-f(a)\rVert_2 < \varepsilon$. So $f_i$ is continuous at $a$. [step 1.1, L1]

2.2 Conversely suppose every $f_i$ is continuous at $a$. Given $\varepsilon > 0$, the real $\varepsilon/\iota(m)$ is positive; by step 1.3 choose $\delta_i > 0$ for each $i<m$ with $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$ whenever $x \in A$ and $d_X(x,a) < \delta_i$, and put $\delta := \min\{\delta_0,\dots,\delta_{m-1}\} > 0$. [step 1.3, L1, L6, L7]

2.3 By bilinearity, $\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle = \langle f(x)-f(a),\, g(x)\rangle + \langle f(a),\, g(x)-g(a)\rangle$, so Cauchy-Schwarz and step 1.7 give $\bigl|\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle\bigr| \le B\,\lVert f(x)-f(a)\rVert_2 + \lVert f(a)\rVert_2\,\lVert g(x)-g(a)\rVert_2$ for every $x \in A$ with $d_X(x,a) < \delta_0$. [step 1.7, L4, L8]

3.1 For $x \in A$ with $d_X(x,a) < \delta$: each $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$, so by steps 1.1 and 1.2, $\lVert f(x)-f(a)\rVert_2 \le \sum_{i<m}|f_i(x)-f_i(a)| < \sum_{i<m}\varepsilon/\iota(m) = \varepsilon$. Hence $f$ is continuous at $a$, and clause 1 is proved. [step 1.1, step 1.2, step 2.2, L5, L6]

3.2 Clause 2 is the same two estimates with $f(a)$ replaced by $L$, $f_i(a)$ by $L_i$, and the condition $d_X(x,a) < \delta$ by $0 < |x-c| < \delta$: step 1.1 gives $|f_i(x)-L_i| \le \lVert f(x)-L\rVert_2$ for the forward direction, and steps 1.1, 1.2 give $\lVert f(x)-L\rVert_2 \le \sum_{i<m}|f_i(x)-L_i| < \varepsilon$ for the converse, with $\delta$ the minimum of $m$ radii obtained as in step 2.2. [step 1.1, step 1.2, step 1.3, L1, L5, L6, L7]

3.3 Put $P := B + \lVert f(a)\rVert_2 + 1 > 0$ and take $\delta \le \delta_0$ positive with both $\lVert f(x)-f(a)\rVert_2 < \varepsilon/P$ and $\lVert g(x)-g(a)\rVert_2 < \varepsilon/P$ for $d_X(x,a) < \delta$; then step 2.3 bounds the difference by $(B + \lVert f(a)\rVert_2)\varepsilon/P < \varepsilon$, so $\langle f,g\rangle$ is continuous at $a$. [step 1.7, step 2.3, L1, L6, L7]

4.1 Steps 1.4, 1.5, 1.6 and 3.3 are clause 3, and with steps 3.1 and 3.2 all three clauses are proved. [step 3.1, step 3.2, step 1.4, step 1.5, step 1.6, step 3.3] ∎

## Remarks

- **Why the algebra is proved here rather than quoted.** The published [[thm-algebra-of-continuous-functions]] and [[thm-algebra-of-function-limits]] are stated for real-valued functions on a subset of $\mathbb{R}$, and the domain in clause 3 is a subset of an arbitrary metric space; quoting them for a metric domain would be a citation to an item for a claim it does not make. The estimates in steps 1.4 to 3.3 are the same ones, written out. When the domain **is** a subset of $\mathbb{R}$, clause 1 and [[lem-real-and-metric-notions-agree]] identify the two readings, and the published theorems may then be used on the components.

- **Clause 3 is what makes the mean value inequality work.** The auxiliary function $t \mapsto \langle u, f(t)\rangle$ of [[thm-mean-value-inequality]] is continuous exactly by the inner-product part of clause 3, applied with the constant function $u$.

- **Nothing here is a sequential argument, so no choice principle is used** beyond the finitely many simultaneous selections of steps 1.3, 2.2 and 3.3, which are covered by [[lem-finite-choice]], a theorem of ZF.
````

### `thm-continuity-characterisations-top`

````markdown
---
id: thm-continuity-characterisations-top
kind: theorem
title: "For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, thm-closure-characterisation-top, def-topology-basis-subbasis, thm-basis-criterion, def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "five equivalent forms of continuity"
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
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## Facts & Assumptions

**Given:** Topological spaces $(X,\mathcal{T}_X)$ and $(Y,\mathcal{T}_Y)$, a function $f : X \to Y$, a subbasis $\mathcal{S}$ for $\mathcal{T}_Y$, subsets $A \subseteq X$ and $V, F \subseteq Y$. Preimages satisfy $f^{-1}[Y \setminus W] = X \setminus f^{-1}[W]$, $f^{-1}[\bigcup_i W_i] = \bigcup_i f^{-1}[W_i]$ and $f^{-1}[\bigcap_i W_i] = \bigcap_i f^{-1}[W_i]$ for every family, with $f^{-1}[Y] = X$ for the empty intersection.

[A1] $f$ is continuous at $x$ when for every open $V \ni f(x)$ there is an open $U \ni x$ with $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[A2] A set is closed exactly when its complement is open; a set is open exactly when it is a union of open sets containing each of its points ([[def-topological-space]]).

[L1] The topology generated by $\mathcal{S}$ has as a basis the family $\mathcal{B}_{\mathcal{S}}$ of intersections of finitely many members of $\mathcal{S}$, the empty intersection being $Y$; every open set is a union of members of $\mathcal{B}_{\mathcal{S}}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ ([[thm-closure-characterisation-top]], clause (c)).

[L3] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and let $x \in f^{-1}[V]$, so $f(x) \in V$; continuity at $x$ gives an open $U \ni x$ with $f[U] \subseteq V$, that is $U \subseteq f^{-1}[V]$. As $x$ was arbitrary, $f^{-1}[V]$ is a union of open sets, hence open. [A1, A2]

1.2 (b) implies (a): let $x \in X$ and let $V$ be open with $f(x) \in V$; then $U := f^{-1}[V]$ is open, contains $x$, and satisfies $f[U] \subseteq V$. [A1]

1.3 (b) and (c) are equivalent: $F \subseteq Y$ is closed exactly when $Y \setminus F$ is open, and $f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]$, so $f^{-1}[F]$ is closed exactly when $f^{-1}[Y \setminus F]$ is open; as $F$ ranges over the closed sets, $Y \setminus F$ ranges over the open sets. [given, A2]

1.4 (b) implies (d): every $S \in \mathcal{S}$ is open, $\mathcal{S}$ being contained in the topology it generates. [L1]

1.5 (d) implies (b): let $V \subseteq Y$ be open; by [L1] $V$ is a union of sets of the form $S_1 \cap \dots \cap S_n$ with $n \ge 0$ and $S_i \in \mathcal{S}$, and $f^{-1}$ turns unions into unions and intersections into intersections, with $f^{-1}[Y] = X$ for $n = 0$; so $f^{-1}[V]$ is a union of finite intersections of the open sets $f^{-1}[S_i]$ together with $X$, hence open. [given, L1, A2]

1.6 (e) implies (c): let $F \subseteq Y$ be closed and put $A := f^{-1}[F]$; then $f[A] \subseteq F$, so $f[\overline{A}] \subseteq \overline{f[A]} \subseteq \overline{F} = F$ by (e), monotonicity of the closure and [L3]; hence $\overline{A} \subseteq f^{-1}[F] = A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, so $A$ is closed. [L3]

2.1 (b) implies (e): let $A \subseteq X$ and $x \in \overline{A}$, and let $V$ be open with $f(x) \in V$; then $f^{-1}[V]$ is open and contains $x$, so it meets $A$ by [L2], say at $a$; then $f(a) \in V \cap f[A]$, so $V$ meets $f[A]$. As $V$ was arbitrary, $f(x) \in \overline{f[A]}$ by [L2]. [step 1.1, L2]

3.1 Steps 1.1 and 1.2 make (a) and (b) equivalent; step 1.3 makes (b) and (c) equivalent; steps 1.4 and 1.5 make (b) and (d) equivalent; step 2.1 gives (b) implies (e) and step 1.6 gives (e) implies (c), which closes the cycle through (c) and (b). Hence all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 1.6] ∎

## Remarks

- **Only (a) is pointwise.** Conditions (b) to (e) are global, and none of them has a pointwise version that is equivalent to continuity at a single point: the preimage of an open set containing $f(x)$ can fail to be open while still being a neighbourhood of $x$, which is exactly what continuity at $x$ asserts.

- **The inclusion in (e) may be strict for a continuous map.** For the inclusion of $(0,1)$ into $\mathbb{R}$ and $A = (0,1)$, the image of the closure is $(0,1)$ while the closure of the image is $[0,1]$. Equality for all $A$ is a strictly stronger condition, equivalent to $f$ being a closed map, and closed maps are defined three items below. Note that no map into a **discrete** space can witness strictness: there every subset is closed, so $f[\overline{A}] = f[A] = \overline{f[A]}$ always.

- **What the theorem does not say.** It says nothing about images of open sets: a continuous map need not carry open sets to open sets, and the failure is exactly what separates a continuous bijection from a homeomorphism. That separation is recorded on this page as a false statement with an explicit two-point witness.
````

### `thm-product-universal-property`

````markdown
---
id: thm-product-universal-property
kind: theorem
title: "A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-initial-and-final-characteristic-properties,
       def-initial-and-final-topology, def-continuous-map-top,
       def-homeomorphism-and-open-maps, def-axiom-of-choice, def-choice-function,
       lem-finite-choice, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "universal property of the product; projections are open"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

## Facts & Assumptions

**Given:** Topological spaces $(X_i,\mathcal{T}_i)_{i \in I}$, the product $P = \prod_{i \in I} X_i$ with the product topology and the projections $\pi_j(x) = x_j$, a space $Z$ and a function $h : Z \to P$, and an index $j \in I$.

[A1] The product topology on $P$ is the initial topology of $(\pi_i)_{i \in I}$, and a basis for it is the family of boxes $\prod_i U_i$ with every $U_i$ open and $U_i = X_i$ for all but finitely many $i$; a basis for the box topology is the family of all boxes $\prod_i U_i$ with every $U_i$ open ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is an open map when $f[U]$ is open in the target for every open $U$ in the source ([[def-homeomorphism-and-open-maps]]).

[L1] For a topology given as an initial topology of a family $(f_i)$: each $f_i$ is continuous, the topology is the coarsest with that property, and a map $h$ into it is continuous exactly when every $f_i \circ h$ is ([[thm-initial-and-final-characteristic-properties]], claims 1 and 2; [[def-initial-and-final-topology]], [[def-continuous-map-top]]).

[L2] If $F$ is a function with domain a natural number $n$ whose values are nonempty sets, then the family of its values has a choice function ([[lem-finite-choice]], [[def-choice-function]]).

[L3] If every member of a family of sets is nonempty then the product of the family is nonempty; this is the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]).

[L4] The image of a union is the union of the images, and an arbitrary union of open sets is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] the product topology is an initial topology, so [L1] gives claim 1 and claim 2 at once, the defining family being $(\pi_i)_{i \in I}$. [A1, L1]

1.2 For a family of functions $h_i : Z \to X_i$ the assignment $h(z)(i) := h_i(z)$ defines a function $Z \to P$, since $h(z)$ has domain $I$ and $h(z)(i) = h_i(z) \in X_i$; it satisfies $\pi_i \circ h = h_i$, and any $h'$ with $\pi_i \circ h' = h_i$ for every $i$ satisfies $h'(z)(i) = h_i(z) = h(z)(i)$ for all $z$ and $i$, hence $h' = h$. [given]

1.3 Let $B = \prod_i U_i$ be a box with every $U_i$ open. If $B = \varnothing$ then $\pi_j[B] = \varnothing$. If $B \ne \varnothing$, fix $b \in B$; then $\pi_j[B] = U_j$, since $\pi_j[B] \subseteq U_j$ by definition, and for $u \in U_j$ the function $y$ with $y_j := u$ and $y_i := b_i$ for $i \ne j$ lies in $B$ and has $\pi_j(y) = u$. [A1, choose]

1.4 Assume every $X_i$ is nonempty and $I$ is a natural number $n$. By [L2] applied to $i \mapsto X_i$ there is a choice function $g$ for the family of values, and $x(i) := g(X_i)$ defines a point of $P$; so $P \ne \varnothing$. [L2]

1.5 Assume every $X_i$ is nonempty and $I$ is arbitrary. By [L3] the product $P$ is nonempty. [L3]

2.1 Both the box topology and the product topology have a basis consisting of boxes, by [A1], and the image of a union of basic sets is the union of their images; so by step 1.3 the image under $\pi_j$ of any open set of either topology is a union of sets each of which is $\varnothing$ or an open $U_j \subseteq X_j$, hence open. This is claim 3. [step 1.3, A1, A2, L4]

2.2 Assume every $X_i$ is nonempty and let $t \in X_j$. By step 1.4 when $I$ is a natural number, and by step 1.5 in general, there is a point $p \in P$; the function $y$ with $y_j := t$ and $y_i := p_i$ for $i \ne j$ then lies in $P$ and satisfies $\pi_j(y) = t$. So $\pi_j$ is surjective, which is claim 4. [step 1.4, step 1.5]

3.1 Step 1.1 gives claims 1 and 2, step 1.2 gives the bijection between maps into $P$ and families of component maps, step 2.1 gives claim 3 and step 2.2 gives claim 4. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **Exactly where choice is spent, and where it is not.** Openness of the
  projections (claim 3) is choice free: step 1.3 uses a *single* point of the box
  in question, which is given by the assumption that the box is nonempty, and
  builds the required preimage from it by changing one coordinate. Surjectivity
  (claim 4) is different, because there the point has to be produced from nothing
  but nonemptiness of the factors, and for an infinite index set that is the
  Axiom of Choice itself.

- **The characteristic property is what makes the product topology the right
  one.** The box topology has no analogue of claim 2: a map into a box-topologised
  product may have all components continuous and fail to be continuous, and the
  companion page exhibits the diagonal of $\mathbb{R}^{\mathbb{N}}$ doing exactly
  that.

- **Openness does not survive to closedness.** A projection is always open and is
  in general not closed, and the standard witness, the hyperbola in
  $\mathbb{R}^2$, is worked in the false statement on this page. There is no
  asymmetry of taste here: images of open boxes are computed coordinatewise,
  while a closed set of the product need not be a union of closed boxes at all.
````

