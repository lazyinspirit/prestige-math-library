---
id: lem-na-simplex-h1-facet-trace-bound
kind: lemma
title: H1 facet trace inequality on shape-regular simplices
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-na-simplicial-mesh-rt-bdm-spaces,
    def-sobolev-space-wkp-and-its-norm,
    lem-na-smooth-neighborhood-dense-in-h1-simplex,
    lem-shape-regular-affine-simplex-scaling,
    cor-cauchy-schwarz-inequality-for-l-two,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    thm-linear-change-of-variables-for-lebesgue-measure,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local
        interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §16.1.1: Sobolev trace and the regularity domain of
        facet moments."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1: normal traces and integration by
        parts on Lipschitz cells."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. For a nondegenerate affine simplex $K$ with diameter $h_K$ and shape bound $h_K/r_K\le\gamma$, and any facet $F$, every $u\in H^1(K)$ has a well-defined trace $\gamma_Fu\in L^2(F)$ and
$$
\|\gamma_Fu\|_{L^2(F)}^2\le C(d,\gamma)\bigl(h_K^{-1}\|u\|_{L^2(K)}^2+h_K\|\nabla u\|_{L^2(K)}^2\bigr).
$$

## Facts & Assumptions

**Given:** Countable Choice, a nondegenerate shape-regular affine simplex $K$, one facet $F$, and $u\in H^1(K)$.

[A1] Countable Choice is inherited from the Sobolev and smooth-density interfaces. ([[def-countable-choice]])

[F1] Restrictions of functions smooth on a neighborhood of the closed simplex are dense in its $H^1$ norm. ([[lem-na-smooth-neighborhood-dense-in-h1-simplex]])

[F2] Shape regularity gives $|\det A|\asymp h_K^d$, $\|A\|\le C h_K$, $\|A^{-1}\|\le C(d,\gamma)h_K^{-1}$, and facet area scale comparable to $h_K^{d-1}$. ([[lem-shape-regular-affine-simplex-scaling]])

[F3] Cauchy–Schwarz controls integrals of products on the facet and simplex. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F4] Fubini's theorem permits changing the order of the finite integrals in the segment estimate. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F5] An invertible affine change of variables scales Lebesgue integrals by its determinant. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

## Proof

1.1 It suffices first to prove the reference estimate for a smooth function. On the reference simplex choose a facet $\widehat F$ opposite a vertex $a$, and parameterize inward segments by $x(y,t)=(1-t)y+ta$, $y\in\widehat F$, $0\le t\le\tfrac12$. For fixed $y$ and $t$ in $[\tfrac14,\tfrac12]$, the fundamental theorem of calculus and Cauchy–Schwarz give $|u(y)|^2\le2|u(x(y,t))|^2+2t\int_0^t |(a-y)\cdot\nabla u(x(y,s))|^2,ds.$ Integrate in $y$ and $t$. The segment Jacobian is a fixed positive constant times $(1-t)^{d-1}$, bounded above and below on this interval; $|a-y|$ is bounded on the compact reference simplex. Changing variables in the first integral and using Fubini [F4] in the second bounds $\|u\|_{L^2(\widehat F)}^2$ by $C_d(\|u\|_{L^2(\widehat K)}^2+\|\nabla u\|_{L^2(\widehat K)}^2)$. [A1, F3, F4, construct, algebra]

2.1 For a general affine simplex write $x=b+A\widehat x$ and $\widehat u=u\circ F$. The affine change of variables [F5] gives $\|\widehat u\|_{L^2(\widehat K)}^2=|\det A|^{-1}\|u\|_{L^2(K)}^2$ and $\|\nabla_{\widehat x}\widehat u\|_2^2\le |\det A|^{-1}\|A\|^2\|\nabla_xu\|_2^2$. Facet surface measure scales by the corresponding cofactor, with factor comparable to $h_K^{d-1}$; substituting [F2] into step 1.1 yields the asserted $h_K^{-1}$ and $h_K$ factors. [F2, F5, step 1.1, algebra]

3.1 For smooth-neighborhood approximants $u_n\to u$ in $H^1(K)$ from [F1], step 2.1 applied to $u_n-u_m$ makes their facet restrictions Cauchy in $L^2(F)$. Define $\gamma_Fu$ as this limit. If another such sequence is chosen, the same bound applied to the difference of the sequences shows the same limit, so the trace is well-defined. Passing to the limit in step 2.1 gives the displayed bound for $u$. [A1, F1, step 2.1, algebra, algebra] ∎