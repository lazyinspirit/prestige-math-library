---
id: cex-an-ordinary-irreducible-with-reducible-mod-p-reduction
kind: counterexample
title: "An ordinary irreducible representation can have reducible reduction modulo p"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal, rem-maschke-failure-in-defining-characteristic, ex-reducing-an-integral-lattice-for-s-three]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement refuted

Reducing an ordinary irreducible lattice modulo $p$ always preserves
irreducibility.

## Facts & Assumptions

**Given:** The standard $\mathcal O S_3$-lattice $L=\{(a,b,c)\in\mathcal O^3:a+b+c=0\}$ with $\mathcal O=\mathbb Z_{(3)}$.

[F1] Reduction modulo the maximal ideal produces a $kG$-module
([[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]).

[L1] The defining-characteristic page route allows reducibility after reduction
([[rem-maschke-failure-in-defining-characteristic]]).

[L2] The reduced lattice $\overline L$ for this $S_3$ example is reducible
([[ex-reducing-an-integral-lattice-for-s-three]]).

## Counterexample

**Proof technique:** direct.

1.1 Over characteristic $0$, the lattice $L$ affords the standard $2$-dimensional irreducible representation of $S_3$. [given, algebra]

2.1 By [F1], reducing $L$ modulo $3$ gives a $kS_3$-module $\overline L$. The example [L2] shows that $\overline L$ is reducible, and [L1] explains why this does not contradict the modular route of the page. [F1, L1, L2, step 1.1]

3.1 Therefore an ordinary irreducible representation can have reducible reduction modulo $p$, refuting the statement. [step 1.1, step 2.1] ∎
