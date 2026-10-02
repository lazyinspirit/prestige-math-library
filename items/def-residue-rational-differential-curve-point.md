---
id: def-residue-rational-differential-curve-point
kind: definition
title: "Residue of a rational differential at a separable closed point"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - cor-complete-separated-adic-pair-henselian
  - cor-factor-hensel-implies-simple-root-hensel
  - def-adic-completion-of-a-module
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-field-norm-and-trace
  - def-formal-laurent-series-and-residue
  - def-perfect-field
  - def-separable-elements-and-separable-extensions
  - lem-parameter-power-series-map-injective-by-dimension
  - lem-parameter-power-series-subring-makes-ring-finite
  - lem-uniformizer-differential-is-a-basis
  - thm-complete-nakayama-lemma
  - thm-completion-of-a-noetherian-local-ring
  - thm-completion-preserves-regular-local-rings
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-local-ring-smooth-curve-dvr
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - thm-primitive-element-theorem-for-finite-separable-extensions
justified_by:
  - lem-residue-independent-uniformizer
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice as inherited from the differential, completion,
Hensel and power-series suppliers ([[def-axiom-of-choice]]). Let $k$ be a
field, let $C$ be a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]), let $p\in C$ be a closed point whose
residue field $\kappa(p)$ is finite separable over $k$
([[def-separable-elements-and-separable-extensions]]), and write
$K=k(C)$ for the function field of $C$. Put
$A=\mathcal O_{C,p}$, a Noetherian discrete valuation ring
([[thm-local-ring-smooth-curve-dvr]]), and let
$\widehat A=\widehat{\mathcal O}_{C,p}$ be its maximal-adic completion
([[def-adic-completion-of-a-module]],
[[thm-completion-of-a-noetherian-local-ring]]).

**The coefficient field.** Since $\kappa(p)/k$ is finite separable it is simple
([[thm-primitive-element-theorem-for-finite-separable-extensions]]), so choose
$\alpha\in\kappa(p)$ with $\kappa(p)=k(\alpha)$, and let $P\in k[X]$ be its
monic minimal polynomial, which is separable; thus $P'(\alpha)\ne0$
([[thm-evaluation-kernel-and-minimal-polynomial]],
[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]). The completion
$\widehat A$ is a complete Noetherian local ring with residue field
$\kappa(p)$ ([[thm-completion-of-a-noetherian-local-ring]]) and is regular
(hence a domain) because $A$ is regular
([[thm-completion-preserves-regular-local-rings]]); being complete and
separated in the maximal-adic topology, it is a Henselian pair
([[cor-complete-separated-adic-pair-henselian]]). View $P$ in
$\widehat A[X]$ through $k\to\widehat A$: its reduction to $\kappa(p)[X]$ is
$P$, and $\alpha$ is a simple root, so Hensel's lemma lifts $\alpha$ to a
unique root $\widehat\alpha\in\widehat A$ of $P$
([[cor-factor-hensel-implies-simple-root-hensel]]). The $k$-algebra map
$$\iota:\kappa(p)=k(\alpha)\longrightarrow\widehat A,\qquad\alpha\longmapsto\widehat\alpha,$$
is therefore well defined, and it is a section of the residue map
$\widehat A\to\kappa(p)$ because $\widehat\alpha$ reduces to $\alpha$; it is
the unique such section, since any section must send $\alpha$ to a root of $P$
lifting $\alpha$ and the lift is unique. This is the $k$-compatible coefficient
field $\kappa(p)\hookrightarrow\widehat{\mathcal O}_{C,p}$ of the statement.

**Uniformizers and the identification with $\kappa(p)[\![t]\!]$.** Let $t$ be a
uniformizer of $A$, so that the maximal ideal of $A$ is $(t)$ and the same
element generates the maximal ideal $\mathfrak m\widehat A$ of $\widehat A$
([[thm-local-ring-smooth-curve-dvr]],
[[thm-completion-of-a-noetherian-local-ring]]). Then $\widehat A$ is a
complete equicharacteristic Noetherian local domain of dimension one,
equicharacteristic with coefficient field $\kappa(p)\subseteq\widehat A$ via
$\iota$, and $t$ is a system of parameters. The continuous map
$$\varphi:\kappa(p)[\![T]\!]\longrightarrow\widehat A,\qquad T\longmapsto t,$$
is injective ([[lem-parameter-power-series-map-injective-by-dimension]]) and
makes $\widehat A$ finite over its image
([[lem-parameter-power-series-subring-makes-ring-finite]]); since
$\widehat A/t\widehat A=\kappa(p)$ is generated over the image and $\widehat A$
is complete, Nakayama's lemma gives that $\varphi$ is surjective
([[thm-complete-nakayama-lemma]]). Hence $\varphi$ is an isomorphism
$$\widehat{\mathcal O}_{C,p}\cong\kappa(p)[\![t]\!],$$ and this isomorphism is
compatible with $\iota$ and sends $T$ to $t$. The dependence on the two
auxiliary choices is addressed in the independence statement below.

**The residue.** Let $\omega\in\Omega^1_{K/k}$ be a rational differential. By
[[lem-uniformizer-differential-is-a-basis]] the differential
$\mathrm dt$ is a $K$-basis of $\Omega^1_{K/k}$, so there is a unique
$a\in K$ with $\omega=a\,\mathrm dt$. Since $K=\operatorname{Frac}(A)$ embeds
in $\operatorname{Frac}(\widehat A)=\kappa(p)((t))$, the element $a$ has a
formal Laurent expansion $a=\sum_{n\ge N}a_nt^n$ with all
$a_n\in\kappa(p)$ ([[def-formal-laurent-series-and-residue]]), and its
$-1$-coefficient $a_{-1}=\operatorname{res}_t(a)$ is defined. Define the
**residue of $\omega$ at $p$** by
$$\operatorname{res}_p(\omega):=\operatorname{Tr}_{\kappa(p)/k}(a_{-1})\in k,$$
the field trace of the coefficient of $t^{-1}$
([[def-field-norm-and-trace]]). The value does not depend on the choice of
uniformizer $t$: if $s$ is another uniformizer and $\omega=b\,\mathrm ds$
with $b\in K$, then the formal residues of the two Laurent series are related
by the change-of-uniformizer formula, and the coefficient traces agree
([[lem-residue-independent-uniformizer]]). Consequently the assignment
$(\omega,p)\mapsto\operatorname{res}_p(\omega)$ is well defined on
$\Omega^1_{K/k}$ at every closed point $p$ with $\kappa(p)$ finite separable
over $k$; it is $k$-linear because the trace is $k$-linear
([[def-field-norm-and-trace]]).

**Perfect fields.** If $k$ is perfect, then every algebraic extension of $k$
is separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]],
[[def-perfect-field]]), so $\kappa(p)$ is finite separable over $k$ at every
closed point $p$ and $\operatorname{res}_p$ is defined everywhere. Over an
imperfect field no coefficient-trace formula is asserted here at a closed
point with inseparable residue field.
