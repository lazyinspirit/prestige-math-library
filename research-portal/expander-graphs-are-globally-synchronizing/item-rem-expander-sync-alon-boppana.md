---
title: Asymptotic optimality and existence background for Ramanujan graphs
status: draft
research_item: rem-expander-sync-alon-boppana
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, Section 1.3, paragraphs following Remark 1.5
      statement: The article attributes the asymptotic optimality of the Ramanujan
        parameter to Alon and Boppana and reports explicit constructions and
        partial existence results, citing its references [34, 36, 37, 39].
      hypotheses: The discussion concerns d-regular graphs and the article's centered
        adjacency expansion parameter, with asymptotics at a given degree.
      reading_limits: The cited article passage was inspected for attribution. The
        cited construction papers were not independently read for this item; the
        article citation is not used to prove the spectral bound or the
        existence input below.
---

PDF p. 7: ` Section 1.3, Ramanujan background `

## Prerequisites

- [def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)
- [thm-expander-prereq-alon-boppana-input](item-thm-expander-prereq-alon-boppana-input)
- [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)
- [thm-expander-prereq-bipartite-ramanujan-existence](item-thm-expander-prereq-bipartite-ramanujan-existence)


## Statement

Fix an integer $d\ge3$. Let $G_n$ be finite $d$-regular graphs whose orders $n$ tend to infinity, in the graph convention of [def-expander-sync-ramanujan](item-def-expander-sync-ramanujan). Thus the adjacency matrix $A_n$ is symmetric, each row has sum $d$, and a loop contributes one to its row sum. Write $J_n$ for the all-ones matrix and $\alpha_n=\|A_n-(d/n)J_n\|_{\mathrm{op}}/d$, using the Euclidean operator norm. Then, for every $\varepsilon>0$, eventually $\alpha_n\ge 2\sqrt{d-1}/d-\varepsilon$. Hence the article's Ramanujan threshold $2\sqrt{d-1}/d$ is asymptotically optimal as a lower bound for this normalized parameter at fixed $d$. Any sequence of graphs satisfying that threshold attains the bound asymptotically; this conditional assertion does not itself establish such a sequence.

The article reports explicit Ramanujan constructions and partial existence results, citing [34, 37] and [36], respectively. A separate existence theorem supplies, for every $d\ge3$, arbitrarily large $d$-regular bipartite graphs whose eigenvalues other than the designated trivial values $d$ and $-d$ have absolute value at most $2\sqrt{d-1}$. In that theorem's convention both $d$ and $-d$ are excluded. These graphs have centered norm at least $d$, so this existence statement does not by itself give Ramanujan graphs in the article's centered-norm convention.

## Facts & Assumptions

**Given:** A fixed integer $d\ge3$ and a sequence of graphs as in the statement.

**Goal:** Establish the normalized asymptotic lower bound, its conditional attainment, and the stated distinction between existence conventions.

[F1] The fixed-degree Alon–Boppana input gives, for every $\eta>0$, the eventual bound $\|A_n-(d/n)J_n\|_{\mathrm{op}}\ge2\sqrt{d-1}-\eta$ for the stated graph convention ([thm-expander-prereq-alon-boppana-input](item-thm-expander-prereq-alon-boppana-input)).

[F2] For a regular adjacency matrix the centered norm is the norm on the mean-zero subspace, retaining any $-d$ eigenvalue and every additional $d$ eigenvalue ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

[F3] The article's Ramanujan condition is $\|A_n-(d/n)J_n\|_{\mathrm{op}}\le2\sqrt{d-1}$ ([def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)).

[F4] The bipartite existence input gives the sequence and spectral convention described in the statement, and establishes that its centered norm is at least $d>2\sqrt{d-1}$ ([thm-expander-prereq-bipartite-ramanujan-existence](item-thm-expander-prereq-bipartite-ramanujan-existence)).

## Proof

1.1 Given $\varepsilon>0$, apply [F1] with $\eta=d\varepsilon$ and divide by the fixed positive number $d$. This gives $\alpha_n\ge2\sqrt{d-1}/d-\varepsilon$ for all sufficiently large $n$. Thus no sequence at this fixed degree can have its normalized centered norms eventually below the threshold by a fixed positive amount. [F1, algebra]

2.1 If every graph in the sequence satisfies the article's Ramanujan condition, [F3] gives $\alpha_n\le2\sqrt{d-1}/d$. Together with step 1.1 this proves convergence of $\alpha_n$ to that value. This argument assumes the sequence exists. [F3, step 1.1, algebra]

3.1 The sequence in [F4] exists under the stated bipartite convention, but [F4] also gives its centered norm at least $d>2\sqrt{d-1}$. The distinction is consistent with [F2]: removing only the constant-vector eigenvalue retains the eigenvalue $-d$. Consequently that existence theorem alone does not establish the article's centered-norm condition. [F2, F4, algebra] ∎

## Source notes

The original article attributes the fixed-degree asymptotic optimality to Alon and Boppana and reports explicit constructions and partial existence results, citing [34, 37] and [36]. This is attribution of its discussion, not a premise for the proof above. The independently supplied bipartite existence result has the narrower, explicitly stated convention in [F4]; it is not presented as a verification of the article's cited construction papers.
