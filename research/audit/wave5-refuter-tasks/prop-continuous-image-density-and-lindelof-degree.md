# Adversarial proof reading — `prop-continuous-image-density-and-lindelof-degree`

## The item under review, in full

`items/prop-continuous-image-density-and-lindelof-degree.md`

```markdown
---
id: prop-continuous-image-density-and-lindelof-degree
kind: proposition
title: "Under choice, a continuous surjection does not increase density or Lindelöf degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, def-continuous-map-top, thm-continuity-characterisations-top, lem-density-is-well-defined, lem-lindelof-degree-is-well-defined, def-axiom-of-choice]
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement
Assume the Axiom of Choice. If $f:X\to Y$ is continuous and onto, then
$d(Y)\le d(X)$ and $L(Y)\le L(X)$.
## Facts & Assumptions
**Given:** The Axiom of Choice and a continuous surjection $f:X\to Y$ ([[def-axiom-of-choice]]).

[L1] A continuous map has open preimages of open sets ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

[L2] The least dense-set cardinality $d(Z)$ and the least cardinal bounding subcovers $L(Z)$ exist for every topological space $Z$ ([[lem-density-is-well-defined]], [[lem-lindelof-degree-is-well-defined]]).
## Proof

**Proof technique:** direct.

1.1 If $D\subseteq X$ is dense, then $f[D]$ is dense in $Y$: a nonempty open $V\subseteq Y$ has nonempty open preimage by surjectivity and [L1], so that preimage meets $D$ and $V$ meets $f[D]$. [L1]

1.2 For an open cover $\mathcal U$ of $Y$, the family $\{f^{-1}[U]:U\in\mathcal U\}$ is an open cover of $X$; a subfamily indexed by at most $L(X)$ members covers $X$, and the corresponding members of $\mathcal U$ cover $Y$ by surjectivity. [L1, L2]

2.1 Taking $D$ with $|D|=d(X)$, step 1.1 gives a dense subset of $Y$ of cardinality at most $d(X)$; hence $d(Y)\le d(X)$ by [L2]. [step 1.1, L2]

3.1 Step 1.2 gives $L(Y)\le L(X)$ by [L2], and together with step 2.1 this proves both inequalities. [step 2.1, step 1.2, L2] ∎
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

### `def-continuous-map-top` — definition — Continuity of a map of topological spaces at a point and globally

(statement provenance: ai-altered)

### Definition

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

### `thm-continuity-characterisations-top` — theorem — For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

### `lem-density-is-well-defined` — lemma — Under choice, $d(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $d(X)$ is a well-defined cardinal.

### `lem-lindelof-degree-is-well-defined` — lemma — Under choice, $L(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $L(X)$ is a well-defined cardinal.

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

Read `prop-continuous-image-density-and-lindelof-degree` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
