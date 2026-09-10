---
id: "lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve"
kind: "lemma"
title: "Any two points in a connected smooth manifold can be joined by a piecewise c one curve"
deps: ["def-piecewise-c-one-curve-on-a-manifold", "def-connected-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Any two points in a nonempty connected smooth manifold can be joined by a finite piecewise $C^1$ curve.

## Facts & Assumptions

**Given:** A connected nonempty smooth manifold and points $p,q$.

[F1] [[def-piecewise-c-one-curve-on-a-manifold]]: A **piecewise $C^1$ curve** in $M$ is a continuous map $\gamma:[a,b]\to M$ with a finite subdivision such that its restriction to each closed piece is $C^1$ in local charts, with one-sided derivatives at piece endpoints. Use the chartwise regularity convention of def-c-r-and-smooth-maps-between-smooth-manifolds and the finite path operations of def-piecewise-c1-path-operations-and-oriented-reparametrizations. Refining a piece into finitely many chart pieces is allowed. No nonzero-velocity hypothesis is imposed: constant segments and pauses are admissible. A singleton parameter interval is interpreted as a constant curve of length zero.

[F2] [[def-connected-space]]: Let $(X, \mathcal{T})$ be a topological space (def-topological-space). - A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**, **disjoint** subsets of $X$ with $U \cup V = X$. - $X$ is **disconnected** when a separation of $X$ exists, and **connected** when none does. - A subset $A \subseteq X$ is a **connected subset** of $X$ when the space $(A, \mathcal{T}_A)$ is connected, $\mathcal{T}_A$ being the subspace topology (def-subspace-topology-top). "Disconnected subset" is read the same way. Since $U$ and $V$ are complementary in $X$, each of them is closed as well as open; so a separation is the same thing as a partition of $X$ into two nonempty clopen pieces (def-topological-space). The **clopen** subsets of $X$ are those that are both open and closed, and $\varnothing$ and $X$ are always among them. **The empty space and the one-point space are connected in this library.** Neither admits a separation: a separation requires two nonempty disjoint sets whose union is the whole space, and neither $\varnothing$ nor a singleton can be written as such a union. So both are connected under the definition above, without any special clause. **This is a live convention fork** and the competing choice is recorded in rem-connectedness-conventions; nothing on this page depends on which is taken except the reading of the word "connected" applied to those two spaces. **Connectedness is a property of a space, not of an ambient pair.** The condition above mentions only $(X,\mathcal{T})$. When it is applied to $A \subseteq X$ it is applied to the space $(A, \mathcal{T}_A)$, so it does not change if $A$ is regarded as a subspace of some other space inducing the same topology on $A$; in particular a subset of $A$ is connected as a subset of $A$ exactly when it is connected as a subset of $X$, by transitivity of the subspace topology (def-subspace-topology-top). This is why "connected" may be used of a subset with no ambient space named. **Spelled out for a subset.** $A \subseteq X$ is disconnected exactly when there are open $U, V \subseteq X$ with $$A \subseteq U \cup V, \qquad U \cap A \ne \varnothing, \qquad V \cap A \ne \varnothing, \qquad U \cap V \cap A = \varnothing,$$ because the open sets of $(A,\mathcal{T}_A)$ are precisely the traces $U \cap A$. Note the last condition: it asks $U$ and $V$ to be disjoint **on $A$**, not in $X$. Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand and is a different notion. **The two-point discrete space.** Write $\mathbf{2} := \{0,1\}$ with the discrete topology (def-standard-topologies), in which every subset is open. A separation of $X$ is the same datum as a surjective continuous map $X \to \mathbf{2}$ (def-continuous-map-top): given $(U,V)$, the map sending $U$ to $0$ and $V$ to $1$ is continuous because the preimage of each of the four open subsets of $\mathbf{2}$ is one of $\varnothing$, $U$, $V$, $X$; given a surjective continuous $\chi : X \to \mathbf{2}$, the pair $(\chi^{-1}[\{0\}], \chi^{-1}[\{1\}])$ is a separation. This reformulation is proved as a theorem on this page and is recorded here only to name $\mathbf{2}$. **Separated sets.** Two subsets $A_1, A_2 \subseteq X$ are **separated in $X$** when $$\overline{A_1} \cap A_2 = \varnothing \qquad \text{and} \qquad A_1 \cap \overline{A_2} = \varnothing,$$ closures taken in $X$ (def-interior-closure-boundary-top, thm-closure-characterisation-top). Separated sets are disjoint, since $A_1 \subseteq \overline{A_1}$; the converse fails. This is verbatim the condition def-connected-r uses on the real line, transported to an arbitrary space, and the theorem relating it to the definition above is the next lemma on this page. **Totally disconnected spaces, and the empty case.** The vocabulary for a space all of whose connected subsets are single points is fixed later on this page, together with the components; it is not defined here because it is stated in terms of components.

## Proof

**Proof technique:** direct.

1.1 Let $R$ be the points reachable from $p$ by finitely many coordinate straight segments. It contains $p$. A small coordinate ball about any point of $R$ is convex, so appending a segment shows the whole ball lies in $R$; hence $R$ is open. Relative half-balls give the same argument at a boundary. [F1, given]

2.1 Every reachability class is open by that argument, and reversing and concatenating finite segments makes reachability an equivalence relation. Thus the complement of $R$ is open. If it were nonempty, it and $R$ would separate the connected manifold. Therefore $R=M$, so $q$ is reachable. For $p=q$ the constant curve works; a connected zero-manifold has only one point. [F2, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
