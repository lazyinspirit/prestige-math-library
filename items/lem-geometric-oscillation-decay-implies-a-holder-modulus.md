---
id: lem-geometric-oscillation-decay-implies-a-holder-modulus
kind: lemma
title: "Geometric oscillation decay implies a Hölder modulus"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-ball-average-operator-on-r-n, def-real-power]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorem 5 and the oscillation-to-Hölder-modulus conclusion in its proof, printed pp. 1-7 (read in full); the same dyadic conversion closes the proof of Teorema 1 in [V]"
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Teoremi 1-3 and the oscillation decay at the end of the proof of Teorema 1, printed pp. 1-7 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $u:\Omega\to\mathbb R$ and let $\theta\in(0,1)$ satisfy
$$\operatorname{osc}_{B_r(x)}u\le\theta\,\operatorname{osc}_{B_{2r}(x)}u\qquad\text{whenever }B_{2r}(x)\Subset\Omega,$$
where $\operatorname{osc}_Bu:=\sup_Bu-\inf_Bu$, and assume $\operatorname{osc}_{B_R(x_0)}u<\infty$ for every $B_R(x_0)\Subset\Omega$. Put $\alpha_0:=\frac{\log(1/\theta)}{\log2}>0$ and $\alpha:=\min\{\alpha_0,1/2\}\in(0,1)$. Then for every ball $B_R(x_0)\Subset\Omega$ and all $x,y\in B_{R/2}(x_0)$,
$$|u(x)-u(y)|\le 4^{\alpha}\Bigl(\frac{|x-y|}{R}\Bigr)^{\alpha}\operatorname{osc}_{B_R(x_0)}u,$$
so $u$ is locally $\alpha$-Hölder in $\Omega$ ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]) with $[u]_{0,\alpha;B_{R/2}(x_0)}\le4^{\alpha}R^{-\alpha}\operatorname{osc}_{B_R(x_0)}u$; moreover for every $0<\alpha'<\alpha$ the same estimate holds with $\alpha'$ and constant $4^{\alpha'}$.

## Facts & Assumptions

**Given:** an integer $n\ge1$, an open set $\Omega\subseteq\mathbb R^n$, a function $u:\Omega\to\mathbb R$ with finite oscillation on every compactly contained ball, a number $\theta\in(0,1)$ with $\operatorname{osc}_{B_r(x)}u\le\theta\operatorname{osc}_{B_{2r}(x)}u$ whenever $B_{2r}(x)\Subset\Omega$, and $\alpha_0=\log(1/\theta)/\log 2$, $\alpha=\min\{\alpha_0,1/2\}$.

[F1] For every $x$ and $r>0$, $\operatorname{osc}_{B_r(x)}u=\sup_{B_r(x)}u-\inf_{B_r(x)}u\in[0,+\infty]$, and if $A\subseteq B\subseteq\Omega$ then $\operatorname{osc}_Au\le\operatorname{osc}_Bu$, because a supremum over a smaller set is no larger and an infimum over a smaller set is no smaller.

[F2] Since $2^{\alpha_0}=1/\theta$ and $\theta=2^{-\alpha_0}$ by the definition of the real power, for $0<a\le1$ the map $\beta\mapsto a^{\beta}$ is nonincreasing, and for $a,b>0$ and real $\beta$ one has $(ab)^{\beta}=a^{\beta}b^{\beta}$ ([[def-real-power]]).

[F3] For a ball $B_R(x_0)$, the seminorm $[u]_{0,\alpha;B_R(x_0)}$ is the supremum of $|u(x)-u(y)|/|x-y|^{\alpha}$ over all $x,y\in B_R(x_0)$ with $x\ne y$ ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

## Proof

**Proof technique:** direct dyadic iteration of the oscillation hypothesis.

1.1 Fix a ball $B_R(x_0)\Subset\Omega$. The claim is immediate when $x=y$, so assume $x\ne y$ and put $d:=|x-y|>0$ and $z:=(x+y)/2$. Since $x,y\in B_{R/2}(x_0)$, the midpoint satisfies $z\in B_{R/2}(x_0)$ and $d<R$. The oscillation of $u$ on $B_R(x_0)$ is finite by hypothesis. If $d\ge R/2$, then $|u(x)-u(y)|\le\operatorname{osc}_{B_R(x_0)}u\le4^\alpha(d/R)^\alpha\operatorname{osc}_{B_R(x_0)}u$, so assume henceforth $d<R/2$. [given, F1]

1.2 Let $k\ge0$ be the largest integer with $2^{k+1}d\le R$; it exists because $d<R/2$, and the set of admissible exponents is bounded above. For every $0\le j\le k$ one has $B_{2^jd}(z)\Subset B_R(x_0)$: the midpoint $z$ is within $R/2$ of $x_0$, while $2^jd\le R/2$. Consequently the given oscillation hypothesis applies to the pair of radii $2^{j-1}d$ and $2^jd$ for every $1\le j\le k$. [given, F1, algebra]

2.1 Iterating the hypothesis, $\operatorname{osc}_{B_d(z)}u\le\theta^k\operatorname{osc}_{B_{2^kd}(z)}u$. Indeed the case $k=0$ is an equality, and if the claim holds for $k-1$ then it holds for $k$ by appending the one step $\operatorname{osc}_{B_{2^{k-1}d}(z)}u\le\theta\operatorname{osc}_{B_{2^kd}(z)}u$ supplied by step 1.2. Since $B_{2^kd}(z)\subseteq B_R(x_0)$, monotonicity of the oscillation gives $\operatorname{osc}_{B_d(z)}u\le\theta^k\operatorname{osc}_{B_R(x_0)}u$. [step 1.2, F1]

2.2 By maximality of $k$, $2^{k+2}d>R$, so $2^{-k}<4d/R$. Since $2^{-k}\le1$ and $\alpha\le\alpha_0$, [F2] gives $\theta^k=(2^{-k})^{\alpha_0}\le(2^{-k})^{\alpha}<(4d/R)^{\alpha}=4^{\alpha}(d/R)^{\alpha}$. [step 1.2, F2, algebra]

3.1 Since $x,y\in B_d(z)$, combining steps 2.1 and 2.2 gives $|u(x)-u(y)|\le\operatorname{osc}_{B_d(z)}u\le4^{\alpha}(d/R)^{\alpha}\operatorname{osc}_{B_R(x_0)}u$, which is the displayed inequality because $d=|x-y|$. Dividing by $|x-y|^{\alpha}$ and taking the supremum over $x\ne y$ in $B_{R/2}(x_0)$ yields $[u]_{0,\alpha;B_{R/2}(x_0)}\le4^{\alpha}R^{-\alpha}\operatorname{osc}_{B_R(x_0)}u$ by [F3]; since every point of $\Omega$ has a ball $B_R(x_0)\Subset\Omega$ about it and $R/2$ is available, $u$ is locally $\alpha$-Hölder on $\Omega$. [step 2.1, step 2.2, F1, F3]

4.1 For the exponent clause, fix $0<\alpha'<\alpha$. If $d<R/4$, then $4d/R<1$, and $\alpha'<\alpha\le\alpha_0$ gives $\theta^k=(2^{-k})^{\alpha_0}\le(2^{-k})^{\alpha'}<(4d/R)^{\alpha'}$. If $d\ge R/4$, then $|u(x)-u(y)|\le\operatorname{osc}_{B_R(x_0)}u\le4^{\alpha'}(d/R)^{\alpha'}\operatorname{osc}_{B_R(x_0)}u$. Combining these cases proves the claimed $\alpha'$ estimate with constant $4^{\alpha'}$; no choice principle is used. [step 2.1, step 2.2, F2, given] ∎
