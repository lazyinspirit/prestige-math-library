---
id: thm-delone-faddeev-cubic-rings-and-binary-cubic-forms
kind: theorem
title: "Delone–Faddeev correspondence for cubic rings"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-integral-binary-cubic-form, def-cubic-ring, thm-cayley-hamilton]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, §2, Theorem 9 and Propositions 10–11"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§2, printed pp. 4–5"
verification: {}
---

## Statement

Let $f(x,y)=ax^3+bx^2y+cxy^2+dy^3$ be an integral binary cubic form, with the twisted $\operatorname{GL}_2(\mathbb Z)$ action specified in its definition. Define $R(f)$ on the basis $1,\omega,\theta$ by
$$\omega\theta=-ad,\qquad \omega^2=-ac-b\omega+a\theta,\qquad \theta^2=-bd-d\omega+c\theta.$$
Then these products define a cubic ring, and $f\mapsto R(f)$ induces a bijection from $\operatorname{GL}_2(\mathbb Z)$-orbits of integral binary cubic forms to isomorphism classes of cubic rings. For a cubic ring, define $\operatorname{Tr}(r)$ as the trace of multiplication by $r$ on its rank-three rational algebra, and define its discriminant as the determinant of the pairing $(r,s)\mapsto\operatorname{Tr}(rs)$ on an integral basis. This ring discriminant equals
$$\operatorname{Disc}(R(f))=\operatorname{Disc}(f)=b^2c^2-4ac^3-4b^3d-27a^2d^2+18abcd.$$
Moreover, $R(f)$ is an integral domain if and only if $f$ is irreducible over $\mathbb Q$.

## Statement references

[[def-integral-binary-cubic-form]]

[[def-cubic-ring]]

[[thm-cayley-hamilton]]

[Bhargava, Shankar, and Tsimerman, §2](https://arxiv.org/pdf/1005.0672)

## Facts & Assumptions

**Given:** An integral binary cubic form $f$ and a cubic ring as defined above.

[F1] An integral binary cubic form has coefficients $a,b,c,d\in\mathbb Z$, discriminant $b^2c^2-4ac^3-4b^3d-27a^2d^2+18abcd$, and the twisted action $(\gamma f)(x,y)=\det(\gamma)^{-1}f((x,y)\gamma)$. [[def-integral-binary-cubic-form]]

[F2] A cubic ring is a commutative unital ring free of rank three over $\mathbb Z$. [[def-cubic-ring]]

[F3] The characteristic polynomial of multiplication by an element of a cubic ring, viewed on its rank-three rational algebra, annihilates that multiplication operator. [[thm-cayley-hamilton]]

## Proof
1.1 In a cubic ring $R$, the element $1$ is primitive in its free rank-three additive group: if $1=nr$ for $n>1$, multiplication by $n$ would be surjective on $R$ since $x=x\cdot1=n(xr)$, contradicting that its determinant on a rank-three free group is $n^3\ne\pm1$. In any free basis, the coordinates of a primitive vector have greatest common divisor $1$; the Euclidean algorithm, implemented by unimodular integer row operations, takes that coordinate vector to $(1,0,0)$, so $1$ extends to a basis $1,\omega,\theta$. Modulo $\mathbb Z$, write $\omega\theta=u\omega+v\theta$. Replacing $\omega$ by $\omega-v$ and $\theta$ by $\theta-u$ makes $\omega\theta\in\mathbb Z$ and retains a basis. Thus a normal basis exists. [F2, construct, algebra]

1.2 Conversely, impose the displayed laws on the free module with basis $1,\omega,\theta$ and extend bilinearly and commutatively with unit $1$. The two potentially nontrivial associators on the generators are $(\omega^2)\theta-\omega(\omega\theta)$ and $(\omega\theta)\theta-\omega(\theta^2)$; substituting the laws makes each zero. Associators with a repeated outer generator vanish by commutativity, so associativity holds on basis triples and hence on all elements. This defines a cubic ring. [given, algebra]

2.1 For a normal basis write $\omega\theta=n$, $\omega^2=m-b\omega+a\theta$, and $\theta^2=\ell-d\omega+c\theta$, with integer coefficients. Associativity in $(\omega^2)\theta=\omega(\omega\theta)$ gives $n=-ad$ and $m=-ac$; associativity in $(\omega\theta)\theta=\omega(\theta^2)$ then gives $\ell=-bd$. These are exactly the displayed multiplication laws. [step 1.1, algebra]

3.1 For any normal basis, $r=x\omega+y\theta$ satisfies $r\wedge r^2=(ax^3+bx^2y+cxy^2+dy^3)(\omega\wedge\theta)$ in $\bigwedge^2(R/\mathbb Z)$. A basis change by $\gamma\in\operatorname{GL}_2(\mathbb Z)$ changes this cubic map by $\det(\gamma)^{-1}f((x,y)\gamma)$, precisely the prescribed twisted action. Thus the orbit is independent of the normal basis. Conversely, a ring isomorphism carries a normal basis to a normal basis and induces such a basis change on $R/\mathbb Z$; the form orbit is therefore a complete isomorphism invariant, proving the bijection. [F1, F2, step 2.1, step 1.2, algebra]

3.2 From the multiplication table, the trace-pairing matrix in the basis $1,\omega,\theta$ is $\begin{pmatrix}3&-b&c\\-b&b^2-2ac&-3ad\\c&-3ad&c^2-2bd\end{pmatrix}$. Its determinant expands to $b^2c^2-4ac^3-4b^3d-27a^2d^2+18abcd$, giving discriminant preservation by [F1]. [F1, step 2.1, step 1.2, algebra]

4.1 If $f$ is reducible over $\mathbb Q$, it has a rational linear factor. A primitive integral vector on that line extends to a unimodular basis; after the corresponding twisted change, the form has $a=0$. The table then gives $\omega\theta=0$ with $\omega,\theta$ nonzero basis elements, so $R(f)$ is not a domain. [F1, step 3.1, algebra]

5.1 Conversely, suppose $R(f)$ has nonzero zero divisors $\alpha,\beta$ with $\alpha\beta=0$. Apply [F3] to multiplication by $\alpha$; its characteristic polynomial is $T^3+c_1T^2+c_2T+c_3$ with integer coefficients. Applying the resulting relation to $1$ and multiplying by $\beta$ gives $c_3\beta=0$, so $c_3=0$ because $R(f)$ is torsion-free. Set $\gamma=\alpha^2+c_1\alpha+c_2$. Then $\alpha\gamma=0$ and direct substitution in the same relation gives $\gamma^2=c_2\gamma$. If $\gamma=0$, set $w=\alpha$; otherwise set $w=\gamma$. Then $w\ne0$ and $w^2\in\mathbb Z+\mathbb Zw$. In the first case $w$ is not an integer because $w\beta=0$ with $\beta\ne0$; in the second case it is not an integer because $\alpha w=0$ with $\alpha\ne0$. The basis from step 1.1 shows that an element of $R(f)$ lying in $\mathbb Q$ has an integer coefficient on $1$ and zero coefficients on $\omega,\theta$, so $R(f)\cap\mathbb Q=\mathbb Z$ and $w$ is nonrational. Since $w^2\in\mathbb Z+\mathbb Zw$, the rational span $\mathbb Q+\mathbb Qw$ is a two-dimensional subalgebra. Its intersection $S=R(f)\cap(\mathbb Q+\mathbb Qw)$ is a subring of rank two: it contains $1,w$, and every vector in that rational subspace has a nonzero integer multiple in the full lattice $R(f)$. It is saturated, since $nx\in S$ for $x\in R(f)$ implies $x=(1/n)(nx)\in\mathbb Q+\mathbb Qw$, hence $x\in S$. Thus $S/\mathbb Z$ is a saturated rank-one subgroup of the free group $R(f)/\mathbb Z\cong\mathbb Z^2$. A generator of that rank-one subgroup has coprime coordinates, so Bezout gives a second vector completing it to a basis; hence $S$ has a basis $1,w'$, and this basis extends to $1,w',t$ for $R(f)$. Its rank-two subring remains closed after normalizing the basis by integer shifts as in step 1.1, so the coefficient of $t$ in $(w')^2$ is zero. In the associated normal-basis table this coefficient is $a$, so that associated form has $a=0$ and is divisible by $y$. By step 3.1 it lies in the orbit of $f$, and an invertible linear substitution and nonzero determinant factor preserve reducibility; hence $f$ is reducible. [F2, F3, step 1.1, step 2.1, step 1.2, step 3.1, algebra] ∎
