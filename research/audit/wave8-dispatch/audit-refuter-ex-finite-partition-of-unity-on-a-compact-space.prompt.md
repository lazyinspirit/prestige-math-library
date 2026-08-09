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

- Wave 8 ai-generated Statement/Construction seed
- pending Wave 8 genrisk seed (cone 0)

## Target item — `ex-finite-partition-of-unity-on-a-compact-space`

Normalized current SHA-256: `f3205c114f25bcbc4126b9455f7e36718c90446258eb28ec06c933adb3bb83be`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-finite-partition-of-unity-on-a-compact-space
kind: example
title: "Under choice and dependent choice, a finite subordinate partition of unity for a two-set cover of a compact interval"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
deps: [cor-compact-hausdorff-partitions-of-unity, def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Example

On $[0,1]$, take the open-in-the-subspace cover
$U=(-1,\tfrac34)\cap[0,1]$ and $V=(\tfrac14,2)\cap[0,1]$. Define
$$\varphi(x)=\max\{0,\min\{1,2-3x\}\},\qquad\psi(x)=1-\varphi(x).$$
Then $\varphi$ and $\psi$ are continuous, nonnegative, and sum to one. Their
supports are contained respectively in $[0,\tfrac23]\subseteq U$ and
$[\tfrac13,1]\subseteq V$, so they are a finite subordinate partition of unity.

The explicit pair is an instance of the existence theorem
[[cor-compact-hausdorff-partitions-of-unity]], under its stated Choice and
Dependent Choice hypotheses.
````

## Wave 8 provenance row for the target

```json
{
  "id": "ex-finite-partition-of-unity-on-a-compact-space",
  "statement": "ai-generated",
  "proof": "not-supplied",
  "evidence": "trivial",
  "urls": [],
  "rationale": "The exact cover and clipped affine formulas at the bespoke thresholds 1/4, 1/3, 2/3, and 3/4 are a locally designed witness, not a recoverable named result. Direct substitution verifies continuity, phi+psi=1, support(phi)=[0,2/3] inside U, and support(psi)=[1/3,1] inside V.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 8 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-finite-partition-of-unity-on-a-compact-space",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "cor-compact-hausdorff-partitions-of-unity",
    "declared_target": "cor-compact-hausdorff-partitions-of-unity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-finite-partition-of-unity-on-a-compact-space",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-partition-of-unity-subordinate-to-a-cover",
    "declared_target": "def-partition-of-unity-subordinate-to-a-cover",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-finite-partition-of-unity-on-a-compact-space",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-algebra-of-continuous-real-maps-on-a-space",
    "declared_target": "lem-algebra-of-continuous-real-maps-on-a-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[
  {
    "id": "ex-finite-partition-of-unity-on-a-compact-space",
    "file": "items/ex-finite-partition-of-unity-on-a-compact-space.md",
    "source": "provenance",
    "cone_size": 0,
    "logical_consumers": [],
    "direct_citation_consumers": [],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (3)

### `cor-compact-hausdorff-partitions-of-unity`

````markdown
---
id: cor-compact-hausdorff-partitions-of-unity
kind: corollary
title: "Under choice and dependent choice, every open cover of a compact Hausdorff space admits a finite subordinate partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-compact-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, lem-locally-finite-sums-are-continuous, lem-locally-finite-unions-and-closures, def-compact-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "General Topology notes (University of Göttingen)"
      url: "https://www.uni-math.gwdg.de/tammo/GT01.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a compact Hausdorff space admits a finite partition of unity subordinate to
that cover.

## Facts & Assumptions

**Given:** Choice, dependent choice, a compact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] A compact space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[L2] A paracompact Hausdorff space has a locally finite partition subordinate to each of its open covers ([[thm-subordinate-partitions-of-unity-exist]]).

[L3] A locally finite sum of continuous nonnegative functions is continuous ([[lem-locally-finite-sums-are-continuous]]).

[L4] Closure commutes with a locally finite union ([[lem-locally-finite-unions-and-closures]]).

[F1] Compactness gives a finite subcover ([[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Compactness gives a finite subcover $\mathcal U_0=\{U_1,\ldots,U_n\}$ of $\mathcal U$. [F1, choose]

2.1 By [L1] and [L2], apply the partition theorem to the finite cover $\mathcal U_0$ and take a locally finite partition $\{\varphi_s\}_{s\in S}$ subordinate to it. [L1, L2, step 1.1, choose]

3.1 Assign each $\varphi_s$ to the first $U_j$ containing its support, and set $h_j$ equal to the corresponding sum. By [L3] the $h_j$ are continuous; by [L4] their supports are contained in $U_j$; and $h_1+\cdots+h_n=1$. [L3, L4, step 2.1, construct]

4.1 Discarding the zero $h_j$ leaves a finite subordinate partition of unity. [step 3.1] ∎
````

### `def-partition-of-unity-subordinate-to-a-cover`

````markdown
---
id: def-partition-of-unity-subordinate-to-a-cover
kind: definition
title: "Locally finite partitions of unity and subordination to an open cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-continuous-map-top, def-zero-sets-and-cozero-sets, def-compact-space]
justified_by: []
aliases: [def-partition-of-unity]
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
pipeline_run: null
---

## Definition

Let $X$ be a topological space and let $\mathcal U$ be an open cover of $X$. A
family $\{\varphi_s:X\to[0,1]\}_{s\in S}$ is a **partition of unity** when each
$\varphi_s$ is continuous, the family of cozero sets
$\{\operatorname{coz}(\varphi_s)\}_{s\in S}$ is locally finite, and
$$\sum_{s\in S}\varphi_s(x)=1\quad\text{for every }x\in X.$$
The sum is unambiguous because local finiteness says that only finitely many
summands are nonzero near, and hence at, any fixed point.

It is **subordinate to $\mathcal U$** when for every $s\in S$ some
$U\in\mathcal U$ contains the support
$$\operatorname{supp}(\varphi_s):=\overline{\operatorname{coz}(\varphi_s)}.$$
Here cozero sets and zero sets have the meanings of
[[def-zero-sets-and-cozero-sets]].

## Remarks

The finite case is included: if $S$ is finite, the cozero family is locally
finite automatically. The definition does not require $X$ to be Hausdorff;
Hausdorffness enters the existence theorem through shrinking and Urysohn's lemma.
````

### `lem-algebra-of-continuous-real-maps-on-a-space`

````markdown
---
id: lem-algebra-of-continuous-real-maps-on-a-space
kind: lemma
title: "Sums, products, absolute values, finite maxima and minima, and quotients of continuous real-valued maps on a topological space are continuous where defined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, def-product-topology, def-subspace-topology-top, thm-product-universal-property, thm-continuity-characterisations-top, lem-real-line-is-a-metric-space, def-zero-sets-and-cozero-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
    - title: "Continuity notes (University of California, Berkeley)"
      url: "https://math.berkeley.edu/~giventh/10415.html"
pipeline_run: null
---

## Statement

Let $f,g:X\to\mathbb R$ be continuous maps from a topological space. Then
$f+g$, $fg$, $|f|$, $\max(f,g)$, and $\min(f,g)$ are continuous. On the open
cozero set $\operatorname{coz}(g)$, the quotient $f/g$ is continuous. The same
holds for every finite sum, product, maximum, or minimum of continuous
real-valued maps.

## Facts & Assumptions

**Given:** A topological space $X$ and continuous maps $f,g:X\to\mathbb R$.

[L1] A map into a product is continuous exactly when its coordinate maps are continuous, compositions of continuous maps are continuous, and a map whose range lies in a subspace is continuous into that subspace exactly when it is continuous into the ambient space ([[thm-product-universal-property]], [[thm-continuity-characterisations-top]], [[def-subspace-topology-top]]).

[L2] The usual metric on $\mathbb R$ is $d(s,t)=|s-t|$ ([[lem-real-line-is-a-metric-space]]).

[F1] $\operatorname{coz}(g)=\{x:g(x)\ne0\}$ is open for continuous $g$ ([[def-zero-sets-and-cozero-sets]]).

## Proof

**Proof technique:** direct.

1.1 Addition is continuous at $(a,b)$ because $|s-a|,|t-b|<\varepsilon/2$ gives $|(s+t)-(a+b)|<\varepsilon$. Multiplication is continuous there: after requiring $|t-b|<1$, one has $$|st-ab|\le |s-a||t|+|a||t-b| < |s-a|(|b|+1)+|a||t-b|,$$ which is less than $\varepsilon$ when both coordinate errors are smaller than $\varepsilon/(2(|a|+|b|+1))$. These coordinate conditions describe product neighbourhoods, so both operations are continuous. [L2]

2.1 The reverse triangle inequality $\big||s|-|t|\big|\le |s-t|$ makes absolute value continuous. Consequently $$\max\{s,t\}=\frac{s+t+|s-t|}{2},\qquad \min\{s,t\}=\frac{s+t-|s-t|}{2}$$ are continuous by step 1.1 and composition. [step 1.1, L1, L2]

2.2 Reciprocal is continuous at $b\ne0$: if $|t-b|<|b|/2$, then $|t|>|b|/2$ and $$\left|\frac1t-\frac1b\right| =\frac{|t-b|}{|t||b|}<\frac{2|t-b|}{|b|^2}.$$ Thus division $(s,t)\mapsto s/t$ is the product of $s$ and $1/t$ and is continuous on $\mathbb R\times(\mathbb R\setminus\{0\})$; moreover $\operatorname{coz}(g)$ is open by [F1]. [step 1.1, L1, F1, L2]

3.1 The map $(f,g):X\to\mathbb R^2$ is continuous by [L1], so composing it with the operations of steps 1.1 and 2.1 gives continuity of $f+g$, $fg$, $\max(f,g)$, and $\min(f,g)$; composing $f$ with absolute value gives continuity of $|f|$. [L1, step 1.1, step 2.1]

3.2 Restricting $f$ and $g$ to $\operatorname{coz}(g)$ and composing their product map with division gives continuity of $f/g$ there. [L1, step 2.2]

4.1 Iterating the binary operations of step 3.1 proves the finite assertions. [step 3.1] ∎
````

