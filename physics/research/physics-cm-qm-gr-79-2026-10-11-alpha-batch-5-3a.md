# Batch 5 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-5`; scope: batch 5. Review in generated dependency order. No judges, stamps or engine gates are run.

## Completed review checkpoints

### `def-cm-central-force-trajectory`

Reviewed the complete Definition and all five supplier definitions. The interval is nondegenerate, endpoints use relative derivatives, and |r| belongs to the positive open radial domain. j, E and V_J are defined also for J=0; the C2 potential is legitimate. Mathematical data only, with no empirical premise.

### `def-cm-one-dimensional-action-variable`

Reviewed all datum quantifiers and five suppliers. Continuity and positivity give a finite Riemann integral, including zero radicand at endpoints. Definition does not assume simplicity despite its title. Its explanatory claim that the integral is twice the phase-space area has the normalization reversed: the unnormalized integral is half that area and J_a is area/(2pi). Risk-only scope: report this owner-routing alert; formula itself remains sound.

### `def-cm-scattering-data`

Reviewed all 12 supplier statements. Countable choice is explicit for the measure foundation. Density b is nonnegative and sine is positive on the open angular chart. A C1 nonzero derivative has constant sign on the interval; the inverse derivative applies at every point. Chart endpoints and zero impact parameters are excluded. Abstract branches are independent of finite-range trajectory data; no observations are claimed.

### `lem-cm-planar-polar-lift`

Read every step and all 13 exact suppliers. Primitive of g exists because rho,sigma and their first derivatives are continuous; g is differentiable, which suffices for theta twice differentiable. The rotating-coordinate calculation gives A/r=1, B/r=0 and the derivative of any lift. Included endpoints use relative derivatives. Steps 1.1 and 2.1 incorrectly assert continuous second derivatives from twice differentiability; the Statement is valid with merely differentiable g, but these unnecessary overregularity assertions need removal by an owner-routed proof repair (risk-only carrier).

### `lem-cm-second-order-oscillator-form`

Read all five steps and eight suppliers. The invariant pair w,z has zero derivative, yielding constants and v=A cos+B sin; the converse is directly differentiated on R. omega>0 excludes division by zero. Step 1.1 overstates that every term is twice differentiable, since v-prime need only be differentiable; differentiability suffices and v-double-prime=-omega²v supplies continuity. This is nonfatal local wording polish; no defect in the claim.

### `lem-cm-oriented-orthonormal-triads`

Read seven steps, the triple-product proof and all ten suppliers. A nonparallel standard basis vector exists by finite inspection, normalization has nonzero denominator, and e2=e3 cross e1 has correct orientation. Finite Bessel sums bound list size by three; a nonzero orthogonal remainder would give four, establishing expansion and norm identity. No arbitrary choice is used.

### `thm-cm-action-variable-derivative`

Read nine steps, all 15 suppliers and the reader endpoint repair. The explicitly stated exactly-two-roots hypothesis identifies local inverse branches globally near each energy. Choose q1,q2 in connected sign neighborhoods; square substitution removes each endpoint singularity and integration by parts cancels variable-boundary terms. Compact-rectangle differentiation gives continuous derivatives locally. Corrected step 2.1 to J_a=(L+M+R)/pi, matching the Definition and final derivative T/(2pi); reader endpoint changes retained. Statement unchanged; no empirical inputs. Repair confidence 1.

### `thm-cm-central-force-angular-momentum-conservation`

Read four steps and the draft pairing supplier proof. Bilinear differentiation gives j-prime=mu r cross r-double-prime=0; vector FTC applies because zero derivative is integrable on every compact subinterval, including relative endpoints. Orthogonality is exactly the cross-product supplier. Nonradiality is not assumed, so j=0 is allowed.

### `thm-cm-differential-cross-section-density`

Read five steps and all 21 exact supplier statements. The C1 inverse gives positive continuous h=b|b-prime|; compact rectangle substitutions agree as finite measures. Open rectangles form a generating pi-system with nested finite-measure exhaustion even for unbounded branches; uniqueness, simple approximation and monotone convergence establish all nonnegative Borel tests, then signed tests by absolute integrability. Sine is positive only on the stated open chart; finite disjoint incident branches add on overlapping images. Countable choice carried; no empirical conclusions.

### `thm-cm-central-force-polar-reduction`

Read eight steps and every supplier. Orthonormal expansion plus j perpendicular r yields the plane, and the polar-lift Statement supplies twice differentiable coordinates; its unnecessary C2 proof assertion is not used here (owner alert recorded). Positive rho and oriented j fix theta-prime>0. Radial projection gives the centrifugal sign and the differentiated energy cancels exactly; zero j is excluded. Included endpoints use relative derivatives.

### `ex-cm-harmonic-oscillator-action-derivative`

Read four steps and all 11 suppliers. For m,k,E>0 the only two simple roots are ±sqrt(2E/k). The sine substitution has nonnegative cosine, yielding action E/omega. Period quadrature is understood via interior truncations before canceling cosine, so endpoint zero/zero is never evaluated. The constant derivative matches the corrected general theorem; E=0 is excluded.

### `thm-cm-circular-orbit-and-radial-frequency`

Read five steps and all 13 suppliers. Constant rho necessitates V-prime=0; the explicit circle has j=Je3 and solves the force equation precisely under this critical-point condition. The derivative definition gives g(x)=V-double-prime(r0)x-V-prime(r0+x)=o(x), so the nonlinear equation splits with the correct remainder sign. Positive V-double-prime is required for the sinusoidal linearised equation; no nonlinear stability asserted.

### `thm-cm-coulomb-scattering`

Read nine steps, all 29 exact suppliers and the draft continuation proof. V-prime<0 gives a unique positive simple root. The reader local Cartesian derivative estimate supplies Lipschitz bounds on convex collision-excluded neighborhoods; energy bounds speed and excludes the origin, permitting compact continuation at both finite ends with time reversal. Strict positive radial acceleration gives the unique apsis and escape. Acceleration is O(t^-2), yielding Cauchy velocity limits. Scaled-root substitution gives Delta in (0,pi/2); the remaining-angle estimate gives rho sin(Psi)->J/(mu c), without falsely asserting a finite Coulomb longitudinal intercept. Positive b supplies the actual apsis-state family. Reader repair accepted; Statement unchanged.

### `thm-cm-kepler-binet-equation`

Read all five steps and nine suppliers. The reader obtains C2 rho from its ODE and C2 inverse angle from reciprocal derivative, on the open image W. Chain differentiation gives rho-prime=-(J/mu)u-prime and rho-double-prime=-J²u-double-prime/(mu²rho²). Independently found reversed signs in step 4.1: corrected the radial equation and substitution to -kappa/rho²+J²/(mu rho³), yielding u-double-prime+u=mu kappa/J². Energy and W surjectivity then give all stated identities. Reader regularity repair retained; Statement unchanged; repair confidence 1.

### `thm-cm-scattering-turning-point-and-global-branches`

Read six steps and all 14 suppliers, including complete draft continuation proof. V-double-prime bounded near positive radii supplies local Lipschitz; reciprocal-power differences handle theta component. Energy and the strict-minimum barrier prevent crossing rstar; finite-range U is bounded below, bounding rho-prime and theta-prime on finite times. Compact continuation for F and -F plus explicit Cartesian reconstruction and aligned lifts establishes global uniqueness. A bounded component of rho>rstar would need opposite signs of its nonzero derivative, ruling it out. Differentiate tau(rho(t)) on open monotone branches, then take finite simple-root limits and use divergent infinity limit. Free tails hold once rho>R. Reader repair accepted; no reliance on the collision counterexample.

## Final risk dispositions and later supplier corrections

The following entries supersede earlier checkpoint text where a later necessary supplier repair is recorded. All edits stay in batch 5. Risk-only proof corrections create no additional routed obligation. No Statement or mathematical Definition was changed.

### `lem-cm-planar-polar-lift`

Read all eight steps and 13 exact suppliers. Removed false C2 assertions from twice differentiability in steps 1.1 and 2.1: product/quotient rules make r-prime and g differentiable, which is all the Statement requires. g is continuous because input first derivatives are differentiable, so its primitive exists, including relative endpoints. Rotation identities and zero-derivative constancy prove the lift and any-lift derivative. Proof-only supplier repair; Statement unchanged; repair confidence 1.

### `thm-cm-kepler-conic-and-eccentricity`

Read four steps and nine suppliers after the Binet sign repair. Corrected erroneous c-inverse to c=mu kappa/J² in L1 and steps 1.1-2.1. Then v=u-c solves v-double-prime+v=0, amplitude R>=0 gives e=R/c with R=0 explicitly covered, and unit-circle phase selection gives u=c(1+e cos). The energy cancellation yields mu kappa²(e²-1)/(2J²), checking all three sign iff cases. Statement unchanged; consumer period uses this corrected proof; repair confidence 1.

### `thm-cm-rutherford-cross-section`

Read five steps and all 29 suppliers. Negative arctan derivative makes the forward deflection bijective onto (0,pi), and its inverse is (kappa/(2E))cot(theta/2). Absolute inverse derivative and positive sine produce kappa² csc^4(theta/2)/(16E²). A theta^-3 lower bound establishes divergence at zero; compact intervals have finite integrals. Countable choice is carried for measures. Clause 2 calls the inverse pair (theta,b) a deflection branch, whereas the Definition requires the forward impact-to-angle map; formula and forward branch are sound, but this public-interface typing needs owner routing and outside-consumer review. No empirical cross-section is inferred.

### `thm-cm-scattering-asymptotic-velocities-and-impact-parameter`

Read four steps and five suppliers. Quadrature inversion in the turning theorem guarantees tails beyond R; velocities are exactly constant there and energy fixes positive speed sqrt(2E/mu). For a nonzero line direction, orthogonal projection minimises squared distance and Gram identity gives |r cross v|/|v|; conserved angular momentum yields J=mu b|vminus|. The actual incoming tail is a half-line and only its affine extension is a full line.

### `cex-cm-radial-kepler-collision`

Read all three steps and ten original suppliers. The power-rule witness A(1-t)^(2/3)e1 has negative radial acceleration -2A(1-t)^(-4/3)/9, and A³=9kappa/(2mu) gives the coefficient equality by algebra. Confirmed the refuter citation defect: mean-value inequality does not state that equality. Removed the irrelevant link, dependency, role and contract citation. Collision limit excludes any continuous extension through t=1; domain already extends to -infinity, so it is maximal and inf rho=0. Reader removal of the overbroad turning-point inference is retained. Proof provenance changed to ai-altered; repair confidence 1.

### `thm-cm-kepler-ellipse-geometry`

Read five steps and all 15 suppliers. Denominator >=1-e>0 covers circular case e=0. Completing square gives affine disc, and ab>0 gives its invertible linear part; corrected the determinant notation in step 1.2 from a matrix assigned to det to det diag(a,b)=ab. Polar region includes s=varrho boundary after reader repair, so its omitted points lie only on the positive x-axis and origin, a null subset of a line. L1 indicator is justified by closed bounded ellipse. Countable choice is explicit for change of variables and nullity. No claim that the ellipse boundary is null is needed. Repair confidence 1.

### `thm-cm-scattering-angle-advance`

Read five steps and all 16 suppliers. Corrected ill-typed rho-prime(s) to rho-prime(rho-inverse(s)) in step 1.1, and restrict substitution first to compact interiors where radial derivative is nonzero. Simple-root endpoint behaves as inverse square root, and infinity as C/r², so both half-angles exist. Incoming sign reversal gives equal halves. Free affine tails supply nplus=vplus/speed and nminus=-vminus/speed; oriented rotation gives the negative cosine, with undirected angle pi-2Delta only when 0<Delta<pi/2. Statement unchanged; repair confidence 1.

### `ex-cm-rutherford-cross-section-check`

Read three steps and ten suppliers. kappa=E=b=1 gives arctan(1/2), cot=2, csc²=5, and cross-section 25/16. Corrected the false step-3.1 premise kappa=4E to kappa=E=1; proof provenance ai-altered. All constants are exact mathematical inputs, with no fabricated measurements; countable choice travels with the measure vocabulary. Repair confidence 1.

### `thm-cm-kepler-orbit-period`

Read eight steps and all 20 suppliers, including the continuation proof and corrected conic proof. Confirmed refuter phase duplication: shifted varrho must be evaluated at theta, not theta-theta0. Corrected L2, L4 and every proof use consistently; retained reader energy-factorization, reversal and reconstruction repairs. Local Lipschitz reciprocal powers and negative-energy factorisation bound radius away from zero (also e=0), bound radial velocity and angle on finite times, so both ends continue. Explicitly identify the global conic coefficients from their overlap with original angle interval. Positive bounded angle speed gives a bijection R->R; matching reduced states after one 2pi angle shift and uniqueness prove periodicity. Inverse-angle primitive evaluates time; translate to unshifted ellipse profile for area integral, yielding T=2pi mu ab/J and T²=4pi²mu a³/kappa. All countable-choice uses are confined to ellipse area; no observations. Repair confidence 1.

### `ex-cm-kepler-ellipse-data-check`

Read four steps and eight suppliers after their repairs. Exact mu=kappa=J=1,e=1/2 give p=1,a=4/3,b=2sqrt3/3,E=-3/8. Both period formulas give T=16pi sqrt3/9 and T²=256pi²/27. e=1/2<1 checks the negative-energy iff. The example is conditional algebraic consistency, with explicit countable choice and no measurements.

## Routed decisions

Exactly nine obligations are written in the decisions JSON: seven touched carriers and two flagged findings; no reader or page decision is owed. Coulomb scattering and finite-range turning/global branches accept the reader repairs. Action derivative, Binet, ellipse geometry, orbit period and collision amend the reader repairs. Both refuter findings are confirmed fatal citation/claim defects and repaired, each with exactly one closed ledger row. The touched decisions use separate rows for the independent reader repairs, avoiding duplicate ownership of refuter rows.

| Item | Pre-reader raw SHA-256 | Post-reader raw SHA-256 | Final raw SHA-256 |
|---|---|---|---|
| `cex-cm-radial-kepler-collision` | `bcf003ddc0419e4737eabad396f011e5c3910f667aac375b552ef6a06fcddfc5` | `87f80495f2a620d1535c1f87a9315dd0eb1588b9a7637d709d978165c7120ccc` | `4e89651bc6d05723d93a13886490e60914396a4163b2d7dab640c86326cb6731` |
| `thm-cm-action-variable-derivative` | `dc5a9d5baf51124f93173481cb32972e7e4150dc6872e563829b04660b17bea6` | `2288746b49018eb43abc3194ea22ec4ecdad9bb29be4a556c61a2d6cd0a9df2d` | `21f3e0958f28ca6df2fb233f852dbc971d422b63d5b132eb99f629083a08bbf0` |
| `thm-cm-coulomb-scattering` | `ec21adf6a9a11b44da9c2fba348a2fa25ea32bad5cc7b790b2c4160da8274fb7` | `d9149db7e52852573b579cb0083a3cad7188769bb24966a184d54d40c071d93f` | `d9149db7e52852573b579cb0083a3cad7188769bb24966a184d54d40c071d93f` |
| `thm-cm-kepler-binet-equation` | `87f0c9438989f5cb9e767200a0fa1beb20b34ad7e2133b1e29cf25b2b7182a2d` | `dfc1f8ebf427a5e4ffdceb364d3ef73bec4b113c6224fbcdba82971fc2ec3fe2` | `f97e32aa599a7068c573d5d4b94601188443cd2b7099e47e6ce57b807727c0d3` |
| `thm-cm-kepler-ellipse-geometry` | `f45180ebc962db5a2bbff9e5402daebb11a991abc79691ea5d6f0a037452c659` | `8196edb9dcebf16becd582980bbf20735b0c05dfea9b7309d61764f5288b0832` | `d42e44603ff48c0e2e962bb1f08715f321667c13c75f2e7dcdce7f4a0c8cacda` |
| `thm-cm-kepler-orbit-period` | `02756636ac6203aafe9b328005df94388238fdaec0e448657aeca14a34f25fab` | `0ceee03f2b866a3419da234a169d996029b026b64eecbf97bfa5ccd12fa52f3b` | `d02a8d90819be34090f2960398e823593c7392bbf2de367810411ad6e914b80a` |
| `thm-cm-scattering-turning-point-and-global-branches` | `eb628830b500dd094008a14388f6c6e00456012d06e2a2e16a2e409cbb213c46` | `7d8db1ebe1b0694270f46e59c541f07e2018b67382a7e843fb4a90b2e1a344a4` | `7d8db1ebe1b0694270f46e59c541f07e2018b67382a7e843fb4a90b2e1a344a4` |

The pre/post raw fingerprints identify distinct reader versions; the reader report supplies the historical repair evidence. The final carrier was independently reviewed. I did not retrieve pre-reader proof byte copies or claim an exact textual diff of those bytes. Current carriers initially matched the post-reader raw item fingerprints; only Alpha edits listed here depart from them. The refuter observed hashes are canonical compound carrier fingerprints (item, contract and manifest), not raw item hashes.

- `refuter:5:1`: routed compound `60ad860cbaac2082fb5f8f9a0963d658eeef20dfbc86e3e047c3a88f901d5ed2`; computed post-reader compound `60ad860cbaac2082fb5f8f9a0963d658eeef20dfbc86e3e047c3a88f901d5ed2`; matches.
- `refuter:5:2`: routed compound `a310994cdde3b9baf273089b5d68e6b451ae92f1a2c51bcabb5033ee88a8b8fd`; computed post-reader compound `a310994cdde3b9baf273089b5d68e6b451ae92f1a2c51bcabb5033ee88a8b8fd`; matches.

## Source checks and limits

The direct mathematical supplier Statements/Definitions were opened for every owned carrier; the draft pairing and compact-continuation suppliers were read through their proofs. Published supplier proofs were not recursively re-audited. All owned items are mathematical data or conditional mathematical results; none uses measured inputs or claims experimental validation.

Fitzpatrick, [central force](https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node44.html), Eqs. (299)–(300), uses h=J/mu and potential per unit mass U/mu. [Scattering](https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html), Eqs. (340)–(350), (358)–(365), supplies the matching half-angle, scaled-root and density formulas. These source formulas corroborate the local calculations, not the stronger local ODE completeness proofs.

Likharev, [Classical Mechanics PDF](https://essentialgraduatephysics.org/Files/CM%20merged.pdf), §3.4 PDF pp. 43–47 / Chapter 3 pp. 12–16, Eqs. (3.50)–(3.65), and §3.5 PDF pp. 47–49, Eqs. (3.66)–(3.73), supplies the circular criterion, conic classification and scattering formulas. Extracted PDF algebra is poorly ordered by OCR; source reading did not replace checking every local algebraic step.

The cited Tong PDF URL returned an internal retrieval error. The current official [Hamiltonian Formalism HTML](https://davidtong.org/teaching/classical-dynamics/dynhtml/S4), §4.5.3 Eqs. (4.403)–(4.409), was read: action is enclosed phase-space area divided by 2pi and its derivative is period/2pi. Exact old PDF printed-page and equation locators remain unverified; no assertion that all bibliographic locators were independently confirmed is made. The local square-substitution proof supplies endpoint rigor rather than adopting the HTML endpoint heuristic.

## Owner alerts and closure limits

1. `def-cm-one-dimensional-action-variable`, Definition reading paragraph: “the integral is twice the momentum phase-space area” reverses the normalization. For pplus(q)=sqrt(2m(E-U(q))), the region between ±pplus has area 2 integral pplus dq; J_a is that area/(2pi). The formula is correct. The title also calls turning points simple although this Definition assumes only continuous U. Public Definition/title edits and consumer review must be routed by the owner; this carrier was assigned risk review. Direct uses inside batch 5 are the action theorem and harmonic example; outside reference/dependency consumers found are `pthm-cm14-action-angle` and `ex-cm14-kepler-radial-action-check` (read-only owner routing, not repaired).

2. `thm-cm-rutherford-cross-section`, Statement clause 2: the inverse pair (theta,b) is called a deflection branch, but `def-cm-scattering-data` defines branches from impact parameter to angle. Route a surgical public-interface correction to the forward theta_def restricted to the inverse image of the chosen angular interval, with actual external-consumer review. The density and divergence deductions reviewed here are sound. The geometric meaning of “focus” in the ellipse final prose is supplied by its semiaxes, but a strict define-before-use audit should explicitly state the focal points centre ±sqrt(a²-b²) along the major axis; this is another owner prose/interface follow-up.

3. Four risk-only proof carriers were necessarily corrected locally: polar lift, conic/eccentricity, scattering angle and exact Rutherford example. Their closed defect rows are recorded under risk dispositions in this report, without inventing extra decisions in the nine-obligation file. The engine/owner must stabilize and route these new carrier changes and their ledger ownership before its scope gate. This handoff does not claim gate-ready closure. In particular the conic and polar supplier corrections are required for sound acceptance of the higher routed carriers; none changes its Statement.

No defective published item was confirmed, so no published-content repair or published-ledger mutation was made. No substantial mathematical prerequisite remains missing after the local proof corrections. Public-interface owner alerts and engine routing remain open.

## Local checks

- Initial risk-report: 25 routed items, 24 HIGH/CRITICAL, zero errors. All 24 have specific complete risk_review records, including identified owner alerts rather than blanket acceptance. Final --require-reviewed: 25 routed items, zero errors.
- Reflow on all nine Alpha-changed proof items: unchanged (paragraph layout already correct).
- Precheck on those nine items: 9 checked, 0 failing.
- Required final single batched proof-layout: 9 items, 50 numbered steps, 0 defects.
- Closed defect-ledger append: 16 rows, each caught_at_stage 3a-adjudicate, repair_confidence 1. Four risk-only rows await engine-owned obligation routing.
- No judge, certificate, decision hash stamp, scope gate battery or publication action was run. The engine owns all of those.
- Rendercheck on the same nine changed items: zero defects; all math spans and YAML parse under the actual renderer.
- Owned frontier dependency records updated with exact continuation uses and separate uniqueness attribution.
- Final local integrity check: exactly the nine owed obligations; all 24 required risk reviews complete; changed proof-step claim text matches its proof contract. These checks do not seal decisions or substitute for the engine scope gate.
