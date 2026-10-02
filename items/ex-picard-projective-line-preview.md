---
id: ex-picard-projective-line-preview
kind: example
title: "The twists on the projective line have degree n"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-projective-space-as-proj
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - def-standard-open-proj
  - thm-twisting-sheaf-invertible-standard-graded
  - def-sheaf-on-topological-space
  - def-field
  - def-noetherian-ring
  - thm-hilbert-basis-theorem
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - cor-polynomial-ring-over-a-field-is-a-pid
  - lem-polynomial-algebras-over-fields-are-integrally-closed
  - def-affine-scheme-spectrum
  - thm-stalk-structure-sheaf-prime-localization
  - def-localisation-at-a-prime-ideal
  - def-reduction-of-scheme
  - def-irreducible-topological-space-and-subset
  - def-integral-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - lem-chain-dimension-open-cover
  - def-dimension-noetherian-topological-space
  - thm-normality-is-local-for-domains
  - thm-noetherian-ring-quotients-and-localisations
  - def-normal-noetherian-ring
  - def-weil-divisor-normal-noetherian-scheme
  - thm-projective-space-proper-over-base
  - def-proper-morphism
  - def-degree-divisor-proper-curve
  - cor-degree-descends-picard-curve
  - def-picard-group-scheme
  - def-group-homomorphism
  - lem-global-section-effective-divisor
  - def-effective-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - thm-cartier-to-weil-divisor-normal-scheme
  - def-order-codimension-one-rational-function
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - thm-equivalent-characterisations-of-a-dvr
  - lem-cartier-to-weil-respects-principal-and-addition
  - def-residue-field-scheme-point
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.15 (regular sections) and §31.27-§31.28 (Weil divisors, class groups and the Cartier-Weil comparison)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "The Stacks Project, Constructions of Schemes, §27.10 (Tag 01MM, twisting sheaves) and §27.8 (standard opens of Proj)"
      url: "https://stacks.math.columbia.edu/download/constructions.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1-15.3 (invertible sheaves, twisting sheaves of projective space, effective Cartier divisors)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
verification:
  audited: 2026-10-02
---

## Example

Assume the Axiom of Choice, inherited from the Proj, properness and
twisting-sheaf constructions below ([[def-axiom-of-choice]]). Let $k$ be a
field, let $X=\mathbb P^1_k$ be the projective line over $k$, and let
$\mathcal O_X(n)$, $n\in\mathbb Z$, be the twisting sheaves of the canonical
model $X\cong\operatorname{Proj}k[x_0,x_1]$
([[thm-projective-space-as-proj]]). Then $X$ is a normal proper
curve over $k$, so the degree of divisors on $X$ descends to the Picard group
and defines a group homomorphism
$\deg_k:\operatorname{Pic}(X)\to\mathbb Z$
([[cor-degree-descends-picard-curve]]), and for every integer $n$,
$$\deg_k\,\mathcal O_X(n)\;=\;n.$$
The computation uses only the twist $\mathcal O_X(1)$ and the group law of
$\operatorname{Pic}(X)$: it does **not** assert that every invertible sheaf on
$X$ is isomorphic to some $\mathcal O_X(n)$, that is, no classification of the
line bundles on $\mathbb P^1_k$ and no isomorphism
$\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$ is claimed.

## Facts & Assumptions

**Given:** a field $k$, the projective line $X=\mathbb P^1_k$, the polynomial
ring $S=k[x_0,x_1]$ with its total-degree grading $\deg x_i=1$, and the Axiom
of Choice.

[F1] **Choice.** The Axiom of Choice is the statement that every family of
nonempty sets has a choice function; it implies the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] **Model and charts.** There is a canonical isomorphism of
$\operatorname{Spec}k$-schemes $\mathbb P^1_k\cong\operatorname{Proj}S$
([[thm-projective-space-as-proj]]). The A-level chart description gives
$D_+(x_0)=\operatorname{Spec}k[t]$ with $t=x_1/x_0$ and
$D_+(x_1)=\operatorname{Spec}k[u]$ with $u=x_0/x_1$; these charts cover $X$,
and the transition on $D_+(x_0x_1)$ is $t=u^{-1}$ by the standard-chart
formulas ([[def-relative-projective-space-standard-charts]]). The standard
opens $D_+(f)$ for homogeneous $f\in S_+$ of positive degree form a basis of
the topology of $\operatorname{Proj}S$ ([[def-standard-open-proj]]).

[F3] **Twisting sheaves.** $\mathcal O_X(n)=\widetilde{S(n)}$, so that
$\Gamma(D_+(f),\mathcal O_X(n))=S(n)_{(f)}$ for homogeneous $f\in S_+$, and
$\mathcal O_X(0)=\mathcal O_X$ ([[def-twisting-sheaf-proj]]). For every $n$ the
sheaf $\mathcal O_X(n)$ is invertible and the multiplication maps
$\mathcal O_X(m)\otimes_{\mathcal O_X}\mathcal O_X(n)\to\mathcal O_X(m+n)$ are
isomorphisms ([[thm-twisting-sheaf-invertible-standard-graded]]). Sections of a
sheaf that agree on the members of an open cover glue uniquely
([[def-sheaf-on-topological-space]]).

[F4] **The chart rings.** $k$ is a field, hence a Noetherian ring, and
$k[t]$, $k[u]$ are polynomial algebras over $k$, hence Noetherian domains and
integrally closed; $k[u]$ is even a principal ideal domain
([[def-field]], [[def-noetherian-ring]], [[thm-hilbert-basis-theorem]],
[[thm-polynomial-ring-over-a-field-is-a-ufd]],
[[lem-polynomial-algebras-over-fields-are-integrally-closed]],
[[cor-polynomial-ring-over-a-field-is-a-pid]]). A point of $X$ lies in a chart
$D_+(x_i)=\operatorname{Spec}A$ with $A=k[t]$ or $A=k[u]$, and its stalk is the
localisation $A_{\mathfrak p}$ at the corresponding prime, with maximal ideal
$\mathfrak pA_{\mathfrak p}$
([[def-affine-scheme-spectrum]],
[[thm-stalk-structure-sheaf-prime-localization]],
[[def-localisation-at-a-prime-ideal]]).

[F5] **Integrality.** The zero ideal $(0)$ is a homogeneous prime of $S$ and
lies in $D_+(f)$ for every nonzero homogeneous $f\in S_+$; since the standard
opens form a basis, every nonempty open subset of $X$ contains $(0)$, so any
two nonempty open subsets meet and $X$ is irreducible
([[def-standard-open-proj]],
[[def-irreducible-topological-space-and-subset]]). Every local ring of $X$ is
a localisation of the domain $k[t]$ or $k[u]$ of [F4], hence is a domain, so
the nilradical ideal sheaf of $X$ vanishes and $X$ is reduced
([[def-reduction-of-scheme]]). As $X$ is nonempty it is therefore an integral
scheme ([[def-integral-scheme]]).

[F6] **Noetherian and dimension one.** The two charts of [F2] present $X$ as
covered by the spectra of the Noetherian rings $k[t]$, $k[u]$, so $X$ is
locally Noetherian and quasi-compact, that is, a Noetherian scheme whose
underlying space is a Noetherian space
([[def-locally-noetherian-and-noetherian-scheme]],
[[thm-hilbert-basis-theorem]]). The rings $k[t]$ and $k[u]$ have dimension one
([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]), and for a
Noetherian space the dimension of a finite open cover is the supremum of the
dimensions of its members
([[lem-chain-dimension-open-cover]],
[[def-dimension-noetherian-topological-space]]).

[F7] **Normality.** The rings $k[t]$ and $k[u]$ are integrally closed domains
of [F4]; every prime localisation of an integrally closed domain is integrally
closed, and normality of a Noetherian ring is exactly this local condition
([[thm-normality-is-local-for-domains]], [[def-normal-noetherian-ring]]);
localisations of Noetherian rings are Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]). Hence every local ring
of $X$ is a normal Noetherian ring, so $X$ is a normal Noetherian scheme
([[def-normal-noetherian-ring]],
[[def-weil-divisor-normal-noetherian-scheme]]).

[F8] **Proper curve and the descended degree.** The structure morphism
$\mathbb P^1_k\to\operatorname{Spec}k$ is proper
([[thm-projective-space-proper-over-base]]), hence separated, of finite type
and universally closed ([[def-proper-morphism]]). With [F5] and [F6], $X$ is
an integral proper $k$-scheme of chain dimension one, i.e., a proper curve
over $k$, and $X$ is normal by [F7] ([[def-degree-divisor-proper-curve]]).
Therefore $\deg_k\,\mathcal O_X(D):=\deg_k D$ is a well-defined group
homomorphism $\operatorname{Pic}(X)\to\mathbb Z$: the degree $\deg_k D$ of a
divisor $D$ depends only on the isomorphism class of $\mathcal O_X(D)$, and
$[\,\mathcal O_X(D)\,]\mapsto\deg_k D$ is additive with respect to the tensor
product, the group law of $\operatorname{Pic}(X)$
([[cor-degree-descends-picard-curve]], [[def-picard-group-scheme]],
[[def-group-homomorphism]]).

[F9] **The divisor of the section $x_0$.** The element
$x_0\in S_1=S(1)_0$ defines a global section of $\mathcal O_X(1)$ whose
restriction to the chart $D_+(x_i)$ is the image of $x_0$, and $x_i$ generates
the $S_{(x_i)}$-module $S(1)_{(x_i)}$, so the coefficient of the section in the
generator $x_i$ is $x_0/x_i$: it equals $1$ on $D_+(x_0)$ and $u$ on
$D_+(x_1)$ ([[def-twisting-sheaf-proj]],
[[def-sheaf-on-topological-space]]). A coefficient is a regular section of
$\mathcal O_{D_+(x_i)}$ exactly when its germs are nonzerodivisors: the
constant $1$ is a unit and $u$ is a nonzero element of the domain $k[u]$, so
$x_0$ is a regular global section of $\mathcal O_X(1)$. The regular-section
lemma then supplies an effective Cartier divisor $H$ on $X$ with
local-equation datum $\{(D_+(x_0),1),(D_+(x_1),u)\}$, whose vanishing
subscheme $Z_H$ has ideal sheaf generated by $1$ on $D_+(x_0)$ and by $u$ on
$D_+(x_1)$, together with a canonical isomorphism
$\mathcal O_X(H)\to\mathcal O_X(1)$
([[lem-global-section-effective-divisor]],
[[def-effective-cartier-divisor]],
[[def-invertible-sheaf-of-cartier-divisor]]).

[F10] **The associated cycle.** Let $D$ be an effective Cartier divisor on the
normal Noetherian scheme $X$ with local equations $f_i$. For every prime
divisor $Z\subseteq X$ with generic point $\xi$ and every chart with
$\xi\in U_i$, the value $v_\xi(f_{i,\xi})$ of the normalised valuation of the
discrete valuation ring $\mathcal O_{X,\xi}$ is independent of $i$ and of the
datum, and the associated Weil divisor is
$\operatorname{cyc}(D)=\sum_Z v_\xi(f_{i,\xi})\,[Z]$
([[thm-cartier-to-weil-divisor-normal-scheme]],
[[def-order-codimension-one-rational-function]]). Here $v_\xi$ is normalised
by $v_\xi(\pi)=1$ for a uniformiser $\pi$, that is, a generator of the maximal
ideal, and $v_\xi(w)=0$ for units $w$
([[def-discrete-valuation]], [[def-discrete-valuation-ring]]). The canonical
class map $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ carries
$[\,\mathcal O_X(D)\,]$ to $[\,\operatorname{cyc}(D)\,]$
([[lem-cartier-to-weil-respects-principal-and-addition]]). The local ring
$k[u]_{(u)}$ is a local principal ideal domain with nonzero maximal ideal
$(u)k[u]_{(u)}$, hence a discrete valuation ring with uniformiser $u$
([[thm-equivalent-characterisations-of-a-dvr]],
[[cor-polynomial-ring-over-a-field-is-a-pid]],
[[def-localisation-at-a-prime-ideal]]).

[F11] **The point at infinity.** The prime $(u)\subseteq k[u]$ is a maximal
ideal of the chart $D_+(x_1)=\operatorname{Spec}k[u]$, and the corresponding
point $x_\infty$ of $X$ has residue field
$\kappa(x_\infty)=k[u]/(u)\cong k$
([[def-residue-field-scheme-point]],
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]). On the
proper curve $X$ the divisors are the finite formal sums of closed points and
$\deg_k\bigl(\sum_x n_x[x]\bigr)=\sum_x n_x[\kappa(x):k]$
([[def-degree-divisor-proper-curve]]).

## Verification

**Proof technique:** identify $X$ with $\operatorname{Proj}k[x_0,x_1]$, show
that $X$ is a normal proper curve so that degrees descend to
$\operatorname{Pic}(X)$, compute the Cartier divisor of the section $x_0$ of
$\mathcal O_X(1)$ as a single $k$-rational point of degree one, and propagate
this to every twist with the tensor product and the inverse in
$\operatorname{Pic}(X)$.

1.1 **Setup.** Identify $X=\mathbb P^1_k$ with $\operatorname{Proj}S$ by [F2], and write $\mathcal O_X(n)$ for the twisting sheaves of this model. The charts $D_+(x_0)=\operatorname{Spec}k[t]$ and $D_+(x_1)=\operatorname{Spec}k[u]$ cover $X$, meet in $D_+(x_0x_1)$ with $t=u^{-1}$, and the standard opens form a basis. [F2, F3]

1.2 **$X$ is integral.** The point $(0)$ lies in every standard open $D_+(f)$ with $f\neq0$ homogeneous; since these form a basis, $(0)$ lies in every nonempty open subset, so any two nonempty opens meet and $X$ is irreducible. A local ring of $X$ is a localisation of $k[t]$ or $k[u]$ at a prime, by [F4]; if $(a/s)(b/t)=0$ in such a localisation, then $uab=0$ for some $u$ in the multiplicative set, so $a=0$ or $b=0$ because $k[t]$ and $k[u]$ are domains: localisations of domains are domains. Hence every local ring is a domain, the nilradical ideal sheaf vanishes, $X$ is reduced, and since $X\neq\varnothing$ it is an integral scheme. [F2, F4, F5]

1.3 **$X$ is Noetherian of chain dimension one.** The two charts are the spectra of the Noetherian rings $k[t]$, $k[u]$, so $X$ is locally Noetherian and quasi-compact, hence Noetherian, and its underlying space is Noetherian. Since $\dim k[t]=\dim k[u]=1$ and the dimension of a Noetherian space is the supremum of the dimensions of the members of a finite open cover, the chain dimension of $X$ is $\sup\{1,1\}=1$. [F4, F6]

1.4 **$X$ is normal.** Each local ring is a prime localisation of $k[t]$ or of $k[u]$, which are integrally closed domains; a prime localisation of an integrally closed domain is integrally closed, and it is Noetherian as a localisation of a Noetherian ring. So every local ring is an integrally closed Noetherian domain, i.e., a normal Noetherian ring, and $X$ is normal. [F4, F7]

1.5 **The section $x_0$ and its effective divisor.** On the chart $D_+(x_i)$ the module $S(1)_{(x_i)}$ is generated by $x_i$ (every element is a sum of terms $a/x_i^m$ with $a\in S_{m+1}$ and $a/x_i^m=(a/x_i^{m+1})x_i$), so the local sections of the global element $x_0$ have coefficients $1$ on $D_+(x_0)$ and $u$ on $D_+(x_1)$; they agree on the overlap because they are the images of the single element $x_0$, so they glue to a global section of the invertible sheaf $\mathcal O_X(1)$. The coefficients are regular: $1$ is a unit of $k[t]$ and $u$ is a nonzero element of the domain $k[u]$, so multiplication by their germs is injective on every localisation. By the regular-section lemma there is an effective Cartier divisor $H$ with local-equation datum $\{(D_+(x_0),1),(D_+(x_1),u)\}$, vanishing subscheme $Z_H$ with ideal sheaf $(1)$ on $D_+(x_0)$ and $(u)$ on $D_+(x_1)$, and a canonical isomorphism $\mathcal O_X(H)\cong\mathcal O_X(1)$. [F3, F4, F9]

2.1 **$X$ is a normal proper curve over $k$ and the degree descends.** The structure morphism $X\to\operatorname{Spec}k$ is proper and of finite type, so with steps 1.2 and 1.3 the scheme $X$ is an integral proper $k$-scheme of chain dimension one, a proper curve over $k$; by step 1.4 it is normal. Hence [F8] applies: $\deg_k\mathcal O_X(D):=\deg_k D$ is a well-defined group homomorphism $\operatorname{Pic}(X)\to\mathbb Z$, additive in the tensor product, and $\deg_k$ of the class of $\mathcal O_X(D)$ equals $\deg_k D$ for every divisor $D$ on $X$. [F8, step 1.2, step 1.3, step 1.4]

2.2 **The divisor $H$ is the point at infinity.** By step 1.5 the local equation of $H$ on the chart $D_+(x_0)$ is the unit $1$, so no point of $D_+(x_0)$ lies in $Z_H$; on the chart $D_+(x_1)$ the local equation is $u$, and $V(u)$ consists of the maximal ideal $(u)$ alone, with residue field $k[u]/(u)\cong k$. Hence $Z_H=\{x_\infty\}$ with $\kappa(x_\infty)=k$, and $x_\infty\notin D_+(x_0)$. Since $x_\infty$ lies in no open subset contained in $D_+(x_0)$ while a generic point lies in every nonempty open subset, $x_\infty$ is not the generic point of $X$; its closure is an irreducible closed subset different from $X$, and since $X$ has chain dimension one by step 1.3, every irreducible closed subset other than $X$ is a point, so $\{x_\infty\}$ is closed. Hence $x_\infty$ is a closed point of the curve $X$. [F6, F11, step 1.3, step 1.5]

3.1 **The associated cycle of $H$.** Let $Z$ be a prime divisor of $X$. If $Z\neq\{x_\infty\}$ and $Z$ meets $D_+(x_0)$, the local equation $1$ of step 1.5 is a unit at the generic point of $Z$, so its valuation is $0$. If $Z\neq\{x_\infty\}$ and $Z$ meets $D_+(x_1)$ at a prime different from $(u)$, then $u$ is not in that prime, so $u$ is a unit of the corresponding localisation and the valuation is again $0$. Only $Z=\{x_\infty\}$ contributes: by step 2.2 its generic point is $x_\infty$, the local equation on $D_+(x_1)$ is $u$, and $k[u]_{(u)}$ is a discrete valuation ring with maximal ideal generated by $u$, so $v_{x_\infty}(u)=1$. Therefore $\operatorname{cyc}(H)=1\cdot[x_\infty]$, and $\deg_k\operatorname{cyc}(H)=[\kappa(x_\infty):k]=1$. [F10, F11, step 1.5, step 2.2]

4.1 **$\deg_k\mathcal O_X(1)=1$.** By step 2.1 the descent [F8] applies to $X$, and by step 3.1 the associated cycle of $H$ is $[x_\infty]$; since step 1.5 gives $\mathcal O_X(H)\cong\mathcal O_X(1)$, the class $[\,\mathcal O_X(1)\,]=[\,\mathcal O_X(H)\,]$ in $\operatorname{Pic}(X)$ is carried by the canonical class map to $[\,\operatorname{cyc}(H)\,]$. As $\deg_k$ of the class of $\mathcal O_X(D)$ equals $\deg_k D$ for every divisor $D$ and depends only on the class, $\deg_k\mathcal O_X(1)=\deg_k\operatorname{cyc}(H)=1$. [F8, F10, step 1.5, step 2.1, step 3.1]

5.1 **All nonnegative twists.** For $n\ge1$ the multiplication isomorphisms of [F3] give $\mathcal O_X(1)^{\otimes n}\cong\mathcal O_X(n)$ by induction, while $\mathcal O_X(0)=\mathcal O_X$; in $\operatorname{Pic}(X)$ the tensor product is the group law, so additivity of the homomorphism $\deg_k$ provided by step 2.1 gives $\deg_k\mathcal O_X(n)=n\deg_k\mathcal O_X(1)=n$ by step 4.1. For $n=0$ the identity class $[\,\mathcal O_X\,]$ has degree $0$ because a homomorphism of groups carries the identity to the identity: $\deg_k\mathcal O_X(0)=\deg_k\mathcal O_X=0$. [F3, F8, step 2.1, step 4.1]

6.1 **All negative twists.** Let $n<0$ and put $m=-n>0$. The multiplication isomorphism gives $\mathcal O_X(n)\otimes_{\mathcal O_X}\mathcal O_X(m)\cong\mathcal O_X(0)=\mathcal O_X$, so in the abelian group $\operatorname{Pic}(X)$ the classes satisfy $[\,\mathcal O_X(n)\,]=[\,\mathcal O_X(m)\,]^{-1}$. Since $\deg_k$ is a group homomorphism and $\deg_k\mathcal O_X(m)=m$ by step 5.1, $\deg_k\mathcal O_X(n)=-\deg_k\mathcal O_X(m)=-m=n$. [F3, F8, step 5.1]

7.1 **Conclusion.** Combining steps 5.1 and 6.1, for every integer $n$ the twist satisfies $\deg_k\mathcal O_X(n)=n$. The argument used only $\mathcal O_X(1)$, its tensor powers and its inverse in $\operatorname{Pic}(X)$; it exhibits no isomorphism of an arbitrary invertible sheaf with a twist, so it claims no classification of line bundles on $\mathbb P^1_k$. The Axiom of Choice is used exactly through the Proj, properness and twisting-sheaf constructions of [F2], [F3] and [F8] and, via the implication of [F1], through the Dependent Choice hypothesis of the cycle theorem [F10]. [F1, F2, F3, F8, F10, step 5.1, step 6.1] ∎
