---
id: "thm-constructible-inner-model-semantic-and-formal-schema"
kind: "theorem"
title: "Semantic and formal inner-model theorem for L"
deps: ["thm-constructible-universe-basic-axioms", "thm-separation-in-the-constructible-universe", "thm-internal-power-set-in-the-constructible-universe", "thm-replacement-in-the-constructible-universe", "thm-constructibility-is-absolute-and-l-is-minimal", "thm-constructible-universe-satisfies-choice", "thm-relativization-and-set-satisfaction", "thm-set-language-first-order-soundness"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke §5.3–5.5 pp15–18; Marks Lemmas 20.5,20.7 and Theorem 20.9 pp87–88
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For each fixed axiom $\sigma$ of $\mathrm{ZFC}+V=L$, ZF proves $\sigma^L$. If M is a transitive set model of ZF, its internally defined constructible class $L^M$, viewed externally as a set with actual membership, satisfies $\mathrm{ZFC}+V=L$ and has exactly the ordinals of M. No existence of such M, or arithmetized consistency-transfer theorem, is asserted here.

## Facts & Assumptions

**Given:** ZF. Collected the actual fixed-axiom derivations and compared guarded quantifier satisfaction with the external set L^M. Preserved the conditional set-model scope and excluded an unsupported Con-transfer claim.

[F1] [[thm-constructible-universe-basic-axioms]]: Extensionality, Foundation, Empty Set, Pairing, Union, and Infinity hold in L.

[F2] [[thm-separation-in-the-constructible-universe]]: Every fixed Separation instance holds in L.

[F3] [[thm-internal-power-set-in-the-constructible-universe]]: Internal Power Set holds in L.

[F4] [[thm-replacement-in-the-constructible-universe]]: Every fixed Replacement instance holds in L.

[F5] [[thm-constructibility-is-absolute-and-l-is-minimal]]: Levels in a transitive ZF model agree below its height, and L satisfies V=L.

[F6] [[thm-constructible-universe-satisfies-choice]]: AC has a ZF proof after relativization to L.

[F7] [[thm-relativization-and-set-satisfaction]]: Induced set satisfaction agrees with quantifier relativization for each fixed formula.

[F8] [[thm-set-language-first-order-soundness]]: Every ZF derivation is valid in each set model of ZF.

## Proof

1.1 Fix one axiom sigma. F1 supplies the six basic ZF axioms, while F2, F3, and F4 supply Separation, Power Set, and Replacement; each schema instance uses only its fixed formula and finitely many ZF instances. F6 supplies AC and F5 supplies V=L. Thus for this sigma there is a ZF derivation of $\sigma^L$. This assertion is indexed externally by standard axioms and is not an internal truth assertion about all formulas. [F1, F2, F3, F4, F5, F6]

2.1 Suppose now that M is a transitive set model of ZF. External Separation on M, using satisfaction of the fixed predicate defining constructibility, forms $C=L^M$ as a set. By F5 it is the union of the actual $L_\alpha$ for ordinals alpha in M. Hence it is nonempty and transitive, all its ordinals belong to M, and every ordinal of M belongs to C (its successor stage is still indexed in M). [F5, step 1.1, construct]

3.1 Evaluate each fixed derivation from step 1.1 in M. Its axioms hold there, and first-order inference preserves satisfaction; thus M satisfies the internally relativized sigma. Constructor comparison of that fixed formula, as in F7, identifies this with satisfaction in C: atoms are actual membership and each guarded quantifier ranges over exactly C. Therefore C satisfies each standard axiom of ZFC+V=L. Step 2.1 gives the same-ordinals conclusion. The result remains conditional on the supplied M, with no assertion that a model can be obtained from a consistency statement. [F7, F8, step 1.1, step 2.1] ∎
