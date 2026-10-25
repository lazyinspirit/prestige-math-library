---
id: lem-qftx-positive-real-monad-internal-positivity
kind: lemma
title: Positivity of the internal Hermitian form
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
  - lem-qftx-positive-real-monad-analytic-twist-cohomology
  - lem-qftx-positive-real-monad-flat-splitting
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
  lem-qftx-positive-real-monad-analytic-twist-cohomology: mathematical-premise
  lem-qftx-positive-real-monad-flat-splitting: mathematical-premise
axiom_base: "ZF + full AC inherited through the analytic scalar-cohomology input; the finite Hermitian matrix calculation is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J.-L. Verdier, Exposé VII, Astérisque 71–72"
      url: https://numdam.org/item/AST_1980__71-72__1_0.pdf
      locator: "Exposé VII, Lemma 6.10, Proposition 6.11, and proof 6.13–6.18, printed pp. 125–130. Comparison context for finite Hermitian positivity; the proof below instead supplies a local inverse-Gram Laplacian and elementary minimum-principle argument in the stated sigma-Hermitian convention."
    - title: "W. Barth and K. Hulek, Monads and Moduli of Vector Bundles"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf
      locator: "Section 4, Propositions 5–6, printed pp. 333–334: bilinear self-dual monads and uniqueness under their explicit Hom vanishings; no positive sigma-Hermitian conclusion is imported."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $M$ be the coefficient-image subspace of a linear monad on $\mathbb P^3(\mathbb C)$ after removing its constant orthogonal summand as in the preceding splitting lemma. Thus its reduced middle cohomology has no global sections, is trivial on every $\sigma$-invariant real line, and has a positive section pairing on each such line. Let $H$ be the induced nondegenerate Hermitian form on $M$, linear in the first variable, and suppose $\beta(z)=\alpha(jz)^\dagger H$ and $\beta(z)\alpha(z)=0$ for every $z\in\mathbb C^4$, with $j^2=-1$. Then $H$ is positive definite on all of $M$.

## Statement references

[[lem-qftx-positive-real-monad-flat-splitting]]

[Verdier, Exposé VII, Lemma 6.10 and Proposition 6.11](https://numdam.org/item/AST_1980__71-72__1_0.pdf)

## Facts & Assumptions

**Given:** The reduced monad and its pairing as stated.

[A1] AC is inherited through the analytic sheaf-cohomology supplier. [[def-axiom-of-choice]]

[F1] The reduced splitting has $H^0(F_M)=0$, is trivial and positive on each real line, and retains a nondegenerate middle Hermitian form. [[lem-qftx-positive-real-monad-flat-splitting]]

[F2] The analytic hyperplane calculation supplies $H^0(\mathbb P^1,\mathcal O(-1))=0$. [[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[F3] The bundle and Hermitian conventions are locally trivial holomorphic bundles with first-slot-linear Hermitian pairings. [[def-complex-manifolds-and-holomorphic-vector-bundles]]

[F4] Under full AC, the analytic scalar projective-cohomology theorem gives $H^0(\mathbb P^1,\mathcal O)=\mathbb C$; hence every global holomorphic section of the trivial bundle $\mathcal O_{\mathbb P^1}^{\oplus N}$ is a constant vector. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

## Proof

**Given:** Let $S=M$ and let $U$ be the source coefficient space, using the normalized end-space identification in $\beta(z)=\alpha(jz)^\dagger H$. Daggers denote conjugate transposes in fixed coefficient bases.

1.1 Fix $z\ne0$ and write $A_z=\alpha(z)$, $B_z=\alpha(jz)$. On the real line spanned by $z,jz$, its linear coordinate $(a,b)$ gives $\alpha(a,b)=aA_z+bB_z$ and $\beta(a,b)=aB_z^\dagger H-bA_z^\dagger H$. Expanding $\beta(a,b)\alpha(a,b)=0$ in $a,b$ gives $A_z^\dagger HB_z=B_z^\dagger HA_z=0$ and $A_z^\dagger HA_z=B_z^\dagger HB_z=:G_z$. The matrix $G_z$ is invertible: if $G_zv=0$ for $v\ne0$, injectivity of $A_z$ gives $A_zv\ne0$, while $\beta(a,b)A_zv=0$ for every $(a,b)$. Its class is a global section of the holomorphically trivial bundle $F_M|_\ell$ vanishing at $(1,0)$. In a trivialization its components lie in $H^0(\mathbb P^1,\mathcal O)=\mathbb C$ by [F4], so the section is identically zero. Exactness of the restricted monad then puts the constant $A_zv$ in the image of $H^0(U\otimes\mathcal O_\ell(-1))=0$, a contradiction by [F2]. [A1, F1, F2, F3, F4, algebra]

2.1 By step 1.1, the two images $\operatorname{im}A_z$ and $\operatorname{im}B_z$ are nondegenerate and $H$-orthogonal. Their orthogonal complement $$E_z=\ker(A_z^\dagger H)\cap\ker(B_z^\dagger H)$$ is the section space of $F_M|_\ell$: in bases given by $A_z,B_z$ and $G_z^{-1}$, the first two summands form copies of the exact Euler complex $\mathcal O(-1)\to\mathcal O^2\to\mathcal O(1)$, and the remaining summand is $E_z\otimes\mathcal O$. Thus $H|_{E_z}$ is positive by [F1]. [F1, step 1.1, algebra]

3.1 Use the constant Hermitian matrix $H$ on $S=M$ for the following positivity calculation. Put $z_1=x_1+ix_2$, $z_2=x_3+ix_4$ and $$a(x)=\alpha(1,0,z_1,z_2)=a_0+z_1M_1+z_2M_2,\qquad b(x)=\alpha(0,1,-\bar z_2,\bar z_1)=b_0-\bar z_2M_1+\bar z_1M_2.$$ The two arguments are $z,jz$ in the stated coordinate convention. Step 1.1 gives $$a^\dagger Ha=b^\dagger Hb=A(x),\qquad a^\dagger Hb=0,$$ with $A(x)$ invertible for every $x$. Apply the same identities on the infinity line with $z=(0,0,1,0)$ and $jz=(0,0,0,1)$ to obtain $$M_1^\dagger HM_1=M_2^\dagger HM_2=C,\qquad M_1^\dagger HM_2=0,$$ where $C$ is invertible. Neither $A(x)$ nor $C$ is yet assumed positive. Let $K=A^{-1}$ and $$Q=1-aKa^\dagger H-bKb^\dagger H.$$ The Gram identities imply $Q^2=Q$ and $Q^\dagger H=HQ$; its range is precisely the real-line section complement $E_z$ in step 2.1. Thus $y^\dagger HQy=(Qy)^\dagger H(Qy)\ge0$ for every $y$, by the actual induced section pairing there. This identification uses the lifted identity $\beta=\alpha(jz)^\dagger H$ and the Euler-complex decomposition of step 2.1; it is not an extra assumption of positivity of $H$ on the coefficient images. [given, F1, step 1.1, step 2.1, algebra]

4.1 Put $P=a^\dagger HM_1$ and $R=a^\dagger HM_2$. Differentiating $a^\dagger Hb=0$ in $x_1,x_3$ gives $a^\dagger HM_2=-M_1^\dagger Hb$ and $a^\dagger HM_1=M_2^\dagger Hb$, hence $b^\dagger HM_1=-R^\dagger$ and $b^\dagger HM_2=P^\dagger$. Since $a_\mu=(M_1,iM_1,M_2,iM_2)$, the derivatives of $A$ are $$A_1=P+P^\dagger,\quad A_2=iP-iP^\dagger,\quad A_3=R+R^\dagger,\quad A_4=iR-iR^\dagger.$$ Pairing the real and imaginary derivatives, with the matrix order retained, gives $$\sum_\mu A_\mu K A_\mu =2(PKP^\dagger+P^\dagger KP+RKR^\dagger+R^\dagger KR) =\sum_\mu a_\mu^\dagger H(1-Q)a_\mu.$$ The second equality follows by substituting $1-Q=aKa^\dagger H+bKb^\dagger H$ and the displayed formulas for $b^\dagger HM_i$. As $\sum_\mu a_\mu^\dagger Ha_\mu=4C$, set $$D=\sum_\mu a_\mu^\dagger HQa_\mu =\sum_\mu(Qa_\mu)^\dagger H(Qa_\mu)\succeq0; \qquad \sum_\mu A_\mu K A_\mu=4C-D.$$ Also $\Delta A=2\sum_\mu a_\mu^\dagger Ha_\mu=8C$. Differentiating $AK=1$ twice therefore yields $$\Delta K=2K\Big(\sum_\mu A_\mu K A_\mu\Big)K-K(\Delta A)K =-2KDK\preceq0.$$ This last inequality is congruence by the Hermitian matrix $K$, and does not assume its positivity. Thus for every constant $v\in U$, $f_v(x)=v^\dagger K(x)v$ is a real smooth function with $\Delta f_v\le0$ on all of $\mathbb R^4$. [step 3.1, algebra]

5.1 Expanding the Gram gives $A(x)=|x|^2C+O(|x|)$ uniformly in direction. Since $C$ is invertible, writing $A=r^2(C+E_r)$ with $\|E_r\|=O(r^{-1})$ and using the convergent geometric series for $(1+C^{-1}E_r)^{-1}$ proves $\|K(x)\|\le2\|C^{-1}\|r^{-2}$ for all sufficiently large $r$. In particular $f_v$ tends uniformly to zero at infinity. On a closed ball of radius $R$, the function $f_v-\delta|x|^2$ has strictly negative Laplacian for $\delta>0$ and cannot attain a minimum in the interior, where its real Hessian would be positive semidefinite. Hence $f_v(x)\ge\min_{|y|=R}f_v(y)-\delta R^2$. First let $\delta\downarrow0$, then let $R\to\infty$ with $x$ fixed. The uniform decay proves $f_v(x)\ge0$. Thus $K$ is positive semidefinite; being Hermitian and invertible, it is positive definite, as is $A$. At any fixed $x$, the $H$-orthogonal direct decomposition $$S=\operatorname{im}a\oplus\operatorname{im}b\oplus\operatorname{range}Q$$ has positive Gram $A$ on its first two summands and the positive section form of step 2.1 on the third. Therefore $H$ is positive definite. If $U=0$, $Q=1$ and the section positivity already gives this conclusion directly; no inverse of a nonzero-dimensional Gram is needed. The preceding splitting lemma retains the positive constant flat summand separately. This proves the stated arbitrary-rank claim without assuming a sign for the infinity Gram matrix $C$. [F1, step 2.1, step 3.1, step 4.1, algebra] ∎
