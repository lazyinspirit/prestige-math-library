---
id: lem-finite-message-fano-for-density-observation
kind: lemma
title: Fano's inequality for a finite message observed through a density
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-natural-logarithm, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-it-fano-inequality, thm-it-finite-kl-nonnegative-equality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-finite-nonnegative-integral-implies-finite-almost-everywhere, cor-integral-over-a-null-set-vanishes]
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

[F5] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function with zero integral is zero almost everywhere, on an arbitrary measure space.

[F6] [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]: a nonnegative measurable function with finite integral is finite almost everywhere.

[F7] [[cor-integral-over-a-null-set-vanishes]]: the nonnegative integral over a measurable null set is zero, even for an extended-valued integrand.

## Proof

1.1 Since $\int q\,d\nu=N^{-1}\sum_m\int p_m\,d\nu=1$, [F6] makes $B=\{q=+\infty\}$ a measurable $\nu$-null set. Replace every $p_m$ by zero on $B$ and use their new mixture $q$; [F7] shows that all conditional and marginal laws are unchanged. These density versions are finite everywhere, since $p_m\le Nq$ off $B$. Define $\pi_m=p_m/(Nq)$ where $q>0$ and $\pi_m=1/N$ where $q=0$. This is a measurable probability vector everywhere and a posterior version: for every measurable $A$, $\int_A q\pi_m\,d\nu=N^{-1}\int_Ap_m\,d\nu=\Pr(M=m,Y\in A)$. Values on the zero-density set have no effect. Thus $H(M\mid Y)=\int H(\pi)\,dQ$, where $dQ=q\,d\nu$ is the observation probability law. By [F1] and comparison with the uniform vector in [F2], $0\le H(\pi)\le\ln N$, so this conditional entropy is finite. All posterior formulas in the Statement are understood for these almost-everywhere density versions. [F1, F2, F6, F7, given, algebra]

2.1 For each decoder value $j$ with $\alpha_j=Q(A_j)>0$, let $A_j=g^{-1}(j)$ and $r^{(j)}=\alpha_j^{-1}\int_{A_j}\pi\,dQ$; this is the posterior probability vector given that estimate. If $r_m^{(j)}=0$, then $\int_{A_j}\pi_m\,dQ=0$, so [F5], applied to the measure $Q$ restricted to $A_j$, gives $\pi_m=0$ almost everywhere there. Discard the union of these finitely many exceptional null sets. On the remainder, $\pi$ is supported on the positive coordinates of $r^{(j)}$, so $D(\pi\|r^{(j)})$ has no infinite term. The finitely many constants $\ln r_m^{(j)}$ on that support and the bounded entropy in step 1.1 justify termwise integration. Expansion and [F2] give $\alpha_j^{-1}\int_{A_j}D(\pi\|r^{(j)})\,dQ=H(r^{(j)})-\alpha_j^{-1}\int_{A_j}H(\pi)\,dQ\ge0$. Decoder cells of zero $Q$-mass contribute zero; summing over the other cells proves $H(M\mid g(Y))\ge H(M\mid Y)$. [F1, F2, F5, step 1.1, given, algebra, cases]

3.1 Apply [F3] to the finite pair $(M,g(Y))$. Its sharp and relaxed Fano bounds give both upper inequalities in the Statement; the entropy convention in [F4] makes them nats. Together with step 2.1 this proves the full chain. [F3, F4, step 2.1, given] ∎