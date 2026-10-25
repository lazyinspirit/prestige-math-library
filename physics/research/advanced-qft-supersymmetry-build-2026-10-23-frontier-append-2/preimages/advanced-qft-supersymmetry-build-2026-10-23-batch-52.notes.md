# Batch 52 authoring notes — BPS solitons and the classical monopole bound

## Scope and plan comparison

The assigned A/B pair is qftx-bps-solitons-monopoles /
qftx-bps-solitons-monopoles-examples in advanced-qft-and-supersymmetry. The
complete design section at research/plan-advanced-qft-and-supersymmetry-track.md
L723 and its research-localization-bps.md discussion agree with the canonical
research/plan-spec.json on title, scope, required pages, and three planned item
IDs. Both scopes require a separate flux-quantization derivation, although the
three-item inventory contains no separate carrier for it. Batch 52 is therefore
adding pthm-qftx-su2-monopole-flux-quantization on the A page as a local result;
no shared plan or other pair is changed.

The canonical item's proposed_deps are incomplete for the actual field
definitions and proofs. The authored interfaces record the gauge, adjoint
connection, SU(2) invariant-form, Bianchi, divergence, and surface-Stokes inputs
actually used. This adds no physical claim beyond the approved scope.

## Item checkpoint: def-qftx-adjoint-higgs-monopole-sector

The definition adopts natural units, signature (-+++), right-principal SU(2)
conventions, T_a=-i sigma_a/2, kappa=-2 Tr_2, the static zero-potential energy
E=(2 g^2)^-1 int (|B|^2+|D Phi|^2), dimensions, the asymptotic U(1) reduction,
an explicit boundary transition, and the fundamental-doublet electric probe
lattice. The matter field in the assigned pure Yang–Mills supplier is empty;
this item defines a separate adjoint-scalar model using its gauge conventions
and does not treat the pure-Yang–Mills postulate as a Higgs premise.

Direct dependencies are def-countable-choice, def-qftx-nonabelian-gauge-data,
def-qftx-principal-connection-form, def-qftx-lie-algebra-valued-form-bracket,
def-qftx-associated-covariant-derivative,
prop-adjoint-is-a-smooth-lie-group-representation, and
lem-qftx-su2-compact-nonabelian-invariant-form. The maximum direct in-run
supplier level is 1, so dependency_level is 2. loadStep1Record and
step1Decision report the SU(2) invariant-form lemma and all four items on the
current Yang–Mills page as ready; the exact SU(2) statement and full proof were
read, and its normalized positive invariant form matches this use. The batch-2
gauge definitions, adjoint representation proposition, and their relevant
proofs were also inspected. The corresponding item dependency edges can be
recorded verified after the manifest is synchronized.

The required qftx-susy-algebra-and-multiplets page was rechecked using
loadStep1Record and step1Decision. Its A-page inventory consists exactly of
def-qftx-bps-state-and-saturation and
pthm-qftx-n2-bps-saturation-kernel-equivalence; both current hash-bound Step 1
records return ready. The complete conditional kernel-equivalence proof and
the definition were inspected. The page edge is therefore verified as a
current authoring input, not independent proof acceptance. The classical
energy model is not a Hilbert-space state and makes no supersymmetry or quantum
existence deduction; this distinction is explicit in the authored scope.

## Source research and retrieval record

- David Tong, TASI Lectures on Solitons, full 139-page PDF,
  https://arxiv.org/pdf/hep-th/0509216: retrieved locally and inspected
  completely across the relevant argument, §§2.1.1–2.1.3, printed pp. 41–43
  (PDF pp. 42–45). This covers the SU(N) Higgs boundary data, patch transition
  quantization, Bianchi surface term, Bogomolny square completion, and the
  SU(2) Prasad–Sommerfield solution. Tong uses a different metric, field, trace,
  and coupling convention; the carrier states its own conventions and the
  normalization conversion.
- Jeffrey A. Harvey, Magnetic Monopoles, Duality, and Supersymmetry, full
  62-page lecture notes, https://arxiv.org/pdf/hep-th/9603086: inspected §1.4,
  printed pp. 12–17 (PDF pp. 13–18), and §§2.1–2.2, printed pp. 18–20
  (PDF pp. 19–21). These independently give the SU(2) Higgs model, fundamental
  doublet charge unit, boundary winding/flux relation, Bianchi square
  completion, radial Bogomolny equations, and Prasad–Sommerfield functions.
  Harvey uses B_i=-epsilon_ijk F_jk/2, signature (+---), and e inside the
  covariant derivative; those are recorded as source conventions, not adopted.
- Manton–Sutcliffe's book was searched as a possible second primary treatment;
  the Cambridge chapter was access-restricted, the Durham repository returned
  HTTP 403, and the direct PDF request timed out. After searching alternatives,
  the full Harvey notes supplied the independent treatment, so no argument
  depends on the inaccessible book. Rajaraman's online scan was also inspected
  as a candidate; its extracted equations were materially OCR-corrupted and it
  was not used as support.

Both sources are independent full lecture-note treatments, including one
complete model-derived solution. source-fetch-check --stamp passed for both
PDFs and the stamps were copied into source coverage: Tong, 1,359,323 bytes,
139 pages, SHA-256 prefix b70b0b2d3db9f5a6; Harvey, 460,044 bytes, 62 pages,
SHA-256 prefix 7b604ff94aeaa5bd. No empirical measurements or claims are used.

## Checks, unresolved inputs, and next actions

All four carriers, the manifest, proof contracts, coverage records,
cross-batch edges, and both YAML-only page inventories are synchronized. The
final scoped checks passed: precheck (3 proof items, 0 failing), strict proof
contracts (4/4, 0 errors or warnings), proof layout (4 items, 14 steps, 0
defects), rendercheck (6 files), coverage checklist (1 page, 12 harvested
results, 0 errors or warnings), source fetch (2/2), selected depcheck, and the
nonempty-manifest dependency-level calculation. The four current item levels
are 2, 3, 3, and 4 in supplier order. All four new Step 1 readiness records
are ready and hash-bound to their direct item suppliers plus the inspected
items of both required A pages.

The unfiltered run-wide item-level CLI reports empty scaffold inventories in
unrelated batches, including aqft-smeft-heft and
qftx-susy-extended-actions. A calculation over all nonempty manifests also
reports eight recorded/computed level mismatches outside batch 52:
post-qftx-n2-vector-hypermultiplet-model (3/6),
post-qftx-n4-super-yang-mills-model (4/7),
ex-qftx-n2-hypermultiplet-gauge-invariants (4/7),
ex-qftx-n2-quadratic-prepotential (4/7),
ex-qftx-n4-adjoint-hyper-decomposition (5/8),
ex-qftx-n4-su2-noncommuting-scalar-potential (5/8),
post-qftx-rigid-supersymmetric-background (3/8), and
ex-qftx-susy-round-s4-localization-data (4/9). The exact in-run prerequisite
closure of the four batch-52 carriers is 10 items across four pages and passes
with no errors at levels 2, 3, 3, and 4. None of the eight mismatched items has
an in-run dependency path to a batch-52 carrier. The run-wide batch-level check reports
its shared snapshot stale because the batch manifests changed. A fresh
read-only graph calculation keeps batch 52 at level 3 with prerequisites
batches 2, 19, and 29. These unrelated level defects and the shared scheduling
snapshot were left for the owner to resolve or refresh.

## Item checkpoint: pthm-qftx-su2-monopole-flux-quantization

This new A-page theorem proves the integer flux unit from the actual global
SU(2) form, a smooth limiting U(1) reduction, the equatorial transition, and
the fundamental-doublet probe lattice. The proof uses the local adapted-frame
connection and the published compact-surface Stokes lemma; it derives the
transition winding directly and does not import the source's
pi_2(G/H)=pi_1(H) result. Direct in-run dependencies are the level-2 sector
definition and level-0 normalized SU(2) form, so its dependency_level is 3.
Its only external mathematical input is the inspected C1 surface-Stokes
supplier under AC_omega.

Tong §2.1.1, equations (2.9)–(2.15), and Harvey §1.4, equations (1.30),
(1.38)–(1.40), support the boundary and global-charge conventions. Harvey's
homotopy-sequence statement is context only; the local patch argument above
establishes the exact SU(2) interface used here.

## Item checkpoint: pthm-qftx-bogomolny-monopole-energy-bound

The theorem now derives both g-normalized square identities from the exact
model energy. Its proof uses the current SU(2) positive invariant form, the
current principal-curvature/Bianchi lemma, and the imported Euclidean
divergence theorem; it carries their shared AC_omega assumption. The direct
in-run supplier levels are 2 for the sector definition, 1 for Bianchi, and 0
for the invariant form, so dependency_level is 3. The proof handles positive,
negative, and zero surface charge separately and proves the pointwise equality
conditions using smoothness and positivity. No equation-of-motion or solution
existence claim is inferred from the square identity.

## Item checkpoint: ex-qftx-su2-bps-monopole

The B-page example fixes the hedgehog fields with signs matched to B_i=+epsilon
F/2 and D_i=partial_i+[A_i,Phi], proves smoothness at the origin, computes B
and D Phi, shows finite energy and m=4 pi v, and applies the flux and energy
theorems to get transition integer one and E=4 pi v/g^2. Its direct in-run
supplier levels are 2, 3, and 3, so dependency_level is 4. The carrier claims
an explicit classical first-order solution and saturation only; no quantum
BPS state or empirical observation is claimed.

The batch-52 authoring work is complete. The only remaining action is for the
owner to refresh the shared run-wide batch dependency snapshot; its current
graph calculation still places batch 52 at level 3 and records prerequisites
2, 19, and 29. All mathematical suppliers used by the authored proofs and all
items on the two required A pages have current ready Step 1 records.
