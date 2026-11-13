---
id: def-path-localisation-interface-artin-tits-prerequisites
kind: definition
title: Path presentations, congruences and formal inverses
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-small-groupoid-interface-artin-tits-prerequisites
  - math:ex-the-free-category-on-a-quiver
  - math:def-equivalence-relation
dependency_roles:
  def-small-groupoid-interface-artin-tits-prerequisites: mathematical-premise
  math:ex-the-free-category-on-a-quiver: mathematical-premise
  math:def-equivalence-relation: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 1
---

## Definition

A small directed graph, or quiver, $Q$ consists of a set $Q_0$ of vertices, a set $Q_1$ of directed edges, and source and target functions $s,t:Q_1\to Q_0$. Its path category $P(Q)$ has the vertices as objects and finite composable sequences of edges as arrows; the empty sequence at a vertex is its identity. Composition is concatenation, read from left to right.

A path relation is a pair of paths with the same source and target. Let $R$ be a set of path relations. A path congruence is an equivalence relation on the set of all paths that relates only paths with the same endpoints and remains valid after concatenation on either side by any composable path. Write $\equiv_R$ for the smallest path congruence containing $R$. The category presented by $(Q,R)$ is $\mathcal C=P(Q)/{\equiv_R}$: its objects are the vertices, its arrows are equivalence classes of paths, and its identities and composition are induced by empty paths and concatenation.

Form the doubled quiver $\overline Q$ by adjoining, for each edge $e:x\to y$ of $Q$, a new tagged edge $e^{-1}:y\to x$. These new edges are distinct from the original edges and from one another. Regard each relation in $R$ as a relation in $P(\overline Q)$ and add the relations $ee^{-1}=1_x$ and $e^{-1}e=1_y$ for every $e:x\to y$. The resulting presented category is the groupoid completion $\mathcal C^{\mathrm{gp}}$; the canonical functor $j:\mathcal C\to\mathcal C^{\mathrm{gp}}$ sends each path class to the class of the same path in the doubled quiver.

For every small groupoid $\mathcal G$ and functor $F:\mathcal C\to\mathcal G$, there is a unique functor $\overline F:\mathcal C^{\mathrm{gp}}\to\mathcal G$ with $\overline F\circ j=F$. Oppositely directed edges already in $Q$ remain distinct generators from the newly adjoined formal inverses, although imposed relations can identify their classes. Neither cancellation in $\mathcal C$ nor faithfulness of $j$ is assumed.

## Definition references

[[def-small-groupoid-interface-artin-tits-prerequisites]]

[[math:ex-the-free-category-on-a-quiver]]

[[math:def-equivalence-relation]]

## Justification

The free-path construction gives a small category and a set of paths. The intersection of all endpoint-preserving path congruences containing $R$ is such a congruence: the family is nonempty because the relation identifying exactly paths with the same endpoints is one. The intersection is contained in every other member, so it is the smallest. Its equivalence classes form a set. Since equivalent paths have the same endpoints and the relation is stable under concatenation, source, target, identities and composition of classes are independent of representatives. Associativity and identity laws descend from the path category. These constructions use [[math:ex-the-free-category-on-a-quiver]] and [[math:def-equivalence-relation]].

The doubled quiver and the enlarged relation set are set-sized, so the same construction applies. Every original edge class has the corresponding reverse-edge class as a two-sided inverse. Reversing a finite path and replacing each edge by its paired reverse gives a two-sided inverse to its class; hence every arrow is invertible and the resulting small category is a groupoid, as in [[def-small-groupoid-interface-artin-tits-prerequisites]]. The original relations hold in the enlarged quotient, so sending a path to its enlarged class is constant on $\equiv_R$ and defines $j$.

Given $F$, assign each vertex $x$ the object $F(x)$, each original edge its image under $F$ after passage to $\mathcal C$, and each new reverse edge the inverse of that image. The free-path property extends this assignment uniquely to a functor $H:P(\overline Q)\to\mathcal G$. It respects the original relations because $F$ is defined on $\mathcal C$, and respects the inverse relations by the groupoid laws. For paths $p,q$ in $P(\overline Q)$, define $p\sim q$ to mean that $p$ and $q$ have the same source and target and $H(p)=H(q)$. This is an endpoint-preserving equivalence relation. If $p\sim q$ and paths $a,b$ can be concatenated on the left and right, then $apb$ and $aqb$ have the same endpoints and $H(apb)=H(a)H(p)H(b)=H(a)H(q)H(b)=H(aqb)$, so the relation is a path congruence. It contains every enlarged relation because those relations have matching endpoints and $H$ respects them. The smallest enlarged path congruence is therefore contained in $\sim$, so $H$ descends to a functor $\overline F$ on the quotient, with object map $x\mapsto F(x)$ and $\overline F\circ j=F$. Any functor extending $F$ must send each new reverse edge to the unique inverse of the image of its original edge; the free-path property then forces its value on every path and hence every quotient class. This proves existence and uniqueness without asserting that $j$ is faithful.
