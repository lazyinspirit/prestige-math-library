---
id: def-singular-and-cellular-chain-complexes-with-local-coefficients
kind: definition
title: Singular and cellular local chain complexes
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-right-group-ring-action-on-the-chains-of-a-universal-cover, def-tensor-product-of-modules-by-generators-and-relations, def-singular-cochain-complex-with-coefficients, def-local-system-of-r-modules-and-its-pullback]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.H, pp.327–334
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §§1–3, pp.95–105
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $\mathcal L$ be a left $R$-module local system on an arbitrary space $X$. For a singular simplex $\sigma:\Delta^n\to X$, write $v_i=\sigma(e_i)$ and $\gamma_{01}^\sigma(t)=\sigma(1-t,t,0,\ldots,0)$.

The **intrinsic singular local chain group** is
$$C_n^{\mathrm{sing}}(X;\mathcal L)=\bigoplus_{\sigma:\Delta^n\to X}\mathcal L_{v_0}.$$
Write an element of the $\sigma$-summand as $m\sigma$. Its boundary is
$$\partial(m\sigma)=T_{\gamma_{01}^\sigma}(m)(\sigma\delta_0)+\sum_{i=1}^n(-1)^im(\sigma\delta_i),$$
and the boundary of a zero-simplex is zero. The exceptional zeroth face transports its coefficient from the old first vertex $v_0$ to the new first vertex $v_1$; all other faces keep $v_0$.

The **intrinsic singular local cochain group** is the product
$$C^n_{\mathrm{sing}}(X;\mathcal L)=\prod_{\sigma:\Delta^n\to X}\mathcal L_{v_0},$$
so a cochain $\varphi$ assigns $\varphi(\sigma)\in\mathcal L_{v_0}$ to every simplex, with no finite-support requirement. Its positive coboundary, consistent with [[def-singular-cochain-complex-with-coefficients]], is
$$(\delta\varphi)(\sigma)=T_{\gamma_{01}^\sigma}^{-1}\bigl(\varphi(\sigma\delta_0)\bigr)+\sum_{i=1}^{n+1}(-1)^i\varphi(\sigma\delta_i).$$
Now the exceptional face value is transported back from $v_1$ to $v_0$.

For $A\subseteq X$, restrict $\mathcal L$ along the inclusion and set
$$C_*^{\mathrm{sing}}(X,A;\mathcal L)=C_*^{\mathrm{sing}}(X;\mathcal L)/C_*^{\mathrm{sing}}(A;\mathcal L),\qquad C^*_{\mathrm{sing}}(X,A;\mathcal L)=\ker\bigl(C^*_{\mathrm{sing}}(X;\mathcal L)\to C^*_{\mathrm{sing}}(A;\mathcal L)\bigr).$$

For a connected CW complex with chosen basepoint $x$, universal cover $\widetilde X$, $\pi=\pi_1(X,x)$, and base fiber $M=\mathcal L_x$ carrying $g m=T_{\bar g}m$, the equivalent universal-cover models are
$$C_*^{\mathrm{sing}}(\widetilde X;R)\otimes_{R[\pi]}M,\qquad \operatorname{Hom}_{R[\pi]}\bigl({}_{R[\pi]}C_*^{\mathrm{sing}}(\widetilde X;R),M\bigr).$$
The first tensor product is the balanced construction of [[def-tensor-product-of-modules-by-generators-and-relations]] using the right action of [[def-right-group-ring-action-on-the-chains-of-a-universal-cover]]. For the second, convert that right chain module to a left one by
$$g\cdot c=c\cdot g^{-1}.$$
Thus an equivariant cochain has the correctly typed rule
$$\varphi(c\cdot g)=g^{-1}\varphi(c),$$
not a module-Hom between one right and one left module.

The intrinsic/tensor identification sends $\widetilde\sigma\otimes m$ to the simplex $\sigma=p\widetilde\sigma$ with coefficient obtained by transporting $m$ along the path represented by $\widetilde\sigma(e_0)$. If $\widetilde\sigma$ is replaced by $\widetilde\sigma\cdot g$, that path is changed by the loop $g^{-1}$ and the coefficient becomes the transport of $gm$, exactly the balanced relation. The analogous statement for cochains proves the displayed equivariance rule. These maps respect the two boundary formulas term by term.

The **cellular local chain and cochain groups** of a connected CW complex are
$$C_*^{\mathrm{cell}}(X;\mathcal L)=C_*^{\mathrm{cell}}(\widetilde X;R)\otimes_{R[\pi]}M,\qquad C^*_{\mathrm{cell}}(X;\mathcal L)=\operatorname{Hom}_{R[\pi]}\bigl({}_{R[\pi]}C_*^{\mathrm{cell}}(\widetilde X;R),M\bigr).$$
For a CW pair, quotient by the lifted subcomplex before tensoring and use the corresponding relative cellular complex before applying equivariant Hom. For a disconnected CW complex, take the direct sum of chain complexes and the degreewise product of cochain complexes over its components. Universal-cover coordinates of this componentwise description require a supplied basepoint in each component; the intrinsic complexes require no simultaneous basepoint choice and remain the definition when no such family is supplied.

The next lemma proves square-zero and independence of supplied lift bases. Empty spaces and negative degrees give zero groups, the zero local system gives the zero complexes, and constant systems reduce to the ordinary formulas because every transport is the identity.
