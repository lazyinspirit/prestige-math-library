---
id: def-gts-gamma-bmt-and-brill-noether-data
kind: definition
title: Gamma-BMT inequality and curve Brill–Noether number
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
deps:
  - def-derived-category-of-an-abelian-category
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Soheyla Feyzbakhsh, Naoki Koseki, Zhiyu Liu, and Nick Rekuski, Stability conditions on Calabi-Yau threefolds via Brill-Noether theory of curves
      url: https://arxiv.org/pdf/2509.24990v2
      locator: §§2.1–2.4, especially §2.3 for the tilted heart and tilt slope; Definition 1.2, Theorems 1.3–1.4, and Conjecture 5.9
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

Let $X$ be a smooth projective complex threefold and $H$ an ample Cartier divisor. For $i\ge0$, $\operatorname{CH}_i(X)_\mathbb Q$ is the rational vector space of dimension-$i$ algebraic cycles modulo rational equivalence, and $\operatorname{CH}_i(X)_\mathbb R=\operatorname{CH}_i(X)_\mathbb Q\otimes_\mathbb Q\mathbb R$. For this smooth threefold, $\operatorname{CH}^j(X)_\mathbb Q=\operatorname{CH}_{3-j}(X)_\mathbb Q$; smoothness gives the Chow intersection product, and the degree map sends a zero-cycle to its degree. Let $K_0(X)$ be the Grothendieck group of coherent sheaves and $\tau_X:K_0(X)\to\operatorname{CH}_*(X)_\mathbb Q$ the source Grothendieck–Riemann–Roch transformation. Since $X$ is smooth, its Todd class $\operatorname{td}(X)$ is the Todd class of its tangent bundle, and the source Chern character is $\operatorname{ch}(E)=\operatorname{td}(X)^{-1}\cap\tau_X([E])$. For a bounded coherent complex, $[E]=\sum_j(-1)^j[\mathcal H^j(E)]$ in $K_0(X)$. Let $E\in D^b(\operatorname{Coh}X)$, the bounded derived category of coherent sheaves. Write $\operatorname{ch}_i(E)$ for the codimension-$i$ component, set $\operatorname{ch}^{\beta}(E)=e^{-\beta H}\operatorname{ch}(E)$ for $\beta\in\mathbb R$, and denote its codimension-$i$ component by $\operatorname{ch}^{\beta}_i(E)$. Products with powers of $H$ are Chow intersection numbers followed by degree. For a real divisor class $D$, $\Gamma\cdot D$ is the degree of its intersection with $\Gamma\in\operatorname{CH}_1(X)_\mathbb R$; in particular $H^3>0$. Set
$
\Delta_H(E)=(\operatorname{ch}_1(E)\cdot H^2)^2-2\operatorname{ch}_0(E)H^3(\operatorname{ch}_2(E)\cdot H).
$

For a torsion-free coherent sheaf $F$, its $H$-slope is $\mu_H(F)=\operatorname{ch}_1(F)\cdot H^2/(\operatorname{ch}_0(F)H^3)$; a nonzero torsion sheaf has slope $+\infty$. Use the source Harder–Narasimhan convention to define $\mathcal T_\beta$ as sheaves all of whose slope factors have slope $>\beta$ and $\mathcal F_\beta$ as torsion-free sheaves all of whose slope factors have slope $\le\beta$. The source tilted heart is the extension-closed subcategory $\operatorname{Coh}^{\beta}(X)=\langle\mathcal F_\beta[1],\mathcal T_\beta\rangle_{\mathrm{ext}}$ of $D^b(\operatorname{Coh}X)$. For $w\in\mathbb R$, define
$
\nu_{\beta,w}(E)=\frac{\operatorname{ch}_2(E)\cdot H-w\operatorname{ch}_0(E)H^3}{\operatorname{ch}^{\beta}_1(E)\cdot H^2}
$
when the denominator is positive, and $+\infty$ when it is zero. A nonzero object of this heart is $\nu_{\beta,w}$-semistable if every nonzero proper subobject in the heart has $\nu_{\beta,w}$-slope at most its slope. The numerator uses the untwisted Chern characters. With $w=(\alpha^2+\beta^2)/2$, subtracting the constant $\beta$ from this slope gives the conventional twisted tilt slope $\bigl(\operatorname{ch}^{\beta}_2(E)\cdot H-\alpha^2\operatorname{ch}_0(E)H^3/2\bigr)/(\operatorname{ch}^{\beta}_1(E)\cdot H^2)$, so it has the same semistable objects. Only the source range of $\beta,w$ in the inequality below is used.

For a real one-cycle class $\Gamma\in\operatorname{CH}_1(X)_{\mathbb R}$ with $\Gamma\cdot H\ge0$, the source $\Gamma$-BMT inequality is the assertion that for every
$
w>\frac{\beta^2}{2}+\frac{(\beta-\lfloor\beta\rfloor)(1-\beta+\lfloor\beta\rfloor)}{2}
$
and every $\nu_{\beta,w}$-semistable $E\in\operatorname{Coh}^{\beta}(X)$,
$
0\le Q^\Gamma_{\beta,w}(E):=(2w-\beta^2)\left(\Delta_H(E)+\frac{3\Gamma\cdot H}{H^3}\big(\operatorname{ch}^{\beta}_0(E)H^3\big)^2\right)+2\big(\operatorname{ch}^{\beta}_2(E)\cdot H\big)\left(2\operatorname{ch}^{\beta}_2(E)\cdot H-3(\Gamma\cdot H)\operatorname{ch}^{\beta}_0(E)\right)-6\big(\operatorname{ch}^{\beta}_1(E)\cdot H^2\big)\left(\operatorname{ch}^{\beta}_3(E)-\Gamma\cdot\operatorname{ch}^{\beta}_1(E)\right).
$
This definition fixes the source normalization; it does not assert the inequality for any $\Gamma$.

If $C$ is an integral projective curve, its arithmetic genus is $g=1-\chi(\mathcal O_C)$. For a coherent sheaf $E$ on $C$, torsion-free means that no nonzero subsheaf is supported on finitely many points. A positive-rank torsion-free coherent sheaf $E$ has rank equal to its generic rank, degree $\deg(E)=\chi(E)-\operatorname{rk}(E)\chi(\mathcal O_C)$, and slope $\deg(E)/\operatorname{rk}(E)$ when its rank is positive. Such a torsion-free sheaf is slope-stable when every nonzero proper subsheaf of positive rank has strictly smaller slope. On a smooth curve, torsion-free coherent sheaves are vector bundles. The source Brill–Noether number is
$
\operatorname{BN}_C=\lim_{t\downarrow0}\sup\left\{\frac{h^0(E)}{\operatorname{rk}(E)}:E\text{ is a positive-rank slope-stable torsion-free sheaf on }C,\ \frac{\deg(E)}{\operatorname{rk}(E)}\in(g-1-t,g-1+t)\right\},
$
with the limit and supremum convention of the source. In fact every displayed window is nonempty. The integral complex curve has a nonempty smooth locus; choose a smooth closed point $p$. The invertible sheaf $\mathcal O_C((g-1)p)$ has rank one and degree $g-1$: adding or subtracting a copy of the smooth Cartier point changes its Euler characteristic by one. A nonzero proper subsheaf of positive rank in this line has a nonzero finite-length quotient, so its degree is strictly smaller. The line is therefore slope-stable and belongs to every window with $t>0$. Shrinking the windows decreases their nonnegative suprema, so the displayed limit is their infimum in $[0,+\infty]$; no empty supremum is needed. For a smooth divisor $S\in|H|$, $|H|_S|$ denotes the complete linear system of the restricted line bundle $\mathcal O_S(H)$, and $\chi(\mathcal O_X(H))=\sum_i(-1)^i\dim_\mathbb C H^i(X,\mathcal O_X(H))$.

## Definition references

[[def-derived-category-of-an-abelian-category]]
