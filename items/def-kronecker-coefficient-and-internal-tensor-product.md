---
id: def-kronecker-coefficient-and-internal-tensor-product
kind: definition
title: Kronecker coefficients and the internal tensor product
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-tensor-product-of-complex-representations,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order,
       def-completely-reducible-representation,
       thm-complex-specht-modules-are-irreducible,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules,
       cor-distinct-specht-modules-are-inequivalent,
       def-isotypic-component-of-a-completely-reducible-representation,
       thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed pp. 115–116: triple character average before (7.9), and the internal product expansion (7.10)."
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "§1, display (1.1) and the surrounding paragraph, printed p. 1, and §2.3, printed pp. 3-4: the definition of $g(\\lambda,\\mu,\\nu)$ as the multiplicity of $\\chi^\\nu$ in $\\chi^\\lambda\\otimes\\chi^\\mu$"
---

## Definition

Fix an integer $n\ge0$ and work over $\mathbb C$. Let $\lambda,\mu\vdash n$ be
partitions of $n$
([[def-partition-young-diagram-and-conjugate-partition]]), and let
$S^\lambda\otimes_{\mathbb C}S^\mu$ be the tensor product of their complex
Specht modules, a finite-dimensional complex $S_n$-module
([[def-tensor-product-of-complex-representations]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]). The
**Kronecker coefficient** $g(\lambda,\mu,\nu)$ of a third partition
$\nu\vdash n$ is the multiplicity of $S^\nu$ in this tensor product:

$$g(\lambda,\mu,\nu):=\frac{\dim_{\mathbb C}\bigl(S^\lambda\otimes_{\mathbb C}S^\mu\bigr)_{(S^\nu)}}{\dim_{\mathbb C}S^\nu},$$

where $\bigl(S^\lambda\otimes_{\mathbb C}S^\mu\bigr)_{(S^\nu)}$ is the isotypic
component of type $S^\nu$
([[def-isotypic-component-of-a-completely-reducible-representation]]).

**Well-definedness.** The module $S^\lambda\otimes_{\mathbb C}S^\mu$ is
finite-dimensional, and $\operatorname{char}\mathbb C=0$ does not divide the
order of the finite group $S_n$, so complex Maschke's theorem gives complete
reducibility
([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]],
[[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]],
[[def-completely-reducible-representation]]). The complex Specht modules
$S^\nu$, $\nu\vdash n$, are a complete list of pairwise inequivalent
irreducible $S_n$-modules
([[thm-complex-specht-modules-are-irreducible]],
[[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]],
[[cor-distinct-specht-modules-are-inequivalent]]). Consequently a decomposition
into irreducibles has the form
$S^\lambda\otimes_{\mathbb C}S^\mu\cong\bigoplus_{\nu\vdash n}m_\nu S^\nu$
with nonnegative integer multiplicities $m_\nu$, and the isotypic component of
type $S^\nu$ is the direct sum of exactly the $m_\nu$ copies of $S^\nu$
appearing in any such decomposition, by
[[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]]
(Proof step 2.1 identifies each grouped block with the defining isotypic sum).
In particular
$\dim_{\mathbb C}(S^\lambda\otimes_{\mathbb C}S^\mu)_{(S^\nu)}=m_\nu\dim_{\mathbb C}S^\nu$
and $\dim_{\mathbb C}S^\nu>0$ because $S^\nu$ is irreducible. Hence
$g(\lambda,\mu,\nu)=m_\nu$ is a nonnegative integer, independent of the chosen
decomposition, and $g(\lambda,\mu,\nu)$ is by definition the multiplicity of
$S^\nu$ in $S^\lambda\otimes_{\mathbb C}S^\mu$.

**The internal product.** For partitions $\lambda,\mu\vdash n$ call
$$(\lambda,\mu)\longmapsto S^\lambda\otimes_{\mathbb C}S^\mu$$
the **internal (Kronecker) product** of the $S_n$-representations $S^\lambda$
and $S^\mu$. Unlike the outer induction product
$\operatorname{Ind}_{S_a\times S_b}^{S_{a+b}}(S^\alpha\boxtimes S^\beta)$ of
[[thm-outer-littlewood-richardson-rule]], which takes a pair of modules of
degrees $a$ and $b$ to a module of degree $a+b$, the internal product keeps the
rank: both inputs and the output are $S_n$-modules of the same degree $n$. The
two operations are different constructions on different data; the outer product
is mentioned here only for contrast and is not used in this definition.

No form of the Axiom of Choice is used: the tensor product, Maschke's theorem,
the Specht classification and the isotypic decomposition are finite-dimensional
complex representation theory of a finite group.
