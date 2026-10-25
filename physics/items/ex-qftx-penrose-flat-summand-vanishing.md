---
id: ex-qftx-penrose-flat-summand-vanishing
kind: example
title: Flat summands in coupled Penrose vanishing
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere-examples
dependency_level: 7
axiom_base: "ZF + full AC inherited from the conditional theorem inputs."
deps:
  - lem-qftx-coupled-penrose-injective-edge
  - lem-qftx-coupled-penrose-operator-coefficient
  - thm-qftx-coupled-penrose-vanishing
dependency_roles:
  lem-qftx-coupled-penrose-injective-edge: mathematical-premise
  lem-qftx-coupled-penrose-operator-coefficient: mathematical-premise
  thm-qftx-coupled-penrose-vanishing: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§2–3, printed pp. 46–56: coupled vanishing and its componentwise fibre transform."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§3, printed pp. 488–494: coupled operator and Bochner positivity."
verification:
  precheck: pass
---

## Example

Assume full AC and use $Z=\mathbb CP^3$ with $\pi:Z\to S^4$ the fixed incidence fibration: its finite fibres in the positively oriented stereographic chart satisfy $\mu_1=z_1\lambda_1-\bar z_2\lambda_2$ and $\mu_2=z_2\lambda_1+\bar z_1\lambda_2$, and its fibre at infinity is $\lambda_1=\lambda_2=0$. Let $E_0\to S^4$ be any smooth finite-rank Hermitian bundle with a smooth unitary connection $A_0$ whose curvature obeys $F_{A_0}^+=(F_{A_0}+*_gF_{A_0})/2=0$. Let $F_0$ be a finite-rank holomorphic bundle smoothly isometrically identified with $\pi^*E_0$ whose Dolbeault operator has the coefficientwise vertical Dolbeault component and the component $\nabla_{A_0}$ along the projected complex alpha-planes. For any integer $m\ge0$, set $E=E_0\oplus(S^4\times\mathbb C^m)$ with the direct-sum Hermitian metric and connection $A=A_0\oplus d$, and set $F=F_0\oplus\mathcal O_Z^{\oplus m}$ with the induced holomorphic Dolbeault operator and direct-sum metric. Then $H^1(Z,F\otimes\mathcal O_Z(-2))=H^1(Z,F^\vee\otimes\mathcal O_Z(-2))=0$. For the fibre-harmonic projection defined by the induced Fubini–Study and product metrics, the transform and its dual decompose as $\mathcal P_A=\mathcal P_{A_0}\oplus\mathcal P_d$; the second summand acts componentwise on the trivial rank-$m$ bundle. Thus adjoining any finite flat summand preserves the coupled vanishing conclusion, including $m=0$.

## Example references

[[thm-qftx-coupled-penrose-vanishing]]

[[lem-qftx-coupled-penrose-injective-edge]]

[[lem-qftx-coupled-penrose-operator-coefficient]]

[Rawnsley, §§2–3, pp. 46–56](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §3, pp. 488–494](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** Full AC, the unit round sphere, the compatible data $(E_0,A_0,F_0)$ in the example, their direct sum with the trivial Hermitian rank-$m$ bundle and connection, and the analytic comparison used by the coupled theorem.

[A1] The theorem uses the local analytic Dolbeault-resolution comparison with its full AC and holomorphic-bundle hypotheses; no algebraic GAGA or independent general Penrose theorem is supplied as a premise. [[thm-qftx-coupled-penrose-vanishing]]

[F1] The coupled theorem asserts both twists vanish for every finite-rank unitary ASD bundle, including reducible and flat bundles, under the stated Ward Dolbeault hypotheses. [[thm-qftx-coupled-penrose-vanishing]]

[F2] The transform is defined by fibrewise harmonic projection, and its correction is the unique solution of a fibrewise Dolbeault equation; the local operator is $\nabla_A^*\nabla_A+2$. [[lem-qftx-coupled-penrose-injective-edge]], [[lem-qftx-coupled-penrose-operator-coefficient]]

## Verification

**Given:** The example data, the exact coupled theorem [F1], and the transform construction [F2].

1.1 The trivial connection $d$ preserves the standard Hermitian metric and has zero curvature. Therefore $A=A_0\oplus d$ preserves the direct-sum metric and has curvature $F_A=F_{A_0}\oplus0$, so $F_A^+=0$. The smooth isometric identifications give $F=F_0\oplus\mathcal O_Z^{\oplus m}\cong\pi^*E$; its vertical and horizontal Dolbeault components are respectively the coefficientwise vertical operator and $\nabla_{A_0}\oplus d=\nabla_A$ on the projected alpha-planes. Thus the entire direct-sum data meet [F1]'s hypotheses, including full AC. Applying [F1] to this $F$ gives both asserted vanishings for $F$ and $F^\vee=F_0^\vee\oplus\mathcal O_Z^{\oplus m}$. When $m=0$ this is precisely the theorem for $(E_0,A_0,F_0)$, with no assumption that $E_0$ has rank zero. [given, A1, F1, algebra]

2.1 The global Dolbeault differential acts componentwise on a finite direct sum, so its closed forms and exact forms split, giving the corresponding direct-sum decomposition of the cohomology quotient in [A1]. On each fibre the Dolbeault operator and its adjoint preserve the orthogonal summands, hence their Laplacian, its harmonic kernel and its orthogonal projection split. The normalized scalar harmonic generator in [F2] is the same for every bundle component; therefore the coefficient extraction gives $\mathcal P_A=\mathcal P_{A_0}\oplus\mathcal P_d$. The unique vertical primitive and mixed correction in [F2] also split because their equations split and each has a unique solution. Applying the same argument to $F^\vee=F_0^\vee\oplus\mathcal O_Z^{\oplus m}$ gives $\mathcal P_{A^\vee}=\mathcal P_{A_0^\vee}\oplus\mathcal P_{d^\vee}$. In a standard constant frame of the trivial summand each operation acts on its $m$ scalar components separately, including the empty summand when $m=0$. Together with step 1.1 this verifies all the claims. [A1, F2, step 1.1, algebra] ∎
