---
id: prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf
kind: proposition
title: "The Reeb foliation of the solid torus has the boundary as a leaf"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary, cor-kernel-of-a-constant-rank-submersion-is-integrable, thm-regular-foliations-and-integrable-distributions-correspond, prop-quotient-foliation-under-a-free-proper-foliated-action, def-euclidean-spheres-and-closed-balls, def-two-dimensional-torus, def-embedded-submanifold-and-slice-chart, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-countable-choice-principle-for-foliation-pair, def-stable-leaf-of-a-foliation, cor-codimension-one-frobenius-criterion, thm-frobenius-local-coordinate-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.3, Example 4.7, printed pp. 144–145 (the Reeb component as the quotient of the upper half-space minus the origin)"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (Reeb foliation of the solid torus and its contracting holonomy)"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let
$X:=\overline D^2\times S^1$ be the solid torus, where
$\overline D^2=\{(x,y)\in\mathbb R^2:x^2+y^2\le1\}$
([[def-euclidean-spheres-and-closed-balls]]) and $\partial X\cong S^1\times S^1$
is the boundary torus ([[def-two-dimensional-torus]]). Define
$u:\operatorname{Int}\overline D^2\to(0,\infty)$ by
$u(r):=\exp\bigl(1/(1-r^2)\bigr)$ for $0\le r<1$, with $r=\sqrt{x^2+y^2}$, and
consider the level sets of the submersion $f(x,y,t)=u(r)-t$ on
$\operatorname{Int}\overline D^2\times\mathbb R$; add the boundary $\partial X$
as a leaf. This defines a codimension-one regular foliation
$F_{\mathrm{Reeb}}$ of $X$ tangent to $\partial X$
([[def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary]]), and:

1. the boundary $\partial X$ is a compact leaf diffeomorphic to $T^2$;
2. every other leaf is diffeomorphic to $\mathbb R^2$ and accumulates on the
   boundary leaf;
3. the foliation is invariant under the translation $t\mapsto t+1$, so it
   descends to the quotient $X=\overline D^2\times\mathbb R/\mathbb Z$;
4. the holonomy group of the boundary leaf is infinite: the holonomy of the
   loop in the $S^1$-factor through a boundary point is represented by the germ
   of the contraction $r\mapsto r'$ determined by $u(r')=u(r)+1$, a
   non-identity germ of a one-sided interval; consequently the boundary leaf is
   compact but has infinite holonomy and is not stable
   ([[def-stable-leaf-of-a-foliation]]).

## Facts & Assumptions

**Given:** The solid torus $X=\overline D^2\times S^1$, the function $u(r)=\exp(1/(1-r^2))$ and the submersion $f=u(r)-t$ on the open solid cylinder.

[F1] Let $F:M\to N$ be a smooth submersion. Then the kernel distribution $\ker dF$ is integrable, and its maximal connected integral manifolds are the connected components of the level sets of $F$ ([[cor-kernel-of-a-constant-rank-submersion-is-integrable]]).

[F2] On a manifold, regular foliations and integrable distributions determine each other: an integrable distribution defines a regular foliation atlas whose leaves are its maximal integral manifolds ([[thm-regular-foliations-and-integrable-distributions-correspond]]).

[F3] A regular foliation of a manifold with boundary is tangent to the boundary when its atlas is compatible with the model decomposition of the half-space and the boundary is a union of leaves; near a boundary point the leaves are intersections of the model plaques with the half-space ([[def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary]]).

[F4] Assume $\mathrm{AC}_\omega$. A free properly discontinuous action by diffeomorphisms preserving a regular foliation descends the foliation to the quotient, whose leaves are the images of the leaves, and the quotient carries the quotient smooth structure ([[prop-quotient-foliation-under-a-free-proper-foliated-action]]).

[F5] The closed unit disk is $\overline D^2=\{x^2+y^2\le1\}$ with boundary the unit circle; it is a smooth surface with boundary, and its interior is diffeomorphic to $\mathbb R^2$ ([[def-euclidean-spheres-and-closed-balls]]).

[F6] The two-dimensional torus is $T^2=(\mathbb R/\mathbb Z)\times(\mathbb R/\mathbb Z)$ with the product topology; the boundary of the solid torus is $S^1\times S^1=T^2$ ([[def-two-dimensional-torus]]).

[F7] A diffeomorphism is a bijective smooth map with smooth inverse; the exponential function is smooth and strictly increasing on $\mathbb R$, and $u(r)=\exp(1/(1-r^2))$ is smooth in $r^2$, strictly increasing on $[0,1)$ with image $[e,\infty)$ and tends to $+\infty$ as $r\to1^-$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F8] A leaf is stable when every open neighbourhood of it contains a saturated neighbourhood of it, that is, an open neighbourhood that is a union of leaves ([[def-stable-leaf-of-a-foliation]]).

[F9] A nowhere-zero smooth one-form whose wedge with its exterior derivative is zero has integrable kernel, and involutive distributions admit foliation charts ([[cor-codimension-one-frobenius-criterion]], [[thm-frobenius-local-coordinate-theorem]]).

## Proof

**Proof technique:** direct.

1.1 (The submersion and its level sets.) On the open solid cylinder $\operatorname{Int}\overline D^2\times\mathbb R$ the differential of $f(x,y,t)=u(r)-t$ has $\partial_t f=-1$, so $f$ is a submersion [F7]. By [F1] its kernel distribution is integrable and the maximal integral manifolds are the connected level sets, which therefore define a regular codimension-one foliation [F2]. For a fixed level $c$, the level set is the graph $\{(x,y,u(r)-c):(x,y)\in\operatorname{Int}\overline D^2\}$ of a smooth function over the disk interior, hence is diffeomorphic to $\operatorname{Int}\overline D^2\cong\mathbb R^2$; so all leaves are planes [F5, F7]. [F1, F2, F5, F7]

1.2 (Accumulation after the circle quotient.) Translation $t\mapsto t+1$ sends the level $c$ to the level $c-1$. The image of a level graph in $\operatorname{Int}\overline D^2\times(\mathbb R/\mathbb Z)$ is embedded intrinsically as a plane: its disk projection is injective and its chartwise inverse is smooth. At any boundary point with meridional angle $\theta_0$ and longitude $t_0\bmod1$, choose large integers $k$ and the unique radii $r_k$ satisfying $u(r_k)=c+t_0+k$. Since $u$ is increasing with image $[e,\infty)$ and diverges at one, $r_k\to1$; the points $(r_k,\theta_0,u(r_k)-c\bmod1)$ on the quotient leaf tend to that boundary point. Thus every interior quotient leaf accumulates on the entire boundary torus. This conclusion is about the circle quotient: a graph in the unquotiented cylinder has $t\to+\infty$ as $r\to1$ and does not accumulate at a finite boundary-cylinder point. [F5, F7]

1.3 (Holonomy of the boundary leaf and non-stability.) Parametrize a one-sided radial transversal near a boundary point by $r<1$; following the loop of the $S^1$-factor once returns to the same transversal at the parameter $r'$ determined by $u(r')=u(r)+1$, which exists and is unique because $u$ is strictly increasing with image $[e,\infty)$ and satisfies $r'>r$; as $r\to1^-$ we have $r'\to1^-$ [F7]. The transport germ is therefore the non-identity one-sided contraction $r\mapsto r'(r)$; its iterates $r\mapsto r_n$ with $u(r_n)=u(r)+n$ are again non-identity near the boundary, so the holonomy group of the boundary leaf is infinite. If the boundary leaf were stable, then the open neighbourhood $W=\{r>1/2\}$ of the boundary leaf would contain a saturated neighbourhood $U$ of it [F8]; but $U$ is open and contains the boundary leaf, hence contains a point $p$ with $r(p)$ close to $1$, and being saturated $U$ contains the whole leaf through $p$, which is a plane meeting the circle $r=1/2$ and so is not contained in $W$. This contradiction shows the compact boundary leaf with infinite holonomy is not stable, while the interior leaves are planes accumulating on it. [F5, F7, F8]

2.1 (Smooth boundary tangency and quotient.) Near $r=1$ set $v(r):=1/u'(r)=(1-r^2)^2\exp(-1/(1-r^2))/(2r)$. This function extends smoothly by zero at and beyond $r=1$, with every derivative zero there: each differentiated term is a polynomial in $(1-r^2)^{-1}$ times the exponential and a smooth factor near one, and the exponential decays faster than every power. The form $\alpha=dr-v(r)\,dt$ is nowhere zero, satisfies $\alpha\wedge d\alpha=0$, and has the same kernel as $df=u'(r)dr-dt$ in the interior collar. Its zero extension gives a regular integrable distribution on a collar crossing the boundary by F9. The boundary $r=1$ is an integral hypersurface; a Frobenius chart centered there makes it a central plaque, so restricting that chart to the half-collar gives genuine boundary-tangent half-space foliation charts. These agree with the interior level-set foliation and make the connected boundary cylinder one leaf. Translation in $t$ preserves $\alpha$ and the interior foliation; it is free and properly discontinuous. The quotient therefore has this regular boundary-tangent foliation on the solid torus, with boundary leaf $T^2$ and accumulation as proved in step 1.2 [F3, F4]. The smooth nonzero form $dt-du$ in the disk interior can also be scaled by a positive function to equal $v\,dt-dr$ in the collar, providing a coorientation. [F1, F2, F3, F4, F5, F6, F9]

3.1 The boundary $\partial X\cong T^2$ is a compact leaf, every other leaf is a plane accumulating on it, the foliation descends to the solid torus, and the boundary leaf has infinite holonomy and is not stable, as claimed. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
