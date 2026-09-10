---
id: thm-existence-of-a-left-haar-integral
kind: theorem
title: Existence of a left Haar integral
deps: [def-left-haar-integral-and-left-haar-measure, lem-haar-candidate-sets-have-the-finite-intersection-property, def-axiom-of-choice]
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
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Statement

Assume AC. Every LCH group admits a nonzero positive left-invariant real-linear functional on $C_c(G;\mathbb R)$ and its complex-linear extension on $C_c(G;\mathbb C)$.

## Facts & Assumptions

**Given:** An LCH group and AC.

[F1] The target is a nonzero positive invariant real-linear functional. ([[def-left-haar-integral-and-left-haar-measure]])

[F2] A nonnegative cutoff $f_0\ne0$ and a common point $T$ give an additive homogeneous positive-cone functional with $T(f_0)=1$. ([[lem-haar-candidate-sets-have-the-finite-intersection-property]])

[A1] AC is assumed in the choice-function form stated in the cited definition. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 Take a nonzero nonnegative cutoff at the identity and a common point $T$ from [F2]. That lemma gives $T(u+v)=T(u)+T(v)$ for all nonnegative $u,v$; it is positively homogeneous, invariant, and $T(f_0)=1$. [F2, A1]

2.1 Every real $f\in C_c(G)$ is $u-v$ with $u=f^+$ and $v=f^-$. Define $I(f)=T(u)-T(v)$. If also $f=u^{\prime}-v^{\prime}$ with nonnegative terms, then $u+v^{\prime}=u^{\prime}+v$, so additivity gives $T(u)-T(v)=T(u^{\prime})-T(v^{\prime})$. The value is independent of the decomposition. [step 1.1]

3.1 Adding decompositions and multiplying them by a nonnegative scalar proves additivity and positive homogeneity of $I$; exchanging their terms gives $I(-f)=-I(f)$, hence real linearity. For $f\ge0$ use $f-0$ to obtain $I(f)=T(f)\ge0$. Translating both nonnegative terms gives $I(L_af)=I(f)$; $I(f_0)=1$ makes $I$ nonzero. Finally $I_{\mathbb C}(u+iv)=I(u)+iI(v)$ is well-defined by unique real and imaginary parts, and $I_{\mathbb C}(i(u+iv))=-I(v)+iI(u)=iI_{\mathbb C}(u+iv)$ proves complex linearity together with real linearity. [F1, step 1.1, step 2.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
