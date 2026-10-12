---
id: lem-gr-constant-curvature-three-manifold-ricci
kind: lemma
title: "Constant-curvature three-manifolds: equivalence of constant sectional curvature, the tensor identity and the Ricci condition"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-spatial-model, def-riemannian-metric-and-riemannian-manifold, def-constant-sectional-curvature-and-space-form, prop-curvature-tensor-of-constant-sectional-curvature, def-sectional-curvature, def-riemann-curvature-four-tensor, def-ricci-curvature, lem-ricci-curvature-is-symmetric-and-basis-independent, def-scalar-curvature, def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature, prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-countable-choice]
dependency_roles:
  def-gr-flrw-spatial-model: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-constant-sectional-curvature-and-space-form: mathematical-premise
  prop-curvature-tensor-of-constant-sectional-curvature: mathematical-premise
  def-sectional-curvature: mathematical-premise
  def-riemann-curvature-four-tensor: mathematical-premise
  def-ricci-curvature: mathematical-premise
  lem-ricci-curvature-is-symmetric-and-basis-independent: mathematical-premise
  def-scalar-curvature: mathematical-premise
  def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature: mathematical-premise
  prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.2)-(8.3): for a maximally symmetric three-metric, (3)R_ijkl = k(gamma_ik gamma_jl - gamma_il gamma_jk) and (3)R_jl = 2k gamma_jl, printed pp. 218-219 (PDF pp. 225-226)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1.1: constant 3-curvature of the homogeneous and isotropic three-spaces and the unified metric, printed pp. 7-9 (PDF pp. 13-15)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 8 (Schur's lemma and the characterization of constant sectional curvature by the curvature-tensor form), printed pp. 148-150"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
    - title: "Ved Datar, Lectures on Riemannian Geometry, Proposition 12.3.1, Lemma 13.1.5, Lemma 13.1.7 and Theorem 13.2.1 (the curvature tensor at constant curvature and the Ricci/Weyl decomposition), printed pp. 86-87 and 91-95"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
verification:
  precheck: pass
---

## Statement

This item assumes $\mathrm{AC}_\omega$ as inherited through
[[def-constant-sectional-curvature-and-space-form]]; the pointwise tensor
arguments below use no further choice principle
([[def-countable-choice]]).

Let $\Sigma$ be a smooth three-manifold and let $\gamma$ be a Riemannian
metric on $\Sigma$ ([[def-riemannian-metric-and-riemannian-manifold]]), with
curvature operator $R$, Riemann four-tensor $\operatorname{Rm}$
([[def-riemann-curvature-four-tensor]]), Ricci curvature
$\operatorname{Ric}$ ([[def-ricci-curvature]]) and scalar curvature $S$
([[def-scalar-curvature]]). Let $k\in\mathbb R$. The following three
statements are equivalent:

**(a)** The metric $\gamma$ has constant sectional curvature $k$: every
tangent two-plane has sectional curvature $k$
([[def-constant-sectional-curvature-and-space-form]],
[[def-sectional-curvature]]).

**(b)** $\operatorname{Ric}(\gamma)=2k\gamma$ at every point of $\Sigma$; that
is, $(\Sigma,\gamma)$ satisfies the curvature condition of a spatial model
datum with normalized curvature parameter $k$
([[def-gr-flrw-spatial-model]]).

**(c)** $R(X,Y)Z=k\bigl(\gamma(Y,Z)X-\gamma(X,Z)Y\bigr)$ for all smooth vector
fields $X,Y,Z$ on $\Sigma$
([[prop-curvature-tensor-of-constant-sectional-curvature]]).

Whenever these hold, the scalar curvature is $S=6k$, and the trace-free Ricci
tensor vanishes, $\operatorname{Ric}_0=0$
([[def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature]]).

## Facts & Assumptions

**Given:** A smooth three-manifold $\Sigma$ with Riemannian metric $\gamma$ and a real number $k$.

[L1] $\gamma$ has constant sectional curvature $k$ if and only if $R(X,Y)Z=k(\gamma(Y,Z)X-\gamma(X,Z)Y)$; equivalently $\operatorname{Rm}(X,Y,Z,W)=k(\gamma(Y,Z)\gamma(X,W)-\gamma(X,Z)\gamma(Y,W))$ ([[prop-curvature-tensor-of-constant-sectional-curvature]], [[def-constant-sectional-curvature-and-space-form]]).

[L2] Ricci curvature is $\operatorname{Ric}(X,Y)=\operatorname{tr}(Z\mapsto R(Z,X)Y)$, and in an orthonormal basis $(e_1,e_2,e_3)$ of $T_p\Sigma$ it is $\operatorname{Ric}(X,Y)=\sum_{i=1}^3\operatorname{Rm}(e_i,X,Y,e_i)$; it is a smooth symmetric covariant two-tensor ([[def-ricci-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]]). Scalar curvature is $S=\operatorname{tr}_\gamma\operatorname{Ric}$ ([[def-scalar-curvature]]). Every finite-dimensional inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L3] The Riemann four-tensor is $\operatorname{Rm}(X,Y,Z,W)=\gamma(R(X,Y)Z,W)$ ([[def-riemann-curvature-four-tensor]]).

[L4] In dimension three, $\operatorname{Ric}_0=\operatorname{Ric}-\tfrac13S\gamma$ by definition, the Weyl tensor vanishes, and the Ricci decomposition reads $\operatorname{Rm}=\operatorname{Ric}_0\odot\gamma+\tfrac{S}{12}(\gamma\odot\gamma)$; the Kulkarni-Nomizu product is the one of [[def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature]], under which $(\gamma\odot\gamma)(X,Y,Z,T)=2(\gamma(X,T)\gamma(Y,Z)-\gamma(X,Z)\gamma(Y,T))$ and the constant-sectional-curvature-$K$ tensor is $\tfrac{K}{2}(\gamma\odot\gamma)$ ([[prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three]], [[def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature]]).

## Proof

**Proof technique:** direct; the three clauses are linked by a cycle of implications, with the dimension-three decomposition carrying the converse.

1.1 (Clause (a) implies clause (c).) If every tangent two-plane has sectional curvature $k$, then [L1] gives $R(X,Y)Z=k(\gamma(Y,Z)X-\gamma(X,Z)Y)$ at every point of $\Sigma$, which is exactly clause (c); conversely clause (c) is the tensor identity of [L1] from which the sectional curvature $k$ of every two-plane is read off. [L1]

2.1 (Clause (c) implies clause (b), and $S=6k$ whenever clause (b) holds.) Assume clause (c) and fix $p\in\Sigma$. Choose a $\gamma_p$-orthonormal basis $(e_1,e_2,e_3)$ of $T_p\Sigma$, which exists by [L2]. Substituting [L1] into the trace formula of [L2] gives $\operatorname{Ric}(X,Y)=\sum_{i=1}^3k(\gamma(X,Y)\gamma(e_i,e_i)-\gamma(e_i,Y)\gamma(X,e_i))=k(3\gamma(X,Y)-\gamma(X,Y))=2k\gamma(X,Y)$ for all $X,Y\in T_p\Sigma$, using $\gamma(e_i,e_i)=1$ and $\sum_i\gamma(e_i,Y)\gamma(X,e_i)=\gamma(X,Y)$; this is clause (b). Conversely, under clause (b) the metric trace gives $S=\sum_{i,j}\gamma^{ij}\operatorname{Ric}_{ij}=2k\sum_{i,j}\gamma^{ij}\gamma_{ij}=6k$ and $\operatorname{Ric}_0=\operatorname{Ric}-\tfrac13S\gamma=2k\gamma-2k\gamma=0$ by [L4]. [L1, L2, L4, step 1.1, algebra]

3.1 (Clause (b) implies clause (a).) Assume clause (b). By step 2.1, $S=6k$ and $\operatorname{Ric}_0=0$; since the dimension is three, [L4] gives $\operatorname{Rm}=\tfrac{6k}{12}(\gamma\odot\gamma)=\tfrac{k}{2}(\gamma\odot\gamma)$, and [L4] identifies $\tfrac{k}{2}(\gamma\odot\gamma)$ as the constant-sectional-curvature-$k$ tensor, that is, $\operatorname{Rm}(X,Y,Z,W)=k(\gamma(Y,Z)\gamma(X,W)-\gamma(X,Z)\gamma(Y,W))$; by the definition [L3] of the Riemann four-tensor this reads $R(X,Y)Z=k(\gamma(Y,Z)X-\gamma(X,Z)Y)$, which is clause (c). By the equivalence recalled in [L1], clause (c) is clause (a). [L1, L3, L4, step 2.1, algebra]

4.1 (Conclusion.) Step 1.1 gives (a)$\Rightarrow$(c), step 2.1 gives (c)$\Rightarrow$(b), and step 3.1 gives (b)$\Rightarrow$(a); hence the three clauses are equivalent. The scalar identity $S=6k$ and the vanishing of $\operatorname{Ric}_0$ were proved in step 2.1 under the equivalent hypotheses. No step assumes a value of $k$ beyond $k\in\mathbb R$, and the empty and low-dimensional cases do not arise because $\Sigma$ is a three-manifold. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Why the converse is available here.** In dimension three the Weyl part of
  the curvature vanishes identically, so the full curvature tensor is
  determined by the Ricci tensor and the scalar curvature; the converse
  (b)$\Rightarrow$(a) of the lemma is a genuine dimension-three statement and
  fails in higher dimensions, where trace-free Ricci and Weyl data are
  independent. The lemma is used on this page only for three-dimensional
  spatial metrics.

- **Normalization.** The condition $\operatorname{Ric}(\gamma)=2k\gamma$ with
  $k\in\{-1,0,1\}$ is the normalization adopted in
  [[def-gr-flrw-spatial-model]]; by the lemma it is the same as saying that the
  spatial model has constant sectional curvature $k$ with the three standard
  signs, which is the form in which the constant-curvature models are usually
  presented.
