---
id: thm-tdmath-independent-microcanonical-block-limit
kind: theorem
title: "Finite-site microcanonical and canonical block equivalence"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-tdmath-finite-site-shell-and-canonical-law","def-finite-sum","def-natural-logarithm","def-real-exponential-function-and-e","thm-heine-borel-rn","thm-logarithm-derivative-and-integral","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"def-tdmath-finite-site-shell-and-canonical-law":"mathematical-premise","def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","thm-heine-borel-rn":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise"}
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

[F5] [[thm-heine-borel-rn]]: the finite-dimensional probability simplex is compact, so every sequence in it has a convergent subsequence.

## Proof



**Given:** [A1] and the conventions in [F1].

1.1 For a type $t_j=n_j/N$, the number of configurations of that type is $M(n)=N!/\prod_j n_j!$. The increasing function $\log x$ gives $$\int_1^m\log x\,dx\le\log(m!)\le\int_1^{m+1}\log x\,dx\quad(m\ge1).$$ Evaluating the antiderivative $x\log x-x$ and using $\log(1+1/m)\le1/m$ shows $\log(m!)=m\log m-m+O(\log(m+1)+1)$ with an absolute constant; the case $m=0$ uses $0!=1$ and $0\log0=0$. Subtracting the $q$ denominator estimates from the numerator estimate gives a constant $C_q$ such that $$NH(t)-C_q\log(N+1)-C_q\le\log M(n)\le NH(t)+C_q\log(N+1)+C_q,$$ where $H(t)=-\sum_jt_j\log t_j$. The sharper upper bound $M(n)\le e^{NH(t)}$ follows by expanding $1=(\sum_jt_j)^N$ and retaining the nonnegative terms with counts $n$. [A1, F2, F3, F4, algebra]

1.2 For any probability vector $t$, define $D(t\Vert p)=\sum_{j:t_j>0}t_j\log(t_j/p_j)$. Since $\log u\le u-1$ for $u>0$ (integrate $1/x$ on either side of $1$ using [F4]), $$D(t\Vert p)\ge\sum_{j:t_j>0}(t_j-p_j)=1-\sum_{j:t_j>0}p_j\ge0.$$ Equality forces every $p_j$ to be included and each ratio $t_j/p_j$ to equal $1$, so $t=p$. Also $\log p_j=-\beta e_j-\log Z_1$, hence $D(t\Vert p)=-H(t)+\beta\sum_jt_je_j+\log Z_1$. In particular, among types of exact mean energy $E$, entropy is at most $H(p)$, with equality only at $p$. [A1, F1, F2, F3, F4]

2.1 Round down $Np_j$ for $j<q$ and put the remainder in $n_q$. Then $|n_j/N-p_j|\le1/N$ for $j<q$ and $|n_q/N-p_q|\le(q-1)/N$. Thus $$\left|\sum_jn_je_j-NE\right|\le\sum_{j<q}|e_j|+(q-1)|e_q|\le q\sum_j|e_j|\le\delta_N.$$ This type belongs to $\Gamma_N$, proving nonemptiness. Its frequencies tend to $p$, and continuity of $-x\log x$ at zero gives $H(t)\to H(p)$. By the lower bound in 1.1, the shell contains at least $\exp(NH(p)-o(N))$ configurations. [A1, F1, F4, step 1.1]

3.1 Fix $\epsilon>0$. There are $\eta>0$ and $\tau>0$ such that $|t-p|\ge\epsilon$ and $|\sum_jt_je_j-E|\le\tau$ imply $H(t)\le H(p)-\eta$. Otherwise, choosing tolerance $1/n$ and entropy at least $H(p)-1/n$, compactness [F5] gives a subsequential limit $t_*$ with mean $E$, distance at least $\epsilon$, and entropy $H(p)$. Continuity of $H$ and the equality characterization in 2.1 force $t_*=p$, a contradiction. For large $N$, $\delta_N/N\le\tau$; therefore every shell type outside the $\epsilon$-ball has entropy at most $H(p)-\eta$. There are at most $(N+1)^q$ types, and 1.1 bounds the number of configurations of each by $\exp[NH(t)]$. Dividing this upper bound by the shell lower bound in 1.2 shows that the shell probability of types outside that ball tends to zero exponentially. Thus the random type converges in probability to $p$. [A1, F1, F5, step 1.1, step 2.1, step 1.2]

4.1 Conditional on a type $t$, a uniform configuration is a uniformly ordered list of its $N$ labeled positions. Couple the first $k$ draws without replacement with $k$ independent uniform position draws: if the independent positions are distinct, keep them; if not, replace them by an independently chosen uniform ordered distinct $k$-tuple. The resulting tuple is uniform among distinct positions and agrees with the original draws except on the collision event. A union bound over the $\binom{k}{2}$ pairs gives collision probability at most $k(k-1)/(2N)$. Hence the type-conditional label marginal differs in total variation from $t^{\otimes k}$ by at most this quantity. Since $t\to p$ in probability and each of the finitely many probabilities $\prod_{r=1}^k t_{i_r}$ is continuous and bounded on the simplex, averaging over shell types proves convergence of the marginal to $p^{\otimes k}$ in total variation. [A1, F1, F5, step 3.1, algebra]

5.1 The lower bound in 1.2 and the rounded type in 1.2 give $\liminf_NN^{-1}\log|\Gamma_N|\ge H(p)$. Every shell type has mean within $\delta_N/N$ of $E$; the compactness argument of 2.2, now without the distance restriction, implies its maximum entropy tends to at most $H(p)$. Therefore $$|\Gamma_N|\le(N+1)^q\exp\!\left(N\max_{t:\,|\sum_jt_je_j-E|\le\delta_N/N}H(t)\right),$$ so $\limsup_NN^{-1}\log|\Gamma_N|\le H(p)$. The two bounds prove the entropy-density limit. [A1, F1, F5, step 2.1, step 3.1] ∎
