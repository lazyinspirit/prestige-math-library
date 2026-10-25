---
id: "def-natural-filtration-of-a-process"
kind: "definition"
title: "Natural filtration of a process"
deps: ["def-adapted-and-integrable-stochastic-process", "thm-generated-sigma-algebra-exists-and-is-minimal"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: published
origin: "pipeline"
---

## Definition

For a real process $X$ [[def-adapted-and-integrable-stochastic-process]], its **natural filtration** is
$$\mathcal F_n^X=\sigma\bigl(\{X_k^{-1}(B):0\le k\le n,\ B\in\mathcal B(\mathbb R)\}\bigr),\qquad n\in\mathbb N_0.$$
The generated-sigma-algebra theorem [[thm-generated-sigma-algebra-exists-and-is-minimal]] applies because the displayed sets are subsets of $\Omega$. The ambient $\mathcal F$ contains every generator, so minimality gives $\mathcal F_n^X\subseteq\mathcal F$. The generator family at $n$ is contained in that at $n+1$; hence minimality gives $\mathcal F_n^X\subseteq\mathcal F_{n+1}^X$.

Every Borel preimage under $X_n$ is a generator at time $n$, so $X$ is adapted. If $(\mathcal G_n)$ is any other filtration making $X$ adapted, then for $k\le n$ every $X_k^{-1}(B)$ belongs to $\mathcal G_k\subseteq\mathcal G_n$. Minimality therefore gives $\mathcal F_n^X\subseteq\mathcal G_n$. This proves the claimed smallest-filtration property. At time zero the generators come from $X_0$; the resulting sigma-algebra need not be trivial. No completion or arbitrary null-set modification is included, and the defining intersection requires no choice.
