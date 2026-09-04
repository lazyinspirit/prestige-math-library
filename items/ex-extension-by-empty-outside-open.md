---
id: ex-extension-by-empty-outside-open
kind: example
title: "Sections on an open subset extended by the empty set outside it"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sheaf-on-topological-space]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 31"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Example

Fix an open subset $W\subseteq X$. Define a presheaf $\mathcal E_W$ on $X$ by
$$ \mathcal E_W(V)= \begin{cases} \{\ast\},&V\subseteq W,\\ \varnothing,&V\not\subseteq W. \end{cases} $$
Then $\mathcal E_W$ is a sheaf of sets on $X$. It is the simplest example of
data carried on an open subset and extended by no sections outside that subset.

## Facts & Assumptions

**Given:** An open subset $W\subseteq X$ and an open cover $V=\bigcup_{i\in I}V_i$.

[L1] A sheaf is a presheaf with locality and unique gluing on every open cover
([[def-sheaf-on-topological-space]]).

## Verification

**Proof technique:** direct.

1.1 If $V\subseteq W$, then every $V_i\subseteq W$ has the unique section $\ast$, and the only possible glued section on $V$ is again $\ast$. If $V\not\subseteq W$, choose $x\in V\setminus W$. Some cover member $V_i$ contains $x$, so $V_i\not\subseteq W$ and $\mathcal E_W(V_i)=\varnothing$. Hence there is no compatible family of local sections on this cover. In either case the gluing and uniqueness clauses in [L1] are satisfied. [L1, given]

2.1 Restriction maps are forced: from $\{\ast\}$ to $\{\ast\}$ they are the identity, and into $\varnothing$ there is only the empty function from $\varnothing$. Thus $\mathcal E_W$ is a presheaf, and step 1.1 shows it is a sheaf. [step 1.1, construct] ∎
