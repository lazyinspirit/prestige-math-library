---
id: lem-hodge-riemann-for-large-positive-deformation
kind: lemma
title: "Hodge-Riemann relations hold for large positive deformation, and the deformation principle"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-the-deformed-lefschetz-operator-on-b-x-b-s, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-hard-lefschetz-implies-primitive-decomposition, lem-family-signature-constancy-and-the-weak-lefschetz-substitute, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Theorem 5.1, Lemma 5.2 and Corollary 5.3 with their proofs; formulas (5.1) and (5.2)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 and Section 2.4"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A self-dual Soergel bimodule $B$ satisfying hL and HR with the standard sign for the operator $\rho\cdot(-)$, its tensor product $BB_s$ with the induced invariant form and the deformed operator $L_\zeta$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]), and the maps $\alpha(b)=bc_{\mathrm{id}}$, $\beta(b)=bc_s$ of $B$ into $BB_s$.

[F1] The induced form on $BB_s$ satisfies $\langle\alpha(b),\alpha(b')\rangle=\partial_s(\langle b,b'\rangle_B)$, $\langle\alpha(b),\beta(b')\rangle=\langle b,b'\rangle_B=\langle\beta(b),\alpha(b')\rangle$ and $\langle\beta(b),\beta(b')\rangle=\langle b,b'\rangle_B\alpha_s$, and its reduction is computed by the reduction $\operatorname{Tr}_{\mathbb R}$ of the trace ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F2] On $BB_s$ the operator $L_\zeta$ is left multiplication by $\rho$ on the first factor plus $\zeta$ times middle multiplication by $\rho$; on the image of $\alpha$ it is $\rho\cdot(-)$ on the first factor, and on the image of $\beta$ it equals $L_0$ because left and right multiplication by $\rho$ agree on $c_s$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).

[F3] HR with the standard sign gives, via the orthogonal primitive decomposition, the signature formula for the Lefschetz forms and the definiteness of the primitive forms; the signature of a continuous family of non-degenerate symmetric forms is constant on intervals ([[lem-hard-lefschetz-implies-primitive-decomposition]], [[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

## Statement

Let $B$ be a Soergel bimodule satisfying hL and HR with the standard sign. Then for $\zeta\gg0$ the induced operator $L_\zeta$ on $BB_s$ satisfies hL and HR with the standard sign (Theorem 5.1).

The proof contains the following **signature comparison** (Lemma 5.2): if $V,W$ are finite-dimensional graded spaces with graded non-degenerate forms and Lefschetz operators satisfying hL, $W$ is even or odd, $\dim V=(v+v^{-1})\dim W$, and $W$ satisfies HR with the standard sign, then $V$ satisfies HR with the standard sign if and only if for all $i\ge0$ the signature of the Lefschetz form on the primitive subspace $P_W^{-i+1}$ equals the signature of the Lefschetz form on all of $V^{-i}$.

Consequently (Corollary 5.3): if $\mathrm{HR}(x)$ holds and $\mathrm{hL}(x,s)_\zeta$ holds for every $\zeta\ge0$, then $\mathrm{HR}(x,s)_\zeta$ holds for every $\zeta\ge0$; more generally, if $\mathrm{hL}(x,s)_\zeta$ holds for all $\zeta\ge0$ and $\mathrm{HR}(x,s)_\zeta$ holds for a single $\zeta_0\ge0$, then $\mathrm{HR}(x,s)_\zeta$ holds for all $\zeta\ge0$. In the signature comparison use the convention $P_W^1=0$; no positive-degree primitive space is introduced.

## Proof
**Proof technique:** direct; the Gram-matrix computation of Theorem 5.1, the signature arithmetic of Lemma 5.2, and signature constancy.

1.1 **The special basis and the vanishing blocks.** Fix $i\ge0$ and choose $e_1,\ldots,e_n\in B^{-i-1}$ projecting to an orthogonal basis of $\overline B^{-i-1}$ and $p_1,\ldots,p_m\in B^{-i+1}$ projecting to an orthogonal basis of the primitive subspace $P^{-i+1}_\rho\subseteq\overline B^{-i+1}$. Then $\rho e_1,\ldots,\rho e_n,p_1,\ldots,p_m$ project to a basis of $\overline B^{-i+1}$, so $\alpha(\rho e_1),\ldots,\alpha(\rho e_n),\beta(e_1),\ldots,\beta(e_n),\alpha(p_1),\ldots,\alpha(p_m)$ project to a basis of $(BB_s)^{-i}$. In this basis, [F1] gives $\langle\beta(y),\beta(y')\rangle=\langle y,y'\rangle_B\alpha_s$, which reduces to zero, so $( \beta(y),\beta(y'))^{-i}_{L_\zeta}=0$; and by [F2] $L_\zeta=L_0$ on the image of $\beta$. [given, F1, F2]

2.1 **The cross pairings.** For $x\in B^{-i+1}$, $y\in B^{-i-1}$, the pairing of the images is $(\alpha(x),\beta(y))^{-i}_{L_\zeta}=(\alpha(x),\beta(y))^{-i}_{L_0}=\operatorname{Tr}_{\mathbb R}(\rho^i(xy)c_s)=(x,\rho y)^{-i+1}_\rho$, using [F1] and [F2]: the middle $\zeta\rho$-terms act as zero on $c_{\mathrm{id}}$ after reduction and the first term is the trace expression displayed. This identifies the off-diagonal blocks of the Gram matrix with the Lefschetz form of $B$ in one degree higher. [step 1.1, F1, F2]

2.2 **The Gram matrix and the reduction to $Q_\zeta$.** With the basis of step 1.1 the Gram matrix of $(-,-)^{-i}_{L_\zeta}$ has the block form
$$\begin{pmatrix}*&J&*\\ J&0&0\\ *&0&Q_\zeta\end{pmatrix}$$
with $J$ a non-degenerate diagonal matrix, by steps 1.1 and 2.1. Hence the matrix is non-degenerate if and only if $Q_\zeta$ is, and in that case its signature equals the signature of $Q_\zeta$: one can move the middle basis block to the top diagonal position along a path of non-degenerate symmetric matrices while keeping $Q_\zeta$ fixed, and the signature is constant along such a path by [F3]. [step 1.1, step 2.1, F3]

3.1 **The limit computation for $Q_\zeta$.** For $p,q\in B^{-i+1}$, expanding $L_\zeta^i$ gives $(\alpha(p),\alpha(q))^{-i}_{L_\zeta}=\operatorname{Tr}_{\mathbb R}(L_\zeta^i((pq)c_{\mathrm{id}}))=\operatorname{Tr}_{\mathbb R}\bigl(\sum_{j=0}^{i}\binom{i}{j}\rho^{i-j}(pq)(\zeta\rho)^jc_{\mathrm{id}}\bigr)$. The multiplication rule $r\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot sr+\partial_s(r)c_s$ shows that for $j\ge1$, $\operatorname{Tr}_{\mathbb R}(\rho^{i-j}(pq)(\zeta\rho)^jc_{\mathrm{id}})$ equals $\zeta\rho(\alpha_s^\vee)\operatorname{Tr}_{\mathbb R}(\rho^{i-1}(pq))$ when $j=1$ and vanishes for $j\ne1$, because the trace of a term landing in the positive-degree right multiple $S_+$ vanishes after reduction. Hence $(\alpha(p),\alpha(q))^{-i}_{L_\zeta}=\operatorname{Tr}_{\mathbb R}(\rho^i(pq)c_{\mathrm{id}})+\zeta i\,\rho(\alpha_s^\vee)(p,q)^{-i+1}_\rho$, the first term being independent of $\zeta$. Therefore $\lim_{\zeta\to\infty}\zeta^{-1}Q_\zeta=i\rho(\alpha_s^\vee)Q$ where $Q$ is the matrix of the Lefschetz form on $P^{-i+1}_\rho\subseteq\overline B^{-i+1}$, which is definite by the HR hypothesis on $B$; since $i,\zeta,\rho(\alpha_s^\vee)$ are strictly positive, $Q_\zeta$ is definite for $\zeta\gg0$ with the same signature as $Q$. [step 2.1, step 2.2, F1, F2, algebra]

4.1 **Hard Lefschetz for large $\zeta$ and the signature comparison.** By step 2.2, for $\zeta\gg0$ the Lefschetz form on $(BB_s)^{-i}$ is non-degenerate for every $i$, which by [F3] is equivalent to hL for $L_\zeta$; and its signature is the signature of $Q_\zeta$, i.e. the signature of the form on $P^{-i+1}_\rho\subseteq\overline B^{-i+1}$. This is exactly the criterion of the signature comparison: $V=BB_s$ has $\dim V=(v+v^{-1})\dim B$, its lowest degree is $-\ell(x)-1$ if $-d$ is the lowest degree of $B$ with $d=\ell(x)$, and for every $i$ the signature of the Lefschetz form on $V^{-i}$ equals the signature of the primitive form of $B$ in degree $-i+1$. The arithmetic of the comparison is the verification that for a space $W$ with HR standard sign, the signature of the Lefschetz form on $V^{-j-1}$ equals the alternating sum $\pm(p^{-j-1}-p^{-j-3}+p^{-j-5}-\cdots)$ determined by the Betti numbers of $W$ and hence the signature of $P_W^{-j}$; comparing Betti numbers via $\dim V=(v+v^{-1})\dim W$ gives the displayed equivalence. [step 2.2, step 3.1, F3]

5.1 **The deformation principle and conclusion.** Steps 2.2-4.1 give HR$(x,s)_\zeta$ for some $\zeta\gg0$ whenever HR$(x)$ holds and the operators $L_\zeta$ are Lefschetz operators satisfying hL for all $\zeta\ge0$; by the family signature-constancy lemma applied to the polynomial family $L_\zeta$ and the single parameter $\zeta_0$ at which HR is known (or at $\zeta\gg0$ for the corollary), HR holds for every $\zeta\ge0$. This proves the theorem, the signature comparison and the corollary; only finite-dimensional linear algebra, the induced-form computation and continuity in the parameter are used, and no choice principle is invoked. [step 2.2, step 3.1, step 4.1, F3] ∎

## Remarks

- The first term of the expansion in step 4.1 is the only $\zeta$-independent contribution; the linear growth of the remaining term is what makes $Q_\zeta$ definite for large $\zeta$, with the positive factor $i\rho(\alpha_s^\vee)$.
- The comparison uses $P_W^1=0$ so that the case $i=0$ is included; for $i=0$ the matrix $Q_\zeta$ is empty and the statement is the bottom-degree positivity, which holds by the normalization.
