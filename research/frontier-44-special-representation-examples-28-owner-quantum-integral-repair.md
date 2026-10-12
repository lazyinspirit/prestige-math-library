# Owner quantum-integral scaffold repair — in progress

Run `frontier-44-special-representation-examples-28`, batch5. Original 4 native carriers, 20 readiness
records and native dispatch receipts are preserved with raw hashes in
`frontier-44-special-representation-examples-28-owner-quantum-integral-preimages/index.json`.
No published/item/page/shared-plan/runtime/control/commit write is authorized
or performed. Active sibling batch6 is outside this writer's scope.

## Actual primary reads

Independently downloaded full PDFs via curl:
- Lusztig, Introduction to Quantum Groups, https://math.mit.edu/~gyuri/papers/quant.gr.pdf,
  355 scanned PDF pages, 16994932 bytes, SHA256 b0dc6abfffe51656848b44c692c39add1d8191f20ec78c6d5eb36570abf0fa1b.
- JKK, Crystal Bases for Quantum Generalized Kac-Moody Algebras,
  https://arxiv.org/pdf/math/0305390, 60 pages, 503316 bytes,
  SHA256 f873e27305536ded497ec03bf1dec3770354f56e8e00e9b7aafe384cf140b7f6.
- Berkeley Lectures, https://categorified.net/LieQuantumGroups.pdf,
  364 PDF pages, 2118866 bytes,
  SHA256 ffeb74a5a0304b6f9176b3e3ebde8d2244d86e5a34d79400ccde55b24e6264ef.

PyMuPDF extracted the JKK and Berkeley bodies. Lusztig's scan has no useful
text layer: full-page RapidOCR on PDF267–269 read printed258–260, full-page
OCR on PDF194–198 read printed185–189, full-page OCR on PDF254–255 read
printed245–246, and PDF130–133 read printed121–124. These actual OCR files
and original PDFs are in /tmp/owner-quantum-integral. Read the complete
relevant JKK Prop2.1–2.2, (2.2)–(2.3), Lemma2.3, Prop3.3–3.4,
Lemmas3.5–3.6, Theorem3.7 and Berkeley Theorem13.2.1.10 proof and
Corollary13.2.1.11. More source reading and focused corrections follow.

## Confirmed findings

1. A=Z[q,q^-1] is not a PID. The proper ideal (2,q-1) is a counterexample:
   neither generator has a common nonunit divisor, but 1 is not in the ideal.
   Native Definition/triangular/character strategies falsely identify it as
   a PID; torsionfree does not imply free there, and tensor products of
   torsionfree modules need not be torsionfree there. Berkeley's actual proof
   expressly sets A=Q[q,q^-1], a different ring.
2. The native triangular proof has no global divided-power basis or toral
   basis. Its toral 'largest K exponent' filtration is not even defined for
   a multidimensional lattice. Lusztig §§23.2 and31.1 concern modified dot-U,
   not the native unmodified U_A, and explicitly rely on a canonical basis
   of A f. The integral freeness theorem is14.4.3(d,e), with the general
   nonsymmetric proof deferred to19.2.3. The highest-weight basis comes from
   14.4.11 and its ideal basis statement. These are substantial suppliers,
   not consequences of field PBW or torsionfreeness.
3. The specialization proposition actually asserts algebraically K_hbar=1,
   despite the notes describing only operator specialization. This is false:
   in sl2 the module E=F=0,K=-1 specializes with K=-1. The positive toral
   quotient must explicitly impose K_h=1. A full toral formula is available:
   with H_i=T_{i,0,1}, the integral identity
   [t]_i T_{i,c,t}=(q_i^{c-t+1}H_i+K_i^-1[c-t+1]_i)T_{i,c,t-1}
   gives Tbar_{i,c,t}=binom(H_i+c,t) over a characteristic-zero positive
   toral quotient. Polynomial independence can be proved by dense integral
   toral characters because the simple coroots are Q-linearly independent.
4. The reordering lemma claims same-half generators commute for all i≠j;
   the integrability proof repeats that false claim. They commute only for
   a_ij=0. General integrability requires the quantum Serre recurrence.
5. The skew-derivation contract confuses actual negative weight -nu with
   positive height nu. Its Leibniz exponents must use wt(F_j)=-alpha_j.
6. The form Definition omits homogeneity/counit normalization yet claims
   adjunction+(1,1)=1 forces a unique symmetric form. Already in rank one,
   arbitrary values (1,F^m) yield nonsymmetric recursive forms. The intended
   normalized homogeneous/symmetric form is well-defined, but this
   uniqueness assertion is false as written. Native transport from Lusztig
   is also not a single scalar rescaling: it is degree/color multiplicative.
   The published generic Hopf-pairing theorem(ii), fully read on disk,
   supplies a direct complete route by degree-ν scaling
   ∏_i(q_i-q_i^-1)^{ν_i}, identifying the positive and negative word labels.
   The shuffle permutation Gram formula supplies symmetry and e'-adjunction.
7. Contravariant σ in JKK(2.2) is Q(q)-linear and fixes K_h; native ending
   says it inverts the torus and confuses it with the semilinear τ.
   Existence/descent will be proved locally, rather than left 'standard'.
8. Published Cartan datum explicitly permits a nonperfect pairing; native
   weight Definition silently replaces it by P=Hom(Pvee,Z). Distinct labels
   need not have distinct spectral characters. In affine data, δ can be
   invisible on coroot-only Pvee, merging formal degrees in a joint toral
   eigenspace. The general weight/finite-weight-space statements need a
   proved regular realization comparison or an explicit chosen label grading,
   rather than an unexplained new regularity hypothesis.

## Exact currently missing global prerequisite and proposed route

The unchanged promised Z[q±]-freeness branches require a local/global integral
basis supplier for divided-power halves and highest-weight lattices and a
true unmodified toral basis. They are NOT ready on the native argument.
The least destructive potential split within selected QG2–QG5 is early
rational-Laurent/local-q1 deformation for character/integrability, followed
by global Z-integral basis results after QG5's global basis. No homes or
cross-page graph have been changed; root was given this exact finding and
alternative before any such change. The global statements remain held
unless a full acyclic basis proof is supplied.

## Exact active sibling obligations

The now-populated batch6 manifest declares:
- def-kashiwara-lattices-lambda-and-infinity uses the integrable module theorem.
- lem-highest-weight-tensor-maps-and-their-adjunction uses that theorem and
  the contravariant-form Definition.
- thm-grand-loop-existence-of-highest-weight-crystal-bases uses those plus
  the negative-form Definition and negative-form theorem.
- ex-crystal-graph-of-b-two-lambda-one uses the integrable module theorem.

No batch6 exact-ID dependency on the global triangular/freeness theorem or
character theorem was present at this read. These findings support keeping
its local-field/crystal route separate from late global Z-freeness. Batch6
was not edited. Current source/strategy corrections and readiness decisions
will be recorded only with explicit stable closure or exact held results.

## Delegated downstream scope update — 2026-10-08T12:29:45.220377+00:00

The root has confirmed native batch6 is completed and drained (15 contracts) and delegated review plus focused repair of actual affected direct/indirect batch6 consumers to this owner. The earlier active-sibling scope statement above is historical and is superseded for these drained consumers only. Native batch6 carrier and readiness preimages are preserved before any downstream edits. Active batches13,21,28 remain outside write scope and will be protected during final readiness refresh. No shared-plan/home change is yet authorized; any proposed reassignment must demonstrate an acyclic prerequisite route, including the balanced-triple finite-freeness and quasi-R integrality prerequisites.

## Early quantum closure after serial home integration — 2026-10-08 UTC

Root serial integration at13:06:30 UTC moved precisely the two original full global Z[q,q^-1] contracts into selected QG5 batch8, preserving their IDs and mathematical claims. See `frontier-44-special-representation-examples-28-owner-quantum-home-integration.json` and its immutable before archive. Both global branches remain owner-held, pending actual simultaneous integral/global/based-quotient supplier proofs. They are excluded from the early readiness subjects. The historical 'torus spanning still missing' statement above has now been resolved, and the historical 'no sibling6 edits' limitation was superseded by the dated delegation already recorded.

Current batch5 contains25 contracts (21 A,4 B), including all18 unmoved native IDs and7 necessary local suppliers. Batch6 contains17 contracts (13 A,4 B), including all15 native IDs and2 necessary local suppliers. The richest sound original claims remain: actual Z-integral unmodified torus, divided-power reordering, bilinear normalization, local character/universality and full positive algebra specialization, all grand-loop A(r)–O(r), projection, finite/infinite crystal properties and the four examples. The general global Z-freeness claims remain at8 rather than being weakened to Q-freeness. No active source/item files or sibling manifests were edited.

The toral supplier proves general integral product coefficients by the weighted-subset Gaussian Vandermonde identity, factorial cancellation and symmetric Gaussian normalization, then infinite evaluation K=q_i^n. It explicitly solves the shift recursion downward for negative shifts, and proves stability under K and K^-1 plus extremal Laurent independence. Full torus cosets are constructed in a finite-coordinate summand containing the independent d_i h_i; no direct-summand hypothesis on their subgroup is inferred. The earlier41 small exact identities are diagnostics only; the general proof is supplied in the current contract.

The auxiliary datum supplier uses X_f a finite coordinate direct summand containing all top labels and simple roots; Y_aux=(⊕Z H_i)⊕Hom(X_f,Z), X_aux=Hom(Y_aux,Z), with j(x)(H_i)=<h_i,x> and j(x)(f)=f(x). The primitive H_i, independent roots, perfect pairing, dominance and q_i convention are checked explicitly, including K_i=K_(d_i H_i). The finite-support graded module category comparison reconstructs every old K_h from the original labels. It asserts no old-torus algebra embedding or arbitrary infinite-support equivalence. Its classical complement construction takes a complement to H_min∩ker alpha inside ker alpha, so h_aux=H_min⊕Z with Z central; it does not mistake all of ker alpha for a disjoint complement.

The Cartan-projection supplier constructs the normalized homogeneous Verma form, proves its exact balancing and largest proper graded radical, quotient descent, and ordinary simplicity by maximal-height raising. Its integral highest-module form claim is distinguished from the half form. Local R=Q[q]_(q−1) weight lattices are DVR-free by finite generation/torsionfreeness and stable under actual ordinary E/F words, all divided powers and toral Gaussians; the top survives. Classical Casimir scalar comparison and rank-one integrability identify the simple classical fibre, giving tilde L=L and the full character without global Z-freeness. The positive toral/enveloping specialization states the full quotient by every K_h−1 and exact binomial formulas. Native unquotiented K_h=1 and same-half commutation assertions are corrected.

### Batch6 supplier and source seam repairs

Finite-string decomposition now requires admissible coefficients before uniqueness; killed coefficients beyond the bottom are set to zero. A finite cyclic rank-one module is reduced by the central Casimir's distinct simple-factor scalars, and each equal-scalar block is spanned by its top strings using its composition-factor dimensions. Nilpotence's first endpoint gives highest weight t−1≥0, replacing the invalid negative-weight argument. Finite Kashiwara operators satisfy ẽf̃=id−p_bottom and f̃ẽ=id−p_top. The negative half instead has ẽf̃=id and uses ordinary powers (e_i')^n in coefficient extraction. Module crystal bases permit f̃b=0; their bottom is not deleted. Exact half-to-module generator compatibility is replaced by the preserved later modulo-q projection conclusions.

The tensor lemma proves only the highest cyclic summand equals V(lambda+mu), using the completed early integrable universal quotient. For sigma fixing K and sending E_i to q_iF_iK_i^-1 and F_i to q_i^-1K_iE_i, the current coproduct satisfies Delta sigma=(sigma⊗sigma)Delta. The plain product form is therefore contravariant; its top-normalized restriction is nondegenerate by uniqueness. The weightwise adjoint gives Psi, PsiPhi=id and the direct splitting, with unique top-normalized maps. No whole tensor product cyclicity or global tensor-basis theorem is assumed.

A necessary local rank-one tensor supplier closes the previously implicit Ui tensor rule. Highest vectors h_t have coefficient recurrence c_(l+1)=−c_l z^(b−2t+2l+2)[b−t+l+1]/[a−l], with valuation l(a−t+1). Normalized finite-string norms are z^(n(a−n))[a choose n]_z in1+qA0. The tensor lattice's identity residue Gram matrix gives a positive sum-of-squares norm criterion, ruling out poles. The exact divided coproduct coefficient expansion has INTEGER Laurent-series coefficients: each denominator has leading coefficient±1. Hence a regular unit-norm vector has integer residue coordinates of square sum1. The distinguished chain coefficient has leading+1; its other summands have valuations at least l+l². Thus every string has a single pure-tensor residue, with no rational3/5,4/5 shortcut. The chains partition the complete rectangle, yielding the strict f̃ comparison and non-strict ẽ tie comparison. An independent192 exact symbolic coefficient-residue check for a,b≤3 passed; this is corroboration, not a replacement for the general proof or an independent audit.

The full grand-loop strategy now follows supplier order inside the induction. It proves field spanning and actual A0-freeness first, rank-one tensor stability and word splitting, E, microlocal projection/M/L, the N→N−1 lattice-pole improvement for A/H, I/O/B, then module A0-valuedness/modulo-q adjunction before J. It defines the field-dual lattice without assuming it lies in the original lattice, transfers the dual by an invertible Gram matrix, proves special F for a large second weight by the adjoint/double-dual argument, and uses that special F in J. C/D/K/N follow, with general F/G last via raising detection. All A–O clauses are retained. No late QG5 freeness, post-grand-loop perfection or future QG4 tensor theorem is a premise.

### Printed normalization discrepancy, not independent acceptance

Actually read JKK PDFp42 Lemma7.26 and its complete displayed recurrence. Its stated comparison reverses the scalar factor relative to its own recursion. Rank one diagnoses this: B_lambda(F_i v,F_i v)=(1−q_i^(2m))/(1−q_i²) while B_infty(F_i,F_i)=1. The local strategy derives the full recurrence in every degree/color:

B_lambda(F_iR v,Qv)=(1−q_i²)^−1[B_lambda(Rv,(e_i'Q)v)−q_i^(2<h_i,lambda−nu+alpha_i>)B_lambda(Rv,(e_i''Q)v)].

Induction gives B_lambda(Pv,Qv)≈C_nu B_infty(P,Q), C_nu=∏_i(1−q_i²)^−n_i, uniformly to arbitrary q-order on any finite fixed-degree family once all highest coordinates are large. The errors have high positive powers of the highest-weight parameters and bounded lower-degree coefficient valuations. Kashiwara91 Lemma4.7.1 gives the consistent constant term. This is an owner-attributed source-level correction; the diagnostic does not prove the general formula. C_nu≡1 modq is what the dual pairing matrix needs, so that matrix is congruent to delta without changing the grand-loop's valid conclusion.

The second new batch6 supplier derives module and half residue orthonormality after the grand loop. The exact unit string adjunction and partial inverse reduce to lower height; all simple roots are real, so residue norms are1. Half orthonormality follows by the corrected large-weight comparison and crystal projection. Gram≡I then proves actual A0-perfectness and L^vee=L. The norm criterion follows from residue positivity. Its position after the grand loop explicitly prevents a circular unimodularity premise.

All four B examples are corrected: sl2 has its actual bottom projection; sl3 uses the explicit q-symmetric highest tensor submodule, not the unstable ordinary symmetric subspace at genericq; half projection raises compatibly only on surviving residues, with killed b_(m+1) as the explicit counterexample, and its fixed-degree surviving set is {b_n}; the lattice counterexample recovers v=q^-1(qv). Negative-half formal phi=epsilon+weight is distinguished from its infinite actual lowering length. The old false ordinary-power A0-span equality and unsupported lattice-axiom independence assertion are removed.

The actual current carrier/coverage/levels and protected itemInputPaths closure are recorded in `frontier-44-special-representation-examples-28-owner-quantum-early-closure-guard.json`. Source fetch, scoped policy and coverage checks are mechanical checks of these scaffolds, not mathematical acceptance. No readiness registration has occurred in this closure pass. The only original globally held mathematics is the actual later integral basis/based-quotient construction and independent integral quasi-R coefficient argument, now assigned to the selected QG5 future owner.


Owner final richness correction: the native general lattice-axiom independence clause is preserved with two additional explicit witnesses in its original counterexample ID. A weight-decomposed but unstable lattice is A0qv⊕A0w in L_1(1). A stable but non-weight-decomposed lattice is the same mixed lattice in two one-dimensional modules of labels0 and delta for the explicitly specified rank-one datum with a central toral direction. The earlier mixed lattice alone proved neither direction of logical independence; these witnesses now supply the complete promised general claim without changing its home.

## Root-authorized guarded early readiness pass completed

`frontier-44-special-representation-examples-28-owner-quantum-readiness-pass.json` records fresh42/42 current proof-readiness decisions for batch5's25 and batch6's17 current subjects, in supplier order. There were41 genuine owner registrations and1 already-current record retained byte-identically (`def-the-local-ring-at-q-zero`). All authentic current previous decisions and the repaired mathematical/source carriers were archived before the pass, in addition to the native original carrier/decision/dispatch preimages. Root's serial two-contract transfer receipt is hash-bound in that archive and in the final pass receipt.

The exact itemInputPaths union was1605 and the full protected raw-carrier set1611. Every guard checked the fresh loader's exact closure and raw bytes; final paths and all before/after hashes are identical, with no active13/21/28 input carrier. No batch8/global record was cleared: both original global integral IDs remain owner-escalated and their records were preserved byte-identically. There were no other-batch readiness writes, engine operations or whole-Step1 gate attempts. Source carriers remain drained. This records scaffold proof readiness after the owner's focused source/strategy review, not an independent mathematical audit or acceptance of an authored proof. The late QG5 integral construction and independent integral quasi-R proof remain future owner obligations.
