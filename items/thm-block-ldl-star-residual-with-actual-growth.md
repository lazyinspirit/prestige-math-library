---
id: thm-block-ldl-star-residual-with-actual-growth
kind: theorem
title: Block LDL* residual errors propagate with actual block growth
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-symmetric-indefinite-block-ldl-star
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §§7.2.4 and 7.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Consider a successful run of [[alg-symmetric-indefinite-block-ldl-star]] on a Hermitian input with its declared permutation $P$ and fixed pivot-block sequence. In every formula, $\|X\|_2$ is the operator norm induced by the Euclidean inner products. At stage $r$, write the active matrix as
$$\begin{pmatrix}D_r&B_r^*\\B_r&C_r\end{pmatrix}.$$
Suppose the computed trailing block is
$$\widehat S_{r+1}=C_r-B_rD_r^{-1}B_r^*+\Delta_r,$$
where $\Delta_r$ is the exact local update residual. Embed it into the full permuted coordinates as $E_r$, with zeros on all previously eliminated and current pivot indices. Let $T_r$ be the $n\times n$ identity on previously eliminated coordinates and the padded unit lower block elimination matrix
$$\begin{pmatrix}I&0\\B_rD_r^{-1}&I\end{pmatrix}$$
on the current pivot and trailing coordinates. Set $W_1=I$ and $W_r=T_1\cdots T_{r-1}$ for $r>1$. Then
$$\|PAP^*-L_{\rm ex}D_{\rm blk}L_{\rm ex}^*\|_2 \le\sum_r\|W_r\|_2^2\|\Delta_r\|_2 \le\rho_{\rm blk}\sum_r\eta_r\bigl(\|C_r\|_2+\|B_r\|_2^2\|D_r^{-1}\|_2\bigr),$$
provided the actual local residuals satisfy
$$\|\Delta_r\|_2\le\eta_r\bigl(\|C_r\|_2+\|B_r\|_2^2\|D_r^{-1}\|_2\bigr).$$
Here $L_{\rm ex}$ is the product of the exact-multiplier transformations $T_r$, not a rounded stored multiplier factor. For a nonempty run, $\rho_{\rm blk}:=\max_r\|W_r\|_2^2$ is the actual amplification from this pivot sequence. For an empty pivot partition set $\rho_{\rm blk}=0$; all stage sums are then zero. The trailing-only statement is conditional in this general form. For the specified kernel, [[lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual]] proves it with $\eta_r=\eta_{k_r,t_r}$, retaining the actual normalized-determinant and range certificates. It makes no uniform smallness claim for $\rho_{\rm blk}$, $\|D_r^{-1}\|_2$, or $\eta_r$.

In exact arithmetic every accepted block is nonsingular and each update has $\Delta_r=0$, so a successful run returns $PAP^*=LD_{\rm blk}L^*$.

For the actual rounded output, let $\widehat T_r$ be the $n\times n$ transformation built from stored $\widehat M_r$, padded by the identity on previously eliminated coordinates. Let $F_{r,\mathrm{act}}$ be the $(k_r+t_r)\times(k_r+t_r)$ reconstruction residual from the local kernel lemma, and define $F_r$ by embedding $F_{r,\mathrm{act}}$ into the current pivot and trailing coordinates, with zero rows and columns on all previously eliminated indices. Set $\widehat W_1=I_n$ and $\widehat W_r=\widehat T_1\cdots\widehat T_{r-1}$. Then
$$PAP^*-\widehat LD_{\rm blk}\widehat L^*=\sum_r\widehat W_rF_r\widehat W_r^*,\qquad \|PAP^*-\widehat LD_{\rm blk}\widehat L^*\|_2\le\sum_r\|\widehat W_r\|_2^2 f_r\le\widehat\rho_{\rm blk}\sum_r f_r,$$
where $f_r$ is the proved explicit local bound. For a nonempty run set $\widehat\rho_{\rm blk}=\max_r\|\widehat W_r\|_2^2$, and for an empty pivot partition set $\widehat\rho_{\rm blk}=0$. This includes multiplier coupling residuals as well as trailing updates. Neither actual growth nor inverse-pivot conditioning is assumed uniformly small.

## Facts & Assumptions


**Given:** A successful sequence of Hermitian $1\times1$ or $2\times2$ pivots, the actual local update residuals $\Delta_r$, and the displayed local error bounds.

[F1] [[alg-symmetric-indefinite-block-ldl-star]]: The declared permutation is applied once; each accepted pivot block is Hermitian and nonsingular, and the exact trailing update is $C-BD^{-1}B^*$.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: For a linear map between finite-dimensional inner-product spaces, the operator norm is the maximum of $\|Tv\|$ over unit vectors (and is zero on the zero domain).

[A1] For each stage $r$, the computed trailing block is $C_r-B_rD_r^{-1}B_r^*+\Delta_r$ and $\|\Delta_r\|_2\le\eta_r(\|C_r\|_2+\|B_r\|_2^2\|D_r^{-1}\|_2)$.

[F3] [[lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual]] proves the concrete local trailing residual, exact pivot acceptance, and full stored-multiplier reconstruction residual.

## Proof


1.1 For each accepted block, $D_r$ is invertible by its pivot test. Direct block multiplication gives $$\begin{pmatrix}D_r&B_r^*\\B_r&C_r\end{pmatrix} =\begin{pmatrix}I&0\\B_rD_r^{-1}&I\end{pmatrix} \begin{pmatrix}D_r&0\\0&C_r-B_rD_r^{-1}B_r^*\end{pmatrix} \begin{pmatrix}I&D_r^{-1}B_r^*\\0&I\end{pmatrix},$$ with the right-hand side an ordinary matrix product. Thus in exact arithmetic each elimination step is a valid Hermitian congruence. In the increasing-stage product $T_1\cdots T_r$, the earlier factors act as the identity on columns supported on the still-active coordinates, so multiplication by $T_r$ inserts precisely the stored multiplier columns for $J_r$. The product is therefore the stored unit lower block-triangular $L$, and completion gives $PAP^*=LD_{\rm blk}L^*$ with block-diagonal $D_{\rm blk}$; empty products give the empty identity. [given, F1, algebra]

1.2 With a computed update, the middle trailing block differs by $\Delta_r$. Hence the reconstructed active matrix at stage $r$ differs from the block factorization with $\widehat S_{r+1}$ by the embedded matrix whose only nonzero block is $-\Delta_r$ in the trailing coordinates. [given, F1, base, algebra]

2.1 Substitute the next-stage factorization into the trailing block of step 1.2. The local residual from stage $r+1$ is conjugated by the padded stage-$r$ lower elimination transformation. Repeated substitution therefore yields $$PAP^*-L_{\rm ex}D_{\rm blk}L_{\rm ex}^*=-\sum_r W_r E_r W_r^*.$$ After one stage this is step 1.2. Replacing the next trailing block adds $-T_1E_2T_1^*$; each later substitution adds the next embedded residual conjugated by all preceding $T_h$. Induction on the number of processed pivot blocks gives exactly $W_r=T_1\cdots T_{r-1}$ and the displayed identity. [step 1.2, F1, IH, induction, algebra]

3.1 For any compatible maps $X,Y$, [F2] gives $\|XYv\|_2\le\|X\|_2\|Yv\|_2\le\|X\|_2\|Y\|_2\|v\|_2$, so $\|XY\|_2\le\|X\|_2\|Y\|_2$. If $E_r$ is the zero-padded trailing block $\Delta_r$, then $\|E_r x\|_2=\|\Delta_r x_{\rm tail}\|_2\le\|\Delta_r\|_2\|x_{\rm tail}\|_2\le\|\Delta_r\|_2\|x\|_2$, hence $\|E_r\|_2\le\|\Delta_r\|_2$. Also $\|X^*\|_2=\|X\|_2$: express the Euclidean norm as $\sup_{\|v\|=1}|\langle v,w\rangle|$ by Cauchy-Schwarz and take the two finite unit-vector suprema in either order. These inequalities and the triangle inequality bound each summand in step 2.1 by $\|W_r\|_2^2\|\Delta_r\|_2$ and give the first asserted bound. [F2, step 2.1, algebra]

4.1 Apply [A1] to each $\Delta_r$ in step 3.1 and use $\|W_r\|_2^2\le\rho_{\rm blk}$. Summing gives the second bound. Since every $D_r$ is invertible but may be ill-conditioned and the transformation products may grow, no universal stability constant follows. [step 3.1, A1, discharge-induction, algebra]

5.1 For each accepted concrete kernel apply [F3]. Its $\eta_{k_r,t_r}$ supplies [A1], so steps 1.1, 1.2, 2.1, 3.1, and 4.1 give the claimed trailing-only estimate for the conceptual $L_{\rm ex}$. For actual stored multipliers, let $\widehat T_{r,\mathrm{act}}$ be the active block of $\widehat T_r$. Then [F3] gives the active identity $A_r=\widehat T_{r,\mathrm{act}}\operatorname{diag}(D_r,\widehat S_{r+1})\widehat T_{r,\mathrm{act}}^*+F_{r,\mathrm{act}}$, including the off-diagonal residual $N_r=\widehat M_rD_r-B_r$. Padding this identity uses $F_r$ as defined above; zero-padding preserves its operator norm, so $\|F_r\|_2=\|F_{r,\mathrm{act}}\|_2\le f_r$. [F3, step 3.1, step 4.1, algebra]

6.1 Substitute the next active identity into the previous trailing block. After one stage the reconstruction residual is $F_1$; each additional stage adds its padded $F_r$ conjugated by all preceding stored-multiplier transformations. Induction gives $PAP^*-\widehat LD_{\rm blk}\widehat L^*=\sum_r\widehat W_rF_r\widehat W_r^*$. The same submultiplicativity from step 3.1 and [F3] give the actual-growth bound. In exact arithmetic every local multiplier and Schur residual is zero, recovering the original exact factorization. [F1, F2, F3, step 3.1, step 5.1, induction, discharge-induction, algebra] ∎

