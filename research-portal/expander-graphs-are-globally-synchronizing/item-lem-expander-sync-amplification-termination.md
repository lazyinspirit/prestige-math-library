---
title: Mass growth, stopping, and final-angle claims
status: draft
research_item: lem-expander-sync-amplification-termination
dependency_level: 14
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 27–28, proof of Theorem 1.10, critical step and stopping cases
      statement: The proof asserts the tail lower bounds for both updates and obtains
        the final-angle and mass inequalities in the two stopping cases.
      hypotheses: The connected-expander and normalized stable-state conventions and
        the parameters and inequality used in the proof of Theorem 1.10.
      reading_limits: The article text at the cited proof was inspected for the
        construction and stopping claims. This reference attributes those
        claims; it is not a proof premise for this item.
---

PDF p. 27: ` Proof of Theorem 1.10, stopping cases `; PDF p. 28: ` Proof of Theorem 1.10, stopping cases `

## Prerequisites

- [alg-expander-sync-amplification-construction](item-alg-expander-sync-amplification-construction)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [lem-expander-sync-amp-small](item-lem-expander-sync-amp-small)
- [lem-expander-sync-amp-large](item-lem-expander-sync-amp-large)
- [prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)
- [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:thm-sine-and-cosine-addition-formulas](https://alphabetamath.cc/item/thm-sine-and-cosine-addition-formulas)
- [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity)


## Statement

Assume countable choice and use the graph, normalized nonsynchronized stable state, parameters and two-stage construction specified in the construction supplier. In particular, $0<\alpha\le1/5$, $q=1+\delta>1$, $c_0=|\mathcal C_{\pi/2}|>0$, and $\beta_0=\pi/2$. Here $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$ uses principal phase representatives $\theta_x\in(-\pi,\pi]$.

Let $k^*$ be the first small-stage index at which either $c_k\ge\alpha n$ or $c_k\ge q^kc_0\ge Bc_0/(2\alpha)$, where $B=1+c^++\alpha$. The construction terminates at a finite index $M$, and $|\mathcal C_{\beta_k}|\ge c_k$ for every $0\le k\le M$. If it stops at $M=k^*$ with $c_M\ge\alpha n$, the total angle loss is less than $\pi/8$, $\beta_M>3\pi/8$, and $c_M\sin^2\beta_M>5\alpha^2n/2$. If it continues after $k^*$, it stops with $c_M=n/2$; each stage loses less than $\pi/8$, $\beta_M>\pi/4$, and $c_M\sin^2\beta_M>n/4>5\alpha^2n/2$.

## Statement references

[alg-expander-sync-amplification-construction](item-alg-expander-sync-amplification-construction)

[def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] The construction specifies $a=1+c^-$, $B=1+c^++\alpha$, $L=\log(B/(2\alpha))$, $\delta=a/(2(c^+-c^-))$, $q=1+\delta$, $K=\lceil L/\log q\rceil$, $-1<c^-\le0\le c^+$, $c^+>c^-$, and $32\alpha(1+4c^+-3c^-)L/a^2<1$. Its small-stage updates, while $k<K$ and $c_k<\alpha n$, are $\beta_{k+1}=\beta_k-\arcsin(8\alpha/a)$ and $c_{k+1}=\min\{q|\mathcal C_{\beta_k}|,\alpha n\}$. If that stage stops below its cap, its large-stage updates are $\beta_{k+1}=\beta_k-\arcsin(4Bc_0/(a|\mathcal C_{\beta_k}|))$ and $c_{k+1}=\min\{q|\mathcal C_{\beta_k}|,n/2\}$, stopping at $c_M=n/2$. These are instructions, not premises asserting their correctness or termination ([alg-expander-sync-amplification-construction](item-alg-expander-sync-amplification-construction)). The phase tails are defined by the principal representatives in the Statement ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

[F2] Under the graph, stability, normalization and countable-choice hypotheses in the Statement, small-set amplification with $\varepsilon=a/2$ and $\rho=1$ gives $|\mathcal C_\gamma|\ge\min\{q|\mathcal C_\beta|,\alpha n,n/2\}$ whenever $0<\gamma<\beta\le\pi/2$ and $\sin(\beta-\gamma)\ge8\alpha/a$ ([lem-expander-sync-amp-small](item-lem-expander-sync-amp-small), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F3] Under those same hypotheses, large-set amplification with $\varepsilon=a/2$ gives $|\mathcal C_\gamma|\ge\min\{q|\mathcal C_\beta|,n/2\}$ whenever $0<\gamma<\beta\le\pi/2$, $|\mathcal C_\beta|>0$, and $\sin(\beta-\gamma)\ge4Bc_0/(a|\mathcal C_\beta|)$ ([lem-expander-sync-amp-large](item-lem-expander-sync-amp-large), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F4] For $0\le x\le1$, $0\le\arcsin x\le\pi x/2$. For $x\ge0$, $\log(1+x)\ge2x/(2+x)$, strictly if $x>0$ ([prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)).

[F5] The ceiling is the least integer at least its argument. Positive masses satisfying $u_{j+1}\ge\min\{qu_j,C\}$ with $q>1$, $C>0$ grow at least geometrically before their first cap crossing and reach the cap in finitely many updates. If $u_j\ge u_0q^j$ and decrements satisfy $0\le d_j\le b/u_j$ on a finite or infinite stage, their total is at most $bq/(u_0(q-1))$ ([prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)).

[F6] The natural logarithm is strictly increasing on positive reals, $\log1=0$, and $\log(xy)=\log x+\log y$ for $x,y>0$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F7] The principal inverse sine satisfies $\sin(\arcsin x)=x$ for $-1\le x\le1$ and has values in $[-\pi/2,\pi/2]$ ([math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)). Sine is strictly increasing on $[-\pi/2,\pi/2]$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)) and is nonnegative on $[0,\pi]$ ([prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)).

[F8] For real $t$, $\cos(2t)=\cos^2t-\sin^2t$, by the cosine addition formula, and $\cos^2t+\sin^2t=1$; also $\cos(\pi/2)=0$ and $\sin(-t)=-\sin t$ ([math:thm-sine-and-cosine-addition-formulas](https://alphabetamath.cc/item/thm-sine-and-cosine-addition-formulas), [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F9] A property holding at zero and preserved by the successor step holds for every nonnegative integer ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

## Proof

**Given:** The construction and its hypotheses in the Statement, including $c_0>0$. Countable choice is retained for the two amplification lemmas; the numerical estimates and deterministic recursion below require no further choices.

**Goal:** Establish well-defined updates, the tail bounds, finite stopping and the stated final inequalities.

1.1 Put $D=1+4c^+-3c^-=a+4(c^+-c^-)>a>0$. Since $\alpha\le1/5$ and $B\ge1+\alpha$, $B/(2\alpha)\ge3$. Thus $L\ge\log3>1$, the strict inequality following from [F4] at $x=2$. Since $DL/a>1$, the hypothesis $32\alpha DL/a^2<1$ implies $\alpha/a<1/32$. In particular $0<8\alpha/a<1/4$, and $\delta>0$, $q>1$, $\log q>0$. [given, F1, F4, F6, algebra]

1.2 By [F8], $\cos(2t)=1-2\sin^2t$. At $t=\pi/4$, this gives $\sin^2(\pi/4)=1/2$. By [F7], for $\pi/4<\beta\le\pi/2$, $\sin\beta>\sin(\pi/4)\ge0$, hence $\sin^2\beta>1/2$. [F7, F8, algebra]

2.1 Write $x=L/\log q>0$. If $x\le1$, then $K=1$; if $x>1$, the least-integer property gives $K<x+1\le2x$. Also [F4] gives $2/\log q\le(2+\delta)/\delta=D/a$. Hence $K\le\max\{1,DL/a\}$. Put $s=\arcsin(8\alpha/a)$. By [F4] and [F7], $0<s\le4\pi\alpha/a$; here $s=0$ is excluded by $\sin(\arcsin(8\alpha/a))=8\alpha/a>0$ and $\sin0=0$, the latter following from the parity identity in [F8]. Consequently the loss from any at most $K$ small-stage updates is at most $S:=4\pi\alpha K/a<\pi/8$. Indeed, both $32\alpha/a<1$ and $32\alpha DL/a^2<1$. Thus every proposed small-stage angle is greater than $3\pi/8$ and at most $\pi/2$, before any amplification lemma is invoked. [F1, F4, F5, F7, F8, step 1.1, algebra]

3.1 Induct along the small-stage instructions. The initial tail bound is equality by the definition of $c_0$. At each executed update, step 2.1 gives $0<\beta_{k+1}<\beta_k\le\pi/2$, and [F7] gives $\sin(\beta_k-\beta_{k+1})=8\alpha/a$. Since $0<\varepsilon=a/2<a$ and $c^+-c^->0$, all the hypotheses of [F2] hold. As $\alpha n\le n/2$, it gives $|\mathcal C_{\beta_{k+1}}|\ge c_{k+1}$. The update and the previous tail bound give $c_{k+1}\ge\min\{qc_k,\alpha n\}$, so [F5], applied to each constructed prefix, gives $c_k\ge q^kc_0$ before the cap. The instructions stop this stage at its first cap or at $K$. By [F6], $q^kc_0\ge Bc_0/(2\alpha)$ is equivalent to $k\log q\ge L$; its first integer solution is $K$. Therefore its stopping index equals the stated $k^*$. If it stops below the cap, $k^*=K$ and $c_{k^*}\ge q^Kc_0\ge Bc_0/(2\alpha)>0$. This argument includes a cap already reached at index zero. [given, F1, F2, F5, F6, F7, F9, step 1.1, step 2.1, induction, algebra]

4.1 Suppose the large stage is entered, and write $m=c_{k^*}$, so $0<m<\alpha n<n/2$ and $m\ge Bc_0/(2\alpha)$. Set $b=2\pi Bc_0/a$ and $T=bq/(m\delta)$. Then $T\le4\pi\alpha q/(a\delta)=4\pi\alpha(1+2c^+-c^-)/a^2<\pi/8$, since $1+2c^+-c^-\le D$, $L>1$, and $32\alpha DL/a^2<1$. Assume inductively that a constructed prefix has the tail bounds and $c_{k^*+j}\ge mq^j$ at every index before the cap. At its next such index the inverse-sine argument $u_j=4Bc_0/(a|\mathcal C_{\beta_{k^*+j}}|)$ is positive and at most $4Bc_0/(amq^j)\le8\alpha/a<1$. Its decrement $d_j=\arcsin u_j$ therefore satisfies $0<d_j\le b/c_{k^*+j}\le(b/m)q^{-j}$. By [F5], every partial large-stage loss, including this proposed decrement, is at most $T<\pi/8$. Together with step 2.1 this makes the proposed next angle greater than $\pi/4$, so [F3] applies, with its sine condition an equality by [F7]. It supplies the next tail bound and $c_{k^*+j+1}\ge\min\{qc_{k^*+j},n/2\}$, completing the induction. Thus no update fails. The growth-and-cap conclusion in [F5] gives a finite cap crossing; the exact update is at most $n/2$, so it stops with $c_M=n/2$. Both stage losses are strictly less than $\pi/8$, and all angles lie in $(0,\pi/2]$. [F1, F3, F4, F5, F7, F9, step 1.1, step 2.1, step 3.1, induction, algebra]

4.2 If the construction stops at $M=k^*$ with $c_M\ge\alpha n$, step 2.1 gives total loss less than $\pi/8$ and $\beta_M>3\pi/8>\pi/4$. Therefore $c_M\sin^2\beta_M>\alpha n/2\ge5\alpha^2n/2$, using $0<\alpha\le1/5$. This includes $M=k^*=0$ when the initial cap is already reached. [given, step 2.1, step 3.1, step 1.2, algebra]

5.1 If the construction continues after $k^*$, step 4.1 gives finite stopping with $c_M=n/2$, each stage loss less than $\pi/8$, and $\beta_M>\pi/4$. Hence $c_M\sin^2\beta_M>n/4$. Since $5\alpha^2/2\le1/10<1/4$ and $n>0$, $n/4>5\alpha^2n/2$. Along with the tail bounds from steps 3.1 and 4.1, this proves every assertion. [given, step 3.1, step 4.1, step 1.2, algebra] ∎

## Source notes

The critical-step and stopping-case claims are attributed to the cited article. The proof above derives the construction's invariants and angle budgets from the declared mathematical suppliers; the article citation is attribution only.
