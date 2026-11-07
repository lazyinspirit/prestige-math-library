---
id: lem-cm-type-has-positive-rational-riemann-form
kind: lemma
title: "Every CM type admits a positive rational Riemann form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-cm-algebra-and-cm-type
  - def-complex-vector-space-lattice-and-torus
  - thm-weak-approximation-for-global-fields
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter I §2"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Riemann pairs and Riemann forms, printed pp. 17–18."
    - title: "Margaret Bilu, Complex multiplication of abelian varieties, §3.5"
      url: "https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf"
      locator: "§3.5, polarized CM types and positive trace forms, printed pp. 19–23."
verification: {}
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $(E,\Phi)$ be a CM pair and let $J_\Phi$ be the complex structure on the real vector space $E\otimes_{\mathbb Q}\mathbb R\cong\mathbb C^\Phi$ induced by $\Phi$. There is $t\in E^\times$ with $\bar t=-t$ and $\operatorname{Im}\varphi(t)>0$ for every $\varphi\in\Phi$, such that
$$\psi_t(x,y)=\operatorname{Tr}_{E/\mathbb Q}(t x\bar y)$$
is a rational alternating form and $(x,y)\mapsto\psi_t(x,J_\Phi y)$ is symmetric positive definite. For any full lattice $\Lambda\subset E$, some positive integer multiple of $\psi_t$ is integral on $\Lambda$.

## Statement references

[J. S. Milne, *Complex Multiplication*, Chapter I §2](https://www.jmilne.org/math/CourseNotes/CM.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, a CM pair $(E,\Phi)$, and a full lattice $\Lambda\subset E$.

[F1] A CM field has a totally real fixed field of index two under its complex-conjugation involution. [[def-cm-algebra-and-cm-type]]

[F2] For a global field, arbitrary targets at finitely many distinct places can be approximated simultaneously. [[thm-weak-approximation-for-global-fields]]

[A1] The weak-approximation supplier requires AC and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 In each CM-field factor $K$ of $E$, choose $z\notin K^+$ and put $\delta=z-\bar z$. Then $\bar\delta=-\delta$, and every embedding in the chosen CM type has nonzero pure-imaginary value on $\delta$. Restriction from the chosen CM type to the real embeddings of $K^+$ is a bijection. For each such real embedding, prescribe the sign of an element $c\in K^+$ to agree with the sign of $\operatorname{Im}\varphi(\delta)$. By [F2], choose $c$ in the corresponding open half-lines at all real places. Then $t=c\delta$ satisfies $\bar t=-t$ and $\operatorname{Im}\varphi(t)>0$. Do this in every factor. [F1, F2, A1, given, choose]

1.2 Under $E\otimes\mathbb R\cong\mathbb C^\Phi$, the trace form is the sum over $\varphi\in\Phi$ of $\varphi(t)(z\bar w-\bar z w)$. Since $\varphi(t)$ is positive imaginary, this form is alternating and $\psi_t(x,J_\Phi x)=2\sum_{\varphi\in\Phi}\operatorname{Im}(\varphi(t))|z_\varphi|^2>0$ for $x\ne0$; polarization of this quadratic expression gives symmetry of $\psi_t(x,J_\Phi y)$. A finite integral basis of $\Lambda$ has finitely many rational pairings, so clearing their denominators makes a positive integer multiple integral. [F1, step 1.1, given, algebra] ∎

