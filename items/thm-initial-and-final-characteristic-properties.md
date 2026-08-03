---
id: thm-initial-and-final-characteristic-properties
kind: theorem
title: "Characteristic properties: a map into a space with the initial topology is continuous iff every composite with the defining family is, a map out of a space with the final topology is continuous iff every composite with the defining family is, and the two topologies are respectively the coarsest and the finest making that family continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-initial-and-final-topology, def-continuous-map-top,
       thm-continuity-characterisations-top, def-topology-basis-subbasis,
       thm-basis-criterion, def-topological-space, lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: true
short: "characteristic properties of initial and final topologies"
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
    - title: "Initial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Initial_topology"
    - title: "Final topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Final_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $I$ be an index set.

**Initial.** Let $(Y_i, \mathcal{T}_i)$ be spaces and $f_i : X \to Y_i$
functions, and give $X$ the initial topology $\mathcal{T}^{\mathrm{in}}$ of the
family $(f_i)_{i \in I}$ ([[def-initial-and-final-topology]]). Then:

1. Every $f_i$ is continuous for $\mathcal{T}^{\mathrm{in}}$, and
   $\mathcal{T}^{\mathrm{in}}$ is the **coarsest** topology on $X$ with that
   property: every topology on $X$ making all the $f_i$ continuous contains
   $\mathcal{T}^{\mathrm{in}}$.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to X$,
   $$h \text{ is continuous } \iff f_i \circ h \text{ is continuous for every } i \in I .$$

**Final.** Let $(Z_i, \mathcal{S}_i)$ be spaces and $g_i : Z_i \to X$ functions,
and give $X$ the final topology $\mathcal{T}^{\mathrm{fin}}$ of the family
$(g_i)_{i \in I}$. Then:

3. Every $g_i$ is continuous for $\mathcal{T}^{\mathrm{fin}}$, and
   $\mathcal{T}^{\mathrm{fin}}$ is the **finest** topology on $X$ with that
   property: every topology on $X$ making all the $g_i$ continuous is contained
   in $\mathcal{T}^{\mathrm{fin}}$.
4. **Characteristic property.** For every space $W$ and every function
   $k : X \to W$,
   $$k \text{ is continuous } \iff k \circ g_i \text{ is continuous for every } i \in I .$$

Claims 2 and 4 determine their topologies: a topology on $X$ satisfying claim 2
for every $Z$ and $h$ must equal $\mathcal{T}^{\mathrm{in}}$, and likewise for
claim 4, by the argument recorded in the remarks.

## Facts & Assumptions

**Given:** A set $X$; spaces $(Y_i,\mathcal{T}_i)$ with functions $f_i : X \to Y_i$; spaces $(Z_i,\mathcal{S}_i)$ with functions $g_i : Z_i \to X$; a space $Z$ with a function $h : Z \to X$ and a space $W$ with a function $k : X \to W$. Preimages satisfy $(u \circ v)^{-1}[T] = v^{-1}[u^{-1}[T]]$ for composable functions $u, v$ and every subset $T$ of the target.

[A1] $\mathcal{T}^{\mathrm{in}} = \langle \mathcal{G} \rangle$ where $\mathcal{G} := \{\, f_i^{-1}[V] : i \in I,\ V \in \mathcal{T}_i \,\}$, and $\mathcal{T}^{\mathrm{fin}} = \{\, U \subseteq X : g_i^{-1}[U] \in \mathcal{S}_i \text{ for every } i \,\}$ ([[def-initial-and-final-topology]]).

[L1] $\langle \mathcal{G} \rangle$ is a topology containing $\mathcal{G}$ and contained in every topology containing $\mathcal{G}$; and $\mathcal{G}$ is a subbasis for it ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

[L2] A map of spaces is continuous if and only if preimages of open sets are open, and if and only if preimages of the members of some subbasis of the target are open ([[thm-continuity-characterisations-top]], clauses (b) and (d); [[def-continuous-map-top]]).

[L3] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L4] A topology contains $\varnothing$ and the whole set and is closed under arbitrary unions and binary intersections ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Each $f_i$ is continuous for $\mathcal{T}^{\mathrm{in}}$: for $V \in \mathcal{T}_i$ the set $f_i^{-1}[V]$ lies in $\mathcal{G} \subseteq \langle \mathcal{G} \rangle = \mathcal{T}^{\mathrm{in}}$, so preimages of open sets are open. [A1, L1, L2]

1.2 Let $\mathcal{T}'$ be a topology on $X$ making every $f_i$ continuous. Then $\mathcal{G} \subseteq \mathcal{T}'$ by [L2], so $\mathcal{T}^{\mathrm{in}} = \langle \mathcal{G} \rangle \subseteq \mathcal{T}'$ by [L1]. [A1, L1, L2]

1.3 Each $g_i$ is continuous for $\mathcal{T}^{\mathrm{fin}}$: if $U \in \mathcal{T}^{\mathrm{fin}}$ then $g_i^{-1}[U] \in \mathcal{S}_i$ by the defining condition. [A1, L2]

1.4 Let $\mathcal{T}''$ be a topology on $X$ making every $g_i$ continuous, and let $U \in \mathcal{T}''$. Then $g_i^{-1}[U] \in \mathcal{S}_i$ for every $i$ by [L2], so $U \in \mathcal{T}^{\mathrm{fin}}$; hence $\mathcal{T}'' \subseteq \mathcal{T}^{\mathrm{fin}}$. [A1, L2]

1.5 Assume every $f_i \circ h$ is continuous. For $i \in I$ and $V \in \mathcal{T}_i$ one has $h^{-1}[f_i^{-1}[V]] = (f_i \circ h)^{-1}[V]$, which is open in $Z$; so preimages under $h$ of all members of $\mathcal{G}$ are open, and $\mathcal{G}$ is a subbasis for $\mathcal{T}^{\mathrm{in}}$, so $h$ is continuous by clause (d) of [L2]. [given, A1, L1, L2]

1.6 Assume every $k \circ g_i$ is continuous. For $V$ open in $W$ and each $i$ one has $g_i^{-1}[k^{-1}[V]] = (k \circ g_i)^{-1}[V]$, which is open in $Z_i$; so $k^{-1}[V] \in \mathcal{T}^{\mathrm{fin}}$ by the defining condition, and $k$ is continuous by clause (b) of [L2]. [given, A1, L2]

2.1 If $h : Z \to X$ is continuous then each $f_i \circ h$ is continuous, and if $k : X \to W$ is continuous then each $k \circ g_i$ is continuous, in both cases as a composite of continuous maps, the $f_i$ being continuous by step 1.1 and the $g_i$ by step 1.3. [step 1.1, step 1.3, L3]

2.2 Steps 1.1 and 1.2 are claim 1, and steps 1.3 and 1.4 are claim 3. [step 1.1, step 1.2, step 1.3, step 1.4, L4]

3.1 Step 2.1 gives the forward implications of claims 2 and 4, and steps 1.5 and 1.6 give the reverse implications; so claims 2 and 4 hold, and with step 2.2 all four claims are proved. [step 2.1, step 1.5, step 1.6, step 2.2] ∎

## Remarks

- **The characteristic property pins the topology down.** Suppose two topologies
  $\mathcal{T}_1$ and $\mathcal{T}_2$ on $X$ both satisfy claim 2 for every space
  $Z$ and every function $h$. Apply claim 2 for $\mathcal{T}_1$ to
  $Z = (X,\mathcal{T}_2)$ and $h = \mathrm{id}$: the composites $f_i$ are
  continuous on $(X,\mathcal{T}_2)$ by claim 2 for $\mathcal{T}_2$ applied to the
  identity of $(X,\mathcal{T}_2)$, so the identity
  $(X,\mathcal{T}_2) \to (X,\mathcal{T}_1)$ is continuous, that is
  $\mathcal{T}_1 \subseteq \mathcal{T}_2$. Exchanging the roles gives equality.
  The same argument with the arrows reversed does claim 4.

- **Only continuity of the composites is tested, never their openness.** Claim 2
  says nothing about whether $h$ is open or closed, and claim 4 says nothing
  about $k$; the constructions below acquire such properties one at a time and
  each is proved where it is used.

- **The one-element family is not a degenerate case but the main one.** The
  subspace topology is the initial topology of a single inclusion and the
  quotient topology is the final topology of a single surjection
  ([[def-initial-and-final-topology]]), so claims 2 and 4 with $I$ a one-element
  set already carry the characteristic properties of both.
