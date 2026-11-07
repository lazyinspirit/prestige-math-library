---
id: def-descent-set-and-selmer-set
kind: definition
title: "Descent set and Selmer set for torsors under a group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-global-field
  - def-abelian-variety-over-a-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-adelic-points-of-variety-over-global-field
  - def-nonabelian-fppf-h1-as-torsors
  - def-n-selmer-group-of-abelian-variety
  - def-separated-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
  - def-group-scheme-over-a-field
  - def-smooth-morphism-schemes
  - def-affine-morphism-schemes
  - def-twist-of-torsor-by-field-torsor-class
  - def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
  - thm-fppf-kummer-exact-sequence-for-abelian-variety
  - cor-global-kummer-exact-sequence-for-abelian-variety
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §§8.4.1–8.4.7 and 8.5.2"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Torsor evaluation, Selmer sets, descent sets, and the étale–Brauer set."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §§2.2–2.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Torsors, descent, and Brauer–Manin comparison."
verification: {}
---

## Definition

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice
(AC$_\omega$), as in the place, completion, Kummer, and adelic conventions.
Let $K$ be a global field and let $X$ be a separated
finite-type $K$-scheme, with its places and completions. Let $G$ be a group
scheme of finite type over $K$
whose structure morphism is smooth and affine, and let $f:Z\to X$ be a right
$G$-torsor. For $P\in X(K)$, the fiber
$Z_P\to\operatorname{Spec}K$ is a $G$-torsor; write
$\operatorname{ev}_{f,K}(P)=[Z_P]\in H^1(K,G)$ for its isomorphism class,
and define $\operatorname{ev}_{f,v}:X(K_v)\to H^1(K_v,G)$ in the same way.
The **Selmer set of $f$** is
$$\operatorname{Sel}_f(K,G):=\{\tau\in H^1(K,G):
\operatorname{res}_v(\tau)\in\operatorname{im}(\operatorname{ev}_{f,v})
\text{ for every place }v\}.$$
For $\tau\in H^1(K,G)$, let $T_\tau$ be a representing right $G$-torsor,
let $G^\tau$ be its inner form, and let
$f^\tau:Z^\tau=Z\times^{G_X}(T_\tau^{-1})_X\to X$ be the contracted-product
twist with its right $G^\tau_X$-action. The **descent set** is
$$X(\mathbb A_K)^{\mathrm{desc}}:=
\bigcap_{G,f}\ \bigcup_{\tau\in\operatorname{Sel}_f(K,G)}
f^\tau\bigl(Z^\tau(\mathbb A_K)\bigr),$$
where the intersection ranges over isomorphism classes of smooth affine
algebraic $K$-groups $G$ and represented $G$-torsors $f:Z\to X$.
Equivalently, this is the subset of $X(\mathbb A_K)$ whose elements $x$
satisfy the following intrinsic condition: for EVERY such represented pair
$(G,f)$ there exist a represented right $G$-torsor $T/K$ with
$[T]\in\operatorname{Sel}_f(K,G)$ and an actual adelic point
$z\in Z^T(\mathbb A_K)$ such that $f^T(z)=x$. Here $Z^T$ denotes the
represented twist supplied by [[def-twist-of-torsor-by-field-torsor-class]].
The quantifiers range over all representatives, so no simultaneous choice
of a representative for each isomorphism class is part of the definition.
The intrinsic condition is a predicate on the SET $X(\mathbb A_K)$;
Separation therefore defines a set even without first collecting a set of
all group/torsor presentations. The intersection/union notation above is
shorthand for this predicate. It retains the ACTUAL adelic image of each
twist: existence of local points separately at every place is not silently
substituted for existence of an adelic point of the twist. For the
finite-flat Kummer torsor $[n]:A\to A$ of an abelian variety, its local fiber
classes are the Kummer boundary maps, so their local-image condition is the
usual condition defining $\operatorname{Sel}_n(A/K)$ for every $n\ge2$. This
finite-flat condition is one of the smooth-group conditions above only when
$A[n]$ is smooth; in characteristic dividing $n$ it is a separate Kummer
condition and is not thereby included in the displayed intersection.

## Definition references

[[def-global-field|Global field]]

[[def-abelian-variety-over-a-field|Abelian varieties over a field]]

[[def-place-of-a-global-field|Places of a global field]]

[[def-completion-of-a-global-field-at-a-place|Completions]]

[[def-adelic-points-of-variety-over-global-field|Adelic points]]

[[def-nonabelian-fppf-h1-as-torsors|Nonabelian torsor classes]]

[[def-n-selmer-group-of-abelian-variety|Abelian-variety Selmer groups]]

[[def-separated-scheme-over-base|Separated schemes]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-group-scheme-over-a-field|Group schemes over a field]]

[[def-smooth-morphism-schemes|Smooth morphisms]]

[[def-affine-morphism-schemes|Affine morphisms]]

[[def-twist-of-torsor-by-field-torsor-class|Twisting a torsor by a field class]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[[def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme|Finite-flat $n$-torsion]]

[[thm-fppf-kummer-exact-sequence-for-abelian-variety|Fppf Kummer sequence]]

[[cor-global-kummer-exact-sequence-for-abelian-variety|Kummer boundary torsors]]

[Poonen, §§8.4.1–8.4.7 and 8.5.2](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §§2.2–2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, DC, and AC$_\omega$, a global field $K$, its places $v$ and
completions $K_v$, a
separated finite-type $K$-scheme $X$, a smooth affine $K$-group $G$, and a
$G$-torsor $f:Z\to X$, together with AC and AC$_\omega$.

[A1] AC and AC$_\omega$ supply the current place, completion, and
restricted-product conventions; DC is required by the Kummer convention.
[[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

[F1] A point $P\in X(K)$ pulls a torsor back to its fiber over $P$, a
$G$-torsor over $K$; the same holds over every completion. The torsor class
set is $H^1$ as defined by the current nonabelian torsor convention.
[[def-nonabelian-fppf-h1-as-torsors]]

[F2] Localization of torsor classes is pullback along
$\operatorname{Spec}K_v\to\operatorname{Spec}K$.
[[def-place-of-a-global-field]]
[[def-completion-of-a-global-field-at-a-place]]

[F3] The fppf Kummer sequence is used under AC and DC to define the local
boundary images. [[thm-fppf-kummer-exact-sequence-for-abelian-variety]]

[F4] A smooth affine algebraic group is a finite-type group scheme over $K$
whose structure morphism is smooth and affine.
[[def-group-scheme-over-a-field]]
[[def-smooth-morphism-schemes]]
[[def-affine-morphism-schemes]]

[F5] Replacing a torsor representative of $\tau$ by an isomorphic torsor
gives an isomorphic contracted-product twist.
[[def-twist-of-torsor-by-field-torsor-class]]

[F6] For any field $L$ and abelian variety $A_L/L$, the fiber of
$[n]:A_L\to A_L$ above $P\in A_L(L)$ is the $A_L[n]$-torsor representing
the Kummer boundary class; applying this statement to $L=K_v$ gives every
local evaluation in the Definition.
[[thm-fppf-kummer-exact-sequence-for-abelian-variety]]
[[cor-global-kummer-exact-sequence-for-abelian-variety]]

[F7] The usual Kummer Selmer group is defined by requiring each localization
to lie in the image of the corresponding local boundary map, including when
$\operatorname{char}K$ divides $n$.
[[def-n-selmer-group-of-abelian-variety]]

[F8] An abelian variety is a proper geometrically connected group variety;
$A[n]$ is its scheme-theoretic kernel and may be nonreduced when the
characteristic divides $n$. [[def-abelian-variety-over-a-field]]

## Proof

**Proof technique:** construct the fiber-evaluation maps and use their
localization-compatible images to define the Selmer and descent sets.

**Given:** The data above.

1.1 Pullback of $Z\to X$ along $P:\operatorname{Spec}K\to X$ is the fiber
$Z_P$. Since $Z$ is a $G$-torsor, base change preserves its torsor action and
local triviality, so $Z_P$ defines a class in $H^1(K,G)$. The same argument
over $K_v$ defines every local evaluation map. [F1, given]

1.2 Pullback is functorial in the field extension $K\hookrightarrow K_v$.
Thus each global class has a well-defined local restriction, and the displayed
local-image condition defines a subset of $H^1(K,G)$. Isomorphic field-torsor
representatives induce isomorphic twists over $X$ by [F5], hence the same
image in $X(\mathbb A_K)$: isomorphisms act bijectively on adelic points.
Consequently the all-representatives predicate in the Definition is
independent of representatives and equivalent to the displayed class-indexed
notation. Separation on the already supplied adelic point set makes this a
set, without treating a proper class of presentations as a set. This argument
uses actual adelic lifts, and asserts no implication from local solvability
to adelic solvability or to rational solvability. [F2, F5, step 1.1, given]

2.1 For $f=[n]:A\to A$ with $A$ as in [F8], the fiber over
$P\in A(K_v)$ is the torsor in [F6],
so $\operatorname{ev}_{f,v}(P)=\delta_v(P\bmod nA(K_v))$. Its image is
therefore exactly the local Kummer image; intersecting the global classes
whose localizations lie in those images gives [F7]. The torsor is among the
smooth affine groups in the Definition only when $A[n]$ is smooth, which is
automatic in the separable Kummer branch but is not asserted when the
characteristic divides $n$. [A1, F3, F4, F6, F7, F8, step 1.2, given] ∎
