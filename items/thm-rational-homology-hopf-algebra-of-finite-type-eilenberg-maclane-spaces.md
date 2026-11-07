---
id: thm-rational-homology-hopf-algebra-of-finite-type-eilenberg-maclane-spaces
kind: theorem
title: "Rational homology of finite-type Eilenberg\u2013Mac Lane spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-dold-kan-equivalence-for-simplicial-modules
- thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex
- lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
- lem-relative-hurewicz-comparison-through-a-choice-free-weak-model
---

## Statement

Let $A$ be a finitely generated abelian group and $n\ge1$. For the explicit simplicial abelian group $\Gamma(A[n])$ of the Dold–Kan inverse, addition induces a natural Hopf algebra isomorphism
$$H_*(|\Gamma(A[n])|;\mathbb Q)\cong\operatorname{Sym}_{\mathrm{gr}}((A\otimes\mathbb Q)[n]),$$
whose generator is the Hurewicz image of $A\otimes\mathbb Q$. The graded linear dual of the homology Hopf algebra is the graded symmetric algebra on $(A\otimes\mathbb Q)^*$ in degree $n$, and its primitives are precisely that degree-$n$ dual. All constructions use only finite choices for the one fixed input and degree.

## Statement references

[[thm-dold-kan-equivalence-for-simplicial-modules]]

[[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]]

[[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]

## Facts & Assumptions

**Given:** A finitely generated abelian group $A$ and integer $n\ge1$.

[F1] The Dold–Kan equivalence gives the explicit inverse $\Gamma$ and identifies the normalized chains. [[thm-dold-kan-equivalence-for-simplicial-modules]]

[F2] The first-quadrant column spectral sequence converges with a finite filtration in each total degree. [[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]]

[F3] Weak equivalences induce integral homology isomorphisms without choice. [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[F4] The first nonzero homotopy and homology groups of a simply connected CW complex agree by the actual relative Hurewicz map. [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]

## Proof

**Proof technique:** Simplicial bar spectral sequence and finite Koszul resolutions.

1.1 For n=1, the simplicial classifying space BA is a simplicial abelian group whose normalized chain complex is A in degree 1 and zero in all other degrees: a normalized simplex in degree greater than one has all deletion faces zero, forcing all entries to vanish. The explicit Dold–Kan equivalence therefore identifies BA naturally with Γ(A[1]). The normalized bar of the discrete group A is a free ZA-resolution, with its extra-degeneracy contraction. Choose a finite decomposition A=Z^r⊕⊕_i Z/d_i. For Z use the two-term resolution Z[Z] --(t−1)→ Z[Z]. For Z/d use the periodic rank-one resolution with alternating maps g−1 and N=1+g+⋯+g^(d−1). These are exact by direct coefficient comparison. Their finite tensor product is a resolution, since the displayed coefficient-sum contractions split the resolutions over Z. Equivariant comparisons with the bar are built recursively on free generators using those contractions, and the corresponding recursive homotopies make them inverse. After tensoring with Q, each cyclic torsion factor is acyclic above degree zero because d is invertible, and each Z-factor contributes one degree-one class. The shuffle on the product of the Z bar complexes makes these classes anticommute; their exterior monomials form a basis. They are the images of the group generators under Hurewicz. Naturality and absence of dependence on the chosen basis follow because the canonical algebra map from A⊗Q, defined by Hurewicz and multiplication, is an isomorphism for every such finite decomposition. The diagonal A→A⊕A takes each generator to its sum in the two summands, so every degree-one generator is primitive. [F1, construct, algebra]

2.1 Suppose the claim known for G=Γ(A[n]), with n fixed. Form the bisimplicial one-sided bar B_(p,q)=G_q^p and its principal contractible resolution E_(p,q)=G_q^(p+1), with E→B given by successive differences. Its diagonal is a degreewise-surjective map of simplicial abelian groups, with kernel G; the finite simplicial horn fillers establish the homotopy long exact sequence, while insertion of the identity contracts the diagonal E. Consequently |diag B| has sole positive homotopy group A in degree n+1. To construct a natural integral-homology equivalence, put j=n+1 and apply the reduced free simplicial abelian group to the singular complex of |diag B|, with normalized chain complex C. Relative Hurewicz gives H_i(C)=0 for i<j and H_j(C)=A. Let T be the good truncation C_i for i<j, C_j/im(d_(j+1)) in degree j, and zero above j. The natural maps from the singular complex to Γ(T), and from Γ(A[j]) to Γ(T) via the kernel identification A=ker(T_j→T_(j−1)), are weak equivalences by Dold–Kan and the finite horn calculation for simplicial abelian groups. Applying weak-equivalence invariance of integral homology gives the canonical zigzag; it needs no chosen inverse. The natural diagonal-to-total chain equivalence, using representable-bisimplex contractions, identifies its chains with the horizontal–vertical bar double complex. [F1, F2, F3, F4, construct, algebra, step 1.1]

3.1 Filter that double complex by horizontal degree p. For every fixed total degree, the filtration is finite. As H_*(G;Q) has finite-dimensional graded pieces, the finite shuffle and Alexander–Whitney prism give a natural chain equivalence from singular chains of G^p to the tensor product of p singular chain complexes. For one specified total degree N, build a finite-dimensional free chain complex mapping to the singular chains and inducing homology isomorphisms through N: successively add finitely many cycles representing a basis of each finite-dimensional homology, then add finitely many chains bounding a basis of the resulting kernel. At each stage the present source is finite-dimensional, so the kernel is finite-dimensional. The mapping cone is acyclic through N; filtering its tensor with another nonnegative free complex by the second factor and eliminating the highest nonzero component of one given cycle proves tensoring preserves this N-range equivalence. Iterating gives H_*(G^p;Q) ≅ H_*(G;Q)^{⊗p} through N. Every choice concerns one finite list of witnesses for this one N; no complement of an arbitrary infinite-dimensional vector space is selected. The d1 differential is the augmented algebra bar differential for H=Sym_gr(V[n]), V=A⊗Q. Hence E2 is Tor_H(Q,Q). The bar shuffle makes the spectral sequence multiplicative; the only signs are the Koszul signs from horizontal degree and internal grading. [F1, F2, construct, algebra, step 2.1]

4.1 Compute this Tor for a single finite homogeneous basis of V. If n is even, H is a polynomial algebra on even variables x_i; tensor the two-term Koszul resolutions H⊗Λ(e_i), d(e_i)=x_i. Exactness follows one variable at a time by coefficient division. Modulo the augmentation ideal, the resulting Tor algebra is exterior on the bar classes [x_i], each in bidegree (1,n). If n is odd, H is exterior on odd variables x_i. For one variable use the free resolution with basis e^[j] in homological degree j and d(e^[j])=x e^[j−1], d(e^[0])=0; exactness is immediate since multiplication by x has kernel equal to its image. Tensor the finitely many such resolutions. The shuffle multiplication on Tor is the divided-power multiplication e^[a]e^[b]=binom(a+b,a)e^[a+b]. Over Q it is the ordinary polynomial algebra on e^[1]. In both cases, after totalizing the signs, E2 is the free graded-commutative algebra on V in total degree n+1. Comparison with the bar resolution is by the same recursive free-generator and contracting-homotopy construction as in step 1; its length-one representatives are the actual bars [x_i]. [F1, F2, construct, algebra, step 3.1]

5.1 Every length-one class is a permanent cycle: a differential d_r for r≥2 has target negative filtration p=1−r. The bar spectral sequence is multiplicative, so every monomial in those classes survives. As those monomials form all of E2, there are no nonzero higher differentials. Let σ:V→H_(n+1)(|diag B|;Q) be the natural edge map of the length-one bars. These classes are primitive under addition because the bar construction is natural and additive in G, and the diagonal on a length-one Hurewicz generator has only the two endpoint terms. The induced map Sym_gr(V[n+1])→H_*(|diag B|;Q) is an isomorphism: its associated graded is the E∞ isomorphism; in each total degree the horizontal filtration is finite, so injectivity and surjectivity lift by finite descending induction. There are no extension ambiguities in this argument. Under the homotopy exact sequence, the bar edge map σ carries the homotopy suspension of a∈A to its homology suspension; this follows from the prism of the one-simplex [a] and is natural for each represented sphere. Thus σ is exactly Hurewicz under the canonical identification π_(n+1)=A. Induction proves the homology statement for each fixed n. [F1, F2, construct, algebra, step 4.1]

6.1 Each homogeneous part is finite-dimensional. Transpose multiplication and coproduct, using the finite-dimensional tensor-duality isomorphism in each bidegree. A graded linear functional is primitive precisely when it vanishes on products of positive-degree classes. Since the indecomposables of a free graded symmetric algebra are exactly V[n], the primitive subspace of the graded dual is precisely V* in degree n. Choosing a basis for this one finite-dimensional vector space identifies the graded dual algebra with Sym_gr(V*[n]); this identification is the canonical map obtained from its primitives and is therefore independent of that choice. All constructions use finitely many choices for one fixed total degree or the one fixed finite decomposition; no family of choices is selected across n. Retain the construction of step 5.1. [F1, F2, construct, algebra, discharge-construct, step 5.1] ∎
