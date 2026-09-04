---
id: thm-prime-filtration-of-a-finite-module
kind: theorem
title: "Finite modules over Noetherian rings admit prime filtrations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-equivalent-characterizations-of-noetherian-modules, thm-existence-of-associated-primes, lem-associated-prime-equivalent-cyclic-embedding, def-quotient-module]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (17.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.62.1"
      url: "https://stacks.math.columbia.edu/tag/00KY"
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated
left $R$-module. Then there exist submodules
$$ 0=M_0\subset M_1\subset\cdots\subset M_n=M $$
such that each quotient $M_i/M_{i-1}$ is isomorphic to $R/\mathfrak p_i$ for
some prime ideal $\mathfrak p_i$ of $R$. When $M=0$, this is the empty
filtration with $n=0$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a finitely generated left $R$-module $M$.

[L1] A finitely generated module over a Noetherian ring is Noetherian ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

[L2] In a Noetherian module, every nonempty family of submodules has a maximal member ([[thm-equivalent-characterizations-of-noetherian-modules]]).

[L3] Every nonzero module over a Noetherian ring has an associated prime ([[thm-existence-of-associated-primes]]).

[L4] If $\mathfrak p$ is associated to a module, then $R/\mathfrak p$ embeds in that module ([[lem-associated-prime-equivalent-cyclic-embedding]]).

[L5] Quotient modules are formed from cosets $M/N$ ([[def-quotient-module]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then the empty chain $0=M$ is already a prime filtration. [given]

2.1 Assume $M \neq 0$. Let $$ \Sigma=\{N \le M : N\text{ admits a prime filtration}\}. $$ By step 1.1, the zero submodule belongs to $\Sigma$. Since $M$ is Noetherian by [L1], fact [L2] gives a maximal member $N$ of $\Sigma$. [L1, L2, step 1.1, construct]

3.1 If $N \neq M$, then $M/N$ is a nonzero quotient module by [L5]. Fact [L3] gives an associated prime $\mathfrak p$ of $M/N$, and [L4] yields an embedded copy of $R/\mathfrak p$ in $M/N$. Let $N'$ be its preimage in $M$. Then $N \subsetneq N' \le M$ and $N'/N \cong R/\mathfrak p$. Appending $N'$ to a prime filtration of $N$ gives a prime filtration of $N'$, contradicting the maximality of $N$ in step 2.1. Therefore $N=M$. [L3, L4, L5, step 2.1, choose, algebra]

4.1 When $M \neq 0$, step 3.1 shows that $M$ itself has a prime filtration; the zero case was handled in step 1.1. [step 1.1, step 3.1] ∎
