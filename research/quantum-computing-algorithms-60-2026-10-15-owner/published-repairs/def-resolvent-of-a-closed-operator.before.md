---
id: def-resolvent-of-a-closed-operator
kind: definition
title: "Resolvent and spectrum of a closed operator on a Banach space"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-banach-space
  - rem-real-and-complex-normed-space-convention
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - thm-closed-graph-theorem
  - def-bounded-linear-operator
  - def-resolvent-and-spectrum-of-a-closed-unbounded-operator
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter IV Section 1, Definition 1.1 and the resolvent identity (1.1), printed pp. 239-241"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, resolvent definition preceding Remark 1.16 and Remark 1.16(a)-(c), printed p. 10 (March 19, 2026 revision)"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 2.2, Definitions 3-4, printed pp. 12-13"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ ([[def-banach-space]], [[rem-real-and-complex-normed-space-convention]]) and let $A:D(A)\subseteq X\to X$ be a closed linear operator: $D(A)$ is a linear subspace and $\Gamma(A)=\{(x,Ax):x\in D(A)\}$ is closed in $X\times X$ with norm $\|(x,y)\|=\|x\|+\|y\|$. This extends the Hilbert-space vocabulary of [[def-unbounded-linear-operator-domain-and-graph]] and [[def-densely-defined-closed-and-closable-operator]] to Banach spaces. A scalar $\lambda\in\mathbb K$ belongs to the **resolvent set** $\rho(A)$ if $\lambda I-A:D(A)\to X$ is bijective and its inverse is bounded on $X$. Under Dependent Choice, boundedness of the inverse follows from bijectivity by [[thm-closed-graph-theorem]]; thus under DC this is equivalent to the bijectivity-only convention. For $\lambda\in\rho(A)$ the bounded operator $$R(\lambda,A):=(\lambda I-A)^{-1}\in\mathcal B(X)$$ is the **resolvent**, and $\sigma(A):=\mathbb K\setminus\rho(A)$ is the spectrum. One has $R(\lambda,A)X=D(A)$, $R(\lambda,A)(\lambda I-A)y=y$ for $y\in D(A)$, and $\lambda R(\lambda,A)x-x=AR(\lambda,A)x$ for $x\in X$; in particular $AR(\lambda,A)=\lambda R(\lambda,A)-I\in\mathcal B(X)$. This is the Banach-space form of the Hilbert-space vocabulary [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]; the shift convention $\lambda I-A$ is the same, with the closed graph theorem replacing the Hilbert-space bounded-inverse convention.

**Boundedness under DC.** Assume Dependent Choice. If $\lambda\in\mathbb K$ and $\lambda I-A$ is
bijective, then $\lambda I-A$ is a closed operator: its graph is the image of
the graph $\Gamma(A)\subseteq X\oplus X$ ([[def-unbounded-linear-operator-domain-and-graph]])
under the homeomorphism $(y,z)\mapsto(y,\lambda y-z)$ of $X\oplus X$ with
inverse $(u,v)\mapsto(u,\lambda u-v)$. Hence $(\lambda I-A)^{-1}:X\to X$ has
closed graph and is everywhere defined, so the closed graph theorem
([[thm-closed-graph-theorem]], which assumes DC) makes it bounded; this is the
one place where an axiom beyond ZF enters, and it is the DC carried by the cited
theorem. The Banach-space vocabulary is [[def-banach-space]] with the scalar
convention of [[rem-real-and-complex-normed-space-convention]]; boundedness and
the space $\mathcal B(X)$ are those of [[def-bounded-linear-operator]].

**Elementary identities.** Let $\lambda\in\rho(A)$ and $R:=R(\lambda,A)$. Since
$R$ is the inverse of the bijection $\lambda I-A:D(A)\to X$, its range is
$D(A)$: $RX=D(A)$. It satisfies
$$R(\lambda I-A)y=y\quad(y\in D(A)),\qquad(\lambda I-A)Rx=x\quad(x\in X).$$
The first identity says $R(\lambda,A)(\lambda I-A)=I_{D(A)}$ and the second
says $(\lambda I-A)R(\lambda,A)=I_X$. Reading the second identity as
$\lambda Rx-ARx=x$ and rearranging gives
$$\lambda R(\lambda,A)x-x=AR(\lambda,A)x\qquad(x\in X),$$
that is $AR(\lambda,A)=\lambda R(\lambda,A)-I$ as everywhere-defined operators
$X\to X$; in particular $AR(\lambda,A)\in\mathcal B(X)$ even though $A$ itself
need not be bounded. The same identities hold for every $\lambda\in\rho(A)$,
and $\sigma(A):=\mathbb K\setminus\rho(A)$ collects the scalars for which
$\lambda I-A$ fails to be bijective or has an unbounded inverse. Under DC,
the latter possibility is excluded by the closed graph argument above. When $X$ is a Hilbert space this is the
Banach-space form of [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]],
with the same shift convention $\lambda I-A$; the closed graph theorem replaces
the Hilbert-space convention that the resolvent is bounded by definition.
