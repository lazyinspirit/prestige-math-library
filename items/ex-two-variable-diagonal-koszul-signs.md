---
id: ex-two-variable-diagonal-koszul-signs
kind: example
title: Two-variable diagonal Koszul signs
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-axiom-of-choice, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, def-enveloping-algebra-and-bimodule-module-dictionary, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, cor-polynomial-diagonal-bimodule-hochschild-homology]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, Exercise 9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Assume AC. Let $k$ be a field, $R=k[x,y]$, and let $M$ be a
$k$-central $R$-bimodule. Order the exterior generators as
$\theta_x=\theta_1$ and $\theta_y=\theta_2$. The coefficient Koszul complex
is
$$
0\longrightarrow M\,\theta_x\wedge\theta_y\xrightarrow{d_2}M\theta_x\oplus M\theta_y\xrightarrow{d_1}M\longrightarrow0,
$$
where $d_2(m\theta_x\wedge\theta_y)=-(ym-my)\theta_x+(xm-mx)\theta_y$
and $d_1(a\theta_x+b\theta_y)=(xa-ax)+(yb-by)$. Under the polynomial
Hochschild theorem, its homology is $HH_\bullet(R,M)$.

## Facts & Assumptions

**Given:** AC, a field $k$, $R=k[x,y]$, a $k$-central $R$-bimodule $M$, and the ordered exterior generators $\theta_x,\theta_y$.

[F1] Under AC, the polynomial theorem identifies $HH_j(R,M)$ with the homology of the coefficient Koszul complex. Its differential deletes an increasing wedge factor with sign $(-1)^{r-1}$ and coefficient $x_i m-mx_i$ ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[F2] A $k$-central $R$-bimodule has commuting left and right actions and equal induced scalar actions ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F3] The diagonal Koszul term has the increasing wedge basis and alternating deletion differential; if $\deg x=\deg y=2$, each wedge generator has internal degree $2$ ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F4] For the regular bimodule with $k$ in internal degree $0$, $\deg x=\deg y=2$, and each exterior generator in internal degree $2$, one has $HH_j(R,R)\cong R\{2j\}^{\binom{2}{j}}$ for $0\leq j\leq2$, and $HH_j(R,R)=0$ for $j>2$ ([[cor-polynomial-diagonal-bimodule-hochschild-homology]]).

[F5] AC asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 Specialize the diagonal deletion formula to the ordered two-variable wedge. [F1, F3, given]
For $m\theta_x\wedge\theta_y$, deleting the first factor contributes $(xm-mx)\theta_y$ with positive sign; deleting the second contributes $-(ym-my)\theta_x$. For degree one, deleting either singleton gives $d_1(a\theta_x+b\theta_y)=(xa-ax)+(yb-by)$. This gives exactly the two displayed maps with the stated wedge orientation. [F1, F3, given]

2.1 Verify that the displayed maps compose to zero. [F1, F2, step 1.1, algebra]
Set $u_x(m)=xm-mx$ and $u_y(m)=ym-my$. The bimodule laws in [F2] give $u_xu_y(m)=(xy)m-(xm)y-(ym)x+m(xy)$ and $u_yu_x(m)=(yx)m-(ym)x-(xm)y+m(yx)$. Because $xy=yx$ and the left and right actions commute, these expressions are equal. Hence $d_1d_2(m\theta_x\wedge\theta_y)=-u_xu_y(m)+u_yu_x(m)=0$, which checks the mixed-product cancellation. [F1, F2, step 1.1, algebra]

3.1 Compute the regular-coefficient subcase. [F1, F4, step 1.1, step 2.1, algebra]
If $M=R$ with its regular bimodule structure, commutativity gives $u_x(m)=u_y(m)=0$ for every $m$. Thus both maps vanish. The terms are $R$ in degree zero, $R\theta_x\oplus R\theta_y$ in degree one, and $R\theta_x\wedge\theta_y$ in degree two; there are no higher terms. If $\deg x=\deg y=2$, their internal shifts are respectively $0$, $2$, and $4$. By [F4], this gives $HH_0(R,R)=R$, $HH_1(R,R)=R\{2\}^2$, $HH_2(R,R)=R\{4\}$, and $HH_j(R,R)=0$ for $j\geq3$. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Check endpoints, zero input, grading, and AC use. [F1, F2, F3, step 2.1, step 3.1, given]
Degree zero is the empty wedge term $M$, and degree two is the single top wedge $M\theta_x\wedge\theta_y$; the degree-two differential has zero composite with $d_1$ by step 2.1, and there is no degree-three term. If $M=0$, every term and map is zero. For the graded regular-coefficient subcase in step 3.1, use the standard grading with $\deg x=\deg y=2$ and give each wedge generator internal degree $2$; the displayed maps preserve total internal degree. The general coefficient statement does not require a grading on $M$. AC is used only to apply the polynomial Hochschild theorem and its regular-coefficient corollary; the sign and commutator calculations use no choice. This example asserts no biconditional. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, given] $\square$

## Source comparison

Weibel, *An Introduction to Homological Algebra*, Exercise 9.1.3, printed p.304/PDF p.4, asks for the general polynomial Koszul computation but does not spell out the two-variable signs. Khovanov, “Hochschild homology,” PDF p.1, lines 41–60, states the polynomial resolution and coefficient differential with exterior deletion signs. The explicit orientation, commutator cancellation, and regular-coefficient groups are calculated above.
