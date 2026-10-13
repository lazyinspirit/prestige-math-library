---
id: thm-em-spherical-multipole-basis
kind: theorem
title: Exterior spherical multipole expansion and the ball boundary series
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, lem-em-coulomb-dipole-remainder, lem-em-convergent-legendre-kernel, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-em-spherical-harmonic-basis-and-addition, lem-em-ball-poisson-series-boundary-convergence, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, thm-interior-derivative-estimates-for-harmonic-functions, thm-newton-leibniz-with-interior-derivative, prop-order-and-scalar-rules-for-the-nonnegative-integral]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-em-coulomb-dipole-remainder: mathematical-premise
  lem-em-convergent-legendre-kernel: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  lem-em-spherical-harmonic-basis-and-addition: mathematical-premise
  lem-em-ball-poisson-series-boundary-convergence: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-interior-derivative-estimates-for-harmonic-functions: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §14.30 Spherical and Spheroidal Harmonics"
      url: "https://dlmf.nist.gov/14.30"
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd ed. (Springer GTM 137), author-hosted full text, Chapter 5 (harmonic polynomials, spherical harmonics and zonal harmonics) and Chapter 1 (Poisson kernel for the ball)"
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $a>0$ and let $\rho\in L^1(\mathbb R^3;\mathbb R)$ vanish outside $\overline B_a(0)$. Use the complete orthonormal basis $\{Y_{lm}\}$ of real spherical harmonics on $S^2$ with unnormalised surface measure $d\sigma$ of total mass $4\pi$ and the addition theorem of [[lem-em-spherical-harmonic-basis-and-addition]], and the Legendre generating kernel and its compact remainder bound from [[lem-em-convergent-legendre-kernel]]. Write $x=rn$, $r=|x|$, $n\in S^2$. Then:

(a) **Exterior multipole expansion.** For every $x$ with $|x|>a$, $$\int_{\mathbb R^3}\frac{\rho(y)}{|x-y|}\,dy=\sum_{l=0}^\infty\sum_{m=1}^{2l+1}\frac{4\pi}{2l+1}\frac{Y_{lm}(n)}{r^{l+1}}\int_{\mathbb R^3}|y|^lY_{lm}(y/|y|)\rho(y)\,dy,$$ the series converging absolutely and uniformly on $\{|x|\ge r_0\}$ for every $r_0>a$, with tail after degree $N$ bounded by $\|\rho\|_1\,a^{N+1}/(r_0^{N+2}(1-a/r_0))$; for every fixed $r>a$, the degree-$l$ term is the $L^2(S^2,d\sigma)$ angular projection of $n\mapsto F_r(n):=\int_{\mathbb R^3}|rn-y|^{-1}\rho(y)\,dy$ onto the degree-$l$ harmonics. This function is continuous and bounded by $\|\rho\|_1/(r-a)$, so it is in $L^2(S^2)$; no sphere trace or $L^2$ property of the volume density $\rho$ is asserted. The degree-zero and degree-one terms are the Coulomb and dipole terms with the explicit remainder bound of [[lem-em-coulomb-dipole-remainder]] ($Q=\int\rho$, $p=\int y\rho(y)\,dy$, $|R(x)|\le16a^2\|\rho\|_1/|x|^3$ for $|x|\ge2a$).

(b) **Termwise differentiation.** On every compact $K$ with $\inf_K|x|>a$ the series may be differentiated termwise to every order, the differentiated series converging uniformly on $K$; in particular the potential is $C^\infty$ on $\{|x|>a\}$.

(c) **Ball boundary branch.** For $f\in L^2(S^2)$ with coefficients $f_{lm}$ the series $u(rn)=\sum_{l,m}r^lf_{lm}Y_{lm}(n)$ converges in $L^2(S^2)$ as $r\uparrow1$ and, with all derivatives, uniformly on each closed ball of radius $<1$, is harmonic on the open unit ball, and is the unique harmonic function there with a finite $\sup_{r<1}\|u(r\cdot)\|_2$ and $L^2$ boundary limit $f$; for continuous $f$ it equals the Poisson integral $(1-r^2)/(4\pi|rn-n'|^3)$ of $f$ and extends continuously to the closed ball with boundary values $f$.

This is a statement about the Newtonian integral of a compactly supported $L^1$ density and about harmonic functions; no physical charge distribution or electrostatic interpretation is asserted. In every coefficient integral the factor $|y|^lY_{lm}(y/|y|)$ is defined at $y=0$ by its homogeneous polynomial extension: zero for $l\ge1$ and the constant degree-zero harmonic for $l=0$. This is a finite assignment, and changing its value at that null singleton changes no integral.

## Facts & Assumptions

**Given:** Countable Choice; $a>0$; a density $\rho\in L^1(\mathbb R^3;\mathbb R)$ vanishing outside $\overline B_a(0)$; the complete orthonormal basis $\{Y_{lm}\}$ of real spherical harmonics with unnormalised surface measure $d\sigma$ of total mass $4\pi$; and the notation $x=rn$, $r=|x|$, $n\in S^2$, with the Euclidean inner product of [[def-euclidean-inner-product]].

[L1] Legendre kernel and its consequences: $P_l(z)=\pi^{-1}\int_0^\pi[z+i\sqrt{1-z^2}\cos\theta]^l\,d\theta$ is a real polynomial with $|P_l(z)|\le1$ on $[-1,1]$, $P_0=1$, $P_1(z)=z$; $(1-2qz+q^2)^{-1/2}=\sum_{l\ge0}q^lP_l(z)$ for $|q|<1$; for $r>|y|$, $|x-y|^{-1}=\sum_{l=0}^{\infty}|y|^l|x|^{-l-1}P_l(n\cdot y/|y|)$ with the remainder after degree $N$ bounded by $|y|^{N+1}|x|^{-N-2}(1-|y|/|x|)^{-1}$ uniformly on $|y|\le a<r$; the coefficient terms $c_l(x,y):=|y|^l|x|^{-l-1}P_l(x\cdot y/(|x||y|))$, extended at $y=0$ by $c_0(x,0)=|x|^{-1}$ and $c_l(x,0)=0$ for $l\ge1$, are smooth and harmonic on $\{|x|>|y|\}$, and on an observation compact set disjoint from $\overline B_a(0)$ every fixed spatial derivative series converges uniformly ([[lem-em-convergent-legendre-kernel]]).

[L2] Spherical harmonics and addition: the real homogeneous harmonic polynomials of degree $l$ on $\mathbb R^3$ (every occurring monomial has total degree $l$, the zero polynomial is included, and $\Delta H:=\sum_{k<3}\partial_k^2H=0$) restricted to $S^2$ form a $(2l+1)$-dimensional space, distinct degrees are orthogonal for $d\sigma$, the union admits the complete orthonormal basis $\{Y_{lm}\}$, and $\sum_{m=1}^{2l+1}Y_{lm}(n)Y_{lm}(n')=\frac{2l+1}{4\pi}P_l(n\cdot n')$; in particular $\sum_m|Y_{lm}(n)|^2=(2l+1)/(4\pi)$ ([[lem-em-spherical-harmonic-basis-and-addition]]).

[L3] The ball boundary branch: for $f\in L^2(S^2)$ with coefficients $f_{lm}$, the series $u(rn)=\sum_{l,m}r^lf_{lm}Y_{lm}(n)$, $0\le r<1$, and all its derivatives converge uniformly on every closed smaller ball, $u$ is harmonic, $u(r\cdot)\to f$ in $L^2(S^2)$ as $r\uparrow1$, $u$ is the unique harmonic function with $\sup_{r<1}\|u(r\cdot)\|_2<\infty$ and $L^2$ boundary limit $f$, and for continuous $f$ it equals $\int_{S^2}\frac{1-r^2}{4\pi|rn-n'|^3}f(n')\,d\sigma(n')$ with continuous extension to the closed ball ([[lem-em-ball-poisson-series-boundary-convergence]]).

[L4] Coulomb–dipole splitting: with $Q=\int\rho$ and $p=\int y\rho(y)\,dy$, for $r\ge2a$, $\int_{\mathbb R^3}\frac{\rho(y)}{|x-y|}dy=\frac Qr+\frac{p\cdot x}{r^3}+R(x)$ with $|R(x)|\le16a^2\|\rho\|_1/r^3$ ([[lem-em-coulomb-dipole-remainder]]).

[L5] $L^2$ Cauchy–Schwarz: $\int|fg|\,d\mu\le\|f\|_2\|g\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[L6] Monotonicity and scalar rules for nonnegative integrals: $f\le g$ pointwise implies $\int f\le\int g$, and $\int cf=c\int f$ for $c\ge0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L7] Orthonormal families and orthonormal bases: an orthonormal family has $\langle e_i,e_j\rangle=\delta_{ij}$, and a complete orthonormal system has closed linear span the whole Hilbert space ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[L8] Interior derivative estimates for harmonic functions: on a ball of radius $R$ contained in the harmonicity domain, $|D^\alpha v(x)|\le C_\alpha R^{-3-|\alpha|}\int_{B_R}|v|$, so derivatives on a compact set are controlled by the supremum on a slightly larger compact set ([[thm-interior-derivative-estimates-for-harmonic-functions]]).

[L9] Newton–Leibniz with interior derivative: a continuous function with continuous coordinate derivative $g$ on an interval differs from a primitive of $g$ by a constant; applied along coordinate segments this identifies uniform derivative limits with derivatives of the limit ([[thm-newton-leibniz-with-interior-derivative]]).

[L10] Smoothness: $C^k$ maps have continuous partial derivatives through order $k$, and $C^\infty$ means $C^k$ for every $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

**Choice accounting.** Countable Choice is assumed in the Statement and is carried by the spherical-harmonic and ball-series suppliers [L2]–[L3]; the measure-theoretic integrations and the differentiation argument introduce no further choice.

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, $a>0$, $\rho\in L^1$ supported in $\overline B_a(0)$, the orthonormal spherical-harmonic basis and the Legendre kernel.

1.1 **Zonal expansion with uniform tail.** Fix $x=rn$ with $r>a$ and let $N\ge0$. By [L1] the kernel expansion $|x-y|^{-1}=\sum_{l\ge0}|y|^l r^{-l-1}P_l(n\cdot y/|y|)$ converges absolutely and uniformly for $y\in\overline B_a(0)$ (the term at $y=0$ being read by the stated homogeneous extension), and its remainder after degree $N$ is bounded by $|y|^{N+1}r^{-N-2}(1-|y|/r)^{-1}$; multiplying by the $L^1$ density $\rho$ and integrating, the uniform bound gives $\bigl|\int\rho(y)/|x-y|\,dy-\sum_{l\le N}r^{-l-1}\int|y|^lP_l(n\cdot y/|y|)\rho(y)\,dy\bigr|\le\|\rho\|_1 a^{N+1}r^{-N-2}(1-a/r)^{-1}$, so $F(x):=\int\rho(y)/|x-y|\,dy=\sum_{l=0}^\infty r^{-l-1}\int|y|^lP_l(n\cdot y/|y|)\rho(y)\,dy$, the zonal series converging absolutely and, for every $r_0>a$, uniformly on $\{|x|\ge r_0\}$ with the stated tail bound $\|\rho\|_1a^{N+1}/(r_0^{N+2}(1-a/r_0))$. [L1]

1.2 **Ball boundary branch.** Part (c) of the Statement is exactly [L3]: the series $u(rn)=\sum_{l,m}r^lf_{lm}Y_{lm}(n)$ and all its derivatives converge uniformly on each closed smaller ball, $u$ is harmonic, $u(r\cdot)\to f$ in $L^2(S^2)$, uniqueness holds in the class with finite radial $L^2$ supremum, and for continuous $f$ the Poisson representation and the continuous extension to the closed ball hold. [L3]

2.1 **Spherical form, absolute convergence and the degree tail.** For $y\ne0$ the addition theorem [L2] gives $P_l(n\cdot y/|y|)=\frac{4\pi}{2l+1}\sum_{m=1}^{2l+1}Y_{lm}(n)Y_{lm}(y/|y|)$. For each $l$ put $q_{lm}:=\int|y|^lY_{lm}(y/|y|)\rho(y)\,dy$, a finite integral because $|Y_{lm}|$ is bounded on $S^2$ and $\rho\in L^1$; then by [L2] and [L5], and by the monotonicity rule [L6] applied to the absolute values, $$\sum_m|Y_{lm}(n)q_{lm}|\le\int|y|^l|\rho(y)|\sum_m|Y_{lm}(n)Y_{lm}(y/|y|)|\,dy\le\int |y|^l|\rho(y)|\,\frac{2l+1}{4\pi}\,dy\le\frac{2l+1}{4\pi}a^l\|\rho\|_1,$$ so the degree-$l$ contribution of the spherical series is bounded in modulus by $(a/r)^l\|\rho\|_1/r$ and the series $\sum_l\sum_m\frac{4\pi}{2l+1}Y_{lm}(n)r^{-l-1}q_{lm}$ converges absolutely, with degree tail after $N$ bounded by $\|\rho\|_1r_0^{-1}\sum_{l>N}(a/r_0)^l=\|\rho\|_1a^{N+1}/(r_0^{N+2}(1-a/r_0))$. Substituting the addition theorem degree by degree into step 1.1 gives, for every $N$, the equality of the truncated zonal and spherical sums, and both truncations converge to the same limit by step 1.1 and this bound; this proves the expansion of part (a) and its uniform convergence on $\{|x|\ge r_0\}$. [L1, L2, L5, L6, step 1.1]

3.1 **The degree-$l$ term is the angular projection.** Fix $r>a$ and put $F_r(n):=\int|rn-y|^{-1}\rho(y)\,dy$. Then $|F_r(n)|\le\|\rho\|_1/(r-a)$ for every $n$, and $F_r$ is continuous: for $n,n'\in S^2$ and $|y|\le a$, the reverse triangle inequality gives $\big||rn-y|-|rn'-y|\big|\le r|n-n'|$, while both denominators are at least $r-a$; hence $|F_r(n)-F_r(n')|\le r\|\rho\|_1|n-n'|/(r-a)^2$, proving continuity directly. Hence $F_r\in L^2(S^2,d\sigma)$ with $\|F_r\|_2^2\le4\pi\|\rho\|_1^2/(r-a)^2$. By step 2.1 the spherical series for $F_r$ converges uniformly on the compact sphere $S^2$, so the pairing with each basis element may be taken termwise and $$\langle F_r,Y_{km}\rangle=\sum_{l,m'}\frac{4\pi}{2l+1}r^{-l-1}q_{lm'}\langle Y_{lm'},Y_{km}\rangle=\frac{4\pi}{2k+1}r^{-k-1}q_{km}$$ by the orthonormality of the basis [L7]; this is precisely the stated $L^2(S^2,d\sigma)$ angular projection. [L2, L7, step 2.1]

3.2 **Coulomb and dipole identification.** Summing the degree-$l$ spherical term over $m$ and using the addition theorem in reverse gives $r^{-l-1}\sum_m\frac{4\pi}{2l+1}Y_{lm}(n)q_{lm}=r^{-l-1}\int|y|^lP_l(n\cdot y/|y|)\rho(y)\,dy$, the zonal degree term computed in step 1.1, and it is the degree-$l$ term of the spherical series of step 2.1. Since $P_0=1$ and $P_1(z)=z$ [L1], the degrees $l=0$ and $l=1$ contribute $r^{-1}\int\rho=Q/r$ and $r^{-2}\int(n\cdot y)\rho(y)\,dy=p\cdot x/r^3$; the remaining tail is $F(x)-Q/r-p\cdot x/r^3$, and for $r\ge2a$ the explicit remainder bound $|R(x)|\le16a^2\|\rho\|_1/r^3$ of [L4] applies to it, so the degree-zero and degree-one terms are the Coulomb and dipole terms of the Statement. [L1, L2, L4, step 2.1]

3.3 **Termwise differentiation.** Each degree term is $U_l(x):=r^{-l-1}\int|y|^lP_l(n\cdot y/|y|)\rho(y)\,dy=\int\rho(y)c_l(x,y)\,dy$, with the full weighted coefficient $c_l$ of [L1]. For fixed $l$, its polynomial extension in $y$ is smooth jointly for $x\ne0$, including $y=0$, and harmonic in $x$ by [L1]. On a compact observation neighbourhood times $\overline B_a(0)$ its spatial derivatives are uniformly continuous and bounded. By [L9] along coordinate segments, for each such derivative $D^\beta c_l$ its difference quotient converges uniformly in $y$ to $\partial_iD^\beta c_l$; integrating the error bounds it by $\|\rho\|_1$ times that uniform error. Induction therefore gives $D^\beta U_l=\int\rho D^\beta c_l$, continuous by the same uniform bounds, and $\Delta U_l=\int\rho\Delta_xc_l=0$. For a nonempty compact $K$ in $\{|x|>a\}$ choose nested compact neighbourhoods $K\subset\operatorname{int}K_1\subset K_1\subset\operatorname{int}K_2\subset\{|x|>a\}$ and a fixed $\delta>0$ such that $\overline B_\delta(x)\subset K_2$ for every $x\in K_1$. The harmonic partial sums $S_N=\sum_{l\le N}U_l$ converge uniformly on $K_2$ by step 2.1. Hence [L8] applied to $S_M-S_N$ gives $\sup_{K_1}|D^\alpha(S_M-S_N)|\le C_\alpha\delta^{-3-|\alpha|}|B_\delta|\sup_{K_2}|S_M-S_N|\to0$ for every multi-index $\alpha$. The derivative limits are uniform and continuous on $K_1$. Apply [L9] to $D^\beta S_N$ on short coordinate segments in $\operatorname{int}K_1$ and pass to the uniform limits in the integral identity; this identifies the limit of $\partial_iD^\beta S_N$ with the corresponding derivative of the limit of $D^\beta S_N$. Induction proves termwise differentiation to every order on $K$, with $F$ smooth in the sense of [L10]. The empty compact case is vacuous. [L1, L8, L9, L10, step 2.1]

4.1 **Assembly.** Part (a) is steps 1.1, 2.1, 3.1 and 3.2 (expansion, uniform tail, angular projection and Coulomb–dipole identification); part (b) is step 3.3; part (c) is step 1.2; the statement about the value at $y=0$ is the finite-assignment convention recorded in the Statement, which leaves every integral unchanged because a singleton is null. This proves all three parts. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3] ∎
