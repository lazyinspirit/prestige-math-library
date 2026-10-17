---
id: lem-scaled-complex-householder-and-givens-local-backward-error
kind: lemma
title: Scaled complex Householder and Givens steps have explicit local backward errors
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- alg-scaled-complex-householder-and-givens-updates
- lem-product-of-one-plus-deltas-gives-theta-n
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Stuart and Voss, Matrix Analysis and Algorithms
    url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
dependency_level: 2
---

## Statement

Use [[alg-scaled-complex-householder-and-givens-updates]] successfully, with $0<u<1$ and $(r-1)u<1$ for every Householder dimension $r$. For a nonzero Householder column define
$$e=(1+u)^{r+3}-1,\quad a_\phi=\frac{1+u}{(1-u)^4}-1,\quad a_\alpha=(1+a_\phi)(1+e)(1+u)-1,\quad d_v=a_\alpha+u(2+a_\alpha),$$
$$a_\tau=\frac{1+u}{(1-u)^{2r}}-1,\quad g=\frac{1+6u}{1-(r-1)u}-1,\quad c_U=2\bigl((1+a_\tau)(1+u)(1+6u)(1+g)-1\bigr),$$
$$\eta_H(r)=\max\{a_\alpha+8d_v,(1+u)c_U+3u\}.$$
For a Givens step define
$$a_2=\frac{1+u}{(1-u)^2}-1,\quad q=\max\left\{\left(\frac{1+u}{1-u}\right)^3-1,\frac{(1+a_2)(1+6u)(1+u)}{(1-u)^3}-1\right\},$$
$$\epsilon=\sqrt2(7u+6u^2)(1+q),\quad v=q+\epsilon,\quad \eta_G=2v+u+2q.$$
Each complete left update, including its target zero write, has an exact unitary representative $W$ and perturbation $E$ with
$$W(C+E)=C_+,\qquad \|E\|_F\le\eta\|C\|_F,$$
where $\eta=\eta_H(r)$ or $\eta_G$. Identity branches have $E=0$. The corresponding right relation follows by conjugate transposition. For a Givens application without an annihilation overwrite use the smaller coefficient $v$; for a Householder separate-block application use $(1+u)c_U+3u$. All coefficients are explicit and $O(ru)$ or $O(u)$ for fixed dimensions.

## Facts & Assumptions

**Given:** The stated real/complex arithmetic realization and successful no-underflow operations.

[F1] [[alg-scaled-complex-householder-and-givens-updates]] fixes the scaled norm, coefficient formation, product order, zero branches and exact target writes.

[F2] [[lem-product-of-one-plus-deltas-gives-theta-n]] bounds products of rounding factors and sequential addition expansions.

## Proof

1.1 A complex product's real/imaginary error is at most $2(2u+u^2)|z||w|\le6u|z||w|$: bound each of its four real products and then its two component additions. A sequential complex dot of length $r$ therefore has error at most $[6u+\gamma_{r-1}(1+6u)]\sum_i|z_i||w_i|=g\sum_i|z_i||w_i|$. These expansions include exact zeros. [given, F1, F2, algebra]

1.2 A scaled norm with $2r$ real components has its positive squared sum multiplied termwise by between $(1-u)^{2r+2}$ and $(1+u)^{2r+2}$, including two scaling factors. Square root and rescaling give relative norm error at most $e$. The independently scaled modulus of $x_1$ has lower/upper factors $(1-u)^4,(1+u)^4$, so the phase division error relative to $x_1/|x_1|$ is at most $a_\phi$; when $x_1=0$ it is zero. Thus for $N=\|x\|$, $\alpha_0=-\operatorname{phase}(x_1)N$ and $v_0=x-\alpha_0e_1$, one has $|\widehat\alpha-\alpha_0|\le a_\alpha N$ and $\|v-v_0\|\le d_vN$. For exponents at least one the lower deviation is bounded by the upper by convexity, justifying these two-sided estimates. [F1, F2, algebra]

1.3 The identity $H(v)^*H(v)=I$ follows by multiplying $I-2vv^*/(v^*v)$. The exact phase choice gives $H(v_0)x=\alpha_0e_1$ and $\|v_0\|\ge N$ by direct inner-product expansion. Normalization gives $\|a/\|a\|-b/\|b\|\|\le2\|a-b\|/\|b\|$; expanding the difference of unit-vector projectors therefore gives $\|H(v)-H(v_0)\|\le8d_v$. The target-column error is at most $(a_\alpha+8d_v)N$. [step 1.2, algebra]

2.1 The positive real sum defining $w$ has bounds $(1-u)^{2r}\|v\|^2\le w\le(1+u)^{2r}\|v\|^2$. The final division gives $|\widehat\tau\|v\|^2/2-1|\le a_\tau$. The dot-product error in step 1.1, the componentwise real multiplication by $\widehat\tau$ and the final complex multiplication bound the rank-one update error by $c_U\|B\|_F$. Final subtraction adds at most $u(3+c_U)\|B\|_F$. Combine this with step 1.3 over disjoint columns to get the Householder bound. For the zero column take the identity exactly. [F1, step 1.1, step 1.3, algebra]

3.1 For Givens formation at stored $z,w$, the norm $h$ has relative factors between $(1-u)^3$ and $(1+u)^3$, since its unscaled four-component squared sum has at most four rounding factors per term. The norm $n_z$ has exponents two. Let $G_0$ be the exact canonical Givens annihilator for $(z,w)$, with coefficients $c_0=|z|/\|(z,w)\|$ and $s_0=(z/|z|)\overline w/\|(z,w)\|$ when $z\ne0$. The phase error is at most $a_2$; the coefficient numerator, denominator, six-operation complex product and division errors therefore give $|c-c_0|\le q c_0$ and $|s-s_0|\le q|s_0|$. If $z=0$, $c=0$ and $s_0=\overline w/|w|$; the smaller bound $(1+u)/(1-u)^3-1\le q$ applies. Hence $\|(c,s)-(c_0,s_0)\|\le q$. [F1, step 1.1, algebra]

3.2 Put $t=\sqrt{c^2+|s|^2}>0$ and $Q=T/t$. Direct multiplication gives $T^*T=t^2I$, so $Q$ is canonical unitary, $\|T-Q\|=|t-1|\le q$ and $\|T\|\le1+q$. Normalization also gives $\|Q-G_0\|\le2q$; differences of canonical blocks have norm equal to the Euclidean norm of their coefficient differences. Each computed output entry has error at most $(7u+6u^2)(|c||C_{1j}|+|s||C_{2j}|)$, by two products and their addition. The absolute coefficient block has norm at most $\sqrt2t$. Thus the raw update differs from $QC$ by at most $v\|C\|_F$. [step 3.1, algebra]

3.3 Scaling introduced $\|\lambda(z,w)-(a,b)\|\le u\|(a,b)\|$. Because $G_0$ annihilates $(z,w)$, its exact target residual for $(a,b)$ is at most $u\|(a,b)\|$; under $Q$ it is at most $(u+2q)\|(a,b)\|$. Writing the rounded target to zero adds at most $(u+2q+v)\|(a,b)\|$ to the raw update discrepancy, so the total is at most $\eta_G\|C\|_F$. No unrelated matrix entry is zeroed for a shift-vector rotation. Identity branches have zero discrepancy. [F1, step 3.1, step 3.2, algebra]

4.1 In every left case choose $E=W^*C_+-C$, with $W=H(v)$ or $Q$; unitarity gives the stated equation and equal error norm. Right updates follow by conjugate transposition and invariance of Frobenius norm. All coefficients are finite explicit functions under the stated conditions, vanish at $u=0$, and have first derivatives bounded by a fixed multiple of the active dimension, proving the asymptotics. [step 2.1, step 3.3, algebra, construct] ∎
