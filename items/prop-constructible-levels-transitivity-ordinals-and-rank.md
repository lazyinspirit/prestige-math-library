---
id: "prop-constructible-levels-transitivity-ordinals-and-rank"
kind: "proposition"
title: "Transitivity, growth, ordinals and rank in L"
deps: ["def-constructible-hierarchy-and-constructible-rank", "thm-ordinals-and-omega-are-absolute-in-transitive-models", "prop-cumulative-hierarchy-transitivity-and-growth"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Lemmas 5.1,5.3,5.5,5.6(a) pp14–15; Marks Lemma 20.3 pp86–87
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF every $L_\alpha$ is transitive, and $\alpha\le\beta$ implies $L_\alpha\subseteq L_\beta$. Moreover

$$L_\alpha\subseteq V_\alpha,\qquad L_\alpha\cap\operatorname{Ord}=\alpha,\qquad L_\alpha,\alpha\in L_{\alpha+1}.$$

For $x\in L$, $x\in L_\alpha$ iff $\rho_L(x)<\alpha$. Thus $L$ is transitive and contains all ordinals.

## Facts & Assumptions

**Given:** ZF. Checked transitivity via parameter-defined members, successor power-set bounds, bounded ordinalhood on arbitrary transitive levels, and both least-rank implications.

[F1] [[def-constructible-hierarchy-and-constructible-rank]]: The hierarchy uses Def at successors, union at limits, and rank is the first successor membership stage minus one.

[F2] [[thm-ordinals-and-omega-are-absolute-in-transitive-models]]: Ordinalhood has the bounded absolute characterization proved there, valid over any nonempty transitive membership domain.

[F3] [[prop-cumulative-hierarchy-transitivity-and-growth]]: The cumulative hierarchy grows by power sets and unions and has the stated ordinal intersections.

## Proof

1.1 If $A$ is transitive, every $a\in A$ is the subset of $A$ defined by $x\in a$, so $A\subseteq\operatorname{Def}(A)$. Each $b\in\operatorname{Def}(A)$ is a subset of $A$; hence $z\in b$ implies $z\in A\subseteq\operatorname{Def}(A)$. This proves transitivity of Def(A), including $A=\varnothing$ by its special clause. Set transfinite induction along each ordinal interval now proves transitivity of the levels and nesting: successors use this observation; limits are increasing unions. [F1]

2.1 Induct simultaneously against the cumulative hierarchy. At zero the inclusion is equality. If $L_\beta\subseteq V_\beta$, every member of $L_{\beta+1}$ is a subset of $L_\beta$, hence is in $V_{\beta+1}$. At limits take unions. Thus $L_\alpha\subseteq V_\alpha$; in particular any ordinal in $L_\alpha$ is less than $\alpha$. [F1, F3, step 1.1]

3.1 Induction proves that every ordinal below $\alpha$ belongs to $L_\alpha$. Zero is immediate. Given $L_\beta\cap\operatorname{Ord}=\beta$, for $\beta>0$ the bounded ordinalhood formula over the transitive nonempty $L_\beta$ defines precisely the subset $\beta$, so $\beta\in L_{\beta+1}$. For $\beta=0$, $0\in L_1=\{0\}$. Old ordinals remain by nesting, and limit stages take unions. This proves the ordinal intersection identity and $\alpha\in L_{\alpha+1}$. [F1, F2, step 1.1, step 2.1]

4.1 The formula $x=x$ defines the whole set $L_\alpha$ over itself when nonempty, and Def(empty) contains empty. Hence $L_\alpha\in L_{\alpha+1}$. For $x\in L$, its first membership stage is $\rho_L(x)+1$. If $x\in L_\alpha$, leastness gives $\rho_L(x)+1\le\alpha$ and so $\rho_L(x)<\alpha$. Conversely that inequality and nesting place $x$ in $L_\alpha$. Transitivity of the class union follows from transitivity of each level; step 3.1 puts every ordinal in that union. [F1, step 1.1, step 3.1] ∎
