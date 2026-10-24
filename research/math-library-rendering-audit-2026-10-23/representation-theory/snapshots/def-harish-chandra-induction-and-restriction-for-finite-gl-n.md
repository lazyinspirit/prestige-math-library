---
id: def-harish-chandra-induction-and-restriction-for-finite-gl-n
kind: definition
title: Harish-Chandra induction and restriction for finite general linear groups
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq, def-compositions-partial-flags-and-standard-parabolics, def-induced-r-linear-g-module-by-h-covariant-functions, def-group-action, def-g-module-over-a-commutative-ring, def-standard-subgroups-of-gl-n-over-a-finite-field, def-subgroup, def-normal-subgroup, def-quotient-group, thm-first-isomorphism-theorem-groups]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Definition 9.2 and Remark 9.3, printed p. 35"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.2, printed p. 42"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

**Levi decompositions.** Let $G$ be a finite group and let $P\le G$ be a
subgroup that is the internal semidirect product
$$P=L\ltimes U$$
of a subgroup $L\le P$ and a normal subgroup $U\trianglelefteq P$ with
$P=LU$ and $L\cap U=\{1\}$ ([[def-subgroup]], [[def-normal-subgroup]]); one
calls $P$ a **parabolic subgroup** with **Levi complement** $L$ and
**unipotent radical** $U$ when $P$ arises this way from the finite general
linear group below. The projection
$$\pi:P\longrightarrow L,\qquad \pi(lu):=l\quad(l\in L,u\in U),$$
is a surjective group homomorphism with kernel $U$: it is the composite of the
quotient map $P\to P/U$ of [[def-quotient-group]] with the inverse of the
isomorphism $L\to P/U$, $l\mapsto lU$, which is bijective because $P=LU$ and
$L\cap U=\{1\}$ ([[thm-first-isomorphism-theorem-groups]]); hence
$P/U\cong L$.

**Inflation.** Let $R$ be a commutative ring and let $V$ be an $R$-linear
$L$-module ([[def-g-module-over-a-commutative-ring]]). The **inflation** of $V$
from $L$ to $P$ is the $R$-module $V$ together with the $P$-action
$$p\cdot v:=\pi(p)\cdot v\qquad(p\in P,\ v\in V),$$
which is well defined because $\pi$ is a homomorphism, and under which every
element of $U$ acts as the identity; we write $\operatorname{Inf}_L^P V$ for
this $R$-linear $P$-module.

**Harish-Chandra induction.** With $V$ as above, the **Harish-Chandra
induction** of $V$ from $L$ to $G$ (with respect to the parabolic $P$) is the
$R$-linear $G$-module
$$R_L^G(V):=\operatorname{Ind}_P^G\!\left(\operatorname{Inf}_L^PV\right),$$
the induction from $P$ to $G$ of [[def-induced-r-linear-g-module-by-h-covariant-functions]];
thus $R_L^G(V)$ is the set of functions $f:G\to V$ with
$f(gp)=\pi(p)^{-1}f(g)$ for all $g\in G$, $p\in P$, and
$(x\cdot f)(g)=f(x^{-1}g)$.

**Harish-Chandra restriction.** Let $X$ be an $R$-linear $G$-module. Its
**$U$-invariants** are
$$X^U:=\{\,x\in X:u\cdot x=x\text{ for every }u\in U\,\},$$
an $R$-submodule of $X$ that is stable under $P$. Define the **Harish-Chandra
restriction** of $X$ from $G$ to $L$ (with respect to $P$) to be $X^U$ equipped
with the $L$-action
$$l\cdot x:=l\,x\qquad(l\in L,\ x\in X^U),$$
the restriction of the $P$-action. This is well defined as an action of $L$,
and it depends only on the class of $l$ in $P/U\cong L$: if $p\in P$ has
$\pi(p)=l$, then $p=lu$ with $u\in U$ and $px=lux=lx$ for $x\in X^U$. We write
$${}^*\!R_L^G(X):=X^U$$
for this $R$-linear $L$-module.

**Functoriality.** If $\varphi:V\to V'$ is a morphism of $R$-linear $L$-modules,
then $\varphi$ is also $P$-linear for the inflated actions, and postcomposition
with $\varphi$ defines a morphism $R_L^G(\varphi):R_L^G(V)\to R_L^G(V')$ of
$R$-linear $G$-modules, because
$(\varphi\circ f)(gp)=\pi(p)^{-1}\varphi(f(g))$; the assignments
$V\mapsto R_L^G(V)$ and $X\mapsto{}^*\!R_L^G(X)$ are additive functors between
the categories of $R$-linear $L$-modules and $R$-linear $G$-modules, and
$X\mapsto X^U$ acts on morphisms by restriction since the action of $U$ is $R$-linear by
[[def-g-module-over-a-commutative-ring]].

**The case of finite general linear groups.** Now let $n\ge1$, let $q$ be a
prime power and put $G=\operatorname{GL}_n(\mathbb F_q)$, with diagonal torus
$T$ and standard flag $V_\bullet$
([[def-standard-subgroups-of-gl-n-over-a-finite-field]]). For a composition
$\alpha$ of $n$ the standard parabolic subgroup $P_\alpha$ has the Levi
decomposition $P_\alpha=L_\alpha\ltimes U_\alpha$
([[def-compositions-partial-flags-and-standard-parabolics]],
[[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]]), so the
constructions above apply with $P=P_\alpha$, $L=L_\alpha$, $U=U_\alpha$; we
write
$$R_{L_\alpha}^G(V):=\operatorname{Ind}_{P_\alpha}^G\!\left(\operatorname{Inf}_{L_\alpha}^{P_\alpha}V\right), \qquad {}^*\!R_{L_\alpha}^G(X):=X^{U_\alpha}.$$
More generally, a subgroup of $G$ is a **split Levi subgroup** when it is of the
form $gL_\alpha g^{-1}$ for some $g\in G$ and composition $\alpha$, and a
**split parabolic subgroup** is a subgroup of the form $gP_\alpha g^{-1}$; such
a subgroup has the Levi decomposition
$gP_\alpha g^{-1}=(gL_\alpha g^{-1})\ltimes(gU_\alpha g^{-1})$, and the general
construction above attaches to it the functors $R_L^G$ and ${}^*\!R_L^G$ for
$L=gL_\alpha g^{-1}$. For an arbitrary split parabolic the definitions
therefore involve no further choice: the parabolic subgroup $P$ and its
unipotent radical $U$ are part of the data, and the notation
$R_L^G$, ${}^*\!R_L^G$ records only the Levi. For complex modules and coordinate parabolics obtained by ordering the same
coordinate blocks, the parabolic-independence theorem of this page proves that
these functors depend, up to natural isomorphism, only on $L$. Over a general
coefficient ring $R$, the parabolic $P$ remains part of the functor data; when
needed we display it as $R_L^{G,P}$ and ${}^*\!R_L^{G,P}$.

**Standing conventions.** Except where another coefficient ring is named, all
modules on this page are complex vector spaces, so $R=\mathbb C$, the group
algebras are semisimple by
[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]],
and the functors above are the complex Harish-Chandra functors of
Dudas–Michel. For finite-dimensional $V$ one has
$\dim_{\mathbb C}R_L^G(V)=[G:P]\dim_{\mathbb C}V$, because an induced
module is free over the index of $P$ in $G$ (the functions of
[[def-induced-r-linear-g-module-by-h-covariant-functions]] are determined by
their values on a set of left coset representatives), and
$\dim_{\mathbb C}{}^*\!R_L^G(X)\le\dim_{\mathbb C}X$.
