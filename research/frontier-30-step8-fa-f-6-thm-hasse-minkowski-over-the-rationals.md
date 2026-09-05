# Final-adjudicator evidence: `thm-hasse-minkowski-over-the-rationals`

## Disposition

`repaired`

## Mathematical basis

The Alpha's repair of the second frozen fatal defect is correct.  When the
tail form is locally anisotropic and a chosen local zero has common value
zero, the first binary summand is isotropic.  Its explicit parametrization
represents every local scalar, so choosing any nonzero tail vector and matching
the negative of its nonzero tail value produces a new local zero with a
well-defined nonzero square class.

I inspected the theorem, all eight direct dependencies, the Hilbert-symbol
A-page and paired examples page, batch-8 coverage, the batch and merged proof
contracts, the critical-risk record, both frozen judge rejections, defects
`frontier-30-S8-f-031` and `frontier-30-S8-f-047`, and the Alpha recovery
adjudication.  The dimension-two reduction, dimension-four patching, finite
bad-place argument, weak approximation, and induction on dimension are
mathematically sound after the local repairs below.

Authoritative verification:

- https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf — Sutherland's
  Theorem 11.12 is the Hasse-Minkowski theorem.  Its dimension-four argument
  patches nonzero local common values into one rational square class, uses two
  ternary auxiliary forms and the one-place principle, and its higher-rank
  argument chooses nonzero local common values before weak approximation.
- https://www.samraskin.net/forms.pdf — Raskin states the Hasse principle in
  Theorem 4.1.1, develops global Hilbert-symbol consequences in §4.8, and
  completes the higher-rank induction in §4.9 by matching a binary value to a
  tail value at finitely many places.

## Independent repairs

- Corrected the source locators from Sutherland “Theorem 11.17” to Theorem
  11.12 and from Raskin §4.7 to §§4.8–4.9.
- In dimension four, made the replacement of a zero common local value
  explicit: choose a nonzero value of the other binary form and use the
  isotropic binary form's universality to match it.
- Made the “possibly one” exceptional odd prime harmless when none is produced
  by choosing an unused placeholder prime.
- After the two auxiliary ternary forms become rationally isotropic, explicitly
  derived representations of `t` and `-t`; if the homogenizing coordinate is
  zero, the corresponding binary form is isotropic and hence represents the
  required nonzero scalar.

No direct dependency was edited, so no owner-prerequisite-repair licence is
applicable.  I regenerated the theorem's citation/derivation entries in the
batch-8 and merged proof contracts and synchronized their critical-risk
records.

Focused checks passed:

- phase-format precheck of the theorem;
- strict batch-8 and merged proof-contract checks for the theorem;
- batch-8 citation-fidelity check.
