---
id: lem-computation-history-domino-encoding
kind: lemma
title: "Accepting computation histories can be encoded by modified-PCP domino matches"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-modified-post-correspondence-problem, def-effective-encoding-of-turing-machines, def-halting-computation-and-divergence, prop-valid-computation-histories-are-decidable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare, Lecture 10: Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/"
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
    - title: "Chris Pollett, CS 154: PCP and Rice's Theorem"
      url: "https://www.cs.sjsu.edu/faculty/pollett/154.13.13s/Lec01052013.html"
---

## Statement

For every coded deterministic one-tape Turing machine $M$ and every input word
$w$, one can effectively construct a modified-PCP instance $P_{M,w}$ such that
$P_{M,w}$ has a match if and only if $M$ has an accepting computation history
on $w$. The construction may be chosen so that every match spells a
separator-delimited accepting history before its forced cleanup suffix and
uses only start, copier, local-transition, boundary-extension,
accepting-cleanup, and terminal tiles.

## Facts & Assumptions

**Given:** A coded deterministic one-tape Turing machine $M$ and an input word $w$.

[L1] A modified-PCP solution is a PCP match that starts with the designated first domino, by [[def-modified-post-correspondence-problem]].

[L2] $M$ accepts $w$ exactly when $M$ has an accepting computation history on $w$, by [[def-halting-computation-and-divergence]].

[L3] The chosen machine coding is effective and gives one finite transition table and one chosen start configuration for the pair $(M,w)$, by [[def-effective-encoding-of-turing-machines]].

[L4] For a fixed machine-input pair, accepting computation histories admit an effective configuration coding and form a decidable language, by [[prop-valid-computation-histories-are-decidable]].

## Proof

**Proof technique:** direct.

1.1 For a concrete version of the effective configuration coding in [L4], tag the finite state and tape alphabets disjointly. For $C=(q,h,t)$ and any padding bound $r\ge\max(\{h\}\cup\operatorname{supp}(t))$, put $a_i:=t(i)$ and encode the padded representative as $$ \widetilde C^{(r)}:=\triangleright a_0\cdots a_{h-1}qa_h\cdots a_r, $$ where $\triangleright$ is a fresh left-end marker. This word contains exactly one state symbol and decodes unambiguously to $C$ even when some final $a_i$ are blank; different amounts of trailing blank padding may represent the same configuration. We also permit the right-blank abbreviation $\triangleright a_0\cdots a_{h-1}q$ when $t(h)=\sqcup$ and every cell from $h$ onward is blank; it records the same configuration with the scanned blank left implicit. Adjoin a second fresh symbol `#` as a block separator. Starting with the least explicit bound for $C_0$, the intended history prefix has the form $$ \#\widetilde C_0^{(r_0)}\#\widetilde C_1^{(r_1)}\#\cdots\#\widetilde C_t^{(r_t)}\#. $$ [L3, L4, given, construct]

2.1 Write a domino as $(u,v)$ with top word $u$ and bottom word $v$. Let $P_{M,w}$ contain the designated start domino $$ (\#,\ \#\widetilde C_0^{(r_0)}\#). $$ Add copier dominoes $(c,c)$ for $c\in\Gamma\cup\{\triangleright,\#\}$, but not for state symbols. For every transition $\delta(q,a)=(r,b,R)$ add $(qa,br)$. Add the boundary-padding domino $(\#,\sqcup\#)$: it supplies the newly scanned blank when a right move passes the last displayed tape cell, and otherwise merely permits one additional trailing blank in the next padded representative. For every $\delta(q,a)=(r,b,L)$ and $c\in\Gamma$ add $(cqa,rcb)$, and add the separate clamped-left domino $(\triangleright qa,\triangleright rb)$. Finally, for each $c\in\Gamma\cup\{\triangleright\}$ add the accepting-cleanup dominoes $(c q_{\mathrm{acc}},q_{\mathrm{acc}})$ and $(q_{\mathrm{acc}}c,q_{\mathrm{acc}})$, and add the terminal domino $(q_{\mathrm{acc}}\#\#,\#)$. These are finitely many pairs of nonempty words and are computed directly from the finite alphabet, transition table, and start configuration in [L3]. [L1, L3, step 1.1, construct]

3.1 If $M$ has an accepting history $C_0,C_1,\dots,C_t$, choose padding bounds recursively. Having chosen $r_j$, keep the same bound for $C_{j+1}$ unless a right move from cell $r_j$ requires $r_{j+1}=r_j+1$; in particular, retain a now-trailing blank when a left move erases the last nonblank cell. Begin with the start domino. For each $C_j\vdash_M C_{j+1}$, use copier dominoes up to the head window, the unique right-, interior-left-, or clamped-left transition domino from step 2.1 at that window, copier dominoes after it, and then $(\#,\#)$ if $r_{j+1}=r_j$ or $(\#,\sqcup\#)$ if $r_{j+1}=r_j+1$. At every separator the top row has thereby copied $\widetilde C_j^{(r_j)}\#$ while the bottom row has appended $\widetilde C_{j+1}^{(r_{j+1})}\#$, so the bottom remains exactly one padded configuration block ahead. In the final accepting block, repeated whole-block passes use copiers together with $(c q_{\mathrm{acc}},q_{\mathrm{acc}})$ to delete the symbol immediately left of the accepting state, or with $(q_{\mathrm{acc}}c,q_{\mathrm{acc}})$ to delete the symbol immediately right of it. These passes eventually leave the one-block lag $q_{\mathrm{acc}}\#$, which the terminal domino closes because its top is $q_{\mathrm{acc}}\#\#$ and its bottom is `#`. The two full concatenations are then equal, giving a modified-PCP match. [L1, L2, step 1.1, step 2.1, construct]

3.2 Conversely, let a modified-PCP match be given. Its first domino is the designated start domino by [L1], so the unmatched bottom suffix initially is exactly $\widetilde C_0^{(r_0)}\#$. Induct over the separators subsequently matched by the top row. Copier dominoes cannot copy a state symbol. Before $q_{\mathrm{acc}}$ appears, the unique state symbol in the current block must therefore be consumed by one transition domino from step 2.1. The symbol immediately before it distinguishes an interior left move from the special $\triangleright$-boundary move. All other tape symbols are copied, while the choice between $(\#,\#)$ and $(\#,\sqcup\#)$ either preserves the displayed length or adds one trailing blank. If a right move has put a nonaccepting state just beyond the last displayed cell, choosing $(\#,\#)$ would leave that state immediately before the separator, where no transition or cleanup top can consume it, so a complete match must choose the boundary-padding tile. If the new state is $q_{\mathrm{acc}}$, the shorter choice is precisely the right-blank abbreviation from step 1.1. Consequently every pre-cleanup bottom block decodes to the unique configuration $C_{j+1}$ with $C_j\vdash_M C_{j+1}$, although its harmless trailing-blank padding need not be unique. Cleanup dominoes contain $q_{\mathrm{acc}}$ and cannot begin this suffix before an accepting block has been reached; after they begin, their shorter bottom words and the terminal anchor can remove the remaining offset. Hence every match has a prefix decoding to an accepting computation history of the original machine $M$ on $w$. [L1, L2, step 1.1, step 2.1, induction]

4.1 Steps 3.1 and 3.2 prove that $P_{M,w}$ has a match if and only if $M$ has an accepting computation history on $w$. Step 2.1 constructs its finite domino list effectively from $(M,w)$. [step 2.1, step 3.1, step 3.2] ∎
