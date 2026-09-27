# Bull-free published prerequisite audit — 2026-09-26

Scope: bounded, read-only defect audit of the four published A-P proofs below and
their load-bearing interfaces for the `frontier-35-ten-categories` Step-3 hold.
This is not a proof-completion verdict, an independent judge, or a whole-library
certification. No item, page, plan, ledger classification, or stamp was changed.

## Mathematical finding

The current local dependency chain is

`rem-strong-perfect-graph-theorem-for-the-bull-route` (published remark,
`proved_here: false`, proof `not-supplied`) →
`thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`
([L3], used to turn each failure of perfection into an odd hole or antihole) →
`thm-basic-bull-free-graphs-are-two-narrow` ([L1]) →
`thm-bull-free-graphs-are-two-narrow` ([L2]) →
`cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`
([L1], nonempty branch 1.2). The last four items are published and remain A-P in
the canonical ledger's current classification rows near line 32843. The
corollary's empty-graph branch and exponent arithmetic are sound locally.
The formerly recorded weak-perfect and perfect-substitution inputs now have
locally proved replacements:
`thm-lovasz-perfect-graph-criterion-and-complement-invariance` and
`thm-substituting-perfect-graphs-preserves-perfection` (the latter is cited by
`thm-alpha-narrowness-is-preserved-under-substitution`). They do not supply the
missing odd-hole/odd-antihole criterion.

Primary-source check: Chudnovsky–Safra, *The Erdős–Hajnal conjecture for
bull-free graphs*, [PDF](https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf),
states SPGT separately as 1.6, uses it explicitly inside the proof of 4.3,
then proves basic narrowness in 4.4, general narrowness in 1.3, and the
quarter-power bound in 1.2. I downloaded and read those relevant passages
(PDF pp. 2–5, 9–13); 4.3 itself does not prove 1.6. The primary SPGT paper,
Chudnovsky–Robertson–Seymour–Thomas, *Annals of Mathematics* 164 (2006),
[PDF](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n1-p02.pdf),
states Berge ⇔ perfect as 1.2 and a decomposition theorem as 1.3, whose proof
occupies §§2–24. I checked its Introduction, not its full 179-page proof.
The exact restricted replacement would be that every finite **bull-free Berge**
graph is perfect, for every induced subgraph. The canonical
`research/plan-combinatorics-and-categories.md` §III.4.4 maps this to
Chvátal–Sbihi, *Bull-free Berge graphs are perfect* (1987),
doi:10.1007/BF01788536, but records failed full-text access and open structural
proof obligations. Its proposed BF-FOUND/BF-BERGE pairs are prose plans, not
proved suppliers; the full-SPGT alternative has seven further pairs and
nontrivial imported lemmas. I did not retrieve or verify the Chvátal–Sbihi
proof. A citation to its theorem or another recorded remark cannot complete
the local proof chain.

## Actual selected-run dependency check

I checked the selected A/B pages in
`research/frontier-35-ten-categories-scope-ledger.json`, then used the
authoritative current inventories in the 16
`research/frontier-35-ten-categories-batch-*.pages.json` manifests. They
contain 682 unique item IDs, including author-added suppliers. I parsed
current item frontmatter `deps` and traversed the reverse dependency graph
from each of the four A-P IDs and the recorded SPGT remark. **No selected item
reaches any of those five IDs.** One unrelated malformed YAML remark
(`rem-jordan-rectifiable-terminology`) was skipped; it has no other item
reference and cannot affect these paths.

Eight selected items do reach the separate published qualitative
`cor-the-bull-graph-has-the-erdos-hajnal-property`. The representative Bird
path is `thm-the-bird-graph-has-the-erdos-hajnal-property` →
`lem-the-e-graph-and-the-bird-are-leaf-reducible` →
`cor-the-bull-graph-has-the-erdos-hajnal-property`; the selected E theorem
uses that same leaf-reducibility lemma. The other selected hits are the two
generalized-nice corollaries, Bird property-star corollary, both companion
examples, and the lemma itself. The qualitative bull corollary's current proof
uses the viral leaf/co-leaf theorem and four-vertex Erdős–Hajnal result, with
no dependency on two-narrowness or the quarter-power corollary. Thus these
four A-P items are not actual mathematical prerequisites for the selected
Step-3 authoring path, despite being global `published-unaudited` gate subjects.

## Disposition

Keep the four published claims and their ledger rows A-P/pending Phase 3.
Defer proof completion until a complete locally proved restricted bull-free
Berge perfection theorem, a full SPGT development, or another complete route
is authored and checked; then recheck the neighborhood, basic, general, and
quarter-power proofs in order. This is a substantial unmet prerequisite under
`CLAUDE.md` Step 3 and should not be treated as a local Step-3 repair.

`SCHEMA.md` §Verification defines `verification.audited` as a **scalar owner
audit record**; published proved-here items require it or a delegated
`verification.verified`. `tools/depcheck.mjs` lines 269–280 checks presence,
not a favorable mathematical verdict. The ledger class A-P itself means
audited/pending Phase 3. Accordingly, after the owner actually reviews and
adopts this bounded finding, a current scalar owner `audited` record may
explicitly say “defect-focused audit; A-P/pending Phase 3; no proof-completion
verdict; see this note and canonical ledger.” That honestly clears the
`published-unaudited` structural diagnostic for these items while leaving
their mathematical debt visible. This subagent audit alone is not an owner
audit, and no verification field was written here.
