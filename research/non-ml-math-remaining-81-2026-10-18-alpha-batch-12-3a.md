# Batch 12 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-12`.

Scope: one reader published-dependency obligation, no touched/page/refuter obligations. Reader and refuter report no editable carrier defect. Pre/post inventory manifests and item hashes are unchanged. Published carriers remain read-only.

## Completed item reviews

`lem-discrete-memoryless-channel-capacity-is-attained`: Read Proof 1.1–3.1 and each F1–F5 supplier. Entropy identity is finite on the whole simplex; t log t tends to zero at zero by the cited positive-power limit. The nonempty finite input simplex is closed/bounded in dimension >=1, so the exact ZF extreme-value theorem supplies a maximizer. Includes boundary input laws, zero transitions and singleton alphabets; no AC or unsupported external premise.

`lem-discrete-memoryless-channel-iid-information-density-converges`: Read Proof 1.1–2.1 and F1–F3 definitions. Positive joint support forces positive output marginal, so information density has finitely many finite values almost surely despite its off-support -infinity convention. Its expectation equals finite MI; independent summands have variance nv. The displayed squared-deviation bound proves convergence for every eta>0, including v=0. No process extension is asserted or selected; the IID sequence is given.

`lem-discrete-memoryless-channel-n-letter-information-bound`: Read Proof 1.1–2.1, exact finite entropy-chain and conditional-MI suppliers, and product-kernel normalization. Chain/subadditivity applies to arbitrary dependent input coordinates. Conditional independence of outputs given the complete input follows by finite product summation at positive conditioning atoms; zero atoms are omitted. Thus H(Y^n|X^n)=sum H(Y_i|X_i), yielding sum I(X_i;Y_i)<=nC. n=1, deterministic and singleton cases hold; no IID input or AC assumed.

`lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound`: Read all three proof steps, exact F1–F6 suppliers and KL/f-divergence/convex-boundary completeness path. If a previously unused output is reachable, its -ta log t gain dominates all O(t) losses, contradicting maximality. Removing those coordinates makes the finite right derivative valid; normalization cancels the +1 terms and yields D(row||Q*)-C<=0, in the stated KL direction for every row including unused inputs. Zero/unreachable outputs are omitted and singleton cases hold. Independently rejected reader:12:1: s-s′=(s-a_k)+(a_k-b_k)+(b_k-s′)<=|s-a_k|+(a_k-b_k)+|b_k-s′|<2epsilon since a_k<=b_k; no published defect or missing prerequisite.

Reader:12:1 is false_positive. No absolute-value bound is applied to the middle summand; its negative sign improves the upper estimate. Thus the report’s proposed replacement is unnecessary. Published content remains unchanged.



`thm-discrete-memoryless-channel-random-coding-achievability`: Read every step and F1–F5 suppliers. R=0 uses one message. For R>0, delta=(C-R)/3 separates the threshold from nC, and the IID variance limit gives the miss bound. Each independent competitor has E exp(i)=1 with zeros omitted; finite union bound gives exp(-n delta). Finite ensemble averaging yields a deterministic code. Repeated codewords are allowed by the code definition; default decoding cannot enlarge the union bound. To select a sequence without AC, fix finite alphabet orders and choose the first codebook whose error is at most the finite ensemble mean at each n. No defect or substantial missing prerequisite.

`lem-discrete-memoryless-channel-information-density-concentration`: Read both steps and all F1–F3 suppliers. The already-reviewed optimizing-output lemma supplies every row support and mean<=C, including unused inputs. Finite nonempty X gives finite V=max row variance, independent of n, word and delta. Product channel gives independent (not necessarily identically distributed) row likelihoods, mean<=nC and variance<=nV. Squared deviation bounds the strict upper tail by V/(n delta^2); V=0 and singleton/deterministic cases are included. Ratios are restricted to positive channel support.

`thm-discrete-memoryless-channel-average-error-converse`: Read all three steps and exact F1–F4 sources, including the full Fano proof and its m=1 case. Deterministic encoding need not be injective: conditioning on a message or its codeword gives the identical row law, so I(J;Y^n)=I(X^n;Y^n). Fano applies to uniform J and deterministic decoder. Combine nC bound and eventually positive 1-epsilon to conclude limsup rate<=C. Includes zero capacity and M=1. No choice or unproved asymptotic premise.



`thm-discrete-memoryless-channel-alphabet-scoped-strong-converse`: Read Proof 1.1–3.1 and every cited supplier. Optimizing Q* dominates each channel row. Split each decoding region on its supported likelihood ratio and bound its low part by exp(tau) Q*^n(D_m). At tau=n(C+eta), uniform row-word concentration bounds the high part by V/(n eta^2). Disjoint regions have total Q* mass<=1, and strict liminf rate>C permits eventual rate>=C+2eta. Success<=V/(n eta^2)+exp(-n eta) tends to zero; maximal error>=average error gives both conclusions. Handles zero rows on unreachable outputs, zero capacity and repeated codewords. Scope is explicitly finite alphabets, no cost constraint.

`thm-discrete-memoryless-channel-capacity-formula`: Read Proof 1.1–2.1, all F1–F7 sources, operational-rate definition, full expurgation lemma and KL nonnegativity proof. Reliable maximal implies reliable average and Fano/nC gives both upper bounds. For C>0 random coding approaches C from below and expurgation preserves liminf rates with at most ln2/n loss. For C=0, a one-message code witnesses rate zero under both errors; finite MI nonnegativity exhausts cases. The finite maximum supplier identifies C=max I. Retained sets are nonempty even at M=1 or zero error, and deterministic relabeling preserves correct decodes. No AC or claim of achieving the endpoint rate is required.



`ex-binary-erasure-channel-capacity`: Read both verification steps and every F1–F5 supplier. Identical erasure probability for each input makes the erasure independent of X, so H(X|Y)=epsilon h(r) with zero-mass branches omitted. At epsilon=0 there is no conditional law to evaluate on the absent erasure branch, and at epsilon=1 the bit branches vanish. I=(1-epsilon)h(r), KL comparison with the binary uniform gives h(r)<=ln2, and r=1/2 attains the bound including both channel endpoints. Input endpoints r=0,1 give zero information; no undefined logarithm occurs under 0 log 0 convention.

`ex-binary-symmetric-channel-capacity`: Read both verification steps and exact F1–F5 suppliers. For every p,r in [0,1], q=p+r(1-2p) is the output parameter and each row has entropy h(p). Thus I=h(q)-h(p)<=ln2-h(p), using KL versus the binary uniform; r=1/2 gives q=1/2 for every p and attains equality. At p=0,1 the channel is a bijection with capacity ln2; at p=1/2 identical rows give zero. Input endpoints and zero masses use the explicit 0 log 0 convention. The maximizing information is the operational capacity by the reviewed theorem.



## Routed decision — reader:12:1

Independently read the entire current published corollary, its actual order/completeness/density interfaces, and the consumer's KL/f-divergence/convex-boundary prerequisite path. In Proof 6.1, s-s'=(s-a_k)+(a_k-b_k)+(b_k-s'). Replacing only the first and last summands by their absolute values gives the displayed upper bound, and a_k-b_k<=0 makes it <2 epsilon under the two convergence bounds. The negative middle term strengthens the estimate; it is not an absolute-value estimate on that term. Thus reader:12:1 is false_positive. No repair or published defect. Current raw SHA256 da601eb01a4f33b895563745bf2b9e8b1365dfbe1077d5c6cd86402b4986e269 reproduces the routed observed fingerprint 6b5e38421e34e447460a470390526ea35722d36d5235e32c22a9add2b11cd82f; current guard equals routed pre_sha256 616121b4243bd181d7f1b478c0208071168628590f3f1092144a0af740688326.

Closed ledger disposition: `false-positive`, row `non-ml-math-remaining-81-2026-10-18-batch-12-FP001`. This row records the rejected allegation, not a confirmed defect. No published ledger entry or classification change is appropriate because the published argument is sound. No source, title, statement, definition, dependency, manifest, provenance or judge record changed.

## Evidence and scope

Reviewed current local carriers and exact cited item statements/definitions; all 70 HIGH/CRITICAL citation quotes occur verbatim in their current suppliers. Read the complete published completeness proof, finite entropy/conditional-MI/Fano proofs, the finite KL proof, and the relevant convex-boundary path. No external source retrieval was needed for these elementary arguments; bibliography URLs were not independently audited and no such audit is claimed. Prerequisite review is bounded to the interfaces used, not a transitive audit of every foundational supplier.

The reader and refuter artifacts contain no assigned draft findings. All item/contract/manifest pre/post inventory hashes agree, so no reader repair needs acceptance/amendment/reversion. Risk reviews are audit enrichment only and do not add decisions for untouched unflagged items. No substantial unmet prerequisite or blocker remains.

## Checks

- Initial risk-report: 11 HIGH/CRITICAL items identified; 0 errors across 20 items.
- Final `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-12.proof-contracts.json --require-reviewed`: exit 0, 0 errors, all 11 required risk reviews complete.
- `node tools/defect-ledger.mjs validate --run non-ml-math-remaining-81-2026-10-18`: exit 0, 4 run rows checked, 0 errors at check time. The false-positive row was appended with `--no-render`; shared generated-view rendering remains engine-owned.
- Focused byte/coverage check: all 20 current item raw hashes equal the post-reader inventory; pre/post item, contract, manifest and page hash records agree. All 70 reviewed citation quotes match current suppliers exactly. Exactly one decision covers the sole routed obligation and references exactly one closed false-positive row.

Only the eleven `risk_review` fields in the owned contract were enriched; the report, decisions and ledger/dependency notes record the review. No item/page source was edited. No item was edited, so proof reflow, precheck and final proof-layout are not applicable. Engine owns hash stamps and gates; none initiated.
