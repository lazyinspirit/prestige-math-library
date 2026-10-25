---
id: def-integrated-form-of-a-unitary-representation
kind: definition
title: The integrated form of a unitary representation
deps:
  - def-strongly-continuous-unitary-representation
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-involution-on-l1-of-a-group
  - def-hilbert-space
  - def-bounded-linear-operator
  - thm-riesz-representation-for-hilbert-space
  - def-axiom-of-choice
dependency_level: 0
provenance:
  statement: literature-derived
  proof: literature-derived
axiom_audit: "Assume AC as the standing hypothesis of the completion chain of this page; the definition itself only needs the Hilbert Riesz representation step of [[thm-riesz-representation-for-hilbert-space]], which is proved under Countable Choice there and therefore under AC ([[thm-choice-implies-dependent-implies-countable-choice]]). No irreducibility, separability or unimodularity is used."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.A and Chapter 8, §8.B: the display defining π(f) before Proposition 8.B.3"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: first display after Example F.4.1"
status: published
origin: pipeline
---
## Definition

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure, let $(\pi,H)$ be a strongly continuous unitary representation of $G$
([[def-strongly-continuous-unitary-representation]],
[[def-hilbert-space]]), and let $f\in L^1(G)$ with its norm $\|\cdot\|_1$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]). The
**integrated form** of $\pi$ at $f$ is the operator
$\pi(f)\in\mathcal B(H)$ ([[def-bounded-linear-operator]]) characterised by
the weak integral identity
$$\langle\pi(f)\xi,\eta\rangle=\int_G f(g)\,\langle\pi(g)\xi,\eta\rangle\,dg\qquad(\xi,\eta\in H).$$
The integral is a Haar integral over the fixed measure, and the right-hand
side is the pairing convention of the Hilbert space, linear in the first
argument and conjugate-linear in the second.

## Remarks

- **Well-definedness (existence).** Fix $\xi\in H$. Since $\pi$ is unitary,
  $|\langle\pi(g)\xi,\eta\rangle|\le\|\xi\|\,\|\eta\|$ for all $g\in G$ and
  $\eta\in H$, so $g\mapsto f(g)\langle\pi(g)\xi,\eta\rangle$ is measurable
  with $|f(g)\langle\pi(g)\xi,\eta\rangle|\le|f(g)|\,\|\xi\|\,\|\eta\|$; this
  majorant lies in $L^1(G)$ when $\xi$ and $\eta$ are fixed. The assignment
  $\eta\mapsto\int_G f(g)\langle\pi(g)\xi,\eta\rangle\,dg$ is therefore a
  well-defined conjugate-linear functional, bounded by
  $\|f\|_1\|\xi\|\|\eta\|$; by the Hilbert Riesz representation theorem
  ([[thm-riesz-representation-for-hilbert-space]]) there is a unique vector,
  written $\pi(f)\xi$, with
  $\langle\pi(f)\xi,\eta\rangle=\int_G f(g)\langle\pi(g)\xi,\eta\rangle\,dg$
  for every $\eta\in H$, and $\|\pi(f)\xi\|\le\|f\|_1\|\xi\|$.
- **Linearity.** For scalars $a,b$ and $\xi,\xi'\in H$ the defining
  functionals satisfy the identity for $a\xi+b\xi'$ by linearity of the
  integral and of the inner product in the first argument, so
  $\pi(f)(a\xi+b\xi')=a\,\pi(f)\xi+b\,\pi(f)\xi'$; thus $\xi\mapsto\pi(f)\xi$
  is a linear map $H\to H$ with $\|\pi(f)\|\le\|f\|_1$. Likewise, for scalars
  $a,b$ and $f,h\in L^1(G)$ the integral identity gives
  $\pi(af+bh)=a\,\pi(f)+b\,\pi(h)$, because both sides have the same pairing
  with every $\eta\in H$.
- **No further hypotheses.** The construction applies to every strongly
  continuous unitary representation of every LCH group: no irreducibility,
  separability, unimodularity or compactness is assumed. The modular function
  enters this page only through the involution of $L^1(G)$
  ([[def-involution-on-l1-of-a-group]]), not through the definition
  of $\pi(f)$.
- **Use of choice.** The Axiom of Choice is declared as a standing hypothesis
  of the completion chain of this page. In this definition it is needed only
  through the Hilbert Riesz representation step, which is established under
  Countable Choice ([[thm-riesz-representation-for-hilbert-space]]) and
  therefore under AC ([[def-axiom-of-choice]]).
