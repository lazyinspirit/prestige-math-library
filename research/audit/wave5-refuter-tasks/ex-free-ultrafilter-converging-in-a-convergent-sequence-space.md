# Adversarial proof reading — `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`

## The item under review, in full

`items/ex-free-ultrafilter-converging-in-a-convergent-sequence-space.md`

```markdown
---
id: ex-free-ultrafilter-converging-in-a-convergent-sequence-space
kind: example
title: "Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-filter, def-filter-convergence-and-cluster-point, thm-ultrafilter-lemma, def-tail-filter-of-a-net, def-ultrafilter, thm-ultrafilter-characterisation]
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
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
pipeline_run: null
---

## Example

**Assume the ultrafilter lemma.** Let $X=\mathbb N\cup\{\infty\}$, make every natural isolated, and give $\infty$ the neighbourhood base $U_N=\{\infty\}\cup\{n:n\ge N\}$. A free ultrafilter on $\mathbb N$, extended along the inclusion $\mathbb N\hookrightarrow X$, converges to $\infty$.

## Facts & Assumptions

**Given:** The identity net $n\mapsto n$ on the directed natural numbers.

[L1] Its tail filter contains every tail $T_N=\{n:n\ge N\}$ ([[def-tail-filter-of-a-net]]).

[L2] The ultrafilter lemma extends that filter to an ultrafilter ([[thm-ultrafilter-lemma]]).

[L3] A filter contains its whole set, omits the empty set, and is closed under intersections and supersets ([[def-filter]]).

[L4] A filter converges to a point exactly when it contains every neighbourhood of that point ([[def-filter-convergence-and-cluster-point]]).

[L5] A filter is an ultrafilter exactly when for every subset it contains that subset or its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).


## Verification

**Proof technique:** direct.

1.1 Choose an ultrafilter $\mathcal U$ extending the tail filter. It contains every $T_N$ and contains no singleton, since $\{k\}\cap T_{k+1}=\varnothing$; thus it is free. [L1, L2]

2.1 Put $\mathcal U^X=\{B\subseteq X:B\cap\mathbb N\in\mathcal U\}$. The filter axioms transfer through intersection with $\mathbb N$, so this is a filter on $X$. For every $B\subseteq X$, [L5] applied to $B\cap\mathbb N$ shows that $\mathcal U^X$ contains $B$ or $X\setminus B$; hence $\mathcal U^X$ is an ultrafilter. [step 1.1, L3, L5]

3.1 Every basic neighbourhood $U_N$ has $U_N\cap\mathbb N=T_N\in\mathcal U$, hence $U_N\in\mathcal U^X$. Every neighbourhood of $\infty$ contains some $U_N$, so upward closure gives $\mathcal U^X\to\infty$. [step 2.1, L4]

4.1 It is free: if $\{x\}\in\mathcal U^X$, then either $x=\infty$ and its intersection with $\mathbb N$ is empty, or $x\in\mathbb N$ and $\{x\}\in\mathcal U$, both impossible. Thus this supplies the claimed free ultrafilter and its convergence. [step 1.1, step 2.1, step 3.1, L3] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-filter` — definition — Filter on a set

(statement provenance: literature-derived)

### Definition

Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ is a **filter on $X$** when it satisfies:

- **(F1)** *nontriviality*: $X \in \mathcal{F}$;
- **(F2)** *properness*: $\emptyset \notin \mathcal{F}$;
- **(F3)** *closure under pairwise intersection*: if $A, B \in \mathcal{F}$ then
  $A \cap B \in \mathcal{F}$;
- **(F4)** *upward closure in $X$*: if $A \in \mathcal{F}$ and
  $A \subseteq B \subseteq X$ then $B \in \mathcal{F}$.

The set of all filters on $X$ is written $\mathrm{Filt}(X)$. It is a subset of
$\mathcal{P}(\mathcal{P}(X))$, hence a set, and it is ordered by inclusion:
$\mathcal{F} \subseteq \mathcal{G}$ is read "$\mathcal{G}$ is **finer** than
$\mathcal{F}$", and $\mathcal{F}$ is **coarser** than $\mathcal{G}$.

**Convention: filters are proper.** Condition (F2) is part of the definition
throughout this library, so "filter" always means "proper filter". The competing
convention drops (F2), calls the resulting objects filters, and says **proper
filter** for one that omits $\emptyset$. The two conventions differ by exactly one
object, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains
$\emptyset$ to be all of $\mathcal{P}(X)$: if $\emptyset \in \mathcal{F}$ then
$\emptyset \subseteq B \subseteq X$ gives $B \in \mathcal{F}$ for every
$B \subseteq X$. That single extra object is the **improper filter**
$\mathcal{P}(X)$. This library follows the more widely adopted convention, in
which the improper filter is not a filter; a reader arriving from the other
convention should read every unqualified "filter" below as "proper filter".

### `def-filter-convergence-and-cluster-point` — definition — Convergence and cluster points of a filter on a topological space

(statement provenance: literature-derived)

### Definition

Let $\mathcal F$ be a filter on a topological space $X$ and let $p\in X$.

- $\mathcal F$ **converges to $p$**, written $\mathcal F\to p$, if every neighbourhood of $p$ belongs to $\mathcal F$.
- $p$ is a **cluster point** of $\mathcal F$ if $N\cap A\ne\varnothing$ for every neighbourhood $N$ of $p$ and every $A\in\mathcal F$.

The second condition says precisely that the neighbourhood filter at $p$ and $\mathcal F$ have no disjoint members.

### `thm-ultrafilter-lemma` — theorem — The ultrafilter lemma, from the Axiom of Choice: every filter extends to an ultrafilter

(statement provenance: literature-derived)

### Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $X$ be a set and let
$\mathcal{F}_0$ be a filter on $X$ ([[def-filter]]). Then there is an ultrafilter
$\mathcal{U}$ on $X$ ([[def-ultrafilter]]) with $\mathcal{F}_0 \subseteq \mathcal{U}$.

The hypothesis is spent exactly once, through Zorn's lemma at step 4.1; the rest
of the argument is a theorem of ZF.

In particular, every set that carries a filter carries an ultrafilter. The proof
uses Zorn's lemma ([[thm-zorn]]) and therefore the Axiom of Choice. That some
choice principle is unavoidable here, if ZF is consistent, is an external
independence result, not proved in this library; see the remarks below.

### `def-tail-filter-of-a-net` — definition — The tail filter of a net

(statement provenance: ai-altered)

### Definition

For a net $x:D\to X$, put $T_d=\{x_e:d\le e\}$ and $\mathcal B_x=\{T_d:d\in D\}$. This is a filter base: it is nonempty, each $T_d$ contains $x_d$, and if $f\ge d,e$ then $T_f\subseteq T_d\cap T_e$. Its generated filter [[lem-filter-base-generates]] is the **tail filter** of $x$:

$$\mathcal F_x=\{A\subseteq X:\text{some }d\in D\text{ has }T_d\subseteq A\}.$$

Thus $A\in\mathcal F_x$ exactly when the net is eventually in $A$. The preceding filter-base verification makes this a well-defined filter in the sense of [[def-filter]].

### `def-ultrafilter` — definition — Ultrafilter

(statement provenance: literature-derived)

### Definition

Let $X$ be a set and let $\mathrm{Filt}(X)$ be the set of all filters on $X$
([[def-filter]]). Since every filter is a subset of $\mathcal{P}(X)$, the family
$\mathrm{Filt}(X)$ is a subset of $\mathcal{P}(\mathcal{P}(X))$ and is therefore a
set, carved out by Separation. Inclusion is a partial order on it
([[def-partial-order]]): $\subseteq$ is reflexive, antisymmetric by
extensionality, and transitive.

An **ultrafilter on $X$** is a filter on $X$ that is a **maximal element** of
$(\mathrm{Filt}(X), \subseteq)$ ([[def-maximal-element]]): a filter $\mathcal{U}$
on $X$ such that no filter on $X$ strictly contains $\mathcal{U}$, equivalently
such that every filter $\mathcal{G}$ on $X$ with $\mathcal{U} \subseteq
\mathcal{G}$ satisfies $\mathcal{G} = \mathcal{U}$.

An ultrafilter is **principal** if it is of the form
$\{\, A \subseteq X : x \in A \,\}$ for some $x \in X$, and **free**, or
**non-principal**, otherwise.

### `thm-ultrafilter-characterisation` — theorem — Characterisation of ultrafilters: every set or its complement

(statement provenance: literature-derived)

### Statement

Let $X$ be a set and $\mathcal{U}$ a filter on $X$ ([[def-filter]]). The following
are equivalent:

1. $\mathcal{U}$ is an ultrafilter on $X$ ([[def-ultrafilter]]);
2. for every $A \subseteq X$, either $A \in \mathcal{U}$ or
   $X \setminus A \in \mathcal{U}$.

Moreover, for any filter the two alternatives are exclusive: never both
$A \in \mathcal{U}$ and $X \setminus A \in \mathcal{U}$. So an ultrafilter decides
every subset of $X$, containing exactly one of $A$ and $X \setminus A$.

## What to return

Read `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
