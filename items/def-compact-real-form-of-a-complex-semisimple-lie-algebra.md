---
id: def-compact-real-form-of-a-complex-semisimple-lie-algebra
kind: definition
title: Compact real form of a complex semisimple Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-form-of-a-complex-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, printed pp. 348-353"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.4, printed pp. 203-204"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with
Killing form $B$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]). A
**compact real form** of $\mathfrak g$ is a real form $\mathfrak g_0$ of
$\mathfrak g$ ([[def-real-form-of-a-complex-lie-algebra]]) whose Killing form
$B_{\mathfrak g_0}=B|_{\mathfrak g_0\times\mathfrak g_0}$ is **negative
definite**, that is $B(X,X)<0$ for every nonzero $X\in\mathfrak g_0$ and
$B(X,X)=0$ if and only if $X=0$. A real Lie algebra is called **compact** when
its Killing form is negative definite; under this terminology the compact real
forms are exactly the real forms that are compact as real Lie algebras. The
existence and conjugacy of compact real forms are the content of
[[thm-existence-of-a-compact-real-form]] and
[[thm-conjugacy-of-compact-real-forms]].
