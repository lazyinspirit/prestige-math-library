---
id: cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive
kind: counterexample
title: "An intersection of two primitive ideals need not be primitive"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [prop-a-primitive-ideal-determines-a-central-character, prop-annihilators-of-simple-highest-weight-modules-are-primitive, def-primitive-ideal-of-an-enveloping-algebra, def-annihilator-ideal-of-a-lie-algebra-module, def-special-linear-lie-algebra-sl-two, thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights, prop-casimir-eigenvalue-on-a-highest-weight-module, def-prime-and-maximal-ideals, def-central-character-of-a-lie-algebra-module]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references: []
---

## Statement refuted

The assertion that the set of primitive ideals of an enveloping algebra is
closed under finite intersections is false. In $U(\mathfrak{sl}_2(\mathbb C))$
the ideals $I_0=\operatorname{Ann}L(0)$ (the trivial module) and
$I_1=\operatorname{Ann}L(1)$ (the two-dimensional simple module) are primitive,
but their intersection $I_0\cap I_1$ is not primitive. The central-character
criterion detects this: $(I_0\cap I_1)\cap Z(U(\mathfrak g))=\ker\chi_0\cap\ker\chi_1$
is not a maximal ideal.

## Facts & Assumptions

**Given:** $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with Casimir $\Omega$, the finite-dimensional simple modules $L(0)=\mathbb C$ and $L(1)$ (the standard two-dimensional module), and the ideals $I_0=\operatorname{Ann}_{U(\mathfrak g)}L(0)$, $I_1=\operatorname{Ann}_{U(\mathfrak g)}L(1)$.

[F1] Annihilators of the simple modules $L(0)$ and $L(1)$ are primitive ideals ([[prop-annihilators-of-simple-highest-weight-modules-are-primitive]], [[def-primitive-ideal-of-an-enveloping-algebra]], [[def-annihilator-ideal-of-a-lie-algebra-module]]).

[F2] A primitive ideal $I$ satisfies $I\cap Z(U(\mathfrak g))=\ker\chi_I$, and this intersection is a maximal ideal of $Z(U(\mathfrak g))$ ([[prop-a-primitive-ideal-determines-a-central-character]], [[def-prime-and-maximal-ideals]]).

[F3] Put $\Omega:=ef+fe+\tfrac12h^2\in Z(U(\mathfrak g))$; it is central because the relations $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$ give $[h,\Omega]=[e,\Omega]=[f,\Omega]=0$ ([[def-special-linear-lie-algebra-sl-two]]). The finite-dimensional simple modules are the $L(n)$, $n\ge0$ ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]), and on the highest-weight vector of $L(n)$ one has $ev=0$, $efv=[e,f]v+f(ev)=hv=nv$, $fev=0$, so $\Omega v=(n+0+\tfrac12n^2)v=\tfrac{n(n+2)}2v$; in particular $\chi_0(\Omega)=0$ and $\chi_1(\Omega)=\tfrac32$ ([[def-central-character-of-a-lie-algebra-module]]).

[F4] In a commutative ring, two distinct maximal ideals have non-maximal intersection: if $M=\mathfrak m\cap\mathfrak n$ with $\mathfrak m\ne\mathfrak n$ maximal were maximal, then $\mathfrak m\supseteq M$ and maximality of $M$ would force $M=\mathfrak m$, so $\mathfrak m\subseteq\mathfrak n$ and maximality of $\mathfrak m$ would force $\mathfrak m=\mathfrak n$, a contradiction ([[def-prime-and-maximal-ideals]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F1] the ideals $I_0$ and $I_1$ are primitive. By [F2] their central intersections are $I_0\cap Z=\ker\chi_0$ and $I_1\cap Z=\ker\chi_1$. [F1, F2, given]

1.2 By [F3] the central character values on the central element $\Omega$ are $\chi_0(\Omega)=0$ and $\chi_1(\Omega)=1\cdot(1+2)/2=3/2$; since these differ, $\chi_0\ne\chi_1$, so their kernels are distinct maximal ideals by [F2]. [F3, F2, algebra]

2.1 Intersecting the central intersections of step 1.1 gives $(I_0\cap I_1)\cap Z=\ker\chi_0\cap\ker\chi_1$, and this is not a maximal ideal by [F4] applied to the distinct maximal ideals $\ker\chi_0,\ker\chi_1$. [step 1.1, step 1.2, F4]

3.1 If $I_0\cap I_1$ were primitive, then by [F2] its intersection with $Z$ would be maximal, contradicting step 2.1. Therefore $I_0\cap I_1$ is not primitive, and the set of primitive ideals is not closed under finite intersections. [step 2.1, F2] ∎ 