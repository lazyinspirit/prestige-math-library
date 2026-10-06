---
id: prop-relative-morse-complex-for-an-adapted-cobordism
kind: proposition
title: "The relative Morse complex of an adapted cobordism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-compactified-unstable-manifolds-give-a-cw-decomposition, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, lem-long-exact-sequence-of-a-triple-in-singular-homology, def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, def-mod-two-morse-chain-group, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, def-morse-smale-pair, thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, prop-deformation-lemma-for-a-critical-point-free-slab, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-regular-interval-diffeomorphism, thm-cellular-chains-compute-homology-with-local-coefficients, def-homology-and-cohomology-with-local-coefficients, def-relative-singular-homology, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-compact-space, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-the-cellular-boundary-squares-to-zero]
justified_by: []
dependency_level: 8
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.5: cobordisms, boundary-directed fields, the complex (C_*(f),partial_X) with all connections staying far from the boundary, printed pp. 78-80, PDF pp. 88-90"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.2: Morse homology for manifolds with boundary; boundary types and the complexes computing H_*(partial M), H_*(M,partial M), H_*(M), PDF pp. 88-90"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.3 (relative Morse inequalities via the handle filtration) and Sec. 2.5 (the filtration M_k = {f <= k+1/2} gives the chain complex computing H_*(M)), read at PDF pp. 56-58 and 72-74"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(W;M_0,M_1)$ be a
compact smooth cobordism triad with adapted excellent Morse function $f$ and
adapted complete downward gradient-like field $X$ pointing outward along $M_0$
and inward along $M_1$, with $(f,X)$ Morse--Smale in the sense that all
unstable/stable intersections in $\operatorname{int}W$ are transverse
([[def-smooth-cobordism-triad-for-morse-theory]],
[[def-morse-function-adapted-to-a-cobordism]],
[[def-morse-smale-pair]]). Then:

1. all critical points of $f$ are interior and finite in number
   ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]],
   [[def-nondegenerate-critical-point-nullity-index-and-coindex]]); moreover
   every $X$-trajectory joining two critical points is contained in the
   compact interior region
   $\{x\in W: f(q)\le f(x)\le f(p)\}$ determined by the endpoint values, hence
   meets neither $\partial W$ nor sufficiently small boundary collars whose
   $f$-values lie below all interior critical values at $M_0$ and above all
   interior critical values at $M_1$
   ([[prop-deformation-lemma-for-a-critical-point-free-slab]],
   [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]],
   [[thm-regular-interval-diffeomorphism]]);
2. the **relative Morse chain groups** $CM_k(f,X;\Lambda)$, free on the
   interior critical points of index $k$ over $\Lambda=\mathbb Z/2$ and
   $\Lambda=\mathbb Z$
   (with a chosen positive orientation ray at each critical point for $\Lambda=\mathbb Z$)
   ([[def-mod-two-morse-chain-group]],
   [[def-signed-morse-differential-over-the-integers]]), with the trajectory
   differentials of [[def-mod-two-morse-differential]] and
   [[def-signed-morse-differential-over-the-integers]] restricted to the
   interior trajectory moduli spaces, form chain complexes
   (by the relative cellular coefficient comparison below); their homology is
   denoted $HM_*(W,M_0;\Lambda)$ and called the **relative Morse homology** of
   the adapted data;
3. the compactified unstable manifolds of the interior critical points give the
   exact disk-attachment pair $(Z,M_0)$ of
   [[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]. Its
   stagewise cellular approximation gives a finite CW model $(X,M_0)$,
   with one relative cell per critical point. The local coefficient computation of
   [[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]]
   identifies the relative Morse complex with the cellular complex of the
   relative handle decomposition of $(W,M_0)$
   ([[def-handle-decomposition-relative-to-the-incoming-boundary]],
   [[thm-morse-functions-and-handle-decompositions-correspond]],
   [[lem-a-handle-decomposition-gives-a-relative-cw-complex]],
   [[thm-one-critical-point-handle-attachment]],
   [[cor-unstable-disk-is-the-handle-core]]); hence there is a chain
   isomorphism between the relative Morse complex and the relative handle
   (cellular) chain complex, and consequently
   $$HM_*(W,M_0;\Lambda)\cong H_*^{\mathrm{cell}}(W,M_0;\Lambda)\cong H_*(W,M_0;\Lambda),$$
   the last isomorphism being the relative cellular comparison theorem applied
   with the constant local system
   ([[thm-cellular-chains-compute-homology-with-local-coefficients]],
   [[def-homology-and-cohomology-with-local-coefficients]],
   [[def-relative-singular-homology]]).

Here the relative handle cellular complex is the CW model $(X,M_0)$
constructed by transporting and cellularly approximating the exact disk
attaching maps. Those evaluation maps need not themselves extend the incoming
CW structure. Its cellular
homology is transported to the displayed $(W,M_0)$ notation along the proved
equivalence of pairs. The original value-ordered handle stages are not asserted
to be the skeleta.

## Facts & Assumptions

**Given:** The Axiom of Choice, the adapted excellent normalized Morse--Smale triad and the two coefficient rings.

[F1] All critical points are interior and finite; boundary values zero and one lie strictly below and above their finite value range ([[def-morse-function-adapted-to-a-cobordism]], [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F2] The compactified unstable disks give the exact disk-attachment pair $(Z,M_0)\simeq(W,M_0)$. With a supplied or constructed finite CW structure on $M_0$, the supplier's Proof 9.1 constructs a CW model by cellular approximation and attachment comparison at each index stage, relative to $M_0$; its Proof 8.1 compares the exact attaching maps with value-ordered handle cores by homotopies below each critical value ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]).

[F3] The coefficient supplier's Proof 1.1–3.1 computes the local degrees of the exact disk boundary projections from first-break sheets: they are the rigid trajectory signs with the precise ordered orientations, also for interval endpoints in degree one ([[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]]). The cellular boundary squares to zero ([[lem-the-cellular-boundary-squares-to-zero]]).

[F4] Cellular chains of a CW pair with the constant local system compute ordinary relative singular homology ([[thm-cellular-chains-compute-homology-with-local-coefficients]], [[def-homology-and-cohomology-with-local-coefficients]], [[def-relative-singular-homology]]).

[F5] The connecting map of a singular-homology triple is the pair connector followed by the relative quotient map. Its cycle formula sends $[c]$ to $[\partial c]$, so it commutes with maps of triples ([[lem-long-exact-sequence-of-a-triple-in-singular-homology]]).

## Proof

**Proof technique:** direct, through the exact disk filtration and its CW comparison.

1.1 The finite critical set of [F1] gives the finite free relative Morse modules. Along a connecting orbit $f$ decreases, so its image lies in the compact interior slab between its endpoint values. Compactness of the boundary permits collars small enough that their values lie outside the entire interior critical-value range; that slab avoids these collars. The rigid counts are finite by the compact-slab argument of [F3]. This proves the confinement and finiteness assertions without using an arbitrary originally chosen collar. [F1, F3, given]

2.1 Write $Z_k$ for $M_0$ with all exact disks of index at most $k$ attached, and put $Z_j=M_0$ for $j<0$. Each disk attachment is a cofibration: its source boundary has a radial collar, which descends to the attached pair. Thus $Z_k/Z_{k-1}$ is a wedge of $k$-spheres, with the disjoint-point interpretation in degree zero, and $D_k:=H_k(Z_k,Z_{k-1};\Lambda)$ is free on the oriented critical disks. Define $d_k$ by the triple connector to $H_{k-1}(Z_{k-1},Z_{k-2};\Lambda)$, with $d_0=0$. By [F5], its coefficients are the boundary-map degrees after collapsing $M_0$, disks of index at most $k-2$ and the other $(k-1)$-disks. For $k\ge2$, the inverse image of the surviving open disk is exactly the first-break sheets $\{\gamma\}\times W^u(q)$; all exits are collapsed. The local degree computation of [F3] gives the trajectory count matrix in the stated critical rays. For $k=1$, the interval endpoints in $M_0$ vanish in the relative quotient and the remaining signed endpoints give the same count. This computes the exact filtered connector without declaring $Z$ a CW structure extending the base. [F2, F3, F5, step 1.1, construct]

3.1 Apply the stagewise construction of [F2], starting at $X_{-1}=M_0$. Transport each index-$k$ attaching map through the preceding homotopy inverse, cellularly approximate it into the ordinary $(k-1)$-skeleton and attach a $k$-disk. The attachment comparison extends the preceding equivalence to $E_k:X_k\to Z_k$, relative to $M_0$ and compatible with earlier stages. On each new disk it uses a boundary collar homotopy and preserves the oriented relative disk generator. Hence $E_k$ induces isomorphisms $H_k(X_k,X_{k-1})\cong D_k$ by the pair sequences, and [F5] makes them commute with the triple connectors. Since $X_k=M_0\cup X^{(k)}$, these are precisely the relative cellular modules and differential of [F4]. Step 2.1 therefore identifies that cellular complex with the relative Morse complex, and [F3] gives squared zero. The handle-core homotopies of [F2] identify this chosen CW model with a cellular model of the relative handle attachments; the model pair is equivalent to $(W,M_0)$. [F2, F3, F4, F5, step 2.1, construct]

4.1 Apply [F4] to the finite CW pair $(X,M_0)$ with constant local system. Its cellular homology is its relative singular homology, which the pair equivalence of step 3.1 identifies with $H_*(W,M_0;\Lambda)$. Combining this with the chain isomorphism of step 2.1 gives the displayed $HM_*(W,M_0;\Lambda)\cong H_*^{\mathrm{cell}}(W,M_0;\Lambda)\cong H_*(W,M_0;\Lambda)$. This also supplies the stated relative Morse homology notation. [F4, step 2.1, step 3.1] ∎
