---
id: lem-dual-pairing-between-opposite-principal-series-parameters
kind: lemma
title: The invariant pairing between opposite principal-series parameters
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 4
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-iwasawa-decomposition-for-sl2-r
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - cor-normalized-haar-measure-on-a-compact-lie-group
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-algebra-of-derivatives
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-extreme-value-metric
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.7 and its proof, printed pp. 295–296; Proposition 7.4.3(1), printed pp. 293–294"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Exercise 2.3(ii), printed p. 9"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\varepsilon\in\{0,1\}$ and $\nu\in\mathbb C$. The sesquilinear pairing
$$\langle f,h\rangle=\int_K f(k)\overline{h(k)}\,dk$$
between the smooth compact-picture spaces $C^\infty_\varepsilon(K)$ of
$I_{\varepsilon,-\bar\nu}$ and $I_{\varepsilon,\nu}$ is $G$-invariant:
$$(\Pi_{-\bar\nu}(g)f,\Pi_\nu(g)h)=(f,h)\qquad(f,h\in C^\infty_\varepsilon(K),\ g\in G).$$
For real $\nu$ it pairs $I_{\varepsilon,-\nu}$ with $I_{\varepsilon,\nu}$; on
the $K$-type basis $f_n$ of [[lem-k-type-decomposition-of-the-sl2-principal-series]],
$\langle f_m,f_n\rangle=\delta_{mn}$.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, and smooth compact-picture vectors $f,h$.

[F1] The compact-picture action is
$$(\Pi_\lambda(g)u)(k)=|\alpha(p(k,g))|^{1+\lambda}u(\kappa(k,g))$$
for $u\in C^\infty_\varepsilon(K)$, where $kg=p(k,g)\kappa(k,g)$ is the canonical $AN\times K$ factorization. Here the $AN$ factor has trivial $M$-character ([[thm-compact-picture-of-the-sl2-principal-series]]).

[F2] The $NAK$ coordinates are smooth global coordinates; using
$a_tn_x=n_{e^t x}a_t$ converts them by a smooth coordinate change into the
unique smooth $ANK$ coordinates ([[thm-iwasawa-decomposition-for-sl2-r]],
[[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

[F3] The model parameter and its normalized inducing character are fixed by
[[def-normalized-principal-series-i-epsilon-nu]].

[F4] The parity basis is $f_n(k_\theta)=e^{in\theta}$ for $n\equiv\varepsilon\pmod2$, and is orthonormal for normalized Haar measure on $K$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F5] Under $k_\theta\mapsto[\theta/(2\pi)]\in\mathbb R/\mathbb Z$, normalized Haar probability on $K$ is $dk=d\theta/(2\pi)$: the torus definition gives this normalized translation-invariant probability, and uniqueness of normalized Haar probability identifies its pullback with $dk$ ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[F6] An orientation-preserving diffeomorphism of the circle preserves the integral of a smooth top form; every smooth top form on compact $K$ has compact support ([[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]).

[F7] The complex exponential obeys $e^{z+w}=e^ze^w$, $|e^z|=e^{\operatorname{Re}z}$, and $\overline{e^z}=e^{\bar z}$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F8] The product of smooth functions is smooth by the coordinatewise product rule, and complex conjugation is the coordinate map $(x,y)\mapsto(x,-y)$ ([[thm-algebra-of-derivatives]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F9] The integral of a complex function is defined by integrating its real and imaginary parts and combining the two real integrals ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F10] A continuous real-valued function is bounded on compact $K$; since $dk(K)=1$, a bounded measurable function on $K$ is integrable by monotonicity ([[thm-extreme-value-metric]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[A1] AC supplies normalized Haar probability on compact $K$ and implies the countable-choice hypothesis for the torus measure; no vector is selected in this proof ([[def-axiom-of-choice]], [[def-countable-choice]], [[cor-normalized-haar-measure-on-a-compact-lie-group]]).

## Proof

**Proof technique:** direct Jacobian calculation in the compact coordinate.

1.1 For fixed $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G$, write $k_\theta g=a_{t(\theta)}n_{x(\theta)}k_{\psi(\theta)}$ in the unique smooth $ANK$ coordinates [F2], using the compact-picture notation [F1]. The bottom row of $k_\theta g$ is $v(\theta)=(-a\sin\theta+c\cos\theta,-b\sin\theta+d\cos\theta)=e^{-t(\theta)/2}(-\sin\psi(\theta),\cos\psi(\theta))$, so its norm is $e^{-t/2}=|\alpha(p(k_\theta,g))|^{-1}$. Direct differentiation gives $\det(v,v')=ad-bc=1$, while $\det((-\sin\psi,\cos\psi),(-\cos\psi,-\sin\psi))=1$; therefore $e^{-t(\theta)}\psi'(\theta)=1$, or $\psi'(\theta)=e^{t(\theta)}=|\alpha(p(k_\theta,g))|^2>0$. If $kg=p(k,g)\kappa(k,g)$ with $p(k,g)\in AN$, then $\kappa(k,g)g^{-1}=p(k,g)^{-1}k$; uniqueness of the same coordinates gives $\kappa(\kappa(k,g),g^{-1})=k$, and the reversed identity gives the inverse map, so $\kappa(\cdot,g)$ is an orientation-preserving diffeomorphism. By [F5], $dk=d\theta/(2\pi)$. For a smooth complex $F$, [F8] makes $\operatorname{Re}F$ and $\operatorname{Im}F$ smooth; apply [F6] separately to the compactly supported real top forms $(\operatorname{Re}F)d\theta/(2\pi)$ and $(\operatorname{Im}F)d\theta/(2\pi)$ and combine by [F9]. This yields $\int_K|\alpha(p(k,g))|^2F(\kappa(k,g))\,dk=\int_KF(k)\,dk$. [F1, F2, F5, F6, F8, F9, A1, algebra]

2.1 By [F1] and [F3], $\Pi_{-\bar\nu}(g)f$ contributes $e^{(1-\bar\nu)t/2}f(\kappa)$, while the conjugate of $\Pi_\nu(g)h$ contributes $e^{(1+\bar\nu)t/2}\overline{h(\kappa)}$ by [F7]; their product is $|\alpha|^2 f(\kappa)\overline{h(\kappa)}$. Apply step 1.1 with $F=f\overline h$ to obtain $\langle\Pi_{-\bar\nu}(g)f,\Pi_\nu(g)h\rangle=\int_K f(k)\overline{h(k)}\,dk$. The compact Haar probability and smoothness make these integrals finite by [F9]–[F10]. [F1, F3, F7, F9, F10, step 1.1, algebra]

3.1 For $m,n\equiv\varepsilon\pmod2$, [F4]–[F5] give $\langle f_m,f_n\rangle=(2\pi)^{-1}\int_0^{2\pi}e^{i(m-n)\theta}\,d\theta$, which equals $1$ when $m=n$ and $0$ otherwise by direct integration. For real $\nu$, $-\bar\nu=-\nu$, giving the stated opposite-parameter pairing. [F4, F5, F9, F10, algebra] ∎
