---
id: lem-fd-polynomial-ode-continuation
kind: lemma
title: "Continuation of bounded polynomial ODE solutions"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [thm-picard-lindelof-local-existence-and-uniqueness, thm-cauchy-criterion-via-lub, cor-vector-valued-ftc-and-lipschitz-bound, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]
dependency_roles:
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-cauchy-criterion-via-lub: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.6, Lemma 2.14 and Corollary 2.15"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $N\ge1$, let $F:\mathbb R^N\to\mathbb R^N$ be a polynomial map, and let $T_*>0$. If $x\in C^1([0,T_*),\mathbb R^N)$ solves $x'(t)=F(x(t))$ and there is $R\ge0$ such that $\|x(t)\|_2\le R$ for every $0\le t<T_*$, then there are $\epsilon>0$ and a solution $\widetilde x\in C^1([0,T_*+\epsilon),\mathbb R^N)$ of the same ODE with $\widetilde x(t)=x(t)$ for $0\le t<T_*$. Thus a finite right endpoint of a bounded finite-dimensional polynomial ODE trajectory is extendible.

## Statement references

[Gerald Teschl, *Ordinary Differential Equations and Dynamical Systems*, §2.6, Lemma 2.14 and Corollary 2.15](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

## Facts & Assumptions

**Given:** The data in the Statement, with $x(0)=x_0\in\mathbb R^N$.

[F1] If $F$ is continuous and locally Lipschitz in its state variable on an open domain, Picard–Lindelöf gives a unique local solution through every point of that domain ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F2] Every Cauchy sequence of real numbers converges to a real ([[thm-cauchy-criterion-via-lub]]).

[F3] If a continuous curve $f:[a,b]\to\mathbb R^N$ is differentiable on $(a,b)$ and $\|f'(t)\|_2\le M$, then $\|f(t)-f(s)\|_2\le M|t-s|$ for all $s,t\in[a,b]$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F4] A continuous curve solves an IVP exactly when it satisfies the associated oriented Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

## Proof

**Proof technique:** direct polynomial bound and endpoint continuation.

1.1 Write each component as a finite sum $F_i(x)=\sum_{\alpha\in E_i}c_{i\alpha}x^\alpha$. On any bounded coordinate box, for each exponent $q\ge1$ the identity $a^q-b^q=(a-b)\sum_{j=0}^{q-1}a^{q-1-j}b^j$ bounds the difference of each monomial at two points by a finite constant times their Euclidean distance; telescoping over the $N$ factors and summing the finitely many monomials proves that $F$ is locally Lipschitz there. It is also continuous, so [F1] applies at every state. [given, algebra, F1]

2.1 Put $R_+=\max(1,R)$ and $M_R=\bigl(\sum_{i=1}^N(\sum_{\alpha\in E_i}|c_{i\alpha}|R_+^{|\alpha|})^2\bigr)^{1/2}$. Since $|x_j(t)|\le R$ for each coordinate, the finite polynomial sums give $\|F(x(t))\|_2\le M_R$ for all $t<T_*$. [given, step 1.1, algebra]

3.1 For $0\le s<t<T_*$, apply [F3] to $x|_{[s,t]}$ to obtain $\|x(t)-x(s)\|_2\le M_R(t-s)$. Thus, for $t_n=T_*(1-1/n)$, $n\ge2$, each coordinate sequence $(x_i(t_n))_{n\ge2}$ is Cauchy because $|x_i(t_n)-x_i(t_m)|\le\|x(t_n)-x(t_m)\|_2\le M_R|t_n-t_m|$. By [F2], each coordinate has a real limit $\xi_i$; set $x_*=(\xi_1,\ldots,\xi_N)\in\mathbb R^N$. For any $\varepsilon>0$, choose for each of the finitely many coordinates an index after which $|x_i(t_n)-\xi_i|<\varepsilon/\sqrt N$, and take the maximum of those indices. Then $\|x(t_n)-x_*\|_2^2=\sum_{i=1}^N|x_i(t_n)-\xi_i|^2<\varepsilon^2$, so $x(t_n)\to x_*$. For any $t<T_*$ and all sufficiently large $n$ with $t_n\ge t$, the same Lipschitz bound gives $\|x(t)-x_*\|_2\le M_R(t_n-t)+\|x(t_n)-x_*\|_2$; letting $n\to\infty$ yields $\|x(t)-x_*\|_2\le M_R(T_*-t)$, so $x(t)\to x_*$. The closed-ball bound passes to the limit, hence $\|x_*\|_2\le R$. [given, F2, F3, step 2.1]

4.1 By step 1.1 the polynomial field is locally Lipschitz near $x_*$. Apply [F1] to the IVP at $(T_*,x_*)$ to obtain a local solution $y$ on an open interval about $T_*$. [step 1.1, step 3.1, F1]

5.1 By [F4], $x(t)=x_0+\int_0^tF(x(s))\,ds$ for $t<T_*$ and $y(t)=x_*+\int_{T_*}^tF(y(s))\,ds$ near $T_*$. The limit in step 3.1 and continuity of $F$ extend the first identity to $t=T_*$. Define $\widetilde x=x$ before $T_*$ and $\widetilde x=y$ from $T_*$ onward, assigning the common value $x_*$ at $T_*$. The joined curve is continuous and the two integral identities add to its Volterra equation on $[0,T_*+\epsilon)$ for some $\epsilon>0$; [F4] therefore makes it a $C^1$ solution of the same ODE extending $x$. [step 3.1, step 4.1, F4]

6.1 The extension in step 5.1 agrees with the original curve at every $t<T_*$ and is defined beyond $T_*$. This proves the statement. [step 5.1] ∎

