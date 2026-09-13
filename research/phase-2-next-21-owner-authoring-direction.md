# Owner authoring direction — phase-2-next-21

**Batch-5 contract pointer closed (16:53 AEST):** The retry removed the stale
`lem-natural-higher-diagonal-approximations-on-singular-chains` F2 use of
nonexistent step 5.1. Independent strict validation now passes all 64
Batch-5 contracts with zero errors and warnings. The four RP sign-system
follow-ups below remain open.

**Live RP sign-system proof review (16:46 AEST):** Group-b retry has written
the correct split $n=1$ universal-$\mathbb R$ and $n\ge2$ antipodal-cover
calculations, and the orientation comparison now handles odd dimensions.
Two exact textual defects remain before certification. In step 1.1, the
explanation after $1+(-1)^k g$ says the antipodal gluing preserves face
orientation for **odd** $k$ and reverses it for **even** $k$; the displayed
coefficient has the opposite parity, so swap those words or delete that
explanatory clause. In the Statement's `\begin{cases}` table, put an
explicit `\\` row separator after `$k=0$`; KaTeX currently parses the
first two cases as one row. Then refresh the Batch-5 contract, item decision
and author check after focused precheck/rendercheck.
The $n\ge2$ assertion that $S^n\to\mathbb{RP}^n$ is the universal cover
also spends simple connectedness of $S^n$. Add the published A-level
`thm-higher-dimensional-spheres-are-simply-connected` as a direct fact and
dependency (or prove it locally) and sync the manifest/contract. This is a
load-bearing input to the group-ring chain argument.
The new $n=1$ edge/orientation proof is materially locally constructed; under
`SCHEMA.md`'s local-argument provenance rule, change the item's
`provenance.proof` from `literature-derived` to `ai-altered`, and synchronize
the Batch-5 manifest (and any coverage/contract provenance field that copies
it). Retain Davis–Kirk as the source for the general sign-system calculation.

**Batch-5 cyclic repair closed (16:44 AEST):** The retry wrote the finite
regular $Q_N$ model and comparison, closing the domain gap on focused
mathematical review. It reconciled proof steps and contract citations; focused
precheck, real rendering and strict contract pass. The RP^1 sign-system
follow-ups above remain open.

**Independent Batch-7 missing premise (16:27 AEST):**
`thm-differential-second-bianchi-identity` proof 1.1 replaces
$[A,B]$ by $\nabla_A B-\nabla_B A$, a Levi–Civita torsion-free identity.
The present facts/deps omit `def-levi-civita-connection`; add that direct
supplier and cite it at the replacement, then align Batch-7 manifest,
contract and decision. The differential-Bianchi cancellation itself is sound.

**Independent Batch-8 unused-edge audit (16:26 AEST):**
`thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup`
still declares/cites `prop-tangent-space-of-a-regular-level-set-is-the-kernel`
as [F2], even though step 3.1 explicitly explains why that regular-value
theorem is inapplicable to a general homomorphism. The proof uses the
constant-rank theorem instead. Remove the unused [F2], its dependency and
terminal citation, then reconcile Batch-8 manifest/contract/decision. The
kernel proof's mathematical construction remains sound.

**Independent Batch-7 choice-interface audit (16:23 AEST):**
`thm-first-bianchi-identity` now derives Jacobi locally and no longer uses the
defective published vector-field Lie-algebra theorem; the derivation itself
is sound. Its remaining dependencies still reach the published
`def-smooth-vector-field-as-a-tangent-bundle-section`, whose definition
explicitly assumes $\mathrm{AC}_\omega$ to give $TM$ its canonical smooth
structure. Exact paths include first Bianchi $\to$
`prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components`
$\to$ that definition, and first Bianchi $\to$
`def-lie-bracket-of-smooth-vector-fields` $\to$
`def-action-of-a-vector-field-on-smooth-functions` $\to$ that definition.
Group-a lead should declare $\mathrm{AC}_\omega$ in the theorem's statement
and boundary/choice proof, add `def-countable-choice` as a direct dependency
and cited fact, and propagate the qualified hypothesis to its consumers,
unless it can supply an already unconditional local-field interface. This is
assumption accounting, not a refutation of the displayed Bianchi algebra.
Reconcile Batch-7 manifest, contract, decision and downstream checks.
The direct draft consumer `thm-algebraic-symmetries-of-the-riemann-tensor`
uses First Bianchi as [F3] and must carry the same qualified premise. A
bounded direct fanout from that tensor-symmetries result includes
`thm-sectional-curvatures-determine-the-riemann-tensor`,
`prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three`,
and `thm-contracted-second-bianchi-identity`; Schur then consumes the
sectional/contracted chain. Audit and propagate only actual load-bearing
uses, rather than leaving an unqualified downstream theorem.
The alternative is a fully supplied unconditional local-field interface,
which would require replacing the current conditional published definitions
and their proof uses; do not claim that route without writing it.
A separate Batch-10 flow path is also load-bearing: the
`thm-liouville-arnold-action-angle-theorem` uses the published
`cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` to
globalize Hamiltonian flows; that corollary passes through
`thm-compactly-supported-vector-fields-are-complete` to the same
$\mathrm{AC}_\omega$-conditional smooth-field definition. The full-lattice
lemma and compact-regular-fibres-are-tori theorem use that flow path too.
These three Batch-10 statements currently omit the choice premise; group-a
lead should propagate it, reconcile their contracts/manifests/decisions,
and then refresh dependent author checks. The auditor verified exact uses;
avoid a speculative mass edit of unrelated items.

**Independent Batch-5 cyclic-power domain gap (16:18 AEST):**
`lem-finite-cellular-cyclic-squares-cartan-and-basis-action` defines and proves
`Sq_cyc` only on finite oriented **regular** cell complexes, but step 5.1
applies it to the one-cell-per-degree finite skeleta of $BC_2\simeq
\mathbb{RP}^{\infty}$, which are not regular. Its cited equivariant-power
supplier has the same regular-domain restriction; the cyclic-resolution
supplier gives an algebraic basis, not a regular geometric model. This is a
confirmed proof-interface gap even though the binomial formula is correct.
Group-b retry should construct a finite regular model for each finite degree
bound (for example, a verified triangulation/subdivision of a sufficiently
large finite projective space), identify its degree-one generator and powers
with $[w_j]$ under the comparison, and then apply the established
Cartan/top-square operations on that regular model. Reconcile this lemma,
its Batch-5 manifest/contract/decision/author check, and dependent Adem
certification after the repair. The independent auditor's exclusive report
has the exact supplier check.
One fully local finite model is available: take the boundary $K$ of the
$(N+1)$-cross-polytope, whose faces use at most one of each antipodal vertex
pair. In the barycentric subdivision, a simplex is a strict chain of faces.
The antipodal quotient is an abstract simplicial complex: after choosing the
maximal face up to sign, each lower face orbit has at most one representative
inside it, so no duplicate chain simplices occur. Its realization is
$S^N/(\pm1)=\mathbb{RP}^N$. Choose $N>r+j$, identify the restricted $t$
and its powers through the projective-space homeomorphism and the existing
finite/infinite projective cohomology comparison, then evaluate the operation
on this finite regular complex. The lead should verify and write these
comparison details, not merely cite an unspecified triangulation.

**Independent Batch-5 proof audit (16:15 AEST):**
`ex-sign-local-system-on-real-projective-space` needs an $n=1$ correction.
Its statement calls $g$ “the nontrivial element” of
$\pi_1(\mathbb{RP}^n)$ for all $n\ge1$, and step 1.1 presents the lift to
$S^n$ as the standard group-ring calculation. But
$\mathbb{RP}^1\cong S^1$ has fundamental group $\mathbb Z$; the sphere map
is a double cover, not the universal cover. Group-b retry owns the item and
should state that for $n=1$ the sign representation sends an integer generator
to $-1$, compute the one-cell twisted differential directly as $g-1$ (hence
$\pm2$), and reserve the stated $S^n$ universal-cover argument for $n\ge2$.
The displayed homology table remains correct. Reconcile its Batch-5 manifest,
contract, final-item decision, and author check after the proof edit.
Step 3.1 also calls $S^n$ the orientation cover for all $n\ge1$; that is
false for every odd $n$, since $\mathbb{RP}^{2m+1}$ is orientable and its
orientation double cover is disconnected. For $n\ge2$, call $S^n\to
\mathbb{RP}^n$ the universal antipodal cover and use the deck map's degree
$(-1)^{n+1}$ to compute the orientation character. Handle $n=1$ by a direct
circle-orientation check.

**Independent Batch-8 dependency audit (16:14 AEST):**
`lem-no-small-subgroups-in-a-lie-group` has a sound unconditional coordinate-
squaring proof, but its YAML deps and [F2] still cite three unused
`AC_omega`-bearing exponential/logarithm results. Step 4.1 explicitly says
the proof avoids them. Group-a lead should delete [F2] and those three deps,
remove [F2] from step 4.1, retain the actually used
`def-differential-of-a-smooth-map`, then synchronize Batch-8 manifest,
contract, and decision. This preserves the unconditional theorem and prevents
an artificial choice requirement from propagating to consumers.

The first strict pass over the newly generated Batch-8/10 contracts found
six Batch-8 errors (two undeclared cited deps; four unanchored Hopf-remark
boundary records) and three Batch-10 errors (two unmapped Lagrangian-germ
steps; one uncontracted citation). These are current reconciliation work,
not completed certification.

**Helper a-1 handoff and group-b retry (16:02 AEST):** The resumed original
Sol xhigh helper a-1 exited successfully after writing all 33 assigned
Lie-subgroup files. Its final result records 31/31 proof-bearing prechecks,
33/33 real renders, no shared-file edits, and no remaining mathematical gap.
The exclusive item-file reservation is over; group-a lead may now amend those
items and shared Batch-8 artifacts. The original group-b lead wrote a
complete five-pair report and green Batches 5/6/9 author checks, but its CLI
dispatch ended `exit=1` when Sol returned “Selected model is at capacity”
twice at finalization. The controller has automatically launched a fresh
Sol xhigh group-b dispatch covering Batches 5/6/9; do not duplicate or
manually count the failed receipt as coverage. Remaining group-a depcheck
errors are the two Euclidean B-example replacements below.
The group-b retry should treat the original authored files and
`research/phase-2-next-21-step3b-b.md` as a checkpoint, verify all three
current author-check fingerprints, refresh the fourteen stale Batch-5
baseline receipts listed below after reading their final items, confirm the
cross-batch input/ledger and plan handoff, and exit successfully. The two
Batch-5, one Batch-6 and one Batch-9 post-baseline local suppliers are for
the driver's generated-item certification after that successful receipt.

**Great-sphere replacement edge (15:59 AEST):** Group a's new normal-frame
proof successfully removed the great-circle B example, but the current item
`ex-a-great-sphere-is-totally-geodesic` now cites a *different* forbidden B
example, `ex-the-euclidean-levi-civita-connection`, as [F3]. Full depcheck
therefore still has three errors. The exact A-level replacement is local:
Euclidean Cartesian metric coefficients are constant `g_ij=delta_ij`; cite
`prop-christoffel-formula-for-the-levi-civita-connection` (and, if needed,
`thm-fundamental-theorem-of-riemannian-geometry`) to compute every Christoffel
symbol zero, hence `nabla^E_X a=0` for the displayed constant normal vectors.
Keep the existing A induced-connection and Weingarten suppliers and the
finite-basis argument. Group a lead owns item, manifest and contract changes;
this is not a new source or scope issue. The other two remaining edges are
the mean-curvature remark and cotangent tautological form.

**Second replacement edge / cotangent clear (16:00 AEST):** Group a's revised
`rem-mean-curvature-and-minimal-submanifolds` also replaced the great-circle
B dependency with the forbidden B `ex-the-euclidean-levi-civita-connection`.
Full depcheck now has exactly **two** errors, both to this Euclidean B example
from the great-sphere item and mean-curvature remark. Apply the same local
A-level constant-Cartesian-metric/Christoffel calculation in each, or create
one fully proved A-level supplier before both B consumers. The cotangent
tautological form has now been correctly grounded in the A-level canonical
cotangent-manifold theorem and no longer appears in depcheck. Group a must
reconcile the two Euclidean replacements in manifests/contracts before its
author gates.

**Product-curvature repair landed (15:55 AEST):** Group a removed the B-page
product-metric edge from `ex-curvature-of-a-riemannian-product`. Owner read the
complete revised example: it defines the block metric from the A-level
product splitting, checks positive definiteness, computes pure/mixed
Christoffel symbols and curvature, and checks the positive mixed-plane Gram
denominator. The item-level proof is sound and choice-free; lead must align
manifest/contract/decision. Full depcheck now has **three** current-run
errors: great-sphere geodesicity, mean-curvature remark, and cotangent
tautological form. Earlier four/five-error counts below are historical.

**Current author gates (15:55 AEST):** Group b's refreshed author-check
artifacts for Batches 5, 6 and 9 each have `ok:true` across precheck, real
rendering, content policy and strict proof contracts. Its Batch-6 final-item
checker has only the one post-baseline finite-join supplier row; Batch 9 only
its one post-baseline Mackey/Higman supplier row. Batch 5 still has the fourteen
stale baseline decisions listed below plus its two new local supplier rows.
Group a has now removed the a-1 false-statement B edge by a local `GL_2`
matrix-unit witness. Full depcheck has exactly **four** current-run errors,
all lead-a-owned: Riemannian product curvature, great-sphere geodesicity,
mean-curvature remark, and cotangent tautological form. Their exact repairs
remain specified below. The first Bianchi item is locally repaired but its
manifest/contract still need syncing.

**First Bianchi item repair landed (15:52 AEST):** Group a replaced the
unqualified edge to the published choice-conditional vector-field Lie-algebra
theorem with `def-lie-bracket-of-smooth-vector-fields` and the A-level
coordinate smoothness criterion. Owner read the complete current item: the
coordinate formula proves bracket closure for the given fields; the twelve
triple-composition terms cancel for Jacobi; torsion freeness turns the
curvature cyclic sum into Jacobi. The choice-free theorem is now sound at item
level, and focused precheck/rendercheck pass. Group a still owns its manifest
and proof-contract synchronization and the separate five B-leaf errors. The
published A-P defect remains in the ledger for its own future repair.
The plus-exponential false-statement file is still inside a-1's exclusive
33-file continuation while that helper process runs. Group-a lead should
prepare its replacement calculation but wait for a-1's handoff before editing
that item; the four other B-leaf item files are lead-owned now.

**Batch-8 scope renewed (15:49 AEST):** Group a registered its two necessary
post-baseline local A suppliers in the current Batch-8 manifest. Owner read
both complete items and their page placement: the connected-cover lemma
proves the subtle second-countability step by countable connected base and
finite transition codes without choice; the irrational-flow lemma proves
freeness, density and injective immersion by finite pigeonhole. Owner recorded
`proceed` on `lie-subgroups-actions-and-homogeneous-spaces`, SHA
`378e2af83ed9ea4d8ea0d5fc5c34aec430ab4537cdde626b01b02fdac077b598`.
Current scope is closed for 21 pairs/765 rows. These two newly authored items
are driver-created-supplier certification rows after successful handoff; the
remaining five group-a B-leaf errors and normal Batch-8 gates still require
lead/helper action.

**Batch-5 decision refresh (15:48 AEST):** The full author gate passes, but
`step3-decisions check --phase final` still lists 16 Batch-5 work rows. Two
are the post-baseline local additions
`def-orientation-local-system-on-a-manifold-with-boundary` and
`lem-canonical-twisted-fundamental-classes-over-compact-subsets`; the driver
certifies those after successful group handoff. The other **fourteen** are
baseline rows whose old author receipts are stale after later edits: Cartan
coherence and formula; finite cellular cyclic squares; Adem double-power
comparison; cyclic/singular agreement and finite-regular detection; Adem
relations and Bockstein parity; total square and reduced-power definition;
reduced-powers theorem; the two projective-space A ring lemmas; and the
complex-projective Steenrod B example. Group b should reread the exact
current items and refresh confidence-1 item decisions before its successful
Step-3b handoff. The Wu owner item receipt itself is current and absent from
the work list. Batch-6's 51 and Batch-9's one current work rows likewise
remain for group-b closure/driver-created-supplier handling.

**Dependency gate refresh (15:44 AEST):** All 763 selected item files and
42 pages exist. Group b has repaired all six of its B-leaf edges and recorded
current focused decisions; full `depcheck --quiet` now reports exactly five
current-run errors, all group-a-owned: the four lead item edges detailed below
and the a-1 plus-sign false-statement edge. Group a's lead is independently
auditing a-1's final examples; a-1 still owns its files until the helper
exits. The older statements here about outstanding group-b B edges are
historical. Scope check remains closed for 21 pairs/763 rows.

**Wu owner item escalation resolved (15:35 AEST):** After group b added the
current item-specific contract, owner verified the final Wu item hash
`1923b0c0c9ba99d91f19d29edfcc296500764b45de691105e4910cdac0f1e815`,
all thirteen exact manifest dependencies, the corrected three-source list,
and the strict focused contract (`ok:true`, zero warnings). The full chain
argument and both orientability directions were read above. Owner recorded
`repaired` for `ex-wu-classes-of-a-closed-surface` at item receipt SHA
`3332f56780677a9c24ab1f00081f529c6aae3c6839688f0705a79718cd4a0495`.
This supersedes the old author escalation. Group b can include it in the
normal Batch-5 gate and handoff after fixing the remaining six B-leaf edges;
no lead override of the owner receipt is needed.

**Wu pair scope renewed (15:34 AEST):** Group b aligned the current Batch-5
manifest Wu row with the thirteen authored dependencies, explicit AC, complete
chain strategy, three corrected sources, and the B-page `forwardRefs` to the
later local-coefficients A page. Owner reread that current row against the
completed item and recorded `proceed` on the Bockstein A-page pair at SHA
`b41e157032f9dd238f6fcb32143e64a31d6fedd8280d3869f546ef5853cdca88`.
Scope is closed for 21 pairs/763 rows. The owner-held Wu **item** escalation
remains open until group b's contract and independent inspection are complete;
group b must still repair its six B-leaf edges and run the Batch-5 author gate.

**Depcheck refresh (15:33 AEST):** The helper a-1 has already removed the six
new B-example edges described in the historical 15:33 note below from its
sphere/projective/Grassmann examples; that note records the transient finding,
not six outstanding errors. Current full depcheck has 12 errors: one still
missing Batch-8 example plus the six group-b edges, four group-a lead edges,
and one earlier a-1 false-statement edge. The repository's 270 separate
warnings include historical multi-home/citation notices and are not these
current-run blocking errors. Re-scan after a-1's final handoff.

**New Batch-8 helper-owned edge (15:22 AEST):** As a-1 authored
`fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions`,
full depcheck found its `b-leaf-content` dependency on the group-a B example
`ex-the-heisenberg-lie-group-and-algebra`. The helper still exclusively owns
this item file and should replace the B edge with A-level `def-matrix-units`
and the two-line local multiplication
`E_12 E_23=E_13`, `E_23 E_12=0` in `GL_3(R)`; these yield the same nonzero
bracket witness without depending on the B example. Reconcile the item's
frontmatter, its facts/steps and any lead-owned manifest/contract after
handoff. This is in addition to the lead-a four B-leaf errors below.

**Further a-1 B-example edges (15:33 AEST):** Full depcheck now finds six
more `b-leaf-content` edges in three freshly authored helper-a-1 files:
`ex-spheres-as-so-n-plus-one-mod-so-n` cites B examples for the regular sphere
and the orthogonal Lie groups; `ex-real-and-complex-projective-spaces-as-homogeneous-spaces`
cites B examples for real affine projective charts and unitary groups; and
`ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces` cites the B
orthogonal and unitary group examples. These item files remain exclusively
a-1's until handoff. Exact local replacements are short: for the sphere use
`F(x)=sum x_i^2` with `dF_x=2x` and A-level regular-level-set theorem; for
real projective space repeat the affine-ratio chart construction already
written for complex projective space in that item; for O/SO/U use their
matrix equations as closed subgroups of the open real/complex `GL`, whose
determinant-nonzero locus and rational inverse make it a Lie group, then cite
the same-page A `thm-cartans-closed-subgroup-theorem`. The group equations,
smooth matrix action and needed finite-dimensional basis calculations should
be stated locally. After helper handoff, group a must reconcile all seven
newly identified a-1 B edges in manifests/contracts and rerun depcheck.

**New Batch-5 dependency gate (15:19 AEST):** The Wu helper has now created
the B page, so full `depcheck --quiet` exposes six `b-leaf-content` edges in
four other group-b-owned B items. These are real errors, not missing-page
noise. `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`
cites published B examples for integral and mod-two cohomology of `RP^n`;
`ex-steenrod-squares-on-real-projective-space` cites the published B ring
example; `cex-the-top-square-formula-does-not-define-all-lower-squares` cites
that B ring and the B Mayer--Vietoris sphere computation; and
`cex-steenrod-squares-are-not-integral-cohomology-operations` cites the B
infinite-projective-space cellular computation. Group b lead owns these four
item files and should replace the six B edges with A-level suppliers or
complete local calculations, then reconcile the Batch-5 manifest, proof
contracts, focused decisions and author check. Potential A suppliers include
`lem-mod-two-cohomology-ring-of-infinite-real-projective-space` with skeleton
restriction for finite projective spaces, `cor-homology-of-spheres` plus the
field-duality corollary for sphere cohomology, and the A-level cellular
chain/comparison theorems for the alternating `0,2` projective boundary
calculation. The latter should be derived explicitly for the groups used;
do not simply cite the B example. The four group-a B-leaf errors below remain
 group a's separate work. The Wu helper handed off its two files successfully
 at 15:21 AEST; group b now owns their shared integration.

In particular, published A-level
`lem-real-projective-space-cellular-homology-and-pinch-map` already proves the
finite `RP^n` integral chain differential and homology, so UCT gives
`H^1(RP^n;Z)=0`, `H^2(RP^n;Z)=Z/2` for `n>=2`. The same lemma's compatible
finite skeleta, together with cellular homology for an infinite CW complex,
give `H_4(RP^infty;Z)=0`, `H_5(RP^infty;Z)=Z/2`. These are direct A-level
replacement calculations for the first and sixth forbidden edges.

**Wu item owner read (15:20 AEST):** I read the complete revised Wu proof,
including the typed `O_M tensor O_M -> Z` cap pairing, the exact
`partial Z=2W` sign, the mod-four Bockstein evaluation and both directions of
the orientability equivalence. The chain computation is coherent and closes
the prior mathematical hold. One minor internal pointer in Step 10.1 says
“Step 1.2 shows” but should say “Step 2.1 shows” for generator change; the
exclusive Wu helper should fix it before handoff. Group b still needs to
integrate its manifest, contract and decision after that handoff; this owner
read is not a Step-3b certification.
The existing helper-authored `escalate` receipt remains owner-held until
group b aligns the Wu manifest, source locator, dependencies, contract, and
B-page forward reference with the completed item. Once those inputs are
stable, the owner will reread their exact current versions and record a
hash-bound `repaired` item receipt; the lead must not override the escalation.

**Group-c Step-3b handoff complete (15:10 AEST):** Its Sol xhigh lead exited
successfully with all four owned A/B pairs, 126 selected item rows and eight
pages. The controller now recomputes Step-3b at **6/12 batches** covered,
including c's Batches 1, 2 and 3. Author checks, real rendering, content
policy, strict contracts, coverage and plan validation passed. The two owner
item receipt refreshes mentioned in that handoff were completed at 15:11
above; the handoff tail is stale on those points. The two newly added local
suppliers and eleven consumer-owned cross-batch edge reviews remain for the
driver and respective consumer owners. Group c's files are handed off; do
not duplicate its authoring.

**Group-c owner item renewals (15:11 AEST):** Owner reread the current
Milman–Pettis proof with its later Goldstine finite-data supplier and the
complete James convex-block criterion with its noncompactness-sequence
supplier, then renewed both owner `repaired` receipts at the current input
hashes: `thm-milman-pettis`
`077d5c76fd14b019db3ed5fbaf31e3dc19b0b5e2b67159b9678208bf868210a6`;
`lem-james-norm-attainment-compactness-criterion`
`e205ee5ecbc3043fc0ad8dd6c3545f30f0d6e2de44ca45891c5b5924321e9873`.
Group c's selected Batches 1/2/3 now have no stale owner item receipt.
The final decision checker reports only its two newly added local suppliers
as unaudited, for the driver/auditor-created item path. Group c may complete
its normal handoff; owner receipt refresh is no longer a blocker.

**Curvature page handoff complete (15:06 AEST):** Original helper a-3's
continuation exited successfully; its two page files and checkpoint are now
group a's to integrate and amend. Both page arrays match the current
53 A/12 B manifest rows and explicit real rendering passed. The earlier
exclusive-page reservation below has ended. The four B-leaf item edges,
first-Bianchi interface and three draft typos remain lead-owned gates.

**Curvature handoff ruling (15:07 AEST):** Helper a-3 completed its two
page-only files and found a choice-interface inconsistency in lead-owned
`thm-first-bianchi-identity`: the item is unqualified but cites published
`thm-vector-fields-form-a-lie-algebra`, whose smooth-field closure proof
reaches the AC-stated canonical tangent-bundle definition. Owner confirmed
and added this distinct published defect to the canonical A-P ledger. Group a
should keep the first Bianchi claim choice-free by replacing that conditional
published theorem edge with a complete **local** Jacobi derivation: in a
supplied chart, coordinate coefficients show brackets of the given smooth
fields remain smooth; expand the three nested operator commutators from
`def-lie-bracket-of-smooth-vector-fields` on an arbitrary smooth test function
and cancel their twelve terms. This uses finite algebra and no chosen family.
Update item, manifest and contract deps consistently, then recheck downstream
contracts. If the lead instead propagates `AC_omega`, it must amend all
affected statements and seek current owner scope review before certification.
The page helper also flagged three lead-owned draft typos:
`thm-contracted-second-bianchi-identity` line 32 has `\\frac12,dS`;
`prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures`
line 64 has raw `kappa_ikappa_j`; `thm-gausss-theorema-egregium` line 72 has
two raw `det` tokens. Group a should repair these and rerun real rendering.

**Current Batch-6 scope renewal (15:06 AEST):** Group b added the local
A-level `lem-finite-join-models-for-circle-and-two-point-groups` to supply
its `CP^\infty` and `RP^\infty` examples. Owner read the complete finite
sqrt-coordinate/homeomorphism proof and both consuming item interfaces,
then recorded `proceed` for the obstruction/classifying A page, SHA
`1b06f3b8f5e38f36c691644ad47ae929e0fdd44566a9600aae7be4d8eb49d6cf`.
This supersedes its 14:46 receipt. Scope check is closed for 21 pairs and
763 current rows. Group b still owns the added row's coverage/contract,
normal focused item decisions for baseline rows, and Batch-6 author gate.

**Current Batch-5 partition (15:04 AEST):** The original Sol xhigh helper
b-1 is resuming to author only
`items/ex-wu-classes-of-a-closed-surface.md` and
`library/algebraic-topology/bocksteins-steenrod-squares-and-cohomology-operations-examples.md`,
plus its own continuation report. Its exact task is
`research/phase-2-next-21-step3b-helper-b-1-wu.task.md` and the owner chain
analysis is `research/phase-2-next-21-wu-repair-analysis.md`. Group b must
leave those two paths to b-1 until its handoff while retaining the Batch-5
manifest, coverage, B-page forward reference, proof contract, focused item
decision, author check and certification. This reuses one of the original
three group-b helpers; no fourth helper is added. Earlier text assigning
the missing Wu item/page to the lead is superseded for those two file paths.

**New dependency gate from curvature page creation (15:00 AEST):** The full
depcheck now exposes four `b-leaf-content` errors, all in group a's item-file
scope. The pre-existing cotangent tautological-one-form item still cites
`ex-the-tangent-and-cotangent-bundles-as-vector-bundles` on a published B page.
Three newly visible curvature items cite published B leaves:
`ex-curvature-of-a-riemannian-product` -> `ex-the-product-riemannian-metric`,
and `ex-a-great-sphere-is-totally-geodesic` plus
`rem-mean-curvature-and-minimal-submanifolds` ->
`ex-great-circles-as-round-sphere-geodesics`. Group a must replace these four
edges with exact A-level suppliers or self-contained local calculations and
reconcile manifests/contracts before Batch-7/10 certification. Helper a-3
is page-only and must not edit the curvature items; it may report findings.
The 26 `page-item-missing` errors remain a-1's exclusive Batch-8 work, not
additional missing page files. No page cycle was found.

Exact local repair interfaces after reading all four complete items:
`ex-curvature-of-a-riemannian-product` can derive its block metric in its own
Step 1.1 from the A-level
`prop-coordinate-criterion-for-a-riemannian-metric` and
`prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`
(plus its existing tangent splitting), replacing the B example as [F1].
`def-tautological-one-form-on-a-cotangent-bundle` can cite the A-level
`thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure`
directly; the B example merely combines that theorem with the tangent case.
For `ex-a-great-sphere-is-totally-geodesic`, use its linear equator
$S^k=S^n\cap V$: every constant normal vector in $V^\perp$ is tangent to
$S^n$ along the equator and has zero ambient derivative, so its shape
operator vanishes; a finite normal basis and the Weingarten/II pairing give
$\mathrm{II}=0$, including $k=0,n$. This replaces the great-circle B example
with same-page A definitions/theorems. The mean-curvature remark already
computes the equator's constant normal and Clifford torus shape operators
locally, so its great-circle B dependency can simply be removed after the
other A-level shape/connection premises are checked. Group a must make the
actual item/manifest/contract edits and run full depcheck; this analysis is
not an author decision.

**Group-c gate results (14:51 AEST):** The initial failures described below
were repaired by group c. Current `author-check-1.json`, `-2.json` and
`-3.json` each report `ok:true` across precheck, real rendering, item content
policy and strict proof contracts. Scope check remains closed for 21/762.
Group c should now record the held focused item decisions and submit normal
Step-3b batch handoff; a passing draft gate alone is not driver coverage.

Earlier 14:49 diagnostic: first author checks existed for Batches
1, 2 and 3, each then `ok:false` for narrow mechanical reasons. Batch 1
precheck flags `ex-weyl-equidistribution-for-square-root-two-initial-terms`
for untagged steps. Batch 2 content policy requires `generation.role: example`
on `ex-hilbert-spaces-are-uniformly-convex` and
`generation.role: counterexample` on
`cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences`.
Batch 3 content policy rejects applied `\iota(B)` notation in
`thm-tempered-distributions-embed-continuously-in-distributions`; use the
natural map name directly. The Batch-3 contract also warns of shotgun fact
citations in `cex-product-of-two-distributions-is-not-canonically-defined`.
Group c owned these exact files and has completed the repairs and reruns.

**Current partition (14:41 AEST):** The existing Sol xhigh helper a-1 is
resuming on the 33 still-absent Batch-8 Lie-subgroup item files listed in
`research/phase-2-next-21-step3b-helper-a-1-resume.task.md`. Both previously
blocking Batch-7 suppliers are now authored. Until this helper's new handoff,
group a must leave those 33 exact item files to a-1 and continue its Batch-7
items/pages, Batch-10 pages, integration of already-authored Batch-8 files,
shared manifests, proof contracts, decisions, and gates. The helper must not
edit either Batch-8 page, any existing item, or any shared batch artifact.
This resumes one of the original three helpers; it does not create a fourth
helper or change group ownership. Earlier text below saying the lead owns
the 33 missing item files is superseded by this current partition.

**Additional current partition (14:49 AEST):** The original Sol xhigh helper
a-3 is resuming solely to create the two still-absent Batch-7 curvature page
files named in `research/phase-2-next-21-step3b-helper-a-3-curvature-pages.task.md`.
Group a must leave those exact two page paths to a-3 until its handoff, while
continuing the Lie-group Batch-7 item/page work and retaining all curvature
item files, shared manifests, coverage, proof contracts, decisions, checks and
batch certification. Helper a-3 must not edit any item or shared artifact.
This reuses one of the original three helpers and does not alter a-1's
exclusive 33-item scope.

**Batch-6 scope renewal (14:46 AEST):** Group b's current
`prop-loop-space-of-bg-recovers-g-up-to-homotopy` item now explicitly assumes
AC and correctly distinguishes endpoint transport from the first-loop-first
connecting map. Group b has now amended the Batch-6 manifest to the same
claim, with the correct direction `Omega BG -> G`; its selected discrete-group
consumer already assumes AC. Owner reviewed the full proof and the amended
scope, then recorded current `proceed` for the obstruction/classifying A page,
SHA `19c3d87431445243cc03b27b7f7caffe491ec34bcdbccef68698fdf52d994f17`.
The companion spectra A page also received current `proceed`, SHA
`50f0e2b75e00ab56fd23883e6861b80040a755b8085d417c631a72fbae134e20`,
after the local reduced-word unstable-class repair removed the B-leaf edge.
The scope check is again closed for all 21 pairs/762 rows. Group b must now
write the Batch-6 proof contracts, reconcile page/coverage details, record
focused item decisions and pass its author gate. These owner scope receipts
do not themselves certify the two items or Batch 6.

**Owner scope receipts (14:18 AEST):** `proceed` for FA-10
`reflexivity-and-eberlein-smulian`, SHA
`4ca61add263befc3a964999771733c9ba7af35d816f1b4b35e7cd09a070b4bab`,
and for the local-coefficients A page, SHA
`d5e4737b96a4fc8fe2341bfca72e5bca411e66271f421c309fbff0972f2df238`.
The former supersedes both earlier FA-10 hashes below after companion-example
and Lomonosov source-locator amendments; the latter approves the two new
orientation/fundamental-class suppliers. `step3-decisions check --phase scope`
was closed for 21 pairs/759 rows at that time. Groups c and b should refresh that
check and record held item receipts; earlier checkpoint text saying no owner
ruling is stale. Any further statement or manifest amendment that reopens
scope requires a current-hash review.

At 14:22 AEST owner also recorded `proceed` for
`lie-groups-invariant-fields-and-the-exponential-map`, SHA
`a40954b1c8ee40d9512e15095b51f564928cec068040380e5c33c147f25b8ec3`,
after reviewing the newly inserted right-trivialized differential-of-
exponential lemma as a complete local BCH supplier. Scope check is closed for
21 pairs/760 current rows. Group a may record its held focused item receipt
and continue BCH authoring; normal contracts and batch gates remain.

The lead's later BCH manifest integration changed that hash. A refreshed
owner `proceed` receipt was recorded at 14:26 AEST, SHA
`ae44f2d14369a62063162cdad44fbaad1b7b19797982daf1feeac28d49b200fa`.
This supersedes the 14:22 Lie-groups hash. Scope check is closed for 21
pairs/760 current rows. The BCH identity theorem is still unaccepted.

At 14:33 AEST group a authored the BCH identity theorem and updated its
manifest, reopening the Lie-groups scope hash. Owner read the complete
analytic/Dynkin proof and recorded a further `proceed` receipt, SHA
`d3c895537ac73ac990536039b940889b0b31679b814703eb1825c23d6b4a8c9d`.
This supersedes the 14:26 Lie-groups hash. Scope check is closed for 21
pairs/761 current rows. Group a still needs the focused BCH item decision,
contracts, pages and remaining Batch-7/8 items before certification.

At 14:30 AEST owner recorded `proceed` for the amended Batch-9 Brauer A
page, SHA `81c662e13ff788ac94c3a4fe011f5e865bd2f31d8d1bfd451beb4d6c0b81fa4e`.
The lead has now made `k` algebraically closed explicit in Green and every
dependent character-support/Brauer Second Main statement, while keeping
Nagao's decomposition at its original generality. The integral
Mackey–Higman supplier includes the previously missing induction-counit
bridge. Scope check is closed for 21 pairs/761 current rows. Group b may
record focused Batch-9 item decisions and run its normal gate; the earlier
Green scope hold below is resolved by this exact amendment.

At 14:36 AEST owner recorded `proceed` for the amended ergodic A page,
SHA `7ca854fc57309d2f4e6db88f86325273b9edf377400391ca9c90bd026f0c1a32`.
The added local unit-interval circle lemma gives the elementary compact
metric supplier without a choice premise. Scope check is closed for all
21 pairs and 762 current item rows. Group c may record its held focused
item decision and continue its normal batch gate; another manifest change
requires a renewed current-hash review.

The selected scope remains 21 A/B pairs. Use the current batch manifests and
Step-3 receipts; do not restore superseded scaffold wording.

At 14:27 AEST all nine host-side Sol xhigh helpers have handed off. The last
two were a-3 (122 assigned items/four pages, 97 proof-bearing prechecks and
126 renders passing) and b-2 (50 assigned items/four pages, 32 prechecks and
54 renders passing). Their item/page files are now free for their respective
group leads to integrate and repair; maintain the group partition (a owns
Batch 7/8/10, b owns Batch 5/6/9, c owns Batch 1/2/3). b-2's final report
correctly adopts the owner's `ab`/`ab^2` and Nyikos counterexample repairs,
but its proposal to add the published AC-stated general numerable-fibration
theorem to the **unqualified** loop-space weak-equivalence contract does not
resolve the choice mismatch flagged below. Group b must supply the specific
choice-free Milnor specialization or narrow and recertify scope.

The 14:31 AEST full dependency scan now has exactly 33 missing item files on
group a's Lie-subgroups A/B pages and two `b-leaf-content` errors: b-2's
`cex-an-unstable-homotopy-class-need-not-yet-be-stable` still cites the
published free-group B example, and a-3's
`def-tautological-one-form-on-a-cotangent-bundle` still cites the published
vector-bundle B example. There are no page cycles or other current error
classes in that scan. Both helpers have handed off, so groups b and a can
now remove those B-leaf edges and prove the elementary calculations locally
or from A-level suppliers. Group a should author the 33 outstanding
Lie-subgroup items after BCH; re-run depcheck then.

The selected-file inventory at the same checkpoint isolates all 56 missing
item files: Batch 5 has only the Wu item; Batch 7 has 22 remaining Lie-group
items beginning with the BCH identity theorem; Batch 8 has the 33 downstream
Lie-subgroup items from a-1's handoff. Batch 10's items are all present, but
its curvature A/B pages are still absent. The other absent page files are
Batch 5's Bockstein B page and Batch 7's Lie-group A/B pages. Groups a and b
can use this exact list to close page and item inventories before rerunning
author checks. All Batch 1/2/3 and Batch 6/9 item/page files exist.

- Batch 12 socks: Jech, *The Axiom of Choice*, §5.4, pp. 68–71 pairs **sets of
  reals** `R_{n,0}, R_{n,1}`, not individual reals. The original pairs-of-reals
  promise is false in ZF. The owner corrected the four affected manifest items
  and coverage, verified the group's corrected authored drafts, recorded a
  current `proceed` scope
  receipt, and recorded current owner `repaired` item receipts for the four
  affected IDs. Preserve those files and decisions; certify other batch-12
  items against the corrected construction.
- Batch 2 reflexivity: explicitly assume `AC_omega` as well as relative Hahn–
  Banach in `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive` and
  `thm-quotients-of-reflexive-spaces-are-reflexive`. The selected published
  closedness and quotient-completeness suppliers require `AC_omega`. The owner
  corrected both manifest promises and recorded a current `proceed` FA-10
  scope receipt. Both items still require authored proofs and item decisions.
- Batch 2 bounded-sequence criterion: the current
  `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`
  promise assumes the ultrafilter lemma, DC and HB, exactly matching its
  compact-unit-ball and Eberlein–Šmulian suppliers. Its authored draft is
  complete but needs an item receipt after this owner scope renewal. The later
  `cor-ell-one-is-not-reflexive` cites that conditional criterion, so its
  manifest promise, strategy, and direct dependencies now carry the same
  assumptions. Author that corollary against the corrected manifest.
  A renewed owner `proceed` receipt is on disk (12:20 AEST, scope SHA
  `8f536bc9a3858e955794149d43f89a067de8e46d658f5673c3780dc47d2dbb40`)
  after the Schur, ell-one, asymptotic-center and first two James-lemma dependency additions. Group c
  may record the bounded-sequence and Schur item decisions after its normal
  checks while this exact pair scope remains current. Its report text saying
  FA-10 is still owner-held does not reflect the renewed receipt.
- Batch 2 Milman–Pettis: the owner approved the repaired HB plus
  `AC_omega` promise and declared `def-countable-choice` after reading the
  complete finite-data Goldstine proof and the exact complete-subspace
  closedness supplier. The current owner `proceed` scope receipt includes
  this promise, and a current owner `repaired` item receipt is on disk for
  `thm-milman-pettis` after precheck, rendercheck and strict proof-contract
  validation. Do not restore the former HB-only scaffold promise or record a
  duplicate author receipt for this owner-resolved item.
- Batch 2 James noncompactness sequence: the owner read the authored lemma
  against Megginson Theorems 1.13.11 and 1.13.14 and renewed `proceed` for
  its current direct dependency set. Its real, ultrafilter-lemma/DC/HB
  promise and annihilator-distance conclusion are unchanged. The author may
  record its normal item decision after local checks; this is not an
  unresolved mathematical escalation.
- Batch 2 James compactness criterion: the owner read the current DC+HB
  convex-block proof and ultrafilter-lemma nonreflexive consequence against
  Megginson §1.13 pp. 127–133 and renewed `proceed` for its direct limsup,
  series and dual-completeness suppliers. The owner corrected one scalar
  `alpha` notation typo in the prefix estimate. Group c then completed the
  proof formatting and strict contract; precheck, rendercheck and selected
  contract all pass. The owner resolved the group-c `escalate` receipt with
  a current owner `repaired` item receipt for all eighteen direct
  dependencies. Do not record a duplicate author decision for this item.
- Batch 11 chain condition: proof 3.1 and the manifest strategy were corrected
  to prove cardinal preservation directly by bounding an alleged surjection's
  range. Cofinality preservation alone does not rule out singular-cardinal
  collapse. The edited item passed explicit precheck, rendercheck, and strict
  selected-item proof-contract validation; it still requires its normal item
  decision with the current input hash.
- Batch 11 preservation: `thm-closure-distributivity-and-no-short-sequences`
  now states its no-new-sequences equivalence for separative orders, or for
  the separative quotient of an arbitrary preorder. For nonseparative
  preorders the literal dense-intersection definition is stronger. The
  `lem-generalized-delta-system-for-small-supports` specialization at
  `rho=2^{<kappa}` now explicitly requires regular `kappa`; the general
  explicit-hypothesis lemma is unchanged. The owner corrected both manifest
  promises and recorded a current `proceed` scope receipt. The two group-d
  drafts already use these valid formulations and pass selected-item checks;
  current owner `repaired` item decisions are recorded for both IDs.

The Step-3 item recorder now requires current scope approval for the item's
own A/B pair. A concurrently edited unrelated pair no longer blocks that
item's receipt; the final Step-3 gate still requires every pair scope to close.

The canonical published-consumer ledger contains the confirmed published
choice-interface findings reported by the groups. Published files remain
unmodified during this active authoring window.

## Owner-directed parallel authoring — 13 September 2026

The owner instructs each **active** group author (a, b, c) to spawn exactly
three `gpt-5.6-sol` agents at `xhigh` effort to assist with authoring. Group d
has already completed and requires no helpers. Resume from each group's latest
item checkpoint; preserve all completed files and current decisions. Launch
the three helpers concurrently and continue your own assigned pair work.

Use `tools/dispatch.mjs` for each helper with `--role alpha-high`,
`--profile gpt-5.6-sol-xhigh`, `--brief briefs/group-author-helper.md`,
`--task research/phase-2-next-21-step3b-helper-<group>-<number>.task.md`,
`--run phase-2-next-21`, a unique `--label step3b-helper-<group>-<number>`,
`--covers <assigned A-page ID>`, and `--timeout 14400`. Start them about three
seconds apart to avoid a simultaneous model boot. A helper queued by the
`alpha-high` lane cap still counts as launched; inspect its result before
integration, and retry transient failures with its same task. The helper tasks
below carry the exact A/B pair assignments.
Run each helper in the background with stdin and both output streams redirected
(for example, `nohup node tools/dispatch.mjs ... > research/<run>-step3b-helper-<group>-<number>.launch.log 2>&1 < /dev/null &`),
and record its PID in the group report. The dispatcher writes its own durable
result file; a launched PID alone is not evidence that authoring succeeded.

**Exclusive file ownership:** the lead and helpers may read every current pair,
but each item/page file has one writer at a time. Each helper writes only the
item and A/B page files of its assigned pairs and its uniquely named helper
report. The lead does not edit a helper-owned pair while its helper is active.
The lead alone writes shared batch manifests, coverage, dependency inputs,
proof-contract JSON, scope and item receipts, group reports, and plan/prose
amendment proposals. When a helper finishes, the lead reads and checks its
arguments, integrates any changed dependencies or new items into shared files,
writes item-specific contracts, runs the required checks, and records decisions.
Do not mark helper work accepted on the helper's report alone. If an urgent
cross-pair repair needs an owned file, ask its writer to make the change or wait
for a documented handoff; never edit it concurrently.

Group a lead retains both batch-7 pairs (Riemann curvature, Lie groups). Its
helpers own: a-1 Lie subgroups/actions; a-2 Lie-algebra representations/PBW;
a-3 both batch-10 symplectic and Hamiltonian pairs.
Group b lead retains the Bocksteins/Steenrod pair. Its helpers own: b-1 local
coefficients; b-2 both batch-6 spectra and obstruction pairs; b-3 Brauer.
Group c lead retains the reflexivity/Eberlein–Šmulian pair. Its helpers own:
c-1 Banach–Alaoglu/Goldstine/Krein–Milman; c-2 tempered distributions/Fourier;
c-3 ergodic theorems. The lead still owns all group-wide certification and
integration. Read the corresponding helper task files before launching.

### Runtime handoff after the first helper launches

The three group leads followed the spawn instruction at 12:49–12:50 AEST.
Nested Codex helpers launched *inside* a lead's Codex shell then hit the
synthetic bubblewrap mount registry error (`Read-only file system`) before
they could read the repository; b-3 and a-3 returned success-shaped dispatch
results whose `tail` explicitly reports this blocker. Detached shell jobs
also died when the shell tool closed. The owner is relaunching all nine
helpers as persistent host-side Sol xhigh dispatches with the same exact
pair tasks. **Do not launch a duplicate helper now.** Continue your
lead-owned pair, then inspect the host-side helper reports and result files,
integrate completed content into shared artifacts, and record only decisions
whose proofs and contracts you have checked. A helper result with a sandbox
error is failed authoring, regardless of its `ok` flag.

Helper b-2's initial report repeats two now-obsolete Batch-6 escalations.
The live manifest already repairs
`cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension`
to the finite two-cell `ab`/`ab^2` incompatible-choice example, and its owner
Step-1 `ready` receipt is current. It also supplies Nyikos's smooth long-line
frame-bundle/non-numerability construction and a current owner `ready` receipt
for `cex-principal-bundle-classification-can-fail-without-numerability`.
These two **current** claims still need complete Step-3 item proofs,
contracts, checks and decisions; do not omit them based on the helper's stale
starting-state objection. If b-2 hands off without those two files, group b
must author them after the exclusive helper scope ends.

Batch 1's scaffold notes still describe an initial 5-ready/29-escalated
snapshot. That snapshot was superseded by the owner's Step-1 reconciliation
at 2026-09-12T21:01Z. The current on-disk
`research/phase-2-next-21-step1-<item>.json` records are `ready` for the
Birkhoff theorem, the finite-measure $L^p$ lemma, and the base-$b$ cylinder
lemma, among the other previously held items. In particular the cylinder
lemma has an owner `ready` record with all five exact direct dependencies and
SHA `0e8ab0ec...`; it does not await another owner release. Read the current
item record rather than repeating the obsolete readiness count from the
batch notes. This is scaffold readiness, not a Step-3 proof decision or a
claim that every published Phase-3 debt entry is closed.
Helper c-3's final report still calls the cylinder lemma's Step-1 readiness
owner-held. That statement is stale: the current owner `ready` record for
`lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints`
has the five exact direct dependencies and hash `0e8ab0ec...`, and the
authored digit-telescoping proof uses those interfaces. Keep the separate
published A-P analytic debt visible, but assess the new ergodic items under
their current Step-1 readiness, complete proofs and Step-3 checks rather than
re-escalating them solely from c-3's initial notes.

### Owner investigation: surface Wu example (13 September, 13:29 AEST)

Group b's escalation of `ex-wu-classes-of-a-closed-surface` is valid. The
Mosher--Tangora Chapter 4 Section 1 locator is wrong and does not prove the
surface self-intersection assertion. Do not clear the item receipt on that
citation. A primary source, Ranicki, *Algebraic and Geometric Surgery*,
Definition 4.1(iii), printed p.49,
https://webhomes.maths.ed.ac.uk/~v1ranick/books/surgery.pdf, states the exact
orientation-character/Wu identity, but that statement alone does not supply
this library's required local proof.

Investigate a local proof through the **twisted Bockstein** with the
orientation local system. For the coefficient sequence
`0 -> O_M --2--> O_M -> F_2 -> 0`, the connecting cochain of the constant
mod-two `1` is represented, after reduction, by the orientation-transport
one-cocycle: lifting `1` to local signed generators makes its edge coboundary
zero on orientation-preserving transport and `2` on reversing transport.
The cap/Bockstein chain identity should identify that class, capped with the
twisted fundamental class, with the ordinary homology Bockstein of `[M]_2`.
Kronecker adjunction and the already proved `Sq^1=beta` then give
`<Sq^1 x,[M]_2> = <w_1 cup x,[M]_2>`, and the Wu pairing gives `v_1=w_1`.
At chain level, if `C` is the twisted integral fundamental cycle and `c` is a
signed `O_M`-valued 0-cochain lifting `1`, then `c cap C` is an ordinary
integral chain reducing to `[M]_2`. The cap-boundary/Leibniz formula gives
`boundary(c cap C) = +/- (delta c) cap C`; since `delta c = 2b`, dividing by
two shows that the ordinary homology Bockstein of `[M]_2` is the cap of the
twisted Bockstein class `[b]` with `[M]_O`. Reduction of `[b]` is the explicit
orientation cocycle. Relate the integral homology Bockstein followed by
mod-two reduction to the mod-four cohomology Bockstein (`Sq^1`) by the
coefficient-sequence map `Z -> Z/4`, then use Kronecker evaluation and the
mod-two cap/cup adjunction to get the required identity. Check signs,
evaluation and coefficient types directly before accepting this calculation.

Check every coefficient sequence, cap sign and reduction map, existence of the
twisted fundamental class and exact dependency order. The local-coefficients
pair is currently later in Batch 5. `tools/validate-plan.mjs` explicitly
permits a B-page forward citation if the B page lists the later A page in
`forwardRefs`; it remains a leaf and creates no dependency cycle. Thus a fully
authored local-coefficient lemma on helper b-1's A page could be cited by the
Wu example on the earlier Bockstein B page after handoff and lead integration,
with the `forwardRefs` and item dependency registered and validated. Do not
edit the helper-owned A page while b-1 is still writing it. This is an
investigation route, not an owner `repaired` decision.
The original statement and all twenty-one pairs remain promised.
The detailed candidate chain argument and unresolved proof checks are in
`research/phase-2-next-21-wu-repair-analysis.md`; it is owner analysis, not a
replacement item or a certification.

Group b's first Batch-5 author-check artifact (14:19 AEST) has 63/63
existing proof contracts clean. Its precheck/content-policy failures are
exactly the absent `ex-wu-classes-of-a-closed-surface` item, and rendering
also reports the absent Bockstein examples page. This confirms Wu and the
page are the current blocking artifacts for that batch; do not treat the
otherwise clean contracts as certification. Author the complete Wu chain
proof above with the now-repaired twisted fundamental-class supplier, add the
B-page forward reference to the later local-coefficients A page, then rerun
the focused author check and the normal scope/item decisions.

For b-1's local-coefficient duality review, use Allen Hatcher's **one-page
correction** to the last two paragraphs of *Algebraic Topology* p.335:
https://pi.math.cornell.edu/~hatcher/AT/Pduality.pdf. It explicitly constructs
the twisted fundamental class and states the corrected duality isomorphisms
`H^k(M;Z) ≅ H_{n-k}(M;O_M)` and
`H^k(M;O_M) ≅ H_{n-k}(M;Z)` for closed nonorientable connected manifolds.
Check the authored b-1 proof against this correction, especially the local
coefficient pairing types; cite the corrected source if it is used.

In the currently written b-1 draft
`items/def-cup-and-cap-products-with-local-coefficient-pairings.md`, the first
display contains literal `,qquad` and the simplex notation contains literal
`ldots` (missing TeX backslashes). The exclusive writer b-1 should repair
these before handoff; if the helper has already finished, the group-b lead
should repair them during integration. A successful renderer parse is not
enough to catch a mathematically wrong typeset formula.

The b-1 draft `lem-canonical-twisted-fundamental-classes-over-compact-subsets`
has a substantive gap in its arbitrary-compact step (currently proof 4.1;
it was 3.1 in the earlier draft): intersecting an arbitrary compact `K`
with finitely many closed coordinate balls does **not** make those pieces
finite unions of convex compact sets. The conclusion for arbitrary `K` does
not follow from steps 2.1–2.2 as written. The published untwisted supplier
`lem-compatible-local-orientation-classes-exist-over-compact-subsets`, steps
4.1–6.1, gives the needed exact finite-chain argument: for a relative class
over `K`, represent it by a finite chain, enlarge `K` to a finite union `D`
of small closed balls avoiding the compact support of its boundary, use
convex-union vanishing/injectivity on `D`, then use ball-local point values
and finite chart-piece gluing for general `K`. This argument should be
adapted with the local orientation system explicitly tracked; merely citing
the untwisted result does not prove the twisted statement. Until b-1 or the
lead repairs and checks it, the twisted fundamental class and the downstream
Wu candidate remain unverified.

### Cross-pair dependency check while authors are active (13:43 AEST)

`node tools/depcheck.mjs` currently reports 44 errors. Thirty-three
`page-item-missing` rows are on helper a-1's two in-progress Lie-subgroup
pages; finish those owned items before interpreting this as a final gate.
The other ten `b-leaf-content` rows and one `page-cycle` require author
repairs before integration:

- Group b lead: Bockstein A-page
  `lem-mod-two-cohomology-ring-of-infinite-real-projective-space` cites the
  published B-page `ex-mod-two-cohomology-ring-of-real-projective-space`;
  `lem-mod-two-cohomology-rings-of-complex-projective-spaces` cites two
  published B-page examples (`ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space`
  and `ex-integral-cohomology-ring-of-complex-projective-space`). Derive the
  needed calculations from A-level suppliers or fully within the new A
  proofs; do not retain B examples as proof dependencies.
- Group b, after b-2 handoff: the new B-page
  `cex-an-unstable-homotopy-class-need-not-yet-be-stable` cites the published
  B-page `ex-free-group-on-two-generators-is-not-abelian`. Supply its
  reduced-word nontriviality calculation locally from A-level free-group
  results and remove that B dependency.
- Group b, after b-3 handoff: two new Brauer B examples cite published B
  examples from block and character pages. Repeat the finite `S_3`
  calculations locally from A-level character/block suppliers, or use
  existing A-level computations; remove the B-leaf dependencies.
- Group a, after a-1 handoff: the new A-page
  `fs-every-lie-subgroup-is-an-embedded-closed-subset` and
  `fs-a-free-action-always-has-a-manifold-orbit-space` cite the new companion
  B-page `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper`.
  This creates the reported A/B page cycle. Supply the counterexample
  calculation locally in the A false statements or from an earlier A-level
  supplier; keep the B-page witness as its own standalone example.

The counts above are a point-in-time scan of drafts, not a certification of
any unfinished helper. Re-run depcheck after each writer's handoff and
lead integration; do not edit a helper-owned item during its active dispatch.

### Helper a-1 and b-1 handoffs (13:53 AEST)

Host helper a-1 has handed off its Lie-subgroups pair checkpoint. It wrote 31
of 64 selected items (28 A, 3 B), with 23 proof-bearing prechecks and 36
renders passing. It explicitly reports the other 33 as transitively blocked
by two still-absent Batch-7 items,
`thm-the-differential-of-adjoint-is-ad` and
`thm-baker-campbell-hausdorff`. Group a must finish those Batch-7 suppliers,
then resume the 33 remaining Batch-8 items from the helper checkpoint, update
the manifest and contracts, and certify both batches. The helper already
removed the previously reported A-to-B dependency cycle; recheck depcheck
after the supplier chain closes.

Host helper b-1 has handed off all 25 selected local-coefficient items plus
two new A-level suppliers, with 19 proof-bearing prechecks and 29 renders
passing. **This handoff is not an owner proof approval.** Its
`lem-canonical-twisted-fundamental-classes-over-compact-subsets` still has
the arbitrary-compact gap identified above: step 4.1 assumes that a compact
set intersected with finitely many chart balls becomes a finite union of
convex compact sets. That is false; finite chart coverage does not impose
geometric regularity on the compact subset. Group b now owns the file after
helper handoff and must adapt the published finite-chain enlargement plus
pointwise-injectivity argument before using the twisted fundamental class
or the owner-held Wu repair. Check the double orientation-system tensor
types, arbitrary-component cohomology product assertion in ZF, and literal
TeX commands too. The helper's clean focused tests do not detect these
mathematical/type defects. Re-run focused checks after repair.

Update 14:03 AEST: group b has now replaced the compact-support gap with a
finite-chain enlargement (new step 4.1) and finite chart gluing (step 5.1).
The owner read those complete steps and the new closed-support Mayer--Vietoris
step 1.2: the boundary support of a finite relative cycle is compact and
disjoint from `K`, small balls centered in `K` avoid it, their finite union
has the convex-union result, and pointwise injectivity descends from each
chosen center. Intersections of the later chart pieces lie in one larger
chart. This repairs the **specific arbitrary-compact gap** flagged above.
Group b still owns focused validation, contracts, coefficient-type review,
and downstream Wu authoring; this bounded check is not a batch certificate.

### Action-angle lattice-sheet proof check (14:07 AEST)

The active a-3 draft `thm-liouville-arnold-action-angle-theorem`, step 2.1,
currently says properness and discreteness prevent extra stabilizer sheets
from changing the lattice index, but does not derive that claim. Group a must
make this explicit after a-3 handoff. A local route: the fibre action map is
a local diffeomorphism in the cotangent parameter at every stabilizer point,
so the implicit-function theorem extends each chosen basis element to one
smooth lattice sheet. If the extended sheets failed to generate the full
lattice on arbitrarily nearby fibres, subtract their integer combinations
to put the extra elements in a fixed compact fundamental parallelepiped.
Properness/continuity of the action and a convergent subsequence then give a
limit stabilizer at the central fibre. Subtract the corresponding central
lattice sheet; one obtains nonzero nearby stabilizers tending to zero,
contradicting the uniform local injectivity of the action map near the zero
section. State the exact compactness/trivialization and uniform-neighbourhood
facts and add any direct smooth inverse/submersion supplier needed. The local
proof must establish a **full** smooth period lattice before defining
period-one angle coordinates; the current one-sentence assertion is not a
complete derivation. Do not edit the a-3-owned item while its helper runs.

The preceding a-3 supplier
`lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice`
also has a direct dependency gap. Its F2 cites only a *local* commuting-flow
action but the statement and proof use a global `R^n` action. On the compact
regular fibre the Hamiltonian fields are tangent and restrict to smooth
fields; published
`cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` makes each
flow global, after which their commutation gives the global action. Add that
supplier and the one-step derivation to the item and shared contract after
a-3 handoff. The published compact-completeness corollary is unconditional
and uses no choice. The current item must not silently upgrade a local action
to global.

Update 14:17 AEST: a-3 has now authored both bridges in its owned item files.
The owner read the complete revised compact-fibre step 1.1 and action-angle
steps 1.1–2.1; they supply the previously missing global-flow and full-
lattice derivations. Group a should integrate their exact direct dependencies
and contracts after handoff and run focused gates. The earlier holds in this
section are resolved at the item-text level, not yet at batch certification.

### Milnor join typesetting (14:13 AEST)

The active b-2 Milnor-join theorem draft
`thm-milnor-join-model-is-a-contractible-free-g-space`, proof 1.3, has the
literal text `,qquad` in its displayed principal-bundle chart map. Group b
should correct this to `,\qquad` after b-2 handoff and include a real
KaTeX/render check; a successful parser can still show malformed typesetting.

A read-only scan of all current selected item files at 14:15 AEST found two
other literal missing-backslash `qquad` tokens: group b lead's
`lem-cartan-coherence-for-higher-diagonal-approximations` line 33, and active
b-2's `prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups`
line 26. Correct all three exact displays during the respective owner
integration; do not edit b-2 files until handoff. Re-run the same selected-
item token scan after repairs.

### Loop-space classifying map: choice and boundary convention (14:15 AEST)

The active b-2 draft `prop-loop-space-of-bg-recovers-g-up-to-homotopy`
currently states its weak equivalence without AC, but F2 invokes published
`thm-numerable-fiber-bundles-are-hurewicz-fibrations`, whose exact Statement
assumes AC. Do not count that source as a choice-free supplier. Milnor's
specific bundle has canonical **countably indexed** charts and numeration;
the published fibration proof uses AC only to well-order the arbitrary set
of finite chart words. A local specialization can use the explicit length-
lexicographic order on finite words of natural numbers and reproduce its
regular lifting construction; all other steps in that proof are finite or
local. Group b should either author this exact choice-free specialization
(with direct dependencies/contract) to preserve the current weak claim, or
state and propagate AC and request owner scope renewal. A mere citation to
the AC-stated general theorem does not prove the unqualified weak claim.

There is also a sign/direction convention: the published
`thm-long-exact-sequence-of-homotopy-groups-of-a-fibration` says, for the
library's first-loop-first convention, its component boundary is the
**inverse** of endpoint transport, `[e_0]·[gamma]^{-1}`. The b-2 draft
defines `partial(gamma)` as the endpoint label `g` of a lift, then calls it
the point-set connecting map. If that wording is retained, set
`partial(gamma)=g^{-1}` and check the higher-degree convention, or explicitly
call the endpoint-label map the inverse-convention weak equivalence and
distinguish it from the LES boundary. The helper's correction of the arrow
direction `Omega BG -> G` is right; the exact inverse convention still needs
to match the supplied LES. Group b owns the repair after b-2 handoff.
The bounded, formula-level owner derivation is in
`research/phase-2-next-21-milnor-path-lift-analysis.md`; it is an analysis
checkpoint, not an authored item or acceptance.

### Green indecomposability scope hold (13:54 AEST)

The Batch-9 manifest currently states Green's index-`p` integral-induction
theorem for every indecomposable `ON`-lattice over a merely *splitting*
`p`-modular system, but its own strategy assumes algebraically closed residue
field. The helper-owned theorem draft explicitly adds this hypothesis.
The published splitting-system definition only says the fraction and residue
fields split the finite group algebras; it does not imply algebraic closure.
Primary Jin, *Basic Modular Representation Theory*, Theorem 4.1,
https://web.math.princeton.edu/~gyujino/Modrepthy.pdf, assumes algebraically
closed residue field, while Craven's integral/modular treatment
https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf requires
absolute indecomposability in the arbitrary-field variant. Thus the current
draft does not prove the selected broader manifest statement. Group b must
not certify Batch 9 until this interface is resolved: either supply a valid
argument at the originally stated generality, or propagate an explicit
algebraically-closed-residue (or absolute-indecomposability) hypothesis
through the manifest and all dependent uses, with owner scope renewal. The
root is checking which exact repair preserves the Brauer main claim. Do not
silently count the narrower helper item as the original selected theorem.

Owner ruling after reading the complete b-3 handoff and exact downstream
statements: use the **algebraically closed residue-field** repair in the
Brauer pair. The standard Green proof in Jin Theorem 4.1 establishes exactly
that version; the helper's endomorphism-ring proof has the same explicit
premise. A splitting system alone does not give it, so retain that stronger
hypothesis in Green, propagate it to the relative-projectivity character-
vanishing lemma, the local block-projection support lemma, and the Brauer
Second Main Theorem wherever they consume the Green route. The Nagao
decomposition itself does not consume Green and need not be narrowed merely
because a later character argument does. Group b may now amend the shared
Batch-9 manifest and contracts to these exact statements; the owner will
re-review the current hash and record the scope receipt after integration.
No use of the unproved broader Green statement is authorized. If the lead
finds a proof at the original generality it may instead preserve that scope,
but must show the complete argument before certification.

In b-3's new `lem-integral-mackey-and-higman-for-og-lattices`, proof 1.2
starts with a section of the induction counit, while its premise defines
relative projectivity only as being a summand of an induced module. Add the
small bridge before the trace calculation: for
`Y=Ind_Q^H V`, the counit `Ind_Q^H Res_Q^H Y -> Y` has the explicit
`H`-linear section `h tensor v -> h tensor (1 tensor v)`. If
`M` is a summand of `Y` via inclusion `i` and retraction `r`, compose this
section with `i` and `Ind Res r` to split the counit for `M`.
Then the helper's coefficient-at-identity argument proves Higman's
criterion. This is a finite algebraic derivation and adds no choice; group b
must amend the authored item/contract and recheck before certification.

### FA-10 owner scope renewal (13:53 AEST)

The Batch-7 manifest now parses. Owner scope `proceed` was recorded for
`reflexivity-and-eberlein-smulian` at 2026-09-13T03:53:20.326Z, SHA
`ac7195248d2f8449d4506e0fdccb2e6f4c21ebbeebe31f1d469923031ab268a0`.
The owner reviewed the repaired Lp uniform-convexity corollary and full proof:
its `AC_omega` hypothesis exactly propagates the published real/complex Lp
Banach completeness premise. `step3-decisions check --phase scope` reports
closed, 21 pairs, 756 items. Group c may now record its normal focused item
decision for that corollary, then integrate and certify Batch 3. This owner
receipt does not waive any proof or batch gate.

The lead's subsequent Batch-2 amendment added
`lem-real-and-complex-c-zero-are-banach` as an A-level supplier for companion
examples, changing the FA-10 scope hash. Owner reviewed its complete
choice-free coordinatewise-limit proof and recorded a renewed `proceed`
receipt at 2026-09-13T04:01:30.468Z, SHA
`9ae821aa6775e8c3c87ad57c074894ef6f07446da957cef979941b6c8a40e814`.
This **supersedes** the earlier FA-10 receipt above. Scope check is closed
for 21 pairs and 757 current item rows. Group c can use the current receipt
for its remaining focused item decisions; any further FA-10 manifest change
requires a new current-hash owner review.
