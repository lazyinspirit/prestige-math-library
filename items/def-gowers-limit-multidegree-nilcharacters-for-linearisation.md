---
id: def-gowers-limit-multidegree-nilcharacters-for-linearisation
kind: definition
title: "Ultralimit multidegree nilcharacters for inverse-theorem linearisation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
aliases: []
deps:
  - def-ultrafilter
  - lem-frechet-filter-extends-to-nonprincipal-ultrafilter
  - def-multidegree-taut-filtered-nilmanifold
  - lem-top-multidegree-subgroup-central
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-polynomial-sequence-on-a-filtered-group
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Definitions 5.1–5.2, 6.7–6.9, 6.17–6.19, printed pp. 1247–1266; Appendix A, printed pp. 1325–1330; Appendix E Lemma E.5, printed pp. 1352–1353."
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, Erratum for An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/04/erratum-4.pdf"
      locator: "Section 2, printed pp. 2–3: corrected tautness condition for multidegree filtrations."
---

## Definition

Fix a nonprincipal ultrafilter \(\mathcal U\) on \(\mathbb N\), and let \(s\ge2\). A vector-valued multidegree \((1,s-1)\) nilsequence on \({}^*\mathbb Z^2\) is a function \(\chi(h,n)=F(g(h,n)\,{}^*\Gamma)\) into \({}^*\mathbb C^D\), where \(D\ge1\) is a fixed finite integer, \(G/\Gamma\) is a standard taut multidegree-filtered nilmanifold of degree at most \((1,s-1)\), \(g:{}^*\mathbb Z^2\to{}^*G\) is a limit polynomial map as defined by the multidegree difference condition, and \(F:{}^*(G/\Gamma)\to{}^*\mathbb C^D\) is the ultrapower of maps \(G/\Gamma\to\mathbb C^D\) whose sup norms and Lipschitz constants, measured with the chosen metric and Euclidean norm, are uniformly bounded.

It is a multidegree \((1,s-1)\) nilcharacter if \(F\) has a representing sequence of maps taking values in the Euclidean unit sphere of \(\mathbb C^D\) and there is a continuous homomorphism \(\eta:G_{(1,s-1)}\to\mathbb R\), integral on \(\Gamma\cap G_{(1,s-1)}\), such that \(F(ux)=e(\eta(u))F(x)\) for every \(u\in G_{(1,s-1)}\) and \(x\in{}^*(G/\Gamma)\), where \(e(t)=\exp(2\pi i t)\). The subgroup \(G_{(1,s-1)}\) is central for the corrected taut filtration. The space of such functions is denoted \(\Xi_{\mathrm{Multi}}^{(1,s-1)}({}^*\mathbb Z^2)\).

For an integer \(r\ge1\), a scalar limit nilsequence of degree at most \(r\) on \({}^*\mathbb Z\) is a function \(\psi(n)=F(u(n)\,{}^*\Gamma)\), where \(G/\Gamma\) is a compact filtered nilmanifold of degree at most \(r\) with a fixed smooth Riemannian metric, \(u:{}^*\mathbb Z\to{}^*G\) is induced by a sequence of polynomial maps \(\mathbb Z\to G\), and \(F:{}^*(G/\Gamma)\to{}^*\mathbb C\) is induced by Lipschitz maps \(G/\Gamma\to\mathbb C\) whose sup norms and Lipschitz constants are uniformly bounded. Let \(\operatorname{Nil}_{\le r}({}^*\mathbb Z)\) be the space of such functions. For each fixed finite integer \(D\ge1\), define vector-valued limit nilsequences by replacing \(\mathbb C\) with \(\mathbb C^D\) in the preceding definition and using the Euclidean norm. Let \(\Xi_r({}^*\mathbb Z)\) consist of these vector-valued limit nilsequences having a representing sequence of maps into the Euclidean unit sphere of \(\mathbb C^D\) and a continuous vertical character \(\eta:G_r\to\mathbb R\), integral on \(\Gamma\cap G_r\), with \(F(vx)=e(\eta(v))F(x)\) for all \(v\in G_r\) and \(x\in{}^*(G/\Gamma)\). The dimension \(D\) is standard and may depend on the nilcharacter; the scalar case is \(D=1\). A scalar component of such a nilcharacter need not itself be unit-circle-valued. In this notation, \(\Xi_{s-1}({}^*\mathbb Z)\) consists of degree-at-most-\((s-1)\) vector-valued nilcharacters and \(\operatorname{Nil}_{\le s-2}({}^*\mathbb Z)\) consists of degree-at-most-\((s-2)\) scalar nilsequences.

## Definition references

[[def-ultrafilter]]

[[lem-frechet-filter-extends-to-nonprincipal-ultrafilter]]

[[def-multidegree-taut-filtered-nilmanifold]]

[[lem-top-multidegree-subgroup-central]]

[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[[def-polynomial-sequence-on-a-filtered-group]]

[Green, Tao, and Ziegler, Definitions 5.1–5.2 and 6.7–6.19](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Green, Tao, and Ziegler, Erratum, Section 2](https://terrytao.wordpress.com/wp-content/uploads/2024/04/erratum-4.pdf)

