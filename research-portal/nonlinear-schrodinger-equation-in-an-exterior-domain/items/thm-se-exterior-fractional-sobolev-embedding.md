---
id: thm-se-exterior-fractional-sobolev-embedding
kind: theorem
domain: mathematics
title: Independent exterior fractional Sobolev embedding
status: draft
deps:
  - lem-se-interpolation-sobolev-model
  - math:def-axiom-of-choice
  - math:def-essential-supremum-with-respect-to-a-measure
dependency_roles:
  lem-se-interpolation-sobolev-model: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-essential-supremum-with-respect-to-a-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "José C. Bellido and Guillermo García-Sáez, Bessel Potential Spaces and
        Complex Interpolation: Continuous embeddings, arXiv:2503.04310v6"
      url: https://arxiv.org/pdf/2503.04310v6
      locator: Definition 3.6 and Theorem 3.7, PDF p. 17; Theorem 3.21(3), PDF pp. 25–26
      statement: For 0<a<1, 1<q<infinity and aq>n, the whole-space
        complex-interpolation space H^{a,q}(R^n) embeds continuously into
        C^{0,mu}(R^n) for 0<mu<=a-n/q, and hence into L-infinity. The
        interpolation and Bessel-potential definitions have equivalent norms.
      hypotheses: R^n, n>=1, 0<a<1, 1<q<infinity and aq>n. The cited embedding is a
        whole-space result; it does not itself assert an exterior-domain
        extension theorem.
      reading_limits: Read the v6 PDF statements of Definition 3.6, Theorems 3.7 and
        3.21(3). The embedding proof and its underlying interpolation results
        were not reconstructed or independently checked.
dependency_level: 5
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$ be a smooth exterior domain, meaning the complement of a compact set with smooth boundary, and let $0<a<1$, $1<q<\infty$ and $aq>n$. With the complex-interpolation convention $\mathcal W^{a,q}(\Omega)=[L^q(\Omega),W^{1,q}(\Omega)]_a$ of [[lem-se-interpolation-sobolev-model]], there is a constant $C$ such that $\|u\|_{L^\infty(\Omega)}\le C\|u\|_{\mathcal W^{a,q}(\Omega)}$ for every $u\in\mathcal W^{a,q}(\Omega)$.

In particular, the hypotheses hold when $n=2$, $p>2$, $a=1-1/p$ and $q=2p/(p-2)$.

## External input

For $0<a<1$, $1<q<\infty$ and $aq>n$, the cited whole-space theorem continuously embeds $H^{a,q}(\mathbb R^n)$ into bounded Hölder-continuous functions. Here $H^{a,q}$ denotes the whole-space Bessel-potential space, equivalently $[L^q(\mathbb R^n),W^{1,q}(\mathbb R^n)]_a$ with equivalent norms. This input makes no exterior-domain assertion.

## Facts & Assumptions

**Given:** The hypotheses and notation of the Statement.

[F1] The Axiom of Choice is assumed as in [[math:def-axiom-of-choice]] and in the interpolation-model supplier.

[F2] By [[lem-se-interpolation-sobolev-model]], under these hypotheses there is a bounded extension $E:\mathcal W^{a,q}(\Omega)\to H^{a,q}(\mathbb R^n)$ such that $(Eu)|_\Omega=u$ almost everywhere. Its whole-space Bessel and complex-interpolation norms are equivalent.

[F3] The independent whole-space input in the External input section provides a constant $C_0$ such that $\|F\|_{L^\infty(\mathbb R^n)}\le C_0\|F\|_{H^{a,q}(\mathbb R^n)}$ for every $F\in H^{a,q}(\mathbb R^n)$.

[F4] For $D=\Omega$ or $D=\mathbb R^n$, the norm $\|v\|_{L^\infty(D)}$ is the essential supremum of the real-valued measurable function $|v|$ with respect to Lebesgue measure on $D$, using [[math:def-essential-supremum-with-respect-to-a-measure]]. Thus it is the infimum of the bounds $M\in[0,\infty]$ satisfying $|v|\le M$ almost everywhere on $D$.

## Proof

**Given:** The hypotheses and notation of the Statement.

[F1] The Axiom of Choice is assumed as in [[math:def-axiom-of-choice]] and in the interpolation-model supplier.

[F2] By [[lem-se-interpolation-sobolev-model]], under these hypotheses there is a bounded extension $E:\mathcal W^{a,q}(\Omega)\to H^{a,q}(\mathbb R^n)$ such that $(Eu)|_\Omega=u$ almost everywhere. Its whole-space Bessel and complex-interpolation norms are equivalent.

[F3] The independent whole-space input in the External input section provides a constant $C_0$ such that $\|F\|_{L^\infty(\mathbb R^n)}\le C_0\|F\|_{H^{a,q}(\mathbb R^n)}$ for every $F\in H^{a,q}(\mathbb R^n)$.



**Given:** The hypotheses and data in the Statement.

**Goal:** Establish the asserted bounded inclusion and verify the stated parameter example.

1.1 For $u\in\mathcal W^{a,q}(\Omega)$, set $F=Eu$. The extension in [F2] gives $F|_\Omega=u$ almost everywhere and $\|F\|_{H^{a,q}(\mathbb R^n)}\le C_E\|u\|_{\mathcal W^{a,q}(\Omega)}$ for a constant $C_E$ independent of $u$. [F1, F2, given]

2.1 If $M$ is a finite almost-everywhere bound for $|F|$ on $\mathbb R^n$, its exceptional null set restricts to a Lebesgue-null set in $\Omega$. Since $F|_\Omega=u$ almost everywhere by step 1.1, adjoining the null set where this equality fails shows $|u|\le M$ almost everywhere on $\Omega$. Thus every such bound for $F$ is a bound for $u$. Taking infima in the definition in [F4] gives $\|u\|_{L^\infty(\Omega)}\le\|F\|_{L^\infty(\mathbb R^n)}$; finite bounds exist by [F3]. Consequently the whole-space bound in [F3] and step 1.1 give $\|u\|_{L^\infty(\Omega)}\le\|F\|_{L^\infty(\mathbb R^n)}\le C_0C_E\|u\|_{\mathcal W^{a,q}(\Omega)}$. This proves the continuous inclusion. [F3, F4, step 1.1]

3.1 If $p>2$, then $0<1-1/p<1$ and $1<2p/(p-2)<\infty$. Moreover $aq=2(p-1)/(p-2)=2+2/(p-2)>2=n$, so the same inclusion applies to the stated parameters. [step 2.1, algebra, given] ∎

## Source notes

The whole-space embedding is an imported premise; the exterior restriction argument above is local. The published integer-order transfer result does not itself cover this fractional interpolation model, and the published fractional inequality inspected concerns the subcritical Slobodeckij setting.
