---
id: "prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor"
kind: "proposition"
title: "Classical derived functors are the cohomology objects of the total derived functor"
deps: ["thm-existence-of-the-bounded-above-left-total-derived-functor", "thm-existence-of-the-bounded-below-right-total-derived-functor", "def-left-derived-object-relative-to-projective-resolution-data", "def-right-derived-object-relative-to-injective-resolution-data", "thm-horseshoe-lemma-for-projective-resolutions", "thm-horseshoe-lemma-for-injective-resolutions", "thm-derived-functors-are-universal-delta-functors", "prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles", "thm-the-opposite-of-an-abelian-category-is-abelian", "lem-bounded-above-complexes-admit-projective-replacements", "lem-bounded-below-complexes-admit-injective-replacements", "thm-canonical-truncations-fit-a-distinguished-triangle"]
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Dependent Choice. Let $F:\mathcal A\to\mathcal B$ be additive between abelian categories. On the left assume enough projectives and supplied bounded-above projective replacements, and on the right enough injectives and supplied bounded-below injective replacements. On the respective domains $D^-(\mathcal A)$ and $D^+(\mathcal A)$, $H^{-n}(LF(M[0]))=L_nF(M)$ and $H^n(RF(M[0]))=R^nF(M)$ for $n\geq0$, relative to the same resolution data, naturally. To compare the classical cycle-lifting connecting maps with the triangle connecting maps for the page's cone convention, multiply these degree-$n$ identifications by $(-1)^n$; the resulting natural isomorphisms commute with connecting maps. The left comparison with $F$ in degree zero is an isomorphism when $F$ is right exact; the right comparison is an isomorphism when $F$ is left exact. Conversely such a natural degree-zero comparison isomorphism forces that side-exactness.

The functor $LF$ preserves upper cohomological bounds and $RF$ preserves lower bounds. The truncation maps induce $H^iLF(X)\cong H^iLF(\tau^{\geq a}X)$ for $i\geq a$, and $H^iRF(\tau^{\leq a}X)\cong H^iRF(X)$ for $i\leq a$. On objects of $\mathcal A$, $H^0LF$ is right exact and $H^0RF$ is left exact.

For left exact $F$, call $M$ right $F$-acyclic when $F(M)[0]\to RF(M[0])$ is invertible. This holds iff $R^nF(M)=0$ for all $n>0$. In $0\to A\to B\to C\to0$, right acyclicity of $(A,C)$ implies that of $B$; that of $(A,B)$ implies that of $C$; that of $(B,C)$ together with epic $F(B)\to F(C)$ implies that of $A$. In each case $0\to F(A)\to F(B)\to F(C)\to0$ is exact. Dually, for right exact $F$, left acyclicity is equivalent to $L_nF(M)=0$ for $n>0$: the pairs $(A,C)$ and $(B,C)$ imply respectively $B$ and $A$, while $(A,B)$ implies $C$ provided $F(A)\to F(B)$ is monic, again with the resulting short exact sequence. Under DC, both supplied object-resolution data, and the respective enough-projective/right-exact or enough-injective/left-exact hypotheses, these are the classical universal delta functors.

## Facts & Assumptions

**Given:** The Axiom of Dependent Choice, abelian source and target categories, an additive functor $F$, and the stated supplied projective or injective replacement data.

[F1] The left total construction uses supplied bounded-above projective models ([[thm-existence-of-the-bounded-above-left-total-derived-functor]]).

[F2] The right total construction uses supplied bounded-below injective models ([[thm-existence-of-the-bounded-below-right-total-derived-functor]]).

[F3] Classical left derived objects are homology of the image of the supplied deleted resolution ([[def-left-derived-object-relative-to-projective-resolution-data]]).

[F4] Classical right derived objects are cohomology of the image of the supplied deleted resolution ([[def-right-derived-object-relative-to-injective-resolution-data]]).

[F5] Under DC and both supplied data, the respective exactness and enough-objects hypotheses give universal classical delta functors ([[thm-derived-functors-are-universal-delta-functors]]).

[F6] Total derived functors preserve distinguished triangles ([[prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles]]).

[F7] Given projective resolutions of the endpoints of a short exact sequence, the projective horseshoe lemma supplies a degreewise split short exact sequence of resolutions; dually the injective horseshoe lemma supplies injective resolutions with biproduct middle terms ([[thm-horseshoe-lemma-for-projective-resolutions]], [[thm-horseshoe-lemma-for-injective-resolutions]]).

[F8] The opposite category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[F9] Replacements can retain any given cohomological upper or lower bound ([[lem-bounded-above-complexes-admit-projective-replacements]], [[lem-bounded-below-complexes-admit-injective-replacements]]).

[F10] Short exact sequences and canonical truncations give distinguished triangles ([[thm-canonical-truncations-fit-a-distinguished-triangle]]).

## Proof

1.1 For $M[0]$ choose a resolution supported in degrees $\leq0$ on the projective side or $\geq0$ on the injective side. Up to the comparison homotopy equivalence with the supplied replacement, the model complex is precisely the image of the deleted classical resolution, after $P_n=P^{-n}$. Its cohomology is therefore exactly the stated classical derived object, including $M=0$ and $n=0$. Comparison maps are the same homotopy classes on both constructions. [F1, F2, F3, F4]

1.2 A complex with cohomology below $a$ zero admits an injective model zero below $a$; its image under $F$ retains this support. The projective construction gives the dual upper-bound assertion. Apply exact $RF$ to the truncation triangle: the tail $RF(\tau^{\geq a+1}X)$ has zero cohomology in degrees $\leq a$, and its preceding degree is zero too. The long exact sequence gives the stated isomorphism for $i\leq a$. The dual argument with the head supported at most $a-1$ gives the $LF$ isomorphism for $i\geq a$. [F1, F2, F6, F9, F10, algebra]

2.1 For a short exact sequence choose projective horseshoes using [F7]. For the injective side apply the projective assertion of [F7] to $0\to C\to B\to A\to0$ in the abelian category $\mathcal A^{\mathrm{op}}$ of [F8]: the supplied injective resolutions become projective resolutions there. Reversing all arrows gives chain maps $0\to I_A\to J_B\to I_C\to0$ and a splitting in every degree. Thus both sides have a degreewise split short exact sequence of resolutions, not merely biproduct middle objects. Applying additive $F$ preserves this splitting. Comparison homotopy equivalences identify the auxiliary middle resolution with the supplied one. [F1, F2, F7, F8, step 1.1]

3.1 Write either image sequence in cochain form $0\to E\xrightarrow{i}G\xrightarrow{q}H\to0$. Choose degreewise splittings $s:H\to G$ and $\pi:G\to E$. The off-diagonal map $t=\pi d_Gs:H^j\to E^{j+1}$ satisfies $d_Gs-sd_H=it$ and $d_Et+td_H=0$. It induces the classical cycle-lifting boundary $[t]$. The map $H\to\operatorname{Cone}(i)$ given by $(s,-t)$ is a complex map, and its composite with $e(g,e')=q(g)$ is identity. Since $e$ is the quasi-isomorphism used in [F10], the triangle arrow $p e^{-1}$ induces $-[t]$, with $p(g,e')=e'$. Consequently the identity cohomology identifications intertwine boundaries up to minus one. Multiplication in degree $n$ by $(-1)^n$ fixes this on both sides: $(-1)^{n+1}(-1)=(-1)^n$ on the right and $(-1)^{n-1}(-1)=(-1)^n$ on the left. The formulas are biproduct-morphism identities, valid in any abelian category. Splitting changes give homotopic maps, and the replacement comparisons are natural, so these are natural comparisons of delta functors with identity comparison at degree zero. [F6, F10, step 2.1, algebra]

3.2 On objects the support result and the exact triangle of a short exact sequence give $0\to H^0RF(A)\to H^0RF(B)\to H^0RF(C)$ and $H^0LF(A)\to H^0LF(B)\to H^0LF(C)\to0$. Hence these degree-zero functors have the stated side-exactness. If $F$ is left exact, $0\to F(M)\to F(I^0)\to F(I^1)$ is exact, identifying $F(M)$ with $H^0RF(M)$. Right exactness similarly identifies the cokernel $H^0LF(M)$ with $F(M)$. Conversely an isomorphic functor inherits the corresponding exactness. [step 1.1, step 2.1, step 1.2, algebra]

4.1 Under the stated side-exactness the comparison already induces an isomorphism in degree zero, and both complexes have zero cohomology on the opposite side. It is therefore a quasi-isomorphism iff all positive right derived objects (or all positive left derived objects) vanish. This proves both implications of each acyclic-object criterion. [step 1.2, step 3.2, algebra]

5.1 In the right-hand long exact sequence $0\to F(A)\to F(B)\to F(C)\to R^1F(A)\to R^1F(B)\to R^1F(C)\to\cdots$, vanishing for $(A,C)$ gives vanishing for $B$ degree by degree, and vanishing for $(A,B)$ gives vanishing for $C$. For $(B,C)$ all degrees of $A$ above one vanish and $R^1F(A)=\operatorname{coker}(F(B)\to F(C))$; this is exactly the extra epic condition. Each case also makes the displayed $F$ sequence short exact. Reversing arrows and reindexing gives the three left cases; the last obstruction is $L_1F(C)=\ker(F(A)\to F(B))$. [step 2.1, step 4.1, algebra]

6.1 Finally impose DC and both supplied object-resolution data, exactly as in the published universality theorem, together with the appropriate enough-objects and side-exactness hypothesis. That theorem gives universality of the classical delta functor. The natural object identifications and sign-adjusted connecting comparisons in steps 1.1 and 3.1 transfer it to the cohomology description. No universality assertion with weaker assumptions is inferred from that citation. [F5, step 1.1, step 3.1] ∎
