---
dependency_level: 0
id: lem-projective-flat-equivalence-relation-hilbert-quotient
kind: lemma
title: Projective quotient of a closed flat equivalence relation via Hilbert flattening
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-hilbert-scheme-represents-projective-flat-families
- lem-hilbert-universal-scheme-theoretic-flattening
- thm-serre-vanishing
- lem-eventual-global-generation-coherent-twists
- thm-nakayama-lemma
- thm-proper-quasi-finite-is-finite
- thm-flat-quotients-preserve-short-exact-tensor-sequences
- lem-nonaffine-fppf-descent-of-scheme-morphisms
- def-separated-morphism-schemes
- def-proper-morphism
- lem-proper-stable-base-change
- lem-proper-stable-composition
- def-smooth-morphism-schemes
- def-axiom-of-choice
- def-dependent-choice
- def-fppf-sheaf-and-sheafification
- lem-fppf-sheafification-exists
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC and DC are explicit actual scheme, Hilbert, flattening, cohomology and
  descent supplier hypotheses. All tests include nilpotents and non-Noetherian schemes.
sources:
  references:
  - title: Steven Kleiman, The Picard Scheme, Theorem4.8 andLemma4.9
    url: https://arxiv.org/pdf/math/0504020
    locator: PDF27–31 full relevant printed proofs read. Its AK80 effectiveness citation
      is replaced by the local all-test flattening proof; AK80 full text was not recovered/read
      and is not imported.
  - title: Quentin Guignard, On the ramified class field theory of relative curves,
      arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Full Section4.1–4.14, PDF16–21 read. Relative representability citations
      are not imports; the construction here uses actual local Hilbert/flattening/cohomology
      suppliers.
---

## Statement

Assume AC and DC. Let $S=\operatorname{Spec}B$ for a Noetherian ring $B$, and let $X/S$ be finitely presented with a supplied closed embedding $X\hookrightarrow\mathbb P^N_S$. Let $E\hookrightarrow X\times_S X$ be a closed equivalence relation on all $S$-schemes, whose first projection is flat and finitely presented. There are a projective finitely presented $S$-scheme $Q$ and a projective faithfully flat finitely presented $q:X\to Q$ with
$$E=X\times_Q X,$$
and $Q$ represents the fppf sheaf quotient $X/E$ on every test scheme, including nonreduced and non-Noetherian ones. If $E\to X$ is smooth, $q$ is smooth. Empty $X$ and the zero base ring are included. No commutation of schematic image with base change, flatness of an image map, or descent of ampleness is assumed.

## Facts & Assumptions

**Given:** AC/DC and the projective embedding and closed flat finitely presented relation in the Statement.

[A1] The actual Hilbert, flattening and scheme/cohomology constructions assume AC/DC. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The projective Hilbert scheme and its universal flat family represent the embedded-family functor over a Noetherian base on all tests and after arbitrary base change; fibre polynomials of a flat family are locally constant. [[thm-hilbert-scheme-represents-projective-flat-families]]

[F2] For a coherent sheaf on projective space over a Noetherian scheme, each fixed-polynomial flatness functor is represented by a locally closed SCHEME-THEORETIC stratum on every test; its nilpotent equations are retained. [[lem-hilbert-universal-scheme-theoretic-flattening]]

[F3] High ample twists of a coherent sheaf have no positive cohomology and are globally generated. In particular a nonzero coherent sheaf on a projective scheme over a field cannot have zero Hilbert polynomial. [[thm-serre-vanishing]] [[lem-eventual-global-generation-coherent-twists]]

[F4] Nakayama applies to finite modules; a proper quasi-finite morphism is finite. [[thm-nakayama-lemma]] [[thm-proper-quasi-finite-is-finite]]

[F5] A proper morphism is separated, finite type and universally closed; properness is stable under base change and composition. Graphs into a separated target are closed, as pullbacks of its diagonal. [[def-proper-morphism]] [[def-separated-morphism-schemes]] [[lem-proper-stable-base-change]] [[lem-proper-stable-composition]]

[F6] A short exact sequence with flat quotient stays exact after any tensor. Fppf sheafification exists on the usual bounded big sites, and representable functors are fppf sheaves: scheme morphisms descend effectively with their full cocycles. [[thm-flat-quotients-preserve-short-exact-tensor-sequences]] [[lem-nonaffine-fppf-descent-of-scheme-morphisms]] [[def-fppf-sheaf-and-sheafification]] [[lem-fppf-sheafification-exists]]

[F7] Smoothness means flatness, local finite presentation and geometrically regular fibres. [[def-smooth-morphism-schemes]]

## Proof

**Proof technique:** flatten the closed graph sheaf inside the universal orbit family, prove the resulting map is actually flat, and prove projectivity by a proper monomorphism into the Hilbert scheme.

**Given:** The Statement data under [A1].

1.1 If $X$ is empty take $Q$ empty, which proves every assertion, including the zero-ring base. Otherwise because E→X is proper, finitely presented and flat, its closed embedding in X×_S X is a family in the actual Hilbert functor of X/S. Its universal property gives h:X→Y=Hilb_(X/S). The fibre polynomial is locally constant on X. A Noetherian X is quasi-compact, so only finitely many polynomial components of this target are needed. Replace Y by their finite disjoint union; put its finitely many projective embeddings into pairwise disjoint coordinate linear subspaces of one projective space over S. The actual Hilbert theorem makes this Y projective finitely presented over S and supplies a universal closed family U⊂X×_S Y, flat and finitely presented over Y. On each of its finitely many components Y_j it has a single nonzero polynomial P_j. The polynomial is nonzero: every orbit fibre contains its diagonal point, including after algebraic closure. The universal identification is $U\times_Y X=E$ as embedded subschemes, with X the parameter through h. [A1, F1, F5, given, construct]

2.1 The all-test kernel pair of h is E, independently of any quotient existence. For T and x,y∈X(T), if (x,y)∈E(T), symmetry and transitivity identify their orbit subfunctors, hence their represented embedded orbit families, exactly. Thus h(x)=h(y). Conversely equality of h(x),h(y) means equality of the closed orbit families in X_T. The section x lies in its own family by reflexivity, so it lies in y's family, which is precisely (x,y)∈E(T). This is equality on all schemes including nonreduced ones; Yoneda gives $E\simeq X\times_Y X$ scheme-theoretically. It does not require the schematic image of h or its special fibre to commute with anything. [F1, step 1.1, algebra]

3.1 The graph i:X→X×_S Y of h is closed because Y/S is separated. The graph lies in U by reflexivity of E, so it factors as a closed immersion g:X↪U. This is a scheme-theoretic factorization: the map X→U is the section of the pulled-back family E→X given by its diagonal. Equivalently the universal family's ideal pulls back to zero by the exact Hilbert universal property. For each component Y_j, put X_j=h^(-1)(Y_j), and let F_j be the coherent sheaf g_*O_(X_j) on U_j, then pushed forward by U_j↪P^N_(Y_j) using the fixed projective embedding of X/S. It is coherent because all schemes are Noetherian and both maps are closed immersions. Under an arbitrary base change T→Y_j its pullback is the structure sheaf of X_j×_(Y_j)T embedded in U_j×_(Y_j)T. Closed-immersion pushforward commutes with every such pullback: on affine patches this is exactly $(B/I)\otimes_A A\prime=(B\otimes_A A\prime)/I(B\otimes_A A\prime)$. No flatness of T is required. [F1, F5, step 1.1, step 2.1, construct]

4.1 Apply the actual all-test flattening theorem to F_j and the SAME polynomial P_j as the flat universal family U_j. It supplies a locally closed scheme Q_j↪Y_j representing exactly those T→Y_j for which (F_j)_T is T-flat with fibre polynomial P_j. These are the full nilpotent equations of the stratum. Put Q=the finite disjoint union of Q_j. This is a locally closed immersion Q→Y, with Q Noetherian and of finite presentation over S. [F2, step 3.1, construct]

5.1 The map h_j:X_j→Y_j FACTORS through Q_j. Indeed its pulled-back sheaf F_j is O_(X_j×_(Y_j) X_j)=O_(E|X_j), by step 2.1. This is exactly O_(U_j×_(Y_j)X_j), not merely a sheaf with the same support. It is flat over X_j by the assumed flatness of the relation, and has polynomial P_j by its universal Hilbert-family identification. The flattening stratum's all-test universal property therefore forces the factorization. Consequently X×_Y Q→X is an isomorphism: the factorization gives a section, and Q→Y is a monomorphism, so any test map to X has exactly one compatible map to Q. This is the precise reason that $X_Q=X$; it does not assert that schematic image commutes with a fibre. [F1, F2, step 2.1, step 3.1, step 4.1, algebra]

6.1 Over Q_j, compare the quotient of coherent sheaves O_(U_Qj)→(F_j)_Qj=O_(X_Qj). Both its source and target are Q_j-flat. On every geometric fibre they have the SAME polynomial P_j. The kernel on that fibre has zero Hilbert polynomial, so it is zero: a nonzero coherent sheaf on a projective scheme has nonzero H0 after sufficiently high twists by Serre global generation and has no higher cohomology in that tail; it therefore cannot have identically zero Hilbert polynomial. Flatness of the quotient makes the kernel sequence remain exact on every residue-fibre tensor. Thus the coherent kernel I has $I\otimes\kappa(q)=0$ for every q. At every stalk on U_Qj, Nakayama (the base maximal ideal lies in the target maximal ideal) gives I=0. Hence the closed immersion X_Qj→U_Qj is an isomorphism. Combining this with step 5.1 gives $X=U_Q$ over Q. [F3, F4, F6, step 4.1, step 5.1, algebra]

7.1 The map q:$X=U_Q$→Q is therefore projective, flat and finitely presented. It is surjective: each universal fibre has the nonzero polynomial P_j and so is nonempty. Surjectivity remains true after every base change because flat locally finitely presented maps with nonempty geometric fibres are faithfully flat, or directly because field extension of a nonempty finite-type geometric fibre remains nonempty. Thus q is a projective fppf cover. Its kernel pair is E: Q→Y is a monomorphism, so $X\times_Q X=X\times_Y X$, which is E by step 2.1. THIS proves q's flatness; it was not inferred just from flat projections of E or from the schematic image. [F1, F5, step 2.1, step 5.1, step 6.1, algebra]

8.1 Q is proper over S. It is separated and of finite type since it is locally closed in the projective Y/S. For any S-scheme T and any closed subset Z⊂Q_T, its preimage in X_T is closed. Its image in T is closed because X_T/T is proper, and equals the image of Z because q_T is surjective. Therefore Q/S is universally closed, hence proper. To conclude projectivity, the morphism Q→Y is proper: a map from a proper S-scheme to a separated S-scheme is proper by its closed graph and the proper projection. It is also a monomorphism. A proper monomorphism is finite, since its geometric fibres have at most one point, hence it is quasi-finite, and proper-quasi-finite implies finite. A finite monomorphism is a closed immersion: affine-locally A→B is finite and $B\otimes_A B\to B$ is an isomorphism. On any residue field k the finite vector-space dimension b satisfies $b^2=b$, so b=0 or1 and k→B⊗k is onto. The finite A-module $\operatorname{coker}(A\to B)$ thus has all residue fibres zero and Nakayama makes it zero. Hence A→B is onto. Thus Q↪Y is CLOSED, proving Q/S projective without any descent-of-ampleness assertion. [F4, F5, step 7.1, algebra]

9.1 Q represents the fppf quotient. Given T→Q, its pulled-back fppf cover X_T→T has a tautological map to X; the two maps over its overlap belong to E, so their classes glue in the fppf quotient sheaf. Conversely a local X-representative of a quotient class maps to Q; equality in E gives equal Q-maps on all overlaps. Representable functors are fppf sheaves under the actual morphism-descent provider, so those maps glue. These maps are inverse on all tests. If E→X is smooth, q is smooth: for a geometric point of Q choose a geometric point x of its nonempty X-fibre; after that field extension the fibre X_q identifies with E_x by the kernel-pair identity. It is smooth by the assumed smoothness of E→X. The flat finite-presentation/geometrically-regular-fibre definition of smoothness then applies. [F6, F7, step 2.1, step 7.1, step 8.1, construct] ∎

## Remarks

The graph flattening stratum gives the actual quotient cover. A schematic image alone would not prove its flatness or its base-change universal property. No external AK80 theorem is used.
