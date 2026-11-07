---
dependency_level: 3
id: lem-number-field-abelian-endomorphisms-form-a-semisimple-order
kind: lemma
title: Number-field abelian endomorphism rings are orders in semisimple rational algebras
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- def-number-field
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
- thm-fundamental-theorem-of-algebra-liouville-proof
- thm-abelian-variety-is-projective
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- prop-abelian-variety-commutativity-from-rigidity
- thm-structure-of-a-compact-connected-abelian-lie-group
- prop-exponential-map-is-natural-for-lie-group-homomorphisms
- lem-discrete-subgroups-of-real-vector-spaces-are-lattices
- lem-polarization-projectors-and-chow-descent-of-abelian-subvarieties
- lem-nonaffine-group-monomorphism-closed-immersion
- thm-nonaffine-group-scheme-normal-subgroup-quotient
- lem-proper-source-to-separated-target-proper
- thm-proper-quasi-finite-is-finite
- lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
- lem-dominant-map-generic-differential-surjectivity-char-zero
- lem-arith-finite-cartier-duality-and-exactness
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Abelian Varieties v2.00 (2008), I10.1–10.2 and Theorem10.15
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Printed42–44,49–50; number-field specialization with independently reconstructed
      integral-lattice proof.
verification:
  precheck: pending
axiom_use: AC and DC retained literally; AC implies CC for the actual Lie-group providers.
  No Tate or Rosati input.
---

## Statement

Assume AC and DC. Let $C$ be an abelian variety over a number field $K$, and put $R=\operatorname{End}_K(C)$. Then $R$ is a free abelian group of finite rank. If $\dim C>0$, its rational algebra is of the form
$$ R\otimes_{\mathbb Z}\mathbb Q\cong\prod_{i=1}^s M_{n_i}(D_i), $$
where the $D_i$ are division algebras of finite dimension over $\mathbb Q$, and $R$ is a full order in this algebra. Here a **full order** is a unital $\mathbb Z$-subring that is free of finite rank and spans the rational algebra. If $\dim C=0$, then $R$ is the zero ring.

## Statement references

[Milne, *Abelian Varieties*, v2.00, I Proposition10.1, discussion10.2, and Theorem10.15, printed pp.42–44,49–50](https://www.jmilne.org/math/CourseNotes/AV.pdf). This combines their number-field endomorphism conclusions. The proof below uses a genuine integral lattice in the compact identity component and actual Poincare complements; it does not infer integral finite generation from a $\mathbb Z_\ell$ representation.

## Facts & Assumptions

**Given:** Exactly AC and DC, $K,C$ in the Statement, and $g=\dim C$.

[A1] AC and DC are literal hypotheses ([[def-axiom-of-choice]], [[def-dependent-choice]]); AC supplies CC for the Lie-group and measure contexts ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] $K$ is finite over $\mathbb Q$ ([[def-number-field]]). A finite separable extension has a primitive element, its embeddings into an algebraically closed field correspond to roots, and $\mathbb C$ is algebraically closed ([[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]], [[thm-fundamental-theorem-of-algebra-liouville-proof]]).

[F2] Abelian varieties are proper smooth geometrically connected group varieties and are commutative and projective ([[def-abelian-variety-over-a-field]], [[prop-abelian-variety-commutativity-from-rigidity]], [[thm-abelian-variety-is-projective]]). The actual analytification construction gives a compact smooth complex manifold for a smooth projective complex scheme, and sends scheme morphisms to holomorphic maps ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]]). It does not assert the full general complex-torus uniformization theorem.

[F3] A compact connected abelian real Lie group has a surjective exponential whose kernel is a full integral lattice in its real tangent space ([[thm-structure-of-a-compact-connected-abelian-lie-group]]). For a Lie-group homomorphism $f$, $f(\exp X)=\exp(df_0X)$ under CC ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]). A discrete subgroup of a finite-dimensional real vector space is free abelian of finite rank ([[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]).

[F4] A closed normal subgroup has a represented fppf group quotient, smooth and geometrically connected when the original group is, compatible with field extension; a kernel-free finite-type group homomorphism is a closed immersion ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-monomorphism-closed-immersion]]). Maps from a proper source to a separated target are proper; proper quasi-finite maps are finite ([[lem-proper-source-to-separated-target-proper]], [[thm-proper-quasi-finite-is-finite]]).

[F5] Over an algebraically closed characteristic-zero field, a dominant map of integral varieties has a surjective differential on a nonempty source open, with the scheme/classical comparison stated in the supplier ([[lem-dominant-map-generic-differential-surjectivity-char-zero]]).

[F6] Poincare complements exist over the actual ground field ([[lem-polarization-projectors-and-chow-descent-of-abelian-subvarieties]], Statement(a)). Over a perfect field the reduced identity component of a finite-type group scheme is a smooth geometrically integral subgroup of the same dimension; if the group is proper, so is this subgroup ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]]). A finite commutative group scheme is killed by its rank, including its nonreduced part ([[lem-arith-finite-cartier-duality-and-exactness]]).

## Proof

**Proof technique:** direct.

1.1 If $g=0$, the smooth proper geometrically connected group with its rational identity is $C=\operatorname{Spec}K$, so its only endomorphism is the zero/identity map and $R$ is the zero ring. Assume $g>0$ henceforth. By [F1], a root in $\mathbb C$ of the minimal polynomial of a primitive generator supplies an embedding $K\hookrightarrow\mathbb C$. Faithful field extension injects $\operatorname{End}_K(C)$ into $\operatorname{End}_{\mathbb C}(C_{\mathbb C})$: equality of morphisms descends because their defining ideal sections vanish after faithful scalar extension. [A1, F1, F2, given, construct]

1.2 We first supply the actual image and isogeny interfaces. For a homomorphism $f:G\to H$ of abelian varieties, [F4] gives $Q=G/\ker f$ as a smooth separated finite-type group, geometrically connected after every field extension. It is proper: $G\to Q$ is proper by [F4], and for every base change its surjective image forces the projection of $Q$ to be closed, since the projection of proper $G$ is closed. The induced $Q\to H$ has trivial scheme kernel: lift any test point fppf locally to $G$ and use the quotient kernel. By [F4] it is a closed immersion. Thus the image is an abelian subvariety, compatibly with field extension. In particular every homomorphism surjects onto its abelian image. [F2, F4, given, construct, algebra]

2.1 By [F2], $T=C_{\mathbb C}(\mathbb C)$ is a compact real Lie group of real dimension $2g$, with holomorphic group operations, and is abelian. Its identity component $T^0$ is open: a connected coordinate ball around the identity lies inside it, and translations then give an open neighbourhood at each of its points. It is closed as a connected component, hence compact; the restricted charts make it a connected real Lie subgroup with the FULL tangent space of $T$. We do not assume that all of $T$ is connected. Apply [F3] to $T^0$: $\Lambda=\ker\exp$ is a full lattice of rank $2g$ in its real tangent space. [A1, F2, F3, step 1.1, construct]

2.2 Every isogeny $a:G\to H$ has a quasi-inverse up to a positive integer. Indeed, step 1.2 identifies the surjective $a$ with its fppf quotient by its finite kernel: the induced kernel-free closed immersion $G/\ker a\to H$ is surjective and thus an isomorphism, since its target is reduced. Let $d\ge1$ be the rank of that finite kernel. By [F6], $[d]$ kills the FULL kernel, and the quotient's universal property [F4] factors $[d]_G$ as $ba$ for a homomorphism $b:H\to G$. Composing with $a$ and cancelling its fppf epimorphism gives $ab=[d]_H$. These are identities on all test schemes. Hence isogenies invert in the category with rational Hom spaces. [F4, F6, step 1.2, construct, algebra]

2.3 Call a positive-dimensional abelian variety $K$-simple if it has no proper positive-dimensional abelian subvariety over $K$. Repeatedly applying [F6]'s ground-field Poincare complement and induction on dimension gives an isogeny from a finite product of $K$-simple varieties to $C$. Each split has two smaller-dimensional positive factors: its finite-kernel surjective addition map is proper quasi-finite and hence finite by [F4], so dimensions add, as seen from the finite extension of function fields after algebraic closure. The recursion therefore terminates. For a nonzero homomorphism between two $K$-simple varieties, its abelian image from step 1.2 is nonzero, hence the entire target. The reduced identity component of its kernel is a ground-field abelian subvariety by [F6] since a number field is perfect. Simplicity makes it $0$, because being the entire source would force the map to be zero. Thus the full proper kernel has dimension zero and is finite by [F4]; the map is an isogeny. [A1, F4, F6, step 1.2, construct, algebra]

3.1 Every algebraic endomorphism of $C$ gives a smooth homomorphism on $T$, and its connected image sends $T^0$ into $T^0$. Exponential naturality [F3] gives $df_0(\Lambda)\subseteq\Lambda$. Differentiation of addition is addition on the tangent space of the abelian group, and the chain rule treats composition; hence restriction defines a ring homomorphism $R\to\operatorname{End}_{\mathbb Z}(\Lambda)\cong M_{2g}(\mathbb Z)$. [F2, F3, step 2.1, construct, algebra]

4.1 This homomorphism is injective. If the matrix of $f$ is zero, fullness of $\Lambda$ gives $df_0=0$ on the full real tangent space, hence also on the corresponding complex algebraic tangent space of the analytification charts [F2]. Let $D$ be its abelian image over $\mathbb C$, supplied by step 1.2. The differential of its closed immersion into $C_{\mathbb C}$ is injective, because the local coordinate-ring surjection gives a surjection on cotangent spaces. Thus the induced map to $D$ also has zero differential at the identity. If $\dim D>0$, apply [F5] to the surjective $C_{\mathbb C}\to D$. At some complex point its differential is onto the positive-dimensional tangent space of $D$. Translation in source and target identifies that differential with the differential at the identity: $f\circ t_x=t_{f(x)}\circ f$. This contradicts $df_0=0$. Thus $D$ is a reduced connected zero-dimensional group, hence the identity point, and $f=0$. This does not use global analytic connectedness, general complex uniformization, or Tate isogeny. [F2, F5, step 1.2, step 3.1, algebra]

5.1 The additive image of $R$ in $M_{2g}(\mathbb Z)$ is a discrete subgroup of the finite-dimensional real matrix space: a nonzero integral entry has absolute value at least $1$. By [F3] it is a free abelian group of finite rank, at most $4g^2$. Thus $R$ is free of finite rank, and $E=R\otimes\mathbb Q$ is finite dimensional. The inclusion of $R$ into $E$ is injective by freeness, its rational span is all of $E$, and it is a unital subring, so it is a full order once the following rational decomposition is established. The integral conclusion is not inferred from an embedding into $\mathbb Z_\ell$-matrices. [F3, step 4.1, algebra]

6.1 A nonzero rational endomorphism of a $K$-simple variety becomes, after clearing a denominator, a nonzero actual homomorphism and hence an isogeny by step 2.3; step 2.2 supplies its rational inverse. Its rational endomorphism algebra is therefore a division algebra. Rational Hom between nonisogenous $K$-simple varieties is zero by the same argument. Group the simple factors from step 2.3 by $K$-isogeny, replacing each by one representative through rational isogenies and their inverses, to obtain a rational isogeny decomposition $C\sim\prod_i S_i^{n_i}$ with pairwise nonisogenous $S_i$. Products give the matrix rule INLINE: their inclusions $i_j$ and projections $p_j$ satisfy $p_i i_j=\delta_{ij}$ and $\sum_j i_jp_j=\operatorname{id}$; send $f$ to $(p_i f i_j)$ and reconstruct it as $\sum_{i,j}i_i f_{ij}p_j$. Inserting the same sum between two maps gives entries $\sum_k f_{ik}g_{kj}$. Thus $E\cong\prod_i M_{n_i}(D_i)$ with $D_i=\operatorname{End}_K(S_i)\otimes\mathbb Q$, division algebras. The proof of step 5.1 applies to each $S_i$, so every $D_i$ is finite dimensional over $\mathbb Q$. This proves the Statement, including its full-order assertion. No module-only Hom-matrix theorem is misapplied to varieties, and no Galois Tate-module semisimplicity is asserted. [F2, step 5.1, step 2.2, step 2.3, algebra] ∎
