---
id: def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
kind: definition
title: States, tracial states and faithful normal traces on a von Neumann algebra
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-von-neumann-algebra-and-commutant
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-strong-and-weak-operator-topologies
  - def-axiom-of-choice
  - def-group
  - def-topological-group
  - def-standard-topologies
  - def-product-topology
  - def-continuous-map-top
  - def-topological-space
  - def-borel-sigma-algebra
  - def-extended-real-valued-measurable-function
  - def-hausdorff-space
  - def-locally-compact-space
  - def-neighbourhood-top
  - def-compact-space
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-measure
  - def-left-haar-integral-and-left-haar-measure
  - def-radon-measure-on-an-lch-space
  - lem-counting-measure-on-a-discrete-group
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-finite-sum-reindexing-and-fubini
  - lem-axiom-of-choice-implies-countable-choice
  - def-countable-choice
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - def-real-and-complex-inner-product-space
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
axiom_use: "AC is inherited from the concrete von Neumann algebra setup and the bounded-operator adjoints, and it supplies the countable-choice hypothesis of the complex L2 Hilbert-space theorem. The group regular operators and trace calculations require no further choice; the identity element fixes the vector δ_e, and the finite-dimensional matrix argument uses only one finite orthonormal basis at a time."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 7, Definition 7.A.2 and Proposition 7.A.3 with its full proof, printed pp. 214–215; §7.B, definition of normal traces and Example 7.B.5(2), printed pp. 218–219"
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors (author-hosted draft)"
      url: "https://www.math.ucla.edu/~popa/Books/IIun.pdf"
      locator: "Chapter 2 §2.5, Proposition 2.5.8 and its proof, printed pp. 43–44 (PDF pp. 48–49): for positive linear maps, normality is equivalent to WOT continuity on the unit ball"
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M\subseteq\mathcal B(H)$ be a concrete von Neumann algebra on a complex Hilbert space $H$ ([[def-von-neumann-algebra-and-commutant]], [[def-space-of-bounded-linear-operators]]). A complex-linear functional $\tau:M\to\mathbb C$ is **positive** if $\tau(P)\in[0,+\infty)$ for every positive operator $P\in M$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]), a **state** if it is positive and $\tau(I_H)=1$, **normal** if its restriction to the operator-norm unit ball of $M$ is continuous for the relative weak-operator topology ([[def-strong-and-weak-operator-topologies]], [[def-operator-norm]]), **tracial** if $\tau(ST)=\tau(TS)$ for all $S,T\in M$, and **faithful** if $\tau(T^*T)=0$ implies $T=0$. A **faithful normal tracial state** is a positive normalized trace that is both normal and faithful. In particular, $(M,\tau)$ is a **finite tracial von Neumann algebra** when $\tau$ is a faithful normal tracial state. If $H=\{0\}$ then $M=\{0\}$ and has no state, since $I_H=0$.

For a nonzero finite-dimensional complex Hilbert space $K$, the normalized matrix trace $\operatorname{tr}_K/\dim K$ is a faithful normal tracial state on $\mathcal B(K)$, and it is the unique tracial state.

For a discrete group $\Gamma$ equipped with the discrete topology, let $H_\Gamma=\ell^2(\Gamma,\mathbb C)$, whose Hilbert-space structure under AC is established in the proof. Define the left and right regular operators by
$$
(\lambda_\Gamma(g)f)(h)=f(g^{-1}h),\qquad (\rho_\Gamma(g)f)(h)=f(hg)\qquad(g,h\in\Gamma).
$$
Put $L(\Gamma):=W^*(\lambda_\Gamma(\Gamma))$ using the concrete generated von Neumann algebra of [[def-von-neumann-algebra-and-commutant]]. Then
$$
\tau_\Gamma(T):=\langle T\delta_e,\delta_e\rangle\qquad(T\in L(\Gamma))
$$
is a faithful normal tracial state on $L(\Gamma)$.

## Facts & Assumptions
[A1] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The discrete topology consists of all subsets; therefore every subset is Borel and every complex-valued function is measurable ([[def-standard-topologies]], [[def-borel-sigma-algebra]], [[def-extended-real-valued-measurable-function]]).

[F2] The discrete topology on a group makes it a Hausdorff locally compact topological group: singleton sets separate points and are compact neighbourhoods, and the group operations are continuous ([[def-group]], [[def-topological-group]], [[def-hausdorff-space]], [[def-locally-compact-space]], [[def-compact-space]], [[def-neighbourhood-top]], [[def-product-topology]], [[def-continuous-map-top]], [[def-topological-space]]).

[F3] The counting set function is a measure on the full power set, gives each singleton mass $1$, and vanishes only on the empty set ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]], [[def-measure]]).

[F4] A left Haar measure is a nonzero Borel measure invariant under all left translations, finite on compact sets and outer regular on Borel sets and inner regular on open sets; a right Haar measure uses right translations ([[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]]).

[F5] For a left Haar measure $\mu$ on a discrete group, the integral of each nonnegative function is $c$ times its sum, and an integrable complex function has the corresponding sum, where $c=\mu(\{e\})$ ([[lem-counting-measure-on-a-discrete-group]]).

[F6] Complex $L^2$ is the space of almost-everywhere classes with squared norm $\int |f|^2$, and its pairing is $\int f\overline g$; a complex function is integrable when its modulus is integrable ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F7] The space $\ell^2(\Gamma,\mathbb C)$ has pairing $\langle a,b\rangle=\sum_{g\in\Gamma}a(g)\overline{b(g)}$ and coordinate vectors $\delta_g$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F8] Finite-tail control makes the coordinate vectors' linear span dense ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F9] AC implies countable choice, and under countable choice complex $L^2$ with its integral pairing is a Hilbert space ([[lem-axiom-of-choice-implies-countable-choice]], [[def-countable-choice]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F10] The weak-operator topology is generated by the matrix coefficients $T\mapsto\langle T\xi,\eta\rangle$ ([[def-strong-and-weak-operator-topologies]]).

[F11] Multiplication on either side by a fixed bounded operator is WOT-continuous ([[def-von-neumann-algebra-and-commutant]]).

[F12] Every commutant is WOT-closed ([[def-von-neumann-algebra-and-commutant]]).

[F13] A positive bounded operator $P$ satisfies $\langle P\xi,\xi\rangle\in[0,+\infty)$ for every vector $\xi$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F14] For a bounded operator $S$ on a Hilbert space, $S^*$ satisfies $\langle Sx,y\rangle=\langle x,S^*y\rangle$; adjoints of bounded operators exist under countable choice ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F15] The complex inner product is linear in its first argument, conjugate-symmetric and positive definite ([[def-real-and-complex-inner-product-space]]).

[F16] For a positive linear map between von Neumann algebras, normality is equivalent to continuity on the operator-norm unit ball for the relative WOT (Anantharaman–Popa, Proposition 2.5.8).

[F17] $W^*(\mathcal S)$ is the WOT closure of the unital $*$-algebra generated by $\mathcal S$ ([[def-von-neumann-algebra-and-commutant]]).

[F18] Reindexing a square-summable family by a bijection preserves its sum and norm ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a complex Hilbert space and concrete von Neumann algebra $M\subseteq\mathcal B(H)$, and a discrete group $\Gamma$ equipped with its discrete topology.

1.1 Let $K$ be nonzero and finite-dimensional, set $n=\dim K$, and fix an orthonormal basis $e_1,\ldots,e_n$, obtained from a finite basis by Gram–Schmidt. With matrix units $E_{ij}$, define $\sigma(T):=n^{-1}\sum_{i=1}^n\langle Te_i,e_i\rangle$. It is linear and WOT-continuous as a finite sum of matrix coefficients; $\sigma(I_K)=1$. For positive $T$, every $\langle Te_i,e_i\rangle\ge0$ by [F13], so $\sigma$ is positive. For $T\in\mathcal B(K)$, [F14, F15] give $\sigma(T^*T)=n^{-1}\sum_i\|Te_i\|^2$, which vanishes only when $T=0$, proving faithfulness. If $T=(t_{ij})$ and $S=(s_{ij})$, then $\operatorname{tr}(TS)=\sum_{i,j}t_{ij}s_{ji}=\sum_{i,j}s_{ji}t_{ij}=\operatorname{tr}(ST)$, so $\sigma$ is tracial. Hence $\sigma$ is a faithful normal tracial state. [F10, F13, F14, F15, given]

1.2 Equip $\Gamma$ with the discrete topology. Each singleton is open, so distinct points have disjoint singleton neighbourhoods and the space is Hausdorff. The product topology on $\Gamma\times\Gamma$ is discrete because each singleton $\{g\}\times\{h\}$ is basic open; hence multiplication and inversion are continuous. Each singleton is a compact neighbourhood, so $\Gamma$ is locally compact Hausdorff and its topology is a group topology. [F1, F2, given]

2.1 By [F1] and [F3], $\#$ is a Borel measure on $\Gamma$ and $\#(\{e\})=1$. Each left or right translation is a bijection and therefore preserves the finite or infinite cardinality of every subset, so $\#$ is left- and right-invariant. A compact subset is finite because its cover by open singletons has a finite subcover; hence $\#$ is finite on compact sets. Every Borel set $E$ is open, and $E$ itself is an open superset, so monotonicity makes the infimum in outer regularity equal to $\#(E)$. For open $U$, compact subsets are finite and every finite subset is compact; thus $\sup_{K\subseteq U\text{ compact}}\#(K)=\sup_{F\subseteq U\text{ finite}}|F|=\#(U)$, since every infinite set contains finite subsets of arbitrarily large size by induction. Therefore $\#$ satisfies the left and right Haar conditions in [F4]. [F1, F2, F3, F4, step 1.2, algebra]

2.2 If $\tau$ is any tracial state on $\mathcal B(K)$, then for $i\ne j$, $\tau(E_{ij})=\tau(E_{ii}E_{ij})=\tau(E_{ij}E_{ii})=0$. Also $\tau(E_{ii})=\tau(E_{ij}E_{ji})=\tau(E_{ji}E_{ij})=\tau(E_{jj})$. Since $\sum_iE_{ii}=I_K$, normalization gives $\tau(E_{ii})=1/n$ for every $i$. The matrix units span $\mathcal B(K)$, so $\tau=\sigma$; the normalized matrix trace is the unique tracial state. Applying this uniqueness to the formula from any other orthonormal basis proves that the normalized trace is basis-independent. [step 1.1, algebra]

3.1 Define $U:\ell^2(\Gamma,\mathbb C)\to L^2(\Gamma,\#;\mathbb C)$ by sending a family to its pointwise function class. By [F1] every function is measurable, and by [F3] the only counting-null set is empty, so each $L^2$ class has a unique pointwise representative. Since $\#$ is a left Haar measure by step 2.1, [F5] applies with $c=\#(\{e\})=1$: $\int_\Gamma|a(g)|^2\,d\#(g)=\sum_g|a(g)|^2$. Hence a function represents an $L^2$ class exactly when its family is square-summable, so $U$ is onto and preserves norms. For $a,b\in\ell^2$, [F7] and Cauchy–Schwarz make $a\overline b$ absolutely summable; [F5] gives $\int_\Gamma|a\overline b|\,d\#=\sum_g|a(g)\overline{b(g)}|<\infty$, so [F6] makes it integrable and [F5] gives $\langle Ua,Ub\rangle_{L^2}=\int_\Gamma a\overline b\,d\#=\sum_g a(g)\overline{b(g)}=\langle a,b\rangle_{\ell^2}$. By [F9], $L^2(\Gamma,\#;\mathbb C)$ is a Hilbert space under AC; thus $U$ transports its complete Hilbert structure to $\ell^2(\Gamma,\mathbb C)$, and the coordinate vectors have dense span by [F8]. [A1, F1, F3, F5, F6, F7, F8, F9, step 2.1]

4.1 For $g\in\Gamma$, the left and right regular formulas reindex coordinates by bijections, so [F18] gives $\|\lambda_\Gamma(g)f\|_2=\|f\|_2=\|\rho_\Gamma(g)f\|_2$. They are bounded linear isometries with inverses $\lambda_\Gamma(g^{-1})$ and $\rho_\Gamma(g^{-1})$, respectively; thus they are unitary. Direct substitution gives $\lambda_\Gamma(g)\lambda_\Gamma(h)=\lambda_\Gamma(gh)$, $\rho_\Gamma(g)\rho_\Gamma(h)=\rho_\Gamma(gh)$, and $\lambda_\Gamma(g)\rho_\Gamma(h)=\rho_\Gamma(h)\lambda_\Gamma(g)$. [F7, F18, step 3.1, given]

5.1 The linear span $\mathcal A_\Gamma$ of $\{\lambda_\Gamma(g):g\in\Gamma\}$ is a unital $*$-algebra by step 4.1 and $\lambda_\Gamma(g)^*=\lambda_\Gamma(g^{-1})$ by [F14]. Thus $L(\Gamma)=W^*(\lambda_\Gamma(\Gamma))$ is its WOT closure by [F17]. Each $\rho_\Gamma(h)$ commutes with $\mathcal A_\Gamma$ by step 4.1; [F12] makes its commutant WOT-closed, so every $T\in L(\Gamma)$ commutes with every right regular operator. [F12, F17, step 4.1]

6.1 Put $\tau_\Gamma(T)=\langle T\delta_e,\delta_e\rangle$. This is a linear WOT-continuous matrix coefficient by [F10]. Also $\tau_\Gamma(I)=1$, and if $P\in L(\Gamma)$ is positive then $\tau_\Gamma(P)=\langle P\delta_e,\delta_e\rangle\ge0$ by [F13]; thus $\tau_\Gamma$ is positive. Its WOT continuity gives continuity on the unit ball, which [F16] identifies with order-normality for a positive functional. [F10, F13, F16, step 3.1, step 5.1]

7.1 For $S\in L(\Gamma)$, $S^*S$ is positive because $\langle S^*S\xi,\xi\rangle=\|S\xi\|^2$ by [F14, F15]; thus [F13] makes $\tau_\Gamma(S^*S)$ real. The adjoint identity and conjugate symmetry give $\overline{\tau_\Gamma(S^*S)}=\langle S\delta_e,S\delta_e\rangle=\|S\delta_e\|^2$, so $\tau_\Gamma(S^*S)=\|S\delta_e\|^2$. If this is zero, then $S\delta_e=0$. For each $g\in\Gamma$, step 4.1 gives $\delta_g=\rho_\Gamma(g^{-1})\delta_e$, and step 5.1 gives $S\delta_g=S\rho_\Gamma(g^{-1})\delta_e=\rho_\Gamma(g^{-1})S\delta_e=0$. The span of these coordinate vectors is dense by step 3.1, so boundedness of $S$ implies $S=0$. Therefore $\tau_\Gamma$ is faithful. [F8, F13, F14, F15, step 3.1, step 4.1, step 5.1, step 6.1, algebra]

7.2 On generators, $\tau_\Gamma(\lambda_\Gamma(g))=1$ when $g=e$ and $0$ otherwise. Hence for $g,h\in\Gamma$, $\tau_\Gamma(\lambda(g)\lambda(h))=\mathbf1_{gh=e}=\mathbf1_{hg=e}=\tau_\Gamma(\lambda(h)\lambda(g))$. Bilinearity proves $\tau_\Gamma(AB)=\tau_\Gamma(BA)$ for all $A,B\in\mathcal A_\Gamma$. For fixed $A\in\mathcal A_\Gamma$, [F10, F11] make both maps $T\mapsto\tau_\Gamma(AT)$ and $T\mapsto\tau_\Gamma(TA)$ WOT-continuous, so their equality extends from the WOT-dense algebra $\mathcal A_\Gamma$ to every $T\in L(\Gamma)$. Now fix such a $T$; the same continuity in the first variable extends the equality from $A\in\mathcal A_\Gamma$ to all $A\in L(\Gamma)$. Thus $\tau_\Gamma$ is tracial on $L(\Gamma)$. [F10, F11, step 5.1, step 6.1, algebra]

8.1 Steps 6.1, 7.1 and 7.2 show that $\tau_\Gamma$ is positive, normalized, normal, faithful and tracial, hence a faithful normal tracial state; steps 1.1 and 2.2 show the corresponding existence and uniqueness claim for the normalized matrix trace. The zero-Hilbert-space case has no state because $I_H=0$, as stated in the definition. [step 1.1, step 2.2, step 6.1, step 7.1, step 7.2] ∎

## Remarks

- **Normality convention.** Proposition 2.5.8 of Anantharaman–Popa proves that, for positive linear maps between von Neumann algebras, order normality is equivalent to relative WOT continuity on the unit ball. Apply it with target $\mathbb C$ to a positive functional. The proof of the converse checks bounded increasing nets of positive elements after rescaling into the unit ball, so the equivalence covers the standard order definition, not only sequences.
- **Choice.** AC is stated explicitly because the concrete von Neumann algebra and Hilbert adjoint suppliers use it, and because AC implies the countable-choice hypothesis needed for the complex $L^2$ Hilbert theorem used to identify $\ell^2(\Gamma)$ as a Hilbert space. No group-element family, transversal, or basis family is selected.
- **Group conventions.** The right action is $(\rho_\Gamma(g)f)(h)=f(hg)$, so $\rho_\Gamma(g^{-1})\delta_e=\delta_g$. This convention is used in the faithfulness argument; the left and right regular operators commute.
