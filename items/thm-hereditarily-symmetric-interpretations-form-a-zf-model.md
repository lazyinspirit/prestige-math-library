---
id: thm-hereditarily-symmetric-interpretations-form-a-zf-model
kind: theorem
title: Hereditarily symmetric interpretations form a transitive ZF model
status: published
origin: pipeline
deps: [lem-symmetry-lemma-for-forcing-automorphisms, lem-canonical-check-names-are-hereditarily-symmetric, thm-generic-extensions-satisfy-zf-and-zfc, thm-forcing-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 10.17, pp. 49–50", url: "https://karagila.org/files/Forcing-2023.pdf"}
    - {title: "Jech, The Axiom of Choice, Theorem 3.2, pp. 35–36, and Theorem 5.14, pp. 64–66", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For a transitive ZF ground model $M$, symmetric system and $M$-generic $G_0$, $N=\mathrm{HS}_{\mathcal F}^{G_0}$ is a transitive ZF model with $M\subseteq N\subseteq M[G_0]$. No Choice hypothesis is required.

## Facts & Assumptions

**Given:** The stated ZF ground model, symmetric system, and generic.

[F1] [[lem-canonical-check-names-are-hereditarily-symmetric]] gives $M\subseteq N$.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]] controls invariant definable subnames.

[F3] [[thm-generic-extensions-satisfy-zf-and-zfc]] gives $M[G_0]\models\mathrm{ZF}$ using its choice-free branch.

[F4] [[thm-forcing-theorem]] supplies the truth lemma used to evaluate invariant subnames.

## Proof

1.1 Values of HS names lie in $M[G_0]$, while hereditary closure says that every member of such a value has an HS subname. Hence $M\subseteq N\subseteq M[G_0]$ and $N$ is transitive. [F1, F3]

1.2 The class is almost universal relative to the ambient transitive ZF extension $M[G_0]$, without choosing simultaneous HS representatives. Let $\dot x\in M$ name an ambient set $x\subseteq N$. For each $(\tau,p)\in\operatorname{dom}(\dot x)\times P$, define $r(\tau,p)$ to be the least ordinal rank of an HS name $\sigma$ for which $p\Vdash\tau=\sigma$, if there is one, and $0$ otherwise. This is a definable ground-model function: the forcing relation and the HS predicate are definable, and any nonempty definable class of ordinal ranks has a least member. ZF Replacement in $M$ strictly bounds its values on the displayed set by an ordinal $\alpha$. If $u\in x$, some $(\tau,p)\in\dot x$ has $p\in G_0$ and $\tau_{G_0}=u$; since $u\in N$, some HS $\sigma$ also evaluates to $u$. The truth lemma gives a common strengthening $q\in G_0$ of $p$ forcing $\tau=\sigma$, so $r(\tau,q)<\alpha$. Thus every $u\in x$ is the value of an HS name of rank below $\alpha$.

In $M$ form the set $S$ of all HS names of rank below $\alpha$ and the value-collecting name

$$
\dot y=\{\langle\sigma,p\rangle:\sigma\in S\text{ and }p\in P\}.
$$

Because every generic filter is nonempty, $\dot y_{G_0}=\{\sigma_{G_0}:\sigma\in S\}$. Automorphisms preserve $S$, name rank, and all of $P$, so they fix $\dot y$; all its immediate subnames lie in $S\subseteq\mathrm{HS}$. Hence $\dot y$ is HS and $x\subseteq\dot y_{G_0}\in N$. [F2, F4]

1.3 For $a,\vec w\in N$ and a bounded formula $\varphi(u,\vec w)$ with any finite tuple of parameters, choose HS names $\dot a,\dot{\vec w}$ and form the ground set-name $\{(\tau,p)\in\operatorname{dom}(\dot a)\times P:p\Vdash\tau\in\dot a\land\varphi(\tau,\dot{\vec w})\}$. Every immediate subname $\tau$ of $\dot a$ is HS. Bounded truth is absolute between the transitive classes $N$ and $M[G_0]$, so the truth lemma evaluates this name to $\{u\in a:N\models\varphi(u,\vec w)\}$. F2 shows that the finite intersection of the parameter stabilizers fixes this name, whose subnames are HS; filter closure puts that intersection in the filter. Thus $N$ has every instance of $\Delta_0$-Separation. [F2, F4]

2.1 Apply Jech's transitive-class criterion inside $M[G_0]$, rather than cutting an arbitrary ambient subset by bounded Separation. Transitivity supplies Extensionality and Foundation; check names supply $\varnothing$ and $\omega$. For $N$-parameters, each of Jech's eight Gödel-operation outputs—unordered pair, difference, product, domain, membership relation restricted to a square, and three coordinate permutations—is an ambient set of elements already in $N$: first use unordered pairs and Kuratowski pairs, then the remaining operations in that finite order. By step 1.2 each such output lies inside an $N$-set, and its defining bounded formula with those parameters lets step 1.3 cut out exactly the output. Hence $N$ is closed under the eight operations. Jech's formula-complexity induction from that closure and almost universality gives full Comprehension, including the unbounded-quantifier cases; it also derives Pairing, Union, internal Power Set, Infinity and Replacement (the last by bounding the outer set of functional values via almost universality, then applying Comprehension). This proves every ZF schema instance. No AC enters this argument, and only the ZF branch of F3 is used. [F3, F4, step 1.1, step 1.2, step 1.3] ∎
