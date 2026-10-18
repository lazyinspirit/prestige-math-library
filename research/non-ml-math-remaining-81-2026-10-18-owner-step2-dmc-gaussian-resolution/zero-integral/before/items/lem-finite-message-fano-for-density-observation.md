---
id: lem-finite-message-fano-for-density-observation
kind: lemma
title: Fano's inequality for a finite message observed through a density
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-natural-logarithm, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-it-fano-inequality, thm-it-finite-kl-nonnegative-equality]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; all posterior distributions are finite probability vectors.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 21 §21.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/a5ff16d929efde1d8313e12e372aa94b_MIT6_441S16_chapter_21.pdf
---

## Statement

Let $M$ be uniform on $[N]$ with $N\ge2$, and let an observation $Y$ have conditional densities $p_m$ with respect to a common measure. Put $q=N^{-1}\sum_m p_m$ and define the posterior $\pi_m(y)=p_m(y)/(Nq(y))$ wherever $q(y)>0$. For every measurable decoder $g(Y)$ with error probability $e=\Pr[g(Y)\ne M]$,
$$H(M\mid Y)\le H(M\mid g(Y))\le h_2(e)+e\ln(N-1)\le\ln2+e\ln N,$$
where $h_2(e)=-e\ln e-(1-e)\ln(1-e)$ with $0\ln0=0$.

## Facts & Assumptions

**Given:** A uniform finite message, conditional observation densities, their mixture density, and a measurable finite-valued decoder.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: the entropy of a finite probability vector $r$ is $H(r)=-\sum_i r_i\ln r_i$, with zero coordinates contributing zero.

[F2] [[thm-it-finite-kl-nonnegative-equality]]: finite probability vectors satisfy $D(r\|s)\ge0$ whenever the divergence is defined, with equality exactly at $r=s$.

[F3] [[thm-it-fano-inequality]]: for a finite message and a finite estimate with error probability $e$, $H(M\mid\widehat M)\le h_2(e)+e\ln(N-1)$.

[F4] [[def-natural-logarithm]]: the logarithms are natural, so entropies are in nats.

## Proof

1.1 On the set $q(y)>0$, Bayes' formula gives the posterior probability vector $\pi(y)$. Thus $H(M\mid Y)=\int q(y)H(\pi(y))\,d\nu(y)$; the integrand is bounded by $\ln N$, so the conditional entropy is finite. [F1, given, algebra]

2.1 For each decoder value $j$ with $\alpha_j=\Pr[g(Y)=j]>0$, let $A_j=g^{-1}(j)$ and $r^{(j)}=\alpha_j^{-1}\int_{A_j}q(y)\pi(y)\,d\nu(y)$ be the posterior given that estimate. If $r_m^{(j)}=0$, then $\pi_m(y)=0$ for $q(y)d\nu$-almost every $y\in A_j$. Otherwise expansion gives $\alpha_j^{-1}\int_{A_j}q(y)D(\pi(y)\|r^{(j)})\,d\nu(y)=H(r^{(j)})-\alpha_j^{-1}\int_{A_j}q(y)H(\pi(y))\,d\nu(y)\ge0$ by [F2]. Summing over $j$ proves $H(M\mid g(Y))\ge H(M\mid Y)$. [F1, F2, step 1.1, given, algebra, cases]

3.1 Apply [F3] to the finite pair $(M,g(Y))$. Its sharp and relaxed Fano bounds give both upper inequalities in the Statement; the entropy convention in [F4] makes them nats. Together with step 2.1 this proves the full chain. [F3, F4, step 2.1, given] ∎