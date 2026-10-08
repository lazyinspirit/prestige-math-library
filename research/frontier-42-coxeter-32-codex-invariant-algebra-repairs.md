# Batch 20 invariant algebra: bounded native review and focused repair

Assigned scope: `def-cg-coxeter-basic-degrees-and-graded-coinvariants`, `lem-cg-basic-degrees-independent-and-coinvariant-series`, `lem-cg-formal-rational-differentials-and-invariant-jacobian`, `thm-cg-coinvariant-top-degree-and-discriminant`, `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class`, and `ex-cg-i2m-invariants-and-coinvariant-hilbert-series`. This is a local mathematical review, not an independent judge, recertification, gate, or publication record.

Read CLAUDE.md, README.md, and SCHEMA.md fully. Read all seven assigned texts and the four published invariant-theory suppliers fully. Source/DAG preparation is complete. Dependent mathematical review and edits await the spectrum owner's complexification/spectrum readiness and root confirmation of other in-run root/chamber prerequisites.

Prepared candidate findings for verification on stable suppliers:

- Degree multiset recovery cancels inverse factors by multiplying, whereas the text currently says dividing.
- The differential identity delta_jk=sum_i b_ij J_ik corresponds to B^T J=I, rather than BJ=I for B=(b_ij).
- The I2(m) chain-rule matrix uses coordinate rows/equation columns but its displayed entries have equation rows/coordinate columns. Correct to J^T h=0 with equation-row convention.
- The fibre-product quotient description needs p(0)+q(0), rather than p(u)+q(z) with p(0)=q(0), and the image under multiplication by (t^m,t^m) requires equality of the two leading coefficients at degree m.
- The I2(m) abstract Weyl-group nonisomorphism claim cannot be proved by asserting rank two: I2(6) is abstractly A2 x A1, a rank-three Weyl group. A stronger local group obstruction preserves the claim: products of root reflections have order 1,2,3,4,6; their images in D_m generate rotations with orders dividing 12, forcing m|12, and pairwise order restrictions exclude m=12. This handles arbitrary rank without a false rank inference.

No item edits or workflow transitions have yet been made by this owner.

## Stable supplier review and focused corrections

Spectrum owner confirmed the complexification supplier stable and ready. Root confirmed the external algebra/root/chamber prerequisites native-drained and reviewed. Batch 19 remains active: the bipartite definition and Steinberg root enumeration are required by the regular-eigenvector theorem, so that theorem is explicitly held. The spectrum owner's later correction also holds the whole classical/exceptional items' root-count clauses; their locally verified matrix/spectrum calculations are available for the I2(m) consistency comparison, which does not consume the root-count clauses.

The six locally reviewable subjects were checked against actual arguments, not their native self-audit confidence. The definition's AC scope and justifier are consistent with the published regular-sequence parameter-system proof. The choice-free invariant-generation supplier itself proves its finite generation and algebraic independence locally. The degree-series, Reynolds/Molien, rational orbit-polynomial/minimal-derivative/chain-rule bridge, normalized Molien coefficient comparison, reflection divisibility, anti-invariant module, coefficient-factorial pairing, and explicit A2 coordinates/basis all have complete local arguments after the corrections below.

Applied four focused item corrections in dependency order:

1. `lem-cg-basic-degrees-independent-and-coinvariant-series`: multiply by the recovered factor to cancel it from the inverse-factor Hilbert series.
2. `lem-cg-formal-rational-differentials-and-invariant-jacobian`: write the left-inverse matrix as B=(b_ji), matching delta_jk=sum_i b_ij J_ik. The field algebraicity, separability argument, scalar differential identities and nonzero determinant remain unchanged.
3. `thm-cg-coinvariant-top-degree-and-discriminant`: the existing rank-one paragraph proved only the degree sum then restricted subsequent steps to n≥2. Added the direct rank-one invariant ring C[x1²], generator a x1², discriminant ±x1, Jacobian, odd anti-invariants, and sign quotient line, closing all rank-one clauses.
4. `ex-cg-i2m-invariants-and-coinvariant-hilbert-series`: correct fibre-product representation to p(u)+q(z)-p(0) and specify the equality constraint in multiplication's image; correct the chain-rule matrix transpose; replace the unjustified rank-two inference and incomplete m=5 bound by the all-rank abstract dihedral reflection-order obstruction, preserving the full nonisomorphism claim. A direct integer-trace obstruction proves that the prescribed plane action preserves no full lattice for excluded m. No AC-scoped existence theorem is used by this explicit example.

The definition and A2 example needed no edit. The A2 normalized root forms give Delta=(u³-z³)/(8i), J=-24i Delta and the nonzero top class -i[u³]/4 exactly as stated.

Fresh-load-at-write reconciliation changed only these owned manifest statement objects and the relevant owned proof-contract entries. The I2 statement retains the same abstract nonisomorphism claim and substitutes a sound explanatory sentence; it has no item consumers. The rational statement's matrix-index correction has direct consumers `thm-cg-coinvariant-top-degree-and-discriminant` and `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`; they consume only its unchanged nonzero-Jacobian conclusion. The former was checked, while the latter remains held pending batch19. No substantive supplier hypothesis or conclusion was weakened or altered. No page prose, receipt, certificate, run state/control, gate or publication action was performed.

## Verification and remaining hold

Actual local checks after edits:

- `node tools/proof-layout.mjs` on the explicit four changed item paths: 4 items, 20 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on the six locally ready paths: 5 proof-bearing items checked, 0 failures (definition has no proof).
- `node tools/rendercheck.mjs` on those six paths: all parse under the real renderer/KaTeX.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-20.proof-contracts.json --strict --items` with the same six IDs: 0 errors, 0 warnings, 6/6 checked. Its initial stale complexification citation quote was corrected from e_s⊗1 to 1⊗e_s to match the supplier's type correction, then the check passed.

Remaining exact dependency hold: `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` consumes `lem-cg-steinberg-bipartite-root-enumeration` clauses (2)-(4): Coxeter-plane rotation angle 2π/h, every reflecting hyperplane's trace on the plane being a line, invertibility of c-I, and N=nh/2. It also consumes the active bipartite definition's element/order/prefix-root conventions. Review must resume only after native19 writers drain and the assigned Codex supplier review accepts these exact spans. No regular-theorem acceptance or completion is claimed here. Its dependent E6/H3 example is owned by the spectrum reviewer and similarly held. This is one bounded review plus focused correction, not a new broad audit loop.

## Held theorem closure after frozen batch19 readiness

Root resumed only the held regular-eigenvector subject after genuine native19 success and writer drain. The batch19 owner independently reviewed and froze the exact core suppliers. Read their current full bytes and checked the actual interface spans. Their `itemHashGuard` values match the owner-provided frozen hashes:

- `def-cg-bipartite-coxeter-element-and-root-recursion`: `51cb69410558762d430b42c5fa3ed07cd8c19e0ad5fc70e54af466a65cbdfa50`.
- `lem-cg-steinberg-bipartite-root-enumeration`: `2dd7fcf44e80cd4e50d5c25810ff745ea45e28b7c275b9f3f91d879fc6918e3e`.

The spectrum owner also reconciled its exact frozen19 uses and declared the complete classical/exceptional subjects ready without further item edits. Their current guards are `5c77d7f21c8e4954b296621aeb3249969099ccfe47d00fbb0f815e753737085d` and `27f12a79f601ca699b64989230d13b26c3d17c41233136e2a1a2d8a20163a84e`, respectively. This closes the held prerequisite context rather than rerunning the six earlier closed algebra reviews.

The regular theorem's current argument needs no further repair. Its exact uses now close:

- Definition (1)-(3) fixes c=ab, its order h, the ordered data and component conventions. The theorem's irreducible n≥2 argument does not apply the root count to unequal reducible components.
- Steinberg (2), especially proof steps 8.1-9.1, gives the rotation angle 2π/h and proves that every real root-hyperplane trace is a line. Therefore an eigenvector ξ+iη with ξ,η spanning P lies in no complexified root hyperplane. The unchanged nonzero-Jacobian supplier conclusion, already checked after its matrix-index correction, yields an invertible gradient matrix there.
- Differentiating p_i(Cy)=p_i(y) at Cx=ζ_h^(-1)x yields dp_i(x)∘C=ζ_h^(d_i-1)dp_i(x). A covector basis thus gives the full eigenvalue multiset of C's transpose, equal to C's multiset. Steinberg (4), proved at 3.2 by mapping dual and prefix-root bases, excludes eigenvalue 1 after complexification.
- Real conjugate eigenvalue pairing gives sum of residues nh/2, including each -1 occurrence as h/2. Steinberg (3), proved by the incidence count/enumeration, gives N=nh/2, while the already repaired discriminant theorem gives Σe_i=N. Each positive exponent is its nonzero residue plus a nonnegative multiple of h; equal sums force every multiple to vanish.
- The two plane eigenvalues give extreme degrees 2,h. Adding one to the independently proved spectrum multisets gives all displayed degree lists, including repeated D_n degree n. The component invariant/ideal argument gives reducible tensor quotients. Rank zero and rank one are explicit. AC remains inherited only through the invariant-degree suppliers.

Fresh single-subject checks: precheck PASS (1 checked, 0 failures), rendercheck PASS (1 file), proof-layout PASS (7 steps, 0 defects), and strict selected proof contracts PASS (1/1, 0 errors, 0 warnings). No item, statement, manifest or contract mutation was necessary during this held-subject closure. No new source reading claim beyond the actual supplier bytes is made.

Final regular-theorem `itemHashGuard`: `99ec504ea0eb5875f0325dc77031b0bb85b3472159d0587b90ee49e277141695`; raw SHA256: `669879f09017e3d1a4903ce34e550c85465c002699f5cffbf40f6c5a91c3b2e3`. The theorem is READY for the spectrum owner's actual E6/H3 consumer: clauses (1)-(2) transfer residues to degrees under the existing AC assumption, and its unchanged order-product supplier gives 51840 and 120. Readiness and the exact guard were sent to that owner. All seven assigned subjects' bounded mathematical review is now closed; root retains acceptance and certification. No run state, gate, certificate, receipt or publication was touched.
