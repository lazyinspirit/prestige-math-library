---
id: def-pure-mapping-class-group-of-a-punctured-disk
kind: definition
title: "Pure boundary-fixed mapping classes"
status: draft
origin: pipeline
landmark: true
deps: [def-boundary-fixed-mapping-class-group-of-a-punctured-disk, thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.4, printed pp. 6-7"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$ and let $D^2$, the base configuration
$Q_n=(q_1,\dots,q_n)$ and the boundary-fixed mapping class group
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ be as in
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]. While that
group allows its elements to permute the marked points, the present definition
records the classes that fix them.

**The pointwise stabilizer.** Write

$$\operatorname{Homeo}^+(D^2,\partial D^2;\hat Q_n):=\{\,f\in\operatorname{Homeo}^+(D^2,\partial D^2)\ :\ f(q_i)=q_i\ \text{for every }i\,\}$$

for the set of homeomorphisms of $D^2$ that fix $\partial D^2$ pointwise and fix
every marked point. It is a subgroup of
$\operatorname{Homeo}^+(D^2,\partial D^2)$:
the identity fixes every $q_i$, the composite of two such homeomorphisms fixes
every $q_i$, and the inverse of such a homeomorphism fixes every $q_i$; it is
also contained in the setwise stabilizer of $Q_n$, because fixing each point
preserves the set. It carries the subspace topology of the compact-open
topology on $\operatorname{Homeo}^+(D^2,\partial D^2)$, and its group operations
are continuous there.

**The pure mapping class group.** The **pure boundary-fixed mapping class group
of the punctured disc** is

$$\operatorname{PMod}(D^2,Q_n;\partial D^2):=\pi_0\bigl(\operatorname{Homeo}^+(D^2,\partial D^2;\hat Q_n)\bigr),$$

the set of path components of the pointwise stabilizer. A path
$s\mapsto f_s$ in the pointwise stabilizer is exactly a continuous
$H:D^2\times I\to D^2$ with every $H(-,s)$ a homeomorphism fixing
$\partial D^2$ and every marked point, that is, an isotopy rel $\partial D^2$
that fixes each $q_i$ for all times; two elements of the subgroup are isotopic
in this sense exactly when they lie in the same component. Composition of
representatives descends to $\operatorname{PMod}(D^2,Q_n;\partial D^2)$, since
the pointwise stabilizer is a topological group, so
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is a group with the same product
$[f][g]=[f\circ g]$ and identity $[\operatorname{id}_{D^2}]$ as
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$.

**Comparison with the setwise group.** The inclusion
$\operatorname{Homeo}^+(D^2,\partial D^2;\hat Q_n)\hookrightarrow\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$
induces a map
$\operatorname{PMod}(D^2,Q_n;\partial D^2)\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$,
and this map is injective: if $f,g$ both fix every $q_i$ and a path in the
setwise stabilizer joins them, then the permutation of the finite set
$\{q_1,\dots,q_n\}$ induced by the time-$s$ homeomorphism is a locally constant
function of $s$ (the permutation is a discrete-valued continuous function of
$s$ because each strand $s\mapsto f_s(q_i)$ is continuous and lands in the
finite discrete set $\{q_1,\dots,q_n\}$), hence constant, so the path lies in
the pointwise stabilizer. Thus
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is identified with the subgroup of
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ consisting of the classes with trivial
permutation of $Q_n$, and this identification is used throughout the pair. In
particular, for $n=0$ and $n=1$ every boundary-fixed class is pure, because the
setwise and pointwise stabilizers coincide.

**Relation to the punctured disc.** A homeomorphism fixing $\partial D^2$
pointwise and every $q_i$ restricts to a homeomorphism of
$D^2\setminus Q_n$. In this convention the punctured-disc isotopies are
restrictions of continuous ambient isotopies fixing $\partial D^2$ pointwise
and every marked point at every time. Thus their ambient extensions are paths
in the pointwise stabilizer, and conversely every such path restricts to an
isotopy with these conditions. Allowing boundary rotation gives a different
isotopy relation and is excluded. This is the convention for
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ throughout the pair.

## Remarks

- The notation $\hat Q_n$ is a reminder that each marked point is fixed
  individually; the setwise stabilizer is written with plain $Q_n$.
- Fixing every marked point throughout the isotopy is a strictly stronger
  requirement than fixing the set $\{q_1,\dots,q_n\}$ throughout; the companion
  page's setwise-puncture counterexample exhibits the difference at the level
  of classes, and the comparison just recorded says that even at the level of
  paths the two conventions differ exactly by the permutation.
- No orientation condition is imposed separately: every element of the
  boundary-fixed group lies in the identity component of the full
  homeomorphism group of the disc, by
  [[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]].
