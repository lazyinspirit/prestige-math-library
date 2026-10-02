---
id: lem-logarithmic-unit-image-is-discrete
kind: lemma
title: The logarithmic unit image is discrete
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-integer-minimal-polynomial-criterion
  - cor-intermediate-field-degrees-divide
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-logarithmic-unit-embedding
  - def-natural-logarithm
  - lem-bounded-conjugates-give-finitely-many-integral-polynomials
  - lem-discrete-subgroups-of-real-vector-spaces-are-lattices
  - lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity
  - lem-restriction-fibres-for-embeddings-in-a-finite-tower
  - lem-unit-logarithms-lie-in-the-product-formula-hyperplane
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-exponential-is-strictly-increasing
  - thm-natural-logarithm-laws
  - thm-root-bound-for-polynomials-over-a-domain
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Prop. 5.8 p.87 (the image of the log map on units is discrete)."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 Lemma 8.1.9 p.90."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "proof of Prop. 15.11(1) p.7 (bounded log image leaves finitely many units)."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "Ch. 29 pp.151-152."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. The subgroup $\lambda(\mathcal O_K^\times)\subset H$
is discrete; equivalently, every bounded subset of $H$ meets
$\lambda(\mathcal O_K^\times)$ in finitely many points.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of degree $n=[K:\mathbb Q]$ with logarithmic embedding $\lambda$ and hyperplane $H$ ([[def-logarithmic-unit-embedding]]), and a bounded subset $C\subseteq H$.

[F1] The map $\lambda$ is given by $\lambda(x)=(\log|\sigma_1x|,\dots,\log|\sigma_{r_1}x|,2\log|\tau_1x|,\dots,2\log|\tau_{r_2}x|)$, with $\sigma_1,\dots,\sigma_{r_1}$ the real embeddings and $\tau_1,\dots,\tau_{r_2}$ one embedding from each complex conjugate pair ([[def-logarithmic-unit-embedding]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F2] For every unit $u\in\mathcal O_K^\times$ one has $\lambda(u)\in H$, so $\lambda(\mathcal O_K^\times)$ is a subgroup of the finite-dimensional real vector space $H$ ([[lem-unit-logarithms-lie-in-the-product-formula-hyperplane]]).

[F3] For a subgroup $\Gamma$ of a finite-dimensional real vector space with the topology induced by a norm, $\Gamma$ is discrete if and only if every bounded subset of the space meets $\Gamma$ in a finite set ([[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]).

[F4] The natural logarithm is strictly increasing with inverse the exponential function on $(0,\infty)$ ([[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]], [[def-natural-logarithm]]); hence for real $a>0$ and real $t$, $a\le e^{t}$ if and only if $\log a\le t$, and similarly $\log a\ge-t$ if and only if $a\ge e^{-t}$.

[F5] For fixed $n\ge1$ and $R\ge1$, only finitely many monic integer polynomials of degree at most $n$ have all their complex roots of modulus at most $R$ ([[lem-bounded-conjugates-give-finitely-many-integral-polynomials]]). This batch-2 supplier is authored in this run, and the exact obligation used is the instance for the fixed real $R=e^{M}\ge1$ of the argument.

[F6] For $u\in\mathcal O_K^\times$ the minimal polynomial $m_u\in\mathbb Z[X]$ is monic of degree $[\mathbb Q(u):\mathbb Q]$, which divides $n$; its complex roots are exactly the numbers $\psi(u)$, where $\psi$ ranges over the $\mathbb Q$-embeddings $K\to\mathbb C$ ([[cor-algebraic-integer-minimal-polynomial-criterion]], [[cor-intermediate-field-degrees-divide]], [[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]], [[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[F7] A nonzero polynomial of degree at most $n$ over $\mathbb C$ has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

[F8] The kernel of $\lambda|_{\mathcal O_K^\times}$ is finite ([[lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity]]).

[A1] The Axiom of Choice is assumed; it is used only through the AC-qualified hyperplane lemma [F2] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** boundedness of the log image bounds all conjugates of a unit between two positive constants, and the bounded-conjugate polynomials of bounded degree are finite in number.

1.1 The image $\lambda(\mathcal O_K^\times)$ lies in $H$ and is a subgroup of $H$. [F2]

1.2 Since $C\subseteq H$ is bounded, there is a real $M\ge0$ with $|x_i|\le M$ for every $x=(x_i)\in C$ and every coordinate $i$; fix such an $M$ and put $R=e^{M}\ge1$. [given, algebra]

2.1 Let $u\in\mathcal O_K^\times$ with $\lambda(u)\in C$. Then $|\log|\sigma_iu||\le M$ for every real embedding and $|2\log|\tau_ju||\le M$, that is, $-M\le\log|\sigma_iu|\le M$ and $-M/2\le\log|\tau_ju|\le M/2$. [F1, step 1.2]

3.1 Exponentiating the inequalities of step 2.1, using that the exponential is strictly increasing and inverse to the logarithm, gives $e^{-M}\le|\sigma_iu|\le e^{M}=R$ for every real embedding and $e^{-M/2}\le|\tau_ju|\le e^{M/2}$ for every complex embedding; in particular every conjugate of $u$ has modulus at most $R$. [F4, step 2.1]

4.1 Consequently the minimal polynomial $m_u$ of such a unit $u$ is a monic integer polynomial of degree at most $n$ all of whose complex roots have modulus at most $R$; by [F5] there are only finitely many such polynomials, and each of them has at most $n$ distinct complex roots by [F7], so the set $S:=\{u\in\mathcal O_K^\times:\lambda(u)\in C\}$ is finite. [F5, F6, F7, step 3.1]

5.1 The intersection $C\cap\lambda(\mathcal O_K^\times)$ is the image under $\lambda$ of $S$, hence is finite; therefore every bounded subset of $H$ meets the subgroup $\lambda(\mathcal O_K^\times)$ in a finite set, and by the lattice criterion [F3] the subgroup $\lambda(\mathcal O_K^\times)$ is discrete. [F3, step 1.1, step 4.1, step 1.2]

6.1 The single Choice use is [A1] through the AC-qualified product formula behind the hyperplane lemma; the bounded-conjugate and root-bound arguments select nothing, and the kernel [F8] is finite by the choice-free finiteness of the roots of unity. [A1, F8, step 5.1] ∎
