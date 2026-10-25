---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms.json
  precheck: pass
id: lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms
kind: lemma
title: "Rational homotopy comparison with one endpoint surjection implies homology comparison"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-homological-serre-spectral-sequence
  - prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - def-axiom-of-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem 4.41, printed p.376; fibration exact sequence, with the limited rational comparison proved locally from the declared Hurewicz and Serre suppliers"

---

## Statement

Assume AC. Let $f:W\to X$ be a based map of $2$-connected CW complexes and let $D\ge2$. If $\pi_i(f)\otimes\mathbb Q$ is an isomorphism for $2\le i\le D$ and a surjection for $i=D+1$, then $H_i(f;\mathbb Q)$ is an isomorphism for $0\le i\le D$.

## Facts & Assumptions

**Given:** AC; a based map $f:W\to X$ between $2$-connected CW complexes with $D\ge2$, such that $\pi_i(f)\otimes\mathbb Q$ is an isomorphism for $2\le i\le D$ and a surjection for $i=D+1$.

[F1] The mapping-path factorization gives the actual fibration $F\to E_f\to X$, with total space $E_f$ homotopy equivalent to $W$, and its exact sequence ([[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]); rationalization preserves exact sequences of abelian groups. In the segment $A\to B\to C\to D\to E$, surjectivity of $A\to B$ makes $B\to C$ zero, and injectivity of $D\to E$ makes $C\to D$ zero; together these conditions force $C=0$, by exactness ([[lem-rationalization-is-exact-and-commutes-with-singular-homology]]).

[F2] The rational first-Hurewicz-after-killing-lower-torsion-homotopy lemma identifies rational homology with rational homotopy below the first nonzero group ([[lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy]]); the homological Serre sequence of the fibration with its edge maps given by projection and fiber inclusion converges to the abutment ([[thm-homological-serre-spectral-sequence]], [[prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion]]).

[F3] The canonical inclusion $j_f:W\to E_f$ into the mapping-path total space is a homotopy equivalence and homotopy equivalences induce homology isomorphisms ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]); AC is inherited from the rationalization and rational first-Hurewicz suppliers; any weak CW approximation used there is choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $F\to E_f\to X$ be the actual mapping-path fibration. The fiber exact sequence gives $F$ path-connected and simply connected, because $\pi_1(W)=\pi_1(X)=\pi_2(X)=0$. All groups in its relevant higher exact segments are abelian. Exactness of rationalization from the rationalization lemma gives, for $2\le j\le D$, zero $\pi_j(F)\otimes\mathbb Q$: the adjacent map $\pi_{j+1}(W)\otimes\mathbb Q\to\pi_{j+1}(X)\otimes\mathbb Q$ is surjective, and $\pi_j(W)\otimes\mathbb Q\to\pi_j(X)\otimes\mathbb Q$ is injective. The endpoint $j=D$ uses precisely the stipulated surjection. [given, F1, F2]

2.1 Inductively apply the rational first-Hurewicz lemma to $F$ for $j=2,\ldots,D$. Its lower homotopy groups are torsion, so $H_j(F;\mathbb Q)=0$ in that range; $H_1(F;\mathbb Q)=0$ by simple connectivity. In the rational Serre sequence over $X$, every term with $0<b\le D$ is zero. For $a\le D$ the bottom-row term $E^2_{a,0}=H_a(X;\mathbb Q)$ has no incoming differential and no nonzero outgoing differential: each outgoing target has fiber degree $r-1\le a-1\le D-1$. There are no other nonzero stable filtration terms of total degree at most $D$. The base edge $p_*:H_i(E_f;\mathbb Q)\to H_i(X;\mathbb Q)$ is therefore an isomorphism through $D$. The inclusion $j_f:W\to E_f$ is a homotopy equivalence and $p_f j_f=f$, so the asserted isomorphism is $H_i(f;\mathbb Q)$. This proves the limited comparison locally; it does not invoke a mod-torsion Whitehead theorem. [step 1.1, F2, F3] ∎
