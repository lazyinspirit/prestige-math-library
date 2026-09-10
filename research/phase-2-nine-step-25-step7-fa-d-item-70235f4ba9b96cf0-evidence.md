# Final adjudication: suspension homotopy classes

Run: phase-2-nine-step-25. Group: d. Queue position: 1 of 1 in
`research/phase-2-nine-step-25-step7-fa-d-item-70235f4ba9b96cf0.json`.
Item: `lem-suspension-homotopy-classes-have-natural-group-structures`.
Decision: **accepted-after-review**. Source status: **verified**.
Unchanged itemHashGuard: `fc00c93d08f7337d0b2f2b58f9f7c02618f3e25b20f539710e8a88942b8a5e75`.

## Evidence inspected

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the current item in full;
its three direct dependencies in full; the compactly generated conventions;
and the published `thm-fundamental-group-laws` in full. Direct dependencies are:

- `def-reduced-cone-suspension-and-cofiber-sequence` (F1).
- `lem-interval-exponential-law-and-quotient-homotopies` (F2).
- `thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one` (F3).

Read both pages `library/algebraic-topology/higher-homotopy-groups-and-cofiber-sequences{,-examples}.md`,
the item's batch-8 manifest and coverage entries, its complete batch-8 proof
contract including boundaries and risk review, and the corresponding authored
checkpoint in `research/phase-2-merged-25-batch-8.notes.md`. That inherited
checkpoint has the original broad hypotheses; the current manifest and item
contain Sol's well-pointedness repair and govern this review. The page orders
all three suppliers before the consumer. The construction uses reduced
suspension, based homotopies, first-map-first concatenation, and no choice.

Read the two exact rejection rows in `research/phase-2-nine-step-25-judge.jsonl`,
Sol's row in `research/phase-2-nine-step-25-judge-adjudications.jsonl`, its
item-specific account in `research/phase-2-nine-step-25-alpha-step7-d.md`, and
the item-local closure JSON. Initial rejection context:
`3fb7d092ede188b140fe8a770eef04cfc74a7468d2026876a3814b45198e42c6`.
Final Terra rejection context:
`e1bd33a04a6e45b225634b0f9cd66a8fc711354accec8897bda8c6ee8cb65f48`.

Sol correctly added well-pointed based CGWH X,Y and bound f:X→Y, retaining
based CGWH Z and both typed precomposition homomorphisms. Terra then objected
that F3's headline statement supplies only groups pi_n, not the claimed
parametric homotopies. This does not invalidate the current proof: F3's actual
proof, steps 1.1–4.1, explicitly supplies precisely those formulas, and the
consumer explicitly reuses the constructions and checks their new boundaries.
The contract's F3 quotation is narrower than that proof use, but its derivation
and risk entries explicitly record the coordinate-homotopy application. This
is not an absent mathematical supplier or an unproved appeal to naturality.

## Independent mathematical check

A representative a:X×I→Z is constant on X×{0,1} and {x0}×I.
Half-interval pasting is continuous because the seam values agree at z0.
The identical construction with a homotopy parameter proves independence of
representatives. F2 explicitly proves quotient-times-I for arbitrary quotient
maps, so it applies to each quotient and each homotopy here without imposing
compactness on X. Iterating it realizes the double suspension as the quotient
of X×I² collapsing X×boundary(I²) and {x0}×I².

For units, phi_R(s)=min(2s,1) and phi_L(s)=max(2s−1,0) fix endpoints and
identify the reparametrized map with a*e and e*a. Interpolating between s and
phi(s) is jointly continuous after adjoining the unchanged x coordinate.
For associativity take w=(a*b)*c and phi(s)=s/2 on [0,1/2], s−1/4 on
[1/2,3/4], and 2s−1 on [3/4,1]. Substitution gives a*(b*c), with its
three branches occupying exactly those three intervals. The same interpolation
therefore proves associativity. These are literally F3 steps 1.1–2.1.

For inversion, the two halves a(x,2s(1−t)) and a(x,2(1−s)(1−t)) agree
at s=1/2 with value a(x,1−t). At the exterior endpoints their value is z0;
at t=0 they give a*a-minus, and at t=1 the constant map. Applying this to
a-minus gives the other cancellation. The seam need not be constant during
the homotopy, only matching; the collapsed exterior and x0 track remain
constant. This is F3 step 3.1, with joint continuity checked directly.

For double suspension let * and circle concatenate the two interval
coordinates separately. Each is well defined and has the same constant unit
by the preceding argument with the remaining coordinates untouched. On each
quarter square, (a circle b)*(c circle d)=(a*c) circle (b*d) evaluates the
same map at the same rescaled coordinates; all seams agree. Consequently
on classes a*b=(a circle e)*(e circle b)=a circle b, and also
(a*b)=(e circle a)*(b circle e)=b circle a. This is F3's explicit step 4.1,
and gives commutativity without any family of separately chosen homotopies.

Finally a(f(x),s), and respectively a(f(x),s,u), commute pointwise with the
half-interval operations and preserve the constant class. Thus both suspended
precomposition maps are homomorphisms. The last sentence of consumer step 3.1
writes the single-suspension case explicitly; the same substitution in the
two-coordinate formula proves its stated double-suspension case. Reversal
is inversion as claimed. One-point spaces and constant representatives are
included. No connectedness of X or Z is needed. The distinction between
unreflected homomorphisms and reflected antihomomorphisms in the surrounding
Puppe convention is respected.

## Authoritative source verification

Exact URL consulted:
https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf

May, A Concise Course in Algebraic Topology, Chapter 8 §§1–2, printed pp.57–58
(PDF pages 64–65, zero based). Read the complete relevant extracted section,
lines 3400–3467, including the suspension definitions, mapping-space
adjunction, multiplication formula, lemma and its proof. It supports the
reduced model and the single-suspension group/double-suspension abelian claim.
May writes g+f for the operation traversing f first; this is consistent with
the library's first-map-first convention after changing notation. The source
refers the first group-law argument to the fundamental group and describes
the second geometrically. The explicit algebraic verification above uses the
complete local supplier proof, not an inferred reading of the source diagram.
The first screenshot attempt for PDF page 65 failed with a cache miss;
full-text reopening succeeded. No claim of visually verifying the diagram or
reading the entire book is made.

## Focused checks and scope closure

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-suspension-homotopy-classes-have-natural-group-structures.md`: PASS, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-8.proof-contracts.json --strict --items lem-suspension-homotopy-classes-have-natural-group-structures`: 0 errors, 0 warnings, 1/1 checked.
- Independently recomputed itemHashGuard using `tools/item-hash.mjs`; it equals Sol's recorded post-repair hash above.
- Item and batch manifest retain exactly the same three dependencies, all in batch 8. The owning `research/phase-2-nine-step-25-batch-8.cross-batch-dependencies.json` is `[]`. No dependency repair or declaration change was required, so there is no affected cross-batch row to change under `briefs/tasks/frontier-dependency-ledger.md`.

These checks are format/contract evidence, not mathematical verdicts. No item,
dependency, contract, page, manifest, scope or judge history was edited by FA.
No new lemma or prerequisite licence is needed. No unresolved obligation was
identified for this item. This is a terminal resolution, not a judge pass or
whole-library certification. Next action: record this exact acceptance with
the prescribed terminal recorder; then return control to owning Alpha.
