---
id: thm-poincare-inequality-with-a-positive-measure-zero-set
kind: theorem
title: "The Poincare inequality with a positive-measure zero set"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-axiom-of-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-ball-average-operator-on-r-n, def-john-domain-and-john-constant, thm-poincare-wirtinger-on-bounded-john-domains, lem-weak-derivative-linearity-locality-and-commutation, thm-holder-inequality-for-integrals]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Remark 3.20 and the zero-set variant of the Poincare inequality, printed pp. 74–75."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, the discussion of conditions eliminating constants, printed pp. 77-78."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, let $\Omega$ be a bounded John domain with admissible constant $c_J$, let $1\le p<\infty$, and let $A\subseteq\Omega$ be measurable with $|A|\ge\gamma|\Omega|$ for some $\gamma\in(0,1]$. If $u\in W^{1,p}(\Omega;\mathbb K)$ vanishes almost everywhere on $A$, then
$$\|u\|_{L^p(\Omega)}\le C(n,p,c_J,\gamma)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded John domain $\Omega$ with constant $c_J$ ([[def-john-domain-and-john-constant]]); $1\le p<\infty$; a measurable $A\subseteq\Omega$ with $|A|\ge\gamma|\Omega|$, $\gamma\in(0,1]$; and a class $u\in W^{1,p}(\Omega;\mathbb K)$ vanishing almost everywhere on $A$.

[F1] The mean-zero Poincare inequality on the John domain: $\|w-w_\Omega\|_{L^p(\Omega)}\le C_1(n,p,c_J)\operatorname{diam}(\Omega)\|Dw\|_{L^p(\Omega)}$ for every $w\in W^{1,p}(\Omega;\mathbb K)$, where $w_\Omega=|\Omega|^{-1}\int_\Omega w$ ([[thm-poincare-wirtinger-on-bounded-john-domains]], [[def-ball-average-operator-on-r-n]]).

[F2] Weak derivatives are linear: $D(w-c)=Dw$ for every constant $c$ ([[lem-weak-derivative-linearity-locality-and-commutation]]); $W^{1,p}$ consists of $L^p$ classes with weak gradient in $L^p$, and $L^p$ is a space of almost-everywhere classes ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Holder's inequality: $\int_A|v|\le|A|^{1-1/p}\|v\|_{L^p(\Omega)}$ for the finite measure set $A$ ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 The mean-zero part. Since constants have zero weak derivative, $v:=u-u_\Omega$ satisfies $v\in W^{1,p}(\Omega;\mathbb K)$ and $Dv=Du$ by [F2]; by [F1], $\|v\|_{L^p(\Omega)}\le C_1(n,p,c_J)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$. Also $v=u-u_\Omega$ almost everywhere on $A$, so $u$ vanishes there if and only if $v=-u_\Omega$ there. [F1, F2, given, algebra]

2.1 Recovering the mean from the zero set. Because $u=0$ almost everywhere on $A$ and $|A|\le|\Omega|<\infty$, $\int_Av=\int_A(u-u_\Omega)=-|A|u_\Omega$; hence $|A|\,|u_\Omega|\le\int_A|v|\le|A|^{1-1/p}\|v\|_{L^p(\Omega)}\le|A|^{1-1/p}C_1\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$ by [F3] and step 1.1, and therefore $|u_\Omega|\le|A|^{-1/p}C_1\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}\le(\gamma|\Omega|)^{-1/p}C_1\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$. [F3, step 1.1, given, algebra]

3.1 Conclusion. By the triangle inequality and steps 1.1 and 2.1, $\|u\|_{L^p(\Omega)}\le\|u-u_\Omega\|_{L^p(\Omega)}+|\Omega|^{1/p}|u_\Omega|\le C_1\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}+C_1\gamma^{-1/p}\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}=C(n,p,c_J,\gamma)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$ with $C(n,p,c_J,\gamma):=C_1(1+\gamma^{-1/p})$, which is the asserted inequality. [step 1.1, step 2.1, given, algebra] ∎

## Source notes

Kinnunen's Remark 3.20 records the zero-set variant: a function vanishing on a set of positive measure can be normalised without the mean, and the mean itself is controlled by the amount of mass on the complement. The proof above implements that normalisation: the mean-zero inequality controls $u-u_\Omega$, and the value $u_\Omega$ is recovered from the zero set by integrating $u-u_\Omega$ over $A$. The exponent $-1/p$ in the mean bound is what produces the constant $\gamma^{-1/p}$.
