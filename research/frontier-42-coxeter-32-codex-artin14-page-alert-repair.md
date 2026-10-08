# Artin 14 companion-page alert: focused review

Run: `frontier-42-coxeter-32`. Status: confirmed small page-summary hypothesis omission; PAGE WRITES HELD pending Root's actual native 5b cross-review carrier window. This page has no original reader finding for this alert, so the post-reader page-repair registry is not asserted to apply. Only this report is written.

Current path: `library/coxeter-groups/coxeter-artin-and-hecke-interfaces-examples.md`. Current before raw SHA-256: `ce10c4810ec59543481d4d1fdf07e93cd0ebf2994e19c8d4866a2dfc4b312bf7`. Original item Statement/Example impact: none; no item repair is required.

Read the actual Alpha 14 report's companion alert and type-A review, full current page, exact Example (initial n>=2 domain; clauses 1–3) and Verification 1.1–4.2 of `ex-cg-type-a-artin-projection-and-positive-lifts`. Independent confirmation: S={s_1,...,s_(n-1)}, so at n=2 there is no s_2. Example (2) and Verification 4.1 already require n>=3 for the s_1s_2 computation. Example (3)/Verification 4.2 separately fix n=3 for the longest element of S_3. The page currently summarizes the first computation without its required bound. The earlier map, generation and positive-section domains n>=2 are correct and must be preserved. No whole interface/proof audit is claimed.

Least destructive planned unique literal substitution:

```json
{
  "before": "the mechanism: the length-additive pair $s_1,s_2$ satisfies",
  "after": "the mechanism: for $n\\ge3$, the length-additive pair $s_1,s_2$ satisfies"
}
```

This places n>=3 specifically on the first computation, retaining the earlier general map paragraph and the S_3 specialization of the second computation. All formulas, example claims and page metadata remain unchanged.

Actual before bytes:

```markdown
---
page: coxeter-artin-and-hecke-interfaces-examples
title: "Coxeter, Artin, and Hecke Interfaces — Examples"
status: draft
requires: [coxeter-artin-and-hecke-interfaces]
items: [ex-cg-type-a-artin-projection-and-positive-lifts,
        cex-cg-artin-positive-lift-is-not-a-homomorphism,
        ex-cg-quadratic-hecke-normalizations-s-equals-q-t,
        cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful]
examples: []
---

This companion is a dependency leaf: its entries test the constructions of
[[coxeter-artin-and-hecke-interfaces]] and use only that page's prerequisite
closure.

For the standard type-$A_{n-1}$ system the examples run the whole
presentation-level dictionary. Composing the type-$A$ isomorphism $W\cong S_n$
with the projection of the Artin group produces the surjection
$\pi_n:G_n\to S_n$ with $\pi_n(\sigma_i)=(i\ i+1)$; the same assignment on the
monoid of positive words gives a negative-free section $w\mapsto b_w$ which is
injective and satisfies $\pi^{+}_n(b_w)=w$. Two explicit computations exhibit
the mechanism: the length-additive pair $s_1,s_2$ satisfies
$b_{s_1}b_{s_2}=b_{s_1s_2}$, while the longest element of $S_3$ shows the
independence of the lift from the chosen reduced expression through the braid
move. Because the two presentations coincide word for word, the positive Artin
monoid is identified with the published positive braid monoid by the universal
properties; no embedding into the group or geometric model is claimed.

The companion counterexample exhibits the converse boundary of the length
criterion: for a single generator the element $b_{s^{2}}=b_1$ is the empty-word
class, while $b_sb_s=[ss]$ is distinguished by the class length, so the positive
lift is not a monoid homomorphism and its composite with $\gamma$ is not a group
homomorphism. The precise dropped hypothesis is length additivity.

On the Hecke side the examples compare the quadratic normalizations
$S=qT$ with $Q=q^{2}$, the opposite-sign form and the Soergel-calculus form, and
record the rank-one Kazhdan–Lusztig conversion, so that coefficients are
compared only after the substitution; no canonical basis or positivity
statement is constructed. The final counterexample isolates the
reflection-faithfulness boundary: in the rank-two system $m(s,t)=\infty$ (the
$\tilde A_1$ diagram) the canonical representation is faithful, yet its one-dimensional
radical is the only full fixed space of codimension one of an element of $W$, so the two simple
reflections share a fixed hyperplane and the realization is not reflection
faithful; arguments assuming reflection faithfulness must supply a
realization satisfying that hypothesis separately.
```

Native evidence: `research/frontier-42-coxeter-32-dispatch/alpha-5a-batch-14.attempt-1.result.json` has ok:true, process/exit 0, task_complete, no timeout, result ended 2026-10-07T22:35:39.755Z. Root reports engine ended 22:35:39.761Z and writer drain. Fresh exact label/page process inspection found no matching writer beyond the inspection commands. Other native subjects remain protected; no writer takeover or transition is attempted.

No page edit or repaired-byte validator has been run. Next action after Root grants a window: recheck current before bytes and writer drain/post-5a snapshot, apply the single substitution, run focused page YAML/exclusive-diff/render checks, record actual before/after guards and drain. No item, contract, manifest, original native finding, certificate, control or code edit is authorized here.

## Final granted repair and checks

READY; page/report writes drained. Root granted this exact ordinary current-carrier page repair after all 5a checks passed and snap-post5a completed, while paused at 5b-edges with zero native writers. This final entry supersedes the earlier held status and preserves its chronology.

Before raw SHA-256: `ce10c4810ec59543481d4d1fdf07e93cd0ebf2994e19c8d4866a2dfc4b312bf7`. After raw SHA-256: `4bb55bb0a9f04bce3707928a44b9da37d21dff4debcc8c8ae2618d8d5fee4899`. The unique edit is precisely the literal substitution already recorded above; no other page bytes changed.

Immediately before writing, the page matched the recorded before guard and fresh exact-run process inspection found no run42 native dispatcher. The arithmetic needs the first three symbols: for n>=3, (1 2)(2 3)=[2,3,1,4,...,n] has exactly inversions (1,3) and (2,3), so its length 2 is additive from the two simple-generator lengths 1. At n=2 the missing s_2 excludes only this computation, while generation/projection/positive-section maps retain their n>=2 domain. The second computation still specializes to S_3. No original item Statement/Example changes.

Focused page checks passed: full before/after YAML identical; all four ordered item paths exist; old phrase unique before and new phrase unique after; reconstruction by the single approved substitution equals current page bytes exactly. Explicit renderer command `node tools/rendercheck.mjs library/coxeter-groups/coxeter-artin-and-hecke-interfaces-examples.md --json` passed, one file, zero errors and warnings. No proof-bearing item edit, so item proof-layout/phase checks are not applicable and no empty passing selection is claimed.

Only this page and this owned report were written. No owner registry applies because this alert has no original reader finding; no registry, shared ledger, item, contract, manifest, control or certificate changed. Native 5b lead retains ordinary current-carrier delta handling and engine authority.
