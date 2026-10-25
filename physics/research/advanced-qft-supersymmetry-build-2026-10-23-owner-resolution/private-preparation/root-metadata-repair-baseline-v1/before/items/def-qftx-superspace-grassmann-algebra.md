---
id: def-qftx-superspace-grassmann-algebra
kind: definition
title: Four-dimensional N=1 superspace Grassmann algebra and Berezin integration
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: [lem-qftx-grassmann-coefficient-calculus]
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.1, printed pp. 31–33, anticommuting coordinates, left/right differentiation and Berezin integration."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§§3.1 and 3.7, printed pp. 58–60 and 97–99, spinor-coordinate ordering and coefficient-extraction integration."
verification:
  precheck: n/a
---

## Definition

Let $\mathcal A=\mathcal A_{\bar0}\oplus\mathcal A_{\bar1}$ be a finite-dimensional $\mathbb Z_2$-graded complex algebra whose homogeneous elements satisfy $ab=(-1)^{|a||b|}ba$, equipped with a conjugate-linear parity-preserving involutive anti-automorphism $a\mapsto a^*$ extending complex conjugation on $\mathbb C$. For the ordered index set $J=\{1,2,3,4\}$, let $\Lambda_4$ be the complex vector space with specified basis $(e_S)_{S\subseteq J}$, including $e_\varnothing=1$. Define
$$ \nu(S,T)=|\{(s,t)\in S\times T:s>t\}|,\qquad e_Se_T=\begin{cases}0,&S\cap T\ne\varnothing,\\(-1)^{\nu(S,T)}e_{S\cup T},&S\cap T=\varnothing.\end{cases} $$
Put $\xi_1=\theta^1=e_{\{1\}}$, $\xi_2=\theta^2=e_{\{2\}}$, $\xi_3=\bar\theta^{\dot1}=e_{\{3\}}$, and $\xi_4=\bar\theta^{\dot2}=e_{\{4\}}$. Then each $\xi_i$ is odd, $\xi_i^2=0$, and $\xi_i\xi_j=-\xi_j\xi_i$ for $i\ne j$. Give $\Lambda_4$ the grading $|e_S|=|S|\bmod2$. The superspace coefficient vector space is $\mathcal A\otimes_\mathbb C\Lambda_4$ with total parity and graded-tensor multiplication
$$ (a\otimes e_S)(b\otimes e_T)=(-1)^{|S||b|}(ab)\otimes(e_Se_T) $$
for homogeneous $a,b$. On the basis, the left derivative removes $i$ with sign $(-1)^{|\{s\in S:s<i\}|}$ and the right derivative removes $i$ with sign $(-1)^{|\{s\in S:s>i\}|}$ when $i\in S$, and both give zero when $i\notin S$. On a coefficient-left homogeneous tensor $a\otimes e_S$, define $\partial^L_{\xi_i}(a\otimes e_S)=(-1)^{|a|}a\otimes\partial^L_{\xi_i}e_S$ and $\partial^R_{\xi_i}(a\otimes e_S)=a\otimes\partial^R_{\xi_i}e_S$; in particular both vanish on $a\otimes1$. The algebra axioms and derivative rules below are verified in the local well-definedness result. Complex conjugation on this coefficient algebra extends the given operation on $\mathcal A$ by $i^*=-i$, $(\theta^\alpha)^*=\bar\theta^{\dot\alpha}$, $(\bar\theta^{\dot\alpha})^*=\theta^\alpha$, and $(uv)^*=v^*u^*$. In the coefficient-left tensor notation this means $(a\otimes e_S)^*=(-1)^{|a||S|}a^*\otimes e_S^*$, where $e_S^*$ is obtained by reversing the ordered generator word for $e_S$ and applying the stated generator conjugation.

For each $i\in J$, the left derivative $\partial^L_{\xi_i}$ is the unique odd derivation of the graded tensor algebra that vanishes on $\mathcal A$ and has $\partial^L_{\xi_i}\xi_j=\delta_{ij}$; on homogeneous $u,v$ it obeys
$$ \partial^L_{\xi_i}(uv)=(\partial^L_{\xi_i}u)v+(-1)^{|u|}u(\partial^L_{\xi_i}v). $$
The right derivative $\partial^R_{\xi_i}$ is the unique right odd derivation vanishing on $\mathcal A$ with $\partial^R_{\xi_i}\xi_j=\delta_{ij}$ and
$$ \partial^R_{\xi_i}(uv)=(-1)^{|v|}(\partial^R_{\xi_i}u)v+u(\partial^R_{\xi_i}v). $$
For one generator, write a polynomial uniquely with that generator on the left as $f=f_0+\xi_i f_1$, with $f_0,f_1$ independent of $\xi_i$, and define its Berezin integral by the complex-linear coefficient-extraction rule $\int d\xi_i\,f=f_1$. Thus $\int d\xi_i\,1=0$ and $\int d\xi_i\,\xi_i=1$. Fix the ordered measures
$$ \int d^2\theta:=\int d\theta^2\,d\theta^1,\qquad \int d^2\bar\theta:=\int d\bar\theta^{\dot2}\,d\bar\theta^{\dot1},\qquad \int d^4\theta:=\int d\bar\theta^{\dot2}\,d\bar\theta^{\dot1}\,d\theta^2\,d\theta^1. $$
With this order, $\int d^4\theta$ extracts the coefficient of $\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2}$. For superspace coordinates $x=(x^0,x^1,x^2,x^3)\in\mathbb R^{1,3}$ in natural units $\hbar=c=1$, assign mass dimensions $[x^\mu]=-1$, $[\theta^\alpha]=[\bar\theta^{\dot\alpha}]=-\tfrac12$, $[d\theta^\alpha]=[d\bar\theta^{\dot\alpha}]=\tfrac12$, and hence $[d^2\theta]=[d^2\bar\theta]=1$ and $[d^4\theta]=2$. These are formal engineering dimensions; no physical model or empirical unit convention is asserted.

## Definition references

[Martin, §4.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §§3.1 and 3.7](https://arxiv.org/pdf/hep-th/0108200).

The complex numbers as $\mathbb R[x]/(x^2+1)$, with the real embedding and imaginary unit $i$: [[def-complex-numbers-and-arithmetic]].

$\mathbb C=\mathbb R[x]/(x^2+1)$ is a field, every element is uniquely $a+bi$, and every nonzero element has inverse $(a-bi)/(a^2+b^2)$: [[thm-complex-numbers-form-a-field]].

Real and imaginary parts, complex conjugation, and modulus: [[def-complex-conjugate-real-imaginary-part-and-modulus]].
