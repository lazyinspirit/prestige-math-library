---
id: lem-boone-semigroup-histories-detect-halting
kind: lemma
title: "Boone semigroup histories detect halting"
status: published
origin: pipeline
deps: ["def-boone-machine-semigroup-and-augmented-configurations"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.427\u2013428, Lemmas 12.3\u201312.4 (corrected augmented invariant)"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

For every binary word $w$, the initial word $C(w)$ equals $q$ in $\Gamma$ if and only if $T$ stops on $v(w)$.

## Facts & Assumptions

**Given:** The machine, semigroup and initial-word conventions above.

[F1] Equality in $\Gamma$ means a finite symmetric contextual derivation using the five transition and three cleanup families; augmented configurations allow empty right tape exactly at $q_0$. ([[def-boone-machine-semigroup-and-augmented-configurations]])

## Proof

1.1 A write replacement in either direction changes the state and its following scanned symbol, retaining the two outer markers and a nonempty right segment. Internal right swaps $q_a s_j s_\beta$ with $s_jq_b s_\beta$; both sides retain a scanned symbol. End right swaps $q_a s_jh$ with $s_jq_b s_0h$; the displayed $h$ must be the right outer marker, so the inverse deletes exactly the added blank and restores the earlier scanned cell. Internal left swaps $s_\beta q_a s_j$ with $q_b s_\beta s_j$; both sides have a scanned cell. End left swaps $hq_a s_j$ with $hq_b s_0s_j$; the displayed $h$ must be the left outer marker, and the inverse again restores a nonempty scanned segment. Since there is exactly one state letter, any applicable contextual transition occurs at that state. All five families therefore preserve augmented shape in both directions. [F1, given]

2.1 At $q_0$, erasing or inserting the first right tape letter via $q_0s=q_0$ preserves augmented shape, including the empty segment. The equation $s q_0h=q_0h$ applies exactly when the right segment is empty, removing or inserting the last left tape symbol. Finally $hq_0h=q$ changes exactly the whole word: the markers must be the two outer markers and there are no remaining tape symbols. Conversely $q$ occurs alone in the augmented domain and expands to $hq_0h$. Thus every symmetric derivation starting at $C(w)$ stays in the augmented domain. [F1, step 1.1]

3.1 At a nonstopping configuration the unique table entry fixes the instruction. The symbol adjacent to the moved side is either a tape symbol or the outer marker, so exactly one internal/end family applies. At $q_0$ with nonempty right tape the unique forward rule erases its first symbol. With empty right tape and nonempty left tape it erases the last left symbol. With both empty it sends $hq_0h$ to $q$, which has no successor. Thus the oriented graph on augmented configurations has at most one successor per vertex. Self-loops, if present, do not affect this assertion. [F1, step 1.1, step 2.1]

4.1 If $T$ stops, its finite description history gives the same transition replacements until $hUq_0Vh$. Erase the $|V|$ right symbols, then the $|U|$ left symbols, then use $hq_0h=q$. This constructs a finite derivation from $C(w)$ to $q$. [F1, step 3.1]

4.2 Conversely, suppose $C(w)=q$. Among finite derivations choose one of least length, $z_0=C(w),\ldots,z_n=q$. It has no repeated vertex or self-loop, since deleting the intervening segment would shorten it. The last edge is forward because $q$ has no successor. If any earlier edge were backward, there would be consecutive edges $z_{j-1}\leftarrow z_j\to z_{j+1}$. Uniqueness of the successor would give $z_{j-1}=z_{j+1}$, contrary to minimality. Every edge is therefore forward. The initial state is not $q_0$; reaching $q$ requires first reaching $q_0$, and before that first occurrence all edges are actual machine steps. Thus $T$ stops. Least length is a least natural number of a nonempty set; it uses no arbitrary choice. [F1, step 2.1, step 3.1]

5.1 Steps 4.1 and 4.2 prove the two implications. For empty input $v(w)=s_0$ supplies the scanned cell; for one-symbol input the end rules apply as specified. Empty cleanup segments were included explicitly, so these cases do not require a stronger invariant. [step 4.1, step 4.2] ∎

## Source locator

Rotman, printed pp.427–428, Lemmas 12.3–12.4; the graph argument here includes all cleanup vertices and both directions of each replacement.
