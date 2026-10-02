---
id: lem-irreducible-holomorphic-germ-is-prime
kind: lemma
title: "Irreducible holomorphic germs are prime"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-divisibility-and-associates-in-a-domain
  - def-invertible-element
  - def-irreducible-and-prime-elements-in-a-domain
  - def-unique-factorisation-domain
  - thm-holomorphic-germ-ring-is-a-ufd
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.4 unique factorisation of the germ ring (p. 182); §6.6–6.7 defining equations and decomposition (pp. 188–194)."
    - title: "Sharifi, Abstract Algebra, Advanced Ring Theory (unique factorisation domains)"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
      locator: "UFDs: irreducible elements are prime; uniqueness of factorisation."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge1$ and let $q\in\mathcal O_{\mathbb C^n,0}$ be an irreducible germ.
Then $q$ is prime: for all germs $a,b\in\mathcal O_{\mathbb C^n,0}$,

$$q\mid ab\quad\Longrightarrow\quad q\mid a\ \text{or}\ q\mid b .$$

Here divisibility and primality are the divisibility relation and the
irreducibility/prime conditions of
[[def-divisibility-and-associates-in-a-domain]] and
[[def-irreducible-and-prime-elements-in-a-domain]] in the integral domain
$\mathcal O_{\mathbb C^n,0}$.

## Facts & Assumptions

**Given:** An irreducible germ $q\in\mathcal O_{\mathbb C^n,0}$ and germs $a,b$ with $q\mid ab$.

[F1] $a\mid b$ means $b=ac$ for some $c$; associates are elements differing by a unit factor, and these notions are defined in any integral domain ([[def-divisibility-and-associates-in-a-domain]]). A nonzero nonunit $p$ is irreducible when every factorisation $p=uv$ has a unit factor, and prime when $p\mid ab$ implies $p\mid a$ or $p\mid b$ ([[def-irreducible-and-prime-elements-in-a-domain]]).

[F2] $\mathcal O_{\mathbb C^n,0}$ is a unique factorisation domain ([[thm-holomorphic-germ-ring-is-a-ufd]]): it is an integral domain, every nonzero nonunit is a finite product of irreducibles, and whenever $p_1\cdots p_r=q_1\cdots q_s$ are products of irreducibles, then $r=s$ and, after a permutation, $p_i$ is associate to $q_i$ ([[def-unique-factorisation-domain]]).

[F3] In a ring, units are invertible elements; a product of units is a unit, the inverse of a unit is a unit, and a product of a unit with a nonunit is a nonunit, since multiplying a purported inverse of the product by the unit inverse on the appropriate side would exhibit an inverse of the nonunit ([[def-invertible-element]]).



**Proof technique:** contradiction — factor all three germs and apply uniqueness of factorisation to locate the associate class of $q$.

## Proof

1.1 Assume $q\mid ab$, so that $ab=qc$ for some germ $c$, and suppose for contradiction that $q\nmid a$ and $q\nmid b$. [given, F1, assume-contra]

2.1 If $a=0$, then $a=q\cdot0$ gives $q\mid a$; similarly $b=0$ gives $q\mid b$. Both contradict the supposition of step 1.1, so $a\ne0$ and $b\ne0$, and then $c\ne0$ as well because $\mathcal O_{\mathbb C^n,0}$ is an integral domain by [F2]. [step 1.1, F1, F2]

2.2 If $a$ were a unit, then $b=q\,(ca^{-1})$ would give $q\mid b$, and if $b$ were a unit then $a=q\,(cb^{-1})$ would give $q\mid a$; both contradict step 1.1. Hence $a$ and $b$ are nonunits. [step 1.1, F1, F3]

3.1 The germ $c$ is a nonunit. If $c$ were a unit, then $q=a\cdot(bc^{-1})$ would be a factorisation of the irreducible germ $q$ into the nonunit $a$ and the nonunit $bc^{-1}$ — the latter because $b$ is a nonunit and $c^{-1}$ is a unit, so [F3] applies — contradicting irreducibility of $q$ in [F1]. [step 2.2, F1, F3]

4.1 By [F2] factor the nonzero nonunits $a,b,c$ of steps 2.1, 2.2 and 3.1 into irreducibles, say $a=u\,a_1\cdots a_r$, $b=v\,b_1\cdots b_s$ and $c=w\,c_1\cdots c_t$ with $u,v,w$ units and all displayed factors irreducible. Then $ab=uv\,a_1\cdots a_r b_1\cdots b_s$ and $qc=qw\,c_1\cdots c_t$ are equal, so the products of irreducibles $a_1\cdots a_r b_1\cdots b_s$ and $q c_1\cdots c_t$ differ by the unit $(uv)^{-1}w$. [step 2.1, step 3.1, F2]

5.1 Setting $q':=(uv)^{-1}wq$, the germ $q'$ is associate to $q$, hence irreducible, and step 4.1 gives the equality of products of irreducibles
$$a_1\cdots a_r b_1\cdots b_s=q' c_1\cdots c_t .$$
[step 4.1, F1, F3]

6.1 By the uniqueness clause of [F2] applied to the two products of step 5.1, the irreducible $q'$ is associate to one of the irreducibles $a_1,\dots,a_r,b_1,\dots,b_s$. [step 5.1, F2]

7.1 If $q'$ is associate to some $a_i$, then $q'\mid a_i$ and $a_i\mid a$ because $a_i$ is one of the factors of $a$, hence $q'\mid a$; since $q'$ is associate to $q$, also $q\mid a$, contradicting step 1.1. The same argument with some $b_j$ gives $q\mid b$, again contradicting step 1.1. Hence the supposition of step 1.1 is impossible, so $q\mid a$ or $q\mid b$; this proves that the irreducible germ $q$ is prime. [step 6.1, step 1.1, F1, discharge-contradiction] ∎
