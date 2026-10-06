---
id: lem-handle-slides-act-by-elementary-basis-change-on-handle-chains
kind: lemma
title: "Handle slides act by elementary basis change on handle chains"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps: [def-handle-slide-of-one-k-handle-over-another, lem-handle-slides-preserve-the-relative-diffeomorphism-type, lem-a-handle-decomposition-gives-a-relative-cw-complex, thm-relative-homology-of-consecutive-cw-skeleta, cor-relative-homology-of-a-single-handle-pair, def-countable-choice, thm-singular-chain-homotopy-formula, thm-global-sphere-degree-is-the-sum-of-local-degrees]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.5 and its closing bookkeeping sentence, §5.4, printed pp. 147-148 (the classes of the handles become ξ, η + εξ)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Ch. 1 §§1.1-1.2, printed pp. 4-9 (handle chain complex and elementary basis changes)"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ have a handle presentation in which all handles of index $\le k-1$ precede the $k$-handles, and let $h_1,h_2$ be two $k$-handles with a slide datum. Then the relative homology group $H_k(W^k,W^{k-1};\mathbb Z)$ is free with basis the relative fundamental classes $[C_j]$ of the handle cores, and, under the relative-homology comparison given by the disk-push slide diffeomorphism together with its specified lower-stage homotopy, the core $C_1'$ of the slid handle satisfies $[C_1']=[C_1]\pm[C_2]$; the sign is determined by the orientations of the framings and the slide path. The lower-stage homotopy is part of this comparison: a diffeomorphism relative only to the incoming boundary need not map the lower stage to itself. With respect to the handle basis, a slide therefore acts on the $k$-th handle chain group by the elementary basis change $e_1\mapsto e_1\pm e_2$ (and correspondingly for the slid second handle).

## Facts & Assumptions

**Given:** A handle presentation in which all handles of index $\le k-1$ precede the $k$-handles, two $k$-handles $h_1,h_2$ with a slide datum, and the slid handle $h_1'$ with core $C_1'$.

[F1] [[lem-a-handle-decomposition-gives-a-relative-cw-complex]] and [[thm-relative-homology-of-consecutive-cw-skeleta]]: assume $\mathrm{AC}_\omega$; a finite handle decomposition relative to $M_0$ gives a finite relative CW pair with one relative $k$-cell per $k$-handle, and for every abelian group $G$, $H_i(X^k,X^{k-1};G)$ is zero for $i\ne k$ and is $\bigoplus_{\text{cells }e^k_\alpha}G$ for $i=k$.

[F2] The normal-disk contraction identifies a handle pair $(D^k\times D^{n-k},S^{k-1}\times D^{n-k})$ with $(D^k,S^{k-1})$ up to homotopy of pairs. In the relative cell computation of [F1] the oriented core is therefore the generator of its summand. [[cor-relative-homology-of-a-single-handle-pair]] records the corresponding Morse-band version; no Morse-band hypothesis is imposed on the arbitrary presentation here.

[F3] [[def-handle-slide-of-one-k-handle-over-another]] specifies the signed framed attaching-sphere band sum. The disk-push isotopy of the full attaching region in [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]], proof steps 2.1–3.1, takes place in the outgoing boundary after attaching the second handle. Its isotopy extension in step 4.1 gives the slide diffeomorphism. No core comparison or preservation of the lower stage is being quoted; these are addressed below.

[F4] [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; a slide does not change the relative diffeomorphism type of the presented manifold.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through [F1] and [F4].

[F6] [[thm-singular-chain-homotopy-formula]]: for a homotopy $H$ from $f$ to $g$, its prism operator satisfies $g_\#-f_\#=\partial P_H+P_H\partial$, including degree zero.

[F7] [[thm-global-sphere-degree-is-the-sum-of-local-degrees]]: a continuous map of oriented $k$-spheres, $k\ge1$, with a finite fibre has degree equal to the sum of its local degrees.

## Proof

**Proof technique:** direct.

1.1 By [F1] the handle filtration gives a relative CW pair with one relative $k$-cell for each $k$-handle, so the relative homology group $H_k(W^k,W^{k-1};\mathbb Z)$ is free with one generator per $k$-handle; by [F2] the relative fundamental classes $[C_j]$ of the handle cores form a basis. [F1, F2, F5, given]

2.1 Put $A=W^{k-1}$ and first attach $h_2$. Use the disk-push construction of [F3] in $B=A\cup h_2$. Denote its ambient extension by $K_t$, with $K_0=\operatorname{id}$ and $K_1f_1=f_1'$. Choose its support near the parallel core disk and band, off the original second core and the other core attachments; untouched handles may be attached afterwards with their data transported. The resulting diffeomorphism $G:T'\to T$ from the new $k$-stage to the old one is $K_1^{-1}$ on $B$ and the identity in the slid handle's product coordinates. It carries the new first core to the old first core, but generally does not carry $A$ to itself. The homotopy $H_t(a)=K_tK_1^{-1}(a)$, $a\in A$, lies in $B\subset T$, starts at $G|_A$ and ends at the inclusion of $A$. On the boundary of the new first core it is exactly the attaching-sphere disk push $K_tf_1$. [F3, F4, step 1.1, construct]

3.1 Define the relative comparison explicitly. For a relative cycle $z\in C_k(T')$ with $\partial z=a\in C_{k-1}(A)$, use the class of $G_\#z+P_Ha$ in $H_k(T,A)$. Its boundary is $a$, by [F6]. If the representative changes by $\partial b+c$, $c\in C_k(A)$, the image changes by $\partial(G_\#b-P_Hc)+c$, again by [F6]; hence this is a well-defined homomorphism. This construction includes the specified lower-stage homotopy and does not assert that the bare diffeomorphism is a map of these pairs. [F6, step 2.1, algebra, construct]

4.1 For the new first core, $G_\#z$ is the old first core chain. The correction $P_H\partial z$ is the oriented $k$-dimensional trace of its attaching-sphere patch crossing the parallel core disk of $h_2$. It contributes $\varepsilon[C_2]$, $\varepsilon\in\{1,-1\}$: collapse $A$ and the other handles and project $h_2=D^k\times D^{n-k}$ to $D^k/S^{k-1}$. In the disk-push strip the moving patch has coordinates $(2t b(y),y)$, with $b=1$ near the centre. The central point of the parallel disk is crossed once, and the derivative there in $(t,y)$ has determinant $\pm2$ according to the chosen orientations. The rest of the trace is in the band collar or in the radial return away from the belt sphere and has no further preimage of that point. Cap the two boundary spheres of the trace cylinder by disks mapped to the quotient basepoint; this gives a continuous map $S^k\to S^k$ with that unique preimage. The invertible local coordinate map has local degree $\varepsilon$, so [F7] makes its degree, and hence the trace coefficient, $\varepsilon$. The support misses every other core attachment, so their coefficients in this trace are zero. A parallel disk has the same generator as $C_2$ by the normal-product contraction of [F2]. This proves that the comparison sends $[C_1']$ to $[C_1]+\varepsilon[C_2]$. For $k=1$ the moving foot traces an interval across the parallel interval core once and the other foot is fixed; this is the same degree computation, using the degree-zero prism formula in [F6]. [F2, F3, F6, F7, step 1.1, step 2.1, step 3.1, construct]

5.1 The second core and all other core classes are unchanged by this comparison: the diffeomorphism and boundary homotopy can be chosen fixed there, so their prism corrections lie in $A$. Thus its matrix in the bases of step 1.1 is $e_1'\mapsto e_1+\varepsilon e_2$, $e_j'\mapsto e_j$ for $j\ne1$. This matrix is invertible, with inverse subtracting $\varepsilon e_2$ from the first generator; the relative comparison is an isomorphism and gives precisely the asserted elementary basis change. Exchanging the two handles gives the analogous formula for a slide of the second. [F6, step 1.1, step 3.1, step 4.1, algebra]

6.1 By [F4] the two total presentations are relatively diffeomorphic. Together with the explicit relative comparison of steps 2.1–5.1, this identifies the slide as a change of the handle-chain basis, with its usual corresponding change of boundary coordinates. Neither a boundary connected sum description of the actual diffeomorphism image nor strict lower-stage preservation was assumed. [F4, step 2.1, step 3.1, step 4.1, step 5.1, given] ∎
