---
id: thm-integrality-commutes-with-localisation
kind: theorem
title: "Integrality and integral closure commute with localisation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-ring-extension, def-integral-closure-and-integrally-closed-domain, def-multiplicative-subset-and-localisation, thm-localisation-equivalence-and-ring-laws, prop-localisation-zero-equality-and-kernel-criteria]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (10.31)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 6.14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $A \to B$ be a homomorphism of commutative rings, let $S \subseteq A$ be multiplicative, and let $b \in B$.

1. If $b$ is integral over $A$, then $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$.
2. If $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$, then some $s \in S$ makes $sb$ integral over $A$.

If $A$ is a domain, $S \subseteq A \setminus \{0\}$, $K$ is a field extension of $\operatorname{Frac}(A)$, and $\overline A$ is the integral closure of $A$ in $K$, then the integral closure of $S^{-1}A$ in $K$ is exactly $S^{-1}\overline A$.

## Facts & Assumptions

**Given:** A ring map $A \to B$, a multiplicative subset $S \subseteq A$, and an element $b \in B$.

[L1] An element is integral over a ring exactly when it satisfies a monic polynomial with coefficients in that ring ([[def-integral-ring-extension]]).

[L2] The integral closure of a domain in a field is the set of elements integral over the domain ([[def-integral-closure-and-integrally-closed-domain]]).

[L3] Localisation uses fractions with the usual ring laws ([[thm-localisation-equivalence-and-ring-laws]]).

[L4] A fraction $r/s$ is zero in a localisation exactly when some denominator annihilates $r$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

## Proof

**Proof technique:** direct.

1.1 If $b$ satisfies $b^n+a_{n-1}b^{n-1}+\cdots+a_0=0$ with $a_i\in A$, then the same identity in $S^{-1}B$ reads $(b/1)^n+(a_{n-1}/1)(b/1)^{n-1}+\cdots+a_0/1=0$. By [L1], this makes $b/1$ integral over $S^{-1}A$. [L1, L3, given]

1.2 Conversely, assume $b/1$ is integral over $S^{-1}A$. Choose a monic relation $(b/1)^n+(a_{n-1}/s_{n-1})(b/1)^{n-1}+\cdots+a_0/s_0=0$ with $a_i\in A$ and $s_i\in S$. Let $t:=s_0\cdots s_{n-1}$ and put $y:=tb$. Multiplying the relation by $t^n$ gives $(y/1)^n+c_{n-1}(y/1)^{n-1}+\cdots+c_0/1=0$ with each $c_i\in A$. Hence [L4] gives some $u\in S$ with $u(y^n+c_{n-1}y^{n-1}+\cdots+c_0)=0$ in $B$. For $s:=ut$ and $z:=sb=uy$, multiplying that equation by $u^{n-1}$ yields $z^n+c_{n-1}u z^{n-1}+\cdots+c_0u^n=0$, a monic equation over $A$. So $sb$ is integral over $A$. [L1, L3, L4, given, algebra]

2.1 Now assume $A$ is a domain, $S \subseteq A\setminus\{0\}$, $K/\operatorname{Frac}(A)$ is a field extension, and $\overline A$ is the integral closure of $A$ in $K$. If $x=a/s$ with $a\in\overline A$ and $s\in S$, then $a$ is integral over $A$, so step 1.1 makes $x$ integral over $S^{-1}A$. [L1, L2, step 1.1]

3.1 Conversely, let $x\in K$ be integral over $S^{-1}A$. Step 1.2 gives $s\in S$ with $sx$ integral over $A$, so [L2] gives $sx\in\overline A$. Therefore $x=(sx)/s\in S^{-1}\overline A$. Combining this with step 2.1 proves that the integral closure of $S^{-1}A$ in $K$ is exactly $S^{-1}\overline A$. [L2, step 1.2, step 2.1] ∎
