---
id: lem-em-outgoing-spherical-hankel-dtn-bounds
kind: lemma
domain: mathematics
title: "Spherical Hankel functions: explicit solutions, constant Wronskian and exact Dirichlet-to-Neumann bounds"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [thm-algebra-of-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, cor-zero-derivative-implies-constant, thm-algebra-of-complex-derivatives, def-vector-valued-derivative-and-integral, rem-complex-plane-euclidean-dictionary]
dependency_roles:
  thm-algebra-of-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-algebra-of-complex-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  rem-complex-plane-euclidean-dictionary: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Sec. 10.47 Standard Solutions of the Spherical Bessel Equation (Eqs. 10.47.1-10.47.9), with Sec. 10.50 checked for Wronskian identities"
      url: "https://dlmf.nist.gov/10.47"
      locator: "Sec. 10.47 complete: the spherical Bessel equation z^2w''+2zw'+(z^2-n(n+1))w=0 and its standard solutions, and Eq. 10.47.5 expressing the third-kind spherical Bessel functions through Hankel functions; Sec. 10.50 for the Wronskian relations. The factorial-polynomial form, the constant Wronskian value and the exact DtN bounds are verified locally here."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

For $l\in\mathbb N_0$ and $z>0$ set

$$h_l(z)=(-i)^{l+1}\frac{e^{iz}}{z}\sum_{j=0}^{l}\frac{i^j\,(l+j)!}{j!\,(l-j)!\,(2z)^j}.$$

Then $h_l$ is a complex-valued $C^2$ function of $z>0$ solving

$$h_l''(z)+\frac2z h_l'(z)+\Bigl[1-\frac{l(l+1)}{z^2}\Bigr]h_l(z)=0,$$

it never vanishes on $(0,\infty)$, and its Wronskian-type identity $\operatorname{Im}\bigl(\overline{h_l(z)}\,h_l'(z)\bigr)=z^{-2}$ holds. For $k>0$ and $R>0$ the spherical Dirichlet-to-Neumann coefficient

$$t_l=\frac{k\,h_l'(kR)}{h_l(kR)}$$

satisfies the exact bounds

$$\operatorname{Re}t_l\le-\frac1R,\qquad |\operatorname{Re}t_l|\le\frac{l+1}{R},\qquad 0<\operatorname{Im}t_l\le k .$$

These are exact identities and inequalities for the displayed explicit functions, not asymptotic formulas; the argument uses only elementary differentiation and a constant Wronskian, so no large-$l$ asymptotic input is required.

## Facts & Assumptions

**Given:** An integer $l\in\mathbb N_0$, the explicit function $h_l$ of the statement on $(0,\infty)$, and reals $k>0$, $R>0$. Complex-valued functions of the real variable $z$ are handled componentwise under the identification $\mathbb C\cong\mathbb R^2$ of [[rem-complex-plane-euclidean-dictionary]], with derivative and integral as in [[def-vector-valued-derivative-and-integral]].

[L1] **Differentiation.** [[thm-complex-exponential-is-entire-with-derivative-itself]]: the complex exponential is entire with $\exp'=\exp$. [[thm-algebra-of-complex-derivatives]]: sums, scalar multiples, products and (where the denominator is nonzero) quotients of complex differentiable functions are complex differentiable with the usual rules; in particular $z\mapsto e^{iz}P(z)$ and $z\mapsto e^{iz}P(z)/z$ are holomorphic on their domains for polynomial $P$, hence $C^2$ on $(0,\infty)$ along the real axis. [[thm-algebra-of-derivatives]]: the same rules hold for real-valued functions, and (componentwise) for the real and imaginary parts of a complex-valued differentiable function: if $y=u+iv$ with $u,v$ real differentiable on an interval, then $y'=u'+iv'$, $\operatorname{Re}y'=(\operatorname{Re}y)'$, $\operatorname{Im}y'=(\operatorname{Im}y)'$.

[L2] **Constants from a vanishing derivative.** [[cor-zero-derivative-implies-constant]]: a real-valued function continuous on an order-convex set, with derivative zero at every interior point, is constant; and two such functions with equal derivatives differ by a constant.

## Proof

1.1 Write $P(z)=\sum_{j=0}^{l}c_jz^{-j}$ with $c_j=\frac{i^j(l+j)!}{j!\,(l-j)!\,2^j}$, so that $h_l=(-i)^{l+1}e^{iz}P(z)/z$, and put $y=zh_l=(-i)^{l+1}e^{iz}P(z)$. Substituting $y=e^{iz}P$ into the equation $y''+(1-l(l+1)z^{-2})y=0$, which is equivalent to the stated radial equation because $h=y/z$ gives $h''+\frac2zh'+(1-l(l+1)z^{-2})h=\frac{1}{z}\bigl(y''+(1-l(l+1)z^{-2})y\bigr)$, produces by the product rule [L1] the equation $P''+2iP'-l(l+1)z^{-2}P=0$ for $P$. Inserting the finite expansion $P=\sum_jc_jz^{-j}$ and matching the coefficient of $z^{-m-2}$ gives $\bigl[m(m+1)-l(l+1)\bigr]c_m-2i(m+1)c_{m+1}=0$, that is $c_{m+1}=\frac{i(l-m)(l+m+1)}{2(m+1)}c_m$, and the displayed factorials satisfy this recursion because $\frac{c_{m+1}}{c_m}=\frac{i(l-m)(l+m+1)}{2(m+1)}$; the recursion terminates with $c_{l+1}=0$, so $P$ is exactly this polynomial and $y$, hence $h_l$, satisfies the stated equation and is $C^2$ on $(0,\infty)$. The leading term is $(-i)^{l+1}e^{iz}/z$ with remainder $O(z^{-2})$. [L1, algebra]

2.1 With $y=u+iv$, $u=\operatorname{Re}y$, $v=\operatorname{Im}y$, put $W=uv'-vu'=\operatorname{Im}(\overline y\,y')$. The componentwise real and imaginary parts of the equation of step 1.1 give $u''+(1-l(l+1)z^{-2})u=0$ and $v''+(1-l(l+1)z^{-2})v=0$; the product rule [L1] gives $W'=uv''-vu''=u\bigl[-(1-l(l+1)z^{-2})v\bigr]-v\bigl[-(1-l(l+1)z^{-2})u\bigr]=0$ on $(0,\infty)$, so $W$ is constant by [L2]. Since $P(z)\to c_0=1$ and $P'(z)\to0$ as $z\to\infty$, $y=C_le^{iz}(1+o(1))$ and $y'=iC_le^{iz}(1+o(1))$, where $C_l=(-i)^{l+1}$ has modulus one, so $\overline y\,y'=|y|^2(i+o(1))$ and $W\to\operatorname{Im}i=1$; hence $W\equiv1$. Consequently $\operatorname{Im}(\overline{h_l}\,h_l')=\operatorname{Im}\bigl((\overline y/z)(y'/z-y/z^2)\bigr)=W/z^2-|y|^2\operatorname{Im}(1/z^3)=z^{-2}$, which is nonzero for every $z>0$; therefore $h_l(z)\ne0$ on $(0,\infty)$. [step 1.1, L1, L2, algebra]

3.1 Put $F=|y|^2$ and $c(z)=1-l(l+1)z^{-2}$. By step 2.1 the complex quantity $A=\overline y\,y'$ has $\operatorname{Im}A=1$, so $A'=\operatorname{Re}(A)'=\frac12F''$ is real (componentwise product rule [L1]); on the other hand $A'=|\overline{y'}|^2+\overline y\,y''=|y'|^2-cF$. Differentiating $\frac12F''=|y'|^2-cF$ gives $\frac12F'''=2\operatorname{Re}(\overline{y'}y'')-c'F-cF'$; since $y''=-cy$, $\operatorname{Re}(\overline{y'}y'')=-c\operatorname{Re}(\overline{y'}y)=-c\frac{F'}{2}$, and with $c'=2l(l+1)z^{-3}$ this yields the linear third-order equation $F'''+4(1-l(l+1)z^{-2})F'+4l(l+1)z^{-3}F=0$. Since $P=\sum_jc_jz^{-j}$ with $c_j=i^j(\text{real})$, all cross terms of $|P|^2=\sum_{j,k}c_j\overline{c_k}z^{-j-k}$ with $j-k$ odd cancel in the sum over $(j,k)$ and $(k,j)$, so $F=|P|^2$ is a finite even polynomial in $z^{-1}$, $F=\sum_{j\ge0}a_jz^{-2j}$ with real $a_j$ and $a_0=1$; matching the coefficient of $z^{-2m-3}$ in the third-order equation gives $-4m(m+1)(2m+1)a_m+8ml(l+1)a_m+4l(l+1)a_m-8(m+1)a_{m+1}=0$, i.e. $a_{m+1}=\frac{(2m+1)[l(l+1)-m(m+1)]}{2(m+1)}a_m$, whose positive solution is $a_j=\frac{(2j)!\,(l+j)!}{2^{2j}(j!)^2(l-j)!}$ for $0\le j\le l$ and $a_j=0$ for $j>l$, because the factor $[l(l+1)-j(j+1)]$ vanishes at $j=l$. In particular $a_j>0$ for $j\le l$, $a_0=1$, and $|h_l(z)|^2=F(z)/z^2=\sum_{j=0}^l a_jz^{-2j-2}\ge z^{-2}$. [step 1.1, step 2.1, L1]

4.1 On $(0,\infty)$ one has $\frac{h_l'}{h_l}=\frac{\overline{h_l}\,h_l'}{|h_l|^2}$ and, from step 3.1 and $\overline y\,y'=\frac{F'}{2}+i$ (step 2.1), $\operatorname{Re}(\overline{h_l}\,h_l')=\operatorname{Re}\bigl(\frac{\overline y\,y'}{z^2}-\frac{|y|^2}{z^3}\bigr)=\frac{F'}{2z^2}-\frac{F}{z^3}=-\frac1{z^3}\sum_{j=0}^l(1+j)a_jz^{-2j}$ and $\operatorname{Im}(\overline{h_l}\,h_l')=z^{-2}$; dividing by $|h_l|^2=F(z)/z^2$ gives $\operatorname{Re}\frac{h_l'(z)}{h_l(z)}=-\frac1z\,\frac{\sum_{j=0}^l(1+j)a_jz^{-2j}}{\sum_{j=0}^l a_jz^{-2j}}$ and $\operatorname{Im}\frac{h_l'(z)}{h_l(z)}=\frac1{F(z)}$. With $z=kR$ and weights $a_j(kR)^{-2j}\ge0$, the real part of $t_l=k\,h_l'(kR)/h_l(kR)$ is $-\frac1R$ times a weighted average of the numbers $1+j$, $j=0,\dots,l$, so $-(l+1)/R\le\operatorname{Re}t_l\le-1/R$; the imaginary part is $k/F(kR)$, and since $F(kR)=\sum_{j\ge0}a_j(kR)^{-2j}\ge a_0=1$ and $F<\infty$, one has $0<\operatorname{Im}t_l\le k$. This proves all the stated bounds, and the bounds are exact identities for the displayed $h_l$. [step 2.1, step 3.1, algebra]

5.1 Collecting: step 1.1 gives the $C^2$ solution property and the explicit leading term; step 2.1 gives the constant Wronskian $\operatorname{Im}(\overline{h_l}h_l')=z^{-2}$ and nonvanishing; steps 3.1 and 4.1 give the positive coefficient representation $|h_l|^2=z^{-2}\sum_ja_jz^{-2j}\ge z^{-2}$ and the exact bounds $\operatorname{Re}t_l\le-1/R$, $|\operatorname{Re}t_l|\le(l+1)/R$, $0<\operatorname{Im}t_l\le k$ for the Dirichlet-to-Neumann coefficient. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
