---
id: lem-connected-rational-super-bicommutative-hopf-algebra-is-free-on-primitives
kind: lemma
title: "Connected rational graded Hopf algebras and primitive elements"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-graded-ring-and-graded-module
  - def-tensor-product-of-modules-by-generators-and-relations
sources:
  references:
    - title: "Charles A. Weibel, The K-book, Chapter IV"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf"
      locator: "Printed pp. 11–12, rank of higher K-groups: primitive rational homology motivates this adapted graded-bicommutative algebra lemma. That discussion quotes the topological primitive-Hurewicz theorem; the algebraic proof below is supplied locally and does not import it."
---

## Statement

Let $H=\bigoplus_{n\ge0}H_n$ be a connected nonnegatively graded Hopf algebra over $\mathbb Q$, so $H_0=\mathbb Q1$. Suppose its product is graded commutative and its coproduct is graded cocommutative, both with the Koszul sign convention. Let $P\subseteq H_{>0}$ be the graded subspace of primitive elements, namely those $p$ with $\Delta p=p\otimes1+1\otimes p$. Then the multiplication map from the graded-symmetric algebra on $P$ to $H$ is an isomorphism of graded Hopf algebras. Equivalently, it is polynomial on even-degree primitives and exterior on odd-degree primitives, in the basis-free graded-symmetric sense. The construction is natural in such Hopf algebras and requires no choice principle or finite-dimensionality hypothesis. If each $H_n$ is finite-dimensional, graded duality identifies the graded dual $H^\vee=\bigoplus_n H_n^*$ with a connected graded Hopf algebra, and its primitive space in each degree is canonically dual to the degreewise indecomposable quotient of $H$.

## Statement references

[[def-graded-ring-and-graded-module]]

[[def-tensor-product-of-modules-by-generators-and-relations]]

## Facts & Assumptions

**Given:** The graded vector space, unit, counit, multiplication, comultiplication and antipode in the Statement. The bialgebra axiom uses the graded tensor-product multiplication. The graded flip is $\tau(x\otimes y)=(-1)^{|x||y|}y\otimes x$ for homogeneous inputs.

[F1] A nonnegatively graded module is the direct sum of its homogeneous components, so each element has finite homogeneous support. [[def-graded-ring-and-graded-module]]

[F2] Tensor products satisfy their explicit bilinear universal property; direct sums and iterated tensor products use finite sums of pure tensors. [[def-tensor-product-of-modules-by-generators-and-relations]]

## Proof

**Proof technique:** finite convolution logarithm, primitive projection and iterated coproduct symmetrization.

1.1 Put $I=\ker\varepsilon=\bigoplus_{n>0}H_n$, $u=\eta\varepsilon$ and $J=\operatorname{id}-u$. For a homogeneous $x\in H_d$, write the iterated coproduct as a finite sum of homogeneous pure tensors. Since $J$ kills degree zero and coproduct preserves total degree, $J^{*r}(x)=0$ for $r>d$, where $*$ is convolution. Thus the formula $e=\sum_{r\ge1}(-1)^{r+1}J^{*r}/r$ is a finite, well-defined degree-preserving linear map on every element. Associativity and the unit $u$ of convolution follow directly from associativity and coassociativity; the finite formal identities for $\log(1+z)$ and $\exp(z)$ apply in the nilpotent convolution quotient acting on any prescribed finite-degree input. No infinite sum or basis is selected. [F1, F2, given, construct, algebra]

2.1 Consider convolution of maps $H\to H\otimes H$ using the graded tensor-product algebra. Let $f(x)=x\otimes1$ and $g(x)=1\otimes x$. Their convolution product is $f*g=\Delta$; the reversed product is the graded flip of $\Delta$ and is also $\Delta$ by graded cocommutativity. Both differ from the convolution unit by maps that lower the positive-degree tensor length, so the same finite logarithm identities give $\log^*(\Delta)=\log^*f+\log^*g$. The bialgebra identity says that $\Delta$ takes convolution products of endomorphisms of $H$ to convolution products of maps into $H\otimes H$. Hence $\Delta e=\log^*(\Delta)=e\otimes1+1\otimes e$. Thus every value of $e$ is primitive. If $p$ is primitive, every convolution power $J^{*r}(p)$ with $r\ge2$ vanishes, so $e(p)=p$. Therefore $e$ is a projection onto $P$. The signs in the reversed product are exactly those in the graded flip supplied in the Given. [F2, step 1.1, given, construct, algebra]

3.1 Give $H\otimes H$ its graded tensor coalgebra. For maps from this coalgebra to the graded-commutative algebra $H$, define $a(x\otimes y)=x\varepsilon(y)$ and $b(x\otimes y)=\varepsilon(x)y$. Their convolution products in either order equal the multiplication map $m$, the reverse equality using graded commutativity. Since $m$ is a coalgebra map, $e\circ m=\log^*(m)=\log^*a+\log^*b$. For $x,y\in I$, every term of $\log^*a$ vanishes on $x\otimes y$, as does every term of $\log^*b$; explicitly, their iterated coalgebra expansions retain the factor $\varepsilon(y)=0$ or $\varepsilon(x)=0$. Consequently $e(xy)=0$. Also $e(1)=0$. Thus $e$ kills $I^2$ and canonically identifies $P$ with the indecomposable quotient $I/I^2$: $P\to I/I^2$ is injective because $e|_P=1$, and $x-e(x)\in I^2$ because each convolution power $J^{*r}(x)$ with $r\ge2$ is a sum of products of at least two elements of $I$. [F2, step 1.1, step 2.1, given, algebra]

4.1 Form $\operatorname{Sym}_{\mathrm{gr}}(P)=T(P)/(p\otimes q-(-1)^{|p||q|}q\otimes p)$, with the quotient relations imposed for all homogeneous $p,q$. Its multiplication map $\Phi$ to $H$ is well defined by graded commutativity. It is onto by induction on homogeneous degree: $x=e(x)+(x-e(x))$, with the first term primitive and the second a finite sum of products of positive-degree homogeneous factors of strictly smaller degree. A degree-zero scalar is in the image of the unit. Each induction step and each tensor expression is finite, so no simultaneous choice of polynomial representatives is needed. The coproduct on the tensor algebra making $P$ primitive descends through the graded-commutator relations, and $\Phi$ is a Hopf map because its generators have the same primitive coproduct. [F1, F2, step 2.1, step 3.1, construct, algebra]

5.1 Give the graded-symmetric algebra its direct decomposition by tensor length. For $r\ge1$ define $D_r=(e^{\otimes r})\Delta^{(r-1)}:H\to P^{\otimes r}$. On a product of $m$ homogeneous primitives, expand the iterated coproduct by multiplicativity. Each term assigns every primitive to one of the $r$ tensor factors with its Koszul sign. If $m<r$, a factor is $1$ and is killed by $e$; if $m>r$, some factor is a product in $I^2$ and is killed by $e$. If $m=r$, exactly the bijective assignments survive, giving the sum of the signed permutations of the $r$ primitives. Thus $D_r\Phi$ vanishes on every tensor length other than $r$, and on length $r$ it is the canonical graded symmetrization map. Composing that symmetrization with the quotient $P^{\otimes r}\to\operatorname{Sym}^r_{\mathrm{gr}}(P)$ gives multiplication by $r!$, since every signed permutation represents the same graded-symmetric class. Because $r!$ is invertible in $\mathbb Q$, the symmetrization map is injective without choosing a basis. If $z$ is in the kernel of $\Phi$, applying $D_r$ for each of its finitely many length components makes each component zero. Scalars are handled by the counit. Hence $\Phi$ is injective and therefore an isomorphism. [F1, F2, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Every formula for $e$, $D_r$ and $\Phi$ is built from the supplied structure maps, rational scalars and finite graded permutations. It therefore commutes with any degree-preserving Hopf map, giving naturality. The quotient defining $\operatorname{Sym}_{\mathrm{gr}}(P)$ imposes ordinary commutation in even degrees and anticommutation in odd degrees; in particular an odd element squares to zero because $2$ is invertible. This is the basis-free polynomial/exterior description, including the case of zero primitive subspace. The argument never picks a basis, a complement, a primitive representative or a family of witnesses. [F2, step 3.1, step 5.1, algebra]

7.1 If each $H_n$ is finite-dimensional, each degree of $H\otimes H$ is the finite sum $\bigoplus_{i+j=n}H_i\otimes H_j$. For each finite-dimensional pair, the canonical map $H_i^*\otimes H_j^*\to(H_i\otimes H_j)^*$ is an isomorphism: for a single pair use a finite spanning basis and its dual, with no choice of bases across degrees. Transposing multiplication, coproduct, unit, counit and antipode therefore defines the graded dual Hopf structure. A functional $\ell\in H_n^*$ of positive degree is primitive exactly when its transpose-coproduct has no component in positive bidegrees, equivalently when $\ell$ vanishes on $(I^2)_n$. The identification with $(I/I^2)_n^*$ is canonical. Finite-dimensionality is used only for this graded-dual clause, not for the preceding isomorphism. The statement does not assert that a topological Hurewicz map is an isomorphism; that is a separate prerequisite. [F1, F2, step 3.1, step 5.1, construct, algebra] ∎
