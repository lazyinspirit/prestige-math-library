---
id: thm-fatou-nontangential-boundary-theorem-harmonic
kind: theorem
title: "Fatou limits for Poisson extensions of L1 boundary data"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-countable-choice, def-circle-maximal-function-and-nontangential-region, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-circle-maximal-weak-one-one, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, lem-poisson-kernel-is-a-boundary-approximate-identity, lem-poisson-kernel-properties-on-the-disc, thm-chebyshev-markov-inequality-for-the-integral, thm-finite-and-countable-subadditivity-of-measures, thm-poisson-extension-lp-contraction-and-norm-limit, thm-poisson-nontangential-maximal-bound, thm-rational-points-and-boxes-in-rn]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "The Fatou Theorem, printed pp. 135-136 (PDF pp. 140-141): the limsup functional L_alpha in the proof of Theorem 6.39, its estimate 6.40-6.41, and the reduction to integer apertures."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: the almost-everywhere nontangential boundary convergence for L1 boundary data."
---

## Statement

Assume [[def-countable-choice|countable choice]]. If
$f\in L^1(\mathbb T,m;\mathbb C)$, then for $m$-almost every $\zeta\in\mathbb T$
one has $P[f](z)\to f(\zeta)$ as $z\to\zeta$ within every fixed nontangential
region $\Gamma_A(\zeta)$, $A>1$. The assertion uses an almost-everywhere
representative of $f$ and makes no claim about arbitrary tangential paths.

## Facts & Assumptions

**Given:** Countable choice, a function $f\in L^1(\mathbb T,m;\mathbb C)$, and the nontangential regions $\Gamma_A(\zeta)=\{z\in\mathbb D:|z-\zeta|<A(1-|z|)\}$ of [L1].

[L1] The region $\Gamma_A(\zeta)$, the nontangential maximal function $N_Av(\zeta)=\sup_{z\in\Gamma_A(\zeta)}|v(z)|$, the circle maximal function $M_{\mathbb T}f$ and the definition $P[f]=P[fm]$ are as in the two definitions cited; the regions increase with the aperture, so verifying a nontangential limit for every integer aperture $m\ge2$ verifies it for every $A>1$ ([[def-circle-maximal-function-and-nontangential-region]], [[def-poisson-integral-of-finite-boundary-measure]]).

[L2] Weak type: $m(\{M_{\mathbb T}u>\lambda\})\le3\|u\|_1/\lambda$ for every $u\in L^1(\mathbb T,m)$ and $\lambda>0$ ([[lem-circle-maximal-weak-one-one]]).

[L3] Nontangential maximal bound: $N_A(P[\nu])(\zeta)\le(A+1)^2M_{\mathbb T}\nu(\zeta)$ for every finite complex Borel measure $\nu$, every $A>1$ and every $\zeta$ ([[thm-poisson-nontangential-maximal-bound]]).

[L4] For $f\in L^1$ the Poisson integral $P[f]$ is complex harmonic, hence continuous on $\mathbb D$; for continuous $g$ the radial functions satisfy $\|P_r*g-g\|_\infty\to0$ ([[thm-poisson-extension-lp-contraction-and-norm-limit]], [[lem-poisson-kernel-is-a-boundary-approximate-identity]]).

[L5] The kernel satisfies $P(z,\eta)=(1-|z|^2)/|\eta-z|^2>0$, $\int_{\mathbb T}P(z,\eta)\,dm(\eta)=1$, and $\sup_{\delta\le|\theta|\le\pi}P_r(\theta)\to0$ as $r\uparrow1$ for every $\delta\in(0,\pi]$ ([[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-kernel-on-the-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L6] Continuous complex functions on $\mathbb T$ are dense in $L^1(\mathbb T,m;\mathbb C)$ ([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]]).

[L7] The set $\mathbb Q^2\cap\mathbb D$ is countable and dense in $\mathbb D$; every nonempty open subset of $\mathbb D$ therefore contains a point of it ([[thm-rational-points-and-boxes-in-rn]]).

[L8] Chebyshev's inequality: $m(\{|u|>t\})\le\|u\|_1/t$ for $u\in L^1$ and $t>0$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

[L9] A countable union of measurable $m$-null sets is $m$-null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** direct.

1.1 Continuous data converge in every cone. Let $g\in C(\mathbb T,\mathbb C)$, $\zeta\in\mathbb T$ and $A>1$, and let $\varepsilon>0$; choose $\delta>0$ with $|g(\eta)-g(\zeta)|<\varepsilon$ for $d(\zeta,\eta)<\delta$. For $z\in\Gamma_A(\zeta)$ with $r=|z|$ and $u:=\operatorname{Re}(\overline\zeta z)\le r$ one has $|r\zeta-z|^2=2r(r-u)\le1+r^2-2u=|\zeta-z|^2$ because $(1-r)(1+r-2u)\ge0$, so for every $\eta\in\mathbb T$ the triangle inequality gives $|\eta-r\zeta|\le|\eta-z|+|\zeta-z|\le(1+A)|\eta-z|$, using $|\eta-z|\ge1-r$ and the cone condition. Hence, by [L5] and the unit mass of the kernel, $$|P[g](z)-g(\zeta)|\le\int_{\mathbb T}P(z,\eta)|g(\eta)-g(\zeta)|\,dm(\eta)\le\varepsilon+2\|g\|_\infty(A+1)^2\sup_{2\pi\delta\le|\theta|\le\pi}P_r(\theta),$$ and the last supremum tends to $0$ as $r\uparrow1$; since $z\to\zeta$ inside $\Gamma_A(\zeta)$ forces $r\to1$, this is less than $2\varepsilon$ for $z$ close enough to $\zeta$. Thus $P[g](z)\to g(\zeta)$ along $\Gamma_A(\zeta)$, and in particular the cone limsup $L_m(g)(\zeta):=\limsup_{z\to\zeta,\,z\in\Gamma_m(\zeta)}|P[g](z)-g(\zeta)|$ is $0$ for every integer $m\ge2$. [given, L1, L5, algebra]

1.2 The cone limsup is Borel measurable. Fix an integer $m\ge2$ and let $D_0:=\mathbb Q^2\cap\mathbb D$, countable and dense in $\mathbb D$ by [L7]. For $j\ge1$ put $S_j(\zeta):=\sup\{|P[f](z)-f(\zeta)|:z\in D_0,\ z\in\Gamma_m(\zeta),\ |z-\zeta|<1/j\}$. For fixed $z\in D_0$ the summand is the product of the constant $|P[f](z)-f(\zeta)|$ restricted to the Borel set $\{\zeta\in\mathbb T:|z-\zeta|<m(1-|z|),\ |z-\zeta|<1/j\}$; a countable supremum of Borel measurable functions is Borel measurable, so every $S_j$ is Borel measurable and so is $L_m:=\inf_jS_j$. Moreover, since $P[f]$ is continuous on $\mathbb D$ by [L4] and $D_0$ is dense, the supremum over the points of $D_0$ in the open set $U_j(\zeta):=\Gamma_m(\zeta)\cap\{|z-\zeta|<1/j\}$ equals the supremum over all of $U_j(\zeta)$: every point of $U_j(\zeta)$ is a limit of points of $D_0\cap U_j(\zeta)$. Therefore $L_m(\zeta)=\inf_jS_j(\zeta)=\limsup_{z\to\zeta,\,z\in\Gamma_m(\zeta)}|P[f](z)-f(\zeta)|$ is exactly the cone limsup, and it is Borel measurable. [given, L1, L4, L7, algebra]

2.1 Pointwise error bound. Let $g\in C(\mathbb T,\mathbb C)$ and let $m\ge2$ be an integer. By step 1.1, $L_m(g)(\zeta)=0$ for every $\zeta$, and limsup subadditivity gives $$L_m(f)(\zeta)\le L_m(f-g)(\zeta)+L_m(g)(\zeta)\le N_m\bigl(P[f-g]\bigr)(\zeta)+|f-g|(\zeta)\le(m+1)^2M_{\mathbb T}(f-g)(\zeta)+|f-g|(\zeta),$$ where the middle inequality uses $\limsup_z|P[f-g](z)-(f-g)(\zeta)|\le\limsup_z|P[f-g](z)|+|f-g|(\zeta)$ and the last one is [L3] with aperture $m$ and measure $\nu=(f-g)m$, together with $P[f-g]=P[(f-g)m]$ and $M_{\mathbb T}(f-g)=M_{\mathbb T}((f-g)m)$ from [L1]. [step 1.1, L1, L3, algebra]

3.1 Small measure of the bad sets. Fix an integer $m\ge2$ and $t>0$. If a point $\zeta$ satisfies $(m+1)^2M_{\mathbb T}(f-g)(\zeta)\le t$ and $|f-g|(\zeta)\le t$, then step 2.1 gives $L_m(f)(\zeta)\le2t$; hence $$\{L_m>2t\}\subseteq\bigl\{(m+1)^2M_{\mathbb T}(f-g)>t\bigr\}\cup\{|f-g|>t\}.$$ By [L2] and [L8], applied to the $L^1$ function $f-g$, the first set has measure at most $3(m+1)^2\|f-g\|_1/t$ and the second at most $\|f-g\|_1/t$, so $m(\{L_m>2t\})\le(3(m+1)^2+1)\|f-g\|_1/t$ for every continuous $g$. Given $\varepsilon>0$, [L6] supplies a continuous $g$ with $\|f-g\|_1<\varepsilon$; hence $m(\{L_m>2t\})\le(3(m+1)^2+1)\varepsilon/t$ for every $\varepsilon>0$, and consequently $m(\{L_m>2t\})=0$. [step 1.2, step 2.1, L2, L6, L8, algebra]

4.1 The exceptional set is null. For each integer $m\ge2$, the set $\{L_m>0\}=\bigcup_{k\ge1}\{L_m>1/(2k)\}$ is a countable union of Borel sets of $m$-measure zero by steps 1.2 and 3.1, hence is $m$-null by [L9]; the union $B:=\bigcup_{m\ge2}\{L_m>0\}$ over the countably many integers $m\ge2$ is then $m$-null as well. [step 1.2, step 3.1, L9]

5.1 Conclusion. Let $\zeta\notin B$, so that the complement of $B$ has full measure. Then $L_m(\zeta)=0$ for every integer $m\ge2$: for every $\varepsilon>0$ there is $\delta>0$ with $|P[f](z)-f(\zeta)|<\varepsilon$ for all $z\in\Gamma_m(\zeta)$ with $|z-\zeta|<\delta$. Given $A>1$, choose an integer $m\ge A$; since $\Gamma_A(\zeta)\subseteq\Gamma_m(\zeta)$ by [L1], the same $\delta$ witnesses $P[f](z)\to f(\zeta)$ as $z\to\zeta$ within $\Gamma_A(\zeta)$. Thus the nontangential limit exists and equals $f(\zeta)$ for every $\zeta$ outside the null set $B$. If $f'=f$ almost everywhere is another representative, then $L'_m\le L_m+|f-f'|$ for the corresponding cone limsups, so the bad set for $f'$ is contained in $B\cup\{|f-f'|>0\}$, and the latter is a countable union of null sets by [L8] and [L9]; hence the assertion is independent of the representative. [step 1.1, step 4.1, L1] ∎
