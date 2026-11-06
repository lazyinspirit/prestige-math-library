---
id: def-f4-crepant-resolution-and-matter-surface
kind: definition
title: "Crepant resolution and matter surface"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
deps:
  - def-birational-morphism-schemes
  - def-flat-morphism-schemes
  - def-f4-weierstrass-model-on-a-line-bundle
  - def-proper-morphism
dependency_roles:
  def-birational-morphism-schemes: mathematical-premise
  def-flat-morphism-schemes: mathematical-premise
  def-f4-weierstrass-model-on-a-line-bundle: mathematical-premise
  def-proper-morphism: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§4.5–5.6, pp. 33–51; resolved fiber curves, matter surfaces, and their chamber dependence."
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: "https://arxiv.org/pdf/1401.7844v2"
      locator: "§2 and §5.1; genus-one/Jacobian distinctions and the Weierstrass hypersurface/section construction."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $B$ be a smooth integral complex algebraic threefold and let $\mathcal L\to B$ be an algebraic line bundle. Let $p:W\to B$ be the weighted projective bundle of $\mathcal L^{\otimes2}\oplus\mathcal L^{\otimes3}\oplus\mathcal O_B$ with coordinate weights $(2,3,1)$. In local trivializations the coordinate twists are $x\in\mathcal O_W(2)\otimes p^*\mathcal L^{\otimes2}$, $y\in\mathcal O_W(3)\otimes p^*\mathcal L^{\otimes3}$, and $z\in\mathcal O_W(1)$. Let $Y_W\subseteq W$ be the integral hypersurface $y^2=x^3+f xz^4+gz^6$, where $f$ and $g$ are algebraic sections of $\mathcal L^{\otimes4}$ and $\mathcal L^{\otimes6}$, respectively, and set $\pi_W=p|_{Y_W}$. Let $W^\circ\subseteq W$ be its smooth open containing $Y_W$. Write $i:Y_W\hookrightarrow W^\circ$ for the hypersurface inclusion and $M=\mathcal O_W(6)\otimes p^*\mathcal L^{\otimes6}|_{W^\circ}$ for the line bundle of its defining section. The integral fourfold hypersurface is the zero subscheme of a nonzero section of $M$, hence an effective Cartier divisor in the smooth $W^\circ$. Define its dualizing (canonical) sheaf by the local complete-intersection Ext formula
$$\omega_{Y_W}:=\mathcal E xt^1_{\mathcal O_{W^\circ}}\!\left(i_*\mathcal O_{Y_W},\det\Omega^1_{W^\circ/\mathbb C}\right),$$
regarded as an $\mathcal O_{Y_W}$-module via the closed immersion $i$.
The Cartier resolution $0\to M^{-1}\to\mathcal O_{W^\circ}\to i_*\mathcal O_{Y_W}\to0$ computes this as the invertible line $i^*(\det\Omega^1_{W^\circ/\mathbb C}\otimes M)$. For a smooth complex algebraic fourfold $\widehat Y$, set $\omega_{\widehat Y}=\det\Omega^1_{\widehat Y/\mathbb C}$.

A **crepant resolution** of $Y_W$ is specified data
$$\rho:\widehat Y\longrightarrow Y_W$$
where $\widehat Y$ is a smooth integral complex algebraic fourfold, $\rho$ is proper (separated, of finite type, and universally closed) and birational (it maps the generic point to the generic point and induces an isomorphism of function fields), and $\omega_{\widehat Y}\cong\rho^*\omega_{Y_W}$ as line bundles. In this carrier, “crepant” means exactly this canonical-line isomorphism. Set $\widehat\pi:=\pi_W\circ\rho$. For $b\in B$, a geometric fiber means base change along $\operatorname{Spec}\overline{\kappa(b)}\to B$. A **resolution chamber** is the specified resolution data $(\rho,\mathcal C)$, where $\mathcal C$ is a specified collection of irreducible curve components in geometric fibers of $\widehat\pi$, including the chosen components used to form matter surfaces below. Matter surfaces attached to different resolution chambers are separate data. This definition does not assert that a resolution exists, is unique, projective, or flat over $B$.

If $T\subseteq B$ is an integral closed subvariety with generic point $\eta_T$, its **geometric generic fiber** is the scheme $\widehat Y_{\bar\eta_T}:=\widehat Y\times_B\operatorname{Spec}\overline{\kappa(\eta_T)}$, where $\overline{\kappa(\eta_T)}$ is an algebraic closure of the residue field at $\eta_T$. Its fiber configuration means the isomorphism class of this scheme. A **codimension-two fiber-change locus relative to a specified integral closed divisor $D\subset B$** is a specified collection of irreducible reduced closed curves $\Sigma\subset D$ such that $\dim_\mathbb C\Sigma=1$ (hence $\operatorname{codim}_B\Sigma=2$) and the geometric generic fibers over $\eta_\Sigma$ and $\eta_D$ are nonisomorphic as schemes after base change along any chosen pair of $\mathbb C$-embeddings of their residue-field algebraic closures into a common algebraically closed field. A **matter curve** is one such specified $\Sigma_R$; $D$ is typically a chosen discriminant component.

A **selected fibral curve family** is a specified closed reduced irreducible surface $\mathcal S_R\hookrightarrow\widehat Y$ with $\widehat\pi(\mathcal S_R)\subseteq\Sigma_R$ such that the restriction $q_R:\mathcal S_R\to\Sigma_R$ is proper (separated, of finite type, and universally closed) and flat (each $\mathcal O_{\mathcal S_R,s}$ is a flat $\mathcal O_{\Sigma_R,q_R(s)}$-module), every geometric fiber is nonempty and pure of dimension one, and its geometric generic fiber is isomorphic to $\mathbb P^1$ and is one of the chosen components in $\mathcal C$. The surface $\mathcal S_R$ is the **matter surface** for that resolution chamber. Its complex dimension is two; its associated integral algebraic 2-cycle $[\mathcal S_R]$ is the coefficient-one generator of the free abelian group on irreducible two-dimensional closed subvarieties of $\widehat Y$. The definition provides no identification between data attached to distinct choices.

## Definition references

[[def-birational-morphism-schemes]]

[[def-flat-morphism-schemes]]

[[def-f4-weierstrass-model-on-a-line-bundle]]

[[def-proper-morphism]]

[Weigand, §§4.5–5.6](https://arxiv.org/pdf/1806.01854v1)

## Facts & Assumptions

**Given:** A smooth complex algebraic threefold $B$, its algebraic Weierstrass fourfold $\pi_W:Y_W\to B$, the smooth ambient open $W^\circ$, and, when a matter surface is considered, a chosen resolution $\rho$, a specified divisor $D$, a matter curve $\Sigma_R\subset D$, and one selected curve family.

[F1] The Weierstrass model is the algebraic hypersurface over the line-bundle data of [[def-f4-weierstrass-model-on-a-line-bundle]]. Its defining section lies in the line bundle $M$ named in the Definition, and the model lies in the smooth ambient open $W^\circ$. The weighted-projective bundle is integral over the integral base, and the defining section has nonzero $y^2$ and $x^3$ terms; hence its local equations are nonzerodivisors in the regular ambient local domains. Thus $i$ is Cartier and its resolution $0\to M^{-1}\to\mathcal O_{W^\circ}\to i_*\mathcal O_{Y_W}\to0$ is exact.

[F2] The proper, birational, and flat map terms have the exact scheme-theoretic meanings stated in the Definition, matching [[def-proper-morphism]], [[def-birational-morphism-schemes]], and [[def-flat-morphism-schemes]]. The canonical line on $Y_W$ and the canonical line on $\widehat Y$ are the ones explicitly defined in the Definition.

[F3] A matter curve includes the specified divisor $D$ and the nonisomorphism comparison of geometric generic fibers in the Statement. A matter surface is a reduced irreducible algebraic surface by the selected data; its integral algebraic cycle is the coefficient-one formal generator attached to that irreducible subvariety. Compactness is not needed to define this algebraic cycle.

[F4] Flatness and the one-dimensional geometric fibers are hypotheses on the chosen map $q_R$; no theorem supplies a resolution, a matter curve, a rational fibral component, or a flat family in this definition.



## Proof

**Proof technique:** verify the canonical-line comparison is well typed and verify the dimension and cycle of the specified matter surface.

1.1 By [F1], the Cartier resolution is exact. Applying $\mathcal H om_{\mathcal O_{W^\circ}}(-,\det\Omega^1_{W^\circ/\mathbb C})$ computes $\mathcal E xt^1$ as the cokernel of multiplication by the defining section, namely $i_*i^*(\det\Omega^1_{W^\circ/\mathbb C}\otimes M)$. Thus the defined dualizing sheaf is invertible. The determinant of differentials on the smooth fourfold $\widehat Y$ is also a line bundle, so $\omega_{\widehat Y}\cong\rho^*\omega_{Y_W}$ is a well-typed isomorphism of line bundles. Properness and birationality are separate required properties of $\rho$ and are not consequences of that isomorphism. [F1, F2, given, algebra]

2.1 The selected $\mathcal S_R$ is an irreducible reduced closed surface by its stated data. Thus $[\mathcal S_R]$ is the coefficient-one generator of the cycle group on its irreducible two-dimensional subvariety, a complex two-cycle (real dimension four). Proper flatness and the stated fiber conditions are hypotheses, not existence conclusions. [F3, F4, given, algebra] ∎



## Commutative diagram

```tikzcd
\mathcal S_R \arrow[r,hook] \arrow[d,"q_R"'] & \widehat Y \arrow[d,"\widehat\pi"] \\
\Sigma_R \arrow[r,hook] & B
```

The square commutes because $q_R$ is the restriction of $\widehat\pi$ to $\mathcal S_R$; it records the surface family and base curve used in the definition.
## Remarks

The matter surface is a geometric cycle in a chosen resolution. It is not, by definition, a representation, a gauge algebra, a chiral index, or evidence that a crepant resolution exists.
