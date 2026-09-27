---
id: ex-the-three-strand-geometric-braid-relation
kind: example
title: "The three strand geometric braid relation"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-geometric-three-strand-braid-relation,
       def-elementary-geometric-half-twist,
       prop-stacking-of-geometric-braids-is-well-defined,
       thm-geometric-braids-form-a-group,
       def-geometric-braid-with-setwise-endpoints,
       def-braid-isotopy-relative-top-and-bottom,
       def-finite-symmetric-group-and-permutation-notation,
       thm-quarter-turn-values-and-shift-formulas,
       thm-sine-and-cosine-derivatives,
       cor-trigonometric-parity-and-pythagorean-identity,
       def-p-norms-on-rn,
       lem-continuity-is-local-and-pastes,
       thm-algebra-of-continuous-functions, def-continuous-map-top,
       def-interval, def-product-topology]
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.5 and 3.2, printed pp. 7-8 and 23-26"
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

Take $n=3$ and $i=1$, so that $h=\frac{1}{4(3+1)}=\frac1{16}$ and the base
configuration is

$$q_1=(-2h,0)=\Bigl(-\tfrac18,0\Bigr),\qquad q_2=(0,0),\qquad q_3=(2h,0)=\Bigl(\tfrac18,0\Bigr),$$

with $m:=m_1=q_1+(h,0)=(-\frac1{16},0)$ and
$m':=m_2=q_2+(h,0)=(\frac1{16},0)$, and with $c:=q_2=(0,0)$ and
$p_k:=q_k$ for $k=1,2,3$. Let
$\sigma_1,\sigma_2$ be the elementary half twists
([[def-elementary-geometric-half-twist]]) and set

$$W_0:=\sigma_1\star(\sigma_2\star\sigma_1),\qquad W_1:=\sigma_2\star(\sigma_1\star\sigma_2)$$

with respect to the stacking of
[[prop-stacking-of-geometric-braids-is-well-defined]]. Write
$R_\theta(a,b):=(a\cos\theta-b\sin\theta,\;a\sin\theta+b\cos\theta)$ for the
rotation of the plane about the origin, and let $\mathrm{rot}$ be the
three-strand tuple whose $k$-th strand is at height $u$ at the point
$c+R_{\pi u}(p_k)$, the strands outside $\{1,2,3\}$ being constant (here
$n=3$, so there are none). The example verifies:

1. $W_0$ and $W_1$ are braids based at $Q$ whose strand coordinates are the
   explicit windows displayed below, and both have endpoint permutation the
   transposition $(1\,3)$;
2. $\mathrm{rot}$ is a braid based at $Q$ with endpoint permutation $(1\,3)$,
   and its strands move through the explicit positions
   $(\pm 2h\cos\pi u,\pm 2h\sin\pi u)$ and $(0,0)$;
3. the linear interpolation
   $Z_k(s,u):=(1-s)(W_0)_k(u)+s\,\mathrm{rot}_k(u)$ has bottom value $Q$ and top
   value $(q_3,q_2,q_1)$ for every $s$, and its slices at
   $u\in\{0,\frac12,1\}$ are collision-free with the displayed values;

consequently, by the isotopies exhibited in
[[lem-geometric-three-strand-braid-relation]], the two words are
braid-isotopic and

$$[\sigma_1]\,[\sigma_2]\,[\sigma_1]=[\sigma_2]\,[\sigma_1]\,[\sigma_2]$$

holds in $G_3$.

## Facts & Assumptions

**Given:** The natural number $3$, the index $i=1$, the base configuration $Q=(q_1,q_2,q_3)$ with $h=\frac1{16}$, the half twists $\sigma_1,\sigma_2$ based at $Q$, and the words $W_0=\sigma_1\star(\sigma_2\star\sigma_1)$ and $W_1=\sigma_2\star(\sigma_1\star\sigma_2)$.

[F1] For $n\ge3$ and $1\le i\le n-2$ one has $\sigma_i\star\sigma_{i+1}\star\sigma_i\sim\sigma_{i+1}\star\sigma_i\star\sigma_{i+1}$; the proof exhibits the intermediate braid $\mathrm{rot}$, the rotation of $q_i,q_{i+1},q_{i+2}$ about $q_{i+1}$ by the angle $\pi u$ at height $u$ with the remaining strands fixed, and shows that the bracketing $\sigma_i\star(\sigma_{i+1}\star\sigma_i)$ is braid-isotopic to $\mathrm{rot}$, which is a braid based at $Q$ with endpoint permutation the transposition of $i$ and $i+2$, while the point reflection $\kappa(w)=2q_{i+1}-w$ followed by the relabelling of $i$ and $i+2$ turns that bracketing into $\sigma_{i+1}\star(\sigma_i\star\sigma_{i+1})$, so that bracketing is braid-isotopic to $\mathrm{rot}$ as well ([[lem-geometric-three-strand-braid-relation]]).

[F2] The base points are $q_j=((2j-n-1)h,0)$, here $q_1=(-2h,0)$, $q_2=(0,0)$, $q_3=(2h,0)$; the half twist at $k$ is $(\sigma_k)_k=m_k+\rho$, $(\sigma_k)_{k+1}=m_k-\rho$ and $(\sigma_k)_j=q_j$ otherwise, where $m_k=q_k+(h,0)$ and the diamond path satisfies $\rho(0)=(-h,0)$, $\rho(\tfrac12)=(0,-h)$, $\rho(1)=(h,0)$; $\pi(\sigma_k)$ is the transposition of $k$ and $k+1$; stacking places the right factor below: $(\gamma\star\beta)_j(t)=z_j(2t)$ for $t\le\frac12$ and $=w_{\pi(\beta)(j)}(2t-1)$ for $t\ge\frac12$, with $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$ and $[\gamma\star\beta]=[\gamma][\beta]$ in $G_n$ ([[def-geometric-braid-with-setwise-endpoints]], [[def-elementary-geometric-half-twist]], [[prop-stacking-of-geometric-braids-is-well-defined]], [[thm-geometric-braids-form-a-group]]).

[F3] A braid based at $Q$ is a tuple of continuous maps $u_k\colon I\to D^\circ$ with pairwise distinct values, $u_k(0)=q_k$ and $\{u_1(1),u_2(1),u_3(1)\}=\{q_1,q_2,q_3\}$, its endpoint permutation being the unique $\pi$ with $u_k(1)=q_{\pi(k)}$; a braid isotopy is a jointly continuous family whose every slice is such a braid and whose boundary slices are the two given braids; the group $S_3$ is written in cycle notation with $(\pi\circ\sigma)(j)=\pi(\sigma(j))$ ([[def-geometric-braid-with-setwise-endpoints]], [[def-braid-isotopy-relative-top-and-bottom]], [[def-finite-symmetric-group-and-permutation-notation]]).

[F4] $\sin0=0$, $\cos0=1$, $\cos\frac\pi2=0$, $\sin\frac\pi2=1$, $\cos\pi=-1$, $\sin\pi=0$, and $\sin^2\theta+\cos^2\theta=1$ for every real $\theta$; hence $R_0$ is the identity, $R_\pi(a,b)=(-a,-b)$, and $\lVert R_\theta(a,b)\rVert_2=\lVert(a,b)\rVert_2$ for all $a,b$ ([[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-p-norms-on-rn]]).

[F5] Sums, scalar multiples and composites of continuous maps are continuous, and a function on the interval $I=[0,1]$ whose restrictions to the finitely many closed pieces $\{u\le\frac14\}$, $\{\frac14\le u\le\frac12\}$, $\{\frac12\le u\le1\}$ are continuous is continuous; the same pasting applies in the isotopy parameter ([[thm-algebra-of-continuous-functions]], [[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 **The explicit strand windows of the two words.** Applying the stacking formula of [F2] twice, with $m=(-\frac1{16},0)$, $m'=(\frac1{16},0)$ and the transposition couplings $\pi(\sigma_1)=(1\,2)$, $\pi(\sigma_2)=(2\,3)$, gives for $W_0$ the strands $(m+\rho(4u),\,m-\rho(4u),\,q_3)$ for $0\le u\le\frac14$, $(m'+\rho(4u-1),\,q_1,\,m'-\rho(4u-1))$ for $\frac14\le u\le\frac12$ and $(q_3,\,m+\rho(2u-1),\,m-\rho(2u-1))$ for $\frac12\le u\le1$, and for $W_1$ the strands $(q_1,\,m'+\rho(4u),\,m'-\rho(4u))$ for $0\le u\le\frac14$, $(m+\rho(4u-1),\,q_3,\,m-\rho(4u-1))$ for $\frac14\le u\le\frac12$ and $(m'+\rho(2u-1),\,m'-\rho(2u-1),\,q_1)$ for $\frac12\le u\le1$. The two windows of $W_0$ agree at $u=\frac14$, where the first gives $(m+\rho(1),\,m-\rho(1),\,q_3)=((0,0),(-2h,0),(2h,0))$ and the second gives $(m'+\rho(0),\,q_1,\,m'-\rho(0))=((0,0),(-2h,0),(2h,0))$, and at $u=\frac12$, where the second gives $(m'+\rho(1),\,q_1,\,m'-\rho(1))=((2h,0),(-2h,0),(0,0))$ and the third gives $(q_3,\,m+\rho(0),\,m-\rho(0))=((2h,0),(-2h,0),(0,0))$; the same two checks apply verbatim to the three windows of $W_1$, so by [F5] the formulas define continuous tuples $W_0,W_1\colon I\to(\mathbb R^2)^3$, and each value of each of the six windows is one of $q_1,q_2,q_3$ or one of $m\pm\rho(v),m'\pm\rho(v)$. [F2, F3, F5]

1.2 **The rotation braid.** By [F4] the motion $u\mapsto R_{\pi u}(p_k)$ is continuous for each $k$ and satisfies $R_{\pi u}(p_k)=p_k$ at $u=0$ and $R_{\pi u}(p_k)=-p_k$ at $u=1$, so the strands of $\mathrm{rot}$ run from $p_1=(-2h,0),p_2=(0,0),p_3=(2h,0)$ to $-p_1=(2h,0),-p_2=(0,0),-p_3=(-2h,0)$, that is from $Q$ to $(q_3,q_2,q_1)$; at height $u$ the three positions are $R_{\pi u}(p_k)$, whose mutual distances are those of the distinct points $p_1,p_2,p_3$ because $R_{\pi u}$ preserves the norm and is linear and injective; and every value lies in $D^\circ$, since $\lVert R_{\pi u}(p_k)\rVert_2=\lVert p_k\rVert_2\le 2h=\frac18<1$; hence $\mathrm{rot}$ is a braid based at $Q$ with endpoint permutation $(1\,3)$. [F3, F4, F5]

2.1 **Collision bounds for the windows.** For $v\in I$ the diamond path satisfies $\lVert\rho(v)\rVert_2^2=h^2(8v^2-4v+1)$ for $v\le\frac12$ and $\lVert\rho(v)\rVert_2^2=h^2\bigl((2v-1)^2+(2v-2)^2\bigr)$ for $v\ge\frac12$; the first is $\ge h^2\cdot\frac12$ with equality at $v=\frac14$ and the second is $\ge h^2\cdot\frac12$ with equality at $v=\frac34$, and both are $\le h^2$. Hence in each window the two moving strands, which are $m+\rho(v)$ and $m-\rho(v)$ (or $m'+\rho(v))$ and $m'-\rho(v)$), are separated by $2\lVert\rho(v)\rVert_2\ge\sqrt2\,h=\frac{\sqrt2}{16}$, and the frozen base point of that window, namely $q_3$ in the first and third windows and $q_1$ in the second, is at distance exactly $3h$ from that window's midpoint and therefore at distance at least $3h-h=2h=\frac18$ from each moving point; moreover every window value has norm at most $\lVert m\rVert_2+h=\lVert m'\rVert_2+h=2h=\frac18<1$, so all values lie in $D^\circ$. Consequently each of the two window tuples is a collision-free tuple, and together with steps 1.1 and 1.2 this shows that $W_0$ and $W_1$ are braids based at $Q$. [F2, F3, F4, step 1.1]

2.2 **The endpoint permutations.** By [F2] and step 1.1, $\pi(W_0)=\pi(\sigma_1)\circ\pi(\sigma_2\star\sigma_1)=\pi(\sigma_1)\circ\pi(\sigma_2)\circ\pi(\sigma_1)$ and $\pi(W_1)=\pi(\sigma_2)\circ\pi(\sigma_1)\circ\pi(\sigma_2)$; evaluating the first composite, $(1\,2)\circ(2\,3)\circ(1\,2)$, at $1,2,3$ gives $1\mapsto(1\,2)(3)=3$, $2\mapsto(1\,2)(1)=2$ and $3\mapsto(1\,2)(2)=1$, that is the transposition $(1\,3)$, and evaluating the second, $(2\,3)\circ(1\,2)\circ(2\,3)$, at $1,2,3$ gives $1\mapsto1\mapsto2\mapsto3$, $2\mapsto3\mapsto3\mapsto2$ and $3\mapsto2\mapsto1\mapsto1$, which is again $(1\,3)$; the same conclusion is read off at $u=1$, where the windows of step 1.1 give $(q_3,q_2,q_1)$ for both words. [F3, step 1.1]

2.3 **The interpolation and its values at sample heights.** Put $Z_k(s,u):=(1-s)(W_0)_k(u)+s\,\mathrm{rot}_k(u)$ for $k=1,2,3$, a jointly continuous map by [F5] and step 1.1; for $k<l$ the collision equation $Z_k(s,u)=Z_l(s,u)$ with $s\in(0,1)$ is equivalent, by the linearity of $R_{\pi u}$, the identities $\mathrm{rot}_l(u)-\mathrm{rot}_k(u)=2h(l-k)(\cos\pi u,\sin\pi u)$ and $(1-s)>0$, to the statement that $(W_0)_k(u)-(W_0)_l(u)$ is a positive multiple of $(\cos\pi u,\sin\pi u)$. At $u=0$ the three strand positions of $W_0$ are $q_1,q_2,q_3$, whose differences $(-2h,0),(-4h,0),(-2h,0)$ are negative multiples of $(\cos0,\sin0)=(1,0)$, so no collision occurs for $s\in(0,1)$, and $Z(s,0)=(q_1,q_2,q_3)$; at $u=\frac12$ the positions of $W_0$ are $q_3,q_1,q_2$, whose differences $(4h,0),(2h,0),(-2h,0)$ are horizontal and nonzero while $(\cos\frac\pi2,\sin\frac\pi2)=(0,1)$ is vertical, so no collision occurs, and $Z(\frac12,\frac12)=\frac12((2h,0),(-2h,0),(0,0))+\frac12((0,-2h),(0,0),(0,2h))=((h,-h),(-h,0),(0,h))$; at $u=1$ the positions of $W_0$ are $q_3,q_2,q_1$, whose differences $(2h,0),(4h,0),(2h,0)$ are positive multiples of $(1,0)$ while $(\cos\pi,\sin\pi)=(-1,0)$, so no collision occurs, and $Z(s,1)=(q_3,q_2,q_1)$ for every $s$. [F1, F2, F4, F5, step 1.1, step 1.2]

3.1 **Conclusion.** By [F1] the bracketing $W_0=\sigma_1\star(\sigma_2\star\sigma_1)$ is braid-isotopic to $\mathrm{rot}$, and the reflection $\kappa(w)=-w$ followed by the relabelling of $1$ and $3$ turns $W_0$ into $W_1=\sigma_2\star(\sigma_1\star\sigma_2)$, so $W_1$ is braid-isotopic to $\mathrm{rot}$ as well; step 1.2 identifies $\mathrm{rot}$ as a braid based at $Q$, and step 2.2 gives $\pi(W_0)=\pi(W_1)=(1\,3)$; step 2.3 exhibits the explicit intermediate values of the deformation, and steps 2.1 and 1.1 record the numerical facts $2\lVert\rho(v)\rVert_2\ge\frac{\sqrt2}{16}$ and $3h-h=\frac18$ behind its collision-freeness. Hence $W_0\sim W_1$ and, passing to isotopy classes in the group $G_3$ of [F2], $[\sigma_1]\,[\sigma_2]\,[\sigma_1]=[\sigma_2]\,[\sigma_1]\,[\sigma_2]$. ∎ [F1, F2, F3, step 1.2, step 2.2, step 2.3]

## Remarks

- The numbers are the smallest case of the relation: with $h=\frac1{16}$ the three base points are $-\frac18,0,\frac18$ on the horizontal axis, so the local picture of the lemma is the picture of three points spaced $\frac18$ apart, and the whole isotopy happens inside the closed ball of radius $\frac18$ around the middle point, well inside $D^\circ$.
- The rotation $\mathrm{rot}$ is the geometric meaning of the relation: performing the three half twists on the outer pair and the middle pair alternately is the same as rotating the three-point configuration rigidly by the angle $\pi$, and the point reflection in the middle point exchanges the two outer strands, which is why the two words have the same endpoint permutation $(1\,3)$.
