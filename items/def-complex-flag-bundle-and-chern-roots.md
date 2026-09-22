---
id: def-complex-flag-bundle-and-chern-roots
kind: definition
title: Complex flag bundle and Chern roots
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-projective-bundle-and-tautological-complex-line, def-chern-classes-from-the-projective-bundle-relation, thm-numerable-vector-bundles-admit-bundle-metrics, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type, def-axiom-of-choice, thm-integral-complex-projective-bundle-theorem, thm-subordinate-partitions-of-unity-exist]
axiom_strength: "ZF + AC; inherited from the bundle and metric suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 section 3"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Splitting principle by iterated projectivization, printed pp.208-210"
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Flag bundle and orthogonal splitting, printed pp.80-82"
---

## Definition

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle with $n\geq1$
over a path-connected paracompact Hausdorff CW complex, equipped with a Hermitian metric
$h$, which exists by [[thm-numerable-vector-bundles-admit-bundle-metrics]].

A **complete flag** in a fiber $E_b$ is a chain of complex subspaces
$$0=V_0\subset V_1\subset V_2\subset\cdots\subset V_n=E_b,\qquad\dim_{\mathbb C}V_i=i.$$
The **flag bundle** $q:\operatorname{Fl}(E)\to B$ is the bundle of complete
flags: its points are the pairs $(b,V_\bullet)$, topologized by the iterated
projective-bundle construction, which exhibits it as a fiber bundle with fiber
the full flag manifold $U(n)/T^n$. Concretely, put $B_0:=B$ and
$E^{(0)}:=E$. For $r=1,\dots,n-1$, let $B_r:=P(E^{(r-1)})$ with projection
$\pi_r:B_r\to B_{r-1}$, let $L_r\subseteq\pi_r^*E^{(r-1)}$ be its
tautological line, and let $E^{(r)}:=L_r^\perp$ inside
$\pi_r^*E^{(r-1)}$. Pulling the earlier $L_j$ through the later projections
and taking $L_n:=E^{(n-1)}$ gives the $n$ ordered orthogonal lines. The
composite $q:B_{n-1}\to B$ is $\operatorname{Fl}(E)$. All intermediate bases are
paracompact Hausdorff CGWH spaces of CW type by
[[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]].
At every stage use the CW-type construction established in
[[thm-integral-complex-projective-bundle-theorem]], not an assertion that
$B_r$ itself is a CW complex. The projective charts are numerated by the
partition for $E^{(r-1)}$. At every compact projective-fiber stage, the same
lemma supplies the CGWH conclusion directly from the preceding CGWH base; no
inheritance by arbitrary open subspaces is used.
The complement $E^{(r)}$ is a vector subbundle: in a local frame for the
ambient bundle the Hermitian orthogonal projection onto $L_r$ varies
continuously, and projecting a basis of its kernel at a fixed point gives
independent local sections on a neighborhood, by the nonvanishing of a
minor. They span the kernel of this constant-rank projection there.
Every such bundle is numerable, since the intermediate base is paracompact
Hausdorff and [[thm-subordinate-partitions-of-unity-exist]] supplies a
partition on its linear chart cover (AC implies DC). This proves the
hypotheses required at the next stage, by finite induction.


The $i$-th **tautological line** $L_i\to\operatorname{Fl}(E)$ is the sub-line
bundle of $q^*E$ whose fiber over a flag $V_\bullet$ is
$V_i\cap V_{i-1}^{\perp}$, the orthogonal complement of $V_{i-1}$ in $V_i$; it
is a complex line bundle. Orthogonal decomposition of each flag gives a
metric-preserving isomorphism of complex bundles
$$q^*E=L_1\oplus L_2\oplus\cdots\oplus L_n,$$
where the summands are the tautological lines. The **Chern roots** of $E$ are
the classes
$$t_i:=c_1(L_i)\in H^2(\operatorname{Fl}(E);\mathbb Z)\qquad(1\leq i\leq n),$$
defined by [[def-chern-classes-from-the-projective-bundle-relation]] after the
Chern classes themselves exist; the summands and their first Chern classes are
the data in which the splitting principle is stated.

For $n=1$ there are no projectivization steps: $\operatorname{Fl}(E)=B$,
$q$ is the identity and $L_1=E$. Rank zero is outside this definition.
