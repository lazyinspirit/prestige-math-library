# Restricted ladder criterion: second-round construction and exact remaining gap

Author `/root/repair_cell_head_classification/native50_integral_constructor`; run `frontier-44-special-representation-examples-28`. This is the FINAL second construction round for the CURRENT classifier proof case. It neither reopens nor changes the protected old20 rounds or exception. Research only; no canonical/native/plan/state/gate/coverage writes and no changes to sealed coherent-round1 carriers.

## Status

**The general restricted-tableau exclusion lemma is not yet proved in this packet.** Correct ladder geometry and all reduction steps below are proved. The final finite-e classifier cannot be accepted using this packet alone. The exact remaining combinatorial proposition is stated in Section4. Bounded tests support it but are not a proof. This packet deliberately does not replace the failed single-node argument by an unproved regularization slogan.

## Actual source/context read

Read current CLAUDE.md fully. Read current canonical `thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions`, `def-e-regular-and-e-restricted-partitions`, and `def-quantum-characteristic-of-an-invertible-hecke-parameter`; these are context carriers, not independently accepted supplier proofs. Read the actual root insufficiency receipt and the Mathas manuscript printed32–33 images in this owner directory. The manuscript's displayed ladder formula conflicts with its table; its one-node truncation-dominance sentence is unsupported and false without the full residue-word hypothesis. Also read only the ladder-number entry in the published AMS endmatter index: it gives `j−i+e(i−1)=(e−1)i+j−e`, confirming the corrected slope. No full published-book reading is claimed.

## 1. Correct local ladder geometry: full proof

For finite e≥2 define `L(r,c)=(e−1)r+c−e`. Its residue is c−r modulo e. Define tλ by numbering nodes in increasing L, breaking equal-L ties from lower rows to upper rows. Equivalently remove a maximal-L node at each last-label step, breaking ties in favor of the uppermost row. Since moving right increases L by1 and moving down increases it by e−1>0, the order respects every row/column precedence; hence tλ is standard. At λ=(4,3), e=3, this gives top1246 / bottom357, as in the source diagram.

If λ is e-restricted, every ladder is bottom-packed: from an occupied (r,c) the next lower position on that ladder is `(r+1,c−(e−1))`. When its column is positive, restrictedness gives `λ_{r+1}≥λ_r−(e−1)≥c−(e−1)`, so that node is occupied. Iterating fills every lower positive position.

Removing the uppermost maximal-L corner preserves restrictedness. The only potentially enlarged row difference is between the preceding row and the shortened row r. If it became e, the old difference was e−1. The endpoint of row r−1 would then have exactly the same L as the removed endpoint of row r, contradicting the uppermost tie rule. The shortened row's difference to the next row decreases by1 and cannot fail. All other differences are unchanged. This also proves every initial-label shape of tλ is restricted.

For a complete ladder boundary let `α_l={x∈λ:L(x)<l}` and `δ_l={x∈λ:L(x)≤l}`. These are partitions because L respects northwest precedence. They are restricted either by the removal argument, or directly by clipping each row width to the descending affine bound `l+e−1−(e−1)r`; taking the minimum of λ_r and that bound preserves adjacent differences≤e−1. Let a_l=|δ_l\α_l|. All a_l new nodes have residue i=l mod e.

At α_l, every addable node of residue i has L≤l. For an addable node in row r>1, its above neighbor is present, so `L(addable)≤max L(α_l)+(e−1)≤l+e−2`; its L is congruent to l modulo e, hence cannot exceed l. For a first-row addable node its left neighbor gives the stronger bound≤l. For empty α the same statement is immediate. Restrictedness also makes the ladder numbers of addable nodes nondecreasing with row index: if r<s, then `α_r−α_s≤(e−1)(s−r)`, so `L(s,α_s+1)−L(r,α_r+1)≥0`.

Consequently the nodes on the new ladder l are below all addable i-nodes on older ladders l−e,l−2e,… . Among possible addable nodes on ladder l, bottom-packing of λ ensures that its occupied nodes form the lowest segment. Their predecessors above and left have smaller L and lie in α_l. Thus δ_l is obtained from α_l by adding the **bottommost a_l addable i-nodes**. These conclusions are exact and do not use the missing global exclusion lemma.

## 2. What the residue word does and does not determine

The desired conclusion is: if λ is restricted and t is a standard μ-tableau with the full residue word of tλ, then μ is not strictly dominated by λ. A stronger sufficient conclusion is μ≥λ in dominance. It is NOT necessary, and generally false, that t=tλ when μ=λ. For e=2, λ=(2,1), both top13/bottom2 and top12/bottom3 have word011.

The earlier defective slope `r+(e−1)c−e` gives the wrong word for e=3, λ=(2,1): it yields021, also realized by (1,1,1). Correct slope gives012 and removes that specific counterexample; it does not supply the missing induction.

The source's last-node argument cannot ignore earlier labels. At e=2, λ=(4,3,2,1) and lower μ=(4,3,1,1,1), removal of λ's top14 and μ's23 gives ν=(3,3,2,1) and ζ=(4,2,1,1,1); the removed residues agree, but ν does not dominate ζ (its first part3 is smaller than4). Thus “λ≥μ and same last residue imply ν≥ζ” is false. This packet makes no such inference.

A greedy algorithm placing each residue in the lowest addable row does not work for arbitrary residue words either. At e=2 the valid word010100 is realized in shape(3,2,1), but lowest-row greedy placement reaches(1^5) after its first five letters and then has no residue0 addable node. Full ladder-block structure, rather than arbitrary residue words, is essential.

## 3. Sound reduction to complete ladder blocks

Group the tλ word into successive complete ladders. A block at ladder l consists of a_l copies of residue i=l mod e. For any competing standard tableau with the same full word, let β be its shape before this block and γ its shape after it. Then γ is obtained by adding a_l residue-i nodes to β, and every such node was already addable at β: adding a residue-i node creates only neighboring potential corners of residues i±1, distinct from i because e≥2. No new i-corner can arise during an all-i block.

The full prefix word also ensures β and α_l have the same residue-content multiplicities `w_j=# nodes of residue j`; no field assumption is involved. If the missing proposition in Section4 holds, induction over full blocks gives β≥α_l and γ≥δ_l. Starting with the empty partition proves μ≥λ at the final block. This excludes every strictly lower μ and supplies exactly the Mathas3.37 restricted-tableau property, without claiming same-shape uniqueness.

Residue congruence is the correct field interface: for any field F with unit q and finite quantum characteristic e, `[a]_q=[b]_q` iff a≡b mod e. For q≠1, their difference is q^b[a−b]_q and e is the multiplicative order of q. For q=1 the equality is a=b in the prime characteristic e. Thus a proof of the remaining finite combinatorial proposition would apply to every such field, including q=1 modular fields, without semisimplicity or splitting assumptions.

For e=∞ the nonzero Murphy-form direction needs no finite ladder argument: the row-reading basis vector has norm `∏_r[λ_r]_q!`, which is nonzero since every quantum integer is nonzero. The finite-e gap below is not a gap for that case.

## 4. Exact smallest sufficient missing proposition

**Full-ladder-boundary dominance proposition.** Let e≥2, l≥0, i=l mod e, and let α be an e-restricted partition all of whose nodes have ladder number strictly less than l. Let L be the addable nodes of α with ladder number exactly l, and let 1≤k≤|L|. Let δ be obtained from α by adding the bottommost k nodes of L. Let β be another partition of |α| satisfying β≥α in dominance and having the same residue-content multiplicities as α. If γ is obtained from β by adding any k distinct addable nodes of residue i, then γ≥δ.

This proposition is entirely combinatorial. It requires neither classifier/simple-head theory nor generic semisimplicity. It would be a legitimate early local supplier if proved, and Section3 shows exactly how it closes the current finite-e ladder gap.

The ladder cutoff hypothesis cannot be omitted. At e=3 take α=(3,3,1,1,1), β=(3,3,3). They have equal residue counts(3,3,3) and β≥α. The only addable residue0 node of α is14, giving δ=(4,3,1,1,1); β has addable41, giving γ=(3,3,3,1), which does not dominate δ. However α contains a node on ladder8 while target14 lies on ladder3, so this example is excluded by the required cutoff. It refutes the tempting generic bottommost-residue monotonicity lemma.

A more numerical sufficient form would bound, at any row cutoff r where the new ladder's bottom segment is not entirely below r,

`# residue-i addable β-nodes below r ≤ # ladder-l addable α-nodes below r + Σ_{s≤r}(β_s−α_s)`.

This inequality would imply the displayed dominance proposition for every k by counting how many of the k additions can fall below r. It is **also unproved here**, not an asserted replacement theorem. An abacus proof using equal residue-content/runner charges might establish it, but no such proof was completed.

## 5. Honest outcome of this final current round

Correct slope, tie rule, restricted truncations, complete-block reduction, field residue transport, and the e=∞ nonzero direction are proved locally above. The finite-e full-ladder-boundary dominance proposition remains the precise open obligation. Exhaustive bounded checks did not find a counterexample, but they cannot establish its universal scope. No accepted classifier repair or independent mathematical acceptance is claimed, and the source's flawed truncation sentence is not used as a substitute.
