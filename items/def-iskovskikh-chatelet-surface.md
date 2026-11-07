---
id: def-iskovskikh-chatelet-surface
kind: definition
title: "Iskovskikh’s Châtelet surface"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-global-field
  - def-projective-bundle-scheme
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §§8.2.5.1–8.2.5.3"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Conic-bundle construction and Iskovskikh’s compactified surface."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §3.2"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Châtelet surfaces and their Brauer classes."
verification: {}
---

## Definition

Assume the Axiom of Choice (AC), as inherited from the relative Proj
convention.

Let $\mathbb P^1_{\mathbb Q}$ have homogeneous coordinates $s,t$, let
$E=\mathcal O\oplus\mathcal O\oplus\mathcal O(2)$ on $\mathbb P^1_{\mathbb Q}$,
and put
$$F(s,t)=(3s^2-t^2)(t^2-2s^2)\in
H^0(\mathbb P^1_{\mathbb Q},\mathcal O(4)).$$
Using $\mathbb P(E)=\operatorname{Proj}(\operatorname{Sym}E)$, the diagonal
summand of $\operatorname{Sym}^2E$ is
$\mathcal O\oplus\mathcal O\oplus\mathcal O(4)$. Let $q$ be the section of
$\operatorname{Sym}^2E$ whose three diagonal components are
$1\in\Gamma(\mathbb P^1,\mathcal O)$, $1\in\Gamma(\mathbb P^1,\mathcal O)$,
and $-F\in\Gamma(\mathbb P^1,\mathcal O(4))$, with all mixed components
zero. Let $X$ be its zero locus. In the chart $s\ne0$, trivializing
$\mathcal O(2)$ by $s^2$ gives the fiber equation
$u^2+v^2-F(1,x)w^2=0$. This smooth projective surface is the
**Iskovskikh Châtelet surface**. With $x=t/s$ and $w=1$, it contains the
affine open surface
$$U:\quad y^2+z^2=(3-x^2)(x^2-2).$$

## Definition references

[[def-global-field|The rational field as a global field]]

[[def-projective-bundle-scheme|Projective bundle and relative Proj convention]]

[[def-axiom-of-choice|Axiom of Choice for the relative Proj construction]]

[Poonen, §§8.2.5.1–8.2.5.3](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §3.2](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, the projective line, the line bundles in $E$, and the quartic section $F$.

[A1] AC is inherited by the relative Proj convention for a projective
bundle. [[def-projective-bundle-scheme]] [[def-axiom-of-choice]]

[F1] A global field is either a number field or a function field over a finite
field; in particular $\mathbb Q$ is a global field. [[def-global-field]]

[F2] The projective bundle is $\operatorname{Proj}(\operatorname{Sym}E)$ and
is locally projective space over the base. [[def-projective-bundle-scheme]]

## Proof

**Proof technique:** verify the local equation, properness, and smoothness of
the total conic bundle.

**Given:** AC and the data above.

1.1 In the frame $s^2$ of $\mathcal O(2)$, the component $-F$ has
coefficient $-F(1,x)=-(3-x^2)(x^2-2)$. Thus the local zero-locus equation is
$u^2+v^2-F(1,x)w^2=0$; setting $w=1$, $y=u$, and $z=v$ gives the displayed
affine equation. [F2, given, algebra]

1.2 The projective bundle over $\mathbb P^1$ is projective over $\mathbb Q$;
the zero locus of $q$ is closed, hence $X$ is projective over $\mathbb Q$.
The four roots of $F(1,x)$ are $\pm\sqrt3,\pm\sqrt2$. At a root of
$3-x^2$, its derivative $F'=-2x(x^2-2)$ is nonzero; at a root of
$x^2-2$, $F'=2x(3-x^2)$ is nonzero. The homogeneous form has nonzero value
at infinity. In a local trivialization a point of the total hypersurface can
be singular only if $u=v=F w=F'w^2=0$. If $w=0$, then $u=v=0$, impossible
in projective coordinates; if $w\ne0$, these equations force a repeated root
of $F$. There is none, so the total surface is smooth. The generic fiber is a smooth
rank-three conic, hence geometrically integral. Every fiber equation is a
nonzero quadratic form, so its zero locus has dimension one and no whole
two-dimensional fiber is contained in $X$. The hypersurface is a Cartier
divisor in the integral projective bundle, hence pure of dimension two; no
component can be vertical. The integral generic fiber gives one dominating
component, and smoothness makes $X$ reduced. Thus $X$ is geometrically
integral and the Definition is well-formed. [A1, F2, step 1.1, algebra] ∎
