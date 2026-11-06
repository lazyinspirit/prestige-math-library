---
id: def-cft-aut-o-formal-coordinate-group
kind: definition
title: Formal-coordinate change group Aut O
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §10.1
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal local coordinates and coordinate-change composition.
    - title: Edward Frenkel, Vertex Algebras and Algebraic Curves, Séminaire Bourbaki 875 (2000), §§4.1–4.3
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: Aut O, formal-coordinate torsors, and the right-action convention.
---

## Definition

Let $\mathcal O:=\mathbb C\llbracket t\rrbracket$ with its $t$-adic topology, whose neighborhoods of $0$ are the ideals $t^k\mathcal O$, and let $\mathfrak m=(t)$. The group of formal-coordinate changes is
$$\operatorname{Aut}\mathcal O:=\{\rho(t)=a_1t+a_2t^2+a_3t^3+\cdots:a_i\in\mathbb C,\ a_1\ne0\}.$$
Each series has a unique compositional inverse: after the linear coefficient is inverted, the coefficient of degree $k$ in the inverse-composition equation is $a_1$ times the unknown degree-$k$ coefficient plus terms already determined. We use the **right-composition product**
$$(\rho_1\rho_2)(t):=\rho_2(\rho_1(t)).$$
It is the opposite of the usual order for composing the displayed functions. The identity is $t$, and $\operatorname{Aut}\mathcal O$ is the group of continuous $\mathbb C$-algebra automorphisms of $\mathcal O$ preserving $\mathfrak m$.

For any commutative $\mathbb C$-algebra $A$, put $\mathcal O_A:=A\llbracket t\rrbracket$ with its $t$-adic topology. Write $\operatorname{Aut}_A\mathcal O_A$ for the group of continuous $A$-algebra automorphisms preserving $(t)$; equivalently, its elements are the substitutions $\rho(t)=a_1t+a_2t^2+\cdots$ with $a_i\in A$ and $a_1\in A^\times$, with the same right-composition product. The coefficient recursion for the inverse uses only addition, multiplication, and inversion of $a_1$, so it works over every such $A$.

Write $\ell_n:=-t^{n+1}\partial_t$ for $n\ge0$. With the right-composition Lie bracket, $[\ell_m,\ell_n]=(m-n)\ell_{m+n}$. The subgroup $\operatorname{Aut}_+\mathcal O=\{t+O(t^2)\}$ is tangent to the identity and has Lie algebra $t^2\mathbb C\llbracket t\rrbracket\partial_t=\prod_{n\ge1}\mathbb C\ell_n$, the $t$-adically completed span of the $\ell_n$ for $n\ge1$. The product means that arbitrary coefficient sequences are allowed; modulo $t^{k+1}\partial_t$, only finitely many coefficients remain.

For a substitution series $\rho$, write $\phi_\rho(f(t)):=f(\rho(t))$ for the corresponding continuous algebra automorphism. Then $\phi_{\rho_1\rho_2}=\phi_{\rho_1}\circ\phi_{\rho_2}$ under the displayed product. A **formal coordinate** on a $J$-adically complete $\mathbb C$-algebra $(R,J)$ is a continuous algebra isomorphism $\tau:R\xrightarrow{\sim}\mathcal O$ with $\tau(J)=\mathfrak m$. Define its right action by
$$\tau\cdot\rho:=\phi_{\rho}^{-1}\circ\tau.$$
More generally, for a commutative $\mathbb C$-algebra $A$ and a $J$-adically complete $A$-algebra $R$, a relative formal coordinate is a continuous $A$-algebra isomorphism $\tau:R\xrightarrow{\sim}\mathcal O_A$ with $\tau(J)=t\mathcal O_A$, with the same inverse-postcomposition action. In either case,
$$(\tau\cdot\rho_1)\cdot\rho_2=\phi_{\rho_2}^{-1}\phi_{\rho_1}^{-1}\tau=\phi_{\rho_1\rho_2}^{-1}\tau=\tau\cdot(\rho_1\rho_2).$$
The action is free because $\tau$ is onto; it is transitive on any nonempty coordinate set because the unique series $\rho$ carrying $\tau_1$ to $\tau_2$ is specified by $\phi_\rho=\tau_1\tau_2^{-1}$. If $x:=\tau^{-1}(t)$ is the corresponding parameter in $J$, then $(\tau\cdot\rho)^{-1}(t)=\rho(x)$. Thus the action on parameters is ordinary substitution, while its action on the ring isomorphisms uses the inverse. No formal power series is assumed to converge.
