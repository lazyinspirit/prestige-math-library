---
id: fs-a-plain-dynkin-diagram-classifies-real-forms
kind: false-statement
title: A plain dynkin diagram classifies real forms
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-real-forms-by-vogan-diagrams, def-axiom-of-choice, prop-classical-types-correspond-to-sl-so-and-sp, def-classical-complex-matrix-lie-algebras, def-special-linear-lie-algebra-sl-two, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-real-cartan-subalgebras-need-not-be-conjugate, def-vogan-diagram, def-satake-diagram, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §8, Vogan diagrams and the example of sl(2,R) and su(2), printed pp. 397-399; §10, the classification Theorem 6.105, printed pp. 421-422"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §40.2, the Vogan diagram of a real form, printed pp. 187-188"
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. False: the plain Dynkin diagram of the complexification classifies the real
forms of a complex semisimple Lie algebra, so that no additional decoration is
needed.

## Facts & Assumptions

**Given:** The Axiom of Choice; the complex simple Lie algebra $\mathfrak{sl}_2(\mathbb C)$ with its real forms $\mathfrak{su}(2)=\{X:X^{*}=-X\}$ and $\mathfrak{sl}_2(\mathbb R)$, and the Dynkin diagram conventions of [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]].

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is the hypothesis required by the Vogan-classification interface in [L4].

[L1] $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are real forms of $\mathfrak{sl}_2(\mathbb C)$: the unitary algebra is the fixed locus of the conjugate-linear involution $X\mapsto-X^{*}$, and the real basis $h,e,f$ of $\mathfrak{sl}_2(\mathbb R)$ is a complex basis of $\mathfrak{sl}_2(\mathbb C)$ ([[prop-real-cartan-subalgebras-need-not-be-conjugate]], [[def-special-linear-lie-algebra-sl-two]], [[def-classical-complex-matrix-lie-algebras]]).

[L2] The Killing form of $\mathfrak{sl}_2(\mathbb C)$ restricts to a negative definite form on $\mathfrak{su}(2)$ and takes the value $B(h,h)=8>0$ on the nonzero element $h=\operatorname{diag}(1,-1)\in\mathfrak{sl}_2(\mathbb R)$, so the two real forms are not isomorphic: an isomorphism preserves the Killing form, since $\operatorname{ad}_{\varphi X}=\varphi\operatorname{ad}_X\varphi^{-1}$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-real-cartan-subalgebras-need-not-be-conjugate]]).

[L3] The complex simple Lie algebra $\mathfrak{sl}_2(\mathbb C)$ has Dynkin diagram $A_1$, the single-vertex diagram with no edges, and the Dynkin diagram is determined by the Cartan matrix of the root system of the complexification ([[prop-classical-types-correspond-to-sl-so-and-sp]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L4] The extra data beyond the plain Dynkin diagram that classify real forms are recorded by the Vogan diagram of a maximally compact Cartan subalgebra — the induced involution of the simple roots together with the painting of the fixed vertices — and equivalently by the Satake diagram of a maximally split Cartan subalgebra with its colouring and arrow pairing ([[def-vogan-diagram]], [[def-satake-diagram]], [[thm-classification-of-real-forms-by-vogan-diagrams]]).

## Refutation

**Proof technique:** counterexample.

1.1 The two real Lie algebras $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are real forms of the same complex Lie algebra $\mathfrak{sl}_2(\mathbb C)$ by [L1], and they are not isomorphic by [L2], the numerical obstruction being the sign of the Killing form at a nonzero element together with its negative definiteness on the compact form. [L1, L2]

2.1 The complexification of each of them is $\mathfrak{sl}_2(\mathbb C)$, which is complex simple with Dynkin diagram $A_1$ by [L3]; consequently both real forms have the same plain Dynkin diagram of the complexification, namely one vertex and no edge. [L3, step 1.1]

3.1 If the plain Dynkin diagram of the complexification classified real forms, then the two real forms of step 1.1 — which share the diagram $A_1$ — would be isomorphic; they are not, by [L2]. Hence the plain diagram does not classify real forms, and the passage from the diagram to a real form requires the additional data recalled in [L4]: for $\mathfrak{sl}_2(\mathbb C)$ the single vertex is painted for one of the two forms and unpainted for the other, which is exactly the distinction between $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$. [A1, L2, L4, step 1.1, step 2.1]

4.1 Therefore two non-isomorphic real forms of a complex semisimple Lie algebra can have the same plain Dynkin diagram of the complexification, and the statement that a plain Dynkin diagram classifies real forms is false. [step 2.1, step 3.1] ∎
