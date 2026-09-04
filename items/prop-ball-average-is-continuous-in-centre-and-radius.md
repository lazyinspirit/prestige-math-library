---
id: prop-ball-average-is-continuous-in-centre-and-radius
kind: proposition
title: "Ball averages vary continuously with the centre and radius"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ball-average-operator-on-r-n, def-countable-choice, thm-dominated-convergence, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-lebesgue-measure-under-dilations-and-reflections]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Lemma 3.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. The map
$$\Phi:\mathbb{R}^n\times(0,\infty)\to\mathbb{C},\qquad \Phi(x,r):=A_rf(x),$$
is continuous.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a locally integrable function $f$, a point $(x,r)\in\mathbb{R}^n\times(0,\infty)$, and a sequence $(x_k,r_k)\to(x,r)$ with $r_k>0$.

[L1] The ball average is $$A_rf(x)=\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}f(y)\,d\lambda(y).$$ ([[def-ball-average-operator-on-r-n]])

[L2] Euclidean balls have positive finite Lebesgue measure. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[L3] Lebesgue measure scales by $c^n$ under dilation by $c>0$. ([[thm-lebesgue-measure-under-dilations-and-reflections]])

[L4] Dominated convergence passes pointwise almost-everywhere limits through an integrable majorant. ([[thm-dominated-convergence]])

## Proof

**Proof technique:** direct.

1.1 Choose $\rho>0$ with $0<\rho<r/2$. For all sufficiently large $k$, [given, choose, algebra] $|r_k-r|<\rho$ and $\|x_k-x\|_2<\rho$. Then $$B(x,r-\rho)\subseteq B(x_k,r_k)\subseteq B(x,r+2\rho).$$ Since $f$ is locally integrable, the function $$g:=|f|\,\mathbf{1}_{B(x,r+2\rho)}$$ is integrable. [given, choose, algebra]

1.2 Put $\chi_k:=\mathbf{1}_{B(x_k,r_k)}$ and $\chi:=\mathbf{1}_{B(x,r)}$. [algebra] If $y\notin\partial B(x,r)$, then $\|y-x\|_2\ne r$, so for all sufficiently large $k$ the membership of $y$ in $B(x_k,r_k)$ agrees with its membership in $B(x,r)$. Thus $\chi_k(y)\to\chi(y)$ for every $y\notin\partial B(x,r)$. [algebra]

1.3 The boundary sphere satisfies [L2, L3, algebra] $$\partial B(x,r)\subseteq B(x,r+\tfrac1m)\setminus B(x,r-\tfrac1m) \qquad(m>1/r).$$ By [L2] and [L3], $$\lambda\!\left(B(x,r+\tfrac1m)\setminus B(x,r-\tfrac1m)\right) =\lambda(B(0,1))\left((r+\tfrac1m)^n-(r-\tfrac1m)^n\right)\to0,$$ so $\lambda(\partial B(x,r))=0$. [L2, L3, algebra]

1.4 By [L2] and [L3], [L2, L3, algebra] $$\lambda(B(x_k,r_k))=\lambda(B(0,1))\,r_k^n\to \lambda(B(0,1))\,r^n=\lambda(B(x,r)).$$ The limit denominator is positive by [L2]. [L2, L3, algebra]

2.1 Steps 1.1, 1.2, and 1.3 let us apply [L4] to [step 1.1, step 1.2, step 1.3, L4] $f\chi_k$, dominated by $g$, and obtain $$\int f(y)\chi_k(y)\,d\lambda(y)\to\int f(y)\chi(y)\,d\lambda(y).$$ In other words, $$\int_{B(x_k,r_k)}f\,d\lambda\to\int_{B(x,r)}f\,d\lambda.$$ [step 1.1, step 1.2, step 1.3, L4]

3.1 Combining steps 2.1 and 1.4 yields [L1, step 2.1, step 1.4, algebra] $$A_{r_k}f(x_k)\to A_rf(x).$$ Since the approximating sequence was arbitrary, $\Phi$ is continuous. [L1, step 2.1, step 1.4, algebra] ∎
