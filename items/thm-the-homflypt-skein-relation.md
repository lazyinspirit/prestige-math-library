---
id: thm-the-homflypt-skein-relation
kind: theorem
title: "The HOMFLYPT skein relation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [thm-the-hecke-trace-construction-is-an-oriented-link-invariant,
       def-homflypt-polynomial-from-the-hecke-markov-trace,
       def-the-homflypt-coefficient-ring,
       def-closure-of-a-geometric-braid,
       lem-the-markov-trace-of-an-inverse-hecke-generator,
       lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units,
       def-exponent-sum-of-a-braid,
       thm-the-ocneanu-markov-trace-exists-and-is-unique,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 (printed pp. 47-49): the HOMFLYPT skein relation from the Hecke quadratic relation"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Sections 1-3 (the skein relation and its normalization)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
---

## Statement

Assume the Axiom of Choice. Let $P$ be the oriented link invariant of
[[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]], with
coefficient ring $R$ and variables $l=us$, $m=s-s^{-1}$, $v=s^2$ as in
[[def-the-homflypt-coefficient-ring]]. Let $x,y$ be Artin words in the
generators of $B_n$ and $1\le i\le n-1$, and let $L_+,L_-,L_0$ be the oriented
links represented by the closures of $x\sigma_iy$, $x\sigma_i^{-1}y$ and $xy$;
these three braid words differ only at one crossing between the strands
$i,i+1$, so the three link diagrams form a skein triple. Then
$$l^{-1}P(L_+)-l\,P(L_-)=m\,P(L_0),$$
and $P(\text{unknot})=1$. Equivalently, in the normalisation of the trace
tower,
$$u^{-1}P_+-vu\,P_-=(v-1)P_0 .$$

## Facts & Assumptions

**Given:** AC ([[def-axiom-of-choice]]), the invariant $P$ of [[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]], a braid word $x\sigma_iy$ in $B_n$ and the corresponding skein triple $(L_+,L_-,L_0)$. The link-invariance assertion for $P$ uses AC as recorded in its supplier; the skein computation itself is algebraic.

[F1] $P(L_+)=u^{e(x)+e(y)+1}\alpha^{n-1}\operatorname{tr}_n(\pi_n(x\sigma_iy))$, $P(L_-)=u^{e(x)+e(y)-1}\alpha^{n-1}\operatorname{tr}_n (\pi_n(x\sigma_i^{-1}y))$ and $P(L_0)=u^{e(x)+e(y)}\alpha^{n-1}\operatorname{tr}_n(\pi_n(xy))$, since all three words lie in $B_n$ and $\alpha=(uz)^{-1}$ ([[def-homflypt-polynomial-from-the-hecke-markov-trace]], [[def-exponent-sum-of-a-braid]]).

[F2] $T_i=vT_i^{-1}+(v-1)$ for every generator, and $\pi_n$ is multiplicative on words, so in $H(n)$ $\pi_n(x\sigma_iy)=v\,\pi_n(x\sigma_i^{-1}y)+(v-1)\pi_n(xy)$ ([[lem-the-markov-trace-of-an-inverse-hecke-generator]], [[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]]).

[F3] $\operatorname{tr}_n$ is $\Lambda$-linear, so applying it to the identity of [F2] gives the corresponding relation between the three trace values ([[thm-the-ocneanu-markov-trace-exists-and-is-unique]]).

[F4] $l=us$, $m=s-s^{-1}$, $s^2=v$, and $(v-1)s^{-1}=s-s^{-1}=m$ in $R$ ([[def-the-homflypt-coefficient-ring]]).

[F5] $P(\text{unknot})=1$ ([[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]]), and the closures of the three words represent the oriented links $L_+,L_-,L_0$ of the statement ([[def-closure-of-a-geometric-braid]]).

## Proof

1.1 **The trace identity.** By [F2] and the $\Lambda$-linearity of the trace [F3], $A:=vB+(v-1)C$ where $A=\operatorname{tr}_n(\pi_n(x\sigma_iy))$, $B=\operatorname{tr}_n(\pi_n(x\sigma_i^{-1}y))$ and $C=\operatorname{tr}_n(\pi_n(xy))$ are the three trace values of [F1]. [F1, F2, F3]

2.1 **Normalisation.** Multiply the identity of step 1.1 by $u^{e(x)+e(y)}\alpha^{n-1}$ and use [F1]: $u^{-1}P(L_+)=vu\,P(L_-)+(v-1)P(L_0)$, i.e. $u^{-1}P_+-vuP_-=(v-1)P_0$, the second displayed relation. [F1, step 1.1, algebra]

3.1 **The $(l,m)$ form.** Divide the identity of step 2.1 by $s$ and use [F4]: $u^{-1}s^{-1}P_+-vus^{-1}P_-=(v-1)s^{-1}P_0$; here $u^{-1}s^{-1}=(us)^{-1}=l^{-1}$, $vus^{-1}=s^2us^{-1}=us=l$ because $s^2s^{-1}=s$, and $(v-1)s^{-1}=s-s^{-1}=m$. Hence $l^{-1}P_+-lP_-=mP_0$, which is the first displayed relation; the normalization $P(\text{unknot})=1$ is [F5]. [F4, F5, step 2.1, algebra] ∎

## Remarks

- The proof uses only the quadratic Hecke relation $T_i=vT_i^{-1}+(v-1)$ and the linearity of the trace; no reduced or unreduced Burau matrix enters the skein relation, which is why the invariant is defined for all braids.
- The variable dictionary is $l=us$, $m=s-s^{-1}$, $u^2=z_-/z$; substituting $z=z_0=-1/(v+1)$, $u=s$ turns the relation into the Jones skein relation of [[def-temperley-lieb-quotient-and-jones-specialization]].
