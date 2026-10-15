# Batch 3 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-3`.

## Completed level 0 reviews

`alg-euler-maruyama-autonomous`: full finite procedure reviewed; zero coefficients, N=1, endpoint agreement and finite recursion are sound. Risk review complete. No decision owed.

`lem-brownian-ito-integral-l1-maximal-bound`: reader DCT dependency and rounded-stopping argument accepted. Checked predictable active events, elementary approximation, product-measure domination, common continuous versions, good-lambda absorption, scalar constant 16 and vector factor sqrt(m). Amended the harmless strict parameter bound to allow the value delta=1/4 actually used. Statement unchanged; dependencies and consumer uses unchanged. Risk review complete. Local checks pending.

Next: independently dispose of batch-2 definition finding, then increment lemma and higher consumers in order.

## Level 1

`reader:3:1`: false positive. SCHEMA.md requires each justified_by target to depend on its definition through deps. The definition first constructs interpolation pathwise; its integral formula is explicitly conditional on square integrability. Current batch-2 moment theorem steps 1.1 and 2.1 independently derive adapted Lp grid values by finite induction and then energy from growth, before applying the finite-sum integral lemma. No circular energy assumption. Opened current producer, one-step and finite-sum proofs, producer contracts and batch-2 manifest. Original routing fingerprints and dependency path retained verbatim in decisions. No batch-2 edit or owner repair is necessary.

`lem-euler-maruyama-autonomous-interpolation-increment-moments`: accepted reader repair. Reviewed all four steps: setting y=0 gives polynomial coefficient growth, uniform all moments covers exponent (q+2)r/2; adapted grid values and filtration-relative independent increments separate coefficient/Gaussian moments; delta^r <= h^(r/2) for h<=1. All grid points including T have zero defect. H-M-S Lemma 4.3 matches the premise. Checked the actual linked 2019 book: section 8.2, Algorithm 8.1, printed p.132 (PDF p.139); refuter locator allegation is false, no item edit needed. Risk review complete; no current mathematical defect.

Next: level-2 H-M-S theorem, then level-4 finite-L2 and weak theorems.

## thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses

All-moment premise supplies polynomial coefficient energy and fourth-moment martingale energy. One-sided drift splits at continuous Y, and r=4 interpolation bound plus Cauchy-Schwarz controls polynomial drift residual by Ch. Global diffusion Lipschitz gives integrated diffusion error. The local L1 maximal lemma and Young absorb half the error supremum; continuity/dominated convergence permit Gronwall. Checked H-M-S Assumptions 4.1/4.2, Lemma 4.3 and full Theorem 4.4 proof pp.1054–1056. No finite-L2 substitution, endpoint or zero-coefficient defect. Reader Tonelli addition valid; corrected supplementary book section 8.1 to 8.2 and removed repeated Given/facts from Proof. Risk review complete; Statement unchanged and current uses preserved.

## thm-euler-maruyama-strong-rate-for-square-integrable-initial-data

Reviewed all four steps against exact moment, existence, stopping, Doob, Holder, Tonelli, MCT and Gronwall statements. Squared growth implies required sum growth. Finite pointwise Euler moments give coefficient energy; stopping at error level R makes v_R bounded continuous. Stopped residual is controlled by v_R plus Ch using half-Holder time regularity, not extra initial moments. Coordinatewise Doob gives 4m factor. Stopped running suprema increase for integer R and exhaust continuous paths; MCT removes stops. Zero coefficients and final T valid. Reader Tonelli additions accepted; no supplier cycle because well-definedness theorem uses the pathwise recursion. Risk review complete; Statement unchanged and current uses preserved.

## thm-euler-maruyama-weak-order-one-under-backward-regularity

Reviewed all six steps: shifted strong-solution data retain Lipschitz/growth/filtration hypotheses; polynomial u derivatives and p>=2q+8 give finite martingale energy. Spatial Taylor through cubic, time Taylor through first order, centered Gaussian third tensor cancellation and arbitrary real Gaussian moment bound produce Ch²(1+|x|^(q+4)). Conditional independence and Euler p moments permit Nh² telescoping. q=0 convention, h=1, t+h=T and singular diffusion valid. No regularity is inferred from coefficients. Li Theorem 3.2 is scalar additive-noise context only. Reader Tonelli addition accepted; define previously implicit covariance abbreviation a(t,x) in step 2.1. Risk review complete; Statement unchanged and current uses preserved.

## thm-shared-brownian-euler-level-correction-rates

Reviewed five steps. Same W and X0 give the common exact solution; h<=1/M puts both meshes in strong theorem range. Squared triangle yields 2C(1+M)h and Lipschitz gives variance upper bound, Cauchy-Schwarz gives bias sqrt(h). Optional weak branch retains all derivative, bounded-payoff and p-moment requirements explicitly. Exponents are upper-bound rates, not sharp equalities. Fixed dimensions/refinement and unit-cost evaluations give h^-1 work; no MLMC complexity claim. Zero payoff Lipschitz constant and zero noise valid. Giles section 2 common-path grouped increments agree. Risk review complete. No decision owed.

## ex-euler-maruyama-additive-noise-strong-error

Reviewed five verification steps and exact Ito/isometry/elementary-sum suppliers. OU coefficients satisfy strong theorem hypotheses; integrating factor gives exact deterministic kernel. Grid kernel follows finite recursion. For h<=1/2, -log(1-h)-h<=h² and j<1/h bound both kernel errors by h, yielding terminal MSE<=4h². Grid boundary kernel conventions differ only at finitely many null times. General supremum MSE O(h) is distinct from special terminal RMS O(h); X0=0 and no extra moment assumed. Risk review complete. No decision owed.

## ex-euler-maruyama-weak-order-one-for-ornstein-uhlenbeck

Reviewed five steps and Gaussian/characteristic-function/moment interfaces. Shifted OU kernel variance (1-r²)/2 gives displayed cosine value; derivative check has u_t=A(r² cos/2-rx sin), so backward PDE cancels. Time derivatives introduce at most x² even after four spatial derivatives: q=2. Exact twelfth moment <=11!!/64, Euler twelfth moment from initial zero and uniform-moment supplier. p=12=2q+8; r=1 at T gives variance zero and terminal payoff. All conditional weak theorem hypotheses verified. Risk review complete. No decision owed.

## ex-learned-drift-bias-is-not-solver-error

Reviewed both steps. Finite telescoping gives learned terminal pi/2+W1 exactly for every positive integer N; target is W1. Gaussian characteristic function and cosine addition give expectations 0 and exp(-1/2), so target bias is strictly positive and independent of h. Learned coefficients meet solver hypotheses but no theorem is used to bound model error. X0=0 and h=1 boundary valid; inherited AC only. Risk review complete. No decision owed.

## ex-shared-brownian-euler-level-coupling-rates

Reviewed three steps. Integrating-factor OU formula and integration by parts give sup|X|<=2sup|W|, Doob gives finite supremum second moment <=16. b=-x,sigma=1 satisfy state/growth/time conditions; n>=1 gives h<=1/2 and valid both meshes, each coarse increment is exactly two fine increments. Cosine is 1-Lipschitz; shared-rate theorem gives the stated O(h) variance, O(sqrt(h)) bias and O(h^-1) work. These are valid general upper bounds despite sharper special OU terminal rates. Risk review complete. No decision owed.

## Verdicts, sources, and hash comparison

Seven decisions are owed and recorded: five touched carriers, reader:3:1, refuter:3:1. The maximal lemma, H-M-S theorem and weak theorem are amended repairs; the finite-L2 theorem and interpolation-increment lemma are accepted repairs. Both routed findings are false positives, with closed rejected-allegation rows rather than confirmed defects. Completed repairs have confidence 1. Ten ledger rows record the accepted source/citation repairs, local corrections, and two rejected findings; no row is attributed to a mechanical check failure.

The immutable step3-hash-3-pre/post inventories show exactly the five routed changes. The increment lemma and finite-L2 theorem still equal their reader-post raw SHA-256 values (`d3916e2a96b3da62aac74c5cdf72dd57fc05ad523cd842d85cfea6bbb95629f6`, `3a7fb2d518861ea7c19b3efda25bfa2ba4d25e134c172b0c0c5e54f7262f4c87`). The other three differ only by the local amendments described above. These are comparisons to recorded fingerprints and the reader's detailed change report, not a claim that fingerprints themselves contain historical proof text.

Primary sources opened directly:

- [Särkkä–Solin, 2019 book](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf): contents printed p.vi and section 8.2/Algorithm 8.1, printed pp.131–132, PDF pp.138–139; algorithm equations (8.29)–(8.30) and adjacent order discussion. This directly refutes the refuter's proposed section numbering. Current coverage locators corrected; historical search/navigation records retained as history, not independently repeated reading claims.
- [Higham–Mao–Stuart](https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf): Assumptions 4.1–4.2, Lemma 4.3 with proof and Theorem 4.4 with complete proof, printed pp.1054–1056. Checked polynomial drift, all-moment premise, interpolation increment and energy/absorption argument. The local proof supplies its own finite-energy maximal lemma.
- [Li, Numerical SDEs](https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf): section 3, Lemma 3.1, Theorem 3.2 and proof (PDF pp.8–9, printed pp.9–10). Its scalar time-homogeneous additive-noise setting is context; the stronger conditional theorem here is established by its authored Taylor proof.
- [Giles](https://people.maths.ox.ac.uk/gilesm/files/opre.pdf): section 2, common-path construction and grouped Brownian increments, PDF pp.2–3. The authored coupling result follows locally from the proved strong/conditional weak bounds; no general MLMC theorem is imported.

Current direct cited dependency Statements/Definitions were inspected, including finite-dimensional Brownian/normal conventions; predictable generators and stopped sigma-algebras; elementary and L2 Itô definitions, density, isometry, stopping and Doob; continuous Itô process and multidimensional/scalar formula; Tonelli, DCT, MCT, Holder, Gronwall and Cauchy–Schwarz; rational density; Gaussian moments, deterministic Gaussian integrals and characteristic functions. Batch-1 exact SDE definition/existence/moment interfaces and batch-2 recursion/interpolation/moment proofs were checked for the hypotheses actually used. This is a focused review, not a transitive audit of the published probability library.

## Consumers, metadata, published findings and blockers

No Statement or Definition changed. All consumer interfaces therefore remain intact, including H-M-S use of the maximal/increment lemmas, shared-rate use of both main convergence theorems, OU examples, learned-drift example and final coupling example. No necessary outside consumer repair, defective published item, withdrawal, or escalation was found. The batch-2 finding needs no producer repair. Published content was left read-only; no published-ledger entry is warranted.

The batch-3 manifest now declares the reader-added DCT/Tonelli dependencies. Contracts have complete specific risk reviews for all eleven HIGH/CRITICAL items, corrected exact DCT/Tonelli/SDE supplier quotations and the omitted F8 step-2.1 usage/input. Those quotation/input discrepancies were discovered by strict checking and synchronized after comparing actual source statements; no new mathematical premise or claim was introduced. No judge stamp was added or refreshed; no engine gate or judgment was initiated.

## Local checks

- Reflow: three locally edited items unchanged by formatter.
- Precheck: all five touched proof carriers passed, 0 failures.
- Strict proof contracts: all eleven batch items checked, 0 errors and 0 warnings after quotation/input synchronization (initial attempt reported seven discrepancies).
- Risk report before review: eleven HIGH/CRITICAL items. Required-review rerun: all eleven complete, 0 errors.
- Renderer: all three locally edited items, 0 errors or warnings.

Final batched layout check and obligation/manifest reconciliation follow. No unresolved mathematical blocker. Engine owns hash stamping, routing closure and the gate battery.

Final checks: batched `node tools/proof-layout.mjs` over all five touched carriers reports 5 items, 24 steps, 0 defects. Exact obligation reconciliation confirms seven unique decisions and all referenced ledger rows closed; manifest direct dependencies match all eleven current carriers. Frontier consumer record appended without modifying other owners' records.
