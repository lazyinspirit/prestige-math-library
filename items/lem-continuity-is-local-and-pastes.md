---
id: lem-continuity-is-local-and-pastes
kind: lemma
title: "Continuity may be checked on any open cover, and on any finite closed cover; composites of continuous maps are continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuity-characterisations-top, def-continuous-map-top, def-topological-space, def-subspace-topology-top]
justified_by: []
forward_refs: [cex-pasting-fails-for-an-infinite-closed-cover]
aliases: [lem-pasting-lemma-top]
landmark: true
short: "locality of continuity; pasting lemma"
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
    - title: "Pasting lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pasting_lemma"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$, $Y$ and $Z$ be topological spaces, with subspaces carrying the subspace
topology ([[def-subspace-topology-top]]). Then:

1. **Composites.** If $f : X \to Y$ and $g : Y \to Z$ are continuous
   ([[def-continuous-map-top]]) then $g \circ f : X \to Z$ is continuous.
2. **Open cover.** Let $f : X \to Y$ be a function and let
   $\{\, U_i : i \in I \,\}$ be a family of open subsets of $X$ with
   $\bigcup_{i \in I} U_i = X$. If $f|_{U_i} : U_i \to Y$ is continuous for every
   $i \in I$, then $f$ is continuous.
3. **Finite closed cover.** Let $f : X \to Y$ be a function, let $n \ge 1$ and
   let $F_1, \dots, F_n$ be closed subsets of $X$ with
   $F_1 \cup \dots \cup F_n = X$. If $f|_{F_k} : F_k \to Y$ is continuous for
   every $k$, then $f$ is continuous.

The converses of claims 2 and 3 hold with no hypothesis on the cover at all:
every restriction of a continuous map to a subspace is continuous
([[def-subspace-topology-top]]). The finiteness in claim 3 is not removable; see
the remarks.

## Facts & Assumptions

**Given:** Topological spaces $X$, $Y$, $Z$; functions $f : X \to Y$ and $g : Y \to Z$; a family $\{\, U_i : i \in I \,\}$ of open subsets of $X$ covering $X$; a natural $n \ge 1$ and closed subsets $F_1, \dots, F_n$ of $X$ covering $X$. For $S \subseteq X$ and $W \subseteq Y$ one has $(f|_S)^{-1}[W] = f^{-1}[W] \cap S$, and $(g \circ f)^{-1}[W'] = f^{-1}[g^{-1}[W']]$ for $W' \subseteq Z$.

[A1] $f$ is continuous if and only if preimages of open sets are open, if and only if preimages of closed sets are closed ([[thm-continuity-characterisations-top]], clauses (b) and (c)).

[A2] The subspace topology on $S \subseteq X$ has as its open sets the traces $U \cap S$ with $U$ open in $X$, and as its closed sets the traces $F \cap S$ with $F$ closed in $X$; if $S$ is open in $X$ then every set open in $S$ is open in $X$, and if $S$ is closed in $X$ then every set closed in $S$ is closed in $X$ ([[def-subspace-topology-top]]).

[L1] A topology is closed under arbitrary unions of open sets (T2), and its closed sets are closed under finite unions (C3) ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1: let $W \subseteq Z$ be open; then $g^{-1}[W]$ is open in $Y$ and hence $f^{-1}[g^{-1}[W]]$ is open in $X$, and this set is $(g \circ f)^{-1}[W]$; so $g \circ f$ is continuous. [given, A1]

1.2 Let $V \subseteq Y$ be open. For each $i \in I$ the set $f^{-1}[V] \cap U_i = (f|_{U_i})^{-1}[V]$ is open in the subspace $U_i$, because $f|_{U_i}$ is continuous; and $U_i$ is open in $X$, so this set is open in $X$. [given, A1, A2]

1.3 Let $F \subseteq Y$ be closed. For each $k \le n$ the set $f^{-1}[F] \cap F_k = (f|_{F_k})^{-1}[F]$ is closed in the subspace $F_k$, because $f|_{F_k}$ is continuous; and $F_k$ is closed in $X$, so this set is closed in $X$. [given, A1, A2]

2.1 Since the $U_i$ cover $X$, $f^{-1}[V] = \bigcup_{i \in I} (f^{-1}[V] \cap U_i)$, a union of sets open in $X$ by step 1.2, hence open in $X$ by (T2). As $V$ was an arbitrary open subset of $Y$, $f$ is continuous, which is claim 2. [step 1.2, given, A1, L1]

2.2 Since the $F_k$ cover $X$, $f^{-1}[F] = \bigcup_{k=1}^{n} (f^{-1}[F] \cap F_k)$, a union of finitely many sets closed in $X$ by step 1.3, hence closed in $X$ by (C3) iterated, the union being over $n \ge 1$ sets. As $F$ was an arbitrary closed subset of $Y$, $f$ is continuous, which is claim 3. [step 1.3, given, A1, L1]

3.1 Claims 1, 2 and 3 are established by step 1.1, step 2.1 and step 2.2 respectively. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **The finiteness in claim 3 is not removable.** The witness is on the companion page: $\mathbb{R}$ with its usual topology is covered by its closed singletons, every restriction of the indicator function of $\{0\}$ to a singleton is continuous, and that function is not continuous ([[cex-pasting-fails-for-an-infinite-closed-cover]]). No corresponding restriction is needed in claim 2.

- **Where each hypothesis is spent.** Claim 2 uses openness of the cover members only to pass from "open in $U_i$" to "open in $X$", and it allows an arbitrary index set because arbitrary unions of open sets are open. Claim 3 uses closedness of the cover members for the corresponding passage, and it must restrict to finitely many because only *finite* unions of closed sets are closed. The two asymmetries of the topology axioms are visible in the two statements, one each.

- **The usual two-piece form.** Claim 3 with $n = 2$ is the pasting lemma as it is normally quoted: if $X = F_1 \cup F_2$ with both pieces closed and $f_1 : F_1 \to Y$, $f_2 : F_2 \to Y$ are continuous and agree on $F_1 \cap F_2$, then the combined function is well defined and continuous. Well definedness is the agreement hypothesis and is not a topological matter; continuity is claim 3.

- **Continuity is a local property, and claim 2 is the precise sense.** A function continuous in a neighbourhood of each point is continuous, because the interiors of those neighbourhoods form an open cover. No such statement holds for uniform notions, which is why nothing here is called *uniform*.
