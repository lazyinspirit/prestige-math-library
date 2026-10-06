# Batch 2 Step 1 scaffold — principal series of finite GL_n

Run: `frontier-40-geometry-braids-rep-27`; pair `principal-series-representations-of-gl-n-over-a-finite-field`, A/B orders 510.055/510.056. This note supersedes the initial batch-2 receipt and its two deferred author-confirmation obligations. The supplied scaffold now contains 30 A and 5 B items. It is a scaffold with complete local proof strategies, not authored item files or independent mathematical acceptance.

## Scope and reconciliation

The controlling design is RG-13 in `research/plan-representation-theory-groups-track.md`, lines 829–877. The braid, Kazhdan–Lusztig and quantum-group plan locations in the batch sheet are consumer-side ownership references, rather than the principal-series design. All 22 designed A claims and all 5 B claims are preserved, including the full arbitrary-character Hecke endomorphism theorem and its tuple-of-partitions constituent/multiplicity result. Eight local prerequisite lemmas close the promised proof route. No pair was added, no scope was deleted, and no shared plan, prose, item file, published ledger or engine control was edited.

The plan's nine prerequisite pages remain the declared page-level reading order; item-level dependencies use actual published suppliers. Branching and polynomial-root pages need no invented item use. The generic Hecke parameter remains `v`, with finite field size `q`; specialization is directly `v=1,q`, without a square-root convention. The published Soergel normalization uses its own grading parameter with quadratic parameter `q=v^{-2}`; the original generic definition and standard-basis interface retain that dictionary. The three supplied braid-side interfaces (`def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, `thm-type-a-iwahori-hecke-presentation`) have unchanged statements and definitions.

The inventory is in dependency order, with 35 total items and maximum local dependency level 12. The eight local lemmas are trace-form semisimplicity; constituent multiplicities from a semisimple endomorphism algebra; the character-idempotent corner; the standard intertwiner basis; length-additive normalized intertwiner products; equal-character GL_2 splitting; rank-one parameter computation; and the added `lem-formal-triviality-of-one-parameter-semisimple-algebras`. The examples page remains a leaf.

## Closure of the general-character normalization

Dudas–Michel Theorem 11.11 explicitly gives a Hecke structure with parameters that are powers of `q` and a basis rescaling. Its preceding discussion says the quadratic equations depend on the dimensions of the rank-one summands, but does not print the degree-quotient formula. That unread formula is not used. Taylor Exercise 5.11 is spherical and does not by itself prove the nontrivial-character case.

The repaired local argument sorts the coordinates of an arbitrary character into contiguous equal blocks `eta=(a_1^{n_1},...,a_k^{n_k})`. Inside the block Levi, the module is a product of spherical modules twisted by `rho(l)=prod a_r(det l_r)`. The group-algebra twist gives the exact rescaling

`lambda_w=prod a_r(-1)^{-ell(w_r)}`.

The raw simple intertwiner has eigenvalues `a(-1)q,-a(-1)`, and the rescaled generator has eigenvalues `q,-1`; every Hecke parameter is exactly `q`. For `q=3` and the nontrivial character of `F_3^x`, the raw eigenvalue `-3` on `a o det` disproves the naive normalization. This is an explicit local deduction from the determinant twist, not an invented source quotation. The rank-one constituents have dimensions `1,q`, exactly as Oi Proposition 2.8 states and proves.

All braid, commuting and length-additive relations are transported from the spherical factors by that twist. Faithful Harish–Chandra induction embeds the block endomorphism algebra into the full endomorphism algebra; both have dimension `prod n_r!` by the standard basis and Mackey count, so the embedding is an isomorphism. Transitivity and the corner identity `e_eta^G=e_{U_P}e_eta^L` give the exact induced operator identification. This closes the full general-character theorem without pretending that Taylor's spherical proof applies directly to a nontrivial character.

Several related incorrect interfaces were repaired before their consumers:

- Equal-character sets need not be contiguous. The intrinsic Coxeter system is transported from the prescribed sorting permutation; ambient adjacent equal coordinates do not generate an unsorted stabilizer, as `(a,b,a)` shows.
- The Weyl-orbit module isomorphism uses equality of Mackey character pairings, positivity and complete reducibility. Conjugation of functions does not preserve the fixed Borel or its fixed left `G` action.
- Define `B_w=R_{Theta_{w^{-1}}}` to account for the opposite-algebra convention. Representative independence uses the character compensation: replacing `dot w` by `t dot w` requires multiplication by `chi(t)^{-1}`.
- For arbitrary unsorted characters, the normalized Hecke basis is transported from the sorted module. No unsupported equality with the raw ambient-length Bruhat basis is asserted. The full arbitrary-character algebra and constituent results remain unchanged in their commissioned content.

## Closure of the Tits supplier interfaces

The published affine coordinate-duality theorem is explicitly object-only. It does not supply morphism or constructibility facts. The published Complete Nakayama theorem explicitly assumes Dependent Choice and proves generation; it was removed from this proof route. These are corrected uses, not published supplier defects.

The added formal-triviality lemma fills Losev Step 5. Lift primitive idempotents, view their images as split projections on a finite free power-series module, and lift finite residue bases of image and kernel. Determinant inversion proves those summands free and proves the action map to their matrix endomorphism algebras an isomorphism. The idempotent-lifting strategy was also corrected: compressed representatives are approximate idempotents and must be lifted again in the complementary complete corner; only finite orthogonal families are asserted. Neither argument uses dependent choice.

The completion at a point of a principal open of the parameter line is computed directly through the truncated-polynomial inverse system. Formal triviality is then converted into a statement about classical fibers by an affine incidence set of multiplication-preserving invertible matrices, using inverse variables for the finitely many denominators. The actual published classical morphism definition and Chevalley theorem provide the projection and constructibility; the actual published strong Nullstellensatz supplies `I(V(J))=sqrt J`. A hypothetical finite isomorphism locus would force its nonzero vanishing polynomial to vanish on the formal solution in the power-series domain, contradiction. An infinite constructible subset of the line is cofinite, so the isomorphism loci of any two semisimple fibers meet. This supplies the missing formal-to-Zariski argument rather than merely asserting orbit preimages open.

The Chevalley and Nullstellensatz suppliers explicitly assume the Axiom of Choice. AC is therefore stated and declared as a dependency in Tits deformation and every actual downstream use: the noncanonical Hecke/group-algebra isomorphism, spherical constituents, the general endomorphism theorem's group-algebra conclusion, general constituents, the three affected examples and the noncanonicity remark. The block Hecke identification itself uses finite algebra and no choice principle. The former global “no AC” receipt was incorrect and is superseded.

## Sources and evidence

The original five complete source documents remain present in coverage with their fetch stamps: Dudas–Michel, Taylor, Losev, Oi and Curtis. The repair reads the exact load-bearing portions of Dudas–Michel §§9 and 11, Oi Proposition 2.8 and its proof, Taylor's spherical Hecke/deformation section and Losev Theorem 2.6 with its entire six-step proof. Curtis remains source corroboration; it is not promoted into a parameter formula or a local formal-neighborhood proof.

Milne's complete *Algebraic Geometry* notes were additionally fetched, with Theorem 2.16 and its proof (printed pp. 42–43), Proposition 9.6 and Theorem 9.7 and its proof (printed pp. 199–201) read to back the added algebraic-geometric bridge. Coverage has 6 fetch-verified sources and 52 individually disposed harvested results, with no source drops. The full PDF, extracted text, metadata, exact published supplier claims/hashes, mathematical repair explanation and changes inventory are in `research/frontier-40-geometry-braids-rep-27-owner-principal-series/`.

That evidence distinguishes local deductions, full-source readings, and exact published interface uses. No missing full-source degree formula is falsely reported as read. No actual published supplier defect was found. Source-backed provenance is retained; this is a repaired proof strategy, not source-only acceptance of an unproved deep theorem.

## Downstream review and checks

Affected direct and indirect batch-2 consumers were reviewed in supplier order. Further inherited errors corrected in that review: the `S_1` boundary has partition `(1)`, not the empty partition; the `q=2` regular case is empty only for `n>=2`; rank-two labels require a chosen noncanonical bijection; and no algebra isomorphism can send every standard `T_w` to `w` at `q!=1,n>=2`, because the quadratic relations differ. The spherical corner proof now uses direct group-algebra inversion to remove the opposite, without depending on a later Hecke presentation.

At the external-consumer scan no other landed current-run batch contained a dependency on a batch-2 item. There are no published files for these new scaffold IDs. Root was notified of the changed interfaces and retains external-consumer integration and gate ownership; no other batch was edited.

Scoped checks on the repaired carriers:

- `manifest-deps`: 35 items, 0 errors.
- `content-policy --manifest-only`: 35 items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 1 page, 52 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`, then check mode: 6/6 fetch-verified and resolved; one newly stamped source, Milne.
- `url-sweep --recover --fail-on-dead`: 6/6 live, 0 failed.
- `source-backing --coverage ... --liveness ... --require-verified`: 22 authored results backed. An initial invocation omitting the required liveness argument returned usage exit 2; the corrected invocation passed.
- Focused dependency-level and linked-dependency audit: 35 items, 0 label errors, no cycles, maximum level 12, no undeclared links.

No whole-run check or workflow gate was attempted during sibling writing. No item proof-layout check applies because these are JSON scaffolds and no item files were authored. Step-1 readiness is refreshed against the completed current carriers, retaining the owner escalation until the final local supplier/consumer records are stable. The two original uncertainty paragraphs no longer defer proof closure to Step 3; later authors still owe complete written proofs and the ordinary independent checks.
