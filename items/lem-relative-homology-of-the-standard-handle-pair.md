---
id: "lem-relative-homology-of-the-standard-handle-pair"
kind: "lemma"
title: "Relative homology of the standard handle pair"
deps: ["def-k-handle-core-cocore-attaching-region-and-belt-sphere", "thm-singular-chain-homotopy-formula", "thm-long-exact-sequence-of-a-pair-in-singular-homology", "cor-homology-of-spheres", "cor-contractible-nonempty-spaces-have-the-homology-of-a-point"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
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
status: published
origin: "pipeline"
proof_strategy: "contraction of pairs and exact sequence"
---

## Statement

For any abelian group $G$, integers $0\le k\le n$, and $i\ge0$, the standard handle pair has $H_i(D^k\times D^{n-k},S^{k-1}\times D^{n-k};G)\cong G$ if $i=k$ and zero otherwise. Here $D^0$ is a point and $S^{-1}=\varnothing$.

## Facts & Assumptions

[F1] [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: For integers $0\le k\le n$, the standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$. Its core is $D^k\times\{0\}$, its cocore is $\{0\}\times D^{n-k}$, its attaching region is $S^{k-1}\times D^{n-k}$, and its attaching sphere is $S^{k-1}\times\{0\}$. The outgoing region is $D^k\times S^{n-k-1}$ and the belt sphere is $\{0\}\times S^{n-k-1}$. Here $D^j$ is the closed unit disk, $D^0$ is a point, and $S^{-1}=\varnothing$. For $n=0$ both boundary regions are empty.

[F2] [[thm-singular-chain-homotopy-formula]]: Let $H:X\times I\to Y$ be a homotopy from $f$ to $g$. Then the prism operator $P_H$ of def-prism-operator-for-a-homotopy satisfies $$g_\#-f_\#=\partial P_H+P_H\partial$$ as homomorphisms $C_n(X;G)\to C_n(Y;G)$ for every $n\geq 1$ and every abelian group $G$. In degree $0$, the same identity reduces to $$g_{\#,0}-f_{\#,0}=\partial P_H:C_0(X;G)\to C_0(Y;G).$$

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]: For $A\subseteq X$ there is an exact sequence $$\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to H_{n-1}(X;G)\to\cdots.$$

[F4] [[cor-homology-of-spheres]]: For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise. For $S^0$, $\widetilde H_0(S^0;G)\cong G$ and all other reduced groups vanish. Thus $H_0(S^n;G)\cong G$ for $n\ge1$, whereas $H_0(S^0;G)\cong G\oplus G$.

[F5] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]: If $X$ is a nonempty contractible topological space, then for every $n\geq 0$ and every abelian group $G$, $$H_n^{\mathrm{sing}}(X;G)\cong H_n^{\mathrm{sing}}(\ast;G),$$ where $\ast$ denotes a one-point space.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The standard pair contracts its second disk factor by $(u,v)\mapsto(u,(1-t)v)$, with projection to and inclusion of $(D^k,S^{k-1})$ as inverse maps up to a homotopy of pairs. The attaching subspace is preserved even when empty. [F1, algebra]

2.1 The prism formula descends to relative chains: prisms of simplices in the subspace remain in the subspace, so their classes vanish in the quotient chain complex. Thus the two maps in the previous step induce inverse homology maps, in degree zero as well as positive degrees. [F2, step 1.1]

3.1 If $k=0$, the reduced pair is $(\ast,\varnothing)$, with homology $G$ in degree zero and zero otherwise. Explicitly the chain complex of a point has one copy of $G$ in each degree, and its boundary is the identity in positive even degrees and zero in odd degrees, so this computation includes arbitrary $G$. Every nonempty disk has that same homology by contractibility. [F5, step 2.1, algebra]

4.1 For $k\ge2$, the pair exact sequence and sphere homology give the only nonzero relative group in degree $k$, isomorphic to $G$; in degrees zero and one the map $H_0(S^{k-1};G)\to H_0(D^k;G)$ is the identity on $G$. For $k=1$, it is $(g,h)\mapsto g+h$ from $G\oplus G$ to $G$, whose kernel is $\{(g,-g)\}$ and whose cokernel is zero. Hence $H_1(D^1,S^0;G)\cong G$ and $H_0=0$. This proves all cases, including $G=0$. [F3, F4, step 3.1, algebra] ∎
