---
id: lem-gcr-kernel-and-mackey-borel-characterizations
kind: lemma
title: "GCR kernel and Mackey Borel characterizations"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
deps:
  - lem-primitive-ideals-have-standard-borel-quotient-norm-codings
  - lem-faithful-essential-pure-state-orbits-obstruct-countable-separation
  - lem-local-analytic-separation-and-saturated-borel-quotients
  - lem-c-star-state-gns-purity-and-polish-state-space
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators
  - def-von-neumann-algebra-and-commutant
  - def-type-i-factor-representation-and-type-i-group
  - def-axiom-of-choice
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - lem-compositions-with-a-compact-operator-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - cor-finite-dimensional-subspaces-are-closed
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - def-hilbert-direct-sum-of-unitary-representations
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-hilbert-orthogonal-projection
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "AC is explicit; inherited supplier choice and the exact local selections are identified in the Proof. No global selector of irreducible equivalence classes is asserted."
verification:
  precheck: pass
sources:
  references:
    - title: "Bruce Blackadar, Operator Algebras, complete author text"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "IV.1.2.2–5 and IV.1.3.5–8 printed346–349, complete proofs read; elementary amplification, equal-kernel uniqueness and GCR-to-factor-type-I components are supplied locally."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Theorem5.2.1, Lemmas5.2.2 and5.2.5, Proposition5.2.8, printed141–144; complete passages read; excision algebra and the nonunital step are supplied locally."
---

## Statement

Assume AC. For separable C*-algebra $A$, the following are equivalent: every irreducible image contains nonzero compacts (GCR); the primitive-kernel map is injective, hence a homeomorphism onto $\operatorname{Prim}(A)$; the Mackey dual is countably separated; the Mackey dual is standard Borel. Here $\widehat A$ consists of nondegenerate irreducible classes, its usual topology is the pure-state quotient topology, and its Mackey structure is the fixed-carrier representation quotient defined in [[lem-local-analytic-separation-and-saturated-borel-quotients]]. In these cases Mackey Borel sets equal topology-generated Borel sets. Moreover every nonzero nondegenerate factor representation of a GCR algebra, on an arbitrary Hilbert carrier, generates a type-I factor: an algebra containing a nonzero projection $p$ with $pMp=\mathbb Cp$. The converse factor-type-I-to-GCR is neither asserted nor cited in this lemma.

## Facts & Assumptions

**Given:** The Statement hypotheses and AC.

[F1] Primitive kernels have standard Borel quotient-norm codes, the pure-state kernel map is continuous and open, and proper closed prime ideals are primitive ([[lem-primitive-ideals-have-standard-borel-quotient-norm-codings]]).

[F2] The faithful-essential category obstruction proves both noninjectivity and failure of countable separation when GCR fails. The compact-ideal and arbitrary-multiplicity amplification arguments needed below are proved locally in steps 1.1, 1.2 and 2.1 ([[lem-faithful-essential-pure-state-orbits-obstruct-countable-separation]]).

[F3] Saturated Borel images under a class-fibre kernel map are Borel, and the pure-state/fixed-carrier representation quotient structures agree ([[lem-local-analytic-separation-and-saturated-borel-quotients]]).

[F4] Pure GNS and vector states, internal-unitary transport, bounded density and exact transitivity have local proofs ([[lem-c-star-state-gns-purity-and-polish-state-space]], [[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]]).

[F5] Ideal approximate units, C*-quotients, positive calculus and finite-rank density are proved locally ([[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]], [[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]], [[lem-c-star-positive-calculus-and-order-estimates]], [[cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators]]). Von Neumann algebras and minimal projections have the conventions of [[def-von-neumann-algebra-and-commutant]], [[def-type-i-factor-representation-and-type-i-group]].

[F6] Under Countable Choice, a positive nonzero compact operator has an isolated nonzero eigenvalue of finite multiplicity; composing a compact operator with a bounded operator preserves compactness, and norm limits of compact operators are compact. Finite-dimensional subspaces are closed and have finite orthonormal bases. A separable Hilbert space with a dense sequence has a finite or countably infinite orthonormal basis ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-compositions-with-a-compact-operator-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[cor-finite-dimensional-subspaces-are-closed]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]]).

[F7] Under Countable Choice every closed Hilbert subspace has an orthogonal decomposition and orthogonal projection ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]). Hilbert direct sums are complete, their coordinate copies are orthogonal, and finite-coordinate vectors have dense span ([[def-hilbert-direct-sum-of-unitary-representations]]). AC supplies Countable Choice for [F6] and all Hilbert-space supplier hypotheses. The notation $E\otimes L$ below is realized explicitly as a Hilbert direct sum of copies of $L$ indexed by an orthonormal basis of $E$.

[A1] AC supplies the declared supplier choices and local basis/ideal witnesses ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The Statement hypotheses and Facts.

1.1 Let $D\subseteq\mathcal B(E)$ be a nonzero irreducible image of a separable C*-algebra. For every nonzero $\xi$, the closure of $D\xi$ is a nonzero reducing subspace, hence all of $E$; applying a countable dense algebra family to $\xi$ shows that $E$ is separable. Its commutant is scalar: a nonscalar self-adjoint $S\in D'$ would, by [F5], have two disjoint nonzero continuous spectral cutoffs; their operators commute with $D$ and have orthogonal nonzero ranges, so the closure of either range is a proper nonzero invariant subspace. Real and imaginary parts then give $D'=\mathbb C I$ and $D''=\mathcal B(E)$. If $D$ contains a nonzero compact $x$, then $t=x^*x\in D$ is positive, compact and nonzero. By [F5,F6], an isolated nonzero spectral value of $t$ yields a nonzero finite-rank projection $p=f(t)\in D$, with the cutoff chosen to vanish at zero. The corner $pDp$ is norm closed: inside the closed algebra $D$ it is defined by the closed equation $d=pdp$. Bounded density [F4] approximates every operator on $pE$ by this corner in norm, since convergence on a finite orthonormal basis controls the operator norm. Thus $pDp=\mathcal B(pE)$ and contains a rank-one projection $e$ onto a unit vector $\xi$. For $a,b\in D$, $aeb^*$ is the rank-one map $v\mapsto\langle v,b\xi\rangle a\xi$. The density of $D\xi$ gives all rank-one maps by norm limits; finite-rank density [F5] gives $\mathcal K(E)\subseteq D$. Compacts form a closed two-sided ideal here: compositions preserve compactness by [F6], and closure follows from its norm-limit assertion. In a faithful irreducible representation of $B$, their preimage is therefore a closed ideal $I\cong\mathcal K(E)$. [F4, F5, F6, A1, algebra]

1.2 We prove the required amplification for every nonzero nondegenerate representation $R:\mathcal K(E)\to\mathcal B(K)$, allowing arbitrary $K$. Choose an orthonormal basis $(v_i)_{i\in J}$ of the nonzero separable $E$, indexed from zero, and put $e_{ij}v=\langle v,v_j\rangle v_i$. The finite initial sums $p_n=\sum_{i\in J,\ i\le n}e_{ii}$ form a positive contractive two-sided approximate unit: $p_nv\to v$ because $p_n$ fixes the increasing finite basis spans, their union is dense, and $\|p_n\|\le1$, the two norm limits follow first for rank-one maps and then for all compacts by finite-rank density. Contractivity and nondegeneracy imply $R(p_n)\to I_K$ strongly, first on $R(\mathcal K(E))K$ and then on its dense span. Put $L=R(e_{00})K$. The maps $R(e_{i0})$ are isometries from $L$ onto the mutually orthogonal ranges of $R(e_{ii})$, since $e_{0i}e_{i0}=e_{00}$ and $e_{i0}e_{0i}=e_{ii}$. Their sum defines an onto unitary from $\widehat\bigoplus_{i\in J}L$ to $K$, and $L\ne0$ because these ranges exhaust $K$. Denote this sum model by $E\otimes L$. The matrix-unit relations give $R(e_{ij})=e_{ij}\otimes I_L$. For any $T\in\mathcal B(E)$, its scalar matrix acts boundedly on this model: on a finite-coordinate vector, expand its finitely many $L$-components in a finite orthonormal basis of their span; the norm estimate on each scalar column gives $\|T\otimes I_L\|\le\|T\|$, and testing $(\alpha_i\ell)_i$ for a fixed unit $\ell\in L$ gives equality. Norm approximation by finite matrix compressions extends the formula $R(a)=a\otimes I_L$ to every compact $a$. An operator commuting with all $e_{ii}\otimes I_L$ is block diagonal, and commuting with the $e_{ij}\otimes I_L$ forces all its diagonal blocks to be one $Q\in\mathcal B(L)$; thus $R(\mathcal K(E))'=I_E\otimes\mathcal B(L)$. Conversely, the blocks of any operator commuting with this last algebra commute with every operator on $L$, hence are scalars: commuting with each rank-one projection makes each line an eigenspace, and sums of two independent vectors make the scalar constant. Testing on $(\alpha_i\ell)_i$ makes this scalar matrix a bounded $T\in\mathcal B(E)$. Therefore $R(\mathcal K(E))''=\mathcal B(E)\otimes I_L$. In particular $R$ is irreducible exactly when $\dim L=1$, so the irreducible representation of $\mathcal K(E)$ is unique up to unitary equivalence. [F5, F6, F7, A1, construct]

2.1 Suppose irreducible $\tau(A)$ contains a nonzero compact and put $B=A/\ker\tau$. Step 1.1 gives its elementary ideal $I\cong\mathcal K(E)$. Every other faithful irreducible $\sigma$ of $B$ is nonzero on $I$. The closure of $\sigma(I)H$ is a nonzero reducing subspace for $\sigma(B)$, hence all of $H$. Thus the restriction to $I$ is nondegenerate, and its positive contractive approximate unit satisfies $\sigma(e_t)\to I_H$ strongly by the dense-span argument of step 1.2. For $b\in B$, $be_t\in I$ and $\sigma(be_t)\to\sigma(b)$ strongly. Consequently the restriction and the full representation have the same commutant, so the restriction is irreducible. Step 1.2 makes the restrictions of $\tau$ and $\sigma$ equivalent; their intertwining unitary also intertwines every $b\in B$ by these same strong limits. Hence equal primitive kernels under GCR give equivalent irreducibles. The elementary ideal is taken in $A/\ker\tau$, which avoids any assumption on arbitrary representations of its preimage in $A$. [F4, F5, step 1.1, step 1.2, algebra]

2.2 Now let $\rho$ be a nonzero nondegenerate factor representation, with $M=\rho(A)''$ and $J=\ker\rho$. The support of a represented ideal lies in $M$ as the strong limit of its approximate unit, and in $M'$ because its range reduces $\rho(A)$. Thus it is a central projection, either0 or1. Two nonzero quotient ideals with zero product would have two nonzero orthogonal such supports, impossible in a factor. Hence $J$ is proper and prime; [F1] makes it primitive. Choose a separate faithful irreducible $\tau$ of $B=A/J$. GCR passes to this quotient, so step 1.1 gives an elementary ideal $I\cong\mathcal K(E)$ in $B$. The original faithful factor representation of $B$ is nonzero on $I$; its support is1, so $\rho|I$ is nondegenerate. This does not turn $\rho$ into an irreducible representation. [F1, F5, F7, step 1.1, A1, algebra]

3.1 Under GCR the kernel map $\kappa:\widehat A\to\operatorname{Prim}(A)$ is bijective by step 2.1. The pure-state class map $q:P(A)\to\widehat A$ is onto, and its equivalence fibres are internal-unitary orbits by [F4]. Its quotient topology makes it continuous and open, since the saturation of a pure-state open set is the union of its unitary translates. The composite $\kappa q$ is continuous and open by [F1]. Surjectivity and the quotient property make $\kappa$ continuous; if $V$ is open in $\widehat A$, $(\kappa q)(q^{-1}V)=\kappa(V)$ is open. Thus $\kappa$ is a homeomorphism, not merely a continuous bijection. By [F3], its class-fibre saturated Borel images identify the Mackey quotient with the standard primitive-code Borel structure, which [F1] identifies with topology Borel sets. Hence the dual is standard Borel and countably separated. [F1, F3, F4, step 2.1, algebra]

4.1 If the kernel map is injective or the Mackey dual is countably separated, then $A$ is GCR: otherwise [F2] gives inequivalent irreducibles with one primitive kernel and also gives a failure of countable separation. A standard Borel space is countably separated, since a countable basis of a Polish presentation separates its points. Combining these implications with step 3.1 proves all four equivalences and the Borel equality. For $A=0$, there are no nonzero irreducible or factor representations, the dual and primitive spaces are empty standard Borel spaces, and all clauses hold. [F1, F2, F3, step 3.1, algebra]

5.1 By the explicit matrix-unit proof of step 1.2, $\rho|I$ is $a\mapsto a\otimes I_L$ on $E\otimes L$ for an arbitrary nonzero Hilbert multiplicity space $L$. Its generated algebra is $B(E)\otimes I_L$. Moreover $\rho(I)''=\rho(B)''$: ideal inclusion gives one direction, and $\rho(be_t)\to\rho(b)$ strongly gives the other. A rank-one projection on $E$ tensored with $I_L$ is therefore a nonzero minimal projection of $M$. Thus every factor representation is type I, with no separability restriction on its multiplicity carrier and no appeal to the cited Glimm converse. [F5, F7, step 1.2, step 2.2, algebra] ∎
