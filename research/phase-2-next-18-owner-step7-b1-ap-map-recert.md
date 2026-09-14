# Batch 1 Step-7 carrier recertification: reflexive AP implies MAP

- Run: `phase-2-next-18`
- Dispatch: `step7-preflight-e-1`
- Owning group: `e`
- Item: `thm-reflexive-approximation-property-implies-metric-approximation-property`

## Decision

The theorem and its Grothendieck nuclear--integral proof are upheld. The
reflexive-range vector-density argument, the nuclear/Pietsch/integral
identifications, AP kernel removal, tensor isometry, bipolar-density argument,
compact-set upgrade, both scalar fields, the zero space, and the stated uses of
Choice were independently checked.

I made two minimal documentary repairs within the existing citation-repair
licence. Neither changes the statement or mathematical argument:

1. `[L1]` formerly said that its supplier defined "AP and MAP", although the
   supplier's exact interface defines AP and `lambda`-BAP. It now quotes that
   interface accurately and separately declares the local convention that MAP
   means `1`-BAP.
2. The final Choice audit formerly named Gelfand representation and partitions
   of unity, neither of which occurs in this proof. It now records the actual
   supplier hypotheses and selections: scalar Radon--Nikodym,
   Banach--Alaoglu, weak compactness/subsequence selection, real and complex
   Hahn--Banach (including separation and norming), regular-measure
   representation, countably generated `L^1` separability, and the countable
   approximation and tensor-representation choices.

The second repair was synchronized to the owned manifest object and proof
contract entry. No dependency, theorem statement, proof inference, source
locator, or item identifier changed.

## Evidence read

I read the complete current theorem, its complete manifest object and proof
contract entry, and every cited supplier:

- `items/def-axiom-of-choice.md`
- `items/def-approximation-property-and-bounded-approximation-property.md`
- `items/def-reflexive-banach-space.md`
- `items/thm-hahn-banach-dominated-extension.md`
- `items/thm-complex-hahn-banach-norm-preserving-extension.md`
- `items/thm-banach-alaoglu.md`
- `items/lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals.md`
- `items/lem-positive-c-zero-functionals-have-finite-regular-representing-measures.md`
- `items/thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals.md`
- `items/thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality.md`
- `items/thm-reflexive-iff-unit-ball-weakly-compact.md`
- `items/thm-reflexivity-of-lp-for-one-less-p-less-infinity.md`
- `items/thm-eberlein-smulian.md`
- `items/thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable.md`

I also read the prior rejection, adjudication, repair, and reader-alert evidence
for this exact item in:

- `research/phase-2-next-18-judge.jsonl`
- `research/phase-2-next-18-judge-adjudications.jsonl`
- `research/phase-2-next-18-step7-alerts.json`
- `research/phase-2-next-18-step7-alert-decisions.jsonl`
- `research/phase-2-next-18-alpha-step7-e.md`

The relevant reader alert is `s8a-a0ff085012ecee3340f3035e`. Its final
existing decision correctly identified the load-bearing missing separability
interface and bound the repair from frozen guard
`40a2b00639eb7d184eacb191c85cb9a722bd219730dadb627fa7357f0d9a501e`
to guard
`7bbf1557adc937dc149789b5c91733bf555980c2c7ef51906b3210a5d64549f6`.
The current proof contains both repaired ingredients: the countably generated
`L^1` separability supplier with its Countable-Choice hypothesis, and the
explicit dense-image/closed-separable-span argument.

For the external argument I read Raymond A. Ryan, *Introduction to Tensor
Products of Banach Spaces*, at
<https://djvu.online/file/ATNjYmfESxgzE>, including:

- Theorem 3.19 and Proposition 3.20, printed pp. 63--65 (integral
  factorization and complete continuity);
- Proposition 4.12 and Theorem 4.14, printed pp. 78--81 (compact-operator
  approximation and the MAP tensor criterion);
- Theorem 5.32, printed pp. 113--114 (RNP range gives the isometric
  Pietsch-integral/nuclear identification);
- Proposition 5.36, Corollary 5.37, Propositions 5.38 and 5.40, Lemma 5.39,
  Proposition 5.43, Theorem 5.44, and Corollary 5.45, printed pp. 116--120
  (representable operators, complete continuity, the separable-range reduction,
  and reflexive spaces having RNP);
- Theorem 5.50 and Corollary 5.51, printed p. 122 (the RNP/AP criterion and
  the reflexive AP-implies-MAP conclusion).

## Mathematical review

- The weakly compact separable-range representation is justified: the
  countable norming metric induces the weak topology on the weakly compact
  image, the induced compact operator is approximated through the MAP of
  `L^infinity`, and the limiting density returns almost everywhere to the
  original range. The measurable norm-ball construction supplies strong
  measurability.
- For a general weakly compact `L^1` operator, characteristic functions are
  relatively weakly compact through `L^2`; restricting a sequence to its
  countably generated sigma-algebra invokes the exact separability supplier.
  If `D` is dense, continuity makes `T(D)` dense in the image and its closed
  linear span is the required separable range. Complete continuity then makes
  the characteristic-function image norm relatively compact, hence separable,
  and density of simple functions gives separability of the full range.
- Applying this to the integration operator of a bounded-variation vector
  measure yields the reflexive-range density. In step 1.3 the standard identity
  `|nu|(Omega)=integral ||g||` for a Bochner density (first for simple densities,
  then by `L^1` approximation) supplies the exact norm estimate used to prove
  `N=PI` isometrically. Its omission as a displayed sentence is reader-closable,
  not a false or overstrong claim.
- Hahn--Banach plus the real and complex regular-measure suppliers gives the
  integral factorization through `L^infinity -> L^1`; reflexivity moves the
  range from `X**` to `X` without changing the norm, so `PI=I`.
- AP removes the projective-tensor kernel using the stated compact null-sequence
  representation. The tensor map `Q` is then isometric, with the displayed
  trace pairing agreeing with the integral bilinear form.
- Reflexivity supplies the preadjoints needed to identify the whole tensor dual
  with operators on `X`. Equality of support functions and real-part
  Hahn--Banach separation give weak-operator density of finite-rank
  contractions; convex weak closure equals norm closure on finite tuples, so
  the resulting net converges strongly.
- A finite net in a compact set upgrades pointwise convergence of contractions
  to compact-uniform convergence. `T=0` handles the zero space. The complex
  proof consistently takes real parts in separation; the remaining arguments
  work over both real and complex scalars.

## Carrier attestation and hashes

All three owned carrier files were deliberately rewritten after the independent
review. The raw SHA-256 values are whole-file hashes; the item guard is the
repository's `itemHashGuard` form.

| Carrier | Dispatch-entry hash | Post-review hash |
| --- | --- | --- |
| `items/thm-reflexive-approximation-property-implies-metric-approximation-property.md` (raw) | `04f2ac465c41b985e5f5d85ef9391b60af44071b916625ee68fa9c71cb3fff28` | `0ad2cc93e8d01fc5f837717cec888c28e321ded5b56c9df16d029ffbc3396ed9` |
| theorem `itemHashGuard` | `7bbf1557adc937dc149789b5c91733bf555980c2c7ef51906b3210a5d64549f6` | `e88682ac84d834f8861cd44f5833a955c3e5a4a0a6e28957c46793c1ebfc19c4` |
| `research/phase-2-next-18-batch-1.pages.json` (raw) | `62c75be8d1fc56c08b08253fa06b4efd35231415f12d50ac582f56b2d7ec2740` | `23a3ef8e26dc0f388f0fd4eed81c7575f1f3e9b62ab5587f76539b28ce4ec6d7` |
| owned manifest object (`JSON.stringify`) | `289b53b2c1ace7133b94988057c09e87b1a38f6ae1b0bd6280deeb816efbf0b0` | `9aa87cf436b1a13867f688770a43ea398796da9b93e1be755e2a045ce9995094` |
| `research/phase-2-next-18-batch-1.proof-contracts.json` (raw) | `e2a7db2ff2573e220ede7f23713862b490d84d226f8fee0a9b7c2fa1a8bd371b` | `c72a3d74ecc57d4f11c77e0664068719d7a409c7eaa3fc9cbd361af186f69336` |
| owned contract entry (`JSON.stringify`) | `610bb4c738a7c456483380cd0178d9a255c15d4428f6bf89d04bd712cd79a738` | `fe167215cca2894c0448d651eeb1c9b965c958e125f2ee49facb4737fd3b9d0e` |

The theorem's post-review `itemHashJudge` is
`0ad2cc93e8d01fc5f837717cec888c28e321ded5b56c9df16d029ffbc3396ed9`.

## Validation

- Focused precheck: pass, 1 checked and 0 failing.
- Focused rendercheck: pass, 1 file clean under YAML, delimiter, wikilink, and
  KaTeX checks.
- Batch-1 strict proof contract: exit 0, 80/80 checked, 0 errors, 1 warning.
  The warning is the existing `shotgun-bracket` diagnostic for step 1.2; the
  complete manual supplier review above confirms each cited fact at its actual
  use.
- Required risk review: exit 0, 80 items routed, 0 errors; the owned theorem is
  routed `CRITICAL 17` and was fully reviewed here.
- Boundary audit with `--fail-on-contradicted --fail-on-template`: exit 0, 640
  rows, 132 `not_applicable`, no contradicted dispositions, and no template
  cluster at or above three members.
- Citation fidelity with `--fail-on-missing-quote`: exit 0, 367 citations over
  80 authored items, no missing quote and no widening candidate.
- Coverage: exit 0, 2 pages, 79 harvested results, 0 errors, 0 warnings.
- Content policy: exit 0, 80 scoped items, 0 errors, 0 warnings.
- Manifest dependencies: exit 0, 80 items, 0 normalized, 0 errors.
- `node tools/tsx-run.mjs tools/author-check.mts phase-2-next-18 1`: exit 0;
  its refreshed receipt has `ok: true` and fingerprint
  `a05ec149ab2705c33b15744477905401130ed79c481397a4ba5de7b13e0e3bca`.
- `git diff --check` restricted to the four owned files: exit 0, no output.
  Because these in-flight carriers are untracked in the present worktree, I
  additionally ran `git diff --no-index --check /dev/null` on each one; each
  produced no whitespace diagnostic (the expected status was difference-only).

## Unresolved obligation

There is no unresolved mathematical obligation in this theorem. There is one
workflow hash-binding obligation outside this dispatch's write authority: the
latest authorised fatal alert decision remains bound to post-guard
`7bbf1557adc937dc149789b5c91733bf555980c2c7ef51906b3210a5d64549f6`,
while the corrected and independently recertified carrier now has guard
`e88682ac84d834f8861cd44f5833a955c3e5a4a0a6e28957c46793c1ebfc19c4`.
This task expressly forbids changing an alert-decision or terminal-resolution
ledger and forbids running the global Step-7 guard. The owner/engine must supply
the authorised current hash binding before relying on that global gate; this
report does not claim that gate passed.
