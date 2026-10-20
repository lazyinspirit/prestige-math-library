---
id: lem-empirical-rademacher-covering-integral
kind: lemma
title: "A truncated covering integral bounds empirical Rademacher complexity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-rademacher-complexity
  - def-sample-covering-number
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - thm-jensen-inequality-for-expectation
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Appendix A.3"
      url: "https://arxiv.org/pdf/1706.08498"
    - title: "Mehryar Mohri, Foundations of Machine Learning, Lecture 3, pp. 15–16"
      url: "https://www.cs.nyu.edu/~mohri/mls/lecture_3.pdf"
---

## Statement

Let $n\ge1$, let $S=(z_1,\ldots,z_n)$ be a fixed sample, and let $\mathcal G$ be a nonempty class of measurable functions into $[0,1]$. Write $\mathcal G|S$ for the set of column vectors $(g(z_1),\ldots,g(z_n))^\top$ as $g$ ranges over $\mathcal G$. For $0<\alpha\le\sqrt n$,
$$\widehat{\mathfrak R}_S(\mathcal G)\le\frac{4\alpha}{\sqrt n}+\frac{12}{n}\int_\alpha^{\sqrt n}\sqrt{\log N_F(\mathcal G|S,\epsilon)}\,d\epsilon,$$
where $\widehat{\mathfrak R}_S$ is the one-sided empirical Rademacher complexity with $1/n$ normalization and $N_F$ is the proper Frobenius covering number of the sample-vector set, identified with $n\times1$ matrices. The set $\mathcal G|S$ is totally bounded because it lies in $[0,1]^n$.

## Statement references

[[def-rademacher-complexity]]: fixes the one-sided empirical sign average and its $1/n$ normalization.

[[def-sample-covering-number]]: defines $N_F$ using finite centers belonging to the covered set.

## Facts & Assumptions

**Given:** $n\ge1$, a fixed sample $S$, a nonempty $[0,1]$-valued function class, and the corresponding finite sign space.

[F1] The one-sided empirical complexity is $\mathbb E_\varepsilon\sup_{g\in\mathcal G}n^{-1}\sum_{i=1}^n\varepsilon_i g(z_i)$, where the signs are independent and uniform on $\{-1,+1\}$. [[def-rademacher-complexity]]

[F2] $N_F(U,\epsilon)$ is the least number of centers in a finite proper Frobenius $\epsilon$-cover of $U$. [[def-sample-covering-number]]

[F3] $\cosh x>0$, $\cosh$ is even, $\cosh' x=\sinh x$, $\tanh' x=\operatorname{sech}^2x$, and $\cosh^2x-\sinh^2x=1$. [[def-hyperbolic-functions]] [[thm-hyperbolic-identities-and-derivatives]]

[F4] For a bounded real random variable $Y$ and convex exponential, $\exp(\lambda\mathbb E Y)\le\mathbb E\exp(\lambda Y)$. [[thm-jensen-inequality-for-expectation]]

[F5] $\log$ is the increasing inverse of $\exp$ on positive reals, with $\log(xy)=\log x+\log y$ and $\log 1=0$. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

[F6] If a real function is continuous on $[a,b]$ and differentiable on $(a,b)$, the mean value theorem gives $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. [[cor-mean-value-theorem]]

[F7] The exponential, chain, and product rules give derivatives of $e^{-x^2/2}\cosh x$; the hyperbolic derivatives and identities in [F3] apply. [[thm-derivative-of-exponential]] [[thm-chain-rule]] [[thm-algebra-of-derivatives]]

[F8] For vectors $u,v$ in a real or complex inner product space, $|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

## Proof
1.1 For $x>0$, put $r(x)=x-\tanh x$. By [F3], $r(0)=0$ and $r'(x)=1-\operatorname{sech}^2x=\tanh^2x\ge0$. The mean value theorem [F6] therefore gives $r(x)\ge0$; at $x=0$ this is equality. Put $q(x)=e^{-x^2/2}\cosh x$. The derivative rules in [F3] and [F7] give $q'(x)=e^{-x^2/2}\cosh x\,(\tanh x-x)\le0$. Applying [F6] on $[0,x]$ for $x>0$ yields $q(x)\le q(0)=1$, and equality holds at $x=0$. Since $q$ is even, $\cosh x\le e^{x^2/2}$ for every real $x$. [F3, F6, F7, algebra]

1.2 Choose $g_0\in\mathcal G$ and subtract its sample vector $v_0$ from every vector in $\mathcal G|S$. The empirical Rademacher average is unchanged because $\mathbb E_\varepsilon\sum_i\varepsilon_i g_0(z_i)=0$, and translation preserves all Frobenius covering numbers. The translated set contains $0$ and each vector has norm at most $\sqrt n$. For any $\epsilon>0$, partition $[-1,1]^n$ into finitely many boxes of side at most $\epsilon/\sqrt n$; from each box meeting $(\mathcal G|S)-v_0$ take one member of that intersection. The resulting finite set is a proper $\epsilon$-cover, since two points in one box differ in Euclidean norm by at most $\epsilon$. Set $\epsilon_j=\sqrt n\,2^{-(j-1)}$. For each finite truncation $N\ge1$, take $V_1=\{0\}$ and proper finite $\epsilon_j$-covers $V_j$ of the translated set for $2\le j\le N$; enumerate each finite cover and map every sample vector to the first center within $\epsilon_j$. [F1, F2, given, construct]

2.1 Let $V$ be a nonempty finite set of vectors in $\mathbb R^n$ and let $R=\max_{v\in V}\lVert v\rVert_2$. For $T_v=\sum_i\varepsilon_i v_i$, independence of the signs and step 1.1 give $\mathbb E e^{\lambda T_v}=\prod_i\cosh(\lambda v_i)\le e^{\lambda^2R^2/2}$. If $R=0$ or $|V|=1$, $\mathbb E\max_{v\in V}T_v=0$. Otherwise, for $\lambda>0$, [F4] and $e^{\lambda\max_v T_v}\le\sum_{v\in V}e^{\lambda T_v}$ imply $\mathbb E\max_vT_v\le\log|V|/\lambda+\lambda R^2/2$. Choosing $\lambda=\sqrt{2\log|V|}/R$ gives $\mathbb E\max_vT_v\le R\sqrt{2\log|V|}$. [F1, F4, F5, step 1.1, algebra]

3.1 For any translated sample vector $v$, telescope $v=(v-v_N[v])+\sum_{j=1}^{N-1}(v_j[v]-v_{j+1}[v])$, since $v_1[v]=0$. The absolute residual sign sum is at most $\lVert(\varepsilon_i)_i\rVert_2\lVert v-v_N[v]\rVert_2\le\sqrt n\epsilon_N$ by [F8]. For each $j<N$, the set $V_j-V_{j+1}$ has at most $N_F(\mathcal G|S,\epsilon_{j+1})^2$ elements, because covering numbers are nonincreasing with radius, and every difference has norm at most $\epsilon_j+\epsilon_{j+1}=3\epsilon_{j+1}$. Step 2.1 bounds its expected maximum sign sum by $6\epsilon_{j+1}\sqrt{\log N_F(\mathcal G|S,\epsilon_{j+1})}$. Summing these bounds and dividing by $n$ gives $\widehat{\mathfrak R}_S(\mathcal G)\le\epsilon_N/\sqrt n+(6/n)\sum_{j=1}^{N-1}\epsilon_{j+1}\sqrt{\log N_F(\mathcal G|S,\epsilon_{j+1})}$. [F1, F2, F8, step 2.1, step 1.2, algebra]

4.1 The function $f(\epsilon)=\sqrt{\log N_F(\mathcal G|S,\epsilon)}$ is nonincreasing in $\epsilon$. Since $\epsilon_{j+2}=\epsilon_{j+1}/2$, each summand obeys $\epsilon_{j+1}f(\epsilon_{j+1})\le2\int_{\epsilon_{j+2}}^{\epsilon_{j+1}}f(\epsilon)\,d\epsilon$. Therefore step 3.1 gives $\widehat{\mathfrak R}_S(\mathcal G)\le\epsilon_N/\sqrt n+(12/n)\int_{\epsilon_{N+1}}^{\sqrt n}f(\epsilon)\,d\epsilon$. [F2, step 3.1, algebra]

5.1 If $0<\alpha<\sqrt n$, choose the largest $N$ with $\epsilon_{N+1}>\alpha$; then $\epsilon_N=4\epsilon_{N+2}\le4\alpha$ and $\int_{\epsilon_{N+1}}^{\sqrt n}f\le\int_\alpha^{\sqrt n}f$. If $\alpha=\sqrt n$, each sign average is at most $1$, so $\widehat{\mathfrak R}_S(\mathcal G)\le1\le4$. Substitution proves the stated inequality for every $0<\alpha\le\sqrt n$. [F1, step 4.1, algebra] ∎
