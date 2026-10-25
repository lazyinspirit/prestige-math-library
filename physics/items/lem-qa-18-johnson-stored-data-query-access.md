---
id: lem-qa-18-johnson-stored-data-query-access
kind: lemma
title: "Coherent Johnson row access with stored values"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-18-element-distinctness-johnson-walk, def-qc-coherent-function-oracle, def-qc-controlled-unitary-access, def-qc-inverse-unitary-access, def-qa-17-walk-access-model, thm-qa-17-walk-access-cost, thm-gram-schmidt-orthonormalisation]
justified_by: []
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Magniez, Nayak, Roland, Santha, Search via Quantum Walk, Section 1.3 and Proposition 2"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
    - title: "Ambainis, Quantum walk algorithm for element distinctness, Sections 3-4"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
dependency_level: 15
---

## Statement

For the lazy Johnson chain and XOR value oracle in [[def-qa-18-element-distinctness-johnson-walk]], write $d_f(S)$ for the values at the indices of $S$, in increasing index order. In the pure value-query model, encoded vertex preparation costs $r$ queries. Coherent row preparation and its inverse, including controlled versions, cost at most two queries each. The corresponding controlled row-space reflection costs at most four queries, and a controlled $W=U^2$ step and its inverse cost at most eight. A stationary two-register walk state costs at most $r+2$ queries, and its marked check uses zero value queries. Gates, memory, uniform generation, and exact coefficient preparation are separate resources; no gate-time bound is asserted.

## Facts & Assumptions

**Given:** $N\ge4$, $2\le r\le\lfloor N/2\rfloor$, the lazy Johnson transition matrix, and the XOR value oracle, with its full valid-address action.

[F1] [[def-qa-18-element-distinctness-johnson-walk]]: a vertex stores $r$ labeled values; a neighbor replaces one selected index by one unselected index; markedness is decidable from stored values.

[F2] [[def-qc-coherent-function-oracle]]: a query XORs the encoded value into its target; applying it twice cancels it.

[F3] [[def-qc-controlled-unitary-access]] and [[def-qc-inverse-unitary-access]]: controlled actions are identity/operation blocks and inverses reverse the complete circuit word.

[F4] [[def-qa-17-walk-access-model]] and [[thm-qa-17-walk-access-cost]]: a row isometry implemented by a clean row-preparation unitary gives its range reflection by preparation, clean-input reflection, and inverse; $W$ uses four preparation/inverse calls and two swaps.

[F5] [[thm-gram-schmidt-orthonormalisation]]: a finite independent list can be orthonormalized with its successive spans unchanged.

## Proof


1.1 Encode a vertex by the computational basis vector $|S,d_f(S)\rangle$. Distinct subsets have orthogonal encodings, so replacing each logical vertex basis vector by this encoding is an isometry, as is its two-register tensor square. Subset arithmetic, label permutations, copying computational-basis data by XOR, and finite unitaries depending only on $N,r$ issue no value queries. A specified unit vector can be completed to an orthonormal basis as follows: append the computational basis in fixed order, retain each vector outside the preceding span, and apply [F5]. The resulting list spans and retains the initial unit vector; the linear map between the computational basis and this basis preserves squared coordinate norms and is invertible, hence unitary. In particular, prepare the uniform subset superposition with this exact finite unitary as its first column, then load the $r$ ordered values by $r$ queries. The claim is a query bound only: neither the number of gates of that unitary nor a uniform generator is being bounded. [given, F1, F2, F5, construct]

2.1 From the encoded source vertex and a blank target register, a finite unitary depending only on $N,r$ prepares the second subset label in the Johnson row distribution: amplitude $1/\sqrt2$ for $T=S$ and $1/\sqrt{2r(N-r)}$ for every $T=S-\{i\}+\{j\}$. For each source label this is a unit vector, and different sources stay orthogonal because the source register is unchanged; use the finite completion from step 1.1 in each source-label block to define a unitary on the padded registers. Reversible label arithmetic identifies the unique new index $j$ on a non-loop branch, and uses the fixed valid address $1$ on the loop branch. Copy to the target all values whose indices lie in $S\cap T$, using the source stored values. Query $f(j)$ into clean scratch, XOR it into the target new-value slot only on a non-loop branch, and query again to erase scratch. For a loop, copy the entire stored list and leave the computed scratch unused before erasing it. Uncompute the address and index-arithmetic scratch from $S,T$. Thus two queries implement the encoded row isometry with all scratch clean. The row operation extends unitarily outside the valid-data subspace; no oracle-dependent table is hardwired into the nonquery gates. [given, F1, F2, step 1.1, construct]

3.1 Initialize the address scratch to the fixed valid address $1$. To control this circuit, control its nonquery gates, leaving that address at $1$ on the control-zero branch, and still compute $f(j)$ and erase it with the same two unconditional oracle calls; the middle XOR into the new-value slot is controlled by both the outer control and the non-loop flag. On control zero the two queries cancel and all other registers are fixed. Thus controlled row preparation costs two queries. Reverse the complete word for either inverse; it also costs two queries. Let the whole target-and-work register have a specified blank vector $|0_{\rm tgt}\rangle$. The query-free reflection $$I_{\rm src}\otimes\bigl(2|0_{\rm tgt}\rangle\langle0_{\rm tgt}|-I_{\rm tgt}\bigr)$$ acts on the entire source register, including invalid source encodings; it performs no test for membership in the function-dependent set of valid encodings. Conjugating it by the row-preparation unitary gives the reflection about the image of all blank-target source states. The row-preparation unitary preserves the source register, so images of invalid source basis encodings stay orthogonal to logical encoded walk states. On the logical encoded subspace, the conjugated reflection therefore restricts to the range reflection transported by the isometry in step 1.1. Possible invalid data encodings never enter a logical walk state. [F2, F3, F4, step 1.1, step 2.1, construct]

4.1 By [F4], one row reflection costs four queries, since its middle blank-state phase is query-free. Swapping both vertex-and-data blocks is query-free and preserves the valid encoding. Hence one controlled $U$ costs four queries and controlled $W=U^2$ costs eight; their inverses have the same counts. Preparing the encoded uniform first vertex costs $r$, and one row call adds two, giving stationary edge-state setup at most $r+2$. Markedness depends only on the stored first-vertex values and requires no further value query. All control predicates, comparisons, state preparation gates and retained registers remain separate charged resources. [F1, F3, F4, step 1.1, step 2.1, step 3.1, algebra, discharge-construct] ∎

