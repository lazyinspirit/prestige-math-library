---
id: lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators
kind: lemma
title: "The differentiated weak equation with coefficient commutators"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-linearity-locality-and-commutation, def-locally-integrable-function-as-a-regular-distribution, def-uniformly-elliptic-divergence-form-operator, def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, thm-holder-inequality-for-integrals, def-countable-choice, lem-cutoff-difference-quotient-commutator-estimate]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, proof of Corollary 10.17 (differentiated equation), printed p. 241 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, differentiation of the equation before Theorem 4.28, printed p. 114 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, let
$a^{ij}\in W^{2,\infty}_{\mathrm{loc}}(\Omega)$ and
$b^i,c\in W^{1,\infty}_{\mathrm{loc}}(\Omega)$ with
$|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$ and
$|D_ka^{ij}|,|D_kb^i|,|D_kc|\le M_1$ almost everywhere, let
$f\in H^1_{\mathrm{loc}}(\Omega)$, and let
$u\in H^1(\Omega)\cap H^2_{\mathrm{loc}}(\Omega)$ be a local weak solution of
$Lu=f$ on $\Omega$
([[def-local-weak-solution-for-a-divergence-form-operator]]). Then for every
coordinate direction $k$ and every $\varphi\in C_c^\infty(\Omega)$, writing
$v:=D_ku\in H^1_{\mathrm{loc}}(\Omega)$
([[def-weak-derivative-of-a-locally-integrable-function]]), with
$f_k:=D_kf$, $\alpha^{ij}_k:=D_ka^{ij}$, $\beta^i_k:=D_kb^i$ and
$\gamma_k:=D_kc$,
$$\int_\Omega a^{ij}D_jv\,\overline{D_i\varphi}\,dx+\int_\Omega b^iD_iv\,\overline\varphi\,dx+\int_\Omega cv\,\overline\varphi\,dx=\int_\Omega f_k\,\overline\varphi\,dx-\int_\Omega \alpha^{ij}_kD_ju\,\overline{D_i\varphi}\,dx-\int_\Omega \beta^i_kD_iu\,\overline\varphi\,dx-\int_\Omega \gamma_ku\,\overline\varphi\,dx .$$
Thus on every bounded open $U\Subset\Omega$, the restriction $v|_U$
is a local weak solution of the equation with the same principal part
$a^{ij}$ and the same bounded first- and zero-order coefficients; its datum
$g_k:=D_kf+D_i((D_ka^{ij})D_ju)-(D_kb^i)D_iu-(D_kc)u$ lies in
$L^2_{\mathrm{loc}}(\Omega)$. More generally, if $|\alpha|=j\ge1$,
$u\in H^{j+1}_{\mathrm{loc}}$, $f\in H^j_{\mathrm{loc}}$,
$a^{ij}\in W^{j+1,\infty}_{\mathrm{loc}}$ and $b^i,c\in
W^{j,\infty}_{\mathrm{loc}}$, then $D^\alpha u$ satisfies the same-principal-part
compact-test equation on $\Omega$, and is a local weak solution on each
such $U$, with datum
$$g_\alpha:=D^\alpha f+\sum_{0<\beta\le\alpha}{\alpha\choose\beta}D_i\!\left((D^\beta a^{ij})D_jD^{\alpha-\beta}u\right)-\sum_{0<\beta\le\alpha}{\alpha\choose\beta}\left((D^\beta b^i)D_iD^{\alpha-\beta}u+(D^\beta c)D^{\alpha-\beta}u\right)\in L^2_{\mathrm{loc}}(\Omega).$$
The principal coefficient derivatives through order $j+1$ ensure that the
divergence commutators are genuine $L^2_{\mathrm{loc}}$ functions, not merely
$H^{-1}_{\mathrm{loc}}$ functionals. The scaffold assumed only $u\in H^1(\Omega)$; the integral defining
$\int a^{ij}D_jv\overline{D_i\varphi}$ requires $v\in H^1_{\mathrm{loc}}$,
equivalently $u\in H^2_{\mathrm{loc}}(\Omega)$, which is the regularity
available in every induction step that consumes this lemma.

## Facts & Assumptions

**Given:** Countable Choice; the open set $\Omega$; the coefficients with their bounds; the data $f$ and $u$; and the weak equation $a(u,\varphi)=\int_\Omega f\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(\Omega)$.

[F1] Local weak solution: $a(u,\varphi)=\int_\Omega f\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(\Omega)$, and $D_k\varphi\in C_c^\infty(\Omega)$ for every such $\varphi$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] Regularity of the data: $f\in H^1_{\mathrm{loc}}$ gives $f_k=D_kf\in L^2_{\mathrm{loc}}(\Omega)$; $u\in H^2_{\mathrm{loc}}$ gives $v=D_ku\in H^1_{\mathrm{loc}}$ and $D_jv,D_jD_iu\in L^2_{\mathrm{loc}}$. The lower-order derivatives $\beta^i_k,\gamma_k$ are locally bounded, and $a^{ij}\in W^{2,\infty}_{\mathrm{loc}}$ makes both $\alpha^{ij}_k$ and $D_i\alpha^{ij}_k$ locally bounded. Thus $D_i(\alpha^{ij}_kD_ju)\in L^2_{\mathrm{loc}}$ as required for $g_k$. ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]], [[def-uniformly-elliptic-divergence-form-operator]], [[lem-cutoff-difference-quotient-commutator-estimate]]).

[F3] Second weak derivatives commute: if $w\in H^2_{\mathrm{loc}}(\Omega)$, then $D_kD_jw=D_jD_kw$ almost everywhere, both being represented by the same $L^2_{\mathrm{loc}}$ class. This is the distributional identity $\partial_k\partial_jT_w=\partial_j\partial_kT_w$ together with the injectivity of the regular-distribution map. ([[lem-weak-derivative-linearity-locality-and-commutation]], [[def-locally-integrable-function-as-a-regular-distribution]])

[F4] Hölder and Cauchy--Schwarz bounds: for $g\in L^2_{\mathrm{loc}}$, a bounded coefficient $q$ and a compactly supported test function, all the pairings below are absolutely convergent with the bounds read off from $\|g\|_{L^2(\operatorname{supp}\varphi)}$ and $\|q\|_\infty$. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** direct.

1.1 All objects in the display are defined and the pairings are finite: $v=D_ku\in H^1_{\mathrm{loc}}$ with $D_jv\in L^2_{\mathrm{loc}}$, $f_k\in L^2_{\mathrm{loc}}$, and $\alpha^{ij}_k,\beta^i_k,\gamma_k$ are bounded; every term pairs an $L^2_{\mathrm{loc}}$ class with a bounded coefficient and a compactly supported test function, so [F4] bounds it. [F2, F4]

2.1 Replacement and integration by parts. Since $D_k\varphi\in C_c^\infty(\Omega)$, [F1] gives $a(u,D_k\varphi)=\int_\Omega f\,\overline{D_k\varphi}\,dx$, and moving the derivative off the test function term by term (the boundary terms vanish because $\varphi$ is compactly supported) gives $$\int_\Omega a^{ij}D_ju\,\overline{D_iD_k\varphi}\,dx=-\int_\Omega a^{ij}D_jv\,\overline{D_i\varphi}\,dx-\int_\Omega \alpha^{ij}_kD_ju\,\overline{D_i\varphi}\,dx ,$$ where $D_kD_ju=D_jD_ku=D_jv$ by [F3], and likewise $$\int_\Omega b^iD_iu\,\overline{D_k\varphi}\,dx=-\int_\Omega b^iD_iv\,\overline\varphi\,dx-\int_\Omega \beta^i_kD_iu\,\overline\varphi\,dx ,\qquad \int_\Omega cu\,\overline{D_k\varphi}\,dx=-\int_\Omega cv\,\overline\varphi\,dx-\int_\Omega \gamma_ku\,\overline\varphi\,dx ,$$ while $\int_\Omega f\,\overline{D_k\varphi}\,dx=-\int_\Omega f_k\,\overline\varphi\,dx$. Substitution into the original identity and multiplication by $-1$ gives the corrected signs in the Statement. [F1, F2, F3, step 1.1, algebra]

3.1 In the weak equation of step 2.1, the left-hand side is $a_k(v,\varphi):=\int_\Omega\big(a^{ij}D_jv\overline{D_i\varphi}+b^iD_iv\overline\varphi+cv\overline\varphi\big)dx$ and the distributional right-hand side is $D_kf+D_i(\alpha^{ij}_kD_ju)-\beta^i_kD_iu-\gamma_ku$. By [F2] this distribution is represented by the claimed $L^2_{\mathrm{loc}}$ function. On each bounded $U\Subset\Omega$, one has $v\in H^1(U)$, so the identity makes $v|_U$ a local weak solution in the cited definition. No global $H^1(\Omega)$ membership of $v$ is asserted. [step 2.1, F2, algebra]

4.1 Higher-order commutators. For any multi-index $\alpha$ of length $j$, differentiate the distributional equation by $D^\alpha$ and apply the proved Sobolev multiplier rule of [[lem-cutoff-difference-quotient-commutator-estimate]] repeatedly. The principal commutators are divergences $D_i((D^\beta a^{ij})D_jD^{\alpha-\beta}u)$; expanding each divergence shows that its terms involve coefficient derivatives through order $|\beta|+1\le j+1$ and derivatives of $u$ through order $j-|\beta|+2\le j+1$. The lower-order commutators use derivatives of $b,c$ through order $j$ and derivatives of $u$ through order at most $j$. Under $a\in W^{j+1,\infty}_{\mathrm{loc}}$, $b,c\in W^{j,\infty}_{\mathrm{loc}}$, $u\in H^{j+1}_{\mathrm{loc}}$ and $f\in H^j_{\mathrm{loc}}$, every term in $g_\alpha$ is therefore in $L^2_{\mathrm{loc}}$, as asserted in the Statement. [step 3.1, F2, algebra]

5.1 Conclusion. For every coordinate direction $k$ and every $\varphi\in C_c^\infty(\Omega)$ the identity displayed in the Statement holds, so $v=D_ku$ satisfies the differentiated compact-test equation on $\Omega$ and is a local weak solution on each bounded $U\Subset\Omega$, with the same principal part and bounded first- and zero-order coefficients; in particular no consumer may claim that a derivative of a weak solution solves the identical equation, since the commutator terms $\alpha^{ij}_kD_ju$, $\beta^i_kD_iu$ and $\gamma_ku$ are exactly the correction. [step 3.1, step 4.1] ∎

## Source notes

Teschl's proof of Corollary 10.17 (printed p. 241) differentiates the equation and exhibits the coefficient commutators; Hunter's remark before Theorem 4.28 (printed p. 114) performs the same formal differentiation. Both use the regularity $u\in H^2_{\mathrm{loc}}$ at the first differentiation, and the induction of the sources proceeds exactly as in step 4.1. The scaffold's hypothesis $u\in H^1(\Omega)$ alone leaves $D_jv$ undefined as a function; the item assumes $u\in H^2_{\mathrm{loc}}(\Omega)$, which every consuming induction step supplies.
