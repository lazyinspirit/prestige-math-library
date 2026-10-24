---
id: cex-bertini-characteristic-p-failure
kind: counterexample
title: "Frobenius linear systems have nonreduced general members"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-algebraically-closed-field
  - def-axiom-of-choice
  - def-finite-type-and-module-finite-algebras
  - def-krull-dimension-of-a-ring
  - def-linear-system-base-locus
  - def-locally-noetherian-and-noetherian-scheme
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-regular-local-ring-geometric-point
  - def-smooth-morphism-to-field-classical
  - def-zariski-tangent-space-point
  - ex-finite-dimensional-algebra-over-a-field-is-noetherian
  - lem-finite-type-local-on-source-and-target
  - lem-prime-divides-intermediate-binomial-coefficients
  - lem-zero-scheme-of-line-bundle-section
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-characteristic-of-a-field-is-zero-or-prime
  - thm-zariski-tangent-space-jacobian-kernel
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "R. Vakil, Foundations of Algebraic Geometry, Classes 51–52, §3.11 final warning (printed p. 11)"
      url: "https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf"
    - title: "D. Arapura, Notes on Basic Algebraic Geometry, §5.4.3 (printed p. 39)"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Statement refuted

False claim (Bertini for arbitrary linear systems in characteristic $p$): if
$k$ is algebraically closed and $W$ is a base-point-free linear system on a
smooth projective $k$-variety, then a general member of $W$ is smooth.

Refutation. Let $k$ be algebraically closed of characteristic $p>0$, let
$X=\mathbb P^1_k$ with its two standard charts $U_0=\operatorname{Spec}k[t]$
and $U_\infty=\operatorname{Spec}k[u]$ and the twisting sheaf $L=\mathcal O(p)$
of [[def-projective-line-two-affine-cover-and-twisting-sheaf]], and let
$X^p,Y^p\in\Gamma(X,L)$ be the global sections given by the compatible pairs
$(1,u^p)$ and $(t^p,1)$ on the two charts. Then

$$W=\operatorname{span}_k\{X^p,Y^p\}\subseteq\Gamma(X,L)$$

is a base-point-free $2$-dimensional linear system, and **every** member of
$W$ is a fat point: it is supported at a single closed point $P$ of
$\mathbb P^1_k$ and its local ring there is
$k[\tau]/(\tau^p)$, of $k$-dimension $p$. In particular every member, and
therefore the general member, is nonreduced and is not smooth over $k$, so the
claim fails. No reduction of any member is performed. The witness uses
$L=\mathcal O(p)$ with $p\ge2$, not $\mathcal O(1)$; the embedded
hyperplane-section case of Bertini is untouched by this example, and no claim
is made here about it.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ of characteristic $p>0$, the projective line $\mathbb P^1_k$ with charts $U_0=\operatorname{Spec}k[t]$, $U_\infty=\operatorname{Spec}k[u]$, the invertible sheaf $L=\mathcal O(p)$, the sections $X^p$ and $Y^p$, the linear system $W=\operatorname{span}_k\{X^p,Y^p\}$, and the Axiom of Choice.

[F1] [[def-linear-system-base-locus]]: a linear system on $X$ is a nonzero finite-dimensional $k$-subspace $W\subseteq\Gamma(X,L)$ for invertible $L$; for $0\ne s\in W$ the member $Z(s)$ depends only on $[s]\in\mathbf P(W)$; the base locus is $\operatorname{Bs}(W)=\bigcap_{0\ne s\in W}|Z(s)|$ and is empty exactly when $W$ is base-point-free; a property holds for a general member when some nonempty Zariski-open $U\subseteq\mathbf P(W)$ has all its parameters enjoying the property.

[F2] [[lem-zero-scheme-of-line-bundle-section]]: for a global section $s$ of an invertible sheaf, trivialized by a cover $U_i=\operatorname{Spec}A_i$ with $s|_{U_i}=f_ie_i$, the closed subschemes $\operatorname{Spec}(A_i/(f_i))$ glue to the zero subscheme $Z(s)$, canonically and independently of the trivializations, retaining nilpotents and allowing empty and whole zero schemes.

[F3] [[def-projective-line-two-affine-cover-and-twisting-sheaf]]: $\mathbb P^1_k$ is glued from $\operatorname{Spec}k[t]$ and $\operatorname{Spec}k[u]$ along $tu=1$; for every $n$, $\mathcal O(n)$ is glued from the structure sheaves with frames $e_0=1$ on $U_0$ and $e_\infty=1$ on $U_\infty$ related by $e_\infty=t^ne_0$, and each $\mathcal O(n)$ is invertible.

[F4] [[def-algebraically-closed-field]]: a field $F$ is algebraically closed when every nonconstant polynomial in $F[x]$ has a root in $F$.

[F5] [[thm-binomial-theorem-over-a-commutative-ring]]: $(x+y)^n=\sum_{k=0}^n\binom nkx^ky^{n-k}$ in every commutative ring.

[F6] [[lem-prime-divides-intermediate-binomial-coefficients]]: if $p$ is prime and $0<k<p$, then $p$ divides $\binom pk$.

[F7] [[def-zariski-tangent-space-point]]: the intrinsic Zariski tangent space $T_xX$ is the dual over $\kappa(x)$ of the cotangent space $\mathfrak m_x/\mathfrak m_x^2$ of the local ring $\mathcal O_{X,x}$, so it depends only on that local ring.

[F8] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, a finite generating list $f$ of the actual ideal $I\subseteq k[t_1,\ldots,t_n]$ of $\operatorname{Spec}(k[t]/I)$ and a rational point $a$ give a canonical isomorphism $T_aX\cong\ker J_f(a)$ from coordinate velocities, independent of the generating list.

[F9] [[def-regular-local-ring-geometric-point]]: for a locally Noetherian scheme $X$ and $x\in X$, the point $x$ is regular exactly when $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$.

[F10] [[def-krull-dimension-of-a-ring]]: the Krull dimension of a nonzero commutative ring is the supremum of the lengths of strict chains of prime ideals.

[F11] [[ex-finite-dimensional-algebra-over-a-field-is-noetherian]]: a commutative algebra over a field whose underlying vector space is finite dimensional is a Noetherian ring.

[F12] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is locally Noetherian when it has an affine open cover by spectra of Noetherian rings.

[F13] [[def-smooth-morphism-to-field-classical]]: under AC, for a finite-type $k$-scheme $X$, the morphism $X\to\operatorname{Spec}k$ is smooth if and only if for every field extension $K/k$ every local ring of the scheme-theoretic base change $X_K$ is regular.

[F14] [[lem-finite-type-local-on-source-and-target]]: a quasi-compact morphism locally of finite type is of finite type; equivalently, over each affine target open it may be tested on a finite affine source cover.

[F15] [[def-finite-type-and-module-finite-algebras]]: a commutative $R$-algebra is of finite type over $R$ when it is isomorphic to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$.

[F16] [[thm-characteristic-of-a-field-is-zero-or-prime]]: the characteristic of a field is either $0$ or a prime number, so $p\ge2$ here.

[F17] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; it is declared here because [F13] carries that assumption.

## Counterexample

1.1 On the overlap $W_{01}=U_0\cap U_\infty$ one has $u=t^{-1}$ and $e_\infty=t^pe_0$ by [F3]. The pairs of functions $(1,u^p)$ and $(t^p,1)$ satisfy the compatibility $1=t^p u^p$ and $t^p=t^p\cdot1$, so they define global sections $X^p,Y^p\in\Gamma(X,L)$; their restrictions to $U_0$ are the polynomials $1$ and $t^p$, which are $k$-linearly independent, so $W=\operatorname{span}_k\{X^p,Y^p\}$ is a $2$-dimensional subspace and, by [F1], a linear system on $X$ with $L=\mathcal O(p)$ invertible. [given, F1, F3, algebra]

1.2 Every element of $k$ is a $p$th power: for $c\in k$ the polynomial $z^p-c$ is nonconstant, so it has a root $\alpha\in k$ by [F4], and $\alpha^p=c$. The characteristic $p$ is prime, hence $p\ge2$, by [F16]. [given, F4, F16]

2.1 For a parameter $[a:b]\in\mathbf P(W)$ choose $\alpha,\beta\in k$ with $\alpha^p=a$ and $\beta^p=b$ by step 1.2; then $(\alpha,\beta)\ne(0,0)$. By [F5] and [F6], $(z_1+z_2)^p=z_1^p+z_2^p$ in every commutative ring of characteristic $p$, so $aX^p+bY^p=(\alpha X)^p+(\beta Y)^p=(\alpha X+\beta Y)^p$ in $k[X,Y]$. Hence the member $Z(aX^p+bY^p)$ equals $Z((\alpha X+\beta Y)^p)$ as a closed subscheme of $X$, and the linear form $\alpha X+\beta Y$ is nonzero. [F5, F6, step 1.2, algebra]

2.2 By [F3], $L=\mathcal O(p)$ is trivialized on the chart $U_0$ by $e_0$ and on $U_\infty$ by $e_\infty$, and on $U_0$ the section $aX^p+bY^p$ restricts to $(a+bt^p)e_0$, while on $U_\infty$ it restricts to $(au^p+b)e_\infty$. Therefore [F2] computes the member chart by chart: $Z(aX^p+bY^p)\cap U_0=\operatorname{Spec}k[t]/(a+bt^p)$ and $Z(aX^p+bY^p)\cap U_\infty=\operatorname{Spec}k[u]/(au^p+b)$, using the ideal generated by the local equation itself, with no reduction. [F2, F3, step 1.1, algebra]

3.1 Local form of every member. If $\beta\ne0$, then by [F5] and [F6] applied in $k[t]$, $a+bt^p=(\alpha+\beta t)^p=\beta^p(t-\gamma)^p$ with $\gamma=-\alpha/\beta$, so $Z(s)\cap U_0=\operatorname{Spec}k[t]/((t-\gamma)^p)$ and the substitution $\tau=t-\gamma$ identifies it with $\operatorname{Spec}k[\tau]/(\tau^p)$, a nonempty single point. If $\beta=0$, then $\alpha\ne0$ and $au^p+b=(\alpha u)^p$, so $Z(s)\cap U_\infty=\operatorname{Spec}k[u]/((\alpha u)^p)$ and the substitution $\tau=\alpha u$ identifies it with $\operatorname{Spec}k[\tau]/(\tau^p)$. In both cases one chart of $Z(s)$ is $\operatorname{Spec}k[\tau]/(\tau^p)$; the other chart of $Z(s)$ either is empty or, on the overlap, describes the same single point, and no chart adds a second point. [F5, F6, step 2.1, step 2.2, algebra]

4.1 The system is base-point-free. By step 3.1 the member $Z(X^p)$, which is the parameter $[1:0]$, has its unique point in the chart $U_\infty$ at $\tau=u=0$, namely $[0:1]$; the member $Z(Y^p)$, the parameter $[0:1]$, has its unique point in the chart $U_0$ at $\tau=t=0$, namely $[1:0]$. These two points of $\mathbb P^1_k$ are distinct, so $\operatorname{Bs}(W)\subseteq|Z(X^p)|\cap|Z(Y^p)|=\emptyset$ and $\operatorname{Bs}(W)=\emptyset$ by [F1]. [F1, step 3.1, algebra]

4.2 Local ring and dimension at the point. By step 3.1 every member $Z(s)$ has local ring $k[\tau]/(\tau^p)$ at its unique point $P$. In this ring every prime contains the nilpotent $\tau$ since $\tau^p=0$, and $k[\tau]/(\tau^p)/(\tau)\cong k$ is a field, so $(\tau)$ is the only prime ideal; hence $\dim k[\tau]/(\tau^p)=0$ by [F10]. The ring has $k$-basis $1,\tau,\ldots,\tau^{p-1}$, so it is finite dimensional over $k$ and Noetherian by [F11]; it is nonzero, and its $k$-dimension is $p$, the multiplicity of the fat point. [F10, F11, step 3.1, algebra]

5.1 Tangent space of the point. By [F7] the tangent space $T_PZ(s)$ depends only on the local ring $\mathcal O_{Z(s),P}=k[\tau]/(\tau^p)$, so it may be computed in the affine chart $\operatorname{Spec}k[\tau]/(\tau^p)$ at its rational point $\tau=0$. The Jacobian matrix of the single equation $\tau^p$ is the $1\times1$ matrix $(p\tau^{p-1})$, which is the zero matrix in characteristic $p$, so [F8] gives $T_PZ(s)\cong\ker(0)=k^1$ and $\dim_kT_PZ(s)=1$. [F7, F8, step 4.2, algebra]

6.1 The point is not regular. The scheme $Z(s)$ is covered by the affine charts of steps 3.1 and 4.2, whose coordinate rings $k[\tau]/(\tau^p)$ are Noetherian by step 4.2, so $Z(s)$ is locally Noetherian by [F12]. The field $k$ is algebraically closed, so the point $P$ has residue field $k$. By [F9], $P$ is regular exactly when $\dim_kT_PZ(s)=\dim\mathcal O_{Z(s),P}$; here that reads $1=0$, which is false, so $P$ is not a regular point and $Z(s)$ is not regular at $P$. [F9, F12, step 4.2, step 5.1, algebra]

7.1 No member is smooth over $k$. The scheme $Z(s)$ is of finite type over $k$: it is covered by at most two affine charts $\operatorname{Spec}k[\tau]/(\tau^p)$ and possibly an empty chart, each coordinate ring a quotient of $k[\tau]$, hence of finite type over $k$ by [F15], so [F14] applied over the affine base $\operatorname{Spec}k$ makes $Z(s)\to\operatorname{Spec}k$ of finite type. Suppose it were smooth. Then by [F13], which carries AC, every local ring of the base change along $K=k$, that is of $Z(s)$ itself, would be regular, contradicting the nonregular local ring of step 6.1. Hence $Z(s)$ is not smooth over $k$. [F13, F14, F15, F17, step 6.1, given]

8.1 Conclusion and scope. Every parameter $[s]\in\mathbf P(W)$ has a non-smooth member by step 7.1, while $\mathbf P(W)$ is nonempty and $W$ is base-point-free by step 4.1. So there is a nonempty Zariski-open subset of $\mathbf P(W)$ — namely all of it — on which every member is not smooth, and by [F1] the general member of $W$ is not smooth; the false Bertini claim for arbitrary base-point-free linear systems in characteristic $p$ is refuted by this smooth projective example $X=\mathbb P^1_k$. The members are the $p$-fold points $(\alpha X+\beta Y)^p$ of step 2.1, of multiplicity $p\ge2$ by steps 1.2 and 4.2, so the failure is the purely inseparable one and requires no hypothesis beyond algebraically closed characteristic $p$; the example uses $L=\mathcal O(p)$ rather than $\mathcal O(1)$, so the hyperplane case is not addressed. [F1, F16, step 2.1, step 4.1, step 4.2, step 7.1, given] ∎

## Source qualification

Vakil, *Foundations of Algebraic Geometry*, Classes 51–52, §3.11 (printed
p. 11) warns that the Bertini theorem for arbitrary linear systems can fail in
characteristic $p$ and points to purely inseparable examples; Arapura, *Notes
on Basic Algebraic Geometry*, §5.4.3 (printed p. 39) records the same
characteristic-$p$ obstruction in its treatment of hyperplane sections. The
sources state the phenomenon and the obstruction; the explicit system
$\operatorname{span}\{X^p,Y^p\}$ on $\mathbb P^1_k$, the chart computations,
the local ring $k[\tau]/(\tau^p)$ and the non-smoothness conclusion are proved
here from the library's own suppliers. Neither source is used as a substitute
for the argument above, and no embedding of $\mathbb P^1_k$ by the full system
$|\mathcal O(p)|$ is needed: the computation lives on the standard charts.
