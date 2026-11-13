---
title: Spherical and stereographic pictures of the D4 arrangement
status: published
research_item: ex-d4-spherical-picture-artin-tits-normalisers
dependency_level: 10
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 28, Figure 1 and caption
      statement: The seven relative planes are intersected with the unit sphere and
        projected stereographically from the north pole. The three line labels
        correspond to the roots alpha_1, alpha_2+alpha_3+alpha_4, and
        alpha_1+alpha_2+alpha_3+alpha_4; the four circle labels correspond to
        alpha_3, alpha_1+alpha_2+alpha_3, alpha_4, and alpha_1+alpha_2+alpha_4.
      hypotheses: The D4 example has central vertex 2 and J={2}; all hyperplanes are
        restricted to Theta_J.
      reading_limits: The frozen article text and the previously recorded figure
        extraction were consulted for attribution. The coordinate verification
        below is local; the article's picture is not used as a proof premise.
---

PDF p. 28: ` Figure 1 and caption `

## Prerequisites

- [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)
- [math:ex-stereographic-projection-formulas-on-the-unit-sphere](https://alphabetamath.cc/item/ex-stereographic-projection-formulas-on-the-unit-sphere)


## Example

In the $D_4$ example with central vertex $2$ and $J=\{2\}$, intersect the seven relative planes in $\Theta_J$ with a unit sphere and project from its north pole to a plane. One coordinate choice gives the following line labels: $H_1=H_{\alpha_1}$, $H_2=H_{\alpha_2+\alpha_3+\alpha_4}$, and $H_3=H_{\alpha_1+\alpha_2+\alpha_3+\alpha_4}$. The circle labels are $H_4=H_{\alpha_3}$, $H_5=H_{\alpha_1+\alpha_2+\alpha_3}$, $H_6=H_{\alpha_4}$, and $H_7=H_{\alpha_1+\alpha_2+\alpha_4}$. Here each $H_\beta$ denotes its restriction to $\Theta_J$.

## Example references

[ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)

[math:ex-stereographic-projection-formulas-on-the-unit-sphere](https://alphabetamath.cc/item/ex-stereographic-projection-formulas-on-the-unit-sphere)

## Facts & Assumptions

[F1] For $f\in\Theta_J$, set $x=f(\alpha_1)$, $y=f(\alpha_3)$, and $z=f(\alpha_4)$. These are coordinates, and the seven relative planes are the kernels of $x,y,z,x+y,x+z,y+z,x+y+z$, with root labels as in [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers).

[F2] For the unit sphere $X^2+Y^2+Z^2=1$, stereographic projection from $(0,0,1)$ has inverse $(u,v)\mapsto(2u,2v,u^2+v^2-1)/(1+u^2+v^2)$, as in [math:ex-stereographic-projection-formulas-on-the-unit-sphere](https://alphabetamath.cc/item/ex-stereographic-projection-formulas-on-the-unit-sphere).

## Verification



**Given:** The planes and projection in the Example.

**Goal:** Verify the stated line and circle labels for an explicit coordinate choice.

1.1 Choose coordinates $X=x$, $Y=(y+z)/\sqrt2$, and $Z=(y-z)/\sqrt2$ on $\Theta_J$, and use their standard Euclidean unit sphere. This is an invertible coordinate change. In the label order of the Example, the seven plane equations become $X=0$, $Y=0$, $X+\sqrt2Y=0$, $Y+Z=0$, $\sqrt2X+Y+Z=0$, $Y-Z=0$, and $\sqrt2X+Y-Z=0$. [F1, given]

2.1 A plane $aX+bY+cZ=0$ intersects the sphere in a great circle, meaning the intersection with a plane through the origin. Substitution of the inverse projection gives $2au+2bv+c(u^2+v^2-1)=0$. If $c=0$, its image is a line; if $c\ne0$, completing squares gives $(u+a/c)^2+(v+b/c)^2=1+(a^2+b^2)/c^2$, a nonempty circle. In step 1.1 the first three equations have $c=0$ and the last four have $c\ne0$. Hence their labels are respectively the three lines and four circles claimed. [F2, step 1.1] ∎

## Source notes

The article reference attributes the pictured labels. The displayed coordinates are one choice realizing those labels; the verification does not assume that the article specifies this coordinate choice.
