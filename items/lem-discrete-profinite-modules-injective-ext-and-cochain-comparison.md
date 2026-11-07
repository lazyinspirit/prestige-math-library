---
dependency_level: 1
id: lem-discrete-profinite-modules-injective-ext-and-cochain-comparison
kind: lemma
title: Injective Ext and continuous cochains for discrete profinite modules
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-profinite-group-by-inverse-limit
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-axiom-of-choice
- def-dependent-choice
- thm-module-categories-have-enough-injectives
- def-injective-object
- def-ext-via-an-injective-resolution-of-the-second-variable
- thm-long-exact-sequence-in-cohomology
justified_by: []
proof_strategy: direct
axiom_use: Literal AC and DC. No enough-projectives premise for discrete continuous
  modules is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition; local reconstruction
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Generic continuous cohomology and injective Ext constructions, Chapter
      I §0; full local reconstruction, no arithmetic duality imported.
verification: {}
---

## Statement

Assume AC and DC. Let $G$ be a compact Hausdorff profinite group, and let $\mathcal D_G$ be the category of discrete abelian groups with continuous left $G$-action and equivariant homomorphisms. Then $\mathcal D_G$ is abelian and has enough injectives. The normalized continuous cochain cohomology $H^r_{\mathrm{cts}}(G,C)$ is naturally the right-derived functor of invariants on this category.

For $X,C\in\mathcal D_G$, injective resolutions of $C$ define groups $\operatorname{Ext}^r_G(X,C)$ independent up to canonical comparison of the chosen resolution. They have the natural long exact sequences in both variables, without an enough-projectives hypothesis. If $L\in\mathcal D_G$ is finite free as an abelian group and $L^*=\operatorname{Hom}_{\mathbb Z}(L,\mathbb Z)$ with contragredient action, there are natural isomorphisms
$$\operatorname{Ext}^r_G(L,C)\cong H^r_{\mathrm{cts}}(G,\operatorname{Hom}_{\mathbb Z}(L,C))\cong H^r_{\mathrm{cts}}(G,L^*\otimes_{\mathbb Z}C)\qquad(r\ge0).$$
These are generic cohomology and Ext constructions, not arithmetic duality or a Tor-vanishing assertion for finite torsion coefficients.

## Statement references

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I, §0 and Lemma 1.9](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The compact Hausdorff profinite group, continuous discrete modules, and literal AC/DC of the Statement.

[F1] The continuous cochain convention uses normalized inhomogeneous cochains and the displayed group differential; discrete action means open element stabilizers. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]] [[def-profinite-group-by-inverse-limit]]

[F2] Under AC, every abelian group embeds in an injective abelian group, by applying the ordinary module-category theorem to $\mathbb Z$. [[thm-module-categories-have-enough-injectives]]

[F3] Injectivity is extension of maps along monomorphisms. Ext relative to a supplied injective resolution is cohomology of its Hom complex. [[def-injective-object]] [[def-ext-via-an-injective-resolution-of-the-second-variable]]

[F4] A short exact sequence of cochain complexes gives its natural long exact cohomology sequence. [[thm-long-exact-sequence-in-cohomology]]

[A1] AC supplies the ordinary injective embeddings and the iterative choices of resolution/comparison data; DC is retained literally. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data in the Statement.

1.1 Kernels, images and cokernels of equivariant maps are their ordinary abelian-group kernels, images and cokernels with induced action. A quotient element has an open stabilizer containing that of a representative; submodules inherit open stabilizers. Finite biproducts have open stabilizers by finite intersection. Thus the abelian-category identities follow from those for abelian groups. Every continuous function $G^s\to D$ to a discrete set has finite image and factors through $(G/V)^s$ for some open normal $V$: cover the compact domain by coset rectangles on which it is constant, take a finite subcover, and intersect their finitely many open normal subgroups. For $s=0$ the domain is a point. [F1, given, construct]

2.1 For an abelian group $I$, define $J(I)=C_{\mathrm{cts}}(G,I)$ and $(g f)(h)=f(hg)$. Each $f$ factors through $G/V$ by step 1.1, so $V$ fixes $f$; hence $J(I)$ is an object of $\mathcal D_G$. Evaluation at $1$ gives a natural adjunction $$\operatorname{Hom}_G(X,J(I))\cong\operatorname{Hom}_{\mathbb Z}(X,I),$$ whose inverse sends $a$ to $x\mapsto(h\mapsto a(hx))$. The function is continuous because the orbit map of $x$ factors through its finite coset orbit, and the formula is equivariant since $a(hgx)=(g f_x)(h)$. The two displayed constructions are inverse by evaluation and equivariance. [F1, step 1.1, construct, algebra]

3.1 Choose an underlying abelian embedding $i:C\hookrightarrow I$ with $I$ injective by [F2]. The adjunction embeds $C$ into $J(I)$ by $c\mapsto(h\mapsto i(hc))$, injectively by evaluation at $1$. If $X'\hookrightarrow X$ is a monomorphism, an underlying map $X'\to I$ extends to $X$ by injectivity; the adjunction transports this extension to an equivariant map into $J(I)$. Thus $J(I)$ is injective in $\mathcal D_G$, proving enough injectives. Finite direct sums of injectives are injective, since one extends their finitely many component maps and assembles the extensions. Iterating the embeddings on cokernels supplies injective resolutions under [A1]. [A1, F2, F3, step 2.1, construct]

3.2 Each normalized cochain functor $C^p_{\mathrm{cts}}(G,-)$ is exact. Kernels and injectivity are pointwise. A cochain through a surjection lifts by choosing preimages of its finitely many values and preserving the clopen fibers; choose zero as the preimage of zero so normalization is retained. This includes $p=0$. For coefficients $J(I)$, use homogeneous cochains $F:G^{p+1}\to J(I)$ with $F(ax_0,\ldots,ax_p)=aF(x_0,\ldots,x_p)$. The conversions $$F(x_0,\ldots,x_p)=x_0c(x_0^{-1}x_1,\ldots,x_{p-1}^{-1}x_p),\quad c(g_1,\ldots,g_p)=F(1,g_1,g_1g_2,\ldots,g_1\cdots g_p)$$ identify the differentials by finite substitution. Normalization says $F$ vanishes when adjacent vertices agree. Evaluation $\phi(x_0,\ldots,x_p)=F(x_0,\ldots,x_p)(1)$ identifies these with continuous functions to $I$ having the same adjacent-equality vanishing; its inverse is $F(x_0,\ldots,x_p)(h)=\phi(hx_0,\ldots,hx_p)$. Factor $\phi$ through a common finite quotient using step 1.1. This shows $F$ has finitely many function values and is continuous into the discrete module $J(I)$, so the inverse is valid in the required topology. [F1, step 1.1, step 2.1, construct, algebra]

4.1 On these normalized homogeneous functions the homotopy is $$(s\phi)(x_0,\ldots,x_{p-1})=\phi(1,x_0,\ldots,x_{p-1}).$$ It preserves continuity and adjacent-equality vanishing. Expanding alternating omissions gives $ds+sd=1$ in positive degrees: the omission of the inserted $1$ gives $\phi$, and every other term cancels with the corresponding omission in the other sum. In degree zero cocycles are constant functions. Hence $H^p_{\mathrm{cts}}(G,J(I))=0$ for $p>0$. Any injective $Q\in\mathcal D_G$ is a direct summand of one such $J(I)$, since its embedding from step 3.1 splits by injectivity. Therefore $H^p_{\mathrm{cts}}(G,Q)=0$ for $p>0$ as well. [F3, step 3.1, step 3.2, algebra]

4.2 Between two injective resolutions of the same module, construct a chain map extending the identity as follows. In degree zero extend the prescribed map on the embedded module by target injectivity. At each later degree, the required map on the image of the preceding differential is well-defined because its kernel is the preceding image; extend it to the whole source term by target injectivity. For two such maps $f,g$, set $h^0=0$ and inductively subtract $d h^q$ from $f^q-g^q$. The resulting map vanishes on cycles by the previous homotopy equation, hence factors through the image of the source differential in degree $q+1$; extend that factor to $h^{q+1}$ by target injectivity. This gives $f-g=dh+hd$. AC/DC supplies the sequence of extensions. Composites and identities therefore agree up to homotopy. Applying $\operatorname{Hom}_G(X,-)$ or invariants preserves these homotopies, giving the asserted canonical comparisons for cohomology and Ext. [A1, F3, step 3.1, construct, algebra]

5.1 For an injective resolution $C\to I^\bullet$, form the first-quadrant double complex $C^p_{\mathrm{cts}}(G,I^q)$, with the sign $(-1)^p$ on its vertical differential. Every total degree has finitely many summands. Exactness in step 3.2 makes the vertical cohomology the augmented cochains $C^p_{\mathrm{cts}}(G,C)$ in degree zero; step 4.1 makes horizontal cohomology $(I^q)^G$ in degree zero. The finite-degree double-complex comparison can be seen directly: in an augmented exact direction, eliminate the outermost nonzero component of a total cocycle by a boundary, then repeat in the next column or row; the positive row or column index decreases along the finite staircase at fixed total degree, so this stops. The same elimination for a total boundary proves injectivity on cohomology. Thus both augmented maps are quasi-isomorphisms and $$H^r_{\mathrm{cts}}(G,C)\cong H^r((I^\bullet)^G).$$ All maps commute with coefficient maps and the comparison maps in step 4.2, so the isomorphism is natural. There is no infinite stabilization or interchange of infinite products. [F1, step 3.2, step 4.1, step 4.2, algebra]

5.2 Define $\operatorname{Ext}^r_G(X,C)$ by [F3] and step 4.2. For $0\to X_1\to X_0\to X\to0$, injectivity of each $I^q$ makes $$0\to\operatorname{Hom}_G(X,I^q)\to\operatorname{Hom}_G(X_0,I^q)\to\operatorname{Hom}_G(X_1,I^q)\to0$$ exact. Its cohomology sequence by [F4] is the natural contravariant long exact Ext sequence in the first variable. Naturality follows from the Hom maps and step 4.2. No projective object is used. [F3, F4, step 4.2, construct, algebra]

5.3 For $0\to C'\to C\to C''\to0$, choose embeddings $C'\to I'$ and $C''\to I''$ into injectives. Extend $C'\to I'$ to $a:C\to I'$. Then $C\to I'\oplus I''$ given by $a$ and $C\to C''\to I''$ is injective: an element in its kernel lies in $C'$ and is killed by its original embedding. These maps give a commutative diagram into the split row $0\to I'\to I'\oplus I''\to I''\to0$. The cokernels form a short exact sequence: lift a representative on the right to the middle, and subtract an element from the left to test its kernel. Repeat on this cokernel sequence. Step 3.1 and [A1] give three resolutions in a termwise split short exact sequence. Applying $\operatorname{Hom}_G(X,-)$ retains termwise split exactness, so [F4] gives the second-variable long exact sequence. Comparison uniqueness from step 4.2 makes it natural in the initial sequence. [A1, F3, F4, step 3.1, step 4.2, construct, algebra]

6.1 For finite free $L$, the module $\operatorname{Hom}_{\mathbb Z}(L,C)$ is continuous: stabilize a finite basis of $L$ and its finitely many images under a given homomorphism. The functor $\operatorname{Hom}_{\mathbb Z}(L,-)$ is exact and preserves injectives, by the equivariant adjunction $$\operatorname{Hom}_G(X,\operatorname{Hom}_{\mathbb Z}(L,I))\cong\operatorname{Hom}_G(X\otimes_{\mathbb Z}L,I).$$ Indeed tensoring by the free abelian group $L$ is exact, so for injective $I$ the right side extends maps along monomorphisms. Tensor products have continuous action because each element is a finite sum of elementary tensors and one intersects the finitely many stabilizers involved. Apply this Hom functor to an injective resolution of $C$; it is an injective resolution of $\operatorname{Hom}_{\mathbb Z}(L,C)$. Its invariants complex is $\operatorname{Hom}_G(L,I^\bullet)$, so steps 4.2 and step 5.1 give the first displayed Ext isomorphism. Evaluation $L^*\otimes C\to\operatorname{Hom}_{\mathbb Z}(L,C)$ is an equivariant isomorphism: for any finite basis $(e_i)$ its inverse is $f\mapsto\sum e_i^*\otimes f(e_i)$, and the evaluation identities show independence of the basis. This proves the second isomorphism and naturality. Zero modules, $G=1$, rank-zero $L$, and degree zero give the corresponding zero or ordinary Hom/invariants identities. Nothing asserts arithmetic perfectness or Tor vanishing for a finite torsion module. [F3, step 5.1, step 4.2, step 5.2, step 5.3, construct, algebra] ∎
