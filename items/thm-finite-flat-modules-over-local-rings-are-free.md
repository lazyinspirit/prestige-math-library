---
id: thm-finite-flat-modules-over-local-rings-are-free
kind: theorem
title: "A finite flat module over a local ring is free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-equational-criterion-for-flatness, cor-nakayama-generators-modulo-an-ideal, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
    - title: "Mihnea Mustata, Graduate Commutative Algebra, §10"
      url: "https://www.math.lsa.umich.edu/~mmustata/commalg.html"
---

## Statement

The standard theorem holds over arbitrary local rings; the proof written here is
the Noetherian local case.

Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a finite flat
$R$-module. Then $M$ is free.

## Facts & Assumptions

**Given:** A Noetherian local ring $(R,\mathfrak m)$ and a finite flat
$R$-module $M$.

[L1] If lifts of residue classes generate $M/\mathfrak mM$, they generate $M$
([[cor-nakayama-generators-modulo-an-ideal]]).

[L2] The equational criterion characterizes flatness by lifting finite relations
([[thm-equational-criterion-for-flatness]]).

[L3] Over a Noetherian ring, finite modules are finitely presented
([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

## Proof

**Proof technique:** direct.


1.1 Choose elements $x_1,\ldots,x_r\in M$ whose residue classes form a basis of the vector space $M/\mathfrak mM$. By [L1], they generate $M$. Thus there is a surjection $ \varphi:R^r\twoheadrightarrow M $ sending the $i$th standard basis vector to $x_i$. [L1, given, choose]


1.2 Let $K=\ker\varphi$. Because $R$ is Noetherian and $R^r$ is finite, [L3] makes $K$ finitely generated. Tensoring $ 0\to K\to R^r\to M\to0 $ with the residue field $k=R/\mathfrak m$ remains exact because $M$ is flat, so $ 0\to K/\mathfrak mK\to k^r\to M/\mathfrak mM\to0. $ The last map is an isomorphism by the choice of the $x_i$, hence $K/\mathfrak mK=0$. [L3, algebra]


1.3 Nakayama now gives $K=0$. Thus $\varphi$ is an isomorphism and $M\cong R^r$ is free. The equational criterion [L2] explains why no hidden relation survives once the residue-field relations vanish. [L2, algebra]


2.1 Therefore every finite flat module over a Noetherian local ring is free. [algebra] ∎
