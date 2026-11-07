---
id: thm-proper-invertible-ideal-classes-form-abelian-group
kind: theorem
title: Proper Invertible Ideal Classes Form Abelian Groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-quadratic-order-of-discriminant
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order
  - lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
  - def-fractional-ideal
  - def-invertible-fractional-ideal
  - def-product-and-colon-of-fractional-ideals
  - lem-fractional-ideal-operations-well-defined
  - def-archimedean-embeddings-and-number-field-signature
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.2, pp. 232–233"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, §§3.19–3.20"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William Dallaporta, Recovering the Picard group of quadratic algebras from Wood's binary quadratic forms, §3"
      url: "https://arxiv.org/pdf/2111.13422"
verification:
  precheck: pass
---

## Statement

For every nonzero nonsquare quadratic discriminant $D$, multiplication makes
$\operatorname{Pic}(\mathcal O_D)$ a group when $D<0$ and
$\operatorname{Pic}^+(\mathcal O_D)$ a group when $D>0$. For $D>0$,
$\operatorname{Cl}_{\mathrm{or}}^+(\mathcal O_D)$ is also an abelian group,
and
$$\Phi([I,\epsilon])=\begin{cases}[I]&\epsilon=+1,\\[\sqrt D\,I]&\epsilon=-1\end{cases}$$
is a group isomorphism from it to the standard narrow ideal class group
$\operatorname{Pic}^+(\mathcal O_D)$.

## Statement references

[[def-proper-invertible-ideal-class-group-of-a-quadratic-order|Proper means multiplier ring O_D; ordinary and narrow classes quotient by all and totally positive principal ideals.]]

[[def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order|Real oriented classes record the basis sign and identify scalar action by the sign of the norm.]]

[Bhargava, “Higher Composition Laws I,” §3.2, Theorems 9–10, pp. 232–233](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, Theorem 3.20, pp. 53–54 (Dedekind-domain group law)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Dallaporta, “Recovering the Picard group…,” Theorem 3.24, pp. 21–22](https://arxiv.org/pdf/2111.13422)

## Facts & Assumptions

**Given:** A nonzero nonsquare discriminant $D$, the fractional ideals of $\mathcal O_D$, and, when $D>0$, the oriented ideal classes defined above.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_D$ is a commutative domain with basis $(1,\tau_D)$ and conjugation $\bar\tau_D=\delta-\tau_D$.

[F2] [[def-fractional-ideal]]: a fractional ideal is a nonzero $\mathcal O_D$-submodule of $K_D$ with a common nonzero denominator.

[F3] [[def-product-and-colon-of-fractional-ideals]]: $IJ$ consists of finite sums of products, and $(I:J)=\{x:xJ\subseteq I\}$.

[F4] [[def-invertible-fractional-ideal]]: $I$ is invertible exactly when $I(\mathcal O_D:I)=\mathcal O_D$.

[F5] [[lem-fractional-ideal-operations-well-defined]]: products and scalar multiples of fractional ideals are fractional ideals.

[F6] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]]: the ordinary and narrow class groups are quotients by all principal fractional ideals and by totally positive principal fractional ideals, respectively.

[F7] [[def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order]]: scalar $\lambda$ changes orientation by $\operatorname{sgn}(N(\lambda))$, and oriented classes use the product orientation.

[F8] [[def-archimedean-embeddings-and-number-field-signature]]: the signature counts real embeddings and satisfies $r_1+2r_2=[K_D:\mathbb Q]=2$.

[F9] [[def-field-norm-and-trace]]: $N(\lambda)$ is the determinant of multiplication by $\lambda$.

## Proof

1.1 The finite-sum definition in [F3] makes fractional-ideal product associative and commutative: both $(IJ)L$ and $I(JL)$ consist exactly of finite sums of terms $xyz$ with $x\in I$, $y\in J$, and $z\in L$. The ideal $\mathcal O_D$ is the identity. If $I$ and $J$ are invertible, then $I^{-1}=(\mathcal O_D:I)$ and $J^{-1}=(\mathcal O_D:J)$ satisfy $(IJ)(I^{-1}J^{-1})=\mathcal O_D$; [F5] ensures these are fractional ideals. [F2, F3, F4, F5, given, algebra]

1.2 Every invertible fractional ideal is proper. If $xI\subseteq I$, multiplying by $I^{-1}$ gives $x\mathcal O_D\subseteq\mathcal O_D$, hence $x\in\mathcal O_D$. Thus proper invertible fractional ideals form the abelian group of invertible fractional ideals. For $\lambda\in K_D^\times$, clearing the two rational coordinates of $\lambda$ in the basis $(1,\tau_D)$ by a positive integer shows that $\lambda\mathcal O_D$ and $\lambda^{-1}\mathcal O_D$ are fractional ideals; their product is $\mathcal O_D$. All principal fractional ideals therefore form a subgroup, and those generated by totally positive scalars form a subgroup as well. The two quotients in [F6] are abelian groups. [F1, F2, F3, F4, F6, given, algebra]

1.3 Write $\lambda=x+y\tau_D$ with $x,y\in\mathbb Q$. In the basis $(1,\tau_D)$ its multiplication matrix is $\begin{pmatrix}x&q_Dy\\y&x+\delta y\end{pmatrix}$, so [F9] gives $N(\lambda)=x^2+\delta xy-q_Dy^2$. The two embeddings send $\tau_D$ to $(\delta+\sqrt D)/2$ and $(\delta-\sqrt D)/2$, and multiplying their values on $\lambda$ gives this same expression. Hence $N(\lambda)>0$ exactly when the two embeddings have the same sign, while $\sqrt D$ has opposite signs and norm $-D<0$. [F1, F8, F9, given, algebra]

2.1 Scalar multiplication preserves invertibility because $(\lambda I)(\lambda^{-1}I^{-1})=\mathcal O_D$; by step 1.2 it preserves properness, and [F5] keeps the ideals fractional. The sign rule is an action since $\operatorname{sgn}N(\lambda\mu)=\operatorname{sgn}N(\lambda)\operatorname{sgn}N(\mu)$. The oriented pairs in [F7] form an abelian group: the identity is $(\mathcal O_D,+1)$ and the inverse of $(I,\epsilon)$ is $(I^{-1},\epsilon)$. The principal oriented pairs $(\lambda\mathcal O_D,\operatorname{sgn}(N(\lambda)))$ form a subgroup; multiplying such a pair by $(I,\epsilon)$ is precisely the scalar action in [F7], so their cosets are exactly the scalar equivalence classes. Hence $\operatorname{Cl}_{\mathrm{or}}^+(\mathcal O_D)$ is an abelian group. [F3, F4, F5, F7, step 1.1, step 1.2, algebra]

2.2 Put $c_{+1}=1$ and $c_{-1}=\sqrt D$. If $(I,\epsilon)$ is replaced by $(\lambda I,\operatorname{sgn}(N(\lambda))\epsilon)$, the ratio of the corresponding adjusted ideals is $c_{\operatorname{sgn}(N(\lambda))\epsilon}\lambda/c_\epsilon$. Its norm is positive because either $N(\lambda)>0$ and the $c$-ratio is $1$, or $N(\lambda)<0$ and the $c$-ratio has negative norm. The ratio therefore has either two positive or two negative real values; in the latter case its negative is totally positive and generates the same principal ideal. Thus $\Phi$ is well defined in the quotient [F6]. [F6, F7, step 1.3, algebra]

3.1 Since $c_{\epsilon}c_{\eta}/c_{\epsilon\eta}$ is either $1$ or $D$, and both are totally positive, $\Phi$ respects ideal multiplication. Every class in $\operatorname{Pic}^+(\mathcal O_D)$ is $\Phi([I,+1])$, so $\Phi$ is surjective. [F6, F7, step 2.2, algebra]

4.1 If $\Phi([I,\epsilon])=\Phi([J,\eta])$, then $c_\epsilon I=\mu c_\eta J$ for a totally positive $\mu$. Set $\lambda=\mu c_\eta/c_\epsilon$. If $\epsilon=\eta$, $N(\lambda)>0$; if $\epsilon\ne\eta$, $N(\lambda)<0$. In either case $I=\lambda J$ and $\epsilon=\operatorname{sgn}(N(\lambda))\eta$, exactly the equivalence in [F7]. Therefore the two oriented classes agree, proving injectivity and the claimed group isomorphism. [F6, F7, step 1.3, step 2.2, algebra] ∎
