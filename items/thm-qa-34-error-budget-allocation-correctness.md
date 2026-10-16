---
id: thm-qa-34-error-budget-allocation-correctness
kind: theorem
title: Allocated local errors meet the global budget
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-34-error-budget-allocation
  - thm-qa-34-channel-hybrid-bound
  - thm-qa-34-adaptive-failure-union-bound
  - def-qa-34-end-to-end-error-contract
  - def-qa-34-output-and-cost-types
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Suppose $L\ge1$ stage compilers called by [[alg-qa-34-error-budget-allocation]] return implemented channels with local normalized diamond errors at most $\varepsilon/L$ and, for every successful history reaching stage $j$, conditional failure probability at most $\delta/L$. Then the final channel error is at most $\varepsilon$ and the probability of any stage failure is at most $\delta$. Use the finite execution-history model of [[def-qa-34-end-to-end-error-contract]]. No independence between stage failures is assumed.

For resource composition, let $c_j$ be each stage's actual cost record and let $c_{\rm aux}$ record, exactly once, shared input/preprocessing, allocator arithmetic, and every interstage wiring/control, postprocessing, and final-output operation not already included in a $c_j$. For each additive count, length, or sequential-time coordinate $r$ of [[def-qa-34-output-and-cost-types]] and [[def-qc-circuit-cost-model]]—including input/circuit-description length, preprocessing and sequential compiler time, each named data-structure or oracle operation, state-preparation and its controlled/inverse calls, gate occurrences by type, measurements, classical predicate/postprocessing, and output-bit writes—assume the pipeline performs precisely the operations in these records and has no unrecorded work. Then its total is
$$c_{{\rm total},r}=c_{{\rm aux},r}+\sum_{j=1}^L c_{j,r}.$$
If any records are upper bounds rather than exact counts, replace the equality by the corresponding upper bound. For serial circuit layers, write the actual gate word as $B_0C_1B_1\cdots C_LB_L$, with $C_j$ the complete stage-$j$ word and $B_0,\ldots,B_L$ its chronological auxiliary blocks, allowing empty blocks. Put $d_j=d(C_j)$ and $d_{\rm aux}:=\sum_{\ell=0}^L d(B_\ell)$, retaining each auxiliary block at its position rather than minimizing the depth after deleting stages. Then $d_{\rm total}\le d_{\rm aux}+\sum_jd_j$. For each wire/workspace category $s$ (total wires, clean ancillas, dirty ancillas, or other workspace), let $w_{j,s}$ be the stage allocation and $w_{{\rm aux},s}$ the shared/interface allocation. Identify these allocations with physical wire sets covering all wires of the total circuit, with each category inherited from the total circuit's declared classification. For clean or dirty ancilla counts, require the declared data/ancilla partitions in the stage and auxiliary records to be restrictions of the corresponding total partition under these wire identifications, and require all corresponding exact return contracts; apply this condition separately to each ancilla coordinate. A coordinate without these compatible supplied contracts is not covered by the bound. If stage workspaces are allocated disjointly, then $w_{{\rm total},s}\le w_{{\rm aux},s}+\sum_{j=1}^Lw_{j,s}$. The local precision entries $\varepsilon_j$ and error/failure probabilities remain separate fields; they are not resource counts to add.

## Facts & Assumptions

**Given:** The compilers and local guarantees in the Statement, with rational $0<\varepsilon,\delta<1$.

[F1] [[alg-qa-34-error-budget-allocation]]: for $L\ge1$ it assigns $\varepsilon_j=\varepsilon/L$ and $\delta_j=\delta/L$ to every stage and calls each compiler once.

[F2] [[thm-qa-34-channel-hybrid-bound]]: the final normalized channel error is at most the sum of local normalized channel errors.

[F3] [[thm-qa-34-adaptive-failure-union-bound]]: conditional failure bounds $\delta_j$ after every successful history imply total failure at most $\sum_j\delta_j$, without independence.

[F4] [[def-qa-34-output-and-cost-types]] and [[def-qc-circuit-cost-model]]: cost records separate input/preprocessing, named data access, state preparation, gate types, width/workspace, measurement, classical processing, output writing, and finite-gate precision; unprovided access or connecting operations are not free.

## Proof


1.1 By [F1], each stage error is at most $\varepsilon/L$, so the sum of the $L$ local errors is at most $L(\varepsilon/L)=\varepsilon$. [given, F1, algebra]

1.2 By [F1], each stage has conditional failure bound $\delta/L$. Apply [F3] to the finite execution history to obtain total failure at most $L(\delta/L)=\delta$. [given, F1, F3, algebra]

2.1 Apply [F2] to those $L$ stage channels and use step 1.1; the final normalized diamond error is at most $\varepsilon$. [step 1.1, F2]

3.1 For each count-valued additive coordinate $r$, the stated pipeline accounting partitions its operations into the auxiliary operations in $c_{\rm aux}$ and the stage operations in $c_1,\ldots,c_L$, each counted once. Counting this disjoint union gives $c_{{\rm total},r}=c_{{\rm aux},r}+\sum_jc_{j,r}$; replacing exact stage counts by upper bounds gives the corresponding inequality. Choose a minimum layering separately for each finite word $B_0,C_1,B_1,\ldots,C_L,B_L$, using no layers for an empty word. Concatenate these layerings in that order. Within each block every shared-wire precedence is respected, and between blocks every earlier gate is scheduled first. This gives an admissible layering of the actual full word with $\sum_\ell d(B_\ell)+\sum_jd_j=d_{\rm aux}+\sum_jd_j$ layers, proving the minimum-depth upper bound. For a wire/workspace category $s$, let $T_s$ be the total set counted and let $A_s,W_{1,s},\ldots,W_{L,s}$ be the sets counted in the auxiliary and stage records. Coverage and the compatible category restrictions give $T_s\subseteq A_s\cup\bigcup_j W_{j,s}$. Thus finite cardinality gives $|T_s|\le|A_s|+\sum_j|W_{j,s}|$, as asserted. In particular a total ancilla cannot be recorded only as stage data; the clean and dirty bounds each use their own compatible partitions and supplied return contracts. Precision, error, and failure fields remain separate by [F4]. [given, F4, algebra] ∎

