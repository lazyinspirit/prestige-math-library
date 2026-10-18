---
id: thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action
kind: theorem
title: "The generic Jordan Hall regular module carries the normalized Heisenberg Fock action"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-hall-algebra-module
  - def-jordan-quiver-nilpotent-representation-category
  - thm-hall-algebra-regular-module
  - thm-generic-jordan-hall-algebra-is-symmetric-functions
  - thm-jordan-hall-pairing-and-hall-littlewood-basis
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - def-heisenberg-lie-algebra
  - lem-heisenberg-bracket-defines-lie-algebra
  - def-hall-inner-product-on-symmetric-functions
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§2.3–2.4"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §4, equation (4.5) and Remark 8"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Statement

Use the category of finite-dimensional nilpotent Jordan-quiver representations from [[def-jordan-quiver-nilpotent-representation-category]]. Let $t$ be an indeterminate, $K=\mathbb Q(t)$, and $H_{J,K}:=H_{\mathrm{gen}}\otimes_{\mathbb Z[t]}K$ be the generic Jordan-quiver Hall algebra extended to $K$. Extend the exact isomorphism
$\Phi_t$ of [[thm-generic-jordan-hall-algebra-is-symmetric-functions]] to
$K$; its regular module is identified with
$\Lambda_K:=K\otimes_{\mathbb Z}\Lambda=K[p_1,p_2,\ldots]$. For a partition
$\lambda$, let $m_r(\lambda)$ be the multiplicity of $r$, set
$p_\lambda=\prod_{r\ge1}p_r^{m_r(\lambda)}$ and
$z_\lambda=\prod_{r\ge1}r^{m_r(\lambda)}m_r(\lambda)!$, and put
$p_\varnothing=1$. Write $\lambda\setminus(n)$ for the partition obtained
by removing one part $n$ when $m_n(\lambda)>0$; define
$m_n(\lambda)p_{\lambda\setminus(n)}=0$ when $m_n(\lambda)=0$. Transport
the Jordan Green pairing of
[[thm-jordan-hall-pairing-and-hall-littlewood-basis]] to $\Lambda_K$. On
power sums it is
$$(p_\lambda,p_\mu)_G=\delta_{\lambda\mu}z_\lambda\prod_i(t^{\lambda_i}-1)^{-1},$$
where $\delta_{\lambda\mu}=1$ if $\lambda=\mu$ and $0$ otherwise, and the
product runs over the parts of $\lambda$ with multiplicity. For $n\ge1$, let
$X_n$ be multiplication by $p_n$ and define
$$X_n^{\dagger,G}p_\lambda=\frac{n\,m_n(\lambda)}{t^n-1}p_{\lambda\setminus(n)},\qquad P_n:=\frac{t^n-1}{n}X_n^{\dagger,G}.$$
Then $X_n^{\dagger,G}$ is the adjoint of $X_n$ for $(\ ,\ )_G$,
$P_n=\partial/\partial p_n$, and for each finite $N\ge1$ the assignments
$X_i\mapsto (p_i\text{-multiplication})$, $P_i\mapsto\partial/\partial p_i$,
and $Z\mapsto\operatorname{id}$ give a representation of the finite
Heisenberg Lie algebra $\mathfrak h_N(K)$ from
[[def-heisenberg-lie-algebra]]. The constant $1$ is the vacuum: $P_n1=0$,
and the vectors $\prod_{i=1}^N X_i^{m_i}1$, with nonnegative integer
exponents, span the subalgebra $K[p_1,\ldots,p_N]$; as $N$ varies, they span
$\Lambda_K$.

## Facts & Assumptions

**Given:** The generic Jordan Hall algebra over $K=\mathbb Q(t)$, the
power-sum basis of $\Lambda_K$, its transported Green pairing, and the finite
Heisenberg Lie algebra.

[F1] [[thm-generic-jordan-hall-algebra-is-symmetric-functions]]: the generic
Hall algebra is a free polynomial algebra and
$\Phi_t(u_{(1^r)})=t^{-r(r-1)/2}e_r$ extends to a graded algebra isomorphism
with the symmetric-function ring.

[F2] [[thm-jordan-hall-pairing-and-hall-littlewood-basis]]: on power sums the
transported Green pairing is diagonal with
$(p_\lambda,p_\mu)_G=\delta_{\lambda\mu}z_\lambda\prod_i(t^{\lambda_i}-1)^{-1}$,
and it is nondegenerate after extension to $K$.

[F3] [[prop-power-sums-form-a-rational-not-integral-stable-basis]]:
$\Lambda_K=K[p_1,p_2,\ldots]$ and the monomials $p_\lambda$ form a basis.

[F4] [[def-heisenberg-lie-algebra]] and
[[lem-heisenberg-bracket-defines-lie-algebra]]: $\mathfrak h_N(K)$ has
generators $X_i,P_i,Z$ with $[P_i,X_j]=\delta_{ij}Z$ and all same-type and
central brackets zero, and these relations define a Lie algebra.

[F5] [[thm-hall-algebra-regular-module]]: a unital associative Hall algebra
acts on its underlying $R$-module by left multiplication.

## Proof

1.1 By [F1] and [F5], scalar extension of the generic Hall algebra acts on its regular module by multiplication; extending the isomorphism [F1] from $\mathbb Z[t,t^{-1}]$ to $K$ identifies this action with multiplication by $p_n$ when the Hall element $\Phi_t^{-1}(p_n)$ acts. Thus $X_n$ is the transported regular action. By [F2]–[F3], the power sums form an orthogonal basis with nonzero norms, since $z_\lambda\ne0$ and $t^r-1\ne0$ in $K$ for every part $r\ge1$. For partitions $\alpha,\beta$, both adjoint pairings vanish unless $\beta$ is obtained by adjoining one part $n$ to $\alpha$; in that case, if $m=m_n(\alpha)$, then $z_\beta=n(m+1)z_\alpha$ and $(X_np_\alpha,p_\beta)_G=(p_\alpha,X_n^{\dagger,G}p_\beta)_G=n(m+1)(t^n-1)^{-1}(p_\alpha,p_\alpha)_G$. Thus the displayed operator is the adjoint on every pair of basis elements, hence on all of $\Lambda_K$. [F1, F2, F3, F5, algebra]

1.2 The formula in the Statement gives $P_np_\lambda=m_n(\lambda)p_{\lambda\setminus(n)}$, the formal derivative $\partial p_\lambda/\partial p_n$ by [F3], with value zero when $m_n(\lambda)=0$. Therefore the $P_n$ commute, the $X_n$ commute, and $P_n1=0$. [F3, algebra]

2.1 For any $m,n\ge1$ and basis monomial $p_\lambda$, the polynomial product rule gives $(P_nX_m-X_mP_n)p_\lambda=\delta_{nm}p_\lambda$. Since the $p_\lambda$ form a basis by [F3], $[P_n,X_m]=\delta_{nm}\operatorname{id}$. Together with the commuting relations of step 1.2 these are precisely the generator brackets in [F4]. [F3, F4, step 1.2, algebra]

3.1 For $1\le i\le N$, send $X_i,P_i,Z$ in $\mathfrak h_N(K)$ to multiplication by $p_i$, $\partial/\partial p_i$, and $\operatorname{id}$, respectively. Step 2.1 and the commuting relations in step 1.2 preserve every defining bracket, so the assignments give a Lie algebra representation. For any nonnegative integers $m_1,\ldots,m_N$, the monomial $p_1^{m_1}\cdots p_N^{m_N}$ is $\prod_{i=1}^N X_i^{m_i}1$; hence these vectors span $K[p_1,\ldots,p_N]$ and, as $N$ varies, generate $\Lambda_K$. [F3, F4, step 1.2, step 2.1] ∎

## Remarks

The adjoint used here is the Jordan **Green pairing** from [F2]. It is not the
ordinary Hall inner product defined in
[[def-hall-inner-product-on-symmetric-functions]], whose power-sum norms are
computed in [[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]. The
scalar normalization of the positive modes accounts for the difference.
