---
id: lem-good-tree-watson-omega-sequence-closure
kind: lemma
title: "The Good-Tree-Watson symmetric model is closed under omega-sequences from the full extension"
status: draft
origin: pipeline
deps: [def-good-tree-watson-symmetric-stone-model, thm-forcing-theorem, lem-symmetry-lemma-for-forcing-automorphisms, def-forcing-name-automorphism-action, def-symmetric-forcing-system-and-hereditarily-symmetric-names, thm-hereditarily-symmetric-interpretations-form-a-zf-model, def-natural-numbers, def-forcing-preorder-compatibility-and-filter]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Sections 2-4, printed pp. 2-9"
    - title: "Thomas J. Jech, The Axiom of Choice"
      url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"
      locator: "Chapter 8, §2, Lemma 8.5, printed pp. 123-124"
---

## Statement

In the regular-$\lambda$ Good-Tree-Watson construction of
[[def-good-tree-watson-symmetric-stone-model]], if $\beta < \lambda$ and
$g \in M[H]$ is a function with domain $\beta$ all of whose values lie in the
symmetric model $N$, then $g \in N$. In particular, for $\lambda = \omega_1$ the
conclusion holds for $\omega$-sequences: $N$ is closed under
$\omega$-sequences from the full generic extension.

## Facts & Assumptions

**Given:** The regular-$\lambda$ construction, a cardinal $\beta < \lambda$, and a function $g : \beta \to N$ in $M[H]$.

[F1] The forcing $P$ is $<\lambda$-closed: the union of a descending chain of conditions of length below $\lambda$ is a condition, because the union of fewer than $\lambda$ sets each of size below $\lambda$ has size below $\lambda$ by regularity of $\lambda$ ([[def-forcing-preorder-compatibility-and-filter]], [[def-good-tree-watson-symmetric-stone-model]]).

[F2] The forcing theorem identifies the values of names in the generic extension, and the symmetry lemma transports forcing statements along automorphisms of the group; hereditarily symmetric names have hereditarily symmetric images ([[thm-forcing-theorem]], [[lem-symmetry-lemma-for-forcing-automorphisms]], [[def-forcing-name-automorphism-action]]).

[F3] Hereditary symmetry is evaluated through supports: a set is in $N$ exactly when it has a support in the normal filter of the construction, and the filter contains every pointwise stabiliser of a set of size below $\lambda$ ([[def-good-tree-watson-symmetric-stone-model]], [[def-symmetric-forcing-system-and-hereditarily-symmetric-names]], [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]]).

[L1] A $<\lambda$-closed forcing over a ZFC ground model adds no new sequences of ground-model sets of length below $\lambda$. Indeed, below any condition and for a name for such a sequence of length $\beta<\lambda$, recursively strengthen the condition to decide one coordinate at each successor stage and take lower bounds at limit stages and at $\beta$; the conditions produced at the final stage are dense, so the generic filter contains one which decides the whole sequence as a ground-model sequence. [F1, F2]

## Proof

**Proof technique:** direct.

1.1 Let $\beta<\lambda$ and let $g:\beta\to N$ belong to the full extension. For each $\xi<\beta$, choose in the full ZFC extension a hereditarily symmetric ground-model name $\dot x_\xi$ such that $(\dot x_\xi)_H=g(\xi)$. [given, F3]

2.1 The sequence $h=\langle\dot x_\xi:\xi<\beta\rangle$ has length below $\lambda$ and all its entries belong to the ground model. By [L1], $h$ itself belongs to the ground model. This is the point at which closure is used: it produces one ground-model sequence of names, rather than unrelated values decided by incompatible conditions. [step 1.1, L1]

3.1 Working now in the ground model, use Choice there to select for every $\xi<\beta$ a support $e_\xi$ of $\dot x_\xi$ with $|e_\xi|<\lambda$, and put $e:=\bigcup_{\xi<\beta}e_\xi$. [step 2.1, F3]

4.1 The union $e$ has size below $\lambda$: it is the union of $\beta < \lambda$ many sets each of size below $\lambda$, and $\lambda$ is regular, so the union is below $\lambda$. [step 3.1, F1, F3]

5.1 Form in the ground model the canonical name $\dot k$ for the graph $\{\langle\xi,(\dot x_\xi)_H\rangle:\xi<\beta\}$. Every automorphism in $\operatorname{fix}(e)$ fixes each $\dot x_\xi$ and each canonical ordinal name $\check\xi$, hence fixes $\dot k$. Its constituent names are hereditarily symmetric, so $\dot k$ is hereditarily symmetric. [step 3.1, step 4.1, F2, F3]

6.1 By construction, $(\dot k)_H=\{\langle\xi,g(\xi)\rangle:\xi<\beta\}=g$. Since $\dot k$ is hereditarily symmetric, [F3] gives $g\in N$. This holds for every $\beta<\lambda$, and in particular for $\beta=\omega$ when $\lambda=\omega_1$. [step 1.1, step 5.1, F2, F3] ∎
