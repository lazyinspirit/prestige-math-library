# Step 3a Reader Report — batch 4

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: reader  
Date: 2026-10-21

## Verdict

Both assigned pages are structurally clean: their Markdown bodies are empty, the A-page item inventory matches the batch manifest, and the B page lists the two assigned examples and requires the A page. No edits were made. The four assigned items' definitions, statement, examples, computations, proof steps, and reference placement have no confirmed mathematical or editorial defect.

The remaining defects are in published suppliers and are reported for owner routing. They are statement/definition hyperlink-placement violations; the reviewed mathematics remains usable for the assigned claims. No blocker was identified.

## Opened inventory

### Assigned pages

- library/inverse-problems/operator-approximation-and-regularization-error.md — A page; draft; items def-ip-error-budget-for-computed-inversion and prop-ip-regularized-output-error-splits-by-source; empty body.
- library/inverse-problems/operator-approximation-and-regularization-error-examples.md — B page; draft; examples ex-ip-mesh-sequence-small-singular-values and ex-ip-iterative-tikhonov-solve-stopped-with-residual; empty body.
- Checked the A page's three requires targets and the B page's A-page requirement. The referenced page carriers exist and their page IDs match the requirement IDs.

## Page verdicts

- operator-approximation-and-regularization-error: pass. Its YAML inventory matches the assigned A-page manifest; the body is empty.
- operator-approximation-and-regularization-error-examples: pass. Its examples match the assigned B-page manifest; it requires the assigned A page; the body is empty.

### Assigned items and supplier order

1. items/def-ip-compact-linear-inverse-model.md — current-run draft supplier. Its direct definition suppliers opened: items/def-compact-linear-operator.md, items/def-hilbert-space.md, and items/def-ip-forward-map-and-solution-classes.md.
2. items/def-ip-error-budget-for-computed-inversion.md.
3. Published proposition suppliers opened: items/cor-inner-product-induces-a-norm.md, items/def-countable-choice.md, items/def-hilbert-space-adjoint.md, items/def-operator-norm.md, items/lem-hilbert-tikhonov-normal-operator-invertible.md, items/lem-hilbert-tikhonov-noise-amplification-bound.md, items/lem-computed-augmented-tikhonov-solve-residual-and-output-error.md, items/thm-tikhonov-error-chain-with-discretization-and-residual.md, and items/thm-tikhonov-forward-discretization-and-stopping-coupling.md.
4. items/prop-ip-regularized-output-error-splits-by-source.md.
5. Published example supplier items/lem-finite-rank-operators-are-compact.md.
6. items/ex-ip-mesh-sequence-small-singular-values.md.
7. items/ex-ip-iterative-tikhonov-solve-stopped-with-residual.md.

## Mathematical review

- def-ip-error-budget-for-computed-inversion: the five vector terms are well-defined under the stated supplied adjoints and explicitly assumed bijectivity of both shifted normal operators. The equality $d_h=y_\delta-y_{h,\delta}$ follows from the shared perturbation $e$. The definition explicitly declines to provide rates or a residual certificate.
- prop-ip-regularized-output-error-splits-by-source: the five-term identity telescopes to $x^\dagger-\widetilde x_h$. The data and pre-inversion estimates use the $1/(2\sqrt{\lambda})$ bound; the solve estimate follows by applying the $1/\lambda$ inverse bound to the exact normal residual. The operator estimate is correctly conditional on the stated operator-norm bound. The proposition does not infer a convergence rate.
- ex-ip-mesh-sequence-small-singular-values: the last diagonal component of the exact Tikhonov output is $n^2/(n^2+1)$; it tends to $1$ while $\delta_n=1/n\to0$. Since $A_n=A_{h,n}$, $x_n^\dagger=0$, and the returned output is exact, the stated zero channels and sole data channel are correct. The general noise allowance evaluates to $n/2$.
- ex-ip-iterative-tikhonov-solve-stopped-with-residual: $A_h^*A_h+\lambda I=2I$, one Richardson step returns $1/4$, and the exact residual is $1/2$. The bias, data, operator, and pre-inversion channels vanish; the solve-channel norm and reconstruction error are both $1/4$.
- The complete statements and definitions in the assigned items contain no hyperlinks. Their references follow the complete section, with one source per paragraph. Proof steps are separated, tagged, and punctuated before the tags; every final step ends in [tags] ∎. No TikZ/tikzcd diagrams occur, and no diagram is needed for these operator identities.
- The cited background was checked directly: Clason, Regularization of Inverse Problems, arXiv:2001.00617v2, Chapter 6, equations (6.1) and (6.4), and §8.2, Theorem 8.8 (PDF pp. 58–64 and 79), https://arxiv.org/pdf/2001.00617v2; Hansen, Introduction to Inverse Problems, Chapter 5, slides 2–5, https://people.compute.dtu.dk/pcha/DIP/chap5.pdf; van Leeuwen and Brune, 10 Lectures on Inverse Problems and Imaging, Chapter 3, §§3.4.1–3.4.2, https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html. These support the Tikhonov formula, bias/data split, and small-singular-value/noise context. The displayed five-channel identities and diagonal examples are derived locally in the assigned carriers.

## Uneditable findings

All findings below concern published dependencies and are outside this reader's write scope. For each, the needed repair is to keep the complete statement/definition uninterrupted and move the existing wikilinks into an immediately following references section, preserving the logical references and wording.

| Subject | Exact location | Assigned consumer | Defect |
|---|---|---|---|
| def-compact-linear-operator | ## Definition, first paragraph and subsequent definition paragraphs; inline links occur at lines 23–29, 33, 45, 47–48, 54, and 57. | def-ip-error-budget-for-computed-inversion | The Definition is interrupted by wikilinks; it has no following Definition references section. |
| cor-inner-product-induces-a-norm | ## Statement, line 25, in the final clause defining the norm over ℝ and ℂ. | prop-ip-regularized-output-error-splits-by-source | The Statement contains two inline wikilinks; it has no following Statement references section. |
| def-hilbert-space-adjoint | ## Definition, lines 28 and 32, within the boundedness and Riesz-representation clauses. | prop-ip-regularized-output-error-splits-by-source | The Definition contains inline wikilinks; they interrupt the complete definition. |
| def-operator-norm | ## Definition, lines 35 and 42, in the boundedness and supremum-existence clauses. | prop-ip-regularized-output-error-splits-by-source | The Definition contains inline wikilinks; it has no following Definition references section. |
| lem-hilbert-tikhonov-noise-amplification-bound | ## Statement, line 45, in “which is well-defined by …”. | prop-ip-regularized-output-error-splits-by-source | The Statement contains an inline wikilink; it has no following Statement references section. |
| lem-computed-augmented-tikhonov-solve-residual-and-output-error | ## Statement, lines 31 and 35, in the residual-certificate and backend-hypothesis clauses. | prop-ip-regularized-output-error-splits-by-source | The Statement contains inline wikilinks; it has no following Statement references section. |
| thm-tikhonov-error-chain-with-discretization-and-residual | ## Statement, lines 50 and 77, in the normal-operator and finite-matrix clauses. | prop-ip-regularized-output-error-splits-by-source | The Statement contains inline wikilinks; it has no following Statement references section. |
| lem-finite-rank-operators-are-compact | ## Statement, lines 27–29, in the boundedness, finite-basis, and compactness clauses. | ex-ip-mesh-sequence-small-singular-values (the other assigned example also depends on it) | The Statement contains inline wikilinks; it has no following Statement references section. |

## Edits, checks, and limitations

- Edits: none. No assigned carrier had a confirmed defect requiring repair.
- Proof contracts and verification.judge: unchanged because no item was materially edited.
- Reflow, precheck, and node tools/proof-layout.mjs: not run because no item was changed. No tests or gates were run.
- The transitive metadata closure expands to 934 items. This review opened the assigned carriers, their direct mathematical suppliers, the additional model definitions needed to interpret the assigned definition, and the cited background passages listed above; it did not independently re-audit every remote foundational item in that broad closure. No claim of whole-closure review is made.
- Run status was read from .autopilot/inverse-problems-knot-theory-all-109-2026-10-19; this batch's 3a reader result was still uncollected. No run state or unrelated carrier was changed.
