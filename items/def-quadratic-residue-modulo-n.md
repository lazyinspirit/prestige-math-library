---
id: def-quadratic-residue-modulo-n
kind: definition
title: "Quadratic residues and nonresidues modulo an integer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-congruence-modulo-an-integer, def-common-divisor-and-gcd, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Definition

Let $n\ge2$ and let $a\in\mathbb Z$ satisfy $\gcd(a,n)=1$. The integer $a$ is a **quadratic residue modulo $n$** if there is an integer $x$ with

$$x^2\equiv a\pmod n,$$

and otherwise it is a **quadratic nonresidue modulo $n$**.

By [[thm-unit-criterion-modulo-n]], the coprimality hypothesis says that $[a]_n$ is a unit. Thus the terms quadratic residue and quadratic nonresidue here apply only to unit classes; a nonunit target belongs to neither class.
