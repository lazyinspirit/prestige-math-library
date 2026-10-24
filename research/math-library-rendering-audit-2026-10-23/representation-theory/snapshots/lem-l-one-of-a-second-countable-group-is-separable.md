---
id: lem-l-one-of-a-second-countable-group-is-separable
kind: lemma
title: "L1 of a second-countable locally compact group is separable"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
deps:
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - def-left-haar-integral-and-left-haar-measure
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-second-countable-space
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
  - thm-second-countable-implies-lindelof
  - def-topology-basis-subbasis
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - def-hausdorff-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-countable
  - lem-countable-iff-surjection-from-n
  - lem-subset-of-countable
  - thm-countable-union-of-countable
  - thm-product-of-countable
  - def-rationals
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-rationals-countable
  - lem-q-and-irrationals-dense-r
  - cor-archimedean-reciprocal
  - lem-finite-powers-of-countable-sets-are-countable
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-countable-generators-yield-countable-set-algebras
  - def-algebra-of-subsets
  - def-borel-sigma-algebra
  - def-sigma-algebra
  - thm-generated-sigma-algebra-exists-and-is-minimal
  - def-measure
  - prop-measure-monotonicity
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - lem-finite-choice
dependency_level: 0
axiom_use: "Assume AC. The implication AC to DC to Countable Choice is used explicitly: Countable Choice supplies the Lindelof subcover, countability of the generated algebra and countable unions, and the final countable selection from Cc; the published L1-completeness and Cc-density supplier also states AC as a hypothesis. The local compact-cover witnesses, cell points and rational approximants require only finite choice. Step 4 defines its cover as the family of all qualifying base sets, so it makes no choice of neighborhoods indexed by all points of the compact set. No other use of choice is made."
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.D, Proposition 1.D.3, printed p. 40: the proof invokes separability of L1(G) for second-countable G without constructing a dense family; the countable construction is proved locally here."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part II, §10.1.1, printed p. 205, states Radon regularity, finiteness on compact sets, and density of Cc(G) in L1(G); §10.1.3, printed p. 206, again records Cc(G) as dense in L1(G). The countable-density construction is proved locally here."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact Hausdorff group with a fixed left Haar measure $\mu$ ([[def-second-countable-space]], [[def-left-haar-integral-and-left-haar-measure]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]]). Then $L^1(G,\mu;\mathbb C)$ is a separable Banach space. There is a countable Borel algebra $\mathcal A_0$ generating the Borel sigma-algebra of $G$ such that the $\mathbb Q(i)$-linear span of $\{\mathbf 1_A:A\in\mathcal A_0,\ \mu(A)<\infty\}$ is dense in $L^1(G)$. Moreover, the image of $C_c(G;\mathbb C)$ in $L^1(G)$ contains a countable dense subset.

## Facts & Assumptions

**Given:** AC, a second-countable locally compact Hausdorff group $G$, and a fixed left Haar measure $\mu$.

[F1] The left Haar measure is a Radon Borel measure and is finite on compact sets; $C_c(G;\mathbb C)\subseteq L^1(G)$ is dense, and $L^1(G)$ is complete under AC ([[def-left-haar-integral-and-left-haar-measure]], [[def-measure]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F2] A second-countable space has an at most countable basis; an LCH space has a basis of relatively compact open sets; every second-countable space is Lindelof under Countable Choice ([[def-second-countable-space]], [[def-topology-basis-subbasis]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[thm-second-countable-implies-lindelof]], [[def-countable-choice]]).

[F3] Compactness gives finite subcovers of ambient open covers of compact subsets, and is preserved by finite unions; compact subsets of a Hausdorff space are closed ([[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]], [[def-hausdorff-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F4] Finite powers of at most countable sets are at most countable; under Countable Choice, countable unions, subsets, and consequently finite sequences over countable sets are at most countable; a countable family of sets is contained in a countable algebra ([[def-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[thm-countable-union-of-countable]], [[thm-product-of-countable]], [[lem-finite-powers-of-countable-sets-are-countable]], [[lem-countable-generators-yield-countable-set-algebras]], [[def-algebra-of-subsets]], [[def-countable-choice]]).

[F5] For every $\epsilon>0$ there is a natural $k\ge1$ with $1/k<\epsilon$ ([[cor-archimedean-reciprocal]]). $\mathbb Q$ is countable and dense in $\mathbb R$. Every $z\in\mathbb C$ has unique coordinates $z=a+bi$ and $|z|=\sqrt{a^2+b^2}$. Hence $\mathbb Q(i)=\{q+ir:q,r\in\mathbb Q\}$ is countable, and it is dense in $\mathbb C$: approximate $a,b$ separately within $\epsilon/3$ by rationals, giving $|(a-q)+i(b-r)|\le |a-q|+|b-r|<\epsilon$ ([[def-rationals]], [[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-q-and-irrationals-dense-r]]).

[F6] AC implies DC and therefore Countable Choice; finite choices from a listed finite family of nonempty sets are provable in ZF ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[lem-finite-choice]]).

[F7] Measures are monotone, nonnegative integrals preserve pointwise order and nonnegative scalar multiplication, and the integral of $c\mathbf 1_E$ is $c\mu(E)$ for a measurable set $E$ and $c\ge0$, by the simple-integral definition. Measurable functions are closed under subtraction and modulus ([[prop-measure-monotonicity]], [[def-measure]], [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F8] The Borel sigma-algebra is generated by the open sets and is minimal among sigma-algebras containing them ([[def-borel-sigma-algebra]], [[def-sigma-algebra]], [[thm-generated-sigma-algebra-exists-and-is-minimal]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal B$ be an at most countable basis for $G$. The relatively compact open sets form a basis by [F2], so the family of all relatively compact open sets covers $G$. By Lindelofness and AC's implication of Countable Choice in [F6], it has an at most countable subcover; enumerate that nonempty subcover as $(V_n)_{n\in\mathbb N}$, repeating terms if it is finite. [F2, F6]

2.1 Put $K_n=\bigcup_{j\le n}\overline{V_j}$. Each closure is compact; an ambient open cover of $K_n$ has a finite subcover on each of the finitely many closures by [F3], and their finite union covers $K_n$. Thus $K_n$ is compact, and it is closed and Borel because $G$ is Hausdorff. The sequence increases and covers $G$. If $f\in C_c(G)$, compactness of $\operatorname{supp}f$ gives a finite subcover from $(V_n)$; taking the largest index in that subcover (or $n=0$ for empty support) shows $\operatorname{supp}f\subseteq K_n$ for some $n$. Each $K_n$ has finite Haar measure by [F1]. [F1, F3, step 1.1]

3.1 The family $\mathcal G=\mathcal B\cup\{K_n:n\in\mathbb N\}$ is countable by [F4]. Set $\mathcal A_0$ specifically to the algebra of finite Boolean combinations of $\mathcal G$. As in the countable-algebra supplier proof in [F4], enumerate $\mathcal G$ and let $\mathcal C_m$ be the finite algebra generated by its first $m$ terms. Then $\mathcal A_0=\bigcup_m\mathcal C_m$: every finite Boolean combination uses some finite prefix. These algebras increase, so their union is an algebra, and [F4] makes it countable. Its generators are Borel, and finite Boolean operations preserve Borel sets, so every member of $\mathcal A_0$ is Borel. Every open set is a union of basis members, and because $\mathcal B$ is countable this is a countable union; therefore $\sigma(\mathcal A_0)$ contains every open set. Conversely $\mathcal A_0$ consists of Borel sets, so minimality in [F8] gives $\sigma(\mathcal A_0)=\mathcal B(G)$. Each $K_n\in\mathcal A_0$ and has finite measure by step 2.1. [F1, F2, F4, F8, step 2.1]

4.1 Fix $f\in C_c(G)$ and a target $\eta>0$, and choose $n$ with $\operatorname{supp}f\subseteq K_n$ by step 2.1. If $\mu(K_n)=0$, then $f$ is zero as an $L^1$ class because it vanishes outside the null set $K_n$; the zero function is in the required span since $\varnothing\in\mathcal A_0$. Otherwise set $\delta=\eta/(4\mu(K_n))$. Let $\mathcal U_\delta$ be the family of all $U\in\mathcal B$ for which there exists $x\in K_n$ such that $|f(y)-f(x)|<\delta$ for every $y\in U$. Continuity and the basis property show that $\mathcal U_\delta$ covers $K_n$; compactness gives a finite subcover $U_1,\ldots,U_m$. For each $i$, choose a witness $x_i\in K_n$ for its defining property, and set $E_1=K_n\cap U_1$ and $E_i=(K_n\cap U_i)\setminus\bigcup_{j<i}U_j$ for $i>1$. These sets partition $K_n$, belong to $\mathcal A_0$, and have finite measure by [F7]. For each nonempty $E_i$, choose $y_i\in E_i$ and $q_i\in\mathbb Q(i)$ with $|q_i-f(y_i)|<\delta$; these are finitely many choices, justified by [F6] and density in [F5]. Then $g=\sum_{i:E_i\ne\varnothing} q_i\mathbf 1_{E_i}$ lies in the required span and in $L^1$, since it is measurable and bounded with support in the finite-measure set $K_n$. For $y\in E_i$, $|f(y)-f(y_i)|<2\delta$, hence $|f(y)-g(y)|<3\delta$; outside $K_n$ both functions vanish. Thus $|f-g|\le3\delta\mathbf 1_{K_n}$ and [F7] gives $\|f-g\|_1\le3\delta\mu(K_n)=3\eta/4<\eta$. [F1, F3, F5, F6, F7, step 2.1, step 3.1]

5.1 Let $\mathcal E=\{A\in\mathcal A_0:\mu(A)<\infty\}$ and let $D_0$ consist of all finite $\mathbb Q(i)$-linear combinations of $\mathbf 1_A$ with $A\in\mathcal E$. The family $\mathcal E$ is countable as a subset of $\mathcal A_0$; the alphabet $C=\mathbb Q(i)\times\mathcal E$ is at most countable by [F4,F5]. Every finite power $C^m$, including the one-point $C^0$, is at most countable by [F4]. AC gives Countable Choice by [F6], so [F4] makes $\bigcup_{m\in\mathbb N}C^m$, the set of finite lists of coefficient/set pairs, at most countable. Its image under the finite-sum map is $D_0$, so $D_0$ is countable. Each generator indicator is integrable because its set has finite measure, and finite linear combinations remain in $L^1$. For $h\in L^1(G)$ and $\epsilon>0$, choose $f\in C_c(G)$ with $\|h-f\|_1<\epsilon/2$ by [F1], then choose $d\in D_0$ with $\|f-d\|_1<\epsilon/2$ by step 4.1. The triangle inequality gives $\|h-d\|_1<\epsilon$, so $D_0$ is dense in $L^1(G)$. [F1, F4, F5, F6, step 3.1, step 4.1]

6.1 The set $D_0\times\mathbb N_{>0}$ is countable by [F4]. For each $(d,k)$ in it, density of $C_c(G)$ in $L^1(G)$ gives a nonempty set of $c\in C_c(G)$ with $\|c-d\|_1<1/k$. AC's implication of Countable Choice [F6] selects one such $c_{d,k}$ for every pair. The resulting set of functions is countable; for any $h\in L^1(G)$ and $\epsilon>0$, choose $d\in D_0$ with $\|h-d\|_1<\epsilon/2$ and then $k$ with $1/k<\epsilon/2$. It follows that $\|h-c_{d,k}\|_1<\epsilon$, so their image in $L^1(G)$ is a countable dense subset contained in the image of $C_c(G)$. [F1, F4, F5, F6, step 5.1]

7.1 Step 5.1 proves separability of $L^1(G)$, and [F1] gives its completeness, so it is a separable Banach space. Steps 3.1 and 5.1 give the asserted generating Borel algebra and dense $\mathbb Q(i)$-linear span, while step 6.1 gives the countable dense subset from $C_c(G)$. [F1, step 3.1, step 5.1, step 6.1] ∎
