# Shard 04 fatal-defect review

All 102 assigned items have assignment-order receipts in `agent-04-receipts.jsonl`. This is an item-level local review, not a transitive-closure certification or independent judgment. Canonical-index states were read before classification. The receipts preserve 29 U-P items as `already_up` and nine A-P items as `already_pending`; no A-P or U-P row was treated as cleared by a conditional proof. The remaining dispositions are 60 clear, three locally repaired, and one `propose_up` with a partial local proof repair. The report records the actionable findings and limitations; root owns ledger and downstream classification.

## Actual Statement change: symmetric Local Lemma

`cor-symmetric-lovasz-local-lemma` originally quantified an arbitrary event family `(A_i)_{i\in I}` and concluded `P(\bigcap_i A_i^c)>0`. Its Facts and cited `thm-asymmetric-lovasz-local-lemma` require a **finite** family. The unrestricted claim is false: take countably many independent events of constant probability `p` with `0<p\le 1/e` and `d=0`; the probability of avoiding every event is `lim_n(1-p)^n=0`. I inserted “finite family of events” into the original `## Statement` and changed no proof step. This is a genuine Statement change. Targeted precheck passes.

Direct published reference/dependency consumer: `thm-hypergraph-two-colouring-by-local-lemma`. Its Statement assumes a finite hypergraph, so the edge-indexed bad-event family in proof 1.1 is finite and its Local Lemma use remains valid without an edit. The next published reference consumer, `ex-local-lemma-hypergraph-parameter-check`, constructs a finite `2q`-edge hypergraph for each natural `q` and uses the unchanged theorem. There is no necessary mathematical edit to either consumer. Per the owner's conservative interface-change rule, root will record both as U-P impact candidates despite this unaffected-use evidence.

## Complex norming-functional chain

`ex-norming-functionals-in-lp-from-the-measure-duality-page` used `g=|f|^{p-1}\operatorname{sgn} f/\|f\|_p^{p-1}` (or `\operatorname{sgn}f` for `p=1`) in the **bilinear** pairing `\int fg`. For complex `f` with the usual `\operatorname{sgn}f=f/|f|`, this yields `f^2/|f|`, not `|f|`. For example, on a two-point probability space with equal masses and `f=(1,i)`, the displayed phase gives `\int fg=0` for every `p`, although `\|f\|_p=1`; it fails even to attain the absolute-value supremum. I changed proof 1.2 to use `\theta=\overline f/|f|` off the zero set (zero on it). Then `fg=|f|^p/\|f\|_p^{p-1}` for `p>1` and `fg=|f|` for `p=1`. The original `## Example` claim is unchanged, and targeted precheck passes.

This item still relies on `cor-l-p-norm-recovery-by-unit-l-q-pairings`, whose proof 1.3–1.4 uses the same wrong complex phase, and on its supplier `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`, whose proof has the same phase problem and an undefined real-order sign test for complex values. Those suppliers are outside my assignment and were not edited. Root has confirmed them and will record them centrally. The example receipt is `propose_up`, because my body-only correction does not repair its published prerequisite chain. No Statement/Definition change or downstream event arose from this local edit.

## Proof repairs without interface changes

`prop-cartan-commutator-identities` formerly asserted the first two Cartan commutators from an unspecified expansion. I added the tensor-derivation supplier and checked the operators on functions and one-forms: `(\mathcal L_X\alpha)(Y)=X(\alpha(Y))-\alpha([X,Y])`; the Jacobi identity then gives the Lie-derivative commutator, and alternating insertion gives the anticommutator. The Statement is unchanged. Targeted precheck passes.

`thm-universal-coefficient-theorem-for-homology-over-a-pid` formerly skipped the key exactness of its edge and Tor maps. I made the flat tensor sequence explicit, identified `H_n(C)\otimes G` as the injected cokernel of `B_n\otimes G\to Z_n\otimes G`, and identified the quotient with `\ker(B_{n-1}\otimes G\to Z_{n-1}\otimes G)=\operatorname{Tor}_1(H_{n-1}C,G)`. The Statement is unchanged. Targeted precheck passes.

All four locally changed items retain their historical publication and verification fields. Those fields predate these edits; current targeted prechecks are local validation, not a new judge verdict or publication certification. No item outside my assignment, page, ledger, build state, or downstream consumer was edited by this shard.
