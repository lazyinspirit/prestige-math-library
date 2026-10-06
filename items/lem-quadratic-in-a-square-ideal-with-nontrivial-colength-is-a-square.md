---
id: lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square
kind: lemma
title: "Quadratics in square ideals of colength greater than one"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          def-axiom-of-choice, def-dependent-choice, def-derivation-algebra,
                    def-kahler-differentials-algebra, lem-surface-p-basis-subfield-separation,
                    thm-regular-local-rings-are-domains-and-cohen-macaulay]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemma 54.12.1, with the characteristic-two colength calculation supplied"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. If $I\subset\kappa[x,y]$ has colength greater than one and contains a nonzero polynomial $q$ of total degree at most two in $I^2$, then $q$ is a scalar times the square of an affine linear polynomial. Infinite colength is allowed.

## Facts & Assumptions

**Given:** A field $\kappa$, an ideal $I\subset\kappa[x,y]$ of colength greater than one, and a nonzero polynomial $q\in I^2$ of total degree at most two.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-derivation-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings (def-commutative-ring), so that $B$ is an $A$-algebra, and let $M$ be a $B$-module (def-left-and-right-modules). ([[def-derivation-algebra]])

[F4] *def-kahler-differentials-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings and let $\operatorname{Der}_A(B,-)$ be the derivation functor of [[def-derivation-algebra]]. ([[def-kahler-differentials-algebra]])

[F5] *lem-surface-p-basis-subfield-separation.* Assume AC. Let $k$ have characteristic $p>0$, $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ and $K=\operatorname{Frac}A$. Choose a possibly infinite $p$-basis $(b_i)_{i\in I}$ of $k/k^p$, meaning its restricted monomials of finite support form a $k^p$-basis. ([[lem-surface-p-basis-subfield-separation]])

[F6] *thm-regular-local-rings-are-domains-and-cohen-macaulay.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$. ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

## Proof

1.1 The two partial derivatives of $q$ lie in $I$ by the Leibniz rule, because $q\in I^2$ and derivations of $\kappa[x,y]$ carry $I^2$ into $I$; if a nonzero constant were among these derivatives, then $I$ would contain a unit and the hypothesis of colength greater than one would fail. [F3, F4, given]

2.1 Suppose a nonconstant linear derivative is nonzero; after an affine change of coordinates one has $x\in I$, and then either $I=(x)$ or $I=(x,F(y))$ with $F$ monic of degree at least two. Reducing an element of $I^2$ modulo $x^2$ shows that the coefficient of $x$ is divisible by $F$ and the part constant in $x$ is divisible by $F^2$; the degree bound on $q$ then forces both parts to vanish, leaving $q=$ a constant times $x^2$. [F3, F4, step 1.1]

3.1 Remaining case: both partial derivatives vanish, so the characteristic is two and $q=a+dx^2+fy^2$. A nonzero constant cannot lie in a proper $I^2$. If only one variable occurs, normalize its quadratic coefficient to $1$; differentiating the remaining scalar coefficient gives a nonzero constant in $I$ unless its ratio to the quadratic coefficient is a square, in which case $q$ is already a scalar multiple of a square. Now suppose both variables occur and normalize $f=1$. If $a$ and $d$ are both squares, then $q$ is a square. If $d=s^2$ and $a$ is nonsquare, the invertible coordinate change $z=y+sx$ gives $q=a+z^2$ in characteristic two, reducing to the one-variable case just treated and contradicting its nonsquare alternative. Thus the remaining case has $d$ nonsquare. [F5, step 2.1]

4.1 Since $d$ is nonsquare, choose by [F5] a field derivation $\theta$ with $\theta(d)\ne0$, and extend it to $\kappa[x,y]$ by $\theta(x)=\theta(y)=0$. Because derivations carry $I^2$ into $I$, applying $\theta$ to $q$ gives $\theta(a)+\theta(d)x^2\in I$; put $\alpha=\theta(a)/\theta(d)$, so $x^2+\alpha\in I$. Also $q+d(x^2+\alpha)=y^2+a+d\alpha\in I$, hence $J=(x^2+\alpha,\,y^2+a+d\alpha)\subseteq I$. The quotient $\kappa[x,y]/J$ has basis $1,x,y,xy$. As $q$ is a nonzero linear combination of these two regular-sequence generators, it is not in $J^2$, so $I/J\ne0$. [F3, F5, F6, step 3.1]

5.1 If $I/J$ contains a nonzero vector with zero $xy$-coefficient, then $I$ contains a nonzero affine linear polynomial, and the case of step 2.1 applies. Otherwise $I/J$ is one-dimensional and $I$ has colength three; extending scalars to an algebraic closure and translating makes $J=(x^2,y^2)$, and the one-dimensional added ideal is spanned by $g+hx+iy+jxy$ with $j\ne0$. [F5, F6, step 4.1]

6.1 In the situation of step 5.1, $g\ne0$ makes that element a unit in the four-dimensional local algebra $\kappa[x,y]/(x^2,y^2)$, while $h\ne0$ or $i\ne0$ makes its ideal contain two independent vectors, so the quotient would have length at most two; both contradict length three. Hence $I=(x^2,xy,y^2)$ after the extension, whose square contains no nonzero polynomial of degree at most two, contradicting $q\in I^2$. [F6, step 5.1]

7.1 All cases are excluded except the one where $q$ is a scalar times the square of an affine linear polynomial, which proves the claim; infinite colength is allowed throughout because the arguments use only the two generators of the relevant ideals. [F1, F2, step 6.1] ∎

## Remarks

- The statement is the characteristic-two square-root step of the resolution argument; the derivation of step 1.3 is the only place a $p$-basis is used.
- All reductions are affine changes of coordinates and scalar extensions, both of which preserve the shape of a polynomial of degree at most two.
