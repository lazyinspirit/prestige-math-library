---
id: cex-nonreduced-hypersurface-jacobian
kind: counterexample
title: "The equation must define the intended scheme"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-maximal-ideals-are-prime
  - def-axiom-of-choice
  - def-embedding-dimension-and-regular-local-ring
  - def-finite-type-and-module-finite-algebras
  - def-generated-and-principal-ideals
  - def-jacobian-matrix-affine-algebraic-set
  - def-krull-dimension-of-a-ring
  - def-locally-noetherian-and-noetherian-scheme
  - def-localisation-at-a-prime-ideal
  - def-polynomial-ring-over-a-commutative-ring
  - def-prime-and-maximal-ideals
  - def-radical-of-an-ideal
  - def-regular-local-ring-geometric-point
  - def-ring-characteristic
  - def-smooth-morphism-to-field-classical
  - ex-finite-dimensional-algebra-over-a-field-is-noetherian
  - lem-base-extension-field-coordinate-ring
  - lem-evaluation-ideal-is-maximal
  - lem-finite-type-local-on-source-and-target
  - lem-tensor-ring-presentations-for-base-change
  - thm-affine-scheme-ring-anti-equivalence
  - thm-characteristic-of-a-field-is-zero-or-prime
  - thm-monic-polynomial-division
  - thm-quotient-is-field-iff-ideal-maximal
  - thm-quotient-ring-universal-property
  - thm-stalk-structure-sheaf-prime-localization
  - thm-universal-property-of-a-polynomial-ring
  - thm-zariski-tangent-space-jacobian-kernel
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Example 4.2 (printed p. 82) and Exercise 4-9 (printed p. 99)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

False claim (the reduced zero set determines the tangent space and the
singular locus): let $k$ be a field and let $I,J\subseteq k[x_1,\ldots,x_n]$
be ideals with $\sqrt I=\sqrt J$, so that the closed subschemes
$\operatorname{Spec}(k[x]/I)$ and $\operatorname{Spec}(k[x]/J)$ have the same
underlying reduced zero set. Then at every common $k$-rational point the two
closed subschemes have the same tangent space, and a point is singular for one
of them exactly when it is singular for the other. In particular, for $n=1$
the equation $f=0$ would determine the singular points of its own zero set:
if $f(a)=0$ and the Jacobian $f'(a)$ vanishes, then $a$ would be a singular
point of the zero set $V(f)$.

Refutation. Let $k$ be a field of characteristic $p>0$ and consider the two
ideals
$$ (x^p)\subsetneq(x)\subseteq k[x],\qquad \sqrt{(x^p)}=(x). $$
They have the same reduced zero set, namely the origin of $\mathbb A^1_k$.
Nevertheless the tangent spaces at that point differ. Writing $\tau$ for the
class of $x$ in $k[x]/(x^p)$, the ring
$k[\tau]/(\tau^p)$ has $\tau$ nilpotent and nonzero, the unique prime
$(\tau)$, Krull dimension $0$ and embedding dimension $1$; its unique point is
therefore not regular, and the Jacobian of the equation $x^p$, namely
$px^{p-1}=0$ in characteristic $p$, correctly computes the tangent space of
this thickened scheme as the one-dimensional space $k$. The reduced point
$\operatorname{Spec}(k[x]/(x))=\operatorname{Spec}k$ has local ring $k$, is
regular, and has zero tangent space. So the same reduced zero set carries
tangent spaces of dimensions $1$ and $0$ and different singularity behaviour:
the equation $x^p=0$ defines the thickened scheme, and the vanishing Jacobian
is a statement about that scheme, not about its reduced zero set. The
Jacobian-kernel formula for the actual ideal is not refuted here; applied to
$(x^p)$ it gives the correct answer. Under AC the same comparison reads that
the reduced point is smooth over $k$ while the thickened scheme is not. No
reduction of any ideal is performed; the nilpotent class $\tau\ne0$ with
$\tau^p=0$ is retained throughout.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, the polynomial ring
$k[x]$, the ideals $(x^p)$ and $(x)$ of $k[x]$, the quotient rings
$A=k[x]/(x^p)$ with class $\tau=x+(x^p)$ and $B=k[x]/(x)$ with class
$\sigma=x+(x)$, the schemes $X_p=\operatorname{Spec}A$ and
$X_1=\operatorname{Spec}B$, and the Axiom of Choice, which is used only in the
final smoothness comparison.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: $k[x]$ consists of the finitely supported coefficient functions $\mathbb N\to k$, elements are written $\sum_jc_jx^j$ with unique coefficients, and $x$ is the coefficient sequence with $1$ at index $1$.

[F2] [[thm-universal-property-of-a-polynomial-ring]]: for commutative rings $R,S$, a unital ring homomorphism $\varphi:R\to S$ and $s\in S$ there is a unique unital ring homomorphism $R[x]\to S$ extending $\varphi$ and sending $x$ to $s$.

[F3] [[thm-monic-polynomial-division]]: for a monic $g\in R[x]$ and any $f\in R[x]$ there are unique $q,r$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$.

[F4] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains an ideal $I$ factors uniquely through the quotient ring.

[F5] [[def-generated-and-principal-ideals]]: $(S)$ is the intersection of all two-sided ideals containing $S$, and $(a)$ denotes the principal ideal generated by $a$.

[F6] [[def-prime-and-maximal-ideals]]: a proper ideal $P$ is prime when $ab\in P$ implies $a\in P$ or $b\in P$, and $M$ is maximal when no proper ideal lies strictly between $M$ and $R$.

[F7] [[thm-quotient-is-field-iff-ideal-maximal]]: for a commutative ring $R$ and ideal $M$, the quotient $R/M$ is a field exactly when $M$ is maximal.

[F8] [[cor-maximal-ideals-are-prime]]: every maximal ideal of a commutative ring is prime.

[F9] [[def-localisation-at-a-prime-ideal]]: for a prime ideal $\mathfrak p$ the localisation $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ consists of fractions $r/s$ with $s\notin\mathfrak p$.

[F10] [[def-krull-dimension-of-a-ring]]: the Krull dimension of a nonzero commutative ring is the supremum of the lengths of strict chains of prime ideals.

[F11] [[def-embedding-dimension-and-regular-local-ring]]: for a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$ one defines $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$, and $R$ is regular local exactly when $\operatorname{edim}R=\dim R$.

[F12] [[def-regular-local-ring-geometric-point]]: for a locally Noetherian scheme $X$ and $x\in X$ with local ring $R=\mathcal O_{X,x}$, the point $x$ is regular exactly when $\dim_{\kappa(x)}T_xX=\dim R$.

[F13] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is locally Noetherian when it has an affine open cover by spectra of Noetherian rings.

[F14] [[ex-finite-dimensional-algebra-over-a-field-is-noetherian]]: a commutative $k$-algebra whose underlying $k$-vector space is finite dimensional is a Noetherian ring.

[F15] [[lem-evaluation-ideal-is-maximal]]: the evaluation map $k[x]\to k$, $f\mapsto f(0)$, has kernel $(x)$, which is a maximal ideal.

[F16] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$ correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$, so $k$-algebra homomorphisms $A\to k$ are the $k$-rational points of $\operatorname{Spec}A$.

[F17] [[thm-stalk-structure-sheaf-prime-localization]]: for $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F18] [[def-jacobian-matrix-affine-algebraic-set]]: the Jacobian matrix of a finite generating list at a point has rows $(\partial f_i/\partial t_j(a))$, with formal monomial derivatives whose integer coefficients are read in $k$, and it uses the actual scheme ideal.

[F19] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal $I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational point $a\in X(k)$ and any finite generating list of $I$, the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J(a)$, independent of the list.

[F20] [[def-ring-characteristic]]: $\operatorname{char}k$ is the least positive $n$ with $n\cdot1_k=0$ when such an $n$ exists, and $0$ otherwise; so in characteristic $p$ the coefficient $p\cdot1_k$ vanishes.

[F21] [[thm-characteristic-of-a-field-is-zero-or-prime]]: the characteristic of a field is $0$ or a prime number, so $p\ge2$ here.

[F22] [[def-radical-of-an-ideal]]: $\sqrt I=\{x:x^n\in I\text{ for some }n\ge1\}$, and $I$ is radical when $I=\sqrt I$.

[F23] [[def-finite-type-and-module-finite-algebras]]: a commutative $R$-algebra $A$ is of finite type over $R$ when $A$ is isomorphic to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$.

[F24] [[lem-finite-type-local-on-source-and-target]]: a quasi-compact morphism locally of finite type is of finite type; equivalently, over each affine target open it may be tested on a finite affine source cover.

[F25] [[def-smooth-morphism-to-field-classical]]: under AC, a finite-type $k$-scheme $X$ is smooth over $k$ exactly when for every field extension $K/k$ every local ring of the base change $X_K$ is regular.

[F26] [[lem-base-extension-field-coordinate-ring]]: for a field extension $K/k$ and a $k$-scheme $X$, the inverse image of an affine open $U=\operatorname{Spec}A$ in $X_K$ is $\operatorname{Spec}(A\otimes_kK)$, these charts cover $X_K$, and $K=k$ gives the original charts.

[F27] [[lem-tensor-ring-presentations-for-base-change]]: for a unital ring map $A\to C$, any set of variables and any ideal $I\subseteq A[t_i]$ there is a ring isomorphism $(A[t_i]/I)\otimes_AC\cong C[t_i]/IC[t_i]$.

[F28] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function.

## Counterexample

**Proof technique:** direct.

1.1 Let $R=k[x]$, so every element of $R$ is a finitely supported coefficient sequence $\sum_jc_jx^j$ with unique coefficients $c_j\in k$ by [F1]; let $I=(x^p)$ and $J=(x)$ be the principal ideals generated by $x^p$ and $x$ [F5], so that $I=\{x^ph:h\in R\}$, $J=\{xh:h\in R\}$ and $I\subseteq J$ because $x^p=x\cdot x^{p-1}$; let $A=R/I$ and $B=R/J$ be the quotient rings with classes $\tau=x+I$ and $\sigma=x+J$. [given, F1, F5, algebra]

1.2 The evaluation map $\varepsilon:R\to k$ with $\varepsilon(x)=0$ exists and is unique by [F2]; its kernel is the maximal ideal $(x)$ by [F15], so $\varepsilon$ kills the ideals $I\subseteq J=(x)$ and, by [F4], induces surjective $k$-algebra homomorphisms $\bar\varepsilon:A\to k$ with $\tau\mapsto0$ and $\varepsilon_1:B\to k$ with $\sigma\mapsto0$; by [F16] these are $k$-rational points $0\in X_p(k)$ and $0\in X_1(k)$ of $X_p=\operatorname{Spec}A$ and $X_1=\operatorname{Spec}B$, and $\tau^p=0$ in $A$. [given, F2, F4, F15, F16]

2.1 Division by the monic polynomial $x^p$ in $R$ [F3] gives every $f\in R$ a unique $f=qx^p+r$ with $r=0$ or $\deg r<p$; comparing coefficients in the unique coefficient representation [F1] shows that the classes $1,\tau,\dots,\tau^{p-1}$ form a $k$-basis of $A$, that $1\ne0$ and $\tau\ne0$ in $A$, and that $A=k\cdot1\oplus(\tau)$ as $k$-vector spaces, since $(\tau)$ is spanned by $\tau,\dots,\tau^{p-1}$ and every $a=\sum_{j<p}c_j\tau^j$ has the unique decomposition $a=c_0+\tau\cdot\sum_{0<j<p}c_j\tau^{j-1}$; here $p\ge2$ by [F21]. [step 1.1, F1, F3, F21, algebra]

2.2 Division by the monic polynomial $x$ [F3] gives every $f\in R$ the unique expression $f=qx+f(0)$; hence every class in $B=R/(x)$ is the class of a unique constant, the structure map $k\to B$ is an isomorphism, $\sigma=0$ in the field $B$, and the unique prime ideal of $B$ is $(0)$ by [F6]. [step 1.1, F1, F3, F5, F6, algebra]

2.3 Tangent space of the thickened scheme: the Jacobian matrix of the single equation $x^p$ at the point $0$ is the $1\times1$ matrix $(p\,x^{p-1}|_{x=0})$ by [F18]; in characteristic $p$ the coefficient $p\cdot1_k$ is $0$ by [F20], so $px^{p-1}$ is the zero polynomial and the matrix is $(0)$; by [F19] there is a canonical $k$-linear isomorphism $T_0X_p\cong\ker(0:k\to k)=k$, of dimension $1$. [step 1.2, F18, F19, F20, algebra]

2.4 Finite type over $k$: the rings $A=k[x]/(x^p)$ and $B=k[x]/(x)$ are quotients of the polynomial ring $k[x]$, hence of finite type over $k$ by [F23]; over the affine base $\operatorname{Spec}k$ each of the schemes $X_p$ and $X_1$ is covered by its single affine chart with a finite-type coordinate ring, so [F24] makes the structure morphisms $X_p\to\operatorname{Spec}k$ and $X_1\to\operatorname{Spec}k$ of finite type. [step 1.1, F23, F24]

3.1 The constant-term map: by step 2.1 the assignment $A\to k$, $\sum_{j<p}c_j\tau^j\mapsto c_0$, is the composite of the quotient map $A\to A/(\tau)$ with the inverse of the isomorphism $k\to A/(\tau)$ induced by the constants, which is injective because $k\cdot1\cap(\tau)=0$ in the direct sum $A=k\cdot1\oplus(\tau)$; it is a surjective ring homomorphism with kernel $(\tau)$, so $A/(\tau)\cong k$ is a field and $(\tau)$ is a maximal ideal by [F7] and a prime ideal by [F8]. [step 2.1, F6, F7, F8, algebra]

3.2 $A$ is Noetherian: it is a commutative $k$-algebra whose underlying $k$-vector space has the finite basis $1,\tau,\dots,\tau^{p-1}$ of step 2.1, so [F14] makes $A$ a Noetherian ring, and $X_p=\operatorname{Spec}A$ is locally Noetherian by [F13]. [step 2.1, F13, F14, algebra]

3.3 The two ideals have the same reduced zero set: $(x^p)\subseteq(x)$ by step 1.1; the ideal $(x)$ is maximal, hence prime, by [F15] and [F8]; if $f^n\in(x^p)\subseteq(x)$ for some $n\ge1$ then primeness of $(x)$ [F6] gives $f\in(x)$, so $\sqrt{(x^p)}\subseteq(x)$; conversely $x^p\in(x^p)$ gives $x\in\sqrt{(x^p)}$ and hence $(x)\subseteq\sqrt{(x^p)}$; therefore $\sqrt{(x^p)}=(x)=\sqrt{(x)}$ by [F22], while the inclusion is strict, $x\notin(x^p)$, since otherwise $\tau=x+(x^p)=0$ against step 2.1. [step 1.1, step 2.1, F5, F6, F8, F15, F22, algebra]

4.1 Every prime ideal $\mathfrak p$ of $A$ contains $\tau$: since $\tau^p=0\in\mathfrak p$ by step 1.2, induction on the exponent using primeness [F6] gives $\tau\in\mathfrak p$; hence $(\tau)\subseteq\mathfrak p$, and maximality of $(\tau)$ from step 3.1 forces $\mathfrak p=(\tau)$; therefore $(\tau)$ is the unique prime ideal and, being maximal, the unique maximal ideal, so $A$ is a nonzero local ring with residue field $A/(\tau)\cong k$ and $X_p=\operatorname{Spec}A$ has exactly one point. [step 1.2, step 3.1, F6, F7, F8, algebra]

5.1 The Krull dimension is $\dim A=0$: $A$ is nonzero by step 2.1 and its only prime ideal is $(\tau)$ by step 4.1, so the only strict chains of prime ideals of $A$ have length $0$; by [F10], $\dim A=0$. [step 2.1, step 4.1, F10]

5.2 Embedding dimension: for the maximal ideal $\mathfrak m=(\tau)$ of the local ring $A$ one has $\mathfrak m^2=(\tau^2)$ and $\mathfrak m=k\cdot\tau+\mathfrak m^2$, because for $a=c_0+\tau b$ from the decomposition of step 2.1 the product $a\tau=c_0\tau+\tau^2b$ lies in $k\cdot\tau+\mathfrak m^2$; moreover $\tau\notin\mathfrak m^2$, since every element of $(\tau^2)$ has zero coordinate of $\tau$ in the basis of step 2.1 while $\tau$ has coordinate $1$; hence the class of $\tau$ is a $k$-basis of $\mathfrak m/\mathfrak m^2$ and $\operatorname{edim}A=\dim_k(\mathfrak m/\mathfrak m^2)=1$ by [F11]. [step 2.1, step 4.1, step 3.2, F11, algebra]

5.3 Local rings of the two points: by [F17] the stalk of $X_p$ at its unique point, the prime $\mathfrak m=(\tau)$, is $\mathcal O_{X_p,0}\cong A_{\mathfrak m}$; every $s\in A\setminus\mathfrak m$ has nonzero constant term $c_0$ in the decomposition of step 2.1, so $s=c_0(1+u)$ with $u=c_0^{-1}\tau b$ and $u^p=c_0^{-p}\tau^pb^p=0$, and $1+u$ is a unit with the explicit inverse $\sum_{j=0}^{p-1}(-u)^j$; hence every $s\notin\mathfrak m$ is a unit of $A$ and the localisation map $A\to A_{\mathfrak m}$ is an isomorphism (surjective because $a/s=as^{-1}$, injective because $ta=0$ for a unit $t\notin\mathfrak m$ forces $a=0$), so $\mathcal O_{X_p,0}\cong A$ by [F9]; for the field $B$ the unique prime is $(0)$ by step 2.2, its localisation is $B$ itself and $\mathcal O_{X_1,0}\cong B\cong k$. [step 2.1, step 2.2, step 4.1, F9, F17, algebra]

6.1 The local ring $A$ is not regular: it is nonzero, commutative and Noetherian by steps 2.1, 3.2, and $\operatorname{edim}A=1\ne0=\dim A$ by steps 5.1 and 5.2, so [F11] gives that $A$ is not a regular local ring. [step 5.1, step 5.2, F11]

7.1 Tangent space and regularity of the reduced point: the Jacobian of the equation $x$ is the matrix $(1)$, so [F19] gives $T_0X_1\cong\ker(1:k\to k)=0$; the ring $B\cong k$ is a field, hence a nonzero Noetherian local ring whose maximal ideal is $0$ and whose only prime is $(0)$, so $\dim B=0$ by [F10] and $\operatorname{edim}B=\dim_k0=0$ by [F11], making $B$ regular local; therefore $\dim_kT_0X_1=0=\dim B=\dim\mathcal O_{X_1,0}$ and $0$ is a regular point of $X_1$ by [F12], while $\dim_kT_0X_p=1\ne0=\dim A=\dim\mathcal O_{X_p,0}$ by steps 5.1, 6.1 and 5.3, so $0$ is not a regular point of $X_p$ by [F12] and [F13]. [step 2.2, step 5.1, step 3.2, step 6.1, step 5.3, step 2.3, F10, F11, F12, F13, F19, algebra]

7.2 Smoothness form under AC: assume [F28]; by [F25] a finite-type $k$-scheme is smooth over $k$ exactly when every local ring of every base change along a field extension $K/k$ is regular. For $X_1\cong\operatorname{Spec}B$ and any field extension $K/k$, the base change is covered by the single affine chart $\operatorname{Spec}(B\otimes_kK)$ by [F26], and $B\otimes_kK\cong K[x]/(x)\cong K$ by [F27], a field, whose maximal ideal $0$ gives a regular local ring; hence $X_1$ is smooth over $k$. For $X_p$ the field extension $K=k$ gives the base change $X_p$ itself by [F26], whose local ring at $0$ is $A$, not regular by step 6.1, so $X_p$ is not smooth over $k$. The comparisons exhibit the single extension $K=k$ and the single points involved, so AC is used only through the criterion [F25] of [F28] and no dependent choice is made. [step 6.1, step 5.3, step 2.4, F25, F26, F27, F28, given]

8.1 Conclusion: the ideals $(x^p)$ and $(x)$ have the same reduced zero set, the single point $0$ of $\mathbb A^1_k$, yet at that point the tangent space $T_0X_p\cong k$ is one-dimensional while $T_0X_1=0$ is zero-dimensional by steps 2.3 and 7.1, and $0$ is nonregular on the thickened scheme $X_p$ while regular on the reduced point $X_1$ by step 7.1; so the same reduced zero set does not determine the tangent space or the singular locus, and the false claim stated above is refuted; the vanishing Jacobian of $x^p$ in characteristic $p$ is a correct statement about the nonreduced scheme $X_p=\operatorname{Spec}(k[x]/(x^p))$ that the equation $x^p=0$ defines, and since no reduction is performed the nilpotent $\tau\ne0$ with $\tau^p=0$ is retained throughout. [step 2.3, step 7.1, step 3.3, F5, F22, given]

9.1 Boundary and scope dispositions: both schemes are nonempty, each having exactly the one point exhibited in steps 1.2, 2.2 and 4.1; the Krull dimension is $0$ in both cases (steps 5.1 and 7.1) while the tangent dimensions are $1$ and $0$, and the zero polynomial $px^{p-1}$ of step 2.3 is the identically zero Jacobian; each system has one variable, one equation and a single principal generator (step 1.1), and the least prime $p=2$ is included, where $\mathfrak m^2=(\tau^2)=0$ and the class of $\tau$ still spans $\mathfrak m/\mathfrak m^2$ because $\tau\ne0$ by step 2.1; the example is the degenerate nonreduced case $\tau^p=0$ with $\tau\ne0$, and no reduction of $I$ to its radical is performed, which is exactly why $\dim_kT_0X_p=1$ while the reduced point has zero tangent space; the field $k$ is an arbitrary field of characteristic $p>0$, with no algebraic closure, perfectness or finiteness hypothesis, and the phenomenon is characteristic $p$ because only then is the derivative $px^{p-1}$ of $x^p$ the zero polynomial; the refutation of the false claim is an instance of failure of the implication "same reduced zero set gives the same tangent space", the smoothness criterion of step 7.2 is used in both directions as stated there, and the Axiom of Choice is confined to that step. [step 1.1, step 2.1, step 2.2, step 4.1, step 5.1, step 2.3, step 7.1, step 3.3, step 7.2, F20, F21, algebra] ∎

## Source qualification

Milne, *Algebraic Geometry* v6.10, Example 4.2 (printed p. 82) computes the
tangent space of $X^m+Y^m=1$ as $m a^{m-1}(X-a)+m b^{m-1}(Y-b)=0$ and
observes that all points of the curve are nonsingular unless the
characteristic of $k$ divides $m$, in which case
$X^m+Y^m-1=X^{m_0p}+Y^{m_0p}-1=(X^{m_0}+Y^{m_0}-1)^p$ has multiple factors:
the equation is a $p$-th power and its Jacobian vanishes identically, so it no
longer determines the singular points of the underlying reduced curve.
Exercise 4-9 (printed p. 99) asks whether the tangent space $T'_{\mathbf a}$
defined by the equations $(df)_{\mathbf a}=0$ for $f$ in an ideal
$\mathfrak a\ne I(V)$ must always differ from $T_{\mathbf a}(V)$, and its
official solution (printed p. 223) answers that it need not; the previous item
of this page carries that witness. The present item is the one-variable
hypersurface instance of Milne's characteristic-$p$ degeneration: the
equation $x^p=0$ is the $p$-th power of the reduced equation $x=0$, its
Jacobian $px^{p-1}$ is the zero polynomial in characteristic $p$, and the
nonradical ideal $(x^p)$ cuts out the thickened scheme
$\operatorname{Spec}(k[\tau]/(\tau^p))$, whose tangent space is correctly
computed as one-dimensional and whose local ring is nonregular, while the
reduced zero set is the regular point $\operatorname{Spec}k$. The source
states the degeneration and the exercise; the explicit ring, basis,
dimension, embedding-dimension, tangent-space and smoothness computations are
proved here from the library's own suppliers, and the source's
algebraically-closed convention is not imposed.
