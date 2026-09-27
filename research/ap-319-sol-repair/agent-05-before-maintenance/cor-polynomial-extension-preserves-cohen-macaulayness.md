---
id: cor-polynomial-extension-preserves-cohen-macaulayness
title: Polynomial extension preserves Cohen--Macaulayness
kind: corollary
status: published
origin: pipeline
deps: [def-maximal-and-global-cohen-macaulay-modules, thm-localisation-and-flat-base-change-of-regular-sequences, thm-depth-bounded-by-support-dimension, thm-dimension-and-parameters-for-modules, cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
    - title: Stacks Project, Lemma 10.103.13
      url: https://stacks.math.columbia.edu/tag/0AAI
verification:
  audited: 2026-09-07
  precheck: pass
---
## Statement

Let $R$ be Noetherian and $M$ finite and globally Cohen--Macaulay. Then
$M[X]$ is globally Cohen--Macaulay over $R[X]$.

## Facts & Assumptions

**Given:** $M$ is finite and globally Cohen--Macaulay over the Noetherian ring $R$.

[F1] Global Cohen--Macaulayness is tested at primes in the support ([[def-maximal-and-global-cohen-macaulay-modules]]).

[F2] Regular sequences survive polynomial base change and localization when the terminal quotient remains nonzero ([[thm-localisation-and-flat-base-change-of-regular-sequences]]).

[F3] Depth is bounded above by support dimension for nonzero finite local modules ([[thm-depth-bounded-by-support-dimension]]).

[F4] Support dimension is the least length of a tuple in the maximal ideal with finite-length quotient; tuples of this length are module systems of parameters ([[thm-dimension-and-parameters-for-modules]]).

[F5] Every parameter system of a nonzero finite local Cohen--Macaulay module is regular ([[cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then $M[X]=0$ and [F1] gives the claim vacuously. Otherwise fix $P$ in the support of $M[X]$, put $\mathfrak p=P\cap R$, $A=R_{\mathfrak p}$, $\mathfrak m=\mathfrak pA$, $B=A[X]$, $P'=PB$, and $S=B_{P'}$. The nonzero module $M_{\mathfrak p}$ is Cohen--Macaulay. By [F4] and [F5], choose a regular parameter tuple $f_1,\ldots,f_d$ with $d=\dim M_{\mathfrak p}$ and nonzero finite-length quotient $N$. Polynomial extension is faithfully flat, and localization preserves injectivity. The final quotient $Q=N[X]_{P'}$ is nonzero: $N/\mathfrak mN\ne0$, and its polynomial extension localized at $P'\supseteq\mathfrak mB$ remains nonzero. Thus [F2] makes the tuple regular on $M[X]_P$. [F1, F2, F4, F5, given, construct]

2.1 Since $N$ is nonzero of finite length, its annihilator has radical $\mathfrak m$, and $\operatorname{Supp}_S Q=V(\mathfrak mS)$. This also follows by tensoring a finite composition series of $N$: its factors become copies of $\kappa(\mathfrak p)[X]_{\bar P}$, where $\bar P=P'/\mathfrak mB$. If $\bar P=0$, this is a field, so $Q$ has finite length over $S$. If $\bar P\ne0$, write $\bar P=(\bar g)$ for a monic irreducible polynomial and lift its coefficients to a monic $g\in A[X]$. Since $P'$ is the inverse image of $\bar P$, this lift lies in $P'$. Monicity makes multiplication by $g$ injective on $N[X]$ by highest-coefficient comparison, hence on $Q$. Moreover $Q/gQ$ is supported only at the maximal ideal of $S$ (reduce modulo $\mathfrak m$), and is nonzero by Nakayama; it therefore has finite length. [step 1.1, algebra, construct]

3.1 In the first case the regular tuple has length $d$ and finite-length quotient; in the second, adjoining $g$ gives a regular tuple of length $d+1$ and nonzero finite-length quotient. Write its length as $l$. The definition of depth gives $\operatorname{depth}_S M[X]_P\ge l$, [F4] gives $\dim_S M[X]_P\le l$, and [F3] gives the reverse comparison between depth and dimension. Hence both equal $l$. Every localization in the support is Cohen--Macaulay, proving [F1]. [F1, F3, F4, step 2.1] ∎
