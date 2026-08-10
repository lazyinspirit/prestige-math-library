## Assigned exact-final target — `cex-uniform-convergence-does-not-control-derivatives`

Item path: `items/cex-uniform-convergence-does-not-control-derivatives.md`

Normalized final-text SHA-256 at dispatch: `197e3cc91645ccd4fc1c7e909eb53b0ea62c6fe99f6179d87cb83143e59a37b3`

Target type(s): `A6-source-correction`

- A6 replaced general differentiation-interchange routes with exact TCD/KSU sources for this rational witness

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "declared_target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
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
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-square-positive",
    "declared_target": "lem-of-square-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
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
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
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
  "id": "cex-uniform-convergence-does-not-control-derivatives",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.maths.tcd.ie/~pete/ma2223/2015sol.pdf",
    "https://faculty.ksu.edu.sa/sites/default/files/Model%20solution_0.pdf"
  ],
  "rationale": "Trinity College Dublin’s MA2223 Homework 3 solutions use f_n(x)=x/(1+n^2x^2), compute its supremum 1/(2n), and prove uniform convergence to zero; the King Saud University model solution computes f_n'(0)=1 while the zero limit has derivative zero. The item extends the elementary uniform estimate to all of R, reindexes n at zero by a_k=iota(k+1), and supplies the complete dependency-licensed quotient-rule proof. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-uniform-convergence-does-not-control-derivatives
kind: counterexample
title: "$x/(1+(k+1)^2x^2)$ converges uniformly to zero on $\\mathbb{R}$ while every derivative at zero equals one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-derivative, def-canonical-natural, cor-archimedean-reciprocal, lem-of-square-positive, lem-of-abs-value, def-integer-power, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Trinity College Dublin MA2223, Homework 3 Solutions"
      url: "https://www.maths.tcd.ie/~pete/ma2223/2015sol.pdf"
    - title: "King Saud University, Final Exam Model Solution"
      url: "https://faculty.ksu.edu.sa/sites/default/files/Model%20solution_0.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if differentiable functions converge uniformly, their
derivatives must converge to the derivative of the limit.

For $k\in\mathbb{N}$ put $a_k:=\iota(k+1)$ and define

$$f_k(x):=\frac{x}{1+a_k^2x^2}\qquad(x\in\mathbb{R}).$$

Then $f_k\to0$ uniformly on $\mathbb{R}$, but $f_k'(0)=1$ for every $k$, whereas
the derivative of the zero function is $0$.

## Facts & Assumptions

**Given:** The functions $f_k$ in the Statement, with $a_k=\iota(k+1)>0$.

[L1] Every square in an ordered field is nonnegative, with a nonzero square positive; absolute value is multiplicative ([[lem-of-square-positive]], [[lem-of-abs-value]]).

[L2] Natural powers are differentiable by the power rule, and sums, products, and quotients with nonzero denominator obey the usual derivative rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-integer-power]]).

[L3] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

[L4] Uniform convergence requires one index controlling the error at every point ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 The denominator $1+a_k^2x^2$ is positive for every $x$, so $f_k$ is differentiable on $\mathbb{R}$ by [L2]. [L1, L2]

1.2 From $(a_k|x|-1)^2\ge0$ one obtains $2a_k|x|\le1+a_k^2x^2$, hence $|f_k(x)|\le1/(2a_k)$ for every $x\in\mathbb{R}$. [L1, algebra]

1.3 At $x=0$, the numerator $x$ has derivative $1$, the denominator $1+a_k^2x^2$ has value $1$ and derivative $0$, so the quotient rule gives $f_k'(0)=1$. [L2, algebra]

1.4 The zero function has derivative $0$ by the constant case of the power rule. [L2]

2.1 Given $\varepsilon>0$, [L3] gives $N$ such that $1/(2a_k)<\varepsilon$ for every $k\ge N$; step 1.2 then gives $|f_k(x)|<\varepsilon$ for every $x\in\mathbb{R}$. [step 1.2, L3, choose]

3.1 Step 2.1 proves $f_k\to0$ uniformly, while steps 1.3 and 1.4 show that the derivatives at $0$ do not converge to the derivative of the limit. [step 2.1, step 1.3, step 1.4, L4]

4.1 The uniformly convergent differentiable sequence therefore refutes the claim. [step 3.1] ∎
````
