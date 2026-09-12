---
id: thm-bpi-equivalent-to-arbitrary-language-compactness
kind: theorem
title: BPI and arbitrary-language first-order compactness
status: published
origin: pipeline
deps: [lem-set-sized-parallel-henkinization-preserves-consistency, thm-bpi-equivalent-to-propositional-compactness, thm-set-language-first-order-soundness, thm-henkin-closed-term-truth-lemma, lem-consistent-sentence-decision, lem-hilbert-propositional-and-equality-rules, lem-derivation-finite-support-and-concatenation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic, Lemma 1H.12, p. 38, and Lemmas 1I.4–1I.5, pp. 40–43; local set-sized construction using propositional compactness"
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
---

## Statement

Over ZF, BPI is equivalent to semantic compactness for arbitrary set-sized first-order languages: every set of sentences whose finite subsets have nonempty set models has a nonempty set model. No well-ordering or countability assumption on the signature is imposed.

## Facts & Assumptions

[F1] [[lem-set-sized-parallel-henkinization-preserves-consistency]] expands a consistent set-language theory to a consistent theory $T_H$ in a set language $L_\infty$, with a seed constant and a witness implication for every existential sentence.

[F2] [[thm-bpi-equivalent-to-propositional-compactness]] gives compactness for arbitrary sets of propositional letters exactly under BPI.

[F3] [[thm-set-language-first-order-soundness]] says a sentence theory with a nonempty model is consistent, for any set signature.

[F4] [[thm-henkin-closed-term-truth-lemma]] gives a model of any consistent, complete, deductively closed Henkin theory with a seed, without a size restriction or global choice of representatives.

[F5] [[lem-consistent-sentence-decision]] permits adjoining one of a sentence and its negation while preserving consistency.

[F6] [[lem-hilbert-propositional-and-equality-rules]] supplies Boolean rules, including conjunction introduction/elimination, double negation and explosion; its proof also derives $\neg\bot$.

[F7] [[lem-derivation-finite-support-and-concatenation]] gives finite assumption support, weakening and substitution of proved sentence premises in proofs.

## Proof

**Given:** ZF. The forward implication assumes BPI; the reverse assumes semantic first-order compactness for all set-sized languages.

1.1 Under BPI, let $T$ be finitely satisfiable. If $T\vdash\bot$, F7 gives a finite $T_0\subseteq T$ proving $\bot$. Its assumed nonempty model contradicts F3. Thus $T$ is consistent, and F1 supplies $T_H$ and $L_\infty$ as stated there. Let $S$ be the set of all $L_\infty$-sentences. It is a set because sentences are finite strings on a set of symbols. [F1, F3, F7, given, algebra]

1.2 Separately, assume first-order semantic compactness. For propositional letters in a set $P$, take a language with one constant $c$ and unary predicates $R_p$ for $p\in P$. Translate $p$ to $R_p(c)$, commute with Boolean connectives, and translate true and false to $c=c$ and $\neg(c=c)$. A propositional valuation gives a structure on $\{0\}$ by $c=0$ and $R_p=\{0\}$ or $\varnothing$ according to the valuation. Structural induction on formulas shows its translated truths are exactly the propositional truths. Thus any finitely satisfiable propositional theory translates to a finitely satisfiable first-order theory. By the assumed compactness it has a nonempty model $M$. The function $p\mapsto 1$ exactly when $M\models R_p(c)$ is a valuation satisfying the original theory, by the same induction. F2 yields BPI. This also handles $P=\varnothing$ and empty theories: the one-point interpretations and empty valuation still exist. [F2, given, algebra]

2.1 Return to the consistent $T_H$ of step 1.1. Use one propositional letter $p_\sigma$ for each $\sigma\in S$. Form a propositional theory $\Delta$ with: $p_\tau$ for every $\tau\in T_H$; $\neg p_\bot$; $p_{\neg\sigma}\leftrightarrow\neg p_\sigma$; $p_{\sigma\land\rho}\leftrightarrow(p_\sigma\land p_\rho)$; and $(p_{\sigma_1}\land\cdots\land p_{\sigma_n})\to p_\rho$ whenever the finite sentence set $\{\sigma_1,\ldots,\sigma_n\}$ derives $\rho$. The empty conjunction for $n=0$ is true, so all sentence theorems are required. Derivability is witnessed by finite strings, hence the collection of these requirements is a set. [step 1.1, algebra]

3.1 Fix a finite $\Delta_0\subseteq\Delta$. Only finitely many letters $p_\sigma$ occur; call their sentence indices $S_0$. Enumerate this finite set and apply F5 finitely many times, starting at $T_H$, to obtain a consistent extension $K$ deciding every $\sigma\in S_0$. Set $v(p_\sigma)=1$ if the positive decision is in $K$, and $0$ otherwise, and give all other letters value $0$. Consistency and F6 prevent both decisions being in $K$, so the negative decision is in $K$ exactly when $v(p_\sigma)=0$. Every listed $p_\tau$ with $\tau\in T_H$ has value $1$, since a negative decision would contradict $\tau\in K$. Also $v(p_\bot)=0$ whenever that letter occurs. For a negation coherence requirement, equal positive values for $\sigma,\neg\sigma$ contradict consistency, and equal negative values give $\neg\sigma,\neg\neg\sigma\in K$, again a contradiction by F6. For a conjunction requirement, a positive conjunction with a negative conjunct contradicts elimination, while two positive conjuncts and a negative conjunction contradict introduction. Thus all Boolean coherence requirements in $\Delta_0$ hold. Finally, if all antecedent letters of a deduction requirement are true, their sentences belong to $K$. F7 transfers their finite derivation of $\rho$ to $K$, and consistency with F6 prevents $\neg\rho\in K$; hence the conclusion letter is true. A false antecedent satisfies the implication automatically. When $n=0$, the same argument transfers the theorem proof to $K$. Therefore $v\models\Delta_0$. Only finitely many decisions were made, not a simultaneous choice of completions for all finite subsets. [F5, F6, F7, step 2.1, algebra]

4.1 BPI and F2 now give a valuation $v\models\Delta$. Put $H=\{\sigma\in S:v(p_\sigma)=1\}$. It contains $T_H$ and omits $\bot$. Negation coherence makes it complete. If $H\vdash\rho$, F7 yields finitely many premises $\sigma_1,\ldots,\sigma_n\in H$ deriving $\rho$; the corresponding requirement of $\Delta$ forces $\rho\in H$. Thus $H$ is deductively closed, and it is consistent because a proof of $\bot$ would put $\bot$ in $H$. For each $\exists x\phi\in H$, F1 supplies its witness implication $\exists x\phi\to\phi(c)$ in $T_H\subseteq H$. Closure under derivability puts $\phi(c)$ in $H$. The seed from F1 remains in the language. All hypotheses of F4 therefore hold, giving a nonempty set model of $H$ and hence, by reduct to the original language, a model of $T$. No language enumeration, infinite succession of decisions, or representative choice is used. Together with step 1.2 this proves the equivalence. QED. [F1, F2, F4, F7, step 1.2, step 3.1, algebra]
