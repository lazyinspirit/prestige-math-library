---
id: lem-reachable-decomposition-and-state-feedback-pole-placement
kind: lemma
title: "Reachable block decomposition and same-field state-feedback pole placement"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-rank-nullity
  - thm-row-rank-equals-column-rank
  - lem-characteristic-polynomial-of-block-triangular-matrix
  - thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karl J. Åström and Richard M. Murray, Feedback Systems: An Introduction
        for Scientists and Engineers"
      url: "https://faculty.sites.iastate.edu/tesfatsi/archive/tesfatsi/FeedbackSyste\
        ms.AstromMurray.pdf"
      locator: "Version 2.11b complete book; §6.1, pp.167–174, reachability; §6.2,
        pp.175–181, SISO state-feedback pole placement; §7.2, pp.207–208,
        observer duality. The local proof establishes the multi-input claims."
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§2.3, printed pp.5–7, controllability Gramian and reachable-subspace
        context; §5.1, printed pp.21–23, DARE hypotheses. The local proof below
        supplies the multi-input result."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $F\in\{\mathbb R,\mathbb C\}$, let $n,m\ge0$, and let $A\in F^{n\times n}$ and $B\in F^{n\times m}$. The real case is viewed over $\mathbb C$ when a complex spectral parameter or rank is used. Define
$$\mathcal R=\operatorname{span}_F\{A^jBe_\ell:0\le j<n,\ 1\le\ell\le m\},\qquad r=\dim_F\mathcal R,$$
where a span of an empty family is $\{0\}$. Then there is an invertible $P\in F^{n\times n}$ such that
$$P^{-1}AP=\begin{bmatrix}A_r&D\\0&A_u\end{bmatrix},\qquad P^{-1}B=\begin{bmatrix}B_r\\0\end{bmatrix}.$$
The pair $(A_r,B_r)$ is reachable on $F^r$ in the displayed algebraic sense, and empty blocks are permitted. For every $\lambda\in\mathbb C$,
$$\operatorname{rank}_{\mathbb C}[\lambda I-A\ \ B]=n\quad\Longleftrightarrow\quad \lambda\notin\sigma_{\mathbb C}(A_u^{\mathbb C}),$$
where $A_u^{\mathbb C}$ is the complexification of $A_u$ when $F=\mathbb R$ and is $A_u$ itself when $F=\mathbb C$.

If $r=n$, then for every prescribed list $\mu_1,\ldots,\mu_n\in F$ there is a gain $K\in F^{m\times n}$ satisfying
$$\det(zI-A+BK)=\prod_{j=1}^n(z-\mu_j).$$
Thus a real reachable pair can be assigned any real pole list, including repetitions, and a complex reachable pair any complex list. The pole-placement claim does not assert arbitrary nonreal conjugate-pair placement for a real pair.

## Facts & Assumptions

**Given:** Finite matrices $A,B$ over $F$, with the reachable space and rank convention stated above.

[F1] [[def-linear-combination-and-span]] and [[lem-span-is-the-set-of-linear-combinations]]: the span is precisely the set of finite linear combinations and is the smallest subspace containing the listed vectors.

[F2] [[thm-rank-nullity]]: for a map with finite-dimensional domain, dimension equals rank plus nullity.

[F3] [[thm-row-rank-equals-column-rank]]: every finite matrix over a field has equal row rank and column rank.

[F4] [[lem-characteristic-polynomial-of-block-triangular-matrix]]: the characteristic polynomial of a block-triangular matrix is the product of those of its diagonal blocks.

[F5] [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]] and [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: for a complex finite-dimensional endomorphism, its spectrum is the set of roots of $\det(\lambda I-M)$ in $\mathbb C$.

## Proof

1.1 For each integer $k\ge0$, put $\mathcal R_k=\operatorname{span}\{A^jBe_\ell:0\le j<k,\ 1\le\ell\le m\}$. Then $\mathcal R_{k+1}=\mathcal R_k+A\mathcal R_k+\operatorname{im}B$. If $\mathcal R_{k+1}=\mathcal R_k$, then $\operatorname{im}B\subseteq\mathcal R_k$ and $A\mathcal R_k\subseteq\mathcal R_k$, so every later space equals $\mathcal R_k$. Otherwise each inclusion is strict; if no equality occurs before $\mathcal R_n$, its dimension has increased at least $n$ times from zero, hence $\mathcal R_n=F^n$. Therefore $\mathcal R=\mathcal R_n$ is the smallest $A$-invariant subspace containing $\operatorname{im}B$. [given, F1, algebra]

1.2 Let $(E,H)$ be reachable on $F^d$. If $[\lambda I-E\ \ H]$ had rank less than $d$ over $\mathbb C$, row-rank equality and rank-nullity applied to its adjoint would give a nonzero $y\in\mathbb C^d$ with $y^*(\lambda I-E)=0$ and $y^*H=0$. Induction then gives $y^*E^jH=\lambda^j y^*H=0$ for every $j<d$, contradicting reachability; for real data the real reachable columns complexify to span $\mathbb C^d$. Thus the horizontal rank is $d$ for every complex $\lambda$. [F2, F3, algebra]

2.1 Scan the finite columns of $B,AB,\ldots,A^{n-1}B$, retaining a column exactly when it is outside the span of those retained; then scan the standard coordinate vectors until the retained list is a basis of $F^n$. This gives a basis matrix $P$ whose first $r$ columns span $\mathcal R$. Invariance and $\operatorname{im}B\subseteq\mathcal R$ give $P^{-1}AP=\begin{bmatrix}A_r&D\\0&A_u\end{bmatrix}$ and $P^{-1}B=\begin{bmatrix}B_r\\0\end{bmatrix}$; the first $r$ coordinates of the columns $A^jB$ are $A_r^jB_r$ and span $F^r$. Applying the stabilization argument of step 1.1 in dimension $r$ shows that the first $r$ powers already span $F^r$, so $(A_r,B_r)$ is reachable, including $r=0$. For real data, complexifying the real span gives the complex span because each complex coefficient splits into real and imaginary parts. No arbitrary basis choice is used. [given, F1, step 1.1, construct, algebra]

2.2 For any gain $J$, a subspace $W$ contains $\operatorname{im}H$ and is $E$-invariant exactly when it contains $\operatorname{im}H$ and is $(E-HJ)$-invariant: $HJW\subseteq\operatorname{im}H\subseteq W$, and the converse follows from $E=(E-HJ)+HJ$. By step 1.1 the smallest invariant subspace containing $\operatorname{im}H$, hence reachability, is feedback-invariant. [given, step 1.1, algebra]

3.1 In the block coordinates of step 2.1, $[\lambda I-A\ \ B]$ has block form $\begin{bmatrix}\lambda I-A_r&-D&B_r\\0&\lambda I-A_u&0\end{bmatrix}$. A left annihilator $(a,b)$ must satisfy $a[\lambda I-A_r\ \ B_r]=0$, so step 1.2 forces $a=0$; a nonzero remaining annihilator exists exactly when $\det(\lambda I-A_u^{\mathbb C})=0$, which by [F5] is exactly $\lambda\in\sigma_{\mathbb C}(A_u^{\mathbb C})$. Invertible coordinate changes preserve rank, proving the claimed equivalence in the original coordinates. [F5, step 2.1, step 1.2, algebra]

3.2 Prove pole placement by induction on $d$. For $d=0$ the empty gain gives determinant $1$. For $d>0$, reachability implies $\operatorname{rank}H>0$. Fix $\mu_1\in F$. By step 1.2, $[E-\mu_1I\ \ -H]$ has full row rank over $\mathbb C$; for real data a nonzero full-size minor has real nonzero determinant, so it also has full row rank over $F$. Its kernel has dimension $m$ by [F2], whereas kernel vectors with first component zero have dimension $m-\operatorname{rank}H<m$. Choose a kernel vector $(v,u)$ with $v\ne0$; it satisfies $(E-\mu_1I)v=Hu$. Choose $v_i\ne0$ and define $J_0x=u x_i/v_i$, so $(E-HJ_0)v=\mu_1v$. [F2, step 1.2, step 2.2, choose, algebra]

4.1 Let $\pi:F^d\to F^d/Fv$ be the quotient map, $\bar E_0\pi=\pi(E-HJ_0)$, and $\bar H=\pi H$. The quotient pair is reachable because the spanning columns of $(E-HJ_0,H)$ project onto the quotient by step 2.2; the stabilization argument of step 1.1 in dimension $d-1$ shows that its first $d-1$ powers suffice. To obtain quotient coordinates over $F$, begin with $v$ and append standard coordinate vectors whenever they increase its span; the resulting finite basis has $d-1$ remaining vectors whose cosets form a basis of $F^d/Fv$. Thus the induction applies over the original field, also when $d=1$ and the quotient is zero. By induction a quotient gain $\bar J$ places $\mu_2,\ldots,\mu_d$; lift it as $J_1=\bar J\pi$ and set $J=J_0+J_1$. Since $J_1v=0$, the closed loop retains eigenvalue $\mu_1$ on $Fv$ and induces the assigned quotient characteristic polynomial. The block-triangular characteristic identity [F4] gives $\det(zI-E+HJ)=\prod_{j=1}^d(z-\mu_j)$, including repeated poles and poles already in $\sigma(E)$; no inverse of $E$ or $E-\mu I$ is used. [F4, step 1.1, step 2.2, step 3.2, induction, algebra] ∎
