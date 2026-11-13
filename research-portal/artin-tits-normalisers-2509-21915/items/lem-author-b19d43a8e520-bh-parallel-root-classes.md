---
id: lem-author-b19d43a8e520-bh-parallel-root-classes
kind: lemma
title: Parallel classes of roots and finite inversion sets
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-b19d43a8e520-bh-opposite-identification
  - def-coxeter-data-artin-tits-normalisers
dependency_roles:
  lem-author-b19d43a8e520-bh-opposite-identification: mathematical-premise
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary
        cones of Brink-Howlett groupoids
      url: https://arxiv.org/html/2606.12937v1
      locator: Sections 1.3–1.4, especially (1.4.1) and (1.4.4); section 1.21;
        sections 3.1, 3.3–3.4.
      statement: The standard Coxeter roots split into positive and negative roots;
        the ambient root inversion set Phi_w = Phi^+ intersect w(-Phi^+) has
        cardinality ell(w). Section 1.21 places a copy of these roots at each
        Brink–Howlett object. Realness means a sign change by some outgoing
        arrow; parallelism compares all outgoing signs; compression quotients by
        parallelism.
      hypotheses: An arbitrary-rank Coxeter system with its standard based root
        system. The signed-copy and compression conventions apply to the
        specified root-action groupoid; the ambient inversion equality applies
        to every underlying element w in W.
      reading_limits: Read HTML sections 1.3–1.4, 1.13, 1.21 and 3.1–3.4 for these
        statements and conventions. No PDF inspection, whole-paper reading,
        reconstruction of the imported inversion theorem or reading of
        Brink–Howlett (1999) is claimed.
proof_strategy: direct
formulation_deps:
  - lem-author-b19d43a8e520-bh-opposite-identification
  - def-coxeter-data-artin-tits-normalisers
argument_deps:
  - lem-author-b19d43a8e520-bh-opposite-identification
  - def-coxeter-data-artin-tits-normalisers
dependency_level: 13
---

## Statement

Let $(W,S)$, its ambient standard Coxeter roots $\Phi=\Phi^+\sqcup\Phi^-$, its root action and its length $\ell$ have the Coxeter-data conventions. Let $\mathcal B$ be the ordinary root-action groupoid on the associates of the fixed subset $J$, with arrows $(B,x,A):A\to B$ satisfying $x\Pi_A=\Pi_B$. At every object $A$ use the signed copy $\Phi(A)=\{A\}\times\Phi$, with $\Phi(A)^\pm=\{A\}\times\Phi^\pm$ and $-(A,\alpha)=(A,-\alpha)$. The arrow $(B,x,A)$ acts by $(A,\alpha)\mapsto(B,x\alpha)$. Thus the roots at an object are copies of the ambient Coxeter roots.

For an arrow $x:A\to B$, define $N(x)=\Phi(B)^+\cap x\Phi(A)^-$, identified with the ambient set $\Phi^+\cap x\Phi^-$. For $\alpha,\beta\in\Phi(A)$ put $\alpha\sim_A\beta$ if every arrow out of $A$ sends them to roots of the same sign. Call a root at $A$ real if some outgoing arrow changes its sign, and imaginary otherwise. Each $N(x)$ is a union of entire parallel classes at its codomain, all consisting of real roots. Arrow actions carry parallel classes bijectively to parallel classes. The set $C(x)$ of classes contained in $N(x)$ is finite; these are the inversion classes in the real compression of this signed root action.

## External input

The imported ambient-root facts are $\Phi=\Phi^+\sqcup\Phi^-$ and $|\Phi^+\cap w\Phi^-|=\ell(w)$ for every $w\in W$, with no finite-rank restriction (Dyer–Gimenez, sections 1.3–1.4, (1.4.1) and (1.4.4)). The signed-copy, realness and compression terminology follows sections 1.21 and 3.1, 3.3–3.4. The class-transport and saturation arguments below are local deductions; the imported Coxeter inversion theorem is not reproved here.

## Facts & Assumptions

[F1] The objects, arrows and composition of $\mathcal B$ are those of [[lem-author-b19d43a8e520-bh-opposite-identification]].

[F2] The ambient roots $\Phi$, their positive and negative subsets, the linear $W$-action and $\ell$ are defined in [[def-coxeter-data-artin-tits-normalisers]].

[F3] Dyer–Gimenez, sections 1.3–1.4, supplies the sign decomposition and the ambient-root inversion equality recorded in External input. Sections 1.21 and 3.1, 3.3–3.4 supply the terminology used there.

## Proof

**Given:** The Coxeter and groupoid data and signed copies specified above, with the imported ambient-root facts.

**Goal:** Prove class transport, saturation by real classes and finiteness of the inversion classes.

1.1 The copies inherit a sign from the ambient sign decomposition. The linear root action commutes with negation, and its identity and composition laws give the stated signed action at the objects of $\mathcal B$. Equality of signs after every outgoing arrow is reflexive, symmetric and transitive, so $\sim_A$ is an equivalence relation. The identity arrow shows that roots in one class already have the same sign at $A$. [F1, F2, F3, given]

2.1 Let $y:A\to B$. If $\alpha\sim_A\beta$, then every arrow $z$ out of $B$ has $zy$ out of $A$, so $z(y\alpha)$ and $z(y\beta)$ have the same sign. Conversely, apply this implication to $y^{-1}$. Thus $\alpha\sim_A\beta$ if and only if $y\alpha\sim_B y\beta$. Applying the same argument to the inverse action shows that $y$ carries each entire class bijectively onto an entire class. Negating all images preserves equality of signs, so negation also descends to classes. [F1, F2, step 1.1]

3.1 For $x:A\to B$, a root $\alpha$ belongs to $N(x)$ exactly when it is positive at $B$ and $x^{-1}\alpha$ is negative at $A$. Both sign conditions are constant on a parallel class, by the identity and $x^{-1}$ among the outgoing arrows from $B$. Hence $N(x)$ is a union of entire classes. The arrow $x^{-1}$ witnesses realness for every root in those classes, so imaginary roots never occur in $N(x)$. On the quotient action, those classes are precisely the positive classes sent to negative classes by $x^{-1}$; restricting to real roots leaves them unchanged. This identifies $C(x)$ with the inversion set in the real compression. [F1, F3, step 1.1, step 2.1]

4.1 Finally $|N(x)|=\ell(x)<\infty$ by the imported ambient-root inversion equality and the finite word length of each Coxeter element. Its image under the quotient map is $C(x)$, so $C(x)$ is finite. [F2, F3, step 3.1] ∎
