---
title: Quantitative Erdős–Rényi synchrony and the false exact-expansion rate —
  Theorem 6.2
status: published
research_item: thm-expander-sync-thm-6-2
dependency_level: 12
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 33, Theorem 6.2 and equation (6.3); p. 38, proof; p. 6, Section
        1.2; p. 8, Definition 1.9
      statement: For $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$
        there exists $C=C(\gamma,\varepsilon)$ such that, with $p=\gamma\log
        n/n$, $d^*=pn$, $\alpha=8(\gamma\log n)^{-1/2}$ and roots
        $c^-(\gamma),c^+(\gamma)$ of $\gamma((1+c)\log(1+c)-c)=1$, the graph
        $G(n,p)$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with probability at
        least $1-C(\log n)^4n^{-\varepsilon}$. It is globally synchronizing with
        the same probability.
      hypotheses: "Conditions and scope retained in the extracted formulation: For
        $0<\\varepsilon<1$ and $1+\\varepsilon<\\gamma<1+\\varepsilon^{-2}$
        there exists $C=C(\\gamma,\\varepsilon)$ such that, with $p=\\gamma\\log
        n/n$, $d^*=pn$, $\\alpha=8(\\gamma\\log n)^{-1/2}$ and roots
        $c^-(\\gamma),c^+(\\gamma)$ of $\\gamma((1+c)\\log(1+c)-c)=1$, the graph
        $G(n,p)$ is an $(n,d^*,\\alpha,c^-,c^+)$-expander with probability at
        least $1-C(\\log n)^4n^{-\\varepsilon}$. It is globally synchronizing
        with the same probability."
      reading_limits: Original PDF images and extracted text at pp. 6, 8, 33 and 38
        inspected. Original-claim attribution only, not a mathematical premise.
        Current local restricted spectral and slack-expansion suppliers were
        read; their independent external proof literature was not freshly read
        for this proposal.
---

PDF p. 33: ` Theorem 6.2 and proof on p. 38 `; PDF p. 38: ` Theorem 6.2 and proof on p. 38 `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)
- [lem-author-5d47c15147c9-unshifted-rate-counterexample](item-lem-author-5d47c15147c9-unshifted-rate-counterexample)
- [lem-author-5d47c15147c9-slack-expansion-synchrony](item-lem-author-5d47c15147c9-slack-expansion-synchrony)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)


## Statement

For $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, put $p=\gamma\log n/n$, $d^*=pn$, $\alpha=8(\gamma\log n)^{-1/2}$, and let $-1<c^-<0<c^+$ be the unshifted roots of $\gamma((1+c)\log(1+c)-c)=1$.

The article asserts that $G(n,p)$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with probability at least $1-C(\gamma,\varepsilon)(\log n)^4n^{-\varepsilon}$, and in particular is globally synchronizing with the same probability. The expansion probability assertion is false: at the admissible fixed pair $\gamma=2$, $\varepsilon=1/2$, its failure probability is at least $\kappa/\sqrt{\log n}$ for some fixed $\kappa>0$ and all sufficiently large integers $n$.

The synchronization conclusion nevertheless holds: assuming countable choice, for every displayed admissible pair there is $C=C(\gamma,\varepsilon)>0$ such that $G(n,p)$ is globally synchronizing with probability at least $1-Cn^{-\varepsilon}$ for all sufficiently large $n$, and therefore with the originally claimed $1-C(\log n)^4n^{-\varepsilon}$ probability. Global synchrony is the almost-everywhere convergence of the identical Kuramoto flow to full phase agreement. A sound expander supplying this conclusion has slack parameters $c^-=a/2-1$, $c^+=b$, where $I(x)=x\log x-x+1$ for $x>0$, $0<a<1<b$ and $\gamma I(a)=\gamma I(b)=(\gamma+1+\varepsilon)/2$. These slack parameters are distinct from the exact roots in the attributed assertion.

## Facts & Assumptions

[F1] The graph is the loop-free independent-edge law, the two-sided expander predicate includes $c^-d^*I\preceq\Delta_L$, and the unshifted roots have their stated branches ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi), [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), [def-expander-sync-rate-function](item-def-expander-sync-rate-function)).

[F2] At any fixed $\gamma>1$, the expander event with the exact unshifted roots has failure probability at least $\kappa/\sqrt{\log n}$, which cannot be $O((\log n)^4n^{-\varepsilon})$ for any $\varepsilon>0$ ([lem-author-5d47c15147c9-unshifted-rate-counterexample](item-lem-author-5d47c15147c9-unshifted-rate-counterexample)).

[F3] Under countable choice, for every $0<\varepsilon<1$ and $\gamma>1+\varepsilon$, with $\mu=\gamma\log n$, $\alpha=8/\sqrt\mu$, $\gamma I(a)=\gamma I(b)=(\gamma+1+\varepsilon)/2$ and $0<a<1<b$, the graph is an $(n,\mu,\alpha,a/2-1,b)$-expander and is globally synchronizing with probability at least $1-Cn^{-\varepsilon}$ eventually ([lem-author-5d47c15147c9-slack-expansion-synchrony](item-lem-author-5d47c15147c9-slack-expansion-synchrony), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)).

[F4] For $I(x)=x\log x-x+1$ on $x>0$ and every $0<t<1$, the equation $I(x)=t$ has unique lower and upper branch solutions $0<a<1<b$ ([prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)).

## Proof

**Given:** The admissible parameters in the Statement; assume countable choice for the positive synchrony conclusion.

**Goal:** Separate the false exact-expansion rate from the sound full synchrony conclusion.

1.1 At $\gamma=2$, $\varepsilon=1/2$, all original parameter inequalities hold. The graph law, reference degree, adjacency tolerance and exact unshifted roots agree with [F1] and [F2]. Thus [F2] is a counterexample under the complete assumptions of the original expansion assertion, for every proposed constant $C>0$. It does not use the shifted-root Proposition 6.9 as a premise. [F1, F2, given, algebra]

2.1 Every original admissible pair satisfies the parameter hypotheses of [F3]. Put $\beta=(\gamma+1+\varepsilon)/2$; since $0<\beta<\gamma$, [F4] supplies exactly the displayed $a,b$. With $\mu=d^*=\gamma\log n$, [F3] gives the expander with slack parameters $c^-=a/2-1$, $c^+=b$ and global synchrony on the same event. Hence global synchrony holds with failure probability at most $Cn^{-\varepsilon}$ for large $n$, which is at most $C(\log n)^4n^{-\varepsilon}$ once $\log n\ge1$. Its slack-root supplier verifies the positive-reference and numerical conditions of the deterministic theorem directly. This proves the original synchronization conclusion without claiming the false unshifted expansion rate. [F3, F4, step 1.1, algebra] ∎

## Source notes

The original article, PDF p. 33, Theorem 6.2 and equation (6.3), supplies attribution for the full original assertion. Its proof on p. 38 invokes Proposition 6.9 and Remark 6.10. The present refutation concerns the original theorem's unshifted roots directly; it does not transfer the refutation of Proposition 6.9 to a different event. Original PDF images and extracted text on pp. 6, 8, 33 and 38 were inspected for the matrix convention, expander definition, exact statement and proof. No source beyond those locations was freshly read for this attribution. The positive synchronization proof uses completed independent nonbacktracking inputs through the restricted adjacency supplier and the local deterministic synchronization theorem. No article statement supplies its own proof.
