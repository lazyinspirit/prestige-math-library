# Batch 52 authoring notes — Mean-field training and feature learning

Run: `machine-learning-all-101-2026-10-19` · batch: `52` · role: beta.

## Plan comparison and scope

The scheduling artifact has input SHA-256 `79d42e158d7a967bd5172fb04a651e93d13af9265bac06f8ac41bf59bf9682b1`; batch 52 is level 2 and depends on batches 2, 31, and 51. The batch-52 scaffold originally has the two assigned pages with empty item inventories.

The current ML-47 section in `research/plan-machine-learning-track.md` and the matching `mean-field-training-and-feature-learning` object in `research/plan-spec.json` agree. There is no current plan-versus-spec conflict. The older paragraph's four suggested IDs (`def-particle-measure-model`, `def-wasserstein-gradient-flow`, `thm-many-particle-training-limit`, `thm-homogeneous-mean-field-global-minimizer-under-separation`) are superseded by the dated 2026-10-19 repair in the same section: the general flow/particle suppliers belong on P-WGF-02; ML-47 must locally supply M1–M5, both homogeneous branches, the full relative-domain degree/separation interface, and the corrected partial-branch zero-crossing argument. The new inventory below retains the flow, finite-particle limit, conditional minimizers, both projected-measure refinements, and the signed-square ReLU boundary example. No shared plan or plan-spec file was edited.

## Current live-run reconciliation

Native autopilot status was recomputed from `.autopilot/machine-learning-all-101-2026-10-19` at **2026-10-18T23:56:42.823Z**. The run is `running` at stage `1-scaffold`, with **85/101 pairs covered**, no work in flight, and pairs 10, 42, 45, 52, 53, 55, 56, 60 plus 8 others still missing. The stage remains held by the owner-repair/recertification blocker recorded in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`; it requires fixing rejected items, refreshing invalidated certifications, then retrying the gate. A second current blocker is invalid unit prerequisites: evaluation failed because `items/ex-pretraining-adaptation-interface-limitations.md` is absent (logged at `2026-10-18T23:54:35.810Z`). Batch 52 is one of the still-missing pairs at this status snapshot; neither blocker was edited here.

Current `git log -5` begins at `50139bdcb6 Defer compact construction artifact scans until author drain`; these owner workflow commits were read only. The prior 60/101 and 815-item note counts are historical and superseded by this recomputation.

The current actual bodies and proof interfaces of the declared in-run suppliers were checked. Their 12 Step 1 records are ready at current hashes. This is workflow readiness only, not independent approval.

## Sources inspected

- Chizat and Bach, *On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport*, full paper PDF `https://arxiv.org/pdf/1805.09545` and full-text HTML `https://arxiv.org/html/1805.09545`; arXiv PDF SHA-256 `7f4762ff7ecb08f158831dfb3259848551c720cd7d8d60102b5e3365f2d815f0`. Inspected Assumptions 2.1, 3.2, 3.4; Propositions 3.1, 4.3; Theorems 2.6, 3.3, 3.5; Appendix A.2, C.1–C.4, and D.4. Locators used below name the exact sections and claims; the numerical experiment sections are not used as proof evidence.
- Ambrosio, Gigli, and Savaré, *Gradient Flows in Metric Spaces and in the Space of Probability Measures*, full author-hosted PDF `https://www2.stat.duke.edu/~sayan/ambrosio.pdf` (342 PDF pages). Read the relevant Chapter 8 continuity-equation/minimum-action argument (Theorem 8.3.1 and proof, printed pp. 182–186), Definition 10.3.1 and Proposition 10.4.2 proof (printed pp. 242 and 255–257), and the Chapter 4 resolvent-flow route as context. The abstract AGS theorem is not used as a logical supplier for this batch.
- Published context inspected: `library/algebraic-topology/homology-axioms-degree-and-classical-applications.md`, including its exact item inventory; current bodies of `thm-global-sphere-degree-is-the-sum-of-local-degrees`, `lem-a-map-of-nonzero-degree-between-spheres-is-surjective`, `thm-top-homology-characterizes-compact-orientable-manifolds`, `def-relative-singular-homology`, `def-single-hidden-layer-network`, and `def-population-and-empirical-risk`.

Additional source inspection (2026-10-19): the author-hosted AGS PDF §11.2, Theorem 11.2.1 and its full proof (printed pp. 295–298) were inspected for the seven batch items that cite Chapter 11. The theorem requires a proper, lower-semicontinuous, coercive functional that is lambda-convex along generalized geodesics. Those premises are not inferred for the authored feature energy; AGS remains contextual and is not a logical supplier. This limitation and locator are now present in coverage and source-evidence records.

## Authored inventory and recomputed item levels

The A page contains 26 items; the B page contains three examples; total assigned inventory is 29. The A-page prerequisites retain the seven design prerequisites and add the three published measure-theory pages required by the explicit signed-projection interfaces: measures-and-their-basic-properties, signed-and-complex-measures-hahn-and-jordan, and the-lebesgue-integral-and-the-convergence-theorems. The B page requires its A companion. Dependency inputs record 9 external supplier pages, 12 in-run item suppliers, and 25 published external item suppliers. The scheduling-hash conflict flag is true.

Full-run recomputation from actual dependency edges gives these batch-52 levels (all 29 labels match; no local cycle or level error):

- Level 0: `ex-single-particle-initialization-does-not-separate`, `lem-bounded-domain-degree-properties`, `lem-partial-negative-weight-crossing-time`, `lem-pushforward-support-is-closure-of-image`
- Level 1: `def-bounded-domain-degree-from-relative-homology`, `def-partial-one-homogeneous-measure-projection`, `def-two-homogeneous-measure-projection`, `ex-moving-features-versus-fixed-features`, `lem-feature-energy-continuous-under-w2-on-a-common-cutoff`, `lem-mean-field-first-variation-and-measure-optimality`, `lem-partial-energy-continuous-under-w2`
- Level 2: `def-partial-homogeneous-relaxed-objective`, `def-signed-square-relu-feature-map`, `lem-mean-field-projection-identities`, `lem-w2-convergence-implies-homogeneous-projection-convergence`
- Level 3: `cex-signed-square-relu-differential-is-not-locally-lipschitz`, `lem-partial-relaxed-objective-signwise-optimality`
- Level 4: `def-one-hidden-layer-particle-measure-model`
- Level 12: `lem-flow-preserves-box-separation`, `lem-flow-preserves-spherical-separation`, `lem-partial-homogeneous-escape-from-nonoptimal-projection`, `lem-partial-homogeneous-projection-limit-is-stationary`, `lem-two-homogeneous-projection-limit-is-stationary`
- Level 13: `lem-two-homogeneous-escape-from-nonoptimal-projection`, `thm-mean-field-particle-time-limits-interchange`, `thm-partial-homogeneous-projected-limit-is-global-minimizer`
- Level 14: `cor-partial-homogeneous-wasserstein-limit-is-global-minimizer`, `thm-two-homogeneous-projected-limit-is-global-minimizer`
- Level 15: `cor-two-homogeneous-wasserstein-limit-is-global-minimizer`

The 12 in-run supplier decision records are current-ready on their recorded hashes; all 25 out-of-run supplier items are published and their recorded raw SHA-256 hashes match current files. The cross-batch input contains 14 page rows and 54 item rows. The 54 direct in-run edges, all 12 consumer lists, and all 29 recorded item levels match the current manifests. No other pair's files were edited.

The required full-run level audit currently sees 202 pages and 9 unrelated errors: six empty scaffold inventories (`generative-adversarial-networks`, `generative-adversarial-networks-examples`, `predictive-calibration-and-uncertainty-under-shift`, `predictive-calibration-and-uncertainty-under-shift-examples`, `monotone-risk-calibration-and-deployment-guarantees`, and `monotone-risk-calibration-and-deployment-guarantees-examples`) plus three inventory rows without IDs (`foundation-models-transfer-and-scaling-evidence` has one; `foundation-models-transfer-and-scaling-evidence-examples` has two). It reports zero batch-52 errors. No other manifest was edited to clear this global blocker.

## Final scoped validation

- Statement-first: 29 items, 0 defects.
- Proof layout: 29 items, 72 numbered steps, 0 defects.
- Strict proof contracts: 29/29 items, 0 errors, 0 warnings.
- Citation fidelity: 122 citations, no missing quotes or widening candidates.
- Scoped dependency/cycle check: 29 items; selected page and prerequisite checks cover 1,609 items and 407 pages; pass.
- Coverage checklist: 2 pages, 57 harvested results, 0 errors, 0 warnings.
- Source fetch with `--stamp`: 6/6 source records fetch-verified, 0 newly stamped; 0 source drops. No retrieval failure required a `source_resolution` record.
- Batch consistency: 29 item manifests agree with current item frontmatter; 25 published external-supplier hashes match; both pages are YAML-only with matching `requires`.
- Full-run dependency-level audit: 0 batch-52 errors; 9 current global inventory errors listed above.
- Step 1 decisions: 25 hash-current `ready`, 4 exact-gap `escalated`; all 29 have current records. After other batches introduced three inventory rows without IDs, the full-run `loadStep3`/`checkStep1` recomputation now stops at `Duplicate item undefined`. I rechecked these 29 records and the newly reconciled `lem-characteristics-unique-and-stable` supplier with native `step1Decision`/`itemHash` logic against an in-memory current run snapshot omitting only those three unidentified rows: 26 ready hashes current, 4 escalated, 0 stale or missing. This is a scoped check, not a full-run gate. No `--owner` flag was used.

Mechanical checks do not approve the mathematics. The four escalations remain full-strength claims and must be reconciled by the owner.

## Source registry

Coverage and source-evidence preserve the per-page locators and each harvested result's disposition. Unique source IDs used in the item ledger:

### S1 — Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport

URL: https://arxiv.org/pdf/1805.09545

- mean-field-training-and-feature-learning: Chizat and Bach, full 32-page article: Assumptions 2.1/3.2/3.4; Definition 2.4; Proposition 3.1; Theorems 2.6/3.3/3.5; Appendices A.2, B.2.1–B.3, C.1–C.4 (including C.18), and D.4.2. Full relevant proofs and claims read.
- mean-field-training-and-feature-learning-examples: Chizat and Bach, full 32-page article: Assumptions 2.1/3.2/3.4; Definition 2.4; Proposition 3.1; Theorems 2.6/3.3/3.5; Appendices A.2, B.2.1–B.3, C.1–C.4 (including C.18), and D.4.2. Full relevant proofs and claims read.

### S2 — Allen Hatcher, Algebraic Topology, Chapter 2

URL: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf

- mean-field-training-and-feature-learning: Hatcher, Algebraic Topology, complete Chapter 2 PDF (88 pages): §2.2, degree and local degree sum/excision arguments, printed/PDF pp. 134–137. Full relevant section read.
- mean-field-training-and-feature-learning-examples: Hatcher, Algebraic Topology, complete Chapter 2 PDF (88 pages): §2.2, degree and local degree sum/excision arguments, printed/PDF pp. 134–137. Full relevant section read.

### S3 — Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures

URL: https://www2.stat.duke.edu/~sayan/ambrosio.pdf

- mean-field-training-and-feature-learning: Ambrosio, Gigli, and Savaré, full author-hosted book (342 pages): Chapter 8, Theorem 8.3.1 and proof; Chapter 10, Definition 10.3.1 and Proposition 10.4.2 proof; Chapter 4 resolvent-flow construction. Additionally, §11.2, Theorem 11.2.1 and its complete proof (printed pp. 295–298) were inspected for the listed gradient-flow items as context only. The theorem assumes properness, lower semicontinuity, coercivity, and lambda-convexity along generalized geodesics; those hypotheses are not inferred for this feature energy, and no abstract AGS theorem is used as a logical supplier.
- mean-field-training-and-feature-learning-examples: Ambrosio, Gigli, and Savaré, full author-hosted book (342 pages): Chapter 8, Theorem 8.3.1 and proof; Chapter 10, Definition 10.3.1 and Proposition 10.4.2 proof; Chapter 4 resolvent-flow construction. These are independent treatment/context; no abstract AGS result is used as a logical supplier.

## Final item ledger

The exact claim text below is copied from each uninterrupted item statement/definition/example section. Direct dependency IDs, source result dispositions, current Step 1 decision, and the next action are recorded per item.

### `lem-bounded-domain-degree-properties` — ready
**Title / placement:** Properties of bounded-domain degree; page `mean-field-training-and-feature-learning`; dependency level 0; item `items/lem-bounded-domain-degree-properties.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Let $d\ge1$, let $U\subset\mathbb R^d$ be bounded and open, and let $f:\overline U\to\mathbb R^d$ be continuous. For $y\notin f(\partial U)$, put $K=f^{-1}(\{y\})\cap U$ and define $D(f,U,y)$ by

$$f_*[U]_K=D(f,U,y)[\mathbb R^d]_{\{y\}}\quad\text{in }H_d(\mathbb R^d,\mathbb R^d\setminus\{y\};\mathbb Z),$$

where $[U]_K$ is the unique relative orientation class restricting to the standard local generator on $K$, and $[\mathbb R^d]_{\{y\}}$ is the positive local generator. This integer is well-defined. It is nonzero only if $f^{-1}(y)\cap U\ne\varnothing$, and $D(\operatorname{id},U,y)=1$ whenever $y\in U$. If $U_1,U_2\subset U$ are disjoint bounded open sets, $y\notin f(\partial U_i)$ for $i=1,2$, and every point of $f^{-1}(y)\cap U$ lies in $U_1\cup U_2$, then

$$\deg(f,U,y)=\deg(f,U_1,y)+\deg(f,U_2,y).$$

If $H:[0,1]\times\overline U\to\mathbb R^d$ and $y:[0,1]\to\mathbb R^d$ are continuous and $y(t)\notin H_t(\partial U)$ for every $t$, then $D(H_0,U,y(0))=D(H_1,U,y(1))$.
```
**Direct dependency IDs:** `def-relative-singular-homology`, `def-r-orientation-of-a-topological-manifold`, `thm-local-homology-detects-interior-points-boundary-points-and-dimension`, `lem-compatible-local-orientation-classes-exist-over-compact-subsets`, `prop-relative-homology-is-functorial-for-maps-of-pairs`, `thm-excision-for-singular-homology`.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Properties of bounded-domain degree; S2: included — Properties of bounded-domain degree.
Item reference locators: [Chizat and Bach, Appendix C.3.1](https://arxiv.org/pdf/1805.09545); [Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-partial-negative-weight-crossing-time` — ready
**Title / placement:** Correct finite-time bound for partial-homogeneity zero crossing; page `mean-field-training-and-feature-learning`; dependency level 0; item `items/lem-partial-negative-weight-crossing-time.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Let $M\ge0$, $\eta>0$, $L\ge0$, $\epsilon>0$, and let $w:[t_0,t_0+2M/\eta]\to[-M,0]$ and $\theta:[t_0,t_0+2M/\eta]\to\mathbb R^q$ be absolutely continuous until the first time $w$ reaches zero. Assume $w(t_0)\in[-M,0]$, $\theta(t_0)=\theta_0$, and, almost everywhere before the crossing,

$$w'(t)\ge\eta/2,\qquad q'(t)\le |w(t)|(\epsilon+Lq(t)),\qquad q(t)=|\theta(t)-\theta_0|.$$

Then $w$ reaches zero at some $\tau\le t_0+2M/\eta$. At the first such time,

$$q(\tau)\le \begin{cases}\dfrac{\epsilon}{L}\bigl(e^{LM^2/\eta}-1\bigr),&L>0,\\[4pt]\dfrac{\epsilon M^2}{\eta},&L=0.\end{cases}$$

Thus the crossing remains in $|\theta-\theta_0|<r_0$ whenever the displayed bound is less than $r_0$. The crossing-time bound depends on the initial negative-weight magnitude $M$.
```
**Direct dependency IDs:** none.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Correct finite-time bound for partial-homogeneity zero crossing.
Item reference locators: [Chizat and Bach, Lemma C.18 and its proof, Appendix C.4.2](https://arxiv.org/pdf/1805.09545).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-pushforward-support-is-closure-of-image` — ready
**Title / placement:** Support of a continuous pushforward is the image closure; page `mean-field-training-and-feature-learning`; dependency level 0; item `items/lem-pushforward-support-is-closure-of-image.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Let $\mu$ be a finite nonnegative Borel measure on $\mathbb R^d$, define $\operatorname{spt}\mu=\{x:\mu(U)>0\text{ for every open neighborhood }U\text{ of }x\}$, and let $f:\mathbb R^d\to\mathbb R^d$ be continuous. Define the pushforward by $f_\#\mu(A)=\mu(f^{-1}(A))$ for Borel $A$. Then

$$\operatorname{spt}(f_\#\mu)=\overline{f(\operatorname{spt}\mu)}.$$
```
**Direct dependency IDs:** none.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Support of a continuous pushforward is the image closure; S3: included — Support of a continuous pushforward is the image closure.
Item reference locators: [Chizat and Bach, Lemma C.8](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `ex-single-particle-initialization-does-not-separate` — ready
**Title / placement:** A single particle does not separate two spheres; page `mean-field-training-and-feature-learning-examples`; dependency level 0; item `items/ex-single-particle-initialization-does-not-separate.md`.
**Exact claim and conventions** (copied from the complete Example section):
```markdown
Let $d\ge2$ and $0<r_a<r_b$. The one-particle initialization $\mu_0$ that assigns unit mass to the origin has compact support $\{0\}\subset B(0,r_b)$, but its support does not separate $r_a\mathbb S^{d-1}$ from $r_b\mathbb S^{d-1}$: a path from the inner to the outer sphere can avoid the origin.
```
**Direct dependency IDs:** none.
**Axiom branch:** The explicit path example is choice-free.
**Source results and dispositions:** S1: included — A single particle does not separate two spheres; S2: included — A single particle does not separate two spheres.
Item reference locators: [Chizat and Bach, Theorem 3.3 and Definition of separation](https://arxiv.org/pdf/1805.09545); [Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `def-bounded-domain-degree-from-relative-homology` — ready
**Title / placement:** Bounded-domain degree from relative homology; page `mean-field-training-and-feature-learning`; dependency level 1; item `items/def-bounded-domain-degree-from-relative-homology.md`.
**Exact claim and conventions** (copied from the complete Definition section):
```markdown
Let $d\ge1$, let $U\subset\mathbb R^d$ be bounded and open, and let $f:\overline U\to\mathbb R^d$ be continuous. For $y\notin f(\partial U)$ the set $K=f^{-1}(\{y\})\cap U$ is compact in $U$: its closure preimage is closed in the compact set $\overline U$ and avoids $\partial U$. Give $U$ its standard orientation. Let $[U]_K\in H_d(U,U\setminus K;\mathbb Z)$ be the unique relative orientation class restricting to the standard local orientation generator at each $x\in K$; for $K=\varnothing$ use the zero class. Let $[\mathbb R^d]_{\{y\}}$ be the positive generator of $H_d(\mathbb R^d,\mathbb R^d\setminus\{y\};\mathbb Z)\cong\mathbb Z$. The bounded-domain degree is the integer $\deg(f,U,y)$ determined by

$$f_*[U]_K=\deg(f,U,y)[\mathbb R^d]_{\{y\}},$$

where $f$ is regarded as a map of pairs $(U,U\setminus K)\to(\mathbb R^d,\mathbb R^d\setminus\{y\})$. The following local lemma proves that this definition is well-defined and has the required normalization, additivity, and moving-target homotopy properties.
```
**Direct dependency IDs:** `lem-bounded-domain-degree-properties`.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Bounded-domain degree from relative homology; S2: included — Bounded-domain degree from relative homology.
Item reference locators: [Chizat and Bach, Appendix C.3.1](https://arxiv.org/pdf/1805.09545); [Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `def-partial-one-homogeneous-measure-projection` — ready
**Title / placement:** Partially one-homogeneous signed measure projection; page `mean-field-training-and-feature-learning`; dependency level 1; item `items/def-partial-one-homogeneous-measure-projection.md`.
**Exact claim and conventions** (copied from the complete Definition section):
```markdown
Let $(\Theta,\mathcal T)$ be a measurable space and let $\mu$ be a finite nonnegative measure on $(\mathbb R\times\Theta,\mathcal B(\mathbb R)\otimes\mathcal T)$ such that $\int|w|d\mu(w,\theta)<\infty$. Set $w_+=\max(w,0)$ and $w_-=\max(-w,0)$, and define finite nonnegative measures on $\Theta$ by

$$\alpha_\mu(B)=\int_{\mathbb R\times B}w_+d\mu,\qquad\beta_\mu(B)=\int_{\mathbb R\times B}w_-d\mu\quad(B\in\mathcal T).$$

The partially one-homogeneous signed projection is

$$h^1(\mu)=\alpha_\mu-\beta_\mu,\qquad h^1(\mu)(B)=\int_{\mathbb R\times B}w\,d\mu(w,\theta).$$

It is a finite signed measure. For every bounded measurable $\varphi:\Theta\to\mathbb R$, define its integral against this signed projection by

$\int_\Theta\varphi\,dh^1(\mu):=\int_\Theta\varphi d\alpha_\mu-\int_\Theta\varphi d\beta_\mu=\int_{\mathbb R\times\Theta}w\varphi(\theta)d\mu(w,\theta).$

Its total variation is finite and satisfies $|h^1(\mu)|(\Theta)\le\alpha_\mu(\Theta)+\beta_\mu(\Theta)\le\int|w|d\mu$.

If $\mathcal H$ is a separable real Hilbert space and $\varphi:\Theta\to\mathcal H$ is bounded and strongly measurable, then for every $z\in\mathcal H$ the feature moment satisfies $\langle z,\int w\varphi(\theta)d\mu\rangle=\int\langle z,\varphi(\theta)\rangle dh^1(\mu)$, with the scalar integral defined above. The raw measures $\alpha_\mu$ and $\beta_\mu$ record positive and negative parameter weights before cancellation and need not be mutually singular; for example, if $\mu$ assigns mass one to each of $(1,\theta_0)$ and $(-1,\theta_0)$ and zero elsewhere, then $\alpha_\mu=\beta_\mu$ both assign mass one to $\theta_0$ while $h^1(\mu)=0$. Thus the signed projection does not by itself determine a penalty of the form $\int|w|\widetilde V(\theta)d\mu$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-measure`, `def-signed-measure`, `def-total-variation-of-a-signed-or-complex-measure`, `def-bochner-integrable-function`, `thm-bochner-integrability-criterion`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Partially one-homogeneous signed measure projection; S3: included — Partially one-homogeneous signed measure projection.
Item reference locators: [Chizat and Bach, Appendix A.2.1 and Appendix C.2.2](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `def-two-homogeneous-measure-projection` — ready
**Title / placement:** Two-homogeneous measure projection; page `mean-field-training-and-feature-learning`; dependency level 1; item `items/def-two-homogeneous-measure-projection.md`.
**Exact claim and conventions** (copied from the complete Definition section):
```markdown
Let $d\ge2$, let $\mathbb S^{d-1}=\{\theta\in\mathbb R^d:|\theta|=1\}$, and let $\mu$ be a finite nonnegative Borel measure on $\mathbb R^d$ with $\int|u|^2d\mu(u)<\infty$. Define $\rho(u)=u/|u|$ for $u\ne0$. The **two-homogeneous projection** of $\mu$ is the set function on Borel $A\subseteq\mathbb S^{d-1}$

$$h^2(\mu)(A)=\int_{\mathbb R^d\setminus\{0\}}\mathbf1_A(\rho(u))|u|^2d\mu(u).$$

It is a finite nonnegative Borel measure: the integrand defines the weighted measure $|u|^2\mu$ on $\mathbb R^d\setminus\{0\}$, and preimages under the continuous map $\rho$ preserve disjoint unions; its total mass is at most $\int|u|^2d\mu$. Mass at $u=0$ contributes zero. If $\Phi$ or $V$ is positively two-homogeneous, this projection records its radial integral on the sphere; the exact identities are stated separately.
```
**Direct dependency IDs:** `def-feature-measure-energy`.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Two-homogeneous measure projection; S3: included — Two-homogeneous measure projection.
Item reference locators: [Chizat and Bach, Appendix A.2.2 and Appendix C.2.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-feature-energy-continuous-under-w2-on-a-common-cutoff` — ready
**Title / placement:** Feature energy is W2-continuous on a common cutoff; page `mean-field-training-and-feature-learning`; dependency level 1; item `items/lem-feature-energy-continuous-under-w2-on-a-common-cutoff.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume the feature-energy hypotheses on a closed convex set $Q_r\subseteq\Omega$, and let $\mu_n,\mu\in\mathcal P_2(\mathbb R^d)$ be concentrated on $Q_r$, with finite feature energy and $W_2(\mu_n,\mu)\to0$. Then $F(\mu_n)\to F(\mu)$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-two-space-and-couplings`, `thm-bounded-linear-maps-commute-with-bochner-integration`.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Feature energy is W2-continuous on a common cutoff; S3: included — Feature energy is W2-continuous on a common cutoff.
Item reference locators: [Chizat and Bach, Lemma A.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-mean-field-first-variation-and-measure-optimality` — ready
**Title / placement:** First variation and optimality over nonnegative measures; page `mean-field-training-and-feature-learning`; dependency level 1; item `items/lem-mean-field-first-variation-and-measure-optimality.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Let $\mathcal H$ be a real Hilbert space, let $\Omega$ be the feature domain, and let $F(\mu)=R(\int_\Omega\Phi\,d\mu)+\int_\Omega V\,d\mu$ be finite on a finite nonnegative Borel measure $\mu$, with $R$ differentiable and convex. Define $G_\mu(u)=dR_{m_\mu}[\Phi(u)]+V(u)$, where $m_\mu=\int_\Omega\Phi\,d\mu$. Then $\mu$ minimizes $F$ over all finite nonnegative Borel measures if and only if $G_\mu(u)\ge0$ for every $u\in\Omega$ and $G_\mu(u)=0$ for $\mu$-almost every $u$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `def-dirac-measure`.
**Axiom branch:** The Dirac perturbation, scaling and convexity argument is choice-free; no AC premise is needed.
**Source results and dispositions:** S1: included — First variation and optimality over nonnegative measures; S3: included — First variation and optimality over nonnegative measures.
Item reference locators: [Chizat and Bach, Proposition 3.1 and Appendix C.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-partial-energy-continuous-under-w2` — ready
**Title / placement:** Partial one-homogeneous energy is continuous under W2 convergence; page `mean-field-training-and-feature-learning`; dependency level 1; item `items/lem-partial-energy-continuous-under-w2.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC. Let $\Theta\subseteq\mathbb R^q$ be closed and convex, let $\varphi:\Theta\to\mathcal H$ and $\widetilde V:\Theta\to[0,\infty)$ be bounded Lipschitz maps, and set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. If $\mu_n,\mu\in\mathcal P_2(\mathbb R\times\Theta)$ and $W_2(\mu_n,\mu)\to0$, then $F(\mu_n)\to F(\mu)$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-two-space-and-couplings`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `def-axiom-of-choice`.
**Axiom branch:** AC supplies a sequence of couplings with quadratic costs approaching the W2 infimum; the estimate after coupling selection is deterministic.
**Source results and dispositions:** S1: included — Partial one-homogeneous energy is continuous under W2 convergence; S3: included — Partial one-homogeneous energy is continuous under W2 convergence.
Item reference locators: [Chizat and Bach, Lemma A.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `ex-moving-features-versus-fixed-features` — ready
**Title / placement:** Moving features can represent a target missed by a fixed feature; page `mean-field-training-and-feature-learning-examples`; dependency level 1; item `items/ex-moving-features-versus-fixed-features.md`.
**Exact claim and conventions** (copied from the complete Example section):
```markdown
Let $\mathcal H=\mathbb R^2$, $y=(1,0)$, $R(z)=\tfrac12\|z-y\|^2$, $\Theta=[0,2\pi]$, $\varphi(\theta)=(\cos\theta,\sin\theta)$, and $V=0$. The one-particle measure assigning unit mass to $(a,\theta)$ represents $a\varphi(\theta)$ and can attain zero risk at $(a,\theta)=(1,0). If the feature is fixed at $\theta=\pi/2$ and only $a$ varies, the minimum risk is $1/2$. This finite-dimensional feature-energy example shows a representational distinction only; it makes no convergence claim about either training dynamics.
```
**Direct dependency IDs:** `def-feature-measure-energy`.
**Axiom branch:** The finite-dimensional feature comparison is choice-free.
**Source results and dispositions:** S1: included — Moving features can represent a target missed by a fixed feature; S3: included — Moving features can represent a target missed by a fixed feature.
Item reference locators: [Chizat and Bach, Sections 1.1 and 2.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapters 8 and 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `def-partial-homogeneous-relaxed-objective` — ready
**Title / placement:** Relaxed objective for a partially one-homogeneous projection; page `mean-field-training-and-feature-learning`; dependency level 2; item `items/def-partial-homogeneous-relaxed-objective.md`.
**Exact claim and conventions** (copied from the complete Definition section):
```markdown
Assume AC. Let $(\Theta,\mathcal T)$ be a measurable space, let $\mathcal H$ be a real Hilbert space, let $R:\mathcal H\to[0,\infty)$ be convex and differentiable, let $\varphi:\Theta\to\mathcal H$ be bounded and strongly measurable, and let $\widetilde V:\Theta\to[0,\infty)$ be bounded and measurable. For each finite signed measure $\nu$ on $\Theta$ with $|\nu|(\Theta)<\infty$, write $\nu=\nu^+-\nu^-$ for its Jordan decomposition into mutually singular finite nonnegative measures, so $|\nu|=\nu^++\nu^-$. Define $m_\nu:=\int\varphi d\nu:=\int\varphi d\nu^+-\int\varphi d\nu^-$. Both Bochner integrals exist because $\varphi$ is bounded and strongly measurable and $\nu^+,\nu^-$ are finite. Scalar integrals against $\nu$ use the corresponding signed-measure integral. Assume $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Define

$J(\nu)=R\!\left(\int_\Theta\varphi\,d\nu\right)+\int_\Theta\widetilde V\,d|\nu|.$

For every finite nonnegative measure $\mu$ on $(\mathbb R\times\Theta,\mathcal B(\mathbb R)\otimes\mathcal T)$ with $\int|w|d\mu<\infty$ and $h^1(\mu)=\nu$, its feature moment and penalty are $m_\nu$ and $\int|w|\widetilde V(\theta)d\mu$, respectively, and its feature energy is

$F(\mu)=R\left(\int w\varphi(\theta)d\mu\right)+\int|w|\widetilde V(\theta)d\mu.$

Then $F(\mu)\ge J(\nu)$. Equality is attained by the finite nonnegative measure $\mu_\nu$ defined on measurable $A\subseteq\mathbb R\times\Theta$ by

$\mu_\nu(A)=\nu^+(\{\theta:(1,\theta)\in A\})+\nu^-(\{\theta:(-1,\theta)\in A\}).$

Thus $J(\nu)=\inf\{F(\mu):\mu\ge0,\ \int|w|d\mu<\infty,\ h^1(\mu)=\nu\}$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-partial-one-homogeneous-measure-projection`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `def-axiom-of-choice`, `thm-jordan-decomposition-for-signed-measures`, `def-the-space-of-finite-total-variation-signed-measures`, `def-total-variation-of-a-signed-or-complex-measure`, `def-integration-against-a-signed-or-complex-measure`, `def-bochner-integrable-function`, `thm-bochner-integrability-criterion`, `prop-jordan-parts-and-total-variation-formulas-for-signed-measures`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`.
**Axiom branch:** AC is required for the canonical Jordan decompositions; the domination and minimizing-lift calculations use the supplied parts choice-free.
**Source results and dispositions:** S1: included — Relaxed objective for a partially one-homogeneous projection; S3: included — Relaxed objective for a partially one-homogeneous projection.
Item reference locators: [Chizat and Bach, Proposition A.3 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `def-signed-square-relu-feature-map` — ready
**Title / placement:** Signed-square ReLU feature parameterization; page `mean-field-training-and-feature-learning`; dependency level 2; item `items/def-signed-square-relu-feature-map.md`.
**Exact claim and conventions** (copied from the complete Definition section):
```markdown
Let $d\ge2$, let $\rho_X$ be a Borel probability measure on $\mathbb R^{d-1}$ with finite second moment, and define $s(t)=t|t|$ and $\sigma(t)=\max(t,0)$. For $\theta=(\theta_1,\ldots,\theta_d)\in\mathbb R^d$, define the signed-square ReLU feature in $L^2(\rho_X)$ by

$$\Phi(\theta)(x)=\sigma\!\left(\sum_{j=1}^{d-1}s(\theta_j)x_j+s(\theta_d)\right).$$

The two-copy parameterization uses this feature on one copy of $\mathbb R^d$ and its negative on the other copy; nonnegative measures on the disjoint union represent signed linear combinations of these features. The scalar signed-square map is continuously differentiable with derivative $s'(t)=2|t|$. This definition asserts differentiability of the resulting $L^2$ feature map only when its data law has the additional regularity needed for that conclusion; it does not assert that its differential is locally Lipschitz.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-single-hidden-layer-network`.
**Axiom branch:** No additional axiom declared; the local argument is choice-free.
**Source results and dispositions:** S1: included — Signed-square ReLU feature parameterization.
Item reference locators: [Chizat and Bach, Section 4.2 and Appendix D.4.2](https://arxiv.org/pdf/1805.09545).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-mean-field-projection-identities` — ready
**Title / placement:** Feature and energy identities for homogeneous projections; page `mean-field-training-and-feature-learning`; dependency level 2; item `items/lem-mean-field-projection-identities.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
For a finite nonnegative Borel measure $\mu$ on $\mathbb R^d$ with finite second moment, suppose $\Phi$ and $V$ are continuous and positively two-homogeneous, with $\Phi:\mathbb R^d\to\mathcal H$ taking values in a Hilbert space and $V:\mathbb R^d\to[0,\infty)$. Then

$$\int_{\mathbb R^d}\Phi(u)d\mu(u)=\int_{\mathbb S^{d-1}}\Phi(\theta)dh^2(\mu)(\theta),\qquad\int_{\mathbb R^d}V(u)d\mu(u)=\int_{\mathbb S^{d-1}}V(\theta)dh^2(\mu)(\theta).$$

If $h^2(\mu_n)$ converges weakly as finite measures on the compact sphere to $\nu$, then the feature integrals converge in Hilbert norm, the regularizer integrals converge, and $F(\mu_n)\to R(\int\Phi d\nu)+\int Vd\nu$. In the partially one-homogeneous model $\Omega=\mathbb R\times\Theta$, $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$ with bounded nonnegative $\widetilde V$, for every $z\in\mathcal H$ the exact feature identity is $\langle z,\int w\varphi(\theta)d\mu\rangle=\int\langle z,\varphi(\theta)\rangle dh^1(\mu)$, using the scalar pairing defined in the partial projection, and the penalty inequality is $\int|w|\widetilde V(\theta)d\mu\ge\int\widetilde Vdh^1(\mu)$. Weak convergence of signed $h^1(\mu_n)$ against bounded continuous tests gives weak convergence of feature moments when $\varphi$ is bounded continuous, but does not alone give Hilbert-norm convergence or energy convergence.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-two-homogeneous-measure-projection`, `def-partial-one-homogeneous-measure-projection`, `thm-bounded-linear-maps-commute-with-bochner-integration`.
**Axiom branch:** The finite-net approximation and signed pairing identities are choice-free; no AC premise is needed.
**Source results and dispositions:** S1: included — Feature and energy identities for homogeneous projections; S3: included — Feature and energy identities for homogeneous projections.
Item reference locators: [Chizat and Bach, Appendices A.2.1–A.2.2, C.2.1–C.2.2, C.4.1–C.4.2](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-w2-convergence-implies-homogeneous-projection-convergence` — ready
**Title / placement:** W2 convergence implies weak convergence of homogeneous projections; page `mean-field-training-and-feature-learning`; dependency level 2; item `items/lem-w2-convergence-implies-homogeneous-projection-convergence.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC. Let $\mu_n,\mu\in\mathcal P_2(\mathbb R^d)$, with $W_2(\mu_n,\mu)\to0$. Then $h^2(\mu_n)$ converges weakly as finite measures on $\mathbb S^{d-1}$ to $h^2(\mu)$. If the ambient space is $\mathbb R\times\mathbb R^q$ with first coordinate $w\in\mathbb R$ and $\Theta=\mathbb R^q$, then $h^1(\mu_n)$ converges weakly as finite signed measures against every bounded continuous test on $\Theta$ to $h^1(\mu)$.
```
**Direct dependency IDs:** `def-wasserstein-two-space-and-couplings`, `def-two-homogeneous-measure-projection`, `def-partial-one-homogeneous-measure-projection`, `def-axiom-of-choice`, `prop-existence-and-lower-semicontinuity-of-optimal-couplings`.
**Axiom branch:** AC supplies couplings whose quadratic costs approach the W2 infimum; the truncation argument is choice-free.
**Source results and dispositions:** S1: included — W2 convergence implies weak convergence of homogeneous projections; S3: included — W2 convergence implies weak convergence of homogeneous projections.
Item reference locators: [Chizat and Bach, Appendix A.1.4 and A.2](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 7](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-partial-relaxed-objective-signwise-optimality` — ready
**Title / placement:** Signwise first-variation conditions minimize the relaxed objective; page `mean-field-training-and-feature-learning`; dependency level 3; item `items/lem-partial-relaxed-objective-signwise-optimality.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC. Let $R:\mathcal H\to[0,\infty)$ be convex and differentiable, let $\varphi:\Theta\to\mathcal H$ be bounded and strongly measurable, and let $\widetilde V:\Theta\to[0,\infty)$ be bounded and measurable. For a finite signed measure $\nu=\nu^+-\nu^-$, put $m_\nu=\int\varphi\,d\nu$, $G_+(\theta)=dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$, and $G_-(\theta)=-dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$. If $G_+,G_-\ge0$ everywhere, $G_+=0$ $\nu^+$-almost everywhere, and $G_-=0$ $\nu^-$-almost everywhere, then $\nu$ globally minimizes $J(\lambda)=R(\int\varphi\,d\lambda)+\int\widetilde V\,d|\lambda|$ over all finite signed measures $\lambda$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-partial-homogeneous-relaxed-objective`, `def-partial-one-homogeneous-measure-projection`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `def-axiom-of-choice`, `thm-jordan-decomposition-for-signed-measures`.
**Axiom branch:** AC is used for Jordan decompositions of finite signed measures; the convexity comparison is otherwise choice-free.
**Source results and dispositions:** S1: included — Signwise first-variation conditions minimize the relaxed objective; S3: included — Signwise first-variation conditions minimize the relaxed objective.
Item reference locators: [Chizat and Bach, Proposition 3.1 and Appendix C.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `cex-signed-square-relu-differential-is-not-locally-lipschitz` — ready
**Title / placement:** The signed-square ReLU differential need not be locally Lipschitz; page `mean-field-training-and-feature-learning-examples`; dependency level 3; item `items/cex-signed-square-relu-differential-is-not-locally-lipschitz.md`.
**Exact claim and conventions** (copied from the complete Statement refuted section):
```markdown
**Refuted claim:** the differential of the signed-square ReLU feature map is locally Lipschitz near the parameter $(1,1)$.

For input law with density $p(x)=(2\pi)^{-1/2}e^{-x^2/2}$ on $\mathbb R$, define $\Phi(w,b)(x)=\max\{w|w|x+b|b|,0\}$ as an element of $L^2(p(x)dx)$. This feature map is Fréchet differentiable near $(1,1)$, but its differential is not locally Lipschitz there.
```
**Direct dependency IDs:** `def-signed-square-relu-feature-map`.
**Axiom branch:** The Gaussian counterexample and its estimates are choice-free.
**Source results and dispositions:** S1: included — The signed-square ReLU differential need not be locally Lipschitz.
Item reference locators: [Chizat and Bach, Proposition 4.3 and Lemma D.5](https://arxiv.org/pdf/1805.09545); [Chizat and Bach, Appendix D.4.2](https://arxiv.org/pdf/1805.09545).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `def-one-hidden-layer-particle-measure-model` — ready
**Title / placement:** One-hidden-layer particle-measure model; page `mean-field-training-and-feature-learning`; dependency level 4; item `items/def-one-hidden-layer-particle-measure-model.md`.
**Exact claim and conventions** (copied from the complete Definition section):
```markdown
Assume AC for the flow clause below. Let $(\mathsf X,\mathcal A,\rho_X)$ be an input probability space, let $\mathcal H=L^2(\rho_X)$, let $\sigma:\mathbb R\to\mathbb R$ be measurable, and put $\Theta=\mathbb R^{p+1}$ for hidden affine parameters $\theta=(w,b)$. Assume $\phi_\theta(x)=\sigma(w\cdot x+b)$ belongs to $\mathcal H$ for each $\theta$. On $\Omega=\mathbb R\times\Theta$, define the feature map $\Phi(a,w,b)=a\phi_{(w,b)}\in\mathcal H$. For a finite nonnegative Borel measure $\mu$ on $\Omega$ for which the Bochner integral exists, its particle-measure predictor is

$$f_\mu=\int_\Omega \Phi(u)\,d\mu(u)\in\mathcal H.$$

The corresponding objective is $F(\mu)=R(f_\mu)+\int_\Omega V\,d\mu$, whenever the scalar integral is finite, with $R:\mathcal H\to[0,\infty)$ a risk functional and $V:\Omega\to[0,\infty)$ a regularizer. For the empirical particle law defined on measurable $A\subseteq\Omega$ by $\mu_m(A)=m^{-1}\#\{j:(m a_j,w_j,b_j)\in A\}$, one has $f_{\mu_m}(x)=\sum_{j=1}^m a_j\sigma(w_j\cdot x+b_j)$, so a finite one-hidden-layer network is a particle-measure predictor (with an optional constant output bias added separately). A feature-energy Wasserstein gradient flow means an $AC^2_{\rm loc}$ curve of probability measures satisfying the finite-action continuity equation with Borel velocity equal almost everywhere to the negative minimum-norm element of the constrained subdifferential of the first-variation potential. This is the earlier model-flow definition; no existence or uniqueness follows from this definition. The flow use below requires all of the feature-energy regularity hypotheses. In particular, the classical ReLU feature map is not asserted here to meet those hypotheses merely because it is positively homogeneous.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-single-hidden-layer-network`, `def-population-and-empirical-risk`, `def-axiom-of-choice`.
**Axiom branch:** AC is an explicit inherited hypothesis for the Wasserstein-flow clause; the finite empirical predictor identity is choice-free.
**Source results and dispositions:** S1: included — One-hidden-layer particle-measure model; S3: included — One-hidden-layer particle-measure model.
Item reference locators: [Chizat and Bach, Sections 2.1–2.3](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-flow-preserves-box-separation` — ready
**Title / placement:** Partial-homogeneity flows preserve box separation; page `mean-field-training-and-feature-learning`; dependency level 12; item `items/lem-flow-preserves-box-separation.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, the partially one-homogeneous feature-energy hypotheses on $\Omega=\mathbb R\times\Theta$, and $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$ with bounded $C^{1,1}$ feature and penalty maps. In the bounded branch, let $\Theta$ be the closure of a nonempty bounded connected open convex set with $C^1$ boundary and assume $dG_f(\theta)[n_\theta]=0$ for every relevant $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$ and $\theta\in\partial\Theta$. In the unbounded branch, let $\Theta=\mathbb R^{d-1}$ and assume each $G_f(r\omega)$ has a uniform $C^1(\mathbb S^{d-2})$ limit as $r\to\infty$, with the dense-regular-value property required by the model. Let $\mu_t$ be the Wasserstein gradient flow from a law whose closed support $K_0$ is contained in $[-r_0,r_0]\times\Theta$ and separates the faces $\{-r_0\}\times\Theta$ and $\{r_0\}\times\Theta$. For every finite $T$, there is $\alpha>r_0$ such that $\operatorname{spt}\mu_t$ is contained in $[-\alpha,\alpha]\times\Theta$ and separates $\{-\alpha\}\times\Theta$ from $\{\alpha\}\times\Theta$ for every $t\in[0,T]$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-axiom-of-choice`, `def-dependent-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-uniform-boundedness-principle`, `def-partial-one-homogeneous-measure-projection`, `lem-characteristics-unique-and-stable`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `lem-pushforward-support-is-closure-of-image`, `def-bounded-domain-degree-from-relative-homology`, `lem-bounded-domain-degree-properties`.
**Axiom branch:** AC supplies the flow, characteristics and support representation; DC is used through the uniform boundedness principle for the compactified asymptotic field.
**Source results and dispositions:** S1: included — Partial-homogeneity flows preserve box separation; S2: included — Partial-homogeneity flows preserve box separation; S3: included — Partial-homogeneity flows preserve box separation.
Item reference locators: [Chizat and Bach, Lemma C.13 and Proposition C.14](https://arxiv.org/pdf/1805.09545); [Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf); [Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-flow-preserves-spherical-separation` — ready
**Title / placement:** A homogeneous flow preserves spherical support separation; page `mean-field-training-and-feature-learning`; dependency level 12; item `items/lem-flow-preserves-spherical-separation.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, the full feature-energy hypotheses on $\Omega=\mathbb R^d$, $d\ge2$, and positive two-homogeneity of $\Phi$ and $V$. Let $\mu_t$ be the resulting Wasserstein gradient flow on $[0,T]$. If $K=\operatorname{spt}\mu_0$ is compact, is contained in $B(0,r_b)$, and separates $r_a\mathbb S^{d-1}$ from $r_b\mathbb S^{d-1}$ for $0<r_a<r_b$, then for every $t\in[0,T]$ the support $\operatorname{spt}\mu_t$ separates $r'_a\mathbb S^{d-1}$ from $r'_b\mathbb S^{d-1}$ for some $0<r'_a<r'_b$ depending on the flow and $T$. Here separation means that every continuous path with endpoints on the two spheres intersects the stated support.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-axiom-of-choice`, `thm-superposition-for-finite-action-continuity-equations`, `lem-characteristics-unique-and-stable`, `lem-feature-flow-escape-bound`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `lem-pushforward-support-is-closure-of-image`, `lem-bounded-domain-degree-properties`.
**Axiom branch:** AC is inherited from the Wasserstein flow, superposition, and characteristic constructions; the radial estimates and degree argument themselves are choice-free.
**Source results and dispositions:** S1: included — A homogeneous flow preserves spherical support separation; S2: included — A homogeneous flow preserves spherical support separation; S3: included — A homogeneous flow preserves spherical support separation.
Item reference locators: [Chizat and Bach, Assumptions 3.2 and Appendix C.3.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf); [Hatcher, Algebraic Topology, Proposition 2.30](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-partial-homogeneous-escape-from-nonoptimal-projection` — escalated
**Title / placement:** Nonoptimal partial projections have an escaping sign branch; page `mean-field-training-and-feature-learning`; dependency level 12; item `items/lem-partial-homogeneous-escape-from-nonoptimal-projection.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Require dense regular values for every relevant $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every relevant $f$, or (ii) $\Theta=\mathbb R^{d-1}$ and each $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Let $\nu$ be a finite signed projection with nonoptimal relaxed objective $J(\nu)$, set $m_\nu=\int\varphi d\nu$ by the signed Bochner-integral convention in the relaxed-objective definition, and define $G_+(\theta)=dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$ and $G_-(\theta)=-dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$. Assume at least one of $G_+,G_-$ is negative somewhere, as is necessary for a nonempty negative cone. Let $I\subseteq\{+,-\}$ be the nonempty set of signs with a negative value, choose a negative regular level $-\eta_s$ for each $s\in I$, and put $K_s=\{G_s\le-\eta_s\}$ for $s\in I$ and $K_s=\varnothing$ otherwise. For a finite signed measure $\sigma$ on $\Theta$, define

$$\|\sigma\|_{BL(\Theta)}:=\sup\left\{\left|\int f d\sigma\right|:f:\Theta\to\mathbb R,\ \|f\|_\infty+\operatorname{Lip}(f)\le1\right\},$$

where $\|f\|_\infty:=\sup_{\theta\in\Theta}|f(\theta)|$ and $\operatorname{Lip}(f):=\sup_{\theta\ne\theta'}|f(\theta)-f(\theta')|/|\theta-\theta'|$ for Euclidean distance, taking $0$ when there are no distinct points. Set $A=(\mathbb R_{>0}\times K_+)\cup(\mathbb R_{<0}\times K_-)$. There is $\epsilon>0$ such that if $\|h^1(\mu_{t_0})-\nu\|_{BL(\Theta)}<\epsilon$ and $\mu_{t_0}(A)>0$ for a Wasserstein gradient flow $\mu_t$, then for some $t_1>t_0$,

$$\|h^1(\mu_{t_1})-\nu\|_{BL(\Theta)}\ge\epsilon.$$

The statement retains both sign branches and both source boundary alternatives.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-partial-one-homogeneous-measure-projection`, `def-partial-homogeneous-relaxed-objective`, `lem-partial-negative-weight-crossing-time`, `lem-mean-field-projection-identities`, `lem-characteristics-unique-and-stable`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `def-axiom-of-choice`, `thm-jordan-decomposition-for-signed-measures`.
**Axiom branch:** AC is inherited from the flow, characteristic and minimum-norm selection suppliers; the scalar crossing estimate itself is choice-free.
**Source results and dispositions:** S1: included — Nonoptimal partial projections have an escaping sign branch; S3: included — Nonoptimal partial projections have an escaping sign branch.
Item reference locators: [Chizat and Bach, Propositions C.4–C.5 and Lemma C.18](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** Owner escalation: Escalated: the negative-weight equations use G_-=-a+Vtilde, but the cited Lemma C.18 argument is applied near a negative sublevel of G_+=a+Vtilde. At a critical point of G_+, grad G_-=2 grad Vtilde may be nonzero; the current hypotheses do not establish the crossing estimate. Noncancelling bounded-Lipschitz control and compactified-boundary control in unbounded Theta also remain unresolved. This blocks the partial projected-limit theorem.

### `lem-partial-homogeneous-projection-limit-is-stationary` — escalated
**Title / placement:** Stationarity of a partially homogeneous signed projection limit; page `mean-field-training-and-feature-learning`; dependency level 12; item `items/lem-partial-homogeneous-projection-limit-is-stationary.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Require dense regular values for every relevant $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every relevant $f$, or (ii) $\Theta=\mathbb R^{d-1}$ and each $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Write $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$, and let $\mu_t$ be a Wasserstein gradient flow. Suppose the finite signed measures $h^1(\mu_t)$ converge weakly on $\Theta$ to a finite signed measure $\nu$. Define $m_\nu:=\int\varphi d\nu$ by the signed Bochner-integral convention for the relaxed objective. Put $a_\nu(\theta)=dR_{m_\nu}[\varphi(\theta)]$, $G_+(\theta)=a_\nu(\theta)+\widetilde V(\theta)$, and $G_-(\theta)=-a_\nu(\theta)+\widetilde V(\theta)$. The intended stationarity conclusion is $G_+=0$ for $\nu^+$-almost every point and $G_-=0$ for $\nu^-$-almost every point, where $\nu=\nu^+-\nu^-$ is the Jordan decomposition. This is the sign-correct formulation of stationarity for the reduced functional $J(\nu)=R(\int\varphi\,d\nu)+\int\widetilde V\,d|\nu|$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-partial-one-homogeneous-measure-projection`, `def-partial-homogeneous-relaxed-objective`, `lem-mean-field-projection-identities`, `def-axiom-of-choice`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `thm-jordan-decomposition-for-signed-measures`.
**Axiom branch:** AC is inherited from the Wasserstein flow and its minimum-norm velocity selection.
**Source results and dispositions:** S1: included — Stationarity of a partially homogeneous signed projection limit; S3: included — Stationarity of a partially homogeneous signed projection limit.
Item reference locators: [Chizat and Bach, Lemma C.6 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** Owner escalation: Escalated: signed weak convergence of h^1 controls only alpha-beta, while the Wasserstein action is integrated against mu_t rather than |w|mu_t. A proved branchwise dissipation or closed-subgradient result is needed to infer G_+=0 nu^+-almost everywhere and G_-=0 nu^--almost everywhere. Chizat-Bach Lemma C.6 does not supply the missing representation. This blocks the partial projected-limit theorem and its W2 corollary.

### `lem-two-homogeneous-projection-limit-is-stationary` — ready
**Title / placement:** A weak two-homogeneous projection limit is stationary on its support; page `mean-field-training-and-feature-learning`; dependency level 12; item `items/lem-two-homogeneous-projection-limit-is-stationary.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, the feature-energy hypotheses, and positive two-homogeneity of $\Phi$ and $V$ on $\Omega=\mathbb R^d$. Let $\mu_t$ be a Wasserstein gradient flow with finite initial energy. Suppose the finite measures $h^2(\mu_t)$ converge weakly on $\mathbb S^{d-1}$ to a finite nonnegative measure $\nu$. Define $G_\nu(\theta)=dR_{m_\nu}[\Phi(\theta)]+V(\theta)$, where $m_\nu=\int_{\mathbb S^{d-1}}\Phi\,d\nu$. Then $G_\nu=0$ for $\nu$-almost every $\theta$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-two-homogeneous-measure-projection`, `lem-mean-field-projection-identities`, `lem-w2-convergence-implies-homogeneous-projection-convergence`, `lem-characteristics-unique-and-stable`, `def-axiom-of-choice`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`.
**Axiom branch:** AC is inherited from the Wasserstein flow and its minimum-norm velocity selection; the radial identity and limiting integral argument are choice-free.
**Source results and dispositions:** S1: included — A weak two-homogeneous projection limit is stationary on its support; S3: included — A weak two-homogeneous projection limit is stationary on its support.
Item reference locators: [Chizat and Bach, Lemma C.3](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Theorem 11.2.1 and energy identity](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `lem-two-homogeneous-escape-from-nonoptimal-projection` — ready
**Title / placement:** Negative regular sublevels force two-homogeneous projection escape; page `mean-field-training-and-feature-learning`; dependency level 13; item `items/lem-two-homogeneous-escape-from-nonoptimal-projection.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, the feature-energy hypotheses on $\Omega=\mathbb R^d$, $d\ge2$, convex differentiable $R$, and positive two-homogeneity of $\Phi,V$. Let $\nu$ be a finite nonnegative measure on $\mathbb S^{d-1}$ which is not a global minimizer of $F$ over finite nonnegative measures and satisfies $G_\nu=0$ $\nu$-almost everywhere. Set $G_\zeta(\theta)=dR_{m_\zeta}[\Phi(\theta)]+V(\theta)$ and use the bounded-Lipschitz norm $\|\sigma\|_{BL}=\sup\{|\int f\,d\sigma|:\|f\|_\infty+\operatorname{Lip}(f)\le1\}$ on finite measures on the sphere. Assume the dense-regular-value hypothesis for $G_\nu|_{\mathbb S^{d-1}}$, including differentiability of $V$ near each selected regular level. Then there are $\epsilon>0$ and a compact sublevel set $K=\{\theta:G_\nu(\theta)\le-\eta\}$ with nonempty interior with the following property. If a Wasserstein gradient flow $\mu_t$ satisfies $\|h^2(\mu_{t_0})-\nu\|_{BL}<\epsilon$ and $\mu_{t_0}(\{r\theta:r>0,\theta\in K\})>0$, then for some $t_1>t_0$,

$$\|h^2(\mu_{t_1})-\nu\|_{BL}\ge\epsilon.$$

The resulting escape time is finite and depends on the positive mass and its initial radial lower bound; no uniform escape time over all initial laws is asserted.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-two-homogeneous-measure-projection`, `lem-mean-field-projection-identities`, `lem-mean-field-first-variation-and-measure-optimality`, `lem-two-homogeneous-projection-limit-is-stationary`, `lem-characteristics-unique-and-stable`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `def-axiom-of-choice`.
**Axiom branch:** AC is inherited from the flow, characteristic, and minimum-norm selection suppliers; the regular-sublevel, differential-inequality, and BL-growth arguments are choice-free.
**Source results and dispositions:** S1: included — Negative regular sublevels force two-homogeneous projection escape; S3: included — Negative regular sublevels force two-homogeneous projection escape.
Item reference locators: [Chizat and Bach, Proposition C.1 and Lemma C.2](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `thm-mean-field-particle-time-limits-interchange` — ready
**Title / placement:** Particle number and training time limits interchange qualitatively; page `mean-field-training-and-feature-learning`; dependency level 13; item `items/thm-mean-field-particle-time-limits-interchange.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC and the feature-energy hypotheses. Let $\mu_t$ be a Wasserstein gradient flow from $\mu_0$ concentrated on a common cutoff $Q_{r_0}$, with $F(\mu_t)\to F^*:=\inf_{\lambda\ge0}F(\lambda)$. For each $m\ge1$, let $\mu_{m,t}$ be a finite-particle gradient flow for the same objective, with $\mu_{m,0}$ concentrated on $Q_{r_0}$ and $W_2(\mu_{m,0},\mu_0)\to0$. Assume that for every fixed $t$, $W_2(\mu_{m,t},\mu_t)\to0$ as $m\to\infty$, with both laws concentrated on a common cutoff for that finite time. Then both iterated limits exist and

$$\lim_{t\to\infty}\lim_{m\to\infty}F(\mu_{m,t})=\lim_{m\to\infty}\lim_{t\to\infty}F(\mu_{m,t})=F^*.$$

This is qualitative and gives no rate uniform in $m$ or $t$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `thm-finite-particle-flows-converge-in-w2`, `thm-localized-wasserstein-flow`, `lem-feature-energy-continuous-under-w2-on-a-common-cutoff`, `def-wasserstein-two-space-and-couplings`, `def-axiom-of-choice`.
**Axiom branch:** AC is inherited from the finite-particle convergence theorem and the optimal-coupling construction.
**Source results and dispositions:** S1: included — Particle number and training time limits interchange qualitatively; S3: included — Particle number and training time limits interchange qualitatively.
Item reference locators: [Chizat and Bach, Lemma C.15](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `thm-partial-homogeneous-projected-limit-is-global-minimizer` — escalated
**Title / placement:** A partially homogeneous signed projection limit is a minimizer; page `mean-field-training-and-feature-learning`; dependency level 13; item `items/thm-partial-homogeneous-projected-limit-is-global-minimizer.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Require dense regular values for every relevant $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every relevant $f$, or (ii) $\Theta=\mathbb R^{d-1}$ and each $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Let $\mu_t$ be a Wasserstein gradient flow whose initial support is contained in $[-r_0,r_0]\times\Theta$ and separates the faces $\{-r_0\}\times\Theta$ and $\{r_0\}\times\Theta$. If $h^1(\mu_t)$ converges weakly as finite signed measures to $\nu$, the retained projected-limit claim is that $\nu$ globally minimizes the relaxed objective $J$ and $F(\mu_t)\to J(\nu)=\inf_\lambda J(\lambda)=\inf_{\mu\ge0}F(\mu)$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-partial-one-homogeneous-measure-projection`, `def-partial-homogeneous-relaxed-objective`, `lem-partial-homogeneous-projection-limit-is-stationary`, `lem-partial-relaxed-objective-signwise-optimality`, `lem-partial-homogeneous-escape-from-nonoptimal-projection`, `lem-partial-negative-weight-crossing-time`, `lem-flow-preserves-box-separation`, `lem-mean-field-projection-identities`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `def-axiom-of-choice`.
**Axiom branch:** AC is inherited from the flow, characteristic and boundary-degree constructions; the finite-mass comparison is choice-free.
**Source results and dispositions:** S1: included — A partially homogeneous signed projection limit is a minimizer; S3: included — A partially homogeneous signed projection limit is a minimizer.
Item reference locators: [Chizat and Bach, Theorem 3.5 and Theorem C.17](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Theorem 11.2.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** Owner escalation: Escalated: depends on unresolved signwise stationarity and both-sign escape suppliers. Independently, weak signed h^1 convergence does not determine the penalty integral: equal-projection lifts have penalties 1 and 3 when Vtilde(theta)=1. A dynamical penalty-convergence result is required for F(mu_t) to converge to J(nu).

### `cor-partial-homogeneous-wasserstein-limit-is-global-minimizer` — escalated
**Title / placement:** A W2 limit in the partial one-homogeneous case is globally minimizing; page `mean-field-training-and-feature-learning`; dependency level 14; item `items/cor-partial-homogeneous-wasserstein-limit-is-global-minimizer.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume the full partially one-homogeneous hypotheses, one of the two source boundary alternatives, and the separated bounded-box initialization in the preceding projected-limit theorem. If the Wasserstein gradient flow $\mu_t$ converges in $W_2$ to $\mu_\infty\in\mathcal P_2(\mathbb R\times\Theta)$, then $\mu_\infty$ is a global minimizer of $F$ over finite nonnegative measures.
```
**Direct dependency IDs:** `thm-partial-homogeneous-projected-limit-is-global-minimizer`, `lem-w2-convergence-implies-homogeneous-projection-convergence`, `lem-partial-energy-continuous-under-w2`, `def-partial-homogeneous-relaxed-objective`, `def-axiom-of-choice`.
**Axiom branch:** AC is inherited from the flow and coupling construction.
**Source results and dispositions:** S1: included — A W2 limit in the partial one-homogeneous case is globally minimizing; S3: included — A W2 limit in the partial one-homogeneous case is globally minimizing.
Item reference locators: [Chizat and Bach, Theorem 3.5](https://arxiv.org/pdf/1805.09545).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** Owner escalation: Escalated: the conditional W2 argument is complete, but the asserted conclusion depends on the partial projected-limit theorem, whose signwise stationarity, escape, and penalty-convergence obligations remain unresolved. The theorem-dependent claim is therefore not ready.

### `thm-two-homogeneous-projected-limit-is-global-minimizer` — ready
**Title / placement:** A separating two-homogeneous flow has globally minimizing projection limits; page `mean-field-training-and-feature-learning`; dependency level 14; item `items/thm-two-homogeneous-projected-limit-is-global-minimizer.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume AC and the full two-homogeneous hypotheses on $\Omega=\mathbb R^d$, $d\ge2$: convex differentiable risk with the prescribed derivative bounds, positive two-homogeneity of $\Phi,V$, the dense-regular-value condition, and the feature-energy assumptions. Let $\mu_t$ be a Wasserstein gradient flow whose initial support is compact, lies in $B(0,r_b)$, and separates $r_a\mathbb S^{d-1}$ from $r_b\mathbb S^{d-1}$ for $0<r_a<r_b$. If $h^2(\mu_t)$ converges weakly as finite measures on $\mathbb S^{d-1}$ to $\nu$, then the measure $\nu$ viewed on $\mathbb R^d$ is a global minimizer of $F$ over finite nonnegative Borel measures, and $F(\mu_t)\to F(\nu)=\inf_{\lambda\ge0}F(\lambda)$.
```
**Direct dependency IDs:** `def-feature-measure-energy`, `def-wasserstein-gradient-flow-for-feature-energy`, `def-two-homogeneous-measure-projection`, `lem-mean-field-projection-identities`, `lem-mean-field-first-variation-and-measure-optimality`, `lem-two-homogeneous-projection-limit-is-stationary`, `lem-two-homogeneous-escape-from-nonoptimal-projection`, `lem-flow-preserves-spherical-separation`, `thm-global-wasserstein-flow-existence-uniqueness-and-stability`, `def-axiom-of-choice`, `cor-ascoli-arzela-for-compact-metric-domains`.
**Axiom branch:** AC is inherited from the flow, characteristic, degree, and minimum-norm constructions; the limiting contradiction itself uses no further choice.
**Source results and dispositions:** S1: included — A separating two-homogeneous flow has globally minimizing projection limits; S3: included — A separating two-homogeneous flow has globally minimizing projection limits.
Item reference locators: [Chizat and Bach, Theorem 3.3 and Theorem C.16](https://arxiv.org/pdf/1805.09545); [Ambrosio, Gigli, and Savaré, Theorem 11.2.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.

### `cor-two-homogeneous-wasserstein-limit-is-global-minimizer` — ready
**Title / placement:** A W2 limit in the two-homogeneous case is globally minimizing; page `mean-field-training-and-feature-learning`; dependency level 15; item `items/cor-two-homogeneous-wasserstein-limit-is-global-minimizer.md`.
**Exact claim and conventions** (copied from the complete Statement section):
```markdown
Assume the full two-homogeneous hypotheses and separated compact initialization in the preceding global-minimizer theorem. If the Wasserstein gradient flow $\mu_t$ converges in $W_2$ to $\mu_\infty\in\mathcal P_2(\mathbb R^d)$, then $\mu_\infty$ is a global minimizer of $F$ over finite nonnegative measures.
```
**Direct dependency IDs:** `thm-two-homogeneous-projected-limit-is-global-minimizer`, `lem-w2-convergence-implies-homogeneous-projection-convergence`, `def-two-homogeneous-measure-projection`, `lem-mean-field-projection-identities`, `def-axiom-of-choice`.
**Axiom branch:** AC is inherited from the flow and coupling construction.
**Source results and dispositions:** S1: included — A W2 limit in the two-homogeneous case is globally minimizing; S3: included — A W2 limit in the two-homogeneous case is globally minimizing.
Item reference locators: [Chizat and Bach, Theorem 3.3](https://arxiv.org/pdf/1805.09545).
**Validation:** included in the batch-wide scoped checks above.
**Decision / next action:** No unresolved local prerequisite; hand off for independent review. Step 1 readiness is not approval.
