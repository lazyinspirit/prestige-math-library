---
id: lem-connected-spherical-complement-implies-null-homology
kind: lemma
title: "A connected spherical complement forces every cycle in the domain to be null-homologous"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-null-homologous-and-homologous-complex-cycles,
       cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §§4.2-4.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain. If
$\widehat{\mathbb C}\setminus\Omega$ is connected, then every cycle with trace
in $\Omega$ is null-homologous in $\Omega$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$ with connected spherical complement, and a cycle $\Gamma$ whose trace lies in $\Omega$.

[L1] The index of a cycle is locally constant off its trace and vanishes on all sufficiently large points of the plane ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L2] A cycle with trace in an open set is null-homologous there exactly when its index vanishes at every point of the complement of that open set ([[def-null-homologous-and-homologous-complex-cycles]]).

## Proof

**Proof technique:** direct.

1.1 Since $\Gamma^\ast\subseteq\Omega$, the index $n(\Gamma,p)$ is defined for every $p\in\mathbb C\setminus\Omega$. By [L1], the function $p\mapsto n(\Gamma,p)$ is locally constant on $\mathbb C\setminus\Gamma^\ast$, and there is $R>0$ with $n(\Gamma,p)=0$ whenever $|p|>R$. Thus the subset [given, L1, construct]
$$E=\{\infty\}\cup\{p\in\mathbb C\setminus\Omega:n(\Gamma,p)=0\}$$
contains $\infty$ together with a punctured neighborhood of $\infty$ in the sphere. [given, L1, construct]

2.1 The set $E$ is open in $\widehat{\mathbb C}\setminus\Omega$ by the local constancy from [L1], and its complement in $\widehat{\mathbb C}\setminus\Omega$ is open for the same reason. Since $\widehat{\mathbb C}\setminus\Omega$ is connected and $E$ is nonempty by step 1.1, it follows that [step 1.1, L1, algebra]
$$E=\widehat{\mathbb C}\setminus\Omega.$$
Therefore $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$.

3.1 By [L2], the vanishing from step 2.1 is exactly the statement that $\Gamma$ is null-homologous in $\Omega$. [step 2.1, L2] ∎
