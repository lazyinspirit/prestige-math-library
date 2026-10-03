---
id: ex-divisor-rational-function-projective-line
kind: example
title: "Divisor of a rational function on the projective line"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-affine-scheme-spectrum
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
  - def-affine-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-field-of-fractions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
verification:
  audited: 2026-10-02
---

## Example

Let $k$ be a field and let $\mathbb P^1_k$ be the projective line with affine
coordinate $t=x_1/x_0$ on the chart $U_0=\operatorname{Spec}k[t]$, so that
$U_\infty=\operatorname{Spec}k[u]$ with $u=1/t$ and $\infty=V(u)$. The
rational function
$$f=\frac{t^2}{t-1}\in k(t)^\times=k(\mathbb P^1_k)^\times$$
is a global meromorphic unit, and its principal divisor is
$$\operatorname{div}(f)=2[0]-[1]-[\infty].$$
The zero at the origin $0=V(t)$ has coefficient $+2$, and the poles at
$1=V(t-1)$ and at $\infty$ have coefficient $-1$: zeros are counted positively
and poles negatively.

## Facts & Assumptions

**Given:** a field $k$, the two-affine projective line $\mathbb P^1_k$ with
charts $U_0=\operatorname{Spec}k[t]$ and $U_\infty=\operatorname{Spec}k[u]$
glued along $tu=1$, the points $0=V(t)$, $1=V(t-1)$ of $U_0$, the point
$\infty=V(u)$ of $U_\infty$, and the rational function
$f=t^2/(t-1)\in k(t)^\times$.

[F1] $\mathbb P^1_k$ is obtained by gluing the two affine schemes
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
([[lem-polynomial-algebras-over-fields-are-integrally-closed]]), and
$\dim k[t]=\dim k[u]=1$
([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]). For a prime
$\mathfrak p$ the localisation $A_{\mathfrak p}$ is a local ring whose maximal
ideal is $\mathfrak pA_{\mathfrak p}$, of dimension $\operatorname{ht}(\mathfrak p)$
([[def-localisation-at-a-prime-ideal]], [[def-height-of-a-prime-ideal]],
[[def-krull-dimension-of-a-ring]]). A scheme whose local rings are integrally
closed domains and which has a finite affine open cover by spectra of Noetherian
rings is a normal Noetherian scheme
([[def-weil-divisor-normal-noetherian-scheme]],
[[def-integral-closure-and-integrally-closed-domain]]).

[F5] $\mathbb P^1_k$ is an integral $k$-scheme of finite type; for its generic
point $\eta$ and every nonempty affine open $U$, the function field
$K(\mathbb P^1_k)=\mathcal O_{\mathbb P^1_k,\eta}$ is canonically isomorphic to
$\operatorname{Frac}\Gamma(U,\mathcal O)$, and restriction embeds global
sections into it ([[lem-integral-finite-type-scheme-function-field]],
[[def-integral-scheme]],
[[def-locally-finite-type-and-finite-type-morphism]],
[[def-field-of-fractions]]).

[F6] Let $X$ be a normal Noetherian integral scheme and $f\in\Gamma(X,K_X^\times)$ a
global meromorphic unit. For a prime divisor $Z$ with generic point $\xi$ the
local ring $\mathcal O_{X,\xi}$ is a discrete valuation ring with fraction field
$K(X)$, and $\operatorname{ord}_Z(f)=v_\xi(f_\xi)$, where $v_\xi$ is the
normalised valuation: $v_\xi(\pi)=1$ for an element generating the maximal
ideal of $\mathcal O_{X,\xi}$, and units have valuation $0$. The order is
additive, $\operatorname{ord}_Z(fg)=\operatorname{ord}_Z(f)+\operatorname{ord}_Z(g)$
and $\operatorname{ord}_Z(f^{-1})=-\operatorname{ord}_Z(f)$
([[def-order-codimension-one-rational-function]],
[[def-discrete-valuation-ring]], [[def-discrete-valuation]],
[[thm-equivalent-characterisations-of-a-dvr]]).

[F7] The principal divisor of a global meromorphic unit is the locally finite
Weil sum $\operatorname{div}(f)=\sum_Z\operatorname{ord}_Z(f)\,[Z]$ over the
prime divisors of $X$ ([[def-weil-divisor-normal-noetherian-scheme]],
[[def-order-codimension-one-rational-function]]).


## Verification

**Proof technique:** compute the three orders of $f$ with the uniformisers
available on the two standard charts and show every other prime divisor gives
order zero.

1.1 **The charts and all points except infinity.** By [F1], $\mathbb P^1_k=U_0\cup U_\infty$, the overlap $D(t)\subseteq U_0$ is identified with $D(u)\subseteq U_\infty$, and $tu=1$ on it.
The ideal $(u)\subseteq k[u]$ is maximal with residue field $k[u]/(u)\cong k$,
so every prime of $k[u]$ containing $u$ equals $(u)$; hence every point of
$U_\infty$ other than $\infty=(u)$ lies in the basic open
$D(u)=U_0\cap U_\infty\subseteq U_0$. Therefore every point of
$\mathbb P^1_k$ other than $\infty$ lies in $U_0$, and by [F2] it corresponds
to a prime $\mathfrak p\subseteq k[t]$ with
$\mathcal O_{\mathbb P^1_k,x}=k[t]_{\mathfrak p}$.
[F1, F2]

1.2 **Integrality, normality and the function field.** $\mathbb P^1_k$ is an integral finite-type $k$-scheme, every local ring of it is an integrally closed domain, and its function field is $k(t)=k(u)$ with $t=u^{-1}$.
$U_0$ and $U_\infty$ are integral affine schemes because $k[t]$ and $k[u]$
are domains, and they are glued along the nonempty open subscheme
$D(t)\cong D(u)$. The two irreducible open charts have nonempty overlap, which is dense
in both, so their union is irreducible, and stalks of the glued scheme are stalks of one of the two
charts, so reducedness is inherited; hence $\mathbb P^1_k$ is integral, and it
is finite type over $k$ because its affine charts are. Every local ring of
$\mathbb P^1_k$ is a localisation $k[t]_{\mathfrak p}$ or
$k[u]_{\mathfrak q}$ of an integrally closed domain [1.1], and localisations of
integrally closed domains are integrally closed: if
$x\in\operatorname{Frac}(A)$ is integral over $S^{-1}A$ with monic equation
$x^n+\sum_{i<n}(a_i/s_i)x^i=0$, then with $s=\prod_{i<n}s_i$ the element $sx$
satisfies the monic equation
$(sx)^n+\sum_{i<n}a_i\bigl(s^{n-i}/s_i\bigr)(sx)^i=0$ over $A$, obtained by
multiplying the equation of $x$ by $s^n$, whose coefficients lie in $A$; so
$sx\in A$ and $x\in S^{-1}A$. The rings $k[t]$, $k[u]$ are Noetherian [F3], so
$\mathbb P^1_k$ is a normal Noetherian scheme [F4]. By [F5] the function field
is $\operatorname{Frac}k[t]=k(t)$, and $k(t)=k(u)$ with $t=u^{-1}$ on the
overlap; in particular $f=t^2/(t-1)$ is a global meromorphic unit.
[F1, F3, F4, F5]

1.3 **The coordinates are uniformisers.** The local ring at $0=(t)$ is $k[t]_{(t)}$, with maximal ideal generated by $t$; similarly $t-1$ generates the maximal ideal of $k[t]_{(t-1)}$ at $1$, and $u$ generates the maximal ideal of $k[u]_{(u)}$ at $\infty$.
Since $\dim k[t]=\dim k[u]=1$ and the ideals $(t)$, $(t-1)$, $(u)$ are
nonzero, each of these local rings has dimension one and is therefore a
discrete valuation ring [F4]; in each of them the displayed generator is a
uniformiser, so $v_{[0]}(t)=v_{[1]}(t-1)=v_\infty(u)=1$ and
$v_{[0]}(t-1)=v_{[1]}(t)=v_\infty(1-u)=0$, because $t-1\notin(t)$,
$t\notin(t-1)$ and $1-u\notin(u)$ are units.
[F2, F4, F6]

1.4 **Orders at the origin and at one.** In $k(t)$ one has $f=t^2\cdot(t-1)^{-1}$, and $\operatorname{ord}_{[0]}(f)=2$, $\operatorname{ord}_{[1]}(f)=-1$.
By additivity of the order,
$\operatorname{ord}_{[0]}(f)=2v_{[0]}(t)-v_{[0]}(t-1)=2\cdot1-0=2$ and
$\operatorname{ord}_{[1]}(f)=2v_{[1]}(t)-v_{[1]}(t-1)=2\cdot0-1=-1$.
[F6, 1.3]

1.5 **Order at infinity.** On $U_\infty$ the coordinate is $u=1/t$, and $f=u^{-1}(1-u)^{-1}$ in $k(u)=k(t)$, so $\operatorname{ord}_\infty(f)=-1$.
Indeed $f=\frac{t^2}{t-1}=\frac{u^{-2}}{u^{-1}-1}=\frac{1}{u(1-u)}=u^{-1}(1-u)^{-1}$,
and with the uniformiser $u$ and the unit $1-u$ of step 1.3, additivity gives
$\operatorname{ord}_\infty(f)=-v_\infty(u)-v_\infty(1-u)=-1-0=-1$.
[F6, 1.2, 1.3]

1.6 **Every other prime divisor has order zero.** If $Z\neq[0],[1],[\infty]$ is a prime divisor with generic point $\xi$, then $\operatorname{ord}_Z(f)=0$.
By 1.1 the point $\xi$ lies in $U_0$ and corresponds to a prime
$\mathfrak p\subseteq k[t]$ with
$\mathcal O_{\mathbb P^1_k,\xi}=k[t]_{\mathfrak p}$; since $Z$ is a prime
divisor, $\dim k[t]_{\mathfrak p}=1=\operatorname{ht}(\mathfrak p)$, so
$\mathfrak p\neq(0)$ [F4]. The maximal ideals $(t)$ and $(t-1)$ of $k[t]$ are
the primes of the points $[0]$ and $[1]$; as they are maximal, $t\in\mathfrak p$
forces $\mathfrak p=(t)$, and $t-1\in\mathfrak p$ forces
$\mathfrak p=(t-1)$. Hence $t,t-1\notin\mathfrak p$, both elements are units of
$k[t]_{\mathfrak p}$, and $f=t^2(t-1)^{-1}$ is a unit of
$\mathcal O_{\mathbb P^1_k,\xi}$; by [F6] its valuation, and hence
$\operatorname{ord}_Z(f)$, is $0$.
[F2, F4, F6, 1.1, 1.3]

2.1 **Conclusion.** The principal divisor of $f$ is $\operatorname{div}(f)=2[0]-[1]-[\infty]$. [F7, 1.4, 1.5, 1.6] ∎

By steps 1.4 and 1.5 the prime divisors with nonzero order are $[0]$ with order
$2$, $[1]$ with order $-1$ and $\infty$ with order $-1$, and step 1.6 shows
that every other prime divisor has order zero; the principal divisor [F7] is
therefore the finite sum $\operatorname{div}(f)=2[0]-[1]-[\infty]$. This is
locally finite, its positive part $2[0]$ records the double zero at the origin,
and its negative part $[1]+[\infty]$ records the simple poles.
