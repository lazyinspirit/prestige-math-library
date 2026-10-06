---
id: lem-length-increasing-hecke-products
kind: lemma
title: "Length-additive products in the finite Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - prop-cardinality-of-a-finite-bruhat-cell
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
  - def-weyl-group-and-length-for-finite-gl-n
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Equation (11.1), printed p. 46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Proposition 2.3, first case, PDF p. 4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - The first relation for $\\bar T_s\\bar T_w$, printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with Borel $B$, let $H=e_B\mathbb C[G]e_B$ be the finite Hecke algebra with
standard basis $T_w$, $w\in S_n$, and let $\ell$ be the inversion length on
$S_n$ ([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]],
[[def-weyl-group-and-length-for-finite-gl-n]]). Then for all $u,v\in S_n$ with
$\ell(uv)=\ell(u)+\ell(v)$ one has
$$T_uT_v=T_{uv}.$$
In particular $T_wT_{s_i}=T_{ws_i}$ whenever $\ell(ws_i)=\ell(w)+1$, and by
induction on a reduced expression
$T_w=T_{s_{i_1}}\cdots T_{s_{i_\ell}}$ for every reduced word
$w=s_{i_1}\cdots s_{i_\ell}$. The same statement holds with the product in the
other order, $T_vT_u=T_{vu}$ when $\ell(vu)=\ell(v)+\ell(u)$. No choice
principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$, the Hecke algebra
$H=e_B\mathbb C[G]e_B$, the standard basis $T_w$ and $u,v,w\in S_n$ with
inversion length $\ell$. Write $\dot w\in G$ for the permutation matrix of $w$
and $B\dot wB$ for the corresponding Bruhat cell.

[F1] For every $w$ one has
$T_w=q^{\ell(w)}e_B\dot we_B=|B|^{-1}\sum_{x\in B\dot wB}x$, these elements
form a $\mathbb C$-basis of $H$, and $T_1=e_B$ is the unit
([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]).

[F2] For every $w$ the cell has $|B\dot wB|/|B|=q^{\ell(w)}$, so
$|B\dot wB|=|B|\,q^{\ell(w)}$
([[prop-cardinality-of-a-finite-bruhat-cell]]).

[F3] The Bruhat cells partition $G$:
$G=\bigsqcup_{w\in S_n}B\dot wB$, and
$B\dot wB=B\dot wB\cdot B=B\cdot B\dot wB$ is stable under left and right
multiplication by $B$
([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

[F4] The permutation matrices multiply by composition of permutations,
$P_\sigma P_\tau=P_{\sigma\tau}$
([[def-weyl-group-and-length-for-finite-gl-n]]).

[F5] Inversion length is defined by
$\ell(\sigma)=\#\operatorname{Inv}(\sigma)$ with
$\operatorname{Inv}(\sigma)=\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}$, and
$\ell(w_{s_i})=1$ for a simple transposition
([[def-weyl-group-and-length-for-finite-gl-n]]).



## Proof

**Proof technique:** direct.

1.1 Fix $u,v\in S_n$ with $\ell(uv)=\ell(u)+\ell(v)$ and consider the multiplication map $\mu:B\dot uB\times B\dot vB\to G$, $\mu(x,y)=xy$, together with the right-and-left action $b\cdot(x,y):=(xb^{-1},by)$ of $B$. Each $B\dot wB$ is stable under right and under left multiplication by $B$ by [F3], so the action stays inside the source; it is free because $xb^{-1}=x$ forces $b=1$; and $\mu$ is invariant because $xb^{-1}\cdot by=xy$. Hence $\mu$ factors through the set of $B$-orbits, whose cardinality is $|B\dot uB|\,|B\dot vB|/|B|=|B|\,q^{\ell(u)+\ell(v)}=|B|\,q^{\ell(uv)}=|B\dot u\dot vB|$ by [F2] and the hypothesis. The product set $(B\dot uB)(B\dot vB)$ contains $\dot u\dot v$ and is stable under left and right multiplication by $B$, since $(B\dot uB)(B\dot vB)=B\dot uB\dot vB$ and $B\cdot B\dot uB\dot vB\cdot B=B\dot uB\dot vB$; being a $B$-bi-invariant subset of $G$, it is a union of Bruhat cells by [F3], so it contains $B\dot u\dot vB$ and has at least $|B\dot u\dot vB|$ elements. Since it is the image of $\mu$, whose orbit set has exactly $|B\dot u\dot vB|$ elements, the image equals $B\dot u\dot vB$ and the orbit set maps bijectively onto it. [F2, F3, algebra]

1.2 Inversion length is subadditive, $\ell(\sigma\tau)\le\ell(\sigma)+\ell(\tau)$ for all $\sigma,\tau\in S_n$: if $(i,j)\in\operatorname{Inv}(\sigma\tau)$ with $i<j$ and $\tau(i)>\tau(j)$, then $(i,j)\in\operatorname{Inv}(\tau)$; otherwise $\tau(i)<\tau(j)$ and $\sigma(\tau(i))>(\sigma\tau)(j)=\sigma(\tau(j))$, so $(i,j)\in\tau^{-1}(\operatorname{Inv}(\sigma))$. Hence $\operatorname{Inv}(\sigma\tau)\subseteq\operatorname{Inv}(\tau)\cup\tau^{-1}(\operatorname{Inv}(\sigma))$, and taking cardinalities, with $|\tau^{-1}(\operatorname{Inv}(\sigma))|=|\operatorname{Inv}(\sigma)|$ because $\tau$ is a bijection, gives the inequality. Consequently, if $w=s_{i_1}\cdots s_{i_\ell}$ is a reduced word, meaning $\ell(w)=\ell$, then every partial product $p_j:=s_{i_1}\cdots s_{i_j}$ has $\ell(p_j)=j$: subadditivity gives $\ell(p_j)\le j$ and $\ell(p_j^{-1}w)\le\ell-j$ because each of these is a product of $j$ respectively $\ell-j$ simple transpositions of length $1$ by [F5], and that $p_j^{-1}w=s_{i_{j+1}}\cdots s_{i_\ell}$ (the inverse partial product cancels the initial letters), so $\ell=\ell(w)\le\ell(p_j)+\ell(p_j^{-1}w)\le\ell(p_j)+(\ell-j)$ forces $\ell(p_j)\ge j$. [F5, algebra]

2.1 By step 1.1 the fibers of $\mu$ are unions of free $B$-orbits and there are exactly $|B\dot u\dot vB|$ orbits, one over each element of $B\dot u\dot vB$; a free orbit has cardinality $|B|$, so every $z\in B\dot u\dot vB$ has exactly $|B|$ preimages and $\sum_{x\in B\dot uB,\,y\in B\dot vB}xy=|B|\sum_{z\in B\dot u\dot vB}z$. Therefore, using [F1], $$T_uT_v=\frac{1}{|B|^2}\sum_{x,y}xy=\frac{1}{|B|}\sum_{z\in B\dot u\dot vB}z=T_{uv},$$ which is the asserted identity. [F1, step 1.1, algebra]

3.1 Taking $v=s_i$ a simple transposition with $\ell(ws_i)=\ell(w)+1$ gives $T_wT_{s_i}=T_{ws_i}$ by step 2.1, and iterating along the factors of a reduced word $w=s_{i_1}\cdots s_{i_\ell}$ (each partial product has length $j$ by step 1.2, so the length hypothesis holds at every step) proves $T_w=T_{s_{i_1}}\cdots T_{s_{i_\ell}}$ by induction on $\ell$. Applying step 2.1 with the ordered pair $(v,u)$ in place of $(u,v)$, whose hypothesis is exactly $\ell(vu)=\ell(v)+\ell(u)$, gives $T_vT_u=T_{vu}$, and $\dot v\dot u=\dot{vu}$ by the multiplicativity in [F4] identifies the cell indexed by $vu$. [F4, step 1.2, step 2.1, algebra]

4.1 Step 2.1 is the asserted identity $T_uT_v=T_{uv}$ for length-additive products, and steps 1.2 and 3.1 derive the simple-reflection case, the reduced-word formula and the reversed-order statement; the argument uses only finite sets, the explicit permutation matrices $\dot w$ and the fixed idempotent $e_B$, so no choice principle is used. [step 1.2, step 2.1, step 3.1] ∎ 