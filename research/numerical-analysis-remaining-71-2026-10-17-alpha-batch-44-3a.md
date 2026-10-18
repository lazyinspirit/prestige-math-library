# Batch 44 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-44`.

## Dependency-order review checkpoints

### Level 0 — def-fv-admissible-cell-face-mesh

Accepted the reader repair: cells are interiors of closed full-dimensional convex polytopes; faces belong to their closures. Nonempty cells, positive distances, one-dimensional endpoint measure one, and boundary anchoring remain explicit. Eymard–Gallouët–Herbin Definition 9.1 (updated text, printed pp. 35–36) and Droniou Definition 1.1 (PDF p. 4) confirm the open-cell convention. The reader's pre/post item hashes differ (6cb48a56… to b67645b9…), with contract and manifest unchanged. The exact old wording is documented by the reader report; historical bytes will be checked before final disposition. Every local consumer uses the same closures, measures, incidences and normal conventions; consumer dispositions are recorded below. No stronger orthogonality or uniform regularity was inferred. No AC is needed for the finite geometric choices.

Next: complete the level-2 companion, mimetic algebra and TPFA positivity reviews before the level-3 arguments.

### Level 2 — completed

`lem-fv-conforming-companion-and-test-recovery`: Independently read all seven steps and the regular fan/vertex-star geometry. Hölder gives B~D; bounded star paths and overlap yield nodal stability. Scaled simplex trace and Poincare–Wirtinger suppliers apply for 1<p<infinity with AC supplying Countable Choice; face means telescope through the connected fan. Centroid Taylor cancellation gives residual O(h^2) and total S=O(h). Zero extension and boundary cutoffs prove E_h in W0; inverse scaling gives theta=1+d/2-d/p for p<2 and h for p>=2, strictly positive on the stated subcritical branch. The opened PE12 embedding supplies precisely that W0-to-L2 inclusion. Shared-face cancellation proves the weak-gradient identity with O(h D) error; time integration uses Holder. No reader/refuter finding targets this proof; zero vectors and d=1 satisfy each estimate. No defect found.

`prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact`: Read all seven steps against the mesh and mimetic definitions. Transposed face moment identity gives G ell=b and rho ell=0. Positive tensors and positive stabilization give local coercivity; zero energy implies v_F=v_K and anchoring kills the kernel. Shared face tests and the local constant test give conservative fluxes and correct source/accumulation signs. The affine face basis gives -|F| A b dot n. Averaging preserves growth and monotonicity; scalar |s|^(p-2)s is monotone also at zero for every p>1. The nonlinear conclusion is conditional on an implicit solution and claims no unproved uniqueness or uniform conditioning. No reader/refuter finding; no defect found.

`thm-tpfa-green-coercivity-maximum-principle`: Read all four steps against positive harmonic transmissibilities and boundary anchoring. Pairing interior contributions proves exact conservation and the volume-weighted Green identity. The stiffness matrix, rather than the coordinate matrix M^-1 S, is symmetric; zero energy propagates along finite paths to zero boundary data. Every finite right-hand side is solved by the invertible stiffness matrix. A negative global minimum propagates to an anchored boundary face, where its balance is strictly negative, contradicting nonnegative source and boundary values. One-cell, zero-source and unequal-volume cases agree. No reader/refuter finding; no defect found.

Sources inspected: local simplex trace and Poincare–Wirtinger proofs and exact Poincare, Holder and PE12 embedding statements; Droniou §4 equations (4.7)–(4.9), which document the cell gradient/residual convention. These locally authored arguments do not import a source convergence theorem. Next: level-3 time estimates and limit identification.

### Level 3 — compactness and conditional identification completed

`lem-hybrid-mimetic-backward-euler-energy-and-compactness`: Read all six proof steps and exact supplier interfaces. B is a norm by boundary anchoring; finite-dimensional continuity follows by dominated convergence on bounded arguments. Positive p-growth dominates mass/source linear terms on a large sphere, so the opened outward-zero Brouwer lemma applies separately at every finite step. Testing by the state and Young gives the stated energy, jump and dissipation bounds; cell/time Jensen controls loads. Exact mean tests yield the affine state derivative in V*, with exponent identity (p-1)pprime=p. Finite-dimensional H projections of the conforming companions and O(h^theta) state error replace the conforming-state premise of Aubin–Lions; scalar coefficient derivatives have modulus |t-s|^(1/p), including arbitrary partitions and initial cell data. Weak companion closure, L-infinity H bounds and Ehrling yield all stated strong Lr(H) and Lp(Q) limits. AC supplies weak subsequences and finite-net/diagonal selections; no h/time coupling, strict monotonicity or uniqueness is used. Opened PE12 and Rellich statements have exactly the required exponent/domain hypotheses. No defect found.

`lem-mimetic-fv-parabolic-limit-identification`: Read all seven steps, real evolution triple, PE12 flux/gradient/Minty/chain-rule statements and full scalar W1p representative proof. Strong state convergence and companion closeness give the actual strong H premise for gradient closure. The energy limsup is assumed, not inferred from conservation. Minty applies to conforming gradients and their actual nonlinear fluxes. Smooth residual tests pass strongly/weakly to the limit; growth and Poincare put u prime=f+div q in Lpprime(V*). Chain rule gives continuous H trace. Scalar pairings belong to W1,1 on finite (0,T); the published endpoint representation gives integration by parts and identifies u(0)=u0 by smooth-test density. AC covers all stated supplier choice hypotheses. Reader:44:1 correctly identifies only final QED/tag order in the published scalar supplier; it does not impair the used representation. No mathematical defect or unproved scheme-specific convergence assertion found; published formatting maintenance recorded separately.

`thm-tpfa-discrete-rellich-and-physical-gradient-closure`: Read all five steps. The distance-weighted face interpolant gives exactly D_h,2 squared equal to unweighted face energy; coefficient lower bound controls it. Companion stability and the opened subcritical embedding at p=2 give H01 weak and L2 strong subsequences, valid in every dimension. Face pyramids partition convex cells, TPFA orthogonality gives |diamond|=|F|d_F/d and the required dimension factor d in both reconstruction and norm identity. Face/diamond mean replacement has error Ch D times (d|Omega|)^1/2; cell Gauss cancellation identifies the physical weak gradient including boundary pyramids. Reflexivity under AC yields the field subsequence, uniquely identified by compactly supported tests. Face-copy bookkeeping is never identified with physical space. Zero states, d=1 and boundary faces are covered. No reader/refuter finding targets this proof; no defect found.

The published scalar carrier currently ends step 7.1 with `\square` before its tags and no terminal ∎. Its raw b5955f77… gives the exact routed observed binding d75aa160… under SHA256(JSON({item_sha256:raw})); no historical uncertainty is needed for this finding. It remains read-only. Next: repair the routed TPFA flux consistency inference, then review the level-4 scheme limit.

### Level 3 — thm-tpfa-flux-energy-convergence-smooth-interface completed

Confirmed `refuter:44:1` as nonfatal. Replaced the unsupported pointwise trace equality in [A1]/Proof 1.1 with the common integrated face-average flux. Each cell normal derivative differs from that average by O(Mh); normal Taylor remainders remain O(Mh²). Thus the authored weighted dual-defect, error energy and numerical-flux estimates follow with the same Statement and dependencies. Updated proof provenance to ai-altered and the exact step-1.1 contract derivation; no judge record was present. Repair confidence: 1. All four steps reviewed, including M=0, d=1, boundary faces and zero error. Next: level-4 computed weak-flux theorem.

### Level 4 — thm-hybrid-mimetic-parabolic-weak-flux-limit completed

Read all eight steps and each cited supplier interface, including Countable-Choice smooth Lp density added by the reader. Strong states and weak computed G come from the independently reviewed energy lemma. Growth/reflexivity give weak q; cell averaging annihilates cell-constant tests and has O(h) error on smooth tests, then Jensen plus the exact density supplier extends to all Lp dual tests. Scheme tests use exact spatial means at left time nodes; summation by parts has the stated exact mass identity with phi(T)=0, and h+delta smooth-test errors vanish. The limiting derivative and scalar traces give u(0)=u0 and pre-identification energy identity. Uniform scalar pairings yield weak terminal convergence; discrete energy and terminal liminf give precisely Minty limsup for actual computed fields. Monotonicity against grad u gives the converse liminf, vanishing positive residual/jump sums and strong terminal H convergence, without strict monotonicity or strong gradient claims. Local face basis algebra gives actual numerical normal flux; physical pyramid volume and positive bounded stabilization give its Lpprime difference from b_h bounded by the vanishing residual energy. The final w_h=u recovery is explicitly post-limit and distinct from computed companions; it legitimately supplies the older conditional lemma without being used circularly. AC covers weak subsequences and density. Zero data, d=1, p<2 strict embedding range, nonuniform time steps and endpoint T were checked. Reader density repair accepted; no further defect found.

Accepted the density repair. Current raw faa03f82… equals reader-post; removing the added dependency/F6 and restoring the exact old sentence “The averages are bounded by Jensen, and density extends this identification to all dual tests.” reproduces pre-reader raw 6aae0f63… exactly. The mesh preimage is likewise recovered by replacing only its Definition with the old full Definition quoted in the flux theorem contract: raw 6cb48a56… exactly. These hash-verified reconstructions determine both historical deltas without owner historical-resolution exceptions. No remaining mathematical blocker. Next: consumer/ledger dispositions and focused local checks.

## Final dispositions

| Obligation | Verdict | Closed defect row |
|---|---|---|
| `touched:44:def-fv-admissible-cell-face-mesh` | `accepted_repair` | `na71-b44-3a-open-cell-terminology` |
| `refuter:44:1` | `confirmed_nonfatal` | `na71-b44-3a-integrated-flux-inference` |
| `touched:44:thm-hybrid-mimetic-parabolic-weak-flux-limit` | `accepted_repair` | `na71-b44-3a-dual-test-density` |
| `reader:44:1` | `confirmed_nonfatal` | `na71-b44-3a-published-qed-layout` |

The two reader repairs are accepted at confidence 1. The refuter proof gap is repaired at confidence 1 without changing the Statement or dependencies. The published finding closes as nonfatal-recorded: its format defect remains present for owner maintenance. Exactly four obligations are owed and four decisions were written.

## Historical source binding

Both touched current raw hashes equal the frozen reader-post hashes. The exact pre-reader sources were reconstructed without editing the live items and checked against the frozen pre raw hashes. Mesh pre-reader raw: `6cb48a56615c1f1e6ce11229769d576117ed9942bf0480e79887a2227c9a3ad3`; reader-post/current: `b67645b9b17c07cd0e19966629dedaf8007f3d008466a265a198899359260e66`. The old Definition was present verbatim in its consumer contract before this adjudication regenerated current quotes. Reproduction from the current mesh requires exactly these three literal substitutions:

```text
interior of a finite union of bounded closed convex polytopes. A closed convex polytope
=> interior of a finite union of bounded polytopes. A convex polytope

finitely many nonempty cells $K=\operatorname{int}P_K\subset\Omega$, where each $P_K$ is a closed convex polytope, with pairwise disjoint interiors
=> finitely many nonempty open convex polytopes $K\subset\Omega$ with disjoint interiors

the relative interiors of the $(d-1)$-dimensional faces of their closures.
=> the relative interiors of their $(d-1)$-dimensional faces.
```

The computed hybrid theorem pre-reader raw is `6aae0f63ab6e2eaa1d9d5d0e8939baad26b965a708a16aec49609abbc7499eb0`; reader-post/current is `faa03f829b34043abfe23a41ffa3592a4c5e128cf58472f05ae485045291a6b3`. Reproduction: remove the added final density dependency and preceding comma; remove the F6 paragraph and leave exactly one blank line before `## Proof`; remove F6 from step-1.1 terminal tags; restore its last sentence to `The averages are bounded by Jensen, and density extends this identification to all dual tests.` The raw preimage equality was checked, including paragraph spacing. Alpha synchronized the missing manifest density dependency without changing this accepted carrier.

The refuter's `cc13f4b1702a3967566f17bd9d72d7f91fab71e900d476fc54ce153edf8fd9a7` observation is reproduced by SHA-256 of sorted-key JSON of the frozen post-reader item/contract/manifest triple. That historical proof contained the unsupported pointwise equality; the repaired proof uses a common face average. The reader published observation exactly binds the unchanged current scalar carrier, as recorded above. No observation is unbound and no historical owner-resolution exception is used.

## Consumers, ledgers and metadata

The mesh Definition correction was checked against every direct dependency/reference consumer. The owned TPFA, mimetic and companion definitions; Green, path, local mimetic and smooth-interface-flux results; and all four examples retain the same measures, faces, closures and orientation conventions. Rectangle fluxes are -1/+1; the nonorthogonal witness gives -1/sqrt(5) against exact zero; the material interface gives -9/5; skew-cell fluxes are (4,0,-4,0). None requires an edit. Outside direct definitions `def-phase-field-discrete-realizations`, `def-orthogonal-fv-compressible-viscous-scheme`, and `def-fv-tpfa-no-flux-diffusion-specialization` were read: their no-flux or one-dimensional specializations use exactly the retained geometry and need no repair. Their defining clauses remain unchanged, ending propagation. No outside carrier was edited. The owned A-page summary remains accurate.

All 19 cross-batch records and their historical owner resolutions remain present; owned current PE12 consumer review evidence and the frontier dependency notes were updated. The hyperbolic page edge supplies no diffusion claim. No proposed withdrawal was deleted. The published ledger was acquired at `research/.published-consumer-ledger.lock`, reread and merged, the single unique A-P index row added and counts updated, and only this worker's lock released. Its entry names the actual scalar suppliers, consumer F6/5.1, exact bytes and minimal owner formatting strategy. No published item was changed.

The 13 proof-bearing contract citations/derivations were regenerated from current Facts and proofs, preserving boundaries and all eight specific Alpha risk reviews. Four definition entries correctly have no phase steps. This removes old mesh quotes after its accepted repair. The flux manifest reflects conservative integrated fluxes and ai-altered proof provenance. There was no judge record on the locally repaired item. Four closed rows were appended using the serialized defect-ledger tool with `--no-render`; the engine owns the generated view and gate battery.

## Source reading and limits

[Updated Eymard–Gallouet–Herbin author text](https://raphaeleh.github.io/PUBLI/bookevol.pdf): Definition 9.1 at actual printed pp. 37–38, and §9.5 Theorem 9.3 with the complete conservative error/flux proof through equations (9.49)–(9.62), printed pp. 52–55. Read local extracted lines 4098–4164 and 5709–6147 in `/tmp/fv-bookevol-alt.txt`. The earlier checkpoint's pp. 35–36 label came from internal cross-references; these actual printed-page locators control. The local integrated-interface estimate is derived directly, with conservative energy transfer matching the source method.

[Droniou review](https://arxiv.org/pdf/1407.1567): Definition 1.1 (PDF p. 4), §2 equations (2.1)–(2.6) (pp. 8–9), and §4 equations (4.7)–(4.9) (p. 19); local `/tmp/droniou-fv-review.txt`. Checked open cells, signed face fluxes, harmonic elimination and gradient/residual conventions. [Lipnikov–Manzini](https://arxiv.org/pdf/1610.05850): §3.1 (M1)–(M4), PDF p. 9, and §3.3 equations (3.17)–(3.19), pp. 14–15; local `/tmp/lipnikov-manzini-mfd.txt`, lines 628–820 and 1147–1305. Checked affine-gradient geometry, stabilization and the signed numerical flux correction. These source passages document conventions; the parabolic and companion proofs are supplied locally.

Current local simplex trace/Gauss and Poincare–Wirtinger arguments were read, along with the exact Poincare, Holder, Rellich/reflexivity, choice, PE12 evolution/flux/gradient/Minty/chain-rule and smooth-density supplier statements. The full published scalar representative proof was read for the routed defect and its actual trace use. This is a focused prerequisite/interface review, not a new audit of every transitive foundation proof.

## Checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-44.proof-contracts.json`: exit 0; eight HIGH/CRITICAL items routed. After dependency-ordered review, rerun with `--require-reviewed`: exit 0, 17 items, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-tpfa-flux-energy-convergence-smooth-interface.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-fv-admissible-cell-face-mesh.md items/thm-hybrid-mimetic-parabolic-weak-flux-limit.md items/thm-tpfa-flux-energy-convergence-smooth-interface.md`: exit 0, two proof carriers pass; definition has no phase proof.
- `node tools/rendercheck.mjs` on those three paths: exit 0, all three YAML/math renders pass.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-44.proof-contracts.json --strict`: exit 0, 17/17 items, zero errors/warnings.
- After final item edit and reflow, ran once: `node tools/proof-layout.mjs items/def-fv-admissible-cell-face-mesh.md items/thm-tpfa-flux-energy-convergence-smooth-interface.md items/thm-hybrid-mimetic-parabolic-weak-flux-limit.md`: exit 0, three items, 12 steps, zero defects.
- Local JSON assertions checked exact owed-obligation equality and one matching closed row per decision. Exact reconstructed pre-reader raw hashes were checked independently.

No mathematical escalation or unfinished risk review remains. Published nonfatal formatting maintenance remains explicitly pending owner action. The engine owns decision hashing, gate acceptance, scheduling and stage transitions. No judge, stamp, self-certification or gate battery was initiated.
