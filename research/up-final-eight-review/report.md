# Sequential review of the final eight U-P items

Owner-authorized bounded review, 23 September 2026. Logical validity governs
these decisions; this is not an independent judge verdict or a whole-library
certification. All eight were handled sequentially. No new item was authored.

| Item | Decision |
|---|---|
| `def-harish-chandra-projection` | accept |
| `def-noetherian-ring-and-module` | accept |
| `thm-auslander-buchsbaum-serre-regularity-criterion` | defer |
| `rem-weak-perfect-graph-theorem-for-the-bull-route` | accept |
| `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set` | accept |
| `rem-malcev-finitely-generated-linear-groups-are-residually-finite` | repair |
| `rem-nonabelian-extension-obstruction-in-h-three` | defer |
| `rem-aleph-one-dowker-space-open` | repair |

Four accepted unchanged, two repaired, two deferred A-P. The per-item reasoning,
source-reading scope, hashes and remaining obligations are in
[receipts.jsonl](receipts.jsonl). The original carriers are in `before/`.

The regularity criterion's dimension-theory route reaches the published
`lem-height-theorem-first-generator-reduction`. Its Proof 1.1 names a
“two-step prime-avoidance argument” but does not construct the replacement
prime chain. Ordinary finite prime avoidance only finds an element once the
requisite noncontainments hold. The criterion uses regular-local structure,
the parameter-quotient lemma, dimension as the minimal number of radical
generators, and the height theorem. The missing step therefore cannot be ignored.
Stacks 00KD, Proposition 10.60.9, gives a potential replacement route via length
polynomials; that machinery has not been integrated and proved along this local
route. The supplier is separately recorded A-P, adding one existing published
item to the index. No statement of that supplier or criterion was changed.

The nonabelian obstruction remark remains A-P: explicit selection assumptions
and a verified construction of the central obstruction and torsor are still
needed. The classical result is not being declared false. The current abelian
classification's AC hypothesis does not silently repair the unrestricted
nonabelian assertion. Source retrieval failure and the exact unresolved
mathematics are recorded in the receipt.

Malcev's theorem remains an honestly recorded theorem, with its arbitrary-field
scope now backed by Nica's Introduction and Lemma 3.2(iii–iv). Its statement
did not change. In checking the argument, the expression for an element as
a polynomial in ring generators must use integer coefficients; the source's
“over F” phrase at that step is unnecessarily weak. The preceding ring-generation
hypothesis supplies the required stronger assertion.

The Dowker-space item now reports exactly what the September 2022 source says,
without inferring a 2026 open status. Its statement changed. A reverse reference
scan of every Markdown carrier in `items/`, `library/` and `articles/` found
one direct consumer, the catalogue page, and no further indirect consumers.
The entire page was read and its matching undated assertion repaired.
[dowker-impact.json](dowker-impact.json) records the exact affected use and edit;
[dowker-impact-graph.json](dowker-impact-graph.json) records the closure.
Historical research plans and audit snapshots are evidence, not live mathematical
consumers, and were preserved.

Validation: rendercheck passed all three changed content carriers with no errors
or warnings. Precheck reported zero proof-bearing items to check, as both changed
items are explicitly unproved remarks; this is not a proof-validation pass.
All eight receipts match current item hashes. The canonical index has unique IDs.
No new mathematical dependency edges were added.

Final ledger: U-P 0; U-C 0; A-R 953; A-P 131; bounded clear 2306.
Total indexed items: 3390. The extra indexed item is the existing height supplier,
not a new item. A-R does not include newly authored prerequisites.
