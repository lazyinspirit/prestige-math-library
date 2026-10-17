---
id: cor-scaled-caccioppoli-inequality-on-concentric-balls
kind: corollary
title: "Scaled Caccioppoli inequality on concentric balls"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [thm-caccioppoli-inequality-for-weak-elliptic-solutions, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
landmark: false
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 6, Lemma 1 and its scaling constants, printed p. 59 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, estimate (4.39), printed p. 112 (read in full)"
---

## Statement

In the setting of [[thm-caccioppoli-inequality-for-weak-elliptic-solutions]],
for concentric balls $B_r(x_0)\Subset B_R(x_0)\Subset\Omega$ one has, with the
explicit scale,
$$\|Du\|^2_{L^2(B_r(x_0))}\le C\Big(\frac{1}{(R-r)^2}\|u\|^2_{L^2(B_R(x_0))}+\|u\|^2_{L^2(B_R(x_0))}+\|f\|^2_{L^2(B_R(x_0))}\Big),$$
where $C=C(n,\theta,M_a,M_b,M_c)$ does not depend on $r,R$ or on $x_0$. The
displayed $(R-r)^{-2}$ is the scale used in the nested-ball iteration; the
constants are not asserted to be sharp, and no claim is made as $r\to R$.

## Facts & Assumptions

**Given:** Countable Choice; the setting of
[[thm-caccioppoli-inequality-for-weak-elliptic-solutions]]: an open set
$\Omega\subseteq\mathbb R^n$, a scalar field $\mathbb K$, coefficients
$a^{ij},b^i,c$ with ellipticity constant $\theta$ and bounds
$M_a,M_b,M_c$, a class $f\in L^2_{\mathrm{loc}}(\Omega)$ and a local weak
solution $u\in H^1(\Omega)$ of $Lu=f$; and concentric balls
$B_r(x_0)\Subset B_R(x_0)\Subset\Omega$.

[F1] Caccioppoli estimate: for every ball $B_R(x_0)\Subset\Omega$ and every
$0<r<R$ there is $C=C(n,\theta,M_a,M_b,M_c)$ with
$$\int_{B_r(x_0)}|Du|^2\,dx\le C\Big(\frac{1}{(R-r)^2}\int_{B_R(x_0)}|u|^2\,dx+\int_{B_R(x_0)}|u|^2\,dx+\int_{B_R(x_0)}|f|^2\,dx\Big).$$
([[thm-caccioppoli-inequality-for-weak-elliptic-solutions]])

[F2] $L^2$ norms of classes are $\|w\|_{L^2(A)}=(\int_A|w|^2\,dx)^{1/2}$, so
each integral in [F1] is the square of the corresponding $L^2$ norm.
([[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** direct.

1.1 The hypotheses of [F1] are exactly those of the given setting, so [F1] provides a constant $C=C(n,\theta,M_a,M_b,M_c)$ with $$\int_{B_r(x_0)}|Du|^2\,dx\le C\Big(\frac{1}{(R-r)^2}\int_{B_R(x_0)}|u|^2\,dx+\int_{B_R(x_0)}|u|^2\,dx+\int_{B_R(x_0)}|f|^2\,dx\Big).$$ The constant does not depend on $x_0,r,R$ because [F1] itself manufactures it only from $n,\theta,M_a,M_b,M_c$. [F1, given]

2.1 Writing each integral as the square of the $L^2$ norm via [F2], the inequality of step 1.1 becomes exactly the displayed estimate: the left side is $\|Du\|^2_{L^2(B_r(x_0))}$ and the right side is $C\big((R-r)^{-2}\|u\|^2_{L^2(B_R(x_0))}+\|u\|^2_{L^2(B_R(x_0))}+\|f\|^2_{L^2(B_R(x_0))}\big)$. Nothing was changed except the notation, so the scale $(R-r)^{-2}$ and the independence of the constant from $r,R,x_0$ hold as asserted. [F2, step 1.1, algebra] ∎

## Source notes

Simon's Lemma 1 (printed p. 59) records the constant
$C(M,\theta,\rho,R,n)$ for the estimate; Hunter's (4.39) (printed p. 112)
uses the same scale. The zero-order term is retained explicitly because it
cannot be absorbed into the $(R-r)^{-2}$ term when $R-r\ge1$; it is
controlled at the base of every nested-ball iteration.
