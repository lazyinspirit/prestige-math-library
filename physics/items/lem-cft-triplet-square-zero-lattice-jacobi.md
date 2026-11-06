---
id: lem-cft-triplet-square-zero-lattice-jacobi
kind: lemma
title: Jacobi identities for the rank-one square-zero lattice extension
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-triplet-lattice-screening-data
  - def-vertex-algebra-module
  - lem-module-jacobi-formal-delta-substitution-identity
dependency_roles:
  def-cft-triplet-lattice-screening-data: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  lem-module-jacobi-formal-delta-substitution-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dražen Adamović and Antun Milas, Lattice construction of logarithmic modules for certain vertex algebras
      url: https://arxiv.org/pdf/0902.3417v2
      locator: "§4, printed pp.6–7: square-zero extension and its modules, specializing p′=1 and i=1. The proof below expands the oscillator identities rather than importing the cited extension theorem."
    - title: Dražen Adamović and Antun Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: "§1, printed pp.4–5: lattice oscillator construction and exponential product (1.4)."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For every integer $p\ge2$, take the spaces, charge shifts, trivial cocycle, oscillator fields and normal-order prescription of the rank-one lattice-screening data. Then $(\mathcal A,Y_{\mathcal A},\mathbf1)$ is an ordinary vertex algebra, its sector-one space $I$ is a square-zero ideal, and $(\mathcal M,Y_{\mathcal M})$ is an ordinary $\mathcal A$-module satisfying the full module Jacobi identity. Translation on $\mathcal A$ is
$$T(f e^{t\alpha})=\left(\sum_{n\ge1}n x_{n+1}\partial_{x_n}f+t x_1f\right)e^{t\alpha}.$$
These conclusions concern the underlying vertex algebra and module. They make no assertion about the triplet kernel/generator identification, cyclic submodules, extension endpoints, or irreducibility.

## Statement references

[[def-cft-triplet-lattice-screening-data]]

[[def-vertex-algebra-module]]

[Adamović–Milas, §4](https://arxiv.org/pdf/0902.3417v2)

## Facts & Assumptions

**Given:** The complete oscillator, sector, cocycle and normal-order formulas of the lattice-screening data, for an integer $p\ge2$. Normal ordering of several exponentials means that all creation exponentials stand on the left, all annihilation exponentials stand on the right, and the charge shifts and zero-mode powers occur in between.

[F1] [[def-cft-triplet-lattice-screening-data]] defines the spaces and candidate fields algebraically. In every nonzero product of two state fields the state-charge pairing $2prs$ is an even integer. The pairing of any state charge with an allowed input charge is an integer.

[F2] [[lem-module-jacobi-formal-delta-substitution-identity]] proves the three-expansion delta identity. Multiplying it by Laurent monomials in $z,w$ and a finite power of $(z-w)^{-1}$ gives its substitution form for rational functions with poles only at $z=0,w=0,z=w$.

[F3] [[def-vertex-algebra-module]] specifies the full module Jacobi identity and its binomial conventions.

## Proof

1.1 Give $P$ oscillator degree $\deg x_n=n$. On a fixed polynomial, annihilation operators have bounded total index, and, for a fixed output degree, so do creation operators. Hence every coefficient in each normal field is a finite sum. In a fixed state charge and input charge, the exponential has a fixed integer initial power of $z$ and only a polynomial in $z^{-1}$ from annihilation; negative oscillator modes add only nonnegative powers after their divided derivatives. Nonnegative oscillator parts on the right have indices bounded by the input degree. This gives a lower bound on all powers of $z$ and proves truncation on both spaces. The empty oscillator monomial of charge zero gives $Y(\mathbf1,z)=I$. For $T$ as displayed, direct differentiation gives $[T,\alpha_n]=-n\alpha_{n-1}$, including $[T,\alpha_1]=-\alpha_0$ and $[T,\alpha_0]=0$. Applying the same product rule to the two exponential factors and the charge shift gives $[T,\mathcal E_r(z)]=\partial_z\mathcal E_r(z)$ on $\mathcal A$; the zero-mode term follows from the difference $(t+r)x_1-tx_1=rx_1$ across the shift. Differentiating and normally ordering extends this to every state field. On the vacuum each field has only nonnegative powers and constant term equal to its state: the creation exponential has constant term one, and the negative part of $b_n(z)$ is $\sum_{k\ge0}\binom{n+k-1}{k}x_{n+k}z^k$. With $T\mathbf1=0$, translation covariance then gives the coefficient recursion $[z^{k+1}]Y(a,z)\mathbf1=T[z^k]Y(a,z)\mathbf1/(k+1)$, so creation is $Y(a,z)\mathbf1=e^{zT}a$. [given, F1, algebra]

2.1 The oscillator commutator is $[\alpha_m,\alpha_n]=2pm\delta_{m,-n}I$. Moving annihilation exponentials across creation exponentials therefore contributes $\exp(-2prs\sum_{n\ge1}(w/z)^n/n)=(1-w/z)^{2prs}$. Moving the charge shift across $z^{r\alpha_0}$ contributes $z^{2prs}$. Thus $\mathcal E_r(z)\mathcal E_s(w)=\iota_{z,w}(z-w)^{2prs}B_{r,s}(z,w)$, where
$$B_{r,s}(z,w)=\exp\!\left(\sum_{n\ge1}\frac{\alpha_{-n}}n(rz^n+sw^n)\right)\exp\!\left(-\sum_{n\ge1}\frac{\alpha_n}n(rz^{-n}+sw^{-n})\right)e_{r+s}z^{r\alpha_0}w^{s\alpha_0}.$$
Here $e_{r+s}$ includes the sum of the two state-sector indices and is zero if that sum plus the input-sector index exceeds one. The scalar cocycle is one. Reversing the product gives the other expansion of the same expression, since $2prs$ is even. If both states have sector one, both ordered products and all products of their states are zero; the same is true if the input sector makes the total sector exceed one. Thus all subsequent formulas may be checked on allowed sectors only. [given, F1, step 1.1, algebra]

3.1 For states $u=\prod_{i=1}^k x_{a_i}e^{r\alpha}$ and $b=\prod_{j=1}^l x_{d_j}e^{s\alpha}$, form the following finite sum $G(z,w)$. Start with $(z-w)^{2prs}B_{r,s}(z,w)$ and the oscillator factors $b_{a_i}(z),b_{d_j}(w)$. Each oscillator may remain unmatched, may be paired with one oscillator on the other side, or may be paired with the exponential on the other side. No oscillator may be used twice; several distinct oscillators may pair with the same exponential. A left-right oscillator pair contributes $2p(-1)^{a_i-1}(a_i+d_j-1)!/((a_i-1)!(d_j-1)!)\,(z-w)^{-a_i-d_j}$. A left oscillator paired with the right exponential contributes $2ps(-1)^{a_i-1}(z-w)^{-a_i}$; a right oscillator paired with the left exponential contributes $-2pr(z-w)^{-d_j}$. Normally order all unmatched oscillators with $B_{r,s}$. Sum these products over all choices, counting the oscillator factors by their original indices even if their orders coincide. These contraction factors follow respectively by differentiating $2p/(z-w)^2$, $2ps/(z-w)$ and $-2pr/(z-w)$ with the prescribed divided derivatives. Repeatedly applying $XY=YX+[X,Y]$ when moving an annihilator across a creator or an exponential gives exactly these choices: an oscillator-oscillator commutator removes the two oscillators, while commuting with an exponential removes only that oscillator and leaves the exponential intact. All contractions are scalar. Hence the two ordered products are precisely $\iota_{z,w}G(z,w)$ and $\iota_{w,z}G(z,w)$. This also proves locality, since only finitely many contraction pole orders occur and the unmatched normal expression is the same in the two orders. [given, F1, step 2.1, algebra]

4.1 Apply the same expression to the vacuum on $\mathcal A$ and set $w=0$ to compute $Y_{\mathcal A}(u,\zeta)b$. The scalar part is the contraction product of step 3.1 times $\zeta^{2prs}$. The unmatched left oscillator $b_a$ becomes $\sum_{k\ge0}\binom{a+k-1}{k}x_{a+k}\zeta^k$, the unmatched right oscillator becomes $x_d$, and the exponential part becomes $\exp(\sum_{n\ge1}r x_n\zeta^n/n)e^{(r+s)\alpha}$. This gives every state coefficient, including regular powers; each coefficient is finite. Apply $Y_{\mathcal M}(-,w)$ coefficientwise. The oscillator substitution is $b_a(w+\zeta)=\sum_{k\ge0}\binom{a+k-1}{k}\zeta^k b_{a+k}(w)$. For the exponential substitution the required identity is
$$B_{r,s}(w+\zeta,w)={:}\exp\!\left(\sum_{n\ge1}\frac{r\zeta^n}{n}b_n(w)\right)\mathcal E_{r+s}(w){:}.$$
To verify it, expand each oscillator mode in $b_n(w)=\partial_w^{n-1}\alpha(w)/(n-1)!$: summing $\zeta^n/n!$ times its $(n-1)$st derivative is its formal integral from $w$ to $w+\zeta$. A negative mode gives $\alpha_{-k}((w+\zeta)^k-w^k)/k$, a positive mode gives $-\alpha_k((w+\zeta)^{-k}-w^{-k})/k$, and the zero mode gives $\alpha_0\log(1+\zeta/w)$. Adding the exponent of $\mathcal E_{r+s}(w)$ yields exactly the two exponentials and zero-mode powers in $B_{r,s}(w+\zeta,w)$. The logarithm here is its formal power series; exponentiation gives the ordinary binomial power $(1+\zeta/w)^{r\alpha_0}$, so no logarithmic field is introduced. Consequently the iterate is exactly $Y_{\mathcal M}(Y_{\mathcal A}(u,\zeta)b,w)=\iota_{w,\zeta}G(w+\zeta,w)$. The calculation with $\mathcal M$ replaced by $\mathcal A$ is identical. [given, step 1.1, step 3.1, algebra]

5.1 Fix an input polynomial, its charge and sector, and project the output polynomial to oscillator degrees at most $D$. Every normal expression in step 3.1 then has finitely many terms: annihilation indices are bounded by the input degree and creation indices by $D$. Its zero-mode factors are fixed integer powers of $z,w$. Thus the projected $G$ is a finite sum of Laurent polynomials times integer powers of $z-w$. For a scalar term $z^a w^b(z-w)^{-K}$, multiplying the delta sums in [F2] by the two expansions of $(z-w)^{-K}$ shifts their summation indices and gives $z_0^{-K}$; multiplication by $z^a$ on the third delta substitutes $(w+z_0)^a$, including negative integers by the binomial inverse. Thus the substitution form follows for each term, giving the full Jacobi identity with the two products from step 3.1 and the iterate from step 4.1. Since this holds for every $D$, it holds coefficientwise before projection. This proves the full module Jacobi identity on $\mathcal M$ and the adjoint Jacobi identity on $\mathcal A$, for all monomial states and hence all states. Together with step 1.1 and locality in step 3.1, the latter establishes the ordinary vertex-algebra axioms. The sector rule makes $I$ stable under fields from either side and annihilated by every field from $I$, so it is a square-zero ideal. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
