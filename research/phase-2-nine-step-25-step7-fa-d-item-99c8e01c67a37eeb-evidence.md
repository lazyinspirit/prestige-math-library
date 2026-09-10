# Final adjudicator evidence

Run: phase-2-nine-step-25. Group: d. Queue position: 1 of 1.
Item: `prop-explicit-de-rham-mayer-vietoris-connecting-class`.
Disposition: `accepted-after-review`. Source status: `familiar`.

## Material independently inspected

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the exact FA queue; the current item's entire statement, facts and proof; and the four direct suppliers in full:

- `thm-mayer-vietoris-sequence-in-de-rham-cohomology` (F1), especially proof 1.1;
- `lem-the-de-rham-mayer-vietoris-difference-map-is-surjective` (F2), especially grouped supports and the smooth lift in 2.1–3.1;
- `thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes` (F3), including its reindexing in 2.1;
- `prop-elementwise-formula-for-the-connecting-map-in-module-categories` (F4), including lift and representative independence in 2.1–3.1.

Also read the full local `def-two-open-set-de-rham-mayer-vietoris-cochain-maps`, published `def-cochain-complex-in-an-abelian-category`, `thm-long-exact-sequence-in-cohomology`, `thm-long-exact-sequence-in-homology`, and `def-connecting-morphism-in-homology` to check normalization. Read both library pages `library/differential-geometry/the-de-rham-complex-homotopy-and-mayer-vietoris{,-examples}.md` and the complete `ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle` as B-page context.

Inspected this item's batch-9 manifest entry, complete proof contract (citations, derivations, eight boundary cases and risk review), relevant coverage entry and source convention notes. Coverage anchors the connector at Lee, Corollary 17.42, p.464; the A/B prose and coverage consistently specify second restriction minus first. Prior source-reading reports are context, not source reading performed by this FA.

Read both exact rejection rows in `research/phase-2-nine-step-25-judge.jsonl`, the original Sol adjudication in `research/phase-2-nine-step-25-judge-adjudications.jsonl`, its repair account in `research/phase-2-nine-step-25-alpha-step7-d.md`, and the item closure JSON. Initial rejection context: `6dbe64d85d4c40ad704fd7bd63a335384ea4295600d7201d361f2e621907218f`. Sole rejudge rejection context: `b8fcefaa56b65e1502c5486f3b23af29fa384766dab33dc0b8c3efcd8ce4ca37`.

## Independent mathematical basis

The rejudge is correct that exactness alone cannot distinguish delta from minus delta. It does not follow that the current repaired proposition lacks a normalization. Its statement explicitly defines delta to be the connector of F3 under C_n=C^{-n} with the elementwise convention F4. This is sufficient independently of F1's abbreviated statement interface. It is also consistent with F1's actual proof 1.1, which obtains its connector from precisely this short exact cochain sequence without an additional differential sign. The published cohomology theorem's proof 1.1–2.1 applies the homology theorem after reindexing and transports its connector. The published cochain definition explicitly sets d-sharp_n=d^{-n}. Thus the supplemental description of F1's proof in the current fact row is accurate; it does not infer a sign from exactness. The contract's narrower quote from F1's Statement does not invalidate the definition now present in the consumer's own Statement.

Here is an independent replay. Work with the page's open cover M=U union V and countable-choice partition construction. The grouped functions satisfy rho_U+rho_V=1 and their closed supports lie inside their respective opens. On U the overlap expression alpha=-rho_V omega extends smoothly by zero: the overlap and U minus supp(rho_V) are an open cover on which the expressions agree. The analogous construction gives beta=rho_U omega on V. Their difference is omega. Since omega is closed, d beta-d alpha=0 on the overlap, so these derivatives glue uniquely to a global eta; d eta=0 follows locally from d squared zero. On the overlap the product rule gives eta=d rho_U wedge omega=-d rho_V wedge omega. This verifies the positive sign relative to rho_U.

In chain degree -k the pair (alpha,beta) lifts omega under F3, and its differential is r eta in degree -k-1. F4 therefore gives exactly delta[omega]=[eta] in degree k+1. No extra sign occurs. For completeness, any two lifts differ by r theta, so their resulting eta forms differ by d theta. If omega changes by d xi, choose a lift (u,v) of xi and replace (alpha,beta) by (alpha+d u,beta+d v); the resulting eta is unchanged. Any further change of lift changes it only by an exact form. Another subordinate partition supplies another lift, proving partition independence. This is precisely the independence argument in F4, and uses only individual finite choices once the partition exists.

The formula covers k=0 (closed overlap functions), zero forms, empty overlap, empty opens/manifold and out-of-range degrees under the page's zero-space conventions. In degree zero there are no nonzero exact representative changes from degree -1. The circle example uses the same positive d rho_U on its component where omega=1. The assumed countable choice is retained and used for F2's partition construction; the connector calculation adds no stronger choice requirement.

The mathematics here—smooth support gluing, d squared zero, the graded product rule and the elementary lift formula for a connecting homomorphism—is familiar enough to verify directly with the full local suppliers. No external sources were consulted, and no claim is made to have read the books or URLs recorded by earlier authors. No unresolved mathematical uncertainty or defective published interface was found in this focused review.

## Focused validation and scope

- `node tools/tsx-run.mjs tools/precheck.mts items/prop-explicit-de-rham-mayer-vietoris-connecting-class.md`: exit 0; 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-9.proof-contracts.json --strict --items prop-explicit-de-rham-mayer-vietoris-connecting-class`: exit 0; 1/1 checked, 0 errors, 0 warnings.
- Current repaired guard hash reported by Sol: `19d416da94b7fa7bbd6c94bc072fd2bc0cda4b76f901cbfc042b5613820a42ce`; the terminal recorder will bind the actual current item and dependency context.
- No item, supplier, contract, page or manifest edits are needed. No new lemma or prerequisite repair licence is needed. The consumer-batch input `research/phase-2-nine-step-25-batch-9.cross-batch-dependencies.json` is empty; the added F3 supplier is in this same batch and F4 is published. No further dependency repair occurred in this FA review, so no ledger mutation or refresh is warranted under `briefs/tasks/frontier-dependency-ledger.md`.

Next action: record this decision through the exact queue-bound terminal recorder, then return control to the owning Alpha. No third judgment or pass stamp is authorized or created. No unresolved blocker remains for this item.
