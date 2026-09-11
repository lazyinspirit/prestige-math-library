# Frontier-22 published random-element and independence audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit follows the elementary structural interfaces used by the
active probability arguments: random elements, laws, pushforward probability,
composition of measurable maps, independent random elements and grouping
independent sigma-algebras. All six complete target files and the exact used
clauses were read. This is not a full audit of their transitive dependency
closures or of all probability consumers.

Before classification, the whole canonical ledger and classification index
were searched by each exact item ID, title wording, aliases, the
law/pushforward/composition/independence mechanisms and the declared supplier
IDs. `def-random-element-and-real-random-variable` had one U-P row from an
older active-interface report; the other five targets were unclassified. No
duplicate finding or second classification row was added. No published item
or workflow state was edited.

## Bounded no-repair-needed dispositions

| Item | SHA-256 | Exact disposition |
|---|---|---|
| `def-random-element-and-real-random-variable` | `f7603127a4aad84b5681c99c321e22658967eb76a07ffd3252b148730d5336a2` | Measurability into an arbitrary measurable space and the real/Borel specialization are stated with the correct domains. U-P to bounded clear; the prior active-interface mention is retained. |
| `def-law-or-distribution-of-a-random-element` | `81c034663490da1430bd8bd62441e28ebdbb7e570bc82424d54bec4a24af864e` | Measurability of `X` makes every displayed preimage an event, so the pushforward set function is well defined. The probability-measure assertion is correctly deferred to the next lemma. New bounded clear. |
| `lem-law-of-a-random-element-is-a-probability-measure` | `7eea55bfe5f9f0d40aad0d136b4461bc456c2d268a916223905d221f1bc68e88` | Preimages preserve the empty and whole sets, disjointness and countable unions; the source probability axioms therefore prove countable additivity and total mass one. New bounded clear. |
| `thm-composition-with-borel-functions-preserves-measurability` | `b3ff516db26629257caf2b6e61c50e46edd9e638d081124ca6f51244ae711437` | For every measurable target set, `(g\circ f)^{-1}=f^{-1}\circ g^{-1}` gives the exact two-stage preimage proof. The general measurable-map statement contains its Borel specialization. New bounded clear. |
| `def-independent-random-elements` | `a2f59b748bd970c48910f78608151f4e858a86d91a726fe247f51efecf60126b` | The displayed full preimage family is itself a sigma-algebra because preimages preserve complements and countable unions; hence independence of these sigma-algebras is well typed. The Borel notation agrees with the supplied generated-by-a-function definition. New bounded clear. |
| `thm-grouping-independent-sigma-algebras` | `9a075050fb6f01796a5f043ba007eb8ad70025d8345cfcb9b9d41f1af850029f` | Each finite-intersection class is a pi-system containing the whole space and generates the grouped sigma-algebra. Pairwise disjoint index groups make the original indices distinct, so the independent-pi-system theorem applies. Only finitely many supplied events are used; no choice hypothesis is needed. New bounded clear. |

## Frontier impact and limits

These exact structural clauses remain available to the active law,
conditional-expectation and independence arguments. No new mathematical or
contract defect, active-frontier blocker, Phase-2 supplier or theorem pair was
found in this batch.

No external source retrieval was needed because each conclusion follows from
the displayed definitions and elementary preimage algebra. The audit does not
certify every consumer or the full transitive closures of these six items.
