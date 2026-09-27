---
id: "ex-mayer-vietoris-projective-line-cover-preview"
kind: "example"
title: "Two-affine Mayer–Vietoris on the projective line"
status: draft
origin: pipeline
deps: [thm-mayer-vietoris-sheaf-cohomology, def-projective-line-two-affine-cover-and-twisting-sheaf, thm-zero-sheaf-cohomology-global-sections, thm-sections-basic-open-affine-scheme, def-sheaf-on-topological-space, def-axiom-of-choice, def-sheaf-cohomology-derived-global-sections, def-restriction-sheaf-open-subspace]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field,
let $\mathbb P^1_k$ be the two-affine projective line with charts $U_0\cong
\operatorname{Spec}k[t]$, $U_\infty\cong\operatorname{Spec}k[u]$ and overlap
$W=U_0\cap U_\infty\cong\operatorname{Spec}k[t,t^{-1}]$ carrying the mutually
inverse coordinates $t,u$ with $tu=1$, and let $\mathcal O(n)$ be the twisting
sheaf with frames $e_0$ on $U_0$ and $e_\infty$ on $U_\infty$ related by
$e_\infty=t^ne_0$
([[def-projective-line-two-affine-cover-and-twisting-sheaf]]). Then:

1. the chart modules of $\mathcal O(n)$ are
   $$\Gamma(U_0,\mathcal O(n))=k[t]e_0,\qquad \Gamma(U_\infty,\mathcal O(n))=k[u]e_\infty,\qquad \Gamma(W,\mathcal O(n))=k[t,t^{-1}]e_0,$$
   the last with the identification $e_\infty=t^ne_0$;
2. the Mayer–Vietoris sequence of the two-open cover $\{U_0,U_\infty\}$
   ([[thm-mayer-vietoris-sheaf-cohomology]]) for $\mathcal O(n)$ reads
   $$0\to H^0(\mathbb P^1_k,\mathcal O(n))\to k[t]\oplus k[u]\xrightarrow{\ \beta\ }k[t,t^{-1}]\xrightarrow{\ \partial\ }H^1(\mathbb P^1_k,\mathcal O(n))\to H^1(U_0,\mathcal O(n)|_{U_0})\oplus H^1(U_\infty,\mathcal O(n)|_{U_\infty})\to H^1(W,\mathcal O(n)|_W)\to H^2(\mathbb P^1_k,\mathcal O(n))\to\cdots,$$
   where $\beta(a,b)=t^nb(t^{-1})-a(t)$ for $a\in k[t]$, $b\in k[u]$;
3. consequently $H^0(\mathbb P^1_k,\mathcal O(n))\cong\ker\beta$ and
   $\operatorname{coker}\beta\cong\ker\bigl(H^1(\mathbb P^1_k,\mathcal O(n))\to
   H^1(U_0,\mathcal O(n)|_{U_0})\oplus H^1(U_\infty,\mathcal O(n)|_{U_\infty})\bigr)$;
4. $\ker\beta\cong k^{n+1}$ for $n\ge0$ and $\ker\beta=0$ for $n<0$, while
   $\beta$ is surjective for $n\ge-1$ and $\operatorname{coker}\beta\cong
   k^{-n-1}$ for $n\le-2$; in particular $H^0(\mathbb P^1_k,\mathcal O(0))\cong
   k$ is the constants, $H^0(\mathbb P^1_k,\mathcal O(1))\cong k^2$ is generated
   by the sections $(t,1)$ and $(1,u)$, and for $n\le-2$ the group $k^{-n-1}$
   embeds in $H^1(\mathbb P^1_k,\mathcal O(n))$.

The groups $H^i(U_0,\mathcal O(n)|_{U_0})$, $H^i(U_\infty,
\mathcal O(n)|_{U_\infty})$ and $H^i(W,\mathcal O(n)|_W)$ for $i\ge1$ are kept as
terms of the sequence; no vanishing of them is asserted here.

## Facts & Assumptions

[F1] For a sheaf of abelian groups $\mathcal F$ on $X=U\cup V$ with $U,V$ open, there is a natural long exact Mayer–Vietoris sequence $\cdots\to H^q(X,\mathcal F)\to H^q(U,\mathcal F|_U)\oplus H^q(V,\mathcal F|_V)\to H^q(U\cap V,\mathcal F|_{U\cap V})\xrightarrow{\partial}H^{q+1}(X,\mathcal F)\to\cdots$, whose degree zero map is the difference of restrictions ([[thm-mayer-vietoris-sheaf-cohomology]]).

[F2] $\mathcal O(n)$ is glued from the structure sheaves of the two charts with frames $e_0=1$ on $U_0$ and $e_\infty=1$ on $U_\infty$ related on $W$ by $e_\infty=t^ne_0$, equivalently $e_0=t^{-n}e_\infty$, and it is free of rank one on each chart with the displayed frame ([[def-projective-line-two-affine-cover-and-twisting-sheaf]]).

[F3] On the overlap the sections of $\mathcal O(n)$ are $k[t,t^{-1}]e_0$ with $a(t)e_0=t^{-n}a(t)e_\infty=u^na(u^{-1})e_\infty$ ([[def-projective-line-two-affine-cover-and-twisting-sheaf]]).

[F4] For a ring $A$ with structure sheaf $\mathcal O$ and $f\in A$ one has $\Gamma(D(f),\mathcal O)=A_f$; in particular for $A=k[t]$ and $f=1$ the global sections of the chart $U_0$ are $k[t]$ ([[thm-sections-basic-open-affine-scheme]]).

[F5] $H^0(X,\mathcal F)$ is canonically isomorphic to $\Gamma(X,\mathcal F)$, naturally in $\mathcal F$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F6] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Verification

**Given:** The field $k$, the two-affine projective line $\mathbb P^1_k$ with charts $U_0\cong\operatorname{Spec}k[t]$, $U_\infty\cong\operatorname{Spec}k[u]$, overlap $W=U_0\cap U_\infty$ with coordinates $t,u$, $tu=1$, and the twisting sheaves $\mathcal O(n)$, $n\in\mathbb Z$, with frames $e_0,e_\infty$ satisfying $e_\infty=t^ne_0$ on $W$.

**Proof technique:** direct.

1.1 The two charts $U_0,U_\infty$ are nonempty open subschemes of $\mathbb P^1_k$ covering it, their overlap $W=U_0\cap U_\infty$ is nonempty and identified with $\operatorname{Spec}k[t,t^{-1}]$, and on $W$ the two coordinate functions are mutually inverse units $t,u$ with $tu=1$ [F2, F3]. The restriction $\mathcal O(n)|_{U_0}$ is the structure sheaf of $U_0$ with global frame $e_0$, and likewise $\mathcal O(n)|_{U_\infty}$ is the structure sheaf of $U_\infty$ with global frame $e_\infty$ [F2]. [F2, F3]

2.1 By [F4] applied to the chart $U_0\cong\operatorname{Spec}k[t]$ and the element $f=1$, whose basic open is the whole chart, the global sections of the structure sheaf of $U_0$ are $k[t]$; the frame $e_0$ is a global generator, so $\Gamma(U_0,\mathcal O(n))=k[t]e_0$. The same argument on $U_\infty\cong\operatorname{Spec}k[u]$ gives $\Gamma(U_\infty,\mathcal O(n))=k[u]e_\infty$, and by [F3] the sections over the overlap are $\Gamma(W,\mathcal O(n))=k[t,t^{-1}]e_0$ with $e_\infty=t^ne_0$ there. Consequently every section of $\mathcal O(n)$ over the overlap has the form $c(t)e_0$ for a unique Laurent polynomial $c\in k[t,t^{-1}]$. [F3, F4, step 1.1]

3.1 The underlying topological space of $\mathbb P^1_k$ is the union of the two open subsets $U_0$, $U_\infty$, and $\mathcal O(n)$ is in particular a sheaf of abelian groups on it, its module structure being forgotten; the Axiom of Choice [F6] is available, as required by the Mayer–Vietoris theorem [F1]. Applying [F1] to this cover and substituting the three modules of [step 2.1] gives the long exact sequence of the statement, in which the second map is the difference of the two restrictions: for $a\in k[t]$ and $b\in k[u]$ the pair $(ae_0,be_\infty)$ is sent to $$be_\infty|_W-ae_0|_W=\bigl(t^nb(t^{-1})-a(t)\bigr)e_0,$$ using $e_\infty=t^ne_0$ and $u=t^{-1}$ on $W$ [F2, F3]. The first term is $\Gamma(\mathbb P^1_k,\mathcal O(n))$ read as $H^0$ through the canonical identification of [F5], so the sequence begins $0\to H^0(\mathbb P^1_k,\mathcal O(n))\to k[t]\oplus k[u]\xrightarrow{\ \beta\ }k[t,t^{-1}]$ with $\beta(a,b)=t^nb(t^{-1})-a(t)$. [F1, F2, F3, F5, F6, step 2.1]

3.2 An element $(a,b)$ lies in $\ker\beta$ exactly when $a(t)=t^nb(t^{-1})$. Writing $b=\sum_{m\ge0}b_mu^m$, the right-hand side is $\sum_{m\ge0}b_mt^{n-m}$, which is a polynomial in $t$ exactly when $b_m=0$ for all $m>n$; this forces $b=0$ and $a=0$ when $n<0$, and for $n\ge0$ leaves the $n+1$ free coefficients $b_0,\dots,b_n$ with $a(t)=\sum_{m=0}^nb_mt^{n-m}$ and $b(u)=\sum_{m=0}^nb_mu^m$. Hence $\ker\beta\cong k^{n+1}$ for $n\ge0$ and $\ker\beta=0$ for $n<0$. [F2, F3, step 2.1]

4.1 Exactness of the sequence of [step 3.1] at the terms $k[t]\oplus k[u]$ and $k[t,t^{-1}]$ says $\ker\beta\cong H^0(\mathbb P^1_k,\mathcal O(n))$ (the map out of $H^0$ being injective), and exactness at $H^1(\mathbb P^1_k,\mathcal O(n))$ says that the image of $\partial$ is the kernel of the restriction map to the two charts; since $\partial$ induces an isomorphism from $k[t,t^{-1}]/\operatorname{im}\beta$ onto that image, $$\operatorname{coker}\beta\cong\ker\bigl(H^1(\mathbb P^1_k,\mathcal O(n))\to H^1(U_0,\mathcal O(n)|_{U_0})\oplus H^1(U_\infty,\mathcal O(n)|_{U_\infty})\bigr).$$ [F1, step 3.1]

4.2 Under the identification of $k[t,t^{-1}]$ with the Laurent polynomials, $\operatorname{im}\beta=k[t]+t^nk[t^{-1}]$ is the span of the monomials $t^j$ with $j\ge0$ or $j\le n$, since $t^nk[t^{-1}]$ is spanned by $t^{n-m}$, $m\ge0$ [step 2.1]. Hence $\beta$ is surjective exactly when every integer $j$ satisfies $j\ge0$ or $j\le n$, that is exactly when $n\ge-1$; for $n\le-2$ the monomials $t^{n+1},\dots,t^{-1}$ are not in the image and their classes form a basis of $\operatorname{coker}\beta$, so $\operatorname{coker}\beta\cong k^{-n-1}$. [F3, step 2.1, step 3.1]

5.1 Specialising [step 4.2] and [step 3.2]: for $n=0$ the differential is $\beta(a,b)=b(t^{-1})-a(t)$, it is surjective, and its kernel consists of the pairs with $a=b$ constant, so $H^0(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k})\cong k$ is the constants; for $n=1$ the differential is $\beta(a,b)=tb(t^{-1})-a(t)$, it is surjective, and its kernel is $\{(c_0t+c_1,\,c_0+c_1u):c_0,c_1\in k\}\cong k^2$ with the two generators $(t,1)$ and $(1,u)$; for $n=-1$ the differential is surjective with zero kernel; and for $n=-2$ the image misses exactly the multiples of $t^{-1}$, so $\operatorname{coker}\beta\cong k$ and $\beta$ is not surjective. In all cases the orientation of the transition enters through $e_\infty=t^ne_0$, which converts a section $b(u)e_\infty$ over $U_\infty$ into $t^nb(t^{-1})e_0$ over the overlap. [F2, step 4.2, step 3.2]

6.1 The three chart modules of [step 2.1] and the sequence of [step 3.1], whose second map is $\beta$ of [step 4.2], prove assertions 1 and 2 of the statement; [step 4.1] gives assertion 3, and [step 3.2], [step 4.2] and [step 5.1] give assertion 4 with the two checks $n=0$ and $n=1$ of the transition orientation. The higher chart groups $H^i(U_0,\mathcal O(n)|_{U_0})$, $H^i(U_\infty,\mathcal O(n)|_{U_\infty})$ and $H^i(W,\mathcal O(n)|_W)$ for $i\ge1$ appear in the sequence as themselves and are not claimed to vanish; only the degree zero row $k[t]\oplus k[u]\to k[t,t^{-1}]$ and its immediate exactness consequences are computed. The Axiom of Choice of [F6] enters exactly through [F1], whose proof produces a functorial injective resolution, and through the cited construction of the structure sheaves of the affine charts in [[def-projective-line-two-affine-cover-and-twisting-sheaf]]; no further choice is made, the modules and the map $\beta$ being given by explicit polynomials. ∎ [F1, F6, step 5.1, step 4.1, step 4.2, step 3.2, step 2.1, step 3.1]
