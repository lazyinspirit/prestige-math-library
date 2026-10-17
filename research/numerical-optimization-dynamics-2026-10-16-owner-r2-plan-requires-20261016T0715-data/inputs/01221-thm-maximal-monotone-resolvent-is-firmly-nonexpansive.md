---
id: thm-maximal-monotone-resolvent-is-firmly-nonexpansive
kind: theorem
title: "A maximal-monotone resolvent is everywhere-defined and firmly nonexpansive"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-maximal-monotone-relation-on-euclidean-space
  - def-resolvent-of-a-monotone-relation
  - lem-one-point-extension-for-finite-dimensional-nonexpansive-map
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, Theorem 2 and §2"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.4"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Let $A$ be maximal monotone on $E=\mathbb R^n$ and let $\rho>0$. For every
$y\in E$ there is a unique $x\in E$ with $y-x\in\rho A(x)$. Thus the
resolvent from [[def-resolvent-of-a-monotone-relation]] is an everywhere-defined
map and, for all $y,y'\in E$,
$$\|J_{\rho A}y-J_{\rho A}y'\|_2^2\le \langle J_{\rho A}y-J_{\rho A}y',y-y'\rangle.$$
This is firm nonexpansiveness; it also implies the map is 1-Lipschitz.

## Facts & Assumptions

**Given:** A maximal-monotone relation $A$ and $\rho>0$.

[A1] The relation $A$ is maximal monotone and $\rho>0$.


[F1] [[def-maximal-monotone-relation-on-euclidean-space]]: monotonicity means $\langle x-x',a-a'\rangle\ge0$ for graph pairs, and maximality excludes any proper monotone graph extension.

[F2] [[def-resolvent-of-a-monotone-relation]]: $x\in J_{\rho A}(y)$ iff $y=x+\rho a$ for some $a\in A(x)$.

[F3] [[lem-one-point-extension-for-finite-dimensional-nonexpansive-map]]: a 1-Lipschitz map on any subset of $E$ admits a value at each added point satisfying all 1-Lipschitz inequalities.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle v,w\rangle|\le\|v\|_2\|w\|_2$.

## Proof


1.1 Transform every graph pair $(x,a)\in A$ into $p=x+\rho a$ and $q=x-\rho a$. If two graph pairs are used, then $$\|q-q'\|_2^2\le\|p-p'\|_2^2,$$ because the difference of the right and left sides is $4\rho\langle x-x',a-a'\rangle\ge0$ by [F1]. Also, if $p=p'$, this inequality forces $q=q'$. Thus the rule $T(p)=q$ is a well-defined 1-Lipschitz map on its range $D=\{x+\rho a:(x,a)\in A\}$. [A1, F1, construct, algebra]

2.1 Fix arbitrary $y\in E$. By [F3], extend $T$ at $y$ by some $q$ satisfying $\|q-(x-\rho a)\|_2\le\|y-(x+\rho a)\|_2$ for every $(x,a)\in A$. Set $\tilde x=(y+q)/2$ and $\tilde a=(y-q)/(2\rho)$. Expanding the squared inequality shows $\langle\tilde x-x,\tilde a-a\rangle\ge0$ for every graph pair, so adjoining $(\tilde x,\tilde a)$ preserves monotonicity. By maximality in [F1], it already belongs to $A$. Hence $y=\tilde x+\rho\tilde a$, proving existence. This also covers an initially empty graph: [F3] gives the extension and maximality rules out the empty graph. [A1, F1, F2, F3, step 1.1, algebra]

3.1 If $x,x'$ both satisfy $y-x\in\rho A(x)$ and $y-x'\in\rho A(x')$, monotonicity gives $0\le\langle x-x',(y-x)-(y-x')\rangle=-\|x-x'\|_2^2$. Thus $x=x'$, so the resolvent is single-valued. [A1, F1, F2, step 2.1, algebra]

4.1 For inputs $y,y'$, write $x=J_{\rho A}y$, $x'=J_{\rho A}y'$. Monotonicity applied to $(x,(y-x)/\rho)$ and $(x',(y'-x')/\rho)$ gives $$\|x-x'\|_2^2\le\langle x-x',y-y'\rangle.$$ Cauchy–Schwarz [F4] then gives $\|x-x'\|_2\le\|y-y'\|_2$ when $x\ne x'$, and the inequality is immediate when $x=x'$. This proves firm nonexpansiveness and the Lipschitz consequence. [A1, F1, F2, F4, step 3.1, algebra] ∎
