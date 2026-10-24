---
id: lem-models-of-coded-zf-are-infinite
kind: lemma
title: "Every set model of first-order ZF has infinitely many elements"
status: published
origin: pipeline
deps: [def-coded-first-order-zf-theory, thm-set-structure-satisfaction-recursion, thm-recursion, thm-induction-principle, lem-pigeonhole, lem-nat-trichotomy]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Published ZF axiom definitions, exactly translated in def-coded-first-order-zf-theory; Moschovakis Definition 1G.12, pp.33–34, and Definition 1A.5, pp.3–4, for comparison; local infinitude argument uses the published successor-form Infinity."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

If a nonempty set structure $\mathcal M=(M,E)$ satisfies $T_{\mathrm{ZF}}$, its external carrier $M$ is infinite. No transitivity or external well-foundedness of $E$ is assumed. In fact the proof constructs an external injection $\omega\to M$.

## Facts & Assumptions

**Given:** Work in the external metatheory ZF, with $\mathcal M\models T_{\mathrm{ZF}}$.

[F1] $T_{\mathrm{ZF}}$ includes the exact Extensionality, Pairing, Infinity and Foundation sentences displayed in its definition. ([[def-coded-first-order-zf-theory]])

[F2] Satisfaction interprets equality literally and all quantifiers over the carrier, using the interpreted relation for each atomic membership formula. ([[thm-set-structure-satisfaction-recursion]])

[F3] A specified initial element and total function on a set yield a unique natural-number recursion. ([[thm-recursion]])

[F4] A subset of the naturals containing zero and closed under successor is all of the naturals. ([[thm-induction-principle]])

[F5] There is no injection from n+1 into n for any natural n. ([[lem-pigeonhole]])

[F6] Distinct natural numbers are strictly comparable. ([[lem-nat-trichotomy]])

## Proof

1.1 For $a\in M$, Pairing with both inputs $a$ gives $s\in M$ such that for all $t\in M$, $tEs$ iff $t=a$. Thus $aEs$, and $s$ has an $E$-member. Foundation applied inside $\mathcal M$ to $s$ gives $bEs$ with no $u\in M$ satisfying both $uEb$ and $uEs$. Necessarily $b=a$. If $aEa$, choosing $u=a$ would satisfy both relations, a contradiction. Therefore $aEa$ fails for every $a\in M$. This derives irreflexivity internally from actual axiom instances, without asserting that $E$ is externally well founded. [F1, F2]

1.2 Infinity gives $I,e\in M$ with $eEI$, with no $tEe$, and such that for every $yEI$ some $sEI$ has $tEs$ iff $(tEy\text{ or }t=y)$ for all $t\in M$. Extensionality makes this $s$ unique: any two choices have exactly the same $E$-members. Let $D=\{y\in M:yEI\}$. Separation forms $D$, which contains $e$, and the displayed unique-successor relation defines a total function $S:D\to D$ by Separation and Replacement. F3 yields an external sequence $x:\omega\to D$ with $x_0=e$ and $x_{n+1}=S(x_n)$. No sequence of arbitrary choices is taken. [F1, F2, F3]

2.1 For every $i<j<\omega$, $x_iEx_j$. To prove this, induct on $j$. There is nothing to check at $j=0$. At $j+1$, the successor clause gives $x_jEx_{j+1}$ via equality to $x_j$. If $i<j$, induction gives $x_iEx_j$, and the same clause gives $x_iEx_{j+1}$. These cases exhaust $i<j+1$. [F4, step 1.2]

3.1 If $i<j$ and $x_i=x_j$, step 2.1 would give $x_iEx_i$, contrary to step 1.1. Distinct naturals are comparable, so $i\ne j$ implies $x_i\ne x_j$. Thus $n\mapsto x_n$ is an injection $\omega\to D\subseteq M$, and $M$ cannot be finite: if a bijection $M\to n$ existed, its composition with the first $n+1$ sequence values would contradict F5. For each $n$, its first $n$ distinct values exhibit the finite lower bound $|M|\ge n$; at $n=0$ this is vacuous, and $x_0=e$ supplies the bound $1$. [step 1.1, step 1.2, step 2.1, F5, F6] ∎
