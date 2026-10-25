# Batch 65 ordinary-cohomology proof review and bounded repair

Reviewer: `/root/invariant_recovery`. Review date: 2026-10-24 (Australia/Sydney). Scope: the six actual batch-65 sources, reviewed supplier-first. All six preimages are preserved under `preimages/`; exact before/after SHA-256 values and public-body equality checks are in `hashes-and-interface-guards.json`.

**Mathematical disposition:** the repaired metric comparison, finite-order refinement, ordinary sheaf cohomological-dimension bound, local coherent acyclicity theorem and its two examples support the intended local argument. No compact-support substitution or inference from finite compact polyhedra is used. This is an owner repair review, not native independent coverage, publication acceptance, readiness or a gate result. The canonical identity/scope reconciliation and live-consumer review remain pending root's drained integration.

## Concrete findings and repairs

1. **Metric Čech comparison, old step 1.2:** the definition of refinement-limit Čech cohomology supplies coherent transition maps on cohomology. Distinct refinement functions give homotopic cochain maps, rather than a strictly compatible cochain diagram on the cover preorder. The original step's unqualified filtered colimit of cochain complexes was therefore unjustified. New steps 1.2–1.4 construct the connecting homomorphism directly: refine to lift a cocycle, differentiate its lift, and use the kernel sheaf to obtain an A-valued cocycle. They prove independence of lifts, representatives and refinement maps using the explicit alternating prism homotopy, then check exactness at all three kinds of terms. The proof now takes the colimit only of cohomology groups. Injective effacement and universality identify it with derived cohomology; the canonical comparison is identified through the same connecting-map construction. The original locally finite shrinking/lifting argument in step 1.1 was checked: only finitely many tuples and nearby shrunken sets enter at each point, and the resulting intersection lifts restrict to the required new intersections. Arbitrary metric spaces, including nonseparable ones, remain in scope under full AC.

2. **Euclidean finite-order refinement, step 2.2:** differently sized maximal dyadic cubes need not meet along whole faces, as the original wording suggested. The replacement explicitly allows subdivided boundaries, proves that touching maximal cubes have dyadic side ratio at most two using the Lipschitz control and the failed parent inequality, and spells out finite compatible dyadic face pieces and their inductive coning triangulation. The constructions are locally finite on the open set itself. The maximal-cube existence and local finiteness estimates in steps 1.2–2.1 were checked. Every simplex lies in a qualifying maximal cube. Thus its vertex open star lies in the chosen original cover member because its diameter is less than the controlled local cover radius. The unique carrier simplex gives at most m+1 positive vertex coordinates, proving the multiplicity bound. Neither global extension of a local cutting hyperplane nor a limiting compact-polyhedron cohomology claim is invoked.

3. **Scalar supplier interface in the main theorem:** `thm-dolbeault-cohomology-polydisc-vanishes-positive-q` states global smooth-form exactness, not directly ordinary sheaf vanishing. Fact F6 now states that exact interface. Step 2.1 first uses the locally exact Dolbeault sheaf resolution, smooth-function-module acyclicity and the acyclic-resolution theorem to identify derived cohomology with the global smooth complex; then the imported form theorem kills degrees 1 through N, while the complex itself is zero above N. The N=0 proof now specifies the zero leftmost free module preceding the degree-zero isomorphism.

4. **Example supplier quantifiers:** their Facts originally said the W chosen for the example works for every coherent module. The theorem chooses W after its particular module F is fixed. Both examples now refer to the specific coherent quotient Q_U and its restriction Q_U|D. The concluding vanishing steps use this precise choice. Their public examples already chose W for Q_U, so no Example body changed.

5. **Demonstrated bibliography errors:** the downloaded `agbook.pdf` is Demailly's *Complex Analytic and Differential Geometry*, version 21 June 2012, not *Analytic Methods in Algebraic Geometry*. Corrected that title only within the six owned carriers. The main locator now separates IX §4.A Proposition 4.1 (printed pp.419–420) from IX §4.B equation (4.3) and Lemma 4.4 (printed p.421). Its Wehler locator now correctly describes Proposition 5.9 as acyclicity from a finite free resolution, rather than an independently proved scalar-polydisc theorem. Original native coverage/report bytes were not changed.

The remaining dimension lemma proof needs no rewrite: every cover refines to one of multiplicity at most m+1, whose ordered Čech degree-q cochain group is zero for q>m. Every limit class therefore vanishes. The repaired metric comparison identifies that limit with **ordinary** derived H^q for every abelian sheaf on the Euclidean open set.

## Main proof and examples checked after supplier repair

For N>=1 the finite partial resolution is restricted once to W. Setting K_0=F and taking successive kernels gives ell=2N+1 short exact sequences with finite free middle terms; exactness is needed at the module and intervening terms, never at the leftmost free module. Restriction preserves exactness. The scalar calculation makes each middle term acyclic, including rank zero. For q>0 the connecting maps yield

`H^q(D,F|D) = H^(q+ell)(D,K_ell|D) = 0`

because the final degree exceeds 2N. The final kernel only needs to be an abelian sheaf for the dimension bound. The same W and resolution work for every nonempty coordinate subpolydisc D and every positive q. N=0 is treated separately on a point, where global sections are exact. No global analytic free resolution, global generation, projective Cartan A/B, or general Stein theorem is inferred.

The point example identifies the quotient stalk at zero with C by grouping an absolutely convergent power series into its coordinate-ideal terms; each stalk away from zero is zero because one coordinate is a unit. The induced sheaf isomorphism to the skyscraper computes H^0, and the particular-quotient theorem supplies higher vanishing. The hyperplane example checks surjectivity and kernel of restriction at every hyperplane stalk by extension independent of z_1 and division by z_1 in a convergent expansion; away from the closed hyperplane the stalks vanish. Direct image then computes H^0. The proof works for any product polydisc containing zero; centering at zero is unnecessary.

All six items retain full AC. Uses include choice and shrinking of covers, refinement choices and local lifts, injective resolutions, imported scalar/smooth-resolution interfaces and the finite coherent-resolution supplier. The Euclidean construction requires no unsupported stronger choice principle. No empirical or physical premise appears.

Root reported that it independently checked the actual batch-63 Oka proof and corrected its degree helper. I did not edit batch63 or recertify it. The stale supplier-readiness observations recorded in the batch65 sources remain owner-recertification holds; they are not evidence that Oka coherence is mathematically unproved.

## Exact independent source access

The four PDFs were independently fetched with HTTP200. Full URLs, byte counts, full SHA-256 hashes, PDF page counts and actual cache paths are in `sources/retrieval.json`. Binary files are in ignored `.physics-autopilot/source-cache/advanced-qft-supersymmetry-build-2026-10-23/batch65/`, outside the run-state directory; no PDF remains in research. Selected extracted text is retained in `sources/`.

- Demailly, *Sheaf cohomology and the De Rham-Weil isomorphism theorem*: read PDF pp.1–5, including cover/refinement homotopy, liftable cochains, Proposition1.13, lifting Lemma1.14 and Leray Theorem1.17. This text develops Čech theory; the present derived identification additionally uses the explicit local injective/universal-delta-functor suppliers. Its cochain-group convention is all tuples; the local proof explicitly uses alternating extensions of ordered cochains.
- Demailly, *Complex Analytic and Differential Geometry*: read title page and printed pp.419–421, Proposition4.1 and proof, equation(4.3), Lemma4.4 and proof. Proposition4.1 is a general strongly-q-complete vector-bundle theorem. Its analytic L2 prerequisites were not recursively audited and are not substituted for the local imported Dolbeault argument. The book invokes the topological-dimension cutoff; it does not supply the explicit refinement proof in this batch. Extracted p.422 was navigation context, not an independent section-topology audit.
- Agol, *Complex Analysis and Riemann Surfaces*: read printed p.29 and neighboring p.30. Theorem6.5 tersely invokes sufficiently fine finite-order covers; it is corroboration, not a complete proof of the Euclidean refinement lemma.
- Wehler, *Stein Manifolds*: read printed pp.171–180, Proposition5.9, Theorem5.14 with its proof, and Corollary5.15. Proposition5.9 assumes a finite free resolution; Theorem5.14 constructs such resolutions on relatively compact polydiscs, and Corollary5.15 deduces vanishing. This corroborates the result but does not replace the partial-resolution/ordinary-dimension proof. No complete textbook reading or recursive audit of Cousin/Cartan analytic inputs is claimed.

The imported Dolbeault, smooth-module acyclicity, ordered Čech definitions, Leray comparison and universal-delta-functor interfaces were read as exact prerequisite context; this is not a whole imported closure audit.

## Canonical identities, scope and consumers

`guarded-identity-contract-proposal.json` compares the actual sources with the exact approved rows in `analytic-five-canonical-row-proposal.json`. It proposes restoring the approved canonical identities and retaining the actual author-assigned identities as aliases:

| Actual source ID | Approved canonical ID |
|---|---|
| thm-qftx-gaga-local-coherent-acyclicity | thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity |
| ex-qftx-gaga-point-quotient-coherent-acyclicity | ex-qftx-gaga-analytic-point-sheaf-acyclicity |
| ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity | ex-qftx-gaga-analytic-hyperplane-quotient |

The main theorem preserves the approved richest local every-subpolydisc scope; the point example realizes the approved calculation. The hyperplane source's centered-at-zero restriction is narrower than the approved through-zero formulation. The proposal includes a guarded replacement by containing zero in its Example and Given, supported by the unchanged germ proof. It was deliberately **not applied** while other writers remain live.

`affected-consumers.json` records the reverse declared-dependency reachability observed on disk, including both main identities, plus read-only current hashes. This is an impact inventory, not acceptance of those consumer proofs. Immediate outside consumers are `lem-qftx-gaga-pseudoconvex-intersection-acyclicity`, `lem-qftx-gaga-coherent-section-topology-well-defined`, and `thm-qftx-gaga-analytic-compact-projective-coherent-finiteness`. Their higher descendants include section compactness, projective GAGA and the ADHM/twistor chain. Some live-context sources currently fail YAML parsing at unquoted colon-bearing locators; these transient observations are recorded honestly and left untouched. The dependency inventory extracted just their declared deps when parsing failed. All live hashes must be reread after drain; none is a frozen acceptance receipt.

I retain responsibility for affected-consumer checks after root confirms drain and coordinates ownership. No live66 source was changed or independently accepted here. Root must atomically reconcile item filenames/IDs/aliases, active references, page lists, manifests and proof-contract derivations; old native results/reports/coverage remain historical. The exact proposal lists the new metric steps, corrected scalar interface and example quantifiers, with current source hashes as guards.

## Verification and limits

Two bounded review passes were used: the independent defect review and source repairs, then a re-read of the repaired arguments and scoped verification. The required final `proof-layout` command on exactly the six paths returned `6 items, 29 steps, 0 defects`. Their YAML parses and all six public Statement/Example bodies are byte-identical to their archived preimages. Exact commands and observed output are in `checks.json`.

No shared manifest, contract, plan, page, original native coverage, engine state, readiness record, stamp or native transition was edited. No native gate was run. Root's atomic identity/scope/contract reconciliation, drained affected-consumer review, current supplier recertification and ordinary workflow gates remain outstanding.
