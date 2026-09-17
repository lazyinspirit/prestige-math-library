---
id: thm-kato-rellich
kind: theorem
title: "Kato-Rellich theorem"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-relative-boundedness-with-respect-to-an-operator, lem-second-resolvent-identity-for-closed-operator-perturbations, thm-self-adjoint-resolvent-estimate, thm-self-adjointness-range-criterion, lem-neumann-series, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-unbounded-linear-operator-domain-and-graph, thm-unbounded-borel-functional-calculus]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 6.4 with complete proof, pp.158-160"
---

## Statement

Let $A$ be self-adjoint and let $B$ be symmetric with $D(A)\subseteq D(B)$ and
$A$-bound less than one ([[def-relative-boundedness-with-respect-to-an-operator]]).
Then $A+B$ with domain $D(A)$ is self-adjoint. If $A$ is merely essentially
self-adjoint and $B$ is symmetric with $D(A)\subseteq D(B)$ and $A$-bound less
than one, then $A+B$ on $D(A)$ is essentially self-adjoint and its closure is
the self-adjoint operator obtained by applying the first part to $\overline A$
and the graph-norm extension of $B$ to $D(\overline A)$. If $A\ge\gamma$ and
$(a,b)$ is an admissible pair for $B$ with $a<1$, then
$A+B\ge\gamma-\max\{a|\gamma|+b,\ b/(1-a)\}$.

## Facts & Assumptions

[A1] On $D(A)$ the graph norm of $A$ dominates the graph norms of $B$ and of $A+B$, so $A+B$ is defined on $D(A)$ with $D(A)\subseteq D(A+B)$, and $B$ is graph-norm bounded for $A$ ([[def-relative-boundedness-with-respect-to-an-operator]]).

[A2] For $\mu>0$ the resolvent $R_A(i\mu)=(i\mu-A)^{-1}$ exists with $\|R_A(i\mu)\|\le1/\mu$, and $A R_A(i\mu)$ is the bounded operator whose symbol at the spectral point $\nu$ is $\nu(i\mu-\nu)^{-1}$, of modulus at most $1$. If $A\ge\gamma$ and $\lambda>-\gamma$, the same symbolic description applies with $i\mu$ replaced by $-\lambda$: $A R_A(-\lambda)$ has symbol $\nu(-\lambda-\nu)^{-1}=-\nu(\nu+\lambda)^{-1}$ at the spectral point $\nu$, so its norm is $\sup_{\nu\in\sigma(A)}|\nu|/|\nu+\lambda|$, which for $\sigma(A)\subseteq[\gamma,\infty)$ and $\gamma+\lambda>0$ is at most $\max(1,|\gamma|/(\lambda+\gamma))$, and $\|R_A(-\lambda)\|\le(\lambda+\gamma)^{-1}$ ([[thm-self-adjoint-resolvent-estimate]], [[thm-unbounded-borel-functional-calculus]]).

[A3] If $\|X\|<1$ in a unital Banach algebra then $I+X$ is invertible with $(I+X)^{-1}=\sum_{k\ge0}(-X)^k$ ([[lem-neumann-series]]).

[A4] A densely defined symmetric operator $S$ with $\operatorname{ran}(S+i\mu)=\operatorname{ran}(S-i\mu)=H$ for some $\mu>0$ is self-adjoint, by the range criterion with the parameter $i\mu$ ([[thm-self-adjointness-range-criterion]]).

[A5] For a self-adjoint $S$ the spectrum is a closed subset of $\mathbb R$, $\inf\sigma(S)\in\sigma(S)$, and $\|R_S(t)\|=\operatorname{dist}(t,\sigma(S))^{-1}$ for every real $t\notin\sigma(S)$; if $S\ge c$ then $\sigma(S)\subseteq[c,\infty)$, the inequality $S\ge c$ is exactly $\sigma(S)\subseteq[c,\infty)$, $\inf\sigma(S)=\min\sigma(S)$, and $\|R_S(t)\|\le(t-c)^{-1}$ for $t>c$ ([[thm-self-adjoint-resolvent-estimate]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

## Proof

**Proof technique:** direct.

**Given:** $A$ self-adjoint, $B$ symmetric with $D(A)\subseteq D(B)$ and $\|Bx\|\le a\|Ax\|+b\|x\|$ on $D(A)$ for some $a<1$.

1.1 For $\mu>0$: $\|BR_A(i\mu)\|\le a\|AR_A(i\mu)\|+b\|R_A(i\mu)\|\le a+b/\mu$ by [A1] and [A2]; choose $\mu$ so large that $a+b/\mu<1$ and put $X:=BR_A(i\mu)$ and $Y:=BR_A(-i\mu)$, both of norm less than $1$. [A1, A2]

2.1 By [A3] the operators $I-X$ and $I-Y$ are invertible with bounded inverses, and the second resolvent identity in the form $(A+B\pm i\mu)=(I-BR_A(\mp i\mu))(A\pm i\mu)$ holds on $D(A)$, because $R_A(\mp i\mu)(A\pm i\mu)=-I$; since $A\pm i\mu$ are bijections $D(A)\to H$ by [A2], both ranges of $A+B\pm i\mu$ equal $H$. [A2, A3, step 1.1]

3.1 $A+B$ is symmetric on $D(A)$ (a sum of symmetric operators, with common domain $D(A)$) and densely defined, so step 2.1 and [A4] make $A+B$ self-adjoint. [A1, A4, step 2.1]

3.2 Lower bound: the estimate of [A2] gives $\|BR_A(-\lambda)\|\le a\max(1,|\gamma|/(\lambda+\gamma))+b/(\lambda+\gamma)$ for $\lambda>-\gamma$, a bound that decreases to $a<1$ as $\lambda\to\infty$, so choose $\lambda>-\gamma$ with $\|BR_A(-\lambda)\|<1$ and put $S_t:=A+tB$ for $t\in[0,1]$; with the admissible pair $(ta,tb)$ and $ta<1$, the argument of steps 1.1-3.1 shows that every $S_t$ is self-adjoint on $D(A)$. The factorization $S_t+\lambda=(I-tBR_A(-\lambda))(A+\lambda)$ with $\|tBR_A(-\lambda)\|\le t\|BR_A(-\lambda)\|<1$, [A3] and the bijectivity of $A+\lambda$ give $-\lambda\in\rho(S_t)$ and $\|R_{S_t}(-\lambda)\|\le(1-\|BR_A(-\lambda)\|)^{-1}(\lambda+\gamma)^{-1}$ for every $t$, so by [A5] $\operatorname{dist}(-\lambda,\sigma(S_t))\ge\rho$ with $\rho:=(1-\|BR_A(-\lambda)\|)(\lambda+\gamma)>0$, and hence each $t$ satisfies $\inf\sigma(S_t)\ge-\lambda+\rho$ or $\inf\sigma(S_t)\le-\lambda-\rho$. Since the same estimate is nonincreasing in the resolvent point, every $\lambda'\ge\lambda$ also has $\|BR_A(-\lambda')\|<1$, so the factorisation with $-\lambda'$ in place of $-\lambda$ shows $-\lambda'\in\rho(S_t)$ for every $t\in[0,1]$; as $\sigma(S_t)$ is closed this gives $\sigma(S_t)\cap(-\infty,-\lambda)=\varnothing$, so $\inf\sigma(S_t)\ge-\lambda$ is finite. The function $f(t):=\inf\sigma(S_t)$ is the infimum of the affine functions $t\mapsto\langle(A+tB)x,x\rangle/\|x\|^2$ over $x\in D(A)\setminus\{0\}$, so it is concave on $[0,1]$, and being real-valued and concave it is continuous there, with $f(0)=\inf\sigma(A)\ge\gamma>-\lambda$. If $f(1)<-\lambda$, then concavity gives $f(t)\ge(1-t)f(0)+tf(1)$, so $f(t)>-\lambda$ and hence $f(t)\ge-\lambda+\rho$ for all small $t$, while continuity and the dichotomy above force a downward jump of $f$ of size at least $2\rho$ at an interior point, which is impossible; therefore $f(1)\ge-\lambda$, that is $A+B\ge-\lambda$. For $\lambda>-\gamma$ the estimate of [A2] and [A5] gives $\|BR_A(-\lambda)\|\le a\max(1,|\gamma|/(\lambda+\gamma))+b/(\lambda+\gamma)$; if $|\gamma|(1-a)\le b$ then any $\lambda$ with $\lambda+\gamma>b/(1-a)$ works and the limit gives $A+B\ge\gamma-b/(1-a)$, while if $|\gamma|(1-a)\ge b$ then any $\lambda$ with $\lambda+\gamma>a|\gamma|+b$ works and the limit gives $A+B\ge\gamma-a|\gamma|-b$. In both cases $A+B\ge\gamma-\max\{a|\gamma|+b,b/(1-a)\}$. [A2, A3, A5, step 2.1]

4.1 Essentially self-adjoint case: let $T:=\overline A$ be the self-adjoint closure. For $x\in D(T)$ choose $x_n\in D(A)$ with $x_n\to x$ and $Ax_n\to Tx$; then $\|B(x_n-x_m)\|\le a\|A(x_n-x_m)\|+b\|x_n-x_m\|\to0$, so $(Bx_n)$ converges to a limit $\widetilde Bx$, and $\widetilde B$ is a well-defined symmetric operator on $D(T)$ extending $B$ with $\|\widetilde Bx\|\le a\|Tx\|+b\|x\|$. step 3.1 applied to $T$ and $\widetilde B$ makes $T+\widetilde B$ self-adjoint with domain $D(T)$. Since $A+B\subseteq T+\widetilde B$ and $T+\widetilde B$ is closed, $\operatorname{cl}(A+B)\subseteq T+\widetilde B$; conversely every $x\in D(T)$ is a limit of $x_n\in D(A)$ with $(A+B)x_n\to(T+\widetilde B)x$, so $T+\widetilde B\subseteq\operatorname{cl}(A+B)$. Hence $A+B$ is essentially self-adjoint with closure $T+\widetilde B$. [A1, step 3.1] ∎
