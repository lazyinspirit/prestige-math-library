---
title: Mixing for two nearby nested sets — Lemma 3.7
status: published
research_item: lem-expander-sync-lem-3-7
dependency_level: 6
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 20–21, Lemma 3.7 and its proof
      statement: For nearby nested sets X and Y with |Y| at most n/2, the count
        e(X,Y^c) has the stated two-sided mixing bounds with error epsilon.
      hypotheses: G is an (n,d*,alpha,c-,c+)-expander, epsilon is positive, X is
        contained in Y, and |Y| is at most (1+delta)|X|, where
        delta=epsilon/(c+-c-).
      reading_limits: The extracted article text of Lemma 3.7 and its proof on PDF pp.
        20–21 was inspected. This reference attributes the article claim and
        method; the proof below uses the declared local suppliers.
---

PDF p. 20: ` Lemma 3.7 and proof `; PDF p. 21: ` Lemma 3.7 and proof `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [lem-expander-sync-cut-identity](item-lem-expander-sync-cut-identity)
- [lem-expander-sync-lem-3-4](item-lem-expander-sync-lem-3-4)


## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander, with $c^+\ne c^-$, and let $\varepsilon>0$. Thus $n=|V|>0$, and the centered Laplacian $\Delta_L=L-d^*I+(d^*/n)J$ obeys $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$ in quadratic-form order. For $P,Q\subseteq V$, let $e(P,Q)$ be the ordered adjacency count and $P^c=V\setminus P$. Put $\delta=\varepsilon/(c^+-c^-)$. If $X\subseteq Y\subseteq V$, $|Y|\le n/2$, and $(1+\delta)|X|\ge|Y|$, then

$$(1+c^--\varepsilon)\frac{d^*}{n}|X||Y^c|\le e(X,Y^c)\le(1+c^++\varepsilon)\frac{d^*}{n}|X||Y^c|.$$

## Statement references

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

[def-expander-sync-edge-count](item-def-expander-sync-edge-count)

## Facts & Assumptions

[F1] In the expander definition, $n>0$ and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$, where matrix order means nonnegativity of the corresponding quadratic forms ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

[F2] For every $Z\subseteq V$, writing $q(Z)=|Z||Z^c|$, the cut bound is $c^-(d^*/n)q(Z)\le e(Z,Z^c)-(d^*/n)q(Z)\le c^+(d^*/n)q(Z)$ ([lem-expander-sync-lem-3-4](item-lem-expander-sync-lem-3-4)).

[F3] For nested sets $X\subseteq Y$, $2e(X,Y^c)=e(X,X^c)+e(Y,Y^c)-e(Y\setminus X,(Y\setminus X)^c)$ ([lem-expander-sync-cut-identity](item-lem-expander-sync-cut-identity)). The edge count is the finite ordered adjacency sum, and complements are relative to $V$ ([def-expander-sync-edge-count](item-def-expander-sync-edge-count)).

## Proof

**Given:** An expander, parameters and nested sets satisfying the statement.

**Goal:** Prove the two bounds for $e(X,Y^c)$.

1.1 Put $B=Y\setminus X$, $a=|X|$, $b=|B|$, and $c=|Y^c|$. The three sets $X,B,Y^c$ partition $V$, so $n=a+b+c$, $|Y|=a+b$, and $b\le\delta a$. Also $c\ge n/2$ and $a\le c$. Consequently $q(X)=a(b+c)$, $q(Y)=(a+b)c$, $q(B)=b(a+c)$, and $q(X)+q(Y)-q(B)=2ac$. By [F3], $e(X,Y^c)-(d^*/n)ac$ is half the sum of the centered cut counts for $X$ and $Y$ minus that for $B$. [F3, algebra]

2.1 Since $V$ is nonempty, testing the difference of the two order bounds in [F1] on a nonzero coordinate vector gives $(c^+-c^-)d^*\ge0$. If $d^*<0$, then $c^+-c^-<0$, hence $\delta<0$. The inequalities $0\le b\le\delta a$ force $a=b=0$, and the desired bounds are both $0\le0$ by the ordered-count definition. If $d^*=0$, [F2] makes all three cuts in [F3] zero, so $e(X,Y^c)=0$ and both bounds again hold. [F1, F2, F3, step 1.1, algebra]

3.1 It remains to consider $d^*>0$. Step 2.1 and $c^+\ne c^-$ give $w:=c^+-c^->0$, so $\delta=\varepsilon/w>0$. Apply the lower and upper bounds in [F2] to the three centered cut counts in step 1.1, reversing the choice of bound for the subtracted cut. This yields $c^-(d^*/n)ac-(d^*/2n)wb(a+c)\le e(X,Y^c)-(d^*/n)ac\le c^+(d^*/n)ac+(d^*/2n)wb(a+c)$. [F2, step 1.1, step 2.1, algebra]

4.1 Because $b\le\delta a$ and $a\le c$, we have $wb(a+c)/2\le w\delta ac=\varepsilon ac$. Multiplying by $d^*/n>0$ and substituting into step 3.1 proves the asserted bounds. Together with step 2.1, this covers every defined case. [step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes

The statement and cut-polarization method are attributed to Lemma 3.7 of Expander graphs are globally synchronizing. The proof uses the local suppliers and explicitly handles the real-parameter cases allowed by their definition; the article is not used as a proof premise.
