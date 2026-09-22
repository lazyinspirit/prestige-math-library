# Owner escalation resolution 1 — raw-filtration localization

Run: `phase-2-remaining-27`
Group: `d`
Lane: `escalation-sol-1`

## Decision

Use a split convention. The finite-energy Itô integral remains available under
the repository's raw-filtration hypothesis. From the locally
square-integrable localization interface onward, require the usual conditions:
the filtration is complete and right-continuous.

The standard almost-sure coefficient class is retained:
\[
A_t=\int_0^t H_s^2\,ds<\infty
\quad\text{almost surely for every finite }t.
\]
On the single event
\[
G=\bigcap_{m\ge1}\{A_m<\infty\},
\]
the energy is finite-valued and continuous on every compact time interval. If
\(\sigma_n=\inf\{t:A_t\ge n\}\) and \(\tau_n=\sigma_n\wedge n\), then for
\(t<n\)
\[
\{\tau_n\le t\}\cap G=\{A_t\ge n\}\cap G.
\]
The symmetric difference is a subset of the null event \(G^c\). Completeness
puts every such subset in \(\mathcal F_0\), so \(\{\tau_n\le t\}\) belongs to
\(\mathcal F_t\). This is the missing stopping-time argument. The same event
also gives \(\tau_n\uparrow\infty\) and
\(A_{t\wedge\tau_n}\le n\) almost surely, which is exactly the bound needed
for the finite-energy pieces.

Right-continuity is not needed for that one symmetric-difference calculation.
It is retained because completeness and right-continuity together are the
usual-conditions convention used by the authoritative localization sources
and by the downstream stopping theory. The escalation's counterexample is
excluded at the precise failure point: its null set \(D\) would have to belong
to \(\mathcal F_0\), so it could not remain hidden from \(\mathcal F_1\).

## Rejected option

The rejected alternative was to keep the filtration raw and require the
displayed predictable representative to have pathwise-finite energy. That
would make the energy hitting times valid for that representative, but it is
not a coherent repair of the whole stack:

- it changes local square integrability from a property stable under
  \(dt\otimes P\)-almost-everywhere equality into a representative-dependent
  property, while the integral interface identifies such representatives;
- it conflicts with the owning manifest and the continuous Brownian Itô
  definition, both of which state almost-sure local energy; and
- it does not repair the downstream use of adapted versions whose continuity
  is only almost sure on a raw, noncomplete filtration. Completeness is what
  permits the common exceptional set to be normalized without destroying
  adaptedness.

Imposing the usual conditions at the localization boundary is therefore the
smaller stack-wide change. It preserves the raw finite-energy construction and
the standard coefficient class while repairing the exceptional-path
measurability that every escalated consumer inherits through
`def-locally-square-integrable-predictable-brownian-integrand`.

## Repair and witnesses

The only edited mathematical item is
`items/def-locally-square-integrable-predictable-brownian-integrand.md`.
It now states the split convention explicitly and includes the proof-bearing
witnesses:

> For this localization interface, assume in addition that
> \((\mathcal F_t)_{t\ge0}\) satisfies the usual conditions.

> \(\{\tau_n\le t\}\cap G=\{A_t\ge n\}\cap G.\)

> Thus the symmetric difference of \(\{\tau_n\le t\}\) and the
> \(\mathcal F_t\)-event \(\{A_t\ge n\}\) is a subset of \(G^c\) and belongs
> to \(\mathcal F_0\subseteq\mathcal F_t\) by completeness.

> \(A_{t\wedge\tau_n}\le n\) almost surely.

No consumer, published item, page, queue, terminal receipt, judge verdict,
stamp, closure file, task file, tool, manifest, or proof-contract carrier was
edited. No dependency changed, so this lane did not refresh the frontier
ledger; the Step-8 lead remains responsible for refreshing and reading the
unified ledger.

## Authoritative sources

- Aad van der Vaart, *Stochastic Integration and Differential Equations*:
  <https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf>.
  The standing conventions near PDF page 38 impose completeness and
  right-continuity. Definition 5.32 begins local stochastic integration from
  an actual sequence of stopping times, and Theorem 5.36 supplies the
  continuous/càdlàg local-martingale integral. This supports both the
  usual-conditions convention and the requirement that localization times be
  genuine stopping times rather than merely almost-sure candidates.
- Andreas Eberle, *Stochastic Analysis*:
  <https://wt.iam.uni-bonn.de/fileadmin/WT/Inhalt/people/Andreas_Eberle/IntroStoAn1516/IntroStochAnalysis2015.pdf>.
  The discussion of the usual conditions in Section 3.1 (PDF page 108) uses a
  completed, right-continuous filtration. Lemma 5.11 in Section 5.3 (PDF pages
  175–179) treats almost-sure local square integrability and constructs the
  energy-level stopping times on that completed filtration. This is the exact
  convention adopted at the repaired boundary.

Neither source is represented as proving the repository's raw-filtration
counterexample. The counterexample and the repaired symmetric-difference
argument are direct set-theoretic checks against the repository's definitions.

## Hashes and licence

The hashes below are `itemHashGuard` SHA-256 values, excluding the complete
`verification` block as required by the Step-7 baseline:

| Item | Pre-Step-7 SHA-256 | Repaired SHA-256 |
|---|---|---|
| `def-locally-square-integrable-predictable-brownian-integrand` | `2acad6a58761afe5a26e74210967caa48e97012ffc38edc7aa38e90836add41a` | `d1a14bf1d8f2ec162ca7f34ef3f5e2633b6f30f3ba00fd05ec0acbd551123fa6` |

The pre-hash agrees with the `2acad6a58761afe5` `pre-step7` prefix in
`research/phase-2-remaining-27-touches.json`. The owner-repair ledger contains
one `kind:"owner-prerequisite-repair"` row for this item, with
`found_via:"thm-localized-ito-integral"`, the two source URLs, and these exact
hashes. The supplier is a direct frontmatter dependency of that consumer, so
no `dependency_path` or `owner-impact-repair` row is required.

## Focused checks

- `node tools/depcheck.mjs`: exit 1 with exactly two repository-wide errors,
  neither involving this item: the unresolved aggregate wikilink in
  `items/def-fleissner-hyp-covering-interface.md`, and the pre-existing page
  cycle between
  `root-systems-dynkin-diagrams-and-cartan-killing-classification` and
  `highest-weight-theory-for-complex-semisimple-lie-algebras`.
- `node tools/prosecheck.mjs
  items/def-locally-square-integrable-predictable-brownian-integrand.md`:
  exit 0; 1 file, 0 errors, 0 warnings.
- Read-only focused contract check,
  `node tools/proof-contract.mjs
  research/phase-2-remaining-27-batch-8.proof-contracts.json --items
  def-locally-square-integrable-predictable-brownian-integrand`: exit 0;
  1/1 item checked, 0 errors, 0 warnings. This lane did not edit that shared,
  concurrently modified carrier.
- `git diff --check`: exit 2 solely because the foreign concurrent file
  `items/thm-naturality-orientation-sign-and-whitney-product-for-euler-classes.md`
  has trailing whitespace on line 36. The scoped checks on this lane's files
  are recorded after the final report check below.
- `node tools/step7-terminal-resolution.mjs queue-status --run
  phase-2-remaining-27 --queue
  research/phase-2-remaining-27-step7-fa-d-round-2.json`: exit 0. Positions
  4, 8, 9, 10, and 11 are `stale`; positions 1–3, 5–7, and 12–15 are
  `current`; positions 16–72 are `unrecorded`; `pending: 62 of 72`.
- Final `prosecheck` on the repaired item and this report: exit 0; 2 files,
  0 errors, and 1 heuristic `count-in-prose` warning in this evidence report.
  The scoped tracked-file `git diff --check` exits 0; the no-index check of
  this new report has no whitespace diagnostic.

No proof contract was changed, so no contract regeneration was performed. The
focused command above confirms only the carrier's mechanical schema. Its
pre-existing boundary/risk prose still incorrectly says that \(n=0\) is in
the canonical sequence and that this definition starts from a localizing
sequence. Those descriptions must be corrected when the root item is
re-certified; they are not used in the repaired proof.

### Concurrent position-3 evidence race

The final queue label for position 3 is not current mathematical evidence for
this repair. While this lane was resolving the owner escalation, the
position-3 lane recorded a new `disposition:"repaired"` receipt. Its basis
expressly says that the supplier “now requires finite energy at every finite
time on every path” and justifies the theorem on that premise. That describes
this lane's superseded intermediate draft, not the final supplier above, which
retains almost-sure local energy and imposes the usual conditions.

The queue-status command nevertheless reports position 3 as `current` after
the direct dependency changed. This is a live context-validation race: the
terminal receipt was completed from a dependency snapshot that became stale,
and the status command did not invalidate it. This lane has not edited the
receipt or the tool. The engine/owner must invalidate and re-adjudicate
position 3 from the current supplier before treating that position as covered.

## Certification and re-adjudication still owed

This owner lane supplies repair authority and mathematical/source evidence;
it does not certify the changed item. The existing draft item now owes exactly
one current Terra verdict. Its earlier judge evidence is historical because
the mathematical carrier changed.

After that certification, the group-d final adjudicator must re-read and
re-adjudicate these six positions. Position 3 is included notwithstanding its
mechanical `current` label because of the exact evidence race above; the other
five are mechanically `stale`:

| Position | Item | Receipt/context question that must be rechecked |
|---:|---|---|
| 3 | `thm-localized-ito-integral` | Discard the receipt's superseded pathwise-energy premise, then recheck its repaired progressive construction, \(n\ge1\) boundary, exceptional-path definition, and adapted continuous normalization under the inherited usual conditions. |
| 4 | `def-continuous-brownian-ito-process` | Recheck adaptation of the represented process, exceptional-path finiteness of the drift integral, coefficient equivalence/nonuniqueness, and propagation of the usual conditions. |
| 8 | `thm-stopping-an-ito-integral` | State that the auxiliary \(\rho_k\) are stopping times and recheck stopped-process adaptation and continuity using the repaired convention. |
| 9 | `thm-quadratic-variation-of-an-ito-integral` | Recheck the Brownian discrete-martingale indexing, the energy approximation estimate, inserted mesh-point terms, and the claimed partition scope. |
| 10 | `thm-quadratic-covariation-of-brownian-ito-processes` | Recheck the drift-bracket argument, indexing, oscillation bounds, both bilinear error terms, joint localization, and source attribution. |
| 11 | `thm-ito-formula-one-dimensional` | Recheck the smooth cutoff/extension, localized dominated-\(L^2\) passage, stopping boundary at \(X_0\), endpoint/two-limit bookkeeping, and cylinder construction. |

The supplier repair resolves the shared filtration obstruction; it does not
prejudge or erase these consumer-local findings. The queue-status command's
`RESEAL` suggestions were not executed. This report is not a judge verdict,
terminal receipt, pass stamp, or closure record.
