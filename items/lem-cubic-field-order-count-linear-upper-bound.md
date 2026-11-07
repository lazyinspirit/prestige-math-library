---
id: lem-cubic-field-order-count-linear-upper-bound
kind: lemma
title: "Linear upper bound for cubic field orders"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-integral-binary-cubic-form
  - thm-delone-faddeev-cubic-rings-and-binary-cubic-forms
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-iwasawa-decomposition-for-sl2-r
  - lem-lattice-point-count-in-a-box-from-a-lattice-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "Theorem 6 and §§5.1–5.3; the linear upper bound is proved below using the compact averaging construction and a crude enclosing box."
---

## Statement

Assume AC. Let $N(X)$ be the number of isomorphism classes of orders in cubic number fields whose absolute discriminant is less than $X$. There is an absolute constant $C>0$ such that $N(X)\le CX$ for every $X>0$. No asymptotic constant is asserted.

## Facts & Assumptions

**Given:** AC and $X>0$.

[F1] Integral binary cubic forms, with the determinant-twisted $\operatorname{GL}_2(\mathbb Z)$ action, are in discriminant-preserving bijection with cubic rings; the irreducible forms correspond exactly to orders in cubic number fields. [[def-integral-binary-cubic-form]] [[thm-delone-faddeev-cubic-rings-and-binary-cubic-forms]]

[F2] The standard modular region $|\Re z|\le\frac12$, $|z|\ge1$ covers the $\operatorname{PSL}_2(\mathbb Z)$ orbits on the upper half-plane, with only boundary identifications. In $n(u)a(t)k$ coordinates, Haar measure on $\operatorname{SL}_2(\mathbb R)$ is a constant multiple of $t^{-2}\,du\,d^\times t\,dk$, and the group is unimodular. [[thm-standard-fundamental-domain-for-the-modular-group]] [[thm-iwasawa-decomposition-for-sl2-r]]

[F3] A coordinate box with side radii $R_j$ contains at most $\prod_j(2\lfloor R_j\rfloor+1)$ integral points. [[lem-lattice-point-count-in-a-box-from-a-lattice-basis]]

[A1] AC is assumed for the countable and measurable constructions used here. [[def-axiom-of-choice]]

## Proof

1.1 Write $V_+$ and $V_-$ for the real binary cubics of positive and negative discriminant, with the determinant-twisted action extended to $G=\operatorname{GL}_2^+(\mathbb R)$. Each $V_\epsilon$ is one $G$-orbit, and a point stabilizer is finite: a nondegenerate cubic has three distinct projective roots, and its stabilizer injects into their permutation group. For transitivity, send the three roots of one form to those of another by the unique real projective transformation determined by a compatible ordering. For positive discriminant all roots are real; for negative discriminant one is real and the other two are complex conjugates. Interchanging a suitable pair changes the orientation, so an orientation-preserving transformation is available. The remaining nonzero scalar is supplied by a positive scalar matrix, and $-I\in\operatorname{SL}_2(\mathbb R)$ changes the sign of a cubic. Fix $v_\epsilon\in V_\epsilon$. [F1, algebra]

2.1 By [F2], a measurable left fundamental region $F$ for $\operatorname{SL}_2(\mathbb Z)\backslash G$ is contained, apart from boundary choices, in the set $n(u)a(t)\lambda k$ where $|u|\le1/2$, $t\ge t_0>0$, $\lambda>0$, $k\in\operatorname{SO}(2)$, $n(u)=\left(\begin{smallmatrix}1&u\\0&1\end{smallmatrix}\right)$ and $a(t)=\operatorname{diag}(t,t^{-1})$. Haar measure there is a constant multiple of $t^{-2}du\,d^\times t\,d^\times\lambda\,dk$. Choose a compact positive-Haar-measure neighborhood $H\subset G$ of the identity. Its orbit image $B=Hv_\epsilon$ has uniformly bounded coefficients, and its absolute discriminant has a positive lower bound $\delta$. [A1, F2, step 1.1, construct, algebra]

3.1 For each $h\in H$, every $\operatorname{SL}_2(\mathbb Z)$-orbit of irreducible integral forms in $V_\epsilon$ with discriminant below $X$ has a representative, counted with positive multiplicity, in $Fhv_\epsilon$: write a representative as $g hv_\epsilon$ using step 1.1 and reduce the left coset of $g$ into $F$. Integrate this count over $h\in H$. For each fixed integral form $x=g_xv_\epsilon$, the equality $x=ghv_\epsilon$ is equivalent to $h=g^{-1}g_xs$ for one of finitely many $s$ in the stabilizer of $v_\epsilon$. Unimodularity and the substitution $h=g^{-1}g_xs$ interchange the $F$ and $H$ integrals, including these finite multiplicities. Consequently the number of such integral orbits is at most a fixed constant times the integral over $g\in F$ of the number of integral forms in $gB$ of absolute discriminant below $X$. [A1, F2, step 1.1, step 2.1, algebra]

4.1 For $g=n(u)a(t)\lambda k$ and $w\in B$, direct substitution in the twisted action, with $|u|\le1/2$ and $t\ge t_0$, bounds the coefficients $(a,b,c,d)$ of $gw$ by $|a|\le A\lambda t^3$, $|b|\le A\lambda t$, $|c|\le A\lambda t^{-1}$ and $|d|\le A\lambda t^{-3}$ for one constant $A$. If the integral form is irreducible then $d\ne0$, because otherwise $x$ divides it. Therefore its contribution vanishes unless $A\lambda t^{-3}\ge1$. Also $|\operatorname{Disc}(gw)|=\lambda^4|\operatorname{Disc}(w)|\ge\delta\lambda^4$, so the discriminant restriction implies $\lambda\le(X/\delta)^{1/4}$. [F1, step 2.1, step 3.1, algebra]

5.1 On the remaining region $t^3\le A\lambda$ and $t\ge t_0$, all four coefficient radii are bounded below by positive constants depending only on $A,t_0$. The enclosing box therefore contains at most $A'(\lambda t^3)(\lambda t)(\lambda t^{-1})(\lambda t^{-3})=A'\lambda^4$ integral points by [F3]. Integrating the bound from step 3.1 gives a constant multiple of $\int_0^{(X/\delta)^{1/4}}\lambda^4\,d^\times\lambda\int_{t_0}^{\infty}t^{-2}\,d^\times t$, which is $O(X)$; the $u$ and $k$ ranges have bounded measure. This bounds the number of $\operatorname{SL}_2(\mathbb Z)$-orbits for either discriminant sign. The $\operatorname{GL}_2(\mathbb Z)$-orbit count is no larger, so [F1] proves $N(X)\le CX$ for one constant $C$ and all $X>0$. [F1, F2, F3, step 3.1, step 4.1, algebra] ∎
