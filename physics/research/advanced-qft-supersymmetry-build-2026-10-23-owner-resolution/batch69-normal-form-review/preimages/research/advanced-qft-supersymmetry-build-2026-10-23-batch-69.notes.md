# Batch 69 — authoring notes

Run: advanced-qft-supersymmetry-build-2026-10-23  
Pair: qftx-positive-real-linear-monad-normal-forms / qftx-positive-real-linear-monad-normal-forms-examples

## Scope and planning record

- No separate design section or design dossier was found for this pair. The pair is scaffolded from the current canonical plan, the owner-authoring direction, the append-2 supplier handoff, and the inspected source dossiers. No absent design section is claimed as read.
- The task brief lists five A-page prerequisites. The current canonical plan and applied batch-69 manifest add divisors-riemann-roch-and-duality; this extra page requirement is retained.
- The owner-authoring direction and append-2 supplier-consumer handoff require the additional scalar analytic supplier page qftx-gaga-projective-scalar-dolbeault and item thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology. The exact consumer use is H^1(P^3,O(-1)) for global constant sections, O(-1) on real lines, and H^1/H^2(P^3,O(-2)) for unique chain lifting. These edges are added to the batch-69 A page and theorem. The batch-67 page, scalar carrier, and full proof appeared during authoring; that proof invokes a batch-67 twisting-line-bundle definition and a Laurent–Čech lemma.
- The charge proof directly uses the published Thom/Poincaré-duality item and Chern–Weil characteristic-class theorem; the A page therefore also requires intersection-pairings-self-intersection-and-euler-classes and chern-and-pontryagin-classes-by-splitting-and-complexification. The former page transitively supplies the Chern–Weil page. The B-page projection-curvature definition requires riemann-curvature-and-riemannian-submanifolds, so that page is added to B. These are item-home prerequisites found from actual dependencies, not new theorem claims.
- The canonical theorem contract is retained in full: positive holomorphic sigma-Hermitian linear monads on CP3, dimensions k,2k+N,k with N>=2, the exact raw ADHM block and zero moments, stable and costable regularity, exact U(k) residual classification, framing, rotations, first-order locally-free/base-change range, and the Chern/charge normalization. No theorem claim is narrowed.
- The charge proof’s actual published prerequisites require intersection-pairings-self-intersection-and-euler-classes and chern-and-pontryagin-classes-by-splitting-and-complexification on A. The first page transitively supplies the Chern–Weil page. The one-instanton projection connection uses the published curvature definition on B, so B also requires riemann-curvature-and-riemannian-submanifolds. These page edges follow exact item-home prerequisites; no claim was weakened to avoid them.
- The task brief’s omitted divisors page and owner-required analytic scalar supplier are recorded as plan/interface differences. The append-2 source dossier is conditional evidence only; its calculations are checked locally below.

## Current item, page, and dependency evidence

At the start of authoring, batch-69.pages.json had empty A and B inventories; none of this pair’s item carriers, A/B page carriers, notes, coverage, cross-batch dependency file, or proof contracts existed. The canonical plan contains the exact assigned theorem and two example declarations.

The initial dependency-levels file recorded batch 59 at level 0, batch 67 at level 0, and batch 69 at level 1 with requires=[59]. Current manifests and actual item dependencies now compute batch 67 at level 1 and batch 69 at level 2 with requires=[59,67]. The shared run-wide dependency-levels file is stale; it is not edited under this dispatch. Batch-69 item levels are recomputed from the full current run graph, including current batch-67 items.

Inspected current supplier readiness:

- def-qftx-adhm-linear-data-stability-and-regularity: current batch-59 item, ready record hash-current. Its exact interface defines the raw complex equation, real moment map +II†-J†J, word stability, costability, regularity, GL(V)/U(V) actions, and the torus/framing convention.
- thm-qftx-adhm-real-complex-quotient-correspondence: current batch-59 item, ready record hash-current. Its zero-level statement applies to regular complex orbits and gives a unique unitary orbit; its full finite-dimensional minimization and uniqueness proof was read.
- thm-qftx-projective-gaga-for-monad-data: current batch-59 item has an escalated readiness record because its proof remains conditional on projective analytic local flatness/Cartan A–B/uniform generation and relative direct-image comparison. This theorem is not an item-level dependency of batch 69 and is not used in the proof; the declared qftx-ADHM page edge uses the inspected raw ADHM definition and quotient theorem only.
- thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: during batch-69 authoring, a current carrier and populated batch-67 manifest appeared. Its Statement assumes full AC, proves the scalar structure-sheaf groups for 0<=r<=3, and includes Dolbeault comparison for finite-rank holomorphic bundles. Its proof invokes lem-qftx-gaga-projective-cover-laurent-cohomology, whose full proof explicitly contracts mixed Laurent–Čech modes and proves locally uniform convergence of the homotopy sums. I read both complete proofs and matched their actual interfaces to batch 69. A later current loadStep1Record plus step1Decision check returns hash-current ready records for the scalar theorem, the Laurent–Čech supplier, and def-qftx-gaga-projective-twisting-line-bundles. The A-page/item edges are therefore closed for Step 1; this records authored prerequisite readiness, not independent acceptance.

No supplier is authored or repaired by this batch.

## Mathematical route and unresolved status

The source dossiers are preparation only. The completed local route is:

1. Prove the holomorphic hyperplane exact sequences stalkwise from the projective coordinate and transition definitions. Then derive analytic O(-1) and O(-2) vanishings from the current full-AC scalar theorem and these exact sequences.
2. Lift morphisms of monads using the exact H^1(K* tensor A') obstruction and H^0 ambiguity groups; prove their vanishing from O(-1)/O(-2). Apply uniqueness to the sigma-dual lift and its involution.
3. Identify global constant sections L and the coefficient-image subspace M, prove L=M-perp, and split every constant flat summand orthogonally. Positivity on real-line sections makes H positive on L.
4. Reconstruct the arbitrary-rank Hermitian positivity argument from Verdier Exposé VII 6.13–6.18, including the block form, Schur-complement inequality, Laplacian calculation, Stokes asymptotic, and nondegeneracy step. The diagrams are explanatory only.
5. Normalize the two mu coefficient maps as orthogonal isometric copies of U, identify their orthogonal complement with the unitary framing W, extract all raw coefficients, and expand beta alpha to obtain both raw moment equations.
6. Prove stable/costable equivalence by the finite common-eigenvector argument and the affine chart [1:0:z1:z2]; prove the converse full-rank criterion along the real-line incidence and at infinity.
7. Classify residual changes, verify the compact rotation chain factors by direct substitution with the O(±1) linearizations, and give the exact first-order dual-number category and nilpotent normalization. The first-order claim is limited to that category; no arbitrary analytic-family algebraization or holomorphic choice of unitary representatives is asserted.
8. Compute the finite O(m) Chern character, the topological line-class comparison and the positive incidence-fibre Thom calculation pi*u=H^2. The charge clause is conditional on an underlying Ward pullback bundle with c1=0.

All mathematical prerequisites now have current carriers and inspected hypotheses/proofs, including the ready batch-67 scalar theorem, Laurent–Čech supplier, and twisting-line-bundle definition. No unresolved mathematical blocker remains in the assigned pair. Dependency levels from the full current run graph are: family-base definition and charge calculation 0; hyperplane-sequence and raw rank lemmas 1; analytic twists 3; chain lifting 4; flat splitting 5; internal positivity 6; main theorem 7; examples 8. All eleven items have hash-current Step 1 ready records; those records do not constitute independent approval.

Scoped validation notes: source-fetch check reports 9/9 sources verified; coverage-checklist, proof-contract, content-policy, page/manifest consistency, and proof-layout pass. Every batch-69 item label matches its full-run dependency-level computation. The full item-level command reports six unrelated batch-67 label mismatches; they do not include the batch-69 items or the three exact batch-67 suppliers used here. Full validate-plan reports no undeclared prerequisites on batch 69 after adding the actual item-home page edges; it does report an outside-scope page edge from qftx-adhm-zero-fi-asd-correspondence through lem-qftx-adhm-real-monad-normalization-and-charge to the batch-69 A page. Do not edit that other page/item under this dispatch. It also reports legacy errors and redundant-prerequisite warnings outside or inherited by this pair; task/plan-listed broad requirements are retained. The run-wide batch-dependency-levels file remains stale. The last successful graph computation gave batch 69 level 2 with requires=[59,67]; the next recomputation is currently blocked by malformed unquoted YAML at items/ex-qftx-gaga-analytic-projective-point.md:44 (the locator contains a colon). This file and the shared levels artifact are outside batch-69 write scope; owner reconciliation is recorded as a blocker. These run-wide blockers do not change the current batch-69 item-level calculations or the current hash-bound Step 1 records.

## Source reading and disposition

All successful PDF fetches below were freshly retrieved and inspected. The verified hashes for Barth–Hulek and Verdier match the owner handoff’s expected hashes. No source was dropped and no recovery retry was needed. The final source-fetch-check --stamp fetched and verified all 9 coverage sources; the stamps are in batch-69.coverage.json.

- Barth–Hulek, “Monads and Moduli of Vector Bundles,” https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf. Read printed pp. 324–326 and 330–334, including §3 Proposition 4 and §4 Propositions 5–6. Supports the monad morphism lifting/uniqueness mechanism and bilinear orthogonal/symplectic self-duality. It does not prove the required higher-rank sigma-Hermitian lift or positivity; those are reconstructed locally. Disposition: included with stated limits. Fresh SHA256: 0e2ba7c00d950774c1dd60b3a01b1246a16046f456540a750e8ad79b056cba25.
- Verdier, Exposé VII, Astérisque 71–72, https://numdam.org/item/AST_1980__71-72__1_0.pdf. Read printed pp. 124–130, especially Lemma 6.10, Proposition 6.11, and the full calculation 6.13–6.18. Supports the finite-dimensional arbitrary-auxiliary-rank Hermitian positivity argument under the exact a/b/c-prime hypotheses. The surrounding instanton classification is rank two and is not imported as the batch-69 theorem. Disposition: included; the proof is reproduced locally. Fresh SHA256: e76f7f10e234f186178712b952f84bda1f62a0a6c1949d4d1f3debd369fe0df2.
- Donaldson, “The ADHM construction of Yang–Mills instantons,” https://arxiv.org/pdf/2205.08639. Read §3–4, printed pp. 4–6, and §6, printed pp. 10–11. Supports the twistor real-line setup, monad terminology, ADHM equations, framing and positive-Euclidean orientation. Its displayed matrix convention differs from the approved raw convention, and its roadmap does not prove the inverse positive-real normal form. Disposition: included for setup and comparison, not as a proof substitute. Fresh SHA256: f7f8ac49b9a5e09985c7e0b507f32f22c8a52d5f1ab21f9b20571383083a9de0.
- Nakajima–Yoshioka, “Lectures on Instanton Counting,” https://arxiv.org/pdf/math/0311058. Read the full-text §§3.1, printed pp. 17–19 (PDF pages 17–19). Supports framed data, the locally-free ASD locus and torus conventions; its U(N) sign convention is compared rather than silently substituted. Disposition: included as the full lecture-note treatment; it does not supply the positive monad inverse proof. Fresh SHA256: 16492009b5b748797936c389d7456b9b01e2a22108a22ce35845eb1bd2cf34fd.
- Brantner, “Infinity-Categories and Deformation Theory,” Lecture 1, https://people.maths.ox.ac.uk/brantner/24L1.pdf, and Stacks Project, Tag 0B28, https://stacks.math.columbia.edu/tag/0B28. Read the complete relevant first-order dual-number definition and functor-of-points passage. Supports the choice A=C[epsilon]/(epsilon^2) and the epsilon-to-r epsilon maps; the locally defined family category and its Hermitian normalization are proved here. Disposition: included for the base definition, not as a monad-family theorem.

The task’s old Donaldson locator “Sections 3–6, pp. 4–11” is corrected in current item metadata to the sections actually inspected. The Rawnsley article in the append-2 handoff concerns batch 68’s coupled Penrose claim and is not cited as batch-69 support.

## Per-item authoring ledger

This section is updated after each item is completed. Each row records the exact claim, conventions, source support, dependencies, current decision, check results, remaining obligations, and next action.

### def-qftx-positive-real-monad-first-order-families

Claim/conventions: Defines the exact first-order base A=C[epsilon]/(epsilon^2), conjugation fixing epsilon, involution-preserving base maps epsilon->r epsilon for r real, locally free monad/base-change range, free global sections, direct-summand coefficient-image base change, trivial fixed real-line restrictions and section base change, reduced-fiber positivity, isometric infinity framing, and pairing-preserving family isomorphisms. Positivity is only a property of the reduction.

Sources: Brantner, Lecture 1, printed pp. 1–2, https://people.maths.ox.ac.uk/brantner/24L1.pdf; Stacks Project Definition 33.16.1 and the dual-number tangent construction, https://stacks.math.columbia.edu/tag/0B28. Both full relevant passages were inspected. They support the chosen dual-number base and its scalar endomorphisms, not the positive monad classification.

Dependencies: none; dependency_level 0. Decision: complete definition; no mathematical blocker. Validation: scoped YAML/metadata, coverage, source-fetch, proof-contract, content-policy, page/manifest, and proof-layout checks pass. Step 1 record: ready, hash-current. The first-order range is consumed by the main theorem.
### lem-qftx-positive-real-monad-hyperplane-twist-sequences

Claim/conventions: For the coordinate hyperplane P^{r-1}={Z0=0} in P^r, proves 0→O(m-1)→O(m)→i_*O_H(m)→0 for every m and the m=0 sequence after twisting by O(-1). The local proof identifies the divisor ideal with the principal coordinate ideal and checks stalks both on and off H.

Sources: MIT OCW 18.117 Lecture 7, PDF pp. 18–20, https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf; Dervan–Kuang, Complex Manifolds §5, printed pp. 27–29, https://qk206.user.srcf.net/notes/complex_manifolds.pdf. Their projective chart and local line-bundle conventions were inspected; the kernel-as-coordinate-ideal proof is supplied locally.

Dependencies: def-complex-projective-space-and-holomorphic-charts and def-qftx-gaga-projective-twisting-line-bundles; both mathematical-premise. dependency_level 1. Decision: ready after the batch-67 transition definition returned a current hash-bound Step 1 ready record; the stalkwise sequence proof is complete. Step 1 record: ready, hash-current.
### lem-qftx-positive-real-monad-analytic-twist-cohomology

Claim/conventions: Derives analytic acyclicity of O(-1) on P1/P2/P3 and O(-2) on P2/P3 under full AC from the current batch-67 scalar structure-sheaf theorem and the locally proved hyperplane sequences. It uses the identity restriction C->C; no algebraic/analytic comparison is assumed.

Sources: Serre, Theorems 1–3, §§12–17, printed pp. 19–27, https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf. The complete 43-page source and relevant sections were inspected. It supplies comparison context, but its proof uses GAGA and is not the argument used here. The local conditional proof uses the exact batch-67 statement plus the displayed hyperplane sequences.

Dependencies: thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology and lem-qftx-positive-real-monad-hyperplane-twist-sequences; both mathematical-premise. dependency_level 3 (batch-67 scalar theorem is level 2; hyperplane lemma is level 1). Decision: ready after the current scalar theorem, Laurent–Čech supplier, and twisting-line-bundle definition all returned hash-bound Step 1 ready records. The hyperplane-sequence and long exact sequence deductions are complete. Step 1 record: ready, hash-current.
### lem-qftx-positive-real-monad-chain-lift

Claim/conventions: For exact locally split O(-1)->O->O(1) monads, the obstruction and ambiguity groups for lifting a holomorphic cohomology morphism are H^1(K* tensor U1 O(-1)) and H^0(K* tensor U1 O(-1)). The two exact sequences reduce these to O(-1)/O(-2) groups. The signed sigma-dual uses P#(z)=P(jz)†, D(alpha,beta)=(-beta#,alpha#), and D^2=1; a self-pairing fixed by this duality lifts uniquely with H=H† and beta(z)=alpha(jz)†H, beta(jz)†=-H alpha(z). All monad maps are constant because H0(P3,O)=C.

Sources: Barth–Hulek, §3 Proposition 4, printed pp. 331–332, and §4 Propositions 5–6, printed pp. 333–334, https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf. The source's uniqueness is up to two Hom groups; our local analytic vanishings make those groups zero. Its self-duality results concern bilinear orthogonal/symplectic structures, so they are comparison only for the sigma-Hermitian lift. Serre §§12–17 is comparison context, not the conditional proof input.

Dependencies: def-axiom-of-choice, def-complex-manifolds-and-holomorphic-vector-bundles, and lem-qftx-positive-real-monad-analytic-twist-cohomology; all mathematical-premise. dependency_level 4. Decision: ready after the analytic twist supplier's prerequisites closed; the obstruction calculation and signed duality argument are complete. Step 1 record: ready, hash-current.
### lem-qftx-positive-real-monad-flat-splitting

Claim/conventions: Identifies the constant section subspace L with the common kernel of the beta coefficients, proves L=M-perp for M the span of alpha-coefficient images, and splits the monad as L tensor O plus its orthogonal reduced monad. The line-section injection uses only H0(P1,O(-1))=0; the identification H0(F)=L uses H0/H1(P3,O(-1)) and H0(P3,O).

Sources: Barth–Hulek §3 Proposition 4, printed pp. 331–332, https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf; Verdier Exposé VII §§6.10–6.12, printed pp. 125–126, https://numdam.org/item/AST_1980__71-72__1_0.pdf. The local proof supplies the constant-summand and positivity argument; source scope is comparison only.

Dependencies: def-axiom-of-choice; def-complex-manifolds-and-holomorphic-vector-bundles; lem-qftx-positive-real-monad-analytic-twist-cohomology; lem-qftx-positive-real-monad-chain-lift, all mathematical-premise. dependency_level 5. Decision: ready after the analytic twist and chain-lift inputs closed; the orthogonal flat split and k=0 case are complete. Step 1 record: ready, hash-current.
### lem-qftx-positive-real-monad-internal-positivity

Claim/conventions: Proves H is positive on the reduced middle space. The proof uses the signed symplectic double S+S*, R=U+U*, the anti-linear J with J^2=-1, the source’s exact block form and Hermitian Schur complement, the Pauli-matrix Laplacian inequality, and the Stokes limit. It distinguishes positive semidefiniteness of the pulled-back form (ker Phi may remain) from positive definiteness of h_d after the proved surjectivity/nondegeneracy argument.

Sources: Verdier, Exposé VII, Lemma 6.10, Proposition 6.11 and proof 6.13–6.18, printed pp. 125–130, https://numdam.org/item/AST_1980__71-72__1_0.pdf. The full calculation was visually inspected, including the block identities, Schur complement, Laplacian, and boundary asymptotic; the lemma reproduces those steps rather than treating the citation as a proof. Barth–Hulek §§4, pp. 333–334 is context for bilinear self-duality only.

Dependencies: def-axiom-of-choice; def-complex-manifolds-and-holomorphic-vector-bundles; lem-qftx-positive-real-monad-analytic-twist-cohomology; lem-qftx-positive-real-monad-flat-splitting, all mathematical-premise. dependency_level 6. Decision: ready after the analytic twist and flat-splitting inputs closed; the finite Hermitian matrix and Stokes proof is complete. Step 1 record: ready, hash-current.
### lem-qftx-positive-real-monad-rank-stability-criterion

Claim/conventions: Proves both affine criteria: a_z injective for all z iff costable, and b_z† surjective for all z iff stable, under [B1,B2]+IJ=0. It then identifies the affine chart [1:0:z1:z2], proves every other finite projective point lies on a real line, and checks full homogeneous rank from zero real/complex moments and regularity.

Sources: Donaldson, §§3–4 and 6, printed pp. 4–6 and 10–11, https://arxiv.org/pdf/2205.08639; Nakajima–Yoshioka §3.1, printed pp. 17–19, https://arxiv.org/pdf/math/0311058. Both source conventions are compared; the proof uses the exact raw definition from batch 59 and supplies the common-eigenvector argument locally.

Dependencies: def-qftx-adhm-linear-data-stability-and-regularity and thm-the-complex-numbers-are-algebraically-closed, both mathematical-premise. dependency_level 1. Both actual current supplier carriers were inspected; the ADHM definition is ready, and the algebraic-closure theorem is published with a complete proof. Decision: no unresolved mathematical input. Step 1 record: ready, hash-current.

### lem-qftx-positive-real-monad-charge-normalization

Claim/conventions: Computes the finite algebraic resolution ch(F)=N-kH^2, c1=0, c2=kH^2, and chi=N-2k; compares the same hyperplane cycle class with the topological Euler class; proves pi^*u=H^2 with the stated positive fiber orientation; concludes c2(E)=ku only under the explicit pullback hypothesis.

Sources: Donaldson §§4–6, printed pp. 6–11, https://arxiv.org/pdf/2205.08639; Nakajima–Yoshioka §3.1, printed pp. 17–19, https://arxiv.org/pdf/math/0311058. The sources support the framed monad and charge interface, not the topological comparison proof; the finite resolution and Thom calculation are supplied locally.

Dependencies: def-axiom-of-choice, def-chern-character-and-todd-class, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold, thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals, and thm-cohomology-projective-space-twisting-sheaves; all mathematical-premise. dependency_level 0. Decision: complete with current imported mathematical inputs. Step 1 record: ready, hash-current.

### thm-qftx-positive-real-adhm-monad-normal-form

Claim/conventions: Preserves the full planned CP3 statement with N>=2, k=0, reducible/flat summands, the exact raw block and zero moments, stable/costable regularity, exact framed U(k) residual classification, the specified compact rotation factors, the first-order A=C[epsilon]/(epsilon^2) range with reduced positivity, and the finite-resolution Chern/charge comparison. The first-order range explicitly requires global-section, coefficient-image, and fixed-line base change; no unrestricted analytic-family algebraization or Ward inverse is asserted.

Sources: Barth–Hulek §§3–4, printed pp. 331–334, https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf; Verdier Exposé VII 6.10–6.18, printed pp. 125–130, https://numdam.org/item/AST_1980__71-72__1_0.pdf; Donaldson §§3–4 and 6, printed pp. 4–6 and 10–11, https://arxiv.org/pdf/2205.08639; Nakajima–Yoshioka §3.1, printed pp. 17–19, https://arxiv.org/pdf/math/0311058. Source claims and limitations are recorded in item metadata and coverage.

Dependencies: AC, ADHM stability and raw moment definition, zero-level quotient theorem, current batch-67 scalar theorem, first-order family definition, local hyperplane/analytic-twist lemmas, chain lift, flat split, internal positivity, rank criterion, and charge normalization; all mathematical-premise. dependency_level 7 after the current batch-67 theorem level 2 was incorporated. Decision: ready after the current scalar theorem, Laurent–Čech proof, twisting-line definition, and batch-59 ADHM suppliers passed their current authored-prerequisite readiness checks. The proof retains full N>=2, k=0, flat-summand, first-order, rotation, and conditional charge scope. Step 1 record: ready, hash-current; this is not independent approval.

### ex-qftx-positive-real-monad-zero-charge

Claim/conventions: For N>=2 and k=0, verifies the unique zero maps, vacuous stability and costability, trivial U(0), framed W tensor O cohomology, positive line sections, and zero Chern charge.

Sources: Donaldson §§3–4 and 6, printed pp. 4–6 and 10–11, https://arxiv.org/pdf/2205.08639. The zero-dimensional case is computed directly.

Dependencies: main normal-form theorem, ADHM convention, and charge normalization; all mathematical-premise. dependency_level 8. Decision: ready after the main theorem and direct prerequisites closed; the zero-dimensional calculations are complete. Step 1 record: ready, hash-current.

### ex-qftx-positive-real-monad-one-instanton

Claim/conventions: For k=1,N=2, B1=B2=0, I=(rho,0), J=(0,rho)^T and rho>0, verifies both moments, f_z=|z|^2+rho^2, stability/costability, exact monad and framing, positive real-line section forms, projection curvature, and F^+=0 for the declared positive stereographic orientation.

Sources: Donaldson §§3–4 and 6, printed pp. 4–6 and 10–11, https://arxiv.org/pdf/2205.08639; Nakajima–Yoshioka §3.1, printed pp. 17–19, https://arxiv.org/pdf/math/0311058. Their sign context is compared; the one-instanton curvature matrix and Hodge-star calculation are local.

Dependencies: main normal-form theorem, ADHM definition, rank/stability criterion, charge normalization, and curvature definition; all mathematical-premise. dependency_level 8. Decision: ready after the main theorem and direct prerequisites closed; the finite matrix and positive-orientation ASD-sign checks are complete. Step 1 record: ready, hash-current.
