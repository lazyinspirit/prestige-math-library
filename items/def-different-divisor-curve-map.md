---
id: def-different-divisor-curve-map
kind: definition
title: "The different divisor of a generically separable morphism of curves"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-canonical-line-bundle-curve
  - def-composition-series-and-length-of-a-module
  - def-divisor-smooth-proper-curve
  - def-finite-morphism-schemes
  - def-ramification-and-branch-points
  - def-ramification-index-curve-map
  - def-sheaf-relative-differentials
  - lem-curve-different-local-support-and-index-bound
  - thm-local-ring-smooth-curve-dvr
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be any field
and let $f:C\to D$ be a finite surjective morphism of
smooth proper geometrically integral curves over $k$
([[def-algebraic-curve-over-field]], [[def-finite-morphism-schemes]])
whose function-field extension $k(C)/k(D)$ is separable. Let
$\Omega_{C/D}$ be the sheaf of relative differentials
([[def-sheaf-relative-differentials]]). By
[[lem-curve-different-local-support-and-index-bound]] the sheaf
$\Omega_{C/D}$ is a coherent $\mathcal O_C$-module of torsion with finite
support: it vanishes at the generic point, and at every closed point $p$ of
$C$ the stalk $\Omega_{C/D,p}$ is a finite-length module over the discrete
valuation ring $\mathcal O_{C,p}$ ([[thm-local-ring-smooth-curve-dvr]],
[[def-composition-series-and-length-of-a-module]]). Put
$$l_p:=\operatorname{length}_{\mathcal O_{C,p}}\bigl(\Omega_{C/D,p}\bigr)\in\mathbb Z_{\ge0}.$$

The **different divisor of $f$** is the divisor
$$R_f:=\sum_{p\in C\text{ closed}}l_p\,[p]$$
on $C$ ([[def-divisor-smooth-proper-curve]]). It is well defined: each $l_p$
is a nonnegative integer, and $l_p=0$ for all but finitely many closed points
$p$, so the sum is finite and $R_f\ge0$ is an effective divisor on $C$. The
definition depends only on $f$, since the relative differentials and the
lengths $l_p$ are attached to $f$.

By [[lem-curve-different-local-support-and-index-bound]] the coefficient $l_p$
satisfies $l_p\ge e_p-1$ for the ramification index $e_p$ of $f$ at $p$
([[def-ramification-index-curve-map]]), and $l_p=0$ exactly when $e_p=1$ and
the residue extension $\kappa(p)/\kappa(f(p))$ is separable. Consequently
$$\operatorname{Supp}(R_f)=\operatorname{Supp}(\Omega_{C/D})=\{p\in C:p\text{ is closed and }(e_p>1\text{ or }\kappa(p)/\kappa(f(p))\text{ is inseparable})\},$$
the differential-ramification locus of $f$
([[def-ramification-and-branch-points]]); it contains the index-ramification
locus $\{p\in C:p\text{ is closed and }e_p>1\}$ and agrees with it when $k$ is perfect, while over an
imperfect field a point with $e_p=1$ and inseparable residue extension is in
$\operatorname{Supp}(R_f)$ but not in the index locus. The
**different** $R_f$ is the divisor-theoretic correction term in the
canonical-bundle comparison between $\omega_C$ and the pullback of $\omega_D$
([[def-canonical-line-bundle-curve]]); the comparison is stated in the
companion canonical-bundle theorem.
