---
id: def-quotient-topology
kind: definition
title: "The quotient topology of a surjection, quotient maps, saturated sets, and the quotient of a space by an equivalence relation with its canonical projection"
status: published
origin: session
deps: [def-initial-and-final-topology, def-topological-space, def-continuous-map-top,
       def-injection-surjection-bijection, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-quotient-top, def-quotient-map-top, def-saturated-set, def-identification-space]
landmark: true
short: "quotient topology, quotient map, saturated set"
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
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "J. Munkres, Topology, 2nd ed., §22"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The quotient topology.** Let $(X, \mathcal{T})$ be a topological space
([[def-topological-space]]), let $Y$ be a set and let $q : X \to Y$ be a
surjection ([[def-injection-surjection-bijection]]). The **quotient topology** on
$Y$ induced by $q$ is the final topology of the one-element family $(q)$
([[def-initial-and-final-topology]]):

$$\mathcal{T}_q \;:=\; \{\, V \subseteq Y : q^{-1}[V] \in \mathcal{T} \,\} .$$

That this is a topology is discharged in [[def-initial-and-final-topology]],
where every final topology is verified to satisfy (T1), (T2) and (T3). Dually,
$C \subseteq Y$ is closed in $\mathcal{T}_q$ exactly when $q^{-1}[C]$ is closed
in $X$, because $q^{-1}[Y \setminus V] = X \setminus q^{-1}[V]$.

**Quotient map.** A surjection $q : X \to Y$ between topological *spaces* is a
**quotient map** (also *identification map*) when the topology of $Y$ is the
quotient topology of $q$, that is when

$$V \text{ is open in } Y \iff q^{-1}[V] \text{ is open in } X \qquad (V \subseteq Y).$$

The implication from left to right is exactly continuity of $q$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]] clause
(b)), so a quotient map is a continuous surjection with the extra property that
its topology is as *fine* as continuity permits. Equivalently, and this form is
used as often: $C$ is closed in $Y$ if and only if $q^{-1}[C]$ is closed in $X$.

**Saturated sets.** Let $q : X \to Y$ be a surjection. A subset $A \subseteq X$ is
**saturated** with respect to $q$ when

$$A \;=\; q^{-1}\big[\,q[A]\,\big] ,$$

equivalently when $A$ is a union of fibres $q^{-1}[\{y\}]$, equivalently when
$x \in A$ and $q(x') = q(x)$ imply $x' \in A$. The set $q^{-1}[q[A]]$ is the
**saturation** of $A$, and it is the smallest saturated set containing $A$. The
map $V \mapsto q^{-1}[V]$ is a bijection from $\mathcal{P}(Y)$ onto the saturated
subsets of $X$, with inverse $A \mapsto q[A]$, since $q$ is surjective; under it
the open sets of the quotient topology correspond exactly to the **saturated open
subsets of $X$**. That correspondence is the working description of the quotient
topology: to know the open sets of $Y$ is to know which open subsets of $X$ are
saturated.

**Quotient by an equivalence relation.** Let $\sim$ be an **equivalence relation**
on $X$, that is a relation that is reflexive ($x \sim x$), symmetric
($x \sim x'$ implies $x' \sim x$) and transitive ($x \sim x'$ and $x' \sim x''$
imply $x \sim x''$). Write $[x] := \{\, x' \in X : x' \sim x \,\}$ for the
**equivalence class** of $x$; distinct classes are disjoint and their union is
$X$. The **quotient set** is $X/\!\sim\ := \{\, [x] : x \in X \,\}$ and the
**canonical projection** is

$$\pi : X \to X/\!\sim, \qquad \pi(x) := [x] ,$$

which is a surjection by construction. The set $X/\!\sim$ always carries the
quotient topology of $\pi$, and $(X/\!\sim,\ \mathcal{T}_\pi)$ is called an
**identification space**. A subset of $X$ is saturated for $\pi$ exactly when it
is a union of equivalence classes.

**A convenient special case: collapsing a subset.** For $\varnothing \ne B \subseteq X$
let $\sim_B$ be the relation whose classes are $B$ itself and the singletons
$\{x\}$ for $x \notin B$; this is an equivalence relation, its classes being a
partition of $X$. The resulting quotient is written $X/B$, and its canonical
projection is a surjection identifying all of $B$ to a single point and doing
nothing else. Saturated sets for $\sim_B$ are the sets $A$ with $A \cap B \in
\{\varnothing, B\}$.

**Two conventions used throughout.** First, "quotient map" is a property of a map
*together with the two topologies*, never of the map alone. Second, a quotient
topology is determined by $q$ alone and not by the pair $(X,Y)$: two different
surjections onto the same set can give different topologies, and where more than
one is in play the map is named.

## Remarks

- **The quotient construction on sets is the one this library has already used.**
  The integers ([[def-integers]]) and the rationals ([[def-rationals]]) are
  quotient *sets* of exactly the shape above, and the only new content here is the
  topology carried along by $\pi$.

- **Why saturation is the right notion.** An open $U \subseteq X$ that is not
  saturated has an image $q[U]$ whose preimage is strictly larger than $U$, and
  nothing forces that preimage to be open; so $q[U]$ need not be open, and indeed
  a quotient map need not be an open map. That failure is recorded on this page as
  a false statement and is not a defect of the construction: the quotient topology
  is defined by preimages precisely because images behave badly.

- **The quotient topology is the finest making $q$ continuous.** That is the
  general fact about final topologies from
  [[thm-initial-and-final-characteristic-properties]], read for a one-element
  family, and it is what makes "as many open sets as continuity permits" precise.
