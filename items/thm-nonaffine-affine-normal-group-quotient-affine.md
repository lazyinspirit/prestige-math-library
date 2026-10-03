---
id: thm-nonaffine-affine-normal-group-quotient-affine
kind: theorem
title: "Quotients of affine group schemes by normal subgroup schemes are affine"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-normal-subgroup-kernel-of-representation, thm-nonaffine-group-scheme-normal-subgroup-quotient, lem-nonaffine-group-monomorphism-closed-immersion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 5.18, p.103"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume AC. Let $k$ be any field, $G$ an affine finite-type $k$-group scheme and $N\subseteq G$ a closed normal subgroup scheme. The represented fppf quotient $G/N$ is an affine finite-type $k$-group scheme. Its projection is faithfully flat of finite presentation, has scheme-theoretic kernel $N$, and is an $N$-torsor. Neither $G$ nor $N$ is assumed smooth or reduced.

## Facts & Assumptions

[F1] Every closed normal subgroup scheme of an affine finite-type group scheme over an arbitrary field is the exact scheme-theoretic kernel of a finite-dimensional representation. ([[lem-nonaffine-normal-subgroup-kernel-of-representation]])

[F2] The fppf coset sheaf of a separated finite-type group scheme by a closed normal subgroup is represented by a separated finite-type group scheme; its projection is a faithfully flat finitely presented torsor with the stated kernel, and every homomorphism killing the subgroup factors through it. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]])

[F3] A homomorphism of separated finite-type group schemes with trivial scheme-theoretic kernel is a closed immersion. ([[lem-nonaffine-group-monomorphism-closed-immersion]])

## Proof

**Given:** AC, $k,G,N$ as in the statement.

1.1 Choose by [F1] a representation $\rho:G\to\operatorname{GL}(E)$ with exact kernel $N$. By [F2], the quotient $Q=G/N$ and projection $q:G\to Q$ exist with all the stated torsor and flatness properties. Its universal property gives a homomorphism $\bar\rho:Q\to\operatorname{GL}(E)$ with $\rho=\bar\rho q$. For every test scheme $T$ and every $x\in Q(T)$ in the kernel of $\bar\rho$, there is an fppf cover $T'\to T$ on which $x$ lifts to $g\in G(T')$: use the pullback of the quotient torsor itself as that cover. The equality $\bar\rho(x)=1$ gives $\rho(g)=1$, so $g\in N(T')$ by the exact kernel assertion of [F1]. Therefore $x|_{T'}=q(g)=1$. Since a represented fppf sheaf detects equality on covers, $x=1$. Thus $\bar\rho$ has trivial scheme-theoretic kernel. [F1, F2, given, construct, algebra]

2.1 Apply [F3] to $\bar\rho$: $Q$ and $\operatorname{GL}(E)$ are separated finite-type group schemes, so $Q\hookrightarrow\operatorname{GL}(E)$ is a closed immersion. In a basis of $E$, the target is the affine scheme with ring $k[t_{ij},1/\det(t_{ij})]$. A closed subscheme of an affine scheme is affine, with coordinate ring the corresponding quotient ring, proving that $G/N$ is affine. The remaining claims were obtained from [F2] in step 1.1. This proof uses the represented fppf quotient and an exact representation kernel; it makes no faithful-flatness assumption about an inclusion of Hopf algebras. AC is inherited from [F1]–[F3]. [F2, F3, step 1.1, algebra] ∎
