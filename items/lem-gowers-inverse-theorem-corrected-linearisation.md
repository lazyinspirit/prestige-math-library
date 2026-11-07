---
id: lem-gowers-inverse-theorem-corrected-linearisation
kind: lemma
title: "Corrected linearisation in the Gowers inverse theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
aliases: []
deps:
  - def-gowers-limit-multidegree-nilcharacters-for-linearisation
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, Erratum for An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/04/erratum-4.pdf"
      locator: "Section 3, revised Proposition 3.1 and proof, printed pp. 3–5."
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Definitions 6.18–6.22 and Appendix E Lemmas E.4, E.5, E.8; Appendix A Lemma A.11 and Corollary A.12."
---

## Statement

Let \(s\ge3\), fix a nonprincipal ultrafilter on \(\mathbb N\), and let \(\chi\in\Xi_{\mathrm{Multi}}^{(1,s-1)}({}^*\mathbb Z^2)\) use the corrected taut multidegree convention. For every standard \(\varepsilon>0\) and every \(h,k\in{}^*\mathbb Z\), each scalar component of

$$
\chi(h+k,n)\otimes\overline{\chi(h,n)}
$$

is within \(\varepsilon\) in \(L^\infty({}^*\mathbb Z)\) of a finite sum

$$
\sum_{j=1}^{K_{\varepsilon}(h,k)}\bigl(\psi_{k,j}(n)\bigr)_{a_j}\psi'_{k,h,j}(n),
$$

where each \(\psi_{k,j}\in\Xi_{s-1}({}^*\mathbb Z)\) is vector-valued, \(a_j\) selects one of its scalar components, and each \(\psi'_{k,h,j}\in\operatorname{Nil}_{\le s-2}({}^*\mathbb Z)\) is scalar. For each fixed standard \(\varepsilon>0\), the length \(K_{\varepsilon}(h,k)\) is a standard finite natural number for each fixed \((h,k)\); an unbounded hyperfinite sum is not asserted. The length, component indices, and all approximating factors may depend on \(\varepsilon\). For each fixed standard \(\varepsilon\), these choices can be made limit-internally in \((h,k)\), with the nilcharacters \(\psi_{k,j}\) depending on \(k\) and not on \(h\). No single finite decomposition is asserted to work for every \(\varepsilon\). Bounded scalar coefficients or linear functionals in a vector decomposition are absorbed into the lower-degree factors and the finite component sum.

## Statement references

[[def-gowers-limit-multidegree-nilcharacters-for-linearisation]]

[Green, Tao, and Ziegler, Erratum, revised Proposition 3.1](https://terrytao.wordpress.com/wp-content/uploads/2024/04/erratum-4.pdf)

## Facts & Assumptions

**Given:** An integer \(s\ge3\), a fixed nonprincipal ultrafilter on \(\mathbb N\), and a vector-valued multidegree \((1,s-1)\) nilcharacter \(\chi\).

[F1] The local definition specifies the ultrapower, taut multidegree filtration, limit polynomial maps, vector-valued nilcharacters, one-variable nilcharacters, and lower-degree nilsequences used in this statement ([[def-gowers-limit-multidegree-nilcharacters-for-linearisation]]).

