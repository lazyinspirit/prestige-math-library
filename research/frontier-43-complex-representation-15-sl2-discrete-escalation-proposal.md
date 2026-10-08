# Batch 5 escalation review and focused repair

Run: `frontier-43-complex-representation-15`. Reviewer/repair owner:
`/root/sl2_discrete_escalation_repair`. The root authorized round 1 only for the
confirmed eigenvector-law defect below. Two rounds per branch is the maximum;
one round has been used on this branch. No item decisions or runtime were edited.

## Confirmed finding and round 1 correction

`thm-irreducibility-and-k-types-of-the-discrete-series`, Statement, had the
ill-typed equations `pi_n(k_theta) f_{n,j} = exp(-i(n+2j)theta)` and its
antiholomorphic analogue. Both right-hand sides omitted their vector factors.
Restored `f_{n,j}` and `widetilde f_{n,j}` respectively. The model Definition,
its Verification 2.2, the weighted-space basis argument, and the theorem's
complete invariant-subspace/ladder proof already give these corrected laws.
No additional mathematical result is required.

The correction also restores the exact Statement mirror in batch 5's page
manifest and the two literal Statement quotations of this supplier in the
batch 5 proof contracts. No other mathematical body was changed.

The complete corpus text/dependency search finds exactly two direct consumers:

| Consumer | Actual use | Result of examination |
| --- | --- | --- |
| `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r` | Statement (iii), F6, Proof 5.1–7.1: irreducible discrete models, their signed one-sided weights, and Casimir | Its complete ladder/classification proof uses the correct weights and model identification. Its own Statement needs no change. F6's supplier quotation was refreshed. |
| `ex-lowest-k-types-of-the-first-holomorphic-discrete-series` | F3 and Proof 2.1: irreducibility at n=2; F1 independently supplies the correct eigenvector law | Its complete norm and ladder computation is correct. Its own Statement needs no change. F3's supplier quotation was refreshed. |

Neither consumer's Statement changed, so no further propagation is required
under CLAUDE §14 and WORKFLOW's interface-change rule. In particular, the
classification consumer still carries its separate RG-26/Borel escalations;
this correction does not close them.

## Actual checks

All commands were run from the repository root after the final item edit.

- `node tools/proof-layout.mjs items/thm-irreducibility-and-k-types-of-the-discrete-series.md`: exit 0, 1 item, 4 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-irreducibility-and-k-types-of-the-discrete-series.md --json`: exit 0, 1 proof checked, 0 failures.
- `node tools/rendercheck.mjs items/thm-irreducibility-and-k-types-of-the-discrete-series.md --json`: exit 0, 1 file, no errors or warnings.
- `node tools/proof-contract.mjs research/frontier-43-complex-representation-15-batch-5.proof-contracts.json --strict --items thm-irreducibility-and-k-types-of-the-discrete-series,ex-lowest-k-types-of-the-first-holomorphic-discrete-series --json`: exit 0, both contracts checked, no errors or warnings.
- `node tools/manifest-deps.mjs research/frontier-43-complex-representation-15-batch-5.pages.json`: exit 0, 24 items, 0 errors.
- Full batch-5 strict contracts: exit 1, seven stale quotations of the actively authored batch-3 `lem-k-type-decomposition-of-the-sl2-principal-series`; no error in either refreshed quotation of the repaired theorem. The affected subjects are the highest/lowest-weight lemma, limits Definition, coefficient lemma, classification theorem, Fell-continuity lemma, non-Hausdorff corollary, and parameter-identification example. Do not mechanically clear them while batch 3 writes.

Raw SHA256 at this checkpoint:

| Carrier | SHA256 |
| --- | --- |
| corrected theorem | `2fb8b8e99be7a311dc10fb33a6a63ee70c0226250437582f81ad52baf74be47d` |
| unchanged classification consumer | `2f6081f97cc3ad1143fe7b77fe1b7ef1e1532597d8014888b6401348b49b184b` |
| unchanged first-holomorphic example | `0fe7c0ed2a1f9588b210b39cde819a5c34b547bd6d7f2dd40025424d79c65ff2` |
| batch-5 pages manifest | `ad9d922e09b8164a23fe3a61317ff8f3b2b3fb759a1e2c1718e0c9a39eb18e35` |
| batch-5 proof contracts | `375c663f8025485a520d4ce3b9de46fe189e4ed0c166883d2b920ac5e6b0e26c` |

These are actual carrier hashes, not Step-3 certifications or independent audits.

## Remaining supplier-first obligations

The twenty current escalations largely identify unfinished supplier evidence,
not twenty independently confirmed defective proofs. Re-read stable batch-3
K-type/ladder/irreducibility/unitarity/complementary/sign-equivalence carriers
before refreshing their consuming contracts. The discrete-model, coefficient,
square-integrability and endpoint proofs checked so far preserve the fixed
Casimir `(nu^2-1)/8`, signed K weights, exact `sech(t/2)` endpoint, radial
constant `2*pi`, and embedding norm `4*pi/(n-1)`.

`thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`, Proof 8.1,
requires the authored batch-1 separable group-C*-algebra and GCR/kernel/Mackey
Borel suppliers and their type-I conventions. Its preceding K-corner,
multiplicity-one, compact-image and analytic-vector globalization arguments
were examined locally. The planned GCR supplier promises exactly the missing
GCR-to-type-I and topology/Mackey Borel identification; planning is not proof.
Actual downstream use is Plancherel F3/Proof 4.1–7.1 and, through Plancherel,
the tempered-status theorem F2/Proof 1.1–3.1.

`thm-plancherel-support-for-sl2-r`, Proof 4.1–6.1, needs a stable, actually
proved measurable dual field and its ideal-support/diagonal-algebra argument.
The batch-1 irreducible-disintegration manifest strategy explicitly includes
the needed ideal-support projections generating the full diagonal algebra;
there is therefore no confirmed need for an additional general theorem on this
ground. The exact authored argument must still be read before acceptance.
On the explicit SL2 field, quotient the redundant real principal parameter by
sign equivalence (or use positive representatives and push forward its measure)
before an onto assertion: two independent fibres indexed by +s and -s would
make the transform fail to be onto. The present text says its integral is over
the actual dual, so this is a bookkeeping obligation to make explicit, not a
confirmed false final claim. General decomposition existence alone does not
identify the cited explicit measure or prove this transform's range.

The positive-kernel witness retains the spherical corner
`phi=e_K*psi*e_K` and the half-scaled Casimir:
`-Omega=Delta/2`, `D=phi^*(-Omega-1/8)phi`. The explicit Hardy calculation
and its complementary/trivial negative images were checked; no zero-mass
argument replaces them. Keep the Harish-Chandra citation exception bounded
to the original smooth-test trace identity and its source normalization,
degrees and densities. Haar conversion, field/onto range, support and
tempered consequences still require local arguments. No original full-text
reading or extra citation exception is claimed here.

Property-T consumers belong to `/root/property_t_normal_gap_repair` and were
not edited. The two active supplier batches and all other owner scopes were
left untouched. Next action: the same reviewer examines stable authored
suppliers and their exact uses after root supplies the drained-input scope;
then repairs confirmed remaining findings within the branch limit and reports
current evidence for the dependency-ordered central recertification pass.

## Extended current batch-3 supplier assessment (read only)

Root subsequently assigned the complementary/principal supplier assessment;
the native batch-3 writer is active. No batch-3 carrier was edited and no
repair round has been spent on any finding in this section. The full current
Statement, Facts and Proof were read for the complementary unitarity theorem,
intertwiner eigenvalue recurrence, complementary convergence corollary,
generic-irreducibility theorem, K-type decomposition lemma and unitary-principal
theorem. The following are independently confirmed local defects, not claims
that their retained final representation-theoretic conclusions are false.

1. `thm-unitarity-of-the-sl2-complementary-series`, Proof 1.1: at positive
   odd `nu=2m+1`, the factor `1-nu` is said to vanish. This is false for
   `m>=1`. The actual numerator `2l-1-nu` vanishes at `l=m+1`; hence
   `a_{+/-2j}=0` for `j>=m+1`, whereas every factor through `j=m` is
   nonzero. Replace this exact sentence. No Statement correction or missing
   theorem is needed. The normalized weights, positive interval, finite
   endpoint rescalings, odd-parity recurrence and completed-unitarity argument
   were independently checked from the displayed products and ladder laws.
2. The same theorem, Proof 3.1: on the stated smooth compact picture the
   endpoint form is `fhat(0)*conj(hhat(0))`. Its radical is exactly
   `{f in C∞_0(K): fhat(0)=0}`, not the algebraic span of all nonzero modes.
   An infinite rapidly decaying nonzero Fourier series with zero constant
   coefficient lies in the radical. The algebraic span is its C∞-dense core;
   the quotient is still one-dimensional and trivial. Smallest correction:
   state the exact kernel and, if desired, identify its C∞ closure. No new
   supplier and no change to the theorem's Statement are needed.
3. `thm-generic-irreducibility-and-the-exceptional-parameter-lattice`, Proof
   1.1: writing `a(k,g)=|alpha(p(k,g))|` and `kappa=kappa(k,g)`, the actual
   pre-substitution norm is `integral a(k,g)^(2+2 Re nu)|f(kappa)|² dk`.
   The printed equality instead retains `dk` and `f(kappa)` but changes the
   multiplier to `a^(2 Re nu)`. After the change of variable `k'=kappa`,
   the correct expression is `integral a(kappa^{-1}(k'),g)^(2 Re nu)|f(k')|² dk'`,
   since the positive angular Jacobian is `a²`. The latter gives precisely
   the required boundedness by the supremum of the compact multiplier, and
   the local boundedness/strong-continuity route remains valid. Smallest
   correction is to display that substitution accurately. No Statement
   correction or missing result is required.

No external original-source reading was undertaken or claimed for these
elementary independently checked calculations. Full-text consultation remains
required if a later stable supplier presents an uncertain imported argument.

Exact batch-5 interfaces consumed from these suppliers:

| Supplier | Batch-5 actual use |
| --- | --- |
| complementary unitarity | Classification F5/5.1–6.1: positive invariant weighted completion, irreducibility and even K weights; Plancherel F5/1.3: unitary spherical vector and Casimir `(nu²-1)/8`; tempered F5/3.1: completed unitary models; parameter-identification example: actual complementary classes. None uses the erroneous positive-odd sentence. |
| complementary convergence | Tempered F6/3.1 uses only the completed sign-equivalence proved in supplier 1.2; non-Hausdorff corollary F6/3.1 uses the positive-parameter Fell limit. Unit-weight `f0`, opposite-parameter intertwining, reciprocal weights and compact-uniform log-cocycle estimate were read directly. |
| generic irreducibility | Classification F4/5.1–7.1 and Plancherel F5/1.3 use irreducible imaginary principal models and exact Casimir; Fell-continuity F5/4.1, non-Hausdorff F4/1.1–1.2 and parameter example use the exceptional lattice, endpoint and parameter distinction. The erroneous norm equality has a correct local replacement before these consumers can be reconciled. |
| unitary-principal theorem | Limits Definition F4/3.1 and limits-unitarity F1/1.1 require the actual closed positive/negative odd-tail invariance and strong unitary action. Supplier's full current disk/Hardy expansion argument was read and gives those precise closed-summand claims; algebraic tail invariance alone is not substituted for it. |
| K-type decomposition | Supplies the ordinary compact `L²_epsilon(K)` orthonormal Fourier basis and K-finite core. Complementary consumers must use the separately proved positive weighted completion, whose normalized basis is `a_n(nu)^(-1/2) f_n`; the ordinary-L² orthonormal statement is not transferred to that completion. |

Direct consumers of the complementary unitarity item found in the corpus are
the two Property-T subjects (owned separately), complementary convergence,
the beyond-interval counterexample, spherical eigenvalue example, parameter
example, classification, Plancherel and tempered-status theorem. Proof-only
corrections above preserve supplier Statements and do not mandate downstream
Statement propagation, although all existing supplier escalations and stale
contract evidence still require their normal stable-use reconciliation.

Ready for exact stable repair authorization after the native writer drains;
retain the two-round limit separately for each concrete branch. Root owns
integration, supplier decisions, runtime and the final dependency-ordered
recertification. Property-T owner retains its three consumer subjects.

## Full operator-family continuation assessment

Root assigned the exact residual full-operator meromorphy obligation after the
preceding assessment. At the actual read, the native author had already written
`thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`, raw SHA256
`73cb1e726e9aac6ce0a71385adca5ecd7b9e2aa36d3b7ddb8f6fdf30ff6b998a`.
Its complete current Statement/Facts/Proof, the complete standard-intertwiner
Definition and scalar recurrence, and the complete parameter-equivalence theorem
were read. The Definition's Remarks still describe the continuation as open;
that evidence needs stable reconciliation, not an invented second author proof.
No carrier edits or mathematical acceptance have been made.

The actual native proof supplies the smallest missing operator argument:

1. From the exact Gamma formula, scalar numerator poles at nonpositive
   integers are simple. At `nu=-m`, matching `m≡epsilon (2)` makes both
   denominator arguments half-integral and nonzero, leaving a simple pole;
   opposite parity makes at least one reciprocal Gamma factor zero and cancels
   that pole. Thus the common scalar pole set is exactly
   `P_epsilon={-m:m>=0,m≡epsilon (2)}`. One local factor
   `h(nu)=nu-nu_*` clears the full family at a pole; elsewhere `h=1`.
2. On a closed parameter disc with `|nu|<=M`, choose a large nonnegative
   parity index `r0` so `r+1>=2M`. The cross-multiplied recurrence gives
   `|h c_{r+2}| <= (1+L/(r+1))|h c_r|` with an integer `L>=4M`.
   Iterating from the bounded holomorphic `h c_{r0}` gives a uniform
   polynomial bound `C(1+|r|)^L`, using the finite binomial product;
   no division by a potentially zero eigenvalue occurs. The finitely many
   smaller indices are bounded separately. Negative indices obey the same
   estimate by `c_{-r}=(-1)^r c_r`.
3. For angular derivative order q, rapid Fourier decay with input seminorm
   `p_{L+q+2}` makes the differentiated multiplier series dominated by a
   convergent quadratic tail. This supplies continuous maps on C∞, uniform
   convergence in every output seminorm, and density of finite Fourier sums.
   On a slightly larger cleared disc, scalar Cauchy coefficient estimates
   give coefficient operators `T_j` satisfying
   `p_q(T_j f)<=C_q S^{-j}p_{L+q+2}(f)`. Their Taylor series converges in
   each seminorm uniformly on bounded input sets and smaller discs. This is
   full local operator-family holomorphy after common pole clearing, not
   merely scalar continuation.
4. In the initial half-plane, uniform Fourier approximation plus the
   integrable kernel bound identifies this series with the actual integral.
   Scalar meromorphic identity and smooth Fourier density give uniqueness.
   The two adjacent-index recurrences yield both raising and lowering
   intertwining identities; K-diagonality yields W. Continuity extends them
   from finite sums to smooth functions. Differentiating
   `Pi_-nu(exp(-tX)) A(nu) Pi_nu(exp(tX))f` makes its derivative zero for
   real generators J,H and the upper unipotent generator. Point evaluations
   and the scalar zero-derivative theorem make it constant. KAN generation
   then proves the full group identity. This valid route uses actual smooth
   action continuity; no Gamma asymptotic or unproved abstract globalization
   theorem is substituted.

The normalization/endpoint audit is consistent with that argument:

| Parity/parameter | Raw operator and base normalization |
| --- | --- |
| even, nu=0 | Raw A and actual eigenvalue c0 have a common simple pole; A/c0 extends, all even normalized multipliers equal 1. |
| odd, nu=0 | Raw A is regular, c1=-i*pi and c_-1=i*pi. The formal c0 has a pole and is not an odd eigenvalue; normalization uses c1. The two odd tail chains remain the separate endpoint model. |
| parity epsilon, nu in P_epsilon | Every actual eigenvalue and the actual base eigenvalue have the same simple pole with nonzero residue; their quotient extends holomorphically. This pole lattice is disjoint from the reducibility lattice. |
| even, nu=+odd | Raw A/c0 is finite and kills the high tails; c0 is nonzero. In particular nu=1 gives the constant-mode quotient form. |
| even, nu=-odd | Raw A is regular, c0 vanishes, and A/c0 is meromorphic with poles on the surviving tails. At nu=-1, `(1+nu) a_{+/-2j}->2j` and the constant weight tends to zero. |
| odd, nonzero even exceptional nu | Raw A is regular; positive even parameters kill tails, negative even parameters kill the central modes. These are exceptional kernels, not scalar poles; no invertibility is claimed. |

For nonexceptional parameters the actual base index is 0 in even parity and 1
in odd parity. The reciprocal recurrence makes normalized multipliers at nu
and -nu multiply to 1; for imaginary nu they have unit modulus. The current
equivalence theorem explicitly clears common base poles and passes the
intertwining identity using actual smooth-action continuity.

Actual downstream uses needing this stable proof are complementary unitarity
F4/2.2 (continuous normalized smooth intertwiner including regularized nu=0),
parameter-equivalence F1/1.1–4.1 (common clearing, continuity and group
intertwining), and complementary convergence F4/F8 and 1.1–1.2 (opposite-
parameter group intertwining and completed sign equivalence). Batch-5 uses
these through its complementary, parameter and Plancherel branches already
listed above. The current Definition/decision's unclosed discharge must be
reconciled after the native author drains and the theorem's actual checks and
contract are stable. No separate new mathematical supplier is presently
confirmed missing on this continuation branch, and no repair round has been
used on it by this reviewer.

## Latest native-byte recheck before complementary authoring

Root requested a narrow recheck of the three previously confirmed proof
defects while the native principal author is still live. No source check was
repeated and no active carrier was edited.

- **Still present:** complementary unitarity 1.1 still says the factor
  `1-nu` vanishes at every positive odd `nu=2m+1`. It still needs the exact
  replacement `2l-1-nu` at `l=m+1`.
- **Still present:** complementary unitarity 3.1 still calls the smooth
  zero-constant-coefficient radical the algebraic span of the nonzero even
  K-types. It needs the exact smooth kernel or its C∞ closure.
- **Fixed by native author:** generic irreducibility no longer contains the
  erroneous angular norm equality. Its actual F4 now uses the K-finite
  detection supplier. That supplier's Proof 1.1 computes
  `dk'=|alpha|² dk`, and Proof 2.1 explicitly displays both the correct
  pre-substitution power `2+2 Re nu` and post-substitution power `2 Re nu`
  with inverse angle argument and `dk'`. This is mathematically the required
  correction; no owner re-edit is needed for this finding.

Current raw hashes at this recheck:

- complementary unitarity:
  `a5a245c204b22814ce1289aa425218d3c445be605e77621615b7647f3d39f37c`;
- generic irreducibility:
  `0ea4a42aac72a10e5998e7ab3dfa4deb456f2292f6afe0af0d3520800092790f`.

The native report's last completed checkpoints are full-family continuation,
unitary-principal unitarity/odd-tail Hilbert completion, then level-8 parameter
equivalence. Each reports item checks, current contracts and supplier review;
the final twenty-item proof-layout pass remains pending. Its explicit next
action is level-8 complementary unitarity. Thus the two residual sentences
are in an item the native author is about to revisit, and should be rechecked
again after drain before assigning any owner correction. The report also
retains four shared page-prerequisite amendments for Step 4 and the owner-held
standard-intertwiner discharge, although its new continuation proof has
reconciled the actual mathematical use. These are report observations, not
new owner verdicts or artifact-completion claims.


## Stable same-owner round 1 completion after native drain

Root confirmed native principal dispatch ended successfully at 22:05:33.965 UTC,
then authorized exact stable supplier corrections and batch-5 reconciliation.
The native final twenty-item carriers were reread in dependency order. The
smooth endpoint radical and angular Jacobian findings were already corrected
natively; neither was re-edited. The remaining positive-odd numerator sentence
was corrected to 2l-1-nu at l=m+1. A further final-carrier finding in the
eigenvalue recurrence was corrected: Proof 1.1 now identifies b1 as the integral
of q1 (which already includes u-i), and Proof 2.1 names its separate radial
scalar kernel h1 to avoid inconsistent reuse. The exact Gamma Statement and
all scalar poles, zeros and normalizers remain unchanged. This uses one focused
round on each concrete corrected branch; no second round was needed.

The standard-intertwiner Definition now explicitly records the actual full
meromorphic smooth-operator discharge supplied by the continuation theorem.
That theorem’s initial-half-plane use of the Definition stays noncircular: the
Definition proves the convergent integral, covariance and right intertwining,
while the theorem derives operator continuation. Its six actual Definition
consumers (recurrence, continuation, parameter equivalence, complementary
unitarity, convergence, spherical-eigenvalue example) were examined, and their
literal quotations were refreshed. Their substantive Statements need no change.

Four earlier A-page requirements were added only to the owned batch-3 manifest
and library A frontmatter. Canonical research/plan-spec.json was not written;
the native Step-4 splice owns that reconciliation. Actual consumed interfaces:
Dirichlet’s period-one coefficient Definition and Fejer/Poisson’s Cesaro Definition
and uniform Fejer theorem in generic irreducibility 1.3/3.2; Beta/Gamma in the
standard Definition 5.1 and recurrence base evaluation/continuation; scalar
Banach-Cauchy estimates in operator continuation 4.1. All four homes precede
this A page. Their exact item/home uses were checked against the canonical plan.

Batch 5’s principal inputs were reconciled on these stable proofs. Forty-five
item-edge evidence rows now record exact contract fact/step uses and current
supplier hashes; statuses remain open for root-owned item decisions and
certification. The limits Definition now invokes the actual closed-tail
unitary supplier; the limits theorem, classification complementary Fact,
non-Hausdorff complementary limit and tempered sign-equivalence scope remove
stale missing-supplier assertions. The parameter example now has explicit F7
and proofs of the positive completed range and real-parameter completed unitary
sign equivalence. On finite sums the normalized intertwiner’s reciprocal weights
give a norm isometry, and the inverse/density give the onto unitary extension.
Its substantive catalogue is preserved; only the obsolete open-supplier caveat
in the Statement was removed. No added dependency is required.

The complete type-I/standard-Borel classification and Plancherel field/onto
branches remain held on batch 1, which was still active. No batch-1 carrier,
Property-T consumer, published Gamma supplier, runtime or owner decision was
edited. The Property-T owner received the final complementary and convergence
raw hashes and retains its separate two-consumer reconciliation.

Actual final checks: batch-3 proof-layout 20 items/110 steps/0 defects; explicit
nine changed paths proof-layout 9 items/57 steps/0 defects; those nine prechecks
and render checks pass. Both strict contract files pass (20/20 and 24/24),
manifest-deps passes for all 44 owned items, content policy passes 44 items with
zero warnings, and citation-fidelity checks 565 citations across both batches
with no missing quotes or widening candidates. An intermediate contract input
refresh omitted four implicit prior-step citations; those exact contract fields
were repaired and both strict checks rerun successfully. No item proof changed
after its final proof-layout pass.

The run-overlay validate-plan command genuinely exits 1 with 157 warnings and
39 errors on other selected pages; no error remains on either owned SL2 pair.
The principal four undeclared prerequisites are resolved by the owned overlay.
Known redundant-prerequisite warnings remain advisory. The wrapper that filtered
its saved output exited 0, which is not recorded as a plan-validator pass.
These local checks do not constitute independent audits or central Step-3
certification. Root still owns the final decisions, full stable pass and gates.

Current raw SHA256 carriers (after final item and contract edits):

| Carrier | SHA256 |
| --- | --- |
| `items/def-standard-intertwining-operator-for-sl2-r.md` | `1e7a3cf2774186afbb8bcf074c5919ba0e316acd29673751e9188bc11e6e9152` |
| `items/lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner.md` | `ddad3727d3e3a819469f34b01d8e3fba346bc187f121a6f0c3d510004bdd79f5` |
| `items/thm-unitarity-of-the-sl2-complementary-series.md` | `445378f6c4f8ff83911a411db650c1648427dbf4b61d76366d0814ed43fe691d` |
| `items/def-limits-of-discrete-series-for-sl2-r.md` | `e9c8922cece6c3b7fc3c7236fe4e7e199b23fe88294bbce48bb1b8f6400a0cb4` |
| `items/thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series.md` | `e6bbcbaf125dc08bb44394b54856b3d5cce245db4ba54414dc3345c2df1d4388` |
| `items/thm-classification-of-the-irreducible-unitary-dual-of-sl2-r.md` | `9e02a436a0a3c70c9a292831b41ff5c2b14e275615e5473751b624068ec13257` |
| `items/cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits.md` | `fbd291a6f56aceba72f4e2337ba1415c8da5a5492a474d892cca00bc1df3e533` |
| `items/thm-tempered-status-of-the-sl2-r-unitary-series.md` | `7256b936ed786d9c3d4a072ccccbab1d4e525f224da0f79e4257413c073ec2cd` |
| `items/ex-parameter-identifications-in-the-sl2-r-unitary-dual.md` | `fe5b195ca2cac86836ba71da6c7376f4fd050ec63bdcdefcb9bba88c7381a339` |
| `research/frontier-43-complex-representation-15-batch-3.pages.json` | `c991269f2c767e936235cb112e605ba9c712e38e8c6050bc71e55ff17120cbb6` |
| `research/frontier-43-complex-representation-15-batch-3.proof-contracts.json` | `ff81a2b2f5d5346dd4d0629687a339afd3fd19dd696b92596364373fce3b337f` |
| `research/frontier-43-complex-representation-15-batch-5.pages.json` | `85900cf972a90457263205bcb5c5b8c97760957b0065bf97dfa556d4db0b5abc` |
| `research/frontier-43-complex-representation-15-batch-5.proof-contracts.json` | `3a859971e7076fabcade14402ef9860584c026589761ca0cad32e5b9767afbec` |
| `research/frontier-43-complex-representation-15-batch-5.cross-batch-dependencies.json` | `4d9987f427bb11588ed60dcd47a3698554dfdb4e2234882a738d84bf2672e871` |
| `library/representation-theory/sl2-r-principal-and-complementary-series.md` | `4aa24f9e8de8f4dee427a1cc9d7f2d7726361d0df61e35561d41523e619b4535` |


## Held batch-1 type-I/GCR and actual SL2 consumers: bounded preparation

Root extended the same reviewer’s ownership to the type-I Definition, the
GCR/kernel/Mackey-Borel supplier and their classification/Plancherel consumers.
Preparation only: native Direct author remains active; current missing files
are unfinished scheduled obligations, not permanent impossibility. No active
batch-1 carrier, manifest, shared file, runtime or decision was changed.

At this read the single-factor splitting, GCR/kernel/Borel, central-decomposition,
irreducible-disintegration and type-I-uniqueness item files were absent. The
latest native report had reached its level-1 common-diagonalization argument,
with final handoff pending. Its stale Step-3 scope/readiness prevents current
item receipts; absence of a receipt does not certify or reject the mathematics.

### Type-I Definition’s exact discharge and independent argument

The current Definition has justified_by:[] and says adding the later
minimal-factor/multiplicity supplier would cause a dependency cycle. The
supplier’s planned dependencies already include this Definition. SCHEMA permits
exactly the justified_by discharge here: the later lemma is a well-definedness
proof, not a logical prerequisite edge back from the Definition. After its full
local proof is authored/reviewed, register the splitting lemma under justified_by
and replace the obsolete provisional explanation. Keep all promised equivalences.

The complete current polar-decomposition/nonzero-corner supplier was read. Its
nonzero-corner and polar-support clauses suffice for the following independently
checked local splitting route, which matches the current manifest architecture.
Fix a minimal nonzero p in a factor M on separable H. By AC/Zorn choose a maximal
orthogonal family p_i equivalent to p and corresponding partial isometries t_i
with initial p and final p_i. Its nonzero orthogonal ranges force countability
by separability. If r=I-sum p_i were nonzero, the supplier gives nonzero x in
rMp and its polar partial isometry; its initial projection is a nonzero
subprojection of minimal p, hence p, and its final projection is below r. This
contradicts maximality, so the family exhausts I.

Put E=l²(I), L=pH and W(delta_i tensor eta)=t_i eta. Orthogonality and exhaustion
prove W is unitary. Each t_i* a t_j lies in pMp=Cp, so W*aW has scalar blocks
a_ij I_L; testing on z tensor one fixed unit eta bounds the associated scalar
operator on E. All scalar matrix units occur in W*MW, and finite-coordinate
compressions of any bounded operator on E converge strongly, proving
W*MW=B(E) tensor I_L. Matrix-unit commutation gives the commutant
I_E tensor B(L). If pi(G)''=M, pi(g)=sigma(g) tensor I_L; uniqueness of the
scalar blocks supplies the group law/unitarity, and testing on a fixed unit
eta gives strong continuity. Sigma(G)''=B(E), so sigma is irreducible. An
orthonormal basis of L then gives dim(L) copies of sigma. Conversely a multiple
of an irreducible has that tensor-factor algebra and a minimal projection.
Crucially pH is the multiplicity space, not generally a G-invariant irreducible
carrier; minimal projections of the commutant give those carriers. No original
citation exception or missing deep theorem is needed for this argument.

### Bounded local GCR routes and smallest still-unwritten inputs

GCR to factor type I has the following complete short architecture, conditional
on its exact absent primitive-code and compact-ideal components. For a factor
representation rho, the support of rho(J) for an ideal J is a central projection,
obtained from an approximate identity. Hence its kernel is prime: two nonzero
orthogonal ideal supports cannot persist in a factor. The separable prime-
implies-primitive supplier supplies a faithful irreducible of A/ker(rho).
GCR gives an elementary compact ideal I in this quotient. The restriction of
rho to I is nonzero and therefore nondegenerate (its central support is I_H).
Every representation of K(E) has the matrix-unit form E tensor L, with any
multiplicity space L. The approximate unit for I gives rho(I)''=rho(A)'',
since rho(a e_lambda) converges strongly to rho(a). This proves type I. For
arbitrary carrier H this compact-algebra amplification does not require H
separable; do not apply a separable-H splitting lemma outside its hypotheses.
The current generic GCR Statement should retain its broad factor clause and
supply this actual compact-ideal amplification argument.

GCR to kernel injectivity is independent of the cited converse. In an
irreducible image a nonzero compact yields finite-rank spectral cutoffs and
a rank-one minimal corner; multiplication and irreducibility yield all
compacts. The corresponding elementary ideal in a primitive quotient is
nonzero in every faithful irreducible. Its support is central, hence one,
and the matrix units identify each restriction with the unique irreducible
compact-algebra model. A nondegenerate ideal representation extends uniquely:
rho(a)=strong-lim rho(a e_lambda). Thus equal primitive kernels yield equivalent
irreducibles. The actual Fell/hull-kernel topology quotient identification is
still a local supplier obligation, not an automatic continuous-bijection claim.

The planned primitive-code route is viable without Gamma-like asymptotics or
a new source exception. Code quotient norms on a countable rational-complex
dense star algebra as bounded C*-seminorms. Its closed countable laws give a
compact metric code space. In a primitive quotient, finite-vector transitivity
gives sup_{||c||<=1} q(acb)=q(a)q(b); in a nonprime quotient orthogonal ideals
violate this equality. Countably dense a,b,c and continuity make these tests
Borel. With the separately proved separable prime-implies-primitive result,
proper prime codes are exactly the primitive codes, so Prim(A) is standard
Borel. Quotient-norm strict superlevels are hull-kernel opens by positive
cutoffs, and their countable Boolean combinations generate the code Borel
structure. The currently absent excision/open-kernel and prime/Baire proofs
must be authored; this description is not their acceptance.

Under GCR the pure-state kernel map has exactly equivalence-class fibres.
Images of a saturated Borel set and its saturated complement are disjoint
analytic complements in the standard primitive code space. The commissioned
local analytic-separation proof makes these images Borel. Explicit Borel GNS
construction and vector-state maps then identify the pure-state quotient
with the representation-space Mackey quotient. These are the exact missing
written standard-Borel inputs; a countable list of equivalence classes or
second-countability of a T0 topology alone is insufficient.

An additional exact interface obligation was found in the current definitions:
def-mackey-borel-structure-and-countable-separation defines the quotient only
for second-countable G, and explicitly makes no pure-state-quotient assertion.
The GCR lemma is stated for arbitrary separable C*-algebra A. Its eventual
proof must define the analogous disjoint-union irreducible A-representation
quotient using countable dense-algebra matrix coordinates, then prove its
Borel GNS/vector-state bridge. At A=C*(G), the group/C*-representation
correspondence must preserve these Borel structures. Forward integrated
matrix coordinates are Borel from compact-uniform group coefficients and
compactly supported test integrals. Reverse group coordinates satisfy
pi(g)=strong-lim sigma(q(L_g eta_j)) for a countable approximate identity.
Countable dense g/test vectors and compact exhaustions generate the specified
representation-space Borel structure. Nondegeneracy and irreducibility must
be represented by actual countable conditions; bounded-density/transitivity
can code the latter via finite rational-vector targets. The abstract algebraic
representation correspondence alone does not discharge this measurable bridge.

The exact Glimm last-resort authority and owner direction were reread. They
permit only factor-type-I implies GCR in the separate criteria item, with
original full text unread and an honest proof_scope boundary. They do not
permit citation-only GCR implies type I, kernel injectivity, standard Mackey/
Fell Borel equality, measurable fields, range or consumer conclusions. No new
source reading or citation authority is claimed. The current absent category
lemma is additionally required to retain the GCR criterion’s reverse
countable-separation/kernel implications; classification needs the forward
GCR clauses, but the approved supplier equivalence must not be narrowed.

### Exact retained consumer holds

Classification 8.1 uses separability of C*(SL2R), its locally proved compact
images, the factor convention and the GCR-to-type-I/Mackey-Borel clauses. Its
separability supplier is present and its substantive Statement is unchanged;
the latter Definition/splitting/GCR proofs remain scheduled and unwritten.
Plancherel F3/4.1–7.1 uses classification’s standard dual and type-I claim;
F4/5.2 needs the actual ideal-support projections generating the dual diagonal
algebra and its decomposable commutant. The HS field must use positive
principal representatives and the pushed-forward redundant sign-parameter
measure before the onto proof. Its distinct Borel/model-field construction,
isometry, diagonal range and countable-test nonvanishing proof remain local.
Tempered status depends on that full support argument. Original smooth-test
Harish-Chandra identity alone remains the authorized cited fact.

Prepared status: a sound smallest local route exists for each retained
forward type-I/Borel obligation, but their exact native supplier proofs are
not yet on disk. Wait for verified native drain/continuation and root’s exact
stable edit scope, then the same reviewer reads those real proofs and handles
confirmed residuals in supplier order. No repair round has been consumed on
these held type-I/GCR/Plancherel branches.


## Verified stable type-I Definition/splitting round 1

The fresh Direct attempt ended with the provider’s insufficient-balance error;
root verified no native writer and authorized only the type-I Definition,
single-factor splitting lemma and corresponding owned batch-1 mirrors.
Read the complete new splitting, GCR and central-decomposition proofs against
actual carriers. No provider/runtime/decision operation was performed here.

Confirmed and corrected in the authorized pair:

- The Definition now records its actual local splitting discharge under
  justified_by, avoiding a reverse deps cycle, and explicitly fixes
  M=pi(G)'' for its factor/multiple equivalence.
- The splitting Statement explicitly assumes pi is a strongly continuous
  unitary representation of the topological group on the nonzero separable
  complex Hilbert carrier before drawing the representation conclusion.
- The proof now supplies the bounded amplification on the Hilbert direct sum: a
  finite orthonormal basis for the span of input coordinates proves its norm
  bound; separated families prove the product/adjoint identities. Actual
  direct-sum compression tails justify the strong-closure step.
- It computes the full matrix-unit commutant locally rather than asserting
  a computation in a step that lacked it. A projected dense sequence supplies
  the countable multiplicity basis from the actual published Hilbert supplier.
- The orthogonal-unit-vector balls have centres at distance sqrt(2)>1, not
  balls at distance at least1; their disjointness and countability argument
  are retained. The projection sum is explicitly Cauchy and lies in M by
  strong closure; minimality transfers across the polar partial isometry.
- The common-final-space isometries use u_i u_j*=delta_ij q, not the false
  u_i* u_j=delta_ij q. The norm of V is the sum of ||u_i xi||², and the
  correct product identity gives its onto coordinate construction.
- Orbit continuity is established directly at every g0, rather than by
  a sequential-only criterion on an arbitrary topological group. Both
  factor/multiple directions and the alternative commutant carrier are proved.

The three added published suppliers are finite-dimensional orthonormal bases,
countable bases from a dense sequence, and Schur’s lemma. The exact item
Statement/dependency/strategy mirrors were synchronized only in batch1.
A previously absent contract entry was created for the newly present splitting
carrier with all14 actual dependencies,13 derivations and explicit boundaries;
the Definition’s discharge boundaries and its owned supplier quotations were
updated. No source, coverage waiver, shared plan or other item was changed.

Actual final checks: one splitting precheck passes; the two-item renderer
passes; final proof-layout checks2items/13steps/0defects; selected strict
contracts pass2/2 with no warnings; batch1 manifest-deps passes48items.
An inherited leading blank before the splitting frontmatter was removed,
the formatter’s final phase numbering was adopted, and the affected citation
use labels were synchronized before the final passes. These are local checks,
not independent audits or workflow certificates.

Final raw hashes:

| Carrier | SHA256 |
| --- | --- |
| type-I Definition | d0c58cedb777690ec6c65f2971372d715981464193a8d86febd1b64da9a0a447 |
| single-factor splitting | 0b2586c9abe33757128f781af333a862bd2124e7e031a8e003a7672fe943b867 |
| batch1 page manifest | d336adc5d6d325fd01288c32f851488efe505d0674a233f4bdfecb6f4b0106b5 |
| batch1 proof contracts | 80de3b463084cbbfdc72ebd3c178f373e36ad5b62456ea09c70b24f62e9582d6 |

Actual direct consumers found are the splitting’s terminology use, the
GCR lemma’s F5, the separate group criteria F5, and classification8.1.
All intend actual factor representations with M=pi(G)'', so the explicit
hypotheses restore the intended interface without changing their promised
Statements. The GCR/criteria argument has independent fatal gaps below and
is not accepted by this repair. Classification uses only the group convention
and still depends on the unfinished GCR/Borel result. Its current literal
Definition quotation needs refresh in its normal stable reconciliation; no
batch5 carrier was edited under this narrowly bounded authorization. No
consumer Statement change and no further propagation are required here.

### Exact remaining findings in held carriers (not edited)

The actual GCR proof is incomplete despite the preserved sound Statement:

1. F4’s unrestricted claim that any nonzero ideal of an irreducible algebra
   contains compacts is false without a compact/GCR premise; the cited
   matrix-unit Definition and von-Neumann Definition do not prove the
   complete elementary-algebra amplification/extension assertions.
2. Proof2.1 infers uniqueness of irreducibles of I_rho from elementary
   I_rho/ker(rho). It must either work in the primitive quotient or explicitly
   restrict to representations annihilating that kernel.
3. Proof3.1 says an I-invariant closed subspace is A-invariant because
   I+A=A; this implication is invalid. Use the ideal approximate-unit
   support projection to prove nondegeneracy and equality of commutants,
   then apply the actual compact matrix-unit model.
4. Proof4.2 correctly needs prime-to-primitive but then incorrectly turns the
   faithful factor representation rho into an irreducible merely because
   its kernel is primitive. Choose a separate faithful irreducible tau of
   A/J, obtain its elementary ideal K(E), and keep the original factor rho.
5. Proof7.1 repeats the unjustified irreducibility of rho and therefore
   supplies no genuine general amplification. Its corrected local route is
   rho|I equivalent to id_K(E) tensor I_L, with central support1 and
   rho(I)''=rho(A)'', so every multiplicity carrier is allowed. The repaired
   separable-H splitting does not itself justify arbitrary factor carriers.
6. The reverse kernel-injectivity-to-GCR implication is asserted in the
   Statement but not assembled in the Proof; the actual category supplier
   is meant to give that implication as well as countable separation.
7. The arbitrary-C*-algebra Mackey/pure-state/group-correspondence measurable
   bridge remains as previously identified; the group-only Definition
   alone supplies no such standard quotient proof.

Its three direct coding/category/separation supplier files remain absent
(primitive quotient-norm coding, faithful essential pure-state category,
local analytic separation/saturated quotients), with excision absent one hop
earlier. This is an unfinished native generation branch, not permanent
missing mathematics. No additional citation exception has been applied.

The complete current central-decomposition carrier’s Proof3.1 contains the
false inclusion M=pi(G)'' subset pi(G)'. Only Z(M) subset pi(G)' is needed
and true. Correct that exact inclusion after stable authorization; its direct
central-diagonal supplier file is still absent. The other sixteen absent
native items retain their authoring holds. These findings were reported to
root immediately; no held GCR/central carrier was edited.

All authorized mathematical and metadata writers are now drained. Root may
launch the next native continuation when the user’s provider choice permits.
The type-I/splitting branch has used one focused round, leaving one available;
GCR and Plancherel have not yet used an owner repair round.


## Stable Cstar/GCR prerequisite closure — focused round1 drained

This supersedes the held GCR/missing-file findings above. All four absent
baseline-original suppliers now have full local proofs, and the GCR and
separable-group criteria proofs are rebuilt without narrowing their approved
claims. This is ordinary authorized owner repair, not additional owner-created
scope. Root independently read all six complete arguments and reported no
remaining mathematical defect; local checks and hashes are recorded separately
in `research/frontier-43-complex-representation-15-sl2-gcr-round1-evidence`.

Supplier order is bounded finite-vector transitivity → pure-state excision →
faithful essential orbit/category and primitive quotient-norm coding → local
analytic separation/GNS/group Borel maps → GCR kernel/Mackey characterization →
separable-group criteria. Excision proves kerφ=N+N*, right annihilation through
an approximate unit, and the nonunital compression inside A. The category
proof displays the faithful Polish Gδ stratum, orthogonal-vector orbit density,
closed norm-ball/meager orbits and invariant Borel Baire dichotomy. Primitive
coding proves open kernels, Baire prime-to-primitive, a compact bounded
C*-seminorm code space and countable prime tests. The analytic item proves
separation and explicit representation/GNS/group correspondence Borel maps;
its saturated-image assertion keeps the exact full-class-fibre hypothesis.
GCR keeps the original factor carrier, choosing a separate faithful
irreducible of its primitive quotient and proving arbitrary multiplicity by
matrix units. The criteria proof justifies the faithful cyclic restriction,
weakly closed ideal support and WOT-closed isometric image before invoking the
single authorized original Glimm fact. No general nonfactor von Neumann
classification or new source exception is used.

The seven earlier GCR faults are discharged by these exact arguments; no
smallest missing result remains in this six-item branch. Original Glimm full
text remains unread, and the exact factor-type-I ⇒ GCR implication alone is
cited under its existing authority. The complete Farah printed141–144, Marker
printed34–37, and Blackadar printed122–123,346–349,358–361 arguments were read.
Their actual cached PDF hashes and reading boundaries are in the evidence
file. Original Dixmier universal-witness and Harish-Chandra authorities remain
separate and unchanged.

### Exact changed supplier clauses and actual consumer closure

Bounded-transitivity clause2 previously said that arbitrary selfadjoint finite
prescriptions could be supplemented by J-eigenvectors and the same realizing
operator could then be clipped to spectrum J. That implies a false promise
when another prescribed eigenvalue lies outside J. Its general exact
selfadjoint transitivity is preserved. The corrected separate variant permits
only prescribed orthonormal eigenvectors whose eigenvalues lie in the closed
interval J containing0; it explicitly makes no promise for additional
arbitrary prescriptions after clipping. The full pre-repair item is preserved
in `sl2-gcr-round1-before`. Actual direct consumers are precisely the six
Cstar/GCR items above. Excision uses compatible eigenvalues0/1 (and the
single eigenvalue1 for the nonunital cutoff), so the spectrum variant fully
supports it. Category/primitive/representation coding/GCR/carrier reduction
use bounded density, ordinary transitivity, internal unitary transport or
state distance; none demands preservation of an arbitrary tuple after
clipping. No consumer Statement change is necessary. Their exact source
quotations now bind the corrected supplier clause.

The type-I Definition retains its approved factor/group clauses and splitting
`justified_by` discharge. Only the stale undefined promise that a later theorem
would equate “all representations are type I” was removed. The Remark now
points precisely to the later all-separable-representation canonical
irreducible decomposition and measure-class/multiplicity uniqueness, obtained
from central type-I factor fibres; it asserts no nonfactor algebra is a type-I
factor and introduces no prerequisite backedge. Current direct consumers use
only factor/minimality or the group convention: splitting, multiplicity,
GCR, criteria, compact-group criterion, the final equivalent-characterizations
and non-type-I witness, and the F2 counterexample. Their item-only owners were
informed of the stable interface. Batch5 classification8.1 likewise uses the
factor/group convention, and its normal supplier reconciliation remains next.
The before manifest preserves the prior literal Definition annotation.

Central-decomposition Proof3.1 replaces the false premise
M=π(G)''⊂π(G)' by the required Z⊂π(G)'. The Statement and all clauses are
preserved. The affected exact contract and manifest mirror are current; the
field owner supplies the actual factor-field producer separately.

### Final local checks and release boundary

Final explicit-path precheck:9 selected items,8 proof-bearing passes and the
Definition not applicable. Render:9 items,0 errors/0 warnings. Final
proof-layout:9 items,60 steps,0 defects. Selected strict contracts:9/9,
0 errors/0 warnings. Batch1 manifest-deps:48 items,0 errors. Citation fidelity:
669 checked citations,0 missing quotes and0 widening candidates. Formatter
numbering and all stale compact prose labels were synchronized before the
final checks. These are local checks, not workflow acceptance or certificates.
Only owned batch1 rows/contracts/coverage were changed; cross-batch file is
empty and unchanged, canonical plan/runtime/decisions remain untouched.

The shared batch1 writer is now drained. Field, final-criteria/witness and
case owners may finish their disjoint item-only branches; root owns serial
sidecar integration and the dependency-ordered stable certification. Cstar/GCR
and the bounded-spectrum clause each used focused round1 only; no round2 math
finding remains. The completed type-I splitting remains closed at round1.
Batch5 classification/Plancherel actual supplier reconciliation follows the
stable all-48 supplier completion and retains its prior citation boundaries.

Final item raw hashes:

| Item | SHA256 |
| --- | --- |
| lem-pure-state-excision-and-essential-orbit-density | 1ee115bf8ee27f447a7d908e07efdc9e67ee658e4fd865e03f2d1df0738c1aba |
| lem-faithful-essential-pure-state-orbits-obstruct-countable-separation | 368a6493dc6d7872d392879716815224967001d91a6844b7685515fdc9398a3c |
| lem-primitive-ideals-have-standard-borel-quotient-norm-codings | 864c1823fc9f442d98e8de1cafe7f6700938de0c0933cdc60d8cdce865232aba |
| lem-local-analytic-separation-and-saturated-borel-quotients | 5059e2db7fab01cf3709cf36de405abad0288aa1b0abc55f4e207384db70d275 |
| lem-gcr-kernel-and-mackey-borel-characterizations | 96ecfce9214763de3480614ed60f78c3503b0d4c892679a90ad0ac5ea5c2306a |
| lem-separable-group-c-star-type-i-and-smooth-dual-criteria | b168bc4182655fa195a71a4a98a7cf121ca39e7fddd691da70fc61c9a2931b50 |
| lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations | 74cf6277a9dff08c6b18912b9b8fd5555a4c2aa809dece26d91207250da4920c |
| thm-central-decomposition-into-factor-representations | ca0839f29244f49357294411e85f914f7d8b2b425f5e30f370b0236f3c0bf78b |
| def-type-i-factor-representation-and-type-i-group | 9abf44f3272b3dcb6ba2a1fbf565dcd238813263425d2319139c32839bfa427b |

Additional authorized concise-proof cleanup before the final release: the two
native suppliers `lem-c-star-state-gns-purity-and-polish-state-space` and
`lem-closed-witness-codings-and-measured-projections` repeated their entire Facts
blocks inside Proof. Removed only those duplicates, retaining the single Proof
Given and technique and all numbered arguments byte-for-byte. Their Statements,
Facts and exact contract quotations are unchanged, so no consumer claim or
manifest source quote changed. Explicit two-path precheck2/2, render2,
proof-layout2items24steps0defects and selected strict contracts2/2 pass. Before
snapshots, final raw hashes and checks are appended to the same evidence folder.
These are formatting/padding corrections with no additional mathematical
repair round. The shared writer is drained after this final authorized cleanup.


## Stable batch5 type-I/Plancherel/tempered actual-use closure — round1 drained

After root's stable serial integration of all48 batch1 original items and
contracts, the same reviewer repaired the three exact batch5 consumers in
supplier order. Before snapshots and final evidence live in the distinct
`sl2-batch5-typei-round1-before` and `sl2-batch5-typei-round1-evidence` folders.
No batch1 carrier, canonical plan, runtime, decision or certificate was changed.

The complete classification proof was reread. Its compact K-character corner,
multiplicity-one conclusion, compact ideal, unitary ladder exhaustion,
factorial Taylor bound for global group intertwiners and distinct-class list
remain intact. Removed only its literal “GCR file absent / definition and
splitting held” caveats. F7/8.1 now use the actual local GCR implication and the
separate group criteria for standard Mackey=Fell Borel structure. The precise
factor-to-multiple Definition interface is applied, with no undefined
nonfactor “all representations type I” claim.

The formerly conditional Plancherel field/range proof is fully local. The
actual steps are:1.4 constructs smooth density in both L1/L2 and a countable
smooth L1-dense family in periodic Iwasawa coordinates;3.1 retains native/source
Haar conversion;4.1 pushes the correctly doubled positive-parameter densities
to actual principal classes, avoiding a false two-copy ±parameter target;
5.1 uses the actual Borel class map and conull inverse to transfer an explicitly
proved Hilbert–Schmidt matrix Hilbert field to the dual;6.1 gives the isometry
and both strongly continuous regular intertwining actions. In7.2, intrinsic
closed-ideal supports are explicitly the ideal-open scalar multipliers; their
countable separating family generates the full scalar diagonal. This makes
the range projection decomposable. Step8.1 retains one common conull set for
both group actions, and proves the joint Schur calculation by bounded column
blocks and the conjugate representation. Step9.1 excludes every zero range
fibre with the common countable smooth test family and a nonzero approximate
identity coefficient, proving onto and the actual multiplicity dim(Hσ).

Step10.1 proves kerλ=intersection of genuine class kernels over the closed
support, using open quotient-norm superlevels and the countable base. At null
endpoint classes it uses the intrinsic class norm, not the zero extension of
an almost-everywhere field. The resulting closed support is exactly weak
containment in the regular representation, so the tempered consumer has a
proved bridge rather than a definition-only assertion. Step10.2 locally
recovers discrete coefficient orthogonality and formal degree (n−1)/(4π) from
inverse atomic rank-one fields; it does not merely rename the trace coefficient.
The retained Hardy/Casimir positive reduced-algebra witness explicitly smooths
vectors with compact kernels and extends the Casimir scalar by K-projections.
No Nelson theorem, admissibility claim or unproved essential selfadjointness
premise is used. All endpoint, complementary and trivial exclusions remain.

The only Plancherel citation exception remains the exact original
Harish-Chandra Cc∞ trace-inversion identity, including the recorded source
normalization/density/discrete coefficients. The original is still unread;
no new reading, citation exception, source fetch or local inversion proof is
claimed. Existing source coverage now distinguishes contextual character/orbital
source audits from the actual local norm/onto/support proof. The Kowalski
trivial-tempered source defect remains deferred to the existing root-owned
source amendment; its claim is not used.

Actual changed-Statement consumer closure is complete: classification is used
only by Plancherel, and Plancherel only by the tempered theorem. These exact
consumers are reconciled here. Tempered's Statement is unchanged; it has no
mathematical downstream item consumer on disk. Its F4 also now explicitly cites
the discrete-series irreducibility supplier for Dn±; the earlier limit-series
citations alone did not state that separate discrete claim. The A-page order
is classification → principal Fell continuity → Plancherel → tempered. Existing
five declared prerequisite pages already reach every added published field,
Hilbert–Schmidt, counting/L2 and mollifier supplier; no redundant requires or
shared canonical-plan write was retained.

Final checks: explicit three-path precheck3/3; render3items+ownedApage with
0errors/0warnings; final layout3items29steps0defects; strict batch5contracts
24/24 with0errors/0warnings; citation fidelity296quotes with0missing and
0widening; manifest-deps24items0errors. Run-overlay plan validation remains
FAIL on other run subjects but has no batch5 hard diagnostic. The exact output
is saved; reported batch1 prerequisite diagnostics remain root-owned. Local
checks are not independent acceptance or workflow certificates. Cross-input
rows retain root-owned open statuses while binding exact current supplier
hashes, Fact labels and proof-step uses.

Round1 suffices for this branch; no smallest missing mathematical interface
is presently identified. Root was asked to read the complete stable proof
arguments and owns final review/decision/certification. All owned writers are
drained. Final raw hashes:

| Item | SHA256 |
| --- | --- |
| thm-classification-of-the-irreducible-unitary-dual-of-sl2-r | 207fccaedf990eccbb88c56afaf5736031a50141b4a4fc4e618416d026abe0d5 |
| thm-plancherel-support-for-sl2-r | ee08e41763d2a8b23940c220182ef5f97eab972907fa2b589d81ea49a2ba53bc |
| thm-tempered-status-of-the-sl2-r-unitary-series | bfa87bb95d3b8d62f0be0aa82a5b48cbf6a5a8db3dbabd64b480a42dfdabe078 |


## GCR final focused round2: exact late-prerequisite closure

The two item-only source-use corrections are drained. Both original Statements
are byte-identical. Full exact arguments, before snapshots, hashes, source
clauses, proposed rows/contracts and passing checks are recorded in
`research/frontier-43-complex-representation-15-late-prereq-cstar/report.md`
and its evidence.json. The late BPI/product equivalence is replaced by the
earlier Tychonoff theorem under existing AC; the late Polish/Baire supplier is
replaced by the exact newly proved local closed-witness Remark after the field
owner drained. All WOT/separation/Borel arguments and citation boundaries are
preserved. GCR has now used its second and final focused round; no third round
is authorized. Root retains serial integration, stable recertification and
final review. Shared batch1/batch5/global/runtime/decisions/certificates were
not changed by this branch.


The final metadata-only Direct prerequisite assessment found no additional
requires needed. All48 current actual dependency homes are covered by the
existing six declared pages; earlier Tychonoff/compactness360 is already in
their transitive closure. The no-change proposal and exact closure path are
saved in late-prereq-cstar/requires-proposal.json and requires-assessment.json.
Root reported all48 checks and all30-page run-plan validation pass after its
serial merges. No shared/item edit or new proof round was performed.
