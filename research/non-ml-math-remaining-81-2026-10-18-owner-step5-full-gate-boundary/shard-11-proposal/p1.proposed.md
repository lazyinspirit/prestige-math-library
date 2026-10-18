---
id: lem-pa36-p1-line-bundle-cohomology
kind: lemma
title: Cech cohomology of line bundles on the projective line
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-invertible-sheaf
  - def-sheaf-cohomology-derived-global-sections
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
proof_strategy: direct
axiom_use: The Axiom of Choice is inherited from derived sheaf cohomology and the affine-cover comparison used in both proof steps; the finite Laurent calculations make no additional choices.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§7.3, 7.6–7.7, printed pp. 97–99; the SL2 line-bundle cohomology examples"
---

## Statement

Assume the Axiom of Choice, inherited from sheaf cohomology.

For $d\in\mathbb Z$, let $\mathcal O_{\mathbb P^1}(d)$ have standard
frames $e_0,e_1$ on $U_0=\{x\ne0\}$ and $U_1=\{y\ne0\}$ with
$e_1=z^d e_0$ on the overlap, where $z=y/x$ and $w=1/z$. Then
$$\dim H^0(\mathbb P^1,\mathcal O(d))=\max(d+1,0),\qquad \dim H^1(\mathbb P^1,\mathcal O(d))=\max(-d-1,0),$$
and $H^q=0$ for $q\ge2$. For $d\ge0$, restrictions to $U_0$ of global
sections on $\mathbb P^1$, written in the frame $e_0$, are precisely
the polynomials of degree at most $d$; for $d\le-2$, $H^1$ has Laurent
basis $z^{d+1},z^{d+2},\ldots,z^{-1}$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), $\mathbb P^1$
with the two standard affine charts, an integer $d$, the line-bundle
transition $e_1=z^d e_0$, and sheaf cohomology with the supplied injective
resolution datum.

[F1] Under the assumed Axiom of Choice inherited from the definition of
sheaf cohomology, the two-chart affine cover computes cohomology of a
quasi-coherent sheaf on the separated scheme $\mathbb P^1$
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F2] The sheaf $\mathcal O(d)$ is invertible, hence quasi-coherent, with the
standard transition rule ([[def-invertible-sheaf]]).

## Proof

1.1 The Cech complex for $U_0,U_1$ has $$C^0=\mathbb C[z]e_0\oplus\mathbb C[w]e_1,\qquad C^1=\mathbb C[z,z^{-1}]e_0,$$ with differential $(f_0,f_1)\mapsto z^d f_1(1/z)-f_0(z)$. Its kernel consists of polynomials $f_0(z)$ that also lie in $z^d\mathbb C[z^{-1}]$. If $d\ge0$, these are exactly the span of $1,z,\ldots,z^d$; if $d<0$, the exponent ranges $\{0,1,\ldots\}$ and $\{d,d-1,\ldots\}$ are disjoint, so the kernel is zero. This proves the assertion for $H^0$. [F1, F2, given, algebra]

2.1 The degree-one cohomology is the Laurent-polynomial quotient $$\mathbb C[z,z^{-1}]/\bigl(\mathbb C[z]+z^d\mathbb C[z^{-1}]\bigr).$$ The first summand spans exponents $n\ge0$ and the second spans $n\le d$. If $d\ge-1$, these ranges cover every integer, so the quotient is zero. If $d\le-2$, the missing exponents are exactly $d+1,d+2,\ldots,-1$, which gives the stated basis and dimension $-d-1$. The Cech complex has no degree above one, so $H^q=0$ for $q\ge2$. [F1, step 1.1, algebra] ∎

