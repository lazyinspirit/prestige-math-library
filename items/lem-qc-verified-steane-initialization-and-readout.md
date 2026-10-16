---
id: lem-qc-verified-steane-initialization-and-readout
kind: lemma
title: Verified Steane Initialization and Protected Classical Readout
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-qc-concatenated-steane-distance-and-transversal-cliffords
  - lem-qc-four-round-verified-shor-correction
  - lem-qc-verified-steane-magic-state-and-injection
  - def-qc-code-deviation-and-spread
dependency_level: 21
proof_strategy: direct
sources:
  references:
    - title: "John Preskill, Fault-tolerant recovery and fault-tolerant gates (2011 lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

For the explicit $[\![49,1,9]\!]$ code $W$, there are finite preparation
gadgets for $W|0\rangle$ and $W|+\rangle$ with weight-one residual error
under at most one arbitrary CPTP location fault. There is a finite
computational-basis readout gadget which, instead of leaving an unprotected
last output bit, prepares a new encoded classical register:

$$\rho\longmapsto\sum_{m=0}^1 W|m\rangle\langle m|W^*\otimes\langle m|\rho|m\rangle.$$

The displayed map includes the unchanged external reference in the second
factor. On inputs in the weight-two error sector, at most one fault gives
the same logical readout instrument with at most one residual error in
the new block. Reset is discard followed by the verified zero preparation.
All identities use subnormalized branch maps, retain arbitrary finite
external references, and allow explicit auxiliary fault memory. The
finite elementary alphabet and bounds $2^{240}$ locations including idles,
$2^{210}$ depth and $2^{20}$ live registers of
[[lem-qc-verified-steane-magic-state-and-injection]] suffice.

## Facts & Assumptions

**Given:** The ordered code $W$ and the exact finite circuits of the following suppliers.

[F1] [[lem-qc-concatenated-steane-distance-and-transversal-cliffords]] gives distance nine, transversal Hadamard and logical Pauli representatives, and a fixed recovery through weight four.

[F2] [[lem-qc-four-round-verified-shor-correction]] gives finite verified cats, majority-protected acceptance controls and reversible truth tables.

[F3] [[lem-qc-verified-steane-magic-state-and-injection]] gives the bare encoder, two-candidate coordinatewise factory selection, and the explicit nearest-logical-coset readout function $f$, correct through four bit errors.

[F4] [[def-qc-code-deviation-and-spread]] gives the joint-sector, subnormalized branch and external-reference conventions.

## Proof


1.1 To prepare zero, use exactly [F3]'s factory circuit with two changes: omit the initial bare $H,T$ that prepare the unencoded $|A\rangle$, and replace the last verified logical observable $M$ by the physical logical $\overline Z$. The latter is a weight-nine product of $Z$ operators, so its controlled factors use the already specified verified-cat Pauli circuit; no controlled non-Pauli gate is needed. Repeat each of the $48$ stabilizer target checks and the $\overline Z$ target check three times as before. A fault-free bare candidate is $W|0\rangle$. For a fault in bare preparation, ideal accepted verification projects first into the code and then into its logical-$Z$ $+1$ space, namely the rank-one space spanned by $W|0\rangle$. For a verification fault the input is that ideal state, and every later stabilizer or $\overline Z$ measurement preserves its one-coordinate Pauli error span. Thus the entire two-candidate, independently decoded swap argument of [F3] applies verbatim with this explicitly specified Pauli observable, giving weight-one residual error. Apply the $49$-location transversal Hadamard to obtain plus: a factory fault is still local after that layer, and a fault in that layer contributes only its one coordinate. [F1, F2, F3, construct, algebra]

1.2 Prepare a fresh verified zero block, while retaining the data to be read. Measure the data's $49$ coordinates in $Z$ and keep all physical records $z$. For each coordinate in the support of $\overline X$ on the fresh block, independently copy the full $49$-bit record into its own decoder workspace, compute [F3]'s function $f(z)$ by its fixed reversible truth-table circuit, and apply $X$ to that one coordinate controlled by its own output. Leave the other fresh coordinates unchanged. Discard the old data and every workspace. With no errors the measured strings belong to the disjoint supports $C_m$ of $W|m\rangle$; all decoders return $m$, and the output is $\overline X^mW|0\rangle=W|m\rangle$. Since no string can occur for two different logical labels, this physical measurement followed by controlled preparation is exactly the displayed logical instrument, including its reference blocks and probabilities. [F1, F2, F3, construct, algebra]

2.1 More generally, fix a physical measurement string $z$ and an incoming Pauli component $X^uZ^v$ of weight at most three. Its measurement amplitude on logical $|m\rangle$ is zero unless $z+u\in C_m$. Whenever it is nonzero, $z$ is within three changes of $C_m$, so $f(z)=m$ by [F3]. For several Pauli components contributing to the same $z$, their logical label is still the same: if $z$ were within three changes of both cosets, their mutual distance would be at most six, contradicting nine. Their phases and amplitudes are therefore scalar coefficients multiplying the same logical measurement bra $\langle m|$. This proves the ideal instrument identity on the whole weight-three operator span. Summing the physical strings uses trace preservation to give the correct logical probabilities; cross terms between distinct logical labels vanish already string by string. The calculation is unchanged with an arbitrary external reference. [F1, F3, step 1.2, algebra]

3.1 At a faulty destructive $Z$ readout on coordinate $j$, each recorded bit $b$ and Kraus index has a row operator $\langle\phi_{b\nu}|$ on that qubit; with fault memory, its entries are operators on memory. Expand $\langle\phi_{b\nu}|=\sum_{z_j\in\{0,1\}}\langle\phi_{b\nu}|z_j\rangle\langle z_j|$. Each term is an ideal computational-basis measurement string whose reported string can differ only at coordinate $j$. With the two admitted data errors, these strings are within at most three changes of the same logical coset, so [F3]'s function $f$ returns the same $m$ by step 2.1. All terms therefore have the same logical measurement bra $\langle m|$ and the same encoded output $W|m\rangle$; only their subnormalized branch and memory coefficients differ. This proves the readout identity for an arbitrary one-location destructive-measurement channel. [F3, F4, step 2.1, algebra]

4.1 If the sole fault is in zero preparation, its output has one residual coordinate error by step 1.1, and all readout decoders are noiseless. Their input physical strings have at most two changes from the ideal coset, so they all apply the same correct $\overline X^m$, which preserves one-coordinate support by conjugation. If the fault touches the old data, including its idles while zero is prepared, its local Kraus expansion contributes at most one changed coordinate in addition to the two admitted input errors. Step 2.1 therefore still identifies the correct logical label. A fault at a physical measurement is covered by step 3.1. The fresh zero block and all decoders are then noiseless, so the new output has no residual error. [F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 A sole record-copying fault may arbitrarily corrupt its target decoder and change its one source bit for later decoders. All other decoders see at most three changes from the ideal coset, and [F3] therefore still returns the same $m$. Only the faulty workspace can apply an incorrect $X$, on its one designated fresh coordinate. An internal decoder fault, a fresh-output idle fault, or a final controlled-$X$ fault likewise affects at most that coordinate. This accounts for every location. Expanding input and fault Kraus operators in the finite Pauli bases with coefficients on fault memory extends the displayed logical-bra calculation to arbitrary CPTP faults. Each subnormalized branch is a weight-one error after the displayed ideal instrument, with scalar logical coefficients and memory actions; [F1]'s recovery removes these residual terms. Reset discards the old logical register and then applies step 1.1; a trace-preserving fault on discarded old registers alone cannot signal to the external reference. [F1, F2, F3, F4, step 2.1, step 3.1, step 4.1, algebra]

6.1 All zero-factory target checks are shorter than their counterparts in [F3]. Readout uses at most $49$ independent $49$-input truth tables, already bounded there by fewer than $2^{64}$ nonidle locations. There is one additional code block, and no additional exponentially large workspace. Serial scheduling and inserting an identity at every other live register therefore fit the same conservative location, depth and live-register bounds. All raw record copies, Boolean gates, final controls, preparation, measurement, reset and discard are included. [F2, F3, step 1.1, step 1.2, construct, algebra] ∎

