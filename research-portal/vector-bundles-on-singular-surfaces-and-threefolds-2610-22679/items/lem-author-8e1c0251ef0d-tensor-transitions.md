---
id: lem-author-8e1c0251ef0d-tensor-transitions
kind: lemma
title: Tensor products multiply frame transitions
status: published
domain: mathematics
deps:
  - lem-author-8e1c0251ef0d-frame-transitions
  - math:def-commutative-ring
  - math:def-left-and-right-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:thm-commutative-ring-module-structure-on-a-tensor-product
  - math:thm-universal-property-of-module-tensor-products
dependency_roles:
  lem-author-8e1c0251ef0d-frame-transitions: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
  math:thm-commutative-ring-module-structure-on-a-tensor-product: mathematical-premise
  math:thm-universal-property-of-module-tensor-products: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
sources:
  references:
    - title: "The Stacks Project, Section 7.49: Sheafification in a topology"
      url: https://stacks.math.columbia.edu/tag/00ZG
      locator: Opening matching-family colimit construction; Lemma 7.49.1(5); Theorem
        7.49.3(1)–(4); Definition 7.49.4; Proposition 7.49.5
      statement: The covering-sieve plus construction has locally represented
        sections; double plus is the associated sheaf and has the universal
        property for maps to sheaves.
      hypotheses: A category with a Grothendieck topology and a presheaf of sets; the
        matching-family collections and refinement quotients in the construction
        are sets in the working setting. No fibre products of objects are
        assumed.
      reading_limits: Read the opening construction, local-representability statement,
        theorem with its proof sketches, and universal-property proposition on
        the live page. Lemma 7.49.1 has an omitted proof; Proposition 7.49.5
        refers to an earlier proof that was not separately read. These
        set-sheafification facts are imported, not reconstructed. Module
        operations, the tensor application and slice compatibility are proved
        locally here. No result for unrestricted proper-class quotients is
        imported.
---

## Statement
Let $\mathcal O$ be a sheaf of commutative unital rings on a Grothendieck site $(\mathcal C,J)$, and let $L,M$ be sheaves of $\mathcal O$-modules locally isomorphic to $\mathcal O$. Use the associated-sheaf construction described below, with its matching-family collections and refinement quotients set-valued in the chosen set-theoretic setting; a small site suffices. No fibre products in $\mathcal C$ are required. Write $L\otimes_{\mathcal O}M$ for the sheafification of the sectionwise module tensor product.

On a common trivializing covering family $\{U_i\to U\}$ with given frames $e_i$ of $L$ and $f_i$ of $M$, suppose $e_j=g_{ij}e_i$ and $f_j=h_{ij}f_i$ on overlaps. Then $e_i\otimes f_i$ are frames of $L\otimes_{\mathcal O}M$, with transition units $g_{ij}h_{ij}$. Here an overlap means any object with compatible arrows to both cover members, and all equations are taken after restriction to its slice site. The standard frame $1$ of the unit module $\mathcal O$ has transition units $1$.

## Facts & Assumptions

**Given:** The stated ringed site, sheaves, set-valued associated-sheaf constructions and common covering family, with the specified local frames.

**Goal:** Establish the tensor-product frames and compute their transitions, including the unit frame.

[F1] Use the site, covering-sieve, sheaf, module-sheaf and slice-restriction conventions of [[lem-author-8e1c0251ef0d-frame-transitions]], including its Facts [F1]–[F4]. In particular, $N|_U(V\to U)=N(V)$, and a sieve on $V\to U$ in the slice is covering exactly when its underlying arrows into $V$ form a covering sieve. A frame is an isomorphism $\mathcal O|_U\to N|_U$, also denoted by its value at $1$. Transitions are the unique units relating two frames, with restriction-compatible equations on common test objects.

[F2] Sectionwise commutative rings, unital modules and linear maps have the meanings in [[math:def-commutative-ring]], [[math:def-left-and-right-modules]] and [[math:def-module-homomorphism-kernel-image-and-cokernel]]. Module restrictions satisfy $a|_V s|_V=(as)|_V$ and respect addition. The zero ring is allowed.

[F3] Use the sectionwise tensor construction in [[math:def-tensor-product-of-modules-by-generators-and-relations]], its balanced-map universal property in [[math:thm-universal-property-of-module-tensor-products]], and the scalar action in [[math:thm-commutative-ring-module-structure-on-a-tensor-product]]. A pairing $b$ is balanced when it is additive in each variable and $b(ax,y)=b(x,ay)$; commutativity identifies left and right scalar actions. Thus $a(x\otimes y)=(ax)\otimes y=x\otimes(ay)$. A bilinear module-sheaf map means a restriction-compatible map on pairs of sections, additive and linear in each variable.

[F4] The associated-sheaf construction for a Grothendieck topology, its local representability and its universal property are imported precisely in External input. Applying it to presheaves of modules, and checking its compatibility with slice restriction, are local deductions below.

## External input

The [Stacks Project, Section 7.49](https://stacks.math.columbia.edu/tag/00ZG), opening construction, Lemma 7.49.1(5), Theorem 7.49.3 and Proposition 7.49.5, supplies set-valued sheafification for a category with a Grothendieck topology. Its plus operation $Q\mapsto Q^+$ represents a section over $V$ by a matching family on a covering sieve, modulo agreement on a covering refinement. The associated sheaf is $Q^{++}$, and maps from $Q$ to sheaves extend uniquely. Sections of each plus construction locally come from the preceding presheaf. These assertions concern sieves, and require no fibre products in the underlying category.

Only this associated-sheaf input is imported. The module structure, tensor universal property, restriction compatibility, frame isomorphisms and transition calculation are established below. No existence assertion for proper-class matching-family quotients is made.

## Proof

1.1 For a presheaf $Q$ of $\mathcal O$-modules, give $Q^+(V)$ addition by restricting two matching families to the intersection of their covering sieves and adding there. For $a\in\mathcal O(V)$, multiply a representative $(s_f)$ by $(f^*a\,s_f)$. Intersections cover by the topology axioms in [F1]; replacing representatives by covering refinements preserves these operations. All module identities hold on a common refinement by [F2], and restriction commutes with them. The same construction makes $Q^{++}$ a module sheaf by [F4]. A map of module presheaves into a module sheaf extends uniquely as a map of sheaves by [F4]; the extension is linear, since any finite list of sections is locally represented by sections of $Q$, using local representability twice and transitivity of covering sieves, and linearity can then be checked locally. Now set $P(V)=L(V)\otimes_{\mathcal O(V)}M(V)$. The formula $x\otimes y\mapsto x|_W\otimes y|_W$ defines restriction along $W\to V$ by the balanced-map property in [F3], with scalars restricted along $\mathcal O(V)\to\mathcal O(W)$. Uniqueness there gives the restriction laws. The preceding construction therefore gives the module sheaf $T=P^{++}$. Every bilinear module-sheaf map $L\times M\to N$ induces sectionwise a unique linear map $P\to N$ by [F3]; uniqueness makes these maps commute with restrictions. Extending them as above shows that $T$ represents bilinear module-sheaf maps, with universal pairing $(x,y)\mapsto x\otimes y$. Finally, a sieve on an object $p:V\to U$ of the slice corresponds exactly to a sieve on $V$: each arrow $h:W\to V$ determines the slice object $ph$. Covering and matching-family conditions agree under this correspondence by [F1]. Thus plus and double plus commute with restriction to every slice, including their module structures and universal pairings. Since $P|_U$ is exactly the sectionwise tensor presheaf of $L|_U$ and $M|_U$, this proves the natural identification $T|_U\cong L|_U\otimes_{\mathcal O|_U}M|_U$. This constructs the tensor sheaf and its required local properties without presuming that sectionwise tensors already form a sheaf. [F1, F2, F3, F4, construct, algebra]

2.1 On $\mathcal C/U_i$, the given frames express local sections uniquely as $ae_i$ and $bf_i$. The formula $(ae_i,bf_i)\mapsto ab$ is a bilinear module-sheaf map, since frame inverses commute with restriction. Step 1.1 gives a linear map $\mu_i:T|_{U_i}\to\mathcal O|_{U_i}$. Define $\lambda_i(c)=c(e_i\otimes f_i)$. Then $\mu_i\lambda_i(c)=c$. The other composition sends $ae_i\otimes bf_i$ to $ab(e_i\otimes f_i)=ae_i\otimes bf_i$ by [F3]; uniqueness in the sheaf bilinear universal property from step 1.1 makes $\lambda_i\mu_i$ the identity on $T|_{U_i}$. Hence $e_i\otimes f_i$ is a frame. On any overlap object, restriction compatibility and bilinearity give $e_j\otimes f_j=(g_{ij}e_i)\otimes(h_{ij}f_i)=g_{ij}h_{ij}(e_i\otimes f_i)$. The coefficient is a unit with inverse $h_{ij}^{-1}g_{ij}^{-1}$, so uniqueness in [F1] identifies the transition unit as $g_{ij}h_{ij}$. Taking both modules and frames to be $\mathcal O$ and $1$ gives the unit identification $\mathcal O\otimes_{\mathcal O}\mathcal O\cong\mathcal O$ by multiplication, with inverse $c\mapsto c(1\otimes1)$. For the unit module itself, use the same frame $1$ on every cover member: its restrictions agree, and its unique transition unit is $1$. [F1, F2, F3, step 1.1, construct, algebra] ∎
