---
id: thm-elliptic-adjoint-reduced-gradient
kind: theorem
title: The elliptic adjoint gives the reduced parameter gradient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-parameterized-elliptic-variational-problem, lem-elliptic-state-map-c1-under-uniform-coercivity, thm-adjoint-problem-for-bounded-coercive-variational-forms, def-countable-choice, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the state and adjoint Lax-Milgram suppliers; no unrestricted choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.6 and 3.2"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §§2.4–3"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Assume Countable Choice and the elliptic state setting of [[def-parameterized-elliptic-variational-problem]] and [[lem-elliptic-state-map-c1-under-uniform-coercivity]]. Let $J:V\times\Theta\to\mathbb R$ be $C^1$. For a parameter $\theta$, let $p_\theta\in V$ solve the adjoint variational problem
$$a_\theta(v,p_\theta)=D_uJ(u_\theta,\theta)[v]\qquad(v\in V).$$
Then the reduced objective $j(\theta)=J(u_\theta,\theta)$ is $C^1$ and
$$D_\theta j(\theta)[\eta]=D_\theta J(u_\theta,\theta)[\eta]+D_\theta\ell_\theta[\eta](p_\theta)-D_\theta a_\theta[\eta](u_\theta,p_\theta).$$
No symmetry of $a_\theta$ is required; the adjoint uses the transposed variational form displayed above.

## Facts & Assumptions

**Given:** The uniformly coercive real variational state, its $C^1$ dependence, the $C^1$ objective, and Countable Choice.

[F1] The state derivative $w_\eta$ is the unique solution of $a_\theta(w_\eta,v)=D_\theta\ell_\theta[\eta](v)-D_\theta a_\theta[\eta](u_\theta,v)$ ([[lem-elliptic-state-map-c1-under-uniform-coercivity]]).

[F2] A bounded linear functional has a unique adjoint variational solution with $a_\theta(v,p)=G(v)$ under Countable Choice ([[thm-adjoint-problem-for-bounded-coercive-variational-forms]], [[def-countable-choice]]).

[F3] The derivative of a $C^1$ composition obeys the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[A1] $J$ and its first derivatives are continuous on the state/parameter neighborhood.

## Proof

1.1 The adjoint datum $D_uJ(u_\theta,\theta)$ is a bounded linear functional on $V$. By [F2], the adjoint $p_\theta$ exists uniquely, with the equation in the Statement. [F2, A1, given]

1.2 By the chain rule [F3] and the state differentiability in [F1], $$D_\theta j[\eta]=D_\theta J(u_\theta,\theta)[\eta]+D_uJ(u_\theta,\theta)[w_\eta].$$ Use the adjoint equation with $v=w_\eta$ to replace the second term by $a_\theta(w_\eta,p_\theta)$. [F1, F2, F3, given]

2.1 Use the state-sensitivity equation [F1] with test function $v=p_\theta$. It gives $a_\theta(w_\eta,p_\theta)=D_\theta\ell_\theta[\eta](p_\theta)-D_\theta a_\theta[\eta](u_\theta,p_\theta)$. [F1, step 1.2]

3.1 Substitute step 2.1 into step 1.2 to obtain the formula. The argument uses only the displayed adjoint equation, so it remains valid for a nonsymmetric coercive form. [step 1.2, step 2.1, algebra] ∎

