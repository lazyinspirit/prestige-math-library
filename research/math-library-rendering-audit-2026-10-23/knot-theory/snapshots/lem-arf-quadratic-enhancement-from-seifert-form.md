---
id: lem-arf-quadratic-enhancement-from-seifert-form
kind: lemma
title: "The Seifert form gives a quadratic enhancement and basis-independent Arf value"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-knot-arf-invariant-from-seifert-form
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
  - def-seifert-matrix-s-equivalence
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf"
      locator: "§§3–5, pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---
## Statement

Assume full AC. For a knot Seifert surface $F$ with Seifert matrix $V$, the function $q_F(x)=x^TVx\pmod2$ is well-defined on $H_1(F;\mathbb F_2)$ and satisfies
$$q_F(x+y)=q_F(x)+q_F(y)+x\cdot_F y.$$
Its polarization is nondegenerate. For any symplectic basis $(a_1,b_1,\ldots,a_g,b_g)$, the sum $\sum_iq_F(a_i)q_F(b_i)$ is independent of that basis. It is unchanged by either elementary Seifert enlargement, so it depends only on the knot.

## Statement references

[[def-knot-arf-invariant-from-seifert-form|The quadratic function and Arf convention]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The integral skew part and unimodular intersection form]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot, a connected genus-$g$ spanning surface, and its Seifert matrix $V$.

[A1] Full AC supplies the chosen integral homology basis and Seifert pairing. [[def-axiom-of-choice]], [[def-knot-seifert-pairing-and-matrix]]

[F1] $H_1(F;\mathbb Z)$ is free of rank $2g$, and reduction modulo two identifies $H_1(F;\mathbb Z)\otimes\mathbb F_2$ with $H_1(F;\mathbb F_2)$. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] $V-V^T=J_F$, where $J_F$ is the unimodular integral intersection matrix. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F3] An elementary enlargement adds a symplectic pair whose mod-two Seifert self-values are $(z,0)$ for some integer $z$. [[def-seifert-matrix-s-equivalence]]

## Proof

1.1 If two integral coordinate vectors $x,x'$ represent the same class modulo two, then $x'=x+2y$ for an integral vector $y$, and $$(x+2y)^TV(x+2y)-x^TVx=2x^TVy+2y^TVx+4y^TVy$$ is even. Thus $x^TVx\pmod2$ is well-defined. Expanding the quadratic expression gives $$q_F(x+y)-q_F(x)-q_F(y)=x^T(V+V^T)y\pmod2=x^T(V-V^T)y=x\cdot_Fy,$$ where plus and minus agree in $\mathbb F_2$. By [F2], this alternating form is nondegenerate. [A1, F1, F2, given, algebra]

2.1 In a symplectic basis, every vector is uniquely $x=\sum_i(\alpha_i a_i+\beta_i b_i)$ with $\alpha_i,\beta_i\in\mathbb F_2$. The refinement identity gives $$q_F(x)=\sum_i\bigl(\alpha_iq_F(a_i)+\beta_iq_F(b_i)+\alpha_i\beta_i\bigr).$$ Therefore the finite Gauss sum factors as $$\sum_{x\in H_1(F;\mathbb F_2)}(-1)^{q_F(x)}=\prod_i\sum_{a,b\in\mathbb F_2}(-1)^{a q_F(a_i)+b q_F(b_i)+ab}=2^g(-1)^{\sum_iq_F(a_i)q_F(b_i)}.$$ The left side depends only on $q_F$, not on a basis, so the exponent defining the Arf value is basis-independent. [step 1.1, given, algebra]

3.1 Under either enlargement in [F3], the new basis vectors $u,v$ have $u\cdot v=1$, $q(u)=z\pmod2$, and $q(v)=0$; moreover $v$ is orthogonal to all old basis vectors because its encircling disk misses them. If $u$ pairs nontrivially with old basis vectors, add a linear combination of the old symplectic basis to $u$ to obtain $u'$ orthogonal to all of them; the nondegenerate old intersection matrix gives the required coefficients, and $u'\cdot v=1$ remains unchanged. The old basis together with $u',v$ is symplectic; its new Arf contribution is $q(u')q(v)=0$, while the old $q$-values are unchanged. More precisely, put $u''=u'+q(u')v$. The refinement identity and $q(v)=0$, $u'\cdot v=1$ give $q(u'')=q(u')+q(u')=0$, while $u''\cdot v=1$ and both $u'',v$ remain orthogonal to the old subspace. Thus the enlarged quadratic space is isometric to the old one orthogonally summed with the hyperbolic plane $q_H(s,t)=st$: on $su''+tv$ the value is $st$. An integral congruence reduces to an invertible mod-two coordinate change and hence an isometry of quadratic spaces. Consequently, the stable isometry class is invariant under congruences, enlargements and their reverses. Here stable isometry means isometry after adjoining finitely many copies of $q_H$ on either side. Thus the Gauss-sum Arf value is unchanged by enlargement or reduction. By the knot-matrix S-equivalence lemma, all spanning surfaces give the same value. [F1, F2, F3, step 2.1, algebra] ∎

