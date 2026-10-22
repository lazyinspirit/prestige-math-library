---
id: def-tgrx-tl-boundary-representation
kind: definition
title: Finite Hilbert boundary representation of Temperley-Lieb
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-temperley-lieb-generator-presentation
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-presentation-isomorphism
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - def-kernel-and-image-of-a-linear-map
  - def-inner-product-space
dependency_roles:
  def-temperley-lieb-generator-presentation: mathematical-premise
  def-temperley-lieb-diagram-category: mathematical-premise
  thm-temperley-lieb-presentation-isomorphism: mathematical-premise
  def-temperley-lieb-quantum-integers-and-quantum-characteristic: mathematical-premise
  def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators: mathematical-premise
  lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness: mathematical-premise
  def-kernel-and-image-of-a-linear-map: mathematical-premise
  def-inner-product-space: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Joshua Chen, The Temperley-Lieb Categories and Skein Modules, complete thesis, Section 2.3
      url: https://arxiv.org/pdf/1502.06845
      locator: Complete 74-page thesis; Section 2.3, Theorem 2.3.2 and Proposition 2.3.6, PDF pp. 20-24, recursive projectors, uniqueness, reflection, and closure trace.
    - title: Zhenghan Wang, Topological Quantum Computation, CBMS Regional Conference Series in Mathematics 112, complete book
      url: https://web.math.ucsb.edu/~zhenghwa/data/course/cbms.pdf
      locator: Complete 129-page book; Chapter 1, Section 1.1.4, Theorem 1.12, PDF pp. 18-20, generic Jones-Wenzl projectors.
    - title: K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras
      url: https://arxiv.org/pdf/1702.08128
      locator: Complete 22-page paper; Sections 1.2 and 2.1, PDF pp. 1-2, root-of-unity parameter and trace-radical boundary.
---

## Definition

Fix an integer $n\geq1$ and a real loop parameter $\delta$. Define $[0]_\delta=0$, $[1]_\delta=1$, and $[r+1]_\delta=\delta[r]_\delta-[r-1]_\delta$ for $r\geq1$. Assume $[k]_\delta\neq0$ for $2\leq k\leq n$; this list is empty when $n=1$. The abstract generator algebra $P_n(\mathbb C,\delta)$ is the unital complex algebra with generators $u_1,\ldots,u_{n-1}$ and relations $u_i^2=\delta u_i$, $u_i u_{i\pm1}u_i=u_i$, and $u_i u_j=u_j u_i$ when $|i-j|>1$. The diagram algebra $\mathrm{TL}_n(\mathbb C,\delta)$ has basis the noncrossing pairings of $n$ ordered bottom and $n$ ordered top points; its product stacks the left factor above the right, deletes each closed loop, and multiplies by $\delta$ per loop. Its elementary diagram $d_i$ has a cap joining top points $i,i+1$, a cup joining bottom points $i,i+1$, and vertical strands elsewhere. The isomorphism $\Phi_n:P_n(\mathbb C,\delta)\to\mathrm{TL}_n(\mathbb C,\delta)$ sends $u_i$ to $d_i$.

For every $1\leq i\leq n-2$, the adjacent relations in the presentation mean both $u_i u_{i+1}u_i=u_i$ and $u_{i+1}u_i u_{i+1}=u_{i+1}$. For matching the imported recursion's notation, write $U_i:=d_i$.

Set $p_1=1_1$. For $1\leq r<n$, put $Q_r=p_r\otimes1_1$ by adjoining one rightmost vertical strand and define

$$p_{r+1}:=Q_r-\frac{[r]_\delta}{[r+1]_\delta}Q_r d_r Q_r.$$

The denominator hypotheses make this recursion defined. For each $1\leq r\leq n$, let $\widehat p_r:=\Phi_r^{-1}(p_r)$. The cited Jones-Wenzl result gives $p_n^2=p_n$ under these unit-denominator hypotheses. For $1\leq r\leq n$, let $\iota_{r,n}:P_r(\mathbb C,\delta)\to P_n(\mathbb C,\delta)$ send each generator $u_i$ to the same-named generator, and let $\jmath_{r,n}:\mathrm{TL}_r(\mathbb C,\delta)\to\mathrm{TL}_n(\mathbb C,\delta)$ append $n-r$ rightmost vertical strands. The maps commute with $\Phi$: on each generator, both composites send $u_i$ to $d_i$ with those added strands, and both send the unit to the identity diagram. Since generators and unit generate $P_r$, the composites agree on every element.

Let $H$ be a nonzero finite-dimensional complex inner-product space whose inner product is linear in its first argument and conjugate-linear in its second. A unital complex-algebra representation is a complex-linear map $\pi:P_n(\mathbb C,\delta)\to\operatorname{End}_{\mathbb C}(H)$ such that $\pi(xy)=\pi(x)\pi(y)$ for all $x,y\in P_n(\mathbb C,\delta)$ and $\pi(1)=I_H$. Here $\operatorname{End}_{\mathbb C}(H)$ is the algebra of complex-linear endomorphisms, with composition as multiplication and $I_H$ as unit. Require each generator image to be self-adjoint, meaning $\langle\pi(u_i)x,y\rangle=\langle x,\pi(u_i)y\rangle$ for all $x,y\in H$. Define $P:=\pi(\widehat p_n)$, define $\operatorname{rank}P:=\dim_{\mathbb C}\operatorname{im}P$, and restrict to data with $\operatorname{rank}P>0$. The algebraic representation as a physical boundary state space is an additional model identification and is not part of this definition.

## Definition references

[[def-temperley-lieb-generator-presentation]]

[[def-temperley-lieb-diagram-category]]

[[thm-temperley-lieb-presentation-isomorphism]]

[[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]

[[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]]

[[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]

[[def-kernel-and-image-of-a-linear-map]]

[[def-inner-product-space]]

[Joshua Chen, The Temperley-Lieb Categories and Skein Modules](https://arxiv.org/pdf/1502.06845)

[Zhenghan Wang, Topological Quantum Computation](https://web.math.ucsb.edu/~zhenghwa/data/course/cbms.pdf)

[K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras](https://arxiv.org/pdf/1702.08128)

## Tower-map convention

For $r<n$, the presentation tower map $\iota_{r,n}$ is well-defined because the defining relations are unchanged and it preserves the unit. For basis diagrams $E,D\in\mathrm{TL}_r$, appending $n-r$ rightmost vertical strands before stacking gives the same matching as stacking $E$ above $D$ first and then appending those strands; the appended strands create no closed loops. Hence $\jmath_{r,n}(E\circ D)=\jmath_{r,n}(E)\circ\jmath_{r,n}(D)$, and $\jmath_{r,n}(1_r)=1_n$. Bilinearity then makes $\jmath_{r,n}$ a unital algebra homomorphism. The two unital algebra homomorphisms $\Phi_n\circ\iota_{r,n}$ and $\jmath_{r,n}\circ\Phi_r$ agree on every generator and the unit, so they agree on all of $P_r$; this identity transfers the unit-denominator recursion on diagrams to the presentation used by $\pi$.

## Diagram convention

The box is notation for the three-strand algebra element $p_3$; strands are ordered from left to right and continue through the box. For general $n$, the same box notation has $n$ strands. The picture records no physical apparatus, and no proof below relies on it.

```tikz
\begin{tikzpicture}[scale=0.9]
  \foreach \x in {0,1,2} {
    \draw (\x,0) -- (\x,0.72);
    \draw (\x,1.28) -- (\x,2);
  }
  \draw (-0.3,0.72) rectangle (2.3,1.28);
  \node at (1,1) {$p_3$};
\end{tikzpicture}
```

## Remarks

Only $[2]_\delta,\ldots,[n]_\delta$ are required to be nonzero; $[n+1]_\delta$ may vanish. The item asserts no root-of-unity quotient, modular representation classification, trace-preserving realization, or physical area law.
