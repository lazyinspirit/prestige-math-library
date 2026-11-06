---
id: lem-cft-chiral-operation-well-defined
kind: lemma
title: A formal chiral operation glues over a pointed curve
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-smooth-projective-complex-curve
  - def-cft-aut-o-formal-coordinate-group
  - lem-cft-formal-residue-coordinate-invariance
  - lem-cft-aut-o-action-and-coordinate-covariance
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
  - def-formal-distribution-on-a-vector-space
  - lem-locality-determines-formal-ope-coefficients
  - lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi
dependency_roles:
  def-cft-smooth-projective-complex-curve: mathematical-premise
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  lem-cft-formal-residue-coordinate-invariance: mathematical-premise
  lem-cft-aut-o-action-and-coordinate-covariance: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  lem-locality-determines-formal-ope-coefficients: mathematical-premise
  lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 3, §§3.1.1–3.1.2 and 3.3.1–3.3.3
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch3.pdf
      locator: Chiral operations as maps to the diagonal, and the local chiral Jacobi, skew-symmetry, and unit axioms.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§10.6–10.9
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Coordinate covariance of module state-fields under formal changes.
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type and $X$ a smooth projective complex curve. For each $N\ge0$, put $V_{\le N}:=\bigoplus_{0\le d\le N}V_d$ for the conformal grading and use a holomorphic coordinate chart $U$ with coordinate $t$ to trivialize a bundle by $U\times V_{\le N}$. On an overlap with coordinate $s=\rho(t)$, put $\rho_y(u):=\rho(y+u)-\rho(y)$, where $y=t(p)$ at the base point $p$; glue the finite-stage bundles by the holomorphic transition $R_V(\rho_y)|_{V_{\le N}}$ from the preceding formal-coordinate covariance lemma. These transitions preserve $V_{\le N}$ and satisfy the cocycle by the right-action law. Let $V_X$ be the filtered union of the resulting bundles. Let $\omega_X:=\Omega^1_{X,\mathrm{hol}}$ be the holomorphic cotangent line bundle, whose local sections in coordinate $t$ are $f(t)dt$, and put $V_X^r:=\omega_X\otimes_{\mathcal O_X}V_X$. Give $V_X$ the left connection $\nabla_{\partial_t}=\partial_t+T$; on $V_X^r$ the corresponding right-$\mathcal D_X$ action is
$$
(f(t)dt\otimes v(t))\cdot\partial_t=-f'(t)dt\otimes v(t)-f(t)dt\otimes(\partial_t+T)v(t).
$$
Here $T=L(-1)$. In coordinate $t$, define the regular-input operation on states by the finite delta-derivative sum
$$\chi_t(a,b):=\sum_{j\ge0}(a_{(j)}b)\frac{\partial_{t_2}^j\delta(t_1,t_2)}{j!}.$$
Equivalently, its singular-OPE shorthand is $\sum_{j\ge0}(a_{(j)}b)(t_1-t_2)^{-j-1}$, the difference of the two formal binomial expansions. For $f\in R_2:=\mathbb C\llbracket y,u\rrbracket[u^{-1}]$, define $\operatorname{PP}_u(\sum_i c_i(y)u^i):=\sum_{i<0}c_i(y)u^i$ and use the full localized local map $f(a\,dt_1\boxtimes b\,dt_2)\mapsto\operatorname{PP}_u(f(y+u,y)Y(a,u)b)$, where $a,b\in V$, $u=t_1-t_2$, and $y=t_2$. Its target is locally $Q_2dt_2$, where $Q_2:=\{\sum_{j=0}^Jc_j(y)u^{-j-1}:J<\infty,\ c_j(y)\in\bigcup_{N\ge0}V_{\le N}\llbracket y\rrbracket\}$; the principal part $c_j(y)u^{-j-1}dt_2$ represents $c_j(y)\partial_{t_2}^j\delta(t_1,t_2)/j!$. Its source consists of local sections with finite pole order along the diagonal. The full local operation obeys the three-input chiral Jacobi identity proved in the preceding right-$\mathcal D$ local-Jacobi supplier, with the Beilinson–Drinfeld convention of Chiral Algebras, Chapter 3, §3.3.3. Its coordinate-covariant local maps glue to a right $\mathcal D_X$-module operation
$$j_*j^*(V_X^r\boxtimes V_X^r)\longrightarrow\Delta_!V_X^r,$$
where $j:X^2\setminus\Delta\hookrightarrow X^2$, $\Delta:X\hookrightarrow X^2$, and $\Delta_!$ is locally the finite-sum module of delta derivatives supported on the diagonal. In this chiral-algebra notation, $j_*j^*E$ means the meromorphic localization $E(*\Delta):=\varinjlim_{k\ge0}E(k\Delta)$ for $E=V_X^r\boxtimes V_X^r$, with the union over finite state stages understood; $E(k\Delta)$ allows a pole of order at most $k$ along the diagonal. It does not mean the ordinary analytic sheaf direct image of all holomorphic sections on the complement. Locally a section is a finite sum of state pairs times holomorphic functions with a finite diagonal pole, whose formal expansion has the stated $R_2$ form. The target coefficients are holomorphic germs along the diagonal, with the displayed $Q_2$ as their formal expansion model. This same localization convention is used when the resulting operation is called the coordinate-independent chiral algebra. The global operation satisfies chiral Jacobi, skew-symmetry, and the vacuum identity. The local Jacobi deduction is supplied by the separate right-$\mathcal D$ local-Jacobi lemma; the present proof establishes its global gluing.

## Statement references

[[def-cft-smooth-projective-complex-curve]]

[[def-conformal-vertex-algebra]]

[[def-cft-aut-o-formal-coordinate-group]]

[[lem-cft-aut-o-action-and-coordinate-covariance]]

[[def-formal-distribution-on-a-vector-space]]

[[lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi]]

## Facts & Assumptions

**Given:** The formal-coordinate torsor, the Aut O covariance identity, the finite OPE expansion, and the actual full-field local extension constructed in [F7]. The local Jacobi premise in the Statement is discharged by that supplier.

[F1] [[def-vertex-algebra-state-field]]: for every $a,b\in V$, $a_{(j)}b=0$ for all sufficiently large $j$; the vacuum and creation axioms hold; and $[T,Y(a,z)]=\partial_zY(a,z)$.

[F2] [[def-conformal-vertex-algebra]]: $L(-1)=T$ and $V$ is graded in nonnegative integer weights.

[F3] [[def-formal-distribution-on-a-vector-space]] fixes the delta and binomial conventions. [[lem-locality-determines-formal-ope-coefficients]]: the commutator of local fields $A(z),B(w)$ has a finite delta-derivative expansion with operator-valued coefficients $C_j(w)=\operatorname{Res}_z (z-w)^j[A(z),B(w)]$. These coefficients are fields, not states. The state-valued principal parts used here are supplied directly by [F7], rather than identified with that operator-valued commutator.

[F4] [[lem-cft-aut-o-action-and-coordinate-covariance]]: a coordinate change conjugates the module field by $R_M(\rho)$ and sends its state and coordinate to $R_V(\rho_z)v$ and $\rho(z)$, respectively.

[F5] [[def-cft-smooth-projective-complex-curve]] supplies the finite-jet bundle charts and their Taylor-substitution cocycle. [[def-cft-aut-o-formal-coordinate-group]] fixes the right-composition series product, inverse-postcomposition action on coordinate ring maps, and its free transitivity. In particular, if $s=\rho(t)$, the centered coordinate maps satisfy $\tau_{s,p}=\phi_{\rho_y}^{-1}\tau_{t,p}$; the transition from $t$-components to $s$-components is $R_V(\rho_y)$.

[F6] [[lem-cft-formal-residue-coordinate-invariance]]: the residue of a formal one-form is invariant under every formal-coordinate substitution.

[F7] [[lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi]] constructs the full localized operation $\mu_t(fa,b)=\operatorname{PP}_{u}(f(t_2+u,t_2)Y(a,u)b)$, $u=t_1-t_2$, for the exact left connection $\partial_t+T$ and right conversion $v\,dt\cdot\partial_t=-(\partial_tv+Tv)dt$. It proves its actual three-input Beilinson–Drinfeld Jacobi identity, skew-symmetry and polar unit axiom, and identifies its regular restriction with $\chi_t$. In particular it supplies the local Jacobi premise stated above without an extra assumption on $V$.

## Proof

1.1 Use the full local map of [F7] on every section of the localized two-input module. Its coefficients are finite principal parts for each bounded-weight input and fixed pole order. On regular constant inputs its principal part is precisely the finite sum defining $\chi_t$: [F1] makes $a_{(j)}b=0$ for large $j$, and the definition of $\operatorname{PP}_u$ gives its coefficients $a_{(j)}b$ directly, with the normalized delta notation fixed by [F3]. No identification of states with operator-valued commutator coefficients is made. On polar inputs one uses the full formula in [F7], including negative vertex products; singular coefficients alone are not substituted for a map on the localization. For a holomorphic finite-pole input, only finitely many normal Taylor coefficients contribute to each output coefficient, by the truncation and weight bounds in [F7]. Those coefficients are holomorphic along the diagonal. Thus these are actual maps on the meromorphic sheaves specified in the Statement, not merely maps on formal completions. [F1, F3, F7, algebra]

1.2 The right-$\mathcal D$ convention in [F7] has negative formal adjoint of $\partial_t+T$, with $T=L(-1)$ by [F2]. Its skew-symmetry includes the canonical-bundle and normal-coordinate reversal signs. Its unit is the horizontal map $\omega_X\to V_X^r$, $fdt\mapsto fdt\otimes\mathbf1$: $T\mathbf1=0$ by [F1], and $\mu_t((t_1-t_2)^{-1}\mathbf1,b)=b\delta(t_1,t_2)$ is the canonical residue quotient, not merely vanishing on regular unit inputs. Consequently both the full skew and unit axioms hold in each coordinate. [F1, F2, F7, algebra]

1.3 On an overlap write $t'=\rho(t)$ and put $\rho_y(u)=\rho(y+u)-\rho(y)$. Apply [F4] to the adjoint field, coefficientwise over the base ring in $y$. Its coefficients depend on finite jets on bounded weight stages, so the same identity is valid with these formal base coefficients. Since $(\rho_y)_u=\rho_{y+u}$, it gives the complete OPE covariance formula $$R_V(\rho_y)Y(a,u)b=Y(R_V(\rho_{y+u})a,\rho(y+u)-\rho(y))R_V(\rho_y)b.$$ Pair the principal-part map of [F7] with any regular normal test function and take the residue in the first point. Under the substitution, its first one-form factor transforms by $dt'_1=\rho'(y+u)du$ and its remaining output one-form by $dt'_2=\rho'(y)dy$. The state factors transform by exactly the operators in the displayed full-field identity. Residue invariance [F6], applied coefficientwise, therefore makes every normal-jet pairing agree in the two coordinates, including for polar source sections. These pairings separate finite principal parts, as in [F7]; hence the full local maps agree on overlaps. This uses full field covariance, not uniqueness of the singular commutator as an asserted determination of polar values. [F2, F4, F6, F7, algebra]

2.1 The connection also agrees on overlaps in the declared sign. Apply the same covariance identity to the vacuum, fixed by $R_V$, and use [F1] to obtain $$R_V(\rho_y)e^{uT}a=e^{(\rho(y+u)-\rho(y))T}R_V(\rho_{y+u})a.$$ Differentiation in $u$ at zero gives $$\partial_yR_V(\rho_y)+\rho'(y)T R_V(\rho_y)=R_V(\rho_y)T.$$ This is exactly the transition identity for the left connection $\partial_t+T$; tensoring with the canonical line and taking its negative formal adjoint gives the right action used in [F7]. The finite-jet coefficients of the local maps vary holomorphically in the base coordinate, and the torsor transitions satisfy the cocycle by [F5]. Thus the local right-$\mathcal D$ maps glue consistently, including on triple overlaps, to the stated global operation. [F1, F2, F4, F5, F7, step 1.3, algebra]

3.1 The full three-input chiral Jacobi identity in [F7] compares exactly the three localized composites, with the right-$\mathcal D$ signs established there from the all-integer vertex Jacobi residue identity. Since the local maps agree on overlaps by step 2.1, their composites agree on overlaps as well, and the local identity descends to the global operation. Step 1.2 supplies its skew-symmetry and the actual residue-unit axiom. This establishes every claimed global property with the local Jacobi identity proved by the separate supplier, retaining the Statement's full source, target and convention. [F7, step 1.1, step 1.2, step 2.1, given] ∎
