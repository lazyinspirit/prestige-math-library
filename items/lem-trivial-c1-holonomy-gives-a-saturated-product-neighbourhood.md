---
id: lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood
kind: lemma
title: "Trivial C¹ holonomy gives a saturated product neighbourhood"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-chart-bump-at-a-point-with-prescribed-support, thm-fundamental-theorem-on-flows, thm-intermediate-value, def-c1-regular-codimension-one-foliation-and-transverse-orientation, lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs, def-compact-space, def-saturated-neighbourhood-of-a-leaf, def-smooth-manifold, thm-euclidean-inverse-function-theorem, def-embedded-submanifold-and-slice-chart, lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface, thm-finite-products-of-compact-spaces, cor-euclidean-closed-balls-and-spheres-are-compact, thm-compact-iff-fip, cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed, def-topological-manifold-without-boundary, def-hausdorff-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (holonomy transport and the product neighbourhood of a leaf with trivial holonomy)"
    - title: "David Gabai, Commentary on Thurston's Foliations and the Thurston norm"
      url: "https://web.math.princeton.edu/facultypapers/Gabai/Commentary-Thurston-Foliations.pdf"
      locator: "Theorem 0.8(b), PDF p. 2 (local stability conclusion)"
dependency_level: 3
---

## Statement

Let $F$ be a transversely oriented $C^1$ codimension-one foliation of a smooth
manifold $M$, and let $L$ be a compact leaf with trivial $C^1$ holonomy
([[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]]).
Then there are an open interval $D$ and a saturated open neighbourhood $U$ of
$L$ with a $C^1$ foliated diffeomorphism
$$(U,F|_U)\cong\bigl(L\times D,\ \{L\times\{t\}\}_{t\in D}\bigr),$$
that is, a $C^1$ diffeomorphism carrying the foliation $F|_U$ onto the product
foliation by the slices.

## Facts & Assumptions

**Given:** A transversely oriented $C^1$ codimension-one foliation $F$ of a smooth manifold $M$ and a compact leaf $L$ whose holonomy representation $\rho_x:\pi_1(L,x)\to\operatorname{Diff}^{1,+}_x(T)$ is trivial for every $x\in L$ and every local transversal $T$.

[F1] A compact leaf of a $C^1$ codimension-one foliation is an embedded $C^1$ hypersurface, and the plaque transport along leafwise paths defines a homomorphism from $\pi_1(L,x)$ whose triviality means that the transport germ along every leafwise loop is the identity ([[lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]], [[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]]).

[F2] A $C^1$ foliation atlas has charts $(z,t)$ with plaques $t=\mathrm{constant}$ and transverse coordinate changes $t\mapsto h(t)$ that are one-dimensional $C^1$ local diffeomorphisms; a finite chain of such changes composes to a $C^1$ local diffeomorphism germ ([[def-c1-regular-codimension-one-foliation-and-transverse-orientation]]).

[F3] A $C^1$ map between Euclidean spaces whose derivative at a point is invertible is a local $C^1$ diffeomorphism near that point ([[thm-euclidean-inverse-function-theorem]]).

[F4] An open set is saturated for $F$ when it is a union of leaves; the leaves of a connected leaf are connected ([[def-saturated-neighbourhood-of-a-leaf]]).

[F5] Finite products of compact spaces are compact in the product topology, a Euclidean closed ball and in particular a closed interval of $\mathbb R$ is compact, and a topological space is compact exactly when every family of its closed subsets with the finite intersection property has nonempty intersection ([[thm-finite-products-of-compact-spaces]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-compact-iff-fip]], [[def-compact-space]]).

[F6] If $Z$ is a topological space, $Y$ is Hausdorff and $f,g:Z\to Y$ are continuous, then $\{z\in Z:f(z)=g(z)\}$ is closed in $Z$; every smooth manifold is Hausdorff ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-topological-manifold-without-boundary]], [[def-hausdorff-space]], [[def-smooth-manifold]]).

[F7] Smooth chart bumps supported in any prescribed point neighborhood exist without a choice axiom ([[lem-chart-bump-at-a-point-with-prescribed-support]]). A smooth vector field has a smooth local flow with open time-domain ([[thm-fundamental-theorem-on-flows]]).

[F8] A continuous real function on a closed interval takes every value between its endpoint values ([[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

1.1 (Compact injectivity.) For completeness, let $G:L\times I\to M$ be a local diffeomorphism with $G(p,0)=p$, and choose a closed interval $[-e,e]\subset I$. If no smaller interval gives injectivity, the closures of its distinct equal-image pairs in the compact space $(L\times[-e,e])^2$, restricted to parameters of absolute value at most $1/n$, form nested nonempty closed sets. F5 gives a common point. Continuity and F6 force its parameters to be zero and its two base points to coincide. A local inverse neighborhood at that central point contains no distinct equal-image pair, contradicting membership in the closure. Thus such a map is injective on a smaller interval about zero. [F1, F3, F5, F6]

1.2 (Normalized chart first integrals.) Fix a transversal $T$ at $x\in L$ with positive coordinate $t$ vanishing at $x$. Choose finitely many connected plaque neighborhoods $B_i\subseteq L$ in foliation charts with positive transverse coordinate $t_i$ and $L$ given there by $t_i=0$, and smaller relatively open $A_i$ covering $L$ with $\overline{A_i}\subseteq B_i$. Each closure is compact. Choose one point $x_i\in B_i$ and one leafwise path from $x$ to $x_i$. Its finite chart chain gives an actual positive $C^1$ transverse-coordinate diffeomorphism $h_i$ near zero, from the coordinate on $T$ to $t_i$. On a neighborhood of $\overline{A_i}$ define the $C^1$ first integral $r_i=h_i^{-1}\circ t_i$, shrinking its domain so the inverse is defined. For any $p\in B_i$, continuing that path inside the connected plaque $B_i$ identifies the same label $r_i$ with the starting coordinate $t$. [F1, F2, F5, choose]

2.1 (A transverse collar.) Consider all pairs consisting of a smooth ambient coordinate vector, positively transverse to the continuous tangent hyperplanes of $L$ on its coordinate neighborhood, and a nonnegative chart bump supported there. Such vectors exist locally by continuity, and the positive sets of the bumps from F7 cover $L$. Retain finitely many and sum the corresponding nonnegative bump multiples of the vectors, extending each summand by zero. The resulting smooth field $V$ is positively transverse along $L$. Its flow gives a $C^1$ map $C(p,s)=\operatorname{Fl}^V_s(p)$ on $L\times(-a,a)$ for some $a>0$ by compactness. At $(p,0)$ its derivative is $(v,b)\mapsto v+bV_p$, hence invertible by F3. After shortening $a$, $C$ is a local diffeomorphism everywhere and injective: the compact bad-pair argument in step 1.1 applies to any such map equal to the inclusion at $s=0$. Thus $C$ is a $C^1$ collar; write $P(C(p,s))=p$ for its $C^1$ projection. The finite bump selection uses compactness, not a partition of unity on an arbitrary cover or an additional choice axiom. [F1, F3, F5, F6, F7, step 1.1, construct]

3.1 (Equality on actual overlaps.) If $p\in B_i\cap B_j$, the two paths from $x$ to $p$ just described differ by a loop in $L$. Its transport germ is the identity by F1. Hence $r_i$ and $r_j$ agree as transverse-coordinate germs on the collar fibre through $p$. Locally both are functions of one foliation-chart transverse coordinate, whose restriction to that fibre is a local diffeomorphism; equality on a small fibre interval therefore implies equality on an ambient neighborhood of $p$. The compact set $K_{ij}=\overline{A_i}\cap\overline{A_j}\subseteq B_i\cap B_j$ has a neighborhood on which these actual functions agree. There are finitely many pairs. Compactness in the collar gives one $b>0$ such that each $r_i$ is defined on $C(\overline{A_i}\times[-b,b])$ and every such pair agrees on $C(K_{ij}\times[-b,b])$. The functions thus glue on the open collar $C(L\times(-b,b))$ to a $C^1$ function $r$ constant on local plaques, with $r(p)=0$ on $L$ and $\partial_s(r\circ C)(p,0)>0$. This is a finite compact-overlap argument; it imposes no simultaneous equality on an arbitrary family of path representatives. [F1, F2, F3, F5, step 2.1, step 1.2]

4.1 (The product map.) Shorten $b$ so that $\partial_s(r\circ C)>0$ on $L\times[-b,b]$. The endpoint values at $s=-b$ are negative and those at $s=b$ positive, uniformly away from zero by compactness. Choose $d>0$ smaller than both absolute endpoint bounds and set $D_0=(-d,d)$. For each $(p,t)\in L\times D_0$, the intermediate value theorem and strict monotonicity give a unique $s\in(-b,b)$ with $r(C(p,s))=t$. The map $(p,s)\mapsto(p,r(C(p,s)))$ has invertible derivative, so its inverse is $C^1$ by F3. Composing with $C$ yields $\Phi:L\times D_0\to M$, with $P(\Phi(p,t))=p$, $r(\Phi(p,t))=t$ and $\Phi(p,0)=p$. It is a local diffeomorphism and carries every connected slice into one leaf, because the level sets of $r$ are locally precisely plaques. This includes point leaves when $\dim M=1$. [F2, F3, F5, F8, step 3.1, construct]

5.1 (Saturation.) The identities $P(\Phi(p,t))=p$ and $r(\Phi(p,t))=t$ make $\Phi$ injective; take $D=D_0$. Its image $U$ is open. A slice image is nonempty, compact, connected and open in its intrinsic leaf topology; the intrinsic inclusion is continuous by its local plaque expressions. That leaf is Hausdorff, so this compact image is also closed there and therefore is the whole connected leaf. Hence $U$ is saturated, and the injective local diffeomorphism $\Phi$ is a foliated $C^1$ diffeomorphism onto $U$. [F1, F3, F4, F5, F6, step 4.1]

6.1 Thus $(U,F|_U)\cong(L\times D,\{L\times\{t\}\})$ is the required saturated $C^1$ product neighborhood. Only finitely many chart, path and bump choices were used. [step 5.1] ∎
