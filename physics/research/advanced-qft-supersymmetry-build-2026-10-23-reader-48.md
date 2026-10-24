# Step 3a reader report — batch 48

- Run: `advanced-qft-supersymmetry-build-2026-10-23`
- Role: reader (`reader-48`)
- Scope: batch `48`
- Report: `research/advanced-qft-supersymmetry-build-2026-10-23-reader-48.md`

## Opened inventory

Assigned pages:

- `qftx-qexact-field-theory-localization` — `library/advanced-qft-and-supersymmetry/qftx-qexact-field-theory-localization.md`
- `qftx-qexact-field-theory-localization-examples` — `library/advanced-qft-and-supersymmetry/qftx-qexact-field-theory-localization-examples.md`

Both pages are draft, preserve `page_layout: compact-v1`, have empty Markdown bodies, and list the items in the batch manifest. The A page lists the fluctuation-data definition and Ward-identity theorem; the B page lists the two assigned examples.

Assigned items, reviewed against the current files:

- `def-qftx-supersymmetry-fluctuation-complex`
- `pthm-qftx-qexact-localization-ward-identity`
- `ex-qftx-finite-regulator-torus-ward-identity`
- `ex-qftx-qexact-boundary-term`

Direct and claim-relevant prerequisite items opened:

- `def-qftx-susy-background-data`
- `def-finite-dimensional-q-exact-localization-data`
- `post-qftx-rigid-supersymmetric-background`
- `thm-finite-dimensional-q-exact-deformation-invariance`
- `post-qftx-n4-super-yang-mills-model`
- `def-torus-equivariant-cohomology-cartan-model`
- `thm-differentiation-under-the-integral-sign`
- `def-derivative`
- `cor-zero-derivative-implies-constant`
- Statement sections of `thm-dominated-convergence`, `cor-mean-value-theorem`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, and `lem-rat-embeds-dense`, as used by the finite-dimensional mathematical theorem.

The assigned pages’ immediate page prerequisites were also opened: `qftx-susy-backgrounds` and `qftx-finite-q-exact-localization`. The batch-48 proof-contract file was examined for all four assigned items.

## Source review

- [Pestun, *Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops*](https://arxiv.org/pdf/0712.2824), §§1–3, especially the stated unconstructed $S^4$ noncommutative-regulator extension in §1, off-shell transformations and auxiliary-field closure in §2, equations (2.26)–(2.30), and the $S+tQV$ discussion in §3, equations (3.1)–(3.3). The paper explicitly treats the $S^4$ regulator extension as an assumption.
- [Pestun and Zabzine, *Introduction to Localization in Quantum Field Theory*](https://arxiv.org/pdf/1608.02953), §1, PDF pp. 1–3: finite-dimensional ΠTM deformation and Stokes argument, the distinct $t\to\infty$ saddle step, and the formal status and determinant difficulties of infinite-dimensional extensions.
- [Schwarz and Zaboronsky, *Supersymmetry and Localization*](https://arxiv.org/pdf/hep-th/9511112), §2 and §3, PDF pp. 2–7: the ΠTM differential-form model, canonical volume/divergence discussion, and the compact-supermanifold hypotheses for their localization theorem. The batch theorem does not import their fixed-locus theorem as a proof.
- [Folland, *Real Analysis*, 2nd ed.](https://djvu.online/file/NPF4BEtSuqdFA), §2.27(b), printed pp. 55–56, is cited by the mathematical differentiation supplier for the uniform-majorant differentiation result; the batch’s use was checked against that supplier’s explicit statement and proof.

## Review and page verdicts

### `qftx-qexact-field-theory-localization`

No page defect identified. Its item inventory and prerequisite pages agree with the manifest. The page body is empty as required. The definition gives explicit graded field data, the gauge-fixed $Q^2$ action, operator domains, ellipticity terminology, and finite-dimensional-regulator data without claiming that a continuum measure or regulator exists. Its definition references follow the complete Definition.

### `qftx-qexact-field-theory-localization-examples`

No page defect identified. Its example inventory and required A/math pages agree with the manifest. The page body is empty as required.

### `def-qftx-supersymmetry-fluctuation-complex`

No defect identified. The finite-dimensional regulator is explicitly extra data and is not identified with Pestun’s formal $S^4$ construction. The definition specifies the graded fields, gauge-fixed transformation and square, fluctuation operator, domains, zero modes, and determinant conventions. It asserts no ellipticity, determinant evaluation, regulator existence, continuum measure, or empirical result. Its cited references are placed after the uninterrupted Definition.

### `pthm-qftx-qexact-localization-ward-identity`

No defect identified. The theorem’s assumptions match `thm-finite-dimensional-q-exact-deformation-invariance`: the finite-dimensional differential-form algebra, Q-closed $S,O$, the $Q^2V$ condition, integrated Q-invariance on $OV E_t$, pointwise differentiability outside a common null set, derivative measurability, and compact-parameter $L^1$ majorants are all stated. The proof applies the supplier only to the fixed sector and regulator. It does not infer nilpotence when $Q^2\ne0$, regulator existence, a continuum identity, a $t\to\infty$ limit, or empirical truth. The cited model postulate treats the $S^4$ regulator extension and measure as assumptions.

### `ex-qftx-finite-regulator-torus-ward-identity`

No defect identified. The torus is compact without boundary; $Q=d$ is an odd derivation with $Q^2=0$, the Q-boundary integral vanishes by periodicity, and the required compact-parameter majorants exist. Direct expansion gives top-degree coefficient $(\lambda-t\cos x)\,dx\wedge dy$, whose integral is $4\pi^2\lambda$.

### `ex-qftx-qexact-boundary-term`

No defect identified. The cylinder orientation and boundary are specified. Direct calculation gives $Z(t)=-2\pi t$ and $I(Q(Ve^{-tQV}))=2\pi$; the example correctly identifies the nonzero boundary flux as failure of the Q-invariance hypothesis.

### Diagram review

The only TikZ diagram in the assigned material and opened claim-relevant dependencies is the associated-space square in `def-torus-equivariant-cohomology-cartan-model`. Its quotient, projection, and orbit-map arrows have the stated domains and codomains, and both composites send $(e,p)$ to $[e]\in BT$. No diagram is needed for the four assigned items.

## Edits, uneditable defects, and blocker

- Edits: none. No confirmed defect required repair; no item or page bytes were changed.
- Confirmed or suspected defects outside this batch: none found in the reviewed claim-relevant prerequisites.
- Uneditable findings: none.
- Blocker: none.
- No judgment, verification stamp, or acceptance was added.

## Coverage note

All assigned pages and items, their direct logical suppliers used by the arguments, the cited finite-dimensional differentiation theorem and its relevant prerequisite statements, the assigned proof contracts, and the source passages named above were reviewed. I did not independently re-audit the full transitive geometric/bundle supplier closure behind `def-qftx-susy-background-data` or every proof in the published real-analysis hierarchy; those interfaces are treated as declared prerequisites, and the batch theorem uses the background and regulator only as explicit conditional inputs. No empirical evidence or statistical inference is involved in this batch.
