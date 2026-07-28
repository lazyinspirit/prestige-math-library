---
id: fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal
kind: false-statement
title: "FALSE: two continuous maps that agree on a dense subset of their common domain are equal, with no hypothesis on the codomain"
status: draft
origin: session
deps: [cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal,
       def-standard-topologies, def-dense-top, lem-rat-embeds-dense,
       cor-irrationals-uncountable, def-countable, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-interval, def-continuous-map-top,
       thm-continuity-characterisations-top, def-hausdorff-space, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "agreement on a dense set does not force equality"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
pipeline_run: null
---

## Statement

**False claim:** if $Z$ and $Y$ are topological spaces, $D \subseteq Z$ is dense
([[def-dense-top]]), and $f, g : Z \to Y$ are continuous
([[def-continuous-map-top]]) with $f(d) = g(d)$ for every $d \in D$, then
$f = g$.

The refutation takes $Z = \mathbb{R}$ with its usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), the dense set
$D = \mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]), and for codomain the two-point set
$Y_0 = \{a,b\}$ with $a \ne b$ carrying the **indiscrete** topology
([[def-standard-topologies]]), which is not Hausdorff
([[def-hausdorff-space]]). The maps are the constant $f \equiv a$ and the map
$g$ equal to $a$ at every rational and to $b$ at every irrational. Both are
continuous, they agree on $D$, and they differ at every irrational.

The hypothesis the claim drops is the Hausdorff condition on the **codomain**,
which is what
[[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]
assumes.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology; the set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$; and a two-element set $Y_0 = \{a,b\}$ with $a \ne b$.

[A1] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when for every $x \in U$ there is a real $r > 0$ with $(x-r, x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The indiscrete topology on $Y_0$ is $\{\varnothing, Y_0\}$; the two-point indiscrete space is not Hausdorff, the only open set containing either point being $Y_0$ ([[def-standard-topologies]], [[def-hausdorff-space]], [[def-topological-space]]).

[A3] $A \subseteq \mathbb{R}$ is dense exactly when $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq \mathbb{R}$ ([[def-dense-top]], form 2).

[L1] A function between topological spaces is continuous exactly when the preimage of every open set is open ([[thm-continuity-characterisations-top]], clauses (a) and (b), [[def-continuous-map-top]]).

[L2] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L3] The set $\mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ of irrationals is uncountable ([[cor-irrationals-uncountable]]); an uncountable set is not finite and the empty set is finite, so it is nonempty ([[def-countable]]).

[L4] Two continuous maps into a **Hausdorff** space agreeing on a dense subset of their common domain are equal ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

## Refutation

**Proof technique:** constructive.

1.1 Give $Y_0 = \{a,b\}$ the indiscrete topology; it is not Hausdorff. [A2, construct]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$: given a nonempty open $U$, pick $x \in U$ and by [A1] a real $r > 0$ with $(x-r, x+r) \subseteq U$; by [L2] some rational lies strictly between $x - r$ and $x + r$, hence in $U$. [A1, A3, L2]

1.3 There is a real $t \notin \mathbb{Q}_{\mathbb{R}}$, the set of irrationals being nonempty. [L3, choose]

2.1 Every function $h$ from a topological space into $Y_0$ is continuous: the only open subsets of $Y_0$ are $\varnothing$ and $Y_0$, whose preimages are $\varnothing$ and the whole domain, both open. [step 1.1, A2, L1]

3.1 Define $f : \mathbb{R} \to Y_0$ by $f(x) := a$ for every $x$, and $g : \mathbb{R} \to Y_0$ by $g(x) := a$ for $x \in \mathbb{Q}_{\mathbb{R}}$ and $g(x) := b$ otherwise; both are continuous by step 2.1. [step 2.1, construct]

4.1 $f$ and $g$ agree at every point of $\mathbb{Q}_{\mathbb{R}}$, which is dense in $\mathbb{R}$ by step 1.2. [step 1.2, step 3.1]

4.2 $f(t) = a$ and $g(t) = b$ for the irrational $t$ of step 1.3, and $a \ne b$, so $f \ne g$. [step 1.3, step 3.1]

5.1 Steps 3.1, 4.1 and 4.2 exhibit two continuous maps agreeing on a dense subset of their common domain and not equal, so the claim is false; by step 1.1 the codomain is not Hausdorff, which is exactly the hypothesis [L4] carries and the claim drops. [step 1.1, step 3.1, step 4.1, step 4.2, L4, discharge-construct] ∎

## Remarks

- **The failure is as large as it can be.** The two maps agree precisely on $\mathbb{Q}_{\mathbb{R}}$ and differ at every other point of $\mathbb{R}$, so nothing is salvaged by weakening the conclusion from equality to agreement off a small set: the disagreement set is the whole of the irrationals.

- **Continuity is not being cheated.** Both maps are continuous for the honest reason recorded in step 2.1, that the codomain has only two open sets. No pathology of $\mathbb{R}$ is involved, and the same construction runs with $\mathbb{R}$ replaced by any space with a dense subset that is not the whole space.

- **Why a two-point codomain suffices.** The Hausdorff condition is a statement about pairs of distinct points, so the smallest space that can fail it has two points, and the indiscrete topology is the coarsest topology on it. Taking the coarsest topology is also what makes every map into it continuous, so the witness needs no verification of continuity beyond counting the open sets.
