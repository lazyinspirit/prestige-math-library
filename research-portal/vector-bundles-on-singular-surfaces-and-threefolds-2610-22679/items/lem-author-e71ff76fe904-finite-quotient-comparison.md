---
id: lem-author-e71ff76fe904-finite-quotient-comparison
kind: lemma
title: The actual finite-quotient map to cdh-local motivic cohomology
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-finite-coefficients
  - thm-author-e71ff76fe904-cdh-factorization-input
  - math:thm-localisations-are-flat
  - math:thm-localisation-of-modules-is-tensor-product
  - math:thm-bezout-identity
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-b747b28c359f-derived-finite-coefficients: mathematical-premise
  thm-author-e71ff76fe904-cdh-factorization-input: mathematical-premise
  math:thm-localisations-are-flat: mathematical-premise
  math:thm-localisation-of-modules-is-tensor-product: mathematical-premise
  math:thm-bezout-identity: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 4.10(4), printed p. 21, with its proof paragraph on p. 22;
        Theorem 4.24(3), printed p. 28, with proof part (3) on the same page
        (PDF indices 20, 21 and 27).
      statement: The canonical motivic-to-cdh map on qcqs Q-schemes is an equivalence
        modulo every positive integer; on qcqs F_p-schemes it is an equivalence
        after inverting p.
      hypotheses: Prime base field Q or F_p; qcqs schemes; nonnegative weight j here.
        Finite reduction in characteristic p additionally requires p not
        dividing n.
      reading_limits: Read both theorem statements and the indicated proof paragraphs
        in the versioned PDF extraction during this repair. Their construction
        and upstream trace-method results were not reconstructed. The mod-n
        deduction in characteristic p below is local, using the declared algebra
        suppliers.
proof_strategy: direct
dependency_level: 9
formulation_deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-finite-coefficients
  - thm-author-e71ff76fe904-cdh-factorization-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-finite-coefficients
  - thm-author-e71ff76fe904-cdh-factorization-input
  - math:thm-localisations-are-flat
  - math:thm-localisation-of-modules-is-tensor-product
  - math:thm-bezout-identity
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the fields and scheme data below, as in the supplied motivic functor; existence of these universes is a size assumption. Here all qcqs $B$-schemes means those with data in $U$, and coherent complex-valued presheaves use that supplier's stable derived enhancement with $V$-small coefficients, considered in $W$.

Let $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$, and work on the category of all qcqs $F$-schemes. For $j\geq0$, write $M_j=\mathbb Z(j)_{\mathrm{mot},F}$ for the supplied Elmanto–Morrow complex-valued presheaf, and $\mathbb Z(j)_{\mathrm{cdh},F}$ for its specified classical-input cdh target. For every integer $n\geq1$ invertible in $F$, the objectwise derived quotient of the canonical motivic-to-cdh comparison is a natural equivalence
$$\alpha_j:M_j/n\xrightarrow{\sim}\mathbb Z(j)_{\mathrm{cdh},F}/n.$$
The slash denotes the objectwise derived quotient $C\otimes^{\mathbf L}\mathbb Z/n=\operatorname{cofib}(n:C\to C)$, precisely as in the completed motivic definition. This is an equivalence of actual $D(\mathbb Z)$-valued presheaves on that same category and may be evaluated at every qcqs $F$-scheme. If $k$ is any field with prime subfield $F$, precomposition along the forgetful functor from qcqs $k$-schemes retains this equivalence, with source the standing motivic complex and target the restriction of the specified prime-field cdh complex.

## Statement references
[[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[[def-motivic-cohomology]]

[[lem-author-b747b28c359f-derived-finite-coefficients]]

[[thm-author-e71ff76fe904-cdh-factorization-input]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## External input
Reference 0 supplies only the characteristic-zero finite-quotient comparison and the characteristic-$p$ comparison after inverting $p$, through [[thm-author-e71ff76fe904-cdh-factorization-input]]. The positive-characteristic finite-quotient deduction below is locally proved; the imported motivic constructions and comparison theorems are not reconstructed here.

## Facts & Assumptions
**Given:** The hypotheses, Choice and universe assumptions in the statement.

**Goal:** Prove the natural equivalence for the actual canonical quotient map, and its fixed-field restriction.

[A1] Choice is inherited from the supplied motivic functor's unbounded derived enhancement, including its resolution and model constructions; it is not used by the elementary localization calculation below. The same universes and size bounds are retained. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]] [[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[F1] [[thm-author-e71ff76fe904-cdh-factorization-input]] supplies the target, the actual canonical map, the characteristic-zero comparison modulo $n$ and the characteristic-$p$ comparison after inverting $p$, on the same qcqs prime-field category. These are the two comparison assertions of reference 0, under the hypotheses recorded there.

[F2] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the prime-field motivic functor and its fixed-field restriction under [A1]. [[def-motivic-cohomology]] identifies its values. [[lem-author-b747b28c359f-derived-finite-coefficients]] supplies the functor $T_n(C)=C/n$, computed by the multiplication-by-$n$ cone on any representing complex, and the natural coefficient short exact sequence, without boundedness assumptions.

[F3] For $R=\mathbb Z$ and $S=\{1,p,p^2,\ldots\}$, [[math:thm-localisations-are-flat]] says $A=S^{-1}R=\mathbb Z[1/p]$ is flat, so tensoring with $A$ is exact. [[math:thm-localisation-of-modules-is-tensor-product]] identifies $N\otimes_{\mathbb Z}A$ with $S^{-1}N$, naturally by $x\otimes(a/p^r)\mapsto ax/p^r$.

[F4] [[math:thm-bezout-identity]] supplies integers $b,d$ with $bp+dn^2=1$ when $p\nmid n$. Hence multiplication by $b$ is inverse to multiplication by $p$ on every abelian group annihilated by $n^2$.

## Proof
1.1 Suppose $F=\mathbb F_p$. By [F3], tensoring any cochain complex $C$ degreewise with $A=\mathbb Z[1/p]$ preserves quasi-isomorphisms and computes $C[1/p]$: exactness identifies kernels, images and cohomology after tensoring. By the cone model of [F2], tensoring commutes with $T_n$ by distributing over its two summands and its multiplication-by-$n$ differential, giving a natural identification $T_n(C[1/p])\cong T_n(C)\otimes A$. For every integer $a$, the coefficient exact sequence of [F2] expresses $N=H^a(T_n(C))$ as an extension of two groups annihilated by $n$; thus $n^2N=0$. Since $p\nmid n$, [F4] makes multiplication by $p$ invertible on $N$, with inverse multiplication by $b$. Consequently the localization map $N\to S^{-1}N$ is an isomorphism: its inverse sends $x/p^r$ to $b^r x$, well-defined by the fraction relation and the invertibility of $p$. Under [F3] and the cohomology identification above, this is exactly the map on cohomology induced by $T_n(C)\to T_n(C[1/p])$. Therefore that natural map is a quasi-isomorphism for every unbounded $C$. For a morphism $g:C\to D$, its naturality square identifies $T_n(g)$, up to these equivalences, with $T_n(g[1/p])$. In particular, if $g[1/p]$ is an equivalence, so is $T_n(g)$, since $T_n$ is a functor. [F2, F3, F4, construct]

2.1 If $F=\mathbb Q$, [F1] applies EM Theorem 4.10(4) with $m=n$ directly to the canonical comparison, with the quotient convention of [F2]. If $F=\mathbb F_p$, [F1] applies EM Theorem 4.24(3) to that canonical comparison after inverting $p$; step 1.1 then proves that its actual quotient map $\alpha_j$ is an equivalence. These constructions take place in the supplied derived framework under [A1]. They are natural in each qcqs $F$-scheme $X$ and in its pullback maps, so the objectwise equivalences give the stated natural equivalence of presheaves. Precomposition along the forgetful functor for $k/F$ retains these same maps and equivalences, and [F2] identifies the source with the standing motivic quotient. The target is precisely the restriction of the prime-field cdh complex; no commutation of restriction with sheafification is required. This establishes both asserted scopes. [A1, F1, F2, step 1.1] ∎
