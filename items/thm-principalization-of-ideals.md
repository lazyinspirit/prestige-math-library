---
id: "thm-principalization-of-ideals"
kind: "theorem"
title: "Canonical principalization of ideals in characteristic zero"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 15
deps:
  - "thm-lying-over"
  - "thm-proper-ideal-contained-in-maximal-ideal"
  - "cor-field-finite-type-over-a-field-is-a-finite-extension"
  - "cor-noether-normalisation-module-finiteness"
  - "def-axiom-of-choice"
  - "def-blowup-scheme-along-ideal"
  - "def-closed-immersion-schemes"
  - "def-coherent-module-scheme"
  - "def-equivalence-of-marked-ideals"
  - "def-exceptional-divisor-blowup"
  - "def-integral-scheme"
  - "def-invertible-sheaf-of-cartier-divisor"
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-proper-morphism"
  - "def-simple-normal-crossings-divisors"
  - "def-smooth-morphism-schemes"
  - "def-strict-transform-closed-subscheme"
  - "lem-canonical-resolution-commutes-with-ambient-embeddings"
  - "lem-canonical-resolution-commutes-with-smooth-morphisms"
  - "lem-canonical-resolution-over-nonclosed-fields"
  - "lem-canonical-resolution-under-field-isomorphisms"
  - "prop-canonical-resolution-of-marked-ideals"
  - "thm-blowup-projective"
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
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

Let $K$ be a field of characteristic zero, $X$ a smooth $K$-scheme of finite type and $\mathcal I\subseteq\mathcal O_X$ a coherent ideal sheaf that is not identically zero on any irreducible component of $X$ ([[def-coherent-module-scheme]]).
Then there is a canonical principalization of $\mathcal I$: a sequence
$$X=X_0\leftarrow X_1\leftarrow\dots\leftarrow X_r=\widetilde X$$
of blowups of regular centers $C_{i-1}\subseteq X_{i-1}$ ([[def-blowup-scheme-along-ideal]]) such that
(a) the exceptional divisor $E_i$ of the composite $\sigma_i\colon X_i\to X$ has only simple normal crossings and $C_{i-1}$ has SNC with $E_{i-1}$ ([[def-simple-normal-crossings-divisors]]);
(b) the total transform $\sigma_r^*\mathcal I$ is the ideal of an effective Cartier divisor with simple normal crossings support $\widetilde E$ which is a natural combination of the irreducible components of $E_r$.
The morphism $(\widetilde X,\sigma_r^*\mathcal I)\to(X,\mathcal I)$ commutes with smooth morphisms and with embeddings of ambient smooth schemes, and is equivariant under every group action on $X$ preserving $\mathcal I$ (not necessarily preserving $K$).

## Facts & Assumptions

**Given:** A field $K$ of characteristic zero, a smooth finite-type $K$-scheme $X$, and a coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$ that is not identically zero on any irreducible component of $X$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[prop-canonical-resolution-of-marked-ideals]], [[lem-canonical-resolution-over-nonclosed-fields]]: on each of the finitely many disjoint open-and-closed pure-dimensional components of the smooth $X$, the marked ideal $(\mathcal I,\varnothing,1)$ admits a canonical resolution $\sigma\colon\widetilde X\to X$, a sequence of blowups of regular centers with SNC with the successive exceptional divisors, over $K$.

[F2] [[def-multiple-test-blowup-and-controlled-transform]], [[def-exceptional-divisor-blowup]]: the controlled transform is $\mathcal I_i=\mathcal I(D_i)^{-1}\sigma_i^*\mathcal I_{i-1}$; a controlled transform with empty support is the unit ideal, since a sheaf of ideals with nowhere-vanishing stalks is $\mathcal O$.

[F3] [[lem-canonical-resolution-commutes-with-smooth-morphisms]], [[lem-canonical-resolution-commutes-with-ambient-embeddings]], [[lem-canonical-resolution-under-field-isomorphisms]]: within finite-type smooth ambient schemes, the marked-ideal construction commutes locally with smooth morphisms of constant relative dimension and with ambient embeddings; decomposing into the open relative-dimension loci gives the general smooth comparison, and with semilinear isomorphisms carrying the input ideal to its pullback.

[F4] [[def-simple-normal-crossings-divisors]], [[thm-blowup-projective]], [[def-proper-morphism]]: blowups of regular centers are proper; strict transforms of exceptional divisors together with the new exceptional divisor form a family in simultaneous SNC position along the process.

[F5] [[cor-noether-normalisation-module-finiteness]], [[thm-proper-ideal-contained-in-maximal-ideal]], [[cor-field-finite-type-over-a-field-is-a-finite-extension]], [[thm-lying-over]]: under AC a finite-type domain is finite over a polynomial subring; a nonzero finite-type algebra over a field has a maximal ideal with finite residue extension; integral inclusions satisfy lying over.

## Proof

1.1 Principalization from the resolution. Let $(X_i)_{0\le i\le r}$ be the canonical resolution of $(\mathcal I,\varnothing,1)$ from [F1] and let $(\mathcal I_i,1)$ be the controlled transforms. Since $\operatorname{supp}(\mathcal I_r,1)=\varnothing$, the ideal $\mathcal I_r$ is the unit ideal by [F2]; unwinding the transform rule we get $\sigma_i^*\mathcal I_{i-1}=\mathcal I(D_i)\mathcal I_i$ at each step, so the total transform $\sigma_r^*\mathcal I$ is a product of powers of the exceptional divisors $D_i$ and their strict transforms, each a component of $E_r$ by [F4]. Hence $\sigma_r^*\mathcal I$ is the ideal of an effective Cartier divisor $\widetilde E$ with SNC support which is a natural combination of the irreducible components of $E_r$, and by [F4] both the exceptional divisors and the centers are in SNC position: clauses (a) and (b). [A1, F1, F2, F4]

1.2 Intrinsic constants on a component. For an integral open-and-closed component $Z$ of $X$, put $R=\Gamma(Z,\mathcal O_Z)$ and let $L$ be its elements algebraic over $K$. The minimal polynomial expresses the inverse of each nonzero such element as a polynomial in it, so $L$ is a field. On an affine chart $\operatorname{Spec}A\subseteq Z$, [F5] makes $A$ finite over a polynomial ring $K[z]$. Every finite subextension $L_0/K$ gives a subfield $L_0(z)$ of $A\otimes_{K[z]}K(z)$, so $[L_0:K]$ is bounded by the module-generator count; choosing a maximal degree proves $L/K$ finite, hence separable. Any field subring of $R$ must lie in $L$: if it contains $f$ transcendental over $K$, every $f-q$, $q\in\mathbb Q$, is a unit. By [F5], the nonzero finite-type $K(f)$-algebra $A\otimes_{K[f]}K(f)$ has a finite residue field $E/K(f)$. Images $b_i$ of finitely many generators of $A$ become integral over $K[f,1/p]$ after clearing finitely many denominators, with $p\ne0$. The algebra $B=K[f,1/p,b_1,\dots,b_s]$ is integral over $K[f,1/p]$ and receives a map from $A$. Choose $q\in\mathbb Q$ with $p(q)\ne0$; lying over supplies a prime containing $f-q$ in $B$, contradicting its being the image of a unit of $A$. Thus $L$ is the unique largest field subring of $R$. Scheme automorphisms, including those permuting components, consequently induce isomorphisms of these intrinsic fields. [A1, F5, given, algebra, choose]

2.1 Canonicity and smooth naturality. The resolution, hence the principalization, is determined by its canonical invariant centers. The smooth and ambient-embedding comparisons in [F3] transport these centers and the controlled-transform rules, so they transport the total-transform factorization from step 1.1 as well. This proves canonicity and both commutation clauses. [A1, F1, F3, step 1.1]

3.1 Equivariance for ideal-preserving actions. Regard each component as an $L$-scheme. A smooth affine $L$-ambient presentation is smooth over $K$ because $L/K$ is finite separable. Every $K$-derivation annihilates $L$ by its separable minimal polynomials, so the $K$- and $L$-derivative ideals agree; orders, boundary strata, homogenizations, coefficient ideals and companion ideals then agree, giving the same canonical sequence. An automorphism preserving $\mathcal I$ transports the componentwise marked ideals by a semilinear isomorphism of their intrinsic constant fields. By [F3] it therefore transports each canonical center, and lifts successively to the blowups. These lifts satisfy identity and composition: the blowup lifts induced from the ideal identifications are natural, and equivalently two lifts agree on the dense complement of the centers and hence on the reduced separated smooth resolution. Thus any ideal-preserving abstract group action lifts coherently, including actions not preserving $K$. [A1, F1, F3, step 1.1, step 2.1, step 1.2] ∎
