---
id: cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion
kind: counterexample
title: Integral total Pontryagin multiplicativity cannot ignore two-torsion
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-pontryagin-classes-by-complexification, thm-naturality-normalization-and-whitney-sum-for-chern-classes, lem-integral-powers-of-the-complexified-universal-real-line, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the two-torsion lemma."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Integral multiplicativity failure for Pontryagin classes, printed pp.134-137"
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The integral two-torsion obstruction, printed pp.94-98"
---

## Statement refuted

Assume AC. The statement refuted is the integral total Pontryagin
multiplicativity formula
$$p(E\oplus F)=p(E)\,p(F)\qquad\text{in }H^*(B;\mathbb Z)$$
for all real vector bundles $E,F$ over a path-connected CW base. Let
$\lambda\to\mathbb{RP}^\infty$ be the universal real line, put
$E=\lambda\oplus\lambda$ and let $a=c_1(\lambda_{\mathbb C})$ be the
two-torsion class of
[[lem-integral-powers-of-the-complexified-universal-real-line]]. Then
$$p_1(E)=-a^2\neq0,\qquad p(\lambda)p(\lambda)=1,$$
while the left-hand side $p(E)$ has nonzero degree-four component $-a^2$;
hence $p(\lambda\oplus\lambda)\neq p(\lambda)p(\lambda)$ integrally, and the
integral multiplicativity formula fails. This is the witness refuted below.

## Facts & Assumptions

**Given:** AC and the universal real line $\lambda$ over $\mathbb{RP}^\infty$.

[A1] The Axiom of Choice is assumed, exactly as inherited from the two-torsion lemma ([[def-axiom-of-choice]]).

[F1] $p_i(V)=(-1)^ic_{2i}(V_{\mathbb C})$, with $p_0=1$ and $p_i=0$ whenever $2i>\operatorname{rank}V$ ([[def-pontryagin-classes-by-complexification]]).

[F2] $a^2\neq0$ is of exact order two, and the complexification of $\lambda$ satisfies $\lambda_{\mathbb C}\oplus\lambda_{\mathbb C}=(\lambda\oplus\lambda)_{\mathbb C}$ ([[lem-integral-powers-of-the-complexified-universal-real-line]], [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F3] Chern classes are natural and multiplicative over Whitney sums, with $c(L)=1+c_1(L)$ on a complex line ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

## Counterexample

**Proof technique:** direct.

1.1 The Pontryagin class of the line: $\lambda$ has real rank one, so by the cutoff in [F1] we have $p_i(\lambda)=0$ for all $i\geq1$, while $p_0(\lambda)=1$; hence $p(\lambda)=1$. [F1, given]

1.2 The complexification of $E=\lambda\oplus\lambda$: by [F2] one has $E_{\mathbb C}\cong\lambda_{\mathbb C}\oplus\lambda_{\mathbb C}$, and by multiplicativity [F3] applied to the two lines, $c(E_{\mathbb C})=(1+a)^2=1+2a+a^2=1+a^2$ in $H^*(\mathbb{RP}^\infty;\mathbb Z)$, because $2a=0$ by the two-torsion relation of [F2]. [F2, F3]

2.1 The top component of $E_{\mathbb C}$ in degree four is $c_2(E_{\mathbb C})=a^2$, so by [F1] with $i=1$, $p_1(E)=(-1)^1c_2(E_{\mathbb C})=-a^2$, which is nonzero by the exact-order-two statement of [F2]. [F1, F2, step 1.2]

3.1 The right-hand side of the refuted formula is $p(\lambda)p(\lambda)=1\cdot1=1$ by step 1.1, whose degree-four component is $0$; the left-hand side $p(E)$ has degree-four component $-a^2\neq0$ by step 2.1. [step 1.1, step 2.1]

4.1 Hence $p(\lambda\oplus\lambda)\neq p(\lambda)p(\lambda)$ integrally: the degree-four components differ by the nonzero two-torsion class $-a^2$. The witness pair is $(\lambda,\lambda)$; its Whitney sum is the bundle $E=\lambda\oplus\lambda$ used above. The argument uses no additive universal-coefficient computation beyond the nonvanishing $a^2\neq0$ proved on the companion $A$-page lemma. [F2, step 2.1, step 3.1]

5.1 Boundary cases. Over $\mathbb Z[1/2]$ the class $a$ becomes zero and the formula is restored, so the failure is exactly integral; the trivial bundle case $a=0$ gives no failure, and the rank cutoffs are used at rank one ($p(\lambda)=1$) and rank two ($p_1$ is the first nonzero Pontryagin class). The base $\mathbb{RP}^\infty$ is path connected and the coefficient group $\mathbb Z$ is nonzero. AC is used only through [A1]. [A1, F1, step 1.1, step 3.1] ∎

## Source notes

This is the two-torsion obstruction recorded in Miller's Lecture 36 and Hatcher's section 3.2: the odd Chern classes of complexified real bundles are two-torsion, and integrally they contribute cross terms to $p(E\oplus F)$ that are not seen by $p(E)p(F)$. The companion theorem on the $A$ page states the multiplicativity only away from two.
