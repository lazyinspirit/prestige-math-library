---
id: rem-self-adjoint-extensions-and-deficiency-indices
kind: remark
title: "Self-adjoint extensions and deficiency indices: agreement pointer"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-von-neumann-self-adjoint-extension-parameterization, cor-self-adjoint-extension-exists-iff-deficiency-indices-agree, def-deficiency-subspaces-and-deficiency-indices, cex-the-minimal-derivative-is-symmetric-not-self-adjoint, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, pp.91-95"
---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The extension theorem is
proved on the companion A page of this pair:
self-adjoint extensions of a closed symmetric operator $T$ correspond
bijectively to the unitary operators $K_+\to K_-$
([[thm-von-neumann-self-adjoint-extension-parameterization]]), and such a
unitary exists exactly when the deficiency dimensions agree
([[cor-self-adjoint-extension-exists-iff-deficiency-indices-agree]],
[[def-deficiency-subspaces-and-deficiency-indices]]). The parameterization
determines the extension's domain and action, not merely the number of
extensions, and when a unitary is supplied no further choice is used to
produce the extension. Equality of deficiency dimensions by itself does not
exhibit a unitary: the Hilbert-basis input producing one is recorded on the A
page. The minimal derivative operator of
[[cex-the-minimal-derivative-is-symmetric-not-self-adjoint]] is the
one-dimensional instance: the unitaries $K_+\to K_-$ are there the scalars
$\lambda$ with $|\lambda|=\|e^{-x}\|/\|e^{x}\|=1/e$, in bijection with the
boundary parameters $\mu$ of modulus one in the conditions $f(1)=\mu f(0)$.
