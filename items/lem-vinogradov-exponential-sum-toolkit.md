---
id: lem-vinogradov-exponential-sum-toolkit
kind: lemma
title: "Finite exponential-sum spacing and differencing tools"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-exponential-character-e
  - lem-geometric-progression-exponential-sum
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 55–60, Lemma 24.6 and Lemmas 24.8–24.10."
---

## Statement

There is an absolute constant $C$ with the following properties.

Write $e(x):=\exp(2\pi i x)$ and $\|x\|_{\mathbb T}:=\min_{m\in\mathbb Z}|x-m|$ for real $x$.

1. If $(a,q)=1$, $q\ge1$, and $|\alpha-a/q|\le q^{-2}$, then for integers $G,H\ge1$,
$$\sum_{|h|\le G}\min\!\left(H,\frac1{H\|h\alpha\|_{\mathbb T}^2}\right)\le C\left(\frac{GH}{q}+G+H+q\right),$$
where a term with $\|h\alpha\|_{\mathbb T}=0$ is interpreted as $H$.
2. If $c_h$ is absolutely summable on $\mathbb Z$, $S(\beta)=\sum_hc_he(h\beta)$, and $M,L\ge1$ are integers, then for every integer $H_0$,
$$\left|\sum_{|h-H_0|\le M}c_h\right|\le\left(\frac{2M}{L}+1\right)\sup_{\beta\in\mathbb R}|S(\beta)|+\sum_{M<|h-H_0|<M+L}|c_h|.$$
3. If $N\ge1$, $0<X\le\sqrt N$, $A\ge0$, $\sum_{n\ge1}|c_n|<\infty$, and $|c_n|\le A\sum_{d\mid n,\ X<d\le2X}1$, then for $0\le Y\le Z\le N$,
$$\left|\sum_{Y<n\le Z}c_n\right|\le C\sqrt{N A\left(A+\sup_{\beta\in\mathbb R}\left|\sum_{n\ge1}c_ne(n\beta)\right|\right)}.$$
4. If $M\ge1$, $M\le N$, $N<N'\le2N$, $0<X\le\sqrt{2M}$, $A\ge0$, $|d_h|\le1$ for every integer $h$, and the absolutely summable coefficients $c_m$ indexed by positive integers satisfy $|c_m|\le A\sum_{d\mid m,\ X<d\le2X}1$, then
$$\left|\sum_{M<m\le2M}c_m\sum_{N<n\le N'}d_n\right|\le C N\sqrt{M A\left(A+\max_{M+N<\ell\le2M+N'}\sup_{\beta\in\mathbb R}\left|\sum_{m\ge1}c_md_{\ell-m}e(m\beta)\right|\right)}.$$

5. Define $\{u\}:=u-\lfloor u\rfloor$ and $B_1(u):=\{u\}-\tfrac12$. The Fej\'er means $B_1*F_M(u):=\int_0^1B_1(u-v)F_M(v)\,dv$, with $F_M(v):=M^{-1}|\sum_{j=0}^{M-1}e(jv)|^2$, converge to $B_1(u)$ at every noninteger $u$ and have modulus at most $1/2$ everywhere.

## Statement references

[Montgomery–Vaughan, Lemma 24.6 and Lemmas 24.8–24.10](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The integer and real parameters in one of the four assertions.

[F1] The additive exponential satisfies $e(x+y)=e(x)e(y)$ and $|e(x)|=1$; its geometric progression is bounded by $\min(M,(2\|t\|_{\mathbb T})^{-1})$ ([[def-exponential-character-e]], [[lem-geometric-progression-exponential-sum]]).

[F2] For each integer $n$, $\int_0^1e(n\beta)\,d\beta$ equals $1$ if $n=0$ and $0$ otherwise ([[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

## Proof

**Proof technique:** residue spacing, a positive Fejér majorant, and rearrangement of finite sums.

1.1 The term $h=0$ contributes $H$, which is absorbed in the right side. Divide the nonzero integers $1\le|h|\le G$ into $O(G/q+1)$ consecutive blocks of length at most $q/2$. Within each block, distinct indices differ by $d$ with $1\le|d|\le q/2$, so $\|d a/q\|_{\mathbb T}\ge1/q$ and $|d(\alpha-a/q)|\le1/(2q)$; hence the points $h\alpha$ are separated on the circle by at least $1/(2q)$. At most a fixed number lie in each annulus $j/(2q)\le\|x\|_{\mathbb T}<(j+1)/(2q)$. The contribution of one block is at most $$H+C\sum_{1\le j\le q}\min\!\left(H,\frac{q^2}{Hj^2}\right)\le C(H+q),$$ since splitting at $j=q/H$ bounds the initial part by $q$ and the tail by $Cq$. Multiplying by the number of blocks gives part 1. The case $q=1$ follows directly from the trivial bound $2GH$. [given, F1, algebra]

1.2 Translation reduces part 2 to $H_0=0$. Define $F_M(\beta)=M^{-1}|\sum_{j=0}^{M-1}e(j\beta)|^2$. Expansion gives its Fourier coefficients $1-|h|/M$ for $|h|<M$ and zero otherwise, so $F_M\ge0$ and [F2] gives $\int_0^1F_M=1$. Therefore $K=((M+L)F_{M+L}-MF_M)/L$ has coefficient $1$ for $|h|\le M$, coefficients between $0$ and $1$ for $M<|h|<M+L$, and zero outside. Also $\int_0^1|K|\le((M+L)+M)/L$. Integrating $S(\beta)K(-\beta)$ therefore reproduces the interval sum with coefficients in the transition band; replacing those coefficients by $1$ changes it by at most the stated tail. Bounding the integral by $\sup|S|\int|K|$ proves part 2. [given, F2, algebra]

1.3 The kernels $F_M$ have mass $1$ and are nonnegative. If $\|\beta\|_{\mathbb T}\ge\eta>0$, [F1] gives $F_M(\beta)\le C/(M\eta^2)$; hence their mass outside any fixed neighborhood of $0$ tends to $0$. The Fejér convolution $B_1*F_M$ is bounded by $1/2$, and at each continuity point of $B_1$ it converges to $B_1$: split the convolution into a neighborhood where $|B_1(u-v)-B_1(u)|$ is small and its complement, whose kernel mass tends to zero. This proves part 5, including pointwise convergence away from integers. [given, F1, F2, algebra]

2.1 If $A=0$, every $c_n=0$ and part 3 is immediate. Suppose $A>0$, put $\widetilde c_n=c_n/A$, and let $S=\sup_\beta|\sum c_ne(n\beta)|$ and $\widetilde S=S/A$. Extend $\widetilde c_n$ by zero to nonpositive integers. For $x\in[0,N]$, set $y=\lfloor x\rfloor$. If $y\ge2$, the symmetric integer interval $|h-H_0|\le M_0$ with $H_0=\lceil y/2\rceil$ and $M_0=\lfloor y/2\rfloor$ contains exactly the integers $1\le h\le y$ after the zero term at $h=0$ is discarded: for even $y$ its lower endpoint is $0$, and for odd $y$ its lower endpoint is $1$. If $y=0$, the prefix is empty; if $y=1$, its only term has modulus at most $1$. Thus each prefix $P(x)=\sum_{1\le n\le x}\widetilde c_n$ is either trivial or is exactly a symmetric interval sum to which part 2 applies with $M_0\le N$. The two transition tails in part 2 each have length at most $L$. For any interval of that length, the divisor majorant gives $$\sum_{X<d\le2X}(L/d+1)\le C(L+\sqrt N),$$ because $\sum_{X<d\le2X}1/d\le2$ and the number of integer $d$ in $(X,2X]$ is at most $X+1\le\sqrt N+1$. The one endpoint term when $y=1$ is also $O(\sqrt N)$. Therefore part 2 bounds each prefix by $C(N\widetilde S/L+\widetilde S+L+\sqrt N)$. [given, step 1.2, algebra]

3.1 For $\widetilde S\le N$, choose $L=\lceil\sqrt{N(1+\widetilde S)}\rceil$. Then each term in step 2.1 is $O(\sqrt N(1+\widetilde S)^{1/2})$. For $\widetilde S>N$, the divisor majorant directly gives $$\sum_{n\le N}|\widetilde c_n|\le\sum_{X<d\le2X}\left\lfloor\frac Nd\right\rfloor\le 2N,$$ which is no larger than $2\sqrt{N\widetilde S}$. Since $\sum_{Y<n\le Z}\widetilde c_n=P(Z)-P(Y)$, combining the prefix estimates and multiplying by $A$ proves the stated $C\sqrt{NA(A+S)}$ bound. [given, step 1.2, step 2.1, choose, algebra]

4.1 Rearrange the left side of part 4 by $\ell=m+n$: $$\sum_{M<m\le2M}c_m\sum_{N<n\le N'}d_n=\sum_{M+N<\ell\le2M+N'}\sum_{\substack{M<m\le2M\\N<\ell-m\le N'}}c_md_{\ell-m}.$$ If $A=0$, every $c_m=0$ and part 4 is immediate. Suppose $A>0$. For each fixed $\ell$, the inner sum is over an interval of positive integers inside $(0,2M]$, and $|c_md_{\ell-m}|\le A\sum_{d\mid m,\ X<d\le2X}1$. Apply part 3 with its cutoff equal to $2M$; the exponential polynomial of this coefficient sequence has supremum at most the maximum displayed in part 4. Thus each inner sum has modulus at most $C\sqrt{M A(A+S)}$, where $S$ is that displayed maximum. The number of integer outer indices is at most $M+N'-N+1\le2N+1\le3N$. Summing these bounds proves part 4. [given, step 2.1, step 3.1, algebra] ∎

