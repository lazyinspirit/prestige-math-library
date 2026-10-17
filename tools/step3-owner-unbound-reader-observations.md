# Historical reader source observations without a full carrier

`step3-owner-unbound-reader-observations.mjs` preserves exact native in-run
reader findings whose reported current source differs from the producer at root
registration. It authorizes routing only: no edit permission, mathematical
acceptance, independent review, new execution coverage or gate exemption.
Original findings, including `observed_source.snapshot: "current"` and the
original raw item digest, remain unchanged.

The existing root registry is
`research/RUN-step3-owner-unbound-reader-observations.json`, version 1,
`registered_by: "root"`, `mathematical_acceptance: false`, with `observations`.
Each entry retains batch, one-based finding index, item ID, a concrete reason
of at least 80 characters, exact report/result/finding digests and the producer
raw digest at registration. That registration digest must differ from the
original reported source digest. Do not relabel a later current producer as
what the original reader observed.

## Two truthful evidence cases

- `original_source_unavailable: true` is the existing missing-full-source case.
  Its validation and returned binding remain unchanged:
  `{record_sha256, original_source_unavailable: true}`. Do not use it when the
  authentic complete original source is available.
- `original_source_unavailable: false` requires
  `observed_source_archive: {path, sha256}`. Its bytes must match BOTH the
  archive digest and the original native finding's `observed_source.item_sha256`.
  It must parse as the exact item's draft with explicit run identity accepted
  by the ordinary run-draft ownership matcher. A restored run's authenticated
  ownership rules apply; no source without a run marker is admitted here.
  The archive must be a regular own-run `research/RUN-...` file with no escape
  components or symlink anywhere in its repository-relative path.

The available-source branch additionally requires the actual matching reader
label, successful run/role/batch coverage, zero process and dispatch exit codes,
no timeout, an actual completion time, the actual report batch, and equality
between the **entire parsed native structured tail** and the full findings JSON.
A clipped tail, asserted successful reread, wrong archive ID/run, reconstructed
source, or convenient pre-reader digest is insufficient. There is no
batch-specific waiver.

Its returned binding is
`{record_sha256, original_source_unavailable: false, observed_source_archive}`.
The full record digest continues to bind the root registration; the explicit
archive marker authenticates only the historical raw source. A source-only
archive does not recover its historical contract or manifest, even when its
raw digest also occurs in a native pre/post snapshot. Do not copy those other
snapshot fields into the observation or claim a full observed composite carrier.

Both cases deliberately remain `observation_basis: "unbound"` with
`observed_sha256: null` under ordinary scope routing. An Alpha must retain
`historical_delta_unknown: true`, provide the concrete owner_resolution required
for unbound history, independently review the actual current producer and
consumer uses, and adjudicate the original finding through normal verdict and
closed-ledger rules. Authentic historical source bytes do not certify current
mathematics or close an already-repaired finding automatically.

## Closure evidence and receipt compatibility

Exported `closureEvidence(root, run)` validates registered observations and
returns the exact root registry, native findings reports, successful result
files and every available observed-source archive as raw evidence bindings.
The existing closure artifact scan already includes the native Markdown reader
reports. Conflicting repeated references, changed native evidence or changed
archive bytes are rejected.

New version 3 Step 3 closure receipts carry
`observation_evidence_policy: "owner-reader-observation-evidence-v1"` and freeze
these additional inputs. Verification of a marked receipt requires its exact
artifact set and bytes to remain unchanged. Creating or deleting the registry,
adding an entry, or changing its native result/archive after closure changes
the marked evidence set or a frozen digest and fails verification.

Historical version 2 and unmarked version 3 receipts retain their original
artifact-set calculation; this policy does not retroactively add evidence to
an old closure or rewrite it. A marker with any unknown value, or a marker on
a non-version 3 receipt, is rejected. Existing native checks, current-carrier
currency, owner policy sealing and the mandatory full native battery remain
unchanged. Root records genuine registry entries, installs/reseals policy and
runs the authorized native workflow; this module has no registration command.
