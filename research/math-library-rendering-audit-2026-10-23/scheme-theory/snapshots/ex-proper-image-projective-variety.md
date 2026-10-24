---
id: ex-proper-image-projective-variety
kind: example
title: Incidence projection has closed determinantal image
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-relative-projective-space-standard-charts
  - def-scheme-over-base
  - def-closed-immersion-schemes
  - lem-closed-immersion-local-on-target
  - def-base-change-morphism-schemes
  - thm-projective-space-proper-over-base
  - lem-proper-stable-base-change
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - thm-proper-morphism-closed-image
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - def-morphism-affine-schemes-from-ring-map
  - def-prime-spectrum-and-vanishing-sets
  - lem-zariski-closed-set-axioms
  - def-residue-field-scheme-point
  - lem-field-valued-points-of-schemes
  - def-axiom-of-choice
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes §§29.11, 29.42–45"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Vakil, The Rising Sea §§8.3, 11.3, 17.4"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Example

Let $k$ be a field. Let $\mathbb P^1_k$ be the relative projective line over
$\operatorname{Spec}k$ with standard charts $U_0=\operatorname{Spec}k[u]$ and
$U_1=\operatorname{Spec}k[v]$, where $u$ and $v$ are the chart coordinates
$t_1/t_0$ and $t_0/t_1$ of the homogeneous coordinates $[t_0:t_1]=[s:t]$, and
let $\mathbf A^4_k=\operatorname{Spec}k[a,b,c,d]$ be the relative affine
$4$-space over $\operatorname{Spec}k$. Let $Z\subseteq\mathbb
P^1_k\times_k\mathbf A^4_k$ be the closed subscheme cut out by the two relative
equations
$$as+bt=0,\qquad cs+dt=0,$$
which on the charts means $Z\cap(U_0\times_k\mathbf A^4_k)=V(a+bu,\,c+du)$ and
$Z\cap(U_1\times_k\mathbf A^4_k)=V(av+b,\,cv+d)$. Then the projection
$$\pi:Z\longrightarrow\mathbf A^4_k$$
is proper and its image is the closed subset $V(ad-bc)\subseteq\mathbf A^4_k$.
The assertion holds over every field, in particular in characteristic $2$, and
the origin $(a,b,c,d)=(0,0,0,0)$ lies in the image, the fibre of $\pi$ over it
being a copy of $\mathbb P^1_k$.

## Facts & Assumptions

**Given:** A field $k$; the relative projective line $\mathbb P^1_k$ over $\operatorname{Spec}k$ with standard charts $U_0=\operatorname{Spec}k[u]$, $U_1=\operatorname{Spec}k[v]$; the relative affine space $\mathbf A^4_k=\operatorname{Spec}k[a,b,c,d]$; the product $\mathbb P^1_k\times_k\mathbf A^4_k$; the closed subscheme $Z$ cut out by $as+bt=0$ and $cs+dt=0$, whose charts are $Z\cap(U_0\times_k\mathbf A^4_k)=V(a+bu,c+du)$ and $Z\cap(U_1\times_k\mathbf A^4_k)=V(av+b,cv+d)$; and the projection $\pi:Z\to\mathbf A^4_k$, the restriction of the second projection of the product.

[F1] For a base scheme $S=\operatorname{Spec}k$ the standard charts of $\mathbb P^1_S=\mathbb P^1_{\operatorname{Spec}k}$ are $U_0=\operatorname{Spec}k[x^{(0)}_1]=\operatorname{Spec}k[u]$ and $U_1=\operatorname{Spec}k[x^{(1)}_0]=\operatorname{Spec}k[v]$, with $u=t_1/t_0$, $v=t_0/t_1$, $u=1/v$ on the overlap; they form an open cover of $\mathbb P^1_k$. ([[def-relative-projective-space-standard-charts]])

[F2] Relative affine space is defined over every base scheme, and over an affine base it is $\mathbf A^n_{\operatorname{Spec}A}=\operatorname{Spec}A[t_1,\dots,t_n]$ with structure morphism induced by $A\hookrightarrow A[t_1,\dots,t_n]$; in particular $\mathbf A^4_k=\operatorname{Spec}k[a,b,c,d]$ is a scheme over $\operatorname{Spec}k$. ([[def-scheme-over-base]])

[F3] For ring maps $A\to B$ and $A\to C$ there is a canonical isomorphism $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$ compatible with the projections; hence $U_0\times_k\mathbf A^4_k=\operatorname{Spec}(k[u]\otimes_kk[a,b,c,d])=\operatorname{Spec}k[u,a,b,c,d]$ and the projection to $\mathbf A^4_k$ corresponds to the inclusion $k[a,b,c,d]\hookrightarrow k[u,a,b,c,d]$, and likewise over $U_1$ with $v$ in place of $u$. ([[thm-affine-fibre-product-tensor-ring]])

[F4] A morphism is a **closed immersion** when its underlying map is a homeomorphism onto a closed subset of its target and the structure-sheaf map is surjective; a morphism is a closed immersion exactly when its restrictions over the members of an open cover of the target are closed immersions. ([[def-closed-immersion-schemes]], [[lem-closed-immersion-local-on-target]])

[F5] For a morphism $S'\to S$ and an $S$-scheme $X$, the **base change** is the fibre product $X_{S'}=X\times_SS'$ with structure morphism the second projection. ([[def-base-change-morphism-schemes]])

[F6] Assume AC. For every scheme $S$ and every $n\ge0$ the projective-space morphism $\mathbb P^n_S\to S$ is proper; in particular $\mathbb P^1_k\to\operatorname{Spec}k$ is proper. ([[thm-projective-space-proper-over-base]])

[F7] Assume AC. Base changes of proper morphisms are proper. ([[lem-proper-stable-base-change]])

[F8] Assume AC. Every closed immersion is finite, hence proper; the empty closed immersion is included. ([[lem-closed-immersion-proper]])

[F9] Assume AC. A composite of proper morphisms is proper. ([[lem-proper-stable-composition]])

[F10] A proper morphism of schemes is a closed map: the image of every closed subset of its source is closed in its target, and in particular the image of the whole source is closed. ([[thm-proper-morphism-closed-image]])

[F11] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ is a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$, making $A\mapsto\operatorname{Spec}A$ a contravariant equivalence with quasi-inverse global sections; a ring homomorphism $\varphi:A\to B$ gives the continuous contraction map $\operatorname{Spec}B\to\operatorname{Spec}A$, $\mathfrak q\mapsto\varphi^{-1}\mathfrak q$. Consequently, for a field $F$ and a ring map $\psi:R\to F$, the image of $\operatorname{Spec}\psi$ is the point $\psi^{-1}(0)=\ker\psi$ of $\operatorname{Spec}R$. ([[thm-affine-scheme-ring-anti-equivalence]], [[def-morphism-affine-schemes-from-ring-map]])

[F12] The points of $\operatorname{Spec}R$ are the prime ideals of $R$, and for an ideal $I\subseteq R$ its vanishing set is $V(I)=\{\mathfrak p\in\operatorname{Spec}R:I\subseteq\mathfrak p\}$; the sets $V(I)$ are closed under arbitrary intersections and finite unions and define the Zariski topology, so they are exactly the closed subsets. ([[def-prime-spectrum-and-vanishing-sets]], [[lem-zariski-closed-set-axioms]])

[F13] For a point $x$ of a locally ringed space put $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$; if $x=\mathfrak p$ is a point of $\operatorname{Spec}A$ then $\kappa(\mathfrak p)\cong A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}\cong\operatorname{Frac}(A/\mathfrak p)$. ([[def-residue-field-scheme-point]])

[F14] For every field $K$ and scheme $X$, morphisms $\operatorname{Spec}K\to X$ correspond bijectively to pairs $(x,\iota)$ with $x\in X$ and a field embedding $\iota:\kappa(x)\to K$; the identity embedding gives a canonical morphism $\operatorname{Spec}\kappa(x)\to X$ with image $x$, compatible with all scheme morphisms. ([[lem-field-valued-points-of-schemes]])

[F15] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

**AC use:** F15 is assumed because F6, F7, F8 and F9 are AC-qualified; the chart computations, the case analysis over residue fields and the affine correspondences below are choice-free.

## Verification

**Proof technique:** direct: the two chart equations force $ad-bc=0$ on $Z$, and conversely every point of $V(ad-bc)$ is attained by solving the two linear equations over its residue field; the projection is proper, being a closed immersion into a base change of the proper morphism $\mathbb P^1_k\to\operatorname{Spec}k$, so its image is closed and the two inclusions give equality.

1.1 On the overlap $U_0\cap U_1$ the chart coordinates satisfy $u=1/v$, $v=1/u$, so $av+b=(a+bu)/u$ and $cv+d=(c+du)/u$ with $u$ a unit of the overlap ring $k[u,u^{-1},a,b,c,d]$; hence the two chart ideals $(a+bu,c+du)$ and $(av+b,cv+d)$ generate the same ideal there and the closed subschemes $V(a+bu,c+du)\subseteq U_0\times_k\mathbf A^4_k$ and $V(av+b,cv+d)\subseteq U_1\times_k\mathbf A^4_k$ glue along the overlap. The glued scheme $Z$ therefore carries a morphism $i:Z\to\mathbb P^1_k\times_k\mathbf A^4_k$ whose restrictions to the two charts are these closed immersions, and by locality of closed immersions on the target, $i$ is a closed immersion; the charts displayed in the Given are exactly its restrictions, and the two equations $as+bt=0$, $cs+dt=0$ restrict to $a+bu$, $c+du$ over $U_0$ and to $av+b$, $cv+d$ over $U_1$. [F1, F3, F4, given]

1.2 Let $R_0=k[u,a,b,c,d]/(a+bu,c+du)$ be the coordinate ring of the first chart $Z_0=Z\cap(U_0\times_k\mathbf A^4_k)$ and let $R_1=k[v,a,b,c,d]/(av+b,cv+d)$ be that of the second. On the first chart the class of $ad-bc$ equals $(-bu)d-b(-du)=0$, and on the second it equals $a(-cv)-(-av)c=0$; so $ad-bc$ lies in the kernel of each of the two ring maps $k[a,b,c,d]\to R_j$ describing the projections $Z_j\to\mathbf A^4_k$, whose images are therefore contained in $V(ad-bc)$ since a contraction of a prime contains the kernel. The charts $U_0,U_1$ cover $\mathbb P^1_k$, so $Z=Z_0\cup Z_1$ and the image $\pi(Z)$ is the union of the two images of the $Z_j$; hence $\pi(Z)\subseteq V(ad-bc)$. [F1, F2, F3, F11, F12]

1.3 Conversely, let $\mathfrak p\in V(ad-bc)$, so that $ad-bc\in\mathfrak p\subseteq k[a,b,c,d]$, and put $F=\kappa(\mathfrak p)=\operatorname{Frac}(k[a,b,c,d]/\mathfrak p)$; write $a',b',c',d'$ for the images in $F$ of $a,b,c,d$, so that $a'd'=b'c'$. Choose $(s,t)\in F^2$ as follows: if $(a',b')\neq(0,0)$ take $(s,t)=(-b',a')$; if $(a',b')=(0,0)\neq(c',d')$ take $(s,t)=(d',-c')$; if $(a',b')=(c',d')=(0,0)$ take $(s,t)=(1,0)$. In each case $(s,t)\neq(0,0)$, and $a's+b't=0=c's+d't$: in the first case because $-a'b'+b'a'=0$ and $-c'b'+d'a'=a'd'-b'c'=0$, in the second because $a'=b'=0$ and $c'd'-d'c'=0$, and in the third because $a'=b'=c'=d'=0$. At least one of $s,t$ is nonzero; suppose first that $s\neq0$ and put $u'=t/s\in F$. The $k$-algebra map $\psi:k[u,a,b,c,d]\to F$ with $u\mapsto u'$, $a\mapsto a'$, $b\mapsto b'$, $c\mapsto c'$, $d\mapsto d'$ satisfies $\psi(a+bu)=(a's+b't)/s=0$ and $\psi(c+du)=(c's+d't)/s=0$; by [F11] it corresponds to a morphism $\operatorname{Spec}F\to U_0\times_k\mathbf A^4_k$ whose image is the prime $\ker\psi$, which contains $a+bu$ and $c+du$, hence lies in $V(a+bu,c+du)=|Z_0|\subseteq|Z|$ by [F12]. The composite of this morphism with the projection to $\mathbf A^4_k$ corresponds to the ring map $k[a,b,c,d]\to F$, $a\mapsto a'$, $b\mapsto b'$, $c\mapsto c'$, $d\mapsto d'$, that is, by [F13] to the canonical morphism $\operatorname{Spec}\kappa(\mathfrak p)\to\mathbf A^4_k$ of [F14], whose image is $\mathfrak p$; hence $\mathfrak p=\pi(\ker\psi)$ lies in the image of $\pi$. If $s=0$ then $t\neq0$, and the same computation with $v'=s/t$ in the chart $U_1$ gives $\psi(av+b)=(a's+b't)/t=0$, $\psi(cv+d)=(c's+d't)/t=0$ and again $\mathfrak p\in\pi(Z)$. Therefore $V(ad-bc)\subseteq\pi(Z)$. [F1, F3, F11, F12, F13, F14]

2.1 Let $p:\mathbb P^1_k\times_k\mathbf A^4_k\to\mathbf A^4_k$ be the second projection and let $q:\mathbb P^1_k\to\operatorname{Spec}k$ and $r:\mathbf A^4_k\to\operatorname{Spec}k$ be the structure morphisms. Since $p$ arises from the fibre product of $q$ and $r$, it is the base change of $q$ along $r$; by the AC-qualified [F6] the morphism $q$ is proper, so the AC-qualified [F7] makes $p$ proper. By the AC-qualified [F8] the closed immersion $i$ of step 1.1 is proper, so the composite $\pi=p\circ i:Z\to\mathbf A^4_k$ is a composite of proper morphisms and is proper by the AC-qualified [F9]. [F5, F6, F7, F8, F9, step 1.1]

3.1 Since $\pi$ is proper, [F10] shows that $\pi$ is a closed map; hence the image $\pi(Z)$ of the whole source is closed in $\mathbf A^4_k$. By step 1.2 the image is contained in $V(ad-bc)$, and by step 1.3 it contains $V(ad-bc)$; since it is closed, the two inclusions give $\pi(Z)=V(ad-bc)$. [F10, F12, step 1.2, step 1.3, step 2.1]

4.1 Combining the steps, the projection $\pi:Z\to\mathbf A^4_k$ is proper by step 2.1 and its image is exactly $V(ad-bc)$ by step 3.1. The Axiom of Choice [F15] is assumed and used only through the AC-qualified properness suppliers [F6], [F7], [F8] and [F9]; the chart computation of step 1.2 and the residue-field case analysis of step 1.3 involve no selection. The degenerate cases are covered: for $(a,b,c,d)=(0,0,0,0)$ all three cases of step 1.3 admit $(s,t)$, so the whole fibre $\mathbb P^1_k$ over the origin lies in $Z$; the argument uses no hypothesis on the field beyond being a field, so it applies in every characteristic including $2$, and no Noetherian, reducedness or nonemptiness hypothesis is imposed. [F1, F6, F7, F8, F9, F15, step 1.2, step 1.3, step 2.1, step 3.1] ∎
