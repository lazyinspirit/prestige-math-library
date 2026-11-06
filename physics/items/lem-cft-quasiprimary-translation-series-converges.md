---
id: lem-cft-quasiprimary-translation-series-converges
kind: lemma
title: Quasi-primary translation series converges in the Hilbert space
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-2d-conformal-net-on-circle
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
dependency_roles:
  def-cft-2d-conformal-net-on-circle: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Sebastiano Carpi, Yasuyuki Kawahigashi, Roberto Longo, and Mihály Weiner, From Vertex Operator Algebras to Conformal Nets and Back, arXiv:1503.01260v4
      url: https://arxiv.org/pdf/1503.01260
      locator: Section 9.1, equation (125), PDF p. 67; the quasi-primary translation series used in the Fredenhagen–Jörß construction.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/lem-cft-quasiprimary-translation-series-converges.md
---

## Statement

Let $U$ be a positive-energy unitary Möbius representation with generators $L_{-1},L_0,L_1$ satisfying $[L_1,L_{-1}]=2L_0$, $[L_0,L_{-1}]=L_{-1}$, and $L_{-1}^*=L_1$ on smooth vectors. If $a$ is a quasi-primary vector with $L_0a=da$, $d\in\mathbb Z_{\geq0}$, and $L_1a=0$, then for every smooth function $f$ on $S^1$ the series
$$a(f)=\sum_{n\geq0}\widehat f_{-n-d}\frac{L_{-1}^n a}{n!},\qquad \widehat f_m=\int_{-\pi}^{\pi}f(e^{i\vartheta})e^{-im\vartheta}\frac{d\vartheta}{2\pi},$$
converges absolutely in the Hilbert-space norm.

## Statement references

[[def-cft-2d-conformal-net-on-circle]]

[[def-real-and-complex-inner-product-space]]

## Facts & Assumptions

**Given:** A positive-energy unitary Möbius representation with the stated generator conventions, a quasi-primary vector $a$ of weight $d\in\mathbb Z_{\geq0}$, and a smooth circle function $f$.

[F1] The Möbius generators satisfy $[L_1,L_{-1}]=2L_0$, $[L_0,L_{-1}]=L_{-1}$, and $L_{-1}^*=L_1$ on smooth vectors ([[def-cft-2d-conformal-net-on-circle]]).

[F2] The inner product is positive definite and linear in its first argument ([[def-real-and-complex-inner-product-space]]).

[F3] The Hilbert norm is complete, so every norm-Cauchy series converges in the Hilbert space ([[def-hilbert-space]]).

[A1] The vector satisfies $L_0a=da$ and $L_1a=0$, with $d\in\mathbb Z_{\geq0}$.

## Proof

1.1 We first establish the missing domain assertion for the genuine positive-energy Möbius representation in [F1], without assuming finite-dimensional energy eigenspaces. Its rotation subgroup has period $2\pi$, so its spectral projections are $P_m=(2\pi)^{-1}\int_0^{2\pi}e^{-imt}U(r_t)\,dt$, with $H_m=P_mH$ and $m\in\mathbb Z_{\ge0}$; negative grades are zero. Smooth group vectors are dense: for $\xi\in H$, integrate $U(g)\xi$ against a smooth compactly supported approximate-identity density on the finite-dimensional Möbius group. Strong continuity gives convergence to $\xi$; translating the integral transfers every derivative to the smooth density, so these are smooth vectors. Rotation projection preserves smooth vectors: derivatives of $U(g)U(r_t)\xi=U(r_t)U(r_t^{-1}gr_t)\xi$ are uniformly bounded for $t$ in the compact rotation circle and may be integrated. Hence $E_m=P_mH_U^\infty$ is dense in $H_m$. Rotation covariance of the complexified generators on smooth vectors gives $L_1E_m\subset E_{m-1}$ and $L_{-1}E_m\subset E_{m+1}$. All bracket and adjoint calculations in the next step take place first on these actual smooth vectors. [given, F1, F3, construct, algebra]

2.1 On $E_0$, positivity of energy gives $L_1=0$, and the adjoint identity and $[L_1,L_{-1}]=2L_0$ then give $L_{-1}=0$. Inductively, if $L_{-1}:E_{m-1}\to H_m$ has norm at most $\sqrt{m(m-1)}$, then, for $v\in E_m$, testing $L_1v\in H_{m-1}$ against the dense $E_{m-1}$ and using the adjoint identity gives $\|L_1v\|\le\sqrt{m(m-1)}\|v\|$. Consequently $$\|L_{-1}v\|^2=\|L_1v\|^2+2m\|v\|^2\le m(m+1)\|v\|^2.$$ This proves the induction for every $m$. Thus both modes extend boundedly on each energy space, with these same bounds, and $L_0$ acts there as $m$. These extensions are the actual infinitesimal actions, not arbitrary bounded replacements. For a real Lie algebra element $X$, its action on smooth vectors is a fixed complex linear combination of these three modes. Approximate any $v\in H_m$ by $v_j\in E_m$; the mode bounds make $dU(X)v_j$ converge to that same combination of extended modes. The full infinitesimal generator of the strongly continuous one-parameter unitary group is closed: if $v_j\to v$ and $dU(X)v_j\to w$, pass to the limit in $U(\exp(tX))v_j-v_j=\int_0^tU(\exp(sX))dU(X)v_j\,ds$ and differentiate at zero. Thus $v$ is in its domain with that action. The extensions preserve finite energy, so all finite products of real generators are defined on $H_{\mathrm{fin}}$. Smooth-vector bracket and adjoint identities extend to fixed finite grades by the bounded estimates. [given, F1, F2, F3, step 1.1, algebra]

3.1 These domain assertions imply actual group smoothness. Fix a real basis $X_1,X_2,X_3$ of the Möbius Lie algebra. Each $dU(X_i)$ is a fixed sum of the three energy modes. The preceding bounds imply that, for $v\in H_m$, every word of length $\ell$ in this real basis has norm at most $$C^\ell\frac{(m+\ell+1)!}{(m+1)!}\|v\|,$$ for one constant $C$ independent of $m,\ell$: each mode changes energy by at most one and its norm at grade $r$ is at most $r+1$. For each real generator, its exponential series therefore converges, together with every derivative, when $|t|<1/C$. The integral generator identity from 2.1 and closedness justify termwise differentiation in its graph norm; multiplying the resulting solution by $U(\exp(-tX_i))$ shows it equals the actual unitary orbit. More generally the mixed series for $U(\exp(t_1X_1))U(\exp(t_2X_2))U(\exp(t_3X_3))v$ converges absolutely when $C\sum_i|t_i|<1$: grouping terms of total degree $\ell$, the factorial denominators give $(\sum_i|t_i|)^\ell/\ell!$, and the remaining factorial ratio grows only polynomially in $\ell$ after division by $\ell!$ for fixed $m$. The same bound with additional polynomial factors permits every parameter derivative. Repeated use of the one-parameter identity and absolute convergence identifies this series with the actual product orbit. The product of exponentials is a smooth coordinate chart near the group identity, since its differential sends the coordinate basis to $X_1,X_2,X_3$. Thus every $v\in H_m$, and hence every finite sum of such vectors, belongs to $H_U^\infty$. This proof does not use finite multiplicity or a decomposition into irreducible representations. [given, F1, F3, step 2.1, construct, algebra]

4.1 In particular the vector $a\in H_d$ in the Statement is Möbius smooth, and every $L_{-1}^na\in H_{d+n}$ is smooth. The given eigenvector and lowest-weight equations therefore hold in the common smooth domain, and every use below of commutators or adjoints on descendants is justified by 1.1, 2.1, 3.1. This establishes the domain prerequisite for the original, unchanged quasi-primary series, rather than adding a new smooth-vector hypothesis. [given, F1, A1, step 3.1, algebra]

5.1 For $n\geq1$, expand $L_1L_{-1}^n a$ by commuting $L_1$ past the $n$ factors $L_{-1}$. The commutator terms are $$\sum_{r=0}^{n-1}L_{-1}^r(2L_0)L_{-1}^{n-1-r}a=2\sum_{j=0}^{n-1}(d+j)L_{-1}^{n-1}a=n(2d+n-1)L_{-1}^{n-1}a,$$ because $L_0L_{-1}^j a=(d+j)L_{-1}^j a$ and $L_1a=0$. [given, F1, A1, step 4.1, algebra]

6.1 Using $L_{-1}^*=L_1$ and the linear-first inner-product convention, [F2] gives $$\|L_{-1}^n a\|^2=\langle L_{-1}^{n-1}a,L_1L_{-1}^n a\rangle=n(2d+n-1)\|L_{-1}^{n-1}a\|^2.$$ Iteration yields $$\left\|\frac{L_{-1}^n a}{n!}\right\|^2=\frac{(2d)_n}{n!}\|a\|^2=\binom{2d+n-1}{2d-1}\|a\|^2\quad(d\geq1),$$ while for $d=0$ the first recurrence gives $L_{-1}a=0$ and every positive-degree term vanishes. [given, F1, F2, A1, step 5.1, algebra]

7.1 For $d\geq1$, the binomial coefficient in 6.1 is bounded by a constant depending on $d$ times $(1+n)^{2d-1}$, so $\|L_{-1}^n a/n!\|$ grows at most polynomially in $n$. Repeated integration by parts in the Fourier integral gives $|\widehat f_m|\leq C_{f,N}(1+|m|)^{-N}$ for every integer $N\geq0$. Choose $N>d+1$; then the norms of the terms in $a(f)$ have summable upper bounds. Completeness of the Hilbert space implies absolute norm convergence. The $d=0$ case is a finite sum by 6.1. [F3, A1, step 6.1, algebra] ∎

