---
id: ex-cm-two-to-one-preimages-and-homomorphism-check
kind: example
title: "Finite checks of the cover: the half-turn rotations $\\rho(\\pm i),\\rho(\\pm j),\\rho(\\pm k)$, the identity $\\rho(i)\\rho(j)=\\rho(ij)$, and the exact preimages of $\\rho(k)$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, def-quaternions, thm-quaternions-form-a-division-ring, def-euclidean-inner-product, def-cross-product-in-r3, thm-quarter-turn-values-and-shift-formulas, thm-matrix-multiplication-laws, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  def-quaternions: mathematical-premise
  thm-quaternions-form-a-division-ring: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-matrix-multiplication-laws: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, Digital Second Edition (2023), Introduction, Problems 7-9 (explicit homomorphism SU(2) -> SO(3); kernel {+I,-I}), printed pages 20-21"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.5 (unit quaternion -> rotation matrix: equations (115)-(117), and R{-q} = R{q}, equation (119)), printed page 25, and Section 2.4.6 (the double cover of the manifold of SO(3)), printed page 24"
      url: "https://arxiv.org/pdf/1711.02508"
verification:
  precheck: pass
---

## Example

Let $e_1,e_2,e_3$ be the standard basis of $\mathbb R^3$ and identify $\mathbb R^3$ with $\operatorname{Im}\mathbb H$ through $\varphi$ as in [[def-cm-quaternion-rotation-map-and-cover]]; matrices of linear maps are taken in the ordered basis $(i,j,k)$. Then:

1. $\rho(1)$ is the identity matrix and $\rho(-1)=\rho(1)$; moreover, if $q\in S^3$ satisfies $\rho(q)=I_3$, then $q=\pm1$.
2. $\rho(i),\rho(j),\rho(k)$ are the half-turns about the coordinate axes,

$$\rho(i)=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&-1\end{pmatrix},\qquad \rho(j)=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&-1\end{pmatrix},\qquad \rho(k)=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix},$$

and $\rho(i)\rho(j)=\rho(k)=\rho(ij)$: the homomorphism identity is verified on the generating pair $i,j$ by finite matrix multiplication.
3. The exact preimages of $\rho(k)$ in $S^3$ are $\pm k$: $\rho(\pm k)=\rho(k)$, and every $q\in S^3$ with $\rho(q)=\rho(k)$ satisfies $q=\pm k$.

## Facts & Assumptions

**Given:** The basis $(i,j,k)$ of $\operatorname{Im}\mathbb H$ and the map $\rho$ of [[def-cm-quaternion-rotation-map-and-cover]].

[L1] For $N(q)=1$ and $q=\cos(\theta/2)+\varphi(\hat n)\sin(\theta/2)$ with $\|\hat n\|_2=1$ one has $\rho(q)(\varphi(z))=\varphi(\cos\theta\,z+(1-\cos\theta)\langle\hat n,z\rangle_2\hat n+\sin\theta\,(\hat n\times z))$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 4).

[L2] The quaternion product table is $i^2=j^2=k^2=-1$, $ij=k$, $ji=-k$; $N(s+\varphi(w))=s^2+\|w\|_2^2$, so $N(i)=N(j)=N(k)=1$, $k^{-1}=-k$, and $N(k^{-1})=1$. Also $S^3=\{q:N(q)=1\}$, $q\bar q=\bar q q=\widehat{N(q)}$, and $N(pq)=N(p)N(q)$ ([[def-quaternions]], [[thm-quaternions-form-a-division-ring]], [[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 2).

[L3] $\rho(-p)=\rho(p)$ for $p\in S^3$, $\rho(1)$ is the identity map, the map $p\mapsto\rho(p)$ is a homomorphism on $S^3$, and its kernel is $\{1,-1\}$ ([[def-cm-quaternion-rotation-map-and-cover]] Definition and Remark).

[L4] The cross product is bilinear, $e_2\times e_1=-e_3$, and $\langle e_2,e_1\rangle_2=0$; the Euclidean inner product is the coordinate dot product ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[L5] Matrix multiplication is associative with identity $I_3$, and the entries of a product are $(AB)_{sr}=\sum_tA_{st}B_{tr}$ ([[thm-matrix-multiplication-laws]], [[def-matrix-product-and-identity-matrix]]).

[L6] The quarter-turn values are $\cos\pi=-1$ and $\sin\pi=0$, while the shift formulas give $\cos(\pi/2)=0$ and $\sin(\pi/2)=1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

## Verification

**Proof technique:** direct; evaluate the axis-angle formula at $\theta=\pi$, then multiply two explicit matrices and compare preimages through the kernel.

1.1 For $a=1,2,3$, applying [L1] with $\theta=\pi$, $\hat n=e_a$ and $q=\varphi(e_a)=\cos(\pi/2)+\varphi(e_a)\sin(\pi/2)$ gives $\rho(\varphi(e_a))(\varphi(z))=\varphi(-z+2\langle e_a,z\rangle_2e_a)$ using [L6]; its cross-product term vanishes because $\sin\pi=0$. In the basis $(i,j,k)$ this is the diagonal matrix with entry $+1$ in position $a$ and $-1$ elsewhere, which is the displayed $\rho(i),\rho(j),\rho(k)$. Also $\rho(1)$ is the identity map by [L3], and $\rho(-1)=\rho(1)$ by [L3], so both real unit quaternions act trivially. [L1, L3, L4, L6, algebra]

2.1 Multiplying the two displayed matrices with the entry formula of [L5] gives $\rho(i)\rho(j)=\operatorname{diag}(-1,-1,1)=\rho(k)$; explicitly, the product of two diagonal matrices multiplies corresponding diagonal entries, $(1)(-1)=-1$, $(-1)(1)=-1$, $(-1)(-1)=1$. [step 1.1, L5, algebra]

2.2 If $q\in S^3$ satisfies $\rho(q)=\rho(k)$, then by the homomorphism and kernel facts of [L3] the element $qk^{-1}\in S^3$ (unit because $N(qk^{-1})=N(q)N(k^{-1})=1$ by [L2]) satisfies $\rho(qk^{-1})=\rho(q)\rho(k)^{-1}=I_3$, hence $qk^{-1}\in\{1,-1\}$ and $q=\pm k$; conversely $\rho(\pm k)=\rho(k)$ by [L3] and step 1.1. In the special case $\rho(q)=I_3$ the same argument with $k$ replaced by $1$ gives $q=\pm1$. [step 1.1, L2, L3, algebra]

3.1 Finally $ij=k$ by [L2], so $\rho(ij)=\rho(k)=\rho(i)\rho(j)$ by [step 2.1]: the homomorphism identity holds on the pair generating the quaternion group. This proves clauses 2 and 3 and completes the finite checks. [step 2.1, step 2.2, L2, algebra] ∎

## Remarks

- The matrices display the two-to-one cover concretely: the identity rotation has the two preimages $\pm1$, and the half-turn about $e_3$ has the two preimages $\pm k$, in agreement with the general kernel statement. The example checks specific rotations only; it is not a proof that the covering is nontrivial along loops, which is the separate closed-loop counterexample on this page.

- The computation verifies the homomorphism identity on the generators $i,j$ of the quaternion group; it does not reprove the homomorphism property for all pairs, which is supplied by the cited cover.
