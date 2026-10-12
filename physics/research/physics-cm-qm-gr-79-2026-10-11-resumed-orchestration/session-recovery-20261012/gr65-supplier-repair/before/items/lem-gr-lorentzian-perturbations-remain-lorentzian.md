---
id: lem-gr-lorentzian-perturbations-remain-lorentzian
kind: lemma
title: "Lorentzian metrics are stable under small compactly supported symmetric perturbations"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-lorentz-form-and-inertia, lem-lorentz-form-has-orthonormal-basis, thm-sylvesters-law-of-inertia, thm-gram-schmidt-orthonormalisation, def-smooth-manifold, thm-heine-borel-rn, def-continuity-real]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  def-smooth-manifold: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2: the classification of quadratic forms and the canonical form of the metric at a point, printed pp. 48-51 (PDF pp. 55-58)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1: the signature of a Lorentzian metric and the local normal form, printed pp. 25-28 (PDF pp. 26-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), so that at every $p\in M$ the form
$g_p$ has inertia $(3,1,0)$, and let $h$ be a smooth symmetric covariant
$2$-tensor field on $M$ ([[def-gr-smooth-covariant-two-tensor-field]]) whose
support is compact.

**(a) Pointwise openness.** Let $V$ be a real vector space of dimension $4$
and let $G$ be a symmetric bilinear form on $V$ of inertia $(3,1,0)$
([[def-lorentz-form-and-inertia]]). If in some basis of $V$ the matrix of $G$
has the form $\operatorname{diag}(-1,1,1,1)+E$, then $G$ has inertia $(3,1,0)$
whenever $|E_{ij}|<1/8$ for all $i,j$. Consequently, for every basis the set
of matrices of symmetric forms of inertia $(3,1,0)$ is open in the space
$M_4^{\mathrm{sym}}(\mathbb R)$ with respect to the maximum-entry norm, and
equivalently $g_p$ has a neighborhood in the space of symmetric forms at $p$
consisting entirely of forms of inertia $(3,1,0)$.

**(b) Global stability.** There is $\lambda_0>0$ such that for every real
$\lambda$ with $|\lambda|<\lambda_0$ the smooth symmetric field $g+\lambda h$
is a smooth Lorentzian metric on $M$ of signature $(-,+,+,+)$, with
time orientation inherited from $N$ (the field $N$ remains timelike for
$g+\lambda h$ for $|\lambda|$ small).

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and a smooth symmetric compactly supported $2$-tensor field $h$.

[L1] At every $p\in M$ the form $g_p$ has inertia $(3,1,0)$: in some basis its matrix is $\operatorname{diag}(-1,1,1,1)$ ([[def-gr-smooth-lorentzian-objects]], [[lem-lorentz-form-has-orthonormal-basis]], [[def-lorentz-form-and-inertia]]).

[L2] Congruent symmetric forms have the same inertia; the inertia of a form that is positive definite on a subspace $W$ and negative on a vector $u$ is read off by completing the square ([[thm-sylvesters-law-of-inertia]]).

[L3] A positive definite form on a subspace has an orthonormal basis, by Gram–Schmidt applied in that subspace ([[thm-gram-schmidt-orthonormalisation]]).

[L4] $h$ is smooth hence continuous with compact support $K$; in charts, the component functions of $g$ and $h$ are continuous on compact sets, and finitely many charts cover $K$ since $K$ is compact ([[def-smooth-manifold]], [[def-continuity-real]], [[def-gr-smooth-covariant-two-tensor-field]]).

## Proof

**Proof technique:** direct; bound the perturbation in a normal form, read the inertia from a subspace and a vector, then make the pointwise bound uniform over the compact support in finitely many charts.

1.1 (Positive and negative directions.) Let $B$ be the symmetric form with matrix $D+E$, $D=\operatorname{diag}(-1,1,1,1)$, in a basis $e_0,e_1,e_2,e_3$ and suppose $|E_{ij}|<1/8$ for all $i,j$. For $w=\sum_{i=1}^3w_ie_i\neq0$, writing $|w|^2=\sum w_i^2$ and using $(|w_1|+|w_2|+|w_3|)^2\le3|w|^2$, $$B(w,w)=|w|^2+E(w,w)\ge|w|^2-\max_{i,j}|E_{ij}|\Bigl(\sum_{i=1}^3|w_i|\Bigr)^2\ge|w|^2-3\cdot\tfrac18|w|^2>0 .$$ Also $B(e_0,e_0)=-1+E_{00}<0$. [algebra]

2.1 (Inertia from the two directions.) Let $(w_1,w_2,w_3)$ be a $B$-orthonormal basis of $W=\operatorname{span}(e_1,e_2,e_3)$, which exists by [L3] because $B$ is positive definite there by step 1.1; write $u:=e_0$ and $\beta_i:=B(u,w_i)$. In the basis $(u,w_1,w_2,w_3)$ the matrix of $B$ is $\begin{pmatrix}B(u,u)&\beta^{\mathsf T}\\ \beta&I_3\end{pmatrix}$, and the congruence with the invertible lower triangular matrix $\begin{pmatrix}1&0\\-\beta&I_3\end{pmatrix}$ transforms it into $\operatorname{diag}\bigl(B(u,u)-\beta^{\mathsf T}\beta,I_3\bigr)$: expanding the product gives $B(u,w_j)-\beta_j=0$ in the off-diagonal block and $I_3$ in the lower block. Since $\beta^{\mathsf T}\beta\ge0$ and $B(u,u)<0$, the first diagonal entry is strictly negative; by Sylvester's law [L2] the inertia of $B$ is $(3,1,0)$. [step 1.1, L2, L3, algebra]

3.1 (Pointwise openness.) Every symmetric form whose matrix in the basis $e$ is within maximum-entry distance $1/8$ of $D$ has inertia $(3,1,0)$ by steps 1.1 and 2.1. Given any symmetric form $G$ of inertia $(3,1,0)$ on $V$, [L1] supplies a basis in which its matrix is $D$; applying the previous sentence in that basis shows the set of such matrices is open around the matrix of $G$ in the maximum-entry norm of that basis. Changing bases multiplies matrices by congruences $P^{\mathsf T}(\cdot)P$ with $P$ invertible, a linear isomorphism of the space of symmetric matrices onto itself; hence openness holds in every basis and, at any $p\in M$, around $g_p$ in the space of symmetric forms at $p$. [step 2.1, L1, L2, algebra]

4.1 (Uniform openness on the support.) Cover the compact set $K=\operatorname{supp}h$ by finitely many chart domains $(U_1,x_1),\dots,(U_m,x_m)$ as in [L4]. For each chart choose a compact subset $K_j\subseteq U_j$ with $K\subseteq\bigcup_jK_j$, and let $G_j(q)$ be the matrix of $g_q$ in the chart $x_j$, continuous on $K_j$. I claim there is $\delta_j>0$ such that every symmetric matrix $B$ with $\max_{i,j}|B_{ij}-G_j(q)_{ij}|<\delta_j$ for some $q\in K_j$ has inertia $(3,1,0)$. Otherwise there are $q_n\in K_j$ and matrices $B_n$ with $\max|B_n-G_j(q_n)|<1/n$ and $B_n$ of inertia different from $(3,1,0)$; passing to a subsequence with $q_n\to q\in K_j$ (compactness, [L4]), continuity gives $B_n\to G_j(q)$, which is a matrix of inertia $(3,1,0)$; but step 3.1 makes a whole maximum-entry neighborhood of $G_j(q)$ consist of such matrices, so $B_n$ has inertia $(3,1,0)$ for large $n$, a contradiction. [step 3.1, L4, algebra]

5.1 (Conclusion.) If $h=0$, equivalently $K=\operatorname{supp}h=\varnothing$, then $g+\lambda h=g$ is a smooth Lorentzian metric with the same time orientation for every $\lambda$, so the conclusion holds with any $\lambda_0>0$; assume henceforth $K\neq\varnothing$. Let $\delta:=\min_j\delta_j>0$, let $M_h:=\max_{q\in K}\max_{i,j}|h_{ij}(q)|$ in the finitely many charts of step 4.1, a finite number because $K\neq\varnothing$ is compact and $h$ is smooth ([[def-gr-smooth-covariant-two-tensor-field]]). For $|\lambda|<\lambda_0:=\delta/(1+M_h)$ and $q\in K$, the matrix of $(g+\lambda h)_q$ differs from that of $g_q$ by $|\lambda||h_{ij}(q)|<\delta$, so it has inertia $(3,1,0)$ by step 4.1; off $K$ the field equals $g$. Hence $g+\lambda h$ is a smooth symmetric nondegenerate field of signature $(-,+,+,+)$ on $M$ for every such $\lambda$. Since $N$ is nowhere zero and $g(N,N)<0$, the same smallness argument applied to the continuous function $q\mapsto g_q(N_q,N_q)$ on $M$ (which is negative and, on the support of $h$, bounded away from $0$; off the support it is unchanged) shows that $N$ remains timelike for $g+\lambda h$ after shrinking $\lambda_0$ if necessary. [step 4.1, L4, algebra] ∎

## Remarks

- **Sharpness.** The lemma is a stability statement only: it does not assert that an arbitrary symmetric perturbation of a Lorentzian metric is Lorentzian, and it gives no uniform bound valid for perturbations with non-compact support or for all amplitudes.

- **Use.** The statement is used to realize prescribed compactly supported symmetric variations of the metric by genuine families of Lorentzian metrics: it supplies the existence step of the Hilbert-tensor uniqueness lemma and of the compact metric-variation theorem on this page.
