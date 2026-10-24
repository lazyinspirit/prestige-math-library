---
id: "rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program"
kind: "remark"
title: "Smooth four-dimensional surgery is not covered by the high-dimensional program"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: ["lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle", "lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere", "prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class", "rem-middle-dimensional-surgery-has-an-intersection-form-obstruction"]
justified_by: []
aliases: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 7 §7.3, Theorem 7.27 and Lemma 7.28, printed pp. 138-140 (the Whitney trick assumes n1,n2>=3, or n1=2, n2>=3 with pi_1(M)=pi_1(M\\N_1); the embedded Whitney disk construction needs m>=5 and m-n>=3); Chapter 10 §10.1, printed pp. 193-194"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 4 §4.1, Remark 4.9, printed p. 85 (the condition dim M>=5 makes k>=3 and permits the embedded Whitney disk; for k=2 one gets only an immersion, which is the technical reason why surgery in dimension 4 is much more complicated)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.2, Theorem 7.2.1 with proof, printed pp. 199-200 (the inductive surgery below the middle uses that the immersed sphere class contains an embedding, which needs m>2(r-1))"
---

## Remark

Every construction on this page is stated for a supplied framed embedded sphere
and proves only what follows from that datum
([[lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle]],
[[prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class]]); the
existence statements quoted below the middle use the representation of classes
by embedded spheres and the smoothing of intersections, which need dimension
hypotheses.

In smooth dimension four the general high-dimensional Whitney argument is unavailable: an immersed Whitney disk cannot in general be replaced by a clean embedded disk disjoint from the other sheets,
so a kernel class need not be representable by a framed embedded sphere
([[lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere]])
and the middle-dimensional argument of the high-dimensional programme stops
([[rem-middle-dimensional-surgery-has-an-intersection-form-obstruction]]). The
source's dimension conditions are explicit: the Whitney trick is available when
the two complementary dimensions are at least three, or when one is two and the
other at least three with a fundamental-group condition, and the cited general embedded
Whitney disk construction is guaranteed under those hypotheses in ambient dimension at least five; the
condition $\dim M\ge5$ in the middle dimension is exactly what makes the
self-intersection criterion of the preceding remark available.

Consequently this page supplies no general smooth four-dimensional surgery existence or classification theorem based on cancelling middle-dimensional intersections. Its conditional constructions and vanishing conclusions still apply when their displayed hypotheses hold. In particular, $m=4$, $p=1$, $q=3$ satisfies $p\le q-2$, so surgery along a supplied framed embedded circle kills its represented $\pi_1$-class by the killing lemma cited above. The missing general Whitney argument concerns the existence of suitable embedded representatives and clean disks, rather than the performance of a surgery once its datum is supplied. The following Whitney-trick and h-cobordism pages retain their own dimension hypotheses. Nothing here addresses the
four-dimensional theory by other methods (the failure of a general Whitney-move guarantee in
that dimension is a technical boundary, not a claim that no theory exists).
