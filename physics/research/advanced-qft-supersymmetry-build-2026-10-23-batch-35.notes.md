# Batch 35 authoring notes

## Plan comparison and scope

The assigned design at `research/plan-advanced-qft-and-supersymmetry-track.md`,
“Four-Dimensional SCFT Data and Duality Frontier,” agrees with the canonical
plan on the A/B page IDs, titles, category, library, order 991, and the two A-page
prerequisites `qftx-susy-moduli-and-dualities` and
`qftx-susy-ward-and-nonrenormalization`. The B page requires its A companion.
There is no page-interface conflict. The design's future item
`def-qftx-scft-protected-data` is absent from the initial empty item arrays in
`plan-spec.json` and the batch manifest; these are planning placeholders, as
stated in the owner direction. The owner direction requires materializing that
item and substantive examples on the B page. No shared plan or other batch is
changed.

The design scope is retained: define source-qualified four-dimensional SCFT data
and protected observables for one exact model; record the date and limits of the
duality sources; make no universal S-duality or continuum-construction claim.
The 2026-10-23 supersymmetry research note calls the N=4 S-duality proposal a
nonlogical status-review lead, not a source of proof or an adopted open problem.
This batch records the dated claims of the cited 2007 and 2013 sources without
claiming an exhaustive 2026 status survey.

## Prerequisite inventory and levels

The run dependency-level evidence assigns batch 35 level 7 with page suppliers
batches 32 and 33. The current page manifests confirm the required A-page edges.
`loadStep1Record` and `step1Decision` were called for all batch-32 and batch-33 A
page items and for the transitive N=4 model supplier; every inspected record was
`ready` and hash-current. The current N=4 model supplier is
`post-qftx-n4-super-yang-mills-model` (batch 31, item level 7). Its inspected
postulate fixes the global group as SU(2), the flat mostly-plus Minkowski and
natural-unit conventions, one vector plus three adjoint chiral multiplets, and
the classical action. It explicitly adopts 16-supercharge invariance and does
not claim a quantum measure or continuum construction. Its current Step 1
readiness record is closed/ready; this records authoring readiness, not
independent proof or publication approval.

Planned/current authored item levels are computed from actual `deps`:

| Item | Direct logical/formulation suppliers | Level |
|---|---|---:|
| `def-qftx-scft-protected-data` | `post-qftx-n4-super-yang-mills-model` (level 7) | 8 |
| `pthm-qftx-scft-index-q-pair-cancellation` | `def-qftx-scft-protected-data` (level 8) | 9 |
| `pthm-qftx-scft-chiral-primary-unitarity-bound` | `def-qftx-scft-protected-data` (level 8) | 9 |
| `ex-qftx-n4-su2-line-operator-duality` | `def-qftx-scft-protected-data` (level 8) | 9 |
| `ex-qftx-n4-su2-chiral-primary-dimension` | definition and chiral-bound theorem (max level 9) | 10 |
| `ex-qftx-scft-index-two-state-pair` | `def-qftx-scft-protected-data` (level 8); the finite toy model does not use the full-SCFT theorem | 9 |

The local index argument assumes an explicit discrete, finite-multiplicity
Hilbert-space decomposition and trace-class fugacity-weighted heat operator; it
does not invoke a general continuum QFT construction. The chiral-dimension result
uses only the selected N=1 superconformal anticommutator and positivity.

## Source retrieval and reading

The source-coverage file records seven full-text fetch stamps from the actual
`source-fetch-check --stamp` command: 7/7 passed, 0 dropped. I inspected the
following full texts at the listed locators:

- David Tong, *Supersymmetric Field Theory*, §§2.2–2.4, 4.4.2, 6.4.2:
  `https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf`. Supports the N=4 field
  data, selected N=1 algebra, and source-stated chiral bound; it does not prove
  S-duality or continuum existence.
- Kinney, Maldacena, Minwalla, and Raju, *An Index for 4 Dimensional Super
  Conformal Theories*, §3, equations (3.1)–(3.3), and §4.1:
  `https://arxiv.org/pdf/hep-th/0510251v1`. Supports the chosen supercharge,
  index trace, cancellation argument, and scope of their N=4 calculation.
- Kapustin and Witten, *Electric-Magnetic Duality and the Geometric Langlands
  Program*, §§2.1–2.2: `https://arxiv.org/pdf/hep-th/0604151v3`. Supports the
  N=4 coupling convention and describes S-duality as a conjecture; the paper's
  topological twist does not prove the untwisted continuum theory.
- Aharony, Seiberg, and Tachikawa, *Reading between the Lines of Four-Dimensional
  Gauge Theories*, §§1.1–1.2 and 2.4:
  `https://arxiv.org/pdf/1305.0318v5`. Supports the SU(2)/SO(3) line spectra and
  the S/T action on line-charge classes; it does not prove quantum equivalence.

The optional D'Hoker–Phong PDF retrieval returned a browser cache-miss; no read or
fetch is claimed. It was not used. Its retrieval/search history and the
successful alternatives are retained in `batch-35-source-coverage.json`. No
selected source is dropped or unresolved, so `source_resolution` is empty; the
successful source entries retain the per-item support and dependency coverage.

## Item-by-item checkpoints

### `def-qftx-scft-protected-data`

Authored the complete definition of the source-selected classical N=4 SU(2)
model, the `psu(2,2|4)` interface and scalar primary convention, the radial
superconformal index and trace-class qualification, the normalized coupling and
integer SU(2) instanton sector, and the `su(2)` center-charge pairing. The S/T
maps and the SU(2)/SO(3) line-spectrum dependence are explicitly source-reported
conjectural data; no quantum equivalence, continuum construction, exhaustive
2026 status, or open-problem classification is claimed. Direct dependency:
`post-qftx-n4-super-yang-mills-model`, role `formulation-prerequisite`, inspected
at its actual SU(2) group, action, fields, and adopted-supersymmetry scope. Source
paths, URLs, locators, per-item support, limits, and the 7/7 full-text fetch
stamps are in `batch-35-source-coverage.json`. The final definition contract
passes strict contract validation. Its direct model supplier is current and
ready. The final definition's conjugate scalar anticommutators were inspected by
both consumers: the index theorem uses the unchanged `$\delta$` interface, and
the chiral-bound theorem uses the newly explicit conjugate relation; neither
needed a proof repair. `step1-decisions.mjs record` now records the definition
`ready` at hash
`62843eaa4e8bc702deb7a5f0961d0b8a5035a0d027df117d8569f4dd41eb8fd6`. This is
authoring readiness, not independent mathematical or physical acceptance.

### `pthm-qftx-scft-index-q-pair-cancellation`

Authored a conditional index-cancellation theorem. Its added hypotheses specify
a common invariant operator domain, nilpotent supercharge and adjoint, positive
self-adjoint anticommutator, countable discrete finite-multiplicity eigenspaces,
commuting bounded fugacity insertion, and trace-class heat operator. The local
proof constructs the odd involution on each positive eigenspace, cancels its
graded trace, and identifies the zero eigenspace with the joint supercharge
kernel. It does not assert a continuum construction or coupling-deformation
invariance. Direct dependency: `def-qftx-scft-protected-data`, level 8; item level
9. Sources: Kinney et al. §3 (equations (3.1)–(3.3), pp. 12–13) and Tong §§2.2–2.3,
6.4.2; complete locators and limits appear in source coverage. Its first
normative precheck proposed canonical phase renumbering; I adopted it and the
rerun passed. The final strict proof contract, precheck, proof-layout,
rendercheck, focused depcheck, and authored content-policy passed. The
definition statement was then extended to state the conjugate scalar relation;
I rechecked the index use and recorded current readiness at hash
`b2dcb350d783f3fa2673ab9c12fb1e11512357053a506291433d8baef4f463d7`.
This is authoring readiness only.

### `pthm-qftx-scft-chiral-primary-unitarity-bound`

Authored the conditional scalar unitarity inequality from the two conjugate
positive-norm anticommutators. It proves the $3|r|/2$ bound and both equality
conditions for states already present in the assumed representation; no general
SCFT representation classification or continuum construction is claimed.
Direct dependency: the final `def-qftx-scft-protected-data`, level 8; item level
9. Sources: Tong §6.4.2 and Kinney et al. §3; the local proof derives both
inequalities. Its proof contract was regenerated from the final proof and strict
validation passed. Normative precheck, proof-layout, rendercheck, focused
depcheck, and authored content-policy passed. Step 1 records `ready` at hash
`3a84263664532b60eb276be55792c7b6c705669f9af0a3129caf9f7fc0f8cd16`. This
is authoring readiness only. Its definition supplier is current and its final
conjugate scalar conventions are checked against both consuming A-page proofs.

### `ex-qftx-n4-su2-chiral-primary-dimension`

Authored a conditional example for the renormalized composite
$\operatorname{Tr}_2(Z^2)$. The statement explicitly assumes a nonzero scalar
chiral-primary state in a unitary SCFT representation; the proof computes its
$R$ charge $4/3$ and applies the local bound to obtain scaling dimension $2$.
This does not infer continuum existence or that every classical composite is a
primary. Direct suppliers: `def-qftx-scft-protected-data` (level 8),
`pthm-qftx-scft-chiral-primary-unitarity-bound` (level 9), and
`post-qftx-n4-super-yang-mills-model` (level 7); item level 10. Sources: Tong
§§4.4.2/6.4.2 and Kinney et al. §4.1; source coverage records the reading limits.
Strict contract, precheck, proof-layout, rendercheck, focused depcheck, authored
content-policy, and source-fetch checks passed. `step1-decisions.mjs record`
marked it `ready` at hash
`4237940deb497d7a2251071479bf9b738e4eb9c3783e79d6e40c388f8dbcc177`. This is
authoring readiness only; the final source convention and all three suppliers
are current.

### `ex-qftx-n4-su2-line-operator-duality`

Authored the finite $\mathbb Z_2^2$ line-charge classification for
$\mathfrak{su}(2)$ and checked the source-labelled $SU(2)$, $SO(3)_+$, and
$SO(3)_-$ subgroups and their S/T permutation. The proof establishes the finite
isotropy and arithmetic only; the quantum equivalence remains explicitly a
source-reported conjecture. Direct dependency: `def-qftx-scft-protected-data`,
level 8; item level 9. Sources: Aharony–Seiberg–Tachikawa §§1.1–1.2, 2.4 and
Kapustin–Witten §2.2; fetch stamps and dispositions are in source coverage.
The TikZ diagram is explanatory and is not used by the proof. Strict contract,
precheck, two-step proof-layout, rendercheck (including TikZ), focused depcheck,
authored content-policy, and source-fetch check passed. Step 1 records `ready`
at hash `7c41b03c04cc1355366680e1559c89c3cad467c00d230758ea429c8105222f3a`.
This is authoring readiness only; its definition supplier is current.

### `ex-qftx-scft-index-two-state-pair`

Authored the exact finite-dimensional boson–fermion example with
`$\mathcal H=\mathbb C^{1|1}$`, `$Q^2=S^2=0$`, `$\delta=2(SQ+QS)=\lambda I$`,
and `$U=I$`. The two states have the same positive eigenvalue, so the graded
trace cancels and the kernel is empty. This illustrates the local trace
calculation only; the statement explicitly disclaims a full four-dimensional
superconformal representation. Direct dependency: the current
`def-qftx-scft-protected-data`, level 8; item level 9. Sources: Kinney et al.
§3 and Tong §§2.2–2.3, 6.4.2; full-text locators and the finite-check
disposition are in source coverage and the strict proof contract. The symbolic
matrix calculation, normative precheck, proof-layout, rendercheck, focused
depcheck, and content-policy passed. Step 1 records `ready` at hash
`6bec947060cf87716114f9ed0d7055d4d715f07c0599405544b3c637fdc5a94d` with only
the definition as its item dependency. This is authoring readiness only.

## Final scoped checks and remaining run-level blockers

After the last carrier edits, source-fetch check reported 7/7 fetched and
resolved with no drops; strict proof-contract validation checked 6/6 items with
zero errors or warnings; precheck passed all five proof-bearing items;
proof-layout checked five items and eleven steps with zero defects; rendercheck
parsed all six item carriers and both frontmatter-only pages; focused depcheck
reported zero errors and warnings; and content-policy reported six scoped items
with zero errors and warnings. The source-anchored coverage checklist checked
two pages and fifteen harvested results with zero errors or warnings; fetch
checks against both coverage files verified all seven active source entries.
A final bundle consistency check matched six item IDs to six proof contracts,
two frontmatter-only pages with empty bodies, seven fetch-stamped source entries,
and four verified cross-batch rows: the two exact A-page prerequisites, the
definition's N=4 model supplier, and the chiral example's N=4 model supplier.
These rows record only the inspected edge checks, not independent proof
acceptance.

The run-wide `item-dependency-levels.mjs check` reports unrelated errors in
other batches (empty scaffold inventories, unfinished item IDs, and stale
dependency-level labels). No batch-35 item appears among those errors. Reusing
the same dependency-level implementation on the complete run manifests gives
batch-35 declared/computed levels 8, 9, 9, 9, 10, and 9 for the six items in the
inventory table above; all six labels match. No out-of-scope files or shared
plans were changed. All six batch-35 Step 1 records are current, hash-bound,
`ready`, and non-owner records; there is no unresolved batch-35 prerequisite.

## Owner follow-up

The full Kinney et al. PDF places equations (3.1)–(3.3) in §3, “A Trace
Formula for the Indices of Superconformal Algebra” (printed pp. 12–13); its §3.1
begins on p. 13 as “The Commuting Subalgebra.” The current item carriers and
The source locators in `pthm-qftx-scft-chiral-primary-unitarity-bound` and
`ex-qftx-scft-index-two-state-pair`, and their corresponding rows in
`advanced-qft-supersymmetry-build-2026-10-23-batch-35.pages.json`, still cite §3.1,
although their page locators include pp. 12–13 and their arguments are proved
locally. The batch source-coverage and harvest records use the exact §3 locator.
These source links are attribution, not proof inputs. The carriers remain at
their current hash-bound Step 1 state; owner review should correct the item and
manifest labels and refresh readiness under the owner's later review workflow
before acceptance.


## Owner canonical-normalization follow-up — 2026-10-24

The current source/interface and exact consumer disposition are in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/canonical-normalization-repair.md` and its evidence JSON. This dated addendum supersedes earlier live-readiness observations and the earlier raw/physical measure identification, without deleting that history. Current physical brackets are D=-I_D/4, F=I_F/2 with psi_raw=sqrt2psi and F_raw=2F; scalar fields, physical couplings and potentials are preserved.50/51 use the independent stable-ADHM core and genuine localized BM tangent-twist insertion, with source continuation m=i m_E and the unconstructed S4-regulator caveat retained.79 selected source items and26 actual pages passed focused preparation checks; this is not native acceptance. Root retains native holds until independent source/dependency binding and recertification.
