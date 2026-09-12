---
id: "rem-intermediate-models-and-complete-subalgebras"
kind: "remark"
title: "Orientation for intermediate models and complete subalgebras"
deps: ["def-complete-boolean-algebra-and-regular-open-sets", "thm-generic-extensions-satisfy-zf-and-zfc", "def-forcing-name-valuation-and-generic-extension"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Karagila, Forcing (2023), Definitions 2.28–2.33 and Propositions 2.30–2.32, Theorem 2.34, printed pp.11–13; explicit local argument"
      url: "https://karagila.org/files/Forcing-2023.pdf"
status: "draft"
origin: "pipeline"
---

## Remarks

Let M be a transitive ZF ground model. Suppose $B\subseteq C$ are nontrivial complete Boolean algebras in M and the inclusion $B\hookrightarrow C$ is a Boolean embedding preserving all joins computed in M. Thus it preserves zero, one, complements, finite meets and finite joins as well as those ground-model joins. This is the complete-subalgebra convention: completeness refers to ground subsets, not all external subsets. See [[def-complete-boolean-algebra-and-regular-open-sets]]. If H is M-generic for $C^+=C\setminus\{0\}$, then $G=H\cap B$ is M-generic for $B^+$ and

$$M\subseteq M[G]\subseteq M[H].$$

Here is the full argument for this direction. A Boolean forcing filter contains 1. If $b_0,b_1\in H\cap B$, directedness gives $c\in H$ below both. Their Boolean meet is above c, hence belongs to H by upward closure; it is nonzero and belongs to B. This proves directedness of G; nonemptiness and upward closure follow as well.

For any ground dense $D\subseteq B^+$, its join in B is 1: otherwise the nonzero complement of that join has a refinement $d\in D$, which would lie below both the join and its complement. The complete inclusion therefore makes its join in C also 1. For each nonzero $c\in C$, some $d\in D$ has $c\wedge d\ne0$. If all those meets were zero, c would lie below every $\neg d$, hence below the complement of their join, namely zero. Thus $E=\{e\in C^+:\exists d\in D\ (e\le d)\}$ is a ground dense set in $C^+$. H meets E, and upward closure puts the corresponding d in H. So G meets D, proving genericity without any maximal-antichain selection or AC.

Each $B^+$-name is also a $C^+$-name. Induction on its subname relation shows that its value by G equals its value by H: every coefficient belongs to B, and therefore belongs to G exactly when it belongs to H; the induction hypothesis identifies all selected subname values. The definition [[def-forcing-name-valuation-and-generic-extension]] now gives $M[G]\subseteq M[H]$. The ground inclusion and ZF model assertions follow from [[thm-generic-extensions-satisfy-zf-and-zfc]], using its choice-free branch. If M satisfies AC, its separately qualified branch gives ZFC for both extensions. A complete subalgebra equal to C gives G=H; the two-element subalgebra gives the trivial generic and intermediate model M.

The converse claim that every intermediate model arises from a complete subalgebra is not asserted here. It requires a different theorem. In particular this argument does not infer that the inclusion $B^+\to C^+$ has dense range.
