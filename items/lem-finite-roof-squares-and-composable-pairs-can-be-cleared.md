---
id: "lem-finite-roof-squares-and-composable-pairs-can-be-cleared"
kind: "lemma"
title: "Finite roof squares and composable pairs can be cleared"
deps: ["lem-composition-of-roofs-is-well-defined", "thm-the-calculus-of-fractions-constructs-the-localization"]
verification:
  audited: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05R1"
      title: "13.5.5–13.5.6, including all TR1–TR4 proof paragraphs"
    - url: "https://stacks.math.columbia.edu/tag/05Q3"
      title: "Lemma 4.27.10, complete proof including footnote common denominator construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $f:X\to Y$ and $f':X'\to Y'$ be ordinary arrows, and let $\alpha:QX\to QX'$, $\beta:QY\to QY'$ satisfy $\beta Qf=Qf'\alpha$. There exist $f'':X''\to Y''$, $k:X\to X''$, $l:Y\to Y''$, and denominators $s:X'\to X''$, $t:Y'\to Y''$, such that $f''k=lf$, $f''s=tf'$, $\alpha=Q(s)^{-1}Q(k)$, $\beta=Q(t)^{-1}Q(l)$. Moreover two composable localized arrows and their composite can simultaneously be represented by ordinary arrows after denominator isomorphisms of the three objects.

## Facts & Assumptions

**Given:** Let $f:X\to Y$ and $f':X'\to Y'$ be ordinary arrows, and let $\alpha:QX\to QX'$, $\beta:QY\to QY'$ satisfy $\beta Qf=Qf'\alpha$. There exist $f'':X''\to Y''$, $k:X\to X''$, $l:Y\to Y''$, and denominators $s:X'\to X''$, $t:Y'\to Y''$, such that $f''k=lf$, $f''s=tf'$, $\alpha=Q(s)^{-1}Q(k)$, $\beta=Q(t)^{-1}Q(l)$. Moreover two composable localized arrows and their composite can simultaneously be represented by ordinary arrows after denominator isomorphisms of the three objects.

[F1] Every localized arrow has either roof orientation, and equality of ordinary arrows is detected by a denominator ([[thm-the-calculus-of-fractions-constructs-the-localization]]).

[F2] Composition of roof classes is independent of representatives and is associative ([[lem-composition-of-roofs-is-well-defined]]).

## Proof

1.1 Write $\alpha=Q(s)^{-1}Q(k)$. The outgoing Ore square for $s,f'$ gives $t:Y'\to Y''$ in $S$ and $f'':X''\to Y''$ with $f''s=tf'$. Write $\beta=Q(q)^{-1}Q(i)$, and apply Ore to $t,q$ to find $r:Y''\to Y^{(3)}$ in $S$ and $j$ with $rt=jq$. Replace $f'',t$ by $rf'',rt$ and put $l=ji$. Then $\beta=Q(t)^{-1}Q(l)$ and the right square commutes. [F1, F2]

2.1 The localized commuting square now gives $Q(lf)=Q(f''k)$. Dual equality detection supplies $d$ in $S$ with $dlf=df''k$. Replace $l,f'',t$ by $dl,df'',dt$; both ordinary squares now commute and $dt\in S$. This proves the square assertion, including identity or coincident arrows. [F1, step 1.1, algebra]

3.1 For a composable pair $\alpha:QX\to QY$, $\beta:QY\to QZ$, write $\alpha=Q(s)^{-1}Q(f)$ with $s:Y\to Y'$ in $S$. Write $\beta Q(s)^{-1}=Q(t)^{-1}Q(g)$ with $t:Z\to Z'$ in $S$ and $g:Y'\to Z'$. Thus after the object comparisons $1_X,Q(s),Q(t)$ the pair is $Q(f),Q(g)$ and its composite is $Q(gf)$. The equalities follow from the proved composition law, not from an assumption about arbitrary diagrams. [F1, F2, algebra] ∎
