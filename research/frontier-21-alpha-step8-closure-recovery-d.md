# Step 8 closure recovery — group d, round 1

- Owned current unadjudicated rows handled: 2
- Outcomes: 0 confirmed_fatal, 2 confirmed_nonfatal, 0 false_positive
- Licensed content repairs: none
- Rejudge targets: none
- Cross-group alerts: none

## Exact rows

| Item | Context SHA-256 | Outcome | Evidence and disposition |
|---|---|---|---|
| `ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block` | `23e4ca5f854fc31d16d55b7fec71801fd80edd88ccc8a258ef9b0c35e48a3706` | `confirmed_nonfatal` | [L2] calls the cited one-directional lemma an exact characterization, so the objection identifies a real citation overstatement. The example's two-block witness and steps 1.1–2.1 independently prove the claimed phenomenon; step 3.1 is explanatory and no converse is used. The statement, construction, and verification remain correct. Closed without content, contract, impact, or judge changes. |
| `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property` | `2b62c7d7a905d9593671e4101794aca70120ad0d92d60133c51ce232ae6071c7` | `confirmed_nonfatal` | [L4] abbreviates a definition whose domain is hereditary classes, while step 10 does not explicitly establish that the class forbidding two induced subgraphs is hereditary. That closure follows immediately from the induced-subgraph-free definition: every induced subgraph of a graph containing neither forbidden induced graph also contains neither. The theorem and proof conclusion are correct; the omitted routine justification is nonfatal. Closed without content, contract, impact, or judge changes. |

## Licensing and changes

- Exact live tuple licences consumed: none; neither row was `confirmed_fatal`.
- Appended the two exact outcomes, with current pre-edit guard hashes, to `research/frontier-21-judge-adjudications.jsonl`.
- Mathematical item files changed: none.
- Proof-contract, manifest, impact, verification, defect-ledger, and judge-stamp records changed: none.

## Checks and blockers

- Both current judge item hashes matched the on-disk item text before adjudication.
- The two exact tuples now each have one adjudication row.
- Current unadjudicated rows owned by group d after the append: none.
- No group-d blocker and no incoming or outgoing cross-group alert.
- The level closure receipt remains mechanically stale until the engine recomputes it; other groups' unadjudicated rows remain outside this group's ownership.
