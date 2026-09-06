# frontier-31a — Alpha group `e` — Step 3 scaffold review

Group `e` covers batches `2`, `5`, and `6`: four A/B pairs. I read each
manifest, coverage file, available batch notes, controlling design section,
and current `research/plan-spec.json`. The current plan is still unspliced for
these pages (`items: []` on the four A-page records); the manifest contracts,
their declared route closures, and the named source harvests are therefore the
authoring scaffold under review. Batch 5's notes are correctly named
`frontier-31a-beta-5.notes.md` rather than `batch-5.notes.md`.

| Batch | A page | B page | A/B items | Verdict |
| ---: | --- | --- | ---: | --- |
| 2 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` | 30 / 6 | **sufficient** |
| 5 | `absolute-convergence-and-the-wiener-algebra` | `absolute-convergence-and-the-wiener-algebra-examples` | 10 / 5 | **insufficient** |
| 6 | `primitive-dirichlet-l-functions-and-functional-equations` | `primitive-dirichlet-l-functions-and-functional-equations-examples` | 16 / 7 | **sufficient** |
| 6 | `number-fields-rings-of-integers-and-discriminants` | `number-fields-rings-of-integers-and-discriminants-examples` | 20 / 7 | **sufficient** |

All A pages are below the 60-item split ceiling. The structured receipt is
`research/frontier-31a-alpha-e-step3-verdicts.json`; its one insufficient row
names each missing result and its source.

## Batch 2 — absolute continuity and the sharp FTC

The A/B pair at orders `288.037`/`288.038` implements MT-19 in
`research/plan-measure-theory-track.md:3475-3650`. The manifest retains the
specification's two declared predecessors,
`differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples`
and `the-gauge-integral-and-cousins-lemma`; its external item dependencies
close through that route (19 external dependency carriers, all in the declared
closure). The wider MT-19 design list is a documented design/spec difference,
but does not create an unclosed authoring premise: the manifest names its
actual direct carriers and does not add a page edge or alter reading order.

The scaffold keeps the material qualifications intact: real-valued functions
on compact intervals; property (N) for **images** of null sets; the sharp FTC
as an iff; an increasing-AC substitution theorem distinct from the conditional
nonmonotone statement; and the separate `Lip ∘ AC`, monotone `AC ∘ Lip`, and
general-composition-failure claims. The notes' correction of the false
everywhere-differentiable/bounded-derivative design claim is sound. B items are
leaves or worked applications, never A prerequisites.

Source support is sufficient: Cohn, *Measure Theory*, §6.3 and Appendix H
(PDF pp. 190-196, 453-455); Heil, *Absolute Continuity and the
Banach--Zaretsky Theorem*, §§3.1-3.6 (PDF pp. 10-24); and Srivastava, *MA550
Measure Theory Lecture Notes*, §§4.11-4.16 (PDF pp. 94-105), recorded in
`frontier-31a-batch-2.notes.md`. The notes correctly limit Srivastava's printed
substitution corollary to its C1 hypothesis; the stronger increasing-AC route
uses the scaffold's sharp-FTC/property-(N) chain instead. This pair is
**sufficient**.

## Batch 5 — absolute convergence and the Wiener algebra

FR-3 (`research/plan-fourier-analysis-track.md:297-345`) has a coherent local
10-item spine: define A(T), synthesize the continuous representative, prove
the algebra property, derive weighted ell-2 to ell-1, establish the dyadic
Holder estimate, and obtain the strict alpha > 1/2 Bernstein conclusion.
The conventions in `frontier-31a-beta-5.notes.md` fix T = R/Z, normalized Haar
measure, the period-one characters, the coefficient norm, and the strict
Holder endpoint. Its three harvests are adequate for those local claims:
Laugesen, Chapter 4 (through Theorem 4.3); Grafakos, §3.3 (through Exercise
3.3.8); and Taylor, §1 (through Exercise 14).

The page as a whole is nevertheless **insufficient** because three stated
interfaces have no materialized target in the current plan or `items/` tree.

1. `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`
   invokes a later `def-weak-derivative-of-a-locally-integrable-function`.
   PDE-11 is later (order `458.019`), but currently has `items: []`. More
   importantly, the corollary needs the exact periodic weak-derivative
   coefficient identity, not merely a definition on an open Euclidean domain.
   Kinnunen Chapter 1 §1.1 supplies the definition; Grafakos Exercise 3.3.5
   is only the classical derivative result. The exact torus interface/identity
   identified in the verdict must be materialized before authoring.
2. `rem-wiener-lemma-interface-for-the-circle-algebra` cites
   `thm-wiener-lemma-for-absolutely-convergent-fourier-series`, owned by FA-18
   at order `288.081`, whereas FR-3 is at `288.1401`. FA-18 currently has
   `items: []`. Since it is earlier, this cannot be a `forward_refs` target;
   after FA-18 materializes the theorem, the FR-3 interface must be a backward
   dependency/citation. Mueger §19.2 and Laugesen Theorem 4.3 are the exact
   sources.
3. `cor-holomorphic-functional-calculus-in-the-wiener-algebra` similarly
   cites the FA-17 theorem
   `thm-holomorphic-functional-calculus-homomorphism`. FA-17 is earlier at
   order `288.079` and has `items: []`, so this also is not a valid forward
   reference. Bühler--Salamon §5.2.4 supplies the exact theorem.

These are owner-level cross-page materialization and classification decisions;
I did not create a page, add a forward edge, reorder pages, or modify foreign
FA/PDE artifacts. The plan's FR-3 design expressly reserves the Wiener id to
FA-18, so duplicating it locally would also violate the content contract.

## Batch 6 — primitive Dirichlet L functions

NT-14 (`research/plan-number-theory-track.md:1286-1412`) and the manifest
agree on the pair at orders `348.011`/`348.012` and its declared predecessor.
All six external dependency carriers resolve in that route. The source-backed
sequence preserves its crucial conventions: `e(x)=exp(2 pi i x)`, the stated
Fourier normalization, parity `chi(-1)=(-1)^a`, the completed-function
normalization, and the q=1 zeta exception. It separates primitive induction,
the nonunit Gauss-sum twist and norm, the even/odd theta continuations, the
root number, and the qualified trivial-zero conclusion. B examples depend
only on the A spine.

Andersen, *Analytic Number Theory*, Chapter 16 (PDF pp. 60-67), and Kedlaya,
*A Course in Analytic Number Theory*, Chapter 6 §§6.1-6.2, are fetch-verified
in the batch coverage and support the claimed chain. The notes document that
the raw plan lacks two functional-analysis Fourier/Poisson item records, but
the declared predecessor closure supplies the fixed-normalization interfaces
and the batch materializes the local bridge lemmas rather than creating a
page-order change. This pair is **sufficient**.

## Batch 6 — number fields, rings of integers, and discriminants

NT-19 (`research/plan-number-theory-track.md:1651-1718`) and the manifest
agree on the pair at orders `365.911`/`365.912`; all 12 external dependency
carriers resolve through its declared route. The A contract correctly separates
number field, integral closure, order, ordered integral basis, and optional
power basis; uses all embeddings in the discriminant determinant; and keeps
the quadratic hypotheses squarefree with d != 1. Its order/index,
embedding-determinant, and quadratic-integer routes precede the examples.

Milne, *Algebraic Number Theory*, Chapter 2 (PDF pp. 25-36), and Stein,
*Algebraic Number Theory*, §§2.3-2.4 and 6.1-6.2 (PDF pp. 25-34 and 68-72),
support the scaffold. The B-page's nonmonogenic-field entry is explicitly a
source obligation, not an asserted example: no complete proof for a named
example was fetched. It is therefore properly limited to
`rem-nonmonogenic-number-field-source-obligation` and resolved as an
`owner-decision`, rather than being treated as an unsourced mathematical
claim. This pair is **sufficient**.

## Scope decisions and checks

I ran `node tools/scope-decisions.mjs refresh --run frontier-31a --group e`,
reviewed all 46 current decline rows, and resolved them in
`research/frontier-31a-alpha-e-scope-decisions.json`: 10 batch-2 rows, 26
batch-5 rows, and 10 batch-6 rows. Forty-five are `stands`; the sole
`owner-decision` is the deliberately unasserted nonmonogenic B-page source
obligation. `node tools/scope-decisions.mjs check --run frontier-31a --group e`
reports `46` current declines and `0` errors.

Focused checks on the reviewed artifacts passed:

- `manifest-deps`: batches 2/5/6 report 36/15/50 items and 0 errors.
- `content-policy --manifest-only`: batches 2/5/6 report 36/15/50 scoped
  items and 0 errors or warnings.
- `coverage-checklist`: batch 2 reports 71 harvested results and batch 5 59,
  each with 0 errors and one `coverage-low-yield` advisory; batch 6 reports
  102 harvested results with 0 errors or warnings. The reviewed decline
  register accounts for those two advisories.
- `source-fetch-check --coverage`: batches 2/5/6 report 3/3, 3/3, and 4/4
  fetch-verified source records.

Next action: route the three exact batch-5 interfaces to their FA/PDE owners,
then re-review the repaired, materialized target records. No scaffold claim,
new page, page edge, reading order, published content, judge artifact, or
foreign owner artifact was changed in this dispatch.
