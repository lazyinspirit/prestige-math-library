---
id: def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category
kind: definition
title: "Standard- and costandard-filtered objects and tilting objects"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-standard-and-costandard-objects-in-category-o,
       def-verma-flag-and-its-multiplicities,
       thm-bgg-reciprocity,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       thm-every-category-o-object-has-finite-length,
       cor-injectives-have-costandard-filtrations,
       thm-projectives-in-category-o-have-verma-flags,
       thm-parabolic-category-o-is-a-highest-weight-category,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Sections 4.4–4.6, printed/PDF pp. 20–21: BGG reciprocity, simple-preserving duality, Proposition 4.7 (all-positive-Ext criterion), Theorem 4.8 and the parabolic highest-weight structure. These pages were retrieved and read for this repair; the complete local Ext1/Tor proof is supplied below."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the category-$\mathcal O$ suppliers. Fix a finite genuine integral parabolic central summand $\mathcal C$ over $\mathbb C$, with its finite highest-weight structure from [[thm-parabolic-category-o-is-a-highest-weight-category]]. Connectedness is not required. Write $(\Lambda,\preceq)$ for its label poset, $L_\lambda$ for its simples, $\Delta_\lambda$ for its generalized standards, and $\nabla_\lambda=D\Delta_\lambda$ for its costandards. The duality $D$ is exact, contravariant and simple-preserving.

The projective cover $P_\lambda$ and injective envelope $I_\lambda=DP_\lambda$ have exact sequences
$$0\longrightarrow K_\lambda\longrightarrow P_\lambda\longrightarrow\Delta_\lambda\longrightarrow0,\qquad0\longrightarrow\nabla_\lambda\longrightarrow I_\lambda\longrightarrow C_\lambda\longrightarrow0,$$
where $K_\lambda$ has a finite standard flag with labels strictly greater than $\lambda$, and $C_\lambda=DK_\lambda$ has a finite costandard flag with such labels. Generally $I_\lambda$ is larger than $\nabla_\lambda$. Standards have simple heads, costandards simple socles, and their composition labels are $\preceq\lambda$. In this split setting,
$$\operatorname{Hom}(\Delta_\lambda,\nabla_\mu)=\delta_{\lambda\mu}\mathbb C,\qquad\operatorname{Ext}^j(\Delta_\lambda,\nabla_\mu)=0\quad(j>0),$$
and BGG reciprocity is $(P_\lambda:\Delta_\mu)=[\nabla_\mu:L_\lambda]=[\Delta_\mu:L_\lambda]$. Higher Ext vanishing is justified below from the standard-kernel sequences and the local Hom/$\operatorname{Ext}^1$ statement.

A **finite standard flag** of $N$ is a finite chain $0=N_0\subset N_1\subset\cdots\subset N_r=N$ with sections $\Delta_{\lambda_i}$; a **finite costandard flag** has sections $\nabla_{\lambda_i}$. The zero object has the empty flag. Write $\mathcal F(\Delta)$ and $\mathcal F(\nabla)$ for the corresponding full subcategories. They are exact categories with the short exact sequences inherited from $\mathcal C$, closed under finite sums, extensions and direct summands. Their flag multiplicities are independent of the chosen flag and satisfy
$$(N:\Delta_\lambda)=\dim\operatorname{Hom}(N,\nabla_\lambda),\qquad(M:\nabla_\lambda)=\dim\operatorname{Hom}(\Delta_\lambda,M).$$
For arbitrary objects of the fixed finite summand, the equivalent homological criteria are
$$\mathcal F(\Delta)=\{N:\operatorname{Ext}^1(N,\nabla_\lambda)=0\text{ for all }\lambda\}=\{N:\operatorname{Ext}^j(N,\nabla_\lambda)=0\text{ for all }\lambda,j>0\},$$
$$\mathcal F(\nabla)=\{M:\operatorname{Ext}^1(\Delta_\lambda,M)=0\text{ for all }\lambda\}=\{M:\operatorname{Ext}^j(\Delta_\lambda,M)=0\text{ for all }\lambda,j>0\}.$$
The duality exchanges the two flag categories. A **tilting object** belongs to their intersection.

An indecomposable tilting object is **normalized at** $\lambda$, and written $T_\lambda$, if it has an inclusion $\Delta_\lambda\hookrightarrow T_\lambda$ whose cokernel is standard-filtered by labels strictly smaller than $\lambda$. Its bottom standard occurs once and $\lambda$ is its unique maximal composition-support label. Such an object, when it exists, is unique up to isomorphism. Existence and classification are supplied later; they are not used to prove the criteria. For a lower ideal $\Gamma$ containing $\lambda$, this same object is normalized tilting in the corresponding Serre subcategory; it is unchanged by the truncation.

## Facts & Assumptions

**Given:** The finite split highest-weight central summand $\mathcal C$ over $\mathbb C$, the labels and structural objects above, and its finite-dimensional basic block algebra $A$, whose finite-dimensional left modules model $\mathcal C$.

[F1] Highest-weight structure ([[thm-parabolic-category-o-is-a-highest-weight-category]]): finite labels and length, finite-dimensional Hom, standard support $[\Delta_\lambda:L_\mu]\ne0\Rightarrow\mu\preceq\lambda$, diagonal multiplicity one, projective covers, standard-kernel sequences with strictly higher flags, BGG reciprocity, and $\operatorname{Hom}(\Delta_\lambda,\nabla_\mu)=\delta_{\lambda\mu}\mathbb C$ and $\operatorname{Ext}^1(\Delta_\lambda,\nabla_\mu)=0$ inside the parabolic category.

[F2] The flag terminology agrees with the ordinary category-$\mathcal O$ terminology ([[def-standard-and-costandard-objects-in-category-o]], [[def-verma-flag-and-its-multiplicities]], [[thm-bgg-reciprocity]], [[thm-projectives-in-category-o-have-verma-flags]], [[cor-injectives-have-costandard-filtrations]], [[thm-every-category-o-object-has-finite-length]]). The argument here uses the actual generalized-standard structure in [F1].

[F3] Restricted BGG duality ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]) restricts to an exact contravariant involution of this summand, fixes simples and sends $\Delta_\lambda$ to $\nabla_\lambda$ and $P_\lambda$ to $I_\lambda$.

[F4] In the split basic algebra model, primitive idempotents $e_\lambda$ give $P_\lambda=Ae_\lambda$ and $\dim e_\lambda N=[N:L_\lambda]$. A projective generator is the finite sum of the projective covers; its endomorphism algebra is finite dimensional by [F1]. All modules and multiplicity spaces used below are finite dimensional over $\mathbb C$.

[F5] The Axiom of Choice ([[def-axiom-of-choice]]) is available when choosing bases, lifts, projective resolutions and injective cogenerators; no stronger field or nonsplit division-algebra assertion is made.

## Proof

**Proof technique:** direct.

1.1 **Flags, duality and the injective sequence.** Finite sums have flags by concatenation. Given $0\to X\to Y\to Z\to0$ with $X,Z$ standard-filtered, pull a flag of $Z$ back to $Y$ and precede it with the flag of $X$; this gives a standard flag of $Y$. Duality proves both claims for costandard flags and exchanges the two flag categories. Dualizing $0\to K_\lambda\to P_\lambda\to\Delta_\lambda\to0$ gives precisely $0\to\nabla_\lambda\to I_\lambda\to DK_\lambda\to0$, whose cokernel is costandard-filtered by labels strictly above $\lambda$. In particular this construction does not identify a general costandard with an injective envelope. [F1, F2, F3]

2.1 **All positive standard-costandard Ext groups.** The degree-one vanishing is [F1]. Suppose vanishing holds in degree $j-1$ for every pair of structural labels, where $j\ge2$. A finite standard flag of $K_\lambda$ and its long exact sequences give $\operatorname{Ext}^{j-1}(K_\lambda,\nabla_\mu)=0$. The projective sequence then gives $\operatorname{Ext}^{j}(\Delta_\lambda,\nabla_\mu)\cong\operatorname{Ext}^{j-1}(K_\lambda,\nabla_\mu)=0$. Induction proves all positive degrees. Filtering the first variable now shows $\operatorname{Ext}^{j}(N,\nabla_\mu)=0$ for any standard-filtered $N$; filtering the second variable gives the dual statement for costandard-filtered objects, and also vanishing between any standard-filtered and costandard-filtered pair. [F1, step 1.1, induction]

2.2 **The maximal trace.** Choose a maximal label $\eta$ and put $e=e_\eta$. Since the standard-kernel sequence has no higher labels, $Ae=P_\eta=\Delta_\eta$. Every other standard is killed by $e$, while $\dim e\Delta_\eta=1$. An endomorphism of $\Delta_\eta$ is determined by its action on the generating top space, so $eAe=\operatorname{End}_A(Ae)^{\mathrm{op}}=\mathbb C$. For a standard-filtered $X$, the evaluation map $Ae\otimes_{\mathbb C}eX\to X$ is injective and its quotient is standard-filtered with no $\eta$ section. To prove this, induct on a chosen flag. If its last section is $\Delta_\eta$, the section splits off because $\Delta_\eta$ is projective. If its last section is another $\Delta_\lambda$, it is killed by $e$, so $eX=eX'$ for the preceding flag subobject $X'$ and the trace lies in $X'$; the induction quotient extends by $\Delta_\lambda$. This proves the claim in both cases, including identification with the canonical trace generated by $eX$. [F1, F4, F5, step 1.1, induction]

3.1 **Multiplicity formulas.** For $0\to N'\to N\to\Delta_\lambda\to0$ with $N'$ standard-filtered, applying $\operatorname{Hom}(-,\nabla_\mu)$ and step 2.1 gives a short exact sequence of Hom spaces. Its dimension adds one precisely for $\lambda=\mu$. Inducting along a flag proves $(N:\Delta_\mu)=\dim\operatorname{Hom}(N,\nabla_\mu)$ and independence of the flag. Duality gives $(M:\nabla_\mu)=\dim\operatorname{Hom}(\Delta_\mu,M)$ for costandard-filtered $M$. [F1, F3, step 2.1, induction]

3.2 **The genuine heredity ideal.** Apply step 2.2 to each projective column $Ae_\lambda$ and sum the columns. The resulting injective evaluation map is multiplication $Ae\otimes_{eAe}eA\to A$, with image $J=AeA$. Thus $J\cong Ae\otimes_{\mathbb C}eA$, rather than $J=Ae$. It is projective on both sides: on the left it is a finite sum of $Ae$, and on the right a finite sum of $eA$. Moreover $e\operatorname{rad}(A)e=0$ since $eAe=\mathbb C$, so $J$ is a heredity ideal. Put $A'=A/J$. The finite $A'$-modules are exactly the $A$-modules killed by $e$, hence the Serre subcategory on $\Lambda\setminus\{\eta\}$. Its projective covers for $\lambda\ne\eta$ are $A'e_\lambda=Ae_\lambda/J e_\lambda$. By step 2.2 these have standard flags with all $\eta$ sections removed. The sequence onto $\Delta_\lambda$ has kernel $K_\lambda/J e_\lambda$: the trace $J e_\lambda$ lies in $K_\lambda$ because $e\Delta_\lambda=0$, and applying step 2.2 to $K_\lambda$ gives the required standard flag with the remaining strictly higher labels. Its simple top is still $L_\lambda$, so it is indeed the projective cover. Consequently $A'$ has the smaller highest-weight structure with unchanged standards $\Delta_\lambda$. Duality preserves this Serre subcategory and gives its injective envelopes and unchanged costandards $\nabla_\lambda$. Every injective $A'$-module is therefore costandard-filtered by these smaller labels. This establishes the quotient data needed for induction, without assuming the converse flag criterion. [F1, F3, F4, step 1.1, step 2.2, algebra]

3.3 **Normalized tilting uniqueness.** Suppose $X,X'$ are indecomposable tiltings with normalized inclusions $i:\Delta_\lambda\to X$ and $i':\Delta_\lambda\to X'$. Their cokernels are standard-filtered, so step 2.1 gives $\operatorname{Ext}^1(X/\Delta_\lambda,X')=0$. The Hom exact sequence extends $i'$ to $f:X\to X'$ with $fi=i'$; symmetrically obtain $g:X'\to X$ with $gi'=i$. Then $gf$ and $fg$ restrict to the identity on the common nonzero standard, and no positive power of either is zero. In a finite-dimensional endomorphism algebra of an indecomposable finite-length object, Fitting's decomposition makes every noninvertible endomorphism nilpotent. Hence both composites are invertible and $f$ is an isomorphism. The support of $\Delta_\lambda$ and of the lower-labelled quotient shows that $\lambda$ is the unique maximal support label. No existence or tilting classification was used in the flag-criterion argument. [F1, F4, step 2.1, algebra]

4.1 **Ext1 implies every positive Ext degree.** Suppose $N$ satisfies $\operatorname{Ext}^1_A(N,\nabla_\lambda)=0$ for every label. Finite flags show $\operatorname{Ext}^1_A(N,C)=0$ for every costandard-filtered $C$. More generally, if the groups vanish in degree $j-1$ against all costandards, they vanish in that degree against every costandard-filtered object. Apply this to $C_\lambda$ in the actual sequence $0\to\nabla_\lambda\to I_\lambda\to C_\lambda\to0$ from step 1.1. Since $I_\lambda$ is injective, for $j\ge2$ dimension shifting gives $\operatorname{Ext}^j_A(N,\nabla_\lambda)\cong\operatorname{Ext}^{j-1}_A(N,C_\lambda)=0$. Induction establishes all positive Ext vanishing, and filtering establishes $\operatorname{Ext}^j_A(N,I')=0$ for every $j>0$ and every injective $A'$-module $I'$ from step 3.2, viewed as an $A$-module. [step 1.1, step 3.2, induction]

5.1 **Tor vanishing detected by injectives.** Choose a projective resolution $P_\bullet\to N$ by finite-dimensional projective $A$-modules. Each $A'\otimes_A P_i$ is projective over $A'$. For an injective $A'$-module $I'$, tensor-Hom adjunction identifies $\operatorname{Hom}_{A'}(A'\otimes_A P_\bullet,I')$ with $\operatorname{Hom}_A(P_\bullet,I')$. The latter has zero cohomology in every positive degree by step 4.1. Because $\operatorname{Hom}_{A'}(-,I')$ is exact, the degree-$j$ cohomology of the former is $\operatorname{Hom}_{A'}(H_j(A'\otimes_A P_\bullet),I')$. Injectives detect nonzero finite-dimensional $A'$-modules: embed the semisimple socle of a finite module in a finite sum of the injective envelopes of the simples and extend the map by injectivity. Its kernel is zero because any nonzero finite-length submodule intersects that socle. Thus the full module embeds in such an injective cogenerator. It follows that $H_j(A'\otimes_A P_\bullet)=\operatorname{Tor}^A_j(A',N)=0$ for every $j>0$. This uses actual homology detection, not an assumed exactness of tensoring. [F4, F5, step 3.2, step 4.1, algebra]

6.1 **The trace exact sequence and quotient induction.** Tensor $0\to J\to A\to A'\to0$ with $N$. By step 5.1 its Tor boundary vanishes, and step 3.2 identifies the result as $0\to Ae\otimes_{\mathbb C}eN\to N\to E\to0$, where $E=A'\otimes_A N$. The kernel is a finite sum of $\Delta_\eta$. Moreover $A'\otimes_A P_\bullet$ is a projective resolution of $E$ by step 5.1, and adjunction now gives $\operatorname{Ext}^j_{A'}(E,\nabla_\lambda)=\operatorname{Ext}^j_A(N,\nabla_\lambda)=0$ for $j>0$, $\lambda\ne\eta$. Induct on the number of labels, using the smaller highest-weight category constructed in step 3.2: $E$ is standard-filtered by the smaller labels. The base with no labels is the zero category; with one label the trace sequence itself is $N\cong\Delta_\eta\otimes eN$. Extension closure now makes $N$ standard-filtered. Together with steps 2.1 and 4.1 this proves both displayed standard-flag criteria, using either degree-one or all-positive-Ext vanishing. [step 1.1, step 2.1, step 3.2, step 4.1, step 5.1, induction]

7.1 **The dual criterion and direct summands.** Exact contravariant duality gives $\operatorname{Ext}^j_A(\Delta_\lambda,M)\cong\operatorname{Ext}^j_A(DM,\nabla_\lambda)$ by reversing Yoneda extensions (and likewise in all degrees). The criterion for $DM$ in step 6.1 therefore gives the two costandard-flag criteria for $M$. If a flagged object is a finite direct sum, Ext groups of each summand are direct summands of its vanishing groups. The appropriate criterion shows every summand has the same kind of flag. Thus both flag categories, and their intersection of tilting objects, have all the stated closure properties. [F3, step 1.1, step 2.1, step 6.1, algebra]

8.1 **Lower ideals.** Let $X$ be a normalized tilting object at $\lambda$, and let $\Gamma$ be a lower ideal containing $\lambda$. Every composition label of $X$ lies below $\lambda$, so $X$ belongs to its Serre subcategory. Its standard flag uses labels in $\Gamma$; every costandard occurring in its costandard flag also has its own labelled simple as a composition factor of $X$, hence has label in $\Gamma$. These are the same standards and costandards in the truncated highest-weight category: iteratively removing maximal labels outside $\Gamma$ uses step 3.2. Thus $X$ remains the same normalized tilting there, and uniqueness follows from step 3.3. The closure, duality, multiplicity and full homological-criterion assertions have been established locally, including the genuine injective and heredity-ideal interfaces. [F1, F3, step 1.1, step 3.1, step 3.2, step 6.1, step 7.1, step 3.3] ∎
