# Batch 37 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-37`.

Reviewed in generated dependency order. No agents dispatched, judging or certification performed.

## lem-real-line-exponential-tail-integrable

Checked all three steps and direct supplier statements: r=exp(-1) lies strictly between zero and one; I_k and J_k are disjoint and cover R including zero via I_0; the finite [-n,n) envelope is bounded by 2/(1-r). Measurable truncations increase to f, so nonnegative monotone convergence applies. Countable Choice matches continuous-Borel and box hypotheses. No improper-integral interchange or stronger choice is used.

## thm-exact-hamiltonian-flow-preserves-energy-and-volume

Checked all six steps, maximal-flow supplier argument and direct citation statements. C2 U yields C1 vector field; completeness supplies all positive and negative times and inverse slices. SPD mass is invertible and its inverse symmetric. The energy derivatives cancel, variational trace vanishes by finite trace cyclicity, and initial determinant is one. Countable Choice matches C1 change of variables on full Lebesgue sets. The Frobenius/Lipschitz squared estimate gives max(norm_F(M^-1),L) in both time directions; local regularity alone is never used for completeness. d>=1, t=0, negative t and constant force create no exceptions.

## thm-leapfrog-is-reversible-and-volume-preserving

Reader completion extension accepted; amended the unresolved dependency and F9 wikilink to `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`. Its Statement explicitly supplies E=A union N, N contained in Borel null Z, and the completed measure; its proof applies the sigma-finite Caratheodory-domain result. Slice translations, Tonelli, Borel-product identification, null-envelope pullback, flip involution and the C2-only Jacobian calculation all check. The refuter finding is confirmed fatal as a missing logical citation; the current proof is repaired, with confidence 1. No Statement change or consumer interface change. Risk review complete.

## def-hamiltonian-monte-carlo

Reviewed Definition and all direct suppliers: d>=1, C1 real potential and strictly positive finite normalizer yield a Borel position target; SPD M yields an inverse and a nondegenerate normal refresh under AC. Kick-drift-kick plus final flip and min(1,exp(-Delta H)) specify the finite proposal and acceptance convention. General MH reference is used for accepted flow/rejected self transition only. Exact ODE completeness is confined to the C2 exact-flow remark, where AC supplies Countable Choice. No convergence, scaling or finite-step energy conservation is asserted; no issue at zero gradient or L=1, and singular M/zero normalizer are excluded.

## ex-hmc-exact-flow-limit

Accepted reader repair: F3 now states Countable Choice, supplied by AC through F5. Checked all three steps and all direct suppliers. Harmonic vector field is globally 1-Lipschitz; differentiating the displayed rotation verifies the unique solution for all real t. At pi/2, endpoint (p,-q) and final flip (p,q) preserve (q^2+p^2)/2 exactly, giving acceptance one. Independent normal momentum becomes the returned independent target position. This explicitly uses exact integration and asserts no numerical discretization convergence theorem. AC and scalar normal hypotheses hold, including arbitrary initial q and zero momentum. Repair confidence: 1.

## ex-hmc-globally-lipschitz-force

Accepted reader repair: F5 includes closed-interval continuity and step 1.1 writes the positive integral lower bound with exact simple-integral and set-integral suppliers. Checked all four steps and cited statements: sqrt(1+q^2)>=|q| gives domination by the proved integrable tail; the [-1,1] lower bound is 2 exp(-sqrt(2))>0. The smooth potential has U prime q/sqrt(1+q^2), U double-prime (1+q^2)^(-3/2) in (0,1], so the mean value theorem gives global 1-Lipschitz force (equal endpoints trivial). Squared phase norm gives Lipschitz constant one, completeness and exp(|t|) stability for all real t. AC supplies Countable Choice. No discretization-error inference is made. Repair confidence: 1.

## thm-metropolized-hamiltonian-chain-preserves-target

Reviewed all six proof steps and every direct supplier statement; independently read MH invariance, common-submeasure lemmas and Euclidean standard-Borel proof. Product target has finite strictly positive Borel density rho. T is a continuous volume-preserving involution under AC-implied Countable Choice. Its deterministic kernel is pointwise measurable. Transpose flow is computed by h composed with T; graph integrands are measurable, and lambda0=mu+muT is finite. Positive finite f=rho/(rho+rhoT) and g=rhoT/(rho+rhoT) are everywhere Borel RN versions; minimum-density lemma applies to finite measures with finite sigma-finite lambda0. The graph ratio equals min(1,exp(-Delta H)), including fixed points where acceptance is one. General MH theorem gives probability-kernel status and invariance. Refresh S and projection J have the correct position-to-phase and phase-to-position types; SPJ preserves pi by pi S=nu and nu P=nu. No mixing conclusion, smooth Hessian, exact flow, or bounded energy error is required.

## ex-hmc-finite-step-energy-error

Accepted reader repair: AC is explicit and F3 supplies exponential positivity/strict increase for the strict rejection inequality. All three steps checked by substitution: kicks and drift take (0,1) to (1,1/2), flip gives (1,-1/2); H changes from 1/2 to 5/8, so Delta H=1/8 and acceptance exp(-1/8) lies strictly between zero and one. Rejection retains original position zero. Unit mass, epsilon=L=1 satisfy the algorithm interface. This is one deterministic phase-point witness, with no assertion that the refreshed momentum equals one with positive probability. Repair confidence: 1.

## ex-hmc-leapfrog-harmonic-resonance

Accepted reader repair: AC explicit; density lower bound supported by exact measurable-set, monotonicity and simple-integral suppliers. Checked all three steps and direct dependencies. Kick-drift-kick multiplication gives the displayed matrix; epsilon=sqrt(2) makes A^2=-I and A^4=I. Thus for every q,p final flip is (q,-p), energy is unchanged and acceptance is one. Independent refresh never changes the returned q, including p=0, so starting zero stays delta_0 at every iteration. The normal density on [1,2] is at least (2pi)^(-1/2)exp(-2)>0 and the interval has length one under AC-implied Countable Choice. Trapping and absence of convergence from zero coexist with target invariance. Repair confidence: 1.

## Decisions and historical comparison

Exactly six obligations: five touched carriers and refuter:37:1; no reader or page obligations. The leapfrog repair is amended; all four example repairs are accepted. The refuter citation finding is confirmed fatal and completely repaired. Every completed repair has confidence 1. Seven closed defect rows distinguish the completion and citation repairs, the MVT qualification and integral citations, and the three remaining example qualifications/citations; no mechanical failure receives a defect row. The decision file references these exact rows.

All eleven raw item hashes matched the immutable post-reader snapshot on entry; only the five routed touched items have different pre/post item hashes. The manifest hashes were unchanged pre/post, confirming the reader-reported reconciliation debt. Four manifest dependency arrays now match current carriers. No item Statement, Definition, ID, inventory or mathematical claim changed in this dispatch; no consumer-interface repair is required. No prior judge record was present or added in the edited theorem.

## Source and consumer evidence

Local source statements were inspected for every direct dependency of the nine routed risk items. Critical locators: completion corollary Statement and Proof 1.1–2.1; Borel-products and Lebesgue-product-agreement Statements; Tonelli Statement; C1 Euclidean maximal-flow lemma Statement and Proof 1.1–6.1; Jacobi determinant differential Statement; C1 change-of-variables Statement; global-Lipschitz existence and stability Statements; mean-value corollary Statement; scalar-normal Definition; multivariate-normal Definition and density theorem Statement; common-submeasure pointwise-minimum lemma Statement and Proof 1.1–4.1; bounded-density lemma Statement and Proof 1.1–3.1; general MH algorithm Definition and invariance theorem Statement/Proof 1.1–6.1; finite-Euclidean standard-Borel lemma Statement/Proof 1.1–5.1. These supply the exact hypotheses and conclusions used above. Standard computations and these local suppliers suffice; no external text was fetched or claimed read.

Owned cross-batch MH, Euclidean and gradient interfaces were inspected. The formerly metadata-only common-density supplier record is now supported by this independent review. Its finite-measure and sigma-finiteness hypotheses hold for lambda0=mu+muT. Stable IDs retained; no withdrawal proposed. No defective published supplier or necessary outside consumer repair was found; published content remains read-only and no published-ledger amendment is needed.

## Local checks

Initial strict contract check exposed eleven mechanical mismatches: omitted citation-use mapping, a range-endpoint step input, and paraphrases where exact source quotations were required. Reconciled those contract fields using the actual statements; no item mathematical rewrite was needed. Final strict proof-contract check: 11/11 items, zero errors or warnings. Reflow of the edited theorem: unchanged. Precheck: 1 checked, zero failing. Rendercheck: 1 file clean. Risk report run before review and again with --require-reviewed: all nine HIGH/CRITICAL reviews complete, zero errors. Final proof-layout after the last item edit and reflow: 1 item, 6 steps, zero defects.

No mathematical blockers or escalations remain. Engine hashing, gates and transitions remain for the engine.
