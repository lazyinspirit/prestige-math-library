---
id: def-eleven-dimensional-spin-structure-and-majorana-bundle
kind: definition
title: Eleven-Dimensional Spin Structure and Majorana Bundle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
deps:
  - def-eleven-dimensional-lorentzian-geometry
  - thm-eleven-dimensional-levi-civita-existence-and-uniqueness
  - def-clifford-algebra-of-a-quadratic-space
  - def-real-clifford-group-and-normalized-pin-spin
  - thm-real-pin-spin-topological-double-covers
  - def-smooth-principal-g-bundle
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - thm-associated-vector-bundle-is-well-defined
  - def-connection-on-a-smooth-vector-bundle
dependency_roles:
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  thm-eleven-dimensional-levi-civita-existence-and-uniqueness: mathematical-premise
  def-clifford-algebra-of-a-quadratic-space: mathematical-premise
  def-real-clifford-group-and-normalized-pin-spin: mathematical-premise
  thm-real-pin-spin-topological-double-covers: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-associated-bundle-to-a-principal-bundle-and-representation: mathematical-premise
  thm-associated-vector-bundle-is-well-defined: mathematical-premise
  def-connection-on-a-smooth-vector-bundle: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§3.1, normalized antisymmetrized gamma products and form Clifford multiplication; §3.2, orthochronous frame reduction and Spin lift; §3.3, the spin connection induced by the Levi-Civita connection; §3.6, eleven-dimensional Clifford and 32-real-component Majorana conventions."
    - title: "Jerome P. Gauntlett and Pascal Pakis, The Geometry of D=11 Killing Spinors, arXiv:hep-th/0212008v3"
      url: "https://arxiv.org/pdf/hep-th/0212008"
      locator: "Appendix A, signature, real Clifford representation, and 32-component Majorana spinors."
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, arXiv:0805.0311"
      url: "https://arxiv.org/pdf/0805.0311"
      locator: "§§1.3–1.5 for the Clifford group and Pin/Spin definitions with the twisted adjoint action; §1.8 for double covers. Gallier does not supply the global bundle lift, which is defined locally in this item."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(M,g)$ be as in [[def-eleven-dimensional-lorentzian-geometry]], and supply a **time orientation** $\tau$, meaning a continuous choice $\tau_x$ of one component of $\{v\in T_xM:g_x(v,v)<0\}$ at each $x\in M$. Put $V=\mathbb R^{11}$ with $\eta=\operatorname{diag}(-1,1,\ldots,1)$ and standard basis $(E_0,\ldots,E_{10})$, and let $\mathcal C^+\subset V$ be the component of $\{v:\eta(v,v)<0\}$ containing $E_0$. Let $F_{g,\tau}^+M$ be the bundle of oriented linear isometries $e:V\to T_xM$ that send $\mathcal C^+$ to $\tau_x$. First define the group
$$SO(V,\eta):=\{A\in GL(V):A^{T}\eta A=\eta,\ \det A=1\},$$
with the smooth submanifold structure inherited from $GL(V)$. Indeed, the derivative at an isometry $A$ of $B\mapsto B^T\eta B$ is $H\mapsto H^T\eta A+A^T\eta H$, which is onto the symmetric matrices: for symmetric $S$, take $H=\frac12A\eta^{-1}S$. Thus the isometry set is a smooth submanifold, and its determinant-one part is a union of components; multiplication and inversion are smooth matrix maps, so $SO(V,\eta)$ is a finite-dimensional Lie group. Define the orthochronous subgroup
$$SO^+(V,\eta):=\{A\in SO(V,\eta):A(\mathcal C^+)=\mathcal C^+\}.$$
It is the right structure group of $F_{g,\tau}^+M$ and is the identity component of $SO(V,\eta)$ for Lorentz signature. Put $\mathfrak{so}(V,\eta):=T_I SO(V,\eta)$.

Form $\mathrm{Cl}(V,\eta)$ with the plus-quadratic-form convention $v^2=\eta(v,v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]). Let $\mathrm{Spin}_{\mathrm{full}}(10,1):=\operatorname{Spin}_{\mathrm{full}}(V,\eta)$. Its canonical action is $\lambda(s)v=\alpha(s)vs^{-1}$, using the grading involution $\alpha$ from [[def-real-clifford-group-and-normalized-pin-spin]]; it is a two-sheeted topological covering of $SO(V,\eta)$ by [[thm-real-pin-spin-topological-double-covers]]. Equip $\mathrm{Spin}_{\mathrm{full}}(10,1)$ with the lifted smooth atlas: whenever $U\subset SO(V,\eta)$ is a smooth coordinate neighborhood evenly covered by $\lambda$ and $W$ is one sheet over $U$, use $\lambda|_W:W\to U$ as a smooth chart. These charts have smooth transition maps because their transitions are the corresponding matrix-group coordinate changes; $\lambda$ is a local diffeomorphism. Since $\lambda$ is a group homomorphism, multiplication and inversion are smooth in this atlas. Define $\mathrm{Spin}^+(10,1):=\lambda^{-1}(SO^+(V,\eta))$ and let $\lambda^+$ be the restriction of $\lambda$; it is a two-sheeted smooth covering of $SO^+(V,\eta)$ with the restricted smooth structure. Write $\mathfrak{spin}^+(10,1):=T_1\mathrm{Spin}^+(10,1)$ and $d\lambda^+:\mathfrak{spin}^+(10,1)\to\mathfrak{so}(V,\eta)$ for the induced Lie-algebra isomorphism.

A **spin structure** on the time-oriented Lorentzian manifold $(M,g,\tau)$ is a smooth right principal $\mathrm{Spin}^+(10,1)$-bundle $\pi_P:P\to M$ and a smooth two-sheeted covering $\Lambda:P\to F_{g,\tau}^+M$ which is a map over $\operatorname{id}_M$ and is $\lambda^+$-equivariant. Explicitly, if $\pi_F:F_{g,\tau}^+M\to M$ is the frame projection, then $\pi_F\circ\Lambda=\pi_P$ and $\Lambda(ps)=\Lambda(p)\lambda^+(s)$ for every $p\in P$ and $s\in\mathrm{Spin}^+(10,1)$. In particular, each map $P_x\to(F_{g,\tau}^+M)_x$ between fibers over $x\in M$ is a two-sheeted cover. This is supplied structure data; no existence claim is made for an arbitrary $(M,g,\tau)$.

For the CJS convention, also supply a real vector space $\Delta$ of dimension $32$ and a unital representation $\rho:\mathrm{Cl}(V,\eta)\to\operatorname{End}_{\mathbb R}(\Delta)$. Its restriction to $\mathrm{Spin}^+(10,1)$ is required to be smooth for the lifted Lie-group structure and defines the associated real vector bundle

$$S:=P\times_{\rho|_{\mathrm{Spin}^+}}\Delta\longrightarrow M,$$

with equivalence $(ps,v)\sim(p,\rho(s)v)$. A **Majorana spinor** is a smooth real section of $S$; on an open set $U$, “nonzero” means not identically zero on $U$. The quotient has its smooth rank-$32$ vector-bundle structure induced from principal-bundle sections and the smooth representation ([[def-associated-bundle-to-a-principal-bundle-and-representation]], [[thm-associated-vector-bundle-is-well-defined]]). Requiring $(P,\Lambda,\Delta,\rho)$ as supplied data defines the structure and does not assert a Clifford-classification theorem or the existence of such data for every Lorentzian eleven-manifold. The selected dimension $32$ matches the source-reported CJS Majorana convention (Hamilton, §3.6; Gauntlett–Pakis, Appendix A); this mathematical definition only uses the supplied representation.

The Levi-Civita connection determines the spinor-bundle connection as follows. On an open set $U\subseteq M$, let $e=(e_0,\ldots,e_{10}):U\to F_{g,\tau}^+M$ be a smooth oriented, time-oriented orthonormal frame and define $\omega^e\in\Omega^1(U;\mathfrak{so}(V,\eta))$ by
$$\nabla^{LC}_X e_B=\sum_A e_A\,\omega^e{}^A{}_B(X).$$
Metric compatibility makes each matrix $\omega^e(X)$ $\eta$-skew. After shrinking $U$, choose a smooth local lift $s:U\to P$ with $\Lambda\circ s=e$ and set $\omega^s:=(d\lambda^+)^{-1}\omega^e\in\Omega^1(U;\mathfrak{spin}^+(10,1))$. If $\epsilon|_U=[s,\psi]$ in the associated-bundle chart, define
$$\nabla^S_X\epsilon|_U:=[s,\ X(\psi)+\rho_*(\omega^s(X))\psi],$$
where $\rho_*:=d(\rho|_{\mathrm{Spin}^+})$ is the differentiated representation. On an overlap with $s'=sh$, the frame and spin connection forms transform by $e'=e\lambda(h)$ and $\omega^{s'}=\operatorname{Ad}_{h^{-1}}\omega^s+h^{-1}dh$, while the components satisfy $\psi'=\rho(h)^{-1}\psi$. These transformation laws make the displayed local operators agree, so they define a smooth vector-bundle connection in the sense of [[def-connection-on-a-smooth-vector-bundle]]. This is the connection induced from the Levi-Civita connection through the spin lift, not an additional independent choice.

For a $p$-form $\omega$, Clifford multiplication uses

$$\omega\cdot\epsilon:=\frac1{p!}\omega_{A_1\cdots A_p}\,\gamma^{A_1\cdots A_p}\epsilon,$$

in an oriented orthonormal frame. Let $i_\eta:V\to\mathrm{Cl}(V,\eta)$ be the canonical generator map of the Clifford-algebra definition. In a local spin frame $s$ above $e$, write $e_A(x):=e(x)E_A$ and $\gamma_A:=\rho(i_\eta(E_A))=\rho(i_\eta(e(x)^{-1}e_A(x)))$, with $\gamma^A:=\eta^{AB}\gamma_B$. The displayed action on $[s,\psi]$ means $[s,(1/p!)\omega_{A_1\cdots A_p}\gamma^{A_1\cdots A_p}\psi]$. The product in this formula is the normalized antisymmetrization

$$\gamma^{A_1\cdots A_p}:=\frac1{p!}\sum_{\sigma\in S_p}\operatorname{sgn}(\sigma)\gamma^{A_{\sigma(1)}}\cdots\gamma^{A_{\sigma(p)}},$$

where $S_p$ is the permutation group of $\{1,\ldots,p\}$.

Thus $\gamma_A\gamma_B+\gamma_B\gamma_A=2\eta_{AB}I$. Equivariance makes this action independent of the chosen spin frame. This is the convention used in Hamilton, §3.1 and §3.6, and Gauntlett–Pakis, Appendix A.

The lift map is displayed by the commutative square $$\begin{array}{ccc}P&\xrightarrow{\Lambda}&F_{g,\tau}^+M\\\downarrow&&\downarrow\\M&\xrightarrow{\mathrm{id}_M}&M\end{array}$$. Its TikZ source is
```tikz
\begin{tikzcd}
P \arrow[r,"\Lambda"] \arrow[d] & F_{g,\tau}^+M \arrow[d] \\
M \arrow[r,equal] & M
\end{tikzcd}
```
The square commutes because $\Lambda$ is a bundle map over the identity of $M$; its fibers are the two-element fibers of the covering $\lambda^+$. The diagram records the definition only and is not used as a proof of existence.

## Facts & Assumptions

**Given:** An oriented, time-oriented Lorentzian eleven-manifold, a supplied spin lift over the identity, and a supplied real Clifford module.

[F1] [[def-eleven-dimensional-lorentzian-geometry]]: the metric is smooth, nondegenerate, and has the fixed signature and orientation needed to form the oriented orthonormal frame bundle; the supplied time orientation selects the orthochronous reduction.

[F2] [[def-real-clifford-group-and-normalized-pin-spin]], [[thm-real-pin-spin-topological-double-covers]]: the full-even Spin subgroup maps onto $SO(V,\eta)$ as a two-sheeted cover; its preimage over $SO^+(V,\eta)$ maps two-to-one onto that orthochronous subgroup.

[F3] [[def-clifford-algebra-of-a-quadratic-space]]: the Clifford algebra is the quotient with generator relation $v^2=\eta(v,v)1$.

[F4] [[def-smooth-principal-g-bundle]], [[def-associated-bundle-to-a-principal-bundle-and-representation]]: a smooth right principal bundle has smooth local sections, and its associated quotient uses $[ph,v]=[p,\rho(h)v]$.

[F5] [[thm-associated-vector-bundle-is-well-defined]]: for a smooth right principal bundle and smooth finite-dimensional real representation, the associated quotient has a smooth vector-bundle structure whose local trivializations come from principal sections.

[F6] [[def-connection-on-a-smooth-vector-bundle]]: a connection on a smooth vector bundle is a differential operator with the stated Leibniz rule.

[F7] [[thm-eleven-dimensional-levi-civita-existence-and-uniqueness]]: the metric has a unique torsion-free compatible connection, which determines its frame-bundle connection.

## Proof

**Proof technique:** verify the supplied lifts and associated constructions locally.

1.1 The metric frame set $F_{g,\tau}^+M$ has local smooth sections. At any point choose a future timelike tangent vector $v$ from $\tau$ and extend its components to a local smooth field; after shrinking the chart it remains future timelike; dividing by $\sqrt{-g(v,v)}$ normalizes it to length squared $-1$. Its orthogonal complement is positive definite, so choose ten independent smooth local sections of that complement and apply Gram–Schmidt, whose denominators remain positive after shrinking. Changing one spacelike sign if necessary gives the selected orientation. The right action by $SO^+(V,\eta)$ is free and transitive on each fiber, so $F_{g,\tau}^+M$ is the oriented, time-oriented orthonormal frame principal bundle. By the explicit base condition and equivariance in the Definition, $\Lambda$ restricts to a two-sheeted map on each fiber; [F2] gives the two points in each fiber of $\lambda^+$. [F1, F2, construct]

1.2 On a principal trivializing cover, the quotient relation $(ps,v)\sim(p,\rho(s)v)$ is compatible with multiplication because $\rho$ is a representation. In local sections $s_i$ with $s_j=s_i c_{ij}$, equality $[s_i,v_i]=[s_j,v_j]$ gives $v_j=\rho(c_{ij}^{-1})v_i$; these transition maps are smooth and satisfy the cocycle identities because the principal transitions do. The smooth associated-bundle theorem [F5] therefore applies to this exact quotient and supplies its rank-$32$ real vector-bundle structure. Since $\rho$ is a Clifford-algebra representation, its generators satisfy $\gamma(v)^2=\eta(v,v)I$; applying this to $v+w$ and subtracting the $v$ and $w$ relations yields $\gamma(v)\gamma(w)+\gamma(w)\gamma(v)=2\eta(v,w)I$. [F3, F4, F5, construct, algebra]

1.3 Each evenly covered smooth chart $U$ of $SO(V,\eta)$ has two sheets $W_1,W_2$ under the topological cover [F2]. The maps $\lambda|_{W_i}:W_i\to U$ define smooth charts on the cover; on overlaps their transitions are matrix-group chart changes, so this is a smooth atlas. The product of local sheet coordinates and the local inverse coordinates are smooth lifts of matrix multiplication and inversion, hence the group operations are smooth. Restricting to the preimage of the open subgroup $SO^+(V,\eta)$ gives the lifted Lie-group structure on $\mathrm{Spin}^+(10,1)$ and makes $d\lambda^+$ an isomorphism. [F2, construct, algebra]

1.4 On a local spin frame $s$ above an oriented, time-oriented orthonormal frame $e$, the Levi-Civita coefficients $\omega^e$ define $\omega^s=(d\lambda^+)^{-1}\omega^e$. If $s'=sh$, then $e'=e\lambda^+(h)$ and the induced frame connection transforms as $\omega^{s'}=\operatorname{Ad}_{h^{-1}}\omega^s+h^{-1}dh$. The associated-bundle components transform as $\psi'=\rho(h)^{-1}\psi$ by the quotient relation. Differentiating $\rho$ and applying the product rule gives $X\psi'+\rho_*(\omega^{s'}(X))\psi'=\rho(h)^{-1}(X\psi+\rho_*(\omega^s(X))\psi)$, so the local formula in the Definition agrees on overlaps and satisfies the connection Leibniz rule. [F2, F3, F4, F6, F7, construct, algebra]

2.1 For $s\in\mathrm{Spin}^+(10,1)$, the even Clifford action gives $svs^{-1}=\lambda^+(s)v$; applying $\rho$ shows that changing spin frames transforms the gamma generators and orthonormal-frame components by the same orthochronous Lorentz transformation. Their antisymmetrized contraction $\omega_{A_1\cdots A_p}\gamma^{A_1\cdots A_p}/p!$ is therefore invariant, so Clifford multiplication is globally well-defined on the associated real spinor bundle. [F2, F3, step 1.2, algebra] ∎
