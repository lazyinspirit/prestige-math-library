---
id: def-supported-complex-indexing
kind: definition
title: Support fibers with explicit cohomological indexing
status: published
domain: mathematics
deps:
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
dependency_roles:
  def-derived-sections-on-sites: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 12
---

## Definition
Let $X$ be a scheme, $T\subseteq X$ a closed subset, and $U=X\setminus T$ its open complement. Fix an integer $j$ and a restriction map $f:C_j(X)\to C_j(U)$ of cochain complexes of abelian groups. A cochain complex $A$ consists of abelian groups $A^n$ and homomorphisms $d_A:A^n\to A^{n+1}$ with $d_A^2=0$; its cohomology is $H^n(A)=\ker(d_A:A^n\to A^{n+1})/\operatorname{im}(d_A:A^{n-1}\to A^n)$. A restriction map here means a cochain map: $d f=f d$.

Define the **support complex** $C_{j,T}(X)$ to be the homotopy fiber of $f$. Explicitly, for $A=C_j(X)$ and $B=C_j(U)$, one model has
$$C_{j,T}(X)^n=A^n\oplus B^{n-1},\qquad d(a,b)=(d_Aa,\,f(a)-d_Bb).$$
The projection $(a,b)\mapsto a$ is the support-to-global map. Define the **supported cohomology group** by
$$H_T^{a,j}(X)=H^a(C_{j,T}(X)).$$
For complexes represented only in the derived category, use a cochain-map representative of the restriction morphism and take the resulting derived isomorphism class of this fiber. In particular, derived sections may provide the complexes and restriction map when the site, size and choice hypotheses in [[def-derived-sections-on-sites]] and the required restriction data are supplied.

Write $HC_{j,T}(X)$ for the Eilenberg–Mac Lane spectral realization specified in [[lem-eilenberg-maclane-shift-index]], and write $[2j]$ for suspension of a spectrum by $2j$. For every integer $i$ the indexing conventions are
$$\pi_i HC_{j,T}(X)\cong H_T^{-i,j}(X),\qquad \pi_i\bigl(HC_{j,T}(X)[2j]\bigr)\cong H_T^{2j-i,j}(X).$$
The two spectra in these formulas are distinguished: the second is shifted and the first is not. This auxiliary convention does not identify either spectrum with the article's support object without a separately specified comparison. The article's printed Definition 2.7 formula is retained separately in its article item.

## Justification
The displayed differential squares to zero because $d_A^2=d_B^2=0$ and $f d_A=d_B f$; the projection to $A$ commutes with differentials. This complex is the mapping cone of $f$ shifted by $-1$, with the displayed sign convention, and hence models the homotopy fiber. A commutative square of cochain maps induces a map of these models. If both vertical maps in such a square are quasi-isomorphisms, the induced map on fibers is a quasi-isomorphism: the short exact sequence of complexes $0\to B[-1]\to C_{j,T}(X)\to A\to0$ gives a natural long exact cohomology sequence, and the five-lemma applied to its corresponding segments gives the assertion. Thus the construction depends only on the restriction morphism in the derived category up to isomorphism, and cohomology and the support-to-global map are well-defined there. The derived-sections application uses exactly the site, size and choice assumptions of [[def-derived-sections-on-sites]].

Finally, [[lem-eilenberg-maclane-shift-index]] applies to the unbounded cochain complex $C_{j,T}(X)$ and gives both displayed natural group isomorphisms. It uses spectral suspension for the second formula; no comparison with the article's separately named object follows from indexing alone.
