---
id: thm-sharp-trace-theorem-for-w-one-p
kind: theorem
title: "The sharp trace theorem: boundedness and range in the fractional space"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-half-space-trace-has-the-fractional-slobodeckij-bound, thm-half-space-lift-by-normal-mollification, def-fractional-sobolev-space-on-a-compact-c-one-boundary, lem-fractional-boundary-norm-is-independent-of-atlas, lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts, lem-coordinate-direction-form-of-the-slobodeckij-seminorm, lem-c-k-boundary-flattening-preserves-wkp-locally, lem-finite-ambient-partitions-for-euclidean-boundary-integration, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-holder-inequality-for-integrals, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice, lem-weak-leibniz-rule-with-a-smooth-factor]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Petru Mironescu, Fine properties of functions: an introduction (Internet Archive capture of the HAL deposit cel-00747696)"
      url: "https://web.archive.org/web/20200319104529id_/https://hal.science/cel-00747696/document"
      locator: "Chapter 11, Theorem 25 and Remark 12, printed pp. 77-79: boundedness, surjectivity and the existence of a linear bounded right inverse for $1<p<\\infty$; the strictness of the range."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teoremi [1.I] and [1.II], printed pp. 289-290: necessary and sufficient conditions for a boundary function to be a trace, with the two-sided norm equivalence for $p>1$."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorems 3.2-3.3 and Theorems 3.4-3.5, printed pp. 19-31: the half-space case in full and the extension to $C^l$ domains by localisation and a partition of unity."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.2, printed pp. 97-101: the trace space is $W^{1-1/p,p}$ and every boundary function in that space has a $W^{1,p}$ extension."
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 12, Theorem 25(a)-(b), complete proof and Corollary 17, printed pp. 85-87."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain, $1<p<\infty$ and $\theta=1-1/p$, with
$W^{\theta,p}(\partial\Omega)$ as in
[[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]. Then the trace
operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] satisfies
$$\|Tu\|_{W^{\theta,p}(\partial\Omega)}\le C(\Omega,p)\|u\|_{W^{1,p}(\Omega)} \qquad(u\in W^{1,p}(\Omega;\mathbb K)),$$
and it is onto: $T(W^{1,p}(\Omega))=W^{\theta,p}(\partial\Omega)$. For $p>1$
the range is a strict subset of $L^p(\partial\Omega)$, and the trace is not a
compact operator into $W^{\theta,p}(\partial\Omega)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$ with a finite boundary atlas and subordinate ambient partition $\{\chi_j\}$; $1<p<\infty$; $\theta=1-1/p$; and the boundary norm of [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]].

[F1] $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ is bounded, agrees with classical restriction on continuous Sobolev classes, satisfies $T(\eta u)=(\eta|_{\partial\Omega})Tu$ for smooth cutoffs, and is the transported flat trace on chart-supported classes. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]])

[F2] Half-space fractional bound: for $T_+$ the flat trace, $[T_+w]_{\theta,p}^p\le C(d,p)\int_H|Dw|^p$ for every $w\in W^{1,p}(H)$, and $T_+$ is bounded into $W^{\theta,p}(\mathbb R^d)$. ([[lem-half-space-trace-has-the-fractional-slobodeckij-bound]])

[F3] Two finite boundary atlases with subordinate partitions define equivalent boundary norms, with constants depending only on the two atlases, the dimension and $s,p$. ([[lem-fractional-boundary-norm-is-independent-of-atlas]])

[F4] There is a bounded linear right inverse $R_+$ of the flat trace $T_+$: $T_+\circ R_+=\mathrm{id}$ on $W^{\theta,p}(\mathbb R^d)$ and $\|R_+g\|_{W^{1,p}(H)}\le C\|g\|_{W^{\theta,p}(\mathbb R^d)}$. ([[thm-half-space-lift-by-normal-mollification]])

[F5] Composition with a flattening chart is bounded between the corresponding local $W^{1,p}$ spaces, multiplication by ambient smooth cutoffs is bounded, and $C_c^\infty(\mathbb R^n)|_\Omega$ is dense in $W^{1,p}(\Omega)$. ([[lem-c-k-boundary-flattening-preserves-wkp-locally]], [[lem-finite-ambient-partitions-for-euclidean-boundary-integration]], [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], [[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F6] The boundary norm is the sum, over the finite atlas and partition, of the Euclidean $W^{\theta,p}$ norms of the chart representations $(\chi_jg)\circ\Psi_j^{-1}$. ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[F8] The Euclidean seminorm is comparable to the sum of coordinate-direction integrals with weight $h^{-p}$, and $1+p\theta=p$. ([[lem-coordinate-direction-form-of-the-slobodeckij-seminorm]])

## Proof

**Proof technique:** direct.

1.1 Boundedness in the fractional norm. Let $u\in W^{1,p}(\Omega)$. By [F1], $Tu=\sum_jT(\chi_ju)$, and each $\chi_ju$ is supported in one chart. Flattening the $j$-th piece and reflecting gives $w_j\in W^{1,p}(H)$ with $\|w_j\|_{W^{1,p}(H)}\le C_j\|u\|_{W^{1,p}(\Omega)}$ by [F5], whose flat trace is the chart representation $(\chi_jTu)\circ\Psi_j^{-1}$ of the $j$-th summand; [F2] bounds its $W^{\theta,p}(\mathbb R^{n-1})$ norm by $C_j'\|w_j\|_{W^{1,p}(H)}$. Each chart $L^p$ term is already bounded by the same local half-space bound; their finite sum is controlled by $C\|u\|_{W^{1,p}(\Omega)}$. Adding the finitely many seminorm bounds and using the atlas-independence [F3] to pass to the norm of [F6] gives $\|Tu\|_{W^{\theta,p}(\partial\Omega)}\le C(\Omega,p)\|u\|_{W^{1,p}(\Omega)}$. [F1, F2, F3, F5, F6, algebra, given]

1.2 Surjectivity. Let $g\in W^{\theta,p}(\partial\Omega)$. For each $j$ let $g_j:=(\chi_jg)\circ\Psi_j^{-1}\in W^{\theta,p}(\mathbb R^{n-1})$ be the localised chart representation, and let $w_j:=R_+g_j\in W^{1,p}(H)$ be its flat lift, so that $T_+w_j=g_j$ and $\|w_j\|\le C_j\|g_j\|$ by [F4]. Pulling $w_j$ back through the chart and multiplying by a smooth cutoff supported in the chart and equal to $1$ near $\operatorname{supp}\chi_j$ gives $u_j\in W^{1,p}(\Omega)$ with $\|u_j\|\le C_j'\|g_j\|$ by [F5] and, by the chart-transport part of [F1], $Tu_j=(\chi_jg)|_{\partial\Omega}$. Setting $u:=\sum_ju_j$ gives $Tu=\sum_j\chi_jg=g$ and $\|u\|_{W^{1,p}(\Omega)}\le C(\Omega,p)\|g\|_{W^{\theta,p}(\partial\Omega)}$ (using [F3] to compare the two atlas expressions and the triangle inequality). Hence $T$ is onto. [F1, F3, F4, F5, F6, algebra, given]

1.3 Strictness of the range in $L^p$. Put $a=1/p-\min(\theta,1/p)/2$, so $0<a<1/p$ and $p(a+\theta)>1$. Choose a chart and a smooth cutoff $\beta$ supported inside it and equal to one on a small coordinate box centred at zero. Set $q(y)=\beta(y)|y_1|^{-a}$ off $y_1=0$, and zero on that null hyperplane. Since $ap<1$, $q\in L^p(\mathbb R^{n-1})$. For small $h>0$, restrict $y_1$ to $(h,2h)$ and the remaining coordinates to a fixed smaller box, where both cutoffs are one. Then $|q(y+he_1)-q(y)|\ge c_a h^{-a}$, and $\int|q(y+he_1)-q(y)|^pdy\ge c h^{1-ap}$. By [F8], $[q]_{\theta,p}^p\ge c'\int_0^{h_0}h^{-p}h^{1-ap}dh=c'\int_0^{h_0}h^{-p(a+\theta)}dh=+\infty$. Transport $q$ to the boundary and extend by zero. The bounded positive chart density gives boundary $L^p$ membership. Choose a subordinate atlas cutoff equal to one on this support; its local norm is infinite, so [F3] gives nonmembership in the boundary fractional space for every atlas. Thus the trace range is a strict subset of $L^p$. [F3, F6, F8, algebra, given]

1.4 Non-compactness. In one boundary chart choose a nonzero $\psi\in C_c^\infty(\mathbb R^d)$, $d=n-1$, supported near its centre, and a smooth normal cutoff $\chi$ equal to one near zero. Let $C_m=\|\psi(m\,\cdot)\|_{W^{\theta,p}}=m^{-d/p}\|\psi\|_p+m^{\theta-d/p}[\psi]_{\theta,p}$ and $g_m=\psi(m\,\cdot)/C_m$. Here $0<[\psi]_{\theta,p}<\infty$: finiteness follows from the Lipschitz increment bound near zero and the integrable tail, and positivity follows because $\psi$ is not constant. Set $w_m(y,t)=g_m(y)\chi(mt)$ and pull it back through the reflected chart, multiplying by a fixed ambient cutoff equal to one near the centre. For all sufficiently large $m$, this cutoff is one on the support; call the resulting class $u_m$. Scaling gives $\|w_m\|_p^p\le C C_m^{-p}m^{-d-1}$ and $\sum_j\|D_jw_m\|_p^p\le C C_m^{-p}m^{p-d-1}$, so $\|u_m\|_{W^{1,p}}\le C$ since $p\theta=p-1$. The transported traces $b_m=Tu_m$ have fractional norms bounded below by $c>0$ by [F3] and [F6], whereas $\|b_m\|_p\le C m^{-d/p}/C_m\to0$ because $\theta>0$. If a subsequence converged in the boundary fractional norm, it would converge in boundary $L^p$ to the same limit, necessarily zero. Fractional norm convergence to zero would contradict the lower bound. Hence $T$ is not compact into $W^{\theta,p}(\partial\Omega)$. [F1, F3, F5, F6, F8, algebra, given]

2.1 Conclusion. Step 1.1 gives the norm bound, step 1.2 gives surjectivity onto $W^{\theta,p}(\partial\Omega)$, step 1.3 shows the range is a strict subset of $L^p(\partial\Omega)$, and step 1.4 shows the trace is not compact into $W^{\theta,p}(\partial\Omega)$; this proves all the assertions of the statement. [step 1.1, step 1.2, step 1.3, step 1.4, given] ∎

## Source notes

Mironescu's Theorem 25 with Remark 12 (printed pp. 77-79) contains boundedness, surjectivity and the strictness of the range for $1<p<\infty$; Gagliardo's Teoremi [1.I] and [1.II] (printed pp. 289-290) state the two-sided norm equivalence, Kampanou's Theorems 3.2-3.5 (printed pp. 19-31) prove the flat case and localise it, and Schikorra's Section V.2 (printed pp. 97-101) records the trace space and the extension. The two extra assertions of the statement are proved above by explicit families: a local power singularity in $L^p$ with infinite fractional seminorm for strictness, and a bounded boundary-concentrating family whose traces tend to zero in $L^p$ while their fractional norms stay bounded below for non-compactness.
