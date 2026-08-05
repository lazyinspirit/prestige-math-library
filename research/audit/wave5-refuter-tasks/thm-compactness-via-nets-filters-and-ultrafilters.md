# Adversarial proof reading — `thm-compactness-via-nets-filters-and-ultrafilters`

## The item under review, in full

`items/thm-compactness-via-nets-filters-and-ultrafilters.md`

```markdown
---
id: thm-compactness-via-nets-filters-and-ultrafilters
kind: theorem
title: "Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-net-cluster-point-iff-convergent-subnet, thm-net-filter-convergence-dictionary, lem-ultrafilter-cluster-points-are-limits, thm-ultrafilter-lemma, thm-compact-iff-fip, def-compact-space, def-filter-convergence-and-cluster-point]
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** For a topological space $X$, the following are equivalent:

1. $X$ is compact;
2. every net in $X$ has a cluster point;
3. every net in $X$ has a convergent subnet;
4. every filter on $X$ has a cluster point;
5. every ultrafilter on $X$ converges.

## Facts & Assumptions

**Given:** A topological space $X$ and the ultrafilter lemma.

[L1] Compactness is equivalent to every family of closed sets with the finite-intersection property having nonempty intersection; moreover, a family of subsets of $X$ has the finite-intersection property exactly when it is contained in a filter on $X$ ([[thm-compact-iff-fip]], clauses 1 and 2).

[L2] A net has $p$ as a cluster point exactly when it has a subnet converging to $p$ ([[thm-net-cluster-point-iff-convergent-subnet]]).

[L3] A net and its tail filter have the same cluster points, and a filter and its derived net have the same cluster points ([[thm-net-filter-convergence-dictionary]]).

[L4] Every filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]), and every cluster point of an ultrafilter is its limit ([[lem-ultrafilter-cluster-points-are-limits]]).



## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is compact and $\mathcal F$ is a filter. The closed family $\{\overline A:A\in\mathcal F\}$ has the finite-intersection property, because a finite intersection of members of $\mathcal F$ is nonempty and is contained in the corresponding intersection of closures. By [L1], choose $p\in\bigcap_{A\in\mathcal F}\overline A$. [L1]

1.2 If every filter has a cluster point, apply this to a net's tail filter and use [L3]; hence 4 implies 2. By [L2], conditions 2 and 3 are equivalent. [L2, L3]

1.3 Conversely, if every net has a cluster point and $\mathcal F$ is a filter, its derived net has a cluster point, which is also a cluster point of $\mathcal F$ by [L3]. Hence 2 implies 4. [L3]

1.4 Condition 4 implies 5 because an ultrafilter is a filter and [L4] turns its cluster point into a limit. [L4]

1.5 Suppose every ultrafilter converges and let $\mathcal C$ be a family of closed subsets of $X$ with the finite-intersection property. Clause 2 of [L1] gives a filter containing $\mathcal C$, and [L4] extends it to an ultrafilter $\mathcal U$. [L1, L4]

2.1 Every neighbourhood of $p$ meets every $A\in\mathcal F$, since $p\in\overline A$; thus $p$ is a cluster point of $\mathcal F$. Hence 1 implies 4. [step 1.1, L1]

2.2 Let $p$ be a limit of $\mathcal U$. For $C\in\mathcal C$, every neighbourhood of $p$ belongs to $\mathcal U$ and meets $C\in\mathcal U$; therefore $p\in\overline C=C$. Thus $\bigcap\mathcal C\ne\varnothing$, and [L1] gives compactness. [step 1.5, L1]

3.1 The implications in steps 2.1, 1.2, 1.3, 1.4 and 2.2 establish all five equivalences. [step 2.1, step 1.2, step 1.3, step 1.4, step 2.2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-net-cluster-point-iff-convergent-subnet` — theorem — A point is a cluster point of a net if and only if some subnet converges to it

(statement provenance: literature-derived)

### Statement

For a net $x:D\to X$ and $p\in X$, $p$ is a cluster point of $x$ if and only if $x$ has a subnet converging to $p$.

### `thm-net-filter-convergence-dictionary` — theorem — The tail-filter and derived-net constructions preserve convergence and cluster points in both directions

(statement provenance: ai-altered)

### Statement

Passing from a net to its tail filter, or from a filter to its derived net, preserves and reflects convergence and cluster points.

### `lem-ultrafilter-cluster-points-are-limits` — lemma — Every cluster point of an ultrafilter is a limit of that ultrafilter

(statement provenance: ai-altered)

### Statement

Every cluster point of an ultrafilter is a limit of that ultrafilter.

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

### `thm-compact-iff-fip` — theorem — A space is compact exactly when every family of closed subsets with the finite intersection property has nonempty intersection

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). For a
family $\mathcal{A}$ of subsets of $X$ write

$$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$

so that $\bigcap \varnothing = X$, matching the convention for the empty finite
intersection in [[def-finite-intersection-property]]. Then:

1. $(X, \mathcal{T})$ is compact ([[def-compact-space]]) **if and only if** every
   family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection
   property ([[def-finite-intersection-property]]) satisfies
   $\bigcap \mathcal{A} \ne \varnothing$.
2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of
   closed subsets of $X$ that is contained in some filter on $X$
   ([[def-filter]]) has nonempty intersection, a family of subsets of $X$ lying
   in a filter exactly when it has the finite intersection property
   ([[lem-fip-generates-filter]]).

No choice principle is used in either direction: complementation is a canonical
bijection, so no member of a family ever has to be selected.

### `def-compact-space` — definition — Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

### `def-filter-convergence-and-cluster-point` — definition — Convergence and cluster points of a filter on a topological space

(statement provenance: literature-derived)

### Definition

Let $\mathcal F$ be a filter on a topological space $X$ and let $p\in X$.

- $\mathcal F$ **converges to $p$**, written $\mathcal F\to p$, if every neighbourhood of $p$ belongs to $\mathcal F$.
- $p$ is a **cluster point** of $\mathcal F$ if $N\cap A\ne\varnothing$ for every neighbourhood $N$ of $p$ and every $A\in\mathcal F$.

The second condition says precisely that the neighbourhood filter at $p$ and $\mathcal F$ have no disjoint members.

## What to return

Read `thm-compactness-via-nets-filters-and-ultrafilters` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
