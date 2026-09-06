# frontier-31 batch-16 — Beta scaffold notes

## Scope and seam decision

The task-authorised pair is A `verma-modules-and-shapovalov-forms` at plan
order 510.003 and B `verma-modules-and-shapovalov-forms-examples` at 510.004.
The manifest follows the generated plan's A-page requirement
`harish-chandra-isomorphism-casimir-and-central-characters-examples` and the
B-to-A edge exactly.

There is a recorded design/spec discrepancy, deliberately not adjudicated here:
the RL-2 design's later “Declared requires by pair” table names the older
DG-27/DG-30/DG-32 interfaces, whereas the current `plan-spec.json` declares
only the immediately preceding Harish--Chandra examples page. The design gives
no competing numeric order. The manifest uses the current plan's prerequisite
edge, and its item graph refers only to published item interfaces already
available through that plan history. No plan edge or item outside this batch was
changed.

The A inventory is the design's 17-item inventory (well below the 60-item split
threshold); B has its specified 6 finite checks. No item id was present in the
current scaffold or published-item searches before this inventory was added.

## Fixed conventions and boundaries

- Throughout, \(\mathfrak g\) is a finite-dimensional complex semisimple Lie
  algebra with fixed \(\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus
  \mathfrak n^+\), \(\mathfrak b=\mathfrak h\oplus\mathfrak n^+\), positive
  roots \(\Phi^+\), and highest-weight convention \(\mathfrak n^+v_\lambda=0\).
- \(\mathbb C_\lambda\) has \(\mathfrak n^+\) acting by zero and
  \(h\) acting by \(\lambda(h)\); \(M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}
  \mathbb C_\lambda\). There is no unannounced \(\rho\)-shift in this notation.
- The dot action is \(w\mathbin\cdot\lambda=w(\lambda+\rho)-\rho\).
  The fixed Chevalley anti-involution is \(\tau(e_i)=f_i\),
  \(\tau(f_i)=e_i\), and \(\tau(h)=h\); it is not the Cartan involution.
- The normalized Shapovalov form has \(\langle v_\lambda,v_\lambda\rangle=1\).
  Its determinant is only defined up to a nonzero scalar until bases are fixed.
  Formal characters live in the completed formal-series ring supported in a
  finite union of downward \(Q^+\)-cones; the product is not an analytic claim.
- This pair does not assert positivity or unitarity. The B counterexample takes
  a negative \(\mathfrak{sl}_2\) norm explicitly. It also does not build Verma
  embeddings, strong linkage, category \(\mathcal O\), or finite-dimensional
  highest-weight classification; the coverage ledger assigns them to RL-3/RL-4
  or gives a result-specific out-of-scope reason.

## Verified source register and repairs

The complete, per-heading harvest with dispositions is in
`frontier-31-batch-16.coverage.json`. Each URL was opened as its full PDF and
the exact stated range was read. The local full-body validator was also invoked
but its resolver returned `EAI_AGAIN` for every external hostname; this is an
environment DNS failure, not an HTTP failure. The coverage records therefore
carry the web-reader verification, document page count, and the failed local
method explicitly; the web reader confirmed the live full PDFs.

| label | independently authored treatment, exact live locator | support used here |
| --- | --- | --- |
| E755 | Pavel Etingof, *18.755 Lie Groups and Lie Algebras II*, [live PDF](https://live.ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf), ToC §25 and §25.2, printed pp. 134–136 through Corollary 25.13 | Definition 25.6; PBW Proposition 25.7; weights Corollary 25.9; universal Proposition 25.10; quotient Proposition 25.12. |
| Liu | Mrudul Thatte, *Category O: Verma's Thesis*, [PDF](https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf), pp. 1–5, complete §§1–5 | Definition 1.1 and Proposition 1.2; §1.2 rank-one formulas; Theorem 1.3; Example 2.2; Theorems 3.1, 4.1, 4.2; Example 4.3; Corollary 4.4; Theorem 5.1. |
| E757-8 | Pavel Etingof, *18.757 Representations of Lie Groups*, [full PDF](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf), ToC §8 and pp. 41–47 | Definition 8.4 through Proposition 8.9; Exercises 8.11, 8.14, and 8.15. The determinant is Exercise 8.15(iv)–(xi), pp. 45–47. |
| E757-15 | the same E757 treatment, §15.1, p. 79 through its formal-character paragraph and displayed \(\operatorname{ch}M(\lambda)\) product | the completed character convention and the Verma formal-character identity. |

The source repair is material: the design ledger's references to Liu §§3–5 as
a determinant treatment are not borne out by the six-page live document; its
form is in §1 and its §§3–5 are maps, simplicity/embeddings, and blocks. The
independent determinant route is the live E757 Exercise 8.15(iv)–(xi), not
E757 §8.3. The coverage file faithfully records the live headings and puts
every result from the read ranges into an included, inline, already-published,
deferred, or result-specific out-of-scope disposition.

## Item ledger: exact claim, dependencies, source, and authoring route

The following is the checkpoint for every planned item. Dependency lists match
the manifest exactly; source abbreviations refer to the register above.

| item | exact claim and direct deps | source support and proposed proof route |
| --- | --- | --- |
| `def-one-dimensional-borel-module-of-weight-lambda` | Define \(\mathbb C_\lambda\); deps: `thm-triangular-decomposition-from-a-chosen-positive-root-system`. | E757-8 Remark 8.6. State the action and verify the Lie brackets act consistently. |
| `def-verma-module` | Define induced \(M(\lambda)\); deps: `def-universal-enveloping-algebra-as-a-tensor-quotient`, `def-one-dimensional-borel-module-of-weight-lambda`. | E755 Definition 25.6, E757-8 Definition 8.4. Give the induced and quotient models and their canonical highest vector. |
| `thm-universal-property-of-verma-modules` | A weight-\(\lambda\) vector killed by \(\mathfrak n^+\) gives a unique \(M(\lambda)\to V\); deps: `def-verma-module`, `def-highest-weight-vector-and-cyclic-highest-weight-module`. | E755 Proposition 25.10, E757-8 Proposition 8.8. Descend the map from \(U(\mathfrak g)\) through the Borel relations. |
| `thm-pbw-model-of-a-verma-module` | Multiplication identifies \(U(\mathfrak n^-)\) with \(M(\lambda)\); deps: `def-verma-module`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`. | E755 Proposition 25.7, E757-8 Proposition 8.5. Factor the triangular PBW isomorphism through the inducing character. |
| `prop-weights-of-a-verma-module-lie-below-lambda` | Weights are \(\lambda-Q^+\), with finite-dimensional spaces and one-dimensional top; deps: `thm-pbw-model-of-a-verma-module`. | E755 Corollary 25.9, E757-8 Corollary 8.7. Grade PBW monomials by positive-root sum and count partitions. |
| `prop-formal-character-of-a-verma-module` | \(\operatorname{ch}M(\lambda)=e^\lambda\prod_{\alpha>0}(1-e^{-\alpha})^{-1}\); deps: `thm-pbw-model-of-a-verma-module`, `prop-weights-of-a-verma-module-lie-below-lambda`. | E757-15 formal-character paragraph. Enumerate PBW monomials in the stated completion. |
| `lem-a-proper-verma-submodule-misses-the-highest-weight-line` | A proper submodule has zero intersection with \(\mathbb Cv_\lambda\); deps: `def-verma-module`. | E755 Proposition 25.12 proof. A nonzero top-line vector generates all of \(M(\lambda)\). |
| `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper` | The sum of all proper submodules is proper; deps: `lem-a-proper-verma-submodule-misses-the-highest-weight-line`, `prop-weights-of-a-verma-module-lie-below-lambda`. | E755 Proposition 25.12 proof. Use the top weight boundary after decomposing each submodule by weights. |
| `thm-verma-module-has-a-unique-simple-quotient` | The preceding sum is the unique maximal submodule and \(L(\lambda)\) the unique simple quotient; deps: `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper`. | E755 Proposition 25.12, E757-8 Proposition 8.9. Quotient by the maximal sum and factor every simple quotient through it. |
| `lem-every-nonzero-verma-submodule-contains-a-singular-vector` | A maximal weight in any nonzero submodule is singular; deps: `prop-weights-of-a-verma-module-lie-below-lambda`, `def-highest-weight-vector-and-cyclic-highest-weight-module`. | The maximal-weight argument used in E757-15 §15.1. Choose minimum positive-root height in the submodule support. |
| `def-chevalley-contravariant-form` | Define symmetry and \(\langle xu,v\rangle=\langle u,\tau(x)v\rangle\); deps: `thm-triangular-decomposition-from-a-chosen-positive-root-system`, `def-highest-weight-vector-and-cyclic-highest-weight-module`. | Liu Definition 1.1. State the fixed \(\tau\) before the invariance identity. |
| `thm-existence-and-uniqueness-of-the-shapovalov-form` | \(M(\lambda)\) has one normalized symmetric contravariant form; deps: `def-chevalley-contravariant-form`, `def-verma-module`, `thm-pbw-model-of-a-verma-module`. | Liu Theorem 1.3. Use triangular PBW/Harish--Chandra projection to define the form, verify its descent and contravariance, then use cyclicity for uniqueness. |
| `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal` | Distinct weight spaces pair to zero; deps: `def-chevalley-contravariant-form`, `thm-existence-and-uniqueness-of-the-shapovalov-form`. | Liu Proposition 1.2(a). Compare the two values of \(\langle hu,v\rangle\). |
| `prop-the-shapovalov-radical-is-the-maximal-submodule` | The form radical equals the unique maximal proper submodule; deps: `thm-existence-and-uniqueness-of-the-shapovalov-form`, `thm-verma-module-has-a-unique-simple-quotient`. | Liu Proposition 1.2(b), Theorem 1.3. Contravariance makes the radical a submodule; normalize at the top and use quotient uniqueness in both directions. |
| `def-shapovalov-determinant-on-a-weight-space` | Define the block determinant at \(\lambda-\nu\), up to nonzero basis scalar; deps: `thm-existence-and-uniqueness-of-the-shapovalov-form`, `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal`, `prop-weights-of-a-verma-module-lie-below-lambda`. | E757-8 Exercise 8.15(iv). Restrict to the finite PBW block and record the basis dependence. |
| `thm-shapovalov-determinant-formula` | \(D_\nu(\lambda)\doteq\prod_{\alpha>0}\prod_{n\ge1}(\langle\lambda+\rho,\alpha^\vee\rangle-n)^{K(\nu-n\alpha)}\); deps: `def-shapovalov-determinant-on-a-weight-space`, `def-weyl-vector-rho-for-a-chosen-positive-system`, `def-root-reflections-and-the-weyl-group-action`, `prop-casimir-eigenvalue-on-a-highest-weight-module`. | E757-8 Exercise 8.15(v)–(x), after (iv)'s definition. Prove leading PBW term, constrain factors, then use the generic hyperplane deformation/Casimir argument to obtain the Kostant exponents. |
| `cor-verma-irreducibility-criterion-from-shapovalov-determinants` | \(M(\lambda)\) is simple iff no \(\langle\lambda+\rho,\alpha^\vee\rangle\) is a positive integer; deps: `prop-the-shapovalov-radical-is-the-maximal-submodule`, `thm-shapovalov-determinant-formula`. | E757-8 Exercise 8.15(xi), Liu Theorem 4.1. All finite blocks are nondegenerate exactly off those hyperplanes, so the radical vanishes. |
| `ex-sl2-verma-action-in-the-pbw-basis` | Derive \(ef^nv=n(\lambda-n+1)f^{n-1}v\), including \(n=0\); deps: `def-verma-module`, `thm-pbw-model-of-a-verma-module`. | Liu §1.2. Induct using \([e,f]=h\). |
| `ex-sl2-shapovalov-norm-product` | \(\langle f^nv,f^nv\rangle=n!\prod_{j=0}^{n-1}(\lambda-j)\); deps: `thm-existence-and-uniqueness-of-the-shapovalov-form`, `ex-sl2-verma-action-in-the-pbw-basis`. | Liu §1.2. Apply contravariance and the preceding action recurrence. |
| `ex-sl2-reducible-and-generic-verma-modules` | Reducible exactly for \(\lambda\in\mathbb Z_{\ge0}\), with both generic and boundary directions shown; deps: `cor-verma-irreducibility-criterion-from-shapovalov-determinants`, `ex-sl2-verma-action-in-the-pbw-basis`. | Liu Example 4.3 and E757-8 Exercise 8.11. Read the singular power and the criterion in rank one. |
| `ex-an-a2-verma-weight-space-of-dimension-two` | Exhibit the two PBW vectors at \(\lambda-\alpha_1-\alpha_2\); deps: `def-verma-module`, `thm-pbw-model-of-a-verma-module`. | Direct PBW calculation, as designated by the design. Use an ordered root-vector basis; no later dependency may cite this example. |
| `cex-the-shapovalov-form-is-not-positive-definite-in-general` | Give a negative normalized \(\mathfrak{sl}_2\) norm; deps: `ex-sl2-shapovalov-norm-product`. | Direct specialization of the prior product, as designated by the design. For \(\lambda=-1\), \(\langle fv,fv\rangle=-1\). |
| `ex-finite-dimensional-sl2-quotient-of-a-verma-module` | For \(m\ge0\), \(L(m)=M(m)/M(-m-2)\) has dimension \(m+1\); deps: `thm-verma-module-has-a-unique-simple-quotient`, `ex-sl2-verma-action-in-the-pbw-basis`, `ex-sl2-reducible-and-generic-verma-modules`. | Liu Example 2.2 and E757-8 Exercise 8.11. Identify the singular-vector submodule and list the surviving PBW basis. |

## Known limits and authoring obligations

The formula is only scalar-normalized, and the displayed product is finite on
each \(\nu\) because \(K(\nu-n\alpha)=0\) eventually. At authoring, the
determinant proof may not cite “the Shapovalov formula” as a black box: it must
make the PBW leading-term, factor-hyperplane, deformation, and exponent steps
visible in the proof of this already-scaffolded theorem. If that proof cannot
be made self-contained from the listed predecessors, that is an authoring
blocker to record rather than a license to weaken the formula or remove a
needed lemma. The form proof must similarly establish the induced-form descent,
not merely name Harish--Chandra projection.

No unresolved item, source-disposition, page split, or mathematical dependency
obligation is left in this scaffold. The networked liveness runner has an
environmental DNS condition recorded below; it must be rerun in a resolver that
can reach the already web-verified hosts, but it does not justify re-sourcing
the live documents.

## Validation record

- PASS — `node tools/coverage-checklist.mjs research/frontier-31-batch-16.coverage.json --require-destination`: 1 A page, 68 harvested results, 0 errors, 0 warnings.
- PASS — `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-16.coverage.json`: 4/4 sources have recorded full-text verification.
- PASS — `node tools/manifest-deps.mjs research/frontier-31-batch-16.pages.json`: 23 items, 0 normalized, 0 errors.
- PASS — `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-16.pages.json`: 23 scoped items, 0 errors, 0 warnings.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: declared page order, item dependencies, and ids are consistent (its existing advisory redundant-prerequisite output is unrelated to this batch).
- NOT ENVIRONMENTALLY RUNNABLE — `node tools/url-sweep.mjs ... --recover --fail-on-dead` reported `curl: (6) Could not resolve host` for all three distinct source hosts, and consequently `source-backing.mjs` reported 16 results without an *openable by that local sweep* URL. The exact three full PDFs opened in the web reader immediately before this check, with page counts 284, 6, and 162; no URL was dead and no replacement is warranted. The DNS-based liveness/source-backing pair should be rerun in a networked validation environment.
- WHOLE-RUN POLICY — `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-*.pages.json` reported 6 missing-dependency errors in other in-flight batch manifests, all concerning group-homology/group-cohomology ids. Batch 16's focused policy check above is clean; those artifacts were not changed.
