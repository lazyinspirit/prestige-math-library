---
id: pthm-st-dft-generalized-diffeomorphism-algebra-closure
kind: physics-theorem
title: Strong Constraint DFT Generalized Gauge Algebra Closure
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps: [def-st-double-field-theory-generalized-metric-data]
dependency_roles:
  def-st-double-field-theory-generalized-metric-data: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Local closure of the generalized-metric NS–NS DFT gauge transformations when all fields, gauge parameters, and products satisfy the strong constraint; no closure claim is made for weakly constrained or globally patched configurations."
sources:
  references:
    - title: "Olaf Hohm, Chris Hull, and Barton Zwiebach, Generalized Metric Formulation of Double Field Theory, arXiv:1006.4823v1"
      url: "https://arxiv.org/pdf/1006.4823v1"
      locator: "§3.2, equations (3.11)–(3.28), PDF pp. 12–14: generalized Lie derivative, C-bracket, trivial parameters, and closure under the strong constraint."
    - title: "Gerardo Aldazabal, Diego Marqués, and Carmen Núñez, Double Field Theory: A Pedagogical Review, arXiv:1305.1907v2"
      url: "https://arxiv.org/pdf/1305.1907v2"
      locator: "§3.5, equations (3.44)–(3.51), PDF pp. 23–26: closure constraints and C-bracket algebra."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use the DFT field and strong-constraint conventions of the preceding definition. For generalized vectors $\xi_1,\xi_2$, define the antisymmetric C-bracket by $[\xi_1,\xi_2]_C^M:=\xi^N_{[1}\partial_N\xi^M_{2]}-\frac12\xi_{[1}^{P}\partial^M\xi_{2]P}$, where $U_{[1}V_{2]}:=U_1V_2-U_2V_1$. Then the commutator, ordered as $\widehat{\mathcal L}_{\xi_1}\widehat{\mathcal L}_{\xi_2}-\widehat{\mathcal L}_{\xi_2}\widehat{\mathcal L}_{\xi_1}$, on generalized tensors is $[\widehat{\mathcal L}_{\xi_1},\widehat{\mathcal L}_{\xi_2}]=\widehat{\mathcal L}_{[\xi_1,\xi_2]_C}$. For the trivial-parameter conclusion, take every scalar potential $\chi$ in $\xi^M=\partial^M\chi$ to belong to the strongly constrained scalar collection; in particular $\eta^{MN}\partial_M\partial_N\chi=0$ and its pairwise strong constraints with all fields, parameters, and products hold. Such parameters generate zero transformations. Consequently the generalized diffeomorphism algebra closes modulo these trivial parameters in the strongly constrained local theory.

## Statement references

[Hohm, Hull, and Zwiebach, §3.2](https://arxiv.org/pdf/1006.4823v1)

[Aldazabal, Marqués, and Núñez, §3.5](https://arxiv.org/pdf/1305.1907v2)

## Facts & Assumptions

**Given:** Smooth generalized tensors and gauge parameters satisfying the pairwise strong constraint, and the generalized Lie derivative defined by the preceding DFT field-data definition. Whenever a gradient-form parameter $\xi^M=\partial^M\chi$ is considered, its smooth scalar potential $\chi$ is also in the strongly constrained scalar collection.

[F1] [[def-st-double-field-theory-generalized-metric-data]]: on smooth doubled fields, $\widehat{\mathcal L}_\xi$ acts on a scalar by $\xi^P\partial_P$, on a covector by $\xi^P\partial_P A_M+(\partial_M\xi^P-\partial^P\xi_M)A_P$, on a vector by $\xi^P\partial_PV^M+(\partial^M\xi_P-\partial_P\xi^M)V^P$, and on each slot of a mixed tensor by the corresponding per-index rule. The pairwise strong constraint applies to every pair of components and their products.

[A2] Every potential $\chi$ used in a gradient-form parameter is itself in the strongly constrained scalar collection; hence $\eta^{MN}\partial_M\partial_N\chi=0$ and $\eta^{MN}(\partial_M\chi)(\partial_NA)=0$ for each constrained component or product $A$.

## Proof

1.1 The constant $O(10,10)$ metric has $\partial_P\eta_{MN}=0$. In the covariant-index generalized Lie derivative, the two terms contributed to $\eta_{MN}$ are $(\partial_M\xi^P-\partial^P\xi_M)\eta_{PN}=\partial_M\xi_N-\partial_N\xi_M$ and $(\partial_N\xi^P-\partial^P\xi_N)\eta_{MP}=\partial_N\xi_M-\partial_M\xi_N$; they sum to zero. Raising indices with this invariant metric gives $\widehat{\mathcal L}_\xi\eta^{MN}=0$. The component formula is a derivation on tensor products, so after checking closure on scalars and covectors, it extends to tensor products and contractions. [given, F1, algebra]

2.1 On a scalar $f$, $\widehat{\mathcal L}_\xi f=\xi^P\partial_Pf$, so the commutator is $(\xi_1^P\partial_P\xi_2^M-\xi_2^P\partial_P\xi_1^M)\partial_Mf$. Its difference from $\widehat{\mathcal L}_{[\xi_1,\xi_2]_C}f$ is a sum of terms of the form $\xi_{1N}(\partial^M\xi_2^N)(\partial_Mf)$ and $\xi_{2N}(\partial^M\xi_1^N)(\partial_Mf)$, each zero by the pairwise strong constraint in [F1]. Thus the stated commutator holds on scalars. [given, F1, step 1.1, algebra]

3.1 Acting twice on a generalized covector $A_M$, apply the product rule to both terms of $\widehat{\mathcal L}_\xi A_M$ and antisymmetrize in $\xi_1,\xi_2$. Grouping the terms with an undifferentiated parameter gives $+\widehat{\mathcal L}_{[\xi_1,\xi_2]_C}A_M$ for the bracket defined in the Statement and the explicitly ordered operator commutator there. The remainder is $F_M=+\frac12\xi_{[1N}\partial^Q\xi^N_{2]}\partial_QA_M-\partial^Q\xi_{[1M}\partial_Q\xi^P_{2]}A_P$. In each summand the two differentiated factors are paired by $\eta^{QR}$, so the pairwise strong constraint in [F1] gives $F_M=0$. By the Leibniz rule, closure then holds on all-covariant tensor products; invariance of $\eta$ from step 1.1 raises or lowers each index and gives closure on every mixed generalized tensor. [given, F1, step 1.1, step 2.1, algebra]

4.1 For a trivial parameter $\xi^M=\partial^M\chi$, each lower- and upper-slot term of $\widehat{\mathcal L}_\xi A$ cancels separately because mixed partial derivatives commute; the scalar transport term vanishes by [A2]. On the generalized dilaton, $\delta_\xi d=\partial^M\chi\,\partial_Md-\frac12\partial_M\partial^M\chi=0$: the first term is zero by [A2] and the second by its weak-constraint clause. Thus these parameters act trivially on all generalized tensors and on the density. [given, A2, F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Let $\rho=e^{-2d}$, so [F1] gives $\delta_\xi\rho=\partial_M(\xi^M\rho)$, the Lie derivative of a weight-one density. For the ordinary Lie bracket $L^M:=\xi_1^P\partial_P\xi_2^M-\xi_2^P\partial_P\xi_1^M$, the commutator of these density Lie derivatives is $[\delta_{\xi_1},\delta_{\xi_2}]\rho=\delta_L\rho$. The difference between $L$ and the C-bracket is $\zeta^M=L^M-[\xi_1,\xi_2]_C^M=\frac12(\xi_{1N}\partial^M\xi_2^N-\xi_{2N}\partial^M\xi_1^N)$. The pairwise strong constraint gives $\zeta^M\partial_M\rho=0$; differentiating $\zeta^M$ shows $\partial_M\zeta^M=0$, since the resulting products of first derivatives vanish by the pairwise condition and the second derivatives vanish by the weak condition. Hence $\delta_L\rho=\delta_{[\xi_1,\xi_2]_C}\rho$, proving closure also on $d$. Together with steps 3.1 and 4.1 this proves closure on the full strongly constrained local field data, modulo the stated trivial parameters. [given, F1, step 4.1, algebra] ∎

## Remarks

The operator commutator order is fixed in the Statement. If active field variations are instead bracketed as $\delta_{\xi_1}(\delta_{\xi_2}A)-\delta_{\xi_2}(\delta_{\xi_1}A)$, their composition acts on fields in the reverse operator order and the induced parameter is $-[\xi_1,\xi_2]_C$, the sign convention used in the cited DFT gauge-algebra calculation.

