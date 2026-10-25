---
id: "thm-generic-extensions-satisfy-zf-and-zfc"
kind: "theorem"
title: "Generic extensions satisfy ZF and preserve ground-model Choice"
deps: ["thm-forcing-theorem", "thm-generic-extension-transitivity-and-rank-bound", "lem-names-for-pairs-functions-and-ordinals", "thm-check-name-evaluation-and-generic-reconstruction", "def-axiom-of-choice", "thm-well-ordering-theorem", "lem-cardinality-of-a-well-orderable-set"]
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

In ambient ZF, let M be a transitive ZF model, P a nonempty forcing preorder in M, and G M-generic. Then M[G] is a transitive ZF model, $M\subseteq M[G]$, and $G\in M[G]$. If in addition $M\models\mathrm{AC}$, then $M[G]\models\mathrm{AC}$. The ZF branch needs neither ambient nor ground-model Choice; the ZFC branch uses AC only inside M to well-order a set of names.

## Facts & Assumptions

**Given:** M, P and G as stated. All collections of names below are formed internally in M; all target separation and replacement claims are for fixed formulas and their name parameters.

[F1] [[thm-forcing-theorem]] gives internally definable forcing and both directions of the truth lemma.

[F2] [[thm-generic-extension-transitivity-and-rank-bound]] gives transitivity of M[G].

[F3] [[lem-names-for-pairs-functions-and-ordinals]] gives $S(T)=T\times P$ with value $\{\tau_G:\tau\in T\}$, names for pairs and indexed valuation graphs.

[F4] [[thm-check-name-evaluation-and-generic-reconstruction]] gives $M\subseteq M[G]$, $G\in M[G]$, and all ground checks.

[F5] [[def-axiom-of-choice]] specifies the optional ground-model axiom.

[F6] [[thm-well-ordering-theorem]] well-orders a set using AC; here it is used only inside M in the optional branch.

[F7] [[lem-cardinality-of-a-well-orderable-set]] clause (a) gives an ordinal bijection for an already well-orderable set, without further Choice.

## Proof

1.1 F2 and F4 give transitivity and the stated containments. Empty Set and Infinity hold since the actual empty set and omega belong to M and hence to M[G]. Extensionality holds in a transitive domain: every member of either set is in that domain. For Foundation, any nonempty $x\in M[G]$ has an ambient membership-minimal $y\in x$; transitivity puts y in M[G], and $y\cap x=\varnothing$ remains true there. F3 constructs an unordered pair name $S(\{\sigma,\tau\})$, giving Pairing. [F2, F3, F4]

1.2 For Separation, let $a=\sigma_G$ and let $\vec b=\vec\tau_G$ be the parameters of a fixed formula $\varphi$. Put $T=\operatorname{dom}(\sigma)$ and form in M the name $\eta=\{\langle\rho,p\rangle\in T\times P:p\Vdash^M(\rho\in\sigma\land\varphi(\rho,\vec\tau))\}$. It is a set by internal Separation using definability in F1. A member of its value satisfies the displayed conjunction by the truth lemma. Conversely any $x\in a$ has a representative $\rho\in T$; if $\varphi(x,\vec b)$ holds, the truth lemma supplies a p in G for that conjunction. Hence $\eta_G=\{x\in a:M[G]\models\varphi(x,\vec b)\}$, proving every Separation instance. [F1, F3]

2.1 For Union, for $a=\sigma_G$ form $T=\bigcup_{\rho\in\operatorname{dom}(\sigma)}\operatorname{dom}(\rho)$ in M. F3 gives $u=S(T)_G\in M[G]$. If $z\in y\in a$, valuation first gives a subname $\rho$ of sigma for y and then a subname of rho for z, so $z\in u$. Separation from step 1.2, with predicate $\exists y\in a\ (z\in y)$, cuts out exactly $\bigcup a$ from u. [F3, step 1.2]

2.2 For Replacement, suppose a fixed formula $\varphi(x,y,\vec b)$ defines exactly one y for every $x\in a=\sigma_G$. For each $(\rho,p)\in\operatorname{dom}(\sigma)\times P$, define in M $\gamma(\rho,p)$ to be the least ordinal $\gamma$ for which some name $\tau\in V_\gamma^M$ has $p\Vdash^M\varphi(\rho,\tau,\vec\tau)$; put it equal to zero if there is no such name. This is a definable ordinal function, so internal Replacement gives an ordinal $\delta$ strictly above every such $\gamma$. Internal Separation forms the set U of names in $V_\delta^M$. F3 gives $u=S(U)_G\in M[G]$. Given $x\in a$ and its unique y, choose a representing subname rho for x and any name for y. F1 gives p in G forcing the matrix. By the definition of the least rank, there is a witnessing name in U forced by that same p; F1 and uniqueness identify its value with y. Thus u contains every output. Separation using $\exists x\in a\ \varphi(x,y,\vec b)$ gives the exact range. Only least ranks were collected, never a chosen name from each witness class. [F1, F3, step 1.2]

2.3 For Power Set, put $T=\operatorname{dom}(\sigma)$ for $a=\sigma_G$ and form $Q=\mathcal P(T\times P)^M$ in M. Every element of Q is a name, so $u=S(Q)_G$ belongs to M[G]. If $y\in M[G]$ and $y\subseteq a$, choose a name eta for y and form $\theta=\{\langle\rho,p\rangle\in T\times P:p\Vdash^M\rho\in\eta\}\in Q$. By F1 its value is contained in y. Conversely a member x of y is in a and has a representative rho in T; the truth lemma supplies p in G forcing its membership in eta, so x is in $\theta_G$. Thus $y=\theta_G\in u$. Separation of u by $y\subseteq a$ now gives exactly the internal power set of a. This uses only M's subsets of $T\times P$, not its external power set. [F1, F3, step 1.2]

3.1 The preceding steps give every axiom of ZF: the elementary axioms, Union, each Separation and Replacement instance, and Power Set. The target instances were derived from fixed internal forcing predicates; no truth predicate for M[G] was assumed inside M. This establishes the entire ZF branch. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3]

4.1 Assume now, only for this branch, that M satisfies AC. Given $a=\sigma_G$, F5–F7 inside M provide a bijection $h:\xi\to\operatorname{dom}(\sigma)$ for some ordinal xi; this is the exact use of ground-model AC. F3 constructs in M a graph name whose value in M[G] is the function $f(i)=h(i)_G$ on xi. Its range covers a. In the ZF model from step 3.1, for each $x\in a$ the nonempty fibre $\{i<\xi:f(i)=x\}$ has a least ordinal. Least fibres inject a into xi and well-order a. For a family of nonempty sets in M[G], apply this to its union and take the least member of each family member; target Replacement yields the choice function. Empty a and the empty family need only the empty maps. Thus M[G] satisfies AC, with no ambient AC assumption. [F3, F5, F6, F7, step 3.1] ∎
