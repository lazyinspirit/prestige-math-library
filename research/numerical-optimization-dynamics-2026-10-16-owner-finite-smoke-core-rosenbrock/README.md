# Proposed numerical fixture core and Rosenbrock family

Research proposal only. No canonical tool, item, contract, registry, runtime or
hash binding has been edited. The coordinator has explicitly withheld fixture
execution pending root review; there are no claimed passing evaluations yet.

`numerical-core.mjs` supplies normalized BigInt rationals, exact rational finite
binary round-to-nearest/ties-to-even with bounded normal exponents, and small
numeric dense matrix helpers. Rational constructors take integers or explicit
numerator/denominator pairs, not arbitrary JavaScript decimal values. The binary
model rejects subnormal and overflow results. It is a bounded model rather than
an assertion about every hardware format. There is no general square-root or
QR implementation in this helper.

`rosenbrock-checks.mjs` exports `numericalRosenbrockChecks`, with one machine key
`numerical-rosenbrock-fixture` and 22 explicit selectors. Empty options evaluate
all selectors for registry self-test compatibility. Unknown selectors and
unsupported parameter fields fail; they never return a generic pass. Outcomes
report individual fixture summaries and distinguish bounded samples from proofs.

The family implements shared exact shifted-stage computations, scalar/diagonal
stored Householder traces, residual allowance and status checks, reusable factor
counters, exact-equation stability samples, and coefficient/zero-error witnesses.
The diagonal factor model follows the actual source's formation and reflector
application order on active columns having one nonzero coordinate; their norm
square roots are exact. It does not model arbitrary non-diagonal QR. General
tiny dense numerical solves are used only for independent exact-stage comparisons.

`batch74-contract-proposals.json` is a complete proposed contract file. Only its
22 finite-smoke entries differ: each retains every native descriptive field and
adds a registry key, selector, and an exact complete public source interface as
the assertion excerpt. `mapping.json` records ownership and limits. Full current
contract and actual item carriers are preserved under `before/`; the metadata
diff is provided separately. Original source reading comprises every current
batch74 public Statement/Definition; this does not claim another proof audit.

Two stale native descriptions require explicit root disposition. First, the
old zero-tolerance QR “success with rho=0” case cannot satisfy the current
positive-unit-roundoff residual allowance, even with exactly zero residual.
Fixtures retain that input as a residual-not-certified branch and add a positive
tolerance success branch; the old text is preserved as historical evidence,
not silently endorsed. Second, the current successful two-stage reuse example
uses the exactly stored identity shift with zero Jacobian approximation. Its
old contract names irrational exact-J diagonal entries. The proposed fixture
checks the current stored branch and keeps the latter only as an exact-equation
comparison. The current source's exact-storage requirement is not bypassed.

Root integration would import and spread `numericalRosenbrockChecks` into the
main registry and project the reviewed contract entries. Proposed module import
paths must be adjusted only when the core and family are moved together. No
fixture here proves global half-plane stability, asymptotic convergence order,
universal termination, complete rounding correctness, or tube admissibility.
