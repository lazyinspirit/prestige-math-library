# Published PCP supplier premise repair

Run: `frontier-37-owner-30`. Owner lane: `/root/s3_precheck_b7`.
State: proposed repairs prepared; published sources unmodified while refuter-17 reads the original evidence.

## Verified defect and exact used supplier route

The original published Statements of `thm-gap-csp-is-np-hard` and
`thm-pcp-theorem-np-equals-pcp-log-n-o-one` omit Choice and their final
Remarks expressly say that no choice principle is used. The current library
proof route reaches an explicitly Choice-qualified theorem:

`thm-gap-csp-is-np-hard` → `def-dinur-pcp-transformation` →
`thm-gap-amplification-step` → `lem-constraint-expander-overlay` →
`lem-expander-size-adjustment-and-laziness` →
`thm-margulis-family-has-uniform-spectral-gap` →
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms` →
`thm-real-normal-endomorphism-classification` →
`thm-complex-spectral-theorem-for-normal-endomorphisms` →
`thm-the-complex-numbers-are-algebraically-closed` →
`thm-fundamental-theorem-of-finite-galois-theory` →
`thm-artin-fixed-field-degree-theorem` →
`thm-relative-automorphism-group-and-separable-degree-bound` →
`thm-algebraic-embedding-extension` → `thm-zorn` → `def-axiom-of-choice`.

These are actual proof uses: Margulis step 2.1 reads its spectral [F2];
real classification step 1.1 uses the complex theorem; complex spectral step
1.1 uses algebraic closure; algebraic closure steps 1.3, 3.1, 5.1 and 7.1
use finite Galois [L5]; finite Galois steps 1.1–2.1 use Artin; Artin step
2.1 uses the relative-automorphism bound; relative-automorphism step 1.2
uses its AC-qualified [A1]; embedding extension step 3.1 uses Zorn; Zorn
step 4.1 invokes AC. The NP-to-PCP inclusion reads the gap supplier in
PCP step 1.2.

This is a defect in the recorded proof interface, not a claim that PCP or
finite symmetric spectral theory intrinsically requires full AC. A finite
algebraic-extension embedding can be built by a finite tower of simple
extensions, and real symmetric spectral theory admits a compact-sphere
Rayleigh-quotient induction. Those alternatives are not supplied in the
current invoked library chain, and the downstream finite graph construction
does not by itself discharge the imported assumption. No new external full
texts were consulted; the finding and bounded repair use the stated library
claims and their explicit proof steps.

## Preserved evidence and proposal

Original source and relevant contract row snapshots, plus exact proposed
sources, are under `/tmp/frontier-37-pcp-choice-repair/`. Original raw SHA-256:

- Gap CSP: `3fb7cf91522e027a8c56d4b2f2bf09a53b123f493fba445ae4fbf6264af99696`.
- PCP: `26dc296003a1d16b5cdc6ea323cfcfee29bcf5c5a942df7ae6f86e29c0d27117`.

The bounded proposal adds AC to each Statement and Given, a direct
`def-axiom-of-choice` dependency, an exact assumption fact and initial
supplier-use tag, and replaces the denial of Choice with the inherited-route
explanation. Numerical claims and finite reductions are preserved. Statement
provenance becomes `ai-altered`. Proposed-carrier precheck and real renderer
passed both items. These are local format checks, not renewed independent
mathematical certification. Historical frontier36 contract artifacts are
preserved under root direction.

## Direct consumer inventory and next action

The only dependency consumer of gap CSP is the published PCP theorem, which
is repaired second, after the first published-item repair is recorded. The
only dependency consumer of PCP is draft
`lem-pcp-verifier-reduces-to-gap-max-three-sat`; its original Statement, [F6]
and step 1.1 already assume AC for precisely this supplier route. Its
Statement needs no change, so propagation stops there. Its current B17
contract [F1] exact supplier quote must be updated after reader/refuter
writing drains; root owns the current aggregate contract refresh. The
published home page `alphabet-reduction-and-the-pcp-theorem` should mention
the inherited premise. Root integrates current plan statement/dependency
metadata; concluded-run manifests remain historical.

Next: wait for root's refuter-17 completion notice, confirm original source
hashes, claim and repair gap CSP first, record its local checks and canonical
ledger/repair evidence, then claim and repair PCP and reconcile its immediate
consumer quote and home page. Do not run item gates, rejudgment, broad gates
or edit reader17's in-flight consumer source.

## Step-5 continuation readiness (2026-10-01)

The continuation worker `/root/s5_pcp_published_repair` read CLAUDE.md and
README.md fully. Both original raw hashes above still match. The old `/tmp`
proposal directory was absent in the resumed environment; original snapshots
and bounded AC-qualified proposals were reconstructed there from the unchanged
sources and this handoff. Both reconstructed proposals pass targeted
`tools/precheck.mts` (via `tools/tsx-run.mjs`) and `tools/rendercheck.mjs`.
These are local format checks only. Published sources remain unmodified and
no ownership claim has been made while refuter-17 reads originals.

Supported serialized claim command: `node tools/published-repairs.mjs claim
--run frontier-37-owner-30 --id ID --group GROUP`. Claims store the canonical
item hash, which differs from raw SHA-256 by excluding verification metadata.
Do not manufacture a Step-5 adjudication obligation or historical receipt.
The canonical ledger has no item-specific PCP defect row yet; add exact
supplier mapping, bounded repair, hashes, checks and audit disposition there
after each released one-item repair. Root owns current aggregate B17 contract
refresh and plan metadata. The live draft consumer already assumes AC; its
Statement need not change. Await root release and intended group before claim.

Gap-CSP repair applied serially under group h after refuter17 drained; raw post hash `67ddc5a40557d72f265b3fdf792598dce77fa8b160b59b3fa37f924bcbc50bed`. Targeted precheck/render pass; canonical ledger updated before claiming PCP.

PCP repair applied serially under group h; raw post hash `88eea3386b085c33af804801f28c578e50d69eb8941c98719c18adba5ba1cfc4`. Targeted precheck/render pass. Exact B17 consumer F1 quote and published home prose refreshed; draft consumer Statement already AC and unchanged. Canonical ledger updated. Root owns active plan and audit-metadata integration.

Active plan metadata integration complete: exact two entries in
`research/plan-spec.json` now prepend the current-route AC qualifier, add
`def-axiom-of-choice` as the first dep, and set statement provenance to
`ai-altered`. Atomic narrow edit preserved all strategies, other fields and
other rows; no concluded manifests or audit stamps changed. JSON parse and
exact scoped before/after comparison checked locally. No extra gate run.

## Recorded local repair verification state

Closure support implemented in `tools/published-repair-policy.mjs` and
`tools/depcheck.mjs`, documented in SCHEMA verification fields. Focused policy
and ownership tests pass 15/15. The two published carriers now contain only
`verification.precheck` and a `verification.repair` receipt path; no whole-item
audit or mathematical acceptance stamp is claimed. Durable original snapshots
and exact dated local precheck/renderer outputs are stored in
`research/frontier-37-owner-30-published-repair-evidence/`. Canonical ledger
marker blocks were appended while holding its prescribed mkdir lock.
The receipt validates actual pre-edit ownership, published pre-carrier hashes,
current math hash, exact ledger text and both successful local checks.
New publication still needs the ordinary audit; invalid repair metadata does
not gain the legacy pending-audit exemption. No global gates were run.

Earlier raw repaired hashes above describe pre-metadata carriers. Current
raw hashes after the verification-only receipt pointer addition:
- `thm-gap-csp-is-np-hard`: `f699e44cdd3fec0887e089056cd058e78a41ebee4ab6862a0d7c59c7e5e5e397`.
- `thm-pcp-theorem-np-equals-pcp-log-n-o-one`: `56f0e0f93be436fa650d6a8f70838b3fafa78cd4c8e8c2e5e12a31f07576cba4`.
Mathematical guard hashes are unchanged by that addition.

Final hardening: before-carrier evidence must include a prior audited or
verified marker inside its verification block, preventing a never-audited
publication from entering via repair. Focused policy/ownership tests pass
17/17, including absence of prior audit and misplaced audit markers. Both
actual PCP receipts still validate directly. Current audit stamps remain
absent. The selective depcheck-only patch is
`/tmp/frontier-37-pcp-choice-repair/depcheck-local-repair-only.patch`; it excludes
preexisting item-scope changes and is based on the current Git index.
