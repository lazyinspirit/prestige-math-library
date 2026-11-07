---
id: thm-effective-chebotarev-under-grh-lagarias-odlyzko
kind: theorem
title: "Lagarias–Odlyzko effective Chebotarev under GRH"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-chebotarev-prime-ideal-counting-function
  - thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums
  - thm-brauer-induction
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-conductor-discriminant-formula-for-abelian-extensions
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem"
      url: "https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf"
      locator: "Theorem 1.1 and its proof route through §§2–7 and §9, printed pp. 409–464."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Theorem 7.4 and Remark 7.5, printed pp. 259–260; independent Chebotarev density context."
verification: {}
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension of number fields, let $G=\operatorname{Gal}(L/F)$, and let $C$ be a conjugacy class in $G$. For $x\ge1$, let $\pi_C(x;L/F)$ count the nonzero prime ideals $\mathfrak p$ of $\mathcal O_F$ that are unramified in $L$, have arithmetic Frobenius conjugacy class $C$, and satisfy $N_{F/\mathbb Q}\mathfrak p\le x$. Put $n_L=[L:\mathbb Q]$, $\Delta_L=|\operatorname{disc}(L/\mathbb Q)|$, and $\operatorname{Li}(x)=\int_2^x dt/\log t$ for $x>2$. If the Generalized Riemann Hypothesis holds for the Dedekind zeta function $\zeta_L(s)$, then there is an effectively computable absolute constant $c_1>0$ such that for every $x>2$,
$$\left|\pi_C(x;L/F)-\frac{|C|}{|G|}\operatorname{Li}(x)\right|\le c_1\left(\frac{|C|}{|G|}x^{1/2}\log(\Delta_Lx^{n_L})+\log\Delta_L\right).$$

## Statement references

[[def-chebotarev-prime-ideal-counting-function]]

[[thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums]]

[[thm-brauer-induction]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[thm-conductor-discriminant-formula-for-abelian-extensions]]

[Lagarias and Odlyzko, Theorem 1.1](https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf)

[Milne, Class Field Theory, Chapter VIII §7](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Unresolved prerequisites

No local proof is supplied. Lagarias–Odlyzko §§2–9 reduce the conjugacy-class count by Brauer induction and Deuring’s cyclic-subgroup reduction, compare a truncated inverse Mellin transform with a contour integral, estimate the zero sum under GRH, and use partial summation to pass from prime powers to prime ideals. The explicit-formula supplier has been corrected so that its trivial-character pole contributes $X\widetilde W(1)/|\operatorname{Cl}_{\mathfrak m}|$ for every ray class, as required before passage to a conjugacy-class main term. Its finite-rectangle contour identity retains its explicit primitive analytic hypothesis; a local primitive Hecke reconstruction has been authored. This does not supply the GRH zero-sum estimate, cyclic reduction or unsmoothing argument. The ray-class Artin carrier now contains the idelic quotient comparison, openness and finite-index arguments in steps 1.1–3.1 and the reciprocity deduction in step 4.1; its presence does not independently certify its global suppliers. The conductor–discriminant carrier supplies a local CC-only argument, including completion decomposition and discriminant localization in steps 1.1–4.1; the former AC-versus-CC objection is therefore no longer a missing argument in that carrier. The remaining GRH estimate, reduction and unsmoothing obligations are not completed proof steps.
