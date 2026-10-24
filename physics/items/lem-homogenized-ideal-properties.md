---
id: "lem-homogenized-ideal-properties"
kind: "lemma"
title: "Elementary properties of the homogenized ideal"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 7
deps:
  - "def-axiom-of-choice"
  - "def-homogenized-ideal"
  - "def-ideal-of-derivatives"
  - "def-maximal-order-and-tangent-directions"
  - "lem-addition-and-multiplication-of-marked-ideals"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Let $(\mathcal I,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ and let $H(\mathcal I)$ be its homogenization ([[def-homogenized-ideal]]).
Then:
(1) if $\mu=1$ then $H(\mathcal I)=\mathcal I$;
(2) $H(\mathcal I)=\mathcal I+\mathcal D(\mathcal I)T(\mathcal I)+\dots+\mathcal D^{\mu-1}(\mathcal I)T(\mathcal I)^{\mu-1}+\dots$ agrees with its truncation at order $\mu-1$ as an element of the equivalence class of $(\mathcal I,\mu)$;
(3) Assume AC. Then
$$H(\mathcal I,\mu)=(\mathcal I,\mu)+\mathcal D(\mathcal I,\mu)(T(\mathcal I),1)+\dots+\mathcal D^{\mu-1}(\mathcal I,\mu)(T(\mathcal I),1)^{\mu-1}$$
up to marked equivalence for the operation of [[lem-addition-and-multiplication-of-marked-ideals]];
(4) if $\mu>1$ and $K$ has characteristic zero or perfect characteristic $p>\mu$, then $\mathcal D(H(\mathcal I,\mu))\subseteq H(\mathcal D(\mathcal I),\mu-1)$;
(5) $T(H(\mathcal I))=T(\mathcal I)$.

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,\mu)$ of maximal order with $\mu\ge1$, with $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$ and homogenization $H(\mathcal I)=\sum_{i=0}^{\mu-1}\mathcal D^i(\mathcal I)T(\mathcal I)^i$.

[F1] [[def-homogenized-ideal]]: $H(\mathcal I)=\mathcal I+\mathcal D(\mathcal I)T(\mathcal I)+\dots+\mathcal D^{\mu-1}(\mathcal I)T(\mathcal I)^{\mu-1}$ and $T(\mathcal I)=\mathcal D^{\mu-1}\mathcal I$.

[F2] [[def-ideal-of-derivatives]]: $\mathcal D^i(\mathcal I)\supseteq\mathcal D^{i-1}(\mathcal I)$, $\mathcal D^{i+j}(\mathcal I)=\mathcal D^j(\mathcal D^i(\mathcal I))$, and $\mathcal D^i(\mathcal A)\subseteq\mathcal D^i(\mathcal B)$ for $\mathcal A\subseteq\mathcal B$.

[F3] [[def-maximal-order-and-tangent-directions]]: in characteristic zero or perfect characteristic $p>\mu$, maximal order implies $\mathcal D^\mu(\mathcal I)=\mathcal O_X$. In every characteristic $\mathcal D(T(\mathcal I))=\mathcal D^\mu(\mathcal I)$ is an ideal subsheaf of $\mathcal O_X$.

[F4] [[lem-addition-and-multiplication-of-marked-ideals]]: sums and products of marked ideals and their controlled transforms are computed componentwise as in that item.

[A1] [[def-axiom-of-choice]]: AC is used in clause (3) through the iterated marked-sum theorem in [F4].

## Proof

1.1 Clauses (1) and (2). If $\mu=1$ then $T(\mathcal I)=\mathcal D^0\mathcal I=\mathcal I$ and the defining sum has the single term $\mathcal I$, so $H(\mathcal I)=\mathcal I$, which is (1). For (2), extend the defining sum to all $i\ge0$. For each $i\ge\mu$, the $i$-th term $\mathcal D^i(\mathcal I)T(\mathcal I)^i$ is contained in $T(\mathcal I)^i$ because $\mathcal D^i(\mathcal I)\subseteq\mathcal O_X$, and hence is contained in $T(\mathcal I)^\mu$. Since $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$, the $i=\mu-1$ term is exactly $T(\mathcal I)^\mu$. Thus every later term is contained in the last retained term, and the full sum equals its truncation. [F1, F2]

1.2 Clause (5). For a local product generator of a summand $\mathcal D^i(\mathcal I)T(\mathcal I)^i$, applying a coordinate derivative of total order at most $\mu-1$ gives sums of products with $a_0$ derivatives on the first factor and $a_1,\dots,a_i$ derivatives on the $i$ tangent factors, where $a_0+\sum_\ell a_\ell\le\mu-1$. The first factor lies in $\mathcal D^{i+a_0}(\mathcal I)$. If $i+a_0\le\mu-1$, this is contained in $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$ because derivative ideals increase with their index. If $i+a_0>\mu-1$, then $\sum_\ell a_\ell\le\mu-1-a_0<i$, so at least one tangent factor is undifferentiated and the product contains a factor of $T(\mathcal I)$. In both cases the resulting product lies in $T(\mathcal I)$, proving $\mathcal D^{\mu-1}(H(\mathcal I))\subseteq T(\mathcal I)$. The reverse inclusion follows from $\mathcal I\subseteq H(\mathcal I)$ and monotonicity of derivative ideals. Thus $T(H(\mathcal I))=T(\mathcal I)$, proving (5). [F1, F2]

1.3 Clause (3). Each product $\mathcal D^i(\mathcal I,\mu)(T(\mathcal I),1)^i$ has underlying ideal $J_i=\mathcal D^i(\mathcal I)T(\mathcal I)^i$ and mark $\mu$. Their literal ideal sum is $H(\mathcal I)$ with mark $\mu$. Its support is the intersection of the supports of $(J_i,\mu)$, since the order of an ideal sum is the minimum of the summand orders. At a common admissible center the controlled transform of the literal sum distributes termwise, because all marks are $\mu$. Induction therefore identifies its test sequences and induced supports with the simultaneous ones for the summands. Under AC, [F4] gives exactly those supports and test sequences for the iterated marked sum. Thus the displayed operation represents $H(\mathcal I,\mu)$ up to marked equivalence, proving (3); no literal equality between a sum of ideal powers and a power of an ideal sum is used. [A1, F1, F4]

1.4 Clause (4). Assume $\mu>1$ and $K$ has characteristic zero or perfect characteristic $p>\mu$. The maximal-order criterion in [F3] gives $\mathcal D^\mu(\mathcal I)=\mathcal O_X$, so $(\mathcal D(\mathcal I),\mu-1)$ is maximal order and $T(\mathcal D(\mathcal I))=\mathcal D^{\mu-2}(\mathcal D(\mathcal I))=T(\mathcal I)$. Leibniz gives
$$\mathcal D(H(\mathcal I))\subseteq\sum_{i=0}^{\mu-1}\mathcal D^{i+1}(\mathcal I)T(\mathcal I)^i+\sum_{i=1}^{\mu-1}\mathcal D^i(\mathcal I)T(\mathcal I)^{i-1}\mathcal D(T(\mathcal I)).$$
Since $\mathcal D(T(\mathcal I))=\mathcal D^\mu(\mathcal I)=\mathcal O_X$, the second sum is the sum of the terms $\mathcal D^i(\mathcal I)T(\mathcal I)^{i-1}$ for $1\le i\le\mu-1$. In the first sum, the terms with $1\le i+1\le\mu-1$ are precisely the terms $\mathcal D^j(\mathcal D(\mathcal I))T(\mathcal I)^j$ of $H(\mathcal D(\mathcal I),\mu-1)$ after setting $j=i$; its remaining top term is $\mathcal D^\mu(\mathcal I)T(\mathcal I)^{\mu-1}=T(\mathcal I)^{\mu-1}$, already the $i=\mu-1$ term of the second sum. The second sum itself consists of the terms $\mathcal D^{i-1}(\mathcal D(\mathcal I))T(\mathcal I)^{i-1}$ of $H(\mathcal D(\mathcal I),\mu-1)$. Hence the derivative ideal is contained in that homogenized ideal, proving (4). [F1, F2, F3, step 1.2] ∎
