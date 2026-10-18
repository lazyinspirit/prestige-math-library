---
id: lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization
kind: lemma
title: "The vacuum F-coefficient records the Frobenius–Schur sign"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-absolutely-simple-object, def-anyonic-frobenius-schur-sign, def-fusion-and-multifusion-category, def-qc-tqc-f-symbol, def-qc-tqc-unitary-fusion-category, thm-qc-tqc-f-symbol-unitary]
justified_by: []
proof_strategy: direct
axiom_use: None; the proof is a one-dimensional cap/cup calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrei Bernevig and Titus Neupert, Topological Superconductors and Category Theory"
      url: "https://math.uniandes.edu.co/~cursillo_gr/escuela2015/abstracts/LectureNotes_LesHouches14_Vietri14_Bogota15_NeupertBernevig.pdf"
      locator: "§III.A.4, PDF pp. 54–55, equation (113) and its bend/closure argument."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.5, PDF pp. 4–16: unitary duality and F-matrix inner-product convention."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a$ and $(v,\operatorname{ev},\operatorname{coev},d_a,\kappa_a)$ be as in [[def-anyonic-frobenius-schur-sign]]. In the multiplicity-free vacuum-normalized gauge of [[def-qc-tqc-f-symbol]],

$$\left(F^{aaa}_a\right)_{\mathbf1,\mathbf1}=\frac{\kappa_a}{d_a},\qquad \delta_a:=\frac{1}{\left((F^{aaa}_a)^{-1}\right)_{\mathbf1,\mathbf1}}=\kappa_a d_a.$$

## Facts & Assumptions

**Given:** A unitary spherical fusion category, a self-dual simple $a$, the normalized duality datum, and the F-symbol convention.

[F1] [[def-anyonic-frobenius-schur-sign]]: $v^\dagger v=\operatorname{id}_{\mathbf1}$, $\operatorname{coev}=\sqrt{d_a}v$, and $\operatorname{ev}=\kappa_a\sqrt{d_a}v^\dagger$, with $\kappa_a=\pm1$.

[F2] [[def-qc-tqc-f-symbol]]: in orthonormal tree bases, the coefficient $F_{f,e}$ is defined by $L_e\circ\alpha^{-1}=\sum_fF_{f,e}R_f$; rows index the right-tree channel and columns the left-tree channel.

[F3] [[def-qc-tqc-unitary-fusion-category]] and [[thm-qc-tqc-f-symbol-unitary]]: the chosen trivalent basis maps are orthonormal and the associator F-matrix is unitary.

[F4] [[def-absolutely-simple-object]]: every simple object has endomorphism space $\mathbb C\operatorname{id}$, so the overlap and zig-zag scalars are well-defined.

[F5] [[def-fusion-and-multifusion-category]]: $\mathcal C$ is finite semisimple with simple tensor unit; $a$ is simple by the hypotheses.

## Proof

**Given:** The normalized cap/cup maps, the chosen vacuum-channel bases, and the typed associator between $((a\otimes a)\otimes a)$ and $a\otimes(a\otimes a)$.

1.1 Let $L_{\mathbf1}$ be the left-tree basis map obtained by applying $v^\dagger$ to the first pair and then the unit unitor, and let $R_{\mathbf1}$ be the right-tree basis map obtained by applying $v^\dagger$ to the last pair and then the other unit unitor. Both have norm one because $v^\dagger v=\operatorname{id}_{\mathbf1}$ and the unit constraints are unitary. [F1, F3, given]

2.1 By the F-symbol definition, $L_{\mathbf1}\circ\alpha^{-1}=\sum_f(F^{aaa}_a)_{f,\mathbf1}R_f$. Composing on the right with $R_{\mathbf1}^\dagger$ kills every $f\ne\mathbf1$ by orthogonality, so $(L_{\mathbf1}\circ\alpha^{-1})R_{\mathbf1}^\dagger=(F^{aaa}_a)_{\mathbf1,\mathbf1}\operatorname{id}_a$. In the chosen basis maps this left side is $(v^\dagger\otimes\operatorname{id}_a)\alpha^{-1}(\operatorname{id}_a\otimes v)$, with unitors inserted at the two ends. [F2, F3, F4, F5, step 1.1, algebra]

3.1 The first duality zig-zag is $(\operatorname{ev}\otimes\operatorname{id}_a)\alpha^{-1}(\operatorname{id}_a\otimes\operatorname{coev})=\operatorname{id}_a$. Substituting [F1] gives $\kappa_a d_a(v^\dagger\otimes\operatorname{id}_a)\alpha^{-1}(\operatorname{id}_a\otimes v)=\operatorname{id}_a$. Step 2.1 therefore yields $(F^{aaa}_a)_{\mathbf1,\mathbf1}=1/(\kappa_a d_a)=\kappa_a/d_a$, since $\kappa_a^2=1$. [F1, F2, F4, F5, step 2.1, algebra]

4.1 The entry in step 3.1 is real. Unitarity [F3] gives $((F^{aaa}_a)^{-1})_{\mathbf1,\mathbf1}=\overline{(F^{aaa}_a)_{\mathbf1,\mathbf1}}=\kappa_a/d_a$. Its reciprocal is $\delta_a=\kappa_a d_a$, proving the normalization with the actual FS sign. [F3, step 3.1, algebra] ∎
