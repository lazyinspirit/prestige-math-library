---
id: cex-constant-presheaf-not-sheaf-disconnected-open
kind: counterexample
title: "The constant presheaf need not be a sheaf on a disconnected open set"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-presheaf-on-topological-space, def-sheafification, def-presheaf-plus-construction, ex-sheaf-locally-constant-functions]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Definition 3.2"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "The Stacks Project, Sheaves on Spaces, Definition 7.4"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement refuted

Fix a set $A$ with distinct elements $a\neq b$. The constant presheaf
$\underline A_{\mathrm{pre}}$ on a space $X$, defined by
$$\underline A_{\mathrm{pre}}(U)=\begin{cases}A,&U\ne\varnothing,\\ \{*\},&U=\varnothing.\end{cases}$$
with identity restrictions between nonempty opens and the unique restriction
to the empty open, is always a sheaf.

## Facts & Assumptions

**Given:** A space $X$ containing a disconnected open set $U=U_1\sqcup U_2$ with $U_1,U_2\neq\varnothing$, and a set $A$ with $a\neq b$.

[F1] Identity restriction maps define a presheaf on $X$ ([[def-presheaf-on-topological-space]]).

[F2] The sheafification $a\mathcal F$ of a presheaf is defined by the double plus construction ([[def-sheafification]]).

[F3] The plus construction identifies germ-compatible local presentations when their germs agree at every point ([[def-presheaf-plus-construction]]).

[L1] Locally constant $A$-valued functions form a sheaf ([[ex-sheaf-locally-constant-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F1], $\underline A_{\mathrm{pre}}$ is a presheaf. On the disjoint cover $U=U_1\cup U_2$, choose the local sections $s_1:=a\in\underline A_{\mathrm {pre}}(U_1)$ and $s_2:=b\in\underline A_{\mathrm{pre}}(U_2)$. Both restrict to the unique element of $\underline A_{\mathrm{pre}}(\varnothing)$, so the pair is compatible on $U_1\cap U_2=\varnothing$. [F1, given, construct]

2.1 A glued section over $U$ would have to be an element $s\in A$ whose restrictions to the two nonempty opens are $a$ and $b$. Those restriction maps are identities, so this would force $s=a=b$, contradicting the choice $a\neq b$. Therefore $\underline A_{\mathrm{pre}}$ is not a sheaf. [step 1.1, given]

3.1 Write $P=\underline A_{\mathrm{pre}}$. At any point $x$, two constant sections on neighbourhoods of $x$ have equal germs exactly when their values in $A$ agree: restriction to a smaller neighbourhood is the identity. Thus a germ-compatible presentation for $P^+(V)$ assigns a constant value on each nonempty chart, with equal values wherever two charts meet. These values define a locally constant function on $V$. Equivalent presentations define the same function, and presentations defining the same function are equivalent pointwise. Every locally constant function has such a presentation by constant neighbourhoods. For $V=\varnothing$, all presentations are equivalent and correspond to the unique empty function. These bijections commute with restriction, so $P^+\cong\underline A_{\mathrm{loc}}$. [F3, given, step 2.1, construct]

4.1 For any sheaf $G$, germ-compatible local sections agree on each overlap: equality of germs gives equality on a neighbourhood of each point, and sheaf locality gives equality on the whole overlap. They therefore glue uniquely to a section of $G(V)$. This gluing identifies $G^+(V)$ with $G(V)$, including the empty open, naturally in $V$. Apply this to the sheaf $G=\underline A_{\mathrm{loc}}$ from [L1]. Step 3.1 then gives $aP=P^{++}\cong(\underline A_{\mathrm{loc}})^+\cong\underline A_{\mathrm{loc}}$; the single-chart unit sends a constant section to its constant function. [F2, F3, L1, step 3.1] ∎
