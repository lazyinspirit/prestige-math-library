---
id: lem-expander-sync-degree-failure-probabilities
title: Valid restricted spectral tails and a counterexample to the shifted
  degree-failure conclusion
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-shifted-rate-roots
  - lem-expander-sync-rounded-degree-thresholds
  - lem-expander-sync-lem-6-7
  - lem-expander-sync-lem-6-8
  - prop-expander-prereq-degree-count-first-moment
  - lem-author-6ad39f024b17-restricted-adjacency-tail
  - lem-author-6ad39f024b17-shifted-expander-probability-counterexample
  - math:thm-logarithm-slower-than-every-positive-power
  - def-expander-sync-degree-counts
  - def-expander-sync-graph-notation
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-expander-sync-two-sided-expander
dependency_roles:
  def-expander-sync-shifted-rate-roots: mathematical-premise
  lem-expander-sync-rounded-degree-thresholds: mathematical-premise
  lem-expander-sync-lem-6-7: mathematical-premise
  lem-expander-sync-lem-6-8: mathematical-premise
  prop-expander-prereq-degree-count-first-moment: mathematical-premise
  lem-author-6ad39f024b17-restricted-adjacency-tail: mathematical-premise
  lem-author-6ad39f024b17-shifted-expander-probability-counterexample: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  def-expander-sync-degree-counts: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 36–38, Proposition 6.9, (6.7)–(6.9), and final failure
        estimate; PDF p. 8, Definition 1.9
      reading_limits: Inspected the supplied PDF images and extracted text at
        Definition 1.9 and Proposition 6.9, including its proof and final
        displays (PDF pp. 8 and 36–38). This reference attributes the source
        claims only. The current local supplier statements and proofs were read
        for their applications here; the independent BBK papers and the full
        underlying supplier chains were not re-audited in this repair.
      statement: Proposition 6.9 defines the shifted roots and claims success
        probability at least $1-C(\log n)^4n^{-\varepsilon}$. Its proof states
        (6.9), the rounded thresholds and expectation bounds, the displayed
        lower and upper tail prefactors, and the final failure bound. Definition
        1.9 specifies the two-sided expander predicate.
      hypotheses: Fixed $0<\varepsilon<1$ and
        $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, $p=\gamma\log n/n$, $d^*=np$,
        $\alpha=8/\sqrt{np}$, and the roots of (6.7)–(6.8); the proof works for
        sufficiently large integers $n$.
dependency_level: 10
formulation_deps:
  - def-expander-sync-shifted-rate-roots
  - def-expander-sync-degree-counts
  - def-expander-sync-graph-notation
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-expander-sync-two-sided-expander
argument_deps:
  - def-expander-sync-shifted-rate-roots
  - lem-expander-sync-rounded-degree-thresholds
  - lem-expander-sync-lem-6-7
  - lem-expander-sync-lem-6-8
  - prop-expander-prereq-degree-count-first-moment
  - lem-author-6ad39f024b17-restricted-adjacency-tail
  - lem-author-6ad39f024b17-shifted-expander-probability-counterexample
  - math:thm-logarithm-slower-than-every-positive-power
  - def-expander-sync-degree-counts
  - def-expander-sync-graph-notation
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-expander-sync-two-sided-expander
---

## Statement

Fix $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, and let $c^-<0<c^+$ be the article's shifted roots. For each sufficiently large integer $n$, put $p=\gamma\log n/n$ and sample the loop-free simple graph $G\sim G(n,p)$ on $[n]=\{1,\ldots,n\}$: distinct possible edges occur mutually independently, each with probability $p$. All probabilities and expectations below use this finite graph law. Write $A$ for the adjacency matrix of $G$, $J$ for the $n\times n$ all-ones matrix, $d(v)=\sum_{w\in[n]}A_{vw}$ for the degree of $v$, $d_{\min}=\min_{v\in[n]}d(v)$ and $d_{\max}=\max_{v\in[n]}d(v)$. For every integer $k$, let $X_k$, $X_{\le k}$ and $X_{\ge k}$ count vertices of degree exactly $k$, at most $k$ and at least $k$, respectively. For a matrix $M$ on $\mathbb C^{[n]}$, use the operator norm $\|M\|=\max_{\|f\|_2=1}\|Mf\|_2$ induced by the standard Euclidean norm.

Set $\mu=np$, $\alpha=8/\sqrt\mu$, and rounded thresholds $k^- =\lfloor(1+c^--\varepsilon)\mu\rfloor$, $k^+=\lceil(1+c^++\varepsilon)\mu\rceil$. Set $a=\varepsilon-c^-$ and $b=c^++\varepsilon$, and $R_\pm=\exp(-\varepsilon\log n+2pk^\pm+4\log\log n)$. For all sufficiently large $n$,
$$\mathbb P(d_{\min}\le k^-)\le a^{-2}R_-,\qquad \mathbb P(d_{\max}\ge k^+)\le\frac{1+b}{b}R_+,\qquad\mathbb P(\|A-pJ\|\ge8\sqrt\mu)\le2n^{-\gamma}.$$
These valid estimates do not imply the original degree target (6.9), namely $(1+c^-+\alpha)\mu\le d_{\min}\le d_{\max}\le(1+c^+-\alpha)\mu$.

The article's original final claim that the failure probability of (6.9) is at most $C(\gamma,\varepsilon)(\log n)^4n^{-\varepsilon}$ is false. At the fixed admissible pair $(\gamma,\varepsilon)=(2,1/2)$, its failure probability tends to one; the probability that $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with $d^*=\mu$ tends to zero. The original source displays the tail prefactors $(c^-+\varepsilon)^{-2}$ and $(1+c^+-\varepsilon)/(c^+-\varepsilon)$; these are preserved as attributed formulas, while the proved estimates above use $a$ and $b$.

## Statement references

[[def-expander-sync-degree-counts]]

[[def-expander-sync-graph-notation]]

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[[def-expander-sync-two-sided-expander]]

## Facts & Assumptions

[F1] The shifted roots have positive logarithm arguments and the signs and equations in the Statement ([[def-expander-sync-shifted-rate-roots]]).

[F2] The rounded degree thresholds satisfy $\mathbb EX_{k^\pm}\le R_\pm$ eventually ([[lem-expander-sync-rounded-degree-thresholds]]).

[F3] If $0<a<1$, $p\le a/(1-a^2)$ and $k\le(1-a)np$, then $\mathbb EX_{\le k}\le a^{-2}\mathbb EX_k$ ([[lem-expander-sync-lem-6-7]]).

[F4] If $b>0$ and $k\ge(1+b)np$, then $\mathbb EX_{\ge k}\le(1+b^{-1})\mathbb EX_k$ ([[lem-expander-sync-lem-6-8]]).

[F5] An exceptional-vertex probability is bounded by the expected number of exceptional vertices ([[prop-expander-prereq-degree-count-first-moment]]).

[F6] For every fixed $\gamma>1$, the restricted spectral failure probability is at most $2n^{-\gamma}$ eventually ([[lem-author-6ad39f024b17-restricted-adjacency-tail]]).

[F7] The admissible fixed pair $(2,1/2)$ makes the degree failure probability tend to one and the full shifted-root expander probability tend to zero ([[lem-author-6ad39f024b17-shifted-expander-probability-counterexample]]).

[F8] The graph edge probability $\gamma\log n/n$ tends to zero ([[math:thm-logarithm-slower-than-every-positive-power]]).

[F9] The graph law and degree-count notation are those of the finite independent-edge simple graph; the adjacency, degree extrema and all-ones matrix have the meanings stated above ([[def-expander-sync-degree-counts]], [[def-expander-sync-graph-notation]]).

[F10] On the nonzero finite-dimensional Euclidean vertex space, the operator norm is $\|M\|=\max_{\|f\|_2=1}\|Mf\|_2$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F11] The full shifted-root predicate here is the $(n,d^*,\alpha,c^-,c^+)$-expander predicate with $d^*=\mu$ ([[def-expander-sync-two-sided-expander]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 Positivity of $1+c^--\varepsilon$ gives $a=\varepsilon-c^-<1$, while $c^-<0<\varepsilon$ gives $a>0$. Also $b=c^++\varepsilon>0$. Since $p\to0$, eventually $p\le a/(1-a^2)$. By the floor and ceiling thresholds, $k^-\le(1-a)np$ and $k^+\ge(1+b)np$. Apply [F3], [F4], [F2] and [F5] to obtain the first two probability bounds, with exactly the constants stated above. [F1, F2, F3, F4, F5, F8, F9, given, algebra]

1.2 The parameter hypotheses imply $\gamma>1$, so [F6], with the matrices and operator norm in [F9]–[F10], proves the spectral estimate independently of the refuted general Corollary 6.6. This isolates the valid spectral input from the degree comparison. [F6, F9, F10, given]

2.1 The lower cutoff $k^-$ is at most $(1+c^--\varepsilon)\mu$, below the desired $(1+c^-+\alpha)\mu$; the upper cutoff $k^+$ is at least $(1+c^++\varepsilon)\mu$, above the desired upper bound. These tail events therefore cannot supply the claimed containment. More decisively, apply [F7] to the same graph law and the predicate in [F11]: it provides the explicit independent low-degree probability bound, the original parameter check, and the complete expander-definition obstruction at $(2,1/2)$. Its failure probability tends to one, contradicting the claimed $C(\log n)^4n^{-1/2}\to0$. Thus the original final conclusion is refuted, and cannot be used as a logical premise. [F7, F9, F11, step 1.1, step 1.2, algebra] ∎

## Source notes

The original article at PDF pp. 36–38 defines the shifted roots (6.7)–(6.8), thresholds and degree target (6.9), then claims the displayed final small failure probability. Definition 1.9 on PDF p. 8 supplies the attributed expander predicate. The initial proof line on p. 37 writes $\|\Delta_A\|\le\alpha$; the spectral input appropriate to that predicate is $\|\Delta_A\|\le\alpha d^*=8\sqrt{\gamma\log n}$, supplied here by the separate restricted spectral lemma. The article under study supplies attribution only; the probability deductions use the local mathematical suppliers in Facts & Assumptions. The counterexample concerns Proposition 6.9's shifted-root parameters and this proof's failure claim; it does not by itself refute the unshifted-root Theorem 6.2, synchronization conclusions, or every individual displayed tail formula.
