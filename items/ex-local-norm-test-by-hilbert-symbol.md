---
id: ex-local-norm-test-by-hilbert-symbol
kind: example
title: A local norm test computed by the Hilbert symbol
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
proof_strategy: direct
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-local-hilbert-symbol-over-field-containing-roots-of-unity
- def-local-artin-reciprocity-map
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-absolute-galois-group-of-a-local-field
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter III §4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem 4.4(d), printed p.114.
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §5.1
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: The norm-kernel property (5.1)(5), printed pp.143–144.
verification: {}
axiom_use: ZF with the original named canonical reciprocity map, normalized invariant, character
  property and unramified action supplied as data through the actual Definition chain. No AC/DC-only
  norm converse or choice-free existence theorem is instantiated.
---

## Example

Let $K=\mathbb Q_3$ with its $3$-adic valuation, let $K_s$ be a separable
closure, and let $K^{\mathrm{ab}}$ be its maximal abelian extension. Set
$L=K(\sqrt3)$ and $a=-3$. The field norm of $\sqrt3$ is
$$
N_{L/K}(\sqrt3)=\sqrt3\,(-\sqrt3)=-3,
$$
where the factors are its two conjugates over $K$. Use the local Artin map
$\operatorname{rec}_K:\widehat{K^\times}\to
\operatorname{Gal}(K^{\mathrm{ab}}/K)$ normalized so a uniformizer maps to
arithmetic Frobenius on every finite unramified extension. For
$\bar a$ the image of $a$ in the profinite completion, define
$$
(a,3)_{K,2}=\operatorname{rec}_K(\bar a)(\sqrt3)/\sqrt3.
$$
Since $a$ is the displayed norm, the arithmetic local Hilbert symbol
satisfies
$$
(-3,3)_{K,2}=1.
$$

## Example references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]
[[def-local-artin-reciprocity-map]]

## Facts & Assumptions

**Given:** Exactly the original field, closure and named arithmetic Hilbert
symbol. Its local Artin map is the map in the Hilbert Definition, which
refers to the distinguished finite-character map and supplied normalized
invariant in the Artin Definition. Canonicality is not inferred from the
public Frobenius clause alone. No existence of these supplied data is asserted.

[F1] The symbol is the action of the supplied map on the chosen square root.
[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[F2] For every finite-order continuous character $\chi$, the supplied
canonical map satisfies
$\chi(\operatorname{rec}_K(a))=\operatorname{inv}_K(a\smile\delta\chi)$,
where the coefficient pairing is $(a,m)\mapsto a^m$ and a rational lift
computes the Bockstein. [[def-local-artin-reciprocity-map]]

[F3] Continuous inhomogeneous cochains have their explicit differential,
and the cochain definition uses no choice principle.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F4] Restriction to a finite Galois subextension is continuous into that
finite automorphism group in the supplied absolute Galois topology.
No extension or surjectivity choice is needed for this cochain composition.
[[def-absolute-galois-group-of-a-local-field]]

## Verification

**Proof technique:** compute the displayed norm and an actual finite
coboundary, then apply the supplied canonical character property.

**Given:** The original Example data, with the named Definition chain above.

1.1 Put $\alpha=\sqrt3$. It is not in $K$, since its valuation would be $1/2$ in the value group $\mathbb Z$. Thus $L/K$ is quadratic Galois, with nontrivial automorphism $\sigma(\alpha)=-\alpha$. The field norm is the product of those two conjugates, $N_{L/K}(\alpha)=\alpha(-\alpha)=-3=a$, exactly as displayed. This is a finite polynomial calculation. [given, algebra]

2.1 On $\operatorname{Gal}(L/K)=\{1,\sigma\}$ put $\chi(1)=0$, $\chi(\sigma)=1/2+\mathbb Z$ and use rational lift $0,1/2$. Its Bockstein is the integer carry, equal to one only on $(\sigma,\sigma)$. Define the multiplicative cochain $c(1)=1$, $c(\sigma)=\alpha$. Its differential is one unless both entries are $\sigma$, and then $(\delta c)(\sigma,\sigma)=\alpha\sigma(\alpha)=-3$. Hence $\delta c=a\smile\delta\chi$ as actual finite cochains. Inflating by composition gives continuous cochains on $G_K$ by [F4], with the same differential by [F3]. [F3, F4, step 1.1, construct, algebra]

3.1 The supplied property [F2] gives $\chi(\operatorname{rec}_K(a))=\operatorname{inv}_K([\delta c])=0$. This character is faithful on the two-element quotient, so the action fixes $\alpha$. By [F1], $(-3,3)_{K,2}=1$. This uses only the displayed finite coboundary and the literal canonical data; neither direction of an AC/DC-only norm-kernel theorem or existence of reciprocity in ZF was invoked. [F1, F2, step 2.1, algebra] ∎
