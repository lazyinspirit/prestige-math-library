---
id: cor-hereditary-size-exhausts-the-universe-under-choice
kind: corollary
title: "Hereditary size exhausts V under Choice"
status: published
origin: pipeline
deps: ["thm-h-kappa-is-a-transitive-set", "thm-well-ordering-theorem", "thm-hartogs"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 Theorem 41(2), p.101."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

Assume ZFC. For every set $x$ there is an infinite initial ordinal $\kappa$ with $x\in H_\kappa$. Hence the hereditary-size stages exhaust the universe in the class sense under Choice.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, for every infinite initial ordinal $\kappa$, $H_\kappa$ is a transitive set and $H_\kappa\subseteq V_\kappa$. For infinite initial ordinals $\kappa\le\mu$, one has $H_\kappa\subseteq H_\mu$. ([[thm-h-kappa-is-a-transitive-set]])

[F2] Assume the Axiom of Choice (def-axiom-of-choice). Then **every set $X$ can be well ordered**: there is a relation on $X$ making it a well-ordered set (def-well-order). The Axiom of Choice is used only inside thm-zorn, and nowhere else in the argument below. ([[thm-well-ordering-theorem]])

[F3] For every set $A$ there is an ordinal (def-ordinal) that does not inject into $A$, that is, admits no injective function into $A$. The least such ordinal is the **Hartogs number** $\aleph(A)$, and it is exactly $$\aleph(A) = \{\mathrm{ot}(S, R) : S \subseteq A \text{ and } R \text{ well-orders } S\},$$ the set of order types (thm-mostowski-collapse) of the well-ordered subsets of $A$. **The proof is choice free.** That is the whole point of the theorem: in ZF alone, with no assumption that $A$ can be well ordered, one still gets an ordinal too long to be laid inside $A$. ([[thm-hartogs]])

## Proof

1.1 Let $T=\operatorname{TC}(\{x\})$. By the well-ordering theorem and AC, $T$ is well-orderable and has an ordinal order type $\alpha$. Set $\delta=\alpha\cup\omega$, an infinite ordinal into which $T$ injects. [F1, F2]

2.1 Let $\kappa$ be the Hartogs number of $\delta$. It is initial: a bijection with any smaller ordinal would combine with an injection of that smaller ordinal into $\delta$ to contradict its defining noninjection. Also $\delta<\kappa$, since every ordinal at most $\delta$ injects into $\delta$. Thus $\kappa$ is infinite and the injection $T\hookrightarrow\delta<\kappa$ witnesses $x\in H_\kappa$. [F1, F3, step 1.1] ∎
