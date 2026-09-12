---
id: "def-singular-cohomology-ring"
kind: "definition"
title: "Singular cohomology ring"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cup-product-leibniz-identity","def-singular-cohomology-with-coefficients"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher §3.2, The Cohomology Ring; Miller Definition 29.1
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

For a space $X$ and commutative unital coefficient ring $R$, put
$$H^*(X;R)=\bigoplus_{n\ge0}H^n(X;R),\qquad [\varphi]\smile[\psi]=[\varphi\smile\psi].$$
The groups and equality of representatives are those of [[def-singular-cohomology-with-coefficients]]. The multiplication descends through both quotient maps by [[thm-cup-product-leibniz-identity]], including simultaneous changes. Extend to finite sums of homogeneous classes by distributivity; only finitely many summands occur, so each product belongs to the displayed direct sum.

This is the **singular cohomology ring**. To check the ring assertion before using it, let $\varphi,\psi,\eta$ have degrees $p,q,r$. On an arbitrary $(p+q+r)$-simplex both parenthesizations of their cochain cup product evaluate to
$$\varphi(\sigma[0,\ldots,p])\,\psi(\sigma[p,\ldots,p+q])\,\eta(\sigma[p+q,\ldots,p+q+r]).$$
Restriction to a face and then a face of that face is restriction to the listed vertex block, and multiplication in $R$ is associative. Thus cochain associativity holds exactly and descends to classes. Bilinearity gives the two distributive laws. Addition, additive inverses and zero come from the abelian quotient groups. Products of degrees $p,q$ have degree $p+q$.

Its multiplicative unit is the class of the cochain $\mathbf1\in C^0(X;R)$ assigning $1_R$ to every singular vertex. On any edge, $\delta\mathbf1=1_R-1_R=0$. The front/back formula gives $\mathbf1\smile\varphi=\varphi=\varphi\smile\mathbf1$ on every simplex. This includes all components at once: degree-zero cochains need not have finite support on the set of vertices or components.

If $X$ is empty or $R=0$, the ring is the zero ring and its unit equals zero, as allowed by our unital-ring convention. The formula for three factors works also when any degree is zero and for degenerate simplices; for one-point $X$ it has the same unit. Nothing here chooses a representative for every class: the quotient operation is defined by representative independence. No AC is used.
