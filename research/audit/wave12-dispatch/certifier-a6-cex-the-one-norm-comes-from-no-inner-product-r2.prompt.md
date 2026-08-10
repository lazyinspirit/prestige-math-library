# Independent repair certifier brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair or source
disposition you did not author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. For an item, read every dependency needed for the
repaired inference, the title/public statement, every numbered step, Facts &
Assumptions, Remarks, dependency list, provenance tags, sources, and
verification block. Check the named baseline defect is fixed without a new one
and that stale pre-repair judge/audited evidence is absent. Use web access when
an external source is material. For a source-correction task, open the retained
live source(s), compare the cited claim against them, and state whether the
final attribution and provenance class remain exact after the dead redundant
endpoint was removed.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned exact-final target — `cex-the-one-norm-comes-from-no-inner-product`

Item path: `items/cex-the-one-norm-comes-from-no-inner-product.md`

Normalized final-text SHA-256 at dispatch: `5cbe639f94fc321f582170d4346a6df19cda7fa254d0fd483033160dd7e0899d`

Target type(s): `A4-material`

- A4 material item repair requires exact-final independent certification

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "declared_target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-all-norms-on-rn-are-equivalent",
    "declared_target": "thm-all-norms-on-rn-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-the-one-norm-comes-from-no-inner-product",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "cex-the-one-norm-comes-from-no-inner-product",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2024/MAT520_Lecture_Notes.pdf"
  ],
  "rationale": "$\\\\lVert\\\\cdot\\\\rVert_1$ on $\\\\mathbb{R}^{2}$ violates the parallelogram law, so no symmetric bilinear form induces it: The source records the parallelogram-law obstruction for the one norm; the item rewrites the witness in the library’s R^2 coordinates and norm notation. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-the-one-norm-comes-from-no-inner-product
kind: counterexample
title: "$\\lVert\\cdot\\rVert_1$ on $\\mathbb{R}^{2}$ violates the parallelogram law, so no symmetric bilinear form induces it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, thm-all-norms-on-rn-are-equivalent, lem-standard-basis-of-f-n, def-integer-power, def-canonical-natural, lem-of-naturals-positive, thm-of-square-roots, def-abs-value, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Parallelogram law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parallelogram_law"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Princeton MAT520 Functional Analysis Lecture Notes"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2024/MAT520_Lecture_Notes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every norm on $\mathbb{R}^{2}$ arises from a symmetric
bilinear form, that is, for every norm $N$ there is a function
$B : \mathbb{R}^{2}\times\mathbb{R}^{2} \to \mathbb{R}$ that is symmetric and
additive and homogeneous in each argument, with $N(x) = \sqrt{B(x,x)}$ for every
$x$.

The witness is $N := \lVert\cdot\rVert_1$ on $\mathbb{R}^{2}$
([[def-p-norms-on-rn]]), and the obstruction is the parallelogram law, which
every such $N$ satisfies ([[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 3
is the instance for the Euclidean form, and the general computation is two lines
of bilinearity, done below) and which $\lVert\cdot\rVert_1$ fails at
$x = e_0$, $y = e_1$.

**What is and is not claimed.** What is refuted is the displayed claim, whose
hypothesis is a symmetric bilinear form on $\mathbb{R}^{2}$ written out in full.
The general converse — that a norm **satisfying** the parallelogram law is
induced by an inner product, the Jordan-von Neumann theorem — is **not proved
here and is not used here**; nor is any abstract theory of inner product spaces,
which belongs to a page of this library earlier in the plan order that is not yet
built ([[rem-rn-conventions-and-scope]]).

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{2}$ with $\lVert x\rVert_1 = |x_0|+|x_1|$ ([[def-p-norms-on-rn]]) and the standard basis vectors $e_0 = (1,0)$, $e_1 = (0,1)$ ([[lem-standard-basis-of-f-n]]).

[A1] The refuted claim at $N = \lVert\cdot\rVert_1$: there is a symmetric $B : \mathbb{R}^{2}\times\mathbb{R}^{2}\to\mathbb{R}$, additive and homogeneous in each argument, with $\lVert x\rVert_1 = \sqrt{B(x,x)}$ for every $x \in \mathbb{R}^{2}$.

[L1] $\lVert\cdot\rVert_1$ is a norm on $\mathbb{R}^{2}$, and $\lVert x\rVert_1 = |x_0|+|x_1|$ ([[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

[L2] Absolute values: $|1| = |-1| = 1$ and $|0| = 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L3] Square roots: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, so $\bigl(\sqrt{B(x,x)}\bigr)^{2} = B(x,x)$ whenever $B(x,x) \ge 0$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L4] Canonical naturals are strictly increasing and positive and carry sums to sums and products to products, so $\iota(2)^{2} = \iota(4)$, $\iota(4)+\iota(4) = \iota(8)$, $2\cdot 1 + 2\cdot 1 = \iota(4)$ and $\iota(8) \ne \iota(4)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] The Euclidean inner product is bilinear and symmetric and satisfies the parallelogram law for $\lVert\cdot\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 3).

## Counterexample

**Proof technique:** direct.

1.1 Assume [A1] and write $Q(x) := B(x,x)$, so $\lVert x\rVert_1^{2} = Q(x)$ for every $x$. [A1, L3]

1.2 By symmetry and additivity and homogeneity in each argument, $Q(x+y) = B(x+y,x+y) = Q(x) + 2B(x,y) + Q(y)$ and $Q(x-y) = Q(x) - 2B(x,y) + Q(y)$, hence $Q(x+y)+Q(x-y) = 2Q(x)+2Q(y)$ for all $x,y$. [A1]

1.3 Computing: $\lVert (1,1)\rVert_1 = |1|+|1| = \iota(2)$ and $\lVert (1,-1)\rVert_1 = |1|+|-1| = \iota(2)$, while $\lVert e_0\rVert_1 = \lVert e_1\rVert_1 = 1$. [L1, L2]

2.1 Instantiate step 1.2 at $x = e_0$, $y = e_1$: the left side is $\lVert (1,1)\rVert_1^{2} + \lVert (1,-1)\rVert_1^{2}$ and the right side is $2\lVert e_0\rVert_1^{2} + 2\lVert e_1\rVert_1^{2}$. [step 1.1, step 1.2]

3.1 So the left side of step 2.1 is $\iota(2)^{2}+\iota(2)^{2} = \iota(4)+\iota(4) = \iota(8)$ and the right side is $2\cdot 1 + 2\cdot 1 = \iota(4)$, giving $\iota(8) = \iota(4)$, which contradicts the strict increase of $\iota$. [step 2.1, step 1.3, L4]

4.1 Hence [A1] is false: no symmetric bilinear form on $\mathbb{R}^{2}$ induces $\lVert\cdot\rVert_1$, and in particular $\lVert\cdot\rVert_1 \ne \lVert\cdot\rVert_2$. [step 1.1, step 3.1, A1]

5.1 The parallelogram law does hold for $\lVert\cdot\rVert_2$, which is induced by the Euclidean inner product, so the failure above is a genuine separation between the two norms and not a defect of the computation. [L5] ∎

## Remarks

- **Equivalence of norms says nothing about inner products.** By [[thm-all-norms-on-rn-are-equivalent]] the norms $\lVert\cdot\rVert_1$ and $\lVert\cdot\rVert_2$ on $\mathbb{R}^{2}$ **are** equivalent: they have the same open sets, the same convergent sequences and the same Cauchy sequences. What the computation above shows is that they are nevertheless different norms, and that one of them cannot be written as $\sqrt{B(\cdot,\cdot)}$ for any symmetric bilinear $B$. Equivalence is a metric statement; the parallelogram law is not.

- **Only one instance of the law is needed.** The claim is refuted by a single pair $(e_0,e_1)$, and the arithmetic is $\iota(8) \ne \iota(4)$. No general theory is required, which is exactly why this item can be stated on a page that has no abstract inner products.

- **The converse direction is a different theorem.** That a norm satisfying the parallelogram law **is** induced by an inner product is the Jordan-von Neumann theorem, proved by polarisation; [[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 4 contains the polarisation identity for the Euclidean form, but the general theorem needs the abstract theory and is **not** asserted anywhere in this library.
````
