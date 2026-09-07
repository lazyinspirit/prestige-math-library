# Frontier-33 batch 14 — scaffold evidence and authoring handoff

Scope: only this batch's pages.json, coverage.json and notes.md. No items or published pages authored in this dispatch. Read CLAUDE.md, README.md, SCHEMA.md, task and RL-4 design (lines 353–400), reading-order contract and convention audit. Current plan agrees with task: A 510.007, B 510.008. Design assigns relative RL-4, no absolute order; design requires RL-1–RL-3 and HA-1, whereas spec lists the preceding linkage B page and chain-complexes-and-homology. Preserve spec literally; drift owns prerequisite-list reconciliation. No item depends on a B-page supplier.

## Source and mathematical corrections

Live Etingof TOC differs from design locators: category O is §15.1, pp.79–81; §15.3 is Verma's theorem; duality is §20.4, p.103; Grothendieck group also appears in Sakellaridis Theorem 6.2(4), p.10. Sakellaridis §2 is Category O, not §1. Lin L2 §3 contains the classical definition and Warning 3.4; L6 §2 contains finiteness; L8 §3 contains duality. Course index successfully opened, but index alone is not a full-text treatment and is not counted as one.

**Design defects requiring drift/review attention, not silent adoption:** (1) finite-dimensional weight spaces and a finite union of downward cones do NOT imply finite generation: direct sum of sl2 Vermas M(-2n), n>=0, has these local properties. Retain finite generation in the equivalent support description. (2) Classical O is NOT extension closed in all g-mod. Lin L2 Warning 3.4 explicitly says this; Lin L8 Theorem 3.9 proof says O IS extension closed inside finite-weight-space weight modules. State the abelian/extension theorem with this ambient qualification, retaining its proposed id but making title precise. The induced rank-two Jordan highest-weight extension is a B counterexample. (3) Replace the vague 'after truncation' lemma with an exact finite filtration by highest-weight QUOTIENTS; this is not a Verma flag of every object. Keep the proposed stable id, explain its strengthened precise content below. (4) A finite ideal for the standard basis means a downward-closed subset of the FINITE dot-orbit label poset, never a finite downward ideal of the full root lattice. (5) Etingof's Cartan automorphism is not the Chevalley anti-involution. Use the latter from the published supplier, with (x f)(m)=f(tau(x)m), giving weights unchanged and no extra minus sign. Lin's ordinary dual followed by Cartan involution is the comparison convention.

## Proof route and limits

Finite b-stable generators -> finite highest-weight quotient filtration -> finite union of central characters -> finite weight-space detector -> finite length. This does not assume finite length from the predecessor's finite-multiplicity statement. No projectives, BGG reciprocity or derived functors enter this proof. Restricted duality is first exact/involutive on finite-weight-space modules; simples are self-dual by annihilators and highest weight; induction on finite length supplies finite generation of the dual. Block refinement uses splitting of simple extensions plus finite-length induction and strong linkage, not the unbuilt affine-Weyl stabilizer theorem. Integral reflection steps preserve the integral root set by crystallographic integrality. Verma indecomposability is proved inline from its cyclic highest line. All roots are in a finite-dimensional complex semisimple Lie algebra, positive Borel h+n+, dot action w(lambda+rho)-rho. General reductive or Kac–Moody extensions are not asserted.

Sources were opened as complete web PDFs; exact harvest ranges and every heading in those ranges are in coverage.json. Local curl failed (exit 6); pdftotext is unavailable. No downloaded byte hash is claimed from web text. Validation and mechanical fetch status will be recorded below after writing.

## Per-item checkpoints

### `def-bgg-category-o`

Claim/conventions: The full category of finitely generated U(g)-modules that are h-semisimple and locally U(n+)-finite; include zero and g-linear morphisms.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Definition 3.1, pp.4–5.

Dependencies: `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`.

Proof/dependency rationale: Fix the three simultaneous hypotheses; inherit the existing triangular decomposition. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-enveloping-algebra-is-left-and-right-noetherian`

Claim/conventions: For finite-dimensional g, U(g) is left and right Noetherian.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 p.79, Noetherian parenthesis.

Dependencies: `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-hilbert-basis-theorem`.

Proof/dependency rationale: Lift finite homogeneous generators of gr(I) in the polynomial algebra gr U(g), subtract leading symbols and induct on degree; same proof for right ideals. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-finite-b-stable-generators-and-weight-flags-in-category-o`

Claim/conventions: Every O-object is generated by a finite-dimensional b-stable h-semisimple subspace E; E admits a finite b-stable flag with one-dimensional quotients annihilated by n+.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Proposition 3.6 and Lemma 3.7, p.5.

Dependencies: `def-bgg-category-o`.

Proof/dependency rationale: Replace finitely many generators by their weight components and U(n+) spans; maximal weights give invariant lines and induction on dim E gives the flag. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-equivalent-support-description-of-category-o`

Claim/conventions: For a finitely generated h-semisimple g-module, local n+-finiteness is equivalent to support in finitely many cones lambda_i-Q+. In either case every weight space is finite dimensional.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Definition 15.1 and Lemma 15.3, p.79.

Dependencies: `def-bgg-category-o`, `lem-finite-b-stable-generators-and-weight-flags-in-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Proof/dependency rationale: Forward: PBW applied to finite E. Reverse: PBW monomials raising a fixed weight have bounded total root height in each cone, hence only finitely many monomials can act nontrivially; no finite-dimensional-weight hypothesis is needed for this direction. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-verma-and-finite-dimensional-modules-lie-in-category-o`

Claim/conventions: Vermas, their highest-weight quotients, and finite-dimensional h-semisimple g-modules lie in O.

Source read: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §2 Definition 2.1 and Lemma 2.2, pp.2–3.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `prop-weights-of-a-verma-module-lie-below-lambda`, `thm-verma-module-has-a-unique-simple-quotient`.

Proof/dependency rationale: Use the Verma PBW cone; finite-dimensional weight modules satisfy all three axioms directly. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `thm-category-o-is-abelian-and-extension-closed`

Claim/conventions: O is closed under submodules, quotients and finite direct sums, hence abelian. If 0->M->E->N->0 has M,N in O and E h-semisimple, then E is in O. No assertion for arbitrary ambient g-module extensions.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Lemma 3.3 and Warning 3.4, p.5; compare Lin L8 Theorem 3.9 proof.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `lem-enveloping-algebra-is-left-and-right-noetherian`, `thm-modules-over-a-ring-form-an-abelian-category`.

Proof/dependency rationale: Submodule finite generation follows by the elementary finite-free-module induction over a left Noetherian ring; subquotients inherit weight decomposition. For extensions lift generators, take union of supports, and apply the qualified support equivalence. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-n-plus-invariants-exist-in-every-nonzero-o-module`

Claim/conventions: Every nonzero O-object contains a nonzero weight vector annihilated by n+.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 p.79, paragraph after Definition 15.1.

Dependencies: `prop-equivalent-support-description-of-category-o`.

Proof/dependency rationale: Take a maximal weight above any weight in the finite union of cones; bounded height ensures termination. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `thm-simple-objects-of-category-o-are-highest-weight-modules`

Claim/conventions: Simple O-objects are exactly L(lambda), with distinct labels nonisomorphic.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lecture 6 §2 Proposition 2.2, p.5.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `thm-universal-property-of-verma-modules`, `thm-verma-module-has-a-unique-simple-quotient`.

Proof/dependency rationale: A highest-weight vector gives a nonzero Verma surjection to a simple; highest weight uniqueness distinguishes the labels. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`

Claim/conventions: Every O-object has a finite filtration with nonzero factors quotient modules of Vermas; it is also a quotient of a module with a finite Verma flag.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Proposition 3.6, p.5; Sakellaridis Lemma 2.3 p.3.

Dependencies: `lem-finite-b-stable-generators-and-weight-flags-in-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-universal-property-of-verma-modules`, `thm-category-o-is-abelian-and-extension-closed`.

Proof/dependency rationale: Induce the finite b-flag: PBW makes U(g) free as a right U(b)-module, so induction is exact. Map the resulting flag into M and delete repeated images. No truncation hypothesis or claim that M itself has a Verma flag. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-the-center-has-finite-dimensional-image-on-an-o-object`

Claim/conventions: Z(U(g))/Ann_Z(M) is finite dimensional for M in O.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Corollary 15.4, p.80.

Dependencies: `prop-equivalent-support-description-of-category-o`, `def-bgg-category-o`.

Proof/dependency rationale: Take the finite sum of full weight spaces containing chosen generators. It is Z-stable and finite dimensional; restriction embeds the image algebra in End(E), since a central element killing E kills its U(g)-span. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `def-generalized-central-character-subcategory-of-o`

Claim/conventions: For m_chi=ker chi set M_chi={v: m_chi^N v=0 for some N}; O_chi consists of M with M=M_chi.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Corollary 15.7, p.80.

Dependencies: `def-bgg-category-o`, `def-central-character-of-a-lie-algebra-module`.

Proof/dependency rationale: Distinguish generalized characters from scalar central action and from indecomposable blocks. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-generalized-central-character-submodules-are-direct-summands`

Claim/conventions: Every O-object decomposes canonically as a finite sum of its M_chi; on each summand a common power of m_chi annihilates the entire module.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Corollary 15.7 and proof, p.80.

Dependencies: `lem-the-center-has-finite-dimensional-image-on-an-o-object`, `def-generalized-central-character-subcategory-of-o`, `thm-category-o-is-abelian-and-extension-closed`.

Proof/dependency rationale: Prove the elementary simultaneous generalized-eigenspace decomposition of a finite-dimensional commutative algebra in its regular representation; polynomial spectral idempotents sum to 1. Their images acting on M are g-submodules. Nilpotence of the local maximal ideal follows from finite simultaneous triangularization. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `thm-category-o-decomposes-by-generalized-central-character`

Claim/conventions: O is the categorical direct sum of O_chi, with finitely many nonzero components for each object; projections are exact and morphisms between distinct summands vanish.

Source read: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §6 Theorem 6.2(1), pp.9–10.

Dependencies: `lem-generalized-central-character-submodules-are-direct-summands`.

Proof/dependency rationale: Central idempotents commute with maps; use a common finite image algebra for a short exact sequence to prove exactness componentwise. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`

Claim/conventions: If M has generalized character chi_lambda, every nonzero subquotient has a nonzero weight space at some mu in W dot lambda. Thus any strict submodule chain in M has length at most sum_{mu in W dot lambda} dim M_mu.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Lemma 15.9, p.81; Lin L6 Theorem 2.4 proof pp.5–6.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `cor-central-characters-are-dot-weyl-orbits`, `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, `lem-generalized-central-character-submodules-are-direct-summands`.

Proof/dependency rationale: A singular vector gives a highest-weight cyclic submodule with scalar character equal to chi_lambda. Harish-Chandra identifies its highest label in the finite orbit. Weight-space exactness forces a positive detector increment at every strict chain step. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `thm-every-category-o-object-has-finite-length`

Claim/conventions: Every O-object admits a finite composition series and is both Noetherian and Artinian.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lecture 6 §2 Theorem 2.4 and proof, pp.5–6.

Dependencies: `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`, `thm-category-o-decomposes-by-generalized-central-character`, `prop-equivalent-support-description-of-category-o`.

Proof/dependency rationale: Sum the finite detector bounds over central summands. Refine a chain until no refinement is possible; the bound forces finite termination and all factors are simple. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-hom-spaces-in-category-o-are-finite-dimensional`

Claim/conventions: Hom_O(M,N) is finite dimensional; End_O(L(lambda))=C.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lecture 6 §2 Proposition 2.6 and Lemma 2.7, p.6.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `thm-simple-objects-of-category-o-are-highest-weight-modules`, `thm-universal-property-of-verma-modules`.

Proof/dependency rationale: A map is determined by finitely many weight generators, whose images lie in finite-dimensional weight spaces; a simple highest-weight module has one-dimensional highest line. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `def-restricted-dual-of-a-weight-module`

Claim/conventions: For an h-semisimple module with finite-dimensional weight spaces define D(M)=direct sum M_mu^*, with (x f)(m)=f(tau(x)m) for the published Chevalley anti-involution.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Constructions 3.1, 3.4, 3.7 and Lemmas 3.2, 3.8, pp.4–5.

Dependencies: `def-chevalley-contravariant-form`.

Proof/dependency rationale: Root operators preserve the restricted sum; explain conversion from ordinary dual (negative weights) followed by Cartan twist. No conjugation or Hilbert-space completion. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-simple-highest-weight-modules-are-restricted-self-dual`

Claim/conventions: D(L(lambda)) is isomorphic to L(lambda).

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Proposition 3.10, p.5.

Dependencies: `def-restricted-dual-of-a-weight-module`, `thm-verma-module-has-a-unique-simple-quotient`, `prop-weights-of-a-verma-module-lie-below-lambda`, `thm-universal-property-of-verma-modules`.

Proof/dependency rationale: On finite weight spaces annihilators turn a proper nonzero submodule of the dual into a proper nonzero submodule of L. Hence dual is simple. Its highest line has weight lambda, so the universal property identifies it with L(lambda). Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-restricted-duality-is-an-exact-involution-on-category-o`

Claim/conventions: D is an exact contravariant equivalence O->O^op, with natural D^2=id and unchanged characters and composition multiplicities.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Lemma 3.8 and Theorem 3.9, p.5; Etingof Proposition 20.9 p.103.

Dependencies: `def-restricted-dual-of-a-weight-module`, `lem-simple-highest-weight-modules-are-restricted-self-dual`, `thm-every-category-o-object-has-finite-length`, `thm-category-o-is-abelian-and-extension-closed`, `thm-jordan-holder-theorem-in-an-abelian-category`.

Proof/dependency rationale: Dualize each finite weight space to prove exactness and biduality in the larger weight category. Dualize a finite composition series; its factors are the same simples. Qualified extension closure proves finite generation and membership in O without circularly assuming it. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `def-standard-and-costandard-objects-in-category-o`

Claim/conventions: Delta(lambda)=M(lambda); nabla(lambda)=D(M(lambda)).

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Definition 3.12, p.5.

Dependencies: `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-verma-module`.

Proof/dependency rationale: Fix standard/costandard notation; no highest-weight-category axiom or projective assertion. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-costandard-objects-have-simple-socles`

Claim/conventions: The unique simple submodule, and socle, of nabla(lambda) is L(lambda).

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Corollary 3.13, p.5.

Dependencies: `prop-restricted-duality-is-an-exact-involution-on-category-o`, `thm-verma-module-has-a-unique-simple-quotient`, `def-standard-and-costandard-objects-in-category-o`.

Proof/dependency rationale: Dualize the unique maximal Verma submodule; every simple submodule dualizes to the unique simple quotient. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `def-integral-weyl-group-of-a-weight`

Claim/conventions: Phi_lambda={alpha: <lambda+rho,alpha^vee> in Z}; W_lambda is the subgroup generated by s_alpha for alpha in Phi_lambda. A linkage class is W_lambda dot lambda.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §3.4 definitions p.52 and Theorem (a),(b) p.53; §4.9 p.83.

Dependencies: `def-root-reflections-and-the-weyl-group-action`, `def-weyl-vector-rho-for-a-chosen-positive-system`.

Proof/dependency rationale: Use reflection-generated definition; do not rely on the stronger identification with the root-lattice-coset stabilizer. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-integral-reflection-orbits-are-linkage-equivalence-classes`

Claim/conventions: Phi_lambda is preserved by its root reflections. W_mu=W_lambda whenever mu in W_lambda dot lambda. The equivalence relation generated by integral reflection moves has classes W_lambda dot lambda.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §3.4 p.52, displayed definitions and invariance statements.

Dependencies: `def-integral-weyl-group-of-a-weight`, `def-strong-linkage-order-on-weights`.

Proof/dependency rationale: Pairing after reflection differs by an integral Cartan multiple of the integral pairing. This proves invariance under generators; reverse the reflection word for equivalence. Strong linkage stays in this class. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-extensions-between-distinct-o-linkage-classes-split`

Claim/conventions: A short exact sequence of two simple O-objects in distinct integral-reflection classes splits.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §1.13 pp.30–32 and §4.9 p.83, decomposed proof route.

Dependencies: `prop-restricted-duality-is-an-exact-involution-on-category-o`, `thm-universal-property-of-verma-modules`, `thm-strong-linkage-principle-for-verma-modules`, `lem-integral-reflection-orbits-are-linkage-equivalence-classes`, `thm-verma-module-has-a-unique-simple-quotient`.

Proof/dependency rationale: Orient the extension by duality so quotient highest weight lambda is not strictly below submodule highest weight mu. Lift its highest vector as a weight vector; higher weights are absent, so it is singular. The generated highest-weight submodule either splits off or equals the nonsplit length-two extension. The latter makes L(mu) a Verma factor, forcing linkage. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-o-modules-split-across-separated-simple-classes`

Claim/conventions: A partition of simple O-labels with no nonsplit simple extensions across parts yields a unique functorial finite direct-sum decomposition of every O-object by composition-factor parts.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §1.13 p.31, formal decomposition paragraph.

Dependencies: `thm-every-category-o-object-has-finite-length`, `thm-jordan-holder-theorem-in-an-abelian-category`, `thm-category-o-is-abelian-and-extension-closed`.

Proof/dependency rationale: Prove Hom vanishing by images and Jordan–Holder; prove splitting for disjoint finite-length factors by induction, pullback to a simple quotient and pushout by a simple subobject. Then induct on length of M to construct summands; Hom vanishing proves uniqueness. All pullback/pushout module constructions must be displayed, no unproved Ext long exact sequence. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `thm-central-character-summands-split-into-linkage-blocks`

Claim/conventions: The indecomposable categorical summands of O are the full subcategories with simple labels W_lambda dot lambda. Each lies in O_chi_lambda; a coarse central summand can have several linkage blocks.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §1.13 pp.30–32 and §4.9 pp.83–84.

Dependencies: `def-integral-weyl-group-of-a-weight`, `lem-integral-reflection-orbits-are-linkage-equivalence-classes`, `lem-extensions-between-distinct-o-linkage-classes-split`, `lem-o-modules-split-across-separated-simple-classes`, `thm-verma-embedding-for-an-arbitrary-positive-root`, `thm-verma-module-has-a-unique-simple-quotient`, `cor-central-characters-are-dot-weyl-orbits`.

Proof/dependency rationale: Use the splitting lemma for existence. For indecomposability, an integral reflection with nonzero pairing gives an embedding in one direction; the containing Verma is indecomposable by its unique highest line. Its two simple labels therefore belong to the same categorical summand. Iterate generators; zero pairing is a fixed point. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `cor-restricted-duality-preserves-linkage-blocks`

Claim/conventions: D preserves each linkage block. A Chevalley-contravariant bilinear form on an O-object pairs distinct block summands to zero.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §4.9 Exercise p.84; Lin L8 Corollary 3.11 p.5.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-chevalley-contravariant-form`.

Proof/dependency rationale: Duality preserves simple factors. A contravariant form induces a module map to the restricted dual because different weights are orthogonal. Hom between distinct block parts vanishes. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `lem-verma-self-extensions-in-category-o-split`

Claim/conventions: Every short exact sequence 0->M(lambda)->E->M(lambda)->0 in O splits.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Exercise 15.6(i), p.80.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `thm-universal-property-of-verma-modules`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Proof/dependency rationale: Lift the top vector as an actual weight vector; E has no weights above lambda, so the lift is singular and induces a section. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`

Claim/conventions: For a finite-dimensional h-semisimple g-module E, M->E tensor M is exact and preserves O.

Source read: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §2 Lemma 2.5, p.3.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.

Proof/dependency rationale: Tensor basis of E with weight generators of M; induct on PBW degree using x(e tensor m)=xe tensor m+e tensor xm to establish finite generation. Support is a finite translate union; exactness holds over C. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `def-grothendieck-group-and-character-of-category-o`

Claim/conventions: K0(O) is the free abelian group on isomorphism classes modulo short exact sequence relations; ch M=sum dim M_mu e^mu is supported in finitely many downward cones.

Source read: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §2 Definition 2.4 and paragraph after Lemma 2.5, p.3.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `prop-equivalent-support-description-of-category-o`.

Proof/dependency rationale: Use a set of representatives of finitely presented U(g)-modules; explain pointwise additive formal characters and finite convolution coefficients. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`

Claim/conventions: Classes of L(lambda), and separately M(lambda), form Z-bases of K0(O). In each finite central-character label set the transition matrix is unitriangular; the same holds for a downward-closed subset of that finite set.

Source read: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §6 Theorem 6.2(4) and proof, p.10.

Dependencies: `def-grothendieck-group-and-character-of-category-o`, `thm-every-category-o-object-has-finite-length`, `thm-jordan-holder-theorem-in-an-abelian-category`, `cor-central-characters-are-dot-weyl-orbits`, `thm-verma-module-has-a-unique-simple-quotient`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Proof/dependency rationale: Jordan–Holder gives the simple basis and additive multiplicities. Restrict to the finite dot orbit, order by positive-root order; M(lambda) has top multiplicity one and other labels strictly lower. Invert a finite unitriangular integral matrix; take direct sum over central characters. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `ex-the-regular-integral-sl2-block-of-category-o`

Claim/conventions: For n>=0, labels are n and -n-2; M(-n-2)=L(-n-2); 0->L(-n-2)->M(n)->L(n)->0 is nonsplit. The costandard reverses this sequence.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Example 3.17, p.6; Lin L2 Exercise 2.17 p.4.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `prop-costandard-objects-have-simple-socles`, `prop-simple-reflection-embedding-of-verma-modules`, `thm-verma-module-has-a-unique-simple-quotient`.

Proof/dependency rationale: Verify using the sl2 PBW action, weight dimensions and duality; indecomposability proves nonsplitting. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `ex-a-generic-sl2-block-is-semisimple`

Claim/conventions: For lambda not in Z, O_chi_lambda has two distinct singleton linkage blocks labelled lambda and -lambda-2; each is equivalent to finite-dimensional vector spaces.

Source read: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Example 15.8, p.81.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `lem-verma-self-extensions-in-category-o-split`, `prop-hom-spaces-in-category-o-are-finite-dimensional`, `cor-verma-irreducibility-criterion-from-shapovalov-determinants`.

Proof/dependency rationale: Neither label has an integral root pairing; both Vermas are simple. Induct on finite length using absence of simple self-extensions. For sl2, the source generic root-coset condition is exactly lambda not in Z. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `ex-a-singular-a2-central-character-summand`

Claim/conventions: Take lambda=-omega1 in A2. lambda+rho=omega2 has stabilizer <s1>; its three dot-orbit labels are -omega1, -2omega2, -2omega1-omega2. They form one linkage block.

Source read: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §4.11 Exercise, pp.85–86, singular three-element class.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `def-integral-weyl-group-of-a-weight`, `cor-central-characters-are-dot-weyl-orbits`, `def-root-reflections-and-the-weyl-group-action`.

Proof/dependency rationale: In fundamental coordinates use s1(a,b)=(-a,a+b), s2(a,b)=(a+b,-b), subtract rho=(1,1); W_lambda=W. This is a labels/stabilizer calculation, not a claim about all composition multiplicities. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o`

Claim/conventions: For sl2 the full Chevalley-twisted dual of M(lambda) contains functionals with infinitely many nonzero weight components and is not h-semisimple.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Lemma 3.2 and Construction 3.7, p.4.

Dependencies: `def-restricted-dual-of-a-weight-module`, `def-verma-module`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Proof/dependency rationale: Choose f with f(f^n v)=1 for all n. No nonzero polynomial in h kills f because it would vanish at every distinct lambda-2n; hence f has infinite-dimensional h-orbit. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o`

Claim/conventions: For sl2 the module direct sum_{n>=0} M(-2n) is h-semisimple and locally n+-finite, has support in -2Z>=0 and dim at weight -2k equal to k+1, but is not finitely generated.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 Definition 3.1; direct explicit hypothesis test.

Dependencies: `def-bgg-category-o`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Proof/dependency rationale: Any finite set of vectors lies in finitely many direct summands, which form a proper submodule; count n=0,...,k for the weight dimension. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o`

Claim/conventions: The lowest-weight sl2 Verma module of lowest weight 0 is cyclic and has one-dimensional spaces at 2n, n>=0, but has unbounded upward support and e acts freely; it is not in O.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 paragraph after Corollary 3.3, p.4.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.

Proof/dependency rationale: Construct induction from the negative Borel by the same PBW argument with e and f exchanged. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `cex-category-o-is-not-extension-closed-in-all-g-modules`

Claim/conventions: For sl2 induce the two-dimensional b-module with e=0, h v=lambda v, h w=lambda w+v. The induced module is an extension of M(lambda) by itself but is not h-semisimple.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Warning 3.4, p.5; Etingof Exercise 15.6(ii), p.80.

Dependencies: `def-bgg-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `def-verma-module`.

Proof/dependency rationale: PBW freeness makes induction exact and preserves the nonzero Jordan pair in degree zero; therefore h-semisimplicity fails. Scaffold checkpoint complete; body and proof validation remain Step 5.

### `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o`

Claim/conventions: For sl2, M(0) tensor M(0) has finite weight spaces and downward support but is not finitely generated as a g-module, so not in O.

Source read: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Exercise 3.9(2), pp.5–6.

Dependencies: `def-bgg-category-o`, `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.

Proof/dependency rationale: Identify underlying space with C[x,y], with f multiplication by x+y. It is not finite over C[x+y], since quotient by x+y has infinite dimension. O-objects are finite over U(n-) by the finite induced flag lemma; derive contradiction. Scaffold checkpoint complete; body and proof validation remain Step 5.


## Dependency review and remaining authoring obligations

All 21 distinct external dependency statements were opened on disk after scaffolding. PBW includes the associated-graded polynomial isomorphism; the triangular-decomposition supplier includes triangular PBW. The central-character corollary uses the dot shift and identifies finite Weyl orbits. The anti-involution supplier fixes h and exchanges e_i,f_i. Strong linkage is the directed positive-integral reflection relation. Jordan–Holder and the abelian module category are published. The simple-object theorem explicitly includes the membership proposition in its deps. No missing supplier id was found by batch content policy. No new A statement is generated; three explicit B hypothesis tests are generated and are not dependency targets.

The split-across-simple-classes lemma must contain the finite-length module argument, not an unsupported appeal to general block theory. One proof: establish by induction that Hom and extension classes vanish for modules whose simple labels are in disjoint parts. For a short exact sequence, pull back to a simple quotient on the quotient side and push out by a maximal proper submodule on the submodule side; the splitting obstruction reduces successively to extensions of two simples. To construct block parts, induct on length of M, decompose a maximal submodule by induction, then split all components not in the class of the simple quotient. Vanishing of Hom between disjoint parts makes the resulting submodules canonical and functorial. Module pullbacks and pushouts are explicit submodules of direct sums and quotients thereof. This obligation is mathematical content of the planned lemma, not a reliance on an unbuilt Ext long exact sequence.

Standard/costandard Hom and Ext vanishing, projectives, injective hulls, reciprocity and translation are deferred with exact destinations in coverage. No tensor formula for two arbitrary O-objects is claimed to preserve O. No claim equates all central-character summands with indecomposable linkage blocks. No source’s placeholder proof or erroneous ambient-extension assertion is imported as a proved fact.

The regular sl2 example additionally depends explicitly on the published irreducibility criterion and Verma weight-space formula: these discharge simplicity of M(-n-2) and its one-dimensional weight-space count. The finite Borel generator is an h-semisimple subspace, usually a sum of several weights, not a single weight space. “Indecomposable linkage block” means a nonzero full subcategory specified by a class of simple labels which admits no further nontrivial categorical direct-sum decomposition.

## Final scaffold validation checkpoint — 2026-09-07

Deliverables: 31 A items, 8 B items; every item has explicit deps, a precise proposed statement, source references and component provenance. A is below 60, so no split is required. Coverage has six full-text PDF entries (three lecture PDFs from one independent author count as one treatment), representing Etingof, Sakellaridis, Chen and Humphreys; 82 source headings/results have concrete dispositions. This dispatch changed only the three task-authorized batch files. Temporary validator inputs/reports under /tmp were removed. No workflow or canonical plan state was changed by this dispatch.

Validation receipts:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-14.coverage.json --require-destination`: PASS, 1 page, 82 harvested results, zero errors/warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-14.pages.json`: PASS, 39 items, zero errors/warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS on the unchanged canonical input (the batch entries are still empty there). To validate the actual proposed items as well, created a disposable copy of the spec replacing only the two owned page records with the batch manifest and ran the same validator: PASS after final dependency edits; 846 pages have item lists, no cycles, forward dependencies, B-page dependencies or unresolved ids. The canonical file was never merged or edited.
- Whole-run `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: FAIL at final observation, 647 scoped items, nine missing dependency errors, all outside batch 14. Exact citing item -> missing target: def-compactly-supported-differential-form -> def-compactness-open-cover; thm-kernel-range-annihilator-identities -> def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces; def-localization-of-a-category-at-a-class-of-morphisms -> def-functor; lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms -> def-flat-module; thm-regular-local-rings-are-domains-and-cohen-macaulay -> def-cohen-macaulay-module-and-ring; lem-polynomial-local-regularity-fibre-step -> thm-euclidean-domain-implies-pid; def-normal-noetherian-ring -> def-integrally-closed-domain; def-total-ring-of-fractions -> def-localisation-of-a-commutative-ring. Other batches are being scaffolded concurrently; this is a timed observation, not permission to edit them.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-14.coverage.json --stamp --timeout-sec 8`: FAIL, 0/6 mechanically stamped; every source returns EAI_AGAIN in this shell environment. No fetch_verified or byte-hash fields were fabricated.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-14.coverage.json --out <temporary-report> --recover --fail-on-dead --timeout-ms 2000`: FAIL, 0/6 live, six curl exit-6 DNS failures, no archive recoveries. Recovery probes are subject to the same environment failure. This does not establish that these six sources or their archives are dead: all six full PDFs were accessible and their selected mathematics read through web.run. Replacing verified text with unrelated sources would not repair DNS failure.

**Readiness: NOT gate-ready.** The remaining batch-local gate blocker is mechanical source-byte fetch/liveness verification from a network-capable execution environment. Next action: rerun the exact fetch-stamp and URL-recovery commands there against the six URLs in coverage; retain the read harvest and do not fabricate hashes. Whole-run content policy also needs the other owners’ missing-dependency repairs. Drift/review must adjudicate the recorded source-backed corrections to the design’s false support and ambient-extension assertions and the prerequisite-list difference. Mathematical authoring and independent proof review remain Step 5; no unfinished proof is marked authored or reviewed here.

## Step-3 fix pass

`research/frontier-33-alpha-f-step3-scaffold-review.md` supplies no numbered
batch-14 finding: its only batch-14 verdict is `sufficient`. Disposition:
`stands`; no manifest or coverage repair is warranted. Evidence: the review's
`Outcome` and `Batch 14` sections rechecked all 31 A and 8 B records, their 20
external item dependencies, the six full-text sources, and the five material
qualifications already reflected here (finite generation, the
weight-module-only extension assertion, quotient filtration rather than a
Verma flag, finite label sets for unitriangularity, and Chevalley restricted
duality). The companion verdict entry is
`{"page":"category-o-finiteness-duality-and-blocks","verdict":"sufficient"}`.

Changed scaffold record: none. The authoritative review expressly reports no
in-scope false claim, missing lemma, backward prerequisite, source gap, or
pair-scope defect. The required coverage, whole-run policy, and plan-validation
receipts for this pass follow after their commands complete.

Validation receipts for this fix pass:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-14.coverage.json`:
  PASS — 1 page, 82 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-33-batch-14.pages.json`:
  PASS — 39 items, 0 normalized, 0 errors; every manifest object has an
  explicit `deps` array.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`:
  PASS — 923 scoped items, 0 errors, 0 warnings. This is the required
  whole-run observation, not authority to change another batch.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`:
  PASS — declared plan order is acyclic and consistent; no asserted item-level
  cycles, forward dependencies, B-page dependencies, or unresolved IDs.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-14.coverage.json --timeout-sec 30`:
  PASS — 6/6 stored full-text fetch stamps are present; no source URL or
  harvest record was changed.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-14.coverage.json --stamp --force --timeout-sec 90`:
  Node's DNS resolver returned `EAI_AGAIN` for all six unrelated hosts and
  therefore wrote no replacement stamp. This is an execution-environment
  failure, not evidence that a particular URL is dead. Independent full-text
  reads in this pass opened Etingof §15.1/§20.4, Chen Lectures 2, 6, and 8,
  the direct Sakellaridis PDF, and the direct Humphreys PDF; the two latter
  direct URLs are the same documents whose archive URLs and `original_url`
  provenance are already recorded in coverage. No source text, locator, or
  harvest disposition was inferred or rewritten from an inaccessible page.

Current status: the required Step-3 validators pass. Fresh byte restamping is
blocked only in this Node DNS environment; the source material itself was
available and read through independent full-text retrieval, so no source repair
or content deletion is justified.

## Step-5 authoring

Read the required inputs, group f verdict and review, exact external dependency statements, SCHEMA.md and tools/proof-contract.mjs. All 39 item paths were absent at entry. Plan A/B metadata agrees with the manifest (510.007/510.008, lie-theory); preserve the previously recorded design/spec prerequisite difference and the reviewed mathematical qualifications. No independent review or workflow artifact is altered.

Source passages reread through full PDF text: Etingof §15.1 pp.79–81 and §20.4 p.103; Chen L2 §3 pp.4–6, L6 §2 pp.5–6, L8 §3 pp.4–6 including the end of Lemma 3.16; Sakellaridis §2 pp.2–3 and §6 pp.9–10; Humphreys §1.13 pp.30–32, §3.4 definitions p.52, §4.9 pp.83–84 and the terminal §4.11 exercise pp.85–86. The two archive fetches returned Internal Error; the recorded original URLs supplied complete readable PDF text. Existing source-fetch stamps and harvest dispositions are preserved. Local proofs use the published Chevalley anti-involution, not an inferred sign convention from the sources.

### Authored `def-bgg-category-o`

Claim and conventions: The **BGG category $\mathcal O$** is the full subcategory of left $U(\mathfrak g)$-modules $M$ satisfying all three conditions: $M$ is finitely generated; $M=\bigoplus_{\mu\in\mathfrak h^*}M_\mu$ where $M_\mu=\{v:hv=\mu(h)v\text{ for all }h\in\mathfrak h\}$; and $U(\mathfrak n^+)v$ is finite dimensional for each $v\in M$. Its morphisms are all $\mathfrak g$-linear maps. The zero module is included, generated by the empty set. The enveloping and triangular conventions are those of [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] and [[thm-triangular-decomposition-from-a-chosen-positive-root-system]].

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Definition 3.1, pp.4–5.

Dependencies: `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof not-applicable. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-enveloping-algebra-is-left-and-right-noetherian`

Claim and conventions: For every finite-dimensional complex Lie algebra $\mathfrak g$ (semisimplicity is unnecessary here), $U(\mathfrak g)$ is left and right Noetherian.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 p.79, Noetherian parenthesis.

Dependencies: `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-hilbert-basis-theorem`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-finite-b-stable-generators-and-weight-flags-in-category-o`

Claim and conventions: Every $M\in\mathcal O$ has a finite-dimensional, $\mathfrak b$-stable, $\mathfrak h$-semisimple generating subspace $E$. There is a flag $0=E_0\subset E_1\subset\cdots\subset E_r=E$ of $\mathfrak b$-submodules whose quotients are one dimensional and annihilated by $\mathfrak n^+$. For $M=0$ take $E=0$ and the empty flag.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Proposition 3.6 and Lemma 3.7, p.5.

Dependencies: `def-bgg-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-equivalent-support-description-of-category-o`

Claim and conventions: Let $M$ be a finitely generated $\mathfrak h$-semisimple $\mathfrak g$-module. Then $M\in\mathcal O$ if and only if $\operatorname{supp}M\subset\bigcup_{i=1}^r(\lambda_i-Q^+)$ for some finite list of weights. In either case every $M_\mu$ is finite dimensional. The list may be empty for $M=0$; finite generation is an independent hypothesis.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Definition 15.1 and Lemma 15.3, p.79.

Dependencies: `def-bgg-category-o`, `lem-finite-b-stable-generators-and-weight-flags-in-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement ai-altered, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-verma-and-finite-dimensional-modules-lie-in-category-o`

Claim and conventions: Every Verma module $M(\lambda)$, every quotient of it, and every finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module belongs to $\mathcal O$.

Sources: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §2 Definition 2.1 and Lemma 2.2, pp.2–3.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `prop-weights-of-a-verma-module-lie-below-lambda`, `thm-verma-module-has-a-unique-simple-quotient`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `thm-category-o-is-abelian-and-extension-closed`

Claim and conventions: The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Lemma 3.3 and Warning 3.4, p.5; compare Lin L8 Theorem 3.9 proof.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `lem-enveloping-algebra-is-left-and-right-noetherian`, `thm-modules-over-a-ring-form-an-abelian-category`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement ai-altered, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-n-plus-invariants-exist-in-every-nonzero-o-module`

Claim and conventions: Every nonzero $M\in\mathcal O$ contains a nonzero weight vector killed by $\mathfrak n^+$.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 p.79, paragraph after Definition 15.1.

Dependencies: `prop-equivalent-support-description-of-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `thm-simple-objects-of-category-o-are-highest-weight-modules`

Claim and conventions: The simple objects of $\mathcal O$ are exactly the modules $L(\lambda)$, $\lambda\in\mathfrak h^*$, and $L(\lambda)\cong L(\mu)$ if and only if $\lambda=\mu$. Simplicity here excludes zero.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lecture 6 §2 Proposition 2.2, p.5.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `thm-universal-property-of-verma-modules`, `thm-verma-module-has-a-unique-simple-quotient`, `prop-verma-and-finite-dimensional-modules-lie-in-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`

Claim and conventions: Every $M\in\mathcal O$ is a quotient of a module with a finite Verma flag. Consequently it has a finite filtration whose nonzero factors are quotients of Verma modules, and is finitely generated over $U(\mathfrak n^-)$. The empty filtration is allowed for zero. No truncation hypothesis is needed, and a Verma flag of $M$ itself is not asserted.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Proposition 3.6, p.5; Sakellaridis Lemma 2.3 p.3.

Dependencies: `lem-finite-b-stable-generators-and-weight-flags-in-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-universal-property-of-verma-modules`, `thm-category-o-is-abelian-and-extension-closed`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-the-center-has-finite-dimensional-image-on-an-o-object`

Claim and conventions: For $M\in\mathcal O$ and $Z=Z(U(\mathfrak g))$, the image algebra $Z/\operatorname{Ann}_Z(M)$ is finite dimensional over $\mathbb C$.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Corollary 15.4, p.80.

Dependencies: `prop-equivalent-support-description-of-category-o`, `def-bgg-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `def-generalized-central-character-subcategory-of-o`

Claim and conventions: Let $Z=Z(U(\mathfrak g))$ and let $\chi:Z\to\mathbb C$ be a unital complex-algebra character, as in [[def-central-character-of-a-lie-algebra-module]]. Put $\mathfrak m_\chi=\ker\chi$ and, for $M$ in [[def-bgg-category-o]], define

$$M_\chi=\{v\in M:\mathfrak m_\chi^Nv=0\text{ for some integer }N\geq1\}.$$

Here $\mathfrak m_\chi^Nv=0$ means every element of that ideal kills $v$; the exponent may initially depend on $v$. The full subcategory $\mathcal O_\chi$ consists of the objects with $M=M_\chi$. This is a generalized central-character condition, weaker than scalar central action. It does not by definition assert that $\mathcal O_\chi$ is an indecomposable block.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Corollary 15.7, p.80.

Dependencies: `def-bgg-category-o`, `def-central-character-of-a-lie-algebra-module`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof not-applicable. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-generalized-central-character-submodules-are-direct-summands`

Claim and conventions: Every $M\in\mathcal O$ decomposes canonically into finitely many nonzero generalized central-character submodules:

$$M=\bigoplus_\chi M_\chi.$$

For each summand there is a single $N\geq1$ such that $\mathfrak m_\chi^NM_\chi=0$. The decomposition of zero is empty.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Corollary 15.7 and proof, p.80.

Dependencies: `lem-the-center-has-finite-dimensional-image-on-an-o-object`, `def-generalized-central-character-subcategory-of-o`, `thm-category-o-is-abelian-and-extension-closed`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `thm-category-o-decomposes-by-generalized-central-character`

Claim and conventions: The category is the categorical direct sum $\mathcal O=\bigoplus_\chi\mathcal O_\chi$: objects have finite support in the index $\chi$, morphisms between distinct components vanish, and the canonical component projections are exact.

Sources: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §6 Theorem 6.2(1), pp.9–10.

Dependencies: `lem-generalized-central-character-submodules-are-direct-summands`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`

Claim and conventions: Suppose $M\in\mathcal O_{\chi_\lambda}$. Every nonzero subquotient $T$ of $M$ has $T_\mu\ne0$ for some $\mu\in W\cdot\lambda$. In particular the number of strict inclusions in any finite chain of submodules of $M$ is at most

$$d_\lambda(M)=\sum_{\mu\in W\cdot\lambda}\dim M_\mu,$$

where distinct weights in the orbit are counted once.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Lemma 15.9, p.81; Lin L6 Theorem 2.4 proof pp.5–6.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `cor-central-characters-are-dot-weyl-orbits`, `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, `lem-generalized-central-character-submodules-are-direct-summands`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `thm-every-category-o-object-has-finite-length`

Claim and conventions: Every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lecture 6 §2 Theorem 2.4 and proof, pp.5–6.

Dependencies: `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`, `thm-category-o-decomposes-by-generalized-central-character`, `prop-equivalent-support-description-of-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-hom-spaces-in-category-o-are-finite-dimensional`

Claim and conventions: For $M,N\in\mathcal O$, $\operatorname{Hom}_{\mathcal O}(M,N)$ is finite dimensional. For every weight $\lambda$, $\operatorname{End}_{\mathcal O}(L(\lambda))=\mathbb C\operatorname{id}$.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lecture 6 §2 Proposition 2.6 and Lemma 2.7, p.6.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `thm-simple-objects-of-category-o-are-highest-weight-modules`, `thm-universal-property-of-verma-modules`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `def-restricted-dual-of-a-weight-module`

Claim and conventions: For an $\mathfrak h$-semisimple module $M$ with finite-dimensional weight spaces, its **restricted Chevalley dual** is

$$D(M)=\bigoplus_{\mu\in\mathfrak h^*}M_\mu^*,\qquad (x\varphi)(m)=\varphi(\tau(x)m)\quad(x\in U(\mathfrak g)).$$

Here each functional is extended by zero on the other weight spaces and $\tau$ is the fixed anti-involution of [[def-chevalley-contravariant-form]]. In particular $\tau(h)=h$ and $D(M)_\mu=M_\mu^*$. A map $f:M\to N$ induces $D(f):D(N)\to D(M)$ by precomposition. The action law follows from $\tau(xy)=\tau(y)\tau(x)$; a root vector of weight $\alpha$ sends $M_\mu^*$ to $M_{\mu+\alpha}^*$, so the restricted sum is stable. This is a complex-linear algebraic dual, with no conjugation. Ordinary Lie-module duality has a minus sign and reverses weights; twisting that dual by the Lie automorphism $x\mapsto-\tau(x)$ gives the convention used here.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Constructions 3.1, 3.4, 3.7 and Lemmas 3.2, 3.8, pp.4–5.

Dependencies: `def-chevalley-contravariant-form`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof not-applicable. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-simple-highest-weight-modules-are-restricted-self-dual`

Claim and conventions: For every highest weight $\lambda$, $D(L(\lambda))\cong L(\lambda)$ as $\mathfrak g$-modules.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Proposition 3.10, p.5.

Dependencies: `def-restricted-dual-of-a-weight-module`, `thm-verma-module-has-a-unique-simple-quotient`, `prop-weights-of-a-verma-module-lie-below-lambda`, `thm-universal-property-of-verma-modules`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-restricted-duality-is-an-exact-involution-on-category-o`

Claim and conventions: Restricted Chevalley duality is an exact contravariant equivalence $D:\mathcal O\to\mathcal O^{\mathrm{op}}$, with a natural isomorphism $D^2\cong\operatorname{id}$. It preserves each weight-space dimension, the formal character, and every simple composition multiplicity.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Lemma 3.8 and Theorem 3.9, p.5; Etingof Proposition 20.9 p.103.

Dependencies: `def-restricted-dual-of-a-weight-module`, `lem-simple-highest-weight-modules-are-restricted-self-dual`, `thm-every-category-o-object-has-finite-length`, `thm-category-o-is-abelian-and-extension-closed`, `thm-jordan-holder-theorem-in-an-abelian-category`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `def-standard-and-costandard-objects-in-category-o`

Claim and conventions: For $\lambda\in\mathfrak h^*$, the **standard** and **costandard** objects are

$$\Delta(\lambda)=M(\lambda),\qquad\nabla(\lambda)=D(M(\lambda)).$$

The Verma module is defined in [[def-verma-module]], and [[prop-restricted-duality-is-an-exact-involution-on-category-o]] supplies the duality on $\mathcal O$. These symbols name the two objects; no projectivity or highest-weight-category axiom is part of this definition.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Definition 3.12, p.5.

Dependencies: `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-verma-module`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof not-applicable. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-costandard-objects-have-simple-socles`

Claim and conventions: The costandard object $\nabla(\lambda)$ has a unique simple submodule, isomorphic to $L(\lambda)$. Its socle, the sum of all simple submodules, is that submodule.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Corollary 3.13, p.5.

Dependencies: `prop-restricted-duality-is-an-exact-involution-on-category-o`, `thm-verma-module-has-a-unique-simple-quotient`, `def-standard-and-costandard-objects-in-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `def-integral-weyl-group-of-a-weight`

Claim and conventions: For a weight $\lambda$, define

$$\Phi_\lambda=\{\alpha\in\Phi:\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z\},\qquad W_\lambda=\langle s_\alpha:\alpha\in\Phi_\lambda\rangle\subset W.$$

Reflections and coroots are those of [[def-root-reflections-and-the-weyl-group-action]], with the shift from [[def-weyl-vector-rho-for-a-chosen-positive-system]]. The **integral-reflection linkage class** through $\lambda$ is $W_\lambda\cdot\lambda$. The word integral includes zero and negative integral pairings. If $\Phi_\lambda$ is empty the generated group is $\{1\}$. This definition uses generating reflections; no identification with a root-lattice-coset stabilizer is assumed.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §3.4 definitions p.52 and Theorem (a),(b) p.53; §4.9 p.83.

Dependencies: `def-root-reflections-and-the-weyl-group-action`, `def-weyl-vector-rho-for-a-chosen-positive-system`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof not-applicable. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-integral-reflection-orbits-are-linkage-equivalence-classes`

Claim and conventions: The set $\Phi_\lambda$ is preserved by its root reflections. If $\mu\in W_\lambda\cdot\lambda$, then $\Phi_\mu=\Phi_\lambda$ and $W_\mu=W_\lambda$. The equivalence classes generated by moves $\eta\mapsto s_\alpha\cdot\eta$ with $\alpha\in\Phi_\eta$ are exactly $W_\lambda\cdot\lambda$. Every strong-linkage chain stays in one such class.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §3.4 p.52, displayed definitions and invariance statements.

Dependencies: `def-integral-weyl-group-of-a-weight`, `def-strong-linkage-order-on-weights`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-extensions-between-distinct-o-linkage-classes-split`

Claim and conventions: A short exact sequence $0\to L(\mu)\to E\to L(\lambda)\to0$ in $\mathcal O$ splits whenever $\lambda$ and $\mu$ belong to distinct integral-reflection linkage classes.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §1.13 pp.30–32 and §4.9 p.83, decomposed proof route.

Dependencies: `prop-restricted-duality-is-an-exact-involution-on-category-o`, `thm-universal-property-of-verma-modules`, `thm-strong-linkage-principle-for-verma-modules`, `lem-integral-reflection-orbits-are-linkage-equivalence-classes`, `thm-verma-module-has-a-unique-simple-quotient`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-o-modules-split-across-separated-simple-classes`

Claim and conventions: Partition the isomorphism classes of simple objects of $\mathcal O$ into parts $\mathcal P_t$. Suppose every extension of two simples from different parts splits, in either order. Then each $M\in\mathcal O$ has a unique decomposition $M=\bigoplus_tM_t$ into submodules whose composition factors lie in $\mathcal P_t$, with finitely many nonzero terms. This decomposition is functorial, and maps between modules supported on disjoint collections of parts are zero.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §1.13 p.31, formal decomposition paragraph.

Dependencies: `thm-every-category-o-object-has-finite-length`, `thm-jordan-holder-theorem-in-an-abelian-category`, `thm-category-o-is-abelian-and-extension-closed`.

Decision: The source leaves the formal finite-length decomposition to the reader. The local proof supplies the pushout, pullback, retraction and uniqueness arguments explicitly; its proof provenance is therefore ai-generated rather than literature-derived or a claimed transcription. Provenance: statement literature-derived, proof ai-generated. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `thm-central-character-summands-split-into-linkage-blocks`

Claim and conventions: For a linkage class $C=W_\lambda\cdot\lambda$, let $\mathcal O_C$ be the full subcategory of objects all of whose simple composition factors have labels in $C$. Then $\mathcal O=\bigoplus_C\mathcal O_C$, and each nonzero $\mathcal O_C$ is indecomposable as a categorical direct summand. These are precisely the blocks. Each $\mathcal O_C$ lies in $\mathcal O_{\chi_\lambda}$; a central-character summand can contain several blocks. Independently, grouping weights by cosets of the root lattice $Q$ gives a canonical coarser decomposition by weight cosets.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §1.13 pp.30–32 and §4.9 pp.83–84.

Dependencies: `def-integral-weyl-group-of-a-weight`, `lem-integral-reflection-orbits-are-linkage-equivalence-classes`, `lem-extensions-between-distinct-o-linkage-classes-split`, `lem-o-modules-split-across-separated-simple-classes`, `thm-verma-embedding-for-an-arbitrary-positive-root`, `thm-verma-module-has-a-unique-simple-quotient`, `cor-central-characters-are-dot-weyl-orbits`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `cor-restricted-duality-preserves-linkage-blocks`

Claim and conventions: Restricted duality preserves every linkage block. If $B$ is a Chevalley-contravariant bilinear form on $M\in\mathcal O$, then $B(M_C,M_{C^{\prime}})=0$ for distinct block summands $C\ne C'$. No nondegeneracy of $B$ is required.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §4.9 Exercise p.84; Lin L8 Corollary 3.11 p.5.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-chevalley-contravariant-form`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `lem-verma-self-extensions-in-category-o-split`

Claim and conventions: Every short exact sequence $0\to M(\lambda)\to E\xrightarrow{p}M(\lambda)\to0$ in $\mathcal O$ splits.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Exercise 15.6(i), p.80.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `thm-universal-property-of-verma-modules`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`

Claim and conventions: If $E$ is a finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module, the functor $M\mapsto E\otimes_{\mathbb C}M$ with diagonal action is exact and maps $\mathcal O$ into itself.

Sources: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §2 Lemma 2.5, p.3.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `def-grothendieck-group-and-character-of-category-o`

Claim and conventions: For the abelian category [[thm-category-o-is-abelian-and-extension-closed]], define $K_0(\mathcal O)$ as the free abelian group on isomorphism classes $[M]$, modulo $[B]=[A]+[C]$ for every short exact sequence $0\to A\to B\to C\to0$. A set of representatives suffices: every finitely generated $U(\mathfrak g)$-module is a quotient of some $U(\mathfrak g)^n$, and those quotients form a set up to isomorphism.

Define the formal character by $\operatorname{ch}M=\sum_\mu(\dim M_\mu)e^\mu$. By [[prop-equivalent-support-description-of-category-o]], its integer coefficients are finite and supported in finitely many downward cones. Let $\mathscr R$ be the group of all such integer coefficient families, with pointwise addition. It is a ring with $e^\mu e^\nu=e^{\mu+\nu}$: at a fixed resulting weight, in any pair of cones the equation $\beta+\gamma=\eta$ with $\beta,\gamma\in Q^+$ has finitely many solutions, since every simple-root coefficient is bounded. Taking weight spaces is exact, so character gives a well-defined homomorphism $K_0(\mathcal O)\to\mathscr R$. The zero object's class and character are zero.

Sources: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §2 Definition 2.4 and paragraph after Lemma 2.5, p.3.

Dependencies: `thm-category-o-is-abelian-and-extension-closed`, `prop-equivalent-support-description-of-category-o`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof not-applicable. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`

Claim and conventions: The classes $[L(\lambda)]$, and separately the classes $[M(\lambda)]$, form $\mathbb Z$-bases of $K_0(\mathcal O)$. For a fixed finite central-character label set $\Lambda=W\cdot\lambda$, the transition between its standard and simple classes is unitriangular in any linear order extending $\leq$. This remains true on a downward-closed subset of that finite poset. It is not a claim about finite downward ideals of all of $\mathfrak h^*$.

Sources: https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf — §6 Theorem 6.2(4) and proof, p.10.

Dependencies: `def-grothendieck-group-and-character-of-category-o`, `thm-every-category-o-object-has-finite-length`, `thm-jordan-holder-theorem-in-an-abelian-category`, `cor-central-characters-are-dot-weyl-orbits`, `thm-verma-module-has-a-unique-simple-quotient`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `ex-the-regular-integral-sl2-block-of-category-o`

Claim and conventions: For $\mathfrak g=\mathfrak{sl}_2$ identify a highest weight with its value on $h$, so $\rho=1$ and $s\cdot\lambda=-\lambda-2$. For every integer $n\geq0$, the regular integral block has simple labels $n$ and $-n-2$. Its standards are $M(n)$ and $M(-n-2)=L(-n-2)$, and

$$0\longrightarrow L(-n-2)\longrightarrow M(n)\longrightarrow L(n)\longrightarrow0$$

is nonsplit. Its costandards are $\nabla(n)$ and $\nabla(-n-2)=L(-n-2)$, with the nonsplit sequence $0\to L(n)\to\nabla(n)\to L(-n-2)\to0$. The linkage order is $-n-2<n$.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Example 3.17, p.6; Lin L2 Exercise 2.17 p.4.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `prop-costandard-objects-have-simple-socles`, `prop-simple-reflection-embedding-of-verma-modules`, `thm-verma-module-has-a-unique-simple-quotient`, `cor-verma-irreducibility-criterion-from-shapovalov-determinants`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `ex-a-generic-sl2-block-is-semisimple`

Claim and conventions: For $\mathfrak g=\mathfrak{sl}_2$ and $\lambda\in\mathbb C\setminus\mathbb Z$, $\mathcal O_{\chi_\lambda}$ has exactly two distinct singleton linkage blocks, with labels $\lambda$ and $-\lambda-2$. Each block is equivalent to finite-dimensional complex vector spaces. In particular the central-character summand is semisimple but is not one indecomposable block.

Sources: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §15.1 Example 15.8, p.81.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `lem-verma-self-extensions-in-category-o-split`, `prop-hom-spaces-in-category-o-are-finite-dimensional`, `cor-verma-irreducibility-criterion-from-shapovalov-determinants`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `ex-a-singular-a2-central-character-summand`

Claim and conventions: In type $A_2$, take $\lambda=-\omega_1$, with fundamental-weight coordinates $\rho=(1,1)$. Then $\lambda+\rho=\omega_2$ has Weyl stabilizer $\langle s_1\rangle$. The dot orbit consists of

$$-\omega_1,\qquad-2\omega_2,\qquad-2\omega_1-\omega_2.$$

These three simple labels form a single singular integral central-character block. Only labels and stabilizer are computed here.

Sources: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §4.11 Exercise, pp.85–86, singular three-element class.

Dependencies: `thm-central-character-summands-split-into-linkage-blocks`, `def-integral-weyl-group-of-a-weight`, `cor-central-characters-are-dot-weyl-orbits`, `def-root-reflections-and-the-weyl-group-action`.

Decision: The source gives a typical three-element singular A2 class with an antidominant representative. This item chooses the explicit representative -omega1 of such a class and computes its coordinates; statement provenance is ai-altered to record that specialization. Provenance: statement ai-altered, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o`

Claim and conventions: False claim: replacing the restricted sum in Chevalley duality by the full algebraic dual always gives an object of $\mathcal O$.

For $\mathfrak{sl}_2$ and any $\lambda\in\mathbb C$, the full Chevalley-twisted dual $\operatorname{Hom}_{\mathbb C}(M(\lambda),\mathbb C)$ is not $\mathfrak h$-semisimple and hence is not in $\mathcal O$.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 Lemma 3.2 and Construction 3.7, p.4.

Dependencies: `def-restricted-dual-of-a-weight-module`, `def-verma-module`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o`

Claim and conventions: False claim: local $\mathfrak n^+$-finiteness, finite-dimensional weight spaces and support in finitely many downward cones suffice for membership in $\mathcal O$ without finite generation.

For $\mathfrak{sl}_2$, $X=\bigoplus_{n\geq0}M(-2n)$ has these three local properties, with $\operatorname{supp}X=-2\mathbb Z_{\geq0}$ and $\dim X_{-2k}=k+1$ for $k\geq0$, but is not finitely generated.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 Definition 3.1; direct explicit hypothesis test.

Dependencies: `def-bgg-category-o`, `prop-weights-of-a-verma-module-lie-below-lambda`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement ai-generated, proof ai-generated. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o`

Claim and conventions: False claim: a finitely generated weight module with finite-dimensional weight spaces must belong to $\mathcal O$.

For $\mathfrak{sl}_2$, induce the weight-zero one-dimensional module from the negative Borel $\mathbb Ch\oplus\mathbb Cf$. The resulting lowest-weight Verma module $X$ is cyclic, has one-dimensional weight spaces at $2k$ for $k\geq0$, and is not in $\mathcal O$.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — Lecture 8 §3 paragraph after Corollary 3.3, p.4.

Dependencies: `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement ai-generated, proof ai-generated. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `cex-category-o-is-not-extension-closed-in-all-g-modules`

Claim and conventions: False claim: $\mathcal O$ is extension closed in the category of all $\mathfrak g$-modules.

For $\mathfrak{sl}_2$ and any $\lambda\in\mathbb C$, let $V=\mathbb Cv\oplus\mathbb Cw$ be a positive-Borel module with $ev=ew=0$, $hv=\lambda v$ and $hw=\lambda w+v$. Then $E=U(\mathfrak g)\otimes_{U(\mathfrak b)}V$ is an extension of $M(\lambda)$ by itself in ambient modules, but is not in $\mathcal O$.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Warning 3.4, p.5; Etingof Exercise 15.6(ii), p.80.

Dependencies: `def-bgg-category-o`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `def-verma-module`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Authored `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o`

Claim and conventions: False claim: the tensor product of two objects of $\mathcal O$ always belongs to $\mathcal O$.

For $\mathfrak{sl}_2$, $X=M(0)\otimes M(0)$ with diagonal action has support $-2\mathbb Z_{\geq0}$, weight multiplicities $\dim X_{-2k}=k+1$, and locally nilpotent $e$ action, but is not finitely generated over $U(\mathfrak g)$.

Sources: https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf — Lecture 2 §3 Exercise 3.9(2), pp.5–6.

Dependencies: `def-bgg-category-o`, `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`.

Decision: Retained the reviewed claim; wrote the local argument with the stated hypotheses. Provenance: statement literature-derived, proof ai-altered. Proof contract records the written steps and boundary dispositions. Validation pending the focused batch checks. No unresolved mathematical obligation for this item; next action is the next assigned item and then validation.

### Final citation and provenance reconciliation

Kept all 39 stable IDs and all planned claims; no claim was dropped or narrowed beyond the qualifications already accepted in Step 3. The block-splitting proof is tagged ai-generated because the source leaves that argument to the reader. The explicit singular A2 specialization is tagged ai-altered. These two component changes are reflected in the owned manifest as well as the item files. The two generated counterexamples retain generation.role=counterexample and are not dependency targets. No judge records were created.

Separated mixed-document source titles into individual references with the exact URL for each locator (closure, highest-weight quotient filtration, detector, duality, block orthogonality, regular sl2 and ambient extension). Kept Humphreys §3.4 references at the definitions actually used, without importing its stronger stabilizer theorem.

Added direct fact mappings at the actual uses: the detector cites the support theorem for finite weight dimensions; finite length cites the highest-vector lemma and the scalar-center lemma; the Grothendieck bases cite the simple-object classification and scalar-center lemma. These earlier, resolvable dependencies are recorded only in the owned manifest and items, with exact target text and uses in the proof contracts. The written arguments and boundary dispositions are unchanged. Next action: rerun focused checks after these citation/metadata edits, then record final receipts.

### Final Step-5 validation receipts

Authored all 31 A items and 8 B items enumerated in the checkpoints above. Wrote both planned pages directly at `library/lie-theory/category-o-finiteness-duality-and-blocks.md` and `library/lie-theory/category-o-finiteness-duality-and-blocks-examples.md`. All 39 items and both pages are draft. Completed the 33 proof-bearing entries in `research/frontier-33-batch-14.proof-contracts.json`; the six definitions have no proof-bearing section. Every contract records exact dependency-section quotations, actual fact uses, one mapping per proof step and all eight boundary dispositions.

Checks actually run on the final material:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 39 explicit `items/ID.md` arguments from this batch manifest: PASS, 33 proof-bearing items checked, 0 failing. No canonical phase repair was requested. The six definitions were correctly skipped as non-proof-bearing.
- `node tools/validate-plan.mjs`: the literal bare command returned its usage requirement (exit 2); reran with its required input as `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: PASS (exit 0), no item-level cycles, forward references, B-page dependencies or unresolved IDs among 892 pages with item lists. The tool reports 463 other planned pages without item lists; their unasserted item graphs are outside this batch's validation claim.
- `node tools/content-policy.mjs research/frontier-33-batch-14.pages.json`: PASS, 39 scoped items, 0 errors, 0 warnings. The first attempt rejected inline JSON-style reference arrays in otherwise valid YAML; references were rewritten as block YAML and the check rerun successfully.
- `node tools/proof-contract.mjs research/frontier-33-batch-14.proof-contracts.json --strict`: PASS, 33/33 checked, 0 errors, 1 heuristic `shotgun-bracket` warning on `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`, step 1.1. Disposition: retained with a factual explanation. This step actually uses the K0 definition (F1), finite length (F2), Jordan–Hölder (F3), and classification of simples (F7) to establish the simple basis. Step 2.1 separately cites the facts used for the standard transition; steps 3.1–4.1 explicitly invert the finite triangular matrix and assemble its direct sum. The first bracket is not an announcement standing in for later proof uses. No citation was moved to a step that does not use it merely to suppress the heuristic.
- Additional focused `node tools/rendercheck.mjs` with the 39 item paths and two page paths: PASS, 41 files, every frontmatter parses with the renderer's YAML parser and every math span parses with real KaTeX; no prohibited or unbalanced delimiters or links inside math.
- Focused inventory assertions: PASS, 39 draft items, two draft pages at their planned category paths, 33 proof contracts, every declared dependency path exists, and no judge record is present.

No finite-smoke computation was used as proof or claimed to have run. No new dropped or narrowed claim, missing source passage, or unresolved mathematical authoring obligation remains. No permission request, judge stamp, publication action, plan edit, workflow transition, or edit to another batch was performed. The existing independent scaffold review and source-fetch records were preserved. Step-5 authoring is complete; subsequent review and workflow transitions belong to their assigned roles and the build driver.

### Gate repair checkpoint

The category-O examples page title now uses an actual em dash, closing the matching reader/refuter `yaml-escape` finding without changing the manifest title or page content. Focused rendering, depcheck, and the refreshed author receipt pass.

## Reharvest-2-b14 same-document URL repair — 2026-09-07

The assigned `research/frontier-33-reharvest-plan.json` was read first.  It
currently has `work: []`, hence no batch-14 work row, named dead source, or
claim constraint.  That plan is stale relative to the current run liveness
receipt: its HTTP 503 row for the archived Humphreys monograph caused
`source-backing` to report three orphaned carriers before this repair:
`lem-o-modules-split-across-separated-simple-classes`,
`def-integral-weyl-group-of-a-weight`, and
`ex-a-singular-a2-central-character-summand`.  The plan itself is not a
batch-authorised artifact, so it was not regenerated or edited.

The failed reader-facing archive was
`https://web.archive.org/web/20250810231247if_/https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf`.
The archive returned HTTP 503 in `research/frontier-33-url-liveness.json` and
an Internal Error in the browser; its CDX query also returned an Internal
Error.  Before selecting any different treatment, the preserved original URL
was fetched and read as the complete 303-page PDF:
`https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf`.
It has the same title and author and its contents identify §1.13 *Blocks*,
§3.4 *The Reflection Group W[λ]*, and §4.11 *Application to sl(3, C)*.

The relevant passages were reread to completion through the direct PDF:

- §1.13, printed pp.30–32/PDF pp.42–44, defines blocks using chains of
  nonsplit simple extensions and states the unique direct-sum decomposition
  by blocks.  The existing included row remains the source for
  `lem-o-modules-split-across-separated-simple-classes`.
- §3.4, printed pp.52–53/PDF pp.64–65, defines
  $\Phi[\lambda]$, $W[\lambda]$, states their invariance on a
  $W[\lambda]$ dot orbit, and states that the group is generated by the
  indicated reflections.  The retained row backs
  `def-integral-weyl-group-of-a-weight`; the existing constraint remains that
  the scaffold uses the reflection-generated definition and does not import
  the stronger stabilizer identification.
- §4.11, printed pp.85–86/PDF pp.97–98, gives the terminal exercise that a
  typical nontrivial singular integral $\mathfrak{sl}_3$ linkage class has
  three elements.  The retained row backs
  `ex-a-singular-a2-central-character-summand`; its explicit
  $-\omega_1$ specialization remains an `ai-altered` calculation, not a
  claim of verbatim source coordinates.

Accordingly, the batch coverage changes only the Humphreys source's
reader-facing `url` back to this verified original same-document URL.  The
unusable archive snapshot is retained verbatim as `archived_fallback.snapshot`
with its earlier recovery provenance.  Its nine faithful harvested contents
rows and every disposition are unchanged; no result, item, dependency,
manifest, page, or mathematical claim was removed, duplicated, or narrowed.
The browser reading receipt records the direct full-PDF check.  The existing
full-text byte stamp is retained for the previously fetched same document; no
new byte hash was invented for the direct URL.

Validation in this dispatch:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-14.coverage.json --require-destination` — **PASS**, 1 page, 82 harvested results, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-14.coverage.json --stamp --timeout-sec 30` — **PASS**, 6/6 full-text stamps present and 0 newly stamped.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-14.coverage.json --stamp --force --timeout-sec 30` — **BLOCKED**: 0/6 newly checked, every unrelated host returned `EAI_AGAIN`, including the restored direct URL.  The command left the six existing stamps in place and no replacement hash was fabricated.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-14.coverage.json --out /tmp/frontier-33-b14-reharvest-2-liveness.json --recover --fail-on-dead --timeout-ms 5000` — **BLOCKED**: the local curl resolver failed for all six current URLs (`curl: (6) Could not resolve host`), including the restored direct host; its zero recoveries do not establish document absence.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-14.coverage.json --liveness research/frontier-33-url-liveness.json --require-verified` — **PASS**, 31 authored results across one file remain backed.  The pre-repair invocation named precisely the three carriers above.  The old run receipt has no row for the restored direct URL because it was then an excluded `original_url`; `source-backing` deliberately treats a URL absent from its sweep as unknown rather than falsely dead.  Thus this structural pass is not represented as a fresh transport probe; the direct browser full-PDF read is the current positive reading evidence.

Next action: from a resolver-capable runner, regenerate run liveness and force
fetch stamping against the restored direct source.  Until the transport gates
can record a fresh direct-URL byte stamp and live probe, this batch is not
asserted gate-ready.  The mathematical harvest and all claim constraints are
complete and preserved.
