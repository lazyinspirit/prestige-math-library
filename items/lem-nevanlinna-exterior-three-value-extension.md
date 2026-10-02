---
id: lem-nevanlinna-exterior-three-value-extension
kind: lemma
title: "Three omitted values force exterior extension"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-three-point-transitivity-mobius-transformations
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-schottky-theorem
  - lem-cauchy-estimates-on-concentric-subdiscs
  - thm-rational-points-and-boxes-in-rn
  - thm-heine-borel-rn
  - thm-recursion
  - def-chordal-metric-riemann-sphere
  - thm-chordal-metric-induces-sphere-topology
  - thm-compact-implies-complete-and-totally-bounded
  - thm-extreme-value-metric
  - thm-chordal-limit-theorem-for-meromorphic-functions
  - thm-boundary-maximum-modulus-principle
  - thm-removable-singularity-characterizations
  - thm-pole-characterizations
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Aleksander Simonič, The Ahlfors lemma and Picard's theorems"
      url: "https://arxiv.org/pdf/1506.07019v1"
      locator: "§5.3 Theorem 11, printed p. 13 (Schottky bound); §5.4 Theorems 13–14, printed pp. 14–15 and the introduction on printed p. 3 (extension formulation); the choice-free diagonal extraction is reconstructed locally"
    - title: "A. Simonič, The Ahlfors lemma and Picard's theorems (arXiv:1506.07019v1)"
      url: "https://arxiv.org/abs/1506.07019v1"
      locator: "§5.4, printed pp. 14–15: normality of two-value-omitting families and the punctured-disc extension principle"
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§5, printed pp. 10–12: the two-value-omitting disc estimate and its surrounding context"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 3 §1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §1, printed pp. 87–89: comparison estimates for two-value-omitting functions"
verification:
  audited: 2026-10-02
---

## Statement

Let $R>0$ and let $g$ be meromorphic on $|w|>R$. Suppose there is $R_1>R$ such that
$g$ omits three distinct values of the Riemann sphere on $|w|>R_1$. Then $g$
extends meromorphically across $w=\infty$: the function $z\mapsto g(1/z)$ has a
meromorphic extension to a neighbourhood of $z=0$.

## Facts & Assumptions

**Given:** A radius $R>0$, a radius $R_1>R$, and a function $g$ meromorphic on $|w|>R$ that omits three distinct sphere values on $|w|>R_1$.

[F1] For any two ordered triples of distinct points of $\widehat{\mathbb C}$ there is a Möbius transformation carrying the first onto the second; in particular a triple can be normalized to $(0,1,\infty)$ ([[thm-three-point-transitivity-mobius-transformations]]).

[F2] Every Möbius transformation is a biholomorphism of the Riemann sphere with Möbius inverse, and composition with it preserves meromorphy holomorphically in the sphere charts ([[thm-mobius-transformations-biholomorphic-sphere]]).

[F3] Schottky: for all $R'>0$, $0<r<1$ there is $C(R',r)>0$ such that every holomorphic $F:\mathbb D\to\mathbb C\setminus\{0,1\}$ with $|F(0)|\le R'$ satisfies $|F(z)|\le C(R',r)$ for $|z|\le r$ ([[thm-schottky-theorem]]).

[F4] Cauchy estimates on concentric subdiscs: if $f$ is holomorphic on $D(a,S)$ and $|f|\le M$ on $|z-a|=R$, then $|f^{(n)}(z)|\le n!RM/(R-r)^{n+1}$ for $|z-a|\le r$, $0\le r<R<S$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[F5] The chordal metric $\chi$ on $\widehat{\mathbb C}$ is the Euclidean distance of stereographic images on the unit sphere; it induces the standard topology ([[def-chordal-metric-riemann-sphere]], [[thm-chordal-metric-induces-sphere-topology]]).

[F6] $\mathbb Q^2$ is countable and dense in $\mathbb R^2$, and rational boxes form a countable basis of the topology ([[thm-rational-points-and-boxes-in-rn]]).

[F7] Closed boxes in $\mathbb R^n$ are compact, and a subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F8] A compact metric space is complete and totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]).

[F9] A continuous real-valued function on a nonempty compact metric space attains a maximum and a minimum ([[thm-extreme-value-metric]]).

[F10] Peano recursion: for every set $A$, $a\in A$ and $f:A\to A$ there is a unique $g:\mathbb N\to A$ with $g(0)=a$ and $g(\sigma(n))=f(g(n))$ ([[thm-recursion]]).

[F11] A chordally locally uniform limit of meromorphic functions on a plane domain is meromorphic or identically $\infty$; if all the approximants are holomorphic, the limit is holomorphic or identically $\infty$ ([[thm-chordal-limit-theorem-for-meromorphic-functions]]).

[F12] If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f(z)|\le\max_{\partial\Omega}|f|$ for $z\in\Omega$ ([[thm-boundary-maximum-modulus-principle]]).

[F13] A holomorphic function on a punctured disc bounded near the centre has a removable singularity there ([[thm-removable-singularity-characterizations]]).

[F14] On a punctured disc, $a$ is a pole of $f$ if and only if $|f(z)|\to\infty$ there, equivalently $1/f$ extends holomorphically across $a$ and vanishes there ([[thm-pole-characterizations]]).

## Proof

**Proof technique:** reduce the exterior map to a holomorphic function on a punctured disc omitting $0$ and $1$; obtain uniform chordal equicontinuity on a fixed annulus from Schottky's theorem and Cauchy estimates; extract a deterministic diagonal subsequence converging on a dense subset; propagate a bound for the function or its reciprocal along shrinking circles by the maximum modulus principle; conclude with the removable-singularity and pole characterizations.

1.1 Let $v_1,v_2,v_3$ be the three omitted sphere values. By [F1] choose a Möbius transformation $M$ with $M(v_1)=0$, $M(v_2)=1$, $M(v_3)=\infty$, and put $h(z):=M(g(1/z))$ for $0<|z|<1/R_1$. Since $|1/z|>R_1$ there, $g(1/z)$ omits $v_1,v_2,v_3$; hence $h$ attains neither $\infty$ nor $0,1$, so $h$ is holomorphic on $0<|z|<1/R_1$ and omits $0$ and $1$. [F1, F2, given, construct]

1.2 (Local setup) Let $h$ be holomorphic on $0<|z|<r_0$ omitting $0$ and $1$. Set $\rho:=r_0/8$, $\rho_n:=\rho\,2^{-n}$ for $n\in\mathbb N$, $A:=\{1/2<|\zeta|<2\}$ and $h_n(\zeta):=h(\rho_n\zeta)$ for $\zeta\in A$. Since $0<\rho_n|\zeta|<2\rho=r_0/4<r_0$ for $\zeta\in A$, each $h_n$ is holomorphic on $A$ and omits $0$ and $1$. [given, construct, algebra]

1.3 (Dense set) Put $K:=\{3/4\le|\zeta|\le5/4\}$ and let $Q:=(\mathbb Q+i\mathbb Q)\cap K$. Since $\mathbb Q^2$ is countable and dense in $\mathbb R^2$ and $K$ is the closure of its nonempty interior $\{3/4<|\zeta|<5/4\}$, $Q$ is countable and dense in $K$; fix an enumeration $q_0,q_1,q_2,\dots$ of $Q$. [F6, F7, algebra]

1.4 (Dyadic target boxes) Identify the sphere with $S^2\subset[-1,1]^3$ through the stereographic homeomorphism of [F5]. For each $m\ge0$ the $8^m$ half-open dyadic boxes of side $2^{1-m}$ partition $[-1,1]^3$; order each level lexicographically. Their diameters are $\sqrt3\cdot2^{1-m}\to0$. [F5, F6, algebra]

2.1 It suffices to prove the following local claim: a function holomorphic on a punctured disc $0<|z|<r_0$ that omits $0$ and $1$ extends meromorphically at $0$. Indeed, applying the claim to $h$ produces a meromorphic extension of $h$ at $0$; by [F2] the composition $M^{-1}\circ h$ is then meromorphic at $0$, and on the punctured disc it equals $g(1/z)$, so $z\mapsto g(1/z)$ is meromorphic near $0$. [F2, step 1.1, suffices]

2.2 (Fixed band) Put $\delta:=1/16$. The set $K$ of step 1.3 is closed and bounded, hence compact by [F7]. If $a\in K$ and $|\zeta-a|\le2\delta=1/8$, then $5/8\le|\zeta|\le11/8$, so $\zeta\in A$; thus $\overline D(a,2\delta)\subset A$ for every $a\in K$. [F7, step 1.2, algebra]

2.3 (Center normalization) Fix $a\in K$ and $n\in\mathbb N$. If $|h_n(a)|\le2$ put $t:=h_n$; otherwise put $t:=1/h_n$. In both cases $t$ is holomorphic on $A$, omits $0$ and $1$, and $|t(a)|\le2$: in the first case this is step 1.2; in the second, $h_n$ has no zeros, $t=0$ would force $h_n=\infty$, and $t=1$ would force $h_n=1$, while $|t(a)|<1/2$. [step 1.2, algebra]

2.4 (Extraction at one point) Let $I\subset\mathbb N$ be infinite and $q\in K$. Define $I_0:=I$ and, recursively, for $m\ge0$: among the finitely many level-$(m+1)$ dyadic boxes, at least one contains $\Sigma(h_i(q))$ for infinitely many $i\in I_m$; let $B_m$ be the first such box and $I_{m+1}:=\{i\in I_m:\Sigma(h_i(q))\in B_m\}$. Let $s(m)$ be the least element of $I_m$ with $s(m)>s(m-1)$, where $s(-1):=-1$. Then every $I_m$ is infinite and nested, $s$ is strictly increasing with range in $I$, and the values $\Sigma(h_{s(m)}(q))$ are eventually inside boxes of diameter tending to $0$, so they form a Cauchy sequence; being contained in the compact metric space $[-1,1]^3$, it converges, and the limit lies in the closed subset $S^2$. Every selection above is a least element in a finite or well-ordered list, so no choice principle is used. [F7, F8, F10, step 1.4, construct]

3.1 (Schottky bound) The map $F(\zeta):=t(a+2\delta\zeta)$ is holomorphic on the unit disc and omits $0,1$, with $|F(0)|=|t(a)|\le2$; the disc $D(a,2\delta)$ lies in $A$ by step 2.2. Applying [F3] with center bound $2$ and inner radius $1/2$ gives a constant $C_0=C(2,1/2)$, independent of $a$ and $n$, with $|t(\zeta)|\le C_0$ for $|\zeta-a|\le\delta$. [F3, step 2.2, step 2.3]

3.2 (Nested refinements) Let $s_0$ be the strictly increasing sequence produced by step 2.4 with $I=\mathbb N$ and $q=q_0$. Define states $(j,s_j)$ by recursion [F10], taking $s_{j+1}$ to be the sequence produced by step 2.4 from $I:=\operatorname{range}(s_j)$ and $q:=q_{j+1}$. Then each $s_j$ is strictly increasing, $\operatorname{range}(s_{j+1})\subseteq\operatorname{range}(s_j)$, and, since $s_j$ was extracted at $q_j$, the values $h_{s_j(m)}(q_j)$ converge in the chordal sphere as $m\to\infty$ for every $j$. [F10, step 2.4, construct]

4.1 (Lipschitz bound for $t$) By [F4] applied to $t$ on $D(a,2\delta)$ with bound $M=C_0$ on the circle $|\zeta-a|=\delta$ and $r=\delta/2$, we get $|t'(\zeta)|\le\frac{\delta\,C_0}{(\delta/2)^2}=\frac{4C_0}{\delta}$ for $|\zeta-a|\le\delta/2$. Hence $|t(z)-t(w)|\le\frac{4C_0}{\delta}|z-w|$ for $z,w\in D(a,\delta/2)$. [F4, step 3.1, algebra]

4.2 (Diagonal) Put $n_i:=s_i(i)$ for $i\in\mathbb N$. Then $n_{i+1}=s_{i+1}(i+1)>s_{i+1}(i)\ge s_i(i)=n_i$, because $\operatorname{range}(s_{i+1})\subseteq\operatorname{range}(s_i)$ forces $s_{i+1}(i)\ge s_i(i)$ by induction on the position in the increasing enumeration. Hence $(n_i)$ is strictly increasing. For fixed $j$ and $i\ge j$ we have $n_i\in\operatorname{range}(s_i)\subseteq\operatorname{range}(s_j)$, so $(n_i)_{i\ge j}$ is a strictly increasing sequence of elements of $\operatorname{range}(s_j)$, i.e. a subsequence of $s_j$; by step 3.2 the values $h_{n_i}(q_j)$ converge to a point $H(q_j)$ of the sphere. [step 3.2, algebra]

5.1 (Chordal form) For finite $u,v$ the stereographic coordinates give $\chi(u,v)=\frac{2|u-v|}{\sqrt{(1+|u|^2)(1+|v|^2)}}\le2|u-v|$, and $\chi(1/u,1/v)=\chi(u,v)$ for $u,v\neq0$: substituting $1/u,1/v$ in the formula clears the factors $|u|,|v|$. Therefore for $z,w\in D(a,\delta/2)$, in the notation of step 2.3, $\chi(h_n(z),h_n(w))=\chi(t(z),t(w))\le2|t(z)-t(w)|\le\frac{8C_0}{\delta}|z-w|$, uniformly in $n$ and $a$. [F5, step 4.1, algebra]

6.1 (Equicontinuity on $K$) For all $z,w\in K$ with $|z-w|<\delta/2$, apply step 5.1 with $a:=z\in K$ and $w\in D(z,\delta/2)$: $\chi(h_n(z),h_n(w))\le\frac{8C_0}{\delta}|z-w|$ for every $n$. Thus the family $\{h_n\}$ has the uniform chordal modulus of continuity $\omega(s):=\min\{2,\frac{8C_0}{\delta}s\}$ on $K$, where the constant $2$ bounds the chordal distance because $\chi$ is the chordal length on the unit sphere. [step 5.1, algebra]

7.1 (Uniform convergence on $K$) Let $\varepsilon>0$ and choose $\eta>0$ with $\omega(\eta)<\varepsilon/3$. The discs $D(q,\eta)$, $q\in Q$, cover $K$; by compactness [F7] a finite subcover exists, and we take the least one in a fixed enumeration of the finite subsets of $Q$. For each of its finitely many centers $q_\ell$, step 4.2 gives $N_\ell$ with $\chi(h_{n_i}(q_\ell),h_{n_m}(q_\ell))<\varepsilon/3$ for $i,m\ge N_\ell$. Let $N:=\max_\ell N_\ell$. For $z\in K$ choose $\ell$ with $|z-q_\ell|<\eta$; then for $i,m\ge N$, $\chi(h_{n_i}(z),h_{n_m}(z))\le\chi(h_{n_i}(z),h_{n_i}(q_\ell))+\chi(h_{n_i}(q_\ell),h_{n_m}(q_\ell))+\chi(h_{n_m}(q_\ell),h_{n_m}(z))<\varepsilon$. Thus $(h_{n_i})$ is uniformly Cauchy on $K$, and since the chordal sphere is compact, hence complete [F8], it converges uniformly on $K$ to a map $H:K\to\widehat{\mathbb C}$. [F7, F8, step 6.1, step 4.2]

8.1 (Limit on the annulus) The chosen functions $h_{n_i}$ are holomorphic on the annulus $U:=\{3/4<|\zeta|<5/4\}\subset A$ and converge chordally uniformly on $U$ by step 7.1. By [F11] the limit $H:U\to\widehat{\mathbb C}$ is meromorphic or identically $\infty$; since all approximants are holomorphic, $H$ is holomorphic on $U$ or identically $\infty$. [F11, step 7.1]

8.2 (Finite case: a bound on the circle) Suppose $H$ is holomorphic on $U$. By [F9] applied to $|H|$ on the compact circle $\{|\zeta|=1\}\subset U$ there is $M$ with $|H(\zeta)|\le M$ there, and the continuous positive function $\zeta\mapsto\chi(H(\zeta),\infty)$ attains a positive minimum. So the image of the circle is a compact subset of $\mathbb C$ and there is $c_0>0$ with $\chi\bigl(H(\zeta),\infty\bigr)\ge c_0$ on it. Uniform chordal convergence (step 7.1) then gives, for all large $i$, $\chi\bigl(h_{n_i}(\zeta),H(\zeta)\bigr)<c_0/2$ on $|\zeta|=1$, so $\chi(h_{n_i}(\zeta),\infty)\ge c_0/2$ there; writing $\chi(u,\infty)=2/\sqrt{1+|u|^2}$, this means $|h_{n_i}(\zeta)|\le M'$ on $|\zeta|=1$ for a constant $M'$ independent of $i$. Since $h_{n_i}(\zeta)=h(\rho_{n_i}\zeta)$, the function $h$ satisfies $|h|\le M'$ on each circle $|z|=\rho_{n_i}$ with $i$ large. [F5, F9, step 7.1, algebra]

8.3 (Infinite case: a bound for the reciprocal) Suppose $H\equiv\infty$ on $U$. Uniform chordal convergence to $\infty$ gives, for all large $i$, $\chi\bigl(h_{n_i}(\zeta),\infty\bigr)<\sqrt2$ on $|\zeta|=1$. Since $\chi(u,\infty)=2/\sqrt{1+|u|^2}$, this is exactly $|h_{n_i}(\zeta)|>1$, that is $|1/h(\rho_{n_i}\zeta)|<1$, on the circle $|\zeta|=1$. As $h$ omits $0$, the reciprocal $1/h$ is holomorphic on the punctured disc, and $|1/h|\le1$ on each circle $|z|=\rho_{n_i}$ with $i$ large. [F5, step 7.1, algebra]

9.1 (Propagation, finite case) For each large $i$, the function $h$ is continuous on the closed annulus $\rho_{n_{i+1}}\le|z|\le\rho_{n_i}$ and holomorphic in its interior, with $|h|\le M'$ on both boundary circles by step 8.2; [F12] gives $|h|\le M'$ throughout that annulus. Consecutive retained annuli cover $\{0<|z|\le\rho_{n_{i_0}}\}$ for a suitable $i_0$, so $h$ is bounded on a punctured neighbourhood of $0$. [F12, step 8.2, algebra]

9.2 (Propagation, infinite case) Likewise, in the setting of step 8.3 the reciprocal $1/h$ is holomorphic on each such annulus and bounded by $1$ on both boundary circles, so [F12] gives $|1/h|\le1$ throughout the annulus; hence $1/h$ is bounded on a punctured neighbourhood of $0$. [F12, step 8.3, algebra]

10.1 (Meromorphic extension at the centre) If $h$ is bounded near $0$, then [F13] makes $0$ a removable singularity of $h$ and $h$ has a holomorphic extension across $0$. If instead $1/h$ is bounded near $0$, then [F13] extends $1/h$ holomorphically to a function $\varphi$ with $\varphi(0)=c$: if $c\ne0$ then $h=1/\varphi$ is holomorphic near $0$, and if $c=0$ then $\varphi$ has a zero of finite order $m\ge1$ at $0$, and the pole criterion of [F14], applied to $f:=h$ whose reciprocal $\varphi=1/h$ extends holomorphically across $0$ and vanishes there, shows that $h$ has a pole of order $m$ at $0$. In every case $h$ extends meromorphically at $0$. [F13, F14, step 9.1, step 9.2]

11.1 The local claim of step 2.1 is proved, so by step 2.1 the function $z\mapsto g(1/z)$ is meromorphic in a neighbourhood of $0$; equivalently, $g$ extends meromorphically across $w=\infty$. Every selection above was the least element of a finite or well-ordered explicitly enumerated list, so no choice principle is used. [step 2.1, step 10.1, discharge-construct] ∎
