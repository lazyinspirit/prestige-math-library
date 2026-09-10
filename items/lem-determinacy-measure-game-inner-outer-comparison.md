---
id: lem-determinacy-measure-game-inner-outer-comparison
kind: lemma
title: "Winning measure-game strategies bound inner and outer measure"
status: published
origin: pipeline
deps: ["def-rational-determinacy-measure-game", "lem-dyadic-coding-coin-measure-and-lebesgue-transfer", "thm-rationals-countable", "lem-rat-embeds-dense", "thm-recursion"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "complete Lemmas 1–2 pp394–396; nonnegative rational approximation and least-code selection expanded locally; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally."
      url: "https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf"
---
## Statement

In ZF+DC, for every $E\subseteq\mathcal C$ and rational $0<v\leq1$, a winning I strategy in the rational measure game implies $\nu_{\rm in}(E)\geq v$, and a winning II strategy implies $\nu_{\rm out}(E)\leq v$. The two values are the closed and open envelope values from the dyadic coding lemma.

## Facts & Assumptions

[F1] [[def-rational-determinacy-measure-game]] gives legal rational pairs, positive replies and natural-number codes.

[F2] [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]] supplies under DC the probability measure, cylinder values, both monotone continuity properties and envelope definitions.

[F3] [[thm-rationals-countable]] gives fixed rational codes, and [[lem-rat-embeds-dense]] gives rational approximation between real bounds.

[F4] [[thm-recursion]] gives prescribed recursion on finite histories.

**Given:** ZF+DC, E and v as stated. No determinacy assumption is used.

## Proof

1.1 Fix a winning I strategy $\sigma$. A binary word p is acceptable if its bits are legal positive replies when I follows $\sigma$; the full game history $\psi(p)$ is uniquely reconstructed by F4. At acceptable p let f(p) be the current bound, and at unacceptable words let f(p)=0. Then $f(\varnothing)=v$, $0\leq f\leq1$, and $(f(p0)+f(p1))/2\geq f(p)$: at acceptable p the two child values equal the prescribed h_0,h_1, including zero for illegal replies, and F1 gives the inequality. At unacceptable p both children are unacceptable and all three values are zero. Summing over words of length n gives by induction $\sum_{|p|=n}2^{-n}f(p)\geq v$. [F1, F4]

2.1 Let C_n be the clopen union of acceptable length-n cylinders. The cylinders are disjoint of measure $2^{-n}$ by F2, so step 1.1 and $f\leq1$ give $\nu(C_n)\geq v$. They decrease, and continuity from above F2 applies with first measure at most one. Thus closed $C=\bigcap_n C_n$ has measure at least v. Every branch in C reconstructs a full legal $\sigma$-play and lies in E, by winningness. Therefore $\nu_{\rm in}(E)\geq\nu(C)\geq v$. [F1, F2, step 1.1]

3.1 The I implication is established by step 2.1. For the second implication independently fix a winning II strategy $\tau$ and rational $\delta>0$. At an acceptable binary history p with constructed legal $\tau$-history $\psi(p)$ and bound v_p, define u_e to be the infimum of h_e over legal rational pairs h whose $\tau$ response is e, with infimum of the empty set set to one. Then $(u_0+u_1)/2\leq v_p$. Otherwise choose rational h_e satisfying $0\leq h_e<u_e$ if u_e>0, and h_e=0 if u_e=0, close enough from below that their average still exceeds v_p; F3 supplies these approximants, all in [0,1]. This pair is legal. Its $\tau$ response must have h_e>0 by F1, hence u_e>0 and h_e<u_e, contradicting the defining infimum. This proves the inequality even at a zero u_e. [F1, F3, step 2.1]

4.1 Start with acceptable empty p, bound v and empty history. For an acceptable p of length n, declare pe acceptable precisely when u_e<1. Then the defining set for that infimum is nonempty, and contains a pair with selected value $h_e<u_e+\delta2^{-n-1}$. Choose the least rational-pair code with this property and response e; append that actual pair and response to define $\psi(pe)$. These selected responses are positive and their bounds rational. F4 performs the length recursion; excluded nodes have no acceptable descendants. This is a prescribed least-code recursion, not a selection of arbitrary real moves. [F1, F3, F4, step 3.1]

5.1 Set f(p)=v_p at acceptable nodes and f(p)=1 elsewhere. For acceptable p of length n, each included child has value at most $u_e+\delta2^{-n-1}$ by step 4.1, and each excluded child has value $1=u_e$, so also satisfies that bound. Hence step 3.1 gives $(f(p0)+f(p1))/2\leq f(p)+\delta2^{-n-1}$. At unacceptable p both child values are one, so the inequality still holds. Induction, starting at f(empty)=v, now gives

$$\sum_{|p|=n}2^{-n}f(p)\leq v+\delta(1-2^{-n}).$$

Let U_n be the clopen union of unacceptable length-n cylinders. The function is one there and nonnegative elsewhere, so F2's cylinder values give $\nu(U_n)\leq v+\delta(1-2^{-n})$. [F2, step 3.1, step 4.1]

6.1 The sets U_n increase. Outside their open union U, every prefix is acceptable, so step 4.1 reconstructs a full legal $\tau$-play with that bit outcome. Since $\tau$ wins, the outcome is outside E; thus $E\subseteq U$. Continuity from below F2 and step 5.1 give $\nu(U)\leq v+\delta$, hence $\nu_{\rm out}(E)\leq v+\delta$. This holds for every positive rational $\delta$. If $\nu_{\rm out}(E)>v$, rational density F3 gives $0<\delta<\nu_{\rm out}(E)-v$, a contradiction. Therefore $\nu_{\rm out}(E)\leq v$, completing the second implication. QED. [F1, F2, F3, step 4.1, step 5.1]
