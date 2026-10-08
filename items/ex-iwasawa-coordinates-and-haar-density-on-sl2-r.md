---
id: ex-iwasawa-coordinates-and-haar-density-on-sl2-r
kind: example
title: Iwasawa coordinates and Haar density on SL2(R)
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-iwasawa-decomposition-for-sl2-r
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - cor-normalized-haar-probability-on-a-compact-group
  - def-countable-choice
  - lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.4 and Exercise 7.4.6, printed pp. 294–296"
---

## Example

Assume AC and use the Iwasawa coordinates of
[[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]] and
[[thm-iwasawa-decomposition-for-sl2-r]]. For a generic
$g=\begin{pmatrix}p&r\\q&s\end{pmatrix}\in\mathrm{SL}_2(\mathbb R)$, compute
$k(g),a(g),n(g)$ and the Haar density. Check the left-translation cocycle for
$g_0=a_u$ and $g_0=k_\phi$, and evaluate the Haar integral on a compactly
supported test function near the identity.

## Facts & Assumptions

**Given:** AC, $g\in\mathrm{SL}_2(\mathbb R)$, and real $u,\phi$.

[F1] For $g=\begin{pmatrix}p&r\\q&s\end{pmatrix}$, the coordinates are
$a=\sqrt{p^2+q^2}$, $k=a^{-1}\begin{pmatrix}p&-q\\q&p\end{pmatrix}$,
$x=(pr+qs)/a^2$, and $a=e^{t/2}$
([[thm-iwasawa-decomposition-for-sl2-r]]).

[F2] In these coordinates the left Haar integral is
$\int_K\int_{\mathbb R}\int_{\mathbb R}f(ka_tn_x)e^t\,dx\,dt\,dk$
([[thm-iwasawa-decomposition-for-sl2-r]]).

[F3] The angle parameter $k_\theta$ identifies $K$ with the additive circle
$\mathbb R/2\pi\mathbb Z$, and $k_\theta\mapsto[\theta/(2\pi)]$ is a group
isomorphism to $\mathbb T=\mathbb R/\mathbb Z$
([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

[F4] The normalized torus measure $m_{\mathbb T}$ is translation-invariant and
given by Lebesgue measure on the fundamental interval $[0,1)$
([[def-the-one-dimensional-torus-and-normalized-haar-integral]]). Both
$m_{\mathbb T}$ and the pushforward of $dk$ under [F3] are normalized Haar
probabilities, so they agree by uniqueness on compact groups
([[cor-normalized-haar-probability-on-a-compact-group]]).

[F5] For a $C^1$ diffeomorphism $T:U\to V$ between Euclidean open sets and
$f\in C_c(V)$, $\int_V f(y)\,dy=\int_U f(T(x))|\det DT(x)|\,dx$
([[lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands]]).

[A1] AC supplies normalized Haar measure and is the hypothesis of the Iwasawa
Haar formula; the explicit coordinates and test function require no selection
([[def-axiom-of-choice]]).

[A2] AC implies the countable-choice hypothesis of the torus integral supplier
([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 The first column $(p,q)^T$ is nonzero because $ps-qr=1$. Put $a=\sqrt{p^2+q^2}>0$, $t=2\log a$, $k(g)=a^{-1}\begin{pmatrix}p&-q\\q&p\end{pmatrix}$, and $x=(pr+qs)/a^2$. Then $k(g)\in K$, $a(g)=\operatorname{diag}(a,a^{-1})=a_t$, and $n(g)=n_x$. Direct multiplication gives $k(g)a(g)n(g)=\begin{pmatrix}p&px-q/a^2\\q&qx+p/a^2\end{pmatrix}$. Its top-right entry is $r$ because $px-q/a^2-r=q(ps-qr-1)/a^2=0$; its bottom-right entry is $s$ because $qx+p/a^2-s=p(1-ps+qr)/a^2=0$. Thus the factors multiply to $g$, and uniqueness in [F1] makes them its Iwasawa coordinates. For $g_* =\begin{pmatrix}2&1\\1&1\end{pmatrix}$, these formulas give $a=\sqrt5$, $t=\log5$, $x=3/5$, and $k=5^{-1/2}\begin{pmatrix}2&-1\\1&2\end{pmatrix}$, whose product is $g_*$. [F1, algebra]

1.2 For left multiplication by $a_u$, the first column of $a_uk_\theta$ has squared norm $D_u(\theta)=e^u\cos^2\theta+e^{-u}\sin^2\theta$. Its Iwasawa factors therefore have $t_1=u_1(\theta)=\log D_u(\theta)$, $x_1=v_u(\theta)=\frac{(e^u-e^{-u})\sin\theta\cos\theta}{D_u(\theta)}$, and $k_{\theta_1}$ with $\cos\theta_1=e^{u/2}\cos\theta/\sqrt{D_u(\theta)}$ and $\sin\theta_1=e^{-u/2}\sin\theta/\sqrt{D_u(\theta)}$. Hence $a_uk_\theta=k_{\theta_1}a_{u_1(\theta)}n_{v_u(\theta)}$. Differentiating this circle map gives $\frac{d\theta_1}{d\theta}=\frac{e^{-u}}{\cos^2\theta+e^{-2u}\sin^2\theta}=D_u(\theta)^{-1}=e^{-u_1(\theta)}>0$, including at $\cos\theta=0$. [F1, F3, algebra]

1.3 For $g_0=k_\phi$, one has $k_\phi k_\theta=k_{\theta+\phi}$, so the $AN$ factor is the identity ($t_1=x_1=0$) and the $K$ coordinate is translated by $\phi$. Thus the two requested left-translation cocycles are $a_{u_1(\theta)}n_{v_u(\theta)}$ and $I$, respectively. [F1, F3, algebra]

1.4 Fix $0<\eta<1/2$ and put $\psi_\eta(z)=\max(1-|z|/\eta,0)$. Using the representative $z\in(-1/2,1/2]$ of the torus coordinate in [F3], define $f_\eta(k_{2\pi z}a_tn_x)=\psi_\eta(z)\psi_\eta(t)\psi_\eta(x)$. The function vanishes near the angular coordinate cut and has compact support in an arbitrarily small coordinate neighborhood of the identity as $\eta\downarrow0$. By [F2] and [F4], its Haar integral factors as $\left(\int_{\mathbb T}\psi_\eta\,dm_{\mathbb T}\right)\left(\int_{-\eta}^{\eta}e^t\psi_\eta(t)\,dt\right)\left(\int_{-\eta}^{\eta}\psi_\eta(x)\,dx\right)$. The torus factor is $\int_0^\eta(1-z/\eta)\,dz+\int_{1-\eta}^1(1-(1-z)/\eta)\,dz=\eta$, and the $x$ factor is $\eta$. The middle factor is $2\int_0^\eta(1-t/\eta)\cosh t\,dt=2\left(\sinh\eta-\frac{\eta\sinh\eta-\cosh\eta+1}{\eta}\right)=2(\cosh\eta-1)/\eta$. Therefore $\int_G f_\eta(g)\,dg=2\eta(\cosh\eta-1)$. [A1, A2, F2, F4, algebra]

2.1 Write $\xi=[\theta/(2\pi)]\in\mathbb T$, so $dk=dm_{\mathbb T}$ by [F4]. For a general coordinate $k_{2\pi\xi}a_tn_x$, left translation by $a_u$ has map $(\xi,t,x)\mapsto(\xi_1,t+u_1(2\pi\xi),x+e^{-t}v_u(2\pi\xi))$, since $n_v a_t=a_tn_{e^{-t}v}$, where $\xi_1=[\theta_1(2\pi\xi)/(2\pi)]$. Its Jacobian is triangular with determinant $d\xi_1/d\xi=d\theta_1/d\theta=e^{-u_1(2\pi\xi)}>0$; the Haar weight changes to $e^{t+u_1(2\pi\xi)}$, so the density $e^t\,dk\,dt\,dx$ is preserved. The pullback calculation and [F5], applied on circle coordinate charts containing the compact support of $f_\eta$ and its translate, show that its integral is unchanged. Left translation by $k_\phi$ sends $\xi$ to $\xi+\phi/(2\pi)$ and leaves $t,x$ fixed, which preserves $dk$ and the density by [F4]; [F5] gives the same integral identity. Thus both computed cocycles agree with the left invariance of the Haar formula [F2]. [A1, A2, F2, F4, F5, step 1.2, step 1.3, step 1.4, algebra] ∎
