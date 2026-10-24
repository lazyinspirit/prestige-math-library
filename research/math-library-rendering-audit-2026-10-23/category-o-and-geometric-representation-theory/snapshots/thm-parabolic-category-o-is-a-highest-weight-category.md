---
id: thm-parabolic-category-o-is-a-highest-weight-category
kind: theorem
title: "Parabolic category O is a highest weight category"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-parabolic-category-o-for-a-standard-parabolic,
       def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       def-bgg-category-o, def-verma-module,
       thm-category-o-has-enough-projectives,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       lem-standard-costandard-hom-and-ext-vanishing,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       def-standard-and-costandard-objects-in-category-o,
       thm-every-category-o-object-has-finite-length,
       lem-finite-length-objects-decompose-into-indecomposables,
       def-projective-object, def-injective-object, def-axiom-of-choice,
       thm-weyls-complete-reducibility-theorem,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-category-o-is-abelian-and-extension-closed,
       thm-category-o-decomposes-by-generalized-central-character,
       cor-central-characters-are-dot-weyl-orbits,
       prop-weights-of-a-verma-module-lie-below-lambda,
       thm-universal-property-of-verma-modules,
       thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Character formulas for tilting modules over Kac-Moody algebras (22-page author preprint)"
      url: "https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps"
      locator: "Printed pp. 6–8: Remark 2.4, the generalized-standard flag/free-module correspondence, and the bounded induced projectives in Theorem 3.2. These full-text pages were read in this repair; the finite graded summand and flag constructions are proved explicitly below, rather than importing the later tilting theory."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Printed/PDF pp. 19–21, Sections 4.3, 4.4 and 4.6: finite central-character label sets, reciprocity, duality and integral parabolic highest-weight structure. Section 4.3 restricts the subsequent discussion to integral blocks; the arbitrary-central-character extension is proved locally below using integer bounds within each zeta-eigenvalue coset."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\mathfrak p=\mathfrak l_J\oplus\mathfrak u_J$ and $\mathcal O^{\mathfrak p}$
be as in [[def-parabolic-category-o-for-a-standard-parabolic]]. Then:

**(1) (Simples.)** $L(\lambda)\in\mathcal O^{\mathfrak p}$ if and only if
$\lambda$ is $\mathfrak p$-dominant (integral and dominant for the Levi
coroots); every simple object of $\mathcal O^{\mathfrak p}$ is of this form.
No integrality condition is imposed on the coroots outside $J$.

**(2) (Standards.)** For every $\mathfrak p$-dominant $\lambda$ the
generalized Verma $M_{\mathfrak p}(\lambda)$ lies in $\mathcal O^{\mathfrak p}$,
has finite length, has $L(\lambda)$ as its unique simple quotient (head), and
$[M_{\mathfrak p}(\lambda):L(\mu)]\neq0$ forces $\mu\le\lambda$ in the
dominance order; $M_{\mathfrak p}(\lambda)$ is the largest quotient of
$M(\lambda)$ lying in $\mathcal O^{\mathfrak p}$.

**(3) (Enough projectives.)** The inclusion
$\mathcal O^{\mathfrak p}\subseteq\mathcal O$ is exact and has a left adjoint
$L_{\mathfrak p}$ (the largest $\mathfrak p$-locally-finite quotient);
$L_{\mathfrak p}$ is right exact and sends projective objects of $\mathcal O$
to projective objects of $\mathcal O^{\mathfrak p}$. Consequently, for every
$\mathfrak p$-dominant $\lambda$ the object
$P^{\mathfrak p}(\lambda):=L_{\mathfrak p}(P^{(\mathcal O)}(\lambda))$ is a
projective cover of $L(\lambda)$ in $\mathcal O^{\mathfrak p}$, and
$\mathcal O^{\mathfrak p}$ has enough projectives and injectives.

**(4) (Generalized-standard flags, BGG reciprocity and duality.)** Every
projective in any fixed generalized central-character summand has a finite
generalized Verma flag. Each projective cover surjects to its labelled generalized standard with a kernel
filtered by higher-labelled generalized standards. The simple and
generalized-standard classes form bases of the finite summand Grothendieck
group, and characters are injective on this group. For $\mathfrak p$-dominant
$\lambda,\mu$,
$$(P^{\mathfrak p}(\lambda):M_{\mathfrak p}(\mu))=[M_{\mathfrak p}(\mu):L(\lambda)],$$
the multiplicities being finite; moreover restricted duality restricts to an
exact contravariant involution of $\mathcal O^{\mathfrak p}$ exchanging
$M_{\mathfrak p}(\lambda)$ and $\nabla_{\mathfrak p}(\lambda)$, and
$\operatorname{Ext}^1_{\mathcal O^{\mathfrak p}}(M_{\mathfrak p}(\lambda),\nabla_{\mathfrak p}(\mu))=0$
for all $\mathfrak p$-dominant $\lambda,\mu$. Thus each nonzero central-character
summand is a finite highest-weight category for the root order
$\mu\le\lambda\iff\lambda-\mu\in Q^+$, and $\mathcal O^{\mathfrak p}$ is
their categorical direct sum, with each object supported on finitely many
summands. A central-character summand need not be connected. Ambient
integrality is not required for any of these assertions.

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra with the standard parabolic $\mathfrak p=\mathfrak l\oplus\mathfrak u$, negative outside radical $\mathfrak v$, grading element $\zeta\in\mathfrak z(\mathfrak l)$, and the full locally $\mathfrak p$-finite subcategory $\mathcal O^{\mathfrak p}$ of ordinary $\mathcal O$. Write $N=U(\mathfrak v)$ and $B=U(\mathfrak p)$. The grading has $\alpha_j(\zeta)=0$ for $j\in J$ and $\alpha_i(\zeta)=1$ for $i\notin J$; its integer degrees are distinct from ambient integrality of highest weights.

[F1] Parabolic objects and Serre closure ([[def-parabolic-category-o-for-a-standard-parabolic]], [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]): finite Levi simples $E(\lambda)$ are inflated with radical acting by zero; $\Delta_{\mathfrak p}(\lambda)=U(\mathfrak g)\otimes_B E(\lambda)$ has simple head $L(\lambda)$ and lies in the Serre subcategory $\mathcal O^{\mathfrak p}$; the ordinary Verma surjects onto it. Duality preserves the subcategory and $\nabla_{\mathfrak p}(\lambda)$ embeds in the ordinary dual Verma.

[F2] Ordinary category-$\mathcal O$ structure ([[def-bgg-category-o]], [[def-verma-module]], [[thm-category-o-is-abelian-and-extension-closed]], [[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-every-category-o-object-has-finite-length]], [[lem-finite-length-objects-decompose-into-indecomposables]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[def-standard-and-costandard-objects-in-category-o]]): enough projectives, finite length and weight spaces, simple highest-weight objects, essential projective covers, and finite direct-sum decompositions.

[F3] Ordinary weights and orthogonality ([[prop-weights-of-a-verma-module-lie-below-lambda]], [[thm-universal-property-of-verma-modules]], [[lem-standard-costandard-hom-and-ext-vanishing]]): ordinary Verma weights lie in $\lambda-Q^+$; a highest-weight vector generates a quotient of that Verma; ordinary standard-costandard Hom is $\delta_{\lambda\mu}\mathbb C$. Here $Q^+$ is the nonnegative integral simple-root cone; its strict root order is transitive.

[F4] Levi splitting and PBW ([[thm-weyls-complete-reducibility-theorem]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]): finite-dimensional $\mathfrak h$-semisimple Levi modules split into simples, since the center splits into weight spaces and the derived Levi is semisimple; $U(\mathfrak g)=N\otimes B$ by PBW; $N$ has nonpositive $\zeta$-degrees, $N_0=\mathbb C$ and finite-dimensional homogeneous pieces.

[F5] Central summands ([[thm-category-o-decomposes-by-generalized-central-character]], [[cor-central-characters-are-dot-weyl-orbits]]): every object has finite central-character support, different summands have no morphisms, and projection to each summand is exact. For any central character $\chi$, its parabolic simple labels form the finite set $\Sigma_\chi$ of $\mathfrak p$-dominant weights in its dot-Weyl orbit; no ambient integrality or connectedness is assumed.

[F6] Restricted duality ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]) is exact, simple-preserving and involutive, exchanges ordinary standards and costandards, and preserves the parabolic subcategory. Projectivity and injectivity have their represented-Hom meaning ([[def-projective-object]], [[def-injective-object]]). The Axiom of Choice ([[def-axiom-of-choice]]) is inherited and used for bases, maximal kernels, splittings and the indicated covers and lifts.

## Proof

**Proof technique:** direct.

1.1 **Simples and standards.** By [F1], $\mathfrak p$-dominant highest weights are exactly the simple labels in $\mathcal O^{\mathfrak p}$. Their generalized standards are quotients of the ordinary Vermas with the same one-dimensional highest-weight space and simple head. They have finite length by [F2], and their weights, and hence highest weights of composition factors, lie in $\lambda-Q^+$ by [F3]. For any parabolic quotient of the ordinary Verma, the image of its highest vector is killed by the full positive nilpotent algebra. Its finite Levi span is the cyclic highest-weight simple $E(\lambda)$ by complete reducibility, and the radical kills that span since it kills the highest vector and is Levi-stable. The induction universal property therefore factors the quotient map through $\Delta_{\mathfrak p}(\lambda)$. This proves the largest-quotient assertion locally. This proves parts (1) and (2). [F1, F2, F3, F4]

1.2 **Largest locally finite quotient.** For $M\in\mathcal O$, let $\mathcal K$ be the set of its subobjects $K$ such that $M/K\in\mathcal O^{\mathfrak p}$. It contains $M$, and finite length bounds $\ell(M/K)$, so choose $K_0$ for which this quotient length is maximal. For every $K\in\mathcal K$, the diagonal map embeds $M/(K\cap K_0)$ in $M/K\oplus M/K_0$. Serre closure gives $K\cap K_0\in\mathcal K$. Maximality and the epimorphism $M/(K\cap K_0)\to M/K_0$ force equality of lengths; its kernel is therefore zero and $K_0\subseteq K$. Thus $K_0$ is the least kernel among all parabolic quotients. For a map $M\to V$ with $V$ parabolic, its image is parabolic and its kernel lies in $\mathcal K$, so the map factors uniquely through $M/K_0$. This proves the functorial universal property of $L_{\mathfrak p}M=M/K_0$ and its left adjunction to the exact inclusion. It is right exact as a left adjoint. [F1, F2, F6, algebra]

1.3 **The correct Hom arrows.** The ordinary Verma surjection is $M(\eta)\twoheadrightarrow\Delta_{\mathfrak p}(\eta)$, and the costandard inclusion is $\nabla_{\mathfrak p}(\xi)\hookrightarrow DM(\xi)$. Composing with these maps injects parabolic $\operatorname{Hom}(\Delta_{\mathfrak p}(\eta),\nabla_{\mathfrak p}(\xi))$ into the ordinary standard-costandard Hom of [F3]. Thus it is zero for different labels and at most one-dimensional for equal labels. In the equal case the nonzero composite through $L(\eta)$ is a homomorphism from the standard head to the costandard socle, so its dimension is one. [F1, F3, F6, algebra]

1.4 **Every parabolic standard-costandard extension splits.** Consider $0\to\nabla_{\mathfrak p}(\xi)\to X\to\Delta_{\mathfrak p}(\eta)\to0$. First suppose $\xi-\eta\notin Q^+\setminus\{0\}$, including equality and incomparability. Choose a weight-$\eta$ lift $v$ of the source highest vector. If a positive root vector sent $v$ nontrivially to weight $\eta+\alpha$, its image in the standard quotient would be zero, so this weight would occur in the costandard. But all costandard weights are $\le\xi$; hence $\eta<\eta+\alpha\le\xi$ would imply $\eta<\xi$, contrary to the case assumption. Thus $v$ is killed by every positive root vector. Its Levi span is finite dimensional because $X$ is locally parabolic-finite. By [F4] it is the cyclic finite Levi highest-weight simple $E(\eta)$: complete reducibility decomposes the span, and the nonzero components of a highest-weight vector of weight $\eta$ belong to copies of that same simple, with cyclic diagonal span one copy. The radical kills this whole span since it kills $v$ and $[\mathfrak l,\mathfrak u]\subseteq\mathfrak u$. Induction therefore gives a map $\Delta_{\mathfrak p}(\eta)\to X$ whose composite onto the quotient is the identity on its generating top, hence the identity. The extension splits. In the remaining case $\eta<\xi$, duality gives an extension with reversed pair $(\xi,\eta)$, to which the first case applies; dualizing the splitting back finishes the proof. Consequently parabolic $\operatorname{Ext}^1(\Delta_{\mathfrak p}(\eta),\nabla_{\mathfrak p}(\xi))=0$ for every pair, proved inside this category. The argument uses the absence of a weight obtained by raising the chosen top, not a total ordering of incomparable highest weights. [F1, F2, F3, F4, F6, algebra]

1.5 **Integer bounds in every central summand.** Fix any central character $\chi$ with a parabolic label $\eta\in\Sigma_\chi$. Put $d=\max\{(\nu-\eta)(\zeta):\nu\in\Sigma_\chi,\ (\nu-\eta)(\zeta)\in\mathbb Z\}$. This is a nonnegative integer, since the set is finite and contains $0$ from $\nu=\eta$. Every weight $\gamma$ of an object $W$ in this summand belongs to $\nu-Q^+$ for some composition-factor label $\nu\in\Sigma_\chi$. Because $Q^+(\zeta)\subseteq\mathbb Z_{\ge0}$, if $\gamma(\zeta)-\eta(\zeta)\in\mathbb Z$ then $(\nu-\eta)(\zeta)\in\mathbb Z$ and $\gamma(\zeta)-\eta(\zeta)\le d$. Thus the $\zeta$-eigenvalues in the coset $\eta(\zeta)+\mathbb Z$ have a uniform upper bound. This compares integer differences only, without ordering complex eigenvalues in different cosets or requiring a dot-dominant maximum. [F1, F2, F3, F4, F5, algebra]

2.1 **Finite bounded induced projectives.** Let $E=E(\eta)$ and let $B_{\le d}(E)$ be $U(\mathfrak p)\otimes_{U(\mathfrak l)}E$ modulo the positive-radical PBW terms of degree greater than $d$. The excluded terms form a submodule since the Levi preserves degree and the radical increases it. The quotient is finite dimensional by [F4]. A Levi map $E\to W$ extends to the induced $\mathfrak p$-module, and its extension kills those terms by step 1.5: $\zeta$ acts on $E$ by $\eta(\zeta)$ and a degree-$k$ term would map to eigenvalue $\eta(\zeta)+k$. The descending degree filtration of $B_{\le d}(E)$ has semisimple Levi slices with radical acting by zero. Refining the slices into Levi simples and inducing exactly by PBW gives a finite generalized-standard flag; Serre closure places the induced module in $\mathcal O^{\mathfrak p}$. By central projection and induction adjunction, $Q(E)=\operatorname{pr}_\chi(U(\mathfrak g)\otimes_B B_{\le d}(E))$ represents $\operatorname{Hom}_{\mathfrak l}(E,W)$ on this summand. This functor is exact: lift a weight basis of the finite Levi image through an epimorphism, take the sum of the finite Levi spans of the lifts, and split its epimorphism onto that image by [F4]. The inclusion $E(\eta)\hookrightarrow L(\eta)$ induces a nonzero map $Q(E)\to L(\eta)$, hence an epimorphism. Thus $Q(E)$ is projective and maps onto this simple. [F1, F2, F4, F5, F6, step 1.5, algebra]

2.2 **Projective covers and enough projectives.** The adjunction gives $\operatorname{Hom}_{\mathcal O^{\mathfrak p}}(L_{\mathfrak p}P,-)=\operatorname{Hom}_{\mathcal O}(P,-)$ on the parabolic subcategory, so an ordinary projective has parabolic projective image. For a parabolic simple $L(\lambda)$, apply $L_{\mathfrak p}$ to the ordinary projective cover to obtain $L_{\mathfrak p}P^{(\mathcal O)}(\lambda)\twoheadrightarrow L(\lambda)$. If a subobject of this image surjects onto the simple, its inverse image in the ordinary cover does also and is the whole cover by essentiality. Hence the image map is essential and is the required parabolic projective cover. An ordinary projective epimorphism onto any parabolic object becomes a parabolic projective epimorphism by right exactness. Dualizing gives enough injectives. This proves part (3) on all the objects in the stated parabolic category. [F1, F2, F6, step 1.2, algebra]

3.1 **These projectives begin with actual PBW flags.** Filter $B_{\le d}(E)$ by descending radical degree. Each degree slice is finite-dimensional and semisimple for the Levi, with radical acting by zero on the slice. PBW makes induction from $B$ exact, so inducing this filtration gives a finite generalized-standard flag on $U(\mathfrak g)\otimes_B B_{\le d}(E)$. A generalized standard has scalar central character, because its ordinary Verma precursor does; exact central projection therefore either retains or kills each whole standard slice. Hence $Q(E)$ has an actual finite generalized-standard flag. As an $N$-module the unprojected induction is graded free of finite rank, with basis the finite graded space $B_{\le d}(E)$. Central projection is an $N$-linear grading-preserving direct-summand projection. Every parabolic projective cover in the chosen summand is a grading-preserving summand of the corresponding $Q(E)$: lift the epimorphism $Q(E)\to L(\eta)$ to its cover, use essentiality for surjectivity, then split by projectivity. [F1, F2, F4, F5, step 2.2, step 2.1, algebra]

4.1 **Graded direct summands stay free.** For a graded $N$-module bounded above, the equality $V=N_{<0}V$ forces $V=0$: a nonzero homogeneous component of highest occupied degree cannot be obtained from strictly higher-degree components. Let $R$ be a grading-preserving direct summand of a finite graded free $N$-module. Then $R/N_{<0}R$ is finite dimensional. Choose a homogeneous basis of this quotient and lifts to $R$, giving a map from a finite graded free module $G$ onto $R$; its cokernel is bounded above and equals its own $N_{<0}$ multiple, so the map is surjective by the preceding argument. It splits as a graded $N$-map since $R$ is a graded projective summand. The kernel $K$ then has $K/N_{<0}K=0$, because the induced map on generator quotients is an isomorphism and reduction of the split sequence is split exact. The same bounded-above argument gives $K=0$. Thus $R$ is graded free of finite rank. This proves the summand claim without importing the flag criterion or assuming finite-dimensional degree-zero pieces of an enveloping Levi algebra. [F4, F6, step 3.1, algebra]

5.1 **Free finite rank gives generalized-standard flags.** Let $R$ be one of these parabolic $\mathfrak g$-modules, graded free of finite $N$-rank. Within its fixed $\zeta$-eigenvalue coset its degrees are bounded above and its components finite dimensional. Let $a$ be its highest occupied degree. The finite Levi module $R_a$ is semisimple and the positive radical kills it, as it raises degree. A homogeneous free basis shows that all its degree-$a$ basis vectors are part of an $N$-basis, so the induction map $U(\mathfrak g)\otimes_B R_a=N\otimes R_a\to R$ is injective and its quotient is again graded free, with those finitely many generators removed. Decomposing $R_a$ into finite Levi simples gives an actual submodule that is a finite sum of generalized standards. Repeating on the quotient terminates since each step reduces the finite $N$-rank. All subobjects and quotients lie in the selected central summand; hence their simple Levi labels are the allowed labels there. This proves that every projective cover, and therefore every finite sum and summand of them, has a finite generalized-standard flag. The grading is only the actual semisimple $\zeta$-action, shifted on its coset; it is not a Koszul assumption. This proves the flag part of (4). [F1, F2, F4, F5, step 3.1, step 4.1, induction]

6.1 **Reciprocity.** For a generalized-standard flag of $P^{\mathfrak p}(\lambda)$, steps 1.3 and 1.4 make $\operatorname{Hom}(-,\nabla_{\mathfrak p}(\mu))$ exact along its flag sequences and show that its dimension counts precisely the $\Delta_{\mathfrak p}(\mu)$ sections. On the other hand projectivity makes $\operatorname{Hom}(P^{\mathfrak p}(\lambda),-)$ exact along a composition series of $\nabla_{\mathfrak p}(\mu)$. Its value on a simple has dimension one for $L(\lambda)$ and zero for every other label, by the essential simple head of the projective cover. Consequently $(P^{\mathfrak p}(\lambda):\Delta_{\mathfrak p}(\mu))=[\nabla_{\mathfrak p}(\mu):L(\lambda)]=[\Delta_{\mathfrak p}(\mu):L(\lambda)]$, the last equality by simple-preserving duality. This also proves independence of flag multiplicities and their finiteness. By standard support, only $\mu\ge\lambda$ occurs, and the diagonal multiplicity is one. [F1, F2, F6, step 2.2, step 1.3, step 1.4, step 5.1, algebra]

7.1 **Labelled standard quotient and its higher-standard kernel.** The same lifting argument as in step 1.4, with $\Delta_{\mathfrak p}(\beta)$ in place of the costandard, shows $\operatorname{Ext}^1(\Delta_{\mathfrak p}(\alpha),\Delta_{\mathfrak p}(\beta))=0$ whenever $\alpha\not<\beta$: its submodule has no weight strictly above the lifted top $\alpha$, and finite Levi splitting supplies the section. In the flag of $P^{\mathfrak p}(\lambda)$ from step 5.1, the labelled standard occurs once and every other standard has strictly higher label by step 6.1. Whenever the labelled standard precedes a higher standard in the flag, the corresponding two-section subquotient splits by this Ext vanishing. Swapping those two sections moves the labelled standard upwards in the flag; finitely many swaps place it last. Thus there is an actual epimorphism $P^{\mathfrak p}(\lambda)\to\Delta_{\mathfrak p}(\lambda)$ with a kernel having a finite flag of strictly higher standards. This is the highest-weight projective-kernel axiom, obtained without the tilting or homological-criterion suppliers. [F1, F2, F3, F4, step 1.4, step 5.1, step 6.1, algebra]

8.1 **Bases, characters and conclusion.** In any fixed central-character summand there are finitely many allowed labels by [F5]. Their simple classes form its finite-length Grothendieck basis; the standard-to-simple matrix has diagonal one and entries only below the diagonal after a linear extension of the root order. It is therefore invertible over $\mathbb Z$, so standard classes give another basis. A finite relation between the simple characters has a maximal highest-weight label with a nonzero coefficient; its highest-weight monomial occurs in that simple with coefficient one and in no remaining incomparable or lower simple, so the relation cannot vanish. Inducting proves that characters are injective on this Grothendieck group. The constructions above establish the simples and standard support, the reflector and enough projectives, the local Hom/Ext orthogonality, actual generalized-standard flags, reciprocity and the labelled higher-standard kernel. Duality has remained the ordinary restricted duality restricted to the actual parabolic subcategory. Thus every nonzero summand has the finite highest-weight structure asserted in (4), including nonintegral and disconnected summands. The exact central projections preserve the parabolic subcategory by Serre closure, giving its categorical direct-sum decomposition with finite support. These are all four parts of the Statement. [F1, F2, F5, F6, step 1.1, step 1.2, step 2.2, step 1.3, step 1.4, step 5.1, step 6.1, step 7.1] ∎

## Remarks

This proof constructs the generalized-standard projective flags by finite graded PBW and Levi splitting, including the Levi center. It uses neither the homological flag criterion nor tilting classification, and does not apply the merely right-exact reflector to an ordinary Verma flag.
