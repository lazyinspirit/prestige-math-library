# Step 3a reader report — batch 2

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Batch: 2

## Inventory and review order

Opened the assigned pages:

- A page td-entropy-foundation: library/thermodynamics/td-entropy-foundation.md.
- B page td-entropy-foundation-examples: library/thermodynamics/td-entropy-foundation-examples.md.

Reviewed all 11 assigned items in dependency order. The A page contains def-td-reversible-process, def-td-thermal-contact-constraints, post-td-concave-fundamental-entropy, def-td-isolated-compound-feasible-set, post-td-entropy-maximum, post-td-macroscopic-second-law, post-td-zeroth-law, and post-td-common-bulk-constitutive-law. The examples page contains ex-td-irreversible-adiabatic-compression, ex-td-noncompact-entropy-supremum-not-attained, and ex-td-local-entropy-maximum-below-global.

Before those consumers, inspected the current batch-1 draft suppliers def-td-si-quantities, def-td-system-and-permitted-exchanges, def-td-equilibrium-state-domain, def-td-process-and-protocol, def-td-galilean-rest-frame, post-td-bulk-additivity, and post-td-first-law-energy. Their draft status was treated as current content, not acceptance evidence. The mathematical suppliers used directly by the assigned items were def-cartesian-product, def-natural-numbers, def-interval, def-finite-sum, def-max-min, def-complete-ordered-field, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-of-archimedean, lem-finite-set-has-max, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-natural-logarithm, and thm-natural-logarithm-laws. For the needed meanings of mappings, inclusion, convexity, C2 regularity, derivatives, vector limits, and continuity, also opened def-function-space, def-subset-and-proper-subset, def-convex-subset-of-euclidean-space, def-ck-and-multi-index-notation-in-several-variables, def-vector-valued-derivative-and-integral, and def-vector-valued-functions-limits-and-continuity.

Opened the batch-2 notes, coverage, cross-batch dependency record, and proof contracts as navigation and evidence. I independently checked the current item statements and proofs; the recorded author reviews did not determine the verdicts below.

## Review and repairs

The postulates consistently identify entropy, equilibrium, the second law, and the zeroth law as adopted model assumptions. They state their model domains, permitted exchanges, units, regularity charts, and limitations. They do not present those assumptions as mathematical deductions or empirical proofs. The page summaries accurately describe the items and preserve the distinction between the general tagged bulk family and the separately designated common-constitutive-law branch.

The three example calculations were checked directly. In ex-td-irreversible-adiabatic-compression, the stated first-law and ideal-gas equations give p_f/p_i = 6/5 and T_f/T_i = 27/25; the entropy calculation reduces to the logarithm of 1594323/1562500, which is greater than 1. Its process, apparatus, load, and entropy assumptions are model premises, and it makes no empirical claim. In ex-td-noncompact-entropy-supremum-not-attained, the open-cover argument has no finite subcover, the entropy values have supremum 2s_* and no maximum, and the conclusion about stable equilibrium follows from the explicitly adopted attainment rule. In ex-td-local-entropy-maximum-below-global, the specified relative neighborhood isolates x = 3/10 from the other feasible component, while x = 9/10 is the global maximizer. Neither feasible-set example claims behavior of a real material.

I repaired one confirmed prerequisite gap in each of the last two examples. The bulk supplier defines the scaling map only for inputs in its declared subset B_{c,lambda} of D_c. Each example used the tagged entropy-scaling law in its verification but did not place its toy states in those domains. In each item’s A1 I now set B_{c_A,lambda} = D_A and B_{c_B,lambda} = D_B for every positive lambda, identify the scaled-tag domains with the positive coordinate domains in their own coordinates, and assign the stated linear entropy formulas to those tags. I also made F6 state the supplier’s input-domain condition. The two example supplier-interface entries in the assigned proof-contract JSON now record these domain choices and the supplier’s restricted scaling domain. This supplies the missing premise for the existing scaling deductions without changing their conclusions.

I also corrected an overbroad title on post-td-entropy-maximum. The body imposes a one-way criterion for labels of stable equilibrium; it does not identify every equilibrium state in the state domain with a global entropy maximum. I changed the title to “Stable equilibrium requires an attained global entropy maximum” and changed the A-page summary to name the stable-equilibrium criterion. The item’s formulation contract now records that restricted one-way scope. The changed items had no verification.judge records to remove.

Evidence: post-td-bulk-additivity defines B_{c,lambda} as the subset on which delta_lambda is defined, and post-td-concave-fundamental-entropy states entropy homogeneity for those inputs. The repaired A1 clauses put every state used by each toy model in B and define the scaled-tag entropy functions, so substituting the linear laws verifies homogeneity for every lambda. The remaining calculations use the exact previously stated suppliers and their hypotheses.

## Source checks

- Lieb and Yngvason, [The Physics and Mathematics of the Second Law of Thermodynamics](https://arxiv.org/pdf/cond-mat/9708200v2), §II.F, Theorem 2.8, gives concavity under a convex state space, axioms A1–A7, and the comparison hypothesis for multiple scaled copies. Its §IV.A, T1–T3 and Theorem 4.3, gives a contact-based zeroth-law assumption and characterizes thermal equilibrium of two simple systems by maximum total entropy at fixed total energy and work coordinates. The entropy postulate explicitly treats this as a distinct accessibility-based route and does not claim that it proves the present primitive assumptions.
- Tong, [Statistical Physics, Chapter 4](https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf), §4.1 states the transitivity form of the zeroth law. §§4.3.3–4.3.4 state nondecrease of entropy for an isolated adiabatic process and equality for a reversible adiabatic process. These passages provide context for the adopted postulates; the batch items specify their own model classes.
- Arovas, [Physics 210A Chapter 2 (2025)](https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf), §2.6.4, equations (2.103)–(2.112), defines homogeneous functions and derives Euler’s theorem and the Gibbs–Duhem relation; §2.9 discusses entropy maxima and local thermodynamic stability. The common-bulk item adopts its cross-tag transport as an additional constitutive assumption and does not claim that those equations prove that transport law.
- Arovas, [Lecture Notes on Thermodynamics and Statistical Mechanics](https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf), §2.6.5, equations (2.113)–(2.119), gives the ideal-gas entropy formula and its entropy change at fixed particle number. With three monatomic degrees of freedom and one mole, this yields the formula used in ex-td-irreversible-adiabatic-compression. This is a conditional model calculation, not a reported experiment.

No assigned item reports an experiment or measured data. The examples separate adopted inputs from their deductions and do not introduce statistical observations or precision claims.

## Page verdicts and uneditable findings

- td-entropy-foundation: no remaining content defect found. Its assumptions, definitions, units, regularity restrictions, common-bulk branch, and stable-equilibrium criterion are stated within the declared scope.
- td-entropy-foundation-examples: no remaining content defect found after the two scaling-domain repairs. Its page summary accurately limits the examples to conditional model calculations.
- No confirmed or suspected uneditable item, page, or dependency finding remains.

## Validation and blocker

- Reflow completed for ex-td-noncompact-entropy-supremum-not-attained.md, ex-td-local-entropy-maximum-below-global.md, and post-td-entropy-maximum.md; all were unchanged.
- Precheck passed for the two examples (direct; 1 checked, 0 failing) and for post-td-entropy-maximum (nonproof structure; 1 checked, 0 failing).
- The required single batched proof-layout command was attempted after the final item edits for all three changed item paths. It could not complete because the renderer failed to resolve the @/components alias imported by /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx (ERR_MODULE_NOT_FOUND). No proof-layout pass is claimed; this is the remaining mechanical blocker.
- Coverage limitation: I checked every assigned page and item, each direct item dependency used by the batch, and the additional exact definitions needed for the reviewed arguments. I did not re-audit the entire transitive mathematical foundation closure of every published mathematical supplier.
