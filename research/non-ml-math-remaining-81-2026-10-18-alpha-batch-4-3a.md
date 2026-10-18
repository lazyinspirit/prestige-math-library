# Step 3a adjudication — batch 4

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-4`; owned batch: `4`.

Scope owes one touched obligation (`thm-it-finite-entropy-chain-rule`); reader findings and refuter flags are empty. No page obligations. The scope’s historical group `m` is unchanged.

## Dependency-ordered review

### Level 0 — lem-it-finite-kl-agrees-with-measurable-kl

Reviewed steps 1.1–3.1 and current interfaces for finite probability measures, absolute continuity, RN classes, finite weighted expectation and general KL. Singleton support failure is equivalent to failure of absolute continuity on the full finite power set; otherwise r_i=p_i/q_i for q_i>0 and 0 elsewhere gives the event integral explicitly. The log-density is a finite real function after setting its value to zero at density zero, so no improper integral or infinity subtraction occurs. Empty S cannot carry a probability vector; zero coordinates and singleton laws are covered. AC is retained only for the published general-KL interface, with no finite construction using choice. Reader and refuter report no outstanding finding.

Current item and exact cited dependency sections were read; this is interface review, not a transitive audit of published proofs. No repair, defect or blocker. Next: log-sum inequality.

### Level 1 — lem-it-finite-log-sum-inequality

Reviewed every proof step and exact derivative, continuity, mean-value, strict-convexity and finite-Jensen interfaces. On positive compact intervals the strictly increasing derivative gives strict secant-slope convexity; the separate f(lambda*y) calculation proves the zero endpoint without assuming log(0) exists or invoking an unstated limit. Jensen uses the nonempty positive b-support only. A=0 (including an empty index set), B=0, and singular support are separated before division. For A,B>0 the nonconstant-ratio grouping gives strict Jensen using positive normalized remaining weights, hence equality iff all coordinates are proportional, including b_i=0. No choice axiom, missing equality theorem, or infinity subtraction. Reader/refuter contain no finding.

No repair or blocker. Next: KL nonnegativity/equality.

### Level 2 — thm-it-finite-kl-nonnegative-equality

Reviewed both steps against the already reviewed finite log-sum lemma and finite-KL definition. Both vector totals are exactly one, so log-sum gives lower bound ln(1)=0 and proportionality constant one. Singular support gives infinity, never zero; conversely equal laws give only ln(1) terms. Zero coordinates, singleton laws and both iff directions are covered; an empty alphabet admits no pmf. No choice or analytic limit. Gray Lemma 2.3.1 and Theorem 2.3.1 (printed pp. 21–22) agree with the statement. No reader/refuter finding or remaining defect.

No repair or blocker. Next: the three level-3 risk reviews.

### Level 3 — thm-it-finite-conditional-mutual-information-identities-and-equality

Read both steps and all five exact suppliers. At each positive-mass z the conditional joint and product marginals are normalized; positive joint support forces positive marginal support. Expanding only these terms yields the three finite entropies, and summing gives the claimed identity. Nonnegative finite KL terms with strictly positive weights sum to zero iff every term vanishes; the reviewed KL equality criterion gives factorization in both directions. No condition is imposed at zero-mass z, and singleton/deterministic conditionals are valid. No AC or infinity subtraction. Gray Lemma 2.5.5, printed pp. 40–41, confirms the nonnegativity and conditional-independence criterion. Reader/refuter give no contrary finding.

No repair or blocker.

### Level 3 — thm-it-information-unit-conversion

Read steps 1.1–2.1 and all defining suppliers. The hypothesis b>1 gives a finite strictly positive ln(b); on every positive finite support term change of base factors out 1/ln(b). Zero masses keep their assigned zero contribution; singular KL remains infinity in both bases. Conditional averages omit zero-mass conditioning and have finite normalized conditional laws; mutual information has positive reference masses on its support. Thus none of the conversions subtracts infinite values. Bases 2 and e and singleton laws agree with the conventions. Choice-free. Gray §2.2, printed p. 18, confirms nats/bits. Reader/refuter have no findings.

No repair or blocker.

### Level 3 — ex-it-binary-entropy-and-extremizers

Read all three verification steps and their finite-entropy, KL-equality and log-law suppliers. p in [0,1] ensures a normalized Bernoulli vector. Endpoint values use the assigned zero terms and ln(1)=0; for 0<p<1 both entropy summands are strictly positive. The uniform reference has no zero mass, and D(q||u)=ln(2)-h(p) holds with zero terms omitted even at endpoints. KL equality gives precisely p=1/2, proving the attained unique maximum and both directions of the zero characterization. No limiting argument or choice is needed. Gray §2.3 uniform-reference calculation, printed p. 23, agrees. Reader/refuter have no finding.

No repair or blocker.

### Level 4 — thm-it-finite-entropy-chain-rule

Read all three steps and seven current prerequisites. In 1.1 the positive joint support is exactly q_x>0 and q_{y|x}>0, so both logarithms in the product expansion are defined; the retained conditional entropy average omits zero-mass x as required by its definition. Positive conditional weights normalize to one; multiplying by p_Z(z) identifies p_XZ(x,z)=p_Z(z)q_x, giving H(Y|X,Z). Step 1.2 expands only positive joint support to establish both MI entropy differences. Step 2.1 combines the reviewed CMI identity and conditional chain rule, using only finite real entropy differences. Singleton, deterministic and zero-marginal cases hold. No AC. Gray Corollary 2.5.1, printed p. 41, gives the compatible chain rules. Current raw hash exactly equals the frozen reader-post hash; the hash-matching preimage shows only the support restriction and explanation changed. Accept the complete reader repair with confidence 1; no outstanding reader/refuter finding.

Verdict: `accepted_repair`, repair confidence 1. Exact preimage: `research/non-ml-math-remaining-81-2026-10-18-owner-step2-qre-resolution/batch24-owner-addendum/proposal/items/thm-it-finite-entropy-chain-rule.md` (SHA256 `4714a2d8e0c93cc134c567e05a201fb7f66d7e85d09f31fd6017c5f5bafad568`). Current/post SHA256: `b4571f0e0f6914c8929812d7f02b5c54f714d0e6a534ecac5fc194f2970e0fcd`. The pre/post manifest hash is identical. The old sum admitted q_{y|x}=0 inside ln(q_x)+ln(q_{y|x}); the zero-product convention alone does not define that inner logarithm. The intended identity is sound and its immediate support restriction supplies a complete local correction; severity nonfatal. Closed defect: `non-ml-math-remaining-81-2026-10-18-batch-4-D001`. No Statement/Definition change or consumer repair is needed. No judge stamp was present. Next: independent/deterministic example.

### Level 5 — ex-it-independent-and-deterministic-information

Reviewed both verification steps and all four suppliers, including the accepted chain-rule proof. Independence makes the joint/product reference laws equal on all coordinates and each positive-support ratio exactly one. When Y=f(X), every positive-mass conditional Y-law is a point mass; its entropy is zero, so the defining average gives H(Y|X)=0 and the finite MI identity gives I(X;Y)=H(Y). Zero-mass x never requires a conditional law. Singleton, constant and noninjective f cases are included; no inverse or injectivity assumption, logarithm of zero, or choice is used. Reader and refuter report no finding.

No repair or blocker. Opened the Markov-DPI supplier’s two proof steps as Fano context: conditional independence gives I(X;Z|Y)=0, and the two chain expansions give the nonnegative gap I(X;Y|Z), with exactly the stated equality case. Next: Fano.

### Level 6 — thm-it-fano-inequality

Read all six proof steps and all five exact suppliers, including the two-step Markov-DPI proof. The estimator factorization implies conditional independence at every positive-mass Y, permitting DPI and the direction H(X|Y)<=H(X|estimate). The explicitly defined error indicator has zero conditional entropy given X,estimate, giving the chain decomposition. KL supplies H(E|estimate)<=H(E). On a positive-mass error branch, a same-alphabet estimate excludes exactly its own symbol, leaving at most m-1 possible X values; uniform comparison on k=m-1 proves the support entropy bound, including k=1. The m=1 case is separated before ln(m-1). Endpoint error probabilities omit impossible branches; binary KL gives h_2<=ln(2). No Fano equality characterization is asserted, despite the risk signal from the cited KL iff. Finite sums only, no AC. Polyanskiy–Wu Theorem 3.12, printed pp. 57–58, independently confirms the randomized-estimator Markov hypothesis and sharp bound. Reader/refuter contain no finding.

No repair or blocker. Next: arbitrary-output Fano corollary.

### Level 7 — cor-it-fano-with-erasure-or-out-of-alphabet-estimates

Read all four steps and seven exact suppliers after completing the Fano review. The explicit Markov factorization is retained for arbitrary finite output alphabets and supplies DPI in the needed direction. E=0 forces X equal to the output; on E=1, outside-alphabet outputs exclude no message, so the proof correctly uses at most m possibilities rather than m-1. Uniform KL comparison proves the entropy bound; finite averaging gives P_e*ln(m). For uniform X, H(X)=ln(m) gives the stated rearrangement without division by ln(m). The separate m=1 case includes arbitrary erasure probabilities, zero MI and nonnegative binary entropy. P_e=0,1 omit impossible branches. No added sharp m-1 claim, infinite subtraction or AC. Gray Lemma 4.2.1, printed pp. 72–73, and Polyanskiy–Wu Theorem 3.12, printed pp. 57–58, support the error method; the arbitrary-output m bound is independently proved locally. No reader/refuter finding or defect.

No repair or blocker. All ten required risk reviews are complete.

## Source and prerequisite evidence

Read all 17 current batch carriers and the two page summaries; no additional page obligation is created. The directional-KL witness gives finite -ln(epsilon) versus infinity for 0<epsilon<1; the disjoint point masses give infinity in both directions. Both page summaries agree with the current results. The owned cross-batch dependency artifact is an empty array. Published suppliers were read at their exact used Definition/Statement sections; their transitive proofs were not re-audited. No defective published item was identified, and published carriers remain read-only.

Authoritative texts consulted directly:

- [Gray, corrected first edition](https://ee.stanford.edu/~gray/it.pdf): §2.2 printed p. 18 (entropy and units); Lemma 2.3.1 and Theorem 2.3.1 printed pp. 21–22 (KL and equality), the uniform-reference calculation on p. 23; Lemma 2.5.5 and Corollary 2.5.1 printed pp. 40–41 (conditional independence and chain rules); Lemma 4.2.1 and its full proof printed pp. 72–73 (common-alphabet error bound). The local Fano proof uses the binary error indicator; Gray uses a finite error-label encoding.
- [Polyanskiy–Wu, author prepublication](https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf): §2.1 equations (2.1)–(2.5) and Definition 2.1, printed pp. 21–22 (finite support, RN density and KL); Theorem 3.7 printed pp. 51–52 (CMI and DPI); Theorem 3.12 with full proof, printed pp. 57–58 (randomized estimator and Fano). Finite alphabets satisfy their standard-Borel assumptions; their logarithm unit convention is reconciled by the explicit local base conversion.

The current mathematical arguments were independently checked, rather than inferred from either review report or the contract worksheets. No source or judge acceptance was substituted for a local proof.

## Changes and decisions

Exactly one decision is owed and supplied: `touched:4:thm-it-finite-entropy-chain-rule`, `accepted_repair`, confidence 1, referencing closed defect `non-ml-math-remaining-81-2026-10-18-batch-4-D001`. No reader/refuter finding, page obligation, or additional decision is owed. The reader’s existing repair is retained byte for byte; this adjudication edits no item or page. Ten `risk_review` records were added to the owning contract, one after each completed review in the prescribed dependency order. The frontier dependency ledger records the owned consumer review; existing withdrawals and outside records are preserved. The defect ledger was appended through its locked tool and its generated view refreshed.

Current raw hashes of all 17 items match the frozen post-reader snapshot. Comparing pre/post item, manifest and contract fingerprints finds precisely the routed chain-rule delta; its manifest fingerprint is unchanged. An exact full preimage was recovered and matched to the pre-reader hash, so no historical-byte escalation or current-content exception is required.

## Local validation and handoff

- Initial `risk-report.mjs` without `--require-reviewed`: 17 items routed, ten HIGH/CRITICAL, zero errors.
- Final `risk-report.mjs` with `--require-reviewed`: 17 items routed, all required reviews complete, zero errors.
- `proof-contract.mjs` on the touched item: pass, zero errors/warnings. The subsequent batch-scoped contract check also passes all 17 current contracts with zero errors/warnings.
- `precheck.mts` on the accepted chain-rule carrier: one checked, zero failures.
- Exact raw current/post item comparison: 17 matches; no unexpected pre/post carrier delta.

No blockers, open escalations, outside consumer repairs or published findings. No judgment, stamp, certification, dispatch, engine transition or gate battery was initiated; hashes on decisions remain for the engine to stamp.

Final required layout check: `node tools/proof-layout.mjs items/thm-it-finite-entropy-chain-rule.md` — 1 item, 3 steps, 0 defects (exit 0). No item edit or formatter followed it.
