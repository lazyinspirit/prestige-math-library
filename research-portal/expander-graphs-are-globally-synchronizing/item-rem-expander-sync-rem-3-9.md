---
title: Strict forms of the nested mixing estimates — Remark 3.9
status: published
research_item: rem-expander-sync-rem-3-9
dependency_level: 8
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 22, Remark 3.9; pp. 24–26, amplification argument
      statement: Remark 3.9 says that inequalities in the conclusions of Lemmas 3.7
        and 3.8 can be made strict by making some assumption inequalities
        strict. The amplification argument uses strict nested-set size
        inequalities.
      hypotheses: The article's expander and nested-set hypotheses in Lemmas 3.7 and
        3.8 and the assumptions of the respective amplification steps.
      reading_limits: The extracted article text at the cited remark and applications
        was inspected. This citation attributes the remark and its applications;
        it is not a proof premise for the strict estimates below.
---

PDF p. 22: ` Remark 3.9 `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [lem-expander-sync-cut-identity](item-lem-expander-sync-cut-identity)
- [lem-expander-sync-lem-3-3](item-lem-expander-sync-lem-3-3)
- [lem-expander-sync-lem-3-4](item-lem-expander-sync-lem-3-4)
- [lem-expander-sync-lem-3-7](item-lem-expander-sync-lem-3-7)
- [lem-expander-sync-lem-3-8](item-lem-expander-sync-lem-3-8)


## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander as in [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), with $d^*>0$ and $c^+\ne c^-$. Thus $n=|V|>0$. For vertex subsets $P,Q$, let $e(P,Q)$ be the ordered adjacency count and $P^c=V\setminus P$ as in [def-expander-sync-edge-count](item-def-expander-sync-edge-count). Let $\varepsilon>0$ and put $\delta=\varepsilon/(c^+-c^-)$. If $X\subseteq Y\subseteq V$, $|Y|\le n/2$, and $|Y|<(1+\delta)|X|$, then the two bounds in Lemma 3.7 become strict:

$$(1+c^--\varepsilon)\frac{d^*}{n}|X||Y^c|<e(X,Y^c)<(1+c^++\varepsilon)\frac{d^*}{n}|X||Y^c|.$$

If in addition $\alpha>0$, $\rho>0$, $|X|\le\rho\alpha n$, and $1+c^--\varepsilon>0$, then the bound in Lemma 3.8 also becomes strict:

$$e(X,Y^c)>\frac{1+c^--\varepsilon}{2(1+\rho)\alpha}e(X,X).$$

For a phase configuration $\theta\in\mathbb R^V/(2\pi\mathbb Z)^V$ and angles $\beta,\gamma\in[0,\pi]$, these conclusions apply with $X=\mathcal C_\beta(\theta)$ and $Y=\mathcal C_\gamma(\theta)$ whenever these phase-tail sets are nested and satisfy the displayed hypotheses. Here $\mathcal C_\psi(\theta)=\{x\in V:\cos\theta_x\le\cos\psi\}$ for $0\le\psi\le\pi$, as in [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs). The stronger size hypotheses $|\mathcal C_\gamma|<n/2$, $|\mathcal C_\gamma|<(1+\delta)|\mathcal C_\beta|$, and, for the second conclusion, $|\mathcal C_\beta|<\rho\alpha n$ are sufficient when the other stated conditions also hold.

## Facts & Assumptions

[F1] The expander definition gives $n>0$ and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$, where order means nonnegative quadratic-form difference ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

[F2] For any subset $Z$, put $q(Z)=|Z||Z^c|$. Its centered cut count $e(Z,Z^c)-(d^*/n)q(Z)$ lies between $c^-(d^*/n)q(Z)$ and $c^+(d^*/n)q(Z)$ ([lem-expander-sync-lem-3-4](item-lem-expander-sync-lem-3-4)). For nested $X\subseteq Y$, twice $e(X,Y^c)$ equals the cut counts of $X$ and $Y$ minus that of $Y\setminus X$ ([lem-expander-sync-cut-identity](item-lem-expander-sync-cut-identity)).

[F3] Internal-edge mixing gives $e(X,X)\le(d^*/n)|X|^2+\alpha d^*|X|$ ([lem-expander-sync-lem-3-3](item-lem-expander-sync-lem-3-3)). Edge counts are nonnegative finite sums of adjacency entries ([def-expander-sync-edge-count](item-def-expander-sync-edge-count)).

[F4] Lemmas 3.7 and 3.8 give the corresponding non-strict estimates under their stated hypotheses ([lem-expander-sync-lem-3-7](item-lem-expander-sync-lem-3-7), [lem-expander-sync-lem-3-8](item-lem-expander-sync-lem-3-8)).

## Proof

**Given:** The expander, parameters and nested sets in the statement.

**Goal:** Establish the strict estimates and their phase-tail specialization.

1.1 Testing the difference of the order bounds in [F1] on a nonzero vector gives $(c^+-c^-)d^*\ge0$. Since $d^*>0$ and $c^+\ne c^-$, $w:=c^+-c^->0$ and $\delta=\varepsilon/w>0$. Put $a=|X|$, $b=|Y\setminus X|$, and $c=|Y^c|$. The strict size condition says $b<\delta a$, so $a>0$. Also $a\le|Y|\le n/2\le c$, hence $c>0$. [F1, algebra]

2.1 The three sets $X$, $Y\setminus X$, and $Y^c$ partition $V$. Thus $q(X)=a(b+c)$, $q(Y)=(a+b)c$, $q(Y\setminus X)=b(a+c)$, and $q(X)+q(Y)-q(Y\setminus X)=2ac$. Applying [F2] to the three centered cuts, with the bound reversed for the subtracted cut, gives $c^-(d^*/n)ac-(d^*/2n)wb(a+c)\le e(X,Y^c)-(d^*/n)ac\le c^+(d^*/n)ac+(d^*/2n)wb(a+c)$. [F2, step 1.1, algebra]

3.1 Because $b<\delta a$, $a+c>0$, and $a\le c$, we have $wb(a+c)/2<w\delta a(a+c)/2\le\varepsilon ac$. Multiplication by $d^*/n>0$ and substitution into step 2.1 proves both strict bounds. These refine the non-strict bounds recorded in [F4]. [F4, step 1.1, step 2.1, algebra]

4.1 For the additional hypotheses set $k=1+c^--\varepsilon>0$. By [F3] and $a/n\le\rho\alpha$, $e(X,X)\le d^*a(a/n+\alpha)\le(1+\rho)\alpha d^*a$. Step 3.1 and $c\ge n/2$ give $e(X,Y^c)>k(d^*/n)ac\ge kd^*a/2$. Since $2(1+\rho)\alpha>0$, the preceding internal-edge bound gives $kd^*a/2\ge k e(X,X)/(2(1+\rho)\alpha)$, proving the strict relative bound refining [F4]. [F3, F4, step 1.1, step 3.1, algebra]

5.1 The phase-tail definition identifies each displayed $\mathcal C_\psi(\theta)$ as a subset of $V$. Substituting the two nested sets into steps 3.1 and 4.1 proves the specialization; each strict size hypothesis in the last sentence implies the corresponding weak hypothesis used above. [step 3.1, step 4.1, algebra] ∎

## Source notes

Remark 3.9 of the cited article attributes the strictness observation. The estimates above are derived from the declared cut and internal-edge bounds. The conditions $d^*>0$ and, for the relative estimate, $1+c^--\varepsilon>0$ make the strictness argument explicit under the frozen expander definition; the article attribution alone is not used as proof.
