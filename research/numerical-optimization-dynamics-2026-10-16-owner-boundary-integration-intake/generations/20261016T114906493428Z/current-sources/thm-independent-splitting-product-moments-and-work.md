---
id: thm-independent-splitting-product-moments-and-work
kind: theorem
title: Independent splitting estimator moments and work
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-independent-fixed-level-splitting
  - lem-nested-level-probability-factorization
  - def-nested-rare-event-levels
  - thm-iid-monte-carlo-mean-moments
  - def-iid-monte-carlo-estimators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, §§2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Statement

Run [[alg-independent-fixed-level-splitting]] on the nested levels of [[def-nested-rare-event-levels]] with $N\ge1$ draws per level. Then
$
\mathbb E[\widehat p]=p,\qquad
\frac{\operatorname{Var}(\widehat p)}{p^2}
=\prod_{\ell=1}^L\left(1+\frac{1-p_\ell}{Np_\ell}\right)-1,
\qquad
W=N\sum_{\ell=1}^L c_\ell.
$
In absolute error,
$
\operatorname{Var}(\widehat p)\le\left(1+\frac1{4N}\right)^L-1.
$
For fixed $L$, the right side is $O(L/N)$, uniformly in the rarity of $p$; the relative-variance formula has factors $1/p_\ell$ and gives no uniform relative-efficiency claim.

## Facts & Assumptions

**Given:** Nested events and conditional laws, independent exact conditional samples at every level, $N\ge1$, and per-draw costs $c_\ell>0$.

[F1] [[def-nested-rare-event-levels]]: $p_\ell=P(A_\ell)/P(A_{\ell-1})>0$ and $p=P(A_L)$.

[F2] [[lem-nested-level-probability-factorization]]: $p=\prod_{\ell=1}^Lp_\ell$.

[F3] [[alg-independent-fixed-level-splitting]]: $\widehat p=\prod_{\ell=1}^L\widehat p_\ell$, with $\widehat p_\ell$ the level-$\ell$ mean of $N$ indicators sampled from $\pi_{\ell-1}$; the level arrays are independent and $W=N\sum_\ell c_\ell$.

[F4] [[thm-iid-monte-carlo-mean-moments]]: The mean of $N$ IID Bernoulli-$p_\ell$ indicators has expectation $p_\ell$ and variance $p_\ell(1-p_\ell)/N$.

## Proof

1.1 Under $\pi_{\ell-1}$, the indicator $\mathbf1_{A_\ell}$ is Bernoulli with success probability $P(A_\ell)/P(A_{\ell-1})=p_\ell$. Thus [F4] gives $\mathbb E\widehat p_\ell=p_\ell$ and $\mathbb E\widehat p_\ell^2=p_\ell^2+p_\ell(1-p_\ell)/N$ at each level. [F1, F3, F4, given]

2.1 The level arrays are independent by [F3], so $\mathbb E\widehat p=\prod_\ell p_\ell=p$ by [F2], and $\mathbb E\widehat p^2=\prod_\ell[p_\ell^2+p_\ell(1-p_\ell)/N]$. Subtracting $p^2=\prod_\ell p_\ell^2$ gives the displayed variance and, after division by $p^2>0$, the relative-variance formula. The work equality is the $LN$ declared draws weighted by their level costs in [F3]. [F2, F3, step 1.1, algebra]

3.1 Put $a_\ell=p_\ell^2$ and $v_\ell=p_\ell(1-p_\ell)/N$. Then $0\le a_\ell\le1$ and $0\le v_\ell\le1/(4N)$. By step 2.1 and finite product expansion,
$$\operatorname{Var}(\widehat p)=\prod_{\ell=1}^L(a_\ell+v_\ell)-\prod_{\ell=1}^La_\ell =\sum_{\varnothing\ne S\subseteq\{1,\ldots,L\}}\left(\prod_{\ell\in S}v_\ell\right)\left(\prod_{j\notin S}a_j\right) \le\sum_{\varnothing\ne S\subseteq\{1,\ldots,L\}}\left(\frac1{4N}\right)^{|S|} =\left(1+\frac1{4N}\right)^L-1.$$
[step 2.1, algebra]

4.1 For fixed $L$, expansion of the finite binomial gives $(1+1/(4N))^L-1\le \frac{L}{4N}(1+1/(4N))^{L-1}=O(L/N)$. The relative formula in step 2.1 still contains $(1-p_\ell)/(Np_\ell)$, so this absolute bound does not give a rarity-uniform relative bound. [step 2.1, step 3.1, algebra] ∎
