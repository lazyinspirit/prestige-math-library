---
id: lem-gr-galerkin-projection-properties
kind: lemma
title: "The Galerkin projection is self-adjoint, commutes with derivatives, is a contraction in every H^r, converges to the identity and has the sharp Fourier-tail bound"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, def-gr-galerkin-fourier-projection, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "M. E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (UNC lecture notes, 2018), Section 1 (Fourier series on the torus T^n): characters, Fourier coefficients, the Parseval identity and convergence of the coefficient series"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $m\ge1$, $N\ge0$, and let $P_N$ be the Galerkin
projection and $X_N$ the Galerkin space of [[def-gr-galerkin-fourier-projection]]
on $\mathbb T^3_{2\pi}$. Then:

**(a)** $P_N$ is linear on $L^2(\mathbb T^3_{2\pi};\mathbb R^m)$, self-adjoint
($\langle P_Nu,v\rangle_2=\langle u,P_Nv\rangle_2$ for all $u,v\in L^2$) and
idempotent ($P_N^2=P_N$), with range $X_N$ and kernel the classes with vanishing
coefficients on $\Lambda_N$;

**(b)** for every integer $s\ge0$, every multi-index $\alpha$ with
$|\alpha|\le s$ and every $u\in H^s$, $P_ND^\alpha u=D^\alpha P_Nu$;

**(c)** for every integer $r\ge0$ and every $u\in H^r$,
$\|P_Nu\|_{H^r}\le\|u\|_{H^r}$;

**(d)** for every integer $r\ge0$ and every $u\in H^r$, $P_Nu\to u$ in $H^r$ as
$N\to\infty$;

**(e)** for every integer $s\ge1$, every $u\in H^s$ and every $N\ge0$,
$$\|u-P_Nu\|_{H^{s-1}}\le C_s\,(1+N^2)^{-1/2}\,\|u\|_{H^s}$$
with $C_s$ depending only on $s$.

## Facts & Assumptions
**Given:** Countable Choice, $m\ge1$, $N\ge0$, and the torus, characters, Fourier coefficients, projection $P_N$ and spaces $H^r$ of [[def-gr-periodic-torus-and-sobolev-spaces]] and [[def-gr-galerkin-fourier-projection]].

[L1] Orthonormal basis and pairing: for $f,g\in L^2$ the coefficient map is a surjective isometry and $\langle f,g\rangle_2=\sum_k\widehat f(k)\cdot\overline{\widehat g(k)}$ with absolute convergence; the characters are real-paired through the reality condition $\widehat u(-k)=\overline{\widehat u(k)}$ for real-valued $u$.

[L2] Differentiation and norm equivalence: for $u\in H^r$ and $|\alpha|\le r$, $\widehat{D^\alpha u}(k)=(ik)^\alpha\widehat u(k)$, and $\|u\|_{H^r}^2=\sum_kq_k^r|\widehat u(k)|^2$ with $q_k^r:=\sum_{|\alpha|\le r}|k^\alpha|^2$ satisfying $4^{-r}(1+|k|^2)^r\le q^r_k\le(r+1)^3(1+|k|^2)^r$ ([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]).

[L3] $\Lambda_N$ is finite and symmetric under $k\mapsto-k$ ([[def-gr-galerkin-fourier-projection]]).



## Proof

**Proof technique:** direct.

1.1 (Algebraic properties (a).) Linearity is immediate since coefficients are linear in $u$. For the pairing, [L1] and the finiteness of $\Lambda_N$ give $\langle P_Nu,v\rangle_2=\sum_{k\in\Lambda_N}\widehat u(k)\cdot\overline{\widehat v(k)}$ and $\langle u,P_Nv\rangle_2=\sum_{l\in\Lambda_N}\widehat u(l)\cdot\overline{\widehat v(l)}$ after reindexing $l\mapsto-l$ and using [L3]; the two sums are equal. Since the coefficients in $\Lambda_N$ are unchanged, $P_N^2=P_N$; the kernel and range descriptions are read off from the coefficient isometry. [L1, L3, algebra]

1.2 (Derivative commutation (b).) For $|\alpha|\le s$ and $u\in H^s$, both $D^\alpha u\in H^{s-|\alpha|}\subseteq L^2$ and $P_Nu\in X_N$ are defined; by [L2] the Fourier coefficient of $P_ND^\alpha u$ at $k$ is $(ik)^\alpha\widehat u(k)$ for $k\in\Lambda_N$ and $0$ otherwise, and that of $D^\alpha P_Nu$ is $(ik)^\alpha\widehat u(k)$ for $k\in\Lambda_N$ and $0$ otherwise, since $P_Nu$ is a finite trigonometric polynomial whose derivatives have the stated coefficients. Equality of coefficients gives (b). [L1, L2, algebra]

1.3 (Contraction (c) and convergence (d).) For $u\in H^r$, [L2] and the definition of $P_N$ give $\|P_Nu\|_{H^r}^2=\sum_{k\in\Lambda_N}q^r_k|\widehat u(k)|^2\le\sum_kq^r_k|\widehat u(k)|^2=\|u\|_{H^r}^2$, which is (c). Similarly $\|u-P_Nu\|_{H^r}^2=\sum_{k\notin\Lambda_N}q^r_k|\widehat u(k)|^2$ is the tail of the convergent series $\sum_kq^r_k|\widehat u(k)|^2$, hence tends to $0$ as $N\to\infty$ with $\Lambda_N$ increasing to $\mathbb Z^3$; this is (d). [L2, L3, algebra]

2.1 (Tail bound (e).) For $|k|>N$ and $|\alpha|\le s-1$, $|k^\alpha|^2\le(1+|k|^2)^{s-1}$, so $q^{s-1}_k\le(s+1)^3(1+|k|^2)^{s-1}\le(s+1)^32(1+N^2)^{-1}(1+|k|^2)^s$ because $(1+|k|^2)\ge1+N^2$; hence $\|u-P_Nu\|_{H^{s-1}}^2\le2(s+1)^3(1+N^2)^{-1}\sum_k(1+|k|^2)^s|\widehat u(k)|^2\le C_s^2(1+N^2)^{-1}\|u\|_{H^s}^2$ by the norm equivalence [L2]. Taking square roots gives (e). [L2, algebra] ∎



## Remarks

- **Use.** Clause (b) is used to differentiate the Galerkin equation in [[lem-gr-galerkin-energy-inequality]] and [[lem-gr-galerkin-time-derivative-bound]]; (c) makes $P_N$ an $L^2$-contraction in the weak-form argument of [[lem-gr-galerkin-limit-is-classical-solution]]; (e) is the compactness estimate of [[lem-gr-galerkin-compactness]].
