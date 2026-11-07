---
id: thm-kuznetsov-trace-formula-level-and-character
kind: theorem
title: "Kuznetsov Trace Formula at Congruence Level"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-j-bessel-cosine-transform-for-positive-real-part-order
  - def-kloosterman-sum-modulus
  - def-kuznetsov-bessel-transform
  - def-kuznetsov-paley-wiener-test-function
  - def-hecke-operator-on-maass-forms
  - thm-maass-hecke-prime-power-relations
  - thm-spectral-decomposition-l2-congruence-surface
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - def-maass-spectral-parameter
  - def-eisenstein-series-for-congruence-subgroups
  - def-dirichlet-character-modulo-q
  - def-dirichlet-l-function
  - thm-product-dirichlet-l-nonvanishing-line-one
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "Theorem 7.14, printed pp. 86–87; proof by Poincaré-series spectral/geometric expansion in §§7.1–7.7, printed pp. 75–87."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§§6–9: spectral expansion, double-coset geometric side, classical Kloosterman sum, and Theorem 9.1, printed pp. 30–48."
    - title: "David Joyner, On the Kuznetsov-Bruggeman Formula for a Hilbert Modular Surface Having One Cusp, corrected 1997 version"
      url: "https://drive.google.com/uc?export=download&id=1l-a5ojcwqWUsuBe6UlNoLgJ-kyNxOI89"
      locator: "§2.1 and Appendix §§2.1.1–2.1.2, recovered corrected PDF pp. 9–11: Lemmas 2.3–2.4, the regularization, and the absolute-interchange argument."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $N\ge1$ and let
$\chi$ be an even unitary Dirichlet character modulo $N$. Put
$$\psi(N)=N\prod_{q\mid N}\left(1+\frac1q\right),\qquad d\mu(z)=\frac{dx\,dy}{y^2}\quad(z=x+iy).$$
Let $\mathcal F$ be an orthogonal basis of simultaneous eigenfunctions of
$T_n$ on the weight-zero cuspidal subspace of
$L^2(\Gamma_0(N)\backslash\mathbb H,\chi)$, meaning $u(\gamma z)=\chi(d_\gamma)u(z)$, for all $n\ge1$ with
$(n,N)=1$. Write $T_nu_j=\lambda_n(u_j)u_j$,
$\Delta_{\mathbb H}u_j=(1/4+t_j^2)u_j$, and normalize
$$\|u_j\|^2=\frac1{\psi(N)}\int_{\Gamma_0(N)\backslash\mathbb H} |u_j(z)|^2\,d\mu(z).$$
For each $u_j$, define its Fourier coefficients $a_k(u_j)$ by
$$u_j(x+iy)=\sum_{k\in\mathbb Z\setminus\{0\}}a_k(u_j)\sqrt y\, K_{it_j}(2\pi|k|y)e^{2\pi ikx}.$$
For positive integers $m_1,m_2,n$ with $(n,N)=1$, define
$$D(m_1,m_2,n)=\begin{cases} 1,&m_1m_2=b^2n\text{ for a positive integer }b\mid\gcd(m_1,m_2),\\ 0,&\text{otherwise}, \end{cases}$$
and let $\Omega(m_1,m_2,n)=0$ if $D=0$, while if $D=1$ let
$\Omega(m_1,m_2,n)=\chi(m_1/b)$ for the unique such $b$ (the character is
extended by $0$ on nonunits). Let $\mathcal P_N(\chi)$ be the set of
ordered pairs of Dirichlet characters $\widetilde\chi_1,\widetilde\chi_2$
modulo $N$ with $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$ and
$c_{\widetilde\chi_1}c_{\widetilde\chi_2}\mid N$. For each such pair, sum over
integer tuples $(i_q)_{q\mid N}$ satisfying
$$v_q(c_{\widetilde\chi_2})\le i_q\le v_q(N)-v_q(c_{\widetilde\chi_1}),$$
and put
$$M=\prod_{q\mid N}q^{i_q},\quad N_1=\prod_{\substack{q\mid N\\i_q<v_q(N)}}q^{v_q(N)},\quad N_2=\prod_{\substack{q\mid N\\i_q>0}}q^{v_q(N)}.$$
Let $\chi'_1$ modulo $N_1$ induce $\widetilde\chi_1$, and let $\chi'_2$ modulo $N_2$ induce $\widetilde\chi_2$. The integer $M$ is also
a modulus for $\chi'_2$. Set
$$\lambda_n(\chi'_1,\chi'_2,it)=\sum_{d\mid n} \left(\frac n{d^2}\right)^{it}\overline{\chi'_1(d)\chi'_2(n/d)},$$
$$\sigma_{it}(\chi'_1,\chi'_2,m)=\frac1{M^{1+2it}} \sum_{c\mid m}\frac{\overline{\chi'_1(c)}}{c^{2it}} \sum_{d\bmod M}\chi'_2(d)e\!\left(\frac{dm}{Mc}\right),$$
and
$$\|\phi_{(i_q)}\|^2= \prod_{\substack{q\mid N\\i_q=0}}\frac q{q+1} \prod_{\substack{q\mid N\\0<i_q<v_q(N)}}\frac{q-1}{q^{i_q}(q+1)} \prod_{\substack{q\mid N\\i_q=v_q(N)}}\frac1{q^{v_q(N)-1}(q+1)}.$$
For $h(i\,\cdot)\in PW^{12}(\mathbb C)_{\mathrm{even}}$, the level-and-character
Kuznetsov identity is
$$\begin{aligned} &\sum_{u_j\in\mathcal F} \lambda_n(u_j)\frac{a_{m_1}(u_j)\overline{a_{m_2}(u_j)}}{\|u_j\|^2} \frac{h(t_j)}{\cosh(\pi t_j)}\\ &\quad+\frac1\pi\sum_{(\widetilde\chi_1,\widetilde\chi_2)\in\mathcal P_N(\chi)} \sum_{(i_q)}\int_{-\infty}^{\infty} \frac{\lambda_n(\chi'_1,\chi'_2,it)\, \sigma_{it}(\chi'_1,\chi'_2,m_1)\overline{\sigma_{it}(\chi'_1,\chi'_2,m_2)} (m_1/m_2)^{it}h(t)} {\|\phi_{(i_q)}\|^2|L(1+2it,\widetilde\chi_1^{-1}\widetilde\chi_2)|^2}\,dt\\ &=\frac{\psi(N)\Omega(m_1,m_2,n)}{\pi^2} \int_{-\infty}^{\infty}h(t)\tanh(\pi t)\,t\,dt\\ &\quad+\psi(N)\sum_{c\in N\mathbb Z_{>0}} \frac{S_\chi(m_2,m_1;n;c)}c\, \mathcal B_h\!\left(\frac{4\pi\sqrt{nm_1m_2}}c\right). \end{aligned}$$
Here $L(s,\xi)$ is the analytically continued Dirichlet $L$-function, and at the
principal-character pole $t=0$ the reciprocal squared $L$-factor is assigned
its limiting value $0$, which does not affect the integral. The formula uses
the normalization $\|u\|^2=\psi(N)^{-1}\int|u|^2d\mu$ and the spectral
parameter convention $\lambda=1/4+t^2$.

## Statement references

[[def-kloosterman-sum-modulus]]

[[def-kuznetsov-bessel-transform]]

[[def-kuznetsov-paley-wiener-test-function]]

[[def-hecke-operator-on-maass-forms]]

[[thm-maass-hecke-prime-power-relations]]

[[thm-spectral-decomposition-l2-congruence-surface]]

[[thm-fourier-whittaker-expansion-maass-cusp-forms]]

[[def-maass-spectral-parameter]]

[[def-eisenstein-series-for-congruence-subgroups]]

[[def-dirichlet-character-modulo-q]]

[[def-dirichlet-l-function]]

[[thm-product-dirichlet-l-nonvanishing-line-one]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** An integer $N\ge1$, an even unitary character modulo $N$, an
orthogonal simultaneous Hecke eigenbasis of weight-zero Maass cusp forms, a
Paley–Wiener test function, and positive integers $m_1,m_2,n$ with
$(n,N)=1$. The global spectral step assumes both AC and Countable Choice as
declared in the statement; the source supplier uses AC for the projection-valued
spectral theorem and Countable Choice in its local $L^2$ and orthogonal-complement
construction.

[F1] The local spectral supplier now contains a proof of the full
cuspidal-plus-residual and continuous Plancherel decomposition under AC.
Its continuous term uses integral cusp scalings and measure
$dt/(4\pi w_{\mathfrak a})$. This is not yet the explicit inducing-character
basis in this trace formula. ([[thm-spectral-decomposition-l2-congruence-surface]])

[F2] At $\infty$, a weight-zero Maass cusp form has expansion
$u(x+iy)=\sum_{k\ne0}\rho_u(k)\sqrt y K_{it}(2\pi|k|y)e^{2\pi ikx}$,
absolutely and uniformly in $x$ for each fixed $y>0$.
([[thm-fourier-whittaker-expansion-maass-cusp-forms]])

[F3] For $N\mid c$ and $(n,N)=1$, the level-twisted sum is the finite sum over
$d,d'\pmod c$ with $dd'\equiv n\pmod c$, weighted by
$\chi(d)e((m_2d+m_1d')/c)$.
([[def-kloosterman-sum-modulus]])

[F4] The full product of Dirichlet $L$-functions modulo a fixed modulus has no
zero on $\operatorname{Re}s=1$; a principal factor may have a simple pole at
$s=1$. ([[thm-product-dirichlet-l-nonvanishing-line-one]])

[F5] A Dirichlet $L$-function is initially defined by its series on
$\operatorname{Re}s>1$; values on the boundary line use analytic continuation.
([[def-dirichlet-l-function]])

[F6] The local Eisenstein supplier defines the cusp series only for
$\operatorname{Re}s>1$; continuation and spectral completeness are additional
claims. ([[def-eisenstein-series-for-congruence-subgroups]])

[A1] The local spectral supplier assumes the Axiom of Choice for its
projection-valued spectral theorem; AC is the principle that every family of
nonempty sets has a choice function.
([[thm-spectral-decomposition-l2-congruence-surface]], [[def-axiom-of-choice]])

[A2] The local $L^2$ and cuspidal-complement construction retains a separate
Countable Choice dependency. ([[def-countable-choice]])

[F7] The fixed-order regularized cosine transform for $\nu=\epsilon+2ir$, $\epsilon>0$, is proved locally in [[lem-j-bessel-cosine-transform-for-positive-real-part-order]]. It supplies no uniform spectral-integral exchange.

[A3] Inverse Selberg range and the geometric Zagier–Selberg identity, the required uniform regularization bounds, and the inducing-section-to-cusp-series measure dictionary remain unproved. Batch36 uses integral cusp scalings of width $w_a$, with continuous measure $dt/(4\pi w_a)$; the width-one series is $E_{a,\mathrm{norm}}(s)=w_a^{-s}E_{a,\mathrm{integral}}(s)$. Identifying the explicit character-pair coefficients here with that basis requires a separate proved normalization change. The spectral supplier also includes a residual discrete summand; its contribution to this nonzero-index Poincaré pairing must be accounted for before obtaining the displayed cuspidal-plus-continuous identity.

## Proof

1.1 Conditional also on the inverse-transform and normalization inputs in [A3], form the inner product of the two level-$N$ Poincaré series with the weight-$n$ Hecke action inserted. The spectral decomposition in [F1] splits it into cuspidal, residual and continuous contributions. To obtain exactly the two spectral terms displayed here requires the residual-spectrum treatment and inducing-basis conversion still held in [A3], as well as substitution of the Fourier–Whittaker coefficients from [F2]. Thus this remains a formal reduction conditional on [A3], even though [F1] now contains a local completeness proof. Its spectral-theorem input uses AC by [A1] and a separate Countable Choice branch by [A2]. [F1, F2, A1, A2, A3, given, algebra]

1.2 Unfold the same inner product over the identity and nonidentity double cosets in $\Gamma_0(N)\backslash GL_2^+(\mathbb Q)/\Gamma_0(N)$. The identity coset forces the index relation $m_1m_2=b^2n$ with $b\mid\gcd(m_1,m_2)$ and yields the diagonal integral with character factor $\chi(m_1/b)$; the nonidentity cosets have lower-left parameter $c\in N\mathbb Z_{>0}$. Their finite residue sums are exactly [F3]. The remaining archimedean orbital integral must be shown to equal $\mathcal B_h(4\pi\sqrt{nm_1m_2}/c)$ with the stated constant. [step 1.1, F3, given, algebra]

1.3 The required archimedean equality is the J-Bessel orbital identity. The source invokes Zagier/Joyner; F7 now proves its fixed positive-real-part-order cosine ingredient from the Bessel equation and a Laplace transform. The geometric Zagier–Selberg identity and uniform exchanges needed to let that order approach the imaginary axis inside the spectral integral remain in A3. F1 now supplies the cusp-basis spectral decomposition and continuation, whereas F6 alone is only the initial series definition. The residual contribution and the passage to the displayed inducing-character basis remain in A3. Thus neither F1 nor F7 closes this full trace identity. [F1, F6, F7, A3, step 1.2, given]

1.4 For real $t\ne0$, the point $1+2it$ lies on $\operatorname{Re}s=1$ away from the principal pole. By [F4] the full product of character factors is nonzero there, so none of its individual factors vanishes. Values use the continuation convention in [F5]. At a principal pole $t=0$, the stated reciprocal value is $0$; changing the value at this single point does not change the integral. [F4, F5, given, algebra]

## Proof status

Escalated. Exact unresolved local suppliers proposed for placement on this A
page are `lem-zagier-selberg-transform-fourier-identity`,
`lem-imaginary-order-j-bessel-cosine-transform`, and
`lem-kuznetsov-zagier-transform-gives-j-bessel-kernel`. The current [[thm-spectral-decomposition-l2-congruence-surface]] contains a
local completeness proof with integral-cusp normalization. The remaining
spectral application obligation is to account for its residual summand and
prove the conversion to every displayed inducing-character coefficient,
local norm factor and continuous measure;
the orthogonal simultaneous Hecke eigenbasis is an explicit theorem
hypothesis, and no existence proof or acceptance is inferred from the source.

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.
