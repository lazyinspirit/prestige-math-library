---
id: lem-author-1437578267d2-graph-boundary
kind: lemma
title: Principal divisors are endpoint boundaries
status: published
domain: mathematics
deps:
  - lem-author-1437578267d2-supported-degrees
  - lem-author-1437578267d2-length-orders
  - lem-author-1437578267d2-boundary-norm
  - math:def-axiom-of-choice
  - math:def-scheme-over-base
  - math:def-integral-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-dimension-noetherian-topological-space
  - math:def-algebraically-closed-field
  - math:def-closed-immersion-schemes
  - math:def-affine-open-subscheme
  - math:thm-fibre-products-of-schemes-exist
  - math:def-free-abelian-group
  - math:def-composition-series-and-length-of-a-module
  - math:def-quotient-module
  - math:def-residue-field-scheme-point
  - math:lem-integral-finite-type-scheme-function-field
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:lem-spectrum-localization-open-immersion
  - math:thm-sections-basic-open-affine-scheme
  - math:thm-affine-scheme-ring-anti-equivalence
  - math:def-graph-morphism-over-base
  - math:lem-graph-closed-separated-target
  - math:lem-affine-morphism-separated
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:lem-curve-closed-subsets-finite
  - thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input
  - thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
  - math:def-field-norm-and-trace
dependency_roles:
  lem-author-1437578267d2-supported-degrees: mathematical-premise
  lem-author-1437578267d2-length-orders: mathematical-premise
  lem-author-1437578267d2-boundary-norm: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
  math:def-composition-series-and-length-of-a-module: mathematical-premise
  math:def-quotient-module: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:thm-sections-basic-open-affine-scheme: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
  math:def-graph-morphism-over-base: mathematical-premise
  math:lem-graph-closed-separated-target: mathematical-premise
  math:lem-affine-morphism-separated: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:lem-curve-closed-subsets-finite: mathematical-premise
  thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input: mathematical-premise
  thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input: mathematical-premise
  math:def-field-norm-and-trace: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 11
---

## Statement
Assume AC. Let $T$ be any integral finite-type curve over an algebraically closed field $k$; all products are over $k$. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$, and let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times\mathbb A^1_s$ contained in neither endpoint $s=0,1$. Such a $W$ is called admissible. Define $b[W]=[W_1]-[W_0]$, extended linearly, with
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}(\mathcal O_{W,w}/(s-\epsilon))[p(w)],\qquad \epsilon=0,1,$$
where $p:T\times\mathbb A^1\to T$ is projection. The endpoint intersections are finite and have the indicated finite lengths; projection on each endpoint identifies its residue field with that of the corresponding point of $T$. These definitions require no embedding of $T$; they agree with the supported-cycle definitions whenever $T$ is embedded as a closed curve in a smooth finite-type $k$-scheme of pure dimension three. For these groups and this boundary,
$$bB_1(T)=\operatorname{im}(\operatorname{div}_T:k(T)^\times\to Z_0(T)).$$
For $f\ne1$ in $k(T)^\times$, the reduced closure in $T\times\mathbb A^1_s$ of the rational graph $s=1/(1-f)$ is an admissible generator whose boundary is $\operatorname{div}_T(f)$; for $f=1$ the zero chain suffices.

## Statement references

[[lem-author-1437578267d2-supported-degrees]]

[[lem-author-1437578267d2-length-orders]]

[[lem-author-1437578267d2-boundary-norm]]

[[math:def-axiom-of-choice]]

[[math:def-scheme-over-base]]

[[math:def-integral-scheme]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-dimension-noetherian-topological-space]]

[[math:def-algebraically-closed-field]]

[[math:def-closed-immersion-schemes]]

[[math:def-affine-open-subscheme]]

[[math:thm-fibre-products-of-schemes-exist]]

[[math:def-free-abelian-group]]

[[math:def-composition-series-and-length-of-a-module]]

[[math:def-quotient-module]]

[[math:def-residue-field-scheme-point]]

[[math:lem-integral-finite-type-scheme-function-field]]

[[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]]

[[math:lem-spectrum-localization-open-immersion]]

[[math:thm-sections-basic-open-affine-scheme]]

[[math:thm-affine-scheme-ring-anti-equivalence]]

[[math:def-graph-morphism-over-base]]

[[math:lem-graph-closed-separated-target]]

[[math:lem-affine-morphism-separated]]

[[math:lem-closed-immersion-affine-quotient-and-base-change]]

[[math:lem-curve-closed-subsets-finite]]

[[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input]]

[[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input]]

[[math:def-field-norm-and-trace]]

## Facts & Assumptions
**Given:** AC, $k,T$ and $f\in k(T)^\times$ as stated.

**Goal:** Realize each principal divisor by an endpoint boundary and prove equality of subgroups.

[F1] On an integral finite-type curve, length orders are well-defined and have finite support. For $R=\mathcal O_{T,x}$ at a closed point, $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R$, and $\operatorname{div}_T(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism. A quotient by a nonzero element has finite length. [[lem-author-1437578267d2-length-orders]]

[F2] For exactly the intrinsic endpoint groups in the Statement, the boundary is well-defined for every integral finite-type curve over an algebraically closed field; every boundary is principal. For a dominant admissible generator, it is the divisor of the norm of $(s-1)/s$ from its function field to $k(T)$. No normality or separability is required. Dominant means having dense image. [[lem-author-1437578267d2-boundary-norm]]

[F3] Under the embedding hypotheses in the Statement, the supported-cycle groups in degrees zero and one and their boundary are exactly these intrinsic groups and quotient-length formula. [[lem-author-1437578267d2-supported-degrees]]

[F4] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$. Integral means nonempty, reduced and irreducible, equivalently with domain rings on nonempty affine opens. Finite type means locally finite type and quasi-compact. Curve dimension is chain dimension, the supremum of lengths of strict chains of nonempty irreducible closed subsets. Algebraically closed means every nonconstant polynomial over $k$ has a root in $k$. Closed subschemes are closed immersions, with closed underlying image and surjective structure-sheaf map. Open subschemes carry the restricted structure sheaf. [[math:def-scheme-over-base]], [[math:def-integral-scheme]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-dimension-noetherian-topological-space]], [[math:def-algebraically-closed-field]], [[math:def-closed-immersion-schemes]], [[math:def-affine-open-subscheme]]

[F5] The free abelian groups consist of finite formal integer combinations of their generators, and a map on generators extends uniquely to a homomorphism. The notation $\ell_R(M)$ denotes composition-series length, with its independence and finiteness here supplied by F1; quotients have their induced module action. A point residue field is $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$. [[math:def-free-abelian-group]], [[math:def-composition-series-and-length-of-a-module]], [[math:def-quotient-module]], [[math:def-residue-field-scheme-point]]

[F6] For an integral finite-type scheme, the function field is its generic stalk, canonically the fraction field of every nonempty affine chart; regular sections inject into it. An affine finite-type $k$-scheme has a finitely generated coordinate algebra. The distinguished open $D(c)$ of $\operatorname{Spec}A$ is $\operatorname{Spec}A_c$ and has section ring $A_c$. Morphisms of affine schemes correspond contravariantly to ring maps. [[math:lem-integral-finite-type-scheme-function-field]], [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]], [[math:lem-spectrum-localization-open-immersion]], [[math:thm-sections-basic-open-affine-scheme]], [[math:thm-affine-scheme-ring-anti-equivalence]]

[F7] Scheme fibre products exist with affine tensor-product charts. Relative affine space has polynomial charts; thus $T\times_k\mathbb A^1_s$ has charts $\operatorname{Spec}A[s]$, and its endpoints have rings $A[s]/(s-\epsilon)=A$. For a $k$-morphism $h:O\to\mathbb A^1_k$, its graph is $(\operatorname{id}_O,h)$ with first projection the identity. The graph is a closed immersion because $\mathbb A^1_k\to\operatorname{Spec}k$ is affine, hence separated; the source $O$ need not be separated. Closed immersions have affine quotient charts and remain closed immersions under base change. [[math:thm-fibre-products-of-schemes-exist]], [[math:def-scheme-over-base]], [[math:def-graph-morphism-over-base]], [[math:lem-affine-morphism-separated]], [[math:lem-graph-closed-separated-target]], [[math:lem-closed-immersion-affine-quotient-and-base-change]]

[F8] Every closed subset of a scheme has a unique reduced induced closed subscheme. For integral finite-type $k$-schemes, a nonempty open has the same dimension as the whole scheme. [[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input]], [[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input]]

[F9] An integral finite-type curve is Noetherian, and every proper closed subset is a finite set of closed points. [[math:lem-curve-closed-subsets-finite]] The field norm is the determinant of multiplication on the finite field extension; in the identity extension its one-by-one matrix is $(f)$, so the norm of $f$ is $f$. [[math:def-field-norm-and-trace]]

[A1] AC is retained through F1–F3, the affine finite-generation and closed-immersion inputs, and curve finiteness in F9. The graph and coefficient constructions make no additional infinite choices. No separatedness, smoothness or normality of $T$ is assumed. [[math:def-axiom-of-choice]]

## Proof
1.1 By F4 and quasi-compactness, $T$ has a finite cover by finite-type affine charts. Their polynomial charts in F7 and the affine quotient description show that every closed subscheme of $T\times\mathbb A^1$ has a finite cover by spectra of finitely generated $k$-algebras, hence is finite type. For an admissible generator $V$, each endpoint is a proper closed subset, finite and zero-dimensional by F9. At each intersection point $s-\epsilon$ is nonzero in the local domain, so F1 gives finite quotient length. Base change in F7 makes the intersection a closed subscheme of the ambient endpoint $T$, so its image is closed and the quotient description and F5 identify the residue fields. F5 extends the formula linearly; F3 supplies the embedded comparison. This also agrees with the intrinsic well-defined boundary of F2. If $f=1$, F1 gives zero divisor, realized by the zero chain. If $f\ne1$, put $h=1/(1-f)$, which is neither zero nor one. Choose one of these nonempty finite-type affine charts $\operatorname{Spec}A\subset T$ and write $h=a/c$ with $a,c\in A$ and $c\ne0$ by F6. The nonempty affine open $O=D(c)$ contains the generic point and is finite type, since $A_c$ is generated over $k$ by the finite generators of $A$ and $1/c$. Sending $s$ to $a/c$ defines $h:O\to\mathbb A^1_k$ by F6. Its graph $G$ is a closed subscheme of $O\times\mathbb A^1$ by F7 and is isomorphic to $O$ by its first projection (on rings, evaluation gives $A_c[s]/(s-a/c)=A_c$). Thus $G$ is integral with function field $k(T)$. [given, A1, F1, F2, F3, F4, F5, F6, F7, F9, construct, algebra]

2.1 Let $W$ be the reduced induced closed subscheme on the topological closure of $G$ in $T\times\mathbb A^1$, using F8. That closure is irreducible: any two nonempty relative opens meet the dense irreducible subset $G$ in nonempty opens, which intersect. Thus $W$ is integral by F4. Its restriction to $O\times\mathbb A^1$ is the reduced closed subscheme supported on $G$, hence is $G$ by uniqueness in F8. The finite-type argument of step 1.1 applies to $W$, and F8 gives $\dim W=\dim G=\dim O=\dim T=1$. The generic stalk is unchanged on the nonempty open $G$, so F6 identifies $k(W)=k(G)=k(T)$ compatibly with projection. In particular $W\to T$ is dominant: its image contains the dense open $O$. This construction is independent of the chosen domain for $h$, since any two domains have a nonempty common open, their graphs agree there by their common affine ring map, and that common graph is dense in each integral graph; their topological closures and then reduced induced structures coincide. In $k(W)=k(T)$ the coordinate $s$ is $h\ne0,1$, so neither endpoint contains $W$; step 1.1 makes it admissible with its stated endpoint multiplicities. Finally $(s-1)/s=(h-1)/h=f$, and F9 makes the identity-extension norm equal to $f$. F2 therefore gives $b[W]=\operatorname{div}_T(f)$. This realizes every principal divisor, including $f=1$ by step 1.1; F2 gives the reverse inclusion. The claimed equality of subgroups follows without changing any singular-point length convention. [A1, F1, F2, F4, F6, F7, F8, F9, step 1.1, construct, algebra] ∎
