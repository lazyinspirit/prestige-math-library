---
id: lem-lc-generic-boolean-ground-joins
kind: lemma
title: Generic Boolean filters select ground-model joins
status: published
origin: pipeline
deps: [def-dense-open-sets-and-model-generic-filters, def-forcing-preorder-compatibility-and-filter, def-complete-boolean-algebra-and-regular-open-sets, def-boolean-algebra-for-stone-duality]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila, Forcing, generic-filter definitions pp.2–4; local Boolean dense-set argument
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Work in ZF. Let $M$ be a transitive set model of ZF, let $\mathbb B\in M$ be a Boolean algebra which $M$ regards as complete and nontrivial, and let $G\subseteq\mathbb B\setminus\{0\}$ be an externally supplied $M$-generic forcing filter, ordered by the Boolean order. Then $G$ is a proper Boolean ultrafilter. For every $A\in M$ with $A\subseteq\mathbb B$,

$$\bigvee{}^M A\in G\quad\Longleftrightarrow\quad A\cap G\ne\varnothing,\qquad \bigwedge{}^M A\in G\quad\Longleftrightarrow\quad A\subseteq G.$$

The superscript indicates joins and meets computed in $M$. These conclusions apply to ground-model families only; $G$ itself need not be in $M$. No existence of $M$ or $G$, no external completeness of $\mathbb B$, and no form of Choice are assumed.

## Facts & Assumptions

**Given:** $M,\mathbb B,G$ as in the statement, with nonzero conditions stronger when smaller in the Boolean order.

[F1] A generic filter meets every ground-model dense subset of its forcing order; density is absolute for these transitive-model parameters. ([[def-dense-open-sets-and-model-generic-filters]])

[F2] A forcing filter is nonempty, upward closed and internally downward directed. ([[def-forcing-preorder-compatibility-and-filter]])

[F3] Completeness gives every ground set join and meet, with empty bounds zero and one, and meets defined by complementation of joins. ([[def-complete-boolean-algebra-and-regular-open-sets]])

[F4] The Boolean order and bounded distributive identities hold for all elements of the algebra. ([[def-boolean-algebra-for-stone-duality]])

## Proof

1.1 Every element of $\mathbb B$ and each of its Boolean operation values lies in $M$, by transitivity. The operation tables and their finite identities agree internally and externally. Since $G$ is nonempty and upward closed, $1\in G$; by its domain $0\notin G$. If $a,b\in G$, F2 gives a nonzero $r\in G$ below both. The Boolean meet bounds $r$ above and is nonzero, so $a\wedge b\in G$. Thus $G$ is a proper Boolean filter. [F2, F4]

1.2 Let $A\in M$ be a subset of $\mathbb B$ and set $a=\bigvee{}^M A$. This is also the least upper bound among the actual elements of $\mathbb B$: every candidate upper bound lies in $M$ and the bounding relation quantifies only over the identical sets $A$ and $\mathbb B$. Put $D=\{p\ne0:p\le\neg a\text{ or }\exists b\in A\ (p\le b)\}$, a set in $M$. To prove density, fix $p\ne0$. If $p\wedge a=0$, then $p\le\neg a$. If $p\wedge a\ne0$, some $b\in A$ satisfies $p\wedge b\ne0$: otherwise every $b\le\neg p$, making $a\le\neg p$ by leastness and contradicting this case. The nonzero meet $p\wedge b$ extends $p$ into $D$. Thus $D$ is dense. [F3, F4]

2.1 Fix $b\in\mathbb B$. The set $D_b=\{p\ne0:p\le b\text{ or }p\le\neg b\}$ belongs to $M$ by Separation. It is dense: if $p\wedge b\ne0$, this meet extends $p$ into $D_b$; otherwise distributivity gives $p\le\neg b$. F1 makes $G$ meet $D_b$, and upward closure implies $b\in G$ or $\neg b\in G$. Both cannot hold, since their meet is zero. Hence $G$ decides every element and is a proper ultrafilter. [F1, F2, F4, step 1.1]

2.2 If $a\in G$, meet $D$ using F1. A member of $G$ below $\neg a$ would contradict properness, so the meeting condition lies below some $b\in A$ and upward closure gives $b\in G$. Conversely $b\in A\cap G$ and $b\le a$ imply $a\in G$. This proves both join directions. If $A=\varnothing$, $a=0\notin G$ and $A\cap G=\varnothing$, as required. [F1, F2, step 1.1, step 1.2]

3.1 Put $d=\bigwedge{}^M A=\neg\bigvee{}^M\{\neg b:b\in A\}$. The complemented family belongs to $M$ by Replacement. If $d\in G$, every $b\in A$ is above $d$, so $A\subseteq G$. Conversely suppose $A\subseteq G$ but $d\notin G$. Step 2.1 puts $\neg d$ in $G$, and step 2.2 gives some $b\in A$ with $\neg b\in G$, contradicting $b\in G$. For empty $A$ this says $1\in G$; for singleton $A$ the equivalence is immediate. The only family to which join selection was applied is a member of $M$, so this proves no assertion for arbitrary external subsets of $G$. Every witness was used individually in an existence proof; no family of witnesses was selected. [F2, F3, step 1.1, step 2.1, step 2.2] ∎
