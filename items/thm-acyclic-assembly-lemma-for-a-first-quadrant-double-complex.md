---
id: thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex
kind: theorem
title: Acyclic assembly lemma for a first quadrant double complex
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex, thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex, def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence, thm-the-next-page-is-the-homology-of-the-current-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-quasi-isomorphism]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Lemma 12.25.4 (homological projection variant)"
      url: https://stacks.math.columbia.edu/tag/012X
---

## Statement

Let $C$ be a first-quadrant homological double complex in an abelian category.
If $H^v_q(C_{p,*})=0$ for every $p$ and every $q>0$, put
$B_p=H^v_0(C_{p,*})$ with differential induced by $h$. The natural projection
$\rho:\operatorname{Tot}(C)\to B$, given on $C_{n,0}$ by the quotient map
and zero on other summands in degree $n$, is a quasi-isomorphism.

If instead $H^h_p(C_{*,q})=0$ for $p>0$, the analogous projection to
$(H^h_0(C_{*,q}),v)$ is a quasi-isomorphism. In particular completely acyclic
columns or completely acyclic rows imply an acyclic total complex.

## Facts & Assumptions

[F1] [[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] gives vertical-first pages and finite column convergence; [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] gives the transposed version.

[F2] [[thm-the-next-page-is-the-homology-of-the-current-page]] gives natural homology transitions; [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] gives natural graded abutment identifications.

[F3] [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]] defines the horizontal edge via the last filtration quotient and inclusion into the page-two axis.

[F4] [[def-quasi-isomorphism]] means that the given chain map induces an isomorphism in each homology degree.

## Proof

**Given:** The column homology hypothesis first, and the anticommuting convention for $C$.

1.1 Since $C_{p,-1}=0$, $B_p=C_{p,0}/\operatorname{im}(v:C_{p,1}\to C_{p,0})$. Anticommutation gives $hv=-vh$, so $h$ preserves the indicated boundary images and induces a differential on $B$; its square is induced by $h^2=0$. The prescribed $\rho$ commutes with differentials on $C_{n,0}$ by this definition. On a summand $C_{p,1}$, its only potentially surviving output under $\rho d$ is a vertical boundary and is therefore killed. On summands with $q>1$ both outputs have positive vertical degree and are killed. Hence $\rho$ is a chain map. [F1, given]

2.1 Regard $B$ as a double complex $D$ in row zero with horizontal differential that of $B$. The same formulas give a morphism $C\to D$ and a column-filtered total map equal to $\rho$. Its map on vertical $H_0$ is the identity $B_p\to B_p$, and its maps on positive vertical homology are isomorphisms $0\to0$ by hypothesis. Thus the induced map on $E^1$ is an isomorphism. Natural homology transitions imply successively that its maps on $E^r$ for all $r\ge1$ are isomorphisms. [F1, F2, step 1.1, given]

3.1 The page $E^1$ is supported on $q=0$; $E^2_{p,0}=H_p(B)$. For $r\ge2$, an outgoing differential from $(p,0)$ lands at positive second coordinate $r-1$ and an incoming source has negative second coordinate $1-r$, so both maps are zero. Thus $E^2=E^\infty$. In degree $n\ge0$ the finite homology filtration has all quotients zero except possibly the one at $p=n$. A quotient $F_p/F_{p-1}=0$ means $F_p=F_{p-1}$; starting at $F_{-1}=0$ and applying this finitely often gives $F_{n-1}=0$, while $F_n=H_n$. Consequently the sole graded piece canonically equals $H_n$, for both total complexes. [F1, step 2.1]

4.1 By naturality of the abutment, the isomorphism on that sole graded piece induced in step 2.1 is exactly $H_n(\rho)$ under these canonical identifications, rather than an unspecified isomorphism of the two homology objects. Equivalently it is the horizontal edge of the column sequence: for $D$ the edge is the identity and the edge square for $\rho$ commutes. Hence $H_n(\rho)$ is invertible. Negative-degree homologies are zero and $n=0$ uses $F_{-1}=0$, so $\rho$ is a quasi-isomorphism in all degrees. [F2, F3, F4, step 2.1, step 3.1]

5.1 Exchange the two coordinates and the arrows $h,v$. Their anticommuting sum and total complex are unchanged under summand permutation, while columns become rows. The same projection and proof give the row assertion. If columns are completely acyclic, then also $B_p=0$ for every $p$, so the first quasi-isomorphism has zero target; the row conclusion follows in the same manner. No surviving nonzero edge is asserted in these completely acyclic cases. All maps are canonical quotients and finite-filtration maps, requiring no AC. [F1, F4, step 4.1] ∎
