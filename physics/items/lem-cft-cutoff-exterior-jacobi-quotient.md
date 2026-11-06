---
id: lem-cft-cutoff-exterior-jacobi-quotient
kind: lemma
title: Finite Jacobi quotient with a bounded exterior dual and C1-cofinite leaves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 2
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-c1-cofinite-module
  - def-cft-quasi-finite-dimensional-module
  - def-cft-logarithmic-intertwining-operator
  - thm-cft-strongly-graded-contragredient-duality
  - thm-hilbert-basis-theorem
  - thm-noetherian-ring-quotients-and-localisations
  - lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct
dependency_roles:
  def-cft-c1-cofinite-module: mathematical-premise
  def-cft-quasi-finite-dimensional-module: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
  thm-hilbert-basis-theorem: mathematical-premise
  thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct: mathematical-premise
sources:
  references:
    - title: "Huang, Differential equations and intertwining operators, §1; the bounded-exterior reduction here avoids a C1 assumption on the output dual"
      url: https://arxiv.org/pdf/math/0206206v1
    - title: "Huang, Lepowsky and Zhang, Part VII, §11.2"
      url: https://arxiv.org/pdf/1110.1929v2
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a strongly graded Möbius or conformal vertex algebra with trivial auxiliary grading. All modules considered below are strongly graded generalized $V$-modules with that trivial auxiliary grading, including the explicit three-operator Möbius structure when applicable. Let the leaf modules $W_1,\ldots,W_{n+1}$ be C1-cofinite and quasi-finite-dimensional in the real-weight convention. Let the output module $W$ be quasi-finite-dimensional; its restricted dual need not be C1-cofinite. For $B\in\mathbb R$ put $E_{0,B}=\bigoplus_{h\leq B}(W')_{[h]}$, a finite-dimensional vector space, and
$$R=\mathbb C[z_1^{\pm1},\ldots,z_n^{\pm1},(z_i-z_j)^{-1}:i<j],\qquad T_B=R\otimes E_{0,B}\otimes W_1\otimes\cdots\otimes W_{n+1}.$$
There is an explicitly defined relation submodule $J_B$ below such that $Q_B=T_B/J_B$ is finite over $R$, carries a flat connection $\nabla_l=\partial_{z_l}+U_l(L(-1))$, and every formal scalar coefficient of a composable product of logarithmic intertwiners with these leaves and output $W$ annihilates $J_B$ when tested against $E_{0,B}$. The coefficient is horizontal for that connection. The quotient imposes the full global $L(0)$ Ward identity. On any finite nested-cluster boundary chart, for each boundary scale $q$ and every fixed tensor generator, its evaluations by horizontal functionals satisfy a monic Euler equation with coefficients holomorphic at the generic point $q=0$, with all other boundary variables nonzero. The equation has parameter-holomorphic coefficients on a small product neighborhood. All assertions are local and require no tensor products or category closure.

Write $U_i$ for applying an operator to the indicated tensor factor, with factor0 equal to $E_{0,B}$. For homogeneous $u\in V_d$, $d>0$, the generators of $J_B$ are
$$A_i=\sum_{k\geq0}z_i^kU_0(u^o_{-1-k})-U_i(u_{-1})-\sum_{j\ne i}\sum_{k\geq0}(-1)^k(-(z_i-z_j))^{-1-k}U_j(u_k)-\sum_{k\geq0}(-1)^k(-z_i)^{-1-k}U_{n+1}(u_k),$$
$$C=U_0(u^o_{-1})-\sum_{i=1}^n\sum_{k\geq0}(-1)^kz_i^{-1-k}U_i(u_k)-U_{n+1}(u_{-1}),$$
applied to all input tensors, together with
$$R_0=\sum_{l=1}^nz_lU_l(L(-1))+\sum_{i=1}^{n+1}U_i(L(0))-U_0(L(0)).$$
Here $u_k^o$ is the opposite mode on the actual module $W'$, equivalently the transpose of $u_k$ on $W$ under double-dual evaluation. The finite sums in $A_i,C$ preserve the exterior cutoff. There is no relation requiring a C1 reduction of factor0.

## Facts & Assumptions

**Given:** Exactly the objects, real weights, cutoff and displayed relations of the Statement.

[F1] [[def-cft-c1-cofinite-module]] gives finite homogeneous representatives modulo positive-state $(-1)$-modes. [[def-cft-quasi-finite-dimensional-module]] gives finite real-weight cutoffs.

[F2] [[thm-cft-strongly-graded-contragredient-duality]] supplies actual opposite modes in Möbius/conformal scope, their weight shifts and restricted double-dual evaluation.

[F3] [[def-cft-logarithmic-intertwining-operator]] supplies formal Jacobi, derivative, weight and Möbius brackets; no analytic convergence is used to establish the relations.

[F4] [[thm-hilbert-basis-theorem]], [[thm-noetherian-ring-quotients-and-localisations]] and [[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]] give the Noetherianity and finite-submodule arguments used below.

## Proof

1.1 Quasi-finiteness implies a global lower bound on real weights: an unbounded sequence of distinct weights tending to minus infinity would give infinitely many independent vectors below one fixed cutoff. It also implies that every weak cutoff $h\leq B$ is finite dimensional, by using a strict cutoff $B+1$. Restricted duality preserves the same weights and finite dimensions. The retained Möbius grading only requires $V_{(n)}=0$ for sufficiently negative $n$, and permits negative state weights; no CFT-type positivity is being assumed. For the positive-weight state $u\in V_d$ used in a C1 reduction, the exact output operator is $(u_{-1-k}^{W})^t=u^o_{-1-k}$ on $W'$. This follows by transposing the GLOBAL current $Y_W(u,t)$ in the residue defining $A_i,C$; equivalently $Y_{W'}^o(u,t)=Y_W(u,t)^t$ by the proved double-inversion identity. Directly, $u_m^W$ has weight shift $d-m-1$, so its restricted transpose has shift $m+1-d$. Thus $m=-1-k$ lowers exterior weight by exactly $d+k$. The full opposite-field expansion confirms that this remains true for EVERY surviving $L(1)$ term, including $j>d$:
$$u^o_{-1-k}=(-1)^d\sum_{j\geq0}\frac{(L(1)^ju)^{W'}_{\,2d-j+k-1}}{j!},\qquad \operatorname{wt}(L(1)^ju)-(2d-j+k-1)-1=-d-k.$$
Here $\operatorname{wt}(L(1)^ju)=d-j$, so the two $j$ contributions cancel. The exponent $t^j$ in $e^{tL(1)}u$ forces the compensating $-j$ in the mode index; keeping that mode index fixed would describe a different operator from the actual global-current residue. The $j$ sum is finite by the actual lower-truncated fixed auxiliary-degree grading of $V$, not by an unassumed bound $j\leq d$. Consequently every exterior term of $A_i$ and $C$ preserves $E_{0,B}$ for all leaf weights and all positive-weight C1 states. Strong-dual upper truncation makes their $k$ sums finite on each vector. Ordinary input truncation makes all the other displayed sums finite. $L(0)$ preserves $E_{0,B}$. Thus every displayed relation is an actual element of $T_B$, including the global weight relation. [given, F1, F2, algebra]

1.2 We construct the finite boundary charts used here. For any finite collision cluster choose two labels as pivot, one its center $c$ and their difference its scale $q$, and write its other positions as $c+qa_i$, with pivot shapes0 and1. Where shapes collide repeat on that subcluster. The origin is an additional fixed label, so a cluster containing it has center0. Each step strictly separates a nontrivial cluster; finitely many labels give finitely deep trees. These are the ordinary diagonal-blowup charts: selecting a nonzero pivot difference covers each blowup, and repeating resolves the remaining equal-shape diagonals. On a final chart every vanishing original position or difference is a monomial in the cluster scales times a holomorphic unit; each scale occurs with exponent0 or1. The remaining shape neighborhoods invert only finitely many nonzero polynomials. At the generic point of one boundary $q=0$ invert all the other scales. Then every insertion position is holomorphic and $q\partial_qz_l$ is divisible by $q$. [given, construct, algebra]

2.1 Choose finite homogeneous representative spaces $P_i$ for $W_i/C_1(W_i)$, $1\leq i\leq n+1$, and set $M=B+\sum_i\max\operatorname{wt}P_i$. Zero modules give zero coefficients and can be omitted. A homogeneous tensor of total weight greater than $M$ has at least one leaf factor of the form $u_{-1}v$ after expansion by those representatives. Reduce such a factor using $A_i$ for a finite insertion or $C$ for the last leaf. If its preinsertion total weight is $\sigma$, the designated term has weight $\sigma+d$. Every other ordinary leaf term has weight $\sigma+d-k-1$, and every exterior opposite term has weight $\sigma-d-k$. These are strictly smaller by a positive integer. All total weights have one lower bound, so every reduction terminates. The exterior weight never increases; this is why the fixed finite cutoff, rather than C1-cofiniteness of $W'$, suffices. Hence $Q_B$ is generated over $R$ by the images of the finite tensor cutoff $E=(E_{0,B}\otimes\bigotimes_iW_i)_{\leq M}$. Finiteness of $E$ follows by bounding each factor above using the common lower bounds of the others, and applying F1. [F1, F2, step 1.1, algebra]

2.2 The formal scalar coefficient annihilates $A_i$ and $C$ by an explicit Jacobi residue. Insert a current $Y(u,t)$ in the formal product and move it successively across the intertwiner vertices using Jacobi. At each internal edge the two occurrences of that same current cancel. At any fixed formal monomial the intermediate weights are fixed and the finite-dimensional projections make these coefficient operations finite; no analytic sum or contour deformation is involved. Use rational multiplier $(t-z_i)^{-1}$ for $A_i$, or $t^{-1}$ for $C$. Its expansions at infinity, the finite insertion points and zero give exactly the coefficients displayed in the Statement: at another insertion $z_j$, $(t-z_i)^{-1}=\sum_{k\geq0}(-1)^k(z_j-z_i)^{-1-k}(t-z_j)^k$, and at infinity it is $\sum_{k\geq0}z_i^kt^{-1-k}$. Transposing the infinity current gives the displayed opposite modes on the exterior dual. The global $L(0)$ bracket, telescoped through all vertices, gives $R_0$. Thus every generator is annihilated. The derivative identity identifies the action of $U_l(L(-1))$ with the scalar $\partial_{z_l}$ derivative, so coefficient evaluation is horizontal. [F2, F3, step 1.1, algebra]

3.1 The connection preserves the relations. Differentiation at fixed global current coordinate of $(t-z_i)^{-1}$ is $\delta_{il}(t-z_i)^{-2}$; formal integration by parts replaces it by the same multiplier with state $L(-1)u$. The module commutator $[L(-1),u_k]=-ku_{k-1}$ gives precisely this differentiation of each local expansion. Consequently $\nabla_lA_i(u,\mathbf w)=A_i(u,U_l(L(-1))\mathbf w)+\delta_{il}A_i(L(-1)u,\mathbf w)$ and $\nabla_lC(u,\mathbf w)=C(u,U_l(L(-1))\mathbf w)$. All terms retain the SAME exterior cutoff $B$ by step 1.1, with no dependence on the leaf weights or on the order of any later derivative. Indeed $\nabla_l$ acts by differentiation of rational coefficients and $L(-1)$ on leaf $l$, with no output-dual action at all, so $\nabla_lT_B\subseteq T_B$ for arbitrary input weights. Its only extra state in the differentiated $A_i$ relation is $L(-1)u$, of positive weight $d+1$; its exterior modes have the same fully expanded shift calculation $-(d+1)-k$. The relation $C$ behaves identically. Therefore induction gives $\nabla_{l_1}\cdots\nabla_{l_r}J_B\subseteq J_B$ inside this ONE fixed $T_B$, for every derivative word and every $r$. This is a derivative-stable cutoff module, not a separate cutoff chosen for each finite set of leaves. The dilation gauge used later is $q^{-L(0)'}$ on the exterior space and also preserves this same cutoff, since $L(0)'$ preserves every generalized weight; no exterior $e^{zL(1)}$ gauge or reflection is used. For $R_0$, differentiation of $z_l$ contributes $U_l(L(-1))$, while the commutator with the leaf $L(0)$ contributes $-U_l(L(-1))$; they cancel, so $\nabla_lR_0=R_0\nabla_l$. Leibniz therefore makes $J_B$ connection stable. The $\nabla_l$ commute on $T_B$, since derivatives in distinct positions and their distinct-factor translations commute; they descend to a flat connection on $Q_B$. [F2, F3, step 2.2, algebra]

4.1 Fix such a scale $q$. Filter tensors by SIGNED pole order plus total weight: a term $q^{-p}b\mathbf v$, $p\in\mathbb Z$, $b$ holomorphic at generic $q=0$, has bound $p+\operatorname{wt}\mathbf v$. Negative $p$ records an actual zero and must be retained: it offsets the weight increase of a translated input, even when no pole is present. In $A_i,C$, a leaf-mode coefficient has pole at most $k+1$ along this scale, since its position/difference has vanishing order at most1. Adding the leaf-mode shift $d-k-1$ gives at most $d$, the designated shift. Exterior coefficients $z_i^k$ are holomorphic and the opposite shift is $-d-k$, also at most $d$. Thus the terminating reduction in step 2.1 preserves this filtration. The pulled-back Euler connection $\nabla_{q\partial_q}$ preserves it as well: differentiation by $q\partial_q$ does not increase the pole order, and each term $(q\partial_qz_l)U_l(L(-1))$ has a factor $q$, offsetting its weight increase1. $R_0$ only adds relations and cannot invalidate either a chosen reduction or this representative bound. [F1, F2, step 2.1, step 3.1, step 1.2, algebra]

5.1 For a fixed tensor $\mathbf w$ of total weight $\sigma$, every Euler iterate $\nabla_{q\partial_q}^j[\mathbf w]$ has a reduced representative in $R\otimes E$ of pole order at most $\sigma-\min\operatorname{wt}E$. Choose one integer $N$ bounding this number. Multiplication by $q^N$ puts ALL these representatives in the one finite module $B_q\otimes E$, where $B_q$ is the polynomial chart ring with every shape/unit denominator and other boundary scale inverted, but $q$ not inverted. F4 makes $B_q$ Noetherian. The submodule spanned by those infinitely many representatives is finite, hence some initial segment spans it. Expressing the next representative in that segment and dividing by the fixed $q^N$ gives $\nabla_{q\partial_q}^m[\mathbf w]+\sum_{j<m}c_j\nabla_{q\partial_q}^j[\mathbf w]=0$ with $c_j\in B_q$. Pairing any horizontal functional gives the asserted monic Euler equation. Near a generic boundary point all its finitely many denominators are nonzero, so its coefficients are holomorphic in $q$ and all remaining parameters on a product neighborhood. No unproved simultaneous regular-singular assertion has been inserted into this one-boundary argument. [F4, step 2.1, step 3.1, step 4.1, algebra] ∎
