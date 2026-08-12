---
id: ex-yoneda-embedding-of-the-walking-arrow-category
kind: example
title: "The Yoneda embedding of the walking-arrow category computed objectwise"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-yoneda-embedding, thm-yoneda-embedding-is-fully-faithful,
       def-category, def-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Definition 4.1.21 and Corollary 4.3.7"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Example

Let $\mathcal W$ be the walking-arrow category
$0\xrightarrow{u}1$. Its only morphisms are $1_0,u,1_1$. The Yoneda embedding
$y:\mathcal W\to[\mathcal W^{\mathrm{op}},\mathbf{Set}]$ has the table

$$\begin{array}{c|cc|c} & 0 & 1 & u^{\mathrm{op}}:1\to0\\ \hline y(0)=\mathcal W(-,0) & \{1_0\} & \varnothing & \varnothing\to\{1_0\}\\ y(1)=\mathcal W(-,1) & \{u\} & \{1_1\} & 1_1\mapsto u \end{array}$$

and $y(u):y(0)\Rightarrow y(1)$ has components $1_0\mapsto u$ at $0$ and the
empty function at $1$.

## Facts & Assumptions

**Given:** The category $\mathcal W$ with the two objects and three morphisms displayed above.

[F1] A category has identity morphisms, associative composition, and the two identity laws ([[def-category]]).

[F2] For a small category, the Yoneda functor sends $a$ to $\mathcal W(-,a)$ and $h:a\to b$ to postcomposition $\mathcal W(-,h)$ ([[def-yoneda-embedding]]).

[L1] The Yoneda functor is fully faithful: postcomposition gives a bijection $\mathcal W(a,b)\cong\operatorname{Nat}(y(a),y(b))$ ([[thm-yoneda-embedding-is-fully-faithful]]).

[F3] A function gives one value for each domain element; no function has a nonempty domain and empty codomain, while there is exactly one empty function ([[def-function]]).

## Verification

**Proof technique:** direct.

1.1 The hom-sets are $\mathcal W(0,0)=\{1_0\}$, $\mathcal W(0,1)=\{u\}$, $\mathcal W(1,1)=\{1_1\}$, and $\mathcal W(1,0)=\varnothing$. These are exactly the four object values in the displayed table. [given]

2.1 A presheaf represented by $a$ acts on $u^{\mathrm{op}}:1\to0$ by precomposition with $u$. For $a=0$ this is the empty function $\varnothing\to\{1_0\}$; for $a=1$ it sends $1_1$ to $1_1\circ u=u$ by [F1]. [step 1.1, F1, F2, F3]

2.2 By [F2], $y(u)$ is postcomposition with $u$. At $0$ it sends $1_0$ to $u\circ1_0=u$, and at $1$ it is the unique empty function. This proves the asserted component table, including the empty hom-set. [step 1.1, F1, F2]

3.1 There is one natural transformation $y(0)\Rightarrow y(0)$ and one $y(0)\Rightarrow y(1)$, namely the identity and $y(u)$. There is no transformation $y(1)\Rightarrow y(0)$ because its component at $1$ would be a function $\{1_1\}\to\varnothing$, forbidden by [F3]. [step 1.1, step 2.1, step 2.2, F3]

4.1 A transformation $y(1)\Rightarrow y(1)$ has forced singleton-to-singleton components, and the naturality square commutes by [F1], so it is the identity. Hence the four natural-transformation sets have the same empty-or-singleton table as the four hom-sets, exactly as [L1] asserts. [step 1.1, step 2.1, step 3.1, F1, L1]

5.1 Composition in the image has only the identity composites and $y(u)$ composed with an identity; by [F1] and step 2.2 these reproduce the composition of $1_0,u,1_1$ in $\mathcal W$. [step 2.2, step 4.1, F1] ∎
