---
id: ex-degree-zero-principal-divisor
kind: example
title: "A principal divisor of degree zero on the projective line"
status: draft
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-picard-projective-line-integers
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-order-codimension-one-rational-function
  - def-principal-weil-divisor-and-class-group
  - def-riemann-roch-space-of-divisor
  - def-twisting-sheaf-proj
  - lem-cartier-divisor-addition-tensor
  - lem-projective-line-divisors-classified-by-degree
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-cartier-weil-divisors-curves-agree
  - thm-euler-characteristic-degree-shift-curve
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - thm-riemann-roch-as-l-minus-index
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice inherited from the current divisor and projective-line cohomology suppliers.

Let $k$ be a field and let $\mathbb P^1_k$ have coordinate $t=x_1/x_0$ on the
standard chart $U_0=\operatorname{Spec}k[t]$, with point at infinity
$\infty=[0:1]=V(x_0)$ ([[lem-projective-line-divisors-classified-by-degree]]).
Let $a\ne b$ be distinct $k$-rational points of $U_0$, so $a,b\in k$ and the
associated closed points are $[a]=V(t-a)$ and $[b]=V(t-b)$. The rational
function
$$f=\frac{t-a}{t-b}\ \in\ k(t)^\times$$
has divisor
$$\operatorname{div}(f)=[a]-[b],$$
which is a principal divisor of degree $\deg_k([a]-[b])=1-1=0$. Its divisor
class satisfies the degree shift and Riemann-Roch numerically: the attached
invertible sheaf
$\mathcal O(\operatorname{div}f)=\mathcal O([a])\otimes\mathcal O([b])^{-1}$
is isomorphic to $\mathcal O_{\mathbb P^1_k}$, since the class of a principal
divisor is trivial and since $\deg_k\operatorname{div}(f)=0$ on
$\mathbb P^1_k$ forces the class to be trivial under the isomorphism
$\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$
([[cor-picard-projective-line-integers]]). Hence
$$l(\operatorname{div}f)=h^0(\mathcal O)=1,\qquad i(\operatorname{div}f)=h^1(\mathcal O)=0,$$
by the explicit cohomology of the structure sheaf
([[cor-h0-projective-space-o-d-homogeneous-polynomials]],
[[cor-top-cohomology-projective-space-o-d]]). Alternatively
$L(\operatorname{div}f)$ is the one-dimensional $k$-space spanned by
$$1/f=\frac{t-b}{t-a},$$
because $\operatorname{div}(g)+\operatorname{div}(f)\ge0$ for a nonzero
$g\in k(t)$ is equivalent to $\operatorname{div}(gf)\ge0$, and a rational
function on $\mathbb P^1_k$ with no poles is constant. In particular
$f\notin L(\operatorname{div}f)$: the divisor
$\operatorname{div}(f)+\operatorname{div}(f)=2[a]-2[b]$ is not effective, so
the nonzero elements of $L(\operatorname{div}f)$ are the scalar multiples of
$1/f$ and not those of $f$. Hence
$\chi(\mathcal O(\operatorname{div}f))=1=\chi(\mathcal O)$ with
$\deg_k\operatorname{div}(f)=0$, and Riemann-Roch reads
$$1-0=0+1-0$$
on both sides, the right-hand side being
$\deg_k\operatorname{div}(f)+1-g$ with $g=g(\mathbb P^1_k)=0$
([[thm-riemann-roch-as-l-minus-index]]). The same computation for $f=g(t)$ a
monic polynomial of degree $d$ gives
$$\operatorname{div}(g)=Z(g)-d[\infty],\qquad Z(g)=\sum\nolimits_im_i[p_i],$$
where $g=\prod_ig_i^{m_i}$ is the factorisation of $g$ into monic
irreducibles $g_i$ of degree $d_i$ and $p_i=V(g_i)$; this divisor has degree
$\sum_im_id_i-d=0$, showing that the individual zero and pole parts need not
be trivial even though the class is principal.

*Scaffold repair, recorded for the owner.* The frozen scaffold statement
claimed that "alternatively $L(\operatorname{div}f)$ consists of the scalar
multiples of $f$ because $\operatorname{div}(g)+\operatorname{div}(f)\ge0$
forces $g/f$ to have no poles". That is false as written: the condition is
equivalent to $\operatorname{div}(gf)\ge0$, hence to $gf\in k$, so
$L(\operatorname{div}f)$ consists of the scalar multiples of $1/f$, and $f$
itself is not in $L(\operatorname{div}f)$ because $2[a]-2[b]$ is not
effective. The statement above keeps every other promised claim and records
the corrected spanning function; the general degree-zero claim is
$\deg_k([a]-[b])=0$, computed directly below.

The current principal-divisor, Cartier/Picard, and line-bundle interfaces used
below are [[def-principal-weil-divisor-and-class-group]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[lem-cartier-divisor-addition-tensor]],
[[thm-cartier-divisors-mod-principal-to-picard]] and
[[thm-cartier-weil-divisors-curves-agree]]. The degree zero asserted for this
example is computed explicitly from $[a]-[b]$; no general principal-divisor
degree theorem is needed.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current divisor and projective-line cohomology suppliers; a field $k$, the projective line $\mathbb P^1_k$ with chart $U_0=\operatorname{Spec}k[t]$, coordinate $t$ and point at infinity $\infty=[0:1]$; distinct $k$-rational points $a\ne b$, with closed points $[a]=V(t-a)$ and $[b]=V(t-b)$; and the rational function $f=(t-a)/(t-b)\in k(t)^\times$.

[F1] Projective-line data: $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$ of genus $0$; for every monic irreducible $g\in k[t]$ of degree $d$ the closed point $p=V(g)$ of $U_0$ has $[\kappa(p):k]=d$ and $\operatorname{div}(g)=[p]-d[\infty]$; every divisor $D$ on $\mathbb P^1_k$ is linearly equivalent to $\deg_k(D)[\infty]$, and the degree homomorphism $\deg_k$ from $\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)$ to $\mathbb Z$ is an isomorphism ([[lem-projective-line-divisors-classified-by-degree]]).

[F2] Divisors and orders: a divisor on a curve is a finite formal $\mathbb Z$-linear combination of closed points, with effectiveness read coefficientwise; for a closed point $x$ of a smooth curve the order $\operatorname{ord}_x$ at $x$ is a homomorphism on $k(C)^\times$, so $\operatorname{ord}_x(gh)=\operatorname{ord}_x(g)+\operatorname{ord}_x(h)$, and $\operatorname{ord}_x(f)\ge0$ exactly when $f$ is regular at $x$ ([[def-divisor-smooth-proper-curve]], [[def-order-codimension-one-rational-function]]).

[F3] Degree: the $k$-degree of a divisor is $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, a group homomorphism $\operatorname{Div}(C)\to\mathbb Z$; for a rational point $x$ one has $[\kappa(x):k]=1$ ([[def-degree-divisor-proper-curve]], [[lem-projective-line-divisors-classified-by-degree]]).

[F4] The Riemann-Roch space: for a divisor $D$ on a smooth proper geometrically integral curve, $L(D)=\{g\in k(C)^\times:\operatorname{div}(g)+D\ge0\}\cup\{0\}$ is the $k$-subspace of functions whose poles are no worse than $-D$, membership being read coefficientwise as $\operatorname{ord}_x(g)+n_x\ge0$ at every closed point $x$, and the divisor of a rational function is $\operatorname{div}(g)=\sum_x\operatorname{ord}_x(g)[x]$ ([[def-riemann-roch-space-of-divisor]]).

[F5] The integer $l(D)=\dim_kL(D)=h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$ is the dimension of the Riemann-Roch space, with $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$; in particular $l(0)=1$ for the zero divisor ([[def-little-l-divisor]], [[def-riemann-roch-space-of-divisor]]).

[F6] The polynomial ring $F[x]$ over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[F7] Sections of the structure sheaf: $\mathcal O_X(0)=\mathcal O_X$ for the twisting sheaf of $\operatorname{Proj}$, and $H^0(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k}(0))\cong k[x_0,x_1]_0$, so $h^0(\mathcal O_{\mathbb P^1_k})=1$ ([[def-twisting-sheaf-proj]], [[cor-h0-projective-space-o-d-homogeneous-polynomials]]).

[F8] Top cohomology vanishes: $H^1(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k}(0))=0$, so $h^1(\mathcal O_{\mathbb P^1_k})=0$ ([[cor-top-cohomology-projective-space-o-d]]).

[F9] Riemann-Roch: for every divisor $D$ on a smooth proper geometrically integral curve of genus $g$ one has $l(D)-i(D)=\deg_k(D)+1-g$ with $i(D)=h^1(D)\ge0$ ([[thm-riemann-roch-as-l-minus-index]]).

[F10] Degree shift of the Euler characteristic: $\chi(C,\mathcal O_C(D))-\chi(C,\mathcal O_C)=\deg_k(D)$ for every divisor $D$, where $\chi=h^0-h^1$ ([[thm-euler-characteristic-degree-shift-curve]]).

[F11] The Picard group of the projective line is $\mathbb Z$: the degree homomorphism induces an isomorphism $\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$, so an invertible sheaf of degree zero is isomorphic to $\mathcal O_{\mathbb P^1_k}$ ([[cor-picard-projective-line-integers]]).

[F12] The current [[def-invertible-sheaf-of-cartier-divisor]] attaches the sheaf to a Cartier divisor; [[lem-cartier-divisor-addition-tensor]] gives its tensor and dual identities; [[thm-cartier-divisors-mod-principal-to-picard]] identifies principal divisors with the trivial line-bundle class; [[thm-cartier-weil-divisors-curves-agree]] identifies Cartier and Weil divisors on this smooth curve; and [[def-principal-weil-divisor-and-class-group]] supplies the principal-divisor convention. These interfaces give $\mathcal O(\operatorname{div}f)\cong\mathcal O$ and the displayed tensor expression. The degree zero in this example is computed directly from $[a]-[b]$.

[F13] The Axiom of Choice is available and is inherited only through the suppliers named above; the computations below select nothing beyond the given points and functions ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct computation of $\operatorname{div}(f)$ and of $L(\operatorname{div}f)$ on $\mathbb P^1_k$ from the order of vanishing at the closed points, compared with the explicit cohomology of $\mathcal O$ and the Riemann-Roch identity.

1.1 The two rational points and the divisors of $t-a$, $t-b$. The polynomials $t-a$ and $t-b$ are monic of degree $1$, hence irreducible in $k[t]$: a factorisation into non-units would give two factors of degree at least one, whose degrees add to $1$. So both are monic irreducibles of degree $d=1$, and by [F1] applied to $g=t-a$ and to $g=t-b$, $$\operatorname{div}(t-a)=[a]-[\infty],\qquad \operatorname{div}(t-b)=[b]-[\infty],$$ with $[\kappa(a):k]=1=[\kappa(b):k]$. Since $a\ne b$, the maximal ideals $(t-a)\ne(t-b)$ are distinct, so $[a]\ne[b]$ and $[a]-[b]\ne0$. [F1, F3, F6]

2.1 The divisor of $f$. The order at a closed point is additive in products and quotients [F2], so for every closed point $x$, $\operatorname{ord}_x(f)=\operatorname{ord}_x(t-a)-\operatorname{ord}_x(t-b)$. Summing against $[x]$ as in [F4] and using step 1.1, $$\operatorname{div}(f)=\operatorname{div}(t-a)-\operatorname{div}(t-b)=[a]-[\infty]-[b]+[\infty]=[a]-[b].$$ This is a principal divisor by construction — it is the divisor of the nonzero rational function $f$ — and its degree is $\deg_k([a]-[b])=[\kappa(a):k]-[\kappa(b):k]=1-1=0$ by [F3] and step 1.1. In particular the zero part $[a]$ and the pole part $[b]$ are individually nontrivial while the total degree vanishes. [F2, F3, F4, step 1.1]

2.2 A general monic polynomial. Let $g\in k[t]$ be monic of degree $d\ge0$. By [F6] it factors as $g=\prod_ig_i^{m_i}$ with pairwise distinct monic irreducibles $g_i$ of degree $d_i$ and exponents $m_i\ge1$, where $\sum_im_id_i=d$. Setting $p_i=V(g_i)$ and $Z(g)=\sum_im_i[p_i]$, additivity [F2] and the divisor formula of [F1] give $$\operatorname{div}(g)=\sum_im_i\operatorname{div}(g_i)=\sum_im_i\bigl([p_i]-d_i[\infty]\bigr)=Z(g)-d[\infty],$$ a principal divisor; its degree is $\deg_kZ(g)-\deg_k(d[\infty])=\sum_im_id_i-d=0$ by [F3] and the residue-degree formula $[\kappa(p_i):k]=d_i$ of [F1]. For $d\ge1$ the zero part $Z(g)$ and the pole part $d[\infty]$ are both nonzero, while $Z(g)\sim d[\infty]$ because their difference is the principal divisor $\operatorname{div}(g)$; for $d=0$ the polynomial is $g=1$ and $\operatorname{div}(g)=0$, which is the case $Z(g)=0$ and $0[\infty]=0$ of the formula. Taking $g=t-a$ recovers $\operatorname{div}(t-a)=[a]-[\infty]$ of step 1.1. [F1, F2, F3, F6, step 1.1]

3.1 The triviality of the class and the sheaf. Since $\operatorname{div}(f)$ is principal, its class in $\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)$ is zero, and the degree isomorphism of [F1] is injective, so the class of a degree-zero divisor is trivial: $\operatorname{div}(f)\sim0$ by step 2.1. By the current Cartier/Picard dictionary [F12], the principal-divisor case of the sheaf attachment gives $\mathcal O(\operatorname{div}f)\cong\mathcal O_{\mathbb P^1_k}(0)\cong\mathcal O_{\mathbb P^1_k}$, and the tensor identities give $\mathcal O(\operatorname{div}f)\cong\mathcal O([a])\otimes\mathcal O([b])^{-1}$; the same conclusion via degrees uses [F11], under which a degree-zero invertible sheaf on $\mathbb P^1_k$ is isomorphic to $\mathcal O_{\mathbb P^1_k}$. [F1, F11, F12, step 2.1]

3.2 The sections of $\operatorname{div}(f)$, directly. Let $g\in k(t)^\times$. By [F4], $g\in L(\operatorname{div}f)$ if and only if $\operatorname{ord}_x(g)+\operatorname{ord}_x(f)\ge0$ at every closed point $x$, which by the additivity of [F2] is the same as $\operatorname{ord}_x(gf)\ge0$ at every closed point $x$, that is $\operatorname{div}(gf)\ge0$ by [F4]. So $g\in L(\operatorname{div}f)$ if and only if $gf\in L(0)$, and the space $L(0)$ is the constant field $k$: a nonzero rational function $h\in k(t)^\times$ factors by [F6] as $h=c\prod_ig_i^{n_i}$ with $c\in k^\times$, pairwise distinct monic irreducibles $g_i$ of degree $d_i$ and exponents $n_i\in\mathbb Z$, so that $\operatorname{div}(h)=\sum_in_i([p_i]-d_i[\infty])$ by [F1] and the additivity of the orders [F2]; effectivity forces $n_i\ge0$ for every $i$ (from the coefficient at $p_i$) and $-\sum_in_id_i\ge0$ (from the coefficient at $\infty$), and since $d_i\ge1$ while $n_i\ge0$ this gives $n_i=0$ for all $i$ and $h=c$. Hence $g\in L(\operatorname{div}f)$ if and only if $gf=c$ for some $c\in k$, i.e. $L(\operatorname{div}f)=k\cdot(1/f)$, a one-dimensional space spanned by $1/f=(t-b)/(t-a)$, and $l(\operatorname{div}f)=1$ by [F5]. In particular $f\notin L(\operatorname{div}f)$: the function $f$ corresponds to $c=gf=f^2\notin k$, and directly $\operatorname{div}(f)+\operatorname{div}(f)=2[a]-2[b]$ has coefficient $-2<0$ at $[b]$, so it is not effective. [F1, F2, F4, F5, F6, step 2.1]

4.1 The cohomological reading. By step 3.1, $\mathcal O(\operatorname{div}f)\cong\mathcal O_{\mathbb P^1_k}$; by [F7] the structure sheaf has $h^0(\mathcal O_{\mathbb P^1_k})=1$, and by [F8] it has $h^1(\mathcal O_{\mathbb P^1_k})=0$. Therefore $l(\operatorname{div}f)=h^0(\operatorname{div}f)=1$ and $i(\operatorname{div}f)=h^1(\operatorname{div}f)=0$, in agreement with the direct computation of step 3.2; here $l(D)=h^0(D)$ and $i(D)=h^1(D)$ are the dimensions attached to $D$ and its sheaf [F5], the sheaf-theoretic equality being the current dictionary [F12]. [F5, F7, F8, F12, step 3.1, step 3.2]

5.1 Riemann-Roch and the Euler characteristic. The Euler characteristics are $\chi(\mathcal O_{\mathbb P^1_k})=h^0(\mathcal O)-h^1(\mathcal O)=1-0=1$ and, by step 4.1, $\chi(\mathcal O(\operatorname{div}f))=h^0(\operatorname{div}f)-h^1(\operatorname{div}f)=1-0=1$, so $\chi(\mathcal O(\operatorname{div}f))=\chi(\mathcal O)$ as the degree shift [F10] requires for the degree-zero divisor $\operatorname{div}(f)$: $\chi(\mathcal O(\operatorname{div}f))-\chi(\mathcal O)=0=\deg_k\operatorname{div}(f)$ by step 2.1. Riemann-Roch [F9] reads $$l(\operatorname{div}f)-i(\operatorname{div}f)=1-0=1=\deg_k\operatorname{div}(f)+1-g=0+1-0,$$ the genus of the projective line being $g=g(\mathbb P^1_k)=0$ by [F1] and the degree being computed in step 2.1. [F1, F9, F10, step 2.1, step 4.1]

6.1 Assembly and the current supplier route. Step 2.1 computes $\operatorname{div}(f)=[a]-[b]$ of degree zero, step 3.1 identifies the divisor class as trivial and the attached sheaf as $\mathcal O_{\mathbb P^1_k}$, steps 3.2 and 4.1 compute $L(\operatorname{div}f)=k\cdot(1/f)$ and $(l,i)=(1,0)$, step 5.1 reads the degree shift and Riemann-Roch as $1-0=0+1-0$, and step 2.2 gives $\operatorname{div}(g)=Z(g)-d[\infty]$ for every monic polynomial of degree $d$. The sheaf identifications of steps 3.1 and 4.1 use the current interfaces [F12]; the degree-zero claim is computed explicitly in step 2.1, and the direct divisor calculations of steps 2.1, 2.2 and 3.2 use the current order route. The Axiom of Choice enters only through the suppliers recorded in [F13]: the functions $f$, $1/f$ and the factorisations are exhibited by formulas, and no family of objects is selected. [F10, F12, F13, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 5.1] ∎
