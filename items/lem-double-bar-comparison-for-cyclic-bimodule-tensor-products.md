---
id: lem-double-bar-comparison-for-cyclic-bimodule-tensor-products
kind: lemma
title: "Double bar comparison for cyclic bimodule tensor products"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-two-sided-bar-complex-is-an-enveloping-projective-resolution
  - lem-hochschild-chains-are-bar-tensor-chains
  - prop-hochschild-degree-zero-is-bimodule-coinvariants
  - lem-projective-modules-are-flat-over-an-arbitrary-ring
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - cor-every-vector-space-has-a-basis
  - thm-chain-homotopic-maps-induce-the-same-map-on-homology
  - thm-a-direct-summand-of-a-projective-is-projective
  - thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object
  - thm-projective-comparison-maps-are-unique-up-to-chain-homotopy
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - def-enveloping-algebra-and-bimodule-module-dictionary
  - def-opposite-ring
  - def-axiom-of-choice
  - thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex
  - thm-projective-module-characterizations
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-two-sided-bar-resolution-of-an-associative-algebra
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.4, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "Equations (3.37)–(3.39): the bar models and cyclic twist. The precise right-module projectivity under the one-sided hypotheses here is proved explicitly below."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1 and §9.5, printed pp.300–304 and 326–329"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.3–9.1.5: the bar resolution and the identification of Hochschild chains with its coinvariant tensor model."
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field, let $A$ and $B$ be unital
associative $k$-algebras, let $M$ be an $(A,B)$-bimodule that is finite
projective as a **right** $B$-module, and let $N$ be a $(B,A)$-bimodule that is
finite projective as a **right** $A$-module. Put
$$P_A:=\operatorname{Bar}(A)\otimes_A(M\otimes_BN),\qquad Q_A:=\operatorname{Tot}\bigl(\operatorname{Bar}(A)\otimes_AM\otimes_B\operatorname{Bar}(B)\otimes_BN\bigr),$$
the second total complex being the signed total complex of the double complex
whose homological bidegree $(p,q)$ term is
$\operatorname{Bar}_p(A)\otimes_AM\otimes_B\operatorname{Bar}_q(B)\otimes_BN$
and whose standard homological total differential is $d_A+(-1)^pd_B$, where
$d_A$ and $d_B$ lower the $A$-bar degree $p$ and the $B$-bar degree $q$,
respectively. This sign makes the two cross terms cancel, so the total
differential squares to zero. Then $P_A$ and $Q_A$ are
projective resolutions of $M\otimes_BN$ in the abelian category of right
$A^e$-modules, and the exchanged constructions
$$P_B:=\operatorname{Bar}(B)\otimes_B(N\otimes_AM),\qquad Q_B:=\operatorname{Tot}\bigl(\operatorname{Bar}(B)\otimes_BN\otimes_A\operatorname{Bar}(A)\otimes_AM\bigr)$$
are projective resolutions of $N\otimes_AM$ in right $B^e$-modules. After
enveloping coinvariants the two middle double-bar complexes are isomorphic by
the cyclic rotation
$$\rho:\operatorname{coInv}(Q_A)\longrightarrow\operatorname{coInv}(Q_B),\qquad\rho\bigl([x\otimes m\otimes y\otimes n]\bigr)=(-1)^{pq}\,[y\otimes n\otimes x\otimes m],$$
on a block in bar degrees $p$ and $q$, with the homological Koszul sign. This
map is defined on enveloping coinvariant classes; the raw balanced tensors are
not claimed to rotate before quotienting. The outer comparisons provide a natural zigzag of chain-homotopy equivalences
$$C_\bullet(A,M\otimes_BN)\;\simeq\;C_\bullet(B,N\otimes_AM),$$
natural up to homotopy and involutive up to homotopy. Consequently there is a
natural isomorphism $HH_j(A,M\otimes_BN)\cong HH_j(B,N\otimes_AM)$ for every
$j\geq0$. No left-projectivity of $M$ or $N$ is asserted or used.

## Facts & Assumptions

**Given:** AC, a field $k$, unital associative $k$-algebras $A$ and $B$, an $(A,B)$-bimodule $M$ finite projective as a right $B$-module, and a $(B,A)$-bimodule $N$ finite projective as a right $A$-module.

[F1] The bar term is $\operatorname{Bar}_p(A)=A\otimes_kA^{\otimes_kp}\otimes_kA$ with differential $d_p=\sum_{r=0}^p(-1)^r\mu_{r,r+1}$ and augmentation $\varepsilon=\mu:\operatorname{Bar}_0(A)=A\otimes_kA\to A$; the left and right $A^e$-actions are $(c\otimes d^{\mathrm{op}})\cdot(a_0\otimes\cdots\otimes a_{p+1})=ca_0\otimes a_1\otimes\cdots\otimes a_{p+1}d$ and $(a_0\otimes\cdots\otimes a_{p+1})\cdot(c\otimes d^{\mathrm{op}})=da_0\otimes a_1\otimes\cdots\otimes a_{p+1}c$ ([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F2] Under AC the augmented bar complex is a projective resolution of $A$ as a right $A^e$-module and as a left $A^e$-module ([[thm-two-sided-bar-complex-is-an-enveloping-projective-resolution]]).

[F3] The $k$-central $A$-bimodule $M$ is a left $A^e$-module by $(c\otimes d^{\mathrm{op}})m=cmd$ and a right $A^e$-module by $m(c\otimes d^{\mathrm{op}})=dmc$; the constructions are inverse and this dictionary identifies $k$-central bimodules, left $A^e$-modules and right $A^e$-modules ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F4] $\Phi_n:\operatorname{Bar}_n(A)\otimes_{A^e}M\to C_n(A,M)$, $(a_0\otimes\cdots\otimes a_{n+1})\otimes m\mapsto(a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n$, is a natural isomorphism of chain complexes onto the Hochschild complex $C_\bullet(A,M)$, with $\Phi_0$ the identification $C_0(A,M)=M$ ([[lem-hochschild-chains-are-bar-tensor-chains]]).

[F5] $HH_0(A,M)\cong M/D(A,M)$ with $D(A,M)=\operatorname{span}_k\{am-ma\}$ the commutator span, so $HH_0$ is the module of coinvariants $M_A=\operatorname{coInv}(M)$ ([[prop-hochschild-degree-zero-is-bimodule-coinvariants]]).

[F6] Every projective left or right module over a unital ring is flat on that side, without AC ([[lem-projective-modules-are-flat-over-an-arbitrary-ring]]).

[F7] Tensoring a bounded-above complex of flat right $R$-modules with a bounded-above acyclic left $R$-complex, or with the sides exchanged, gives an acyclic total complex; hence a bounded-above flat complex preserves quasi-isomorphisms between bounded-above complexes in the other variable ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F8] Every direct summand of a projective object in an abelian category is projective ([[thm-a-direct-summand-of-a-projective-is-projective]]).

[F9] Assume DC. Any two projective resolutions of the same object are homotopy equivalent over that object ([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]]).

[F10] AC implies DC, hence countable choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).

[F11] Under the opposite-ring dictionary a right $R$-module is the same thing as a left $R^{\mathrm{op}}$-module with the same underlying additive group, the same epimorphisms and the same free modules ([[def-opposite-ring]]), so assertions 1, 2 and 4 of the left-module characterizations carry over verbatim: for a right $R$-module $P$, projectivity, the lifting property against epimorphisms, splitting of every short exact sequence ending in $P$, and being a direct summand of a free right $R$-module are equivalent ([[thm-projective-module-characterizations]]). A finitely generated right module is a quotient of a finite free right module, and projectivity of $P$ splits that quotient, so a finitely generated projective right $R$-module is a direct summand of a finite free right $R$-module; conversely a direct summand of a free right module is projective by the same dictionary ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

[F12] For the given $(B,A)$-bimodule $N$, $M\otimes_BN$ is a right $A$-module by $(m\otimes n)a=m\otimes na$: the commuting left $B$- and right $A$-actions on $N$ make the balance relations $mb\otimes n=m\otimes bn$ right $A$-linear. Similarly, $N\otimes_AM$ is a right $B$-module by $(n\otimes m)b=n\otimes mb$ ([[lem-graded-balanced-tensor-and-shift-isomorphisms]], with ungraded modules concentrated in internal degree zero).

[F13] Let $C$ be a first-quadrant homological double complex in an abelian category. If $H^v_q(C_{p,*})=0$ for every $p$ and every $q>0$, put $B_p=H^v_0(C_{p,*})$ with differential induced by the horizontal differential; then the natural projection $\operatorname{Tot}(C)\to B$ is a quasi-isomorphism. In particular completely acyclic columns imply that the total complex has the homology of the bottom edge ([[thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex]]).

[F14] Under AC every vector space over $k$ has a basis ([[cor-every-vector-space-has-a-basis]]).

[F15] Chain-homotopic chain maps induce the same homology map ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[F16] Under DC, any two augmentation-preserving maps between projective resolutions lifting the same object morphism are chain-homotopic ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

## Proof
**Proof technique:** direct.

1.1 Since $M$ is finite projective as a right $B$-module, [F11] gives a finite split retraction $M\to B^r\to M$. Tensoring it over $B$ with $N$ exhibits $X:=M\otimes_BN$ as a direct summand of $N^r$ as a right $A$-module. Thus $X$ is finite projective as a right $A$-module. Symmetrically, $Y:=N\otimes_AM$ is finite projective as a right $B$-module. Only the stated right-module structures are used. [F8, F11, F12, given, algebra]
1.2 For projectivity, the balanced tensor products identify $P_{A,p}$ with $A\otimes_kA^{\otimes p}\otimes_kX$ and $Q_{A,p,q}$ with $A\otimes_kV_{p,q}\otimes_kN$, where $V_{p,q}=A^{\otimes p}\otimes_kM\otimes_kB^{\otimes q}$. On either module the right $A^e$-action is $(a\otimes v\otimes z)\cdot(c\otimes d^{\mathrm{op}})=da\otimes v\otimes zc$. Since $X$ and $N$ are finite projective right $A$-modules, each is a retract of some $A^m$. Under AC, choose a $k$-basis of the middle vector space $V$; then $A\otimes_kV\otimes_kZ$ is a retract of a direct sum of copies of $A\otimes_kA$. The map $A^e\to A\otimes_kA$, $c\otimes d^{\mathrm{op}}\mapsto d\otimes c$, identifies the latter with a free right $A^e$-module of rank one. Thus each $P_{A,p}$ and $Q_{A,p,q}$ is projective as a right $A^e$-module; the same proof with $A,B$ exchanged handles the other side. This proves projectivity from the actual outer action and retains the middle factor $M$, without an unsupported split through the $A$-tensor. [F1, F2, F3, F8, F11, F12, F14, given, algebra]
2.1 The augmented complex $P_{A,\bullet}\to X$ is the standard bar resolution of the left $A$-module $X$; its underlying augmented complex is contractible by the bar extra-degeneracy that inserts $1_A$, so it is exact. For the double bar, write $$U_p:=\operatorname{Bar}_p(A)\otimes_AM\cong A\otimes_kA^{\otimes p}\otimes_kM.$$ As a right $B$-module, $U_p$ is a direct sum of copies of $M$ (choose a $k$-basis of $A\otimes_kA^{\otimes p}$), hence is flat by the right $B$-projectivity of $M$ and [F6]. The augmented left $B$-bar complex $\operatorname{Bar}_\bullet(B)\otimes_BN\to N$ is the standard bar resolution of the left $B$-module $N$; its terms are free left $B$-modules under AC, and its augmentation is a quasi-isomorphism by the extra-degeneracy contraction. Thus $U_p\otimes_B\operatorname{Bar}_\bullet(B)\otimes_BN\to U_p\otimes_BN$ is a quasi-isomorphism for each $p$, by [F7]. The first-quadrant assembly lemma [F13] now gives a quasi-isomorphism $Q_A\to P_A$. Each total homological degree $s$ contains only the $s+1$ pairs $p+q=s$, so the direct-sum total has finite diagonals; no boundedness of the entire vertical bar complex is claimed. Together with 1.2 this proves that $Q_A$ is a projective right $A^e$-resolution of $X$. The symmetric proof gives the asserted resolutions $P_B,Q_B$ of $Y$. [F1, F2, F6, F7, F13, F14, step 1.1, step 1.2, given, algebra]
2.2 Put $U_\bullet=\operatorname{Bar}_\bullet(A)\otimes_AM$ and $V_\bullet=\operatorname{Bar}_\bullet(B)\otimes_BN$, with homological bar degrees $p,q$. Then $Q_A=\operatorname{Tot}(U_\bullet\otimes_BV_\bullet)$ and $Q_B=\operatorname{Tot}(V_\bullet\otimes_AU_\bullet)$. The class map $$[u\otimes v]\longmapsto[v\otimes u]$$ is well defined from $\operatorname{coInv}_A(U\otimes_BV)$ to $\operatorname{coInv}_B(V\otimes_AU)$. Indeed, a $B$-balance relation $ub\otimes v=u\otimes bv$ maps to classes $[v\otimes ub]$ and $[bv\otimes u]$, which agree in $B$-coinvariants; an $A$-coinvariant relation $au\otimes v=u\otimes va$ maps to $[v\otimes au]$ and $[va\otimes u]$, which agree by $A$-balance. The same construction in reverse is its inverse. On bidegree $(p,q)$ multiply this map by $(-1)^{pq}$. With source differential $D=d_A+(-1)^pd_B$ and target $D'=d_B'+(-1)^qd_A'$, the $d_A$ terms agree because $(-1)^{(p-1)q}=(-1)^q(-1)^{pq}$; the $d_B$ terms agree because $(-1)^p(-1)^{p(q-1)}=(-1)^{pq}$. Thus it is an isomorphism of chain complexes, and applying it twice gives sign $(-1)^{pq+qp}=1$. This rotation is asserted only after taking enveloping coinvariants. [F1, F3, F12, step 1.2, given, algebra]
3.1 By [F4], $\operatorname{coInv}_A(P_A)=\operatorname{Bar}(A)\otimes_{A^e}X$ identifies with $C_\bullet(A,X)$, and similarly on the $B$-side. The degree-zero case also agrees with the coinvariant description [F5]. By 1.1, 1.2 and 2.1, $P_A,Q_A$ are projective resolutions of the same right $A^e$-module $X$; AC implies DC by [F10], so [F9] supplies comparison maps in both directions whose composites are chain-homotopic to the identities. The same holds for $P_B,Q_B$. In a graded instance, these comparisons and homotopies can be chosen of internal degree zero: take an ungraded lift and then its degree-zero homogeneous component. Because the lifted map and epimorphism have degree zero, that component still lifts the map; the same argument applies at each stage of the comparison and homotopy constructions. The additive coinvariant functors preserve these homotopies. Composing these comparison zigzags with the rotation of 2.2 gives the claimed chain-homotopy equivalence of Hochschild complexes. By [F15], it induces the asserted isomorphism on every $HH_j$. By [F16], comparison maps lifting the same object morphism are unique up to homotopy. For a morphism of bimodule pairs, the two composites around each comparison square lift the same induced morphism of $X$ (or $Y$), so [F16] makes that square commute up to homotopy. Thus the equivalence is natural up to homotopy; since the rotation itself squares to the identity, the resulting equivalence is involutive up to homotopy. The argument uses only right projectivity of $M_B$ and $N_A$. [F4, F5, F9, F10, F15, F16, step 1.1, step 1.2, step 2.1, step 2.2, given, algebra] ∎
