# Batch 4 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-4`. Completed routed review: 19 obligations; three reader repairs retained (two with concise proof clarifications); 15 published formatting findings confirmed nonfatal; one reader false positive. All eight HIGH/CRITICAL risk reviews complete.

## Level 1: lem-vc-loss-rademacher-bound

Verdict: accepted_repair. Reviewed Proof 1.1–4.1: loss subgraphs have index d+1 by coordinate flips; inactive heights cannot shatter. Applied thm-vc-covering-entropy with r=2, empirical Q and envelope 1. Finite trace separation permits a finite chain, no countable choice. Checked Hoeffding scaling (zero increments trivial), finite convexity induction, M=1, m=1, repeated points, singleton traces and d=0. Net-pair log bound and sum k*2^-k<=2 give exactly C_VC. Reader Jensen repair matches authenticated preimage and unchanged post-reader carrier; refuter has no findings. Local supplier statements read; JMLR Theorem 6 supplies qualitative context, not these constants.

Historical carrier: `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/lem-vc-loss-rademacher-bound.md`, raw SHA256 `fe4488abfdcdffde1e80623e0dd1612aa774b21466d513d3c21f0507ac0c7f64`, equals pre-reader fingerprint. Current raw SHA256 `64e78e6034cc88f387e0a095e96f49192e2fe4ab4844454acb9d869b35d33c77` equals post-reader fingerprint. Only direct convexity prerequisite and finite Jensen derivation changed; no Statement change, consumer repair, diagram, or unmet prerequisite.

## Level 2 risk reviews

`thm-sauer-shelah-growth-bound`: Read Proof 1.1–4.1 and actual suppliers thm-sauer-shelah, binomial count/theorem, exp lower bound/addition and exp definition. Trace-to-index-set bijection preserves dimension even with repeats; Sauer applies on [m]. Checked m=0, d=0, d>m and d=m. For 1<=d<=m, all added terms are nonnegative and the binomial expansion (m/d)^d(1+d/m)^m <= (em/d)^d is valid. No choice or diagram needed; reader/refuter report no defect.

`ex-affine-halfspaces-have-vc-dimension-p-plus-one`: Read Verification 1.1–2.1 and actual independence-list iff, finite spanning cardinal bound and standard-basis suppliers. Lower witness f(0)=s0, f(ei)=si realizes every labeling with nonzero margins. Augmented p+2-list dependence gives coefficients summing to zero with both signs. Label 0 forces strictly negative score, making every negative-coefficient product positive; sum contradiction proves upper bound, including repeated points. Reindexing supplier basis from 0 to 1 is harmless. p>=1 stated; closed halfspaces Borel. TikZ scale puts ei at drawing coordinate 2, boundary at 1, consistently representing x1+x2=1/2; labels and regions correct. Reader/refuter no finding.

`ex-intervals-on-the-real-line-have-vc-dimension-two`: Read Verification 1.1–3.1 with trace/growth definitions. Checked all four two-point labels using specified nonempty closed bounded intervals, and impossible 101 on sorted triples. Repeats cannot shatter. Every contiguous block and empty trace occurs, counting 1+m(m+1)/2; repeated coordinates reduce to r<=m distinct points, and m=0 gives 1. Borel measurability immediate for closed intervals. TikZ endpoints and middle-point inclusion match text; proof independent of sketch. Reader/refuter no finding.

No decisions are owed for these untouched, unflagged carriers.

## Level 3: uniform convergence

`thm-vc-entropy-uniform-convergence`: amended_repair. Read Proof 1.1–3.1, all actual risk/product/Fubini/expectation/concentration suppliers and completed loss-entropy lemma. Bounded measurable suprema ensure integrability and valid section expectations; each ghost coordinate has law P; coordinate swaps preserve product law. Symmetrization factor 2 is correct for one-sided loss complexity. McDiarmid requires AC, explicitly carried; coordinate bounds 1/m and t=sqrt(log(2/delta)/(2m)) give delta/2 per tail. Complemented classifiers preserve dimension, and the four explicit measurability clauses cover both classes. Checked d=0, m=1, singleton H and delta endpoints excluded. Reader finite-linearity repair accepted; amended only the phrase at confidence delta/2 to same delta and t, removing ambiguous double halving. Statement unchanged. No diagrams or prerequisite blocker.

`thm-vc-uniform-convergence`: amended_repair. Read Proof 1.1–6.1 and every actual direct supplier interface. Loss indicator measurable; bounded measurable ghost suprema admit Fubini and finite linearity, with no supremum/expectation interchange asserted as equality. Sign flips absorb fixed labels, yielding loss complexity exactly one half of binary +/-1 complexity. Finite exponential convexity induction and Hoeffding factorization yield E max(sum)/m <= log N/(m*lambda)+lambda/2. Made this normalization explicit; optimization still gives sqrt(2 log N/m). Sauer for 1<=d<=m and coordinate oscillations 1/m yield stated one-sided branch under AC. Finite supplier gives absolute branch choice-free; d=0 forces H singleton by pointwise disagreement contradiction. Checked N=1, m=1, repeats, bounded integrability and delta in (0,1). Reader finite-linearity/Jensen additions sound; Statement unchanged. No diagrams or blocker.

Authenticated original entropy/uniform preimages have raw hashes `91a0127611266562013a87c6c322fe9a88d9c347cfd3c7f9edfcc2ddb09d515e` and `a6e217789311a0d167f9be29e530471365112bbd5f5c3e2d9392820cea18b2bc`, matching pre-reader snapshots. Before my two wording/formula clarifications, current raw hashes equaled the post-reader snapshot (`e40214dc6927f88bcd795f111b0e8926e56431ad82c8004f2a55c2be169af799`, `0100095692712b9f28172f62d01a1f405e575447c92245b4d297e5a30d3a013b`). No historical uncertainty. Both original final claims are sound; the extra repairs are nonfatal proof presentation issues, not counterexamples. No material rewrite or judge record.

## Level 4 risk reviews

`thm-vc-agnostic-sample-complexity`: Read Proof 1.1–2.1, PAC/risk definitions, risk measurability, completed entropy deviation theorem, loss complexity constants, logarithm/exponential suppliers. All four entropy measurability clauses are carried verbatim, along with AC. Comparing approximate ERM with every h then taking infimum needs no risk minimizer; excess <=2a_m+eta. Sample premise gives each component of a_m <=epsilon/8 and eta<=epsilon/2, so total <=epsilon. Checked d=0 singleton, eta=0 and eta=epsilon/2, m>=1, all risks bounded and delta/epsilon endpoints excluded. No selector existence or algorithmic claim. No diagrams, reader/refuter findings or unmet prerequisite.

`thm-vc-realizable-sample-complexity`: Read Proof 1.1–5.1 and every actual supplier: PAC/risk/trace/growth, product/Tonelli, independence/factorization, linearity/Markov/union, logarithm derivative/integral, scalar integral order and exp laws. Checked p>epsilon, ghost Bernoulli moment E2^-K=(1-p/2)^m, m*epsilon>8 and 1/2<=log2<=47/60<4/5 yielding ghost success >=1/2. Witness is fixed pointwise without measurable selection; measurable E and B sections suffice for Tonelli. Uniform finite partitions and trace flips give 2 Pi(2m)2^(-m*epsilon/2), valid with repeats and k>m. Almost-sure consistency null set explicitly included. Recomputed q derivative negative for t>=M, q(M)<=L-13dL+D/L-16D<log(delta); constants 64 valid. d=0 realized singleton has zero risk. Countable H makes E/B countable measurable unions; no AC or learner existence claim. No diagrams, reader/refuter findings or blocker.

No decisions owed for these untouched, unflagged carriers. 

## Published reader findings

Published sources remain read-only. Each confirmed finding is dispositioned `nonfatal-recorded`, with owner editorial maintenance pending; closure here does not claim repair. The existing batch-16 AC defect is reused and its adjudication references merged rather than counted twice.

### reader:4:1 — def-axiom-of-choice

confirmed_nonfatal. Independently read ## Definition; ## Remarks, bullets 1, 3, and 4. Definition: 1 inline wikilinks, Remarks: 5 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 286a606279a9914e68ce1d7daa15be708a2d500d2cb6a8f2e4e3a10c35987f93. Set-indexed choice is explicitly assumed only for the McDiarmid concentration branch; finite trace choices need no AC. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `machine-learning-all-101-2026-10-19-3a-b16-published-format-1`.

### reader:4:2 — def-binomial-coefficient

confirmed_nonfatal. Independently read ## Definition; ## Remarks, bullet 2. Definition: 9 inline wikilinks, Remarks: 1 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 a60bfa622d2bd15b4c54f56d71d969ac88cdb9175ca11542f11833c68d87e24d. Finite-subset count gives binomial(m,0)=1 and binomial(m,j)=0 for j>m, exactly as used in Sauer. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-2`.

### reader:4:3 — def-identically-distributed-and-iid-random-variables

confirmed_nonfatal. Independently read ## Definition. Definition: 2 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 73836b7f9049a75effa9da9928b9043541fa072f89399470828fddce49cfe473. Mutual independence and common law supply product-law ghost marginals; no moment hypothesis is needed for bounded losses. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-3`.

### reader:4:4 — def-linear-independence

confirmed_nonfatal. Independently read ## Definition; ## Remarks, all three bullets. Definition: 14 inline wikilinks, Remarks: 6 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 a50f46e11f4bf35dbfcb157cffeff5174e56731824ba0034e8e450217ef90954. Finite-list dependence supplies a nonzero scalar relation; both positive and negative coefficients occur after augmentation by 1. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-4`.

### reader:4:5 — def-natural-logarithm

confirmed_nonfatal. Independently read ## Definition, paragraph 1. Definition: 1 inline wikilinks, Remarks: 0 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 59b44a0971937d851913cfeef4c487a8ed67abbd2fd50bf85a80fc1c3e872c83. Inverse exponential on positive inputs supplies logarithms in the finite-maximum estimate; every logarithm argument is positive. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-5`.

### reader:4:6 — def-product-sigma-algebra-and-finite-product-sigma-algebras

confirmed_nonfatal. Independently read ## Definition, product sigma-algebra paragraph. Definition: 1 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 04d3ea639e16a197ddb08d641c0fc587ae84b5d1490b0c6eba9a58f94a049cc6. The loss functions live on the binary product measurable space and the empirical measure is a probability measure on that space. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-6`.

### reader:4:7 — def-real-exponential-function-and-e

confirmed_nonfatal. Independently read ## Definition, first two paragraphs. Definition: 7 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 5515a09eeebd2bf3ff7f3fd8e73a88cf5bf9c918b261f1a6c2345e90734d0264. The all-real power-series exponential and e=exp(1) are the values used in the binomial growth bound. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-7`.

### reader:4:8 — def-vc-subgraph-class-and-index

confirmed_nonfatal. Independently read ## Definition, measurability and VC-index clauses. Definition: 4 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 cbbc65ce2448f3325e88cffe92ad839013f333186145d0455e04624a9d5df46e. Strict subgraphs use t<f(z); inactive heights cannot shatter, active heights recover binary loss traces, and V=d+1. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-8`.

### reader:4:9 — cor-independent-set-is-no-larger-than-a-finite-spanning-set

confirmed_nonfatal. Independently read ## Statement; ## Remarks, final bullet. Statement: 5 inline wikilinks, Remarks: 1 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 1e113e56ef4881559c7ef3d7c3f35cb2ddb955915a92b7f8684726f451d15bb2. The p+1 standard vectors span R^(p+1), so an independent set cannot contain p+2 vectors. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-9`.

### reader:4:10 — lem-independent-list-is-injective

confirmed_nonfatal. Independently read ## Statement; ## Remarks, all three bullets. Statement: 5 inline wikilinks, Remarks: 5 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 b93acf31a70a6da4bfc9b12dd3447aa16dcac7b14a5f7fdb940c2e061bc8730e. The exact independent-list iff injective-with-independent-image clause transports list size p+2 to set size p+2. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-10`.

### reader:4:11 — lem-standard-basis-of-f-n

confirmed_nonfatal. Independently read ## Statement; ## Remarks, all three bullets. Statement: 8 inline wikilinks, Remarks: 4 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 e586a7cc85fc2baae06608790172fcb9b9e8502f627339bf50c2d7e893d6a10d. The explicit finite standard basis spans and has the expected coordinates; harmless reindexing gives the example's e_1,...,e_p. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-11`.

### reader:4:12 — thm-binomial-theorem

confirmed_nonfatal. Independently read ## Statement; ## Remarks, all three bullets. Statement: 3 inline wikilinks, Remarks: 3 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 02793df3441eeb2f2c1c9a695ba24ebc31d573824ebdadef77a0169c384833e2. The real binomial formula includes the canonical natural embedding and zero-exponent convention; used at 1+d/m. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-12`.

### reader:4:13 — thm-geometric-series

confirmed_nonfatal. Independently read ## Statement; ## Remarks, both bullets. Statement: 2 inline wikilinks, Remarks: 2 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 9c70c7d30be7f01d2b15383bac3e5ce500d0d92d9874ee36a3bc54f1976038cf. The series starts at k=0 with sum 2 at r=1/2, so the chain's k>=1 sum is 1. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-13`.

### reader:4:14 — thm-independent-random-elements-have-product-joint-law

false_positive. Independently read the complete current Statement: it contains no wikilink, Markdown link, autolink or HTML anchor; the product sigma-algebra supplier link is in Facts L4 and Proof, where links are permitted. Current content guard equals routed pre_sha256 7e551b8cf48cd713834443e4c11d4a91b672243ab5443352d8aa07bdb0d4c21f. The current raw carrier fingerprint also equals routed observed_sha256; HEAD 603500781c has the same clean Statement. Thus the alleged link was absent from the exact routed source; no repair or historical-change explanation is needed. The statement gives the joint law of n>=1 mutually independent random elements on the recursively finite product sigma-algebra, with no inline link. Defect ledger: `ml101-b4-3a-published-format-14`.

### reader:4:15 — thm-mcdiarmid-bounded-differences

confirmed_nonfatal. Independently read ## Statement, setup paragraph. Statement: 3 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 5a59d4b8aa11a18acb64226c3afb529e0c5d9f8de4b4b344aa9a5ee3d52774ea. The product-measurable bounded supremum is integrable, coordinate oscillations are 1/m, and the explicit AC hypothesis is carried. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-15`.

### reader:4:16 — thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique

confirmed_nonfatal. Independently read ## Statement, clause 1. Statement: 1 inline wikilinks. No immediately following corresponding references sections. Current content guard equals routed pre_sha256 6b1adf88ec2545c23c58594a3a7ecac2549d47d3ee7407d08a2322a6750c413c. Probability factors are sigma-finite; existence, rectangle formula and uniqueness justify ghost construction and finite coordinate swaps. This is a statement-first editorial defect, not a mathematical counterexample. Published carrier kept read-only; owner must move and preserve all links after the complete sections. Closed nonfatal-recorded disposition leaves editorial maintenance pending. Defect ledger: `ml101-b4-3a-published-format-16`.

## Sources and review limits

Read each current assigned proof and actual direct supplier Statement/Definition, with exact citation quotes in the batch proof contract. Published findings concern the complete named sections; this is not a transitive whole-library audit. Reader report and reader-findings JSON were independently checked; refute-4.json has no flagged findings. The two assigned pages are frontmatter-only, retain compact-v1, and preserve the nine A-items and four B-items in order; no page decision is owed. Both additional threshold/singleton sketches match their endpoint and one-positive-coordinate conventions. All four diagram arguments remain independent of their sketches; no missing diagram is needed. All 13 authored description/statement sections are uninterrupted by hyperlinks.

Author-linked Mohri–Rostamizadeh–Talwalkar second-edition PDF downloaded from https://dl.dropboxusercontent.com/s/38p0j6ds5q9c8oe/10290.pdf (505 pages); read PDF pp.47–55, 58–60 and 74–75: definitions, complete relevant symmetrization/normalization/maximum argument, examples/Radon proof, Sauer/estimate proof and realizable exercise. The book uses set samples and implicit measurability; local arguments explicitly handle indexed repeats and required measurable suprema. Its exercise gives the double-sample target, not the local numerical sample-size constant. Bartlett–Mendelson https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf: read Theorems 5–6 (printed p.465/PDF 3), Definition 2 (printed p.464/PDF 2), and full Appendix B (printed p.480/PDF 18). Its normalization differs (2/m and an absolute supremum); local constants were derived independently rather than imported. No reliance on the unavailable Pollard PDF or a reader's claim to have read it.

## Checks and owner handoff

Strict proof-contract initially found two quote mismatches: exp(x) in quote mirrors versus exp x in the actual convexity Statement. Synchronized those two exact quotation mirrors without changing the supplier or item mathematics. Strict rerun: 13/13 items, zero errors/warnings. Precheck passed on both locally edited items; rendercheck passed both with actual KaTeX/YAML. Final risk/layout results are recorded below. No judge run, stamping, acceptance certification, dispatch or stage transition.

The run was verified from .autopilot and git log: HEAD 603500781c; status still running, adjudication 18/101 covered before this handoff, with batch 4 absent and unrelated split-8 failure. No run controls changed. Batch 4 has no mathematical blocker or unresolved substantial prerequisite. Fifteen published editorial maintenance alerts go to the owner; no published repair is claimed. Stable IDs, inventories and existing proposed withdrawals preserved. No original Statement/Definition changed, so no new direct/indirect consumer repair propagation is triggered. Owned cross-batch uses remain sound under unchanged supplier interfaces; corresponding frontier ledger entry points to this evidence.

Final focused checks:

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-4.proof-contracts.json` initially routed eight HIGH/CRITICAL items; all eight now have item-specific complete Alpha risk reviews. Rerun with `--require-reviewed`: zero errors, 13 items routed.
- `node tools/proof-layout.mjs items/thm-vc-entropy-uniform-convergence.md items/thm-vc-uniform-convergence.md` ran once after final item edits: 2 items, 9 steps, zero defects. No later item edits or formatter.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-4.proof-contracts.json --strict`: 13/13 checked, zero errors/warnings after exact quote mirror corrections.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-vc-entropy-uniform-convergence.md items/thm-vc-uniform-convergence.md`: both pass. `node tools/rendercheck.mjs` on those same paths: both pass, actual KaTeX/YAML.
- Focused authored statement inspection, current manifest dependency equality, exact 19-obligation decision coverage, and all 16 unchanged published raw/guard bindings: pass.
- Closed ledger reference check: all 19 decisions reference exact closed rows; each of the 16 reader obligations references exactly one row. There are 21 distinct rows including the reused AC defect. Nonempty focused `defect-ledger validate` selection: 21 checked, zero errors. An initial extraction script failed on legacy string-shaped adjudication refs; corrected the selector to require object refs and asserted 21 nonempty rows before validating; the earlier zero-row result is not counted.
- Run-wide `node tools/defect-ledger.mjs validate --run machine-learning-all-101-2026-10-19` exited 1 with eight outside schema errors, all in batch 11: sign-tail-source-locator and posterior-odds-source-locator use unsupported location `sources-and-statement-references` and evidence entries without path; dimension-radius-borel-hypothesis and natural-robust-borel-hypothesis use unsupported subclass `hypothesis-missing` and location `example-and-facts`. Route these exact mechanical issues to batch 11/owner; no defect row is created for this validation failure, and no foreign row is repaired.

Final local item source bytes (reporting evidence only, not decision stamps):

- `lem-vc-loss-rademacher-bound`: `64e78e6034cc88f387e0a095e96f49192e2fe4ab4844454acb9d869b35d33c77`.
- `thm-vc-entropy-uniform-convergence`: `6af2394744e6d94166e49455a7d6633a87b428e87da97dab263deabcefdfd3c8`.
- `thm-vc-uniform-convergence`: `12b159afb26ea7787213f48e348973e0791efea928e84500a996d9be8708afc9`.

Completed repairs have `repair_confidence: 1`; published alerts and false-positive finding claim no repair. The engine owns all decision stamps, gates and later transitions.
