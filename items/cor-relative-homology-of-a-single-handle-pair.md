---
id: "cor-relative-homology-of-a-single-handle-pair"
kind: "corollary"
title: "Relative homology of a single handle pair"
deps: ["thm-one-critical-point-handle-attachment", "lem-relative-homology-of-the-standard-handle-pair", "thm-collar-neighborhood-theorem", "thm-excision-for-singular-homology", "thm-singular-chain-homotopy-formula"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: "draft"
origin: "pipeline"
proof_strategy: "collar excision"
---

## Statement

Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses, with critical index $k$. For every abelian group $G$ and $i\ge0$, $H_i(M^b,M^a;G)\cong G$ if $i=k$ and zero otherwise. In particular this holds for the additive group of any coefficient ring. No orientation of $M$ is needed.

## Facts & Assumptions

[F1] [[thm-one-critical-point-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

[F2] [[lem-relative-homology-of-the-standard-handle-pair]]: For any abelian group $G$, integers $0\le k\le n$, and $i\ge0$, the standard handle pair has $H_i(D^k\times D^{n-k},S^{k-1}\times D^{n-k};G)\cong G$ if $i=k$ and zero otherwise. Here $D^0$ is a point and $S^{-1}=\varnothing$.

[F3] [[thm-collar-neighborhood-theorem]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

[F4] [[thm-excision-for-singular-homology]]: If $Z\subseteq X$ and $\overline Z\subseteq\operatorname{int}_X(A)$, then inclusion $(X-Z,A-Z)\to(X,A)$ induces isomorphisms $H_n(X-Z,A-Z;G)\cong H_n(X,A;G)$ for every $n$.

[F5] [[thm-singular-chain-homotopy-formula]]: Let $H:X\times I\to Y$ be a homotopy from $f$ to $g$. Then the prism operator $P_H$ of def-prism-operator-for-a-homotopy satisfies $$g_\#-f_\#=\partial P_H+P_H\partial$$ as homomorphisms $C_n(X;G)\to C_n(Y;G)$ for every $n\geq 1$ and every abelian group $G$. In degree $0$, the same identity reduces to $$g_{\#,0}-f_{\#,0}=\partial P_H:C_0(X;G)\to C_0(Y;G).$$

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Use the smooth handle description and its lower-collar comparison to replace the sublevel pair, up to homotopy of pairs, by $(Y,A)$, where $Y=A\cup_h(D^k\times D^{n-k})$ before rounding. Undoing the local rounding is a homeomorphism with the chosen collared model. Collar compression identifies the lower sublevel inclusions as in the theorem. The prism identity on quotient chains makes these pair homotopies induce homology isomorphisms. [F1, F3, F5]

2.1 For $k>0$, put $r=|u|$ in the handle and choose $0<r_0<R<1$. Let $A^{\prime}=A\cup_h\{r>r_0\}$. This is open in $Y$ and contains the closed set $A$: near its attaching seam it contains a whole handle collar, while outside the seam the ambient space is locally just $A$. The radial collar homotopy sends $r$ to $(1-t)r+t$ and fixes $A$, so $A^{\prime}$ retracts to $A$. In the exact quotient-chain sequence for $A\subset A^{\prime}\subset Y$, the relative complex $C_*(A^{\prime},A;G)$ is acyclic by this retraction. Consequently the quotient map induces a homology isomorphism: lift a cycle in $C_*(Y,A^{\prime};G)$; its boundary in the acyclic kernel can be filled there and subtracted to obtain a cycle lift. If a lifted cycle bounds in the quotient, lift a bounding chain and fill the remaining cycle in the kernel. This proves surjectivity and injectivity, including degree zero. [F5, step 1.1, algebra]

3.1 Excise $Z=A$, since $\overline Z=A\subset\operatorname{int}_Y(A^{\prime})=A^{\prime}$. The remaining pair is $(\{r<1\}\times D^{n-k},\{r_0<r<1\}\times D^{n-k})$. Truncate radii at $R$ by $r\mapsto\min(r,R)$; its straight radial homotopy preserves the annular subspace. Next the radial map $r\mapsto\min(R,Rr/r_0)$ sends the annular subspace to the sphere of radius $R$. Its homotopy to the identity preserves that annulus; on the sphere it is the identity. These maps exhibit a homotopy equivalence of pairs with $(D_R^k\times D^{n-k},S_R^{k-1}\times D^{n-k})$. Rescale $R$ to one. [F4, F5, step 2.1, algebra]

4.1 The standard-handle calculation now applies. If $k=0$, the attachment is disjoint; every singular simplex, being connected, lies in one summand, and the relative chains are exactly those of $D^n$. Their homology is the same standard-pair result with empty attaching subspace. The constructions preserve degree zero and work for $G=0$, $k=1$, $k=n$ and $n=0$ without any ambient orientation. [F2, step 3.1, algebra] ∎
