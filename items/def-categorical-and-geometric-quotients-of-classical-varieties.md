---
id: def-categorical-and-geometric-quotients-of-classical-varieties
kind: definition
title: Categorical and geometric quotients of classical varieties
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties, def-rational-action-on-affine-variety, def-classical-affine-variety-morphism]
justified_by: [thm-invariant-ring-finite-generation-and-affine-categorical-quotient]
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
---

## Definition

Let $G$ be a complex affine algebraic group acting algebraically on a classical
variety $X$
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]],
[[def-rational-action-on-affine-variety]]). A $G$-invariant morphism
$\pi:X\to Y$ is a **categorical quotient** if every $G$-invariant morphism
$f:X\to Z$ of classical varieties factors uniquely as $f=\varphi\circ\pi$ with
$\varphi:Y\to Z$ a morphism.

It is a **geometric quotient** (Brion Definition 1.18) if

(i) $\pi$ is surjective and its fibres are exactly the $G$-orbits,

(ii) a subset $U\subseteq Y$ is open if and only if $\pi^{-1}(U)$ is open in
$X$, and

(iii) for every open $U\subseteq Y$ the pullback of regular functions is an
isomorphism $\mathcal O_Y(U)\to\mathcal O_X(\pi^{-1}(U))^G$ onto the
$G$-invariant regular functions on the preimage.

A geometric quotient is a categorical quotient and is unique up to unique
isomorphism; when it exists its underlying topological space is the orbit space
$X/G$ with the quotient topology. For an affine $G$-variety $X$ whose invariant
algebra $\mathbb C[X]^G$ is finitely generated, the affine model is the morphism
$\pi:X\to X/\!/G:=\operatorname{Spec}\mathbb C[X]^G$ induced by the inclusion
$\mathbb C[X]^G\subseteq\mathbb C[X]$. For a reductive $G$, the theorem below
proves this finite generation and makes the model a categorical quotient with
one closed orbit in each fibre
([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]).

**Why a geometric quotient is categorical.** Let $\pi:X\to Y$ satisfy (i)–(iii)
and let $f:X\to Z$ be a $G$-invariant morphism to a classical variety $Z$. By
(i) two points of a fibre of $\pi$ lie in one orbit, on which $f$ is constant,
so $f$ factors through a unique set map $\bar f:Y\to Z$. For $W\subseteq Z$
open, $\pi^{-1}(\bar f^{-1}(W))=f^{-1}(W)$ is open in $X$ by continuity of $f$,
so $\bar f^{-1}(W)$ is open in $Y$ by (ii): $\bar f$ is continuous. If $V$ is an
affine chart of $Z$ with coordinates $s$ and $U:=\bar f^{-1}(V)$, then
$s\circ f$ is a $G$-invariant regular function on $\pi^{-1}(U)$, hence by (iii)
is the pullback along $\pi$ of a unique regular function on $U$; that function
is $s\circ\bar f$. Since this holds for every coordinate $s$ of an affine chart,
$\bar f$ is a morphism
([[def-classical-affine-variety-morphism]],
[[def-classical-algebraic-prevariety-regular-maps-and-varieties]]), and local
agreement of the resulting morphisms on overlapping charts gives a morphism
$Y\to Z$. Surjectivity in (i) makes the factorisation unique. If also
$\pi':X\to Y'$ is a categorical quotient, the universal property applied to
$\pi'$ and to $\pi$ yields morphisms $\varphi:Y\to Y'$ with $\varphi\pi=\pi'$
and $\psi:Y'\to Y$ with $\psi\pi'=\pi$; then $(\varphi\psi)\pi'=\pi'$ and
$(\psi\varphi)\pi=\pi$, so uniqueness of the factorisation of $\pi'$ through
$\pi'$ and of $\pi$ through $\pi$ forces $\varphi\psi=\operatorname{id}_{Y'}$
and $\psi\varphi=\operatorname{id}_Y$. Thus categorical and geometric
quotients are unique up to unique isomorphism, and for a geometric quotient
(i)–(ii) say exactly that the underlying map is the quotient map of the orbit
equivalence relation with the quotient topology.

**Conventions.** This is the classical notion of Brion Definition 1.18 and the
paragraph after Theorem 1.24. The scheme-theoretic fppf quotient sheaf on the
AG-ACT-1 page is a different object and is not identified with this classical
notion here. In the classical register, $\operatorname{Spec}$ of a finitely
generated reduced complex algebra denotes its associated affine variety of
complex closed points with the classical regular-function sheaf; no
identification with the space of every scheme prime is used. For empty $X$ the
coordinate algebra is zero and its quotient is empty; finite generation and the
universal properties below are then immediate and fibre assertions are vacuous.
The definition itself uses no Axiom of Choice; the finite-generation theorem
referred to above inherits AC from its own named suppliers, so consumers of that
theorem carry AC, while nothing in this definition does.
