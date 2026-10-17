---
id: lem-qsm-finite-range-commutator-path-bound
kind: lemma
title: Volume-independent finite-range commutator path bound
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-local-spin-algebras
  - lem-qsm-local-spin-inclusions-isometric
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Theorem 4.1.2 and proof, pp. 96–101
      url: https://arxiv.org/pdf/1311.2717
    - title: Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, Theorem 2.3 and proof, pp. 4–7
      url: https://arxiv.org/pdf/1004.2086
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $\Phi$ be an interaction of [[def-qsm-bounded-finite-range-interaction]] with parameters $M,R,\kappa,\hbar$. Let $\mu>0$, let $\Lambda\subset\mathbb Z^d$ be finite, let $X\subseteq\Lambda$ be finite and nonempty, and let $Y\subset\mathbb Z^d$ be any finite nonempty set. Take $A\in\mathcal A_X$ and $B\in\mathcal A_Y$, with both embedded in the common finite algebra $\mathcal A_{\Lambda\cup Y}$. Then for every $t\in\mathbb R$,

$$\bigl\|[\alpha_t^\Lambda(A),B]\bigr\|\le 2\|A\|\,\|B\|\,|X|\exp\!\left(\frac{2\kappa M e^{\mu R}}{\hbar}|t|-\mu\operatorname{dist}_\infty(X,Y)\right).$$

Here the finite-volume dynamics is extended by the identity on sites outside $\Lambda$, as in [[def-qsm-bounded-finite-range-interaction]]. The parameter $\mu$ is measured per lattice step in the dimensionless max-coordinate metric. The bound is uniform over finite volumes containing $X$; it is an operator-norm estimate for the stipulated spin model, not a relativistic light cone.

## Facts & Assumptions

**Given:** $d\ge1$, finite $q\ge1$, $\hbar>0$, a finite-range interaction $\Phi$ with $M\ge1$, $R<\infty$, and $\kappa<\infty$, a finite volume $\Lambda$, nonempty $X\subseteq\Lambda$, finite nonempty $Y\subseteq\mathbb Z^d$, and $A\in\mathcal A_X$, $B\in\mathcal A_Y$ embedded in $\mathcal A_{\Lambda\cup Y}$.

[F1] [[def-qsm-bounded-finite-range-interaction]]: each $\Phi(Z)$ is a self-adjoint local matrix, nonzero only for $|Z|\le M$ and $\operatorname{diam}_\infty Z\le R$, and $\sup_x\sum_{Z\ni x}\|\Phi(Z)\|=\kappa<\infty$.

[F2] [[def-qsm-local-spin-algebras]]: each finite-region algebra is a finite-dimensional matrix algebra with its induced operator norm; operators in disjoint tensor factors commute.

[F3] [[lem-qsm-local-spin-inclusions-isometric]]: the factor inclusion $T\mapsto T\otimes I$ is an isometric unital $*$-homomorphism, so local norms agree in larger finite volumes.

## Proof

**Proof technique:** direct finite-volume variation of constants followed by an interaction-path expansion.

**Given:** The interaction, finite-volume dynamics, local matrix norms, and support hypotheses above.

1.1 Fix $B\in\mathcal A_Y$ and define
$$C_B^\Lambda(S,s):=\sup_{D\in\mathcal A_S,\ D\ne0}\frac{\|[\alpha_s^\Lambda(D),B]\|}{\|D\|}$$
for every nonempty $S\subseteq\Lambda$, with all operators viewed in $\mathcal A_{\Lambda\cup Y}$. For $A\in\mathcal A_X$, put $H_X^\Lambda=\sum_{\varnothing\ne Z\subseteq X}\Phi(Z)$ and $A_X(s)=e^{-isH_X^\Lambda/\hbar}Ae^{isH_X^\Lambda/\hbar}$. The finite matrix exponential is unitary because its adjoint is $e^{isH_X^\Lambda/\hbar}$ and the two commuting exponential series multiply to $I$; hence $A_X(s)$ ranges over all of $\mathcal A_X$ and preserves norm. Differentiating finite matrix exponentials and using the Jacobi identity, the terms contained in $X$ cancel and the terms disjoint from $X$ commute with $A_X(s)$. With $K_X(s)=\sum_{Z\subseteq\Lambda:\,Z\cap X\ne\varnothing,\,Z\not\subseteq X}\alpha_s^\Lambda(\Phi(Z))$, the remaining commutator $f(s)=[\alpha_s^\Lambda(A_X(s)),B]$ satisfies
$$f'(s)=\frac{i}{\hbar}[K_X(s),f(s)]-\frac{i}{\hbar}\sum_{\substack{Z\subseteq\Lambda\\Z\cap X\ne\varnothing,\,Z\not\subseteq X}}[\alpha_s^\Lambda(A_X(s)),[\alpha_s^\Lambda(\Phi(Z)),B]].$$
For the homogeneous equation, the finite matrix ODE $U'(s)=(i/\hbar)K_X(s)U(s)$ has a solution on every compact interval: its Picard series converges uniformly because the $n$th iterated integral is bounded by $(T\sup_s\|K_X(s)\|/\hbar)^n/n!$. Each $K_X(s)$ is self-adjoint, so differentiating $U(s)^*U(s)$ gives zero; since $U(0)=I$, $U(s)^*U(s)=I$. In finite dimension this makes $U(s)$ unitary, so conjugation by its propagator preserves the matrix norm. This argument also applies after reversing the time parameter, because the reversed homogeneous generator is still skew-adjoint. Set $\sigma=1$ if $t\ge0$ and $\sigma=-1$ if $t<0$, and write $s=\sigma u$ for $0\le u\le|t|$. The equation for $f(\sigma u)$ has homogeneous commutator generated by $\sigma iK_X(\sigma u)/\hbar$ and a source multiplied by $\sigma$; the source sign does not change its norm. Variation of constants therefore gives the same norm estimate for either sign of $t$, with intermediate dynamics evaluated at signed times:
$$C_B^\Lambda(X,t)\le C_B^\Lambda(X,0)+\frac{2}{\hbar}\sum_{\substack{Z\subseteq\Lambda\\Z\cap X\ne\varnothing}}\|\Phi(Z)\|\int_0^{|t|}C_B^\Lambda(Z,\sigma u)\,du.$$
We enlarged the sum from crossing terms to all terms meeting $X$, which only increases its nonnegative right-hand side. [given, F1, F2, F3, algebra]

2.1 Iterate this integral inequality. All intermediate times retain sign $\sigma$; in absolute-time parameters the iterated region is $0\le u_n\le\cdots\le u_1\le|t|$, whose volume is $|t|^n/n!$. Thus the same factorial weights apply for either sign of time. The zero-length term is at most $2\|B\|\mathbf1_{X\cap Y\ne\varnothing}$. A length-$n$ contribution, $n\ge1$, is a chain $Z_1,\ldots,Z_n\subseteq\Lambda$ with $Z_1\cap X\ne\varnothing$, $Z_{j+1}\cap Z_j\ne\varnothing$, and $Z_n\cap Y\ne\varnothing$, weighted by $\prod_{j=1}^n\|\Phi(Z_j)\|$ and $(2|t|/\hbar)^n/n!$. The first interaction sum is at most $\kappa|X|$; each later sum is at most $\kappa|Z_j|\le\kappa M$, so the total length-$n$ weight is at most $\kappa|X|(\kappa M)^{n-1}$. After $N$ iterations, the unresolved remainder is bounded by $2\|B\|(2|t|/\hbar)^{N+1}\kappa|X|(\kappa M)^N/(N+1)!$; it tends to zero. Hence no infinite path expansion is assumed without convergence. [given, F1, step 1.1, algebra]

3.1 If $X\cap Y=\varnothing$, any contributing length-$n$ chain satisfies $\operatorname{dist}_\infty(X,Y)\le nR$: choose a site in each successive nonempty intersection and apply the triangle inequality, using $\operatorname{diam}_\infty Z_j\le R$ at each of the $n$ steps. Thus its indicator is at most $e^{\mu(nR-\operatorname{dist}_\infty(X,Y))}$. Since $M\ge1$, $\kappa|X|(\kappa M)^{n-1}\le |X|(\kappa M)^n$. Summing the resulting exponential series gives
$$C_B^\Lambda(X,t)\le2\|B\|\,|X|e^{-\mu\operatorname{dist}_\infty(X,Y)}\left(e^{2\kappa M e^{\mu R}|t|/\hbar}-1\right).$$
If $X\cap Y\ne\varnothing$, then the distance is zero and the zero-length term together with the same series is bounded by $2\|B\|\,|X|e^{2\kappa M e^{\mu R}|t|/\hbar}$. In either case, multiplying by $\|A\|$ proves the stated estimate. [given, F1, step 2.1, algebra] ∎

## Remarks

The path expansion counts support incidence, not a trajectory of a particle. The schematic below shows a length-three chain; every arrow means that the adjacent support sets intersect, and each interaction support has max-metric diameter at most $R$. It records the incidence pattern only. The proof uses the stated metric triangle inequality, not the drawing.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (x) at (0,0) {$X$};
  \node (z1) at (2,0) {$Z_1$};
  \node (z2) at (4,0) {$Z_2$};
  \node (z3) at (6,0) {$Z_3$};
  \node (y) at (8,0) {$Y$};
  \draw[->] (x) -- node[above] {$\cap\ne\varnothing$} (z1);
  \draw[->] (z1) -- node[above] {$\cap\ne\varnothing$} (z2);
  \draw[->] (z2) -- node[above] {$\cap\ne\varnothing$} (z3);
  \draw[->] (z3) -- node[above] {$\cap\ne\varnothing$} (y);
\end{tikzpicture}
```
