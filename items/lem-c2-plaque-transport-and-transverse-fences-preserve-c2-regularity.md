---
id: lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity
kind: lemma
title: "C² plaque transport and finite transverse fences preserve C² regularity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-c1-regular-codimension-one-foliation-and-transverse-orientation, lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs, thm-euclidean-inverse-function-theorem, lem-c2-inverses-and-scalar-return-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (C¹/C² adaptation of the chartwise holonomy construction)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp.140–143; regularity upgrade and finite collar-gluing argument supplied locally"
---

## Statement

Let $F$ be a codimension-one foliation of a smooth $n$-manifold $M$ given by
a $C^2$ foliation atlas: charts $\varphi=(x,t):U\to\mathbb R^{n-1}\times\mathbb R$
whose components and inverses are of class $C^2$ and whose transitions have the
form $(x',t')=(g(x,t),h(t))$ with $g$ of class $C^2$ and $h$ a one-dimensional
$C^2$ local diffeomorphism of intervals.

(a) Every finite plaque transport between $C^2$ local transversals is a $C^2$
local diffeomorphism germ.

(b) A finite family of $C^2$ traces agreeing on open overlap collars glues to a
$C^2$ trace, and if the parameter derivative of every piece has nonzero
transverse component then the glued trace is transverse at every parameter,
including its one-sided derivatives at parameter endpoints.

(c) Well-definedness of holonomy along leafwise loops and its invariance under
leafwise homotopies relative to endpoints are supplied by the underlying $C^1$
atlas.

These assertions concern the regularity of specified compatible pieces; they do
not assert the existence of a polycycle fence or of an extremal cycle.

## Facts & Assumptions

**Given:** A $C^2$ foliation atlas for $F$, a finite plaque transport between $C^2$ local transversals, and finitely many $C^2$ traces on open intervals that agree on open overlap collars.

[F1] A $C^2$ foliation atlas as in the statement is a $C^1$ foliation atlas in the sense of [[def-c1-regular-codimension-one-foliation-and-transverse-orientation]]: every chart and its inverse is of class $C^1$, and on every overlap the transition has the form $(x',t')=(g(x,t),h(t))$ with $h$ a one-dimensional $C^1$ local diffeomorphism.

[F2] For a transversely oriented $C^1$ codimension-one foliation, plaque transport along leafwise loops defines a homomorphism into $C^1$ transverse germs that is independent of the foliation chart chain and invariant under leafwise homotopies relative to endpoints ([[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]]).

[F3] A $C^2$ map between open subsets of $\mathbb R^m$ with invertible derivative at a point has a $C^2$ local inverse there ([[lem-c2-inverses-and-scalar-return-roots]]).


## Proof

**Proof technique:** direct.

1.1 By [F1] the given atlas is a $C^1$ foliation atlas. The chart-chain and homotopy argument of [F2] does not require transverse orientation: compose the transverse coordinate changes along a finite subdivision; a common refinement preserves the composite, and a finite rectangle subdivision of a leafwise homotopy changes paths only inside plaques, where transverse transport is unchanged. These statements use finite compact covers; they apply to germs of either orientation. Under the library concatenation convention, transport on the reversed loop gives the homomorphism. Thus clause (c) holds for the given atlas. [F1, F2, given]

1.2 Let $\varphi=(x,t):U\to\mathbb R^{n-1}\times\mathbb R$ be a chart of the given $C^2$ atlas, let $T,T'$ be $C^2$ local transversals through points $p,p'$ of one common plaque of $U$, and parametrize $T$ near $p$ and $T'$ near $p'$ by $C^2$ curves $\gamma:J\to U$ and $\gamma':J'\to U$ with $\gamma(0)=p$, $\gamma'(0)=p'$, $(t\circ\gamma)'(0)\neq0$ and $(t\circ\gamma')'(0)\neq0$. The plaques of $U$ are the level sets of $t$, so the plaque transport between $T$ and $T'$ matches points with equal $t$-coordinate. [F1, given]

1.3 Let $I_1,\dots,I_m\subseteq\mathbb R$ be open intervals covering a compact parameter interval $[a,b]$, and let $\gamma_i:I_i\to M$ be $C^2$ traces that agree on $I_i\cap I_j$ for all $i,j$ (in particular on a collar neighbourhood of every seam), so that $\gamma(\theta):=\gamma_i(\theta)$ for $\theta\in I_i$ is a well-defined map on $\bigcup_iI_i\supseteq[a,b]$. At a parameter interior to some $I_i$ the glued map coincides on an open neighbourhood with the $C^2$ map $\gamma_i$, hence is $C^2$ there; at a parameter endpoint of $[a,b]$, restriction of any $\gamma_i$ whose interval contains that endpoint gives continuous one-sided derivatives of orders one and two, so $\gamma$ is $C^2$ on $[a,b]$ in the one-sided sense. [given]

2.1 The function $s\mapsto t(\gamma'(s))$ is $C^2$ with nonzero derivative at $0$, so by [F3] it has a $C^2$ local inverse $s=\sigma(z)$ near $z=t(p')$; likewise $\theta\mapsto t(\gamma(\theta))$ has nonzero derivative at $0$ and is a $C^2$ local diffeomorphism. The single-chart transport written in the parameters of $T$ and $T'$ is therefore $\Theta:=\sigma\circ t\circ\gamma$ near $\theta=0$, it is $C^2$ as a composite of $C^2$ maps, and $\Theta'(0)=(t\circ\gamma)'(0)/(t\circ\gamma')'(0)\neq0$. Hence the piece is a $C^2$ local diffeomorphism germ. [F3, step 1.2]

2.2 At every parameter the derivative of the glued trace equals the derivative of a piece defined on a neighbourhood of that parameter, and by hypothesis that derivative has nonzero transverse component in a foliation chart; consequently the glued trace is transverse to $F$ at every parameter, and at the endpoints its one-sided derivative equals the one-sided derivative of any piece containing that endpoint, so transversality persists there as well. This is clause (b). [step 1.3, given]

3.1 Suppose a plaque transport meets the transversals $T_0,\dots,T_m$ successively and the piece from $T_{i-1}$ to $T_i$ lies in the chart $U_i$. Inside $U_i$ step 2.1 exhibits that piece as a $C^2$ local diffeomorphism germ with nonzero derivative. If two consecutive pieces are computed in different charts, then on their common domain the transverse coordinates are related by the transition function $h$, which is a $C^2$ diffeomorphism by the atlas hypothesis, and composition with $h$ and with its inverse preserves both $C^2$ regularity and the nonvanishing of the derivative. A finite composition of $C^2$ local diffeomorphism germs with nonzero derivative is again such a germ, so every finite plaque transport between $C^2$ local transversals is a $C^2$ local diffeomorphism germ, which is clause (a). [F1, step 2.1]

4.1 Clause (a) is step 3.1, clause (b) is step 2.2, and clause (c) is step 1.1; the argument used finitely many charts, finitely many pieces and local $C^2$ inverses only, so no choice principle is invoked. [step 1.1, step 3.1, step 2.2] ∎
