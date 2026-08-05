# Adversarial proof reading — `thm-universal-nets-and-ultrafilters-correspond`

## The item under review, in full

`items/thm-universal-nets-and-ultrafilters-correspond.md`

```markdown
---
id: thm-universal-nets-and-ultrafilters-correspond
kind: theorem
title: "A net is universal exactly when its tail filter is an ultrafilter, and the canonical net of an ultrafilter is universal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-universal-net, def-tail-filter-of-a-net, def-net-derived-from-a-filter, def-ultrafilter, thm-ultrafilter-characterisation]
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement

A net is universal if and only if its tail filter is an ultrafilter. Moreover, the net derived from an ultrafilter is universal.

## Facts & Assumptions

**Given:** A net $x$ in $X$ and a filter $\mathcal U$ on $X$.

[A1] $S$ belongs to the tail filter of $x$ exactly when $x$ is eventually in $S$ ([[def-tail-filter-of-a-net]]).

[A2] A filter is an ultrafilter exactly when, for every $S\subseteq X$, it contains $S$ or $X\setminus S$ ([[thm-ultrafilter-characterisation]]).

[A3] The derived net of $\mathcal U$ is indexed by $(A,a)$ and later indices have first coordinate contained in $A$ ([[def-net-derived-from-a-filter]]).



## Proof

**Proof technique:** direct.

1.1 By [A1], universality of $x$ says exactly that its tail filter contains $S$ or $X\setminus S$ for every $S\subseteq X$. By [A2], this is exactly ultrafilterhood. [A1, A2]

1.2 If $\mathcal U$ is an ultrafilter and $S\subseteq X$, [A2] gives $S\in\mathcal U$ or $X\setminus S\in\mathcal U$. In the first case an index $(S,a)$ exists and every later value lies in $S$ by [A3]; the second case is identical. [A2, A3]

2.1 Thus the derived net of an ultrafilter is universal, completing both assertions. [step 1.1, step 1.2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-universal-net` — definition — Universal net: eventually in every subset or eventually in its complement

(statement provenance: literature-derived)

### Definition

A net $x:D\to X$ is **universal** if, for every subset $S\subseteq X$, it is eventually in $S$ or eventually in $X\setminus S$.

The two alternatives cannot both occur: directedness would give an index after both thresholds, whose value would belong to the empty intersection $S\cap(X\setminus S)$.

### `def-tail-filter-of-a-net` — definition — The tail filter of a net

(statement provenance: ai-altered)

### Definition

For a net $x:D\to X$, put $T_d=\{x_e:d\le e\}$ and $\mathcal B_x=\{T_d:d\in D\}$. This is a filter base: it is nonempty, each $T_d$ contains $x_d$, and if $f\ge d,e$ then $T_f\subseteq T_d\cap T_e$. Its generated filter [[lem-filter-base-generates]] is the **tail filter** of $x$:

$$\mathcal F_x=\{A\subseteq X:\text{some }d\in D\text{ has }T_d\subseteq A\}.$$

Thus $A\in\mathcal F_x$ exactly when the net is eventually in $A$. The preceding filter-base verification makes this a well-defined filter in the sense of [[def-filter]].

### `def-net-derived-from-a-filter` — definition — The canonical net indexed by the pairs $(A,x)$ with $A$ in a filter and $x\\in A$

(statement provenance: ai-altered)

### Definition

Let $\mathcal F$ be a filter on $X$. Its **derived-net index set** is

$$E_{\mathcal F}=\{(A,x):A\in\mathcal F,\ x\in A\},$$

ordered by $(A,x)\preceq(B,y)$ when $B\subseteq A$. It is a directed preorder: filters contain no empty set, and for two indices choose $z\in A\cap B$, so $(A\cap B,z)$ is above both. The **net derived from $\mathcal F$** is

$$x_{(A,x)}:=x\qquad ((A,x)\in E_{\mathcal F}).$$

This construction makes no arbitrary choice, because the point $x$ is included in the index.

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

Read `thm-universal-nets-and-ultrafilters-correspond` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
