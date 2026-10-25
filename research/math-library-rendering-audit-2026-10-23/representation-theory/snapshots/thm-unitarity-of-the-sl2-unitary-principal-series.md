---
id: thm-unitarity-of-the-sl2-unitary-principal-series
kind: theorem
title: Unitarity of the unitary principal series
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 7
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - thm-geometric-series
  - lem-complex-conjugation-and-modulus-laws
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Exercise 2.3(ii), printed p. 9: the circle pairing is invariant for imaginary parameter; proof is left as an exercise"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§§9.2–9.3, printed pp. 50–52: the circle realization, odd P_-(0) splitting, and unitary principal-series range"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(1), proof, and Lemma 7.4.7, printed pp. 294–297: the right-covariant Hilbert model's Jacobian and unitarity; strong continuity is left as an exercise"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every $\varepsilon\in\{0,1\}$ and every $\nu\in i\mathbb R$ the compact-picture action of $G$ on $L^2_\varepsilon(K)$ preserves the $L^2$ inner product and is strongly continuous; hence $I_{\varepsilon,\nu}$ is a strongly continuous unitary representation of $G$ with $K$-types $f_n$, $n\equiv\varepsilon\ (2)$, of multiplicity one. At $\nu=0$ the spherical representation $I_{0,0}$ is irreducible (unitary spherical principal series). In odd parity the $K$-finite core is $I^K_{1,0}\cong M^-_1\oplus M^+_{-1}$, and the Hilbert representation is the orthogonal direct sum of the irreducible unitary completions of these two limit-of-discrete-series modules.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in i\mathbb R$, and the compact-picture Hilbert space $L^2_\varepsilon(K)$.

[F1] For imaginary $\nu$, restriction to $K$ identifies the smooth compact picture with an isometric subspace of the right-covariant unitary-induction model by inversion and the $\rho^{-1/2}$ half-density; the completed action is strongly continuous and unitary ([[thm-compact-picture-of-the-sl2-principal-series]](2)).

[F2] The functions $f_n(k_\theta)=e^{in\theta}$, $n\equiv\varepsilon\pmod2$, are an orthonormal basis of $L^2_\varepsilon(K)$, and their finite spans are exactly the K-finite vectors ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F3] At $\nu=0$, the spherical compact-picture representation is irreducible; in odd parity its K-finite module splits into the positive chain $M^-_1$ with K-types $1,3,5,\ldots$ and the negative chain $M^+_{-1}$ with K-types $-1,-3,-5,\ldots$ ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]).

[F4] In the compact picture at $\nu=0$, $(\Pi_0(g)f)(k_\theta)=|\alpha(p(k_\theta,g))|f(k_{\kappa_g(\theta)})$, where $k_\theta g=a_tn_xk_{\kappa_g(\theta)}$ is the canonical $AN\times K$ factorization ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[thm-compact-picture-of-the-sl2-principal-series]]).

[F5] Complex modulus is multiplicative and subadditive, so $|qz|=|q||z|$ and $|1+qz|\ge1-|qz|\ge1-|q|$ ([[lem-complex-conjugation-and-modulus-laws]]). For $q\in\mathbb C$ with $|q|<1$ and $|z|\le1$, the finite identity $(1+qz)^{-1}=\sum_{m=0}^N(-qz)^m+(-qz)^{N+1}/(1+qz)$ is algebraic, and its remainder is bounded by $|q|^{N+1}/(1-|q|)$. The real geometric series with ratio $|q|$ converges by [[thm-geometric-series]], so these partial sums converge uniformly on the closed disk and have supremum at most $(1-|q|)^{-1}$. For every positive integer $j$, the $j$-fold powers of the partial sums are polynomials in $z$ with only nonnegative powers and converge uniformly to $(1+qz)^{-j}$: use $|u^j-v^j|\le jM^{j-1}|u-v|$ when $|u|,|v|\le M=(1-|q|)^{-1}$ (algebra).

[F6] A nonzero closed $G$-invariant subspace of this Hilbert model contains a nonzero K-finite vector, and its K-finite intersection is a $(\mathfrak g,K)$-submodule ([[lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces]]).

[F7] A strongly continuous unitary representation is a homomorphism into unitary operators whose orbit maps are norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A1] AC supplies the normalized Haar probability on $K$ and is inherited through the unitary compact-picture construction; no additional choice is used ([[def-axiom-of-choice]], [F1]).

## Proof

**Proof technique:** transfer unitarity through the exact compact-picture model, then identify the odd zero-parameter summands by their Hardy-type Fourier spaces.

1.1 For every $\nu\in i\mathbb R$, [F1] gives the strongly continuous unitary compact-picture action on $L^2_\varepsilon(K)$; the inversion and $\rho^{-1/2}$ map in that supplier is the model equivalence, so no left/right covariance convention is silently identified. By [F2], the K-types are the one-dimensional mutually orthogonal lines $\mathbb C f_n$, $n\equiv\varepsilon\pmod2$, and their finite span is dense. By [F7] this is a strongly continuous unitary representation with K-type multiplicity one. [F1, F2, F7, A1]

1.2 At $\varepsilon=0$, $\mathcal W_0$ consists of odd integers, so $0\notin\mathcal W_0$. Part (a) of [F3] therefore says that the Hilbert compact-picture representation $I_{0,0}$ is irreducible. [F3, algebra]

1.3 At $\varepsilon=1$ and $\nu=0$, set $z=-e^{2i\theta}$. The odd positive Fourier polynomials have the form $f(k_\theta)=e^{i\theta}F(z)$ with $F$ a polynomial; their closure $H_+$ is the closed span of $f_1,f_3,f_5,\ldots$. The negative odd Fourier polynomials have the form $\overline{f(k_\theta)}$ for such positive polynomials; let their closure be $H_-$. By [F2], $H_+$ and $H_-$ are orthogonal and $L^2_1(K)=H_+\oplus H_-$. [F2, construct]

1.4 Put $\mathcal C=2^{-1/2}\begin{pmatrix}1&i\\1&-i\end{pmatrix}$ and let $v_\theta=(-\sin\theta,\cos\theta)^T$. Direct multiplication gives $\mathcal C v_\theta=(i e^{i\theta},-i e^{-i\theta})^T/\sqrt2$, so the ratio of its coordinates is $z=-e^{2i\theta}$. For $g\in G$, direct multiplication using $\det g=1$ gives $\mathcal Cg^T\mathcal C^{-1}=\begin{pmatrix}a&b\\\overline b&\overline a\end{pmatrix}$ with $|a|^2-|b|^2=1$. The row action $v_\theta^Tg$ therefore sends $z$ to $\Phi_g(z)=(az+b)/(\overline b z+\overline a)$; its derivative is $\Phi'_g(z)=(\overline b z+\overline a)^{-2}$. Since $|a|^2-|b|^2=1$ and both moduli are nonnegative, $|a|>|b|$, so the denominator has no zero on the closed disk. [F4, F5, algebra]

2.1 On the boundary, $z=-e^{2i\theta}$ and $\Phi_g(z)=-e^{2i\kappa_g(\theta)}$. Differentiating in $\theta$ gives $|\kappa'_g(\theta)|=|\Phi'_g(z)|=|\overline b z+\overline a|^{-2}$. To determine the sign, write the bottom row of $k_\theta g$ as the column $u(\theta)=g^T v_\theta$, where $v_\theta=(-\sin\theta,\cos\theta)^T$. For $k_\theta g=a_{t(\theta)}n_{x(\theta)}k_{\kappa_g(\theta)}$ one has $u=e^{-t/2}v_{\kappa_g(\theta)}$. Since $\det g=1$ and $\det(v_\theta,v'_\theta)=1$, we have $\det(u,u')=1$; the factorized expression gives $\det(u,u')=e^{-t}\kappa'_g$. Therefore $\kappa'_g=e^t>0$, and the boundary derivative identity gives $\kappa'_g=|\Phi'_g(z)|=|\overline b z+\overline a|^{-2}=|\alpha(p(k_\theta,g))|^2$. On $|z|=1$, $az+b=z\overline{(\overline b z+\overline a)}$, so $e^{2i(\kappa_g(\theta)-\theta)}=\overline d/d$ for $d=\overline b z+\overline a$ and $e^{i\kappa_g(\theta)}=\pm e^{i\theta}\overline d/|d|$ with a constant sign on the circle. Using $|\alpha(p(k_\theta,g))|=e^{t/2}=|d|^{-1}$, if $f(k_\theta)=e^{i\theta}F(z)$ then [F4] gives $(\Pi_0(g)f)(k_\theta)=\pm e^{i\theta}(\overline b z+\overline a)^{-1}F(\Phi_g(z))$. [F4, F5, step 1.4, algebra]

3.1 For polynomial $F$, each term of $(\overline b z+\overline a)^{-1}F(\Phi_g(z))$ is a polynomial divided by a positive integer power of $\overline a+\overline b z$. Since $|\overline b/\overline a|<1$, [F5] expands each reciprocal power uniformly on $|z|\le1$ as a series with only nonnegative powers of $z$. Thus $\Pi_0(g)$ maps positive odd Fourier polynomials into $H_+$. The action is unitary by [F1], so approximation by these polynomials and closedness give $\Pi_0(g)H_+\subseteq H_+$; applying the same argument to $g^{-1}$ gives equality. At $\nu=0$ the cocycle and the odd inducing sign are real, so complex conjugation commutes with $\Pi_0(g)$; consequently $H_-$ is also invariant. [F1, F4, F5, step 2.1, step 1.3]

4.1 By [F3], the K-finite parts of $H_+$ and $H_-$ are exactly $M^-_1$ and $M^+_{-1}$. Each is algebraically irreducible by the chain argument in [F3]. If a closed invariant subspace of either summand is nonzero, [F6] puts a nonzero K-finite vector in it; irreducibility then gives the whole corresponding chain, which is dense in that summand. Hence both invariant Hilbert summands are irreducible unitary limits of discrete series, and their orthogonal sum is $I_{1,0}$. [F2, F3, F6, step 1.3, step 3.1] ∎
