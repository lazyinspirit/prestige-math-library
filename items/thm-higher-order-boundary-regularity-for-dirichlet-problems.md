---
id: thm-higher-order-boundary-regularity-for-dirichlet-problems
kind: theorem
title: "Higher-order boundary regularity for Dirichlet problems"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [thm-global-h-two-dirichlet-regularity, lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary, lem-normal-second-derivative-recovered-from-the-elliptic-equation, lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators, lem-nested-domain-induction-for-interior-elliptic-derivatives, def-bounded-c-k-domain-and-boundary-charts, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, def-uniformly-elliptic-divergence-form-operator, def-countable-choice, lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts, lem-c-two-boundary-flattening-transforms-uniform-ellipticity, lem-cutoff-difference-quotient-commutator-estimate, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, Theorem 4.31, printed p. 116 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 9, Theorem 1 and the induction on the number of derivatives, printed pp. 86-90 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^n$ be a bounded
$C^{k+2}$ domain, $n\ge2$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, let
$k\ge0$, let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]] with
$a^{ij}\in W^{k+1,\infty}(\Omega)$, $b^i,c\in W^{k,\infty}(\Omega)$ and all
coefficient derivatives bounded, and let $f\in H^k(\Omega)$. If
$u\in H^1_0(\Omega)$ is a weak solution of $Lu=f$ with zero boundary values
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]), then
$u\in H^{k+2}(\Omega)$ and
$$\|u\|_{H^{k+2}(\Omega)}\le C\big(\|f\|_{H^k(\Omega)}+\|u\|_{L^2(\Omega)}\big),$$
with $C$ depending only on $n,k,\Omega$ and the coefficient bounds. The
derivative gain is exactly two orders; the boundary regularity required at
order $k$ is $C^{k+2}$, the coefficient regularity one order above the data
order, and the companion page records the sharp two-derivative example. For
$k=0$ the theorem is
[[thm-global-h-two-dirichlet-regularity]].

## Facts & Assumptions

**Given:** Countable Choice; the bounded $C^{k+2}$ domain and its finite boundary atlas; the coefficients with bounds through order $k$; the datum $f\in H^k(\Omega)$; and the zero-trace weak solution $u\in H^1_0(\Omega)$.

[F1] Flat-boundary estimates: after flattening a chart, the localisation $\zeta u$ is a compactly supported class in $H^1_0$ of the half-space; the transformed coefficients are uniformly elliptic with the bounds of the flattening lemma; tangential difference quotients give the tangential second derivatives, and the equation recovers the normal one. ([[lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary]], [[lem-normal-second-derivative-recovered-from-the-elliptic-equation]])

[F2] Differentiated equation: if $u\in H^{m+1}_{\mathrm{loc}}$ solves $Lu=f$ with $f\in H^m_{\mathrm{loc}}$, then every weak derivative $D^\alpha u$ of order $|\alpha|=m$ satisfies the compact-test identity of an equation with the same principal part and datum in $L^2_{\mathrm{loc}}$ given by the multi-index commutator formula of the supplier: it contains $D^mf$, principal-coefficient derivatives through order $m+1$, lower-order coefficient derivatives through order $m$, and derivatives of $u$ through order at most $m+1$. The assumption $u\in H^{m+1}_{\mathrm{loc}}$ makes every term an $L^2_{\mathrm{loc}}$ function; on a flat half-space, tangential derivatives remain in $H^1_0$ provided they exist in $H^1$, as proved in step 3.1 below. This is not a claim about arbitrary derivatives of an arbitrary $H^1_0$ class. Named local-solution status holds on bounded inner domains; on the half-space used below it follows from the separately established $H^1(H)$ membership. ([[lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators]], [[def-hk-and-hk-zero-notation]])

[F3] Interior higher-order regularity on the chart-interior region. ([[lem-nested-domain-induction-for-interior-elliptic-derivatives]])

[F4] Base theorem: for $k=0$ the global $H^2$ Dirichlet estimate holds with $a^{ij}\in W^{1,\infty}$, $b,c\in L^\infty$ and datum in $L^2$. ([[thm-global-h-two-dirichlet-regularity]])

[F5] The boundary-chart lemma supplies localized $H^m$ and $W^{m,\infty}$ pullback bounds when the chart has bounded derivatives through order $m$; the cutoff lemma supplies the $W^{m,\infty}/H^m$ product formula. The quotient theorem supplies tangential strong $L^2(H)$ convergence. ([[lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts]], [[lem-cutoff-difference-quotient-commutator-estimate]], [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]])

## Proof

**Proof technique:** induction on $k$.

1.1 The induction claim is $\mathrm P_j$: under the hypotheses of the Statement with $k=j$, the solution satisfies $u\in H^{j+2}(\Omega)$ with $\|u\|_{H^{j+2}(\Omega)}\le C_j(\|f\|_{H^j(\Omega)}+\|u\|_{L^2(\Omega)})$, where $C_j$ depends only on $n,j,\Omega$, principal coefficient bounds through order $j+1$, and lower-order coefficient bounds through order $j$. [F2, given, base]

2.1 Base case $j=0$. This is [F4] verbatim. [F4, step 1.1, base]

3.1 Assume $\mathrm P_{j-1}$ with $1\le j\le k$, so $u\in H^{j+1}(\Omega)$ with the induction bound. On each fixed ambient $C^{j+2}$ boundary patch, [F5] transports this regularity and the original equation to a half-patch. The formulas for the transformed matrix use the Jacobian and two first chart derivatives; differentiating them through order $j+1$ uses only original coefficient derivatives through order $j+1$ and chart/inverse derivatives through order $j+2$. Thus the transformed principal matrix is $W^{j+1,\infty}$, the drift and reaction are $W^{j,\infty}$, and the forcing is $H^j$ with bounded norms. Choose a real ambient cutoff $\eta$ vanishing near the artificial edges and equal to one on a smaller half-ball. For $z=\eta\widehat u$, the expanded localization formula has a datum $g\in H^j$ with $\|g\|_{H^j}\le C(\|f\|_{H^j(\Omega)}+\|u\|_{H^{j+1}(\Omega)})$: its terms use derivatives of $\widehat u$ through order $j+1$, principal coefficients through order $j+1$, and $\eta$ through order $j+2$. The zero-trace transfer of the chart lemma gives $z\in H^1_0(H)$ after zero extension at artificial edges, and $z\in H^{j+1}(H)$ by [F5]. Extend the coefficients to $H$ using a larger ambient cutoff, equal to one near the support of $z$, and a constant positive identity matrix outside the patch, as in the base theorem; this preserves ellipticity and all stated Sobolev bounds and leaves $Lz=g$. [F1, F4, F5, step 2.1, ih, algebra]

4.1 Zero-trace tangential derivatives and their estimates. If $w\in H^2(H)\cap H^1_0(H)$ and $\ell<n$, then $\delta_h^\ell w\in H^1_0(H)$ by the bounded fixed-$h$ shift operations in [F1]. Applying the tangential strong convergence of [F5] to $w$ and every $D_iw\in H^1(H)$ gives $\delta_h^\ell w\to D_\ell w$ in $H^1(H)$; closedness of $H^1_0(H)$ therefore gives $D_\ell w\in H^1_0(H)$. Iterating for $z\in H^{j+1}(H)$ proves $w_\alpha=D_{\mathrm{tan}}^\alpha z\in H^1_0(H)$ for $|\alpha|=j$. The differentiated equation [F2] and the multiplier rule give its datum $h_\alpha\in L^2(H)$ with $\|h_\alpha\|_2\le C(\|g\|_{H^j(H)}+\|z\|_{H^{j+1}(H)})$. After scaling the fixed supports into the outer half-ball, the tangential estimate in [F1] applies to $w_\alpha$, and the interior H2 theorem from [F3] supplies its $H^2_{\mathrm{loc}}(H)$ regularity. The normal-recovery estimate in [F1] then yields its full H2 bound on the smaller half-ball. Varying $\alpha$ controls all order-$j+2$ derivatives of $z$ with at most two normal factors. [F1, F2, F3, F5, step 3.1, algebra]

5.1 For the remaining derivatives, the interior estimate [F3] already gives $z\in H^{j+2}_{\mathrm{loc}}(H)$, so differentiate the expanded strong equation $-a^{pq}D_pD_qz-(D_pa^{pq})D_qz+b^pD_pz+cz=g$ on compact interior subsets using the proved multiplier rule. For a multi-index $\gamma$ of order $j$ with $\gamma_n=r-2$, the sole term with $r$ normal factors is $-a^{nn}D_n^2D^\gamma z$. Every other order-$j+2$ term has at most $r-1$ normal factors; terms where a derivative hits a coefficient use only derivatives of $z$ through order $j+1$, principal coefficients through order $j+1$ and lower-order coefficients through order $j$. The forcing derivative $D^\gamma g$ is $L^2$. Starting with the at-most-two-normal derivatives from step 4.1, induction on $r$ and $|a^{nn}|\ge\theta_0>0$ bound every remaining derivative in $L^2$ on the smaller boundary half-ball. The a.e. identities hold throughout it by a countable exhaustion of its interior; every compact test support lies in that interior, so these $L^2$ fields represent the global weak derivatives on the open half-ball. No multiplication of an undefined distribution by a merely Lipschitz reciprocal is required. [F1, F2, F3, F5, step 3.1, step 4.1, algebra]

6.1 Completing the induction. Steps 3.1--5.1, using the boundary, differentiated-equation, interior, and base estimates of [F1]–[F4], bound every weak derivative of order $j+2$ on the chart-localised regions and the interior region; summing the finitely many local bounds and gluing with the partition of unity gives $u\in H^{j+2}(\Omega)$ with $\|u\|_{H^{j+2}(\Omega)}\le C_j(\|f\|_{H^j(\Omega)}+\|u\|_{L^2(\Omega)})$, which is $\mathrm P_j$; by induction $\mathrm P_k$ holds. [F1, F2, F3, F4, F5, step 3.1, step 4.1, step 5.1]

7.1 Conclusion. Under $C^{k+2}$ boundary regularity, coefficients of order $k+1$ for the principal part and order $k$ for the lower-order terms, and data in $H^k$, the zero-trace Dirichlet solution lies in $H^{k+2}(\Omega)$ with the displayed two-derivative gain. [step 6.1, discharge-induction] ∎

## Source notes

Hunter's Theorem 4.31 (printed p. 116) and Laugesen's Theorem 5.11 (printed p. 113) state the higher-order boundary regularity; Simon's Lecture 9 (printed pp. 86-90) gives the induction, differentiating tangentially (which preserves the zero trace) and recovering the normal derivatives from the equation. That is exactly the two-case scheme of the induction steps above. The $C^{k+2}$ boundary hypothesis is what keeps the flattened coefficients in $W^{k+1,\infty}$ at the level required by the differentiated equations.
