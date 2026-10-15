---
id: ex-hh-finite-dual-of-a-polynomial-hopf-algebra
kind: example
title: "The finite dual of the primitive polynomial Hopf algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps:
  - def-hh-finite-dual-of-an-associative-algebra
  - thm-hh-finite-dual-coalgebra-and-hopf-descent
  - lem-hh-group-and-polynomial-hopf-algebras-exist
  - def-algebraically-closed-field
  - thm-monic-polynomial-division
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-hh-finite-polynomial-and-localization-constructions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, §§3.8–3.9"
      url: "https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf"
---

## Example

Let $k$ be algebraically closed and let $A=k[x]$ have the primitive Hopf structure $\Delta(x)=1\otimes x+x\otimes1$, $\varepsilon(x)=0$, $S(x)=-x$. For $a\in k$, define $\delta_{a,r}(f)$ to be the coefficient of $(x-a)^r$ in $f(x)$. Then
$$
A^\circ=\bigoplus_{a\in k}\operatorname{span}_k\{\delta_{a,r}:r\ge0\}, \quad \Delta^\circ\delta_{a,r}=\sum_{i+j=r}\delta_{a,i}\otimes\delta_{a,j}, \quad \delta_{a,r}*\delta_{b,s}=\binom{r+s}{r}\delta_{a+b,r+s}, \quad S^\circ\delta_{a,r}=(-1)^r\delta_{-a,r}.
$$
The unit is $\delta_{0,0}$, and $\varepsilon^\circ(\delta_{a,r})=1$ if $r=0$, $0$ otherwise.

## Verification

**Given:** An algebraically closed field $k$, the polynomial algebra $A=k[x]$, and its primitive Hopf structure from the planned HH-4 construction.

[F1] [[def-algebraically-closed-field]]: every nonconstant polynomial over $k$ has a root in $k$.

[F2] [[thm-monic-polynomial-division]]: division by a monic polynomial gives a unique remainder of smaller degree; in particular $k[x]/((x-a)^m)$ has basis $1,(x-a),\ldots,(x-a)^{m-1}$.

[F3] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: for finitely many pairwise comaximal ideals, the quotient by their product is the product of the corresponding quotient algebras.

[F4] [[def-hh-finite-dual-of-an-associative-algebra]]: a functional is in $A^\circ$ if it vanishes on a finite-codimensional two-sided ideal.

[F5] [[thm-hh-finite-dual-coalgebra-and-hopf-descent]]: the finite dual has coproduct $m_A^*$, counit $f\mapsto f(1)$, convolution product induced by $\Delta_A$, and antipode $f\mapsto f\circ S_A$.

[F6] [[lem-hh-group-and-polynomial-hopf-algebras-exist]]: $k[x]$ has $\Delta(x)=x\otimes1+1\otimes x$, $\varepsilon(x)=0$, and $S(x)=-x$ in every characteristic.

[F7] [[lem-hh-finite-polynomial-and-localization-constructions]]: the polynomial algebra over a field is free on its monomial basis $1,x,x^2,\ldots$.

1.1 Every finite-codimensional ideal $I\trianglelefteq k[x]$ is nonzero, since [F7] gives the infinite linearly independent family $1,x,x^2,\ldots$. Choose a nonzero element of $I$ of least degree and scale it to a monic polynomial $p$. Dividing any $f\in I$ by $p$, the remainder is in $I$ and has smaller degree, so it is zero; hence $I=(p)$. If $I=k[x]$, a functional vanishing on it is zero, which is the empty sum in the claimed direct sum. [given, F2, F4, F6, F7, choose]

1.2 The primitive coproduct sends a polynomial $p(x)$ to $p(X+Y)$ in $k[X,Y]$. Writing $X=a+u$, $Y=b+v$, the value of $(\delta_{a,r}*\delta_{b,s})(p)$ is the coefficient of $u^rv^s$ in $p(a+b+u+v)$. Expanding $p(a+b+z)=\sum_n\delta_{a+b,n}(p)z^n$, that coefficient is $\binom{r+s}{r}\delta_{a+b,r+s}(p)$; hence $\delta_{a,r}*\delta_{b,s}=\binom{r+s}{r}\delta_{a+b,r+s}$, with binomial coefficients interpreted in $k$. [given, F5, F6, algebra]

2.1 For a proper cofinite ideal, $p$ has positive degree. Repeatedly applying [F1] and dividing by $x-a$ whenever $a$ is a root factors $p$, up to a nonzero scalar, as $\prod_{a\in E}(x-a)^{m_a}$ for a finite set $E\subset k$ of distinct roots and positive integers $m_a$. If $a\ne b$, then $u=(x-a)/(b-a)$ and $v=-(x-b)/(b-a)$ satisfy $u+v=1$, with $u\in(x-a)$ and $v\in(x-b)$. Expanding $1=(u+v)^{m+n-1}$ shows $(x-a)^m+(x-b)^n=k[x]$, since every term contains either at least $m$ factors $u$ or at least $n$ factors $v$. Thus the powers for distinct roots are pairwise comaximal. [step 1.1, given, F1, algebra]

3.1 By [F3], $k[x]/(p)$ is isomorphic to $\prod_{a\in E}k[x]/((x-a)^{m_a})$. In each factor [F2] gives the basis $1,(x-a),\ldots,(x-a)^{m_a-1}$, whose dual basis consists of the coefficient functionals $\delta_{a,0},\ldots,\delta_{a,m_a-1}$. Pulling these functionals back to $k[x]$ expresses any $f$ vanishing on $(p)$ as a finite sum of $\delta_{a,r}$. Conversely, $\delta_{a,r}$ vanishes on the cofinite ideal $((x-a)^{r+1})$, so it is in $A^\circ$. The local dual bases in the CRT product are independent, so the sum over distinct $a$ is direct. [step 2.1, given, F2, F3, F4, algebra]

4.1 For $f,g\in k[x]$, expand $f=\sum_i\delta_{a,i}(f)(x-a)^i$ and $g=\sum_j\delta_{a,j}(g)(x-a)^j$. The coefficient of $(x-a)^r$ in $fg$ is $\sum_{i+j=r}\delta_{a,i}(f)\delta_{a,j}(g)$; by [F5], this gives $\Delta^\circ\delta_{a,r}=\sum_{i+j=r}\delta_{a,i}\otimes\delta_{a,j}$. [given, step 3.1, F5, algebra]

4.2 Since $1\in k[x]$ has coefficient $1$ at degree $0$ about every $a$ and zero at higher degrees, $\varepsilon^\circ(\delta_{a,r})=\delta_{a,r}(1)$ is $1$ for $r=0$ and $0$ otherwise. The convolution unit is $\varepsilon_A$, evaluation at $0$, namely $\delta_{0,0}$. Finally, for $p(x)$, the coefficient of $(x-a)^r$ in $p(-x)$ is $(-1)^r\delta_{-a,r}(p)$, so $S^\circ\delta_{a,r}=(-1)^r\delta_{-a,r}$. [step 3.1, F5, F6, algebra]

5.1 Steps 1.1, 2.1, and 3.1 identify the finite dual as the stated direct sum, while steps 1.2, 4.1, and 4.2 compute the convolution product, coproduct, unit, counit, and antipode. Together with the finite-dual structure of [F5], these establish all the displayed formulas. [step 1.1, step 2.1, step 3.1, step 1.2, step 4.1, step 4.2, F5] ∎
