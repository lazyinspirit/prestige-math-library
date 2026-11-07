---
id: thm-ball-inflation-for-moment-curve
kind: theorem
title: Ball Inflation for Moment-Curve Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
- def-l2-decoupling-constant-for-moment-curve
- lem-strong-multilinear-kakeya-for-moment-curve-plates
- lem-bandlimited-tools-for-weighted-decoupling
- thm-complex-holder-minkowski-and-the-quotient-norm
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§6, Theorem 6.6, pp. 643–648: ball inflation from radius rho^-(k+1)
      to rho^-k.'
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1\le k\le n-1$, $p\ge2n$, $E\ge100n$, $K\ge2n!$, and $0<\rho<K^{-1}$. Put $M_n=n!$. Let $I_1,\ldots,I_{M_n}\subset[0,1]$ be intervals of length $K^{-1}$ with pairwise distances at least $K^{-1}$. Let $B\subset\mathbb R^n$ be a ball of radius $\rho^{-(k+1)}$, and let $\mathbb B$ be a finite cover of $B$ by balls $\Delta$ of radius $\rho^{-k}$ whose centers lie in $B$, with overlap at most a fixed integer $H$. For each $i$, let $\mathcal J_i$ be a finite family of pairwise disjoint intervals of length $\rho$ contained in $I_i$. For a ball $U$, define
$$A_i(U)=\left(\sum_{J\in\mathcal J_i}\|E_J^{(n)}g\|_{L^{{pk}/{n}}_\sharp(w_{U,E})}^2\right)^{1/2}.$$
Then for every $g\in L^1([0,1])$ and every $\varepsilon>0$,
$$\left(\frac1{|\mathbb B|}\sum_{\Delta\in\mathbb B}\prod_{i=1}^{M_n}A_i(\Delta)^{p/M_n}\right)^{1/p}\le C_{n,k,p,E,K,H,\varepsilon}\rho^{-\varepsilon}\prod_{i=1}^{M_n}A_i(B)^{1/M_n},$$
where $|\mathbb B|$ is the number of balls in the cover and the constant is independent of $g$, $\rho$, and the center of $B$.

## Statement references

[Decoupling constants and interval partitions]([[def-l2-decoupling-constant-for-moment-curve]])

[Moment-curve extension operator]([[def-moment-curve-extension-operator]])

[Polynomially weighted norms]([[def-polynomial-decoupling-weight-and-norm]])

[BDG, Theorem 6.6](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)



## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The strong inside-integral moment bound and the local-constancy/Fourier tools are [[lem-strong-multilinear-kakeya-for-moment-curve-plates]] and [[lem-bandlimited-tools-for-weighted-decoupling]]. Holder/Minkowski and the norm conventions are the other listed dependencies.

## Proof

1.1 Put $r=\rho^{-k}$, $L=\rho^{-(k+1)}$, $M=n!$, $q=pk/n\ge2$ and $a=n/(kM)=p/(qM)$. Write $H$ for the fixed overlap bound of the cover. Because its centers lie in $B$, all small balls lie in $2B$. Integrating their indicators and using that they cover $B$ gives $c_n(L/r)^n\le|\mathbb B|\le C_nH(L/r)^n$. These uniform cardinality bounds are required for the normalized average. [given, F1, construct, algebra]

2.1 For each interval $J$ choose its midpoint $t_J$ and a disjoint rectangular tiling in orientation $(V_k(t_J),V_k(t_J)^\perp)$ with short side $10nr$ and long side $10nL$. Keep the finitely many tiles meeting $2B$; they lie in $C_nB$. On a tile let $F_J$ be the supremum of the radius-$r$ normalized weighted $L^q$ norm over its doubled tile, and set it to zero off the retained tiles. For $x\in\Delta$ the center of $\Delta$ belongs to the doubled tile containing $x$, since its distance to $x$ is at most $r$. Therefore $\|E_Jg\|_{L^q_\sharp(w_{\Delta,E})}\le F_J(x)$. The local Fourier helper gives $\operatorname{av}_{C_nB}F_J^q\le Cb_J^q$, where $b_J=\|E_Jg\|_{L^q_\sharp(w_{B,E})}$. Zero $b_J$ means $E_Jg$ is identically zero by positivity of the weight and continuity, so omit that term. [given, F1, construct, algebra]

3.1 Set $B_i=(\sum_{J\in\mathcal J_i}b_J^2)^{1/2}=A_i(B)$ and $H_i(x)=\sum_{J\in\mathcal J_i}b_J^{2-q}F_J(x)^q$. For $q=2$ the following is equality; for $q>2$ Holder with conjugate exponents $q/2$ and $q/(q-2)$ gives
$$ \left(\sum_JF_J(x)^2\right)^{q/2}\le B_i^{q-2}H_i(x). $$
Each $H_i$ is a positive linear combination of tile indicators, with parameter $t_J\in I_i$, and its average is at most $C\sum_Jb_J^2=CB_i^2$. The strong Kakeya moment bound applies after the common spatial dilation factor $r^2/L$: the standard parameter is $R'=(L/r)^2=\rho^{-2}$, whose scaled short and long sides are $r,L$. Fixed side-length and containing-ball enlargements change only dimensional constants; they can also be partitioned or covered by a fixed number of standard plates. Hence $\operatorname{av}_{C_nB}\prod_iH_i^a\le C_\tau\rho^{-2\tau}\prod_iB_i^{2a}$ for any $\tau>0$. [given, F1, construct, algebra]

4.1 By the pointwise domination on every $\Delta$, bounded overlap and the cardinality bounds, the $p$th power of the claimed left side is at most
$$ C_nH\operatorname{av}_{C_nB}\prod_i\left(\sum_JF_J^2\right)^{p/(2M)}\le C_{\tau,H}\rho^{-2\tau}\prod_iB_i^{(q-2)p/(qM)+2a}=C_{\tau,H}\rho^{-2\tau}\prod_iB_i^{p/M}. $$
The exponent identity uses $a=p/(qM)$. Choose $\tau=p\varepsilon/2$ and take the $p$th root. If a whole family is zero the original inequality is immediate, so no division by zero has occurred. This proves all $1\le k<n$, in particular every $n\ge k\ge3$, with the exact original norms, sharp range and arbitrary finite disjoint interval families. [given, F1, construct, algebra] ∎

