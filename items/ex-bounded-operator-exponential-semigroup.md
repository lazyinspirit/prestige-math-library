---
id: ex-bounded-operator-exponential-semigroup
kind: example
title: "The exponential of a bounded operator is a uniformly continuous semigroup"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - lem-exponential-series-of-a-bounded-operator
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-strongly-continuous-semigroup
  - def-bounded-linear-operator
  - def-operator-norm
  - def-resolvent-of-a-closed-operator
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.2, Theorem 11.4 and Example 11.1, printed pp. 250-253"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 3, Theorem 3.7, printed pp. 20-23"
verification:
  precheck: pass
---

## Example

Let $X$ be a Banach space and let $A\in\mathcal B(X)$. The exponential series of [[lem-exponential-series-of-a-bounded-operator]] defines $E(t)=e^{tA}$ for all real $t$, and $T(t):=E(t)|_{t\ge0}$ is a strongly continuous semigroup on $X$ with: (i) $\|T(t)\| \le e^{t\|A\|}$ and $T(0)=I$; (ii) $t\mapsto T(t)$ is continuous for the operator norm, so $T$ is uniformly continuous; (iii) the generator of $T$ is $A$, with domain $D(A)=X$; (iv) $E(t+s)=E(t)E(s)$ for all $s,t\in\mathbb R$, so $E$ is a group; and $t\mapsto T(t)x$ solves $u'=Au$, $u(0)=x$ for every $x\in X$, in fact classically with $u\in C^1(\mathbb R;X)$ and $u'=Au$ everywhere.

## Verification

**Given:** A Banach space $X$, an operator $A\in\mathcal B(X)$, the exponential series $E(t)=\sum_{n\ge0}\frac{t^n}{n!}A^n$ of [[lem-exponential-series-of-a-bounded-operator]], and $T(t):=E(t)$ for $t\ge0$.

[F1] For every real $t$ the series $E(t)$ converges absolutely in operator norm, $\|E(t)\|\le e^{|t|\,\|A\|}$, $E(0)=I$, $E(t+s)=E(t)E(s)$ for all real $s,t$, $E$ is $C^\infty$ with $E'(t)=AE(t)=E(t)A$, and $\bigl\|\frac{E(t)-I}{t}-A\bigr\|\le\frac{|t|}{2}\|A\|^2e^{|t|\,\|A\|}\to0$ ([[lem-exponential-series-of-a-bounded-operator]]).

[F2] The generator of a strongly continuous semigroup is defined by $D(A)=\{x:\lim_{h\downarrow0}\frac{T(h)x-x}{h}\ \text{exists}\}$ and $Ax$ equal to that limit ([[def-infinitesimal-generator-of-a-c-zero-semigroup]], [[def-strongly-continuous-semigroup]]).

**Proof technique:** direct verification of the semigroup axioms and of the generator difference quotients from the exponential-series lemma.

1.1 $T(0)=E(0)=I$ and $T(t+s)=E(t+s)=E(t)E(s)=T(t)T(s)$ for $s,t\ge0$; moreover $\|T(t)\|=\|E(t)\|\le e^{t\|A\|}$ since $t\ge0$, which is claim (i) and the group law restricted to $[0,\infty)$. [F1]

1.2 $t\mapsto T(t)$ is norm continuous on $[0,\infty)$, indeed $C^\infty$ there with derivative $AE(t)$; since $\|(T(t)-T(t_0))x\|\le\|T(t)-T(t_0)\|\,\|x\|$, the family is strongly continuous, so it is a $C_0$-semigroup, and it is uniformly continuous as a norm-continuous family: claims (ii) and (iv) for real times follow from the same identities. [F1, F2]

1.3 Generator: for $x\in X$ and $h>0$, $\bigl\|\frac{T(h)x-x}{h}-Ax\bigr\|\le\bigl\|\frac{E(h)-I}{h}-A\bigr\|\,\|x\|\le\frac{h}{2}\|A\|^2e^{h\|A\|}\|x\|\to0$, so every $x\in X$ lies in the generator domain $D(A)$ of the semigroup and the generator acts by $x\mapsto Ax$; hence the generator is the bounded operator $A$ with $D(A)=X$, which is claim (iii). [F1, F2]

2.1 Classical orbits: for $u(t):=E(t)x$ one has $u'(t)=E'(t)x=AE(t)x=Au(t)$ for every real $t$, and $u(0)=x$, so $u\in C^1(\mathbb R;X)$ solves $u'=Au$ classically; $u$ is unique among such solutions by the same argument applied to the difference of two solutions, alternatively by the group law $E(-t)u(t)=x$. [F1, step 1.2]

3.1 All of (i)-(iv) and the classical-solution statement are established, with $\omega=\|A\|$ and $M=1$ in the exponential bound. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
