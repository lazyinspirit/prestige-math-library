# Periodic corrected-lift coefficient proof

The draft carrier `lem-periodic-cyclotomic-shear-tensor-corrections-escape-every-finite-cut` gives an all-cut argument, rather than treating finite examples as proof. Its analytic recurrence is

`c_0 = -1`, `c_(k+1) = -(2k+2)(2k+1)c_k`.

It comes from ordinary bar-fixed canonical coordinates in the four endpoint-position states, their bounded cyclotomic denominators, parity, and double/simple pole cancellation. The otherwise undetermined coefficient `v` in the even diagonal state does not enter either endpoint residue or the recurrence. The nonzero characteristic-zero endpoint residues prove escape of normalized corrected lifts.

The scoped precheck, renderer and proof-layout results in `local-checks.json` are mechanical local checks, not independent mathematical acceptance or a native workflow receipt. `proof-contracts.proposed.json` is an integration proposal only. `exact-bounded-field-state-check.py` provides finite-cut diagnostics; these checks corroborate the rational states but are not the all-cut proof. The old fixed-chain failures and earlier run/round/source evidence are unchanged.
