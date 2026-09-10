# Published Killing algebraic suppliers audit — 2026-09-11

This bounded audit follows the three published algebraic dependencies of the
active draft Killing replacement: finite primary decomposition, the finite
Chinese remainder theorem and the minimum-modulus proof of the fundamental
theorem of algebra. It covers the complete five-item route through the latter
theorem's growth and local-descent lemmas, and the exact kernel/annihilator
clauses of primary decomposition. It does not certify those items' full
transitive closure, does not review the draft Killing item as publishable, and
does not edit published mathematics.

## Deduplication and artifacts

The whole canonical ledger was searched before classification by each exact
ID and alias, the primary-kernel, finite-comaximal interpolation, global
minimum and local modulus-descent mechanisms, and the supplier IDs used by the
draft. None of these five published items had a classification row or alias,
and no matching historical defect finding was found.

Current SHA-256 values are:

- `thm-primary-decomposition-for-an-endomorphism`:
  `63828a7d303d994a15c6794ae556612a70a25e59f5a35973529b76e71b2bca2f`;
- `thm-chinese-remainder-theorem-for-comaximal-ideals`:
  `48cf8090954772b64bf5ab60c3bf08398a52f8bf08f95f982718f854f93761cc`;
- `lem-complex-polynomial-growth-and-minimum-modulus`:
  `b6a4ce6a3051e32c27db0de522a7c4b52665e99757898ae431c8232059eb17d8`;
- `lem-dalembert-minimum-modulus-descent`:
  `b6f52f10961e5c80ab0e9510b91128a27fb84146efe7586cb3c54ff76cde0648`;
- `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`:
  `d3624dbeecc8736787a869c119a5486cbcc6c15bdf3404097e56b4ba73ff2364`.

## Exact clauses

The primary-decomposition theorem factors the minimal polynomial into pairwise
coprime irreducible powers and iterates the published two-factor kernel split.
Each kernel is invariant, and replacing one factor by a proper divisor would
produce a lower-degree annihilator, contradicting minimal-polynomial
divisibility. Its explicit zero-space branch correctly gives minimal
polynomial one and the empty direct sum. Over the complex numbers, FTA turns
these primary summands into generalized eigenspaces, exactly as the draft
Killing proof requires.

The finite CRT proof is also sound for the used Hermite interpolation. For each
fixed ideal, the product of the complementary Bézout residues is one modulo
that ideal and zero modulo every other one. Their finite linear combination
hits all prescribed residue classes. The induction identifying the intersection
with the ideal product uses the same comaximality calculation. All selections
are finite; no choice axiom is used.

The FTA route is complete. The growth lemma isolates the leading term outside
a large square, proves polynomial and modulus continuity, and attains a global
minimum on that square. In the descent lemma, after the first nonzero translated
coefficient is isolated, an `m`th root chooses a unit direction with a strictly
negative leading real cross term. The displayed squared-modulus estimate holds
for every positive `t` below the fixed open bound. Such `t` are arbitrarily
small, so the resulting smaller-modulus points occur in every neighbourhood.
Adding an explicit extra bound by a named neighbourhood radius would only make
that last quantifier more visible; the arbitrary-small clause is already in
the proof. The FTA theorem then contradicts global minimality unless the
minimum value is zero.

## Disposition

All five items receive bounded no-repair-needed dispositions in the exact
clauses used by the active Killing draft. They create no live blocker and no
new Phase-2 pair. The draft definition and Killing lemma remain unpublished
and unreviewed, so these supplier clears do not close the existing A-P
published Killing-form defect.
