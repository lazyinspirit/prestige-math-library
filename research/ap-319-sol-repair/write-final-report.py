from pathlib import Path
import json
b=Path(__file__).resolve().parent
d=json.loads((b/'effective-receipts.json').read_text());assert not d['missing'] and not d['stale']
c=json.loads((b/'final-check-results.json').read_text());v=json.loads((b/'final-check-comparison.json').read_text());l=json.loads((b/'ledger-reconciliation.json').read_text());seals=json.loads((b/'local-review-seals.json').read_text())
orig=d['original_counts'];maint=d['maintenance_counts'];new=json.loads((b/'new-prerequisites.json').read_text())
s=f'''# A-P repairs and necessary consumer maintenance — 2026-09-23

All ten requested **gpt-6-sol agents at xhigh** completed their assigned audits. Logical validity governed the reviews; sources and earlier stamps were not treated as proof. The original frozen set remains exactly **319** items.

| Scope | Repaired | Sound without repair | Deferred |
|---|---:|---:|---:|
| Original 319 A-P items | {orig['repair']} | {orig['accept']} | {orig['defer']} |
| Additional consumers and used suppliers | {maint['repair']} | {maint['accept']} | {maint['defer']} |

**{len(new)} necessary new definitions/lemmas** were authored, locally reviewed and integrated into existing pages. They are separate from repair totals. Deferred items may contain valid partial repairs; they are not counted as completed mathematical repairs.

## Mathematical outcomes and consumer scope

The repairs cover exact theorem hypotheses, proofs, choice assumptions, definitions and dependencies. Arbitrary-index choice, countable choice and finite constructions are distinguished. Several finite-dimensional or compact-support consumers retain their original claims through independent proofs instead of inheriting a stronger global hypothesis.

Changed original claims were traced through direct and indirect dependency/reference consumers, including removed historical edges and relevant aliases. The impact records distinguish affected proof uses, necessary edits, independent arguments, unchanged interfaces and substantive deferrals. Graph reachability alone is not claimed as a mathematical audit of every unrelated claim in a descendant. The 311-node current/historical coordinate-ball closure, for example, led to further homotopy, density and integration repairs beyond first-hop premise propagation.

The new boundary prerequisites supply partition definitions, compact coordinate half-balls and countable locally finite shrinking. The fourth new lemma supplies choice-free finite chart integration of compactly supported forms, including boundary faces. Its finite common-refinement and local half-space substitution proof preserves the unqualified change-of-variables, positivity and embedded-submanifold consumers. A noncompact symplectic refutation now uses only compact-square substitution and a uniform finite bound, rather than an unsupported total-area comparison.

In Lie theory, explicit PBW and commutator arguments preserve finite sl2 examples, and explicit singular vectors prove the A2 embedding example. Independent local arguments also rescue the generic sl2 and singular A2 block examples. The general Shapovalov/Jantzen/linkage chain remains deferred: repairing its Choice interface does not supply its missing proof. Agents03/06 actually read the cited Etingof exercise/theorem passages; the arbitrary-positive-root embedding theorem's cited proof itself uses the determinant, so it is not an independent fallback.

## Remaining substantial prerequisites

The original eight deferrals are:

'''
for i,r in sorted(d['receipts'].items()):
 if r['original'] and r['decision']=='defer':
  u=r.get('unresolved');u='; '.join(map(str,u)) if isinstance(u,list) else str(u)
  s+=f'- `{i}` — {u}\n'
s+='\nNine additional audited suppliers/consumers remain deferred in the same general Lie-theory proof chain:\n\n'
for i,r in sorted(d['receipts'].items()):
 if not r['original'] and r['decision']=='defer':s+=f'- `{i}`\n'
s+='''
The exact four determinant obligations are the affine-root factor-direction bridge, a noncircular generic positive-root embedding, identification of the whole generic radical, and perfection of the first transverse derivative pairing. They must be proved before revalidating the determinant, Jantzen sum, strong linkage and the dependent block/BGG conclusions. Full item-specific source evidence and repair strategies are in [remaining-mathematical-obligations.json](remaining-mathematical-obligations.json) and the authoritative receipts.

## Validation and limits

'''
s+=f"Every authoritative owner reservation has a current receipt: **{len(d['receipts'])} items**, zero missing and zero stale. Original coverage is 319/319 with no claim-flag mismatch or missing changed-claim impact file. Metadata-only seals preserve the original receipt hashes and bind them to final bytes; mathematical bodies and nonverification metadata are unchanged by sealing. Stale pass stamps on substantive deferrals were withdrawn without replacement passes. Local reviews are explicitly not independent judge verdicts or whole-library certification.\n\n"
s+='| Check | Result |\n|---|---|\n'
for name,x in c['results'].items():s+=f"| `{name}` | {'Pass' if x['exit_code']==0 else 'Global/scoped failure — see raw diagnostics and comparison'} |\n"
s+=f"\nChecks covered {c['owned_item_carriers']} owned item carriers and {c['root_pages']} changed root-owned pages. Repository-wide dependency checking reports {v['depcheck_final_summary']['errors']} errors; the repository is **not globally green**. The 17 deferred carriers deliberately have no replacement pass stamp; unrelated existing unaudited carriers and structural debt also remain. The reconstructed before snapshot and exact new/removed diagnostics are retained in [final-check-comparison.json](final-check-comparison.json). Existing global page cycles and unrelated diagnostics are not presented as repaired. Final plan validation retains 19 hard diagnostics: 14 baseline diagnostics plus five newly exposed manifestations of the preexisting Lie page-order debt. The same 93 cross-page Lie dependency edges were present before and after, as recorded in agent-07-final-plan-review.md. No valid dependency was removed to conceal that cycle.\n\n"
s+='''## Canonical records

The canonical [published consumer/supplier ledger](../published-consumer-supplier-ledger.md) has been reconciled from final audited dispositions. Sound original items leave active defect queues; existing unrelated classifications on accepted outside items are preserved. New prerequisites are not counted as defect repairs. Historical findings and frozen reasons remain available.

'''
s+=f"Final ledger census: {l['published']:,} published items; {l['indexed']:,} indexed. Active classifications: "+', '.join(f"{k} {l['counts'].get(k,0)}" for k in ['U-P','U-C','A-R','A-P'])+'. This is a status census, not an exhaustive audit of the library.\n\n'
s+='''- [Effective receipts](effective-receipts.json), append-only `agent-NN-receipts.jsonl` and maintenance receipt files.
- `agent-NN-impact-*.json`: full consumer traces and exact mathematical use dispositions; each shard report describes its bounded scope.
- [New prerequisites](new-prerequisites.json), [boundary review](root-boundary-prerequisite-review.md), and [finite integration review](root-finite-boundary-prerequisite-review.md).
- [Metadata-only bindings](local-review-seals.json), [receipt audit](receipt-audit.json), [checks](final-check-results.json), and [ledger reconciliation](ledger-reconciliation.json).
- [Existing-page relocations](root-rehomes.json) and plan reconciliation files record necessary shared metadata changes without deleting valid proof dependencies.

No build transition, independent judge round or commit was performed. Preexisting workspace changes were preserved.
'''
(b/'final-report.md').write_text(s)
print('final-report.md written')
