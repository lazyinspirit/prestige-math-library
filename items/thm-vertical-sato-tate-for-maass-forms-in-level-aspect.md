---
id: thm-vertical-sato-tate-for-maass-forms-in-level-aspect
kind: theorem
title: "Vertical Sato–Tate for Maass Forms in the Level Aspect"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-maass-hecke-prime-adjoint-and-uniform-norm
  - lem-prime-modulus-gauss-sum-evaluation-and-size
  - thm-kuznetsov-trace-formula-level-and-character
  - thm-kuznetsov-trace-formula-decaying-test-functions
  - thm-spectral-decomposition-l2-congruence-surface
  - def-hecke-operator-on-maass-forms
  - thm-maass-hecke-prime-power-relations
  - def-axiom-of-choice
  - def-countable-choice
  - cor-weierstrass-approximation-on-a-closed-interval
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
      locator: "§10.1–10.2, Proposition 10.1 and Theorem 10.2, printed pp. 132–135: moments and weighted vertical distribution."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§9, the level-one Kuznetsov formula underlying weighted Hecke-coefficient averages; printed pp. 46–48."
---

## Statement

Assume the Axiom of Choice and Countable Choice for the spectral branch. Fix
a prime $p$ and a positive integer $m$. For each $j\ge1$, let $N_j$ be
positive with $p\nmid N_j$ and $N_j\to\infty$, let $\chi_j$ be an even
unitary Dirichlet character modulo $N_j$, and let $\mathcal F_j$ be an
orthogonal basis of simultaneous Hecke eigenforms in the weight-zero Maass
cuspidal space of level $N_j$ and character $\chi_j$. Choose a square root
$\xi_j$ of $\overline{\chi_j(p)}$ and put
$$\nu_p(u)=\xi_j\lambda_p(u),\qquad \nu_{p^\ell}(u)=\xi_j^\ell\lambda_{p^\ell}(u)\quad(u\in\mathcal F_j),\qquad w_u=\frac{|a_m(u)|^2}{\|u\|^2}\frac{h(t_u)}{\cosh(\pi t_u)}.$$
Assume $h$ is even, holomorphic in $|\operatorname{Im}t|<A$ for some
$A>13$, satisfies $|h(t)|\le C_h(1+|t|)^{-B}$ there for some $B>14$, has
$h(t_u)\ge0$ for every spectral parameter, and
$$J:=\frac1{\pi^2}\int_{-\infty}^{\infty} h(t)\tanh(\pi t)\,t\,dt\ne0.$$
Let $v_p(m)$ be the exponent of $p$ in $m$, let $X_\ell$ be the polynomial determined by $X_0=1$, $X_1=x$ and $X_\ell=xX_{\ell-1}-X_{\ell-2}$, equivalently
$$X_\ell(2\cos\theta)=\frac{\sin((\ell+1)\theta)}{\sin\theta} \quad(0<\theta<\pi),\qquad X_\ell(2)=\ell+1,\quad X_\ell(-2)=(-1)^\ell(\ell+1),$$
and let $\mu_{\rm ST}$ be the probability measure
$d\mu_{\rm ST}(x)=\frac1{2\pi}\sqrt{4-x^2}\,dx$ on $[-2,2]$.
Then for all sufficiently large $j$ the denominator $\sum_{u\in\mathcal F_j}w_u$
is positive, and the normalized weighted empirical measures of the real eigenvalues
$\nu_p(u)$ converge weakly to
$$d\mu_m(x)=\sum_{r=0}^{v_p(m)}X_{2r}(x)\,d\mu_{\rm ST}(x).$$
Explicitly, for every continuous $f:\mathbb R\to\mathbb C$,
$$\lim_{j\to\infty} \frac{\sum_{u\in\mathcal F_j}f(\nu_p(u))w_u} {\sum_{u\in\mathcal F_j}w_u} =\int_{\mathbb R}f(x)\,d\mu_m(x).$$
In particular, when $p\nmid m$, $v_p(m)=0$ and $\mu_m=\mu_{\rm ST}$.

## Statement references

[[thm-kuznetsov-trace-formula-level-and-character]]

[[thm-kuznetsov-trace-formula-decaying-test-functions]]

[[thm-spectral-decomposition-l2-congruence-surface]]

[[def-hecke-operator-on-maass-forms]]

[[thm-maass-hecke-prime-power-relations]]

[[cor-weierstrass-approximation-on-a-closed-interval]]

## Facts & Assumptions

**Given:** The fixed prime $p$, fixed index $m$, levels $N_j\to\infty$ coprime
to $p$, even unitary characters, orthogonal Maass Hecke eigenbases, and a
nonnegative trace-formula test function with $J\ne0$.

[F1] The level-and-character trace formula identifies the Hecke-weighted
spectral sum with its diagonal and Kloosterman terms. Its current proof is not
supplied. ([[thm-kuznetsov-trace-formula-level-and-character]])

[F2] The decaying-test extension applies the trace formula when $A>13$ and
$B>14$. Its proof is conditional on [F1].
([[thm-kuznetsov-trace-formula-decaying-test-functions]])

[F3] For a Maass cusp form, the finite Hecke formula gives the Fourier
coefficient divisor sum and the prime-power recurrence
$T_{p^r}=T_pT_{p^{r-1}}-\chi(p)T_{p^{r-2}}$.
([[thm-maass-hecke-prime-power-relations]])

[F4] Polynomials are uniformly dense in the continuous functions on any
compact real interval. ([[cor-weierstrass-approximation-on-a-closed-interval]])

[A1] Full AC is used by the local unbounded spectral theorem; Countable Choice
is retained separately for the local orthogonal-complement construction.
([[def-axiom-of-choice]], [[def-countable-choice]])

[F5] Under the library's $\chi(d)$ automorphy, $T_p^*=\overline{\chi(p)}T_p$ and $\|T_p\|\leq\sqrt p+1/\sqrt p$. Thus $\xi T_p$, $\xi^2=\overline{\chi(p)}$, is self-adjoint. [[thm-maass-hecke-prime-adjoint-and-uniform-norm]]

[F6] The exact prime-modulus Gauss sum and its size are proved in [[lem-prime-modulus-gauss-sum-evaluation-and-size]]. This is not a Kloosterman Weil estimate.

[A3] The uniform $o(\psi(N_j))$ error in each fixed normalized Hecke moment still requires the continuous-coefficient/normalization analysis and the complete character-weighted Kloosterman Weil and prime-power Gauss assembly. The finiteness and nonnegativity of the source weights, including exclusion of a zero cuspidal Laplace eigenfunction, also belong to the held spectral interface. Those estimates and the base trace formula are not proved by the current local suppliers. F6 supplies only its stated prime Gauss ingredient.

## Proof

1.1 For an integer $\ell\ge0$, apply the level trace formula with $m_1=m_2=m$ and $n=p^\ell$. The diagonal indicator is $1$ exactly when $\ell=2r$ for some $0\le r\le v_p(m)$: its defining condition is $m^2=b^2p^\ell$ with $b\mid m$, equivalently $p^r\mid m$ and $\ell=2r$. When $\ell=2r$, the unique $b$ is $m/p^r$, so $\sqrt{m_1n/m_2}=p^r$ and the diagonal character factor is $\chi_j(p)^{r}$. Thus the diagonal contribution is $\chi_j(p)^{r}J\psi(N_j)$ in those cases and $0$ otherwise. The KTF invocation inherits separate AC and Countable Choice uses from the spectral supplier. [F1, F2, A1, given, algebra]

1.2 F5 makes every $\nu_p(u)$ real with $|\nu_p(u)|\leq A_p=\sqrt p+1/\sqrt p$, independently of $j$ and its character. Thus all empirical measures lie in one fixed compact interval. This reality and compactness step is now proved locally and requires no spectral-completeness input beyond the given eigenbasis. [F5, given, algebra]

2.1 The prime-power relation in [F3] gives $\nu_{p^\ell}(u)=X_\ell(\nu_p(u))$ by induction from $X_0(x)=1$, $X_1(x)=x$, and $X_\ell(x)=xX_{\ell-1}(x)-X_{\ell-2}(x)$. The recurrence for $X_\ell$ follows from the sine addition formula on $x=2\cos\theta$ and then holds at $x=\pm2$ by continuity. Multiplying the trace identity's cuspidal sum by $\xi_j^\ell$ converts its terms to $X_\ell(\nu_p(u))w_u$; when $\ell=2r$, this factor cancels the diagonal character factor in step 1.1. The diagonal main term for these normalized moments is therefore $J\psi(N_j)$ exactly in the stated range. [F3, step 1.1, algebra]

3.1 Conditional on A3, the fixed-degree moments from steps 1.1 and 2.1 have error $o(\psi(N_j))$. The degree-zero case says $\sum_uw_u=J\psi(N_j)+o(\psi(N_j))$. Since all weights are nonnegative, this forces $J$ to be a nonnegative real number; as $J\ne0$, it is positive and the denominator is eventually positive. Dividing gives the Chebyshev moments equal to one for $\ell=2r$, $0\leq r\leq v_p(m)$, and zero otherwise. The Gauss identity F6 alone does not prove the missing A3 error. [F1, F2, F6, A3, step 1.1, step 2.1, given, algebra]

4.1 Put $v=v_p(m)$. The finite exponential sum for $X_v(2\cos\theta)$ shows $X_v^2=\sum_{r=0}^vX_{2r}$ by counting equal frequencies; continuity includes the endpoints. With $x=2\cos\theta$, the measure is $(2/\pi)\sin^2\theta\,d\theta$, so $\int X_kX_\ell\,d\mu_{\rm ST}=\delta_{k\ell}$ by elementary sine orthogonality. Hence the proposed $\mu_m=X_v^2\mu_{\rm ST}$ is nonnegative with total mass one, and its Chebyshev moments are exactly those in step 3.1. The monic polynomials $X_\ell$ span all polynomials. F4 on $[-A_p,A_p]$ approximates the real and imaginary parts of any continuous $f$ uniformly. Since both the empirical measures and $\mu_m$ have mass one, polynomial moment convergence implies the displayed limit with error at most twice the approximation error. This completes the weak-convergence reduction conditional on F1, F2 and the still-unproved A3, not an unconditional proof of the theorem. [F3, F4, A3, step 1.2, step 3.1, algebra] ∎

## Proof status

Escalated. The prime adjoint/reality and fixed-prime norm are now proved by F5; F6 proves the prime Gauss sum. The remaining arithmetic input is the full
`thm-weil-bound-for-character-weighted-kloosterman-sums` with its Gauss-sum
prerequisites. The incomplete trace formula, its residual-spectrum and inducing-basis
conversion, and the truncation estimates remain transitive prerequisites. The result retains the source correction measure and
hypotheses without weakening the claim.

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.
