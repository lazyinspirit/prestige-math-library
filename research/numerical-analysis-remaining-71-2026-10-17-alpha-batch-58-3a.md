# Batch 58 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-58`.

Scope: seven touched items, one touched A page, no reader or refuter findings; eleven HIGH/CRITICAL risk reviews. No agents dispatched. Current raw item bytes match all twenty post-reader snapshot hashes. Pre/post comparisons identify exactly the seven routed item deltas; their contract and manifest hashes are unchanged. Reader changes concern source metadata; mathematical statements and arguments are reviewed independently below. The A-page change exposes an existing extension-domain hypothesis.

## Completed review in dependency order

- `def-signorini-partial-trace-space`: reviewed_no_defect, metadata. The fixed C1 collar restriction followed by the scalar trace theorem applied componentwise defines bounded segment traces on H1 classes. AC covers the trace and Sobolev interfaces. The polygon is explicitly an extension domain; no polygon-corner trace theorem is imported. Guermond Chapter 53 is a Stokes velocity reference, as the corrected locator now says.
- `ex-signorini-one-dimensional-obstacle-free-boundary`: reviewed_no_defect, metadata. Checked the actual scalar obstacle definition, endpoint-pair trace/kernel, zero-boundary closure, Poincare, Cauchy–Schwarz and real coercive-form conventions. On (1/2,1), u''=4-6x; u' is continuous across 1/2, so there is no interface atom. The residual is integral_0^(1/2) v >= 0 for every feasible v. At x=1, psi=-1/2 and u=0, so the coincidence set excludes 1. Adding the two VIs and coercivity proves uniqueness; no external existence theorem is needed for this explicit witness. AC and Countable Choice are stated. Andersson §3.1 Theorem 3.1, printed p.27, concerns obstacle minimizers; the reaction is computed locally.

- `lem-signorini-partial-trace-space-bounded`: both steps and actual suppliers checked; bounded composition, closed kernel and closed-subspace completeness prove the claim. The real componentwise H1 inner product induces the stated norm. Risk review complete.
- `lem-signorini-rigid-motion-controlled-by-dirichlet-segment`: reviewed_no_defect, metadata. Explicit segment integration yields L|A_perp|²+L(A_parallel+omega L/2)²+omega²L³/12; L>0 controls all rigid parameters and the bounded-domain H1 norm. Vanishing trace forces the zero motion. Zulehner Lemma 2.3/Corollary 2.1 pp.22–23 concern R3, now accurately distinguished from this local planar proof.

- `def-signorini-elasticity-contact-model`: reviewed_no_defect, metadata. The batch-35 supplier explicitly defines its formulas for all H1 fields and distinguishes full-boundary model coercivity. The contact model correctly repeats those formulas on V with constant mu>0, finite lambda>=0 and bounded real load. No outside supplier result is widened.
- `lem-signorini-elasticity-form-bounded`: all steps checked; projection and diagonal Cauchy–Schwarz give exactly 2mu+2lambda, including lambda=0. Risk review complete.
- `lem-signorini-contact-set-closed-convex-nonempty`: zero feasibility, endpoint convex combinations and the negative-part L2 estimate prove all three assertions. Compact-segment continuity ensures psi is L2. Risk review complete.

- `lem-signorini-contact-nodal-test-functions-surjective`: constructed barycentric hats belong to H1 by the exact matching-polynomial supplier; disjoint resolved segments give zero Dirichlet trace, and unit n gives independent contact coordinates. Risk review complete.
- `lem-signorini-nodal-contact-set-conforming`: finite halfspaces, chord-above-convex-obstacle inequality and continuous endpoint inequalities establish K_h nonempty/closed/convex and K_h subset K. Nodal interpolation has matching edge traces and the exact resolved-boundary conditions. Risk review complete.

- `lem-signorini-partial-dirichlet-korn-coercivity`: amended_repair, repair_confidence 1. All four steps checked independently, including rowwise rotation signs, zero-mean curl, H1_0 approximation, symmetric/skew orthogonality, the zero-gradient branch, Poincare and rigid trace removal. The batch-31 producer has the exact bounded linear L2_0 -> H1_0 interface, proved by finite cover/decomposition, zero extension and finite operator sum; its current contract/manifest and prerequisite statements match. No missing prerequisite found. One nonfatal citation defect remains in the reader metadata: Zulehner Lemma 2.2 is general-d, while its Corollary 2.1 is R3, and Guermond coercivity is printed p.395. Corrected these two locators without changing the claim, argument, dependencies or provenance. Risk review complete; closed defect `numerical-analysis-remaining-71-2026-10-17-b58-3a-korn-locators`.

- `thm-signorini-continuous-contact-vi-wellposed`: reviewed_no_defect, metadata. All real-Hilbert, fixed-set, coercivity and choice hypotheses of Stampacchia and load stability hold with M=2mu+2lambda and alpha=2mu/c_K²>0. Both proof steps and actual dependencies checked; risk review complete. Falk supplies approximation context, not the local existence proof.

- `thm-signorini-mortar-contact-kkt-and-complementarity`: all five steps checked in both directions, including inactive/active coordinate variations, ker B, multiplier uniqueness, positive d_i, zero-complementarity and the u_h=0 branch of the load estimate. The inf-sup assertion concerns only the stated L2 trace spaces. Risk review complete.
- `thm-signorini-nodal-contact-vi-falk-error`: every step and exact interpolation interface checked. The two VI tests give a(e,e)<=eta+a(e,delta); Young gives precisely M²/alpha² and 2/alpha. H2, continuity, resolved boundaries, convex obstacle and the strict nodal threshold 2>d/p=1 license the convergence branch, and the bounded residual tends to zero. Risk review complete.
- `ex-signorini-contact-patch-test`: reviewed_no_defect, metadata. Direct strain/divergence computation and affine membership give zero residual on continuous and discrete feasible sets. The manufactured load is bounded and the checked coercivity/existence interfaces give uniqueness. Risk review complete.

## Page and consumer dispositions

`page:58:variational-inequality-and-contact-finite-elements`: reviewed_no_defect, audit_enrichment. The reader made the existing W1,2-extension-domain assumption visible in the summary. The pre/post page digests differ while its manifest/order are unchanged. The current complete summary, listed items and geometry sketch agree with the actual carriers: fixed C1 collars, positive-length disjoint segments, two-dimensional partial-boundary Korn, convex-obstacle nodal conformity, conditional H2 convergence, and matching-pair L2 trace stability. The diagram is explanatory and no proof relies on it. No page edit was made in adjudication.

Independently checked the three current prerequisite page summaries and both owned cross-batch item uses. The batch-35 formula definition and batch-31 divergence lift satisfy precisely the uses recorded above. The latter's complete four-step finite-cover argument, owning contract/manifest and immediate prerequisite statements were checked; the lower Bogovskii/Fourier proof chain was not re-audited. Published suppliers were read at their exact used statements, with further argument inspection where noted, without claiming a whole-library audit. No defective published item or outside consumer repair was found. No Statement or Definition changed in this adjudication, so there is no new propagation obligation. Existing proposed withdrawals and other owners' records remain present.

The seven reader-touched item source descriptions are classified as metadata normalizations. The Korn source-locator amendment closes one independently confirmed nonfatal citation defect; its mathematical proof is unchanged. Source/provenance mirrors for these seven items were synchronized in the owning manifest. Historical source-evidence descriptions are preserved with explicit Alpha annotations correcting the Stokes/elasticity and scalar-reaction interpretations. Eleven specific risk_review entries are complete in the owning contract. No material rewrite occurred and no judge record was created or removed.

## Sources actually consulted

- [Guermond, Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), §§53.1–53.2.2, printed pp.391–395: symmetric stress, componentwise velocity trace, weak form and Korn-based coercivity context.
- [Zulehner, Numerical Methods for Continuum Mechanics 1](https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf), §2.1, Lemmas 2.2–2.3 and Corollary 2.1, printed pp.22–23: dimension and Dirichlet qualifications. The actual planar proof is local.
- [Andersson, The Obstacle Problem](https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf), §3.1 Theorem 3.1 and admissible variations, printed pp.27–28: scalar minimizer/VI context. Reaction signs are computed from the local candidate.
- [Falk, Error Estimates for the Approximation of a Class of Variational Inequalities](https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf), introduction p.963, §2 Theorem 1 p.965 and §3 Lemma 3 p.969, including their comparison arguments. The authored contact proof derives its own exact constants.
- [Guermond, Chapter 11](https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf), Theorem 11.13 and complete proof pp.123–125, §11.5.1 p.126: affine interpolation and the strict nodal boundedness threshold. The actual local interpolation supplier explicitly supplies the required AC branch.
- [Krause–Wohlmuth, Multigrid Methods for Mortar Finite Elements](https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf), §2 pp.2–3: dual-basis/diagonal-pairing context. The source's endpoint modification and scaling differ from the locally defined contact basis; the local basis, mass eigenvalues, coefficient cone and contact KKT calculation were checked independently.

These are relevant-section readings, not claims to have read each complete source book. Exact used local dependency IDs, statements, choice assumptions, inference checks and boundary cases are recorded per item above and in risk_review.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-58.proof-contracts.json`: zero errors, fifteen routed contracts, eleven HIGH/CRITICAL items.
- After all eleven reviews, the same command with `--require-reviewed`: zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-signorini-partial-dirichlet-korn-coercivity.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-signorini-partial-dirichlet-korn-coercivity.md`: one checked, zero failures.
- `node tools/rendercheck.mjs items/lem-signorini-partial-dirichlet-korn-coercivity.md library/numerical-pdes-and-spatial-discretization/variational-inequality-and-contact-finite-elements.md`: two files, zero errors.
- After the final item edit/formatter, the required single batched `node tools/proof-layout.mjs items/lem-signorini-partial-dirichlet-korn-coercivity.md`: one item, four steps, zero defects.

Final local assertions passed: exact eight-obligation coverage, eleven complete risk reviews, and only the intended Korn source-locator edits differ from the twenty post-reader item snapshots. Reversing those two locator edits exactly recovers the immutable post-reader item hash.

Eight decisions cover exactly seven touched items and the touched page; no reader/refuter findings are owed. Closed defect: `numerical-analysis-remaining-71-2026-10-17-b58-3a-korn-locators`, caught at `3a-adjudicate`, referenced by the Korn decision. No unresolved mathematical blocker, escalation or proposed withdrawal. Engine hashing/stamping and the gate battery remain with the engine; none was initiated here.
