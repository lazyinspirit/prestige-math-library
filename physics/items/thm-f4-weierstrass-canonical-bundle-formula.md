---
id: thm-f4-weierstrass-canonical-bundle-formula
kind: theorem
title: "Canonical bundle of a Weierstrass hypersurface"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited only through the compact Calabi–Yau convention supplier; the local weighted-adjunction calculation uses no additional choice."
deps:
  - def-f4-weierstrass-model-on-a-line-bundle
  - def-gts-compact-calabiyau-manifold-conventions
  - def-axiom-of-choice
dependency_roles:
  def-f4-weierstrass-model-on-a-line-bundle: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§2.2, printed pp. 10–11, equations (2.50)–(2.60); holomorphic line-bundle twists, weighted projective bundle, and canonical-class calculation; §3.1, printed pp. 14–15, equations (3.3)–(3.6), for the section."
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: "https://arxiv.org/pdf/1401.7844v2"
      locator: "§2 for the Jacobian/genus-one distinction and §5.1, printed pp. 15–16, equations (32)–(36), for the weighted Weierstrass hypersurface, section, and singular-fiber qualifications."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $B$ be a smooth complex algebraic variety, let $B^{\mathrm{an}}$ be its associated complex manifold, and let $L\to B^{\mathrm{an}}$ be a holomorphic line bundle. Let $p:W\to B^{\mathrm{an}}$ and $Y\subset W$ be the analytic weighted projective bundle and hypersurface defined in [[def-f4-weierstrass-model-on-a-line-bundle]], with equation $y^2=x^3+fxz^4+gz^6$, $f\in H^0(B^{\mathrm{an}},L^{\otimes4})$, and $g\in H^0(B^{\mathrm{an}},L^{\otimes6})$. The hypersurface lies in the smooth locus of $W$ and is Cartier there, so its analytic dualizing sheaf $\omega_Y$ is invertible. It satisfies
$$\omega_Y\cong p_Y^*(K_{B^{\mathrm{an}}}\otimes L),$$
where $p_Y:Y\to B^{\mathrm{an}}$ is the projection and $K_{B^{\mathrm{an}}}:=\det\Omega^1_{B^{\mathrm{an}}/\mathbb C}$ is the holomorphic canonical line bundle. In particular, if $L\cong K_{B^{\mathrm{an}}}^{-1}$ then $\omega_Y\cong\mathcal O_Y$. This is an analytic dualizing-sheaf calculation and does not imply that $Y$ is smooth, connected, or compact Kähler. If those additional conditions hold, the library's broad Calabi–Yau convention is connected compact Kähler with holomorphically trivial canonical bundle.

## Statement references

[[def-f4-weierstrass-model-on-a-line-bundle]]

[[def-gts-compact-calabiyau-manifold-conventions]]

## Facts & Assumptions

**Given:** A smooth complex algebraic variety $B$, its associated complex manifold $B^{\mathrm{an}}$, a holomorphic line bundle $L\to B^{\mathrm{an}}$, and the weighted projective hypersurface with the coordinate twists and equation in the Statement.

[A1] Full AC is inherited through the broad Calabi–Yau convention when that convention is invoked; the local canonical-sheaf computation itself does not use choice ([[def-axiom-of-choice]]).

[F1] The analytic weighted projective bundle, its local transition maps, and the tautological twists on its smooth locus are as defined in [[def-f4-weierstrass-model-on-a-line-bundle]]. The bundle projection is $p:W\to B^{\mathrm{an}}$.

[F2] In this item $K_{B^{\mathrm{an}}}$ is defined in the Statement as the determinant of the holomorphic cotangent bundle. The broad Calabi–Yau convention separately requires a connected compact Kähler manifold with holomorphically trivial canonical bundle ([[def-gts-compact-calabiyau-manifold-conventions]]).

[F3] On the smooth complex manifold $W^\circ$ containing $Y$, a Cartier hypersurface is locally cut out by a nonzerodivisor. In the analytic local-complete-intersection convention, its invertible dualizing line is the first Ext module of its structure sheaf into the ambient analytic dualizing line; the explicit two-term resolution computes this Ext in step 2.1.

## Proof

**Proof technique:** compute the relative canonical line on the smooth ambient locus and apply hypersurface adjunction.

1.1 On a trivializing analytic open set for $L$, the weighted projective bundle is the quotient of $\mathbb C^3\setminus\{0\}$ by the action $\lambda\cdot(x,y,z)=(\lambda^2x,\lambda^3y,\lambda z)$. On $W^\circ$ the vertical Euler sequence is
$$0\longrightarrow\mathcal O_{W^\circ}\longrightarrow \bigl(\mathcal O_W(2)\otimes p^*L^2\bigr)\oplus\bigl(\mathcal O_W(3)\otimes p^*L^3\bigr)\oplus\mathcal O_W(1)\longrightarrow T_{W^\circ/B^{\mathrm{an}}}\longrightarrow0.$$
Indeed the first map is tangent to the scaling orbit, with local vector $2x\partial_x+3y\partial_y+z\partial_z$, and the quotient by that orbit is the vertical tangent bundle; the transitions in [[def-f4-weierstrass-model-on-a-line-bundle]] give the displayed line-bundle factors. Taking determinants gives $\det T_{W^\circ/B^{\mathrm{an}}}\cong\mathcal O_W(6)\otimes p^*L^{\otimes5}$, hence $\omega_{W^\circ/B^{\mathrm{an}}}\cong\mathcal O_W(-6)\otimes p^*((L^\vee)^{\otimes5})$. [F1, given, construct]

1.2 If $z\ne0$, the weight-one coordinate gives a smooth analytic chart. If $z=0$ on $Y$, then $y^2=x^3$; neither $x$ nor $y$ can vanish, so the stabilizer is $\mu_2\cap\mu_3=\{1\}$. Thus $Y\subset W^\circ$. The defining section is not identically zero on any component, since the local homogeneous polynomial has distinct $y^2$ and $x^3$ terms with coefficient $1$. The local rings of the smooth analytic ambient $W^\circ$ are domains, so this section is a nonzerodivisor along $Y$ and cuts out a Cartier hypersurface. [F1, given, algebra]

2.1 Let $M=\mathcal O_W(6)\otimes p^*L^{\otimes6}$, the holomorphic line bundle of the defining section. In a local analytic trivialization of $M$ and $\omega_{W^\circ}$, write the equation as a nonzerodivisor $f$ in the regular analytic local ring $A$. The resolution $0\to A\xrightarrow{f}A\to A/(f)\to0$ gives $\operatorname{Ext}^1_A(A/(f),A)=A/(f)$; restoring the line-bundle trivializations identifies the analytic lci dualizing line with $(\omega_{W^\circ}\otimes M)|_Y$. The ambient canonical line on $W^\circ$ is $\omega_{W^\circ}=\omega_{W^\circ/B^{\mathrm{an}}}\otimes p^*K_{B^{\mathrm{an}}}$. Substituting step 1.1 and $M$ gives $\mathcal O_W(-6)\otimes p^*((L^\vee)^{\otimes5})\otimes p^*K_{B^{\mathrm{an}}}\otimes\mathcal O_W(6)\otimes p^*L^{\otimes6}$, which restricts to $p_Y^*(K_{B^{\mathrm{an}}}\otimes L)$. Hence $L\cong K_{B^{\mathrm{an}}}^{-1}$ makes the analytic dualizing sheaf trivial. [F2, F3, step 1.1, step 1.2, algebra]

3.1 The broad convention in [F2] requires smoothness, connectedness, compactness, a Kähler form, and a holomorphic trivialization of the canonical line bundle. Step 2.1 supplies only the last line-bundle condition when $L\cong K_{B^{\mathrm{an}}}^{-1}$; therefore the result does not by itself identify a singular Weierstrass hypersurface with a Calabi–Yau manifold in that convention. [A1, F2, step 2.1] ∎

## Remarks

The projection of the hypersurface factors through its weighted ambient bundle:

```tikzcd
Y \arrow[rr, hook] \arrow[dr, "p_Y"'] && W \arrow[dl, "p"] \\
& B &
```

The triangle commutes because $p_Y$ is the restriction of $p$ to $Y$. It records the maps used in adjunction and does not assert that $Y$ is smooth.
