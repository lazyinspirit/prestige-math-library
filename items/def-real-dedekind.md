---
id: def-real-dedekind
kind: definition
title: "The real numbers $\\mathbb{R}$ as Dedekind cuts"
status: published
origin: session
deps: [def-dedekind-cut, def-rationals]
justified_by: [lem-rational-cut-is-cut]
aliases: []
landmark: true
short: "ℝ (cuts)"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

The **real numbers** are defined to be the set of all Dedekind cuts of
$\mathbb{Q}$ ([[def-dedekind-cut]]):
$$\mathbb{R} := \{\, A \subseteq \mathbb{Q} : A \text{ is a Dedekind cut} \,\}.$$
Elements of $\mathbb{R}$ are written $A, B, C, \dots$; each is a subset of
$\mathbb{Q}$ satisfying (C1)–(C3).

The rationals embed into $\mathbb{R}$ by the **rational embedding**: for
$q \in \mathbb{Q}$ set
$$q^{*} := \{\, r \in \mathbb{Q} : r < q \,\},$$
the cut of all rationals strictly below $q$. Each $q^{*}$ is a Dedekind cut
([[lem-rational-cut-is-cut]]), and $q \mapsto q^{*}$ sends $\mathbb{Q}$ into
$\mathbb{R}$. The images of $0$ and $1$ are written $0^{*}$ and $1^{*}$; being
cuts they lie in $\mathbb{R}$ and serve as its additive and multiplicative
identities.

## Remarks

A cut $A$ is exactly the set of rationals lying *below* a putative real point;
$\mathbb{R}$ is thus built by naming each point through the downward gap of
rationals it determines. Where $\mathbb{Q}$ has a genuine rational point $q$,
the cut $q^{*}$ recovers it, but the construction also admits cuts $A$ with no
largest excluded rational and no rational boundary at all, such as
$\{\, q : q < 0 \text{ or } q^{2} < 2 \,\}$. These are precisely the *missing
limits* of $\mathbb{Q}$: the cut convention manufactures a real number wherever
$\mathbb{Q}$ leaves a hole, which is why $\mathbb{R}$ is complete while
$\mathbb{Q}$ is not.

The order on $\mathbb{R}$ is set inclusion, $A \le B :\Leftrightarrow A \subseteq B$
([[def-cut-order]]). That $q \mapsto q^{*}$ is an order-preserving field
embedding, and that its image is dense, is recorded in [[lem-rat-cut-embeds]];
the arithmetic and order structure making $\mathbb{R}$ a complete ordered field
is developed in [[thm-reals-dedekind-ordered-field]] and [[thm-dedekind-complete]].
