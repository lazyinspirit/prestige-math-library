## Selection reasons

- high risk (5): 3 cited facts; boundary-sensitive language; quotient or equivalence-class construction

## Target item — `lem-normalizing-a-locally-finite-positive-family`

Normalized current SHA-256: `1cbe885203da4c32dd596b3ca404f34c7f6846692269c9973456d00331956aad`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-normalizing-a-locally-finite-positive-family
kind: lemma
title: "A locally finite nonnegative family with positive pointwise sum normalizes to a partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-locally-finite-sums-are-continuous, def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
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

Let $\{f_s:X\to[0,\infty)\}_{s\in S}$ be continuous with locally finite cozero
family, and suppose $f:=\sum_s f_s$ is positive at every point. Then
$\varphi_s:=f_s/f$ form a partition of unity; their cozero sets and supports are
the same as those of the corresponding $f_s$.

## Facts & Assumptions

**Given:** A locally finite nonnegative continuous family whose pointwise sum is everywhere positive.

[L1] The sum $f=\sum_s f_s$ is continuous ([[lem-locally-finite-sums-are-continuous]]).

[L2] A quotient of continuous real-valued maps is continuous on the cozero set of its denominator ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F1] A family of continuous maps $X\to[0,1]$ is a partition of unity exactly when its cozero family is locally finite and its pointwise sum is one ([[def-partition-of-unity-subordinate-to-a-cover]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the function $f$ is continuous, and the positivity hypothesis makes $\operatorname{coz}(f)=X$. [L1]

2.1 Therefore each $\varphi_s=f_s/f$ is continuous by [L2] and nonnegative. Since $f_s(x)\le f(x)$, it takes values in $[0,1]$, and positivity of $f$ gives $\operatorname{coz}(\varphi_s)=\operatorname{coz}(f_s)$. [step 1.1, L2]

3.1 At every $x\in X$, local finiteness makes the sum finite and gives $\sum_s\varphi_s(x)=\sum_sf_s(x)/f(x)=f(x)/f(x)=1$. [step 2.1]

4.1 The cozero family is unchanged, hence locally finite, and equality of cozero sets also gives equality of supports. Thus [F1] says that $\{\varphi_s\}$ is a partition of unity. [step 2.1, step 3.1, F1] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-normalizing-a-locally-finite-positive-family",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.rice.edu/~semmes/math443b.pdf"
  ],
  "rationale": "Rice §5.14.2 gives the same positive locally finite family, continuous sum, normalization psi_l=phi_l/Phi, unchanged positivity sets, and sum-one conclusion. The item adds the immediate support-equality consequence and uses the library's cozero terminology.",
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
      "source": "lem-locally-finite-sums-are-continuous",
      "source_section": "Statement",
      "quote": "Let $\\{f_s:X\\to[0,\\infty)\\}_{s\\in S}$ be continuous and suppose that\n$\\{\\operatorname{coz}(f_s)\\}_{s\\in S}$ is locally finite. Then\n$f(x):=\\sum_{s\\in S}f_s(x)$ is a well-defined continuous map $X\\to[0,\\infty)$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-algebra-of-continuous-real-maps-on-a-space",
      "source_section": "Statement",
      "quote": "Let $f,g:X\\to\\mathbb R$ be continuous maps from a topological space. Then\n$f+g$, $fg$, $|f|$, $\\max(f,g)$, and $\\min(f,g)$ are continuous. On the open\ncozero set $\\operatorname{coz}(g)$, the quotient $f/g$ is continuous. The same\nholds for every finite sum, product, maximum, or minimum of continuous\nreal-valued maps.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-partition-of-unity-subordinate-to-a-cover",
      "source_section": "Definition",
      "quote": "Let $X$ be a topological space and let $\\mathcal U$ be an open cover of $X$. A\nfamily $\\{\\varphi_s:X\\to[0,1]\\}_{s\\in S}$ is a **partition of unity** when each\n$\\varphi_s$ is continuous, the family of cozero sets\n$\\{\\operatorname{coz}(\\varphi_s)\\}_{s\\in S}$ is locally finite, and\n$$\\sum_{s\\in S}\\varphi_s(x)=1\\quad\\text{for every }x\\in X.$$\nThe sum is unambiguous because local finiteness says that only finitely many\nsummands are nonzero near, and hence at, any fixed point.\n\nIt is **subordinate to $\\mathcal U$** when for every $s\\in S$ some\n$U\\in\\mathcal U$ contains the support\n$$\\operatorname{supp}(\\varphi_s):=\\overline{\\operatorname{coz}(\\varphi_s)}.$$\nHere cozero sets and zero sets have the meanings of\n[[def-zero-sets-and-cozero-sets]].",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By [L1] the function $f$ is continuous, and the positivity hypothesis makes $\\operatorname{coz}(f)=X$. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Therefore each $\\varphi_s=f_s/f$ is continuous by [L2] and nonnegative. Since $f_s(x)\\le f(x)$, it takes values in $[0,1]$, and positivity of $f$ gives $\\operatorname{coz}(\\varphi_s)=\\operatorname{coz}(f_s)$. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "At every $x\\in X$, local finiteness makes the sum finite and gives $\\sum_s\\varphi_s(x)=\\sum_sf_s(x)/f(x)=f(x)/f(x)=1$. [step 2.1]",
      "step": "3.1",
      "inputs": [
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The cozero family is unchanged, hence locally finite, and equality of cozero sets also gives equality of supports. Thus [F1] says that $\\{\\varphi_s\\}$ is a partition of unity. [step 2.1, step 3.1, F1]",
      "step": "4.1",
      "inputs": [
        "F1",
        "2.1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--4.1 include X empty; if X is nonempty, positivity rules out an empty function family."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and steps 1.1--2.1 exclude a zero denominator pointwise while allowing individual f_s to vanish."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 2.1--4.1 give phi_s=1 for a one-function positive family."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--4.1 allow zero members and discard no needed cozero information."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 verifies both endpoints 0 and 1 of the codomain."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No potentially empty choice occurs."
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
    "source": "lem-normalizing-a-locally-finite-positive-family",
    "sourcePage": "partitions-of-unity-and-paracompactness",
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
    "source": "lem-normalizing-a-locally-finite-positive-family",
    "sourcePage": "partitions-of-unity-and-paracompactness",
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
    "source": "lem-normalizing-a-locally-finite-positive-family",
    "sourcePage": "partitions-of-unity-and-paracompactness",
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
[]
```

## Full text of every cited or declared item (3)

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

