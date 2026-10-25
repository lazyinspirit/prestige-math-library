---
id: thm-lifting-of-indecomposable-projectives-to-the-deformed-family
kind: theorem
title: Lifting of indecomposable projectives to the deformed family
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-the-deformed-category-o-family-and-its-specializations,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-universal-property-of-verma-modules,
       thm-category-o-has-enough-projectives,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       thm-every-category-o-object-has-finite-length,
       lem-finite-length-objects-decompose-into-indecomposables,
       thm-bgg-reciprocity,
       lem-finite-dimensional-tensors-reach-every-block-simple,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       thm-harish-chandra-isomorphism-for-the-center,
       cor-central-characters-are-dot-weyl-orbits,
       thm-nakayama-lemma,
       thm-chinese-remainder-theorem-for-comaximal-ideals,
       def-axiom-of-choice,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       def-verma-flag-and-its-multiplicities]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.1, Propositions 2-5 and their proofs (preprint pp. 7-10): the deformed projectives and the base-change statement"
    - title: "Wolfgang Soergel, Universelle versus relative Einhuelle (Math. Ann. 284 (1989) 177-198)"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0284/LOG_0020.pdf"
      locator: "Section 2.1, Proposition 1 and Section 3.5, Corollary 8 (pp. 180 and 185); image-only scan read via OCR"
---

## Statement

Assume the Axiom of Choice. Let $\lambda$ be dominant regular integral,
$R=S(\mathfrak h)_{(0)}$ the localization at the origin, and use the selected
component $\mathcal D_R^{[\lambda]}(\lambda)$ of the tensor-generated deformed
family of [[def-the-deformed-category-o-family-and-its-specializations]]. For
every $x\in W$ there is a projective $P_R(x,\lambda)$ in the deformed
$\lambda$-block whose residue fiber is $P(x\cdot\lambda)$; it is unique up to
isomorphism, and every indecomposable of this selected tensor component is one
of these lifts. Each lift has a finite deformed Verma flag with the same
multiplicities as its closed fiber. More generally, a finite projective in this
block is a direct summand of a finite sum of truncated induced projectives
representing relative weight spaces; for every map of deformation algebras
$R\to R'$ its base change is projective in the corresponding truncated category
and
$$\operatorname{Hom}_{\mathcal O_R}(P,N)\otimes_RR'\cong\operatorname{Hom}_{\mathcal O_{R'}}(P\otimes_RR',N\otimes_RR').$$
For a finite Verma-filtered target $N$ this Hom module is finite free over
local $R$. A $\mathfrak g\otimes R$-linear map between such finite
projective/Verma-filtered objects whose residue fiber is an isomorphism is
itself an isomorphism, weight by weight. For a dot-dominant integral target
$\nu$, including singular $\nu$, the same local projective construction gives
all lifts in its deformed block, with labels the distinct cosets $W/W_\nu$,
where $W_\nu:=\operatorname{Stab}_W(\nu+\rho)$ is the dot stabilizer;
these lifts belong to the target component $\mathcal D_R^{[\nu]}(\lambda)$ of a
regular-source tensor family. It is neither necessary nor asserted that the
singular Verma itself generates every target projective, and the other central
components of the full tensor family are not claimed to have only these
indecomposables.

## Facts & Assumptions

**Given:** AC, the local ring $R=S(\mathfrak h)_{(0)}$ with maximal ideal $\mathfrak m$, residue field $k=R/\mathfrak m=\mathbb C$, tautological map $\tau:\mathfrak h\to R$, and the regular or singular dominant dot orbit specified in the Statement.

[F1] PBW makes $U(\mathfrak g)$ right-$U(\mathfrak b)$-free and gives the ordered positive-root monomials of $U(\mathfrak n^+)$; induced rank-one highest-weight modules are the deformed Vermas ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[thm-universal-property-of-verma-modules]], [[def-the-deformed-category-o-family-and-its-specializations]]).

[F2] Ordinary block projectives exist, their covers are unique, and BGG reciprocity supplies their Verma multiplicities. In the regular block the dominant Verma is projective and wall words contain the projective with their top standard label once, with all other summands having strictly higher highest weights ([[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-bgg-reciprocity]], [[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]]).

[F3] On a finite deformed Verma flag, central-character components are actual polynomial projectors: choose a central element separating the finitely many characters at the origin, group its annihilating polynomial by those characters, and use the unit resultants and Chinese remaindering over $R$ ([[thm-harish-chandra-isomorphism-for-the-center]], [[cor-central-characters-are-dot-weyl-orbits]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F4] An existing map inducing an isomorphism modulo $\mathfrak m$ is an isomorphism on every finite free weight space, by its unit determinant ([[thm-nakayama-lemma]]).

## Proof

**Proof technique:** construct relative truncated weight projectives, then lift both maps of an actual split inclusion; no idempotent-lifting assumption on $R$ is used.

1.1 Here is the ambient category used for the truncated assertions. For a deformation algebra $T$, its objects are finitely generated $U(\mathfrak g)\otimes T$-modules which are direct sums of relative weight spaces $N^\xi=\{n:hn=(\xi(h)+\tau(h))n\text{ for all }h\in\mathfrak h\}$, have finite $T$-modules as weight spaces, and have weights in a finite union of downward root cones. Morphisms preserve those weight spaces. The full subcategory $\mathcal O_T^{\le\Lambda}$ has weights $\xi\le\Lambda$ in one root-lattice coset; for a finite union of cosets use one bound in each coset. Kernels and cokernels remain in this category, as do extensions whose middle terms are relative-weight modules: weight decomposition makes weight spaces exact, the enveloping algebra over Noetherian $R$ is Noetherian by PBW, and positive-root action is locally nilpotent because only finitely many weights above a fixed weight occur. For arbitrary $R'$ the representing construction below uses the analogous category of relative weight modules, without requiring kernels of finitely generated objects to be finitely generated. Thus every projectivity/base-change assertion has a specified ambient category, distinct from the additive tensor family. [F1, algebra]

1.2 A direct summand of a finite deformed Verma-filtered object over $R$ again has a deformed Verma flag. To see this, choose a maximal highest-weight label $\eta$ of its flag. Positive-root action above $\eta$ vanishes, so the full $\eta$-weight space consists of highest-weight vectors. Successive examination of the flag gives an injection $\Delta_R(\eta)\otimes_R X^\eta\to X$ with Verma-filtered quotient: in a factor of another label no weight $\eta$ occurs, and a factor of label $\eta$ contributes its free highest-weight line; lifting that line is unobstructed since there is no weight strictly above $\eta$. PBW verifies injectivity and the quotient assertion along the finite flag. This submodule is canonical and preserved by every endomorphism of $X$. An idempotent therefore splits its finite free coefficient space into finite free images over local $R$, and induces an idempotent on the quotient. Induction on flag length supplies flags on both summands. Specialization of such a flag is exact and preserves each multiplicity, since all the flag factors and their weight spaces are $R$-free. [F1, F4, algebra]

2.1 Fix $\xi\le\Lambda$. In $U(\mathfrak b)\otimes T$, quotient by the left ideal generated by $h-\xi(h)-\tau(h)$ and by every positive PBW monomial of weight $\beta$ for which $\xi+\beta\not\le\Lambda$. The latter monomials form a positive left ideal since adding a positive root cannot restore the inequality. Call the resulting $\mathfrak b$-module $B_T^\Lambda(\xi)$, and put $Q_T^\Lambda(\xi)=U(\mathfrak g)\otimes_{U(\mathfrak b)}B_T^\Lambda(\xi)$. PBW gives a finite $T$-basis of the retained positive monomials: the allowed $\beta$ have bounded simple-root coefficients. Ordering them by decreasing height gives a $\mathfrak b$-stable filtration, refined within each weight, with rank-one quotients of weights $\xi+\beta+\tau$. Exact induction by PBW gives a finite deformed Verma flag on $Q_T^\Lambda(\xi)$, and all its weights are $\le\Lambda$. Evaluation at the cyclic generator gives $\operatorname{Hom}(Q_T^\Lambda(\xi),N)=N^\xi$ for $N\in\mathcal O_T^{\le\Lambda}$: the excluded monomials kill every vector of that weight, and those are precisely the defining relations. The weight functor is exact, so $Q_T^\Lambda(\xi)$ is projective. This description commutes with every map $T\to T'$, as does its Hom functor whenever $N$ is base changed, because $(N\otimes_TT')^\xi=N^\xi\otimes_TT'$ in the specified relative-weight decomposition. [F1, step 1.1, construct]

3.1 Every finitely generated projective in this truncated category is a direct summand of a finite sum of these $Q$'s. Indeed choose finitely many homogeneous generators of the projective; the corresponding evaluations give a surjection from that sum, and projectivity splits it. Consequently its Hom functor commutes with arbitrary algebra base change, by restricting the weight-space isomorphisms of step 2.1 to the image of its split idempotent. For a Verma-filtered target all weight spaces are finite free over $R$, since each successive weight-space quotient is finite free and the finite extensions split as $R$-modules. Hom from a finite sum of $Q$'s is therefore finite free, and Hom from its summand is finite projective, hence finite free over local $R$: lift a residue basis, split the resulting Nakayama surjection, and apply Nakayama to its kernel. [F4, step 2.1, algebra]

4.1 Apply the projectors of [F3] to $Q_R^\Lambda(\xi)$ to select the required block, with $\Lambda$ a dominant bound. Its residue is an ordinary projective and decomposes into projective covers. Evaluation into a simple gives $\operatorname{Hom}(Q_k^\Lambda(\xi),L(\eta))=L(\eta)^\xi$, so a summand $P(\eta)$ can occur only when $\eta\ge\xi$, and $P(\xi)$ occurs once if $\xi$ is a highest-weight label. Order the finite orbit by decreasing highest weight. Suppose all higher $P_R(\eta)$ have already been constructed. Let $H_R$ be their sum with the multiplicities in the actual decomposition of the residue of the selected $Q$. Over $k$ choose the split inclusion $i_0:H_k\to Q_k$ and projection $p_0:Q_k\to H_k$. Step 3.1 lifts both to $i,p$ over $R$, because both sources are already projective. The composite $pi$ is the identity modulo $\mathfrak m$, hence invertible weight by weight by Nakayama. Replace $p$ by $(pi)^{-1}p$; then $pi=1$ and $Q_R=i(H_R)\oplus\ker p$ is an actual split decomposition. The complement is projective, has a Verma flag by step 1.2, and has residue $P(\xi)$. This constructs $P_R(\xi)$ recursively, with its asserted multiplicities. The first label needs no subtraction. [F2, F3, F4, step 3.1, step 1.2, construct]

5.1 If $P_R$ and $P'_R$ are two such lifts, lift an ordinary isomorphism and its inverse using step 3.1 for both projective sources. Their composites are identity on the residue and hence are isomorphisms weight by weight; adjusting either map gives an isomorphism $P_R\cong P'_R$. This proves uniqueness by actual maps, rather than by a Grothendieck class. A nonzero direct summand of a lift has a nonzero residue: its finite projective weight spaces cannot all have zero residue by Nakayama. Since the residue cover is indecomposable, each lift is indecomposable. More generally lift the two splitting maps for the complete residue decomposition of any finite Verma-filtered projective; the same composite-inverse construction identifies it with the sum of the corresponding lifts. [F2, F4, step 3.1, step 4.1, algebra]

6.1 The abstract lifts belong to the tensor-generated family without presuming its deformed projectivity. Each selected deformed wall word has a Verma flag with labels in $W\cdot\lambda$, hence weights $\le\lambda$, and its residue is an ordinary projective by exact tensor biadjunction and block projection. Decompose that residue into its actual projective covers, and form the corresponding sum $H_R$ of the abstract lifts of step 4.1, all constructed in $\mathcal O_R^{\le\lambda}$. The residue isomorphism $H_k\to X_k$ lifts to $H_R\to X_R$ by step 3.1, whose source is already a truncated projective; the target need not yet be known projective. Both objects have finite free weight spaces, so [F4] makes this map an isomorphism. Thus the deformed word is an actual direct sum of abstract lifts; whenever its residue contains $P(x\cdot\lambda)$, that lift is a tensor-family summand. The ordinary covering statement [F2] supplies such a word for every $x$. Exactly the same source-projective argument applies to any selected tensor object: its residue is projective, its selected flag labels lie in $W\cdot\lambda$, and the lifted residue decomposition map is invertible. Hence every such object is a sum of these lifts and all its indecomposables are exactly the stated ones. This proves deformed projectivity by comparison with the representing projectives. [F2, F3, F4, step 3.1, step 4.1, step 5.1, algebra]

6.2 Steps 2.1 and 3.1 prove the arbitrary-base-change Hom isomorphism and projectivity after base change for every finite truncated projective, including each selected lift. A map between the projective/Verma-filtered objects appearing here has finite free source and target weight spaces; if its residue is an isomorphism, the matrix on each weight space has determinant a unit and is invertible. The weightwise inverses commute with the $\mathfrak g$-action since the original map does, so the map is an isomorphism. This verifies all the base-change, freeness and weightwise assertions in the Statement. [F4, step 3.1, step 5.1, algebra]

7.1 For a singular dot-dominant target $\nu$, steps 1.1--5.1 apply to its finite orbit of distinct weights, indexed by $W/W_\nu$, with bound $\nu$. Onto translation sends a regular standard with label $y$ to the singular standard with label $yW_\nu$, once: the dominant norm equality says $x^{-1}yv\in W_\nu v$, hence $xu=yu$, where $u=\nu+\rho$ and $v=\lambda+\rho$; it does not say that $W_\nu v$ is a singleton. In particular every singular Verma is an onto-translated regular Verma. Every singular simple is therefore a quotient of an onto-translated regular projective, by exactness and the regular projective cover. Onto translation is ordinarily projective-preserving by biadjunction, so its decomposition contains that singular simple's projective cover. Apply its deformed tensor-and-projector construction to the regular lifts already in the family. The resulting object has a deformed singular Verma flag, weights $\le\nu$, and projective ordinary residue. As in step 6.1, lift a residue isomorphism from the sum of its already constructed abstract singular truncated-projective lifts to this object, using step 3.1 for that source, and invert it weightwise by [F4]. Thus each abstract singular lift is a summand of a regular-source tensor-family object. Conversely every selected singular tensor object has projective residue and the same argument identifies it with the sum of its singular lifts. This proves the target-component assertion over the original polynomial local ring $R$, with no supposition that the singular Verma generates every projective. [F2, F3, F4, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎
