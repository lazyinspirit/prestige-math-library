# Batch 23 authoring notes — fd-w03

Status: authoring in progress. Scope is only A/B pair fd-w03 /
fd-w03-examples.

## Plan and design control

- research/fluid-dynamics-all-47-2026-10-23-owner-authoring-direction.md is
  absent.
- The controlling design is research/plan-fluid-dynamics-refresh-track.md
  section “Distributional systems and entropy flux pairs” (lines 794–828). It
  explicitly labels the 2026-10-18 owner refresh as current and says it
  supersedes historical fluid-design text. The listed historical design at
  research/plan-fluid-dynamics-track.md section “Distributional systems and
  entropy flux pairs” (lines 716–747) repeats the same pair identity and
  original 7/4 reservation, but is not controlling.
- research/plan-spec.json agrees on A/B IDs, titles, order 405/406, category,
  mathematics library, companion relationship, and A-page requirements
  (cm-math-continuum,
  distributions-test-functions-and-differentiation). Its items arrays are
  empty as expected before Step-1 inventory transcription; this is not a
  substantive design conflict. The refresh inventory supplies the 7 A / 4 B
  items.
- The current batch manifest has the same page metadata and empty inventories.
  The batch dependency record assigns batch 23 level 0 with no in-run batch
  prerequisites. fd-w03 is no-drift in the current drift evidence and owner
  disposition.
- A local A-page lemma is being added before def-fd-conservation-system:
  lem-fd-locally-integrable-functions-define-distributions. The planned
  system definition uses the distributional derivative on locally integrable
  fields, but the planned direct dependency alone does not establish that
  those fields define continuous distributions. The new lemma proves that
  step from the regular-functional estimate and LF test-function universal
  property in ZF. This preserves a choice-free construction; it avoids
  importing thm-locally-integrable-functions-embed-in-distributions, whose
  full statement assumes Countable Choice for its separate injectivity
  conclusion.
- The inherited inventory names NR-E23 for the Burgers examples. The exact
  NR-E23 module in
  research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/expansion-proofs.md
  section E23 was read in full: it supplies direct shock/fan calculations,
  but its status in the current supplier map is completed research argument,
  not a production item or independent acceptance. The current published,
  read-only thm-cm-burgers-riemann-shock-and-rarefaction on the required
  cm-math-continuum page has the exact Burgers shock/fan interface and a
  complete proof, with its explicit AC_ω assumption. The B shock/fan items
  will use that canonical item ID and carry AC_ω; they also give the
  requested specialization calculations locally. NR-E23 is not treated as
  an item or proof stamp.

## Mathematical interfaces and dependencies

The inspected published def-distributional-derivative states
<∂^αu,φ> = (−1)^|α|<u,∂^αφ>, uses a complex-bilinear pairing without
conjugation, and is choice-free; its classical-derivative compatibility still
requires an integration-by-parts argument where used. Its actual direct
dependencies are def-distribution and
thm-test-function-operations-are-continuous. The latter is a published ZF
theorem; its full proof was inspected. The regular-distribution definition
and the LF test-function universal-property lemma were also read with their
proof/status and ZF conventions.

The supplied cm-math-continuum page is published and mathematical. Its
relevant local theorem thm-cm-burgers-riemann-shock-and-rarefaction is
published and assumes Countable Choice. Its complete Statement, Facts, and
Proof were read. The A-page uses real vector conservation systems and the
standard mathematical entropy sign; a physical Euler formula is retained
only as clearly qualified mathematical context, with its equation-of-state
and units caveat. No compressible-system existence or uniqueness claim is
made.

Planned internal dependency order and levels:

| Item | Direct suppliers | dependency_level |
|---|---|---:|
| lem-fd-locally-integrable-functions-define-distributions | published regular-distribution definition; published LF topology lemma | 0 |
| def-fd-conservation-system | local regular-distribution lemma; def-distributional-derivative; def-regular-distribution-from-a-locally-integrable-function | 1 |
| def-fd-piecewise-traces | def-fd-conservation-system | 2 |
| thm-fd-rankine-hugoniot | def-fd-piecewise-traces, def-fd-conservation-system | 3 |
| prop-fd-entropy-jump | thm-fd-rankine-hugoniot, def-fd-piecewise-traces, def-fd-conservation-system | 4 |
| def-fd-lax-pattern | def-fd-conservation-system | 2 |
| thm-fd-convex-scalar-riemann | prop-fd-entropy-jump, def-fd-lax-pattern, def-fd-conservation-system | 5 |
| prop-fd-viscous-entropy-passage | def-fd-conservation-system | 2 |
| ex-fd-burgers-shock, ex-fd-burgers-fan | thm-fd-convex-scalar-riemann, published thm-cm-burgers-riemann-shock-and-rarefaction, def-countable-choice | 6 |
| cex-fd-expansion-shock | thm-fd-convex-scalar-riemann, prop-fd-entropy-jump | 6 |
| cex-fd-shock-point-values | def-fd-piecewise-traces, def-fd-conservation-system | 3 |

All dependencies are mathematical-premise edges. No cross-batch item or page
edge is planned; the cross-batch dependency array will therefore be empty.

## Full-text source reading

- Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum
  Physics, 2nd ed.,
  https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf. Full 636-page
  PDF inspected at the relevant text. Read Ch. III §3.2, printed pp. 52–54
  (companion/entropy pairs and the derivative compatibility condition); Ch. IV
  §§4.3–4.5, printed pp. 73–78 (distributional weak solutions, nonuniqueness,
  entropy admissibility, and the local shock entropy-production condition);
  and the opening of §4.6, printed pp. 78–79 (the stated vanishing-viscosity
  criterion and its scope). It directly supports the vector-system
  conventions, the fact that entropy admissibility is an additional weak
  solution condition, and the shock-interface sign convention.
- Lawrence C. Evans, Entropy and Partial Differential Equations, graduate
  lecture notes, Ch. V §§2–3, printed pp. 118–125,
  https://math.berkeley.edu/~evans/entropy.and.PDE.pdf. Full 213-page PDF
  inspected. Read the integral weak formulation and two Burgers Riemann
  solutions (pp. 118–119), entropy-pair compatibility and the viscous
  calculation/limit discussion (pp. 120–121), and the complete
  piecewise-smooth interface calculation yielding Rankine–Hugoniot and the
  entropy chord condition (pp. 122–125). This is an independent full lecture
  treatment and directly supports the scalar shock/fan and viscous proof
  routes.
- Piotr Gwiazda, Martin Michálek, and Agnieszka Świerczewska-Gwiazda, “A Note
  on Weak Solutions of Conservation Laws and Energy/Entropy Conservation,”
  arXiv:1706.10154,
  https://arxiv.org/pdf/1706.10154. Full text inspected. Read §1, equations
  (2)–(4) and the companion-law/weak-solution discussion, plus §3.2’s
  proof passage. Its abstract and §1 explicitly distinguish companion
  identities for classical solutions from what arbitrary weak solutions
  satisfy; used as a caution about nonautomatic entropy conservation, not as
  a proof supplier for the claims authored here.
- Razvan Gelca, Functional Analysis, lecture notes, Ch. 7 §7.3, p. 105,
  https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf. Full 151-page PDF
  inspected. The exact locally integrable pairing estimate supports the
  choice-free continuity lemma added above.

The cited mathematical arguments were read at the stated locators. Retrieval
stamps and per-item harvested-result dispositions will be recorded in the
batch coverage file after the source list is authored. The exploratory
Bressan-PDF retrieval candidates were not adopted: the selected independent
Dafermos book and Evans full lecture text were retrieved and read successfully,
and complete local proofs are supplied.

## Item checkpoints

### lem-fd-locally-integrable-functions-define-distributions

Claim: for open $\Omega\subseteq\mathbb R^n$ and $f\in L^1_{\rm loc}(\Omega)$,
the regular functional $\langle T_f,\varphi\rangle=\int_\Omega f\varphi$ is a
continuous complex-linear functional on $\mathcal D(\Omega)$ with the LF
test-function topology, hence a distribution. The proof uses only the fixed
support estimate from
def-regular-distribution-from-a-locally-integrable-function and the ZF
restriction criterion from lem-test-function-lf-topology-universal-property;
it proves continuity, not injectivity modulo a.e. equality, so no Countable
Choice is imported.

Carrier: items/lem-fd-locally-integrable-functions-define-distributions.md.
Dependency level 0; direct suppliers are the regular-functional definition
and LF topology lemma. Literature locator: Gelca, Functional Analysis, Ch. 7
§7.3, p. 105,
https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf, where the locally integrable
functional has the same compact-support estimate and is identified as order
zero. This source is to be fetch-stamped in batch coverage.

Validation: not yet run. Unresolved mathematical inputs: none identified.
Next: author def-fd-conservation-system using this helper and the published
distributional-derivative convention.

### def-fd-conservation-system

Claim: define a locally integrable vector conservation system, its weak
test-function equation with the bilinear distribution-derivative convention,
an initial-boundary weak formulation, and compatible convex entropy-flux
pairs with the nonpositive-distribution sign convention. The definition
requires the state and flux compositions to be locally integrable and
requires entropy compositions to be locally integrable before their
distributions are used. It explicitly says the entropy inequality is an
additional condition for weak fields. The mathematical Euler example retains
the three-dimensional planar-reduction interpretation, SI units, separate
constitutive map, and no general existence/uniqueness claim.

Carrier: items/def-fd-conservation-system.md. Direct dependencies are the
local ZF regular-distribution lemma, published def-distributional-derivative,
published def-regular-distribution-from-a-locally-integrable-function, and
the total derivative chain rule used in the smooth entropy remark; all have
mathematical-premise roles. Dependency level is 1. Sources: Dafermos,
Ch. III §3.2, printed pp. 52–54, and Ch. IV §§4.3–4.5, pp. 73–78;
Evans, Ch. V §§2–3, pp. 118–125; Gwiazda–Michálek–Świerczewska-Gwiazda,
§1. No physical model postulate is introduced.

Validation: not yet run. Unresolved mathematical inputs: none identified.
Next: define explicit planar interface traces without asserting a trace
theorem for arbitrary rough fields.

### def-fd-piecewise-traces

Claim: define a planar interface $\Sigma=\{n\cdot x=st\}$ with $|n|=1$,
its open left/right sides, piecewise $C^1$ side fields having compatible
one-sided $C^1$ extensions, the traces $U_L,U_R$, and jump convention
$[G]=G_R-G_L$. The definition does not assert a rough-field trace theorem or
that the profile solves the conservation law.

Carrier: items/def-fd-piecewise-traces.md. Direct dependency:
def-fd-conservation-system, role mathematical-premise, dependency level 2.
Sources: Dafermos, Ch. III §3.1 and Ch. IV §4.3; Evans, Ch. V §3,
pp. 122–125. The traces are unambiguous because two continuous extensions
agree on the open side and hence on its interface limit.

Validation: not yet run. Unresolved mathematical inputs: none identified.
Next: prove the distributional jump formula in the chosen spacetime-normal
convention without dividing by the state jump.

### def-fd-lax-pattern

Claim: for a one-dimensional flux Jacobian with distinct real eigenvalues,
define strict hyperbolicity and the k-Lax inequalities for a vector
Rankine–Hugoniot jump, omitting only the absent outer-family inequalities at
k=1 and k=m. The definition asserts no existence or uniqueness.

Carrier: items/def-fd-lax-pattern.md. Direct dependency:
def-fd-conservation-system, mathematical-premise, dependency level 2.
Sources: Dafermos, Ch. III §3.1 and Ch. VIII §8.3 (printed pp. 205–215);
Evans, Ch. V §3. Validation not yet run. Dafermos distinguishes the
same-family E-condition from the full neighboring-family inequalities in its
stated moderate-shock context; the authored item defines the complete
incoming-characteristic pattern and does not claim RH plus strict
hyperbolicity implies it.
Unresolved prerequisites: none identified. Next: prove the full vector jump
residual identity for piecewise C1 traces.

### thm-fd-rankine-hugoniot

Claim: for a piecewise C1 vector field solving the conservation system on each
side of the plane $n\cdot x=st$, the full spacetime distributional residual is
the vector measure $(\sum_j n_j[F_j]-s[U])\,dt\,d\mathcal H^{d-1}_x$.
Distributional solvability is equivalent to pointwise vanishing of that
continuous coefficient. The proof uses a normal coordinate with spatial
Jacobian one and explicitly defines the interface delta using time times
spatial surface measure; no spacetime-normal factor or division by a vector
jump is hidden.

Carrier: items/thm-fd-rankine-hugoniot.md. Direct suppliers:
def-fd-piecewise-traces, def-fd-conservation-system,
def-distributional-derivative, thm-linear-change-of-variables-for-lebesgue-
measure, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, and
def-countable-choice; all have mathematical-premise roles. The imported
linear Lebesgue change-of-variables supplier explicitly assumes ACω, now
stated in the theorem. Dependency level remains 3 because only the first two
are in-run suppliers. Sources: Dafermos, Ch. III §3.1 and IV §4.3; Evans,
Ch. V §3, pp. 122–125. The proof uses the unit-determinant affine normal chart
and Fubini to justify the interface delta normalization.

Validation: not yet run. Unresolved mathematical inputs: none identified.
Next: derive the companion entropy residual with the same orientation and
distribution sign.

### prop-fd-entropy-jump

Claim: for a compatible convex C2 entropy pair and a piecewise C1 classical
solution on both sides of the same plane, the entropy residual is
$(\sum_j n_j[q_j]-s[\eta])\,dt\,d\mathcal H^{d-1}_x$; the distributional
entropy inequality is equivalent to that continuous coefficient being
nonpositive. The proof derives the smooth companion identity on each side,
then applies the already proved normal-coordinate jump computation. It does
not infer entropy admissibility from Rankine–Hugoniot.

Carrier: items/prop-fd-entropy-jump.md. Direct suppliers:
thm-fd-rankine-hugoniot, def-fd-piecewise-traces,
def-fd-conservation-system, thm-chain-rule-for-total-derivatives, and
def-countable-choice, all mathematical-premise; dependency level 4. Countable
Choice is explicit because the jump theorem's Lebesgue-coordinate proof uses
the imported linear change-of-variables theorem. Sources: Dafermos, Ch. III
§3.2 and Ch. IV §4.5, printed pp. 52–54 and 75–78; Evans, Ch. V §§2–3,
pp. 120–125; Gwiazda et al., §1. Validation remains to run. The next action
is to complete the scalar theorem, viscous limit, and four B-page examples,
then finalize pages, sources, contracts, dependency levels, and readiness.

## Final authoring checkpoints (supersede earlier next-action lines)

### thm-fd-convex-scalar-riemann

Claim: for $F\in C^2(\mathbb R)$ strictly convex on the closed interval between
two Riemann states, the explicit shock for $a>b$ and inverse-characteristic fan
for $a<b$ satisfy the initial weak identity and all compatible convex $C^2$
and Kružkov entropy inequalities; the shock obeys the scalar Lax inequalities.
The theorem states ACω because its Rankine–Hugoniot supplier uses Lebesgue
linear change of variables. Its fan initial-trace estimate was corrected after
checking the same-sign speed cases: the discrepancy is contained in
$[\min(0,F'(a)t),\max(0,F'(b)t)]$, whose length is at most
$t(|F'(a)|+|F'(b)|)$, not merely the fan width. The cutoff argument now derives
the initial test trace for the weak and entropy identities.

Carrier: items/thm-fd-convex-scalar-riemann.md. Direct deps include the entropy
jump proposition, Lax definition, conservation-system definition, RH theorem,
piecewise traces, MVT, FTC, chain rule, and def-countable-choice; all are
mathematical-premise. Dependency level 5. Source locators: Dafermos Ch. IV
§§4.3–4.5 and Ch. VIII §8.3; Evans Ch. V §§2–3. Local inverse regularity,
shock chord entropy calculation, fan trace, and Kružkov interface cases are
given in the carrier proof. No general Cauchy existence or uniqueness claim.
Validation pending. No unresolved prerequisite identified.

### prop-fd-viscous-entropy-passage

Claim: any assumed smooth scalar viscous family with a common range bound,
strong local space-time $L^1$ convergence and compatible strong local initial
trace has a limiting entropy inequality for a specified convex compatible
pair. It asserts neither existence nor compactness. The proof uses the exact
chain-rule diffusion identity, compact-support integrations by parts, and
convergence of entropy and flux compositions.

Carrier: items/prop-fd-viscous-entropy-passage.md. Direct mathematical-premise
deps: conservation-system definition, total derivative chain rule, FTC, and
Fubini for $L^1$ on sigma-finite products. Level 2. Sources: Dafermos Ch. IV
§4.6, printed pp. 78–79, and Evans Ch. V §2, pp. 120–121. Validation pending;
no unresolved prerequisite identified.

### ex-fd-burgers-shock

Claim: for $a>b$ in Burgers flux $F(z)=z^2/2$, the step moving at
$s=(a+b)/2$ has the stated initial weak solution, entropy and Kružkov
inequalities, and strict scalar Lax speed inequalities. The direct check gives
$F'(b)<s<F'(a)$ and the Kružkov residual $2(F(k)-C(k))=(k-a)(k-b)\le0$ on
$[b,a]$, with zero residual outside. The exact published canonical item
`thm-cm-burgers-riemann-shock-and-rarefaction` replaces the scaffold alias
NR-E23; its full proof and ACω assumption were inspected. The local scalar
Riemann theorem also applies. This resolves the alias at an exact current
interface; NR-E23 is not treated as a production item.

Carrier: items/ex-fd-burgers-shock.md. Direct mathematical-premise deps:
thm-fd-convex-scalar-riemann, thm-cm-burgers-riemann-shock-and-rarefaction,
def-fd-conservation-system, and def-countable-choice. The A-page definition
states the exact initial test class and entropy sign convention used in the
Example. Level 6. Sources: Dafermos Ch. IV §§4.3–4.5 and Evans Ch. V §§2–3.
Validation passed; no unresolved prerequisite.

### ex-fd-burgers-fan

Claim: for $a<b$ in Burgers flux, the centered profile with fan $u=x/t$ is
continuous for positive time, satisfies the weak and all stated entropy
identities with equality, and has local strong initial trace. The corrected
estimate uses the support interval from $\min(0,at)$ to $\max(0,bt)$, covering
the case where both speeds have one sign.

Carrier: items/ex-fd-burgers-fan.md. Direct mathematical-premise deps:
thm-fd-convex-scalar-riemann, thm-cm-burgers-riemann-shock-and-rarefaction,
def-fd-conservation-system, and def-countable-choice. The A-page definition
states the exact initial test class and entropy sign convention used in the
Example. Level 6. Sources: Dafermos Ch. IV §§4.3–4.5 and Evans Ch. V §§2–3.
Validation passed; no unresolved prerequisite.

### cex-fd-expansion-shock

Claim: for $a<b$, the opposite step with speed $(a+b)/2$ satisfies
Rankine–Hugoniot and the initial weak identity but violates the convex entropy
inequality for $\eta=z^2/2$, $q=z^3/3$, since $[q]-s[\eta]=(b-a)^3/12>0$.
The cutoff proof explicitly passes from the open-time distributional identity
to the nonzero initial trace. The local scalar Riemann theorem gives the
distinct entropy-admissible fan for the same initial data, without a general
uniqueness claim.

Carrier: items/cex-fd-expansion-shock.md. Direct mathematical-premise deps:
scalar Riemann theorem, entropy-jump proposition, RH theorem,
conservation-system definition, and def-countable-choice. Level 6. Sources:
Dafermos Ch. IV §§4.4–4.5 and Evans Ch. V §§2–3. Validation pending; no
unresolved prerequisite.

### cex-fd-shock-point-values

Claim: under ACω, the spacetime plane $n\cdot x=st$ is null, so a measurable
finite reassignment there leaves locally integrable fields, flux compositions,
their regular distributions and distributional derivatives, all defined
compatible entropy compositions, and side traces/jumps unchanged. The final
Statement explicitly specifies the state domain, $C^1$ fluxes, local
integrability of state/flux/entropy compositions, and compatible entropy-pair
hypotheses. ACω is explicit for the affine-hyperplane null theorem.

Carrier: items/cex-fd-shock-point-values.md. Direct mathematical-premise deps:
piecewise traces, conservation-system definition, affine-hyperplane nullity,
and def-countable-choice. Level 3. Sources: Dafermos Ch. III §3.1 and IV
§4.3; Evans Ch. V §3. Validation pending; no unresolved prerequisite.

## Page and batch records

`library/fluid-dynamics-mathematics/fd-w03.md` and
`fd-w03-examples.md` have been created as YAML-frontmatter-only pages with
empty Markdown bodies. A inventories the local helper followed by the seven
refreshed A items; B inventories the four assigned examples/counterexamples.
`research/fluid-dynamics-all-47-2026-10-23-batch-23.pages.json` matches those
inventories and retains the assigned order, category, library, companions, and
requirements. The cross-batch dependency file is `[]`: all item suppliers are
same-batch or external published math items, and B requires the assigned A
page. No cross-batch edge was introduced.

All item dependencies currently carry mathematical-premise roles; the A/B
libraries and physical scope are preserved. Item levels are helper 0, system
1, piecewise traces 2, Lax 2, RH 3, entropy jump 4, viscous passage 2, scalar
Riemann 5, Burgers shock/fan 6, expansion shock 6, and point values 3. The
batch remains level 0 with no in-run batch dependencies. At this initial
authoring checkpoint, final dependency recompute, source-fetch stamps,
contracts, proof-layout checks, and readiness recording remained outstanding;
the validation section below supersedes that interim status.

## Final validation, readiness, and owner-side run findings

- Full-text source check: `node tools/physics-support/source-fetch-check.mjs
  --coverage research/fluid-dynamics-all-47-2026-10-23-batch-23.coverage.json
  --stamp` passed for 4/4 sources, with four newly recorded full-text stamps.
  A subsequent non-stamping check also passed 4/4. No selected source required
  a drop or owner escalation. The Bressan URL was an exploratory, unselected
  candidate; it supplies no item claim and no coverage depends on it.
- Current authoring policy: manifest-only authored content policy passed for
  all 12 items; ordinary scoped content policy passed 12/12 with no warnings.
  Focused `depcheck` passed all 12 selected items and their prerequisite
  cycle checks, which examined 952 items and 180 pages of context. The batch
  manifest/page shape check found 12 item records, two YAML-only pages, and no
  linked statement section.
- Final proofs: phase-format `precheck.mts` passed 9/9 proof-bearing items.
  Its proposed dependency-layer phase numbering was adopted while retaining
  the complete proof blocks and displayed calculations. The strict proof
  contract check passed 9/9 with no warnings. Explicit-item `proof-layout.mjs`
  passed all 12 changed items, checking 32 numbered steps with zero defects.
- Scoped dependency levels: recomputing only batch 23 found 12 items, maximum
  level 6, and no errors. The recorded and recomputed batch-23 graph row both
  remain `{ "batch": "23", "dependency_level": 0, "requires": [] }`. All
  direct in-run levels in the table above match the actual dependencies.
- Native readiness: `step1Decision(loadStep1Record(...), id)` reports current
  `ready` records for all 12 items. Each record is non-owner, records its
  inspected direct dependencies, and binds to the present item/page/contract
  inputs. Definitions are nonproof-bearing and therefore have no proof
  contract; all nine proof-bearing items have strict contracts.
- Cross-batch inputs: the required JSON array remains `[]`; there are no
  cross-batch item/page edges owned by this pair.
- Run-wide checks outside this batch remain owner-side findings. The full-run
  item dependency-level command reports many other pages with empty
  inventories (including `fd-x01`, `fd-mf03`, and `fd-pda01`) and unrelated
  stale item-level numbers; this scoped batch has no such error. Global
  proof-contract coverage stops at the empty `fd-mf03` frontier inventory;
  this batch's contract scope itself passes 9/9. The full
  `batch-dependency-levels.mjs check` reports the shared run-level snapshot as
  stale after authored manifests changed. The computed batch-23 row is still
  level 0 with no requirements; the shared snapshot was left for its owner to
  regenerate.

The assigned pair, all 12 carriers, both pages, source coverage and stamps,
proof contracts, cross-batch file, and native Step-1 readiness records are
complete. No mathematical prerequisite remains unresolved in batch 23.
