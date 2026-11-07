---
dependency_level: 0
id: def-spaced-polynomial-weighted-congruence-mean-values
kind: definition
title: "Spaced Polynomial Weighted Congruence Mean Values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2, §3"
      url: "https://arxiv.org/pdf/1708.01220v2"
---

## Definition

An **admissible place of rank $k$** is either $R=\mathbb Z$ with
$\pi=p$ a positive prime $p>k$, or $R=\mathbb F_q[t]$ with
$\operatorname{char}\mathbb F_q>k$ and $\pi$ a monic irreducible polynomial.
Write $Q=|R/(\pi)|$, and let $v_\pi$ denote divisibility by $\pi$.
All sequences below are complex and finitely supported on $R$.

For $B\ge1$, let $\mathcal X_B$ be the additive character group of
$R/(\pi^B)$, and average uniformly over $\mathcal X_B^k$, denoting this
average by $\mathbb E_B$. Concretely, over $\mathbb Z$ these are
$x\mapsto\exp(2\pi i ux/p^B)$, $u\bmod p^B$. Over the polynomial ring,
choose a basis of the finite additive group as a vector space over its prime
field $\mathbb F_\ell$; its characters are
$\sum x_i e_i\mapsto\exp(2\pi i\sum u_ix_i/\ell)$, $u_i\in\mathbb F_\ell$.
The average is independent of the chosen basis.

A polynomial system $\boldsymbol\phi\in R[X]^k$ is $\pi^c$-spaced if
$\phi_j(X)\equiv X^j\pmod{\pi^c}$ coefficientwise. There is no degree
restriction. For $\tau>0$, $\Phi_\tau(B)$ denotes systems with some integer
$c\ge\tau B$. For $\boldsymbol\chi\in\mathcal X_B^k$, put
$\chi_{\phi}(n)=\prod_{j=1}^k\chi_j(\phi_j(n))$.
For a nonzero coefficient sequence $\mathbf a$ define

$$
\rho_h(\xi)^2=\sum_{n\equiv\xi\ (\pi^h)}|a_n|^2,\qquad f_h(\boldsymbol\chi;\xi)=\rho_h(\xi)^{-1} \sum_{n\equiv\xi\ (\pi^h)}a_n\chi_\phi(n).
$$

A zero-mass residue has $f_h=0$, and $\rho_0^2=\sum_n|a_n|^2$.
For an integer $s\ge1$ set

$$
U^B_{s,k}=\mathbb E_B|f_0|^{2s},\qquad U^{B,h}_{s,k}=\rho_0^{-2}\sum_{\xi\ (\pi^h)}\rho_h(\xi)^2 \mathbb E_B|f_h(\cdot;\xi)|^{2s}.
$$

For the zero sequence set every $U$ to zero. Multiplying all coefficients
by a nonzero scalar leaves these means unchanged. Superscripts and subscripts
may be suppressed when fixed.

The **universal concentration exponent** uses a supremum over all admissible
places, not just one prime. For $H=\lceil B/k\rceil$ define

$$
L_{s,k}(B;\tau)=\sup_{(R,\pi),\,\boldsymbol\phi\in\Phi_\tau(B),\,\mathbf a\ne0} \frac{\log(U^B_{s,k}/U^{B,H}_{s,k})}{H\log Q},\qquad \lambda_{s,k}(\tau)=\limsup_{B\to\infty}L_{s,k}(B;\tau),\qquad \Lambda_{s,k}=\sup_{\tau>0}\lambda_{s,k}(\tau).
$$

When $U^{B,H}=0$ assign the quotient $U^B/U^{B,H}$ the value $1$;
when only $U^B=0$, assign its logarithm $-\infty$. The first convention is
consistent with $U^B=0$, as the residue-refinement inequality proves.

For $k\ge2$, $s=k(k+1)/2$, $0\le r\le k$, $T_r=r(r+1)/2$, and integers
$a,b\ge\nu\ge0$, also define

$$
K^r_{a,b}=\rho_0^{-4}\sum_{\substack{\xi\ (\pi^a),\eta\ (\pi^b)\\ \xi\not\equiv\eta\ (\pi^\nu)}} \rho_a(\xi)^2\rho_b(\eta)^2 \mathbb E_B|f_a(\cdot;\xi)|^{2T_r}|f_b(\cdot;\eta)|^{2s-2T_r}.
$$

A summand with either residue mass zero is defined to be zero. A block with
moment exponent zero contributes the constant $1$, including at zeros of its
exponential sum. Set every $K$ to zero for the zero coefficient sequence.

For $1\le r\le k-1$ and $U^{B,H}>0$ put

$$
q_r=\frac{k-1}{r(k-r)},\qquad \mathcal K^r_{a,b}(\Delta)= \left(\frac{K^r_{a,b}}{Q^{\Delta H}U^{B,H}}\right)^{q_r}.
$$

The parameters $B,\boldsymbol\phi,\mathbf a,\nu$ are common to all $K$
means in an inequality unless explicitly changed. The source uses a fixed
prime and absolutely summable sequences; this definition restricts to finite
support and takes the displayed universal supremum in order to formulate
uniform conclusions for both indicated rings.

## Definition references

[[thm-complex-exponential-addition-and-real-extension]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[thm-kernel-and-fibres-of-complex-exponential]]
