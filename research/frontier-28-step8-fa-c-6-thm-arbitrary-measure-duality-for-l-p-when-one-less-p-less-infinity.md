# Final-adjudicator evidence — `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and all six declared dependencies, the
real-valued `L^p` conventions, the measure-theory A/B page pair, the controlling
MT-16 design block, batch-4 manifest, coverage notes and proof contract, the
run-wide contract and critical-risk record, both frozen judge rejections and
adjudications, all three defect-ledger rows, the reader narrowing, and Alpha's
two repairs.

## Authoritative source verification

Source status: `verified`.

John K. Hunter's official UC Davis *Measure Theory* notes are available at
https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf.
Theorem 7.14 states the representation/isometric-isomorphism for every measure
space when `1<p<\infty`. The final paragraph of its proof treats a
non-sigma-finite space by assigning a density `f_A` on each sigma-finite
measurable `A`, taking the supremum of the local norms, choosing a sequence of
sets whose norms approach that supremum, taking their countable union `B`, and
using `f_B` as the global density. This directly supports the theorem's
mathematical scope and the local near-maximizing-union construction. Hunter
works in ordinary choice-based foundations; the sharper `AC_\omega`
bookkeeping below is therefore verified from the explicit local selections,
not attributed to Hunter.

## Mathematical basis

For each sigma-finite measurable `E`, zero extension is an isometric embedding
of `L^p(\mu|_E)` into `L^p(\mu)`, so restricting `\Lambda` gives a bounded
functional `\Lambda_E`. The sigma-finite theorem supplies its unique density
`g_E` with norm at most `\|\Lambda\|`.

The set of local `q`th-power norms is nonempty because `E=\varnothing` gives
the zero density, and it is bounded above by `\|\Lambda\|^q`. Countable Choice
selects one near-maximizing `E_n` for every `n`. There is a second, previously
unstated use of the same axiom: for each selected sigma-finite `E_n`, one must
choose a sequence of measurable finite-measure subsets whose union is `E_n`.
A diagonal enumeration of these doubly indexed sets witnesses that
`Z=\bigcup_nE_n` is sigma-finite. I added this choice step explicitly.

Compatibility follows by restricting the unique density on `Z` to each
`E_n`. The near-maximal inequalities give `\|g_Z\|_q^q\ge s`, while
`Z` itself belongs to the defining sigma-finite family and gives the reverse
inequality. Thus `\|g_Z\|_q^q=s`, including the zero-functional case.

Alpha's second repair correctly chooses a measurable representative of `g_Z`,
extends it by zero to all of `X`, and proves that the extension `g` lies in
global `L^q(\mu)`. For any further sigma-finite `E`, compatibility on
`Z\cup E` and maximality of `s` force the local density `g_E` to vanish almost
everywhere on `E\setminus Z` and agree with `g` on `E\cap Z`. Every
`L^p` test class has sigma-finite essential support, so this one global `g`
represents `\Lambda` on every test function. The same support lemma applied to
the difference of two candidate `L^q` densities reduces uniqueness to the
sigma-finite theorem. The strict-exponent norm proposition then gives
`\|\Lambda\|=\|g\|_q` on the arbitrary measure space.

I also synchronized the batch manifest: it omitted the newly required
`def-countable-choice` edge and the norm-formula proposition used in the final
step, and described a maximizing chain rather than the actual near-maximizing
family/union construction. Both proof-contract copies now record the second
choice use, the nonempty/zero cases, and the global zero extension in the
critical-risk review.

## Focused checks

- `precheck` on the theorem and four proof-bearing dependencies: 5 checked, 0
  failing.
- strict batch-4 proof contract: 17/17 checked, 0 errors or warnings.
- strict run-wide proof contract: 339/339 checked, 0 errors or warnings.
- batch-4 content policy: 21 scoped items, 0 errors or warnings.
- plan validation after manifest synchronization: acyclic and consistent.
- renderer math/frontmatter check on the arbitrary and sigma-finite theorems:
  clean.
- run-wide risk report: `CRITICAL 10`, complete review, 0 report errors.
- `git diff --check` on the theorem, manifest, and contract carriers: clean.
