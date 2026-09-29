---
id: lem-tangent-space-functoriality-classical
kind: lemma
title: "Differentials, open restriction, and the chain rule"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-morphism-of-schemes
  - def-morphism-locally-ringed-spaces
  - def-scheme-over-base
  - def-zariski-cotangent-space-point
  - def-zariski-tangent-space-point
  - def-open-immersion-schemes
  - def-affine-open-subscheme
  - lem-tangent-vectors-as-dual-number-points
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4e Lemma 4.24 and §4f item 4.31"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Algebraic Geometry, Lemma 5.1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Statement

Let $k$ be a field, let $X,Y$ be $k$-schemes, and let $f:X\to Y$ be a
$k$-morphism. For points $x\in X$ and $y=f(x)\in Y$ whose structure maps
$k\to\kappa(x)$ and $k\to\kappa(y)$ are isomorphisms (that is, the points are
$k$-rational), write
$C_xX=\mathfrak m_x/\mathfrak m_x^2$ and
$C_yY=\mathfrak m_y/\mathfrak m_y^2$. The local map
$$f_x^\sharp:\mathcal O_{Y,y}\longrightarrow\mathcal O_{X,x}$$
induces a $k$-linear map $\bar f_x^\sharp:C_yY\to C_xX$. Its dual is the
differential
$$d_xf=(\bar f_x^\sharp)^*:T_xX\longrightarrow T_yY.$$
It agrees with post-composition by $f$ on based dual-number points. For the
identity, $d_x(\operatorname{id}_X)=\operatorname{id}_{T_xX}$; for composable
$k$-morphisms $X\xrightarrow{f}Y\xrightarrow{g}Z$ and rational points
$x\in X(k)$, $y=f(x)$, one has
$$d_x(g\circ f)=d_y g\circ d_x f.$$
Every $k$-open immersion induces an isomorphism on tangent spaces at each
rational point.

No finite-type, reducedness, or smoothness hypothesis is needed. No Axiom of
Choice is assumed or used.

## Facts & Assumptions

**Given:** A field $k$, $k$-schemes, a $k$-morphism, and points $x,y=f(x)$ whose residue fields are identified with $k$ by their structure maps. For the last assertion, the morphism is an open immersion over $k$ and the source point has residue field $k$.

[F1] [[def-morphism-of-schemes]]: a scheme morphism is a morphism of locally ringed spaces, and its induced maps on stalks are local homomorphisms.

[F2] [[def-morphism-locally-ringed-spaces]]: a local stalk homomorphism sends the maximal ideal at the image point into the maximal ideal at the source.

[F3] [[def-scheme-over-base]]: a $k$-morphism commutes with the structure maps to $\operatorname{Spec}k$.

[F4] [[def-zariski-cotangent-space-point]]: $C_xX=\mathfrak m_x/\mathfrak m_x^2$ is a vector space over the residue field. At a $k$-rational point this residue field is identified with $k$ by the structure map.

[F5] [[def-zariski-tangent-space-point]]: $T_xX$ is the linear dual of $C_xX$ over the residue field; at a rational point it is $\operatorname{Hom}_k(C_xX,k)$.

[F6] [[lem-tangent-vectors-as-dual-number-points]]: at a rational point of a $k$-scheme, tangent vectors are naturally the fibre of based morphisms from $\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$.

[F7] [[def-open-immersion-schemes]]: an open immersion identifies its source isomorphically with an open subscheme of its target.

[F8] [[def-affine-open-subscheme]]: an open subscheme $U\subseteq X$ has structure sheaf $\mathcal O_X|_U$.

## Proof

**Proof technique:** direct.

1.1 Put $B=\mathcal O_{Y,y}$, $A=\mathcal O_{X,x}$, $\mathfrak n=\mathfrak m_y$, and $\mathfrak m=\mathfrak m_x$. By [F1], $f_x^\sharp:B\to A$ is local; [F2] means that $f_x^\sharp(\mathfrak n)\subseteq\mathfrak m$ and $f_x^\sharp(\mathfrak n^2)\subseteq\mathfrak m^2$. It therefore induces a map $\mathfrak n/\mathfrak n^2\to\mathfrak m/\mathfrak m^2$. Since $f$ is a $k$-morphism, [F3] says that its stalk map commutes with the two structure maps from $k$; because $x$ and $y$ are rational, these maps identify both residue fields with $k$. The quotient map is thus $k$-linear by [F4]. Dualizing it over $k$ gives the stated map $d_xf:T_xX\to T_yY$ by [F5]. [F1, F2, F3, F4, F5, given, algebra]

1.2 Let $j:U\to X$ be a $k$-open immersion and let $u\in U(k)$ map to $x\in X(k)$. By [F7], $j$ identifies $U$ with an open subscheme of $X$; by [F8] that open subscheme carries the restricted structure sheaf. Hence the induced stalk map $j_u^\sharp:\mathcal O_{X,x}\to\mathcal O_{U,u}$ is an isomorphism. It identifies maximal ideals and their squares, so the induced cotangent map $C_xX\to C_uU$ is an isomorphism. Its dual $d_uj$ is therefore an isomorphism $T_uU\to T_xX$. [F1, F2, F4, F5, F7, F8, given, algebra]

2.1 For the identity morphism, the local-ring and cotangent maps are identities, so their dual is the identity. If $g:Y\to Z$ is another $k$-morphism and $z=g(y)$, contravariance on stalks gives $(g\circ f)_x^\sharp=f_x^\sharp\circ g_y^\sharp$. Passing to maximal ideals modulo squares gives $\overline{(g\circ f)}_x^\sharp=\bar f_x^\sharp\circ\bar g_y^\sharp$. Dualizing reverses this order, so $d_x(g\circ f)=(\bar g_y^\sharp)^*\circ(\bar f_x^\sharp)^* =d_y g\circ d_x f$. This proves identity and chain rules without choosing coordinates or bases. [F1, F3, F4, F5, step 1.1, given, algebra]

3.1 Under [F6], a tangent vector $t\in T_xX$ is represented by a based map $\gamma_t:\operatorname{Spec}(k[\epsilon]/(\epsilon^2))\to X$. For $b\in\mathfrak n$, the coefficient of $\epsilon$ in the pullback of $b$ by $f\circ\gamma_t$ is the value of $t$ on $f_x^\sharp(b)\bmod\mathfrak m^2$, namely $t(\bar f_x^\sharp(b\bmod\mathfrak n^2))$. This is exactly the functional $d_xf(t)$ on $C_yY$. Constants have zero $\epsilon$-coefficient, so the agreement holds on the whole local ring. Thus the dualized construction is the map on based dual-number points induced by post-composition with $f$; the identity and composition laws also agree with composition of these maps. [F4, F5, F6, step 1.1, step 2.1, given, algebra]

4.1 If a source or target cotangent space is zero, the induced cotangent map still has the displayed source and target, and its dual is the unique corresponding linear map; in particular zero tangent vectors map to zero. If both cotangent spaces are one-dimensional and the cotangent map sends a chosen target generator to $c$ times a chosen source generator, its dual sends a source functional with value $a$ on the source generator to the target functional with value $ca$ on the target generator. This is precisely the same formula as step 1.1 and introduces no exceptional one-dimensional case. The construction is defined for every local map, including zero, noninjective, or nonsurjective cotangent maps. If $X$ is empty there is no source rational point and the pointwise assertions are vacuous. The zero tangent vector is the based map factoring through $\operatorname{Spec}k$ and is preserved by post-composition. All maps used are canonical, so no choice of bases or other choices, and no Axiom of Choice, is used. The statement contains no iff claim. [F4, F5, F6, step 1.1, step 2.1, step 3.1, given, algebra] ∎
