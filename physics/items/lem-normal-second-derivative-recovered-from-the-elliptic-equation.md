---
id: lem-normal-second-derivative-recovered-from-the-elliptic-equation
kind: lemma
title: "The normal second derivative is recovered from the equation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, lem-metrics-on-rn, def-metric-ball, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, def-hk-and-hk-zero-notation, def-countable-choice, lem-cutoff-difference-quotient-commutator-estimate]
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
      locator: "Section 4.12, end of the proof of Theorem 4.30 (normal derivative from the equation), printed pp. 115-116 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, proof of Lemma 10.18, printed p. 242 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge1$ and give $\mathbb R^n$ its Euclidean metric
([[lem-metrics-on-rn]]). In this item relabel its zero-based coordinates
by $x_i:=x(i-1)$ for $1\le i\le n$; $D_i$ and $e_i$ refer to these
coordinates. Define the open half-space
$H:=\{x\in\mathbb R^n:x_n>0\}$ and its boundary hyperplane
$\partial H=\{x\in\mathbb R^n:x_n=0\}$. For $r>0$, write
$B_r(x_0):=\{x:|x-x_0|<r\}$ ([[def-metric-ball]]), so the boundary
half-ball is $Q=\{x:|x-x_0|<r,\ x_n>0\}$ with $(x_0)_n=0$. Let
$u\in H^1_0(H)\cap H^2_{\mathrm{loc}}(H)$ be such that the tangential second
derivatives $D_kD_iu$ ($k<n$) and the derivatives $D_nD_iu$ for $i<n$ exist
in $L^2_{\mathrm{loc}}(H)$; suppose $u$ solves $Lu=f$ weakly on $H$ with
$a^{ij}\in W^{1,\infty}(H)$ uniformly elliptic with constant $\theta$,
$b^i,c\in L^\infty(H)$ and $f\in L^2_{\mathrm{loc}}(H)$
([[def-local-weak-solution-for-a-divergence-form-operator]]). Then the
missing normal derivative $D_nD_nu$ exists in $L^2_{\mathrm{loc}}(H)$ and
satisfies throughout $H$, in the almost-everywhere strong form,
$$D_nD_nu=\frac{1}{a^{nn}}\Big(-\sum_{(i,j)\ne(n,n)}a^{ij}D_iD_ju-\sum_{i,j}(D_ia^{ij})D_ju+b^iD_iu+cu-f\Big)$$
almost everywhere, with the pointwise bound
$|D_nD_nu|\le\theta^{-1}(M_a\sum_{(i,j)\ne(n,n)}|D_iD_ju|+C(n)(M_1+M_b)|Du|+M_c|u|+|f|)$
and the corresponding $L^2$ estimate on each boundary half-ball $Q=B_r(x_0)\cap H$, $x_0\in\partial H$, on which $f$ and all the nonnormal second derivatives on the right are in $L^2(Q)$. In particular those hypotheses imply $D_n^2u\in L^2(Q)$, with
$$\|D_n^2u\|_{L^2(Q)}\le C\left(\sum_{(i,j)\ne(n,n)}\|D_iD_ju\|_{L^2(Q)}+\|Du\|_{L^2(Q)}+\|u\|_{L^2(Q)}+\|f\|_{L^2(Q)}\right).$$
Uniform ellipticity gives $\operatorname{Re}a^{nn}\ge\theta$ and hence $|a^{nn}|\ge\theta$, which makes division legitimate for real or complex coefficients.

## Facts & Assumptions

**Given:** Countable Choice; the half-space; the coefficient package; the data and the solution with the stated partial second derivatives.

[F1] Local weak solution: $a(u,\varphi)=\int_Hf\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(H)$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] Coefficient package: $|a^{ij}|\le M_a$, $|D_ia^{ij}|\le M_1$, $|b^i|\le M_b$, $|c|\le M_c$ a.e. and $\operatorname{Re}(a^{ij}\xi_j\overline{\xi_i})\ge\theta|\xi|^2$; in particular $\operatorname{Re}a^{nn}\ge\theta>0$ and $|a^{nn}|\ge\theta$ a.e. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] On an open set where $u$ is a strong solution, integration by parts in [F1] against $\varphi\in C_c^\infty$ gives $\int_H\big({-}D_i(a^{ij}D_ju)+b^iD_iu+cu-f\big)\overline\varphi\,dx=0$ for every test function, where $D_i(a^{ij}D_ju)=(D_ia^{ij})D_ju+a^{ij}D_iD_ju$ with the displayed second derivatives integrable; since the bracket lies in $L^2_{\mathrm{loc}}$ and is orthogonal to every $C_c^\infty$ function, it vanishes a.e. ([[def-hk-and-hk-zero-notation]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 Strong identity in the open half-space. On every compactly contained open subset of $H$, the hypothesis $u\in H^2_{\mathrm{loc}}(H)$ and the multiplier rule of [[lem-cutoff-difference-quotient-commutator-estimate]] for $a\in W^{1,\infty}$ give $D_i(a^{ij}D_ju)=(D_ia^{ij})D_ju+a^{ij}D_iD_ju$ in $L^2$. The weak equation and density of smooth tests imply $-D_i(a^{ij}D_ju)+b^iD_iu+cu=f$ almost everywhere there. A countable exhaustion proves this identity almost everywhere throughout $H$; no boundary $H^2$ regularity has been assumed. [F1, F2, F3]

2.1 Algebraic recovery. Separating the $(n,n)$ term gives $a^{nn}D_n^2u=-\sum_{(i,j)\ne(n,n)}a^{ij}D_iD_ju-\sum_{i,j}(D_ia^{ij})D_ju+b^iD_iu+cu-f$. Testing ellipticity with $\xi=e_n$ gives $\operatorname{Re}a^{nn}\ge\theta$, hence $|1/a^{nn}|\le\theta^{-1}$ even for complex coefficients. Division therefore gives the displayed formula and pointwise bound almost everywhere on $H$. [step 1.1, F2, algebra]

3.1 Estimate up to the flat boundary. Let $Q=B_r(x_0)\cap H$ be a boundary half-ball satisfying the integrability conditions in the Statement. The right-hand side of step 2.1 belongs to $L^2(Q)$ because the nonnormal derivatives and $f$ do, and $u\in H^1(H)$. Integrating the pointwise bound over $Q$ and using the triangle inequality proves the displayed $L^2(Q)$ estimate. The already existing interior weak derivative $D_n^2u$ equals this $L^2(Q)$ function on every compact test support in $Q$, so the same function represents that weak derivative on the entire open half-ball. This recovers boundary integrability without first assuming $u\in H^2(Q)$. [step 2.1, F2, algebra]

4.1 Conclusion. The equation determines the normal derivative throughout $H$ and bounds it on every boundary half-ball where the tangential and mixed second derivatives and forcing have been controlled. Together with the tangential difference-quotient estimate, this supplies the missing second derivative up to the flat boundary for real or complex coefficients. [step 2.1, step 3.1] ∎

## Source notes

Hunter (printed pp. 115-116) recovers $\partial_n^2u$ from the equation after the tangential second derivatives have been estimated, and Teschl's Lemma 10.18 (printed p. 242) proceeds in the same order. The formula is the algebraic solve for $a^{nn}D_nD_nu$ in the strong form of the equation; the ellipticity bound $|a^{nn}|\ge\theta$ obtained from $\xi=e_n$ is what makes the division legitimate.
