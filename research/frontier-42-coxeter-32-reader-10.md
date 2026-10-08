# Reader 10 — batch 10, frontier-42-coxeter-32

## Scope and opened inventory

Independent Step 5a review of the current authored mathematics. The live state file identified `5a-read`. Repository instructions, README, reader brief, relevant schema/workflow clauses, the exact batch manifest and all eight proof contracts were opened. No rendered evidence bundle was supplied or found for this dispatch. Author/source/contract entries were treated as evidence rather than acceptance. No gate, judgment, certification or publication action was taken.

Both assigned pages were read in full:

- `library/coxeter-groups/parabolic-subgroups-and-double-coset-geometry.md` (A).
- `library/coxeter-groups/parabolic-subgroups-and-double-coset-geometry-examples.md` (B; prose not edited).

All assigned item bodies, metadata, facts, proofs/verifications and remarks were read. Verification followed the supplier chain: Coxeter presentation and exchange/support results; canonical representation, root signs/length and strong exchange; definition and descent lemma; root-subsystem theorem; intersection lemma; normal-form theorem; dependent computations. The low-level reflection-subgroup example depends only on the earlier definition and Coxeter suppliers.

- `items/def-cg-parabolic-quotient-and-two-sided-minima.md`.
- `items/lem-cg-double-coset-descent-reduction-and-minimality.md`.
- `items/ex-cg-reflection-subgroups-parabolic-and-not.md`.
- `items/thm-cg-parabolic-intersections-and-coset-factorization.md`.
- `items/lem-cg-double-coset-intersection-parabolic.md`.
- `items/thm-cg-double-coset-unique-minimum-and-normal-form.md`.
- `items/ex-cg-infinite-dihedral-parabolic-double-cosets.md`.
- `items/ex-cg-s4-coset-minima-and-double-coset-decomposition.md`.

The following additional item files were opened for the exact definitions and supplier statements/arguments used. These are prerequisite context, not an assertion that the entire recursively expanding foundational library has been audited:

- `items/def-group.md`.
- `items/def-generated-subgroup.md`.
- `items/def-coset.md`.
- `items/def-group-homomorphism.md`.
- `items/def-linear-combination-and-span.md`.
- `items/def-natural-numbers.md`.
- `items/thm-well-ordering-principle.md`.
- `items/lem-span-is-the-set-of-linear-combinations.md`.
- `items/def-hh-coxeter-matrix-word-group-and-length.md`.
- `items/def-hh-geometric-coxeter-representation-and-roots.md`.
- `items/lem-hh-dihedral-root-recurrence-and-root-sign.md`.
- `items/thm-hh-coxeter-exchange-deletion-and-faithfulness.md`.
- `items/thm-hh-matsumoto-reduced-word-theorem.md`.
- `items/thm-hh-parabolic-minimal-representatives-and-length-additivity.md`.
- `items/def-cg-real-coxeter-form-and-reflection.md`.
- `items/lem-cg-reflection-form-invariance-and-rank-two-orders.md`.
- `items/def-cg-canonical-reflection-homomorphism.md`.
- `items/lem-cg-reflection-representation-descends-and-root-norms.md`.
- `items/def-cg-dual-chambers-and-reflection-hyperplanes.md`.
- `items/lem-cg-dual-action-and-chamber-faces-exist.md`.
- `items/lem-cg-rank-two-prefix-and-chamber-length-induction.md`.
- `items/thm-cg-root-sign-and-simple-reflection-positivity.md`.
- `items/thm-cg-root-length-criterion-and-faithfulness.md`.
- `items/def-cg-geometric-inversion-set.md`.
- `items/thm-cg-root-inversion-formulas-and-strong-exchange.md`.

Truncated tool output was followed with bounded reads of the required missing passages. Relevant source proofs were read as described below; unrelated chapters and every bibliography URL were not audited.

## Mathematical review and repairs

All seven proof-bearing assigned items were repaired; the definition remained unchanged. Every repair preserved the intended mathematical conclusions. The descent algorithm now explicitly fixes a total order on the finite generator set, and the normal-form size formula explicitly divides the finite integers before cardinal multiplication. Direct assigned consumers were checked against these clarifications; none requires a new mathematical conclusion. The seven affected contracts were updated. None of the seven items had a `verification.judge` record to remove; no new judgment was written.

1. **`lem-cg-double-coset-descent-reduction-and-minimality`, Statement (1), Given, Proof 1.1, Fact F6.** The algorithm used the “least” generator without ordering the finite set `S`. It now fixes a total order, obtained by a finite enumeration, and states that convention in the proof. F6 incorrectly said a reduced word admits no deletion that *changes* its value; this reverses the criterion. It now says no two-letter deletion *preserves* its value. Evidence: the opened exchange/deletion theorem, Statement (3), and the elementary finite-enumeration construction. The middle-block deletion argument was checked: deleting any middle letter would give a shorter element in the same double coset, and the surviving outer blocks of the reduced word give the existential additive factorization. Contract descent/selection evidence was reconciled.

2. **`thm-cg-parabolic-intersections-and-coset-factorization`, F10–F11, Proof 1.3, 2.1, 3.1, 4.1 and Remarks.** Strong exchange supplies the *positive* root of a reflection; the old 3.1 applied its root formula to an arbitrary negative root. The repaired proof first represents positive roots, then represents a negative root by `rho(ws)e_s` after representing its negative by `rho(w)e_s`. The mixed-type equation `t_psi=rho(s_r)t rho(s_r)^{-1}` was replaced by the group equation `t_psi=rtr`; inconsistent `s_r` indexing was replaced throughout by the generator `r`. Step 2.1 selects `r` from the support, where the positive coefficient in the unit-norm sum supplies `B(phi,e_r)>0`. It no longer calls an unordered generator the least natural-number index. F10 now derives the finite-word description from the smallest-subgroup definition by subgroup closure. F11 now cites the opened, proved `lem-span-is-the-set-of-linear-combinations`, added to `deps`, rather than treating the span definition as a proof of that characterization. The conclusion retains the essential root-membership restriction. Evidence: the exact positive-root clause of strong exchange, the canonical generator action, the span lemma, and Qi's induction described below. Contract 3.1 includes the negative-root derivation and F4; the subgroup/span and choice evidence was updated.

3. **`lem-cg-double-coset-intersection-parabolic`, F3, F8, Proof 4.1, source author.** F3 misquoted existence of an additive factorization as additivity for *every* `udv`. Counterexample: `d=1`, `I=J={s}`, `u=v=s` gives length zero rather than two. F3 now retains the existential quantifier and the actual minimum property used in 1.2. The proof also treated `e_j+e_{j'}` as a root for arbitrary distinct generators. It need not be one, for example when their edge has label two. The repair uses the precise dictionary argument: a length-one element of `W_J` lies in `J`, so its positive root is a simple root; the illustrative sum is qualified by “when it is a root.” The author name “Dongwen Wen Qi” was corrected to “Dongwen Qi.” Evidence: descent lemma (2)–(3), support theorem (2), root-reflection dictionary (1), and the actual Qi PDF title page. Contract conclusion evidence was reconciled.

4. **`thm-cg-double-coset-unique-minimum-and-normal-form`, Statement (3), Proof 1.1, 1.2, 2.1–2.2.** The existence calculation incorrectly wrote `x=u_0zdv` after defining `v=z'c`; the correct intermediate expression is `x=u_0zdc`. The stated multiplication instruction in 1.2 did not yield its displayed intersection equality; it now multiplies on the left by `u^{-1}` and on the right by `(v')^{-1}d^{-1}`. Step 2.1 now explicitly transfers constructed additivity to every prescribed pair by uniqueness. Statement (3) and 2.2 write `(|W_I|/|W_K|) * |W_J|`, so only a finite integer is divided and `W_J` may be infinite. Evidence: direct group cancellation and the opened Lusztig normal-form argument 9.16(e)–(g). Contract uniqueness uses the correct left-coset terminology; its empty-case evidence no longer claims `z=1` implies `K` empty. Dependent contract quotations were refreshed for the size formula.

5. **`ex-cg-reflection-subgroups-parabolic-and-not`, Verification 1.2.** The map sending `s` to zero and `t` to one does not distinguish `u^k` from `u^ks`: both have image `k mod 2`. The proof now uses a *separate* homomorphism sending both generators to one to distinguish the two normal-form families. The original map still correctly describes the index-two subgroup. Both maps are established by the presentation universal property. Contract derivation and selection evidence now distinguish their uses. The finite subgroup computations, all eight standard parabolics, and the infinite subgroup/parabolic classification were checked directly.

6. **`ex-cg-infinite-dihedral-parabolic-double-cosets`, Verification 1.1–1.2 and 3.1.** The conjugation premise `w(1,s)w^{-1}` was corrected to the subgroup `w{1,s}w^{-1}`; the conjugation image calculation cites F7, the homomorphism fact. The relation `sus=u^{-1}` is now derived before the disjoint-family argument uses it. Step 3.1 incorrectly wrote the generator subset `J={1,t}`; it is `J={t}`, whereas `W_J={1,t}`. Contract evidence was aligned with the generator subset and the actual right-`t` tests. Evidence: elementary group products, the opened universal property and homomorphism definition, and the dihedral supplier's exact order/reducedness clauses. The four block elements, their lengths for every `k>=0`, empty intersection index and exhaustive partition were verified algebraically, including `k=0`.

7. **`ex-cg-s4-coset-minima-and-double-coset-decomposition`, F1 and contract.** F1 now states the restricted-matrix Coxeter system and intrinsic/ambient length equality; an arbitrary subset of a type-A diagram need not give one irreducible type-A group. The contract's 3.1 left/right coset labels were reconciled with the correct current proof. Its zero-case evidence falsely gave the singleton transversal size as `|W_K|^{-1}`; it now states size one when `K=I`. Evidence: support/intrinsic theorem (2), the exact coset definition, and the exhaustive computation below. The example's actual stated permutation lists were correct.

8. **A-page Main results prose.** Clarified that the root subsystem consists of the *roots in* the span, rather than the entire vector-space span. Restored the essential hypotheses `s in I`, `d in ^IW^J` to the statement that a conjugated reflection lying in `W_J` is simple. The hypotheses cannot be dropped: even inside a rank-two parabolic, conjugating a simple reflection can give a non-simple root reflection. Evidence: the repaired theorem and intersection lemma. B-page prose was checked against the three examples and required no edit.

Reflow normalized the seven edited item layouts; every numbered step remains one paragraph, with blank lines between steps and valid trailing tags and final QED.

## Source evidence and computations

- [Qi, A Note on Parabolic Subgroups of a Coxeter Group](https://arxiv.org/pdf/math/0512408), Lemma 3.1 and its complete proof, printed pp. 4–5: `Phi_I = Phi intersect span{alpha_s : s in I}`. The proof starts with a positive root, chooses a support generator with positive inner product, and shortens its reflection by two. This confirms the induction route; the signed extension is explicitly proved locally.
- [Lusztig, Hecke Algebras with Unequal Parameters, revised 2014 edition](https://arxiv.org/pdf/math/0208154), Lemma 9.7 and complete proof, printed p. 40; Proposition 9.15(a)–(d), printed p. 44, and proof 9.16(a)–(g), printed pp. 45–46. These establish minimum uniqueness, the parabolic intersection, a bijective restricted-factor normal form, and length additivity. Paragraph (g) explicitly transfers additive existence through uniqueness to all allowed pairs. The URL with the explicit `v2` suffix failed through the browser; the unversioned PDF identifies itself as v2, 10 June 2014, and was read instead.
- [Björner–Brenti, Combinatorics of Coxeter Groups](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf), §2.4, Proposition 2.4.4 and its complete proof and Corollary 2.4.5(i), printed p. 40: the right-descent-free set gives the unique factor in `w=w^J w_J` and the unique minimum of the left coset `wW_J`. This fixes the handedness used in the examples and contracts.

An independent in-memory Python enumeration used ordinary permutation composition and inversion counting. It generated all 24 permutations, both pairs of standard parabolics, the two partitions (sizes 18/6 and 4/4/4/4/2/4/2 in lexicographic minimum order), every intersection index `K`, all 48 restricted normal-form pairs, their injectivity and length additivity, both one-sided quotient lists and the two coset lists of `2143`. All assertions passed. These computations check the examples; they do not prove the general theorem. No extra test artifact was created.

## Uneditable observations and current disposition

- **Batch 7 supplier `lem-cg-rank-two-prefix-and-chamber-length-induction`, Proof 5.1, negative-half-space length chain.** Observed `ell_{s,t}(stu)=ell_{s,t}(sv)-1` with `v=tu`, a false equality because `stu=sv`. The available rank-two result supplies `ell(sv)=ell(v)-1`, so the chain needs `ell(v)-1`, then subadditivity for `tu`. This is a defective computation, classified fatal under the dispatch rule even though the correction is immediate. Assigned consumer: `thm-cg-parabolic-intersections-and-coset-factorization`, through its root-length/root-sign suppliers. I did not edit this carrier. Its complete observed source was hashed as `2605b5f80e499dfa98ec24f3f29ec8bcad86499964f6020848c8f87c2e32ed84`, matching the batch-7 immutable pre-reader fingerprint. Another writer corrected the chain during this review; the later targeted read showed `ell(v)-1` and the missing subadditivity explanation. Later raw hash: `1db211f658e2cd80622ceeb2d5e5d4911863c70a754d39d50d7c02a6847dbb24`. The JSON binds the historical observation to **pre**, not to corrected current bytes. Step 5b must reconcile this with the producer's repair evidence.
- **Batch 2 supplier `thm-hh-parabolic-minimal-representatives-and-length-additivity`, Proof 3.1, final inversion paragraph.** The initial read said inversion interchanges “left and left cosets”; it should interchange right and left cosets. This was a nonfatal proof-wording defect: the Statement and surrounding inverse formulas supply the correct handedness immediately. Assigned consumer: `def-cg-parabolic-quotient-and-two-sided-minima`. I did not edit this carrier. A later targeted read had the corrected “right and left” wording, with current hash `80c0715d9c4fcea40b74d5d0a639e59f461605ce30f8f1b356671486135bae60`. I did not bind the original complete bytes before that correction; the pre-reader fingerprint alone does not prove that byte observation. The JSON therefore retains the historical wording with `observed_source: null` and the missing-byte limitation.

No confirmed defective published prerequisite was found in the opened passages. The two outside-batch observations have already been corrected in later bytes; their historical routing/reconciliation remains the Step 5b lead's responsibility.

## Page verdicts, checks and handoff

- **A-page `parabolic-subgroups-and-double-coset-geometry`: locally sound after the listed repairs.** Its summaries now preserve the root restriction and minimum-representative hypotheses. The historically defective batch-7 arithmetic supplier needs producer-repair reconciliation; the later observed chain closes that step.
- **B-page `parabolic-subgroups-and-double-coset-geometry-examples`: locally sound after the item repairs.** Its prose remains unchanged. The finite computations and infinite-word calculations agree with the statements.

Completed validation on the final item bytes:

- For each of the seven edited items: `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`, followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`: seven passes, zero failing.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-10.proof-contracts.json --strict`: 8/8 items, zero errors and warnings. Initial contract failures caused by the edits were repaired before this final pass.
- One final batched `node tools/proof-layout.mjs` on all seven changed item paths, after all edits and reflow: 7 items, 42 steps, zero defects.
- `node tools/rendercheck.mjs` on all eight assigned items and both assigned pages: 10 files, no errors; YAML and mathematics parse with the real renderer/KaTeX.

No current local mathematical blocker remains in the reviewed passages. No withdrawal is proposed. Handoff includes the seven item edits, assigned A-page prose, updated batch proof contracts, this report and the uneditable historical findings JSON. Manifest/plan files, B-page prose and other owners' carriers were not edited.

Coverage limitations: this is the exact assigned batch review and the opened prerequisite/source passages, not a whole-corpus or every-foundation audit. Not every bibliography URL was consulted. Supplier bytes changed concurrently; historical observation binding is exact only for the batch-7 pre-reader hash, while the batch-2 original wording remains unbound. Mechanical passes are local checks and do not replace independent adjudication.
