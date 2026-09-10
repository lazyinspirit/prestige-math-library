---
id: def-small-dowker-tight-strongly-unbounded-coloring
kind: definition
title: "Tight strongly unbounded colorings"
status: draft
origin: pipeline
deps: [def-small-dowker-luzin-stick-and-ad-principles]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rinot–Shalev–Todorcevic, A new small Dowker space, Definition 2.1 and Remark 2.2, pp.2–3"
      url: https://arxiv.org/pdf/2209.10504
---

## Definition

Use the ZFC, $\kappa=\omega_1$, and finite-string conventions of [[def-small-dowker-luzin-stick-and-ad-principles]]. Given $c:\omega\times\kappa\to\omega$, its column at $\beta$ is $c_\beta(n)=c(n,\beta)$.

The coloring is **strongly unbounded** if for every uncountable set $B\subseteq\kappa$ there are $n<\omega$ and $t\in\omega^n$ such that

$$\{c_\beta(n):\beta\in B,\ t\subseteq c_\beta\}$$

is unbounded in $\omega$. Equivalently, for every $m<\omega$ some $\beta\in B$ extends $t$ and satisfies $c_\beta(n)>m$. Empty or countable $B$ are not tested. The case $n=0$ allows the empty prefix. Distinct column indices are not required to give distinct functions.

For any set $T\subseteq\omega^{<\omega}$, define

$$[T]_c=\{\beta<\kappa:(\forall n<\omega)\ c_\beta\mathbin{\upharpoonright}n\in T\},\qquad \mathcal T_c=\{T\subseteq\omega^{<\omega}:[T]_c\text{ is uncountable}\}.$$

No closure-under-prefixes assumption is imposed on $T$. The full finite-string set lies in $\mathcal T_c$; the empty set does not, since even the length-zero prefix is required. The coloring is **tight** if there exists $\mathcal U\subseteq\mathcal T_c$, of size at most $\aleph_1$, such that

$$ (\forall T\in\mathcal T_c)(\exists U\in\mathcal U)\ U\subseteq T.$$

Thus the cofinality convention $\operatorname{cf}(\mathcal T_c,\supseteq)\le\aleph_1$ means downward cofinality under ordinary inclusion. The witnessing family cannot be empty, because $\mathcal T_c$ is nonempty. Tightness and strong unboundedness are properties, not existence assertions.

For **distinct** $x,y\in\omega^\omega$, let $\Delta(x,y)=\min\{n:x(n)\ne y(n)\}$. It is undefined for equal sequences. For any $x$ put $\widehat x(n)=\sum_{m\le n}(x(m)+1)$. This is a natural-valued strictly increasing majorant: $\widehat x(0)=x(0)+1>x(0)$ and $\widehat x(n+1)=\widehat x(n)+x(n+1)+1>\widehat x(n)$, while the summand $x(n)+1$ gives $\widehat x(n)>x(n)$.
