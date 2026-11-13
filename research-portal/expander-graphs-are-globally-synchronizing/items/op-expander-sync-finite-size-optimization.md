---
id: op-expander-sync-finite-size-optimization
title: Useful finite-size synchronization estimates near threshold
kind: open-problem
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-global-synchrony
  - thm-expander-sync-thm-6-2
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  thm-expander-sync-thm-6-2: mathematical-premise
  math:def-countable-choice: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 38, Section 7, last paragraph
      statement: The authors say that their asymptotically sharp result for G(n,p) was
        not optimized for practically relevant n, especially near the
        connectivity threshold, and that p=2 log(n)/n may require impractically
        large n.
      hypotheses: The discussion concerns the Erdős–Rényi model G(n,p), particularly
        probabilities near the connectivity threshold and the example p=2
        log(n)/n.
      reading_limits: The specified paragraph of the supplied article text was
        inspected. The citation attributes the motivation; it does not supply a
        finite-size bound or establish the current worldwide status of the
        question.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 13
---

## Open problem

Assume countable choice. For a fixed $\gamma>1$, set $p_n=\gamma\log n/n$ for integers $n$ for which $p_n\leq1$. In the [[def-expander-sync-erdos-renyi|Erdős–Rényi model]], $G(n,p_n)$ has vertex set $\{1,\ldots,n\}$ and each unordered pair of distinct vertices is independently an edge with probability $p_n$. A graph is [[def-expander-sync-global-synchrony|globally synchronizing]] when, for normalized uniform initial phase volume, its identical-oscillator Kuramoto flow in the rotating frame converges to a fully synchronized state for almost every initial state.

Find explicit, optimized upper bounds $B(n,\gamma)$ for the probability that $G(n,p_n)$ is not globally synchronizing, valid at stated finite values of $n$ and useful at practically relevant sizes throughout the prescribed logarithmic family $p_n=\gamma\log n/n$ with fixed $\gamma>1$. Describe the dependence of these bounds on $\gamma$ as $\gamma\downarrow1$. In particular, address $\gamma=2$, that is, $p_n=2\log n/n$. One concrete form of the question is to give an explicit threshold $N(\gamma,\delta)$ such that $B(n,\gamma)\leq\delta$ for every integer $n\geq N(\gamma,\delta)$ and a prescribed failure tolerance $0<\delta<1$. What counts as practically useful depends on the intended range of $n$ and tolerance; no numerical target is asserted here.

## Status

As of 2026-11-14, this item records the finite-size optimization question raised by the article, not a claimed solution or a completed review of subsequent literature. The article says that its asymptotically sharp $G(n,p)$ result was not optimized for practically relevant sizes, particularly near the connectivity threshold, and that the example $p=2\log n/n$ may require an impractically large $n$.

The completed [[thm-expander-sync-thm-6-2|quantitative synchrony supplier]] gives a partial asymptotic result: under countable choice, for $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, some $C(\gamma,\varepsilon)>0$ bounds the failure probability by $C(\gamma,\varepsilon)n^{-\varepsilon}$ for all sufficiently large $n$. For example, $\gamma=2$ and $\varepsilon=1/2$ satisfy these inequalities. This existential statement does not provide the explicit constants or finite-size threshold requested above. The supplier distinguishes its synchrony conclusion from the article's separately refuted exact-expansion probability assertion; that assertion is not used here.

## Source notes

The motivation and the example are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 38, Section 7. The article does not establish an answer to the finite-size question in that passage.
