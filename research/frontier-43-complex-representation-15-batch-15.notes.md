# Frontier 43 — batch 15 Step 1 scaffold notes

**Owner:** beta (batch 15). **Pair:** `bergman-and-szego-kernels` (A, order 1626) /
`bergman-and-szego-kernels-examples` (B), category `complex-analysis`, design label SC-7.
This file records scaffold construction, evidence and checks; it is not Step 3
mathematical approval and nothing here publishes content.

## Scope and binding inputs

Read: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch tasks
`research/frontier-43-complex-representation-15-beta-15.task.md` and
`...-beta-batch.task.md`, the binding
`research/frontier-43-complex-representation-15-owner-authoring-direction.md`, the design
`research/plan-complex-analysis-track.md` §SC-7 (line 4313 ff.), the controlling
`research/plan-spec.json` (orders 1626/1627), the run scope ledger, the run drift review
and drift-resolution files, and the existing populated sibling batch manifests.

The owner direction has no batch-15-specific clause; its cross-batch constraints are
respected: no `proved_here: false`, no `not-supplied` fallbacks, no `external_refs` and no
external-dependency substitutes appear in this manifest. No unresolved branch arose, so
nothing had to be held in this batch. Content remains draft.

## Design / plan reconciliation (recorded conflicts)

1. **`requires`.** The design writes the prerequisites as "SC-5, SC-6, CA-HP-1/2, Hilbert
   Riesz representation and orthogonal projection". The controlling plan
   (`research/plan-spec.json`, order 1626) names seven page IDs —
   `complex-lp-spaces-and-test-function-conventions`,
   `hilbert-space-geometry-and-riesz-representation`,
   `orthonormal-bases-parseval-and-fourier-series`,
   `the-dbar-complex-and-integral-solutions`, `hormander-estimates-and-the-levi-problem`,
   `harmonic-hardy-classes-and-fatou-boundary-limits`,
   `analytic-hardy-spaces-and-canonical-factorisation` — and the manifest reproduces that
   list exactly. Plan controls; no edge was changed.
2. **Item-ID renames against the design table.** `thm-bergman-kernel-well-defined-and-
   basis-expansion` → `thm-bergman-basis-expansion-and-closedness`;
   `thm-bergman-reproducing-and-extremal-properties` →
   `thm-bergman-reproducing-projection-and-extremal`;
   `thm-bergman-metric-positive-and-biholomorphically-invariant` →
   `thm-bergman-metric-positivity-and-biholomorphic-invariance`. Claims, hypotheses and
   scope are preserved; only IDs changed.
3. **Szegő definition.** The design's "on a sufficiently smooth bounded domain define the
   Hardy boundary space, Szegő projection and reproducing kernel relative to the declared
   surface measure" is realised as a definition for a pair $(\Omega,\sigma)$ with an
   explicit **Szegő-regular** hypothesis (injective trace map and bounded point
   evaluation), under which the Riesz representers exist; closed forms are then computed
   for the disc and the ball. This keeps the design's warning that fine boundary
   regularity and the full $\bar\partial$-Neumann/Szegő calculus are out of scope, and it
   does not weaken any promised claim.
4. **Bounded-domain discipline.** The design's "assert nondegeneracy and a Bergman metric
   only for the bounded domain class" and the companion instruction contrasting a bounded
   domain with an unbounded domain having trivial $A^2$ are honoured: the metric
   definition and positivity theorem are stated for bounded domains, and
   `ex-square-integrable-entire-functions-vanish` carries the unbounded contrast.

## Sources (fetched full text, inspected)

Two independent treatments back the A page; both were fetched in full by
`source-fetch-check --stamp` and re-inspected in this attempt.

- **Błocki, *The Bergman Kernel and Metric*** (PhD course notes, Jagiellonian University,
  2010) — <https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf>, 32 pages, stamp
  `sha256_16 9b4a305d42572ff8`, 319 767 bytes. Verified by reading §1, printed pp. 1–7:
  the mean-value estimate and (1.1) evaluation bound (p. 1), the kernel
  $K_\Omega(\cdot,w)$ with $f(w)=\langle f,K_\Omega(\cdot,w)\rangle$ (pp. 1–2), the
  transformation law (1.2) with both Jacobian factors, the disc and ball kernels and the
  orthonormal expansion (pp. 2–3), the product formula and diagonal supremum formula
  (p. 4), the Bergman metric as the Levi form of $\log K_\Omega(z,z)$, Theorem 1.1 with
  its proof and the biholomorphic invariance $B^2_\Omega(z;X)=B^2_D(F(z);F'(z)X)$
  (pp. 4–5).
- **Lebl, *Tasty Bits of Several Complex Variables*** (book, revised edition) —
  <https://www.jirka.org/scv/scv.pdf>, 248 pages, stamp `sha256_16 729cdb8a00685da5`,
  1 652 309 bytes. Verified by reading: Exercise 1.2.10 (printed p. 26, polydisc mean
  value); §1.4 "Inequivalence of ball and polydisc", Theorem 1.4.4 with the
  Poincaré/Cartan attribution (printed pp. 32–33); Lemma 5.2.1 (p. 161); the Bergman
  kernel definition, the reproducing property (5.1) and Proposition 5.2.2 (p. 162);
  Example 5.2.3 (p. 163, disc Cauchy kernel); Exercises 5.2.4, 5.2.6–5.2.9 (p. 164,
  including the polydisc kernel, the transformation law and the "Hard" monomial ON
  system); Exercise 5.2.10 and §5.3 with Exercise 5.3.1 (p. 165); the Szegő kernel
  $S_U$, formula (5.2), Example 5.3.1 and Exercise 5.3.3 (p. 166).

Every harvested heading carries a disposition in
`research/frontier-43-complex-representation-15-batch-15.coverage.json` (44 harvested
rows, all with resolvable destinations). `coverage-checklist --require-destination`
passes with 0 errors and 0 warnings.

## Corrections made in this attempt (owned manifest only)

The manifest was re-read item by item; the following defects were found and repaired in
`research/frontier-43-complex-representation-15-batch-15.pages.json`:

1. `lem-complex-hessian-domination-at-a-common-minimum`: the second-variation fact at the
   heart of the lemma had no supplier, and the strategy's Wirtinger identity was missing
   its factor $4$. Added the published
   `lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation` and
   rewrote the strategy around the complex-line function $\Phi(t)=w(a+tX)$ with
   $\Delta_\Phi(0)=4\sum_{j,k}\partial_{z_j}\partial_{\bar z_k}w(a)X_j\overline{X_k}$.
2. `thm-bergman-metric-positivity-and-biholomorphic-invariance` part 2: the claim that
   $\log|\det DF(\zeta)|^2$ has zero Levi form needed the $C^2$ characterization, not
   only plurisubharmonicity. Added `thm-c-two-levi-criterion-for-plurisubharmonicity`
   and rewrote the sentence: both $\log|h|$ and $\log|1/h|$ ($h=\det DF$, nowhere zero)
   are plurisubharmonic, so the criterion forces both signs of the Levi form, hence $0$.
3. `thm-model-domain-bergman-and-szego-kernels`,
   `lem-ball-hardy-traces-and-evaluation-bound` and
   `ex-ball-monomial-norms-and-model-kernels`: added the published
   `thm-multinomial-theorem`, which underlies the coefficient regrouping
   $\sum_{|\alpha|=k}\frac{k!}{\alpha!}x^\alpha=(\sum_jx_j)^k$ used in the ball-kernel
   and ball-Hardy-space summations; the two strategies now name the identity.
4. `ex-polydisc-boundary-and-the-smooth-szego-hypotheses`: corrected a dimension slip —
   the tangent planes of $\{|z_1|=1\}$ and $\{|z_2|=1\}$ have dimension $2m-1$, not $3$
   (the "$3$" is right only for $m=2$). The statement and strategy now use the two real
   hyperplanes $T_1,T_2$, whose sum is $\mathbb R^{2m}$, and the impossibility of both
   lying in one $(2m-1)$-dimensional tangent space. The conclusion is unchanged.

All other statements, strategies, source rows and dependency edges of the earlier
populated manifest were preserved after re-reading.

## Dependency audit (what was actually checked)

- 28 items (20 A, 8 B), 101 distinct declared dependencies: 81 published items and 20
  in-batch items. All in-batch edges run from earlier to later items in the manifest;
  no cycle; recomputed `dependency_level` labels match every item (0 … 11).
- Every published dependency exists, is homed on a published non-example page, and its
  **statement-level interface** was read and matched against the claimed use. The
  load-bearing checks included: the polydisc mean-value property and Cauchy estimates
  (`cor-holomorphic-mean-value-property`, `thm-cauchy-estimates-on-a-polydisc`); the
  evaluation/closedness route (Lemma 5.2.1 interface); Riesz representation and the
  Fourier/Parseval/orthogonal-projection interfaces with the first-variable-linear
  convention; the $C^1$ change-of-variables formula together with
  $\det_{\mathbb R}L=|\det_{\mathbb C}A|^2$; polar coordinates, sphere/ball scaling and
  the beta integral; the Hardy suppliers (`def-analytic-hardy-space-disc`,
  `thm-fatou-boundary-theorem-analytic-hardy-spaces`,
  `cor-hardy-one-cauchy-representation`, `lem-hardy-radial-means-are-monotone`); and the
  Levi-form/Wirtinger conventions including the repaired one-based aliases of
  `def-levi-form-and-strict-plurisubharmonicity`.
- No dependency resolves to an examples-only (B) page; the transitive closure of the
  batch reaches no `deferred-set-theory-beyond-choice` item and no recorded-result
  replacement. Countable choice is declared on the items that use it, with
  `def-countable-choice` among their dependencies.
- Mathematical spot-checks on the manifest's own claims: disc/ball/polydisc kernel
  constants and monomial norms; $\lambda(\mathbb B^m)=\pi^m/m!$;
  $\sigma(S^{2m-1})=2\pi^m/(m-1)!$; the reduced-kernel identity
  $E(\zeta)=K(\zeta,\zeta)-|K(z,\zeta)|^2/M$ and
  $\operatorname{Hess}E(z)=M\operatorname{Hess}\log K(z)$ (checked on the disc); the
  determinant quotients $(m+1)^m\pi^m/m!$ and $2^m\pi^m$ with their inequality for
  $m\ge2$; and the half-plane kernel $-1/(\pi(z-\bar w)^2)$ obtained by Möbius transport.

## Readiness and dependency inputs

- 28/28 items recorded `ready` with
  `node tools/step1-decisions.mjs record --run frontier-43-complex-representation-15`
  in level order, each with its examined dependency IDs and evidence. No escalations.
  `step1-decisions check` closes all 28 of this batch's records (the whole-run check
  still lists the not-yet-scaffolded sibling batches).
- `research/frontier-43-complex-representation-15-batch-15.cross-batch-dependencies.json`
  is `[]`: every dependency of this pair resolves in-batch or to published content, so
  there is no cross-batch item or page prerequisite to declare.

## Checks run (exact results)

| check | result |
|---|---|
| `item-dependency-levels.mjs check --run` | only the 18 `empty scaffold inventory` errors from the nine sibling batches not yet scaffolded; zero errors on this batch (no cycle, every label exact) |
| `manifest-deps.mjs` (all manifests) | 145 item(s), 0 errors (the count rises as sibling batches are scaffolded) |
| `content-policy.mjs --manifest-only` | 145 scoped item(s), 0 errors, 0 warnings |
| `coverage-checklist.mjs … --require-destination` | 1 page, 44 harvested result(s), 0 errors, 0 warnings |
| `source-fetch-check.mjs` (check mode) | 2/2 source(s) fetch-verified, 2/2 resolved |
| `url-sweep.mjs --coverage … --recover --fail-on-dead --out /tmp/…` | 2/2 live, 0 failed, 0 recoverable, 0 suspect; 2 citation decisions |
| `source-backing.mjs --coverage … --liveness /tmp/…` | 11 authored result(s), every one still backed by an openable source |
| `drift-review-check.mjs --run` | 15 pages reviewed, 3 spec edits applied, no blocked edges; 37 same-category requires edges checked, every owed page above 95 % published-or-earlier-in-run |
| `validate-plan.mjs research/plan-spec.json --run` | exit 0 (selection note only: the not-yet-scaffolded batch-10 pair) |
| `frontier-dependency-ledger.mjs refresh --run … --require-reviewed` | reports incomplete until every batch supplies its input; this batch's input is present and empty |

The liveness artifact for the last two checks was written to `/tmp` so that the
stage-level run files (`research/<run>-url-liveness.json`) stay engine-owned.

## Unresolved findings (owner-held)

- Nothing blocks batch 15. The whole-run gates `step1-readiness`,
  `item-dependency-levels` and `frontier-dependency-ledger` stay open on the nine
  sibling batches still being scaffolded; they are those batches' assignments.
- No entry of `research/published-consumer-supplier-ledger.md` or `DEFECT-LEDGER.md`
  identifies a defective prerequisite actually used here. The one relevant published
  finding — the one-based alias repair of
  `def-levi-form-and-strict-plurisubharmonicity` — is published, owner-reviewed, and
  matches the index convention used by this page's items.
- Recorded for the ledger: `def-bergman-space-and-kernel` and
  `def-bergman-metric-bounded-domain` carry `justified_by` arrows to the theorems that
  discharge their substantive assertions (closedness of $A^2$; positive definiteness of
  the metric form). Their readiness hashes therefore coincide with those theorems'
  hashes, because the dependency closure is the same set; this is expected, not a
  collision.

## Step 3b continuation (2026-10-08)

The Step 3b pair dispatch `...-32a9b3d03167c03c` (pair `bergman-and-szego-kernels`)
authored all 29 items (21 A including the added supplier `lem-complex-multinomial-theorem`,
8 B). Durable per-item checkpoints, the session repairs, the pre-splice plan findings for
Step 4, and the closeout live in
`research/frontier-43-complex-representation-15-step3b-pair-bergman-and-szego-kernels.md`.
This file remains the Step-1 scaffold record; the Step-1 statements above were not
rewritten. The two `justified_by` arrows noted in the last bullet were reconciled during
Step 3b authoring: `def-bergman-space-and-kernel` and `def-bergman-metric-bounded-domain`
now carry empty `justified_by` because no later theorem is used to justify them.
