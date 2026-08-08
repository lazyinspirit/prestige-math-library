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

## Target item — `def-nullhomotopic-map-and-contractible-space`

Normalized current SHA-256: `b94f63e8b71e50490eef8e2af781e6f6828d2460db1e3942382eedfdd475019b`

The complete current item follows, including frontmatter:

````markdown
---
id: def-nullhomotopic-map-and-contractible-space
kind: definition
title: "Nullhomotopic maps and contractible spaces"
status: published
origin: session
provenance:
  statement: ai-altered
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

Let $f:X\to Y$ be continuous. The map $f$ is **nullhomotopic** if there is a point $y_0\in Y$ such that $f$ is homotopic to the constant map $c_{y_0}:X\to Y$, $c_{y_0}(x)=y_0$ ([[def-homotopy-relative-and-path-homotopy]]).

A nonempty topological space $X$ is **contractible** if every continuous map $f:X\to Y$ to every topological space $Y$ is nullhomotopic.

This definition separates the property of the space from the particular map $\operatorname{id}_X$. The next corollary proves that it is equivalent to the familiar condition that the identity map be nullhomotopic.

## Remarks

- Nonemptiness is included so that a contracting point can be named. The empty space is not called contractible under this convention.
- The constant to which a map is homotopic may depend on the map. Contractibility does not assert that two arbitrary constant maps into a disconnected target are homotopic.
````

## Proof contract for the target

No proof contract is required for this non-proof-bearing item.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "def-nullhomotopic-map-and-contractible-space",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-relative-and-path-homotopy",
    "declared_target": "def-homotopy-relative-and-path-homotopy",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "def-nullhomotopic-map-and-contractible-space",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (2)

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

### `def-homotopy-relative-and-path-homotopy`

````markdown
---
id: def-homotopy-relative-and-path-homotopy
kind: definition
title: "Homotopies of continuous maps, homotopies relative to a subspace, and path homotopies relative to the endpoints"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-map-top, def-product-topology, def-subspace-topology-top, def-interval, def-path-connected]
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

Write $I=[0,1]$ with its usual subspace topology, as in [[def-path-connected]]. Let $X$ and $Y$ be topological spaces, and let $f,g:X\to Y$ be continuous maps ([[def-continuous-map-top]]).

A **homotopy from $f$ to $g$** is a continuous map

$$H:X\times I\longrightarrow Y$$

from the product space ([[def-product-topology]]) such that $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. When such an $H$ exists, $f$ and $g$ are **homotopic**, written $f\simeq g$.

Let $A\subseteq X$ carry the subspace topology ([[def-subspace-topology-top]]). The homotopy $H$ is a **homotopy relative to $A$**, or a homotopy **rel $A$**, when

$$H(a,t)=f(a)=g(a)\qquad(a\in A,\ t\in I).$$

Thus a homotopy rel $A$ can exist only when $f|_A=g|_A$, and every ordinary homotopy is a homotopy rel $\varnothing$. We write $f\simeq_A g$ when a homotopy rel $A$ exists.

If $\alpha,\beta:I\to Y$ are paths with the same initial point and the same terminal point ([[def-path-connected]]), a **path homotopy from $\alpha$ to $\beta$ relative to the endpoints** is a homotopy $H:I\times I\to Y$ rel $\{0,1\}$. Explicitly,

$$H(s,0)=\alpha(s),\quad H(s,1)=\beta(s),\quad H(0,t)=\alpha(0)=\beta(0),\quad H(1,t)=\alpha(1)=\beta(1).$$

The first coordinate $s$ parametrises the path and the second coordinate $t$ parametrises the deformation.

## Remarks

- The adjective *relative* means pointwise fixed throughout the deformation, not merely mapped back into $A$.
- A homotopy is a map on a product. A family of maps $H_t(x):=H(x,t)$ is not by itself a homotopy unless the joint map $(x,t)\mapsto H_t(x)$ is continuous.
````

