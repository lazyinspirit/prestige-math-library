---
page: quantum-channel-capacities-and-entanglement-assistance
title: Quantum Channel Capacities and Entanglement Assistance
status: draft
requires:
  - quantum-source-compression-and-cq-capacity
  - knill-laflamme-recovery-and-subsystem-codes
  - bell-states-teleportation-and-dense-coding
companion: quantum-channel-capacities-and-entanglement-assistance-examples
items:
  - lem-it-finite-mixture-entropy-bounds
  - lem-it-exponential-cq-spectral-projectors
  - lem-it-finite-unitary-averaging-decoupling-bound
  - lem-it-finite-extension-from-purification-channel
  - def-it-qudit-erasure-channel
  - lem-it-finite-superadditive-sequence-limit
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-flagged-state-entropy-formula
  - thm-it-finite-quantum-mutual-information-data-processing
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - lem-it-dimension-dependent-quantum-entropy-continuity
  - lem-it-flat-spectral-type-information-approximation
  - lem-it-flat-input-coherent-information-achievability
  - thm-it-qudit-erasure-channel-is-cptp
  - def-it-degradable-channel
  - lem-it-quantum-coherent-information-complement-identity
  - def-it-quantum-channel-private-information
  - lem-it-finite-cq-wiretap-strong-secrecy-achievability
  - lem-it-flat-input-entanglement-assisted-achievability
  - lem-it-maximum-coherent-information-attained
  - lem-it-qudit-erasure-channel-complement-and-degradability
  - lem-it-private-information-is-coherent-information-difference
  - lem-it-quantum-and-private-information-product-additivity
  - lem-it-entanglement-assisted-information-is-additive
  - lem-it-qudit-erasure-channel-coherent-information
  - def-it-quantum-channel-operational-capacities
  - lem-it-degradable-channel-coherent-information-concavity-and-subadditivity
  - thm-it-quantum-channel-capacity-regularized-coherent-information
  - thm-it-quantum-channel-capacity-regularized-private-information
  - thm-it-entanglement-assisted-classical-capacity-additive-formula
  - thm-it-degradable-channel-single-letter-capacities
  - thm-it-qudit-erasure-channel-exact-capacities
examples: []
---

All registers and channels in this page are finite-dimensional, and all entropies use natural logarithms. The operational quantum and private capacities have regularized information formulas for a general memoryless channel. The regularization is essential to the statement: no general single-letter additivity claim is made. Entanglement assistance has an additive mutual-information formula. Degradable channels admit a single-letter quantum and private formula, and the flagged erasure channel provides an exact family across both degradable and antidegradable regimes.

A channel dilation keeps the receiver's output and the environment's output side by side. The two partial traces define the channel and its complement, respectively; the formulas are given by the maps, not by the diagram.

~~~tikzcd
A \arrow[r,"V"] & B\otimes E \arrow[dl,"\\operatorname{Tr}_E"'] \arrow[dr,"\\operatorname{Tr}_B"] & \\
B & & E
~~~

For a purification on a reference register $R$ and channel input $A$, coherent information is $I_c(\rho,\mathcal N)=S(B)-S(BR)$. A Stinespring dilation gives $S(BR)=S(E)$, so the same quantity is the receiver entropy minus the environment entropy. Private information compares the Holevo information available at the receiver and environment. The capacity definitions specify their respective coding tasks and error criteria.

The entanglement-assisted one-use information is $S(\rho)+I_c(\rho,\mathcal N)=I(R;B)$, maximized over input states. Its additivity follows by applying data processing to the two local complementary channels and using nonnegative mutual information. For a degradable channel, the environment is obtained from the receiver by a channel; this makes coherent information concave and subadditive across tensor factors. The flagged erasure channel has complementary erasure probability $1-\epsilon$: for $\epsilon\le1/2$ it is degradable, for $\epsilon\ge1/2$ it is antidegradable, and at $\epsilon=1/2$ the two channels are identical up to the flag convention.

The companion examples specialize the noiseless qubit entanglement-assisted endpoint and the qudit erasure-capacity curve. The supplied Schumacher compression and HSW page provides finite-dimensional coding context; the Knill–Laflamme page fixes the separate error-correction setting; the Bell-state page supplies the dense-coding protocol used in the noiseless example.

The operational coding proofs are supplied by finite-block entropy continuity, exponential spectral-projector estimates, exact flat spectral-type reduction, finite unitary averaging and recovery, cq wiretap packing/covering with unnormalized Holevo leakage control, and flat Weyl entanglement-assisted codes. Finite ordered selections retain the stated no-choice convention. The converse arguments apply to the respective isometric quantum encoders, strong-secrecy mixed-state private codes, and arbitrary finite shared-state entanglement-assisted encoders.
