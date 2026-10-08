---
id: lem-faithful-essential-pure-state-orbits-obstruct-countable-separation
kind: lemma
title: "Faithful essential pure-state orbits obstruct countable separation"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - lem-c-star-state-gns-purity-and-polish-state-space
  - lem-pure-state-excision-and-essential-orbit-density
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - thm-minimal-c-star-unitization
  - thm-baire-category-for-complete-metric-spaces
  - thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable
  - def-polish-space
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - lem-measurable-gram-schmidt-and-constant-field-trivializations
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-mackey-borel-structure-and-countable-separation
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "AC is explicit; inherited supplier choice and the exact local selections are identified in the Proof. No global selector of irreducible equivalence classes is asserted."
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Theorem5.2.1, Lemmas5.2.2 and5.2.5, Proposition5.2.8, printed141–144; complete passages read; excision algebra and the nonunital step are supplied locally."
---

## Statement

Assume AC. Let $B$ be a separable primitive C*-algebra admitting a faithful irreducible representation with no nonzero compact operators in its image. Here a faithful pure state means one whose GNS representation is faithful. These states form a nonempty Polish $G_\delta$ subspace $F$ of $P(B)$. Every orbit under $U(\widetilde B)$ is dense, meager and $F_\sigma$ in $F$; every invariant Borel subset is meager or comeager. No countable invariant Borel family separates these orbits, and there are inequivalent faithful irreducible representations. Consequently, for any separable non-GCR C*-algebra $A$, its primitive-kernel map is not injective and its Mackey dual is not countably separated. For C*-algebras the Mackey structure means the quotient Borel structure of nondegenerate irreducible representations on fixed finite or countably infinite Hilbert carriers, with pointwise operator-matrix coordinates; the group version is [[def-mackey-borel-structure-and-countable-separation]].

## Facts & Assumptions

**Given:** The Statement hypotheses and AC.

[F1] Pure-state GNS representations and the weak-star Polish pure-state space are supplied by [[lem-c-star-state-gns-purity-and-polish-state-space]].

[F2] Pure-state excision and essential vector-state density are proved in [[lem-pure-state-excision-and-essential-orbit-density]]; internal-unitary transport and the norm-distance2 criteria are proved in [[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]].

[F3] Positive cutoffs, closed quotient algebras, approximate units and minimal unitizations have local proofs ([[lem-c-star-positive-calculus-and-order-estimates]], [[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]], [[thm-minimal-c-star-unitization]]).

[F4] Baire's theorem holds for nonempty complete metric spaces, and $G_\delta$ subspaces of Polish spaces are completely metrizable with their trace topology ([[thm-baire-category-for-complete-metric-spaces]], [[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]], [[def-polish-space]]).

[F5] Positive compact operators have finite-rank nonzero spectral cutoffs, finite-rank operators are norm dense in Hilbert compacts, and finite-dimensional inner-product spaces have orthonormal bases ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F6] Countable fundamental Gram coefficients give Borel orthonormal frames and dimension strata, with transported matrix coefficients ([[lem-measurable-gram-schmidt-and-constant-field-trivializations]], [[def-measurable-hilbert-field-from-a-countable-fundamental-family]]). The relevant quotient Borel convention is [[def-mackey-borel-structure-and-countable-separation]].

[A1] AC is explicit and supplies the choices, bases and supplier hypotheses ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The Statement hypotheses and Facts.

1.1 We first prove the elementary-ideal facts used here. If an irreducible image $D\subseteq B(H)$ contains a nonzero compact, choose a nonzero positive compact $t\in D$. An isolated nonzero spectral value gives a finite-rank projection $p\in D$ by [F3,F5]. Bounded density [F2] makes $pDp$ dense in $B(pH)$; this finite-dimensional corner is norm closed, hence is all of $B(pH)$. In particular a rank-one projection $e$ lies in $D$. Irreducibility makes $D\xi$ dense for its unit range vector $\xi$, so the products $aeb^*$ and norm closure give every rank-one operator and all $\mathcal K(H)\subseteq D$. If the original representation is faithful, the preimage $I$ of these compacts is therefore an elementary ideal isomorphic to $\mathcal K(H)$. [F2, F3, F5, algebra]

1.2 Choose a countable dense family of positive contractions $a_n$ and positive rationals $r$, retaining every nonzero cutoff $c=(a_n-r)_+$. Their generated ideals are cofinal among nonzero closed ideals: given positive $b\in J$ of norm1, choose $\|a_n-b\|<\delta<1/4$ and $\delta<r<1/2$. The image of $a_n$ in $B/J$ has norm below $r$, so $c\in J$, while $\|a_n\|>3/4$ makes $c\ne0$. Enumerate these cutoffs as $c_k$, and choose a countable dense star algebra $D$. For a pure state $\phi$, $\pi_\phi$ is faithful precisely when for every $k$ some $d\in D$ has $\phi(d^*c_k^2d)>0$: cyclicity proves detection of each nonzero $\pi_\phi(c_k)$, and cofinality detects any nonzero kernel. These are countably many open unions of strict point-evaluation tests. Hence $F$ is $G_\delta$ in $P(B)$ and is nonempty and Polish by [F1,F4]. [F1, F3, F4, A1, algebra]

2.1 Any nondegenerate representation $\rho$ of $\mathcal K(E)$, with $E$ separable, has the matrix-unit form $E\otimes L$. Choose an orthonormal basis of $E$, fix its matrix units $e_{ij}$ and put $L=\rho(e_{00})K$. Nondegeneracy and the finite-rank approximate unit give $\sum_i\rho(e_{ii})=I$ strongly. The maps $\rho(e_{i0})$ identify $L$ isometrically with the orthogonal ranges $\rho(e_{ii})K$; their sum defines an onto unitary $E\otimes L\to K$, carrying $\rho(e_{ij})$ to $E_{ij}\otimes I_L$. This construction works for arbitrary $L$; finite coordinate families and an orthonormal basis of their finite-dimensional span give $\|A\otimes I_L\|=\|A\|$. Commuting with the matrix units gives commutant $I_E\otimes B(L)$, so irreducibility is equivalent to $\dim L=1$. For an ideal $I\triangleleft B$ represented irreducibly and nontrivially, the support of $\rho(I)K$ is a nonzero commuting projection, hence $I_K$. Its approximate unit converges strongly to $I_K$; for $a\in B$, $\rho(ae_t)\to\rho(a)$ strongly. Thus the ideal restriction has the same commutant as the ambient representation. If any faithful irreducible of $B$ had compacts, step 1.1's elementary ideal would make every faithful irreducible have compacts by this argument. Therefore all faithful irreducibles in the present hypothesis are essential. [F1, F2, F3, F5, step 1.1, A1, algebra]

3.1 Every pure vector state of a faithful irreducible lies in $F$. By step 2.1 that representation is essential; [F2] makes its vector states dense in $P(B)$, even when avoiding any specified finite-dimensional space. Internal-unitary transport in [F2] identifies them with the entire orbit of its cyclic state. Therefore every orbit in $F$ is dense in $F$. [F1, F2, step 2.1, step 1.2]

4.1 Fix $\phi\in F$ and a countable norm-dense family $u_j\in U(\widetilde B)$; such a family exists because the unitary group is a subspace of a separable metric algebra. The orbit is exactly $\bigcup_jC_j$, where $C_j=\{\psi\in F:\|\psi-\phi\circ\operatorname{Ad}u_j\|\le1\}$. Each $C_j$ is weak-star closed, since the norm of a functional is a supremum of point evaluations on a countable norm-dense unit ball. The norm-distance criterion [F2] puts $C_j$ inside the orbit, while norm approximation of an implementing unitary gives $\|\phi\circ\operatorname{Ad}u-\phi\circ\operatorname{Ad}u_j\|\le2\|u-u_j\|$, proving the reverse inclusion. In any nonempty relative open set in $F$, essential vector-state density for the faithful representation of the centre state of $C_j$ gives a unit vector orthogonal to that centre vector. Its pure state lies in $F$ and that open set, at norm distance2 from the centre by [F2]. Thus every $C_j$ has empty interior and is nowhere dense; the orbit is meager and $F_\sigma$. [F2, step 2.1, step 3.1, A1, algebra]

5.1 Every Borel subset of a topological space has the Baire property: sets differing from an open set by a meager set form a sigma-algebra, because complements introduce only the nowhere dense boundary of the open set and countable unions introduce only countable unions of meager errors. Let an invariant Borel $E\subseteq F$ be nonmeager. Its Baire property makes it comeager in some nonempty open $U$. Since each orbit is dense, the homeomorphic translates of $U$ cover $F$; second countability gives a countable subcover. Invariance makes $E$ comeager in every translated open set, so its complement is meager in $F$. Thus every invariant Borel set is meager or comeager. For a purported countable separating invariant Borel family, intersect the comeager side of each member. Baire makes this intersection comeager and nonempty, and all of its points have one membership code, hence lie in one orbit. Step 4.1 makes that orbit meager, a contradiction. In particular $F$ cannot be a single orbit, so there are inequivalent faithful irreducibles. [F4, step 3.1, step 4.1, algebra]

6.1 The class map on pure states has Borel representation lifts, which suffices to pull back Mackey sets. For a countable dense star algebra $(d_i)$, the GNS fundamental vectors $[d_i]$ have Gram entries $\phi(d_j^*d_i)$, continuous in $\phi$. The least-active-index Gram–Schmidt formulas consist of countable selections, division on nonzero strata and square roots of nonnegative Borel functions. Thus the dimension strata and every matrix entry of $\pi_\phi(d)$ in the resulting fixed finite or countable carrier are Borel. This is the pointwise frame construction of [F6]; it applies on the standard Borel pure-state base (one may use any finite Dirac measure, as its frame conclusions hold at every point). It follows that any class set Borel in the representation-space quotient pulls back to an invariant Borel subset of $F$. Therefore that quotient is not countably separated. [F1, F6, step 1.2, step 5.1, A1, algebra]

7.1 If separable $A$ is not GCR, choose an irreducible image with no compacts and pass to $B=A/\ker\pi$. This is a separable primitive algebra with faithful essential irreducible representation. Step 5.1 gives inequivalent faithful irreducibles of $B$; pulling them back gives two inequivalent irreducibles of $A$ with the same kernel. A countable separating Mackey family for $A$ would, by the Borel GNS construction of step 6.1 applied to the quotient and precomposition with its quotient map, restrict to a separating invariant Borel family on $F$, contradicting step 5.1. This proves both stated consequences without using the factor-type-I-to-GCR citation. [F3, step 5.1, step 6.1, algebra] ∎
