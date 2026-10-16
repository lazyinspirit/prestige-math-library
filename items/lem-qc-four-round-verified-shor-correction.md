---
id: lem-qc-four-round-verified-shor-correction
kind: lemma
title: A Finite Four-Round Verified Shor Correction Circuit
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-qc-concatenated-steane-distance-and-transversal-cliffords
  - def-qc-code-deviation-and-spread
  - def-qc-pauli-matrices
  - def-qc-classical-control-and-measurement-circuit
dependency_level: 19
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Fault-tolerant recovery and fault-tolerant gates (2011 lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
---

## Statement

For the explicit $[\![49,1,9]\!]$ encoding $W$ of
[[lem-qc-concatenated-steane-distance-and-transversal-cliffords]], there is
a fixed finite correction circuit with the following properties.
With zero faults it maps every input into the code and exactly corrects
the entire weight-at-most-four Pauli error span. On inputs in the
weight-at-most-two error sector, at most one faulty location leaves the
original logical state with a weight-at-most-one residual error. These
identities hold with every finite external reference retained, for arbitrary
CPTP faults on a location's registers, also with an auxiliary fault memory.
The branch assertion is an assertion about subnormalized Kraus maps:
each branch, restricted to an admitted erroneous encoding, is a linear
combination of weight-at-most-one operators after $W$, with scalar
coefficients on the logical factor. Summing branches and applying the
declared exact decoded recovery gives the identity logical channel.

There is also an arbitrary-input attraction property: with at most one
fault, every branch has output range in the span of weight-one errors
applied to the code. Here the resulting logical state is unspecified and
may be correlated with retained syndrome and fault memory; preservation
of an arbitrary initially unencoded logical interpretation is not asserted.

The circuit uses preparations of $|0\rangle$, $H$, $X$, CNOT, Toffoli,
computational-basis measurement, reset/discard, and their classical
restrictions. All controls are physical circuit registers. It admits a
fully serial schedule with fewer than $2^{240}$ locations including every
idle, depth less than $2^{210}$, and fewer than $2^{16}$ live qubits. This
is a construction over that finite elementary alphabet; fault-tolerant
recursive replacements for its Toffoli and preparation operations are
not asserted here.

## Facts & Assumptions

**Given:** The ordered $49$-qubit code, its $48$ ordered independent checks (the $42$ inner checks first, followed by the six lifted outer checks), and an arbitrary finite external reference.

[F1] [[lem-qc-concatenated-steane-distance-and-transversal-cliffords]] proves the checks, distance nine, and a fixed decoded recovery for the entire weight-at-most-four Pauli span. Every check is purely $X$ or purely $Z$ and has weight at most twelve.

[F2] [[def-qc-pauli-matrices]] gives a basis of the operator space at each qubit; tensor products give a basis on the registers of one location.

[F3] [[def-qc-classical-control-and-measurement-circuit]] permits finite instruments and circuit registers controlling a finite suffix.

[F4] [[def-qc-code-deviation-and-spread]] specifies joint Kraus error sectors, finite external references, and subnormalized branch identities for correcting instruments; auxiliary fault memory is not an unchanged external reference.

## Proof


1.1 Fix a total order on the $49$-qubit Paulis modulo scalar phase. For each of the $2^{48}$ syndromes $s$, choose the least-weight Pauli $R_s$ having syndrome $s$, breaking ties by that order. Such a Pauli exists: independence of the $48$ check labels makes their $48$ symplectic linear functionals independent, so their syndrome map has rank $48$ and is onto. Then $R_s$ maps the syndrome-$s$ eigenspace into the code. If a Pauli $E$ has weight at most four and syndrome $s$, $R_s$ has weight at most four, and $R_sE$ is a centralizer element of weight at most eight. Distance nine forces its code action to be scalar. Consequently measuring the full syndrome and applying $R_s$ is a fixed code-valued recovery on arbitrary inputs and corrects the full weight-four error span. [F1, construct, algebra]

1.2 All Boolean functions below are finite explicit functions of their displayed input bits; use the following fixed reversible implementation whenever a truth table is specified. For each input string in lexicographic order, temporarily negate its zero positions, compute the conjunction of the input bits into fresh zero scratch bits by a Toffoli chain, toggle each designated output bit whose truth-table value is one, uncompute the chain, and undo the negations. Initialize output and scratch bits to zero. For $k\le192$ input bits and two output bits this takes at most $2^k(8k+8)$ one-, two-, or three-register gates, with at most $2k+4$ workspace registers. Each implementation has its own input copies and scratch: no working register is shared between distinct output coordinates. Classical restrictions mean these reversible quantum gates acting on computational-basis registers; no noiseless Boolean operation is assumed. [F2, F3, construct]

1.3 To measure a check $g=\bigotimes_{j=1}^w P_j$, $w\le12$, form two fresh candidate cat registers. A candidate is prepared by initializing $w$ zero qubits, applying $H$ to the first, and CNOT from the first to each remaining qubit in increasing order. Verify it by measuring $Z_1Z_j$, for $j=2,\ldots,w$, three times each. Each parity measurement uses a fresh zero target, CNOT from cat coordinate $1$ to the target, CNOT from coordinate $j$ to the target, and target measurement. Keep all $3(w-1)$ raw records. An acceptance predicate is true exactly when every triple has majority zero. Copy these raw records, using direct CNOTs from each raw register into fresh zeros, into $w$ separate workspaces. In each workspace compute the acceptance predicate: the majority of three bits is $ab+ac+bc$ over $\mathbb F_2$, computable with three Toffolis into a fresh zero; combine their negations by an AND chain. The workspace for coordinate $j$ enables only the controlled-$P_j$ interaction of cat coordinate $j$ with data coordinate $j$. Thus an interaction is controlled by the cat bit and its own workspace's acceptance bit. Implement enabled controlled $X$ by Toffoli, and enabled controlled $Z$ by $H$ on the data, Toffoli, then $H$ on the data. Finally measure every cat qubit in the $X$ basis, using $H$ then computational-basis measurement. Do this for both candidates, always in their fixed order. [F2, F3, construct]

2.1 A noiseless candidate is $(|0^w\rangle+|1^w\rangle)/\sqrt2$, every verification record is zero, and all its interactions are enabled. Conditional on the final $X$-measurement string $z$, its data Kraus operator is $2^{-(w+1)/2}(I+(-1)^{\sum z_j}g)$. Summing strings of each parity gives exactly the projective measurement of $g$. Record each candidate's measured parity and raw verification records. The reported check bit is the second candidate's parity if its acceptance predicate is true, otherwise the first candidate's parity if that predicate is true, and otherwise zero. Compute this reported bit in a separate workspace by the finite reversible procedure of step 1.2. In a fault-free execution both candidates measure $g$, the second repeats its eigenvalue, and this is an exact nondestructive measurement. [F2, step 1.2, step 1.3, algebra]

2.2 Begin with one layer of $49$ explicit identity locations, one on each data coordinate. Then perform four complete rounds, each consisting of the $48$ check circuits just specified. Retain their four reported syndrome vectors $s_1,s_2,s_3,s_4$. In each of $49$ separate final-decoder workspaces, receive fresh direct CNOT copies of all $192$ raw syndrome bits and compute two correction bits by the truth-table procedure of step 1.2: choose the first index $i\in\{1,2,3\}$ with $s_i=s_{i+1}$, and output the $X,Z$ label at this workspace's coordinate of $R_{s_i}$. If there is no such index, use $R_0$. Apply the $X$ correction bit by CNOT with this data coordinate as target. Apply the $Z$ correction bit by $H$ on that data coordinate, CNOT from the correction bit to it, then $H$ on it; this is exactly controlled $Z$ since $HXH=Z$. Discard all ancillary registers. Gate order, scratch allocation, candidate order, check order, and lookup tie-breaking have all been fixed, so this specifies one finite circuit rather than an unbounded retry procedure. The initial identity layer leaves all base-level conclusions unchanged; on recursive replacement it explicitly schedules input refresh through the chosen idle templates before the first upper syndrome round. [F3, step 1.1, step 1.2, step 1.3, construct]

3.1 Suppose the only fault affecting this check occurs during one candidate's preparation, before verification begins. Expand the faulty operation in the tensor Pauli basis, retaining its coefficients as operators on fault memory if present. All subsequent parity checks are exact, so every accepted component of that candidate lies in the two-dimensional space $\operatorname{span}\{|0^w\rangle,|1^w\rangle\}$. Its interaction and cat readout therefore have data Kraus operators of the form $\alpha I+\beta g$, with memory-valued coefficients. Rejection disables every interaction of that candidate. The other candidate is ideal, is accepted, and performs a projective measurement of $g$. If the faulty candidate is first, this last projective measurement follows it; if it is second, it follows a projective measurement and its operators $\alpha I+\beta g$ preserve each eigenspace. In either case the quantum data undergoes a measurement of $g$, possibly with a faulty reported bit, and no additional data-coordinate error. [F1, F2, step 1.3, step 2.1, algebra]

3.2 With no faults every round measures the same full stabilizer syndrome. The first round projects an arbitrary input into one of its joint eigenspaces; all subsequent measurements repeat that syndrome. Every final decoder selects it, and step 1.1 maps its eigenspace into the code. This proves the arbitrary-input zero-fault requirement, as well as exact correction of the weight-four error span. [F1, step 1.1, step 2.1, step 2.2, algebra]

4.1 Suppose instead that the sole fault occurs in verification of an initially ideal cat. A verifier target can pass $Z$ back to cat controls but cannot pass $X$ between different cat coordinates: it is always a CNOT target and is discarded after its second interaction. A fault in its first interaction can therefore give $Z$ errors on two cat coordinates, but an $X$ component on at most the one cat coordinate touched by the faulty interaction. A fault in the second interaction has the same property. Cat idles or cat measurements affect at most one cat coordinate. Thus, apart from arbitrary cat phase errors and verification-record changes, an accepted cat has at most one bit error. Cat phase errors only change the coefficients of $I$ and $g$; a cat bit error produces an additional $P_j$ on its one matching data coordinate. The other candidate is noiseless. A faulty enabled interaction itself touches only one data coordinate, and its subsequent gates in that workspace touch no other data coordinate. These statements remain true for sums of Pauli components and memory-valued coefficients. [F2, step 1.3, step 2.1, step 3.1, algebra]

4.2 Put the sole fault instead in final syndrome copying or decoding. All quantum checks are then noiseless, and all four true syndrome vectors are the same $s$. A faulty copying CNOT can arbitrarily change its one target workspace and can corrupt its one source raw bit for later workspaces. Every other workspace consequently sees at most one corrupted bit in one of its four vectors. Its first selected equal pair is still $s$, since any matching pair includes an unchanged vector and there are four vectors. Only the target workspace can output wrong correction bits. An internal decoder fault or a faulty final controlled correction likewise affects its one designated data coordinate. Thus all other coordinates apply $R_s$, and this one coordinate differs by an arbitrary local operator. Unlike a data-changing fault, this fault cannot coexist with old/new quantum syndrome changes: it is the only fault. There is therefore no mixing of coordinatewise representatives of two different valid syndromes. [F2, step 1.2, step 2.2, step 3.2, algebra]

5.1 A fault in copying raw verification records deserves a separate check. Before such a fault both candidates are ideal and every raw verification record is zero. A faulty copying CNOT can corrupt its target workspace arbitrarily and can change its one source raw record for later copies. Every other workspace still has at most one corrupted entry among all the triples, so majority decoding makes all its acceptance decisions true. Only the target workspace can make a wrong enable decision, affecting its own one data coordinate. A fault strictly inside one acceptance workspace likewise affects only its matching data coordinate. A fault in the final reported-bit computation has no data access and may change only that check's reported bit. This exhausts the check circuit, including faults on initialized scratch registers and idles. In particular there is no shared acceptance flag whose corruption could disable a long suffix of data interactions. [F2, step 1.2, step 1.3, step 4.1, algebra]

6.1 First put the sole fault in a check circuit, a data idle, or a data location before final decoding. Step 3.1 and step 4.1 and step 5.1 show that the affected round may have an arbitrary reported vector, while quantum errors added to the data are confined to one coordinate. On each Pauli component, all noiseless earlier rounds have the old syndrome $s$ and all noiseless later rounds have the new syndrome $s'$; if no data error was added these are equal. The faulty round can be a hybrid, but cannot remove the adjacent equal pair guaranteed among four rounds: a fault in round one or two leaves rounds three and four equal, and a fault in round three or four leaves rounds one and two equal. A fault in the initial identity layer instead leaves all four rounds noiseless, with the new syndrome. Every selected adjacent pair contains a noiseless round and consequently equals $s$ or $s'$. All final copying and decoding are now noiseless, so every output coordinate selects the same pair and applies the same $R_s$ or $R_{s'}$. [F2, step 3.1, step 4.1, step 5.1, step 2.2, algebra]

7.1 Write an incoming Pauli component as $E$, of weight at most two, and the added data Pauli as $F$, on at most one coordinate. If the selected syndrome is $s'$, the Pauli $FE$ has weight at most three; step 1.1 therefore makes $R_{s'}FE$ scalar on the code. If it is $s$, then $R_sE$ is scalar on the code and the Pauli commutation rule gives $R_sFE=\pm F R_sE$, leaving only $F$. Factors $\alpha I+\beta g$ from a faulty cat only multiply these terms by scalar syndrome eigenvalues and do not change their support or logical action. This proves the residual weight-one assertion componentwise for the case of step 6.1. [F1, F2, step 1.1, step 3.1, step 6.1, algebra]

7.2 For arbitrary input, the same branch analysis proves attraction without any claim of preserving its initially unspecified logical state. A selected equal pair contains a noiseless full syndrome measurement of its selected syndrome $s$. If the data-changing fault precedes that measurement, the branch is already in the syndrome-$s$ eigenspace when $R_s$ is applied and is corrected into the code. If the fault follows that measurement, its Pauli components are supported on one coordinate; the intervening stabilizer measurements only project them or multiply them by eigenvalues, so $R_sFP_s=\pm F R_sP_s$, with $R_sP_s$ code valued. Here $P_s$ is the full syndrome projector. Final copying/decoder faults give one-coordinate deviations from the code-valued $R_sP_s$ in exactly the case split of step 4.2. Faulty cat factors $\alpha I+\beta g$ do not change a fixed syndrome sector. Thus each arbitrary-input branch Kraus operator is a sum of $A W B$, with $A$ supported on at most one coordinate and $B$ an arbitrary map from the original input to the logical factor and branch/memory registers. This proves the asserted attraction range, including coherent errors and arbitrary references. [F2, F4, step 1.1, step 3.1, step 6.1, step 4.2, algebra]

8.1 Expand every incoming Kraus operator in the weight-two Pauli basis and every faulty-location Kraus operator in the Pauli basis on its registers, with matrix coefficients on finite fault memory. Every intervening noiseless circuit operation and every measured branch is linear. Step 6.1 and step 7.1 and step 4.2 give, term by term, an operator of the form $A W$ on the logical input, where $A$ lies in the weight-one Pauli span and the remaining coefficient acts on fault memory and ancillary branch registers alone. The only operators applied to the logical factor are scalar multiples of the identity; all scalar-compression uses are valid by distance nine. Tensoring the identity on an external reference leaves these identities unchanged. Summing Kraus terms proves the stated subnormalized branch identities without conditioning away their probabilities. Summing all branches is trace preserving; the fixed decoded recovery corrects every pair of the residual weight-one terms by [F1], leaving the original logical/reference state. The same expansion handles joint input correlations with other blocks by keeping their tensor factors in the coefficients and applying their declared recoveries. [F1, F2, F4, step 7.1, step 4.2, algebra]

9.1 Here are explicit finite schedule bounds. Each cat has at most twelve coordinates and $33$ raw parity records. Its preparation uses at most $24$ locations and its $33$ parity measurements at most $132$. Each of its twelve enable workspaces uses at most $33$ input-copy preparations, $33$ copying CNOTs, $11$ majority outputs and $33$ Toffolis, and at most $48$ more scratch preparations and $64$ AND/NOT gates. Thus all $384$ candidates in the four rounds, their enabled interactions, readouts, reported-bit truth tables (at most $90$ input bits), preparations and discards require fewer than $2^{110}$ nonidle locations by step 1.2. The final $49$ truth tables have $192$ inputs each; their gates and copies require fewer than $49\cdot2^{192}(8\cdot192+8)+2^{20}<2^{210}$ nonidle locations. Use fresh workspaces for the currently measured check and discard them before the next check; retain only its one reported bit. For final decoding allocate all $49$ workspaces, each with fewer than $2\cdot192+4$ registers, so fewer than $2^{16}$ registers are ever live. Serialize the nonidle gates and insert one identity location on every other live register in each layer. Depth is less than $2^{210}$, and total locations, including all such idles, is less than $2^{226}<2^{240}$. Every location has at most three quantum or classical input registers, and resets, preparation, readout, controls and discard have been included. [step 1.2, step 1.3, step 2.1, step 2.2, construct, algebra] ∎

## Remarks

This lemma proves a bounded noisy correction instrument, not a complete proper universal gate family. Its residual branch formulation does not assert the impossible full-space fault/recovery intertwiner. It also does not replace subnormalized branch maps by normalized CPTP error maps. Recursive implementations of its elementary alphabet, and a verified non-Clifford resource-state construction, remain separate obligations.
