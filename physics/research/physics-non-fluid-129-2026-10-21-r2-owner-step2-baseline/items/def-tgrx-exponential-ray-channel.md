---
id: def-tgrx-exponential-ray-channel
kind: definition
title: Specified chiral collapse channel
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - lem-tgr-exponential-current
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - cor-c-one-change-of-variables-for-l-one-functions
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-tgr-exponential-current: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes
      url: https://arxiv.org/pdf/gr-qc/0308048
      locator: Sections 6.2.1–6.2.2, printed pp. 32–38, equations (6.2)–(6.26); context for the exponential near-horizon relation and thermal/greybody separation only.
    - title: Stefan Hollands and Robert M. Wald, Quantum Fields in Curved Spacetime, complete review
      url: https://arxiv.org/pdf/1401.2026
      locator: Section 2.3(c), PDF pp. 26–31, equations (52)–(60); context for the collapse assumptions, exponential coordinate, and absorption-filtered spectrum only.
verification:
  precheck: pass
---

## Definition

Fix an upper endpoint $U_H\in\mathbb R$ and a scale $A>0$, both measured in seconds, and let $k>0$ be measured in seconds$^{-1}$. Let $u\in\mathbb R$ be the outgoing coordinate, measured in seconds, and define
$$U(u)=U_H-Ae^{-ku}.$$
Then $U$ is a smooth increasing diffeomorphism from $\mathbb R$ onto $(-\infty,U_H)$, with derivative $U'(u)=Ak e^{-ku}>0$; $U_H$ is only the upper-endpoint label in this channel. Let $\chi>0$ be a fixed conversion factor with units of length per second, and put $\ell(u)=\chi U(u)$ and $\ell_H=\chi U_H$. For $g\in C_c^\infty(\mathbb R;\mathbb C)$, let $u_\ell$ be the smooth inverse of $\ell$ and define $f_g(x)=g(u_\ell(x))$ for $x<\ell_H$, and $f_g(x)=0$ for $x\ge\ell_H$. The support of $g$ is compact, so $f_g\in C_c^\infty(\mathbb R;\mathbb C)$. Define the channel current $j(g)=J(f_g)$ using the Fock-vacuum chiral current $J$, and set
$$W(g,h)=\langle\Omega,J(\overline{f_g})J(f_h)\Omega\rangle_2.$$
The associated two-point distribution is the diffeomorphism pullback of the supplied length-coordinate kernel $C_\ell(X-Y)=-\frac{1}{4\pi}(X-Y-i0)^{-2}$; in seconds coordinates its kernel is
$$K(u,v)=U'(u)U'(v)\left[-\frac{1}{4\pi}\bigl(U(u)-U(v)-i0\bigr)^{-2}\right].$$
Here $i0$ is the lower boundary obtained by testing the regularizations $-\frac{1}{4\pi}(s-i\epsilon)^{-2}$ as $\epsilon\downarrow0$, and the pullback is defined by the smooth diffeomorphism, not by pointwise evaluation on the diagonal. The tested form is of positive type: $W(g,g)\ge0$ for every $g$.

For real-valued tests $g_1,\ldots,g_n$, write
$$M_n(g_1,\ldots,g_n)=\langle\Omega,J(f_{g_1})\cdots J(f_{g_n})\Omega\rangle_2.$$
This Fock-vacuum field is Gaussian in the precise sense that $M_n=0$ for odd $n$, while for even $n$ it is the sum over pair partitions $\pi$ of $\{1,\ldots,n\}$ of $\prod_{(i,j)\in\pi,\ i<j}M_2(g_i,g_j)$, with each contraction ordered as displayed. This is an exact one-dimensional test-coordinate channel; it does not assert existence of four-dimensional collapse scattering.

## Definition references

[[lem-tgr-exponential-current]]

[[def-countable-choice]]

[[def-qft-fock-and-test-spaces]]

[[lem-qft-fock-ccr-car]]

[[cor-c-one-change-of-variables-for-l-one-functions]]

## Facts & Assumptions

**Given:** $U_H\in\mathbb R$, $A,k,\chi>0$, the seconds coordinate $u$, compact smooth tests, and Countable Choice.

[A1] Assume the Axiom of Countable Choice, and no stronger choice principle. [[def-countable-choice]]

[F1] [[lem-tgr-exponential-current]] defines the positive-frequency Fock current on compact smooth tests, gives its vacuum covariance $C_\ell(s)=-\frac{1}{4\pi}(s-i0)^{-2}$ as a positive-type distribution, and constructs the canonical exponential-coordinate current with its exact lower-boundary pullback.

[F2] [[def-qft-fock-and-test-spaces]] fixes the bosonic Fock vacuum, the finite-particle domain, and the creation and annihilation formulas; its construction assumes Countable Choice.

[F3] [[lem-qft-fock-ccr-car]] gives the bosonic commutation relations on the finite-particle domain, including $[a(h),a^\dagger(q)]=\langle h,q\rangle_2 I$.

[F4] [[cor-c-one-change-of-variables-for-l-one-functions]] gives the Lebesgue change-of-variables formula for a $C^1$ diffeomorphism between open sets.

## Proof

1.1 The derivative $\ell'(u)=\chi Ak e^{-ku}$ is positive, and $\ell(u)$ has limits $-\infty$ and $\ell_H$ at the two ends of $\mathbb R$. The inverse function theorem therefore gives a smooth inverse on $(-\infty,\ell_H)$. If $\operatorname{supp}g\subseteq[a,b]$, then $\operatorname{supp}f_g\subseteq[\ell(a),\ell(b)]\subset(-\infty,\ell_H)$, so the zero extension is smooth and compactly supported. Thus $J(f_g)$ is defined by [F1]–[F2]. [given, A1, F1, F2, construct, algebra]

2.1 The map $(u,v)\mapsto(\ell(u),\ell(v))$ is a smooth diffeomorphism, so [F4] transports the two-variable test pairing with Jacobian $\ell'(u)\ell'(v)$. Since $\ell=\chi U$, the regularized identity $\chi^2[-(4\pi)^{-1}(\chi s-i\epsilon)^{-2}]=-(4\pi)^{-1}(s-i\epsilon/\chi)^{-2}$ shows that the positive unit scale cancels in the boundary distribution, giving the stated seconds-coordinate kernel. Positivity is the supplied Fock norm identity $W(g,g)=\|h_{f_g}\|_2^2\ge0$ from [F1]. [A1, F1, F4, step 1.1, algebra]

3.1 On the finite-particle domain, the left vacuum annihilates every creation term and the right vacuum is annihilated by every annihilation operator. Commuting the annihilation part of the leftmost $J(f_{g_1})$ through the later fields, [F3] replaces each commutator by its scalar two-point contraction; the term with the annihilator reaching the right vacuum vanishes. Hence
$$M_n(g_1,\ldots,g_n)=\sum_{j=2}^n M_2(g_1,g_j)\,M_{n-2}(g_2,\ldots,\widehat{g_j},\ldots,g_n).$$
The base cases are $M_0=1$ and $M_1=0$. Induction gives zero for odd $n$ and the stated sum over pair partitions for even $n$. [A1, F1, F2, F3, step 1.1, step 2.1, algebra] ∎
