---
id: def-bounded-complexity-nilsequence-on-an-interval
kind: definition
title: "Bounded-complexity nilsequences on an interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
aliases: []
deps:
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-polynomial-sequence-on-a-filtered-group
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Conjecture 1.2, printed p. 1235, and Definition 4.1 / Conjecture 4.5, printed pp. 1242–1243."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142, author PDF"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf"
      locator: "Theorem 1.6.14, printed p. 128: bounded-complexity nilsequence inverse conclusion; the book points to Green–Tao–Ziegler for the proof."
---

## Definition

Fix integers \(s\ge0\) and \(N\ge1\), and write \([N]=\{1,\ldots,N\}\). A bounded-complexity parameter is a pair \((\mathcal M,C)\), where \(\mathcal M\) is a finite family of compact filtered nilmanifolds of degree at most \(s\), each equipped with a fixed smooth Riemannian metric, and \(C\ge1\). A \((\mathcal M,C)\)-bounded-complexity linear nilsequence on \([N]\) is a function \(\psi:[N]\to\mathbb C\) of the form

$$
\psi(n)=F(g^n x),\qquad 1\le n\le N,
$$

for some \(G/\Gamma\in\mathcal M\), \(g\in G\), \(x\in G/\Gamma\), and Lipschitz function \(F:G/\Gamma\to\mathbb C\) satisfying \(\|F\|_\infty\le1\) and \(\operatorname{Lip}(F)\le C\). A \((\mathcal M,C)\)-bounded-complexity polynomial nilsequence is a function of the form \(\psi(n)=F(u(n)\Gamma)\) with \(u\in\operatorname{poly}(\mathbb Z,G_\bullet)\) and the same bounds on \(F\). The inverse theorem's stated conclusion uses the linear form.

## Definition references

[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[[def-polynomial-sequence-on-a-filtered-group]]

[Green, Tao, and Ziegler, Conjecture 1.2 and Definition 4.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Tao, Higher Order Fourier Analysis, Theorem 1.6.14](https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf)

## Facts & Assumptions

**Given:** A filtered nilmanifold \(G/\Gamma\) of degree at most \(s\), a group element \(g\in G\), a point \(x=g_0\Gamma\), and a Lipschitz function \(F:G/\Gamma\to\mathbb C\).

[F1] A filtered nilpotent Lie group has \(G_0=G_1=G\), and its filtration subgroups satisfy \([G_i,G_j]\subseteq G_{i+j}\) ([[def-filtered-nilpotent-lie-group-and-nilmanifold]]).

[F2] A map \(u:\mathbb Z\to G\) is polynomial when every iterated right difference \(\partial_{h_m}\cdots\partial_{h_1}u(n)\), with \(\partial_hu(n)=u(n+h)u(n)^{-1}\), lies in \(G_m\) ([[def-polynomial-sequence-on-a-filtered-group]]).

## Proof

1.1 Put \(u(n)=g^n g_0\). For every integer \(h\), the right difference is
\(\partial_hu(n)=g^{n+h}g_0(g^n g_0)^{-1}=g^{n+h}g^{-n}=g^h\in G_1\), because \(G_1=G\) by [F1]. [given, F1, F2, algebra]

1.2 The first difference in step 1.1 is constant in \(n\), so its next right difference is the identity; every higher iterated difference is also the identity, which lies in every \(G_m\). Thus \(u\in\operatorname{poly}(\mathbb Z,G_\bullet)\) by [F2]. Since \(g^n x=g^n g_0\Gamma=u(n)\Gamma\), every linear nilsequence in the definition is also a polynomial nilsequence. [given, F1, F2, step 1.1, algebra] ∎
