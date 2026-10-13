---
page: em-elementary-mathematical-prerequisites-examples
title: Em Elementary Mathematical Prerequisites — Examples
status: published
items: []
examples: [ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries]
---

The companion page records, in one worked example,
[[ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries]], a fully
explicit hypothesis and sign check for the moving-patch flux of the main page.
On the unit square $D=[0,1]^2$ with $r(u,v,t)=(a(t)u,a(t)v,0)$, $B=e_3$ and
$v=(a'/a)(x_1,x_2,0)$ the parametrized flux is $\Phi(t)=a(t)^2$, so
$\Phi'(t)=2a(t)a'(t)$; the fixed-time surface integral of $\partial_tB$
vanishes, while $\operatorname{curl}(v\times B)=-2(a'/a)e_3$ and patch Stokes
give $\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r=-2a(t)a'(t)$, exactly
the sign in [[lem-em-moving-flux]]. Dropping the boundary term — treating the
moving patch as fixed — would leave $\Phi'=0$, which the direct derivative
contradicts as soon as $a'\ne0$; the example thus exhibits the necessity of the
motion term and the orientation convention of the transport identity at a
fully regular configuration. The computation is pure mathematics: it uses the
definitions and lemma of the main page, the published Stokes theorem for a
patch over the unit square and constant integrals over Jordan sets, and it
asserts no physical law and no field interpretation.
