---
id: thm-local-second-main-theorem-on-a-punctured-disc
kind: theorem
title: "The local Second Main Theorem on a punctured disc"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-truncated-and-ramification-counts
  - def-nevanlinna-counting-proximity-and-characteristic
  - lem-nevanlinna-ramification-counting-identity
  - thm-nevanlinna-second-main-theorem
  - cor-argument-principle-counts-preimages
  - thm-argument-principle-as-image-winding-number
  - def-countable-choice
  - lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-three-point-transitivity-mobius-transformations
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-poles-meromorphic-function-are-discrete-and-countable
  - thm-isolated-zeros-holomorphic-function
  - thm-identity-theorem-holomorphic-functions
  - thm-zero-complex-derivative-on-a-domain-implies-constant
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Mark Lund and Zhuan Ye, Nevanlinna theory of meromorphic functions on annuli"
      url: "https://www.sciengine.com/doi/pdf/f72880821c9e4c6197bdd1d8c0054a6e"
      locator: "Definition A, printed p. 549; Theorems A1 and A2, printed pp. 551-552 (Bieberbach's exterior logarithmic-derivative estimate, exceptional set of finite linear measure, and the fixed-inner-boundary O(log R) First Main Theorem scale)"
    - title: "A. A. Kondratyuk, Meromorphic functions with several essential singularities"
      url: "https://arxiv.org/abs/0807.1247"
      locator: "Theorem 1, p. 10, and the two-parameter Jensen/First-Main-Theorem discussion (annular Jensen context)"
---

## Statement

Assume Countable Choice. Let $f$ be nonconstant and meromorphic on the punctured
disc $0<|z-z_0|<r^*$; choose $0<\rho<r^*$ so that the circle $|z-z_0|=\rho$
contains no poles and no preimages of the finitely many distinct targets
$a_1,\dots,a_q$ of $f$ in the sphere, and put
$F(w)=f(z_0+\rho/w)$ for $|w|>1$. Define

$$m_{\mathrm{ext}}(R,\infty;F)=\frac1{2\pi}\int_0^{2\pi}\log^+|F(Re^{i\theta})|\,d\theta, \qquad N_{\mathrm{ext}}(R,a;F)=\int_1^R n_{\mathrm{ext}}(t,a;F)\,\frac{dt}{t},$$

where $n_{\mathrm{ext}}(t,a;F)$ counts the $a$-points of $F$ in $1<|w|\le t$
with full multiplicity (poles when $a=\infty$); put
$T_{\mathrm{ext}}(R,F)=m_{\mathrm{ext}}(R,\infty;F)+N_{\mathrm{ext}}(R,\infty;F)$,
and let $\bar N_{\mathrm{ext}}$ count each point once. Then there are constants
$C,R_0>0$ and a measurable set $E\subseteq[R_0,\infty)$ of finite linear
measure such that for every $R\ge R_0$ with $R\notin E$,

$$(q-2)T_{\mathrm{ext}}(R,F)\le\sum_{j=1}^q\bar N_{\mathrm{ext}}(R,a_j;F) +C\bigl(\log^+T_{\mathrm{ext}}(R,F)+\log R\bigr).$$

The exact local radius is $s=\rho/R$, and the image exceptional set
$\{\rho/R:R\in E\}$ has finite linear measure, bounded by $\rho R_0^{-2}|E|$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $D^*=\{0<|z-z_0|<r^*\}$, distinct sphere targets $a_1,\dots,a_q$, a radius $0<\rho<r^*$ whose circle $|z-z_0|=\rho$ carries no pole and no $a_j$-point of $f$, and $F(w)=f(z_0+\rho/w)$; Countable Choice is assumed ([[def-countable-choice]]).

[F1] Plane counting and proximity conventions: for meromorphic $g$ on a plane domain, $n(r,a;g)$ is the multiplicity sum of the $a$-points in $|z|\le r$, $N(r,a;g)=n(0,a;g)\log r+\int_0^r\frac{n(t,a;g)-n(0,a;g)}{t}dt$, $N=\bar N+N_1$ with $\bar n$ the number of distinct points and $n_1$ the local-degree surplus, while $m(r,a;g)=\frac1{2\pi}\int_0^{2\pi}\log\frac1{\delta(g(re^{it}),a)}dt$ and $T(r,g)=m(r,\infty;g)+N(r,\infty;g)$ ([[def-nevanlinna-counting-proximity-and-characteristic]], [[def-nevanlinna-truncated-and-ramification-counts]]).

[F2] Ramification identity and target sum: for a nonconstant meromorphic $g$ on a plane domain, $N_1(r,g)=N(r,0;g')+2N(r,\infty;g)-N(r,\infty;g')$, and for every finite set $A$ of distinct sphere targets $\sum_{a\in A}N_1(r,a;g)\le N_1(r,g)$ when $r\ge1$; both follow from the same local-degree calculation as [[lem-nevanlinna-ramification-counting-identity]] wherever the stated counting functions are defined.

[F3] Argument principle and winding number: if $\gamma$ is a closed complex contour and $g$ is meromorphic on a neighbourhood of $\gamma^*$ with $g\ne0$ on $\gamma^*$, then $\frac1{2\pi i}\int_\gamma\frac{g'}{g}=n(g\circ\gamma,0)\in\mathbb Z$; when $g$ is meromorphic on a neighbourhood of a closed disc bounded by a positively oriented circle, the same integral is the winding-weighted preimage count of $g-a$ minus the pole count ([[thm-argument-principle-as-image-winding-number]], [[cor-argument-principle-counts-preimages]]).

[F4] Möbius maps: every Möbius transformation is a biholomorphism of the Riemann sphere, and any ordered triple of distinct sphere points is carried to $(0,1,\infty)$ by a unique Möbius transformation; a biholomorphism preserves local degrees, so composing a meromorphic map with it preserves the target divisors and their multiplicities ([[thm-mobius-transformations-biholomorphic-sphere]], [[thm-three-point-transitivity-mobius-transformations]]).

[F5] Exterior logarithmic-derivative lemma (Lund and Ye, Theorem A2, printed p. 552; Definition A, printed p. 549): for nonconstant $g$ meromorphic in a neighbourhood of the closed exterior $\{\sigma\le|w|<\infty\}$, $\sigma>0$, the logarithmic-derivative mean is $O_{g,\sigma}(\max\{\log^+T_1(R,g),\log R\})$ outside a set of finite linear measure as $R\to\infty$. In their convention $m_1(R,g)=\int_0^{2\pi}\log^+|g(Re^{i\theta})|d\theta$, $N_1(R,\infty;g)$ integrates the pole count in $\sigma\le|w|\le t$ from $\sigma$ to $R$, and $T_1=m_1+N_1$. If the circle $|w|=\sigma$ has no pole of $g$, then $N_1$ equals the normalized exterior count based at $\sigma$, and $m_1=2\pi m_{\mathrm{ext}}$. For $\sigma>1$, that count is at most $N_{\mathrm{ext}}(R,\infty;g)$ based at $1$, since it omits only the finitely many poles with $1<|w|<\sigma$. Hence $T_1(R,g)\le2\pi T_{\mathrm{ext}}(R,g)$ for $R\ge\sigma$, which gives the required normalized bound in terms of this item's characteristic. The regular inner circle is essential to this comparison.

[F6] Structural facts: the poles of a meromorphic function on a plane domain form a closed discrete set and are at most countable; a nonzero holomorphic function has only isolated zeros; two holomorphic functions on a domain that agree on a set with an accumulation point in the domain agree everywhere; a holomorphic function on a domain with derivative identically zero is constant ([[thm-poles-meromorphic-function-are-discrete-and-countable]], [[thm-isolated-zeros-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]], [[thm-zero-complex-derivative-on-a-domain-implies-constant]]).


[F7] Under Countable Choice, a $C^1$ diffeomorphism between open subsets of $\mathbb R$ maps Lebesgue measurable sets to Lebesgue measurable sets, and for a measurable set $B$ its image measure is $\int_B|S'(R)|dR$ ([[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).
## Proof

**Proof technique:** choose the inner circle to avoid poles and target preimages; derive the annular Jensen identity with its fixed inner-circle winding term; normalise the targets by a Möbius map so that all are finite; reuse the partial-fraction separation estimate of the plane Second Main Theorem, estimate the logarithmic derivatives on the exterior domain by the exterior logarithmic-derivative lemma, and use an auxiliary divisor-regular circle when applying the exterior First Main Theorem to the derivative.

1.1 (The regular radius exists) On $D^*$ the pole set of $f$ is closed and discrete, and for each finite $a_j$ the $a_j$-points are isolated: near such a point $f$ is holomorphic, and the zero is isolated unless $f-a_j$ vanishes on a neighbourhood, which by [F6] would force $f\equiv a_j$ on the connected domain $D^*$, contrary to nonconstancy. On each compact annulus $\frac1{k+1}\le|z-z_0|\le r^*(1-\frac1{k+1})$ these sets have only finitely many points. Hence only countably many radii meet a pole or a preimage of one of the finitely many targets; using the countable-choice interface ([[def-countable-choice]]) to run through the compact annuli, some $0<\rho<r^*$ avoids them. [F6, choose]

2.1 (Exterior setup) The inversion $w\mapsto z_0+\rho/w$ is a biholomorphism of $\{|w|>1\}$ onto $\{0<|z-z_0|<\rho\}$, so $F$ is nonconstant and meromorphic on the neighbourhood $\{|w|>\rho/r^*\}\supseteq\{|w|\ge1\}$ of the closed exterior, and the circle $|w|=1$ carries no pole and no $a_j$-preimage of $F$. [construct, step 1.1]

3.1 (Annular Jensen identity) Fix a finite value $a$ with $F-a\ne0$ on $|w|=1$, put $M_a(t)=\frac1{2\pi}\int_0^{2\pi}\log|F(te^{i\theta})-a|d\theta$ for $t>1$, and $k_a:=\frac1{2\pi i}\int_{|w|=1}\frac{F'(w)}{F(w)-a}dw\in\mathbb Z$; then for every $R>1$, $M_a(R)-M_a(1)=k_a\log R+N_{\mathrm{ext}}(R,a;F)-N_{\mathrm{ext}}(R,\infty;F)$. Differentiating under the integral gives $\frac{d}{dt}M_a(t)=\frac1t\cdot\frac1{2\pi i}\int_{|w|=t}\frac{F'(w)}{F(w)-a}dw$, an integer by [F3]; at a zero of $F-a$ of order $e$ the local factorisation $F-a=(w-p)^eu$ raises that winding number by $e$ as $t$ crosses $|p|$, and at a pole of $F$ of order $e$ the factorisation $F-a=(w-p)^{-e}u$ lowers it by $e$, so the integral equals $k_a+n_{\mathrm{ext}}(t,a;F)-n_{\mathrm{ext}}(t,\infty;F)$ for almost every $t$ and integration against $\frac{dt}{t}$ yields the identity, which extends to all $R>1$ by continuity. [F3, step 2.1, algebra]

4.1 (Two-sided exterior First Main Theorem) Let $g$ be meromorphic on a neighbourhood of $\{|w|\ge1\}$, and suppose its inner circle contains no pole of $g$ and no point with $g=a$, where $a\in\mathbb C$. Put $m_{\mathrm{ext}}(R,a;g)=\frac1{2\pi}\int_0^{2\pi}\log^+\frac1{|g(Re^{i\theta})-a|}d\theta$. Then $m_{\mathrm{ext}}(R,a;g)+N_{\mathrm{ext}}(R,a;g)=T_{\mathrm{ext}}(R,g)+O_a(\log R)$ two-sidedly. Indeed step 3.1 applied to $g$ and the identity $\log|g-a|=\log^+|g-a|-\log^+\frac1{|g-a|}$ give $m_{\mathrm{ext}}(R,a;g)=m_{\mathrm{ext}}^+(R,a;g)-M_a(1)-k_a\log R-N_{\mathrm{ext}}(R,a;g)+N_{\mathrm{ext}}(R,\infty;g)$, and by [F1] the comparison $\bigl|\log^+|g-a|-\log^+|g|\bigr|\le\log^+|a|+\log2$ is two-sided, so substituting $m_{\mathrm{ext}}(R,\infty;g)-O_a(1)\le m_{\mathrm{ext}}^+(R,a;g)\le m_{\mathrm{ext}}(R,\infty;g)+O_a(1)$ proves the claim. The same Jensen calculation may be anchored at any regular circle $|w|=\sigma>1$; its integrated counts differ from those anchored at $1$ by $O(\log R)$ because only finitely many divisor points lie in $1<|w|\le\sigma$. [F1, step 3.1, algebra]

5.1 (Möbius normalisation and characteristic comparison) If $q\le2$ the asserted inequality is trivial with $C=0$; assume $q\ge3$. Choose any finite $b\notin\{a_1,\dots,a_q\}$ and let $M$ be the Möbius transformation with $M(b)=\infty$, $M(a_1)=0$, $M(a_2)=1$ [F4]; put $c_j:=M(a_j)$ and $G:=M\circ F$. Then each $c_j$ is finite and the $c_j$ are distinct; $G$ is nonconstant and meromorphic on a neighbourhood of $\{|w|\ge1\}$, and the circle $|w|=1$ carries no $c_j$-point of $G$. By [F4] the $c_j$-divisor of $G$ equals the $a_j$-divisor of $F$ with multiplicities and the poles of $G$ are exactly the $b$-points of $F$ in $|w|>1$ with equal orders, so $\bar N_{\mathrm{ext}}(R,c_j;G)=\bar N_{\mathrm{ext}}(R,a_j;F)$ and $N_{\mathrm{ext}}(R,\infty;G)=N_{\mathrm{ext}}(R,b;F)$. Since $M(u)=A/(u-b)+D$ for constants $A\ne0,D$, $m_{\mathrm{ext}}(R,\infty;G)=m_{\mathrm{ext}}(R,b;F)+O(1)$. Choose one $r_1\in(1,2)$ whose circle avoids the poles and $b$-points of $F$, the poles and $c_j$-points of $G$, and the zeros and poles of $G'$. These divisors are locally finite in the compact annulus $1\le|w|\le2$, so only finitely many radii are excluded. Applying step 4.1 at $r_1$ and using its base-radius observation gives $m_{\mathrm{ext}}(R,b;F)+N_{\mathrm{ext}}(R,b;F)=T_{\mathrm{ext}}(R,F)+O(\log R)$. Therefore $T_{\mathrm{ext}}(R,G)=T_{\mathrm{ext}}(R,F)+O(\log R)$ two-sidedly. [F4, step 2.1, step 4.1, construct]

6.1 (Target separation) Put $\delta:=\min_{i<j}|c_i-c_j|>0$ and $H:=\sum_{j=1}^q\frac1{G-c_j}$; the pointwise separation estimate of the plane Second Main Theorem [[thm-nevanlinna-second-main-theorem]], valid for an arbitrary meromorphic function and reproduced here in the exterior normalisation, gives $\sum_{j=1}^q\log^+\frac1{|G(w)-c_j|}\le\log^+|H(w)|+C_{q,\delta}$ on every outer circle, with $C_{q,\delta}=\log2+\max\{q\log^+(4(q-1)/\delta),(q-1)\log^+(2/\delta)\}$; points with $G(w)=c_j$ are covered by the convention $+\infty\le+\infty$. [step 5.1, algebra]

6.2 (Exterior ramification bookkeeping) Define $N_{1,\mathrm{ext}}(R,a;G):=N_{\mathrm{ext}}(R,a;G)-\bar N_{\mathrm{ext}}(R,a;G)$ and $N_{1,\mathrm{ext}}(R,G):=N_{\mathrm{ext}}(R,0;G')+2N_{\mathrm{ext}}(R,\infty;G)-N_{\mathrm{ext}}(R,\infty;G')$. The pointwise computation of [F2] applied at each point $w$ of the annulus $1<|w|\le R$ with local degree $e_w$ of $G$ gives $N_{1,\mathrm{ext}}(R,a;G)=\sum_{G(w)=a}(e_w-1)\log\frac{R}{|w|}$, $N_{1,\mathrm{ext}}(R,G)=\sum_{e_w\ge2}(e_w-1)\log\frac{R}{|w|}$, hence $N_{\mathrm{ext}}(R,a;G)=\bar N_{\mathrm{ext}}(R,a;G)+N_{1,\mathrm{ext}}(R,a;G)$ with $0\le N_{1,\mathrm{ext}}(R,a;G)\le N_{\mathrm{ext}}(R,a;G)$, and $\sum_{j=1}^qN_{1,\mathrm{ext}}(R,c_j;G)\le N_{1,\mathrm{ext}}(R,G)$ because each ramified point contributes to at most one of the disjoint target classes. [F1, F2, step 5.1, algebra]

6.3 (Exterior logarithmic-derivative bounds) Apply [F5] to $G$ and each $G-c_j$ with inner radius $\sigma=r_1$ from step 5.1. All are nonconstant and meromorphic on a neighbourhood of that closed exterior; its inner circle has no pole or zero of these functions. Thus the source characteristics obey $T_1(R,G)\le2\pi T_{\mathrm{ext}}(R,G)$ and $T_1(R,G-c_j)\le2\pi T_{\mathrm{ext}}(R,G-c_j)$, with the right sides based at $1$. Their pole divisors agree and $|\log^+|G-c_j|-\log^+|G||\le\log2+\log^+|c_j|$, so $T_{\mathrm{ext}}(R,G-c_j)=T_{\mathrm{ext}}(R,G)+O(1)$. Taking the finite union of the $q+1$ source exceptional sets, we obtain a measurable $E$ of finite linear measure such that $m_{\mathrm{ext}}(R,\infty;G'/G)$ and every $m_{\mathrm{ext}}(R,\infty;G'/(G-c_j))$ are bounded by $C_j(\log^+T_{\mathrm{ext}}(R,G)+\log R)$ at all sufficiently large $R\notin E$. [F5, step 5.1, algebra]

7.1 (Reduction to logarithmic derivatives) Since $H=(HG')\cdot\frac1{G'}$ and $HG'=\sum_{j=1}^q\frac{G'}{G-c_j}$, the pointwise inequalities $\log^+|uv|\le\log^+|u|+\log^+|v|$ and $\log^+|\sum_{j\le q}u_j|\le\sum_{j\le q}\log^+|u_j|+\log q$ give $m_{\mathrm{ext}}(R,\infty;H)\le m_{\mathrm{ext}}(R,0;G')+\sum_{j=1}^qm_{\mathrm{ext}}(R,\infty;G'/(G-c_j))+\log q$ for every $R>0$. [step 6.1, algebra]

7.2 (The term $m_{\mathrm{ext}}(0;G')+N_{1,\mathrm{ext}}$) By the choice in step 5.1, $|w|=r_1$ contains no zero or pole of $G'$. Apply the annular Jensen identity of step 4.1 to $G'$ with inner circle $|w|=r_1$; its counts anchored at $r_1$ differ from $N_{\mathrm{ext}}(R,\cdot;G')$, anchored at $1$, by $O(\log R)$, since only finitely many zeros and poles lie in $1<|w|\le r_1$. Thus $$m_{\mathrm{ext}}(R,0;G')=m_{\mathrm{ext}}(R,\infty;G')+N_{\mathrm{ext}}(R,\infty;G')-N_{\mathrm{ext}}(R,0;G')+O(\log R).$$ Adding the definition of $N_{1,\mathrm{ext}}(R,G)$ from step 6.2 yields $m_{\mathrm{ext}}(R,0;G')+N_{1,\mathrm{ext}}(R,G)=m_{\mathrm{ext}}(R,\infty;G')+2N_{\mathrm{ext}}(R,\infty;G)+O(\log R)$. [step 4.1, step 6.2, F6, algebra]

7.3 (Bounding $m_{\mathrm{ext}}(\infty;G')$) The pointwise bound $\log^+|G'|\le\log^+|G|+\log^+|G'/G|$ gives $m_{\mathrm{ext}}(R,\infty;G')\le m_{\mathrm{ext}}(R,\infty;G)+m_{\mathrm{ext}}(R,\infty;G'/G)\le m_{\mathrm{ext}}(R,\infty;G)+C_0(\log^+T_{\mathrm{ext}}(R,G)+\log R)$ for $R$ large outside the exceptional set of step 6.3. [step 6.3, algebra]

8.1 (Ramified exterior Second Main Theorem) Combining steps 6.1, 7.1, 6.3, 7.2 and 7.3, for all large $R$ outside the finite-measure exceptional set $E$ one has $\sum_{j=1}^qm_{\mathrm{ext}}(R,c_j;G)+N_{1,\mathrm{ext}}(R,G)\le2T_{\mathrm{ext}}(R,G)+C_1(\log^+T_{\mathrm{ext}}(R,G)+\log R)$: the separation and logarithmic-derivative steps bound the proximity sum by $m_{\mathrm{ext}}(R,0;G')+C$, and steps 7.2 and 7.3 bound $m_{\mathrm{ext}}(R,0;G')$ by $2T_{\mathrm{ext}}(R,G)-N_{1,\mathrm{ext}}(R,G)+C_1(\log^+T_{\mathrm{ext}}+\log R)$. [step 6.1, step 7.1, step 6.3, step 7.2, step 7.3, algebra]

9.1 (Truncated exterior Second Main Theorem) Step 4.1 at the regular radius $r_1$ of step 5.1 gives $\sum_{j=1}^qm_{\mathrm{ext}}(R,c_j;G)=qT_{\mathrm{ext}}(R,G)-\sum_{j=1}^qN_{\mathrm{ext}}(R,c_j;G)+O(\log R)$; the base-radius observation in step 4.1 accounts for the divisor terms between radii $1$ and $r_1$. Substituting into step 8.1 and using $N_{\mathrm{ext}}(c_j)=\bar N_{\mathrm{ext}}(c_j)+N_{1,\mathrm{ext}}(c_j)$ together with $\sum_jN_{1,\mathrm{ext}}(R,c_j;G)\le N_{1,\mathrm{ext}}(R,G)$ from step 6.2 gives $(q-2)T_{\mathrm{ext}}(R,G)\le\sum_{j=1}^q\bar N_{\mathrm{ext}}(R,c_j;G)+C_2(\log^+T_{\mathrm{ext}}(R,G)+\log R)$ for all large $R\notin E$. [step 4.1, step 5.1, step 6.2, step 8.1, algebra]

10.1 (Transfer back to $F$) Using $\bar N_{\mathrm{ext}}(R,c_j;G)=\bar N_{\mathrm{ext}}(R,a_j;F)$, the two-sided comparison $T_{\mathrm{ext}}(R,G)=T_{\mathrm{ext}}(R,F)+O(\log R)$ of step 5.1, and $\log^+T_{\mathrm{ext}}(R,G)\le\log^+T_{\mathrm{ext}}(R,F)+O(\log R)$ for large $R$, the inequality of step 9.1 becomes $(q-2)T_{\mathrm{ext}}(R,F)\le\sum_{j=1}^q\bar N_{\mathrm{ext}}(R,a_j;F)+C\bigl(\log^+T_{\mathrm{ext}}(R,F)+\log R\bigr)$ for all large $R$ outside $E$, with a suitably enlarged constant $C$. [step 5.1, step 9.1, algebra]

11.1 (The exceptional set in the puncture radius) The substitution $s=\rho/R$ maps $[R_0,\infty)$ bijectively onto $(0,\rho/R_0]$ with $\bigl|\frac{ds}{dR}\bigr|=\rho R^{-2}\le\rho R_0^{-2}$, so by the change-of-variables formula for a measurable set the image $\{\rho/R:R\in E\}$ of the exceptional set $E$ of step 6.3 has linear measure at most $\rho R_0^{-2}|E|<\infty$. [F7, step 10.1, algebra] ∎
