---
id: lem-good-tree-watson-omega-sequence-closure
kind: lemma
title: "The Good-Tree-Watson symmetric model is closed under omega-sequences from the full extension"
status: published
origin: pipeline
deps: [def-good-tree-watson-symmetric-stone-model, thm-forcing-theorem, lem-symmetry-lemma-for-forcing-automorphisms, def-forcing-name-automorphism-action, def-symmetric-forcing-system-and-hereditarily-symmetric-names, thm-hereditarily-symmetric-interpretations-form-a-zf-model, def-natural-numbers, def-forcing-preorder-compatibility-and-filter, def-axiom-of-choice, thm-well-ordering-theorem, thm-transfinite-recursion, def-dense-open-sets-and-model-generic-filters, lem-forcing-monotonicity-density-and-decision, lem-names-for-pairs-functions-and-ordinals]
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
verification:
  audited: 2026-09-22
---

## Statement

In the regular-$\lambda$ Good-Tree-Watson construction of
[[def-good-tree-watson-symmetric-stone-model]], if $\beta < \lambda$ and
$g \in M[H]$ is a function with domain $\beta$ all of whose values lie in the
symmetric model $N$, then $g \in N$. In particular, for $\lambda = \omega_1$ the
conclusion holds for $\omega$-sequences: $N$ is closed under
$\omega$-sequences from the full generic extension.

## Facts & Assumptions

**Given:** The regular-$\lambda$ construction, an ordinal $\beta < \lambda$, and a function $g : \beta \to N$ in $M[H]$.

[F1] The forcing $P$ is $<\lambda$-closed: the union of a descending chain of conditions of length below $\lambda$ is a condition, because the union of fewer than $\lambda$ sets each of size below $\lambda$ has size below $\lambda$ by regularity of $\lambda$ ([[def-forcing-preorder-compatibility-and-filter]], [[def-good-tree-watson-symmetric-stone-model]]).

[F2] The forcing theorem identifies the values of names in the generic extension, and the symmetry lemma transports forcing statements along automorphisms of the group; hereditarily symmetric names have hereditarily symmetric images ([[thm-forcing-theorem]], [[lem-symmetry-lemma-for-forcing-automorphisms]], [[def-forcing-name-automorphism-action]]).

[F3] The symmetric model is $N=\{\tau_H:\tau\in\mathrm{HS}^M\}$. A coordinate set $e$ of ground size below $\lambda$ supports a name $\tau$ when $\operatorname{fix}(e)$ fixes that name. This proves symmetry only; hereditary symmetry also requires every subname recursively to be hereditarily symmetric. Every HS name has such a small support by the definition of the generated filter ([[def-good-tree-watson-symmetric-stone-model]], [[def-symmetric-forcing-system-and-hereditarily-symmetric-names]], [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]]).

[F4] AC holds in $M$ ([[def-axiom-of-choice]]) and well-orders the set $P$ ([[thm-well-ordering-theorem]]). A specified class-function rule on a well-order admits transfinite recursion ([[thm-transfinite-recursion]]).

[F5] Forcing persists under strengthening; an $M$-generic filter containing $p$ meets every ground set dense below $p$ ([[lem-forcing-monotonicity-density-and-decision]], [[def-dense-open-sets-and-model-generic-filters]]). Two members of a forcing filter have a common stronger member ([[def-forcing-preorder-compatibility-and-filter]]).

[F6] The all-conditions set-name operation $S(T)=T\times P$ and the Kuratowski pair-name construction give a graph name for any ground family $(\tau_\xi)$; its value is $\xi\mapsto(\tau_\xi)_H$ ([[lem-names-for-pairs-functions-and-ordinals]]). Automorphisms fix check names and permute all of $P$, so these constructions commute with the name action ([[def-forcing-name-automorphism-action]]).

## Proof

**Proof technique:** direct.

1.1 Choose in $M$ a name $\dot g$ for $g$. By the truth lemma choose $p\in H$ forcing that $\dot g$ is a function on $\check\beta$. For each $\xi<\beta$, define in $M$ the downward-closed set $$D_\xi=\{q\le p:\text{ for some }\tau\in\mathrm{HS}^M,\ q\Vdash\dot g(\check\xi)=\tau\}.$$ These are sets by Separation: HS is a definable ground class and forcing is definable for this fixed formula. They are downward closed by [F5]. Each $H\cap D_\xi$ is nonempty: $g(\xi)\in N$ has an HS name, the truth lemma gives a member of $H$ forcing the equality, and directedness combines it with $p$. This does not yet choose a simultaneous sequence of names or conditions. [given, F2, F3, F5]


2.1 Put $$E_\xi=D_\xi\cup\{q\le p:\text{ no }r\le q\text{ belongs to }D_\xi\}.$$ Each $E_\xi$ is downward closed and dense below $p$: either a stronger member of $D_\xi$ exists or the condition is already in the second part. Their intersection is dense below $p$. Indeed, from any $r\le p$ run a recursion of length $\beta$: at stage $\xi$ choose the least extension in $E_\xi$ in a fixed ground well-order of $P$; at limit stages take the union of the preceding partial functions. The final union at $\beta$ is a condition by [F1], is stronger than $r$, and remains in every earlier $E_\xi$ by downward closure. For $\beta=0$ retain $r$. This is one ground recursion licensed by [F4]; it spends ground AC in the well-order of $P$. [step 1.1, F1, F4]


3.1 By genericity [F5], fix $q\in H\cap\bigcap_{\xi<\beta}E_\xi$ with $q\le p$. In fact $q\in D_\xi$ for every $\xi$: step 1.1 supplies some $r_\xi\in H\cap D_\xi$, and directedness gives a common stronger member of $H$ below $q,r_\xi$, lying in $D_\xi$. Thus $q$ cannot be in the part of $E_\xi$ that forbids all stronger $D_\xi$ conditions. All coordinates can now be represented below the same actual generic condition $q$. [step 1.1, step 2.1, F5]


4.1 Work in $M$ with this condition $q$. For each $\xi<\beta$ choose a pair $(\tau_\xi,e_\xi)$ such that $\tau_\xi$ is HS, $|e_\xi|^M<\lambda$, $e_\xi$ supports $\tau_\xi$, and $q\Vdash\dot g(\check\xi)=\tau_\xi$. Such witnesses exist by step 3.1 and [F3]. This is set-sized choice: Collection first bounds witnesses for the set of indices in one ground set, and ground AC chooses from its nonempty witness subsets. Hence the sequences of names and supports belong to $M$ without selecting from a proper class. Put $e=\bigcup_{\xi<\beta}e_\xi$. Ground regularity of $\lambda$ and ground AC imply $|e|^M<\lambda$. [step 3.1, F1, F3, F4]


5.1 Use [F6] to form in $M$ the graph name $\dot k$ from the names $\check\xi,\tau_\xi$. Each automorphism in $\operatorname{fix}(e)$ fixes every $\tau_\xi$ and check name, and therefore fixes $\dot k$. The pair and set-name constructions use only HS constituent names, all of $P$ and finite set operations; their subnames are HS recursively. Thus $\dot k$ is hereditarily symmetric, not just supported. The empty graph is covered by the same construction. [step 4.1, F3, F6]


6.1 Since $q\in H$, every forced equality of step 4.1 holds after evaluation. Consequently $(\dot k)_H=\{\langle\xi,g(\xi)\rangle:\xi<\beta\}=g$. By step 5.1 and [F3], $g\in N$. This proves the assertion for all ground ordinals $\beta<\lambda$, including $\omega$ when $\lambda=\omega_1^M$. Forcing does not add ordinals, so these are exactly the ordinals below the fixed ordinal $\lambda$ in the extension; no assumption that an extension sequence of ground names is already available was needed. [step 3.1, step 4.1, step 5.1, F2, F3, F6] ∎
