---
id: thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients
kind: theorem
title: Square integrability of discrete-series matrix coefficients
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - lem-the-weighted-discrete-series-space-is-a-hilbert-space
  - lem-the-weighted-area-form-is-sl2-r-invariant
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
  - lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-jacobian-determinant-of-a-holomorphic-map
  - def-matrix-coefficient-of-a-unitary-representation
  - def-left-and-right-regular-unitary-representations
  - cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is assumed and inherited through the weighted Hilbert model, the fixed KAK Haar formula, and the L2 regular representation. The coefficient-to-function map and beta-integral computations use no additional choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.13 and Proposition 7.4.16(3), printed pp. 302–308: the lemma sketches the coefficient criterion and embedding; the proposition computes the extremal coefficient. The present proof supplies the full K-finite coefficient and embedding arguments."
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "Appendix I §7, Proposition 7.2 and Corollary 7.3, printed pp. 27–29: the weighted holomorphic model occurs in the left-regular L2(G) representation with the stated one-sided K-types."
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$ and let $D_n^-=(\pi_n,\mathcal H_n^+)$ and $D_n^+=(\pi_n^-,\mathcal H_n^-)$ be the holomorphic and antiholomorphic discrete-series models of [[def-holomorphic-and-antiholomorphic-discrete-series-models]]. Every matrix coefficient $g\mapsto\langle\pi_n(g)v,w\rangle$ with $v,w$ K-finite belongs to $L^2(G)$ for the fixed Haar measure in [[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]], for each of $D_n^-$ and $D_n^+$. Moreover, each of $D_n^-$ and $D_n^+$ is unitarily equivalent to a closed $G$-invariant subspace of the left regular representation $\lambda$ on $L^2(G)$ ([[def-left-and-right-regular-unitary-representations]]).

## Facts & Assumptions

**Given:** AC; the holomorphic and antiholomorphic models for $n\ge2$; the fixed left Haar measure and KAK formula; and the left regular representation on $L^2(G)$.

[F1] In $D_n^-$, $e_j:=f_{n,j}/N_j$, where $N_j=\|f_{n,j}\|_n$, is a complete orthonormal K-basis, $\pi_n(k_\theta)e_j=\chi_j(k_\theta)e_j$ with $\chi_j(k_\theta)=e^{-i(n+2j)\theta}$, and every K-finite vector is a finite linear combination of the $e_j$. The model is a strongly continuous unitary representation. These are the weighted-space and invariant-area conclusions ([[def-holomorphic-and-antiholomorphic-discrete-series-models]], [[lem-the-weighted-discrete-series-space-is-a-hilbert-space]], [[lem-the-weighted-area-form-is-sl2-r-invariant]]); the norm constants are calculated in step 1.2.

[F2] The normalized extremal coefficient is $\langle\pi_n(a_t)e_0,e_0\rangle=\cosh(t/2)^{-n}$, and coefficients between enveloping-algebra translates of $e_0$ obey the stated exponential decay ([[lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series]]). The general polynomial formula needed below is derived in step 1.2.

[F3] For each continuous nonnegative K-bi-invariant $\psi$, the fixed Haar measure satisfies
$$\int_G\psi(g)\,dg=2\pi\int_0^\infty\psi(a_t)\sinh(t)\,dt$$
with extended values ([[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]).

[F4] The left regular action is $\lambda(h)f(g)=f(h^{-1}g)$ and is a strongly continuous unitary representation on $L^2(G)$; continuous unitary matrix coefficients use a pairing linear in the first variable ([[def-left-and-right-regular-unitary-representations]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F5] If a sequence converges in $L^2(G)$, some subsequence of representatives converges almost everywhere to a representative of its limit ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]).

[F6] A $C^1$ diffeomorphism between open Euclidean sets changes variables for nonnegative Lebesgue-measurable functions, and the real Jacobian of a holomorphic map is the squared modulus of its complex derivative ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-jacobian-determinant-of-a-holomorphic-map]]).

[A1] AC is the stated hypothesis for the weighted Hilbert model, normalized Haar data, and regular-representation Hilbert space ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation of the Statement.

1.1 By [F1], a finite-dimensional K-invariant span decomposes into finitely many characters of $K=\mathrm{SO}(2)$, and the corresponding character spaces in $D_n^-$ are precisely the lines $\mathbb C e_j$. Hence every K-finite $v,w\in\mathcal H_n^+$ has finite expansions in this basis. [F1, algebra]

1.2 In the Cayley coordinate $w=(z-i)/(z+i)$, put $F_f(w)=(z+i)^nf(z)$, so $F_{f_{n,j}}=w^j$. Substitution of $z=i(1+w)/(1-w)$ in the weighted integral gives $\|f\|_n^2=2^{2-2n}\int_{\mathbb D}|F_f(w)|^2(1-|w|^2)^{n-2}dA(w)$: the factors are $z+i=2i/(1-w)$, $y=(1-|w|^2)/|1-w|^2$, and $|dz/dw|^2=4/|1-w|^4$. Polar integration therefore gives $N_j^2=2^{2-2n}\pi B_j$, where $B_j=\int_0^1x^j(1-x)^{n-2}dx$. For every real $t$, write $r=\tanh(t/2)$. The inverse-action formula in [F1] gives $F_{\pi_n(a_t)f_{n,j}}(w)=\cosh(t/2)^{-n}(w-r)^j(1-rw)^{-n-j}$. Expand the polynomial numerator and the denominator by the geometric-series derivatives; since $|r|<1$, the resulting power series converges absolutely and uniformly on $|w|\le1$. Its coefficient of $w^k$ is $\cosh(t/2)^{-n}Q_{jk}(r)$, with $Q_{jk}(r)=\sum_{p=0}^{\min(j,k)}(-1)^{j-p}\binom jp\binom{n+j+k-p-1}{k-p}r^{j+k-2p}$. Uniform convergence permits integration against $\bar w^k(1-|w|^2)^{n-2}$; angular orthogonality leaves precisely that coefficient times $N_k^2$. Hence $\langle\pi_n(a_t)f_{n,j},f_{n,k}\rangle=\cosh(t/2)^{-n}Q_{jk}(r)N_k^2$, and $Q_{j0}(r)=(-r)^j$. At $j=k=0$ this agrees with [F2]. [F1, F2, F6, algebra, A1]

2.1 For basis vectors $e_j,e_k$, step 1.2 and boundedness of the fixed polynomial $Q_{jk}$ on $[-1,1]$ give $|\langle\pi_n(k_1a_tk_2)e_j,e_k\rangle|\le C_{jk}\cosh(t/2)^{-n}\le2^nC_{jk}e^{-nt/2}$ for $k_1,k_2\in K$ and $t\ge0$, since each K-factor acts on its weight vector by a scalar of modulus one. Thus $|\langle\pi_n(g)e_j,e_k\rangle|^2$ is a continuous K-bi-invariant function and [F3] gives its integral at most $2\pi(2^nC_{jk})^2\int_0^\infty e^{-nt}\sinh(t)\,dt\le\pi(2^nC_{jk})^2/(n-1)<\infty$. For finite expansions $v=\sum_jv_je_j$ and $w=\sum_kw_ke_k$, the coefficient is the finite sum $\sum_{j,k}v_j\overline{w_k}\langle\pi_n(g)e_j,e_k\rangle$; the pointwise Cauchy–Schwarz inequality bounds its squared modulus by $\bigl(\sum_{j,k}|v_j\overline{w_k}|^2\bigr)\sum_{j,k}|\langle\pi_n(g)e_j,e_k\rangle|^2$. The latter is integrable as a finite sum, proving the assertion for all K-finite $v,w$. [F1, F3, step 1.2, algebra]

3.1 Put $e_0=f_{n,0}/N_0$ and define $\Phi(v)(g):=\langle\pi_n(g^{-1})v,e_0\rangle$ for K-finite $v$. Unitarity gives $\Phi(v)(g)=\overline{\langle\pi_n(g)e_0,v\rangle}$, so step 2.1 shows $\Phi(v)\in L^2(G)$; linearity follows from the first-variable-linear pairing. For $t\ge0$, step 1.2 gives $\Phi(e_j)(a_t)=\langle\pi_n(a_{-t})e_j,e_0\rangle=\frac{N_0}{N_j}\tanh(t/2)^j\cosh(t/2)^{-n}$. For $k_1,k_2\in K$, the K-eigenvector identities give $\Phi(e_j)(k_1gk_2)=\chi_j(k_1)^{-1}\overline{\chi_0(k_2)}\Phi(e_j)(g)$, so this basis coefficient's modulus is K-bi-invariant. [F1, step 1.2, step 2.1, algebra]

4.1 Applying [F3] to $|\Phi(e_j)|^2$ and setting $r=\tanh(t/2)$ yields $\|\Phi(e_j)\|_2^2=2\pi\frac{B_0}{B_j}\int_0^\infty\tanh(t/2)^{2j}\cosh(t/2)^{-2n}\sinh(t)\,dt=2\pi\frac{B_0}{B_j}\,2B_j=4\pi B_0=\frac{4\pi}{n-1}$. Indeed, $\sinh(t)dt=4r(1-r^2)^{-2}dr$, $\cosh(t/2)^{-2n}=(1-r^2)^n$, and $x=r^2$ reduces the radial integral to $2\int_0^1x^j(1-x)^{n-2}dx=2B_j$. Each $B_j$ is finite and positive, and $B_0=1/(n-1)$. Also, $(\lambda(k_\theta)\Phi(e_j))(g)=\Phi(e_j)(k_{-\theta}g)=\langle\pi_n(g^{-1}k_\theta)e_j,e_0\rangle=\chi_j(k_\theta)\Phi(e_j)(g)$. If $j\ne k$, choose $\theta$ with $\chi_j(k_\theta)\ne\chi_k(k_\theta)$; unitarity of $\lambda$ then gives $\langle\Phi(e_j),\Phi(e_k)\rangle=\chi_j(k_\theta)\overline{\chi_k(k_\theta)}\langle\Phi(e_j),\Phi(e_k)\rangle$, so this inner product is zero. Thus, for $C_n:=4\pi/(n-1)$ and every K-finite $v=\sum_jv_je_j$, $\|\Phi(v)\|_2^2=C_n\sum_j|v_j|^2=C_n\|v\|^2$. [F1, F3, F4, step 3.1, algebra, A1]

5.1 The K-finite span is dense in $\mathcal H_n^+$ by [F1]. Therefore $C_n^{-1/2}\Phi$ extends uniquely by continuity to a linear isometry $J_n^-:\mathcal H_n^+\to L^2(G)$. Its image is closed: if $J_n^-v_m$ converges, the isometry identity makes $(v_m)$ Cauchy, and completeness of $\mathcal H_n^+$ gives a limit whose image is the stated range limit. [F1, step 4.1, algebra, A1]

6.1 For any $v\in\mathcal H_n^+$, choose K-finite $v_m\to v$. Then $J_n^-v_m\to J_n^-v$ in $L^2(G)$, so [F5] gives a subsequence converging almost everywhere to a representative of $J_n^-v$. At every $g\in G$, unitarity gives $\langle\pi_n(g^{-1})v_m,e_0\rangle\to\langle\pi_n(g^{-1})v,e_0\rangle$; hence $J_n^-v$ is almost everywhere equal to $C_n^{-1/2}\langle\pi_n(g^{-1})v,e_0\rangle$. For $h\in G$, the coefficient identity $C_n^{-1/2}\langle\pi_n(g^{-1})\pi_n(h)v,e_0\rangle=C_n^{-1/2}\langle\pi_n((h^{-1}g)^{-1})v,e_0\rangle=(\lambda(h)J_n^-v)(g)$ holds almost everywhere, using preservation of null sets by left translation. Thus $J_n^-\pi_n(h)=\lambda(h)J_n^-$; since $\pi_n(h)$ is onto, the closed range of $J_n^-$ is G-invariant. [F1, F4, F5, step 5.1, algebra]

7.1 Complex conjugation $C:\mathcal H_n^+\to\mathcal H_n^-$ is antiunitary and satisfies $C\pi_n(h)=\pi_n^-(h)C$ by the model definition. Complex conjugation $C_G$ on $L^2(G)$ is antiunitary and commutes with $\lambda(h)$, because $\lambda(h)$ acts by real-variable translation. The complex-linear map $J_n^+:=C_GJ_n^-C^{-1}$ is therefore an isometric intertwiner of $D_n^+$ with $\lambda$, with closed G-invariant range. The same conjugation identity shows that every K-finite matrix coefficient of $D_n^+$ is the complex conjugate of one for $D_n^-$, so it too lies in $L^2(G)$. [F1, F4, step 6.1, algebra] ∎
