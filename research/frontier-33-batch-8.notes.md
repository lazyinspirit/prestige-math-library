# frontier-33 batch 8: scaffold checkpoint

Scope: only this batch's pages.json, coverage.json and notes.md. No authored items, plan edits, workflow transitions or other batches are authorized.

Read CLAUDE.md, README.md, SCHEMA.md, the exact dispatch/task paths, the current empty manifest, plan-spec.json, and both design locations (plan-algebraic-topology-track.md lines 649–715). Line 689 starts the companion subsection of the same AT-5 design; neither location supersedes the other. Both control mathematical scope. Design names the prerequisite CW A page; spec names its B companion. Follow spec (order 366.009/366.010); leave prerequisite drift to the run's drift stage.

Source reading completed through web PDF fetches: Hatcher chapter 2, Degree pp.134–137; Lemma 2.34 pp.137–139; Axioms for Homology pp.160–162, before Categories and Functors; exercises 1–4 p.165; simplicial approximation Theorem 2C.1/Lemma 2C.2 pp.177–179; Theorem 2C.5 and complete construction pp.182–184. May, A Concise Course, contents; 14§3 suspension corollaries p.109; 14§4 pp.110–111; opening triple/excisive-sum/Mayer–Vietoris results 14§5 pp.112–113; complete 14§6 pp.114–116; complete 15§2 pp.119–120. May pp.121–122 are problems, not the uniqueness proof. Hatcher full revised book contents and Theorem 3F.8 proof pp.314–315; Chapter 0 Propositions 0.16–0.19, Corollaries 0.20–0.21 and full proof of 0.19 pp.15–17. Hatcher chapter 4 Theorem 4.59 homology proof pp.399–401 read to audit dependencies. Miller MIT full lecture-set contents plus lectures 10 and 11 (including all named mathematical results). Exact URLs/locators will be recorded in coverage.

The five lemma cannot manufacture a comparison morphism. The design's one-stage comparison item must assume an already constructed natural morphism. A coefficient isomorphism is specified; without this normalization the uniqueness assertion is false even at a point. May's incidence comparison uses Hurewicz; Hatcher 4.59 uses sphere homotopy classification and cellular approximation. Those later interfaces cannot be silently imported. Planned repair: canonical oriented-simplex comparison, subdivision compatibility, continuous finite-polyhedral naturality, finite CW homotopy models, universal sphere action, then cellular comparison and finite support. The finite CW model proof needs its own HEP mapping-cylinder lemma. These are prerequisite results to author here, not reasons to drop uniqueness.

For arbitrary CW pairs, prove an axiomatic telescope/Mayer–Vietoris continuity result. Hatcher Lemma 2.34 gives a direct deformation of the telescope onto X, avoiding a Whitehead-theorem dependency; May 14§6 gives the 1-shift direct-sum argument. Compact support of singular chains alone does not imply continuity of arbitrary h. Do not identify finite-dimensional with finite-cell.

Conventions: all homology indices integers, coefficients arbitrary abelian G; ordinary dimension axiom; arbitrary coproduct additivity. Existing reduced singular homology is zero in negative degrees, including the empty space. Mention the alternative augmented H_-1(empty)=G convention distinctly, without changing published conventions. For an empty subspace use X_+ in quotient formulas. Degree uses integral oriented S^n, n>=1. S^0 has unreduced H_0=Z^2 but reduced H_0=Z: the companion counterexample must not claim that reduced degree is impossible. No degree classification, invariance of domain, or characteristic-class obstruction is imported.

Local exact dependencies read include sphere homology, reduced augmentation, pair LES and naturality, excision, disjoint-union additivity, good-pair quotients, CW HEP, compact-cell support, relative cellular homology and incidence matrix, simplicial/singular comparison, mesh and Lebesgue. The item about homotopy equivalences of arrows is about chain-map cones, not topological pairs; do not use it as a topological HEP lemma. Existing Brouwer/no-retraction/ray lemma are only dimension two; the all-dimensional statements here extend them and are not aliases.

URL status: shell curl cannot resolve public hostnames (exit 6); web PDF fetches succeed. Hatcher AT.pdf was not retrievable through web; the author's AT%2B.pdf was recovered and the relevant actual passages read. Preserve original_url on that source. No source-fetch stamps have been fabricated. Required validators remain to run after the scaffold is written.

Initial next action (now completed): write explicit item contracts and source-heading harvest, then run the required gates and record exact outcomes. All proof details below will be authoring obligations, not claims that proofs have already been authored.

## Item contracts and authoring checkpoints

All items below are scaffolded, not authored. Each entry records its exact scope, dependency IDs, source locator and the proof obligations to discharge at authoring.

### homology-axioms-degree-and-classical-applications (44 items)

- **def-unreduced-homology-theory-on-cw-pairs** — An ordinary theory on CW pairs consists of functors h_n to abelian groups for n in Z and natural boundary maps, with homotopy invariance, pair long exactness, CW excision, dimension h_n(*)=0 for n!=0, and arbitrary disjoint-union additivity. Write G=h_0(*). State CW excision as h_*(U,U intersect V) -> h_*(U union V,V) for subcomplexes; this avoids asking a CW-only functor to evaluate non-CW deleted pairs.
  - Dependencies: def-skeleta-cw-subcomplex-and-relative-cw-complex.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1, printed pp.25–26; https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§4, pp.110–111, CW-pair formulation.
  - Convention/definition contract: as stated above; verification belongs to its following results.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-singular-homology-satisfies-homotopy-exactness-and-excision** — Singular homology with any fixed abelian coefficient group satisfies the homotopy, exactness, naturality and CW excision axioms.
  - Dependencies: def-unreduced-homology-theory-on-cw-pairs, cor-homotopic-maps-induce-the-same-map-on-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-naturality-of-the-long-exact-sequence-of-a-pair, thm-excision-for-singular-homology, prop-relative-cw-inclusions-are-cofibrations.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1 and ensuing verification, pp.25–26; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, pp.160–162.
  - Proof obligation: Package published proofs; obtain subcomplex excision by CW collars/mapping cylinders and the open excision theorem, spelling out the neighbourhood replacement. Pair homotopy invariance also follows from absolute invariance and the natural pair LES.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-singular-homology-satisfies-dimension-and-arbitrary-additivity** — For arbitrary G, H_n(*;G)=G if n=0 and is zero otherwise; the canonical direct sum map for any disjoint family of pairs is an isomorphism. Thus singular homology is an ordinary theory with coefficient G.
  - Dependencies: def-unreduced-homology-theory-on-cw-pairs, thm-singular-homology-satisfies-homotopy-exactness-and-excision, def-singular-chain-complex-and-singular-homology, prop-singular-homology-of-a-disjoint-union-is-the-direct-sum.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1, pp.25–26.
  - Proof obligation: Compute the one-generator point complex with alternating zero and identity differentials; extend the existing absolute disjoint-sum result to relative chain quotients.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **def-reduced-homology-theory-and-augmentation** — For nonempty based X define reduced h_n(X)=ker(h_n(X)->h_n(*)); the basepoint splits the augmentation. State reduced homotopy, exact-cofiber, wedge and dimension axioms. Keep the library convention reduced H_n(empty)=0 in all degrees; the augmented-chain convention H_-1(empty)=G is a distinct unused extension.
  - Dependencies: def-unreduced-homology-theory-on-cw-pairs, def-zero-simplex-augmentation-and-reduced-singular-homology.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§4, pp.110–111; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, pp.160–161.
  - Convention/definition contract: as stated above; verification belongs to its following results.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs** — On based CW spaces with basepoint a vertex, reduced theories and unreduced theories on CW pairs determine one another. For nonempty A, h_n(X,A)=reduced h_n(X/A); for A empty use X_+. Boundaries, coefficient identifications, natural transformations and arbitrary wedge/disjoint-sum axioms correspond.
  - Dependencies: def-unreduced-homology-theory-on-cw-pairs, def-reduced-homology-theory-and-augmentation, prop-relative-cw-inclusions-are-cofibrations.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§4, CW definition and theorem, pp.110–111; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, pp.160–162.
  - Proof obligation: Use topological mapping cylinder and cone constructions explicitly; HEP identifies cofibers with quotients. Derive the pair LES and CW excision from reduced cofiber exactness using mapping-cone quotients, and the converse by pair exactness. Establish triple exactness here for subsequent skeletal diagrams. Include natural suspension and boundary-as-desuspension of the cofiber map; no weak-equivalence axiom outside CW pairs.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **def-coefficient-normalized-morphism-of-ordinary-homology-theories** — A morphism is a graded natural transformation on CW pairs commuting with connecting maps. It is normalized by a specified homomorphism h_0(*) -> k_0(*); a comparison equivalence is normalized by a specified coefficient isomorphism.
  - Dependencies: def-unreduced-homology-theory-on-cw-pairs.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, pp.119–120, natural comparison and boundary compatibility; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, p.161, uniqueness with coefficients.
  - Convention/definition contract: as stated above; verification belongs to its following results.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group** — For every ordinary h, h_k(D^n,S^{n-1}) is G for k=n and zero otherwise. For n=0 interpret the pair as (*,empty). Chosen ordered disk orientations fix these identifications; reduced h_k(S^n) is G in degree n, including S^0.
  - Dependencies: prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§3, suspension corollaries, p.109; 15§2 p.120.
  - Proof obligation: Use the cone LES and natural suspension repeatedly, starting with h_0(S^0,one point)=G. Negative-degree vanishing follows by dimension, not by imposing an extra connective axiom.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair** — For a CW pair let F_n=A union X^n and F_-1=A. Then C_n^h(X,A)=h_n(F_n,F_{n-1}) is the direct sum of a copy of G for each relative n-cell. The successive boundary composites d_n have d_(n-1)d_n=0 and are natural for cellular maps.
  - Dependencies: lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group, prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs, def-skeleta-cw-subcomplex-and-relative-cw-complex.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, definition of C_n and d, p.119.
  - Proof obligation: Use quotient wedges, arbitrary additivity, and exactness of triples. Do not yet identify the integer incidence action for an arbitrary h.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology** — For finite-dimensional CW pairs, h_n(X,A) is naturally isomorphic, for cellular maps, to H_n(C_*^h(X,A)). The isomorphism commutes with pair boundaries and is forced by the skeletal exact diagram. It does not require finitely many cells.
  - Dependencies: lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, second theorem and full exact-diagram proof, pp.119–120.
  - Proof obligation: Induct on dimension to prove vanishing above dimension and stabilization below the attaching dimension. In the three-skeleton diagram send x to the class of rho(y) for any skeletal lift y; check existence, independence, inverse and pair-boundary compatibility. Stop the stabilization at the finite top dimension; no colimit assertion is used here.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-oriented-simplex-comparison-for-an-ordinary-homology-theory** — For finite simplicial pairs (K,L), oriented simplex generators identify C_*^h(K,L) with C_*^simp(K,L;Z) tensor G, including alternating face signs; hence give a coefficient-normalized comparison h_n(K,L) -> H_n(K,L;G), natural for simplicial maps.
  - Dependencies: lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology, def-simplicial-chain-groups-and-boundary, lem-an-odd-permutation-reverses-oriented-simplex-sign, thm-simplicial-and-singular-homology-agree-for-simplicial-complexes.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, both cellular comparison theorems, pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — §2C, Theorem 2C.1 setting, pp.177–179.
  - Proof obligation: Define the relative class of an ordered simplex recursively by its boundary and base coefficient; prove adjacent transpositions reverse it. The relative boundary lands in the alternating sum of face classes by naturality/excision. Degenerate simplicial images factor through a lower-dimensional simplex. Compare the resulting explicit complex with published simplicial/singular homology; no tensor-exactness assumption on G.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-finite-simplicial-approximation-for-homology-comparison** — For finite simplicial pairs (K,L),(P,Q), every continuous map of their realizations has, after enough common barycentric subdivision of K and L, a simplicial approximation through a homotopy of pairs.
  - Dependencies: def-simplicial-map-and-its-geometric-realization, lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero, thm-lebesgue-number-lemma.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — §2C, Lemma 2C.2 and Theorem 2C.1, pp.177–179.
  - Proof obligation: Prove the open-star criterion, choose stars for vertices in L from Q and then extend their open preimages to a neighbourhood of L. Finiteness and a Lebesgue number make all sufficiently small stars subordinate, with these constrained choices at L. The straight-line homotopy stays in a common target simplex and in Q on L. This is the finite-pair specialization, not cellular approximation.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-subdivision-compatible-continuous-polyhedral-homology-comparison** — The oriented-simplex comparison is independent of finite subdivision and natural for all continuous maps of finite simplicial pairs; it commutes with pair connecting maps.
  - Dependencies: lem-oriented-simplex-comparison-for-an-ordinary-homology-theory, lem-finite-simplicial-approximation-for-homology-comparison.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, exact-diagram naturality and boundary compatibility, pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2C.1 and proof, pp.177–179.
  - Proof obligation: For the identity from the old triangulation to its subdivision, each old skeleton lies in the new skeleton. Show the relative class of an old simplex maps to the sum of its consistently oriented subdivided simplices: induction on dimension identifies the boundary, and injectivity of the relative-simplex boundary fixes the class (dimension zero is the coefficient map). Apply the skeletal exact diagram. Then replace a continuous map by a simplicial approximation; homotopy invariance proves naturality and independence of all choices.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts** — If A is a CW subcomplex of X and A -> X is a homotopy equivalence, then X strongly deformation retracts onto A. Homotopic attaching maps along a CW pair give homotopy-equivalent adjunction spaces relative to their common target.
  - Dependencies: prop-relative-cw-inclusions-are-cofibrations.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Propositions 0.18–0.19 and Corollary 0.20, complete proofs pp.16–17.
  - Proof obligation: Prove the relative inverse lemma inline: extend the inverse homotopy to make it fix A; cancel the retraced restriction by an HEP homotopy of homotopies. Apply to the inclusion. For attachment invariance use the homotopy attaching cylinder and its two relative deformation retractions.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models** — Every finite CW pair is homotopy equivalent as a pair to a finite simplicial pair.
  - Dependencies: lem-finite-simplicial-approximation-for-homology-comparison, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, def-geometric-realization-of-an-abstract-simplicial-complex.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2C.5, construction and proof pp.182–184.
  - Proof obligation: Build Hatcher simplicial M(f) over each simplex by coning M(f restricted to boundary), retaining the target and barycentrically subdivided domain. Contractibility plus the previous HEP lemma supplies the retraction, then adjust its endpoint to f. Build C(f) by adjoining the cone on the domain. First model A, then attach the finitely many cells of X outside A; keep both A-models in the common double-cylinder construction. Check every retraction preserves the designated subpair. This proves the pair version rather than assuming that separate models for X and A are compatible.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-coefficient-comparison-on-finite-cw-pairs** — A specified coefficient isomorphism determines a unique boundary-compatible natural equivalence between ordinary homology theories on finite CW pairs.
  - Dependencies: lem-subdivision-compatible-continuous-polyhedral-homology-comparison, lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models, def-coefficient-normalized-morphism-of-ordinary-homology-theories, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, uniqueness theorem pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2C.5 pp.182–184; Axioms for Homology p.161.
  - Proof obligation: Compare each theory with simplicial chains using the specified coefficients and transport along a finite simplicial homotopy model. Independence and continuous naturality follow by comparing two models via their homotopy equivalences and the continuous polyhedral comparison. A normalized natural morphism is forced on relative simplices by boundaries, then on the exact diagram, proving uniqueness.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory** — If u:S^n -> S^n induces multiplication by d on reduced integral singular homology, it induces d times the identity on reduced h_n(S^n)=G in every ordinary theory. This includes n=0 using reduced H_0 and the chosen difference generator.
  - Dependencies: lem-coefficient-comparison-on-finite-cw-pairs, lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group, cor-homology-of-spheres.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, first theorem and coefficient paragraph p.119; https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf — Theorem 4.59 homology argument, printed pp.399–401 (in chapter 4); alternative simplicial route specified in notes.
  - Proof obligation: Apply finite CW comparison with singular coefficients G; on simplicial sphere chains the fundamental cycle gives the tensor G generator and the same integer action. Do not invoke the homotopy classification of sphere maps.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients** — For arbitrary G, C_*^h(X,A) has differential given by the published integral incidence matrix acting on G. In dimension one use signed endpoints. Thus C_*^h is canonically C_*^cell(X,A;Z) tensor G after cell orientations are chosen.
  - Dependencies: lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair, lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory, def-incidence-number-of-two-cw-cells, thm-cellular-boundary-is-the-incidence-degree-matrix.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, first theorem and arbitrary-coefficient paragraph p.119.
  - Proof obligation: Project the attaching boundary onto each target cell sphere and use natural suspension/cofiber boundaries and the sphere-action lemma. Arbitrary additivity gives column-finite direct sums. This supplies the coefficient-matrix step missing from a bare five-lemma proof.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support** — For finite-dimensional CW pairs, the canonical colimit over finite subcomplexes K of X of h_n(K,K intersect A) maps isomorphically to h_n(X,A).
  - Dependencies: lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, cellular calculation pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Lemma 2.34 p.138, finite support reasoning.
  - Proof obligation: Cellular chains are direct sums. Each cycle and each boundary witness has finite support contained, by closure finiteness, in a finite subcomplex. Use the natural skeletal isomorphism for subcomplex inclusions. Compact images will subsequently ensure compatibility under continuous maps; singular-chain support is not being assumed for h.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage** — Given an existing natural morphism of ordinary theories commuting with the pair LES, if its components on the previous skeleton and the relative n-cell groups are isomorphisms in every degree, its components on the next skeleton are isomorphisms.
  - Dependencies: def-coefficient-normalized-morphism-of-ordinary-homology-theories, lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair, thm-five-lemma-for-a-morphism-of-long-exact-sequences.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, skeletal exactness pp.119–120; https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Proposition 9.6, opening p.22.
  - Proof obligation: Apply the five lemma to five consecutive terms in the commuting pair LES. This propagates invertibility of constructed maps; it does not construct a natural transformation from an abstract coefficient isomorphism.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs** — A specified coefficient isomorphism determines a unique natural equivalence of ordinary theories on finite-dimensional CW pairs, commuting with boundaries. Infinitely many cells in a bounded range of dimensions are allowed.
  - Dependencies: lem-coefficient-comparison-on-finite-cw-pairs, lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support, lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, pp.119–120.
  - Proof obligation: Pass the finite-CW comparisons through finite-subcomplex colimits. Every continuous map takes a finite subcomplex into a finite subcomplex, so the extension is natural for all maps, not just cellular maps. Uniqueness and boundary compatibility follow on each finite support.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers** — For CW subcomplexes U,V with X=U union V, any ordinary theory has the natural Mayer–Vietoris exact sequence with maps (i_*,-j_*) and sum, also for CW pairs covered by subpairs.
  - Dependencies: prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, Mayer–Vietoris derivation p.162; https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Lemma 11.6, pp.27–28; https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§5, first Mayer–Vietoris theorem pp.112–113.
  - Proof obligation: Derive the relative excision isomorphism and compare the two pair LES; prove the every-third-vertical-isomorphism diagram chase from Miller inline. Handle relative covers by quotient/triple exactness. No singular-chain construction is used.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **def-skeletal-mapping-telescope-of-a-cw-pair** — For a CW pair (X,A), put T_X=union over i>=0 of X^i times [i,infinity) in X times [0,infinity), with its CW weak topology, and T_A similarly. Projection gives a map of pairs to (X,A).
  - Dependencies: def-skeleta-cw-subcomplex-and-relative-cw-complex.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Lemma 2.34, telescope construction p.138; https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6, telescope construction pp.114–116.
  - Convention/definition contract: as stated above; verification belongs to its following results.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs** — Projection (T_X,T_A) -> (X,A) is a homotopy equivalence of pairs.
  - Dependencies: def-skeletal-mapping-telescope-of-a-cw-pair, prop-relative-cw-inclusions-are-cofibrations.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Lemma 2.34, complete telescope deformation pp.138–139; https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Theorem 3F.8, proof pp.314–315.
  - Proof obligation: In X times [0,infinity), retract Y_i=T_X union X times [i,infinity) onto Y_(i+1). Use the CW prism retractions onto X^i times [i,i+1] union X times {i+1}, chosen cellwise to preserve A. Concatenate in time intervals tending to 1; every bounded skeleton becomes stationary, so the weak topology of CW products with an interval proves continuity. Projection of the ambient product is a pair homotopy equivalence. Do not replace this by an unproved weak-equivalence/Whitehead argument.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift** — For a sequence of abelian groups G_i and maps u_i, 0 -> direct-sum G_i --(1-s)--> direct-sum G_i -> colim G_i -> 0 is exact, where s sends the ith summand by u_i to i+1.
  - Dependencies: none.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6, algebraic lemma p.114; https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Theorem 3F.8 proof pp.314–315.
  - Proof obligation: Injectivity follows recursively from the lowest coordinate of a finite-support vector. The cokernel imposes precisely the generating relations of the colimit; no injectivity of u_i is assumed.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit** — For every ordinary theory with arbitrary additivity, colim_i h_n(X^i,A^i) -> h_n(X,A) is an isomorphism. Consequently the same is true for the directed colimit over all finite subcomplex pairs, and this latter identification is natural for arbitrary continuous maps of CW pairs.
  - Dependencies: prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers, lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs, lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift, lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6, theorem and telescope proof pp.114–116; https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Theorem 3F.8 pp.314–315.
  - Proof obligation: Split the telescope into odd and even cylinder subcomplexes, with intersection the disjoint union of stages. MV and arbitrary additivity identify the overlap map with 1-shift after reindexing; its injectivity kills the next boundary and its cokernel is the colimit. Transfer through the explicit telescope homotopy equivalence. Combine with finite-dimensional finite support, and use compact images to prove continuous-map naturality of the finite-subcomplex colimit.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs** — On all CW pairs, a specified coefficient isomorphism determines a unique natural equivalence of ordinary homology theories commuting with boundaries. In particular h with coefficient G is naturally equivalent to singular homology with G.
  - Dependencies: thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs, lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
  - Source support: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6 pp.114–116 and 15§2 pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology p.161.
  - Proof obligation: Extend the finite-dimensional comparison over skeleta and then use finite-subcomplex support for naturality under arbitrary maps. Check compatibility with pair LES and the prescribed coefficient map. Arbitrary additivity is used in the telescope step.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **def-degree-of-a-self-map-of-an-oriented-sphere** — For n>=1 and f:S^n -> S^n, define deg f in Z by f_*[S^n]=(deg f)[S^n] using integral homology and the same chosen orientation generator on source and target. For two separately oriented sphere copies record both choices.
  - Dependencies: cor-homology-of-spheres, prop-relative-homology-is-functorial-for-maps-of-pairs.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree, definition p.134.
  - Convention/definition contract: as stated above; verification belongs to its following results.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-degree-is-homotopy-invariant-and-multiplicative-under-composition** — For sphere self-maps in dimension n>=1, homotopic maps have equal degree and deg(g composed with f)=deg(g)deg(f); a homotopy equivalence has degree +/-1.
  - Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-homotopic-maps-induce-the-same-map-on-singular-homology.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree properties (c),(d), p.134.
  - Proof obligation: Apply the published homotopy and functoriality statements to the chosen integral generator. The converse classification is not part of this proposition.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-suspension-preserves-sphere-map-degree** — If n>=1, deg(Sigma f)=deg f when the suspension sphere is oriented by the natural suspension isomorphism.
  - Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-suspension-isomorphism-in-reduced-singular-homology.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.33, p.137.
  - Proof obligation: Use the natural suspension square. Specify the unreduced two-cone suspension already used by the library, whose sphere is S^(n+1).
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps** — On S^n, n>=1, identity has degree 1, a constant map 0, a single coordinate reflection -1, and the antipodal map (-1)^(n+1).
  - Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-suspension-preserves-sphere-map-degree, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree properties (a),(e),(f) and (b), pp.134–135.
  - Proof obligation: For reflection use the oriented boundary of a symmetric simplex (or the two-arc circle computation followed by suspension); swapping two vertices reverses the fundamental cycle. Coordinate reflections are conjugate by orthogonal coordinate changes, and the antipodal is their product.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-a-map-of-nonzero-degree-between-spheres-is-surjective** — A continuous map between oriented n-spheres, n>=1, with nonzero degree is surjective.
  - Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (b), p.134.
  - Proof obligation: If a point is omitted, give the stereographic homeomorphism of its complement with R^n and linear contraction; the top homology map factors through zero.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **def-local-degree-at-an-isolated-preimage** — For f:S^n -> S^n with n>=1, y=f(x), and x isolated in its fibre, choose U containing no other preimage of y. The map H_n(U,U minus {x};Z) -> H_n(S^n,S^n minus {y};Z) is multiplication by the local degree in the generators restricted from the chosen sphere orientations.
  - Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Local degree construction, pp.135–136.
  - Convention/definition contract: as stated above; verification belongs to its following results.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-local-sphere-orientations-and-finite-puncture-excision** — The local groups at sphere points are Z, their orientation generators are restrictions of the global class, and the local degree is independent of shrinking U. For a finite nonempty set F, H_n(S^n,S^n minus F;Z) is the direct sum of these local groups, and the global class maps to their diagonal tuple.
  - Dependencies: def-local-degree-at-an-isolated-preimage, thm-naturality-of-the-long-exact-sequence-of-a-pair, prop-singular-homology-of-a-disjoint-union-is-the-direct-sum.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Local-degree diagram and Proposition 2.30 proof, pp.135–136.
  - Proof obligation: Use contractibility of a once-punctured sphere and the pair LES, including reduced H_0 for n=1. Excision to disjoint small balls identifies the finite-puncture group. Coordinate projections are inclusions of pairs and send the global class to its restricted local generator; nested excision proves independence.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-global-sphere-degree-is-the-sum-of-local-degrees** — If a value y has finite fibre under f:S^n -> S^n, n>=1, then deg f is the sum of deg_x f over that fibre. The empty fibre contributes zero.
  - Dependencies: lem-local-sphere-orientations-and-finite-puncture-excision, lem-a-map-of-nonzero-degree-between-spheres-is-surjective.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.30, p.136.
  - Proof obligation: Use the commuting global/relative/local square; the incoming global class is diagonal and the outgoing map adds the local multiples. Treat the empty fibre with the omitted-point lemma.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-every-integer-occurs-as-the-degree-of-a-sphere-map** — For each integer d and n>=1 there exists f:S^n -> S^n with deg f=d.
  - Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Example 2.31, p.136.
  - Proof obligation: For |d| positive pinch the complement of interiors of |d| disjoint disks to a point and fold each disk quotient by an orientation-preserving or reversing homeomorphism. A value away from the pinch point has exactly |d| local contributions of the chosen sign. For d=0 use a constant. This is existence, not classification.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-no-retraction-from-a-disk-onto-its-boundary** — For n>=1 there is no continuous retraction D^n -> S^(n-1).
  - Dependencies: cor-homology-of-spheres, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, cor-contractible-nonempty-spaces-have-the-homology-of-a-point.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Theorem 10.7 proof, p.24.
  - Proof obligation: A retraction would split the boundary inclusion on reduced H_(n-1), but the intermediate disk group is zero and the sphere group is Z. Use reduced H_0 when n=1.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction** — For n>=1, a fixed-point-free continuous f:D^n -> D^n would yield a continuous boundary retraction by following the ray from f(x) through x to the boundary.
  - Dependencies: none.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Theorem 10.7 proof, p.24.
  - Proof obligation: Put v=x-f(x), a=<f(x),v>. The boundary point is f(x)+t v with t=(-a+sqrt(a^2+(1-|f(x)|^2)|v|^2))/|v|^2. Prove v!=0, the chosen root t>=1, continuity on the compact ball, and t=1 when x is on the boundary. This extends the published dimension-two lemma.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-brouwer-fixed-point-theorem** — Every continuous self-map of the closed ball D^n has a fixed point for every n>=0.
  - Dependencies: thm-no-retraction-from-a-disk-onto-its-boundary, lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Theorem 10.7 and proof, p.24.
  - Proof obligation: For n>=1 use the ray retraction contradiction. D^0 is a singleton and is handled separately.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere** — For positive even n, S^n has no continuous nowhere-zero tangent vector field. Here a tangent field is a continuous v:S^n -> R^(n+1) with <v(x),x>=0.
  - Dependencies: prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2.28, p.135.
  - Proof obligation: Normalize v and use cos(pi t)x+sin(pi t)v(x), whose norm is one, to homotope identity to antipodal; their degrees differ.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field** — For n=2m-1>=1, identify R^(2m) with C^m; multiplication by i restricts to a continuous unit tangent field x -> ix on S^n.
  - Dependencies: none.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2.28, positive direction p.135.
  - Proof obligation: Check directly that <ix,x>=0 and |ix|=1.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd** — For n>=1, S^n admits a continuous nowhere-zero tangent field if and only if n is odd.
  - Dependencies: thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere, prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2.28, p.135.
  - Proof obligation: Combine the two established directions; no differentiability is needed.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **cor-a-fixed-point-free-sphere-map-has-antipodal-degree** — For n>=1, a fixed-point-free self-map of S^n has degree (-1)^(n+1); therefore every map of any other degree has a fixed point.
  - Dependencies: prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (g), p.134.
  - Proof obligation: The vector (1-t)f(x)-tx never vanishes: a zero at an interior t would force f(x)=x by equal norms. Normalize to homotope f to the antipodal map.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **cor-a-group-acting-freely-on-a-positive-even-sphere-has-at-most-two-elements** — A group acting freely by homeomorphisms on S^(2m), m>=1, has order at most two; if nontrivial it is isomorphic to Z/2.
  - Dependencies: cor-a-fixed-point-free-sphere-map-has-antipodal-degree, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.29, p.135.
  - Proof obligation: The degree homomorphism to {+1,-1} has trivial kernel because every nonidentity group element has no fixed point and hence degree -1. The antipodal action realizes the nontrivial case.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **thm-invariance-of-dimension-for-euclidean-spaces** — For nonnegative integers m,n, a homeomorphism R^m -> R^n implies m=n.
  - Dependencies: cor-homology-of-spheres, cor-homotopic-maps-induce-the-same-map-on-singular-homology.
  - Source support: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Corollaries 10.5 and 10.6, pp.23–24.
  - Proof obligation: Separate dimension zero by cardinality. Puncture corresponding points, translate to zero, and exhibit the radial strong deformation retraction R^k minus {0} -> S^(k-1). Reduced integral homology is supported in exactly degree k-1, including k=1. Do not use invariance of domain.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

### homology-axioms-degree-and-classical-applications-examples (8 items)

- **ex-degree-of-the-circle-power-map** — For every integer d, the map z -> z^d on the counterclockwise oriented unit circle has degree d, including zero and negative exponents.
  - Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Example 2.32, p.137.
  - Proof obligation: For d>0 a regular value has d points, each locally an increasing angular homeomorphism. For d<0 compose with complex conjugation/reflection; for zero use the constant map.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **ex-degree-of-a-coordinate-reflection-on-a-sphere** — A coordinate reflection on S^n has degree -1; exhibit the reversed oriented fundamental cycle in a reflection-invariant triangulation.
  - Dependencies: prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, def-simplicial-chain-groups-and-boundary.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (e), p.134.
  - Proof obligation: Use a symmetric simplex boundary and swap its two opposite vertices; print the cycle/sign calculation rather than simply repeating the proposition.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **ex-degree-of-the-antipodal-map-in-low-dimensions** — The antipodal maps on S^1,S^2,S^3 have degrees +1,-1,+1 respectively, illustrating the parity distinction in the tangent-field obstruction.
  - Dependencies: prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (f) and Theorem 2.28, pp.134–135.
  - Proof obligation: Compute the number of coordinate reflections in each ambient dimension and relate the odd-dimensional cases to x -> ix.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere** — A complex polynomial P of degree d>=1 extends to an oriented sphere self-map of topological degree d; at a finite point a its local degree is the multiplicity of P(z)-P(a), and at infinity its local degree is d.
  - Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.30 and Example 2.32, pp.136–137; https://jirilebl.github.io/ca/ca.pdf — §1.3 stereographic construction and Exercises 1.3.1–1.3.9, pp.19–20; Lemma 5.1.1 and Definition 5.1.2, pp.122–123; Theorem 5.1.3 p.123 read as a stronger comparison, not used. The superseded `https://www.jirka.org/ca/ca.pdf` is retained as `original_url` in coverage.
  - Proof obligation: Construct the sphere model inline: inverse stereographic coordinates send z to (2 Re(z),2 Im(z),|z|^2-1)/(1+|z|^2), and infinity to the north pole; verify continuity and inverse. Use the orientation for which the finite complex coordinate is positive; the infinity coordinate w=1/z has transition derivative multiplication by -1/z^2, hence positive real determinant, or verify its local sign by rotation and positive dilation. Polynomial division gives P(z)-P(a)=(z-a)^m q(z), q(a)!=0. Shrink until |q(z)-q(a)|<|q(a)|, so the straight-line homotopy of q to q(a) never vanishes; this is a homotopy of punctured local pairs to q(a)(z-a)^m. The pair LES identifies its local H_2 action with the angular power map on H_1 of a small circle. Compute the m positive local angular contributions inline, without depending on another B item. At infinity, 1/P(1/w)=w^d/(a_d+a_(d-1)w+...+a_0 w^d), so the same nonvanishing-factor argument gives local degree d. The leading-term growth bound proves extension at infinity. The published polynomial root-multiplicity theorem gives total finite-fibre multiplicity d, and the local-degree sum gives global degree d. This retains all multiplicity conclusions without a holomorphic normal-form or rational-map prerequisite.
  - Checkpoint: repaired after the in-memory overlay exposed undeclared complex-analysis prerequisites; all original claims retained. Next action: validate the repaired graph and author the explicit local calculation.

- **ex-two-homology-theories-with-different-coefficient-groups** — Singular homology with Z and with Z/2 both satisfy the ordinary axioms, but cannot be naturally equivalent because their coefficient groups at a point differ.
  - Dependencies: thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, coefficient discussion p.161; https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1, p.26.
  - Proof obligation: Evaluate any putative equivalence at the point; Z and Z/2 are not isomorphic.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **cex-degree-zero-does-not-imply-a-sphere-map-is-constant** — For every n>=1 there is a nonconstant, even surjective, degree-zero self-map of S^n.
  - Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, prop-every-integer-occurs-as-the-degree-of-a-sphere-map.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Example 2.31, p.136 (signed fold variation).
  - Proof obligation: Pinch two disjoint disks and fold one quotient with local sign +1 and the other with sign -1; outside both disks map to the basepoint. The local-degree sum is zero while each disk quotient surjects. This says nothing against the later nullhomotopy classification.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero** — The unreduced top-homology scalar definition does not apply to S^0: H_0(S^0;Z)=Z^2 and the transposition is a nonscalar swap matrix. Reduced H_0(S^0;Z)=Z DOES admit the separate scalar invariant taking values -1,0,+1.
  - Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-homology-of-spheres, def-reduced-homology-theory-and-augmentation.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree opening paragraph, p.134, excludes n=0.
  - Proof obligation: Print the identity, swap and two constant matrices in the point basis, and their actions on the difference generator. Exclude only the stated unreduced definition, not every possible notion of degree.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

- **cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness** — Let E_n(X)=(product over i>=0 of reduced H_i(X;Z))/(direct sum over i>=0 of reduced H_i(X;Z)) for every n in Z, and define the relative version similarly. E is a reduced theory satisfying homotopy, exactness, excision, dimension with zero coefficients and finite additivity, but not arbitrary additivity. Thus ordinary H direct sum E agrees with H on every finite-dimensional CW pair and has coefficient Z, yet differs on the wedge of one S^i for every i>=1.
  - Dependencies: prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology, lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit.
  - Source support: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — §2.3 Exercise 2, p.165.
  - Proof obligation: Construct boundary maps by shifting the graded family of ordinary connecting maps; finite lost end coordinates vanish in product/sum. Prove exactness of the product/sum functor on graded abelian groups by coordinate lifting and finite-support corrections, rather than asserting that quotients of theories are exact. On finite-dimensional CW pairs only finitely many reduced degrees occur, so E=0. On the infinite wedge its value is product Z/direct-sum Z, nonzero via the all-ones class, while E of each sphere is zero. Pass to pairs by the quotient formulation. This is an explicit counterexample to replacing arbitrary by finite additivity.
  - Checkpoint: included in manifest; final graph/coverage results and unresolved source gates are recorded below. Next authoring action: prove and verify this precise contract, without importing later sphere classification.

## Coverage completion

Coverage now enumerates 72 source-heading/result rows in 7 fetched documents, grouped by author so multiple Hatcher URLs do not masquerade as independent treatments. Hatcher, May and Miller are the independent homology treatments; Lebl is supplementary analytic support for the polynomial example. Added exact Lebl Theorem 5.1.3 p.123 and Exercise 1.3.9 p.20, both read from the fetched PDF. Every row has a concrete disposition. The plan remains 44 A items and 8 B items; no split threshold is crossed. No item proofs have been authored.

## In-memory overlay validation

Executed validate-plan.mjs /dev/stdin with the current spec plus this batch's item lists, passed through stdin without writing a plan or temporary artifact. Exit 1. This additionally validates the scaffold itself; the required on-disk plan command only sees the still-empty batch lists.

    2 ERROR(s):

      [undeclared-prereq] page homology-axioms-degree-and-classical-applications-examples has an item depending on the-identity-theorem-and-the-open-mapping-theorem, which is NOT in the closure of its declared requires — either add it or drop the dependency

      [undeclared-prereq] page homology-axioms-degree-and-classical-applications-examples has an item depending on the-riemann-sphere-and-mobius-transformations, which is NOT in the closure of its declared requires — either add it or drop the dependency

## Polynomial dependency repair

The first in-memory overlay found undeclared prerequisites on the identity/open-mapping page and Riemann-sphere/Mobius page. No requires field was changed. Replaced those edges with the reachable fundamental theorem of algebra multiplicity item and explicit inline stereographic coordinates, polynomial division, nonvanishing-factor homotopy, angular-circle calculation and inversion-chart calculation. The example still proves degree d, every finite local multiplicity, and the local degree at infinity. Lebl's stronger theorem stays in the harvest as already published and read, but is not load-bearing. Expanded the faithfully read Lebl range and harvest by four rows (now 76 total).

Repaired in-memory overlay validate-plan: exit 0. All batch item resolution, dependency closure, intra-page order, B-leaf, prefix, collision and 60-item-cap checks pass.

## Final validator receipt and readiness

Scaffold deliverables: 44 A-page items and 8 B-page items; all 52 objects have explicit deps arrays. All 52 are linked to named source harvest carriers (including supporting_items for decomposed source theorems). Existing canonical IDs and aliases were checked; no new-ID collisions found. The A-page cap is 60, so the 44-item page needs no split. The item contracts, not a target count, determined this size.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-8.coverage.json`: PASS, 1 page, 76 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-8.pages.json`: PASS, 52 items, 0 errors, 0 warnings.
- Required whole-run `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: FAIL, 920 scoped items, 2 errors, 0 warnings. Both are outside this batch: `thm-kernel-range-annihilator-identities` depends on missing `def-weak-star-topology` and `thm-bipolar-closure-for-linear-subspaces`. Do not edit another batch to clear these errors.
- `node tools/manifest-deps.mjs research/frontier-33-batch-*.pages.json`: PASS, 920 items, 0 normalized, 0 errors; no other manifest was changed by normalization.
- Required `node tools/validate-plan.mjs research/plan-spec.json`: PASS, exit 0, with existing redundant-prerequisite warnings. This on-disk spec still has no batch-8 item lists, so it validates page structure only for these pages.
- Additional `node tools/validate-plan.mjs /dev/stdin`, supplied the spec with only this batch's item lists overlaid in memory: PASS after the polynomial dependency repair, exit 0. This is the check that validates our actual item graph, its declared prerequisite closure, intra-page order, B-leaf rule, kind prefixes and size. No plan or scratch file was written.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-8.coverage.json --stamp --timeout-sec 15`: FAIL, exit 1, 0/7 fetch-verified, 0 newly stamped. All seven document URLs in coverage failed with `EAI_AGAIN`. No `fetch_verified` hash metadata was inserted. Web fetch/read evidence is deliberately separate and is not presented as a validator stamp.
- Required URL recovery/liveness command: `node tools/url-sweep.mjs --coverage research/frontier-33-batch-8.coverage.json --recover --fail-on-dead --out /dev/stdout --timeout-ms 5000`: FAIL, exit 1; 0/8 live, 8 failures, 0 recovered, 0 suspect, 1 superseded URL. The eight are the seven document URLs plus the MIT lecture-set contents URL. Every current URL failed with `curl: (6) Could not resolve host`; the hostnames are `pi.math.cornell.edu`, `www.math.uchicago.edu`, `ocw.mit.edu`, and `www.jirka.org`. Output went to stdout, not an unauthorized artifact. The superseded URL is the original Hatcher `AT.pdf`, preserved under original_url; its verified replacement is `AT%2B.pdf`.

The liveness tool's generic “no archived snapshot / re-sourcing is justified” messages are not reliable evidence of unavailable texts here: DNS failed for its probes and archive recovery too. All seven current documents were actually fetched and their recorded passages read through the web reader. Retain these source-grounded harvests rather than deleting results or replacing available texts merely to clear a gate.

**Readiness: BLOCKED by source-fetch/liveness execution and the two external whole-run policy errors.** The batch scaffold and coverage are written and locally validated, but the task's required gates do not all pass. Next necessary action is to rerun the exact source-fetch stamping and URL recovery commands where command-line DNS/network works, and let the owning batch repair the two missing IDs before rerunning whole-run policy. No permission prompt, workflow state change or published-content edit was made.

Mathematical authoring obligations remain precisely those listed per item. In particular: prove subdivision naturality for continuous maps of pairs; preserve subpairs in finite CW simplicial models; establish coefficient incidence action without sphere homotopy classification; check locally stationary telescope homotopies; and prove product/sum exactness in the finite-additivity counterexample. These are deliberately scaffolded lemmas/inline verifications for step 5, not omitted prerequisites or claims of completed proofs. Existing independent reviews and hash gates were not altered.

Final artifact hashes (SHA-256; notes excluded to avoid a self-hash):

- `research/frontier-33-batch-8.pages.json`: `39794fc61867d03ef7fc7eaa494ecdcf657cfa10c02e6514034a13ae3b036b90`

- `research/frontier-33-batch-8.coverage.json`: `60d568bbce7404aaabdf0f800d7325d58b23780e7546b79ff3bfe870485955d7`

## Reharvest-2 checkpoint — 2026-09-07

The assigned reharvest plan, `research/frontier-33-reharvest-plan.json`, has
**zero** `work[]` rows whose `file` is
`research/frontier-33-batch-8.coverage.json`.  It therefore names no dead
source, no orphaned result, and no affected scaffold item for this batch.  No
source was replaced, no `original_url` provenance was changed, and no claim,
convention, dependency, proof strategy, or item ID was changed.  In
particular, the elementary-only constraint on
`ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere` remains: Lebl's
stronger holomorphic normal-form theorem is harvested as already published,
not imported as a prerequisite.

I re-read the task's two design locations.  They are consecutive portions of
the single AT-5 design section (the A-page opening at track line 649 and the
B-page list at line 689), rather than competing amendments.  The unchanged
design requires `cw-complexes-and-cellular-homology`, while the unchanged
`plan-spec.json` requires
`cw-complexes-and-cellular-homology-examples`.  Per the task instruction this
is recorded, not adjudicated here; the specification remains the operative
batch input pending the drift owner's decision.

### Same-document verification and recovery result

- The only source without a mechanical `fetch_verified` record is Jiří Lebl,
  *Guide to Cultivating Complex Analysis*,
  https://www.jirka.org/ca/ca.pdf.  The command-line full-text stamper was
  run with `--stamp --timeout-sec 30` and failed only for that URL with
  `EAI_AGAIN`; it preserved the coverage file rather than inventing a stamp.
  The other six source records already carry full-text stamps.
- The browser independently opened that **same** URL on 2026-09-07 as a
  304-page PDF.  Its table of contents names §1.3 “The Riemann sphere” and
  §5.1 “Zeros of holomorphic functions”; the fetched text contains Exercise
  1.3.9 at PDF page 19 (the nonconstant-polynomial limit at infinity), Lemma
  5.1.1 and Definition 5.1.2 at PDF page 121 (factorisation at an isolated
  zero and its multiplicity), and Theorem 5.1.3 with proof at PDF page 122.
  Thus the existing Lebl harvest is a verified same-document reading; the
  command-line failure is not a basis to re-source it.  Browser evidence is
  deliberately not represented as the validator's hash stamp.
- `url-sweep.mjs --recover --fail-on-dead` was run for this coverage with its
  output in `/tmp/frontier-33-batch-8-reharvest-liveness.json`.  It reported
  0/8 live and 0 recovered because command-line DNS could not resolve every
  current host (`ocw.mit.edu`, `pi.math.cornell.edu`,
  `www.math.uchicago.edu`, and `www.jirka.org`); its archive probes share that
  failed transport.  The generic “no archived snapshot” lines are therefore
  not a confirmation that a same-document URL or archive copy is unavailable.
  No different treatment was selected.
- The run's existing liveness report
  `research/frontier-33-url-liveness.json` (generated
  2026-09-06T19:51:04.535Z) records each of these current reader-facing URLs
  as live.  With that report, strict batch source-backing passes for all 30
  included-result carriers.  Against the new temporary all-DNS-failure report
  it necessarily reports those same 30 carriers as lost; that is a local
  resolver failure, not a new orphaned-result finding or a reason to delete
  coverage.

### Validator receipt

- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-8.coverage.json` — **PASS**: 1 page, 76 harvested results, 0 errors, 0 warnings.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-8.coverage.json --liveness research/frontier-33-url-liveness.json --require-verified` — **PASS**: 30 included-result carriers remain backed.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-8.coverage.json --stamp --timeout-sec 30` — **BLOCKED**: 6/7 stamped; Lebl failed only with `EAI_AGAIN` and no coverage row was altered.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-8.coverage.json --recover --fail-on-dead --out /tmp/frontier-33-batch-8-reharvest-liveness.json --timeout-ms 5000` — **BLOCKED** by the command-line DNS failure described above; no archive absence or document death was established.

No reharvest item was eligible for repair in this dispatch.  The remaining
operational obligation is to rerun the mechanical Lebl fetch stamp and the
batch liveness/backing sequence in an environment with working command-line
DNS; preserve this harvest and its source URLs unless that run establishes an
actual document failure.  The coverage file remains unchanged by this
checkpoint (current SHA-256
`5006b21bbba015c87cd00c73cce73080dfd20a0506691adcfbbd8cc50c4eddfd`).

## Full-text host recovery (2026-09-07)

Lebl's author-controlled GitHub mirror,
`https://jirilebl.github.io/ca/ca.pdf`, is byte-identical to the prior
`www.jirka.org` PDF and is now retained with that prior URL as provenance.
The repository full-text verifier stamped the 2,058,822-byte PDF with SHA-256
prefix `d48d49f1e534ba4e`. No locator, harvest disposition, claim, dependency,
or proof plan changed.

## Step-3 fix pass — 2026-09-07

- **Finding id: none issued.** The stable group-`d` review's “Batch 8” section
  states that no scaffold claim, item id, prerequisite, page order, or coverage
  record required repair, and
  `research/frontier-33-alpha-d-step3-verdicts.json` records
  `homology-axioms-degree-and-classical-applications` as `sufficient`.
  **Disposition:** no reviewer finding exists to apply or push back on.
  **Evidence:** the review independently checked the 44 A and 8 B records,
  all 76 harvest rows, and the current plan dependency route. **Changed
  scaffold record:** none for a Step-3 finding.

- **Unnumbered source-record consistency repair (not a reviewer finding).** The
  current coverage source for Lebl is the fetch-verified author-controlled
  mirror `https://jirilebl.github.io/ca/ca.pdf`, with the former
  `https://www.jirka.org/ca/ca.pdf` retained as `original_url`. The polynomial
  example's manifest reference and its authoring checkpoint still named the
  former URL. **Disposition:** applied. **Evidence:**
  `source-fetch-check` reports all 7/7 coverage documents fetch-verified; the
  mirror record is a 2,058,822-byte PDF with SHA-256 prefix
  `d48d49f1e534ba4e`, and its exact retained locator is §1.3, pp.19–20, plus
  Lemma 5.1.1, Definition 5.1.2, and Theorem 5.1.3, pp.122–123. **Changed
  scaffold records:** the sole Lebl reference in
  `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere`, and its source
  checkpoint above, now name the verified mirror. The claim, conventions,
  `deps`, proof strategy, coverage disposition, and retained original-URL
  provenance are unchanged.

Source-grounding remains the two independent homology treatments required by
the task: Hatcher, *Algebraic Topology*, Chapter 2 “Degree” pp.134–137 and
“Axioms for Homology” pp.160–162, and May, *A Concise Course in Algebraic
Topology*, Chapter 14 §§3–6 pp.109–116 and Chapter 15 §2 pp.119–120. The
checked supplementary passages remain Miller's Lecture 10, Theorem 10.7 and
Corollaries 10.5–10.6, pp.23–24, and Lebl at the locator above. Hatcher's
degree argument supplies the degree, tangent-field, local-degree, and free
action assertions; May supplies the CW-pair and colimit uniqueness route;
Miller supplies the homological Brouwer and dimension arguments; and Lebl is
supporting analytic background only for the explicit polynomial example.

Validation after the repair:

- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-8.coverage.json` — PASS, 7/7 source records.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-8.coverage.json` — PASS, 1 page, 76 results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-8.pages.json` — PASS, 52 scoped items, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — PASS, 923 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-33-batch-8.pages.json` — PASS, 52 items, 0 normalizations, 0 errors; every item explicitly retains a `deps` array.
- `node tools/splice-plan.mjs --run frontier-33 --batch 8 --dry-run` — PASS, 2 pages and 52 items, with no write.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` — PASS; declared order is acyclic and consistent (existing redundant-prerequisite warnings only).
- An in-memory batch-8 overlay on the current plan also passes `validate-plan`: no item cycle, forward dependency, B-page dependency, unresolved id, or 60-item-cap failure.

The A page remains at 44 items, so no page split is warranted. No published
content, plan structure, workflow state, or another batch was edited. The next
action is authoring the retained 52-item route, without importing the later
sphere-map classification.

## Step-5 authoring

Dispatch: frontier-33 / author-batch-8. Read the required batch artifacts and group-d verdict/review. Proof-contract output was absent and is being created. Preserve the independent reviews, manifest claim scope and all owner-managed state. Every new item and both pages remain draft. The source browser opened Hatcher chapter 2, revised full book and chapter 4, May, and both Miller lectures; the Lebl mirror failed in the browser, while the recorded original author URL opened the complete 304-page text. Shell retrieval failed with DNS error 6. No fetch stamps were changed. Source passages and exact current dependency statements are being read before their use. The two design locations are consecutive A/B portions of AT-5; the spec's companion prerequisite remains controlling.

### Authored `def-unreduced-homology-theory-on-cw-pairs`

- Claim/conventions: A **CW pair** is $(X,A)$ with $A$ a CW subcomplex of $X$, as in [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]. Morphisms are all continuous maps of pairs, not just cellular maps. An **ordinary unreduced homology theory** assigns covariant functors $h_n$ from CW pairs to abelian groups, for every $n\in\mathbb Z$, and natural homomorphisms $\partial:h_n(X,A)\to h_{n-1}(A)$, where $h_n(X)=h_n(X,\varnothing)$, satisfying:  - Homotopic maps of pairs induce equal homomorphisms. - The inclusion maps and $\partial$ form an exact sequence $\cdots\to h_n(A)\to h_n(X)\to h_n(X,A)\to h_{n-1}(A)\to\cdots$. - For CW subcomplexes $U,V$ of $X=U\cup V$, inclusion induces $h_n(U,U\cap V)\cong h_n(X,V)$. - For a point $*$, $h_n(*)=0$ when $n\ne0$; write $G=h_0(*)$. - For every set-indexed family of CW pairs, including the empty family, the inclusions induce $\bigoplus_\alpha h_n(X_\alpha,A_\alpha)\cong h_n(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha)$.  Thus $h_n(\varnothing)=0$. No finite-dimensionality or finite-cell restriction is implicit.
- Dependencies: def-skeleta-cw-subcomplex-and-relative-cw-complex.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1, printed pp.25–26; https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§4, pp.110–111, CW-pair formulation.
- Provenance: statement ai-altered; proof not-applicable. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; definition only. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-singular-homology-satisfies-homotopy-exactness-and-excision`

- Claim/conventions: For every fixed abelian group $G$, singular homology $H_n(-,-;G)$, extended by zero in negative degrees, satisfies homotopy invariance, pair exactness, naturality of the connecting maps, and CW excision in [[def-unreduced-homology-theory-on-cw-pairs]].
- Dependencies: def-unreduced-homology-theory-on-cw-pairs, cor-homotopic-maps-induce-the-same-map-on-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-naturality-of-the-long-exact-sequence-of-a-pair, thm-excision-for-singular-homology, prop-relative-cw-inclusions-are-cofibrations.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1 and ensuing verification, pp.25–26; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, pp.160–162.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-singular-homology-satisfies-dimension-and-arbitrary-additivity`

- Claim/conventions: For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$.
- Dependencies: def-unreduced-homology-theory-on-cw-pairs, thm-singular-homology-satisfies-homotopy-exactness-and-excision, def-singular-chain-complex-and-singular-homology, prop-singular-homology-of-a-disjoint-union-is-the-direct-sum.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1, pp.25–26.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `def-reduced-homology-theory-and-augmentation`

- Claim/conventions: For an unreduced theory $h$ and a nonempty based CW space $(X,x_0)$ with $x_0$ a vertex, set $$\widetilde h_n(X)=\ker\bigl(h_n(X)\xrightarrow{p_*}h_n(*)\bigr).$$ The basepoint inclusion $s$ satisfies $p\circ s=\mathrm{id}$ and splits this augmentation. The underlying ordinary theory is as in [[def-unreduced-homology-theory-on-cw-pairs]].  Independently, a **reduced ordinary theory** on based CW spaces consists of homotopy-invariant covariant functors $\widetilde h_n$, natural suspension isomorphisms $\sigma:\widetilde h_n(X)\to\widetilde h_{n+1}(\Sigma X)$, exact cofiber sequences, and arbitrary wedge additivity. More explicitly, for every based CW inclusion $A\hookrightarrow X$, $\widetilde h_n(A)\to\widetilde h_n(X)\to\widetilde h_n(X/A)$ is exact; the boundary in the extended sequence is the cofiber map to $\Sigma A$ followed by $\sigma^{-1}$. The suspension here is reduced suspension. The dimension axiom is $\widetilde h_n(S^0)=0$ for $n\ne0$, with $\widetilde h_0(S^0)=G$. Wedge additivity includes the empty wedge $*$ and gives $\widetilde h_n(*)=0$.  The empty space is not a based object. If its reduced groups are mentioned, this library uses $\widetilde H_n(\varnothing;G)=0$ in all degrees, as in [[def-zero-simplex-augmentation-and-reduced-singular-homology]]. The augmented-chain convention $\widetilde H_{-1}(\varnothing;G)=G$ is a different extension and is not used here.
- Dependencies: def-unreduced-homology-theory-on-cw-pairs, def-zero-simplex-augmentation-and-reduced-singular-homology.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§4, pp.110–111; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, pp.160–161.
- Provenance: statement ai-altered; proof not-applicable. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; definition only. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `def-coefficient-normalized-morphism-of-ordinary-homology-theories`

- Claim/conventions: For ordinary theories $h,k$ as in [[def-unreduced-homology-theory-on-cw-pairs]], a **morphism** $\eta:h\to k$ consists of homomorphisms $\eta_n(X,A):h_n(X,A)\to k_n(X,A)$, natural for all maps of CW pairs and all $n\in\mathbb Z$, satisfying $\partial^k\eta_n=\eta_{n-1}\partial^h$.  For a specified homomorphism $u:h_0(*)\to k_0(*)$, the morphism is **coefficient-normalized by $u$** if $\eta_0(*)=u$. A comparison equivalence has every component invertible and is normalized by a specified coefficient isomorphism. Neither the existence nor uniqueness of such an extension is part of this definition.
- Dependencies: def-unreduced-homology-theory-on-cw-pairs.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, pp.119–120, natural comparison and boundary compatibility; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, p.161, uniqueness with coefficients.
- Provenance: statement ai-altered; proof not-applicable. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; definition only. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `def-skeletal-mapping-telescope-of-a-cw-pair`

- Claim/conventions: For a CW pair $(X,A)$ let $X^i$ be its $i$-skeleton and $A^i=A\cap X^i$, following [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]. Its **skeletal mapping telescope** is the CW pair $$T_X=\bigcup_{i\ge0}X^i\times[i,\infty),\qquad T_A=\bigcup_{i\ge0}A^i\times[i,\infty).$$ Give $[0,\infty)$ vertices at the nonnegative integers and use the CW weak topology on these subcomplexes of $X\times[0,\infty)$. Projection $p(x,t)=x$ defines a continuous map $(T_X,T_A)\to(X,A)$. The telescope of the empty space is empty.
- Dependencies: def-skeleta-cw-subcomplex-and-relative-cw-complex.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Lemma 2.34, telescope construction p.138; https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6, telescope construction pp.114–116.
- Provenance: statement ai-altered; proof not-applicable. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; definition only. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `def-degree-of-a-self-map-of-an-oriented-sphere`

- Claim/conventions: Let $n\ge1$. Choose a generator $[S^n]$ of $H_n(S^n;\mathbb Z)\cong\mathbb Z$, using [[cor-homology-of-spheres]]. For a continuous self-map $f:S^n\to S^n$, its **degree** is the unique integer satisfying $$f_*[S^n]=\deg(f)[S^n].$$ The induced map is furnished by [[prop-relative-homology-is-functorial-for-maps-of-pairs]] with empty subspaces. Replacing the same generator in source and target by its negative does not change the integer. For a map between separately oriented copies of $S^n$, use their separately specified generators; reversing just one orientation changes the sign. The unreduced definition here is restricted to $n\ge1$.
- Dependencies: cor-homology-of-spheres, prop-relative-homology-is-functorial-for-maps-of-pairs.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree, definition p.134.
- Provenance: statement literature-derived; proof not-applicable. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; definition only. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition`

- Claim/conventions: For $n\ge1$ and continuous sphere self-maps $f,g$, homotopic maps have the same degree and $\deg(g\circ f)=\deg(g)\deg(f)$. Every homotopy equivalence $S^n\to S^n$ has degree $1$ or $-1$.
- Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-homotopic-maps-induce-the-same-map-on-singular-homology.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree properties (c),(d), p.134.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-suspension-preserves-sphere-map-degree`

- Claim/conventions: For $n\ge1$ and $f:S^n\to S^n$, let $\Sigma f$ be its two-cone (unreduced) suspension. Orient $\Sigma S^n\cong S^{n+1}$ by the natural suspension isomorphism. Then $\deg(\Sigma f)=\deg(f)$.
- Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-suspension-isomorphism-in-reduced-singular-homology.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.33, p.137.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`

- Claim/conventions: On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively.
- Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-suspension-preserves-sphere-map-degree, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree properties (a),(e),(f) and (b), pp.134–135.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-a-map-of-nonzero-degree-between-spheres-is-surjective`

- Claim/conventions: A continuous map between oriented $n$-spheres, $n\ge1$, whose degree is nonzero must be surjective.
- Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (b), p.134.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `def-local-degree-at-an-isolated-preimage`

- Claim/conventions: Let $f:S^n\to S^n$ be continuous, $n\ge1$, with oriented source and target as in [[def-degree-of-a-self-map-of-an-oriented-sphere]]. Suppose $y=f(x)$ and $x$ is isolated in $f^{-1}(y)$. Choose an open neighborhood $U$ of $x$ with $U\cap f^{-1}(y)=\{x\}$. The map of pairs $$(U,U\setminus\{x\})\longrightarrow(S^n,S^n\setminus\{y\})$$ induces a homomorphism between infinite cyclic groups. Its integer multiplier in the generators restricted from the two global orientation classes is the **local degree** $\deg_x f$.  Excision [[thm-excision-for-singular-homology]] identifies the domain local group with $H_n(S^n,S^n\setminus\{x\};\mathbb Z)$; the pair sequence [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies the global-to-local identification. The following lemma establishes these identifications and independence of the neighborhood.
- Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Local degree construction, pp.135–136.
- Provenance: statement literature-derived; proof not-applicable. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; definition only. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-local-sphere-orientations-and-finite-puncture-excision`

- Claim/conventions: For $n\ge1$, $H_n(S^n,S^n\setminus\{x\};\mathbb Z)\cong\mathbb Z$, with generator the restriction of the global sphere orientation. The local degree in [[def-local-degree-at-an-isolated-preimage]] is independent of shrinking its neighborhood. For every finite nonempty $F\subset S^n$, $$H_n(S^n,S^n\setminus F;\mathbb Z)\cong\bigoplus_{x\in F}H_n(S^n,S^n\setminus\{x\};\mathbb Z),$$ and the global orientation maps to the tuple of local orientation generators.
- Dependencies: def-local-degree-at-an-isolated-preimage, thm-naturality-of-the-long-exact-sequence-of-a-pair, prop-singular-homology-of-a-disjoint-union-is-the-direct-sum.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Local-degree diagram and Proposition 2.30 proof, pp.135–136.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-global-sphere-degree-is-the-sum-of-local-degrees`

- Claim/conventions: Let $f:S^n\to S^n$ be continuous, $n\ge1$, with source and target orientations fixed. If $f^{-1}(y)$ is finite, then $$\deg(f)=\sum_{x\in f^{-1}(y)}\deg_x f.$$ The sum over an empty fibre is $0$.
- Dependencies: lem-local-sphere-orientations-and-finite-puncture-excision, lem-a-map-of-nonzero-degree-between-spheres-is-surjective.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.30, p.136.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-every-integer-occurs-as-the-degree-of-a-sphere-map`

- Claim/conventions: For every $d\in\mathbb Z$ and $n\ge1$ there exists a continuous self-map of $S^n$ of degree $d$.
- Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Example 2.31, p.136.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-no-retraction-from-a-disk-onto-its-boundary`

- Claim/conventions: For every integer $n\ge1$, there is no continuous retraction $D^n\to S^{n-1}$ of the closed unit ball onto its boundary.
- Dependencies: cor-homology-of-spheres, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, cor-contractible-nonempty-spaces-have-the-homology-of-a-point.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Theorem 10.7 proof, p.24.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction`

- Claim/conventions: For $n\ge1$, a continuous fixed-point-free map $f:D^n\to D^n$ would produce a continuous retraction $r:D^n\to S^{n-1}$ by following the ray from $f(x)$ through $x$ to the boundary.
- Dependencies: none.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Theorem 10.7 proof, p.24.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-brouwer-fixed-point-theorem`

- Claim/conventions: Every continuous map $f:D^n\to D^n$ of the closed unit ball has a fixed point, for every integer $n\ge0$.
- Dependencies: thm-no-retraction-from-a-disk-onto-its-boundary, lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Theorem 10.7 and proof, p.24.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere`

- Claim/conventions: For every positive even integer $n$, no continuous map $v:S^n\to\mathbb R^{n+1}$ can satisfy both $\langle v(x),x\rangle=0$ and $v(x)\ne0$ for all $x$. Thus an even-dimensional sphere has no continuous nowhere-zero tangent vector field.
- Dependencies: prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2.28, p.135.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field`

- Claim/conventions: For $n=2m-1\ge1$, identify $\mathbb R^{2m}$ with $\mathbb C^m$. The map $v:S^n\to\mathbb R^{2m}$ given by $v(x)=ix$ is a continuous unit tangent vector field.
- Dependencies: none.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2.28, positive direction p.135.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd`

- Claim/conventions: For every integer $n\ge1$, $S^n$ admits a continuous nowhere-zero tangent vector field if and only if $n$ is odd.
- Dependencies: thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere, prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2.28, p.135.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `cor-a-fixed-point-free-sphere-map-has-antipodal-degree`

- Claim/conventions: For $n\ge1$, any continuous fixed-point-free map $f:S^n\to S^n$ has degree $(-1)^{n+1}$. Consequently, a self-map of any other degree has a fixed point.
- Dependencies: prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (g), p.134.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `cor-a-group-acting-freely-on-a-positive-even-sphere-has-at-most-two-elements`

- Claim/conventions: If a group $\Gamma$ acts freely by homeomorphisms on $S^{2m}$ with $m\ge1$, then $|\Gamma|\le2$. If it is nontrivial, it is isomorphic to $\mathbb Z/2\mathbb Z$. The antipodal action realizes the nontrivial case.
- Dependencies: cor-a-fixed-point-free-sphere-map-has-antipodal-degree, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.29, p.135.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-invariance-of-dimension-for-euclidean-spaces`

- Claim/conventions: For nonnegative integers $m,n$, a homeomorphism $\mathbb R^m\to\mathbb R^n$ implies $m=n$.
- Dependencies: cor-homology-of-spheres, cor-homotopic-maps-induce-the-same-map-on-singular-homology.
- Sources: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Corollaries 10.5 and 10.6, pp.23–24.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs`

- Claim/conventions: Ordinary unreduced theories on CW pairs and reduced ordinary theories on based CW spaces with vertex basepoints determine one another, naturally and compatibly with morphisms and coefficients. For $A\ne\varnothing$ the correspondence gives $h_n(X,A)\cong\widetilde h_n(X/A)$; for $A=\varnothing$ it gives $h_n(X)\cong\widetilde h_n(X_+)$, where $X_+=X\sqcup\{*\}$.  Under this correspondence, pair boundaries are cofiber boundaries followed by inverse suspension, and arbitrary disjoint-sum additivity corresponds to arbitrary wedge additivity. For a CW triple $B\subset A\subset X$ there is a natural exact sequence $\cdots\to h_n(A,B)\to h_n(X,B)\to h_n(X,A)\to h_{n-1}(A,B)\to\cdots$, whose last map is the pair boundary followed by $h_{n-1}(A)\to h_{n-1}(A,B)$.
- Dependencies: def-unreduced-homology-theory-on-cw-pairs, def-reduced-homology-theory-and-augmentation, prop-relative-cw-inclusions-are-cofibrations.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§4, CW definition and theorem, pp.110–111; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, pp.160–162.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group`

- Claim/conventions: Let $h$ be an ordinary theory with coefficient group $G=h_0(*)$. For every $n\ge0$ and $k\in\mathbb Z$, $$h_k(D^n,S^{n-1})\cong\begin{cases}G&k=n,\\0&k\ne n.\end{cases}$$ At $n=0$ the pair means $(*,\varnothing)$. Also $\widetilde h_k(S^n)\cong G$ for $k=n$ and zero otherwise, including $n=0$. Choose the disk identifications by ordered orientations and iterated cone boundaries, so they commute with these boundaries.
- Dependencies: prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§3, suspension corollaries, p.109; 15§2 p.120.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair`

- Claim/conventions: For a CW pair $(X,A)$ and an ordinary theory $h$ with coefficient $G$, put $F_{-1}=A$ and $F_r=A\cup X^r$ for $r\ge0$. Set $$C_r^h(X,A)=h_r(F_r,F_{r-1})\quad(r\ge0),\qquad C_r^h=0\quad(r<0).$$ Each $C_r^h$ is the direct sum of copies of $G$ indexed by the relative $r$-cells. Define $d_0=0$ and for $r\ge1$ let $d_r$ be the triple boundary to $h_{r-1}(F_{r-1},A)$ followed by its map to $h_{r-1}(F_{r-1},F_{r-2})$. Then $d_{r-1}d_r=0$, naturally for cellular maps of CW pairs.
- Dependencies: lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group, prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs, def-skeleta-cw-subcomplex-and-relative-cw-complex.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, definition of C_n and d, p.119.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology`

- Claim/conventions: For every finite-dimensional CW pair $(X,A)$ and ordinary theory $h$, there is a canonical isomorphism $$h_n(X,A)\cong H_n(C_*^h(X,A))$$ for every integer $n$, natural for cellular maps. It is the skeletal lift isomorphism described below and commutes with the homology connecting maps of pairs. The number of cells need not be finite.
- Dependencies: lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, second theorem and full exact-diagram proof, pp.119–120.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-oriented-simplex-comparison-for-an-ordinary-homology-theory`

- Claim/conventions: For finite simplicial pairs $(K,L)$ and any ordinary theory $h$ with coefficient group $G$, ordered simplex classes identify $$C_*^h(K,L)\cong C_*^{\mathrm{simp}}(K,L;\mathbb Z)\otimes G,$$ with the alternating face differential. Consequently they give a coefficient-normalized isomorphism $h_n(|K|,|L|)\to H_n(|K|,|L|;G)$, natural for simplicial maps and compatible with pair boundaries. No flatness of $G$ is assumed.
- Dependencies: lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology, def-simplicial-chain-groups-and-boundary, lem-an-odd-permutation-reverses-oriented-simplex-sign, thm-simplicial-and-singular-homology-agree-for-simplicial-complexes.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, both cellular comparison theorems, pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — §2C, Theorem 2C.1 setting, pp.177–179.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-finite-simplicial-approximation-for-homology-comparison`

- Claim/conventions: For finite simplicial pairs $(K,L)$ and $(P,Q)$, every continuous map $f:(|K|,|L|)\to(|P|,|Q|)$ is homotopic through maps of pairs to a simplicial map $(\operatorname{sd}^r K,\operatorname{sd}^r L)\to(P,Q)$ for some $r\ge0$.
- Dependencies: def-simplicial-map-and-its-geometric-realization, lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero, thm-lebesgue-number-lemma.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — §2C, Lemma 2C.2 and Theorem 2C.1, pp.177–179.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-subdivision-compatible-continuous-polyhedral-homology-comparison`

- Claim/conventions: The ordered-simplex comparison for an ordinary homology theory on finite simplicial pairs is unchanged by finite subdivision. It is natural for every continuous map of finite simplicial pairs and commutes with pair connecting homomorphisms.
- Dependencies: lem-oriented-simplex-comparison-for-an-ordinary-homology-theory, lem-finite-simplicial-approximation-for-homology-comparison.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, exact-diagram naturality and boundary compatibility, pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2C.1 and proof, pp.177–179.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts`

- Claim/conventions: If $A\subset X$ is a CW subcomplex and its inclusion is a homotopy equivalence, then $X$ strongly deformation retracts onto $A$. Moreover, if $(Y,B)$ is a CW pair and $u_0,u_1:B\to Z$ are homotopic, then the adjunction spaces $Z\cup_{u_0}Y$ and $Z\cup_{u_1}Y$ are homotopy equivalent relative to their common subspace $Z$.
- Dependencies: prop-relative-cw-inclusions-are-cofibrations.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Propositions 0.18–0.19 and Corollary 0.20, complete proofs pp.16–17.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models`

- Claim/conventions: Every finite CW pair $(X,A)$ is homotopy equivalent as a pair to a finite simplicial pair $(|K|,|L|)$. In particular there are maps of pairs in both directions whose composites are homotopic to the identities through maps preserving the designated subspaces.
- Dependencies: lem-finite-simplicial-approximation-for-homology-comparison, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, def-geometric-realization-of-an-abstract-simplicial-complex.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2C.5, construction and proof pp.182–184.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-coefficient-comparison-on-finite-cw-pairs`

- Claim/conventions: For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence on finite CW pairs normalized by $u$ and commuting with connecting homomorphisms.
- Dependencies: lem-subdivision-compatible-continuous-polyhedral-homology-comparison, lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models, def-coefficient-normalized-morphism-of-ordinary-homology-theories, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, uniqueness theorem pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Theorem 2C.5 pp.182–184; Axioms for Homology p.161.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory`

- Claim/conventions: Let $n\ge0$ and $u:S^n\to S^n$ be continuous. If $u_*$ on $\widetilde H_n(S^n;\mathbb Z)$ is multiplication by $d$, then $u_*$ on $\widetilde h_n(S^n)\cong G$ for every ordinary theory $h$ is $d\,\mathrm{id}_G$. The identifications use the same oriented sphere generator; for $n=0$ use the difference of the two point classes.
- Dependencies: lem-coefficient-comparison-on-finite-cw-pairs, lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group, cor-homology-of-spheres.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, first theorem and coefficient paragraph p.119; https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf — Theorem 4.59 homology argument, printed pp.399–401 (in chapter 4); alternative simplicial route specified in notes.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients`

- Claim/conventions: For a CW pair $(X,A)$, an ordinary theory $h$ with coefficient $G$, and chosen cell orientations, the complex $C_*^h(X,A)$ is canonically $$C_*^{\mathrm{cell}}(X,A;\mathbb Z)\otimes G.$$ Its differential is the integral incidence matrix acting on $G$. In degree one the entries are signed terminal-minus-initial endpoints. The direct-sum matrices have finite support in each column.
- Dependencies: lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair, lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory, def-incidence-number-of-two-cw-cells, thm-cellular-boundary-is-the-incidence-degree-matrix.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, first theorem and arbitrary-coefficient paragraph p.119.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support`

- Claim/conventions: For a finite-dimensional CW pair $(X,A)$ and ordinary $h$, the canonical map $$\underset{K\subset X\text{ finite subcomplex}}{\operatorname{colim}}\,h_n(K,K\cap A)\longrightarrow h_n(X,A)$$ is an isomorphism for every integer $n$.
- Dependencies: lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, cellular calculation pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Lemma 2.34 p.138, finite support reasoning.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage`

- Claim/conventions: Let $\eta:h\to k$ be an existing morphism of ordinary theories, natural on CW pairs and commuting with connecting maps. For a CW skeleton stage $F_{r-1}\subset F_r$, if $\eta_q(F_{r-1})$ and $\eta_q(F_r,F_{r-1})$ are isomorphisms for every $q$, then $\eta_q(F_r)$ is an isomorphism for every $q$.
- Dependencies: def-coefficient-normalized-morphism-of-ordinary-homology-theories, lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair, thm-five-lemma-for-a-morphism-of-long-exact-sequences.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, skeletal exactness pp.119–120; https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf — Proposition 9.6, opening p.22.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs`

- Claim/conventions: For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique boundary-compatible natural equivalence on finite-dimensional CW pairs normalized by $u$. Infinitely many cells in bounded dimensions are allowed.
- Dependencies: lem-coefficient-comparison-on-finite-cw-pairs, lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support, lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 15§2, pp.119–120.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers`

- Claim/conventions: Let $X=U\cup V$ be a cover by CW subcomplexes and $W=U\cap V$. Every ordinary homology theory has a natural exact sequence $$\cdots\to h_n(W)\xrightarrow{(i_*,-j_*)}h_n(U)\oplus h_n(V)\xrightarrow{a_*+b_*}h_n(X)\xrightarrow{\Delta}h_{n-1}(W)\to\cdots,$$ where all four maps $i,j,a,b$ are inclusions. The same sequence holds for a CW pair $(X,C)$ covered by $(U,C\cap U)$ and $(V,C\cap V)$, with the corresponding relative groups.
- Dependencies: prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, Mayer–Vietoris derivation p.162; https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Lemma 11.6, pp.27–28; https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§5, first Mayer–Vietoris theorem pp.112–113.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs`

- Claim/conventions: For every CW pair $(X,A)$, the skeletal telescope projection $p:(T_X,T_A)\to(X,A)$ is a homotopy equivalence of pairs.
- Dependencies: def-skeletal-mapping-telescope-of-a-cw-pair, prop-relative-cw-inclusions-are-cofibrations.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Lemma 2.34, complete telescope deformation pp.138–139; https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Theorem 3F.8, proof pp.314–315.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift`

- Claim/conventions: For any sequence of abelian groups $G_0\xrightarrow{u_0}G_1\xrightarrow{u_1}\cdots$, let $D=\bigoplus_{i\ge0}G_i$ and let $s:D\to D$ send the $i$th coordinate by $u_i$ into coordinate $i+1$. Then $$0\longrightarrow D\xrightarrow{1-s}D\longrightarrow\operatorname{colim}_iG_i\longrightarrow0$$ is exact, where the last map sums the canonical maps to the colimit. The maps $u_i$ need not be injective.
- Dependencies: none.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6, algebraic lemma p.114; https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Theorem 3F.8 proof pp.314–315.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit`

- Claim/conventions: For every ordinary theory $h$ with arbitrary additivity and every CW pair $(X,A)$, the canonical map $$\operatorname{colim}_{i\ge0}h_n(X^i,A^i)\longrightarrow h_n(X,A)$$ is an isomorphism. So is the canonical colimit over finite subcomplex pairs $(K,K\cap A)$ of $X$. The latter identification is natural for every continuous map of CW pairs.
- Dependencies: prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers, lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs, lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift, lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6, theorem and telescope proof pp.114–116; https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf — Theorem 3F.8 pp.314–315.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs`

- Claim/conventions: For any two ordinary homology theories $h,k$ on all CW pairs and a specified coefficient isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence $h\to k$ normalized by $u$ and commuting with connecting homomorphisms. In particular, a theory with coefficient group $G$ is naturally equivalent to singular homology with coefficients $G$, normalized by $\mathrm{id}_G$. Arbitrary additivity is part of the hypotheses.
- Dependencies: thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs, lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity.
- Sources: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf — 14§6 pp.114–116 and 15§2 pp.119–120; https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology p.161.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `ex-degree-of-the-circle-power-map`

- Claim/conventions: For every $d\in\mathbb Z$, the continuous map $p_d:S^1\to S^1$, $p_d(z)=z^d$, has degree $d$ when both circles have their counterclockwise orientations. This includes $d=0$ and negative exponents.
- Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Example 2.32, p.137.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `ex-degree-of-a-coordinate-reflection-on-a-sphere`

- Claim/conventions: For $n\ge1$, a coordinate reflection $r:S^n\to S^n$ has degree $-1$. A reflection-invariant triangulation exhibits this sign by sending its oriented fundamental cycle to its negative.
- Dependencies: prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, def-simplicial-chain-groups-and-boundary.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (e), p.134.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `ex-degree-of-the-antipodal-map-in-low-dimensions`

- Claim/conventions: The antipodal maps on $S^1,S^2,S^3$ have degrees $+1,-1,+1$, respectively. Of these three spheres, exactly $S^1$ and $S^3$ admit a continuous nowhere-zero tangent vector field.
- Dependencies: prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree property (f) and Theorem 2.28, pp.134–135.
- Provenance: statement literature-derived; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere`

- Claim/conventions: Let $P(z)=a_dz^d+\cdots+a_0\in\mathbb C[z]$, with $d\ge1$ and $a_d\ne0$. The map $\widehat P:\mathbb C\cup\{\infty\}\to\mathbb C\cup\{\infty\}$ defined by $\widehat P|_{\mathbb C}=P$ and $\widehat P(\infty)=\infty$ is a continuous self-map of an oriented $2$-sphere and has degree $d$. At each finite $a$, its local degree is the multiplicity of the zero $a$ of $P(z)-P(a)$; its local degree at infinity is $d$. Use the complex orientation in both source and target.
- Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Proposition 2.30 and Example 2.32, pp.136–137; https://jirilebl.github.io/ca/ca.pdf — §1.3 stereographic construction and Exercises 1.3.1–1.3.9, pp.19–20; Lemma 5.1.1 and Definition 5.1.2, pp.122–123; Theorem 5.1.3 p.123 read as a stronger comparison, not used..
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `ex-two-homology-theories-with-different-coefficient-groups`

- Claim/conventions: Singular homology with coefficients $\mathbb Z$ and with coefficients $\mathbb Z/2$ both satisfy the ordinary homology axioms on CW pairs. They are not naturally equivalent: the specified coefficient group is essential in uniqueness.
- Dependencies: thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Axioms for Homology, coefficient discussion p.161; https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf — Definition 11.1, p.26.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `cex-degree-zero-does-not-imply-a-sphere-map-is-constant`

- Claim/conventions: The implication “a continuous self-map of $S^n$ of degree zero is constant” is false. For every $n\ge1$ there is a surjective, hence nonconstant, continuous map $S^n\to S^n$ of degree zero.
- Dependencies: thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, prop-every-integer-occurs-as-the-degree-of-a-sphere-map.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Example 2.31, p.136 (signed fold variation).
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero`

- Claim/conventions: The unreduced top-homology scalar definition of degree does not extend unchanged to $S^0$: $H_0(S^0;\mathbb Z)=\mathbb Z^2$, and the transposition induces a nonscalar matrix. In contrast, the separate scalar invariant on $\widetilde H_0(S^0;\mathbb Z)\cong\mathbb Z$ is well defined and has possible values $-1,0,+1$.
- Dependencies: def-degree-of-a-self-map-of-an-oriented-sphere, cor-homology-of-spheres, def-reduced-homology-theory-and-augmentation.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Degree opening paragraph, p.134, excludes n=0.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Authored `cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness`

- Claim/conventions: Finite additivity cannot replace arbitrary additivity in uniqueness on all CW pairs. For every integer $n$, set $$E_n(X)=\left(\prod_{i\ge0}\widetilde H_i(X;\mathbb Z)\right)\Big/\left(\bigoplus_{i\ge0}\widetilde H_i(X;\mathbb Z)\right).$$ This construction on based CW spaces satisfies the reduced homotopy, exactness, excision, suspension, and dimension axioms with zero coefficient group, and finite wedge additivity, but fails arbitrary wedge additivity. Its pair version is $$E_n(X,A)=\left(\prod_{i\ge0}H_i(X,A;\mathbb Z)\right)\Big/\left(\bigoplus_{i\ge0}H_i(X,A;\mathbb Z)\right).$$ The theory $H_n(X,A;\mathbb Z)\oplus E_n(X,A)$ satisfies the unreduced ordinary axioms with coefficient $\mathbb Z$ except arbitrary additivity, agrees with $H$ on every finite-dimensional CW pair, and differs on $W=\bigvee_{i\ge1}S^i$.
- Dependencies: prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology, lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit.
- Sources: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — §2.3 Exercise 2, p.165.
- Provenance: statement ai-altered; proof ai-altered. Local text follows the assigned source-backed scope; no generated-statement dependency or judge record.
- Disposition: drafted; item-specific proof uses and boundary worksheet recorded. Focused validators pending. Next action: continue remaining batch items and run required checks.

### Assembly and convention review

All 44 A items and 8 B items are authored as drafts, and both planned pages are written directly under `library/algebraic-topology/`. No claim was dropped or narrowed from the reviewed scaffold. The cone-boundary proof now explicitly collapses both X and the apex to obtain reduced suspension of A-plus; the suspension-degree proof chooses compatible source and target basepoints; CW excision uses an exact-sequence comparison rather than an unnecessary pair homotopy inverse. Local-degree well-definedness is recorded through `justified_by` to the immediately following orientation lemma, without a prerequisite cycle. These repairs retain the cited dependency claims. Validation remains pending; next action is canonical precheck repair and focused validators.

### First focused precheck and citation repair

Explicit-path precheck ran on all 52 manifest item paths: 46 proof-bearing items checked, 45 requested canonical phase renumbering, and the ray-retraction proof failed `untagged-steps` because its first row continued over a display-math line. The proof paragraph was joined without changing its mathematics. The reflection example now directly declares and cites the existing simplicial-to-singular comparison theorem for transport of its fundamental cycle; its exact statement was read. The manifest records this dependency and local-degree `justified_by`. Next: apply the checker’s canonical phase repair and synchronize the proof-use and boundary step anchors.

### Contract synchronization

Applied all 46 canonical phase repairs and updated every citation-use, derivation, and boundary step anchor to the stored proof rows. Regenerated Facts from exact current dependency Statement/Definition sections, retaining their full claims and removing facts no longer used. The polynomial example now directly cites the pair long exact sequence and its naturality at the local disk calculation; these additional existing dependencies are recorded in the manifest. Its statement and multiplicity claims are unchanged. Boundary review corrected the Euclidean empty-case description and anchored homotopy endpoints explicitly. No judge or publication metadata was added. Next action: run required validators and focused rendercheck.

### Final mathematical and validation audit

- Authored scope: the 44 A-item IDs and 8 B-item IDs recorded in the item-specific `### Authored` headings above, exactly matching `research/frontier-33-batch-8.pages.json`. The two draft pages are `homology-axioms-degree-and-classical-applications` and `homology-axioms-degree-and-classical-applications-examples`, both under `library/algebraic-topology/`. Of the 52 items, 46 are proof-bearing and six are definitions.
- Exact claims, conventions, dependency IDs, and source URLs/locators remain recorded in each item-specific heading above and in the corresponding item frontmatter. Provenance remains truthful: direct source formulations retain `literature-derived`; adapted statements or proofs retain `ai-altered`; definitions retain `proof: not-applicable`. No generated statement is a dependency target, and no `verification.judge` record is present.
- Mathematical audit: no planned claim was narrowed or dropped. Two proof explanations were made explicit without changing their claims: the circle-reflection calculation now derives the absolute generator from the pair sequence and the kernel of the endpoint map, and the finite-additivity counterexample now applies the reduced/unreduced comparison only to ordinary singular homology before passing exactness through the product-mod-sum functor. Their proof contracts were synchronized to those written steps.
- Canonical repair: all 52 item `sources.references` blocks were normalized from flow-style JSON-in-YAML to schema-recognized YAML mappings. This changed no source, locator, provenance, statement, or proof.
- `node tools/tsx-run.mjs tools/precheck.mts` was run with all 52 explicit `items/ID.md` arguments from the manifest: 46 proof-bearing items checked, 0 failing.
- The repository CLI requires the current plan path; `node tools/validate-plan.mjs research/plan-spec.json` exited 0. It reported the declared page order acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among populated pages. Its global redundant-prerequisite warnings and page-level-only notices did not identify a batch-8 failure.
- `node tools/content-policy.mjs research/frontier-33-batch-8.pages.json`: 52 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-8.proof-contracts.json --strict`: 46/46 items checked, 0 errors, 0 warnings.
- Additional focused checks: renderer/YAML/KaTeX check passed all 52 items and two pages (54 files); citation fidelity checked 118 citations with no missing quote or widening candidate; manifest dependency normalization checked 52 items with 0 missing or malformed dependency arrays.
- Status and blockers: every authored page and item remains `draft`; no publication or workflow state was changed. No blockers remain.
