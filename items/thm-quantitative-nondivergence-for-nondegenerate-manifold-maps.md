---
id: thm-quantitative-nondivergence-for-nondegenerate-manifold-maps
kind: theorem
title: "Quantitative nondivergence estimate for nondegenerate manifold maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-analytic-nondegenerate-point
  - def-unimodular-lattice-space
  - def-lattice-systole
  - def-very-well-multiplicatively-approximable-vector
  - thm-good-function-estimate-from-pointwise-nondegeneracy
  - thm-abstract-quantitative-nondivergence-for-lattice-maps
  - lem-primitive-subgroup-wedges-and-rank-one-extension-bounds
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - lem-centred-covering-for-positive-lower-semicontinuous-radii
  - lem-derivative-sublevel-estimate-on-cubes
  - thm-rolle
  - def-cardinal-polynomial-interpolation
  - lem-taylor-lagrange-remainder-from-mean-value
  - lem-uniform-directional-derivatives-in-orthonormal-frames
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality"
---

## Statement

Kleinbock and Margulis's quantitative nondivergence proposition states the following.

Let $f:U\subset\mathbb R^d\to\mathbb R^n$ be $C^l$, with $d,n,l\ge1$, and suppose the partial derivatives of $f$ at $x_0$ of orders $1$ through $l$ span $\mathbb R^n$. For $y\in\mathbb R^n$, put $u_y=\begin{pmatrix}1&y^T\\0&I_n\end{pmatrix}$ and for $\mathbf t\in\mathbb R_{\ge0}^n$ put $g_{\mathbf t}=\operatorname{diag}(e^{\sum_i t_i},e^{-t_1},\ldots,e^{-t_n})$. There are a ball $B\subset U$ centered at $x_0$ and constants $D,\rho>0$ such that for every $\mathbf t\in\mathbb R_{\ge0}^n$ and $0<\varepsilon\le\rho$,
$$\bigl|\{x\in B:\delta_\infty(g_{\mathbf t}u_{f(x)}\mathbb Z^{n+1})<\varepsilon\}\bigr|\le D(\varepsilon/\rho)^{1/(dl)}|B|,$$
where bars denote $d$-dimensional Lebesgue measure.

## Statement references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.


## Choice-free Euclidean scope

The original unqualified conclusion is proved below. The general conditional measure and arbitrary-poset suppliers are not upgraded: their actual uses are replaced by explicit finite-dimensional constructions, open-sublevel integration and the canonically enumerated primitive-subgroup case.

## Facts & Assumptions

**Given:** $f,d,n,l,x_0$ and the displayed diagonal action. Choose the final ball small enough that its $3^{n+1}$ enlargement lies in the common neighborhood constructed below.

[F1] The positive-order derivatives span $\mathbb R^n$. [[def-analytic-nondegenerate-point]]

[F2] The systole is the shortest nonzero vector in the specified norm. [[def-lattice-systole]]

[F3] The finite-jet good-function calculation is given in [[thm-good-function-estimate-from-pointwise-nondegeneracy]]. Its actual integration use is reconstructed in steps1.4–1.5; its conditional measure premise is not assumed.

[F4] The primitive-subgroup marked-chain calculation and its explicit constant are in [[thm-abstract-quantitative-nondivergence-for-lattice-maps]]. Steps1.6–1.7 reconstruct the used specialization, without its general conditional measure premise.

[F5] Integral primitive basis wedges compute covolumes, and rank-one primitive extension has the stated exterior norm bound. [[lem-primitive-subgroup-wedges-and-rank-one-extension-bounds]]

[F6] Continuous functions attain extrema on nonempty compact metric spaces, without choice. [[thm-extreme-value-metric]]

[F7] The prescribed-ball finite centred cover with overlap $N_d=4\lceil4\sqrt d\rceil^d+1$ has uniquely specified rational-box/lexicographic choices. [[lem-centred-covering-for-positive-lower-semicontinuous-radii]]

[F8] Rolle's theorem and finite cardinal interpolation give the one-dimensional calculation. [[thm-rolle]] [[def-cardinal-polynomial-interpolation]]

[F9] Compact orthogonal-frame maximization gives the uniform directional derivative bound. [[lem-uniform-directional-derivatives-in-orthonormal-frames]]

[F10] Closed bounded Euclidean sets are compact in ZF. [[thm-heine-borel-rn]]

[F11] The degree-$(j-1)$ Taylor remainder is bounded by $\sup|f^{(j)}|$ times displacement to power $j$, divided by $j!$. [[lem-taylor-lagrange-remainder-from-mean-value]]

## Proof

**Proof technique:** canonical Euclidean measure constructions followed by the original exterior-coordinate argument.

1.1 Fix once and for all the usual enumeration of rational boxes and of dyadic grids, ordered first by scale and integer height and then lexicographically. In a nonempty compact subset of finite-dimensional Euclidean space, successive minimization of coordinates gives a UNIQUE lexicographically least point. Thus a compact maximizing set has a specified witness. A nonempty relatively open part of a compact set contains its intersection with a closed rational box which is nonempty and contained in that part; take the first eligible box and then its least compact point. All finite-dimensional extrema, frames and finite prescribed-ball choices used here can therefore be made by formulas, including at a countable sequence of parameter values. First eligible natural numbers and unique compact points use recursion/replacement in ZF, not Countable Choice or Dependent Choice. [F6, F7, F9, F10, construct]

1.2 We record the specific Euclidean volume facts used below. For a bounded OPEN set $O$, use all dyadic half-open cubes whose closures lie in $O$, with consistent assignment of shared faces. Their maximal dyadic ancestors inside $O$ are disjoint; the fixed grid enumeration supplies their code. The sum of their volumes defines the usual open-set volume. Finite inner unions exhaust it, and canonical slight open enlargements of the cubes, with total added volume less than any specified rational error, give outer covers with the same infimum. For a compact $F$, compactness reduces open-box outer covers to FINITE rational-box covers. Consequently $|F|$ is the infimum of the volumes of these finite unions. Given rational $e>0$, the FIRST finite rational-box union $U\supset F$ with $|U|<|F|+e$ is a specified open neighborhood, and $|U\setminus F|<e$. Finite box additivity proves this last difference identity, by inner grid approximations of the open complement. These constructions also prove countable subadditivity for a UNIFORMLY CODED sequence of open sets: a compact finite inner union inside their union has a finite subcover, so its volume is at most the sum of their volumes; take the supremum of the finite inner unions. No family of unspecified outer covers is selected. These are precisely the open/compact Lebesgue volumes and their basic finite-additivity properties, not a general regularity assertion for arbitrary measurable sets. [F10, step 1.1, construct, algebra]

1.3 Let $Q$ be a fixed compact Euclidean box or closed ball and let $(F_i)_{i\ge1}$ be a SPECIFIED sequence of compact subsets of $Q$. Put $E=Q\setminus\bigcup_i F_i$. For rational $e>0$ use step1.2 to choose, by its first-cover rule, open $U_i\supset F_i$ with $|U_i\setminus F_i|<e2^{-i}$. Then $K=Q\setminus\bigcup_i U_i$ is compact and contained in $E$, while
$$E\setminus K\subseteq\bigcup_i(U_i\setminus F_i),\qquad |E\setminus K|^*\le e.$$
The sets in the latter union are OPEN with specified codes, so the bound uses exactly the coded-open subadditivity of step1.2. Thus $|E|^*=\sup_{K\subseteq E,\ K\ {
m compact}}|K|$. Such a coded $G_\delta$ set is Lebesgue measurable as well: open sets have the box-cover splitting property, and iterating complements and this specified sequence of unions preserves that property, with the same geometric error budget. On an open ball first restrict to the canonical concentric closed balls of radii $(1-2^{-m})r$; their missing shell volumes tend to zero by the ball-volume formula. The same compact-approximation conclusion follows there. This proves ONLY the coded-$G_\delta$ regularity needed for marking failures. [step 1.1, step 1.2, construct, algebra]

1.4 The only fibre integration needed is for an OPEN strict sublevel $O=\{(t,y)\in I\times Q':|F(t,y)|<a\}$ of a continuous function on a compact box. Set
$$h_m(t,y)=\min\{1,m\,\operatorname{dist}((t,y),(I\times Q')\setminus O)\},$$
with $h_m=1$ if the relative complement is empty. These are continuous, increase to $1_O$, and have finite Riemann integrals. Finite rectangular Darboux sums give equality of the full and iterated Riemann integrals for each $h_m$. The limits of these integrals equal the open volumes from step1.2: on any compact finite inner box union in $O$, the distance to the complement has a positive minimum, so $h_m=1$ there eventually, while $0\le h_m\le1_O$. The same argument holds on every slice. The slice integrals of $h_m$ are continuous functions of $t$ and increase to the slice volume. For such a specified increasing sequence, equality of the integral of its supremum with the supremum of its integrals follows from the grid definition: on each compact subset of the open set where the supremum exceeds a fixed rational threshold, finitely many of those increasing open threshold sets cover it, hence ONE stage already covers it. Rational finite-layer sums then give the integral identity by taking suprema. This proves the required open-sublevel Fubini identity without invoking general measurable-space Fubini or monotone convergence under choice. Open boxes are handled by canonical concentric compact subboxes. [F6, F10, step 1.2, construct, algebra]

1.5 Here is the derivative sublevel calculation, with no general Fubini premise. On a one-dimensional interval of length $b$ put $s=\sup|F|$ and $R=A_1/A_2$. For $j=1$, monotonicity bounds the sublevel length by $2\varepsilon/A_2$. If $\varepsilon<s/2$ and the sublevel is nonempty, the derivative upper bound gives $s<2A_1b$; otherwise the trivial bound suffices. Hence $K_1(R)=\max(2,4R)$ works. For $j\ge2$, Rolle's theorem [F8] gives at most $2j+1$ sublevel components. If $r$ is their largest length, interpolation at $j+1$ equally spaced nodes of a compact subinterval of length $r'<r$ gives $A_2\le\varepsilon(2j/r')^j$, hence $r\le2j(\varepsilon/A_2)^{1/j}$. If $s\le2A_1b^j/j!$, this gives $r/b\le2j(2R/j!)^{1/j}(\varepsilon/s)^{1/j}$. Otherwise let $P$ be the degree-$(j-1)$ Taylor polynomial at the left endpoint of that compact subinterval. Put $H=1+R(2j)^j/j!$. Its modulus on the subinterval is at most $H\varepsilon$ by the preceding bound and [F11]. Interpolation at $j$ equally spaced nodes gives $\sup_I|P|\le H\varepsilon(2jb/r')^{j-1}$, while its error on $I$ is less than $s/2$. Letting $r'\uparrow r$ yields $r/b\le2j(2H)^{1/(j-1)}(\varepsilon/s)^{1/j}$ when $\varepsilon<s$; the other case is trivial. Multiplying by $2j+1$ gives EXACTLY
$$K_j(R)=(2j+1)\max\{1,2j(2R/j!)^{1/j},2j(2H)^{1/(j-1)}\}.$$
Approximating compact component intervals are the first eligible rational intervals, so even these approximation parameters are specified.
For the dimension induction write $Q=I\times Q'$ and let $\sigma$ be its bad-volume fraction and $g(t)=\sup_y|F(t,y)|$. A least compact maximizing point gives a slice with full supremum $s$; the set $\{g<a\}$ lies in that slice's sublevel set, so its fraction is at most $K_j(R)(a/s)^{1/j}$. For $0<\lambda<\sigma$, use the OPEN set $E_\lambda$ where the fibre bad fraction exceeds $\lambda$; it is open by the cutoff formula in step1.4. That step gives $|E_\lambda|/b\ge\sigma-\lambda$. Induction bounds $g(t)$ there by $[((d-1)K_j)/\lambda]^{(d-1)j}\varepsilon$. Apply the slice bound at a slightly larger threshold and let it decrease. With $\lambda=(d-1)\sigma/d$ one obtains $\sigma^d\le d^dK_j^d(\varepsilon/s)^{1/j}$, giving the original $dK_j(\varepsilon/s)^{1/(dj)}$. Canonical nested compact cubes handle open cubes.
Finally the injective finite jet on the coefficient unit sphere has a positive minimum maximum-coordinate modulus $a$. For a positive witnessing order $j$, [F9] gives pure derivatives at least $b_{d,j}a$ in its canonical maximizing frame. Put $b=\min(1,b_{d,1},\ldots,b_{d,l})$. A first dyadic neighborhood makes all finite coordinate-derivative changes small enough that the corresponding pure derivatives stay above $ba/2$, while all needed derivatives are bounded by one $M\ge1$. The order-zero branch has $|F|\ge a/2$ and contributes $(2M/a)^{1/(dl)}$. Apply the cube bound just proved to the positive-order branches and convert cube volume to ball volume; the maximum of the finitely many constants $(2^d/v_d)dK_j(2M/(ba))$, the order-zero constant and1 gives the SAME $(C,1/(dl))$ conclusion as the finite-jet calculation. Write $W=B(x_0,r)$ and take $V=B(x_0,r/(2\sqrt d))$: the circumscribed cube of any ball $B(y,t)\subset V$ in any orthogonal frame lies in $W$, since $|y-x_0|+\sqrt d\,t\le\sqrt d(|y-x_0|+t)\le r/2$. For ratios at most1, $j\le l$ permits weakening the exponent $1/(dj)$ to $1/(dl)$; for larger ratios use the trivial volume bound. The coefficient-zero case is the usual zero-supremum convention. All parameter choices are finite, first dyadic integers, or unique compact extrema. [F1, F6, F8, F9, F10, F11, step 1.1, step 1.4, algebra]

1.6 The primitive-subgroup poset of $\mathbb Z^k$ has a specified enumeration: enumerate finite integer matrices by size, maximum entry modulus and lexicographic order, take their generated subgroups when primitive, and retain the first representative of each subgroup. Finite integer row reduction tests these predicates; in any event first indices uniquely specify the same set. Its finite chains of length at most $k$ are therefore a specified sequence. For a chain $\Sigma$, the marking locus is CLOSED relative to the enlarged ball: it is the intersection of its finitely many $\eta\le\psi_s\le\rho$ inequalities and the enumerated closed inequalities $\psi_t\ge\rho$ for all comparable indices outside $\Sigma$. The empty chain is included. Hence the full marked set is an explicitly coded countable union of closed sets and its complement in $B$ is the coded $G_\delta$ of step1.3. No reduction from an ARBITRARY poset by enumerating a countable union of finite fibres is used. [F5, step 1.1, step 1.3, construct, algebra]

1.7 Apply the marked-chain induction in [F4] directly to this enumerated poset. For each active $x$, its finitely many active indices have capped radii $r_s(x)=\min(2r_0,\operatorname{dist}(x,\{\psi_s>\rho\}))$; use the maximum and the LEAST enumerated maximizing index. The radius is positive lower semicontinuous. Its ball has every required lower supremum at least $\rho$, with equality for the chosen index, by the original capped-radius argument. Removing that index reduces chain length by one. Adjoining it to a marking chain bounds the bad set in its ball by
$$kC(3^dN_d)^{k-1}(\eta/\rho)^\alpha|B_x|.$$
For each compact subset of the bad set, [F7] gives the finite prescribed-ball cover with overlap $N_d$ inside $3B$. Its total volume is at most $3^dN_d|B|$. Summing the finite local bounds and using step1.3, rather than general compact inner regularity, gives $kC(3^dN_d)^k(\eta/\rho)^\alpha|B|$. The base case, $\eta\ge\rho$ case, empty chains and rank-zero predecessor are unchanged. The primitive exterior-extension argument in [F4] then excludes vectors with $\|hv\|_\infty<\eta/\sqrt k$ at marked points. With $\eta=\sqrt k\varepsilon$ and the original trivial bound for $\rho/\sqrt k\le\varepsilon\le\rho$, it gives EXACTLY
$$D_{d,k}(C,\alpha)=k^{\alpha/2}\max\{1,kC(3^dN_d)^k\}.$$
All selections in the induction are now finite or uniquely specified. This proves the used primitive-subgroup specialization of [F4] in ZF, without accepting its broader conditional arbitrary-poset/general-measure interfaces. [F2, F4, F5, F7, step 1.3, step 1.6, algebra]

2.1 By [F1], no nonzero vector $c=(c_0,c_1,\ldots,c_n)$ makes $c_0+\sum_i c_if_i$ vanish identically on a neighborhood of $x_0$: differentiating orders $1$ through $l$ would force $(c_1,\ldots,c_n)=0$, then $c_0=0$. On a sufficiently small closed ball, the supremum norm is Lipschitz in the finite coefficient vector because all $f_i$ are bounded on that ball. Compactness of the unit coefficient sphere and F6 therefore give $\rho_0>0$ such that $\sup_B|c_0+\sum_i c_if_i|\ge\rho_0\|c\|$ for every $c$. [given, F1, F6, algebra]

3.1 Fix $\mathbf t\in\mathbb R_{\ge0}^n$ and a primitive subgroup $\Gamma\subset\mathbb Z^{n+1}$ of rank $r\ge1$. Choose an integral basis wedge $w=\sum_{|I|=r}w_Ie_I\ne0$. Since $u_{f(x)}e_0=e_0$ and $u_{f(x)}e_i=e_i+f_i(x)e_0$, each coordinate of $g_{\mathbf t}u_{f(x)}w$ is a positive diagonal factor times an affine combination of $1,f_1,\ldots,f_n$. If some nonzero integer $w_J$ has $0\in J$, the coordinate indexed by $J$ has a constant coefficient $w_J$. If $0\notin J$, choose $i\in J$ and set $I=(J\setminus\{i\})\cup\{0\}$; the coordinate indexed by $I$ has coefficient $\pm w_J$ on $f_i$. In either case the coefficient norm is at least $1$, and the diagonal factor for a coordinate containing $0$ is $e^{\sum_{j\notin I}t_j}\ge1$. Thus one coordinate has supremum at least $\rho_0$. [step 2.1, F1, F5, algebra]

4.1 By F3, every scaled affine coordinate is uniformly $(C,\alpha)$-good on the enlarged ball, where $\alpha=1/(dl)$; scalar multiplication simply rescales the threshold. On any contained subball $A$, put $s_A=\sup_A\psi_\Gamma$ and let $N=\binom{n+1}r\le2^{n+1}$ be the number of exterior coordinates. A coordinate with largest supremum has supremum at least $s_A/\sqrt N$. The set $\{\psi_\Gamma<\varepsilon\}$ is contained in that coordinate's $\varepsilon$-sublevel, so its relative measure is at most $C N^{\alpha/2}(\varepsilon/s_A)^\alpha$. Thus all ranks, all primitive subgroups and all nonnegative diagonal parameters share the good constant $C'=C2^{(n+1)\alpha/2}$. Step 3.1 gives $\sup_B\psi_\Gamma\ge\rho_0$. Put $\rho=\min(\rho_0,1/(n+1))$. [step 1.5, step 3.1, F3, F5, algebra]

5.1 Apply [F4] to $h(x)=g_{\mathbf t}u_{f(x)}$ with $k=n+1$ and $\alpha=1/(dl)$. Its hypotheses hold by steps 3.1–4.1 on the required enlarged ball, with the uniform constants $C',\alpha,\rho$. It gives the displayed sup-norm estimate directly, with $D=D_{d,n+1}(C',\alpha)$ independent of $\mathbf t$. [step 1.7, step 3.1, step 4.1, F2, F4, algebra] ∎

## Remarks

The original unqualified Statement and constants are retained. General conditional measure and arbitrary-poset suppliers retain their scopes; only the explicit coded Euclidean uses are reconstructed here.
