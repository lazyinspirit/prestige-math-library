---
id: "ex-definable-subsets-of-omega-are-not-all-subsets"
kind: "example"
title: "Def(omega) is countable while P(omega) is not"
deps: ["def-definable-subsets-of-a-membership-structure"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Lemma 5.1(4) specialized to canonically enumerated omega; local
        diagonal verification
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZF, $\operatorname{Def}(\omega)$ has a surjective enumeration by $\omega$, but no sequence lists every subset of $\omega$. Consequently $\operatorname{Def}(\omega)\ne\mathcal P(\omega)$.

## Facts & Assumptions

**Given:** ZF. Explicit triangular pairing and length-coded finite tuples enumerate Def(omega); a calculated diagonal subset differs from every enumerated value at its own index.

[F1] [[def-definable-subsets-of-a-membership-structure]]: Every Def subset of omega is decoded from a membership-formula code and a finite tuple of naturals.

## Verification

1.1 Encode pairs of naturals by $\pi(a,b)=(a+b)(a+b+1)/2+b$. For a given s, the values with $a+b=s$ are the consecutive integers from $s(s+1)/2$ to $s(s+1)/2+s$, so these disjoint intervals cover omega and pi is a bijection. Number the membership-language symbols by naturals (the variables are $v_i$, and the remaining logical and punctuation symbols form a fixed finite list); encode a finite symbol string by pairing its length with its nested symbol code ending in 0. Restricting this partial decoding to well-formed formulas and pairing each with its finite allowed arity gives a natural-number formula/arity code. Encode a finite tuple of naturals by the same length-and-nested-pair construction, then pair it with the formula/arity code. For each natural k decode a valid formula/tuple pair if possible and output its defined subset; otherwise output empty. Replacement gives a sequence $E:\omega\to\operatorname{Def}(\omega)$, and F1 makes it surjective. [F1, construct]

2.1 Given any sequence $S:\omega\to\mathcal P(\omega)$, Separation forms $D=\{n\in\omega:n\notin S(n)\}$. For each k, membership of k in D is the opposite of its membership in S(k), so $D\ne S(k)$. Thus S is not surjective. Applied to E from step 1.1, D is not in Def(omega), although it is a subset of omega. This uses a defining formula in V, not necessarily a definition over the structure $(\omega,\in)$, so there is no contradiction with the definition of Def. [F1, step 1.1] ∎
