---
id: lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series
kind: lemma
title: Matrix-coefficient formulas and decay for the discrete and principal series
status: draft
origin: pipeline
deps:
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - lem-the-weighted-discrete-series-space-is-a-hilbert-space
  - lem-the-weighted-area-form-is-sl2-r-invariant
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-unitarity-of-the-sl2-unitary-principal-series
  - def-matrix-coefficient-of-a-unitary-representation
  - def-limits-of-discrete-series-for-sl2-r
  - def-axiom-of-choice
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited from the weighted models, compact picture, and KAK formula. The coefficient, polynomial, and angular-integral calculations use no further choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(3), printed pp. 306–308 (exact extremal coefficient and its Cayley-disk calculation); Lemma 7.4.14 for KAK reduction"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, (2.6) (ladder actions for compact-picture K-types)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

**(a) Discrete series.** Let $n\ge2$, let $u_n=f_{n,0}/\|f_{n,0}\|_n\in D_n^-$ be the normalized extremal vector of [[def-holomorphic-and-antiholomorphic-discrete-series-models]], and let $c_n(g)=\langle\pi_n(g)u_n,u_n\rangle$ be its matrix coefficient ([[def-matrix-coefficient-of-a-unitary-representation]]). Then for all $\tau\in\mathbb R$,
$$c_n(a_\tau)=\cosh(\tau/2)^{-n}.$$
Moreover, for every $X,Y\in U(\mathfrak g_{\mathbb C})$ there is $C=C(n,X,Y)>0$ such that
$$\bigl|\langle\pi_n(g)Xu_n,Yu_n\rangle\bigr|\le C\,e^{-n|\tau|/2}\qquad(g=k_1a_\tau k_2).$$

**(b) Limits and unitary principal series.** In the compact picture of $I_{1,0}$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[thm-unitarity-of-the-sl2-unitary-principal-series]], [[def-limits-of-discrete-series-for-sl2-r]]), let $\Pi_0$ be the unitary action on $L^2_1(K)$ and $f_1(k_\theta)=e^{i\theta}$ the normalized weight-one vector. Then
$$\langle\Pi_0(a_\tau)f_1,f_1\rangle=\operatorname{sech}(\tau/2)=\frac{2}{e^{\tau/2}+e^{-\tau/2}}.$$
Consequently $\int_0^\infty|\langle\Pi_0(a_\tau)f_1,f_1\rangle|^2\sinh\tau\,d\tau=+\infty$, and this matrix coefficient is not in $L^2(G)$ by the KAK formula ([[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]).

More generally, for every odd integer $m$ and every real spectral parameter $s$, let $c_{m,s}(\tau)=\langle\Pi_{is}(a_\tau)f_m,f_m\rangle$ in the unitary compact picture of $I_{1,is}$. Then for an absolute constant $C>0$,
$$|c_{m,s}(\tau)|\le C(1+|\tau|)e^{-|\tau|/2}\qquad(\tau\in\mathbb R).$$

## Facts & Assumptions

**Given:** AC; the holomorphic and antiholomorphic models and their K-finite vectors; the weighted disk norm; the odd compact-picture basis; and the unitary principal-series action.

[F1] The model action is unitary for the weighted inner product, and the vectors $f_{n,j}$ are nonzero, mutually orthogonal $K$-eigenvectors with characters $e^{-i(n+2j)\theta}$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]], [[lem-the-weighted-area-form-is-sl2-r-invariant]], [[lem-the-weighted-discrete-series-space-is-a-hilbert-space]]).

[F2] The model vectors are smooth K-eigenvectors with the displayed raising/lowering actions; every element of $U(\mathfrak g_{\mathbb C})$ sends $u_n$ to a finite sum of these K-types ([[def-k-finite-and-smooth-vectors-for-sl2-r]], [[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[F3] The discrete-series model is unitary and strongly continuous, and its matrix coefficient is defined by the first-variable-linear Hilbert pairing ([[lem-the-weighted-area-form-is-sl2-r-invariant]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F4] In the compact picture, for $kg=a_tn_xk_\psi$, the action is $(\Pi_\nu(g)f)(k)=e^{(1+\nu)t/2}f(k_\psi)$; the odd Fourier vectors $f_m(k_\theta)=e^{im\theta}$ form an orthonormal basis ([[thm-compact-picture-of-the-sl2-principal-series]], [[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F5] For $\nu\in i\mathbb R$, the compact-picture action is a strongly continuous unitary representation; its matrix coefficients use the same L2 pairing ([[thm-unitarity-of-the-sl2-unitary-principal-series]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F6] For continuous nonnegative K-bi-invariant functions, $\int_G\psi(g)dg=2\pi\int_0^\infty\psi(a_\tau)\sinh\tau\,d\tau$ ([[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]).

[F7] The positive-weight limit vector $f_1$ is a unit vector in the $D_1^+$ summand of $I_{1,0}$ ([[def-limits-of-discrete-series-for-sl2-r]]).

[A1] AC is inherited through the weighted and compact-picture constructions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The notation and assumptions of the Statement.

1.1 Let $w=(z-i)/(z+i)$, $F_f(w)=(z+i)^nf(z)$, and $r=\tanh(\tau/2)$. Solving gives $z=i(1+w)/(1-w)$, so direct substitution gives $F_{f_{n,j}}(w)=(z-i)^j(z+i)^{-j}=w^j$. Substituting this inverse coordinate in the inverse-action formula for $a_\tau=\operatorname{diag}(e^{\tau/2},e^{-\tau/2})$ gives $F_{\pi_n(a_\tau)f}(w)=\cosh(\tau/2)^{-n}(1-rw)^{-n}F_f\!\left(\frac{w-r}{1-rw}\right)$. For $F_{f_{n,j}}(w)=w^j$, this is $\cosh(\tau/2)^{-n}(w-r)^j(1-rw)^{-n-j}$. Its Taylor coefficient at $w^k$ equals $\cosh(\tau/2)^{-n}Q_{jk}(r)$, where $Q_{jk}(r)=\sum_{p=0}^{\min(j,k)}(-1)^{j-p}\binom jp\binom{n+j+k-p-1}{k-p}r^{j+k-2p}$. [F1, F2, algebra, A1]

1.2 Write $t=e^\tau$ and $D(\theta,\tau)=\cos^2\theta+e^{2\tau}\sin^2\theta$. Multiplying $k_\theta a_\tau$ and comparing its bottom row with the $ANK$ form gives $e^{\sigma/2}=e^{\tau/2}/\sqrt D$ and $e^{i\psi}=(\cos\theta+i e^\tau\sin\theta)/\sqrt D$. Hence in $I_{1,is}$, $c_{m,s}(\tau)=\frac1{2\pi}\int_0^{2\pi}\left(\frac{e^{\tau/2}}{\sqrt D}\right)^{1+is}e^{im(\psi-\theta)}d\theta$. The character factors and the $is$-power have modulus one, so $|c_{m,s}(\tau)|\le \frac{e^{\tau/2}}{2\pi}\int_0^{2\pi}D^{-1/2}d\theta$. For $\tau\ge1$, $D=1+(e^{2\tau}-1)\sin^2\theta\ge1+c e^{2\tau}\theta^2$ on $0\le\theta\le\pi/2$ for a fixed $c>0$, using $\sin\theta\ge2\theta/\pi$. Substitution $u=e^\tau\theta$ gives $\int_0^{\pi/2}D^{-1/2}d\theta\le C(1+\tau)e^{-\tau}$, since $\int_0^R(1+cu^2)^{-1/2}du\le C(1+\log(1+R))$. The other three quadrants have the same bound; for $0\le\tau\le1$ it follows after increasing $C$. Thus $|c_{m,s}(\tau)|\le C(1+\tau)e^{-\tau/2}$ for $\tau\ge0$, uniformly in odd $m$ and real $s$. For negative $\tau$, unitarity gives $|c_{m,s}(-\tau)|=|c_{m,s}(\tau)|$, proving the stated bound. [F4, F5, algebra, A1]

2.1 By [F1] the vectors $f_{n,j},f_{n,k}$ with $j\ne k$ are orthogonal, so the expansion of step 1.1 gives $\langle\pi_n(a_\tau)f_{n,j},f_{n,k}\rangle=\cosh(\tau/2)^{-n}Q_{jk}(r)\|f_{n,k}\|_n^2$. In particular $Q_{00}=1$, so normalizing $f_{n,0}$ gives $c_n(a_\tau)=\cosh(\tau/2)^{-n}$. Each fixed polynomial $Q_{jk}$ is bounded for $|r|\le1$. [F1, step 1.1, algebra]

3.1 For fixed $X,Y\in U(\mathfrak g_{\mathbb C})$, [F2] writes $Xu_n$ and $Yu_n$ as finite sums of $f_{n,j}$. In $g=k_1a_\tau k_2$, the left and right K factors multiply each K-type vector by a scalar of modulus one. Thus the matrix coefficient is a fixed finite sum of the radial coefficients in step 2.1, with bounded factors $Q_{jk}(\tanh(\tau/2))$. Since $\cosh(\tau/2)^{-n}\le2^ne^{-n|\tau|/2}$, this proves the derivative-vector bound with a constant depending only on $n,X,Y$ and with polynomial exponent $m=0$. [F2, F3, step 2.1, algebra]

4.1 At $m=1,s=0$, the integrand in step 1.2 has real part $(\cos^2\theta+t\sin^2\theta)/D$ and odd imaginary part, so $c_{1,0}(\tau)=\frac{\sqrt t}{2\pi}(I_c+tI_s)$, where $I_c=\int_0^{2\pi}\cos^2\theta/D\,d\theta$ and $I_s=\int_0^{2\pi}\sin^2\theta/D\,d\theta$. Substitution $x=\tan\theta$ on each quadrant gives $I_0:=I_c+I_s=2\pi/t$ and $I_s=4\int_0^\infty\frac{x^2}{(1+x^2)(1+t^2x^2)}dx=2\pi/(t(t+1))$; for $t\ne1$ the last integral follows from partial fractions, and at $t=1$ it is $\int_0^{2\pi}\sin^2\theta\,d\theta=\pi$. Therefore $I_c=2\pi/(t+1)$ and $c_{1,0}(\tau)=2\sqrt t/(t+1)=\operatorname{sech}(\tau/2)$. Consequently $|c_{1,0}(\tau)|^2\sinh\tau\to2$, so the radial integral diverges. Since $|c_{1,0}(k_1gk_2)|=|c_{1,0}(g)|$ by unitarity and the K-character property of $f_1$, [F6] implies this matrix coefficient is not in $L^2(G)$. [F4, F5, F6, F7, step 1.2, algebra] ∎
