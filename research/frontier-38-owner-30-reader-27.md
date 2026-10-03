# Reader 27 — frontier-38-owner-30, batch 27

Review date: 2026-10-03. Scope: the two assigned pages and fifteen assigned draft items. This is a reader report, not a judgment, certification, or workflow transition.

## Page verdicts

- **point-blowup-resolution-on-arbitrary-regular-surfaces (A): sound after the repairs below.** The theorem needs finite normalization of every original component. The proof first regularizes and separates those components, then lowers contacts among all components of the total-transform support, and finally removes triple-or-higher intersections. It yields regular ambient surfaces and regular individual divisor components, with SNC reduced support; that support is not generally a regular scheme at a crossing.
- **point-blowup-resolution-on-arbitrary-regular-surfaces-examples (B): sound with the repaired assigned items.** No B-page prose was edited. Its node and cusp descriptions agree with the explicit charts under the fields and characteristic restrictions stated in their items: one ambient blowup for the node, three for SNC support of the cusp, and one for the cusp's regular normalization and defect drop.

## Repairs and evidence

1. **def-intersection-multiplicity-of-closed-subschemes, Remarks [R2].** Replaced the assertion that the intersection itself can be a strict-transform plane curve with the correct description: Y can be a strict-transform curve, while Y intersect Z is its zero-dimensional contact locus. The existing hypothesis excludes the generic point of Y, so every intersection component is a closed point. The preceding definition and its nilpotent-maximal-ideal filtration prove finiteness of the local length. Updated the affected contract boundary.
2. **thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface, final Statement paragraph and Proof 6.1.** Removed the assertion of regularity of the final support, specifying SNC support and regular irreducible components. For example, k[u,v]_(u,v)/(uv) is an SNC crossing with dimension one and cotangent dimension two, hence is not regular. The actual numbered conclusions and construction already gave the correct SNC result. Updated derivation D6.1 and the degenerate boundary in its contract. [Stacks Lemma 41.21.2](https://stacks.math.columbia.edu/tag/0BIA), criterion (2), concerns regular components and their intersections, not regularity of their union. [Lemma 54.15.6](https://stacks.math.columbia.edu/tag/0BIC), statement and final proof paragraph, concludes effective Cartier total transform with SNC support. Read the complete relevant arguments of both lemmas.
3. **Assigned A-page prose, opening and final paragraphs.** Added the finite-normalization hypothesis to the opening summary. Added the previously omitted phase lowering all support-component contacts to one before eliminating triple-or-higher intersections. Replaced regularity of the support with SNC support and regular components. Evidence: the current theorem's hypotheses and Proof 4.1–6.1, as well as the maximum-contact and multiple-point phases of Stacks 54.15.6. The cusp computation demonstrates why removing triple points alone does not remove tangency.
4. **ex-node-resolved-by-one-blowup, Example final sentences and 0BI7 source locator.** Removed the claim that the singular node's first blowup is predicted by the regular-source drop lemma. The original local ring has dimension one and embedding dimension two, so it fails that lemma's regular-source hypothesis. Verification 3.1 directly computes the whole strict transform: the x-chart has x=t²−1, the other chart lies in its overlap, and its exceptional contacts at t=±1 have length one. No change to the computed conclusion. Updated the contract's characteristic/hypothesis boundary. [Stacks Lemma 54.15.3](https://stacks.math.columbia.edu/tag/0BI7), statement and complete proof, explicitly requires regularity of O_{Y,p}.
5. **cex-finite-normalization-does-not-make-the-curve-regular-before-blowups, sources, Counterexample and contract.** Removed the 0BI7 locator attributing intermediate-algebra growth to the contact-drop lemma; the retained [0BI4](https://stacks.math.columbia.edu/tag/0BI4), Lemma 54.15.1 proof, is the correct argument. Added a direct blowup-chart step establishing the previously asserted one-blowup regularization: y=xt gives x=t², and x=ys gives 1−ys³=0, so the second-chart portion is in the overlap. This supplies the entire regular strict transform, not merely one chart. Adopted precheck's canonical phase numbering: chart computation 2.1, conclusion 3.1. Updated derivations, citation uses and boundary evidence. Also corrected the contract's claim that {1,t} is a module basis: it is a generating set, with the nonzero relation t³·1−t²·t=0 over k[t²,t³]. The item had correctly said “generated.”
6. **lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center, sources.** Removed the secondary 0BI6 locator describing coherent intermediate normalization algebras. [0BI6](https://stacks.math.columbia.edu/tag/0BI6) is only Equation 54.15.2.1 defining intersection multiplicity. The retained 0BI4 proof gives the actual stabilization/strict-growth argument; the item's finite-affine proof of strictness remains valid. This was a source-only mathematical edit; its proof contract remains applicable.
7. **lem-point-blowup-of-integral-curve-is-finite, 0AB7 source locator.** Replaced an imprecise generic-fibre description with the exact local condition: proper f, Noetherian O_{Y,y} of dimension at most one, and finite/algebraic residue-field extensions at every generic point of X over its image imply finiteness over a neighbourhood of y. Read [Stacks Lemma 33.17.2](https://stacks.math.columbia.edu/tag/0AB7), condition (1) and complete proof. The local proof here continues to use its independently derived zero-dimensional exceptional fibre and proper-plus-quasi-finite criterion; its mathematical contract is unchanged.

All edits are confined to assigned draft items, assigned A-page prose, and the affected batch proof contracts. No assigned item had a verification.judge record to remove. Reflow joined soft-wrapped Facts/Given paragraphs in the five proof-bearing changed items without changing their mathematics; the definition was unchanged by reflow.

## Mathematical checks

The DVR argument for contact drop preserves the local length and its strict direction: an element of minimal valuation N in the second curve's ideal yields f/x in the saturated strict-transform ideal, with valuation N−1. N=1 forces disjointness over the center. The curve point-blowup finiteness proof derives a positive constant graded Hilbert function from Hilbert–Samuel degree one, compares it with the eventual projective Hilbert function through saturation and Serre vanishing, and then uses proper plus quasi-finite. The regular-center isomorphism criterion uses invertibility of the pulled-back point ideal in the reverse direction.

The normalization factorization uses nonzero proper ideals in the normalization DVRs. Its affine ring argument makes the factorization finite and identifies the same integral closure. A nontrivial finite point blowup strictly increases the structure algebra; restriction of scalars preserves its nonzero quotient under further finite pushforwards. The stabilization argument takes place in a fixed coherent normalization algebra on a Noetherian scheme. Ambient regularization uses the intrinsic-strict-transform blowup identity. Later point blowups preserve already regular curves. Finite pairwise contact sets and integer descent prove termination of separation and of the final SNC process.

The arbitrary-surface local proof separates closed centers of local dimension one (identity blowup) from dimension two (regular charts and P¹ over the residue field). The actual singular-curve/intersection centers in the resolution construction have dimension two. Neither this argument nor the SNC conclusion invokes smoothness over a field.

For the node, the formal square root of 1+x is constructed by recursion dividing only by two, so the characteristic-three case is valid. For the cusp, the first exceptional contact has length two; the second blowup has three distinct transverse directions, and the third separates them. The projective cubic is regular at infinity, and its defect is computed directly from k[t]/k[t²,t³], spanned by the class of t. The separate Euler-characteristic supplier's proof was read; its projective hypotheses are satisfied on P²_k, and its formula agrees with this direct computation.

## Opened inventory

Repository/task instructions: CLAUDE.md, README.md, SCHEMA.md, briefs/reader.md. Assignment: research/frontier-38-owner-30-batch-27.pages.json. Contracts: research/frontier-38-owner-30-batch-27.proof-contracts.json. No rendered evidence bundle was used.

Both assigned pages were opened in full:

- library/algebraic-geometry/point-blowup-resolution-on-arbitrary-regular-surfaces.md
- library/algebraic-geometry/point-blowup-resolution-on-arbitrary-regular-surfaces-examples.md

All assigned item bodies, including frontmatter, statements/definitions, facts, arguments and remarks, were opened. The logical verification proceeded through the local inputs, finite-normalization chain, ambient regularization, separation, SNC construction and examples:

- items/def-intersection-multiplicity-of-closed-subschemes.md
- items/lem-increasing-sequence-of-coherent-subsheaves-stabilizes.md
- items/def-strict-normal-crossings-divisor.md
- items/lem-blowup-of-closed-point-of-regular-surface-is-regular.md
- items/lem-intersection-multiplicity-drop-under-point-blowup.md
- items/lem-point-blowup-of-integral-curve-is-finite.md
- items/lem-normalization-factors-through-blowup-of-curve-point.md
- items/lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center.md
- items/thm-regularization-of-finite-normalization-curve-by-point-blowups.md
- items/lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups.md
- items/thm-separation-of-regular-curve-components-by-point-blowups.md
- items/thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface.md
- items/cex-finite-normalization-does-not-make-the-curve-regular-before-blowups.md
- items/ex-node-resolved-by-one-blowup.md
- items/ex-cusp-resolution-and-delta-drop.md

Direct external suppliers: relevant Definition/Statement sections were opened for each of the following 82 items. The Facts, entire Proof and Remarks of lem-blowup-multiplicity-euler-characteristic-drop were additionally read. These are targeted supplier checks, not whole-item audits of every external proof.

- items/cor-blowup-birational-integral-scheme.md
- items/cor-dimension-of-a-finite-polynomial-ring-over-a-field.md
- items/cor-dimension-of-a-quotient-as-chains-above-an-ideal.md
- items/cor-dimension-preserved-by-integral-extensions.md
- items/cor-dvr-is-a-pid.md
- items/cor-finite-type-algebra-over-noetherian-ring-is-noetherian.md
- items/cor-finite-variable-polynomial-ring-noetherian.md
- items/cor-h0-projective-space-o-d-homogeneous-polynomials.md
- items/cor-length-is-additive-in-short-exact-sequences.md
- items/cor-localisations-of-regular-local-rings-are-regular.md
- items/cor-serre-normality-criterion-two-directions.md
- items/def-axiom-of-choice.md
- items/def-blowup-scheme-along-ideal.md
- items/def-cartier-divisor.md
- items/def-coherent-module-scheme.md
- items/def-composition-series-and-length-of-a-module.md
- items/def-dimension-noetherian-topological-space.md
- items/def-effective-cartier-divisor.md
- items/def-embedding-dimension-and-regular-local-ring.md
- items/def-exceptional-divisor-blowup.md
- items/def-finite-morphism-schemes.md
- items/def-finite-type-finite-presentation-module-sheaf.md
- items/def-hilbert-function-sheaf-projective.md
- items/def-hilbert-samuel-function-and-polynomial.md
- items/def-integral-scheme.md
- items/def-local-ring.md
- items/def-locally-noetherian-and-noetherian-scheme.md
- items/def-noetherian-module.md
- items/def-noetherian-ring-and-module.md
- items/def-normal-noetherian-ring.md
- items/def-normalization-defect-of-reduced-curve.md
- items/def-projective-scheme-from-a-homogeneous-quotient.md
- items/def-quasi-coherent-module-scheme.md
- items/def-quasi-finite-morphism-schemes.md
- items/def-relative-proj-quasi-coherent-graded-algebra.md
- items/def-scheme-theoretic-fibre.md
- items/def-smooth-morphism-schemes.md
- items/def-strict-transform-closed-subscheme.md
- items/def-symmetric-algebra-qc-module.md
- items/def-total-transform-divisor.md
- items/lem-affine-blowup-algebra-properties.md
- items/lem-blowup-isomorphism-off-center.md
- items/lem-blowup-local-on-base-scheme.md
- items/lem-blowup-multiplicity-euler-characteristic-drop.md
- items/lem-blowup-reduced-integral-under-domain-rees.md
- items/lem-chain-dimension-open-cover.md
- items/lem-finite-modules-over-noetherian-rings-are-noetherian.md
- items/lem-regular-local-domain-induction.md
- items/lem-regular-local-quotient-by-parameter-is-regular.md
- items/lem-regular-system-of-parameters-equivalent-basis.md
- items/thm-affine-blowup-standard-charts.md
- items/thm-affine-quasi-coherent-equivalence.md
- items/thm-artinian-ring-characterisation-by-primes.md
- items/thm-artinian-ring-has-finite-length.md
- items/thm-associated-graded-ring-of-a-regular-local-ring.md
- items/thm-blowup-base-change-flat.md
- items/thm-blowup-closed-immersion-transform-universal.md
- items/thm-blowup-effective-cartier-divisor-isomorphism.md
- items/thm-blowup-projective.md
- items/thm-blowup-universal-property.md
- items/thm-closed-subschemes-projective-space-homogeneous-ideals.md
- items/thm-coherent-sheaves-abelian-noetherian-scheme.md
- items/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring.md
- items/thm-dvr-ideal-and-module-length.md
- items/thm-equivalent-characterisations-of-a-dvr.md
- items/thm-equivalent-characterizations-of-noetherian-modules.md
- items/thm-exceptional-divisor-normal-cone-proj.md
- items/thm-hilbert-polynomial-coherent-sheaf.md
- items/thm-hilbert-polynomial-degree-support-dimension.md
- items/thm-hilbert-samuel-dimension-theorem.md
- items/thm-localisation-and-polynomial-extension-of-regular-rings.md
- items/thm-localisation-of-modules-is-exact.md
- items/thm-nilradical-of-a-noetherian-ring-is-nilpotent.md
- items/thm-noetherian-ring-quotients-and-localisations.md
- items/thm-nonaffine-regular-local-ring-is-ufd.md
- items/thm-normalization-reduced-curve-exists-finite.md
- items/thm-one-dimensional-regular-local-rings-are-dvrs.md
- items/thm-polynomial-ring-over-a-field-is-a-ufd.md
- items/thm-projective-morphism-proper.md
- items/thm-proper-quasi-finite-is-finite.md
- items/thm-pullback-center-ideal-invertible.md
- items/thm-serre-vanishing.md

Secondary suppliers for the Euler-characteristic proof: relevant Statements opened:

- items/lem-total-transform-strict-plus-exceptional-multiplicity.md
- items/thm-blowup-regular-surface-closed-point-regular.md
- items/lem-blowup-point-pushforward-vanishing.md
- items/lem-projection-formula-invertible-twist.md
- items/lem-acyclic-direct-image-cohomology-comparison.md
- items/cor-twist-exact-sequence-effective-divisor.md
- items/lem-effective-cartier-divisor-exact-sequence.md
- items/lem-euler-characteristic-additive-short-exact.md
- items/lem-closed-immersion-cohomology-pushforward.md
- items/lem-exceptional-fiber-line-bundle-euler-characteristic.md
- items/lem-normalization-defect-euler-and-lengths.md
- items/lem-normalization-unchanged-under-finite-birational-curve-map.md
- items/lem-proper-source-to-separated-target-proper.md

External authoritative text: complete relevant statements and arguments read at Stacks tags 0BI4 (54.15.1), 0BI5 (54.15.2), 0BI7 (54.15.3), 0BI8 (54.15.4), 0BIB (54.15.5), 0BIC (54.15.6), 0BIA (41.21.2), 0AGQ (54.3.1), 02LS (37.44.1), 0AB7 (33.17.2), and 080E (31.34.2); Equation 54.15.2.1 at 0BI6 was also opened. The reduced-curve Cartier argument avoids the additional point-ideal principalization theorem used in 54.15.5.

All contract derivation text was compared with its authored proof steps after normalization of whitespace and escaped backslashes; all matched before repairs and match after repairs. Citation quote text was also checked against the opened targets; no unmatched quote was found. Boundaries were inspected separately, including the corrected generating-set assertion. This consistency check is not a proof-validity certification.

## Local validation

- Reflow ran on each of the six changed items. The final counterexample reflow was unchanged after adopting canonical numbering; the definition reflow was unchanged.
- Precheck passed separately on all five changed proof-bearing items. The new counterexample step initially required canonical phase numbering; that repair was adopted, the contract updated, and the repeated precheck passed. The definition returned “0 checked, 0 failing,” because it has no proof section.
- Scoped rendercheck passed on all six changed items and the changed A page: seven files, all frontmatter and mathematics parsed.
- Final required layout command (after the final item edit and formatter):

```sh
node tools/proof-layout.mjs items/def-intersection-multiplicity-of-closed-subschemes.md items/thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface.md items/ex-node-resolved-by-one-blowup.md items/cex-finite-normalization-does-not-make-the-curve-regular-before-blowups.md items/lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center.md items/lem-point-blowup-of-integral-curve-is-finite.md
```

Result: `proof-layout: 6 items, 27 steps, 0 defects` (exit 0).

## Uneditable findings, blockers and limitations

No confirmed or suspected mathematical defect remains to route in an uneditable carrier. No withdrawal is proposed and no blocker remains. The findings JSON therefore has an empty findings array.

Coverage includes both assigned pages, all fifteen assigned item bodies and contracts, all 82 direct external suppliers' relevant definitions/statements, and thirteen additional Euler-proof supplier statements. External suppliers were checked at the clauses needed here; their full transitive proof closures were not exhaustively re-audited. Only the Euler-drop supplier's full proof was additionally read. No unrelated batch, published item, plan specification, B-page prose, or workflow gate was edited or certified.
