---
id: "ex-two-homology-theories-with-different-coefficient-groups"
kind: "example"
title: "Two homology theories with different coefficient groups"
deps: ["thm-singular-homology-satisfies-dimension-and-arbitrary-additivity", "thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Axioms for Homology, coefficient discussion p.161"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology, coefficient discussion p.161"
    - title: "Miller, Algebraic Topology I lecture notes, Definition 11.1, p.26"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf"
      locator: "Definition 11.1, p.26"
status: "draft"
origin: "pipeline"
proof_strategy: "Evaluate any putative equivalence at the point; Z and Z/2 are not isomorphic."
---

## Example

Singular homology with coefficients $\mathbb Z$ and with coefficients $\mathbb Z/2$ both satisfy the ordinary homology axioms on CW pairs. They are not naturally equivalent: the specified coefficient group is essential in uniqueness.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$. ([[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]])

[F2] For any two ordinary homology theories $h,k$ on all CW pairs and a specified coefficient isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence $h\to k$ normalized by $u$ and commuting with connecting homomorphisms. In particular, a theory with coefficient group $G$ is naturally equivalent to singular homology with coefficients $G$, normalized by $\mathrm{id}_G$. Arbitrary additivity is part of the hypotheses. ([[thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs]])

## Verification

1.1 Apply [F1] with $G=\mathbb Z$ and with $G=\mathbb Z/2$. Both yield ordinary theories, and their degree-zero groups at a point are respectively $\mathbb Z$ and $\mathbb Z/2$. [F1]

2.1 Any natural equivalence would in particular supply an isomorphism between these two groups at that point. No such isomorphism exists: every element of $\mathbb Z/2$ is annihilated by $2$, whereas $2\cdot1\ne0$ in $\mathbb Z$. The coefficient-isomorphism hypothesis of [F2] is therefore not satisfied, and its uniqueness assertion makes no equivalence claim for these two theories. [F2, step 1.1, algebra] ∎
