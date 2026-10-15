---
dependency_level: 2
id: lem-geometric-reversible-chain-rho-mixing
kind: lemma
title: Geometric ergodicity and reversibility give exponential rho-mixing
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measure-kernel-and-probability-kernel
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-phi-irreducible-chain
  - lem-square-integrable-markov-transition-conditional-expectation
  - thm-chapman-kolmogorov-equations
  - thm-conditional-jensen-inequality
  - thm-dominated-convergence
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-taking-out-what-is-known
  - thm-tower-property-of-conditional-expectation
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 2, part 3
      url: https://arxiv.org/pdf/math/0409112
    - title: Gareth O. Roberts and Jeffrey S. Rosenthal, Geometric ergodicity and hybrid Markov chains, Theorem 2 (published Theorem 2.1)
      url: https://www.probability.ca/jeff/ftpdir/hybrid.pdf
axiom_use: AC is inherited through the conditional-expectation and future-path Markov interfaces; the level-set and repeated-square construction uses no further choice principle.
proof_strategy: direct
---

## Statement

Assume AC. Let $P$ be a probability kernel on $(\mathsf X,\mathcal X)$ with invariant
probability $\pi$, and consider its stationary output process $X$. Assume it is $\phi$-irreducible ([[def-phi-irreducible-chain]]), aperiodic
([[def-general-state-aperiodic-markov-chain]]), and Harris recurrent relative
to its nonzero $\sigma$-finite irreducibility measure $\phi$
([[def-harris-recurrent-markov-chain]]). Suppose it is geometrically
ergodic in the sense of
[[def-geometric-and-uniform-ergodicity-for-mcmc-clt]] and reversible with
respect to $\pi$ in the symmetric-flow sense of
[[def-general-state-reversibility-by-symmetric-flow-measure]]. Then there are
$C<\infty$ and $r\in(0,1)$ such that its maximal-correlation mixing
coefficient satisfies
$$\rho_X(n)\le Cr^n\quad(n\ge1).$$

## Facts & Assumptions

**Given:** AC, the stationary $P$-chain and all the hypotheses in the Statement.

[A1] AC covers the conditional-expectation and path-law interfaces used below. ([[def-axiom-of-choice]])

[F1] Geometric ergodicity supplies a measurable finite $M\ge0$ and a common $r\in(0,1)$ with $\|P^k(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^k$ for every $x$ and $k\ge1$. ([[def-geometric-and-uniform-ergodicity-for-mcmc-clt]])

[F2] Reversibility means that the probability flow measure $\pi(dx)P(x,dy)$ is invariant under coordinate interchange. ([[def-general-state-reversibility-by-symmetric-flow-measure]])

[F3] The square-integrable kernel conditional-expectation identity holds with zero filling on the marginal-null set where an integral is not finite. ([[lem-square-integrable-markov-transition-conditional-expectation]])

[F4] For square-integrable real variables, $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] Dominated convergence passes almost-everywhere limits through integrals under an integrable dominating function. ([[thm-dominated-convergence]])

[F6] A bounded measurable future-path functional has conditional expectation, given the chain's past through its initial time, equal to a bounded measurable function of the state at that time. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F7] For bounded measurable $g$, $E[g(X_{j+n})\mid\mathcal F_j]=P^ng(X_j)$, where $\mathcal F_j=\sigma(X_0,\ldots,X_j)$. ([[thm-chapman-kolmogorov-equations]])

[F8] Nested conditional expectations satisfy the tower property, and a known factor can be taken out when the products are integrable. ([[thm-tower-property-of-conditional-expectation]], [[thm-taking-out-what-is-known]])

[F9] Conditional Jensen gives $|E[V\mid\mathcal G]|^2\le E[V^2\mid\mathcal G]$. ([[thm-conditional-jensen-inequality]])

[F10] The coefficient $\rho_X(n)$ is the supremum of absolute correlations over square-integrable past and separated future variables of positive variance. ([[def-mixing-coefficients-for-stationary-markov-chain]])

## Proof

1.1 On real $L^2(\pi)$ put $Tf=Pf$ and $H=\{f:\pi(f)=0\}$. By [F3], conditional Jensen and stationarity give $\|Tf\|_2^2\le\pi(f^2)$ and $\pi(Tf)=\pi(f)$. These identities also show that the operator is well defined on almost-everywhere classes. Thus $T$ is a contraction preserving $H$, and $T1=1$. For bounded $f,g$, [F2] gives $\langle f,Tg\rangle=\langle Tf,g\rangle$ by integrating $f(x)g(y)$ against the flow measure. Bounded truncation converges in $L^2$ by [F5], so contraction and [F4] extend this symmetry to all $L^2$ functions. Iterated kernel integration agrees with $T^k$; for bounded functions this is [F7], and contraction extends the identity to $L^2$ classes. [A1, F2, F3, F4, F5, F7, F9, given]

1.2 For probability measures $\mu,\nu$ and $0\le a\le1$, approximate $a$ uniformly by $2^{-q}\sum_{i=1}^{2^q}1_{\{a\ge i2^{-q}\}}$. Each indicator integral difference is bounded by the event-supremum TV distance, so $|\mu(a)-\nu(a)|\le\|\mu-\nu\|_{\mathrm{TV}}$ on taking limits. Applying this to $a=(h+\|h\|_\infty)/(2\|h\|_\infty)$ for nonzero bounded measurable $h$, and separating $h=0$, gives $|P^kh(x)-\pi(h)|\le2\|h\|_\infty M(x)r^k$. [F1, construct, algebra]

2.1 Put $C_m=\{M\le m\}$ for positive integers $m$. If bounded $h$ vanishes off $C_m$ and $f=h-\pi(h)$, symmetry and invariance give $\|T^kf\|_2^2=\langle f,T^{2k}f\rangle=\int h(x)(P^{2k}h(x)-\pi(h))\,\pi(dx)$ for $k\ge1$. Step 1.2 therefore gives $0\le\|T^kf\|_2^2\le2m\|h\|_\infty^2r^{2k}$. Write $A=\sqrt{2m}\|h\|_\infty<\infty$, so $\|T^kf\|_2\le Ar^k$. No integral of $M$ over the whole state space has been used. [F1, step 1.1, step 1.2, algebra]

3.1 For $u\in H$ and $a\ge1$, symmetry and [F4] give $\|T^au\|_2^2=\langle u,T^{2a}u\rangle\le\|u\|_2\|T^{2a}u\|_2$. Repeating with $a=1,2,4,\ldots,2^{\ell-1}$ yields $\|Tu\|_2\le\|u\|_2^{1-2^{-\ell}}\|T^{2^\ell}u\|_2^{2^{-\ell}}$. For the $f$ in step 2.1, if $f=0$ the bound $\|Tf\|_2\le r\|f\|_2$ is immediate; otherwise $A>0$ and the last display is at most $rA^{2^{-\ell}}\|f\|_2^{1-2^{-\ell}}$, tending to $r\|f\|_2$. Hence that bound holds for every such $f$. [F4, step 1.1, step 2.1, algebra]

4.1 For $u\in H$ choose a finite measurable representative and put $h_m=1_{C_m}\max(-m,\min(u,m))$. Finiteness of $M$ gives $h_m\to u$ almost everywhere and $|h_m-u|\le|u|$, so [F5] gives $h_m\to u$ in $L^2$. By [F4], $\pi(h_m)\to0$, and therefore $h_m-\pi(h_m)\to u$ in $L^2$. Applying step 3.1 to these centered functions and taking limits through the contraction $T$ gives $\|Tu\|_2\le r\|u\|_2$. Iteration on $H$ proves $\|T^nu\|_2\le r^n\|u\|_2$ for all $n\ge1$. This also covers $H=\{0\}$. [F1, F4, F5, step 1.1, step 3.1, construct]

5.1 Fix $j\ge0$ and bounded centered real $U,V$ measurable respectively for $\mathcal F_j$ and $\sigma(X_{j+n},X_{j+n+1},\ldots)$. By [F6] there is bounded measurable $g$ such that $E[V\mid\mathcal F_{j+n}]=g(X_{j+n})$. Stationarity and [F9] give $\pi(g)=0$ and $\|g\|_2\le\|V\|_2$. The tower property and [F7] give $E[V\mid\mathcal F_j]=P^ng(X_j)$. Taking out $U$, applying [F4] and stationarity, and then step 4.1, yields $|E[UV]|=|E[UP^ng(X_j)]|\le\|U\|_2\|T^ng\|_2\le r^n\|U\|_2\|V\|_2$. [A1, F4, F6, F7, F8, F9, step 4.1, given]

6.1 For general centered square-integrable $U,V$ in the same sigma-algebras, truncate each at levels $\pm m$ and subtract its expectation. By [F5] and [F4], these bounded centered variables converge in $L^2$; [F4] passes their covariances and norms to the limit in step 5.1. Dividing by the positive standard deviations and taking the suprema in [F10] proves $\rho_X(n)\le r^n$. If no positive-variance variables exist, the coefficient is zero by the nonnegative empty-supremum convention. Thus the stated conclusion holds with $C=1$. [F4, F5, F10, step 5.1] ∎

## Source notes

Jones, Theorem 2(3), supplies the stated implication. Roberts and Rosenthal,
*Geometric ergodicity and hybrid Markov chains*, Theorem 2 of the author-hosted
preprint (published Theorem 2.1), proves the reversible spectral-gap route;
its full proof is on PDF pp. 7–10 at
https://www.probability.ca/jeff/ftpdir/hybrid.pdf . The proof here instead uses
envelope level sets and repeated Cauchy–Schwarz to obtain the operator bound
locally. It needs neither an integrable envelope nor a compact or general
spectral theorem. The irreducibility, recurrence and aperiodicity hypotheses
are retained from the source statement; the explicit common geometric rate
and reversibility suffice for this argument.
