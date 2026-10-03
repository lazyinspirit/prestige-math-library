# A885 pseudo-abelian prerequisite bundle

Disjoint owner assignment: the five item files listed below and this note only. CLAUDE.md, README.md and SCHEMA.md were read before editing. No existing supplier, page, plan, manifest, task, track carrier, or autopilot state was edited; no engine transition was invoked. All five are draft. The initially proposed, uncreated `lem-nonaffine-geometric-properness-quasiprojective-descent` was replaced, with explicit confirmation from the owner and active A885 author, by `lem-nonaffine-geometric-properness-field-descent`: exactly the field-extension properness test needed by completeness. No quasiprojectivity descent theorem was promised or silently assumed. The earlier intended 57 A + 2 B inventory becomes 62 A + 2 B after adding this packet, below the 100 A-item cap; final aggregate placement belongs to the integrating author.

## Authoritative source reading

Complete authoritative PDFs were already retrieved in this session and their hashes were recomputed. Existing complete extracted text was used for targeted reading; the PDF was not read cover to cover. An attempted fresh `pdftotext` invocation failed because that command is absent; this did not prevent reading the complete saved extraction and is not counted as a successful extraction.

| Full source | Edition, exact locators and reading | Recomputed PDF SHA256 |
|---|---|---|
| https://www.jmilne.org/math/Books/iAG2022.pdf; `/tmp/frontier38-groups-review.pdf`, text `/tmp/ag879-milne.txt` | Milne, *Algebraic Groups*, 5 October 2021 corrected text, as published by CUP 2022. Full statements/proofs of 8.5 (printed p.149), 8.23 and 8.24 (p.153), 8.26 (p.154); adjoining definitions 8.3/8.4 and 8.2/8.6/8.7 (pp.149–150) also read. | `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40` |
| https://arxiv.org/pdf/1509.03059; `/tmp/ag885-brion-structure.pdf`, text `/tmp/ag885-brion-structure.txt` | Brion, *Some structure theorems for algebraic groups*, arXiv:1509.03059v3, 12 December 2016. Entire §4.2 (printed pp.36–38), including the complete 4.2.3/4.2.4/4.2.5 proofs and the imperfect-field example; §4.3.1 outline and complete Theorem 4.3.2 statement/proof (p.39), with subsequent remark on p.40. | `dd956bc2ef9b7d148be05fdabc92aefa5ace28582c721afc0f2e2ef8c2225ea7` |

The active author's full norm, rational extension, pointed homomorphism, centrality, normal and affine quotient, exact sequence, finite monomorphism, centre/jet, multiplication and Rosenlicht supplier items were read before their use. The newly stabilized maximal affine normal subgroup item was read afterward and before closing its consumers: it says largest smooth connected affine normal subgroup and a quotient with no such nontrivial subgroup, **not** an abelian quotient. Its author explicitly confirmed this interface. It is consumed only by the separable stability lemma. No Barsotti–Chevalley theorem is assumed in the completeness proof.

## New items, proof order and exact interfaces

1. `lem-nonaffine-reduced-neutral-subgroup-over-perfect-field`: over perfect k, reduction of a finite-type group is a smooth closed subgroup; its identity component is smooth geometrically integral, connected, and has the same dimension as the group. Normality is asserted for a normal subgroup inside a **smooth** ambient group; properness/affineness inherit by closedness. The proof establishes geometric reducedness from a separating transcendence basis and a separable polynomial, then restricts group maps on reduced products. It does not assert reduction-normality inside arbitrary nonsmooth ambient groups.
2. `thm-nonaffine-rosenlicht-almost-complement`: for an abelian subvariety A of a smooth connected group G over any field, centrality, a **connected normal subgroup scheme** H, and finite faithfully flat multiplication A × H → G with exact finite scheme kernel A ∩ H. It is smooth when k is perfect. The generic torsor norm extends to a pointed homomorphism; the full kernel multiplication is explicitly a pullback of [n]. Restricting to its identity component keeps finiteness/flatness and gives surjectivity by open-and-closed image. In the perfect-field reduction step, the represented quotient by the exact finite kernel embeds into reduced G and hence is an isomorphism; faithful flatness is not inferred from topological surjectivity alone. There is no uniqueness assertion and no imperfect-field smoothness assertion.
3. `lem-nonaffine-pseudo-abelian-separable-field-extension`: pseudo-abelianness persists for **separable algebraic** extensions, finite or infinite. Over a finite Galois extension maximality makes the largest affine normal subgroup stable. Trace-dual bases explicitly descend the stable ideal; smoothness, affineness and connectedness descend. Infinite algebraic extension is handled by finite coefficient spreading and a finite Galois normal closure. Nothing is asserted for inseparable extensions.
4. `lem-nonaffine-geometric-properness-field-descent`: for separated finite-type X/k and **any** K/k, properness is equivalent before and after field extension. The proof checks that Spec K → Spec k is fpqc and applies the published fully proved properness descent theorem. Complete means proper here. No quasi-projectivity or projectivity hypothesis is imposed.
5. `thm-nonaffine-pseudo-abelian-perfect-field-is-complete`: the exact perfect-field smooth connected pseudo-abelian claim. After separable algebraic extension and properness descent, the dichotomy makes A = (Z_red)^0 proper, since otherwise a positive-dimensional affine subgroup is central and violates pseudo-abelianness. Finite jets embed G/Z in GL. The finite quotient Z/A then makes G/A affine. A smooth connected normal almost-complement H has finite kernel toward G/A, so affine extension makes H affine and pseudo-abelianness forces it trivial; thus G=A. This is Brion's full non-inductive centre-quotient proof of 4.3.2(1), rather than a circular assumption of Barsotti–Chevalley. It covers zero-dimensional centres without Milne 8.26's unexplained assertion O(G)=k.

AC is declared throughout where supplier contracts require it, and DC is carried through the multiplication supplier into almost-complements and completeness. Nonzero multiplication remains valid when characteristic divides n; no reducedness of its kernel is inferred.

## Recursive supplier closure

A dependency-first traversal of **all** frontmatter `deps` edges (including published suppliers), performed after the maximal supplier stabilized, found 2,266 existing IDs, no missing IDs and no cycles. SHA256 of the lexicographically sorted IDs, joined by newline with one final newline, is `f2b8c939b0f0e2a100d621df7f2843678c49104c8d323dc565bc4ed42c05e1aa`. `justified_by` links are not dependency edges. All reachable draft IDs below are in the local A885 packet. This verifies on-disk availability and graph closure; it is not an independent audit of 2,266 proofs or full A885 acceptance.

The direct dependencies are exactly the new files' frontmatter `deps` lists, with their actual proof uses given in Facts. The dependency-first draft subsequence is:

- `def-abelian-variety-over-a-field`
- `lem-nonaffine-global-sections-flat-field-base-change`
- `lem-nonaffine-connected-group-geometrically-connected`
- `lem-nonaffine-reduced-neutral-subgroup-over-perfect-field`
- `lem-nonaffine-rigidity-proper-geometrically-integral-factor`
- `prop-abelian-variety-commutativity-from-rigidity`
- `lem-nonaffine-flat-hypersurface-slice`
- `lem-nonaffine-effective-affine-algebra-descent`
- `lem-nonaffine-fppf-descent-of-scheme-morphisms`
- `lem-nonaffine-affine-and-finite-morphism-fppf-descent`
- `lem-nonaffine-generic-quasisection-flat-groupoid`
- `thm-nonaffine-finite-flat-affine-equivalence-quotient`
- `lem-nonaffine-finite-relation-saturated-affine-neighbourhood`
- `thm-nonaffine-finite-relation-quotient-with-affine-orbits`
- `thm-nonaffine-groupoid-quotient-from-quasisection`
- `thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation`
- `lem-nonaffine-finite-field-descent-scheme-with-affine-orbits`
- `thm-nonaffine-group-scheme-normal-subgroup-quotient`
- `lem-nonempty-smooth-scheme-finite-separable-point`
- `lem-nonaffine-finite-galois-descent-of-morphisms`
- `lem-nonaffine-commutative-torsor-norm-map`
- `lem-nonaffine-finite-field-descent-of-morphisms`
- `lem-nonaffine-rational-map-normal-to-proper-codimension-two`
- `lem-nonaffine-regular-local-picard-principal-localization`
- `thm-nonaffine-regular-local-ring-is-ufd`
- `lem-nonaffine-group-target-rational-indeterminacy-divisors`
- `thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends`
- `lem-nonaffine-smooth-affine-open-cartier-boundary`
- `lem-nonaffine-line-bundle-affine-space-parameter-constancy`
- `lem-nonaffine-ample-line-bundle-field-descent`
- `lem-nonaffine-smooth-connected-group-has-ample-line-bundle`
- `lem-nonaffine-ample-finite-type-projective-immersion`
- `lem-nonaffine-normal-completion-smooth-locus-antiaffine`
- `lem-nonaffine-antiaffine-factor-rigidity`
- `thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism`
- `thm-abelian-variety-is-projective`
- `lem-nonaffine-theorem-of-the-cube-for-abelian-variety`
- `lem-nonaffine-multiplication-pullback-symmetric-line-bundle`
- `thm-nonaffine-abelian-multiplication-finite-faithfully-flat`
- `lem-nonaffine-group-monomorphism-closed-immersion`
- `thm-nonaffine-rosenlicht-almost-complement`
- `lem-nonaffine-affine-group-faithful-representation`
- `lem-nonaffine-subgroup-scheme-stabilizer-of-line`
- `lem-nonaffine-high-frobenius-smooth-image`
- `lem-nonaffine-normal-subgroup-inverse-multiple-character`
- `lem-nonaffine-normal-subgroup-kernel-of-representation`
- `thm-nonaffine-affine-normal-group-quotient-affine`
- `lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties`
- `lem-nonaffine-group-image-exact-quotient-properties`
- `lem-nonaffine-affine-normal-subgroup-products`
- `thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup`
- `lem-nonaffine-pseudo-abelian-separable-field-extension`
- `lem-nonaffine-geometric-properness-field-descent`
- `lem-proper-geometrically-integral-affine-scheme-is-point`
- `lem-nonaffine-divisorial-valuation-restriction-model`
- `lem-nonaffine-rational-action-composition-domain`
- `lem-nonaffine-faithful-fixed-point-jet-representation`
- `lem-nonaffine-rational-fixed-point-affineness`
- `thm-nonaffine-rosenlicht-dichotomy`
- `lem-nonaffine-centre-is-stable-jet-kernel`
- `thm-nonaffine-pseudo-abelian-perfect-field-is-complete`

## Explicit-file mechanical checks

The final commands use exactly these five changed item paths:

```bash
node tools/tsx-run.mjs tools/precheck.mts items/thm-nonaffine-rosenlicht-almost-complement.md items/lem-nonaffine-reduced-neutral-subgroup-over-perfect-field.md items/lem-nonaffine-pseudo-abelian-separable-field-extension.md items/lem-nonaffine-geometric-properness-field-descent.md items/thm-nonaffine-pseudo-abelian-perfect-field-is-complete.md
node tools/rendercheck.mjs items/thm-nonaffine-rosenlicht-almost-complement.md items/lem-nonaffine-reduced-neutral-subgroup-over-perfect-field.md items/lem-nonaffine-pseudo-abelian-separable-field-extension.md items/lem-nonaffine-geometric-properness-field-descent.md items/thm-nonaffine-pseudo-abelian-perfect-field-is-complete.md
PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/thm-nonaffine-rosenlicht-almost-complement.md items/lem-nonaffine-reduced-neutral-subgroup-over-perfect-field.md items/lem-nonaffine-pseudo-abelian-separable-field-extension.md items/lem-nonaffine-geometric-properness-field-descent.md items/thm-nonaffine-pseudo-abelian-perfect-field-is-complete.md
```

Final successful results: precheck `5 checked, 0 failing — all clean`; rendercheck `OK — 5 file(s)`; actual-renderer layout `5 items, 12 steps, 0 defects`, all exit 0. The existing temporary shim points at the actual app renderer and correct TSX loader; neither repository configuration was changed. A first precheck caught display-math step separation, which was corrected; a global depcheck also caught malformed new wikilinks introduced during dependency-list editing, which were corrected before final checks. Global depcheck is not claimed to pass: it additionally reported unrelated existing missing group-definition IDs and malformed supplier links, which were reported to their active author. No audit, judge, source-check stamp, publication stamp, engine certification, or whole-pair readiness was invented.
