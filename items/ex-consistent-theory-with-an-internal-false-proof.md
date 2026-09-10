---
id: ex-consistent-theory-with-an-internal-false-proof
kind: example
title: "A consistent theory can believe it has a proof of contradiction"
status: draft
origin: pipeline
deps: [thm-second-incompleteness-for-standard-provability, thm-model-existence-versus-syntactic-consistency, thm-first-order-sentence-deduction, def-robinson-q-and-peano-arithmetic]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4C.8 p153; local deduction/completeness application"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — §4.7 pp114–115, local application"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Example

If PA is externally consistent, then $\mathrm{PA}+\neg\operatorname{Con}(\mathrm{PA})$ is consistent and has a set model. In every such model a code it regards as a PA-refutation is nonstandard.

## Facts & Assumptions

[F1] [[thm-first-order-sentence-deduction]]: In ZF, for a sentence theory $T$, a sentence $\sigma$ and any formula $\theta$,

$$T\cup\{\sigma\}\vdash\theta\quad\Longleftrightarrow\quad T\vdash\sigma\to\theta.$$

The forward transformation also works for an open discharged assumption $\sigma$ provided every variable generalized or existentially eliminated in the given derivation is absent from $\operatorname{FV}(\sigma)$; the other assumptions remain sentences.

[F2] [[thm-second-incompleteness-for-standard-provability]]: If T is consistent and has the arithmetic/interpretation and D1–D3 hypotheses above for the displayed standard predicate, T does not prove its displayed $\operatorname{Con}(T)$. Numeralwise correctness of an arbitrary predicate is insufficient.

[F3] [[thm-model-existence-versus-syntactic-consistency]]: In external ZF, an explicitly countable sentence theory is consistent iff it has a nonempty set model, and iff it has a model with carrier injecting into $\omega$. For an effective presentation, external consistency agrees with the truth of its certified Con formula in standard arithmetic. No transitivity or external well-foundedness of a model follows.

[F4] [[def-robinson-q-and-peano-arithmetic]]: Use the arithmetic signature $0,S,+,\cdot,=$. Robinson arithmetic $Q$ consists of the universal closures of these seven formulas:

$$Sx\ne0;\quad Sx=Sy\to x=y;\quad x\ne0\to\exists y\,x=Sy;$$
$$x+0=x;\quad x+Sy=S(x+y);\quad x\cdot0=0;\quad x\cdot Sy=x\cdot y+x.$$

PA adds, for every formula $\phi(x,\bar z)$, the universal closure of $[\phi(0,\bar z)\land\forall x(\phi(x,\bar z)\to\phi(Sx,\bar z))]\to\forall x\phi(x,\bar z)$. Parameters $\bar z$ are allowed. No induction schema is included in $Q$.

For an external natural number $n$, its numeral is the term $\bar n=S^n0$. Define $x\le y$ by $\exists z(z+x=y)$ and $x<y$ by $x\le y\land x\ne y$, with $z$ fresh. The left-addend witness is intentional: commutativity is not an axiom of Q.

Use def-set-coded-formal-derivation for the six logical schemes and three rules. Negation, conjunction and existential quantification are primitive: $A\to B$ expands to $\neg(A\land\neg B)$, $A\lor B$ to $\neg(\neg A\land\neg B)$, and $\forall x A$ to $\neg\exists x\neg A$. Inequality means negated equality. Substitute capture-free, always taking the least available fresh variable index and universally closing the remaining parameters in increasing index order. Thus each displayed axiom and each induction instance is a definite finite sentence.

## Verification

**Given:** External consistency of PA and its standard certified Con predicate.

1.1 If the extension were inconsistent, sentence deduction F1 would give $\mathrm{PA}\vdash\neg\operatorname{Con}(\mathrm{PA})\to\bot$, and classical logic would yield $\mathrm{PA}\vdash\operatorname{Con}(\mathrm{PA})$. This contradicts F2 under the assumed consistency, so the extension is consistent. F3 gives a nonempty set model N. [F1, F2, F3, given]

2.1 N satisfies the added axiom, hence has an element c satisfying its arithmetic proof predicate for a PA-refutation. For each external n, consistency says n is not an actual refutation code. Numeralwise correctness of the standard predicate (as required in F2) gives a Q, hence PA, proof negating that instance, so N satisfies its negation at $\bar n^N$. Therefore $c\ne\bar n^N$ for every external n. This is the promised nonstandard witness, not an externally correct finite proof. The numeral convention is F4. [F2, F4, step 1.1] ∎
