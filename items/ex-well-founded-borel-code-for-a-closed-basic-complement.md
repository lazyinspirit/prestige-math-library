---
id: ex-well-founded-borel-code-for-a-closed-basic-complement
kind: example
title: "Evaluating elementary Borel codes"
status: draft
origin: pipeline
deps: ["def-well-founded-borel-evaluation-codes", "lem-well-founded-borel-code-evaluation"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definitions 7.1–7.2, pp62–63; examples derived directly from the local labelled-code convention"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Example

Fix a space $X$ with enumerated basis $(U_n)$ and $n\in\mathbb N$. The leaf$(n)$ code evaluates to $U_n$; a complement above that leaf evaluates to $X\setminus U_n$; an empty union evaluates to $\varnothing$; and a complement above an empty union evaluates to $X$. These calculations hold in ZF.

## Facts & Assumptions

[F1] Code nodes, their labels, and their well-foundedness requirement are in [[def-well-founded-borel-evaluation-codes]].

[F2] [[lem-well-founded-borel-code-evaluation]] provides unique evaluation in ZF by the three displayed rules.

## Verification

**Given:** $X$, $(U_n)$ and the fixed index $n$.

1.1 Let $T_1=\{\varnothing\}$ with root label leaf$(n)$. It is valid since it has no child and its empty relation is well-founded. F2 gives $E_1(\varnothing)=U_n$. For $T_2=\{\varnothing,(0)\}$ label the root complement and $(0)$ leaf$(n)$. Then $E_2((0))=U_n$ and $E_2(\varnothing)=X\setminus U_n$, which is closed because $U_n$ is open. [given, F1, F2]

1.2 On $T_3=\{\varnothing\}$ put a union label; then $E_3(\varnothing)=\bigcup\varnothing=\varnothing$. On $T_4=\{\varnothing,(0)\}$ put a complement at the root and a union at $(0)$. Then $E_4((0))=\varnothing$ and $E_4(\varnothing)=X\setminus\varnothing=X$. [F1, F2]

2.1 In each two-node tree the sole child is terminal; any subset containing it has it as a minimal element, and a remaining nonempty subset is the singleton root. Thus the child relation is well-founded, and the complement nodes have exactly child zero as required. All four codes are valid even when $X=\varnothing$ or $U_n$ is empty or all of $X$. The empty underlying tree is not one of these codes, because F1 requires a root. QED. [F1, step 1.1, step 1.2]
