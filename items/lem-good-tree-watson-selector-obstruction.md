---
id: lem-good-tree-watson-selector-obstruction
kind: lemma
title: "The symmetric Stone model has no componentwise proper selector"
status: draft
origin: pipeline
deps: [def-good-tree-watson-symmetric-stone-model, def-symmetric-forcing-system-and-hereditarily-symmetric-names, def-forcing-name-automorphism-action, lem-symmetry-lemma-for-forcing-automorphisms, def-forcing-preorder-compatibility-and-filter]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Sections 2-4, printed pp. 2-9"
---

## Statement

No function in the symmetric model $N$ of
[[def-good-tree-watson-symmetric-stone-model]] assigns to every distinguished
metric component $R_\xi$ a nonempty proper subset of that component.

## Facts & Assumptions

**Given:** A function $f \in N$ with domain $M = \{R_\xi : \xi < \lambda\}$ and $f(R_\xi)$ a proper nonempty subset of $R_\xi$ for every $\xi$.

[F1] Membership in $N$ is hereditary symmetry: $f$ has a support $\operatorname{fix}(e)$ in the normal filter, with $e \subseteq \lambda \times \mathbb{R} \times \lambda$ of size below $\lambda$ ([[def-good-tree-watson-symmetric-stone-model]], [[def-symmetric-forcing-system-and-hereditarily-symmetric-names]]).

[F2] The automorphisms of the construction include, for every $\eta < \lambda$ and every reflection or identity $\rho$ of $\mathbb{R}$, the maps that fix all coordinates with first index different from $\eta$ and send $\eta$-coordinates according to $\rho$; automorphisms act on the canonical families by permuting their indices, and the symmetry lemma turns invariance under an automorphism into equality of forcing values ([[def-good-tree-watson-symmetric-stone-model]], [[def-forcing-name-automorphism-action]], [[lem-symmetry-lemma-for-forcing-automorphisms]]).

[F3] The components $R_\xi$ are copies of $\mathbb{R}$ with their metric, so each has at least two points, and a reflection of $\mathbb{R}$ interchanges the two points chosen below. [given]

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f \in N$ is such a selector; by [F1] fix a support $e \subseteq \lambda \times \mathbb{R} \times \lambda$ of size below $\lambda$ and a name for $f$ fixed by $\operatorname{fix}(e)$. [assume-contra, F1]

2.1 The projection of $e$ to the first coordinate has size below $\lambda$ because $e$ does, so by regularity of $\lambda$ there is $\xi < \lambda$ outside that projection; then every automorphism that only moves the $\xi$-th coordinate lies in $\operatorname{fix}(e)$, since it fixes every triple whose first coordinate is in the projection. [step 1.1, F1]

3.1 Since $f(R_\xi)$ is a nonempty proper subset of $R_\xi$, there are points $u \in f(R_\xi)$ and $v \in R_\xi \setminus f(R_\xi)$, and by [F3] there is an automorphism $\pi$ of the group that fixes every coordinate with first index in the projection of $e$ and sends the point of $R_\xi$ corresponding to $u$ to the one corresponding to $v$. [step 2.1, F2, F3]

4.1 The automorphism $\pi$ belongs to $\operatorname{fix}(e)$ by step 2.1 and step 3.1, so it fixes the name of $f$ by the choice of $e$; by [F2] it also fixes $M$ and permutes the components $R_\xi$ while fixing the index $\xi$, so $\pi(f)(R_\xi) = \pi(f(R_\xi)) = f(R_\xi)$. [step 3.1, F2]

5.1 On the other hand $\pi$ moves the points of $R_\xi$ in the way chosen in step 3.1, so $u \in f(R_\xi)$ implies $\pi(u) = v \notin f(R_\xi) = \pi(f(R_\xi))$, a contradiction; hence no such selector exists in $N$. [step 3.1, step 4.1, discharge-contradiction] ∎
