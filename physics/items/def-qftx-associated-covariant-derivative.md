---
id: def-qftx-associated-covariant-derivative
kind: definition
title: Covariant derivative on an associated representation bundle
status: draft
origin: session
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited only through the supplied Lie(G) and principal-connection constructions."
deps:
  - def-countable-choice
  - def-qftx-principal-connection-form
  - def-smooth-principal-g-bundle
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - thm-associated-vector-bundle-is-well-defined
  - def-differential-of-a-smooth-map
  - thm-chain-rule-for-differentials-of-smooth-maps
  - def-left-maurer-cartan-form
  - def-conjugation-and-the-adjoint-representation-of-a-lie-group
  - def-exponential-map-of-a-lie-group
  - thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-finite-dimensional-representation-of-a-group-over-a-field: mathematical-premise
  def-associated-bundle-to-a-principal-bundle-and-representation: mathematical-premise
  thm-associated-vector-bundle-is-well-defined: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-chain-rule-for-differentials-of-smooth-maps: mathematical-premise
  def-left-maurer-cartan-form: mathematical-premise
  def-conjugation-and-the-adjoint-representation-of-a-lie-group: mathematical-premise
  def-exponential-map-of-a-lie-group: mathematical-premise
  thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories (full text)"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§1.3.3 and 1.4.1, printed pp. 37–42: the induced associated connection, local covariant derivative, and Leibniz rule."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 1 §1.6 and Chapter 5 §5.4, printed pp. 13–16 and 92–98: associated-section coordinates and principal-connection transition forms."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M$ be a finite-dimensional smooth manifold, $G$ a finite-dimensional real Lie group, $\pi:P\to M$ a smooth right principal $G$-bundle, and $\omega$ the principal connection 1-form of a supplied horizontal distribution. Fix a finite-dimensional complex representation $\rho:G\to\operatorname{GL}_{\mathbb C}(V)$ that is smooth, and let $E=P\times_\rho V$ be its associated vector bundle with relation $[pg,v]=[p,\rho(g)v]$. Define $\rho_*:=d\rho_e:\mathfrak g\to\operatorname{End}_{\mathbb C}(V)$, where the differential is taken after viewing $\rho$ as a smooth matrix-valued map. For any open cover with smooth local sections $s_i:U_i\to P$, write $A_i=s_i^*\omega$. A smooth section $\sigma$ of $E$ has unique local components $\psi_i:U_i\to V$ given by $\sigma(x)=[s_i(x),\psi_i(x)]$. Define the **associated covariant derivative** $\nabla^\omega\sigma$ by its local components

$$
(\nabla^\omega\sigma)_i=d\psi_i+\rho_*(A_i)\psi_i,
$$

where $(\rho_*(A_i)\psi_i)(X)=\rho_*(A_i(X))\psi_i$ for $X\in TU_i$. These expressions patch to a smooth $E$-valued 1-form on $M$, independently of the chosen local sections, and satisfy $\nabla^\omega(f\sigma)=df\otimes\sigma+f\nabla^\omega\sigma$ for every smooth scalar function $f$ on $M$.

## Definition references

[Vákár, §1.3.3, induced connections](https://arxiv.org/html/2110.06334)

[Vákár, §1.4.1, covariant derivatives](https://arxiv.org/html/2110.06334)

[Neeb, Chapter 1 §1.6, associated bundles](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[Neeb, Chapter 5 §5.4, local connection forms](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[[def-qftx-principal-connection-form|Principal connection form and right-action convention]]

[[def-smooth-principal-g-bundle|Smooth right principal bundle]]

[[def-finite-dimensional-representation-of-a-group-over-a-field|Finite-dimensional representation]]

[[def-associated-bundle-to-a-principal-bundle-and-representation|Associated representation bundle quotient]]

[[thm-associated-vector-bundle-is-well-defined|Associated vector-bundle charts and transition functions]]

[[def-differential-of-a-smooth-map|Differential of a smooth map]]

[[thm-chain-rule-for-differentials-of-smooth-maps|Chain rule for differentials]]

[[def-left-maurer-cartan-form|Left Maurer–Cartan form]]

[[def-conjugation-and-the-adjoint-representation-of-a-lie-group|Adjoint action from conjugation]]

[[def-exponential-map-of-a-lie-group|Exponential curve for a prescribed tangent vector]]

[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields|Initial tangent of the one-parameter subgroup]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth right principal bundle $P\to M$, a principal connection form $\omega$, a smooth finite-dimensional complex representation $\rho$, its associated vector bundle $E$, and a smooth section $\sigma$ of $E$.

[A1] The only inherited choice assumption is $\mathrm{AC}_\omega$, used in the supplied Lie-group tangent-bracket and horizontal-connection constructions. [[def-countable-choice]]

[F1] The smooth right action has equivariant local principal charts and each point has unique group coordinates relative to a local section. [[def-smooth-principal-g-bundle]]

[F2] The associated quotient relation is $[pg,v]=[p,\rho(g)v]$. [[def-associated-bundle-to-a-principal-bundle-and-representation]]

[F3] The quotient has smooth vector-bundle charts induced by local sections; its coordinate transition is the representation applied to the principal transition element. [[thm-associated-vector-bundle-is-well-defined]]

[F4] The principal form reproduces fundamental fields and obeys $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$. [[def-qftx-principal-connection-form]]

[F5] The left Maurer–Cartan form is $(\theta_L)_g=d(L_{g^{-1}})_g$, so $\theta_L(g)(X)=g^{-1}dg(X)$ in group notation. [[def-left-maurer-cartan-form]]

[F6] Differentials are linear and satisfy the chain rule. [[def-differential-of-a-smooth-map]], [[thm-chain-rule-for-differentials-of-smooth-maps]]

[F7] For fixed $g\in G$, the adjoint map is $\operatorname{Ad}_g=d(C_g)_e$, where $C_g(h)=ghg^{-1}$. [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]

[F8] For each $W\in\mathfrak g$, $\exp_G(W)=\gamma_W(1)$, where $\gamma_W$ is the unique one-parameter subgroup with initial tangent $W$. [[def-exponential-map-of-a-lie-group]], [[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]]

[F9] The representation $\rho$ is a group homomorphism, so $\rho(gh)=\rho(g)\rho(h)$ and $\rho(e)=\operatorname{id}_V$. [[def-finite-dimensional-representation-of-a-group-over-a-field]]

## Proof

1.1 On a principal chart, each $p\in\pi^{-1}(U_i)$ has a unique expression $p=s_i(x)h$. The associated-bundle chart therefore assigns $[s_i(x)h,v]$ the vector coordinate $\rho(h)v$. In particular $[s_i(x),\psi_i(x)]$ determines a unique smooth component $\psi_i$. If $s_j=s_i g_{ij}$, then $[s_j,\psi_j]=[s_i,\rho(g_{ij})\psi_j]$; equality with $[s_i,\psi_i]$ gives $\psi_j=\rho(g_{ij}^{-1})\psi_i$. [F1, F2, F3, given]

2.1 In a finite basis of $V$, $\operatorname{GL}_{\mathbb C}(V)$ is the open subset where the determinant is nonzero, so its tangent space at the identity is $\operatorname{End}_{\mathbb C}(V)$. Thus the differential $\rho_*$ is real-linear by [F6]. For fixed $g$, [F9] gives $\rho\circ C_{g^{-1}}=C_{\rho(g^{-1})}\circ\rho$. The derivative of target conjugation is the linear map $T\mapsto\rho(g^{-1})T\rho(g)$, while the derivative of source conjugation is $\operatorname{Ad}_{g^{-1}}$ by [F7]. The chain rule [F6] therefore gives $\rho_*(\operatorname{Ad}_{g^{-1}}Z)=\rho(g^{-1})\rho_*(Z)\rho(g)$. For a smooth transition $g_{ij}:U_i\cap U_j\to G$, differentiation of $s_j=s_i g_{ij}$ decomposes a tangent vector into the right translate of the tangent from $s_i$ and the fundamental vertical vector with generator $\theta_L(g_{ij})(X)$, by [F5]. Reproduction and equivariance in [F4] yield $A_j=\operatorname{Ad}_{g_{ij}^{-1}}A_i+\theta_L(g_{ij})$. [A1, F1, F4, F5, F6, F7, F9, step 1.1]

3.1 Put $g=g_{ij}(x)$, $Z=\theta_L(g)(X)$, and $R=\rho(g^{-1})$. Let $c$ be a smooth curve through $x$ with $c'(0)=X$, and write $h(t)=g_{ij}(c(t))$. By [F5], $h(0)=g$ and $h'(0)=d(L_g)_eZ$. For each $t\in\mathbb R$, $s\mapsto\gamma_Z(ts)$ is a one-parameter subgroup with initial tangent $tZ$, so uniqueness in [F8] and the exponential definition give $\exp_G(tZ)=\gamma_Z(t)$. Hence $k(t):=g\exp_G(tZ)=g\gamma_Z(t)$ has the same initial value and tangent as $h$. By [F6], differentiating the smooth map $q\mapsto\rho(q^{-1})$ along these curves gives the same derivative at zero. Since $k(t)^{-1}=\gamma_Z(-t)g^{-1}$, the homomorphism law [F9] and $\gamma_Z'(0)=Z$ yield $dR(X)=-\rho_*(Z)R$. Using step 1.1, step 2.1, and the adjoint-intertwining identity in step 2.1, $d\psi_j(X)+\rho_*(A_j(X))\psi_j=-\rho_*(Z)R\psi_i+R\,d\psi_i(X)+\rho_*(\operatorname{Ad}_{g^{-1}}A_i(X))R\psi_i+\rho_*(Z)R\psi_i=R\bigl(d\psi_i(X)+\rho_*(A_i(X))\psi_i\bigr)$. The two Maurer–Cartan terms cancel, and the remaining equality uses $\rho(g)R=\mathrm{id}_V$. This is precisely the associated-bundle coordinate transition for an $E$-valued 1-form, so the local expressions define one global smooth $E$-valued 1-form and do not depend on the selected sections. [F2, F3, F4, F5, F6, F8, F9, step 1.1, step 2.1]

4.1 In any local chart, multiplication by a scalar function obeys $d(f\psi_i)=df\otimes\psi_i+f\,d\psi_i$; the endomorphism term obeys $\rho_*(A_i)(f\psi_i)=f\rho_*(A_i)\psi_i$ by pointwise linearity. Adding these identities gives $(\nabla^\omega(f\sigma))_i=df\otimes\psi_i+f(\nabla^\omega\sigma)_i$, which is the asserted Leibniz rule in the associated bundle. If $V=0$, every term is zero and the same formulas hold; the argument is pointwise and also applies on an empty base. [F2, F3, step 1.1, step 3.1, algebra] ∎


## Remarks

For clarity, the square below describes how the local covariant-derivative formula is transported between two local sections. The top arrow changes the section and its field components together; the lower arrow is the associated vector-bundle coordinate change. Step 3.1 proves the square commutes, and the proof does not rely on the diagram.

```tikzcd
\begin{tikzcd}[column sep=huge,row sep=large]
\{\psi_i\in C^\infty(U_{ij},V)\} \arrow[r,"\psi_i\mapsto\rho(g_{ij}^{-1})\psi_i"] \arrow[d,"\psi\mapsto d\psi+\rho_*(A_i)\psi"'] & \{\psi_j\in C^\infty(U_{ij},V)\} \arrow[d,"\psi\mapsto d\psi+\rho_*(A_j)\psi"] \\
\Omega^1(U_{ij},V) \arrow[r,"\alpha\mapsto\rho(g_{ij}^{-1})\alpha"'] & \Omega^1(U_{ij},V)
\end{tikzcd}
```
