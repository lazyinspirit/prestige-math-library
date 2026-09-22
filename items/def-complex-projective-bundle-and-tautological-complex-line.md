---
id: def-complex-projective-bundle-and-tautological-complex-line
kind: definition
title: Complex projective bundle and tautological complex line
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-topological-vector-bundle, def-euler-class-by-zero-section-pullback-of-the-thom-class, def-stiefel-space-grassmannian-and-tautological-bundle, def-axiom-of-choice, lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type, thm-subordinate-partitions-of-unity-exist, def-oriented-real-vector-bundle-and-oriented-frame-bundle]
axiom_strength: "ZF + AC; inherited from the bundle and Thom suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Rolf Schon, Fibrations Over a CWh-Base, Theorem 2"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf
      locator: "pp.165–166, total-space CW type"
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Projective bundles and the class x, printed pp.77-82"
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 34-35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Projective-bundle construction and fiber generator, printed pp.123-132"
verification:
  audited: 2026-09-22
---

## Definition

Assume AC. Let $E\to B$ be a numerable complex vector bundle of rank $n\geq1$
over a paracompact Hausdorff CW complex $B$, with zero section $0_B$ and total space $E$. Its
**projective bundle** is the quotient
$$P(E):=(E\setminus 0_B(B))/\mathbb C^\times,$$
where $\lambda\in\mathbb C^\times$ acts fiberwise by $v\mapsto\lambda v$; write
$[\ell]$ for the class of a nonzero vector. The projection
$p:P(E)\to B$, $p([v])=\pi(v)$, is well defined because scaling preserves the
base point.

$P(E)$ is a fiber bundle over $B$ with fiber $\mathbb{CP}^{n-1}$: over a
complex linear chart $U\times\mathbb C^n$ of $E$ the quotient is
$U\times\mathbb{CP}^{n-1}$. On an overlap, the transition matrix
$g_{UV}(b)\in\operatorname{GL}_n(\mathbb C)$ induces
$(b,[v])\mapsto(b,[g_{UV}(b)v])$; this is a homeomorphism with inverse induced
by $g_{VU}$, depends continuously on $b$, and the cocycle identities descend
unchanged to projective classes. These quotient charts therefore form a
fiber-bundle atlas with fiber $\mathbb{CP}^{n-1}$. Under the identification
$\mathbb{CP}^{n-1}=\operatorname{Gr}_1(\mathbb C^n)$ supplied by
[[def-stiefel-space-grassmannian-and-tautological-bundle]], a point of the
fiber over $b\in B$ is a complex line $\ell\subseteq E_b$.

The **tautological complex line** $\gamma_E\subseteq p^*E$ is the subbundle
whose fiber over $\ell\subseteq E_b$ is $\ell$ itself, with the complex
structure induced from $E$; its transition functions are the projectivized
linear maps restricted to the selected line, so it is a complex line bundle
over $P(E)$.

Here is the base and orientation justification needed to define its Euler
class. The numeration for $E$ also numerates the displayed projective charts.
The CW complex $B$ is CGWH. The fiber $\mathbb{CP}^{n-1}$ is compact Hausdorff and a finite CW complex
(with one cell in dimensions $0,2,\ldots,2n-2$). Thus
[[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]
applies and makes $P(E)$ paracompact Hausdorff, CGWH, and of CW type. The tautological
line is locally trivial: in a projective coordinate chart $v_j\ne0$, choose
the unique representative with $v_j=1$ and write each vector on the line as
its scalar multiple. These charts, combined with the charts of $E$, give
linear trivializations. Under AC (hence DC),
[[thm-subordinate-partitions-of-unity-exist]] numerates their open cover.

Orient the underlying real line bundle by the frame $(v,iv)$ in each such
complex trivialization. Changing $v$ to $(a+ib)v$ has real matrix
$\begin{pmatrix}a&-b\\b&a\end{pmatrix}$, of determinant $a^2+b^2>0$.
Hence these orientations agree on overlaps by
[[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]. This direct
rank-one construction uses no CW structure on $P(E)$ itself. The resulting
numerable oriented real rank-two bundle is in the general Thom scope, so
[[def-euler-class-by-zero-section-pullback-of-the-thom-class]] defines
$$x=x_E:=e\bigl((\gamma_E)_{\mathbb R}\bigr)\in H^2(P(E);\mathbb Z).$$
Defining $x$ by the Euler class of the tautological line avoids any circular use
of Chern classes, which are introduced only afterwards on this page. For the
zero bundle of rank $0$ we set $P(0_B):=\varnothing$, and $x$ is not defined
there; for a line bundle $L$ the map $P(L)\to B$ is a homeomorphism over $B$
and $\gamma_L$ corresponds to $L$ under it.
