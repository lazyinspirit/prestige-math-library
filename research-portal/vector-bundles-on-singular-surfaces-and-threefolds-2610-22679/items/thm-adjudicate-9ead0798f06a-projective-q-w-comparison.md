---
id: thm-adjudicate-9ead0798f06a-projective-q-w-comparison
kind: theorem
title: Full projective Quillen–Waldhausen comparison and the local free-class map
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-projective-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-quasi-isomorphism
  - math:def-local-ring
  - math:thm-modules-over-a-ring-form-an-abelian-category
  - math:thm-projective-module-characterizations
  - math:cor-nakayama-generators-modulo-an-ideal
  - math:def-jacobson-radical-of-a-ring
  - math:lem-hh-finite-spanning-list-contains-a-basis
  - math:thm-nonzero-commutative-rings-have-invariant-basis-number
  - math:def-split-grothendieck-group-of-an-additive-category
  - math:def-restriction-and-extension-of-scalars
  - math:lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums
  - math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic
  - math:def-scheme
  - math:def-locally-ringed-space
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-generated-cyclic-finitely-generated-and-free-modules: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-quasi-isomorphism: mathematical-premise
  math:def-local-ring: mathematical-premise
  math:thm-modules-over-a-ring-form-an-abelian-category: mathematical-premise
  math:thm-projective-module-characterizations: mathematical-premise
  math:cor-nakayama-generators-modulo-an-ideal: mathematical-premise
  math:def-jacobson-radical-of-a-ring: mathematical-premise
  math:lem-hh-finite-spanning-list-contains-a-basis: mathematical-premise
  math:thm-nonzero-commutative-rings-have-invariant-basis-number: mathematical-premise
  math:def-split-grothendieck-group-of-an-additive-category: mathematical-premise
  math:def-restriction-and-extension-of-scalars: mathematical-premise
  math:lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums: mathematical-premise
  math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-locally-ringed-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Charles Weibel, The K-book, author-hosted standalone Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: IV.1.1–1.1.2, pp. 2–3; IV.1.3–1.6, pp. 4–5; IV.3.1–3.2.1, pp. 24–26;
        IV.4.9–4.11.1, pp. 42–45; IV.6.1–6.3.2, pp. 53–55; IV.7.1–7.2, pp.
        61–62; IV.8.1–8.6, pp. 66–70; Exercises IV.8.5–8.7, pp. 74–75
      statement: The nerve/classifying-space, Q and Waldhausen S constructions define
        full K-spaces. Exact-category S/Q is a natural equivalence compatible
        with object maps. For split exact categories Q agrees with direct-sum
        group completion; for finite free modules its stabilized automorphism
        map is the acyclic plus map. The projective version has components
        K_0(R).
      hypotheses: Use small presentations of essentially small exact or Waldhausen
        categories in fixed universes; split exactness for group-completion/Q.
        For free modules use GL_n(R) stabilized by g -> diag(g,1), for a unital
        ring R. The local-ring application additionally proves finite-projective
        freeness and rank identification in Proof 2.1; it is not an extra
        imported commutative-algebra premise.
      reading_limits: This repair read the stated constructions, theorem statements,
        the displayed plus/group-completion arguments and the S/Q exercise
        outline in the cached author-hosted Chapter IV PDF, SHA256
        9f1c1b8cccfe19d547c27dd04c61f198fd7a0cddd0018a0b84442b00fa575248, and
        opened the live primary PDF passages on 2026-11-12. The long
        foundational comparison results are imported; no independent
        reconstruction, completion of the exercises, scan review or full-chapter
        reading is claimed.
    - title: Charles Weibel, The K-book, author-hosted standalone Chapter V
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: V.2.2 and its displayed proof, printed pp. 13–14; V.2.7.2, printed p. 18
      statement: For an exact category closed under kernels of surjections in a
        specified ambient abelian category, degree-zero inclusion into bounded
        complexes, with degreewise admissible cofibrations and ambient
        quasi-isomorphisms, induces an equivalence of K-spaces.
      hypotheses: Apply V.2.2 to finite projective A-modules inside all A-modules,
        with the split exact structure. The ambient abelian property and
        kernel/extension closure are supplied and checked below. Reindex bounded
        cochains as chains by C^sharp_n=C^{-n}. No Noetherian or regularity
        hypothesis is required.
      reading_limits: This repair read the full theorem and displayed proof on printed
        pp. 13–14 and V.2.7.2 on p. 18 in the cached author-hosted Chapter V
        PDF, SHA256
        52dcc8ee3a1764e5ea309c59f093ac8e2a1ea64f3b94bacc05e6a2b6125b1da8, and
        opened the live primary theorem on 2026-11-12. Localization, additivity
        and approximation foundations remain imported; no scan review or
        reconstruction of those foundations is claimed.
dependency_level: 0
---

## Statement
Assume AC and fixed universe bounds. For every commutative unital ring $A$, let $P(A)$ be finite projective modules with their split exact structure, and let $C(A)$ be bounded cochain complexes in $P(A)$, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical exact-category S/Q comparison followed by degree-zero inclusion gives a natural equivalence of full K-spaces
$$K^Q(P(A))=\Omega BQ(P(A))\simeq K^W(C(A)).$$
It sends a projective object to the same object in degree zero and is natural for extension of scalars. No noetherian or regularity hypothesis is required. For every commutative local ring $R$, the stable free-class map $\mathbb Z\times BGL(R)\to K^Q(P(R))$ is, component by component, the integral-homology-acyclic plus map. This includes Zariski local rings.

## External input
Import the construction definitions and the comparison results at the precise locators in the two source records: [Weibel, Chapter IV](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf) and [Weibel, Chapter V](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf). The imported foundations are literature-derived. This item composes them and supplies the local module arguments below; its proof provenance describes that local argument, not a reconstruction of the imported theorems. The comparison with an enhanced perfect category and nonconnective degree zero remains in the consumer.

Here $B\mathcal D=|N\mathcal D|$ realizes the nerve, whose simplices are composable strings of arrows. For a group, use its one-object category. The category $Q(P(A))$ has the projective objects and isomorphism classes of spans $U\leftarrow M\rightarrow V$, with the first arrow a split epimorphism and the second a split monomorphism; composition is by pullback. The space $K^W(C(A))$ means $\Omega|wS_\bullet C(A)|$, not a spectrum: $S_n$ consists of length-$n$ cofibration filtrations starting at zero with compatible chosen subquotients, and $wS_n$ has their componentwise weak equivalences. The analogous exact-category model uses isomorphisms for $w$. These are the constructions imported in [F1] and [F2].

Write $GL_n(R)=\operatorname{Aut}_R(R^n)$ and $GL(R)=\varinjlim_n GL_n(R)$ under $g\mapsto\operatorname{diag}(g,1)$. The plus map kills the perfect elementary subgroup $E(R)$ in the fundamental group and is acyclic, meaning its homotopy fibers have the integral homology of a point; in particular it induces integral homology isomorphisms. The stable free-class map is the stabilized automorphism map translated into every integer rank component by the direct-sum group-completion structure. Thus its component labelled $n$ has class $n[R]$, including negative $n$. These construction and map identifications are part of the Chapter IV input, not a choice of an unrelated equivalence of spaces.

## Facts & Assumptions
[A1] AC is assumed for small presentations in the fixed universes, as in IV.3.2.1 and IV.6.3.1, and is inherited from the stated Nakayama supplier in step 2.1. [[math:def-axiom-of-choice]]

[F1] Import the Chapter IV construction definitions just specified, the canonical exact-category S/Q equivalence, and the split-exact group-completion/Q and free-module plus comparisons. IV.6.2 identifies the component of an object with its Grothendieck class; IV.8.3.2 supplies the actual object map. IV.4.9 and IV.7.1 identify the stabilized free-object map, rather than merely giving an abstract equivalence of spaces. Use the exact locators and hypotheses of source record 0.

[F2] Import Gillet–Waldhausen, V.2.2, with its ambient-kernel hypothesis and the bounded-complex Waldhausen structure stated immediately before it. Its inclusion is the actual degree-zero functor, and the construction is natural for exact functors preserving the specified quasi-isomorphisms. Use source record 1.

[F3] Finite means finitely generated; projective means the lifting property for module surjections. A bounded cochain complex has module differentials $d^n:C^n\to C^{n+1}$ with $d^{n+1}d^n=0$ and only finitely many nonzero terms; maps commute with these differentials. Cohomology is $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$, and a quasi-isomorphism induces isomorphisms on all these groups. To apply chain conventions, use $(C^\sharp)_n=C^{-n}$. A split exact sequence is one isomorphic to $0\to U\to U\oplus V\to V\to0$; a degreewise split monomorphism is an injective complex map split as a module map in each degree, with no required splitting as complexes. [[math:def-generated-cyclic-finitely-generated-and-free-modules]] [[math:def-projective-module]] [[math:def-cochain-complex-in-an-abelian-category]] [[math:def-quasi-isomorphism]]

[F4] All $A$-modules form an abelian category. A surjection onto a projective splits, and direct summands of projectives are projective. For finite modules, the summand is finite because the projection of a finite generating list generates it. [[math:thm-modules-over-a-ring-form-an-abelian-category]] [[math:thm-projective-module-characterizations]]

[F5] A local ring is nonzero and has a unique maximal ideal $\mathfrak m$, with residue field $k=R/\mathfrak m$. The Jacobson radical is the intersection of maximal ideals, so here $J(R)=\mathfrak m$. Under AC, generators of $M/\mathfrak mM$ lift to generators of any finite $M$; this includes the empty list, so $M/\mathfrak mM=0$ forces $M=0$. A finite spanning list in a vector space contains a basis. [[math:def-local-ring]] [[math:def-jacobson-radical-of-a-ring]] [[math:cor-nakayama-generators-modulo-an-ideal]] [[math:lem-hh-finite-spanning-list-contains-a-basis]]

[F6] Nonzero commutative rings have invariant basis number for finite bases. For the split exact category $P(R)$, $K_0$ is the split Grothendieck group generated by object classes with relations $[U\oplus V]=[U]+[V]$. Its identification with components of the Q-space is the imported IV.6.2 in [F1]. [[math:thm-nonzero-commutative-rings-have-invariant-basis-number]] [[math:def-split-grothendieck-group-of-an-additive-category]]

[F7] For a unital ring map $A\to B$, extension of scalars is $B\otimes_A-$, on maps $u\mapsto1\otimes u$. It is additive and preserves finite direct sums and cokernels, hence split sequences and pushouts along split monomorphisms. The cone criterion says a chain map is a quasi-isomorphism exactly when its mapping cone is acyclic; use the reindexing in [F3] for cochains. A cochain complex is contractible when maps $h^n:D^n\to D^{n-1}$ satisfy $d^{n-1}h^n+h^{n+1}d^n=\operatorname{id}_{D^n}$. [[math:def-restriction-and-extension-of-scalars]] [[math:lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums]] [[math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]

[F8] A Zariski local ring means a structure-sheaf stalk $\mathcal O_{X,x}$ of a scheme. Schemes are locally ringed spaces, so these stalks are commutative local rings as required in [F5]. [[math:def-scheme]] [[math:def-locally-ringed-space]]

## Proof
**Given:** The exact and Waldhausen structures in the Statement, the small presentations, and [A1].

**Goal:** Apply the imported comparisons and prove their local free-rank identification without a Noetherian hypothesis.

1.1 By [F3] and [F4], $P(A)$ is a full additive exact subcategory of the abelian category of all $A$-modules: extensions of projectives split, and a surjection between finite projectives has a finite projective kernel. Thus [F2] applies, and composing with the S/Q equivalence in [F1] gives the asserted equivalence of full spaces, with the actual degree-zero object map. For naturality, a finite projective $P$ admits a split finite free cover $A^m\twoheadrightarrow P$, so its scalar extension is a finite projective summand of $B^m=B\otimes_A A^m$; the latter identification sends $b\otimes(a_i)_i$ to $(b f(a_i))_i$ for the ring map $f:A\to B$, with inverse $(b_i)_i\mapsto\sum_i b_i\otimes e_i$. Split sequences and their degreewise pushouts are preserved by [F7]. The zero complex is contractible. For a nonzero bounded acyclic projective cochain complex $D$, start at its highest nonzero degree $N$: $Z^N=D^N$ is projective. The exact sequences $0\to Z^n\to D^n\to Z^{n+1}\to0$ split successively downwards by [F4]. In the resulting coordinates $D^n=Z^n\oplus Z^{n+1}$, the differential is $(z,z')\mapsto(z',0)$ and $h^n(z,z')=(0,z)$ contracts $D$. Extension of scalars preserves this contracting identity. For a quasi-isomorphism, [F7] makes its bounded projective cone acyclic and hence contractible; additivity identifies the scalar-extended cone with the cone of the scalar-extended map, so that map remains a quasi-isomorphism. Consequently scalar extension is an exact Waldhausen functor here, and naturality of the imported comparisons gives the asserted naturality. [A1, F1, F2, F3, F4, F7, given]

2.1 Let $(R,\mathfrak m)$ be any commutative local ring and $P$ a finite projective $R$-module. Reduce a finite generating list modulo $\mathfrak m$ and use [F5] to choose a basis sublist of $P/\mathfrak mP$; let $p_1,\ldots,p_n$ be the corresponding elements of $P$. Nakayama in [F5], with $\mathfrak m=J(R)$ and [A1], makes $q:R^n\to P$, $e_i\mapsto p_i$, surjective. By [F4] it splits as $R^n=K\oplus P$, and $K$ is finite, generated by the projections of the standard basis. Reduction modulo $\mathfrak m$ gives $k^n=(K/\mathfrak mK)\oplus(P/\mathfrak mP)$, with the projection $\overline q:k^n\to P/\mathfrak mP$ an isomorphism by the chosen basis. Thus $K/\mathfrak mK=0$, and [F5] applied to $K$ and the empty list gives $K=0$. This proves $P\cong R^n$, including $n=0$, with no finiteness assumption on ideals of $R$. By [F6] its rank is unique, additive under direct sum, and identifies $K_0(P(R))$ with $\mathbb Z$: the rank map and $n\mapsto n[R]$ are inverse group homomorphisms. The monoidal groupoid of finite projectives is therefore equivalent to that of finite free modules; all its exact sequences split. The actual free-object group-completion/Q comparison in [F1] now identifies the stated map, on component $n$, with the plus map translated to class $n[R]$. Its acyclicity gives the asserted integral homology isomorphisms. The Zariski stalks qualify by [F8]. No henselian hypothesis or global free-rank description for nonlocal rings is used. [A1, F1, F4, F5, F6, F8, step 1.1] ∎
