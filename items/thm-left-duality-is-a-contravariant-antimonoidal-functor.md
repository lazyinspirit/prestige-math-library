---
id: thm-left-duality-is-a-contravariant-antimonoidal-functor
kind: theorem
title: "Left duality is a contravariant antimonoidal functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-dual-of-a-morphism, thm-duals-are-unique-up-to-a-unique-compatible-isomorphism, thm-the-unit-is-self-dual]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Section 2.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

After choosing a left dual $X^\vee$ for each object $X$, the assignment
$X\mapsto X^\vee$ and $f\mapsto f^\vee$ defines a contravariant functor
$(-)^\vee:\mathcal C^{\mathrm{op}}\to\mathcal C$. Moreover, for all objects
$X,Y$, the object $Y^\vee\otimes X^\vee$ is a left dual of $X\otimes Y$, so
there is a unique compatible isomorphism

$$(X\otimes Y)^\vee\cong Y^\vee\otimes X^\vee,$$

and likewise $\mathbf 1^\vee\cong\mathbf 1$.

## Facts & Assumptions

**Given:** Chosen left duals for all objects of a left rigid monoidal category.

[L1] The dual of a morphism is defined by the transpose formula in [[def-the-dual-of-a-morphism]].

[L3] A fixed object has at most one left dual up to unique compatible isomorphism ([[thm-duals-are-unique-up-to-a-unique-compatible-isomorphism]]).

[L4] The tensor unit is a left dual of itself ([[thm-the-unit-is-self-dual]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the definition from [L1] with $f=1_X$ and then straightening the resulting coevaluation-evaluation pair by the zig-zag identities shows $(1_X)^\vee=1_{X^\vee}$. [given, L1]

1.2 The usual tensoring of the chosen dual pairs gives evaluation and coevaluation maps exhibiting $Y^\vee\otimes X^\vee$ as a left dual of $X\otimes Y$. Since $(X\otimes Y)^\vee$ is the chosen left dual of the same object, [L3] gives a unique compatible isomorphism $$(X\otimes Y)^\vee\cong Y^\vee\otimes X^\vee.$$ [L3, algebra]

2.1 For morphisms $X\xrightarrow{f}Y\xrightarrow{g}Z$, the defining composite for $(g\circ f)^\vee$ contains the block $g\circ f$ between one coevaluation and one evaluation. Splitting that block into $g$ followed by $f$ yields exactly the composite for $f^\vee\circ g^\vee$, so $(g\circ f)^\vee=f^\vee\circ g^\vee$. Hence $(-)^\vee$ is contravariant. [step 1.1, L1, algebra]

3.1 By [L4], the tensor unit $\mathbf 1$ is itself a left dual of $\mathbf 1$. Applying [L3] to the chosen left dual $\mathbf 1^\vee$ and this canonical one gives a unique compatible isomorphism $\mathbf 1^\vee\cong\mathbf 1$. Together with step 1.2, this supplies the unit comparison, so $(-)^\vee$ is antimonoidal. [step 1.2, L3, L4] ∎
