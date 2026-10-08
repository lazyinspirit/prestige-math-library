---
id: def-kazhdan-pair-and-kazhdan-constant
kind: definition
title: Kazhdan pairs, Kazhdan sets and Kazhdan constants
deps:
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-infimum
  - def-complete-ordered-field
  - thm-infimum-property
  - def-extended-reals
  - lem-extended-reals-complete
  - def-compact-space
  - def-continuous-map-top
  - cor-inner-product-induces-a-norm
  - thm-compactness-under-continuous-maps
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
axiom_audit: "No choice principle is used."
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definition 1.1.3, printed p. 33 (Kazhdan sets and pairs), and Remark 1.1.4, printed p. 34 (displacement and optimal constants, for compact Q). The empty-set, zero-space, and arbitrary-Q endpoint conventions below are made explicit locally."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, Definition 0.5 and Definition 0.7, printed pp. 3–5/PDF pp. 10–12: countable discrete-group property (T) and finite-generator Kazhdan constants; supplementary context for the general definitions below."
---

## Statement

Let $G$ be a topological group. For $Q\subseteq G$ and $\varepsilon>0$, the
pair $(Q,\varepsilon)$ is a **Kazhdan pair** for $G$ if every strongly
continuous unitary representation of $G$ having a $(Q,\varepsilon)$-invariant
unit vector ([[def-almost-invariant-vectors-for-a-unitary-representation]])
has a nonzero $G$-invariant vector. A subset $Q\subseteq G$ is a **Kazhdan
set** if $(Q,\varepsilon)$ is a Kazhdan pair for some $\varepsilon>0$.

For any $Q\subseteq G$ and unitary representation $\pi$ on a Hilbert space
$H$, define
$$d_Q(\pi,\xi):=\begin{cases}0,&Q=\varnothing,\\ \sup_{x\in Q}\|\pi(x)\xi-\xi\|,&Q\ne\varnothing,\end{cases}\qquad \text{for }\|\xi\|=1,$$
and
$$\kappa(G,Q,\pi):=\inf_{\|\xi\|=1}d_Q(\pi,\xi)\in\overline{\mathbb R},$$
where $\inf\varnothing=+\infty$ in the extended real line
([[def-extended-reals]], [[lem-extended-reals-complete]]). Thus
$\kappa(G,Q,\pi)\in[0,2]$ when $H\ne\{0\}$, and it is $+\infty$ when $H=\{0\}$.
Define the **Kazhdan threshold**
$$\kappa(G,Q):=\sup_{\overline{\mathbb R}}\bigl(\{0\}\cup\{\varepsilon>0:(Q,\varepsilon)\text{ is a Kazhdan pair for }G\}\bigr).$$

For every $Q$, a Kazhdan pair $(Q,\varepsilon)$ implies
$\kappa(G,Q)\ge\varepsilon$, every $0<\varepsilon<\kappa(G,Q)$ is a Kazhdan
parameter, and each unitary representation $\pi$ without nonzero invariant
vectors satisfies $\kappa(G,Q,\pi)\ge\kappa(G,Q)$. If $Q$ is compact, then the
endpoint is included:
$$ (Q,\varepsilon)\text{ is a Kazhdan pair}\Longleftrightarrow\kappa(G,Q)\ge\varepsilon. $$
Also,
$$ \kappa(G,Q)=\inf_{\pi}\kappa(G,Q,\pi), $$
where the infimum is over unitary representations of $G$ without nonzero
invariant vectors, including the zero-space representation with value
$+\infty$. For noncompact $Q$, no endpoint equivalence is asserted.

## Facts & Assumptions

**Given:** A topological group $G$, a subset $Q\subseteq G$, a real $\varepsilon>0$, and a strongly continuous unitary representation $\pi:G\to U(H)$.

[F1] A unit vector $\xi$ is $(Q,\varepsilon)$-invariant exactly when $\|\pi(x)\xi-\xi\|<\varepsilon$ for every $x\in Q$; an invariant vector is a nonzero vector fixed by every group element ([[def-almost-invariant-vectors-for-a-unitary-representation]]). A unitary representation is strongly continuous when each orbit map $x\mapsto\pi(x)\xi$ is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[F2] The induced Hilbert norm is a norm over either scalar field, and every unitary operator preserves it ([[cor-inner-product-induces-a-norm]], [[def-strongly-continuous-unitary-representation]]). Applying the triangle inequality to $\xi=(\xi-\eta)+\eta$ and $\eta=(\eta-\xi)+\xi$ gives $|\|\xi\|-\|\eta\||\le\|\xi-\eta\|$.

[F3] A continuous real-valued function on a nonempty compact topological space attains a maximum and a minimum ([[def-compact-space]], [[def-continuous-map-top]], [[thm-compactness-under-continuous-maps]]).

[F4] Every nonempty real set bounded below has an infimum, and every nonempty real set bounded above has a supremum ([[thm-infimum-property]], [[def-complete-ordered-field]], [[def-infimum]]).

[F5] Every subset of the extended real line has a supremum and infimum there; in particular $\sup_{\overline{\mathbb R}}\emptyset=-\infty$ and $\inf_{\overline{\mathbb R}}\emptyset=+\infty$ ([[def-extended-reals]], [[lem-extended-reals-complete]]).

## Proof

**Proof technique:** monotonicity, displacement bounds, and compact attainment.

1.1 The definitions of Kazhdan pair and Kazhdan set apply to every subset $Q\subseteq G$, including $Q=\varnothing$. When $Q=\varnothing$, every unit vector is $(Q,\varepsilon)$-invariant, so the pair condition requires every representation with a unit vector to have a nonzero invariant vector. [given, F1]

1.2 Kazhdan-pair parameters are downward closed: if $(Q,\delta)$ is a pair and $0<\varepsilon\le\delta$, then each $(Q,\varepsilon)$-invariant unit vector is also $(Q,\delta)$-invariant, so $(Q,\varepsilon)$ is a pair. Thus, with the zero adjoined in the definition, $\kappa(G,Q)$ is a well-defined extended-real threshold, equals $0$ if there is no positive Kazhdan parameter, and equals $+\infty$ if every positive parameter is Kazhdan. [F1, F5]

1.3 For a unit vector $\xi$, each displacement is at most $2$ by [F2]. If $Q\ne\varnothing$, its displacement values form a nonempty subset of $[0,2]$ and have a real supremum by [F4]; if $Q=\varnothing$, $d_Q(\pi,\xi)=0$ by definition. Thus $\kappa(G,Q,\pi)\in[0,2]$ for $H\ne\{0\}$. If $H=\{0\}$, there are no unit vectors, so the declared extended-real empty-infimum convention gives $\kappa(G,Q,\pi)=+\infty$. [F2, F4, F5]

1.4 If $Q$ is compact and nonempty, for every unit vector $\xi$ the function $x\mapsto\|\pi(x)\xi-\xi\|$ is continuous: the orbit map is continuous by [F1], and the norm is continuous by the reverse triangle inequality in [F2]. Its image on $Q$ is compact and therefore has a maximum by [F3]. For $Q=\varnothing$, the explicitly assigned displacement $0$ serves as its maximum convention. [F1, F2, F3]

2.1 By the definition of extended-real supremum, every pair parameter $\varepsilon$ satisfies $\varepsilon\le\kappa(G,Q)$, and if $0<\varepsilon<\kappa(G,Q)$ then some pair parameter $\delta$ has $\delta>\varepsilon$. Downward closure from step 1.2 makes $(Q,\varepsilon)$ a pair. [F5, step 1.2]

2.2 For compact $Q$, a unit vector is $(Q,\varepsilon)$-invariant exactly when $d_Q(\pi,\xi)<\varepsilon$: in the nonempty case this follows because the continuous displacement attains its maximum, and in the empty case both conditions hold for every $\varepsilon>0$. Consequently, for a representation on a nonzero Hilbert space with no invariant vector, it has no such unit vector exactly when $\kappa(G,Q,\pi)\ge\varepsilon$. [F1, step 1.4]

3.1 Suppose $\pi$ has no nonzero invariant vector and $(Q,\varepsilon)$ is a Kazhdan pair. For every unit vector $\xi$, $d_Q(\pi,\xi)\ge\varepsilon$: otherwise every $x\in Q$ would have displacement $<\varepsilon$, making $\xi$ a $(Q,\varepsilon)$-invariant unit vector and forcing a nonzero invariant vector. This includes $Q=\varnothing$, where such a representation cannot exist on a nonzero Hilbert space. Taking the infimum over unit vectors, then the supremum over pair parameters, gives $\kappa(G,Q,\pi)\ge\kappa(G,Q)$. [F1, F5, step 2.1, step 1.3]

3.2 The zero-space representation has no unit vectors and value $+\infty$, so it never obstructs a Kazhdan pair. For compact $Q$, step 2.2 therefore says that $(Q,\varepsilon)$ is a pair exactly when every representation without nonzero invariant vectors has displacement constant at least $\varepsilon$, equivalently when their extended-real infimum is at least $\varepsilon$. Taking the supremum of $\{0\}$ together with the admissible pair parameters yields $\kappa(G,Q)=\inf_{\pi}\kappa(G,Q,\pi)$. [F1, F5, step 2.1, step 1.3, step 2.2]

4.1 Steps 2.1 and 3.1 establish the threshold statements for arbitrary $Q$; steps 1.4–3.2 establish the endpoint equivalence and the infimum formula for compact $Q$, with empty $Q$ and the zero-space representation handled by the stated conventions. [step 2.1, step 3.1, step 1.4, step 2.2, step 3.2] ∎
