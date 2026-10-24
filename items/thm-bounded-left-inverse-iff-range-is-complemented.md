---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-bounded-left-inverse-iff-range-is-complemented.json
  precheck: pass
id: thm-bounded-left-inverse-iff-range-is-complemented
kind: theorem
title: "Under Dependent Choice, an injective bounded operator between Banach spaces has a bounded left inverse exactly when its range is closed and complemented"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-left-and-right-inverses, def-bounded-linear-operator,
       def-dependent-choice,
       thm-complemented-subspace-iff-range-of-a-bounded-projection,
       thm-bounded-below-iff-injective-with-closed-range]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]).

Let $X$ and $Y$ be Banach spaces over the same scalar field, and let
$T:X\to Y$ be an injective bounded linear operator. Then $T$ has a bounded left
inverse if and only if $\operatorname{ran}(T)$ is closed and complemented in
$Y$.

## Facts & Assumptions

**Given:** Banach spaces $X$ and $Y$, an injective bounded linear operator $T:X\to Y$, and a bounded linear operator $S:Y\to X$.

[L0] Dependent Choice is assumed ([[def-dependent-choice]]).

[L1] A bounded left inverse means $ST=I_X$ ([[def-bounded-left-and-right-inverses]]).

[L2] Complemented subspaces are exactly the ranges of bounded projections ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]]).

[L3] For bounded operators between Banach spaces, injective with closed range is equivalent to bounded below ([[thm-bounded-below-iff-injective-with-closed-range]]).

## Proof

**Proof technique:** direct.

1.1 Assume $S$ is a bounded left inverse of $T$, so $ST=I_X$ by [L1]. If $Tx_n \to y$ in $Y$, then $x_n = S(Tx_n) \to S(y)$ because $S$ is bounded. Since $T$ is bounded as well, $Tx_n \to T(Sy)$. Hence $y=T(Sy)$, so $\operatorname{ran}(T)$ is closed. [L1, given]

1.2 Conversely, assume $\operatorname{ran}(T)$ is closed and complemented in $Y$. Since $T$ is injective and has closed range, [L0] and [L3] make it bounded below. Thus the inverse $R:\operatorname{ran}(T)\to X$ defined by $R(Tx)=x$ is bounded. [L0, L3]

2.1 With $P:=TS$, one has $P^2 = T(ST)S = TS = P$. If $\|Tx\| \le C_T\|x\|$ and $\|Sy\| \le C_S\|y\|$, then $\|Py\|=\|TSy\| \le C_TC_S\|y\|$, so $P$ is bounded. For every $y \in Y$, $Py=TSy$ lies in $\operatorname{ran}(T)$. If $y=Tx$ is already in the range, then $Py=TSTx=Tx=y$. So $\operatorname{ran}(P)=\operatorname{ran}(T)$, and [L2] shows that the range is complemented. [step 1.1, L1, given, L2, algebra]

2.2 Let $P:Y\to Y$ be a bounded projection onto $\operatorname{ran}(T)$, given by [L2]. Then $S:=R\circ P:Y\to X$ is bounded and $STx = R(P(Tx)) = R(Tx)=x$ for every $x \in X$. Hence $S$ is a bounded left inverse of $T$. [step 1.2, L2, algebra]

3.1 Steps 2.1 and 2.2 prove the equivalence. [step 2.1, step 2.2] ∎


## Remarks

Under either equivalent condition, put $M=\operatorname{ran}(T)$, let
$A:X\to M$ be the corestriction $Ax=Tx$, and let $i:M\to Y$ be inclusion.
Then $R=A^{-1}:M\to X$ is bounded. For a bounded projection $P:Y\to Y$
onto $M$, write $Q:Y\to M$ for the same map with codomain restricted to $M$.
The factorization picture is:

```tikz
\begin{tikzpicture}
\node (X) at (0,0) {$X$};
\node (M) at (3.4,0) {$M$};
\node (Y) at (6.8,0) {$Y$};
\draw[->] (X) to[bend left=18] node[above] {$A$} (M);
\draw[->] (M) to[bend left=18] node[below] {$R$} (X);
\draw[->] (M) to[bend left=18] node[above] {$i$} (Y);
\draw[->] (Y) to[bend left=18] node[below] {$Q$} (M);
\draw[->] (X) to[bend left=48] node[above] {$T=iA$} (Y);
\draw[->] (Y) to[bend left=48] node[below] {$S=RQ$} (X);
\end{tikzpicture}
```

Here $RA=I_X$, $AR=I_M$, and $Qi=I_M$. Thus $ST=RQ iA=RA=I_X$
and $TS=iARQ=iQ=P$, giving $P^2=iQiQ=iQ=P$. Starting with a left inverse
$S$, step 2.1 supplies $P=TS$ and its corestriction is $Q=AS$; starting
with $P$, step 2.2 supplies $S=RQ$. The inclusion $i$ need not be onto $Y$.
The proof above is independent of this illustration.
