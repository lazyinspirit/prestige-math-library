# Adversarial proof reading — `prop-separable-spaces-are-ccc`

## The item under review, in full

`items/prop-separable-spaces-are-ccc.md`

```markdown
---
id: prop-separable-spaces-are-ccc
kind: proposition
title: "Every separable space satisfies the countable chain condition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-separable-space, def-countable-chain-condition, def-dense-top, lem-countable-iff-surjection-from-n]
aliases: []
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
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
    - title: "Countable chain condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_chain_condition"
pipeline_run: null
---

## Statement

Every separable space is ccc.

## Facts & Assumptions

**Given:** A countable dense set $D$ and a pairwise-disjoint family $\mathcal U$ of nonempty open sets.

[L1] A nonempty countable set can be enumerated by natural numbers ([[lem-countable-iff-surjection-from-n]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal U=\varnothing$, it is already at most countable. Otherwise $X$ is nonempty, so the dense set $D$ is nonempty; enumerate $D$ and assign to each $U\in\mathcal U$ the first enumerated point of $D\cap U$, which is nonempty by density. [given, L1]

2.1 Disjointness makes this assignment injective into a countable set. [step 1.1]

3.1 Hence $\mathcal U$ is countable and $X$ is ccc. [step 2.1] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-separable-space` — definition — Separability: the existence of an at most countable dense subset

(statement provenance: literature-derived)

### Definition

A topological space $X$ is **separable** if some at most countable subset $D\subseteq X$ is dense in $X$ ([[def-dense-top]], [[def-countable]]). Equivalently, every nonempty open subset of $X$ meets $D$.

### `def-countable-chain-condition` — definition — The countable chain condition: every pairwise-disjoint family of nonempty open sets is at most countable

(statement provenance: ai-altered)

### Definition

A topological space $X$ satisfies the **countable chain condition** (ccc) if every family $\mathcal U$ of nonempty open subsets of $X$ with $U\cap V=\varnothing$ whenever $U,V\in\mathcal U$ are distinct is at most countable ([[def-countable]]).

### `def-dense-top` — definition — Dense, nowhere dense and codense subsets of a topological space, and the criterion by basic open sets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \subseteq X$. Interior
and closure are as in [[def-interior-closure-boundary-top]].

- $A$ is **dense** in $X$ if $\overline{A} = X$.
- $A$ is **codense** in $X$ if $X \setminus A$ is dense.
- $A$ is **nowhere dense** in $X$ if $\operatorname{int}(\overline{A}) = \varnothing$.

**Three equivalent forms of density, and the one used in practice.** The
following are equivalent:

1. $\overline{A} = X$;
2. $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq X$;
3. $B \cap A \ne \varnothing$ for every nonempty $B \in \mathcal{B}$.

*Proof.* (1) $\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \in U$; then
$x \in \overline{A}$, so $U \cap A \ne \varnothing$ by clause (c) of
[[thm-closure-characterisation-top]]. (2) $\Rightarrow$ (3): a nonempty member of
$\mathcal{B}$ is a nonempty open set. (3) $\Rightarrow$ (1): let $x \in X$; every
$B \in \mathcal{B}$ with $x \in B$ is nonempty and so meets $A$, hence
$x \in \overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form
3 is what makes density checkable: for the Sorgenfrey line it is a statement
about half-open intervals, and for a metric space a statement about balls.

**Codensity is emptiness of the interior.** $A$ is codense if and only if
$\operatorname{int}(A) = \varnothing$, because
$X \setminus \operatorname{int}(A) = \overline{X \setminus A}$
([[def-interior-closure-boundary-top]]), so $\overline{X \setminus A} = X$ holds
exactly when $\operatorname{int}(A) = \varnothing$.

**Nowhere dense implies codense, and the converse fails.** If
$\operatorname{int}(\overline{A}) = \varnothing$ then
$\operatorname{int}(A) \subseteq \operatorname{int}(\overline{A}) = \varnothing$
by monotonicity of the interior, so $A$ is codense. The two notions can differ
only on sets whose closure is larger than themselves, and there they sometimes
do: a dense set with empty interior, such as the rationals inside the real line,
is codense and is not nowhere dense, its closure being everything. They may also
agree on such a set: $(0,1)$ inside $\mathbb{R}$ has closure $[0,1]$ and is
neither codense nor nowhere dense. A *closed* set is nowhere dense
precisely when it is codense, since then $\overline{A} = A$.

### `lem-countable-iff-surjection-from-n` — lemma — A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## What to return

Read `prop-separable-spaces-are-ccc` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
