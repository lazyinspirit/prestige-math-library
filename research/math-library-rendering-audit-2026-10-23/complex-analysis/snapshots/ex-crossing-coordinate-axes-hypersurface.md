---
id: ex-crossing-coordinate-axes-hypersurface
kind: example
title: "The coordinate axes form a reduced crossing"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-holomorphic-germ-ring-and-its-maximal-ideal
  - def-irreducible-and-prime-elements-in-a-domain
  - def-irreducible-hypersurface-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-regular-singular-point-analytic-hypersurface
  - lem-square-free-reduction-of-holomorphic-germ
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-units-in-the-holomorphic-germ-ring
  - thm-identity-theorem-in-several-complex-variables
  - thm-local-irreducible-decomposition-hypersurface-germ
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.1 the identity theorem for holomorphic functions (p. 165 ff.); §6.6 hypervarieties and their defining equations (p. 188); Proposition 6.7.3 the irreducible decomposition of a hypervariety germ (p. 194)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (6.6) principal defining equations and irreducible components of a codimension-one germ (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

In $\mathbb C^2$ with coordinates $(x,y)$, the zero set

$$X=Z(xy)=\{x=0\}\cup\{y=0\}$$

is a reduced plane curve germ at the origin whose two irreducible components
are the coordinate axes. Both axes are smooth, they meet only at the crossing
$0$, and $0$ is the only singular point of $X$ near $0$. No holomorphic map of
a connected disc whose image lies in $X$ can have image germ all of $X$; in
particular no single injective branch parametrisation covers both components,
so the one-disc parametrisation results for irreducible germs do not extend to
reducible ones. Each branch separately is parametrised by $t\mapsto(t,0)$ and
$t\mapsto(0,t)$.

## Facts & Assumptions

**Given:** The equation germ $f=xy\in\mathcal O_{\mathbb C^2,0}$ and its zero germ $X=(Z(xy),0)$.

[F1] A hypersurface germ at $p$ is a nonempty proper set germ $X=(Z(g),p)$ for a nonzero nonunit $g$; its reduced defining germ is the square-free reduction $g_{\mathrm{red}}$, which satisfies $Z(g_{\mathrm{red}})=Z(g)$ and is determined up to a unit, and the vanishing ideal of a reduced germ $h$ is $I_p(Z(h))=(h)$ ([[def-complex-analytic-hypersurface-germ-and-reduced-equation]], [[lem-square-free-reduction-of-holomorphic-germ]], [[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]]).

[F2] A nonzero nonunit germ is reduced when no irreducible germ divides it twice; a germ is irreducible when it is not a product of two nonunits; an irreducible germ is reduced, since a relation $q=r\cdot(rh)$ would exhibit $q$ as a product of two nonunits ([[def-reduced-holomorphic-germ-for-hypersurface]], [[def-irreducible-and-prime-elements-in-a-domain]]).

[F3] Units are exactly the germs not vanishing at the base point, and a product of nonunits lies in the maximal ideal; the maximal ideal $\mathfrak m_0$ consists of the germs with zero value at $0$, and a germ with nonzero linear part lies outside $\mathfrak m_0^2$ ([[prop-units-in-the-holomorphic-germ-ring]], [[def-holomorphic-germ-ring-and-its-maximal-ideal]]).

[F4] If a reduced germ factors as $u\,q_1\cdots q_r$ with $u$ a unit and the $q_i$ pairwise nonassociate irreducibles, then $Z(f)=\bigcup_iZ(q_i)$ and the germs $Z(q_i)$ are exactly the irreducible components of $Z(f)$: they are pairwise distinct and pairwise incomparable, and every irreducible hypersurface subgerm of $Z(f)$ is one of them ([[thm-local-irreducible-decomposition-hypersurface-germ]], [[def-irreducible-hypersurface-germ]]).

[F5] A point $q$ of a reduced hypersurface germ $Z(h)$ is regular exactly when the differential of the local reduced equation does not vanish at $q$, equivalently exactly when $Z(h)$ is a holomorphic hypersurface graph near $q$ ([[def-regular-singular-point-analytic-hypersurface]]).

[F6] If $U\subseteq\mathbb C^m$ is a nonempty connected open set and $h$ is holomorphic on $U$ with $h\equiv0$ on a nonempty open subset of $U$, then $h\equiv0$ on $U$; for $m=1$ this applies to a disc ([[thm-identity-theorem-in-several-complex-variables]]). Consequently, if $u,v$ are holomorphic on such a $U$ and $uv\equiv0$, then $u\equiv0$ or $v\equiv0$: if both were nonzero, then $Z(u)$ and $Z(v)$ would be closed subsets of $U$ with empty interior, and the nonempty open set $U\setminus Z(u)$ would be contained in $Z(v)$, forcing $v\equiv0$ by the identity theorem.

**Proof technique:** direct — identify the two prime factors, use the graph criterion for regularity, and rule out a disc map onto both branches with the identity theorem.

## Verification

1.1 The germs $x$ and $y$ are irreducible. Neither lies in $\mathfrak m_0^2$, because both have nonzero linear part; if $x=ab$ with $a,b$ nonunits, then $a,b\in\mathfrak m_0$ by [F3] and hence $x=ab\in\mathfrak m_0^2$, a contradiction. So $x$ is not a product of two nonunits, and the same argument applies to $y$. The two germs are not associates: $x=uy$ with $u$ a unit would give $x(t,0)=u(t,0)\cdot0=0$ for every small $t$, contradicting $x(t,0)=t\ne0$ for $t\ne0$. Hence $f=xy$ is a product of two pairwise nonassociate irreducibles, each occurring once, so $f$ is reduced and its reduced defining germ is $f$ itself, with $I_0(X)=(f)$ by [F1]. [given, F1, F2, F3, algebra]

1.2 Let $\Delta\subseteq\mathbb C$ be a connected open set containing the origin and let $\gamma=(u,v):\Delta\to\mathbb C^2$ be holomorphic with $\gamma(\Delta)\subseteq X$, that is, $u(t)v(t)=0$ for every $t\in\Delta$. By [F6] applied to the connected domain $\Delta$, one of the two coordinate functions vanishes identically, so the image of $\gamma$ is contained in a single axis: either $\gamma(\Delta)\subseteq Z(x)$ or $\gamma(\Delta)\subseteq Z(y)$. [given, F6]

2.1 By [F4] applied to the factorisation $f=x\cdot y$ of step 1.1, $X=Z(x)\cup Z(y)$, and the two branches $Z(x)=\{x=0\}$ and $Z(y)=\{y=0\}$ are exactly the irreducible components of $X$; they are distinct as set germs and neither contains the other. [step 1.1, F4]

3.1 Every point of $Z(x)$ is regular: $Z(x)$ is the graph $\{(x,y):x=0\}$ of the zero function over the $y$-coordinate near each of its points, hence a holomorphic hypersurface graph near every such point, so [F5] gives regularity. The same argument exhibits $Z(y)=\{(x,y):y=0\}$ as the graph of the zero function over the $x$-coordinate, so every point of $Z(y)$ is regular as well. [step 2.1, F5, construct]

4.1 The origin is a singular point: by step 1.1 the reduced defining germ of $X$ is $xy$, and $d(xy)=y\,dx+x\,dy$ vanishes at $0$. So $0$ is not regular by [F5]. Since $Z(x)\cap Z(y)=\{0\}$, every point of $X$ other than the origin lies on exactly one of the two branches and is regular by step 3.1; hence the origin is the only singular point of $X$ in a neighbourhood of $0$, and it is exactly the crossing of the two branches. [step 1.1, step 3.1, F5, algebra]

5.1 Suppose first that $\gamma(\Delta)\subseteq Z(x)$. The set germ of the image of $\gamma$ at the origin is then contained in $Z(x)$, which is a proper subgerm of $X$: for every small $\varepsilon\ne0$ the point $(\varepsilon,0)$ belongs to $X$ but not to $Z(x)$. Hence the image of $\gamma$ cannot contain a full representative of $X$, so its image germ is not $X$; the case $\gamma(\Delta)\subseteq Z(y)$ is the same with the roles of $x$ and $y$ exchanged. Therefore no holomorphic map of a connected disc has image germ $X$, injective or not, and in particular no single injective branch parametrisation covers both components. The individual branches are parametrised by the injective holomorphic maps $t\mapsto(t,0)$ and $t\mapsto(0,t)$, whose images are full representatives of $Z(y)$ and $Z(x)$ respectively. [step 1.2, step 2.1, step 4.1] ∎
