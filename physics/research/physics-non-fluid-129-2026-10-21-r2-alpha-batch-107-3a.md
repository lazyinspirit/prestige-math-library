# Batch 107 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-107`; role: alpha.

Scope has no touched carriers, page obligations, reader findings or refuter findings. The decisions array is therefore empty. Pre/post snapshots agree for all five item and both page hashes. Risk review proceeds in generated dependency order; no content repair is currently required.

## def-qsmx-quantum-potts-hamiltonian (level 0)

Reviewed the complete Definition and all eight direct supplier carriers, plus the local Gibbs discharge proof. Q in {2,3,4}, L>=1 give nonzero finite dimension Q^L; the linear-first inner product and rank-one map v-><v,u>u agree. The finite cyclic shift average is P and the clock difference average is D by the finite geometric sum. Real J preserve Hermiticity. Orthogonal eigenspace projections exist by the finite complex spectral theorem; eigenvalues are real by the displayed adjoint calculation. The justified_by lemma proves positive finite Z without assuming rho exists. L=1 has no bond, zero J or beta gives rho=I/Q^L, repeated eigenvalues are grouped, and negative finite beta causes no convergence issue. No infinite-family choice, thermodynamic limit, units, or empirical claim is used. Nichols §§2.1.2–2.1.4 equations (2.4),(2.6)–(2.10) and Arovas §7.4 variational-principle paragraph were retrieved; their model/normalization conventions agree. No defect or interface change.

Exact dependency IDs are its eight declared deps and the justified_by Gibbs lemma; all are mathematical. Imported definitions retain their stated published status; the Gibbs helper remains draft. Sources: [Nichols](https://arxiv.org/pdf/hep-th/0509069), PDF pages 4–6 (zero-based 4–5 for the matrices); [Arovas](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method), “The variational principle,” lines 1352–1377. These sources motivate conventions; positivity is proved locally.

Initial risk-report completed with exit 0: HIGH 7 definition, CRITICAL 8 Gibbs lemma, CRITICAL 8 TL/Hecke theorem, MODERATE 3 spin interface, HIGH 6 example. Next: complete the level-1 risk reviews.

## lem-qsmx-potts-finite-gibbs-density (level 1)

Independently traced proof 1.1–4.1 and F1–F5 against the current suppliers: normalized rank-one P and orthogonal computational D are self-adjoint, hence H is Hermitian for real J. The finite complex spectral theorem applies on dimension Q^L>0; the linear-first adjoint identity makes eigenvalues real. Positive finite exp(-beta lambda) weights and orthogonal projections give strictly positive quadratic form, and Z=sum(weight*eigenspace dimension)>0. Division is legitimate and trace is one. Degeneracy, L=1, zero couplings, beta=0 and negative beta are covered; beta=0 need not make H zero, but does make B=I and rho=I/Q^L. No infinite-limit, AC or empirical inference occurs. Arovas §7.4 lines 1352–1377 supports the Gibbs convention only; the mathematical proof is local. No carrier defect; clarified the contract zero-case evidence to avoid attributing H=0 to beta=0.

No item/public-interface edit or additional obligation. The only worksheet clarification separates zero couplings from zero beta; it is audit enrichment, not a proof repair. Next: TL/Hecke level-1 theorem.

## thm-qsmx-potts-tl-and-hecke (level 1)

Read proof 1.1–2.1, all six direct supplier carriers and contract citation/derivation/boundary records. The imported projector proof gives e^2=delta e, both neighboring triple relations (the remaining placements follow by swapping the two tensor factors), and distant commutation. Thus the unital free-algebra quotient descends to End(H). Direct expansion gives (g-qI)(g+q^-1 I)=e^2-delta e and the braid difference (-q^2+q delta-1)(e-f)=0. Specialization v=q^-1 matches H_i^2=1+(v^-1-v)H_i. At Q=4 the equation q+q^-1=2 itself forces q=1, so g^2=I; the Coxeter supplier applies at n=2L>=2. L=1 leaves one generator and vacuous adjacent/distant relations. No faithfulness, semisimplicity, unitary or physical conclusion is inferred. Both TikZ blocks checked: adjacent cap/cup with loop scalar delta, and three crossings ordered (i,i+1,i) versus (i+1,i,i+1), with right-to-left over-strands restored after white underlays. Diagrams are illustrative and independent of the proof. Nichols §2.1.2–2.1.4 and Penneys §2.1.1–2.1.3 retrieved; exact Hecke source is de Gier–Pyatov §2.1 Definition 1 equation (2.1). No defect or interface change.

Sources: [Penneys](https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf), Chapter 2, PDF zero-based pages 4–6, especially Definition 2.1.4 and Exercise 2.1.6; [de Gier–Pyatov](https://webdoc.sub.gwdg.de/ebook/serien/e/mpi_mathematik/2008/5.pdf), §2.1 Definition 1, equation (2.1). Penneys uses idempotent Jones generators and scaled diagram generators; the item uses the latter loop normalization. No additional diagram is needed for this algebraic proof. Next: level-2 two-site example.

Source qualification for the preceding theorem: de Gier–Pyatov Definition 1 states the relations for nonzero q; immediately afterward (2.2) restricts later semisimplicity discussion to nonvanishing q-integers. That additional genericity does not hold for all selected Potts parameters and is not imported. The local algebraic derivation uses only q!=0 and q+q^-1=delta.

## ex-qsmx-potts-two-site (level 2)

Read every proof step 1.1–3.1 and the four exact supplier interfaces, including the published exponential bijection proof. P1=P tensor I and D12 have ranks Q in Q^2, so both eigenvalues 0 and 1 occur. The explicit contraction P1 D12 P1=P1/Q and the two actions on |00> establish noncommutation. H has off-diagonal entry -kappa/sqrt(Q), irrespective of lambda, so kappa!=0 is essential. For beta!=0 the real spectral map mu->exp(-beta mu) is injective: B and H have precisely the same eigenspaces, including degeneracies. A diagonal rho would therefore force every computational vector to be an H eigenvector, contradicting that entry. beta=0 gives I/Q^2 and kappa=0 makes H and rho diagonal; lambda=0 still satisfies the claimed non-diagonality. No claim about all classical models, a physical equilibrium preparation, observations or thermodynamic limits is made. No AC use, missing diagram or carrier defect; no interface change.

Exact dependencies: def-qsmx-quantum-potts-hamiltonian, lem-qsmx-potts-finite-gibbs-density, thm-qsmx-potts-tl-and-hecke (all current draft), and cor-exponential-is-a-bijection-onto-positive-reals (published imported). Contract citations and step inputs agree with this argument; boundary records were read. Next: finish ordinary unchanged carrier/page context and final local checks.

## Unchanged context and consumer review

Read `thm-qsmx-spin-singlet-exchange-interface` and the complete current draft `thm-nrqmx-spin-half-temperley-lieb` supplier. The consumer uses only the explicit swap/singlet identities and loop-two relations. The supplier proves these by the four two-site basis vectors and the two singlet-image basis vectors on three sites; reversing factors gives the opposite triple relation. The consumer then substitutes `g_i(1)=I-e_i=s_i` and sums `s_i=I-e_i`; for N=1 both sums vanish. Its claim does not identify the spin space with a Potts space. The supplier's separate Schur–Weyl conclusion is not used here. [Ikhlef–Jacobsen–Saleur](https://arxiv.org/pdf/0901.4685), §2, equation (2) and the following projector paragraph, PDF page 4, confirms the normalization `e=(q+q^{-1})P^(0)`, hence `e=2P^(0)` at q=1. No outside supplier repair or independent whole-supplier certification is asserted.

Read both current frontmatter-only page carriers and inspected the owning manifest inventory and declared prerequisites. Their ordered placements match the five-item scope; no page-body claim or diagram is present. The owning cross-batch record retains the exact page edge to `nrqmx-exchange-representations` and item edge from `thm-qsmx-spin-singlet-exchange-interface` to `thm-nrqmx-spin-half-temperley-lieb`. No item or page public interface changed, so there is no newly affected consumer or propagation obligation. Stable IDs and proposed inventory are retained; no withdrawal is proposed. The frontier dependency ledger records this scoped use.

## Changes, checks and handoff

Only four complete `risk_review` entries and the Gibbs contract zero-case clarification were authored in the batch contract, together with this report, the empty decisions file and the frontier ledger entry. No item, page, mathematical import, source original, manifest, historical snapshot or independent report was edited. No confirmed carrier defect, published maintenance finding, defect-ledger row, escalation or blocker arose.

Local checks actually performed:

- Initial `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-107.proof-contracts.json`: exit 0, five items routed; four HIGH/CRITICAL reviews required.
- The same command with `--require-reviewed`: exit 0, zero errors, all four required reviews complete.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-107.proof-contracts.json --strict`: exit 0, zero errors/warnings, 5/5 checked.
- Direct SHA-256 comparison: all five current item carriers and both current page carriers equal their pre and post snapshot hashes. All twelve opened direct imported mathematical suppliers match their `research/math-imports.json` pins.

An exploratory invocation of the nonexistent plural `proof-contracts.mjs` failed with MODULE_NOT_FOUND; the correct singular validator was located and the successful strict check above followed. This mechanical typo is not a content defect. Its `--help` invocation printed usage with exit 2. No item was edited, so post-edit reflow, precheck and proof-layout are inapplicable. No judge, stamp, engine gate battery or transition was initiated; the engine owns the remaining hash stamping and gates. The decisions file contains exactly zero decisions, matching the routed scope.
