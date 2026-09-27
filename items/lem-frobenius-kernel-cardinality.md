---
id: lem-frobenius-kernel-cardinality
kind: lemma
title: "Frobenius kernel cardinality"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-kernel-set, def-frobenius-complement-and-frobenius-group, def-normalizer-of-a-subgroup, thm-conjugate-subgroups-are-counted-by-the-normalizer, thm-lagrange, def-index, lem-centralizers-and-normalizers-are-subgroups]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$ and let
$N=\big(G\setminus\bigcup_{x\in G}xHx^{-1}\big)\cup\{1\}$ be its kernel set. Then

$$|N|=[G:H],\qquad N\cap H=\{1\}.$$

## Facts & Assumptions

**Given:** A finite group $G$, a Frobenius complement $\{1\}<H<G$, and the kernel set $N=\big(G\setminus\bigcup_{x\in G}xHx^{-1}\big)\cup\{1\}$.

[F1] An element $g$ lies in $N$ exactly when $g=1$ or $g\notin xHx^{-1}$ for every $x\in G$ ([[def-frobenius-kernel-set]]).

[F2] $H\cap gHg^{-1}=\{1\}$ for every $g\notin H$, and $\{1\}<H<G$ ([[def-frobenius-complement-and-frobenius-group]]).

[F3] $N_G(H)=\{g\in G:gHg^{-1}=H\}$ is a subgroup of $G$ containing $H$ ([[def-normalizer-of-a-subgroup]], [[lem-centralizers-and-normalizers-are-subgroups]]).

[F4] The rule $gN_G(H)\mapsto gHg^{-1}$ is a well-defined bijection $G/N_G(H)\to\{gHg^{-1}:g\in G\}$; for finite $G$ the number of distinct conjugates of $H$ is $[G:N_G(H)]$ ([[thm-conjugate-subgroups-are-counted-by-the-normalizer]]).

[F5] For a finite group $G$ and $H\le G$ one has $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[F6] $[G:H]$ is the cardinality of the left coset set $G/H$ ([[def-index]]).

## Proof

**Proof technique:** direct.

1.1 One has $N_G(H)=H$. In one direction $H\subseteq N_G(H)$, since $hHh^{-1}=H$ for $h\in H$. Conversely let $g\in N_G(H)$; then $gHg^{-1}=H$ and hence $H=H\cap gHg^{-1}$. If $g\notin H$ then [F2] makes this intersection $\{1\}$, contradicting $\{1\}<H$; so $g\in H$. [F2, F3, given]

1.2 Nonidentity elements of distinct conjugates do not overlap: if $1\ne y\in xHx^{-1}\cap zHz^{-1}$ for some $x,z\in G$, then $y=xux^{-1}=zvz^{-1}$ for some $u,v\in H$, whence $u=x^{-1}zvz^{-1}x=(x^{-1}z)v(x^{-1}z)^{-1}\in H\cap sHs^{-1}$ with $s=x^{-1}z$. Since $u\ne1$, [F2] forces $s\in H$, that is $z\in xH$, and then $zHz^{-1}=xHx^{-1}$. [F2, algebra]

2.1 Consequently the distinct subgroups of the form $xHx^{-1}$ are in bijection with the left cosets of $H$, so there are exactly $[G:H]$ of them: [F4] identifies the set of conjugates with $G/N_G(H)$, and step 1.1 together with [F6] identifies the cardinality of that coset space with $[G:H]$. [F3, F4, F6, step 1.1]

3.1 Every conjugate $xHx^{-1}$ has exactly $|H|$ elements, and by step 1.2 each nonidentity element of the union $\bigcup_{x\in G}xHx^{-1}$ lies in exactly one of the conjugates; the element $1$ lies in all of them. Hence the union has $1+[G:H]\,(|H|-1)$ elements. [step 2.1, step 1.2, algebra]

4.1 Therefore $|N|=|G|-\big(1+[G:H](|H|-1)\big)+1=|G|-[G:H](|H|-1)$, and Lagrange's identity $|G|=[G:H]\,|H|$ of [F5] turns this into $|N|=[G:H]\,|H|-[G:H]\,|H|+[G:H]=[G:H]$. [F1, F5, step 3.1, algebra]

5.1 Finally $N\cap H=\{1\}$: the identity lies in both sets, while a nonidentity element $h\in H$ lies in the conjugate $1H1^{-1}=H$, so by the description [F1] of $N$ it is not an element of $N$. ∎ [F1, given]
