---
id: thm-hk-is-a-hilbert-space
kind: theorem
title: $H^k$ is a Hilbert space under the derivative-sum inner product
status: published
origin: pipeline
deps: [def-hk-and-hk-zero-notation, def-sobolev-space-wkp-and-its-norm, lem-weak-derivative-linearity-locality-and-commutation, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, thm-sobolev-spaces-are-banach-spaces, def-inner-product-space, def-real-and-complex-inner-product-space, def-hilbert-space, thm-holder-inequality-for-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-calligraphic-l-p-on-a-measure-space, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3 §3.5
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Definition 3.23, printed p. 59 (PDF p. 63)
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011), Chapter 9 §9.1
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: definition and elementary properties of the Sobolev spaces $W^{m,p}(\Omega)$; the case $p=2$ is the Hilbert space $H^m$
---

## Statement

Assume the Axiom of Choice, used to invoke the published $L^2$ completeness
through the Banach-space theorem for $W^{k,2}$. Let
$\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, let $k\in\mathbb N_0$, and let
$\mathbb K\in\{\mathbb R,\mathbb C\}$. On $H^k(\Omega;\mathbb K)=
W^{k,2}(\Omega;\mathbb K)$, with $\mathcal A_k=\{\alpha\in\mathbb N_0^n:
|\alpha|\le k\}$, define
$$\langle u,v\rangle_{H^k(\Omega)}=\sum_{\alpha\in\mathcal A_k}\int_\Omega D^\alpha u\,\overline{D^\alpha v}\,dx .$$
In the real case $\mathbb K=\mathbb R$ the conjugation is the identity, so the
summand is $\int_\Omega D^\alpha u\,D^\alpha v\,dx$.

Then this formula is representative-independent and finite and defines an
inner product on the real or complex vector space $H^k(\Omega;\mathbb K)$ that
is linear in the first variable, conjugate-linear and conjugate-symmetric in
the second (symmetric in the real case) and positive definite. Its induced
norm is exactly the displayed $W^{k,2}$ norm of
[[def-sobolev-space-wkp-and-its-norm]], and consequently
$H^k(\Omega;\mathbb K)$ is a Hilbert space over $\mathbb K$.

Both scalar fields are treated, the order $k=0$ is included, and
$\Omega=\varnothing$ gives the zero space. The Axiom of Choice is spent only
through the completeness interface of
[[thm-sobolev-spaces-are-banach-spaces]] and through the Countable-Choice
conventions of the notation [[def-hk-and-hk-zero-notation]]; the finite
enumeration of $\mathcal A_k$ and the finitely many representative selections
below are choice-free.

## Facts & Assumptions

**Given:** The Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; $k\in\mathbb N_0$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and classes $u,v\in H^k(\Omega;\mathbb K)$.

[F1] $H^k(\Omega;\mathbb K):=W^{k,2}(\Omega;\mathbb K)$, the elements are the same almost-everywhere classes, and their weak derivatives and norm are exactly those already defined for $W^{k,2}$ ([[def-hk-and-hk-zero-notation]]).

[F2] $W^{k,p}(\Omega;\mathbb K)$ consists of the classes $u\in L^p(\Omega;\mathbb K)$ such that, for every $\alpha\in\mathcal A_k$, there is an $L^p$ class with locally integrable representative satisfying the weak test identity; each such derivative determines one $L^p$ class $D^\alpha u$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F3] $\mathcal A_k$ is finite and nonempty: every coordinate of a multi-index in it lies in $\{0,\ldots,k\}$, and it contains the zero multi-index ([[def-sobolev-space-wkp-and-its-norm]]).

[F4] For the zero multi-index $D^0u=u$, and $\mathcal A_0=\{0\}$, so $W^{0,p}(\Omega;\mathbb K)=L^p(\Omega;\mathbb K)$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F5] The displayed $W^{k,p}$ norm is the finite-$p$ root of the sum of the $p$-th powers of the derivative $L^p$ norms for $1\le p<\infty$, and the maximum of those norms for $p=\infty$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F6] On every measure space the pairing $\langle f,g\rangle=\int f\overline g$ on complex $L^2$ is representative-independent, linear in the first variable, conjugate-linear in the second, conjugate symmetric and positive definite, with $\langle f,f\rangle=\|f\|_2^2$. For each finite $m\ge0$ the same conclusions hold on tuples $F=(f_j)_{j<m}$, with $B(F,G)=\sum_{j<m}\langle f_j,g_j\rangle$ and $\|F\|^2=\sum_{j<m}\|f_j\|_2^2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F7] Under the Axiom of Choice, $W^{k,p}(\Omega;\mathbb K)$ with the displayed norm is a complete normed space over $\mathbb K$; in particular it is a $\mathbb K$-vector space ([[thm-sobolev-spaces-are-banach-spaces]]).

[F8] An inner product on an $F$-vector space $V$, $F\in\{\mathbb R,\mathbb C\}$, is a function $\langle\cdot,\cdot\rangle:V\times V\to F$ that is linear in the first argument, satisfies $\langle u,v\rangle=\overline{\langle v,u\rangle}$, and has $\langle v,v\rangle$ real nonnegative and $=0$ exactly for $v=0$ ([[def-inner-product-space]]).

[F9] The induced length of an inner-product space is $\|v\|:=\sqrt{\langle v,v\rangle}$, the inner-product norm of the space ([[def-real-and-complex-inner-product-space]]).

[F10] A real (respectively complex) Hilbert space is a real (respectively complex) inner-product space whose induced-length metric is complete: every Cauchy sequence for $\|v\|=\sqrt{\langle v,v\rangle}$ converges in the space ([[def-hilbert-space]]).

[F11] Holder's inequality holds for conjugate exponents; for $p=q=2$ measurable real $f,g$ with $f,g\in\mathcal L^2(\mu)$ satisfy $\int|fg|\,d\mu\le\|f\|_2\|g\|_2<\infty$ ([[thm-holder-inequality-for-integrals]]).

[F12] The Lebesgue integral is complex-linear on $L^1(\mu)$, so $\int(af+bg)=a\int f+b\int g$ for scalars $a,b$ and integrable $f,g$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F13] If $f,g\in L^1(\mu)$ are equal almost everywhere, then $\int_A f=\int_A g$ for every measurable $A$, in particular for $A=X$ ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F14] For a measurable $h\ge0$, $\int h\,d\mu=0$ if and only if $h=0$ almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F15] For measurable real $f$ and $1\le p<\infty$, $\|f\|_p=(\int|f|^p\,d\mu)^{1/p}$, with value $+\infty$ allowed when the integral is infinite ([[def-calligraphic-l-p-on-a-measure-space]]).

[F16] For $1\le p<\infty$, the rule $\|[f]\|_p:=\|f\|_p$ is well defined on the quotient classes $[f]\in L^p(\mu)$, so the $L^p$ norm of a class is the $\mathcal L^p$ seminorm of any representative ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[F17] In ZF, the Axiom of Choice implies Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F18] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F19] Under Countable Choice, weak differentiation is complex-linear wherever the derivatives exist: if $v_j=D^\alpha u_j$ weakly for $j=1,2$ and $a,b\in\mathbb C$, then $av_1+bv_2=D^\alpha(au_1+bu_2)$ weakly ([[lem-weak-derivative-linearity-locality-and-commutation]]).

## Proof

**Proof technique:** direct.

1.1 By [F17] the given Axiom of Choice [F18] yields Countable Choice, so the Countable-Choice conventions under which [F1], [F2] and [F19] are stated are in force. Hence the notation $H^k(\Omega;\mathbb K)=W^{k,2}(\Omega;\mathbb K)$ of [F1] is available; by [F2] every class of $H^k(\Omega;\mathbb K)$ lies in $L^2(\Omega;\mathbb K)$ and each $D^\alpha u$, $\alpha\in\mathcal A_k$, is again an $L^2(\Omega;\mathbb K)$ class; by [F3] the index set $\mathcal A_k$ is finite and nonempty, so it can be enumerated as $\alpha_1,\ldots,\alpha_m$ with $m\ge1$; by [F4] $D^0u=u$; by [F5] the displayed $W^{k,2}$ norm is the square root of $\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_{L^2(\Omega)}^2$; and by [F7] $H^k(\Omega;\mathbb K)$ with that norm is a complete normed space over $\mathbb K$, in particular a $\mathbb K$-vector space. [F1, F2, F3, F4, F5, F7, F17, F18, given]

2.1 Assume first that $\mathbb K=\mathbb C$. Applying the finite-tuple clause of [F6] to the tuple $F=(D^{\alpha_1}u,\ldots,D^{\alpha_m}u)$ and $G=(D^{\alpha_1}v,\ldots,D^{\alpha_m}v)$ gives that $$B(u,v):=\sum_{j=1}^{m}\Big\langle D^{\alpha_j}u,D^{\alpha_j}v\Big\rangle=\sum_{\alpha\in\mathcal A_k}\int_\Omega D^\alpha u\,\overline{D^\alpha v}\,dx$$ is representative-independent and finite, is linear in the first tuple slot, is conjugate-linear in the second, is conjugate-symmetric, and is positive definite, with $B(u,u)=\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_2^2$. If $w\in H^k(\Omega;\mathbb C)$ and $a,b\in\mathbb C$, then [F19] applied coordinatewise gives $D^\alpha(au+bw)=aD^\alpha u+bD^\alpha w$ weakly for every $\alpha\in\mathcal A_k$; the right-hand side lies in $L^2(\Omega;\mathbb C)$, so it is the same class as $D^\alpha(au+bw)$ by [F2], and the tuple slot is complex-linear in the class. Therefore $B$ is linear in the first variable and conjugate-linear in the second as a function on $H^k(\Omega;\mathbb C)\times H^k(\Omega;\mathbb C)$, and $B(u,u)=0$ forces $D^\alpha u=0$ for every $\alpha$ by the positivity in [F6], in particular $u=D^0u=0$ by [F4]. By the axiom list [F8] the pairing $B$ is an inner product on the complex vector space $H^k(\Omega;\mathbb C)$ of step 1.1, with $B(u,u)=\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_2^2$. [F1, F2, F3, F4, F6, F8, F19, step 1.1, given]

2.2 Assume now that $\mathbb K=\mathbb R$. For each $\alpha\in\mathcal A_k$ choose a measurable real representative $f_\alpha$ of the class $D^\alpha u$ and $h_\alpha$ of the class $D^\alpha v$; this is a selection from finitely many nonempty sets, so it needs no choice principle. By [F11] with $p=q=2$ each product $f_\alpha h_\alpha$ is integrable, and by [F13] the number $\int_\Omega f_\alpha h_\alpha$ depends only on the two almost-everywhere classes. Setting $$B(u,v):=\sum_{\alpha\in\mathcal A_k}\int_\Omega D^\alpha u\,D^\alpha v\,dx$$ therefore defines a finite, representative-independent pairing. If $a,b\in\mathbb R$ and $w\in H^k(\Omega;\mathbb R)$ with representatives $g_\alpha$ of $D^\alpha w$, then [F19] makes $af_\alpha+bg_\alpha$ a representative of $D^\alpha(au+bw)$, and [F12] yields $\int(af_\alpha+bg_\alpha)h_\alpha=a\int f_\alpha h_\alpha+b\int g_\alpha h_\alpha$ and likewise in the second variable; also $\int f_\alpha h_\alpha=\int h_\alpha f_\alpha$. Hence $B$ is bilinear and symmetric on $H^k(\Omega;\mathbb R)\times H^k(\Omega;\mathbb R)$. Since the $f_\alpha$ are real, [F15] and [F16] give $\int_\Omega f_\alpha^2=\|f_\alpha\|_2^2=\|D^\alpha u\|_2^2\ge0$, so $B(u,u)=\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_2^2$; if this is $0$, then every $f_\alpha$ vanishes almost everywhere by [F14], in particular $u=D^0u=0$ by [F4], while $u=0$ plainly gives $B(u,u)=0$. By [F8] the pairing $B$ is an inner product on the real vector space $H^k(\Omega;\mathbb R)$ of step 1.1. [F1, F2, F4, F8, F11, F12, F13, F14, F15, F16, F19, step 1.1, given]

3.1 In the complex case, [F9] says that the norm induced by the inner product $B$ of step 2.1 is $\|u\|=\sqrt{B(u,u)}=\big(\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_2^2\big)^{1/2}$, which by [F5] is exactly the displayed $W^{k,2}$ norm of $u$ for $p=2$. By [F7] with $p=2$ the space $W^{k,2}(\Omega;\mathbb C)$ is complete for that displayed norm, so the induced-length metric of $H^k(\Omega;\mathbb C)$ is complete, and [F10] makes $H^k(\Omega;\mathbb C)$ a complex Hilbert space. [F5, F7, F9, F10, step 2.1]

3.2 In the real case the same computation with step 2.2 gives $\|u\|=\big(\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_2^2\big)^{1/2}$ equal to the displayed $W^{k,2}$ norm by [F5], and [F7] with $p=2$ plus [F10] make $H^k(\Omega;\mathbb R)$ a real Hilbert space. [F5, F7, F9, F10, step 2.2]

4.1 Combining steps 2.1 and 2.2, the single displayed formula defines an inner product on $H^k(\Omega;\mathbb K)$, linear in the first variable, for each of the two scalar fields, and steps 3.1 and 3.2 identify its induced norm with the displayed $W^{k,2}$ norm and its induced-length metric as complete; hence $H^k(\Omega;\mathbb K)$ is a Hilbert space over $\mathbb K$ in the sense of [F10]. At $k=0$ the sum has the single term $\alpha=0$, so the pairing is the $L^2$ pairing $\int_\Omega u\overline v$, the norm identity is the $W^{0,2}=L^2$ case of [F4] and [F5], and the completeness assertion is the $p=2$, $k=0$ case of [F7]; at $k\ge1$ all finitely many summands are present. If $\Omega=\varnothing$, then by [F1] and [F4] the only class is zero and every summand vanishes, so $H^k(\varnothing;\mathbb K)=\{0\}$ is a Hilbert space. The only choice principle used is the given Axiom of Choice [F18], spent through Countable Choice obtained in step 1.1 by [F17] and through the completeness interface [F7]; the enumeration $\alpha_1,\ldots,\alpha_m$ of [F3] and the representative selections in step 2.2 are finite and choice-free, and no representative selection for infinitely many classes occurs. $\square$ [F4, F5, F7, F10, F17, F18, step 1.1, step 3.1, step 3.2]

## Sources

- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.5,
  Definition 3.23, printed p. 59 (PDF p. 63): Hunter introduces
  $H^k(\Omega)=W^{k,2}(\Omega)$ as notation for the integer-order Sobolev
  space.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 9 §9.1 (n-dimensional case; Chapter 8 §8.2 is the
  one-dimensional case): the Sobolev spaces $W^{m,p}(\Omega)$ are defined
  through weak derivatives and shown to be Banach spaces under the displayed
  norm; for $p=2$ the pairing
  $\sum_{|\alpha|\le m}\int_\Omega D^\alpha u\,\overline{D^\alpha v}$ is the
  standard inner product making $W^{m,2}(\Omega)$ a Hilbert space. The present
  item assembles that standard argument from the two published interfaces
  cited in the Facts block rather than importing it as a black box.
- The complex $L^2$ pairing interface is
  [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]; the
  completeness interface is [[thm-sobolev-spaces-are-banach-spaces]]; the
  complete normed space is made a Hilbert space by [[def-hilbert-space]].
