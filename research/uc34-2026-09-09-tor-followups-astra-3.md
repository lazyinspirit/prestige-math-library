# Tor choice-contract follow-ups — Astra-3

Date: 2026-09-09. Owner-authorized, defect-focused local audit and repair of
seven assigned published items, one at a time; not an independent judge or
whole-closure certification. Shared ledger/plan/manifest belong to root.
Read Alpha-c Step-3 review and current batch-5 notes. Consulted full Weibel
Chapter 2 Comparison Theorem 2.2.6 pp.35–36, derived-functor proofs pp.44–45,
and §2.7 pp.58–61 at
https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf.
Published comparison existence and uniqueness statements explicitly assume DC;
their full proofs and the two Tor definitions were read. DC is propagated as
an adequate upper bound, not claimed necessary. Supplied resolutions remain
explicit data; DC is not asserted to produce arbitrary projective resolutions.

## prop-each-tor-construction-is-covariant-in-both-variables

Disposition: A-R, local choice-contract and functoriality repair.
Before SHA-256: `6902b4fae8c0a99251f51917ef8481e3cdc00dd255cb8e36abdf324e9ea386f5`.
After SHA-256: `7140afcfbf8603e890357b4c9677798f67f99010f0a7031144cfb051e3001b91`.

Added `def-dependent-choice` to the unchanged four suppliers:
`def-tor-by-resolving-the-left-module`,
`def-tor-by-resolving-the-right-module`,
`thm-projective-comparison-map-exists`, and
`thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`.
All are published. Statement now assumes DC and supplied resolutions.
Proof explicitly tensors the homotopy equation, checks identities/composition
and the commuting two-variable maps. Conditional supplied-data calculations
remain choice-free. Removed obsolete judge stamp; recorded honest delegated
local repair evidence and successful precheck. Initial precheck flagged
wrapped numbered steps; after formatting correction, targeted precheck and
real renderer/KaTeX check pass.

Direct-consumer impact candidates will be listed separately; no blanket
transitive defect inference. Outside ownership, the existing balance theorem
already states DC but lacks the direct `def-dependent-choice` metadata edge;
root was notified, and its fixed-resolution balance proof was read.

## prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions

Disposition: A-R. Before `999d65fcd63e7722ca69fea739e5de6f8f53819e7aa8338096b9b6d00db88f8f`;
after `72240e6177026da372562f4e8151859cc61319018db1445ea1e9f469318d1a5a`.
Added `def-dependent-choice`, `thm-projective-comparison-map-exists`, and
the repaired `prop-each-tor-construction-is-covariant-in-both-variables`
to the retained balance theorem and comparison-homotopy-uniqueness suppliers.
All suppliers are published. Full balance proof read; its actual statement
already assumes DC. Statement now propagates DC with supplied resolutions.
Replaced reversed edge-to-total wording with explicit total-to-edge maps
and their naturality identities. Ratio of homology isomorphisms gives the
commuting square; identity comparisons give inverse/coherent replacements.
Supplied commuting-square calculations remain explicitly choice-free.
Removed old judge, added delegated local verification. Targeted precheck and
real renderer pass. No supplier publication or broader closure claim.

## def-balanced-tor-bifunctor

Disposition: A-R. Before `1175a669508d73d73f7181b25901e494e898176463aec1e4c4429cbff232ee18`;
after `16594f47382f981ad99939545139757b94b0d6172f5ff232740f4638d2bb7706`.
Added `def-dependent-choice` and the repaired covariance proposition to the
retained balance theorem/coherence proposition. All four are published.
Definition now assumes DC and supplied projective resolutions, distinguishes
canonical isomorphism from literal equality, and does not infer enough
projectives or a global resolution selection from DC. Explicit supplied-data
interpretation remains available without DC. Old judge removed, delegated
local evidence recorded. Definition precheck n/a; targeted real renderer pass.

## thm-long-exact-tor-sequence-in-the-right-module-variable

Disposition: A-R. Before `ca53be2f4915615fca2ae2bc6c4465af154fb831013650b96190c2c35fa1ea34`;
after `68265e17356143b6f7ebf100df0f23427a15d19398d82ee2a67f77d103620605`.
Replaced the indirect right-horseshoe/left-LES route by fixing a supplied
left projective resolution P and tensoring the right-module exact sequence
degreewise. Projective implies flat over arbitrary rings is a proved
choice-free supplier, fully read. Homology LES/naturality suppliers and
degree-zero tensor identification were fully read. DC enters only resolution
comparison and full two-variable naturality, not fixed-P exactness.

Exact current deps: `def-balanced-tor-bifunctor`,
`prop-each-tor-construction-is-covariant-in-both-variables`,
`prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`,
`lem-projective-modules-are-flat-over-an-arbitrary-ring`,
`thm-long-exact-sequence-in-homology`,
`thm-naturality-of-the-homology-connecting-morphism`,
`prop-tor-zero-is-the-tensor-product-in-either-construction`,
`def-dependent-choice`. All published. Removed direct balance theorem and
left-variable LES edges; coherence supplies the actual transport used.
Statement includes explicit degree-zero tail and supplied-resolution scope.
Old judge replaced by delegated local record. Targeted precheck passes after
adopting canonical step numbering; targeted real renderer passes.

## prop-tor-dimension-shifting

Disposition: A-R. Before `ba195fe253598027ca34dc1d79d52c316fbbbe76d207129a99bc587c32ab907f`;
after `9f62dd41c82add8d58944dc0b74a1b60530312962288160fe6304fcb7c3697cc`.
Added `def-dependent-choice` and repaired balance-coherence proposition to
the retained two Tor LES and projective-variable vanishing suppliers.
Full statements/proofs of the left LES and length-zero vanishing calculation
read. The latter is used only for its explicit length-zero computation;
DC-bearing coherence transports it to arbitrary supplied resolutions.
Both handed formulas and i>=1 are explicit, with naturality inherited from
the exact sequences. Conditional inference from supplied exact sequences
and identifications remains choice-free. All suppliers published; obsolete
judge replaced by local delegated record. Precheck and real renderer pass.

## cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes

Disposition: A-R. Before `cd652fb9597b73053b88eb597abc46dda063fa06eab25bed5a39a19bfc0ead7d`;
after `dbb209d03f27b655dd2d3a8dde5472b47f48dc2681826d09172143d908f0d5cb`.
Exact deps: retained published
`thm-long-exact-tor-sequence-in-the-left-module-variable`, added published
`def-dependent-choice`. Statement now supplies DC/resolution data and
distinguishes zero boundary from zero Tor domain. Proof uses the existing
LES tensor tail for final exactness, not an unstated commutative-only
right-exactness theorem. Elementary conditional inference from a supplied
exact tail remains choice-free. Local delegated verification replaces
obsolete judge. Targeted precheck and real renderer pass.

## thm-tor-symmetry-over-a-commutative-ring

Disposition: A-R. Before `d7dd199cfcaa197a271df4ecde9fb33bf361223598216ae48febccf5983575ed`;
after `f1951ab236c7530f3a7edea7c2552089d02bcb49f4e3d88a8960cfde2124cfa3`.
Added `def-dependent-choice`, repaired covariance, and repaired coherence
to the retained balanced definition, both resolution definitions, and ordinary
commutative tensor symmetry theorem. All published; full symmetry supplier
proof read. Explicitly transferred projective lifting diagrams between left
and right modules over a commutative ring, checked the termwise swap against
the differential and maps, and used DC only for comparison/natural balanced
interpretation. Fixed-resolution chain/homology swap stays choice-free and
needs no double-complex Koszul sign. Old judge replaced by local delegated
record; targeted precheck and real renderer pass.

## Direct-consumer impact candidates — not blanket defects

A final read-only exact-ID textual scan of published item files, excluding
the seven repaired files, found these direct references. A reference can be
metadata, orientation, or a load-bearing proof use; this scan does not decide
that classification and does not certify a transitive closure. Items already
being repaired by other owners remain theirs.

References to `def-balanced-tor-bifunctor`:

- `def-betti-numbers-of-a-finite-local-module`
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m`
- `lem-minimal-free-resolution-reduces-to-zero-differential`
- `lem-projective-dimension-from-last-nonzero-betti-number`
- `lem-regular-element-reduction-preserves-minimal-resolution`
- `lem-the-kunneth-tor-map`
- `lem-the-universal-coefficient-tor-obstruction-map-for-homology`
- `prop-homology-of-the-derived-tensor-product-is-tor`
- `prop-semisimple-rings-have-vanishing-positive-tor-and-ext`
- `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`
- `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes`
- `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`
- `thm-higher-tor-over-the-integers-vanishes`
- `thm-long-exact-tor-sequence-in-the-left-module-variable`
- `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`
- `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric`

References to `thm-tor-symmetry-over-a-commutative-ring`:

- `ex-tor-symmetry-over-a-commutative-ring`
- `fs-tor-is-symmetric-over-every-noncommutative-ring`
- `lem-local-global-dimension-equals-residue-field-projective-dimension`
- `lem-regular-element-reduction-preserves-minimal-resolution` (also above)
- `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map`

The flat-dimension theorem additionally references `prop-tor-dimension-shifting`.
There were no other outside references to the other four repaired IDs in
this direct textual scan. There are 20 unique candidates, not 20 confirmed
new defects. For each candidate ask whether the actual proof only calculates
homology of an explicitly supplied resolution (potentially choice-free), or
uses comparison/balance naturality (DC), or already assumes AC. For the
last case, the proof in the published
`thm-choice-implies-dependent-implies-countable-choice`, steps 1.1 and 2.1,
was read: select the successor function by AC and iterate it by ordinary
recursion. **Order correction from root:** that theorem is on A665, later
than Tor A365.055, so it is NOT a legal dependency here. The initial advice
to Astra-2 to cite it was incorrect as a page-order recommendation; Astra-2
is replacing those edges by the full local successor-selector argument
using earlier `def-axiom-of-choice`, `def-dependent-choice`, and
`thm-recursion`. No item owned by Astra-3 acquired the late theorem edge:
the repaired Tor items assume DC directly. The definition of DC alone
merely quotes AC=>DC and is not a proof of that implication.

## Completion and checks

All seven assigned targets: A-R, each reported immediately to root with
before/after hashes and exact changed suppliers. Six proof targets passed
targeted precheck; the definition has precheck n/a. All seven passed targeted
real renderer/KaTeX/YAML checks. A final scoped `git diff --check` passes.
No independent judge was run and no old judge stamp retained on a repaired
item. Only the seven authorized item files and this report were edited.
Root owns all shared ledger, plan and manifest reconciliation, including
the changed direct fixed-resolution route for the right-variable LES.

## fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m

Additional owner-assigned target, disposition A-R.
Before `d4f07fa6e4cd5b3a60aedb3a445da37446966fc02b4a60cccf8157d02a374cba`;
after `360e4701ad8ad5d26af9c3826a3223ef2ce5bd83050d751b177b43a7eb6a881e`.
Preserved R=k[x,y], I=(x,y), M=k and Tor_1=k^2. Replaced unsupported LES
and cotangent assertions with the complete finite complex
0->R->R^2->R->k->0, maps (-y,x) and (x,y), elementary coefficient proof
of exactness, finite-basis proof of projectivity, and explicit tensor
identifications. Added independent direct I/I^2 and I tensor k calculation.
The nonisomorphism is correctly stated for R-modules/k-vector spaces,
not abstract additive groups for every infinite field. Fixed-resolution
calculation is choice-free; DC only licenses balanced Tor interpretation.

Exact deps: `def-balanced-tor-bifunctor`,
`def-tor-by-resolving-the-right-module`,
`def-multivariate-polynomial-ring-by-iteration`, `def-projective-module`,
`thm-universal-property-of-module-tensor-products`, `def-dependent-choice`.
Removed the irrelevant cyclic-abelian Tor dependency. Full polynomial and
projective definitions read. Read Stacks 062D, complete Lemma 15.31.2 proof,
as authoritative Koszul context, but did not import that later theorem.

Canonical plan-order check: target on A365.055 at local index40;
same-page resolution definition index3 and balanced definition index15;
the other suppliers at A52, A104, A106 and A18, respectively. No forward
page or same-page edge introduced. Old judge replaced by local delegated
evidence. Targeted precheck and real renderer pass.

## thm-long-exact-tor-sequence-in-the-left-module-variable

Additional owner-assigned target, disposition A-R.
Before `fa127e77ed5983b9d36811a7db3adeed5a69e088e751c9d3fe56a455fcf46eb7`;
after `cdb54605ab02a2470c3b1cee94d7fa850ee017e1030947fba05ca28938c0eaa7`.
Added direct `def-dependent-choice` edge to the already DC-qualified
statement, and moved supplied resolutions into its contract. Full horseshoe
and comparison-independence supplier proofs read. The generic horseshoe
compatibility proposition only states uniqueness CONDITIONAL on a commuting
ladder, so it alone is NOT an existence supplier. Used instead the explicit
compatible-middle-map clause of
`lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts`,
whose full DC/projective off-diagonal construction was read. Added that
dependency, `thm-naturality-of-the-homology-connecting-morphism`, repaired
covariance, and `prop-tor-zero-is-the-tensor-product-in-either-construction`.
Retained balanced definition, horseshoe theorem and homology LES. All eight
suppliers published. No inference that mere comparison coherence by itself
proves the connecting square is left implicit.

Canonical order: target A365.055 index16; balanced/covariance/degree-zero
suppliers earlier on the same A page; compatible-middle-map lemma A365.049,
homology naturality A365.043, horseshoe A365.045, and DC A18. No forward
edge introduced. DC supplies construction choices; supplied split sequences
and commuting ladders retain choice-free exactness/naturality. Old judge
removed, delegated local verification recorded. Precheck/render pass.

## thm-equivalent-characterizations-of-semisimple-rings

Additional owner-assigned target, disposition A-R.
Before `e7a61ad109db8174921af76767f3f48c22f7693914fae741e857b8e6caaedbf8`;
after `62c35ae731940d231b85992be115aa1eb82ea872da74d2647d86bf723b035196`.
Added only `def-axiom-of-choice` to the eight retained published suppliers.
Read all eight full target interfaces: semisimple module complements and
subquotients explicitly assume AC; canonical free cover and the used
projectivity/splitting clauses are choice-free. Kept the existing AC
statement and located its actual uses in new fact L9. Expanded the direct-sum
of copies of a fixed semisimple decomposition and the equivalence cycle.
Explicitly retained the left-module-only scope: no right-module or injectivity
claim added or silently exported.

Full source recovery: browser timeout on Crawley-Boevey's institutional URL,
first terminal recovery succeeded. Read complete relevant §1.9 module
equivalence/subquotient arguments pp.7–8 and projective/split characterization
p.61 from the 2016–17 author notes. Their choice-free/AC distinction is
established by the local published suppliers, not assumed from the textbook.
Canonical target A108 index33, new AC supplier A5.3; all retained suppliers
are earlier pages or earlier same-page items. Old judge removed, delegated
local repair recorded. Targeted precheck/render pass.

## def-balanced-ext-bifunctor

Additional owner-assigned target, disposition A-R.
Before `e86df0e40dfd20674d3d0937c0afb474983df43aff0e62ac1aea3a6bce02c756`;
after `f9545e305cf614366bf77376d760bee24b1c683257432d4051fbd6135b827324`.
Read all four original suppliers and the relevant projective/injective
comparison and variance proofs. Retained the original explicit DC/enough
projectives/enough injectives/supplied-resolution-system hypotheses. Added
direct `def-dependent-choice` and the four published comparison-existence/
homotopy-uniqueness theorems. Removed the defective cocycle proposition
described below. Retained the three balance/independence/naturality suppliers.
Eight total deps, all canonically earlier: target A365.051 index19; same-page
balance/independence/naturality indices15–17; four comparison theorems at
A365.045; DC A18. No late A665 implication or later Tor item is used.

Definition now proves change-of-resolution identities and composition
directly on Hom cohomology: comparison composites lift the same identity,
homotopies give identical induced maps, reverse comparisons give inverses,
and the balance naturality square gives mixed coherence. Distinguished the
identity change maps c_(P,P), c_(I,I) from the generally nonidentity
balance map beta_(P,I). No uniqueness theorem for arbitrary delta-functor
morphisms is assumed. Fixed supplied-data calculations remain choice-free.
Read Weibel §2.7.4–2.7.6 pp.62–63 in full as source context. Old judge
removed; delegated local verification recorded. Definition precheck n/a,
real renderer pass.

## Confirmed outside-owned supplier defect: prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws

Initial finding: root was notified and authorized the definition's local
replacement. The cocycle item was not edited during that definition repair;
root subsequently assigned it for the repair recorded under its exact ID
below. Full statement and proof audited for the exact use:

- It states an unconditional cocycle result while its independence and
  naturality suppliers explicitly assume DC. Missing direct DC edge and
  statement hypothesis are confirmed.
- Its beta_(P,I) notation is the balance map from a projective presentation
  to an injective presentation, but it calls beta an identity when comparison
  data are unchanged. The identity law belongs to changes within a fixed
  presentation; beta between distinct presentation groups need not literally
  be an identity.
- Proof 1.1–2.1 appeals to equality of arbitrary Ext delta-functor morphisms
  because both are the identity in degree zero. Its declared independence
  lemma proves homotopy-independence of comparison lifts, not that uniqueness
  theorem. This is an exact proof-interface gap, not a whole-page finding.

Repair strategy: state DC and correctly typed change maps, use the four
earlier comparison theorems to prove identity/composite/inverse maps on Hom
cohomology directly, then use the augmentations' balance naturality square
for mixed changes. The complete local argument now in the repaired definition
shows feasibility, but this earlier cocycle proposition must NOT depend on
that later definition. Its required earlier suppliers already exist at
A365.045 and the preceding A365.051 balance/independence/naturality items;
no new pair or delta-functor uniqueness theorem is needed.

## Additional queue completion

All four additional assigned items are A-R, making eleven repaired owned
items across the two queues. Final targeted checks on the new queue: three
proof prechecks pass; the Ext definition is n/a; all four real renderer
checks pass. A read-only canonical plan-order traversal of the actual
dependency arrays of ALL ELEVEN repaired items reports zero forward or
unresolved supplier-order findings. This is a direct-edge ordering check,
not a semantic whole-closure certificate. No owned item uses the late
A665 AC=>DC theorem. The sole newly confirmed outside-owned Ext cocycle
defect is separately described above for root's canonical reconciliation.

## prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws

New owner-assigned target following the confirmed finding above: A-R.
Before `7044f9920a48c59641c01926184de34ce43bb62c958a3e5bf841658adcb4031a`;
after `11a6af9d0e0da754ad8324ae67f704ed7f60686f7267fa1a1e2560ff7f4541ac`.
Statement now DC-qualified with enough-projective/injective and supplied-data
hypotheses, correctly typed comparison maps c_(P,P') and c_(I,I'), identity,
composition and inverse laws, and the mixed square
c_(I,I') beta_(P,I)=beta_(P',I') c_(P,P'). The balance map itself is not
misidentified as a literal identity. Proved the laws directly from comparisons
and Hom homotopies; removed the absent arbitrary delta-functor uniqueness
inference. Natural mixed coherence is retained, not weakened.

Exact deps: balance theorem, balance-independence lemma, balance-naturality
proposition, projective comparison existence and homotopy uniqueness,
injective comparison existence and homotopy uniqueness, and
`def-dependent-choice` (same eight as the separately repaired definition).
All supplier proofs already read for that definition audit. Canonical order
checked FIRST: target A365.051 index18; balance/independence/naturality
indices15–17; comparison theorems A365.045; DC A18. No dependency on the
later balanced Ext definition or A665 theorem. Old judge removed, delegated
local verification recorded. Targeted precheck and real renderer pass.

## lem-subgroups-of-free-abelian-groups-are-free

Disposition: repaired locally; no independent judge. Before SHA-256
`bdca8c5eafde515efa72170223c53a7c289b8acfc20881f21f6358f524e33a40`;
after `121562bff25b72376a2c46db256ddff839694b5501b4ac2f223bfb1e41d288b1`.
Changed only the target and this report. Preserved the full arbitrary-rank
AC theorem, replacing the abbreviated filtration/splitting argument by a
coordinate proof: well-order the supplied basis, take each initial-segment
coordinate image in Z, choose its positive-generator lift simultaneously,
prove spanning by well-ordered induction and independence by the largest
coordinate in a finite relation. The zero and empty cases are explicit.
Given the well-order and lift family, the remainder is choice-free; no
transfinite recursive choice, general PID theorem, or splitting import.

Exact five deps, read at their used clauses: free-module standard basis;
`lem-subgroups-of-z-are-cyclic`; `def-axiom-of-choice`;
`thm-well-ordering-theorem`; `thm-transfinite-induction`. Canonical order
checked before editing: target A365.053 index36; suppliers A104, A26,
A5.3, A243 index15, A243 index3 respectively, all earlier. Removed the
finite-free PID edge. Targeted precheck and renderer pass; obsolete judge
replaced by honest owner-delegated local verification. Direct-consumer
candidate: the immediately following global-dimension-one theorem, already
assigned for separate audit; this is not a blanket defect designation.

## thm-the-integers-have-global-dimension-one

Disposition: repaired locally; no independent judge. Before SHA-256
`75485e594ed09e6f8dfa25208ee9c71992ee6717525cf8bac612ba5c5690cfcf`;
after `9619dfd3aa6ad5002e5a40d85c054729df2d4329ebbd0fd926bde22c79c4210b`.
Changed only the target and this report. Both global dimensions still equal
one under AC. The canonical free cover is choice-free; its kernel is free
by the preceding repaired subgroup lemma, and free projectivity uses the
explicit AC supplier. Thus each group separately has a length-one
projective resolution; no global family of resolutions is selected.
The lower bound is proved directly for every n>1: projectivity of Z/n
would split Z onto Z/n, but the image of [1] would be n-torsion in Z and
therefore zero. This part is choice-free. Explicitly transferring the
integer action preserves all lifting diagrams and resolution lengths,
proving the right-hand assertion too. The obsolete Ext calculation and
Ext-dimension-characterization imports were removed: no AC-to-DC bridge
is needed, and no later supplier has been substituted.

Exact seven deps: global-dimension definition; projective-dimension
definition; subgroup-of-free-abelian lemma; canonical free-cover corollary;
free-projectivity-with-choice-boundary theorem; projective-module
definition; AC definition. Full used clauses read. Canonical order checked
before editing: target A365.053 index37; first three suppliers same page
indices31,25,36; remaining suppliers A104 indices4,17,16 and A5.3 index30.
All are earlier. Source: Weibel's full Chapter4, section4.1 definitions and
Example4.1.4, printed pp91–92, author text hosted by MIT; source metadata
corrected to that chapter. The local lower-bound proof is supplied rather
than importing the example's references. Targeted precheck and renderer
pass; obsolete judge replaced by owner-delegated local evidence.

This completes the three newly assigned suppliers (cocycle, subgroup,
global dimension), bringing the repaired targets in this report to fourteen.
