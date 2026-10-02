---
id: ex-principal-divisor-degree-zero-p1
kind: example
title: "Principal divisors on the projective line have degree zero"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-affine-scheme-spectrum
  - def-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
  - def-field
  - def-noetherian-ring
  - thm-hilbert-basis-theorem
  - lem-polynomial-algebras-over-fields-are-integrally-closed
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - def-integral-closure-and-integrally-closed-domain
  - def-localisation-at-a-prime-ideal
  - def-height-of-a-prime-ideal
  - def-krull-dimension-of-a-ring
  - def-weil-divisor-normal-noetherian-scheme
  - def-order-codimension-one-rational-function
  - def-discrete-valuation-ring
  - def-discrete-valuation
  - thm-equivalent-characterisations-of-a-dvr
  - lem-integral-finite-type-scheme-function-field
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-field-of-fractions
  - def-unique-factorisation-domain
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - def-irreducible-and-prime-elements-in-a-domain
  - def-residue-field-scheme-point
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-projective-space-proper-over-base
  - def-proper-morphism
  - def-degree-divisor-proper-curve
  - def-dimension-noetherian-topological-space
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Principal divisors and pushforward, §42.18, Lemmas 42.18.1–3"
      url: "https://stacks.math.columbia.edu/tag/02RS"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
---

## Example

Assume the Axiom of Choice, inherited from the properness of projective space.
Let $k$ be a field and let $p,q\in k[t]$ be coprime monic polynomials of
degrees $m$ and $n$. On the projective line $\mathbb P^1_k$, with affine
coordinate $t$ on $U_0=\operatorname{Spec}k[t]$ and point at infinity
$\infty=V(u)$ in $U_\infty=\operatorname{Spec}k[u]$, $u=1/t$, the rational
function $f=p(t)/q(t)\in k(t)^\times$ has principal divisor
$$\operatorname{div}(f)=\sum_i a_i[r_i]-\sum_j b_j[s_j]+(n-m)[\infty],$$
where $p=\prod_i r_i^{a_i}$ and $q=\prod_j s_j^{b_j}$ are the factorisations
into monic irreducibles: the only nonzero coefficients away from infinity come
from the zeros and poles of $p$ and $q$. Its degree is
$$\deg_k\operatorname{div}(f)=m-n+(n-m)=0,$$
so on $\mathbb P^1_k$ every principal divisor has degree zero, computed here
directly from the factorisations without invoking the general degree-zero
theorem.

## Facts & Assumptions

**Given:** the Axiom of Choice, a field $k$, the two-affine projective line $\mathbb P^1_k$ with
charts $U_0=\operatorname{Spec}k[t]$ and $U_\infty=\operatorname{Spec}k[u]$
glued along $tu=1$, the point $\infty=V(u)$, coprime monic polynomials
$p,q\in k[t]$ of degrees $m,n$, and $f=p(t)/q(t)\in k(t)^\times$.

[F1] Under the Axiom of Choice, $\mathbb P^1_k$ is obtained by gluing the two affine schemes
$\operatorname{Spec}k[t]$ and $\operatorname{Spec}k[u]$ along their basic opens
$D(t)$ and $D(u)$, identified through $t\mapsto u^{-1}$ and $u\mapsto t^{-1}$;
the two charts are open subschemes covering $\mathbb P^1_k$, their overlap is
$D(t)\cong D(u)$, and the coordinate functions are mutually inverse units on the
overlap ([[def-projective-line-two-affine-cover-and-twisting-sheaf]]).

[F2] Points of an affine scheme $\operatorname{Spec}A$ correspond to prime
ideals of $A$, and the structure-sheaf stalk at the point $\mathfrak p$ is the
localisation $A_{\mathfrak p}$
([[def-affine-scheme-spectrum]], [[def-affine-scheme]],
[[thm-stalk-structure-sheaf-prime-localization]]).

[F3] A field has exactly the two ideals $(0)$ and $(1)$, hence is a Noetherian
ring; by Hilbert's basis theorem $k[t]$ and $k[u]$ are Noetherian
([[def-field]], [[def-noetherian-ring]], [[thm-hilbert-basis-theorem]]).

[F4] $k[t]$ and $k[u]$ are integrally closed domains
([[lem-polynomial-algebras-over-fields-are-integrally-closed]]) and
$\dim k[t]=\dim k[u]=1$
([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]); for a prime
$\mathfrak p$ the localisation $A_{\mathfrak p}$ is local with maximal ideal
$\mathfrak pA_{\mathfrak p}$ and dimension $\operatorname{ht}(\mathfrak p)$
([[def-localisation-at-a-prime-ideal]], [[def-height-of-a-prime-ideal]],
[[def-krull-dimension-of-a-ring]]). A scheme whose local rings are integrally
closed domains and which has a finite affine open cover by spectra of Noetherian
rings is a normal Noetherian scheme
([[def-weil-divisor-normal-noetherian-scheme]],
[[def-integral-closure-and-integrally-closed-domain]]).

[F5] $\mathbb P^1_k$ is an integral $k$-scheme of finite type; for its generic
point $\eta$ and every nonempty affine open $U$, the function field
$K(\mathbb P^1_k)=\mathcal O_{\mathbb P^1_k,\eta}$ is canonically isomorphic to
$\operatorname{Frac}\Gamma(U,\mathcal O)$, and $k(t)=k(u)$ with $t=u^{-1}$
([[lem-integral-finite-type-scheme-function-field]], [[def-integral-scheme]],
[[def-locally-finite-type-and-finite-type-morphism]], [[def-field-of-fractions]]).

[F6] Assume the Axiom of Choice. For every scheme $S$ and $n\ge0$ the
structure morphism $\mathbb P^n_S\to S$ is proper
([[thm-projective-space-proper-over-base]], [[def-proper-morphism]],
[[def-axiom-of-choice]]); consequently $\mathbb P^1_k$ is an integral proper
$k$-scheme of chain dimension one, i.e. a proper curve over $k$, and its
divisors are the finite formal sums of closed points with
$\deg_k\bigl(\sum_x n_x[x]\bigr)=\sum_x n_x[\kappa(x):k]$
([[def-degree-divisor-proper-curve]],
[[def-dimension-noetherian-topological-space]]).

[F7] Let $X$ be a normal Noetherian integral scheme and $f\in\Gamma(X,K_X^\times)$ a
global meromorphic unit. For a prime divisor $Z$ with generic point $\xi$ the
local ring $\mathcal O_{X,\xi}$ is a discrete valuation ring with fraction field
$K(X)$, and $\operatorname{ord}_Z(f)=v_\xi(f_\xi)$, where $v_\xi$ is the
normalised valuation, $v_\xi(\pi)=1$ for an element generating the maximal
ideal, and units have valuation $0$; the order is additive and
$\operatorname{ord}_Z(f^{-1})=-\operatorname{ord}_Z(f)$. The principal divisor
is the locally finite Weil sum $\operatorname{div}(f)=\sum_Z\operatorname{ord}_Z(f)[Z]$
([[def-order-codimension-one-rational-function]],
[[def-discrete-valuation-ring]], [[def-discrete-valuation]],
[[thm-equivalent-characterisations-of-a-dvr]],
[[def-weil-divisor-normal-noetherian-scheme]]).

[F8] In the unique factorisation domain $k[t]$ every nonzero nonunit is a unit
multiple of a finite product of irreducibles, uniquely up to order and
associates; the units are the nonzero constants, and an irreducible element
generates a prime ideal
([[def-unique-factorisation-domain]],
[[thm-polynomial-ring-over-a-field-is-a-ufd]],
[[def-irreducible-and-prime-elements-in-a-domain]]).

[F9] For a closed point $x$ of the affine scheme $\operatorname{Spec}k[t]$ the
residue field is $\kappa(x)=k[t]/\mathfrak m_x$; for $x=[r]=V(r)$ attached to a
monic irreducible $r$ of degree $e$ this is the field $k[t]/(r)$ of
$k$-dimension $e$, and for $\infty=V(u)$ the residue field is
$k[u]/(u)\cong k$
([[def-residue-field-scheme-point]],
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]).



## Verification

**Proof technique:** factor $p$ and $q$, read off the orders at the finitely
many points they determine and at infinity, and sum the weighted degrees.

1.1 **Charts and points.** By [F1], $\mathbb P^1_k=U_0\cup U_\infty$, the overlap $D(t)\subseteq U_0$ is identified with $D(u)\subseteq U_\infty$, and $tu=1$ on it; every point of $\mathbb P^1_k$ other than $\infty=(u)$ lies in $U_0$ and corresponds to a prime $\mathfrak p\subseteq k[t]$ with $\mathcal O_{\mathbb P^1_k,x}=k[t]_{\mathfrak p}$. [F1, F2]

Since $(u)\subseteq k[u]$ is maximal with $k[u]/(u)\cong k$, every prime of
$k[u]$ containing $u$ equals $(u)$; hence $U_\infty\smallsetminus\{\infty\}=D(u)=U_0\cap U_\infty$.

1.2 **Integrality, normality, function field, dimension.** $\mathbb P^1_k$ is an integral finite-type $k$-scheme of chain dimension one, every local ring of it is an integrally closed domain, and its function field is $k(t)=k(u)$ with $t=u^{-1}$. [F1, F3, F4, F5]

$U_0$ and $U_\infty$ are integral and glued along the nonempty open
$D(t)\cong D(u)$, so $\mathbb P^1_k$ is integral, and finite type over $k$
because its affine charts are. Localisations of integrally closed domains are
integrally closed: if $x\in\operatorname{Frac}(A)$ is integral over $S^{-1}A$
with monic equation $x^n+\sum_{i<n}(a_i/s_i)x^i=0$, then with
$s=\prod_{i<n}s_i$ the element $sx$ satisfies the monic equation
$(sx)^n+\sum_{i<n}a_i\bigl(s^{n-i}/s_i\bigr)(sx)^i=0$ over $A$, so
$sx\in A$ and $x\in S^{-1}A$. Hence every local ring is an integrally closed
domain and $\mathbb P^1_k$ is a normal Noetherian scheme [F4]; by [F5] its
function field is $k(t)=k(u)$. For the dimension, $U_0=\operatorname{Spec}k[t]$
is a Noetherian space of chain dimension $\dim k[t]=1$ whose proper closed
subsets are finite unions of points; since $U_0$ is dense in $\mathbb P^1_k$,
the only proper irreducible closed subsets of $\mathbb P^1_k$ are the points,
so its chain dimension is one
([[def-dimension-noetherian-topological-space]]).

1.3 **Factorisations and the degree count.** $p=\prod_i r_i^{a_i}$ and $q=\prod_j s_j^{b_j}$ with pairwise distinct monic irreducibles $r_i$ and $s_j$, no $r_i$ equal to any $s_j$, and $m=\sum_ia_i\deg r_i$, $n=\sum_jb_j\deg s_j$. [F8]

The monic polynomial $p$ factors as a product of monic irreducibles: a
factorisation $p=c\prod r_i^{a_i}$ has leading coefficient
$c\prod(\text{leading coefficients})=c$ if each $r_i$ is monic, so $c=1$; the
same holds for $q$. Coprimality of $p$ and $q$ says no monic irreducible
divides both, so the two families are disjoint. Degrees add:
$m=\deg p=\sum_ia_i\deg r_i$ and $n=\deg q=\sum_jb_j\deg s_j$.

1.4 **Orders at the finite points.** For every monic irreducible $r\in k[t]$, $\operatorname{ord}_{[r]}(f)$ equals $a_i$ if $r=r_i$, equals $-b_j$ if $r=s_j$, and is $0$ otherwise. [F7, F9, 1.1, 1.3]

Let $r$ be monic irreducible and $\mathfrak p=(r)$. The local ring
$\mathcal O_{\mathbb P^1_k,[r]}=k[t]_{\mathfrak p}$ is a one-dimensional local
domain [F4] and hence a discrete valuation ring whose maximal ideal is
generated by the uniformiser $r$ [F7]. If $r=r_i$ then $r_i\mid p$ and
$r_i\nmid q$, so $q$ is a unit of $k[t]_{\mathfrak p}$ and additivity gives
$\operatorname{ord}_{[r]}(f)=a_i\cdot1-0=a_i$; if $r=s_j$ then $p$ is a unit
and $q=r^{b_j}\cdot(\text{unit})$, giving $\operatorname{ord}_{[r]}(f)=-b_j$;
and if $r$ divides neither $p$ nor $q$, both are units and the order is $0$.

1.5 **Order at infinity.** $\operatorname{ord}_\infty(p)=-m$, $\operatorname{ord}_\infty(q)=-n$, and hence $\operatorname{ord}_\infty(f)=n-m$. [F7, 1.2, 1.3]

On $U_\infty$ one has $t=u^{-1}$, so for a monic polynomial
$g(t)=t^d+c_{d-1}t^{d-1}+\dots+c_0$ of degree $d$,
$g=u^{-d}\bigl(1+c_{d-1}u+\dots+c_0u^d\bigr)$ with the second factor equal to
$1$ at $u=0$, hence a unit of $k[u]_{(u)}=O_{\mathbb P^1_k,\infty}$; with the
uniformiser $u$ this gives $\operatorname{ord}_\infty(g)=-d$. Applying this to
$p$ and $q$ and using additivity yields
$\operatorname{ord}_\infty(f)=(-m)-(-n)=n-m$.

1.6 **The divisor.** $\operatorname{div}(f)=\sum_ia_i[r_i]-\sum_jb_j[s_j]+(n-m)[\infty]$, a finite Weil sum, and all its terms are closed points, so it is an element of $\operatorname{Div}(\mathbb P^1_k)$. [F6, F7, 1.4, 1.5]

By steps 1.4 and 1.5 these are exactly the nonzero orders of $f$ at prime
divisors; the remaining prime divisors have order zero. The support is finite,
so the locally finite sum of [F7] is this finite sum, and since
$\mathbb P^1_k$ has chain dimension one its prime divisors are closed points
[F6].

1.7 **Degree.** $\deg_k\operatorname{div}(f)=\sum_ia_i\deg r_i-\sum_jb_j\deg s_j+(n-m)=m-n+(n-m)=0$. [F6, F9, 1.3, 1.5, 1.6]

By step 1.3 the finite terms have total degree
$\sum_ia_i\deg r_i-\sum_jb_j\deg s_j=m-n$, by [F9] the residue degree of
$[r]$ is $[\kappa([r]):k]=\deg r$ and $[\kappa(\infty):k]=1$, and by [F6] the
degree is additive over the coefficients; adding the coefficient
$\operatorname{ord}_\infty(f)=n-m$ of step 1.5 gives
$m-n+(n-m)=0$.

2.1 **Conclusion.** On $\mathbb P^1_k$ the principal divisor of $f=p/q$ is $\sum_ia_i[r_i]-\sum_jb_j[s_j]+(n-m)[\infty]$ and has degree zero; the Axiom of Choice is inherited from the two-affine projective-line construction [F1] and the properness theorem [F6]. The finite factorisation and valuation computation make no further choice. [F1, F6, 1.6, 1.7] ∎

Every nonzero rational function in $k(t)$ is $c p/q$ with $c\in k^\times$
and coprime monic $p,q$. The constant $c$ is a unit at every point, so its
orders vanish and the computation applies to every principal divisor.
