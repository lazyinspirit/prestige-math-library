---
id: ex-diagonal-trace-class-fredholm-determinant
kind: example
title: Diagonal trace-class Fredholm determinant
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-algebraic-multiplicity-for-compact-operators
  - def-axiom-of-choice
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-separable-space
  - def-trace-class-operator
  - lem-arbitrary-hilbert-fredholm-determinant-from-separable-support
  - lem-complex-conjugation-and-modulus-laws
  - lem-diagonal-trace-class-operator-on-ell-two
  - lem-finite-set-has-max
  - lem-fredholm-determinant-zeros-and-algebraic-multiplicities
  - lem-geometric-sequence-null
  - lem-power-monotone
  - thm-geometric-series
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5–§3.6, diagonal operators and Schatten classes"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §§B.5–B.6"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$H=\ell^2(\mathbb N,\mathbb C)$, where $\mathbb N$ includes $0$, let
$(u_n)_{n\in\mathbb N}$ be its coordinate vectors, let $d$ be the bounded
sequence $d_0=0$, $d_n=2^{-n}$ for $n\ge1$, and let $T:=D_d$ be the
corresponding diagonal operator
([[lem-diagonal-trace-class-operator-on-ell-two]]); that lemma supplies the
bounded operator and gives
$$Tu_0=0,\qquad Tu_n=2^{-n}u_n\quad(n\ge1).$$
Then $T$ is trace class ([[def-trace-class-operator]]) with
$$\|T\|_1=\operatorname{tr}(T)=1.$$
The arbitrary-Hilbert local Fredholm determinant
$D_T(z):=D_H(I+zT)$ from
[[lem-arbitrary-hilbert-fredholm-determinant-from-separable-support]] is
$$D_T(z)=\prod_{n\ge1}(1+z2^{-n}),$$
with convergence locally uniform on $\mathbb C$. Its zeros are exactly
$-2^n$ for $n\ge1$, and each zero is simple.

## Facts & Assumptions

**Given:** AC; the space $H=\ell^2(\mathbb N,\mathbb C)$ with its coordinate
vectors $u_n$; the bounded coefficient sequence $d_0=0$, $d_n=2^{-n}$
($n\ge1$); the diagonal operator $T=D_d$; and a complex parameter $z$.

[A1] AC is the axiom of choice ([[def-axiom-of-choice]]). It is the declared
hypothesis of the three local suppliers used below, and the coefficient
sequence $d$, the coordinate family $(u_n)$ and the parameter $z$ are explicit,
so this example selects nothing.

[A2] The space $H$ is a complex Hilbert space and $(u_n)_{n\in\mathbb N}$ is a
complete orthonormal family in it; for every bounded complex sequence $c$ the
series $D_cx=\sum_nc_n\langle x,u_n\rangle u_n$ converges in $H$, $D_c$ is a
bounded linear operator with $D_cu_n=c_nu_n$, the identities
$D_c+D_{c'}=D_{c+c'}$, $\lambda D_c=D_{\lambda c}$ and $D_cD_{c'}=D_{cc'}$
hold for bounded $c,c'$ and $\lambda\in\mathbb C$, one has $D_0=0$ and
$D_{(1)}=I_H$, and $D_c$ is boundedly invertible exactly when
$\inf_n|c_n|>0$, in which case $D_c^{-1}=D_{c^{-1}}$
([[lem-diagonal-trace-class-operator-on-ell-two]]).

[A3] If in addition $\sum_n|c_n|<+\infty$, then $D_c$ is trace class with
$\|D_c\|_1=\sum_n|c_n|$ and $\operatorname{tr}(D_c)=\sum_nc_n$; its nonzero
eigenvalues, repeated according to algebraic multiplicity
([[def-algebraic-multiplicity-for-compact-operators]]), are exactly the
nonzero scalars of the list $(c_n)$, the value $\lambda\ne0$ occurring
$\#\{n:c_n=\lambda\}$ times
([[lem-diagonal-trace-class-operator-on-ell-two]]).

[A4] $H$ is separable: by [A2] the span of the countable family $(u_n)$ is
dense in $H$, so $H$ has a countable dense subset
([[def-separable-space]]).

[A5] The geometric series starting at index $1$ satisfies
$\sum_{n=1}^{\infty}2^{-n}=1$ ([[thm-geometric-series]]).

[A6] Since $|1/2|<1$, the sequence $2^{-n}$ is null
([[lem-geometric-sequence-null]]).

[A7] For $n<m$ one has $0<2^{-m}<2^{-n}$, because $0<1/2<1$; hence the values
$2^{-n}$, $n\ge1$, are pairwise distinct ([[lem-power-monotone]]).

[A8] The arbitrary-Hilbert determinant of a trace-class operator is obtained
from a nuclear representation and a separable reducing support $M$ with
$T=S\oplus0$ and $S=T|_M$; the value $D_H(I+zT):=D_S(z)$ is independent of the
support and of the nuclear representation, is entire, equals $1$ at $z=0$, and
satisfies the locally uniform product over the nonzero eigenvalues of $T$
repeated according to algebraic multiplicity
([[lem-arbitrary-hilbert-fredholm-determinant-from-separable-support]]).

[A9] For a trace-class operator on a separable complex Hilbert space, the
locally constructed determinant vanishes at exactly those $z$ for which
$I+zT$ is not boundedly invertible, and the zero at $z_0=-1/\lambda$ has order
$m_{\mathrm{alg}}(\lambda;T)$ for every nonzero eigenvalue $\lambda$
([[lem-fredholm-determinant-zeros-and-algebraic-multiplicities]]).

[A10] Every nonempty finite set of real numbers has a maximum and a minimum
([[lem-finite-set-has-max]]).

[A11] Complex modulus is subadditive and $|1|=1$, so $|1+w|\ge1-|w|$ for
every $w\in\mathbb C$ ([[lem-complex-conjugation-and-modulus-laws]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

**Given:** AC; the space $H=\ell^2(\mathbb N,\mathbb C)$ with its coordinate vectors $u_n$; the coefficient sequence $d_0=0$, $d_n=2^{-n}$; the diagonal operator $T=D_d$; and $z\in\mathbb C$.

1.1 The sequence $d$ is bounded, since $|d_0|=0$ and $|d_n|=2^{-n}\le1/2$ for $n\ge1$. By [A2] the operator $T=D_d$ is bounded with $Tu_n=d_nu_n$ for every $n$, so $Tu_0=0$ and $Tu_n=2^{-n}u_n$ for $n\ge1$. By [A5], $\sum_n|d_n|=\sum_{n\ge1}2^{-n}=1<+\infty$ and $\sum_nd_n=1$; hence [A3] makes $T$ trace class with $\|T\|_1=\sum_n|d_n|=1$ and $\operatorname{tr}(T)=\sum_nd_n=1$. [A2, A3, A5]

1.2 Apply [A3] with $c=d$. The nonzero eigenvalues of $T$, repeated according to algebraic multiplicity, are the nonzero scalars of the list $(d_n)$, the value $\lambda\ne0$ occurring $\#\{n:d_n=\lambda\}$ times. The nonzero scalars are the values $2^{-n}$ with $n\ge1$, and for $\lambda=2^{-r}$ the index set is $\{n\ge1:2^{-n}=2^{-r}\}=\{r\}$ by [A7]; hence the eigenvalue list with algebraic multiplicities is $(2^{-1},2^{-2},2^{-3},\dots)$, each value occurring once. In particular $T\ne0$, because $Tu_1=2^{-1}u_1$ and $u_1\ne0$ by [A2]. [A2, A3, A7]

1.3 The sequence $1+zd$ is bounded, so [A2] gives $D_{1+zd}$ with $D_{1+zd}u_n=(1+zd_n)u_n$, and the operator calculus of [A2] gives $I+zT=D_{(1)}+zD_d=D_{1+zd}$. If $z=-2^r$ for some $r\ge1$, then $1+zd_r=0$, so $D_{1+zd}u_r=0$ with $u_r\ne0$ and $I+zT$ is not injective, hence not boundedly invertible. Conversely let $z\ne-2^n$ for every $n\ge1$. For $z=0$ all coefficients $1+zd_n$ equal $1$. For $z\ne0$, [A6] gives $N\ge1$ with $|z|2^{-n}\le|z|2^{-N}<1/2$ for every $n\ge N$ by [A7], so [A11] gives $|1+zd_n|\ge1-|z|2^{-n}>1/2$ there, while the finitely many remaining coefficients $1+zd_0=1,1+zd_1,\dots,1+zd_{N-1}$ are all nonzero and therefore have a positive minimum by [A10]. Hence $\inf_n|1+zd_n|>0$, and the invertibility criterion of [A2] makes $D_{1+zd}=I+zT$ boundedly invertible, with inverse $D_{(1+zd)^{-1}}$. [A2, A6, A7, A10, A11]

2.1 By [A8] the arbitrary-Hilbert determinant $D_T(z)=D_H(I+zT)$ is independent of the support and equals the locally uniform product over the nonzero eigenvalues of $T$ repeated according to algebraic multiplicity; substituting the list of step 1.2 gives $D_T(z)=\prod_{n\ge1}(1+z2^{-n})$, locally uniformly on $\mathbb C$, and $D_T(0)=1$ by [A8]. [A8, step 1.2]

3.1 By step 1.3 the operator $I+zT$ is boundedly invertible exactly when $z\notin\{-2^n:n\ge1\}$. Since $H$ is a separable complex Hilbert space by [A2] and [A4], and since $H$ itself is a closed support with $T(H)\subseteq H$ and $T|_{H^\perp}=0$, the support-independence clause of [A8] identifies the arbitrary-Hilbert value $D_H(I+zT)$ with the locally constructed separable determinant of $T$ on $H$; applying [A9] therefore gives $D_T(z)=0$ exactly for $z=-2^r$, $r\ge1$. For such an $r$ the eigenvalue $2^{-r}$ has algebraic multiplicity $m_{\mathrm{alg}}(2^{-r};T)=1$ by step 1.2, so [A9] makes each zero simple; at $z=0$, not a zero, step 2.1 gives $D_T(0)=1$. The basis, the coefficient sequence and the parameter are explicit and no interval or endpoint occurs. AC is used exactly through the hypotheses of the suppliers [A2], [A3], [A8] and [A9], which are stated under AC, and the example makes no further choice. Both directions of the zero characterization are proved in steps 1.3 and 3.1. [A1, A2, A4, A8, A9, step 1.2, step 2.1, step 1.3]
\qed
