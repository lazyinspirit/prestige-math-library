---
id: "lem-forcing-truth-lemma"
kind: "lemma"
title: "Truth lemma"
deps: ["lem-forcing-monotonicity-density-and-decision", "def-forcing-name-valuation-and-generic-extension", "def-forcing-relation-for-atomic-formulas", "def-forcing-relation-for-formulas"]
justified_by: []
forward_refs: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let M be a transitive ZF ground model containing a nonempty forcing preorder P, and let G be M-generic. For each fixed membership formula $\varphi$ and names $\vec\tau\in M$,

$$M[G]\models\varphi(\vec\tau_G)\quad\Longleftrightarrow\quad\exists p\in G\ (p\Vdash^M\varphi(\vec\tau)).$$

No ambient or ground-model AC is needed. All forcing predicates in the proof are computed in M.

## Facts & Assumptions

**Given:** The transitive ZF ground model M, its forcing preorder, its generic G, and a fixed formula with finitely many name parameters.

[F1] [[lem-forcing-monotonicity-density-and-decision]] gives persistence, density closure, decision density, and meeting of ground dense sets below members of G.

[F2] [[def-forcing-name-valuation-and-generic-extension]] gives the valuation equation and represents every element of M[G] by a name in M.

[F3] [[def-forcing-relation-for-atomic-formulas]] gives subset, equality and membership clauses.

[F4] [[def-forcing-relation-for-formulas]] gives the formula-by-formula internally definable forcing predicates.

## Proof

1.1 First induct on the sorted pair of name ranks to prove the equivalence for equality. Suppose $p\in G$ forces $\sigma\subseteq\tau$, and $u_G\in\sigma_G$ comes from $\langle u,s\rangle\in\sigma$ with $s\in G$. Directedness gives $q\in G$ with $q\le p,s$. The set of $r\le q$ admitting $\langle v,t\rangle\in\tau$ with $r\le t$ and $r\Vdash u=v$ is in M by atomic definability and is dense below q by the subset clause. F1 gives such r in G; then t is in G, and equality induction on the two proper subnames gives $u_G=v_G\in\tau_G$. Applying this to both subset clauses proves the forward semantic implication from forced equality. [F1, F2, F3]

1.2 For the converse define $K_{\sigma,\tau}$ to consist of r for which some $\langle u,s\rangle\in\sigma$ satisfies $r\le s$ and there are no $a\le r$ and $\langle v,t\rangle\in\tau$ with $a\le t$ and $a\Vdash u=v$. The union of $K_{\sigma,\tau}$, $K_{\tau,\sigma}$ and the equality-forcing conditions is dense. Indeed, if p fails equality, one subset clause fails; its negation supplies an entry and $q\le p,s$ with no such further witness, putting q in the corresponding K. All these sets belong to M by Separation and atomic definability. [F3]

2.1 If $\sigma_G=\tau_G$, neither K meets G. For otherwise its witness u satisfies $u_G\in\sigma_G=\tau_G$, so some $\langle v,t\rangle\in\tau$ has $t\in G$ and $u_G=v_G$. Equality induction gives $b\in G$ forcing $u=v$. A common refinement in G of r,t,b still forces that equality by F1, contradicting r's K-condition. The reverse K is excluded identically with the names exchanged. Genericity applied to the dense union in step 1.2 therefore gives a condition in G forcing equality. The induction is legitimate in both equality directions because both names in each equality appeal are proper subnames. This establishes equality in both directions, including the empty-name base. [F1, F2, F3, step 1.1, step 1.2]

3.1 If $p\in G$ forces $\sigma\in\tau$, its dense set of coefficient/equality witnesses is in M; F1 gives $r\in G$ and $\langle v,t\rangle\in\tau$ with $r\le t$ and $r\Vdash\sigma=v$. Equality gives $\sigma_G=v_G\in\tau_G$. Conversely if $\sigma_G\in\tau_G$, choose such an entry with $t\in G$ and $\sigma_G=v_G$ by F2. Equality gives $b\in G$ forcing $\sigma=v$. A common refinement p of b and t lies in G; every extension of p is a membership witness by persistence. Thus p forces membership. [F1, F2, F3, step 2.1]

4.1 Induct on formula complexity. Conjunction forced by a member of G makes both conjuncts true by induction. Conversely, truth of both conjuncts gives two forcing conditions in G; their common refinement forces both. If $p\in G$ forces $\neg\psi$, truth of $\psi$ would give $b\in G$ forcing $\psi$ by induction, and a common refinement would contradict the negation clause. Conversely, if $\psi$ is false in M[G], G meets the ground decision set for $\psi$; its chosen condition cannot force $\psi$ by induction, hence forces $\neg\psi$. [F1, F4, step 3.1]

5.1 If $p\in G$ forces $\exists x\psi(x,\vec\tau)$, its ground set of witness-forcing conditions is dense below p. F1 supplies r in G and a name $\sigma\in M$ with $r\Vdash\psi(\sigma,\vec\tau)$. Induction gives a witness $\sigma_G$ in M[G]. Conversely a true existential has a witness $x=\sigma_G$ by F2; induction gives r in G forcing its matrix. Every stronger condition forces the same matrix by persistence, so r forces the existential by F4. Together with step 4.1 this finishes the formula induction and both directions of the assertion. Only finitely many refinements and existential witnesses were used at each argument, so no AC enters. [F1, F2, F4, step 4.1] ∎
