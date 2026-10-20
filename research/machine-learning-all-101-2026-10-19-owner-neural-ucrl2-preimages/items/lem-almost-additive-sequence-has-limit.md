---
id: lem-almost-additive-sequence-has-limit
kind: lemma
title: "Almost-additive sequences have a normalized limit"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - {title: "Sébastien Gouëzel, Theory Fekete, Archive of Formal Proofs, lemma almost_additive_converges", url: "https://isa-afp.org/browser_info/current/AFP/Ergodic_Theory/Fekete.html", locator: "Subsection Almost additive sequences, lemma almost_additive_converges, lines 277–323."}
    - {title: "Wojciech Szpankowski, Average Case Analysis of Algorithms on Sequences", url: "https://www.cs.purdue.edu/homes/spa/courses/pg17/mybook.pdf", locator: "§5.1, Theorem 5.1 (Fekete), PDF pp. 100–101."}
    - {title: "Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction", url: "https://www.unige.ch/math/folks/velenik/smbook/Mathematical_Appendix.pdf", locator: "Appendix B.1.3, Lemma B.5, PDF pp. 2–3 / printed pp. 479–480."}
proof_strategy: direct
---

## Statement

Let $(a_n)_{n\ge1}$ be a real sequence for which there is a finite constant $K$ with $|a_n|\le Kn$ for every $n\ge1$. Suppose there is a finite constant $C\ge0$ such that $|a_{m+n}-a_m-a_n|\le C$ for all positive integers $m,n$. Then $a_n/n$ has a finite limit as $n\to\infty$.

## Statement references

[Formal almost-additive result](https://isa-afp.org/browser_info/current/AFP/Ergodic_Theory/Fekete.html): Subsection “Almost additive sequences,” lemma `almost_additive_converges`.

[Textbook Fekete proof](https://www.cs.purdue.edu/homes/spa/courses/pg17/mybook.pdf): §5.1, Theorem 5.1.

[Independent real-analysis treatment](https://www.unige.ch/math/folks/velenik/smbook/Mathematical_Appendix.pdf): Appendix B.1.3, Lemma B.5.

## Facts & Assumptions

**Given:** The linear bound and the almost-additivity inequality in the Statement.

## Proof

1.1 Set $b_n=a_n+C$ and $c_n=a_n-C$. The upper half of the assumed inequality gives $a_{m+n}\le a_m+a_n$, hence $b_{m+n}\le b_m+b_n$. The lower half gives $a_{m+n}\ge a_m+a_n-C$, hence $c_{m+n}\ge c_m+c_n$. Also $|b_n|,|c_n|\le Kn+C$, so both sequences are bounded linearly. [given, algebra]

2.1 For a linearly bounded subadditive sequence $b$, fix $k\ge1$ and write $n=qk+r$ with $0\le r<k$. Iterating subadditivity, with $b_0=0$ for the remainder case, gives $b_n\le q b_k+b_r$. The finitely many possible remainder values have a finite maximum $B_k$, so $b_n/n\le q b_k/n+B_k/n$ and therefore $\limsup_n b_n/n\le b_k/k$. Since this holds for every $k$ and $\liminf_n b_n/n\ge\inf_k b_k/k$, the limit $b_n/n$ exists and is finite. Applying the same argument to $-c_n$ proves that $c_n/n$ has a finite limit. [step 1.1, algebra]

3.1 Since $b_n/n-c_n/n=2C/n\to0$ and $c_n/n\le a_n/n\le b_n/n$, the two limits from step 2.1 coincide and force $a_n/n$ to that same finite limit. [step 1.1, step 2.1, algebra] ∎
