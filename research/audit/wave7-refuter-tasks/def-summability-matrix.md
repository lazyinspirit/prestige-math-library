## Selection reasons

- direct-citation consumer of pending genrisk seed cex-irregular-summability-matrix

## Target item — `def-summability-matrix`

Normalized current SHA-256: `f5dc9948af97bf3abd07a8d5012869394281e7cb80e82100085f9242f25b7f2f`

The complete current item follows, including frontmatter:

````markdown
---
id: def-summability-matrix
kind: definition
title: "A summability (Toeplitz) matrix, the transformed sequence $y_n = \\sum_k c_{n,k} x_k$, and regularity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-limit, def-finite-sum, lem-finite-sum-laws, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field]
forward_refs: [cex-irregular-summability-matrix, ex-cesaro-means-of-alternating]
justified_by: []
aliases: []
landmark: true
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
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 3"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Definition

A **summability matrix**, also called a **Toeplitz matrix**, is a function

$$c : \mathbb{N} \times \mathbb{N} \to \mathbb{R}, \qquad (n,k) \mapsto c_{n,k},$$

with **finite row support**: for every $n \in \mathbb{N}$ there is $R \in
\mathbb{N}$ such that $c_{n,k} = 0$ for every $k > R$. Such an $R$ is called an
**admissible bound for row $n$**. Rows are indexed by $n$ and columns by $k$; the
$k$-th **column** of $c$ is the sequence $n \mapsto c_{n,k}$ ([[def-sequence]]).

**The transform.** Let $(x_k)$ be a sequence of reals. The **transform of
$(x_k)$ by $c$** is the sequence $(y_n)$ given by

$$y_n \;:=\; \sum_{k=0}^{R} c_{n,k}\,x_k ,$$

where $R$ is any admissible bound for row $n$ and the sum is the finite sum of
[[def-finite-sum]]. We write $\sum_k c_{n,k} x_k$ for this value.

**This is well defined, and the check is the reason finite row support is part
of the definition.** Suppose $R \le R'$ are both admissible bounds for row $n$.
Splitting the longer sum ([[lem-finite-sum-laws]]) gives

$$\sum_{k=0}^{R'} c_{n,k}x_k \;=\; \sum_{k=0}^{R} c_{n,k}x_k \;+\; \sum_{k=R+1}^{R'} c_{n,k}x_k ,$$

and every term of the second sum has $k > R$, hence $c_{n,k} = 0$ and
$c_{n,k}x_k = 0$; a finite sum all of whose terms are $0$ is $0$, by the scaling
law of [[lem-finite-sum-laws]] with $\lambda = 0$. So the two agree. For two
arbitrary admissible bounds $R_1, R_2$, the order on $\mathbb{N}$ is total
([[thm-nat-linear-order]]), so each may be compared with the larger of the two,
and the three values agree. Hence $y_n$ is a single well-determined real for
each $n$, and $(y_n)$ is a sequence of reals.

Two instances of the transform have their own names. The **row sum** of row $n$
is $\sum_k c_{n,k}$, the transform of the constant sequence $1$; the **row
absolute sum** is $\sum_k |c_{n,k}|$, the transform of the constant sequence $1$
by the matrix $(n,k) \mapsto |c_{n,k}|$, which again has finite row support with
the same admissible bounds.

**Regularity.** The summability matrix $c$ is **regular** when for every
convergent sequence $(x_k)$ of reals the transform $(y_n)$ converges and

$$\lim_n y_n \;=\; \lim_k x_k .$$

Both limits are asserted to exist there: the right-hand one by hypothesis on
$(x_k)$, the left-hand one as part of the condition. Limits of real sequences
are unique ([[lem-limit-unique]], [[def-real-limit]]), so the condition is
unambiguous.

## Remarks

- **Finite row support is not a technical convenience, it is what makes the
  transform mean anything at all at this point of the library.** The classical
  definition allows every row to be an infinite series $\sum_{k=0}^{\infty}
  c_{n,k}x_k$, and asks that each such series converge. Series are not defined
  anywhere in this library yet; they arrive on the next page of this track. Every
  sum above is therefore a *finite* sum in the sense of [[def-finite-sum]], and
  no convergence question arises inside a row.

- **What is lost, and what is not.** The restriction excludes matrices such as
  the Abel and Borel means, whose rows are genuine series. It does not exclude
  anything needed here: the Cesaro matrix has $c_{n,k} = 1/(n+1)$ for $k \le n$
  and $0$ beyond ([[cor-cesaro-matrix-is-regular]]), so row $n$ has admissible
  bound $n$; and the counterexample of
  [[cex-irregular-summability-matrix]] has two nonzero entries per row.
  [[thm-silverman-toeplitz]] characterises regularity within this class.

- **Regularity says the transform is a genuine generalisation of the limit.** It
  is exactly the condition that $c$ never changes the value of a limit that
  already exists. It says nothing at all about sequences that do not converge,
  and the interest of such matrices is precisely that a regular one may still
  assign a value to a divergent sequence: the Cesaro matrix does so for the
  alternating sequence ([[ex-cesaro-means-of-alternating]]).

- **A matrix that fails regularity can fail it in two different ways**, by
  changing a limit or by destroying convergence outright.
  [[cex-irregular-summability-matrix]] does the second, which is the stronger
  failure.
````

## Wave 7 provenance row for the target

```json
{
  "id": "def-summability-matrix",
  "statement": "ai-altered",
  "proof": "not-applicable",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Toeplitz_matrix",
    "https://encyclopediaofmath.org/wiki/Summation_methods"
  ],
  "rationale": "The sources define matrix summation transforms, regularity, and the row/column conditions. The local definition restricts to finite row support so every transform is a finite sum and makes admissible row bounds explicit.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 7 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-irregular-summability-matrix",
    "declared_target": "cex-irregular-summability-matrix",
    "target_statement_provenance": "ai-generated",
    "targetPage": "equivalent-forms-of-completeness-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-summability-matrix",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-cesaro-means-of-alternating",
    "declared_target": "ex-cesaro-means-of-alternating",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[
  {
    "id": "cex-irregular-summability-matrix",
    "file": "items/cex-irregular-summability-matrix.md",
    "source": "provenance",
    "cone_size": 3,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cor-cesaro-matrix-is-regular",
        "via": [
          "forward_refs",
          "wikilink"
        ]
      },
      {
        "id": "def-summability-matrix",
        "via": [
          "forward_refs",
          "wikilink"
        ]
      },
      {
        "id": "thm-silverman-toeplitz",
        "via": [
          "forward_refs",
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (11)

### `cex-irregular-summability-matrix`

````markdown
---
id: cex-irregular-summability-matrix
kind: counterexample
title: "A summability matrix failing exactly one Silverman-Toeplitz condition and transforming a convergent sequence to a divergent one"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-silverman-toeplitz, def-summability-matrix, def-real-limit, def-sequence, def-finite-sum, lem-finite-sum-laws, lem-alternating-sequence, fs-bounded-implies-convergent, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, def-bounded-set, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a summability matrix whose columns tend to $0$ and whose row
sums tend to $1$ is regular; equivalently, the uniform bound on the row absolute
sums in [[thm-silverman-toeplitz]] is redundant.

The witness is the matrix with exactly two nonzero entries in each row,

$$c_{n,n} := -(n+1), \qquad c_{n,n+1} := n+2, \qquad c_{n,k} := 0 \text{ for } k \notin \{n, n+1\},$$

together with the null sequence $x_k := s_k/(k+1)$, where $(s_k)$ is the
alternating sequence of [[lem-alternating-sequence]]. Every column of $c$ is
eventually $0$; every row sum is exactly $1$; the row absolute sums are
$2n+3$ and are unbounded. The transform of $(x_k)$ is

$$y_n \;=\; -(n+1)\frac{s_n}{n+1} \;+\; (n+2)\frac{s_{n+1}}{n+2} \;=\; -s_n + s_{n+1} \;=\; -2 s_n,$$

which does not converge although $x_k \to 0$. So $c$ is not regular, and the
third condition of [[thm-silverman-toeplitz]] is not redundant.

## Facts & Assumptions

**Given:** The matrix $c$ above, the alternating sequence $(s_k)$ with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, and the sequence $x_k := s_k\,((k+1)\cdot 1_{\mathbb{R}})^{-1}$.

[L1] Summability matrices, the transform, row sums, row absolute sums and regularity ([[def-summability-matrix]], [[def-sequence]]); finite sums and their laws ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] The Silverman-Toeplitz conditions and the theorem that they characterise regularity ([[thm-silverman-toeplitz]]).

[L3] The alternating sequence: $|s_k| = 1$, $s_{k+1} = -s_k$ ([[lem-alternating-sequence]]); it does not converge ([[fs-bounded-implies-convergent]]).

[L4] Convergence of real sequences ([[def-real-limit]]); a sequence that is eventually $0$ converges to $0$; the reciprocal Archimedean property ([[cor-archimedean-reciprocal]]); no real bounds every canonical natural ([[thm-of-archimedean]], [[def-bounded-set]]).

[L5] Algebra of limits, in particular the scalar-multiple rule ([[thm-algebra-of-limits]]).

[L6] Order arithmetic: $(k+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| \ge 0$ and $|uv| = |u||v|$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $c$ is a summability matrix: row $n$ vanishes at every $k > n+1$, so $n+1$ is an admissible bound for row $n$. [L1]

1.2 Every column of $c$ converges to $0$: for fixed $k$, the entry $c_{n,k}$ is nonzero only when $n = k$ or $n + 1 = k$, so $c_{n,k} = 0$ for every $n \ge k+1$ and the column is eventually $0$. [L1, L4]

1.3 Every row sum is $1$: $\sum_k c_{n,k} = -(n+1) + (n+2) = 1$, so the row sums form the constant sequence $1$ and converge to $1$. [L1]

1.4 The row absolute sums are not bounded above: $\sum_k |c_{n,k}| = (n+1) + (n+2) = 2n+3$, and no real exceeds every canonical natural. [L1, L4, L6]

1.5 $(x_k)$ converges to $0$: $|x_k| = ((k+1)\cdot 1_{\mathbb{R}})^{-1}$, and given a real $\varepsilon > 0$ and a natural $m \ge 1$ with $1/m < \varepsilon$, every $k \ge m$ has $|x_k - 0| < \varepsilon$. [L3, L4, L6]

2.1 The transform of $(x_k)$ by $c$ is $y_n = c_{n,n}x_n + c_{n,n+1}x_{n+1} = -(n+1)\,s_n\,((n+1)\cdot 1)^{-1} + (n+2)\,s_{n+1}\,((n+2)\cdot 1)^{-1} = -s_n + s_{n+1} = -2s_n$. [step 1.1, step 1.5, L1, L3, L6]

3.1 $(y_n)$ does not converge: were $y_n \to M$, then $s_n = (-1/2)\,y_n$ would converge to $-M/2$ by the scalar-multiple rule, contradicting [L3]. [step 2.1, L3, L5]

4.1 So $c$ has null columns and row sums tending to $1$, yet transforms the convergent sequence $(x_k)$ into a divergent one and is therefore not regular; the claim is false, and by [[thm-silverman-toeplitz]] what fails is exactly the uniform bound on the row absolute sums, as step 1.4 confirms. [step 1.2, step 1.3, step 1.4, step 1.5, step 3.1, L1, L2] ∎

## Remarks

- **Exactly one condition fails**, and the counterexample is arranged so. The
  columns are eventually $0$ and the row sums are constantly $1$, so conditions
  1 and 2 of [[thm-silverman-toeplitz]] hold outright; only the uniform bound
  fails, and the failure is visible in a single line, $2n+3$ being unbounded.

- **How the failure is exploited.** The two entries of row $n$ are large and of
  opposite sign, so they nearly cancel on a slowly varying input and do not
  cancel at all on an alternating one. The input $x_k = s_k/(k+1)$ is chosen so
  that the large factors $n+1$ and $n+2$ exactly cancel the small factors
  $1/(n+1)$ and $1/(n+2)$, leaving the undamped oscillation $-2s_n$. That is the
  gliding hump of the necessity proof in
  [[thm-silverman-toeplitz]], in its simplest possible instance.

- **The failure is the stronger of the two possible ones.** A matrix can be
  irregular by changing a limit, for instance $c_{n,n} = 2$ and all other
  entries $0$, whose row sums tend to $2$ rather than $1$ and which sends
  $(x_k)$ to $(2x_k)$. The matrix above destroys convergence altogether.

- **Contrast with the Cesaro matrix**, whose rows are nonnegative and sum to $1$,
  so its row absolute sums are constantly $1$ and it is regular
  ([[cor-cesaro-matrix-is-regular]]). Uniform boundedness of the row absolute
  sums is what stops a weighting from amplifying, and it is the only one of the
  three conditions that is not tested by a single fixed input.
````

### `cor-cesaro-matrix-is-regular`

````markdown
---
id: cor-cesaro-matrix-is-regular
kind: corollary
title: "The Cesaro matrix satisfies the Silverman-Toeplitz conditions, giving a second proof of the Cesaro mean theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-silverman-toeplitz, def-summability-matrix, def-cesaro-mean, def-sequence, def-finite-sum, lem-finite-sum-laws, def-real-limit, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
forward_refs: [cex-irregular-summability-matrix]
justified_by: []
aliases: []
landmark: false
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
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
pipeline_run: null
---

## Statement

Define $c_{n,k} := (n+1)^{-1}$ for $k \le n$ and $c_{n,k} := 0$ for $k > n$.
Then:

1. $c$ is a summability matrix ([[def-summability-matrix]]), with $n$ an
   admissible bound for row $n$;
2. the transform of a sequence $(x_k)$ by $c$ is exactly its sequence of Cesaro
   means ([[def-cesaro-mean]]), $y_n = \sigma_n$;
3. $c$ satisfies the three conditions of [[thm-silverman-toeplitz]], so $c$ is
   regular.

Consequently every convergent sequence has $\sigma_n \to \lim_k x_k$, which is a
second proof of [[thm-cesaro-mean-theorem]], obtained from the general
characterisation rather than from a direct estimate.

## Facts & Assumptions

**Given:** The matrix $c$ with $c_{n,k} = (n+1)^{-1}$ for $k \le n$ and $c_{n,k} = 0$ for $k > n$.

[L1] Summability matrices: finite row support, the transform, the row sum, the row absolute sum and regularity ([[def-summability-matrix]], [[def-sequence]]).

[L2] The Cesaro means $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n} x_k$ ([[def-cesaro-mean]]).

[L3] Silverman-Toeplitz: a summability matrix is regular exactly when every column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded ([[thm-silverman-toeplitz]]).

[L4] Finite sums and their laws, in particular $\sum_{k<d}\lambda = d\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/m < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ for every $n \in \mathbb{N}$ ([[lem-of-naturals-positive]]); a positive element is invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Row $n$ of $c$ vanishes at every $k > n$, so $n$ is an admissible bound for row $n$ and $c$ is a summability matrix; its transform is $y_n = \sum_{k=0}^{n}(n+1)^{-1}x_k = (n+1)^{-1}\sum_{k=0}^{n}x_k = \sigma_n$. [L1, L2, L4]

1.2 For every $n$ the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$ is positive, hence invertible with $(n+1)^{-1} > 0$; so $|c_{n,k}| = c_{n,k}$ for all $n,k$. [L7]

2.1 **Columns are null.** Fix $k$ and let $\varepsilon > 0$; choose $m \ge 1$ with $1/m < \varepsilon$. For $n \ge m$ one has $n + 1 > m$, so $|c_{n,k} - 0| \le (n+1)^{-1} < 1/m < \varepsilon$, the case $n < k$ giving $c_{n,k} = 0$ outright. Hence $\lim_n c_{n,k} = 0$. [step 1.2, L5, L6, L7]

2.2 **Row sums tend to $1$.** For every $n$, $\sum_k c_{n,k} = \sum_{k=0}^{n}(n+1)^{-1} = (n+1)(n+1)^{-1} = 1$, a constant sequence, which converges to $1$. [step 1.1, step 1.2, L1, L4, L5]

2.3 **Row absolute sums are uniformly bounded.** For every $n$, $\sum_k |c_{n,k}| = \sum_k c_{n,k} = 1 \le 1$. [step 1.1, step 1.2, L1, L4]

3.1 All three conditions hold, so $c$ is regular. [step 2.1, step 2.2, step 2.3, L3]

4.1 Therefore, for every convergent sequence $(x_k)$, the transform $(\sigma_n)$ converges with $\lim_n \sigma_n = \lim_k x_k$. [step 1.1, step 3.1, L1] ∎

## Remarks

- **Which condition is doing what.** For the Cesaro matrix the row sums and the
  row absolute sums are not merely convergent and bounded, they are constantly
  $1$; the whole content is that the columns are null, that is, that each single
  term contributes a weight $1/(n+1)$ which fades away. That is the precise
  sense in which averaging forgets any finite head, and it is why
  [[fs-cesaro-converse]] is false: forgetting the head is not the same as
  recovering the sequence.

- **Two proofs, two costs.** [[thm-cesaro-mean-theorem]] is proved directly by a
  head-and-tail estimate, with no machinery at all;
  [[thm-silverman-toeplitz]] proves the same estimate once for every weighting
  and then reads the Cesaro case off three trivial verifications. Both are kept,
  because the direct proof is what a reader should see first and the general one
  is what generalises.

- **A weighting with unbounded row absolute sums need not be regular**, and the
  Cesaro matrix is as far from that as possible, its rows being nonnegative and
  summing to $1$. See [[cex-irregular-summability-matrix]] for the contrast.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `ex-cesaro-means-of-alternating`

````markdown
---
id: ex-cesaro-means-of-alternating
kind: example
title: "The Cesaro means of $(-1)^k$ converge to $0$ although the sequence diverges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cesaro-mean, fs-cesaro-converse, fs-bounded-implies-convergent, lem-alternating-sequence, cor-archimedean-reciprocal, def-finite-sum, def-real-limit, def-sequence, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], the
unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, usually
written $s_k = (-1)^k$. Its Cesaro means ([[def-cesaro-mean]]) are

$$\sigma_n \;=\; \frac{s_0 + \dots + s_n}{n+1} \;=\; \begin{cases} \dfrac{1}{n+1} & n \text{ even},\\[4pt] 0 & n \text{ odd},\end{cases}$$

so the first few values are

$$\sigma_0 = 1,\quad \sigma_1 = 0,\quad \sigma_2 = \tfrac13,\quad \sigma_3 = 0,\quad \sigma_4 = \tfrac15,\quad \sigma_5 = 0,\ \dots$$

and $\lim_n \sigma_n = 0$, while $(s_k)$ does not converge at all. So $(s_k)$ is
$(C,1)$-summable to $0$ and divergent: it is the standard witness that
$(C,1)$-summability is strictly weaker than convergence, and the one used in
[[fs-cesaro-converse]].

The value $0$ is the one an average ought to give, since the sequence spends
half its indices at $1$ and half at $-1$; the classical way to say this is that
the series $1 - 1 + 1 - 1 + \dots$ has Cesaro sum $\tfrac12$, that being the
Cesaro limit of its partial sums rather than of its terms.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, its partial sums $S_n = \sum_{k<n} s_k$, and its Cesaro means $\sigma_n = (n+1)^{-1}S_{n+1}$.

[L1] The alternating sequence and its index maps $e$ (even indices) and $o$ (odd indices), with $\mathbb{N}$ the disjoint union of their ranges and $s_{e_j} = 1$, $s_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Its partial sums satisfy $S_{e_j} = 0$ and $S_{o_j} = 1$, and consequently $|\sigma_n| \le (n+1)^{-1}$ and $\sigma_n \to 0$; this is proved in [[fs-cesaro-converse]], steps 2.1, 3.1, 4.1 and 5.1 there.

[L3] $(s_k)$ is bounded and does not converge ([[fs-bounded-implies-convergent]]).

[L4] The Cesaro means and $(C,1)$-summability ([[def-cesaro-mean]], [[def-finite-sum]], [[def-sequence]]).

[L5] Convergence of a real sequence ([[def-real-limit]]); the reciprocal Archimedean property ([[cor-archimedean-reciprocal]]).

[L6] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $S_m = 0$ when $m$ is even and $S_m = 1$ when $m$ is odd, since $\mathbb{N}$ is the disjoint union of the ranges of $e$ and $o$ and $S_{e_j} = 0$, $S_{o_j} = 1$. [L1, L2]

1.2 $(s_k)$ does not converge. [L3]

2.1 Hence $\sigma_n = (n+1)^{-1}S_{n+1}$ equals $(n+1)^{-1}$ when $n$ is even, because $n+1$ is then odd, and equals $0$ when $n$ is odd; in particular $\sigma_0 = 1$, $\sigma_1 = 0$, $\sigma_2 = 1/3$, $\sigma_3 = 0$, $\sigma_4 = 1/5$ and $\sigma_5 = 0$. [step 1.1, L4, L6]

2.2 $|\sigma_n| \le (n+1)^{-1}$ for every $n$, and given a real $\varepsilon > 0$ a natural $m \ge 1$ with $1/m < \varepsilon$ gives $|\sigma_n| \le (n+1)^{-1} < \varepsilon$ for all $n \ge m$; so $\lim_n \sigma_n = 0$. [step 1.1, L2, L5, L6]

3.1 $(s_k)$ is therefore $(C,1)$-summable to $0$ and divergent. [step 1.2, step 2.1, step 2.2, L4] ∎

## Remarks

- **The means converge but are not monotone**, and they are not even eventually
  of one shape: they alternate between $0$ and a positive value shrinking like
  $1/(n+1)$. Convergence of a Cesaro transform therefore carries no monotonicity
  information, which is another way of seeing that the transform loses the
  oscillation rather than damping it.

- **Where the $1/2$ comes from.** The classical assertion "$1 - 1 + 1 - 1 +
  \dots = 1/2$" is about the *partial sums* $S_m$, which are $0, 1, 0, 1,
  \dots$; their Cesaro means tend to $1/2$. This library has no theory of series
  yet, so nothing above asserts it; the sequence averaged here is $(s_k)$
  itself, whose means tend to $0$.

- **This is not a failure of the Cesaro matrix.** That matrix is regular
  ([[cor-cesaro-matrix-is-regular]]): it never changes a limit that exists. What
  it does here is assign a value where no limit exists, which is exactly what a
  summability method is for.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-limit-unique`

````markdown
---
id: lem-limit-unique
kind: lemma
title: "A sequence has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, thm-of-archimedean, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits are unique"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and reals $x, y$ such that $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: $(x_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in any ordered field, in particular in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L4] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$. Either route gives this: density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) applied to the pair $0 < \eta$; or the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$, which yields a natural $n \ge 1$ with $1/\eta < n$ and hence $0 < 1/n < \eta$ ([[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$. Trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; transitivity and irreflexivity of $<$; and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]). Adding two strict inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]). Multiplying by a positive: for $c > 0$, $a < b$ gives $ac < bc$ ([[lem-of-sign-rules]]). Halving a positive: $1 > 0$ ([[cor-of-one-positive]]), so $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]), hence $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $\eta/2 = \eta \cdot 2^{-1} > 0$ whenever $\eta > 0$ ([[lem-of-sign-rules]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices $K_1, K_2$ admit an index $k$ with $k \ge K_1$ and $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $x \ne y$. [assume-contra]

2.1 Then $x - y \ne 0$, so $|x - y| \ne 0$ while $|x - y| \ge 0$; by trichotomy $|x - y| > 0$, and hence $|x - y|/2 > 0$. [step 1.1, L3, L5]

3.1 Choose a rational $\varepsilon$ with $0 < \varepsilon < |x - y|/2$; multiplying that inequality by $2 > 0$ and using $(|x - y|/2) \cdot 2 = |x - y|$ gives $2\varepsilon < |x - y|$. [step 2.1, L4, L5, algebra, choose]

4.1 Since $(x_k)$ converges to $x$ there is $K_1$ with $|x_k - x| < \varepsilon$ for all $k \ge K_1$, and since $(x_k)$ converges to $y$ there is $K_2$ with $|x_k - y| < \varepsilon$ for all $k \ge K_2$. [step 3.1, L1]

5.1 Fix an index $k$ with $k \ge K_1$ and $k \ge K_2$; then $|x - y| = |(x - x_k) + (x_k - y)| \le |x - x_k| + |x_k - y| = |x_k - x| + |x_k - y|$, while adding the two strict inequalities of step 4.1 gives $|x_k - x| + |x_k - y| < \varepsilon + \varepsilon = 2\varepsilon$; composing the non-strict inequality with the strict one yields $|x - y| < 2\varepsilon$. [step 4.1, L2, L3, L5, L6]

6.1 Combining, $2\varepsilon < |x - y| < 2\varepsilon$, so $2\varepsilon < 2\varepsilon$, which contradicts irreflexivity of the strict order. [step 3.1, step 5.1, L5]

7.1 The assumption $x \ne y$ is therefore untenable, so $x = y$: a sequence of reals has at most one limit. [step 6.1, discharge-contradiction] ∎

## Remarks

- Uniqueness is what licenses the notation $\lim_{k} x_k$ and the phrase *the* limit. Without it the symbol would not denote. This library writes $\lim_k x_k$ only for sequences already known to converge, exactly as it writes $\sup S$ only for sets already known to have a supremum ([[rem-sup-conventions]]).

- The proof uses only that $\mathbb{R}$ is an ordered field in which arbitrarily small positive rationals exist, that is, an Archimedean ordered field ([[thm-of-archimedean]]). Completeness is not needed: limits are unique in $\mathbb{Q}$ too, where many sequences fail to have one.

- The hypothesis is genuinely about a single sequence having two limits. Two *different* sequences may of course share a limit, and a sequence with no limit at all is not excluded by anything here.
````

### `thm-nat-linear-order`

````markdown
---
id: thm-nat-linear-order
kind: theorem
title: "$\\le$ is a linear order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-omega-is-peano-system]
aliases: []
landmark: true
short: "reflexive, antisymmetric, transitive, total"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]) and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ and addition is associative ([[lem-nat-add-identity]], [[lem-nat-add-associative]]).

[L2] Cancellation: $m + k = n + k \Rightarrow m = n$ ([[lem-nat-add-cancellative]]).

[L3] Every nonzero natural is a successor: if $j \ne 0$ then $j = \sigma(i)$ for some $i$ ([[lem-nat-nonzero-is-successor]]).

[L4] Trichotomy: exactly one of $m < n$, $m = n$, $m > n$ holds ([[lem-nat-trichotomy]]).

[L5] Addition is commutative ([[lem-nat-add-commutative]]).

[L6] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Reflexive: $m + 0 = m$, so $m \le m$. [given]

1.2 Transitive: if $m \le n$ and $n \le p$, say $m + k = n$ and $n + j = p$, then $m + (k + j) = (m + k) + j = n + j = p$, so $m \le p$. [given, L1]

1.3 A sum is zero only if both summands are: if $k + j = 0$ with $j \ne 0$ then $j = \sigma(i)$ and $k + j = k + \sigma(i) = \sigma(k + i) \ne 0$ [L6], a contradiction, so $k = j = 0$. [L1, L3, L6]

1.4 Total: by trichotomy one of $m < n$, $m = n$, $m > n$ holds, and each of these gives $m \le n$ or $n \le m$. [L4]

2.1 Antisymmetric: if $m \le n$ and $n \le m$, say $m + k = n$ and $n + j = m$, then $m + (k + j) = (m + k) + j = n + j = m = m + 0$; commuting both sides [L5] gives $(k + j) + m = 0 + m$, and cancelling the common right summand $m$ [L2] gives $k + j = 0$, hence $k = j = 0$ by step 1.3 and $m = n$. [given, L1, L2, L5, step 1.3]

3.1 Reflexivity, antisymmetry, transitivity, and totality all hold, so $\le$ is a linear order on $\mathbb{N}$. [step 1.1, step 1.2, step 2.1, step 1.4] ∎
````

### `thm-silverman-toeplitz`

````markdown
---
id: thm-silverman-toeplitz
kind: theorem
title: "A summability matrix with only finitely many nonzero entries per row is regular iff each column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-summability-matrix, def-sequence, thm-of-archimedean, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-of-abs-value, def-real-limit, lem-rat-embeds-dense, lem-convergent-implies-bounded, thm-algebra-of-limits, cor-archimedean-reciprocal, def-complete-ordered-field, def-upper-bound, def-bounded-set, lem-finite-set-has-max, def-max-min, thm-recursion, thm-well-ordering-principle, thm-induction-principle, thm-nat-linear-order, lem-index-map-grows, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, lem-limit-unique, def-ordered-field]
forward_refs: [cex-irregular-summability-matrix]
justified_by: []
aliases: []
landmark: true
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
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 3"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

Let $c$ be a summability matrix ([[def-summability-matrix]]), so that every row
has only finitely many nonzero entries. Then $c$ is regular if and only if all
three of the following hold:

1. **(Columns are null.)** For every $k \in \mathbb{N}$ the $k$-th column
   converges with $\lim_n c_{n,k} = 0$.
2. **(Row sums tend to $1$.)** The sequence of row sums converges with
   $\lim_n \sum_k c_{n,k} = 1$.
3. **(Row absolute sums are uniformly bounded.)** There is $M \in \mathbb{R}$
   with $\sum_k |c_{n,k}| \le M$ for every $n \in \mathbb{N}$.

In 1 and 2 the existence of the limit is part of the assertion. The notation is
licensed by uniqueness of limits of real sequences ([[lem-limit-unique]]).

Condition 3 is the one that cannot be seen on any single sequence: 1 and 2 are
read off two particular convergent inputs, while the necessity of 3 needs a
sequence built against the matrix, by a gliding hump.

## Facts & Assumptions

**Given:** A summability matrix $c : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ with finite row support. For a sequence $(x_k)$ of reals we write $(y_n)$ for its transform, $y_n = \sum_k c_{n,k}x_k$, and $r_n := \sum_k |c_{n,k}|$ for the row absolute sums.

[L1] Summability matrices: finite row support, the transform and its independence of the admissible row bound used, the row sum, the row absolute sum, and regularity ([[def-summability-matrix]], [[def-sequence]]).

[L2] Finite sums ([[def-finite-sum]]) and their laws: additivity, scaling with $\sum_{k<d}\lambda = d\lambda$, splitting, and monotonicity in the terms ([[lem-finite-sum-laws]]).

[L3] Triangle inequality for finite sums ([[lem-triangle-inequality-finite]]); $|uv| = |u|\,|v|$, $|u| \ge 0$, $\big||u|\big| = |u|$ and $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

[L4] Convergence: for every real $\varepsilon > 0$ there is $N$ beyond which the terms are within $\varepsilon$ of the limit, the rational and real formulations agreeing ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]); limits are unique ([[lem-limit-unique]]); a sequence that is eventually $0$ converges to $0$.

[L5] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L6] Algebra of limits for sums and scalar multiples ([[thm-algebra-of-limits]]).

[L7] Archimedean property of $\mathbb{R}$: for every real $z$ there is a natural $n \ge 1$ with $z < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); equivalently, for every real $\varepsilon > 0$ there is a natural $J \ge 1$ with $1/J < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a supremum, which dominates every element of the set ([[def-complete-ordered-field]], [[def-upper-bound]], [[def-bounded-set]]).

[L9] Every nonempty finite set of reals has a maximum, which lies in the set and dominates it ([[lem-finite-set-has-max]], [[def-max-min]]).

[L10] Recursion theorem ([[thm-recursion]]); well-ordering principle ([[thm-well-ordering-principle]]); induction principle ([[thm-induction-principle]]); totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]); and consecutive comparisons suffice for strict increase, with $k_j \ge j$ for a strictly increasing index map ([[lem-index-map-grows]]).

[L11] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); for $c > 0$, $a \le b$ if and only if $ac \le bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); canonical naturals are positive and increasing ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Sufficiency.** Assume conditions 1, 2 and 3, let $(x_k)$ converge to $L$, and let $\varepsilon > 0$ be an arbitrary real; fix $M \ge 0$ as in condition 3, and fix $D \ge 0$ with $|x_k - L| \le D$ for every $k$, which exists because a convergent sequence is bounded. [L1, L3, L4, L5, L11, choose]

1.2 Choose $K \in \mathbb{N}$ with $|x_k - L| < \varepsilon\,(3(M+1))^{-1}$ for every $k \ge K$. [L4, L11, choose]

1.3 For every $n$, choosing an admissible bound $R \ge K$ for row $n$, one has $y_n - L = \sum_{k=0}^{R} c_{n,k}(x_k - L) + \big(\textstyle\sum_k c_{n,k} - 1\big)L$, since $\sum_{k=0}^{R} c_{n,k}L = L\sum_k c_{n,k}$. [L1, L2]

1.4 **Necessity.** The remaining steps, apart from 2.1, 2.2, 2.3 and 3.1 which finish the sufficiency argument above, assume instead that $c$ is regular. [L1]

1.5 Suppose, towards a contradiction, that the row absolute sums $(r_n)$ are not bounded above, that is, for every $T \in \mathbb{R}$ there is $n$ with $r_n > T$. [L1, L11, assume-contra]

1.6 For each $n$ the set of admissible bounds for row $n$ is a nonempty subset of $\mathbb{N}$, so it has a least element $\rho(n)$; thus $c_{n,k} = 0$ for every $k > \rho(n)$, and every $R \ge \rho(n)$ is admissible for row $n$. [L1, L10]

2.1 For every $n$: $\big|\sum_{k=0}^{R} c_{n,k}(x_k-L)\big| \le \sum_{k<K}|c_{n,k}|\,|x_k-L| + \sum_{k=K}^{R}|c_{n,k}|\,|x_k-L| \le D\sum_{k<K}|c_{n,k}| + \varepsilon\,(3(M+1))^{-1} r_n \le D\sum_{k<K}|c_{n,k}| + \varepsilon/3$, the last step because $r_n \le M < M+1$. [step 1.1, step 1.2, step 1.3, L2, L3, L11]

2.2 By condition 1 each of the finitely many columns $k < K$ satisfies $c_{n,k} \to 0$, hence $|c_{n,k}| \to 0$ since $\big||c_{n,k}| - 0\big| = |c_{n,k} - 0|$; a sum of finitely many null sequences is null, by induction on the number of summands, so $\sum_{k<K}|c_{n,k}| \to 0$ in $n$ and there is $N_1$ with $\sum_{k<K}|c_{n,k}| < \varepsilon\,(3(D+1))^{-1}$ for every $n \ge N_1$. [step 1.1, step 1.2, L3, L4, L6, L10, L11, choose]

2.3 By condition 2 there is $N_2$ with $\big|\sum_k c_{n,k} - 1\big| < \varepsilon\,(3(|L|+1))^{-1}$ for every $n \ge N_2$, so that $\big|(\sum_k c_{n,k} - 1)L\big| < \varepsilon/3$ for such $n$. [step 1.1, L3, L4, L11, choose]

2.4 **Condition 1 holds.** Fix $k$ and let $e$ be the sequence with $e_k = 1$ and $e_j = 0$ for $j \ne k$; it is eventually $0$, so it converges to $0$, and its transform at row $n$ is $c_{n,k}$ because every other term of the row sum vanishes. Regularity gives $\lim_n c_{n,k} = 0$. [step 1.4, L1, L2, L4]

2.5 **Condition 2 holds.** The constant sequence with value $1$ converges to $1$ and its transform at row $n$ is the row sum $\sum_k c_{n,k}$, so regularity gives $\lim_n \sum_k c_{n,k} = 1$. [step 1.4, L1, L4]

3.1 For every $n$ beyond both $N_1$ and $N_2$: $|y_n - L| \le D\sum_{k<K}|c_{n,k}| + \varepsilon/3 + \varepsilon/3 < \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon$; as $\varepsilon$ was arbitrary, $y_n \to L$, and as $(x_k)$ was an arbitrary convergent sequence, $c$ is regular. [step 1.3, step 2.1, step 2.2, step 2.3, L1, L4, L10, L11]

3.2 Each column converges, hence is bounded, so $M_k := \sup\{\,|c_{n,k}| : n \in \mathbb{N}\,\}$ exists in $\mathbb{R}$ for every $k$; putting $B_m := \sum_{k=0}^{m} M_k$ one has $\sum_{k=0}^{m}|c_{n,k}| \le B_m$ for every $n$ and every $m$, and $B_m \ge 0$. [step 2.4, L2, L3, L5, L8, L11]

4.1 Define by recursion $k_0 := 0$, $n_0 := 0$ and, for $j \ge 1$, first $T_j := $ the larger of $\max\{r_n : n \le n_{j-1}\}$ and $B_{k_{j-1}} + j\,(j + B_{k_{j-1}})$, then $n_j := \min\{n : r_n > T_j\}$, which exists by step 1.5 and well-ordering, and then $k_j := $ the larger of $k_{j-1}+1$ and $\rho(n_j)$; then $n_j > n_{j-1}$, because $r_{n_j}$ exceeds every $r_n$ with $n \le n_{j-1}$, and $k_{j-1} < k_j$ with $c_{n_j,k} = 0$ for every $k > k_j$, and $r_{n_j} > B_{k_{j-1}} + j\,(j + B_{k_{j-1}})$. [step 1.5, step 1.6, step 3.2, L9, L10, L11, construct]

5.1 Since $(k_j)$ is strictly increasing with $k_0 = 0$, every $k \ge 1$ lies in exactly one block $k_{j-1} < k \le k_j$ with $j \ge 1$; define $x_0 := 0$ and, for $k$ in the $j$-th block, $x_k := \operatorname{sgn}(c_{n_j,k})\,j^{-1}$, where $\operatorname{sgn}(t) := 1$ for $t \ge 0$ and $\operatorname{sgn}(t) := -1$ for $t < 0$. Then $|x_k| \le 1$ for every $k$, and $x_k \to 0$: given $\varepsilon > 0$, take $J \ge 1$ with $1/J < \varepsilon$, and every $k > k_J$ lies in a block with index $j > J$, so $|x_k| = 1/j < 1/J < \varepsilon$. [step 4.1, L3, L7, L10, L11, construct]

6.1 For every $j \ge 1$: the terms of $y_{n_j}$ with $k > k_j$ vanish, so $y_{n_j} = \sum_{k \le k_{j-1}} c_{n_j,k}x_k + \sum_{k_{j-1} < k \le k_j} c_{n_j,k}x_k$; the second sum equals $j^{-1}\sum_{k_{j-1}<k\le k_j}|c_{n_j,k}| = j^{-1}\big(r_{n_j} - \sum_{k \le k_{j-1}}|c_{n_j,k}|\big) \ge j^{-1}(r_{n_j} - B_{k_{j-1}})$, while the first has absolute value at most $\sum_{k\le k_{j-1}}|c_{n_j,k}| \le B_{k_{j-1}}$; hence $y_{n_j} \ge j^{-1}(r_{n_j} - B_{k_{j-1}}) - B_{k_{j-1}} > j^{-1}\,j\,(j + B_{k_{j-1}}) - B_{k_{j-1}} = j$. [step 3.2, step 4.1, step 5.1, L2, L3, L11]

7.1 But $(x_k)$ converges to $0$, so regularity makes $(y_n)$ converge, hence bounded, so some $S \in \mathbb{R}$ has $|y_n| \le S$ for every $n$; taking $j$ with $j \cdot 1_{\mathbb{R}} > S$, available by the Archimedean property, step 6.1 gives $y_{n_j} > j > S$, a contradiction. [step 1.4, step 5.1, step 6.1, L1, L5, L7, L11]

8.1 The assumption of step 1.5 is therefore untenable and condition 3 holds; with steps 2.4 and 2.5, regularity implies all three conditions. [step 2.4, step 2.5, step 7.1, discharge-contradiction]

9.1 Sufficiency is step 3.1 and necessity is step 8.1, so $c$ is regular exactly when conditions 1, 2 and 3 all hold. [step 3.1, step 8.1] ∎

## Remarks

- **No one of the three conditions follows from the other two**, and each is tested by a different input. Condition 1 is what a single nonzero coordinate detects, condition 2 what the constant sequence detects, and condition 3 is invisible to any fixed sequence: for each individual bounded input a matrix with unbounded row absolute sums may behave perfectly well, and the failure only appears against a sequence whose signs are chosen row by row. The substantial case is 3, and it is [[cex-irregular-summability-matrix]], which exhibits a matrix satisfying 1 and 2 and failing 3, together with a null sequence whose transform diverges. The other two are settled in a line each and are recorded here rather than given items of their own: the matrix with $c_{n,0} = 1$ and every other entry $0$ has row sums and row absolute sums constantly $1$, so it satisfies 2 and 3, while its $0$-th column is constantly $1$ and fails 1; and the zero matrix has null columns and row absolute sums $0$, so it satisfies 1 and 3, while its row sums are constantly $0$ and fail 2.

- **The gliding hump.** The witness of the necessity argument is built in blocks: on the $j$-th block its terms have modulus $1/j$, so the sequence tends to $0$, and their signs are chosen to align with the entries of one row $n_j$, so that on that row the transform picks up almost the whole row absolute sum, divided by $j$. Choosing $r_{n_j}$ larger than $j$ times its own head bound makes the transform exceed $j$ there. The bound $B_{k_{j-1}}$ on the head is available *before* $n_j$ is chosen, because it depends only on the earlier block boundary, and that is what keeps the construction from circling.

- **No choice is used.** Every stage of the recursion takes a least element or a maximum of a finite set; the row bound $\rho(n)$ is the least admissible one; and $M_k$ is a supremum, that is, a definite element of $\mathbb{R}$ rather than a selected bound.
````

