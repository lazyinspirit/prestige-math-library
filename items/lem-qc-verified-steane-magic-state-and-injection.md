---
id: lem-qc-verified-steane-magic-state-and-injection
kind: lemma
title: Finite Verified Steane Magic States and T Injection
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-qc-concatenated-steane-distance-and-transversal-cliffords
  - lem-qc-four-round-verified-shor-correction
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-code-deviation-and-spread
dependency_level: 20
proof_strategy: direct
sources:
  references:
    - title: "John Preskill, Fault-tolerant recovery and fault-tolerant gates (2011 lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
---

## Statement

Use the explicit encoding $W$ of
[[lem-qc-concatenated-steane-distance-and-transversal-cliffords]], and put
$T=\operatorname{diag}(1,e^{i\pi/4})$ and $|A\rangle=T|+\rangle$.
There is a deterministic finite preparation circuit whose zero-fault
output is $W|A\rangle$ and whose output with at most one faulty location
is in its weight-one Pauli error span. There is also a deterministic
finite $T$-injection circuit on one encoded data block: on the weight-one
input error sector, at most one faulty location leaves at most a
weight-two error after the ideal encoded $T$ output. Both assertions are
subnormalized branch Kraus identities, retain every finite external
reference and allow arbitrary CPTP location faults with fault memory,
as in [[def-qc-code-deviation-and-spread]]. Summing branches and applying
the fixed decoded recovery gives exactly the stated logical operation.

With zero faults, an incoming Pauli of weight $s\le4$ propagates to
weight at most $s$ after ideal encoded $T$; by linearity the same holds
for its operator span. The elementary alphabet is $H,S,T,T^\dagger,X$, CNOT, Toffoli,
$|0\rangle$ preparation, computational-basis measurement, reset/discard
and idle; all Boolean controls are circuit registers. Each circuit has
fewer than $2^{240}$ locations including idles, depth below $2^{210}$ and
fewer than $2^{20}$ live qubits. This lemma does not yet assert a recursive
fault-tolerant replacement for every elementary alphabet operation.

## Facts & Assumptions

**Given:** The code $W$, its check order and Pauli representatives, and the exact elementary gate matrices.

[F1] [[lem-qc-concatenated-steane-distance-and-transversal-cliffords]] proves distance nine, the fixed weight-four recovery, and the exact transversal $S$, $H$, CNOT identities. Its weight-nine representative $\overline X$ acts as the logical $X$.

[F2] [[lem-qc-four-round-verified-shor-correction]] supplies explicit two-candidate cat preparation, threefold parity verification, independent per-coordinate enable workspaces, and finite reversible truth-table circuits. Its proof identifies every one-fault cat/control case.

[F3] [[def-qc-pauli-matrices]] gives the local operator basis, and [[def-qc-one-qubit-gate-alphabet-and-rotations]] fixes all scalar phases of $H,S,T$.

[F4] [[def-qc-code-deviation-and-spread]] specifies the joint error sectors and subnormalized branch convention, retaining the external reference and explicitly carrying auxiliary fault memory.

## Proof


1.1 Here is a fixed bare encoder, including its finite bound. Let $b_1,b_2,b_3$ be the rows of the seven-coordinate matrix defining $W$, and let $x$ be its displayed logical representative. The vectors $x,b_1,b_2,b_3$ are independent. Complete them to a basis of $\mathbb F_2^7$ by taking the first standard basis vector outside their span repeatedly. Let $L$ have these seven columns. Put the logical input on coordinate one, initialize the other six coordinates to zero, apply $H$ to coordinates two, three and four, and apply the reversible linear map $y\mapsto Ly$. This is exactly the seven-qubit coset encoder. Row elimination synthesizes $L$ with at most $42$ row-addition CNOTs and seven row swaps, each swap using three CNOTs. Thus at most $66$ unitary gates suffice. Apply this encoder once at the outer level and then in the seven inner blocks, giving the exact map $W$ with at most $528$ unitary gates on $49$ coordinates. Preparation of the logical input by $H$ then $T$ gives a bare $W|A\rangle$ preparation with fewer than $600$ nonidle locations. No fault-tolerance property is attributed to this bare encoder. [F1, F3, construct, algebra]

1.2 Define the physical tensor-product Clifford $U=e^{-i\pi/4}S^{\otimes49}\overline X$. By [F1], $UW=W M$ where $M=e^{-i\pi/4}SX=(X+Y)/\sqrt2$. Direct multiplication gives $M^*=M$, $M^2=I$, and $M|A\rangle=|A\rangle$; its other eigenspace is one-dimensional with eigenvalue $-1$. Thus the code projector followed by the $+1$ projector of $U$ on the code is the rank-one projector onto $W|A\rangle$. The full physical $U$ need not be Hermitian off the code. It is a product of one-site Cliffords, so conjugation by $U$ preserves any fixed one-coordinate operator space. In particular $U E W|A\rangle=(UEU^*)W|A\rangle$ for every local $E$. [F1, F3, algebra]

2.1 Extend the verified-cat check circuit of [F2] to the following one additional check, of length $49$. Its cat encoding, three repetitions of every $Z_1Z_j$ parity check, independent enables and final $X$ readout are identical. On coordinate $j$, apply controlled $X_j$ if $\overline X$ occupies that coordinate, followed by controlled $S_j$ on every coordinate. Both controls are the corresponding cat bit and its own acceptance workspace. To implement the latter, compute their conjunction into a fresh zero using Toffoli, use that conjunction as control of controlled $S$, and uncompute it. Controlled $S$ is the exact five-gate circuit $T_cT_t\operatorname{CNOT}_{c,t}T_t^\dagger\operatorname{CNOT}_{c,t}$: its phase on $|c,t\rangle$ is $e^{i\pi(c+t-(c\mathbin\oplus t))/4}=i^{ct}$. Finally apply $T^\dagger$ to cat coordinate one. This supplies the scalar $e^{-i\pi/4}$ on the all-one cat component. Every workspace for coordinate $j$ touches only that data coordinate. Compute each candidate's $X$-readout parity by CNOTs into a zero bit, its acceptance predicate by majority-of-three and an AND chain, and the last-accepted reported bit by a two-input Boolean multiplexer synthesized with NOT, CNOT and Toffoli. These computations take fewer than $2^{12}$ gates and scratch preparations and avoid a truth table on all raw cat records. An ideal cat and an $X$-readout string $z$ give the Kraus operator $2^{-25}(I+(-1)^{\sum z_j}U)$. On the code these are the two exact $M$ eigenprojections, with their correct branch weights. [F2, F3, step 1.2, construct, algebra]

2.2 Define the logical readout function on $49$ physical measurement bits explicitly. Let $C_0,C_1$ be the disjoint computational-basis supports of $W|0\rangle,W|1\rangle$, obtained by expanding the finite coset encoder. Their mutual Hamming distance is nine: a difference between their words is a representative of the nontrivial pure-$X$ logical class of the CSS code, so [F1] gives minimum weight nine, attained by $\overline X$. Let $f(z)$ be the label of the nearest one of these two finite sets, resolving ties as zero. If $z$ is within four bit changes of either set, this label is unique by the triangle inequality. Thus up to four erroneous readout bits cannot change the ideal logical label. [F1, step 1.1, construct, algebra]

3.1 Prepare a first bare candidate by step 1.1. Verify the $48$ stabilizers in order and then $U$, repeating each entire target check three times consecutively; each target check itself uses the two-cat circuit. Retain the resulting $147$ target-outcome bits. Acceptance means that every one of the $49$ target triples has majority zero. With no faults the bare candidate is $W|A\rangle$ and acceptance is certain. If preparation alone is faulty and verification is ideal, the first full set of stabilizer measurements projects onto a definite syndrome. An accepted branch has zero syndrome, so is in the code; the ensuing $U$ measurements are then the Hermitian logical $M$ measurement. Acceptance projects onto its $+1$ eigenspace. Hence every accepted branch is exactly $W|A\rangle$ tensored with an updated preparation/fault-memory state. This argument starts from an arbitrary faulty candidate and never assumes it was merely a low-weight error. [F1, F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 If instead the sole fault is in verification, its input is the ideal $W|A\rangle$. The cat cases of [F2] apply to each stabilizer check. For the $U$ check, accepted faulty cat preparation leaves cat operators in the span of its all-zero and all-one vectors; the data factors are $\alpha I+\beta U$, which are scalar on $W|A\rangle$. A verification or interaction fault has a bit error on at most one cat coordinate, or changes only that coordinate's enable predicate. Its data factors are consequently a local operator times $I$ or $U$, with arbitrary cat phase coefficients. By step 1.2 these are in the one-coordinate error span of $W|A\rangle$. Subsequent ideal stabilizer checks multiply each Pauli component by syndrome signs or project it away, and subsequent ideal $U$ checks preserve that same one-coordinate span by step 1.2. The threefold raw-parity majority and independent enables handle copying faults exactly as in [F2]: all other workspaces have one corrupted record at most, and only the faulty workspace can omit a local controlled factor. Therefore accepted and rejected branches alike remain in the weight-one sector when verification contains the sole fault. This also covers cat and data idles, scratch preparation, and readout faults. [F2, F3, step 1.2, step 2.1, step 3.1, algebra]

4.2 After first-candidate verification, prepare a second, unverified bare $W|A\rangle$ fallback. Copy the first candidate's $147$ raw target records directly into $49$ separate selector workspaces. Each workspace majority-decodes its $49$ triples and computes the same accept predicate. If it rejects, swap its first-candidate coordinate with the matching fallback coordinate. Implement this conditional swap by CNOT from the first coordinate to the second, Toffoli controlled by the reject bit and the second coordinate with the first as target, then the same CNOT again. This is identity when reject is zero and swap when reject is one, by checking the two classical target bits. Retain the first register and discard the fallback and all workspaces. There is no shared selection flag and no repeat-until-success loop. [F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 With a sole fault in the first bare preparation, step 3.1 says acceptance yields the exact target and rejection selects an ideal fallback. With a sole verification fault, step 4.1 says acceptance retains a weight-one candidate and rejection selects an ideal fallback. A sole fault in fallback preparation is irrelevant because the first candidate is ideal and accepted. A sole fault in selector copying finds all $147$ raw target records zero. Outside its one target workspace it changes at most one record in a target triple, so all those workspaces still accept. The faulty workspace can swap only its one output coordinate with the matching coordinate of an ideal fallback. This is an operator supported on that coordinate of the retained register and its ancillary environment. An internal selector fault or conditional-swap fault has the same one-coordinate bound. Idles in either candidate either belong to these cases or give one local error directly; idles of selector records affect one triple entry, and idles of selector scratch affect one workspace. This proves the deterministic factory's one-fault residual sector. [F2, F3, step 3.1, step 4.1, step 4.2, algebra]

6.1 The injection circuit prepares the factory state, applies transversal CNOT from the data to it, and measures every factory coordinate in $Z$. For each data coordinate independently, copy all $49$ measurement records into a fresh decoder workspace, compute $f$ by the reversible truth-table construction of [F2], and apply $S$ to that one data coordinate controlled by the output, using the five-gate controlled-$S$ decomposition of step 2.1. Discard the workspaces and measured block. On ideal logical input $|\psi\rangle$, the two logical target-measurement branches are $T|\psi\rangle/\sqrt2$ for $m=0$ and $e^{i\pi/4}T^\dagger|\psi\rangle/\sqrt2$ for $m=1$, as direct multiplication of the two amplitudes of $|A\rangle$ shows. The second branch becomes $e^{i\pi/4}T|\psi\rangle/\sqrt2$ after $S$. The transversal identities of [F1] and the coset readout function in step 2.2 make this the exact encoded $T$ channel, preserving every reference and all branch probabilities. [F1, F2, F3, step 5.1, step 2.2, construct, algebra]

7.1 First suppose there are no faults and an incoming Pauli occupies $s\le4$ coordinates. Its $X$ component propagates to those same factory coordinates, while the data retains errors only on its original coordinates. The readout differs from its ideal coset by at most $s$ bits, so step 2.2 returns the correct $m$. Conjugation through $S^m$ is coordinatewise, leaving at most the original $s$ data coordinates erroneous. Now take an incoming Pauli error on at most one data coordinate and allow one fault. If it is in the factory, its additional error is on at most one factory coordinate by step 5.1. Transversal CNOT propagates these to the union of their coordinate labels: the factory's $Z$ component may reach the data and the data's $X$ component may reach the factory. Thus at most two coordinates in either block are erroneous. If the sole fault is instead a CNOT or a data/factory idle, it contributes at most its one paired coordinate, again giving at most two. In these cases the readout string remains within two bit changes of its ideal logical coset; all decoder workspaces are noiseless and return the correct $m$. Conjugating these local error factors through the transversal $S^m$ preserves their two-coordinate support. All resulting output terms are weight-at-most-two errors after ideal encoded $T$. [F1, F3, step 5.1, step 2.2, step 6.1, algebra]

8.1 At a faulty destructive factory measurement on coordinate $j$, each outcome $b$ and Kraus index has a row operator $\langle\phi_{b\nu}|$ on that qubit; with fault memory, its entries are operators on the memory. Expand $\langle\phi_{b\nu}|=\sum_{z_j\in\{0,1\}}\langle\phi_{b\nu}|z_j\rangle\langle z_j|$. Each term is an ideal computational-basis readout with the same other $48$ records, while the reported bit $b$ can differ from $z_j$ only at coordinate $j$. With the admitted input error, both strings are within at most two changes of the same logical coset, so the decoder returns the same $m$ by step 2.2. Thus every term receives the same logical $T$ branch and $S$ correction; its coefficient acts only on fault memory, and its data output has the residual bound from step 7.1. Summing these terms preserves the subnormalized branch identity for the arbitrary destructive-measurement channel. [F3, F4, step 2.2, step 6.1, step 7.1, algebra]

9.1 If the sole fault occurs in decoder copying, all preceding quantum operations are ideal except for the admitted one-coordinate incoming error. The measured string is within one bit change of its ideal coset. A copying fault can arbitrarily corrupt its target workspace and alter one source record for later workspaces. Every other workspace still sees at most two changes from the ideal coset, and step 2.2 returns the same correct $m$. Only the target workspace can apply a wrong $S$, on its one designated data coordinate. A fault internal to a decoder or in its final controlled $S$ has the same local bound. Combined with the incoming error this gives at most two data coordinates. The factory and incoming-error Pauli expansions, followed by the faulty-location operator expansion with coefficients on fault memory, extend steps 7.1 and 8.1 and the present calculation to arbitrary CPTP faults and erroneous inputs in the stated span. Scalar logical identities hold termwise; summing the subnormalized branch maps and applying [F1]'s recovery therefore gives the ideal $T$ channel with every finite external reference retained. [F1, F2, F3, F4, step 2.2, step 7.1, step 8.1, algebra]

10.1 A length-$49$ cat needs fewer than $100$ encoding/preparation locations and $144$ four-location parity checks. Its $49$ acceptance workspaces each use $144$ raw copies and a majority/AND circuit with fewer than $500$ gates and scratch preparations. Enabled controlled-$S$ or controlled-$X$ adds fewer than twenty locations per coordinate. The two-cat version of any target check therefore has fewer than $2^{18}$ nonidle locations, and all $147$ target checks have fewer than $2^{26}$. The final $49$ selector predicates have $147$ inputs but use explicit majority and AND circuits, not an exponentially large table; their total is below $2^{18}$. Fewer than $2^{20}$ registers are live, since cat workspaces are discarded between target checks and only the $147$ target records and two code blocks persist. The $49$ injection readout tables have $49$ inputs; the bound in [F2] gives fewer than $49\cdot2^{49}(8\cdot49+8)<2^{64}$ additional nonidle locations. Serialize every gate, including initialization, measurement and discard, and insert identity locations on every other live register at each layer. The entire factory and injection together then have depth below $2^{65}$ and fewer than $2^{85}$ locations including idles. The looser bounds in the Statement follow. [F2, step 1.1, step 2.1, step 4.2, step 6.1, construct, algebra] ∎

## Remarks

The fallback is unverified because the whole factory permits at most one faulty location: correct rejection caused by an earlier preparation or verification fault leaves fallback preparation fault free. A sole selector fault instead finds both candidates ideal and can alter only its matching output coordinate. At no point is the output of a faulty bare encoder assumed to have small weight. All projector claims occur only after the stated ideal stabilizer projection. The physical $U$ measurement is used as a Hermitian measurement only on the code.
