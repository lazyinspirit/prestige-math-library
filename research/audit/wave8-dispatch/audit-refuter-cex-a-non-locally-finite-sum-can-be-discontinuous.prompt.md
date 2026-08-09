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

## Target item — `cex-a-non-locally-finite-sum-can-be-discontinuous`

Normalized current SHA-256: `aa7907b516a23acabc17a4cb58f44c172d60511815266e28dae820d1658246ee`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-a-non-locally-finite-sum-can-be-discontinuous
kind: counterexample
title: "Without local finiteness, a pointwise finite sum of continuous functions can be discontinuous"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [lem-locally-finite-sums-are-continuous, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: true
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
pipeline_run: null
---

## Statement refuted

Every pointwise finite sum of continuous real-valued functions is continuous.

## Facts & Assumptions

**Given:** For $n\ge1$, the interval endpoints $a_n=1/(n+1)$, $b_n=1/n$, midpoint $c_n=(a_n+b_n)/2$, and radius $r_n=(b_n-a_n)/2$.

[L1] Maxima, absolute values, and finite algebraic combinations of continuous real functions are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L2] A locally finite family has a continuous pointwise sum ([[lem-locally-finite-sums-are-continuous]]).

## Counterexample

**Proof technique:** direct.

1.1 Define $f_n(x)=\max\{0,1-|x-c_n|/r_n\}$. Each $f_n$ is continuous by [L1], is supported in $[a_n,b_n]$, and satisfies $f_n(c_n)=1$. [L1, construct]

2.1 The cozero sets $(a_n,b_n)$ are pairwise disjoint, so $f=\sum_{n\ge1}f_n$ is pointwise finite and $f(0)=0$. [step 1.1]

3.1 Since $c_n\to0$ while $f(c_n)=1$ for every $n$, $f$ is not continuous at $0$. [step 1.1, step 2.1]

4.1 The cozero family is not locally finite at $0$, so this example does not contradict [L2] and refutes the displayed pointwise-finite claim. [L2, step 2.1, step 3.1] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-a-non-locally-finite-sum-can-be-discontinuous",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "The exact triangular bumps on the bespoke adjacent intervals [1/(n+1),1/n] are a locally invented witness. The displayed formulas directly show disjoint cozero sets, pointwise finiteness, f(0)=0, c_n to 0, and f(c_n)=1, so discontinuity is elementary.",
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
      "fact": "L1",
      "source": "lem-algebra-of-continuous-real-maps-on-a-space",
      "source_section": "Statement",
      "quote": "Let $f,g:X\\to\\mathbb R$ be continuous maps from a topological space. Then\n$f+g$, $fg$, $|f|$, $\\max(f,g)$, and $\\min(f,g)$ are continuous. On the open\ncozero set $\\operatorname{coz}(g)$, the quotient $f/g$ is continuous. The same\nholds for every finite sum, product, maximum, or minimum of continuous\nreal-valued maps.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-locally-finite-sums-are-continuous",
      "source_section": "Statement",
      "quote": "Let $\\{f_s:X\\to[0,\\infty)\\}_{s\\in S}$ be continuous and suppose that\n$\\{\\operatorname{coz}(f_s)\\}_{s\\in S}$ is locally finite. Then\n$f(x):=\\sum_{s\\in S}f_s(x)$ is a well-defined continuous map $X\\to[0,\\infty)$.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Define $f_n(x)=\\max\\{0,1-|x-c_n|/r_n\\}$. Each $f_n$ is continuous by [L1], is supported in $[a_n,b_n]$, and satisfies $f_n(c_n)=1$. [L1, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "construct"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The cozero sets $(a_n,b_n)$ are pairwise disjoint, so $f=\\sum_{n\\ge1}f_n$ is pointwise finite and $f(0)=0$. [step 1.1]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Since $c_n\\to0$ while $f(c_n)=1$ for every $n$, $f$ is not continuous at $0$. [step 1.1, step 2.1]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The cozero family is not locally finite at $0$, so this example does not contradict [L2] and refutes the displayed pointwise-finite claim. [L2, step 2.1, step 3.1]",
      "step": "4.1",
      "inputs": [
        "L2",
        "2.1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The counterexample uses the nonempty sequence indexed by n>=1."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 2.1--3.1 compute f(0)=0 and compare it with the values 1 approaching 0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 includes n=1 with positive radius r_1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 check that shared support endpoints carry value zero, so the cozero intervals remain disjoint."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 distinguish the closed support endpoints a_n,b_n from the open cozero interval."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "All points, intervals, and functions are given by explicit formulas."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The refuted statement is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The refuted statement is not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-a-non-locally-finite-sum-can-be-discontinuous",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-locally-finite-sums-are-continuous",
    "declared_target": "lem-locally-finite-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-non-locally-finite-sum-can-be-discontinuous",
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
    "id": "cex-a-non-locally-finite-sum-can-be-discontinuous",
    "file": "items/cex-a-non-locally-finite-sum-can-be-discontinuous.md",
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

## Full text of every cited or declared item (2)

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

### `lem-locally-finite-sums-are-continuous`

````markdown
---
id: lem-locally-finite-sums-are-continuous
kind: lemma
title: "A locally finite family of continuous nonnegative functions has a continuous pointwise sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
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
pipeline_run: null
---

## Statement

Let $\{f_s:X\to[0,\infty)\}_{s\in S}$ be continuous and suppose that
$\{\operatorname{coz}(f_s)\}_{s\in S}$ is locally finite. Then
$f(x):=\sum_{s\in S}f_s(x)$ is a well-defined continuous map $X\to[0,\infty)$.

## Facts & Assumptions

**Given:** A locally finite family of cozero sets of continuous nonnegative functions on $X$.

[F1] At every point, a locally finite family has a neighbourhood meeting only finitely many members ([[def-partition-of-unity-subordinate-to-a-cover]]).

[L1] A finite sum of continuous real-valued maps is continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ meeting only $\operatorname{coz}(f_{s_1}),\ldots,\operatorname{coz}(f_{s_n})$; every $f_s$ with $s\notin\{s_1,\ldots,s_n\}$ vanishes on $N$. [F1]

2.1 Thus at every point of $N$ the displayed pointwise sum equals the finite sum $f_{s_1}+\cdots+f_{s_n}$, so it is well defined and agrees on $N$ with a continuous function. [step 1.1, L1]

3.1 Since every point has such a neighbourhood $N$, the pointwise sum is continuous on $X$ and is nonnegative. [step 2.1] ∎
````

