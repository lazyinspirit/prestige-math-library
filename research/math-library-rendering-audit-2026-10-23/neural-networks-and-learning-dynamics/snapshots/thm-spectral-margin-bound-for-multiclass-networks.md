---
id: thm-spectral-margin-bound-for-multiclass-networks
kind: theorem
title: "A simultaneous spectral margin bound for multiclass networks"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-spectral-network-complexity
  - def-multiclass-margin-ramp-loss
  - lem-bounded-spectral-class-margin-generalization
  - def-identically-distributed-and-iid-random-variables
  - def-axiom-of-choice
  - thm-product-of-countable
  - lem-probability-measure-basic-identities
  - def-frobenius-matrix-norm
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Theorem 1.1 and Appendix A.7"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Statement

Assume the axiom of choice. Fix a network architecture with $L\ge1$, widths $d_0,\ldots,d_L\ge1$, $K=d_L\ge2$, zero-bias recurrence and zero-origin $\rho_i$-Lipschitz activations as in the spectral-network-complexity definition. Fix reference matrices $M_i\in\mathbb R^{d_i\times d_{i-1}}$. Let $S=((x_1,y_1),\ldots,(x_n,y_n))$ be an iid sample of size $n\ge1$ from any Borel probability measure on $\mathbb R^{d_0}\times\{1,\ldots,K\}$, and let $X$ be the matrix with rows $x_r^\top$. Fix $0<\delta<1$ and set $W:=\max_{0\le i\le L}d_i$. With probability at least $1-\delta$, simultaneously for every network with nonzero layer matrices and every margin $\gamma>0$,
$$L_0(F_A)\le\widehat L_{\gamma,S}(F_A)+\frac8n+\frac{72\sqrt{20}\,(1+\lVert X\rVert_F)\sqrt{\log(2W^2)}\log n}{\gamma n}\left(\prod_{i=1}^L\rho_i\right)\left(\sum_{i=1}^L\left[\left(\frac1L+\lVert A_i^\top-M_i^\top\rVert_{2,1}\right)\prod_{r\ne i}\left(\frac1L+\lVert A_r\rVert_\sigma\right)\right]^{2/3}\right)^{3/2}+3\sqrt{\frac{Q(A,X,\gamma,n,\delta)}{2n}},$$
where all logarithms are natural, an empty product equals $1$, and
$$\begin{aligned}Q(A,X,\gamma,n,\delta):={}&\log(6/\delta)+\log(2+n\gamma)+\log(2+n/\gamma)+2\log(2+\lVert X\rVert_F)\\&+2\sum_{i=1}^L\log\!\left(2+L\lVert A_i^\top-M_i^\top\rVert_{2,1}\right)+2\sum_{i=1}^L\log\!\left(2+L\lVert A_i\rVert_\sigma\right). \end{aligned}$$

## Statement references

[[def-spectral-network-complexity]]: fixes the network recurrence, reference matrices, zero-origin activations, and layer norm conventions.

[[def-multiclass-margin-ramp-loss]]: defines population zero-one error and empirical margin loss.

[[lem-bounded-spectral-class-margin-generalization]]: supplies the fixed-margin bound for a class with fixed positive norm caps and reference-distance caps.

[[def-identically-distributed-and-iid-random-variables]]: defines the iid sampling assumption.

## Facts & Assumptions

**Given:** The network architecture, fixed reference matrices, iid sample, confidence parameter, and axiom-of-choice assumption in the Statement.

[F1] For fixed positive caps $s_i$ and nonnegative caps $b_i$, every nonempty constrained network class has the fixed-margin bound with leading factor $36\sqrt{20}$ and confidence term $3\sqrt{\log(2/\eta)/(2n)}$. [[lem-bounded-spectral-class-margin-generalization]]

[F2] The architecture uses zero-origin Lipschitz activations, and the sample matrix Frobenius norm is the Euclidean norm of all its entries. [[def-spectral-network-complexity]] [[def-frobenius-matrix-norm]]

[F3] The empirical margin loss is nondecreasing as a function of its positive threshold: if $0<\gamma_1\le\gamma_2$, then $\widehat L_{\gamma_1,S}(F)\le\widehat L_{\gamma_2,S}(F)$. [[def-multiclass-margin-ramp-loss]]

[F4] The product of finitely many at most countable sets is at most countable, and probability is countably subadditive. [[thm-product-of-countable]] [[lem-probability-measure-basic-identities]]

[F5] The natural logarithm is increasing and satisfies its product law. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

[F6] The sample coordinates are independent and have the same distribution, as required by the fixed-margin result. [[def-identically-distributed-and-iid-random-variables]]

[F7] The fixed-margin result assumes the axiom of choice through its McDiarmid supplier. [[def-axiom-of-choice]]

## Proof
1.1 For each integer $j\in\mathbb Z$, put $\gamma_j:=2^j/n$ and $v_j:=2^{-|j|}/3$. Then $\sum_{j\in\mathbb Z}v_j=(1+2\sum_{m\ge1}2^{-m})/3=1$, since $\sum_{m=1}^N2^{-m}=1-2^{-N}\to1$. Every $\gamma>0$ belongs to exactly one interval $[\gamma_j,2\gamma_j)$. For each positive integer $m$, put $w_m:=1/(m(m+1))=1/m-1/(m+1)$; the finite partial sum is $\sum_{m=1}^Nw_m=1-1/(N+1)$, so $\sum_{m\ge1}w_m=1$. [given, algebra]

2.1 The integers are countable by the enumeration $0,1,-1,2,-2,\ldots$; the other factors are positive integers, so repeated use of [F4] shows that the tuples indexed by $j\in\mathbb Z$, a positive integer $q$, and positive integers $k_i,l_i$ for $1\le i\le L$ form a countable set. For such a tuple set $\eta_{j,q,k,l}:=\delta v_j w_q\prod_iw_{k_i}w_{l_i}$. Let $J_N=\{-N,\ldots,N\}$ and $M_N=\{1,\ldots,N\}$. Finite distributivity gives the sum over $J_N\times M_N^{1+2L}$ as $\delta(\sum_{j\in J_N}v_j)(\sum_{q\in M_N}w_q)\prod_i(\sum_{k_i\in M_N}w_{k_i})(\sum_{l_i\in M_N}w_{l_i})$, which tends to $\delta$ by step 1.1. These finite boxes increase to the countable index set and contain every finite subset for large enough $N$; since all terms are nonnegative, their partial sums establish $\sum_{j,q,k,l}\eta_{j,q,k,l}=\delta$. For each tuple consider the layer class with caps $s_i=l_i/L$ and $b_i=k_i/L$; if it is empty its event is vacuous. Otherwise [F1] gives a fixed-margin result at $\gamma_j$ and confidence $\eta_{j,q,k,l}$, with its displayed sample-norm term evaluated at the realized $X$. [F1, F4, F6, F7, step 1.1, given, construct]

3.1 Apply countable subadditivity [F4] to the failure events from step 2.1. Their union has probability at most $\sum_{j,q,k,l}\eta_{j,q,k,l}=\delta$. Thus outside that union, all fixed-margin inequalities for every tuple hold simultaneously. [F4, step 2.1, given]

4.1 Fix any realized sample, any network with nonzero layer matrices, and any $\gamma>0$. Choose its unique $j$ from step 1.1 with $\gamma_j\le\gamma<2\gamma_j$, and set $q=\lfloor\lVert X\rVert_F\rfloor+1,\qquad k_i=\lfloor L\lVert A_i^\top-M_i^\top\rVert_{2,1}\rfloor+1,\qquad l_i=\lfloor L\lVert A_i\rVert_\sigma\rfloor+1.$ These positive integers satisfy $\lVert X\rVert_F<q$, $\lVert A_i^\top-M_i^\top\rVert_{2,1}<k_i/L$, and $0<\lVert A_i\rVert_\sigma<l_i/L$. The network belongs to the corresponding constrained class. Also $\widehat L_{\gamma_j,S}(F_A)\le\widehat L_{\gamma,S}(F_A)$ by [F3], and $1/(\gamma_j n)<2/(\gamma n)$. [F2, F3, step 1.1, step 3.1, given, construct]

5.1 In the leading term of [F1], the cap expression satisfies $\left(\prod_i s_i\right)\left(\sum_i(b_i/s_i)^{2/3}\right)^{3/2}=\left(\sum_i\left(b_i\prod_{r\ne i}s_r\right)^{2/3}\right)^{3/2}.$ For the tuple selected in step 4.1, $q\le1+\lVert X\rVert_F$, $k_i/L\le\lVert A_i^\top-M_i^\top\rVert_{2,1}+1/L$, and $l_i/L\le\lVert A_i\rVert_\sigma+1/L$. Monotonicity of the sums and products therefore bounds [F1]'s leading term by the leading term in the Statement, using $1/(\gamma_jn)<2/(\gamma n)$. [F1, F2, step 4.1, given, algebra]

5.2 The confidence logarithm for this tuple equals $\log(2/\eta_{j,q,k,l})=\log(6/\delta)+|j|\log2+\log(q(q+1))+\sum_i\bigl(\log(k_i(k_i+1))+\log(l_i(l_i+1))\bigr).$ Put $t=n\gamma$. If $j\ge0$, then $2^j\le t$ and $|j|\log2\le\log(2+t)$. If $j<0$, then $t<2^{j+1}\le1$, so $\log(2+t)\ge\log2$ and $\log(2+1/t)\ge\log(1/t)$; their sum is at least $\log(2/t)>|j|\log2$. For each positive integer bin chosen as $m=\lfloor u\rfloor+1$, one has $m\le u+1$ and $m+1\le u+2$, hence $\log(m(m+1))\le2\log(u+2)$. Apply this with $u=\lVert X\rVert_F$ and $u=L\lVert A_i^\top-M_i^\top\rVert_{2,1}$ or $L\lVert A_i\rVert_\sigma$. By [F5], the result is $\log(2/\eta_{j,q,k,l})\le Q(A,X,\gamma,n,\delta)$. [F5, step 1.1, step 4.1, given, algebra]

6.1 On the probability-$1-\delta$ event from step 3.1, apply the selected fixed-margin inequality. Steps 4.1–5.2 replace its empirical margin loss, leading term, and confidence term by the respective terms displayed in the Statement. The choices in step 4.1 were arbitrary, so this holds simultaneously for every network with nonzero layer matrices and every $\gamma>0$. [F1, step 3.1, step 4.1, step 5.1, step 5.2, given] ∎

## Source reference

[Bartlett, Foster, and Telgarsky, *Spectrally-normalized margin bounds for neural networks*, Theorem 1.1 and Appendix A.7](https://arxiv.org/pdf/1706.08498).
