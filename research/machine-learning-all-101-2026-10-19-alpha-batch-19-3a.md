# Step 3a adjudication — batch 19

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-19`.

The scope has no touched/page obligations and no reader/refuter findings. Pre/post snapshots have identical item, contract, manifest and page hashes. The required decisions array is empty. No content repair has been made.

## Completed risk reviews (dependency order)

### lem-pseudo-residuals-are-negative-score-gradient (level 1)

Read current Proof 1.1–4.1 and all seven cited local suppliers. On open U^N, coordinate projections have zero remainder; each scalar derivative supplies the one-dimensional total derivative, so the chain and finite-sum rules give D Phi(z)v=sum_i partial_2 ell(y_i,z_i)v_i. Coordinate evaluation gives the stated negative gradient. N>=1 excludes empty sums; N=1, zero scores, zero derivatives and repeated inputs cause no division or independence assumption. Only pointwise differentiability at the finitely many scores is needed, not C1 regularity. Coordinate relabeling from the supplier zero-based convention is harmless. No AC or diagram is used. Reader/refuter have no findings. Frontiers tutorial §§2.3–2.4 supports the score-gradient convention; local proofs supply the rigorous argument.

Sources: `items/def-negative-gradient-pseudo-residual.md`; all six differentiation suppliers in the lemma deps; https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full §§2.3–2.4. No defect or consumer-interface change. Risk review recorded in the owning contract. Next: AdaBoost bound.

### thm-adaboost-exponential-training-error-bound (level 1)

Read current Proof 1.1–3.1 and alg-adaboost-m1 Definition. For completed rounds 0<e<1/2, positive initial weights remain positive and q(a)=(1-e)exp(-a)+e exp(a) has unique stationary minimum at the half log ratio; q(a_m)=Z_m>0 normalizes the next weights. The induction w_i=exp(-y_i F)/S yields S_m=S_(m-1)Z_m and S_0=N. The indicator bound holds at margin zero and both signs; sign_plus errors are included in the nonpositive-margin set. M=0 gives S_0=N, product 1 and nonpositive-margin fraction 1. Perfect and failed rounds are expressly excluded from the product theorem and handled by the algorithm. No generalization conclusion or AC. Reader/refuter have no findings. Schapire §3 PDF pp.4–5 supports exponential loss/product analysis; browser text omits displayed formulas and a screenshot timed out, so exact formula verification rests on the independently checked local algebra, not unread source glyphs.

Sources: `items/alg-adaboost-m1.md`, Definition; https://people.csail.mit.edu/dsontag/courses/ml12/notes/schapire_boosting_tutorial.pdf §3. No defect or interface change. Next: gradient-boosting procedure.

### alg-gradient-boosting (level 4)

Read entire Definition and all five direct suppliers, including current CART procedure and its termination/candidate proof, plus node-mean proof. Inputs N>=1,p>=1,finite integer depth and round count are explicit. Real finite differentiable losses give real residuals. CART midpoint partitions and finite lexicographic ties produce nonempty finite leaf sets; depth zero, constant features, singleton samples and residual zero are covered. Leaf means determine the fit/regions, while separate exact original-loss offsets determine the update, matching ESL Algorithm 10.3 and (10.30). Initial and each later minimizer must be attained on the admitted run; the procedure makes no unsupported universal attainment claim. Any finite sequence of such choices is choice-free; no uniform selector over all runs is asserted. M=0 outputs the initial constant. This is a mathematical exact-minimization procedure, with no numerical computability/complexity promise. No convergence, strict descent or generalization is asserted; no diagram required. Reader/refuter have no findings.

Sources: direct dependency carriers; `items/thm-node-mean-minimizes-squared-error.md` Proof 1.1–5.1 (also its elementary variance identity); `/tmp/esl-gradient.txt`, printed pp.353, 356–361, §§10.9–10.10.3, extracted from a local book copy. The author-hosted PDF fetch failed; the local text was read directly, including Algorithm 10.3. No defect/interface change; next: level-5 nonincrease theorem and zero-tree example.

### thm-gradient-boosting-empirical-loss-nonincreasing (level 5)

Read current Proof 1.1–3.1 and all three actual suppliers. CART gives finite nonempty leaf sets partitioning the observations. In each leaf an attained global minimum over real offsets is no greater than the feasible zero offset; summing over disjoint sets gives exactly L_m<=L_(m-1), with no convexity, positive loss or strict-gradient assumption. This holds for every selected minimizer, including zero or nonunique choices. Finite chaining gives L_M<=L_0; M=0 is reflexivity. N=1 and a single leaf still satisfy the argument. Attainment is expressly a premise, not a derived analytic assertion. No AC, limiting convergence, generalization or diagram is involved. ESL §10.10.3 Algorithm 10.3(c)–(d), printed p.361, supplies the same leaf-minimizer/update convention; the zero-offset inequality is proved locally. Reader/refuter have no findings.

Sources: `items/alg-gradient-boosting.md`, Definition steps 2–4; tree Definition and CART theorem Proof 3.1; local ESL extraction, printed p.361. No defect/interface change. Next: zero-tree example.

### ex-gradient-boosting-zero-tree-direction (level 5)

Read Verification 1.1–4.1 and all six current cited suppliers. Independently expanded initial constant loss to c^2+1, so c0=0 is attained. Scalar derivative z-y gives residual (1,-1) and gradient (-1,1). Depth cap zero makes one root leaf containing both observations; its mean is zero and hence its fitted sample vector u=(0,0). Phi(tu) is constant, with derivative zero, so this is not strict descent under the stated definition. The distinct exact leaf-offset loss is gamma^2+1, uniquely minimized at zero, leaving loss 1. Thus the example satisfies both initialization and later attainment hypotheses and distinguishes fitting from the final update. No empty leaf, division by zero, choice axiom or convergence claim. No diagram is required. Reader/refuter have no findings; exact finite contract worksheet agrees with these calculations.

Sources: six direct dependency carriers as listed in frontmatter, especially CART depth-zero branch, pseudo-residual definition, and directional-derivative definition. No defect/interface change. All routed risk reviews are complete.

## Scope, presentation and dependency dispositions

All nine batch carriers and both authored pages were opened. The two additional AdaBoost examples agree with their supplier: the perfect round returns its classifier without evaluating a logarithm; the four-point example gives errors 1/4 and 1/6, the stated weights and margins, and product sqrt(15)/6. These untouched, unflagged examples owe no decision. Both pages retain their exact inventories, empty bodies and `page_layout: compact-v1`. The statements/definitions/examples have no inline hyperlinks; reference sections and proof links preserve dependencies. No TikZ/tikzcd occurs in the batch, and these scalar/finite arguments require no added diagram.

The existing eight rows in `research/machine-learning-all-101-2026-10-19-batch-19.cross-batch-dependencies.json` were checked against the actual CART/tree uses: page prerequisite, algorithm regions and termination, theorem finite partition, and example root/mean convention all remain supported. No edge or interface changed, so the owned dependency input and unified ledger need no mutation or refresh. Published differentiation suppliers were read for their exact uses and kept read-only; no published defect was found. No withdrawal is proposed.

## Repairs, decisions and limitations

No mathematical, item, page, manifest or provenance repair was necessary. Only the five required `risk_review` records were added to the owning contract; prior evidence is preserved. No defect-ledger row is appropriate, as no confirmed defect or finding is being closed. The decisions file has exactly the empty array required by the scope. There is no mathematical blocker or unresolved escalation. No judging, stamping, certification or stage transition was performed.

External-source access limits: the author-hosted ESL PDF could not be fetched through the browser. Its relevant full argument was read from the available local extraction `/tmp/esl-gradient.txt`, printed pp.353 and 356–361. Frontiers §§2.3–2.4 was read online. Schapire §3 was available as PDF text but formula glyphs were omitted and the screenshot attempt partly timed out; no claim of independently seeing those glyphs is made. Local algebra and explicit supplier proofs establish the reviewed claims. These access limits do not leave a missing logical prerequisite.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-19.proof-contracts.json`: exit 0, five HIGH/CRITICAL items routed, nine total items.
- Final same command with `--require-reviewed`: exit 0, `risk-report: 0 error(s), 9 item(s) routed`; all five required reviews complete.
- Focused Python comparison: all nine current raw item hashes and both raw page hashes equal the identical pre/post snapshot values. Exact obligation arrays remain empty, and decisions JSON parses with group `batch-19` and `decisions: []`.
- Live engine status recomputed successfully from `.autopilot/machine-learning-all-101-2026-10-19`: run remains in Step 3a; no transition initiated. Git HEAD inspected: `603500781c` (`Add strict finite smoke fixtures for machine learning frontier`).

No item was edited or formatted, so proof-layout, reflow and precheck were not applicable to this dispatch. Only risk-review audit enrichment and the two task-named output files were written. The engine retains decision hashing and the gate battery. No open local work remains.
