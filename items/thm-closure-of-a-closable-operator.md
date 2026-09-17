---
id: thm-closure-of-a-closable-operator
kind: theorem
title: "Closure of a closable operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unbounded-linear-operator-domain-and-graph, def-densely-defined-closed-and-closable-operator, def-countable-choice, def-metric-interior-closure-boundary]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Remark 7.14 and Lemma 7.16, pp.31-32"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Sec. 6.1, closure of the graph"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $T$ be a linear
operator on $H$ with domain $D(T)$ and graph $\Gamma(T)$
([[def-unbounded-linear-operator-domain-and-graph]]). Then the following are
equivalent:

1. $T$ is closable
   ([[def-densely-defined-closed-and-closable-operator]]);
2. whenever $x_n\in D(T)$, $x_n\to0$ and $Tx_n\to y$, one has $y=0$.

If either condition holds, then the closure of $\Gamma(T)$ in $H\oplus H$ is
the graph of a linear operator $\overline T$, the **closure** of $T$; it is the
least closed extension of $T$, and $T$ is closed if and only if
$\overline T=T$. Necessity of the hypothesis is never claimed: both conditions
hold automatically for a closed operator.

## Facts & Assumptions

[A1] $\Gamma(T)$ is a linear subspace of $H\oplus H$; $T\subseteq S$ exactly when $\Gamma(T)\subseteq\Gamma(S)$; $T$ is closed exactly when $\Gamma(T)$ is closed; and $\Gamma(T)\cap(\{0\}\oplus H)=\{(0,0)\}$ ([[def-unbounded-linear-operator-domain-and-graph]]).

[A2] $T$ is closable when it has a closed extension; the closure $\overline{A}$ of a subset $A$ of a metric space is closed, is contained in every closed set containing $A$, and every point of $\overline A$ is the limit of a sequence in $A$ ([[def-metric-interior-closure-boundary]], [[def-densely-defined-closed-and-closable-operator]]).

[A3] A sequence in $H\oplus H$ converges exactly when its two coordinate sequences converge in $H$ ([[def-unbounded-linear-operator-domain-and-graph]]).

## Proof

**Proof technique:** direct.

**Given:** A linear operator $T$ on $H$ and the two conditions (1) and (2).

1.1 If $T$ has a closed extension $S$, then $\Gamma(T)\subseteq\Gamma(S)$ with $\Gamma(S)$ closed, and for $x_n\in D(T)$ with $x_n\to0$, $Tx_n\to y$ we get $(x_n,Tx_n)\to(0,y)$ by [A3] with $(x_n,Tx_n)\in\Gamma(T)\subseteq\Gamma(S)$; closedness of $\Gamma(S)$ gives $(0,y)\in\Gamma(S)$, and by the last clause of [A1] applied to $S$ this forces $y=0$. Thus (1) implies (2). [A1, A2, A3, given]

1.2 Now assume (2), and let $G:=\overline{\Gamma(T)}\subseteq H\oplus H$. Then $G$ is closed and, being the closure of the linear subspace $\Gamma(T)$, is itself a linear subspace. If $(0,y)\in G$ then by [A2] there are $(x_n,Tx_n)\in\Gamma(T)$ with $(x_n,Tx_n)\to(0,y)$, hence $x_n\to0$ and $Tx_n\to y$ by [A3], so $y=0$ by (2). Therefore $G\cap(\{0\}\oplus H)=\{(0,0)\}$. [A1, A2, A3, given]

2.1 By step 1.2, $G$ determines at most one second coordinate per first coordinate: if $(x,y),(x,y')\in G$ then $(0,y-y')=(x,y)-(x,y')\in G$ since $G$ is a subspace, so $y=y'$. Hence $D:=\{x\in H:\text{there is }y\text{ with }(x,y)\in G\}$ is a linear subspace of $H$, the formula $\overline Tx:=y$ for $(x,y)\in G$ defines a linear operator $\overline T:D\to H$ with $\Gamma(\overline T)=G$, and $\overline T$ is closed with $T\subseteq\overline T$ because $\Gamma(T)\subseteq G$. [A1, step 1.2]

3.1 By step 2.1 the operator $\overline T$ is a closed extension of $T$, so $T$ is closable, and (2) implies (1). With 1.1 this proves the equivalence of (1) and (2), and it shows that whenever either holds the closure $\overline{\Gamma(T)}$ is the graph of the closed extension $\overline T$. [A2, step 1.1, step 2.1]

3.2 If $R$ is any closed extension of $T$, then $\Gamma(R)$ is closed and contains $\Gamma(T)$, so $G=\overline{\Gamma(T)}\subseteq\Gamma(R)$ by [A2], that is, $\overline T\subseteq R$. Thus $\overline T$ is the least closed extension of $T$. [A1, A2, step 2.1]

4.1 If $T$ is closed then $\Gamma(T)$ is already closed, so $G=\Gamma(T)$ and $\overline T=T$; conversely if $\overline T=T$ then $T$ is closed because $\overline T$ is closed by step 2.1. Hence $T$ is closed if and only if $\overline T=T$, and the closure of the graph is the graph of the least closed extension. [A1, step 2.1, step 3.2] ∎
