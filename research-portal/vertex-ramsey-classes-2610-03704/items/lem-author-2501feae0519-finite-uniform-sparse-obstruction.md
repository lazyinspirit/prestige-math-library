---
id: lem-author-2501feae0519-finite-uniform-sparse-obstruction
kind: lemma
title: Finite sparse uniform hypergraphs obstruct a prescribed palette
status: published
origin: pipeline
domain: mathematics
deps:
  - math:def-uniform-hypergraph-and-complete-partite-hypergraph
  - def-weak-hypergraph-colouring-palette
  - math:def-finite-cardinality
  - lem-author-2501feae0519-independent-class-colouring-bound
  - math:thm-reals-ordered-field
  - math:lem-nat-finite-sum-laws-and-the-canonical-embedding
  - math:def-real-power
  - math:thm-real-power-laws
  - math:def-natural-logarithm
  - math:thm-natural-logarithm-laws
  - math:thm-exponential-is-strictly-increasing
  - math:cor-exponential-reciprocal-and-positivity
  - math:lem-cauchy-reals-archimedean
dependency_roles:
  math:def-uniform-hypergraph-and-complete-partite-hypergraph: mathematical-premise
  def-weak-hypergraph-colouring-palette: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  lem-author-2501feae0519-independent-class-colouring-bound: mathematical-premise
  math:thm-reals-ordered-field: mathematical-premise
  math:lem-nat-finite-sum-laws-and-the-canonical-embedding: mathematical-premise
  math:def-real-power: mathematical-premise
  math:thm-real-power-laws: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:lem-cauchy-reals-archimedean: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: P. Erdős and A. Hajnal, On chromatic number of graphs and set-systems,
        Acta Mathematica Academiae Scientiarum Hungaricae 17 (1966), 61–99
      url: https://users.renyi.hu/~p_erdos/1966-07.pdf
      locator: §13, Definition 13.2, printed p.94 (PDF p.34), and Theorem 13.3,
        printed p.95 (PDF p.35)
      statement: For each integer r≥3 and positive integer s there are ε>0 and n₀ such
        that for every integer n>n₀ there is an r-uniform set-system on n
        vertices which is s-circuitless and has no independent subset of more
        than n^(1−ε) vertices. Here s-circuitless means that every t-edge
        subfamily, 1≤t≤s, has union of size at least 1+(r−1)t.
      hypotheses: Fixed integers r≥3 and s≥1; n is a sufficiently large finite
        integer. Edges are distinct r-element subsets; independent means
        containing no whole edge.
      reading_limits: For this repair, read the cached full-text PDF introduction on
        PDF p.1 and Definition 13.2 and Theorem 13.3 on printed pp.94–95 (PDF
        pp.34–35); visually checked both printed pages, including the
        inequalities. The theorem is imported as stated, not proved locally.
        Only the beginning of its published proof on p.95 was read in this
        repair; no audit of the complete proof or reading of the whole paper is
        claimed. The finite r=2 case and Corollary 13.4 are not used here.
dependency_level: 3
---

## Statement

For integers $r\geq3$, $s\geq1$ and $k\geq1$ there is a finite $r$-uniform hypergraph with no weak $k$-colouring such that every family of $t$ distinct edges, $1\leq t\leq s$, has union of size at least $1+(r-1)t$.

## Statement references

[[math:def-uniform-hypergraph-and-complete-partite-hypergraph]]

[[def-weak-hypergraph-colouring-palette]]

[[math:def-finite-cardinality]]

[[lem-author-2501feae0519-independent-class-colouring-bound]]

## Facts & Assumptions

[F1] [[math:def-uniform-hypergraph-and-complete-partite-hypergraph]] and [[def-weak-hypergraph-colouring-palette]] fix uniformity and weak colourings; [[math:def-finite-cardinality]] fixes finite size. [[lem-author-2501feae0519-independent-class-colouring-bound]] converts an independent-set bound to absence of a weak colouring.

[F2] Erdős–Hajnal Theorem 13.3, with Definition 13.2, supplies the finite sparse set-systems and the independent-set bound stated in External input.

[F3] [[math:thm-reals-ordered-field]] supplies ordered-real arithmetic. Clause 7 of [[math:lem-nat-finite-sum-laws-and-the-canonical-embedding]] preserves and reflects natural-number order in the canonical real embedding. In real expressions, natural numbers denote these images.

[F4] [[math:def-real-power]] defines $x^u=\exp(u\log x)$ for $x>0$ and real $u$. [[math:thm-real-power-laws]] supplies $x^{u+v}=x^ux^v$. [[math:def-natural-logarithm]] supplies $\log(\exp u)=u$ and $\exp(\log x)=x$ on their stated domains.

[F5] [[math:thm-natural-logarithm-laws]] makes $\log$ strictly increasing on $(0,\infty)$, and [[math:thm-exponential-is-strictly-increasing]] makes $\exp$ strictly increasing on $\mathbb R$. [[math:cor-exponential-reciprocal-and-positivity]] gives $\exp(u)>0$ for all real $u$.

[F6] [[math:lem-cauchy-reals-archimedean]] gives a canonical natural number larger than any prescribed real number.

## Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 Fix $r,s,k$ as given, and take $\varepsilon>0$ and the integer $n_0$ from F2. By cofinality in F6, applied successively to the three real bounds, choose a natural number $n$ with $n>n_0$, $n>1$ and $n>\exp((\log k)/\varepsilon)$. Here $\log k$ is defined since $k\geq1$, and division by $\varepsilon$ is defined since $\varepsilon>0$. The order convention in F3 identifies this $n$ with a positive integer exceeding the imported threshold. [given, F2, F3, F4, F5, F6, choose]

2.1 Applying the increasing logarithm to the positive quantities in the last inequality gives $\log n>\log(\exp((\log k)/\varepsilon))=(\log k)/\varepsilon$. Multiplying by $\varepsilon>0$ and applying the increasing exponential therefore gives $n^\varepsilon=\exp(\varepsilon\log n)>\exp(\log k)=k$. [F3, F4, F5, step 1.1, algebra]

3.1 Apply F2 at this integer $n$. The resulting finite $r$-uniform hypergraph has the stated edge-union inequalities, and every independent set has size at most $a=n^{1-\varepsilon}$. This is a positive real by F4 and F5. The power definition and inverse identity give $n^1=n$, so the power law gives $a n^\varepsilon=n^{1-\varepsilon}n^\varepsilon=n$. Since $a>0$ and $n^\varepsilon>k$, ordered-field multiplication yields $ka<a n^\varepsilon=n$. [F2, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 The independent-set bound, $n>0$ and $ka<n$ satisfy the hypotheses of the colouring-bound lemma in F1, so this hypergraph has no weak $k$-colouring. Its edge-union inequalities from step 3.1 are unchanged, proving the statement. [given, F1, step 1.1, step 3.1] ∎

## External input

The following established result is used as an external premise, rather than claimed as a locally reconstructed proof: For each integer $r\geq3$ and positive integer $s$ there are $\varepsilon>0$ and $n_0$ such that for every integer $n>n_0$ there is an $r$-uniform set-system on $n$ vertices which is $s$-circuitless and has no independent subset of more than $n^{1-\varepsilon}$ vertices. Here $s$-circuitless means that every $t$-edge subfamily, $1\leq t\leq s$, has union of size at least $1+(r-1)t$.

## Source notes

For this repair, read the cached full-text PDF introduction on PDF p.1 and Definition 13.2 and Theorem 13.3 on printed pp.94–95 (PDF pp.34–35); visually checked both printed pages, including the inequalities. The theorem is imported as stated, not proved locally. Only the beginning of its published proof on p.95 was read in this repair; no audit of the complete proof or reading of the whole paper is claimed. The finite $r=2$ case and Corollary 13.4 are not used here.
