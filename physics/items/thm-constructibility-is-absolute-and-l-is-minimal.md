---
id: "thm-constructibility-is-absolute-and-l-is-minimal"
kind: "theorem"
title: "Absoluteness, idempotence and minimality of L"
deps: ["lem-def-operation-is-absolute", "thm-constructible-universe-basic-axioms", "thm-separation-in-the-constructible-universe", "thm-internal-power-set-in-the-constructible-universe", "thm-replacement-in-the-constructible-universe"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.8 and following paragraph p16; Marks Lemma 20.7 and
        Corollary 20.8 pp87–88
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, if $N$ is a transitive model of ZF and $\alpha\in\operatorname{Ord}\cap N$, then $(L_\alpha)^N=L_\alpha$. If $N$ is a definable transitive class inner model containing every ordinal, then $L^N=L\subseteq N$. In particular $L^L=L$, and $L$ satisfies $V=L$.

## Facts & Assumptions

**Given:** ZF. External induction compares internal histories using Def absoluteness, not Power Set absoluteness. Minimality and idempotence are derived only after the previously authored ZF axioms license N=L.

[F1] [[lem-def-operation-is-absolute]]: For a set A in a transitive ZF model, the internal Def set equals the external Def set.

[F2] [[thm-constructible-universe-basic-axioms]]: The six elementary ZF axioms already hold in L.

[F3] [[thm-separation-in-the-constructible-universe]]: Every fixed instance of Separation holds in L.

[F4] [[thm-internal-power-set-in-the-constructible-universe]]: Internal Power Set holds in L.

[F5] [[thm-replacement-in-the-constructible-universe]]: Every Replacement instance holds in L.

## Proof

1.1 Internal ZF gives N its hierarchy history on each ordinal interval in N. External induction identifies its values: at zero both are empty; if the value at $\gamma$ is the actual $L_\gamma\in N$, F1 identifies its internal Def with $L_{\gamma+1}$. At a limit $\lambda\in N$, transitivity makes the internal history have every actual index $\gamma<\lambda$, and its internal union has exactly the union of their actual values. Thus $(L_\alpha)^N=L_\alpha\in N$ for every ordinal $\alpha$ of N. [F1, given]

2.1 If N contains all ordinals, every actual L level is therefore in N. Transitivity gives $L\subseteq N$, and the internal existential definition of constructibility ranges over precisely all actual ordinals, so its union is exactly L. For a set model the same argument stops at its ordinal height; no higher level is asserted to belong to N. [step 1.1]

3.1 The six axioms in F2, Separation in F3, internal Power Set in F4, and Replacement in F5 establish all of ZF in L. Earlier level properties give transitivity and all ordinals. Thus L itself meets the hypotheses of step 2.1, which now yields $L^L=L$. Every element of L is internally constructible, exactly the relativization of $V=L$. This application occurs only after ZF in L has been established. [F2, F3, F4, F5, step 2.1] ∎
