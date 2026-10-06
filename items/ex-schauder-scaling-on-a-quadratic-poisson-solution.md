---
id: ex-schauder-scaling-on-a-quadratic-poisson-solution
kind: example
title: "The Schauder estimate on a quadratic Poisson solution: radius powers balance"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 4
deps: [thm-interior-schauder-estimate-for-uniformly-elliptic-equations, def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-laplacian-of-a-c2-function, def-euclidean-spheres-and-closed-balls, thm-chain-rule-for-total-derivatives, def-countable-choice]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.4, Exercise 8.18 (scaling of the constant-coefficient Schauder estimate), printed p. 148 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.2.1, the rescaled quadratic model $\\Delta u=\\text{const}$, printed pp. 105-106 (read in full)"
---

## Example

Assume Countable Choice when invoking the estimate supplier for $n\ge2$. Let $n\ge1$, $0<\alpha<1$, $c\ne0$, $R>0$, $x_0\in\mathbb R^n$ and $u(x):=\dfrac{c\,(R^2-|x-x_0|^2)}{2n}$. Then $-\Delta u\equiv c$ on $B_R(x_0)$ and $u=0$ on $\partial B_R(x_0)$. On the inner ball $B_{R/2}(x_0)$ one computes exactly
$$\sup_{B_{R/2}}|u|=\frac{|c|R^2}{2n},\qquad \max_{|\beta|=1}\sup_{B_{R/2}}|D^\beta u|=\frac{|c|R}{2n},\qquad |D^2u|\equiv\frac{|c|}{n},\qquad [D^2u]_{0,\alpha;B_{R/2}}=0,$$
so that
$$\|u\|^*_{2,\alpha;B_{R/2}(x_0)}=\frac{|c|R^2}{n},\qquad \|u\|_{\infty;B_R}+R^2\|Lu\|_{\infty;B_R}+R^{2+\alpha}[Lu]_{0,\alpha;B_R}=|c|R^2\Bigl(\frac1{2n}+1\Bigr),$$
for the operator $L=\Delta$ (so that $Lu=\Delta u=-c$). Both sides are proportional to $|c|R^2$ with constants independent of $R$: the radius powers balance exactly. The example also verifies the dilation identity $\|u\|^*_{2,\alpha;B_{R/2}(x_0)}=\|u(x_0+R\,\cdot)\|^*_{2,\alpha;B_{1/2}(0)}$ of [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]].

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\alpha<1$, $c\ne0$, $R>0$, $x_0\in\mathbb R^n$, the quadratic $u(x)=c(R^2-|x-x_0|^2)/(2n)$, and the operator $L=\Delta$ in the nondivergence convention in which the estimate is stated with data $Lu$.

[F1] The Laplacian is $\Delta=\sum_i\partial_i\partial_i$ and the scaled interior norm is $\|w\|^*_{2,\alpha;B_\rho(x_0)}=\sum_{j=0}^2\rho^j\max_{|\beta|=j}\sup_{B_\rho}|D^\beta w|+\rho^{2+\alpha}\max_{|\beta|=2}[D^\beta w]_{0,\alpha;B_\rho}$, with $\displaystyle[w]_{0,\alpha;B}=\sup_{x\ne y\in B}|w(x)-w(y)|/|x-y|^\alpha$ and the same formula on balls of radius $R$; under $v(z)=w(x_0+Rz)$ one has $\|v\|^*_{2,\alpha;B_1(0)}=\|w\|^*_{2,\alpha;B_R(x_0)}$. ([[def-laplacian-of-a-c2-function]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]])

[F2] For $n\ge2$, the interior Schauder estimate for $\Delta$ ([[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]]): if $w\in C^2(B_R(x_0))\cap L^\infty(B_R(x_0))$ satisfies $\Delta w=g$ pointwise with $g\in C^{0,\alpha}(B_R(x_0))$, then $\|w\|^*_{2,\alpha;B_{R/2}(x_0)}\le C_{n,\alpha}(\|w\|_{\infty;B_R}+R^2\|g\|_{\infty;B_R}+R^{2+\alpha}[g]_{0,\alpha;B_R})$; for $\Delta$ the constant depends only on $n,\alpha$. The $n=1$ calculations below prove the same comparison directly and do not invoke this supplier. ([[def-euclidean-spheres-and-closed-balls]])

[F3] The chain rule computes the derivatives of the quadratic: for $w(x)=c(R^2-|x-x_0|^2)/(2n)$ one has $D_iw(x)=-c(x_i-x_{0,i})/n$ and $D_iD_jw=-c\delta_{ij}/n$. ([[thm-chain-rule-for-total-derivatives]])

## Verification

**Proof technique:** direct.

1.1 Derivatives and the equation. By [F3], $\Delta u=\sum_iD_iD_iu=-n\cdot c/n=-c$, so $\Delta u\equiv-c$ and $-\Delta u\equiv c$ on $B_R(x_0)$; moreover $u=0$ on $\partial B_R(x_0)$ because $|x-x_0|=R$ there. With $L=\Delta$ the datum is $Lu=\Delta u\equiv-c$, a constant function on $B_R(x_0)$. [F3, F1, given, algebra]

2.1 The exact values on the inner ball. Write $r:=|x-x_0|$. On $B_{R/2}(x_0)$ one has $|u(x)|=|c|(R^2-r^2)/(2n)$, maximal at $r=0$ with value $|c|R^2/(2n)$; next $|Du(x)|=|c|r/n$, with supremum as $r\uparrow R/2$ equal to $|c|R/(2n)$; finally $D^2u\equiv-c\,I_n/n$ is constant, so $|D^2u|\equiv|c|/n$ and the H\"older seminorm $[D^2u]_{0,\alpha;B_{R/2}(x_0)}$ vanishes. [step 1.1, F1, algebra]

3.1 The scaled norm and the two sides. By the definition in [F1] and step 2.1, $$\|u\|^*_{2,\alpha;B_{R/2}(x_0)}=\frac{|c|R^2}{2n}+\frac R2\cdot\frac{|c|R}{2n}+\frac{R^2}{4}\cdot\frac{|c|}{n}+0=\frac{|c|R^2}{n},$$ while $\|u\|_{\infty;B_R}=|c|R^2/(2n)$ (the centre value), $\|Lu\|_{\infty;B_R}=|c|$ and $[Lu]_{0,\alpha;B_R}=0$ because $Lu$ is constant; hence the right-hand side of the estimate of [F2] is $C\bigl(\frac{|c|R^2}{2n}+|c|R^2\bigr)=C|c|R^2\bigl(\frac1{2n}+1\bigr)$, proportional to the left-hand side with an $R$-independent factor. [step 2.1, F1, F2, algebra]

4.1 The dilation identity. Put $v(z):=u(x_0+Rz)=cR^2(1-|z|^2)/(2n)$ on $B_{1/2}(0)$. The chain rule gives $D^\beta v(z)=R^{|\beta|}D^\beta u(x_0+Rz)$, and the scaling identity of [F1] yields $\|v\|^*_{2,\alpha;B_{1/2}(0)}=\|u\|^*_{2,\alpha;B_{R/2}(x_0)}$; directly, $\|v\|^*_{2,\alpha;B_{1/2}(0)}=|c|R^2\bigl(\frac1{2n}+\frac1{4n}+\frac1{4n}\bigr)=\frac{|c|R^2}{n}$, in agreement with step 3.1. [step 1.1, step 3.1, F1, algebra]

5.1 Conclusion. The quadratic Poisson solution realizes the a priori estimate of [F2] with the same radius homogeneity on both sides: the scaled norm and the scaled data are both of size $|c|R^2$, the comparison constant is independent of $R$, and the dilation identity of the scaled norms holds exactly. [step 3.1, step 4.1, F2] ∎

## Remarks

- The example is the constant-coefficient extremal for the radius bookkeeping: the solution is a parabola, $D^2u$ is constant so the top-order H\"older seminorm vanishes, and all growth in $R$ comes from the sup terms with their weights $R^j$.
- With the sign convention $Lu=\Delta u$ the right-hand side of the estimate is a bound in terms of $\|Lu\|_{\infty;B_R}=|c|$, exactly as displayed; the value at the centre, $|c|R^2/(2n)$, is the sup over $B_R$, while the sup over the inner ball is the same quantity, since the parabola is maximal at the centre.
