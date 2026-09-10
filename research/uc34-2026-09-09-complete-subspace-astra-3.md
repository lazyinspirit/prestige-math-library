# Complete-subspace direction-specific choice repair

Completed 2026-09-10 Australia/Sydney; requested audit-series filename retained. One-item local repair, no judge/shared/live edits.

## thm-complete-subspace-iff-closed

Disposition: locally repaired. The complete-implies-closed direction and resulting equivalence now explicitly assume CC; closed-implies-complete remains a ZF theorem. The supplied-sequence version of complete-implies-closed also remains choice-free.

- Before SHA-256: `bd9d82c94857d7f4f6d73040ee6b31127016228ab51f9d9c7b8cdd9f0cb05c42`.
- After SHA-256: `78e7f1f02b7575403a2717cbd530fd9da4ed16a31397d2124331394f235e891e`.
- Only published change: `items/thm-complete-subspace-iff-closed.md`.
- Old judge/audited stamps replaced by explicitly scoped delegated local-repair evidence, not independent certification.

### Exact defect and proof correction

The old statement, title, short description and equivalence were unqualified, despite L2 and the final remark acknowledging that closure-to-sequence manufacturing uses countable choice. Actual step 1.1 invoked that direction without a stated CC hypothesis. Its statement also made the misleading assertion that no hypothesis was needed on X without distinguishing ambient completeness from foundational choice.

Read the entire target and `thm-metric-sequential-closure`. The latter's exact forward proof selects from the nonempty family `A∩B(x,1/(k+1))`, using CC once for fixed x, and proves convergence by the countable ball base. Its converse (a supplied convergent sequence gives adherence), and closed-to-sequentially-closed proof step 2.2, are genuinely choice-free. The repaired target's L2 now separates those interfaces rather than quoting their unqualified equivalence as a single fact.

The proof now starts with an already supplied ambient-convergent sequence in a complete subspace. It is Cauchy in the ambient metric, hence in the identical restricted metric; subspace completeness gives a subspace limit and uniqueness identifies it with the ambient limit. No choice is needed. This establishes that every complete subspace is sequentially closed and, pointwise, that it is closed if each of its adherent points is independently known to admit an approximating sequence. This does not demand a globally selected family of sequences.

Separately, a Cauchy sequence in a closed subspace of a complete ambient space has an ambient limit, which belongs to the closed subspace by the explicitly choice-free direction of the earlier sequential-closure theorem. The same metric then gives convergence inside the subspace. This direction never assumes CC.

Only the final complete-to-closed argument assumes A3=CC, applying the earlier sequence-manufacturing proof to the explicit ball-intersection family for each fixed adherent point. The pointwise choice-free result then gives membership, and the ball definition of closure makes the set closed. CC is stated in the first numbered conclusion and the equivalence, but not the second conclusion or supplied-sequence clause. The empty subspace is explicitly handled as closed and vacuously complete. No late665 implication, AC strengthening, global/class choice, or extra pair is used.

### Actual suppliers and canonical order

All eleven existing direct dependencies were retained and are published before target A118 item 6:

| Supplier | Order / item |
|---|---|
| `def-complete-metric-space` | 118 / 5 |
| `def-isometry-and-metric-embedding` | 116 / 21 |
| `thm-metric-sequential-closure` | 116 / 17 |
| `def-metric-topology` | 116 / 7 |
| `def-cauchy-in-metric` | 118 / 1 |
| `lem-metric-limits-unique` | 116 / 15 |
| `lem-metric-convergent-implies-cauchy` | 118 / 2 |
| `def-metric-convergence` | 116 / 14 |
| `def-metric-interior-closure-boundary` | 116 / 12 |
| `def-metric-space` | 116 / 1 |
| `def-countable-choice` | 18 / 9 |

Read the used definitions and full convergent-implies-Cauchy and uniqueness proofs: they use ordinary finite epsilon estimates, not countable selections. The metric convergence/Cauchy definitions explicitly permit real epsilon tests via rational density. The countable-choice definition supplies exactly the indexed set-choice contract used here; none of its Recorded consistency remarks is invoked. Closedness from inclusion of all adherent points is proved directly by complementary balls, avoiding an unqualified sequentially-closed-implies-closed shortcut.

### Authoritative full-text research

Keremedis–Wajch, *On densely complete metric spaces and extensions of uniformly continuous functions in ZF*, arXiv:1901.08709v1, 25 January 2019: [full text](https://arxiv.org/html/1901.08709v1), definitions in §1 and full Theorem 4.1 with its proof in §4 read. Their theorem identifies the arbitrary-metric complete-subspace closedness principle with countable choice; its proof treats the relevant forward direction as straightforward and supplies the converse constructions. This confirms that the unrestricted foundational distinction is substantive, not just an artifact of phrasing. No converse equivalence or choiceless countermodel is added to the library item: its proof uses the explicit earlier ball-selection argument and the elementary choice-free directions only.

### Checks and impact handoff

- Explicit-path precheck: PASS, 1 checked, 0 failing.
- Explicit-path renderer/YAML/real KaTeX: PASS.
- Exact canonical publication/order check: 11 dependencies, 0 errors.
- Scoped `git diff --check`: PASS.
- No dependency inventory change; root should reconcile title/statement/proof status as needed.

Confirmed outstanding direct consumer already fully read: `lem-complete-subspace-is-closed` invokes claim 1 unconditionally; it was explicitly outside this repair and remains untouched. The finite-dimensional corollary was separately repaired to bypass that route, so it is not reopened here.

Additional direct-consumer inventory below is **impact-review candidates only**, not a blanket defect finding. In particular, consumers using only closed-implies-complete do not acquire CC from this repair:

- `cex-cantor-intersection-needs-vanishing-diameters`
- `cex-completeness-is-not-topological`
- `cex-contraction-on-an-incomplete-space`
- `cex-strict-contraction-without-a-fixed-point`
- `cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces`
- `ex-banach-fixed-point-for-square-roots`
- `ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces`
- `fs-cauchy-implies-convergent-in-every-metric-space`
- `fs-strict-contraction-has-a-fixed-point`
- `lem-closed-subspace-of-a-banach-space-is-banach`
- `lem-complete-remetrisation`
- `lem-near-identity-c-one-maps-sandwich-cubes`
- `lem-open-subspace-complete-remetrisation`
- `prop-picard-iteration-converges-with-explicit-error-bounds`
- `rem-complete-metrizability-is-the-topological-shadow`
- `thm-arzela-ascoli-for-real-ck`
- `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`
- `thm-euclidean-inverse-function-theorem`
- `thm-function-space-is-complete-for-a-complete-target`

These nineteen additional files were not repaired or independently cleared in this bounded task. Parent owns queue/ledger reconciliation. No statement about all their transitive consumers or whole-library closure is made.
