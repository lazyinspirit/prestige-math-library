---
id: lem-ph-circuit-matrix-final-block-encoding
kind: lemma
title: "Ph circuit matrix final block encoding"
status: draft
origin: pipeline
deps: [lem-polynomial-time-computations-have-logspace-uniform-circuits, def-boolean-circuit-size-depth-fanin-and-basis]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §5.2.2 Example5.9, pp93–94; constructive circuit prerequisite on disk."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For a fixed polynomial-time Boolean predicate $R(x,y)$, and a polynomial bound on $|y|$ in $|x|$, one can construct in time polynomial in $|x|$ formulas $F_\exists(x;y,z)$ in 3CNF and $F_\forall(x;y,z)$ in 3DNF such that, for every allowed $y$,
$$R(x,y)\iff\exists z\,F_\exists(x;y,z)\iff\forall z\,F_\forall(x;y,z).$$
Here clauses or terms have at most three literals. Both formula length and $|z|$ are polynomially bounded.

When the allowed strings have varying lengths at most a fixed bound $p(|x|)$, the formula's $y$-block is a fixed-width encoding: a $\lceil\log_2(p(|x|)+1)\rceil$-bit length field followed by $p(|x|)$ payload bits. A length field outside $\{0,\ldots,p(|x|)\}$ decodes to the empty string, and otherwise the decoder returns the indicated initial payload segment. Thus every fixed-width string decodes to an allowed $y$, every allowed $y$ has an encoding, and $R(x,y)$ in the display means $R$ applied to that decoded string. For a prescribed exact length, use the identity encoding.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For every fixed deterministic Turing machine $M$ that halts in polynomial time, there is a polynomial-size logspace-uniform Boolean circuit family $(C_n)$ such that $C_n(x)=1$ exactly when $M$ accepts $x\in\{0,1\}^n$. ([[lem-polynomial-time-computations-have-logspace-uniform-circuits]]).

[F2] A Boolean circuit on $n$ inputs is a finite directed acyclic graph with inputs $x_1,\ldots,x_n$, constants $0$ and $1$, and NOT, AND, and OR gates; AND and OR have fan-in two, while NOT has fan-in one. One node is designated as the **output**. The circuit's value is the value at that node after evaluating the graph in topological order. Its **size** is its number of non-input gates, and its **depth** is the largest number of non-input gates on a directed path ending at the output (a path may begin at an input or a constant). If two fixed finite bounded-arity bases can simulate every gate (and every constant) of one another by fixed finite circuits, then changing between them costs only constant factors in size and depth. In particular this holds for any two such functionally complete bases with simulable constants. No such claim is made for an arbitrary finite basis that may fail to express one of the Boolean operations. ([[def-boolean-circuit-size-depth-fanin-and-basis]]).


## Proof

1.1 Compile the fixed machine that first applies the stated total decoder and then evaluates $R$ at the exact encoded-pair length determined by $|x|$ and the fixed bound; then fix the bits of $x$. The decoder is polynomial-time and never changes $R$ by silently padding its argument. A halting logspace uniformity procedure on polynomial-length gate indices has polynomially many configurations and hence runs in polynomial time; enumerating the polynomially many gates therefore takes polynomial time. Use the NOT, binary AND/OR and constant basis. [F1, F2]

2.1 Introduce a variable for every gate output. For $z=a\wedge b$, use $(\neg z\vee a)\wedge(\neg z\vee b)\wedge(z\vee\neg a\vee\neg b)$; for $z=a\vee b$, use $(z\vee\neg a)\wedge(z\vee\neg b)\wedge(\neg z\vee a\vee b)$; for $z=\neg a$, use $(z\vee a)\wedge(\neg z\vee\neg a)$. Constants use unit clauses. If necessary add an output gate copying the designated input via two negations. Let $C$ be the conjunction. Each assignment to the inputs extends uniquely to one assignment satisfying $C$, by gate order. [step 1.1, algebra]

3.1 With output variable $o$, set $F_\exists=C\wedge o$ and $F_\forall=\neg(C\wedge\neg o)$. If $R$ is true, the unique consistent extension witnesses the first formula and every extension satisfies the second. If $R$ is false, no extension satisfies the first and the consistent extension falsifies the second. Negating the 3CNF $C\wedge\neg o$ gives a 3DNF of the same linear size. Constant predicates and zero input bits obey the same construction. [step 2.1, algebra] ∎
