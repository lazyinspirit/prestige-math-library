# Step 3b focused authoring — Chevalley basis supplier for the real-forms pair

Run `phase-2-remaining-27`, pair `real-forms-and-real-semisimple-lie-algebras`
(batch 13). Four items of this pair are escalated on one missing input, so this
dispatch authors that input as a new local supplier on the pair's A page. Read
`research/phase-2-remaining-27-real-forms-recovery-direction.md` first; it is
binding. Work only on the item below.

## Item to author

`lem-chevalley-basis-and-real-structure-constants` — write it to
`items/lem-chevalley-basis-and-real-structure-constants.md`.

Statement to prove (check it against the source and refine the wording if the
source states it more precisely, but do not weaken it):

- Let 𝔤 be a finite-dimensional complex semisimple Lie algebra, 𝔥 a Cartan
  subalgebra, R the root system, and fix a root-vector basis e_α ∈ 𝔤_α. Then the
  root vectors can be rescaled (e_α ↦ c_α e_α over the roots) so that
  [e_α, e_{−α}] = h_α is the coroot of α and the structure constants defined by
  [e_α, e_β] = N_{αβ} e_{α+β} satisfy N_{αβ} = −N_{−α,−β} for all roots α, β;
  with α, β, α+β roots one has N_{αβ} = ±(p+1) for the α-string through β, so
  all structure constants are integers, and the resulting real span of
  {h_α, e_α} is a real Lie algebra whose complexification is 𝔤 (a Chevalley
  basis / split real form).

Source: Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter
VI §1, Theorem 6.6 with Lemma 6.4 (printed pp. 351–353), and the root-space
machinery of Chapter II; Etingof, *Lie Groups and Lie Algebras*, Lectures 39–40
(https://math.mit.edu/~etingof/lnlg.pdf). Fetch and read the source; cite the
exact theorem/lemma numbers and printed pages in the item's frontmatter sources.

## Rules

- Use the library's existing root-space suppliers as dependencies where the
  argument needs them (for example
  `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`,
  `prop-root-space-brackets-add-their-roots`,
  `prop-brackets-of-root-spaces`,
  `prop-killing-form-pairs-only-opposite-root-spaces`,
  `cor-cartan-integers-are-integral`); the frontmatter `deps` must list every
  load-bearing prerequisite and nothing else.
- Do NOT edit the batch manifest, coverage, proof contracts, notes, the pair
  report, or any other item. The orchestrator adds the manifest row and wires
  the four escalated consumers to this item.
- The item must pass `node tools/tsx-run.mjs tools/precheck.mts
  items/lem-chevalley-basis-and-real-structure-constants.md` (adopt the canonical
  form it prints if it reports REPAIR) and `node tools/rendercheck.mjs`.
- Record `node tools/step3-decisions.mjs record-item --run phase-2-remaining-27
  --item lem-chevalley-basis-and-real-structure-constants --decision repaired
  --confidence 1 --dependencies '<json>' --reason '<evidence>'` once done.
- Write your report to
  `research/phase-2-remaining-27-real-forms-slice-6-report.md`: the exact source
  locators read, the normalization argument, the checks run, and any gap.
- Mathematical integrity: a complete proof of the normalization and the
  integrality of the structure constants, or an exact escalation naming the
  missing step. Never fabricate.
