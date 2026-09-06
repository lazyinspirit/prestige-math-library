# frontier-31a · Beta · batch-16 notes — `quasilinear-characteristics-and-cauchy-kovalevskaya`

## Scope, plan reading, and source record

This batch owns only A `quasilinear-characteristics-and-cauchy-kovalevskaya`
at order `458.001` and its B companion at `458.002`. The manifest and current
specification list the three required predecessors:
`partial-differential-equations-and-characteristics-examples`,
`euclidean-ordinary-differential-equations-with-smooth-dependence`, and
`inverse-and-implicit-function-theorems`; B requires only A. Step-3 review
added the existing, earlier inverse/implicit-functions prerequisite because the
PDE-2 design at `research/plan-pde-track.md:567-627` and the local graph both
use its published theorems. This is a backward prerequisite correction only:
no page, forward edge, or reading order changed.

The 23-item A page is below the mandatory 60-item split threshold.  The 10
examples/counterexamples on B are leaves; no A item depends on B.  The six A
and two B additions beyond the base design inventory are the design addendum
at `research/plan-pde-track.md:2975-3007`: ODE solvability, initial rank,
pre-caustic uniqueness, the Burgers Riccati calculation, Charpit momentum,
the envelope lemma, plus the explicit quadratic-caustic and smooth-nonanalytic
examples.  Each closes a stated proof obligation rather than padding a page.

Three independent full treatments were read, with every heading/result in the
read ranges harvested in
`research/frontier-31a-batch-16.coverage.json`.

| key | source, URL, exact read locator, and verification |
| --- | --- |
| S1 | John Andersson, *First order PDE: The Methods of Characteristics*, full 23-page lecture notes, <https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf>. Read PDF pages 1–23, Sections 1–5 and Theorems 1–4/Lemmas 1–3. The live PDF was opened in full and the range was read on 2026-09-05. |
| S2 | Giacomo Ageno, *Part III: Analysis of Partial Differential Equations*, full 88-page lecture-note set with table of contents, <https://giacomoageno.github.io/LectureNotesAPDE.pdf>. Read contents pages 1–2; §§2.3.1–2.4.2, pages 20–29 (Definitions 2.13, 2.16, 2.19, Remarks 2.20–2.21, Theorem 2.22); and §§5.3.1–5.3.3, pages 81–85. The live PDF was opened in full and the ranges were read on 2026-09-05. The design's original Teschl PDF, <https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf>, returned 404 while its author page records withdrawal during publication, so S2 is an independently reread replacement, not an archive copy. |
| S3 | *Part I: Explicit methods — Lecture notes for MA342H*, full 16-page notes, <https://www.maths.tcd.ie/~pete/pde2/part_1.pdf>. Read PDF pages 7–16: the quasilinear, solvability, existence, uniqueness and fully nonlinear characteristic sections and Examples 1–2. The live PDF was opened in full and the range was read on 2026-09-05. |

The local Node fetcher returned DNS `EAI_AGAIN` for all three hosts, but the
full PDFs were independently opened through the web reader before this record;
the coverage file carries the corresponding `fetch_verified` receipts.  Its
manual gate accepts all three receipts without pretending the local DNS error
is a dead document.

## Fixed conventions and authoring limits

- A quasilinear scalar problem is $a(x,z)\cdot Du=b(x,z)$ with a `C^1`
  parametrised hypersurface $\gamma:V\subset\mathbb R^{n-1}\to\mathbb R^n$
  and data $\phi:V\to\mathbb R$.  The basic characteristic system is exactly
  $\dot X=a(X,Z)$, $\dot Z=b(X,Z)$, with $(X,Z)(0,y)=(\gamma(y),\phi(y))$;
  no unproved gradient ODE is smuggled into the definition.
- The local graph is only $u=Z\circ\Psi^{-1}$ after
  $\Psi(s,y)=X(s,y)$ has been proved locally invertible.  At $s=0$, its
  columns are $[a(\gamma(y),\phi(y)),D\gamma(y)]$.  The noncharacteristic
  condition is that this matrix has rank $n$.  Tangential compatibility is
  stated separately as $p_0D\gamma=D\phi$ together with $p_0\cdot a=b$.
- “Crossing” and “caustic” mean loss of rank or local one-to-one graphing by
  the projected characteristic map, not explosion of the lifted $(X,Z)$ ODE.
  For Burgers the first time is an infimum in $[0,\infty]$, set to $\infty$
  when the set is empty; $u_0'\ge0$ is the named sufficient case.
- For $F(x,z,p)=0$, use the Lagrange–Charpit system
  $\dot X=F_p$, $\dot Z=p\cdot F_p$, $\dot p=-F_x-pF_z$.  The alternate
  contact normalization $\dot Z=p\cdot F_p-F$ is recorded only as equivalent
  while $F=0$, never silently substituted.  The local theorem proves both
  preservation of $F=0$ and of the contact relation before reconstructing a
  graph.
- A complete integral is a definition, not a claim that its envelope is
  differentiable.  The envelope lemma requires invertibility of the parameter
  Hessian at the stationary point before using the implicit theorem.
- Cauchy–Kovalevskaya is an exact source-backed remark only: an analytic PDE
  in noncharacteristic normal form, analytic normal data through normal order
  $m-1$, local analytic existence and uniqueness within the analytic class.
  It is authored `proved_here: false`, has `deps: []`, is never a dependency
  target, and its majorant-series proof is absent.  The normal-form B example
  verifies hypotheses only; it cannot invoke the theorem.

## Item checkpoint — A

Each row gives the exact authoring claim, source support, explicit dependency
rationale, and proposed proof strategy.  `S1`–`S3` point to the full URLs and
locators above; the harvest gives each source heading its separate disposition.

| item | claim, source support, and proposed proof strategy | deps and rationale |
| --- | --- | --- |
| `def-semilinear-and-quasilinear-first-order-cauchy-problems` | Define $a(x)\cdot Du=b(x,u)$ and $a(x,u)\cdot Du=b(x,u)$ with parametrised hypersurface data and a classical local solution. S3 `Characteristics: Quasilinear case`. State dimensions and regularity. | `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde`, `def-noncharacteristic-first-order-cauchy-surface`: imports the existing classification and surface vocabulary rather than redefines it. |
| `def-augmented-characteristic-system-for-a-quasilinear-pde` | Define $(X,Z)$ with $\dot X=a(X,Z)$, $\dot Z=b(X,Z)$ and lifted initial data. S1 §§2–3 and S3 quasilinear section. | The first definition fixes the PDE and data from which this ODE is formed. |
| `lem-local-solvability-of-the-augmented-characteristic-ode` | A $C^1$ characteristic vector field and initial strip give a common-time local flow with the stated parameter regularity. S1 Theorems 1–2. Apply the published ODE theorem to $(X,Z)$. | The characteristic definition supplies the vector field; `thm-smooth-dependence-of-ode-solutions-on-parameters` supplies existence, uniqueness, and $C^1$ parameter dependence. |
| `lem-quasilinear-solution-lifts-to-characteristics` | If a $C^1$ graph solves the quasilinear PDE, its restriction to any projected characteristic satisfies the $(X,Z)$ system. S1 §3. Apply the chain rule to $u(X)$. | The system gives the curve and `thm-chain-rule` makes the restriction calculation valid. |
| `lem-characteristic-strip-compatibility` | Differentiating $u(\gamma(y))=\phi(y)$ gives $p_0D\gamma=D\phi$; together with the PDE it identifies the tangential/normal initial covector conditions. S1 Lemma 3. | The Cauchy-data definition and `thm-chain-rule`; this makes data consistency explicit but does not infer rank. |
| `lem-characteristic-strip-jacobian-at-the-initial-surface` | Compute $D_{(s,y)}X(0,y)=[a(\gamma(y),\phi(y)),D\gamma(y)]$ and identify the nonzero determinant/rank test. S1 Theorem 4 and S3 `Solvability condition`. | The flow is differentiable by the preceding ODE lemma; evaluate its ODE at $s=0$. |
| `thm-local-quasilinear-cauchy-problem-by-characteristics` | Under the rank condition, solve the characteristic ODE and locally invert $\Psi=(s,y)\mapsto X$ to obtain the unique inverse-projected $C^1$ candidate attaining $\phi$. S1 Theorem 4. The next lemma separately proves it solves the PDE, exactly as the design requires. | Uses the definitions, ODE flow, compatibility and initial-rank lemmas, and `thm-euclidean-inverse-function-theorem`; the inverse step is the theorem's load-bearing conclusion. |
| `lem-characteristic-solution-satisfies-the-quasilinear-pde` | The inverse-projected graph has $a(x,u)\cdot Du=b(x,u)$. S1's inverse-coordinate calculation and S3 `Proof of existence`. Differentiate $u(X)=Z$ and solve through $D\Psi^{-1}$. | The characteristic graph is supplied by the preceding theorem; `thm-chain-rule` justifies both parameter derivatives. |
| `def-characteristic-crossing-and-caustic-for-first-order-pde` | Define loss of rank/local injectivity of the projection and distinguish it from maximal ODE lifespan. S1 §3 shocks/rarefactions. | Uses the characteristic map and its local flow; makes the later first-time convention meaningful. |
| `lem-burgers-slope-obeys-a-riccati-law-along-characteristics` | For a $C^2$ Burgers solution, $q=u_x$ obeys $\dot q=-q^2$, so $q=q_0/(1+tq_0)$ while defined. S2 §5.3.3. Differentiate before restricting to a characteristic. | The preceding reconstruction lemma provides the solution-to-PDE interface; `thm-chain-rule` supports restriction. The $C^2$ hypothesis is explicit, not inferred from a merely $C^1$ construction. |
| `thm-inviscid-burgers-characteristic-formula-and-first-crossing-time` | Before crossing, $u(t,X(t,\xi))=u_0(\xi)$, $X=\xi+tu_0(\xi)$, and the first zero of $1+tu_0'(\xi)$ has the stated infimum convention. S2 §5.3.3. Integrate the ODE and use the projection Jacobian. | The caustic definition supplies the endpoint meaning; the Riccati lemma supplies the slope/Jacobian breakdown calculation. |
| `cor-burgers-classical-solution-persists-for-monotone-data` | If $u_0'\ge0$, then $1+tu_0'\ge1$ for $t\ge0$, so no forward projection crossing occurs. S1 rarefaction discussion and S2 §5.3.3. | Direct corollary of the Burgers theorem; it claims no unrelated global ODE lifespan. |
| `thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing` | On a connected region where the common projection remains a diffeomorphism, two classical solutions with the same data agree. S3 `Proof of uniqueness`; compare both restrictions to every characteristic. | The lift lemma makes both restrictions solve the same ODE; the reconstruction lemma supplies the candidate; caustic terminology states the exact lifespan qualifier. |
| `def-fully-nonlinear-first-order-pde-and-complete-integral` | Define $F(x,u,Du)=0$, a local complete integral, and a stationary envelope without asserting global representation or envelope regularity. S3 `Fully nonlinear case`. | Existing PDE classification supplies “fully nonlinear”; this row fixes parameter-count/domain conventions. |
| `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` | If $S_\alpha=0$ and $S_{\alpha\alpha}$ is invertible, the local stationary envelope is $C^1$, has $Du=S_x$, and solves the equation. S3 fully nonlinear method plus a direct implicit-function calculation. | Complete-integral definition; `thm-euclidean-implicit-function-theorem` solves for $\alpha(x)$ and `thm-chain-rule` eliminates the parameter term. |
| `def-lagrange-charpit-characteristic-system` | Define $\dot X=F_p$, $\dot Z=p\cdot F_p$, $\dot p=-F_x-pF_z$ on the stated $C^2$ domain and record the constrained alternative normalization. S3 fully nonlinear pages 1–2. | Depends on the fully nonlinear definition to fix $(x,z,p)$ and its regularity. |
| `lem-charpit-flow-preserves-the-pde-constraint` | Along the system, $dF(X,Z,P)/ds=0$. S3 gives the components; substitute them and cancel by the chain rule. | Charpit definition and `thm-chain-rule`. This proves the first invariant instead of assuming the flow stays in $F=0$. |
| `lem-charpit-contact-compatibility-is-preserved` | If $Z_y=P\cdot X_y$ initially along a strip in $F=0$, it remains true. Differentiate the flow in $y$ and use the homogeneous defect equation. | Charpit system and its constraint-preservation lemma permit the cancellation; `thm-chain-rule` differentiates the parameter-dependent flow. |
| `lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi` | Differentiating a $C^2$ Hamilton–Jacobi solution shows $p=Du$ obeys $\dot p=-F_x-pF_z$ along $\dot X=F_p$. S3 fully nonlinear pages and Example 2. | Charpit notation and `thm-chain-rule`; this explains the momentum equation separately from the invariant proof. |
| `thm-local-fully-nonlinear-cauchy-problem-by-charpit` | A compatible strip in $F=0$ with $\operatorname{rank}[F_p,D\gamma]=n$ has a local classical graph, unique while projection is locally invertible. S3 characteristic system; proof checks rank, inverts projection, then uses both invariants. | The definition, Charpit system, two preservation lemmas, `thm-smooth-dependence-of-ode-solutions-on-parameters`, and `thm-euclidean-inverse-function-theorem` are all required. |
| `rem-characteristics-do-not-select-a-post-crossing-weak-solution` | Explain that crossing ends the single-valued classical graph but does not select an entropy or viscosity continuation. S2 §5.3.3 shock discussion. | The caustic definition alone supplies the precise boundary; no weak-solution theorem is claimed. |
| `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` | Faithfully record analytic coefficients/hypersurface/data, normal data through order $m-1$, solved noncharacteristic normal form, and local analytic uniqueness. S2 Definitions 2.13, 2.16, 2.19 and Theorem 2.22. | `deps: []`: it is a recorded external theorem, never a local dependency target. |
| `rem-cauchy-kovalevskaya-proof-boundary` | Record the absent majorant-series proof and the nonextension of the statement to arbitrary smooth data. S2 §2.3.3 and §2.4.1. | The recorded theorem is the subject whose scope is delimited. |

## Item checkpoint — B

| item | exact planned verification and source support | deps and rationale |
| --- | --- | --- |
| `ex-semilinear-characteristics-with-logistic-growth` | Solve $u_t+u_x=u(1-u)$ with datum $g$ along $x-t=\text{constant}$, including the denominator/domain condition. S1 characteristic reduction; direct logistic ODE calculation. | Semilinear data/system and reconstructed-PDE graph supply the framework. |
| `ex-inviscid-burgers-rarefying-data` | For $u_0(x)=x$, compute $X=(1+t)\xi$ and the forward global rarefying formula. S1 rarefaction and S2 §5.3.3. | Burgers formula theorem; explicitly invert the map. |
| `ex-inviscid-burgers-gradient-catastrophe` | For $u_0(\xi)=-\tanh\xi$, compute $X=\xi-t\tanh\xi$, first crossing $t=1$ at $\xi=0$, and slope blow-up. S2 §5.3.3. | Riccati lemma and Burgers formula make the calculation a verification, not a new theorem. |
| `cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up` | The same smooth Burgers characteristic ODE persists while its projection Jacobian vanishes at $t=1$, refuting “ODE continuation prevents PDE breakdown.” S1 §3 and S2 §5.3.3. | Caustic definition, local flow lemma, and Burgers theorem distinguish the two mechanisms. |
| `ex-clairaut-complete-integral-and-envelope` | For $u=xu_x+(u_x)^2$, verify $S(x;a)=ax+a^2$ and the nondegenerate stationary envelope $u=-x^2/4$. S3 fully nonlinear method; direct calculation. | Complete-integral definition and envelope lemma; check $S_{aa}=2$ before differentiating. |
| `ex-eikonal-cones-are-not-classical-at-the-vertex` | $u(x)=|x|$ solves $|Du|=1$ away from $0$ but is not classical at its vertex. Direct one-sided derivative check, motivated by S3 fully nonlinear form. | Fully nonlinear PDE definition only. |
| `cex-characteristic-initial-data-for-a-fully-nonlinear-equation` | For $F=p^2=0$ with $u=0$ on $y=0$, $F_p=0$ makes the rank condition fail and $u=f(y)$, $f(0)=0$, gives nonuniqueness. S1 characteristic-data warning; direct verification. | Fully nonlinear and Charpit definitions plus the rank theorem identify exactly which hypothesis fails. |
| `ex-cauchy-kovalevskaya-normal-form` | Put $u_{tt}=u_{xx}$ with analytic data $u(0,x)=g_0(x)$ and $u_t(0,x)=g_1(x)$ into the second-order analytic normal form; verify that $t=0$ is noncharacteristic and name both normal data, without applying the recorded theorem. S2 §2.3. | `deps: []` prevents the unproved CK result from becoming load-bearing. |
| `ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time` | For $u_t+(u_x)^2/2=0$ and $u_0(\xi)=-\xi^2/2$, compute $X=(1-t)\xi$ and caustic time $1$. S3 Example 2; direct Jacobian calculation. | Caustic definition and Charpit momentum lemma. |
| `ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution` | Translate a flat $C^\infty$ nonanalytic datum: $u(t,x)=g(x-t)$ is smooth but nonanalytic at the transported flat point. Direct substitution, contrasting S2's analytic theorem. | Semilinear Cauchy definition and reconstruction lemma; prove flatness/nonanalyticity rather than cite CK. |

## Validation checkpoint and next action

- PASS — JSON parse for the manifest and coverage harvest.
- PASS — `node tools/coverage-checklist.mjs research/frontier-31a-batch-16.coverage.json --require-destination`: one A page, 45 harvested results, no errors or warnings.
- PASS — `node tools/manifest-deps.mjs research/frontier-31a-batch-16.pages.json`: 33 items, every object has an explicit `deps` array.
- PASS — `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-16.pages.json`: 33 scoped items, no errors or warnings.
- PASS — `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-16.coverage.json`: 3/3 sources carry full-text verification receipts.  The initial local `--stamp` attempt failed only with `EAI_AGAIN`; do not replace the three web-opened live PDFs on that basis.
- PASS — a read-only scan of the 21 contemporaneously populated
  `frontier-31a` manifests found 765 declared item ids and no duplicate of any
  batch-16 id.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: the declared
  page order, presently asserted item graph, B-page leaf rule, and item ids are
  consistent.  Its existing cross-run redundant-prerequisite advisories are
  unrelated to this batch.
- PASS — `git diff --check -- research/frontier-31a-batch-16.pages.json research/frontier-31a-batch-16.coverage.json research/frontier-31a-batch-16.notes.md` produced no whitespace diagnostics.

No batch-16 scaffold obligation remains.  A later whole-run stage may still
report an independently owned failure in another manifest; no plan structure,
workflow state, published page, or non-batch artifact has been changed here.

## Step-5 authoring

Authored all 33 planned draft items and both planned draft pages:
`library/pde/quasilinear-characteristics-and-cauchy-kovalevskaya.md` and
`library/pde/quasilinear-characteristics-and-cauchy-kovalevskaya-examples.md`.
The A-page IDs are
`def-semilinear-and-quasilinear-first-order-cauchy-problems`,
`def-augmented-characteristic-system-for-a-quasilinear-pde`,
`lem-local-solvability-of-the-augmented-characteristic-ode`,
`lem-quasilinear-solution-lifts-to-characteristics`,
`lem-characteristic-strip-compatibility`,
`lem-characteristic-strip-jacobian-at-the-initial-surface`,
`thm-local-quasilinear-cauchy-problem-by-characteristics`,
`lem-characteristic-solution-satisfies-the-quasilinear-pde`,
`def-characteristic-crossing-and-caustic-for-first-order-pde`,
`lem-burgers-slope-obeys-a-riccati-law-along-characteristics`,
`thm-inviscid-burgers-characteristic-formula-and-first-crossing-time`,
`cor-burgers-classical-solution-persists-for-monotone-data`,
`thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing`,
`def-fully-nonlinear-first-order-pde-and-complete-integral`,
`lem-envelope-stationarity-implies-the-hamilton-jacobi-equation`,
`def-lagrange-charpit-characteristic-system`,
`lem-charpit-flow-preserves-the-pde-constraint`,
`lem-charpit-contact-compatibility-is-preserved`,
`lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi`,
`thm-local-fully-nonlinear-cauchy-problem-by-charpit`,
`rem-characteristics-do-not-select-a-post-crossing-weak-solution`,
`rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`,
and `rem-cauchy-kovalevskaya-proof-boundary`; B contains the ten manifest IDs.

All statements are literature-derived from the three source records and exact
locators in the coverage harvest.  Local proofs and verifications are
AI-generated direct calculations.  The sole exception remains the exact,
dependency-free recorded Cauchy–Kovalevskaya remark (`proved_here: false`),
with its Ageno URL, exact statement, absent majorant-series proof, and
necessity recorded in `external_dependency`.  No claim was dropped or widened:
the quasilinear and Charpit constructions retain local rank/invertibility;
Burgers uses the $[0,\infty]$ infimum convention; the envelope requires an
invertible parameter Hessian; and the wave normal-form example checks
hypotheses without applying Cauchy–Kovalevskaya.

`research/frontier-31a-batch-16.proof-contracts.json` records all 25
proof-bearing items, every numbered step, and every standard boundary-axis
disposition; there are no fact-row citations because the proofs are direct
from the explicitly stated hypotheses and their declared dependencies.

Checks run after the canonical phase-number repairs:

- PASS — explicit-path `node tools/tsx-run.mjs tools/precheck.mts` for all 33
  manifest item files: 25 phase-format items checked, 0 failing.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: order and
  declared graph consistent; only existing unrelated redundant-prerequisite
  advisories and incomplete unrelated planned page lists remain.
- PASS — `node tools/content-policy.mjs research/frontier-31a-batch-16.pages.json`:
  33 scoped items, 0 errors, 0 warnings.
- PASS — strict proof-contract check: 25/25 items, 0 errors, 0 warnings.
- PASS — focused render check for the 33 items and both pages: 35 files, 0
  YAML, math, or link-format errors.

Blockers: none.

## Step-3 fix pass

The Step-3 review assigns no numeric finding ids for Batch 16.  The anchors
below therefore preserve its own stable `Batch 16` wording rather than
inventing or renumbering findings.

| review finding anchor | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| `Batch 16 ¶1 — inverse-and-implicit-function-theorems is a necessary backward prerequisite correction` | **already applied; retained** | Andersson, Section 5 / Theorems 3–4, PDF pp. 19–21, first states the inverse theorem and then locally inverts the projected characteristic map before defining the graph; the review and `plan-spec.json` both require the earlier page. | `frontier-31a-batch-16.pages.json` A-page `requires` retains `inverse-and-implicit-function-theorems`; no order, page, or forward edge changed in this pass. |
| `Batch 16 ¶3 — replace the false heat-equation CK example` | **already applied; retained** | Ageno, §2.4.1, PDF p. 27, explicitly identifies $\{t=0\}$ as characteristic for $\partial_tu=\partial_x^2u$.  Ageno, Definition 2.16 and Theorem 2.22, PDF pp. 20 and 23, give the analytic Cauchy-data and local analytic-uniqueness conditions used by the replacement. | `ex-cauchy-kovalevskaya-normal-form` remains the B-page wave-equation normal-form check with `deps: []`; `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` remains `deps: []` and recorded-only. |
| `Batch 16 ¶4 — retain regularity, rank, $[0,\infty]$ caustic convention, and parameter-Hessian condition` | **confirmed; retained** | Trinity MA342H, `Characteristics: Quasilinear case`, `Solvability condition`, and `Proof of existence`, PDF pp. 8–10, supplies the smooth-coefficient/rank/inversion route.  Andersson, Sections 4–5 and Theorem 4, PDF pp. 10–23, supplies the ODE-dependence, compatibility, and inverse-projection reconstruction. | The existing records retain `lem-local-solvability-of-the-augmented-characteristic-ode`, `lem-characteristic-strip-jacobian-at-the-initial-surface`, `thm-local-quasilinear-cauchy-problem-by-characteristics`, `thm-inviscid-burgers-characteristic-formula-and-first-crossing-time`, and `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation`; no new or duplicate id was minted. |
| `Batch 16 source stack — Andersson, Ageno, and Trinity exact recorded ranges` | **fetch-verified; no source repair needed** | All three live HTTP(S) PDFs were re-opened and their recorded sections read: Andersson §§1–5 / Theorems 1–4 / Lemmas 1–3, pp. 1–23; Ageno contents pp. 1–2, §§2.3.1–2.4.2 pp. 20–29 and §§5.3.1–5.3.3 pp. 81–85; Trinity pp. 7–16.  The existing A-page harvest names every source heading/result and its item or decline disposition. | `frontier-31a-batch-16.coverage.json` is unchanged: its three live URLs, exact locators, replacement provenance for withdrawn Teschl, and harvested dispositions remain faithful to the reread texts. |

Validation after this review pass: PASS — `manifest-deps` (33 items, every
`deps` array explicit); PASS — coverage checklist with `--require-destination`
(45 harvested results); PASS — source-fetch receipt gate (3/3); PASS —
whole-run manifest-only content policy (all current batch manifests); PASS —
`validate-plan.mjs research/plan-spec.json`.  Next action: ordinary Step-5
authoring from this unchanged, dependency-closed scaffold.
