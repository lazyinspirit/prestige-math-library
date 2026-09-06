---
id: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric
title: "Weak global dimension is Tor-detected and left-right symmetric"
kind: theorem
status: published
origin: pipeline
deps: ["def-left-and-right-weak-global-dimension", "thm-flat-dimension-at-most-n-iff-higher-tor-vanishes", "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "def-balanced-tor-bifunctor", "def-opposite-ring", "thm-universal-property-of-module-tensor-products"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
---

## Statement

Assume Dependent Choice, and fix supplied projective resolution data for all left and right modules over the unital ring $R$. Then
$$\operatorname{w.gl.dim}_{\mathrm{left}}R=\operatorname{w.gl.dim}_{\mathrm{right}}R=\sup\{i\geq0:\operatorname{Tor}_i^R(N,M)\ne0\text{ for some right }N\text{ and left }M\}.$$
All suprema are taken in $\mathbb N\cup\{\infty\}$; in particular the supremum of the empty set is $0$.

## Proof

**Given:** The stated data and the flat-dimension criterion [[thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]]. The two weak dimensions are defined by [[def-left-and-right-weak-global-dimension]].

1.1 For each $d\geq0$, the criterion says that every left module has flat dimension at most $d$ if and only if $\operatorname{Tor}_i^R(N,M)=0$ for all typed pairs $(N,M)$ and every $i>d$. Thus the left weak dimension and the displayed Tor supremum have exactly the same finite upper bounds. Numbers in $\mathbb N\cup\{\infty\}$ are determined by these upper bounds, proving their equality, including the infinite case. [given, algebra]

1.2 Regard a left $R$-module $M$ as a right $R^{\mathrm{op}}$-module and a right $R$-module $N$ as a left $R^{\mathrm{op}}$-module, using [[def-opposite-ring]]. A supplied projective left resolution $P_\bullet\to M$ is also a projective right $R^{\mathrm{op}}$-resolution. The balanced tensor universal property [[thm-universal-property-of-module-tensor-products]] gives chain isomorphisms $P_\bullet\otimes_{R^{\mathrm{op}}}N\to N\otimes_RP_\bullet$ by $p\otimes n\mapsto n\otimes p$. The balance relation is preserved since $(rp)\otimes n$ and $p\otimes(nr)$ both map to $nr\otimes p=n\otimes rp$. The inverse is the same flip, and the differentials commute because $N$ is in degree zero. By [[def-balanced-tor-bifunctor]] and the supplied-resolution balance theorem [[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]], this yields $\operatorname{Tor}_i^{R^{\mathrm{op}}}(M,N)\cong\operatorname{Tor}_i^R(N,M)$. [given, construct]

2.1 The tensor flip also identifies exactness of the tensor functors defining flatness, so a right $R$-module has the same flat dimension as its associated left $R^{\mathrm{op}}$-module. The given data on both hands supply the data needed for step 1.1 over $R^{\mathrm{op}}$. Its left weak dimension is therefore the right weak dimension of $R$, while step 1.2 identifies its Tor supremum with the one in step 1.1. This proves the asserted symmetry. In the zero ring every unital module is zero, every flat dimension is zero, and the Tor-degree set is empty, agreeing with the stated supremum convention. [step 1.1, step 1.2, algebra] ∎
