---
id: cex-frobenius-not-smooth
kind: counterexample
title: "Frobenius on the affine line is finite flat but not smooth"
status: draft
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - lem-flatness-affine-local-source-target
  - def-smooth-morphism-schemes
  - def-ag-geometrically-regular-algebra-and-fibre
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-finitely-presented-module-and-algebra
  - cor-free-modules-are-projective-and-flat
  - def-embedding-dimension-and-regular-local-ring
  - thm-affine-fibre-product-tensor-ring
  - thm-right-exactness-of-tensor-products
  - def-krull-dimension-of-a-ring
  - def-prime-and-maximal-ideals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25 and 29.34-29.36"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26 (relative Frobenius)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $k=\mathbb F_p$ for a prime $p$ and let
$F:\operatorname{Spec}k[u]\to\operatorname{Spec}k[t]$ be the morphism induced by
the $k$-algebra map $k[t]\to k[u]$, $t\mapsto u^p$ (the relative Frobenius on
the affine line).

1. $k[u]$ is a free $k[t]$-module with basis $1,u,\dots,u^{p-1}$, so $F$ is a
   finite, flat, locally finitely presented morphism, finite locally free of
   rank $p$.
2. The fibre of $F$ over the prime $(t)\in\operatorname{Spec}k[t]$ is
   $\operatorname{Spec}k[u]/(u^p)$; its local ring at the prime $(u)$ has
   dimension zero and embedding dimension one, hence is not regular.
3. Consequently the fibre is not geometrically regular at $(u)$, so $F$ is not
   smooth at $(u)$ and not étale at $(u)$; in particular $F$ is neither smooth
   nor étale, and finite flat of finite presentation does not imply smooth.

The relative derivative $\mathrm d(t)/\mathrm du=pu^{p-1}=0$ in $k[u]$
corroborates the failure: the differential of the defining equation of the
presentation $k[t]\to k[t][u]/(u^p-t)$ vanishes identically.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is flat at $x$ when $\mathcal O_{X,x}$ is flat over $\mathcal O_{S,f(x)}$, and flat when this holds everywhere ([[def-flat-morphism-schemes]]); for affine charts $U=\operatorname{Spec}B\subseteq X$, $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$, flatness at every point of $U$ is equivalent to flatness of $B$ over $A$ ([[lem-flatness-affine-local-source-target]]).

[F2] A free module over a commutative ring is projective and flat ([[cor-free-modules-are-projective-and-flat]]).

[F3] A morphism $f:X\to S$ is finite when for every affine open $\operatorname{Spec}A\subseteq S$ its inverse image is affine, say $\operatorname{Spec}B$, and $B$ is a module-finite $A$-algebra ([[def-finite-morphism-schemes]]).

[F4] A morphism is locally of finite presentation when it has affine charts on which the ring map is a finitely presented algebra map ([[def-locally-finite-presentation-morphism]]); a polynomial algebra over a ring is finitely presented and a quotient by a finitely generated ideal is finitely presented ([[def-finitely-presented-module-and-algebra]]).

[F5] A morphism $f:X\to S$ is smooth at $x$ exactly when it is locally of finite presentation at $x$, flat at $x$, and its scheme-theoretic fibre at $f(x)$ is geometrically regular at $x$; in particular a fibre that is not geometrically regular at $x$ makes smoothness fail there ([[def-smooth-morphism-schemes]]).

[F6] For a finitely presented ring map $R\to S$ with $\mathfrak p=\mathfrak q\cap R$, the fibre at $\mathfrak q$ is $S\otimes_R\kappa(\mathfrak p)$, and geometric regularity at $\mathfrak q$ quantifies over **every** field extension $K/\kappa(\mathfrak p)$; taking $K=\kappa(\mathfrak p)$ shows that geometric regularity at $\mathfrak q$ forces regularity of the localisation of $S\otimes_R\kappa(\mathfrak p)$ at the image of $\mathfrak q$ ([[def-ag-geometrically-regular-algebra-and-fibre]]).

[F7] For a nonzero commutative Noetherian local ring $(T,\mathfrak n)$ the embedding dimension is $\operatorname{edim}T=\dim_{\kappa}(\mathfrak n/\mathfrak n^2)$ and $T$ is regular exactly when $\dim T=\operatorname{edim}T$ ([[def-embedding-dimension-and-regular-local-ring]]).

[F8] A scheme is étale at $x$ when it is smooth at $x$ and of relative dimension zero at $x$; hence étaleness at $x$ implies smoothness at $x$ ([[def-etale-morphism-schemes]]).

[F9] For ring maps $A\to B$, $A\to A'$ there is a canonical isomorphism $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}A'\cong\operatorname{Spec}(B\otimes_AA')$ ([[thm-affine-fibre-product-tensor-ring]]), and $-\otimes_AA'$ is right exact, so $B\otimes_{k[t]}k\cong k[u]/(u^p)$ for $B=k[t][u]/(u^p-t)$ and $k[t]\to k$, $t\mapsto0$ ([[thm-right-exactness-of-tensor-products]]).

[F10] The Krull dimension of a commutative ring is the supremum of lengths of strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]); every prime ideal contains the nilradical, and a maximal ideal is a prime that admits no larger proper prime ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 The presentation. $B:=k[u]=k[t][u]/(u^p-t)$ (the quotient map sends $u$ to the class of $u$, and $u^p=t$ holds in $B$). We claim that $1,u,\dots,u^{p-1}$ is a $k[t]$-basis of $B$. Every power $u^n$ with $n\ge p$ equals $t\,u^{n-p}$, so the displayed elements span $B$ over $k[t]$ and every element of $B$ is $\sum_{i=0}^{p-1}c_i(u^p)u^i$ with $c_i\in k[t]$. If such a combination vanishes in $k[u]$, then its coefficients in the basis $\{u^n:n\ge0\}$ of $k[u]$ over $k$ all vanish; the exponent $n$ receives contributions only from the $i$ with $i\equiv n\pmod p$, hence $c_i(u^p)=0$ for all $i$ and $c_i=0$ because $u$ is transcendental over $k$. This proves the claim. [given]

2.1 Finiteness and finite presentation. The basis of step 1.1 exhibits $B$ as a module-finite $k[t]$-algebra, generated by $u$ (indeed by $1,u,\dots,u^{p-1}$), so $F$ is finite by [F3]. Moreover $k[t][u]$ is a polynomial algebra over $k[t]$, hence a finitely presented $k[t]$-algebra by [F4], and $B$ is its quotient by the principal ideal $(u^p-t)$, so $B$ is a finitely presented $k[t]$-algebra and $F$ is locally of finite presentation by [F4]. [F3, F4, step 1.1]

2.2 Flatness. By step 1.1, $B$ is a free $k[t]$-module, hence flat over $k[t]$ by [F2]. The morphism $F$ has the single affine chart $\operatorname{Spec}B\to\operatorname{Spec}k[t]$, so flatness at every point follows from the affine-local criterion [F1]. [F1, F2, step 1.1]

2.3 The special fibre. Applying [F9] to $k[t]\to B$ and the residue map $k[t]\to k$, $t\mapsto0$, the fibre over the prime $(t)$ is $B\otimes_{k[t]}k=k[u]/(u^p)$. The prime $(u)\subseteq B$ lies over $(t)$ because $t=u^p\in(u)$, and its image in the fibre is the maximal ideal $(u)k[u]/(u^p)$. [F9, step 1.1]

3.1 The fibre local ring is not regular. Write $R=(k[u]/(u^p))_{(u)}$ for the local ring of the fibre at the image of $(u)$, with maximal ideal $\mathfrak m=(u)R$. Since $u^p=0$ in $R$, one has $\mathfrak m^p=0\subseteq P$ for every prime $P$ of $R$; as $P$ is prime this forces $\mathfrak m\subseteq P$, hence $P=\mathfrak m$ by maximality of $\mathfrak m$. Thus $\mathfrak m$ is the only prime of $R$ and $\dim R=0$ by [F10]. On the other hand $u\notin\mathfrak m^2$ and $\mathfrak m=(u)$, so $\mathfrak m/\mathfrak m^2$ is one-dimensional over $\kappa=k$, i.e. $\operatorname{edim}R=1$ by [F7]. Therefore $\dim R=0\ne1=\operatorname{edim}R$ and $R$ is not regular. [F7, F10, step 2.3]

4.1 Failure of smoothness. If the fibre were geometrically regular at the image of $(u)$, then by the case $K=\kappa((t))=k$ of [F6] the local ring $R$ would be regular; step 3.1 shows it is not, so the fibre is not geometrically regular at that point. Since $F$ is locally of finite presentation (step 2.1) and flat (step 2.2) but its fibre fails geometric regularity, [F5] shows that $F$ is not smooth at the prime $(u)\in\operatorname{Spec}k[u]$. By [F8] $F$ is therefore not étale at $(u)$, and hence neither smooth nor étale; the relative derivative remark in the Statement is the observation that the Jacobian of the presentation $k[t][u]/(u^p-t)$ is $pu^{p-1}=0$ in $k[u]$. [F5, F6, F8, step 3.1] $\square$
