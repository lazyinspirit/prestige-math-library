---
id: thm-author-75596422a482-bloch-localization-input
kind: theorem
title: Higher-cycle localization including nonseparated schemes
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-75596422a482-open-restriction
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-open-immersion-schemes
  - math:def-separated-scheme-over-base
  - thm-author-89250b1d710c-smooth-local-geometry-input
  - thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
  - lem-author-89250b1d710c-face-coordinate-geometry
  - math:def-integral-scheme
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:lem-finite-type-local-on-source-and-target
  - math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex
  - math:thm-hilbert-basis-theorem
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-75596422a482-open-restriction: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-separated-scheme-over-base: mathematical-premise
  thm-author-89250b1d710c-smooth-local-geometry-input: mathematical-premise
  thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input: mathematical-premise
  lem-author-89250b1d710c-face-coordinate-geometry: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring: mathematical-premise
  math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex: mathematical-premise
  math:thm-hilbert-basis-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Marc Levine, Techniques of localization in the theory of algebraic cycles
      url: https://citeseerx.ist.psu.edu/document?doi=9622ccdf2df87d21c760a444b7b04cd40b1662b0&repid=rep1&type=pdf
      locator: "Primary 53-page preprint: §1.1 p. 1; §1.6–1.8 pp. 2–4; §2.2 p. 6;
        Theorem 6.12 and finite affine-cover reduction pp. 37–38; §7 pp. 43–44"
      statement: For a finite-type scheme X over a field k and open V, the raw
        simplicial restriction cokernel z_q(V,*)/im(z_q(X,*)) is acyclic. The
        general finite-type proof uses one simultaneous simplex-factor moving
        map/homotopy for a finite affine cover.
      hypotheses: Schemes essentially finite type in §2.2, without a separatedness
        convention. The actual application is finite type over a field. Section7
        explicitly takes a regular noetherian base of dimension at most one; a
        field is its zero-dimensional semilocal PID case. Infinite residue
        fields are used for the first moving statement; Theorem6.12 plus
        Lemma7.1 and finite-flat pull/push of coprime degrees handle finite
        fields. Smoothness and pure dimension are needed here only to rewrite
        the homological index q componentwise as dim(X_component)-r.
      reading_limits: "This repair reread the cached primary 53-page preprint, SHA256
        0b4192a0fc037cdd5f8c93f74472ce0924db43fb65d86668239e7d414b2f0504, pp.
        1–6 and 37–44 by text extraction: cycle conventions, scheme scope,
        finite-affine-cover reduction and the complete localization application.
        The introductory codimension subscript is corrected in the local
        application below. Deep constructions in §§3–5, the cited companion
        blow-up theorem and journal bytes were not reconstructed or read. No
        fresh successful retrieval of the Citeseer URL or visual inspection is
        claimed."
    - title: "The Stacks Project, Lemma 28.10.3: codimension and the generic local
        ring"
      url: https://stacks.math.columbia.edu/tag/02IZ
      locator: Lemma 28.10.3 (tag 02IZ), displayed identity and complete short proof
      statement: For a scheme Y and an irreducible closed subset D with generic point
        eta, chain codimension of D in Y equals dim O_{Y,eta}.
      hypotheses: Any scheme Y and irreducible closed subset D. Apply to integral
        finite-type simplex products and their integral closed cycle components;
        no separatedness is required.
      reading_limits: Read the live lemma and its complete displayed affine-reduction
        proof in this repair. The linked topological localization and
        prime-spectrum lemmas were imported, not reconstructed. Only the
        codimension identity is used.
dependency_level: 6
---

## Statement
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subseteq U$ open, and $r\geq0$ an integer. No separatedness of $U$ over $k$ is required. The cokernel complex of the unnormalized simplicial restriction $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$ is acyclic. Explicitly, its degree-$n$ group is $Q_n=z^r(V,n)/\operatorname{im}(j_n^*)$ with differential $[b]\mapsto[\partial b]$; acyclicity means that every element killed by this differential is a boundary, in every integer degree.

## Statement references

[[def-bloch-higher-cycle-complex]]

[[lem-author-75596422a482-open-restriction]]

[[math:def-axiom-of-choice]]

[[math:def-field]]

[[math:def-scheme-over-base]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-open-immersion-schemes]]

[[math:def-separated-scheme-over-base]]

[[thm-author-89250b1d710c-smooth-local-geometry-input]]

[[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input]]

[[lem-author-89250b1d710c-face-coordinate-geometry]]

[[math:def-integral-scheme]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:lem-finite-type-local-on-source-and-target]]

[[math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]]

[[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]

[[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise]]

[[math:thm-abelian-groups-form-an-abelian-category]]

[[math:def-module-homomorphism-kernel-image-and-cokernel]]

[[math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]

[[math:thm-hilbert-basis-theorem]]

## External input
Use Levine's raw simplicial localization theorem in the field case of §7 of the identified primary preprint (reference 0). Its introductory Theorem 1.7 says dimension one, but §1.6 and the actual proof in §7 explicitly treat bases of dimension at most one. Section 2.2 does not impose separatedness, and Theorem 6.12's proof synchronizes the same moving map and homotopy over a finite affine cover. Deep moving and blow-up results remain external inputs. This is neither a cubical replacement nor a definition by sheaf hypercohomology. The numbered argument below checks the componentwise application and cycle conventions; it does not reconstruct Levine's moving theorem.

Reference 1 imports the identity between chain codimension and dimension of the generic local ring from [Stacks, Lemma 28.10.3](https://stacks.math.columbia.edu/tag/02IZ). It reconciles the chain codimension in the geometric dimension supplier with the stalk-dimension convention in the local Bloch definition. The imported identity has no separatedness hypothesis.

## Facts & Assumptions
**Given:** Choice and $k,U,V,r$ as in the statement. The open $V$ carries its open-subscheme structure, and $j$ is its open immersion over $k$. [[math:def-axiom-of-choice]] [[math:def-field]] [[math:def-scheme-over-base]] [[math:def-open-immersion-schemes]]

**Goal:** Apply the imported theorem with the actual dimension index and cycle convention, and identify its quotient with the stated cokernel complex.

[A1] Choice is retained to meet the hypotheses of the local Bloch definition, the smooth-component supplier and the polynomial-dimension supplier. This is the existing supplier contract, not a claim that localization requires Choice intrinsically. [[math:def-axiom-of-choice]]

[F1] Levine §7, reference 0, proves acyclicity of $z_q(V,\bullet)/\operatorname{im}(z_q(U,\bullet))$ for finite-type schemes over a semilocal regular base of dimension at most one. The proof uses Theorem 6.12, including its finite-affine-cover reduction. Lemma 7.1 and the finite-flat degree pull/push argument treat finite residue fields. Its dimension indexing over a field is ordinary dimension, and its associated complex is the unnormalized alternating-face complex.

[F2] The local Bloch complex supplies admissible integral cycles, ordered simplicial faces, local-length multiplicities and the alternating differential. The open-restriction supplier also verifies that every open of $U$ is smooth finite type, and that restriction is a chain map. [[def-bloch-higher-cycle-complex]] [[lem-author-75596422a482-open-restriction]]

[F3] A smooth scheme over a field is regular and normal; if Noetherian, its components are disjoint integral open-and-closed subschemes. Regular includes locally Noetherian. Finite type includes quasi-compactness, so a smooth finite-type scheme is Noetherian; a quasi-compact disjoint open component cover has finitely many members. A clopen subset of a quasi-compact space is quasi-compact. Smoothness and locally finite type restrict to opens, so these clopen components are again smooth of finite type. Separatedness over $k$ means separatedness of the structure morphism; no such condition is assumed here. [[thm-author-89250b1d710c-smooth-local-geometry-input]] [[math:def-locally-noetherian-and-noetherian-scheme]] [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:def-smooth-morphism-schemes]] [[math:lem-finite-type-local-on-source-and-target]] [[math:def-separated-scheme-over-base]]

[F4] For integral finite-type schemes over $k$, the geometric supplier gives finite dimension, invariance under nonempty open restriction, the dimension-difference formula for chain codimension, and dimension drop by one for components of an effective Cartier divisor. Reference 1 identifies that codimension with the local-ring convention in [F2]. Components carry reduced induced structures. On an integral scheme every nonempty affine open is the spectrum of a domain. [[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input]] [[math:def-integral-scheme]]

[F5] Simplex products and coordinate faces have polynomial affine charts after elimination of one remaining barycentric coordinate. Polynomial rings over domains are domains; Hilbert basis preserves Noetherianity at each polynomial extension. Under Choice, adjoining one variable to a finite-dimensional Noetherian ring raises its dimension by one; iterate this on these charts. Thus if $T$ is integral finite type of dimension $d$, $T\times\Delta^m$ is integral of dimension $d+m$: the integral polynomial charts have nonempty pairwise intersections because their base charts do, and [F4] identifies their dimensions with the dimensions on nonempty open charts. The faces use the same ordered coordinates as [F2]. [[lem-author-89250b1d710c-face-coordinate-geometry]] [[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]] [[math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]] [[math:thm-hilbert-basis-theorem]]

[F6] Abelian groups form an abelian category; their cokernels are the usual image quotients, and the cokernel of a chain map is computed degreewise with induced differentials. Acyclicity is equality of cycles and boundaries in every degree. [[math:thm-abelian-groups-form-an-abelian-category]] [[math:def-module-homomorphism-kernel-image-and-cokernel]] [[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise]] [[math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]

## Proof
1.1 By [A1] and [F3], $U$ has finitely many integral clopen components $U_a$, each smooth of finite type; put $d_a=\dim U_a$ and $q_a=d_a-r$. A nonempty $V_a=V\cap U_a$ has the same dimension as $U_a$ by [F4] and is smooth finite type by the open-restriction construction in [F2]. By [F4] and [F5], an integral closed $W\subset U_a\times\Delta^n$ has codimension $r$ in the convention of [F2] exactly when $\dim W=q_a+n$. For a face with $s$ vanishing coordinates, Levine's condition is that every intersection component has dimension at most $q_a+n-s$. This implies equality for every nonempty component: inductively, a component at the preceding face has dimension $q_a+n-s+1$, so cannot be contained in the next face, by the upper bound on that next face. The next coordinate is consequently a nonzero function on this integral reduced component; its zero scheme is an effective Cartier divisor, whose components have dimension one less by [F4]. Every component of the next intersection arises from one of these preceding components, and their finite union has the same underlying intersection. This proves the induction, with empty intersections allowed. Conversely, codimension $r$ on every ambient face gives exactly those equalities by [F4] and [F5], hence Levine's inequalities. The ordered faces and their local-length coefficients agree with [F2]. Therefore, on $U_a$ and on each nonempty $V_a$, the two unnormalized complexes coincide as $z^r(-,\bullet)=z_{q_a}(-,\bullet)$, compatibly with open restriction. If $q_a+n<0$, both degree-$n$ groups have no generators; in negative homological degrees both complexes are zero. [A1, F2, F3, F4, F5, given]

2.1 A field has only the ideals $0$ and $k$; its spectrum is one point and its local ring is regular of dimension zero. It is therefore the zero-dimensional semilocal principal-ideal-domain base permitted in [F1]. Apply [F1] on each $U_a$ with the respective integer $q_a$, including finite fields. Step 1.1 identifies its restriction quotient with $Q_a=\operatorname{coker}(z^r(U_a,\bullet)\to z^r(V_a,\bullet))$ by [F6]; if $V_a$ is empty this quotient is zero. Each cycle generator on $U$ or $V$ lies in exactly one clopen component: intersecting an irreducible support with a finite clopen partition leaves only one nonempty part. Faces and restrictions stay in that part by [F2]. Hence the cycle groups, differentials and restrictions are finite tuples of their component versions, with coordinatewise operations; the same holds for the quotient groups in [F6], so $Q$ is the finite direct sum of the $Q_a$. A cycle tuple has a boundary preimage in each coordinate because each $Q_a$ is acyclic; taking the finite tuple of these preimages proves acyclicity of $Q$ without any additional exactness theorem for infinite sums. This also proves the assertion when $U$ is empty or $V$ is empty. [F1, F2, F6, step 1.1] ∎

## Source notes
The earlier MVW citation uses that book's separated-scheme convention and did not alone justify the stated scope. Levine's separate broader simplicial input supplies it. On preprint p. 1 the introductory codimension conversion prints $d-p$ in place of $d-q$; the correct conversion used above is $z^r(U_a,n)=z_{d_a-r}(U_a,n)$. On p. 43 the final target of the finite-extension pull/push display incorrectly remains over the extension; pushforward returns to the original quotient over $U$. These two display typos do not affect the dimension-indexed localization argument. No local reconstruction of its deep moving constructions is claimed.
