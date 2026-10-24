---
id: thm-absolute-irreducibility-via-the-endomorphism-division-algebra
kind: theorem
title: "Absolute irreducibility via the endomorphism division algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-endomorphism-division-algebra-of-an-irreducible, lem-base-change-of-intertwiner-spaces, thm-existence-of-algebraic-closures, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, def-axiom-of-choice]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Theorem 2.3.11"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Theorem 4.2.3"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Assume the Axiom of Choice. Let $F$ have characteristic $0$, $G$ be finite, and $V$ be an irreducible
finite-dimensional $F$-representation.  Then $V$ is absolutely irreducible if
and only if $D_V=F$ (via scalar endomorphisms).

## Facts & Assumptions

**Given:** $F$, $G$, and $V$ as in the statement, and the Axiom of Choice.

[A1] The stated Axiom of Choice is the direct premise used to obtain an algebraic closure ([[def-axiom-of-choice]]).

[L1] Base change gives $E\otimes_FD_V\cong\operatorname{End}_G(E\otimes_FV)$ for every field extension $E/F$ ([[lem-base-change-of-intertwiner-spaces]]).

[L2] Assuming Choice, $F$ has an algebraic closure $\overline F$ ([[thm-existence-of-algebraic-closures]]).

[L3] Over an algebraically closed field, every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[L4] Since the characteristic is zero, every finite-dimensional representation of the finite group $G$ over any extension field of $F$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

## Proof

**Proof technique:** direct.

1.1 If $V$ is absolutely irreducible, then $\overline F\otimes_FV$ is irreducible for an algebraic closure supplied by [L2] under [A1]. By [L3] its endomorphism algebra is $\overline F$, and [L1] gives $\overline F\otimes_FD_V\cong\overline F$. Since $D_V\subseteq\operatorname{End}_F(V)$ is finite-dimensional, comparison of $\overline F$-dimensions gives $\dim_FD_V=1$. The scalar copy of $F$ in $D_V$ is therefore all of $D_V$. [A1, L1, L2, L3, algebra]

1.2 Conversely assume $D_V=F$, and let $E/F$ be any field extension. By [L1], $\operatorname{End}_G(E\otimes_FV)\cong E\otimes_FD_V\cong E$, so every $G$-endomorphism is scalar. By [L4], $E\otimes_FV$ is completely reducible. [L1, L4, algebra]

2.1 If $E\otimes_FV$ were reducible, complete reducibility would split it into two nonzero $G$-subrepresentations. Projection onto one would be a nonzero, nonidentity idempotent $G$-endomorphism and therefore could not be scalar over the field $E$, contradicting step 1.2. Thus $E\otimes_FV$ is irreducible for every extension $E/F$, which is absolute irreducibility. [step 1.2, algebra] ∎
