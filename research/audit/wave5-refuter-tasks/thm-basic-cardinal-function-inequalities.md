# Adversarial proof reading — `thm-basic-cardinal-function-inequalities`

## The item under review, in full

`items/thm-basic-cardinal-function-inequalities.md`

```markdown
---
id: thm-basic-cardinal-function-inequalities
kind: theorem
title: "Under choice, $c(X)\\le d(X)\\le w(X)$ and $\\chi(X),L(X)\\le w(X)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, lem-weight-is-well-defined, lem-density-is-well-defined, lem-character-is-well-defined, lem-lindelof-degree-is-well-defined, lem-cellularity-is-well-defined, def-axiom-of-choice]
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement

Assuming choice, $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$.

## Facts & Assumptions

**Given:** A topological space $X$, the Axiom of Choice, a basis $\mathcal B$ of cardinality $w(X)$, and a dense subset $D$ of cardinality $d(X)$.

[L1] The raw definitions make $w(X)$ and $d(X)$ the least cardinalities of a basis and a dense subset, make $\chi(X)$ the supremum of the local characters, make $L(X)$ the least cardinal bounding subcovers, and make $c(X)$ the supremum of sizes of pairwise-disjoint nonempty open families ([[def-weight-density-and-character]], [[def-lindelof-degree-and-cellularity]]).

[A1] The Axiom of Choice chooses one member from each nonempty set in a family ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose one point from each nonempty $B\in\mathcal B$; the chosen set meets every nonempty open set because $\mathcal B$ is a basis, so it is dense and has cardinality at most $|\mathcal B|$. [A1, L1]

1.2 For each $x\in X$, the subfamily $\{B\in\mathcal B:x\in B\}$ is a local base at $x$ and has cardinality at most $|\mathcal B|$, so every local character, and therefore its supremum $\chi(X)$, is at most $w(X)$. [L1]

1.3 Given an open cover, choose for each $B\in\mathcal B$ that lies in a cover member one such member; these at most $|\mathcal B|$ chosen sets still cover $X$, so $L(X)\le w(X)$. [A1, L1]

1.4 For a pairwise-disjoint family $\mathcal U$ of nonempty open sets, choose a point of $D\cap U$ for each $U\in\mathcal U$; disjointness makes this assignment injective into $D$, so $|\mathcal U|\le d(X)$ and $c(X)\le d(X)$. [A1, L1]

2.1 Steps 1.1, 1.2, 1.3 and 1.4 give $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-weight-density-and-character` — definition — Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

(statement provenance: ai-altered)

### Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $X$ be a topological space. The **weight** $w(X)$ is the least cardinality of a basis for $X$, and the **density** $d(X)$ is the least cardinality of a dense subset of $X$ ([[def-topology-basis-subbasis]], [[def-dense-top]], [[def-cardinal]]).

For $x\in X$, the **local character** $\chi(x,X)$ is the least cardinality of a neighbourhood base at $x$ ([[def-neighbourhood-top]]). The **character** is the raw cardinal supremum
$$\chi(X)=\sup\{\chi(x,X):x\in X\}.$$

No $\aleph_0$ normalization is imposed. In particular a one-member local base has cardinality $1$, not $\aleph_0$. The forward lemmas named in `justified_by` establish the asserted minima and supremum.

### `def-lindelof-degree-and-cellularity` — definition — Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

(statement provenance: ai-altered)

### Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The **Lindelöf degree** $L(X)$ is the least cardinal $\kappa$ such that every open cover of $X$ has a subcover of cardinality at most $\kappa$. The **cellularity** $c(X)$ is the cardinal supremum of the cardinalities of pairwise-disjoint families of nonempty open subsets of $X$.

These are raw cardinal functions. Thus finite covers and finite cellular families retain their finite cardinalities. Their well-definedness is supplied by the forward lemmas named in `justified_by`.

### `lem-weight-is-well-defined` — lemma — Under choice, $w(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, the collection of cardinalities of bases for $X$ is nonempty and has a least member. Hence $w(X)$ is well-defined.

### `lem-density-is-well-defined` — lemma — Under choice, $d(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $d(X)$ is a well-defined cardinal.

### `lem-character-is-well-defined` — lemma — Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

(statement provenance: ai-altered)

### Statement

Assuming choice, every $\chi(x,X)$ and the raw supremum $\chi(X)$ are well-defined cardinals.

### `lem-lindelof-degree-is-well-defined` — lemma — Under choice, $L(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $L(X)$ is a well-defined cardinal.

### `lem-cellularity-is-well-defined` — lemma — Under choice, $c(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $c(X)$ is a well-defined cardinal.

### `def-axiom-of-choice` — definition — The Axiom of Choice

(statement provenance: literature-derived)

### Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

## What to return

Read `thm-basic-cardinal-function-inequalities` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
