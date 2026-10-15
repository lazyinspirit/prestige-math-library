# Step 3a adjudication — batch 31

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-31`.

## Review checkpoint

Completed current proof and actual prerequisite review of `lem-rpm-finite-time-ode-comparison`. Checked every proof step and the current six supplier statements: C1 derivatives are continuous and integrable componentwise; forward vector FTC and integral norm inequality give d(t)<=d(0)+eta*t+L*integral d. Gronwall uses nondecreasing a=d(0)+eta*t and b=L>=0. T=0, eta=0, L=0 and equal data are sound; an empty K admits no stated trajectories. No existence is inferred from B or compact containment. The explicit same-time Lipschitz inequality licenses the comparison. Source: Iyer existence.html Theorem 8, Lemma 9, Remark 10; local proof supplies the stronger one-comparison-field version.

All eight current raw item hashes match the post-reader snapshot. Exact historical preimages recovered so far for shell-force IVP and controlled Newtonian reduction; comparison and prescribed-EM preimages not yet recovered. No assumption that hash metadata reconstructs missing bytes.

Next: finish low-speed and shell continuation risk records, then both trajectory branches and local force motion; dispose the published GR omission read-only.

### lem-rpm-low-speed-remainders

Read four steps and actual power, chain-rule, MVT and Cauchy-MVT statements. Positive base holds on a neighborhood of [0,delta^2]. f prime=1/2(1-s)^(-3/2), f double prime=3/4(1-s)^(-5/2); two mean-value applications give q(z)=f double prime(eta)*z^2/2 with eta<z. Division by 2xi only occurs when z>0; z=0 gives all equalities. The momentum factor m|v| and energy factor mc^2 give the exact claimed dimensions and constants. No dynamical or empirical conclusion. No choice use.

### lem-rpm-low-speed-uniform-remainders

Reviewed every step and four actual suppliers after pointwise lemma. rho=C^2 epsilon_star is positive and below 1, so delta=sqrt(rho) meets the supplier hypotheses uniformly. All powers of epsilon and constants follow by substitution. For f=sqrt(1-s), f double prime=-1/[4(1-s)^(3/2)]; Cauchy-MVT and ordinary MVT yield absolute remainder at most z^2/[8(1-rho)^(3/2)]. Ordinary MVT here is the immediate Cauchy-MVT specialization g(s)=s, so there is no substantial missing prerequisite. z=0 is handled without division. Adding mc^2 contributes the constant mc^2(b-a) on fixed intervals and does not assert convergence of extremals. No AC.

### lem-rpm-shell-force-ivp

Reviewed exact recovered preimage and current six-step proof with shell-tangent supplier and five calculus suppliers. Fixed normalized future data now give the invariant shell, closed relative to the open domain by continuous metric and nonvanishing causal pairing. K intersect shell is compact; finite cover of common local-existence neighborhoods gives positive uniform delta. Autonomous time translation and uniqueness prove eventual exit even for repeatedly returning trajectories at either finite endpoint. Continuous G is bounded on compact K; forward FTC gives M(t-s), including M=0, and nested compact tail closures supply endpoints without a completeness or choice gap. Matching derivative G at endpoint permits C1 gluing in both orientations. No lifetime or completeness inference. Actual consumer pthm-rpm-prescribed-force-local-motion uses the same normalized data and chart-local continuation statement, hence no repair needed; no other direct item consumer found.

### pthm-rpm-controlled-newtonian-reduction

Read every current step and nine actual prerequisites. Recovered preimage matches pre snapshot: sole reader delta corrects Tong 5.1.2 locator, supported by inspected section (stationary linearized metric and potential, no uniform trajectory-rate theorem). Flat branch uses constant massive momentum and properly specialized action and uniform remainders; curved branch assumes the full H1-H3 data, metric family, existing geodesic and Newtonian path. Admissibility supplies g00<0 on an open neighborhood of the compact path, hence a valid local time orientation. C3,K2,S_star remain fixed for O(epsilon); horizon scales as epsilon^(-1/2). Published GR proof 2.1 omits explicit vector integration justification: confirmed nonfatal and recorded read-only, since C1 discrepancy curves have continuous derivatives, componentwise FTC and forward integral norm bound immediately yield exactly its inequality. No false claim or substantial prerequisite gap. Consumer citation inherits this nonfatal omission and is separately disposed. No empirical premise or transfer of flat momentum to curved coordinates.

### pthm-rpm-prescribed-em-nr-trajectory-limit

Reviewed seven steps and all 23 current direct supplier definitions/statements, including actual inverse-momentum and Lorentz-force proofs. Fields are jointly C1 in an open laboratory region and time-first notation is explicitly the argument swap. Massive C2 worldline with fixed m>0 gives p and z C1; mass shell inversion yields Vc. For u=|p|^2/(m^2c^2), 0<=1-(1+u)^(-1/2)<=u/2, including u=0. Cross-product norm follows from the component identity. Blockwise FTC and Euclidean integral norm inequality prove the weighted dimensionless norm estimate; no unlicensed Euclidean-norm comparison. GN same-time Lipschitz estimate, equal data and uniform compact containment yield C_star*(c_star/c)^2*T*exp(LT). Pmax=0, q=0, Bmax=0 and L=0 are harmless; c remains strictly positive, rho cutoff is below 1 and field singularities are excluded. Constants have inverse-second units; formal c family is distinguished from SI definition or Maxwell dynamics. Exact historical preimage unavailable; current proof sound, historical closure awaits owner resolution.

### pthm-rpm-prescribed-force-local-motion

Read both proof steps and actual five suppliers. Adopted postulate imposes smooth orthogonality on its open velocity domain, not merely on one history. Constant m lets D_tau P=mD_tau U; normalized future initial data and fixed tau0 meet shell-tangent theorem. Uniqueness glues local solutions to the open maximal interval; compact chart-state containment meets reviewed shell continuation in either orientation. Proper-time normalization follows from g(U,U)=-c^2; no completeness or universal-force assertion. N and worldline regularity are precisely defined. Refreshed only stale L1/L2 contract quotes after independently checking corrected supplier interfaces; proof and statement unchanged, no mechanical defect row.

## Routed published and consumer findings

Both `reader:31:1` and `refuter:31:1` are confirmed_nonfatal. They concern distinct carriers: published omitted vector-integral justification and its inherited consumer citation. For A=X_epsilon-X_star and B=W_epsilon-W_star, A and B are C1 and their derivatives are continuous and componentwise integrable on each [0,S]. Vector FTC gives A(S)=A(0)+integral B and B(S)=B(0)+integral(-grad psi(X_epsilon)+grad psi(X_star)+R_epsilon). The forward Euclidean integral norm bound, sum triangle inequality and supplier step 1.3 give D(S)<=D(0)+C3*epsilon*S+(1+K2)*integral D. At S=0 this is equality. Thus Gronwall has exactly continuous nonnegative D, b=1+K2 and nondecreasing a=D(0)+C3*epsilon*S. The omission is immediate nonfatal proof polish, not a counterexample; published carrier remains unchanged and mathematics maintenance stays OPEN.

## Historical dispositions and blockers

Shell-force repair accepted against recovered exact preimage; controlled-reduction locator change reviewed_no_defect, metadata only. Comparison and prescribed-EM touched obligations escalated solely for absent exact pre-reader bytes and absent explicit owner historical resolution. Current mathematical reviews and risk records are complete; prior uncertainty is preserved. No claims of reconstructed historical bytes, judge acceptance, stamping or gate passage.

## Supplier and consumer review limits

Current mathematical suppliers were read at their exact Statement/Definition interfaces; the shell-tangent, inverse-momentum, free-geodesic and published GR trajectory proofs were also inspected. The draft supplier labels retain their actual status. Cross-batch item-use rows for the reviewed owning consumers were updated with precise conditions and refreshed through the prescribed ledger tool. The unassigned energy example and page-edge historical rows remain unchanged. Direct dependency/reference search found only the same A-page and `pthm-rpm-prescribed-force-local-motion` for the shell continuation supplier, only the same A-page for the comparison supplier, and only the same A-page for the prescribed-EM trajectory theorem. The page prose retains existing-trajectory and compact-containment qualifications; the local-motion consumer has the same normalized future initial data. No outside consumer repair is required by these reviewed reader interface changes. No item carrier was edited by Alpha, so their raw bytes remain exactly post-reader bytes.

## Sources checked

- [Iyer, Existence, Uniqueness, etc.](https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html), Theorem 1; Theorem 8, Lemma 9 and Remark 10; Proposition 17. Its comparison proof is a sketch, and the local comparison proves its one-comparison-field formulation independently. Compact-uniform eventual exit is proved locally rather than attributed wholesale to the source wording.
- [Tong, General Relativity, §5.1.2](https://davidtong.org/teaching/general-relativity/grhtml/S5), stationary linearized metric and Newtonian-potential correspondence, equations following (5.229). This supports the corrected locator, not the scaled trajectory rate.
- [OpenStax, University Physics 3, §5.8](https://openstax.org/books/university-physics-volume-3/pages/5-8-relativistic-momentum), equations (5.6)–(5.7); [§5.9](https://openstax.org/books/university-physics-volume-3/pages/5-9-relativistic-energy), kinetic and total-energy identities. Exact inequalities are proved locally by MVT/Cauchy-MVT, rather than attributed to a heuristic expansion.
- [OpenStax, University Physics 2, §16.1](https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves), field-force context; the covariant-to-coordinate deduction was checked in the actual published EM supplier. No external textbook PDF retrieval is claimed for that supplier’s Tong/Fitzpatrick/Beisert bibliography.
- [Carroll, Chapter 4](https://preposterousuniverse.com/wp-content/uploads/grnotes-four.pdf) was opened for weak-field context; no external source is used to certify the locally derived uniform scaled bound. No experimental observations or statistical certainty are introduced.

## Local checks

Initial risk-report: seven HIGH/CRITICAL carriers identified, zero errors. After all specific current-proof reviews, `risk-report ... --require-reviewed` passed with zero errors across the eight-item contract. Strict proof-contract check initially found stale L1/L2 quotes in the untouched local-motion contract; regenerating that entry against inspected current suppliers resolved both. Final strict check: zero errors, one nonblocking shotgun-bracket warning on prescribed-EM step 1.1. This warning does not identify an unlicensed mathematical inference: each fact’s actual use is checked above.

Using the existing isolated `/private/tmp/physics-proof-layout-app` loader wrapper and `PRESTIGE_APP_DIR` for the unmodified normative checker: precheck passed on the four reader-touched carriers; the single batched proof-layout invocation returned 4 items, 18 steps, 0 defects. Rendercheck passed on the same four carriers. Final raw-byte comparison: all eight carriers equal the post-reader snapshot. No judge invocation, stamp, self-certification or gate battery was initiated. The defect-ledger append validated and added exactly three owned rows after correcting its class enum before append; the mechanical schema rejection is not a defect row. Published ledger edit used and released only this worker’s exclusive lock.

Handoff: six routed decisions written. Two historical touched-carrier obligations remain escalated pending exact preimages or explicit owner-authorized current-content resolution. The two source/citation omissions are confirmed nonfatal and closed as nonfatal-recorded, with original mathematics maintenance OPEN. The shell reader repair is accepted; the source-locator normalization is reviewed_no_defect/metadata. Seven current mathematical risk reviews are complete. These are local review results, not engine acceptance.
