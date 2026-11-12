---
id: lem-author-16f30f6b95cb-curve-supported-bloch-bottom
kind: lemma
title: Bottom supported Bloch groups on a codimension two curve
status: published
domain: mathematics
deps:
  - def-supported-higher-cycle-complex
  - math:thm-dimension-formula-for-affine-domains
  - math:def-axiom-of-choice
  - def-bloch-higher-cycle-complex
  - math:def-smooth-morphism-schemes
  - math:def-integral-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-closed-immersion-schemes
  - math:def-generic-point-irreducible-closed-subset
  - math:def-dimension-noetherian-topological-space
  - math:thm-affine-domain-dimension-transcendence-degree
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:cor-transcendence-degree-tower-additivity
  - lem-author-89250b1d710c-face-coordinate-geometry
  - thm-author-89250b1d710c-smooth-local-geometry-input
  - thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
  - lem-author-75596422a482-open-restriction
  - math:thm-affine-closed-immersions-quotient-rings
  - math:cor-primes-of-a-prime-local-ring
  - thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input
  - math:def-field
  - math:def-scheme-over-base
  - math:def-open-immersion-schemes
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:def-field-of-fractions
  - math:def-algebraically-independent-finite-tuples-over-a-field
  - math:cor-affine-scheme-quasi-compact
dependency_roles:
  def-supported-higher-cycle-complex: mathematical-premise
  math:thm-dimension-formula-for-affine-domains: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-generic-point-irreducible-closed-subset: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:thm-affine-domain-dimension-transcendence-degree: mathematical-premise
  math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  math:cor-transcendence-degree-tower-additivity: mathematical-premise
  lem-author-89250b1d710c-face-coordinate-geometry: mathematical-premise
  thm-author-89250b1d710c-smooth-local-geometry-input: mathematical-premise
  thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input: mathematical-premise
  lem-author-75596422a482-open-restriction: mathematical-premise
  math:thm-affine-closed-immersions-quotient-rings: mathematical-premise
  math:cor-primes-of-a-prime-local-ring: mathematical-premise
  thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:def-field-of-fractions: mathematical-premise
  math:def-algebraically-independent-finite-tuples-over-a-field: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 9
---

## Statement
Assume AC. Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $C\subset U$ be an integral closed curve of codimension two. In the supported Bloch complexes, $z_C^j(U,n)=0$ for $j=0,1$ and every $n\geq0$. Moreover
$$H_0z_C^2(U,\bullet)=\mathbb Z[C],$$
with $[C]$ the positive generator represented by the integral reduced curve. Restriction to any open $V\subset U$ containing its generic point $\eta$ sends this generator to $[C\cap V]$ and is an isomorphism of these degree-zero groups. No smoothness or normality of $C$ is assumed.

## Facts & Assumptions

**Given:** AC, $U,C,k$, and $\eta$ as above. All products and open subschemes carry the $k$-scheme structures used in the supplied Bloch definition. A curve has dimension one, and pure dimension three means that every irreducible component has dimension three. The generic point $\eta$ has closure $|C|$. The notation $\mathbb Z[C]$ means the group of integral multiples of the single formal cycle $[C]$, not its image in an ambient Chow group.

**Goal:** Compute the two lower supported complexes and the bottom weight-two supported group, with its sign and its restriction to every generic neighbourhood.

[A1] AC is assumed for the supplied Bloch construction, smooth affine reduction, affine quasi-compactness, affine closed-immersion description and affine dimension formula used below. No smoothness, normality, or geometric integrality of $C$ is assumed. [[math:def-axiom-of-choice]]

[F1] The unnormalized Bloch definition supplies $\Delta^n$, admissibility on every coordinate face, the quotient-length face coefficients, the alternating differential, zero terms in negative degrees, and $H_0=\ker\partial_0/\operatorname{im}\partial_1$. The supported complex is its free subgroup on admissible integral cycles with support in $C\times\Delta^n$. These are the supplied conventions for scheme products, scheme-theoretic intersections, stalk codimension and module length. [[def-bloch-higher-cycle-complex]] [[def-supported-higher-cycle-complex]]

[F2] The ground field is a commutative field; a $k$-scheme is a scheme with a structure morphism to $\operatorname{Spec}k$. Smoothness and finite type refer to this morphism; finite type includes quasi-compactness. An open $V\subset U$ carries its restricted structure sheaf and open immersion into $U$. Integral means nonempty, reduced and irreducible, equivalently having domain rings on all nonempty affine opens. Closed subschemes are closed immersions. The generic point has dense closure, and dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. [[math:def-smooth-morphism-schemes]] [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:def-integral-scheme]] [[math:def-closed-immersion-schemes]] [[math:def-generic-point-irreducible-closed-subset]] [[math:def-dimension-noetherian-topological-space]] [[math:def-field]] [[math:def-scheme-over-base]] [[math:def-open-immersion-schemes]]

[F3] The smooth finite-type geometric reduction supplies Noetherianity, disjoint integral open-and-closed components, and an integral smooth affine cover. For integral finite-type schemes over a field, nonempty opens have the same dimension; the finite-type cycle geometry interface supplies this assertion without a separatedness hypothesis. Only these clauses of the two geometric suppliers are used. An affine chart is an open isomorphic to $\operatorname{Spec}R$ with its structure sheaf; affine schemes are quasi-compact under AC. A finite cover by affine charts of finite-type $k$-algebras therefore gives a finite-type $k$-scheme: the local condition is witnessed on those charts, and a finite union of quasi-compact opens is quasi-compact. [[thm-author-89250b1d710c-smooth-local-geometry-input]] [[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input]] [[math:cor-affine-scheme-quasi-compact]]

[F4] The simplex and its faces have affine product charts obtained by eliminating one barycentric coordinate: over $\operatorname{Spec}A$ the ring is $A[x_1,\ldots,x_n]$. Over a domain this is a domain. For a domain $R$, $\operatorname{Frac}(R)$ is its localization at the nonzero elements. Algebraic independence means that no nonzero polynomial over the base field evaluates to zero; transcendence degree counts a transcendence basis. The fraction field of $A[x_1,\ldots,x_n]$ is $\operatorname{Frac}(A)(x_1,\ldots,x_n)$: both fields consist of fractions of polynomials after clearing the finitely many coefficient denominators. The variables are algebraically independent over $\operatorname{Frac}(A)$ by coefficientwise equality of polynomials, and generate that rational-function field. Thus finite transcendence degrees increase by $n$, using tower additivity. [[lem-author-89250b1d710c-face-coordinate-geometry]] [[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]] [[math:cor-transcendence-degree-tower-additivity]] [[math:def-field-of-fractions]] [[math:def-algebraically-independent-finite-tuples-over-a-field]]

[F5] For a finite-type $k$-domain $R$, $\dim R=\operatorname{trdeg}_k\operatorname{Frac}(R)$. For each prime $\mathfrak p$, the affine dimension formula gives $\operatorname{ht}\mathfrak p=\dim R-\dim(R/\mathfrak p)$. The prime-localization bijection identifies this height with $\dim R_{\mathfrak p}$; the affine stalk is canonically $R_{\mathfrak p}$, so this is the stalk codimension in [F1]. A closed subscheme of $\operatorname{Spec}R$ is a quotient spectrum; its coordinate ring is finite type since the images of finitely many algebra generators still generate it. [[math:thm-affine-domain-dimension-transcendence-degree]] [[math:thm-dimension-formula-for-affine-domains]] [[math:cor-primes-of-a-prime-local-ring]] [[math:thm-affine-closed-immersions-quotient-rings]] [[math:thm-stalk-structure-sheaf-prime-localization]]

[F6] Restriction to any open in a smooth finite-type scheme defines a chain map on Bloch complexes, sends a nonempty integral generator to its open restriction, and preserves its face coefficients. The supplier also establishes that the open is smooth and finite type. Since a supported generator restricts into $(C\cap V)\times\Delta^n$, this map restricts to the supported subcomplexes. [[lem-author-75596422a482-open-restriction]]

[F7] A closed subset of a scheme has a unique reduced induced closed subscheme. Consequently two integral closed subschemes with the same underlying closed subset are equal. [[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input]]

## Proof

1.1 By [F3], $U$ has disjoint integral components of dimension three and a cover by integral smooth affine opens. Any nonempty such open in a component has dimension three by [F3]. Since $U$ is quasi-compact, take a finite such cover; the closed intersections with $C$ are quotient spectra by [F5], so $C$ is finite type. The nonempty charts in this cover of $C$ have dimension one by [F3]. For an integral finite-type affine chart $\operatorname{Spec}A$ of dimension $d$, [F4] and [F5] give $\dim A[x_1,\ldots,x_n]=d+n$. These formulas apply to the ambient component charts and to the charts of $C\times\Delta^n$. Each product of an integral component, or of $C$, with the simplex is integral: its affine charts are domains by [F4], and any two nonempty such charts meet, since their base opens in the integral scheme meet and the simplex has a $k$-point. The finite polynomial-chart covers also show that these products are finite type, by [F3]; the same quotient-chart argument applies to their closed subschemes. Thus each ambient component product has dimension $3+n$ and the support product has dimension $1+n$, using [F3] to pass between their nonempty opens and the whole integral schemes. At the generic point of any integral closed cycle $W$ in the support, choose an ambient affine chart. There its defining prime $\mathfrak p$ has quotient of dimension at most $1+n$, because its spectrum is a closed subspace of the support chart. By [F5] its stalk codimension is at least $(3+n)-(1+n)=2$. Hence there are no generators in codimensions zero or one, proving $z_C^j(U,n)=0$ for $j=0,1$ in all $n\geq0$. [A1, F1, F2, F3, F4, F5, given]

2.1 The same affine dimension calculation shows that a codimension-two integral cycle supported in $C$ has dimension one, and in $C\times\Delta^1$ it has dimension two. A proper irreducible closed subset of an integral finite-dimensional scheme has smaller dimension: append the whole space to any chain in that subset. Thus their supports must be all of $C$ and all of $C\times\Delta^1$, respectively; [F7] identifies their reduced scheme structures. The curve is admissible in degree zero, so $z_C^2(U,0)=\mathbb Z[C]$. The product $C\times\Delta^1=C\times\mathbb A^1$ is admissible: its only proper nonempty coordinate faces are the endpoints, and each intersects it in $C$, of codimension two in $U$. Write $t$ for the affine coordinate. On any nonempty affine chart $\operatorname{Spec}B$ of $C$, the local ring of this product at the generic point of the endpoint $t=a$, $a=0,1$, is $B[t]_{(t-a)}=\operatorname{Frac}(B)[t]_{(t-a)}$. Its quotient by $t-a$ is the residue field $\operatorname{Frac}(B)$. As a module over the local ring this is simple: any nonzero element generates it by multiplication by scalars from the residue field. Thus the quotient-length coefficient of each face is one. The alternating boundary is therefore $[C]-[C]=0$. As this product is the only degree-one generator, $\operatorname{im}\partial_1=0$; [F1] gives $H_0z_C^2(U,\bullet)=\mathbb Z[C]$ with the stated positive generator. For any $V$ containing $\eta$, [F6] gives the supported chain map and a smooth finite-type target. The open $C\cap V$ is nonempty and integral, and the ambient components meeting it still have dimension three by [F3]. The calculation just made applies to this pair as well. Restriction sends the single degree-zero generator to $[C\cap V]$ with coefficient one, so it induces the asserted isomorphism and preserves its positive sign. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1] ∎
