---
id: lem-depth-at-a-prime-bounded-by-local-dimension
title: Depth at a prime is bounded by local support dimension
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-depth-with-respect-to-an-ideal, def-regular-sequence-on-a-module, thm-dimension-and-parameters-for-modules, thm-support-and-annihilator-of-a-finite-module, thm-radical-as-intersection-of-primes, cor-radical-ideal-has-finitely-many-minimal-primes-noetherian, thm-nakayama-lemma]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be Noetherian, let $M$ be finite, and let
$\mathfrak p\in\operatorname{Supp}_R(M)$. Then
$$\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p) \le \dim\operatorname{Supp}_{R_\mathfrak p}(M_\mathfrak p).$$

## Facts & Assumptions

**Given:** The Axiom of Choice; $M_\mathfrak p$ is a nonzero finite module over the Noetherian local ring $R_\mathfrak p$.

[L1] A finite module has support $V(\operatorname{Ann}N)$, and under Choice a radical ideal is the intersection of its containing primes ([[thm-support-and-annihilator-of-a-finite-module]], [[thm-radical-as-intersection-of-primes]]).

[L2] In a Noetherian ring under the assumed AC, the radical of an ideal is the finite intersection of its minimal primes ([[cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]]).

[L3] Under AC, Nakayama shows that a nonzero finite local module remains nonzero after quotienting by an ideal in its maximal ideal ([[thm-nakayama-lemma]]).

[L4] The dimension of a nonzero finite local module is finite and equals the least length of a tuple in the maximal ideal making its quotient finite length ([[thm-dimension-and-parameters-for-modules]]).

[L5] Depth is the supremum of lengths of regular sequences in the maximal ideal, and each successive quotient of such a sequence is nonzero ([[def-depth-with-respect-to-an-ideal]], [[def-regular-sequence-on-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Put $A=R_{\mathfrak p}$. Let $N$ be a nonzero finite $A$-module and let $x$ lie in the maximal ideal and act injectively on $N$. By [L3], $N/xN\ne0$. Localization and [L3] give $\operatorname{Supp}_A(N/xN)=\operatorname{Supp}_A(N)\cap V_A(x)$: outside $V(x)$ the quotient is zero, while at a support prime containing $x$ its localized nonzero finite module cannot equal its $x$-multiple. [L1, L3, given]

2.1 Let $\mathfrak q$ be minimal in $\operatorname{Supp}_A(N)$. By [L1], it is minimal over $\operatorname{Ann}_A(N)$. In $A_{\mathfrak q}$ the only support prime of $N_{\mathfrak q}$ is $\mathfrak qA_{\mathfrak q}$; [L1] therefore makes $\sqrt{\operatorname{Ann}(N_{\mathfrak q})}=\mathfrak qA_{\mathfrak q}$. This maximal ideal is finitely generated, so some power annihilates $N_{\mathfrak q}$. If $x\in\mathfrak q$, a power of multiplication by $x$ would be zero on the nonzero module $N_{\mathfrak q}$, contradicting injectivity after localization. Hence no minimal support prime contains $x$. [L1, step 1.1, algebra]

3.1 Take any strict chain $\mathfrak r_0\subsetneq\cdots\subsetneq\mathfrak r_s$ in $\operatorname{Supp}_A(N/xN)$. Since $\mathfrak r_0$ contains $\operatorname{Ann}N$, the finite minimal-prime decomposition [L2] gives a minimal support prime $\mathfrak q\subseteq\mathfrak r_0$. Because $x\in\mathfrak r_0$ but $x\notin\mathfrak q$ by step 2.1, this inclusion is strict. Prepending $\mathfrak q$ gives a chain of length $s+1$ in $\operatorname{Supp}_A(N)$. Thus $\dim\operatorname{Supp}_A(N/xN)\le\dim\operatorname{Supp}_A(N)-1$. [L1, L2, step 1.1, step 2.1]

4.1 Conversely, by [L4] choose a parameter tuple of length $e=\dim\operatorname{Supp}_A(N/xN)$ for $N/xN$. Prepend $x$. The resulting quotient of $N$ is the same finite-length module, so [L4] gives $\dim\operatorname{Supp}_A(N)\le e+1$. Together with step 3.1, this shows that quotienting by an $N$-regular element in the maximal ideal lowers support dimension by exactly one. [L4, step 3.1, algebra]

5.1 Starting with $M_{\mathfrak p}$, take any regular sequence of length $r$ in the maximal ideal. Its successive quotients are nonzero by [L5], so step 4.1 applies $r$ times and shows $r\le\dim\operatorname{Supp}_A(M_{\mathfrak p})$. Taking the supremum over all regular sequences, exactly as depth is defined in [L5], proves the inequality. If the dimension is zero, only the empty regular sequence can occur, and both sides are zero. [L5, step 4.1] ∎
