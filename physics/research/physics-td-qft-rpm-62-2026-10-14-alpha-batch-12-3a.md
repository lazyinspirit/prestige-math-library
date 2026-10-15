# Batch 12 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-12`; scope: batch 12 only. No judging, stamping or engine transition is performed.

## Completed reviews in dispatch order

### thm-tdmath-continuous-ideal-gas-block-limit

Verdict: accepted_repair. Checked all six steps and fourteen direct supplier statements. Nonnegative Gaussian product integrals give Z_N; factorial integral bounds give the free-energy limits. Gaussian moments give Var(A_N)=2/(dN); Markov tails and compact-ball continuity prove fixed-block convergence without independence between A_N and the block. A_N=0 is null; fixed r is used only once dN>=r. The reader growth-bound repair is sound. Countable-choice requirements of Lebesgue/change-of-variables suppliers remain inherited; no new arbitrary choice is used. Direct evidence: current item Facts F1–F8 and steps 1.1–3.1; actual supplier Statement/Definition sections opened independently. Pre/post snapshots bind the changed item and contract; the reader report identifies the added logarithmic growth estimate in 2.1. Current claim and normalized-Gaussian shell convention are retained. No item edit or consumer propagation is needed.


### thm-tdmath-hamiltonian-measure-and-recurrence

Verdict: amended_repair; repair_confidence: 1. The reader self-map/invariance repair is sound. Independent supplier review found that thm-birkhoff-ergodic-theorem supplies only an invariant a.e. limit, whereas F5 attributed finite-measure L1 convergence and conditional-expectation identification to it. Added the exact existing finite-measure convergence and identification suppliers to F5, deps, dependency roles, contract citations and manifest prerequisites. Their full proofs were read; AC is spent in the identification supplier’s Radon–Nikodym step 1.2. The conditional expectation is now explicitly defined by invariant-event integral identities. Statement unchanged; no new consumer repair is triggered. Risk review completed. Final focused checks completed.

### cex-tdmath-nonconcave-ensemble-inequivalence

Verdict: amended_repair; repair_confidence: 1. The empty-K and polynomial/exponential-gap reader repairs are valid for every fixed b>0, including b=3. Independent review corrected F3: Heine–Borel states compactness, not extreme-value attainment or sequential compactness. Added the exact extreme-value supplier and removed the unused sequential-compactness attribution. Statement unchanged. All four steps and direct suppliers checked; risk review complete.

### ex-tdmath-pure-state-versus-average-entropy

Risk-only review (no decision owed): Checked all three steps and seven direct supplier interfaces. Linear-first inner product makes rank-one projection and matrix phases consistent. Distinct E1,E2 and hbar>0 give |c_T|<=hbar/(T|E1-E2|); unitary evolution keeps eigenvalues 1,0. Cesaro eigenvalues 1/2+-|c_T| approach 1/2, so entropy continuity is used away from zero; average instantaneous entropy stays exactly zero. Finite-dimensional construction only, no trace-Gibbs supplier or empirical input. Exact phase modulus/derivative and componentwise FTC supplier statements were read. No repair required.

### thm-tdmath-compact-continuous-mixture-attainment

Verdict: accepted_repair. Checked all eight steps and all five supplier interfaces. Graph is closed/bounded; affine dependence removes atoms in finite iterations, giving compact conv(graph). Fiber is nonempty and compact. Finite Borel partitions approximate every integral, so minimization over arbitrary measures equals the graph-fiber minimum. Liminf pairs converge by construction; convexity uses combined minimizers; optimal-energy affine dependence reduces support from d+2 to d+1. Finite Jensen gives the greatest convex minorant. Nonempty K and d>=1 are explicit; only finite choices used. Reader replacement of sequential compactness is sound. Definitions of convex hull, constrained barycenter and mixture integrals are supplied by def-tdmath-mixture-generator-space-and-energy; exact Borel-law, Heine–Borel and extreme-value interfaces checked. No item edit or changed public claim.

### thm-tdmath-independent-microcanonical-block-limit

Verdict: amended_repair; repair_confidence: 1. The reader corrected the relative-entropy inequality in the right direction, with proper support/equality cases; the compact entropy-gap, endpoint continuity and subexponential count arguments are valid. Step 3.1 still incorrectly cited F4 (logarithm) for extrema. Added exact F6 extreme-value supplier and corrected those three proof citations, retaining the Statement. Reviewed q=1, repeated/zero energies, beta=0 and negative beta, nonempty shells and fixed k<=N. Risk review complete; manifest synchronization and final focused checks completed.

### thm-tdmath-ornstein-uhlenbeck-model

Obligation refuter:12:1; route flagged; verdict confirmed_fatal; repair_confidence: 1. The original F6 attributed modulus and derivative/antiderivative facts to the definition and addition-law theorem, whose exact statements do not give them. Added the existing modulus corollary, entire-derivative theorem and FTC supplier; step 4.1 now evaluates the finite-R integral, uses |exp(-(gamma-i omega)R)|=exp(-gamma R), and takes the absolutely convergent limit. Also made the E|XsXt|<=V integrability bound explicit in 5.1. No Statement change. Full current stochastic argument and direct suppliers reviewed as recorded in risk_review; no temperature relation or empirical observation is inferred.

### thm-tdmath-regular-collision-entropy

Verdict: accepted_repair. Read all seven steps, elastic weak-identity definition and all ten other supplier interfaces. Positive constant reference makes log(A/B) dimensionless. Common time envelope and C1 paths justify entropy differentiation; periodic compact slices have zero transport integral, with stated absolute integrability for Fubini. Collision integration stays iterated, requiring no sigma-finiteness of nu. Zero production iff balance follows via nonnegative-integral null sets; full support plus continuity makes balance pointwise. Taylor at every center yields scalar Hessian; d>=2 and independent coordinates force constant lambda without a third derivative. Integrability excludes lambda>=0; conversely conserved pair sums give zero production. Reader scope/integrability repairs are sound; no PDE existence or empirical conclusion. Public-interface reader clarifications require consumer review: pthm-td-collision-h-theorem is the known consumer and was checked read-only before handoff; its A2–A3 carry every changed hypothesis.

### thm-tdmath-regular-energy-shell-measure

Touched verdict: amended_repair; refuter:12:2 verdict: confirmed_fatal (route flagged); repair_confidence: 1. Reader n>=1 correction is valid, matching ambient 2n>=2. Refuter correctly identified that the smooth Hamiltonian supplier did not cover C2 H. F5 now defines the C1 coordinate Hamiltonian field and local flow, and new step 1.2 proves d(H o phi_s)/ds=0 and det Dphi_s=1 from the variational equation and equal mixed partials. The original C2 claim is retained; the smooth-only prerequisite is removed. Every other coarea, continuity-in-energy and Borel-measure extension step and all actual supplier interfaces were checked; risk review completed. Corroborating source: [ETH Numerical Methods for ODEs](https://people.math.ethz.ch/~grsam/SS19/NAII/resources/lecture1.pdf), §5.2.6.3, printed p.70, complete displayed proof preceding Theorem 5.13 (C1 divergence-free field). Web fetch timed out; curl retrieval and pdftotext succeeded, and the complete relevant section was read. No claim of reading the entire source. Statement unchanged by this repair; reader dimensional clarification consumer check completed.

### cex-tdmath-nonergodic-volume-flow

Risk-only review (no decision owed): Checked both steps and all four direct suppliers, including repaired recurrence theorem. With iota_X omega=dH, H=cos q gives X=sin q partial_p, hence phi_t(q,p)=(q,p+t sin q) modulo 2pi, with inverse and all real times. Full torus is invariant of finite area 4pi^2; event cos q>0 has area 2pi^2 and is invariant at every sampling time. Thus normalized measure is nonergodic despite volume conservation. Zero boundary cos q=0 contributes no area; AC convention inherited from recurrence supplier. No empirical inference. No repair required.

### cex-tdmath-noncompact-mixture-nonattainment

Verdict: accepted_repair. Checked both proof steps and both actual mixture suppliers. The noncompact extension is explicitly unconstrained and bounded objective x is integrable for every Borel probability. Countable sets [1/n,1) cover (0,1), so at least one has positive mass, giving integral x>0; point masses at 1/n approach zero. No measure attains zero. Reader removes the unsupported suggestion that this tests constrained barycenter feasibility; the compact theorem remains valid. No Statement refuted change or infinite selection needed. Risk review complete. No item edit required.

### thm-tdmath-discrete-quantum-cesaro-dephasing

Risk-only review (no decision owed): Read all eight steps, all thirteen direct supplier interfaces and current draft Gibbs supplier complete proof. Gibbs first clause gives an injective positive compact exponential, complete countable energy eigenbasis and finite multiplicity; its PVM norm identity isolates each eigenvalue, so the conditional interface matches. No supplier acceptance is inferred. Whole energy blocks, including degeneracy, are kept; finite projection compressions approach rho in trace norm uniformly under unitary conjugation. Continuous finite-rank phases and Banach completeness give the Riemann average. Positive block-tail trace equals trace norm and totals one; three-error estimate proves dephasing and bounded-observable convergence. Finite-dimensional space exhausted by P_N=I, nonzero energies not required, no individual-time limit claimed. AC/Countable Choice inherited explicitly. Existing cross-batch readiness/closure hold remains for owner disposition. Exact trace-ideal, finite-compression, positive-trace and phase interfaces opened. Gibbs proof first-clause uses reviewed current source at steps 1.1–3.1; its remaining complete argument was also read as context. This is a local conditional review, not certification of producer batch 11.

## Consumer/interface dispositions

Searched current items and pages for all reader-changed public interfaces. cex-tdmath-nonergodic-volume-flow uses the entire invariant torus and satisfies the recurrence supplier clarification. pthm-td-invariant-regular-microcanonical-shell L1/1.1–2.1 assumes a smooth full-band invertible flow and makes no unsupported ergodicity claim; L2 consumes the retained C2 shell result. def-td-regular-hamiltonian-shell-preparation explicitly has n>=1, regular proper C2 energy bands and nonempty shells, matching the reader dimensional clarification. pthm-td-collision-h-theorem A2–A3/L1/1.1 states the constant reference, periodic domain, common time envelope, transport/spatial production integrability and pointwise absolutely convergent weak identities; it uses only inequality/equality, not the Maxwellian branch. All three outside consumers were read fully; no necessary consumer repair or additional hop is triggered. Both local A/B page summaries remain compatible. No defective published supplier identified; published imports and root mathematics remain read-only.

## Decisions and ledger

Exactly eight touched decisions and two flagged refuter decisions are written to the task-named JSON. Both refuter findings are confirmed fatal and locally repaired; five carriers were amended by Alpha. All completed repairs record repair_confidence: 1. Closed ledger rows separately record the eight accepted/amended reader repairs, three additional exact-citation corrections, and the two refuter defects. No mechanical validation failure is counted as a mathematical defect. Pre/post snapshots were compared; the reader report identifies original changes. Snapshots provide hashes, not missing historical source text; no reconstruction or retrospective reading is asserted. Current mathematical proofs were reviewed independently.

## Focused checks

Initial strict proof-contract check found two missing citation-use mappings for compact-mixture F3/F4 and a stale recurrence Statement quote in the nonergodic example. These are contract synchronization defects, corrected by regeneration without item edits. Reflow left all five Alpha-edited carriers unchanged. Precheck: 5 checked, 0 failing. Rendercheck: 5 files, no defects. Required risk-report: 12 routed reviews, zero errors with --require-reviewed. Final proof-layout passed: five edited items, 31 proof steps, zero defects. The renderer required a temporary Node resolution hook for the web @/ alias and extensionless relative TypeScript imports; first attempts failed on module resolution, with no item edits between attempts. The successful command was NODE_OPTIONS=--import=/tmp/physics-b12-alias-register.mjs node tools/physics-support/proof-layout.mjs followed by the five explicit edited item paths. No application checkout change was made. Ledger append recorded 13 closed rows; scoped ledger validation reported zero errors. Final strict proof-contract: 12/12 checked, zero errors and warnings. Supplier excerpts and finite-check step locators were synchronized, and the frontier input refresh completed.

## Preserved outside status

The batch-12 Gibbs/dephasing cross-batch input retains its prior open readiness/closure status for owner disposition. This dispatch found no new unmet mathematical prerequisite in the conditional dephasing proof and does not clear an earlier owner hold, certify batch 11, or initiate a gate. No outside carrier or published mathematics was edited.

## Handoff

All ten owed decisions and all twelve required risk reviews are complete. Stable IDs, page inventory and Alpha public Statements/Definitions are preserved. Five item proofs/facts were edited; manifest and proof-contract data are synchronized. No item carried a judge stamp requiring removal. No unresolved local repair or new published defect was found. Existing outside readiness status is retained, not closed. The engine owns decision-hash stamping and the gate battery.
