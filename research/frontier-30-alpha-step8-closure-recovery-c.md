# Frontier-30 Step-8 closure recovery — group c

Handled all nine current unadjudicated rejection tuples owned by group c. The
outcomes are five `confirmed_fatal`, four `confirmed_nonfatal`, and zero
`false_positive`. Only the five fatal items were edited. Each fatal has one
matching `frontier-30-A8R1-c-*` defect-ledger row and is a targeted rejudge
item.

All six assigned pages, all 77 owned items, and every dependency touched by a
rejection were opened. The decisive dependency checks were the library's
published Cantor construction/digit/function interfaces, compact-interval jump
definition and decomposition, countable-null interface, period-one Fourier
normalization, fine-cover definition, and open-subset structure theorem. No web
lookup was needed: the new objections turn on elementary indexing, domain,
periodicity, countability, and interval-component checks against those exact
on-disk interfaces.

## Exact adjudications

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | basis / repair |
|---|---|---|---|---|
| `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series` | `05eeb67ca0e9218e1045f9be5f19453fb10859a14fcf33ec5155253811c6bca3` | `0d7637792d910933e175ee36b82187f3c90d658184b9b3738e3f3e57670eb332` | `confirmed_nonfatal` | The displayed sum already fixes the intended positive-integer indexing; reindexing the countable interval enumeration by `n >= 1` is an immediate local bridge. The item was not edited. |
| `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one` | `ed150f42275802c9848d38d52451d53364dc07647962ea6b33d2e29a2dd4b028` | `a5e4c4ccd6e434b09b8647d3987290a2edd96517e7a3e21355a783c9b6d6891a` | `confirmed_nonfatal` | Claim 1 of the already cited Cantor-function-properties dependency says `c=gamma` on the Cantor set, and the displayed ternary endpoints then give the binary increment in one line. The attribution is compressed but the claim and secant argument are correct. The item was not edited. |
| `ex-jump-and-continuous-parts-of-x-plus-rational-jumps` | `2cf2b1c443e0a7d4c0be3a905d74188daccb138d9e7c754d7276ea344e8dd2c4` | `2978158d5e95403b767144ee565841b42b5dd29157574096c09162d8f9976ebf` | `confirmed_fatal` (`other`) | Repaired: `F` is now explicitly a function on `[0,1]`, the Given block carries the type, and the decomposition check includes the left jump at the endpoint `1`. Post-repair guard SHA-256: `0504e4ed2d8c3c9d266da1e1c70f05e5ea1fdf6e11d7967cc523f14627a5005b`. |
| `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere` | `49c539d7b291a469d9bf0baea97f069e7782086c63cf19b817f9290a4d6018b5` | `f566dd90725db782529db39cbff5fff394cda8d7857f454a4f5e30ab88cad5e3` | `confirmed_nonfatal` | The finite-head/small-tail argument of step 2.1 applies at `0` after choosing a right neighborhood below the positive minimum of the finite head's `q_n`; this immediately proves `J(x) -> J(0)=0`. The item was not edited. |
| `fs-bounded-variation-implies-absolute-continuity` | `bed3f72de4f69a9df13f9511d82b88f8a65e1835263c18c1f13403ee84d3f910` | `551bb223e783ce3758b02a0a86d997819c167e67ca5ed0af6981d8ae674e8015` | `confirmed_fatal` (`dependency_citation`) | Repaired: the proof now derives the stage interval lengths and the `2^-n` Cantor-function increments from the exact construction, ternary-digit, and binary-value interfaces. Post-repair guard SHA-256: `1781901b28cc9366a93652b4067aea7ea37dc8d234498ced9174065afc0066ff`. |
| `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` | `27a43eb7d2d3f8ffb6978abf5b3a5cf3908822e8f14807453aab24319f8acaa0` | `1b7dbdcea622c1d48cd3fcc71614750f4fc83b28d8582c7188287f5154c97280` | `confirmed_fatal` (`logic`) | Repaired: the midpoint reset is made on the full congruence class `x_0+Z`, which preserves one-periodicity, and that countable exceptional set is explicitly shown Lebesgue null before almost-everywhere equality is invoked. Post-repair guard SHA-256: `4492188dfc80c6c8745b1711f0c70fb6d5af98a84182ce0a7fcbaf6f663d2a11`. |
| `thm-increasing-functions-split-uniquely-as-jump-plus-continuous` | `f6794280a4849743ac63ea342df1dbdd3d68bb7509c9a359f0e42d673f25ee92` | `895b1bca12f6681e5b093354b25f2de7598ae9e5386b7d14671207ad4b1b020e` | `confirmed_fatal` (`logic`) | Repaired: claim 2 and step 3.1 now require an enumeration without repetitions, so every discontinuity's jump contributes exactly once. Post-repair guard SHA-256: `5003413503a1dfcd0df423f8a363eccd108e028a9103d3b94ecabad2800dd71b`. |
| `thm-mini-vitali-fine-cover-characterisation-of-null-sets` | `1f36b6ae7ccc68e69cdc1896df3027adb6674761e858e43037dd7d86b42b4178` | `3fae8dd9e12ee024fa181fae3aa23e1e2ee6dc08e66bc6c8a606183a71ba00c3` | `confirmed_nonfatal` | Replacing “all closed intervals” locally by all bounded nondegenerate closed intervals gives an admissible fine cover immediately and leaves the converse proof unchanged. The item was not edited. |
| `thm-riesz-rising-sun-lemma` | `8662d011535a8b3e40807cc6186afffcbc540c5ffdde3939be8535f0bcb487ab` | `958b28f50a7194d27cd9cc4e28909768b4034fed43d244c4d802ab4905c37e05` | `confirmed_fatal` (`logic`) | Repaired: the statement and proof now include an open component `(a,d)` when `a` is not in `E`, while retaining `[a,d)` when `a` is in `E`. Post-repair guard SHA-256: `cbe4cc4d9f0d083a5237e27220ca392083422dc0f9f9cd6b824a1a91118114be`. |

## Licensed repairs and rejudge targets

The engine should rejudge exactly these five changed items:

- `ex-jump-and-continuous-parts-of-x-plus-rational-jumps`
- `fs-bounded-variation-implies-absolute-continuity`
- `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`
- `thm-increasing-functions-split-uniquely-as-jump-plus-continuous`
- `thm-riesz-rising-sun-lemma`

The other four exact rejection targets retained their pre-adjudication guard
hashes. No published item, page, contract, impact record, judge verdict, or
stamp was changed.

## Cross-group alerts and blockers

No cross-group mathematical defect was found, so no cross-group alert was
written. There is no group-c blocker.

At check time, the whole-run defect/adjudication join still reported 17 missing
defect rows belonging to groups d and f; none names a group-c item. This is
concurrent out-of-group closure residue, not authority for this dispatch to
write those rows.

## Checks

- Focused precheck: all five repaired proof-bearing items passed.
- Focused rendercheck: all five repaired items passed frontmatter, wikilink,
  delimiter, math, and KaTeX checks.
- Focused prosecheck: all five repaired items passed with 0 errors and 0
  warnings.
- Group-c content policy: 77 scoped items, 0 errors, 0 warnings.
- Exact local edit audit: all five fatal items changed and all four nonfatal
  items remained unchanged.
- Repository depcheck: completed with no errors; it retained 433 existing
  warnings elsewhere in the corpus.
- `node tools/step8-scope.mjs check --run frontier-30`: passed with 7 groups,
  694 partitioned items, 17 then-open routed rejections, and 0 cross-group
  alerts dispositioned.
- Step-8 guard: 176 of 176 changes since `pre-step8` were licensed; 0 creations
  and 0 deletions.
- Defect-ledger validation: 511 frontier-30 rows checked, 0 schema errors.
