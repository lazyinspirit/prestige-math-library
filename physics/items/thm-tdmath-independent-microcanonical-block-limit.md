---
id: thm-tdmath-independent-microcanonical-block-limit
kind: theorem
title: "Finite-site microcanonical and canonical block equivalence"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-finite-sum","def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-finite-site-shell-and-canonical-law","thm-extreme-value-metric","thm-heine-borel-rn","thm-logarithm-derivative-and-integral","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"def-tdmath-finite-site-shell-and-canonical-law":"mathematical-premise","def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","thm-heine-borel-rn":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise","thm-extreme-value-metric":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Statement

Let $A=\{1,\ldots,q\}$, $q\ge1$, have real energies $e_j$, and fix finite $\beta\in\mathbb R$. Set $Z_1=\sum_j e^{-\beta e_j}$, $p_j=e^{-\beta e_j}/Z_1>0$, and $E=\sum_jp_je_j$. For each $N\ge1$, let $\delta_N\ge q\sum_{j=1}^q|e_j|$ and $\delta_N/N\to0$. Define the shell $\Gamma_N=\{i\in A^N:|\sum_{r=1}^Ne_{i_r}-NE|\le\delta_N\}$ and the uniform law on that shell. For probability laws $\mu,\nu$ on the finite set $A^k$, total variation distance means $\frac12\sum_{x\in A^k}|\mu(x)-\nu(x)|$. Then $\Gamma_N$ is nonempty for every $N$; for each fixed $k\ge1$, the first $k$-site marginal (for $N\ge k$) converges in that distance to $p^{\otimes k}$; and
$$\frac1N\log|\Gamma_N|\longrightarrow H(p):=-\sum_{j=1}^qp_j\log p_j.$$
The conclusion is for this finite alphabet, additive energy, exact shell width and uniform shell law. It does not assert finite-size equality or equivalence for interacting or continuous models.

## Facts & Assumptions

**Given:** The finite-site canonical law and uniform shell convention.

[A1] $A$ is finite, $q\ge1$, $e_j\in\mathbb R$, $\beta\in\mathbb R$, and $\delta_N\ge q\sum_j|e_j|$ with $\delta_N/N\to0$.

[F1] [[def-tdmath-finite-site-shell-and-canonical-law]]: configurations have additive energies, the canonical probabilities are $p_j=e^{-\beta e_j}/Z_1$, and the shell law is uniform when the shell is nonempty.

[F2] [[def-finite-sum]] and [[thm-natural-logarithm-laws]]: the finite sums and logarithms obey the usual finite distributive and product identities.

[F3] [[def-real-exponential-function-and-e]] and [[def-natural-logarithm]]: exponential weights are positive and logarithm is the inverse of the positive real exponential.

[F4] [[thm-logarithm-derivative-and-integral]]: $\log$ is continuous on $(0,\infty)$, has derivative $1/x$, and $\log x=\int_1^xdt/t$.

[F5] [[thm-heine-borel-rn]]: the finite-dimensional probability simplex is closed and bounded, hence compact; closed bounded subsets of finite-dimensional Euclidean space are compact.

[F6] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its minimum and maximum.

## Proof



**Given:** [A1] and the conventions in [F1].

1.1 For a type $t_j=n_j/N$, the number of configurations of that type is $M(n)=N!/\prod_j n_j!$. The increasing function $\log x$ gives $$\int_1^m\log x\,dx\le\log(m!)\le\int_1^{m+1}\log x\,dx\quad(m\ge1).$$ Evaluating the antiderivative $x\log x-x$ and using $\log(1+1/m)\le1/m$ shows $\log(m!)=m\log m-m+O(\log(m+1)+1)$ with an absolute constant; the case $m=0$ uses $0!=1$ and $0\log0=0$. Subtracting the $q$ denominator estimates from the numerator estimate gives a constant $C_q$ such that $$NH(t)-C_q\log(N+1)-C_q\le\log M(n)\le NH(t)+C_q\log(N+1)+C_q,$$ where $H(t)=-\sum_jt_j\log t_j$. The sharper upper bound $M(n)\le e^{NH(t)}$ follows by expanding $1=(\sum_jt_j)^N$ and retaining the nonnegative terms with counts $n$. For later limits, [F4] gives $0\le\log x=\int_1^xdt/t\le2\sqrt{x}$ for $x\ge1$, hence $\log(N+1)/N\le2\sqrt{N+1}/N\to0$. [A1, F2, F3, F4, algebra]

1.2 For any probability vector $t$, define $D(t\Vert p)=\sum_{j:t_j>0}t_j\log(t_j/p_j)$. From [F4], $\log u\ge1-1/u$ for $u>0$, with equality only at $u=1$: apply $\log z\le z-1$ to $z=1/u$ and negate. Therefore $$D(t\Vert p)\ge\sum_{j:t_j>0}(t_j-p_j)=1-\sum_{j:t_j>0}p_j\ge0.$$ Since every $p_j>0$, equality forces every index into the support and $t_j/p_j=1$ for each $j$, so $t=p$. Also $\log p_j=-\beta e_j-\log Z_1$, hence $D(t\Vert p)=-H(t)+\beta\sum_jt_je_j+\log Z_1$. In particular, among types of exact mean energy $E$, entropy is at most $H(p)$, with equality only at $p$. [A1, F1, F2, F3, F4]

2.1 Round down $Np_j$ for $j<q$ and put the remainder in $n_q$. Then $|n_j/N-p_j|\le1/N$ for $j<q$ and $|n_q/N-p_q|\le(q-1)/N$. Thus $$\left|\sum_jn_je_j-NE\right|\le\sum_{j<q}|e_j|+(q-1)|e_q|\le q\sum_j|e_j|\le\delta_N.$$ This type belongs to $\Gamma_N$, proving nonemptiness. Its frequencies tend to $p$. For $0<x\le1$, [F4] gives $$0\le-x\log x=x\log(1/x)\le2\sqrt{x},$$ by integrating $1/t\le1/\sqrt t$ on $[1,1/x]$; hence $-x\log x$ extends continuously by $0$ at $x=0$ and $H(t)\to H(p)$. By the lower bound in 1.1, the shell contains at least $\exp(NH(p)-o(N))$ configurations. [A1, F1, F4, step 1.1]

3.1 Fix $\epsilon>0$ and let $\Delta_q=\{t\in[0,1]^q:\sum_jt_j=1\}$ and $C=\{t\in\Delta_q:|t-p|\ge\epsilon\}$. The simplex is closed and bounded, and $C$ is closed in it, so both are compact by [F5]. If $C=\emptyset$, the claim is vacuous. Otherwise let $F=\{t\in C:\sum_jt_je_j=E\}$, a closed subset of $C$. If $F=\emptyset$, the continuous function $t\mapsto|\sum_jt_je_j-E|$ has a positive minimum on $C$ by [F6], so choose $\tau$ smaller than this minimum and any $\eta>0$. If $F\ne\emptyset$, [F6] gives a maximum $h_F$ of $H$ on $F$; step 1.2 gives $h_F<H(p)$. Put $\eta=(H(p)-h_F)/2$ and let $U=\{t\in C:H(t)<H(p)-\eta\}$, a relative open neighborhood of $F$. The compact set $C\setminus U$, if nonempty, has a positive minimum $m$ of $|\sum_jt_je_j-E|$ by [F6]; choose $0<\tau<m$. If $C\setminus U=\emptyset$, choose any $\tau>0$. In either case, every $t\in C$ with $|\sum_jt_je_j-E|\le\tau$ satisfies $H(t)\le H(p)-\eta$. For large $N$, $\delta_N/N\le\tau$; therefore every shell type outside the $\epsilon$-ball has entropy at most $H(p)-\eta$. There are at most $(N+1)^q$ types, and 1.1 bounds the number of configurations of each by $\exp[NH(t)]$. By the log-growth estimate in 1.1, this type-count factor is subexponential, so division by the shell lower bound in step 2.1 shows that the shell probability outside the ball tends to zero exponentially. Thus the random type converges in probability to $p$. [A1, F1, F4, F5, F6, step 1.1, step 2.1, step 1.2]

4.1 Conditional on a type $t$, a uniform configuration is a uniformly ordered list of its $N$ labeled positions. Couple the first $k$ draws without replacement with $k$ independent uniform position draws: if the independent positions are distinct, keep them; if not, replace them by an independently chosen uniform ordered distinct $k$-tuple. The resulting tuple is uniform among distinct positions and agrees with the original draws except on the collision event. A union bound over the $\binom{k}{2}$ pairs gives collision probability at most $k(k-1)/(2N)$. Hence the type-conditional label marginal differs in total variation from $t^{\otimes k}$ by at most this quantity. Since $t\to p$ in probability, for each fixed tuple $(i_1,\ldots,i_k)\in A^k$ the random variable $X_N=\left|\prod_{r=1}^kt_{i_r}-\prod_{r=1}^kp_{i_r}\right|$ tends to zero in probability and is bounded by $1$. For every $\epsilon>0$, $\mathbb E X_N\le\epsilon+P(X_N>\epsilon)$, so $\mathbb E X_N\to0$; summing over the finite set $A^k$ proves the marginal converges to $p^{\otimes k}$ in total variation. [A1, F1, F5, step 3.1, algebra]

5.1 The rounded shell type and lower bound in step 2.1 give $\liminf_NN^{-1}\log|\Gamma_N|\ge H(p)$. For any shell type $t$, step 1.2 gives the exact identity
$$H(t)=H(p)+\beta\left(\sum_jt_je_j-E\right)-D(t\Vert p)\le H(p)+|\beta|\delta_N/N.$$
There are at most $(N+1)^q$ types, and step 1.1 bounds each multiplicity by $e^{NH(t)}$. Therefore
$$|\Gamma_N|\le(N+1)^q\exp\!\left(NH(p)+|\beta|\delta_N\right).$$
By the log-growth estimate in 1.1, $q\log(N+1)/N\to0$. Since also $\delta_N/N\to0$, the limsup is at most $H(p)$. Together with the lower bound this proves the entropy-density limit, including $\beta=0$, without invoking a nonexistent compactness step. [A1, F1, F4, F5, step 1.1, step 1.2, step 2.1, algebra] ∎
