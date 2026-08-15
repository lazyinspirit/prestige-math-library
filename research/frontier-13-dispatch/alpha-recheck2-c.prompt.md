# frontier-13 — Alpha re-check, round 2 (final gate before step 4)

Narrow pass. Your round-1 report stands; verify **only** the corrective work
listed in your task file, and answer one question per pair:

> **`ready-for-splice` or `not-ready`?**

After this, item text stops being cheap to change.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent. If blocked,
  **record a blocker** — never a prompt.
- Author nothing. Edit no batch file, no `plan-spec.json` entry, no published
  item. Write only `research/frontier-13-alpha-<g>-recheck2.md`.
- **Read from disk.** A Beta's account of its own repair is not evidence.
- Your batches only.

## The failure shape to hunt

Every round of this run has produced the same defect: **a repair fixes the claim
and leaves its obligations behind.** A Statement, title or id moves while its
`deps`, proof-contract input map, provenance row or coverage row stays put. It has
appeared in batch 6 (poset hypothesis with no antisymmetry dependency), batch 4
(hereditary property asserted without the licensing lemma), and batch 6 again (a
rename that reached three artifacts but not the notes' provenance table).

Check that shape on every item the corrective pass touched, then check the pass's
own additions for it.

## Also verify, briefly

- **New items**: dependency in closure or an earlier same-pair item; component
  provenance on both axes; contract citations that state a **proposition**, not a
  clause's opening words; a coverage row naming the item.
- **Ids versus content** — last free moment before immutability.
- **Nothing else regressed**: item counts, gates, closure.

## Verdict

`ready-for-splice` / `not-ready` per pair. `not-ready` names the exact remaining
work. Close with anything the orchestrator or the step-4 splice must know.


---

# This dispatch

## Group C round 2 — batches 4, 6

Round-1 verdicts: 399 `ready-for-splice`; **395 and 365.001 `not-ready`**.

### Batch 4 (order 395)

You found the repair asserted the Erdős–Hajnal property — defined only for
**hereditary** classes — about an $H$-free class in all three new items, none
citing `lem-forbidden-induced-subgraph-classes-are-hereditary`. The second pass
adds it to their `deps` and contract input maps.

**Verify** it landed on every item that asserts the property, including the B-page
instance if it does, and that each cites the lemma at the step where the hereditary
hypothesis is actually used rather than merely listing it.

Your round-1 mathematical verification stands and needs no repeat: the
$\binom{t+s-2}{t-1}$ instantiation, the $s\ge t-2$ condition, $\omega(K_0)=\alpha(K_0)=0$,
the $1/t$ underclaim, and 0 of 15 new dependencies out of closure.

### Batch 6 (order 365.001) — passes three and four

- **F6.7**: the four paraphrased Riehl section names replaced with the printed
  titles (*The unit and counit as universal arrows*, *The calculus of adjunctions*,
  *Contravariant and multivariable adjoint functors*, *Adjunctions, limits, and
  colimits*). Confirm against the PDF you already opened.
- **F6.8**: the rename reached `notes.md`'s provenance table — you found it keyed
  on the dead id while the three JSON artifacts were updated. Confirm the row now
  keys on `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid` and
  that the author will find a provenance row at step 5.
- **F6.9**: all eight hollow citations replaced. Beta reports them as
  `thm-adjunctions-compose` F1, `thm-mates-…` F1, counit fullness F3,
  abelianisation F1/F2, ideals/varieties F3/F4, preorder example F2. **Confirm each
  now states a proposition rather than a clause's opening words** — that is the
  check no gate performs, and it is the one you invented.

Batch 6 has taken four repair passes, each finding something the previous pass's
*fix* introduced or left behind. Say plainly whether it has converged.
