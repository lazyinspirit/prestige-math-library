---
id: thm-qftx-scalar-eg-induction
kind: theorem
title: Scalar Epstein–Glaser induction at finite perturbative order
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 10
deps:
  - def-qftx-off-shell-local-polynomial-functionals
  - lem-qftx-local-polynomial-functionals-are-microcausal
  - lem-qftx-balanced-local-functional-representatives
  - def-qftx-local-time-ordered-system
  - lem-qftx-finite-graph-scaling-degree
  - def-qftx-wavefront-hadamard
  - def-qftx-local-wavefront-set
  - def-qftx-polynomial-microcausal-functionals
  - thm-qftx-wavefront-product
  - lem-qftx-microcausal-star-product
  - thm-qft-finite-scaling-degree-extension
  - prop-qft-local-counterterm-jet-classification
  - thm-distributions-supported-at-one-point
  - def-qft-distribution-scaling-degree
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-qftx-finite-lorentz-cocycle-splitting
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_roles:
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  lem-qftx-local-polynomial-functionals-are-microcausal: mathematical-premise
  lem-qftx-balanced-local-functional-representatives: mathematical-premise
  def-qftx-local-time-ordered-system: mathematical-premise
  lem-qftx-finite-graph-scaling-degree: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  lem-qftx-microcausal-star-product: mathematical-premise
  thm-qft-finite-scaling-degree-extension: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  thm-distributions-supported-at-one-point: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-qftx-finite-lorentz-cocycle-splitting: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Sections 4–7, especially causal factorization, the induction on time-ordered products, Theorem 7.2, graph expansion (81)–(89), and finite local renormalization; the derivative-kernel estimates and covariance/unitarity normalization are proved here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Sections 2.1, 3.2, 4, 5.1–5.2 and 7, printed pp. 7–9, 16–25 and 33–34; causal cover, overlap gluing, scaling-degree extension and graph scaling, with finite Lorentz normalization supplied by the local cocycle lemma.
    - title: Michael Duetsch and Klaus Fredenhagen, Causal perturbation theory in terms of retarded products, and a proof of the Action Ward Identity
      url: https://arxiv.org/pdf/hep-th/0403213
      locator: Section 3.2, printed pp. 24–25, balanced-field decomposition and derivative-compatible extension; the local balanced-representative supplier provides the complete argument.
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix any admissible flat scalar free datum and local scalar polynomial class as defined by the local time-ordered product contract. Then there exists a sequence of symmetric multilinear maps $T_n$ satisfying that contract at every finite perturbative order. At order $n$, each numerical graph distribution has a finite upper scaling bound in the $4(n-1)$ relative coordinates. At the analytic extension stage, independent balanced coefficients admit extensions preserving their actual scaling degree; total-derivative labels and the final local normalizations obey the engineering scaling upper bounds prescribed by the contract. For a fixed punctured coefficient with bound $B_\Gamma$, the extension ambiguity is contained in the finite span of derivatives of the diagonal delta distribution of order at most $\lfloor B_\Gamma-4(n-1)\rfloor$ when $B_\Gamma\ge4(n-1)$, and is zero when $B_\Gamma<4(n-1)$, subject also to the linearity and derivative identities. For the analytic degree-preserving extension family of an independent balanced coefficient, one can use its actual degree in place of $B_\Gamma$. Thus the coefficients form a formal series only; no convergence in the coupling, adiabatic limit, positivity claim, or gauge/Ward identity is asserted.

## Statement references

[[def-qftx-local-time-ordered-system]]

[[lem-qftx-finite-graph-scaling-degree]]

[[thm-qft-finite-scaling-degree-extension]]

[[prop-qft-local-counterterm-jet-classification]]

## Facts & Assumptions

**Given:** The admissible scalar data, finite-jet local functionals, and causal/time-ordering conventions of the definition.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] and Countable Choice [[def-countable-choice]]. AC is used in the finite-scaling-degree extension theorem and for recursive choices; it also implies dependent choice by [[thm-choice-implies-dependent-implies-countable-choice]].

[F1] [[def-qftx-local-time-ordered-system]]: the free scalar datum fixes $W$, causal $E$, the time-ordered kernel $H_F$ with $\operatorname{sd}_0(H_F)\le2$, the $\star_W$ product, the graph convention, covariance and the formal unitarity contract.

[F2] [[def-qftx-off-shell-local-polynomial-functionals]] and [[lem-qftx-local-polynomial-functionals-are-microcausal]]: every input is a finite polynomial in a finite jet of an unconstrained smooth scalar field, and every local derivative kernel is compactly supported on the thin diagonal and is microcausal.

[F3] [[lem-qftx-microcausal-star-product]]: $\star_W$ is defined coefficientwise on the stated microcausal polynomial class by finitely many Hadamard contractions; its kernel has $W-W^{\mathsf T}=iE$ with causal support.

[F4] [[thm-qftx-wavefront-product]]: if opposite wavefront covectors are absent, the distribution product, diagonal pullback and the stated proper pushforward exist with the displayed wavefront bounds.

[F5] [[lem-test-function-cutoffs-and-euclidean-localization]]: every open cover of an open Euclidean set has a locally finite smooth partition of unity subordinate to that cover.

[F6] [[lem-qftx-finite-graph-scaling-degree]]: a vertex subgraph on $S$ is induced and retains all edges with both endpoints in $S$; its partial diagonal is $\Delta_S=\{x_i=x_j:i,j\in S\}$, of relative codimension $4(|S|-1)$. It is divergent when its relative scaling degree is at least that codimension, and a graph is primitive when it has no proper divergent vertex subgraph. After these proper partial diagonals have been resolved at lower orders, every finite graph numerical distribution has a finite upper scaling bound at the remaining total diagonal, from full-center transverse causal block products.

[F7] [[def-qft-distribution-scaling-degree]] and [[thm-qft-finite-scaling-degree-extension]]: in relative dimension $d$, a punctured distribution of finite real scaling degree $\delta$ has an extension of exactly degree $\delta$ under AC.

[F8] [[prop-qft-local-counterterm-jet-classification]]: same-degree extensions differ by a finite sum of $\partial^\alpha\delta_0$ with $|\alpha|\le\lfloor\delta-d\rfloor$ for $\delta\ge d$, and agree uniquely for $\delta<d$. The same point-support proof bounds the difference of two upper-degree-$B$ extensions by order $\lfloor B-d\rfloor$, since a nonzero point-supported sum of largest order $k$ has degree $d+k$.

[F9] [[lem-qftx-finite-lorentz-cocycle-splitting]]: every Lie-algebra $1$-cocycle of the finite-dimensional Lorentz normalization module is a coboundary.

[F10] [[thm-distributions-supported-at-one-point]]: a distribution supported at the relative origin is a finite sum of delta derivatives. A nonzero such sum has scaling degree $d+m$, where $m$ is its largest nonzero derivative order, by testing against a matching monomial times a cutoff.

[F11] [[lem-qftx-balanced-local-functional-representatives]]: every local functional has a unique finite balanced-jet representative, supported in its actual functional support; the statement specifies the proper-orthochronous Poincare action on fields and functionals and proves equivariance of the balanced decomposition. Extensions prescribed on balanced labels extend consistently to general jet labels by differentiation and integration by parts.

[F12] [[def-fixed-support-test-function-frechet-space]] gives the increasing derivative seminorms on $\mathcal D_K$; [[lem-fixed-support-test-function-spaces-are-complete]] makes it complete; [[thm-baire-category-for-complete-metric-spaces]] gives Baire under DC, supplied by [A1].

## Proof

**Proof technique:** direct induction on the number of local insertions, followed by finite local normalization.

**Given:** [A1] and [F1]–[F12].

1.1 Set $T_0=1$ and $T_1=\operatorname{id}$, as required. Use the unique balanced representative [F11] in every positive field-degree entry; a constant entry is interpreted as the corresponding scalar times the lower multilinear map, consistently with its empty functional support. Perform the extension construction below first on balanced labels. For total derivatives of those labels use the derivative identity in [F11], with derivatives acting on the full coefficient, including its remaining field jets. This guarantees that the resulting multilinear maps depend only on the actual local functionals and respect integration by parts, before any extension choices are made. Assume $T_k$ has been constructed with all contract properties for every $k<n$, where $n\ge2$. [given, F1, F11, construct]

1.2 In $\mathbb M^n$ let $\Delta_n=\{x_1=\cdots=x_n\}$. For every nonempty proper $I\subset\{1,\ldots,n\}$ define
$$C_I=\{(x_1,\ldots,x_n):x_i\notin J^-(x_j)\text{ for all }i\in I,\ j\notin I\}.$$
Each $C_I$ is open because the Minkowski causal relation is closed. To see these sets cover $\mathbb M^n\setminus\Delta_n$, choose two distinct coordinates $p,q$ in a configuration. The open cone of past-timelike covectors cannot annihilate the nonzero displacement $p-q$, so choose a past-timelike covector $\tau$ with $\tau(p)\ne\tau(q)$. Choose $s$ strictly between these values and different from the finitely many $\tau(x_j)$, and put $I=\{j:\tau(x_j)>s\}$. The hyperplane $\tau(x)=s$ is spacelike, and $\tau$ is strictly increasing on every future causal curve. Thus no $x_i$ with $i\in I$ can lie in $J^-(x_j)$ for $j\notin I$, so the configuration lies in $C_I$. [F1, construct, algebra]

1.3 Expand the finite local polynomial derivatives in the graph convention of [F1]. For each fixed $n$, finite jet order and finite polynomial degree allow only finitely many labeled multigraphs, and every edge derivative order is finite. By [F6], after the already constructed proper subgraph extensions, each numerical coefficient $t_\Gamma$ on the punctured relative space $\mathbb R^{4(n-1)}\setminus\{0\}$ has a finite upper scaling bound and scaling degree $\delta_\Gamma<+\infty$. [F1, F2, F6]

2.1 On $C_I$, define the lower-order product $T^I_n=T_{|I|}(F_I)\star_WT_{|I^c|}(F_{I^c})$. The factors are microcausal by [F2] and the inductive hypothesis, so [F3] makes the product well-defined; each contraction in its finite graph expansion uses only the pullbacks and distribution products supplied by [F4]. The graph-kernel restriction on this stratum is therefore a distribution, and no separate product at the total diagonal is taken here. [F1, F2, F3, F4, step 1.1]

3.1 If $C_I$ and $C_J$ overlap, put $A=I\cap J$, $B=I\setminus J$, $C=J\setminus I$, and $D=(I\cup J)^c$. The defining inequalities give $A$ later than or spacelike to $B$, $C$ later than or spacelike to $D$, $A$ later than or spacelike to $C$, and $B$ later than or spacelike to $D$. They also imply that every point of $B$ is spacelike to every point of $C$: neither causal ordering is possible. Lower-order causal factorization rewrites both local expressions as $T_A\star_WT_B\star_WT_C\star_WT_D$; associativity follows by indexing each finite contraction term by its three pairwise contraction counts. Since $E$ is causally supported, $W=W^{\mathsf T}$ on the spacelike-separated supports of $B,C$, so locality gives $T_B\star_WT_C=T_C\star_WT_B$. Thus the two local expressions agree on the overlap, including empty blocks interpreted as units. [F1, F3, step 1.1, step 2.1, algebra]

4.1 Apply [F5] to the open cover $\{C_I\}$ of $\mathbb M^n\setminus\Delta_n$, and use [A1] to assign each partition function to one cover member containing its support. The sum of the corresponding partition functions times $T^I_n$ is locally finite and defines a distribution $T_n^0$ on the complement of $\Delta_n$. Step 3.1 makes it independent of the partition choice locally; the cover is permutation-invariant, so a finite permutation average gives a symmetric extension on this complement. It satisfies causal factorization there by construction. [A1, F5, step 1.2, step 3.1, construct]

5.1 For each $t_\Gamma$ in relative dimension $d=4(n-1)$, proceed as follows. If $\delta_\Gamma=-\infty$, choose a compact cutoff $\chi=1$ near zero and use the no-subtraction dyadic series $T(\varphi)=t((1-\chi)\varphi)+\sum_{k\ge0}t((\chi(2^k\cdot)-\chi(2^{k+1}\cdot))\varphi)$. Fix a compact annulus $K\subset\mathbb R^d\setminus\{0\}$ and a real $\omega<d$. On the complete fixed-support test space $\mathcal D_K$, put $L_\rho(\psi)=\rho^\omega(t_\Gamma)_\rho(\psi)$. Since $\operatorname{sd}_0(t_\Gamma)=-\infty$, for every $\omega$ there is a decay exponent $\eta<\omega$, so $L_\rho(\psi)\to0$ for each fixed $\psi$. On every compact scale interval $[\epsilon,1]$ the scaled tests vary continuously in one fixed-support test space, so $\sup_{0<\rho\le1}|L_\rho(\psi)|<\infty$. The closed sets $E_N=\{\psi:\sup_\rho|L_\rho(\psi)|\le N\}$ cover $\mathcal D_K$. Completeness and Baire under DC, supplied by the already assumed AC, give $\psi_0\in\mathcal D_K$, an integer $m\ge0$, and $a>0$ with $\psi_0+\{\zeta:p_m(\zeta)<a\}\subset E_N$ for some positive integer $N$. Subtraction gives $|L_\rho(\zeta)|\le2N$ there; scaling $\zeta=a\psi/(2p_m(\psi))$ yields $|L_\rho(\psi)|\le(4N/a)p_m(\psi)$ when $p_m(\psi)>0$, while $p_m(\psi)=0$ implies $\psi=0$. Hence $|(t_\Gamma)_\rho(\psi)|\le C\rho^{-\omega}p_m(\psi)$ uniformly. This is the fixed-annulus Baire proof, with the arbitrarily negative decay exponent replacing the finite-real-degree hypothesis. Its $k$th shell is bounded by $C_\varphi2^{-k(d-\omega)}$, proving convergence and continuity. For the scaled test $\rho^{-d}\varphi(\cdot/\rho)$ only shells of radius $\lambda\le C_\varphi\rho$ occur, and their sum is $O(\rho^{-\omega})$. The same series is independent of $\omega$, so arbitrarily low $\omega$ prove degree $-\infty$; telescoping on punctured tests proves it extends $t$. Otherwise [F7] applies with its finite real degree. Choose the extension linearly on a basis of the balanced labels, and extend its total-derivative labels by [F11]. For any fixed finite jet order this uses a finite-dimensional polynomial space; compatible bases over all finite orders give a linear extension on their algebraic union. The graph and derivative bounds remain finite because total differentiation adds only its finite order. Descendant coefficients obey these engineering upper bounds, including any forced contact terms, rather than an incompatible requirement to preserve the exact degree of a vanished punctured derivative combination. The extension has degree $\delta_\Gamma$ on each freely extended balanced graph coefficient. For the independent balanced coefficients of finite real degree [F8] gives the stated finite-jet ambiguity; for degree $-\infty$, [F10] implies uniqueness because a nonzero difference supported at zero would have degree at least $d$. Lift the chosen relative extension back to $\mathbb M^n$ by translation: in coordinates $z_i=x_i-x_n$ and $y=x_n$, pair the relative distribution with $z\mapsto\int_{\mathbb M}\Psi(y+z_1,\ldots,y+z_{n-1},y)\,d^4y$. The inner function is a compactly supported smooth test by differentiation under a compact integral. This defines a translation-covariant distribution extending the off-diagonal coefficient. Apply these extensions to the glued distribution from step 4.1. The finite graph sum yields a full extension $T_n^1$; its numerical kernels remain independent of $\phi$, so field independence is preserved. The numerical kernels are translation invariant, so all their wavefront tuples have total covector sum zero, including at the extended diagonals. Differentiating the finitely many field jets under the distribution pairing defines the output derivative kernels continuously, by attaching the remaining field slots to their vertex positions. In their Fourier phases the frequency at each vertex is the sum of the attached slot frequencies; jet derivatives add only polynomial factors. Multiplication by the smooth compact vertex coefficients preserves the numerical wavefront bound. Thus a nonzero output tuple in an all-future or all-past cone has nonzero total frequency, and rapid center-coordinate Fourier decay of the localized numerical distribution excludes it; the proper projection wavefront estimate [F4] expresses the same exclusion for integrated vertex variables. Thus the output belongs to the stated polynomial microcausal class, with compact support and finite polynomial degree inherited from the finitely many vertex terms. [A1, F1, F4, F5, F7, F8, F10, F11, F12, step 1.3, step 4.1, construct]

6.1 Each graph ambiguity space at a fixed field and jet order is finite-dimensional because the allowed derivative order is finite. Work on its balanced-label module; the total/relative derivative splitting [F11] is Lorentz equivariant, so the following correction on balanced labels extends by differentiation without spoiling representation independence. For a graph let $c(X)=X\cdot T_n^1$ be the infinitesimal Lorentz variation of the chosen extension. Since the off-diagonal graph data are Lorentz invariant, $c(X)$ vanishes off $\Delta_n$ and lies in that finite-dimensional local jet space. The representation law gives the cocycle identity $c([X,Y])=\rho(X)c(Y)-\rho(Y)c(X)$. By [F9] there is a local jet $v$ with $c(X)=\rho(X)v$; replacing the extension by $T_n^1-v$ makes its infinitesimal defect zero. The proper-orthochronous group is connected, so invariance along every smooth path from the identity gives full $SO^+(1,3)$ covariance. Translation covariance already holds by the relative-coordinate lift. [F1, F8, F9, F11, step 5.1, algebra]

7.1 Symmetrize the covariant extension over the finite permutation group; this preserves covariance, field independence and the finite scaling bounds. The following symmetric diagonal correction and its polarization impose unitarity. Let $D_n(V)$ be the coefficient of $g^n$ in $\mathcal S_g(V)^*\star_W\mathcal S_g(V)-1$ after the lower orders have been made unitary. Associativity and $(F\star_WG)^*=G^*\star_WF^*$ follow from the finite contraction formula and $W^*=W^{\mathsf T}$. On each causal cover set $C_I$, factorization reduces the defect to products of lower-order unitary blocks, so $D_n$ vanishes away from $\Delta_n$. It is self-adjoint because the full product $\mathcal S_g(V)^*\star_W\mathcal S_g(V)$ is self-adjoint. The graphwise scaling bounds and [F8] place each diagonal part of $D_n$ in a finite local jet space with the permitted derivative order. Define the correction by
$$\frac{i^n}{\hbar^n n!}\,\Delta T_n(V,\ldots,V)=-\frac12D_n(V).$$
This is an allowed formal correction: every order-$n$ defect term has $\hbar$-degree at least $-n$, so multiplication by $\hbar^n$ inverts the displayed prefactor without introducing negative powers of $\hbar$; polarization gives a symmetric local $n$-linear map on balanced representatives, and [F11] extends it consistently to every functional presentation. In the order-$n$ defect, this changes only the two terms paired with the unit coefficient, adding $-D_n/2+(-D_n/2)^*=-D_n$. Thus it cancels the defect, preserves the graph engineering upper bounds and covariance, and leaves all off-diagonal causal products unchanged. Formal unitarity holds through order $n$. [A1, F1, F3, F8, F11, step 3.1, step 6.1, algebra]

8.1 The construction at order $n$ uses only finite graph sums, finite-dimensional jet corrections and the already constructed orders below $n$. The Axiom of Choice supplies dependent choice for the recursive order-by-order selections and Countable Choice for the microlocal contractions in [F3]. Induction therefore constructs the sequence for every finite order and verifies every clause of the system contract in [F1]. No limit in $g$ is taken. [A1, F1, F3, step 1.1, step 7.1] ∎

## Remarks

The result is conditional on the fixed free scalar data in the definition. It constructs formal local time-ordered products and finite counterterms; it does not construct the free data, prove convergence, take an adiabatic limit, or impose a gauge identity.
