---
id: ex-geometric-two-strand-braids-are-integer-twists
kind: example
title: "Geometric two strand braids are integer twists"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-geometric-braid-with-setwise-endpoints,
       def-elementary-geometric-half-twist,
       def-braid-isotopy-relative-top-and-bottom,
       prop-stacking-of-geometric-braids-is-well-defined,
       thm-geometric-braids-form-a-group,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       thm-real-line-covers-real-line-mod-integers,
       thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle,
       thm-path-lifting-for-covering-maps, thm-homotopy-lifting-for-covering-maps,
       lem-radial-normalisation-is-continuous,
       def-euclidean-spheres-and-closed-balls,
       thm-quarter-turn-values-and-shift-formulas,
       thm-continuous-image-of-a-connected-space,
       cor-connected-subsets-of-the-line,
       thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes,
       def-continuous-map-top,
       def-product-topology, def-interval, def-homeomorphism-and-open-maps,
       def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-6"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.2, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $n=2$, let $Q=(q_1,q_2)$ with $h=\frac{1}{12}$,
$q_1=(-\frac{1}{12},0)$ and $q_2=(\frac{1}{12},0)$, let $\beta=(z_1,z_2)$ be a
braid based at $Q$ ([[def-geometric-braid-with-setwise-endpoints]]), and let
$\sigma_1$ and $\sigma_1^{-}$ be the two half twists at $i=1$
([[def-elementary-geometric-half-twist]]), with classes
$[\sigma_1],[\sigma_1^-]\in G_2$
([[thm-geometric-braids-form-a-group]]). Write

$$w:=z_1-z_2\colon I\longrightarrow\mathbb R^2\setminus\{0\}$$

for the relative motion of the two strands, and write $\sigma_1^{m}$ for the
stacking of $m$ copies of $\sigma_1$ when $m>0$, of $|m|$ copies of
$\sigma_1^{-}$ when $m<0$, and for the trivial braid $e$ when $m=0$.

**The invariant.** There is a unique continuous $\theta\colon I\to\mathbb R$
with $\theta(0)=\frac12$ whose class $[\theta(t)]\in\mathbb R/\mathbb Z$ is the
argument class of $w(t)$, that is, the unique $s$ with
$H([s])=w(t)/\lVert w(t)\rVert_2$, where $H([s])=(\cos 2\pi s,\sin 2\pi s)$
([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]). The number

$$k(\beta):=2\bigl(\theta(1)-\theta(0)\bigr)=2\theta(1)-1$$

is then an integer, and it is an invariant of the braid isotopy class of
$\beta$. The example proves:

1. $k\colon G_2\to\mathbb Z$ is a group homomorphism, with $k(\gamma\star\beta)
   =k(\gamma)+k(\beta)$;
2. $k(e)=0$, $k(\sigma_1)=1$ and $k(\sigma_1^{-})=-1$, hence
   $k(\sigma_1^{m})=m$ for every $m\in\mathbb Z$;
3. $[\beta]=[\sigma_1]^{k(\beta)}$ in $G_2$. Consequently $k$ is a group
   isomorphism $G_2\cong\mathbb Z$, every two-strand braid is braid-isotopic to
   exactly one of the integer twists $\sigma_1^{m}$ ($m\in\mathbb Z$), and two
   two-strand braids are braid-isotopic if and only if they have the same
   invariant $k$.

Thus a two-strand braid is exactly an integer number of half twists, counted
with sign, and the composition of such twists adds the numbers. The
calculation is independent of any presentation of $G_2$: it uses only the
generation of $G_2$ by $[\sigma_1]$ from
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] together with
the argument lift constructed below.

## Facts & Assumptions

**Given:** The natural number $2$, the base configuration $Q=(q_1,q_2)$ with $h=\frac{1}{12}$, $q_1=(-\frac1{12},0)$, $q_2=(\frac1{12},0)$, two-strand braids $\beta=(z_1,z_2)$, $\beta'$ and $\gamma$ based at $Q$, and the half twists $\sigma_1,\sigma_1^-$ based at $Q$.

[F1] A braid based at $Q$ is a pair $(u_1,u_2)$ of continuous maps $u_j\colon I\to D^\circ$ with $u_1(t)\ne u_2(t)$ for all $t$, $u_j(0)=q_j$ and $\{u_1(1),u_2(1)\}=\{q_1,q_2\}$, with endpoint permutation $\pi(u)\in S_2$ defined by $u_j(1)=q_{\pi(u)(j)}$; here $q_1-q_2=(-2h,0)$ and $q_2-q_1=(2h,0)$, and the two-element group $S_2$ consists of the identity and the transposition of $1$ and $2$; a braid isotopy from $\beta$ to $\beta'$ is a pair of jointly continuous maps $Z_j\colon I\times I\to D^\circ$ whose every slice $Z(s,\cdot)$ is such a braid based at $Q$ and whose boundary slices are $\beta$ and $\beta'$ ([[def-geometric-braid-with-setwise-endpoints]], [[def-braid-isotopy-relative-top-and-bottom]], [[def-finite-symmetric-group-and-permutation-notation]], [[def-interval]], [[def-continuous-map-top]], [[def-product-topology]]).

[F2] The half twists are $(\sigma_1)_1=m_1+\rho$, $(\sigma_1)_2=m_1-\rho$ and $(\sigma_1^-)_1=m_1+\rho^{-}$, $(\sigma_1^-)_2=m_1-\rho^{-}$ with $m_1=\frac{q_1+q_2}{2}=(0,0)$, where $\rho(t)=(2th-h,-2th)$ for $t\le\frac12$ and $\rho(t)=(2th-h,2th-2h)$ for $t\ge\frac12$, and $\rho^{-}(t)=(\rho_1(t),-\rho_2(t))$; both are braids based at $Q$, $\pi(\sigma_1)=\pi(\sigma_1^-)$ is the transposition of $1$ and $2$, and $[\sigma_1^-]=[\sigma_1]^{-1}$ in $G_2$ ([[def-elementary-geometric-half-twist]], [[thm-geometric-braids-form-a-group]]).

[F3] Stacking is $(\gamma\star\beta)_j(t)=z_j(2t)$ for $t\le\frac12$ and $=w_{\pi(\beta)(j)}(2t-1)$ for $t\ge\frac12$, where $z_j,w_j$ are the strands of $\beta,\gamma$; $[\gamma\star\beta]=[\gamma][\beta]$ and $\pi$ is constant on braid isotopy classes, so $\pi(\beta)\in S_2$ is an invariant of the class $[\beta]$ ([[prop-stacking-of-geometric-braids-is-well-defined]], [[thm-geometric-braids-form-a-group]]).

[F4] Every element of $G_2$ is a finite product of the elements $[\sigma_1]$ and $[\sigma_1]^{-1}$; more precisely the classes $[\sigma_1],\dots,[\sigma_{n-1}]$ generate $G_n$ for every $n$ ([[prop-the-artin-presentation-surjects-onto-geometric-braids]]).

[F5] $p\colon\mathbb R\to\mathbb R/\mathbb Z$ is a covering map; for a covering $p\colon E\to B$, a path $\alpha\colon I\to B$ and $e_0\in E$ with $p(e_0)=\alpha(0)$ there is a unique path lift $\widetilde\alpha\colon I\to E$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$, and for a homotopy $H\colon I\times I\to B$ together with a lift $\widetilde H_0\colon I\to E$ of $H(\cdot,0)$ there is a unique lift $\widetilde H\colon I\times I\to E$ of $H$ with $\widetilde H(s,0)=\widetilde H_0(s)$ for all $s$; consequently two lifts of one path into $\mathbb R/\mathbb Z$ to continuous maps $I\to\mathbb R$ differ by a constant integer, since their difference is continuous and takes values in $\mathbb Z$ ([[thm-real-line-covers-real-line-mod-integers]], [[thm-path-lifting-for-covering-maps]], [[thm-homotopy-lifting-for-covering-maps]]).

[F6] The map $H\colon\mathbb R/\mathbb Z\to S^1$, $H([s])=(\cos 2\pi s,\sin 2\pi s)$, is a homeomorphism onto the unit circle $S^1=\{(x,y)\in\mathbb R^2:\lVert(x,y)\rVert_2=1\}$, and $H([\frac12])=(-1,0)$; moreover $H([s+\frac12])=-H([s])$ for every real $s$, because $\cos(x+\pi)=-\cos x$ and $\sin(x+\pi)=-\sin x$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]], [[thm-quarter-turn-values-and-shift-formulas]], [[def-euclidean-spheres-and-closed-balls]]).

[F7] The radial normalisation $r\colon\mathbb R^2\setminus\{0\}\to S^1$, $r(x)=x/\lVert x\rVert_2$, is continuous, and $r(-u)=-r(u)$ for every $u\ne0$; so the composite $c:=H^{-1}\circ r\colon\mathbb R^2\setminus\{0\}\to\mathbb R/\mathbb Z$ is continuous, and $c(-u)=c(u)+[\frac12]$ for every $u\ne0$ by [F6] ([[lem-radial-normalisation-is-continuous]], [[def-homeomorphism-and-open-maps]]).

[F8] Sums, differences and scalar multiples of continuous maps are continuous, composites of continuous maps are continuous, continuity of a map into $\mathbb R^2$ may be checked on the coordinate functions, and the continuous image of a connected subset is connected; since $I$ is connected and the connected subsets of $\mathbb R$ are the intervals, a continuous map from $I$ into $\mathbb Z$ is constant ([[thm-algebra-of-continuous-functions]], [[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]], [[thm-continuous-image-of-a-connected-space]], [[cor-connected-subsets-of-the-line]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 **The relative motion and its endpoint values.** Assume $n=2$ and let $\beta=(z_1,z_2)$ be a braid based at $Q$; then $w=z_1-z_2$ is continuous and $w(t)\ne0$ for every $t$ by [F1] and [F8], since distinct strands do not meet; the endpoint condition $\{z_1(1),z_2(1)\}=\{q_1,q_2\}$ of [F1] gives $w(1)=z_1(1)-z_2(1)\in\{q_1-q_2,q_2-q_1\}=\{(-2h,0),(2h,0)\}$, and by the convention $z_j(1)=q_{\pi(\beta)(j)}$ of [F1] the value $w(1)=(-2h,0)$ occurs exactly when $\pi(\beta)$ is the identity, while $w(1)=(2h,0)$ occurs exactly when $\pi(\beta)$ is the transposition of $1$ and $2$. [F1, F8]

2.1 **The argument class and its lift.** By [F7] the class map $c=H^{-1}\circ r$ is continuous, so $c\circ w\colon I\to\mathbb R/\mathbb Z$ is continuous by [F8]; its value at $0$ is $c\bigl((-2h,0)\bigr)=H^{-1}((-1,0))=[\frac12]$ because $r((-2h,0))=(-1,0)$ and $H([\frac12])=(-1,0)$ by [F6]; hence [F5] applied to the covering $p\colon\mathbb R\to\mathbb R/\mathbb Z$ and the path $c\circ w$ gives a unique continuous $\theta\colon I\to\mathbb R$ with $\theta(0)=\frac12$ and $[\theta(t)]=c(w(t))$, that is $H([\theta(t)])=w(t)/\lVert w(t)\rVert_2$ for every $t\in I$. [F5, F6, F7, F8, step 1.1]

3.1 **The invariant, and its parity against the endpoint permutation.** By step 2.1 the class $[\theta(1)]$ equals $c(w(1))$, and by [F6] and [F7] one has $c\bigl((-2h,0)\bigr)=H^{-1}((-1,0))=[\frac12]$ and $c\bigl((2h,0)\bigr)=H^{-1}((1,0))=[0]$; so step 1.1 gives $\theta(1)\in\frac12+\mathbb Z$ when $\pi(\beta)$ is the identity and $\theta(1)\in\mathbb Z$ when $\pi(\beta)$ is the transposition. In the first case $2\theta(1)$ is odd and in the second it is even, so in both cases $k(\beta):=2\theta(1)-1=2(\theta(1)-\theta(0))$ is an integer, and it is even exactly when $\pi(\beta)$ is the identity and odd exactly when $\pi(\beta)$ is the transposition. [F1, F6, F7, step 1.1, step 2.1]

4.1 **Isotopy invariance.** Let $Z$ be a braid isotopy from $\beta$ to $\beta'$ and put $W(s,t):=Z_1(s,t)-Z_2(s,t)$, a continuous and nowhere vanishing map $I\times I\to\mathbb R^2\setminus\{0\}$ by [F1] and [F8]; then $c\circ W$ is a homotopy $I\times I\to\mathbb R/\mathbb Z$ by [F7] and [F8], and $W(s,0)=z_1(0)-z_2(0)=q_1-q_2=(-2h,0)$ for every $s$ by [F1], so the constant map $s\mapsto\frac12$ is a continuous lift of $(c\circ W)(\cdot,0)$; hence [F5] provides a unique lift $\Theta\colon I\times I\to\mathbb R$ of $c\circ W$ with $\Theta(s,0)=\frac12$ for all $s\in I$. For each $s$ the slice $Z(s,\cdot)$ is a braid based at $Q$ by [F1], so its relative motion is $W(s,\cdot)$, and $t\mapsto\Theta(s,t)$ is the unique lift of $c\circ W(s,\cdot)$ with value $\frac12$ at $t=0$; step 3.1 applied to that slice therefore gives $2\Theta(s,1)-1\in\mathbb Z$ for every $s$. The map $s\mapsto\Theta(s,1)$ is continuous, so $s\mapsto2\Theta(s,1)-1$ is a continuous map from the connected interval $I$ into $\mathbb Z$ and is constant by [F8]; moreover $\Theta(0,\cdot)=\theta$ by the uniqueness in [F5] applied to $c\circ W(0,\cdot)=c\circ w$ and step 2.1, and $\Theta(1,\cdot)$ is the corresponding lift for the relative motion $W(1,\cdot)$ of $\beta'$; therefore $k(\beta)=2\Theta(0,1)-1=2\Theta(1,1)-1=k(\beta')$, and $k$ is constant on braid isotopy classes. [F1, F5, F6, F7, F8, step 2.1, step 3.1]

4.2 **Additivity under stacking.** Let $\beta,\gamma$ be two-strand braids based at $Q$, let $\theta_\beta,\theta_\gamma$ be their argument lifts of step 2.1, and let $\epsilon:=0$ when $\pi(\beta)$ is the identity and $\epsilon:=1$ when $\pi(\beta)$ is the transposition, so that $\epsilon\equiv k(\beta)\pmod 2$ by step 3.1; by [F3] the relative motion of the stacking is $w_{\gamma\star\beta}(t)=w_\beta(2t)$ for $t\le\frac12$ and $w_{\gamma\star\beta}(t)=(-1)^{\epsilon}w_\gamma(2t-1)$ for $t\ge\frac12$. Let $\Theta$ be the unique lift of $c\circ w_{\gamma\star\beta}$ with $\Theta(0)=\frac12$, granted by [F5]. On $[0,\frac12]$ the map $t\mapsto\theta_\beta(2t)$ is a lift of $c\circ w_\beta(2t)$ with value $\frac12$ at $t=0$, so $\Theta(t)=\theta_\beta(2t)$ there by uniqueness of path lifts, and $\Theta(\frac12)=\theta_\beta(1)=\frac12+\frac{k(\beta)}{2}$, because $\theta_\beta(1)-\theta_\beta(0)=\frac{k(\beta)}{2}$ by step 3.1. On $[\frac12,1]$, since $c((-1)^{\epsilon}u)=c(u)+\epsilon[\frac12]$ for $u\ne0$ by [F6] and [F7], the maps $t\mapsto\theta_\gamma(2t-1)+\frac{\epsilon}{2}$ and $t\mapsto\Theta(t)$ are two lifts of the same path, so by [F5] the second is the first plus a constant integer: $\Theta(t)=\theta_\gamma(2t-1)+\frac{\epsilon}{2}+z$ for some $z\in\mathbb Z$ and all $t\in[\frac12,1]$. Evaluating at $t=\frac12$ gives $\frac12+\frac{\epsilon}{2}+z=\frac12+\frac{k(\beta)}{2}$, that is $z=\frac{k(\beta)-\epsilon}{2}$, which is an integer precisely because $\epsilon\equiv k(\beta)\pmod 2$. Hence $\Theta(1)=\theta_\gamma(1)+\frac{\epsilon}{2}+\frac{k(\beta)-\epsilon}{2}=\theta_\gamma(1)+\frac{k(\beta)}{2}$, and therefore $k(\gamma\star\beta)=2\Theta(1)-1=2\theta_\gamma(1)-1+k(\beta)=k(\gamma)+k(\beta)$. [F1, F3, F5, F6, F7, F8, step 2.1, step 3.1]

5.1 **The values on the trivial braid and on the two half twists.** The relative motion of the trivial braid $e$, whose strands are the constant maps $t\mapsto q_j$ by [F1], is the constant path $(-2h,0)$, whose argument lift with value $\frac12$ at $0$ is the constant $\frac12$; so $k(e)=2\cdot\frac12-1=0$. For $\beta=\sigma_1$ the relative motion is $2\rho$, that is $w(t)=(4th-2h,-4th)$ for $t\le\frac12$ and $w(t)=(4th-2h,4th-4h)$ for $t\ge\frac12$, by [F2], and it vanishes nowhere: on the first half $w(t)$ runs through the closed third quadrant from $(-2h,0)$ to $(0,-2h)$ and on the second half through the closed fourth quadrant from $(0,-2h)$ to $(2h,0)$, in each case with a direction that turns strictly monotonically; hence the lift with value $\frac12$ at $0$ satisfies $\theta(\frac12)=\frac34$ and $\theta(1)=1$, and $k(\sigma_1)=2(1-\frac12)=1$. For $\beta=\sigma_1^{-}$ the relative motion is the reflection in the horizontal axis of the previous one, running through the second and then the first quadrant, and the same computation gives $\theta(\frac12)=\frac14$ and $\theta(1)=0$, so $k(\sigma_1^-)=2(0-\frac12)=-1$. By the additivity of step 4.2 and induction on $|m|$ this gives $k(\sigma_1^{m})=m$ for every $m\in\mathbb Z$. [F1, F2, F5, F6, step 4.2]

6.1 **Every two-strand braid is an integer twist.** Let $\beta$ be any braid based at $Q$; by [F4] the class $[\beta]\in G_2$ is a finite product of the elements $[\sigma_1]$ and $[\sigma_1]^{-1}$, that is $[\beta]=[\sigma_1]^{m}$ for the integer $m$ which is the sum of the exponents of that product, and by steps 4.2 and 5.1 the invariant of $\beta$ is $k(\beta)=k(\sigma_1^{m})=m$; hence $[\beta]=[\sigma_1]^{k(\beta)}$, and braid-isotopic braids have equal invariants by step 4.1. Consequently $k$ descends to a well-defined map $G_2\to\mathbb Z$ by step 4.1, that map is a group homomorphism by step 4.2, it is surjective because $k(\sigma_1^{m})=m$ for every $m\in\mathbb Z$ by step 5.1, and it is injective because $k(\beta)=0$ forces $[\beta]=[\sigma_1]^{0}=[e]$ by the identity above; so $G_2\cong\mathbb Z$ via $k$, the twists $\sigma_1^{m}$ represent pairwise distinct classes, and each class of $G_2$ is exactly one of them. ∎ [F3, F4, step 4.1, step 4.2, step 5.1]

## Remarks

- The invariant is the *total argument change of the relative motion, divided by $\pi$*: the lift $\theta$ measures the angle of the vector from the second strand to the first in units of full turns, and the half twists contribute $+1$ and $-1$. The factor $2$ in $k=2(\theta(1)-\theta(0))$ converts turns into half turns. Step 3.1 also records the parity dictionary used in step 4.2: $k(\beta)$ is even exactly for the braids with $\pi(\beta)$ the identity, and odd exactly for those whose endpoint permutation is the transposition; this is what makes the correction $z=(k(\beta)-\epsilon)/2$ in the second half of a stacking an integer.
- Only the relative motion of the pair is used, and the endpoint set condition makes its argument change an integer multiple of half a turn: a pure two-strand braid returns the two labels, so the vector comes back to itself after an even number of half turns, while a transposition reverses it after an odd number.
- The example does not use any presentation of $B_2$, and in particular it does not use
  [[thm-the-two-strand-braid-group-is-infinite-cyclic]]: generation comes from
  [[prop-the-artin-presentation-surjects-onto-geometric-braids]] and
  completeness of the presentation is never assumed.
