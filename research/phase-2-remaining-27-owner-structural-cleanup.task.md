# Owner-authorized Step-7 structural cleanup

Run: `phase-2-remaining-27`.

After the owner escalation repairs, `node tools/depcheck.mjs` reports exactly
seven fatal `b-leaf-content` errors. Resolve all seven without weakening any
proof:

- `def-chern-character-of-a-complex-vector-bundle` ->
  `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space`
- `ex-complex-k-ahss-for-complex-projective-space` ->
  `ex-complex-k-ring-of-complex-projective-space`
- `ex-euler-class-of-the-universal-oriented-two-plane` ->
  `ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space`
- `lem-ma-produces-an-uncountable-q-set` ->
  `ex-the-cardinality-of-the-continuum`
- `ex-standard-inner-products-on-kn-ell-two-and-l-two` ->
  `ex-counting-measure-integral-is-a-series`
- `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`
  -> `ex-c-of-a-compact-space-is-banach`
- `ex-ito-formula-for-brownian-powers` ->
  `ex-integral-of-brownian-motion-against-itself-preview`

For each edge, read the full consumer proof and determine whether the cited
B-page fact is genuinely used. Remove an unused dependency, replace it with an
existing A-page supplier, or prove the small needed fact locally. Never move a
B-only item into an A-page dependency merely to silence the checker, and never
weaken a proof. Synchronize manifests, proof contracts, coverage and frontier
inputs where the true interface changes.

Also reconcile these three `git diff --check` failures without invalidating the
mathematical repair that produced each current item:

- extra blank line at EOF in
  `lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space`;
- extra blank line at EOF in `thm-locally-compact-gelfand-duality`;
- trailing whitespace in
  `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`.

The group-D contract reconciliation also exposed three mathematical/carrier
defects that must be repaired before their contracts can be current:

- `ex-brownian-hitting-probability-from-an-exponential-martingale` applies the
  discrete-time optional-stopping supplier directly to a continuous stopping
  time. Supply an honest continuous-time bounded-stopping argument or the
  correct existing supplier; do not relabel the discrete proof.
- `ex-logarithm-of-geometric-brownian-motion` has an ill-typed exponential
  bound using the product `mu` instead of the declared parameter `\mu`.
- `thm-brownian-filtration-martingale-representation` carries F12 and its
  dependency without any proof use. Remove the genuinely unused citation or
  cite it at the actual step if the proof truly uses it.

After these carrier repairs, regenerate only their affected batch-8 contract
entries and merge the contracts. Re-run strict selected contract checks for
all fifteen items listed in
`research/phase-2-remaining-27-owner-contract-reconcile-d.md`; all must pass.

Every changed existing item needs an exact current owner repair licence in
`research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`; update
an existing row when this cleanup changes its licensed post-hash, or append an
`owner-impact-repair` with the exact dependency path and at least two
authoritative HTTPS sources when it is a new affected consumer. Do not edit
published items, judge/adjudication ledgers, terminal receipts, queues, stamps,
engine state or tools.

Write evidence to
`research/phase-2-remaining-27-owner-structural-cleanup.md`. Run depcheck to a
clean exit, strict selected proof-contract checks, focused precheck/prosecheck,
and repository-wide `git diff --check`.
