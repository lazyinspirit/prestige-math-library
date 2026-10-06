---
id: "thm-resolution-of-singularities-in-characteristic-zero"
kind: "theorem"
title: "Resolution of singularities in characteristic zero"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 20
deps:
  - "thm-proper-ideal-contained-in-maximal-ideal"
  - "thm-lying-over"
  - "lem-canonical-resolution-under-field-isomorphisms"
  - "lem-canonical-resolution-commutes-with-smooth-morphisms"
  - "cor-noether-normalisation-module-finiteness"
  - "cor-field-finite-type-over-a-field-is-a-finite-extension"
  - "def-axiom-of-choice"
  - "def-birational-morphism-schemes"
  - "def-closed-immersion-schemes"
  - "def-field"
  - "def-integral-scheme"
  - "def-locally-finite-type-and-finite-type-morphism"
  - "def-open-immersion-schemes"
  - "def-proper-morphism"
  - "def-smooth-morphism-schemes"
  - "lem-canonical-resolution-commutes-with-ambient-embeddings"
  - "lem-canonical-resolution-over-nonclosed-fields"
  - "lem-embedding-independence-of-desingularization"
  - "lem-etale-morphism-extends-to-ambient-neighbourhoods"
  - "lem-open-restriction-of-desingularization"
  - "thm-bravo-villamayor-full-transform"
  - "thm-prime-subfield-classification"
  - "thm-principalization-of-ideals"
  - "thm-weak-embedded-desingularization"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
    - title: "Dan Abramovich, Michael Temkin and Jaroslaw Wlodarczyk, Functorial embedded resolution via weighted blowings up, Algebra & Number Theory 18 (2024) 1557-1587; arXiv:1906.07106"
      url: "https://arxiv.org/pdf/1906.07106"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $K$ be a field of characteristic zero and let $Y$ be an integral separated scheme of finite type over $K$ (a $K$-variety, [[def-integral-scheme]], [[def-locally-finite-type-and-finite-type-morphism]]).
Then there exists a resolution of singularities of $Y$: a smooth $K$-scheme $\widetilde Y$ together with a proper birational morphism
$$\operatorname{res}_Y\colon\widetilde Y\to Y$$
([[def-proper-morphism]], [[def-birational-morphism-schemes]]), constructed on affine charts by restricting compositions of blowups of regular centers in smooth ambient schemes, which is an isomorphism over the smooth locus of $Y$, and which is canonically determined by $Y$.
The resolution is functorial for smooth morphisms: for every smooth morphism $Y'\to Y$ of $K$-varieties there is a natural lifting $\widetilde Y'\to\widetilde Y$ which is again smooth, making the square commute up to the canonical identification $\widetilde Y'=\widetilde Y\times_Y Y'$.
It is equivariant under every group action on $Y$, whether or not the action preserves $K$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a $K$-variety $Y$ of finite type over a field $K$ of characteristic zero (integral, separated), covered by finitely many affine open subschemes.



[F1] [[thm-weak-embedded-desingularization]], [[thm-bravo-villamayor-full-transform]]: every closed embedding of an affine chart into a smooth affine variety admits a canonical embedded desingularization.

[F2] [[lem-embedding-independence-of-desingularization]]: the canonical desingularization of an affine variety is independent of the chosen smooth ambient embedding.

[F3] [[lem-open-restriction-of-desingularization]]: for an open embedding $V\hookrightarrow U$ the canonical desingularizations restrict compatibly: $\widetilde V\hookrightarrow\widetilde U$ identifies $\widetilde V$ with the restriction of $\widetilde U$ over $V$.

[F4] [[lem-canonical-resolution-over-nonclosed-fields]], [[thm-prime-subfield-classification]]: the construction is carried out over $K$ after the characteristic-zero conventions of the page; no algebraic closedness is required.

[F5] [[def-proper-morphism]], [[def-birational-morphism-schemes]]: blowups are proper, and the local embedded resolutions in [F1] induce proper birational morphisms on their strict transforms.

[F6] [[lem-etale-morphism-extends-to-ambient-neighbourhoods]]: at a rational point an étale germ extends to an étale map of smooth ambient neighbourhoods, with the source germ equal to the inverse image of the target germ. Smooth germs factor locally as an étale germ followed by projection.

[F7] [[lem-canonical-resolution-commutes-with-smooth-morphisms]] and the embedded procedure in [F1]: marked ideals, their invariants and centers commute with smooth ambient pullback, up to omission of empty centers; the modified embedded procedure stops or ignores a completed strict-transform component by its regularity and transversality, which are also preserved by smooth pullback.

[F8] [[lem-canonical-resolution-under-field-isomorphisms]]: the canonical marked-ideal construction is natural under semilinear isomorphisms. The embedded stopping rule in [F1] is invariant under these isomorphisms as well.

[F9] [[thm-proper-ideal-contained-in-maximal-ideal]], [[cor-field-finite-type-over-a-field-is-a-finite-extension]], [[thm-lying-over]], [[cor-noether-normalisation-module-finiteness]]: under AC a nonzero finite-type algebra over a field has a maximal ideal with finite residue extension; integral inclusions have lying over; a finite-type domain is module-finite over a polynomial subring.

## Proof

1.1 Local construction. Choose a finite affine cover $Y=\bigcup_iU_i$ with closed embeddings $U_i\hookrightarrow X_i$ into smooth affine $K$-schemes. By [F1] each strict transform $\widetilde U_i$ is smooth and gives a proper birational morphism to $U_i$ which is the identity over its smooth locus. By [F2] this resolution is independent of its ambient embedding. [F1, F2, given]

1.2 An intrinsic field of constants. Put $R=\Gamma(Y,\mathcal O_Y)$, embedded in the function field using any nonempty affine chart. The elements of $R$ algebraic over $K$ form a field $L$: sums and products remain algebraic, and the minimal polynomial of a nonzero algebraic element expresses its inverse as a polynomial in that element. For a nonempty affine chart $\operatorname{Spec}A$, [F9] makes $A$ finite over $K[z_1,\dots,z_d]$. If $L_0/K$ is any finite subextension of $L$, the $z_i$ remain algebraically independent over $L_0$ and $L_0(z_1,\dots,z_d)$ embeds in the finite-dimensional algebra $A\otimes_{K[z]}K(z)$. Thus $[L_0:K]$ is bounded by the number of module generators of $A$. Among these degrees choose a maximal one; adjoining any further element of $L$ cannot increase it, so $L/K$ is finite, hence separable. [F9, algebra, choose]

2.1 Gluing. On $U_i\cap U_j$, [F3], applied on affine open subcharts, identifies the two restrictions. These identifications satisfy the cocycle condition: each is the identity over the dense smooth locus, and two morphisms from an integral reduced scheme to a separated scheme agreeing on a dense open agree everywhere (on affine target charts the difference of each pair of pulled-back functions vanishes in the function field). Gluing gives $\widetilde Y\to Y$. Smoothness and finite type are local on these charts; properness is local on the target and follows from [F5]. Birationality and the isomorphism over the smooth locus follow from step 1.1. The same unique comparisons show independence of the affine cover. [F2, F3, F5, step 1.1]

2.2 Étale comparison. First work over an algebraic closure of $K$. Geometric charts can be reduced with several irreducible components. The proofs of [F2] and [F6] still apply to them: the former uses only coordinate generators and polynomial ambient automorphisms, and the latter uses the completed local-ring isomorphism and graph equations, with no integrality assumption. Comparisons are unique on a reduced source by checking equality on the dense smooth open of every component. At each closed point of an étale morphism $V\to U$, choose affine charts and use [F6] to realize it as a Cartesian restriction of an étale ambient map $X'\to X$. Its defining ideal is the pullback of that of $U$. By [F7] the ambient centers and marked transforms pull back stage by stage. Blowups commute with flat base change: their Rees algebras pull back because flatness preserves every inclusion of an ideal power. Strict transforms commute as well: saturation by an exceptional equation is a filtered union of kernels of multiplication maps, all preserved by flat pullback. Thus the modified embedded procedure has the same strict transforms and stopping decisions after pullback, omitting only empty centers, and its final strict transform is $\widetilde U\times_U V$. By [F2] this is the canonical resolution of $V$. Closed points cover the comparison loci by open neighbourhoods, since a finite-type scheme over an algebraically closed field has a closed point in every nonempty closed subset. By [F4] the canonical centers over $K$ are the descended geometric centers; equality of their ideals and the resulting comparison descend by faithful flatness. This proves the étale comparison over $K$. [F2, F4, F6, F7, step 1.1]

2.3 Every field subring of $R$ lies in $L$. Otherwise it contains an element $f$ transcendental over $K$. Its prime field is $\mathbb Q$, so every $f-q$, $q\in\mathbb Q$, is a unit in $R$ and in $A$. The nonzero finite-type $K(f)$-algebra $A\otimes_{K[f]}K(f)$ has a maximal ideal with finite residue field $E/K(f)$ by [F9]. Write $b_i\in E$ for the images of finite $K[f]$-algebra generators of $A$. Clearing denominators in their monic equations over $K(f)$ gives a nonzero polynomial $p$ such that $B=K[f,1/p,b_1,\dots,b_s]$ is integral over $K[f,1/p]$, and there is a map $A\to B$. Choose $q\in\mathbb Q$ with $p(q)\ne0$. Lying over supplies a prime of $B$ above $(f-q)$, contradicting the image of the unit $f-q\in A$. Hence every field subring is contained in $L$, so $L$ is the unique largest field subring of $R$ and is preserved by every scheme automorphism of $Y$. [F9, step 1.2, algebra, choose]

3.1 Smooth comparison. For $U\times\mathbb A^r\to U$, pull back a chosen embedded presentation along $X\times\mathbb A^r\to X$. The same center, blowup and strict-transform calculations of step 2.2 give the canonical resolution $\widetilde U\times\mathbb A^r$. A smooth germ factors as an étale map to $U\times\mathbb A^r$ followed by projection, so step 2.2 and this product case give $\widetilde Y'\cong\widetilde Y\times_Y Y'$ locally for every smooth $Y'\to Y$. The comparisons glue by the uniqueness argument of step 2.1, and their composite for two smooth maps is the same canonical comparison. The lifted map to $\widetilde Y$ is smooth because it is the base change of $Y'\to Y$. [F2, F3, F6, F7, step 2.1, step 2.2]

4.1 Equivariance. Regard $Y$ as an $L$-variety using $L\subseteq R$; it is still integral, separated and finite type. Its canonical resolution over $L$ equals the one over $K$: choose smooth affine $L$-ambient presentations, which are smooth over $K$ because $L/K$ is finite separable, and use [F2]. In these ambients every $K$-derivation kills $L$ (differentiate the separable minimal polynomial), so the $K$- and $L$-derivative ideals coincide. Orders, boundary components, homogenized and coefficient ideals, monomial parts and companion ideals therefore coincide, as do the invariant centers and the modified embedded stopping rule. Each scheme automorphism of $Y$ is semilinear over its induced automorphism of $L$ by step 2.3; [F8] then transports each center and lifts it through the blowups and gluing. The lift is unique by step 2.1, so lifts preserve identity and composition and yield a group action on $\widetilde Y$. This proves equivariance even when the original action does not preserve $K$, and step 3.1 proves the promised smooth functoriality. [F1, F2, F4, F8, step 2.1, step 3.1, step 1.2, step 2.3] ∎
