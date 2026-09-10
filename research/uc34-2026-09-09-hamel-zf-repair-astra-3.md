# Hamel ZF repair receipt

Date: 2026-09-09. Owner-authorized, one-item local repair; no judge, shared-plan, ledger, page, or engine writes.

## thm-banach-space-no-countably-infinite-hamel-basis

Disposition: locally repaired, preserving the real/complex theorem and explicitly its ZF contract.

- Before SHA-256: `5b6fa302188f3d0bf03e14225f0963f7d75d7b5cf00869dcd63a18cf8e0033cf`.
- After SHA-256: `2188c10299dd5240ebcad392fa3e2f2fb8f46a0f644435573a8b86bb5f82ee19`.
- Changed publication: `items/thm-banach-space-no-countably-infinite-hamel-basis.md` only.
- Obsolete judge/owner-audit stamps replaced by an honest delegated `locally-repaired` record specifying this local ZF proof/dependency scope. This is not independent judge certification.

### Exact repair

The prior Recorded `rem-baire-category-choice-strength` edge and all body uses are removed. The prior finite-dimensional-closedness edge is also removed: its actual proof inherits countable choice, so deleting the Recorded edge alone would not have repaired the ZF claim. Unused `def-dimension` and the no-longer-needed countable-surjection conversion edge are removed.

The proof now first realifies a complex basis by the explicit interleaving `e_(2j)=b_j`, `e_(2j+1)=i b_j`. Its finite real relations group into complex relations, proving independence; splitting complex coefficients proves spanning. This lets all rational coding and finite-dimensional completeness use real scalars. No complex approximation theorem or selected family of bases is needed.

A single fixed published pairing bijection encodes finite words with both length and iterated pair residue. The decoder inverts exactly that length, returns the empty word on an invalid residue, and is a uniformly defined total surjection onto finite words. Each symbol encodes a generator index and rational-enumeration index. Its interpreted finite sum defines the dense sequence directly. The same decoder, with out-of-range generator indices contributing zero, uniformly supplies the rational span enumeration for each finite initial span. This is not an appeal to arbitrary countable-union countability.

Density uses the least rational-enumeration index for each coefficient of one finite expression and the displayed finite norm estimate. For a point in the closure of a fixed finite span, adherence and its rational density prove existence of an approximating index for each error `1/(k+1)`. Taking the least such index defines a single Cauchy sequence, whose limit in that finite span follows from the earlier finite-dimensional Banach corollary on its displayed ordered basis. The triangle inequality identifies that limit with the original adherent point. Consequently each finite span is closed without invoking general closure-to-sequence or complete-implies-closed.

The Baire construction is stated as a total successor on the set of valid integer triples `(stage, center-index, radius-index)`. Both successor indices are explicit minima, and openness plus the reciprocal Archimedean corollary prove existence. Published recursion then supplies the sequence. Geometric radius decay gives a Cauchy sequence of centers, Banach completeness its limit, and a direct norm inequality places that limit in every previously chosen closed ball. The limit avoids all finite spans, contradicting their union being the whole space. No arbitrary family of points from closed sets is selected.

### Actual supplier audit and order

All 13 direct dependencies are published, earlier than target order 288.051 item 12 (or earlier on its own A page):

| Dependency | Canonical order / position |
|---|---|
| `def-banach-space` | 288.047 item 2 |
| `cor-finite-dimensional-normed-spaces-are-banach` | 288.051 item 3 |
| `def-linear-basis` | 74 item 6 |
| `def-countable` | 18 item 2 |
| `thm-rationals-countable` | 18 item 12 |
| `thm-n-cross-n-countable` | 18 item 7 |
| `lem-q-and-irrationals-dense-r` | 131 item 9; only rational-density clause used |
| `thm-recursion` | 6; actual published page membership |
| `thm-well-ordering-principle` | 6; actual published page membership |
| `cor-archimedean-reciprocal` | 9 item 2 |
| `lem-geometric-sequence-null` | 114 item 13; only null-sequence clause used |
| `rem-real-and-complex-normed-space-convention` | 288.047 item 1; this is a published scalar convention, not a Recorded theorem |
| `thm-complex-numbers-are-the-real-coordinate-plane` | 54 item 15 |

The order-6 canonical row has an empty item list and legacy category `published`; actual `library/foundations/construction-of-the-natural-numbers.md` supplies exact membership. An initial diagnostic incorrectly used the canonical category as its filesystem directory and substring matching; correcting it to exact published item-list membership yielded 13/13 earlier-order PASS. There is no later computability recursion or order-665 weak-choice use.

Full used clauses and proofs were read. In particular the finite-dimensional completeness supplier's actual path was checked through the basis-map theorem, real norm equivalence, Euclidean Heine–Borel's deterministic bisection proof and the open-cover EVT proof; the coordinate-completeness route uses unique coordinate limits and least eventual indices. The real Cauchy/Bolzano–Weierstrass route uses the peak lemma's explicit least-index recursion, not a general compact-metric sequential compactness assertion. Detailed evidence and the scoped limitations of this supplier audit are in `research/uc34-2026-09-09-hamel-zf-research-astra-3.md`.

### Separate confirmed supplier issue, not repaired here

`cor-finite-dimensional-subspaces-are-closed` → `lem-complete-subspace-is-closed` → `thm-complete-subspace-iff-closed` claim 1 / step 1.1 → `thm-metric-sequential-closure`'s sequence-manufacturing direction. The general complete-subspace theorem's L2 and concluding choice remark explicitly spend countable choice; its statement and both downstream supplier statements omit that qualification. This is a confirmed proof/contract gap in the used route, not a claim that finite-dimensional closedness is false in ZF. The target now bypasses it. These supplier files were not edited. Parent owns their ledger reconciliation; no blanket conclusion about all their consumers is asserted.

### Source and checks

Authoritative full source read during the immediately preceding research: Alan Sokal, UCL Mathematics 3103, 2012–2013, [Handout 7](https://www.ucl.ac.uk/~ucahad0/3103_handout_7.pdf), Theorem 7.3 and complete proof, printed pp. 3–4, footnote 4 continuing on p. 5. The footnote supplies the precise separable ZF distinction and fixed dense-sequence/least-ball strategy. The general Cantor lemma's arbitrary point selection is deliberately not imported. The finite-word coding and finite-span closure details are proved locally. Howard–Tachtsis's repository abstract was not treated as a full proof.

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-banach-space-no-countably-infinite-hamel-basis.md`: PASS after adopting the checker's canonical numbering/order; 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-banach-space-no-countably-infinite-hamel-basis.md`: PASS, real KaTeX and renderer YAML parsing, no skipped math check.
- Exact direct-dependency publication/order check against canonical rows and exact published page inventories: 13 checked, 0 errors.
- Body wikilinks all declared in the 13 dependencies; no Recorded supplier remains.
- Scoped `git diff --check`: PASS.

These are honest local mathematical review and mechanical checks, not an independent judge or whole-library dependency-closure certification. Root may now synchronize the one canonical item dependency row and reconcile its ledger disposition.
