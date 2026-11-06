---
id: def-f4-weierstrass-model-on-a-line-bundle
kind: definition
title: "Weierstrass model over a line bundle"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited only through the broad Calabi–Yau convention supplier; the analytic line-bundle and weighted-projective constructions add no choice use."
deps:
  - def-f4-genus-one-fibration
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-gts-compact-calabiyau-manifold-conventions
  - def-axiom-of-choice
dependency_roles:
  def-f4-genus-one-fibration: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by:
  - thm-f4-weierstrass-canonical-bundle-formula
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§2.2, printed pp. 10–11, equations (2.50)–(2.60); holomorphic line-bundle twists, weighted projective bundle, and canonical-class calculation; §3.1, printed pp. 14–15, equations (3.3)–(3.6), for the section."
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: "https://arxiv.org/pdf/1401.7844v2"
      locator: "§2 for the Jacobian/genus-one distinction and §5.1, printed pp. 15–16, equations (32)–(36), for the weighted Weierstrass hypersurface, section, and singular-fiber qualifications."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition
Let $B$ be a smooth complex algebraic variety, meaning an integral separated scheme of finite type over $\mathbb C$ that is smooth over $\mathbb C$ as in [[def-f4-genus-one-fibration]], and write $B^{\mathrm{an}}$ for its associated complex manifold. Let $L\to B^{\mathrm{an}}$ be a holomorphic line bundle, and put $E=L^{\otimes2}\oplus L^{\otimes3}\oplus\mathcal O_{B^{\mathrm{an}}}$. The **analytic weighted projective bundle of type $(2,3,1)$** is the coarse complex-analytic quotient
$$W=(E\setminus 0)/\mathbb C^*,\qquad \lambda\cdot(v_2,v_3,v_1)=(\lambda^2v_2,\lambda^3v_3,\lambda v_1),$$
with projection $p:W\to B^{\mathrm{an}}$. Equivalently, choose an analytic-open cover $(U_i)$ trivializing $L$ and holomorphic frames $e_i$ with $e_j=\gamma_{ij}e_i$. The bundle is glued from $U_i\times\mathbb P^{\mathrm{an}}(2,3,1)$, where $\mathbb P^{\mathrm{an}}(2,3,1)=(\mathbb C^3\setminus\{0\})/\mathbb C^*$ for the displayed weighted action, by
$$x_j=\gamma_{ij}^{-2}x_i,\qquad y_j=\gamma_{ij}^{-3}y_i,\qquad z_j=z_i.$$
These holomorphic maps commute with the weighted action and satisfy the cocycle identity. Let $W^\circ$ be the open locus where the weighted action has trivial stabilizer. Since $B^{\mathrm{an}}$ is smooth, $W^\circ$ is a complex manifold. On $W^\circ$, let $\mathcal O_W(n)$ denote the tautological line bundle whose local coordinate sections transform with weight $n$ under the displayed $\mathbb C^*$ action. The stabilizer of any point divides one of $1,2,3$, hence has order dividing $6$; the weight-$6$ character is trivial on every stabilizer, so $\mathcal O_W(6)$ extends as an invertible sheaf to all of $W$. On $W^\circ$ the tautological coordinate sections have twists $x\in\mathcal O_W(2)\otimes p^*L^{\otimes2}$, $y\in\mathcal O_W(3)\otimes p^*L^{\otimes3}$, and $z\in\mathcal O_W(1)$.

A **Weierstrass model over $L$** is the analytic hypersurface $Y\subset W$ with local equation
$$y^2=x^3+f x z^4+g z^6,$$
where $f\in H^0(B^{\mathrm{an}},L^{\otimes4})$ and $g\in H^0(B^{\mathrm{an}},L^{\otimes6})$. If their local coefficients in the frame $e_i$ are $f_i,g_i$, then $f_j=\gamma_{ij}^{-4}f_i$ and $g_j=\gamma_{ij}^{-6}g_i$. Thus each term of the equation transforms by $\gamma_{ij}^{-6}$ and the equation is a section of $\mathcal O_W(6)\otimes p^*L^{\otimes6}$. Its **discriminant section** is $\Delta=4f^3+27g^2\in H^0(B^{\mathrm{an}},L^{\otimes12})$; its analytic zero locus is an effective divisor when $\Delta$ is not identically zero. The point at infinity $[1:1:0]$ is a distinguished holomorphic section: on an overlap its coordinates become $[\gamma_{ij}^{-2}:\gamma_{ij}^{-3}:0]$, which is the same weighted-projective point by scaling with $\lambda=\gamma_{ij}^{-1}$. Every point of $Y$ lies in $W^\circ$: this holds when $z\ne0$, and if $z=0$ the equation forces $x,y\ne0$, so a stabilizer satisfies $\lambda^2=\lambda^3=1$ and is trivial.

If an algebraic line bundle $\mathcal L\to B$ satisfies $L\cong\mathcal L^{\mathrm{an}}$ and $f,g$ are analytifications of algebraic sections of $\mathcal L^{\otimes4}$ and $\mathcal L^{\otimes6}$, choose algebraic frames on a Zariski-open cover trivializing $\mathcal L$ and glue $U_i\times\operatorname{Proj}\mathbb C[x,y,z]$, graded by $\deg x=2$, $\deg y=3$, $\deg z=1$, by the same coordinate transition maps, now with regular invertible $\gamma_{ij}$. This is the algebraic weighted projectivization of $\mathcal L^{\otimes2}\oplus\mathcal L^{\otimes3}\oplus\mathcal O_B$ with weights $(2,3,1)$; its analytification is the analytic bundle above, and the algebraic equation analytifies to $Y$. For holomorphic data that do not arise from algebraic line-bundle and section data, the construction is analytic and no algebraic scheme structure is asserted.

If $\dim_{\mathbb C}B=3$ and $L\cong K_{B^{\mathrm{an}}}^{-1}$, call this the **Calabi–Yau Weierstrass specialization**; the theorem below proves that its invertible analytic dualizing sheaf is trivial. This name does not assert smoothness of $Y$.

## Definition references

[[def-f4-genus-one-fibration]]

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[thm-f4-weierstrass-canonical-bundle-formula]]

[T. Weigand, TASI Lectures, §2.2, equations (2.50)–(2.60), and §3.1](https://arxiv.org/pdf/1806.01854v1)

[V. Braun and D. R. Morrison, §2 and §5.1](https://arxiv.org/pdf/1401.7844v2)

## Remarks

The discriminant formula fixes its vanishing locus only up to the conventional nonzero scalar factor. A nonzero discriminant section gives a divisor; if $\Delta\equiv0$, the analytic zero locus is the whole base and is not called a divisor here. The general hypersurface is not asserted to be flat or smooth over every point of $B^{\mathrm{an}}$. The broad Calabi–Yau convention requires a connected compact Kähler manifold with holomorphically trivial canonical bundle; triviality of the analytic dualizing sheaf of a possibly singular hypersurface alone does not meet that definition.

The extension of $\mathcal O_W(6)$ can be seen on each weighted-projective fiber. The degree-six homogeneous sheaf on $\mathbb P(2,3,1)$ is trivialized on the standard opens $x\ne0$, $y\ne0$, and $z\ne0$ by the nonvanishing monomials $x^3$, $y^2$, and $z^6$, respectively. On overlaps their ratios are invertible degree-zero functions. These opens cover the fiber, so the degree-six homogeneous sheaf is a line bundle there. The base transition maps $(x_i,y_i,z_i)\mapsto(\gamma_{ij}^{-2}x_i,\gamma_{ij}^{-3}y_i,z_i)$ are graded automorphisms and therefore glue these local line bundles to $\mathcal O_W(6)$ on all of $W$.
