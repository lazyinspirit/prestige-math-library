# Step 3a reader report — batch 8

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `8`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-mf02.md`
- `library/fluid-dynamics-mathematics/fd-mf02-examples.md`

Assigned items:

- `items/def-fd-conservative-weak-form.md`
- `items/lem-fd-cauchy-contact.md`
- `items/lem-fd-local-balance-equivalence.md`
- `items/lem-fd-weak-jump-consistency.md`
- `items/ex-fdmath-vacuum-momentum-degeneracy.md`

The task instructions, `briefs/reader.md`, batch-8 manifest, batch-8 proof
contracts, batch-8 cross-batch dependency record, and `research/math-imports.json`
were consulted. Dependency statements needed for the assigned arguments were
opened, including `def-fd-smooth-motion`, `lem-fd-transport-and-density`
(batch 2), `def-countable-choice`,
`def-bounded-c-one-domain-boundary-charts-and-outward-normal`,
`def-surface-integral-on-a-compact-c-one-hypersurface`,
`lem-surface-integral-is-independent-of-c-one-boundary-charts`, and
`thm-divergence-theorem-for-bounded-c-one-euclidean-domains`. The exact supplier
statements used by the transport and surface-measure arguments were also checked:
the Euclidean inverse function theorem, chain rule, determinant polynomial,
Jordan change of variables and image/integrability results, Jordan integral
definition and rectangle independence, multidimensional integral properties,
mean-value inequality, zero-derivative constancy, Gram determinant criterion,
determinant identities, Borel change of variables, and monotone convergence.

The cited passages were checked at their stated locators: Silvestre,
[*Partial Differential Equations: Lecture Notes*](https://www.math.uchicago.edu/~luis/pdenotes.pdf),
Chapter 6 §6.2.2, Definition 6.2.1; Guermond,
[*Introduction to Partial Differential Equations for Engineering Applications*](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf),
Definitions 24.3 and 26.2 and Theorem 24.4; Lopez-Pamies,
[*Mechanics of Solids*](https://pamies.cee.illinois.edu/assets/pdf/Mechanics_of_Solids.pdf),
§§3.3.1–3.3.4; and Oden,
[*A Short Course on Nonlinear Continuum Mechanics*](https://users.ices.utexas.edu/~arbogast/cam397/oden0908.pdf),
Chapter 4 §4.1. No source-fidelity defect was confirmed.

## Review and findings

### `def-fd-conservative-weak-form`

The locally integrable distributional formulation and initial-data term are
consistent, including the sign in the weak inequality. No defect found. Its
statement is uninterrupted by links.

### `lem-fd-cauchy-contact`

The shrinking rounded pillbox and tetrahedron arguments establish opposite
traction oddness and linearity in the normal under the stated local balance,
continuity, and boundedness assumptions. The area projection relation and
zero-normal-coordinate limit are valid. The TikZ tetrahedron is a schematic
four-vertex diagram matching the stated face roles; the proof does not rely on
it. No diagram repair or mathematical defect found.

### `lem-fd-local-balance-equivalence`

The transport, localization, angular-momentum symmetry, kinetic-energy, and
total/internal-energy algebra check under the stated regularity and balance
hypotheses. The Statement expressly assumes the Cauchy contact result supplies
`tau = sigma nu` and separately assumes the resulting stress field is C1; I
treated these as hypotheses rather than deductions, so no missing local-balance
step is charged to Proof 1.1.

Proof 2.1 also separates its displayed equation from the surrounding numbered
step with blank paragraphs, contrary to the required one-paragraph-per-step
layout.

### `lem-fd-weak-jump-consistency`

The integration-by-parts calculation and normal-speed jump factors are sound
once the graph patch is correctly specified. The Statement is currently
ill-formed: it places `O` in `Omega × (0,T)` but writes graph points as
`(t,x',x_3)`, so the product-coordinate order is inconsistent. Also, `h` is
defined only on `J × D`, but `O` is not required to lie in the corresponding
graph-coordinate cylinder; the displayed definitions of `O^-` and `O^+` can
therefore evaluate `h(t,x')` outside its domain. The empty-graph contract note
does not resolve either issue. State a consistent space-time coordinate order
and restrict `O` to the region where `h` is defined (or explicitly extend the
graph data).

Proof 1.1 separates its residual formula into a display paragraph between the
numbered prose, contrary to the required one-paragraph-per-step layout.

### `ex-fdmath-vacuum-momentum-degeneracy`

The pointwise algebra at zero and positive density is correct. The Example fixes
a single point and defines `M` as a vector at that point, but then says that
“This vector may be used as the conserved field `U`.” The supplier defines `U`
as a locally integrable map on a space-time domain, so a point value does not
have the required field type. The sentence should refer to a field having this
pointwise momentum value and separately require the field's local integrability.

## Page verdicts

- `fd-mf02`: **Pass as a page carrier.** Frontmatter identity, title, draft
  status, mathematics classification, prerequisites, inventory, and
  `page_layout: compact-v1` agree with the batch manifest. The body is empty.
  The item-level findings above do not identify a page-carrier defect.
- `fd-mf02-examples`: **Pass as a page carrier.** Frontmatter identity, title,
  draft status, mathematics classification, prerequisite, example inventory,
  and `page_layout: compact-v1` agree with the batch manifest. The body is
  empty. The assigned example has the item-level type issue recorded above.

## Edits and blockers

No item or page source was edited because this is a read-only reader assignment.
This reader task created only this report. No formatting, precheck, or proof-layout
commands were run because there were no source edits. No blocker remains.

## Coverage note

All assigned page and item carriers, their relevant direct supplier statements,
the proof contracts, diagram, and cited source locators were reviewed. This was
not a wholesale audit of every transitive imported mathematical proof. The batch
contains mathematical formulations and conditional identities, not reported
experiments or statistical empirical claims.
