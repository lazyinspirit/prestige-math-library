# Flat Penrose smoke assertion binding

The owning current manifest is batch 68. Read the complete current example,
its complete owning contract, the full Penrose smoke implementation, and the
finite-smoke assertion/selection logic. The source repair changed the Example
from a standalone flat bundle to an arbitrary ASD bundle with an added flat
summand, leaving the zero-rank and rank-one flat cases included. Its previous
assertion excerpt was therefore stale.

Changed only the string at
`/contracts/ex-qftx-penrose-flat-summand-vanishing/finite_smoke/0/asserts`
in the owning batch-68 proof-contracts JSON. The exact current Example
paragraph, including all hypotheses, direct-sum conclusion and m=0 endpoint,
now supplies the assertion excerpt. No check name, expected output, computation,
source, claim, other contract field or combined generated contract was changed.
The actual contract schema calls this field `finite_smoke`, rather than the
informal `finite_checks` wording of the repair brief.

The unchanged implementation computes the rank-zero empty complex and the
rank-one/dual scalar complexes. It checks adjacent differential composition and
computes exact integer matrix ranks on 206 total-degree -2 Laurent modes within
[-3,3]^4, giving 412 rank computations. This remains bounded falsification
evidence; it proves no analytic comparison, convergence, arbitrary ASD connection
case, global transform theorem or full finite-rank vanishing.

Both actual focused commands from physics/ passed with exit 0, recorded in
checks.json: finite-smoke has one successful flat-ranks-zero-and-one obligation,
206 modes and no errors; strict proof-contract has exactly the assigned item,
no warnings and no errors. An initial command from the root cwd pointed its
relative contract path at root research/ and returned contract-read ENOENT;
no obligation ran in that invocation. The recorded successful checks use the
correct physics cwd and actual owning contract.

repair.json records exact old/new assertion strings and the current source and
contract bindings. Root retains combined-contract generation, rehash, native
gate resolution and commit ownership. No source edit or interface event occurred.
