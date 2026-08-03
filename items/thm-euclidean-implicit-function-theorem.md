---
id: thm-euclidean-implicit-function-theorem
kind: theorem
title: "The Euclidean implicit function theorem with derivative formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, def-total-derivative-in-euclidean-space, thm-euclidean-inverse-function-theorem, thm-algebra-of-total-derivatives, thm-chain-rule-for-total-derivatives, lem-euclidean-linear-maps-have-matrices-and-are-bounded]
justified_by: []
aliases: [implicit-function-theorem-euclidean]
landmark: true
proof_strategy: reduction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
pipeline_run: null
---

## Statement

Let $m,n\ge1$, let $U\subseteq\mathbb R^{m+n}$ be open, and let
$F:U\to\mathbb R^n$ be $C^1$.  Suppose $(a,b)\in U$, $F(a,b)=0$, and the
**partial derivative in the second block**

$$D_yF(a,b):\mathbb R^n\to\mathbb R^n,\qquad D_yF(a,b)v:=DF(a,b)(0,v),$$

is invertible.  Put similarly $D_xF(a,b)u:=DF(a,b)(u,0)$.  Then there are open
neighbourhoods $P$ of $a$ and $Q$ of $b$, and a unique $C^1$ map
$\varphi:P\to Q$, such that

$$F(x,y)=0\quad\Longleftrightarrow\quad y=\varphi(x)\qquad((x,y)\in P\times Q).$$

After shrinking $P,Q$ if necessary, $D_yF(x,\varphi(x))$ is invertible and

$$D\varphi(x)=-D_yF(x,\varphi(x))^{-1}D_xF(x,\varphi(x)).$$

## Facts & Assumptions

**Given:** The dimensions, $C^1$ map, base point, zero equation, and invertible second-block derivative in the statement.

[L1] A $C^1$ map with invertible derivative has a local $C^1$ inverse $G$, with $DG(z)=DH(G(z))^{-1}$ throughout its inverse neighbourhood ([[thm-euclidean-inverse-function-theorem]]).

[L2] Total differentiability is a linear approximation with an $o(\lVert h\rVert_2)$ remainder, and total derivatives obey the algebra and chain rules ([[def-total-derivative-in-euclidean-space]], [[thm-algebra-of-total-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[L3] Euclidean linear maps have their finite matrix descriptions ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]), and invertibility means having a two-sided linear inverse ([[def-invertible-euclidean-linear-map]]).

## Proof

**Proof technique:** reduction.

1.1 Define $H:U\to\mathbb R^{m+n}$ by $H(x,y):=(x,F(x,y))$. From [L2], the remainder after the linear map $(u,v)\mapsto(u,DF(x,y)(u,v))$ is $(0,r(u,v))$, so $H$ is differentiable with $$DH(x,y)(u,v)=(u,D_xF(x,y)u+D_yF(x,y)v).$$ Its matrix entries are continuous because those of $DF$ are, so $H$ is $C^1$. If $B:=D_yF(a,b)^{-1}$, the displayed derivative at $(a,b)$ has the two-sided inverse $(r,s)\mapsto(r,B(s-D_xF(a,b)r))$. Thus $DH(a,b)$ is invertible. [L2, L3, given, algebra]

2.1 Apply [L1] to $H$.  It has a $C^1$ inverse $G$ between neighbourhoods of $(a,b)$ and $(a,0)$.  Because the first component of $H$ is $x$, the identity $H(G(x,z))=(x,z)$ forces $G(x,z)=(x,\psi(x,z))$.  Define $\varphi(x):=\psi(x,0)$ after shrinking to product neighbourhoods $P,Q$. [step 1.1, L1]

3.1 For $(x,y)\in P\times Q$, the local injectivity of $H$ gives $F(x,y)=0\iff H(x,y)=(x,0)\iff (x,y)=G(x,0) \iff y=\varphi(x)$. This proves existence and local uniqueness; $\varphi$ is $C^1$ as a component of $G$.  [step 2.1]

4.1 Differentiate $F(x,\varphi(x))=0$. By [L2], $D_xF(x,\varphi(x))+D_yF(x,\varphi(x))D\varphi(x)=0$. For $(x,\varphi(x))=G(x,0)$, the derivative formula in [L1] makes $DH(x,\varphi(x))$ invertible. The block formula of step 1.1 then makes $D_yF(x,\varphi(x))$ invertible: solving $DH(u,v)=(0,s)$ gives $u=0$ and $D_yFv=s$. Multiplication by its inverse yields the asserted formula. [step 1.1, step 2.1, step 3.1, L1, L2, L3]

5.1 Steps 1.1--4.1 prove all local existence, uniqueness, regularity, and derivative claims.  [step 1.1, step 2.1, step 3.1, step 4.1] ∎
