---
id: ex-constructible-six-operations-on-a-point-and-an-open-closed-line
kind: example
title: "Point operations and the open closed constructible line"
status: published
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

**Given:** The Axiom of Choice, a field $k$, the point $\operatorname{pt}$ with its unique stratification, and the complex line with $j:\mathbb C^*\hookrightarrow\mathbb C$ and $i:\{0\}\hookrightarrow\mathbb C$. The point-operation clauses use the actual ordinary-operations lemma and the exceptional-candidate Definition named by the two later-page forward references.

[F1] $D_c^b(X;k)$ is the full subcategory of $D^b(\operatorname{Sh}_k(X))$ of complexes with bounded, algebraically constructible cohomology, constructibility being local constancy of finite rank on the strata of a witnessing finite smooth algebraic frontier stratification ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]).

[F2] Under AC the $k$-sheaves carry functorial injective resolutions, and with the dependent choice supplied by AC the bounded-below injective complexes with bounded cohomology model the bounded derived category, so Hom groups are computed by these replacements ([[lem-field-module-sheaves-have-injective-derived-models]]).

[F3] For an open inclusion $j:U\hookrightarrow X$ with closed complement $Z$ and inclusion $i:Z\hookrightarrow X$, every sheaf of abelian groups $\mathcal F$ on $X$ fits into a short exact sequence $0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0$ ([[lem-extension-by-zero-short-exact-sequence]]).

[F4] A sheaf of abelian groups on $X$ whose stalks vanish off a closed subset $Z$ is canonically the pushforward of its restriction to $Z$ ([[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]]).

[F5] Extension by zero is left adjoint to restriction and is exact on sheaves of abelian groups ([[thm-extension-by-zero-adjunction-exactness]]).

[F6] The mapping cone of a chain map $f:C_\bullet\to D_\bullet$ has degree-$n$ term $\operatorname{Cone}(f)_n=D_n\oplus C_{n-1}$ with differential $d_n(y,x)=(d_n^D(y)+f_{n-1}(x),-d_{n-1}^C(x))$ ([[def-mapping-cone-of-a-chain-map]]).

[F7] The derived category is triangulated with cone triangles, and every distinguished triangle gives a long exact cohomology sequence; rotating a triangle gives a distinguished triangle ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[A1] The axiom of choice is used through the injective models of [F2] and in the degreewise splitting of a bounded complex of possibly infinite-dimensional vector spaces in step 1.1; the line computation itself is finite and explicit ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 A sheaf on the point is its vector space of sections, and the point's unique stratification makes constructibility exactly finite-dimensional cohomology by [F1]. For a bounded complex $V$, choose complements $Z^n(V)=B^n(V)\oplus H^n$ and $V^n=Z^n(V)\oplus L^n$ using AC. The differential identifies $L^n$ with $B^{n+1}(V)$, so $V$ is the direct sum of the zero-differential complex $(H^n)$ and a contractible complex of pairs $L^n\xrightarrow{\sim}B^{n+1}(V)$. If all cohomology is finite-dimensional, $(H^n)$ is a bounded finite-dimensional representative, including the acyclic case where it is zero. Every vector space is injective under AC, because extending a basis splits every vector-space inclusion and extends every linear map from its subspace. Bounded complexes of vector spaces thus compute derived morphisms as homotopy classes by [F2], in both the finite-dimensional and full vector-space categories. For two finite-dimensional complexes these chain maps and homotopies are identical in both categories, proving full faithfulness as well as essential surjectivity. Hence $D_c^b(\operatorname{pt};k)\simeq D^b(k\text{-}\mathbf{Vect}^{\mathrm{fd}})$. [F1, F2, A1, algebra]

2.1 On the point inverse and direct image of the identity are exact identity functors, and every section has compact support, so the proper-support functor is also the exact identity. Their derived functors are therefore identities. In the exceptional candidate of [[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]], the fibre opens are only the point and the empty set; compact sections are exact, giving dimension bound $d=0$, and the constant sheaf $k$ is itself $c$-soft, so take $K=k[0]$. For a bounded finite-dimensional complex $B$ every term is injective over $k$, and the candidate has sections $\operatorname{Hom}_k^\bullet(k,B)=B$ on the point and zero on the empty set. Thus $f^!$ is the identity with its ordinary evaluation adjunction, and $\omega_{\operatorname{pt}}=a_{\operatorname{pt}}^!k=k[0]$. The ordinary-operations lemma [[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]] identifies tensor and internal Hom with the finite signed complexes: $(A\otimes B)^n=\bigoplus_{p+q=n}A^p\otimes_kB^q$, with $d(a\otimes b)=d_Aa\otimes b+(-1)^pa\otimes d_Bb$, and $\mathcal Hom^n(A,B)=\prod_p\operatorname{Hom}_k(A^p,B^{p+n})$, with $d\varphi=d_B\varphi-(-1)^n\varphi d_A$. Their terms and amplitudes are finite, so they belong to the category identified in step 1.1. Here $f_*$ and $f_!$ in the Example denote their derived operations, which coincide with their exact underived functors in this case. [F1, F2, A1, step 1.1]

2.2 Apply [F3] to the constant sheaf $\mathcal F=k_{\mathbb C}$ on $X=\mathbb C$, with $U=\mathbb C^*$ and $Z=\{0\}$: the restriction $k_{\mathbb C}|_{\mathbb C^*}$ is the constant sheaf $k_{\mathbb C^*}$, the restriction to the closed point is $k$, and the sequence reads $0\to j_!k_{\mathbb C^*}\to k_{\mathbb C}\to i_*k\to0$, the terms being computed by [F5] for the extension by zero. Stalkwise the middle sheaf is exact: at $x\neq0$ the stalk of $j_!k_{\mathbb C^*}$ is $k$ and the stalk of $i_*k$ is $0$, while at $0$ the first stalk is $0$ and the last is $k$; the quotient of $k_{\mathbb C}$ by $j_!k_{\mathbb C^*}$ has no stalks off $\{0\}$, and by [F4] it is canonically the pushforward $i_*k$ of its restriction to the closed point. All maps are $k$-linear, since they are obtained from the canonical adjunction units of [F5] applied to $k$-sheaves. [F3, F4, F5, step 1.1]

3.1 In cochain grading, the cone $C$ of the map $g:k_{\mathbb C}\to i_*k$ has $C^{-1}=k_{\mathbb C}$, $C^0=i_*k$ and differential $g$, by reindexing [F6]. Put $A=j_!k_{\mathbb C^*}$. The chain map $u:A[1]\to C$ given by the kernel inclusion in degree $-1$ is a quasi-isomorphism: step 2.2 gives $H^{-1}(C)=A$, $H^0(C)=0$, and $u$ induces the identity on the only possible nonzero cohomology. The cone triangle $k_{\mathbb C}\to i_*k\to C\to k_{\mathbb C}[1]$ is distinguished by [F7]. Its signed inverse rotation and the quasi-isomorphism $-u:A[1]\to C$ give the distinguished triangle $A\to k_{\mathbb C}\to i_*k\to A[1]$ with the kernel inclusion as first arrow: the inverse rotation negates the projection $C[-1]\to k_{\mathbb C}$, cancelling the sign of $-u$. All three sheaves restrict to constant finite-rank sheaves (including rank zero) on each stratum of $\{\mathbb C^*,\{0\}\}$, so this localization triangle lies in $D_c^b(\mathbb C;k)$. [F1, F6, F7, step 2.2, construct] ∎

## Remarks

- The point computation specializes the actual later-page operation interfaces to $d=0$ and $K=k[0]$. The line computation uses the published extension-by-zero sequence, mapping-cone convention and triangulated structure.

- The example deliberately makes no claim that the four operations of the later formalism exist for arbitrary maps here; it computes only the identity map of the point and the two inclusions of the line, where the triangle is the localization triangle.
