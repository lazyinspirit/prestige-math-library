---
id: "def-boolean-formulas-cnf-and-satisfiability-interface"
kind: "definition"
title: "Boolean formulas, CNF, and satisfiability"
status: "draft"
origin: "pipeline"
deps: ["def-polynomial-time-verifier-and-reduction-interface"]
justified_by: []
landmark: false
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Definition

A formula is a finite tree built from $x_i$ ($i\in\mathbb N$), constants $\bot,\top$, unary $\neg$, and binary $\wedge,\vee$. Fix the following binary prefix encoding: tags 000 and 001 are the constants; 010 introduces a variable followed by $1^{|b|}0b$, where $b$ is the canonical binary numeral for its index; 011 introduces a negation and its one child; 100 and 101 introduce conjunction and disjunction and their two children in order. Tags 110 and 111 are reserved below. A stack parser consumes the required children and rejects unfinished trees, noncanonical numerals, and trailing bits. Every call consumes a tag, so parsing terminates on every word. Size means the full bit length, including variable indices.

A literal is $x_i$ or $\neg x_i$. A clause is a finite list of literals, interpreted as their disjunction. Its encoding is 110, then $1^r0$ for its length, then its $r$ literal encodings. A CNF is a finite list of clauses, encoded by 111, then $1^s0$, then its $s$ clause encodings. The parser accepts these list constructors as additional formula nodes; a clause's entries must be literals and a CNF's entries must be clauses. They have the same recursive semantics as iterated disjunction/conjunction. Empty disjunction is false and empty conjunction true. A $k$-CNF has every clause length at most $k$, including zero. Repeated or complementary literals are allowed.

An assignment maps the finitely many distinct occurring indices to $\{0,1\}$. Evaluate a variable by its assigned bit, constants by 0 and 1, negation by $1-a$, conjunction by $ab$, and disjunction by $\max(a,b)$. Recursion is on proper subtrees or finite lists. Satisfiable means some such assignment evaluates to 1. SAT consists of encodings of satisfiable formulas, including the list forms; 3SAT restricts to the CNF list form with clause lengths at most three. Malformed words, including the empty binary word, belong to neither language.

These languages use the polynomial verifier and total many-one reduction convention of [[def-polynomial-time-verifier-and-reduction-interface]]. NP-complete means membership in verifier-defined NP and a polynomial many-one reduction from every such language. List the distinct variable numerals by order of first occurrence; a certificate consists of one bit for each. Comparing numerals by scans and evaluating the parsed tree takes polynomial time in the encoding length; even repeated full scans cost only a polynomial. No certificate has to list indices below the largest occurring index. The variable-free true formula has the empty assignment, whereas the empty clause has none making it true. Two formulas are semantically equivalent when, for every assignment to the union of their occurring indices, their evaluations under the corresponding restrictions agree. Equisatisfiability only compares existence of satisfying assignments and permits fresh variables.
