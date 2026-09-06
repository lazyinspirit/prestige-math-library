---
id: lem-depth-at-a-prime-bounded-by-local-dimension
title: Depth at a prime is bounded by local support dimension
kind: lemma
status: published
origin: pipeline
deps: [def-regular-sequence-on-a-module, thm-dimension-and-parameters-for-modules, thm-krull-height-theorem, thm-depth-equals-maximal-regular-sequence-length]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
---
## Statement

Let $R$ be Noetherian, let $M$ be finite, and let
$\mathfrak p\in\operatorname{Supp}_R(M)$. Then
$$\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p) \le \dim\operatorname{Supp}_{R_\mathfrak p}(M_\mathfrak p).$$

## Facts & Assumptions

**Given:** $M_\mathfrak p$ is a nonzero finite module over the Noetherian local ring $R_\mathfrak p$.

## Proof

**Proof technique:** direct.

1.1 Put $A=R_{\mathfrak p}$. Let $N$ be a nonzero finite $A$-module and let $x$ in the maximal ideal be $N$-regular. Then $\operatorname{Supp}(N/xN)=\operatorname{Supp}(N)\cap V(x)$ by localization and Nakayama. A minimal prime $\mathfrak q$ of $\operatorname{Supp}(N)$ cannot contain $x$: otherwise $N_{\mathfrak q}$ has support only at the maximal ideal of $A_{\mathfrak q}$, so a power of $x$ annihilates it, contradicting injectivity on that nonzero localization. Any prime chain in $\operatorname{Supp}(N/xN)$ can therefore be extended downward by a strict inclusion from a minimal prime of $\operatorname{Supp}(N)$. Hence $\dim\operatorname{Supp}(N/xN)\le\dim\operatorname{Supp}(N)-1$. Conversely, lift a parameter tuple for $N/xN$ and prepend $x$. Its quotient has finite length, so `thm-dimension-and-parameters-for-modules` gives $\dim\operatorname{Supp}(N)\le1+\dim\operatorname{Supp}(N/xN)$. Thus the dimension drops exactly one, without any catenarity assumption. All dimensions are finite by that module-dimension theorem (ultimately the local height bound). [given, algebra]

2.1 Starting with $M_{\mathfrak p}$, every regular sequence of length $r$ has nonzero successive quotients by `def-regular-sequence-on-a-module`. Applying step 1.1 successively gives $r\le\dim\operatorname{Supp}_A(M_{\mathfrak p})$. Extending a sequence while possible must therefore stop, so a maximal sequence exists. The maximal ideal is the Jacobson radical, and Nakayama gives $\mathfrak pA M_{\mathfrak p}\ne M_{\mathfrak p}$. Thus `thm-depth-equals-maximal-regular-sequence-length` identifies its length with depth, proving the asserted inequality. This also handles dimension zero, when the maximal sequence is empty. [step 1.1, algebra] ∎
