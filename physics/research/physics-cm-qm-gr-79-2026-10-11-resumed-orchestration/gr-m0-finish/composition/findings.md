# Focused M0 composition-supplier finishing check

This is local research and repair evidence, not independent audit acceptance. No production carrier, original recovery candidate, import, run state, ledger or gate was modified.

Two remaining defects were found.

1. `lem-gr-periodic-fourier-differentiation-and-norm-equivalence` proof step 1.2 reverses the multinomial comparison. Its numerical lower constant is actually false: at `s=9`, `k=(1,1,1)`, the derivative symbol is `binom(12,3)=220`, while the claimed lower bound is `4^9/2^10=256`. The four-variable multinomial expansion gives the sound bound `4^(-s)(1+|k|^2)^s <= q_k`. The candidate replaces step 1.2 and all resulting exact constants, and generalizes fact L4 to the already supplied arbitrary-finite-variable multinomial theorem. The Statement promises existence of constants and is unchanged.
2. `lem-gr-periodic-sobolev-algebra` candidate proof step 4.1 omits binomial coefficients in its intermediate multiplier estimate. The exact coefficient sum is `2^|alpha|`, so the supplied replacement uses `2^k`; the final unspecified `C_k` claim is unchanged.

The Fourier constant is explicitly inherited by embedding candidate L1 and projection-properties production L2. Separate corrected copies are supplied for these two exact uses. The projection tail bound remains unchanged with its unspecified order-dependent constant. All downstream qualitative norm equivalence, density, embedding, algebra and composition contracts remain unchanged. The integrator owns final consumer closure and synchronization against candidate-author changes.

Checked scope:

- The full current recovery candidates for embedding (a)-(c), algebra (a)-(c), composition/difference/commutator/multiplier estimates (a)-(e), including the integer endpoint Holder split, density passage, compact-value cutoff, homogeneous commutator bound and lower-H^(n-1)-controlled high bound.
- Full current local dependency carriers: periodic torus/Sobolev definition; Fourier differentiation/norm equivalence; Galerkin Fourier projection definition; Galerkin projection properties.
- Exact imported multi-index definition and uniform-derivative-limit theorem interfaces; full supplied arbitrary-finite-variable multinomial theorem, including its proof. Imported snapshots were only read.

No additional gap was found in composition estimates (a)-(e). In particular, the high-order counting works because `2(n-2)>n` for `n>=6`; coefficient derivatives through `n-3` have lower-norm L-infinity control, and in the remaining commutator terms at most two derivatives fall on `w`, bounded in L-infinity by H^(n-2). The extended coefficients justify nonconvex value-domain line segments. The embedding and algebra arguments are sound after the exact corrections above; no new claim narrowing is proposed.

Four research replacement candidates are in this directory. `candidate-inputs.json` binds the exact source and replacement bytes. The original composition candidate was read with raw SHA-256 69f41dee34976fb67c32fb415b1c7dc3e23b7f2ac98730fdffd4047d9f133658 and needs no replacement. This review does not certify other imported suppliers, other M0 consumers, source-reading provenance, or pipeline acceptance.

Final local layout check: `node tools/physics-support/proof-layout.mjs` on the four explicit replacement paths returned exit 0, `proof-layout: 4 items, 19 steps, 0 defects`. No native gate was attempted. Exact counterexample arithmetic was also checked with Python integers.
