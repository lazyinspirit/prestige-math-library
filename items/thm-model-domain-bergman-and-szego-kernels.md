---
id: thm-model-domain-bergman-and-szego-kernels
kind: theorem
title: Bergman kernels of the disc, ball and polydisc, and Szegő kernels of the disc and ball
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
proof_strategy: direct
deps:
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-bergman-space-and-kernel
  - def-binomial-coefficient
  - def-canonical-natural
  - def-complex-integer-powers
  - def-complex-series-power-series-and-absolute-convergence
  - def-countable-choice
  - def-factorial-and-falling-factorial
  - def-finite-sum-in-a-commutative-monoid
  - def-multinomial-coefficient
  - def-series
  - def-szego-kernel-smooth-bounded-domain
  - lem-ball-hardy-traces-and-evaluation-bound
  - lem-cauchy-product-of-absolutely-convergent-complex-series
  - lem-complex-conjugation-and-modulus-laws
  - lem-complex-multinomial-theorem
  - lem-disc-hardy-traces-and-szego-reproducing
  - lem-finite-sum-reindexing-and-fubini
  - lem-geometric-sequence-null
  - lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - lem-of-naturals-positive
  - lem-power-laws
  - prop-standard-coordinate-inner-products
  - rem-complex-euclidean-space-dictionary
  - thm-absolute-convergence-of-complex-series
  - thm-bergman-basis-expansion-and-closedness
  - thm-bergman-reproducing-projection-and-extremal
  - thm-binomial-closed-formula
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-complex-numbers-form-a-field
  - thm-geometric-series
  - thm-hilbert-space-fourier-expansion
  - thm-induction-principle
  - thm-pascals-rule
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 2–4: the disc kernel via automorphism, the ball kernel,
        the complete orthonormal-system expansion, and the product formula on
        product domains. Błocki assumes bounded domains throughout §1; all three
        model domains here are bounded.
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Example 5.2.3 and Exercises 5.2.8–5.2.10, printed pp. 162–165;
        §5.3, Example 5.3.1 and Exercise 5.3.3, printed pp. 165–166. The
        exercises ask for the polydisc, ball, and ball Szegő formulas without
        proofs; Example 5.3.1 uses arc-length measure.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), let $m\ge1$, and use Lebesgue measure on $\mathbb C^m\cong\mathbb R^{2m}$ with the first-variable-linear pairing. Write $\langle z,w\rangle:=\sum_{j<m}z_j\overline{w_j}$ for the standard Hermitian inner product. Then

$$K_{\mathbb D}(z,w)=\frac{1}{\pi(1-z\overline w)^2},\qquad K_{\mathbb D^m}(z,w)=\frac{1}{\pi^m}\prod_{j<m}\frac{1}{(1-z_j\overline{w_j})^2},\qquad K_{\mathbb B^m}(z,w)=\frac{m!}{\pi^m(1-\langle z,w\rangle)^{m+1}}.$$

Let $\mu_{\mathbb T}$ be normalized Haar measure on $\mathbb T=\partial\mathbb D$, and let $\sigma_m$ be normalized polar surface measure on $S^{2m-1}=\partial\mathbb B^m$. The pairs $(\mathbb D,\mu_{\mathbb T})$ and $(\mathbb B^m,\sigma_m)$ are Szegő-regular, with kernels

$$S_{\mathbb D}(z,w)=\frac{1}{1-z\overline w},\qquad S_{\mathbb B^m}(z,w)=\frac{1}{(1-\langle z,w\rangle)^m}.$$

Each displayed Bergman kernel reproduces the corresponding $A^2$ space and is the unique such kernel. Each displayed Szegő kernel reproduces the corresponding boundary Hardy space and is its unique Riesz kernel. No smooth-boundary Szegő construction is asserted for the polydisc.

## Facts & Assumptions

[A1] The only choice axiom assumed is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It supplies the Bergman and Hardy Hilbert/Riesz constructions and the Hilbert Fourier expansion used below; no full Axiom of Choice is used.

[F1] The normalized monomials form complete orthonormal systems in $A^2(\mathbb D)$, $A^2(\mathbb B^m)$, and $A^2(\mathbb D^m)$, with squared norms $\pi/(k+1)$, $\pi^m\alpha!/(m+|\alpha|)!$, and $\pi^m/\prod_{j<m}(\alpha_j+1)$, respectively ([[lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc]]).

[F2] For a complete orthonormal system $(e_\alpha)$ of a Bergman space, its kernel is $\sum_\alpha e_\alpha(z)\overline{e_\alpha(w)}$; the sum converges absolutely and uniformly on compact subsets ([[thm-bergman-basis-expansion-and-closedness]]).

[F3] The Cauchy product of two absolutely convergent complex series is absolutely convergent, with sum the product of the sums ([[lem-cauchy-product-of-absolutely-convergent-complex-series]]).

[F4] For a real $r$ with $0\le r<1$, $\sum_{k\ge0}r^k=1/(1-r)$ ([[thm-geometric-series]]).

[F5] Conjugation is multiplicative, $|xy|=|x||y|$, $|1|=1$, and $|t|=0$ exactly when $t=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F6] Complex series are limits of their finite partial sums, and absolute convergence is defined by the real modulus series ([[def-complex-series-power-series-and-absolute-convergence]], [[def-series]]). An absolutely convergent complex series converges ([[thm-absolute-convergence-of-complex-series]]).

[F7] If $0\le r<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]]).

[F8] Cauchy–Schwarz holds in complex inner-product spaces ([[thm-cauchy-schwarz-in-an-inner-product-space]]); the coordinate pairing $\sum_{j<m}z_j\overline{w_j}$ is the standard complex inner product ([[prop-standard-coordinate-inner-products]]).

[F9] The Euclidean norm on $\mathbb C^m$ is $\|z\|=(\sum_{j<m}|z_j|^2)^{1/2}$, and its balls are the stated unit balls ([[rem-complex-euclidean-space-dictionary]], [[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F10] The complex multinomial expansion holds for every $m,n\in\mathbb N$ ([[lem-complex-multinomial-theorem]]).

[F11] For every $\alpha\in\mathcal W(n,m)$, $\iota_{\mathbb C}(\binom n\alpha)\prod_{i<m}\iota_{\mathbb C}(\alpha_i!)=\iota_{\mathbb C}(n!)$ ([[lem-complex-multinomial-theorem]]).

[F12] The disc Hardy pair is Szegő-regular and has kernel $1/(1-z\overline w)$ under normalized Haar measure ([[lem-disc-hardy-traces-and-szego-reproducing]]).

[F13] The ball Hardy pair is Szegő-regular; extended evaluation is bounded and has a unique Riesz representer ([[lem-ball-hardy-traces-and-evaluation-bound]]).

[F14] The normalized ball boundary monomials form a complete orthonormal system with squared norms $w_\alpha=(m-1)!\alpha!/(m-1+|\alpha|)!$ ([[lem-ball-hardy-traces-and-evaluation-bound]]).

[F15] A complete orthonormal family has a norm-convergent Fourier expansion by the net of finite-subset sums ([[thm-hilbert-space-fourier-expansion]]).

[F16] The binomial coefficient vanishes when its lower argument exceeds its upper argument, and $\sum_{i=0}^{N}\binom{i}{k}=\binom{N+1}{k+1}$ ([[def-binomial-coefficient]], [[thm-pascals-rule]]).

[F17] If $k\le n$, then $\binom nk\,k!\,(n-k)!=n!$; every factorial is a nonzero natural ([[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]]).

[F18] On a Szegő-regular pair, each extended evaluation has a unique Riesz representer and the Szegő kernel is defined from those representers ([[def-szego-kernel-smooth-bounded-domain]]).

[F19] The Bergman kernel reproduces evaluation on $A^2(\Omega)$ ([[thm-bergman-reproducing-projection-and-extremal]]).

[F20] Each point evaluation on $A^2(\Omega)$ has a unique Riesz representer, whose holomorphic representative defines the Bergman kernel ([[def-bergman-space-and-kernel]]).

[F21] The canonical natural in $\mathbb C$ is the image of the real canonical natural under the embedded copy $\mathbb R\hookrightarrow\mathbb C$; the natural map into $\mathbb R$ preserves finite sums and products, and positive natural numbers map to positive reals ([[def-canonical-natural]], [[thm-complex-numbers-form-a-field]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[lem-of-naturals-positive]]).

[F22] The degree shells $\{\alpha\in\mathbb N^m:|\alpha|=k\}$ are finite, every finite subset of $\mathbb N^m$ is contained in a finite union of initial degree shells, and finite sums may be reindexed along bijections ([[def-multinomial-coefficient]], [[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[F23] Induction on the natural numbers is valid ([[thm-induction-principle]]).

[F24] Natural powers are recursively defined; $(ab)^k=a^kb^k$, and conjugation of a natural power is the corresponding power of the conjugate ([[def-complex-integer-powers]], [[lem-power-laws]], with the last identity following by induction from the recursion and [F5]).

## Proof

**Proof technique:** direct, using complete monomial systems and the binomial series.

**Given:** $\mathrm{AC}_\omega$, the unit disc, unit ball and unit polydisc, and the normalized boundary measures.

1.1 The series parameters lie in the unit disc. If $z,w\in\mathbb D$, or if $z,w\in\mathbb D^m$, then $|z\overline w|<1$ or $|z_j\overline{w_j}|<1$ coordinatewise. If $z,w\in\mathbb B^m$, [F8] gives $|\langle z,w\rangle|\le\|z\|\|w\|<1$ by [F9]. Thus every denominator below is nonzero. [F5, F8, F9, given]

1.2 The disc pair with normalized Haar measure is Szegő-regular and has kernel $1/(1-z\overline w)$ by [F12]. The Szegő definition [F18] makes each kernel section the unique Riesz representer of its extended evaluation, so this is the unique disc Szegő kernel. [A1, F12, F18]

2.1 Fix a complex $t$ with $|t|<1$. By induction from the power recursion [F24] and modulus multiplicativity [F5], $|t^k|=|t|^k$ for every $k$. The real geometric series for $|t|$ converges by [F4], so $\sum_{k\ge0}t^k$ is absolutely convergent and converges by [F6], say to $G(t)$. The finite identity $(1-t)\sum_{k=0}^{N}t^k=1-t^{N+1}$ follows by telescoping in the field [F21]; [F7] gives $|t|^{N+1}\to0$, hence $t^{N+1}\to0$. Since $|t|<1=|1|$, $t\ne1$; taking limits gives $G(t)=1/(1-t)$. [F4, F5, F6, F7, F21, F24, step 1.1, given]

3.1 For every integer $q\ge1$, define $B_q(t):=\sum_{k\ge0}\binom{q+k-1}{q-1}t^k$. Step 2.1 is the base $q=1$. If $B_q(t)$ is absolutely convergent with sum $(1-t)^{-q}$, its Cauchy product with $\sum_{j\ge0}t^j$ is absolutely convergent and has sum $(1-t)^{-(q+1)}$ by [F3]. The coefficient of $t^k$ in this product is $\sum_{j=0}^{k}\binom{q+j-1}{q-1}$. Set $i=q+j-1$; the hockey-stick identity [F16] sums $\binom{i}{q-1}$ from $i=0$ to $q+k-1$, and [F16] makes each omitted term with $i<q-1$ zero. Thus the coefficient is $\binom{q+k}{q}$. By [F21] this natural identity also holds for the coefficients embedded in $\mathbb C$. Thus the product is exactly $B_{q+1}(t)$, proving the identity for every $q\ge1$ by induction [F23]. [F3, F16, F21, F23, step 2.1, given]

4.1 On the disc, the normalized monomials from [F1] give $K_{\mathbb D}(z,w)=\pi^{-1}\sum_{k\ge0}(k+1)(z\overline w)^k=\pi^{-1}B_2(z\overline w)$, which is the stated formula by step 3.1. On the polydisc, [F2] gives the monomial expansion. Its finite degree shells are cofinal among finite subsets by [F22], so the shell sums have the same limit as the kernel expansion. Repeated Cauchy products [F3] show that the degree-$k$ shell sum is the degree-$k$ coefficient in the product of the $m$ absolutely convergent series $\pi^{-1}B_2(z_j\overline{w_j})$; hence summing the shells gives their product. [A1, F1, F2, F3, F6, F22, F23, F24, step 3.1]

4.2 For $z,w\in\mathbb B^m$, put $t=\langle z,w\rangle$. The Bergman expansion [F2] and ball monomial norms [F1] give $K_{\mathbb B^m}(z,w)=\pi^{-m}\sum_{\alpha\in\mathbb N^m}\frac{(m+|\alpha|)!}{\alpha!}z^\alpha\overline{w^\alpha}$. The degree shells are finite and cofinal by [F22], so their partial sums converge to this kernel. In the shell $|\alpha|=k$, the multinomial expansion [F10] applied to $x_j=z_j\overline{w_j}$ gives $\sum_{|\alpha|=k}\iota_{\mathbb C}(\binom{k}{\alpha})z^\alpha\overline{w^\alpha}=t^k$, using [F24] for powers and conjugation. Also [F11] gives $\iota_{\mathbb C}(\binom{k}{\alpha})\prod_{j<m}\iota_{\mathbb C}(\alpha_j!)=\iota_{\mathbb C}(k!)$, while [F17] gives $\iota_{\mathbb C}(\binom{m+k}{m})\iota_{\mathbb C}(m!)\iota_{\mathbb C}(k!)=\iota_{\mathbb C}((m+k)!)$ after [F21] identifies the real and complex canonical naturals. The factorial denominator is positive by [F17, F21], so division gives $(m+k)!/\alpha!=m!\binom{m+k}{m}\binom{k}{\alpha}$ in the corresponding real scalars. The degree-$k$ block is therefore $\frac{m!}{\pi^m}\binom{m+k}{m}t^k$. Step 3.1 sums these blocks to the stated formula. [A1, F1, F2, F10, F11, F17, F21, F22, F24, step 3.1]

4.3 Let $S_w$ be the ball Szegő Riesz representer from [F13], and let $e_\alpha(\zeta)=\zeta^\alpha/\sqrt{w_\alpha}$ be its complete orthonormal boundary monomials by [F14]. By [F15], $S_w=\sum_\alpha\langle S_w,e_\alpha\rangle e_\alpha$. For any finite subset of indices, the first-variable-linear reproducing identity gives $\langle e_\alpha,S_w\rangle=e_\alpha(w)$ and hence $\langle S_w,e_\alpha\rangle=\overline{e_\alpha(w)}$. The finite degree shells are cofinal by [F22]; applying the bounded evaluation at $z$ from [F13] to the Fourier sums over those shells gives $S_{\mathbb B^m}(z,w)=\sum_{k\ge0}\sum_{|\alpha|=k}z^\alpha\overline{w^\alpha}/w_\alpha$. For each shell, [F10] applied to $x_j=z_j\overline{w_j}$ gives $\sum_{|\alpha|=k}\iota_{\mathbb C}(\binom{k}{\alpha})z^\alpha\overline{w^\alpha}=\langle z,w\rangle^k$, using [F24] for powers and conjugation. Since $w_\alpha=(m-1)!\alpha!/(m-1+k)!$, [F11] gives $\iota_{\mathbb C}(\binom{k}{\alpha})\prod_{j<m}\iota_{\mathbb C}(\alpha_j!)=\iota_{\mathbb C}(k!)$, and [F17] gives $\iota_{\mathbb C}(\binom{m+k-1}{m-1})\iota_{\mathbb C}((m-1)!)\iota_{\mathbb C}(k!)=\iota_{\mathbb C}((m-1+k)!)$ after [F21] identifies canonical natural scalars. The factorial denominator is positive by [F17, F21], so division gives the degree-$k$ block $\binom{m+k-1}{m-1}\langle z,w\rangle^k$. Step 3.1 with $q=m$ sums these blocks to $(1-\langle z,w\rangle)^{-m}$. The Szegő definition [F18] gives uniqueness of this Riesz kernel. [A1, F10, F11, F13, F14, F15, F17, F18, F21, F22, F24, step 3.1]

5.1 The basis expansions in steps 4.1 and 4.2 are the Bergman Riesz kernels by [F2], so [F19] supplies their reproducing identities; uniqueness follows from the Bergman-space Riesz definition [F20]. Steps 1.2 and 4.3 establish the two Szegő reproducing kernels and uniqueness. Setting either kernel variable to $0$ in the displayed formulas (equivalently, retaining only the degree-zero monomial term) gives $K_{\mathbb D}(0,w)=1/\pi$, $K_{\mathbb D^m}(0,w)=1/\pi^m$, $K_{\mathbb B^m}(0,w)=m!/\pi^m$, and both stated Szegő values $1$. When $m=1$, $\mathbb B^1=\mathbb D$ and $\mathbb D^1=\mathbb D$, and the corresponding formulas agree. The polydisc appears only in the Bergman product formula, so no boundary regularity is claimed for it. [F2, F19, F20, step 1.2, step 4.1, step 4.2, step 4.3] ∎
