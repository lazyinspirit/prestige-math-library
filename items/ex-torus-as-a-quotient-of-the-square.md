---
id: ex-torus-as-a-quotient-of-the-square
kind: example
title: "The square with opposite edges identified is homeomorphic to the product $(\\mathbb{R}/\\mathbb{Z}) \\times (\\mathbb{R}/\\mathbb{Z})$"
status: published
origin: session
deps: [ex-circle-as-r-mod-z, def-quotient-topology, thm-quotient-universal-property,
       def-product-topology, thm-product-universal-property, lem-product-topology-on-rn,
       thm-product-of-subspaces-and-closures, def-homeomorphism-and-open-maps,
       lem-open-or-closed-surjection-is-quotient, def-interval, lem-integer-part,
       def-integers, def-subspace-topology-top, lem-continuity-is-local-and-pastes,
       lem-real-line-is-a-metric-space, def-metrizable-space]
justified_by: []
aliases: [ex-torus-top]
landmark: true
short: "the torus as a quotient of the square"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Torus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Torus"
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
pipeline_run: null
---

## Example

Let $T := \mathbb{R}/\mathbb{Z}$ with its quotient topology and open quotient map
$q$ ([[ex-circle-as-r-mod-z]], [[def-quotient-topology]]), and give
$T \times T$ the product topology ([[def-product-topology]]). Let

$$S \;:=\; [0,1] \times [0,1]$$

be the unit square, the product of two copies of the subspace $[0,1]$ of
$\mathbb{R}$, which by claim 1 of [[thm-product-of-subspaces-and-closures]] is
also the subspace $[0,1]^2$ of $\mathbb{R}^2$
([[lem-product-topology-on-rn]], [[def-subspace-topology-top]]). Let $\sim$ be
the relation on $S$ given by

$$(s,t) \sim (s',t') \quad :\Longleftrightarrow \quad s - s' \in \mathbb{Z} \text{ and } t - t' \in \mathbb{Z},$$

which glues each edge of the square to the opposite edge: it identifies $(0,t)$
with $(1,t)$ and $(s,0)$ with $(s,1)$, and identifies the four corners with one
another. Let $S/\!\sim$ carry the quotient topology with projection $P$. Then:

1. **$Q := q \times q : \mathbb{R}^2 \to T \times T$, $Q(x,y) = (q(x), q(y))$, is
   an open quotient map** ([[lem-open-or-closed-surjection-is-quotient]]): it is
   continuous by [[thm-product-universal-property]], surjective, and open because
   $Q[U \times V] = q[U] \times q[V]$ for open $U, V \subseteq \mathbb{R}$.
2. **$S/\!\sim$ and $T \times T$ are homeomorphic**
   ([[def-homeomorphism-and-open-maps]]). The homeomorphism is induced by the
   restriction $Q \restriction S$, and its inverse by the coordinatewise
   fractional part ([[lem-integer-part]]).

So the square with opposite edges identified is the **torus** $T \times T$. The
torus is not identified here with any subset of $\mathbb{R}^3$, and $T$ is not
identified with a circle in $\mathbb{R}^2$: both identifications need the
trigonometric functions, which are not available at this point in the reading
order ([[ex-circle-as-r-mod-z]]).

## Facts & Assumptions

**Given:** $T = \mathbb{R}/\mathbb{Z}$ with projection $q$; $T \times T$ with the product topology; $\mathbb{R}^2$ with the product topology; the square $S = [0,1]\times[0,1]$; the relation $\sim$ and the quotient $S/\!\sim$ with projection $P$; the maps $Q(x,y) = (q(x),q(y))$, $E := Q \restriction S$, and $F : \mathbb{R}^2 \to S/\!\sim$, $F(x,y) := P(x - \lfloor x \rfloor,\ y - \lfloor y \rfloor)$.

[A1] $q$ is a surjective open quotient map, $V$ is open in $T$ exactly when $q^{-1}[V]$ is open in $\mathbb{R}$, and $q(x) = q(y)$ exactly when $x - y \in \mathbb{Z}$ ([[ex-circle-as-r-mod-z]], [[def-quotient-topology]], [[def-integers]]).

[A2] For every real $x$ there is exactly one integer $\lfloor x \rfloor$ with $\lfloor x \rfloor \le x < \lfloor x \rfloor + 1$, and $\lfloor x + m \rfloor = \lfloor x \rfloor + m$ for every integer $m$ ([[lem-integer-part]]).

[A3] $P$ is a surjective quotient map, and $W$ is open in $S/\!\sim$ exactly when $P^{-1}[W]$ is open in $S$ ([[def-quotient-topology]]).

[L1] A map into a binary product is continuous exactly when both components are; a basis for the product topology on a product of two spaces is the family of boxes $U \times V$ with $U, V$ open ([[thm-product-universal-property]], [[def-product-topology]]).

[L2] The product topology on $\mathbb{R}^2$ is the usual one, bounded open intervals are open in $\mathbb{R}$, and a subset of $\mathbb{R}$ is open exactly when each of its points has such an interval around it inside the set ([[lem-product-topology-on-rn]], [[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metrizable-space]]).

[L3] Restrictions of continuous maps to subspaces are continuous; composites of continuous maps are continuous; continuity may be checked on an open cover and on a finite closed cover ([[def-subspace-topology-top]], [[lem-continuity-is-local-and-pastes]]).

[L4] A continuous open surjection is a quotient map ([[lem-open-or-closed-surjection-is-quotient]], clause 1); for a quotient map $s$ and a continuous $f$ constant on the fibres of $s$, there is exactly one continuous $\bar f$ with $\bar f \circ s = f$ ([[thm-quotient-universal-property]], claim 2).

[L5] The square $S$ carries one topology, the product of the two subspace topologies being the subspace topology from $\mathbb{R}^2$ ([[thm-product-of-subspaces-and-closures]], claim 1; [[def-subspace-topology-top]]).

## Verification

**Proof technique:** direct.

1.1 $Q$ is continuous, its components $q \circ \pi_0$ and $q \circ \pi_1$ being composites of continuous maps, and surjective, since every $(a,b) \in T\times T$ is $(q(u),q(v))$ for some $u,v$ by surjectivity of $q$. [A1, L1, L3]

1.2 For $U, V \subseteq \mathbb{R}$: $Q[U \times V] = q[U] \times q[V]$. Indeed $Q(u,v) = (q(u),q(v))$ gives the inclusion $\subseteq$, and conversely $(q(u), q(v))$ with $u \in U$, $v \in V$ is $Q(u,v)$. [given]

1.3 $Q(x,y) = Q(x',y')$ exactly when $x - x' \in \mathbb{Z}$ and $y - y' \in \mathbb{Z}$, by [A1] applied in each coordinate. [A1]

1.4 $E = Q \restriction S$ is continuous by [L3], and surjective: given $(a,b) \in T \times T$ write $a = q(u)$, $b = q(v)$; then $u - \lfloor u \rfloor$ and $v - \lfloor v \rfloor$ lie in $[0,1)$ by [A2] and $E(u - \lfloor u\rfloor,\ v - \lfloor v \rfloor) = (a,b)$ by [A1]. [A1, A2, L3, L5]

1.5 Fix integers $m,n$ and put $R := [m-1,\ m+1] \times [n-1,\ n+1]$. For $\alpha,\beta \in \{0,1\}$ let $R_{\alpha\beta} := [m-1+\alpha,\ m+\alpha] \times [n-1+\beta,\ n+\beta]$ and define $g_{\alpha\beta} : R_{\alpha\beta} \to S/\!\sim$ by $g_{\alpha\beta}(x,y) := P\big(x - (m-1+\alpha),\ y - (n-1+\beta)\big)$. Each $g_{\alpha\beta}$ is continuous, being $P$ composed with a translation of each coordinate into $[0,1]$, which is continuous by [L2], [L3] and [L5]. [A3, L2, L3, L5]

2.1 For $(s,t),(s',t') \in S$: $E(s,t) = E(s',t')$ exactly when $(s,t) \sim (s',t')$, by step 1.3 and the definition of $\sim$. So the fibres of $E$ are exactly the classes of $\sim$. [step 1.3]

2.2 $F$ is constant on the fibres of $Q$: if $Q(x,y) = Q(x',y')$ then $x' = x + m$ and $y' = y + n$ for integers $m,n$ by step 1.3, and then $x' - \lfloor x'\rfloor = x - \lfloor x \rfloor$ and $y' - \lfloor y' \rfloor = y - \lfloor y \rfloor$ by [A2]. [step 1.3, A2]

2.3 $Q$ is an open map: by [L1] and [L2] the boxes $U \times V$ with $U,V$ open in $\mathbb{R}$ form a basis of $\mathbb{R}^2$, their images are the boxes $q[U] \times q[V]$ by step 1.2, which are open in $T \times T$ by [A1] and [L1], and the image of a union is the union of the images. With step 1.1 and [L4] this makes $Q$ an open quotient map, which is claim 1. [step 1.1, step 1.2, A1, L1, L2, L4]

2.4 The four maps of step 1.5 agree on the overlaps of the $R_{\alpha\beta}$, which are contained in the lines $x = m$ and $y = n$. On $x = m$ the two candidate values differ only in that the first coordinate of the argument of $P$ is $1$ in one and $0$ in the other, and $(1,u) \sim (0,u)$; on $y = n$ the same holds in the second coordinate, and at $(m,n)$ all four values are $P$ of the four corners of $S$, which are all $\sim$-equivalent. [step 1.5, given]

3.1 By steps 1.5 and 2.4 and the finite closed cover $\{R_{\alpha\beta}\}$ of $R$, [L3] gives a continuous $g : R \to S/\!\sim$ restricting to each $g_{\alpha\beta}$; and $g = F$ on $R$, since for $x \in [m-1,m)$ one has $\lfloor x \rfloor = m-1$, for $x \in [m,m+1)$ one has $\lfloor x \rfloor = m$, and at $x = m+1$ the value $P(\dots,\ 0,\dots)$ agrees with $P(\dots, 1, \dots)$ by $\sim$, the same three cases applying to $y$. [step 1.5, step 2.4, A2, L3]

4.1 $F$ is continuous: the open sets $(m-1,m+1) \times (n-1,n+1)$, $m,n \in \mathbb{Z}$, cover $\mathbb{R}^2$ by [L1] and [L2], and on each of them $F$ is the restriction of the continuous $g$ of step 3.1, hence continuous by [L3]; the open cover clause of [L3] then gives continuity of $F$. [step 3.1, L1, L2, L3]

5.1 By step 2.1 and [L4] applied to the quotient map $P$ and the continuous map $E$ of step 1.4, there is exactly one continuous $\bar E : S/\!\sim\ \to T \times T$ with $\bar E \circ P = E$; by step 2.2 and [L4] applied to the quotient map $Q$ of step 2.3 and the continuous $F$ of step 4.1, there is exactly one continuous $\bar F : T \times T \to S/\!\sim$ with $\bar F \circ Q = F$. [step 1.4, step 2.1, step 2.2, step 2.3, step 4.1, A3, L4]

6.1 $\bar F \circ \bar E = \mathrm{id}$: for $(s,t) \in S$ one has $\bar F(\bar E(P(s,t))) = \bar F(Q(s,t)) = F(s,t) = P(s - \lfloor s\rfloor,\ t - \lfloor t \rfloor)$, which equals $P(s,t)$ in every case, since $\lfloor u \rfloor = 0$ for $u \in [0,1)$ and $1 - \lfloor 1 \rfloor = 0$ with $(0,\cdot) \sim (1,\cdot)$ and $(\cdot,0) \sim (\cdot,1)$; and $P$ is surjective. [step 5.1, A2, A3]

6.2 $\bar E \circ \bar F = \mathrm{id}$: for $(x,y) \in \mathbb{R}^2$ one has $\bar E(\bar F(Q(x,y))) = \bar E(F(x,y)) = E(x - \lfloor x\rfloor,\ y - \lfloor y\rfloor) = Q(x - \lfloor x \rfloor,\ y - \lfloor y \rfloor) = Q(x,y)$ by [A1] and [A2]; and $Q$ is surjective by step 1.1. [step 1.1, step 5.1, A1, A2]

7.1 By steps 6.1 and 6.2 the continuous maps $\bar E$ and $\bar F$ are mutually inverse, so $\bar E$ is a homeomorphism, which is claim 2; with step 2.3 both claims are proved. [step 2.3, step 5.1, step 6.1, step 6.2] ∎

## Remarks

- **Why the two-dimensional pasting is needed at all.** A shorter route would be
  to say that $q \times q$ is a quotient map because each factor is, but "a
  product of quotient maps is a quotient map" is false in general and is not
  available here ([[rem-constructions-this-page-stops-short-of]]). What rescues
  the argument is that $q$ is *open*, so $Q$ is open outright by step 2.3, and
  openness does pass to products.

- **The corners are where the gluing is genuinely four-fold.** The relation
  identifies $(0,0)$, $(1,0)$, $(0,1)$ and $(1,1)$ with one another, so the torus
  has a single point coming from the four corners of the square. Step 2.4 is
  exactly the check that the four local descriptions of $F$ agree there.

- **The same technique with only one pair of edges glued gives the cylinder**, and
  with one pair glued after a flip gives the Mobius band; both are worked in the
  next item, which reuses the argument of steps 2.2 to 4.1 in one variable.
