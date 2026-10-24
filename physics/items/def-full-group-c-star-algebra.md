---
id: def-full-group-c-star-algebra
kind: definition
title: The full (maximal) group C star algebra
deps:
  - def-banach-star-algebra-without-required-unit
  - def-c-star-algebra
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - lem-integrated-forms-are-nondegenerate-star-representations
  - thm-gns-construction-for-topological-groups
  - cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
  - def-axiom-of-choice
  - lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the GNS and completion suppliers; the definition itself introduces the universal seminorm, whose finiteness and ideal property are established in the prerequisite seminorm lemma."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Definition 8.B.1 and Remark 8.B.2 (maximal C*-algebra)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: definition of the maximal norm and Definition F.4.3"
status: published
origin: pipeline
---
## Definition

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure and, for $f\in L^1(G)$, put
$$\|f\|_{C^*}:=\sup_{\pi}\|\pi(f)\|,$$
the supremum running over the unitary equivalence classes of strongly
continuous unitary representations of $G$, with $\pi(f)$ the integrated form
([[lem-integrated-forms-are-nondegenerate-star-representations]]). Let
$N:=\{f\in L^1(G):\|f\|_{C^*}=0\}$. The **full (maximal) group C\*-algebra**
$C^*(G)$ is the completion of the quotient $L^1(G)/N$ in the norm induced by
$\|\cdot\|_{C^*}$; the quotient and completion maps compose to a canonical map
$L^1(G)\to C^*(G)$ with dense image which is a $\ast$-homomorphism
([[def-banach-star-algebra-without-required-unit]],
[[def-c-star-algebra]]).

## Remarks

- **The supremum is over a set.** The individual numbers $\|\pi(f)\|$ depend
  only on the unitary equivalence class of $\pi$. For any representation
  $\pi$ and unit vector $\xi$, the closed span of $\{\pi(g)\xi\}$ is an
  invariant closed subspace whose representation is the GNS representation of
  the normalized coefficient $g\mapsto\langle\pi(g)\xi,\xi\rangle$, and
  operator norms are tested on unit vectors; by the pointed-cyclic
  correspondence every such class is the GNS class of an element of
  $P_1(G)\subseteq\mathbb C^G$
  ([[cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations]],
  [[thm-gns-construction-for-topological-groups]]). Hence the supremum may be
  taken over the set $P_1(G)$ of continuous normalized positive-type
  functions, and it is a supremum of a set of nonnegative real numbers.
- **Well-definedness is proved, not assumed.** The finiteness
  $\|f\|_{C^*}\le\|f\|_1$, the submultiplicativity and star properties of
  $\|\cdot\|_{C^*}$, the fact that $N$ is a closed two-sided $\ast$-ideal, and
  the C\*-identity on the completion are established in
  [[lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient]],
  which defines its seminorm locally and is a prerequisite of this definition.
  The definition itself is the standard maximal (enveloping) norm of
  [BeHV–08, F.4.3] and [BeH–19, 8.B.1].
- **Choice.** The Axiom of Choice is inherited from the GNS construction and
  the completion chain; the definition adds no further choice
  ([[def-axiom-of-choice]]).
