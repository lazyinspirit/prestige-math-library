# Published Tor follow-ups — Astra-2

Date: 2026-09-09. Owner-authorized local audit/repair, not independent judging.
Read the full Alpha-c Step-3 scaffold review and latest batch-5 notes. Shared
ledger/plan/manifest amendments belong to the parent; only assigned items and
this report are edited. Each receipt concerns the stated proof route, not an
unexamined transitive-closure certificate.

## prop-torsion-free-abelian-groups-are-flat

- Disposition: **A-R**, reopened choice-free claim repaired locally.
- Home: `tor-flatness-and-global-dimension`.
- Before SHA-256: `35ecac79b6c6626a5cb1e0d005a0b0d6ae29d9f39e65099cadc7ef9631b5c27f`.
- Final after SHA-256: `59a4783adfb5136a410bdb2d95c60a45ce27f3d33de7ea474bb8f5f2de3f1ad7`.
- Defect confirmed: the former finite-free PID supplier's actual invariant-
  factor route imported AC, despite this proposition's choice-free proof claim.
- Complete local repair: prove every subgroup of finite-rank Z^r free by
  finite induction, projecting to a last-coordinate subgroup dZ and splitting
  off one lift of its least positive generator. For a finitely generated
  torsion-free H choose a maximal independent sublist of its finite generating
  list, clear the finitely many dependence denominators, and inject H by
  multiplication into the free group on that sublist. Then apply the proved
  finite-rank subgroup argument. Retain the finite tensor-relation witness
  argument and right exactness. No infinite choice or general PID structure
  theorem is used.
- Exact final deps, all published and read in full for this audit:
  `def-left-and-right-flat-modules-over-an-arbitrary-ring`,
  `thm-division-algorithm-in-z`, `thm-well-ordering-principle`,
  `def-tensor-product-of-modules-by-generators-and-relations`,
  `thm-right-exactness-of-tensor-products`. Natural-number well ordering is
  not the AC-equivalent well-ordering theorem for arbitrary sets. Removed
  `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`.
- Strategy: `direct`; finite-rank integer subgroup splitting followed by
  finite tensor-relation witnesses. Familiar elementary integer/module
  argument; no new external full-text research required for this item.
- Checks: item-scoped precheck **PASS** after canonical phase formatting;
  item-scoped rendercheck **PASS**. Retained the honest same-day delegated
  local-verification stamp, not an independent judge stamp.
- Changed files: target and this report. Parent must synchronize this exact
  dependency list/strategy in canonical plan and current batch manifest; no
  new supplier or extra pair is needed. All choice-free consumers may retain
  that clause; no blanket AC propagation is required from this repair.
- Final readability/type cleanup renamed the temporary finite-free subgroup
  from B to G and the generic tensor test group from A to T, so neither
  shadows the fixed injection A -> B after canonical phase reordering.
  Dependencies/strategy/statement unchanged; precheck/rendercheck rerun and
  **PASS**. This supersedes interim hash
  `b2c47cbeb4ea607f103394d9d0e37411702219f7b36226f5239924934fcb4542`.

## thm-higher-tor-over-the-integers-vanishes

- Disposition: **A-R**. Home: `tor-flatness-and-global-dimension`.
- Before: `89da9b23166415ae2a86e9cb8143c61ad6350552395c4865a476b9d140e3ceb1`.
- Final after: `d082cba6b166e8f8fd920c4aafe389570dda88d99031c2461f3cc50b129c184f`.
- Confirmed missing AC in the existence proof. Full direct suppliers read.
  The old global-dimension supplier and its abelian-subgroup ancestor have
  separate incomplete declarations; parent notified, no unassigned changes.
  Removed that route. The statement now exports AC-qualified length-one
  projective-resolution existence, proved from the canonical free cover,
  elementary integer division, a complete local well-ordered-coordinate
  subgroup proof, and AC free projectivity. For a supplied short resolution the
  zero-high-degree homology calculation is exported separately without AC.
  AC implies DC through the actual published implication theorem, so the
  balanced comparison interface is legally used under AC.
- Final deps, all published: `def-balanced-tor-bifunctor`,
  `def-tor-by-resolving-the-right-module`,
  `cor-every-module-is-a-quotient-of-a-free-module`,
  `def-free-module-on-a-set-and-standard-basis`,
  `thm-well-ordering-theorem`, `thm-transfinite-induction`,
  `thm-free-modules-are-projective-with-choice-boundary`,
  `thm-division-algorithm-in-z`, `thm-well-ordering-principle`,
  `def-axiom-of-choice`,
  `def-dependent-choice`, `thm-recursion`.
- Strategy `direct`: canonical length-one resolution; zero tensor terms;
  explicitly licensed balance. No unfamiliar external mathematics required.
- Precheck and rendercheck **PASS** after mechanical canonical formatting.
  Stale judge/audit stamps replaced by honest same-day local verification.
- Target/report changed only. Parent should sync strengthened statement,
  exact deps and strategy into plan/manifest. The AC-qualified integer
  conclusions are retained; no extra pair or unpublished supplier used.
- Receipt correction: the interim hash
  `5f54b8ac07485dea4103eea72cf82d20836e0e115bca09c3bc1189bd35d517de`
  used the repaired arbitrary-rank PID theorem, but the parent detected that
  its HA-11 home comes after HA-10. That forward edge is removed completely.
  The local proof now constructs positive coordinate generators, chooses
  lifts simultaneously under AC, proves spanning by well-ordered induction
  using finite supports (including limit positions), and proves independence
  at the greatest nonzero coordinate. All three newly declared foundational
  suppliers were read in full. Precheck/rendercheck were rerun and **PASS**
  at the final hash above. The integer-dimension consumer uses only the
  unchanged exported short-resolution clause and needs no further file edit.

## prop-the-integers-have-weak-and-global-dimension-one

- Disposition: **A-R**. Home: `tor-flatness-and-global-dimension`.
- Before: `9b4a2d7bedeb4a37666be2d48cd5b45a113eaf8ef45cc76382efe45a4bb1d700`.
- After: `a2dc525023715a6ddb30507ea39e1f66512785991dbe0e26d193f01f0e6c8c12`.
- Added AC to the four left/right dimension conclusions. The previous proof
  also had undeclared Tor/Ext nonzero premises. Replaced those lower bounds
  by the explicit tensor of multiplication by n with Z/n, which is zero on
  a nonzero group. This proves nonflatness and, by projective-implies-flat,
  nonprojectivity, separately exported choice-free. Upper bounds use the
  preceding repaired theorem's explicit short-resolution existence clause.
- Full final published deps, all applicable clauses/proofs read:
  `thm-higher-tor-over-the-integers-vanishes`,
  `lem-projective-modules-are-flat-over-an-arbitrary-ring`,
  `def-left-and-right-global-dimension-of-a-ring`,
  `def-left-and-right-weak-global-dimension`,
  `def-projective-dimension-of-an-object`,
  `def-flat-dimension-of-a-module`,
  `def-tensor-product-of-modules-by-generators-and-relations`,
  `def-axiom-of-choice`.
- Removed `thm-the-integers-have-global-dimension-one` and the general PID
  flatness criterion. Strategy `direct`: short-resolution upper bounds and
  an explicit multiplication-n tensor obstruction. No external research
  needed for this elementary calculation.
- Precheck/rendercheck **PASS**. Honest local verification replaces old
  judge/audit stamps. Only target/report changed. Parent should synchronize
  contract/deps/strategy; the added choice-free Z/n clause can supply later
  counterexamples without importing the AC dimension assertion.

## prop-semisimple-rings-have-vanishing-positive-tor-and-ext

- Disposition: **A-R**. Home: `tor-flatness-and-global-dimension`.
- Before: `fc32e21d41f254997baf9bc9ea40c30bf03db5fe3f9188fdbc7feadcc6d8830d`.
- After: `b0543c83971e244e90b136819fa435842500f4dd5889b3ce4ee03f79abc607f4`.
- Full target and its direct suppliers read, including the semisimple
  characterization's complement/quotient ancestors and Wedderburn–Artin's
  finite-simple-decomposition, Schur and regular-endomorphism ingredients.
  Confirmed missing AC plus an invalid inference from left-only module
  characterization to right projectivity and both-sided injectivity.
- Repair states AC, all left/right modules projective and injective, Tor and
  both left/right Ext vanishing. Nonzero R has Wedderburn matrix factors;
  taking opposites and transposing identifies R^op with matrix factors over
  the opposite division rings, so it too is semisimple. Apply the left
  characterization to both rings, then injective characterization to their
  split short exact sequences. The zero ring is treated separately. Identity
  resolutions are canonical, and their tensor/Hom complexes vanish in
  positive degrees. AC implies DC by the actual implication theorem, making
  both balanced interfaces legal. The supplied degree-zero calculation is
  separately described as choice-free, not falsely asserting choice-free
  semisimple consequences.
- Exact final published deps: `def-balanced-tor-bifunctor`,
  `thm-equivalent-characterizations-of-semisimple-rings`,
  `thm-wedderburn-artin-theorem`, `def-opposite-ring`,
  `thm-injective-module-characterizations`, `def-balanced-ext-bifunctor`,
  `def-tor-by-resolving-the-right-module`,
  `def-ext-via-a-projective-resolution-of-the-first-variable`,
  `def-ext-via-an-injective-resolution-of-the-second-variable`,
  `def-axiom-of-choice`,
  `def-dependent-choice`, `thm-recursion`.
- Source actually read: Crawley-Boevey, *Noncommutative algebra*, full
  relevant §§1.1–1.2 and §1.9, printed pp.1–2 and 7–9, institutional PDF
  https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf.
  The original's AC convention and opposite-ring/Artin–Wedderburn argument
  were checked; no unseen right-handed theorem is cited.
- Strategy `direct`: opposite matrix factors, split sequences on both sides,
  injectivity, and identity resolutions. Precheck/rendercheck **PASS**; old
  judge/audit stamps replaced honestly. Target/report only changed.
- Parent notified of two separate metadata-only supplier findings, outside
  this agent's authority: semisimple-ring characterization states AC but
  omits `def-axiom-of-choice`; balanced Ext definition states DC but omits
  `def-dependent-choice`. Their actual contracts explicitly state the
  strengths used here; parent owns any canonical supplier repair. No loss of
  handedness/injectivity conclusion and no new pair. Sync target statement,
  dependencies and strategy in plan/manifest.

## fs-flat-modules-have-projective-dimension-zero

- Disposition **A-R**. Home: `tor-flatness-and-global-dimension`.
- Before: `a0a33eb32240d1186b3fe359f2d56d6b5bbc6450b36baa90130cc461e349cc6e`.
- After: `9275f58211b7697e896257b0590b1d2059965792071ff24ebcdf9a59ebd90733`.
- Confirmed undeclared Q-flatness, Hom(Q,Z)=0 and projective-is-free
  premises. Full local refutation now uses repaired choice-free torsion-free
  flatness; proves Hom(Q,Z)=0 by divisibility; and shows a hypothetical
  projective section of the canonical free cover Q would have every integer
  coordinate zero. No arbitrary projective-is-free theorem or AC is used.
  The precise Q counterinstance and exclusion of a length-zero resolution
  are now exposed in the statement.
- Final deps, all published and fully read:
  `prop-torsion-free-abelian-groups-are-flat`,
  `def-projective-dimension-of-an-object`, `def-projective-module`,
  `cor-every-module-is-a-quotient-of-a-free-module`,
  `def-free-module-on-a-set-and-standard-basis`.
- Strategy `direct`: rational divisibility and coordinate-zero canonical
  cover obstruction. Familiar elementary algebra; no external source read
  needed. Precheck/rendercheck **PASS**; honest local verification replaces
  stale judge/audit stamps. Target/report changed only. Parent should sync
  statement/deps/strategy. No choice strength needs propagating from this
  counterinstance, and it is a valid local supplier for the following example.

## ex-a-flat-nonprojective-module

- Disposition **A-R**. Home: `tor-flatness-and-global-dimension-examples`.
- Before: `26011d30be1d683e73a29e12953c19c00f61cc69dc529d033e89ed4f79828278`.
- After: `6147f14814c9d32c2ee13d60c0ddc02d5ab0455bc1c6760c105d2f389cde4dfe`.
- Full proof contained the same unproved projective-is-free/Hom(Q,Z)
  assertions as the preceding false statement. Replaced them by that now
  proved, explicitly choice-free Q counterinstance, and declared the exact
  torsion-free-flat theorem. No general PID structure theorem remains.
- Final published deps: `prop-torsion-free-abelian-groups-are-flat`,
  `fs-flat-modules-have-projective-dimension-zero`; both full proofs read.
  Strategy `direct`, actual Q premise from the earlier proved counterinstance.
- Precheck/rendercheck **PASS**. Honest local verification replaces stale
  stamps. Target/report only changed; sync statement/deps/strategy. No new
  external reading or missing supplier is needed for this direct consumer.

## fs-tor-one-vanishes-only-when-one-module-is-projective

- Disposition **A-R**. Home: `tor-flatness-and-global-dimension`.
- Before: `8b39fbf9952e93a2384fa38a06feb5841cbd08bc59cc6cb14cafa3daf9715244`.
- After: `9c43caab9f612f78f90f09e543e4b3a2dbfac118fd2eb9c3ec71e4f768c5945f`.
- Confirmed unsupported nonprojectivity of both Q and Z/2 and an indirect
  flatness/handedness argument. The repaired proof uses the exact preceding
  Q and Z/n choice-free clauses. It explicitly resolves the left factor
  Z/2 by rank-one free modules with differential 2; tensoring with Q gives
  multiplication 2 on Q and zero H_1. This finite resolution and both
  nonprojectivity facts require no AC. The usual balanced notation is
  separately licensed under AC, which supplies a Q resolution and implies DC.
- Exact final published deps: `fs-flat-modules-have-projective-dimension-zero`,
  `prop-the-integers-have-weak-and-global-dimension-one`,
  `thm-free-modules-are-projective-with-choice-boundary`,
  `def-tor-by-resolving-the-left-module`,
  `def-tensor-product-of-modules-by-generators-and-relations`,
  `def-balanced-tor-bifunctor`, `thm-higher-tor-over-the-integers-vanishes`,
  `def-axiom-of-choice`,
  `def-dependent-choice`, `thm-recursion`.
  Applicable full proofs already read; the two same-page counterinstance
  suppliers precede this item in the canonical plan inventory.
- Removed the misapplied left-flatness-criterion edge. Strategy `direct`:
  explicit rank-one cyclic resolution and the proved two nonprojective
  factors. Precheck/rendercheck **PASS**; honest local stamp installed.
  Target/report only changed. Parent should sync the choice-separated
  statement and exact deps/strategy. No new external reading or supplier.

## ex-localization-is-flat-and-has-vanishing-positive-tor

- Disposition **A-R**. Home: `tor-flatness-and-global-dimension-examples`.
- Before: `07fdc1f3592b44364069d4d67eba0805fc3efd8f62d05d23f9713729644ffcd1`.
- After: `1cf43365ccd47c590febb8ced52522525e69d626ff954b406b4323183f34d6e6`.
- Confirmed unproved localization-exactness/tensor-isomorphism steps and
  inference of every positive Tor degree from a Tor-one criterion. Repaired
  the actual commissioned Z[1/2] example directly: check its defining fraction
  equivalence embeds it in Q, use choice-free torsion-free flatness, and for
  any supplied projective resolution factor each differential through its
  image. Exact tensoring identifies kernel and boundary in every positive
  degree. The calculation is explicitly choice-free; only existence and the
  usual balanced interface use AC (and its proved implication to DC).
- Exact final published deps: `def-multiplicative-subset-and-localisation`,
  `prop-torsion-free-abelian-groups-are-flat`,
  `def-left-and-right-flat-modules-over-an-arbitrary-ring`,
  `def-tor-by-resolving-the-right-module`, `def-balanced-tor-bifunctor`,
  `thm-higher-tor-over-the-integers-vanishes`, `def-axiom-of-choice`,
  `def-dependent-choice`, `thm-recursion`.
  All full direct suppliers were read. The general localization-exactness
  and localization-flatness theorems were inspected but are not used; no
  unrelated clause of them is certified here.
- Strategy `direct`: fraction embedding, choice-free flatness, exact
  kernel/image tensor calculation in every degree. No new external reading
  required for this elementary specialization. Precheck/rendercheck **PASS**;
  honest local stamp replaces old judge/audit. Target/report only changed;
  parent should sync choice-separated statement/deps/strategy.

## ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers

- Disposition **A-R**. Home: `tor-flatness-and-global-dimension-examples`.
- Before: `20debac84c83288ce6414bd1a8bad1aeb0632cb8829cd68dd2ee809b2f060257`.
- After: `4b570eed0bf2bb4adbedba7cfaf6d8d04adb3d26d071bd0d61f733a6813d630a`.
- Confirmed missing AC for vector-space bases and integer dimension, plus
  unproved Tor/Ext lower-bound assertions. Repair uses the earlier basis
  corollary (order 74), free-projectivity theorem (order 104), projective
  flatness, and exact dimension definitions. Integer values use the repaired
  same-A-page theorem with its direct lower bound. All four left/right
  dimensions are stated. The supplied finite-basis clause is separately
  choice-free; all-module claims explicitly assume AC.
- Final published deps: `prop-the-integers-have-weak-and-global-dimension-one`,
  `cor-every-vector-space-has-a-basis`,
  `thm-free-modules-are-projective-with-choice-boundary`,
  `lem-projective-modules-are-flat-over-an-arbitrary-ring`,
  `def-left-and-right-global-dimension-of-a-ring`,
  `def-left-and-right-weak-global-dimension`,
  `def-projective-dimension-of-an-object`,
  `def-flat-dimension-of-a-module`, `def-axiom-of-choice`.
  Full direct suppliers and the basis-extension ancestor were read. The
  later HA-11 field-projectivity item was inspected but is not used.
- Strategy `direct`: basis/free projectivity, zero-length resolutions and
  exact dimension suprema; proved integer comparison. No new external
  source was needed. Precheck/rendercheck **PASS**, stale verification
  replaced honestly. Target/report only changed; sync statement/deps/strategy.

## Final canonical-order correction and receipt status

The parent's second order check found that the published theorem
`thm-choice-implies-dependent-implies-countable-choice` is on the later
page 665, not an earlier Foundations prerequisite. Its earlier use in the
four repaired Tor consumers was therefore an illegal forward edge, even
though its mathematical implication was correct. That edge is removed
from all four target files. Each now proves the needed implication locally:
AC selects a successor s(x) for every point of an entire relation; the
earlier `thm-recursion` iterates this self-map from the prescribed initial
point, exactly establishing `def-dependent-choice`. Both earlier suppliers
were read in full. All wording above referring to the original implication
theorem is historical and is superseded by this correction; the dependency
lists and final hashes in the individual headings are updated.

The four superseded hashes from that correction were: higher-Tor
`33a22339dd5fb4db117758c465c2116bf58735a07a5134c013498986b23f107c`;
semisimple `4e58c8e47e0f28f37a130858cbc0291c7f80ca53ce6237fed21511d03c1c7b93`;
two-nonprojective-factor refutation
`31b5f6d199cb3fc600607e0608ef62db4cc03b12f150ee14b5d3ffe9141d0da8`;
localization `d99b56e81a8e61874601765d4b3e3dd5da233d517cc765e13b3d95ab3df6bd33`.
All four prechecks and renderchecks were rerun and **PASS** after the
local implication replacement. Their original pre-repair hashes remain
unchanged in the individual receipts.

Parent-coordinated suppliers subsequently repaired by Astra-3:
`thm-equivalent-characterizations-of-semisimple-rings` now declares AC
and expands the exact direct-sum/complement use (reported supplier hash
`62c35ae731940d231b85992be115aa1eb82ea872da74d2647d86bf723b035196`);
`def-balanced-ext-bifunctor` now declares DC and has its coherent comparison
route locally repaired. These are not edits by this agent. The target's
separate right/opposite and injectivity bridge remains necessary and remains
present.

Final bounded direct-edge check: **9 targets, 72 actual direct dependencies,
0 errors**. Checked canonical page order, same-page item order, inclusion
in the current page-requires closure, and declared coverage of every body
wikilink. The canonical plan has an empty item inventory for
`construction-of-the-natural-numbers`; its published library header explicitly
places `thm-recursion` and `thm-well-ordering-principle` there, at order 6.
This actual-header fallback resolved those six repeated edge occurrences;
none was silently treated as missing or assigned a guessed home. All nine
item prechecks and renderchecks passed together, and the last variable-name
cleanup in the torsion-free proof passed both checks again. These are bounded
local checks, not an all-ancestor certification. All nine dispositions are
A-R; no assigned item is deferred or left unaudited. Parent remains the
single writer of shared publication receipts, plan, manifest and engine state.
