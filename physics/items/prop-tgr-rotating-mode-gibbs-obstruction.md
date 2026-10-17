---
id: prop-tgr-rotating-mode-gibbs-obstruction
kind: proposition
title: Rotating mode Gibbs obstruction
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-tgr-countable-l2-completeness
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  lem-tgr-countable-l2-completeness: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, finite Gibbs/KMS calculation, printed pp. 76–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, KMS and Gibbs-state discussion, printed pp. 13–14
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Let $\mathbb N_0=\{0,1,2,\ldots\}$ and let $\mathcal H:=\ell^2(\mathbb N_0,\mathbb C)$ be the complex square-summable sequences with inner product $\langle x,y\rangle=\sum_{n\ge0}x_n\overline{y_n}$, linear in its first argument. Let $e_n$ be the sequence with value $1$ at $n$ and $0$ elsewhere. Write $\mathcal B(\mathcal H)$ for the bounded complex-linear operators on $\mathcal H$, with operator norm $\|B\|:=\sup_{\|x\|_2\le1}\|Bx\|_2$; for $C\in\mathcal B(\mathcal H)$, $C^*$ is its bounded Hilbert-space adjoint, characterized by $\langle Cx,y\rangle=\langle x,C^*y\rangle$. A state on this operator algebra means a bounded complex-linear functional $\omega$ with $\omega(I)=1$ and $\omega(C^*C)\ge0$ for every $C\in\mathcal B(\mathcal H)$. Define the occupation-number operator
$$D(\mathcal N):=\left\{x\in\mathcal H:\sum_{n\ge0}n^2|x_n|^2<\infty\right\},\qquad (\mathcal Nx)_n:=nx_n.$$
For a densely defined operator $T$ on this space, use the adjoint relation
$$D(T^\dagger):=\left\{y\in\mathcal H:\exists z\in\mathcal H\ \forall x\in D(T),\ \langle Tx,y\rangle=\langle x,z\rangle\right\},\qquad T^\dagger y:=z.$$
The representing $z$ is unique when $D(T)$ is dense; here “self-adjoint” means $D(T^\dagger)=D(T)$ and $T^\dagger x=Tx$ on that domain.

Let $\epsilon>0$ be in joules, $m\in\mathbb Z$ a dimensionless azimuthal mode number, $\Omega\in\mathbb R$ an angular velocity in $\mathrm{s}^{-1}$, $\hbar>0$ in joule-seconds, and $\beta_K>0$ in joules$^{-1}$. Set
$$H:=\epsilon\mathcal N,\qquad J:=\hbar m\mathcal N,\qquad a:=\epsilon-\hbar m\Omega.$$ 
For $m\ne0$, $J$ has domain $D(\mathcal N)$; for $m=0$, $J$ is the zero operator on all of $\mathcal H$. The operator $H$ has energy units J, $J$ has angular-momentum units J s, and $a$ has energy units J, so $\Omega J$ also has units J. Define $K_0:=H-\Omega J$ on the common domain $D(\mathcal N)$ and let $K:=\overline{K_0}$ be its operator closure. For $a\ne0$, $K=a\mathcal N$ has domain $D(\mathcal N)$; for $a=0$, $K$ is the zero operator on all of $\mathcal H$. Thus $K$ is the self-adjoint closure of the rotating generator $H-\Omega J$, including at the zero threshold. Then $\mathcal N$, $H$, $J$ and $K$ are self-adjoint on the stated domains.

Define the one-mode occupation partition sum by
$$Z_{\beta_K}(a):=\sum_{n=0}^\infty e^{-\beta_Kan}\in[0,+\infty].$$
It is the diagonal trace of the positive Gibbs weights in the occupation basis whenever the sum is finite. This sum is finite exactly when $a=\epsilon-\hbar m\Omega>0$, in which case
$$Z_{\beta_K}(a)=\frac{1}{1-e^{-\beta_Ka}}.$$
For $a>0$, the weights $p_n=Z_{\beta_K}(a)^{-1}e^{-\beta_Kan}$ sum to one and define the diagonal Gibbs functional
$$\omega_a(B):=\sum_{n=0}^{\infty}p_n\langle Be_n,e_n\rangle,\qquad B\in\mathcal B(\mathcal H).$$
The proof shows that this is a state in the stated sense. For $a\le0$, the occupation partition sum diverges, so no normalized Gibbs state of this trace form exists. This is a single bosonic mode calculation; it constructs no continuum field state or rotating-spacetime equilibrium.

## Facts & Assumptions

**Given:** The square-summable sequence space, its standard coordinate vectors, the real parameters and units in the Statement, and the displayed maximal diagonal domains.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: $\ell^2(I,\mathbb C)$ consists of complex families for which the supremum of finite subsums $\sum_{i\in F}|x_i|^2$ is finite; its norm is that square root and its pairing $\sum_i x_i\overline{y_i}$ is linear in the first argument. The definition gives an inner-product space but does not assert completeness.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner product obeys $|\langle x,y\rangle|\le\|x\|\|y\|$, so the coordinate pairings and adjoint pairings used below converge.

[F3] [[lem-tgr-countable-l2-completeness]]: the displayed $\ell^2(\mathbb N_0,\mathbb C)$ sequence space with its stated inner product is complete and therefore is a Hilbert space.

## Proof

1.1 By [F3], $\mathcal H$ with the displayed inner product is complete, so it is a Hilbert space. For $x\in\mathcal H$, put $S:=\sum_{n\ge0}|x_n|^2=\|x\|_2^2$ and $S_M:=\sum_{n=0}^M|x_n|^2$. Every finite subset of $\mathbb N_0$ is contained in some $\{0,\ldots,M\}$, so $S_M\uparrow S$. The finite-subsum splitting identity in [F1], applied to $\{0,\ldots,M\}$, gives $\|x-\sum_{n=0}^Mx_ne_n\|_2^2=\sum_{n>M}|x_n|^2=S-S_M\to0$. Thus finite-support sequences are dense and lie in $D(\mathcal N)$, so $\mathcal N$ is densely defined. For $x,y\in D(\mathcal N)$, Cauchy–Schwarz [F2] gives convergence of both inner-product sums and $$\langle \mathcal Nx,y\rangle=\sum_n nx_n\overline{y_n}=\sum_n x_n\overline{ny_n}=\langle x,\mathcal Ny\rangle,$$ so the operator is symmetric. [given, F1, F2, F3, algebra]

1.2 On the basis vector $e_n$, the Gibbs weight for $K$ is $e^{-\beta_Kan}$, so the partition sum is the displayed nonnegative series. If $a>0$, put $r=e^{-\beta_Ka}\in(0,1)$; its partial sums are $(1-r^{M+1})/(1-r)$ and tend to $(1-r)^{-1}$. If $a=0$, every term is $1$ and the partial sums tend to $+\infty$. If $a<0$, the terms $e^{\beta_K|a|n}$ do not tend to zero, so the nonnegative series diverges. [given, algebra]

2.1 If $y\in D(\mathcal N)$, then $z:=\mathcal Ny\in\mathcal H$, and step 1.1 shows $\langle\mathcal Nx,y\rangle=\langle x,z\rangle$ for every $x\in D(\mathcal N)$; thus $y\in D(\mathcal N^\dagger)$ and $\mathcal N^\dagger y=\mathcal Ny$. Conversely, if $y\in D(\mathcal N^\dagger)$ with representing vector $z\in\mathcal H$, test the defining identity on each $x=e_n$ to obtain $z_n=ny_n$. Since $z$ is square-summable, $\sum_n n^2|y_n|^2<\infty$, so $y\in D(\mathcal N)$ and $z=\mathcal Ny$. Therefore $D(\mathcal N^\dagger)=D(\mathcal N)$ and $\mathcal N^\dagger=\mathcal N$. [given, F1, step 1.1, algebra]

3.1 Multiplication by a real nonzero scalar $c$ leaves the adjoint domain $D(\mathcal N)$ unchanged and multiplies the adjoint action by $c$: the same coordinate test as step 2.1 forces $z_n=cn y_n$, and $(cn y_n)_n$ is square-summable exactly when $(ny_n)_n$ is. Thus $c\mathcal N$ is self-adjoint on $D(\mathcal N)$. The zero operator on all of $\mathcal H$ is self-adjoint: its adjoint relation forces $\langle x,z\rangle=0$ for every $x\in\mathcal H$, in particular $x=z$, so $z=0$. Taking $c=\epsilon$ and $c=\hbar m$ when $m\ne0$ proves the assertions for $H$ and $J$; when $m=0$, $J=0$ on all of $\mathcal H$. On the common domain, $K_0=a\mathcal N$. If $a\ne0$, this operator is self-adjoint and closed by the scalar argument, so its closure is itself. If $a=0$, $K_0$ is zero on the dense finite-support domain $D(\mathcal N)$; its graph closure is $\mathcal H\times\{0\}$ and hence $K$ is zero on all of $\mathcal H$, which is self-adjoint. [given, step 1.1, step 2.1, algebra]

4.1 In the finite case $a>0$, $p_n=(1-r)r^n$ are positive and sum to one. For each $B\in\mathcal B(\mathcal H)$, Cauchy–Schwarz [F2] and the operator norm give $|\langle Be_n,e_n\rangle|\le\|Be_n\|_2\|e_n\|_2\le\|B\|$, hence $\sum_n p_n|\langle Be_n,e_n\rangle|\le\|B\|$; the defining series for $\omega_a(B)$ is absolutely convergent and $|\omega_a(B)|\le\|B\|$. Absolute convergence gives complex linearity, and $\omega_a(I)=\sum_np_n=1$. For every $C\in\mathcal B(\mathcal H)$, $\omega_a(C^*C)=\sum_np_n\langle C^*Ce_n,e_n\rangle=\sum_np_n\|Ce_n\|_2^2\ge0$. Thus $\omega_a$ is a bounded positive normalized linear functional, hence a state. If $a\le0$, step 1.2 gives no finite normalizer for these same occupation weights. This proves exactly the asserted trace-Gibbs obstruction without any field-theoretic or spacetime extension. [given, F1, F2, step 1.2, algebra] ∎

## Remarks

The source treatments motivate finite Gibbs weighting and KMS equilibrium. The positivity threshold, weighted domain, self-adjointness and geometric-series calculation above are proved directly for this one-mode model; no rotating-field or black-hole conclusion is imported.
