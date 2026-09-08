---
id: lem-henkin-term-equality-congruence
kind: lemma
title: "Provable equality is a congruence on closed terms"
status: published
origin: pipeline
deps: [lem-complete-henkin-theory-truth-rules, lem-hilbert-propositional-and-equality-rules]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemma 1I.5 Sublemmas 1–4, pp41–43; closed-term and full-formula congruence adaptation."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, let $H$ be a consistent deductively closed complete Henkin sentence theory with a seed constant. On its closed terms put $s\sim t$ iff $(s=t)\in H$. This is an equivalence relation. Every function symbol respects it, and every relation's atomic-sentence membership in $H$ is independent of representatives. More generally closed instances of any formula obtained by equal closed-term substitutions have the same membership in $H$ (and the corresponding implication is provable even if other free variables remain).

## Facts & Assumptions

**Given:** Such a theory $H$; every term used as a representative is closed.

[F1] $H$ obeys Boolean closure and retains its sentence consequences. ([[lem-complete-henkin-theory-truth-rules]])

[F2] Reflexivity, symmetry, transitivity and free-for formula equality substitution are derivable. ([[lem-hilbert-propositional-and-equality-rules]])

## Proof

1.1 Reflexivity proves $s=s$, so closure puts it in $H$. If $s=t$ belongs to $H$, symmetry proves $t=s$, which belongs to $H$. If $s=t,t=u$ belong, transitivity proves $s=u$, which belongs to $H$. These give precisely reflexivity, symmetry and transitivity of $\sim$. [F1, F2]

2.1 If $s\sim t$ and $\alpha$ is a formula, the terms $s,t$ are free for any variable $x$ because they have no free variables. Equality substitution and MP give $H\vdash\alpha[s/x]\to\alpha[t/x]$; symmetry gives the reverse implication. When the instances are sentences, closure and MP show their memberships in $H$ agree. If they retain other free variables, the same implication proofs remain valid without claiming that open formulas are members of $H$. [F1, F2, step 1.1]

3.1 Let $s_i\sim t_i$ for $1\le i\le n$. Replace the tuple entries in order, applying step 2.1 at one placeholder variable absent from all the other displayed terms and formulas. Closed substituted terms cannot introduce or capture a variable. At every replacement the two closed instances have the same membership; transitivity of logical equivalence proves this for the full tuple. This applies to $R(s_1,\ldots,s_n)$ and to arbitrary closed formula instances. For $n=0$ no replacement is performed and the formula is identical. [step 2.1]

4.1 For a function $f$, begin with the reflexive equation $f(\bar s)=f(\bar s)\in H$. Replace the entries in the right-hand occurrence alone in decreasing order $i=n,n-1,\ldots,1$, using the formula $f(\bar s)=f(s_1,\ldots,s_{i-1},z,t_{i+1},\ldots,t_n)$. At this stage the entries to its right have already been replaced and the entries to its left have not. Step 2.1 gives each successive equality, ending with $f(\bar s)=f(\bar t)\in H$. Thus the function outputs are equivalent. A constant is its own fixed class; if there are no function or relation symbols, the equivalence relation proof still applies. [F1, F2, step 2.1] ∎
