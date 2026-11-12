---
id: lem-regular-zero-koszul-euler-class
kind: lemma
title: Euler class of a regular bundle functional
status: published
domain: mathematics
deps:
  - def-exterior-determinant-bundles
  - math:cor-koszul-complex-resolves-a-regular-quotient
  - math:def-koszul-complex-of-a-sequence-with-coefficients
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - def-vector-bundle-classes
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - math:def-axiom-of-choice
  - math:thm-qc-ideal-closed-subscheme-correspondence-complete
  - math:thm-kernels-cokernels-qc-modules
  - math:def-quasi-coherent-module-scheme
  - math:lem-dual-locally-free-and-base-change
  - math:thm-exactness-of-sheaves-stalkwise
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-stalk-of-presheaf
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
  - math:def-sheaf-on-topological-space
dependency_roles:
  def-exterior-determinant-bundles: mathematical-premise
  math:cor-koszul-complex-resolves-a-regular-quotient: mathematical-premise
  math:def-koszul-complex-of-a-sequence-with-coefficients: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  thm-author-3a003d7b5208-nonconnective-k-zero-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-qc-ideal-closed-subscheme-correspondence-complete: mathematical-premise
  math:thm-kernels-cokernels-qc-modules: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:lem-dual-locally-free-and-base-change: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme data, with larger universes for the supplied K-theory categories. Their existence is a separate size assumption. Let $X$ be a quasi-compact, quasi-separated scheme, $E$ a finite locally free $\mathcal O_X$-module of constant rank $r\geq 0$, and $s:E\to\mathcal O_X$ an $\mathcal O_X$-linear functional. Let $I=\operatorname{im}(s)$ be its image sheaf, which is a quasi-coherent ideal, and let $i:Z=Z(s)\hookrightarrow X$ be the corresponding closed subscheme. In complexes on $X$, write $\mathcal O_Z$ for the module sheaf $i_*\mathcal O_Z\cong\mathcal O_X/I$. Suppose that at every point $x\in Z$, there is a local basis of $E$ whose germs form a basis of $E_x$ and whose values under $s_x$ form a regular sequence in $\mathcal O_{X,x}$ of length $r$: successively, each value is a non-zero-divisor modulo its predecessors and the final quotient is nonzero. For $r=0$ the sequence is empty and $Z=X$.

The Koszul complex $K(s)$ has $\Lambda^iE$ in cohomological degree $-i$, with differential given by contraction with $s$. It is a perfect complex supported on the underlying closed set of $Z$, and its augmentation is a quasi-isomorphism $K(s)\to\mathcal O_Z$. Define the supported Euler class $e_Z(s)\in K_{0,Z}(X)$ to be the K-zero class of this complex. Under the map induced by the inclusion of supported perfect complexes into all perfect complexes, it maps to

$$\lambda_{-1}(E)=\sum_{i=0}^r(-1)^i[\Lambda^iE]\in K_0(X).$$

For a section $t:\mathcal O_X\to E$, put $E^\vee=\mathcal H om_{\mathcal O_X}(E,\mathcal O_X)$. The corresponding functional is $t^\vee:E^\vee\to\mathcal O_X$, given by $\varphi\mapsto\varphi(t(1))$; under the same regularity hypothesis for its coordinates, the formula uses $E^\vee$ in place of $E$.

## Statement references

[[def-exterior-determinant-bundles]]

[[def-scheme-perfect-complexes]]

[[def-nonconnective-k-spectrum-interface]]

[[math:thm-qc-ideal-closed-subscheme-correspondence-complete]]

[[math:lem-dual-locally-free-and-base-change]]

[[math:def-scheme]]

[[math:def-module-on-ringed-space]]

[[math:def-stalk-of-presheaf]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
**Given:** $X$, $E$, $s$ and the regularity hypothesis in the statement, together with choice and the stated universes.

**Goal:** Construct the supported class, prove the resolution and calculate its image in $K_0(X)$, including the section convention.

[A1] Choice and the universe assumptions are inherited through the sheaf and enhanced K-theory suppliers; the existence of the stated universes is assumed separately from Choice. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] Exterior powers of a finite locally free rank-$r$ module are finite locally free, vanish above degree $r$, and have the usual increasing-wedge bases locally. Their definition by sheafification allows restriction-compatible alternating local formulas to define sheaf maps. [[def-exterior-determinant-bundles]]

[F2] For a finite sequence in a commutative ring, the Koszul differential is the alternating deletion formula. If the sequence is regular, its Koszul complex on the ring is a finite free resolution of the quotient by the sequence. Homological degree $i$ is read here as cohomological degree $-i$. [[math:def-koszul-complex-of-a-sequence-with-coefficients]] [[math:cor-koszul-complex-resolves-a-regular-quotient]]

[F3] A bounded complex of finite locally free sheaves is perfect. A perfect complex is supported on a closed set precisely when its restriction to the complement is acyclic; the supported perfect objects form a stable idempotent-complete category. Its cofibers are inherited from the ambient derived enhancement, with cochain shift $A[1]^n=A^{n+1}$ and differential $-d_A$. [[def-scheme-perfect-complexes]]

[F4] For qcqs $X$, the supplied K-theory assigns spectra to the perfect and supported perfect categories and a map to the ambient spectrum induced by inclusion. For an essentially small idempotent-complete stable category, its degree-zero group is naturally the group on object classes with the cofiber relations. Bundle classes agree with the object classes of the corresponding degree-zero complexes. [[def-nonconnective-k-spectrum-interface]] [[thm-author-3a003d7b5208-nonconnective-k-zero-input]] [[def-vector-bundle-classes]]

[F5] A module sheaf is quasi-coherent when it is locally the associated sheaf of a module on an affine chart. Images of morphisms of quasi-coherent sheaves are quasi-coherent; on an affine chart the image sheaf is the associated sheaf of the module image. [[math:def-quasi-coherent-module-scheme]] [[math:thm-kernels-cokernels-qc-modules]]

[F6] Under AC, a quasi-coherent ideal $I\subseteq\mathcal O_X$ determines a closed immersion $i:Z\hookrightarrow X$ with underlying closed set $\{x:I_x\ne\mathcal O_{X,x}\}$ and canonical identification $i_*\mathcal O_Z\cong\mathcal O_X/I$. For $I=0$ it is the identity of $X$; for $I=\mathcal O_X$ it is empty. [[math:thm-qc-ideal-closed-subscheme-correspondence-complete]]

[F7] A sequence of sheaves is exact if and only if its sequence of stalks is exact at every point. Applied to kernel, image and quotient sequences, this identifies cohomology stalks with cohomology of stalk complexes and $(\mathcal O_X/I)_x$ with $\mathcal O_{X,x}/I_x$. [[math:thm-exactness-of-sheaves-stalkwise]]

[F8] In the supplied stable derived enhancement of all $\mathcal O_X$-modules, the cone of a cochain map $f:A\to B$ is $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ with $d(b,a)=(d_Bb+f(a),-d_Aa)$. Its canonical cone square represents the cofiber square after localization at quasi-isomorphisms. [[thm-author-4f716d60801a-derived-enhancement-input]]

[F9] The sheaf dual $E^\vee=\mathcal H om(E,\mathcal O_X)$ has sections $\operatorname{Hom}_{\mathcal O_U}(E|_U,\mathcal O_U)$ over $U$. It is finite locally free of the same rank as $E$, with the dual bases on trivializing charts. [[math:lem-dual-locally-free-and-base-change]]

[F10] A scheme is a locally ringed space covered by affine schemes. Module sheaves have linear section maps commuting with restriction; compatible local sections glue uniquely. Stalks are germs of sections over neighborhoods. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that intersections of affine open subschemes are quasi-compact. [[math:def-scheme]] [[math:def-module-on-ringed-space]] [[math:def-sheaf-on-topological-space]] [[math:def-stalk-of-presheaf]] [[math:def-quasi-compact-and-quasi-separated-scheme]]

## Proof
**Proof technique:** Construct the zero subscheme and Koszul differential locally, check exactness on stalks, and calculate the finite filtration using an explicit cone-to-quotient comparison.

1.1 On an affine open $U=\operatorname{Spec}A$ trivializing $E$, write $s$ as the row $(a_1,\ldots,a_r)$ and put $J=(a_1,\ldots,a_r)\subseteq A$. The free sheaves $E|_U$ and $\mathcal O_U$ are associated to $A^r$ and $A$: on distinguished opens their sections are $A_f^r$ and $A_f$. Thus both are quasi-coherent by [F5], and the image comparison in [F5] identifies $I|_U$ with $\widetilde J$ as a subsheaf of $\mathcal O_U$. In particular $I$ is a quasi-coherent ideal, locally generated by the $a_j$. These descriptions agree on overlaps because they are the image sheaf of the same global map. Now [F6] constructs $i:Z\hookrightarrow X$ and identifies $\mathcal O_X/I$ with $i_*\mathcal O_Z$. The stalk image is $\operatorname{im}(s_x)=I_x$, by [F7] applied to the kernel-image sequences of $s$. The quotient stalk is $\mathcal O_{X,x}/I_x$ by [F7]. When $r=0$, $I=0$ and $Z=X$. [A1, F1, F5, F6, F7, F10, construct]

2.1 For local sections $v_1,\ldots,v_i$ of $E$, define contraction by $d(v_1\wedge\cdots\wedge v_i)=\sum_{j=1}^i(-1)^{j-1}s(v_j)v_1\wedge\cdots\widehat{v_j}\cdots\wedge v_i$. This alternating, restriction-compatible formula induces a map on the exterior sheafification in [F1]; hence it gives a global map $\Lambda^iE\to\Lambda^{i-1}E$. In a local basis it is the differential in [F2], so $d^2=0$ locally and therefore globally by sheaf locality. The quotient map $\mathcal O_X\to\mathcal O_X/I=i_*\mathcal O_Z$ is an augmentation because its composite with $d:E\to\mathcal O_X$ is zero. [F1, F2, F10, step 1.1, construct]

3.1 At $x\in Z$, take the local basis in the regularity hypothesis. The local wedge bases in [F1] identify the stalk complex with the Koszul complex of the values of $s_x$. The regularity hypothesis and [F2] give cohomology only in degree zero, where the augmentation identifies it with $\mathcal O_{X,x}/I_x$. At $x\notin Z$, $I_x=\mathcal O_{X,x}$ by [F6], so there is $v\in E_x$ with $s_x(v)=1$. Exterior multiplication by $v$ contracts the stalk complex, since $d(v\wedge w)+v\wedge d(w)=w$; the quotient stalk is also zero. The augmented sequence is consequently exact at every stalk, and [F7] makes it exact as a sequence of sheaves. Equivalently its augmentation induces isomorphisms on every cohomology sheaf and is a quasi-isomorphism in [F3]. For $r=0$ it is the identity $\mathcal O_X\to\mathcal O_X$. [F1, F2, F3, F6, F7, F10, step 1.1, step 2.1, assume-hyp, construct]

3.2 In the ambient perfect category, put $F_mK(s)^n=K(s)^n$ for $n\geq m$ and zero for $n<m$, with the induced differential. For $-r\leq m\leq0$ there is a degreewise split short exact sequence $0\to A\xrightarrow{f}B\xrightarrow{q}C\to0$, where $A=F_{m+1}K(s)$, $B=F_mK(s)$ and $C=K(s)^m$ placed in degree $m$ with zero differential. All three are bounded complexes of finite locally free sheaves. Define $p:\operatorname{Cone}(f)\to C$ by $p(b,a)=q(b)$. This is a cochain map and is degreewise surjective. Its kernel is canonically $A^n\oplus A^{n+1}$ in degree $n$, with differential $(u,v)\mapsto(d_Au+v,-d_Av)$ and contracting homotopy $h(u,v)=(0,u)$: direct substitution gives $dh+hd=1$. At any stalk, a cycle in $C$ lifts to an element of the cone; subtracting $h$ of its differential makes that lift a cycle. A cycle in the cone whose image is a boundary becomes a cycle in the kernel after subtracting the differential of a lift of that boundary's primitive, and this kernel cycle is a boundary by the same contraction. Thus $p$ induces cohomology isomorphisms on all stalks, so it is a quasi-isomorphism by [F7]. The cone cofiber in [F8] is therefore equivalent to $C$, and [F3] places this cofiber sequence in the ambient perfect category. [F1, F3, F7, F8, step 2.1, construct, algebra]

4.1 By [F1], $K(s)$ is bounded with finite locally free terms, so it is perfect. Step 3.1 shows it is acyclic away from $Z$; by [F3] it is an object of $\operatorname{Perf}_Z(X)$. Its object class in the degree-zero K-group is therefore well-defined by [F4], and this is the stated $e_Z(s)$. The construction uses the underlying closed set for support; it does not identify supported K-theory with coherent-sheaf G-theory. [A1, F1, F3, F4, step 3.1]

5.1 By [F4], each cofiber sequence of step 3.2 gives $[F_mK(s)]=[F_{m+1}K(s)]+[K(s)^m[-m]]$. The zero object's class is zero, using the cofiber relation for $0\to0\to0$. The cofiber sequence $A\to0\to A[1]$ from [F8] gives $[A[1]]=-[A]$. Starting with $F_1K(s)=0$ and iterating down to $F_{-r}K(s)=K(s)$ therefore yields $[K(s)]=\sum_{i=0}^r(-1)^i[\Lambda^iE]$, since the term in degree $-i$ is $\Lambda^iE[i]$. Naturality of the object-class map in [F4] sends $e_Z(s)$ to $[K(s)]$ under inclusion, proving the displayed formula. [F3, F4, F8, step 4.1, step 3.2, algebra]

6.1 By [F9], $E^\vee$ is finite locally free of the same rank. A section $t$ induces $t^\vee$ by evaluation: on each open set, $\varphi\mapsto\varphi(t(1))$ is linear and commutes with restriction, so defines a sheaf morphism by [F10]. Its values on a dual basis are the coordinates of $t$ in the original basis. Applying steps 1.1 through 5.1 to this functional on $E^\vee$ under the stated regularity hypothesis gives the section formula with $E^\vee$. [F9, F10, step 5.1, assume-hyp] ∎
