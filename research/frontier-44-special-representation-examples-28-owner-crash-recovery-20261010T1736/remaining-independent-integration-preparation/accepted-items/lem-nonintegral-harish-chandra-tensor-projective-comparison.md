---
id: lem-nonintegral-harish-chandra-tensor-projective-comparison
kind: lemma
title: "The regular coset-dominant Harish–Chandra tensor comparison"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
deps: [def-axiom-of-choice, def-integral-weyl-group-of-a-weight,
       def-truncated-category-o-at-a-finite-weight-ideal,
       lem-maximal-verma-is-projective-in-a-finite-truncation,
       lem-block-projection-preserves-projectives,
       lem-finite-dimensional-tensors-reach-every-block-simple,
       lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       thm-central-character-summands-split-into-linkage-blocks,
       thm-category-o-decomposes-by-generalized-central-character,
       cor-central-characters-are-dot-weyl-orbits,
       thm-every-category-o-object-has-finite-length,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       thm-category-o-is-abelian-and-extension-closed,
       thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights,
       prop-tensoring-with-a-finite-dimensional-module-preserves-category-o,
       thm-weyls-complete-reducibility-theorem,
       thm-hilbert-basis-theorem,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein and Gelfand, Tensor products of finite and infinite dimensional representations of semisimple Lie algebras"
      url: "https://www.numdam.org/item/CM_1980__41_2_245_0.pdf"
      locator: "Sections 5.1–5.12; adoption from the authenticated owner-category-o-batch17-hc-comparison-proof research note, with the projective-presentation argument expanded locally."
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g=\mathfrak{sl}_N(\mathbb C)$,
with upper-triangular Borel, and represent $a=\lambda+\rho$ by coordinates
of sum zero. For every $i<j$ with $a_i-a_j\in\mathbb Z$, require
$a_i-a_j\in\mathbb Z_{>0}$. Thus $a$ is regular and strictly decreasing
inside each coordinate coset modulo $\mathbb Z$; there is no ordering of
complex numbers from different cosets. Write $P$ for the weight lattice,
$U_\chi=U(\mathfrak g)/U(\mathfrak g)\ker\chi_\lambda$, and
$\mathcal O_{\lambda+P}$ for objects of genuine $\mathcal O$ whose weights
belong to $\lambda+P$.

Let $\mathcal H_\chi$ consist of finitely generated $U$-bimodules $B$ with
$B\ker\chi_\lambda=0$ and locally finite adjoint $\mathfrak g$-action.
For finite-dimensional $E$ let $\Phi_E=E\otimes U_\chi$, with diagonal
left action and ordinary right action. Then
$$T_\lambda(B)=B\otimes_U\Delta(\lambda)$$
is an exact equivalence $\mathcal H_\chi\simeq\mathcal O_{\lambda+P}$.
Every object on either side has a finite presentation by the respective
projective generators $\Phi_E$ and $E\otimes\Delta(\lambda)$. The induced
map is the natural, composition-preserving identification
$$\operatorname{Hom}_{\mathcal H_\chi}(\Phi_E,\Phi_F)\ \cong\ (E^*\otimes F\otimes U_\chi)^{\mathfrak g}\ \cong\ \operatorname{Hom}_{\mathfrak g}(E\otimes\Delta(\lambda),F\otimes\Delta(\lambda)).$$
The comparison commutes naturally with finite-dimensional tensoring.

For $\mathfrak{gl}_N$ the corresponding statement uses
$\mathcal O_{\lambda+\mathbb Z^N}$ and finite-dimensional modules with
integral coordinate weights; $\mathcal H_\chi$ additionally requires its
adjoint Cartan weights to be integral and its adjoint scalar centre to act
semisimply. No assertion here supplies standard-label transport, a
parabolic restriction, or this equivalence for a nonprojective source
Verma or a singular source weight.

## Facts & Assumptions

**Given:** The hypotheses of the statement and the all-weight action isomorphism in [F5].

[F1] Integral reflections define the finite linkage class; the linkage-block and generalized-central-character projections are exact. A maximal-label Verma in the whole finite linkage class is projective there and hence in $\mathcal O$ ([[def-integral-weyl-group-of-a-weight]], [[def-truncated-category-o-at-a-finite-weight-ideal]], [[lem-maximal-verma-is-projective-in-a-finite-truncation]], [[lem-block-projection-preserves-projectives]], [[thm-central-character-summands-split-into-linkage-blocks]], [[thm-category-o-decomposes-by-generalized-central-character]]).

[F2] Every simple is $L(\eta)$; objects of $\mathcal O$ have finite length, and subobjects and quotients remain in $\mathcal O$. For sufficiently large integers $n$, $\eta'=\eta+n\rho$ is maximal in its linkage class and $L(n\rho)\otimes\Delta(\eta')$ is projective with an epimorphism onto $L(\eta)$ ([[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[thm-every-category-o-object-has-finite-length]], [[thm-category-o-is-abelian-and-extension-closed]], [[lem-finite-dimensional-tensors-reach-every-block-simple]]).

[F3] Finite-dimensional tensoring preserves $\mathcal O$ and projectivity and gives a Verma flag with factors $\Delta(\lambda+\xi)$ of multiplicity $\dim E_\xi$. Finite-dimensional simple modules exist for every dominant integral highest weight; their weights are below that highest weight ([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]], [[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]], [[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).

[F4] Equal central characters are full dot-Weyl conjugacy. PBW identifies the associated graded enveloping algebra with a polynomial algebra; Hilbert basis and complete reducibility are available ([[cor-central-characters-are-dot-weyl-orbits]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[thm-hilbert-basis-theorem]], [[thm-weyls-complete-reducibility-theorem]]).

[F5] For this weight $\lambda$, the action map $U_\chi\to\operatorname{End}_{\mathbb C}(\Delta(\lambda))^{\mathrm{ad}\mathfrak g\text{-finite}}$ is an algebra isomorphism ([[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]]).

## Proof

**Proof technique:** direct.

1.1 In type A the integral reflections are precisely the transpositions of indices whose $a$ coordinates differ integrally. Thus $W_\lambda$ is the product of symmetric groups on these coordinate cosets. For $w$ in that product, subtract the common complex scalar from each coset. Each remaining list is real, integral up to a common real scalar, and decreasing in its original index order. For every initial index segment its sum is at least the sum of any equally large subset in that coset. Consequently every initial partial sum of $a-wa$ is a nonnegative integer, and its total sum is zero. Expressing a sum-zero vector in the adjacent simple-root basis gives these partial sums as its coefficients; hence $a-wa\in Q^+$. This makes $\lambda$ greatest, in particular maximal, in its linkage class. By [F1], $\Delta(\lambda)$ is projective in $\mathcal O$, and [F3] makes every $E\otimes\Delta(\lambda)$ projective. [F1, F3, given, algebra]

1.2 Let $\nu$ be dominant integral and suppose $b=a+\nu$ is regular and decreasing within the original coset pattern. Put $E=L(\nu)$. The weight set of $E$ is Weyl stable: each simple-root $\mathfrak{sl}_2$ decomposition has symmetric finite strings, and the reflections generate $W$. For each weight $\xi$, move it to a dominant weight $\xi^+$. Highest-weight support gives $\nu-\xi^+\in Q^+$, and dominance of $\nu+\xi^+$ gives $\|\nu\|^2-\|\xi^+\|^2=\langle\nu-\xi^+,\nu+\xi^+\rangle\ge0$. Thus $\|\xi\|\le\|\nu\|$. All weights of $E$ differ from $\nu$ by roots; their coordinate residues differ by the same common scalar. If a Verma factor in [F3]'s flag has central character $\chi_{\lambda+\nu}$, [F4] says its tensor weight is $\xi=w(a+\nu)-a$. Coordinatewise congruences force $w$ to preserve the original coset partition. For such $w$, use the complex-bilinear extension of the Euclidean square (the weights $\xi,\nu$ themselves are real):
$$\|w(a+\nu)-a\|^2-\|\nu\|^2=\|wa-a\|^2+2\langle\nu,a-w^{-1}a\rangle.$$
The common complex scalar on every coset cancels. The second term is nonnegative by step 1.1 and dominance of $\nu$, while the first is strictly positive for $w\ne1$ by regularity. The weight bound excludes these $w$. For $w=1$ the highest weight $\nu$ occurs once. Exact central projection of the flag therefore yields precisely $\Delta(\lambda+\nu)$, a direct summand of $L(\nu)\otimes\Delta(\lambda)$. [F3, F4, step 1.1, algebra]

1.3 The enveloping algebra $U\otimes U^{\mathrm{op}}$ is filtered with polynomial associated graded by PBW, and is noetherian: an ascending chain of left ideals gives a chain of graded ideals, which stabilizes by Hilbert basis; lifting leading symbols and inducting on degree makes the original chain stabilize. Kernels and cokernels of bimodule maps between finitely generated bimodules are consequently finitely generated. Local adjoint finiteness passes to submodules and quotients. Every locally finite adjoint module is semisimple and its finite-dimensional multiplicity functors are exact: to lift a map from finite-dimensional $E$ through a quotient, lift a basis and place all lifts in a finite-dimensional stable submodule, then split its map onto its image by [F4]'s complete reducibility. Thus $\mathcal H_\chi$ is abelian and $\operatorname{Hom}_{\mathfrak g}(E,-_{\mathrm{ad}})$ is exact there. [F4, given, algebra]

2.1 For any simple $L(\eta)$ in $\mathcal O_{\lambda+P}$ choose a sufficiently large even integer $n$ and set $\eta'=\eta+n\rho$. The evenness puts $n\rho$ in the root lattice in type A. Since $\eta-\lambda\in P$, the weight $\nu=\eta'-\lambda$ is integral; its simple coroot pairings are those of $\eta-\lambda$ plus $n$, hence are nonnegative for large $n$. The coordinate differences of $\eta'+\rho$ inside each original coset become strictly positive in index order for large $n$, since those of $n\rho$ strictly decrease. The coordinate coset partition is unchanged, as elements of $P$ change residues by one common scalar. Enlarge $n$ further to satisfy [F2]'s reach bound. Step 1.2 makes $\Delta(\eta')$ a direct summand of $L(\nu)\otimes\Delta(\lambda)$, while [F2] gives an epimorphism $L(n\rho)\otimes\Delta(\eta')\twoheadrightarrow L(\eta)$. Composing the split projection gives an epimorphism from a finite-dimensional tensor of the fixed $\Delta(\lambda)$ onto $L(\eta)$. [F2, F3, step 1.2, construct]

2.2 Choose finite bimodule generators of $B$ and take their finite-dimensional adjoint-stable span $E$. It also generates $B$ as a right module: moving left generators to the right uses $xb=b x+(\mathrm{ad}\,x)b$, with the adjoint term still in $E$, followed by induction on PBW degree. Therefore $e\otimes u\mapsto eu$ is an epimorphism $\Phi_E\twoheadrightarrow B$. A bimodule map from $\Phi_E$ is uniquely determined by the adjoint-equivariant map $e\mapsto f(e\otimes1)$; conversely every such map extends by right multiplication. Hence $\operatorname{Hom}_{\mathcal H_\chi}(\Phi_E,B)=\operatorname{Hom}_{\mathfrak g}(E,B_{\mathrm{ad}})$, making $\Phi_E$ projective by step 1.3. Present the kernel the same way to obtain a finite presentation of $B$. [step 1.3, construct, algebra]

3.1 Devissage gives an epimorphism from one fixed-source tensor projective onto every object $M$ of $\mathcal O_{\lambda+P}$. For an extension with simple quotient, lift the generator epimorphism onto that simple using its source's projectivity, and adjoin the epimorphism onto the smaller-length subobject. Finite sums of tensor generators are again tensor generators. The kernel belongs to $\mathcal O_{\lambda+P}$ by [F2], so a second such epimorphism presents $M$. These arguments impose no central-character condition on $M$. [F2, step 1.1, step 2.1, construct]

3.2 Tensoring over $U$ is right exact, and $T_\lambda(\Phi_E)=E\otimes\Delta(\lambda)$ canonically; using step 2.2's presentation shows that $T_\lambda(B)$ belongs to $\mathcal O_{\lambda+P}$. For generator Hom spaces, step 2.2 gives $(E^*\otimes F\otimes U_\chi)^{\mathfrak g}$. Ordinary finite-dimensional tensor-Hom adjunction gives the other Hom space as $(E^*\otimes F\otimes\operatorname{End}_{\mathbb C}\Delta(\lambda))^{\mathfrak g}$. Every invariant tensor has adjoint-finite endomorphism coefficients, since contracting its finite-dimensional factors gives an equivariant map from a finite-dimensional module into the endomorphism module. [F5] therefore identifies the two invariant spaces. On an elementary matrix it sends $u$ to its action on $\Delta(\lambda)$, exactly the map induced by $T_\lambda$; evaluation and composition are preserved because this action is an algebra map. [F5, step 2.2, algebra]

4.1 For any $C\in\mathcal H_\chi$, apply Hom from $\Phi_E$ to a presentation $\Phi_{F_1}\to\Phi_{F_0}\to C\to0$. This yields a right exact sequence of Hom spaces by projectivity; apply Hom from $E\otimes\Delta(\lambda)$ to the right exact image presentation, also using projectivity. Step 3.2 identifies the two generator Hom rows and their maps, hence their cokernels. Thus $\operatorname{Hom}(\Phi_E,C)\to\operatorname{Hom}(T_\lambda\Phi_E,T_\lambda C)$ is an isomorphism. For arbitrary $B$, its generator presentation identifies $\operatorname{Hom}(B,C)$ as the kernel of the map between the corresponding two Hom spaces; the same holds for $T_\lambda B$. The just-proved identifications of those spaces identify their kernels. Therefore $T_\lambda$ is fully faithful. [step 1.1, step 2.2, step 3.2, algebra]

5.1 Step 3.1 presents any target object by tensor generators; step 3.2 uniquely lifts its presentation map to a map of the corresponding $\Phi$ generators. Its cokernel maps to the given object by right exactness. Thus $T_\lambda$ is essentially surjective and hence an equivalence. An equivalence of abelian categories preserves kernels and cokernels by their universal properties, so it is exact. For finite-dimensional $X$, associativity identifies $T_\lambda(X\otimes B)=X\otimes T_\lambda(B)$; the identification is natural, and respects associativity, evaluation and composition on elementary tensors. [step 3.1, step 1.3, step 3.2, step 4.1, algebra]

6.1 For $\mathfrak{gl}_N=\mathfrak{sl}_N\oplus\mathbb C z$, $\mathfrak h$-semisimplicity and finite generation split any $\mathcal O$ object into finitely many scalar $z$-eigenspaces. Each is an $\mathfrak{sl}_N$ object. The finite-dimensional integral-coordinate tensors are the finite-dimensional $\mathfrak{sl}_N$ modules with compatible integral central scalar, obtained by adjoining that scalar; determinant powers allow all dominant integral coordinate highest weights. In step 2.1 take $\eta-\lambda\in\mathbb Z^N$ and even $n$; then $\nu\in\mathbb Z^N$ with the exact required scalar central action. The same norm argument holds after splitting off this common real central scalar. On the HC side the stipulated semisimple adjoint centre splits into integer eigenspaces; complete reducibility in each is the semisimple result, so the presentation proof still applies. Since the right centre acts by $\chi_\lambda(z)$, its left scalar differs by the adjoint integer scalar. In [F5]'s endomorphism module the adjoint centre is zero and the right central quotient reduces to the $\mathfrak{sl}_N$ central quotient, giving exactly the same action isomorphism. All preceding comparisons therefore retain integral coordinate shifts and the genuine scalar centre, proving the stated $\mathfrak{gl}_N$ version. Choice is inherited from the projectivity and finite-length suppliers and from the semisimple module decompositions. [F1, F2, F3, F4, F5, step 2.1, step 5.1, algebra] ∎
