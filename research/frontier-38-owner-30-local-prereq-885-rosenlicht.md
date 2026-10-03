# A885 Rosenlicht support packet — frontier-38-owner-30

**Four local drafts authored; the requested five-item packet is not ready.** The general stable-boundary item `lem-nonaffine-rational-action-stable-boundary-divisor` is unauthored. Its full arbitrary-variety claim requires a local proof of Nagata compactification, which is absent. No claim was replaced with a weaker statement under that ID. The full group dichotomy is independently proved: the already authored A885 ample/projective immersion gives a completion of a group without Nagata, and its proof supplies the entire boundary construction inline.

Only the four new item files, this note, and the companion exact dependency map were written. Shared manifest, plan, page, task, configuration and autopilot state files were untouched. The active A885 author independently wrote the fixed-jet/closed-immersion files; their stability and precise rational-action scope were confirmed directly before final checks. No ready decision, mathematical audit, judge stamp, or publication was recorded. Four additional A885 items preserve the page's 100-item cap.

## Actual source retrieval and reading

Retrieved the complete author-hosted PDF during this helper turn with:

`curl -L --fail https://www-fourier.univ-grenoble-alpes.fr/~mbrion/chennai.pdf -o /tmp/ag885-rosenlicht-chennai.pdf`

Actual SHA256: `367319f7b220fd8a4384657fbbed52bd1d757937de34f6377610970df992fb38`.

Python 3/PyMuPDF extracted the full text to `/tmp/ag885-rosenlicht-chennai.txt`; `pdftotext` was unavailable. Read the complete §2.3, printed pp.27–33, including the requested pp.27–32 and the alternative-proof remark/concluding Chevalley proof on p.33. The precise source routes are:

| Draft | Printed locator | PDF page locator | Actual proof reconstruction |
|---|---|---|---|
| `lem-nonaffine-rational-action-composition-domain` | Lemma 2.3.3, p.29 | PDF p.35 | Graph closure over the simultaneous composition domain, followed by an explicit multiplication section to extend the original total rational action at `(gh,x)`. Includes the affine specialization proof that products over an algebraically closed field are integral. |
| `lem-nonaffine-divisorial-valuation-restriction-model` | Lemma 2.3.5, pp.30–31 | PDF pp.36–37 | Normalize a polynomial relation by its coefficient of minimum valuation to prove the residue transcendence inequality; a positive-value element gives the upper bound. A projective graph and finite normalization realize the restricted valuation as a prime divisor. |
| `lem-nonaffine-rational-fixed-point-affineness` | Proposition 2.3.2, pp.28–29 | PDF pp.34–35 | Every group point factors as a product of two points in a symmetric dense fixed open. Composition makes the total action regular along the entire fixed fibre, with constant scheme restriction because the group is smooth/reduced. Apply the exact stable local jet supplier. Includes disconnected groups and explicitly retains scheme faithfulness. |
| `thm-nonaffine-rosenlicht-dichotomy` | Lemma 2.3.6, p.32; group application of Proposition 2.3.4, pp.29–30 | PDF pp.35–36 and 38 | Proves the entire group-case boundary and generated-stabilizer route, as detailed below. Proper groups are abelian varieties; nonproper groups have a positive-dimensional smooth connected affine subgroup. |

No second-source or independent-audit claim is made for this support packet. The Conrad/Milne reading evidence belongs to the active A885 author's earlier note; it was not relabelled as fresh source reading by this helper.

## Exact dependency and order map

The machine-readable complete recursive map is `research/frontier-38-owner-30-local-prereq-885-rosenlicht-dependencies.json`. It records every direct `deps` edge, a dependency-first order, current raw SHA256 hashes, status, roots, missing IDs, and cycles. This is an on-disk snapshot, not a gate or an audit. It includes 1,885 reachable items, with **no missing IDs and no cycles**. All reachable unpublished suppliers belong to this A885 packet; no unbuilt A873/A877 supplier is imported. `justified_by` links are not prerequisite edges and are not traversed as such.

The exact unpublished subsequence of that dependency-first order is:

1. `def-abelian-variety-over-a-field`
2. `lem-nonaffine-rational-action-composition-domain`
3. `lem-nonaffine-rational-map-normal-to-proper-codimension-two`
4. `lem-nonaffine-divisorial-valuation-restriction-model`
5. `lem-nonaffine-global-sections-flat-field-base-change`
6. `lem-nonaffine-group-monomorphism-closed-immersion`
7. `lem-nonaffine-faithful-fixed-point-jet-representation`
8. `lem-nonaffine-rational-fixed-point-affineness`
9. `lem-proper-geometrically-integral-affine-scheme-is-point`
10. `lem-nonaffine-rigidity-proper-geometrically-integral-factor`
11. `prop-abelian-variety-commutativity-from-rigidity`
12. `lem-nonaffine-regular-local-picard-principal-localization`
13. `thm-nonaffine-regular-local-ring-is-ufd`
14. `lem-nonaffine-smooth-affine-open-cartier-boundary`
15. `lem-nonaffine-line-bundle-affine-space-parameter-constancy`
16. `lem-nonaffine-ample-line-bundle-field-descent`
17. `lem-nonaffine-smooth-connected-group-has-ample-line-bundle`
18. `lem-nonaffine-ample-finite-type-projective-immersion`
19. `lem-nonaffine-normal-completion-smooth-locus-antiaffine`
20. `thm-nonaffine-rosenlicht-dichotomy`

The companion JSON records the full published prerequisite closure and all exact direct edges, so this condensed local sequence is not substituted for the recursive map. The centre-jet ID is not imported: the dichotomy does not use a centre quotient. No group quotient supplier is needed by the generated-subgroup argument.

## Full group-case boundary and stabilizer proof

The dichotomy's steps 1–4 construct a proper normal completion from the existing projective-immersion packet; blow up its nonempty boundary ideal using explicit Rees-algebra charts; normalize; and choose a boundary divisor. The action is rational on this model, with no assumed equivariant completion. The generic local ring of the product with a boundary divisor is shown directly to be a DVR; this avoids an unproved normal-product import. Its action image cannot dominate the completion, because inverse translation and the composition lemma would put the boundary point back in the open group.

Normalize the product and apply the valuation/model lemma to make this image a divisor on a normal modification. The strict transform of the original divisor remains birational to it because the graph coordinates extend over its DVR. Composition proves that the new image divisor is stable. Its generic action/inverse induces a rational action; extending the dense partial group law uses an explicit common comparison point in finitely many dense opens, so independence of the extension is proved.

Steps 5–7 choose a boundary point with a dense open of group points for which action and inverse action are both defined. An orbit fibre has positive-dimensional components. A component through a chosen group point produces a positive-dimensional locally closed `S` containing the identity, with both `S` and its inverse fixing the boundary point. The closures of `(SS^{-1})^n` stabilize by dimension. The stable irreducible closure is a closed reduced subgroup; constructibility gives an open subset of finite words, and intersection of two translated opens shows that **every** closed point of that subgroup is actually a finite word. This proves closedness of the generated subgroup rather than asserting it. A regular point and translation make it smooth. Composition gives a regular fixed fibre, and birational left translation makes its action scheme faithful; the local finite-jet supplier makes it affine.

The modification need not retain the entire group as an open. The proof uses the birational identification with the group for faithfulness, and schematic density extends the regular left-translation identity before evaluating at the group identity. This avoids silently assuming that the graph modification is an isomorphism over all of the original group.

## Precise remaining obstruction

The unauthored fifth ID must retain the following full source claim: for any noncomplete integral variety `X0` with a regular action of a connected algebraic group, there is an equivariantly birational complete normal variety with a rational action and an invariant prime divisor. Chennai Proposition 2.3.4 first embeds **all of X0** as an open in a complete variety by Nagata's theorem. The repository has no proved local supplier for that embedding. A projective closure of an affine open gives only a birational model and does not preserve the entire action variety or guarantee the required boundary; replacing arbitrary `X0` by a quasiprojective variety would narrow the promised lemma. Neither replacement was made.

The group theorem bypasses that general import legitimately because the local A885 ample-sheaf construction already gives a projective immersion for every smooth connected group over the algebraically closed field. Its exact dichotomy statement is therefore retained and proved. The five-ID assignment nonetheless remains incomplete until the full general stable-boundary claim has its missing compactification proof or the owner explicitly changes that support item's scope. No general Nagata theorem is assumed, recorded as proved, or substituted by a citation.

## Final explicit-file checks

After the final mathematical edit, these checks completed with exit code 0 on the four authored paths:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-nonaffine-rational-action-composition-domain.md items/lem-nonaffine-divisorial-valuation-restriction-model.md items/lem-nonaffine-rational-fixed-point-affineness.md items/thm-nonaffine-rosenlicht-dichotomy.md` — `4 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs` with those same four explicit paths — `OK — 4 file(s)`; real KaTeX and renderer YAML parser used.
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs` with those same four explicit paths — `proof-layout: 4 items, 15 steps, 0 defects`.

The existing temporary app shim selects the actual app renderer and the correct TSX loader; no repository configuration was changed. These checks establish format/rendering only. They are not independent mathematical acceptance, a build transition, or readiness of the five-item packet.
