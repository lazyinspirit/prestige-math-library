---
id: "def-relative-cup-product"
kind: "definition"
title: "Relative cup product for an excisive triad"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains","def-relative-singular-cochain-complex","lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes","thm-cover-small-inclusion-is-a-chain-homotopy-equivalence","lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision","thm-barycentric-subdivision-is-chain-homotopic-to-the-identity","def-barycentric-subdivision-chain-operator","def-barycentric-subdivision-prism-homotopy","thm-cup-product-leibniz-identity"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher relative products after Proposition 3.10; Miller Lecture 34
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $A,B$ be subspaces of $X$ and $R$ a commutative unital ring. Set $U=A\cup B$ and $N=C_*(A;R)+C_*(B;R)\subset C_*(X;R)$. Use the relative cochains of [[def-relative-singular-cochain-complex]], so $C^*(X,A;R)$ means cochains vanishing on $C_*(A;R)$. For $\varphi\in C^p(X,A;R)$ and $\psi\in C^q(X,B;R)$, use the front/back formula of [[def-singular-cup-product-on-cochains]]. A simplex wholly in $A$ has its front face in $A$, and one wholly in $B$ has its back face in $B$. Thus $\varphi\smile\psi$ vanishes on $N$ and defines a functional on $C_*(X;R)/N$.

The Leibniz identity of [[thm-cup-product-leibniz-identity]] holds in these quotient-functional complexes. Its representative-change primitive also vanishes on $N$: each of its summands has a first factor vanishing on $A$ and a second vanishing on $B$. Consequently this construction descends to
$$H^p(X,A;R)\otimes_R H^q(X,B;R)\longrightarrow H^{p+q}\bigl(\operatorname{Hom}_R(C_*(X;R)/N,R)\bigr).$$

Assume now that $A,B$ are open in $U$ (in particular they may be open in $X$). The **relative cup product** has target $H^{p+q}(X,U;R)$, using the following canonical comparison. By [[lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes]], $N$ is exactly the small-chain complex of the cover $U=A\cup B$. We need the following stronger data, not merely the abstract chain-homotopy-equivalence assertion of [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]]. Let $S$ be barycentric subdivision and let $T$ satisfy $1-S=dT+Td$, as supplied by [[thm-barycentric-subdivision-is-chain-homotopic-to-the-identity]], [[def-barycentric-subdivision-chain-operator]], and [[def-barycentric-subdivision-prism-homotopy]]. These operators preserve simplex images. For a simplex $\sigma$, let $a(\sigma)$ be the least subdivision count making it small, whose existence follows from [[lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]], and recursively set
$$m(\sigma)=\max\bigl(\{a(\sigma)\}\cup\{m(\sigma\delta_j):0\le j\le\dim\sigma\}\bigr),$$
with $m=0$ on vertices. If $\sigma$ is already small then $m(\sigma)=0$. Define $D\sigma=\sum_{h=0}^{m(\sigma)-1}TS^h\sigma$ and $r=1-dD-Dd$. The telescoping identity shows that $r\sigma$ is small: besides $S^{m(\sigma)}\sigma$, each face correction is a sum of $TS^h(\sigma\delta_j)$ with $h\ge m(\sigma\delta_j)$ and is therefore small. Thus $r:C_*(U;R)\to N$ is a chain map, $ri=1$, $1-ir=dD+Dd$, and $D|_N=0$. The integral construction extends to $R$ by tensoring, so all these identities remain valid and all operators preserve chains in $U$.

Here is why this gives the needed **relative cohomology** comparison, not just an absolute homology comparison. Extend $D$ to a degree-one map $E$ on $C_*(X;R)$ by the same formula on simplices with image in $U$, and by zero on all other simplex generators. This is an unambiguous linear extension; it need not itself commute with $d$. Put $P=1-dE-Ed$. Then $P$ is a chain map, $P|_N=1$, and $P(C_*(U;R))\subset N$. It therefore induces
$$\bar P:C_*(X;R)/C_*(U;R)\longrightarrow C_*(X;R)/N.$$
The quotient map $q:C_*(X;R)/N\to C_*(X;R)/C_*(U;R)$ is a chain map. Since $E$ preserves both $N$ and $C_*(U;R)$, it descends to each quotient; the identity $1-P=dE+Ed$ shows that $\bar Pq$ and $q\bar P$ are homotopic to the respective identities. Applying $\operatorname{Hom}_R(-,R)$ preserves these explicit homotopy identities. Hence
$$q^*:H^*(X,U;R)\longrightarrow H^*\bigl(\operatorname{Hom}_R(C_*(X;R)/N,R)\bigr)$$
is an isomorphism. Define the relative cup product by composing the preceding product with $(q^*)^{-1}$. This inverse on cohomology is unique; auxiliary choices in an alternative small-chain comparison cannot affect it.

The same definition applies whenever a specified neighborhood or subcomplex replacement has separately proved this quotient-cochain comparison and its compatibility with the pair maps. Such a replacement is an additional hypothesis, not an assertion for every triad. In general a simplex in $A\cup B$ can meet both members without lying in either, so vanishing on $N$ alone does not mean vanishing on $C_*(A\cup B)$.

If either relative class is zero, its product is zero by the displayed primitive. If $A=B=\varnothing$, then $N=0$ and $q$ is the identity, recovering absolute cup. If $A=X$ or $B=X$, one source group is zero. Empty $X$, zero coefficients and point spaces satisfy the same formulas. Degree-zero factors evaluate at a vertex; negative-degree groups and their possible primitives are zero. All singular simplices, including degenerate ones, are retained. The small-chain operators use least subdivision counts, and the extension of $D$ is prescribed on simplex generators. No AC is required.
