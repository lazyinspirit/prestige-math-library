---
id: thm-model-existence-versus-syntactic-consistency
kind: theorem
title: "Models and consistency for countable theories"
status: published
origin: pipeline
deps: [thm-countable-first-order-completeness, thm-set-language-first-order-soundness, def-arithmetic-provability-and-consistency]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §3 pp8–9 and §5.1 p13, model/consistency conventions"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

In external ZF, an explicitly countable sentence theory is consistent iff it has a nonempty set model, and iff it has a model with carrier injecting into $\omega$. For an effective presentation, external consistency agrees with the truth of its certified Con formula in standard arithmetic. No transitivity or external well-foundedness of a model follows.

## Facts & Assumptions

[F1] [[thm-countable-first-order-completeness]]: In classical ZF, every consistent sentence theory in an explicitly countable set language has a nonempty model whose carrier injects into $\omega$. For every sentence $\sigma$ in that language,

$$T\models\sigma\iff T\vdash\sigma.$$

[F2] [[thm-set-language-first-order-soundness]]: In ZF, for any set signature and sentence theory $T$, if $T\vdash\phi$, every nonempty set structure satisfying $T$ satisfies $\phi$ under every assignment. Consequently a theory with a model is consistent.

[F3] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

## Proof

**Given:** External ZF and a set sentence theory equipped with an explicit countable listing of its sentences.

1.1 List the sentences explicitly by natural indices. The symbols that actually occur have occurrence codes (sentence index, token position); assigning each symbol its least occurrence code injects the used sublanguage into omega without choice. The empty theory has the empty sublanguage. If the original theory is consistent, it is consistent in the smaller signature, since any smaller-signature proof is also a proof in the original signature. F1 gives a nonempty model of that reduct with carrier injecting into omega. [F1, given]

2.1 Fix one element a of that nonempty carrier. Interpret every unused constant by a, every unused positive-arity function by the constant-a function, and every unused relation by the empty relation. Replacement on the set signature collects these assignments. A term/formula induction shows that old-language evaluations and satisfaction are unchanged, as none of those new interpretations occurs there. Thus the expansion models the original theory and keeps the same countability injection. One element a suffices for all defaults, so no countable choice is used. [step 1.1]

3.1 Any at most countable model is a set model, and F2 sends every set model to consistency. These implications together with steps 1.1–2.1 prove both equivalences. For an effective presentation, each finite formal proof has finitely many axiom witnesses and hence a numerical certificate, and conversely the checker decodes every accepted certificate to a proof. Numeralwise correctness of F3 therefore makes absence of any actual refutation exactly truth in standard omega of its Con sentence. The construction places no condition making the relation actual membership. [F2, F3, step 1.1, step 2.1] ∎
