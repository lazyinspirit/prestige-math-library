---
id: ex-cft-r5-gko-su2-diagonal-central-charge
kind: example
title: The diagonal SU(2) coset central charge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
  - def-cft-r5-compact-wzw-model
  - def-cft-r5-gko-coset-model
  - lem-cft-r5-gko-stress-tensor-coset-virasoro
  - def-casimir-operator-relative-to-an-invariant-form
  - def-dual-coxeter-number-for-normalized-form
dependency_roles:
  def-cft-r5-compact-wzw-model: formulation-prerequisite
  def-cft-r5-gko-coset-model: formulation-prerequisite
  lem-cft-r5-gko-stress-tensor-coset-virasoro: mathematical-premise
  def-casimir-operator-relative-to-an-invariant-form: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
justified_by: []
proof_strategy: direct
physical_scope: Conditional chiral central-charge calculation for the compact SU(2) affine coset SU(2)_k times SU(2)_1 over diagonally embedded SU(2)_{k+1}; it makes no claim of a completed full local CFT or physical realization.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§9.5, printed pp. 153–155, equation (9.41): the SU(2)_k × SU(2)_1 / SU(2)_{k+1} central-charge example and branching discussion."
    - title: Lorenz Eberhardt, Wess-Zumino-Witten Models, YRISW PhD School in Vienna (2019)
      url: https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf
      locator: "§4.1, printed pp. 31–33, equation (4.12): the SU(2)_k × SU(2)_1 / SU(2)_{k+1} central-charge calculation."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $k\in\mathbb Z_{>0}$. Take independent restricted affine current sectors for $\mathfrak{su}(2)_{\mathbb C}\cong\mathfrak{sl}_2(\mathbb C)$ at levels $k$ and $1$, and embed the denominator algebra diagonally by $x\mapsto(x,x)$. Assume the Sugawara modes and common stress-tensor data satisfy the exact restricted-module and embedding conditions of the GKO coset definition. The induced denominator level is $k+1$, and the chiral coset stress tensor is Virasoro with
$$c=1-\frac{6}{(k+2)(k+3)}.$$
This calculation specifies only the central charge of the chiral coset data. It does not assert a full left-right state space, its OPE or crossing data, unitarity, modular invariance, or a physical realization.

## Example references

[[def-cft-r5-compact-wzw-model]]

[[def-cft-r5-gko-coset-model]]

[[lem-cft-r5-gko-stress-tensor-coset-virasoro]]

## Facts & Assumptions

**Given:** The compact WZW current convention, the GKO coset data, the diagonal $\mathfrak{sl}_2$ embedding, and $k\in\mathbb Z_{>0}$.

[F1] [[def-cft-r5-compact-wzw-model]]: the basic invariant form has long roots of squared length $2$, the current algebra is at level $k$, and the Sugawara central charge on a restricted module is $k\dim\mathfrak g/(k+h^\vee)$.

[F2] [[def-cft-r5-gko-coset-model]]: the denominator level is induced by the embedding, and $T_{G/H}=T_G-T_H$ is defined on the specified common restricted-module data.

[F3] [[def-casimir-operator-relative-to-an-invariant-form]]: for a basis and its dual with respect to $B$, the adjoint Casimir is $C_B=\sum_a\operatorname{ad}(x_a)\operatorname{ad}(x^a)$.

[F4] [[def-dual-coxeter-number-for-normalized-form]]: if the adjoint Casimir for the normalized form acts as $\gamma_B I$, then $h^\vee=\gamma_B/2$.

[F5] [[lem-cft-r5-gko-stress-tensor-coset-virasoro]]: for simple factors with levels $k_i$, embedding indices $I_i$, and induced level $\ell=\sum_i I_i k_i$, the difference of the numerator and denominator Sugawara modes is Virasoro with the stated difference of central charges, conditional on the exact restricted-module and noncritical-level hypotheses.

[A1] The two numerator current factors have no cross commutators, and the diagonal map uses the identity embedding into each factor.

[A2] On a basis $H,E,F$ of $\mathfrak{sl}_2(\mathbb C)$, the brackets are $[H,E]=2E$, $[H,F]=-2F$, and $[E,F]=H$, and the basic form has $B(H,H)=2$, $B(E,F)=B(F,E)=1$, with all other basis pairings zero.

[A3] The modules are restricted affine-current modules and all levels used here are noncritical; the selected compact model data meet the GKO definition's common-domain conditions.

## Verification

**Given:** [F1]–[F3], [A1]–[A2], and the positive integer $k$.

1.1 In each component the diagonal map is the identity on $\mathfrak{sl}_2$, so $B_i(x,y)=B_{\mathfrak h}(x,y)$ and the two embedding indices are $I_1=I_2=1$. The level in [F5] is therefore $\ell=1\cdot k+1\cdot1=k+1$. [F2, F5, A1, given, algebra]

1.2 The basis in [A2] gives $\dim\mathfrak{sl}_2=3$. Its $B$-dual basis is $(H/2,F,E)$, so [F3] gives $C_B=\tfrac12\operatorname{ad}(H)^2+\operatorname{ad}(E)\operatorname{ad}(F)+\operatorname{ad}(F)\operatorname{ad}(E)$. On $H$, the last two summands each give $2H$ and the first is zero; on $E$, the first gives $2E$, the second gives $2E$, and the third is zero; on $F$, the first gives $2F$, the second is zero, and the third gives $2F$. Thus $C_B=4I$ on this basis, and [F4] gives $h^\vee=2$. [A2, F3, F4, algebra]

2.1 By [F1], the numerator factors have central charges $3k/(k+2)$ and $3/(1+2)=1$, using $\dim\mathfrak{sl}_2=3$ and $h^\vee=2$ from step 1.2. [F1, step 1.2, algebra]

3.1 Apply [F5] with denominator level $k+1$ from step 1.1 and $h^\vee=2$ from step 1.2. The coset central charge is therefore $c=3k/(k+2)+1-3(k+1)/(k+3)$. The noncritical conditions hold because $k+2$, $1+2$, and $k+3$ are positive. [A3, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 Put $D=(k+2)(k+3)$. The numerator after bringing the expression in step 3.1 to denominator $D$ is $3k(k+3)+(k+2)(k+3)-3(k+1)(k+2)=k(k+5)=D-6$. Thus $c=(D-6)/D=1-6/((k+2)(k+3))$, as stated. [step 3.1, algebra]

5.1 Since $k\ge1$, $D\ge12$, so $0<6/D\le1/2$. Therefore $1/2\le c<1$, with $c=1/2$ at $k=1$. These bounds are numerical consequences only; they assert no unitarity or minimal-model identification. [given, step 4.1, algebra] ∎

## Remarks

The full coset module decomposition, selection rules, field identifications, left-right pairing, and local OPE data remain separate inputs. The cited central-charge agreement does not establish any of them.
