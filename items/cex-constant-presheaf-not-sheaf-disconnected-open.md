---
id: cex-constant-presheaf-not-sheaf-disconnected-open
kind: counterexample
title: "The constant presheaf need not be a sheaf on a disconnected open set"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-presheaf-on-topological-space, def-sheafification, ex-sheaf-locally-constant-functions]
proof_strategy: direct
verification:
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
$$\underline A_{\mathrm{pre}}(U)=A$$
for every open set $U$ and identity restriction maps, is always a sheaf.

## Facts & Assumptions

**Given:** A space $X$ containing a disconnected open set
$U=U_1\sqcup U_2$ with $U_1,U_2\neq\varnothing$, and a set $A$ with
$a\neq b$.

[F1] Identity restriction maps define a presheaf on $X$
([[def-presheaf-on-topological-space]]).

[F2] The sheafification $a\mathcal F$ of a presheaf is defined by the double
plus construction ([[def-sheafification]]).

[L1] Locally constant $A$-valued functions form a sheaf
([[ex-sheaf-locally-constant-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F1], $\underline A_{\mathrm{pre}}$ is a presheaf. On the disjoint cover $U=U_1\cup U_2$, choose the local sections $s_1:=a\in\underline A_{\mathrm {pre}}(U_1)$ and $s_2:=b\in\underline A_{\mathrm{pre}}(U_2)$. Because $U_1\cap U_2=\varnothing$, there is no overlap condition to check, so the pair is compatible. [F1, given, construct]

2.1 A glued section over $U$ would have to be an element $s\in A$ whose restriction to $U_1$ is $a$ and to $U_2$ is $b$. But every restriction map is the identity, so this would force $s=a=b$, contradicting the choice $a\neq b$. Therefore $\underline A_{\mathrm{pre}}$ is not a sheaf. [step 1.1, given]

3.1 The sheafification of $\underline A_{\mathrm{pre}}$ records exactly the data obtained by gluing constant local sections on an open cover, which is the same as an $A$-valued locally constant function. By [L1], that sheaf is $\underline A_{\mathrm{loc}}$, so [F2] identifies the locally constant sheaf as the sheafification of the constant presheaf. [F2, L1, step 2.1] ∎
