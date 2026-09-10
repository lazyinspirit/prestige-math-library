---
id: lem-block-relative-trace-characterizes-diagonal-projectivity
kind: lemma
title: Block relative trace characterizes diagonal projectivity
deps: [lem-group-algebra-bimodule-is-induced-from-the-diagonal, def-defect-group-and-numerical-defect-of-a-block, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-higman-criterion-for-relative-projectivity]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

For a central idempotent $b\in kG$ and $H\le G$, the double module $B=kGb$ is relatively $\Delta H$-projective if and only if $b=\operatorname{Tr}_H^G(a)=\sum_{g\in G/H}gag^{-1}$ for some $a\in B^H$. When $b$ is a block, defect groups are exactly the inclusion-minimal $p$-subgroups admitting this equality.

## Facts & Assumptions

**Given:** A finite group, central idempotent $b$, and subgroup $H$.

[F1] The bimodule $kG$, hence its summand $B$, is relatively $\Delta G$-projective. ([[lem-group-algebra-bimodule-is-induced-from-the-diagonal]])

[F2] Defect groups are defined by minimal diagonal vertices. ([[def-defect-group-and-numerical-defect-of-a-block]])

[F3] Mackey decomposition and induction transitivity hold for finite modules. ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]])

[F4] Relative projectivity is equivalent to the identity being a relative trace. ([[thm-higman-criterion-for-relative-projectivity]])

## Proof

**Proof technique:** direct.

1.1 Suppose $B$ is relatively $\Delta H$-projective. By Mackey its restriction to $\Delta G$ is a summand of a sum induced from intersections $\Delta G\cap(x,y)\Delta H(x,y)^{-1}$. Each intersection has the form $\Delta L$ with $L\le xHx^{-1}$: equality of the two components requires $xhx^{-1}=yhy^{-1}$. It is thus conjugate inside $\Delta G$ into $\Delta H$. Transitivity and conjugation of inducing witnesses make every term relatively $\Delta H$-projective as a $\Delta G$-module. The finite sum and its summand retain that property. [F3]

2.1 By Higman on this restricted module, $\mathrm{id}_B=\operatorname{Tr}_{\Delta H}^{\Delta G}\alpha$. Evaluating at the central element $b$ gives $b=\sum_{g\in G/H}g\alpha(b)g^{-1}$. Put $a=\alpha(b)$; since $b$ is fixed by $\Delta H$ and $\alpha$ is equivariant, $a\in B^H$. [F4, step 1.1]

3.1 Conversely let $b=\operatorname{Tr}_H^G(a)$ with $a\in B^H$. Left multiplication $\alpha(v)=av$ commutes with the diagonal $H$ action, and its diagonal $G$ trace sends $v$ to $\sum gag^{-1}v=bv=v$. Thus the restricted module is relatively $\Delta H$-projective. By [F1] and the counit splitting, $B$ is a summand of induction to $G\times G$ of this restricted module. Induction transitivity now makes $B$ relatively $\Delta H$-projective as a double module. For a block, minimizing over $p$-subgroups gives exactly [F2]. For $b=0$ both the zero module and trace witness $a=0$ satisfy the equivalence. [F1, F2, F3, F4, step 2.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
