---
id: lem-definite-normal-pairing-forces-nonsplit-boundary
kind: lemma
title: "A definite normal pairing forces a nonsplit boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-split-link
  - thm-mayer-vietoris-sequence-in-singular-homology
  - cor-homology-of-spheres
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the surface has a supplied finite disk-and-band presentation; the argument uses finite surface cuts, finite rational chains, disk surgeries and ordinary Mayer–Vietoris. It uses neither an arbitrary surface-classification theorem nor Schoenflies or ambient-isotopy invariance of a diagram polynomial."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Joshua E. Greene, Alternating links and definite surfaces, §§2–3 and §5, especially Corollary 3.2 and Lemma 3.3"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.1, Fact 2.4"
      url: "https://arxiv.org/pdf/2008.06490v3"
dependency_level: 1
---

## Statement

Let $F\subset S^3$ be a compact connected smoothly embedded surface with nonempty boundary $L$, supplied with a finite disk-and-band presentation. The surface may be nonorientable. A normal transfer $\tau c$ of an oriented rational multicurve $c$ in the interior of $F$ is its total inverse image in the boundary of a sufficiently small normal interval neighborhood of $F$, oriented by projection onto $c$. Suppose a quadratic form $q$ on $H_1(F;\mathbb Q)$ is positive definite or negative definite and satisfies $q([c])=\operatorname{lk}(c,\tau c)$ for every such rational multicurve. Then $L$ is nonsplit. Definiteness on the zero vector space is allowed.

## Statement references

[Greene, *Alternating links and definite surfaces*, Corollary 3.2 and Lemma 3.3](https://people.maths.ox.ac.uk/lackenby/Fox.pdf)

[Kindred, *A geometric proof of the flyping theorem*, Fact 2.4](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** The surface $F$, its boundary $L$, its finite presentation, and the definite form $q$ with the stated normal-transfer property.

[F1] A splitting sphere is a smooth sphere disjoint from $L$ with points of $L$ on both complementary sides. ([[def-split-link]])

[F2] Mayer–Vietoris gives the exact homology sequence of a two-open-set cover, with rational coefficients allowed. ([[thm-mayer-vietoris-sequence-in-singular-homology]])

[F3] $H_1(S^3;\mathbb Q)=H_2(S^3;\mathbb Q)=0$ and $H_0(S^3;\mathbb Q)=\mathbb Q$. ([[cor-homology-of-spheres]])

[F4] Finite simplicial homology agrees with singular homology, without a choice assumption. ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]])

## Proof

1.1 Linking can be computed here using finite rational chains: a rational $1$-cycle $a$ in $S^3$ bounds a rational $2$-chain $C$ by [F3], and $\operatorname{lk}(a,b)=C\mathbin{\cdot}b$ for a disjoint rational cycle $b$. Independence of $C$ follows because the difference of two choices bounds a $3$-chain by [F3], whose intersection with the closed cycle $b$ has total boundary zero. In particular linking is zero if $a$ bounds a chain disjoint from $b$, and is unchanged under a homology of $b$ in the complement of $a$. All chains involved are finite. Curves and surfaces used below can be put in finite general position: subdivide their compact parameter domains finely in finitely many coordinate neighborhoods, approximate by polygonal patches within a tubular neighborhood, perturb the finitely many vertices to avoid the finitely many nontransverse affine incidences, and smooth the patches in smaller neighborhoods. Approximation sufficiently close to the original embedded patches preserves embedding and disjointness from the compact boundary $L$. These operations use finitely many choices, and no simultaneous choices indexed by an infinite family. [given, F3, construct]

1.2 We record elementary finite-surface facts needed below. Cutting the supplied presentation along a finite family of curves gives finite triangulations of its pieces. A connected triangulated surface with boundary has a graph spine: in the dual graph include a vertex for the boundary, choose a finite spanning tree rooted there, and remove triangles successively across their edge facing the already removed parent. The remaining $1$-complex is a deformation retract, and reversing these elementary collapses shows that the surface is a regular neighborhood of that graph. Consequently its rational first homology vanishes exactly when that graph is a tree, in which case its regular neighborhood is a disk, by successively removing leaf edges. Also, a two-sided simple closed curve $\gamma$ in the interior of $F$ with $[\gamma]=0$ bounds an orientable subsurface $F_0$ having $\gamma$ as its only boundary. To see this, triangulate with $\gamma$ as an edge cycle and take a rational $2$-chain bounding it using [F4]. Across edges outside $\gamma$ its coefficients agree with orientation signs. They vanish on the component touching $\partial F$ and jump by one across $\gamma$, so the nonzero component supplies precisely such an oriented $F_0$. The same coefficient argument shows that $H_1(F_0;\mathbb Q)\to H_1(F;\mathbb Q)$ is injective: any bounding chain for a cycle in $F_0$ has zero coefficients on the connected complementary surface, which touches $\partial F$. [given, F4, construct]

2.1 Suppose $D$ is a compressing disk for $F$: its interior misses $F$ and its boundary $\gamma$ does not bound a disk in $F$. Its boundary is two-sided in $F$, since a collar of the disk at $\gamma$ gives a side of the normal interval bundle there. The normal transfer of a sufficiently close parallel copy of $\gamma$ misses $D$; in a collar of $\gamma$, move the parallel copy slightly in the direction tangent to $F$ and transverse to $\gamma$, and take its normal lifts still closer to that copy. Thus $\operatorname{lk}(\gamma,\tau\gamma)=0$ by step 1.1. Definiteness forces $[\gamma]=0$. Step 1.2 supplies the subsurface $F_0$ bounded by $\gamma$. It is not a disk, and hence $V=H_1(F_0;\mathbb Q)$ is nonzero and injects into $H_1(F;\mathbb Q)$. Cap $F_0$ with $D$ and smooth the corner, giving a closed connected orientable embedded surface $\Sigma$. Capping the unique boundary circle does not change $H_1$, so $H_1(\Sigma;\mathbb Q)=V$. [given, step 1.1, step 1.2, contradiction, construct]

3.1 The surface $\Sigma$ has a two-sided collar. Apply [F2] to that collar and $S^3\setminus\Sigma$. Their overlap has two components, each retracting onto $\Sigma$. By [F3], the map from the overlap's $H_0=\mathbb Q^2$ into $\mathbb Q\oplus H_0(S^3\setminus\Sigma;\mathbb Q)$ is injective and has cokernel $\mathbb Q$. Hence the complement has exactly two components, and the two collar sides belong to different ones. Let $A$ and $B$ be their closures. Thickening them to open sets, [F2] and [F3] give an isomorphism $V\to H_1(A;\mathbb Q)\oplus H_1(B;\mathbb Q)$. At least one projection has nonzero kernel: if both were injective, each target would have dimension at least $\dim V>0$, contradicting that their dimensions sum to $\dim V$. Thus a nonzero $a\in V$ bounds a rational $2$-chain on one side, say in $A$. Represent $a$ by an oriented rational multicurve in $\operatorname{int}F_0$. Both of its normal pushoffs have the same linking with it: the two normal directions are joined by a half-rotation in the normal plane of each oriented curve, giving a homology of the pushoffs in its complement. The pushoff into $\operatorname{int}B$ misses the bounding chain in $A$, so that linking is zero by step 1.1. The normal transfer therefore has linking zero as well. Step 1.2 makes $a$ nonzero in $H_1(F;\mathbb Q)$, contradicting definiteness of $q$. Thus $F$ has no compressing disk. [given, F2, F3, step 1.1, step 1.2, step 2.1, construct, contradiction]

4.1 By step 3.1, $F$ is incompressible. Suppose now that a splitting sphere $S$ exists. Make it transverse to $F$ by the finite perturbation of step 1.1, keeping it disjoint from $L$. Their intersection is a finite union of circles. At least one is essential in $F$: otherwise each bounds a disk in $F$, and removing the interiors of the outermost such disks leaves a connected surface containing every component of $\partial F=L$, disjoint from $S$. Its boundary would lie entirely on one side of $S$, contrary to [F1]. Choose a circle $\gamma$ innermost on $S$ among the circles essential in $F$, and let $D$ be the disk it bounds on $S$ with no other essential circle in its interior. [given, F1, step 1.1, step 3.1, choose, contradiction, construct]

5.1 Every circle of $\operatorname{int}D\cap F$ bounds a disk in $F$. If there are any, choose one $\beta$ whose disk $E\subset F$ is innermost among them. Its interior misses $D$: any intersection circle in that interior would itself be inessential in $F$ and would contradict the choice. The essential curve $\gamma$ cannot lie inside $E$. Replace the disk on $D$ bounded by $\beta$ by a small parallel copy of $E$, choosing the side that joins the remainder of $D$ and smoothing its boundary. Since $\operatorname{int}E$ misses $D$, this is again an embedded disk with boundary $\gamma$. It stays disjoint from $L$ and has strictly fewer intersection circles with $F$; the replacement disk is pushed off $F$ and all circles inside the discarded disk have disappeared. Repeating this finite reduction gives an embedded disk with boundary $\gamma$ and interior disjoint from $F$. This is a compressing disk, contrary to step 3.1. The splitting sphere cannot exist, so $L$ is nonsplit. [F1, step 3.1, step 4.1, construct, contradiction] ∎
