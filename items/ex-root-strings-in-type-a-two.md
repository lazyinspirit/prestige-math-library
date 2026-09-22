---
id: ex-root-strings-in-type-a-two
kind: example
title: Root strings in type A_2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, thm-root-string-property, ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, ex-the-root-sl-two-triple-inside-sl-n, def-coroot-of-a-lie-algebra-root, cor-cartan-integers-are-integral, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Figure 2.1 and Proposition 2.29"
landmark: false
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the root-string, coroot and Cartan-integrality suppliers."
---

## Example

Assume AC ([[def-axiom-of-choice]]). In $\mathfrak{sl}_3(\mathbb C)$ with the diagonal Cartan subalgebra and the
roots $\varepsilon_i-\varepsilon_j$ of
[[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], take
$\alpha=\varepsilon_1-\varepsilon_2$ and $\beta=\varepsilon_2-\varepsilon_3$,
so that $h_\alpha=E_{11}-E_{22}$ by
[[ex-the-root-sl-two-triple-inside-sl-n]]. The $\alpha$-string through
$\beta$ consists of $\beta$ and $\beta+\alpha=\varepsilon_1-\varepsilon_3$,
that is, it has the form $\beta-p\alpha,\dots,\beta+q\alpha$ with $p=0$ and
$q=1$, and indeed
$$p-q=-1=\beta(h_\alpha)=(\varepsilon_2-\varepsilon_3)(E_{11}-E_{22}),$$
in agreement with [[thm-root-string-property]]. The $\alpha$-string through
$\alpha$ is $\{-\alpha,0,\alpha\}$, so $p=2$, $q=0$, $p-q=2$, and
$\alpha(h_\alpha)=2$.

## Facts & Assumptions

**Given:** AC; the algebra $\mathfrak{sl}_3(\mathbb C)$ with the roots $\varepsilon_i-\varepsilon_j$ of [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], the roots $\alpha=\varepsilon_1-\varepsilon_2$, $\beta=\varepsilon_2-\varepsilon_3$, the coroot $h_\alpha=E_{11}-E_{22}$ from [[ex-the-root-sl-two-triple-inside-sl-n]] and [[def-coroot-of-a-lie-algebra-root]], and the string description of [[thm-root-string-property]] with the root set of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]].

## Verification

**Proof technique:** direct.

1.1 The roots of $\mathfrak{sl}_3(\mathbb C)$ are the six functionals $\varepsilon_i-\varepsilon_j$, $i\ne j$, so $\beta$, $\beta+\alpha=\varepsilon_1-\varepsilon_3$, $\alpha$ and $-\alpha$ are roots while $2\alpha=2\varepsilon_1-2\varepsilon_2$ is not, by the reducedness statement that the only scalar multiples of a root that are roots are $\pm$ themselves. [given, algebra]

1.2 The Cartan integer evaluates as $\beta(h_\alpha)=(\varepsilon_2-\varepsilon_3)(E_{11}-E_{22})$: the diagonal matrix $E_{11}-E_{22}$ has coordinate vector $(1,-1,0)$, so $\varepsilon_2-\varepsilon_3$ gives $(-1)-0=-1$, matching $p-q=0-1=-1$. [given, algebra]

2.1 For the $\alpha$-string through $\beta$: the indices $k\in\mathbb Z$ with $\beta+k\alpha$ a root or $0$ are $k=0,1$; indeed $\beta+\alpha=\varepsilon_1-\varepsilon_3$ is a root, while $\beta-\alpha=2\varepsilon_2-\varepsilon_1-\varepsilon_3$ and $\beta+2\alpha=2\varepsilon_1-\varepsilon_2-\varepsilon_3$ are not among the six roots and are nonzero. Hence $p=0$, $q=1$. [given, step 1.1, algebra]

3.1 For the $\alpha$-string through $\beta=\alpha$, the terms are $\beta+k\alpha=(k+1)\alpha$. They are roots or zero exactly for $k\in\{-2,-1,0\}$, giving the terms $-\alpha,0,\alpha$ and hence $p=2$, $q=0$, and $p-q=2$. Also $\alpha(h_\alpha)=(\varepsilon_1-\varepsilon_2)(E_{11}-E_{22})=1-(-1)=2$, so the string identity $p-q=\beta(h_\alpha)$ holds. [given, step 1.1, algebra] ∎
