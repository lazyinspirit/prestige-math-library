---
id: def-qftx-spinor-helicity
kind: definition
title: Complex null momenta and helicity weights
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-qft-dirac-projections
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Henriette Elvang and Yu-tin Huang, Scattering Amplitudes
      url: https://arxiv.org/pdf/1308.1697
      locator: Full 270-page textbook PDF retrieved; read §§2.2, 2.4 and 2.6, PDF pp. 9–11, 16–18 and 27–30, for null-momentum spinors, reference spinors, alternating brackets, little-group scaling and conventions.
    - title: Andrea Marzolla, The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations
      url: https://arxiv.org/pdf/1705.09678
      locator: Full 45-page lecture-note PDF retrieved; read §§2.1, 3 and 4.1, PDF pp. 5–12, for the Pauli-matrix map, complex null vectors, the two independent spinors and massless little-group scaling.
    - title: Ruth Britto, Freddy Cachazo, Bo Feng, and Edward Witten, Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/0501052
      locator: §2, PDF pp. 2–3; null momenta as spinor bispinors, spinor inner products and the auxiliary complex deformation.
---

## Definition

Let $V=\mathbb C^4$ with complex-bilinear form $h(p,q)=p^0q^0-p^1q^1-p^2q^2-p^3q^3$. This is $h=-\eta$ for $\eta=\operatorname{diag}(-1,1,1,1)$, the adopted $(-+++)$ coordinate convention. Coordinates $p^\mu$ have inverse-length units. Let $\mathbb C^2$ and $\widetilde{\mathbb C}^2$ be separate two-dimensional complex vector spaces, with undotted components $\lambda_a$ and dotted components $\widetilde\lambda_{\dot a}$; no complex-conjugation relation is imposed between them.

Define the linear map $\kappa:V\to M_2(\mathbb C)$ by

$$\kappa(p)=p^0I_2+p^1\sigma_1+p^2\sigma_2+p^3\sigma_3=\begin{pmatrix}p^0+p^3&p^1-ip^2\\p^1+ip^2&p^0-p^3\end{pmatrix},$$

where the dimensionless Pauli matrices are $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Its inverse sends $M=(M_{a\dot a})$ to

$$\kappa^{-1}(M)=\left(\frac{M_{1\dot1}+M_{2\dot2}}2,\frac{M_{1\dot2}+M_{2\dot1}}2,\frac{M_{2\dot1}-M_{1\dot2}}{2i},\frac{M_{1\dot1}-M_{2\dot2}}2\right).$$

For a matrix $M$ whose image is one-dimensional (rank one), a spinor factorization is a pair $(\lambda,\widetilde\lambda)\in(\mathbb C^2\setminus\{0\})\times(\widetilde{\mathbb C}^2\setminus\{0\})$ satisfying $M_{a\dot a}=\lambda_a\widetilde\lambda_{\dot a}$. The associated momentum is $p=\kappa^{-1}(M)$. Spinor factors have units of inverse square-root length, so their outer product has momentum units. A little-group rescaling is $(\lambda,\widetilde\lambda)\mapsto(t\lambda,t^{-1}\widetilde\lambda)$ for dimensionless $t\in\mathbb C^\times$; it leaves $p$ unchanged. On factorization pairs of a fixed $M$, identify pairs related by such a rescaling; the spinor-helicity class of $M$ is an equivalence class for this $\mathbb C^\times$ action.

Set $\epsilon^{12}=1$, $\epsilon^{21}=-1$, and $\epsilon^{11}=\epsilon^{22}=0$, and use a second copy with dotted indices. Raise indices by $\lambda^a=\epsilon^{ab}\lambda_b$ and $\widetilde\lambda^{\dot a}=\epsilon^{\dot a\dot b}\widetilde\lambda_{\dot b}$. Define angle and square brackets by $\langle\lambda r\rangle=\epsilon^{ab}\lambda_a r_b$ and $[\widetilde\lambda\widetilde r]=\epsilon^{\dot a\dot b}\widetilde\lambda_{\dot a}\widetilde r_{\dot b}$.

For $n\ge1$ and assigned half-integer helicity labels $h_1,\ldots,h_n\in\tfrac12\mathbb Z$, an outgoing helicity-$h_i$ amplitude on a domain $D$ of $n$ spinor-factorization data is a function $A_n:D\to\mathbb C$. Require $D$ to be invariant under independent little-group rescalings. The amplitude condition is, for each leg $i$ and each admissible $t\in\mathbb C^\times$,

$$A_n(\ldots,t\lambda_i,t^{-1}\widetilde\lambda_i,\ldots)=t^{-2h_i}A_n(\ldots,\lambda_i,\widetilde\lambda_i,\ldots).$$

This definition imposes no rationality, factorization, or physical scattering assumption. The next item proves that every nonzero momentum $p$ with $h(p,p)=0$ has a spinor factorization, unique up to the stated rescaling.

## Definition references

[[def-qft-dirac-projections]]

[Elvang and Huang, *Scattering Amplitudes*, §§2.2, 2.4 and 2.6](https://arxiv.org/pdf/1308.1697)

[Marzolla, *The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations*, §§2.1, 3 and 4.1](https://arxiv.org/pdf/1705.09678)

[Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*, §2](https://arxiv.org/pdf/hep-th/0501052)
