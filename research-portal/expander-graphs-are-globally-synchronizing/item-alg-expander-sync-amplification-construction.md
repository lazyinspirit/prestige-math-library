---
title: Two-stage angle and mass construction
status: published
research_item: alg-expander-sync-amplification-construction
dependency_level: 13
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 26–28, proof of Theorem 1.10
      statement: The proof constructs angle and mass sequences by small-set and
        large-set amplification, stopping at the small-stage cap or at mass n/2,
        and estimates their total angle decrement.
      hypotheses: The proof assumes a connected two-sided spectral expander, a
        normalized nonsynchronized stable state, and the parameters and
        inequality displayed in the construction.
      reading_limits: The supplied article text at the cited proof was inspected for
        attribution and the two-stage formulas. The article is not used as a
        proof premise for the argument below.
---

PDF p. 26: ` Proof of Theorem 1.10, two cases `; PDF p. 27: ` Proof of Theorem 1.10, two cases `

## Prerequisites

- [def-expander-sync-amplification-sequences](item-def-expander-sync-amplification-sequences)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [lem-expander-sync-amp-small](item-lem-expander-sync-amp-small)
- [lem-expander-sync-amp-large](item-lem-expander-sync-amp-large)
- [prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period)
- [math:thm-double-angle-and-power-reduction-identities](https://alphabetamath.cc/item/thm-double-angle-and-power-reduction-identities)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)


## Definition

Assume countable choice. Take a finite connected $(n,d^*,\alpha,c^-,c^+)$-expander and a stable, nonsynchronized phase state whose first order parameter is real and nonnegative, as in [def-expander-sync-amplification-sequences](item-def-expander-sync-amplification-sequences) and [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander). Thus a stable state is a local minimum of the graph energy, and its first order parameter is the mean of its unit phase vectors. For principal representatives $\theta_x\in(-\pi,\pi]$, put $\mathcal C_\psi=\{x:|\theta_x|\ge\psi\}$ for $0\le\psi\le\pi$; this is the phase tail at angle $\psi$ ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

Assume $0<\alpha\le1/5$, $-1<c^-\le0\le c^+$, and $c^+>c^-$. Put $a=1+c^-$, $B=1+c^++\alpha$, $L=\log(B/(2\alpha))$, $\varepsilon=a/2$, $\delta=a/(2(c^+-c^-))$, and $q=1+\delta$. Here $\log$ is the natural logarithm. Assume the article's condition (1.3): $32\alpha(1+4c^+-3c^-)L/a^2<1$. The positive $\alpha$ and nonzero gap make the displayed formulas meaningful.

Set $\beta_0=\pi/2$ and $c_0=|\mathcal C_{\pi/2}|$. Let $K=\lceil L/\log q\rceil$, the least integer at least $L/\log q$. Starting at $k=0$, use the following small-stage update while $k<K$ and $c_k<\alpha n$: $\beta_{k+1}=\beta_k-\arcsin(8\alpha/a)$ and $c_{k+1}=\min\{q|\mathcal C_{\beta_k}|,\alpha n\}$. Let $k_*$ be the index at which this stage stops. If $c_{k_*}\ge\alpha n$, stop with $M=k_*$. Otherwise repeatedly use the large-stage update $\beta_{k+1}=\beta_k-\arcsin(4Bc_0/(a|\mathcal C_{\beta_k}|))$ and $c_{k+1}=\min\{q|\mathcal C_{\beta_k}|,n/2\}$ until $c_M=n/2$. The inverse sine is its principal real branch. The output is the finite sequence $(\beta_k,c_k)_{k=0}^M$.

## Facts & Assumptions

[F1] The sequence definition gives $c_0\ge1$ under the stated graph, normalization, stability, nonsynchronization and countable-choice assumptions. The phase tails are nested as their angle decreases ([def-expander-sync-amplification-sequences](item-def-expander-sync-amplification-sequences), [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] For $0<\gamma<\beta\le\pi/2$, the small-set amplification lemma with $\rho=1$ gives $|\mathcal C_\gamma|\ge\min\{q|\mathcal C_\beta|,\alpha n,n/2\}$ if $\sin(\beta-\gamma)\ge8\alpha/a$. The large-set lemma gives $|\mathcal C_\gamma|\ge\min\{q|\mathcal C_\beta|,n/2\}$ if $|\mathcal C_\beta|>0$ and $\sin(\beta-\gamma)\ge4Bc_0/(a|\mathcal C_\beta|)$ ([lem-expander-sync-amp-small](item-lem-expander-sync-amp-small), [lem-expander-sync-amp-large](item-lem-expander-sync-amp-large)).

[F3] For $0\le x\le1$, $\arcsin x\le\pi x/2$; for $x\ge0$, $\log(1+x)\ge2x/(2+x)$, strictly for $x>0$ ([prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)).

[F4] A sequence growing at least by a factor $q>1$ until a positive cap is reached reaches that cap in finitely many steps. On a geometric stage, decrements bounded by $b/c_k$ sum to at most $bq/(c_{k_*}(q-1))$ ([prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)). Every real number has an integer part, so the stated ceiling exists ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)).

[F5] The principal inverse sine satisfies $\sin(\arcsin x)=x$ for $-1\le x\le1$ ([math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)). Sine is strictly increasing on $[0,\pi/2]$ and $\sin0=0$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges), [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period)). Together with the nonnegative principal range in [F3], these facts give $\arcsin x>0$ for $0<x\le1$.

[F6] For real $t$, $\sin^2t=(1-\cos(2t))/2$, and $\cos(\pi/2)=0$; hence $\sin^2(\pi/4)=1/2$ ([math:thm-double-angle-and-power-reduction-identities](https://alphabetamath.cc/item/thm-double-angle-and-power-reduction-identities), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F7] The natural logarithm is strictly increasing on $(0,\infty)$, satisfies $\log1=0$ and $\log(xy)=\log x+\log y$ for $x,y>0$, and obeys $\exp(\log x)=x$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F8] A property holding at zero and preserved by the successor step holds for every nonnegative integer ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)). Here $q^m$ for a nonnegative integer $m$ denotes the product of $m$ copies of $q$, with $q^0=1$.

## Justification

**Given:** The graph, state and parameters in the definition.

**Goal:** Show that every executed update is defined, its claimed mass is a tail lower bound, and the procedure stops with a positive final angle. Moreover, show $c_M\sin^2\beta_M>5\alpha^2n/2$.

1.1 Since $B\ge1$ and $\alpha\le1/5$, $B/(2\alpha)\ge5/2$. More sharply, $B/(2\alpha)\ge3$ because $B\ge1+\alpha$ and $\alpha\le1/5$. By logarithm monotonicity in [F7] and the strict bound in [F3] at $x=2$, $L\ge\log3>1$. Also $1+4c^+-3c^-=a+4(c^+-c^-)\ge a>0$. Condition (1.3) therefore implies $\alpha/a<1/32$. In particular $0<8\alpha/a<1/4$, and $q>1$, so $\log q>0$ by [F7]. [given, F3, F7, algebra]

2.1 Let $D=1+4c^+-3c^-=a+4(c^+-c^-)$. The ceiling satisfies $K\le\max\{1,2L/\log q\}$: if $L/\log q\le1$ then $K=1$, and otherwise $\lceil x\rceil\le2x$ for $x\ge1$. By [F3], $2/\log q\le(2+\delta)/\delta=D/a$. Thus $K\le\max\{1,DL/a\}$. The total decrement of at most $K$ small updates is at most $4\pi\alpha K/a<\pi/8$, using [F3], step 1.1 and (1.3). [F3, F4, step 1.1, algebra]

3.1 Verify the updates inductively, as long as they are executed. The small-stage angle remains positive by step 2.1, and its decrement is the positive principal inverse sine of $8\alpha/a$. By [F5], $\sin(\beta_k-\beta_{k+1})=8\alpha/a$. Hence [F2] applies, since $\varepsilon=a/2$, $\rho=1$, and $\alpha n\le n/2$. It gives $|\mathcal C_{\beta_{k+1}}|\ge c_{k+1}$. Before the cap, $c_{k+1}\ge\min\{qc_k,\alpha n\}$, so $c_k\ge q^kc_0$ until the cap is reached. If the small stage stops without the cap, it has $k_*=K$. The product law in [F7] and induction [F8] give $\log(q^m)=m\log q$ for every nonnegative integer $m$: the case $m=0$ uses $\log1=0$, and multiplying by $q$ adds $\log q$. Thus $\log(q^K)=K\log q\ge L=\log(B/(2\alpha))$, so strict logarithm monotonicity and the inverse identity in [F7] give $c_{k_*}\ge q^Kc_0\ge e^Lc_0=Bc_0/(2\alpha)$. If the cap is reached, the procedure stops. [F1, F2, F4, F5, F7, F8, step 2.1, induction, algebra]

4.1 In the remaining case, $c_{k_*}\ge Bc_0/(2\alpha)>0$. Before the large-stage cap, induction using [F2] gives $|\mathcal C_{\beta_k}|\ge c_k\ge q^{k-k_*}c_{k_*}$. Consequently each inverse-sine argument is positive and at most $8\alpha/a<1$. By [F5], each decrement is positive and its sine equals $4Bc_0/(a|\mathcal C_{\beta_k}|)$, as required by [F2]. Also [F3] bounds the total large-stage decrement by $2\pi Bc_0q/(a\delta c_{k_*})\le4\pi\alpha q/(a\delta)=4\pi\alpha(1+2c^+-c^-)/a^2<\pi/8$. The last inequality follows from $1+2c^+-c^-\le D$, $L>1$, and (1.3). This bound applies to every finite prefix, so the next angle remains positive and the induction is valid at every update. The growth-and-cap assertion in [F4] makes the large stage finite, with $c_M=n/2$. [F2, F3, F4, F5, F8, step 1.1, step 3.1, induction, algebra]

5.1 The constructed angles strictly decrease and all remain positive. In the small-stage stopping case, step 2.1 gives $\beta_M>3\pi/8$ and $c_M\ge\alpha n$. By [F5] and [F6], sine is nonnegative and strictly increasing on $[0,\pi/2]$, with $\sin^2(\pi/4)=1/2$, so $\sin^2(3\pi/8)>1/2$. Since $\alpha\le1/5$, this gives $c_M\sin^2\beta_M>\alpha n/2\ge5\alpha^2n/2$. In the large-stage case, steps 2.1 and 4.1 give $\beta_M>\pi/4$ and $c_M=n/2$, so $c_M\sin^2\beta_M>n/4\ge5\alpha^2n/2$. The mass bounds and strict growth before the relevant cap make the output an amplification sequence. [F1, F3, F5, F6, step 2.1, step 3.1, step 4.1, algebra] ∎



The two update formulas and two-stage stopping construction are attributed to the proof of Theorem 1.10 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 26–28. The local justification uses the declared mathematical suppliers.

## Source notes

The two update formulas and two-stage stopping construction are attributed to the proof of Theorem 1.10 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 26–28. The local justification uses the declared mathematical suppliers.
