---
id: ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class
kind: example
title: The A_2 discriminant, its Jacobian and the top coinvariant class in $\mathbb C[u,z]/(uz,u^3+z^3)$
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps:
  - def-cg-canonical-reflection-homomorphism
  - def-cg-coxeter-basic-degrees-and-graded-coinvariants
  - def-cg-real-coxeter-form-and-reflection
  - def-complex-numbers-and-arithmetic
  - def-determinant-of-a-square-matrix
  - def-finite-linear-invariant-and-coinvariant-polynomial-algebras
  - def-formal-derivative-of-a-polynomial
  - def-jacobian-matrix-affine-algebraic-set
  - def-roots-of-unity-in-a-field
  - thm-cg-finite-coxeter-classification-including-h-and-dihedral
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-of-square-roots
justified_by: []
dependency_level: 16
proof_strategy: direct
generation:
  role: example
axiom_use: "No Choice is used: the A2 root model, invariant polynomials, derivative calculation and quotient basis are all explicit finite computations."
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups (MIT 18.757 course notes, 162-page PDF)
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "Theorem 12.2 and the S3 reflection-representation example immediately following it, printed p. 64: the coinvariant Hilbert polynomial is (1+q)(1+q^2), and the sign representation occurs in degree 3. This is a statement-level comparison; the explicit basis and top class are proved here."
---

## Statement

Let $W$ be of type $A_2=I_2(3)=S_3$, in its two-dimensional real reflection representation. Choose standard orthonormal coordinates $(x,y)$ so the simple roots are $\alpha_1=(0,1)$ and $\alpha_2=(\sqrt3/2,-1/2)$; put $\alpha_3=\alpha_1+\alpha_2=(\sqrt3/2,1/2)$, so $\Phi_+=\{\alpha_1,\alpha_2,\alpha_3\}$. Set $u=x+iy$, $z=x-iy$, and $\zeta:=(-1+i\sqrt3)/2$, a primitive cube root of unity. The two basic invariants are $a:=uz=x^2+y^2$ and $b:=u^3+z^3=2\operatorname{Re}((x+iy)^3)$, of degrees $2$ and $3$. The coinvariant algebra is $A=\mathbb C[u,z]/(uz,u^3+z^3)$ with basis $1,u,u^2,z,z^2,u^3$ and $z^3\equiv-u^3$. Define $\ell_\alpha(v):=B_{\mathbb C}(v,\alpha)$ for each positive root and $\Delta:=\prod_{\alpha\in\Phi_+}\ell_\alpha$; put $N:=|\Phi_+|=3$. Then:

**(1)** The reflecting hyperplanes have equations $u-z=0$, $u-\zeta z=0$, and $u-\zeta^2z=0$. The normalized root forms are $$\ell_{\alpha_1}=y=\frac{u-z}{2i},\quad \ell_{\alpha_2}=\frac{\sqrt3}{2}x-\frac12y=\frac{\sqrt3+i}{4}(u-\zeta z),\quad \ell_{\alpha_3}=\frac{\sqrt3}{2}x+\frac12y=\frac{\sqrt3-i}{4}(u-\zeta^2z),$$ so $$\Delta=\frac1{8i}(u-z)(u-\zeta z)(u-\zeta^2z)=\frac1{8i}(u^3-z^3),\qquad \deg\Delta=3=N.$$

**(2)** The invariant Jacobian, with equation rows $(a,b)$ and coordinate columns $(u,z)$, is $$\mathbf J=\det\begin{pmatrix}\partial a/\partial u&\partial a/\partial z\\ \partial b/\partial u&\partial b/\partial z\end{pmatrix}=\det\begin{pmatrix}z&u\\3u^2&3z^2\end{pmatrix}=3(z^3-u^3)=-24i\,\Delta.$$ Thus in these $u,z$ coordinates the proportionality constant is $-24i\ne0$; the scalar depends on the coordinate convention. Writing $\det(w):=\det(\rho_{\mathbb C}(w))$, one also has $w\cdot\Delta=\det(w)\Delta$ on the generating reflection $u\leftrightarrow z$ and the rotation $(u,z)\mapsto(\zeta u,\zeta^{-1}z)$.

**(3)** The Hilbert series of $A$ is $1+2t+2t^2+t^3$, so its top degree is $3=N$ and $A_3$ is one-dimensional. In the quotient, $[\Delta]=\frac1{8i}[u^3-z^3]=\frac1{4i}[u^3]=-\frac{i}{4}[u^3]\ne0$, so it spans $A_3$; the generator check in (2) shows that this line carries the determinant character.

**(4)** The basic degrees are $d_1=2,d_2=3$, the exponents are $e_1=1,e_2=2$, $\sum_i e_i=3=N$, and $\prod_i d_i=6=|S_3|$. These computations verify the general $A_2$ degree and top-class claims directly.

## Facts & Assumptions

**Given:** The type $A_2$ Coxeter system, the real model $(x,y)$ and the coordinates $u=x+iy,z=x-iy$ above.

[F1] The Coxeter presentation is $\langle s_1,s_2\mid s_1^2=s_2^2=(s_1s_2)^3=1\rangle$; under the standard identification with $S_3$, $s_1,s_2$ map to adjacent transpositions. The reflection representation is the canonical homomorphism, and the type $A_2$ classification convention identifies it with $I_2(3)$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1),(4)).

[F2] Let $\sqrt3$ be the positive square root of $3$ and put $\zeta=(-1+i\sqrt3)/2$, so direct multiplication gives $\zeta^3=1$, $\zeta\ne1$, and $\zeta^2=\overline\zeta$. The standard Euclidean model has $\sigma(x,y)=(x,-y)$ and a second simple reflection in the line at angle $\pi/3$; their product $R=s_2s_1$ acts by $R(u,z)=(\zeta u,\zeta^{-1}z)$, and $\sigma,R$ generate the order-six dihedral group ([[thm-of-square-roots]], [[thm-complex-nth-roots-and-roots-of-unity]], [[def-roots-of-unity-in-a-field]], [[def-complex-numbers-and-arithmetic]]).

[F3] The reflection formula is $r_\alpha(v)=v-2(v,\alpha)\alpha$ for a unit root normal, and the canonical representation carries the root set; in this displayed A2 model we choose the positive roots to be those in the nonnegative simple-root cone ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]).

[F4] $\mathbb C[u,z]$ is a polynomial ring over a field, its monomials are linearly independent, and formal partial derivatives obey the monomial and power rules; the Jacobian uses equation rows and coordinate columns ([[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]], [[def-formal-derivative-of-a-polynomial]], [[def-jacobian-matrix-affine-algebraic-set]], [[def-determinant-of-a-square-matrix]]).

[F5] For a finite linear action, $R=\mathbb C[u,z]^W$ and the coinvariant algebra is $\mathbb C[u,z]/(\mathbb C[u,z]R_+)$; the basic family is a minimal homogeneous generating family of the positive-degree invariant ideal, with degrees $d_i$ and exponents $d_i-1$ ([[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]], [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]]).


## Proof

**Proof technique:** Identify the A2 model and its normalized root forms, compute the invariant algebra and Jacobian directly, then reduce the quotient by monomial relations.

1.1 The Coxeter presentation maps onto $S_3$ by $s_1\mapsto(12)$ and $s_2\mapsto(23)$. Let $t=s_1s_2$; then $t^3=1$, $s_2=s_1t$, and $s_1ts_1=t^{-1}$. Every word is therefore one of $t^k$ or $s_1t^k$ for $k=0,1,2$, so $|W|\le6$; the surjection onto $S_3$ gives $|W|\ge6$ and hence $W\cong S_3$. The reflection in the $x$-axis has unit normal $\alpha_1=(0,1)$; the reflection in the line at angle $\pi/3$ has unit normal $\alpha_2=(\sqrt3/2,-1/2)$, with $(\alpha_1,\alpha_2)=-1/2$. The Gram matrix of $(\alpha_1,\alpha_2)$ is the $A_2$ Coxeter Gram matrix, so the map from the canonical simple-root basis to $(\alpha_1,\alpha_2)$ is an isometry and conjugates the canonical representation to this model. The reflection actions are $s_1\alpha_1=-\alpha_1$, $s_1\alpha_2=\alpha_1+\alpha_2$, $s_2\alpha_2=-\alpha_2$, and $s_2\alpha_1=\alpha_1+\alpha_2$; hence $\{\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2)\}$ is exactly the root set and its positive elements are $\alpha_1,\alpha_2,\alpha_3$. The corresponding normalized forms are $y$, $\frac{\sqrt3}{2}x-\frac12y$, and $\frac{\sqrt3}{2}x+\frac12y$. Substitution $x=(u+z)/2$, $y=(u-z)/(2i)$ gives the three displayed scalar multiples in (1). Multiplying them gives $\Delta=\frac1{8i}(u-z)(u-\zeta z)(u-\zeta^2z)=\frac1{8i}(u^3-z^3)$ because $1,\zeta,\zeta^2$ are the distinct cube roots of unity; the product has degree $3=|\Phi_+|$. [F1, F2, F3, algebra]

2.1 The reflection generator acts by $\sigma(u,z)=(z,u)$ and $R=s_2s_1$ acts by $R(u,z)=(\zeta u,\zeta^{-1}z)$. Since $s_2=R\sigma$, the pair $\sigma,R$ generates $W$. Both $a=uz$ and $b=u^3+z^3$ are invariant. Let $f=\sum_{p,q}c_{pq}u^pz^q$ be invariant. Rotation invariance and monomial independence imply $c_{pq}=0$ unless $3\mid(p-q)$; swap invariance gives $c_{pq}=c_{qp}$. Thus $f$ is a finite linear combination of $a^p$ and orbit sums $a^q(u^{3k}+z^{3k})$ with $k\ge1$. Set $S_k=u^{3k}+z^{3k}$. Then $S_0=2$, $S_1=b$, and direct expansion gives $S_{k+1}=bS_k-a^3S_{k-1}$; induction shows each $S_k\in\mathbb C[a,b]$. Hence $\mathbb C[u,z]^W=\mathbb C[a,b]$. [F2, F4, step 1.1, algebra]

3.1 The formal partial-derivative rules and the product rule give $\partial_u a=z$, $\partial_z a=u$, $\partial_u b=3u^2$, and $\partial_z b=3z^2$, so the Jacobian determinant is $\mathbf J=3(z^3-u^3)=-24i\Delta$. It is not the zero polynomial. To prove $a,b$ algebraically independent, suppose a nonzero $H\in\mathbb C[Y_1,Y_2]$ of minimal total degree satisfies $H(a,b)=0$. Since the characteristic is zero, at least one partial derivative $H_j$ is nonzero. Expanding $H$ into monomials and applying the product rule gives the chain rule, so differentiating the relation with respect to $u,z$ gives $J^{\mathsf T}(H_1(a,b),H_2(a,b))^{\mathsf T}=0$. Multiply the displayed equation by the explicit adjugate $\begin{pmatrix}3z^2&-3u^2\\-u&z\end{pmatrix}$ of $J^{\mathsf T}$. Its product with $J^{\mathsf T}$ is $3(z^3-u^3)I_2$, so the domain property and $3(z^3-u^3)\ne0$ force both partial derivatives to vanish after substitution. A nonzero partial derivative is then a relation of strictly smaller total degree; if it were a nonzero constant it could not vanish, and otherwise this contradicts the minimal choice of $H$. Therefore $a,b$ are algebraically independent. They are homogeneous of degrees $2,3$ and generate $R$ by 2.1. Since $R_+=(a,b)R$, the coinvariant ideal is $(a,b)\mathbb C[u,z]$. Neither generator is in the ideal generated by the other: $a$ has degree $2<3$, while $b=u^3+z^3$ is not divisible by $uz$. Thus they form the basic family with degrees $2,3$ and exponents $1,2$. For anti-invariance, the swap sends $\Delta$ to $-\Delta$ and has determinant $-1$; the rotation sends $u^3-z^3$ to itself and has determinant $1$. Since these elements generate $W$, $w\cdot\Delta=\det(w)\Delta$ for every $w\in W$. [F2, F4, F5, step 2.1, algebra]

4.1 In $A=\mathbb C[u,z]/(uz,u^3+z^3)$, all mixed monomials vanish, $z^3=-u^3$, and $u^4=z^4=0$, so $1,u,u^2,z,z^2,u^3$ span. The ideal is homogeneous: its degree-two part is spanned by $uz$, and its degree-three part by $u^2z,uz^2,u^3+z^3$. Thus $u^2,z^2$ are independent in degree two, and $u^3$ is nonzero in degree three because it is not in the span of those three degree-three relations; the degree-zero and degree-one classes are also independent because the ideal has no terms in those degrees. Hence the six displayed classes are a basis, $\operatorname{Hilb}(A,t)=1+2t+2t^2+t^3$, and $A_3$ is one-dimensional. Using $z^3=-u^3$ and the normalized scalar in step 1.1 gives $[\Delta]=\frac1{8i}[u^3-z^3]=-\frac{i}{4}[u^3]\ne0$, so it spans $A_3$ and carries the determinant character by step 3.1. [F4, step 1.1, step 3.1, algebra]

5.1 The degrees are $2,3$, so the exponents are $1,2$, their sum is $3=|\Phi_+|$, and their product is $6=|S_3|$ by 1.1. The quotient basis in 4.1 has top degree $3$ and one-dimensional top component; the nonzero discriminant class is its generator. All constructions use explicit coordinates and finite polynomial identities, so no Choice is used. This proves the four clauses. [F1, F5, step 1.1, step 3.1, step 4.1, algebra] ∎
