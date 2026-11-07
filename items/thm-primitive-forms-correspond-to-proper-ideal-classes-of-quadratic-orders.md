---
id: thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
kind: theorem
title: Primitive Forms Correspond to Proper Ideal Classes of Quadratic Orders
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-quadratic-order-of-discriminant
  - thm-quadratic-order-formula-verifies-discriminant
  - lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order
  - thm-proper-invertible-ideal-classes-form-abelian-group
  - def-fractional-ideal
  - def-invertible-fractional-ideal
  - def-product-and-colon-of-fractional-ideals
  - lem-fractional-ideal-operations-well-defined
  - def-generated-and-principal-ideals
  - def-field-norm-and-trace
  - def-binary-quadratic-form-over-integers
  - def-primitive-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
  - def-proper-equivalence-of-binary-quadratic-forms
  - def-positive-definite-binary-quadratic-form
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §§3.1–3.3, Theorems 8–12, pp. 230–237"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 4, §4.29, pp. 81–83"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William Dallaporta, Recovering the Picard group of quadratic algebras from Wood's binary quadratic forms, §§2–3"
      url: "https://arxiv.org/pdf/2111.13422"
verification:
  precheck: pass
---

## Statement

Let $D$ be a nonzero nonsquare integer with $D\equiv0$ or $1\pmod4$, and let
$\mathcal O_D=\mathbb Z[\tau_D]$ in $K_D=\mathbb Q(\sqrt D)$. An integral
binary quadratic form is $Q(x,y)=ax^2+bxy+cy^2$ with $a,b,c\in\mathbb Z$;
it is primitive when $\gcd(a,b,c)=1$, and its discriminant is
$b^2-4ac$. Proper equivalence means substitution by a matrix in
$\mathrm{SL}_2(\mathbb Z)$. For $D<0$, take primitive positive-definite forms
(positive on every nonzero real pair); for $D>0$, take all primitive forms of
discriminant $D$. In either case $a\ne0$. Put
$\theta_Q=(b+\sqrt D)/2$ and $I_Q=a\mathbb Z+\theta_Q\mathbb Z$. Then
$I_Q$ is a proper invertible fractional $\mathcal O_D$-ideal, and the ordered
basis $(a,\theta_Q)$ has normalized norm form
$N_{K_D/\mathbb Q}(ax+\theta_Qy)/a=Q(x,y)$. For $D<0$, the map
$[Q]\mapsto[I_Q]$ is a bijection from proper form classes to
$\operatorname{Pic}(\mathcal O_D)$. For $D>0$, the map
$[Q]\mapsto[I_Q,\operatorname{sgn}(a)]$ is a bijection to the oriented ideal
class group; under its isomorphism with the standard narrow group, it sends
$[Q]$ to $[I_Q]$ if $a>0$ and to $[\sqrt D I_Q]$ if $a<0$. Transporting
ideal multiplication through these bijections defines the Gauss composition
group law on the proper form classes.

## Statement references

[[def-quadratic-order-of-discriminant|$\mathcal O_D=\mathbb Z[\tau_D]$ has ordered basis $(1,\tau_D)$ and includes nonmaximal orders.]]

[[def-proper-invertible-ideal-class-group-of-a-quadratic-order|Proper means multiplier ring O_D; ordinary and narrow ideal classes quotient by principal ideals.]]

[[def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order|An oriented ideal class records the determinant sign relative to the order basis (1,tau_D).]]

[[thm-proper-invertible-ideal-classes-form-abelian-group|The real oriented class group maps to the standard narrow group using the square-root-of-D correction.]]

[Bhargava, “Higher Composition Laws I,” §§3.1–3.3, Theorems 8–12, pp. 230–237](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, §4.29, pp. 81–83 (fundamental-discriminant case only)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Dallaporta, “Recovering the Picard group…,” §§2–3, Theorems 3.13 and 3.24, pp. 18–22 (scheme-theoretic cross-check)](https://arxiv.org/pdf/2111.13422)

## Facts & Assumptions

**Given:** A nonzero nonsquare integer $D\equiv0$ or $1\pmod4$, a primitive integral form $Q=(a,b,c)$ of discriminant $D$ (positive definite when $D<0$), and, for the surjectivity direction, an arbitrary class in the indicated ordinary ideal class group when $D<0$ or oriented ideal class group when $D>0$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_D=\mathbb Z[\tau_D]$, $\tau_D^2=\delta\tau_D+q_D$, and $\overline{\tau_D}=\delta-\tau_D$.

[F2] [[thm-quadratic-order-formula-verifies-discriminant]]: $\mathcal O_D$ is a rank-two order of discriminant $D$.

[F3] [[lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice]]: every nonzero fractional $\mathcal O_D$-ideal is a free rank-two lattice and has an integral representative after positive integer scaling.

[F4] [[def-fractional-ideal]]: a fractional ideal is a nonzero module in $K_D$ with a common denominator.

[F5] [[def-invertible-fractional-ideal]]: $I$ is invertible if $I(\mathcal O_D:I)=\mathcal O_D$.

[F6] [[def-product-and-colon-of-fractional-ideals]] and [[lem-fractional-ideal-operations-well-defined]]: ideal products are finite sums of products and remain fractional ideals.

[F7] [[def-generated-and-principal-ideals]]: $(a)$ denotes the principal ideal generated by $a\in\mathcal O_D$.

[F8] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]]: proper ideals have multiplier ring $\mathcal O_D$; the ordinary and narrow class groups quotient invertible proper ideals by all or totally positive principal ideals.

[F9] [[def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order]]: for $D>0$, oriented classes record a sign relative to $(1,\tau_D)$ and scalar multiplication changes it by $\operatorname{sgn}(N\lambda)$.

[F10] [[thm-proper-invertible-ideal-classes-form-abelian-group]]: invertible ideals are proper, the class groups are abelian, and the oriented group is isomorphic to the standard narrow group by the stated $\sqrt D$ correction.

[F11] [[def-binary-quadratic-form-over-integers]]: an integral binary form has integer coefficients and is written $(a,b,c)$.

[F12] [[def-primitive-binary-quadratic-form]]: primitivity means $\gcd(a,b,c)=1$.

[F13] [[def-discriminant-of-binary-quadratic-form]]: the discriminant is $b^2-4ac$.

[F14] [[def-proper-equivalence-of-binary-quadratic-forms]]: proper equivalence is substitution by an $\mathrm{SL}_2(\mathbb Z)$ matrix.

[F15] [[def-positive-definite-binary-quadratic-form]]: positive definiteness means positivity on every nonzero real pair.

[F16] [[def-field-norm-and-trace]]: $N_{K_D/\mathbb Q}(z)$ is the determinant of multiplication by $z$.

## Proof

1.1 If $D<0$, positive definiteness gives $a=Q(1,0)>0$. If $D>0$ and $a=0$, then $D=b^2$ by [F13], contradicting that $D$ is nonsquare. Thus $a\ne0$. Also $D=b^2-4ac$ gives $b^2\equiv D\pmod4$, so $b\equiv\delta\pmod2$ and $k=(b-\delta)/2\in\mathbb Z$. Hence $\theta_Q=\tau_D+k\in\mathcal O_D$. Directly from $\theta_Q=(b+\sqrt D)/2$, its trace is $b$, its norm is $ac$, and $\theta_Q^2=b\theta_Q-ac$. [F1, F11, F13, F15, F16, given, algebra]

1.2 For surjectivity, take a target ideal class as in [given]; when $D>0$ represent it by an oriented pair $(I,\epsilon)$ from [F9], and when $D<0$ by a fractional ideal $I$. Choose an ordered $\mathbb Z$-basis $(\alpha,\beta)$ using [F3]; in the real case reverse one basis vector if needed so its determinant sign is $\epsilon$, and in the imaginary case choose the positive complex orientation. If necessary multiply $I$ and its basis by a positive integer to make it integral; this preserves the class and its orientation. Let $B$ have columns the coordinates of $\alpha,\beta$ in $(1,\tau_D)$, put $\nu=\det B\ne0$, and define $Q_I(x,y)=N(\alpha x+\beta y)/\nu$. [F3, F8, F9, F16, given, choose, construct]

2.1 The lattice $I_Q=a\mathbb Z+\theta_Q\mathbb Z$ is stable under multiplication by $\theta_Q$: $\theta_Qa=a\theta_Q\in I_Q$ and $\theta_Q^2=b\theta_Q-ac\in I_Q$. As $\mathcal O_D=\mathbb Z[\theta_Q]$, it is an integral ideal. Conjugation preserves $\mathcal O_D$ by [F1]; for $o\in\mathcal O_D$ and $z\in I_Q$, $o\bar z=\overline{\bar o z}\in\bar I_Q$, so $\bar I_Q=a\mathbb Z+\bar\theta_Q\mathbb Z$ is also an ideal. Their product is generated by $a^2,a\theta_Q,a\bar\theta_Q,ac$, hence $I_Q\bar I_Q=(a)(a,c,\theta_Q,\bar\theta_Q)=(a)(a,b,c,\theta_Q)=(a)$ because $\gcd(a,b,c)=1$. Thus $a^{-1}\bar I_Q$ is a fractional inverse and $I_Q$ is invertible. [F1, F6, F7, F12, step 1.1, algebra]

2.2 For $\gamma\in I$, multiplication $\mathcal O_D\to I$, $z\mapsto\gamma z$, has an integer matrix $A_\gamma$ in the bases $(1,\tau_D)$ and $(\alpha,\beta)$, since $\gamma\mathcal O_D\subseteq I$. If $M_\gamma$ is its multiplication matrix on $\mathcal O_D$, then $M_\gamma=BA_\gamma$, so $N(\gamma)=\det(M_\gamma)=\nu\det(A_\gamma)$. Taking $\gamma=\alpha,\beta,\alpha+\beta$ proves all three coefficients of $Q_I$ are integers. The norm form on $(1,\tau_D)$ is $x^2+\delta xy-q_Dy^2$, whose discriminant is $D$. A basis change by $B$ multiplies a binary-form discriminant by $(\det B)^2=\nu^2$; dividing its coefficients by $\nu$ divides its discriminant by $\nu^2$. Thus $Q_I$ has discriminant $D$. [F1, F2, F16, step 1.2, algebra]

3.1 If $xI_Q\subseteq I_Q$, [F10] makes $I_Q$ proper, so its multiplier ring is $\mathcal O_D$. The normalized norm calculation is $N(ax+\theta_Qy)/a=ax^2+bxy+cy^2$. For $D<0$, [F15] gives $a>0$ and the basis is positive in the complex orientation. For $D>0$, its coordinate determinant relative to $(1,\tau_D)$ is $a$, so its orientation sign is $\operatorname{sgn}(a)$. [F8, F9, F10, F15, F16, step 2.1, algebra]

3.2 Write $Q_I=(a,b,c)$; since $\alpha\ne0$, $a=N(\alpha)/\nu\ne0$. Set $\kappa=\bar\alpha/\nu$. Then $\kappa\alpha=a$. For $z=\kappa\beta$, the definitions of the coefficients give $\operatorname{Tr}(z)=b$ and $N(z)=ac$. Since $z+\bar z=\operatorname{Tr}(z)$ and $z\bar z=N(z)$, $z$ is a root of $T^2-bT+ac=0$. Writing $\alpha=x+y\tau_D$ and $\beta=u+v\tau_D$, the coefficient of $\sqrt D$ in $\bar\alpha\beta$ is $(xv-yu)/2=\nu/2$. Therefore $z=(b+\sqrt D)/2=\theta_{Q_I}$, and $\kappa I=a\mathbb Z+\theta_{Q_I}\mathbb Z=I_{Q_I}$. When $D>0$, $N(\kappa)=a/\nu$, so scalar multiplication changes the orientation of $I$ to $\operatorname{sgn}(a)$ as required; when $D<0$, $\nu>0$ gives the positive complex orientation. [F1, F3, F9, F16, step 2.2, construct, algebra]

3.3 A determinant-one change of an oriented ideal basis changes its normalized norm form by proper equivalence. Scaling the ideal and basis by $\lambda\ne0$ multiplies both the norm numerator and $\nu$ by $N(\lambda)$, leaving the normalized form unchanged; for $D>0$ its orientation changes by $\operatorname{sgn}(N(\lambda))$ as in [F9]. Hence the construction from ideal classes to form classes is well defined. [F9, F14, step 2.2, algebra]

4.1 Suppose the content of $Q_I$ were an integer $d>1$. Then $Q_0=Q_I/d=(a_0,b_0,c_0)$ is integral and has discriminant $D_0=D/d^2$, a nonzero nonsquare discriminant. The same order construction gives $\mathcal O_{D_0}=\mathbb Z[\theta_0]$, where $\theta_0=(b_0+\sqrt{D_0})/2$; since $d\theta_0=\theta_{Q_I}$, one has $\mathcal O_D=\mathbb Z[d\theta_0]\subsetneq\mathcal O_{D_0}$, strictly because their discriminants differ. The calculation in step 2.1, which does not require primitivity, makes $I_{Q_0}=a_0\mathbb Z+\theta_0\mathbb Z$ an $\mathcal O_{D_0}$-ideal, and $I_{Q_I}=dI_{Q_0}$. Hence $\mathcal O_{D_0}\subseteq(I_{Q_I}:I_{Q_I})$. But step 3.2 gives $I_{Q_I}=\kappa I$, so its multiplier ring equals $(I:I)=\mathcal O_D$, a contradiction. Thus $Q_I$ is primitive. [F1, F2, F8, F12, step 2.1, step 3.2, algebra]

4.2 If $Q'=Q\circ M$ for $M\in\mathrm{SL}_2(\mathbb Z)$, applying $M$ to the basis $(a,\theta_Q)$ gives a basis of the same ideal whose normalized norm form is $Q'$. Step 3.2 then recovers $I_{Q'}$ as a scalar multiple of $I_Q$, so $Q\mapsto[I_Q]$ or $[I_Q,\operatorname{sgn}(a)]$ is well defined. Conversely, if two forms give equivalent ordinary or oriented ideal classes, scale the first ideal and basis to the second. Their normalized forms are unchanged by scaling, and the resulting oriented bases of the same lattice differ by an integer matrix of determinant $+1$; the forms are properly equivalent by [F14]. Thus the form-to-ideal map is injective. [F9, F14, step 1.1, step 3.2, step 3.3, algebra]

5.1 If $D<0$, the embeddings are complex conjugates, so $N(\alpha x+\beta y)=|\sigma(\alpha x+\beta y)|^2>0$ for every nonzero real pair: the basis determinant $\nu\ne0$ ensures $\alpha x+\beta y\ne0$. Thus $Q_I$ is positive definite. If $D>0$, its leading coefficient $a=N(\alpha)/\nu$ is nonzero. The identity $Q_I(x,y)=a(x+\frac{b}{2a}y)^2-\frac{D}{4a}y^2$ takes both positive and negative values, so $Q_I$ is indefinite. Thus every proper invertible ideal class produces a form in the stated domain. [F1, F13, F15, F16, step 2.2, step 3.2, step 4.1, algebra]

6.1 For any proper invertible ideal class, step 3.2 constructs a form whose associated ideal is scalar-equivalent to that class, so the form-to-ideal map is surjective. It is therefore a bijection; transporting the abelian ideal-class multiplication through this bijection gives the Gauss composition group law. [F8, F10, step 3.2, step 4.2, algebra] ∎
