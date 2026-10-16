---
id: def-qc-bqtisp-model
kind: definition
title: "BQTISP Model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-effective-binary-encoding-and-decoder
  - def-qc-unbounded-error-time-space-counting-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, Theory of Computing 8 (2012), Sections 2.3 and 5"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computation"
      url: https://arxiv.org/pdf/0712.2545
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Definition

Use the **published VMW model** from Van Melkebeek and Watson, Theory of Computing 8 (2012), §2.3.1–2.3.2. It has three semi-infinite tapes: read-only binary input followed by blanks; a zero-initialized classical binary work tape; and a zero-initialized quantum work tape. There are a fixed finite number of heads, possibly several per tape. Each classical control state has an associated local classical function and local quantum operation, applied jointly to the cells under the respective work heads. The next control state and head movements depend on the current state, the input/classical symbols scanned at the beginning of the transition, and that transition's measurement outcome, if any. Earlier outcomes can influence later operations through the control state. These choices do not depend on the quantum basis path. A quantum operation is a unitary on the cells under the quantum heads or a single-qubit computational-basis measurement.

Each head may move left, right, stay, or jump in one transition to a precomputed classical address. Addresses are written on special one-way sequential-access write-only index tapes and those tapes are erased after every use; all index-bit writing is charged to ordinary transitions. Coherent input access may apply $|i,b\rangle\mapsto|i,b\mathbin\oplus x_i\rangle$ to a contiguous quantum-work block, with out-of-range input bit zero. The endpoint convention is $[l,r]$: the MSB-first address occupies $[l,r)$ and the answer is cell $r$; use input indices $1,\ldots,n$, $x_0=0$, empty address zero, and omit a reversed-endpoint query. Its two endpoint addresses are likewise supplied on these erased index tapes. The coherent query itself costs one transition. The classical input tape's out-of-range cells are blank. These two output conventions are distinct and fixed by the source. If colliding work heads make an operation undefined, omit the operation on that work tape.

Input cells and the separate index tapes are not counted in the maximum-workhead-address space measure. Space is the maximum address of any work operand: ordinary classical/quantum head visits and the highest endpoint of every native query block are all charged; time and space maximize over every branch, including branches of probability zero. For each fixed unitary matrix entry, real and imaginary parts have deterministic approximators computing precision $p$ in time polynomial in $p$. This permits polylogarithmic time and workspace at precision $p=O(\log t)$; it does not assert linear-space approximators for arbitrary entries.

For a promise problem $(Y,N)$, $\mathrm{BQTISP}(t,s)$ means such a machine takes $O(t)$ transitions and maximum work address $O(s)$ on every branch, accepts $Y$ with probability at least $2/3$, and accepts $N$ with probability at most $1/3$. No acceptance guarantee is required off the promise; the resource bounds remain worst-case. $\mathrm{BQTIME}(t)$ omits the space bound. Its classical comparison classes are the explicitly derived full-basis comparison classes $\mathrm{PrTIME}_{\mathrm{basis}}$ and $\mathrm{PrTISP}_{\mathrm{basis}}$ in [[def-qc-unbounded-error-time-space-counting-model]]. They permit a fixed finite product of classical basis tapes with the same native input-query operation. No generic inclusion into the narrower erased-index head-access-only class is assumed.

## Historical profile

The 2007 arXiv preprint instead places a classical jump's address between two classical work heads and describes coherent-query blocks by head-delimited work regions. Retain that mechanism as the separately named **preprint-delimited quantum profile**. No equivalence with the final model, and no transfer of a proved final-model lower bound to that preprint profile, is asserted here. Extending the final-model lower bound to that distinct mechanism remains an unproved local obligation.

## Operand-space clarification

This item explicitly treats a query endpoint as a work-access head, consistent with the source proof's finite $s$-qubit register. The final paper's informal maximum-head wording does not separately state this rule. We adopt it as a local clarification of intended operand-space accounting, not as a verbatim quotation or a proof about a literal head-only variant with uncharged query workspace.
