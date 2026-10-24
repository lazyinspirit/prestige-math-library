---
id: cor-elementary-membership-chains-and-collapse-compatibility
kind: corollary
title: "Elementary chains and compatible collapses"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: [thm-elementary-ordinal-chain-union, thm-collapse-of-elementary-membership-submodels]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 elementary-submodel and collapse interface pp10–12; chain union supplied by published SET-2 theorem"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

A nonempty set-ordinal elementary chain of actual membership structures satisfying Extensionality has a union elementary over every stage, and the union has a transitive collapse. Conjugating the inclusions by stage and union collapses gives coherent elementary embeddings; these are not asserted to be inclusions of the transitive images.

## Facts & Assumptions

[F1] [[thm-elementary-ordinal-chain-union]]: Let $\lambda>0$ be a set ordinal and $(\mathcal M_\alpha)_{\alpha<\lambda}$ an elementary chain of nonempty structures for one finite-arity set signature $L$. Its union is a set $L$-structure $\mathcal U$, and $\mathcal M_\alpha\prec\mathcal U$ for every $\alpha<\lambda$. No continuity hypothesis on the chain is required.

[F2] [[thm-collapse-of-elementary-membership-submodels]]: Let $M$ be a set with $(M,\in)\models\mathrm{Extensionality}$ and let $X\prec(M,\in)$. In ambient ZF, $\in$ restricted to $X$ is well-founded and extensional. It has a unique transitive collapse $\pi:X\to\bar X$, and the inverse collapse followed by inclusion is an elementary embedding $\bar X\to M$. Countability is preserved by $\pi$.

## Proof

**Given:** A set sequence $(M_\alpha)_{\alpha<\lambda}$ with $\lambda>0$, actual membership, Extensionality and elementary inclusions.

1.1 Let $\lambda>0$ and $U=\bigcup_{\alpha<\lambda}M_\alpha$. F1 gives a set structure with $M_\alpha\prec U$. It satisfies Extensionality because any one stage does and sentences transfer by elementarity. Apply F2 with $X=M=U$ to obtain its collapse $\pi:U\to\bar U$, and similarly obtain $\pi_\alpha:M_\alpha\to\bar M_\alpha$ for each stage. Their uniqueness permits Replacement to collect these maps. [F1, F2, given]

2.1 Define $j_{\alpha\beta}=\pi_\beta\circ\iota_{\alpha\beta}\circ\pi_\alpha^{-1}$ and $j_\alpha=\pi\circ\iota_\alpha\circ\pi_\alpha^{-1}$. The inverse and forward collapses are isomorphisms and the inclusions are elementary, so each composite is elementary by the satisfaction equivalences. Its codomain is the corresponding transitive collapse, not the original carrier. [F2, step 1.1]

3.1 For $\alpha\le\beta\le\gamma$, cancellation gives $j_{\beta\gamma}j_{\alpha\beta}=\pi_\gamma\iota_{\beta\gamma}(\pi_\beta^{-1}\pi_\beta)\iota_{\alpha\beta}\pi_\alpha^{-1}=j_{\alpha\gamma}$. The same calculation gives $j_\beta j_{\alpha\beta}=j_\alpha$, and $j_{\alpha\alpha}$ is the identity. This proves coherence without identifying any composite with a literal inclusion. [step 2.1, algebra] ∎
