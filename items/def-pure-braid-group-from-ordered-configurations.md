---
id: def-pure-braid-group-from-ordered-configurations
kind: definition
title: "The pure braid group $PB_n$ as the fundamental group of an ordered configuration space"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       def-based-loops-and-fundamental-group,
       def-induced-homomorphism-on-fundamental-groups,
       lem-path-conjugation-isomorphism-of-fundamental-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1-1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: n/a
---

## Definition

Fix $n\in\mathbb N$ and a **base configuration** $q=(q_1,\dots,q_n)$, an
ordered $n$-tuple of pairwise distinct points of the open unit disc
$\operatorname{int}D^2=\{z\in\mathbb C:|z|<1\}$, so that
$$q\in F_n(\operatorname{int}D^2)\subseteq F_n(D^2),\qquad D^2=\{z\in\mathbb C:|z|\le1\}$$
in the notation of [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]
and [[def-ordered-configuration-space]]. The **pure configuration braid
group** on $n$ strands is the fundamental group
([[def-based-loops-and-fundamental-group]])

$$PB_n:=\pi_1\big(F_n(D^2),q\big),$$

the group of based-loop classes at $q$ in the ordered configuration space of the
closed disc, with the first-then-second loop product.

**The open-disc model.** The inclusion
$F_n(\operatorname{int}D^2)\to F_n(D^2)$ induces an isomorphism
$$\pi_1\big(F_n(\operatorname{int}D^2),q\big)\longrightarrow\pi_1\big(F_n(D^2),q\big)$$
of fundamental groups at the same base configuration $q$
([[def-induced-homomorphism-on-fundamental-groups]]); this is claim 3 of
[[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]].
The isomorphism is canonical — it is induced by the inclusion and involves no
choice — so on this page and its consumers $PB_n$ may be computed from either
the closed-disc or the open-disc ordered configuration space. The closed-disc
model is the one that matches the geometrically drawn braids, and the open-disc
model is the one to which the forgetful fibrations for boundaryless manifolds
apply; both give the same group by the displayed isomorphism.

**The basepoint.** The configuration $q$ is part of the data defining $PB_n$, and
all groups on this page use the same $q$. Different choices of base
configuration give isomorphic groups: $F_n(D^2)$ is path-connected for every
$n$ (claim 2 of
[[thm-ordered-configurations-cover-unordered-configurations-regularly]]), and a
path between base configurations conjugates loop classes and induces an
isomorphism ([[lem-path-conjugation-isomorphism-of-fundamental-groups]]). No
particular such isomorphism is fixed here. For $n=0$ the space $F_0(D^2)$ is a
point, so $PB_0$ is the one-element group; for $n=1$ single-coordinate
evaluation gives $F_1(D^2)\cong D^2$ and $PB_1$ is trivial.

**Scope.** This is the configuration-space definition of the pure braid group,
stated before any comparison with geometric strands or with the Artin
presentation: no presentation of $PB_n$ is asserted here. The description by
geometric braids and the Artin presentation, and the configuration braid short
exact sequence relating $PB_n$ to the unordered configuration braid group,
belong to the later items on braids, which consume this definition.
