---
id: thm-cycle-construction-formula
kind: theorem
title: "Over a commutative $\\mathbb{Q}$-algebra, $\\operatorname{CYC}(\\mathcal{A})$ has generating function $\\sum_{k\\ge 1}\\frac{\\varphi(k)}{k}\\log\\frac{1}{1-A(x^k)}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cycle-construction-of-a-combinatorial-class, lem-cyclic-rotation-fixed-tuples-are-periodic, thm-cauchy-frobenius-orbit-counting, def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n, def-formal-exponential-logarithm-and-powers, thm-formal-exponential-logarithm-identities]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ be a combinatorial class with no size-zero objects, and write

$$A(x) = \sum_{n \ge 1} a_n x^n.$$

Over a commutative $\mathbb{Q}$-algebra,

$$\operatorname{OGF}(\operatorname{CYC}(\mathcal{A})) = \sum_{k \ge 1}\frac{\varphi(k)}{k}\log\frac{1}{1-A(x^k)}.$$

## Facts & Assumptions

**Given:** A combinatorial class $\mathcal{A}$ with no size-zero objects and ordinary generating function $A(x)$.

[L1] Cauchy-Frobenius orbit counting: for a finite group action, $|G|\,|X/G| = \sum_{g \in G}|X^g|$ ([[thm-cauchy-frobenius-orbit-counting]]).

[L2] If $d=\gcd(m,r)$, then an $m$-tuple fixed by rotation by $r$ places is equivalently a repetition of one block of length $d$ ([[lem-cyclic-rotation-fixed-tuples-are-periodic]]).

[L3] For $k\ge1$, Euler's totient $\varphi(k)$ is the number of unit classes in $\mathbb Z/k$, and $[s]_k$ is a unit exactly when $\gcd(s,k)=1$ ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]]).

[L4] The formal logarithm is $\log(1+u) = \sum_{j \ge 1}(-1)^{j-1}u^j/j$ ([[def-formal-exponential-logarithm-and-powers]]).

## Proof

**Proof technique:** direct.

1.1 For each $m \ge 1$, let $\mathcal{C}_m$ be the class of cycles of length $m$. Since every object of $\mathcal{A}$ has positive size, an $m$-tuple of total size $n$ can use only entries of size at most $n$, so every size layer of $\mathcal{A}^m$ is finite. Applying [L1] degree by degree to the cyclic action of $C_m$ therefore gives $\operatorname{OGF}(\mathcal{C}_m) = (1/m)\sum_{r=0}^{m-1} F_{m,r}(x)$, where $F_{m,r}(x)$ is the generating function of the $m$-tuples fixed by rotation by $r$ places. [L1]

1.2 Put $d := \gcd(m,r)$ and $k := m/d$. By [L2], a tuple fixed by rotation by $r$ is obtained by repeating one block of length $d$. Each entry in that block is counted $k$ times in the full cycle, so the generating function of such fixed tuples is $F_{m,r}(x) = A(x^k)^d = A(x^{m/d})^d$. [L2]

2.1 Fix a divisor $k$ of $m$, and write $d=m/k$. The rotations with $m/\gcd(m,r)=k$ are exactly the integers $r=ds$ with $0 \le s < k$ and $\gcd(s,k)=1$, so [L3] shows that there are $\varphi(k)$ of them. Step 1.2 therefore gives $\operatorname{OGF}(\mathcal{C}_m) = (1/m)\sum_{k \mid m}\varphi(k)A(x^k)^{m/k}$. [step 1.2, L3, algebra]

3.1 Summing step 2.1 over all $m \ge 1$ and writing $m=dk$ yields $\operatorname{OGF}(\operatorname{CYC}(\mathcal{A})) = \sum_{k \ge 1}(\varphi(k)/k)\sum_{d \ge 1}A(x^k)^d/d$. Because $A(0)=0$, every degree receives contributions from only finitely many pairs $(k,d)$, so this regrouping is coefficientwise finite. [step 2.1, algebra]

4.1 Applying [L4] with $u=-A(x^k)$ gives $\sum_{d \ge 1}A(x^k)^d/d = \log(1/(1-A(x^k)))$. Substituting this into step 3.1 gives the stated cycle formula. [step 3.1, L4] ∎
