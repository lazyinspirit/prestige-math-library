---
id: thm-novikov-boone-undecidability-of-the-word-problem
kind: theorem
title: "Novikov boone undecidability of the word problem"
status: draft
origin: pipeline
deps: ["lem-normalized-fixed-halting-machine-for-boone-simulation", "thm-fixed-finite-semigroup-has-undecidable-terminal-equality", "def-boone-machine-semigroup-and-augmented-configurations", "def-boone-group-presentation-and-special-word", "thm-boone-special-word-equivalence", "def-word-problem-for-a-fixed-finite-presentation", "def-axiom-of-choice"]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, p.431, Theorem 12.8"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
    - title: "Stephen G. Simpson, A Slick Proof, Theorem 8, p.4 (independent fixed-presentation quantifier cross-check)"
      url: "https://sgslogic.net/t20/logic/seminar/050517.pdf"
---

## Statement

Assume AC. There exists a single finite presentation $\mathcal P_{\mathcal B}$ of a group $\mathcal B$ whose word problem is undecidable: no Turing machine halts on every signed word over its fixed finite generating alphabet and correctly decides whether the word represents identity.

## Facts & Assumptions

**Given:** The fixed normalized recognizer, positive semigroup $\Gamma$, and associated Boone presentation.

[F1] The language of inputs $w$ satisfying $C(w)=q$ in this fixed semigroup is undecidable. ([[thm-fixed-finite-semigroup-has-undecidable-terminal-equality]])

[F2] The Boone presentation is finite. A word $X^\#q_jY$ with positive tape contexts $X,Y$ is special, its associated positive word is $Xq_jY$, and its identity test is $W(\Sigma)=k\Sigma^{-1}t\Sigma k^{-1}\Sigma^{-1}t^{-1}\Sigma$. ([[def-boone-group-presentation-and-special-word]])

[F3] For every positive special word, $W(\Sigma)=1$ if and only if $\Sigma^*=q$. ([[thm-boone-special-word-equivalence]])

[F4] For a fixed finite presentation the word-problem input is a signed generator word and the question is identity in that group. ([[def-word-problem-for-a-fixed-finite-presentation]])

[F5] The semigroup construction introduces the tape marker $h$, the start state $q_{\rm start}$, and the initial word $C(w)=hq_{\rm start}v(w)h$; it also places $h$ in the subsequent tape alphabet $\bar S$. ([[def-boone-machine-semigroup-and-augmented-configurations]])

[F6] The fixed normalized machine uses $v(\varepsilon)=s_0$ and $v(w)=w$ for every nonempty binary word $w$. ([[lem-normalized-fixed-halting-machine-for-boone-simulation]])

[A1] Assume AC, inherited from the HNN normal-form proof. ([[def-axiom-of-choice]])

## Proof

1.1 Fix $\mathcal P_{\mathcal B}$ before reading any input. For binary $w$, compute $v(w)$ using [F6]: if the input is empty, write the single symbol $s_0$ in the finite-word encoding; otherwise copy the binary letters unchanged. Both branches terminate and give a nonempty positive tape word. Then write $\Sigma(w)=h^{-1}q_{\rm start}v(w)h$. By [F5], its positive contexts are $X=h$ and $Y=v(w)h$; by [F2], it is special and its associated positive word is exactly $C(w)$. In particular $\Sigma(\varepsilon)=h^{-1}q_{\rm start}s_0h$. [F1, F2, F5, F6, construct]

2.1 There is a finite-tape procedure computing $W(\Sigma(w))$. Store a delimited copy of $\Sigma(w)$. To copy it, mark each next uncopied source symbol, carry that symbol in finite control, scan to the output end, append it and return to the source; reset the marks after the copy. To copy its inverse, scan source symbols in reverse order and invert each signed letter by a fixed finite lookup. Repeat this for the four displayed copies, inserting the fixed letters $k,t,k^{-1},t^{-1}$. Each scan is between finite delimiters and each copy marks one previously unmarked position, so all loops terminate. Erase the source workspace and move the output left one symbol at a time by the same marking procedure. This produces a valid signed input word for the fixed presentation using a deterministic one-tape machine; no model-equivalence thesis is involved. [F2, F4, step 1.1, construct]

3.1 If a total decider $D$ of the word problem for $\mathcal P_{\mathcal B}$ existed, first run step 2.1 and then $D$ on its output. By [F3], its answer would be yes exactly when $C(w)=q$. The encoder terminates on every $w$, and the assumed decider terminates on every encoded word, so this would be a total decider of the language ruled out by [F1]. Hence no such $D$ exists. [F1, F3, F4, A1, step 1.1, step 2.1]

4.1 The generators and relation list are finite by [F2] and never depend on $w$. Step 3.1 therefore proves undecidability for one fixed presentation, as asserted, with AC used only through the group equivalence [F3]. [F2, step 3.1] ∎

## Source locator

Rotman, printed p.431, Theorem 12.8. Simpson, Theorem 8, p.4, independently confirms the fixed-presentation endpoint via a different machine construction. The reduction here uses the full conjugated-$t$ commutator; it does not use the shortened expression printed in Rotman's Corollary 12.9.
