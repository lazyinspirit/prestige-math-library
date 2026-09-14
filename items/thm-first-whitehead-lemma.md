---
id: thm-first-whitehead-lemma
kind: theorem
title: First Whitehead lemma
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-weyls-complete-reducibility-theorem, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 5.21"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§5, Corollary 5.21, printed pp. 53–54"
---

## Statement

If $\mathfrak g$ is finite-dimensional semisimple over a characteristic-zero
field and $M$ is a finite-dimensional $\mathfrak g$-module, then
$H^1(\mathfrak g,M)=0$.

## Facts & Assumptions

**Given:** Such $\mathfrak g$, $M$, and a $1$-cocycle
$\delta:\mathfrak g\to M$.

[L1] A cocycle satisfies
$\delta([x,y])=x\delta(y)-y\delta(x)$, and coboundaries have the form
$x\mapsto xm$
([[prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations]]).

[L2] Every finite-dimensional $\mathfrak g$-module is completely reducible
([[thm-weyls-complete-reducibility-theorem]]).

[L3] A semisimple characteristic-zero Lie algebra is perfect
([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

## Proof

**Proof technique:** split the module extension defined by the cocycle.

1.1 On $E=M\oplus k$ define $x\cdot(m,a)=(xm+a\delta(x),0)$. The commutator of the actions at $(m,a)$ has first component $[x,y]m+a(x\delta(y)-y\delta(x))$, which equals $[x,y]m+a\delta([x,y])$ by [L1]. Thus this is a representation, $M$ is a submodule, and $E/M$ is the trivial one-dimensional module. [L1, algebra]
2.1 By [L2], $M$ has an invariant line complement $L$. Its projection to $k$ is an isomorphism, so $L$ has a generator $(m,1)$. A one-dimensional module kills the derived algebra, which is all of $\mathfrak g$ by [L3]; hence it is trivial and $0=x\cdot(m,1)=(xm+\delta(x),0)$. Therefore $\delta(x)=x(-m)$ is a coboundary by [L1]. [L1, L2, L3, step 1.1]
3.1 Every cocycle is therefore a coboundary and the quotient $H^1$ is zero. If $M=0$ or $\mathfrak g=0$, the same conclusion is immediate (the zero algebra is semisimple and has no nonzero $1$-cochains into a zero module; for $\mathfrak g=0$ the Hom space itself is zero). The complement in step 2.1 is supplied by the proved finite-dimensional theorem, not by a choice principle. [L1, step 2.1] ∎
