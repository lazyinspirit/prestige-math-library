---
id: lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology
kind: lemma
title: "The Thom quotient identifies relative and reduced cohomology"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-relative-singular-cochain-complex, def-singular-cochain-complex-with-coefficients, thm-excision-for-singular-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-naturality-of-the-singular-cohomology-pair-sequence, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, thm-five-lemma-for-modules, lem-interval-exponential-law-and-quotient-homotopies, lem-kification-compact-tests-and-finite-constructions]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "printed pp.199–202, relative/reduced cohomology, natural pair sequence, homotopy invariance and excision; disk/sphere specialization and empty-subspace case proved locally"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196, based disk/sphere Thom model"
---

## Statement

Let $E\to B$ be a finite-rank real vector bundle with a supplied continuous
fibre metric, and put $D=D_h(E)$, $S=S_h(E)$ and $Y=D/S$ with the based
empty-subspace convention of
[[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]]. For every
abelian coefficient group $G$ and integer $k$, the quotient map of pairs
$q:(D,S)\to(Y,\{*\})$ induces a natural isomorphism
$$q^*:\widetilde H^k(Y;G)\xrightarrow{\cong}H^k(D,S;G).$$
Here reduced cohomology is identified with cohomology relative to the supplied
basepoint. In rank zero this is the canonical isomorphism
$\widetilde H^k(B_+;G)\cong H^k(B;G)$, and an empty base gives zero groups.
The assertion holds for the ordinary based quotient and its compactly
generated version; it requires no choice beyond the supplied metric.

## Facts & Assumptions

**Given:** The metric bundle, based quotient, coefficient group and degree.

[F1] The disk/sphere model and $D/\varnothing=D_+$ are fixed by
[[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]].

[F2] Relative cochains are absolute cochains vanishing on subspace simplices
([[def-relative-singular-cochain-complex]]); absolute cochains are functions
on the singular-simplex basis with positive dual differential
([[def-singular-cochain-complex-with-coefficients]]).

[F3] The cohomology pair sequence is exact and natural for all abelian
coefficients and all integer degrees
([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]],
[[thm-naturality-of-the-singular-cohomology-pair-sequence]]).

[F4] A homotopy equivalence induces cohomology isomorphisms by
[[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]. In an exact
five-term diagram whose other four maps are isomorphisms, the middle map is
an isomorphism by [[thm-five-lemma-for-modules]], applied over $\mathbb Z$.

[F5] Excision applies when the closure of the removed subspace lies in the
interior of the relative subspace
([[thm-excision-for-singular-cohomology]]).



[F6] For any ordinary quotient map $q$, $q\times\operatorname{id}_I$ is an ordinary quotient map ([[lem-interval-exponential-law-and-quotient-homotopies]]). Thus homotopies fixing a collapsed subspace descend continuously.

[F7] Kification preserves exactly maps from compact Hausdorff domains and finite clopen decompositions ([[lem-kification-compact-tests-and-finite-constructions]]).

## Proof

**Proof technique:** direct.

1.1 For a based space $Y$, its point cochain complex with coefficients $G$ is $G\xrightarrow{0}G\xrightarrow{1}G\xrightarrow{0}\cdots$: there is one simplex in each degree, and the alternating boundary sum is zero or identity. Thus its cohomology is $G$ in degree0 and zero otherwise. Restriction $H^0(Y;G)\to H^0(\{*\};G)$ is split onto by constant degree-zero cocycles. By [F3], $H^0(Y,\{*\};G)$ is its kernel and the relative groups equal the absolute ones in positive degrees; negative groups vanish. In degree0, subtracting the constant value at the basepoint canonically identifies the quotient by constant cocycles with that kernel; in positive degrees these are the ordinary reduced groups. Thus we obtain the canonical relative-basepoint identification in every degree. [F2, F3, given, algebra]

1.2 Suppose $S\ne\varnothing$. It is closed in $D$ by continuity of the norm. The open neighbourhood $V=\{v\in D:\|v\|>1/2\}$ strongly deformation retracts onto $S$ by $v\mapsto((1-s)+s/\|v\|)v$, $0\le s\le1$. This stays in $V$, fixes $S$, and reaches the sphere. Its quotient homotopy contracts $V/S$ onto the quotient point. It is continuous after passage to the quotient because product with the compact interval preserves the quotient construction. Also $q(V)$ is open in $Y$ and is $V/S$, since $V$ is open and saturated. [F1, F6, given, construct]

2.1 Apply [F3] to the inclusion of pairs $(D,S)\to(D,V)$. The maps on $D$ are identities and those from $V$ to $S$ are cohomology isomorphisms by the retraction and [F4]. In the five-term window $H^{k-1}(D)\to H^{k-1}(V)\to H^k(D,V)\to H^k(D)\to H^k(V)$ and its $S$ analogue, [F4] therefore makes $H^k(D,V)\to H^k(D,S)$ an isomorphism. Applying the same argument to $(Y,\{*\})\to(Y,q(V))$, using the contraction in step 1.2, makes $H^k(Y,q(V))\to H^k(Y,\{*\})$ an isomorphism. The windows include their zero negative-degree groups, so no degree0 endpoint is omitted. [F3, F4, step 1.2]

2.2 If $S=\varnothing$, [F1] gives $Y=D_+$ and $q$ is the inclusion of the clopen component $D$, not an onto quotient map. Every singular simplex has connected domain and hence lies wholly in $D$ or wholly at the added point. The relative chain complex $C_*(D_+,\{*\};\mathbb Z)$ is therefore exactly $C_*(D;\mathbb Z)$, by deleting the point-simplex summand; dualizing gives an explicit cochain isomorphism induced by $q$, for arbitrary $G$. Consequently $H^k(D_+,\{*\};G)=H^k(D;G)=H^k(D,\varnothing;G)$. This proves rank zero; if $B$ is empty, $D$ is empty and $Y$ a point, so both complexes and groups are zero. [F1, F2, step 1.1, algebra]

3.1 Excision [F5] removes $S$ from $(D,V)$, since $S$ is closed and contained in open $V$, and removes the closed quotient point from $(Y,q(V))$. The resulting pairs $(D\setminus S,V\setminus S)$ and $(Y\setminus\{*\},q(V)\setminus\{*\})$ are homeomorphic under $q$. Thus their cohomology groups are isomorphic, and the two excision isomorphisms identify $q^*:H^k(Y,q(V);G)\to H^k(D,V;G)$ as an isomorphism. Combine with step 2.1 and naturality [F3] to obtain the asserted $q^*:H^k(Y,\{*\};G)\to H^k(D,S;G)$. [F3, F5, step 2.1]

4.1 In the compactly generated convention, kification leaves continuous maps from compact Hausdorff domains unchanged by its defining final topology. Singular simplices and their homotopies have such domains, so the singular chain and relative cochain complexes used above are unchanged. Hence the same isomorphisms apply. Every map in the proof is induced by the actual quotient map and commutes with maps of disk/sphere pairs and coefficient maps by [F3]; the temporary radial neighbourhood proves invertibility, not an extra choice of isomorphism. No choice of representatives, Hom-exactness assumption, global trivializing cover or base compactness was used. [F1, F2, F3, F7, step 3.1, step 2.2] ∎
