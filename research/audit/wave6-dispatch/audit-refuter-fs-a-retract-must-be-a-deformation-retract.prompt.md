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

## Target item — `fs-a-retract-must-be-a-deformation-retract`

Normalized current SHA-256: `1e12e1cf25f9552efe0d295d839a93570252ec360efc9ddec87318778e0285aa`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-a-retract-must-be-a-deformation-retract
kind: false-statement
title: "FALSE: every retract is a deformation retract"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-retraction-and-deformation-retract, def-standard-topologies, cor-contractible-iff-identity-nullhomotopic, cor-contractible-spaces-are-path-connected, def-path-connected, thm-path-connected-implies-connected, def-connected-space]
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

**False claim.** Every retract of a topological space is a deformation retract.

## Facts & Assumptions

**Given:** The two-point set $X=\{0,1\}$ with the discrete topology and its singleton subspace $A=\{0\}$.

[A1] A retraction $r:X\to A$ satisfies $r(a)=a$ on $A$; a deformation retraction additionally supplies a homotopy from $\operatorname{id}_X$ to the inclusion followed by $r$, fixed on $A$ ([[def-retraction-and-deformation-retract]]).

[L1] Every map out of a discrete space is continuous, since every subset of its domain is open ([[def-standard-topologies]]).

[L2] A nonempty space whose identity is nullhomotopic is contractible, and every nonempty contractible space is path-connected ([[cor-contractible-iff-identity-nullhomotopic]], [[cor-contractible-spaces-are-path-connected]], [[def-path-connected]]).

[L3] Every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[L4] A separation is a pair of disjoint nonempty open sets whose union is the space ([[def-connected-space]]).

## Refutation

**Proof technique:** direct.

1.1 Define $r:X\to A$ by $r(0)=r(1)=0$. This map is continuous by [L1] and satisfies $r(0)=0$, so it is a retraction by [A1]. [L1, A1]

1.2 Suppose $A$ were a deformation retract of $X$. Since the inclusion followed by $r$ is the constant map $c_0:X\to X$, [A1] would give $\operatorname{id}_X\simeq c_0$. Then $X$ would be contractible, hence path-connected by [L2], and hence connected by [L3]. [assume-hyp, A1, L2, L3]

1.3 But $\{0\}$ and $\{1\}$ are disjoint nonempty open subsets of the discrete space $X$ and their union is $X$, so they form a separation by [L4]. Thus $X$ is disconnected. [L1, L4]

2.1 Steps 1.2 and 1.3 contradict one another. Hence $A$ is a retract of $X$ by step 1.1 but is not a deformation retract, refuting the claim. [step 1.1, step 1.2, step 1.3] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-retraction-and-deformation-retract",
      "source_section": "Definition",
      "quote": "The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\\to A$ and a homotopy $$H:\\operatorname{id}_X\\simeq_A i\\circ r.$$ Thus $H(x,0)=x$, $H(x,1)=i(r(x))$, and $H(a,t)=a$ for all $a\\in A$ and $t\\in I$ ([[def-homotopy-relative-and-path-homotopy]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "1. **Discrete topology.** $\\mathcal{T}_{\\mathrm{disc}} := \\mathcal{P}(X)$: every subset is open, hence every subset is closed, hence every subset is clopen.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-contractible-iff-identity-nullhomotopic",
      "source_section": "Statement",
      "quote": "For a nonempty topological space $X$, the following are equivalent: 1. $X$ is contractible. 2. The identity map $\\operatorname{id}_X$ is nullhomotopic.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-contractible-spaces-are-path-connected",
      "source_section": "Statement",
      "quote": "Every nonempty contractible topological space is path-connected.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-path-connected",
      "source_section": "Definition",
      "quote": "- A **path in $X$ from $x$ to $y$** is a continuous map $\\gamma : I \\to X$ ([[def-continuous-map-top]]) with $\\gamma(0) = x$ and $\\gamma(1) = y$. Its **image** is $\\gamma[I]$. - $X$ is **path-connected** when for every pair $x, y \\in X$ there is a path in $X$ from $x$ to $y$. A subset $A \\subseteq X$ is a **path-connected subset** when the space $A$ with its subspace topology is path-connected; equivalently, when any two of its points are joined by a path whose image lies in $A$, by the characteristic property of a map into a subspace ([[def-subspace-topology-top]]). - Write $x \\sim y$ when a path in $X$ from $x$ to $y$ exists. The **path component** of $x$ is its equivalence class $$P(x) \\;:=\\; \\{\\, y \\in X : x \\sim y \\,\\} .$$ - The empty space is path-connected, the defining condition quantifying over no pair of points, and so is every one-point space, the constant path joining its point to itself.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-path-connected-implies-connected",
      "source_section": "Statement",
      "quote": "1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of $\\mathbb{R}$, hence a connected space. 2. **Path-connected implies connected.** If $X$ is path-connected ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The same holds for a subset: a path-connected subset of $X$ is a connected subset of $X$. 3. **Path components refine components.** For every $x \\in X$, $$P(x) \\;\\subseteq\\; C(x),$$ the path component inside the component ([[def-connected-component-and-quasicomponent]]). So every component is a union of path components.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-connected-space",
      "source_section": "Definition",
      "quote": "- A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**, **disjoint** subsets of $X$ with $U \\cup V = X$. - $X$ is **disconnected** when a separation of $X$ exists, and **connected** when none does. - A subset $A \\subseteq X$ is a **connected subset** of $X$ when the space $(A, \\mathcal{T}_A)$ is connected, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]). \"Disconnected subset\" is read the same way.",
      "uses": [
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Define $r:X\\to A$ by $r(0)=r(1)=0$. This map is continuous by [L1] and satisfies $r(0)=0$, so it is a retraction by [A1]. [L1, A1]",
      "step": "1.1",
      "inputs": [
        "L1",
        "A1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Suppose $A$ were a deformation retract of $X$. Since the inclusion followed by $r$ is the constant map $c_0:X\\to X$, [A1] would give $\\operatorname{id}_X\\simeq c_0$. Then $X$ would be contractible, hence path-connected by [L2], and hence connected by [L3]. [assume-hyp, A1, L2, L3]",
      "step": "1.2",
      "inputs": [
        "A1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "But $\\{0\\}$ and $\\{1\\}$ are disjoint nonempty open subsets of the discrete space $X$ and their union is $X$, so they form a separation by [L4]. Thus $X$ is disconnected. [L1, L4]",
      "step": "1.3",
      "inputs": [
        "L4",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Steps 1.2 and 1.3 contradict one another. Hence $A$ is a retract of $X$ by step 1.1 but is not a deformation retract, refuting the claim. [step 1.1, step 1.2, step 1.3] ∎",
      "step": "2.1",
      "inputs": [
        "1.2",
        "1.3",
        "1.1"
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
      "evidence": "steps 1.1 through 2.1 use a genuinely two-point discrete witness; the one-point degeneration would not refute the claim"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2 uses exactly the identity-to-retraction endpoint condition to derive the contradiction"
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
    "source": "fs-a-retract-must-be-a-deformation-retract",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-retraction-and-deformation-retract",
    "declared_target": "def-retraction-and-deformation-retract",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-retract-must-be-a-deformation-retract",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-retract-must-be-a-deformation-retract",
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
    "source": "fs-a-retract-must-be-a-deformation-retract",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "cor-contractible-spaces-are-path-connected",
    "declared_target": "cor-contractible-spaces-are-path-connected",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-retract-must-be-a-deformation-retract",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-path-connected",
    "declared_target": "def-path-connected",
    "target_statement_provenance": "ai-altered",
    "targetPage": "connectedness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-retract-must-be-a-deformation-retract",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-path-connected-implies-connected",
    "declared_target": "thm-path-connected-implies-connected",
    "target_statement_provenance": "ai-altered",
    "targetPage": "connectedness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-retract-must-be-a-deformation-retract",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-connected-space",
    "declared_target": "def-connected-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "connectedness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (7)

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

### `cor-contractible-spaces-are-path-connected`

````markdown
---
id: cor-contractible-spaces-are-path-connected
kind: corollary
title: "Every nonempty contractible space is path-connected"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nullhomotopic-map-and-contractible-space, cor-contractible-iff-identity-nullhomotopic, def-path-connected, thm-product-universal-property, thm-continuity-characterisations-top]
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
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

Every nonempty contractible topological space is path-connected.

## Facts & Assumptions

**Given:** A nonempty contractible space $X$ and points $x,y\in X$.

[L1] The identity of $X$ is homotopic to a constant map $c_{x_0}$ for some $x_0\in X$ ([[cor-contractible-iff-identity-nullhomotopic]], [[def-nullhomotopic-map-and-contractible-space]]).

[A1] Paths define an equivalence relation: paths may be reversed and concatenated, and $X$ is path-connected exactly when every pair of points is joined by a path ([[def-path-connected]]).

[L2] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L3] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $H:X\times I\to X$ be a homotopy from $\operatorname{id}_X$ to $c_{x_0}$. For each $z\in X$, the map $j_z:I\to X\times I$, $j_z(t)=(z,t)$, is continuous by [L2], its components being constant and the identity. [L1, L2]

2.1 The map $\gamma_z:=H\circ j_z:I\to X$ is continuous because $(H\circ j_z)^{-1}[V]=j_z^{-1}[H^{-1}[V]]$ is open for every open $V\subseteq X$. It has $\gamma_z(0)=z$ and $\gamma_z(1)=x_0$, so it is a path from $z$ to $x_0$. [step 1.1, L1, L3, A1]

3.1 Step 2.1 gives a path from $x$ to $x_0$ and a path from $y$ to $x_0$. Reversing the latter and concatenating it with the former gives a path from $x$ to $y$ by [A1]. [step 2.1, A1]

4.1 Since $x,y\in X$ were arbitrary, $X$ is path-connected. [step 3.1, A1] ∎
````

### `def-connected-space`

````markdown
---
id: def-connected-space
kind: definition
title: "Separation of a topological space, connected and disconnected spaces, clopen sets, and connected subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies,
       def-continuous-map-top, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-connected-r]
justified_by: []
aliases: []
landmark: true
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "The Stacks Project, Section 5.7: Connected components"
      url: "https://stacks.math.columbia.edu/tag/004R"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**,
  **disjoint** subsets of $X$ with $U \cup V = X$.
- $X$ is **disconnected** when a separation of $X$ exists, and **connected** when
  none does.
- A subset $A \subseteq X$ is a **connected subset** of $X$ when the space
  $(A, \mathcal{T}_A)$ is connected, $\mathcal{T}_A$ being the subspace topology
  ([[def-subspace-topology-top]]). "Disconnected subset" is read the same way.

Since $U$ and $V$ are complementary in $X$, each of them is closed as well as
open; so a separation is the same thing as a partition of $X$ into two nonempty
clopen pieces ([[def-topological-space]]). The **clopen** subsets of $X$ are
those that are both open and closed, and $\varnothing$ and $X$ are always among
them.

**The empty space and the one-point space are connected in this library.**
Neither admits a separation: a separation requires two nonempty disjoint sets
whose union is the whole space, and neither $\varnothing$ nor a singleton can be
written as such a union. So both are connected under the definition above,
without any special clause. **This is a live convention fork** and the competing
choice is recorded in [[rem-connectedness-conventions]]; nothing on this page
depends on which is taken except the reading of the word "connected" applied to
those two spaces.

**Connectedness is a property of a space, not of an ambient pair.** The condition
above mentions only $(X,\mathcal{T})$. When it is applied to $A \subseteq X$ it
is applied to the space $(A, \mathcal{T}_A)$, so it does not change if $A$ is
regarded as a subspace of some other space inducing the same topology on $A$; in
particular a subset of $A$ is connected as a subset of $A$ exactly when it is
connected as a subset of $X$, by transitivity of the subspace topology
([[def-subspace-topology-top]]). This is why "connected" may be used of a subset
with no ambient space named.

**Spelled out for a subset.** $A \subseteq X$ is disconnected exactly when there
are open $U, V \subseteq X$ with

$$A \subseteq U \cup V, \qquad U \cap A \ne \varnothing, \qquad V \cap A \ne \varnothing, \qquad U \cap V \cap A = \varnothing,$$

because the open sets of $(A,\mathcal{T}_A)$ are precisely the traces $U \cap A$.
Note the last condition: it asks $U$ and $V$ to be disjoint **on $A$**, not in
$X$. Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand
and is a different notion.

**The two-point discrete space.** Write $\mathbf{2} := \{0,1\}$ with the discrete
topology ([[def-standard-topologies]]), in which every subset is open. A
separation of $X$ is the same datum as a surjective continuous map
$X \to \mathbf{2}$ ([[def-continuous-map-top]]): given $(U,V)$, the map sending
$U$ to $0$ and $V$ to $1$ is continuous because the preimage of each of the four
open subsets of $\mathbf{2}$ is one of $\varnothing$, $U$, $V$, $X$; given a
surjective continuous $\chi : X \to \mathbf{2}$, the pair
$(\chi^{-1}[\{0\}], \chi^{-1}[\{1\}])$ is a separation. This reformulation is
proved as a theorem on this page and is recorded here only to name $\mathbf{2}$.

**Separated sets.** Two subsets $A_1, A_2 \subseteq X$ are **separated in $X$**
when

$$\overline{A_1} \cap A_2 = \varnothing \qquad \text{and} \qquad A_1 \cap \overline{A_2} = \varnothing,$$

closures taken in $X$ ([[def-interior-closure-boundary-top]],
[[thm-closure-characterisation-top]]). Separated sets are disjoint, since
$A_1 \subseteq \overline{A_1}$; the converse fails. This is verbatim the
condition [[def-connected-r]] uses on the real line, transported to an arbitrary
space, and the theorem relating it to the definition above is the next lemma on
this page.

**Totally disconnected spaces, and the empty case.** The vocabulary for a space
all of whose connected subsets are single points is fixed later on this page,
together with the components; it is not defined here because it is stated in
terms of components.

## Remarks

- **Why "nonempty" and "disjoint" are both in the definition.** Drop
  *nonempty* and every space with more than one open set is "disconnected" via
  $(X, \varnothing)$. Drop *disjoint* and $(X, X)$ separates every nonempty
  space. Drop *open* and every space with at least two points is separated by a
  point and its complement. Each of the four conditions is doing work, and the
  four together are the weakest demand under which the notion has the
  consequences proved on this page.

- **Ordered pair, not unordered.** A separation is written as a pair for
  convenience only; $(U,V)$ separates exactly when $(V,U)$ does, and no statement
  here distinguishes them.

- **The relation to the real-line definition is proved, not assumed.**
  [[def-connected-r]] defines connectedness of $E \subseteq \mathbb{R}$ by the
  absence of a partition into two nonempty separated sets, which is a condition
  on closures rather than on relatively open sets. That the two definitions agree
  is [[lem-connected-subsets-and-separated-sets]] together with
  [[cor-connected-subsets-of-the-line]]; until those are proved, the two words
  are kept apart and no statement here quietly identifies them.
````

### `def-path-connected`

````markdown
---
id: def-path-connected
kind: definition
title: "Paths, path-connected spaces and path components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-connected-space, def-continuous-map-top, def-interval, def-subspace-topology-top,
       lem-real-line-is-a-metric-space, def-metric-topology, def-metric-ball,
       def-metrizable-space, lem-continuity-is-local-and-pastes, def-topological-space]
justified_by: []
aliases: []
landmark: true
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Path (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Path_(topology)"
    - title: "Paul Bankston, Metric Topology: A First Course"
      url: "https://www.mscsnet.mu.edu/~paul/Paper/4450102text.pdf"
pipeline_run: null
---

## Definition

Throughout, $I := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$
([[def-interval]]) carries the subspace topology inherited from $\mathbb{R}$ with
its usual topology ([[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). It is called the **unit interval**.

Let $X$ be a topological space ([[def-topological-space]]) and let
$x, y \in X$.

- A **path in $X$ from $x$ to $y$** is a continuous map $\gamma : I \to X$
  ([[def-continuous-map-top]]) with $\gamma(0) = x$ and $\gamma(1) = y$. Its
  **image** is $\gamma[I]$.
- $X$ is **path-connected** when for every pair $x, y \in X$ there is a path in
  $X$ from $x$ to $y$. A subset $A \subseteq X$ is a **path-connected subset**
  when the space $A$ with its subspace topology is path-connected; equivalently,
  when any two of its points are joined by a path whose image lies in $A$, by the
  characteristic property of a map into a subspace
  ([[def-subspace-topology-top]]).
- Write $x \sim y$ when a path in $X$ from $x$ to $y$ exists. The **path
  component** of $x$ is its equivalence class
  $$P(x) \;:=\; \{\, y \in X : x \sim y \,\} .$$
- The empty space is path-connected, the defining condition quantifying over no
  pair of points, and so is every one-point space, the constant path joining its
  point to itself.

**$\sim$ is an equivalence relation on $X$, and the obligation is discharged
here**, so that "equivalence class" above denotes.

*Reflexive.* The constant map $\gamma(t) = x$ is continuous, every preimage being
$\varnothing$ or $I$ ([[def-continuous-map-top]]), and joins $x$ to $x$.

*Symmetric.* If $\gamma$ joins $x$ to $y$, put $\bar\gamma(t) := \gamma(1-t)$.
The map $r : I \to I$, $r(t) = 1 - t$, is continuous: for $s, t \in I$ one has
$|r(s) - r(t)| = |s - t|$, so a ball of radius $\varepsilon$ around $r(t)$ pulls
back to contain the ball of radius $\varepsilon$ around $t$
([[def-metric-ball]], [[def-metrizable-space]]). Hence
$\bar\gamma = \gamma \circ r$ is continuous ([[lem-continuity-is-local-and-pastes]],
claim 1) and joins $y$ to $x$.

*Transitive.* Let $\gamma_1$ join $x$ to $y$ and $\gamma_2$ join $y$ to $z$.
Define $\delta : I \to X$ by

$$\delta(t) \;:=\; \begin{cases} \gamma_1(2t), & 0 \le t \le 1/2, \\ \gamma_2(2t - 1), & 1/2 \le t \le 1. \end{cases}$$

The two clauses agree at $t = 1/2$, both giving $\gamma_1(1) = y = \gamma_2(0)$,
so $\delta$ is a well-defined function. The sets $[0,1/2]$ and $[1/2,1]$ are
closed in $I$ and cover it, and there are **two** of them, so the finite closed
form of the pasting lemma applies ([[lem-continuity-is-local-and-pastes]],
claim 3). On $[0,1/2]$ the map $\delta$ is $\gamma_1 \circ a_1$ with
$a_1(t) = 2t$, and on $[1/2,1]$ it is $\gamma_2 \circ a_2$ with
$a_2(t) = 2t - 1$; each $a_k$ is continuous into $I$, since
$|a_k(s) - a_k(t)| = 2|s-t|$, so the ball of radius $\varepsilon/2$ around $t$
maps into the ball of radius $\varepsilon$ around $a_k(t)$
([[def-metric-ball]], [[def-metrizable-space]],
[[def-subspace-topology-top]]). So both restrictions are continuous by
[[lem-continuity-is-local-and-pastes]] claim 1, hence $\delta$ is continuous, and
it joins $x$ to $z$.

**The path components partition $X$**, being the classes of an equivalence
relation, and each is a path-connected subset of $X$: two points of $P(x)$ are
joined to $x$, hence to each other by the transitivity construction above, and
the resulting path has image inside $P(x)$: if $\delta$ is a path from $x$ and
$s \in I$, then $t \mapsto \delta(st)$ is a path from $x$ to $\delta(s)$,
continuous because $t \mapsto st$ satisfies $|st_1 - st_2| \le |t_1 - t_2|$ and
is therefore continuous into $I$ by the ball criterion used above, so every point
of the image is itself joined to $x$.

## Remarks

- **Why the unit interval and not an arbitrary closed bounded interval.** Any
  $[a,b]$ with $a < b$ would give the same relation, since $t \mapsto a + t(b-a)$
  carries $[0,1]$ onto $[a,b]$ and is continuous with continuous inverse. Fixing
  $[0,1]$ removes a parameter from every statement below and costs nothing.

- **A path is a map, not a subset.** The image $\gamma[I]$ is a subset of $X$,
  but the path is the map: two different paths may have the same image, and the
  concatenation above depends on the maps rather than on their images. Nothing
  in this library identifies a path with its image.

- **Path components are not asserted to be closed, or open, or to coincide with
  components.** Each of those is false in general, and each is taken up
  separately on this page. What is proved here is only that they partition $X$
  and that each is path-connected.

- **The finiteness in the pasting lemma is what makes concatenation legal.** The
  cover $\{[0,1/2], [1/2,1]\}$ has two members. An infinite closed cover would
  not do, and the standing warning is
  [[cex-pasting-fails-for-an-infinite-closed-cover]]; this is worth naming here
  because the temptation to concatenate infinitely many paths is exactly what
  fails for the zigzag curve later on this page.
````

### `def-retraction-and-deformation-retract`

````markdown
---
id: def-retraction-and-deformation-retract
kind: definition
title: "Retractions and deformation retracts, with a deformation retraction required to fix the retract pointwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top, def-subspace-topology-top]
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

Let $A\subseteq X$ carry the subspace topology, and let $i:A\hookrightarrow X$ be the inclusion ([[def-subspace-topology-top]]).

A continuous map $r:X\to A$ is a **retraction of $X$ onto $A$** if

$$r\circ i=\operatorname{id}_A,$$

equivalently, if $r(a)=a$ for every $a\in A$. When such an $r$ exists, $A$ is a **retract** of $X$.

The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\to A$ and a homotopy

$$H:\operatorname{id}_X\simeq_A i\circ r.$$

Thus $H(x,0)=x$, $H(x,1)=i(r(x))$, and $H(a,t)=a$ for all $a\in A$ and $t\in I$ ([[def-homotopy-relative-and-path-homotopy]]). The pair $(r,H)$ is a **deformation retraction**.

Some sources call the pointwise-fixed condition a *strong deformation retract*. In this library the word *deformation retract* always includes it.
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

### `thm-path-connected-implies-connected`

````markdown
---
id: thm-path-connected-implies-connected
kind: theorem
title: "Every path-connected space is connected, and every path component lies inside a component"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-path-connected, def-connected-space, cor-connected-subsets-of-the-line,
       thm-continuous-image-of-a-connected-space, thm-unions-of-connected-sets,
       def-interval, def-continuous-map-top, def-connected-component-and-quasicomponent,
       def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Keith Conrad, Spaces That Are Connected but Not Path-Connected"
      url: "https://kconrad.math.uconn.edu/blurbs/topology/connnotpathconn.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of
   $\mathbb{R}$, hence a connected space.
2. **Path-connected implies connected.** If $X$ is path-connected
   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The
   same holds for a subset: a path-connected subset of $X$ is a connected subset
   of $X$.
3. **Path components refine components.** For every $x \in X$,
   $$P(x) \;\subseteq\; C(x),$$
   the path component inside the component
   ([[def-connected-component-and-quasicomponent]]). So every component is a
   union of path components.

**No converse is claimed.** Claim 2 is one-directional and claim 3 is an
inclusion; the question of when a connected space is path-connected is not
settled here.

**No choice principle is used.** The proof takes the union over the **set of all**
paths issuing from a fixed point rather than selecting one path per endpoint,
which is what an appeal to the Axiom of Choice would be. The point at which the
temptation arises is flagged in the remarks.

## Facts & Assumptions

**Given:** A topological space $X$ and the unit interval $I = [0,1]$ with the subspace topology from $\mathbb{R}$ ([[def-path-connected]]).

[A1] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex, and $[0,1]$ is order-convex ([[cor-connected-subsets-of-the-line]], [[def-interval]]).

[A2] A continuous image of a connected space is a connected subset of the target ([[thm-continuous-image-of-a-connected-space]], claim 1).

[A3] A union of connected subsets with a point in common is connected ([[thm-unions-of-connected-sets]], claim 1).

[A4] A path in $X$ from $x$ to $y$ is a continuous map $\gamma : I \to X$ with $\gamma(0) = x$ and $\gamma(1) = y$; $X$ is path-connected when every pair of its points is joined by one; the path component $P(x)$ is the set of points joined to $x$, and it is a path-connected subset of $X$ ([[def-path-connected]], [[def-continuous-map-top]]).

[A5] $C(x)$ is the largest connected subset of $X$ containing $x$; the empty space is connected ([[def-connected-component-and-quasicomponent]], [[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 $[0,1]$ is order-convex, so it is a connected subset of $\mathbb{R}$ by [A1], that is the space $I$ is connected; this is claim 1. [A1]

1.2 Assume $X$ is path-connected. If $X = \varnothing$ it is connected by [A5] and claim 2 holds, so assume $X \ne \varnothing$ and fix a point $x_0 \in X$. [A5, given]

1.3 Let $\Gamma := \{\, \gamma : \gamma \text{ is a path in } X \text{ with } \gamma(0) = x_0 \,\}$, a set of functions from $I$ to $X$. No member of $\Gamma$ is selected: the whole family is used. [A4]

2.1 For each $\gamma \in \Gamma$ the image $\gamma[I]$ is a connected subset of $X$, by step 1.1 and [A2] applied to the continuous map $\gamma$; and $x_0 = \gamma(0) \in \gamma[I]$. [step 1.1, step 1.3, A2, A4]

2.2 $X = \bigcup_{\gamma \in \Gamma} \gamma[I]$: each image is a subset of $X$, and conversely every $y \in X$ is joined to $x_0$ by some path $\gamma$, which lies in $\Gamma$ and has $y = \gamma(1) \in \gamma[I]$. [step 1.2, step 1.3, A4]

3.1 Hence $X$ is connected by [A3], being a union of connected sets all containing $x_0$. Applied to the space $A$ with its subspace topology, the same argument shows that a path-connected subset $A \subseteq X$ is a connected subset of $X$; this is claim 2. [step 2.1, step 2.2, A3]

4.1 For claim 3, $P(x)$ is a path-connected subset of $X$ by [A4], hence a connected subset of $X$ by claim 2, and it contains $x$; so $P(x) \subseteq C(x)$ by the maximality in [A5]. Since the path components partition $X$ by [A4] and each lies inside a single component, every component is a union of path components. [step 3.1, A4, A5] ∎

## Remarks

- **Where choice would have crept in.** The textbook phrasing "for each $y \in X$ choose a path from $x_0$ to $y$" produces a family of paths indexed by $X$ and is an application of the Axiom of Choice over an arbitrary index set. It is unnecessary: the union of the images of **all** paths from $x_0$ is already $X$, and forming that union selects nothing. Step 1.3 is written to make the difference visible rather than to leave it to the reader.

- **Claim 1 is where the real line enters, and it enters once.** Everything else in the proof is formal. All the content of "path-connected implies connected" is the connectedness of the interval, which is a consequence of the least upper bound property through [[cor-connected-subsets-of-the-line]].

- **Claim 3 gives the standard picture.** Components are unions of path components, so the two partitions of $X$ are nested, with the path components the finer of the two. They coincide in many familiar spaces and not in all, and nothing above says which case a given space is in.
````

