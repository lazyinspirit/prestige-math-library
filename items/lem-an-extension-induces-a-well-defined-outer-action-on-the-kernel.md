---
id: lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel
kind: lemma
title: "A group extension induces a well-defined outer action on its kernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient, def-outer-automorphism-group, thm-conjugation-is-an-automorphism]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups. II. Group Extensions with a non-Abelian Kernel"
      url: "https://dokumen.pub/eilenberg-mac-lane-collected-works-0122340205-9780122340208.html"
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Every group extension

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1$$

determines a homomorphism

$$\omega_E:Q\to\operatorname{Out}(N)$$

that depends only on the extension up to equivalence with fixed kernel and fixed
quotient.

## Facts & Assumptions

**Given:** The displayed group extension.

[L1] The outer automorphism group is the quotient $\operatorname{Aut}(N)/\operatorname{Inn}(N)$
([[def-outer-automorphism-group]]).

[L2] Conjugation by an element of a group is an automorphism
([[thm-conjugation-is-an-automorphism]]).

[L3] Equivalence of extensions fixes the chosen copies of the kernel and
quotient ([[def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]]).

## Proof

**Proof technique:** direct.

1.1 For $q\in Q$, choose $x\in E$ with $\pi(x)=q$. Since $i(N)=\ker\pi$ is normal, conjugation by $x$ restricts to an automorphism of $i(N)$, hence of $N$, by [L2]. Let $\omega_E(q)$ be its class in $\operatorname{Out}(N)$ from [L1]. [given, L1, L2, choose]

1.2 If $x'=xi(n)$ is another lift of $q$, then for $m\in N$,
$$x'i(m)x'^{-1}=x\,i(nmn^{-1})\,x^{-1}.$$
Thus the automorphism from $x'$ differs from the automorphism from $x$ by the inner automorphism of $N$ defined by $n$. So step 1.1 is independent of the chosen lift as an element of $\operatorname{Out}(N)$. [L1, step 1.1, algebra]

2.1 If $q_1,q_2\in Q$ are lifted by $x_1,x_2\in E$, then $x_1x_2$ lifts $q_1q_2$, and conjugation by $x_1x_2$ is the composite of conjugation by $x_1$ and by $x_2$. Passing to classes modulo inner automorphisms with [L1], $\omega_E(q_1q_2)=\omega_E(q_1)\omega_E(q_2)$. So $\omega_E$ is a homomorphism. [L1, step 1.2, algebra]

3.1 If $\varphi:E\to E'$ is an equivalence of extensions as in [L3], then $\varphi$ identifies the chosen copy of $N$ with itself and carries lifts of $q$ in $E$ to lifts of $q$ in $E'$. Therefore the conjugation automorphisms correspond and define the same class in $\operatorname{Out}(N)$. Hence $\omega_E$ depends only on the extension class. [L3, step 1.1, step 2.1] ∎
