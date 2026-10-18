---
id: lem-tracial-standard-form-and-normal-functional-vectors
kind: lemma
title: "Tracial standard form, normal functional vectors, and expectation"
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - thm-banach-alaoglu
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-ultrafilter-lemma
  - thm-riesz-representation-for-hilbert-space
  - thm-complex-hahn-banach-norm-preserving-extension
  - thm-hahn-banach-dominated-extension
  - thm-relative-hahn-banach-geometric-separation
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - lem-nuclear-series-characterizes-trace-norm
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC. The explicit choice-strength suppliers establish countable choice, the ultrafilter lemma and the real Hahn–Banach extension principle needed by the functional-analytic arguments; all nonseparable index sets are allowed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors"
      url: "https://www.math.ucla.edu/~popa/Books/IIun.pdf"
      locator: "Theorem 7.1.1 (pp. 98–99), Propositions 7.3.6–7 and Theorem 7.3.8 (pp. 109–111), Theorem 9.1.2 (p. 140). Complete arguments read; normality is explicitly the repository bounded-ball WOT convention."
---

## Statement

Assume AC. Here normality for positive functionals and positive maps means WOT continuity on every operator-norm bounded ball, agreeing with the published trace convention. For a finite tracial von Neumann algebra $(A,t)$, left and right multiplication
on $L^2(A,t)$ are faithful normal representations, with $L(A)'=R(A)$ and
$R(A)'=L(A)$. A vector $\xi \in L^2(A)$ defines a bounded map $a\mapsto \xi a$ on $L^2(A)$
if and only if $\xi $ is represented by an element of $A$. Every positive normal
functional is $a\mapsto \langle a\xi ,\xi \rangle $ for some $\xi \in L^2(A)$. If $D\subseteq A$ is a unital von
Neumann subalgebra, there is a unique normal faithful trace-preserving
conditional expectation $E_D:A\to D$; it is the restriction of the orthogonal
projection onto $L^2(D)$ and is contractive and $D$-bimodular.

## Facts & Assumptions

**Given:** AC and the algebras, traces, Hilbert modules, and finite dimension hypotheses in the Statement.

[F1] AC is the global choice hypothesis. Its countable-choice, ultrafilter and Hahn–Banach consequences used below are supplied explicitly by [F12]–[F14]. ([[def-axiom-of-choice]])

[F2] A concrete von Neumann algebra is a WOT-closed unital star-algebra; commutants are WOT closed and multiplication by a fixed bounded operator is WOT continuous. ([[def-von-neumann-algebra-and-commutant]])

[F3] A faithful normal tracial state is positive, faithful, tracial, normalized, and WOT continuous on the operator unit ball. ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]])

[F4] Under AC, the bicommutant of a unital star-algebra is its WOT and SOT closure; a concrete von Neumann algebra equals its bicommutant. ([[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]])

[F5] Under AC, for every nondegenerate concrete C*-algebra D, the unit ball of D is strongly dense in that of D double commutant; its self-adjoint part is strongly dense in the self-adjoint part. Only clause 1 is used. ([[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]])

[F6] Assuming the ultrafilter lemma, the dual unit ball of every real or complex normed space is weak-star compact. [F13] supplies that hypothesis. We apply it to bounded forms, or to the trace-class predual after proving that identification. ([[thm-banach-alaoglu]])

[F7] Under Countable Choice, every bounded linear functional on a Hilbert space has a unique representing vector, with equal norm. [F12] supplies Countable Choice. ([[thm-riesz-representation-for-hilbert-space]])

[F8] Under AC, a bounded complex linear functional on any normed subspace extends to the whole normed space with equal norm. ([[thm-complex-hahn-banach-norm-preserving-extension]])

[F9] Under HB, a point outside a nonempty closed convex subset of a normed space admits uniform strict real-part separation by a bounded functional (clause ii). [F14] supplies the real dominated-extension form of HB from AC. ([[thm-relative-hahn-banach-geometric-separation]])

[F10] Under AC, bounded Borel functional calculus supplies spectral projections, the star-homomorphism identities, the spectral norm estimate, and strong convergence for uniformly bounded pointwise convergent functions; all operators used below are bounded. ([[thm-borel-functional-calculus-for-bounded-normal-operators]])

[F11] Under Countable Choice, trace class on arbitrary Hilbert spaces is a Banach operator ideal. The nuclear-series lemma supplies a nuclear representation of every trace-class operator and identifies the trace norm with the infimum of its nuclear sums; no separability of the full Hilbert space is assumed. [F12] supplies Countable Choice. ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[lem-nuclear-series-characterizes-trace-norm]])

[F12] AC implies Countable Choice. ([[thm-choice-implies-dependent-implies-countable-choice]])

[F13] AC implies the ultrafilter lemma, the compactness premise of Banach–Alaoglu. ([[thm-ultrafilter-lemma]])

[F14] Under AC, every real linear functional dominated by a sublinear functional has a dominated linear extension to the whole real vector space; this is the HB premise of [F9]. ([[thm-hahn-banach-dominated-extension]])

## Proof

**Given:** The hypotheses of the Statement and the stated prerequisite contracts.

1.1 We use the repository convention that scalar Hilbert inner products are linear in their first variable. Right-module-valued inner products, introduced later, are conjugate-linear in the first variable as usual. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given]

2.1 **Standard commutants.** Right multiplication satisfies $\|ax\|_2\le \|x\| \|a\|_2$, and left multiplication has the analogous estimate. Their ranges are von Neumann algebras: for example the unit ball of $L(A)$ is strongly closed: the unit ball of $A$ is WOT compact. To obtain this directly without a predual assumption, apply Banach–Alaoglu to the unit ball of $B(K)$ as bounded sesquilinear forms on its original carrier $K$; $A$ is WOT closed. Every standard-representation coefficient $a\mapsto t(b^*ac)$ is normal and therefore WOT continuous on this ball; arbitrary $L^2$ coefficients follow uniformly by approximating both vectors by $A$. Thus the image ball of $L(A)$ is WOT compact and hence strongly closed. The representation is faithful and isometric (the norm can be detected by nonzero spectral projections of $a^*a$). Its range is a norm-closed unital C*-algebra. The published bounded-density supplier, applied to this range and its bicommutant, now promotes closedness of its unit ball to $L(A)=L(A)''$, so the whole range is a von Neumann algebra. This avoids the invalid inference that every strongly convergent net is uniformly bounded. The coefficient calculation directly proves WOT continuity on bounded balls, so the representation is normal in the stated convention. Let $LC$ be the bounded operators $L_\xi :a\mapsto \xi a$ associated with vectors $\xi \in L^2(A)$, and let $RC$ be the analogous right convolvers. These operators commute with each other. Here is the limit argument, to avoid assuming that bounded vectors belong to $A$: choose $a_n\to \xi $, $b_m\to \eta $ in $L^2$ with $a_n,b_m\in A$. For fixed $c,d\in A$, the coefficients of $a_n c b_m$ have a joint limit, because the trace identity writes them explicitly as $\langle a_n c b_m,d\rangle =\langle c b_m,a_n^* d\rangle $, an inner product of two convergent Hilbert sequences, where $J(a)=a^*$. Taking first the $n$ limit or first the $m$ limit therefore gives the same result. If $L_\xi $ and $R_\eta $ are bounded, the two iterated limits are respectively the coefficients of $L_\xi R_\eta (c)$ and $R_\eta L_\xi (c)$. Density of $A$ proves commutation. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, step 1.1]

3.1 If $T\in R(A)'$, set $\xi =T1$. On $A$, $T(a)=T(R_a1)=R_a\xi =\xi a$, so $T=L_\xi $. Thus $LC=R(A)'$; similarly $RC=L(A)'$. The preceding commutation gives $LC\subseteq RC'=L(A)''=L(A)$ by the bicommutant theorem. The reverse inclusion is immediate. This proves both commutant identities and the bounded-vector criterion. Notice that sequences approximate individual Hilbert vectors regardless of whether $L^2(A)$ is separable. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 2.1]

4.1 **Positive-vector realization; no unproved Radon–Nikodym input.** Here are functional analytic details underlying the normal-functional approximation used next. For a concrete von Neumann algebra $Q\subseteq B(K)$, its normal functionals form the quotient of the trace-class operators on $K$ by the annihilator of $Q$, with dual $Q$. Here is the pairing and duality in detail. For trace-class $h$, choose the nuclear series $h=\sum_{j\ge1}\langle\,\cdot,u_j\rangle v_j$ from [F11] and let $h_m$ be its first $m$ terms. The difference $h-h_m$ is compact, being a difference of compact operators, and its nuclear tail gives $\|h-h_m\|_1\le\sum_{j>m}\|u_j\|\|v_j\|\to0$ by [F11]. Thus finite-rank operators are trace-norm dense, on arbitrary $K$. For finite-rank $h$, use its finite-dimensional trace to define the pairing $\operatorname{Tr}(hx)$. If $h=\sum_j\langle\,\cdot,u_j\rangle v_j$, it equals $\sum_j\langle xv_j,u_j\rangle$, so its modulus is at most $\|x\|\|h\|_1$ by using its finite singular-value representation from [F11]. The density just proved extends this pairing to all trace-class $h$. Conversely a bounded functional on trace class, evaluated at the rank-one operators, gives a bounded sesquilinear form on $K$; [F7] represents it by a unique $x\in B(K)$. Equality of the functional and this pairing on finite-rank operators extends by trace-norm density, and testing rank-one operators proves equality of norms. Thus the dual of trace class is $B(K)$. The dual of its quotient by the annihilator of $Q$ is the double annihilator, which is $Q$ because $Q$ is ultraweakly closed. The double-annihilator assertion follows by applying Hahn–Banach separation to a point outside the closed linear space. A WOT-closed linear subspace $Q$ is ultraweakly closed: if $x\notin Q$, choose a basic WOT neighborhood $x+U$ disjoint from $Q$, defined by finitely many vector coefficients $\phi_i$. Then $(\phi_i(x))\notin(\phi_i(Q))$ in their finite-dimensional coefficient space; a linear functional vanishing on the subspace $(\phi_i(Q))$ but not on $(\phi_i(x))$ gives a finite linear combination of vector coefficients separating $x$ from $Q$. Such a combination is finite rank and trace class, hence ultraweakly continuous. For completeness, the stipulated bounded-ball WOT continuity gives approximation in norm by finite matrix coefficients. Explicitly, continuity at zero on the unit ball gives, for every $\varepsilon >0$, finitely many coefficients whose common kernel cuts the unit ball to a set on which the functional has modulus at most $\varepsilon $. Hahn–Banach, applied to restriction to that kernel, gives distance at most $\varepsilon $ from their finite-dimensional span. Conversely, a norm limit of finite matrix coefficients is WOT continuous on each bounded ball, because norm approximation is uniform on that ball. Thus the quotient is exactly the space of normal functionals in the stipulated convention. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F14, step 3.1]

5.1 The cone of finite sums of vector positive functionals is norm dense in the positive normal cone. To see this without assuming a positive extension lemma, separate a positive normal functional from its norm-closed convex cone if it were outside. By the quotient-duality just established, a separating real functional is evaluation at a self-adjoint $x\in Q$. Nonnegativity on all vector functionals says $x\ge 0$; positivity of the functional contradicts the strict separation. This proves the assertion. The faithful standard representation identifies the original and standard WOT unit balls homeomorphically: step 2.1 gives a continuous bijection from a compact ball to a Hausdorff image. Thus a functional normal in the original representation is normal in the standard one. Apply the cone argument to that standard representation of $A$. Approximate each of the finitely many vectors in such a finite sum by elements $a_j\in A$ in $L^2$; $\|\omega _\xi -\omega _\eta \|\le \|\xi -\eta \|_2(\|\xi \|_2+\|\eta \|_2)$ controls the error. The sum becomes $t(b·)$, where $b=\sum  a_j a_j^*\ge 0$, and hence the single positive vector $b^{1/2}\in A$ realizes that approximating functional. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F14, step 4.1]

6.1 We give the needed completeness estimate rather than assuming square-root continuity for unbounded operators. For $a,b\in A_+$, let $p,q$ be the positive and negative spectral projections of $a-b$; then $t((a^2-b^2)p)\ge t((a-b)^2p)$ because the difference is $2t(b^{1/2}(a-b)p b^{1/2})\ge 0$. Interchanging $a,b$ gives $t((b^2-a^2)q)\ge t((a-b)^2q)$. Addition yields $\|a-b\|_2^2\le (\omega _a-\omega _b)(p-q)\le \|\omega _a-\omega _b\|$. Thus positive bounded vectors realizing a norm-Cauchy sequence of positive normal functionals are Cauchy in $L^2$. Their limit $\xi $ realizes the desired functional by the previous upper estimate. This completes the positive normal functional realization proof. The spectral projections used here are bounded spectral calculus in $A$, not an unbounded-operator theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 5.1]

7.1 **Little dominated Radon–Nikodym lemma.** For any positive functional $\varphi$, positivity of $\varphi((x+zy)^*(x+zy))$ for all scalars $z$ gives $|\varphi(y^*x)|^2\le\varphi(x^*x)\varphi(y^*y)$. If $0\le \varphi \le C t$, Hilbert Riesz applied to $\varphi $ gives a vector $h\in L^2(A)$ with $\varphi (a)=\langle a,h\rangle $; this is bounded because $|\varphi (a)|^2\le \varphi (1)\varphi (a^*a)\le C\varphi (1)\|a\|_2^2$. The Cauchy–Schwarz inequality for the positive functional gives $|\varphi (ab^*)|\le C\|a\|_2\|b\|_2$. Consequently the convolution map for $h$ has norm at most $C$: the trace identity gives $\langle a,hb\rangle=\varphi(ab^*)$ for $a,b\in A$, first for bounded approximants to $h$ and then by Hilbert norm convergence. By the bounded-vector criterion, $h\in A$. Positivity of $\varphi $ and $Ct-\varphi $ implies $0\le h\le C1$: test against positive spectral projections of the self-adjoint element $h$, with self-adjointness first following from $\varphi (a^*)=\overline{\varphi (a)}$ and faithfulness of the pairing. Uniqueness follows by testing the difference against its adjoint. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, step 6.1]

8.1 **Expectation.** For $0\le x\le C1$ in $A$, the functional $d\mapsto t(xd)$ on $D$ is between zero and $Ct|_D$; the dominated lemma yields the unique $E_D(x)\in D$ between zero and $C1$ satisfying $t(E_D(x)d)=t(xd)$ for every $d\in D$. Extend linearly using differences of positives; uniqueness of the pairing makes the extension well-defined. The pairing identity proves $E_D(d)=d$, bimodularity, and trace preservation. It also proves that $E_D$ is the $L^2$ orthogonal projection on $A$. Faithfulness follows from trace preservation. Normality in the stipulated topology follows directly from the pairing identity. If a bounded net $x_i$ converges WOT to $x$, contractivity, established immediately below, bounds $E_D(x_i)$. For $b,c\in D$, one has $t(c^*E_D(x_i)b)=t(bc^*x_i)\to t(bc^*x)=t(c^*E_D(x)b)$. Approximate arbitrary vectors in $L^2(D)$ by $D$; the uniform operator bound extends convergence to every standard Hilbert matrix coefficient. The original and standard representations of $D$ have homeomorphic unit balls: the faithful standard representation is a continuous bijection from the original WOT compact ball to its Hausdorff image, as in step 2.1. Thus this convergence is WOT convergence in the original representation as well. This proves bounded-ball WOT continuity of $E_D$. For arbitrary $x$, the projection estimate applied to $E_D(x)^*x$ gives $E_D(x)^*E_D(x)\le E_D(x^*x)$: alternatively expand $E_D((x-E_D(x))^*(x-E_D(x)))\ge 0$. Thus $\|E_D(x)\|\le \|x\|$. Uniqueness follows from the pairing identity, which every trace-preserving bimodule projection has. All these arguments work for nonseparable algebras. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 7.1] ∎
