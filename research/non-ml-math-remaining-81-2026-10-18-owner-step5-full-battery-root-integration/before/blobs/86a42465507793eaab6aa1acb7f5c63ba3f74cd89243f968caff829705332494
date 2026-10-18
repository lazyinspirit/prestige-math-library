---
id: lem-affine-de-quivers-have-exponentially-many-indecomposables
kind: lemma
title: "Explicit affine D and E flag families give exponentially many indecomposables"
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - lem-finite-field-schur-descent-and-restriction
  - lem-finite-dynkin-quiver-reflection-classification
  - lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves
  - lem-grassmannian-standard-affine-charts
  - cor-grassmannian-smooth-irreducible-dimension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§§3.2–3.3 and Appendix A.2–A.4; the local proof supplies the finite-field and multiplicity details"
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§2, Dynkin quivers; §§4–7, directed Hall products and simple-word generation"
---

## Statement

Let $Q$ have underlying graph an affine tree of type
$\widetilde D_n$ ($n\ge4$), $\widetilde E_6$, $\widetilde E_7$ or
$\widetilde E_8$, with any orientation, over $k=\mathbb F_q$.
Let $\delta$ be its primitive positive null vector. There are constants
$c>0,m_0$ such that for every $m\ge m_0$ the category has at least
$cq^m/m$ pairwise nonisomorphic indecomposable representations of dimension
$m\delta$. All its representations are nilpotent, since the underlying
graph is a tree. The construction uses only partial flags, finite-field
descent and source/sink reflection, not a classification of arbitrary
quiver indecomposables.

For $\widetilde D$, $\delta$ has value $2$ along the central chain and
$1$ on its four outer leaves. For $\widetilde E$, use the star with arm
types $(p,q,r)=(3,3,3),(2,4,4),(2,3,6)$, respectively. The central value is
$N=3,4,6$, and the arm values, from the outside inward, are
$N/s,2N/s,\ldots,(s-1)N/s$ for an arm of type $s$.

## Facts & Assumptions

**Given:** A finite field and an oriented affine D or E tree, with the
stated dimension vectors. Assume the inherited Axiom of Choice.

[F1] A Frobenius-stable family of geometric Schur classes of dimension
$\delta$ whose $m$th fixed set has cardinality comparable to $q^m$
yields at least $cq^m/m$ indecomposables of dimension $m\delta$
([[lem-finite-field-schur-descent-and-restriction]]).

[F2] The kernel/cokernel reflection construction and inverse exact
subcategories clause of
[[lem-finite-dynkin-quiver-reflection-classification]] applies to every finite acyclic quiver, not only finite Dynkin type. They preserve endomorphism rings
and commute with field extension whenever the object is not the reflected
simple.

[F3] Every two orientations of a finite tree are connected by source/sink
firings; clause (1) of
[[lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves]] has this
scope without a finite-type hypothesis.

[F4] Grassmannians have standard affine graph charts and dimension
$r(n-r)$; iterating these gives partial-flag charts
([[lem-grassmannian-standard-affine-charts]],
[[cor-grassmannian-smooth-irreducible-dimension]]).
The finite general linear group has order $\prod_{j=0}^{N-1}(Q^N-Q^j)$ over $\mathbb F_Q$: choose its ordered basis columns successively outside the span of the preceding columns.

## Proof

1.1 For affine D, choose all arrows at the outer leaves pointing toward the central chain and choose any orientation of its edges. Take the chain spaces to have dimension $2$ and their maps to be isomorphisms; identify them along the chain. The four nonzero leaf maps then specify four lines in a common $2$-space. Isomorphisms of such representations are exactly common $\operatorname{GL}_2$ transports of the four lines, and their endomorphisms are exactly linear maps preserving all four lines. Three distinct lines force that endomorphism to be scalar: preserving two lines diagonalizes it and preserving a third with both coordinates nonzero equates the diagonal entries. Such configurations exist over an algebraic closure in every characteristic. Their variety $F=(\mathbb P^1)^4$ is irreducible of dimension $4=2^2$. The stated vector is a null vector: each leaf equation is $2\cdot1-2=0$, each interior chain equation is $2\cdot2-2-2=0$, and each end branch has $2\cdot2-2-1-1=0$; the one-vertex chain has four leaves and the same equality. It is primitive because it has entries $1$. [F4, given, algebra]

1.2 For affine E, orient all arms toward the center and take every arm map injective. Such representations modulo changes of bases on the arms are triples of flags in the central $N$-space, with steps $N/s,\ldots, (s-1)N/s$. Endomorphisms are exactly central endomorphisms preserving these flags, since an arm endomorphism is their unique restriction. The product flag variety $F$ is irreducible. The dimension of the flag for $s$ equal blocks of size $N/s$ is $\sum_{i<j}(N/s)^2=N^2(s-1)/(2s)$ by its successive graph charts. Thus $\dim F=N^2$, because $1/p+1/q+1/r=1$. Each internal null-vector equation is a second difference of this arithmetic progression; at the center it is $2N-N\sum_s(s-1)/s=0$. The vectors have entries with greatest common divisor $1$, proving that they are the primitive positive null vectors. [F4, algebra]

2.1 For E6 choose two opposite full flags in dimension $3$. Their common endomorphisms are diagonal. Choose the first line of the third full flag to be spanned by $(1,1,1)$ and extend it to any full flag. A diagonal endomorphism preserving this line has equal entries, so the common endomorphism algebra is scalar. For E7 choose two opposite full flags in dimension $4$. Choose the third, two-dimensional subspace to be spanned by $u=(1,1,1,1)$ and $v=(\lambda_1,\lambda_2,\lambda_3,\lambda_4)$ with four distinct $\lambda_i$ over the algebraic closure. If a diagonal matrix preserves this plane, its diagonal entries are $a+b\lambda_i$, while preservation of $v$ says $b\lambda_i^2+(a-d)\lambda_i-c=0$ for all four distinct $\lambda_i$. A quadratic polynomial cannot have four distinct roots unless zero, so $b=c=0$ and $d=a$. The matrix is scalar. These arguments hold in every characteristic. [F4, step 1.2, algebra]

3.1 For E8, choose a full flag in a $6$-space grouped into three consecutive pairs, and the opposite partial flag consisting of the last pair and last two pairs. An endomorphism preserving both is block diagonal with three upper triangular $2$-by-$2$ blocks: the full flag makes it upper triangular and the opposite partial flag eliminates the off-block entries. Choose three full flags $\ell_i\subset P_i$ in a $3$-space whose common endomorphisms are scalar, as in step 2.1. Map this space into $\bigoplus_{i=1}^3(k^3/\ell_i)$ by its three quotient maps; it is injective because the three lines have zero intersection. Identify the first coordinate line in each two-dimensional quotient with $P_i/\ell_i$. Use the image as the remaining three-dimensional subspace in the $6$-space. If the three upper triangular blocks preserve this image, they induce a common endomorphism $C$ of $k^3$; the quotient identities force $C$ to preserve every $\ell_i$ and $P_i$. Hence $C$ is scalar by step 2.1, and surjectivity of the quotient maps forces each block to be that same scalar. Thus E8 also has a configuration with scalar endomorphism algebra in every characteristic. [F4, step 2.1, algebra]

4.1 For each of these product flag varieties $F$, let $F^s$ be the locus of scalar endomorphism algebra. It is nonempty by steps 1.1, 2.1 and 3.1 and open: preservation of the flags is a finite linear system in the $N^2$ matrix entries; its kernel always contains the scalars, and has dimension $1$ exactly when some $(N^2-1)$-minor is nonzero. Every product flag variety has an affine big cell of dimension $N^2$ over $k$. Its intersection with $F^s$ is nonempty by irreducibility, so on that cell one such minor is a nonzero polynomial over $k$ of fixed degree. A nonzero degree-$D$ polynomial in $d$ variables has at most $DQ^{d-1}$ zeros over $\mathbb F_Q$, by induction on variables and the one-variable root bound. Therefore $|F^s(\mathbb F_Q)|\ge c_1Q^{N^2}$ for large $Q$. The full flag counts, or a finite cover by the standard cells [F4], give $|F(\mathbb F_Q)|\le c_2Q^{N^2}$. Every orbit in $F^s(\mathbb F_Q)$ has cardinality $|\operatorname{GL}_N(\mathbb F_Q)|/(Q-1)$, because its endomorphisms are exactly the scalars. By [F4] that orbit cardinality is bounded above and below by fixed positive constants times $Q^{N^2-1}$. Hence its number of rational orbits is bounded above and below by fixed positive constants times $Q$. [F1, F4, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 Let $\mathscr S$ be the geometric Schur classes of the representations just constructed, with the injection/isomorphism conditions on the arrows. These conditions are invariant under Frobenius and base extension. The finite-field descent lemma [F1] shows that Frobenius-fixed classes have rational models; all these rank conditions hold on that model because they hold after scalar extension. Two rational models in one geometric Schur class are rationally isomorphic by the same lemma. After normalizing the chain isomorphisms and forgetting the arm bases, their classes are precisely the rational flag orbits counted in step 4.1. Thus the fixed-class numbers are comparable to $q^m$, and [F1] gives the claimed exponential lower bound for the chosen orientations. [F1, step 4.1, algebra]

6.1 For an arbitrary orientation of the same tree, use a finite sequence of source/sink firings from [F3]. The null-vector equations checked in steps 1.1–1.2 imply $s_i\delta=\delta$ at every vertex. A $\delta$-dimensional indecomposable is never a vertex simple. The reflection equivalences [F2] therefore give bijections of Schur classes of dimension $\delta$ through the whole firing sequence. They commute with extension and Frobenius and hence preserve all fixed-class counts and exact Frobenius orbit lengths. Apply [F1] again to get the bound in the target orientation. Every path of length at least the number of vertices in a tree orientation is zero, so all constructed representations are nilpotent. This completes the full orientation and category assertions. [F1, F2, F3, step 1.1, step 1.2, step 5.1, algebra] ∎
