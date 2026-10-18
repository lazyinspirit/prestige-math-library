---
id: lem-volume-chirality-and-clifford-hopf-clutching
kind: lemma
title: "Volume chirality and Clifford–Hopf clutching"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps: [def-real-graded-clifford-module-bundles-and-groups, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-oriented-real-vector-bundle-and-oriented-frame-bundle, lem-clifford-polarized-relations, thm-vector-bundles-glued-from-transition-cocycles]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

Let $V\to X$ be an oriented Euclidean real vector bundle of rank $n=4m>0$ and let $\Lambda$ be a real ungraded $C(V)$-module bundle, where $C(V)=\mathrm{Cl}(V,-\langle\cdot,\cdot\rangle)$. In an oriented orthonormal frame $(e_1,\ldots,e_n)$ set $\omega=c(e_1)\cdots c(e_n)$. Then $\omega$ is frame-independent, has square $1$, and its eigenspaces $\Lambda^+$ and $\Lambda^-$ are subbundles interchanged by multiplication by every unit vector $v$. Gluing the pullbacks of $\Lambda^+$ and $\Lambda^-$ over the two disk halves of $S(\mathbb R\oplus V)$ by $c(v):\Lambda^+\to\Lambda^-$ along $S(V)$ defines the associated Clifford–Hopf clutching bundle. If $\Lambda$ is additionally a graded module, $\omega$ preserves its parity and the eigenbundles are graded. Its relative clutching triple is $(\Lambda^+,c(v),\Lambda^-)$; the volume eigensplitting is distinct from both the module parity grading and the canonical word-length grading $C(V)=C(V)^0\oplus C(V)^1$ on the regular algebra.

## Facts & Assumptions
**Given:** An oriented rank-$4m$ Euclidean bundle $V\to X$, a real ungraded module bundle $\Lambda$, and the negative-square convention $c(v)^2=-\lVert v\rVert^2I$.

[F1] A real ungraded module bundle has a continuous fiberwise unital action satisfying $c(v)^2=-\lVert v\rVert^2I$ ([[def-real-graded-clifford-module-bundles-and-groups]]).

[F2] Orthogonal vectors anticommute under the polarized Clifford relation ([[lem-clifford-polarized-relations]]).

[F3] $D(V)$, $S(V)$, and $S(\mathbb R\oplus V)$ use the metric disk/sphere conventions ([[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]]).

[F4] Continuous transition maps satisfying the cocycle identities glue local product bundles to a vector bundle ([[thm-vector-bundles-glued-from-transition-cocycles]]).

## Proof

**Proof technique:** oriented volume algebra and continuous idempotents.

1.1 In an oriented orthonormal frame the generators anticommute and each has square $-1$. Reversing the product order takes $n(n-1)/2=2m(4m-1)$ swaps, an even number; multiplying the $n$ generator squares contributes $(-1)^{4m}=1$. Thus $\omega^2=1$. For any orthonormal frame, pairwise anticommutation makes the product equal to the alternating product $\operatorname{Alt}(v_1,\ldots,v_n)=\frac1{n!}\sum_\sigma\operatorname{sgn}(\sigma)c(v_{\sigma(1)})\cdots c(v_{\sigma(n)})$. This is an alternating multilinear function of the frame vectors. An oriented orthogonal change has determinant $+1$, so it leaves this top alternating product unchanged. Hence $\omega$ is frame-independent and, in local frames, varies continuously. [given, F2, algebra]


2.1 Moving any unit vector $v$ past the other $n-1$ orthogonal generators gives $\omega c(v)=(-1)^{n-1}c(v)\omega=-c(v)\omega$. If the module also has a parity grading, $\omega$ has even parity because $n$ is even, so it preserves $\Lambda^0$ and $\Lambda^1$. The continuous maps $p_\pm=(I\pm\omega)/2$ are idempotents with $p_+p_-=0$ and $p_++p_-=I$. In any local frame their matrix entries vary continuously, and the trace of an idempotent equals its rank, so each image rank is locally constant. At a point choose a basis of the image; applying $p_\pm$ to the same frame vectors remains independent on a neighborhood and spans the image there. Thus their images are complementary subbundles (graded when a parity grading is supplied). The anticommutation identity makes $c(v)$ interchange their images, and $c(v)^{-1}=-c(v)$ for $\lVert v\rVert=1$, so the interchange is an isomorphism. [given, F1, F2, step 1.1, algebra]


3.1 Pull the two eigenbundles back to the two closed disk halves of $S(\mathbb R\oplus V)$. Thicken the halves slightly so their overlap is an equatorial collar; radial projection in each fiber identifies that collar continuously with $S(V)$, so extend the transition $c(v)$ constantly along the radial coordinate. The opposite transition is $-c(v)$, its inverse, and the two-chart cocycle is therefore satisfied. The quotient gluing theorem [F4] gives a vector bundle, and its relative disk/sphere triple is exactly $(\Lambda^+,c(v),\Lambda^-)$. The volume eigenspaces are defined by $\omega$, whereas an additional parity grading is the grading operator in [F1]; these are distinct constructions, and no identification between them is assumed. [F1, F3, F4, step 2.1, construct] ∎
