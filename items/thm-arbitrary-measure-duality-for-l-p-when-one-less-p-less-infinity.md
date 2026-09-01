---
id: thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity
kind: theorem
title: "For $1 < p < \\infty$, the same representation theorem holds on arbitrary measure spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-sigma-finite-duality-for-bounded-functionals-on-l-p, lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p, prop-semifinite-measures-make-l-q-representatives-unique, def-finite-sigma-finite-and-semifinite-measures, prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]
proof_strategy: "Represent the restriction of the functional on each sigma-finite measurable subset, choose a countable near-maximizing family of such subsets, and prove that their union already captures every local representative."
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $(X,\mathcal A,\mu)$ be any measure space, let $1 < p < \infty$, and let
$q$ be conjugate to $p$. For every bounded linear functional
$\Lambda:L^p(\mu)\to\mathbb R$ there exists a unique $g \in L^q(\mu)$ such that
$$\Lambda([f])=\int fg\,d\mu\qquad([f]\in L^p(\mu)).$$
Moreover,
$$\|\Lambda\|=\|g\|_q.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a measure space $(X,\mathcal A,\mu)$, an exponent $1 < p < \infty$, its conjugate exponent $q$, and a bounded linear functional $\Lambda$ on $L^p(\mu)$.

[L0] Countable Choice is assumed ([[def-countable-choice]]).

[L1] On every sigma-finite measurable subset, bounded $L^p$ functionals are represented by unique $L^q$ densities ([[thm-sigma-finite-duality-for-bounded-functionals-on-l-p]], [[prop-semifinite-measures-make-l-q-representatives-unique]]).

[L2] Every $L^r(\mu)$ class with $1 \le r < \infty$ has sigma-finite essential support ([[lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p]]).

[L3] For $u \in L^q(\mu)$, the pairing functional has norm $\|u\|_q$ ([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

## Proof

**Proof technique:** Represent the restriction of the functional on each sigma-finite measurable subset, choose a countable near-maximizing family of such subsets, and prove that their union already captures every local representative.

1.1 Let $\mathcal S$ be the family of sigma-finite measurable subsets of $X$. For each $E \in \mathcal S$, define the restricted functional $$\Lambda_E([u]):=\Lambda([\widetilde u])$$ on $L^p(\mu|_E)$, where $\widetilde u$ is extended by $0$ outside $E$. By [L1], there is a unique $g_E \in L^q(\mu|_E)$ such that $$\Lambda_E([u])=\int_E ug_E\,d\mu\qquad([u]\in L^p(\mu|_E)),$$ and $$\|g_E\|_q=\|\Lambda_E\|\le\|\Lambda\|.$$ [L1, given, choose, construct]

2.1 The empty set lies in $\mathcal S$ and has $|g_\varnothing\|_q=0$, so the bounded set below is nonempty. Put $$s:=\sup\{\,\|g_E\|_q^q:E \in \mathcal S\,\}\le\|\Lambda\|^q.$$ For each $n \ge 1$, the definition of the supremum makes the family $$\{E\in\mathcal S:\|g_E\|_q^q>s-2^{-n}\}$$ nonempty. By [L0], choose one $E_n$ from each family. Because each $E_n$ is sigma-finite, the family of sequences $(E_{n,k})_{k\ge1}$ of measurable finite-measure subsets of $E_n$ whose union is $E_n$ is nonempty. Using [L0] again, choose one such sequence for every $n$. Let $$Z:=\bigcup_{n=1}^\infty E_n.$$ The doubly indexed family $(E_{n,k})_{n,k\ge1}$ has union $Z$, and a diagonal enumeration of it proves that $Z$ is sigma-finite. By [L1], there is a unique $g_Z \in L^q(\mu|_Z)$ representing $\Lambda_Z$. Since $E_n \subseteq Z$ and both $g_Z|_{E_n}$ and $g_{E_n}$ represent $\Lambda_{E_n}$, uniqueness in [L1] gives $g_Z=g_{E_n}$ almost everywhere on $E_n$. Therefore $$\|g_Z\|_q^q\ge \|g_{E_n}\|_q^q>s-2^{-n}\qquad(n \ge 1).$$ Since $Z\in\mathcal S$, the definition of $s$ also gives $\|g_Z\|_q^q\le s$, and hence $\|g_Z\|_q^q=s$. [L0, L1, step 1.1, choose, construct]

3.1 Let $g$ be the zero extension of a measurable representative of $g_Z$ from $Z$ to $X$. Since $q<\infty$, step 2.1 gives $$\int_X|g|^q\,d\mu=\int_Z|g_Z|^q\,d\mu=s<\infty,$$ so $g\in L^q(\mu)$ and $\|g\|_q^q=s$. Now let $E \in \mathcal S$. Then $Z \cup E$ is sigma-finite, so [L1] supplies $g_{Z \cup E}$. Uniqueness on $Z$ and on $E$ gives $$g_{Z \cup E}=g_Z\ \text{a.e. on }Z,\qquad g_{Z \cup E}=g_E\ \text{a.e. on }E.$$ Therefore $$\|g_{Z \cup E}\|_q^q =\int_Z |g_Z|^q\,d\mu+\int_{E \setminus Z}|g_E|^q\,d\mu.$$ The left side is at most $s$ by definition of $s$, while the first term is $s$ by step 2.1. Hence $$\int_{E \setminus Z}|g_E|^q\,d\mu=0,$$ so $g_E=0$ almost everywhere on $E \setminus Z$ and $g_E=g$ almost everywhere on $E \cap Z$. [L1, step 2.1, construct, algebra]

4.1 Let $[f] \in L^p(\mu)$. By [L2], choose a sigma-finite measurable set $S \subseteq X$ such that $f=0$ almost everywhere on $X \setminus S$. Applying step 1.1 to $S$ gives $g_S \in L^q(\mu|_S)$ with $$\Lambda([f])=\Lambda_S([f|_S])=\int_S fg_S\,d\mu.$$ Step 3.1 gives $g_S=g$ almost everywhere on $S$, so $$\Lambda([f])=\int_S fg\,d\mu=\int_X fg\,d\mu.$$ Thus $g$ represents $\Lambda$ on all of $L^p(\mu)$. [L2, step 1.1, step 3.1, given, choose]

5.1 If $h \in L^q(\mu)$ also represents $\Lambda$, then $h-g \in L^q(\mu)$ and $q<\infty$. By [L2], choose a sigma-finite measurable set $S$ such that $h-g=0$ almost everywhere on $X \setminus S$. The restrictions of $h$ and $g$ to $S$ represent the same bounded functional on the sigma-finite space $S$, so [L1] gives $h=g$ almost everywhere on $S$. Together with the choice of $S$, this proves $h=g$ almost everywhere on $X$. Finally [L3] gives $$\|\Lambda\|=\|g\|_q.$$ So the representing class is unique and has the correct norm. [L1, L2, L3, step 3.1, step 4.1, given, choose] ∎
