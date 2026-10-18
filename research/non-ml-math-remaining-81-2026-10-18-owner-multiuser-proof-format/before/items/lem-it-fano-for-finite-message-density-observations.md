---
id: lem-it-fano-for-finite-message-density-observations
kind: lemma
title: Fano bound for finite messages and density observations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-it-finite-kl-nonnegative-equality]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite posterior vectors and scalar density formulas are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 2, §2.10
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Amos Lapidoth, A Foundation in Digital Communication, Chapter 3, Fano's inequality
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-lap-2009-1.pdf
---

## Statement

Let $M$ be uniform on a finite set of size $m\ge2$, let $S$ be finite, and suppose $Y\mid(M,S)$ has a Lebesgue density. For every measurable estimator $\widehat M=\phi(Y,S)$ with error probability $\epsilon$, define $H(M\mid Y,S):=\int H(p_{M|y,s})\,dP_{Y,S}(y,s)$ using its finite posterior vector. Then
$$H(M\mid Y,S)\le h_b(\epsilon)+\epsilon\ln(m-1)\le\ln2+\epsilon\ln m,$$
where $h_b(t)=-t\ln t-(1-t)\ln(1-t)$ and $0\ln0=0$. For $m=1$, the conditional entropy is zero.

## Facts & Assumptions

**Given:** A finite uniform message, finite side information, conditional observation densities and a measurable estimator.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_i p_i\ln p_i$, with $0\ln0=0$.

[F2] [[thm-it-finite-kl-nonnegative-equality]]: finite relative entropy is nonnegative; in particular a $k$-point law has entropy at most $\ln k$ by comparison with the uniform law.

## Proof

1.1 If $\pi_s(m)=\Pr[M=m\mid S=s]$ and $f_{m,s}$ is the conditional density of $Y$, then $f_s(y)=\sum_m\pi_s(m)f_{m,s}(y)$ and $p_{M|y,s}(m)=\pi_s(m)f_{m,s}(y)/f_s(y)$ whenever $f_s(y)>0$. This is a finite posterior probability vector, so [F1] makes its entropy well-defined and bounded by $\ln m$. [given, F1, algebra]

1.2 Put $E=\mathbf1\{\widehat M\ne M\}$. For each fixed $(y,s)$, $E$ is a function of $M$; expanding the finite entropy sum first over $M$ and then over $E$ gives $H(M\mid y,s)=H(E\mid y,s)+H(M\mid E,y,s)$. [given, F1, step 1.1, algebra]

2.1 Let $q(y,s)=\Pr[E=1\mid Y=y,S=s]$. If $0<\epsilon<1$, [F2] applied to the two-point laws $(q,1-q)$ and $(\epsilon,1-\epsilon)$ gives $q\ln(q/\epsilon)+(1-q)\ln((1-q)/(1-\epsilon))\ge0$. Rearranging and averaging, using $\mathbb E q=\epsilon$, yields $\mathbb E h_b(q)\le h_b(\epsilon)$. If $\epsilon=0$ or $1$, then $q=\epsilon$ almost surely and both binary entropies are zero. [F1, F2, step 1.2, algebra, cases]

2.2 On $E=0$, $M=\phi(Y,S)$ and so its conditional entropy is zero; on $E=1$ and fixed $(Y,S)$, at most $m-1$ message values remain, so [F2] bounds that entropy by $\ln(m-1)$. Therefore $H(M\mid E,Y,S)\le\epsilon\ln(m-1)$. [F2, step 1.2]

3.1 Averaging the identity of step 1.2 and applying steps 2.1–2.2 proves the sharp bound. Since $h_b(\epsilon)\le\ln2$ and $\ln(m-1)\le\ln m$, the weaker displayed bound follows. If $m=1$, $M$ is constant. [F1, F2, step 1.2, step 2.1, step 2.2, algebra, cases] ∎
