---
id: lem-sample-covariance-spectrum-confinement
kind: lemma
title: "Finite-fourth-moment covariance spectral confinement"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - lem-nested-iid-fourth-moment-truncation-and-diagonal-control
  - lem-nonbacktracking-covariance-high-moment-bound
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-singular-value-decomposition
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, second edition, Chapters 3 and 5 (source context for the local reconstruction)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite real iid array with $E\xi_{11}=0$, $E\xi_{11}^2=1$ and $E|\xi_{11}|^4<\infty$. Let $X_h=(\xi_{ij})_{i\le h,j\le p_h}$ with $p_h/h\to\gamma\in(0,\infty)$, $N_h=\max(h,p_h)$ and $m_h=\min(h,p_h)$. Orient $X_h$ or its transpose as a matrix $Z_h$ with $m_h$ rows and $N_h$ columns, and put $A_h=Z_h/\sqrt{N_h}$ and $y=\min(\gamma,\gamma^{-1})\in(0,1]$. Then almost surely
$$\limsup_h\left\|A_hA_h^{\mathsf T}-(1+y)I_{m_h}\right\|_{\mathrm{op}}\le2\sqrt y.$$
No weak convergence of empirical spectral measures is assumed.

## Statement references

Bai and Silverstein, Chapters 3 and 5 ([complete book](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)); the argument below supplies its own counting and probability estimates.

## Facts & Assumptions

[F1] [[lem-nested-iid-fourth-moment-truncation-and-diagonal-control]] supplies all truncation, mean and diagonal controls, including vanishing Frobenius norms of higher entry-power matrices.

[F2] [[lem-nonbacktracking-covariance-high-moment-bound]] supplies the fixed-length bounds $\limsup\|T_j\|\le(2j+1)(j+1)y^{(j-1)/2}$ and the independent coarse norm bound.

[F3] The finite-dimensional spectral theorem and SVD are [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and [[thm-singular-value-decomposition]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Orient the upper-left block or its transpose with $m_h$ rows and $N_h$ columns, and use F1 to center and truncate it. In the rest of the proof write $n=N_h$, $p=m_h$, $y_h=p/n\to y\in(0,1]$, and $Y$ for this centered normalized matrix. F2 gives every fixed-length bound for $T_j$, in particular $\|Y\|=O(1)$. The diagonal laws give $D=\operatorname{diag}(YY^{\mathsf T})\to I$ and $E=\operatorname{diag}(Y^{\mathsf T}Y)\to yI$ in operator norm. Set $T=T_1$ and $T_0=I$. All limits below are along the original sequence index $h$. [given, F1, F2, construct]

2.1 For compatible alternating rectangular matrices, write $A_1\odot\cdots\odot A_s$ for the path sum imposing $i_r\ne i_{r+2}$ at every available position (including endpoints). Its norm is at most $2^{s-1}\prod\|A_i\|$. Here is a local proof rather than an appeal to Appendix A. Expand at the first forbidden reversal: $$A_1\odot\cdots\odot A_s=A_1(A_2\odot\cdots\odot A_s)-\operatorname{diag}(A_1A_2)(A_3\odot\cdots\odot A_s)+(A_1\circ A_2^{\mathsf T}\circ A_3)\odot A_4\odot\cdots\odot A_s.$$ [F1, F2, F3, step 1.1, algebra]

3.1 The correction restores the additional exclusion lost when the first reversal is contracted. This identity follows by fixing the indices $i_1=i_3$, then excluding $i_2=i_4$; for $s=2$ it is simply deletion of the diagonal. Rectangular diagonal matrices have the compatible rectangular identity embedding where necessary. The diagonal term has norm at most $\|A_1\|\|A_2\|$. The fused Schur product has norm at most $\|A_1\|\|A_2\|\|A_3\|$: it is a compression of $A_1\otimes A_2^{\mathsf T}\otimes A_3$ by the coordinate isometries $e_a\mapsto e_a\otimes e_a\otimes e_a$ and the analogous column isometry. The tensor-product norm bound follows by factoring a tensor operator into maps acting on one coordinate at a time; each such map is an orthogonal direct sum of copies of that factor and therefore has norm at most its norm, by summing the squared block norms. With $c_1=1$, $c_2=2$, induction gives $c_s\le c_{s-1}+2c_{s-2}\le2^{s-1}$. [F1, F2, F3, step 1.1, algebra, step 2.1]

4.1 Define $Y^{[q]}$ to have entries $n^{-q/2}|x|^{q-1}x$ for odd $q$ and $n^{-q/2}|x|^q$ for even $q$. The strong-law inputs give $\|Y^{[2]}\|_F^2=O(1)$ and $\|Y^{[q]}\|_F^2\le(\max|x|/\sqrt n)^{2q-4}n^{-2}\sum|x|^4\to0$ for $q>2$. By F2, $\|Y\|^2\le\|T\|+\|\operatorname{diag}(YY^*)\|=O(1)$. Thus every fixed-length restricted product with at least one factor $Y^{[q]}$, $q>2$, is $o(1)$ in norm. [F1, F2, F3, step 1.1, algebra, step 3.1]

5.1 Centering comparison is now legitimate without circularity: F2 proves the graph estimate for centered truncations and bounds their $\|Y\|=O(1)$ using their row law; the mean matrix has norm $\sqrt p\,|E x_{11}^{\mathrm{tr}}|=o(1)$ by F1. Expand the difference of fixed-length restricted products multilinearly and apply the norm inequality. There are $2^{2j}-1$ terms, not the book's printed $2j-1$. [F1, F2, F3, step 1.1, algebra, step 4.1]

6.1 Let $D=\operatorname{diag}(YY^*)\to I$, $E=\operatorname{diag}(Y^*Y)\to yI$ in norm. Let $B_j$ be the restricted product of length $2j-1$ starting with $Y^*$ and alternating thereafter. For $j\ge2$, the deterministic restricted-product identity above gives $$T_j=YB_j-DT_{j-1}+Y^{[3]}\odot Y^*\odot\cdots\odot Y^*=YB_j-T_{j-1}+o(1).$$ [F1, F2, F3, step 1.1, algebra, step 5.1]

7.1 For $j=1$, $YB_1=T_1+D=T_1+T_0+o(1)$, so the unified relation is $YB_j=T_j+T_{j-1}+o(1)$ for all $j\ge1$. Similarly $$B_{j+1}=Y^*T_j-EB_j+(Y^{[3]})^*\odot Y\odot\cdots\odot Y^*.$$ [F1, F2, F3, step 1.1, algebra, step 6.1]

8.1 For $j=1$ the final correction is simply $(Y^{[3]})^*$, which is $o(1)$; this case must not be silently omitted. All restricted products have fixed length and bounded norm; the fused corrections vanish by the estimates above. Therefore $$T_{j+1}=YB_{j+1}-DT_j+o(1)=(YY^*-D)T_j-yYB_j+o(1)=TT_j-yT_j-yT_{j-1}+o(1).$$ [F1, F2, F3, step 1.1, algebra, step 7.1]

9.1 Errors are in operator norm, for each fixed $j$. The recurrence holds with $T_0=I$ and includes $j=1$. [F1, F2, F3, step 1.1, algebra, step 8.1]

10.1 Put $H=T-yI$. Define $P_0(z)=1$, $P_1(z)=z+y$, and $P_{j+1}(z)=zP_j(z)-yP_{j-1}(z)$. Since $\|H\|=O(1)$, induction in the recurrence gives $T_j=P_j(H)+o(1)$ for each fixed $j$. Explicitly $$P_j(z)=y^{j/2}\left[U_j\left(\frac z{2\sqrt y}\right)+\sqrt y\,U_{j-1}\left(\frac z{2\sqrt y}\right)\right],$$ where $U_{-1}=0$, $U_0=1$, $U_{j+1}(t)=2tU_j(t)-U_{j-1}(t)$. This explicit formula follows immediately by checking the two initial values and recurrence. [F1, F2, F3, step 1.1, algebra, step 9.1]

11.1 For real $|t|\ge1+\epsilon$, write $|t|=\cosh a$ and $\rho=e^a>1$. The recurrence directly gives $U_j(\cosh a)=\sinh((j+1)a)/\sinh a$ and $U_j(-t)=(-1)^jU_j(t)$. Hence $|U_j(t)|\ge\rho^j$ and $|U_{j-1}(t)|/|U_j(t)|\le\rho^{-1}$, the last inequality following from $\sinh(ja)/\sinh((j+1)a)<e^{-a}$. Therefore $|U_j(t)+\sqrt yU_{j-1}(t)|\ge(1-\sqrt y/\rho)\rho^j\ge(1-\rho^{-1})\rho^j$. This is strictly positive uniformly for $|t|\ge1+\epsilon$, including $y=1$. If $\|H\|>2\sqrt y+\epsilon$ infinitely often, the finite-dimensional spectral theorem and spectral mapping for a polynomial give, for every fixed $j$, $y^{j/2}(1-\rho_\epsilon^{-1})\rho_\epsilon^j\le\limsup\|P_j(H)\|\le(2j+1)(j+1)y^{(j-1)/2}$ with a fixed $\rho_\epsilon>1$. [F1, F2, F3, step 1.1, algebra, step 10.1]

12.1 The inequality in step 11.1 is impossible for all positive integers $j$: after dividing by $y^{j/2}$, its left side grows exponentially in $j$ while the right side is the polynomial $(2j+1)(j+1)y^{-1/2}$. Thus almost surely $\limsup_h\|H\|\le2\sqrt y$. Since $YY^{\mathsf T}-(1+y)I-H=D-I\to0$, the centered matrices satisfy the stated confinement. All fixed-$j$ estimates hold simultaneously by intersecting countably many probability-one events. [F2, F3, step 10.1, step 11.1, algebra]

13.1 Let $A_h$ denote the original oriented upper-left block divided by $\sqrt{N_h}$. F1 gives $\|A_h-Y_h\|\to0$ through eventual truncation equality and the explicit constant-mean norm, while F2 gives $\|Y_h\|=O(1)$ and hence $\|A_h\|=O(1)$. Thus $\|A_hA_h^{\mathsf T}-Y_hY_h^{\mathsf T}\|\le(\|A_h\|+\|Y_h\|)\|A_h-Y_h\|\to0$. The proved centered confinement therefore passes to the original matrices. Since the argument allowed $y_h=1$ and orientation changes, it includes the square-aspect boundary. [F1, F2, algebra, step 12.1] ∎
