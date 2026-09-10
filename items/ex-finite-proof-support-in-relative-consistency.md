---
id: ex-finite-proof-support-in-relative-consistency
kind: example
title: "A hypothetical refutation selects one finite target fragment"
status: draft
origin: pipeline
deps: [thm-finite-fragment-relative-consistency-transfer, thm-formal-relative-consistency-from-verified-proof-reduction]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 pp10–11 finite-fragment transfer paragraph"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Example

A finite derivation uses only its finite axiom support. For a concrete refutation, let U contain the two sentences $A=\forall x(x=x)$ and $\neg A$. The derivation from these two axioms and a propositional explosion instance has support $\Delta=\{A,\neg A\}$, regardless of U's other axioms.

## Facts & Assumptions

[F1] [[thm-finite-fragment-relative-consistency-transfer]]: Let T extend enough ZF to formalize set-model soundness, and let U be an explicitly countable sentence theory. Suppose that for each external finite $\Delta\subseteq U$ there are a finite $\Gamma$ and T proofs of existence of a suitable TM/CTM of $\Gamma$ and of its conversion into a set model of $\Delta$. Then external Con(T) implies Con(U). This is a metatheorem with fixed finite proof inputs, not a uniform internal all-fragment assertion.

[F2] [[thm-formal-relative-consistency-from-verified-proof-reduction]]: If an arithmetic base B verifies a total code map r and $\forall p(\operatorname{Prf}_U(p,\ulcorner\bot\urcorner)\to\operatorname{Prf}_T(r(p),\ulcorner\bot\urcorner))$, then $B\vdash\operatorname{Con}(T)\to\operatorname{Con}(U)$. For reflection/finite-fragment applications the support extractor, fragment maps and reflection/transfer/soundness proof constructors must actually be supplied and verified to obtain such an r.

## Verification

**Given:** The displayed two-axiom refutation, and separately the fragment-transfer hypotheses when compiling it into T.

1.1 The five-line derivation is: line 0, A; line 1, not-A; line 2, the logical tautology $A\to(\neg A\to\bot)$; line 3, $\neg A\to\bot$ by MP at 0,2; line 4, bottom by MP at 1,3. Its two nonlogical axiom lines give exactly $\Delta=\{A,\neg A\}$. The set of support lines has size 2, while the proof has length 5. Adding or repeating unrelated U axioms does not alter these premise references. [given, algebra]

2.1 For this Delta the hypotheses of F1 would give a finite source fragment Gamma, a T proof of its suitable source-model existence, and a T proof converting that model into a model of Delta. But any Delta model satisfies both A and not-A, impossible, so appending the formal soundness proof of the displayed five-line derivation compiles a T-refutation. For a general proof with k axiom lines, taking their set gives at most k distinct axioms, and the same assembly depends only on that set. [F1, step 1.1]

3.1 To make this a B proof of a Con implication via F2, verify in B each arrow: extracting Delta from p, computing Gamma, generating its existence proof, generating the transfer proof, and appending the soundness/refutation block. A fixed finite assembly in step 2.1 does not by itself verify those maps uniformly. In the concrete proof, the extractor merely reads lines 0 and 1; its output contains neither the tautology nor the MP lines. [F2, step 1.1, step 2.1] ∎

