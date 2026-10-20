# Step 3a reader report — batch 68

- Run: `machine-learning-all-101-2026-10-19`
- Batch: `68`
- Role: reader (`reader-68`)
- Reviewed: 2026-10-19

## Opened inventory

The task manifest and reader brief were read first. Both assigned pages and all six assigned items were opened. Assigned items were reviewed in dependency order: the marginal-score definition, the probability-flow theorem and its suppliers, the reverse-time procedure and its suppliers, then the three examples and their direct suppliers.

Assigned pages:

- `score-sdes-and-reverse-time-generation` — `library/machine-learning/score-sdes-and-reverse-time-generation.md` (A page).
- `score-sdes-and-reverse-time-generation-examples` — `library/machine-learning/score-sdes-and-reverse-time-generation-examples.md` (B page).

Assigned items:

- `def-marginal-score-function`
- `thm-probability-flow-ode-marginals`
- `alg-predictor-corrector-score-sampling`
- `ex-stationary-ornstein-uhlenbeck-probability-flow`
- `ex-singular-data-score-truncation`
- `ex-vp-finite-terminal-prior-mismatch`

Direct item suppliers opened for the assigned claims included `def-law-or-distribution-of-a-random-element`, `thm-dynkin-pi-lambda`, `thm-monotone-convergence-for-the-integral`, `alg-unadjusted-langevin-algorithm`, `def-axiom-of-choice`, `def-continuous-brownian-ito-process`, `def-d-dimensional-brownian-motion`, `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, `def-brownian-motion`, `def-ito-integral-for-square-integrable-predictable-processes`, `def-independent-random-elements`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `lem-measurable-functions-preserve-independence`, `lem-normal-location-scale-density`, `cor-deterministic-ito-integrals-are-gaussian`, `thm-ito-formula-one-dimensional`, `thm-almost-sure-subsequence-from-convergence-in-probability`, `def-weak-convergence-of-borel-probability-measures`, and `thm-dominated-convergence`. For the uneditable supplier finding, I also opened `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

For the algorithm's current-run reversal path, I also opened `def-ito-sde-and-strong-solution`, `def-progressively-measurable-and-predictable-process`, `def-reversed-transition-kernels-for-diffusions`, `lem-continuous-local-martingale-quadratic-variation`, `lem-predictable-elliptic-martingale-brownian-reconstruction`, `lem-reversed-kernels-and-generator-identity`, and the current `thm-markov-diffusion-reversal-by-bayes-kernels` supplier from batch 67. Its current Statement includes AC; the earlier batch note about that missing hypothesis does not describe the reviewed bytes.

No TikZ or TikZ-CD diagram occurs in the assigned pages or items.

## Mathematical review

- `def-marginal-score-function`: the density hypothesis, pointwise domain of the logarithmic gradient, and exclusion of zero, infinite, or nondifferentiable density points are stated explicitly. Its references follow the uninterrupted Definition.
- `thm-probability-flow-ode-marginals`: under the stated classical Fokker–Planck and global-flow assumptions, the product-rule identity gives the continuity equation. The characteristic tests transport through the flow, and the compactly supported approximations of rational boxes plus the pi-lambda theorem establish equality on all Borel sets. The conclusion is correctly limited to one-time marginals.
- `alg-predictor-corrector-score-sampling`: the positive cutoff gives a score at every update time; the reverse-time shift, Euler–Maruyama noise scale, and ULA score sign are consistent. Inputs, grid, loop, and outputs are specified. The algorithm makes no convergence or exactness claim. Its supplier chain does contain the uneditable gap recorded below.
- `ex-stationary-ornstein-uhlenbeck-probability-flow`: the integrating-factor solution has variance `theta`, the displayed Gaussian is stationary, the Fokker–Planck terms cancel, and the probability-flow vector field is zero.
- `ex-singular-data-score-truncation`: the positive-time Gaussian score, singular endpoint, second moment, pathwise cutoff limit, and weak endpoint limit are correctly justified.
- `ex-vp-finite-terminal-prior-mismatch`: the integrating-factor variance is `1 - exp(-B(t))`; positivity and continuity of `beta` imply a finite terminal variance strictly between zero and one, so the standard-normal initialization has a different law.

Relevant source passages were checked against the local arguments: [Song et al., *Score-Based Generative Modeling through Stochastic Differential Equations*](https://arxiv.org/html/2011.13456), §§3.3–3.4, §§4.2–4.3, Appendix D.1, and Appendix G; [Särkkä and Solin, *Applied Stochastic Differential Equations*](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf), §5.2 Theorem 5.4 and Algorithm 8.1; and [Durmus and Moulines, *Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm*](https://arxiv.org/pdf/1507.05021v3), §1 equation (2). The ULA source gives the same Euler update and warns that fixed-step ULA need not have the exact target invariant law, consistent with the assigned algorithm's caveat.

## Edit

In `items/alg-predictor-corrector-score-sampling.md`, I formatted each item link in `Definition references` as its own labeled source line and paragraph. The explanatory prose was retained in separate link-free paragraphs. This repairs the assigned statement-reference layout without changing the algorithm or its mathematical claims. No proof contract or judge record required an update because this was not a material proof repair.

After the final item edit, the required command completed:

```text
node tools/proof-layout.mjs items/alg-predictor-corrector-score-sampling.md
proof-layout: 1 items, 0 steps, 0 defects
```

## Uneditable defect

`lem-reversed-kernels-and-generator-identity` is a draft supplier in current-run batch 67 and is outside this batch's edit scope. In Proof step 2.1 it says the “stated domination permits” the telescoping local-generator sums to converge to the finite-time martingale identity. Its Statement only assumes differentiability/integrability of transition-density integrals and absence of boundary terms; it states no local uniform remainder bound, integrable majorant for the partition sums, or continuity/absolute-continuity condition that justifies that limit. Proof step 1.2 likewise asserts a local `o(h)` expansion without deriving the needed bound. The cited DCT dependency (`thm-dominated-convergence`) requires an integrable majorant, and the Fubini dependency supplies only exchange of integrals for an `L^1` product; neither supplies the missing domination.

This is on the dependency path `alg-predictor-corrector-score-sampling` → `thm-markov-diffusion-reversal-by-bayes-kernels` → `lem-reversed-kernels-and-generator-identity`. Without a proved integrated generator identity or explicit hypotheses that yield the local uniform/majorized limit, the reverse martingale-problem interface used by the algorithm is not established. Anderson's cited paper, §3 theorem and §4 proof (printed pp. 317–321; [PDF](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf)), expressly assumes smooth unique solvability for the marginal and related joint forward Kolmogorov densities. Tang and Zhao, §2 Theorem 2.1 (PDF pp. 3–4; [PDF](https://arxiv.org/pdf/2402.07487)), labels its Fokker–Planck derivation heuristic and leaves the required conditions as “suitable conditions.” These sources do not close the gap under the current local statement. The defect is routed as a fatal `unlicensed-inference` finding against the in-run dependency; the source was not edited.

## Page verdicts

- `score-sdes-and-reverse-time-generation` (A): pass. The frontmatter inventory matches the manifest; its `requires` list is retained, `page_layout: compact-v1` is present, and the Markdown body is empty.
- `score-sdes-and-reverse-time-generation-examples` (B): pass. The three assigned examples match the manifest; the required A page is retained, `page_layout: compact-v1` is present, and the Markdown body is empty.

## Blockers and coverage

The algorithm's reversal dependency gap remains open for its batch-67 owner. The initial recomputed run status showed blockers in `3a-split` for batch 51 and `3a-collect` for batch 36. The final recomputed status had changed: it showed `collect-57` failed three times as the current out-of-scope blocker, with no current `3a-split` blocker. Batch 68 remained pending in `3a-read` and `3a-split`. This reader made no run-control changes.

All assigned pages and items, the directly relevant item interfaces, and the current-run reversal theorem path described above were opened. I did not audit every transitive proof in the much larger published dependency closure; no published supplier defect is asserted in this report. No other mathematical defect was identified in the assigned items.
