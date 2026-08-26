# frontier-19 Step 8 closure recovery — group b

I took the five exact missing rows assigned to group `b` by
`research/frontier-19-judge-closure.json`. Each is a Terra rejection of text
already repaired under its initial confirmed-fatal context. These are the
second frozen contexts for the items, so I applied the 30-second threshold
strictly and made no content or contract mutation.

## Exact rows and dispositions

| item | model | context_sha256 | item_sha256 | outcome | evidence |
|---|---|---|---|---|---|
| `ex-cardano-from-the-lagrange-resolvent` | `gpt-5.6-terra` | `53b5ceaea7407e7804dd9911bb477f755abb34e1f4455dc9c0f567a782273030` | `f95eb1aeb7a193750aa1991abee969e906488c3c68cb5a53b027bc6bbb56e87d` | `confirmed_nonfatal` | `L2` overstates the cited Kummer theorem, but it is not load-bearing: step 1.1 verifies the radical identity directly and step 2.1 computes both resolvents from the definition. Deleting or deriving the surplus sentence is a sub-30-second citation cleanup. |
| `ex-localisation-does-not-commute-with-products` | `gpt-5.6-terra` | `2f9c6c112b14ee29f0150c1f16998b5be838b02aa3e8106a29b8980abddfa7a8` | `d2557cbf2a492707744190b0bbfa97e8fe1a4db401bf4f00648fc147b0b2f641` | `confirmed_nonfatal` | The cited theorem proves the direct-sum half of `L1`; the added observation that it contains no product theorem is meta-prose and is unused in the counterexample. Steps 1.1-2.1 independently give the common-denominator obstruction in `Z[1/p]`. |
| `ex-localised-hom-needs-finite-presentation` | `gpt-5.6-terra` | `b3e11e0c29e7b78a311f2a6cb95a54d882c64fb1cfd1bafb5ff45eb1f99daa34` | `361afd0fd1c93010094f70ee4551ef5664dd802680b673f04b564d2de03fae98` | `confirmed_nonfatal` | `L1` can be read as saying the cited theorem guarantees an isomorphism only under its finite-presentation hypothesis, not that finite presentation is necessary for every pair. The explicit map with unbounded powers of `p` proves this particular failure without using the disputed exclusivity. |
| `thm-basic-laws-for-field-norm-and-trace` | `gpt-5.6-terra` | `0f81b5e0cbb22beacb570a108e525579912b21f969b7e72851475507987028b9` | `429784924f0f9ca74d7f3944ecf7f4a2fb99806f4de41e40f7df91a89e35aa2e` | `confirmed_nonfatal` | Step 1.4 unfolds the definition `i=[K:F]/[K:F]_s`. That definition is already used by the cited embedding-formula theorem and, together with `L3` and `L5`, yields the displayed multiplication in one line. The repaired tower proof remains valid. |
| `thm-kummer-correspondence` | `gpt-5.6-terra` | `931e39ab95c09f1656db009d024e53c795724489100b417c0bc1c1f89df86f34` | `b72bee731bb07e12b60f0b7df799b16b75b408b53d66a6542eda83a073b68368` | `confirmed_nonfatal` | The fact line `L2` omits `char(F)∤d`, but the theorem's standing hypothesis is `char(F)∤n`, step 1.4 proves `d|n`, and the application explicitly states `char(F)∤d` before invoking `L2`. The shortened fact is imprecise; the inference is licensed. |

All five exact rows were appended once to
`research/frontier-19-judge-adjudications.jsonl` with the guard-normalized
current item hashes above.

## Repairs and scope

- Licensed repairs in this recovery: none.
- Rejudge targets created by this recovery: none.
- Cross-group findings raised: none.
- Alerts answered: none.
- Rows belonging to no group: none.
- Item, page, batch-contract, manifest, impact, and verification changes: none.

## Gates

- `step8-guard`: pass; 78/78 repository Step-8 changes remain licensed.
- Judge closure recomputed read-only with unadjudicated and pending-rejudge
  allowances: 443/443 current verdict sets, zero needs-rejudge, zero open fatal.
  The remaining 34 unadjudicated rows belong to the other concurrently running
  group recoveries; none belongs to group `b`.

Group `b` has no unadjudicated row, open fatal, rejudge target, or blocker.
