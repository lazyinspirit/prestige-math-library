---
id: def-pullback-cartier-divisor
kind: definition
title: "Pullback of a Cartier divisor"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-sheaf-total-quotient-rings
  - def-flat-morphism-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.14 Definition 14.12 and Lemma 14.13, §31.24 Definitions 24.1, 24.4 and Lemma 24.5"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.2–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Definition

Let $f:X\to Y$ be a morphism of schemes. Write $\mathcal K_X$ and
$\mathcal K_Y$ for the sheaves of meromorphic functions
([[def-sheaf-total-quotient-rings]]), so that over an open $U$ the value
$\mathcal K_X(U)$ is the sheafification at $U$ of
$U'\mapsto S_X(U')^{-1}\mathcal O_X(U')$, where $S_X(U')$ consists of the
sections of $\mathcal O_X$ that are nonzerodivisors at every stalk of $U'$.
The structure maps $\mathcal O_X\to\mathcal K_X$ and
$\mathcal O_Y\to\mathcal K_Y$ are injective. Call a section of
$\mathcal O_Y$ over an open **regular** when its germ at every point of that
open is a nonzerodivisor; these are exactly the elements of $S_Y$. A Cartier
divisor on $Y$ is a global section of
$\mathcal K_Y^{\times}/\mathcal O_Y^{\times}$
([[def-cartier-divisor]]).

**Pullback of meromorphic functions.** We say that *pullbacks of meromorphic
functions are defined* for $f$ if for all opens $U\subseteq X$ and
$V\subseteq Y$ with $f(U)\subseteq V$ the ring homomorphism
$f^{\#}:\mathcal O_Y(V)\to\mathcal O_X(U)$ carries regular sections of
$\mathcal O_Y(V)$ to regular sections of $\mathcal O_X(U)$, that is,
$f^{\#}(S_Y(V))\subseteq S_X(U)$. In that case the universal property of
localisation turns $f^{\#}$ into ring homomorphisms
$S_Y(V)^{-1}\mathcal O_Y(V)\to S_X(U)^{-1}\mathcal O_X(U)$, compatible with
restriction; these assemble into a morphism of presheaves
$f^{-1}\mathcal P_Y\to\mathcal P_X$, where
$\mathcal P_X(U)=S_X(U)^{-1}\mathcal O_X(U)$, and sheafifying gives a morphism
of sheaves of rings
$$f^{-1}\mathcal K_Y\longrightarrow\mathcal K_X,\qquad s\longmapsto f^*(s),$$
the *pullback map on meromorphic functions*. Since ring homomorphisms carry
units to units, it restricts to a morphism of sheaves of abelian groups
$f^{-1}\mathcal K_Y^{\times}\to\mathcal K_X^{\times}$, and it carries
$f^{-1}\mathcal O_Y^{\times}$ into $\mathcal O_X^{\times}$.

**Pullback of a Cartier divisor.** Let $D\in\operatorname{CaDiv}(Y)$ be
represented by a local-equation datum $\{(U_i,g_i)\}_{i\in I}$, so the
$U_i$ cover $Y$, each $g_i\in\mathcal K_Y(U_i)^{\times}$ is a meromorphic
unit, and $g_i/g_j\in\mathcal O_Y^{\times}(U_i\cap U_j)$ for all $i,j$
([[def-cartier-divisor]]). Because $\mathcal K_Y$ is the sheafification of
$\mathcal P_Y$, after refining the cover we may assume that each $g_i$ is the
image of an element $a_i/s_i\in S_Y(U_i)^{-1}\mathcal O_Y(U_i)$ with
$a_i\in\mathcal O_Y(U_i)$ and $s_i\in S_Y(U_i)$; the refinement changes
neither the datum nor the divisor. Say that the datum is
**$f$-admissible** when
$$f^{\#}(a_i)\in S_X(f^{-1}U_i)\qquad\text{and}\qquad f^{\#}(s_i)\in S_X(f^{-1}U_i)\qquad\text{for every }i.$$
Since $s_i$ is regular, its image in $\mathcal K_Y(U_i)$ is a unit, so
$g_i=a_i/s_i$ is a unit of $\mathcal K_Y(U_i)$ automatically once the
representation exists. We say that the **pullback** $f^*D$ is
**defined** if $D$ admits an $f$-admissible local-equation datum on some open
cover of $Y$.

In that case, on $f^{-1}U_i$ the two sections $f^{\#}(a_i)$ and
$f^{\#}(s_i)$ are regular, so $f^{\#}(a_i)/f^{\#}(s_i)$ is a unit of
$S_X(f^{-1}U_i)^{-1}\mathcal O_X(f^{-1}U_i)$, hence a unit of
$\mathcal K_X(f^{-1}U_i)$; we denote it by $g_i'$. On an overlap
$W=U_i\cap U_j$ the ratio $u=g_i/g_j$ is a unit of
$\mathcal O_Y(W)$, and multiplying the identity $g_i=ug_j$ by $s_is_j$ and
using that $g_i,g_j$ are the images of $a_i/s_i$ and $a_j/s_j$ gives that the
function $a_is_j-ua_js_i\in\mathcal O_Y(W)$ has image $0$ in
$\mathcal K_Y(W)$; since $\mathcal O_Y\to\mathcal K_Y$ is injective, this
function is $0$, so $a_is_j=ua_js_i$ in $\mathcal O_Y(W)$. Applying $f^{\#}$
and dividing by the regular sections $f^{\#}(s_i),f^{\#}(s_j)$ gives
$g_i'=f^{\#}(u)\,g_j'$ in $\mathcal K_X(f^{-1}W)$, and $f^{\#}(u)$ is a unit of
$\mathcal O_X(f^{-1}W)$; hence $g_i'/g_j'$ is a unit of
$\mathcal O_X(f^{-1}W)$. Therefore the family
$\{(f^{-1}U_i,\,g_i')\}_i$ is a local-equation datum on $X$ and determines a
Cartier divisor ([[def-cartier-divisor]]); we define $f^*D$ to be that
divisor.

This is well defined. Indeed, if $g_i=a_i/s_i=b_i/t_i$ are two
representations with all four pullbacks regular, then multiplying
$a_i/s_i=b_i/t_i$ by $s_it_i$ shows that the function $a_it_i-b_is_i\in
\mathcal O_Y(U_i)$ has image $0$ in $\mathcal K_Y(U_i)$, hence is $0$; applying
$f^{\#}$ and dividing by the regular sections $f^{\#}(s_i),f^{\#}(t_i)$ gives
$f^{\#}(a_i)/f^{\#}(s_i)=f^{\#}(b_i)/f^{\#}(t_i)$ in
$\mathcal K_X(f^{-1}U_i)$. Similarly, if two $f$-admissible data represent the
same $D$ and on a common refinement $W$ their equations satisfy $g=uh$ with
$u\in\mathcal O_Y^{\times}(W)$, the same clearing-denominators argument gives
$g'=f^{\#}(u)h'$ with $f^{\#}(u)$ a unit of $\mathcal O_X$, so the two
resulting local-equation data determine the same Cartier divisor after
refinement. In particular $f^*D$ is independent of the chosen
$f$-admissible datum, and restriction of an admissible datum to a refinement
is again admissible with the same pullback.

**Effective divisors.** Suppose $D$ is effective, with local regular
equations $f_i\in S_Y(U_i)$ ([[def-effective-cartier-divisor]]); choose the
representation $f_i/1$ with numerator $f_i$ and denominator $1$. Then the
datum is $f$-admissible exactly when each pulled-back regular equation
$f^{\#}(f_i)$ is again regular on $f^{-1}U_i$, and in that case $f^*D$ is the
effective Cartier divisor cut out locally by the equations $f^{\#}(f_i)$. If
the pullback of an effective $D$ is defined through some other representation
$a_i/s_i$ of $f_i$ with regular pullbacks, then $f_i s_i=a_i$ in
$\mathcal O_Y(U_i)$ by the clearing-denominators argument, so
$f^{\#}(f_i)f^{\#}(s_i)=f^{\#}(a_i)$ with both factors on the right regular,
and hence $f^{\#}(f_i)$ is regular and $f^*D$ is effective. Thus for
effective $D$ the assertion "$f^*D$ is defined" is equivalent to the
regularity of the pulled-back regular equations.

**Flat morphisms.** If $f$ is flat ([[def-flat-morphism-schemes]]), then
pullbacks of meromorphic functions are defined for $f$ and every Cartier
divisor on $Y$ has a defined pullback. Indeed, let $x\in X$, $y=f(x)$, and let
$s\in S_Y(V)$ for an open $V\ni y$. Flatness at $x$ says that
$\mathcal O_{X,x}$ is a flat $\mathcal O_{Y,y}$-module; tensoring the
injective multiplication map $s_y:\mathcal O_{Y,y}\to\mathcal O_{Y,y}$ with
$\mathcal O_{X,x}$ over $\mathcal O_{Y,y}$ therefore gives the injective map
$f^{\#}(s_y):\mathcal O_{X,x}\to\mathcal O_{X,x}$, so the germ $f^{\#}(s)_x$
is a nonzerodivisor. As $x$ was arbitrary, $f^{\#}(s)$ is regular. Hence
$f^{\#}(S_Y(V))\subseteq S_X(f^{-1}V)$ for all $V$, every local-equation datum
is $f$-admissible (regularity of the numerator is automatic as recalled
above), and $f^*$ is defined on all of $\operatorname{CaDiv}(Y)$; this is the
flat case of the source's list of sufficient conditions. When pullbacks of
meromorphic functions are defined for $f$ in the sense above, the map
$f^{-1}\mathcal K_Y\to\mathcal K_X$ descends to
$f^{-1}(\mathcal K_Y^{\times}/\mathcal O_Y^{\times})\to
\mathcal K_X^{\times}/\mathcal O_X^{\times}$ and recovers the same pullback
of every Cartier divisor.

**Boundary cases.** The zero Cartier divisor is represented by the equation
$1=1/1$; its pullback is represented by $f^{\#}(1)=1$ and is the zero
divisor, so it is defined for every morphism $f$. If $Y=\varnothing$ then
$\operatorname{CaDiv}(Y)=0$ and the only pullback is $0$; if
$X=\varnothing$ then every local-equation datum is $f$-admissible vacuously
and $f^*D$ is the unique Cartier divisor of the empty scheme. The sign
convention is that of [[def-cartier-divisor]]: zeros of the pulled-back
equations are recorded with positive coefficients, poles with negative ones.
