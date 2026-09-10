---
id: cor-transitive-models-of-each-finite-zf-fragment
kind: corollary
title: "Transitive models of fixed finite axiom fragments"
status: draft
origin: pipeline
deps: [thm-montague-levy-finite-reflection, def-coded-first-order-zf-theory, def-axiom-of-choice]
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
    - title: "Geschke, Models of Set Theory — Theorem 4.3 application p11"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

For each fixed external finite $\Gamma\subseteq\mathrm{ZF}$, ZF proves that some transitive $V_\beta$ satisfies $\Gamma$, with $\beta$ above any prescribed ordinal bound. In ZFC the analogous scheme holds for fixed finite $\Gamma\subseteq\mathrm{ZFC}$. These are schemes indexed by external fragments, not a single internal assertion of models for all coded fragments.

## Facts & Assumptions

[F1] [[thm-montague-levy-finite-reflection]]: In ZF, for each fixed finite family $\Phi$ and every ordinal $\alpha$, some $\beta>\alpha$ makes $\Phi$ absolute between $V_\beta$ and $V$, for all tuples in $V_\beta$. More generally the same holds between $W_\beta$ and $W$ for a definable increasing continuous hierarchy of sets exhausting a definable nonempty class $W$. For an empty class, the relativization statement is interpreted as a scheme rather than satisfaction in an empty structure.

[F2] [[def-coded-first-order-zf-theory]]: Let $T_{\mathrm{ZF}}$ contain the codes of exactly the following six sentences, together with all instances of the two schemas below.

[F3] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function

## Proof

**Given:** A fixed external finite fragment of ZF, or of ZFC with ambient AC, and an ordinal bound.

1.1 List the finitely many sentences $\gamma_1,\ldots,\gamma_k$ of $\Gamma$ using the axiom serialization in F2. Each is an axiom of the ambient theory, so their finite conjunction is a theorem there. If the ambient theory is ZFC and one of these sentences is Choice, use F3 exactly for that sentence. No Choice premise is needed for the ZF branch. [F2, F3, given]

2.1 Apply F1 to that fixed finite list and the desired bound. It gives a $\beta$ such that each $\gamma_i^{V_\beta}\leftrightarrow\gamma_i$. Step 1.1 gives the right-hand sides, hence every relativized axiom. The cumulative stage is transitive, so it is the required transitive model. For an infinite carrier begin with a bound at least $\omega$. For $k=0$ any nonempty stage above the bound works. [F1, step 1.1] ∎

