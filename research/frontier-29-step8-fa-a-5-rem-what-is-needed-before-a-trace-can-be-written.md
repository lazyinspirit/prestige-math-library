# Final-adjudicator evidence: `rem-what-is-needed-before-a-trace-can-be-written`

Disposition: `repaired`

Source status: `verified`.

## Authoritative source verification

- https://imag.umontpellier.fr/~bruguieres/docs/Hopf-monads.pdf — Alain Bruguières and Alexis Virelizier, *Hopf monads*, §8.1. Lemma 8.1 starts with an arbitrary braided autonomous category, defines the displayed Drinfeld natural transformation, proves that it is an isomorphism, and displays its inverse. Remark 8.2 says that this isomorphism is monoidal exactly when the braiding is symmetric, and Proposition 8.3 relates twists to sovereign structures through the Drinfeld isomorphism. This is direct primary-source support for both the bare-domain invertibility and the monoidality obstruction.
- https://arxiv.org/pdf/2103.13702 — Taiki Shibata and Kenichi Shimizu, *Modified traces and the Nakayama functor*, §6.4. The authors begin with an arbitrary braided rigid monoidal category, call the same formula its Drinfeld isomorphism, and use $u^{-1}$ to identify pivotal structures with natural automorphisms satisfying the twist relation. This independently confirms that no finite, abelian, or EGNO tensor-category hypothesis is needed for invertibility.

## Independent review and repair

I inspected the current remark; both direct dependencies; the adjacent pivotal, twist, and Drinfeld-type theorem interfaces; the duality A/B pages; the batch-10 manifest and coverage notes; the proof-contract and risk records; the Step-6 reader evidence; the Step-7 group context; both frozen judge rejections; and both Alpha adjudications and repairs.

The first judge correctly rejected the original claim that pivotality was necessary merely to type the trace of an endomorphism: in a braided rigid category the Drinfeld comparison already turns $x:X\to X$ into $u_Xx:X\to X^{\vee\vee}$. Alpha repaired that point. The second judge correctly rejected Alpha's remaining assertion that $u_X$ might fail to be invertible under bare braided rigidity. Alpha then repaired the remark itself to say that $u$ is a natural isomorphism but need not be monoidal.

The current remark is now mathematically correct, but its run-local direct dependency `thm-a-braided-rigid-category-has-a-drinfeld-morphism` still retained the contradicted stronger-domain clause: its Statement and proof said invertibility was established only for an EGNO braided tensor category. That interface did not license the remark's repaired bare-domain claim. I therefore independently repaired that direct dependency to state the Drinfeld map as a natural isomorphism for every braided rigid monoidal category, record the double-braiding tensor relation, and explain that this relation is the obstruction to monoidality. Its source fact and proof conclusion now use the bare-domain inverse supplied by Bruguières--Virelizier and independently corroborated by Shibata--Shimizu. I added both sources to the theorem.

I also updated the dependency's batch-10 and merged proof-contract entries, including its step 2.1 derivation and risk note, and refreshed the exact Statement quotation used by the downstream pivotal/twist theorem. The batch and merged entries for both affected proof-bearing items are identical after the repair. The queued remark is non-proof-bearing and therefore correctly has no item-level proof contract or `risk_review`.

The direct-dependency edit is licensed by the appended version-1 `owner-prerequisite-repair` row in `research/frontier-29-step8-owner-prerequisite-repairs.jsonl`. It records group `a`, this queued remark as `found_via`, baseline `itemHashGuard` SHA-256 `46525cee09be7e45e44260a6d46d6a360cbc67b815b886f82f0cc1b69dea8171`, final SHA-256 `1a5c08348e1589ab7035d1d621f306d8372d7da21ff716076c0e31b18bbb69d6`, and exactly the two authoritative URLs above. No indirect dependency or other group's item was edited.

With that dependency repaired, every rung in the remark has the right strength: rigidity supplies evaluation/coevaluation and types traces of maps into or out of a double dual; an arbitrary chosen comparison types $\operatorname{Tr}_L(j_Xx)$; pivotality makes those comparisons a monoidal natural isomorphism; sphericality equates left and right traces; braiding supplies the natural Drinfeld isomorphism; and a twist corrects its double-braiding defect to obtain pivotal monoidality.

## Focused checks

- Focused precheck passed both proof-bearing affected theorems; the remark has no proof body.
- Focused render checking passed the queued remark, repaired dependency, and downstream pivotal/twist theorem.
- Item-specific proof-contract checks against both the batch-10 and merged contract files passed for the repaired dependency and its downstream theorem with no errors or warnings.
- `node tools/depcheck.mjs --quiet` exited 0 and reported no cycles, unresolved references, or draft items on published pages.
- `git diff --check` on the affected item, contracts, and licence file produced no output.
- The exact final queued-item hash computation returned context SHA-256 `dd4a47a91742b0acacd71e0877a5537dd170866e8532c3573028e55f09e06e80` and item SHA-256 `d5fbc421dc5cc3afde977bb527cdea1041abdfd22321514fc63042a942bc7f1f`.
- The repaired dependency's final `itemHashGuard` is `1a5c08348e1589ab7035d1d621f306d8372d7da21ff716076c0e31b18bbb69d6`.
