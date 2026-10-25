---
id: ex-family-xy-equals-t-flat-not-smooth-at-node
kind: example
title: "The family xy=t"
status: published
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - lem-flatness-affine-local-source-target
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - cor-polynomial-ring-over-a-field-is-a-pid
  - thm-jacobian-criterion-smooth-morphism
  - def-smooth-morphism-schemes
  - def-ag-geometrically-regular-algebra-and-fibre
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-affine-fibre-product-tensor-ring
  - thm-right-exactness-of-tensor-products
  - def-locally-finite-presentation-morphism
  - def-finitely-presented-module-and-algebra
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25 and 29.34-29.36 (flatness, smoothness, Jacobian criterion)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be any field and let
$$f:\operatorname{Spec}k[x,y,t]/(xy-t)\longrightarrow\operatorname{Spec}k[t]$$
be the morphism induced by the inclusion $k[t]\to k[x,y,t]/(xy-t)$.

1. $f$ is flat and locally of finite presentation.
2. The fibre of $f$ over the prime $(t)$ is
   $\operatorname{Spec}k[x,y]/(xy)$, the union of the two coordinate axes; the
   image of the prime $\mathfrak q_0=(t,x,y)$ is the origin
   $\mathfrak m=(x,y)$, and the local ring of the fibre there is not regular.
3. Hence the fibre is not geometrically regular at the image of $\mathfrak q_0$
   and $f$ is not smooth at $\mathfrak q_0$.
4. Away from $\mathfrak q_0$ the morphism $f$ is smooth, so $\mathfrak q_0$ is
   the only point at which smoothness fails.

Thus $xy=t$ is a flat family whose fibres jump: at $t=0$ the fibre is the
singular nodal union of two lines, while every other point of the family is
smooth.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is flat at $x$ when $\mathcal O_{X,x}$ is flat over $\mathcal O_{S,f(x)}$ ([[def-flat-morphism-schemes]]); for affine charts $U=\operatorname{Spec}B\subseteq X$, $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$, flatness at every point of $U$ is equivalent to flatness of $B$ over $A$ ([[lem-flatness-affine-local-source-target]]).

[F2] For a field $F$, the polynomial ring $F[t]$ is a principal ideal domain ([[cor-polynomial-ring-over-a-field-is-a-pid]]), and over a principal ideal domain an $R$-module is flat if and only if it is torsion-free ([[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]).

[F3] Assume AC. For a morphism $f:X\to S$ locally of finite presentation and $x\in X$ with $s=f(x)$, $f$ is smooth at $x$ if and only if there are affine opens $U=\operatorname{Spec}C\ni x$, $V=\operatorname{Spec}A\ni s$ with $f(U)\subseteq V$ and a presentation of $C_h$, for some $h\in C\smallsetminus\mathfrak q$ with $\mathfrak q$ the prime of $x$, as $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ in which some $r\times r$ minor of the Jacobian $(\partial f_j/\partial t_i)$ has image a unit of $C_h$ ([[thm-jacobian-criterion-smooth-morphism]]).

[F4] The morphism $f$ is smooth at $x$ exactly when it is locally of finite presentation at $x$, flat at $x$, and the scheme-theoretic fibre at $f(x)$ is geometrically regular at $x$; in particular non-regularity of the fibre local ring at $x$ obstructs smoothness ([[def-smooth-morphism-schemes]]).

[F5] For a finitely presented ring map $R\to S$ with $\mathfrak p=\mathfrak q\cap R$, the fibre at $\mathfrak q$ is $S\otimes_R\kappa(\mathfrak p)$, and geometric regularity at $\mathfrak q$ is tested over every field extension $K/\kappa(\mathfrak p)$; the case $K=\kappa(\mathfrak p)$ shows that geometric regularity at $\mathfrak q$ implies regularity of the localisation of $S\otimes_R\kappa(\mathfrak p)$ at the image of $\mathfrak q$ ([[def-ag-geometrically-regular-algebra-and-fibre]]).

[F6] Assume AC. A regular local ring is an integral domain ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]]); hence a local ring with zero divisors is not regular.

[F7] For ring maps $A\to B$, $A\to A'$ one has $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}A'\cong\operatorname{Spec}(B\otimes_AA')$ ([[thm-affine-fibre-product-tensor-ring]]), and $-\otimes_AA'$ is right exact, so for $B=k[t,x,y]/(xy-t)$ and $k[t]\to k$, $t\mapsto0$, the fibre ring is $B\otimes_{k[t]}k\cong k[x,y]/(xy)$ ([[thm-right-exactness-of-tensor-products]]).

[F8] A morphism is locally of finite presentation when it has affine charts on which the ring map is a finitely presented algebra map ([[def-locally-finite-presentation-morphism]]); polynomial algebras are finitely presented and quotients by finitely generated ideals preserve finite presentation ([[def-finitely-presented-module-and-algebra]]).

[F9] A finite-type algebra over a Noetherian ring is Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]), and a field is Noetherian; hence the rings and localisations occurring here are Noetherian local rings.

[F10] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The total ring. Let $\varphi:k[x,y,t]\to k[x,y]$ be $t\mapsto xy$, $x\mapsto x$, $y\mapsto y$. The defining polynomial $F=xy-t$ is monic of degree one in $t$ over $k[x,y]$, so division by $F$ writes any $p$ as $qF+r$ with $r\in k[x,y]$ and $\varphi(p)=r$; hence $\ker\varphi=(F)$ and $\varphi$ induces an isomorphism $C:=k[x,y,t]/(xy-t)\cong k[x,y]$, sending the class of $t$ to $xy$. In particular $C$ is a domain, the map $k[t]\to C$ is injective (as $xy\ne0$ is not algebraic over $k$), and $xy\in(x,y)^2$. [F8, algebra]

2.1 Flatness and finite presentation. If $0\ne p\in k[t]$ and $c\in C$ satisfy $p\cdot c=0$, then, under the identification $C=k[x,y]$ of step 1.1, $p(xy)c=0$ in the domain $k[x,y]$, so $c=0$ because $p(xy)\ne0$. Thus $C$ is torsion-free over the principal ideal domain $k[t]$, hence flat over $k[t]$ by [F2]; the single affine chart $\operatorname{Spec}C\to\operatorname{Spec}k[t]$ then gives flatness of $f$ by [F1]. Moreover $k[t,x,y]$ is a finitely presented $k[t]$-algebra and $C$ is its quotient by the principal ideal $(xy-t)$, so $C$ is finitely presented over $k[t]$ and $f$ is locally of finite presentation by [F8]. [F1, F2, F8, step 1.1]

2.2 The special fibre. By [F7] the fibre of $f$ over the prime $(t)$ is $\operatorname{Spec}(C\otimes_{k[t]}k)=\operatorname{Spec}k[x,y]/(xy)$. The prime $\mathfrak q_0=(t,x,y)\subseteq C$ lies over $(t)$ and corresponds to the maximal ideal $\mathfrak m=(x,y)k[x,y]/(xy)$ of the fibre; write $A=k[x,y]/(xy)$ and $R=A_{\mathfrak m}$. [F7, step 1.1]

3.1 The fibre local ring at the origin is not regular. The ring $R$ is a Noetherian local ring by [F9]. In $A$ the elements $x,y$ are nonzero (their classes are not in the ideal $(xy)$) and satisfy $x\ne0$, $y\ne0$, $xy=0$; the same holds in the localisation $R$, so $R$ has zero divisors and is not a domain. By [F6] a regular local ring is a domain, so $R$ is not regular. [F6, F9, step 2.2]

3.2 Smoothness away from the origin. Let $\mathfrak q\ne\mathfrak q_0$ be a point of $\operatorname{Spec}C$. If both $x$ and $y$ belonged to $\mathfrak q$, then $t=xy\in\mathfrak q$, so $\mathfrak q\supseteq(t,x,y)$; since $(t,x,y)$ is a maximal ideal of $C$, this forces $\mathfrak q=\mathfrak q_0$. Hence $x\notin\mathfrak q$ or $y\notin\mathfrak q$; put $h:=x$ in the first case and $h:=y$ in the second, so that $h\in C\smallsetminus\mathfrak q$ and the image of $h$ in $C_h$ is a unit. In the affine chart $C=k[t][x,y]/(xy-t)$ over $A=k[t]$ the Jacobian of the single equation $xy-t$ with respect to $(x,y)$ is the row $(y,x)$, whose $1\times1$ minors are $y$ and $x$; the minor $h$ (namely $x$ or $y$) is a unit of $C_h$, and $C_h=(A[x,y]/(xy-t))_h$ is a localisation of the displayed presentation. Since $f$ is locally of finite presentation by step 2.1, the criterion [F3] applies and yields that $f$ is smooth at $\mathfrak q$. [F3, step 2.1]

4.1 Failure of smoothness at the origin. If the fibre were geometrically regular at the image of $\mathfrak q_0$, then by the case $K=k=\kappa((t))$ of [F5] the localisation $R$ would be regular; step 3.1 shows it is not. Since $f$ is locally of finite presentation and flat (step 2.1), [F4] implies that $f$ is not smooth at $\mathfrak q_0$. [F4, F5, step 2.1, step 3.1]

5.1 Conclusion. Steps 4.1 and 3.2 show that $f$ is smooth at every point of $\operatorname{Spec}C$ except the origin prime $\mathfrak q_0$, where it fails to be smooth although it is flat. The Axiom of Choice [F10] is assumed in the Statement and is used exactly through the Jacobian criterion [F3] in step 3.2 and the domain theorem [F6] in step 3.1. [F3, F6, F10, step 4.1, step 3.2] $\square$
