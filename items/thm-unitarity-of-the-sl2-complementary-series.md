---
id: thm-unitarity-of-the-sl2-complementary-series
kind: theorem
title: Unitarity of the complementary series
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 8
deps:
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - def-fourier-coefficients-and-trigonometric-polynomials
  - lem-dual-pairing-between-opposite-principal-series-parameters
  - def-standard-intertwining-operator-for-sl2-r
  - thm-meromorphic-continuation-and-intertwining-identity-for-a-nu
  - lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - thm-unitarity-of-the-sl2-unitary-principal-series
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-p-series-rational
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.3, printed pp. 51–52: invariant Hermitian forms, the positive-definite criterion, complementary-series range, and Theorem 9.3"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, printed p. 12: the unitary list includes the spherical complementary series and explicitly defers its construction"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.20 and Proposition 7.4.21, printed pp. 310–312: the necessary range and positive-parameter form construction; the infinitesimal skew-adjointness check is left as an exercise, irreducibility is only sketched, and the negative-parameter form is initially defined only on a dense subspace. Exercise 7.4.22, printed p. 313, asks for the no-odd-series proof."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $\nu\in\mathbb R$. In spherical parity define
$$a_0(\nu)=1,\qquad a_{\pm2j}(\nu)=\prod_{l=1}^{j}\frac{2l-1-\nu}{2l-1+\nu}\quad(j\ge1).$$
For every real $\nu\notin\{-1,-3,-5,\ldots\}$, the Fourier form
$$B_\nu(f,h)=\sum_{n\in2\mathbb Z}a_n(\nu)\widehat f(n)\overline{\widehat h(n)}$$
is a finite continuous Hermitian $G$-invariant form on $C^\infty_0(K)$. It agrees with $\langle A(\nu)f,h\rangle_0/c_0(\nu)$ wherever that quotient is defined and with its regular meromorphic continuation at the common scalar poles, including $\nu=0$. The full spherical K-finite module $I^K_{0,\nu}$ admits a positive-definite invariant Hermitian form (in the $(\mathfrak g,K)$ sense) if and only if $|\nu|<1$. For $0<|\nu|<1$, $B_\nu$ is positive definite and its Hilbert completion is the irreducible strongly continuous unitary spherical complementary series; at $\nu=0$, $B_0$ is the usual $L^2$ form and the representation is the spherical unitary principal series. At regular real $\nu$ with $|\nu|>1$, $a_0$ and $a_2$ have opposite signs, so $B_\nu$ is indefinite. At negative odd integers the normalized weights have poles, but the invariant-form recurrence still rules out a positive-definite form on the full K-finite spherical module.

At $\nu=1$, the regular normalized form has $a_0=1$ and every nonzero even weight zero. At $\nu=-1$, the rescaled limit
$$q_n=\lim_{\nu\to-1^+}(1+\nu)a_n(\nu),\qquad q_0=0,\quad q_{\pm2j}=2j\quad(j\ge1)$$
is a different nonzero degenerate $G$-invariant form. The $\nu=1$ form detects the trivial quotient; the $\nu=-1$ limiting form has radical $\mathbb C f_0$, the trivial submodule. No signature claim is made for other exceptional rescaled forms.

For odd parity and real $\nu\ne0$, if $B$ is an invariant Hermitian form and $b_n=B(f_n,f_n)$, the recurrence gives $b_1=-b_{-1}$, so no positive-definite invariant form exists on the full odd K-finite module and there is no nonspherical complementary series. At a nonexceptional real $\nu$, every nonzero invariant Hermitian form on that odd module is nondegenerate and indefinite. At positive even $\nu=2m>0$, its tail weights $|n|\ge2m+1$ vanish; at negative even $\nu=-2m<0$, its central weights $|n|\le2m-1$ vanish, so every such form is degenerate at these nonzero exceptional parameters. At odd $\nu=0$, the K-finite module splits into the two unitary limits of discrete series as in [[thm-unitarity-of-the-sl2-unitary-principal-series]].
## Facts & Assumptions

**Given:** AC, the normalized principal-series models for real $\nu$, their compact-picture smooth vectors, and the parity parameter $\varepsilon\in\{0,1\}$.

[F1] The compact-picture action is $(\Pi_\nu(g)f)(k)=|\alpha(p(k,g))|^{1+\nu}f(\kappa(k,g))$ in the canonical $AN\times K$ factorization and is smooth in the group and compact variables ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-normalized-principal-series-i-epsilon-nu]]).

[F2] The Fourier vectors $f_n(k_\theta)=e^{in\theta}$, $n\equiv\varepsilon\pmod2$, form an orthonormal basis of $L^2_\varepsilon(K)$ and their finite spans are the K-finite core ([[lem-k-type-decomposition-of-the-sl2-principal-series]], [[def-fourier-coefficients-and-trigonometric-polynomials]]).

[F3] For real $\nu$, $\langle u,h\rangle_0=\int_Ku(k)\overline{h(k)}\,dk$ is a G-invariant pairing between $I_{\varepsilon,-\nu}$ and $I_{\varepsilon,\nu}$ ([[lem-dual-pairing-between-opposite-principal-series-parameters]]).

[F4] The standard integral defines $A(\nu)$ for $\operatorname{Re}\nu>0$; its meromorphic family is continuous and K-diagonal on smooth vectors and intertwines $\Pi_\nu$ with $\Pi_{-\nu}$ wherever regular ([[def-standard-intertwining-operator-for-sl2-r]], [[thm-meromorphic-continuation-and-intertwining-identity-for-a-nu]]). The quotient by $c_0(\nu)$ at common poles is proved locally in Step 2.2.

[F5] The eigenvalues satisfy $(n+1+\nu)c_{n+2}=(n+1-\nu)c_n$, $c_{-n}=(-1)^n c_n$, and the displayed Gamma formula with its exact exceptional zeros and poles ([[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]]).

[F6] The real derived action is $L_{E_+}f_n=(1+\nu+n)f_{n+2}/2$ and $L_{E_-}f_n=(1+\nu-n)f_{n-2}/2$. For an invariant Hermitian form on the K-finite module, infinitesimal invariance makes real generators skew-adjoint; since $E_- = \overline{E_+}$, sesquilinearity gives $B(L_{E_+}u,v)=-B(u,L_{E_-}v)$ ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F7] At $\nu=0$, the spherical module is irreducible and the odd K-finite module splits into the two chains $M^-_1$ and $M^+_{-1}$; at $\nu=1$ the trivial representation is the finite-dimensional quotient, and at $\nu=-1$ it is the submodule $\mathbb C f_0$ ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]).

[F8] The compact-picture action at imaginary parameter is a strongly continuous unitary representation in the sense of [[def-strongly-continuous-unitary-representation]]; at $\nu=0$ the odd representation is the direct sum of the two unitary limits of discrete series ([[thm-unitarity-of-the-sl2-unitary-principal-series]]).

[F9] Complex integration by parts on a period interval bounds Fourier coefficients of a smooth function by $C_N|n|^{-N}$, and $\sum_{n\ge1}n^{-p}$ converges for rational $p>1$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]], [[thm-p-series-rational]]).

[F10] AC supplies countable choice for the complex integration-by-parts supplier ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]]).

[F11] The compact-picture action and its parameter depend continuously in each $C^r$ seminorm; the product and chain rules compute derivatives of its multiplier and composed argument ([[thm-compact-picture-of-the-sl2-principal-series]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F12] For fixed $g$ and smooth $f$, the function $\nu\mapsto p_N(\Pi_\nu(g)f)$ is continuous on a compact real parameter interval by [F11], hence bounded there by the extreme-value theorem ([[thm-extreme-value-metric]]). Thus the Fourier-decay bounds in [F9] can be chosen uniformly on such an interval.

[A1] AC supplies normalized Haar probability on $K$ through the compact-picture/Fourier suppliers and implies the countable-choice hypothesis in [F9] through [F10]. The proof makes no further selections ([[def-axiom-of-choice]], [F10]).

## Proof

**Proof technique:** solve the invariant-form recurrence, prove the smooth multiplier bounds, and pass the resulting invariant forms to their Hilbert completions and endpoint limits.

1.1 In spherical parity put $a_0(\nu)=1$. The Gamma formula in [F5], using $\Gamma(z+1)=z\Gamma(z)$, gives the cross-multiplied recurrence as a meromorphic identity for every $\nu$, so it may be used even at its zero denominators. For $\nu\notin\{-1,-3,\ldots\}$, successive use at $n=0,2,\ldots,2j-2$ gives $a_{2j}=\prod_{l=1}^{j}(2l-1-\nu)/(2l-1+\nu)$. The meromorphic symmetry $c_{-n}=(-1)^n c_n$ gives $a_{-2j}=a_{2j}$. At a positive odd $\nu=2m+1$ with $m\ge0$, the numerator $2l-1-\nu$ vanishes at $l=m+1$, so every weight with $j\ge m+1$ is zero; a denominator vanishes exactly at a negative odd integer. Thus the displayed weights are finite precisely on the real parameter set in the Statement. [F5, algebra]

1.2 Let $B$ be any positive-definite invariant Hermitian form on the full spherical K-finite module, and put $b_n=B(f_n,f_n)>0$. K-invariance makes distinct K-types orthogonal. By the infinitesimal invariance relation [F6], $B(L_{E_+}f_0,f_2)=-B(f_0,L_{E_-}f_2)$, so the ladder formulas give $(1+\nu)b_2=(1-\nu)b_0$. If $\nu=-1$, the left side is zero and the right side positive; if $\nu<-1$, the left coefficient is negative and the right positive; if $\nu=1$, the left is positive while the right is zero; and if $\nu>1$, the right side is negative. Hence such a form can exist only when $|\nu|<1$. [F6, algebra]

1.3 In odd parity, any invariant Hermitian form on the K-finite module is K-diagonal with real weights $b_n=B(f_n,f_n)$. Applying [F6] to each adjacent pair gives $(1+\nu+n)b_{n+2}=(n+1-\nu)b_n$; at $n=-1$ this is $\nu b_1=-\nu b_{-1}$. For real $\nu\ne0$, a positive-definite form would have $b_1,b_{-1}>0$, contradicting this identity. If $\nu$ is nonexceptional and the form is nonzero, K-diagonality gives some nonzero $b_n$; no ladder coefficient vanishes, so the recurrence propagates this to $b_1\ne0$ and then to every odd weight. Since $b_{-1}=-b_1$, the form is nondegenerate and indefinite. [F5, F6, algebra]

1.4 At $\varepsilon=1$, $\nu=0$, the K-finite odd module splits into the two unitary limit chains by [F8]; the recurrence at $n=-1$ is $0=0$ and leaves their invariant weights independent. This is the separate zero-parameter unitary splitting, not an odd complementary series. [F7, F8, F5]

2.1 Fix a real $\nu\notin\{-1,-3,\ldots\}$. For all sufficiently large $l$, $|(2l-1-\nu)/(2l-1+\nu)|\le1+C/l$ for a constant depending on $\nu$; bound the finitely many earlier factors separately. Choose an integer $M\ge C$; then $\prod_{l=1}^{j}(1+M/l)=\binom{j+M}{M}\le(j+M)^M$, so $|a_n(\nu)|\le C'(1+|n|)^M$. If an initial factor is zero the subsequent weights are zero and the same estimate holds. By [F9], $|\widehat f(n)|\le C_Np_N(f)|n|^{-N}$ for $n\ne0$. Choose $N$ with $2N-M>1$; the p-series bound then gives $|B_\nu(f,h)|\le C p_N(f)p_N(h)$, so the Fourier form is finite and continuous. Its weights are real and symmetric, hence it is Hermitian. [F2, F9, F10, A1, step 1.1, algebra]

2.2 Define $R_\nu$ as the smooth K-diagonal multiplier with coefficients $a_n(\nu)$. If $\nu$ is not a common scalar pole and $c_0(\nu)\ne0$, it equals $A(\nu)/c_0(\nu)$; the smooth continuity follows from [F4]. At $\nu_0=-2m$, $m\ge0$, the Gamma formula in [F5] has a simple pole with nonzero residue in its numerator, while both denominator arguments for every even $n$ are half-integers and finite. Thus all $c_n$, including $c_0$, have the same simple pole and $(\nu-\nu_0)c_0(\nu)$ is holomorphic and nonzero at $\nu_0$. In the local Laurent expansion of the meromorphic K-diagonal family [F4], every coefficient below degree $-1$ has zero multiplier on each K-type because each scalar $c_n$ has at most a simple pole by [F5]. Such a continuous K-diagonal coefficient sends every smooth vector to a smooth function with all Fourier coefficients zero, hence is zero by completeness in [F2]. Therefore $(\nu-\nu_0)A(\nu)$ is holomorphic in the smooth operator topology, and dividing by $(\nu-\nu_0)c_0(\nu)$ defines the continuous extension of $R_\nu$ there; its K-type multipliers are exactly those in step 1.1. At every real parameter under consideration, [F4] gives the intertwining identity after division when $c_0\ne0$; at the common poles pass to the limit from neighboring regular parameters, using [F11] for continuity of the compact-picture action in $\nu$. Therefore $R_\nu$ intertwines $\Pi_\nu$ with $\Pi_{-\nu}$ for every $\nu$ in the stated real domain. By [F2], $B_\nu(f,h)=\langle R_\nu f,h\rangle_0$; [F3] and the intertwining identity give $B_\nu(\Pi_\nu(g)f,\Pi_\nu(g)h)=B_\nu(f,h)$ for every $g\in G$. [F2, F3, F4, F5, F11, step 1.1]

2.3 If $|\nu|<1$, every numerator and denominator in the spherical weight product is positive, so all $a_n(\nu)>0$. Fourier completeness [F2] then makes $B_\nu$ positive definite; at $\nu=0$ all weights equal one and $B_0$ is the ordinary $L^2$ inner product. [F2, step 1.1, algebra]

2.4 At a regular real parameter with $|\nu|>1$, the displayed normalized form has $a_0=1$ and $a_2=(1-\nu)/(1+\nu)<0$, so it is indefinite. Negative odd parameters are excluded from this assertion because the normalized weights have poles there; the recurrence argument in step 1.2 still rules out any positive-definite full-module form at those parameters. [F5, step 1.1, algebra]

2.5 Let $\nu=2m>0$. The recurrence from [F6] at $n=2m-1$ forces $b_{2m+1}=0$ and then all upper tail weights vanish; at $n=-2m-1$ it forces $b_{-2m-1}=0$ and then all lower tail weights vanish. If $\nu=-2m<0$, the same two recurrence equations force $b_{2m-1}=b_{-2m+1}=0$, propagating through every central odd weight $|n|\le2m-1$. Thus every invariant form at either nonzero even exceptional parameter is degenerate. These equations force zeros, not signs on the remaining chains, so no blanket indefiniteness conclusion is asserted. [F6, step 1.3, algebra]

3.1 At $\nu=1$, the product in step 1.1 has $a_0=1$ and $a_{\pm2j}=0$ for every $j\ge1$. Hence $B_1(f,h)=\widehat f(0)\overline{\widehat h(0)}$. It is a finite nonzero degenerate invariant form by steps 2.1–2.2. Its radical in $C^\infty_0(K)$ is $\{f:\widehat f(0)=0\}$, whose K-finite part is the algebraic span of the nonzero even K-types; the quotient is one-dimensional, and [F7] identifies its K-finite quotient with the trivial module $L_0$. [F2, F7, step 2.2]

3.2 For $-1<\nu\le0$ and $j\ge1$, rewrite $(1+\nu)a_{2j}(\nu)=(1-\nu)\prod_{l=2}^{j}(2l-1-\nu)/(2l-1+\nu)$. Each factor in the product is at most $l/(l-1)$, so $0<(1+\nu)a_{2j}(\nu)\le2j$. The $j=0$ weight $(1+\nu)a_0$ tends to zero, while for $j\ge1$ the product tends to $2j$ as $\nu\to-1^+$. By [F9] and this bound, the rescaled Fourier forms converge on smooth vectors to the finite nonzero form with weights $b_0=0$ and $b_{\pm2j}=2j$. To pass invariance to the rescaled limit, [F12] bounds the Fourier-decay seminorms of $\Pi_\nu(g)f$ and $\Pi_\nu(g)h$ uniformly for $\nu\in[-1,0]$; hence the same summable majorant applies to both sides of the invariance identity. The limit is invariant, its radical is exactly $\mathbb C f_0$, and [F7] identifies that line as the trivial submodule. [F7, F9, F12, step 2.2, algebra]

4.1 Suppose $0<|\nu|<1$. The polynomial bound in step 2.1 and Fourier decay in [F9] give a finite $r$ and $C$ with $\|f\|_{B_\nu}\le C p_r(f)$ for every smooth $f$. The smooth compact action is continuous in each $C^r$ seminorm by [F1, F11], so every smooth vector has a continuous orbit in the $B_\nu$ norm. Invariance makes $\Pi_\nu(g)$ an isometry with inverse $\Pi_\nu(g^{-1})$; it extends to a unitary on the completion, and density plus the isometry bound extends strong continuity to every completed vector. For irreducibility, the completion is the weighted $\ell^2$ completion of the even Fourier modes. If $W$ is a nonzero closed invariant subspace, choose $\xi=\sum_{n\in2\mathbb Z}x_nf_n\ne0$ in $W$ and an $n$ with $x_n\ne0$. For integers $N>|n|$, the finite average $Q_N\xi=N^{-1}\sum_{j=0}^{N-1}e^{-2\pi i n j/N}\Pi_\nu(k_{2\pi j/N})\xi$ lies in $W$ and retains exactly the modes $r\equiv n\pmod N$. As $N\to\infty$, all retained modes other than $n$ lie in the weighted $\ell^2$ tail $|r|\ge N-|n|$, so $Q_N\xi\to x_nf_n$. Hence $f_n\in W$. Smooth difference quotients in the $B_\nu$ norm put both ladder images in $W$; for $|\nu|<1$ all even ladder coefficients are nonzero, so $W$ contains every even K-type. Their finite span is dense by construction of the completion, giving $W$ equal to the full Hilbert space. [F1, F2, F6, F9, step 2.1, step 2.3, algebra] ∎
