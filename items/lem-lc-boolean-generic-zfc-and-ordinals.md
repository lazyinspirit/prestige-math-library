---
id: lem-lc-boolean-generic-zfc-and-ordinals
kind: lemma
title: ZFC and ordinal preservation for supplied transitive Boolean generic extensions
status: draft
origin: pipeline
deps: [lem-lc-boolean-generic-truth, lem-lc-generic-boolean-ground-joins, def-boolean-valued-name-semantics, thm-check-name-evaluation-and-generic-reconstruction, thm-generic-extension-transitivity-and-rank-bound, lem-forcing-names-and-name-ranks-are-absolute, thm-ordinals-and-omega-are-absolute-in-transitive-models, lem-bounded-definitions-of-basic-set-operations, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila, Forcing, section 2 generic extensions; local explicit name proof of axiom preservation
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Assume ZFC. Let $M$ be a transitive set model of ZFC, let $\mathbb B\in M$ be internally complete and nontrivial, and supply an $M$-generic filter $G$ on $\mathbb B\setminus\{0\}$. Then the set structure $M[G]$ satisfies ZFC and has exactly the ordinals of $M$. Separation and Replacement are asserted formula by formula. Choice in $M$ is used to select a set of existential witness names and to well-order ground sets of subnames.

The assertion is conditional on the supplied transitive model and generic. It does not assert their existence, a forcing theorem for arbitrary possibly ill-founded models, or a formal consistency implication.

## Facts & Assumptions

**Given:** $M,\mathbb B,G$ as in the statement. Names have coefficients in all of $\mathbb B$, including zero; all name constructions below take place in $M$.

[F1] Each fixed formula is true of valuations exactly when its internal Boolean value belongs to $G$. ([[lem-lc-boolean-generic-truth]])

[F2] $G$ is a proper ultrafilter and selects ground joins and ground meets. ([[lem-lc-generic-boolean-ground-joins]])

[F3] Existential Boolean values are joins of the ground set of attained matrix values; each fixed value is definable. ([[def-boolean-valued-name-semantics]])

[F4] Ground check names evaluate correctly and put $M$ inside $M[G]$. ([[thm-check-name-evaluation-and-generic-reconstruction]])

[F5] $M[G]$ is transitive, and valuation rank is at most name rank. ([[thm-generic-extension-transitivity-and-rank-bound]])

[F6] Namehood and name ranks of names in $M$ are absolute. ([[lem-forcing-names-and-name-ranks-are-absolute]])

[F7] Ordinalhood is absolute for transitive domains; the ordinals in $M$ form an initial segment of the actual ordinals. ([[thm-ordinals-and-omega-are-absolute-in-transitive-models]])

[F8] Basic pair, union, function and order-encoding set operations have the bounded absolute graphs described by this supplier when their objects are present. ([[lem-bounded-definitions-of-basic-set-operations]])

[F9] AC in $M$ well-orders sets and chooses from set-indexed nonempty witness collections. ([[def-axiom-of-choice]])

## Proof

1.1 Put $N=M[G]$. By F5 it is transitive and by F4 it contains $M$. Extensionality holds in $N$: every member of either compared set is already in $N$, so agreement about all members in $N$ is actual agreement. Foundation holds as well: if $a\in N$ is nonempty, ambient Foundation gives $x\in a$ with $x\cap a=\varnothing$; transitivity puts $x$ in $N$, so this is the required witness there. The empty name evaluates to the empty set. The ground set $\omega$ belongs to $N$ by F4 and is an inductive set there: each actual finite successor and zero belong to $M$, and F8 identifies the needed finite-set relations. Thus Infinity holds. [F4, F5, F8]

1.2 For ground names $s,t$, the name $P(s,t)=\{\langle s,1\rangle,\langle t,1\rangle\}$ evaluates to the unordered pair of the valuations, since $1\in G$. Thus Pairing holds and $K(s,t)=P(P(s,s),P(s,t))$ names their Kuratowski ordered pair. For a name $t$, form $u=\{\langle v,b\wedge c\rangle:\exists s\ (\langle s,b\rangle\in t\ \land\ \langle v,c\rangle\in s)\}$. The entries form a set in $M$ by Replacement and Union. Its valuation consists exactly of the members of members of the valuation of $t$: meet membership is equivalent to both coefficient memberships by F2. Hence Union holds. Zero coefficients contribute nothing to either construction. [F2, F8]

1.3 Fix a formula $\varphi(x,\vec z)$ and ground names $t,\vec r$. The name $s=\{\langle u,b\wedge\|\varphi(u,\vec r)\|^M\rangle:\langle u,b\rangle\in t\}$ is a set in $M$ by fixed-formula definability and Replacement. F1 and F2 show that its valuation is exactly $\{x\in\operatorname{val}_G(t):N\models\varphi(x,\operatorname{val}_G(\vec r))\}$. Indeed, a selected pair gives both membership in the original set and truth of the formula, and every member of that set has a selected subname pair in $t$ that gives the converse. Thus every Separation instance holds, with all parameters in $N$ allowed by their names. [F1, F2, F3]

1.4 For a name $t$, let $D$ be its set of first-coordinate subnames and put $d_u=\bigvee\{b:\langle u,b\rangle\in t\}$ for $u\in D$. F2 implies $\operatorname{val}_G(t)=\{\operatorname{val}_G(u):u\in D,\ d_u\in G\}$. For each $v\in(\mathbb B^D)^M$, form $t_v=\{\langle u,d_u\wedge v_u\rangle:u\in D\}$. Every valuation of $t_v$ is a subset of the valuation of $t$. Conversely, if $a\in N$ is such a subset, take one name $r$ for $a$ and define the ground vector $v_u=\|u\in r\|^M$. F1 makes the valuation of $t_v$ exactly $a$, including where different subnames have the same valuation. Thus $\{\langle t_v,1\rangle:v\in(\mathbb B^D)^M\}$ names exactly the collection of all subsets of $\operatorname{val}_G(t)$ present in $N$. This proves Power Set inside $N$, not the assertion that all external subsets belong to $N$. [F1, F2, F3]

1.5 If $\alpha$ is an ordinal in $N$, F5 and F7 make it an actual ordinal. Choose a name $t\in M$ with value $\alpha$. Its name rank $\gamma$ lies in $M$ and agrees internally and externally by F6. F5 gives $\operatorname{rank}(\alpha)\le\gamma$. The actual rank of an ordinal is itself, by induction from the rank recursion, so $\alpha\le\gamma$. Every ordinal at most $\gamma$ belongs to $M$, by transitivity and $\gamma\in M$. Thus $\alpha\in M$. Conversely every ordinal of $M$ belongs to $N$ by F4 and is an ordinal there by F7. The two structures therefore have exactly the same ordinals. [F4, F5, F6, F7]

2.1 We justify the set of witnesses needed for Replacement before constructing its name. Fix a formula $\varphi(x,y,\vec z)$ and names $t,\vec r$. For each subname $u\in D$ as in step 1.4, internal Separation forms $S_u=\{b\in\mathbb B:\exists\text{ name }w\ (b=\|\varphi(u,w,\vec r)\|^M)\}$. The set of pairs $(u,b)$ with $b\in S_u$ belongs to $M$. Internal Collection supplies a set $W$ of names containing a witnessing $w$ for each such pair; equivalently, bound a witness for each pair by its least possible membership rank and use Replacement to obtain one common rank bound, then take all witnesses below that bound. Both procedures are theorems in the ground ZFC model, not assumptions about $N$. F9 now selects one witness $w_{u,b}$ from the nonempty subsets of this ground set $W$. F3 gives $\|\exists y\,\varphi(u,y,\vec r)\|^M=\bigvee S_u$. No set of all names and no Global Choice was used. [F3, F9, step 1.4]

3.1 Suppose in $N$ the formula $\varphi$ defines a total single-valued relation on $a=\operatorname{val}_G(t)$. Form the ground name $r=\{\langle w_{u,b},d_u\wedge b\rangle:u\in D,\ b\in S_u\}$. Every selected term has $d_u,b\in G$, so its valuation is a value $y$ of $\varphi$ at some $x\in a$, by F1. Conversely, given $x\in a$, choose $u\in D$ with value $x$ and $d_u\in G$ using step 1.4. Totality and F1 put $\bigvee S_u$ in $G$. F2 selects $b\in S_u\cap G$, and $w_{u,b}$ evaluates to the required value by F1 and uniqueness in $N$. Hence the valuation of $r$ is exactly the image set, proving Replacement. Replacing each output name $w_{u,b}$ by $K(u,w_{u,b})$ gives the graph of the function in $N$ as well. The empty domain yields the empty name. [F1, F2, step 1.2, step 1.4, step 2.1]

4.1 To prove Choice, fix any $a\in N$ and a ground name $t$ for it. By F9 enumerate the ground set $D$ of subnames by a ground ordinal $\delta$, writing $u_\xi$ for its entries, with no repetitions unless $D$ is empty, in which case $\delta=0$. The name $\{\langle K(\check\xi,u_\xi),1\rangle:\xi<\delta\}$ evaluates to the graph of a function $e$ on $\delta$ in $N$ by F4 and step 1.2. Its range contains $a$. By Separation and Replacement already proved, the domain $J=\{\xi<\delta:e(\xi)\in a\}$ and the assignment sending each $x\in a$ to the least $\xi\in J$ with $e(\xi)=x$ belong to $N$. Each fibre has an actual least ordinal; it is also least in $N$, since every ordinal below $\delta$ is in $M$ and the comparisons are actual membership. This embeds $a$ into the ground ordinal $\delta$ and gives a well-order of $a$ in $N$. For an arbitrary set $\mathcal F\in N$ of nonempty sets, apply this to its union, which exists by step 1.2; Replacement then assigns to each member of $\mathcal F$ its least element in that well-order. The resulting function is a choice function in $N$. Empty families give the empty function. Thus AC holds in $N$. [F4, F8, F9, step 1.2, step 1.3, step 3.1]

5.1 Steps 1.1–4.1 prove Extensionality, Foundation, Empty Set, Pairing, Union, Infinity, Power Set, every Separation and Replacement instance, and Choice. These are ZFC, so $N\models\mathrm{ZFC}$; step 1.5 gives ordinal preservation. All infinite name selections occurred in the set-indexed ground construction of step 2.1 and the ground well-ordering in step 4.1, under F9. The proof is a semantic theorem for the supplied transitive set model; no arithmetic statement Con was derived from this conditional premise. [F9, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 3.1, step 4.1, step 1.5] ∎
