---
id: thm-complex-splitting-principle-with-integral-injective-pullback
kind: theorem
title: Complex splitting principle with integral injective pullback
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-flag-bundle-and-chern-roots, thm-integral-complex-projective-bundle-theorem, def-complex-projective-bundle-and-tautological-complex-line, lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the projective-bundle theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Splitting principle, printed pp.130-132"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 section 3"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Splitting principle and splitting lemma, printed pp.208-210"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle with $n\geq1$
over a path-connected paracompact Hausdorff CW complex, and let
$q:\operatorname{Fl}(E)\to B$ be its flag bundle, constructed from a Hermitian
metric as in [[def-complex-flag-bundle-and-chern-roots]]. Then
$$q^*E=L_1\oplus L_2\oplus\cdots\oplus L_n$$
with the tautological complex lines $L_i$, and the pullback
$$q^*:H^*(B;R)\longrightarrow H^*(\operatorname{Fl}(E);R)$$
is injective for $R=\mathbb Z$ and for every field $\mathbb F_p$.

Moreover, for finitely many numerable complex bundles
$E^{(1)},\dots,E^{(m)}$ over $B$ there is a single CW-type base
$F\to B$ over which every $q^*E^{(j)}$ splits as a sum of complex lines and for
which the pullback $H^*(B;R)\to H^*(F;R)$ is injective for $R=\mathbb Z$ and
every $\mathbb F_p$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the numerable-bundle and projective-bundle suppliers ([[def-axiom-of-choice]]).

[F1] The flag bundle is built as an iterated projective bundle with tautological lines $L_i$ and $q^*E=L_1\oplus\cdots\oplus L_n$; its intermediate bases are compact-fiber numerable bundles over CW-type bases ([[def-complex-flag-bundle-and-chern-roots]]).

[F2] For a numerable complex bundle of rank $m$ over a paracompact Hausdorff CGWH base of CW type the projective bundle $P(E)$ has $H^*(P(E);R)$ free over $H^*(B;R)$ on $1,x,\dots,x^{m-1}$, and the same theorem covers the iterated CW-type bases ([[thm-integral-complex-projective-bundle-theorem]]).

[F3] Totals of numerable bundles with compact Hausdorff fiber over paracompact Hausdorff bases are paracompact Hausdorff; over CGWH bases the totals are CGWH, and under CW-type hypotheses they retain CW type ([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

[F4] The projective bundle of a numerable complex bundle is a fiber bundle with compact fiber $\mathbb{CP}^{m-1}$ over a CW base by [[def-complex-projective-bundle-and-tautological-complex-line]], and over a paracompact Hausdorff CGWH base of CW type by the explicit extension in [[thm-integral-complex-projective-bundle-theorem]].

## Proof

**Proof technique:** direct.

**Given:** AC, a numerable complex rank-$n$ bundle $E\to B$ with $n\geq1$ over a path-connected paracompact Hausdorff CW complex, a Hermitian metric on $E$, and a coefficient ring $R$ equal to $\mathbb Z$ or a field $\mathbb F_p$.

1.1 Splitting. By [F1] the flag bundle is the iterated projective-bundle tower of $E$ and its metric complements, and the tautological lines satisfy $q^*E=L_1\oplus\cdots\oplus L_n$. At each stage [F3] applies to the compact complex-projective fiber and the preceding paracompact Hausdorff CGWH CW-type base, so the next base again has all four properties required by [F2]. [F1, F3, given]

2.1 Each stage has injective structure map. Consider one stage $B_i\to B_{i-1}$ of the tower, the projective bundle of a numerable complex bundle of rank $m\geq1$ over a CW-type base. By [F2] the cohomology $H^*(B_i;R)$ is free over $H^*(B_{i-1};R)$ on the basis $1,x,\dots,x^{m-1}$; the structure homomorphism $H^*(B_{i-1};R)\to H^*(B_i;R)$ is the map $a\mapsto p^*a$, whose basis coordinates are $(a,0,\ldots,0)$, so it is injective. [F2, F4, step 1.1]

2.2 Splitting over the flag bundle is step 1.1, so the first two assertions hold. [step 1.1]

3.1 Injectivity of $q^*$. The map $q^*:H^*(B;R)\to H^*(\operatorname{Fl}(E);R)$ is the composite of the injective structure maps of the finitely many stages of step 2.1, hence injective. [step 2.1]

3.2 Finitely many bundles. Ignore the rank-zero bundles, whose pullbacks are already empty sums of lines. For each remaining bundle construct its flag tower over the original CW base $B$, where [F1] applies, and choose its metric once there. Now suppose $F_{j-1}\to B$ has been built, starting with $F_0=B$. Pull the entire original flag tower for $E^{(j)}$ back over $F_{j-1}$, and let $F_j$ be its top. Pullback of a projective stage is the projective bundle of the pulled-back vector bundle: the local identification is $(b,[v])\mapsto[b,v]$ and respects the linear transition maps. Its numeration pulls back with the original chart cover. Thus every stage is licensed by the CW-type extension [F2], without applying the CW-base definition [F1] anew on $F_{j-1}$. Inductively [F3] makes every base paracompact Hausdorff, CGWH, and of CW type. Each such stage has injective cohomology pullback by the module-basis argument of step 2.1. The original splitting is pulled back as an actual bundle isomorphism, so $E^{(j)}$ splits over $F_j$; earlier splittings persist under further pullback. Set $F$ to the final stage. Finite composition gives the required injection simultaneously for all the stated coefficients. If every rank is zero or the family is empty, set $F=B$ and use the identity map. [F1, F2, F3, F4, step 2.1]

4.1 Boundary cases. For $n=1$ the tower has no projectivization and $q$ is the identity of $B$, so $q^*$ is injective and $q^*E=L_1$ with $L_1=E$; the basis $1$ is the trivial basis. For the empty family $m=0$ the assertion is vacuous with $F=B$. The coefficient rings $\mathbb Z$ and $\mathbb F_p$ are nonzero, and the main bundle has positive rank; if an empty base is allowed, all cohomology groups are zero and the injectivity assertion is immediate. No choice beyond the inherited numerability data of [A1] is used, and only finitely many metrics on the original bundles are used, then pulled back through their towers. [A1, F1, step 3.1, step 3.2] ∎

## Source notes

Miller's Lecture 35 and May's Chapter 24 section 3 prove the splitting principle exactly in this form: the projective-bundle theorem makes each structure map an inclusion of a direct summand, and the iterated projectivization splits the bundle into lines. The integral and coefficientwise $\mathbb F_p$ injectivity are the strengthened statements the page uses for the mod-two comparison and for the uniqueness theorem; they are proved by the same projective-bundle theorem over each coefficient ring.
