# Complete local PBH supplier proof packet — cycle 1

Research proposal only. No canonical item/page/manifest is changed by this packet. The statements and proofs below are for native continuation after the actual batch23 writer drains. They carry no gate, review, source-stamp or acceptance claim.

## Proposed supplier 1

ID: `lem-reachable-decomposition-and-state-feedback-pole-placement`.
Kind: lemma. Same A page: `numerical-algebraic-riccati-equations-and-stabilizing-branches`.
Title: Reachable block decomposition and same-field state-feedback pole placement.
Exact deps: `thm-rank-nullity`, `thm-row-rank-equals-column-rank`, `lem-characteristic-polynomial-of-block-triangular-matrix`, `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`, `def-linear-combination-and-span`.
No in-run suppliers, so proposed dependency_level 0. No Choice assumption is needed: every basis selection below is a scan of an explicitly finite ordered list.

### Statement

Let $F\in\{\mathbb R,\mathbb C\}$, $n,m\ge0$, $A\in F^{n\times n}$ and $B\in F^{n\times m}$. Define the reachable subspace
$$\mathcal R=\operatorname{span}_F\{A^jBe_\ell:0\le j<n,\ 1\le\ell\le m\},\qquad r=\dim_F\mathcal R.$$
There is an invertible $T\in F^{n\times n}$ with
$$T^{-1}AT=\begin{bmatrix}A_r&D\\0&A_u\end{bmatrix},\qquad T^{-1}B=\begin{bmatrix}B_r\\0\end{bmatrix},$$
where the pair $(A_r,B_r)$ is reachable on $F^r$ in the displayed algebraic sense. Empty blocks are allowed. For every $\lambda\in\mathbb C$,
$$\operatorname{rank}_{\mathbb C}[\lambda I-A\;B]=n\quad\Longleftrightarrow\quad\lambda\notin\sigma(A_u).$$
Moreover, if $r=n$, then for every prescribed list $\mu_1,\ldots,\mu_n\in F$ there is $K\in F^{m\times n}$ such that
$$\det(zI-A+BK)=\prod_{j=1}^n(z-\mu_j).$$
Thus for a real reachable pair one may assign any real list, including repeated real poles; for a complex reachable pair one may assign any complex list. This particular pole-placement statement is all that the full real/complex PBH equivalence needs. It does not claim the more general real conjugate-pair assignment theorem.

### Complete proof (convert to phase-numbered canonical form without omitting arguments)

1. Put $\mathcal R_k=\operatorname{span}\{A^jBe_\ell:0\le j<k\}$, with $\mathcal R_0=0$. Then $\mathcal R_{k+1}=\mathcal R_k+A\mathcal R_k+\operatorname{im}B$. If $\mathcal R_{k+1}=\mathcal R_k$ at any $k$, that space contains $\operatorname{im}B$ and is $A$-invariant, and all later spaces equal it. Otherwise every inclusion from $\mathcal R_0$ through $\mathcal R_n$ is strict, so $\dim\mathcal R_n\ge n$ and $\mathcal R_n=F^n$. Consequently $\mathcal R=\mathcal R_n$ is always $A$-invariant and contains $\operatorname{im}B$. It is precisely the smallest $A$-invariant subspace containing $\operatorname{im}B$.

2. Obtain an ordered basis of $\mathcal R$ by scanning the finite list of columns $B,AB,\ldots,A^{n-1}B$ and retaining a column exactly when it is outside the span of columns previously retained. Append standard coordinate vectors by the same rule until a basis of $F^n$ is obtained. The matrix of these columns is $T$. Invariance and containment give the displayed blocks. In these coordinates $A^jB=[A_r^jB_r;0]$. Their span equals the first $r$ coordinates, so $(A_r,B_r)$ is reachable. The argument of step 1 in dimension $r$ shows that its first $r$ powers already suffice. For real matrices, these real spanning identities remain true after allowing complex coefficients; real independence remains complex independence by taking real and imaginary parts. Hence the reachable block is also reachable over $\mathbb C$.

3. A reachable pair $(E,H)$ in dimension $d$ satisfies $\operatorname{rank}_{\mathbb C}[\lambda I-E\;H]=d$ for every complex $\lambda$. Indeed if this matrix were deficient, row-rank equality and rank-nullity give a nonzero complex row $a$ with $aE=\lambda a$ and $aH=0$. Inductively $aE^jH=\lambda^j aH=0$, contradicting that these columns span $\mathbb C^d$. (Rows here are complex-linear row functionals; equivalently write $a=y^*$ with $y\in\mathbb C^d$.) Apply this fact to $(A_r,B_r)$.

4. Similarity and invertible row/column multiplication preserve rank. In the block coordinates, a row $(a,b)$ annihilates $[\lambda I-T^{-1}AT\;T^{-1}B]$ exactly when
$$a(\lambda I-A_r)=0,\qquad aB_r=0,\qquad -aD+b(\lambda I-A_u)=0.$$
Step 3 forces $a=0$. Thus a nonzero annihilating row exists exactly when $\lambda I-A_u$ has a nonzero left kernel, equivalently when its determinant vanishes, equivalently $\lambda\in\sigma(A_u)$. This proves the rank characterization, with empty $A_u$ having empty spectrum.

5. For any gain $J$, the smallest invariant subspace containing $\operatorname{im}H$ is identical for $(E,H)$ and $(E-HJ,H)$. In fact, for a subspace $W$ containing $\operatorname{im}H$, $EW\subseteq W$ if and only if $(E-HJ)W\subseteq W$, since $HJW\subseteq\operatorname{im}H\subseteq W$. The minimal-subspace characterization from step 1 proves the assertion. In particular reachability is preserved under every state feedback.

6. We prove pole placement by induction on $d=\dim E$. At $d=0$ the empty gain gives the empty determinant $1$. Suppose $d>0$ and $(E,H)$ is reachable. Then $\operatorname{rank}H>0$, since otherwise its reachable space would be zero. Fix $\mu_1\in F$. By step 3 the matrix $M=[E-\mu_1 I\;-H]$ has row rank $d$. Its kernel over $F$ has dimension $m$ by rank-nullity (for real data and real $\mu_1$, the real and complex ranks coincide by real/imaginary decomposition). Kernel vectors with first coordinate block zero are precisely $(0,u)$ with $Hu=0$, a subspace of dimension $m-\operatorname{rank}H<m$. Therefore choose $(v,u)\in\ker M$ with $v\ne0$. Thus $(E-\mu_1I)v=Hu$. Choose a nonzero coordinate $v_i$ and define $J_0x=u x_i/v_i$; then $J_0v=u$ and $(E-HJ_0)v=\mu_1v$.

7. Set $E_0=E-HJ_0$ and $V_1=Fv$. By step 5 the pair $(E_0,H)$ is reachable, and $V_1$ is $E_0$-invariant. Let $\pi:F^d\to F^d/V_1$ be the quotient map, $\bar E_0\pi=\pi E_0$ and $\bar H=\pi H$. Projecting the spanning columns $E_0^jH$ proves that $(\bar E_0,\bar H)$ is reachable in dimension $d-1$. Choose quotient coordinates by appending standard coordinate vectors to $v$ using the finite scan in step 2, so every operator and gain remains over $F$. By induction there is a quotient gain $\bar J$ placing $\mu_2,\ldots,\mu_d$. Lift it to $J_1=\bar J\pi$, a map $F^d\to F^m$, and set $J=J_0+J_1$. Because $J_1v=0$, the closed loop $E-HJ$ still restricts to $\mu_1$ on $V_1$; its induced quotient is $\bar E_0-\bar H\bar J$. The block-triangular characteristic-polynomial formula gives
$$\det(zI-E+HJ)=(z-\mu_1)\prod_{j=2}^d(z-\mu_j).$$
This completes the induction. Repeated poles, poles originally in $\sigma(E)$, rank-deficient $H$, and multiple inputs are covered by the same kernel-dimension argument; no inverse of $E$ or $E-\mu I$ is used.

## Proposed supplier 2

ID: `thm-pbh-stabilizability-and-detectability-equivalence`.
Kind: theorem. Same A page as above.
Title: Closed-region PBH rank tests characterize continuous and discrete stabilizability and detectability.
Exact deps: `def-lqr-stabilizability-and-detectability`, `lem-stabilizability-and-detectability-pbh-necessary-conditions`, `lem-reachable-decomposition-and-state-feedback-pole-placement`, `lem-characteristic-polynomial-of-block-triangular-matrix`, `thm-row-rank-equals-column-rank`.
Proposed dependency_level 2 (old necessary lemma is level 1).

### Statement

For $F\in\{\mathbb R,\mathbb C\}$ and matrices $A\in F^{n\times n}$, $B\in F^{n\times m}$, $C\in F^{p\times n}$ as in the local definition, all ranks below are over $\mathbb C$ after complexifying real matrices.

- $(A,B)$ is continuously stabilizable iff $\operatorname{rank}[\lambda I-A\;B]=n$ for every $\operatorname{Re}\lambda\ge0$.
- $(A,B)$ is discretely stabilizable iff the same rank is $n$ for every $|\lambda|\ge1$.
- $(A,C)$ is continuously detectable iff $\operatorname{rank}\begin{bmatrix}\lambda I-A\\C\end{bmatrix}=n$ for every $\operatorname{Re}\lambda\ge0$.
- $(A,C)$ is discretely detectable iff the same vertical rank is $n$ for every $|\lambda|\ge1$.

The feedback and injection witnesses lie in the original field $F$. The boundary $\operatorname{Re}\lambda=0$ and $|\lambda|=1$ is included. These are exact finite-dimensional equivalences, not conclusions from a small residual or an approximate eigenvalue estimate.

### Complete proof

1. Necessity in all four assertions is the existing necessary-conditions lemma, after correcting its real-field witness typo as recorded below.

2. Apply the reachable-decomposition supplier to $(A,B)$. Its rank characterization says that the horizontal rank test throughout a closed forbidden region is equivalent to $A_u$ having no eigenvalue there. In continuous time $A_u$ is consequently Hurwitz; in discrete time it is consequently Schur stable. On the reachable block assign the list $(-1,\ldots,-1)$ for continuous time or $(0,\ldots,0)$ for discrete time. The supplier constructs a gain $K_r\in F^{m\times r}$ with that characteristic polynomial. Put
$$K=[K_r\;0]T^{-1}.$$
Then
$$T^{-1}(A-BK)T=\begin{bmatrix}A_r-B_rK_r&D\\0&A_u\end{bmatrix}.$$
The block characteristic-polynomial identity shows its spectrum is the union, with multiplicities, of the placed stable poles and the spectrum of $A_u$. It is therefore respectively Hurwitz or Schur stable, with a witness in $F$. If $r=0$ the gain is zero; if $r=n$ the uncontrollable block is empty. This proves both stabilizability converses without an inverse of $A$.

3. For detectability, use the horizontal equivalences on $(A^*,C^*)$. For every $\lambda\in\mathbb C$, adjoint invariance of rank gives
$$\operatorname{rank}[\bar\lambda I-A^*\;C^*]=\operatorname{rank}\begin{bmatrix}\lambda I-A\\C\end{bmatrix}.$$
Both forbidden regions are invariant under complex conjugation, so the respective vertical rank test is exactly the horizontal test for the dual pair. It supplies $J\in F^{p\times n}$ such that $A^*-C^*J$ is respectively Hurwitz or Schur stable. Its adjoint $A-J^*C$ has the conjugate eigenvalues and the same stability property; hence take $L=J^*\in F^{n\times p}$. Conversely an injection $L$ dualizes to the feedback $J=L^*$, or follows directly from the necessary lemma. This establishes all four equivalences, including their boundaries.

## Necessary surgical proof correction to the old lemma

Preserve its ID, title, deps, Statement and necessary-only contract. In its **Given**/proof introduction explicitly say: “All rank tests and eigenvector calculations take place over $\mathbb C$; real matrices and real feedback/injection witnesses act on their complexifications.” In step 1.1 change “$y\in F^n$” to “$y\in\mathbb C^n$”. In step 1.2 explicitly take $x\in\mathbb C^n$. The current proof's claimed $F$-valued left witness at a nonreal $\lambda$ is false for $F=\mathbb R$. The conclusion remains true, and the fix is proof-only. The dual-eigenvalue assertion follows from $\det(\lambda I-M)=0$ whenever a nonzero row annihilates $\lambda I-M$; adjointing gives a right eigenvector for $M^*$ at $\bar\lambda$, with the same stability contradiction. No extra stabilizability assumption is introduced.

## CARE/DARE preservation

Do not rewrite the stabilizability/detectability definition as a rank-test definition. Existing CARE and DARE existence/value proofs explicitly use existential witnesses already given by that definition and do not require a converse PBH premise. Keep their full real/complex fields, boundary policy, singular-$A$ DARE scope and all value/transversality assertions. The new theorem restores the separately commissioned equivalent rank tests. No CARE/DARE or downstream mathematical statement needs changing for this repair.
