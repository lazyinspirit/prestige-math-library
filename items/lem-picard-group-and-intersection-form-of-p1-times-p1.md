---
id: lem-picard-group-and-intersection-form-of-p1-times-p1
kind: lemma
title: "The Picard group and intersection form of a product of projective lines"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-top-cohomology-projective-space-o-d
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-discrete-valuation
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-flat-morphism-schemes
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-factorial-scheme
  - def-order-codimension-one-rational-function
  - def-picard-group-scheme
  - def-principal-weil-divisor-and-class-group
  - def-section-zero-scheme-invertible-sheaf
  - def-pullback-cartier-divisor
  - def-relative-projective-space-standard-charts
  - def-sheaf-tensor-product
  - def-unique-factorisation-domain
  - def-weil-divisor-normal-noetherian-scheme
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-global-section-effective-divisor
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-cartier-divisor-addition-tensor
  - lem-product-of-projective-lines-is-a-smooth-projective-surface
  - lem-pullback-cartier-divisor-line-bundle
  - thm-affine-fibre-product-tensor-ring
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-cartier-weil-isomorphism-locally-factorial
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-projective-space-as-proj
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Divisors, §§31.14-31.33 (Cartier and Weil divisors, class groups)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the intersection and cohomology suppliers ([[def-axiom-of-choice]]). Let $k$ be a field and let $X=\mathbb P^1_k\times_{\operatorname{Spec}k}\mathbb P^1_k$ with projections $\mathrm{pr}_1,\mathrm{pr}_2$ ([[def-relative-projective-space-standard-charts]]). Let
$$\ell=\mathrm{pr}_1^{-1}(\infty)=\{\infty\}\times\mathbb P^1_k,\qquad m=\mathrm{pr}_2^{-1}(\infty)=\mathbb P^1_k\times\{\infty\}$$
be the two ruling fibres, effective Cartier divisors on $X$. Then:

1. $X$ is an integral smooth projective surface over $k$ and the projections are flat and proper ([[lem-product-of-projective-lines-is-a-smooth-projective-surface]], [[def-divisor-intersection-number-on-smooth-projective-surface]]).
2. The map $\mathbb Z^2\to\operatorname{Pic}(X)$, $(a,b)\mapsto\mathcal O_X(a\ell+bm)$, is an isomorphism; in additive notation $\operatorname{Pic}(X)=\mathbb Z\ell\oplus\mathbb Zm$.
3. The intersection form is given by $\ell\cdot\ell=m\cdot m=0$ and $\ell\cdot m=1$; equivalently, in the basis $(\ell,m)$ its matrix is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and $(a\ell+bm)\cdot(c\ell+dm)=ad+bc$ for all $a,b,c,d\in\mathbb Z$.
4. The diagonal $\Delta=\{(x,x):x\in\mathbb P^1_k\}$ has class $\Delta\equiv\ell+m$; in particular $\Delta\cdot\Delta=2$ and $\Delta\cdot\ell=\Delta\cdot m=1$.

## Facts & Assumptions

**Given:** a field $k$, the surface $X=\mathbb P^1_k\times_k\mathbb P^1_k$ with its projections, the ruling fibres $\ell=\mathrm{pr}_1^{-1}(\infty)$ and $m=\mathrm{pr}_2^{-1}(\infty)$, and the diagonal $\Delta\subseteq X$.

[F1] By the structure lemma, $X$ is an integral smooth projective surface over $k$, so it is Noetherian, regular and (being smooth of finite type over $k$) locally factorial; the projections $\mathrm{pr}_1,\mathrm{pr}_2$ are flat and proper, and $\pi:\mathbb P^1_k\to\operatorname{Spec}k$ is flat ([[lem-product-of-projective-lines-is-a-smooth-projective-surface]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[def-locally-factorial-scheme]], [[def-flat-morphism-schemes]]). The intersection product on $X$ is defined, symmetric and $\mathbb Z$-bilinear ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]]).

[F2] Pullbacks of Cartier divisors along flat morphisms are defined: a regular section pulls back to a regular section under a flat morphism, so the pullback datum of [[def-pullback-cartier-divisor]] exists; and for a Cartier divisor $D$ one has $\mathcal O_X(f^*D)\cong f^*\mathcal O_Y(D)$ ([[def-pullback-cartier-divisor]], [[lem-pullback-cartier-divisor-line-bundle]], [[def-flat-morphism-schemes]]). The point $\infty\in\mathbb P^1_k$ is an effective Cartier divisor with $\mathcal O_{\mathbb P^1}(\infty)\cong\mathcal O_{\mathbb P^1}(1)$: the coordinate $x_0$ is a nonzero global section of $\mathcal O(1)$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]]) with zero scheme $\infty$ ([[lem-global-section-effective-divisor]], [[def-relative-projective-space-standard-charts]]).

[F3] Intersection with a curve is the degree of the restriction: for an effective Cartier divisor $C$ and any Cartier divisor $D$, $C\cdot D=\deg_C(\mathcal O_X(D)|_C)$, where $\deg_C(\mathcal N)=\chi(C,\mathcal N)-\chi(C,\mathcal O_C)$ ([[thm-intersection-with-curve-as-degree-of-restriction]], [[def-degree-invertible-sheaf-proper-dimension-one]], [[def-euler-characteristic-coherent-sheaf]]). On $\mathbb P^1_k$ one has $h^0(\mathcal O)=1$, $h^0(\mathcal O(1))=2$ and $h^1(\mathcal O)=h^1(\mathcal O(1))=0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[cor-top-cohomology-projective-space-o-d]]), so $\deg_{\mathbb P^1}(\mathcal O_{\mathbb P^1}(1))=1$.

[F4] Class groups: $X$ is a locally factorial Noetherian integral scheme, so $\operatorname{Pic}(X)\cong\operatorname{Cl}(X)$ compatibly with the Weil divisor of a Cartier divisor, and $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\cong\operatorname{Pic}(X)$ ([[thm-cartier-weil-isomorphism-locally-factorial]], [[thm-cartier-divisors-mod-principal-to-picard]], [[def-weil-divisor-normal-noetherian-scheme]], [[def-principal-weil-divisor-and-class-group]]).

[F5] Excision: for $U=X\setminus(\ell\cup m)$ the restriction of Weil divisors (closure in $X$ of each prime divisor of $U$) is surjective with kernel $\mathbb Z[\ell]\oplus\mathbb Z[m]$, and principal divisors restrict to principal divisors; hence $\operatorname{Cl}(X)\to\operatorname{Cl}(U)$ is surjective with kernel generated by $[\ell],[m]$ ([[def-weil-divisor-normal-noetherian-scheme]], [[def-principal-weil-divisor-and-class-group]], [[def-order-codimension-one-rational-function]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]). Moreover $U=\mathrm{pr}_1^{-1}(U_0)\cap\mathrm{pr}_2^{-1}(V_0)=U_0\times_kV_0$ for the standard affine charts of the two factors, and $U_0\times_kV_0\cong\operatorname{Spec}k[y_1]\times_k\operatorname{Spec}k[y_2]\cong\operatorname{Spec}k[y_1,y_2]$ ([[def-relative-projective-space-standard-charts]], [[thm-affine-fibre-product-tensor-ring]], [[thm-projective-space-as-proj]]). To verify the class-group kernel, a prime divisor meeting $U$ has the same codimension-one local ring at its generic point on $U$ and on the whole scheme, so restriction preserves its valuation and the divisor of every rational function. Prime divisors of $U$ extend by closure, proving surjectivity. If a divisor restricts to $\operatorname{div}_U(f)$, use the same $f$ in the common function field and subtract its divisor on the whole scheme; the difference is supported on the removed prime divisors. Conversely those boundary divisors restrict to zero. This proves the asserted exactness.

[F6] In $k[y_1,y_2]$ every height-one prime is principal and every irreducible element is prime, and every Weil divisor is a finite combination of prime divisors, so every Weil divisor on $U\cong\operatorname{Spec}k[y_1,y_2]$ is principal: for a combination $\sum_in_i[V(g_i)]$ the rational function $\prod_ig_i^{n_i}$ has divisor $\sum_in_i[V(g_i)]$, since each $g_i$ has order one along $V(g_i)$ and order zero along the other primes ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-unique-factorisation-domain]], [[def-order-codimension-one-rational-function]], [[def-discrete-valuation]]). Hence $\operatorname{Cl}(U)=0$.

[F7] Diagonal: the pullbacks $\mathrm{pr}_1^*x_j$ and $\mathrm{pr}_2^*y_j$ of the coordinate sections are global sections of $\mathrm{pr}_1^*\mathcal O(1)$ and $\mathrm{pr}_2^*\mathcal O(1)$ whose zero schemes are the fibres $\mathrm{pr}_1^{-1}(V(x_j))$ and $\mathrm{pr}_2^{-1}(V(y_j))$; the section $s=\mathrm{pr}_1^*x_0\otimes\mathrm{pr}_2^*y_1-\mathrm{pr}_1^*x_1\otimes\mathrm{pr}_2^*y_0$ of the invertible sheaf $\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)$ is nonzero, and on the two equal-index charts its coefficient is the difference of the affine coordinates, while on a mixed chart it is, up to sign, $1-tu$. The equal-index equations identify the coordinates; on a mixed chart $tu=1$ identifies the two projective points on their overlap. Thus its zero scheme is the diagonal $\Delta$ ([[def-section-zero-scheme-invertible-sheaf]], [[lem-global-section-effective-divisor]], [[lem-pullback-cartier-divisor-line-bundle]], [[def-relative-projective-space-standard-charts]]). Consequently $\Delta$ is an effective Cartier divisor with $\mathcal O_X(\Delta)\cong\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)$.

[F8] The Axiom of Choice is inherited from the intersection, pullback and class-group suppliers above; all computations use the two ruling fibres, the diagonal and finitely many chart functions.



## Proof
**Proof technique:** direct: realise the rulings as pullbacks of the point at infinity, compute the intersection matrix by the restriction-degree theorem, generate the class group from the affine plane $X\setminus(\ell\cup m)$, and read off the diagonal's class from its explicit equation.

1.1 The rulings are effective Cartier divisors. Since $\mathrm{pr}_1$ is flat by [F1] and $\infty$ is an effective Cartier divisor with $\mathcal O(\infty)\cong\mathcal O(1)$ by [F2], the pullback $\ell=\mathrm{pr}_1^{-1}(\infty)=\mathrm{pr}_1^*\infty$ is an effective Cartier divisor with $\mathcal O_X(\ell)\cong\mathrm{pr}_1^*\mathcal O(1)$; symmetrically $\mathcal O_X(m)\cong\mathrm{pr}_2^*\mathcal O(1)$. In particular $\ell$ and $m$ are nonzero effective Cartier divisors. [F1, F2]

2.1 The intersection matrix. By [F3] and step 1.1, $\ell\cdot\ell=\deg_\ell(\mathcal O_X(\ell)|_\ell)$; the restriction $\mathrm{pr}_1^*\mathcal O(1)|_\ell$ is the pullback of $\mathcal O(1)$ along the restriction $\mathrm{pr}_1|_\ell:\ell\to\mathbb P^1_k$, which is the constant morphism with value $\infty$, hence factors through $\operatorname{Spec}k$ and pulls $\mathcal O(1)$ back to the trivial sheaf; so $\ell\cdot\ell=0$. Likewise $m\cdot m=0$. Moreover $\mathrm{pr}_2|_\ell:\ell=\{\infty\}\times\mathbb P^1_k\to\mathbb P^1_k$ is an isomorphism, so $\mathcal O_X(m)|_\ell\cong\mathrm{pr}_2^*\mathcal O(1)|_\ell\cong\mathcal O_{\mathbb P^1}(1)$ has degree one by [F3]: $\ell\cdot m=1$. Bilinearity gives $(a\ell+bm)\cdot(c\ell+dm)=ad+bc$. [F1, F3, step 1.1]

2.2 Generation of the Picard group. By [F4], $\operatorname{Pic}(X)\cong\operatorname{Cl}(X)$. By [F5] the complement $U=X\setminus(\ell\cup m)$ is the affine plane $\operatorname{Spec}k[y_1,y_2]$, and the excision sequence for the union of the two prime divisors $\ell,m$ reads $\mathbb Z[\ell]\oplus\mathbb Z[m]\to\operatorname{Cl}(X)\to\operatorname{Cl}(U)\to0$. By [F6] we have $\operatorname{Cl}(U)=0$, so the classes of $\ell$ and $m$ generate $\operatorname{Cl}(X)$, hence $\ell$ and $m$ generate $\operatorname{Pic}(X)$. [F4, F5, F6, step 1.1]

3.1 Injectivity. Let $a,b\in\mathbb Z$ with $\mathcal O_X(a\ell+bm)\cong\mathcal O_X$. Intersecting with $\ell$ and $m$ (legitimate because the intersection product depends only on linear equivalence classes) and using step 2.1 gives $0=(a\ell+bm)\cdot\ell=b$ and $0=(a\ell+bm)\cdot m=a$. Hence the parametrisation $(a,b)\mapsto\mathcal O_X(a\ell+bm)$ is injective, and with step 2.2 it is an isomorphism; this proves claims 2 and 3. [F1, step 2.1, step 2.2]

3.2 The diagonal. Let $s$ be the section of [F7]. Its zero scheme is the diagonal $\Delta$, which is therefore an effective Cartier divisor with $\mathcal O_X(\Delta)\cong\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)\cong\mathcal O_X(\ell)\otimes\mathcal O_X(m)\cong\mathcal O_X(\ell+m)$, using step 1.1 and the tensor dictionary of [[lem-cartier-divisor-addition-tensor]]; hence $[\mathcal O_X(\Delta)]=[\mathcal O_X(\ell+m)]$ in $\operatorname{Pic}(X)$, so $\Delta$ is linearly, hence numerically, equivalent to $\ell+m$. By step 2.1, $\Delta\cdot\Delta=(\ell+m)^2=0+2\cdot1+0=2$ and $\Delta\cdot\ell=\ell\cdot\ell+m\cdot\ell=1$, similarly $\Delta\cdot m=1$. [F1, F7, step 1.1, step 2.1]

4.1 Conclusion and choice accounting. Claim 1 is the structure lemma [F1]; claims 2 and 3 are steps 2.2 and 3.1 with the matrix computation of step 2.1; claim 4 is step 3.2. The Axiom of Choice is inherited from the suppliers recorded in [F8], and only the two rulings, the diagonal and finitely many chart coordinates are used. [F8, step 2.1, step 3.1, step 3.2] ∎ 