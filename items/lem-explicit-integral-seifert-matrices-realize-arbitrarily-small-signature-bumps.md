---
id: lem-explicit-integral-seifert-matrices-realize-arbitrarily-small-signature-bumps
kind: lemma
title: Explicit integral Seifert matrices with arbitrarily small signature bumps
status: published
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cha and Livingston, Knot signature functions are independent
      url: https://arxiv.org/pdf/math/0208225v3
      locator: Proof of Theorem1, polynomial construction on printed pages2–3
    - title: Cha, Structure of the string link concordance group and Hirzebruch-type
        invariants
      url: https://arxiv.org/pdf/0709.2968
      locator: Lemma5.6, signature bump
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

For every $0<\theta_0<\pi$ and every open interval $I\subset(0,\pi)$ containing $\theta_0$, there is an explicit integral $8\times8$ matrix $V$ with $\det(V-V^T)=1$ such that the finite Hermitian matrix
$$H_\theta(V)=(1-e^{i\theta})V+(1-e^{-i\theta})V^T$$
has signature $2$ at $\theta_0$ and signature zero for all $\theta\in[0,\pi]\setminus I$. Its signature takes only the values $0,1,2$ on $[0,\pi]$ and is invariant under $\theta\mapsto-\theta$. Moreover, its signature equals $2$ throughout an open interval containing $\theta_0$. No choice principle, classification of Seifert forms, realization by a knot, or infinite-dimensional spectral theorem is assumed.

## Facts & Assumptions

**Given:** The real parameter $\theta_0$ and containing open interval $I$.

[F1] All matrices below are finite. For a finite Hermitian matrix, signature is its number of positive eigenvalues minus its number of negative eigenvalues, counted with multiplicity. Equivalently these are the positive and negative inertia indices of its Hermitian form. Invertible congruence preserves these indices by sending definite subspaces bijectively to definite subspaces; a block-diagonal sum adds them.

## Proof

1.1 The finite inertia calculations used below require no spectral theorem for an infinite-dimensional space. A nonzero Hermitian form on $\mathbb C^n$ has a vector with nonzero real value: if its diagonal values on the coordinate vectors all vanish, a nonzero off-diagonal entry is detected by a sum $e_i+e_j$ or $e_i+i e_j$. Split off the line of such a vector by subtracting its orthogonal projection, and repeat in the orthogonal complement. Finite induction gives a diagonal form with positive, negative and zero entries. If there are $p$ positive entries, the positive coordinate subspace has dimension $p$, and any subspace of dimension greater than $p$ meets the span of the nonpositive coordinates, so cannot be positive definite. Thus $p$ is the maximal positive dimension; the same argument gives the maximal negative dimension. Congruence preserves these maxima by an invertible change of coordinates, and the diagonal description proves additivity under block sum and sign reversal under negation. For a Hermitian $2\times2$ matrix, its real eigenvalues are $(\operatorname{tr}C\pm\sqrt{(C_{11}-C_{22})^2+4|C_{12}|^2})/2$; their product is its determinant. Hence the trace/determinant tests used below follow explicitly. Every splitting is within a fixed finite-dimensional space. [F1, construct, algebra]

1.2 For integers $b>0$ and $a$, put $w=a-b$, $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $B=\begin{pmatrix}1&w\\w&w^2+b\end{pmatrix}$ and $V(a,b)=\begin{pmatrix}A&I_2\\0&B\end{pmatrix}$. Both diagonal blocks are integral and symmetric, so $V(a,b)-V(a,b)^T=\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix}$ has determinant one. Also $B$ is positive definite: its real quadratic form is $(x+wy)^2+b y^2$, and the same expression with absolute squares works over $\mathbb C$. Its determinant is $b$ and its trace is positive. All these assertions follow directly from the displayed matrices. [given, construct, algebra]

2.1 For $0<\theta\le\pi$ write $c=1-e^{i\theta}$ and $h=2-2\cos\theta>0$, so $|c|^2=h$. The Hermitian matrix of $V(a,b)$ is $\begin{pmatrix}hA&cI_2\\\bar cI_2&hB\end{pmatrix}$. Subtracting the appropriate multiple of the lower block from the upper block, and the conjugate multiple of its column, is an invertible block congruence to $(hA-B^{-1})\oplus hB$. Its second block contributes signature two. Put $C=hA-B^{-1}$. Since $\operatorname{tr}A=0$ and $B^{-1}$ is positive definite, $\operatorname{tr}C=-\operatorname{tr}B^{-1}<0$. Direct determinant expansion, using $\operatorname{tr}(BA)=2w$ and $\det(BA)=-b$, gives $$\det C=b^{-1}\det(hBA-I_2)=b^{-1}(1-2wh-bh^2).$$ The polynomial has exactly one positive root $$s(a,b)=\frac{-w+\sqrt{w^2+b}}b.$$ For $0<h<s(a,b)$ its determinant is positive and its trace negative, so its two real eigenvalues are negative. At $h=s(a,b)$ it has one negative and one zero eigenvalue. For $h>s(a,b)$ its determinant is negative, so it has one positive and one negative eigenvalue. The signature of $H_\theta(V(a,b))$ is consequently $0,1,2$ in those three cases, respectively. At $\theta=0$ the Hermitian matrix is zero and its signature is zero. [F1, step 1.1, step 1.2, construct, algebra]

3.1 The positive thresholds $s(a,b)$ are dense in $(0,4)$. Indeed fix $r\in(-1,1)$ and set $a_b=\lfloor br\rfloor$ for positive integers $b$. For all sufficiently large $b$, $a_b/b<1$; put $d_b=1-a_b/b>0$. Then $$s(a_b,b)=d_b+\sqrt{d_b^2+1/b},\qquad |s(a_b,b)-2(1-r)|\le2/b+1/\sqrt b.$$ Here $|a_b/b-r|\le1/b$ and $0\le\sqrt{d_b^2+1/b}-d_b\le1/\sqrt b$, which prove the bound. For any desired positive tolerance a sufficiently large integer makes its right side smaller than that tolerance. Given any target in $(0,4)$, take $r$ to be one minus half the target; the explicit floor formula then supplies thresholds arbitrarily close to it. This is a sequence defined by a formula, without selecting any infinite family of witnesses. [step 2.1, construct, algebra]

4.1 The function $h(\theta)=2-2\cos\theta$ is continuous and strictly increasing from $0$ to $4$ on $[0,\pi]$: its derivative is $2\sin\theta>0$ in the interior. Choose two real angles $\alpha<\theta_0<\beta$ in $I$ and small disjoint open intervals around them whose closures are contained respectively in $I\cap(0,\theta_0)$ and $I\cap(\theta_0,\pi)$. Their $h$ images are nonempty intervals in $(0,4)$. Step 3.1 supplies a pair $(a_-,b_-)$ with threshold in the first image and a pair $(a_+,b_+)$ with threshold in the second. If desired these finite witnesses can be specified by enumerating integer pairs by increasing $|a|+b$ and then increasing $a$ and taking the first pair whose explicit threshold is in the relevant interval. Thus the corresponding unique crossing angles satisfy $\theta_-<\theta_0<\theta_+$ and lie in $I$. [given, step 3.1, construct, algebra]

5.1 Define $V=V(a_-,b_-)\oplus(-V(a_+,b_+))$. Each skew block has determinant one, also after negation, so $\det(V-V^T)=1$. Its Hermitian signature is the difference of the two signatures in step 2.1. Since the thresholds are ordered, it is zero below $\theta_-$, one at $\theta_-$, two on $(\theta_-,\theta_+)$, one at $\theta_+$ and zero above $\theta_+$. It is also zero at zero. This proves all claims on $[0,\pi]$, including nonzero value at $\theta_0$ and vanishing off $I$. Finally $V$ is real, so $H_{-\theta}(V)=\overline{H_\theta(V)}$; conjugation preserves the real eigenvalues and their multiplicities, proving symmetry. The only constructions were finite matrices, explicit integer formulas and two individual integer witnesses. Thus no choice or realization theorem has been used. [F1, step 1.1, step 1.2, step 2.1, step 4.1, algebra] ∎

## Remarks

This is the matrix prerequisite for a knot signature bump. Passing to an actual knot requires a proved finite geometric realization with compatible positive-push convention; that conclusion is not part of this lemma.
