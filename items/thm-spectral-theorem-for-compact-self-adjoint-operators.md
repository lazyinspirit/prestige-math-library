---
id: thm-spectral-theorem-for-compact-self-adjoint-operators
kind: theorem
title: Spectral theorem for compact self adjoint operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, lem-orthogonal-complement-of-an-eigenspace-is-invariant, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-compact-linear-operator, def-spectrum-and-resolvent-of-a-bounded-operator, def-eigenvalue-eigenvector-eigenspace-and-spectrum, thm-compact-implies-the-other-compactness-forms, thm-closed-unit-ball-compact-iff-finite-dimensional, thm-closed-subspace-of-a-compact-space-is-compact, thm-compactness-under-continuous-maps, lem-compositions-with-a-compact-operator-are-compact, thm-orthogonal-decomposition-by-a-closed-subspace, thm-double-orthogonal-complement-is-closure, thm-hilbert-space-fourier-expansion, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-bessel-inequality, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-orthogonality-and-orthogonal-complement, lem-orthogonal-complement-is-closed, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-metric-convergence, lem-metric-limits-unique, def-metric-ball, thm-complete-subspace-iff-closed, thm-countable-union-of-countable, lem-subset-of-countable, cor-archimedean-reciprocal, def-countable, def-linear-subspace, def-kernel-and-image-of-a-linear-map, def-complex-metric-convergence-and-continuity, def-banach-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.2, Theorem 3.7 and Corollaries 3.8–3.9 (printed pp. 74–78)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §2, Theorem 2.3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be a compact self-adjoint operator
([[def-compact-linear-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-bounded-linear-operator]]). Let

$$\Sigma:=\{\lambda:\lambda\ \text{is an eigenvalue of}\ T,\ \lambda\ne0\}$$

be its set of nonzero eigenvalues
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]), with eigenspaces
$E_\lambda=\ker(T-\lambda I)$ for $\lambda\in\Sigma$. Then:

1. $\Sigma$ is a finite or countably infinite set of **real** numbers, each
   eigenvalue has finite multiplicity in the sense $\dim E_\lambda<+\infty$, and
   for every real $\varepsilon>0$ there are only finitely many
   $\lambda\in\Sigma$ with $|\lambda|\ge\varepsilon$; in particular every point
   of $\mathbb F\setminus\{0\}$ has a neighbourhood containing only finitely
   many elements of $\Sigma$, so the only possible accumulation point of
   $\Sigma$ is $0$;
2. the closed linear span $M$ of $\bigcup_{\lambda\in\Sigma}E_\lambda$ satisfies
   $$M=(\ker T)^\perp=\overline{\operatorname{ran}T}$$
   ([[def-orthogonality-and-orthogonal-complement]]), and $H=M\oplus M^\perp$
   with $M^\perp\subseteq\ker T$;
3. for every $x\in H$ the finite-subset net of $\sum_{\lambda\in\Sigma}\lambda P_\lambda x$
   over the orthogonal projections $P_\lambda$ onto $E_\lambda$ converges in
   norm and
   $$Tx=\sum_{\lambda\in\Sigma}\lambda P_\lambda x ;$$
4. if in addition $H$ is a complex Hilbert space, then the nonzero spectrum
   agrees with the nonzero eigenvalues,
   $$\sigma(T)\cap\{\mu\in\mathbb C:\mu\ne0\}=\Sigma .$$

No Hilbert basis of $\ker T$ is selected anywhere: only the orthonormal bases of
the finite-dimensional eigenspaces $E_\lambda$, $\lambda\ne0$, are used.

## Facts & Assumptions

**Given:** Countable Choice, a real or complex Hilbert space $H$, a compact self-adjoint $T\in\mathcal B(H)$, the set $\Sigma$ of nonzero eigenvalues, their eigenspaces $E_\lambda=\ker(T-\lambda I)$, and $M:=\overline{\operatorname{span}}\bigcup_{\lambda\in\Sigma}E_\lambda$ (the closed linear span).

[A1] **Self-adjointness and eigenspaces.** $q(x)=\langle Tx,x\rangle$ is real and $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$; $E_\lambda=\ker(T-\lambda I)$ is the eigenspace of $\lambda$ and is a linear subspace ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-linear-subspace]], [[def-kernel-and-image-of-a-linear-map]]).

[A2] **Extremal eigenvalue and orthogonality.** Every nonzero compact self-adjoint operator has $\|S\|$ or $-\|S\|$ as an eigenvalue with a unit eigenvector ([[lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]]); eigenvalues of a self-adjoint operator are real and distinct eigenspaces are orthogonal ([[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]]); $E_\lambda$ and $E_\lambda^\perp$ are closed $T$-invariant subspaces on which $T$ satisfies the self-adjoint identity ([[lem-orthogonal-complement-of-an-eigenspace-is-invariant]]).

[A3] **Compactness and closed subspaces.** $T$ is compact exactly when $\overline{T(\overline B)}$ is a compact subset of $H$, where $\overline B=\{x\in H:\|x\|\le1\}$ ([[def-compact-linear-operator]], [[def-metric-ball]]); scalar multiples and continuous images of compact sets are compact ([[thm-compactness-under-continuous-maps]]); a closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a compact metric space is sequentially compact, choice-free ([[thm-compact-implies-the-other-compactness-forms]]); a closed subspace of a complete metric space is complete, in ZF ([[thm-complete-subspace-iff-closed]]); $\mathcal B(H)$ is a Banach space and $H$ is a Banach space ([[def-banach-space]], [[def-bounded-linear-operator]]).

[A4] **Subspace compactness.** If $W$ is a closed subspace of $H$, the inclusion $\iota:W\to H$ is a bounded linear operator and $T\iota$ is compact ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A5] **Finite dimension.** A normed space has compact closed unit ball exactly when it admits an ordered basis of finite length ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]); every finite-dimensional real or complex inner product space has an orthonormal basis, the empty one in dimension zero ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); an orthonormal family is linearly independent with unit vectors ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A6] **Orthogonal complements and expansion.** For every subset $S$, $S^\perp$ is a closed linear subspace; $u\perp v$ means $\langle u,v\rangle=0$ ([[def-orthogonality-and-orthogonal-complement]], [[lem-orthogonal-complement-is-closed]]); $M^{\perp\perp}=\overline M$ for a linear subspace $M$ ([[thm-double-orthogonal-complement-is-closure]]); $H=M\oplus M^\perp$ for closed $M$, with unique decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]]); the finite-subset net of $\sum_j\langle x,e_j\rangle e_j$ converges to $x$ for a complete orthonormal family, with Parseval's identity ([[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]); finite Bessel: $\sum_{j\in F}|\langle x,e_j\rangle|^2\le\|x\|^2$ ([[lem-finite-bessel-inequality]]); a square-summable orthogonal family has a norm-convergent finite-subset net whose limit has the sums of the squared norms ([[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A7] **Cardinality and Archimedes.** Under $\mathrm{AC}_\omega$ a countable union of at most countable sets is at most countable, and subsets of at most countable sets are at most countable ([[thm-countable-union-of-countable]], [[lem-subset-of-countable]], [[def-countable]], [[def-countable-choice]]); for every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[A8] **Continuity, limits, scalars.** Bounded linear operators are continuous with $\|Tx\|\le\|T\|\,\|x\|$ ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-operator-norm]]); limits of sequences are unique ([[def-metric-convergence]], [[lem-metric-limits-unique]]); the complex distance is $d(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]); the inner product is additive and homogeneous in the first argument ([[def-real-and-complex-inner-product-space]]).

[A9] **Spectrum.** For a complex Banach space, $\mu\in\rho(T)$ means $\mu I-T$ is bijective with bounded inverse, $\sigma(T)=\mathbb C\setminus\rho(T)$, and every eigenvalue lies in $\sigma(T)$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact self-adjoint $T$, the set $\Sigma$ of its nonzero eigenvalues, the eigenspaces $E_\lambda$, the closed span $M$, and the closed unit ball $\overline B$.

1.1 **Nonzero eigenspaces are finite-dimensional.** Let $\lambda\in\Sigma$ and let $C:=\overline{T(\overline B)}$, which is compact by [A3]. If $x\in E_\lambda$ with $\|x\|\le1$ then $Tx=\lambda x$, so $x=\lambda^{-1}Tx\in\lambda^{-1}T(\overline B)\subseteq\lambda^{-1}C$; thus $\overline B_{E_\lambda}:=\{x\in E_\lambda:\|x\|\le1\}\subseteq\lambda^{-1}C$, and $\lambda^{-1}C$ is compact as a continuous image of a compact set [A3]. The set $E_\lambda$ is closed [A2], so $\overline B_{E_\lambda}$ is closed in $H$ and hence compact as a closed subset of the compact set $\lambda^{-1}C$ [A3]; by the closed-unit-ball criterion [A5] applied to the normed space $E_\lambda$, the space $E_\lambda$ has finite dimension, so its multiplicity is finite. [A2, A3, A5]

1.2 **Only finitely many eigenvalues above each threshold.** Fix a real $\varepsilon>0$ and suppose for contradiction that $\Sigma_\varepsilon:=\{\lambda\in\Sigma:|\lambda|\ge\varepsilon\}$ were infinite. Countable Choice [A7] gives a sequence $(\lambda_k)_{k\ge1}$ of pairwise distinct elements of $\Sigma_\varepsilon$ together with unit eigenvectors $e_k\in E_{\lambda_k}$, which exist because each $\lambda_k$ is an eigenvalue and a nonzero eigenvector may be normalised by positive definiteness of the pairing [A1]. Distinct eigenvalues have orthogonal eigenspaces [A2], so $\langle e_j,e_k\rangle=0$ for $j\ne k$, and self-adjointness gives $\langle Te_j,Te_k\rangle=\langle e_j,T^2e_k\rangle=\lambda_k\langle e_j,Te_k\rangle=\lambda_j\lambda_k\langle e_j,e_k\rangle=0$, while $\langle Te_k,Te_k\rangle=|\lambda_k|^2\|e_k\|^2\ge\varepsilon^2$; hence $\|Te_j-Te_k\|^2=\|Te_j\|^2+\|Te_k\|^2\ge2\varepsilon^2$ for all $j\ne k$. Therefore the sequence $(Te_k)$ has no convergent subsequence: two sufficiently late terms of a convergent sequence are at distance $<\varepsilon$ by the triangle inequality [A8], contradicting the uniform separation. But $Te_k\in C=\overline{T(\overline B)}$ for every $k$ because $\|e_k\|=1$, and the compact metric space $C$ is sequentially compact [A3], a contradiction; so $\Sigma_\varepsilon$ is finite. If $a\in\mathbb F\setminus\{0\}$, then the ball $B(a,|a|/2)$ meets $\Sigma$ only inside the finite set $\Sigma_{|a|/2}$, proving the asserted local finiteness away from $0$. [A1, A2, A3, A7, A8, algebra]

1.3 **$M^\perp$ is annihilated by $T$.** Since $M$ is the closed linear span of the subspaces $E_\lambda$, a vector is orthogonal to $M$ exactly when it is orthogonal to every $E_\lambda$; hence $M^\perp=\bigcap_{\lambda\in\Sigma}E_\lambda^\perp$ is a closed linear subspace, and it is $T$-invariant because each $E_\lambda^\perp$ is $T$-invariant [A2]. As a closed subspace of the Hilbert space $H$, $M^\perp$ is complete [A3], and the restriction $S:=T\iota$ of $T$ to $M^\perp$ is compact by [A4] and self-adjoint, since for $u,v\in M^\perp$ one has $\langle Tu,v\rangle=\langle u,Tv\rangle$ in $H$ and both vectors lie again in $M^\perp$. If $S\ne0$, the extremal eigenvalue lemma [A2] provides $\mu=\pm\|S\|\ne0$ and $w\in M^\perp\setminus\{0\}$ with $Sw=\mu w$, hence $Tw=\mu w$ and $w\in E_\mu\subseteq M$; then $w\in M\cap M^\perp$, so $\langle w,w\rangle=0$ and $w=0$ by positive definiteness, a contradiction. Therefore $S=0$, that is $T$ vanishes on $M^\perp$. [A1, A2, A3, A4, A6]

2.1 **An orthonormal family with closed span $M$.** By [step 1.2] each set $\Sigma_{1/n}=\{\lambda\in\Sigma:|\lambda|\ge1/n\}$, $n\ge1$, is finite, and every $\lambda\in\Sigma$ lies in some $\Sigma_{1/n}$ because $|\lambda|>0$ and $1/n<|\lambda|$ for a suitable $n$ by [A7]; hence $\Sigma=\bigcup_{n\ge1}\Sigma_{1/n}$ is at most countable by [A7]. Choose for every $\lambda\in\Sigma$ an orthonormal basis $(e_{\lambda,1},\dots,e_{\lambda,d_\lambda})$ of the finite-dimensional space $E_\lambda$, which exists by [A5], and let $(e_j)_{j\in J}$ be the disjoint union of these finite families indexed by the at most countable set $\Sigma$, so that $J$ is at most countable. Every $e_j$ has norm $1$, and orthonormal bases of orthogonal eigenspaces [A2] make $(e_j)_{j\in J}$ an orthonormal family whose closed linear span is $M$ by the definition of $M$. [step 1.2, A1, A2, A5, A7]

2.2 **The support of the operator.** Every eigenvector with nonzero eigenvalue is orthogonal to $\ker T$, because for $y\in\ker T$ and $x\in E_\lambda$ with $\lambda\ne0$ one has $\lambda\langle x,y\rangle=\langle Tx,y\rangle=\langle x,Ty\rangle=0$ by self-adjointness, so $\langle x,y\rangle=0$; since $(\ker T)^\perp$ is closed [A6] and contains each $E_\lambda$, it contains $M$, while [step 1.3] and [A6] give $(\ker T)^\perp\subseteq(M^\perp)^\perp=\overline M=M$; hence $M=(\ker T)^\perp$. Moreover $\operatorname{ran}T\subseteq(\ker T)^\perp$ by the same computation read with $x$ arbitrary, so $\overline{\operatorname{ran}T}\subseteq(\ker T)^\perp$, and if $z\perp\operatorname{ran}T$ then $0=\langle z,Tx\rangle=\langle Tz,x\rangle$ for every $x$, whence $Tz=0$ and $z\in\ker T$; applying [A6] to the linear subspace $\operatorname{ran}T$ gives $\overline{\operatorname{ran}T}=(\operatorname{ran}T)^{\perp\perp}\subseteq(\ker T)^\perp$, while the previous inclusion reverses after taking complements: $(\ker T)^\perp\subseteq\operatorname{ran}T^{\perp\perp}=\overline{\operatorname{ran}T}$. [step 1.3, A1, A6, algebra]

3.1 **The spectral expansion.** Let $x\in H$. By [A6] and [step 2.2] there is a unique decomposition $x=m+n$ with $m\in M$ and $n\in M^\perp$, and by [step 1.3] $n\in\ker T$, so $Tn=0$. By [step 2.1] the family $(e_j)$ is complete in $M$, so the Fourier expansion [A6] gives $m=\sum_{j\in J}\langle m,e_j\rangle e_j$ as the limit of the finite-subset net, and the same holds with $\langle x,e_j\rangle$ in place of $\langle m,e_j\rangle$ because $x-m\in M^\perp$. Writing $P_\lambda x:=\sum_{i=1}^{d_\lambda}\langle x,e_{\lambda,i}\rangle e_{\lambda,i}\in E_\lambda$, the family $(P_\lambda x)_{\lambda\in\Sigma}$ is orthogonal with $\sum_{\lambda}\|P_\lambda x\|^2\le\|x\|^2$ by Bessel [A6], so by [A6] the finite-subset net $\sum_{\lambda\in F}P_\lambda x$ converges to some $m'\in M$; for every $j$ the difference $m-m'$ is orthogonal to $e_j$, hence to $M$, so $m-m'\in M\cap M^\perp=\{0\}$ and $m'=m$. Finally $T(\sum_{\lambda\in F}P_\lambda x)=\sum_{\lambda\in F}\lambda P_\lambda x$ for finite $F$ because each $P_\lambda x\in E_\lambda$, and continuity of $T$ [A8] carries the convergent net $(P_\lambda x)$ to $Tm$; hence the finite-subset net of $(\lambda P_\lambda x)$ converges to $Tm$, and adding $Tn=0$ gives $Tx=\sum_{\lambda\in\Sigma}\lambda P_\lambda x$. [step 1.3, step 2.1, step 2.2, A1, A6, A8, algebra]

3.2 **A spectral gap off the eigenvalue set.** Let $\mu\ne0$ with $\mu\notin\Sigma$. The set $A:=\{\lambda\in\Sigma:|\lambda|\ge|\mu|/2\}$ is finite by [step 1.2], and $\mu\notin A$; set $\delta:=\min\bigl(\{|\mu-\lambda|:\lambda\in A\}\cup\{|\mu|/2\}\bigr)$, a positive real number because $A$ is finite and every displayed distance is positive. For every $\lambda\in\Sigma$ one has $|\mu-\lambda|\ge\delta$: if $|\lambda|\ge|\mu|/2$ this is the definition of $\delta$, and if $|\lambda|<|\mu|/2$ then $|\mu-\lambda|\ge|\mu|-|\lambda|>|\mu|/2\ge\delta$ by the triangle inequality [A8]. Consequently, for every $z\in H$ the orthogonal family $\bigl((\mu-\lambda)^{-1}P_\lambda z\bigr)_{\lambda\in\Sigma}$ has $\sum_{\lambda}|\mu-\lambda|^{-2}\|P_\lambda z\|^2\le\delta^{-2}\sum_\lambda\|P_\lambda z\|^2\le\delta^{-2}\|z\|^2<+\infty$ by Bessel [A6], so [A6] makes its finite-subset net converge to a vector of norm $\le\delta^{-1}\|z\|$. [step 1.2, step 2.1, A6, A8, algebra]

4.1 **The candidate inverse.** Fix $\mu\ne0$ with $\mu\notin\Sigma$ and, for $z\in H$, write $z=m(z)+n(z)$ with $m(z)\in M$, $n(z)\in M^\perp$ as in [step 3.2]; define $Az:=\sum_{\lambda\in\Sigma}(\mu-\lambda)^{-1}P_\lambda z+\mu^{-1}n(z)$, the first term being the limit of the convergent net of [step 3.2]. This is well defined by uniqueness of limits [A8]; the map $A$ is linear because each $P_\lambda$ is linear and limits respect linear combinations, and $\|Az\|^2\le\delta^{-2}\|m(z)\|^2+|\mu|^{-2}\|n(z)\|^2\le\max(\delta^{-1},|\mu|^{-1})^2\|z\|^2$ by orthogonality of the decomposition [A6], so $A$ is a bounded linear operator on $H$. [step 2.1, step 3.2, A6, A8, algebra]

5.1 **The inverse identities and the spectrum.** With $z=m(z)+n(z)$ as above, $(I)$: using [step 3.1] and [step 4.1], $(\mu I-T)Az=\sum_\lambda(\mu-\lambda)(\mu-\lambda)^{-1}P_\lambda z+\mu\,\mu^{-1}n(z)-T\sum_\lambda(\mu-\lambda)^{-1}P_\lambda z-T(\mu^{-1}n(z))=\sum_\lambda P_\lambda z+n(z)-0-\mu^{-1}Tn(z)=z$, because $T$ vanishes on $M^\perp$ by [step 1.3] and acts as $\lambda I$ on $E_\lambda$; likewise $A(\mu I-T)w=\sum_\lambda(\mu-\lambda)^{-1}(\mu-\lambda)P_\lambda w+\mu^{-1}\mu n(w)=w$ for every $w\in H$, since $\mu I-T$ maps $E_\lambda$ into itself by the factor $\mu-\lambda$ and kills $n(w)\in M^\perp$. Hence $\mu I-T$ is bijective with bounded inverse $A$, so $\mu\in\rho(T)$ and $\mu\notin\sigma(T)$ [A9]; conversely every $\lambda\in\Sigma$ satisfies $(\lambda I-T)x=0$ for a nonzero eigenvector, so $\lambda I-T$ is not injective and $\lambda\in\sigma(T)$ [A9]. Therefore $\sigma(T)\cap\{\mu\ne0\}=\Sigma$. [step 1.3, step 3.1, step 4.1, A9, algebra]

6.1 **Conclusion.** Claim 1 is the combination of [step 1.1], [step 1.2], [step 2.1] and the reality of eigenvalues in [A2]; claim 2 is [step 2.2] together with the decomposition of [step 3.1]; claim 3 is [step 3.1]; claim 4 is [step 5.1]. At no point was a Hilbert basis of $\ker T$ selected: the chosen vectors all lie in the eigenspaces $E_\lambda$ with $\lambda\ne0$, which are contained in $(\ker T)^\perp$ by [step 3.1]. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 5.1, A2] ∎
