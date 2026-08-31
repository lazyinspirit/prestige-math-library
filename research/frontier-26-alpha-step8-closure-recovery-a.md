# Frontier 26 — Step 8 group a rejudge closure, round 1

## Scope

The exact 8-rejudge envelope assigned four current unadjudicated tuples to
group `a`. I handled only those four rows. No incoming alert, unowned item, or
cross-group finding was present in this group's live tuple set.

## Decisions

| item | context_sha256 | outcome | disposition |
|---|---|---|---|
| `cor-ideal-divisibility-reverses-inclusion-dedekind` | `6505badf3b04e9e96e7157aa0def30dae6271c8ae5c7be0e7af81e4de27e51bc` | `confirmed_fatal` | [L1] inflated the cited theorem's one-way conclusion into an iff. It now says only that every integral ideal has nonnegative exponents. Defect type: `dependency_citation`. |
| `cor-ideals-in-a-dedekind-domain-are-two-generated` | `7f0f488e011cd6718ab7db37a5eaeb40f0032cac96b639689e6977c5d4bb069b` | `confirmed_nonfatal` | Since `a∈I`, localization gives `(a)R_q⊆I_q`, so DVR exponents satisfy `v_q(a)≥v_q(I)`. For `q` outside `S`, the defining failure of strict inequality therefore forces equality. This is an immediate proof-step bridge; no edit was licensed. |
| `ex-semilocal-dedekind-domain-is-a-pid` | `8add38cb2cf5faedb3410e3dc040b923b3f0ff933a59ef1a56947e33861dc615` | `confirmed_nonfatal` | Powers of distinct maximal ideals are pairwise comaximal: if `u+v=1` with `u∈m`, `v∈n`, expanding `(u+v)^{a+b-1}` puts every term in `m^a` or `n^b`. The omitted bridge is elementary; no edit was licensed. |
| `thm-principal-divisor-exact-sequence` | `ab002d467032c5dc72445089121b9e4b3b0ccca92a39a8e197a80ebab67ec1bc` | `confirmed_nonfatal` | A finitely supported divisor determines a finite product of prime powers directly. Positive powers are integral ideals and negative powers use the already established inverse fractional ideals, so the product is fractional. No converse to unique factorization is needed; the written attribution is terse but nonfatal. |

The exact rows were appended to
`research/frontier-26-judge-adjudications.jsonl` with current pre-edit guard
hashes. No nonfatal item was edited.

## Repair and rejudge target

The only repaired and rejudge-targeted item is:

- `cor-ideal-divisibility-reverses-inclusion-dedekind`

Its matching fatal row is appended through
`research/frontier-26-alpha-a-step8-rejudge-round1-ledger-rows.json` and the
defect-ledger append interface.

## Checks

- Focused precheck: 1 item checked, 0 failing.
- Focused strict proof-contract: 0 errors, 0 warnings, 1/1 item checked.
- Batch-1 citation fidelity with missing-quote enforcement: 104 citations,
  no missing quote and no widening candidate.
- Exact live-tuple join: 4 answers, comprising 1 fatal and 3 nonfatal; 0
  nonfatal items changed.
- Defect-ledger validation: 312 frontier-26 rows checked, 0 errors.
- Step-8 guard: 88/88 changed items licensed, 0 errors, 0 warnings.
- Step-8 scope check: four groups, 441 partitioned items, 0 open rejections,
  and 0 undispositioned cross-group alerts.
- `git diff --check`: passed.

## Blockers

None for group `a`. The exact current tuples are adjudicated, the sole fatal
repair is licensed and recorded, and the remaining rejudge target is explicit.
