# Batch 64 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`. Group: `batch-64`.

Review proceeds in the generated item order. Five routed decisions are owed; six HIGH/CRITICAL risk reviews are owed. No pages are routed.

## Level 0 — Cartesian stretch

`refuter:64:1`: confirmed_fatal citation-inaccurate finding. The current definition has nonnegative continuous piecewise C1 absorption, identity stretch on x≤0, and Re(s)=1, so reciprocals exist. The composed derivative operator is the chain-rule pullback; zero absorption yields the ordinary Helmholtz operator. No mathematical change is needed. Corrected Johnson §§1–2 to §§3.1–3.2 in the item and manifest. Source: https://arxiv.org/html/2108.05348, §§3.1–3.2, equations (7)–(8), lines 141–159. No Statement/Definition change or consumer repair is required.

## Level 1 — Perfect matching

`refuter:64:2`: confirmed_fatal citation-inaccurate finding. Independently checked both normal derivatives, tangential eigenvalue, q²+|η|²=k², interface value/flux, and modulus exp(−qS). Nonnegative S on the layer and q≥q0 give the uniform bound; q→0 gives no uniform decay. The stated lower bound S≥σ0x is conditional, so it does not demand positive damping at the interface. Corrected the same locator in item and manifest; the argument and hypotheses stand. Source: Johnson §§3.1–3.2, equations (7)–(8).

## Level 2 — Hankel modulus risk review

All four steps and the finite-derivative definition/radial-solutions supplier were read. The coefficient induction, squared-modulus recurrence, top-degree coefficient, and monotonicity ratios hold. The lower bound is A(ell,ell) times z0^(−ell−1), since S(ell,ell)=A(ell,ell)². The final finite ratio sum is bounded by exp(2z0); ell=0 uses the explicit base and the empty product. No limiting-in-degree step occurs. Risk review complete; no defect or decision owed. Primary comparison: DLMF https://dlmf.nist.gov/10.49, equations 10.49.1, 10.49.6, 10.49.17–18. Next: finite-layer and angle-mode findings.

## Level 2 — Finite-layer and angle findings

`refuter:64:4`: confirmed_fatal citation-inaccurate finding; Johnson §3.3 (PDF p. 9) describes Dirichlet termination and round-trip attenuation. Independently, u(L)=0 gives B/A=−exp(2iqX(L)) because A and the exponential are nonzero, and its modulus is exp(−2qS(L)). Interface X(0)=0 makes these the interface coefficients. Corrected §2 to §3.3 in item and manifest.

`refuter:64:3`: confirmed_fatal citation-inaccurate finding; corrected §2 to §§6, 7.2 in item and manifest. For real q=k cos(theta)>0 the mode factor follows from the checked matching theorem; normal and grazing limits agree. Direct substitution q=i alpha gives a unit-modulus stretch phase, with the physical exp(−alpha x) remaining. The k=0 allowance in the verification is an algebraic limit, while the model and propagating theorem use k>0. Neither claim nor proof needs repair. Source: Johnson §6, equation (9), PDF pp. 13–14, and §7.2, PDF p. 15.

## thm-pe18-exact-spherical-dtn-map-on-smooth-data

Read all four steps and all five direct suppliers. k,R>0 ensure nonzero Hankel denominators. The tau bound is linear in degree; harmonic C^p bounds times rapid smooth-data projection decay give summability in every angular norm. On R<=r<=R1 the radial ODE bounds second and mixed derivatives by degree polynomials. Radiation residual r*k*(hprime-i*h) equals z*(hprime-i*h), so the stated (ell+1)*exp(2kR) majorant has no missing k factor. Its summability justifies the infinity limit uniformly in angle. Uniqueness uses modewise outgoing expansion and density, with boundary continuity identifying coefficients. DLMF 10.49.6, 10.49.17-18, 10.50.1 and 10.52.4 checked; Stefanov Chapter V section 1.2 Theorem 1.1 and Remarks 1.1-1.2 confirm why unqualified interchange of degree/radius limits is avoided. Zero data and ell=0 are covered; neither k=0 nor R=0 is admitted. No choice or new defect.

## thm-pe18-rellich-uniqueness-for-a-spherical-obstacle

Read both steps and all four direct suppliers. The exterior definition supplies continuous boundary trace and uniform Sommerfeld condition, and the mode-expansion proof eliminates the incoming coefficient separately in each degree using its nonvanishing radiation residual. At a>0,k>0 the positive-flux Hankel identity implies h(ka)!=0, so each outgoing coefficient is zero. Density then gives zero L2 norm and continuity gives pointwise zero. The approximation uses one finite sum at a time and no choice axiom or infinite-mode infinity interchange. DLMF 10.50.1, 10.52.4 and Stefanov Chapter V section 1.2, Theorem 1.1(c) and its proof agree with the outgoing convention. This establishes only the stated spherical obstacle result, not general-domain uniqueness. No reader/refuter mathematical finding or new defect.

## ex-pe18-spherical-monopole-exterior-field

Read all three verification steps and four direct suppliers. For a,k>0 the explicit h0 ratio gives (a/r)*exp(ik(r-a)) and denominator never vanishes. Differentiating gives uprime=(ik-1/r)u and the stated radial second derivative, so the three-dimensional radial Helmholtz terms cancel. At r=a trace is 1, and r*(uprime-ik*u)=-u tends uniformly to zero because |u|=a/r. Difference of any two classical outgoing extensions has zero boundary data, so the checked spherical uniqueness theorem applies even to nonradial competitors. DLMF 10.49.6 at degree zero and 10.52.4 agree. No choice, k=0 extrapolation or defect.

## lem-pe18-modal-trace-and-form-continuity

Read both current steps, both direct suppliers and the exact pre-reader source archived in owner-planning-integration/scope57-before/items (raw SHA256 455a4b4f483c0eb132bee97f1a094474542a85aded5d06a1c4efae70ed38dc9c). Current raw SHA256 cd8076a54212e78b697e7c665b91b9dd73d4a8a0df1e1473bd58d5035f10d6f6 equals reader-post. Accept the repaired Young inequality: A=||w||2, B=||wprime||2 and 2(1+ell)AB <= (1+ell)^2*A^2+B^2, with (1+ell)^2 <=2(1+ell(ell+1)) and r>=a>0. The averaged endpoint term (1+ell)/(R-a)*A^2 is also bounded by angular/mass energy uniformly in degree. Reflection gives inner trace and summing nonnegative energies gives both bounds. Coordinatewise completeness and tail convergence give the Hilbert direct sum; tau=O(1+ell) plus weighted Cauchy-Schwarz proves absolute boundary convergence and continuity. Constants may depend on a,R,k; no a=0 or a=R claim. The old inequality is true but cannot bound its weighted derivative term uniformly; reader repair closes that inference. No further item edit.

## thm-pe18-spherical-exact-dtn-variational-wellposedness

Read all four steps and all six direct suppliers after completing the trace review. Smooth data at a>0 yield a classical outgoing series and finite coefficient energy bounded by C*sum(1+ell)^2||f_ell||2^2. Compactly supported single-degree tests give the distributional ODE; since r>=a>0, r^2*wprime has an H1 derivative and ordinary one-dimensional regularity gives C2 up to endpoints. Integration by parts with arbitrary outer trace gives the correctly signed wprime(R)=tau*w(R). Finite-degree tests preserve zero inner trace and are dense by the checked direct-sum lemma, so form continuity extends the identity. Incoming/outgoing modes span by nonzero Wronskian; the outer condition eliminates incoming mode and nonzero h(ka) eliminates the remaining coefficient. Zero f is covered and no arbitrary-data stability or k=0 case is claimed. DLMF 10.50.1 and the locally proved smooth DtN/radiation estimates support the argument. No choice, unresolved prerequisite or new defect.

## Decisions and source-evidence maintenance

Exactly five decisions recorded: four confirmed fatal inaccurate citations, each repaired, and one accepted trace-proof repair. Each maps to one closed defect row owned at `3a-adjudicate`; repair confidence is 1. No additional decisions were invented for risk-only items. Current coverage/source-evidence locators now agree with the four corrected item/manifest references; historical fetch receipts remain intact. The coverage hash mirror was updated. No Statement/Definition or proof was changed by this adjudicator, and no judge stamp was added or invalidated by a material rewrite.

The trace preimage was recovered from the exact current-run scope57-before archive; historical uncertainty is absent for this decision. Its statement, dependency list and manifest carrier are unchanged. Other than the required risk_review, its contract retains the reader-post content.

## Focused check correction

The first strict-contract run reported exactly two `citation-quote-mismatch` errors, both F1 quotations of `def-pe18-exterior-helmholtz-problem`, in the Rellich theorem and monopole example contracts. The old mirrors used a less explicit classical-boundary convention; the actual current supplier specifies C2 in the exterior and continuous extension to the boundary. Both consumer proofs use precisely this current convention and the same uniform outgoing condition. Updated those two exact quotation mirrors, preserving supplier and consumer items. This mechanical metadata synchronization creates no new mathematical defect row or routed decision.

## Published findings, scope and dependency records

No defective published item was found in the dependencies inspected; no published carrier or published-consumer ledger was edited. No outside-batch repair, proposed withdrawal, unresolved uncertainty or supplier escalation is required. Actual cross-batch supplier uses for the reviewed owned consumers were recorded in the existing batch-64 cross-batch-dependencies input, retaining prior owner history and unrelated rows; the prescribed frontier-dependency-ledger refresh succeeded. No shared frontier brief was rewritten. Lower-level published analysis/set-theory closure was not independently re-audited; no claim of full recursive-library review is made.

Primary sources consulted were Johnson (linked above; the PDF and HTML have the same relevant section numbers), DLMF §§10.49–10.52 at https://dlmf.nist.gov/10.49, https://dlmf.nist.gov/10.50 and https://dlmf.nist.gov/10.52, and Stefanov https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf, Chapter V Appendix §1.1, printed pp. 67–68 (PDF pp. 73–74), and §1.2 Theorem 1.1 with proof and Remarks 1.1–1.2, printed pp. 69–70 (PDF pp. 75–76). These are source comparisons; every reviewed argument has its local mathematical suppliers.

## Final local checks and handoff

- Initial risk report: 18 items routed, 0 errors; all six HIGH/CRITICAL items received specific complete risk reviews in dependency order. Final `risk-report.mjs ... --require-reviewed`: 18 items, 0 errors.
- Reflow on the four edited item paths: all unchanged.
- Precheck on those paths plus the accepted trace item: 4 proof-bearing items checked, 0 failing; the definition has no proof to precheck.
- Rendercheck on the same five paths: passed YAML and every KaTeX expression.
- Strict proof-contract check after the two quotation synchronizations: 18/18 items, 0 errors, 0 warnings. The initial two failures and their metadata correction are recorded above.
- Required final single batched proof-layout command on the four edited items plus the accepted trace item: 5 items, 8 steps, 0 defects. No item edit or formatter followed it.
- Local obligation/ledger consistency check: exactly five decisions, each with one matching fixed defect at `3a-adjudicate` and repair confidence 1. Inverting each intended bibliographic substitution reproduces its pre/post-reader raw item hash exactly. The trace item still reproduces its post-reader raw hash exactly.
- Defect-ledger append: five rows appended through the locking tool and its generated view refreshed. Dependency-ledger refresh succeeded.

The live status command confirmed this is an active Step-3 run; no run transition, gate battery, judge cycle, decision stamping, self-certification, publication or commit was performed. Batch-64 adjudication is complete with no local blockers. The engine owns stamping and subsequent gates.
