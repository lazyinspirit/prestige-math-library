# Yoneda and nilpotent-category supplier proposals

Draft proposals only, authored in this directory by `/root/math81_hall_wall/yoneda_nilpotent_chain` on 2026-10-18. No canonical item, manifest, proof contract, level, stamp, gate, readiness record, native dispatch evidence, Git index, or run state was edited. The parent retains same-owner consumer checks and integration authority.

All three original Statement sections are preserved byte for byte. No new intermediate item is needed. The nilpotent proposal adds explicit logical dependencies on zero-splice factorization and the two already existing Baer suppliers. Existing dependency levels were retained for the parent to reconcile.

The zero-splice argument uses a filling (a compatible pair of short extensions). A filling transports forward through a chain map by pushout and backward by pullback; the backward kernel is the actual finite pullback B′×_{C′}C≅B. Starting at the explicit zero representative and traversing the actual finite zigzag gives the required lift. The converse is witnessed by the explicit zigzag EF←L→Z. This closes the switch obligation using actual data, without importing a general Schanuel lemma or a resolution theorem.

The exact-sequence argument gives the Hom kernels and both initial Ext¹ kernels using actual retractions, kernels, and induced maps. It supplies the additivity maps, invokes the first proposal only at the final Ext¹ term, and dualizes the complete argument. A foundational remark distinguishes unconditional image=kernel on representatives/classes from the ordinary group sequence when extension classes are sets. This does not restrict the original arbitrary-abelian scope; every small Hall category has set-sized classes.

The nilpotent argument lifts each off-diagonal arrow coordinate through the appropriate vertexwise surjection. There are no quiver relations to obstruct that lift. The resulting middle object has the required vertex dimensions and every path of length r+s acts by zero when r and s kill its two endpoints. Its quotient recovers the given second extension, so the explicit zero-splice zigzag stays entirely inside the finite-dimensional nilpotent category. No ambient Ext² comparison is assumed. The proof also constructs a small matrix skeleton and proves all remaining Hom/Ext finiteness, k-linear extension operations, simple-object, dimension-vector K₀, and simple Ext¹ clauses.

## Actual source review

The full retained sources are copied under `sources/`, with no assertion that every page was read:

- Mitchell, *Theory of Categories*, full PDF and full extraction from `/tmp/mitchell-categories.{pdf,txt}`, originally corresponding to the canonical Edinburgh URL. Read Chapter VII §4 in full (printed pp.175–178: Lemma 4.1, both degree-one switch cases and the higher-degree induction, Theorem 4.2), and §5 in full (printed pp.178–179: connecting maps and Theorem 5.1 with its proof). Also read the immediately preceding §3 material on endpoint-fixed morphisms versus finite switches, zero representatives, and Baer operations (printed pp.171–175). The relevant extracted range is retained in `sources/mitchell-VII-3-5-reviewed.txt`. The local filling proof is an independently reconstructed degree-two argument, rather than a claim that Mitchell supplied these exact formulas.
- Schiffmann, *Lectures on Hall Algebras*, arXiv:math/0611617v2, full PDF and full extraction retained from the repository's physics-algebras-planning source cache. The extraction header explicitly identifies v2 dated 23 Oct 2009. Read §3.1 in full and the supplied pp.32–41 extract, including the definition allowing cycles and path nilpotence, Proposition 3.1 and Corollary 3.2, the stated hereditary assertion, Proposition 3.3, and the Hall application in §3.3. Schiffmann states hereditary here; the proposal supplies its own complete local proof rather than attributing a nonexistent detailed proof to that passage.
- Existing Weibel and Ringel reference entries in the respective canonical metadata were preserved. Their full texts were not newly inspected by this worker and receive no independent source-reading claim here.
- Read the actual three canonical gap items and their listed abelian-category, Yoneda-equivalence, pullback/pushout, Baer-group, Hall-category, K₀, and acyclic-quiver suppliers. The acyclic proof was context, not a substitute for the cyclic proof.

No mathematical gap remains identified by this author's focused reread. This is an authoring assessment, not an independent audit, review stamp, native acceptance, or gate permission.

## Focused mechanical checks

Final reports are `precheck.json`, `rendercheck.json`, and `proof-layout.txt`. Commands select only the three proposal `.md` files by explicit paths:

- `node tools/tsx-run.mjs tools/precheck.mts <three explicit proposal paths> --json`
- `node tools/rendercheck.mjs <three explicit proposal paths> --json`
- `node tools/proof-layout.mjs <three explicit proposal paths>`

The first precheck proposed a phase reordering; that canonical proof form was adopted and its prose step ranges corrected before the final checks. Final results: precheck 3 checked, 0 failures; render 3 checked, no errors or warnings; proof-layout 3 items, 20 steps, 0 defects. No verification field was stamped into any item.

Operational note: an initial mistaken `--help` invocation of rendercheck started its default read-only selection; it was stopped before a result and is not counted as a check. A direct `node tools/precheck.mts --help` invocation failed because this environment requires the documented `tools/tsx-run.mjs` wrapper. Neither invocation changed content or supplied any validation evidence.
