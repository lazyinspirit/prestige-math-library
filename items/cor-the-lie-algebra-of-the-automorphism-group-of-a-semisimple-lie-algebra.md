---
id: cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra
kind: corollary
title: Lie algebra of the automorphism group
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, thm-cartans-closed-subgroup-theorem, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 4.23"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, Corollary 4.23, printed p. 46"
---

## Statement

Assume countable choice. For a finite-dimensional real or complex semisimple
Lie algebra $\mathfrak g$, the group $\operatorname{Aut}(\mathfrak g)$ is a
closed Lie subgroup of $\operatorname{GL}(\mathfrak g)$ and

$$\operatorname{Lie}(\operatorname{Aut}(\mathfrak g))=\operatorname{Der}(\mathfrak g)=\operatorname{ad}(\mathfrak g).$$

## Facts & Assumptions

**Given:** Countable choice and such a real or complex Lie algebra.

[A1] Countable choice is the principle recorded in [[def-countable-choice]].

[L1] A closed subgroup of a finite-dimensional Lie group is an embedded Lie subgroup; its published proof uses [A1] ([[thm-cartans-closed-subgroup-theorem]]).

[L2] Every derivation of $\mathfrak g$ is inner ([[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]]).

## Proof

**Proof technique:** polynomial equations and differentiation.

1.1 Choose a basis of $\mathfrak g$. The equations $A[x,y]=[Ax,Ay]$ for basis pairs are finitely many polynomial equations in the matrix entries of $A$. Their common zero set inside $\operatorname{GL}(\mathfrak g)$ is exactly $\operatorname{Aut}(\mathfrak g)$ and is closed. By [L1] it is an embedded Lie subgroup; for a complex algebra, apply [L1] first to the underlying real group. [A1, L1, algebra]

1.2 A tangent vector at the identity is represented by $A(t)=I+tD+o(t)$. Differentiating the bracket equation gives $D[x,y]=[Dx,y]+[x,Dy]$, so the tangent algebra is contained in $\operatorname{Der}(\mathfrak g)$. Conversely, for a derivation $D$, the linear vector field $A\mapsto DA$ is tangent to the defining equations, or equivalently its local flow $\exp(tD)$ preserves the bracket by differentiating $\exp(tD)[x,y]-[\exp(tD)x,\exp(tD)y]$; hence every derivation is tangent. When $\mathfrak g$ is complex, the ambient group consists of complex-linear maps and the resulting space of complex-linear derivations is stable under multiplication by $i$; exponential charts therefore give the embedded subgroup its corresponding complex Lie-subgroup structure. [L1, algebra]

2.1 Step 1.2 identifies the Lie algebra with $\operatorname{Der}(\mathfrak g)$, and [L2] identifies that with $\operatorname{ad}(\mathfrak g)$. If $\mathfrak g=0$, the automorphism group is the one-point group and all tangent algebras are zero. Countable choice is used only through [L1], not in the polynomial or differentiation steps. [A1, L2, step 1.1, 1.2] ∎