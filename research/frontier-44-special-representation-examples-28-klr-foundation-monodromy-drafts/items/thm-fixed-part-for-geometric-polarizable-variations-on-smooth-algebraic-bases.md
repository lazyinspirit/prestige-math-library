---
id: thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases
kind: theorem
title: "The fixed part of a geometric Hodge variation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-geometric-polarizable-hodge-variation, thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures, lem-hard-lefschetz-splits-a-bounded-t-structure-complex, thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz, lem-algebraic-open-inclusion-surjects-on-fundamental-groups, lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations, lem-morphisms-of-mixed-hodge-structures-are-strict, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. Let $H$ be a geometric polarizable rational Hodge variation on a connected smooth quasiprojective complex variety $S$. For each base point $s$, the monodromy-invariant space $H_s^{\pi_1(S,s)}$ is a Hodge substructure of $H_s$, and parallel transport identifies these spaces as one constant Hodge structure. Equivalently, the Hodge components of every global flat section are global flat sections. For $H=R^m f_*\mathbb Q$ with $f:X\to S$ smooth projective and a smooth projective compactification $\overline X$ of $X$, the image of $H^m(\overline X,\mathbb Q)\to H^m(X_s,\mathbb Q)$ is exactly the invariant space.

## Facts & Assumptions

**Given:** Geometric variations as in [[def-geometric-polarizable-hodge-variation]], under AC [[def-axiom-of-choice]].

[F1] Smooth-projective families give the local systems, integral lattices, continuous Hodge filtrations and flat Lefschetz classes, with rational pullbacks that are fiberwise Hodge morphisms ([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]). Fiberwise hard Lefschetz is [[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]].

[F2] Hard Lefschetz in the ordinary bounded cohomological t-structure gives $Rf_*\mathbb Q\simeq\bigoplus_mR^m f_*\mathbb Q[-m]$ ([[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]]); this is applied to the ordinary t-structure, independently of any perverse decomposition theorem.

[F3] Logarithmic weights give $W_mH^m(X)=\operatorname{im}(H^m(\overline X)\to H^m(X))$, while $H^m(X_s)$ is pure of weight $m$ and restriction is a mixed Hodge morphism ([[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]). Strictness is [[lem-morphisms-of-mixed-hodge-structures-are-strict]].

[F4] A nonempty algebraic open $U\subset S$ has surjective $\pi_1(U)\to\pi_1(S)$ ([[lem-algebraic-open-inclusion-surjects-on-fundamental-groups]]).

## Proof

1.1 First let $H=R^mf_*\mathbb Q$. Partition $X$ into its finitely many open-and-closed relative-dimension strata and work componentwise; their cohomology local systems and edge maps form finite direct sums, so it suffices to treat one pure relative dimension. A relatively ample line bundle gives a morphism $Rf_*\mathbb Q\to Rf_*\mathbb Q[2]$, with Tate shift ignored for the underlying rational sheaf. Its fiber maps are cup product by the ample class, so hard Lefschetz on every fiber gives isomorphisms of the corresponding cohomology sheaves. Shift by the relative dimension to obtain the centered hard Lefschetz hypothesis of [F2]. Thus the ordinary Leray spectral sequence degenerates and its edge map $H^m(X,\mathbb Q)\to H^0(S,R^mf_*\mathbb Q)$ is surjective. Evaluation at $s$ identifies the latter space with $H_s^{\pi_1(S,s)}$, and is injective. [F1, F2, given, algebra]

2.1 Restriction $H^m(X)\to H^m(X_s)$ has pure weight-$m$ target. By [F3] and strictness its image equals the image of $W_mH^m(X)$, hence equals the image of $H^m(\overline X)$. Step 1.1 identifies the same image with the invariant space. Since $\overline X$ and $X_s$ are smooth projective, this restriction is a pure Hodge morphism and its image is a Hodge substructure. [F3, step 1.1, algebra]

3.1 The induced structure on $H^0(S,H)$ is independent of $s$. Restriction from $H^m(\overline X)$ to each fiber is a Hodge morphism; its kernel equals the kernel of the edge map followed by injective evaluation and so is independent of $s$. Its quotient Hodge structure therefore gives one fixed structure on $H^0(S,H)$, identified by every evaluation with the induced structure from the fiber. Tate twists and finite sums preserve this conclusion. [step 1.1, step 2.1, algebra]

4.1 On a dense realization open $U$, a flat Hodge idempotent sends the fixed Hodge structure of the ambient sum to a fixed Hodge substructure, proving the claim for $H|_U$. By [F4] its global flat sections are exactly those of $H$ on $S$. For any such section, each Hodge component is flat on $U$ by the established assertion. On a small simply connected ball in $S$ the section and its Hodge components are continuous; each component agrees on the dense intersection with $U$ with a constant vector in a flat trivialization, so it agrees on the whole ball with that vector. Thus each Hodge component is flat everywhere and the induced constant structure extends over $S$. This proves the geometric statement without a theorem about arbitrary analytic variations on a punctured disc. [F4, step 3.1, construct] ∎
## Remarks

The family construction [F1] and algebraic-open topology [F4] are explicitly new typed suppliers. The proof above is complete relative to their exact clauses and the logarithmic theorem; it does not import an analytic fixed-part theorem or arithmetic purity.
