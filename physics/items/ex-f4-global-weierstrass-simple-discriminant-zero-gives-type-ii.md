---
id: ex-f4-global-weierstrass-simple-discriminant-zero-gives-type-ii
kind: example
title: "A smooth Weierstrass surface with a type II cusp fiber"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the projective Weierstrass and local-flatness suppliers."
deps:
  - def-f4-weierstrass-model-on-a-line-bundle
  - def-f4-genus-one-fibration
  - def-f4-elliptic-fibration-with-section
  - thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces
  - thm-adjunction-smooth-plane-curve
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-h0-structure-sheaf-proper-curve
  - lem-noetherian-local-flatness-criterion-finite-over-target
  - thm-jacobian-criterion-affine-variety
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-smooth-locus-open
  - thm-regular-equals-smooth-over-perfect-field
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field
  - def-axiom-of-choice
dependency_roles:
  def-f4-weierstrass-model-on-a-line-bundle: mathematical-premise
  def-f4-genus-one-fibration: mathematical-premise
  def-f4-elliptic-fibration-with-section: mathematical-premise
  thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces: mathematical-premise
  thm-adjunction-smooth-plane-curve: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-h0-structure-sheaf-proper-curve: mathematical-premise
  lem-noetherian-local-flatness-criterion-finite-over-target: mathematical-premise
  thm-jacobian-criterion-affine-variety: mathematical-premise
  thm-nonaffine-regular-local-ring-is-ufd: mathematical-premise
  thm-smooth-locus-open: mathematical-premise
  thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  thm-proper-ideal-contained-in-maximal-ideal: mathematical-premise
  cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Miranda, The Basic Theory of Elliptic Surfaces, Lecture I §6, pp. 14–15"
      url: "https://www.math.colostate.edu/~miranda/BTES-Miranda.pdf"
      locator: "Theorem I.6.6, irreducible singular fibers: nodal type I1 and cuspidal type II."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§4.1, Table 4.1, type II valuation row."
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

## Example

Let $B=\mathbb P^1_{\mathbb C}$, $L=\mathcal O_{\mathbb P^1}(2)=K_B^{-1}$, $f=0$, and $g=u^{12}-v^{12}\in H^0(B,L^6)$, where $[u:v]$ are homogeneous coordinates. Let $p:W\to B$ be the weighted projective bundle with coordinate weights $(2,3,1)$ and twists $x\in\mathcal O_W(2)\otimes p^*L^2$, $y\in\mathcal O_W(3)\otimes p^*L^3$, and $z\in\mathcal O_W(1)$. Let $Y\subset W$ be the hypersurface $y^2=x^3+g z^6$, and set $\pi=p|_Y:Y\to B$. Then $Y$ is a smooth connected projective surface; $\pi$ is proper (separated, of finite type, and universally closed), flat (each local ring $\mathcal O_{Y,y}$ is flat over $\mathcal O_{B,\pi(y)}$), and surjective, and it has the regular section $s:B\to Y$ given by the distinguished point $[1:1:0]$. Let $\eta$ be the generic point of $B$ and set $Y_{\bar\eta}:=Y\times_B\operatorname{Spec}\overline{\mathbb C(B)}$. This geometric generic fiber is a smooth proper geometrically integral curve with $\dim_{\overline{\mathbb C(B)}}H^1(Y_{\bar\eta},\mathcal O_{Y_{\bar\eta}})=1$, so $\pi$ is a genus-one fibration with section. Its exactly twelve singular fibers lie over the simple zeros of $g$; each is an irreducible reduced curve with normalization $\mathbb P^1_{\mathbb C}$ and one singular point whose local analytic equation is $Y^2=X^3$. Thus each is type II under the preceding classification convention, where type II means an irreducible rational fiber with one ordinary cusp. The smooth total surface contains these singular fibers without being singular itself.

## Example references

[[def-f4-weierstrass-model-on-a-line-bundle]]

The term **elliptic surface with section** uses [[def-f4-elliptic-fibration-with-section]]: the projection is proper, flat and surjective, has a regular section, and has smooth geometrically integral genus-one geometric generic fiber as defined in [[def-f4-genus-one-fibration]].

[[thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces]]

## Facts & Assumptions

**Given:** $B=\mathbb P^1_{\mathbb C}$, $L=\mathcal O(2)$, and the Weierstrass coefficients $f=0$, $g=u^{12}-v^{12}$.

[A1] Full AC is [[def-axiom-of-choice]], inherited from the projective and local-flatness suppliers.

[F1] The equation is a section of $\mathcal O_W(6)\otimes p^*L^6$ and the model has the distinguished section $z=0$ ([[def-f4-weierstrass-model-on-a-line-bundle]]).

[F2] The weighted-projective ambient is smooth along the hypersurface: on $z\ne0$ the weight-one coordinate gives a smooth chart; on $z=0$, the equation forces $x,y\ne0$, whose weighted stabilizer is trivial. The relative Jacobian criterion detects smoothness of the hypersurface by a nonzero gradient ([[thm-jacobian-criterion-affine-variety]]). The smooth locus is open ([[thm-smooth-locus-open]]); if the nonsmooth locus were nonempty, its intersection with an affine chart would give a proper ideal contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]), and the residue field of that closed point would be $\mathbb C$ ([[cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]]). Thus checking the complex points in step 2.1 suffices.

[F3] The local flatness criterion applies to a finite module over a Noetherian local algebra: if reduction modulo a proper ideal is flat over the quotient base and the multiplication map from that ideal tensored with the module is injective, then the module is flat over the base ([[lem-noetherian-local-flatness-criterion-finite-over-target]]).

[F4] For a smooth geometrically integral plane cubic $C\subset\mathbb P^2_k$ over any algebraically closed field $k$ of characteristic zero, adjunction gives $\omega_C\cong\mathcal O_C$ ([[thm-adjunction-smooth-plane-curve]]). Since $H^0(C,\mathcal O_C)=k$ ([[thm-h0-structure-sheaf-proper-curve]]), Serre duality gives $\dim_kH^1(C,\mathcal O_C)=\dim_kH^0(C,\omega_C)=1$ ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]). Thus $C$ is a smooth proper geometrically integral genus-one curve in the sense of [[def-f4-genus-one-fibration]].

[F5] The preceding classification defines type II as an irreducible rational fiber with one ordinary cusp, locally $v^2=u^3$ ([[thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces]]). This is a geometric type label; the separate valuation-table derivation is not used in this example.

[F6] For each $a\in k$, where $k$ is any algebraically closed field of characteristic zero, the weighted-projective cubic $C_a\subset\mathbb P(2,3,1)$ given by $y^2=x^3+a z^6$ is isomorphic to the plane cubic $Y^2Z=X^3+aZ^3$ by $[x:y:z]\mapsto[xz:y:z^3]$. The map has no base point on $C_a$. The opens $D_+(z),D_+(y)$ cover $C_a$, as do $D_+(Z),D_+(Y)$ on the plane cubic. On $D_+(z)$ it is the coordinate isomorphism $(x/z^2,y/z^3)=(X/Z,Y/Z)$. On $D_+(y)$, set $y=1$; the residual $\mu_3$ acts by $(x,z)\mapsto(\lambda^2x,\lambda z)$. Its invariant ring is generated by $u=xz$, $v=z^3$, and $w=x^3$, with relation $u^3=vw$; imposing $w+av^2=1$ gives $v=u^3+av^3$, exactly the plane-cubic chart $Y=1$. These chart maps agree on their overlap, proving the isomorphism.

[F7] A finite-type smooth complex scheme is regular ([[thm-regular-equals-smooth-over-perfect-field]]); its regular local rings are domains ([[thm-nonaffine-regular-local-ring-is-ufd]]). Thus distinct irreducible components of $Y$ are disjoint; since $Y$ is noetherian, its connected components are its finitely many irreducible components.



## Verification

**Proof technique:** check properness, flatness, smoothness of the total surface, and the local singularity of each fiber.

1.1 The weighted projective bundle is projective over $B$, and the hypersurface is closed in it, so $\pi$ is projective and therefore proper. The coordinate $z=0$ defines the distinguished section. Since $g=u^{12}-v^{12}$ is a degree-twelve section of $\mathcal O(12)=L^6$, the equation is globally well-defined in the line-bundle twists of [F1]. The polynomial $u^{12}-v^{12}$ has twelve distinct roots on $\mathbb P^1$, none at $[1:0]$, because its affine roots are the twelve distinct twelfth roots of unity and its derivative $12u^{11}$ is nonzero at each. [F1, given, algebra]

2.1 On the chart $z\ne0$, use local coordinates $x=X/z^2$, $y=Y/z^3$ and a base parameter $t$. The equation is $F=y^2-x^3-g(t)=0$. A singular point of the total hypersurface would satisfy $F=0$, $2y=0$, $-3x^2=0$, and $-g'(t)=0$, hence $x=y=0$, $g(t)=g'(t)=0$, contradicting the simple-root property in step 1.1. At $z=0$ the equation forces $x,y\ne0$; the stabilizer is trivial since $\lambda^2=\lambda^3=1$ implies $\lambda=1$, and the derivative in the $y$ direction is $2y\ne0$. Thus the total hypersurface is smooth by [F2]. [F1, F2, step 1.1, algebra]

2.2 By [F6], each fiber over $t\in B$ is isomorphic to the plane cubic $Y^2Z=X^3+g(t)Z^3$. For $a=g(t)\ne0$, the partial derivatives $-3X^2,2YZ,Y^2-3aZ^2$ have no common zero on this cubic, so it is smooth. It is geometrically integral by a direct factorization test. Over the algebraic closure $K=\overline{\mathbb C}$, the polynomial $X^3+a$ has three distinct roots because $a\ne0$ and its derivative $3X^2$ has no common root with it. If a reduced fraction $r=p/q\in K(X)$ had $r^2=X^3+a$, then at any root $\alpha$ the multiplicity of $X-\alpha$ in $r^2$ would be $2(\operatorname{ord}_\alpha p-\operatorname{ord}_\alpha q)$, an even integer, whereas its multiplicity in $X^3+a$ is one. Thus $X^3+a$ is not a square, so the quadratic $Y^2-(X^3+a)$ is irreducible in $K(X)[Y]$. A factorization in $K[X,Y]$ would give one there; a factor depending only on $X$ would divide the leading coefficient $1$, so no such nonunit factor exists. A homogeneous factor of its projective closure that dehomogenizes to a constant would be a power of $Z$, but $Z$ does not divide $Y^2Z-X^3-aZ^3$. Thus there is no extra component at infinity, and the plane cubic is geometrically integral. It is genus one by [F4]. For $a=0$, the affine equation $Y^2=X^3$ is irreducible because $X^3$ is not a square in $\mathbb C(X)$; its only singular point is $(0,0)$, with local equation $Y^2-X^3=0$, an ordinary cusp, and the point at infinity is smooth. Thus exactly the twelve simple zeros in step 1.1 give integral cuspidal fibers. [F2, F4, F6, step 1.1, algebra]

3.1 The smooth projective total surface $Y$ is connected. By [F7], each connected component is an irreducible projective surface. Properness makes its image in $B$ closed; irreducibility of the component makes that image irreducible, so it is either a point or all of $B$. It cannot be a point because a surface cannot lie in a one-dimensional fiber. Thus every component surjects onto $B$. If there were at least two components, every fiber would be a disjoint union of nonempty closed intersections with these components, contradicting the connectedness of the integral fibers from step 2.2. [F7, step 1.1, step 2.1, step 2.2, algebra]

4.1 The morphism is flat. At a point $y$ over a closed point $t_0\in B$, let $R=\mathcal O_{B,t_0}$, a discrete valuation ring with parameter $s=t-t_0$, let $S$ be the corresponding Noetherian local ring of the smooth ambient space, and let $M=\mathcal O_{Y,y}$, a finite $S$-module. The fiber module $M/sM$ is a vector space over $R/(s)$ and is flat. The total space is smooth, so $M$ is a regular local domain. By step 3.1, $Y$ is integral and $\pi$ is dominant; hence the pullback of $s$ is nonzero in the function field of $Y$ and remains nonzero in every local ring $M$. Therefore multiplication by $s$ is injective, equivalently $(s)\otimes_R M\to M$ is injective. Applying [F3] with $I=(s)$ proves $M$ flat over $R$ at every such point. Over the generic point of $B$, the base local ring is a field, so flatness is automatic. Thus $\pi$ is flat. [A1, F3, step 2.1, step 3.1, algebra]

5.1 The section and flat proper family make this a genus-one fibration with section: over $K=\overline{\mathbb C(B)}$, [F6] identifies the geometric generic fiber with the plane cubic $Y^2Z=X^3+gZ^3$. Here $g\ne0$. The derivative and nonsquare arguments of step 2.2 apply over this algebraically closed characteristic-zero field: $X^3+g$ has distinct roots, and the odd order at each root prevents it from being a square in $K(X)$. Thus the geometric generic fiber is smooth, proper and geometrically integral; [F4], applied over $K$, gives $\dim_K H^1=1$. Thus the definitions [[def-f4-genus-one-fibration]] and [[def-f4-elliptic-fibration-with-section]] apply. No fiber is multiple: each smooth fiber is integral and each singular fiber is an irreducible reduced cusp, so its fiber divisor has multiplicity one. There is no reducible fiber component, hence no smooth rational vertical $(-1)$-curve; the surface is relatively minimal. At a simple zero $t_0$ of $g$, the analytic coordinate $s=g(t)$ is valid because $g'(t_0)\ne0$, and the transverse local equation is exactly $y^2=x^3+s$. The fiber at $s=0$ is the irreducible cusp from step 2.2, so [F5] identifies it as Kodaira type II. This also confirms the standard valuation row $(\operatorname{ord}f,\operatorname{ord}g,\operatorname{ord}\Delta)=(\ge1,1,2)$ for $f=0$, $g=s$, and $\Delta=27s^2$. [F1, F4, F5, F6, step 1.1, step 2.2, step 4.1] ∎

## Remarks

This example separates singular fiber geometry from total-space singularity: the type II fiber has a cusp, while its total Weierstrass surface is smooth. No physical interpretation of the fiber is asserted.

At every singular point the example itself supplies the local equation $y^2=x^3+s$. Its type-II label uses the geometric convention in [F5]; it requires no general local-model existence argument or separate valuation-table derivation in the Kodaira carrier.
