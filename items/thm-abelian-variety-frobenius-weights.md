---
id: thm-abelian-variety-frobenius-weights
kind: theorem
title: "Frobenius eigenvalues of an abelian variety over a finite field have weight one"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-variety-over-a-field
  - def-arith-tate-module-and-inertia
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Weil, “On the Riemann Hypothesis in Function-Fields,” *PNAS* 27 (1941)"
      url: "https://www.pnas.org/doi/10.1073/pnas.27.7.345"
      locator: "Printed pp. 345–347, Frobenius roots for Jacobians; Faltings 1983 §6 states the abelian-variety weight input."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A$ be an abelian variety of dimension $g$ over the finite field $\mathbb F_q$, and let $\ell$ be a prime not dividing $q$. The characteristic polynomial of arithmetic Frobenius on $V_\ell(A)$ has degree $2g$, lies in $\mathbb Z[T]$, and every complex root has absolute value $q^{1/2}$.

## Statement references

[[def-abelian-variety-over-a-field]]

[[def-arith-tate-module-and-inertia]]

[Weil, “On the Riemann Hypothesis in Function-Fields,” *PNAS* 27 (1941), pp. 345–347](https://www.pnas.org/doi/10.1073/pnas.27.7.345)

[Faltings 1983, §6](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC and DC; a finite field $\mathbb F_q$, an abelian variety $A/\mathbb F_q$ of dimension $g$, and $\ell
mid q$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-abelian-variety-over-a-field]]: an abelian variety is a proper geometrically connected group variety.

[F2] [[def-arith-tate-module-and-inertia]]: $V_\ell(A)=T_\ell(A)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell$ is the rational Tate module with arithmetic Frobenius action.

## Proof status

The full proof is the Weil theorem for abelian varieties over finite fields (equivalently, the characteristic polynomial and weight-one case of the Weil conjectures for abelian varieties). No proof-closed local supplier for that theorem is present in this batch. Keep the statement as a required supplier and escalate its proof.

Unresolved proof prerequisite (not an accepted given): The integrality and absolute-value conclusion is the Weil theorem for abelian varieties over finite fields. Proposed supplier ID: `thm-weil-frobenius-characteristic-polynomial-for-abelian-varieties-over-finite-fields` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
