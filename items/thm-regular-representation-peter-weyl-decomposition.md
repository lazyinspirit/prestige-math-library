---
id: thm-regular-representation-peter-weyl-decomposition
kind: theorem
title: Peter-Weyl decomposition of the regular representation
deps:
- thm-l2-peter-weyl-orthonormal-basis
- def-hilbert-direct-sum-of-unitary-representations
- def-left-and-right-regular-unitary-representations
- thm-regular-representations-are-unitary-and-strongly-continuous
- prop-compact-discrete-and-abelian-groups-are-unimodular
- def-matrix-coefficient-of-a-unitary-representation
- thm-schur-orthogonality-for-compact-groups
- def-normalized-irreducible-matrix-coefficient-basis
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-dimension
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-11.md
      - research/frontier-38-owner-30-dispatch/reader-reader-11.result.json
      - research/frontier-38-owner-30-step5-hash-11-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-11-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Theorem 5.4.1 and the discussion (5.20), printed pp. 230–233
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: Theorem 2.13 and Proposition 2.11, printed pp. 8–11
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §19.7, printed p. 43 ($L^2(G)$ is the Hilbert sum of $\operatorname{End}(V)$)
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$ and let $\lambda,\rho$ be the left and right regular unitary representations of $K$ on $L^2(K,\mu;\mathbb C)$ ([[def-left-and-right-regular-unitary-representations]]; $K$ is unimodular so $\Delta_K\equiv1$). For $\pi\in\widehat K$ let $M_\pi\subseteq C(K)$ be the span of all matrix coefficients of $\pi$ ([[def-matrix-coefficient-of-a-unitary-representation]]). For the fixed representative $\pi$ of its class, with fixed orthonormal basis $e^\pi_1,\dots,e^\pi_{d_\pi}$, let $J_\pi:H_\pi\to H_\pi$ be the coordinate conjugation $J_\pi\bigl(\sum_ia_ie^\pi_i\bigr)=\sum_i\overline{a_i}e^\pi_i$, and define the **conjugate representation** $\overline\pi(k):=J_\pi\pi(k)J_\pi$. Then:

1. $M_\pi$ is finite dimensional of dimension $d_\pi^2$ and is the closed span of the block $\{u^\pi_{ij}\}_{i,j}$ of [[def-normalized-irreducible-matrix-coefficient-basis]]; distinct $M_\pi,M_\sigma$ are orthogonal, and $L^2(K)=\widehat\bigoplus_{\pi\in\widehat K}M_\pi$ ([[def-hilbert-direct-sum-of-unitary-representations]]).
2. The two-sided action on coefficients is $\rho(g)c^\pi_{v,w}=c^\pi_{\pi(g)v,w}$ and $\lambda(g)c^\pi_{v,w}=c^\pi_{v,\pi(g)w}$ for all $g\in K$ and $v,w$. Consequently $\rho|_{M_\pi}\cong d_\pi\,\pi$ and $\lambda|_{M_\pi}\cong d_\pi\,\overline\pi$ as unitary representations.
3. Hence $\rho\cong\widehat\bigoplus_{\pi\in\widehat K}d_\pi\,\pi$ and $\lambda\cong\widehat\bigoplus_{\pi\in\widehat K}d_\pi\,\overline\pi$; the assignment $\pi\mapsto\overline\pi$ induces a bijection of $\widehat K$ with $d_{\overline\pi}=d_\pi$, so also $\lambda\cong\widehat\bigoplus_{\pi\in\widehat K}d_\pi\,\pi$: the left regular representation is the Hilbert direct sum of $d_\pi$ copies of $\pi$, and on each coefficient block the right action is on the input-vector factor $H_\pi$, while the left action is on its conjugate factor.

## Facts & Assumptions

[F1] The normalized family $\mathcal B=(u^\pi_{ij})$ is an orthonormal basis of $L^2(K)$, with $u^\pi_{ij}=\sqrt{d_\pi}\,c^\pi_{e^\pi_i,e^\pi_j}$ and $c^\pi_{v,w}(k)=\langle\pi(k)v,w\rangle$; the conjugates of the coefficients of a single class satisfy the orthogonality relations of the next fact. ([[thm-l2-peter-weyl-orthonormal-basis]], [[def-normalized-irreducible-matrix-coefficient-basis]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F2] Schur orthogonality for compact groups: $c^\pi_{v,w}$ and $c^\sigma_{v',w'}$ are orthogonal in $L^2(K)$ when $\pi,\sigma$ are inequivalent irreducibles, and $\int_Kc^\pi_{v,w}\overline{c^\pi_{v',w'}}\,d\mu=d_\pi^{-1}\langle v,v'\rangle\overline{\langle w,w'\rangle}$ for one class. ([[thm-schur-orthogonality-for-compact-groups]])

[F3] The left and right regular representations are $\lambda(g)h(x)=h(g^{-1}x)$ and $\rho(g)h(x)=h(xg)$ on $L^2(K)$ (unimodularity removes the modular factor), and both are strongly continuous unitary representations. ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]], [[prop-compact-discrete-and-abelian-groups-are-unimodular]])

[F4] If a Hilbert space is the orthogonal Hilbert direct sum of closed invariant subspaces on which the restrictions are unitarily equivalent to given representations, then the whole representation is the Hilbert direct sum of those subrepresentations; equivalently, $\rho|_{M_\pi}\cong d_\pi\pi$ on each block gives $\rho\cong\widehat\bigoplus_\pi d_\pi\pi$. ([[def-hilbert-direct-sum-of-unitary-representations]])

[F5] Dimension is additive over direct sums and equal for a vector space and its image under a linear isomorphism. ([[def-dimension]], [[def-hilbert-direct-sum-of-unitary-representations]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, its unitary dual $\widehat K$ with fixed representatives and orthonormal bases, and the two regular representations $\lambda,\rho$.

1.1 For a class $\pi$ of dimension $d_\pi$, the $d_\pi^2$ functions $c^\pi_{e_i,e_j}$ are linearly independent: if $\sum_{i,j}\lambda_{ij}c^\pi_{e_i,e_j}=0$, then by [F2] its squared $L^2$ norm is $\sum_{i,j}|\lambda_{ij}|^2/d_\pi$, which must vanish, so every $\lambda_{ij}=0$; hence $M_\pi=\operatorname{span}\{c^\pi_{e_i,e_j}:i,j\}$ has dimension $d_\pi^2$, and because $u^\pi_{ij}=\sqrt{d_\pi}c^\pi_{e_i,e_j}$ it is also the span of the block $\{u^\pi_{ij}\}_{i,j}$; for inequivalent classes the coefficients are pairwise orthogonal by [F2], so $M_\pi\perp M_\sigma$. The closed span of $\bigcup_\pi M_\pi$ contains every $u^\pi_{ij}$ and hence the closed span of the Hilbert basis $\mathcal B$, which is $L^2(K)$ by [F1]; therefore $L^2(K)=\widehat\bigoplus_{\pi\in\widehat K}M_\pi$ is an orthogonal Hilbert-space direct sum of these blocks. [F1, F2, F5]

2.1 For all $g\in K$ and $v,w\in H_\pi$, [F3] gives $\rho(g)c^\pi_{v,w}(x)=c^\pi_{v,w}(xg)=\langle\pi(x)\pi(g)v,w\rangle=c^\pi_{\pi(g)v,w}(x)$ and $\lambda(g)c^\pi_{v,w}(x)=c^\pi_{v,w}(g^{-1}x)=\langle\pi(g^{-1}x)v,w\rangle=\langle\pi(x)v,\pi(g)w\rangle=c^\pi_{v,\pi(g)w}(x)$, which are the stated action formulas. Fix the orthonormal basis $e_1,\dots,e_d$ of $H_\pi$ and put $H_j:=\operatorname{span}_i\{c^\pi_{e_i,e_j}\}$; each $H_j$ has dimension $d$ by the linear independence in step 1.1, satisfies $\rho(g)H_j\subseteq H_j$ by the first formula, and is the image of $H_\pi$ under the linear map $V_j(v):=c^\pi_{v,e_j}$ with $\rho(g)V_j=V_j\pi(g)$; since $\|c^\pi_{v,e_j}\|_2^2=d^{-1}\|v\|^2$ by [F2], $\sqrt d\,V_j$ is a unitary intertwiner $H_\pi\to H_j$. The sum $\sum_jH_j$ equals $M_\pi$ and $\sum_j\dim H_j=d^2=\dim M_\pi$, and [F2] makes distinct $H_j$ orthogonal, so $M_\pi=\bigoplus_{j=1}^dH_j$ is an orthogonal direct sum, and $\rho|_{M_\pi}\cong d_\pi\,\pi$ by [F4]. [F1, F2, F3, F4, step 1.1]

3.1 On the same basis define the coordinate conjugation $J_\pi(\sum_ia_ie_i)=\sum_i\overline{a_i}e_i$ and $\overline\pi(g):=J_\pi\pi(g)J_\pi$; then $\overline\pi$ is a group homomorphism because $J_\pi^2=\operatorname{id}$, it is unitary because $J_\pi$ is a conjugate-linear isometry and $\pi(g)$ is unitary, it is strongly continuous because $J_\pi$ is isometric, and it satisfies $d_{\overline\pi}=d_\pi$ and $\overline{\overline\pi}=\pi$; moreover $\overline\pi$ is irreducible exactly when $\pi$ is, since $M\mapsto J_\pi M$ is a bijection between the closed invariant subspaces of $\overline\pi$ and those of $\pi$. The resulting class is independent of the choices: if $T:H_\pi\to H_{\pi'}$ is a unitary intertwiner and $J,J'$ are the two coordinate conjugations, then $J' T J$ is a linear unitary intertwiner from $J\pi J$ to $J'\pi' J'$. Taking $T=I$ also covers a change of basis for the same representation. Conjugating twice returns the original class, so this defines a dimension-preserving involution of $\widehat K$. For the same basis define $G_i:=\operatorname{span}_j\{c^\pi_{e_i,e_j}\}$; the second action formula of step 2.1 shows $\lambda(g)c^\pi_{e_i,e_j}=c^\pi_{e_i,\pi(g)e_j}=\sum_l\overline{\pi_{lj}(g)}\,c^\pi_{e_i,e_l}$ with $\pi_{lj}(g)=\langle\pi(g)e_j,e_l\rangle$, and $\overline{\pi_{lj}(g)}=\langle J_\pi\pi(g)e_j,e_l\rangle=\langle\overline\pi(g)e_j,e_l\rangle$ is exactly the $(l,j)$-entry of $\overline\pi(g)$; the linear map $W_i(e_j):=c^\pi_{e_i,e_j}$ therefore satisfies $\lambda(g)W_i=W_i\overline\pi(g)$ and $\sqrt d\,W_i$ is a unitary intertwiner $H_\pi\to G_i$ by [F2], while $M_\pi=\bigoplus_iG_i$ and $\dim G_i=d$ as in step 2.1; hence $\lambda|_{M_\pi}\cong d_\pi\,\overline\pi$. Applying [F4] to the block decomposition of step 1.1 gives $\rho\cong\widehat\bigoplus_\pi d_\pi\pi$ and $\lambda\cong\widehat\bigoplus_\pi d_\pi\overline\pi$, and reindexing the latter sum by the involution $\pi\mapsto\overline\pi$ of $\widehat K$ gives $\lambda\cong\widehat\bigoplus_\pi d_\pi\pi$, which completes the proof. The Axiom of Choice is inherited through the fixed representatives and bases and the cited suppliers. [F1, F2, F4, step 1.1, step 2.1] ∎
