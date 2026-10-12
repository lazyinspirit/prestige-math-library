---
id: ex-constructible-six-operations-on-a-point-and-an-open-closed-line
kind: example
title: "Point operations and the open closed constructible line"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       lem-field-module-sheaves-have-injective-derived-models,
       thm-extension-by-zero-adjunction-exactness,
       lem-extension-by-zero-short-exact-sequence,
       lem-sheaf-supported-on-a-closed-subset-is-a-pushforward,
       thm-the-derived-category-inherits-a-triangulated-structure,
       def-mapping-cone-of-a-chain-map, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: [def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces,
               lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "1(d) and (g), 9.2 (localization by extension by zero, constructible categories)"
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category D(X) and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "1.4.4-1.4.5 (proper f_! = f_* and the exact triangle of an open subset)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $k$ be a field.
(1) The constructible category of a point is the bounded derived category of
finite-dimensional $k$-vector spaces,
$D_c^b(\operatorname{pt};k)\simeq
D^b(k\text{-}\mathbf{Vect}^{\mathrm{fd}})$
([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]). For
the identity map of the point, all four pullback/pushforward operations
$f^*,f_*,f_!,f^!$ are the identity functors of that category, the tensor
product and internal Hom are the usual finite cochain constructions, and the
dualizing object is $k$ concentrated in degree $0$
([[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]],
[[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]]).
(2) On the complex line with the open inclusion
$j:\mathbb C^*\hookrightarrow\mathbb C$ and the closed inclusion
$i:\{0\}\hookrightarrow\mathbb C$, there is a $k$-linear short exact sequence of
sheaves
$$0\to j_!k_{\mathbb C^*}\to k_{\mathbb C}\to i_*k\to0,$$
and its associated exact triangle is the ordinary localization triangle of the
constructible derived category.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, the point $\operatorname{pt}$ with its unique stratification, and the complex line with $j:\mathbb C^*\hookrightarrow\mathbb C$ and $i:\{0\}\hookrightarrow\mathbb C$. The point-operation clauses rest on the two declared forward references of the frontmatter, which are later items of this run.

[F1] $D_c^b(X;k)$ is the full subcategory of $D^b(\operatorname{Sh}_k(X))$ of complexes with bounded, algebraically constructible cohomology, constructibility being local constancy of finite rank on the strata of a witnessing finite smooth algebraic frontier stratification ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]).

[F2] Under AC the $k$-sheaves carry functorial injective resolutions, and with the dependent choice supplied by AC the bounded-below injective complexes model the bounded derived category, so Hom groups are computed by these replacements ([[lem-field-module-sheaves-have-injective-derived-models]]).

[F3] For an open inclusion $j:U\hookrightarrow X$ with closed complement $Z$ and inclusion $i:Z\hookrightarrow X$, every sheaf of abelian groups $\mathcal F$ on $X$ fits into a short exact sequence $0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0$ ([[lem-extension-by-zero-short-exact-sequence]]).

[F4] A sheaf of abelian groups on $X$ whose stalks vanish off a closed subset $Z$ is canonically the pushforward of its restriction to $Z$ ([[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]]).

[F5] Extension by zero is left adjoint to restriction and is exact on sheaves of abelian groups ([[thm-extension-by-zero-adjunction-exactness]]).

[F6] The mapping cone of a chain map $f:C_\bullet\to D_\bullet$ has degree-$n$ term $\operatorname{Cone}(f)_n=D_n\oplus C_{n-1}$ with differential $d_n(y,x)=(d_n^D(y)+f_{n-1}(x),-d_{n-1}^C(x))$ ([[def-mapping-cone-of-a-chain-map]]).

[F7] The derived category is triangulated with cone triangles, and every distinguished triangle gives a long exact cohomology sequence; rotating a triangle gives a distinguished triangle ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[A1] The axiom of choice is used through the injective models of [F2] and in the degreewise splitting of a bounded complex of possibly infinite-dimensional vector spaces in step 1.1; the line computation itself is finite and explicit ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 A sheaf on the one-point space is its vector space of global sections, so a bounded complex of $k$-sheaves on the point is a bounded complex of $k$-vector spaces, and the unique finite smooth stratification of the point makes constructibility with respect to it exactly the condition that every cohomology space be finite-dimensional by [F1]. A bounded complex whose cohomology is finite-dimensional is isomorphic in the derived category to a bounded complex of finite-dimensional vector spaces: truncate to the finite interval between the lowest and highest degrees in which cohomology is nonzero, and split the resulting bounded complex into the direct sum of its cohomology spaces placed in their degrees, using that every short exact sequence of vector spaces splits. Both sides are therefore equivalent to the bounded derived category of finite-dimensional vector spaces, with morphisms computed by the injective models of [F2]. [F1, F2]

2.1 The identity map of the point has identity inverse and direct images, so $f^*=f_*=\operatorname{id}$ on $D_c^b(\operatorname{pt};k)$, and it is proper with every fibre a single point, so $f_!=f_*=\operatorname{id}$; dually $f^!$, being right adjoint to $f_!$, is also the identity of that category. Tensor and internal Hom are the signed bounded tensor and Hom complexes of finite-dimensional complexes, and the dualizing object of the zero-dimensional smooth point is $k$ concentrated in degree $0$. These are the point-operation clauses stated in the example; their exact interfaces, adjunctions and duality statements are those of the declared forward references, closed later in this run, and the obligation to reconcile them with the completed later items is carried openly. [F1, F2, A1, step 1.1]

2.2 Apply [F3] to the constant sheaf $\mathcal F=k_{\mathbb C}$ on $X=\mathbb C$, with $U=\mathbb C^*$ and $Z=\{0\}$: the restriction $k_{\mathbb C}|_{\mathbb C^*}$ is the constant sheaf $k_{\mathbb C^*}$, the restriction to the closed point is $k$, and the sequence reads $0\to j_!k_{\mathbb C^*}\to k_{\mathbb C}\to i_*k\to0$, the terms being computed by [F5] for the extension by zero. Stalkwise the middle sheaf is exact: at $x\neq0$ the stalk of $j_!k_{\mathbb C^*}$ is $k$ and the stalk of $i_*k$ is $0$, while at $0$ the first stalk is $0$ and the last is $k$; the quotient of $k_{\mathbb C}$ by $j_!k_{\mathbb C^*}$ has no stalks off $\{0\}$, and by [F4] it is canonically the pushforward $i_*k$ of its restriction to the closed point. All maps are $k$-linear, since they are obtained from the canonical adjunction units of [F5] applied to $k$-sheaves. [F3, F4, F5, step 1.1]

3.1 View $k_{\mathbb C}\to i_*k$ as a chain map of complexes concentrated in degree $0$, and let $C$ be its mapping cone with the convention of [F6], so $C^{-1}=k_{\mathbb C}$, $C^0=i_*k$ and the differential $C^{-1}\to C^0$ is the map of step 2.2. Its cohomology is $H^{-1}(C)=\ker(k_{\mathbb C}\to i_*k)=j_!k_{\mathbb C^*}$ by the exactness of step 2.1 and $H^0(C)=\operatorname{coker}(k_{\mathbb C}\to i_*k)=0$, so $C$ is quasi-isomorphic to $j_!k_{\mathbb C^*}[1]$, since the two complexes have the same single nonzero cohomology sheaf in degree $-1$. By the rotation property of cone triangles in [F7], the triangle $k_{\mathbb C}\to i_*k\to C\to k_{\mathbb C}[1]$ is isomorphic to the distinguished triangle $j_!k_{\mathbb C^*}\to k_{\mathbb C}\to i_*k\to j_!k_{\mathbb C^*}[1]$, the ordinary localization triangle of the open subset $\mathbb C^*$; all three sheaves are constructible for the two-stratum stratification $\{\mathbb C^*,\{0\}\}$ of the line, so the triangle lies in $D_c^b(\mathbb C;k)$ by [F1]. [F1, F6, F7, step 2.2] ∎

## Remarks

- The line computation is complete locally: the short exact sequence is the published extension-by-zero sequence, and the cone computation uses only the published mapping-cone convention and the triangulated structure. Only the point-operation clause rests on the two declared forward references to the later six-operations pair, whose interfaces must be confronted with this example when that pair is authored.

- The example deliberately makes no claim that the four operations of the later formalism exist for arbitrary maps here; it computes only the identity map of the point and the two inclusions of the line, where the triangle is the localization triangle.
