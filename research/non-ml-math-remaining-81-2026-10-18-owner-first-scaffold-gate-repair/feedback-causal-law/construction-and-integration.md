# Feedback causal-law correction — isolated issue cycle 1

The current canonical feedback definition and theorem F1 remain false at packet seal; this packet contains proposals only. No canonical file, native record, runtime, readiness, source-reading attribution, ledger packet or production gate has been changed.

## Confirmed defect and exact correction

Take one message, n=2, binary input/output alphabets, W(y|x)=1/2 for every x,y, X1=0 and X2=Y1. The causal construction gives each output word probability 1/4. Conditional on the realized input word X^2=(0,0), Y1=0 certainly, and P(Y1=0,Y2=0|X^2=(0,0))=1/2. The asserted DMC product evaluated at that input word gives 1/4. Thus the original conditional-product sentence is a real defect, not just an alternative reading of feedback.

The proposal defines P(M=m,Y^n=y^n)=M^{-1} product_i W(y_i|f_i(m,y^{i-1})). X_i remains the deterministic causal function already specified. Backward finite summation over y_n,...,y_1 and then messages proves normalization. Every positive-probability prefix has the required next-row conditional. Zero-probability histories carry no conditional assertion; their encoder values still exist. This permits all original causal maps, all finite stochastic rows including zeros/deterministic rows, n=1, a singleton message, and singleton alphabets. Uniform messages, decoder, average error, natural rates, asymptotic closure, no input-cost constraint and no-choice convention are preserved. The original normalization proof's argument is retained and made explicit, rather than using an invalid conditional on the realized whole input word.

The ordinary DMC supplier exports a single-use stochastic row W. Its ordinary fixed-input block kernel is a valid separate definition and is unchanged. F1 of the feedback definition is corrected to cite only that single-use row; the feedback interconnection defines the causal joint distribution locally. No independent coordinate assertion conditional on the realized feedback input word is imported from the ordinary block kernel.

## Consumer proof check

The only actual logical item consumer is thm-it-finite-dmc-feedback-does-not-increase-capacity. Its F1 repeats the defective wording and is surgically replaced. Its Statement and complete Proof are byte-identical. For step 2.1, put H=(M,Y^{i-1}) and X_i=f_i(H). The corrected kernel gives P(Y_i=y|H=h)=W(y|f_i(h)) on positive-mass h. Summing these conditionals over histories with X_i=x proves P(Y_i=y|X_i=x)=W(y|x). Both H(Y_i|H) and H(Y_i|X_i) therefore equal the same row-entropy average; the converse bound is sound and does not condition on future X values. Ordinary encoders ignoring feedback still give the direct bound. All capacity conclusions remain unchanged.

Full canonical item/page/article exact-token search includes dependency lists, alias fields, wikilinks and prose. Actual source and all current run manifest dependency declarations agree on the unique direct item consumer; there is no further indirect item consumer. Neither corrected ID has aliases. The similarly named cost-constrained feedback definition is a distinct interface, not an alias, and its explicit causal law and consumer proof were read and already correct. Four pages form the complete source+manifest page-route closure. Each was read fully; all need no change, with exact reasons in consumer-dispositions.json. Page prerequisites are not promoted to logical uses of every item on the supplier page.

## Root integration and evidence currency

Integrate the two proposed item files supplier-first after comparing before hashes. Mirror the changed definition excerpt into the theorem contract's F1 citation and the definition's changed step-1-1 claim into its own contract. All dependency IDs, levels, titles, original source references and manifest statement summaries are unchanged. Root owns any contract regeneration, current source hashes and readiness/ledger recertification.

The archived active batch18 cross-batch-dependencies.json contains old observed F1 quotes (including the original definition F1), and source-evidence.json likewise records the old native read interface. Preserve those historical observations truthfully; append/bind the corrected current causal interpretation rather than silently rewriting native coverage. The frozen cross-batch-it ledger proposal already distinguishes the single-use causal interface and explicitly flags this source defect as unrepaired. Its source hash bindings are the pre-repair canonical bytes and require root rebind on integration. Do not mutate that frozen packet to pretend these proposals were previously canonical. The original native authoring/read/fetch histories are unchanged; this packet makes no new literature-reading claim.

## Focused checks and limits

Actual isolated proposal precheck: 2/2 pass. Actual isolated rendercheck: 2 checked, no errors or warnings. Actual isolated proof-layout: 2 items, 6 steps, zero defects. The theorem Proof and both complete frontmatters are byte-identical. Strict contracts were not asserted current against isolated drafts; root must mirror and check them after canonical integration. No production gate was invoked. The complete 17-file before archive is hash guarded. This is one bounded supplier/consumer repair cycle; no unresolved mathematical gap remains in this interface proposal.
