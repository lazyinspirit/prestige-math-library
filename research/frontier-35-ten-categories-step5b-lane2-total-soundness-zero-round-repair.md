# Lane-2 total-soundness zero-round support repair

Item: `lem-total-soundness-follows-by-union-bound` (draft). Pre-edit guard `54a08b56757760b03db86700b5318df66ec3d808113a304213060f4c1c4ec4cc`; post-edit guard `fc1665d7b6b24660c35d75593f02404b947654821ee89621342d2af185a1a030`.

The theorem includes a quantifier-free formula (`n=T=0`). Its old Fact A3 cited only `lem-efficient-prime-field-for-a-polynomial-soundness-budget` for `p>12TD`, but that lemma assumes `T≥1`. The current `def-shamir-protocol-for-tqbf`, Definition, explicitly sets `p=3` when `T=0`. A3 now splits the cases: it invokes the prime-budget lemma when `T≥1` and the protocol's `p=3>0` rule when `T=0`. The union-bound proof and exported Statement stay unchanged; the zero-round terminal comparison remains a direct rejection on a false formula.

This is a confirmed nonfatal support-hypothesis defect. The batch-12 proof contract now includes an exact A3 citation to the protocol's zero-round clause, alongside the existing T≥1 prime citation; strict focused contract check returned zero errors and warnings. Focused item precheck also passed. The four incoming current-hash pair uses are in `research/frontier-35-ten-categories-step5b-impact-lane-2-evidence.jsonl`; the protocol and prime rows are marked `repaired`. No Statement/Definition change or central plan delta.
