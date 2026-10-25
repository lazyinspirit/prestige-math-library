---
id: thm-uniqueness-of-chern-classes-from-the-splitting-principle
kind: theorem
title: Uniqueness of Chern classes from the splitting principle
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-axiom-of-choice", "thm-naturality-normalization-and-whitney-sum-for-chern-classes", "def-chern-classes-from-the-projective-bundle-relation", "thm-complex-splitting-principle-with-integral-injective-pullback", "def-complex-flag-bundle-and-chern-roots", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "def-hurewicz-and-serre-fibrations", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology"]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 section 7"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chern-class axioms and uniqueness, printed pp.197-200"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Suppose that to every isomorphism class of numerable complex bundles $V\to C$ over a
nonempty path-connected CW complex one assigns classes
$d_i(V)\in H^{2i}(C;\mathbb Z)$ for $i\geq0$ with the following properties:

1. **Naturality:** $d_i(f^*V)=f^*d_i(V)$ for continuous maps between these bases;
2. **Normalization:** $d_0(V)=1$, $d_i(V)=0$ for $i>\operatorname{rank}V$, and
   $d_1(L)=e(L_{\mathbb R})$ for a complex line $L$;
3. **Whitney multiplicativity:** $d(V\oplus W)=d(V)d(W)$ for the total classes
   $d=\sum_i d_i$.

Then $d(V)=c(V)$ for every numerable complex bundle over a nonempty path-connected CW complex, where
$c$ is the total Chern class of
[[def-chern-classes-from-the-projective-bundle-relation]]. In particular the
assignments $c_i$ are the unique ones satisfying 1-3.

## Facts & Assumptions

**Given:** AC, the assignment $d$ satisfying properties 1–3, and a numerable complex rank-$n$ bundle $E\to B$ over a nonempty path-connected CW complex. Bundle assignments are on isomorphism classes, as is usual for characteristic classes.

[A1] AC is assumed for the splitting, Chern-class and numerable-fibration suppliers and the stated CW paracompactness fact. ([[def-axiom-of-choice]]).

[F1] On path-connected CW bases, total Chern classes are natural, normalized on lines by $c_1(L)=e(L_{\mathbb R})$, Whitney multiplicative, and have $c_0=1$, $c_i=0$ above the rank and $c(0)=1$. They depend only on the bundle isomorphism class. ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[def-chern-classes-from-the-projective-bundle-relation]]).

[F2] For positive rank on a path-connected paracompact Hausdorff CW base, the flag projection $q$ splits $q^*E$ into complex lines and gives an injective integral cohomology pullback. ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F3] The flag construction is a finite tower of numerable projective bundles with fibers $\mathbb{CP}^{m-1}$; its intermediate bases have CW type and its tautological lines are numerable. For rank one it is the identity tower. ([[def-complex-flag-bundle-and-chern-roots]], [[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

[F4] Numerable fiber bundles are Hurewicz fibrations under AC. The homotopy lifting property applies in particular to a homotopy on a one-point space, hence lifts any given path from a supplied initial point. ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]], [[def-hurewicz-and-serre-fibrations]]).

[F5] Homotopic continuous maps induce equal pullbacks in singular cohomology for every abelian coefficient group. ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F6] CW complexes are paracompact (and Hausdorff in the library convention). The paracompactness statement and complete proof are Hatcher, Vector Bundles & K-Theory, Proposition 1.20, printed pp.36–37, https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf . Thus the CW bases below satisfy the extra paracompactness hypothesis in [F2].

## Proof

**Proof technique:** direct, comparing on an actual CW model of the flag space.

1.1 Lines and rank zero. On every complex line over an allowed base, properties 2 and [F1] give $d(L)=1+e(L_{\mathbb R})=c(L)$; all terms of index at least two vanish. If $n=0$, both totals are 1 by their degree-zero and rank conventions, so the conclusion already holds. Henceforth take $n\ge1$. [F1, given]

1.2 The flag space is path-connected. The base $B$ is admissible for [F2] by [F6]. In the tower of [F3], each fiber $\mathbb{CP}^{m-1}$ is nonempty and path-connected: two distinct lines have linearly independent representatives $v,w$, and $[(1-t)v+tw]$ joins them, since that vector never vanishes; equal lines use the constant path. For a stage with path-connected base, join the images of two total-space points by a path. Lift it from the first point by [F4] and join its endpoint to the second point inside the terminal fiber. This proves that the stage total is path-connected. Finite induction proves that $F=\operatorname{Fl}(E)$ is nonempty and path-connected; rank one has $F=B$. By [F3], $F$ has CW type. No assertion that $F$ itself is a CW complex is made. [F2, F3, F4, F6, given]

2.1 Replace the base before evaluating the assignment. Choose a homotopy equivalence $h:C\to F$ from a CW complex and a homotopy inverse $k:F\to C$, as supplied by CW type in step 1.2. The complex $C$ is nonempty and path-connected. Indeed, for $x,y\in C$, join $h(x)$ to $h(y)$ in $F$ and apply $k$; the homotopy $kh\simeq\operatorname{id}_C$ joins its endpoints to $x,y$. By [F5], $h^*$ is an isomorphism in integral cohomology, inverse to $k^*$. Set $p=qh:C\to B$ and $M_j=h^*L_j$. Pulling back the actual splitting of [F2] gives $p^*E\cong\bigoplus_{j=1}^n M_j$. These bundles are numerable: pull back the locally finite partition on each original bundle chart cover; local finiteness and the identity sum are preserved by composition with $h$. Thus $d$ and [F1] both apply to the pulled-back bundles on the nonempty path-connected CW complex $C$. Also $p^*=h^*q^*$ is injective. [F1, F2, F3, F5, step 1.2, algebra]

3.1 Compare on the CW model. By property 3, isomorphism invariance, and step 1.1 applied to the lines $M_j$ over $C$, $$d(p^*E)=\prod_{j=1}^n d(M_j)=\prod_{j=1}^n c(M_j)=c(p^*E).$$ The last equality is [F1]'s Whitney identity, applied on $C$, where its hypotheses hold. This proof never evaluates $d$ on a bundle over the merely CW-type space $F$. [F1, given, step 1.1, step 2.1, algebra]

4.1 Descend. The map $p:C\to B$ has both source and target in the stated assignment domain. Naturality of $d$ and [F1] gives $p^*(d(E)-c(E))=d(p^*E)-c(p^*E)=0$. The injectivity established in step 2.1 implies $d(E)=c(E)$, degree by degree. Conversely [F1] provides the Chern assignment satisfying all three properties, so this is uniqueness together with the already supplied existence. [F1, given, step 2.1, step 3.1, algebra]

5.1 Boundaries and conventions. Rank zero was settled before making a flag bundle. In rank one, normalization in step 1.1 suffices, and the tower is the identity. The empty base is explicitly excluded; no domain extension to disconnected or non-CW bases is claimed for $d$. Terms above the rank vanish, so each total and each product is finite even when the CW complexes are infinite-dimensional. The line normalization uses the complex orientation of $L_{\mathbb R}$, not an independent sign for a projective generator. AC is inherited through [A1]; the chosen single CW equivalence and the finite tower introduce no unrecorded family of choices. [A1, F1, F3, F6, step 1.1, step 2.1, step 4.1, algebra] ∎

## Source notes

May, https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf , Chapter 23 section 2, printed pp.189–190, treats characteristic classes as natural assignments on bundle equivalence classes. Chapter 23 section 7, printed pp.198–199, states Chern-class uniqueness and describes the detection by elementary symmetric polynomials. The proof here supplies the required CW-model domain argument directly from the local splitting theorem. Its line sign is fixed by the library's Euler normalization; no independent choice of May's projective generator is imported. Hatcher Proposition 1.20, printed pp.36–37, supplies CW paracompactness.
