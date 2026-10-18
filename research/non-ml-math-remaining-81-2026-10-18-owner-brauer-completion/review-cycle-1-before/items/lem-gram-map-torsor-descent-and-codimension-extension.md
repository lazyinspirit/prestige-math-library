---
id: lem-gram-map-torsor-descent-and-codimension-extension
kind: lemma
title: Full-rank Gram torsor descent and extension across lower-rank strata
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [lem-symmetric-and-alternating-rank-coordinate-rings, lem-gram-map-fibers-and-rank-strata]
proof_strategy: direct
axiom_use: "No choice principle is used in the stated finite-dimensional descent target."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lakshmibai, Raghavan, Sankaran, and Shukla, Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory, Theorem 2.0.3"
      url: https://www.imsc.res.in/~sankaran/Papers/0604321.pdf
      locator: "PDF pp. 12–14: full-rank orthogonal quotient argument and codimension extension; it uses its imported normality theorem."
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, §4"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 19–22: the tensor-centralizer theorem is deduced after importing the classical FFT/SFT."
---

## Statement

Let $k$ be algebraically closed of characteristic zero, let $V$ have dimension $m\ge1$ with a nondegenerate symmetric form or dimension $m=2n\ge2$ with a nondegenerate alternating form, and let $t\ge m+1$. On the full-rank locus of the rank-$\le m$ Gram variety, the Gram map from spanning tuples in $V^t$ is a principal bundle for the full orthogonal or symplectic group in the étale topology. Its regular invariant functions descend to regular functions on that locus. The omitted rank-$\le m-1$ symmetric stratum has codimension $t-m+1$, and the omitted rank-$\le m-2$ alternating stratum has codimension $2(t-m)+1$. Using normality of the rank varieties, each descended function extends uniquely across the omitted stratum.

## Facts & Assumptions

**Given:** The rank-variety ideal and normality claims required in [[lem-symmetric-and-alternating-rank-coordinate-rings]], and the rank-stratum dimensions in [[lem-gram-map-fibers-and-rank-strata]].

[F1] [[lem-symmetric-and-alternating-rank-coordinate-rings]]: the Gram rank varieties have the stated prime ideals and are normal.

[F2] [[lem-gram-map-fibers-and-rank-strata]]: full-rank Gram fibers are single free group orbits; the symmetric and alternating lower-rank codimensions have the stated formulas.

## Proof

1.1 Put $Y=\operatorname{Spec}R$, where $R$ is the rank ring in [F1], and let $Y^\circ$ denote its rank-$m$ locus. Write $H=Z_{I,I}$ for a principal $m\times m$ block, and work over $\det H\ne0$ (over a Pfaffian open in the alternating case). These opens cover $Y^\circ$: a rank-$m$ bilinear form on $k^t$ induces a nondegenerate form on its quotient by the radical, and some $m$ coordinate vectors form a basis of that quotient. In the block decomposition $Z=\begin{pmatrix}H&C\\ \epsilon C^{\mathsf T}&D\end{pmatrix}$, with $\epsilon=1$ or $-1$, Gaussian elimination gives $D=\epsilon C^{\mathsf T}H^{-1}C$. This identity holds in the localized ring, since it holds at every closed point and [F1] says that ring is reduced. Thus this chart is the product of the space of invertible symmetric or alternating $H$ and the affine space of $C$. A tuple over this chart has an invertible column matrix $T$ on the labels $I$, satisfying $T^{\mathsf T}B T=H$; its remaining columns are $TH^{-1}C$. These formulas are identities over any chart algebra, not only at closed points. [given, F1, F2, algebra]

1.2 We include the normal-extension argument. If $A$ is a noetherian integrally closed domain and $f\in\operatorname{Frac}A$ is regular at every height-one prime, then $f\in A$. To prove this, suppose $J=\{a\in A:af\in A\}$ is proper. It is a nonzero ideal. Choose an associated prime $\mathfrak p$ of $A/J$: one exists by taking an annihilator maximal under inclusion, which is prime by the elementary annihilator test. Thus for some $c$, $(J:c)=\mathfrak p$. In the normal local domain $A_{\mathfrak p}$ the denominator ideal of $x=cf$ is its nonzero maximal ideal $M=\mathfrak pA_{\mathfrak p}$; in particular $x\notin A_{\mathfrak p}$ and $xM\subseteq A_{\mathfrak p}$. If $xM\subseteq M$, choose finite generators of $M$ and express multiplication by $x$ as a matrix over $A_{\mathfrak p}$ on these generators. Its characteristic polynomial annihilates the nonzero ideal $M$ by the adjugate identity, hence annihilates $x$ in the fraction field. This makes $x$ integral, a contradiction to normality. Therefore $xa$ is a unit for some $a\in M$, and for every $b\in M$ the identity $b=a(bx)/(ax)$ shows $M=aA_{\mathfrak p}$. A noetherian local domain with a nonzero principal maximal ideal has dimension one: the principal ideal theorem bounds its height by one. Thus $\operatorname{ht}\mathfrak p=1$, contradicting the assumed regularity of $f$ there. This proves the claim. Consequently a regular function on an open subset whose complement has codimension at least two extends to $\operatorname{Spec}A$: view it as a rational function on the dense open and apply the claim to all height-one local rings. The extension is unique because $A$ is a domain. [F1, algebra]

2.1 Here is a cover on which such a $T$ exists regularly. A nondegenerate symmetric $H$ has a vector of nonzero norm among $e_i$ and $e_i+e_j$: if all these norms vanish, polarization makes every entry zero. Cover by the corresponding norm-unit opens, split off that vector by subtracting its $H$-orthogonal projections, and repeat on the complement. This diagonalizes $H$ over a finite Zariski cover as $Q^{\mathsf T}HQ=\operatorname{diag}(d_1,\ldots,d_m)$ with each $d_i$ a unit. Adjoin $u_i$ with $u_i^2=d_i$. Each extension is finite free of rank two and étale because $2u_i$ is a unit; their composite is faithfully flat. Fixing a constant isometry of $B$ with the identity form, the matrix $\operatorname{diag}(u_i)Q^{-1}$, transported by that isometry, is the required $T$. In the alternating case choose a unit entry $h_{ij}$, rescale one of the corresponding vectors so their pairing is one, subtract projections onto this symplectic plane, and induct. This gives a regular symplectic basis on a Zariski cover, and hence a $T$ without adjoining square roots. There are finitely many pivot choices, and their opens cover because every residue form is nondegenerate. [step 1.1, construct, induction]

3.1 On any of these covers let $S$ be the section given by $T$ and $TH^{-1}C$. Every spanning tuple $X$ with Gram matrix $Z$ has unique $g=X_I T^{-1}$ and $g^{\mathsf T}Bg=B$. Conversely $gS$ is a tuple with Gram matrix $Z$. These formulas and their inverses are regular over every base algebra, so $X^\circ\times_{Y^\circ}U\simeq G\times U$ over each chosen étale cover $U$. They also identify $G\times X^\circ$ with $X^\circ\times_{Y^\circ}X^\circ$ via $(g,X)\mapsto(gX,X)$; the inverse uses the same invertible block formula. This establishes the scheme-theoretic torsor assertion. In particular the projection is faithfully flat locally and therefore globally. [step 2.1, algebra]

4.1 We spell out function descent. For a faithfully flat ring map $A\to C$, the sequence $0\to A\to C\rightrightarrows C\otimes_A C$ is an equalizer. Indeed tensor its difference complex with $C$; multiplication of the initial two $C$ factors gives a contracting map, so the tensored complex is exact. Flatness preserves kernels and faithful flatness detects a zero homology module, proving the original equalizer assertion. On a trivial torsor $G\times U$, a left-translation-invariant function equals its value along the identity section: apply the counit on the translation factor to the coaction identity. Hence an invariant regular function on $X^\circ$ restricts on each $U$ to the pullback of a unique regular function on $U$. On overlaps the two functions pull back to the same function on the torsor, so faithful flatness and the equalizer just proved identify them and descend them to $Y^\circ$. Equivalently, the torsor isomorphism in step 3.1 identifies its invariance equation with equality of its two pullbacks to $X^\circ\times_{Y^\circ}X^\circ$. Applying the affine equalizer on the stated covers and gluing proves both existence and uniqueness of descent. [step 3.1, algebra]

5.1 The dimension formulas in [F2] give, for symmetric matrices, $d_m-d_{m-1}=t-m+1$ and, for alternating matrices, $d_m-d_{m-2}=2(t-m)+1$. All lower strata have smaller dimensions, so these are the codimensions of the respective omitted closed loci. Since $t\ge m+1$, the codimensions are at least two and three, respectively. Apply step 1.2 to the normal domain in [F1] and the descended function from step 4.1. This proves the asserted unique extension. [F1, F2, step 4.1, step 1.2, algebra] ∎
