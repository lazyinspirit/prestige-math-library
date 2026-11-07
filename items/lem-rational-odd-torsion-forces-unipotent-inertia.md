---
id: lem-rational-odd-torsion-forces-unipotent-inertia
kind: lemma
title: "Trivial odd residual inertia forces unipotent inertia"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
provenance:
  statement: locally-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-local-wild-inertia-subgroup-of-absolute-galois-group
  - thm-tame-inertia-structure-and-frobenius-action
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, SGA 7 I, Exposé I, §§1 and 6"
      url: "https://grothendiecksga.com/read/sga7/fr/1-6.html"
      locator: "§6.7 context; the elementary odd-congruence unipotence argument is proved below."
---

## Statement

Assume AC. Let $K$ be a nonarchimedean local field with finite residue field of cardinality $q$ and characteristic $p$, let $\ell\ge3$ be a prime different from $p$, and let $\rho:G_K\to\operatorname{GL}_d(\mathbb Z_\ell)$ be a continuous representation with $d\ge1$. If inertia acts trivially on $\mathbb Z_\ell^d/\ell\mathbb Z_\ell^d$, then every inertia element acts unipotently on $\mathbb Q_\ell^d$; in fact $(\rho(\tau)-1)^d=0$ for every inertia element $\tau$.

## Facts & Assumptions

**Given:** AC, $K,q,p,\ell,d,\rho$ and the trivial residual inertia action as stated.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Tame inertia is $\prod_{r\ne p}\mathbb Z_r(1)$, and arithmetic Frobenius conjugates it by the $q$-th power. [[thm-tame-inertia-structure-and-frobenius-action]]

[F2] Wild inertia is pro-$p$. [[def-local-wild-inertia-subgroup-of-absolute-galois-group]]

## Proof

**Proof technique:** factor inertia through one pro-$\ell$ generator and apply the $\ell$-adic matrix logarithm.

1.1 By the residual hypothesis, $\rho(I_K)$ lies in $U=1+\ell M_d(\mathbb Z_\ell)$. This is pro-$\ell$: for every $m\ge1$ the quotient by $1+\ell^mM_d(\mathbb Z_\ell)$ is finite of $\ell$-power order. A continuous homomorphism from a pro-$r$ group to a pro-$\ell$ group is trivial when $r\ne\ell$, since every finite image has order both an $r$-power and an $\ell$-power. Thus F1 makes wild inertia act trivially, and the action of tame inertia factors through its $\mathbb Z_\ell(1)$ factor. [A1, F1, F2, given, algebra]

2.1 Choose a topological generator of that factor and write $T$ for its image and $F$ for the image of an arithmetic Frobenius lift. By F1, $FTF^{-1}=T^q$. Because $\ell\ge3$, the series $\log(1+Y)=\sum_{n\ge1}(-1)^{n+1}Y^n/n$ and $\exp X=\sum_{n\ge0}X^n/n!$ converge for $Y,X\in\ell M_d(\mathbb Z_\ell)$ and are inverse there. Indeed $v_\ell(\ell^n/n)\to\infty$ and $v_\ell(\ell^n/n!)\ge n-n/(\ell-1)\to\infty$; the one-variable formal identities apply to powers of a single matrix. Put $X=\log T$. Conjugation commutes with the series and $\log(T^q)=qX$, so $FXF^{-1}=qX$. [F1, step 1.1, given, algebra]

3.1 Similar matrices have the same finite multiset of eigenvalues over an algebraic closure of $\mathbb Q_\ell$. The relation in step 2.1 therefore makes the spectrum of $X$ invariant under multiplication by the rational number $q>1$. A nonzero eigenvalue would have an infinite orbit under multiplication by $q$, since no positive power of $q$ is $1$ in characteristic zero. Hence every eigenvalue is zero, and Cayley–Hamilton gives $X^d=0$. [step 2.1, algebra]

4.1 The integers are dense in $\mathbb Z_\ell$. By continuity, the image of a tame element with coordinate $a\in\mathbb Z_\ell$ is $\exp(aX)$: this holds for integer coordinates and passes to the limit using the convergent exponential series. Since $X$ is nilpotent, $\exp(aX)-1$ is divisible by $X$, and its $d$-th power is zero. Wild inertia acts trivially by step 1.1, so the same holds for every inertia element. [step 1.1, step 2.1, step 3.1, algebra] ∎
