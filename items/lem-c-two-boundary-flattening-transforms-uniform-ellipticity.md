---
id: lem-c-two-boundary-flattening-transforms-uniform-ellipticity
kind: lemma
title: "$C^2$ flattening preserves uniform ellipticity quantitatively"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts, def-bounded-c-k-domain-and-boundary-charts, def-uniformly-elliptic-divergence-form-operator, def-countable-choice, lem-cutoff-difference-quotient-commutator-estimate]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, ellipticity computation for the transformed coefficients and the $C^2$-boundary remark, printed p. 114 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, proof of Lemma 10.18 (flattening), printed p. 242 (read in full)"
---

## Statement

Assume Countable Choice. In the setting of
[[lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts]]
with $W$ compactly contained in the domain of a flattening chart of a bounded
$C^2$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), suppose
$\Lambda\ge1$ bounds $|D\Phi|,|D\psi|,|\det D\Phi|$ and $|\det D\psi|$
together with their reciprocals on the relevant closure:
$\Lambda^{-1}\le|\det D\psi(y)|\le\Lambda$ and
$|\zeta|\le\Lambda|D\Phi(\psi(y))\zeta|$ for all $\zeta$. Then the transformed
coefficients $\widetilde a^{\,ij}$ of
[[lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts]]
satisfy, for a.e. $y$ in the flattened half-ball,
$$\operatorname{Re}\sum_{i,j}\widetilde a^{ij}(y)\xi_j\overline{\xi_i}\ \ge\ \theta\,\Lambda^{-2}\inf|\det D\psi|\ |\xi|^2\qquad(\xi\in\mathbb C^n),$$
so the transformed operator is uniformly elliptic with an explicitly
computable constant depending only on $n,\theta,\Lambda$, while the transformed coefficients satisfy
$|\widetilde a^{\,ij}|\le n^2M_a\Lambda^3$. The first-order and zero-order
coefficients satisfy $|\widetilde b^{\,i}|\le nM_b\Lambda^2$ and
$|\widetilde c|\le M_c\Lambda$, hence also the scaffold's non-sharp bounds
$C(n)(M_a+M_b)\Lambda^3$ for $|\widetilde b^{\,i}|$ and
$C(n)(M_a+M_b+M_c)\Lambda^3$ for $|\widetilde c|$, since $\Lambda\ge1$.
The constants are not asserted sharp. Ellipticity alone does not imply the
coefficient regularity required for an $H^2$ estimate. If additionally
$a\in W^{1,\infty}$ on the original patch, then the transformed principal
coefficients are $W^{1,\infty}$ on the compact half-patch, with bounds also
depending on $\|Da\|_\infty$ and the second chart/inverse derivatives.

## Facts & Assumptions

**Given:** Countable Choice; the chart and its inverse with the two-sided bounds of the Statement; the coefficients $a^{ij},b^i,c$ with ellipticity constant $\theta$ and bounds $M_a,M_b,M_c$; and the transformed coefficients of the boundary-chart lemma.

[F1] Transformed coefficients: for a.e. $y$, $\widetilde a^{\,ij}(y)=|\det D\psi(y)|\sum_{p,q}a^{pq}(\psi(y))\partial_p\Phi_i(\psi(y))\partial_q\Phi_j(\psi(y))$, $\widetilde b^{\,i}(y)=|\det D\psi(y)|\sum_pb^p(\psi(y))\partial_p\Phi_i(\psi(y))$ and $\widetilde c(y)=|\det D\psi(y)|c(\psi(y))$. ([[lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts]])

[F2] Chart bounds: with $M_{ip}:=\partial_p\Phi_i(\psi(y))$ and $N:=D\psi(y)$ one has $MN=NM=I$, $|\det N|\ge\Lambda^{-1}$, $|\det N|\le\Lambda$, and $|M^T\xi|\ge\Lambda^{-1}|\xi|$ for every $\xi$. The latter follows because $M$ and $M^T$ have the same singular values and the Statement bounds the smallest singular value of $M$ below by $\Lambda^{-1}$. ([[def-bounded-c-k-domain-and-boundary-charts]])

[F3] Uniform ellipticity of the original form: $\operatorname{Re}\big(\sum_{p,q}a^{pq}(x)\zeta_q\overline{\zeta_p}\big)\ge\theta|\zeta|^2$ for a.e. $x$ and all $\zeta\in\mathbb C^n$. ([[def-uniformly-elliptic-divergence-form-operator]])

## Proof

1.1 Setup. Fix $y$ in the flattened half-ball and put $M_{ip}:=\partial_p\Phi_i(\psi(y))$, $N:=D\psi(y)$ and $\zeta:=M^T\xi$, so that $\zeta_p=\sum_iM_{ip}\xi_i$. By [F2] $|\zeta|\ge\Lambda^{-1}|\xi|$ and $|\det N|\ge\Lambda^{-1}>0$. [F2, given]

1.2 Coefficient bounds. From [F1], the coefficient bounds and [F2], $$|\widetilde a^{\,ij}|\le|\det N|\sum_{p,q}M_a|M_{ip}||M_{jq}|\le\Lambda\cdot n^2M_a\Lambda^2=n^2M_a\Lambda^3,$$ while $|\widetilde b^{\,i}|\le\Lambda\cdot nM_b\Lambda=nM_b\Lambda^2$ and $|\widetilde c|\le\Lambda M_c$. Since $\Lambda\ge1$ and $M_a+M_b\ge M_b$, this implies the non-sharp bounds $C(n)(M_a+M_b)\Lambda^3$ and $C(n)(M_a+M_b+M_c)\Lambda^3$ for suitable $C(n)$. [F1, F2, algebra]

2.1 Quadratic form. Substituting the definition of $\widetilde a^{\,ij}$ from [F1] and interchanging the finite sums gives $$\sum_{i,j}\widetilde a^{ij}\xi_j\overline{\xi_i}=|\det N|\sum_{p,q}a^{pq}\Big(\sum_jM_{jq}\xi_j\Big)\overline{\Big(\sum_iM_{ip}\xi_i\Big)}=|\det N|\sum_{p,q}a^{pq}\zeta_q\overline{\zeta_p} .$$ [F1, step 1.1, algebra]

3.1 Ellipticity. Taking real parts in step 2.1 and applying [F3] to $\zeta$ gives $\operatorname{Re}\sum_{i,j}\widetilde a^{ij}\xi_j\overline{\xi_i}\ge|\det N|\,\theta|\zeta|^2\ge\theta\,\Lambda^{-2}\inf|\det D\psi|\,|\xi|^2$, where the last inequality uses $|\det N|\ge\inf|\det D\psi|$ and step 1.1. [F3, step 1.1, step 2.1, algebra]

4.1 The transformed coefficients satisfy the stated ellipticity and size bounds. For the additional regularity clause, the first-order weak pullback formula follows by smooth approximation on compact interior subsets; change of variables and the compact ambient chart bounds bound the resulting derivative fields uniformly up to the flat boundary. Thus $a\circ\psi\in W^{1,\infty}$ there. Apply the multiplier rule of [[lem-cutoff-difference-quotient-commutator-estimate]] to the factors $|\det D\psi|$, $D\Phi\circ\psi$ and $a\circ\psi$ in [F1]. Their first derivatives use $Da$ and the second chart/inverse derivatives, giving the asserted bounds. Flat-boundary H2 estimates require this additional regularity and admissible boundary data. [F1, F2, step 3.1, step 1.2, algebra] ∎

## Source notes

Hunter (printed p. 114) performs the same substitution $\zeta=D\Phi^T\xi$ immediately after the coefficient formulas and notes that $C^2$ boundary regularity is what makes the transformed coefficients $C^1$; Teschl's Lemma 10.18 (printed p. 242) uses the same computation. The scaffold's displayed lower bound is reproduced in step 3.1; the sharper coefficient bounds in step 4.1 imply the scaffold's non-sharp versions.
