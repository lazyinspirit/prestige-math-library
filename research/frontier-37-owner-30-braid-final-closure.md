# Frontier 37 braid final closure

Run: `frontier-37-owner-30`  
Lane: B21 `pure-braids-fadell-neuwirth-and-asphericity` and B22
`artin-presentation-completeness-and-braid-combing`  
Review date: 2026-10-01

## Scope and claim inventory

Both approved pair scopes are current. B21 has the owner's `proceed` receipt at
scope hash `6ebcb397778bf8dd1d6d7cb55aee294b4511bf584a15ab31806ee4026ad85a31`;
B22 has the owner's `proceed` receipt at scope hash
`37296038f75db49fd1ff2190f34d59ae785f544ba495662d96fe201cbce0e87a`.

| Pair | Inventory | Scope disposition |
| --- | --- | --- |
| B21, batch 21 | 16 original IDs and kinds: 12 A-page items and 4 examples/counterexample | All designed items remain. No item was added, dropped, or renamed. |
| B22, batch 22 | 11 original IDs and kinds: 8 A-page items and 3 examples/counterexample | All designed items remain. No item was added, dropped, or renamed. |

The B21 scope-hash change is confined to the carrier statement for
`ex-pure-braid-generators-as-point-pushes`. Its current statement makes the
BG-5 example's existing promise precise in three parts: for every `i<j`,
`A_ij` is the closed-disc image of the one-coordinate clockwise motion of
`q_j` around `q_i` along the stem transported by
`H_{j-1}∘…∘H_{i+1}`; relabeling coordinate `j` as terminal gives the fibre loop
at the permuted basepoint; and for `i<n` the mapping-class image is the
clockwise point push, while the raw ordered slice is counterclockwise and the
configuration identification inverts it. These conventions make explicit
the design's “last point pushed after relabelling” claim and preserve the
standard positive generator. The four direct dependencies added after reading
the repaired body are `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`,
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
`def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`, and
`prop-stacking-of-geometric-braids-is-well-defined`.

The B22 scope hash stayed current through the proof repairs. No new B22 claim
or dependency destination was introduced. The pure-braid extension-splitting
example remains a separate B21 supplier; the B22 uniqueness claim proves the
geometric lower-rank triviality of `W2`, not abstract Artin triviality.

## Receipt invalidations and carrier synchronization

The prior 27-item closure had 17 hash-current ordinary receipts and 10
invalidated receipts. The ten were precisely the B21 free-kernel lemma and its
four dependent items, plus B22 A6, A7, A8, B2, and B3. The B21 free-kernel
proof and its direct consumers were repaired around the local winding,
inverse-loop sign, typed point-push conjugation, and compatible stem family;
the point-push example's body, statement, and dependency list were then
repaired. Those supplier changes raised the B21 dependency levels and flowed
into the five B22 items through the Artin uniqueness chain. Since Step 3 item
hashes include the item manifest row and the transitive supplier inputs, the
old receipts no longer certify the current bytes.

After inspecting the current item bodies, the three stale B21 manifest
dependency rows were synchronized to their authored frontmatter. The
generation theorem's unused `cor-the-pure-braid-extension-splits` edge was
removed, and the actual direct suppliers were recorded for the generation
theorem, PB2 example, and PB3 example. The PB3 example now declares its PB2
supplier, so its local dependency level changed from 10 to 11. The generation
theorem remains at level 10, PB2 at level 10, and the point-push example at
level 10. No B22 dependency level propagates from PB3. The three corrected
manifest dependency sets equal their current frontmatter sets.

The other 17 hash-current ordinary receipts were reused unchanged. Their IDs
are:

- B21: `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`,
  `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`,
  `thm-pure-braid-forgetting-a-strand-short-exact-sequence`,
  `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`,
  `lem-the-planar-forgetful-map-has-a-continuous-section`,
  `cor-the-pure-braid-extension-splits`,
  `thm-ordered-planar-configuration-spaces-are-aspherical`,
  `cor-unordered-planar-configuration-spaces-are-aspherical`,
  `def-standard-pure-braid-generators`,
  `thm-pure-braid-groups-are-torsion-free`, and
  `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free`;
- B22: `def-zariski-braid-combing-words-alpha-and-x`,
  `lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors`,
  `lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter`,
  `lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel`,
  `lem-every-trivial-braid-word-combs-as-w-one-w-two`, and
  `ex-combing-a-four-strand-braid-word`.

## Independent ordinary reviews

All ten invalidated B21/B22 items now have current confidence-1 ordinary
receipts. Their exact examined dependency IDs are stored in each receipt.

| Pair | Item | Decision | Mathematical disposition | Receipt |
| --- | --- | --- | --- | --- |
| B21 | `lem-standard-pure-braids-generate-each-free-kernel` | repaired | Fadell–Neuwirth identifies the kernel with the punctured-disc fibre. The local `F₂(U_i)≅S¹×C` computation gives winding `+1` for both the squared positive half twist and the counterclockwise meridian; inversion yields the clockwise generator. Typed point-push conjugation and the puncture-avoiding support-lens induction transport a compatible stem family, whose regular-neighbourhood spine proves the free-basis clause. | [receipt](frontier-37-owner-30-step3b-review-lem-standard-pure-braids-generate-each-free-kernel.json) |
| B21 | `thm-standard-pure-braids-generate-the-pure-braid-group` | accept | Induction uses the exact sequence: last-column generators generate the kernel, and the affine comparison homotopy identifies each older generator's projection with its lower-rank class at the transported basepoint. Thus the standard generators generate the whole group; no presentation claim is made. | [receipt](frontier-37-owner-30-step3b-review-thm-standard-pure-braids-generate-the-pure-braid-group.json) |
| B21 | `ex-the-pure-two-strand-braid-group-is-infinite-cyclic` | accept | `PB₂` is the free rank-one kernel over trivial `PB₁`; `A₁₂` is the clockwise meridian, inverse to the counterclockwise basis, so it generates an infinite cyclic group with winding `−1`. | [receipt](frontier-37-owner-30-step3b-review-ex-the-pure-two-strand-braid-group-is-infinite-cyclic.json) |
| B21 | `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension` | accept | The three-strand relation makes `Δ²=(st)³=abc` central. The normalized far-right section fixes `a` on the specified representative, giving action `x↦(bc)⁻¹x(bc)` on the free kernel. This is section-specific and does not claim a direct product. | [receipt](frontier-37-owner-30-step3b-review-ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension.json) |
| B21 | `ex-pure-braid-generators-as-point-pushes` | accept | Local winding and the inverse-endpoint convention give the adjacent sign. Conjugation by `H_{j-1}∘…∘H_{i+1}` transports the point push and its stem for all `i<j`; the relabeling square gives the terminal-fibre statement. No whole-word isotopy or fibre-inclusion injectivity is assumed. | [receipt](frontier-37-owner-30-step3b-review-ex-pure-braid-generators-as-point-pushes.json) |
| B22 | `lem-the-combed-geometric-decomposition-is-unique` | repaired | Free cancellation proves `x_i=P_i⁻¹A_{in}P_i`. The straight-strand extension is an embedding into a disk avoiding `q_n`, and its embedding homotopy gives injectivity on `π₁`. A left-inverse endomorphism proves the conjugated words form a free basis; the split complement forces `W₁` free-trivial and `W₂` geometrically trivial at rank `n−1`. | [receipt](frontier-37-owner-30-step3b-review-lem-the-combed-geometric-decomposition-is-unique.json) |
| B22 | `thm-the-artin-presentation-is-complete-for-geometric-braids` | accept | Induction on strand number applies the combing lemma, the geometric decomposition lemma, and lower-rank completeness. This proves the kernel of the published Artin surjection is trivial; injectivity is not assumed. | [receipt](frontier-37-owner-30-step3b-review-thm-the-artin-presentation-is-complete-for-geometric-braids.json) |
| B22 | `cor-all-four-classical-braid-models-realize-the-artin-presentation` | accept | Composing the current completeness isomorphism with the configuration, open-to-closed, and in-run mapping-class isomorphisms transports the same generators and presentation to all four models. | [receipt](frontier-37-owner-30-step3b-review-cor-all-four-classical-braid-models-realize-the-artin-presentation.json) |
| B22 | `ex-the-free-kernel-words-for-three-strand-braid-combing` | repaired | At `n=3`, free cancellation gives `x₂=A₂₃` and `x₁=A₂₃⁻¹A₁₃A₂₃`. The explicit inverse-conjugation map proves the pair is a free basis. Its meridian reading uses the clockwise sign and the conjugated stem class. | [receipt](frontier-37-owner-30-step3b-review-ex-the-free-kernel-words-for-three-strand-braid-combing.json) |
| B22 | `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness` | accept | The surjection `C₄→C₂` sends `x` to `g`; the defining relator holds and `g` generates, while nontrivial `x²` maps to the identity. This refutes the general inference and isolates the missing braid obligation as kernel triviality. | [receipt](frontier-37-owner-30-step3b-review-cex-visible-artin-relations-alone-do-not-prove-presentation-completeness.json) |

### Selected affected checks

Before the metadata-only B21 manifest synchronization, strict proof-contract
checks on the ten affected items passed: B21 5/5 and B22 5/5, each with 0
errors and 0 warnings. The synchronization changed only dependency arrays
and the PB3 level; it did not alter item bodies or proof-contract quotes.
After synchronization, all three corrected B21 manifest dependency sets were
checked against current frontmatter and match. No whole-batch closure check or
workflow gate was run for this audit.

## Final status

The B21 and B22 approved scopes remain current. Seventeen prior ordinary
receipts were reused and the ten genuinely invalidated receipts were refreshed
as listed above. All 27 pair items now have current ordinary decisions on the
reviewed bytes.
