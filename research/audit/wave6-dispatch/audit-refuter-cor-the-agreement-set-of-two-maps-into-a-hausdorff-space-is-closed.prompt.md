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

## Target item — `cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`

Normalized current SHA-256: `3c7c3cb49bed460d4c4284bbe29043823f79eec6b9ef21177ad16f9f5b4eb626`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed
kind: corollary
title: "For continuous $f, g : Z \\to Y$ with $Y$ Hausdorff the agreement set $\\{ z \\in Z : f(z) = g(z) \\}$ is closed in $Z$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hausdorff-iff-the-diagonal-is-closed, lem-the-diagonal-map-is-an-embedding,
       def-the-diagonal-of-a-space, def-hausdorff-space, def-continuous-map-top,
       thm-continuity-characterisations-top, def-standard-topologies]
justified_by: []
aliases: [cor-equaliser-is-closed-top]
landmark: true
short: "the agreement set of two maps into a Hausdorff space is closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "General Topology Notes (UC Riverside)"
      url: "https://math.ucr.edu/~res/math205A-2014/gentop-notes.pdf"
pipeline_run: null
---

## Statement

Let $Z$ be a topological space, let $Y$ be a Hausdorff space
([[def-hausdorff-space]]) and let $f, g : Z \to Y$ be continuous
([[def-continuous-map-top]]). Then the **agreement set**

$$E(f,g) \;:=\; \{\, z \in Z : f(z) = g(z) \,\}$$

is closed in $Z$.

No hypothesis is placed on $Z$: the separation hypothesis is on the **codomain**
alone, and it is not decoration. Let $Y_0 = \{a,b\}$ with $a \ne b$ carry the
indiscrete topology ([[def-standard-topologies]]), which is not Hausdorff. Every
function $Z \to Y_0$ is continuous, the only preimages to check being those of
$\varnothing$ and $Y_0$, namely $\varnothing$ and $Z$. So for **any** subset
$S \subseteq Z$ the constant map $f_0 \equiv a$ and the map $g_0$ taking the
value $a$ on $S$ and $b$ off $S$ are continuous with $E(f_0,g_0) = S$, closed or
not.

## Facts & Assumptions

**Given:** Topological spaces $Z$ and $Y$ with $Y$ Hausdorff, continuous maps $f, g : Z \to Y$, and the product $Y \times Y$ with the product topology.

[A1] $E(f,g) = \langle f, g \rangle^{-1}[\Delta_Y]$, where $\langle f, g \rangle : Z \to Y \times Y$ is the pairing and $\Delta_Y$ the diagonal ([[def-the-diagonal-of-a-space]]).

[L1] The pairing $\langle f, g \rangle$ is continuous whenever $f$ and $g$ are ([[lem-the-diagonal-map-is-an-embedding]], claim 1).

[L2] $\Delta_Y$ is closed in $Y \times Y$, since $Y$ is Hausdorff ([[thm-hausdorff-iff-the-diagonal-is-closed]], [[def-hausdorff-space]]).

[L3] A map is continuous if and only if the preimage of every closed set is closed ([[thm-continuity-characterisations-top]], clauses (a) and (c), [[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 $\langle f, g \rangle : Z \to Y \times Y$ is continuous. [L1]

1.2 $\Delta_Y$ is closed in $Y \times Y$. [L2]

2.1 $E(f,g) = \langle f, g \rangle^{-1}[\Delta_Y]$ is the preimage of a closed set under a continuous map, hence closed in $Z$. [step 1.1, step 1.2, A1, L3] ∎

## Remarks

- **Why the diagonal criterion is the right tool here.** The condition "$f(z) = g(z)$" is a condition on the *pair* of values, so it becomes a membership condition once the two maps are packaged into one map into the square; the criterion then converts the separation hypothesis on $Y$ into the closedness of the set that condition names. Nothing is proved twice: the whole content is [[thm-hausdorff-iff-the-diagonal-is-closed]] together with the preimage identity of [[def-the-diagonal-of-a-space]].

- **Both hypotheses are used, and only these.** Continuity of $f$ and $g$ enters only through [L1], and the Hausdorff condition only through [L2]. In particular no countability, compactness or separation hypothesis on $Z$ appears anywhere in the argument.

- **The complement is what the statement is often used for.** $Z \setminus E(f,g)$ is open, so if $f$ and $g$ differ at a point they differ throughout some open neighbourhood of it. Equivalently, $E(f,g)$ contains the closure of every subset of $Z$ on which $f$ and $g$ agree, which is the form in which a statement about a dense set is obtained from this one.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-the-diagonal-of-a-space",
      "source_section": "Definition",
      "quote": "no hypothesis on $f$ and $g$ is needed for the pairing to be defined, and continuity of the pairing is exactly continuity of both components, which is again that claim. In this notation $$\\delta_X = \\langle \\mathrm{id}_X, \\mathrm{id}_X \\rangle ,$$ so the diagonal map is a special case of the pairing and needs no separate treatment. **The preimage identity that every later proof uses.** For $f, g : Z \\to Y$, $$\\langle f, g \\rangle^{-1}[\\Delta_Y] \\;=\\;",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-the-diagonal-map-is-an-embedding",
      "source_section": "Statement",
      "quote": "Then: 1. **The pairing is continuous exactly when both components are.** For functions $f : Z \\to X$ and $g : Z \\to Y$, the pairing $\\langle f, g \\rangle$ is continuous if and only if $f$ and $g$ are continuous ([[def-continuous-map-top]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-hausdorff-iff-the-diagonal-is-closed",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space and give $X \\times X$ the product topology ([[def-product-topology]]). Then $X$ is Hausdorff ([[def-hausdorff-space]]) if and only if the diagonal $\\Delta_X$ ([[def-the-diagonal-of-a-space]]) is closed in $X \\times X$:",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]). - **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$. - **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$. - **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$. - **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$, closures being taken in $X$ and in $Y$ respectively ([[def-interior-closure-boundary-top]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "$f$ is **continuous** if it is continuous at every point of $X$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$\\langle f, g \\rangle : Z \\to Y \\times Y$ is continuous. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$\\Delta_Y$ is closed in $Y \\times Y$. [L2]",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "$E(f,g) = \\langle f, g \\rangle^{-1}[\\Delta_Y]$ is the preimage of a closed set under a continuous map, hence closed in $Z$. [step 1.1, step 1.2, A1, L3] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "A1",
        "L3"
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
      "evidence": "statement and step 1.1: when the two maps coincide, the agreement set is the whole domain and the same inverse-image identity applies"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
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
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "declared_target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-the-diagonal-map-is-an-embedding",
    "declared_target": "lem-the-diagonal-map-is-an-embedding",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-the-diagonal-of-a-space",
    "declared_target": "def-the-diagonal-of-a-space",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
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
    "source": "cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (7)

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
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
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-standard-topologies`

````markdown
---
id: def-standard-topologies
kind: definition
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-countable, lem-subset-of-countable, thm-countable-union-of-countable,
       def-equinumerous, def-injection-surjection-bijection, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive, thm-induction-principle]
justified_by: []
aliases: [def-discrete-topology, def-indiscrete-topology, def-cofinite-topology,
          def-cocountable-topology, def-particular-point-topology, def-sierpinski-space]
landmark: true
short: "discrete, indiscrete, cofinite, cocountable, particular point, Sierpinski"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

## Remarks

- **Two degenerate collapses.** If $X$ is finite then the cofinite topology is
  the discrete one, since every subset then has finite complement by fact (i)
  above; if $X$ is at most countable the cocountable topology is discrete for the
  same reason. Both families are therefore interesting only on an infinite,
  respectively uncountable, set, and every statement made about them below names
  that hypothesis.

- **Where the two extremes sit in the comparison order.** The discrete topology
  is the finest and the indiscrete the coarsest topology on $X$
  ([[def-topological-space]]): every topology is a subfamily of $\mathcal{P}(X)$
  and contains $\varnothing$ and $X$. Every other topology on $X$ lies between
  them, and the cofinite topology is coarser than the cocountable one, because a
  finite set is at most countable.

- **No choice principle is needed for any of the six, despite the citation.**
  The only appeal above that carries a choice hypothesis is
  [[thm-countable-union-of-countable]], whose statement assumes
  $\mathrm{AC}_\omega$, and it is used for a union of **two** sets only, padded
  with copies of $\varnothing$. That instance is provable in ZF alone, by
  interleaving two *given* enumerations, exactly as
  [[cor-irrationals-uncountable]] records for the union of the rationals and the
  irrationals; the general theorem is cited because it is the form in which this
  library states the union result, not because the strength is needed. Nothing
  about the cocountable topology depends on countable choice.

- **The Sierpinski point that is open is a genuine choice of labelling.** Both
  $\{\varnothing,\{b\},S\}$ and $\{\varnothing,\{a\},S\}$ are topologies, and they
  are carried to each other by the transposition of $a$ and $b$; this library
  fixes the first and always names the open point.
````

### `def-the-diagonal-of-a-space`

````markdown
---
id: def-the-diagonal-of-a-space
kind: definition
title: "The diagonal $\\Delta_X \\subseteq X \\times X$, the diagonal map $\\delta_X$, and the pairing $\\langle f, g \\rangle$ of two maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-product-topology, thm-product-universal-property,
       def-continuous-map-top, def-subspace-topology-top, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-diagonal-top, def-pairing-of-two-maps]
landmark: true
short: "the diagonal, the diagonal map, the pairing of two maps"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Diagonal embedding (PlanetMath)"
      url: "https://planetmath.org/diagonalembedding"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]). Throughout, $X \times Y$ is the binary product
$\prod_{i<2} X_i$ with $X_0 = X$ and $X_1 = Y$ ([[def-product-topology]]),
carrying the product topology; a point of it is a **function** $z$ on the von
Neumann natural $2 = \{0,1\}$, written $(z_0, z_1)$, and $\pi_0, \pi_1$ are the
two projections.

**The basis used throughout.** For the index set $2$ the product basis and the
box basis coincide, since a box $\prod_{i<2} U_i$ has all but finitely many
factors unrestricted for the trivial reason that it has only two
([[def-product-topology]]). So

$$\{\, U \times V : U \in \mathcal{T},\ V \in \mathcal{T}_Y \,\}$$

is a basis for the product topology on $X \times Y$, and every statement below
that tests a basic open set tests a box of two open sets.

**The diagonal.** The **diagonal** of $X$ is

$$\Delta_X \;:=\; \{\, z \in X \times X : z_0 = z_1 \,\} \;=\; \{\, (x,x) : x \in X \,\} ,$$

the second description being the first read through the definition of a point of
the product as a function on $2$. It is a subset of $X \times X$ and is given the
subspace topology ([[def-subspace-topology-top]]) whenever it is regarded as a
space.

**The diagonal map.** The **diagonal map** of $X$ is

$$\delta_X : X \to X \times X, \qquad \delta_X(x) := (x,x) ,$$

that is, the function sending $x$ to the constant function $2 \to X$ with value
$x$. Its two components are $\pi_0 \circ \delta_X = \mathrm{id}_X$ and
$\pi_1 \circ \delta_X = \mathrm{id}_X$, and by claim 2 of
[[thm-product-universal-property]] it is the *unique* function $X \to X \times X$
with those two components. The same claim makes it **continuous**
([[def-continuous-map-top]]), the identity being continuous. Its image is
$\Delta_X$, and it is injective, since $\delta_X(x) = \delta_X(x')$ forces
$x = x'$ by reading the coordinate at $0$. Whether $\delta_X$ is an **embedding**
onto $\Delta_X$ ([[def-homeomorphism-and-open-maps]]) is not asserted here; it is
the content of the next item.

**The pairing of two maps.** For functions $f : Z \to X$ and $g : Z \to Y$ on a
common domain, the **pairing** is

$$\langle f, g \rangle : Z \to X \times Y, \qquad \langle f, g \rangle(z) := (f(z), g(z)) .$$

By claim 2 of [[thm-product-universal-property]] it is the unique function
$Z \to X \times Y$ with $\pi_0 \circ \langle f, g \rangle = f$ and
$\pi_1 \circ \langle f, g \rangle = g$; no hypothesis on $f$ and $g$ is needed
for the pairing to be defined, and continuity of the pairing is exactly
continuity of both components, which is again that claim. In this notation

$$\delta_X = \langle \mathrm{id}_X, \mathrm{id}_X \rangle ,$$

so the diagonal map is a special case of the pairing and needs no separate
treatment.

**The preimage identity that every later proof uses.** For $f, g : Z \to Y$,

$$\langle f, g \rangle^{-1}[\Delta_Y] \;=\; \{\, z \in Z : f(z) = g(z) \,\} ,$$

directly from the definitions above: $\langle f, g \rangle(z) \in \Delta_Y$ says
that the function $(f(z), g(z))$ on $2$ takes the same value at $0$ and at $1$.

## Remarks

- **The diagonal is a subset of a product, and the diagonal map is a function
  into it; they are different objects with the same name.** The set $\Delta_X$
  records which pairs are repetitions, and the map $\delta_X$ produces the
  repetitions. Both are needed: the closedness criterion of this page is about the
  set, and the transport of properties from $X$ to its copy inside the square is
  about the map.

- **Nothing here depends on a choice principle.** The product $X \times X$ is a
  binary product, and a point of it is exhibited by naming its two coordinates;
  the nonemptiness of an arbitrary product, which is where choice enters
  ([[thm-product-universal-property]], claim 4), is never invoked for a binary
  product with a named point.

- **Why the box description is recorded at the top.** The criterion proved on
  this page tests basic open sets of $X \times X$, and for the binary product
  there is no gap between the box topology and the product topology to worry
  about ([[def-product-topology]]). No infinite product is formed anywhere on
  this page, so the distinction never becomes live here.
````

### `lem-the-diagonal-map-is-an-embedding`

````markdown
---
id: lem-the-diagonal-map-is-an-embedding
kind: lemma
title: "$\\delta_X$ is a topological embedding of $X$ onto $\\Delta_X$, and $\\langle f, g \\rangle$ is continuous whenever $f$ and $g$ are"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-diagonal-of-a-space, def-product-topology, thm-product-universal-property,
       def-homeomorphism-and-open-maps, def-subspace-topology-top, def-continuous-map-top]
justified_by: []
aliases: []
landmark: true
short: "the diagonal map is an embedding; pairings are continuous"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Embedding (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Embedding"
    - title: "Diagonal embedding (PlanetMath)"
      url: "https://planetmath.org/diagonalembedding"
pipeline_run: null
---

## Statement

Let $X$, $Y$ and $Z$ be topological spaces, with $X \times Y$ and $X \times X$
carrying the product topology and $\Delta_X$ the subspace topology
([[def-the-diagonal-of-a-space]], [[def-product-topology]],
[[def-subspace-topology-top]]). Then:

1. **The pairing is continuous exactly when both components are.** For functions
   $f : Z \to X$ and $g : Z \to Y$, the pairing $\langle f, g \rangle$ is
   continuous if and only if $f$ and $g$ are continuous
   ([[def-continuous-map-top]]).
2. **The diagonal map is an embedding.** $\delta_X : X \to X \times X$ is
   injective and continuous, its image is $\Delta_X$, and the corestriction
   $\delta_X^{0} : X \to \Delta_X$, $\delta_X^{0}(x) = (x,x)$, is a homeomorphism.
   So $\delta_X$ is an embedding ([[def-homeomorphism-and-open-maps]]) and
   $X \cong \Delta_X$.
3. The inverse of $\delta_X^{0}$ is the restriction of the projection $\pi_0$ to
   $\Delta_X$, and this restriction agrees with the restriction of $\pi_1$.

Claim 2 is what licenses reading a property of $\Delta_X$ as a property of $X$:
being a topological property is exactly invariance under homeomorphism
([[def-homeomorphism-and-open-maps]]).

## Facts & Assumptions

**Given:** Topological spaces $X$, $Y$, $Z$; the products $X \times Y$ and $X \times X$ with the product topology; functions $f : Z \to X$ and $g : Z \to Y$; the diagonal $\Delta_X$ with the subspace topology; and the maps $\delta_X$, $\langle f, g \rangle$ of [[def-the-diagonal-of-a-space]].

[A1] $\delta_X(x) = (x,x)$ and $\langle f, g \rangle(z) = (f(z), g(z))$; $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$; and $\pi_0 \circ \delta_X = \pi_1 \circ \delta_X = \mathrm{id}_X$, $\pi_0 \circ \langle f, g \rangle = f$, $\pi_1 \circ \langle f, g \rangle = g$ ([[def-the-diagonal-of-a-space]]).

[L1] A map $h$ into a product is continuous if and only if every component $\pi_i \circ h$ is continuous, and every projection is continuous ([[thm-product-universal-property]], claims 1 and 2).

[L2] The identity map of a space is continuous, since the preimage of an open set under it is that open set ([[def-continuous-map-top]]).

[L3] For $S \subseteq W$ with the subspace topology, a function $g_0 : Z \to S$ is continuous if and only if $\iota \circ g_0 : Z \to W$ is continuous, $\iota$ being the inclusion; and the restriction of a continuous map $W \to Y$ to $S$ is continuous ([[def-subspace-topology-top]]).

[L4] A continuous bijection whose inverse is continuous is a homeomorphism, and a map that is injective and restricts to a homeomorphism onto its image with the subspace topology is an embedding ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ and $g$ are continuous; then the components $\pi_0 \circ \langle f, g \rangle = f$ and $\pi_1 \circ \langle f, g \rangle = g$ of $\langle f, g \rangle$ are continuous, so $\langle f, g \rangle$ is continuous. [A1, L1]

1.2 Suppose $\langle f, g \rangle$ is continuous; then its components $f$ and $g$ are continuous. [A1, L1]

1.3 $\delta_X$ is continuous, its two components both being $\mathrm{id}_X$, which is continuous. [A1, L1, L2]

1.4 $\delta_X$ is injective: if $\delta_X(x) = \delta_X(x')$ then reading the coordinate at $0$ gives $x = x'$. [A1]

1.5 The image of $\delta_X$ is $\Delta_X$: each $(x,x)$ lies in $\Delta_X$, and each $z \in \Delta_X$ satisfies $z = (z_0, z_0) = \delta_X(z_0)$. [A1]

1.6 The restriction $p := \pi_0|_{\Delta_X} : \Delta_X \to X$ is continuous, being the restriction of the continuous $\pi_0$ to a subspace; and $\pi_0|_{\Delta_X} = \pi_1|_{\Delta_X}$, since $z_0 = z_1$ for $z \in \Delta_X$. [A1, L1, L3]

2.1 Steps 1.1 and 1.2 together are claim 1. [step 1.1, step 1.2]

2.2 The corestriction $\delta_X^{0} : X \to \Delta_X$ is continuous, since composing it with the inclusion $\Delta_X \to X \times X$ gives $\delta_X$, which is continuous by step 1.3. [step 1.3, L3]

2.3 $\delta_X^{0}$ and $p$ are mutually inverse: $p(\delta_X^{0}(x)) = \pi_0(x,x) = x$ for $x \in X$, and $\delta_X^{0}(p(z)) = (z_0, z_0) = (z_0, z_1) = z$ for $z \in \Delta_X$, the middle equality holding because $z_0 = z_1$. [step 1.5, step 1.6, A1]

3.1 By steps 2.2, 2.3 and 1.6 the map $\delta_X^{0}$ is a continuous bijection with continuous inverse $p$, hence a homeomorphism, and its inverse is $\pi_0|_{\Delta_X} = \pi_1|_{\Delta_X}$; this is claim 3 and, with steps 1.4 and 1.5, claim 2. [step 1.4, step 1.5, step 1.6, step 2.2, step 2.3, L4]

4.1 Claims 1, 2 and 3 are steps 2.1, 3.1 and 3.1 respectively, so the lemma is proved. [step 2.1, step 3.1] ∎

## Remarks

- **The projection restricted to the diagonal is the inverse, and that is why no openness argument is needed.** A continuous bijection is in general not a homeomorphism ([[def-homeomorphism-and-open-maps]]); here the candidate inverse is available for free as a restriction of a projection, so the homeomorphism is exhibited rather than deduced.

- **Nothing in claim 2 uses a separation hypothesis.** Every space, Hausdorff or not, sits inside its own square as the homeomorphic copy $\Delta_X$. What the Hausdorff condition decides is a different question, whether that copy is **closed**, and that is the next item.

- **Claim 1 is the binary case of the characteristic property and is stated separately only because it is used constantly.** For a product of two factors the general statement of [[thm-product-universal-property]] specialises to exactly the displayed equivalence, and the pairing notation is what makes the specialisation usable without re-indexing.
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

### `thm-hausdorff-iff-the-diagonal-is-closed`

````markdown
---
id: thm-hausdorff-iff-the-diagonal-is-closed
kind: theorem
title: "A space is Hausdorff if and only if its diagonal is closed in the square carrying the product topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-diagonal-of-a-space, def-hausdorff-space, def-product-topology,
       def-topology-basis-subbasis, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: [thm-diagonal-criterion-for-hausdorff]
landmark: true
short: "Hausdorff iff the diagonal is closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space and give $X \times X$ the product
topology ([[def-product-topology]]). Then $X$ is Hausdorff
([[def-hausdorff-space]]) if and only if the diagonal $\Delta_X$
([[def-the-diagonal-of-a-space]]) is closed in $X \times X$:

$$X \text{ Hausdorff} \iff \Delta_X = \overline{\Delta_X} \text{ in } X \times X .$$

The condition on the right is a single closedness statement about one subset of
one space, with no quantifier over pairs of points visible in it; that is what
makes the criterion useful, and every consequence on this page is obtained by
pulling $\Delta_X$ back along a continuous map.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the product $X \times X$ with the product topology, and the diagonal $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$.

[A1] $X$ is Hausdorff when for all $x \ne y$ in $X$ there are open $U \ni x$ and $V \ni y$ with $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[A2] The boxes $U \times V$ with $U, V \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] For a basis $\mathcal{B}$ of a space, a point lies in $\overline{A}$ if and only if every $B \in \mathcal{B}$ containing it meets $A$; and $A$ is closed if and only if $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2, [[def-interior-closure-boundary-top]]).

[L2] $A \subseteq \overline{A}$ for every subset $A$ of a space ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Hausdorff and let $z \in X \times X$ with $z \notin \Delta_X$, so that $z_0 \ne z_1$; by [A1] there are open $U \ni z_0$ and $V \ni z_1$ with $U \cap V = \varnothing$. [A1]

1.2 Assume $\Delta_X$ is closed and let $x, y \in X$ with $x \ne y$; then $z := (x,y)$ satisfies $z \notin \Delta_X = \overline{\Delta_X}$, the equality holding by [L1] since $\Delta_X$ is closed. [L1]

2.1 The box $U \times V$ of step 1.1 is a basic open set containing $z$, and $(U \times V) \cap \Delta_X = \varnothing$: a point $w$ of the intersection would satisfy $w_0 = w_1$ with $w_0 \in U$ and $w_1 \in V$, putting $w_0$ in $U \cap V = \varnothing$. [step 1.1, A2]

2.2 By [L1] applied to the basis of [A2], step 1.2 supplies a basic open box $U \times V$ with $z \in U \times V$ and $(U \times V) \cap \Delta_X = \varnothing$; so $x \in U$ and $y \in V$. [step 1.2, A2, L1]

3.1 From step 2.1 and [L1], $z \notin \overline{\Delta_X}$ for every $z \notin \Delta_X$; hence $\overline{\Delta_X} \subseteq \Delta_X$, and with [L2] this gives $\overline{\Delta_X} = \Delta_X$, so $\Delta_X$ is closed. [step 1.1, step 2.1, L1, L2]

3.2 The sets $U$ and $V$ of step 2.2 are disjoint: if $t \in U \cap V$ then $(t,t)$ lies in $U \times V$ and in $\Delta_X$, contradicting $(U \times V) \cap \Delta_X = \varnothing$. [step 2.2]

4.1 Step 3.1 shows that $X$ Hausdorff implies $\Delta_X$ closed, and steps 2.2 and 3.2 show that $\Delta_X$ closed implies that any two distinct points of $X$ have disjoint open neighbourhoods, which by [A1] is the Hausdorff condition; the two implications are the theorem. [step 2.2, step 3.1, step 3.2, A1] ∎

## Remarks

- **The criterion is about the product topology on a binary product**, and there the box basis and the product basis are the same family ([[def-product-topology]]), so the boxes tested in steps 2.1 and 2.2 are legitimately basic. No infinite product is formed anywhere in the argument, and the criterion says nothing about one.

- **Neither direction spends a choice principle.** The forward direction produces one box from one Hausdorff separation of one named pair, and the backward direction reads one box out of the closure characterisation; there is no family to select from in either.

- **What the criterion does not say.** It does not say that $\Delta_X$ is closed in $X \times X$ carrying some other topology, and it does not say that $\Delta_X$ is closed in $X$ — the latter is not even a statement, $\Delta_X$ being a subset of the square. The hypothesis that $X \times X$ carries the product topology is used at [A2] and cannot be dropped.
````

