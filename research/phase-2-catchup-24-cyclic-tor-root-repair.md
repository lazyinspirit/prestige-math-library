# Cyclic Tor: local supplier repair

Root,2026-09-10 Sydney. Target
`thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`.

Read the complete target, balanced Tor definition, right-resolution definition,
projective resolution and module definitions, tensor universal-property proof,
both comparison-map/homotopy theorems, covariance proposition, balance theorem,
coherence proposition, AC/DC definitions and natural-number recursion proof.
Primary source: Weibel Calculation3.1.1, printed66, chapter3 PDF:
https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf.
Its elementary calculation is not treated as a choice-free comparison theorem.

Repair retains the two-term resolution calculation without choice, proves
rank-one projectivity by one lift, spells out the inverse unit tensor maps,
computes the kernel including n=1, and proves naturality directly. For the
balanced comparison clause AC is stated and used to select successors on a
set; earlier thm-recursion then proves the DC needed by the existing comparison
and coherence suppliers. No later AC-implies-DC result or assertion that DC
provides projective resolutions is used. The right cyclic resolution is given
explicitly; comparison with a left resolution takes that resolution as data.

Canonical/live contracts and HA prose are synchronized; scope retains all24
pairs/735items. The four known downstream cyclic-Tor examples/theorem remain
open until their individual choice/data propagation repairs. Other textual
consumers must be inspected; this repair does not automatically certify them.
All direct suppliers are already published; no Phase2 pair is added.

Precheck initially requested a topological reordering of the independent
AC-to-DC step. Adopted that canonical ordering and corrected references;
precheck and actual KaTeX/YAML rendercheck then passed. Old audit/judge stamps
were replaced by an honest locally-repaired delegated record, not a judge.
Item SHA256:436878d2718e2385fc448ad213ef290a9ef6bbb304fb844783347e8ceaf30ddb.

## Next item: two cyclic groups

Only after the supplier repair was recorded, root repaired
`thm-tor-of-two-cyclic-abelian-groups`. Read its full existing proof and the
complete earlier congruence-reduction, gcd-quotients-coprime and Bézout proofs.
The statement now inherits AC for balanced comparison. Both cyclic resolutions
are explicit. The arithmetic is choice-free: reduce modulo n/g, use Bézout,
then prove [t]↦[(n/g)t] is an isomorphism from Z/g onto the multiplication-m
kernel, including g=1. Added exact earlier congruence/Bézout suppliers.
Canonical/live/HA prose synchronized. Precheck and real rendercheck pass;
no independent judge. Item SHA256:
2304513081c0ef81b3ba373714d326c1e1721f86f3fb96b51e75db7b6442f70f.
Move this item U-C→A-R; its examples still require individual propagation.

## Examples, repaired individually

`ex-tor-detects-n-torsion`: root read full current item and the repaired cyclic
supplier; inherited AC is stated, while the fixed-resolution arithmetic remains
choice-free. Explicit residue calculation and [t]_4↦[3t]_12 prove the kernel
isomorphism. Both cyclic resolutions are available from the supplier. No new
unfamiliar result or Phase2 prerequisite is used. Canonical/live/prose/ledger
synchronized; precheck and real KaTeX/YAML checks pass, not an independent judge.
SHA256:4f19f82166f6f8d4066c7d3405094c227c0681e46622dff2332ce1530e57e444.

Next, `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution`: full target
and repaired two-cyclic supplier read. Propagated AC only for balanced
comparison; explicit residues 0,3,6,9,12,15 and [t]_6↦[3t]_18 prove the
choice-free kernel isomorphism. Precheck/render pass, no independent judge.
Canonical/live/prose/ledger synchronized, no new prerequisite.
SHA256:aee5fd540bbc3e27eea2536e62b0dcc431ac61ef0cd05df3f4bbe7c77ad0f594.

Finally, `ex-tor-symmetry-over-a-commutative-ring`: root read its full target
and the full repaired natural-symmetry proof. Added missing cyclic suppliers;
explicit AC-to-DC iteration and supplied multiplication resolutions meet
the symmetry theorem's hypotheses. The two order-two kernel groups have
unique nonzero elements, so the natural symmetry sends [3]_6 to [2]_4;
this proves agreement beyond merely equal gcd values. Fixed-resolution
calculations and tensor swap remain choice-free. Canonical/live/prose/ledger
synchronized; precheck and real rendercheck pass, not an independent judge.
SHA256:d847c02ea8870c92562dab7ee0bfa4dc6467319e13e4176fe09135f10a33e1d7.

## Changed-supplier receipt reconciliation

`prop-tor-dimension-shifting`: root read its full current proof and both
Tor long-exact-sequence proofs after the actual projective-vanishing repair.
The consumer already supplies DC and the resolutions; its i>=1 outside-zero
terms remain valid under the stronger choice-free arbitrary-resolution result.
Naturality and comparison assumptions are unchanged. No cyclic AC theorem is
used and no published edit is needed. Recorded a current bounded acceptance
for changed dependency bytes, not an independent judge, new repair or retry
of unchanged inputs.

At 15:45–15:46 UTC, root reconciled the remaining two receipts individually.
`thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`: full target, flat-dimension
definition, flatness criterion and projective-flat proof read. Finite kernel
shifting and nth-syzygy truncation, including n=0, meet the existing DC and
supplied-resolution hypotheses. The implicit published projective-flat supplier
is adequate. No edit; retain bounded clear. Current review hash:
`b3f80889563195806773a7f1282def2b8e9fb9eae8c1ec754bd861366965a4b5`.

`thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric`:
full target and weak-dimension/opposite-ring definitions read. Checked the
preceding criterion, balance and tensor interfaces. The opposite-ring flip
respects differentials and projective lifting/flatness; equal finite upper
bounds identify extended-natural dimensions, including the zero ring. Existing
DC and supplied data suffice. No edit; move U-P to bounded clear. Review hash:
`7b991526463a04bbe8c02bddaf5501c33a0602dc968964c0459033e458bdfbd0`.

Exact supplier lists are retained in the respective step3b-review JSON files.
All used suppliers are published; none is pending Phase2. These are bounded
changed-dependency reviews, not independent judgments or whole-closure audits.
All three affected dimension receipts are reconciled. Ledger counts:
U-P 1451, U-C 8, A-R 181, A-P 151; 562 bounded clear; 2353 unique.
