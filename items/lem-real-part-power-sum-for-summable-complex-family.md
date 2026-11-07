---
dependency_level: 0
id: lem-real-part-power-sum-for-summable-complex-family
kind: lemma
title: "Real-part power sums for a summable complex family"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-ftc-second-part
  - lem-riemann-integral-linearity
  - lem-continuous-functions-riemann-integrable
  - thm-geometric-series
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-polar-form-with-unique-principal-argument
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
sources:
  references:
    - title: "Asif Zaman, Analytic Estimates for the Chebotarev Density Theorem and Their Applications"
      url: "https://www.math.toronto.edu/zaman/files/thesis.pdf"
      locator: "Theorem 6.2.2 and its complete proof, printed pp. 141–142. The kernel assertions of Lemma 6.2.1 and the specified countable-family extension are proved locally below."
---

## Statement

Let $J$ be a nonempty finite subset of $\mathbb N$ or a given subset of $\mathbb N$, and let $(z_j)_{j\in J}$ be complex numbers such that $0<S:=\sum_{j\in J}|z_j|<\infty$. Sums use the specified natural indexing, with missing indices padded by zero. The maximum $R:=\max_{j\in J}|z_j|$ is attained and positive. Put $M:=S/R$. For every $\varepsilon>0$ there is an integer $h$ such that
$$1\le h\le\lfloor(12+\varepsilon)M\rfloor,\qquad \operatorname{Re}\sum_{j\in J}z_j^h\ge\frac{\varepsilon}{48+5\varepsilon}R^h.$$
Every power sum displayed here converges absolutely. No choice principle beyond the specified indexing is assumed.

## Statement references

[Zaman, Theorem 6.2.2](https://www.math.toronto.edu/zaman/files/thesis.pdf). The specified-index extension and kernel calculation below are local adaptations.

## Facts & Assumptions

**Given:** The family, positive finite mass, specified indexing and positive $\varepsilon$ in the Statement.

[F1] Continuous real functions have oriented Riemann integrals, with linearity, monotonicity, the supremum bound and FTC. Complex integrals mean the two real component integrals ([[thm-ftc-second-part]], [[lem-riemann-integral-linearity]], [[lem-continuous-functions-riemann-integrable]]).

[F2] Exponential has its addition law, is entire with derivative itself, and $e^{iy}=\cos y+i\sin y$ with modulus one. A nonzero complex number has its unique principal polar representation ([[thm-complex-exponential-addition-and-real-extension]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-polar-form-with-unique-principal-argument]]).

[F3] For real $0\le r<1$, $\sum_{n\ge0}r^n=(1-r)^{-1}$ ([[thm-geometric-series]]). Complex finite geometric identities follow by multiplying the finite sum by $1-w$; their absolute tails are bounded using this real assertion.

## Proof

1.1 For any $c>0$, the set $\{j\in J:|z_j|\ge c\}$ has at most $\lfloor S/c\rfloor$ elements: any larger finite set would make a natural partial sum exceed $S$. If such a subset of $\mathbb N$ were infinite, repeatedly taking its least unused index would supply that forbidden finite set. Thus no countable selection is used. Let $R$ first denote the supremum of the moduli. It is positive and at most $S$. The finite nonempty set of indices with $|z_j|>R/2$ has a maximum modulus, which exceeds every outside modulus and must equal $R$. Choose the least index $j_0$ attaining it. Put $w_j=z_j/R$, $r_j=|w_j|$, $w_0=w_{j_0}$ and $M=\sum_jr_j\ge1$. For every integer $m\ge1$, the series $s_m:=\sum_jw_j^m$ has absolute tails at most the corresponding tails of $\sum_jr_j$, because $r_j\le1$. This proves absolute convergence directly by completeness of $\mathbb C$. [given, construct, algebra]

1.2 For an integer $K\ge1$, put $u_m=1-m/(K+1)$ for $1\le m\le K$, and $P_K(r,\theta)=\sum_{m=1}^Ku_mr^m\cos(m\theta)$. Expanding a finite square and counting the pairs whose difference is $m$ gives $$1+2P_K(1,\theta)=\frac1{K+1}\left|\sum_{a=0}^Ke^{ia\theta}\right|^2\ge0.$$ In particular $P_K(1,\theta)\ge-1/2$ and $P_K(1,0)=K/2$. These identities include angles that are multiples of $2\pi$; no division by a sine occurs. [F2, construct, algebra]

2.1 For fixed $0\le r<1$, multiplication of finite geometric sums and their explicit tails gives $$\Pi_r(v):=\frac{1-r^2}{1-2r\cos v+r^2}=1+2\sum_{n\ge1}r^n\cos(nv).$$ The denominator is $|1-re^{iv}|^2\ge(1-r)^2>0$, so $\Pi_r\ge0$. The tail after $n=L$ is uniformly at most $2r^{L+1}/(1-r)$. Applying real FTC to the real and imaginary components of $e^{inv}$ gives its integral on $[0,2\pi]$ equal to zero for nonzero integer $n$, and $2\pi$ for $n=0$. Therefore the mean of $\Pi_r$ is one and finite trigonometric multiplication gives $$\frac1{2\pi}\int_0^{2\pi}[1+2P_K(1,\theta-v)]\Pi_r(v)\,dv=1+2P_K(r,\theta)\ge0.$$ The uniform geometric tail times the bounded finite polynomial justifies the integral limit by the supremum bound in [F1]. Thus $P_K(r,\theta)\ge-1/2$ also for $r<1$, while step 1.2 covers $r=1$. [F1, F2, F3, step 1.2, construct, algebra]

3.1 For $0\le r\le1/3$, [F3] gives $|P_K(r,\theta)|\le r/(1-r)\le3r/2$. For all $0\le r\le1$, the finite coefficient sum gives $|P_K(r,\theta)|\le r\sum_m u_m=Kr/2$. Write $p_K(w)=\operatorname{Re}\sum_{m=1}^Ku_mw^m$ on $|w|\le1$. Apply polar form to one given nonzero $w$ (and inspect $w=0$) to obtain all three bounds for $p_K(w)$ from steps 1.2 and 2.1. This does not choose phases for an infinite family. [F2, F3, step 1.2, step 2.1, algebra]

4.1 Define nonnegative weights $v_m=u_m(1+\operatorname{Re}w_0^m)$ and $T_K=\sum_{m=1}^Kv_m\operatorname{Re}s_m$. The identity $\operatorname{Re}a\operatorname{Re}b=(\operatorname{Re}(ab)+\operatorname{Re}(a\overline b))/2$ gives $$T_K=\sum_j\left[p_K(w_j)+\tfrac12p_K(w_j\overline w_0)+\tfrac12p_K(w_jw_0)\right].$$ The bracket has absolute value at most $Kr_j$, by step 3.1 and $|w_0|=1$. Its canonical tail is therefore at most $K\sum_{j>n}r_j\to0$. This justifies the finite-sum/series interchange, including an infinite $J$. Normalization was by the POSITIVE REAL number $R$, so real parts have not been rotated. [step 1.1, step 3.1, construct, algebra]

5.1 At $j=j_0$, the middle polynomial in step 4.1 is $p_K(1)/2=K/4$, while the other two terms have lower bounds $-1/2$ and $-1/4$. Thus this contribution is at least $K/4-3/4$. For another index with $r_j\ge1/3$, the three lower bounds sum to $-1\ge-3r_j$. For $r_j\le1/3$, the three absolute bounds in step 3.1 sum to at most $3r_j$, giving the same lower bound, including $r_j=0$. First sum on finite initial sets containing $j_0$ and then use the absolute tails from step 4.1. This proves $$T_K\ge K/4-3/4-3(M-1)=K/4-3M+9/4.$$ [step 1.1, step 1.2, step 3.1, step 4.1, algebra]

6.1 Take $K=\lfloor(12+\varepsilon)M\rfloor\ge12$ and $a=\varepsilon/(48+5\varepsilon)$. Step 5.1 and $K\ge(12+\varepsilon)M-1$ give $T_K\ge\varepsilon M/4+2$. The nonnegative weights satisfy $\sum_m v_m=K/2+p_K(w_0)\le K$. If all $\operatorname{Re}s_m<a$ for $1\le m\le K$, multiplication by these weights gives $T_K\le aK\le\varepsilon(12+\varepsilon)M/(48+5\varepsilon)<\varepsilon M/4$, because $48+4\varepsilon<48+5\varepsilon$. This contradiction supplies an $h$ in the asserted integer range with $\operatorname{Re}s_h\ge a$. Multiplying by the positive real $R^h$ proves the exact conclusion. Step 1.1 already proves the asserted maximum and absolute convergence, including finite families and zero individual terms. [step 1.1, step 3.1, step 4.1, step 5.1, given, algebra] ∎

## Remarks

The complete local proof is supplied for independent review. The use at $\varepsilon=1$ has lower bound $R^h/53$ and $h\le13M$. The finite kernel assertions and summable extension are proved here; the thesis's citation of the LMO kernel lemma is not an external theorem premise.
