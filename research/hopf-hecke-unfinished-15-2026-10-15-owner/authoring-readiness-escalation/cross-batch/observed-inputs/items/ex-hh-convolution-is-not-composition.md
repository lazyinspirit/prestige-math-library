---
id: ex-hh-convolution-is-not-composition
kind: example
title: "A finite calculation separating convolution from composition"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-hopf-algebra-and-antipode, lem-hh-convolution-algebra-associativity-and-unit, lem-hh-group-and-polynomial-hopf-algebras-exist]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Proposition 1.4 and Theorem 1.5, printed pp. 14–16: convolution and the antipode as its inverse"
    - title: "Thomas Rüd, Hopf Algebras and rooted trees, Practical work in mathematics"
      url: "https://math.mit.edu/~rud/TeXthings/HopfAlgebras-1.1.pdf"
      locator: "§2.3.1–2.4, PDF pp. 9–12: convolution and the Hopf-algebra antipode"

---
## Example

Let $H=kC_3$ with basis $1,g,g^2$ and $g^3=1$. Define linear maps $f,q:H\to H$ by $f(1)=0$, $f(g)=1$, $f(g^2)=0$ and $q(1)=g$, $q(g)=q(g^2)=0$. Then $f*q=0$ for convolution, but $f\circ q\ne0$ for composition. Also the antipode sends $g$ to $g^2$, whereas the composition inverse of $\mathrm{id}_H$ is $\mathrm{id}_H$ itself.

## Facts & Assumptions

**Given:** A field $k$, the cyclic group $C_3=\{1,g,g^2\}$, and the maps specified in the Example.

[F1] Convolution is $(f*q)(h)=m(f\otimes q)\Delta(h)$, whereas composition is ordinary function composition ([[lem-hh-convolution-algebra-associativity-and-unit]]).

[F2] In a group algebra, $\Delta(g)=g\otimes g$ and the antipode is $S(g)=g^{-1}$ ([[lem-hh-group-and-polynomial-hopf-algebras-exist]]).

[F3] The antipode is defined as the convolution inverse of the identity map ([[def-hh-hopf-algebra-and-antipode]]).

## Verification

**Proof technique:** direct.

1.1 The maps are defined on all three basis elements of $H$, so they extend uniquely linearly to $H$. For each basis element $r\in\{1,g,g^2\}$, [F2] gives $\Delta(r)=r\otimes r$, hence $(f*q)(r)=f(r)q(r)$. The products for $r=1,g,g^2$ are respectively $0\cdot g=0$, $1\cdot0=0$, and $0\cdot0=0$, so $f*q$ is the zero linear map. [given, F1, F2, construct]

1.2 By [F2], $S(g)=g^{-1}=g^2\ne g=\mathrm{id}_H(g)$, so $S\ne\mathrm{id}_H$. The only compositional inverse of $\mathrm{id}_H$ is itself: if $T\circ\mathrm{id}_H=\mathrm{id}_H$, then $T=\mathrm{id}_H$. Yet [F3] and the Hopf structure make $S$ the two-sided convolution inverse of $\mathrm{id}_H$. The inverse operation in the Hopf definition is therefore convolution, not composition. [F2, F3, algebra]

2.1 By definition of composition, $(f\circ q)(1)=f(q(1))=f(g)=1$, which is nonzero in the basis of $H$. Thus $f\circ q$ is not the zero map and differs from $f*q$ in step 1.1. [step 1.1, algebra]

3.1 Steps 1.1–1.3 give an explicit pair of maps with different convolution and composition products and a Hopf antipode that is not a composition inverse of the identity. [step 1.1, step 2.1, step 1.2] ∎
