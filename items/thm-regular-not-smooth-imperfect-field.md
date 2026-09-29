---
id: thm-regular-not-smooth-imperfect-field
kind: theorem
title: "Purely inseparable field algebras separate regularity from smoothness"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-embedding-dimension-and-regular-local-ring
  - def-field
  - def-field-homomorphism
  - def-finite-type-and-module-finite-algebras
  - def-krull-dimension-of-a-ring
  - def-locally-noetherian-and-noetherian-scheme
  - def-regular-local-ring-geometric-point
  - def-smooth-morphism-to-field-classical
  - ex-finite-dimensional-algebra-over-a-field-is-noetherian
  - ex-noetherian-integers-and-fields
  - lem-base-extension-field-coordinate-ring
  - lem-finite-type-local-on-source-and-target
  - lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power
  - lem-prime-divides-intermediate-binomial-coefficients
  - lem-tensor-ring-presentations-for-base-change
  - thm-affine-scheme-ring-anti-equivalence
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-perfect-field-characterizations
  - thm-polynomial-quotient-is-a-field-iff-irreducible
  - thm-stalk-structure-sheaf-prime-localization
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Varieties, Example 33.12.7 (tag 038S): $\\operatorname{Spec}(k[x]/(x^p-t))$ is a regular variety that is not geometrically reduced"
      url: "https://stacks.math.columbia.edu/tag/038S"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field of
characteristic $p>0$ and put $k^p=\{x^p:x\in k\}$. Let $a\in k$ satisfy
$a\notin k^p$, and put

$$L=k[t]/(t^p-a),\qquad \alpha=t+(t^p-a)\in L.$$

Then $L$ is a field, the structural map $k\to L$ is injective, $\alpha^p=a$ and
$L=k[\alpha]$, so $L$ is a field extension of $k$; the affine $k$-scheme
$X=\operatorname{Spec}L$ is of finite type over $k$ and regular; for every field
extension $K/k$ and every $\beta\in K$ with $\beta^p=a$ there is a $K$-algebra
isomorphism

$$L\otimes_kK\cong K[u]/(u^p),$$

where $K[u]/(u^p)$ is a Noetherian local ring with unique prime $(u)$, Krull
dimension $0$ and embedding dimension $1$, and is not regular; and consequently
$X\to\operatorname{Spec}k$ is not smooth, although $X$ is regular. The failure
is witnessed already by $K=L$ and $\beta=\alpha$. No reduction, radicalization
or Frobenius twist is applied: the displayed isomorphism is of the actual
tensor product, and the nilpotent class $u$ is retained.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, the set $k^p=\{x^p:x\in k\}$, an element $a\in k$ with $a\notin k^p$, the ring $L=k[t]/(t^p-a)$ with the class $\alpha$ of $t$, and the Axiom of Choice.

[F1] [[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]: for a field $F$ of characteristic $p>0$, an element $c\in F$ that is not a $p$th power, and $n\ge1$, the polynomial $x^{p^n}-c$ is irreducible in $F[x]$.

[F2] [[thm-polynomial-quotient-is-a-field-iff-irreducible]]: for a field $F$ and a nonconstant $f\in F[x]$, the quotient ring $F[x]/(f)$ is a field exactly when $f$ is irreducible.

[F3] [[def-finite-type-and-module-finite-algebras]]: a commutative $R$-algebra $A$ is of finite type over $R$ when $A=R[a_1,\ldots,a_n]$ for some finite list, equivalently when $A$ is isomorphic to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$.

[F4] [[lem-finite-type-local-on-source-and-target]]: a quasi-compact morphism locally of finite type is of finite type; equivalently, over each affine target open it may be tested on a finite affine source cover.

[F5] [[def-smooth-morphism-to-field-classical]]: under AC, for a finite-type $k$-scheme $X$, the morphism $X\to\operatorname{Spec}k$ is smooth if and only if for every field extension $K/k$ every local ring of the scheme-theoretic base change $X_K$ is regular.

[F6] [[lem-base-extension-field-coordinate-ring]]: for a field extension $K/k$ and a $k$-scheme $X$, the inverse image under $X_K\to X$ of every affine open $U=\operatorname{Spec}A$ of $X$ is $\operatorname{Spec}(A\otimes_kK)$, and these affine charts cover $X_K$.

[F7] [[lem-tensor-ring-presentations-for-base-change]]: for a unital ring map $A\to C$ and an ideal $I\subseteq A[t_i]$, there is a ring isomorphism $(A[t_i]/I)\otimes_AC\cong C[t_i]/IC[t_i]$; no flatness, finite-generation or nonzero-ring hypothesis is required.

[F8] [[thm-affine-scheme-ring-anti-equivalence]]: $\operatorname{Spec}$ is a contravariant equivalence from commutative rings to affine schemes with quasi-inverse global sections, so a ring isomorphism induces an isomorphism of affine schemes.

[F9] [[def-embedding-dimension-and-regular-local-ring]]: for a nonzero commutative Noetherian local ring $(R,\mathfrak m,\kappa)$, $\operatorname{edim}R=\dim_\kappa(\mathfrak m/\mathfrak m^2)$, and $R$ is regular local exactly when $\operatorname{edim}R=\dim R$.

[F10] [[ex-finite-dimensional-algebra-over-a-field-is-noetherian]]: a commutative algebra over a field whose underlying vector space is finite dimensional is a Noetherian ring.

[F11] [[ex-noetherian-integers-and-fields]]: every field is a Noetherian ring.

[F12] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is locally Noetherian when it has an affine open cover by spectra of Noetherian rings.

[F13] [[def-regular-local-ring-geometric-point]]: on a locally Noetherian scheme $X$, a point $x$ is regular when the local ring $\mathcal O_{X,x}$ is a regular local ring.

[F14] [[thm-stalk-structure-sheaf-prime-localization]]: for a prime $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F15] [[def-krull-dimension-of-a-ring]]: for a nonzero commutative ring, the Krull dimension is the supremum of the lengths of strict chains of prime ideals.

[F16] [[thm-binomial-theorem-over-a-commutative-ring]]: $(x+y)^n=\sum_{k=0}^n\binom nkx^ky^{n-k}$ in every commutative ring, with natural-number coefficients acting by repeated addition.

[F17] [[lem-prime-divides-intermediate-binomial-coefficients]]: if $p$ is prime and $0<k<p$, then $p$ divides $\binom pk$.

[F18] [[def-field]]: a field has $0\ne1$, and every nonzero element $x$ has a multiplicative inverse $x^{-1}$ with $x\,x^{-1}=1$.

[F19] [[def-field-homomorphism]]: a field homomorphism $\varphi:F\to G$ satisfies $\varphi(xy)=\varphi(x)\varphi(y)$ and $\varphi(1_F)=1_G$, and an embedding is an injective field homomorphism.

[F20] [[thm-perfect-field-characterizations]]: a field $F$ is perfect exactly when $\operatorname{char}F=0$, or $\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective.

[F21] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; it is declared here because [F5] carries that assumption, and no further simultaneous choice is used below.

## Proof

**Proof technique:** direct.

1.1 The class $\alpha$ of $t$ satisfies $\alpha^p=a$, and $L=k[\alpha]$ is a quotient of $k[t]$, hence of finite type over $k$ by [F3]. The polynomial $t^p-a$ is nonconstant, and [F1] with $F=k$, $c=a$ and $n=1$ makes it irreducible in $k[t]$; by [F2] the quotient $L$ is therefore a field. The structural map $\varphi:k\to L$ is a field homomorphism by [F19] and $1_L\ne0_L$ by [F18]; for $x\ne0$ in $k$ the inverse relation $x\,x^{-1}=1$ of [F18] is preserved by [F19], giving $\varphi(x)\varphi(x^{-1})=\varphi(1)=1\ne0$, so $\varphi(x)\ne0$. Hence $\varphi$ is injective and exhibits $k$ as a subfield of $L$. [given, F1, F2, F3, F18, F19, algebra]

1.2 For any field $F$, the quotient ring $R_F=F[u]/(u^p)$ has the classes of $1,u,\ldots,u^{p-1}$ as an $F$-basis, because division by the monic polynomial $u^p$ leaves unique remainders of degree less than $p$. Hence $R_F$ is a commutative $F$-algebra of dimension $p$ over $F$, and it is a Noetherian ring by [F10]. Since $p\ge2$, the ring $R_F$ is nonzero and $u\ne0$ in $R_F$. [F10, algebra]

1.3 Let $K/k$ be a field extension and let $\beta\in K$ satisfy $\beta^p=a$. Then $K$ has characteristic $p$, and [F16] with $x=z$, $y=-\beta$ and $n=p$ gives $(z-\beta)^p=\sum_{k=0}^p\binom pkz^{p-k}(-\beta)^k$ in the commutative ring $K[z]$; the intermediate coefficients $\binom pk$ with $0<k<p$ vanish by [F17], while $\binom p0=\binom pp=1$, so $(z-\beta)^p=z^p+(-\beta)^p=z^p-\beta^p=z^p-a$, where $(-\beta)^p=-\beta^p$ holds in every characteristic. [F16, F17, algebra]

2.1 $X=\operatorname{Spec}L$ is of finite type over $k$: over the affine base $\operatorname{Spec}k$ the source is covered by the single affine chart $\operatorname{Spec}L$, and the ring map $k\to L$ is of finite type by step 1.1, so [F4] applies. [F4, step 1.1]

2.2 $X$ is locally Noetherian and regular. Since $L$ is a field, [F11] makes $L$ a Noetherian ring, and the one-chart cover $\{\operatorname{Spec}L\}$ witnesses local Noetherianity by [F12]. The field $L$ has the single prime ideal $(0)$, so $\dim L=0$ by [F15]; its maximal ideal is $(0)$, so $\mathfrak m/\mathfrak m^2=0$ and $\operatorname{edim}L=0=\dim L$, which makes $L$ a regular local ring by [F9]. The single point $(0)$ of $X$ has local ring $\mathcal O_{X,(0)}\cong L_{(0)}=L$ by [F14], so it is regular by [F13]; being the only point, it makes $X$ regular. [F9, F11, F12, F13, F14, F15, step 1.1]

2.3 For a field extension $K/k$, write $X_K$ for the base change of $X$ along $\operatorname{Spec}K\to\operatorname{Spec}k$. The inverse image of the affine open $U=X$ under $X_K\to X$ is $\operatorname{Spec}(L\otimes_kK)$ by [F6], and it is all of $X_K$; applying [F7] with $A=k$, the variable $t$, the ideal $I=(t^p-a)\subseteq k[t]$ and $C=K$ gives a ring isomorphism $L\otimes_kK\cong K[z]/(z^p-a)$. [F6, F7, step 1.1]

2.4 For any field $F$, the ring $R_F=F[u]/(u^p)$ is local with unique prime $(u)$. By the basis of step 1.2 every element of $R_F$ has a unique expression $c_0+c_1u+\cdots+c_{p-1}u^{p-1}$. If $c_0\ne0$, write the element as $c_0(1+uh)$; then $(uh)^p=u^ph^p=0$, so $1+uh$ has inverse $1-uh+(uh)^2-\cdots+(-uh)^{p-1}$ and the element is a unit. If $c_0=0$, the element lies in $(u)$ and is not a unit, because $u\ne0$ is nilpotent and a nilpotent element of a nonzero commutative ring cannot be a unit. Hence $(u)$ is the unique maximal ideal. Since $u^p=0$, every prime ideal contains $u$ and hence contains $(u)$; and $(u)$ is prime because $R_F/(u)\cong F$ is a field. So $(u)$ is the only prime ideal. [step 1.2, algebra]

3.1 Fix a field extension $K/k$ and $\beta\in K$ with $\beta^p=a$. Combining steps 2.3 and 1.3 and substituting $u=z-\beta$ gives $K$-algebra isomorphisms $L\otimes_kK\cong K[z]/(z^p-a)=K[z]/((z-\beta)^p)\cong K[u]/(u^p)=R_K$, with $R_K$ as in steps 1.2 and 2.4; in particular, taking $K=L$ and $\beta=\alpha$, which is legitimate by step 1.1, the base change $X_L=\operatorname{Spec}(L\otimes_kL)$ is isomorphic to $\operatorname{Spec}R_L$ by [F8]. [F8, step 1.1, step 1.2, step 1.3, step 2.3, step 2.4, algebra]

3.2 For any field $F$, the ring $R_F$ is not a regular local ring. It is nonzero, Noetherian by step 1.2, and local with maximal ideal $(u)$ by step 2.4. As $(u)$ is the only prime ideal, [F15] gives $\dim R_F=0$. Every element of $(u)$ is congruent modulo $(u)^2$ to $cu$ for some $c\in F$ by the basis of step 1.2, and $u\notin(u)^2$ because $u$ has basis coefficient $1$ in degree $1$ while every element of $(u)^2$ has basis coefficients only in degrees at least $2$; hence $(u)/(u)^2$ is one-dimensional over $F$ with basis the class of $u$, and $\operatorname{edim}R_F=1$. Thus $\operatorname{edim}R_F=1\ne0=\dim R_F$, and [F9] shows that $R_F$ is not regular local. [F9, F15, step 1.2, step 2.4, algebra]

4.1 The scheme $X_L$ has a nonregular local ring. By step 3.1, $X_L\cong\operatorname{Spec}R_L$, and by step 2.4 the ring $R_L$ is local with unique maximal ideal $(u)$, so $\operatorname{Spec}R_L$ consists of the single point $(u)$. Its local ring is $\mathcal O_{\operatorname{Spec}R_L,(u)}\cong(R_L)_{(u)}=R_L$ by [F14], the last equality because every element outside $(u)$ is a unit by step 2.4. Step 3.2 says that $R_L$ is not a regular local ring, so this local ring of $X_L$ is not regular. [F14, step 2.4, step 3.1, step 3.2]

5.1 $X$ is not smooth over $k$. By [F5], the AC-carrying geometric-regularity characterization, $X\to\operatorname{Spec}k$ is smooth only if every local ring of every base change $X_K$, with $K/k$ a field, is regular. The field extension $K=L$ of step 1.1 and the nonregular local ring of $X_L$ exhibited in step 4.1 contradict that condition, so $X\to\operatorname{Spec}k$ is not smooth. Meanwhile $X$ is of finite type over $k$ by step 2.1 and regular by step 2.2, so an imperfect base field separates regularity from smoothness. [F5, F21, step 2.1, step 2.2, step 4.1, given]

6.1 Boundary and hypothesis checks. (i) The hypothesis $a\notin k^p$ is exactly what step 1.1 needs, and by [F20] the existence of some such $a$ is equivalent to imperfection of $k$ in characteristic $p$; a perfect field of characteristic $p$ has no such $a$, so the conclusion of step 5.1 cannot arise there. (ii) If instead $a=b^p$ lies in $k^p$, then $t^p-a=(t-b)^p$ and $L\cong k[u]/(u^p)$ is the nonreduced ring of steps 1.2 and 3.2, which is not even regular; so the hypothesis is used, not decorative. (iii) The nilpotent class $u$ survives: steps 2.3 and 3.1 are isomorphisms of the actual tensor product, and no reduction or radical is taken, so the nonreduced base change is retained. (iv) The extension is genuinely needed: for $K=k$ the base change is $X$ itself, which is regular by step 2.2, and the witness $K=L$ is the field generated over $k$ by one $p$th root of $a$. (v) At $p=2$ the ring $R_F=F[u]/(u^2)$ is the classical dual-number ring of dimension $0$ and embedding dimension $1$; steps 1.2 through 3.2 divide by nothing except the monic polynomial $u^p$, so characteristic $2$ is included. (vi) AC is declared in [F21] and used only through [F5]; the proof exhibits the single extension $K=L$ and one point, so it makes no simultaneous choice and invokes no dependent choice. [F5, F9, F20, F21, given, step 1.1, step 1.2, step 2.2, step 2.3, step 2.4, step 3.1, step 3.2, step 5.1, algebra] ∎

## Source qualification

Stacks Project Example 33.12.7 (tag 038S) takes $k=\mathbb F_p(t)$ and observes
that $\operatorname{Spec}(k[x]/(x^p-t))$ is a regular variety over $k$ that is
not geometrically reduced, the base change to $k(t^{1/p})$ becoming
$k(t^{1/p})[\epsilon]/(\epsilon^p)$. That example is the case
$a=t\notin k^p$ of the statement above. The example is used here as the
literature source for the phenomenon only: the field, regularity, base-change
and non-smoothness assertions are each proved from the library's own suppliers
in steps 1.1--5.1, and the general statement over an arbitrary field $k$ of
characteristic $p$ with an arbitrary $a\notin k^p$ is not asserted by that
example. The equivalence between smoothness over a field and geometric
regularity invoked in step 5.1 is the one proved in
[[def-smooth-morphism-to-field-classical]], not an external citation. The
dual-number case $p=2$ is the published example of
[[ex-dual-numbers-not-regular]], which records the same dimension-zero,
embedding-dimension-one computation for $u^2=0$.
