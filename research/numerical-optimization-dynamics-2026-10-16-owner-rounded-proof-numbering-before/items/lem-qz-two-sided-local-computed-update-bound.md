---
id: lem-qz-two-sided-local-computed-update-bound
kind: lemma
title: Common computed Givens actions certify both pencil matrices and factor residuals
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- alg-scaled-complex-householder-and-givens-updates
- lem-scaled-complex-householder-and-givens-local-backward-error
- lem-rounded-linear-and-normal-residual-certificates
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: 'Daniel Kressner, Numerical Methods and Software for General and Structured
      Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §2.3'
    url: https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf
  - title: LAPACK Users' Guide, Error Bounds for the Generalized Nonsymmetric Eigenproblem
    url: https://www.netlib.org/lapack/lug/node102.html
dependency_level: 3
---

## Statement

Use the successful real/complex Givens arithmetic of
[[alg-scaled-complex-householder-and-givens-updates]], with $0<u<1$.
For a matrix pair write $P(C,D)=(\|C\|_F^2+\|D\|_F^2)^{1/2}$ and put
$$a_2=\frac{1+u}{(1-u)^2}-1,\qquad q=\max\left\{\left(\frac{1+u}{1-u}\right)^3-1,\frac{(1+a_2)(1+6u)(1+u)}{(1-u)^3}-1\right\},$$
$$v=q+2(7u+6u^2)(1+q),\qquad h=u+2q+v,\qquad \eta=v+h.$$
Generate a single stored block $T_0=\begin{pmatrix}c&s\\-\overline s&c\end{pmatrix}$ from the selected target and use its same coefficients on BOTH matrices. Retain its exact unitary representative $U=T_0/\sqrt{c^2+|s|^2}$ as a factor record. Use the exact identity in the source's zero branch.

A raw common left or right action, without a target overwrite, has pair discrepancy at most $vP(C,D)$ from its exact representative. For an actual matrix target, overwrite only its intended annihilated entry with exact zero; this write has norm at most $h$ times the target pair norm. The complete action therefore satisfies
$$C_+=Q_0^*(C+E^C)Z_0,\qquad D_+=Q_0^*(D+E^D)Z_0,\qquad P(E^C,E^D)\le\ell P(C,D),$$
where $\ell=\eta$ for a target action and $\ell=v$ for a raw action; the unused factor is identity. Zero branches have zero discrepancy. A left action annihilates the second coordinate of a column. To annihilate the FIRST coordinate of a row $r=(a,b)$, let $J=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, generate $U$ from $(rJ)^*=(\overline b,\overline a)^T$, and use the right factor $JU^*J$, applying its stored adjoint/permuted coefficients. For a second-coordinate right target omit $J$. An external shift-vector action has no matrix-target overwrite. Grouped left/right coefficients $\ell_L,\ell_R$ compose to $\ell_L+\ell_R+\ell_L\ell_R$.

Post-action zero writes are pulled back by the exact local factor adjoints before they enter a pre-action perturbation ledger. Structural writes may be included in $E$ with $\eta$, or separately recorded with raw coefficient $v$ and write allowance $h$, never both. Tolerance deflations remain separate exact perturbations, without an $O(u)$ assertion.

There is also a concrete residual certificate for represented products $Q=Q_1\cdots Q_m$, $Z=Z_1\cdots Z_m$. Apply stored raw right-factor kernels to $e_k$ in reverse order to approximate $Ze_k$; apply stored raw adjoint left-factor kernels in order $Q_1^*,\ldots,Q_m^*$ to approximate $Q^*$ action. Omit all structural overwrites in these vector actions. For a stored current vector $y$ and discrepancy allowance $e$, propagate
$$e_{\rm next}=e+v\|y\|_2.$$
With $\widehat z\approx Ze_k$ and allowance $e_z$, compute $\widehat a=\operatorname{fl}(A\widehat z)$ by sequential stored-input dot products. When $(n-1)u<1$, its allowance relative to $AZe_k$ is
$$e_a=g_n\|A\|_F\|\widehat z\|_2+\|A\|_F e_z,\qquad g_n=\frac{1+6u}{1-(n-1)u}-1.$$
Propagate through the $Q^*$ kernels, obtaining $\widehat w,e_w$, then form $\widehat r_k=\operatorname{fl}(\widehat w-S_{:k})$ with allowance
$$e_k=e_w+u(\|\widehat w\|_2+\|S_{:k}\|_2).$$
Thus $\|Q^*AZ-S\|_F\le\sum_{k=1}^n(\|\widehat r_k\|_2+e_k)$; repeat with $B,T$.
All these norms may be replaced by the component sum $\sum(|\Re x|+|\Im x|)$ over the relevant vector/matrix. These conservative certificates use only finite exact real field operations and comparisons on stored inputs, $u$, and the finite factor list, and have exact rational implementations for rational/binary inputs and rational $u$. The controller uses the displayed finite expression trees and loops, with no square root or untyped certification oracle. Their failure hypotheses make this independent residual route inconclusive; they do not invalidate a separately valid local-accumulation certificate.

## Facts & Assumptions

**Given:** Successful source arithmetic, including normal nonzero exact intermediates and admissible stored basis constants $0,1$ for residual evaluation. All controller arithmetic is exact, separate from rounded matrix/vector updates.

[F1] [[alg-scaled-complex-householder-and-givens-updates]] fixes the stored Givens generator, two-product/one-addition application, exact conjugations and target writes.

[F2] [[lem-scaled-complex-householder-and-givens-local-backward-error]] proves the unitary representative, raw application coefficient $q+\sqrt2(7u+6u^2)(1+q)$ and target-write bound $u+2q$ plus that raw coefficient.

[F3] [[lem-rounded-linear-and-normal-residual-certificates]] bounds successful sequential stored-input matrix-vector products by $g_n\|A\|_F\|x\|_2$, and final componentwise subtraction by $u(\|y\|_2+\|s\|_2)$.

## Proof

1.1 Replacing $\sqrt2$ by $2$ enlarges the source's raw coefficient to $v$ and its raw intended-zero bound to $h$. Apply the raw bound separately to $C,D$, square and add: the common action's pair discrepancy is at most $vP(C,D)$. The one actual target write has norm at most $h$ times its two-entry target norm, hence at most $hP(C,D)$. The triangle inequality gives $\eta P(C,D)$. This uses one generated factor for both arrays; no similarity relation between $C,D$ is assumed. [given, F1, F2, algebra]

1.2 Permutations and conjugate transposes preserve Euclidean/Frobenius norms and use exact copies of stored coefficients. Write $U(rJ)^*=(\rho,\epsilon)^T$ for the normalized rounded representative, without assuming $\epsilon=0$. Conjugate transposition and multiplication by $J$ give $rJU^*J=(\overline\epsilon,\overline\rho)$. The source intended-zero allowance bounds $|\epsilon|$ by $(u+2q)\|r\|_2$; the rounded right application contributes at most $v\|r\|_2$, so its first-coordinate overwrite has the inherited bound $h\|r\|_2$ of step 1.1. For a second-coordinate right target write $Ur^*=(\rho,\epsilon)^T$, giving $rU^*=(\overline\rho,\overline\epsilon)$ and the same bound on that target. Thus the stated orientations select the correct coordinate without asserting exact annihilation by the normalized rounded representative. An external vector chooses a unitary but does not license any matrix zero assignment. [F1, F2, step 1.1, algebra]

1.3 Write the computed pair as $Q_0^*(C,D)Z_0+F$ in post-action coordinates. Define $E=Q_0FZ_0^*$ componentwise. Unitarity gives the stated update and preserves the pair norm. Pull a separately recorded post-action write back in the same way; its saved entry and factors specify it exactly. For two consecutive actions the intermediate pair norm is at most $(1+\ell_L)P(C,D)$, so the sum of their pulled-back errors is at most $[\ell_L+\ell_R(1+\ell_L)]P(C,D)$. Pure deflation uses identity factors. [step 1.1, step 1.2, algebra, construct]

2.1 If $y$ differs from the exact current vector by at most $e$, the next raw action differs from the corresponding exact unitary action on $y$ by at most $v\|y\|_2$. That exact unitary preserves the preceding discrepancy, proving the recurrence. Rightmost factors act first in a matrix product, which gives the specified orders for $Ze_k$ and $Q^*$ action. Adjoints and reversals inherit the raw bound from step 1.2. [given, F1, F2, step 1.2, algebra]

2.2 Apply [F3] to the STORED vector $\widehat z$, then transport $\widehat z-Ze_k$ through $A$ using $\|A\|_2\le\|A\|_F$. Step 2.1 propagates this discrepancy through $Q^*$. The final subtraction allowance in [F3] gives $e_k$. Each exact residual column is therefore bounded by $\|\widehat r_k\|_2+e_k$; the square root of the sum of their squares is at most their sum. This proves the residual certificate without using nonstored normalized factor entries as floating inputs. [F3, step 2.1, algebra]

2.3 For any finite complex array, its Frobenius/Euclidean norm is at most the sum of absolute real and imaginary components, by squaring and the nonnegative cross terms. These sums and the rational constants $v,h,\eta,g_n$ use only finite field operations, absolute-value comparisons and the prescribed finite loops. Every denominator is positive under the stated hypotheses. Exact rational arithmetic realizes these instructions for rational stored data; no bit-cost bound is asserted. If an excluded rounded operation or dimension hypothesis fails, that evaluation produces no certificate, as specified. [given, step 1.1, step 2.2, algebra] ∎
